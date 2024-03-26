import styled from "styled-components";
import { COLORS } from "../colors";
import imgDivider from "../../../assets/img/background-card.svg";

const { primary, secondary, white } = COLORS;

export const StyledSectionHome = styled.section`
  width: 100%;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 5rem;

  @media (width >= 1024px) {
    font-size: 1.125rem;
  }

  .wrapper {
    perspective: 1000px;

    .card {
      width: 21.875rem;
      height: 26.875rem;
      background-color: rgba(31, 43, 62, 0.8);
      backdrop-filter: blur(5px);
      position: relative;
      overflow: hidden;
      border-radius: 0.625rem;

      @media (width >= 768px) {
        width: 43.75rem;
        height: 25rem;
      }

      &::before {
        content: "";
        width: 21.875rem;
        height: 9.375rem;
        position: absolute;
        top: -5rem;
        right: 0;
        border-radius: 50%;
        background-color: ${primary};

        @media (width >= 768px) {
          width: 9.375rem;
          height: 9.375rem;
          top: -1.875rem;
          left: -1.875rem;
        }
      }

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background-image: url(${imgDivider});
        background-size: cover;
        opacity: 0.4;
        z-index: -1;
      }

      h1 {
        font-family: "Stardos Stencil", system-ui;
        font-size: 2em;
        color: ${white};
        text-align: center;
        position: relative;

        @media (width >= 768px) {
          text-align: left;
          padding: 32px 16px;
        }
      }

      .card__body {
        width: 100%;
        height: 21.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        @media (width >= 768px) {
          height: 243px;
          padding-bottom: 112px;
          flex-direction: row;
        }

        .information {
          @media (width >= 768px) {
            height: 9.375rem;
          }

          p {
            width: 100%;
            text-align: center;
            color: ${white};
            font-size: 1em;
            letter-spacing: 0.1rem;
            border-radius: 0.625rem;
            margin: 1rem 0;
          }

          :first-child {
            span {
              font-size: 1.2em;
              color: #fff;
              text-shadow: 0 0 8px #00b7ff, 0 0 2px #00b7ff, 0 0 10px #00b7ff,
                0 0 6px #00b7ff, 0 0 20px #00b7ff, 0 0 20px #00b7ff,
                0 0 1px #00b7ff, 0 0 12px #00b7ff;
            }
          }

          :nth-child(2) {
            font-size: 1.1em;
            text-shadow: 0 0 10px ${primary}, 0 0 2px ${white},
              0 0 10px ${white}, 0 0 6px ${white}, 0 0 20px ${white},
              0 0 20px ${white}, 0 0 1px ${white}, 0 0 12px ${white};
          }
        }

        .photo {
          filter: drop-shadow(0 0 0.625rem #fff);

          figure {
            width: 9.375rem;
            height: 9.375rem;
            clip-path: polygon(
              25% 0%,
              75% 0%,
              100% 50%,
              75% 100%,
              25% 100%,
              0% 50%
            );
            position: relative;

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              background-color: ${secondary};
            }
          }
        }
        button {
          width: 9.375rem;
          height: 2.1875rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          outline-style: none;
          border-radius: 0.5rem;
          background-color: ${primary};
          box-shadow: 0.0625rem 0.0625rem 0.3125rem 0.125rem ${white};
          color: ${white};
          transition: transform 3s ease;

          @media (width >= 768px) {
            position: absolute;
            bottom: 6.875rem;
            left: 9.0625rem;
          }

          @media (width >= 1024px) {
            font-size: 0.9em;
          }

          &:active {
            box-shadow: none;
            transform: scale(0.9);
          }
        }
      }

      .card__footer {
        height: 2.9rem;
        position: relative;

        @media (width >= 768px) {
          height: 3.1rem;
        }

        img {
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          object-fit: cover;
        }

        img:first-child {
          @media (width >= 768px) {
            left: -0.625rem;
          }
        }

        img:last-child {
          transform: scaleX(-1);

          @media (width >= 768px) {
            width: 43.75rem;
            bottom: 15.625rem;
            transform: rotateZ(270deg) translateY(20.5rem);
          }
        }
      }
    }
  }
`;
