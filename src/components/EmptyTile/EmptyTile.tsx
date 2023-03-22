import styled from "styled-components";
import { TILE_SIZE } from "../../constants/gameData";

const Button = styled.button`
  background-color: grey;
  height: ${TILE_SIZE}px;
  width: ${TILE_SIZE}px;
`;

interface IPuzletileProps {
  onClick: () => void;
}

export const EmptyTile = ({ onClick }: IPuzletileProps) => {
  return <Button onClick={onClick}></Button>;
};
