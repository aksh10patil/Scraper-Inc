"use client";

import FeatureCard from "../../public/components/FeatureCard";
import Footer from "../../public/components/Footer";
import Hero from "../../public/components/Hero";
import Navbar from "../../public/components/Navbar";



export default function Home() {
  return (
    <>
    <div className="gradient-background">


    
      <Navbar />
      <Hero />
      <FeatureCard />
      <Footer />

      </div>

    </>
  );
}
