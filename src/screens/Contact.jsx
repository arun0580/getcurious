import React, { useState } from "react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

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
    <div className="relative w-full min-h-screen overflow-hidden !bg-gray-50">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="font-h3-semi-bold text-[#333333] text-center text-3xl mb-10"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              CONTACT US - WE WOULD LOVE TO <br className="hidden md:block" />
              HEAR FROM YOU
            </motion.h1>

            <motion.form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {[
                {
                  label: "First name",
                  name: "firstName",
                  type: "text",
                  required: true,
                },
                {
                  label: "Last name",
                  name: "lastName",
                  type: "text",
                  required: true,
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  required: true,
                },
                {
                  label: "Address",
                  name: "address",
                  type: "text",
                  required: true,
                },
                { label: "Name of School", name: "schoolName", type: "text" },
                {
                  label: "Subject",
                  name: "subject",
                  type: "text",
                  required: true,
                },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <label
                    htmlFor={field.name}
                    className="font-h7 text-[#2d2d2d] block mb-2"
                  >
                    {field.label}{" "}
                    {field.required && (
                      <span className="text-[#bb5502]">*</span>
                    )}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full h-14 bg-white rounded-[10px] px-4 py-2 border-0 outline-none"
                  />
                </motion.div>
              ))}

              {/* Message */}
              <motion.div
                className="md:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
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
                  className="w-full h-40 bg-white rounded-[10px] px-4 py-2 border-0 outline-none resize-none"
                />
              </motion.div>

              {/* Submit */}
              <motion.div
                className="md:col-span-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  property1="default"
                  className="w-full cursor-pointer"
                  text={<>Submit</>}
                />
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Right side: contact info + hours */}
          <motion.div
            className="flex flex-col items-start gap-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="w-full flex justify-center">
              <motion.img
                className="w-60 lg:w-[243px] h-auto"
                alt="Mask group"
                src="https://c.animaapp.com/gAVm8YZO/img/mask-group@2x.png"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="font-h5-medium text-[#2b2b2b] text-xl">Contact</h2>
              <div className="flex flex-col gap-3.5 w-full">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      className="w-6 h-6"
                      alt="Contact icon"
                      src={contact.icon}
                    />
                    <div className="font-body-text-large text-[#414141]">
                      {contact.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="font-h5-medium text-[#2b2b2b] text-xl">
                Hours of operation
              </h2>
              <div className="flex flex-col gap-3.5 w-full">
                {operatingHours.map((hours, index) => (
                  <motion.p
                    key={index}
                    className="font-body-text-large text-[#414141]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    {hours}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
