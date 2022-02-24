import { useState, useEffect } from "react";

const useMouse = () => {
  const [sTime, setSTime] = useState(1);
  const [mPosition, setMPosition] = useState({
    x: null,
    y: null,
    mx: null,
    my: null,
  });

  useEffect(() => {
    function handle(e) {
      setMPosition({
        x: e.pageX,
        y: e.pageY,
        mx: e.movementX,
        my: e.movementY,
      });
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSTime(mPosition.mx);
    }, 12);
    return () => clearInterval(interval);
  }, [mPosition.mx]);

  return sTime;
};

export default useMouse;
