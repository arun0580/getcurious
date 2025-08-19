import React from "react";

export const Frame = () => {
  return (
    <div className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-[230px] left-0">
      <p className="relative w-fit mt-[-1.00px] [font-family:'Anton',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Anton',Helvetica] font-normal text-black text-2xl tracking-[0]">
          A non-profit focused on
          <br />
        </span>

        <span className="text-[40px]">
          Empowering Learning
          <br />
          Celebrating Communities &amp;
          <br />
          Connecting People
        </span>
      </p>
    </div>
  );
};
