import styled from "styled-components";
import { GameBoard } from "./components";
import "./index.css";

const SContainer = styled.main`
  height: 80vh;
`;

const SHeadLine1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  margin-top: 50px;
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
