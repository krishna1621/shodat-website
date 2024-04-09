import React from "react";
import tab4 from "../../../../Assets/Components/HomePage/06_PartnerOfChoice/tabimg3.png";

const Tabs3 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img src={tab4} alt="AI" loading="lazy" className="w-90 h-80" />
        </div>
        <div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h6 className="text-lg font-semibold mb-2">
                  Seasoned Professionals
                </h6>
                <p className="font-normal">
                  No two businesses are the same. Our approach involves
                  understanding the unique aspects of your business and crafting
                  customized AI applications that align with your goals, giving
                  you a competitive edge.
                </p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <h6 className="text-lg font-semibold mb-2">
                  Collaborative Partnership
                </h6>
                <p className="font-normal">
                  We don't just deliver software we build lasting partnerships.
                  Our collaborative approach involves working closely with you
                  at every stage, ensuring that our AI solutions evolve to meet
                  the changing needs of your business.
                </p>
              </div>
              <div className="bg-purple-200 p-4 rounded-lg">
                <h6 className="text-lg font-semibold mb-2">
                  Exceptional Support
                </h6>
                <p className="font-normal">
                  Your success is our priority. Our dedicated support team is
                  ready to assist you with any queries or challenges you may
                  encounter. We believe in providing exceptional support to
                  ensure the seamless operation of our AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabs3;
