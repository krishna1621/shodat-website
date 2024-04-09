import React from "react";
import Ai from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/Aitab.png";

const Proven = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center md:justify-center">
          <img
            src={Ai}
            alt="AI"
            loading="lazy"
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          />
        </div>
        <div>
          <div className="p-4">
            <h1
              className="text-2xl font-semibold mb-4 leading-9 font-Open Sans"
              style={{
                fontWeight: "700",
              }}
            >
              Shodat's global experience in developing AI technology includes
            </h1>
            <ul
              className="list-disc list-inside mb-6 text-black"
              style={{
                listStyleType: "none",
                color: "#000000",
                fontWeight: "400px",
              }}
            >
              <li className="mb-2 text-base font-normal leading-7 font-Sans">
                <span className="checkmark" style={{ marginRight: "20px" }}>
                  &#10003;
                </span>
                Turnkey enterprise platform for all data integration & analytics
                needs
              </li>
              <li className="mb-2 text-base font-normal leading-7 font-open-sans">
                {" "}
                <span className="checkmark" style={{ marginRight: "20px" }}>
                  &#10003;
                </span>{" "}
                No implementation delays with minimal customizations
              </li>
              <li className="mb-2 text-base font-normal leading-7 font-open-sans">
                {" "}
                <span className="checkmark" style={{ marginRight: "20px" }}>
                  &#10003;
                </span>{" "}
                Seamless deployment & build for global scale
              </li>
              <li className="mb-2 text-base font-normal leading-7 font-open-sans">
                {" "}
                <span className="checkmark" style={{ marginRight: "20px" }}>
                  &#10003;
                </span>{" "}
                Low/No code data ingestion, harmonization & ML features
              </li>
              <li className="mb-2 text-base font-normal leading-7 font-open-sans">
                {" "}
                <span className="checkmark" style={{ marginRight: "20px" }}>
                  &#10003;
                </span>{" "}
                Industry-proven ML Models
              </li>
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
              <div className="bg-blue-200 text-center p-6 rounded-lg w-full">
                <p className="font-bold mb-2 text-base leading-6">
                  Consistent CSAT ratings
                </p>
                <p className="font-bold text-4xl leading-10">97%</p>
              </div>
              <div className="bg-purple-200 text-center p-4 rounded-lg w-full">
                <p
                  className="font-bold mb-2 text-base leading-6 "
                  style={{
                    gap: "20px",
                  }}
                >
                  Renewal <br></br> ratio
                </p>
                <p className="font-bold text-4xl leading-10">95%</p>
              </div>
              <div className="bg-purple-300 text-center p-4 rounded-lg w-full">
                <p className="text-base leading-[24px]">Successful projects</p>
                <p className="font-bold text-4xl leading-10">100+</p>
              </div>
              <div className="bg-gray-200 text-center p-4 rounded-lg w-full">
                <p className="text-base leading-7">Data sources managed</p>
                <p className="font-bold text-4xl leading-10">100TB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Proven;
