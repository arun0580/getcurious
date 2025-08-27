"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AdvisoryBoard = () => {
  const ref = useRef(null);

  // Scroll progress for parallax images
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const missions = [
    {
      title: "Strategic Vision",
      description: "Guiding long-term strategy and innovation",
      icon: "🎯",
    },
    {
      title: "Network Access",
      description: "Connecting us with global partners and resources",
      icon: "🌐",
    },
    {
      title: "Quality Assurance",
      description: "Ensuring excellence in all our programs",
      icon: "⭐",
    },
  ];

  const advisors = [
    {
      name: "Tina McCord",
      title: "Founder & Educational Innovator",
      specialization: "Educational Innovation & Teacher Development",
      bio: "Tina McCord is an award-winning educator, innovator, and founder of ZUNI Learning Tree and the Get Curious Together initiative. With more than 25 years of experience as a teacher, administrator, and national trainer, Tina has helped schools nationwide transform teaching and learning.",
    },
    {
      name: "Jerry Adams",
      title: "Economic Development & Research Leader",
      specialization: "Economic Development & Innovation Partnerships",
      bio: "Jerry Adams founded the Arkansas Research Alliance (ARA) in 2008 as a nonprofit, public-private economic development organization focused on investing in university research to change the economic trajectory of Arkansas.",
    },
    {
      name: "Derrick Rainey",
      title: "Mayor & Community Advocate",
      specialization: "Civic Leadership & Youth Development",
      bio: "Derrick Rainey is a community leader and advocate for youth development with a strong commitment to education, equity, and civic engagement.",
    },
    {
      name: "Knowles Adkisson",
      title: "Journalist & Community Storyteller",
      specialization: "Community Narrative & Civic Engagement",
      bio: "Knowles Adkisson is a journalist and storyteller with a deep commitment to community engagement and civic renewal.",
    },
    {
      name: "Mary Lackie",
      title: "Higher Education & Fundraising Leader",
      specialization: "Educational Leadership & Strategic Partnerships",
      bio: "Mary Lackie is a higher education leader, fundraiser, and community builder with decades of experience in advancing educational opportunity and nonprofit impact.",
    },
    {
      name: "Kanesha Adams",
      title: "Educator & Entrepreneur",
      specialization: "Educational Equity & Student Well-being",
      bio: "Kanesha Adams is an educator, entrepreneur, and advocate for equity whose work has opened doors for countless young learners and families.",
    },
  ];

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
        className="text-center [font-family:'Anton',Helvetica] text-[#ffac00] text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal leading-tight mb-20"
      >
        OUR ADVISORY BOARD
      </motion.h2>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 md:px-12 mb-20">
        {missions.map((mission, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 text-center flex flex-col items-center"
          >
            <div className="text-4xl mb-4">{mission.icon}</div>
            <h3 className="text-black [font-family:'Anton',Helvetica] text-xl md:text-2xl mb-2">
              {mission.title}
            </h3>
            <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
              {mission.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Advisor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 md:px-12 relative">
        {advisors.map((advisor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] md:rounded-[40px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
              {advisor.name}
            </h3>
            <p className="text-[#ffac00] text-sm md:text-base mb-3">
              {advisor.title}
            </p>
            <span className="inline-block bg-[#f5f5f5] text-gray-700 px-3 py-1 rounded-full text-xs mb-4">
              {advisor.specialization}
            </span>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {advisor.bio}
            </p>
          </motion.div>
        ))}

        {/* Floating decoration images */}
        <motion.img
          style={{ y: yImage1 }}
          className="hidden md:block absolute top-[-100px] left-[-80px] w-36 h-auto object-cover"
          src="/assets/images/image-2024-11-21t03-37-18-070z@2x.png"
          alt="Decoration"
        />
        <motion.img
          style={{ y: yImage2 }}
          className="hidden md:block absolute bottom-[-80px] right-[-80px] w-40 h-auto object-cover"
          src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
          alt="Decoration"
        />
      </div>
    </section>
  );
};

export default AdvisoryBoard;
