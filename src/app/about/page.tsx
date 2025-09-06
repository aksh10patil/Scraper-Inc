"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";

const teamMembers = [
  { name: "Rajdeep Patil", role: "Creative Director", img: "/team/rajdeep.jpg" },
  { name: "Byom Nath Jha", role: "Director of Client Relations and Project Management", img: "/team/byom.jpg" },
  { name: "Abhishek Swarnakar", role: "Lead Developer", img: "/team/abhishek.jpg" },
  { name: "Vishaal Wadhwa", role: "Marketing Strategist", img: "/team/vishaal.jpg" },
];

const GradientText = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
    {children}
  </span>
);

export default function About() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  // Rotate based on scroll position, but only up to a certain point
  const rotate = useTransform(scrollY, [0, 1000], [0, 100]);
  const rotateReverse = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <>
      <div className="bg-black text-white relative overflow-hidden">
        {/* Global Gradient and Particle Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <Navbar />

        {/* --- Section 1 - Hero --- */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl space-y-6 z-10 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Collaborating with <br />
              <GradientText>genuine brands</GradientText>
              <br />
              that <span className="font-light italic text-gray-300">follow their own paths</span>
            </h1>
          </motion.div>
          <motion.div
            animate={controls}
            style={{ rotate: rotate }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-[15rem] md:w-[28rem] lg:w-[32rem] h-auto mt-10 md:mt-0"
          >
            <Image
              src="/triangle.webp"
              alt="3D Shape"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_0_40px_rgba(180,140,255,0.7)] filter saturate-150"
            />
          </motion.div>
        </section>

        {/* --- Section 2 - Brand Evolution Studio --- */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 py-20 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-6 z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              We are a <GradientText>Brand Evolution Studio</GradientText>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              We partner <span className="font-semibold text-white">closely with our clients</span> to shape their vision into meaningful brand experiences that connect, transform, and empower their businesses across every touchpoint.
            </p>
          </motion.div>
        </section>

        {/* --- Section 3 - Other Projects --- */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 z-10 space-y-6 max-w-2xl text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Other <span className="text-purple-300">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              When <span className="font-semibold text-white">Technology, Strategy, and Design</span> converge, brands truly come alive. Since 2022, we have joined forces with <span className="text-purple-200 font-semibold">Nitsnets</span> — experts in cutting-edge technology — to deliver enhanced brand experiences consistently. Together, we turn ideas into impactful solutions that inspire audiences and ensure every touchpoint feels <span className="italic text-purple-200">on-brand</span>.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-8 py-3 rounded-full border border-purple-300 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              Visit the other website
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center mt-10 md:mt-0"
          >
            <Image
              src="/ourproject.webp"
              alt="Our Project"
              width={600}
              height={600}
              className="object-contain w-[15rem] md:w-[28rem] lg:w-[32rem] drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
            />
          </motion.div>
        </section>

        {/* --- Section 4 - Our Journey --- */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative w-[15rem] md:w-[28rem] lg:w-[32rem] h-auto mb-10 md:mb-0"
          >
            <Image
              src="/journey.webp"
              alt="3D Heart"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 z-10 max-w-2xl space-y-6 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-semibold">
              Our <span className="font-serif italic text-purple-200">journey</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the start, we believed that brands are made of purpose and direction, and that idea is still with us over a decade later. Design is a way to collaborate in the right direction and de-risk your business.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              To us, winning people over is the core of a successful project. Solid relationships built between brands and audiences.
            </p>
          </motion.div>
        </section>

        {/* --- Section 5 - Meet the People --- */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center md:items-start z-10 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the people <br />
              <span className="font-light text-gray-400">behind each project</span>
            </h2>
            <p className="text-gray-300 max-w-lg mb-10">
              A multidisciplinary and passionate team, with a shared vision, to create, enhance and future-proof brands.
            </p>
            {/* Profile Card */}
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 shadow-lg max-w-sm text-center md:text-left bg-gray-800/30 backdrop-blur-md border border-purple-300/30"
            >
              <Image
                src={teamMembers[current].img}
                alt={teamMembers[current].name}
                width={400}
                height={400}
                className="rounded-xl object-cover mb-6"
              />
              <h3 className="text-2xl font-semibold text-white">
                {teamMembers[current].name}
              </h3>
              <p className="text-purple-200 mt-2">{teamMembers[current].role}</p>
            </motion.div>
          </motion.div>

          {/* Right - Team Names */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 z-10 mt-12 md:mt-0"
          >
            <ul className="space-y-4 text-2xl md:text-3xl font-medium">
              {teamMembers.map((member, index) => (
                <li
                  key={member.name}
                  onMouseEnter={() => setCurrent(index)}
                  className={`cursor-pointer transition-colors duration-300 ${
                    index === current ? "text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  {member.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}