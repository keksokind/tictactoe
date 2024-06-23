import Squares from "./Squares";
import { useState } from "react";

function Fields() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);
  let turn = `Turn - ${isNextX ? "x" : "o"}`;
  let winIs = false;
  let win = null;

  const winner = () => {
    const winCom = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let comb of winCom) {
      let [a, b, c] = comb;
      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        winIs = true;
        return square[a];
      }
    }
    return null;
  };

  const setSquaresValue = (i) => {
    let newSquare = square.slice();
    newSquare[i] = isNextX ? "x" : "o";
    setIsNextX(!isNextX);
    setSquare(newSquare);
  };
  win = winner();
  if (win) turn = `Winner - ${win}`;

  return (
    <div>
      <h1>{turn}</h1>
      {square.map((squares, index) => {
        return (
          <span key={index}>
            <Squares
              value={squares}
              setSquaresValue={() => setSquaresValue(index)}
            />
            {index === 2 || index === 5 ? <br /> : null}
          </span>
        );
      })}
    </div>
  );
}

export default Fields;
