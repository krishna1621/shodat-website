import React from "react";
import NLPImage from "../../../../Assets/Components/SolutionAI/NLP.png";

function NaturalLanguageProcessing() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-8 bg-[#E6F0F2] p-14 ">
        <div className="md:w-1/2 ">
          <img
            src={NLPImage}
            alt="Predictive Analytics"
            className="w-full h-auto rounded-lg "
          />
        </div>

        <div className="md:w-3/5  pl-4 md:pl-10 mt-3">
          <div className="font-poppins md:text-[39px] text-2xl leading-9 md:leading-[58.5px]  font-semibold mb-4">
            Natural Language Processing (NLP)
          </div>
          <div className="font-poppins text-sm leading-5 md:text-base md:last:leading-6 text-customGrey font-normal">
            Revolutionize communication with machines through our advanced NLP
            solutions, enabling natural and meaningful interactions.
          </div>
          <div className=" border-l-[5px] border-l-[#016C7B] px-4  py-2 mt-8">
            <div className=" font-poppins text-base leading-6 md:text-xl text-customBlue md:leading-8 font-medium">
              Extract valuable insights from unstructured data sources and
              enhance user experiences.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NaturalLanguageProcessing;
