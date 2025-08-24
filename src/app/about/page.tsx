"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  const rotate = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <>
      {/* Section 1 - Collaborating with Genuine Brands */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden">
        {/* Text */}
        <div className="flex-1 max-w-2xl space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Collaborating with{" "}
            <span className="text-purple-200 font-bold">genuine brands</span>{" "}
            that <br />
            <span className="font-serif italic font-light">
              follow their own paths
            </span>
          </h1>
        </div>

        {/* Floating Shape */}
        <motion.div
          animate={controls}
          style={{ rotate }}
          className="flex-1 relative w-[15rem] md:w-[28rem] lg:w-[32rem] h-auto mt-10 md:mt-0"
        >
          <Image
            src="/triangle.webp"
            alt="3D Shape"
            width={600}
            height={600}
            className="object-contain drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
          />
        </motion.div>
      </section>

      {/* Section 2 - Brand Evolution Studio */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-white bg-gradient-to-b from-black via-purple-950 to-black text-center">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            We are a Brand Evolution Studio.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            We partner <span className="font-semibold text-white">with our clients</span>{" "}
            to bring about their vision through brand experiences{" "}
            <span className="font-serif italic">that connect, transform and empower</span>{" "}
            their businesses.
          </p>
        </div>
      </section>

      {/* Section 3 - NITSNETS */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 text-white bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
        {/* Left Text */}
        <div className="flex-1 z-10 space-y-6 max-w-2xl">
          <h2 className="text-4xl font-bold">NITSNETS TECHNOLOGY</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            When cutting-edge Technology, Strategy and Design converge, brands
            become alive. Since 2022, we joined forces with Nitsnets (experts in
            technology), to further enhance brand experiences, consistently
            across the digital and non-digital worlds.
          </p>
          <p className="text-lg text-gray-200">
            Join us to turn ideas into working solutions to inspire your
            audience. Each brand experience designed to be impactful and
            on-brand.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-2 rounded-full border border-gray-400 text-sm hover:bg-white hover:text-black transition"
          >
            Visit the NITSNETS website
          </motion.a>
        </div>
      </section>

      {/* Section 4 - Our Journey */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 text-white bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden">
        {/* Left Shape */}
        <motion.div
          animate={controls}
          style={{ rotate }}
          className="flex-1 relative w-[15rem] md:w-[28rem] lg:w-[32rem] h-auto mb-10 md:mb-0"
        >
          <Image
            src="/heart.webp"
            alt="3D Heart"
            width={600}
            height={600}
            className="object-contain drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
          />
        </motion.div>

        {/* Right Text */}
        <div className="flex-1 z-10 max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our <span className="font-serif italic">journey</span>
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            From the start, we believed that brands are made of purpose and
            direction, and that idea is still with us over a decade later. Design
            is a way to collaborate in the right direction and de-risk your
            business.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            To us, winning people over is the core of a successful project. Solid
            relationships built between brands and audiences.
          </p>
        </div>
      </section>
    </>
  );
}
