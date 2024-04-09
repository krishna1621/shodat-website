import React, { useState } from "react";
import image from "../../Assets/Components/Footer/arrow-down-left.svg";

const Footer1 = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError("Please fill out all fields");
      setSuccessMessage(null);
      setTimeout(() => {
        setError(null);
      }, 10000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address format");
      setSuccessMessage(null);
      setTimeout(() => {
        setError(null);
      }, 10000);
      return;
    }

    try {
      const response = await fetch("/api/business_email", {
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
          email: "",
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
    <>
      <footer className="bg-black text-white pt-10">
        <div className="md:mx-12 mx-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
              <div className="mb-4 text-center lg:text-left">
                <div className="font-sans text-xl font-semibold mb-2 md:mr-5 md:ml-0">
                  How can AI help scale your business?
                </div>
                <div className="font-sans text-xl font-semibold mb-4 md:mr-5 md:ml-0">
                  Let's talk and discover the answers together.
                </div>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1">
              <div className="mb-4">
                <div className="font-sans text-xl font-semibold mb-4 text-center lg:text-left md:ml-16">
                  Our Newsletter
                </div>
                <div className="relative md:ml-16">
                  <input
                    type="text"
                    id="email1"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business email address"
                    className="bg-white cursor-pointer text-black border border-gray-400 rounded-3xl py-3 px-4 pr-10 focus:outline-none focus:border-black w-full"
                  />
                  <div className="  absolute inset-y-0 right-1 flex items-center pl-3 ">
                    <button
                      type="submit"
                      style={{
                        background: "#000000",
                        width: "36px",
                        height: "38px",
                        borderRadius: "18px",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={handleSubmit}
                      className="cursor-pointer"
                    >
                      <img src={image} alt="arrow Icon" />
                    </button>
                  </div>{" "}
                  {error && (
                    <p className="text-red-500 absolute mt-4">{error}</p>
                  )}
                  {successMessage && (
                    <p className="text-green-500 absolute mt-4">
                      {successMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
