"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

const Hero = () => {
  const ref = useRef(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -50]); // float up
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 60]); // float down

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-soft overflow-hidden py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">GET CURIOUS</span>{" "}
              <span className="text-secondary">TOGETHER</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              "Empowering communities through collaborative learning and the
              transformative power of curiosity."
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-foreground leading-relaxed"
          >
            Founded in 2024, Get Curious Together is a nonprofit organization
            built on the belief that curiosity connects people, ideas, and
            communities. We create a shared digital space that provides access
            to free educational resources, along with local stories and civic
            voices, to spark learning and engagement for students, families,
            educators, and community leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg">
              Explore Resources
            </Button>
            <Button variant="community" size="lg">
              Join Our Community
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content (Image Card) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] overflow-hidden relative">
            <img
              src="/assets/images/hero-learning.jpg"
              alt="Students engaged in collaborative learning"
              className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>

          {/* Floating parallax decorations */}
          <motion.img
            style={{ y: yImage1 }}
            src="/assets/images/image-2024-11-21t03-37-18-070z@2x.png"
            alt="Decoration top-left"
            className="hidden md:block absolute -top-16 -left-20 w-32 h-auto object-cover"
          />
          <motion.img
            style={{ y: yImage2 }}
            src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
            alt="Decoration bottom-right"
            className="hidden md:block absolute -bottom-16 -right-24 w-36 h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
