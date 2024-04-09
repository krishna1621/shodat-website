import React from "react";
import AI from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/tabimg.png";

const Tabs5 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          style={{
            justifyContent: "center",
            width: "auto",
            display: "flex",
          }}
        >
          <img
            src={AI}
            alt="AI"
            loading="lazy"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
        <div>
          <div className="p-4">
            <h2
              className="text-xl font-semibold mb-4 font-Sans"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Ai Should empower, not complicate. We prioritize user-friendly and
              seamless integration, ensuring that our AI Solutions are not only
              powerful but also easy to adopt and use across your organization.
            </h2>
            <div
              className="grid grid-cols-1 gap-4 md:mt-7"
              style={{ backgroundColor: "#D3F5FF" }}
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3
                  className="text-lg font-semibold mb-2 font-Sans"
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                  }}
                >
                  Data Security and Privacy
                </h3>
                <p
                  className="font-normalv font-Sans"
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                  }}
                >
                  Trust is Paramount. Our commitment to data security and
                  privacy is unwavering. Rest assured that your data is handled
                  with the utmost care, and our AI Solutions comply with the
                  highest standards of security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs5;
