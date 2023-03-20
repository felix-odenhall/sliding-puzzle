import styled from "styled-components";
import { PuzzleTile } from "../PuzzleTile/PuzzleTile";
import {
  TILE_AMOUNT,
  GRID_COLS,
  GRID_ROWS,
  TILE_SIZE,
} from "../../constants/gameData";
import { shuffleArray } from "../../utils/shuffleArray";

const Board = styled.div`
  width: calc(${GRID_COLS} * ${TILE_SIZE}px);
  height: calc(${GRID_ROWS} * ${TILE_SIZE}px);
  display: grid;
  grid-template-columns: repeat(${GRID_COLS}, 1fr);
  grid-template-rows: repeat(${GRID_ROWS}, 1fr);
`;

const shuffledTileArray = shuffleArray([...Array(TILE_AMOUNT - 1).keys()]);

const handleTileClick = (element: number) => {
  console.log(element);
};

export const GameBoard = () => {
  return (
    <Board>
      {shuffledTileArray.map((element, index) => {
        return (
          <PuzzleTile
            key={index}
            tileNumber={element + 1}
            onClick={() => handleTileClick(element)}
          />
        );
      })}
    </Board>
  );
};
