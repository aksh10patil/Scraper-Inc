"use client";

import React from "react";
import Navbar from "../../../../public/components/Navbar";
import Footer from "../../../../public/components/Footer";

export default function ArticleSection() {
  return (

    <>
    <Navbar />
    <div className="gradient-background">

    
    
   
    <section className="relative text-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
          What does{" "}
          <span className="text-purple-300">Gen Z really believe</span> when
          they follow a brand?
        </h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6 text-lg text-gray-200 leading-relaxed">
            <p>
              For Gen Z, brands are more than products—they are reflections of
              identity, culture, and values. This generation looks for meaning
              in the brands they follow, demanding transparency, authenticity,
              and impact beyond the transaction.
            </p>

            <p>
              It’s not enough for a brand to have a cool design or clever
              campaign. Gen Z wants to see how a brand behaves: how it reacts to
              cultural moments, how it treats its employees, and how it responds
              to global issues. Silence, indifference, or inconsistency erodes
              trust instantly.
            </p>

            <p>
              The brands that resonate most are those that embody community and
              participation. For Gen Z, being part of a brand is like joining a
              movement—they expect dialogue, co-creation, and transparency at
              every step.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Authenticity is the real currency
            </h2>
            <p>
              To Gen Z, branding isn’t about polish—it’s about honesty. They see
              through overproduced campaigns and look for the human moments that
              reveal genuine character. They value brands that admit mistakes,
              share progress, and show the people behind the work.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Values over visuals
            </h2>
            <p>
              While design matters, it’s secondary to alignment with values.
              Issues like sustainability, inclusivity, and mental health shape
              Gen Z’s loyalty more than logos or color palettes ever could. A
              brand that ignores these priorities risks irrelevance.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Belonging, not just buying
            </h2>
            <p>
              Gen Z doesn’t just want to purchase a product—they want to feel
              part of something larger. Whether through online communities,
              shared causes, or cultural narratives, they follow brands that
              create belonging and amplify voices like theirs.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              The cost of inauthenticity
            </h2>
            <p>
              Performative actions and hollow statements are quickly called out.
              Gen Z has grown up in a world of misinformation and marketing
              overload, so their skepticism is high. Brands that betray trust
              may not get a second chance.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              To sum up: brands are belief systems
            </h2>
            <p>
              For Gen Z, following a brand is an act of belief. It signals
              alignment with values, trust in transparency, and connection to a
              wider community. To win their loyalty, brands must treat belief as
              a responsibility—not just a marketing strategy.
            </p>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <aside className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
            <ul className="space-y-4 text-gray-300">
              <li>→ The search for meaning in brands</li>
              <li>→ Authenticity is the real currency</li>
              <li>→ Values over visuals</li>
              <li>→ Belonging, not just buying</li>
              <li>→ The cost of inauthenticity</li>
              <li>→ To sum up: brands are belief systems</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    </div>

    <Footer />

    </>
  );
}
