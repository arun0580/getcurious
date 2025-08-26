"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Frame = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // triggers when 20% visible
  });

  return (
    <div ref={ref} className="relative max-w-7xl w-full mx-auto px-0 md:px-12">
      {/* Background container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto bg-[url('/assets/images/image.png')] bg-cover bg-center py-12 rounded-2xl h-auto lg:h-[500px] overflow-hidden"
      >
        <div className="relative max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-6 lg:mt-20 px-6 md:px-12">
          {/* Left placeholder (so text is centered) */}
          <div className="relative flex-1 text-center lg:text-left">
            <div className="absolute inset-0" />
          </div>

          {/* Main text block */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative bg-black/40 rounded-2xl [font-family:'Anton',Helvetica] font-normal text-white text-[48px] md:text-[64px] text-center tracking-[0] leading-snug py-10 px-10 shadow-lg"
          >
            YOU ARE YOUR COMMUNITY,
            <br />
            YOUR COMMUNITY IS YOU!
          </motion.p>

          {/* Right side empty for spacing */}
          <div className="flex-1 flex justify-center lg:justify-end"></div>
        </div>

        {/* Floating elements */}
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute top-[100px] right-[-5px] w-40 md:w-56 h-auto"
          alt="Group"
          src="/assets/images/group-1413371873@2x.png"
        />

        <motion.img
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="absolute bottom-[-20px] left-[-12px] mt-6 w-32 md:w-48 h-auto mx-auto lg:mx-0"
          alt="Group"
          src="/assets/images/group-1413371874@2x.png"
        />
      </motion.div>

      {/* Circle image (floating on side) */}
      <motion.img
        initial={{ y: 80, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
        className="absolute w-28 h-72 lg:w-40 lg:h-[379px] object-cover right-0"
        alt="Circle"
        src="/assets/images/circle-v2-1@2x.png"
      />
    </div>
  );
};
