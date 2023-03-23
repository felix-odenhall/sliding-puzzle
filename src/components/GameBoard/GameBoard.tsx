import React, { useState } from "react";
import styled from "styled-components";
import { initialColumns, initialRows } from "../../constants/gameData";
import { checkNeighbourTile } from "../../utils/checkNeighbourTile";
import { createPuzzle } from "../../utils/createPuzzle";

const SGameboard = styled.div`
  display: grid;
  grid-template-rows: repeat(${initialRows}, 1fr);
  grid-template-columns: repeat(${initialColumns}, 1fr);
  gap: 2px;
`;

const SPuzzleTile = styled.button<{ value: number }>`
  background-color: ${({ value }) => (value !== 0 ? "red" : "grey")};
`;

export const GameBoard = () => {
  const [puzzleBoard, setPuzzleBoard] = useState(
    createPuzzle(initialRows, initialColumns)
  );

  const handleClickedTile = (rowIndex: number, colIndex: number) => {
    checkNeighbourTile(rowIndex, colIndex, puzzleBoard, setPuzzleBoard);
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
                    handleClickedTile(rowIndex, colIndex);
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
