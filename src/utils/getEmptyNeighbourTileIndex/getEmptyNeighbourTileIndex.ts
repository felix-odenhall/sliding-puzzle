export const getEmptyNeighbourTileIndex = (
  rowIndex: number,
  colIndex: number,
  board: number[][]
) => {
  // Check the number of a tile above, under, left or right of the clicked tile
  const checkAboveTile = rowIndex > 0 ? board[rowIndex - 1][colIndex] : null;
  const checkBelowTile =
    rowIndex < board.length - 1 ? board[rowIndex + 1][colIndex] : null;
  const checkLeftTile = colIndex > 0 ? board[rowIndex][colIndex - 1] : null;
  const checkRightTile =
    colIndex < board[rowIndex].length - 1
      ? board[rowIndex][colIndex + 1]
      : null;

  // If the tile above, under, left or right of the clicked tile is empty, return its row and column index
  if (checkAboveTile === 0) {
    return { emptyRow: rowIndex - 1, emptyCol: colIndex };
  }
  if (checkBelowTile === 0) {
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
