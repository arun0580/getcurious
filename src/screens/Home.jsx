import React from "react";
import { Button } from "../components/Button";
import { Hero } from "./Home/sections/Hero";
import { Discover } from "./Home/sections/Discover";
import { Frame } from "./Home/sections/Frame";
import { FrameWrapper } from "./Home/sections/FrameWrapper";

export const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden py-0">
      <Hero />
      <Discover />
      <Frame />
      <FrameWrapper />
    </div>
  );
};
