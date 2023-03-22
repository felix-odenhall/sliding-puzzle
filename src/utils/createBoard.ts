import { board } from "../constants/gameData";

// Create the game board by taking rows and columns (what ever number it is)
// This will create a 2D array, for me this is needed to be able to find the coordinates
// of each button/div
export const createBoard = (rows: number, columns: number) => {
  // looping through and adding rows to the board, based on the rows given
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    board[rowIndex] = [];
    // it has to be nested for me to be able to add rows
    for (let colIndex = 0; colIndex < columns; colIndex++) {
      // adding rowIndex * columsn + colindex, lets me create numbers for each button/div,
      // based on the amount of rows and columns that were added.
      board[rowIndex][colIndex] = rowIndex * columns + colIndex;
    }
  }
  console.log(board);
  return board;
};
