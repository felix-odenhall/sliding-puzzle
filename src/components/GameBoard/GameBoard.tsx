import { useState } from "react";
import styled from "styled-components";
import { board } from "../../constants/gameData";

const SGameboard = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

export const GameBoard = () => {
  const [puzzleBoard, setPuzzleBoard] = useState(board);

  const handleClickedTile = (
    rowIndex: number,
    colIndex: number,
    value: number
  ) => {
    console.log(rowIndex, colIndex, value);
  };

  return (
    <SGameboard>
      {puzzleBoard.map((rows, rowIndex) => {
        return (
          <>
            {rows.map((value, colIndex) => {
              return (
                <button
                  onClick={() => {
                    handleClickedTile(rowIndex, colIndex, value);
                  }}
                >
                  {value}
                </button>
              );
            })}
          </>
        );
      })}
    </SGameboard>
  );
};
