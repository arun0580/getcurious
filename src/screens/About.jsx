import React from "react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { Hero } from "./About/sections/Hero";
import { AboutSection } from "./About/sections/AboutSection";
import { AdvisoryBoard } from "./About/sections/AdvisoryBoard";
import { CommunitySection } from "./About/sections/CommunitySection";

export const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <Hero />
      <AboutSection />
      <AdvisoryBoard />
      <CommunitySection />
    </div>
  );
};
