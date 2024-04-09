import React from "react";
import tab2 from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/tabimg4.png";

const Tabs2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex justify-center lg:justify-center">
          <img
            src={tab2}
            alt="AI"
            loading="lazy"
            style={{
              mixBlendMode: "multiply",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              height: "auto",
              width: "60%",
            }}
          />
        </div>
        <div className="mt-5 md:mt-0 lg:mt-2">
          <div className="p-6 font-Sans">
            <h5
              className="mb-4 fon-Sans"
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "30px",
                color: "black",
              }}
            >
              Benefit from deep industry expertise
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="p-10 md:mt-8 rounded-lg font-Sans"
                style={{
                  backgroundColor: "#D3F5FF",
                }}
              >
                <h3
                  className="font-open-sans"
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "black",
                  }}
                >
                  Our team comprises seasoned professionals with a wealth of
                  experience, ensuring that our AI solutions are tailored to
                  meet the specific needs and challenges of your industry.
                </h3>
              </div>
              <div
                className=" rounded-lg md:mt-8 "
                style={{
                  backgroundColor: "#E4E5FF",
                  padding: "42px 30px 42px 30px",
                }}
              >
                <p
                  className="font-normal font-open-sans"
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "black",
                  }}
                >
                  We have the advantage of using proprietary network
                  intelligence to enhance precision and detection above and
                  beyond our clients’ own datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs2;
