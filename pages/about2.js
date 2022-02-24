import AboutMadlibWord2 from "../component/AboutMadlibWord2";
import useMouse from "@react-hook/mouse-position";
import { useState, useRef } from "react";

const about2 = () => {
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

  const [changeTime, setChangeTime] = useState(2300);

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  const [mouseP, setMouseP] = useState(mouse.x);

  //   word[Math.floor(Math.random()*2)]

  return (
    <div className="bg-gray-200 h-[100vh] w-full" ref={ref}>
      <p className="font-[600] text-[6.2vw] leading-[1.15] pt-2 pr-3 pl-6 ">
        We're Real Good. We're a<br></br>
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords1}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        creative studio{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords2}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        the{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords3}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        between{" "}
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords4}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        and{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords5}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />
        . We{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords6}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords7}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        and{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords8}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        for{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords9}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />{" "}
        that{" "}
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords10}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />
        ,{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords11}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />
        , and{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords12}
          mouseMoveTrue={mouseP}
          changeTime={changeTime}
        />
        .
      </p>
    </div>
  );
};

export default about2;
