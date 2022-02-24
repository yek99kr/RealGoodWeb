import AboutMadlibWord2 from "../component/AboutMadlibWord2";
import { useState } from "react";

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

  const changeTime = 2300;

  //   word[Math.floor(Math.random()*2)]

  return (
    <div className="bg-gray-200 h-[100vh] w-full">
      <p className="font-[600] text-[6.2vw] leading-[1.15] pt-2 pr-3 pl-6 ">
        We&#39;re Real Good. We&#39;re a<br></br>
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords1}
          changeTime={changeTime}
        />{" "}
        creative studio{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords2}
          changeTime={changeTime}
        />{" "}
        the{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords3}
          changeTime={changeTime}
        />{" "}
        between{" "}
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords4}
          changeTime={changeTime}
        />{" "}
        and{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords5}
          changeTime={changeTime}
        />
        . We{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords6}
          changeTime={changeTime}
        />{" "}
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords7}
          changeTime={changeTime}
        />{" "}
        and{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords8}
          changeTime={changeTime}
        />{" "}
        for{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords9}
          changeTime={changeTime}
        />{" "}
        that{" "}
        <AboutMadlibWord2
          textColor={"text-[#2a94ff]"}
          madWords={madWords10}
          changeTime={changeTime}
        />
        ,{" "}
        <AboutMadlibWord2
          textColor={"text-[#ffc128]"}
          madWords={madWords11}
          changeTime={changeTime}
        />
        , and{" "}
        <AboutMadlibWord2
          textColor={"text-[#ee341b]"}
          madWords={madWords12}
          changeTime={changeTime}
        />
        .
      </p>
    </div>
  );
};

export default about2;
