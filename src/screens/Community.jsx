import React from "react";
import { Button } from "../components/Button";
import Footer from "../components/Footer/Footer";
import { DivWrapper } from "./About/sections/DivWrapper";
import { Frame } from "./Home/sections/Frame";
import { SomethingWrapper } from "./About/sections/SomethingWrapper";

export const Community = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-12">
        {/* Left Column */}
        <div className="space-y-6 order-2 md:order-1 relative">
          <h1 className="text-[40px] md:text-[64px] [font-family:'Anton',Helvetica] font-normal text-[#98bb3c] leading-tight">
            Your Community.
            <br />
            Your Way.
            <br />
            All In One Place!
          </h1>

          <p className="[font-family:'Jost',Helvetica] font-normal text-[#565656] text-lg md:text-2xl leading-normal">
            "A single platform where curious minds can explore everything about
            their community, connect with each other, support education, learn,
            grow, and do together with just a click!"
          </p>

          {/* Button */}
          <div className="flex justify-start">
            <div className="pt-4 cursor-pointer w-full md:w-[300px]">
              <Button
                property1="default"
                className="w-full cursor-pointer"
                text={<>COMING SOON!</>}
              />
            </div>
          </div>

          {/* Decorative Image (now responsive inside column) */}
          <div className="absolute -top-6 right-0 w-40 md:w-96">
            <img
              className="w-full h-auto object-contain"
              alt="Community illustration"
              src="https://c.animaapp.com/zIBKH2hr/img/mask-group@2x.png"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <img
            className="w-[300px] md:w-[500px] object-contain"
            alt="Community vector"
            src="https://c.animaapp.com/zIBKH2hr/img/vector-1@2x.png"
          />
          <img
            className="absolute top-4 right-4 w-[100px] md:w-[200px] object-contain"
            alt="Community mask"
            src="https://c.animaapp.com/zIBKH2hr/img/mask-group-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};
