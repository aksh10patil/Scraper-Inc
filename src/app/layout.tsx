import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["700"], // You can add more weights if needed
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
  title: "Scraper Inc",
  description: "Developing Scalable Solutions Globally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased 
          min-h-screen 
          bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
          from-purple-700 via-purple-900 to-black`}
      >
        {children}
      </body>
    </html>
  );
}

