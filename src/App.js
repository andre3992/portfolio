import React from "react";
import "./App.css";
import ThreeInARow from "./gameThreeInARow/threeInARow";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./form/ContactForm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ThreeInARow></ThreeInARow>
      <ContactForm></ContactForm>
      </header>
    </div>
  );
}

export default App;
