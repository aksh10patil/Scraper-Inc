"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";
import CardsSection from "../../../public/components/CardSection";
import { LampDemo } from "../../../public/components/LampLight";


export default function Insights() {
  return (
    <>
    <Navbar />
    <div className="gradient-background">
      <LampDemo />

   
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Scraperr: Scraping the Web,  <br />
            <span className="text-blue-300">Building the Future</span>
          </h1>

                <p className="text-gray-200 text-lg leading-relaxed">
        Scraperr was built on a simple idea: brands shouldn’t just exist — they should 
        spark energy, inspire action, and feel alive.
      </p>

        </div>

        {/* Right Graphic Section */}
        <div className="relative">
          {/* Animated glowing nodes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/3 left-1/3 text-orange-400"
          >
            <Star className="w-10 h-10" />
          </motion.div>

          {/* Placeholder for network background */}
          <div className="w-full h-[400px] rounded-xl backdrop-blur-md flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }} // optional hover effect
        className="w-full h-full"
      >
        <Image
          src="/hands_touch.webp"
          alt="Preview"
          width={400}
          height={400}
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>
    </div>
        </div>
      </div>
    </section>
    
    <CardsSection />
    </div>
    
    <Footer />
    </>
  );
}
