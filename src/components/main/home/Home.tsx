import { RefObject, useRef } from "react";
import { StyledSectionHome } from "../../../assets/style/main/home";
import Contact from "../../contact/Contact";
import Foto from "../../../assets/img/foto.png";
import ImageDivider from "../../../assets/img/Frame.svg";
import useVisibleEmail from "../../../hooks/useVisibleEmail";
import useCardHover from "../../../hooks/useCardHover";
import useActiveMenu from "../../../hooks/useActiveMenu";

const Home = () => {
  const { handleVisibleEmail, isVisibleEmail } = useVisibleEmail();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useCardHover({ wrapperRef, cardRef });
  const { handleGetName, currentElementId } = useActiveMenu();

  return (
    <StyledSectionHome id="home">
      <div className="wrapper" ref={wrapperRef as RefObject<HTMLDivElement>}>
        <div className="card" ref={cardRef as RefObject<HTMLDivElement>}>
          <h1>
            <span>«¡</span>Hola mundo<span>!»</span>
          </h1>
          <div className="card__body">
            <div className="information">
              <p>
                Mi nombre es <span>Alejandro Navarro</span>
              </p>

              <p>Desarrollador Frontend</p>
            </div>

            <div className="photo">
              <figure>
                <img src={Foto} alt="Foto Alejandro" />
              </figure>
            </div>
            <button
              aria-label=" Haz clic para ver los proyectos disponibles."
              onClick={() => handleGetName("projects")}>
              <p
                className={`icon ${
                  currentElementId == "section-projects" ? "active" : ""
                }`}
              />
              Ver Proyectos
            </button>
          </div>
          <div className="card__footer">
            <img src={ImageDivider} alt="imagen-divisora" />
            <img src={ImageDivider} alt="imagen-divisora" />
          </div>
        </div>
      </div>

      <Contact
        handleVisibleEmail={handleVisibleEmail}
        isVisibleEmail={isVisibleEmail}
      />
    </StyledSectionHome>
  );
};

export default Home;
