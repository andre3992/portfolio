import React from "react";
import "./threeInARow.css";
import checkWinner from "./gamelogic";
import "./modals/winnerModal.css";
import ModalWinner from "./modals/winnerModal"

class ThreeInARow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: true,
      player2: false,
      gameBoard: ["", "", "", "", "", "", "", "", ""],
      winner:false
    };
  }

  played = (index) => {
    let board = this.state.gameBoard;
    if (board[index] === "") {
      if (this.state.player1 === true) {
        board[index] = "X";
        this.setState({ player1: false, player2: true });
        this.setState({ gameBoard: board });
        this.setState({winner:checkWinner(board)})
        return;
      } else if (this.state.player2 === true) {
        board[index] = "O";
        this.setState({ player1: true, player2: false });
        this.setState({ gameBoard: board });
        checkWinner(board);
        return;
      }
    }
    return board;
  };

  showModal = () => {
    this.setState({ winner: true });
  }
  
  hideModal = () => {
    this.setState({ winner: false });
  }
  whoWon(player1){
    if(player1){
      return <p>Congratulation Player 1!!!</p>
    } else{
       return <p>Congratulation Player 2!!!</p>
    }
  }

  render() {
    return (
      <>
      <main>
        <ModalWinner winner={this.state.winner} handleClose={this.hideModal} whoWon={this.whoWon} player1={this.state.player1}  >
        </ModalWinner>
      </main>
      <div className="board">
          {this.state.gameBoard.map((value, index) => (
          <div class="board-item" onClick={() => this.played(index)}>
            {value}
          </div>
        ))}
      </div>
      </>
    );
  }
}

export default ThreeInARow;
