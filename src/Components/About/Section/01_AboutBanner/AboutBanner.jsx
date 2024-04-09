import backgroundImage from "../../../../Assets/Components/About/about.png";

const AboutBanner = () => {
  return (
    <>
      <div
        className=" w-full h-[490px]  bg-cover bg-center relative "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute ml-16 md:ml-14 mt-60 md:mt-60 ">
          <h1 className="text-3xl md:text-[56px] font-bold leading-[70px] font-sans text-white ">
            About Shodat
          </h1>
        </div>
      </div>
    </>
  );
};
export default AboutBanner;
