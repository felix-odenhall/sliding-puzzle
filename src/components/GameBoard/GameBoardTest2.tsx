import { useState } from "react";
import styled from "styled-components";
import { initialColumns, initialRows } from "../../constants/gameData";
import { createBoard } from "../../utils/createBoard";
import { shuffle2DArray } from "../../utils/shuffleArray";

// const board = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

interface IPuzzleTile {
  rowIndex: number;
  colIndex: number;
  top?: number | boolean;
  bottom?: number | boolean;
  left?: number | boolean;
  right?: number | boolean;
  tileNumber?: number;
}

const SBoardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(${initialRows}, 1fr);
  grid-template-columns: repeat(${initialColumns}, 1fr);
  width: calc(3 * 50px);
  height: calc(3 * 50px);
  gap: 2px;
`;

const SPuzzleTile = styled.div<{ tileNumber: number }>`
  height: 50px;
  width: 50px;
  background-color: ${(props) => (props.tileNumber === 0 ? "grey" : "red")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameBoardTest2 = () => {
  const [puzzleBoard, setPuzzleBoard] = useState<number[][]>(
    shuffle2DArray(createBoard(initialRows, initialColumns))
  );

  const findNeighbour = (tile: IPuzzleTile) => {
    const { top, bottom, left, right, colIndex, rowIndex } = tile;

    if (top === 0 || bottom === 0 || left === 0 || right === 0) {
      if (top === 0) {
        puzzleBoard[rowIndex - 1][colIndex] = puzzleBoard[rowIndex][colIndex];
      } else if (bottom === 0) {
        puzzleBoard[rowIndex + 1][colIndex] = puzzleBoard[rowIndex][colIndex];
      } else if (left === 0) {
        puzzleBoard[rowIndex][colIndex - 1] = puzzleBoard[rowIndex][colIndex];
      } else if (right === 0) {
        puzzleBoard[rowIndex][colIndex + 1] = puzzleBoard[rowIndex][colIndex];
      }

      puzzleBoard[rowIndex][colIndex] = 0;

      setPuzzleBoard([...puzzleBoard]);
    }
  };

  const handleClick = (rowIndex: number, colIndex: number) => {
    const top = rowIndex > 0 && puzzleBoard[rowIndex - 1][colIndex];
    const bottom =
      rowIndex < puzzleBoard.length - 1 && puzzleBoard[rowIndex + 1][colIndex];
    const left = colIndex > 0 && puzzleBoard[rowIndex][colIndex - 1];
    const right =
      colIndex < puzzleBoard.length - 1 && puzzleBoard[rowIndex][colIndex + 1];

    const tile: IPuzzleTile = {
      rowIndex,
      colIndex,
      top,
      bottom,
      left,
      right,
    };

    findNeighbour(tile);
  };

  return (
    <SBoardGrid>
      {puzzleBoard.map((rows, rowIndex) => {
        return (
          <>
            {rows.map((tileNumber, colIndex) => {
              return (
                <SPuzzleTile
                  tileNumber={tileNumber}
                  onClick={() => {
                    handleClick(rowIndex, colIndex);
                  }}
                >
                  {tileNumber !== 0 && tileNumber}
                </SPuzzleTile>
              );
            })}
          </>
        );
      })}
    </SBoardGrid>
  );
};

// const findNeighbour = (tile: IPuzzleTile) => {
//     const { top, bottom, left, right, colIndex, rowIndex } = tile;

//     if (top === 0) {
//       puzzleBoard[rowIndex - 1][colIndex] = puzzleBoard[rowIndex][colIndex];
//       puzzleBoard[rowIndex][colIndex] = 0;

//       setPuzzleBoard([...puzzleBoard]);
//     }
//     if (bottom === 0) {
//       puzzleBoard[rowIndex + 1][colIndex] = puzzleBoard[rowIndex][colIndex];
//       puzzleBoard[rowIndex][colIndex] = 0;

//       setPuzzleBoard([...puzzleBoard]);
//     }
//     if (left === 0) {
//       puzzleBoard[rowIndex][colIndex - 1] = puzzleBoard[rowIndex][colIndex];
//       puzzleBoard[rowIndex][colIndex] = 0;

//       setPuzzleBoard([...puzzleBoard]);
//     }
//     if (right === 0) {
//       puzzleBoard[rowIndex][colIndex + 1] = puzzleBoard[rowIndex][colIndex];
//       puzzleBoard[rowIndex][colIndex] = 0;

//       setPuzzleBoard([...puzzleBoard]);
//     }
//   };
