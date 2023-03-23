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

  const canMove = (
    topTile: number | null,
    bottomTile: number | null,
    leftTile: number | null,
    rightTile: number | null
  ) => {
    if (topTile === 0) {
      console.log("can move up");
    }
    if (bottomTile === 0) {
      console.log("can move down");
    }
    if (leftTile === 0) {
      console.log("can move left");
    }
    if (rightTile === 0) {
      console.log("can move right");
    }
  };

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

    canMove(checkTopTile, checkBottomTile, checkLeftTile, checkRightTile);
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
