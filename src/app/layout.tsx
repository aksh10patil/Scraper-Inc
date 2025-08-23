// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Cursor from "../../public/components/Cursor"; 

// Fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (server-side only)
export const metadata: Metadata = {
  title: "Scraper Inc",
  description: "Developing Scalable Solutions Globally",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased 
          min-h-screen 
          bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
          from-purple-700 via-purple-900 to-black`}
      >
        {children}
        <Cursor /> {/* 👈 Glowing cursor injected here */}
      </body>
    </html>
  );
}
