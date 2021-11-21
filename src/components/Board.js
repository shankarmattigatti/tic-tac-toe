import Square from "./Square";

const style = {
  broder: "4px solid darkblue",
  borderRadius: "10px",
  width: "460px",
  height: "460px",
  margin: "10px auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
