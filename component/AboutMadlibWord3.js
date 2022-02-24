import { useState, useEffect } from "react";

const AboutMadlibWord3 = ({ textColor, madWords, mx }) => {
  const [mad, setMad] = useState(madWords[0]);
  // const [dropdownColor1, setdropdownColor1] = useState("text-black");
  // const [dropdownColor2, setdropdownColor2] = useState("text-black");
  // const [dropdownColor3, setdropdownColor3] = useState("text-black");
  // setInterval(() => {
  //   // Your custom logic here
  //   setMad(madWords[Math.floor(Math.random() * 2)]);
  // }, 1000);

  useEffect(() => {
    // eslint-disable-line
    setMad(madWords[Math.floor(Math.random() * 2)]);
  }, [mx]);

  // useEffect(() => {
  //   if (mx === 0) return;
  //   setChangeTime(500);
  // }, [mx]);

  // useEffect(() => {
  //   // if (mx === 0 || !mx) return;
  //   console.log(mx);
  //   // console.log((2 / (Math.abs(mx) + 1).toFixed(1)) * 500);
  //   if (mx === 0 || mx === null) return;

  //   const interval = setInterval(() => {
  //     setMad(madWords[Math.floor(Math.random() * 2)]);
  //   }, 100);
  //   return () => clearInterval(interval);
  // }, [mx]);

  return (
    <span>
      <span className={`${textColor} cursor-pointer `}>{mad}</span>
    </span>
  );
};

export default AboutMadlibWord3;
