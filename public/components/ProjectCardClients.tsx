"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Beauty At Home",
    subtitle: "Beauty Saloon Services at your Doorstep",
    tags: [
      "Brand Strategy and activation",
      "Brand storytelling and Naming",
      "Visual Identity Design and Design Systems",
    ],
    img: "/beauty-mockup.webp", // replace with your image
    bg: "from-purple-900 to-indigo-900",
  },
  {
    title: "Alpixn",
    subtitle: "Innovating in Tech, Providing easier solutions",
    tags: [
      "Tech Strategy and activation",
      "Brand storytelling and Naming",
      "Visual Identity Design and Tech Systems",
      "Campaigns and content",
    ],
    img: "/alpixn-mockup.webp", // replace with your image
    bg: "from-purple-800 to-pink-700",
  },


  {
    title: "CabGurugram",
    subtitle: "Serving Cabs since 2003, Gurugram and Beyond",
    tags: [
      "Brand Strategy and activation",
      "Classic Business",
      "Campaigns and content",
    ],
    img: "/cab-mockup.webp", // replace with your image
    bg: "from-purple-800 to-pink-700",
  },


  {
    title: "CrowhHub",
    subtitle: "Helping you launch MVPs, Day and Night",
    tags: [
      "Fast Paced Business",
      "Classic Business",
      "Campaigns and content",
    ],
    img: "/crowhub-mockup.webp", // replace with your image
    bg: "from-purple-900 to-indigo-900",
  },


  {
    title: "Visual Values",
    subtitle: "Digital Visuals, Sharing traditional Knowledge in modern ways",
    tags: [
      "Personal Branding",
      "Modern Business",
      "Campaigns and content",
    ],
    img: "/vv-mockup.webp", // replace with your image
    bg: "from-purple-800 to-pink-700",
  },
];

export default function ProjectCardClients() {
  return (
    <section className="min-h-screen w-full px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`rounded-2xl p-6 bg-gradient-to-br ${project.bg} shadow-lg`}
          >
            {/* Image */}
            <motion.div
                className="rounded-xl overflow-hidden mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                // New floating animation
                animate={{ y: [0, -15, 0] }} // moves up 15px and back
                >
                <Image
                    src={project.img}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Text */}
            <h3 className="text-white font-semibold text-xl">
              {project.title}
            </h3>
            <p className="text-gray-300 text-lg mb-4">{project.subtitle}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
