export const canMove = (
  board: number[][],
  setBoard: (arr: number[][]) => void,
  topTile: number | null,
  bottomTile: number | null,
  leftTile: number | null,
  rightTile: number | null,
  rowIndex: number,
  colIndex: number
) => {
  if (topTile === 0) {
    board[rowIndex - 1][colIndex] = board[rowIndex][colIndex];
    board[rowIndex][colIndex] = 0;
    setBoard([...board]);
  }
  if (bottomTile === 0) {
    board[rowIndex + 1][colIndex] = board[rowIndex][colIndex];
    board[rowIndex][colIndex] = 0;
    setBoard([...board]);
  }
  if (leftTile === 0) {
    board[rowIndex][colIndex - 1] = board[rowIndex][colIndex];
    board[rowIndex][colIndex] = 0;
    setBoard([...board]);
  }
  if (rightTile === 0) {
    board[rowIndex][colIndex + 1] = board[rowIndex][colIndex];
    board[rowIndex][colIndex] = 0;
    setBoard([...board]);
  }
};
