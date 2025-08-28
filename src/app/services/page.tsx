"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

/* ------------------- Card Component ------------------- */
const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="btn1" />
        <div className="btn2" />
        <div className="btn3" />
        <div className="btn4" />
        <div className="card-int">
          <div className="hello">
            Think. Create. Change.
            <span className="hidden"></span>
          </div>
        </div>
        <div className="top">
          <div className="camera">
            <div className="int" />
          </div>
          <div className="speaker" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 210px;
    height: 400px;
    background: black;
    border-radius: 35px;
    border: 2px solid rgb(40, 40, 40);
    padding: 7px;
    position: relative;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.486);
    transition: 0.5s transform, 0.6s box-shadow;
    cursor: pointer;
  }

  .card:hover {
    transform: rotateY(10deg) rotateX(5deg) scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  }

  .card-int {
    background-image: linear-gradient(
      45deg,
      #8e8989,
      #ff0044,
      #5a3e4b,
      #262225,
      #2c0334,
      #ffffff,
      #6a6878,
      #c1d9ff,
      #003d94,
      #002e66,
      #001d3a,
      #020812
    );
    background-size: 200% 200%;
    height: 100%;
    border-radius: 25px;
    transition: all 0.6s ease-out;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:hover .card-int {
    background-position: 100% 100%;
  }

  .top {
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 35%;
    height: 18px;
    background-color: rgb(1, 1, 1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .speaker {
    position: absolute;
    top: 2px;
    right: 50%;
    transform: translate(50%, 0%);
    width: 40%;
    height: 2px;
    border-radius: 2px;
    background-color: rgb(20, 20, 20);
  }

  .camera {
    position: absolute;
    top: 6px;
    right: 84%;
    transform: translate(50%, 0%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.048);
  }

  .int {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background-color: rgba(0, 0, 255, 0.212);
  }

  .btn1,
  .btn2,
  .btn3,
  .btn4 {
    position: absolute;
    width: 2px;
  }

  .btn1,
  .btn2,
  .btn3 {
    height: 45px;
    top: 30%;
    right: -4px;
    background-image: linear-gradient(to right, #111, #222, #333, #464646, #595959);
  }

  .btn2,
  .btn3 {
    transform: scale(-1);
    left: -4px;
  }

  .btn2 {
    top: 26%;
    height: 30px;
  }

  .btn3 {
    top: 36%;
    height: 30px;
  }

  .hello {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 35px;
    height: 100%;
    transition: 0.5s ease-in-out;
  }

  .hidden {
    display: block;
    opacity: 0;
    transition: all 0.3s ease-in;
  }

  .card:hover .hidden {
    opacity: 1;
  }
`;

/* ------------------- Bubble & Heart ------------------- */
const Bubble = () => (
  <div className="relative w-96 h-96">
    <Image
      src="/bubble.webp"
      alt="3D bubble"
      width={400}
      height={400}
      className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
    />
  </div>
);

const Heart = () => (
  <div className="relative w-80 h-80">
    <Image
      src="/heart.webp"
      alt="3D heart"
      width={400}
      height={400}
      className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(236,72,153,0.3)]"
    />
  </div>
);

/* ------------------- Service Section ------------------- */
interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  visual: "bubble" | "heart";
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  description,
  visual,
  reverse,
}) => {
  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 md:px-20 py-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className="lg:w-1/2 text-white space-y-6 mb-12 lg:mb-0"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          {title}
          {subtitle && (
            <>
              <br />
              <span className="font-light italic text-purple-300">
                {subtitle}
              </span>
            </>
          )}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-lg">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8, rotateY: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {visual === "bubble" ? <Bubble /> : <Heart />}
      </motion.div>
    </section>
  );
};

/* ------------------- Cycle Data ------------------- */
const cycleData = [
  {
    word: "Think.",
    title: "We think",
    subtitle: "strategically",
    description:
      "We work on the essence of the brand to find its place in the world. We delve into who it is, who it speaks to, how, when and where.",
  },
  {
    word: "Create.",
    title: "We create",
    subtitle: "with purpose",
    description:
      "We design experiences and narratives that make the brand tangible. Every detail is crafted to connect and inspire authentically.",
  },
  {
    word: "Change.",
    title: "We drive",
    subtitle: "transformation",
    description:
      "We define the right strategies for the brand to mobilize the business, making impact and relevance sustainable over time.",
  },
];

/* ------------------- Main Page ------------------- */
export default function Service() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % cycleData.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black">
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-start px-8 md:px-20 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                Next-gen
                <br />
                <span className="text-gray-300">brands</span>
              </h1>

              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl opacity-90">
                Relevant brands are those capable of generating impact with
                authentic connections. Brands that matter and inspire rather
                than sell.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Sections */}
        <ServiceSection
          title="The brand as"
          subtitle="an experience"
          description="A strong brand excites, leaves an impression and stays relevant in every interaction. That's why we work from its essence and at every touch point to generate real connections and build preference."
          visual="heart"
        />

        <ServiceSection
          title="We think"
          subtitle="strategically"
          description="We work on the essence of the brand to find its place in the world. We delve into who it is, who it speaks to, how, when and where. We define the right strategies for the brand to mobilize the business."
          visual="bubble"
          reverse
        />

        {/* Auto-Switching Text Section with Card */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center px-8 md:px-20 py-16 gap-12">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-20 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={cycleData[index].word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl md:text-7xl font-light text-white"
                  >
                    {cycleData[index].word}
                  </motion.h3>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={cycleData[index].title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <h4 className="text-3xl md:text-4xl font-light text-white">
                    {cycleData[index].title}
                    <br />
                    <span className="font-light italic text-purple-300">
                      {cycleData[index].subtitle}
                    </span>
                  </h4>
                  <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed">
                    {cycleData[index].description}
                  </p>

                  <div className="flex justify-end pt-8">
                    <svg
                      width="60"
                      height="20"
                      viewBox="0 0 60 20"
                      className="text-white opacity-60"
                    >
                      <path
                        d="M2 10 L50 10 M42 3 L50 10 L42 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* 3D Card */}
          <div className="lg:w-1/2 flex justify-center">
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}
