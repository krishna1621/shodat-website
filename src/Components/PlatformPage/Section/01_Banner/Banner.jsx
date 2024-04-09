import React from "react";
import backgroundImage from "../../../../Assets/Components/PlatformPage/platform-banner.png";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";
function Banner() {
  return (
    <>
      <div>
        <div className="relative mt-32 ">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-[600px] md:h-[700px] rounded-[50px] md:rounded-[70px] lg:rounded-none lg:h-[580px]  md:px-10 px-5 md:mt-10 mt-16"
          />
          <div className="absolute top-14 md:left-8 left-5 md:p-10 md:mt-0 md:w-10/12">
            <h1 className="md:text-[56px] text-[30px]  px-10 pt-8 md:px-0 md:py-0 font-bold text-white leading-[40px]  md:leading-[70px]">
              The value of data lies not in having it, but in its precise and
              strategic utilization through advanced AI
            </h1>
            <button
              className=" text-black font-openSans text-base text-nowrap font-normal py-2 px-4 md:h-11 md:w-48 h-10 w-30 
            rounded-full flex items-center justify-center md:ml-2 md:mt-16 mt-10 ml-10"
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
              <span>Explore Solutions</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
