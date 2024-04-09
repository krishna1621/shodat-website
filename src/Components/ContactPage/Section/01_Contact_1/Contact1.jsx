import React from "react";
import backgroundImage from "../../../../Assets/Components/ContactPage/ContactPage.png";
import ArrowRight from "../../../../Assets/Components/HomePage/01_Slider_Home/arrow-right.png";

const Contact1 = ({ scrollToRef }) => {
  const handleArrowClick = () => {
    const navbarHeight = parseInt(localStorage.getItem("navbarHeight")) || 0;
    const scrollToPosition = scrollToRef.current.offsetTop - navbarHeight;
    window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  };
  return (
    <div
      className="w-full h-[790px] bg-cover bg-white bg-center relative "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute ml-4 md:ml-20 mt-60 md:mt-80 ">
        <p className="text-3xl md:text-[56px] font-bold leading-[67.2px] font-sans text-white ">
          Welcome to Shodat,
        </p>
        <p className="text-2xl font-normal font-Open sans lg:font-[34px] leading-10 text-white pt-2 md:pt-4">
          Where innovation converges with <br /> intelligence
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
  );
};
export default Contact1;
