import styled from "styled-components";
import { COLORS } from "../colors";

const { secondary, white } = COLORS;

export const StyledContainerIcons = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem 0;
  padding: 0.5rem 0;
  transform: scale(0.9);

  @media (width >= 768px) {
    width: 80%;
    height: 40.5rem;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4rem;
    gap: 2rem 3rem;
  }

  @media (width >= 1024px) {
    width: 100%;
    height: auto;
    overflow: visible;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(2, 1fr) 0.2fr repeat(4, 1fr) 0.2fr repeat(2, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
  }

  figure {
    width: 8.125rem;
    height: 8.125rem;
    background-color: ${secondary};
    box-shadow: 2px 2px 10px ${white};
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.28);
    border-radius: 10px;
    position: relative;
    opacity: 0.8;
    transition: transform 0.3s ease-in-out;

    @media (width >= 768px) {
      width: 9.375rem;
      height: 9.375rem;
    }

    &:first-child {
      grid-area: 1 / 1 / 3 / 3;
    }

    &:nth-child(2) {
      grid-area: 1 / 4 / 3 / 6;
    }

    &:nth-child(3) {
      grid-area: 1 / 7 / 3 / 9;
    }

    &:nth-child(4) {
      grid-area: 1/ 10 / 3 / 12;
    }

    &:nth-child(5) {
      grid-area: 5 / 1 / 7 / 3;
    }
    &:nth-child(6) {
      display: none;

      @media (width >= 1024px) {
        width: 100%;
        height: 90%;
        opacity: 1;
        display: flex;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 0.5rem;
        backdrop-filter: blur(15px);
        grid-area: 4 / 4 / 8 / 9;
        transform: none;

        &:hover {
          transform: none;
        }
      }

      @media (width >= 1440px) {
        height: 100%;
      }
    }
    &:nth-child(7) {
      grid-area: 5 / 10 / 7 / 12;
    }
    &:nth-child(8) {
      grid-area: 9 / 2 / 11 / 4;
    }

    &:nth-child(9) {
      grid-area: 9 / 5 / 11 / 7;
    }

    &:nth-child(10) {
      grid-area: 9 / 8 / 11 / 10;
    }

    &:hover {
      opacity: 1;
      border: 2px solid rgba(255, 255, 255, 0.5);
      transform: scale(1.1);

      & img {
        filter: drop-shadow(0 0 5px #fff);
      }
    }

    svg {
      width: 9.375rem;
      height: 9.375rem;
      position: absolute;
      top: -0.9375rem;
      left: 0;
      opacity: 0.7;
    }

    img {
      width: 50%;
      z-index: 1;
    }

    figcaption {
      width: 100%;
      font-family: "Stardos Stencil", system-ui;
      text-align: center;
      color: ${white};
      padding: 3px 0;
      border-radius: 5px;
      text-transform: capitalize;
      letter-spacing: 2px;

      @media (width >= 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;
