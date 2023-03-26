import styled from "styled-components";
import { GameBoard } from "./components";
import "./index.css";

const SContainer = styled.main`
  height: 90vh;
  width: 100%;
  overflow: hidden;
  @media (orientation: landscape) {
    overflow: visible;
  }
`;

const SHeadLine1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  margin-top: 30px;
`;

const App = () => {
  return (
    <SContainer>
      <SHeadLine1>Sliding puzzle</SHeadLine1>
      <GameBoard />
    </SContainer>
  );
};

export default App;
