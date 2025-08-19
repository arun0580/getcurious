import React from "react";
import { Button } from "../../../../components/Button";

export const FrameWrapper = () => {
  return (
    <div className="inline-flex items-start gap-12 absolute top-[95px] left-0">
      <img
        className="relative w-[419px] h-[513px] aspect-[0.82] object-cover"
        alt="Image"
        src="/assets/images/image-21.png"
      />

      <div className="flex flex-col w-[738px] items-start gap-12 relative">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-[711px] mt-[-1.00px] [font-family:'Anton',Helvetica] font-normal text-orange-500 text-[40px] tracking-[0] leading-[normal]">
            Let’s Spark Curiosity in Every Corner of the Community!
          </p>

          <p className="relative self-stretch font-body-text-large font-[number:var(--body-text-large-font-weight)] text-black text-[length:var(--body-text-large-font-size)] tracking-[var(--body-text-large-letter-spacing)] leading-[var(--body-text-large-line-height)] [font-style:var(--body-text-large-font-style)]">
            Strong communities start with curious minds—and that’s where Get
            Curious Together shines! This engaging learning platform is designed
            for students everywhere, whether they attend public, private,
            charter, micro, or home school programs. When sponsored by community
            organizations and local businesses, the platform becomes a shared
            resource—accessible to all learning environments across the
            community.
          </p>
        </div>

        <Button
          className="!flex-[0_0_auto] !bg-orange-500"
          property1="default"
          text="Learn How to Sponsor Your Community"
        />
      </div>
    </div>
  );
};
