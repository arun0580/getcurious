import React from "react";
import { Button } from "../components/Button";
import { DivWrapper } from "./About/sections/DivWrapper";
import { SomethingWrapper } from "./About/sections/SomethingWrapper";

export const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}

      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-12">
          {/* Left Content */}
          <div className="gap-7 self-stretch w-full flex flex-col items-start relative order-2 md:order-1">
            <p className="font-h3-semi-bold text-[#ffac00] text-[length:var(--h3-semi-bold-font-size)] tracking-[var(--h3-semi-bold-letter-spacing)] leading-[var(--h3-semi-bold-line-height)] [font-style:var(--h3-semi-bold-font-style)]">
              Our vision is to create a world where every child&#39;s mind and
              heart is opened to the transformative power of learning.
            </p>

            <div className="flex flex-col gap-3">
              {/* Bullet List */}
              <ul className="list-disc pl-6">
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  Education is about more than acquiring knowledge; it fosters
                  curiosity, empathy, and a lifelong love for learning.
                </li>
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  We aim to ignite curiosity and nurture empathy within each
                  child, empowering them to explore the world with open minds
                  and compassionate hearts.
                </li>
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  Our goal is to unlock the full potential of every child,
                  helping them thrive in an ever-changing world.
                </li>
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  Our vision focuses on both academic growth and personal,
                  emotional development.
                </li>
              </ul>
            </div>

            <div className="pt-4 cursor-pointer w-full md:w-[400px]">
              <Button
                property1="default"
                className="w-full  cursor-pointer"
                text={<>Access to Resources is Free. Sign Up Now!</>}
              />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              className="w-full max-w-[499px] h-auto object-contain rounded-[20px]"
              alt="Childpic"
              src="/assets/images/childpic 1.png"
            />
          </div>
        </div>
      </section>

      <div className="relative max-w-7xl w-full mx-auto px-4 md:px-12 pt-12 md:pt-20">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start pb-12 md:pb-20">
          {/* Left Image */}
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-[389px] h-auto object-cover mx-auto"
            alt="Image"
            src="/assets/images/image-28@2x.png"
          />

          {/* Right Side Content */}
          <div className="flex flex-col gap-8 relative items-center md:items-start text-center md:text-left w-full">
            {/* Paragraph */}
            <p className="w-full font-body-text-large font-[number:var(--body-text-large-font-weight)] text-[#343434] text-base sm:text-lg md:text-[length:var(--body-text-large-font-size)] tracking-[var(--body-text-large-letter-spacing)] leading-relaxed [font-style:var(--body-text-large-font-style)]">
              The Internet is exploding with thousands of high quality free
              &amp; open educational resources (OERS). We harness the power of
              OERS to inspire curiosity in K–12 learning by making the best open
              educational resources (OERs) easy to find, trust, and use—curated,
              vetted, and ready to spark discovery.
            </p>

            {/* Right Column Text + Button */}
            <div className="flex flex-col gap-6 w-full items-center md:items-end">
              <p className="w-full font-display-font-2-semi-bold font-[number:var(--display-font-2-semi-bold-font-weight)] text-[#ffa500] text-lg sm:text-xl md:text-[length:var(--display-font-2-semi-bold-font-size)] text-center md:text-right tracking-[var(--display-font-2-semi-bold-letter-spacing)] [font-style:var(--display-font-2-semi-bold-font-style)] leading-[40px] sm:leading-[50px] md:leading-[70px]">
                FREE &amp; OPEN EDUCATIONAL RESOURCES (OERS) PLAY A KEY ROLE!
              </p>

              <Button
                className="!px-6 sm:!px-8 !py-3 sm:!py-4 text-sm sm:text-base cursor-pointer w-full md:w-[300px]"
                property1="default"
                text="Download the OER Article"
              />
            </div>

            {/* Decorative Images (hidden on small screens) */}
            <img
              className="hidden md:block absolute top-[-150px] left-[-30%] w-20 md:w-38 lg:w-40 h-auto"
              alt="Group"
              src="/assets/images/image_2024_11_21T03_37_11_483Z.png"
            />
            <img
              className="hidden md:block absolute bottom-[-140px] left-[-65%] w-20 md:w-28 lg:w-28 h-auto"
              alt="Group"
              src="/assets/images/image 24.png"
            />
            <img
              className="hidden md:block absolute bottom-[-30px] right-[-13%] w-20 md:w-28 lg:w-32 h-auto"
              alt="Group"
              src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full bg-[url('/assets/images/green-bar.png')] bg-no-repeat bg-top bg-[length:100%_auto] py-20 mt-20">
        <SomethingWrapper />
      </div>
      <div className="relative w-full bg-[url(/assets/images/adobestock-946446396-1.png)] bg-cover bg-[50%_50%] mt-10 py-10">
        <DivWrapper />
      </div>
    </div>
  );
};
