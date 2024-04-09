import React from "react";
import AI from "../../../../Assets/Components/PlatformPage/AI.png";
function EdgeInfrastructure() {
  return (
    <>
      <div className="bg-[#FFFBEF] py-8">
        <div className="md:w-full flex-row  p-8">
          <h2 className="font-sans text-3xl md:text-[34px] leading-[50px] font-semibold mb-4 md:ml-6">
            Edge Infrastructure
          </h2>
          <p className="md:text-[27px] text-2xl leading-10 font-sans font-normal text-[#57647C] md:ml-6">
            Data integration fabric deployable at global scale for bespoke
            customer needs. Compute and storage{" "}
          </p>
          <p className="md:text-[27px] text-2xl leading-10 font-sans font-normal text-[#57647C] md:ml-6">
            designed for the Edge to enable fast and secure data aggregation and
            harmonization.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  mb-5 gap-x-3.5 lg:ml-4 ">
          <div className="w-full lg:w-[770px] bg-[#F9C407] rounded-lg p-8 mt-5 lg:mx-10">
            <h3 className="font-sans text-[23px] md:text-[27px] font-semibold leading-10 mb-4">
              eOps Fabric Platform
            </h3>
            <p className="font-sans text-xl md:text-2xl font-normal text-[#57647C] leading-9 mb-4">
              Edge enabled data mesh with management, processing, orchestration
              & compliance features to enable agile development and secured
              delivery of analytics applications and ML optimised data models to
              meet high paced business demands.
            </p>
          </div>

          <div className="w-full lg:w-[488px] mt-5   lg:mx-2">
            <img src={AI} alt="Image" className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EdgeInfrastructure;
