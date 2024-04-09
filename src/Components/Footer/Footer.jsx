import React from "react";
import logo from "../../Assets/Components/Footer/Shodat Logo.png";
import mail from "../../Assets/Components/Footer/mail.svg";
import mobile from "../../Assets/Components/Footer/mobile.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white text-center md:text-left pt-2">
        <div className="mx-12 text-center md:text-left">
          <div className="border-b-[0.1px]">
            <div className="flex flex-wrap justify-center md:justify-between ">
              <div
                className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1"
                style={{ width: "300px" }}
              >
                <div className="  flex items-center justify-center md:justify-start mb-4 md:mt-8">
                  <img
                    style={{ width: "65px", height: "auto" }}
                    src={logo}
                    alt="Company Logo"
                    className="h-7 w-14 mr-2 pr-2"
                  />
                  <div className="font-Poppins text-xl md:text-[26px] md:leading-[39px] font-medium">
                    Shodat
                  </div>
                </div>
                <div className="font-sans text-sm font-normal mb-4 leading-5">
                  Innovating Insights, Accelerating Growth
                </div>
                <div className="flex items-center justify-center md:justify-start leading-5">
                  <img src={mobile} alt="Mobile Icon" />
                  <div className="font-sans text-lg font-normal mb-2 mt-2 ml-3">
                    +1 (123) 456- 7890
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start leading-5">
                  <img src={mail} alt="Mail Icon" />
                  <div className="font-sans text-lg font-normal mb-2 mt-2 ml-3">
                    contact@shodat.com
                  </div>
                </div>
              </div>

              <div
                className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1 mt-5 md:mt-0 py-2 md-py-0"
                style={{ width: "200px" }}
              >
                <div className="mb-1  md:mb-5 font-openSans text-xl font-normal md:mt-8">
                  Solutions
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Data Engineering
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Vision AI
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    ERP Systems
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Edge Analytics
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Intelligent Enterprise
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-8 md:mb-6 leading-5"
                  >
                    Cloud Transformation
                  </a>
                </div>
              </div>

              <div
                className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1 py-2 md-py-0"
                style={{ width: "200px" }}
              >
                <div className="mb-1  md:mb-5 font-openSans text-xl font-normal md:mt-8">
                  Services
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Innovate
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Manage
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Modernize
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Secure
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-8 md:mb-6 leading-5"
                  >
                    SAP HANA CoE
                  </a>
                </div>
              </div>

              <div
                className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1 py-2 md-py-0"
                style={{ width: "200px" }}
              >
                <div className="mb-1  md:mb-5 font-openSans text-xl font-normal md:mt-8">
                  Shodat AI
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    AI Innovation
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    Frictionless AI
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-8 md:mb-6 leading-5"
                  >
                    Pillars of AI
                  </a>
                </div>
              </div>

              <div
                className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1 2xl:col-span-1 py-2 md-py-0"
                style={{ width: "250px" }}
              >
                <div className="mb-1  md:mb-5 font-openSans text-xl font-normal md:mt-8">
                  eOps Platform
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    eOps Watch
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    eOps Trace
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    eOps Prosense
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 leading-5"
                  >
                    eOps Insights
                  </a>
                </div>
                <div className="font-sans text-sm font-normal mb-6 mt-10 leading-5">
                  <a
                    href="#"
                    className="font-sans text-sm font-normal mb-6 mt-10"
                  >
                    © 2024 Shodat Inc. All rights reserved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
