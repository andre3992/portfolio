import React from "react";
import "./winnerModal"

const ModalWinner = ({ handleClose, winner, children,whoWon,player1 }) => {
  const showHideClassName = winner ? "modalWinner display-block" : "modalWinner display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
       {whoWon(player1)}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default ModalWinner;


