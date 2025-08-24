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
     // y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });

    controls2.start({
      //y: [0, -40, 0],
      rotate: [0, -100, 10, 0],
      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls1, controls2]);

  // Scroll-based motion
  //const y = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <>
 
      {/* Hero Section 1 */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden  text-white px-6">
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

        {/* Floating bubble 2 */}
                <motion.div
          animate={controls2}
          style={{rotate }}
          className="absolute left-50 top-40 w-[15rem] h-[15rem] pointer-events-none will-change-transform"
        >

          <Image
            src="/bubble.webp"
            alt="3D spiral"
            width={600}   // or w-[15rem] equivalent
            height={600}
            className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
          />
        </motion.div>

            </section>


            <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-4 sm:px-6">
  <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
    
    {/* Left Section - Heart Image */}


    <div className="flex justify-center md:flex-1 relative">

      
      <motion.div
        animate={controls1}
        style={{ rotate }}
        className="absolute
        sm:top-60 sm:left-1/2 sm:-translate-x-1/2
         md:static left-1/2 md:left-5 top-20 md:top-40 -translate-x-1/2 md:translate-x-0 w-[15rem] sm:w-[20rem] md:w-[35rem] h-auto pointer-events-none"
      >
        <Image
          src="/heart.webp"
          alt="3D blob"
          width={600}
          height={600}
          className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
        />
      </motion.div>


    </div>

    {/* Right Section - Text */}
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
  </div>
</section>

<section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 text-white overflow-hidden">
      
      {/* Text Section */}
      <div className="flex-1 z-10 text-center md:text-left max-w-2xl space-y-6">
        <p className="text-sm text-gray-300">Brand as an experience</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          A <span className="text-white">successful brand</span> <br />
          <span className="text-purple-200">grows</span>{" "}
          <span className="font-serif italic font-light">with every interaction</span>
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 rounded-full border border-gray-400 text-sm hover:bg-white hover:text-black transition"
        >
          About us
        </motion.button>
      </div>

      {/* Right Side Floating Bubbles */}
      <div className="flex-1 relative flex justify-center md:justify-end mt-10 md:mt-0">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: [0, -20, 0], opacity: 100 }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },  // quick fade in
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, // smooth floating
          }}
          className="relative w-[16rem] md:w-[28rem] lg:w-[32rem] h-auto"
        >
          <Image
            src="/convos.webp" // replace with your glass bubbles asset
            alt="3D chat bubbles"
            width={600}
            height={600}
            className="object-contain drop-shadow-[0_0_25px_rgba(180,140,255,0.7)]"
          />
        </motion.div>
      </div>
    </section>

                 

    </>
  );
}
