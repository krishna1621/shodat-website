import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";

function InnovationJourney() {
  return (
    <>
      <div className="w-full px-10 py-10 bg-customBlue">
        <div className="font-poppins text-[31px] px-5 leading-[46.5px] text-white font-semibold mb-4">
          Ready to embark on your AI innovation journey?
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:px-5">
          <div className="font-poppins text-base leading-6 px-4 text-white font-normal md:w-1/2 md:px-0 mb-4 md:mb-0">
            Join our innovation workshop to explore custom solutions tailored to
            your business.
          </div>
          <div className="px-4">
            <button
              className="flex items-center justify-center w-full md:w-40 h-11 text-black font-normal rounded-3xl"
              style={{ background: "#F3D157" }}
            >
              <img
                src={LeftArrow}
                alt="left Arrow"
                className="w-11 h-11 mr-2 rounded-full "
                style={{
                  background: "#ffffff",
                  width: "24px",
                  height: "24px",
                }}
              />

              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnovationJourney;
