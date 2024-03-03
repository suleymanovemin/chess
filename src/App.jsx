import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Components/Board";
import subjectGame, { initGame, resetGame } from "./Game";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    initGame();
    const subscribe = subjectGame.subscribe((sub) => {
      setBoard(sub.chess);
      setIsGameOver(sub.isGameOver);
      setResult(sub.result);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="bg-black h-screen relative flex items-center justify-center">
          {isGameOver && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-gray-400 rounded opacity-95 p-10 text-black flex flex-col items-center justify-center">
               <h1 className="text-4xl font-bold">Oyun Bitdi!!!</h1>
              {result && <div className="text-xl mt-3">{result}</div>}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                onClick={() => resetGame()}
              >
                Yenidən Oyna
              </button>
            </div>
          )}
          <Board board={board} />
        </div>
      </DndProvider>
    </>
  );
}

export default App;
