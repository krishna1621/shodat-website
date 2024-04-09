import React from "react";
import CognitiveComputingImage from "../../../../Assets/Components/SolutionAI/cognitive.png";

function CognitiveComputing() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-8 bg-white p-14">
        <div className="md:w-3/5  pl-4 md:pl-0 sm:pt-3">
          <div className="font-poppins md:text-[39px] text-2xl leading-9 md:leading-[58.5px]  font-semibold mb-4">
            Cognitive Computing
          </div>
          <div className="font-poppins text-sm leading-5 md:text-base md:last:leading-6 text-customGrey font-normal">
            Unleash the power of cognitive computing for systems that learn,
            reason, and interact seamlessly with human-like intelligence.
          </div>
          <div className=" border-l-[5px] border-l-[#016C7B] px-4  py-2 mt-8 mb-4">
            <div className=" font-poppins text-base leading-6 md:text-xl text-customBlue md:leading-8 font-medium">
              Transform your business processes with AI systems that continually
              adapt and evolve.
            </div>
          </div>
        </div>

        <div className="md:w-1/2 ">
          <img
            src={CognitiveComputingImage}
            alt="Predictive Analytics"
            className="w-full h-auto "
          />
        </div>
      </div>
    </>
  );
}

export default CognitiveComputing;
