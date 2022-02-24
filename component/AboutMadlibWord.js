import { useState } from "react";

const AboutMadlibWord = ({ textColor, madWords }) => {
  const [mad, setMad] = useState(madWords[0]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownColor1, setdropdownColor1] = useState("text-black");
  const [dropdownColor2, setdropdownColor2] = useState("text-black");
  const [dropdownColor3, setdropdownColor3] = useState("text-black");

  return (
    <span
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <span className={`cursor-pointer ${textColor}`}>{mad}</span>

      {showDropdown && (
        <span>
          <span
            onClick={() => setMad(madWords[0])}
            onMouseEnter={() => setdropdownColor1(`${textColor}`)}
            onMouseLeave={() => setdropdownColor1("text-black")}
            className={`text-[5px] ${dropdownColor1}  fontsize`}
          >
            {" "}
            ({madWords[0]}){" "}
          </span>
          <span
            onClick={() => setMad(madWords[1])}
            onMouseEnter={() => setdropdownColor2(`${textColor}`)}
            onMouseLeave={() => setdropdownColor2("text-black")}
            className={`${dropdownColor2}  fontsize`}
          >
            {" "}
            ({madWords[1]}){" "}
          </span>
          <span
            onClick={() => setMad(madWords[2])}
            onMouseEnter={() => setdropdownColor3(`${textColor}`)}
            onMouseLeave={() => setdropdownColor3("text-black")}
            className={`${dropdownColor3} cursor-pointer fontsize`}
          >
            {" "}
            ({madWords[2]}){" "}
          </span>
        </span>
      )}
    </span>
  );
};

export default AboutMadlibWord;
