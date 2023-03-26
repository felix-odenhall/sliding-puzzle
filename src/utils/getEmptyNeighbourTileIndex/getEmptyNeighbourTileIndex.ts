export const getEmptyNeighbourTileIndex = (
  rowIndex: number,
  colIndex: number,
  board: number[][]
) => {
  // Check the number of a tile above, under, left or right of the clicked tile
  const checkTileAbove = rowIndex > 0 ? board[rowIndex - 1][colIndex] : null;
  const checkTileBelow =
    rowIndex < board.length - 1 ? board[rowIndex + 1][colIndex] : null;
  const checkTileToLeft = colIndex > 0 ? board[rowIndex][colIndex - 1] : null;
  const checkTileToRight =
    colIndex < board[rowIndex].length - 1
      ? board[rowIndex][colIndex + 1]
      : null;

  // If the tile above, under, left or right of the clicked tile is empty, return its row and column index
  if (checkTileAbove === 0) {
    return { emptyRow: rowIndex - 1, emptyCol: colIndex };
  }
  if (checkTileBelow === 0) {
    return { emptyRow: rowIndex + 1, emptyCol: colIndex };
  }
  if (checkTileToLeft === 0) {
    return { emptyRow: rowIndex, emptyCol: colIndex - 1 };
  }
  if (checkTileToRight === 0) {
    return { emptyRow: rowIndex, emptyCol: colIndex + 1 };
  }
  return null;
};
