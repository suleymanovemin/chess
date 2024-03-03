import { DragPreviewImage, useDrag } from "react-dnd";
const SquareBoard = ({ brd, positionCntrl }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "chess",
    item: { id: `${positionCntrl}_${brd.type}_${brd.color}` },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag}>
      <DragPreviewImage
        connect={preview}
        src={`../../public/assets/images/${brd.type}_${brd.color}.svg`}
      />
      <img
        className="w-[50px]"
        src={`../../public/assets/images/${brd.type}_${brd.color}.svg`}
      />
    </div>
  );
};

export default SquareBoard;
