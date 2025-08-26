"use client";

import Image from "next/image";
import Navbar from "../../../public/components/Navbar";
import Footer from "../../../public/components/Footer";
import { motion } from "framer-motion";

interface ServiceSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  reverse,
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 py-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className="md:w-1/2 text-white space-y-6"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          {title}{" "}
          {subtitle && <span className="font-light italic text-purple-400">{subtitle}</span>}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed opacity-90">{description}</p>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="drop-shadow-2xl rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
};

export default function OurServicesPage() {
  return (
    <>
      <Navbar />
      <div className="gradient-background bg-gradient-to-b from-black via-purple-950 to-black">
        <main className="overflow-x-hidden">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-10 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold max-w-4xl text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              We help brands become{" "}
              <span className="text-purple-400">agents of change</span>, turning purpose into{" "}
              <span className="text-purple-400">experiences</span>.
            </motion.h1>
          </section>

          {/* Service Sections */}
          <ServiceSection
            title="The brand as"
            subtitle="an experience"
            description="A strong brand excites, leaves an impression and stays relevant in every interaction. That's why we work from its essence and at every touch point to generate real connections."
            image="/heart.webp"
          />

          <ServiceSection
            title="We think"
            subtitle="strategically"
            description="We work on the essence of the brand to find its place in the world. We delve into who it is, who it speaks to, how, when and where. We define the right strategies for the brand to mobilize the business."
            image="/bubble.webp"
            reverse
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
