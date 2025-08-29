// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Cursor from "../../public/components/Cursor"; 
import { BackgroundGradientAnimation } from "../../public/components/GradientAnimation"; // 👈 import it

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
  title: "Scraperr Inc",
  description: "Developing Scalable Solutions Globally",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased min-h-screen`}
      >
        {/* Background stays fixed for all pages */}
      

        {/* Foreground content */}
        <div className="relative z-10">
          {children}
          <Cursor /> 
        </div>
      </body>
    </html>
  );
}
