import { useState, useEffect } from "react";
import useMouse from "../hooks/useMouse";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const AboutMadlibWord5 = ({ textColor, madWords }) => {
  const { x, y, mx, my } = useMouse();

  const [sTime, setSTime] = useState(1);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSTime(mx);
    }, 16);
    return () => clearInterval(interval);
  }, [change ? mx : null]);

  useEffect(() => {
    shuffleArray(madWords);
  }, [sTime]);

  function fixedWord() {
    setChange(false);
  }

  return (
    <select
      onClick={fixedWord}
      name="mad1"
      id="mad1"
      style={{ color: textColor }}
    >
      <option value="0" className="text-bold">
        {madWords[0]}
      </option>
      <option value="1"> {madWords[1]}</option>
      <option value="2"> {madWords[2]}</option>
    </select>
  );
};

export default AboutMadlibWord5;
