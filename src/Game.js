import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

const subjectGame = new BehaviorSubject();

export const initGame = () => {
  updateGame();
};

export default subjectGame;

export const move = (from, to) => {
  const moveOperation = chess.move({ from, to });
  if (moveOperation) {
    updateGame();
  }
};
export const resetGame = () => {
    chess.reset();
    updateGame();
  };
const updateGame = () => {
  const isGameOver = chess.isGameOver();
  subjectGame.next({
    chess: chess.board(),
    isGameOver,
    result: isGameOver ? getGameResult() : null,
  });
};

const getGameResult = () => {
  if (chess.isCheckmate()) {
    const winner = chess.turn() === "w" ? "Black" : "White";
    return "ŞAH MAT - Qazanan : " + winner;
  } else if (chess.isDraw()) {
    let reason = "50 Hərəkət qaydası";
    if (chess.isStalemate()) {
      return "Çıxılmaz dövr";
    } else if (chess.isThreefoldRepetition()) {
      reason = "3 Hərəkət qaydası";
    } else if (chess.isInsufficientMaterial()) {
      reason = "Yetərsiz material";
    }
    return reason;
  } else {
    return null;
  }
};
