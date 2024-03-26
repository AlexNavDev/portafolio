import styled from "styled-components";
import { COLORS } from "../colors";

const { primary, secondary, white } = COLORS;

export const FlipCard = styled.div`
  width: 20rem;
  height: 33.125rem;
  perspective: 2000px;
  will-change: transform;
  view-timeline-name: --revealing-image;
  view-timeline-axis: block;
  animation: linear reveal both;
  animation-timeline: --revealing-image;
  animation-range: entry 25% cover 30%;

  @keyframes reveal {
    0% {
      opacity: 0;
      clip-path: inset(45% 20% 45% 20%);
    }

    100% {
      opacity: 1;
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @media (width >= 768px) {
    width: 21.875rem;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 26.875rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9);
    transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
    transform-style: preserve-3d;

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .flip-card-front {
      background-color: rgba(0, 0, 0, 0.7);
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;

        @media (width >= 1024px) {
          object-fit: cover;
        }
      }
    }

    .flip-card-back {
      transform: rotateY(180deg);
      backface-visibility: hidden;

      &:before {
        content: "";
        position: absolute;
        top: -0.125rem;
        left: -0.125rem;
        right: -0.125rem;
        bottom: -0.125rem;
        transform: skew(3deg, 3deg);
        background: linear-gradient(315deg, #1f2b3e, #374357);
        z-index: -1;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: rgb(255, 255, 255, 0.05);
        pointer-events: none;
      }

      .flip-card-back-content {
        height: 100%;
        background-color: ${primary};
        font-size: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        h3 {
          font-family: "Stardos Stencil", system-ui;
          color: ${white};
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1.3em;
          text-shadow: 5px 0px 20px rgba(255, 255, 255, 0.8),
            -5px 0px 20px rgba(255, 255, 255, 0.8);
        }

        p {
          width: 100%;
          padding: 0.3rem;
          font-size: 0.85em;
          word-spacing: 0.3rem;
          font-weight: 400;
          color: ${white};
          text-shadow: 1px 1px 20px #5583e0;
        }

        p:nth-child(3) {
          text-align: center;
          color: ${white};
          background-color: transparent;
        }
        p:nth-child(4) {
          text-align: center;
          color: ${white};
          background-color: transparent;
        }
      }
    }
  }

  .active {
    transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg);

    .flip-card-front {
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }
  }

  .flip-card-footer {
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);

    button,
    a {
      width: 7.5rem;
      height: 2.1875rem;
      font-size: 0.9em;
      letter-spacing: 1px;
      border-radius: 0.5rem;
      background-color: ${secondary};
      color: ${white};

      @media (width >= 1024px) {
        width: 8.75rem;
        height: 2.5rem;
      }
    }

    button {
      border: none;
    }

    a {
      display: grid;
      place-items: center;
    }
  }
`;
