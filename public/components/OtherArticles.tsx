"use client";

import React from "react";

const articles = [
  {
    id: 1,
    category: ["Brand Evolution"],
    title: "What does Gen Z really believe when they follow a brand?",
    gradient: "from-pink-400 via-purple-600 to-cyan-500",
  },
  {
    id: 2,
    category: ["Purpose", "Strategy"],
    title: "Brands with soul but no narrative",
    gradient: "from-cyan-400 via-blue-600 to-purple-700",
  },
  {
    id: 3,
    category: ["Brand Experience"],
    title: "From storytelling to storyproving",
    gradient: "from-purple-400 via-pink-600 to-cyan-500",
  },
  {
    id: 4,
    category: ["Brand Experience"],
    title: "Branding isn’t visual design. It’s business.",
    gradient: "from-pink-500 via-purple-700 to-indigo-900",
  },
];

export default function OtherArticles() {
  return (
    <section className="text-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Other articles
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br ${article.gradient} h-64`}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.category.map((cat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border border-white/40 rounded-full bg-white/10 backdrop-blur-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-medium leading-snug">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
