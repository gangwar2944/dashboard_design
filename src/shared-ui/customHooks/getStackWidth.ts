import { useState, useEffect } from "react";

export const useInnerWidth = () => {
  const headerHeight = 100; // header height
  const calculateStackWidth = () => {
    if (window.innerWidth < 700) {
      return window.innerWidth - headerHeight;
    } else if (window.innerWidth < 900) {
      return window.innerWidth - headerHeight;
    } else {
      return "100%";
    }
  };

  const [stackWidth, setStackWidth] = useState(calculateStackWidth);

  useEffect(() => {
    const handleResize = () => {
      setStackWidth(calculateStackWidth());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return stackWidth;
};
