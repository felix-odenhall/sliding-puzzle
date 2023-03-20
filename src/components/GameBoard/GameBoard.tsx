import styled from "styled-components";
import { PuzzleTile } from "../PuzzleTile/PuzzleTile";
import {
  TILE_AMOUNT,
  GRID_COLS,
  GRID_ROWS,
  TILE_SIZE,
} from "../../constants/gameData";

const Board = styled.div`
  width: calc(${GRID_COLS} * ${TILE_SIZE}px);
  height: calc(${GRID_ROWS} * ${TILE_SIZE}px);
  display: grid;
  grid-template-columns: repeat(${GRID_COLS}, 1fr);
  grid-template-rows: repeat(${GRID_ROWS}, 1fr);
`;

const GameTileArray = [...Array(TILE_AMOUNT - 1).keys()];

export const GameBoard = () => {
  return (
    <Board>
      {GameTileArray.map((element, index) => {
        return <PuzzleTile key={index} text={element + 1} />;
      })}
    </Board>
  );
};
