import React, { forwardRef } from "react";

const ParaGraph = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}>
        <div className="bg-[#161615] text-white px-10 py-8">
          <p className="font-poppins text-xl md:text-3xl font-light md:leading-[46.5px] leading-8 text-left lg:px-5">
            Embark on a journey of cutting-edge discovery as we redefine
            possibilities through groundbreaking AI innovations at Shodat.
          </p>
        </div>
      </div>
    </>
  );
});

export default ParaGraph;
