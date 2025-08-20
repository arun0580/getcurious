import React from "react";
import { Button } from "../components/Button";
import { Discover } from "./Home/sections/Discover";
import { Frame } from "./Home/sections/Frame";
import { FrameWrapper } from "./Home/sections/FrameWrapper";
import { NavBar } from "./Home/sections/NavBar";

export const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <NavBar />

      {/* Hero Section */}

      <section className="relative w-full bg-[url('/assets/images/adobestock-280662181-1.png')] bg-cover bg-center px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* <p className="text-orange-500 text-2xl md:text-3xl font-anton">
              GET
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
              CURIOUS TOGETHER
            </h1> */}

            <div className="[font-family:'Anton',Helvetica] font-normal leading-[normal]">
              <img
                className="absolute w-[40vw] max-w-[343px] h-auto top-[20px] left-[25%]"
                alt="Mask group"
                src="/assets/images/mask-group-3@2x.png"
              />

              <span className="text-orange-500 text-[32px] block">GET</span>
              <span className="text-[#1e1e1e] text-[80px] block">
                CURIOUS TOGETHER
              </span>
              <img
                className="absolute w-[30vw] max-w-[275px] h-auto top-[37%] left-[31%] -translate-x-1/2"
                alt="Vector"
                src="/assets/images/vector-22.svg"
              />
            </div>

            <Frame />

            <div className="pt-4">
              <Button property1="default" text="Learn More" />
            </div>
          </div>

          {/* Right Side Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              className="absolute w-[156px] h-[124px] top-[40px] right-[11%] object-cover"
              alt="Image"
              src="/assets/images/image-2024-11-21t03-37-18-070z-1@2x.png"
            />
            <img
              src="/assets/images/idea-1@2x.png"
              alt="Lightbulb Idea"
              className="w-full h-auto rounded-tl-[100px] object-cover"
            />
            <img
              src="/assets/images/saturday-1@2x.png"
              alt="Small Business"
              className="w-full h-auto rounded-tr-[100px] object-cover"
            />
            <img
              src="/assets/images/dog-1@2x.png"
              alt="Dog Walking"
              className="w-full h-auto rounded-bl-[100px] object-cover"
            />
            <img
              src="/assets/images/group-1413371869@2x.png"
              alt="Kids with Science Project"
              className="w-full h-auto rounded-br-[100px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
