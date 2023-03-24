import React, { useState } from "react";
import styled from "styled-components";
import {
  initialColumns,
  initialRows,
  tile_size,
} from "../../constants/gameData";

import {
  checkIfSolved,
  checkNeighbourTile,
  createPuzzle,
} from "../../utils/index";

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const SGameboard = styled.div`
  display: grid;
  grid-template-rows: repeat(${initialRows}, 1fr);
  grid-template-columns: repeat(${initialColumns}, 1fr);
  width: calc(${initialColumns} * ${tile_size});
  max-width: 100%;
  gap: 1px;
`;

const SPuzzleTile = styled.button<{ value: number }>`
  background-color: ${({ value }) => (value !== 0 ? "red" : "grey")};
  width: ${tile_size};
  height: ${tile_size};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const GameBoard = () => {
  const [puzzleBoard, setPuzzleBoard] = useState(
    createPuzzle(initialRows, initialColumns)
  );

  const handleClickedTile = (rowIndex: number, colIndex: number) => {
    checkNeighbourTile(rowIndex, colIndex, puzzleBoard, setPuzzleBoard);
    checkIfSolved(puzzleBoard);
  };

  return (
    <SContainer>
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
    </SContainer>
  );
};
