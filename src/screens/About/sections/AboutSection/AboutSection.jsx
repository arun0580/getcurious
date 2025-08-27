"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

const AboutSection = () => {
  const ref = useRef(null);

  // Parallax float
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yFloat1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const cards = [
    {
      img: "/assets/images/mask-group@2x.png",
      title: "Community Learning",
      text: `The heart and soul behind Get Curious Together is the conviction 
      that learning is not just a classroom activity—it's a community endeavor. 
      By weaving together education, culture, and civic engagement, 
      we help communities celebrate what makes them unique 
      while opening doors to new opportunities.`,
    },
    {
      img: "/assets/images/mask-group-1@2x.png",
      title: "Open Educational Resources",
      text: `We believe in democratizing education through thousands of 
      high-quality, free and openly-licensed educational resources (OERs). 
      Learners can access OERs—in English and many other languages—
      peer-reviewed, vetted, and ready to meet educators' needs.`,
      cta: true,
    },
    {
      img: "/assets/images/mask-group-2@2x.png",
      title: "Empowering Students & Teachers",
      text: `Already, our work is helping students explore beyond assignments, 
      giving teachers tools that save time and spark engagement, 
      and equipping communities to showcase their strengths 
      and connect with families in new ways.`,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-4 md:px-12 py-20 overflow-hidden"
    >
      {/* Floating decorations */}
      <motion.img
        style={{ y: yFloat1 }}
        src="/assets/images/deco-1.png"
        alt="Floating decoration"
        className="hidden md:block absolute top-[-80px] left-[-100px] w-32 h-auto opacity-40"
      />
      <motion.img
        style={{ y: yFloat2 }}
        src="/assets/images/deco-2.png"
        alt="Floating decoration"
        className="hidden md:block absolute bottom-[-80px] right-[-100px] w-36 h-auto opacity-40"
      />

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center font-h6-bold text-[#99b83b] text-[32px] md:text-[64px] leading-tight mb-12"
      >
        OUR MISSION
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[20px] shadow-[0px_0px_12px_#0000001a] p-6 flex flex-col"
          >
            {/* Icon */}
            <img
              src={card.img}
              alt={card.title}
              className="w-[60px] h-[60px] mb-4"
            />

            {/* Title */}
            <h3 className="font-h6-bold text-[#333333] text-2xl leading-snug mb-6">
              {card.title}
            </h3>

            {/* Text */}
            <p className="font-body-text-regular text-[#535353] text-lg leading-relaxed mb-4">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center bg-[#f8f8f8] rounded-[20px] shadow-[0px_0px_12px_#0000001a] p-8 mt-16"
      >
        <p className="font-body-text-regular text-[#333333] text-xl md:text-2xl leading-relaxed">
          More than a platform, Get Curious Together is a{" "}
          <span className="text-primary font-h6-bold">movement</span> —
          inspiring lifelong learning, strengthening civic pride, and building
          connections that help entire communities thrive.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
