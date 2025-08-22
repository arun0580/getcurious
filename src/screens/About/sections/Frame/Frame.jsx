import React from "react";

export const Frame = () => {
  return (
    <div
      className="
       top-[120px] sm:top-[160px] md:top-[200px] lg:top-[230px] 
        px-1 text-left
      "
    >
      <p
        className="
          relative w-full max-w-4xl mx-auto
          [font-family:'Anton',Helvetica] font-normal text-black 
          text-lg sm:text-xl md:text-2xl tracking-[0] leading-snug
        "
      >
        <span
          className="
    [font-family:'Anton',Helvetica] 
    font-normal text-black 
    text-lg sm:text-xl md:text-2xl 
    tracking-[0] 
    leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem]
  "
        >
          A non-profit focused on
          <br />
        </span>

        <span
          className="
    block
    text-4xl leading-[3rem]
    sm:text-3xl sm:leading-[3.5rem]
    md:text-[40px] md:leading-[4rem]
  "
        >
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
