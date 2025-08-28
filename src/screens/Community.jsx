import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const Community = () => {
  const communityLocations = [
    {
      id: 1,
      name: "Downtown Conway",
      image: "/assets/images/ellipse-7@2x.png",
      rank: 1,
    },
    {
      id: 2,
      name: "Tucker Creek Walking/Bike Trail",
      image: "/assets/images/ellipse-7-1@2x.png",
      rank: 2,
    },
    {
      id: 3,
      name: "Beaverfork Lake",
      image: "/assets/images/ellipse-7-2@2x.png",
      rank: 3,
    },
    {
      id: 4,
      name: "Conway Public Library",
      image: "/assets/images/ellipse-7-3@2x.png",
      rank: 4,
    },
    {
      id: 5,
      name: "The Village at Hendrix",
      image: "/assets/images/ellipse-7-4@2x.png",
      rank: 5,
    },
  ];

  const communityNews = [
    {
      id: 1,
      title: "Mornings w/the Mayor's Office",
      description:
        "Stay informed on how local government decisions impact residents, business...",
      image: "/assets/images/rectangle-77.svg",
      likes: 25,
      comments: 12,
    },
    {
      id: 2,
      title: "City Council Weekly Roundup",
      description:
        "Catch up on the key points from the latest city council meeting...",
      image: "/assets/images/rectangle-77-1.svg",
      likes: 18,
      comments: 7,
    },
    {
      id: 3,
      title: "Community Cleanup Initiative",
      description:
        "Join the effort to make our community cleaner and greener this weekend...",
      image: "/assets/images/rectangle-77-2.svg",
      likes: 42,
      comments: 20,
    },
  ];

  const hotSpotCategories = [
    {
      id: 1,
      name: "Food",
      icon: "/assets/images/frame-181.svg",
      isCustomIcon: true,
    },
    {
      id: 2,
      name: "Arts & Entertainment",
      icon: "/assets/images/palette.svg",
      isCustomIcon: false,
    },
    {
      id: 3,
      name: "People",
      icon: "/assets/images/users-02.svg",
      isCustomIcon: false,
    },
    {
      id: 4,
      name: "Non-Profit",
      icon: "/assets/images/frame-181-1.svg",
      isCustomIcon: true,
    },
    {
      id: 5,
      name: "Schools",
      icon: "/assets/images/graduation-hat-02.svg",
      isCustomIcon: false,
    },
  ];

  // Carousel state
  const [currentNews, setCurrentNews] = useState(0);
  const NEWS_PER_PAGE = 2; // Show 2 news items per page
  const [currentNewsPage, setCurrentNewsPage] = useState(0);

  // Responsive NEWS_PER_PAGE
  const getNewsPerPage = () => (window.innerWidth < 768 ? 1 : 3);
  const [newsPerPage, setNewsPerPage] = useState(getNewsPerPage());

  useEffect(() => {
    const handleResize = () => setNewsPerPage(getNewsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const maxIndex = Math.max(communityNews.length - newsPerPage, 0);

  const handlePrev = () => {
    setCurrentNewsIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentNewsIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleNews = communityNews.slice(
    currentNewsIndex,
    currentNewsIndex + newsPerPage
  );

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <section className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-12">
          {/* Left Column */}
          <motion.div
            className="space-y-6 order-2 md:order-1 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.25 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            <motion.h1
              className="text-[40px] md:text-[64px] [font-family:'Anton',Helvetica] font-normal text-[#98bb3c] leading-tight"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Your Community.
              <br />
              Your Way.
              <br />
              All In One Place!
            </motion.h1>

            <motion.p
              className="[font-family:'Jost',Helvetica] font-normal text-[#565656] text-lg md:text-2xl leading-normal"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              "A single platform where curious minds can explore everything
              about their community, connect with each other, support education,
              learn, grow, and do together with just a click!"
            </motion.p>

            <motion.div
              className="flex justify-start"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="pt-4 cursor-pointer w-full md:w-[300px]">
                <Button
                  property1="default"
                  className="w-full cursor-pointer"
                  text={<>COMING SOON!</>}
                />
              </div>
            </motion.div>

            {/* Decorative Image */}
            <motion.div
              className="absolute -top-6 right-0 w-40 md:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                className="w-full h-auto object-contain"
                alt="Community illustration"
                src="/assets/images/mask-group@2x -com.png"
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative flex justify-center items-center order-1 md:order-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              className="w-[300px] md:w-[500px] object-contain"
              alt="Community vector"
              src="/assets/images/vector-1@2x.png"
            />
            <motion.img
              className="absolute top-0 right-0 w-[100px] md:w-[200px] object-contain"
              alt="Community mask"
              src="/assets/images/mask-group-1@2x-com.png"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>
      {/* Background full width */}
      <div className="relative w-full mt-10 md:mt-20 overflow-hidden">
        <motion.img
          src="/assets/images/adobestock-412001654-preview-1@4x.png"
          alt="Background"
          className="w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      {/* Civic Engagement Section */}
      <section className="w-full bg-[#ffa5000a] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.header
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-h3-semi-bold text-[#222] text-2xl md:text-4xl leading-[32px] md:leading-[44px] lg:leading-[60px]">
              COMMUNITY & CIVIC ENGAGEMENT
              <br />
              Curious about "What's going on?" to <br />
              "How can we make it better!"
            </h2>

            <p className="font-normal text-[#565656] text-lg md:text-2xl leading-relaxed">
              Civic Engagement is essential to building strong communities. It
              isn't just about voting. It's about connecting, learning, acting,
              and building good together.
            </p>
          </motion.header>

          {/* Community Locations */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {communityLocations.map((location) => (
              <motion.div
                key={location.id}
                className="flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.6 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    alt={location.name}
                    src={location.image}
                  />
                  <motion.div
                    className="absolute -top-2 -left-2 bg-[#98bb3c] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    #{location.rank}
                  </motion.div>
                </div>
                <p className="font-body-text-regular text-maindarkprimary text-center mt-2">
                  {location.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Community News */}
          <motion.h3
            className="text-xl md:text-2xl font-h5-semi-bold mt-16 text-center text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Community News
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {communityNews.map((news) => (
              <motion.article
                key={news.id}
                className="flex flex-col bg-[#f9f9f9] rounded-[10px] border border-[#ececec] border-0 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  className="w-full h-48 object-cover"
                  alt="News"
                  src={news.image}
                />
                <div className="p-4 flex flex-col gap-4">
                  <h4 className="font-h7 text-[#040404]">{news.title}</h4>
                  <p className="font-body-text-regular text-[#666]">
                    {news.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-700">
                    <div className="flex gap-4">
                      <span className="font-body-text-regular flex items-center">
                        <img
                          className="relative w-5 h-5 me-1"
                          alt="Like icon"
                          src="/assets/images/frame-7.svg"
                        />
                        {news.likes} Likes
                      </span>
                      <span className="font-body-text-regular flex items-center">
                        <img
                          className="relative w-5 h-5 me-1"
                          alt="Comment icon"
                          src="/assets/images/frame-8.svg"
                        />
                        {news.comments} Comments
                      </span>
                    </div>
                    <img
                      className="w-6 h-6"
                      alt="Share icon"
                      src="/assets/images/frame-9.svg"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Outro Text */}
          <motion.p
            className="max-w-2xl mx-auto mt-16 font-['Anton'] text-[#ffa500] text-xl md:text-2xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Curious about where to find your local community garden, how to
            volunteer, what's happening over the weekend, or maybe news from the
            Mayor's Office?
          </motion.p>
        </div>
      </section>
      <section className="w-full bg-[#fff] py-12 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3
              className="text-[#98bb3c] font-h3-semi-bold text-2xl md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              New to town? Just visiting?
            </motion.h3>

            {/* Hot Spots header */}
            <motion.div
              className="flex items-center justify-between pb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-[#98bb3c] font-h5-medium text-lg">
                <img
                  src="/assets/images/marker-pin-04.svg"
                  alt="marker"
                  className="w-5 h-5"
                />
                Hot Spots - Geography
              </div>
              <div className="flex items-center gap-1 text-[#98bb3c] font-medium underline font-body-text-large text-lg cursor-pointer">
                View all
                <img
                  src="/assets/images/arrow-right.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-5 gap-6 pt-4 pb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {hotSpotCategories.map((category) => (
                <motion.div
                  key={category.id}
                  className="flex flex-col items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  <div
                    className="w-[90px] h-[90px] flex items-center justify-center rounded-full border-2 border-[#98bb3c] bg-white relative p-5"
                    style={{ borderStyle: "solid" }}
                  >
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-15 h-15"
                    />
                  </div>
                  <p className="text-sm text-[#222] font-body-text-large text-lg text-center">
                    {category.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.img
              className="w-full object-contain mt-10"
              alt="Decorative line"
              src="/assets/images/line-4.svg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>

          {/* Right side */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex-1 flex items-center w-full">
              {/* Left-aligned image */}
              <motion.div
                className="flex justify-center w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/assets/images/frame.svg"
                  alt="Community Streaks Icon"
                  className="w-14 h-24"
                />
              </motion.div>

              {/* Centered image */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <img
                  src="/assets/images/image-42@2x.png"
                  alt="Community illustration"
                  className="w-24 md:w-40 object-contain"
                />
              </motion.div>
            </div>

            <motion.h4
              className="text-[#ffa500] font-h4-semi-bold text-3xl w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
            >
              COMMUNITY STREAKS!
            </motion.h4>

            <motion.p
              className="text-[#565656] font-body-text-large text-xl pb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Earn a streak every time you invite a friend, ask a question, use
              a resource and be entered to win weekly community drawings!
            </motion.p>

            <motion.img
              className="w-full object-contain mt-10"
              alt="Decorative line"
              src="/assets/images/line-3.svg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </section>
      {/* Background full width */}
      <div className="relative w-full mt-10 md:mt-20">
        <motion.img
          src="assets/images/AdobeStock_157478294_Preview 1.png"
          alt="Background"
          className="w-full h-auto object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      {/* Call to Action Section */}
      <motion.section
        className="w-full items-start gap-2.5 px-6 md:px-12 lg:px-[166px] py-10 md:py-[70px] bg-[#1d270c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 items-center py-10 md:py-[70px]">
          <motion.h2
            className="w-full relative self-stretch mt-[-1.00px] font-display-font-1-semi-bold text-[#ffa500] text-xl sm:text-2xl md:text-[length:var(--display-font-1-semi-bold-font-size)] leading-normal md:leading-snug font-[number:var(--display-font-1-semi-bold-font-weight)] text-center tracking-[var(--display-font-1-semi-bold-letter-spacing)] [font-style:var(--display-font-1-semi-bold-font-style)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            JOIN US IN BEING CURIOUS & <br className="hidden sm:block" />
            BUILDING GOOD TOGETHER IN YOUR COMMUNITY!
          </motion.h2>

          <motion.button
            className="flex w-full sm:w-[320px] md:w-[524px] h-16 md:h-20 lg:h-28 items-center justify-center gap-2.5 px-6 py-4 bg-[#98bb3c] rounded-[30px] md:rounded-[60px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-base sm:text-lg md:text-[length:var(--h4-bold-font-size)] font-h4-bold text-white">
              REACH OUT TO LEARN MORE
            </p>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};
