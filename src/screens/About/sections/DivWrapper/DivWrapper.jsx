import React from "react";

export const DivWrapper = () => {
  const cards = [
    {
      title: "Improve Literacy & Math outcomes",
      text: "Audio/ebooks, grammar games, videos, interactive tools, leveled reading passages, math, science, social studies, and other resources to improve outcomes.",
      img: "https://c.animaapp.com/8arTQwxz/img/improve-1.svg",
    },
    {
      title: "Equal Access",
      text: "By harnessing the power of OERs ZUNI makes it easy to provide EQUAL access to quality educational resources for educators and students and families.",
      img: "https://c.animaapp.com/8arTQwxz/img/equal-access-1.svg",
    },
    {
      title: "Student-led learning",
      text: "STEM, Coding, audio ebooks, News for Kids, Wonder of the Day, Jokes, social studies, Black History, Women in History, Hispanic Heritage and more…",
      img: "https://c.animaapp.com/8arTQwxz/img/student--led-1.svg",
    },
    {
      title: "Save Money",
      text: "Everyone browses the Internet for supplemental resources. With ZUNI’s already curated and vetted content districts, educators, and families can save money with OERs.",
      img: "https://c.animaapp.com/8arTQwxz/img/save-money-1.svg",
    },
    {
      title: "Increase family engagement",
      text: "Parents are looking for resources to support classroom instruction and build a love of learning in the home. With ZUNI they can easily do both.",
      img: "https://c.animaapp.com/8arTQwxz/img/increase-1.svg",
    },
    {
      title: "Customize",
      text: "We know every state, district, school and classroom is different, so we made it easy to customize and add proprietary content for your specific needs.",
      img: "https://c.animaapp.com/8arTQwxz/img/customizable-1.svg",
    },
    {
      title: "24/7 Learning - Anytime, anywhere",
      text: "24/7 Learning anywhere, anytime on any Internet-capable device.",
      img: "https://c.animaapp.com/8arTQwxz/img/hjdsjalkd-1.svg",
    },
    {
      title: "Reporting Tools",
      text: "Budget-Friendly: OERs are free allowing districts, schools, and teachers to save money.",
      img: "https://c.animaapp.com/8arTQwxz/img/report-tools-1.svg",
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-12 py-20">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow-[0px_0px_12px_#0000001a] p-6 flex flex-col"
          >
            {/* Icon */}
            <img
              src={card.img}
              alt={card.title}
              className="w-[60px] h-[60px] mb-4"
            />

            {/* Title */}
            <h3 className="font-h6-bold text-[#333333] text-lg leading-snug mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="font-body-text-regular text-[#535353] text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
