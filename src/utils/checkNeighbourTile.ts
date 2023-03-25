export const checkNeighbourTile = (
  rowIndex: number,
  colIndex: number,
  board: number[][]
) => {
  const checkTopTile = rowIndex > 0 ? board[rowIndex - 1][colIndex] : null;
  const checkBottomTile =
    rowIndex < board.length - 1 ? board[rowIndex + 1][colIndex] : null;
  const checkLeftTile = colIndex > 0 ? board[rowIndex][colIndex - 1] : null;
  const checkRightTile =
    colIndex < board[rowIndex].length - 1
      ? board[rowIndex][colIndex + 1]
      : null;
  if (checkTopTile === 0) {
    return { emptyRow: rowIndex - 1, emptyCol: colIndex };
  }
  if (checkBottomTile === 0) {
    return { emptyRow: rowIndex + 1, emptyCol: colIndex };
  }
  if (checkLeftTile === 0) {
    return { emptyRow: rowIndex, emptyCol: colIndex - 1 };
  }
  if (checkRightTile === 0) {
    return { emptyRow: rowIndex, emptyCol: colIndex + 1 };
  }
  return null;
};
