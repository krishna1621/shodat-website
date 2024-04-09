import React from "react";
import ScheduleMeetingForm1 from "./ScheduleMeetingForm1";
import ScheduleMeetingForm from "./ScheduleMeetingForm";

const MeetingForm = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row items-center justify-between py-14 "
        style={{ background: "#340D73" }}
      >
        <div className=" mx-10 lg:mr-0">
          <ScheduleMeetingForm1 />
        </div>

        <div className=" mx-10  ">
          <ScheduleMeetingForm />
        </div>
      </div>
    </>
  );
};

export default MeetingForm;
