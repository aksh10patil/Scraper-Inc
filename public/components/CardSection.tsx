"use client";

import Link from "next/link";

const cards = [
  {
    id: "id-1",
    category: "Brand Evolution",
    title: "Brands don't evolve on autopilot: the Art of managing the inevitable",
    bg: "bg-gradient-to-br from-cyan-500/60 via-blue-900/70 to-purple-900/70",
  },
  {
    id: "id-2",
    category: "Brand Evolution",
    title: "What does Gen Z really believe when they follow a brand?",
    bg: "bg-gradient-to-br from-purple-600/70 via-pink-600/70 to-teal-600/70",
  },
  {
    id: "id-3",
    category: "Purpose • Strategy",
    title: "Brands with soul but no direction are destined to drift",
    bg: "bg-gradient-to-br from-indigo-900/70 via-purple-900/70 to-blue-900/70",
  },
];

export default function CardsSection() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={`/insights/${card.id}`} // dynamic page
            className="group relative rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500"
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 ${card.bg} blur-xl opacity-80`}
            ></div>

            {/* Glass Overlay */}
            <div className="relative z-10 h-[400px] flex flex-col justify-end p-6 rounded-3xl bg-black/40 backdrop-blur-lg">
              <span className="inline-block text-sm text-white/90 border border-white/40 px-3 py-1 rounded-full mb-4">
                {card.category}
              </span>

              <h3 className="text-white text-2xl font-semibold leading-snug">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
