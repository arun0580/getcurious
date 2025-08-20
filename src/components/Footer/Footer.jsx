import React from "react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 py-10">
        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl md:text-3xl lg:text-3xl mb-6 [font-family:'Anton',Helvetica] font-normal  text-4xl tracking-[0] leading-[normal">
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

        {/* Logo Section */}
        <div className="flex justify-center md:justify-end">
          <img
            className="h-[100px] w-auto object-contain cursor-pointer"
            alt="Logo"
            src="/assets/images/logo.png"
          />
        </div>
      </div>
      <div className="bg-gray-700 text-white py-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {/* Quote Section */}
          <div>
            <p className="text-2xl font-bold mb-2">CURIOSITY</p>
            <p className="text-lg leading-relaxed">
              Is one of <br />
              The great secrets <br />
              of happiness.
            </p>
            <p className="mt-4 italic">~ Bryant McGill</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 border-b border-white pb-1 text-xl  [font-family:'Anton',Helvetica]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Your Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  K12 Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
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
            <div className="flex gap-4 text-2xl mb-6">
              <a href="#" className="hover:text-lime-400"></a>
              <a href="#" className="hover:text-lime-400"></a>
              <a href="#" className="hover:text-lime-400"></a>
              <a href="#" className="hover:text-lime-400"></a>
              <a href="#" className="hover:text-lime-400"></a>
            </div>
            <a
              href="#"
              className="inline-block bg-orange-500 text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition"
            >
              DONATE NOW
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
