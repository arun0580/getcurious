import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { SiX } from "react-icons/si";
export default function Footer() {
  return (
    <footer
      className="bg-[rgb(88,88,87)] text-white py-8 relative bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/assets/images/footer-bg-dark.png')",
        backgroundPosition: "left -100px bottom",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 py-10">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            className="h-[100px] w-auto object-contain cursor-pointer"
            alt="Logo"
            src="/assets/images/logo.png"
          />
        </div>

        {/* Newsletter Section */}
        <div className="order-2 md:order-1">
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
        </div>
      </div>

      <div className="text-white py-12 relative ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {/* Quote Section */}
          <div className="text-white p-6 rounded-xl max-w-md relative">
            <span class="absolute left-[-20px] top-[18px] text-[160px] leading-[0]">
              “
            </span>

            <p className="text-2xl font-bold mb-2 tracking-wide font-hand">
              CURIOSITY
            </p>
            <p className="text-xl leading-relaxed font-hand">
              Is one of <br />
              The great secrets <br />
              of happiness.
            </p>

            <p className="mt-4 italic font-casual text-lg">~ Bryant McGill</p>

            <span class="absolute text-[160px] right-[90px] bottom-[60px]  leading-[0]">
              ”
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 border-b border-white pb-1 text-xl  [font-family:'Anton',Helvetica]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 text-white font-body-text-large"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 text-white font-body-text-large"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 text-white font-body-text-large"
                >
                  Your Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 text-white font-body-text-large"
                >
                  K12 Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 text-white font-body-text-large"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Donate */}
          <div>
            <h3 className="mb-3 border-b border-white pb-1 text-xl  [font-family:'Anton',Helvetica]">
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
              className="mt-5 inline-block bg-orange-500 text-white text-xl px-20 py-3 rounded-full shadow-md hover:bg-orange-600 transition [font-family:'Anton',Helvetica]"
            >
              DONATE NOW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
