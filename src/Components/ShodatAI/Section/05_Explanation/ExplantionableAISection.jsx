import React from "react";
import img2 from "../../../../Assets/Components/ShodaAIPage/ExplainableAI.png";
import img1 from "../../../../Assets/Components/ShodaAIPage/AIEthics.png";

const ExplainableAISection = () => {
  return (
    <>
      <div>
        <div className="left-0 md:mx-12  z-20 mt-20 md:mt-0  grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-lg md:text-xl bg-[#fbf7ff]  lg:text-2xl pb-10 font-normal font-Poppins text-black ml-5 md:ml-9 mt-4 md:mt-8 mb-4 md:mb-0 leading-9 md:leading-14">
            <img src={img2} alt="AI"></img>
            <h1 className="font-semibold text-4xl leading-10 ml-4 text-black">
              Explainable AI (XAI)
            </h1>

            <p className="font-normal text-base leading-6 text-gray-600 ml-4 align-bottom mt-4">
              Uncover the reasoning behind AI decisions with Explainable AI,
              <br />
              providing transparency and building trust in machine-driven
              choices.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 ml-4 align-bottom mt-4">
              We at Shodat, focus on developing AI systems that can provide
              clear and <br />
              understandable explanations for their decisions.
            </p>
          </div>
          <div className="text-lg md:text-xl bg-[#fbf7ff]  lg:text-2xl font-normal font-Poppins text-black ml-5 md:ml-9 mt-4 md:mt-8 mb-4 md:mb-0  leading-9 md:leading-14">
            <img src={img1} alt="AI Ethics"></img>
            <h1 className="font-semibold text-4xl leading-10 ml-4 text-black">
              AI Ethics and Bias Mitigation
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600  ml-4 align-bottom mt-4">
              At Shodat we pioneer responsible AI practices with a focus on
              ethics and
              <br /> bias mitigation, ensuring fairness and accountability in
              every algorithm.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 ml-4 align-bottom mt-4 mb-6 md:mb-0">
              Addressing ethical considerations and biases in AI algorithms to
              ensure <br />
              fairness and responsible use.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplainableAISection;
