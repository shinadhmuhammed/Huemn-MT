import { useState, useEffect } from "react";

const useToggleText = (intervalDuration = 2000) => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  return showText;
};

export default useToggleText;
