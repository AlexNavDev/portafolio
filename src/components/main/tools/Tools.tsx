import { StyledContainerIcons } from "../../../assets/style/tools/icons";
import { StyledSectionTools } from "../../../assets/style/tools/tools";
import { icons } from "../../../data/icons";
import Card from "./Card";

const Tools = () => {
  return (
    <StyledSectionTools id="section-tools">
      <div className="image-divider" id="tools">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>
      <h2>Habilidades</h2>

      <StyledContainerIcons>
        {icons.map(({ title, name, url }) => (
          <Card title={title} name={name} url={url} key={name} />
        ))}
      </StyledContainerIcons>
    </StyledSectionTools>
  );
};

export default Tools;
