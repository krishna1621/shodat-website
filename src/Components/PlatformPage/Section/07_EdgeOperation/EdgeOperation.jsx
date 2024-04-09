import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eopsWatch from "../../../../Assets/Components/PlatformPage/eOps-Watch.png";
import eopsTrace from "../../../../Assets/Components/PlatformPage/eOps-Trace.png";
import eopsProsense from "../../../../Assets/Components/PlatformPage/eOps-Prosense.png";
import eopsInsights from "../../../../Assets/Components/PlatformPage/eOps-Insights.png";

function GridItem({ imageUrl, title, description }) {
  return (
    <>
      <div className="w-full bg-[#fffbef] p-4">
        <div className="border-b flex border-[#D1CFCF]">
          <div className="bg-white rounded-lg shadow-md p-4 border">
            <div className="flex justify-center items-center mt-3">
              <img
                src={imageUrl}
                alt={title}
                className="w-48 h-32 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="font-sans text-lg font-semibold mb-2 leading-7">
                {title}
              </h2>
              <p className="font-sans text-sm text-[#57647C] leading-5">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EdgeOperation() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleGridItemMouseEnter = (index) => {
    setSliderIndex(index);
  };

  const handleGridItemMouseLeave = () => {
    setSliderIndex(0);
  };

  const gridItems = [
    {
      imageUrl: eopsWatch,
      title: "eOps Watch",
      description:
        "Vision AI capabilities to provide edge asset recognition & anomaly detection",
    },
    {
      imageUrl: eopsTrace,
      title: "eOps Trace",
      description:
        "Event- based edge asset tracking monitors & telemetry processing framework",
    },
    {
      imageUrl: eopsProsense,
      title: "eOps Prosense",
      description:
        "Proactive operations & predictive maintenance framework with anomaly detection, forecasting & problems/claims management features",
    },
    {
      imageUrl: eopsInsights,
      title: "eOps Insights",
      description:
        "Cognitive business intelligence functions including risk management & fraud detection",
    },
    {
      imageUrl: eopsWatch,
      title: "eOps Watch",
      description:
        "Vision AI capabilities to provide edge asset recognition & anomaly detection",
    },
    {
      imageUrl: eopsTrace,
      title: "eOps Trace",
      description:
        "Event- based edge asset tracking monitors & telemetry processing framework",
    },
    {
      imageUrl: eopsProsense,
      title: "eOps Prosense",
      description:
        "Proactive operations & predictive maintenance framework with anomaly detection, forecasting & problems/claims management features",
    },
    {
      imageUrl: eopsInsights,
      title: "eOps Insights",
      description:
        "Cognitive business intelligence functions including risk management & fraud detection",
    },
    {
      imageUrl: eopsWatch,
      title: "eOps Watch",
      description:
        "Vision AI capabilities to provide edge asset recognition & anomaly detection",
    },
    {
      imageUrl: eopsTrace,
      title: "eOps Trace",
      description:
        "Event- based edge asset tracking monitors & telemetry processing framework",
    },
    {
      imageUrl: eopsProsense,
      title: "eOps Prosense",
      description:
        "Proactive operations & predictive maintenance framework with anomaly detection, forecasting & problems/claims management features",
    },
    {
      imageUrl: eopsInsights,
      title: "eOps Insights",
      description:
        "Cognitive business intelligence functions including risk management & fraud detection",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(sliderIndex);
    }
  }, [sliderIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#fffbef] py-8 px-9">
        <div className="container mx-auto bg-[#fffbef] border-b-2 py-2">
          <div className="font-sans text-4xl font-semibold leading-[54px] mx-6 mb-4">
            Enterprise Edge Operations Application -{" "}
            <span className="font-light">(SaaS)</span>
          </div>
          <Slider {...settings} ref={sliderRef}>
            {gridItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleGridItemMouseEnter(index)}
                onMouseLeave={handleGridItemMouseLeave}
              >
                <GridItem {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default EdgeOperation;
