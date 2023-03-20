import styled from "styled-components";
import { TILE_SIZE } from "../../constants/gameData";

const Button = styled.button`
  background-color: red;
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
`;

interface IPuzletileProps {
  text: number;
}

export const PuzzleTile = ({ text }: IPuzletileProps) => {
  return <Button>{text}</Button>;
};
