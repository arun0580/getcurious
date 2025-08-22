import React from "react";
import { Button } from "../components/Button";
import Footer from "../components/Footer/Footer";
import { DivWrapper } from "./About/sections/DivWrapper";
import { Frame } from "./Home/sections/Frame";
import { SomethingWrapper } from "./About/sections/SomethingWrapper";

export const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}

      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-12">
          {/* Left Content */}
          <div className="gap-7 self-stretch w-full flex flex-col items-start relative">
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

            <div className="pt-4 cursor-pointer w-[300px]">
              <Button
                property1="default"
                className="w-full"
                text={
                  <>
                    Access to Resources is Free
                    <br />
                    Sign Up Now!
                  </>
                }
              />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img
              className="w-full max-w-[499px] h-auto object-contain rounded-[20px]"
              alt="Childpic"
              src="/assets/images/childpic 1.png"
            />
          </div>
        </div>
      </section>

      <div className="relative max-w-7xl w-full mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-between gap-10">
          {/* Image */}
          <img
            className="relative w-[389px] h-[416px] aspect-[0.93] object-cover"
            alt="Image"
            src="https://c.animaapp.com/8arTQwxz/img/image-28@2x.png"
          />

          {/* Text + Button */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            {/* Paragraph */}
            <p className="relative w-full md:w-[391px] font-body-text-large font-[number:var(--body-text-large-font-weight)] text-[#343434] text-[length:var(--body-text-large-font-size)] tracking-[var(--body-text-large-letter-spacing)] leading-[var(--body-text-large-line-height)] [font-style:var(--body-text-large-font-style)] text-center md:text-left">
              The Internet is exploding with thousands of high quality free
              &amp; open educational resources (OERS). We harness the power of
              OERS to inspire curiosity in K–12 learning by making the best open
              educational resources (OERs) easy to find, trust, and use—curated,
              vetted, and ready to spark discovery.
            </p>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-[393px] items-center md:items-end gap-6">
              <p className="relative self-stretch mt-[-1.00px] font-display-font-2-semi-bold font-[number:var(--display-font-2-semi-bold-font-weight)] text-[#ffa500] text-[length:var(--display-font-2-semi-bold-font-size)] text-center md:text-right tracking-[var(--display-font-2-semi-bold-letter-spacing)] leading-[var(--display-font-2-semi-bold-line-height)] [font-style:var(--display-font-2-semi-bold-font-style)]">
                FREE &amp; OPEN EDUCATIONAL RESOURCES (OERS)
                <br />
                PLAY A KEY ROLE!
              </p>

              <Button
                className="!flex-[0_0_auto] !px-8 !py-4"
                property1="default"
                text="Download the OER Article"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[url('https://c.animaapp.com/8arTQwxz/img/green-bar.png')] bg-no-repeat bg-top bg-[length:100%_auto] py-20 mt-20">
        <SomethingWrapper />
      </div>
      <div className="relative w-full bg-[url(https://c.animaapp.com/8arTQwxz/img/adobestock-946446396-1.png)] bg-cover bg-[50%_50%] mt-10 py-10">
        <DivWrapper />
      </div>
    </div>
  );
};
