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
      <figure title="Github">
        <a
          href="https://github.com/AlexNavDev"
          target="_blank"
          rel="noreferrer">
          <FaGithub />
        </a>
      </figure>

      <figure title="Linkedin">
        <a
          href="https://www.linkedin.com/in/alejandro-navarro-dev/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin />
        </a>
      </figure>

      <figure title="Correo electrónico">
        <button
          onClick={handleVisibleEmail}
          aria-label="Mostrar dirección de correo electrónico">
          <MdEmail />
        </button>
      </figure>

      <figure title="Curriculum Vitae">
        <a href={Pdf} target="_blank" rel="noreferrer">
          <img src={IconCV} alt="logo CV" loading="lazy" />
        </a>
      </figure>

      {isVisibleEmail && <Message message="Email copiado al portapapeles" />}
    </StyledContainerContact>
  );
};

export default Contact;
