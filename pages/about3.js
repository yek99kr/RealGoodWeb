import AboutMadlibWord3 from "../component/AboutMadlibWord3";
import { useState, useEffect } from "react";
// import useMouse from "../hooks/useMouse";

const about3 = () => {
  // const [mPosition, setMPosition] = useState({
  //   x: null,
  //   y: null,
  //   mx: null,
  //   my: null,
  // });

  // useEffect(() => {
  //   function usehandle(e) {
  //     setMPosition({
  //       x: e.pageX,
  //       y: e.pageY,
  //       mx: e.movementX,
  //       my: e.movementY,
  //     });
  //   }
  //   document.addEventListener("mousemove", handle);
  //   return () => document.removeEventListener("mousemove", usehandle);
  // });

  // const mx = mPosition.mx;

  const madWords1 = ["industry leading", "plant based", "future proof"];
  const madWords2 = ["exploring", "inspiring", "navigating"];
  const madWords3 = ["intersection", "relationship", "language"];
  const madWords4 = ["art", "computers", "commerce"];
  const madWords5 = ["technology", "instagram", "biodiversity"];
  const madWords6 = ["make", "produce", "influence"];
  const madWords7 = ["things", "art", "AR experiences"];
  const madWords8 = ["animations", "cool vids", "memes"];
  const madWords9 = ["clients", "humans", "brand partners"];
  const madWords10 = ["inspire", "visualize", "live"];
  const madWords11 = ["educate", "laugh", "communicate"];
  const madWords12 = ["convert", "emote", "love"];

  return (
    <div className="bg-gray-200 h-[100vh] w-full">
      <p className="font-[600] text-[6.2vw] leading-[1.15] pt-2 pr-3 pl-6 ">
        We&#39;re Real Good. We&#39;re a<br></br>
        <AboutMadlibWord3
          textColor={"text-[#2a94ff]"}
          madWords={madWords1}
        />{" "}
        creative studio{" "}
        <AboutMadlibWord3 textColor={"text-[#ffc128]"} madWords={madWords2} />{" "}
        the{" "}
        <AboutMadlibWord3 textColor={"text-[#ee341b]"} madWords={madWords3} />{" "}
        between{" "}
        <AboutMadlibWord3 textColor={"text-[#2a94ff]"} madWords={madWords4} />{" "}
        and{" "}
        <AboutMadlibWord3 textColor={"text-[#ffc128]"} madWords={madWords5} />.
        We{" "}
        <AboutMadlibWord3 textColor={"text-[#ee341b]"} madWords={madWords6} />{" "}
        <AboutMadlibWord3 textColor={"text-[#2a94ff]"} madWords={madWords7} />{" "}
        and{" "}
        <AboutMadlibWord3 textColor={"text-[#ffc128]"} madWords={madWords8} />{" "}
        for{" "}
        <AboutMadlibWord3 textColor={"text-[#ee341b]"} madWords={madWords9} />{" "}
        that{" "}
        <AboutMadlibWord3 textColor={"text-[#2a94ff]"} madWords={madWords10} />,{" "}
        <AboutMadlibWord3 textColor={"text-[#ffc128]"} madWords={madWords11} />,
        and{" "}
        <AboutMadlibWord3 textColor={"text-[#ee341b]"} madWords={madWords12} />.
      </p>
    </div>
  );
};

export default about3;
