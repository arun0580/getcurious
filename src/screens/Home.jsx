import React from "react";
import { Button } from "../components/Button";
import { Discover } from "./Home/sections/Discover";
import { Frame } from "./Home/sections/Frame";
import { FrameWrapper } from "./Home/sections/FrameWrapper";
import { NavBar } from "./Home/sections/NavBar";

export const Home = () => {
  return (
    <div
      className="relative w-[1440px] h-[3903px] bg-white overflow-hidden"
      data-model-id="509:332"
    >
      <img
        className="absolute w-[808px] h-[820px] top-[10212px] left-[-703px] aspect-[0.99]"
        alt="Image"
        src="/img/image-20.png"
      />

      <div className="absolute w-[1438px] h-[701px] top-[124px] left-0.5 bg-[url(/assets/images/adobestock-280662181-1.png)] bg-[100%_100%]">
        <div className="absolute w-[290px] h-[343px] top-0 left-[1088px]">
          <img
            className="absolute w-[156px] h-[124px] top-0 left-[134px] object-cover"
            alt="Image"
            src="/assets/images/image-2024-11-21t03-37-18-070z-1@2x.png"
          />

          <img
            className="absolute w-[233px] h-[250px] top-[93px] left-0 object-cover"
            alt="Saturday"
            y
            src="/assets/images/saturday-1@2x.png"
          />
        </div>

        <img
          className="absolute w-[263px] h-[280px] top-[346px] left-[1070px]"
          alt="Group"
          src="/assets/images/group-1413371869@2x.png"
        />

        <div className="absolute w-[553px] h-[472px] top-0.5 left-[190px]">
          <Frame />
          <div className="absolute top-[111px] left-[3px] [font-family:'Anton',Helvetica] font-normal text-[#1e1e1e] text-[80px] tracking-[0] leading-[normal]">
            CURIOUS TOGETHER
          </div>

          <img
            className="absolute w-[343px] h-[118px] top-0 left-[166px]"
            alt="Mask group"
            src="/assets/images/mask-group-3@2x.png"
          />

          <img
            className="absolute w-[275px] h-[26px] top-[212px] left-[270px]"
            alt="Vector"
            src="/assets/images/vector-22.svg"
          />

          <div className="absolute top-[75px] left-1.5 [font-family:'Anton',Helvetica] font-normal text-orange-500 text-[32px] tracking-[0] leading-[normal]">
            GET
          </div>
        </div>

        <div className="absolute w-[233px] h-[250px] top-[83px] left-[833px] bg-[url(/assets/images/idea-1@2x.png)] bg-cover bg-[50%_50%]">
          <div className="top-[78px] left-[116px] absolute [font-family:'Josefin_Sans',Helvetica] font-normal text-[#00000080] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            ?
          </div>

          <div className="top-48 left-[171px] rotate-[28.41deg] absolute [font-family:'Josefin_Sans',Helvetica] font-normal text-[#00000080] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            ?
          </div>

          <div className="top-[148px] left-[55px] rotate-[28.41deg] absolute [font-family:'Josefin_Sans',Helvetica] font-normal text-[#00000080] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            ?
          </div>
        </div>

        <img
          className="absolute w-[233px] h-[250px] top-[352px] left-[829px] object-cover"
          alt="Dog"
          src="/assets/images/dog-1@2x.png"
        />

        <Button
          className="!px-8 !py-4 !absolute !left-[190px] !top-[506px]"
          property1="default"
          text="Learn More"
        />
      </div>

      <div className="absolute w-[1200px] h-[485px] top-[1650px] left-[120px] bg-[url(/assets/images/image.png)] bg-cover bg-[50%_50%]">
        <div className="absolute w-[937px] h-[448px] top-[77px] left-[38px]">
          <div className="absolute w-[750px] h-[254px] top-[61px] left-[187px] bg-[#00000066] rounded-[20px]" />

          <p className="absolute w-[660px] top-0 left-[232px] [font-family:'Anton',Helvetica] font-normal text-white text-[64px] text-center tracking-[0] leading-[normal]">
            <br />
            YOU ARE YOUR COMMUNITY,
            <br />
            YOUR COMMUNITY IS YOU!
          </p>

          <img
            className="absolute w-[191px] h-[199px] top-[249px] left-0"
            alt="Group"
            src="/assets/images/group-1413371874@2x.png"
          />
        </div>

        <img
          className="absolute w-[220px] h-[201px] top-[90px] left-[988px]"
          alt="Group"
          src="/assets/images/group-1413371873@2x.png"
        />
      </div>

      <div className="absolute w-[1441px] h-[819px] top-[1026px] left-[1731px] bg-[#d9d9d9] opacity-50" />

      <Discover />
      <div className="absolute w-[1440px] h-[120px] top-0 left-0">
        <div className="absolute top-[15px] left-8 font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] [font-style:var(--h6-medium-font-style)]">
          Learn More
        </div>

        <NavBar />
      </div>

      <div className="absolute w-[1440px] h-[1743px] top-[2160px] left-0">
        <div className="absolute w-[1440px] h-[1048px] top-[695px] left-0">
          <img
            className="absolute w-[1440px] h-[668px] top-[380px] left-0 aspect-[2.15] object-cover"
            alt="Image"
            src="/assets/images/image-1.png"
          />

          <p className="absolute w-[1200px] top-[110px] left-[120px] font-body-text-large font-[number:var(--body-text-large-font-weight)] text-black text-[length:var(--body-text-large-font-size)] tracking-[var(--body-text-large-letter-spacing)] leading-[var(--body-text-large-line-height)] [font-style:var(--body-text-large-font-style)]">
            Get Curious Together brings together the people, places, history,
            and events that make your community unique—all in one easy-to-use
            platform.
            <br />
            <br />
            Hear from the mayor and local leaders through interactive widgets,
            and help students, families, and neighbors connect, engage, and grow
            a stronger, more caring community.
          </p>

          <img
            className="absolute w-[140px] h-[464px] top-0 left-0 aspect-[0.84] object-cover"
            alt="Circle"
            src="/assets/images/circle-v3-1@2x.png"
          />

          <div className="absolute top-8 left-[120px] [font-family:'Anton',Helvetica] font-normal text-orange-500 text-4xl tracking-[0] leading-[normal]">
            Build Civic Engagement
          </div>
        </div>

        <div className="absolute w-[1330px] h-[728px] top-0 left-[110px]">
          <img
            className="absolute w-[156px] h-[379px] top-0 left-[1174px] aspect-[0.83] object-cover"
            alt="Circle"
            src="/assets/images/circle-v2-1@2x.png"
          />

          <img
            className="absolute w-[168px] h-[195px] top-[533px] left-[1148px] object-cover"
            alt="Image"
            src="/assets/images/image-2024-11-21t03-37-11-483z-2@2x.png"
          />

          <FrameWrapper />
        </div>
      </div>
    </div>
  );
};
