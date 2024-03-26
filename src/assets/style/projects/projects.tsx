import styled from "styled-components";
import { COLORS } from "../colors";

const { primary, fourth, white } = COLORS;

export const StyledSectionProjects = styled.section`
  width: 100%;
  height: auto;
  position: relative;

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

  article {
    .cards__container {
      margin: 0 auto;
      display: grid;
      place-items: center;
      gap: 1rem;

      @media (width >= 768px) {
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
    }
  }

  .activeR {
    animation: visible 1.5s ease-in-out;

    @keyframes visible {
      0% {
        opacity: 0;
      }
      85% {
        opacity: 1;
      }
    }
  }

  .activeT {
    animation: visiblet 1.5s ease-in;

    @keyframes visiblet {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }
  }
`;

export const StyledContainerButtons = styled.div`
  margin: 0 auto;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (width >= 1024px) {
    width: 95%;
    justify-content: center;
    gap: 0 15rem;
  }

  button {
    width: 7.5rem;
    height: 2.1875rem;
    outline-style: none;
    border-radius: 0.5rem;
    background-color: ${primary};
    box-shadow: 1px 1px 5px 2px ${white};
    color: ${white};
    transition: transform 3s ease;

    &:active {
      box-shadow: none;
      transform: scale(0.9);
    }
  }

  .active-button {
    background-color: ${fourth};
    box-shadow: 1px 1px 5px 5px ${white};
    color: ${primary};
  }
`;
