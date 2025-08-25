import React from "react";
import { Button } from "../../../../components/Button";

export const SomethingWrapper = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-12">
      {/* Heading */}
      <div className="text-center font-hand-cursive font-normal text-[#99b83b] text-[36px] md:text-[44px] leading-[48px] md:leading-[62.1px]">
        Something for Everyone!
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center gap-10 md:gap-[123px] my-12 md:my-20">
        {/* Card 1 */}
        <div className="flex flex-col w-full md:w-[318px] items-center md:items-end gap-5">
          <img
            className="w-full max-w-[318px] aspect-[0.81] object-cover"
            alt="Image"
            src="/assets/images/image-32@2x.png"
          />
          <p className="font-body-text-large text-[#343434] text-base md:text-[length:var(--body-text-large-font-size)] text-center leading-relaxed md:leading-[var(--body-text-large-line-height)]">
            Families
            <br />
            Spark curiosity at home! Snuggle up for story time, read side by
            side, or dive into an awesome educational video—learning together
            has never been this fun.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full md:w-[318px] items-center md:items-start gap-5">
          <img
            className="w-full max-w-[318px] aspect-[0.81] object-cover"
            alt="Image"
            src="/assets/images/image-31@2x.png"
          />
          <p className="font-body-text-large text-[#343434] text-base md:text-[length:var(--body-text-large-font-size)] text-center leading-relaxed md:leading-[var(--body-text-large-line-height)]">
            Student-Led Learning
            <br />
            Curious kids become confident explorers! With Get Curious, students
            dive into cool tools, fun games, and awesome videos—all in one
            place, and all on their terms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full md:w-[318px] items-center md:items-start gap-5">
          <img
            className="w-full max-w-[318px] aspect-[0.82] object-cover"
            alt="Image"
            src="/assets/images/image-30@2x.png"
          />
          <p className="font-body-text-large text-[#343434] text-base md:text-[length:var(--body-text-large-font-size)] text-center leading-relaxed md:leading-[var(--body-text-large-line-height)]">
            Educators
            <br />
            Public, private, homeschool, micro school—you name it! Get Curious
            brings you inspiring OERs that spark curiosity and get your students
            (or your own kids) excited to learn.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center">
        <Button
          className="w-full md:w-auto !px-4 md:!px-20 !py-2.5 md:!py-4 !bg-orange-500 cursor-pointer text-sm md:text-base"
          joinTheMovementClassName="!text-center"
          property1="default"
          text={
            <>
              Access to Resources is Free
              <br />
              Sign Up Now!
            </>
          }
        />
        <Button
          className="w-full md:w-auto !px-4 md:!px-20 !py-2.5 md:!py-4 !bg-orange-500 cursor-pointer text-sm md:text-base"
          joinTheMovementClassName="!text-center"
          property1="default"
          text={
            <>
              Know an Organization or Company that would like to <br />
              Sponsor Your Community?
            </>
          }
        />
      </div>
    </div>
  );
};
