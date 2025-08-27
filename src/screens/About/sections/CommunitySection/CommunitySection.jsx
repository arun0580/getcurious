"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

const CommunitySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const yFloat1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const communityFeatures = [
    {
      title: "Students",
      description:
        "Explore curiosity-driven learning experiences that go beyond traditional assignments and inspire lifelong discovery.",
      image: "/assets/images/students-learning.jpg",
      color: "primary",
    },
    {
      title: "Families & Communities",
      description:
        "Connect with local stories, civic voices, and educational opportunities that strengthen community bonds.",
      image: "/assets/images/community-engagement.jpg",
      color: "secondary",
    },
    {
      title: "Educators",
      description:
        "Access time-saving tools, free resources, and professional development that spark engagement in every classroom.",
      image: "/assets/images/educators-collaborating.jpg",
      color: "primary",
    },
  ];

  return (
    <section ref={ref} className="relative bg-[#f8f8f8] mt-20 pt-1">
      <div className="relative max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 bg-gradient-soft font-sans overflow-hidden">
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

        <div className="container mx-auto px-4 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h3
              className="text-[#98bb3c] font-h3-semi-bold text-2xl md:text-4xl pb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Something for Everyone!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg lg:text-3xl text-muted-foreground w-full mx-auto px-2 leading-relaxed"
            >
              Our platform serves the diverse needs of learners, educators,
              families, and community leaders with tailored resources and
              opportunities for growth.
            </motion.p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">
                  {feature.title}
                </h3>

                <p className="md:text-lg sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 px-2">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center  p-4"
          >
            <p className="font-body-text-regular text-[#333333] text-xl md:text-3xl leading-relaxed my-10">
              Join thousands of learners, educators, and families already
              growing together
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col sm:flex-row gap-10 justify-center pb-10"
            >
              <Button
                property1="default"
                text=" Connect with Your Community"
                className="w-50"
              />
              <Button
                property1="default"
                text="Start Exploring Resources"
                className="w-50"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
