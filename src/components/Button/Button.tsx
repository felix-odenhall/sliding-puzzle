import styled from "styled-components";

interface IPuzzleTileProps {
  onClick: () => void;
  text: string;
}

const SButton = styled.button`
  background-color: white;
  color: black;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 2rem;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
`;

export const Button = ({ onClick, text }: IPuzzleTileProps) => {
  return <SButton onClick={onClick}>{text}</SButton>;
};
