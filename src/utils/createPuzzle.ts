export const createPuzzle = (initialRows: number, initialColumns: number) => {
  const puzzleBoard: number[][] = [];
  for (let rowIndex = 0; rowIndex < initialRows; rowIndex++) {
    const row: number[] = [];
    for (let colIndex = 0; colIndex < initialColumns; colIndex++) {
      row.push(rowIndex * initialColumns + colIndex);
    }
    puzzleBoard.push(row);
  }
  return puzzleBoard;
};
