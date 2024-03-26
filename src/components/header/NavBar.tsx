import { StyledHeader } from "../../assets/style/header/header";
import { RiMenu5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaRegUser, FaToolbox, FaFileCode } from "react-icons/fa";
import useGetDay from "../../hooks/useGetDay";
import useActiveMenu from "../../hooks/useActiveMenu";
import { useState } from "react";

const NavBar = () => {
  const { getDay } = useGetDay();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const { handleGetName, currentElementId } = useActiveMenu();

  const handleToggleMenu = (): void => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <StyledHeader $toggle={toggleMenu}>
      <div className="logo">
        <button onClick={() => handleGetName("home")}>
          <span>«</span> AlexNavDev <span>/»</span>
        </button>
      </div>

      <nav>
        <div className="container__day">
          <p>{getDay.message}</p>
          <p>{getDay.day}.</p>
        </div>
        <ul>
          <li onClick={() => setToggleMenu(false)}>
            <button onClick={() => handleGetName("home")}>
              <FaHome
                className={`icon ${currentElementId == "home" ? "active" : ""}`}
              />
              Inicio
            </button>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <button onClick={() => handleGetName("about")}>
              <FaRegUser
                className={`icon ${
                  currentElementId == "section-about" ? "active" : ""
                }`}
              />
              Sobre mí
            </button>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <button onClick={() => handleGetName("tools")}>
              <FaToolbox
                className={`icon ${
                  currentElementId == "section-tools" ? "active" : ""
                }`}
              />
              Habilidades
            </button>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <button onClick={() => handleGetName("projects")}>
              <FaFileCode
                className={`icon ${
                  currentElementId == "section-projects" ? "active" : ""
                }`}
              />
              Proyectos
            </button>
          </li>
        </ul>
      </nav>

      <div className="menu-hamburger" onClick={handleToggleMenu}>
        {toggleMenu ? <AiOutlineClose /> : <RiMenu5Line />}
      </div>
    </StyledHeader>
  );
};

export default NavBar;
