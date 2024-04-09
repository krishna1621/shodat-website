import React, { useState } from "react";
import Engineering from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Data Engineering.png";
import Innovation from "../../../../Assets/Components/HomePage/04_Discover_Shodat/AI Innovation.png";
import Vision from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Vision AI.png";
import Analytics from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Edge Analytics.png";
import Enterprise from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Inteligent Enterprise.png";
import ERP from "../../../../Assets/Components/HomePage/04_Discover_Shodat/ERP System.png";
import Cloud from "../../../../Assets/Components/HomePage/04_Discover_Shodat/Cloud Transformation.png";

const cards = [
  {
    title: "",
    fontSize: "text-[44px]",
    lg: "lg:col-span-8",
  },
  {
    title: "Data Engineering",
    image: Engineering,
    content: "Empowering Insights through robust data engineering",
    lg: "lg:col-span-4",
  },
  {
    title: "AI Innovation",
    image: Innovation,
    content:
      "Pioneering AI innovations transforming data into intelligent action",
    lg: "lg:col-span-4",
  },
  {
    title: "Vision AI",
    image: Vision,
    content: "Seeing beyond data revolutionize decision-making with vision AI",
    lg: "lg:col-span-4",
  },
  {
    title: "Edge Analytics",
    image: Analytics,
    content:
      "Step into the era of instant intelligence with our edge analytics solutions",
    lg: "lg:col-span-4",
  },
  {
    title: "Intelligent Enterprise",
    image: Enterprise,
    content:
      "Transforming businesses into intelligent enterprises explore the power of data",
    lg: "lg:col-span-4",
  },
  {
    title: "ERP Systems & Analytics",
    image: ERP,
    content: "Unleashing the power of ERP systems & advanced analytics",
    lg: "lg:col-span-4",
  },
  {
    title: "Cloud Transformation",
    image: Cloud,
    content:
      "Discover how the power of the cloud redefines the way businesses leverage data analytics",
    lg: "lg:col-span-4",
  },
];

const CardsComponent = () => {
  const [hovered, setHovered] = useState(Array(cards.length).fill(false));

  const handleMouseEnter = (index) => {
    setHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index) => {
    setHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = false;
      return newHovered;
    });
  };

  const handleImageClick = () => {};

  return (
    <>
      {" "}
      <div className=" h-16 w-full bg-[#E6F0F2]"></div>
      <div className="container">
        <div className="flex justify-center  bg-[#F8F4FF] items-center m-8.0 py-14 md:py-8 px-10 ">
          <div className="grid grid-cols-12 gap-4 md:gap-8 px-0 md:px-4 ">
            {cards.map((card, index) => (
              <div key={index} className={`col-span-12 ${card.lg}`}>
                <div
                  className={`relative transition duration-300 w-[90%]  md:w-full lg:w-full bg-white overflow-hidden h-64 rounded-lg ${
                    index !== 0 ? "shadow-md" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {index === 0 ? (
                    <h1 className=" bg-[#F8F4FF] font-sans md:text-[44px] text-3xl h-64  md:leading-[55px] ">
                      <span className={`font-bold  text-indigo-900  `}>
                        Discover
                      </span>
                      <span className="font-light text-black  ">
                        &nbsp;how Shodat can elevate your business with our
                        bespoke data analytics solutions
                      </span>
                    </h1>
                  ) : (
                    <>
                      <div
                        style={{
                          position: "relative",
                          zIndex: 2,
                          backgroundColor:
                            index !== 0 && hovered[index]
                              ? "rgba(67, 32, 113, 0.9)"
                              : "transparent",
                        }}
                        className="md:h-250  h-full   p-10 pt-16 md:pt-32"
                      >
                        <h2
                          align="left"
                          mt={12}
                          style={{
                            color: hovered[index] ? "#E6C458" : "black",
                            fontFamily: "Sans,",
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "30px",
                            letterSpacing: "0em",
                            paddingTop: "5px",
                            opacity: hovered[index] ? 1 : 0.9,
                          }}
                          className={`font-semibold text-lg leading-6 font-sans ${
                            hovered[index] ? "text-yellow-400" : "text-black"
                          }`}
                        >
                          {card.title}
                        </h2>
                        <h3
                          style={{
                            marginTop: "5px",
                          }}
                          className={`font-normal text-sm ${
                            hovered[index] ? "text-yellow-400" : "text-gray-600"
                          }`}
                        >
                          {card.content}
                        </h3>
                      </div>
                      <div
                        className={`${
                          hovered[index] ? "text-yellow-400" : "text-black"
                        }`}
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: hovered[index] ? "8px" : "70px",
                          transition: "right 0.3s, opacity 0.3s",
                          opacity: hovered[index] ? 1 : 0,
                          zIndex: 3,
                          fontSize: "14px",
                          lineHeight: "21px",
                        }}
                      >
                        <button className="mt-4">
                          <span style={{ fontSize: "28px" }}> &#129122;</span>
                        </button>
                      </div>
                      <div
                        className={`absolute top-0 right-0 transition-transform transform origin-top-right ${
                          hovered[index] ? "scale-150" : ""
                        }`}
                        style={{ zIndex: 1 }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{ width: "220px", height: "auto" }}
                          onClick={handleImageClick}
                          loading="lazy"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" h-16 w-full bg-[#E6F0F2]"></div>
    </>
  );
};

export default CardsComponent;
