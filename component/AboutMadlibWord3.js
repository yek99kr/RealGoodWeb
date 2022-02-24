import { useState, useEffect } from "react";
import useMouse from "../hooks/useMouse";

const AboutMadlibWord3 = ({ textColor, madWords }) => {
  const { x, y, mx, my } = useMouse();

  const [mad, setMad] = useState(madWords[0]);

  useEffect(() => {
    setMad(madWords[Math.floor(Math.random() * 2)]);
  }, [mx]);

  const [sTime, setSTime] = useState(mx);

  useEffect(() => {
    const interval = setInterval(() => {
      setSTime(mx);
    }, 16);
    return () => clearInterval(interval);
  }, [mx]);

  return (
    <span>
      <span className={`${textColor} cursor-pointer `}>{mad}</span>
    </span>
  );
};

export default AboutMadlibWord3;
