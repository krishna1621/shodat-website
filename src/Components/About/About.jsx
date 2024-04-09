import React from "react";
import AboutBanner from "./Section/01_AboutBanner/AboutBanner";
import AboutInnovate from "./Section/02_AboutInnovate/AboutInnovate";
import AboutVision from "./Section/03_AboutVision/AboutVision";
import Leadership from "./Section/04_Leadership/Leadership";
import Countries from "./Section/05_Countries/Countries";
import FinalFooter from "../Footer/FinalFooter";

function About() {
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <AboutBanner />
        <AboutInnovate />
        <AboutVision />
        <Leadership />
        <Countries /> <FinalFooter />
      </div>
    </div>
  );
}

export default About;
