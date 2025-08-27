"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

const CommunitySection = () => {
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
    <section className="py-16 lg:py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-primary">Something for</span>{" "}
            <span className="text-secondary">Everyone!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform serves the diverse needs of learners, educators,
            families, and community leaders with tailored resources and
            opportunities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="w-full h-full rounded-full overflow-hidden shadow-elevated group-hover:shadow-warm transition-shadow duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Exploring Resources
            </Button>
            <Button variant="community" size="lg">
              Connect with Your Community
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join thousands of learners, educators, and families already growing
            together
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
