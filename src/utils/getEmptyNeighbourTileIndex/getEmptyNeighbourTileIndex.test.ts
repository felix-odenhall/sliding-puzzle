import { getEmptyNeighbourTileIndex } from "../index";

describe("checkNeighbourTile", () => {
  test("Should return the correct result when the empty tile is above the current tile (7)", () => {
    const board = [
      [1, 2, 3],
      [4, 0, 5],
      [6, 7, 8],
    ];
    const rowIndex = 2;
    const colIndex = 1;
    const expectedResult = { emptyRow: 1, emptyCol: 1 };
    expect(getEmptyNeighbourTileIndex(rowIndex, colIndex, board)).toEqual(
      expectedResult
    );
  });

  test("Should return the correct result when the empty tile is below the current tile (1)", () => {
    const board = [
      [1, 2, 3],
      [0, 4, 5],
      [6, 7, 8],
    ];
    const rowIndex = 0;
    const colIndex = 0;
    const expectedResult = { emptyRow: 1, emptyCol: 0 };
    expect(getEmptyNeighbourTileIndex(rowIndex, colIndex, board)).toEqual(
      expectedResult
    );
  });

  test("Should return the correct result when the empty tile is to the left of the current tile(8)", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 8],
    ];
    const rowIndex = 2;
    const colIndex = 2;
    const expectedResult = { emptyRow: 2, emptyCol: 1 };
    expect(getEmptyNeighbourTileIndex(rowIndex, colIndex, board)).toEqual(
      expectedResult
    );
  });

  test("Should return the correct result when the empty tile is to the right of the current tile (5)", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 0],
      [6, 7, 8],
    ];
    const rowIndex = 1;
    const colIndex = 1;
    const expectedResult = { emptyRow: 1, emptyCol: 2 };
    expect(getEmptyNeighbourTileIndex(rowIndex, colIndex, board)).toEqual(
      expectedResult
    );
  });

  test("returns null when there is no adjacent empty tile", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
    const rowIndex = 2;
    const colIndex = 2;
    expect(getEmptyNeighbourTileIndex(rowIndex, colIndex, board)).toBeNull();
  });
});
