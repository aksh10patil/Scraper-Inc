"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";
import CardsSection from "../../../public/components/CardSection";
import { TextHoverEffect } from "../../../public/components/TextHoverEffect";

export default function Insights() {
  return (
    <>
    <Navbar />
    <div className="gradient-background">

   
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6">
          <p className="text-white/80 text-lg font-medium">Scraperr Insights*</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Scraperr: thinking big, <br />
            <span className="text-blue-300">starting Scraperr</span>
          </h1>

                <p className="text-gray-200 text-lg leading-relaxed">
        Scraperr was built on a simple idea: brands shouldn’t just exist — they should 
        spark energy, inspire action, and feel alive.
      </p>


          <button className="px-6 py-3 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition">
            Continue reading
          </button>
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
          <div className="w-full h-[400px] rounded-xl bg-gradient-to-tr from-indigo-800/40 to-purple-800/20 border border-white/10 backdrop-blur-md flex items-center justify-center">
            <p className="text-gray-400">[Network graphic placeholder]</p>
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
