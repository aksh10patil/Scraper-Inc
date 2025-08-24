'use client';

import React, { useState } from 'react';

const PearlButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    '--white': '#ffe7ff',
    '--bg': '#080808',
    '--radius': '100px',
    borderRadius: '100px',
    backgroundColor: '#080808',
    boxShadow: isActive
      ? 'inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5), inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8), inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.4), 0 3rem 3rem rgba(0, 0, 0, 0.3), 0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8)'
      : isHovered
      ? 'inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.4), inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7), inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.7), 0 3rem 3rem rgba(0, 0, 0, 0.3), 0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8)'
      : 'inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.3), inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7), inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.5), 0 3rem 3rem rgba(0, 0, 0, 0.3), 0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8)',
    transform: isActive ? 'translateY(4px)' : 'none',
  } as React.CSSProperties;

  const wrapStyle = {
    borderRadius: 'inherit',
    overflow: 'hidden',
  } as React.CSSProperties;

  const beforeStyle = {
    content: '""',
    position: 'absolute',
    left: '-15%',
    right: '-15%',
    bottom: '25%',
    top: '-100%',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    transform: isHovered ? 'translateY(-5%)' : 'none',
    transition: 'all 0.3s ease',
  } as React.CSSProperties;

  const afterStyle = {
    content: '""',
    position: 'absolute',
    left: '6%',
    right: '6%',
    top: '12%',
    bottom: '40%',
    borderRadius: '22px 22px 0 0',
    boxShadow: 'inset 0 10px 8px -10px rgba(255, 255, 255, 0.8)',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)',
    opacity: isHovered ? 0.4 : 1,
    transform: isHovered ? 'translateY(5%)' : 'none',
    transition: 'all 0.3s ease',
  } as React.CSSProperties;

  const textStyle = {
    transform: isHovered ? 'translateY(-4%)' : 'translateY(2%)',
    maskImage: 'linear-gradient(to bottom, white 40%, transparent)',
    WebkitMaskImage: 'linear-gradient(to bottom, white 40%, transparent)',
  } as React.CSSProperties;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        className="relative outline-none cursor-pointer border-0 transition-all duration-200 ease-in-out"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsActive(false);
        }}
      >
        <div
          className="relative px-11 py-8 text-2xl font-medium text-white text-opacity-70"
          style={wrapStyle}
        >
          {/* Before pseudo-element */}
          <div
            className="absolute pointer-events-none"
            style={beforeStyle}
          />
          
          {/* After pseudo-element */}
          <div
            className="absolute pointer-events-none"
            style={afterStyle}
          />
          
          <p
            className="flex items-center gap-3 m-0 transition-all duration-200 ease-in-out"
            style={textStyle}
          >
            <span className={isHovered ? 'hidden' : 'inline-block'}>✧</span>
            <span className={isHovered ? 'inline-block' : 'hidden'}>✦</span>
            Book Now !
          </p>
        </div>
      </button>
    </div>
  );
};

export default PearlButton;