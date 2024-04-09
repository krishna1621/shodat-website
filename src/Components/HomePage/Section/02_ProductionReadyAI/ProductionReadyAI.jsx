import React, { forwardRef } from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";
const ProductionReadyAi = forwardRef((props, ref) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <div ref={ref}>
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 py-3 bg-[#e6f0f2]">
            <div className="col-span-12 lg:col-span-full mt-6">
              <p className="font-sans text-[26px] md:text-[44px] md:leading-[52.8px]  text-left pl-10 pt-10 md:ml-2 text-black">
                <span className="text-[#340D73] font-bold">
                  Production-ready AI,
                </span>
                <br />
                <span className="md:font-light">
                  {" "}
                  enriched with industry experience
                </span>
              </p>
            </div>
            <div className="col-span-12 sm:col-span-full md:col-span-full lg:col-span-6 mx-6 md:mx-0 md:ml-3 mt-8 ">
              <p className="bg-[#340D73] text-white font-sans text-lg md:text-[27px] md:leading-[40.5px]  font-light text-left p-10 rounded-lg md:ml-8 ">
                Our market ready solutions provide flexible <br /> and scalable
                capabilities that enterprises
                <br /> need to successfully become AI-fueled <br />
                organizations
              </p>
            </div>
            <div className="col-span-12 sm:col-span-full md:col-span-full lg:col-span-6 mx-6 md:mx-0 mt-8">
              <p className="text-[#57647c] font-sans font-normal text-lg md:leading-[30px]  text-left  md:pl-10 pl-0 md:pr-5 pb-5">
                Redefining the infusion of machine learning in heavy <br />{" "}
                industries for a decade, we at Shodat Inc are poised for a{" "}
                <br />
                paradigm shift in the industry with ready AI—eOps Fabric™,
                <br /> an edge analytics, and operations platform.
                <br /> The platform leverages a powerful combination of computer
                vision,
                <br /> predictive analytics, and generative AI to predict <br />
                operational defects, automate RCA reports, and propose
                <br />
                impactful enhancements that promise significant cost <br />
                benefits.
              </p>
              <div className="py-5 ml-9">
                <button
                  className="text-black font-openSans text-base font-normal py-2 px-4 h-11 w-40 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
                  }}
                  onClick={handleClick}
                >
                  <img
                    src={LeftArrow}
                    className="w-11 h-11 mr-2 rounded-full "
                    alt="right Arrow"
                    style={{
                      background: "#ffffff",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <span className="text-white">Let’s Talk AI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductionReadyAi;
