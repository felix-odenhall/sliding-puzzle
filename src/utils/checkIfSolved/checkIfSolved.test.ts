import { checkIfSolved, puzzleSolution } from "../index";

// Remove the last rows/ cols

describe("Check if a puzzle is solved", () => {
  test("Should be true if increments from 1 -> 8, ending with 0", () => {
    const rows = 3;
    const columns = 3;
    const testArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
    expect(
      checkIfSolved(testArray, puzzleSolution(rows, columns))
    ).toEqual(true);
  });

  test("Should be true if increments from 1 -> 24, ending with 0", () => {
    const rows = 5;
    const columns = 5;
    const testArray = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 0],
    ];

    expect(
      checkIfSolved(testArray, puzzleSolution(rows, columns))
    ).toEqual(true);
  });

  test("Should be true if increments from 1 -> 5, ending with 0", () => {
    const rows = 2;
    const columns = 3;
    const testArray = [
      [1, 2, 3],
      [4, 5, 0],
    ];

    expect(
      checkIfSolved(testArray, puzzleSolution(rows, columns))
    ).toEqual(true);
  });

  test("Should be true if increments from 1 -> 11, ending with 0", () => {
    const rows = 6;
    const columns = 2;
    const testArray = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11, 0],
    ];

    expect(
      checkIfSolved(testArray, puzzleSolution(rows, columns))
    ).toEqual(true);
  });

  test("Should be false if increments from 0 -> 8", () => {
    const rows = 3;
    const columns = 3;
    const testArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    expect(
      checkIfSolved(testArray, puzzleSolution(rows, columns))
    ).toEqual(false);
  });
  test("Should be false if the numbers are not in incremental order, even though starting at 1 and ending with 0", () => {
    const rows = 3;
    const columns = 3;
    const testArray = [
      [1, 3, 2],
      [4, 5, 6],
      [7, 8, 0],
    ];
    expect(
      checkIfSolved(testArray, puzzleSolution(rows, columns))
    ).toEqual(false);
  });
});
