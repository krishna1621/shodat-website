import React, { useRef } from "react";
import ShodatHome from "./Section/01_ShodatHome/ShodatHome";
import IntroSection from "./Section/02_Introsection/Introsection";
import { Introsection2 } from "./Section/03_Introsection/Introsection2";
import { ShodatBox } from "./Section/04_ShodatBox/ShodatBox";
import ExplainableAISection from "./Section/05_Explanation/ExplantionableAISection";
import FinalFooter from "../Footer/FinalFooter";

const ShodatAI = () => {
  const introSectionRef = useRef(null);
  return (
    <>
      <div className="flex justify-center items-center w-auto ">
        <div className="container ">
          <ShodatHome scrollToRef={introSectionRef} />
          <IntroSection ref={introSectionRef} />
          <Introsection2 />
          <ShodatBox />
          <ExplainableAISection /> <FinalFooter />
        </div>
      </div>
    </>
  );
};

export default ShodatAI;
