import ecl1 from "../../../../Assets/Components/PlatformPage/e2.svg";
import ecl2 from "../../../../Assets/Components/PlatformPage/e3.svg";
import ecl4 from "../../../../Assets/Components/PlatformPage/r4.svg";
import ecl5 from "../../../../Assets/Components/PlatformPage/r2.svg";
import ecl6 from "../../../../Assets/Components/PlatformPage/r1.svg";
import ecl7 from "../../../../Assets/Components/PlatformPage/r3.svg";

const Platform2 = () => {
  return (
    <>
      <div className=" bg-white   rounded-2xl ">
        <div className="grid gap-8 container ">
          <h1 className="text-black md:text-[27px] text-xl mx-12 mt-10 font-sans font-normal leading-[40.5px]  mb-4">
            A one-stop cloud-native operations platform that transforms raw
            operational data into business values and discovers potential
            operational inefficiencies, risks & security threats faster by
            providing
          </h1>
          <div className="flex flex-wrap justify-around mx-4  font-sans font-normal text-lg leading-[27px]  items-start  mb-20">
            <div
              className="flex justify-center items-center bg-black rounded-lg p-4 mt-4 lg:mt-1"
              style={{ width: "240px", height: "100px" }}
            >
              <p className="text-white font-semibold font-sans text-base leading-6 sm:text-lg">
                Easy asset onboarding & tracking
              </p>
            </div>
            <div
              className="flex justify-center items-center bg-black rounded-lg p-4 mt-4 lg:mt-1"
              style={{ width: "240px", height: "100px" }}
            >
              <p className="text-white font-semibold font-sans text-base leading-6 sm:text-lg">
                Vision & telemetry powered ops visibility
              </p>
            </div>
            <div
              className="flex justify-center items-center bg-black rounded-lg p-4 mt-4 lg:mt-1"
              style={{ width: "240px", height: "100px" }}
            >
              <p className="text-white font-semibold font-sans text-base leading-6">
                Predictive maintenance
              </p>
            </div>
            <div
              className="flex justify-center items-center bg-black rounded-lg p-4 mt-4 lg:mt-1"
              style={{ width: "240px", height: "100px" }}
            >
              <p className="text-white font-semibold font-sans text-base leading-6 sm:text-lg">
                Edge-enabled cognitive models
              </p>
            </div>
            <div
              className="flex justify-center items-center bg-black rounded-lg p-4 mt-4 lg:mt-1"
              style={{ width: "240px", height: "100px" }}
            >
              <p className="text-white font-semibold font-sans text-base leading-6 sm:text-lg">
                Adaptive BI
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="bg-white   container">
          <p className="text-black text-4xl font-sans font-semibold mb-4 lg:text-left px-12">
            Why Shodat Platform?
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{}}
          >
            {renderStat(
              ecl1,
              ecl2,
              ecl4,
              "Reduce cost to adopt PDM & BI strategies by - 40%",
              "#340D73",
              "130%",
              "#340D73",
              "-170px",
              "10%"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl7,
              "Predict & reduce operational failures by - 35%",
              "#F9C407",
              "110%",
              "#F9C407",
              "-112px",
              "20%"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl5,
              "Predict time for complex RCA by - 80%",
              "#01A79D",
              "140%",
              "#01A79D",
              "-170px",
              "7%"
            )}
            {renderStat(
              ecl1,
              ecl2,
              ecl6,
              "Reduce time for auditing & compliance by - 66%",
              "#000000",
              "110%",
              "#000000",
              "-112px",
              "18%"
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const renderFeature = (text) => (
  <div className="flex items-center">
    {[...Array(1)].map((_, index) => (
      <div key={index} className="relative">
        <div
          className="bg-black rounded-lg p-7"
          style={{
            height: "99px",
            width: "240px",
          }}
        >
          <p className="text-white">{text}</p>
        </div>
        {index !== 4 && (
          <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 -ml-2">
            <div className="bg-black  h-1 font-normal  text-18 font-sans"></div>
          </div>
        )}
      </div>
    ))}
  </div>
);
const renderStat = (
  image1,
  image2,
  image3,
  text,
  backgroundColor,
  svgHeight,
  strokeColor,
  image3MarginTop,
  paragraphMarginTop
) => (
  <div className="flex relative  mt-6 lg:max-w-screen-lg">
    <div
      className="w-full  h-24 bg-black flex justify-center items-center relative "
      style={{
        height: "60px",
        backgroundColor: backgroundColor,
        marginTop: "45%",
      }}
    >
      <img
        src={image1}
        className="absolute h-12"
        alt="Ellipse 1"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
      <img
        src={image2}
        className="absolute"
        alt="Ellipse 2"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />
      <svg
        width="100%"
        height={svgHeight}
        style={{ position: "absolute", bottom: 30, left: 0 }}
      >
        <line
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          stroke={strokeColor}
          strokeWidth="1"
        />
      </svg>
      <img
        src={image3}
        className="absolute h-12"
        alt="Ellipse 4"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: image3MarginTop,
          height: "20px",
          width: "20px",
        }}
      />
    </div>
    <p
      className="absolute top-0 left-0 right-0 text-sm sm:text-base lg:text-sm xl:text-xl  text-center font-semibold text-[#555555]"
      style={{
        marginTop: paragraphMarginTop,
        textAlign: "center",
      }}
    >
      {text}
    </p>
  </div>
);
export default Platform2;
