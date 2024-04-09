import shome from "../../../../Assets/Components/ShodaAIPage/shodathome.png";

import ArrowRight from "../../../../Assets/Components/HomePage/01_Slider_Home/arrow-right.png";
const ShodatHome = ({ scrollToRef }) => {
  const handleArrowClick = () => {
    const navbarHeight = parseInt(localStorage.getItem("navbarHeight")) || 0;
    const scrollToPosition = scrollToRef.current.offsetTop - navbarHeight;
    window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  };
  return (
    <>
      <div
        className=" w-full h-[790px] bg-cover relative bg-no-repeat flex items-center "
        style={{ backgroundImage: `url(${shome})` }}
      >
        <div className="p-4 md:p-20 text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Ushering Era of
          </h1>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            Frictionless AI with Shodat
          </h1>
          <div className="text-left">
            <p className="font-normal text-base lg:text-lg text-white mb-4">
              We pioneer frictionless AI solutions, seamlessly integrating
              cutting-edge technology
              <br></br>
              to streamline operations and elevate your business to new heights.
            </p>
            <p className="font-normal text-base lg:text-lg text-white">
              technology to streamline operations and elevate your business to
              new heights.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0 "
          onClick={handleArrowClick}
        >
          <div className="h-[100px] w-[100px] bg-[#F3D157]  flex items-center justify-center ">
            <img src={ArrowRight} alt="Arrow Right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShodatHome;
