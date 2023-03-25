import styled from "styled-components";
import { GameBoard } from "./components";
import "./index.css";

const SContainer = styled.div`
  height: 90vh;
`;

function App() {
  return (
    <SContainer>
      <GameBoard />
    </SContainer>
  );
}

export default App;
