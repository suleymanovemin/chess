import Square from "./Square";
import SquareBoard from "./SquareBoard";

const Board = ({ board }) => {
  const colorCntrl = (i) => {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return (x + y) % 2 === 0;
  };

  const positionCntrl = (i) => {
    const x = i % 8;
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    const y = Math.abs(Math.floor(i / 8) - 7);
    return `${letters}${y + 1}`;
  };
  return (
    <div className="h-[640px] w-[640px] bg-green-500 flex flex-wrap">
      {board.flat().map((brd, i) => (
        <Square key={i} colorValue={colorCntrl(i)} positionCntrl={positionCntrl(i)}>
          {brd && <SquareBoard positionCntrl={positionCntrl(i)} brd={brd} />}
        </Square>
      ))}
    </div>
  );
};

export default Board;
