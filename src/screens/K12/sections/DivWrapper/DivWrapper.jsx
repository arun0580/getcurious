"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const DivWrapper = () => {
  const ref = useRef(null);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background decoration (optional)
  const yFloat1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const cards = [
    {
      title: "Improve Literacy & Math outcomes",
      text: "Audio/ebooks, grammar games, videos, interactive tools, leveled reading passages, math, science, social studies, and other resources to improve outcomes.",
      img: "/assets/images/improve-1.svg",
    },
    {
      title: "Equal Access",
      text: "By harnessing the power of OERs ZUNI makes it easy to provide EQUAL access to quality educational resources for educators and students and families.",
      img: "/assets/images/equal-access-1.svg",
    },
    {
      title: "Student-led learning",
      text: "STEM, Coding, audio ebooks, News for Kids, Wonder of the Day, Jokes, social studies, Black History, Women in History, Hispanic Heritage and more…",
      img: "/assets/images/student--led-1.svg",
    },
    {
      title: "Save Money",
      text: "Everyone browses the Internet for supplemental resources. With ZUNI’s already curated and vetted content districts, educators, and families can save money with OERs.",
      img: "/assets/images/save-money-1.svg",
    },
    {
      title: "Increase family engagement",
      text: "Parents are looking for resources to support classroom instruction and build a love of learning in the home. With ZUNI they can easily do both.",
      img: "/assets/images/increase-1.svg",
    },
    {
      title: "Customize",
      text: "We know every state, district, school and classroom is different, so we made it easy to customize and add proprietary content for your specific needs.",
      img: "/assets/images/customizable-1.svg",
    },
    {
      title: "24/7 Learning - Anytime, anywhere",
      text: "24/7 Learning anywhere, anytime on any Internet-capable device.",
      img: "/assets/images/hjdsjalkd-1.svg",
    },
    {
      title: "Reporting Tools",
      text: "Budget-Friendly: OERs are free allowing districts, schools, and teachers to save money.",
      img: "/assets/images/report-tools-1.svg",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-4 md:px-12 py-20 overflow-hidden"
    >
      {/* Floating decorative images with parallax */}
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

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
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
            <h3 className="font-h6-bold text-[#333333] text-lg leading-snug mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="font-body-text-regular text-[#535353] text-sm leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
