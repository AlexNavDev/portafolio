import { StyledSectionAbout } from "../../../assets/style/about/about";
import imgUser from "../../../assets/img/user.svg";

const About = () => {
  return (
    <StyledSectionAbout id="section-about">
      <div className="image-divider" id="about">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>

      <h2> Sobre mí</h2>

      <div className="container__about">
        <div className="container__info">
          <p>
            Me considero una persona autodidacta, con gusto por la tecnología,
            programación y el diseño web. En estos momentos sumergiendome en el
            fascinante mundo de JavaScript.
          </p>
          <p>
            Aprovecho mi pasión por aprender y mi curiosidad por la tecnología
            para adquirir conocimientos en programación y aplicarlos al
            desarrollo web.
          </p>
          <p>
            Busco mejorar mis habilidades en JavaScript mientras trabajo en
            proyectos prácticos que me permitan experimentar y fortalecer mis
            capacidades.
          </p>
        </div>

        <figure>
          <img src={imgUser} alt="imagen demostrativa" loading="lazy" />
        </figure>
      </div>
    </StyledSectionAbout>
  );
};

export default About;
