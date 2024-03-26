import styled from "styled-components";
import { COLORS } from "../colors";

const { primary, tertiary, white } = COLORS;

export const StyledSectionAbout = styled.section`
  width: 100%;
  height: 100dvh;
  position: relative;

  h2 {
    margin-bottom: 1.2rem;
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

  .container__about {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(9, 16, 26, 0.7);
    box-shadow: 0 0 10px 3px ${tertiary};
    backdrop-filter: blur(15px);
    transition: background, box-shadow 0.6s ease-in;

    @media (width >= 768px) {
      width: 80%;
      height: 50vh;
      margin: 8rem auto 0 auto;
      border-radius: 1.25rem;
    }

    @media (width >= 1024px) {
      width: 90%;
      height: 70vh;
      margin: 4rem auto 0 auto;
    }

    @media (width >= 1440px) {
      justify-content: space-evenly;
    }

    .container__info {
      @media (width >= 678px) {
        height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      @media (width >= 1024px) {
        width: 60%;
        height: auto;
      }

      @media (width >= 1440px) {
        width: 50%;
      }

      p {
        padding: 0.8rem 1.5em;
        line-height: 1.5rem;
        letter-spacing: 0.0813rem;
        font-weight: 100;
        color: ${white};
        text-shadow: 1px 2px 5px ${primary};

        @media (width >= 768px) {
          font-size: 1.1rem;
        }

        @media (width >= 1024px) {
          line-height: 1.5rem;
          font-weight: 400;
        }

        @media (width >= 1440px) {
          font-size: 1.3em;
          line-height: 2rem;
        }
      }
    }

    figure {
      display: none;

      @media (width >= 1024px) {
        width: 15.625rem;
        height: 15.625rem;
        display: inline-flex;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 50%;

        img {
          width: 100%;
          filter: drop-shadow(0 0 5px #fff);
        }
      }

      @media (width >= 1440px) {
        width: 23.75rem;
        height: 23.75rem;
      }
    }
  }
`;
