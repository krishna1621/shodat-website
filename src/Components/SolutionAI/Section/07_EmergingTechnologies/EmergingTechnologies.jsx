import React from "react";
import backgroundImage from "../../../../Assets/Components/SolutionAI/EmergingTechnologies.png";

const cards = [
  {
    title: "Frictionless AI",
    content: "Navigating the friction between Data & AI",
  },
  {
    title: "Blockchain Integration",
    content:
      "Explore the synergy of AI and blockchain, fostering  trust, transparency, and security in data transactions.",
  },
  {
    title: "Edge Computing Solutions",
    content:
      "Experience the efficiency of AI at the edge, enabling real-time processing and decision-making.",
  },
  {
    title: "Human-AI Collaboration",
    content:
      "Redesigning workspaces with collaborative AI, where humans and machines complement each other's strengths for enhanced productivity.",
  },
];

const EmergingTechnologies = () => {
  return (
    <>
      <div
        className="w-full bg-black h-[790px] bg-cover bg-center relative "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute ml-4 md:ml-20 mt-12 md:mt-20 ">
          <p className="text-3xl md:text-[39px] font-semibold leading-[58.5px] font-poppins text-white ">
            Pioneering emerging technologies at Shodat
          </p>
          {cards.map((card, index) => (
            <div key={index} className="mb-8 md:w-3/5">
              <h4 className="text-white font-poppins text-[22px] font-medium  leading-[27.5px] mt-5 mb-3">
                {card.title}
              </h4>
              <p className="text-white font-normal font-poppins text-base leading-6">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmergingTechnologies;
