"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";

/* ------------------- Creative Glassmorphic Card ------------------- */
interface CardProps {
  title: string;
  description: string;
  index: number;
}

const CreativeCard: React.FC<CardProps> = ({ title, description, index }) => {
  const cardVariants = [
    {
      gradient: "from-purple-500/30 via-pink-500/20 to-blue-500/30",
      glowColor: "shadow-purple-500/50",
      borderGlow: "border-purple-400/50",
      iconBg: "from-purple-500/20 to-pink-500/20",
      accentColor: "bg-purple-400",
    },
    {
      gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/30",
      glowColor: "shadow-blue-500/50",
      borderGlow: "border-blue-400/50",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      accentColor: "bg-blue-400",
    },
    {
      gradient: "from-pink-500/30 via-rose-500/20 to-orange-500/30",
      glowColor: "shadow-pink-500/50",
      borderGlow: "border-pink-400/50",
      iconBg: "from-pink-500/20 to-rose-500/20",
      accentColor: "bg-pink-400",
    },
    {
      gradient: "from-emerald-500/30 via-green-500/20 to-cyan-500/30",
      glowColor: "shadow-emerald-500/50",
      borderGlow: "border-emerald-400/50",
      iconBg: "from-emerald-500/20 to-green-500/20",
      accentColor: "bg-emerald-400",
    },
  ];

  const variant = cardVariants[index % 4];

  const getIcon = () => {
    if (title.includes("Website") || title.includes("Modern")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    } else if (title.includes("UI/UX") || title.includes("Clean")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      );
    } else if (title.includes("SEO")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    } else if (title.includes("Dashboard") || title.includes("Admin")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    } else if (title.includes("Analysis") || title.includes("Market")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    } else if (title.includes("Forecasting") || title.includes("Demand")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    } else if (title.includes("AI") || title.includes("Voice")) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -20,
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      {/* Main Card */}
      <div className={`relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br ${variant.gradient} border border-white/20 ${variant.borderGlow} hover:border-white/40 transition-all duration-500 hover:${variant.glowColor} shadow-2xl`}>

        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
        </div>

        {/* Content Container */}
        <div className="relative p-8 h-full flex flex-col">

          {/* Floating Icon */}
          <motion.div
            className={`relative w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${variant.iconBg} backdrop-blur-sm border border-white/30 text-white`}
            whileHover={{
              rotate: 10,
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              {getIcon()}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-white transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-200 group-hover:text-white leading-relaxed transition-colors duration-300 text-center flex-1 text-sm lg:text-base">
            {description}
          </p>

          {/* Bottom accent */}
          <div className="mt-6 flex justify-center">
            <motion.div
              className={`h-1 ${variant.accentColor} rounded-full transition-all duration-500 group-hover:h-1.5`}
              initial={{ width: "20%" }}
              whileInView={{ width: "60%" }}
              whileHover={{ width: "80%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/15 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </motion.div>
  );
};

/* ------------------- Enhanced Visuals ------------------- */
const Bubble = () => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 15 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <Image
      src="/data.webp"
      alt="3D bubble"
      width={400}
      height={400}
      className="drop-shadow-[0_25px_50px_rgba(139,92,246,0.4)] filter saturate-110"
    />
    {/* Floating particles around bubble */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, -20, 0],
          opacity: [0.6, 1, 0.4, 0.6]
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: `${30 + i * 20}%`,
          right: `${20 + i * 15}%`,
        }}
      />
    ))}
  </motion.div>
);

const Heart = () => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: -15 }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <Image
      src="/bulb.webp"
      alt="3D heart"
      width={400}
      height={400}
      className="drop-shadow-[0_25px_50px_rgba(236,72,153,0.4)] filter saturate-110"
    />
    {/* Floating hearts */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-400/60 text-lg"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: `${40 + i * 10}%`,
          left: `${25 + i * 20}%`,
        }}
      >
        .
      </motion.div>
    ))}
  </motion.div>
);

/* ------------------- Enhanced Service Section ------------------- */
interface ServiceSectionProps {
  title: string;
  services: { title: string; description: string }[];
  visual: "bubble" | "heart";
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  services,
  visual,
  reverse,
}) => {
  return (
    <section className={`relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 xl:px-20 py-20 gap-16 ${reverse ? "lg:flex-row-reverse" : ""}`}>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute ${reverse ? 'top-1/4 right-1/4' : 'top-1/3 left-1/4'} w-72 h-72 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl`}></div>
        <div className={`absolute ${reverse ? 'bottom-1/3 left-1/3' : 'bottom-1/4 right-1/3'} w-64 h-64 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-2xl`}></div>
      </div>

      {/* Content Side */}
      <motion.div
        className="relative z-10 lg:w-1/2 text-white space-y-12"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <CreativeCard
              key={i}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </motion.div>

      {/* Visual Side */}
      <motion.div
        className="relative z-10 lg:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {visual === "bubble" ? <Bubble /> : <Heart />}
      </motion.div>
    </section>
  );
};

/* ------------------- Main Page ------------------- */
export default function Service() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/80 to-black relative overflow-hidden">
        <Navbar />

        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/3 to-purple-600/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center relative">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10"
            >
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-light text-white leading-tight">
                Smart Digital{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  Services
                </span>
              </h1>

              <motion.p
                className="mt-8 text-xl md:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Websites, Data Analytics & AI Solutions — built for performance and scale.
              </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </motion.div>
          </section>

          {/* Service Sections */}
          <ServiceSection
            title="Web Solutions"
            services={[
              {
                title: "Modern Websites",
                description: "Responsive, SEO-friendly, and designed for speed with cutting-edge technologies and frameworks.",
              },
              {
                title: "Clean UI/UX",
                description: "Minimal, intuitive interfaces that engage users and drive conversions with modern design principles.",
              },
              {
                title: "SEO Optimization",
                description: "Boost visibility and drive organic traffic with proven optimization strategies and best practices.",
              },
              {
                title: "Admin Dashboards",
                description: "Custom dashboards for businesses with real-time analytics, data visualization, and management tools.",
              },
            ]}
            visual="heart"
          />

          <ServiceSection
            title="Data & Insights"
            services={[
              {
                title: "Market Analysis",
                description: "Identify trends and opportunities with advanced data science techniques and market intelligence.",
              },
              {
                title: "Demand Forecasting",
                description: "Predict sales patterns using sophisticated machine learning algorithms and predictive modeling.",
              },
              {
                title: "Business Analytics",
                description: "Transform raw data into actionable insights for strategic decision-making and growth optimization.",
              },
            ]}
            visual="bubble"
            reverse
          />

          <ServiceSection
            title="AI-Powered Services"
            services={[
              {
                title: "AI Agents",
                description: "Intelligent automation systems that streamline workflows and enhance operational efficiency.",
              },
              {
                title: "AI-first Advertising",
                description: "Data-driven ad campaigns optimized with machine learning for maximum ROI and audience engagement.",
              },
              {
                title: "Voice Support",
                description: "Natural language processing systems for 24/7 customer support and interactive voice assistance.",
              },
              {
                title: "Custom AI Features",
                description: "Bespoke artificial intelligence solutions tailored to your specific business requirements and goals.",
              },
            ]}
            visual="heart"
          />
        </main>
      </div>
      <Footer />
    </>
  );
}