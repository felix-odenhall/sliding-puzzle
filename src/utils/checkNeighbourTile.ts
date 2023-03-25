import { canMove } from "./index";

export const checkNeighbourTile = (
  rowIndex: number,
  colIndex: number,
  board: number[][],
  setBoard: (arr: number[][]) => void
) => {
  const checkTopTile = rowIndex > 0 ? board[rowIndex - 1][colIndex] : null;
  const checkBottomTile =
    rowIndex < board.length - 1 ? board[rowIndex + 1][colIndex] : null;
  const checkLeftTile = colIndex > 0 ? board[rowIndex][colIndex - 1] : null;
  const checkRightTile =
    colIndex < board[rowIndex].length - 1
      ? board[rowIndex][colIndex + 1]
      : null;
  canMove(
    board,
    setBoard,
    checkTopTile,
    checkBottomTile,
    checkLeftTile,
    checkRightTile,
    rowIndex,
    colIndex
  );
};
