import { useState, useEffect } from "react";
import useMouse from "../hooks/useMouse";

const AboutMadlibWord3 = ({ textColor, madWords }) => {
  const [mad, setMad] = useState(madWords[0]);

  const sTime = useMouse();

  // const [sTime, setSTime] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSTime(mx);
  //   }, 20);
  //   return () => clearInterval(interval);
  // }, [mx]);

  useEffect(() => {
    setMad(madWords[Math.floor(Math.random() * 2)]);
  }, [sTime]);

  return (
    <span>
      <span className={`${textColor} cursor-pointer `}>{mad}</span>
    </span>
  );
};

export default AboutMadlibWord3;
