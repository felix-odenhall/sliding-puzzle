import { puzzleSolution } from "./index";

export const checkIfSolved = (
  arr: number[][],
  solutionArray: number[],
  rows: number,
  columns: number
) => {
  const flattenArray = arr.flat();

  solutionArray = puzzleSolution(rows, columns);

  return (
    flattenArray.length === solutionArray.length &&
    flattenArray.every((value, index) => value === solutionArray[index])
  );
};
