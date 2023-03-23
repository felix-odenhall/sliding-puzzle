import React, { useState } from "react";
import styled from "styled-components";
import { board } from "../../constants/gameData";

const SGameboard = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const SPuzzleTile = styled.button<{ value: number }>`
  background-color: ${({ value }) => (value !== 0 ? "red" : "grey")};
`;

export const GameBoard = () => {
  const [puzzleBoard, setPuzzleBoard] = useState(board);

  const checkNeighbourTile = (rowIndex: number, colIndex: number) => {
    const checkTopTile =
      rowIndex > 0 ? puzzleBoard[rowIndex - 1][colIndex] : null;
    const checkBottomTile =
      rowIndex < puzzleBoard.length - 1
        ? puzzleBoard[rowIndex + 1][colIndex]
        : null;
    const checkLeftTile =
      colIndex > 0 ? puzzleBoard[rowIndex][colIndex - 1] : null;
    const checkRightTile =
      colIndex < puzzleBoard.length - 1
        ? puzzleBoard[rowIndex][colIndex + 1]
        : null;
    console.log("top tile", checkTopTile);
    console.log("bottom tile", checkBottomTile);
    console.log("left tile", checkLeftTile);
    console.log("right tile", checkRightTile);
  };

  const handleClickedTile = (
    rowIndex: number,
    colIndex: number,
    value: number
  ) => {
    checkNeighbourTile(rowIndex, colIndex);
  };

  return (
    <SGameboard>
      {puzzleBoard.map((rows, rowIndex) => {
        return (
          <React.Fragment key={rowIndex}>
            {rows.map((value, colIndex) => {
              return (
                <SPuzzleTile
                  key={value}
                  value={value}
                  onClick={() => {
                    handleClickedTile(rowIndex, colIndex, value);
                  }}
                >
                  {value !== 0 && value}
                </SPuzzleTile>
              );
            })}
          </React.Fragment>
        );
      })}
    </SGameboard>
  );
};
