import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

export const FrameWrapper = () => {
  const ref = useRef(null);

  // Track scroll for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const yFloatingImg = useTransform(scrollYProgress, [0, 1], [0, -80]); // small float
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]); // slow bg parallax

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Top Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 my-10">
        {/* Left Image */}
        <motion.img
          style={{ y: yFloatingImg }}
          className="w-full max-w-[300px] lg:max-w-[420px] object-cover rounded-lg"
          alt="Image"
          src="/assets/images/image-21.png"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Right Content */}
        <motion.div
          className="flex flex-col gap-10 max-w-full lg:max-w-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl [font-family:'Anton',Helvetica] font-normal text-orange-500 text-[40px] tracking-[0] !leading-[50px]">
            Let’s Spark Curiosity in Every Corner of the Community!
          </p>
          <p className="relative self-stretch font-body-text-large text-black text-base md:text-xl lg:text-2xl leading-relaxed">
            Strong communities start with curious minds—and that’s where Get
            Curious Together shines! This engaging learning platform is designed
            for students everywhere, whether they attend public, private,
            charter, micro, or home school programs. When sponsored by community
            organizations and local businesses, the platform becomes a shared
            resource—accessible to all learning environments across the
            community.
          </p>

          <Button
            className="!bg-orange-500 self-start hover-lime-400 cursor-pointer w-full md:w-[400px]"
            property1="default"
            text="Learn How to Sponsor Your Community"
          />
        </motion.div>
      </div>

      {/* Bottom Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 mb-10">
        <motion.div
          className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text */}
          <div className="flex-1">
            <h2 className="font-anton [font-family:'Anton',Helvetica] font-normal text-orange-500 text-2xl md:text-3xl lg:text-4xl mb-6 tracking-[0] leading-[normal]">
              Build Civic Engagement
            </h2>
            <p className="font-body-text-large text-black text-base md:text-xl lg:text-2xl leading-relaxed py-4">
              Get Curious Together brings together the people, places, history,
              and events that make your community unique—all in one easy-to-use
              platform.
              <br />
              <br />
              Hear from the mayor and local leaders through interactive widgets,
              and help students, families, and neighbors connect, engage, and
              grow a stronger, more caring community.
            </p>
          </div>

          {/* Floating side image */}
          <motion.img
            style={{ y: yFloatingImg }}
            className="hidden lg:block absolute w-32 h-40 lg:w-44 lg:h-[195px] object-cover right-[-30%] bottom-[-29%]"
            alt="Floating decoration"
            src="/assets/images/image-2024-11-21t03-37-11-483z-2@2x.png"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>

        {/* Background Parallax */}
        <motion.img
          style={{ y: yBg }}
          className="absolute bottom-0 left-0 w-full h-64 md:h-[400px] lg:h-[668px] object-cover -z-10"
          alt="Background"
          src="/assets/images/image-1.png"
        />
      </div>
    </section>
  );
};
