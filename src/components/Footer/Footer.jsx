import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
export default function Footer() {
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "K12 Education", path: "/k12" },
    { text: "Your Community", path: "/community" },

    { text: "Contact", path: "/contact" },
  ];

  return (
    <footer
      className="bg-[rgb(88,88,87)] text-white py-8 relative bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/assets/images/footer-bg-dark.png')",
        backgroundPosition: "left -100px bottom",
      }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-10 px-6 md:px-12 ">
        {/* Logo */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            className="h-[100px] w-auto object-contain cursor-pointer"
            alt="Logo"
            src="/assets/images/logo.png"
          />
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-3xl mb-6 [font-family:'Anton',Helvetica] font-normal text-4xl tracking-[0] leading-[normal">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="EMAIL"
              className="px-4 py-3 rounded-l-full border-none outline-none text-black w-64"
            />
            <button className="bg-lime-500 px-6 py-3 font-bold text-white rounded-r-full border-none outline-none">
              SUBSCRIBE
            </button>
          </div>
        </motion.div>
      </div>

      {/* Middle Section */}
      <motion.div
        className="text-white py-12 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-6 md:px-12">
          {/* Quote */}
          <motion.div
            className="text-white p-6 rounded-xl max-w-md relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="absolute left-[0px] top-[18px] text-[160px] leading-[0]">
              “
            </span>
            <p className="text-2xl font-bold mb-2 tracking-wide font-hand">
              CURIOSITY
            </p>
            <p className="text-2xl leading-relaxed font-hand">
              Is one of <br /> The great secrets <br /> of happiness.
            </p>
            <p className="mt-4 italic font-casual text-lg text-xl text-center">
              ~ Bryant McGill
            </p>
            <span className="absolute text-[160px] right-[90px] bottom-[60px] leading-[0]">
              ”
            </span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-3 border-b border-white pb-1 text-2xl [font-family:'Anton',Helvetica]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="hover:text-lime-400 text-white font-body-text-large text-xl"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-3 border-b border-white pb-1 text-2xl [font-family:'Anton',Helvetica]">
              FOLLOW US
            </h3>
            <div className="flex gap-4 text-2xl mb-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-500 hover:text-lime-400 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-500 hover:text-lime-400 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-500 hover:text-lime-400 transition-colors"
              >
                <SiX className="text-lg" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-500 hover:text-lime-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
            <a
              href="#"
              className="w-full text-center mt-5 inline-block bg-orange-500 text-white text-xl px-20 py-3 rounded-full shadow-md hover:bg-orange-600 transition [font-family:'Anton',Helvetica]"
            >
              DONATE NOW
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-1 px-6 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-start order-2 md:order-1 text-white font-body-text-large">
          ©{new Date().getFullYear()} Get Curious Together. All Rights Reserved
        </div>
        <div className="flex justify-start md:justify-end space-x-6 order-1 md:order-2">
          <a
            href="#"
            className="hover:text-lime-400 text-white font-body-text-large"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-lime-400 text-white font-body-text-large"
          >
            Terms of Service
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
