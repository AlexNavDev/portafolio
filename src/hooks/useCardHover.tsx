import { useEffect, RefObject } from "react";

interface Props {
  wrapperRef: RefObject<HTMLDivElement>;
  cardRef: RefObject<HTMLDivElement>;
}

const useCardHover = ({ wrapperRef, cardRef }: Props) => {
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const wrapper = wrapperRef.current;
      const card = cardRef.current;

      if (card && wrapper) {
        card.style.transition = "none";

        const { width, height } = wrapper.getBoundingClientRect();

        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const { pageX, pageY } = e;

        const rotationX = ((pageX - halfWidth) / halfWidth) * 10;
        const rotationY = ((pageY - halfHeight) / halfHeight) * 10;

        card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }
    };

    const onMouseLeave = () => {
      const card = cardRef.current;

      if (card) {
        card.style.transition = "transform .5s ease-in-out";
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
      }
    };

    const wrapper = wrapperRef.current;

    if (wrapper) {
      wrapper.addEventListener("mousemove", onMouseMove);
      wrapper.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", onMouseMove);
        wrapper.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [wrapperRef, cardRef]);
};

export default useCardHover;
