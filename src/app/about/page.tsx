"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <>
      <Navbar />
      <div className="gradient-background text-white min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1">
          {/* Section 1 - Hero */}

{/* Section 1 - Hero */}
<section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-20 gap-12 mt-20">
  {/* Text */}
  <div className="flex-1 max-w-2xl space-y-6 z-10 text-center lg:text-left">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
      Collaborating with{" "}
      <span className="text-purple-300 font-bold">genuine brands</span> that <br />
      <span className="font-serif italic font-light text-gray-300">
        follow their own paths
      </span>
    </h1>
  </div>

  {/* Image */}
  <motion.div animate={controls} className="flex-1 flex justify-center">
    <Image
      src="/triangle.webp"
      alt="3D Shape"
      width={600}
      height={600}
      className="object-contain w-[18rem] md:w-[28rem] lg:w-[32rem] drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
    />
  </motion.div>
</section>



          {/* Section 2 - Brand Evolution Studio */}
          <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-16 py-20 text-center">
            <div className="max-w-4xl space-y-6 z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                We are a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                  Brand Evolution Studio
                </span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                We partner{" "}
                <span className="font-semibold text-white">closely with our clients</span>{" "}
                to shape their vision into meaningful brand experiences{" "}
                <span className="font-serif italic">that connect, transform, and empower</span>{" "}
                their businesses across every touchpoint.
              </p>
            </div>
          </section>

          {/* Section 3 - Other Projects */}
          <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 gap-12">
            {/* Left Content */}
            <div className="flex-1 z-10 space-y-6 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                Other <span className="text-purple-300">Projects</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                When{" "}
                <span className="font-semibold text-white">Technology, Strategy, and Design</span>{" "}
                converge, brands truly come alive. Since 2022, we have joined forces with{" "}
                <span className="text-purple-200 font-semibold">Nitsnets</span> — experts in
                cutting-edge technology — to deliver enhanced brand experiences consistently.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Together, we turn ideas into impactful solutions that inspire audiences and
                ensure every touchpoint feels{" "}
                <span className="italic text-purple-200">on-brand</span>.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-6 px-8 py-3 rounded-full border border-purple-300 text-sm font-medium transition"
              >
                Visit the other website
              </motion.a>
            </div>
            {/* Right Image */}
            <motion.div animate={controls} className="flex-1 flex justify-center">
              <Image
                src="/ourproject.webp"
                alt="Our Project"
                width={600}
                height={600}
                className="object-contain w-[18rem] md:w-[28rem] lg:w-[32rem] drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
              />
            </motion.div>
          </section>

          {/* Section 4 - Our Journey */}
          <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 gap-12">
            {/* Left Image */}
            <motion.div
              animate={controls}
              className="flex-1 flex justify-center"
            >
              <Image
                src="/journey.webp"
                alt="3D Heart"
                width={600}
                height={600}
                className="object-contain w-[18rem] md:w-[28rem] lg:w-[32rem] drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
              />
            </motion.div>
            {/* Right Content */}
            <div className="flex-1 z-10 max-w-2xl space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-semibold">
                Our{" "}
                <span className="font-serif italic text-purple-200">journey</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                From the start, we believed that brands are made of purpose and direction,
                and that idea is still with us over a decade later. Design is a way to
                collaborate in the right direction and de-risk your business.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                To us, winning people over is the core of a successful project. Solid
                relationships built between brands and audiences.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
