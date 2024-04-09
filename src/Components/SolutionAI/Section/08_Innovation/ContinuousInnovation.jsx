import React from "react";

function ContinuousInnovation() {
  return (
    <>
      <div className="w-full flex flex-col bg-[#E6F0F2] px-10 py-5">
        <div className="font-poppins text-2xl md:text-3xl leading-8 md:leading-[46.5px] px-4 font-semibold mb-4">
          Continuous Innovation
        </div>
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 p-4">
            <div className="font-poppins text-lg md:text-xl leading-7 text-customBlue font-medium mb-2">
              R&D Initiatives
            </div>
            <div className="font-sans text-base md:text-lg leading-5 text-customGrey1 font-normal mb-4">
              Stay at the forefront of AI advancements through our ongoing
              research and development initiatives.
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="font-poppins text-lg md:text-xl leading-7 text-customBlue font-medium mb-2">
              Partnerships
            </div>
            <div className="font-sans text-base md:text-lg leading-5 text-customGrey1 font-normal mb-4">
              Collaborate with us on the frontier of AI innovation through
              strategic partnerships and co-innovation opportunities.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContinuousInnovation;
