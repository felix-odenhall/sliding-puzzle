import React from "react";
import styled from "styled-components";
import { tile_size } from "../../constants/gameData";

interface IPuzzleTileProps {
  onClick: () => void;
  value: number;
}

export const SPuzzleTile = styled.button<{ value: number }>`
  background-color: ${({ value }) => (value !== 0 ? "#a2d9e8" : "#d3d3d3")};
  color: black;
  width: ${tile_size};
  height: ${tile_size};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  border: ${({ value }) => (value !== 0 ? "1px solid black;" : "none")};
  border-radius: 8px;
`;

export const PuzzleTile = ({ onClick, value }: IPuzzleTileProps) => {
  return (
    <SPuzzleTile onClick={onClick} value={value}>
      {value !== 0 && value}
    </SPuzzleTile>
  );
};
