"use client";

import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

// NOTE: next/image is not supported. Using standard <img> tag instead.
// import Image from "next/image";

// NOTE: Assuming Navbar and Footer components are available in the public directory
// import Navbar from "../../../public/components/Navbar";
// import Footer from "../../../public/components/Footer";

// Reusable component for gradient text, improving code readability.
const GradientText = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
    {children}
  </span>
);

export default function AboutPage() {
  const { scrollY } = useScroll();
  const rotatingShapeControls = useAnimationControls();

  // Animation for the continuously rotating 3D shape in the hero section.
  useEffect(() => {
    rotatingShapeControls.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });
  }, [rotatingShapeControls]);

  // Parallax effect for the 3D shapes.
  const rotateHeroShape = useTransform(scrollY, [0, 1000], [0, 100]);
  const rotateJourneyShape = useTransform(scrollY, [0, 1000], [0, -100]);

  // Framer Motion variants for section entrance animations.
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <>
      <div className="bg-black text-white relative overflow-hidden font-inter">
        {/* Global Gradient and Particle Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* <Navbar /> */}

        {/* --- Section 1: Hero --- */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-20 overflow-hidden text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl space-y-6 z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Collaborating with <br />
              <GradientText>genuine brands</GradientText>
              <br />
              that <span className="font-light italic text-gray-300">follow their own paths</span>
            </h1>
          </motion.div>
          <motion.div
            animate={rotatingShapeControls}
            style={{ rotate: rotateHeroShape }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative w-full md:w-[28rem] lg:w-[32rem] h-auto mt-10 md:mt-0 flex justify-center"
          >
            <img
              src="/triangle.webp"
              alt="3D Shape"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_0_40px_rgba(180,140,255,0.7)] filter saturate-150"
            />
          </motion.div>
        </section>
        
        {/* --- Section 2: Animated Text --- */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 py-20 text-center overflow-hidden">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl space-y-6 z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight shimmer">
              We are a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Brand Evolution Studio</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in-up">
              We partner <span className="font-semibold text-white">closely with our clients</span> to shape their vision into meaningful brand experiences that connect, transform, and empower their businesses across every touchpoint.
            </p>
          </motion.div>
        </section>

        {/* --- Section 3: Other Projects --- */}
        <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 overflow-hidden text-center md:text-left">
          <motion.div
            variants={leftPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 z-10 space-y-6 max-w-2xl"
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
            variants={rightPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex justify-center mt-10 md:mt-0"
          >
            <img
              src="/ourproject.webp"
              alt="Our Project"
              width={600}
              height={600}
              className="object-contain w-[15rem] md:w-[28rem] lg:w-[32rem] drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
            />
          </motion.div>
        </section>

        {/* --- Section 4: Our Journey --- */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-20 overflow-hidden text-center md:text-left">
          <motion.div
            variants={leftPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 relative w-full md:w-[28rem] lg:w-[32rem] h-auto mb-10 md:mb-0 flex justify-center"
          >
            <img
              src="/journey.webp"
              alt="3D Heart"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_0_40px_rgba(180,140,255,0.7)]"
            />
          </motion.div>
          <motion.div
            variants={rightPanelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 z-10 max-w-2xl space-y-6"
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
      </div>
      {/* <Footer /> */}
      <style>
        {`
        .dash {
          animation: dashArray 2s ease-in-out infinite,
            dashOffset 2s linear infinite;
        }

        .spin {
          animation: spinDashArray 2s ease-in-out infinite,
            spin 8s ease-in-out infinite,
            dashOffset 2s linear infinite;
          transform-origin: center;
        }

        @keyframes dashArray {
          0% {
            stroke-dasharray: 0 1 359 0;
          }

          50% {
            stroke-dasharray: 0 359 1 0;
          }

          100% {
            stroke-dasharray: 359 1 0 0;
          }
        }

        @keyframes spinDashArray {
          0% {
            stroke-dasharray: 270 90;
          }

          50% {
            stroke-dasharray: 0 360;
          }

          100% {
            stroke-dasharray: 270 90;
          }
        }

        @keyframes dashOffset {
          0% {
            stroke-dashoffset: 365;
          }

          100% {
            stroke-dashoffset: 5;
          }
        }

        @keyframes spin {
          0% {
            rotate: 0deg;
          }

          12.5%, 25% {
            rotate: 270deg;
          }

          37.5%, 50% {
            rotate: 540deg;
          }

          62.5%, 75% {
            rotate: 810deg;
          }

          87.5%, 100% {
            rotate: 1080deg;
          }
        }

        .shimmer {
          background-size: 200% auto;
          background-image: linear-gradient(to right, #973BED 0%, #007CFF 50%, #973BED 100%);
          animation: shimmer 5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        `}
      </style>
    </>
  );
}
