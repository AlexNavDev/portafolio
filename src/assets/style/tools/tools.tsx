import styled from "styled-components";
import { COLORS } from "../colors";

const { primary, white } = COLORS;

export const StyledSectionTools = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;

  h2 {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: "Stardos Stencil", system-ui;
    font-size: 2.5em;
    color: ${white};
    text-align: center;
    letter-spacing: 0.3rem;
    text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.8),
      -5px 0px 20px rgba(255, 255, 255, 0.8);

    @media (width >= 1024px) {
      padding: 1rem;
    }
  }

  .image-divider {
    padding: 5rem 0 1rem 0;

    svg {
      width: 100%;
      height: 1.875rem;
      fill: ${primary};

      @media (width >= 1024px) {
        height: 3.125rem;
      }
    }

    @media (width >= 1024px) {
      padding: 0;
    }
  }
`;
