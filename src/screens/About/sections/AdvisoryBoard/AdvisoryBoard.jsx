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
      img: "/assets/images/tina.png",
      name: "Tina McCord",
      title: "Founder & Educational Innovator",
      specialization: "Educational Innovation & Teacher Development",
      bio: "Tina McCord is an award-winning educator, innovator, and founder of ZUNI Learning Tree and the Get Curious Together initiative. With more than 25 years of experience as a teacher, administrator, and national trainer, Tina has helped schools nationwide transform teaching and learning.",
    },
    {
      img: "/assets/images/jerry.png",
      name: "Jerry Adams",
      title: "Economic Development & Research Lead",
      specialization: "Economic Development & Innovation Partnerships",
      bio: "Jerry Adams founded the Arkansas Research Alliance (ARA) in 2008 as a nonprofit, public-private economic development organization focused on investing in university research to change the economic trajectory of Arkansas.",
    },
    {
      img: "/assets/images/derik.png",
      name: "Derrick Rainey",
      title: "Mayor & Community Advocate",
      specialization: "Civic Leadership & Youth Development",
      bio: "Derrick Rainey is a community leader and advocate for youth development with a strong commitment to education, equity, and civic engagement.",
    },
    {
      img: "/assets/images/knwols.png",
      name: "Knowles Adkisson",
      title: "Journalist & Community Storyteller",
      specialization: "Community Narrative & Civic Engagement",
      bio: "Knowles Adkisson is a journalist and storyteller with a deep commitment to community engagement and civic renewal.",
    },
    {
      img: "/assets/images/mary.png",
      name: "Mary Lackie",
      title: "Higher Education & Fundraising Lead",
      specialization: "Educational Leadership & Strategic Partnerships",
      bio: "Mary Lackie is a higher education leader, fundraiser, and community builder with decades of experience in advancing educational opportunity and nonprofit impact.",
    },
    {
      img: "/assets/images/kanesha.png",
      name: "Kanesha Adams",
      title: "Educator & Entrepreneur",
      specialization: "Educational Equity & Student Well-being",
      bio: "Kanesha Adams is an educator, entrepreneur, and advocate for equity whose work has opened doors for countless young learners and families.",
    },
    {
      img: "/assets/images/vic.png",
      name: "Vic Dreier",
      title: "STEM Specialist & Executive Director",
      specialization: "STEM Education & Community Engagement",
      bio: "Vic Dreier is a STEM education leader with extensive experience in Project Lead the Way and statewide STEM initiatives, dedicated to expanding access to hands-on, high-quality STEM learning and strengthening connections between schools and communities.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative max-w-7xl mx-auto px-4 md:px-12 py-20 overflow-hidden"
    >
      {/* Floating decoration images */}
      <motion.img
        style={{ y: yImage1 }}
        className="hidden md:block absolute top-[-80px] left-[-100px] w-32 h-auto opacity-40"
        src="/assets/images/image-2024-11-21t03-37-18-070z@2x.png"
        alt="Decoration"
      />
      <motion.img
        style={{ y: yImage2 }}
        className="hidden md:block absolute bottom-[-80px] right-[-100px] w-36 h-auto opacity-40"
        src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
        alt="Decoration"
      />

      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center font-h6-bold text-[#99b83b] text-[32px] md:text-[64px] leading-tight mb-12"
      >
        OUR ADVISORS
      </motion.h2>

      {/* Advisors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 justify-items-center">
        {advisors.map((advisor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className={`bg-white rounded-[20px] shadow-[0px_0px_12px_#0000001a] flex flex-col overflow-hidden p-6 
        ${
          i === advisors.length - 1
            ? "lg:col-span-3 lg:justify-self-center w-full sm:w-2/3 lg:w-1/3"
            : ""
        }`}
          >
            {/* Advisor Image */}
            <img
              className="w-1/2 rounded-[50%] mx-auto"
              alt={advisor.name}
              src={advisor.img}
            />

            {/* Card Content */}
            <div className="my-6 flex flex-col flex-grow text-center">
              <h3 className="font-h6-bold text-[#333333] text-2xl leading-snug mb-2">
                {advisor.name}
              </h3>
              <p className="font-body-text-regular text-[#ffac00] text-lg md:text-lg mb-3">
                {advisor.title}
              </p>
              <span className="inline-block font-body-text-regular bg-[#98bb3c]/50 text-[#333] px-3 py-1 rounded-[5px] text-sm mb-4">
                {advisor.specialization}
              </span>
              <p className="font-body-text-regular text-[#535353] text-base leading-relaxed">
                {advisor.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdvisoryBoard;
