import styled from "styled-components";
import { PuzzleTile } from "../PuzzleTile/PuzzleTile";
import { TILE_AMOUNT, COLS, ROWS, TILE_SIZE } from "../../constants/gameData";
import { shuffleArray } from "../../utils/shuffleArray";
import { EmptyTile } from "../EmptyTile/EmptyTile";
import { useEffect, useState } from "react";

const Board = styled.div`
  width: calc(${COLS} * ${TILE_SIZE}px);
  height: calc(${ROWS} * ${TILE_SIZE}px);
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
`;

const createBoard = (): number[][] => {
  const board: number[][] = [];
  let count = 1;
  for (let i = 0; i < ROWS; i++) {
    const row: number[] = [];
    for (let j = 0; j < COLS; j++) {
      row.push(count++);
    }
    board.push(row);
  }
  return board;
};

export const GameBoard = () => {
  const [board, setBoard] = useState(createBoard());

  // const shuffledTileArray = shuffleArray([...Array(TILE_AMOUNT).keys()]);

  // const shuffledTileArrayObj = shuffleArray(
  //   [...Array(TILE_AMOUNT).keys()].map((i) => {
  //     return { value: i };
  //   })
  // );

  const getNeighbors = (
    board: number[][],
    row: number,
    col: number
  ): number[] => {
    const neighbors: number[] = [];
    // check top neighbor
    if (row > 0) {
      neighbors.push(board[row - 1][col]);
    }
    // check left neighbor
    if (col > 0) {
      neighbors.push(board[row][col - 1]);
    }
    // check right neighbor
    if (col < board[0].length - 1) {
      neighbors.push(board[row][col + 1]);
    }
    // check bottom neighbor
    if (row < board.length - 1) {
      neighbors.push(board[row + 1][col]);
    }
    return neighbors;
  };

  const handleCellClick = (row: number, col: number) => {
    const neighbors = getNeighbors(board, row, col);
    console.log(`Neighbors of cell (${row}, ${col}):`, neighbors);
  };

  // let emptyTile = TILE_AMOUNT - 1;

  return (
    <>
      <Grid>
        {board.map((row, rowIndex) => (
          <>
            {row.map((cell, colIndex) => (
              <Button
                key={colIndex}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell}
              </Button>
            ))}
          </>
        ))}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  gap: 8px;
  height: 400px;
  width: 500px;
`;

const Row = styled.div`
  display: flex;
`;

const Button = styled.button`
  flex: 1;
  font-size: 24px;
  padding: 16px;
`;
