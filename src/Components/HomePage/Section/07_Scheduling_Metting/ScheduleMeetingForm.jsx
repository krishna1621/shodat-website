import React, { useState } from "react";
import backgroundImage from "../../../../Assets/Components/HomePage/08_ContactPage/bg-color.png";

const ScheduleMeetingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.email ||
      !formData.company ||
      !formData.message
    ) {
      setError("Please fill out all fields");
      setSuccessMessage(null);
      setTimeout(() => {
        setError(null);
      }, 10000);
      return;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setError("Mobile number must be 10 digits");
      setTimeout(() => {
        setError(null);
      }, 10000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address format");
      setTimeout(() => {
        setError(null);
      }, 10000);
      return;
    }

    try {
      const response = await fetch("/api/schedule-meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
        setSuccessMessage("Form submitted successfully");
        setError(null);
        setFormData({
          name: "",
          mobile: "",
          email: "",
          company: "",
          message: "",
        });
        setTimeout(() => {
          setSuccessMessage(null);
        }, 10000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form");
      setSuccessMessage(null);
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div
        className="relative flex justify-center items-center h-[385px] w-[300px] md:h-[465px] md:w-[500px] mt-14 lg:mt-0  bg-contain bg-no-repeat "
        style={{ backgroundImage: `url(${backgroundImage})` }}
        alt="Banner Images"
      >
        <div className="absolute top-[150px] left-[150px] md:top-1/2 md:left-[230px] transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-[300px] w-[200px] md:h-[380px] md:w-[360px] relative md:p-2">
            <h2 className="text-center font-openSans text-lg md:text-3xl font-semibold mb-4 md:mb-8 mt-4 lg:mt-0 text-black">
              Scheduling a Meeting
            </h2>

            <form
              onSubmit={handleSubmit}
              className="font-poppins font-light text-sm leading-[21px] text-[#666666]"
            >
              <div className="mb-4 md:mb-6 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent"
                />
              </div>
              <div className="mb-4  md:mb-6">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent"
                />
              </div>
              <div className="mb-4  md:mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent"
                />
              </div>
              <div className="mb-4  md:mb-6">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent"
                />
              </div>
              <div className="mb-4  md:mb-6">
                <input
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-b border-gray-300 w-full focus:outline-none bg-transparent"
                />
                {error && (
                  <p className="text-red-500 absolute mt-12 ml-3 md:ml-0 md:mt-4">
                    {error}
                  </p>
                )}
                {successMessage && (
                  <p className="text-green-500 absolute mt-4">
                    {successMessage}
                  </p>
                )}
                <div className="mt-4 md:mt-20">
                  <button
                    type="submit"
                    className="bg-black text-white font-poppins text-base leading-6 font-medium md:py-2 md:px-4 rounded-full w-full"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeetingForm;
