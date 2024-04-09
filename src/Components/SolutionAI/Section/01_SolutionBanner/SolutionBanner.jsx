import React from "react";
import backgroundImage from "../../../../Assets/Components/SolutionAI/hero-bg.png";
import ArrowRight from "../../../../Assets/Components/HomePage/01_Slider_Home/arrow-right.png";

const SolutionBanner = ({ scrollToRef }) => {
  const handleArrowClick = () => {
    const navbarHeight = parseInt(localStorage.getItem("navbarHeight")) || 0;
    const scrollToPosition = scrollToRef.current.offsetTop - navbarHeight;
    window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  };
  return (
    <>
      <div
        className="w-full h-[790px] bg-cover bg-center relative "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute ml-4 md:ml-16 mt-60 md:mt-80 ">
          <p className="text-3xl md:text-[61px] font-semibold leading-[50px] md:leading-[91.5px] font-poppins text-white ">
            Pioneering AI Innovations
          </p>
          <p className="text-2xl font-medium font-poppins md:text-[39px] leading-[58.5px] text-white pt-2 md:pt-4">
            Transforming data into intelligent action
          </p>
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0"
          onClick={handleArrowClick}
        >
          <div className="h-[100px] w-[100px] bg-[#F3D157]  flex items-center justify-center ">
            <img src={ArrowRight} alt="Arrow Right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionBanner;
