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
    <Navbar />
    <div className="gradient-background">
      {/* Section 1 - Collaborating with Genuine Brands */}

        <div className="flex-1 max-w-2xl space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Collaborating with <span className="text-purple-200 font-bold">genuine brands</span> that <br />
            <span className="font-serif italic font-light">follow their own paths</span>
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


          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            We partner <span className="font-semibold text-white">closely with our clients</span> to shape their vision into meaningful brand experiences <span className="font-serif italic">that connect, transform, and empower</span> their businesses across every touchpoint.
          </p>
        </motion.div>
      </section>

      {/* Section 3 - NITSNETS */}

          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Together, we turn ideas into impactful solutions that inspire audiences and ensure every touchpoint feels <span className="italic">on-brand</span>.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-8 py-3 rounded-full border border-gray-400 text-sm font-medium transition"
          >
            Visit the other website
          </motion.a>
        </motion.div>
      </section>

      {/* Section 4 - Our Journey */}

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
        <div className="flex-1 z-10 max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">Our <span className="font-serif italic">journey</span></h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            From the start, we believed that brands are made of purpose and direction, and that idea is still with us over a decade later. Design is a way to collaborate in the right direction and de-risk your business.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            To us, winning people over is the core of a successful project. Solid relationships built between brands and audiences.
          </p>
        </div>
      </section>

    </>
  );
}
