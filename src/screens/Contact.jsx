import React, { useState } from "react";
import { Button } from "../components/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    schoolName: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "https://c.animaapp.com/gAVm8YZO/img/frame.svg",
      text: "(406) 555-0120",
    },
    {
      icon: "https://c.animaapp.com/gAVm8YZO/img/frame-1.svg",
      text: "contactinfo@gmail.com",
    },
  ];

  const operatingHours = [
    "Monday – Friday : 09:00 – 20:00",
    "Sunday & Saturday: 10:30 – 22:00",
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: form */}
          <div>
            <h1 className="font-h3-semi-bold text-[#333333] text-center text-3xl mb-10 w-full text-center">
              CONTACT US - WE WOULD LOVE TO <br className="hidden md:block" />
              HEAR FROM YOU
            </h1>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* First & Last name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  First name <span className="text-[#bb5502]">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-14 bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  Last name <span className="text-[#bb5502]">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-14   bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                  required
                />
              </div>

              {/* Email & Address */}
              <div>
                <label
                  htmlFor="email"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  Email <span className="text-[#bb5502]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-14   bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  Address <span className="text-[#bb5502]">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full h-14   bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                  required
                />
              </div>

              {/* School & Subject */}
              <div>
                <label
                  htmlFor="schoolName"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  Name of School
                </label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className="w-full h-14   bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  Subject <span className="text-[#bb5502]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full h-14   bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                  required
                />
              </div>

              {/* Message (spans full width) */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="font-h7 text-[#2d2d2d] block mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-40   bg-white rounded-[10px] px-4 py-2 border-0 outline-none resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="md:col-span-2">
                <Button
                  property1="default"
                  className="w-full  cursor-pointer"
                  text={<>Submit</>}
                />
              </div>
            </form>
          </div>

          {/* Right side: contact info + hours */}
          <div className="flex flex-col items-start gap-10">
            {/* Image always on top */}
            <div className="w-full flex justify-center">
              <img
                className="w-60 md:w-60 lg:w-[243px] h-auto"
                alt="Mask group"
                src="https://c.animaapp.com/gAVm8YZO/img/mask-group@2x.png"
              />
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="font-h5-medium text-[#2b2b2b] text-xl">Contact</h2>
              <div className="flex flex-col gap-3.5 w-full">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="inline-flex items-center gap-4">
                    <img
                      className="w-6 h-6"
                      alt="Contact icon"
                      src={contact.icon}
                    />
                    <div className="font-body-text-large text-[#414141]">
                      {contact.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="font-h5-medium text-[#2b2b2b] text-xl">
                Hour of operation
              </h2>
              <div className="flex flex-col gap-3.5 w-full">
                {operatingHours.map((hours, index) => (
                  <p
                    key={index}
                    className="font-body-text-large text-[#414141]"
                  >
                    {hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
