import { useState } from "react";
import {
  StyledContainerButtons,
  StyledSectionProjects,
} from "../../../assets/style/projects/projects";
import dataProjects from "../../../data/projects";
import CardProject from "./CardProject";

const Projects = () => {
  const [isVisibleProject, setIsVisibleProject] = useState<string>("react");

  return (
    <StyledSectionProjects id="section-projects">
      <div className="image-divider" id="projects">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>
      <h2>Proyectos</h2>

      <StyledContainerButtons>
        <button
          className={`${isVisibleProject === "react" ? "active-button" : ""}`}
          onClick={() => setIsVisibleProject("react")}
          aria-label="Mostrar proyectos en React">
          <span>React</span>
        </button>
        <button
          className={`${
            isVisibleProject === "typescript" ? "active-button" : ""
          }`}
          onClick={() => setIsVisibleProject("typescript")}
          aria-label="Mostrar proyectos en Typescript">
          <span>Typescript</span>
        </button>
      </StyledContainerButtons>

      <article>
        <div
          className={`cards__container ${
            isVisibleProject === "react" ? "activeR" : "activeT"
          }`}>
          {dataProjects[isVisibleProject].map((project, index) => {
            return (
              <CardProject key={project.idProject} {...project} index={index} />
            );
          })}
        </div>
      </article>
    </StyledSectionProjects>
  );
};

export default Projects;
