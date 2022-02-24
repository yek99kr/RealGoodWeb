import { useState, useEffect } from "react";

const AboutMadlibWord2 = ({
  textColor,
  madWords,
  mouseMoveTrue,
  changeTime,
}) => {
  const [mad, setMad] = useState(madWords[0]);

  const [showDropdown, setShowDropdown] = useState(false);
  // const [dropdownColor1, setdropdownColor1] = useState("text-black");
  // const [dropdownColor2, setdropdownColor2] = useState("text-black");
  // const [dropdownColor3, setdropdownColor3] = useState("text-black");
  // setInterval(() => {
  //   // Your custom logic here
  //   setMad(madWords[Math.floor(Math.random() * 2)]);
  // }, 1000);

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
