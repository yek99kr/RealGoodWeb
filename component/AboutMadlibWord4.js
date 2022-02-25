import { useState } from "react";

const AboutMadlibWord4 = ({ textColor, madWords }) => {
  const [mad, setMad] = useState(madWords[0]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownColor1, setdropdownColor1] = useState("text-black");
  const [dropdownColor2, setdropdownColor2] = useState("text-black");
  const [dropdownColor3, setdropdownColor3] = useState("text-black");

  return (
    <select name="mad1" id="mad1" style={{ color: textColor }}>
      <option value="industry leading" className="text-bold">
        {madWords[0]}
      </option>
      <option value="plant based"> {madWords[1]}</option>
      <option value="industry leading"> {madWords[2]}</option>
    </select>
  );
};

export default AboutMadlibWord4;
