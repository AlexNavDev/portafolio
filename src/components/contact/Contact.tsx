import { StyledContainerContact } from "../../assets/style/contact/contact";
import IconCV from "../../assets/icons/cv.svg";
import Message from "./Message";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Pdf from "../../data/CV-Alejandro.pdf";

interface Props {
  handleVisibleEmail: () => void;
  isVisibleEmail: boolean;
}

const Contact = ({ handleVisibleEmail, isVisibleEmail }: Props) => {
  return (
    <StyledContainerContact>
      <figure>
        <a href="https://github.com/AlexNavDev" target="_blank">
          <FaGithub />
        </a>
      </figure>

      <figure>
        <a
          href="https://www.linkedin.com/in/alejandro-navarro-dev/"
          target="_blank">
          <FaLinkedin />
        </a>
      </figure>

      <figure>
        <button onClick={handleVisibleEmail}>
          <MdEmail />
        </button>
      </figure>

      <figure>
        <a href={Pdf} target="_blank">
          <img src={IconCV} alt="logo CV" loading="lazy" />
        </a>
      </figure>

      {isVisibleEmail && <Message message="Email copiado al portapapeles" />}
    </StyledContainerContact>
  );
};

export default Contact;
