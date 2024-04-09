import React, { forwardRef } from "react";

const ParaGraph = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="bg-[#161615] text-white p-8">
        <p className="font-sans lg:text-[44px] text-2xl font-light lg:leading-[55px] leading-tight text-left lg:px-5">
          Let's begin a conversation to explore tailored AI solutions that{" "}
          <br />
          align with your business goals, driving growth, efficiency, and a
          competitive edge.
        </p>
      </div>
    </div>
  );
});

export default ParaGraph;
