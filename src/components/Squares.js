function Squares({ value, setSquaresValue }) {
  return (
    <button
      onClick={setSquaresValue}
      style={{
        color: value ? "#61dafb" : "#282c34",
      }}
    >
      {value || "-"}
    </button>
  );
}

export default Squares;
