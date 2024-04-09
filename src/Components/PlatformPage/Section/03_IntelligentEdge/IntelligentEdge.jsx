import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";
const IntelligentEdge = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-envenly bg-[#FFFBEF]  ">
        <div className="font-sans text-3xl md:text-[44px] leading-[66px] px-6 font-bold  mb-4 md:mb-0 md:ml-6">
          <h2>Smarter Operations with Intelligent Edge</h2>
        </div>

        <button
          className="flex items-center justify-center w-40 ml-6 h-11 text-black font-normal  rounded-3xl"
          style={{ background: "#F3D157" }}
        >
          <img
            alt="left Arrow"
            src={LeftArrow}
            className="w-11 h-11 mr-2 rounded-full "
            style={{
              background: "#ffffff",
              width: "24px",
              height: "24px",
            }}
          />
          <span>Free Trail</span>
        </button>
      </div>
    </>
  );
};

export default IntelligentEdge;
