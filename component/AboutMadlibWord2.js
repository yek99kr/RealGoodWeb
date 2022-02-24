import { useState, useEffect } from "react";

const AboutMadlibWord2 = ({
  textColor,
  madWords,
  mouseMoveTrue,
  changeTime,
}) => {
  const [mad, setMad] = useState(madWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMad(madWords[Math.floor(Math.random() * 2)]);
    }, changeTime);
    return () => clearInterval(interval);
  }, [mouseMoveTrue]);

  return (
    <span>
      <span className={`${textColor} cursor-pointer `}>{mad}</span>
    </span>
  );
};

export default AboutMadlibWord2;
