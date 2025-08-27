"use client";

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
      {/* If you use SVG/PNG */}
      <img src={currentImage} alt="Project" />
    </StyledCard>
  );
};

const PosterCard = () => {
  const [current, setCurrent] = useState(0);

  // Auto-change project every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projectImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  flex">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-start pl-16">
        <div className="text-white space-y-8 max-w-lg">
          <h3 className="text-lg font-light tracking-wide opacity-80">
           Our Projects
          </h3>
          <h1 className="text-5xl lg:text-6xl font-light leading-tight">
            Translating instinctive character into global projection
          </h1>
          <button className="flex items-center space-x-2 border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 mt-12">
            <span className="font-light">See project</span>
          </button>
        </div>
      </div>

      {/* Right Project Card */}
      <div className="flex-1 flex items-center justify-end pr-0">
        <Card currentImage={projectImages[current]} />
      </div>
    </div>
  );
};

export default PosterCard;

// ✅ Styled Components
const StyledCard = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  background: white;
  cursor: pointer;
  width: 90%;   /* Bigger */
  height: 500px; /* Taller */

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
`;
