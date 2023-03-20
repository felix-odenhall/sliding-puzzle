import styled from "styled-components";
import { TILE_SIZE } from "../../constants/gameData";

const Button = styled.button`
  background-color: red;
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
`;

interface IPuzletileProps {
  tileNumber: number;
  onClick: () => void;
}

export const PuzzleTile = ({ tileNumber, onClick }: IPuzletileProps) => {
  return <Button onClick={onClick}>{tileNumber}</Button>;
};
