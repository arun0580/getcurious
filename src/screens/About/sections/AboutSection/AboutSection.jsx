"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

const AboutSection = () => {
  const ref = useRef(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -60]); // float up
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 80]); // float down

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-24 bg-background overflow-hidden"
    >
      {/* Decorative Parallax Images */}
      <motion.img
        src="/images/pattern1.svg"
        alt=""
        className="absolute left-[-40px] top-10 w-32 opacity-30 pointer-events-none"
        style={{ y: yImage1 }}
      />
      <motion.img
        src="/images/pattern2.svg"
        alt=""
        className="absolute right-[-50px] bottom-10 w-40 opacity-30 pointer-events-none"
        style={{ y: yImage2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Our Mission</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left text column */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The heart and soul behind Get Curious Together is the conviction
                that learning is not just a classroom activity—it's a community
                endeavor. By weaving together education, culture, and civic
                engagement, we help communities celebrate what makes them unique
                while opening doors to new opportunities.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Already, our work is helping students explore beyond
                assignments, giving teachers tools that save time and spark
                engagement, and equipping communities to showcase their
                strengths and connect with families in new ways.
              </p>
            </div>

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-community rounded-xl p-8 shadow-soft"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">
                FREE & OPEN EDUCATIONAL RESOURCES (OERs) PLAY A KEY ROLE!
              </h3>
              <p className="text-muted-foreground mb-6">
                We believe in democratizing education through thousands of
                high-quality, free and openly-licensed educational resources
                (OERs). Our learners can access the power of OERs—in English and
                numerous other languages—that are peer-reviewed, vetted, and
                ready to meet educators' needs.
              </p>
              <div className="text-center">
                <span className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold">
                  Access Thousands of Free Resources
                </span>
              </div>
            </motion.div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-muted rounded-xl p-8"
          >
            <p className="text-xl font-medium text-foreground">
              More than a platform, Get Curious Together is a{" "}
              <span className="text-primary font-bold">movement</span>—inspiring
              lifelong learning, strengthening civic pride, and building
              connections that help entire communities thrive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
