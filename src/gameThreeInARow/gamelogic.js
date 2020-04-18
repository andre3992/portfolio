const checkWinner = board => {
    if (
        (board[0] === board[1]) & (board[1] === board[2] & board[0] !== "") ||
        (board[3] === board[4]) & (board[4] === board[5] & board[3] !== "") ||
        (board[6] === board[7]) & (board[7] === board[8] & board[6] !== "") ||
        (board[0] === board[3]) & (board[3] === board[6] & board[0] !== "") ||
        (board[1] === board[4]) & (board[4] === board[7] & board[1] !== "") ||
        (board[2] === board[5]) & (board[5] === board[8] & board[2] !== "") ||
        (board[0] === board[4]) & (board[4] === board[8] & board[0] !== "") ||
        (board[2] === board[4]) & (board[4] === board[6] & board[2] !== "")
    ) {
        return true;
    }
    return false;
};

export const checkPlayer = (player1, player2) => {
    if (player1 === true) {
        player1 = false;
        player2 = true;
    } else player1 = true;
    player2 = false;
};

export default checkWinner