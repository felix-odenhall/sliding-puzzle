import { puzzleSolution } from "../index";

describe("Create a solution array based on rows & columns", () => {
  const rows = 9;
  const columns = 4;
  const result = rows * columns;

  const createPuzzleSolution = puzzleSolution(rows, columns);

  test("Should have the same length as rows * columns", () => {
    expect(createPuzzleSolution.length).toEqual(result);
  });
  test("Should start with number 1", () => {
    expect(createPuzzleSolution.indexOf(1)).toEqual(0);
  });
  test("Should end with number 0", () => {
    expect(createPuzzleSolution.indexOf(0)).toEqual(
      createPuzzleSolution.length - 1
    );
  });
});
