'use client';

import React, { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils"; // Assuming you have a cn utility for classnames

// --- Improved Type Definition ---
// Renamed to avoid conflict with the component name and for clarity.
type CardData = {
  title: string;
  src: string;
};


// --- The Card Item Component (Memoized for performance) ---
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardData; // Using the specific type instead of 'any'
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl ml-10 relative bg-transparent dark:bg-transparent overflow-hidden flex-shrink-0 ease-out",
        // --- More Performant Transitions ---
        // We specify only the properties that are actually changing.
        "transition-[transform,filter] duration-300",
        hovered !== null && hovered !== index && "blur-sm scale-[0.97]",
        "shadow-lg"
      )}
      style={{
        height: "40vh",    // Tall phone mockup height
        width: "auto",      // Let width be determined by height to maintain aspect ratio
        minWidth: "200px",  // Ensure it doesn't get too small
      }}
    >
      {/* The mockup image */}
      <img
        src={card.src}
        alt={card.title}
        className="object-contain w-full h-full absolute inset-0"
        loading="lazy" // Added lazy loading for better performance with many images
      />
      
      {/* The overlay shown on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity duration-300",
          hovered === index ? "opacity-0" : "opacity-0"
        )}
      >
        <h3 
          className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
          // --- Enhanced Readability ---
          // Added a subtle text shadow to make text pop against any mockup background
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {card.title}
        </h3>
      </div>
    </div>
  )
);

Card.displayName = "Card";

// --- The Main FocusCards Container Component ---
export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0); // To store the latest scroll position

  useEffect(() => {
    // --- Optimized Scroll Handler ---
    // This function will be called by requestAnimationFrame
    const updateScroll = () => {
      if (containerRef.current) {
        // We only write to the DOM here, which is much more efficient.
        containerRef.current.scrollLeft = scrollPosition.current / 2;
      }
    };
    
    // This function only captures the scroll position and requests an animation frame.
    // It doesn't directly manipulate the DOM.
    const handleScroll = () => {
      scrollPosition.current = window.scrollY;
      requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // You might need to wrap this in a container with a set height (e.g., 300vh) 
    // to give it space to scroll.
    <div className="relative w-full py-10">
      <div
        ref={containerRef}
        className={cn(
            "flex gap-6 overflow-x-auto sticky top-20",
            // --- Hiding the scrollbar for a cleaner look ---
            // This works across modern browsers while keeping scroll functionality.
            "scrollbar-hide"
        )}
        style={{ height: "70vh" }} // Matches card height
      >
        {cards.map((card, index) => (
          <Card
            key={card.title + index} // A more robust key
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}


