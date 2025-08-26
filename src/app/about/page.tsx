"use client";

import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";

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

  // Team Members
  const teamMembers = [
    { name: "Rajdeep Patil", role: "Creative Director", img: "/team/rajdeep.jpg" },
    { name: "Byom Nath Jha", role: "Director of Client Relations and Project Management", img: "/team/byom.jpg" },
    { name: "Abhishek Swarnakar", role: "Lead Developer", img: "/team/abhishek.jpg" },
    { name: "Vishaal Wadhwa", role: "Marketing Strategist", img: "/team/vishaal.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-switch every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="gradient-background text-white">
        <Navbar />

        {/* Section 1 - Hero */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 overflow-hidden">
          <div className="flex-1 max-w-2xl space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Collaborating with{" "}
              <span className="text-purple-300 font-bold">genuine brands</span> that <br />
              <span className="font-serif italic font-light text-gray-300">
                follow their own paths
              </span>
            </h1>
          </div>
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
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-6 z-10"
          >
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
          </motion.div>
        </section>

      {/* Section 3 - Other Projects */}
<section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden">
  {/* Left Content */}
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex-1 z-10 space-y-6 max-w-2xl"
  >
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
  </motion.div>

{/* Right Image */}
<motion.div
  animate={controls}
  style={{ rotate }}
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

        {/* Section 4 - Our Journey */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden">
          <motion.div
            animate={controls}
            style={{ rotate }}
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
          <div className="flex-1 z-10 max-w-2xl space-y-6">
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

        {/* Section 5 - Meet the People */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center md:items-start z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the people <br />
              <span className="font-light text-gray-400">behind each project</span>
            </h2>
            <p className="text-gray-300 max-w-lg mb-10">
              A multidisciplinary and passionate team, with a shared vision, to create,
              enhance and future-proof brands.
            </p>

            {/* Auto-Changing Profile Card */}
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
                    index === current ? "text-white" : "text-gray-500"
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
