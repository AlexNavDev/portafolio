import { useEffect, useState } from "react";

const useGetDay = () => {
  const [getDay, setGetDay] = useState({
    day: "",
    message: "",
  });

  useEffect(() => {
    const getGreeting = () => {
      const time = new Date();
      const currentDay = time.toLocaleDateString("es-MX", {
        weekday: "long",
      });
      const hour = time.getHours();

      if (hour >= 7 && hour <= 12) {
        setGetDay({
          ...getDay,
          day: currentDay,
          message: "Buenos dias, espero estés teniendo un buen",
        });
      }

      if (hour > 12 && hour <= 18) {
        setGetDay({
          ...getDay,
          day: currentDay,
          message: "Buenas tardes, espero estés teniendo un buen",
        });
      }

      if (hour >= 18) {
        setGetDay({
          ...getDay,
          day: currentDay,
          message: "Buenas noches, espero estés teniendo un buen",
        });
      }
    };

    getGreeting();
  }, []);

  return { getDay };
};
export default useGetDay;
