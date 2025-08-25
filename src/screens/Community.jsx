import React from "react";
import { Button } from "../components/Button";

export const Community = () => {
  const communityLocations = [
    {
      id: 1,
      name: "Downtown Conway",
      image: "https://c.animaapp.com/zIBKH2hr/img/ellipse-7@2x.png",
      rank: 1,
    },
    {
      id: 2,
      name: "Tucker Creek Walking/Bike Trail",
      image: "https://c.animaapp.com/zIBKH2hr/img/ellipse-7-1@2x.png",
      rank: 2,
    },
    {
      id: 3,
      name: "Beaverfork Lake",
      image: "https://c.animaapp.com/zIBKH2hr/img/ellipse-7-2@2x.png",
      rank: 3,
    },
    {
      id: 4,
      name: "Conway Public Library",
      image: "https://c.animaapp.com/zIBKH2hr/img/ellipse-7-3@2x.png",
      rank: 4,
    },
    {
      id: 5,
      name: "The Village at Hendrix",
      image: "https://c.animaapp.com/zIBKH2hr/img/ellipse-7-4@2x.png",
      rank: 5,
    },
  ];

  const communityNews = [
    {
      id: 1,
      title: "Mornings w/the Mayor's Office",
      description:
        "Stay informed on how local government decisions impact residents, business...",
      image: "https://c.animaapp.com/zIBKH2hr/img/rectangle-77.svg",
      likes: 25,
      comments: 12,
    },
    {
      id: 2,
      title: "City Council Weekly Roundup",
      description:
        "Catch up on the key points from the latest city council meeting...",
      image: "https://c.animaapp.com/zIBKH2hr/img/rectangle-77-1.svg",
      likes: 18,
      comments: 7,
    },
    {
      id: 3,
      title: "Community Cleanup Initiative",
      description:
        "Join the effort to make our community cleaner and greener this weekend...",
      image: "https://c.animaapp.com/zIBKH2hr/img/rectangle-77-2.svg",
      likes: 42,
      comments: 20,
    },
  ];

  const hotSpotCategories = [
    {
      id: 1,
      name: "Food",
      icon: "https://c.animaapp.com/zIBKH2hr/img/frame-181.svg",
      isCustomIcon: true,
    },
    {
      id: 2,
      name: "Arts & Entertainment",
      icon: "https://c.animaapp.com/zIBKH2hr/img/palette.svg",
      isCustomIcon: false,
    },
    {
      id: 3,
      name: "People",
      icon: "https://c.animaapp.com/zIBKH2hr/img/users-02.svg",
      isCustomIcon: false,
    },
    {
      id: 4,
      name: "Non-Profit",
      icon: "https://c.animaapp.com/zIBKH2hr/img/frame-181-1.svg",
      isCustomIcon: true,
    },
    {
      id: 5,
      name: "Schools",
      icon: "https://c.animaapp.com/zIBKH2hr/img/graduation-hat-02.svg",
      isCustomIcon: false,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <section className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-12">
          {/* Left Column */}
          <div className="space-y-6 order-2 md:order-1 relative">
            <h1 className="text-[40px] md:text-[64px] [font-family:'Anton',Helvetica] font-normal text-[#98bb3c] leading-tight">
              Your Community.
              <br />
              Your Way.
              <br />
              All In One Place!
            </h1>

            <p className="[font-family:'Jost',Helvetica] font-normal text-[#565656] text-lg md:text-2xl leading-normal">
              "A single platform where curious minds can explore everything
              about their community, connect with each other, support education,
              learn, grow, and do together with just a click!"
            </p>

            <div className="flex justify-start">
              <div className="pt-4 cursor-pointer w-full md:w-[300px]">
                <Button
                  property1="default"
                  className="w-full cursor-pointer"
                  text={<>COMING SOON!</>}
                />
              </div>
            </div>

            {/* Decorative Image */}
            <div className="absolute -top-6 right-0 w-40 md:w-96">
              <img
                className="w-full h-auto object-contain"
                alt="Community illustration"
                src="https://c.animaapp.com/zIBKH2hr/img/mask-group@2x.png"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <img
              className="w-[300px] md:w-[500px] object-contain"
              alt="Community vector"
              src="https://c.animaapp.com/zIBKH2hr/img/vector-1@2x.png"
            />
            <img
              className="absolute top-0 right-0 w-[100px] md:w-[200px] object-contain"
              alt="Community mask"
              src="https://c.animaapp.com/zIBKH2hr/img/mask-group-1@2x.png"
            />
          </div>
        </div>
      </section>
      {/* Background full width */}
      <div className="relative w-full mt-10 md:mt-20">
        <img
          src="https://c.animaapp.com/zIBKH2hr/img/adobestock-412001654-preview-1@4x.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Civic Engagement Section */}
      <section className="w-full bg-[#ffa5000a] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-h3-semi-bold font-[number:var(--h3-semi-bold-font-weight)] text-[#222] text-2xl md:text-4xl leading-[32px] md:leading-[44px] lg:leading-[60px]">
              COMMUNITY & CIVIC ENGAGEMENT
              <br />
              Curious about "What's going on?" to <br />
              "How can we make it better!"
            </h2>

            <p className="[font-family:'Jost',Helvetica] font-normal text-[#565656] text-lg md:text-2xl leading-relaxed">
              Civic Engagement is essential to building strong communities. It
              isn't just about voting. It's about connecting, learning, acting,
              and building good together.
            </p>
          </header>

          {/* Community Locations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12 justify-items-center">
            {communityLocations.map((location) => (
              <div key={location.id} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    alt={location.name}
                    src={location.image}
                  />
                  <div className="absolute -top-2 -left-2 bg-[#98bb3c] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                    #{location.rank}
                  </div>
                </div>
                <p className="font-body-text-regular text-maindarkprimary text-center mt-2">
                  {location.name}
                </p>
              </div>
            ))}
          </div>

          {/* Community News */}
          <h3 className="text-xl md:text-2xl font-h5-semi-bold mt-16 text-center text-black">
            Community News
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
            {communityNews.map((news) => (
              <article
                key={news.id}
                className="flex flex-col bg-[#f9f9f9] rounded-[10px] border border-[#ececec] overflow-hidden"
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
                          src="https://c.animaapp.com/zIBKH2hr/img/frame-7.svg"
                        />
                        {news.likes} Likes
                      </span>

                      <span className="font-body-text-regular flex items-center">
                        <img
                          className="relative w-5 h-5 me-1"
                          alt="Comment icon"
                          src="https://c.animaapp.com/zIBKH2hr/img/frame-8.svg"
                        />
                        {news.comments} Comments
                      </span>
                    </div>
                    <img
                      className="w-6 h-6"
                      alt="Share icon"
                      src="https://c.animaapp.com/zIBKH2hr/img/frame-9.svg"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Outro Text */}
          <p className="max-w-2xl mx-auto mt-16 [font-family:'Anton',Helvetica] text-[#ffa500] text-xl md:text-2xl text-center">
            Curious about where to find your local community garden, how to
            volunteer, what's happening over the weekend, or maybe news from the
            Mayor's Office?
          </p>

          <div className="flex justify-center mt-10">
            <img
              className="w-40 md:w-52"
              alt="Community illustration"
              src="https://c.animaapp.com/zIBKH2hr/img/frame-1991423886.svg"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#fff] py-12 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="text-[#98bb3c] font-h3-semi-bold text-2xl md:text-4xl">
              New to town? Just visiting?
            </h3>

            {/* Hot Spots header */}
            <div className="flex items-center justify-between pb-5">
              <div className="flex items-center gap-2 text-[#98bb3c] font-h5-medium text-lg">
                <img
                  src="https://c.animaapp.com/zIBKH2hr/img/marker-pin-04.svg"
                  alt="marker"
                  className="w-5 h-5"
                />
                Hot Spots - Geography
              </div>
              <div className="flex items-center gap-1 text-[#98bb3c] font-medium underline  font-body-text-large text-lg cursor-pointer">
                View all
                <img
                  src="https://c.animaapp.com/zIBKH2hr/img/arrow-right.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 pt-4 pb-12">
              {hotSpotCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full border-2 border-[#98bb3c] bg-white relative p-5">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-15 h-15"
                    />
                  </div>
                  <p className="text-sm text-[#222] font-body-text-large text-lg text-center">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="w-full  object-contain mt-10"
              alt="Decorative line"
              src="https://c.animaapp.com/zIBKH2hr/img/line-4.svg"
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="flex-1 flex items-center w-full">
              {/* Left-aligned image */}
              <div className="flex justify-center w-[200px]">
                <img
                  src="https://c.animaapp.com/zIBKH2hr/img/frame.svg"
                  alt="Community Streaks Icon"
                  className="w-14 h-24"
                />
              </div>

              {/* Centered image */}
              <div className="flex justify-center">
                <img
                  src="https://c.animaapp.com/zIBKH2hr/img/image-42@2x.png"
                  alt="Community illustration"
                  className="w-24 md:w-40 object-contain"
                />
              </div>
            </div>

            <h4 className="text-[#ffa500] font-h4-semi-bold text-3xl w-full text-center">
              COMMUNITY STREAKS!
            </h4>

            <p className="text-[#565656] font-body-text-large text-xl pb-10 text-center">
              Earn a streak every time you invite a friend, ask a question, use
              a resource and be entered to win weekly community drawings!
            </p>
            <img
              className="w-full object-contain mt-10"
              alt="Decorative line"
              src="https://c.animaapp.com/zIBKH2hr/img/line-3.svg"
            />
          </div>
        </div>
      </section>

      {/* Background full width */}
      <div className="relative w-full mt-10 md:mt-20">
        <img
          src="assets/images/AdobeStock_157478294_Preview 1.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Call to Action Section */}
      <section className="w-full items-start gap-2.5 px-6 md:px-12 lg:px-[166px] py-10 md:py-[70px] bg-[#1d270c]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 items-center py-10 md:py-[70px]">
          <h2 className="w-full relative self-stretch mt-[-1.00px] font-display-font-1-semi-bold text-[#ffa500] text-xl sm:text-2xl md:text-[length:var(--display-font-1-semi-bold-font-size)] leading-normal md:leading-snug font-[number:var(--display-font-1-semi-bold-font-weight)] text-center tracking-[var(--display-font-1-semi-bold-letter-spacing)] [font-style:var(--display-font-1-semi-bold-font-style)]">
            JOIN US IN BEING CURIOUS &amp; <br className="hidden sm:block" />
            BUILDING GOOD TOGETHER IN YOUR COMMUNITY!
          </h2>

          <button className="flex w-full sm:w-[320px] md:w-[524px] h-16 md:h-20 lg:h-28 items-center justify-center gap-2.5 px-6 py-4 relative bg-[#98bb3c] rounded-[30px] md:rounded-[60px]">
            <p className="text-base sm:text-lg md:text-[length:var(--h4-bold-font-size)] relative w-fit font-h4-bold font-[number:var(--h4-bold-font-weight)] text-white tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] [font-style:var(--h4-bold-font-style)]">
              REACH OUT TO LEARN MORE
            </p>
          </button>
        </div>
      </section>
    </div>
  );
};
