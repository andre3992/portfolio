import React from 'react';
import axios from 'axios';
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('../backend/config');
class ContactForm extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"https://loving-hamilton-296054.netlify.app/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: "", email: "", message: ""})
  }
  
  render() {
	return(
  	<div className="App">
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	<div className="form-group">
      	<label htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">Email address</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="message">Message</label>
      	<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	</div>
  	<button type="submit" className="btn btn-primary">Submit</button>
  	</form>
  	</div>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}
const transport = {
    host: "smtp.office365.com", // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    }
  }
  
  const transporter = nodemailer.createTransport(transport);
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });
  
    exports.handler = router.post("/send",(req, res, next) => {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;
      const content = `name: ${name} \n email: ${email} \n message: ${message} `;
  
      const mail = {
        from: name,
        to: "andre.regedor@hotmail.com", // Change to email address that you want to receive messages on
        subject: "New Message from Contact Form",
        text: content,
      };
  
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: "fail",
          });
        } else {
          res.json({
            status: "success",
          });
        }
      });
    });
  
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/", router);
  app.listen(3002);


export default ContactForm;