import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";
const ScheduleMeetingForm1 = () => {
  return (
    <>
      <div>
        <h2 className="font-sans text-[26px] md:text-[40px] font-semibold text-white  mb-4 md:mb-6  md:leading-[60px]">
          Unlock the untapped potential of your business with the transformative
          capabilities of AI.
        </h2>
        <p className="font-openSans text-base md:text-[22px]  font-light text-white  mb-4 md:mb-6 md:leading-[30px] ">
          From automating repetitive tasks to optimizing decision-making through{" "}
          advanced analytics, artificial intelligence is the key to scalability
          and innovation.
        </p>
        <button
          className=" text-black font-openSans text-base font-normal py-2 px-4 h-11  w-40 rounded-full flex items-center justify-center"
          style={{ background: "#F3D157" }}
        >
          <img
            src={LeftArrow}
            className="w-11 h-11 mr-2 rounded-full "
            alt="Right Arrow"
            style={{
              background: "#ffffff",
              width: "24px",
              height: "24px",
            }}
          />
          <span>Let’s Talk AI</span>
        </button>
      </div>
    </>
  );
};

export default ScheduleMeetingForm1;
