import React from "react";
import ComputerVisionImage from "../../../../Assets/Components/SolutionAI/ComputerVision.png";

function ComputerVision() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-8 bg-white p-14">
        <div className="md:w-3/5  pl-4 md:pl-0 sm:pt-3">
          <div className="font-poppins md:text-[39px] text-2xl leading-9 md:leading-[58.5px]  font-semibold mb-4">
            Computer Vision
          </div>
          <div className="font-poppins text-sm leading-5 md:text-base md:last:leading-6 text-customGrey font-normal">
            See the unseen with our computer vision innovations, bringing visual
            intelligence to automate and augment decision-making.
          </div>
          <div className=" border-l-[5px] border-l-[#016C7B] px-4  py-2 mt-8 mb-4">
            <div className=" font-poppins text-base leading-6 md:text-xl text-customBlue md:leading-8 font-medium">
              From image recognition to object detection, elevate your data
              analysis with the power of sight.
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img
            src={ComputerVisionImage}
            alt="Predictive Analytics"
            className="w-full h-auto "
          />
        </div>
      </div>
    </>
  );
}

export default ComputerVision;
