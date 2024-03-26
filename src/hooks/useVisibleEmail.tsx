import { useEffect, useState } from "react";

const useVisibleEmail = () => {
  const [isVisibleEmail, setIsVisibleEmail] = useState<boolean>(false);

  const handleVisibleEmail = async () => {
    try {
      await navigator.clipboard.writeText("navarro.alejandro@outlook.es");
      setIsVisibleEmail(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setIsVisibleEmail(false);
    }, 3000);

    return () => {
      clearInterval(time);
    };
  }, [isVisibleEmail]);

  return { handleVisibleEmail, isVisibleEmail };
};
export default useVisibleEmail;
