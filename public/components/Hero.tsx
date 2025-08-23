"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();

  // Independent floating animation controls
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    controls1.start({
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });

    controls2.start({
      y: [0, -40, 0],
      rotate: [0, -10, 10, 0],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls1, controls2]);

  // Scroll-based motion
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <>
      {/* Hero Section 1 */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden  from-purple-900 via-purple-800 to-black text-white px-6">
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

        {/* Floating Shape 1 */}
        <motion.div
          animate={controls1}
          style={{ y, rotate }}
          className="absolute right-5 top-0 w-[28rem] h-[28rem] pointer-events-none"
        >
          <Image
            src="/dirty-3d-bg-removed.webp"
            alt="3D blob"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
          />
        </motion.div>

        {/* Floating Shape 2 */}
        <motion.div
          animate={controls2}
          style={{ y, rotate }}
          className="absolute left-0 top-1/2 w-[35rem] h-[35rem] pointer-events-none"
        >
          <Image
            src="/spiral-3d-rm.webp"
            alt="3D spiral"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
          />
        </motion.div>
      </section>


      {/* <section className="relative flex items-center justify-center min-h-screen  from-purple-800 via-purple-900 to-black overflow-hidden text-white px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-12 top-1/2 transform -translate-y-1/2 w-72 h-72 rounded-full  from-purple-400/30 to-purple-600/20 backdrop-blur-2xl border border-purple-300/30 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
        />


        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            It all starts with <span className="text-purple-300">people</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            A brand that learns how to matter and connect to its audience <br />
            is a brand that moves business forward.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-lg font-semibold shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
