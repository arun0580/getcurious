import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/Button";

export const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yImage4 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const [typedText, setTypedText] = useState({ get: "", curious: "" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    const text1 = "GET";
    const text2 = "CURIOUS TOGETHER";

    if (step === 0) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => ({ ...prev, get: text1.slice(0, i + 1) }));
        i++;
        if (i === text1.length) {
          clearInterval(interval);
          setTimeout(() => setStep(1), 250); // reduced delay
        }
      }, 120); // reduced typing speed
      return () => clearInterval(interval);
    }

    if (step === 1) {
      let j = 0;
      const interval = setInterval(() => {
        setTypedText((prev) => ({ ...prev, curious: text2.slice(0, j + 1) }));
        j++;
        if (j === text2.length) {
          clearInterval(interval);
          setTimeout(() => setStep(2), 400); // reduced delay
        }
      }, 60); // reduced typing speed
      return () => clearInterval(interval);
    }

    if (step === 2) setTimeout(() => setStep(3), 600); // reduced delay
    if (step === 3) setTimeout(() => setStep(4), 500); // reduced delay
  }, [step]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-[url('/assets/images/adobestock-280662181-1.png')] bg-cover bg-center py-16 md:py-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-10 items-center px-6 md:px-12 h-full py-0 md:py-10">
        {/* Left Content */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left relative min-h-[500px] flex flex-col justify-start"
        >
          <div className="[font-family:'Anton',Helvetica] font-normal leading-[normal] relative">
            {/* Floating Mask */}
            <motion.img
              className="absolute w-[40vw] max-w-[343px] h-auto top-[-70px] left-[25%]"
              alt="Floating"
              src="/assets/images/mask-group-3@2x.png"
            />

            {/* Reserve text height & overlay typing */}
            <div className="relative min-h-[140px]">
              <div className="invisible">
                <span className="text-orange-500 text-[32px] block">GET</span>
                <span className="text-[#1e1e1e] text-[80px] block">
                  CURIOUS TOGETHER
                </span>
              </div>

              <div className="absolute top-0 left-0">
                <motion.span
                  className="text-orange-500 text-[32px] block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {typedText.get}
                </motion.span>

                <motion.span
                  className="text-[#1e1e1e] text-[80px] block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: typedText.curious ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {typedText.curious}
                </motion.span>
              </div>
            </div>

            {/* Underline */}
            {step >= 1 && typedText.curious === "CURIOUS TOGETHER" && (
              <motion.img
                className="absolute w-[30vw] max-w-[275px] h-auto top-[93%] left-[48%] -translate-x-1/2"
                alt="Vector"
                src="/assets/images/vector-22.svg"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            )}
          </div>

          {/* Taglines + Button block */}
          <div className="relative min-h-[220px]">
            <div className="absolute top-0 left-0 w-full">
              {step >= 2 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.3 },
                    },
                  }}
                  className="space-y-2"
                >
                  {[
                    "Empowering Learning",
                    "Celebrating Communities",
                    "Connecting People",
                  ].map((line, i) => (
                    <motion.p
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.8 }}
                      className="text-[40px] leading-[3.5rem] [font-family:'Anton',Helvetica] font-normal text-black"
                    >
                      {line}
                    </motion.p>
                  ))}
                </motion.div>
              )}

              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="pt-6 cursor-pointer w-full md:w-[300px]"
                >
                  <Button
                    property1="default"
                    text="Learn More"
                    className="w-full"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Side Images */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 relative md:min-h-[600px] min-h-[400px] md:static overflow-hidden pt-20 md:pt-0">
          {step >= 4 && (
            <>
              <motion.img
                style={{ y: yImage1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="hidden md:block absolute w-[156px] h-[124px] top-[30px] md:top-[-30px] right-[0%] md:right-[-4%] object-cover"
                alt="Floating"
                src="/assets/images/image-2024-11-21t03-37-18-070z-1@2x.png"
              />
              <motion.img
                style={{ y: yImage2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/assets/images/idea-1@2x.png"
                alt="Lightbulb Idea"
                className="w-full aspect-square rounded-tl-[40px] sm:rounded-tl-[100px] object-cover"
              />
              <motion.img
                style={{ y: yImage3 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/assets/images/saturday-1@2x.png"
                alt="Small Business"
                className="w-full aspect-square rounded-tr-[40px] sm:rounded-tr-[100px] object-cover "
              />
              <motion.img
                style={{ y: yImage4 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src="/assets/images/dog-1@2x.png"
                alt="Dog Walking"
                className="w-full aspect-square rounded-bl-[40px] sm:rounded-bl-[100px] object-cover"
              />
              <motion.img
                style={{ y: yImage1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                src="/assets/images/group-1413371869@2x.png"
                alt="Kids with Science Project"
                className="w-full aspect-square rounded-br-[40px] sm:rounded-br-[100px] object-cover"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
