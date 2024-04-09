import React, { useState, useEffect } from "react";
import backgroundImage from "../../../../Assets/Components/SolutionAI/SLogo.png";

function InnovationAction() {
  const [isColumnLayout, setIsColumnLayout] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsColumnLayout(window.innerWidth > 768); // Assuming 768px as the breakpoint for column layout
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className={`w-full flex ${
          isColumnLayout ? "flex-col" : "flex-row"
        } bg-black px-10 `}
        style={{
          backgroundImage: isColumnLayout ? `url(${backgroundImage})` : "none",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col md:flex-row py-8 ">
          <div className="md:w-1/2 p-4">
            <div className="font-poppins  text-white text-[44px] leading-[55px] font-light mb-2">
              Innovation in <br />
              action
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="font-poppins text-[22px] leading-[27px] text-white  font-medium mb-2">
              Use Cases
            </div>
            <div className="font-sans text-base text-white  leading-6  font-normal mb-4">
              Explore real-world applications where our AI innovations have
              driven transformative outcomes for businesses.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnovationAction;
