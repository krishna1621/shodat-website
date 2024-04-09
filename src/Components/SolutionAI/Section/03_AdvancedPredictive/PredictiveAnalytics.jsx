import React from "react";
import predictiveAnalyticsImage from "../../../../Assets/Components/SolutionAI/predictiveAnalytics.png";

function PredictiveAnalytics() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-8 bg-[#E6F0F2] p-14">
        <div className="md:w-1/2 ">
          <img
            src={predictiveAnalyticsImage}
            alt="Predictive Analytics"
            className="w-full h-auto "
          />
        </div>

        <div className="md:w-3/5  pl-4 md:pl-10 mt-3">
          <div className="font-poppins md:text-[39px] text-2xl leading-9 md:leading-[58.5px]  font-semibold mb-4">
            Advanced Predictive Analytics
          </div>
          <div className="font-poppins text-sm leading-5 md:text-base md:last:leading-6 text-customGrey font-normal">
            Experience the next frontier of predictive analytics, where machine
            learning algorithms anticipate future trends with unprecedented
            accuracy.
          </div>
          <div className=" border-l-[5px] border-l-[#016C7B] px-4  py-2 mt-8">
            <div className=" font-poppins text-base leading-6 md:text-xl text-customBlue md:leading-8 font-medium">
              Empower your decision-making with foresight, enabling strategic
              planning and risk mitigation.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PredictiveAnalytics;
