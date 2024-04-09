import React from "react";
import map from "../../../../Assets/Components/ContactPage/map.png";
const MapAddress = () => {
  return (
    <div className="flex justify-center bg-white flex-col items-center">
      <img
        src={map}
        alt="Image"
        className="w-full mb-4   lg:max-w-2xl md:mt-8"
      />
      <div className="flex justify-center w-full lg:max-w-2xl ">
        <div className="w-full lg:w-1/2 px-2 py-4">
          <div className="mb-8">
            <div className="font-sans font-semibold text-[22px] md:leading-[33px] leading-6 mb-2">
              Global Headquarters USA
            </div>
            <p className=" font-sans text-base font-normal leading-6">
              440 N Wolfe Rd Unit Ms234, <br />
              Sunnyvale, CA 94085.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-2 py-4">
          <div className="mb-8">
            <div className="font-sans font-semibold text-[22px] md:leading-[33px] leading-6 mb-2">
              Center of Excellence
            </div>
            <div className="font-sans text-lg font-semibold leading-7">
              India
            </div>
            <div className="font-sans text-base font-normal leading-6">
              C-20, G Block,
              <br /> Bandra Kurla Complex,
              <br /> Bandra(e), Mumbai,
              <br />
              Maharashtra, India, 400051.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapAddress;
