"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Discover = () => {
  const ref = useRef(null);

  // Track scroll for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -60]); // top-left float
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 60]); // bottom-right float

  return (
    <section
      ref={ref}
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center [font-family:'Anton',Helvetica] font-normal text-[#ffac00] text-3xl sm:text-5xl md:text-6xl lg:text-[75px] leading-tight mb-20"
      >
        EDUCATE, DISCOVER, CONNECT &amp; SHARE
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative px-6 md:px-12 ">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col items-start"
        >
          <img
            className="w-14 h-14 mb-6"
            alt="Mask group"
            src="/assets/images/mask-group@2x.png"
          />
          <h3 className="text-black [font-family:'Anton',Helvetica] text-xl md:text-2xl mb-4">
            EDUCATE
          </h3>
          <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
            A first-of-its-kind — an innovative online learning platform with
            curated links to thousands of free K–12 educational resources,
            designed to connect education with its community, spark curiosity,
            and build a lifelong love of learning for all.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col items-start"
        >
          <img
            className="w-14 h-14 mb-6"
            alt="Mask group"
            src="/assets/images/mask-group-1@2x.png"
          />
          <h3 className="text-black [font-family:'Anton',Helvetica] text-xl md:text-2xl mb-4">
            DISCOVER YOUR COMMUNITY
          </h3>
          <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
            Get Curious can be customized with widgets for the mayor’s office
            and community leaders to share directly with students and the
            community. Resources can be added to highlight selected aspects of
            the community—such as history, people, places, local events, and
            more.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col items-start relative"
        >
          <img
            className="w-14 h-14 mb-6"
            alt="Mask group"
            src="/assets/images/mask-group-2@2x.png"
          />
          <h3 className="text-black [font-family:'Anton',Helvetica] text-xl md:text-2xl mb-4">
            SHARE
          </h3>
          <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
            Build groups and share resources. It’s easier than ever to learn
            about history, people, places, and industry in your community and
            share them with friends and family.
          </p>

          {/* Floating bottom-right image */}
          <motion.img
            style={{ y: yImage2 }}
            className="hidden md:block absolute bottom-[-25px] right-[-70px] w-32 h-auto object-cover"
            alt="Decoration"
            src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
          />
        </motion.div>

        {/* Floating top-left image */}
        <motion.img
          style={{ y: yImage1 }}
          className="hidden md:block absolute top-[-115px] left-[-90px] w-40 h-auto object-cover"
          alt="Decoration"
          src="/assets/images/image-2024-11-21t03-37-18-070z@2x.png"
        />
      </div>
    </section>
  );
};
