import React from "react";
import LeftArrow from "../../../../Assets/Components/HomePage/01_Slider_Home/Vector.svg";
export const ShodatBox = () => {
  return (
    <>
      <div className="bg-[#432071] px-4 sm:px-1 py-2 sm:py-4 ">
        <div className="max-w-7xl py-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-4 ">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:ml-20">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-80 md:w-1/2 mt-6 lg:mt-0 ml-0 md:justify-center md:ml-40 lg:ml-0">
                  <h2 className="text-white text-2xl font-sans font-bold leading-10 px-14 lg:px-0 md:text-2xl lg:text-3xl mb-4 hidden lg:block">
                    Our Pillars
                  </h2>
                  <h2 className="text-white text-2xl font-sans font-bold leading-10 px-14 lg:px-0 md:text-2xl lg:text-3xl mb-4 hidden lg:block">
                    of AI
                  </h2>
                  <h2 className="text-white text-2xl font-sans font-bold leading-10 ml-8 flex md:justify-center lg:justify-center lg:px-0 md:text-2xl lg:text-3xl mb-4 lg:hidden">
                    Our Pillars of AI
                  </h2>
                </div>
                <div className="w-[100%] lg:w-full mt-6 lg:mt-0 ">
                  <div className="lg:border-l-4 border-yellow-400 pl-6  justify-center lg:pl-20 md:-ml-8 lg:pt-0 md:border-t-4 md:pt-0 pt-0 border-t-4 lg:border-t-0">
                    <div className="grid grid-cols-1   ml-9  md:grid-cols-3 lg:grid-cols-3 gap-2">
                      <div className="md:pl-2">
                        <ul className="text-[#FFFFFF] text-[18] font-sans text-base list-disc">
                          <li>AI powered Enterprises</li>
                          <br />
                          <li>AI for Good</li>
                        </ul>
                      </div>
                      <div className="md:pl-2">
                        <ul className="text-white text-base list-disc">
                          <li>AI Powered Customers</li>
                          <br />
                          <li>Responsible AI</li>
                        </ul>
                      </div>
                      <div className="md:pl-2">
                        <ul className="text-white text-base list-disc">
                          <li>AI enabled Platform</li>
                          <br />
                          <div className="md:w-100"></div>
                          <button className="text-black font-openSans text-base font-normal py-2 px-4 h-11 w-40 rounded-full flex items-center justify-center bg-[#F3D157]">
                            <img
                              src={LeftArrow}
                              alt="Left Arrow"
                              className="w-6 h-6 mr-2 rounded-full"
                              style={{
                                background: "#FFFFFF",
                                width: "24px",
                                height: "24px",
                              }}
                            />
                            <span>Get Started</span>
                          </button>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShodatBox;
