import { useDrop } from "react-dnd"
import { move } from "../Game";

const Square = ({ children, colorValue, positionCntrl }) => {
  const [,drop] = useDrop(() => ({
    accept: "chess",
    drop: (item) => {
      const [fromPostion] = item.id.split("_")
      move(fromPostion, positionCntrl)
    },
  }))
  return (

    <div
      ref={drop}
      className={`${
        colorValue ? "bg-green-800" : "bg-white"
      }  w-[80px] h-[80px] flex items-center justify-center cursor-pointer active:cursor-grab`} 
    >
      {children}
    </div>
  );
};

export default Square;
