import Board from "./Board";
import { useState } from "react";
import { calculateWinner } from "../helper";

const style = {
  width: "200px",
  margin: "20px auto",
};

const styleButton = {
  width: "200px",
  padding: "10px 20px",
  border: "2px solid #000",
  borderRadius: "5px",
  outline: "none",
  letterSpacing: "0",
  fontSize: "16px",
  marginTop: "12px",
  wordSpacing: "3px",
  backgroundColor: "#fff",
};

const styleText = {
  textAlign: "center",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button style={styleButton} onClick={() => setBoard(Array(9).fill(null))}>
        Start Game
      </button>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p style={styleText}>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
