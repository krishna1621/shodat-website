import React from "react";
import EmbracingImages from "./EmbracingImages";

import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";
const EmbracingPower = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <div className="px-8 py-16 bg-white md:px-12 lg:pb-14 lg:py-0 md:mt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h1 className="text-[26px] font-sans md:text-[44px]  md:leading-[52.8px] ">
              <span className="font-bold  text-[#340D73]">Embracing</span>

              <span className="text-black font-light">
                &nbsp; power of data and advanced AI for the automotive industry
              </span>
            </h1>
            <p className="mt-4  text-[#57647C] font-normal text-base md:leading-7 font-Poppins">
              How a subsidiary of the Japanese automotive manufacturer producing
              commercial vehicles and diesel engines achieved 30% reduction in
              year on year IT spend with improved infrastructure efficiency and
              minimal operational overhead.
            </p>

            <button
              className=" text-black font-openSans text-base font-normal py-2 mt-5 px-4 h-11  w-60 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
              }}
              onClick={handleClick}
            >
              <img
                src={LeftArrow}
                alt="Right Arrow"
                className="w-11 h-11 mr-2 rounded-full "
                style={{
                  background: "#ffffff",
                  width: "24px",
                  height: "24px",
                }}
              />
              <span className="font-medium text-base leading-6 font-poppins text-white">
                Watch AI in Action
              </span>
            </button>
          </div>
          <div className=" lg:block">
            <EmbracingImages />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbracingPower;
