import styled from "styled-components";

const Button = styled.button`
  background-color: red;
`;

interface IPuzletileProps {
  text: string;
}

export const PuzzleTile = ({ text }: IPuzletileProps) => {
  return <Button>{text}</Button>;
};
