import React from "react";
import Ai from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/image132.png";

const Tabs4 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          style={{
            justifyContent: "center",
            width: "80%",
            display: "flex",
          }}
        >
          <img src={Ai} alt="AI" loading="lazy" />
        </div>
        <div>
          <div className="p-4">
            <h2
              className="text-xl lg:text-2xl font-semibold mb-4 font-Sans"
              style={{
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: "600",
              }}
            >
              The AI landscape is dynamic, and so are we. Our commitment to
              continuous innovation means that you'll always have access to the
              latest features and functionalities, keeping your business on the
              cutting edge.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-6 font-Sans">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "#D3F5FF",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-2 font-Sans"
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "black",
                  }}
                >
                  Cutting-Edge AI Solutions
                </h3>
                <p className="font-normal font-Sans" style={{}}>
                  Harness the power of the latest advancements in artificial
                  intelligence. We are committed to delivering cutting-edge AI
                  solutions that keep your business at the forefront of
                  innovation.
                </p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg font-Sans">
                <h3 className="text-lg font-semibold mb-2 font-Sans">
                  Future-Proof Solutions
                </h3>
                <p className="font-normal">
                  AI is an investment in the future. Our commitment to providing
                  future-proof solutions means that our AI software evolves with
                  your business, adapting to new challenges and opportunities in
                  the ever-changing technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs4;
