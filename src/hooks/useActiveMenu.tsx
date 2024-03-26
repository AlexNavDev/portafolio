import { useEffect, useState } from "react";

const useActiveMenu = () => {
  const [currentElementId, setCurrentElementId] = useState<string>("");

  const handleGetName = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elements = document.querySelectorAll("section[id]");

      let currentId = "";

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const elementBottom = elementTop + element.clientHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          currentId = element.id;
        }
      });

      setCurrentElementId(currentId);
    };

    // Manejar el evento de desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { handleGetName, currentElementId };
};
export default useActiveMenu;
