import React from "react";
import { Button } from "../../../../components/Button";

export const FrameWrapper = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 my-10">
      {/* Left Image */}
      <img
        className="w-full max-w-[300px] lg:max-w-[420px] object-cover rounded-lg"
        alt="Image"
        src="/assets/images/image-21.png"
      />

      {/* Right Content */}
      <div className="flex flex-col gap-10 max-w-full lg:max-w-2xl">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-anton text-orange-500 [font-family:'Anton',Helvetica] font-normal text-orange-500 text-[40px] tracking-[0] !leading-[50px]">
          Let’s Spark Curiosity in Every Corner of the Community!
        </p>
        <p className="relative self-stretch font-body-text-large font-[number:var(--body-text-large-font-weight)] text-black text-[length:var(--body-text-large-font-size)] tracking-[var(--body-text-large-letter-spacing)] leading-[var(--body-text-large-line-height)] [font-style:var(--body-text-large-font-style)]">
          Strong communities start with curious minds—and that’s where Get
          Curious Together shines! This engaging learning platform is designed
          for students everywhere, whether they attend public, private, charter,
          micro, or home school programs. When sponsored by community
          organizations and local businesses, the platform becomes a shared
          resource—accessible to all learning environments across the community.
        </p>

        <Button
          className="!bg-orange-500 self-start hover-lime-400 cursor-pointer"
          property1="default"
          text="Learn How to Sponsor Your Community"
        />
      </div>
    </div>
  );
};
