import styled from "styled-components";

export const StyledContainerContact = styled.div`
  width: 100%;
  height: 65px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media (width >= 1024px) {
    width: 60%;
    border-radius: 10px;
  }

  figure {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 30%;
    box-shadow: 0px 6px 5px -5px #fff;
    display: grid;
    place-items: center;

    a {
      width: 35px;
      height: 35px;
      background-color: transparent;
      display: initial;
      font-size: 2rem;
      color: #000;

      svg {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }

    button {
      width: 35px;
      height: 35px;
      outline-style: none;
      border: none;
      background-color: transparent;
      transition: transform 3s ease;
      font-size: 2rem;

      &:active {
        box-shadow: none;
        transform: scale(0.9);
      }
    }

    img {
      width: 100%;
    }
  }
`;
