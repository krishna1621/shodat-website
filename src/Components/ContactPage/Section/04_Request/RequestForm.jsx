import React, { useState } from "react";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    meetingType: "",
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.meetingType ||
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.mobile ||
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
      setSuccessMessage(null);
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
      const response = await fetch("/api/message", {
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
          meetingType: "",
          name: "",
          email: "",
          company: "",
          mobile: "",
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

  return (
    <div className="bg-white rounded-3xl py-5 lg:ml-10 md:h-[453.5px] max-w-md md:mb-6 mt-5 mb-5">
      <h2 className="font-openSans text-[27px] leading-10 flex justify-center md:justify-normal font-semibold ml-2 mb-8">
        Send us a message
      </h2>
      <form className="font-sans font-normal px-4 md:px-0 text-sm leading-5">
        <div className="mb-4">
          <select
            id="meetingType"
            name="meetingType"
            value={formData.meetingType}
            onChange={handleInputChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          >
            <option value="" disabled>
              Select the Topic
            </option>

            <option value="In-person">In-person</option>
            <option value="Online">Online</option>
            <option value="Phone Call">Phone Call</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Phone number"
            value={formData.mobile}
            onChange={handleInputChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            id="message"
            name="message"
            placeholder="Enter your query in details"
            value={formData.message}
            onChange={handleInputChange}
            className="border-b border-gray-300 p-2 w-full focus:outline-none"
          />
          <div className="mt-10 flex md:justify-normal ml-5 md:ml-0 justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white font-sans font-semibold text-base leading-6 py-2.5 px-10 rounded-full lg:w-[215px]"
            >
              SUBMIT REQUEST
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
