import React from "react";

export const Discover = () => {
  return (
    <section className="relative w-full bg-white py-20 ">
      {/* Background/side floating images */}

      {/* Title */}
      <h2 className="text-center [font-family:'Anton',Helvetica] font-normal text-[#ffac00] text-3xl sm:text-5xl md:text-6xl lg:text-[75px] leading-tight mb-20">
        EDUCATE, DISCOVER, CONNECT &amp; SHARE
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative px-6 md:px-12 ">
        {/* Card 1 */}
        <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col items-start">
          <img
            className="w-14 h-14 mb-6"
            alt="Mask group"
            src="/assets/images/mask-group@2x.png"
          />
          <h3 className="text-black font-h7 [font-family:'Anton',Helvetica] text-1xl md:text-2xl mb-4">
            EDUCATE
          </h3>
          <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
            A first-of-its-kind — an innovative online learning platform with
            curated links to thousands of free K–12 educational resources,
            designed to connect education with its community, spark curiosity,
            and build a lifelong love of learning for all.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col items-start">
          <img
            className="w-14 h-14 mb-6"
            alt="Mask group"
            src="/assets/images/mask-group-1@2x.png"
          />
          <h3 className="text-black font-h7 [font-family:'Anton',Helvetica] text-xl sm:text-1xl md:text-2xl mb-4">
            DISCOVER YOUR COMMUNITY
          </h3>
          <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
            Get Curious can be customized with widgets for the mayor’s office
            and community leaders to share directly with students and the
            community. Resources can be added to highlight selected aspects of
            the community—such as history, people, places, local events, and
            more.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[0px_4px_25px_#00000026] p-8 flex flex-col items-start">
          <img
            className="w-14 h-14 mb-6"
            alt="Mask group"
            src="/assets/images/mask-group-2@2x.png"
          />
          <h3 className="text-black font-h7 [font-family:'Anton',Helvetica] text-1xl md:text-2xl mb-4">
            SHARE
          </h3>
          <p className="text-black font-body-text-regular text-sm sm:text-base leading-relaxed">
            Build groups and share resources. It’s easier than ever to learn
            about history, people, places, and industry in your community and
            share them with friends and family.
          </p>
          <img
            className="absolute md:block absolute bottom-[-25px] right-[-70px] w-32 h-auto object-cover"
            alt="Decoration"
            src="/assets/images/image-2024-11-21t03-37-11-483z-1@2x.png"
          />
        </div>
        <img
          className="hidden md:block absolute top-[-115px] left-[-90px] w-40 h-auto object-cover"
          alt="Decoration"
          src="/assets/images/image-2024-11-21t03-37-18-070z@2x.png"
        />
      </div>
    </section>
  );
};
