import About from "./about/About";
import Home from "./home/Home";
import Tools from "./tools/Tools";
import Projects from "./projects/Projects";
import styled from "styled-components";

export const ContainerMain = styled.main`
  @media (width >= 1024px) {
    width: 80%;
    margin-left: 20%;
  }

  @media (width >= 1800px) {
    width: calc(1800px - 20%);
  }
`;
const Main = () => {
  return (
    <ContainerMain>
      <Home />
      <About />
      <Tools />
      <Projects />
    </ContainerMain>
  );
};

export default Main;
