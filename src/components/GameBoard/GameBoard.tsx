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

  const handleClickedTile = (
    rowIndex: number,
    colIndex: number,
    value: number
  ) => {
    console.log("position:", rowIndex, colIndex, "value:", value);
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
