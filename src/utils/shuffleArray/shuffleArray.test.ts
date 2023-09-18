import { createPuzzle, shuffleArray } from "../index";

describe("ShuffleArray", () => {
  test("Should have the same length", () => {
    const shuffledArr = shuffleArray(createPuzzle(3, 3));
    expect(shuffledArr.length).toEqual(createPuzzle(3, 3).length);
  });

  test("Should include integers 0 -> 8", () => {
    const shuffledArr = shuffleArray(createPuzzle(3, 3)).flat();
    const testArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ].flat();
    expect(shuffledArr).toEqual(expect.arrayContaining(testArr));
  });

  test("Should include integers 0 -> 17", () => {
    const shuffledArr = shuffleArray(createPuzzle(6, 3)).flat();
    const testArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
      [12, 13, 14],
      [15, 16, 17],
    ].flat();
    expect(shuffledArr).toEqual(expect.arrayContaining(testArr));
  });
  test("Should be shuffled", () => {
    const shuffledArr = shuffleArray(createPuzzle(3, 3)).flat();
    const testArr =
    createPuzzle(3,3).flat()
    expect(shuffledArr).not.toEqual(testArr);
  });
});
