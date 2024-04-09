import React from "react";
import Innovate from "../../../../Assets/Components/HomePage/05_ShodatDifference/Innovate.png";
import Manage from "../../../../Assets/Components/HomePage/05_ShodatDifference/Manage.png";
import Modernize from "../../../../Assets/Components/HomePage/05_ShodatDifference/Modernize.png";
import Secure from "../../../../Assets/Components/HomePage/05_ShodatDifference/Secure.png";
import ArrowRight from "../../../../Assets/Components/HomePage/arrow-right.svg";

function ShodatDifference() {
  return (
    <>
      <div className=" py-8 md:mt-4 bg-white">
        <div className=" md:mx-10 px-10 md:px-0">
          <div className="text-left mb-8">
            <h2 className=" font-sans text-3xl  md:leading-[66px] md:text-[44px] ">
              <span className="font-bold">Discover</span>
              <span className="font-light">&nbsp; the Shodat difference</span>
            </h2>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
              <div className=" shadow-lg overflow-hidden">
                <img
                  src={Innovate}
                  alt="Innovate"
                  className="w-full h-64 object-cover "
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col mt-20  md:mt-10 lg:mt-24 justify-between p-4">
                  <div>
                    <h2 className="font-sans text-lg md:text-xl leading-[30px] text-white font-bold mb-2">
                      Innovate
                    </h2>
                    <p className="text-sm font-sans text-white font-bold leading-5">
                      Cultivating innovation
                    </p>
                    <p className="text-sm font-sans text-white font-normal leading-5">
                      Redefining possibilities in data analytics
                    </p>
                  </div>
                  <div className="flex justify-end mt-5">
                    <img src={ArrowRight} alt="Arrow Right" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
              <div className=" shadow-lg  overflow-hidden">
                <img
                  src={Manage}
                  alt="Manage"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col mt-20  md:mt-10 lg:mt-24 justify-between p-4">
                  <div>
                    <h2 className="font-sans text-lg md:text-xl leading-[30px] text-white font-bold mb-2">
                      Manage
                    </h2>
                    <p className="text-sm font-sans text-white font-bold leading-5">
                      Effortless data management{" "}
                    </p>{" "}
                    <p className="text-sm font-sans text-white font-normal leading-5">
                      {" "}
                      Unleashing control and insight in <br /> every byte
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <img src={ArrowRight} alt="Arrow Right" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
              <div className=" shadow-lg overflow-hidden">
                <img
                  src={Modernize}
                  alt="Modernize"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col mt-20  md:mt-10 lg:mt-24 justify-between p-4">
                  <div>
                    <h2 className="font-sans text-lg md:text-xl leading-[30px] text-white font-bold mb-2">
                      Modernize
                    </h2>
                    <p className="text-sm font-sans text-white font-bold leading-5">
                      Modernizing data and applications{" "}
                    </p>{" "}
                    <p className="text-sm font-sans text-white font-normal leading-5">
                      Transforming your business for the <br /> digital era
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <img src={ArrowRight} alt="Arrow Right" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4  mb-4 relative">
              <div className=" shadow-lg  overflow-hidden">
                <img
                  src={Secure}
                  alt="Secure"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col mt-20  md:mt-10 lg:mt-24 justify-between p-4">
                  <div>
                    <h2 className="font-sans text-lg md:text-xl leading-[30px] text-white font-bold mb-2">
                      Secure
                    </h2>
                    <p className="text-sm font-sans text-white font-bold leading-5">
                      Securing your data{" "}
                    </p>
                    <p className="text-sm font-sans text-white font-normal leading-5">
                      Ensuring compliance with Cybersecurity <br /> solutions
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <img src={ArrowRight} alt="Arrow Right" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShodatDifference;
