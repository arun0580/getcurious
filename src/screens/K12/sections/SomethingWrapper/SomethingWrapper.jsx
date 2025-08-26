"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

export const SomethingWrapper = () => {
  const ref = useRef(null);

  // Track scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax for floating decorations (optional)
  const yFloat1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-4 md:px-12 overflow-hidden"
    >
      {/* Floating decorations */}
      <motion.img
        style={{ y: yFloat1 }}
        src="/assets/images/deco-green-1.png"
        alt="Decoration"
        className="hidden md:block absolute top-[-80px] left-[-100px] w-28 h-auto opacity-30"
      />
      <motion.img
        style={{ y: yFloat2 }}
        src="/assets/images/deco-green-2.png"
        alt="Decoration"
        className="hidden md:block absolute bottom-[-80px] right-[-100px] w-32 h-auto opacity-30"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center font-hand-cursive font-normal text-[#99b83b] text-[36px] md:text-[44px] leading-[48px] md:leading-[62.1px] mt-16"
      >
        Something for Everyone!
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center gap-10 md:gap-[123px] my-12 md:my-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:w-[318px] items-center md:items-end gap-5"
        >
          <img
            className="w-full max-w-[318px] aspect-[0.81] object-cover"
            alt="Families"
            src="/assets/images/image-32@2x.png"
          />
          <p className="font-body-text-large text-[#343434] text-base md:text-[length:var(--body-text-large-font-size)] text-center leading-relaxed md:leading-[var(--body-text-large-line-height)]">
            Families
            <br />
            Spark curiosity at home! Snuggle up for story time, read side by
            side, or dive into an awesome educational video—learning together
            has never been this fun.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:w-[318px] items-center md:items-start gap-5"
        >
          <img
            className="w-full max-w-[318px] aspect-[0.81] object-cover"
            alt="Student-Led Learning"
            src="/assets/images/image-31@2x.png"
          />
          <p className="font-body-text-large text-[#343434] text-base md:text-[length:var(--body-text-large-font-size)] text-center leading-relaxed md:leading-[var(--body-text-large-line-height)]">
            Student-Led Learning
            <br />
            Curious kids become confident explorers! With Get Curious, students
            dive into cool tools, fun games, and awesome videos—all in one
            place, and all on their terms.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:w-[318px] items-center md:items-start gap-5"
        >
          <img
            className="w-full max-w-[318px] aspect-[0.82] object-cover"
            alt="Educators"
            src="/assets/images/image-30@2x.png"
          />
          <p className="font-body-text-large text-[#343434] text-base md:text-[length:var(--body-text-large-font-size)] text-center leading-relaxed md:leading-[var(--body-text-large-line-height)]">
            Educators
            <br />
            Public, private, homeschool, micro school—you name it! Get Curious
            brings you inspiring OERs that spark curiosity and get your students
            (or your own kids) excited to learn.
          </p>
        </motion.div>
      </div>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center pb-16"
      >
        <Button
          className="w-full md:w-auto !px-4 md:!px-20 !py-2.5 md:!py-4 !bg-orange-500 cursor-pointer text-sm md:text-base"
          joinTheMovementClassName="!text-center"
          property1="default"
          text={
            <>
              Access to Resources is Free
              <br />
              Sign Up Now!
            </>
          }
        />
        <Button
          className="w-full md:w-auto !px-4 md:!px-20 !py-2.5 md:!py-4 !bg-orange-500 cursor-pointer text-sm md:text-base"
          joinTheMovementClassName="!text-center"
          property1="default"
          text={
            <>
              Know an Organization or Company that would like to <br />
              Sponsor Your Community?
            </>
          }
        />
      </motion.div>
    </section>
  );
};
