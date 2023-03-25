import { createPuzzle } from "./index";

describe("Create a puzzle board, based on rows and columns", () => {
  test("Should have 3 rows", () => {
    const rows = 3;
    const columns = 3;
    const newPuzzleBoard = createPuzzle(rows, columns);

    expect(newPuzzleBoard.length).toEqual(rows);
  });
  test("Should have equal amount of integers in each rows as the number of coloumns", () => {
    const rows = 3;
    const columns = 4;
    const newPuzzleBoard = createPuzzle(rows, columns);

    expect(newPuzzleBoard[0].length).toEqual(columns);
    expect(newPuzzleBoard[1].length).toEqual(columns);
    expect(newPuzzleBoard[2].length).toEqual(columns);
  });
  test("Should be the same as the test board", () => {
    const rows = 4;
    const columns = 4;
    const newPuzzleBoard = createPuzzle(rows, columns);

    const testBoard = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
    ];

    expect(newPuzzleBoard).toEqual(testBoard);
  });
  test("Should have number a number in the same position", () => {
    const rows = 3;
    const columns = 3;
    const newPuzzleBoard = createPuzzle(rows, columns);

    const testBoard = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    expect(newPuzzleBoard[1][2]).toEqual(testBoard[1][2]);
    expect(newPuzzleBoard[0][1]).toEqual(testBoard[0][1]);
    expect(newPuzzleBoard[2][0]).toEqual(testBoard[2][0]);
  });
});
