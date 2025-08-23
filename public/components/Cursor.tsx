// src/components/Cursor.tsx
"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement | null;
    if (!cursor) return;

    // Follow mouse
    const moveCursor = (e: MouseEvent) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";

      // Particle trail
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.top = e.clientY + "px";
      trail.style.left = e.clientX + "px";
      document.body.appendChild(trail);

      setTimeout(() => trail.remove(), 600);
    };

    // Click effect
    const clickCursor = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 400);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickCursor);
    };
  }, []);

  return <div className="custom-cursor" />;
}
