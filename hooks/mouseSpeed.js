import { useState, useEffect } from "react";

function useMouse() {
  const [mPosition, setMPosition] = useState({
    x: null,
    y: null,
    movementX: null,
    movementY: null,
  });

  useEffect(() => {
    function handle(e) {
      setMousePositon({
        x: e.pageX,
        y: e.pageY,
        movementX: e.movementX,
        movementY: e.movementY,
      });
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });
}

return mPosition;
