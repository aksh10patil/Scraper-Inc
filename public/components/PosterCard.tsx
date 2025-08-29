"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const projectImages = [
  "/alpixn-mockup.webp",
  "/beauty-mockup.webp",
  "/crowhub-mockup.webp",
  "/vv-mockup.webp",
  "/cab-mockup.webp",
];

const Card = ({ currentImage }: { currentImage: string }) => {
  return (
    <StyledCard>
      <img src={currentImage} alt="Project" />
    </StyledCard>
  );
};

const PosterCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center md:justify-start px-6 md:pl-16 py-12 md:py-0 text-center md:text-left">
        <div className="text-white space-y-6 max-w-lg">
          <h3 className="text-sm md:text-lg font-light tracking-wide opacity-80">
            Our Projects
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Translating instinctive character into global projection
          </h1>
          <Link href="/work">
          <button className="flex items-center justify-center mx-auto md:mx-0 space-x-2 border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 mt-8 md:mt-12">
        <span className="font-light">See project</span>
      </button></Link>
                

        </div>
      </div>

      {/* Right Project Card */}
      <div className="flex-1 flex items-center justify-center md:justify-end px-6 md:pr-0 mt-8 md:mt-0">
        <Card currentImage={projectImages[current]} />
      </div>
    </div>
  );
};

export default PosterCard;

const StyledCard = styled.div`
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  background: white;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  height: 400px;

  transition: transform 0.6s ease, box-shadow 0.6s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Larger height on bigger screens */
  @media (min-width: 768px) {
    height: 400px;
    max-width: 90%;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }
`;
