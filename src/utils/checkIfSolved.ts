import { puzzleSolution } from "./index";
import { initialColumns, initialRows } from "../constants/gameData";

export const checkIfSolved = (arr: number[][]) => {
  if (arr.flat().toString() === puzzleSolution(initialRows, initialColumns)) {
    console.log("win");
  }
};
