"use client";

import { motion, useScroll, useTransform, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroFloating from "./HeroFloating";

// Cycle data
const cycleWords = ["Think.", "Create.", "Change."];
const cycleMessages = [
  "We think strategically. We work on the essence of the brand to find its place in the world.",
  "We delve into who it is, who it speaks to, how, when and where.",
  "We define the right strategies for the brand to mobilize the business."
];

export default function Hero() {
  //const { scrollY } = useScroll();

  // floating anims
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // rotating text
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // floating image anims
    controls1.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });
    controls2.start({
      rotate: [0, -100, 10, 0],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    });

    // text switcher
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % cycleWords.length),
      4000
    );
    return () => clearInterval(interval);
  }, [controls1, controls2]);



  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-6">
        {/* Text */}

        <div className="z-10 max-w-4xl text-center">
          <p className="text-lg font-light">Next-gen brands</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight">
            The future belongs to <br />
            <span className="font-serif italic text-gray-200">
              world-defining brands
            </span>
          </h1>
          

         
        </div>

        {/* Floating bubble */}
        <motion.div
          animate={controls2}

        >
          <Image
            src="/bubble.webp"
            alt="3D spiral"

            width={600}
            height={600}
            className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
          />
        </motion.div>
      </section>

      {/* Auto-switching text section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-20 text-white overflow-hidden">
        {/* Left Side - Animated headline */}
        <div className="flex-1 flex items-center justify-center lg:justify-start">
          <div className="relative h-24 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={cycleWords[index]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-light"
              >
                {cycleWords[index]}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Animated message */}
        <div className="flex-1 mt-12 lg:mt-0 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={cycleMessages[index]}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl opacity-90 leading-relaxed"
            >
              {cycleMessages[index]}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* Brand Experience Section (with heart) */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-12 text-white overflow-hidden">
        {/* Left - Floating heart */}
        <div className="flex justify-center md:flex-1 relative">
          <motion.div
            animate={controls1}
            style={{ rotate }}
            className="absolute sm:top-60 sm:left-1/2 sm:-translate-x-1/2
              md:static md:left-0 w-[15rem] sm:w-[20rem] md:w-[32rem]"
          >
            <Image
              src="/heart.webp"
              alt="3D heart"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
            />
          </motion.div>
        </div>

        {/* Right - Text */}
        <div className="flex-1 space-y-3 text-center md:text-left max-w-lg">
          <p className="text-xs sm:text-sm text-gray-300">
            It all starts with people
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:leading-tight">
            A brand that learns how to matter and connect to its{" "}
            <span className="font-bold text-white">audience</span>{" "}
            <span className="font-serif italic font-light">
              is a brand that moves business forward
            </span>
          </h1>
        </div>
      </section>
    </>
  );
}
