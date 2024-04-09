import React from "react";
const EopsFabric = () => {
  return (
    <>
      <div className="bg-black px-4 sm:px-6 py-2 sm:py-4">
        <div className="max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1 md:col-span-2 lg:col-span-4 ml-10">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[60%] md:w-full lg:pr-4 md:pr-6">
                  <h2 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl mb-4">
                    What is eOps fabric?
                  </h2>
                  <h4 className="text-white text-base md:text-lg lg:text-xl mb-4">
                    A tenant-based edge operations <br />
                    platform to manage edge assets
                    <br /> & subscribe to eOps™ <br />
                    applications
                  </h4>
                </div>
                <div className="lg:w-full md:w-full mt-6 lg:mt-0">
                  <div className="lg:border-l-4 h-full border-yellow-400 pl-6 md:-ml-8 pt-4 lg:pt-0  md:border-t-4   border-t-4 lg:border-t-0   ">
                    <h3 className="font-semibold text-white text-lg lg:text-xl mb-4">
                      Key features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      <div>
                        <ul className="text-white text-[14px] list-disc lg:ml-7 ">
                          <li className="text-white text-[14px] list-disc lg:ml- font-sans ">
                            Edge Asset Mgmt
                          </li>
                          <li className="text-white text-[14px] list-disc lg:ml- font-sans  md:mt-0 lg:mt-3">
                            Data Aggregators & API Frameworks
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-white text-[14px] list-disc lg:ml- font-sans ">
                          <li className="text-white text-[14px] list-disc lg:ml- font-sans ">
                            AI/ML Enrichment
                          </li>
                          <li className="text-white text-[14px] list-disc lg:ml- font-sans md:mt-0 lg:mt-3 ">
                            Business Intelligence & Data-Lakes
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="text-white text-[14px] list-disc lg:ml-7 md:ml-0">
                          <li className="text-white text-[14px] list-disc lg:ml- font-sans ">
                            Data Encryption & Security
                          </li>
                          <li className="text-white text-[14px] list-disc lg:ml- font-sans md:mt-0 lg:mt-3 ">
                            Compliance & Governance
                          </li>
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
export default EopsFabric;
