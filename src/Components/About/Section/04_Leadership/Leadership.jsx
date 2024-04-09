import leader from "../../../../Assets/Components/About/leader.png";

function Leadership() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:space-x-8    p-14">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={leader}
            alt="Innovation at Shodat"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-3/5  pl-4 md:pl-10 md:pt-3">
          <div className=" text-[#340D73] md:text-lg leading-[27px] font-semibold md:ml-[0.1%] md:mt-[1%] font-sans">
            <p>LEADERSHIP</p>
          </div>
          <div className=" pt-2 text-[#57647C] leading-6 text-base font-sans font-normal">
            <p className="  mt-2">
              We offer an extensive set of digital solutions that power
              applications & services
            </p>
            <p>
              enabling companies & organizations to deliver best user
              experiences to their
            </p>
            <p>customers & employees.</p>
          </div>
          <div className=" pt-4 text-[#57647C] leading-6 text-base font-sans font-normal">
            <p className="  mt-6">
              We are a company of seasoned experts with proven industry
              experience in building
            </p>
            <p>
              {" "}
              data analytics & AI applications using cloud-based compute,
              network, and storage
            </p>
            <p>
              platforms for Silicon Valley giants like Paypal, Google, Cisco,
              Yahoo!, Symantec, and{" "}
            </p>
            <p>
              also Japanese conglomerates that include manufacturing,
              automotive, trading, and{" "}
            </p>
            <p>banking multinationals.</p>
          </div>
          <div className=" pt-4 text-[#57647C] leading-6 text-base font-sans font-normal">
            <p className=" mt-6">
              Headquartered in Sunnyvale, California USA and with center of
              excellence centers in{" "}
            </p>
            <p>
              {" "}
              India, our partnerships with technology solution providers across
              US, UK, and Japan{" "}
            </p>
            <p>
              {" "}
              help us deliver quick and robust solutions for clients across the
              globe.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Leadership;
