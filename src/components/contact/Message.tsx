import styled from "styled-components";
import { COLORS } from "../../assets/style/colors";

interface Props {
  message: string;
}

const { primary, fourth, fifth } = COLORS;

const StyledContainerMessage = styled.div`
  position: absolute;
  bottom: 4.375rem;

  p {
    width: 17.5rem;
    height: 3.125rem;
    background-color: ${fifth};
    color: ${primary};
    margin-bottom: 1.25rem;
    text-shadow: 1px 1px 2px ${fourth};
    letter-spacing: 1px;
    border-radius: 8px;
    text-align: center;
    padding: 0.8rem 0;
    animation: animationEmail 2s ease 0s 1 normal forwards;
  }

  @keyframes animationEmail {
    0% {
      animation-timing-function: ease-out;
      transform: scale(1);
      transform-origin: center center;
    }

    10% {
      animation-timing-function: ease-in;
      transform: scale(0.91);
    }

    17% {
      animation-timing-function: ease-out;
      transform: scale(0.98);
    }

    33% {
      animation-timing-function: ease-in;
      transform: scale(0.87);
    }

    45% {
      animation-timing-function: ease-out;
      transform: scale(1);
    }
  }
`;

const Message = ({ message }: Props) => {
  return (
    <StyledContainerMessage>
      <p>{message}</p>
    </StyledContainerMessage>
  );
};

export default Message;
