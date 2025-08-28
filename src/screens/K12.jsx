import React, { useRef, useState, useEffect } from "react";
import { Button } from "../components/Button";
import { DivWrapper } from "./K12/sections/DivWrapper";
import { SomethingWrapper } from "./K12/sections/SomethingWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

export const K12 = () => {
  const ref = useRef(null);

  // Track scroll for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Floating parallax effect for right-side image + optional decorations
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yDeco = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yLeftImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yDeco1 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yDeco2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yDeco3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Responsive aspect ratio for SVG curve
  const getAspectRatio = () =>
    window.innerWidth < 768 ? "1440 / 360" : "1440 / 240";
  const [aspectRatio, setAspectRatio] = useState(getAspectRatio());

  useEffect(() => {
    const handleResize = () => setAspectRatio(getAspectRatio());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}

      <section
        ref={ref}
        className="relative w-full bg-white py-16 md:py-24 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="gap-7 self-stretch w-full flex flex-col items-start relative order-2 md:order-1"
          >
            <p className="font-h3-semi-bold text-[#ffac00] text-[length:var(--h3-semi-bold-font-size)] tracking-[var(--h3-semi-bold-letter-spacing)] leading-[var(--h3-semi-bold-line-height)] [font-style:var(--h3-semi-bold-font-style)]">
              Our vision is to create a world where every child&#39;s mind and
              heart is opened to the transformative power of learning.
            </p>

            <div className="flex flex-col gap-3">
              {/* Bullet List */}
              <ul className="list-disc pl-6">
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  Education is about more than acquiring knowledge; it fosters
                  curiosity, empathy, and a lifelong love for learning.
                </li>
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  We aim to ignite curiosity and nurture empathy within each
                  child, empowering them to explore the world with open minds
                  and compassionate hearts.
                </li>
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  Our goal is to unlock the full potential of every child,
                  helping them thrive in an ever-changing world.
                </li>
                <li className="[font-family:'Jost',Helvetica] font-normal text-[#3e3e3e] text-2xl leading-9">
                  Our vision focuses on both academic growth and personal,
                  emotional development.
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-4 cursor-pointer w-full md:w-[400px]"
            >
              <Button
                property1="default"
                className="w-full cursor-pointer"
                text={<>Access to Resources is Free. Sign Up Now!</>}
              />
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2 relative"
          >
            <motion.img
              style={{ y: yImage }}
              className="w-full max-w-[499px] h-auto object-contain rounded-[20px]"
              alt="Childpic"
              src="/assets/images/childpic 1.png"
            />

            {/* Floating Decoration (optional) */}
            <motion.img
              style={{ y: yDeco }}
              src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
              alt="Decoration"
              className="hidden md:block absolute bottom-10 -right-14 w-28 h-auto opacity-1"
            />
          </motion.div>
        </div>
      </section>

      <section
        ref={ref}
        className="relative max-w-7xl w-full mx-auto px-4 md:px-12 pt-12 md:pt-20 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start pb-12 md:pb-20 relative">
          {/* Left Image */}
          <motion.img
            style={{ y: yLeftImage }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-[389px] h-auto object-cover mx-auto"
            alt="OER Illustration"
            src="/assets/images/image-28@2x.png"
          />

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 relative items-center md:items-start text-center md:text-left w-full"
          >
            {/* Paragraph */}
            <p className="w-full font-body-text-large font-[number:var(--body-text-large-font-weight)] text-[#343434] text-base sm:text-lg md:text-[length:var(--body-text-large-font-size)] tracking-[var(--body-text-large-letter-spacing)] leading-relaxed [font-style:var(--body-text-large-font-style)]">
              The Internet is exploding with thousands of high quality free
              &amp; open educational resources (OERS). We harness the power of
              OERS to inspire curiosity in K–12 learning by making the best open
              educational resources (OERs) easy to find, trust, and use—curated,
              vetted, and ready to spark discovery.
            </p>

            {/* Highlight Text + Button */}
            <div className="flex flex-col gap-6 w-full items-center md:items-end">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full font-display-font-2-semi-bold font-[number:var(--display-font-2-semi-bold-font-weight)] text-[#ffa500] text-lg sm:text-xl md:text-[length:var(--display-font-2-semi-bold-font-size)] text-center md:text-right tracking-[var(--display-font-2-semi-bold-letter-spacing)] [font-style:var(--display-font-2-semi-bold-font-style)] leading-[40px] sm:leading-[50px] md:leading-[70px]"
              >
                FREE &amp; OPEN EDUCATIONAL RESOURCES (OERS) PLAY A KEY ROLE!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-[300px]"
              >
                <Button
                  className="!px-6 sm:!px-8 !py-3 sm:!py-4 text-sm sm:text-base cursor-pointer w-full"
                  property1="default"
                  text="Download the OER Article"
                />
              </motion.div>
            </div>

            {/* Decorative Images (animated with parallax) */}
            <motion.img
              style={{ y: yDeco1 }}
              className="hidden md:block absolute top-[-150px] left-[-30%] w-20 md:w-38 lg:w-40 h-auto opacity-80"
              alt="Decoration 1"
              src="/assets/images/image_2024_11_21T03_37_11_483Z.png"
            />
            <motion.img
              style={{ y: yDeco2 }}
              className="hidden md:block absolute bottom-[-140px] left-[-65%] w-20 md:w-28 lg:w-28 h-auto opacity-80"
              alt="Decoration 2"
              src="/assets/images/image 24.png"
            />
            <motion.img
              style={{ y: yDeco3 }}
              className="hidden md:block absolute bottom-[-30px] right-[-13%] w-20 md:w-28 lg:w-32 h-auto opacity-80"
              alt="Decoration 3"
              src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
            />
          </motion.div>
        </div>
      </section>

      <div
        className="relative w-full py-20 mt-20"
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            aspectRatio: aspectRatio, // Responsive aspect ratio
            background: "none",
            zIndex: 1,
            pointerEvents: "none",
            transform: "rotate(180deg)",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 1440 120"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              fill="#c6db8b"
              d="M0,40 C480,160 960,-40 1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <SomethingWrapper />
        </div>
      </div>
      <div className="relative w-full bg-[url(/assets/images/adobestock-946446396-1.png)] bg-cover bg-[50%_50%] mt-10 py-10">
        <DivWrapper />
      </div>
    </div>
  );
};
