interface Neighbors {
  top: number | null;
  bottom: number | null;
  left: number | null;
  right: number | null;
}

export const getNeighbors = (
  rowIndex: number,
  colIndex: number,
  puzzleBoard: number[][]
): Neighbors => {
  const top = rowIndex > 0 ? puzzleBoard[rowIndex - 1][colIndex] : null;
  const bottom =
    rowIndex < puzzleBoard.length - 1
      ? puzzleBoard[rowIndex + 1][colIndex]
      : null;
  const left = colIndex > 0 ? puzzleBoard[rowIndex][colIndex - 1] : null;
  const right =
    colIndex < puzzleBoard[0].length - 1
      ? puzzleBoard[rowIndex][colIndex + 1]
      : null;

  return { top, bottom, left, right };
};
