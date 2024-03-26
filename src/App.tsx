import "./App.css";
import NavBar from "./components/header/NavBar";
import Main from "./components/main/Main";
import styled from "styled-components";
import Hero from "../src/assets/img/background.jpg";

export const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: auto;
  background: rgba(0, 0, 0, 0.9);

  @media (width >= 1024px) {
    display: flex;
  }

  &::before {
    content: "";
    position: fixed;
    max-width: 1800px;
    margin: auto;
    inset: 0;
    background-image: url(${Hero});
    background-position: center;
    background-size: cover;
    opacity: 0.5;
  }
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
}

export default App;
