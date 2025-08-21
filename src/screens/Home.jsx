import React from "react";
import { Button } from "../components/Button";
import Footer from "../components/Footer/Footer";
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

      <Discover />

      <div className="relative max-w-7xl mx-auto bg-[url('/assets/images/image.png')] bg-cover bg-center py-12 px-4 rounded-2xl h-auto lg:h-[500px]">
        <div className="relative max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-6 lg:mt-20">
          {/* Left side text + bg box */}
          <div className="relative flex-1 text-center lg:text-left">
            <div className="absolute inset-0" />
          </div>

          <p className="relative  bg-black/40 rounded-2xl [font-family:'Anton',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-snug py-10 px-10">
            YOU ARE YOUR COMMUNITY,
            <br />
            YOUR COMMUNITY IS YOU!
          </p>

          {/* Right side image */}
          <div className="flex-1 flex justify-center lg:justify-end"></div>
        </div>
        <img
          className="absolute top-[100px] right-0 w-40 md:w-56 h-auto"
          alt="Group"
          src="/assets/images/group-1413371873@2x.png"
        />
        <img
          className="absolute bottom-[-20px] mt-6 w-32 md:w-48 h-auto mx-auto lg:mx-0"
          alt="Group"
          src="/assets/images/group-1413371874@2x.png"
        />
      </div>
      <img
        className="absolute w-28 h-72 lg:w-40 lg:h-[379px] object-cover right-0"
        alt="Circle"
        src="/assets/images/circle-v2-1@2x.png"
      />
      <FrameWrapper />

      <div className="relative w-full bg-white py-16">
        {/* Left Decorative Circle */}
        <img
          className="absolute w-24 h-72 lg:w-36 lg:h-[464px] object-cover"
          alt="Circle"
          src="/assets/images/circle-v3-1@2x.png"
        />

        <img
          className=" absolute w-32 h-40 lg:w-44 lg:h-[195px] object-cover mt-6 lg:mt-0 right-0"
          alt="Image"
          src="/assets/images/image-2024-11-21t03-37-11-483z-2@2x.png"
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-0">
          {/* Top Section */}
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="font-anton text-orange-500 text-2xl md:text-3xl lg:text-4xl mb-6 [font-family:'Anton',Helvetica] font-normal text-orange-500 text-4xl tracking-[0] leading-[normal]">
                Build Civic Engagement
              </h2>
              <p className="font-body-text-large text-black text-base md:text-xl lg:text-2xl leading-relaxed py-4">
                Get Curious Together brings together the people, places,
                history, and events that make your community unique—all in one
                easy-to-use platform.
                <br />
                <br />
                Hear from the mayor and local leaders through interactive
                widgets, and help students, families, and neighbors connect,
                engage, and grow a stronger, more caring community.
              </p>
            </div>
          </div>

          {/* Bottom Section */}

          {/* Background image (full width under content) */}
          <img
            className="absolute bottom-0 left-0 w-full h-64 md:h-[400px] lg:h-[668px] object-cover -z-10"
            alt="Background"
            src="/assets/images/image-1.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
