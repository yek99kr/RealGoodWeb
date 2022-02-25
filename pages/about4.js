import AboutMadlibWord4 from "../component/AboutMadlibWord4";

const about4 = () => {
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
      <p className="font-[600] text-[3vw] leading-[1.4] pt-2 pr-3 pl-6 ">
        We&apos;re Real Good. We&apos;re a<br></br>
        <AboutMadlibWord4 textColor={"#2a94ff"} madWords={madWords1} /> creative
        studio <AboutMadlibWord4 textColor={"#ffc128"} madWords={madWords2} />{" "}
        the <AboutMadlibWord4 textColor={"#ee341b"} madWords={madWords3} />{" "}
        between <AboutMadlibWord4 textColor={"#2a94ff"} madWords={madWords4} />{" "}
        and <AboutMadlibWord4 textColor={"#ffc128"} madWords={madWords5} />. We{" "}
        <AboutMadlibWord4 textColor={"#ee341b"} madWords={madWords6} />{" "}
        <AboutMadlibWord4 textColor={"#2a94ff"} madWords={madWords7} /> and{" "}
        <AboutMadlibWord4 textColor={"#ffc128"} madWords={madWords8} /> for{" "}
        <AboutMadlibWord4 textColor={"#ee341b"} madWords={madWords9} /> that{" "}
        <AboutMadlibWord4 textColor={"#2a94ff"} madWords={madWords10} />,{" "}
        <AboutMadlibWord4 textColor={"#ffc128"} madWords={madWords11} />, and{" "}
        <AboutMadlibWord4 textColor={"#ee341b"} madWords={madWords12} />.
      </p>
    </div>
  );
};

export default about4;
