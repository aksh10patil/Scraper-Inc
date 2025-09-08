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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scraperr.cloud"),
  title: {
    default: "Scraperr",
    template: "%s | Scraperr",
  },
  description: "Providing Web and AI solutions",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.scraperr.cloud",
    languages: {
      en: "/en",
      hi: "/hi",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.scraperr.cloud",
    title: "Scraperr",
    description: "Tech Solutions.",
    siteName: "Scraperr",
    images: ["https://www.scraperr.cloud/scraperr-hq2.webp"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@scraperr_inc",
    creator: "@scraperr_inc",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
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
            {/* Foreground content */}
        <div className="relative z-10">
          {children}
          <Cursor /> 
        </div>
      </body>
    </html>
  );
}
