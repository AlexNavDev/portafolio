import styled from "styled-components";
import { COLORS } from "../colors";

const { primary, fourth, fifth, white, colorBorder } = COLORS;

export const StyledHeader = styled.header<{ $toggle: boolean }>`
  width: 100%;
  height: 5rem;
  background-color: ${primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  transition: background 0.7s ease;

  @media (width >= 1024px) {
    width: 20%;
    align-items: flex-start;
    background-color: transparent;
  }

  @media (width >= 1800px) {
    width: calc(1800px - 1440px);
  }

  .logo {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: ${white};
    font-family: "Stardos Stencil", system-ui;

    button {
      background-color: transparent;
      width: 100%;
      height: 6.25rem;
      border: none;
      outline: none;
      font-family: "Stardos Stencil", system-ui;
      color: ${white};
      font-size: 0.9em;
    }

    @media (width >= 1024px) {
      width: 100%;
      height: 5rem;
      margin-left: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: ${primary};
      border-bottom: 1px solid ${white};
    }
  }

  nav {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(9, 16, 26, 0.7);
    backdrop-filter: blur(10px);

    @media (width >= 1024px) {
      height: 100vh;
      justify-content: flex-start;
      animation: none;
      align-items: flex-start;
    }

    .container__day {
      width: 90%;
      padding-top: 1rem;
      display: flex;
      flex-direction: column;

      @media (width >= 1024px) {
        width: 100%;
        padding-top: 2rem;
      }

      p {
        font-size: 1.1em;
        color: ${white};
        letter-spacing: 3px;
        text-align: center;
      }

      p:last-child {
        padding: 1rem;
        text-transform: capitalize;
        color: ${white};
        text-shadow: 0 0 0.625rem ${primary}, 0 0 0.125rem ${white},
          0 0 0.625rem ${white}, 0 0 0.375rem ${white}, 0 0 1.25rem ${white},
          0 0 1.25rem ${white}, 0 0 0.0625rem ${white}, 0 0 0.75rem ${white};

        @media (width >= 1024px) {
          border-bottom: 2px solid ${colorBorder};
        }
      }
    }

    animation: ${(props) =>
      props.$toggle
        ? "star 0.5s ease 0s 1 normal forwards"
        : "end 0.5s ease 0s 1 normal forwards"};

    @keyframes star {
      0% {
        transform: scaleX(0);
      }

      100% {
        transform: scaleX(1);
      }
    }

    @keyframes end {
      0% {
        transform: scaleY(1);
      }

      100% {
        transform: scaleY(0);
      }
    }

    ul {
      width: 90%;

      @media (width >= 1024px) {
        width: 100%;
      }
      li {
        button {
          background-color: transparent;
          width: 100%;
          height: 6.25rem;
          border: none;
          outline: none;
          border-bottom: 2px solid ${colorBorder};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: ${white};
          letter-spacing: 1px;

          .icon {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0.3rem;
            margin-bottom: 0.5rem;
            border-radius: 50%;
            color: ${fourth};
            transition: color, background 0.3s ease;

            @media (width >= 1024px) {
              &.active {
                color: ${primary};
                background-color: ${fifth};
              }
            }
          }
        }
      }
    }
  }

  .menu-hamburger {
    font-size: 2.6rem;
    margin-right: 1rem;
    color: ${white};

    @media (width >= 1024px) {
      display: none;
    }
  }
`;
