import AboutMadlibWord3 from "../component/AboutMadlibWord3";
import { useState, useRef, useEffect } from "react";

function useMousee() {
  const [mPosition, setMPosition] = useState({
    x: null,
    y: null,
    mx: null,
    my: null,
  });

  useEffect(() => {
    function handle(e) {
      setMPosition({
        x: e.pageX,
        y: e.pageY,
        mx: e.movementX,
        my: e.movementY,
      });
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });
  return mPosition;
}

const about3 = () => {
  const { x, y, mx, my } = useMousee();

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

  const [changeTime, setChangeTime] = useState(3000);

  const [sTime, setSTime] = useState(mx);

  useEffect(() => {
    const interval = setInterval(() => {
      setSTime(mx);
    }, 16);
    return () => clearInterval(interval);
  }, [mx]);

  return (
    <div className="bg-gray-200 h-[100vh] w-full">
      <p className="font-[600] text-[6.2vw] leading-[1.15] pt-2 pr-3 pl-6 ">
        We're Real Good. We're a<br></br>
        <AboutMadlibWord3
          textColor={"text-[#2a94ff]"}
          madWords={madWords1}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        creative studio{" "}
        <AboutMadlibWord3
          textColor={"text-[#ffc128]"}
          madWords={madWords2}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        the{" "}
        <AboutMadlibWord3
          textColor={"text-[#ee341b]"}
          madWords={madWords3}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        between{" "}
        <AboutMadlibWord3
          textColor={"text-[#2a94ff]"}
          madWords={madWords4}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        and{" "}
        <AboutMadlibWord3
          textColor={"text-[#ffc128]"}
          madWords={madWords5}
          changeTime={changeTime}
          mx={sTime}
        />
        . We{" "}
        <AboutMadlibWord3
          textColor={"text-[#ee341b]"}
          madWords={madWords6}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        <AboutMadlibWord3
          textColor={"text-[#2a94ff]"}
          madWords={madWords7}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        and{" "}
        <AboutMadlibWord3
          textColor={"text-[#ffc128]"}
          madWords={madWords8}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        for{" "}
        <AboutMadlibWord3
          textColor={"text-[#ee341b]"}
          madWords={madWords9}
          changeTime={changeTime}
          mx={sTime}
        />{" "}
        that{" "}
        <AboutMadlibWord3
          textColor={"text-[#2a94ff]"}
          madWords={madWords10}
          changeTime={changeTime}
          mx={sTime}
        />
        ,{" "}
        <AboutMadlibWord3
          textColor={"text-[#ffc128]"}
          madWords={madWords11}
          changeTime={changeTime}
          mx={sTime}
        />
        , and{" "}
        <AboutMadlibWord3
          textColor={"text-[#ee341b]"}
          madWords={madWords12}
          changeTime={changeTime}
          mx={sTime}
        />
        .
      </p>
    </div>
  );
};

export default about3;
