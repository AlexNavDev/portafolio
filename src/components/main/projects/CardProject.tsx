import { useState } from "react";
import { FlipCard } from "../../../assets/style/projects/cardProjects";

interface Props {
  index: number;
  idProject: number;
  name: string;
  info: string;
  api: string;
  tech: string;
  imageMovil: string;
  image: string;
  url: string;
  developer?: string;
}

const CardProject = (props: Props) => {
  const { index, idProject, name, info, api, tech, imageMovil, image, url } =
    props;

  const [isHover, setIsHover] = useState(false);

  const handleHover = (id: number) => {
    if (index + 1 == id) {
      setIsHover(!isHover);
    }
  };

  return (
    <>
      <FlipCard>
        <div className={`flip-card-inner ${isHover ? "active" : ""}`}>
          <div className="flip-card-front">
            <picture>
              <source media="(min-width:1024px)" srcSet={image} sizes="" />
              <img
                src={imageMovil ? imageMovil : image}
                loading="lazy"
                alt="imagen de proyecto"
              />
            </picture>
          </div>
          <div className="flip-card-back ">
            <div className="flip-card-back-content">
              <h3>{name}</h3>
              <p>{info}</p>
              <p>
                <em>{tech}</em>
              </p>
              {api && <p>{api}</p>}
            </div>
          </div>
        </div>
        <div className="flip-card-footer">
          <button onClick={() => handleHover(idProject)}>Descripción</button>
          <a href={url} target="_blank">
            Ver página
          </a>
        </div>
      </FlipCard>
    </>
  );
};

export default CardProject;
