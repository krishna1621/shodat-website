import React from "react";
import eOps from "../../../../Assets/Components/PlatformPage/eOps.png";
function WhyeOps() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#FFFBEF] pt-5">
        <div className="md:w-1/4 p-4 ">
          <h1 className="text-[34px] font-sans leading-[40.8px] font-semibold mb-4 flex justify-center md:justify-start md:ml-8 ">
            Why eOps?
          </h1>
          <div className="flex justify-center md:justify-start md:ml-6">
            <img
              src={eOps}
              alt="eOps"
              className=" md:w-[167px] md:h-[150px]  mb-4 "
            />
          </div>
        </div>

        <div className="md:w-1/3 p-4 ">
          <p className="text-base font-normal mb-6">
            &#10003; &nbsp;Turnkey enterprise platform for all data integration
            & analytics needs.
          </p>
          <p className="text-base font-normal mb-6">
            &#10003; &nbsp; No implementation delays with minimal
            customizations.
          </p>
          <p className="text-base font-normal mb-6">
            &#10003; &nbsp; Seamless deployments & built for global scale.
          </p>
        </div>

        <div className="md:w-1/3 p-4">
          <p className="text-base font-normal mb-6">
            &#10003; &nbsp;Industry-proven ML models.
          </p>
          <p className="text-base font-normal mb-6">
            &#10003; &nbsp; Consistent CSAT ratings of 95% and above.
          </p>
          <p className="text-base font-normal mb-6">
            &#10003; &nbsp; Low/No code data ingestion, harmonization & ML
            features.
          </p>
        </div>
      </div>
    </>
  );
}

export default WhyeOps;
