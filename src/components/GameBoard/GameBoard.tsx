import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  initialColumns,
  initialRows,
  tile_size,
} from "../../constants/gameData";

import {
  getEmptyNeighbourTileIndex,
  createPuzzle,
  checkIfSolved,
  puzzleSolution,
  shuffleArray,
} from "../../utils/index";
import { Button, PuzzleTile } from "../index";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;

const SHeadLine2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
`;

const SGameboard = styled.div`
  display: grid;
  background-color: #d3d3d3;
  grid-template-rows: repeat(${initialRows}, 1fr);
  grid-template-columns: repeat(${initialColumns}, 1fr);
  width: calc(${initialColumns} * ${tile_size} +4px);
  max-width: 100%;
  gap: 1px;
`;

export const GameBoard = () => {
  const [puzzleBoard, setPuzzleBoard] = useState<number[][]>(
    shuffleArray(createPuzzle(initialRows, initialColumns))
  );
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const handleClickedTile = (rowIndex: number, colIndex: number) => {
    const emptyTile = getEmptyNeighbourTileIndex(
      rowIndex,
      colIndex,
      puzzleBoard
    );
    if (emptyTile) {
      const newBoard: number[][] = [...puzzleBoard];
      newBoard[emptyTile.emptyRow][emptyTile.emptyCol] =
        puzzleBoard[rowIndex][colIndex];
      newBoard[rowIndex][colIndex] = 0;
      setPuzzleBoard(newBoard);
    }
    checkIfSolved(
      puzzleBoard,
      puzzleSolution(initialRows, initialColumns),
      // initialRows,
      // initialColumns
    ) && setIsSolved(true);
  };
  

  const shuffleNewBoard = () => {
    setIsSolved(false);
    setPuzzleBoard(shuffleArray(createPuzzle(initialRows, initialColumns)));
  };

  useEffect(() => {
    setPuzzleBoard(shuffleArray(createPuzzle(initialRows, initialColumns)));
    setIsSolved(false);
  }, []);

  return (
    <SContainer>
      {isSolved ? (
        <>
          <SHeadLine2>Congratulations! You've completed the puzzle!</SHeadLine2>
          <Button onClick={shuffleNewBoard} text="Restart" />
        </>
      ) : (
        <>
          <SGameboard>
            {puzzleBoard.map((rows, rowIndex) => {
              return (
                <React.Fragment key={rowIndex}>
                  {rows.map((value, colIndex) => {
                    return (
                      <PuzzleTile
                        key={value}
                        value={value}
                        onClick={() => {
                          handleClickedTile(rowIndex, colIndex);
                        }}
                      />
                    );
                  })}
                </React.Fragment>
              );
            })}
          </SGameboard>
          <Button onClick={shuffleNewBoard} text="Shuffle new board" />
        </>
      )}
    </SContainer>
  );
};
