import React, { forwardRef } from "react";

const IntroSection = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <div>
          <div className="  bg-[#1C1B1B] p-2 z-10">
            <p className="text-2xl md:text-[44px] font-light font-Poppins text-white ml-5 md:ml-12 mt-4 md:mt-6 mb-4 md:mb-6 leading-10 md:leading-[55px]">
              Shodat’s streamlined data and AI solutions pave the way for a
              <br />
              frictionless future, allowing you to surpass these obstacles and
              <br />
              succeed in your initiatives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

export default IntroSection;
