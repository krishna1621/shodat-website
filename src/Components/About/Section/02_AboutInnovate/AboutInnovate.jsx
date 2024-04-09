import innovate from "../../../../Assets/Components/About/about-innovate.png";

function AboutInnovate() {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row md:space-x-8 bg-[#F0F5FF] p-14 ">
        <div className="md:w-3/5  pl-2 md:pl-1 sm:pt-3">
          <div className="text-[29px] md:text-[44px] md:leading-[55px] font-sans  font-semibold">
            <h2>Innovating Insights,</h2>
          </div>
          <div className=" pt-2 text-[29px] md:text-[44px] md:leading-[55px] font-sans  font-semibold">
            <h2>Accelerating Growth</h2>
          </div>
          <div className="font-sans text-[#57647C] text-base  leading-6 font-normal pt-6">
            <p>
              In the heart of Silicon Valley, Shodat Inc. thrives at the
              intersection of innovation,
            </p>
            <p>
              data, and artificial intelligence. As a leading force in the tech
              landscape, we've
            </p>
            <p>
              dedicated ourselves to driving the future of business through
              advanced data analytics
            </p>
            <p>and cutting-edge AI solutions.</p>
          </div>
          <div className="font-sans text-[#57647C] text-base  leading-6 font-normal  pt-6">
            <p>
              Expert in building data analytics & AI applications using cloud
              based compute,
            </p>
            <p>
              network and storage platforms for Silicon Valley giants like
              Paypal, Google, Cisco,
            </p>
            <p>
              Yahoo!, Symantec, and also Japanese conglomerates that include
              manufacturing,
            </p>
            <p>automotive, trading and banking multinationals.</p>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 ">
          <img
            src={innovate}
            alt="Innovation at Shodat"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
export default AboutInnovate;
