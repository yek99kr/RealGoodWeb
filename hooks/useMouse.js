import { useState, useEffect } from "react";

const useMouse = () => {
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

  return mPosition;
};

export default useMouse;
