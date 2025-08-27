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

  
    <section className="relative text-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
          Brands don&apos;t evolve on autopilot:{" "}
          <span className="text-purple-300">
            the Art of managing the intangible
          </span>
        </h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6 text-lg text-gray-200 leading-relaxed">
            <p>
              Behind every strategic milestone, every workshop or presentation,
              there are countless micro-decisions that ultimately shape how a
              brand shows up in the world. Small gestures, conversations, and
              reactions accumulate to form the larger narrative.
            </p>

            <p>
              How a given concern is received. How an objection is addressed.
              What is being asked when no one has time to listen. How a revision
              request is handled without blocking progress. When to insist, and
              when to step back and listen.
            </p>

            <p>
              These interactions belong to the realm of the intangible, yet they
              change everything. A brand is not just a logo or a color scheme,
              but a collection of decisions, behaviors, and values consistently
              lived out.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Overseeing isn&apos;t executing. It is being present.
            </h2>
            <p>
              Leadership in branding doesn&apos;t mean controlling every step. It
              means cultivating awareness, being present to the subtle shifts,
              and guiding without suffocating creativity. True presence is about
              creating space for alignment while respecting individuality.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              The project as a space for transformation
            </h2>
            <p>
              Every brand project is more than a deliverable—it&apos;s a space
              for transformation. Teams discover new strengths, challenges
              emerge, and clarity is forged. Transformation lies not in the
              design files, but in the shared journey.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              This is not about us. It&apos;s about how change is built
            </h2>
            <p>
              Agencies, consultants, and strategists often fall into the trap of
              making the work about themselves. But branding is not a trophy—it
              is a living system that must empower people, not glorify its
              makers. True success is measured in how a brand sustains itself
              long after the agency has left.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              What holds a brand together is also invisible
            </h2>
            <p>
              Trust, consistency, empathy—these cannot be photographed or
              reduced to a style guide. Yet they are the invisible glue that
              holds everything together. In the end, the strength of a brand is
              found not in its assets, but in the intangibles it protects and
              nurtures.
            </p>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <aside className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
            <ul className="space-y-4 text-gray-300">
              <li>→ The intangible that changes everything</li>
              <li>→ Overseeing isn&apos;t executing. It is being present</li>
              <li>→ The project as a space for transformation</li>
              <li>→ This is not about us. It&apos;s about how change is built</li>
              <li>→ To sum up: what holds a brand together is invisible</li>
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
