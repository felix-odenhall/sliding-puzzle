import { useState } from "react";
import styled from "styled-components";
import { initialColumns, initialRows } from "../../constants/gameData";
import { createBoard } from "../../utils/createBoard";
import { shuffle2DArray } from "../../utils/shuffleArray";

// using grid to create a row x column grid
const SGameBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(${initialRows}, 1fr);
  grid-template-columns: repeat(${initialColumns}, 1fr);
`;

export const GameBoardTest = () => {
  const [puzzleBoard, setPuzzleBoard] = useState<number[][]>(
    shuffle2DArray(createBoard(initialRows, initialColumns))
  );

  const handleClick = (rowIndex: number, colIndex: number) => {
    // rowIndex and colIndex gives the coordinates of the button clicked
    // checks top neighbour
    const topNeighbour =
      rowIndex > 0 ? puzzleBoard[rowIndex - 1][colIndex] : null;
    // checks bottom neighbour
    const bottomNeighbour =
      rowIndex < puzzleBoard.length - 1
        ? puzzleBoard[rowIndex + 1][colIndex]
        : null;
    // checks left neighbour
    const leftNeighbour =
      colIndex > 0 ? puzzleBoard[rowIndex][colIndex - 1] : null;
    // checks right neighbour
    const rightNeighbour =
      colIndex < puzzleBoard[0].length - 1
        ? puzzleBoard[rowIndex][colIndex + 1]
        : null;

    // swap places if a neighbour is 0

    if (topNeighbour === 0) {
      puzzleBoard[rowIndex - 1][colIndex] = puzzleBoard[rowIndex][colIndex];
      puzzleBoard[rowIndex][colIndex] = 0;

      // updates the puzzleBoard if the neighbour is 0
      setPuzzleBoard([...puzzleBoard]);
    }
    if (bottomNeighbour === 0) {
      puzzleBoard[rowIndex + 1][colIndex] = puzzleBoard[rowIndex][colIndex];
      puzzleBoard[rowIndex][colIndex] = 0;

      // updates the puzzleBoard if the neighbour is 0
      setPuzzleBoard([...puzzleBoard]);
    }
    if (leftNeighbour === 0) {
      puzzleBoard[rowIndex][colIndex - 1] = puzzleBoard[rowIndex][colIndex];
      puzzleBoard[rowIndex][colIndex] = 0;

      // updates the puzzleBoard if the neighbour is 0
      setPuzzleBoard([...puzzleBoard]);
    }
    if (rightNeighbour === 0) {
      puzzleBoard[rowIndex][colIndex + 1] = puzzleBoard[rowIndex][colIndex];
      puzzleBoard[rowIndex][colIndex] = 0;

      // updates the puzzleBoard if the neighbour is 0
      setPuzzleBoard([...puzzleBoard]);
    }
  };

  return (
    // need to add rowIndex & colIndex to get the position of the button in the arr
    // loops through rows to be able to loop through cols
    <SGameBoard>
      {puzzleBoard.map((rows, rowIndex) => {
        return (
          <>
            {rows.map((tile, colIndex) => {
              return (
                <button
                  key={tile}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {tile !== 0 ? tile : ""}
                </button>
              );
            })}
          </>
        );
      })}
    </SGameBoard>
  );
};
