"use client";

import React from "react";
import Navbar from "../../../../public/components/Navbar";
import Footer from "../../../../public/components/Footer";
import OtherArticles from "../../../../public/components/OtherArticles";

export default function ArticleSection() {
  return (
    <>
    <Navbar />
    <div className="gradient-background">
    
   
    <section className="relative  text-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
          <span className="bg-gradient-to-r from-[#2DD4BF] via-[#38BDF8] to-[#6366F1] bg-clip-text text-transparent">
            brands with soul but no direction
          </span>{" "}
          are destined to drift
        </h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6 text-lg text-gray-200 leading-relaxed">
            <p>
              A brand with soul can inspire admiration, but without direction,
              it risks losing momentum. Vision gives purpose to passion, and
              without it, even the most authentic brand eventually drifts into
              obscurity.
            </p>

            <p>
              Purpose without clarity is fragile. Consumers may connect with a
              brand’s energy at first, but when actions don’t align with a
              guiding strategy, the connection quickly fades. Soul needs a
              compass to transform emotion into impact.
            </p>

            <p>
              In a noisy market, direction is what separates brands that endure
              from those that vanish. Soul sparks interest, but strategy
              sustains trust and loyalty over time.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Why soul alone is not enough
            </h2>
            <p>
              Emotion and authenticity are powerful entry points, but they
              require consistency and vision. A soulful brand that lacks
              alignment between message, behavior, and decisions risks creating
              confusion for its audience.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Direction as a brand compass
            </h2>
            <p>
              Clear direction provides focus and coherence. It allows teams to
              prioritize actions, align messaging, and stay true to values while
              navigating change. It’s the compass that ensures a soulful brand
              doesn’t drift aimlessly.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              When soul and strategy work together
            </h2>
            <p>
              The most resilient brands combine soul with direction. They inspire
              emotionally while guiding rationally. This balance allows them to
              scale without losing authenticity and to evolve without losing
              trust.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              The risk of drifting
            </h2>
            <p>
              Without direction, brands may chase trends, dilute their message,
              or confuse their audience. Drifting doesn’t happen overnight—it’s
              a slow erosion of trust when actions no longer match identity.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              To sum up: direction transforms soul into legacy
            </h2>
            <p>
              Soul creates meaning, but direction ensures longevity. The brands
              that thrive are those that unite purpose and clarity, inspiring
              people while guiding them with confidence. Without direction, even
              the brightest soul risks fading away.
            </p>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <aside className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
            <ul className="space-y-4 text-gray-300">
              <li>→ Why soul alone is not enough</li>
              <li>→ Direction as a brand compass</li>
              <li>→ When soul and strategy work together</li>
              <li>→ The risk of drifting</li>
              <li>→ To sum up: direction transforms soul into legacy</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    <OtherArticles />
    </div>

    <Footer />
    </>
  );
}
