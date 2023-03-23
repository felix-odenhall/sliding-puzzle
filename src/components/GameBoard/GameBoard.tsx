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
  return (
    <SGameboard>
      {puzzleBoard.map((rows) => {
        return (
          <>
            {rows.map((columns) => {
              return <button>{columns}</button>;
            })}
          </>
        );
      })}
    </SGameboard>
  );
};
