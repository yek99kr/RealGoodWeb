import AboutMadlibWord5 from "../component/AboutMadlibWord5";

const about5 = () => {
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
      <p className="font-[600] text-[4.4vw] leading-[1.4] pt-2 pr-3 pl-6 ">
        We&apos;re Real Good. We&apos;re a<br></br>
        <AboutMadlibWord5 textColor={"#2a94ff"} madWords={madWords1} /> creative
        studio <AboutMadlibWord5 textColor={"#ffc128"} madWords={madWords2} />{" "}
        the <AboutMadlibWord5 textColor={"#ee341b"} madWords={madWords3} />{" "}
        between <AboutMadlibWord5 textColor={"#2a94ff"} madWords={madWords4} />{" "}
        and <AboutMadlibWord5 textColor={"#ffc128"} madWords={madWords5} />. We{" "}
        <AboutMadlibWord5 textColor={"#ee341b"} madWords={madWords6} />{" "}
        <AboutMadlibWord5 textColor={"#2a94ff"} madWords={madWords7} /> and{" "}
        <AboutMadlibWord5 textColor={"#ffc128"} madWords={madWords8} /> for{" "}
        <AboutMadlibWord5 textColor={"#ee341b"} madWords={madWords9} /> that{" "}
        <AboutMadlibWord5 textColor={"#2a94ff"} madWords={madWords10} />,{" "}
        <AboutMadlibWord5 textColor={"#ffc128"} madWords={madWords11} />, and{" "}
        <AboutMadlibWord5 textColor={"#ee341b"} madWords={madWords12} />.
      </p>
    </div>
  );
};

export default about5;
