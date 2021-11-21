const style = {
  background: "black",
  broder: "3px solid white",
  color: "white",
  fontSize: "80px",
  fontWight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ onClick, value }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
