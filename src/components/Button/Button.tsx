import styled from "styled-components";

interface IButtonProps {
  onClick: () => void;
  text: string;
}

const SButton = styled.button`
  background-color: black;
  color: white;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin: 2rem;
  padding: 10px;
  border: none;
`;

export const Button = ({ onClick, text }: IButtonProps) => {
  return <SButton onClick={onClick}>{text}</SButton>;
};
