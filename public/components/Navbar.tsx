"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/clients" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide text-white font-['Montserrat']">
        Scraper
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-white font-bold font-['Montserrat'] transition-all duration-200 
              ${pathname === item.href ? "after:w-full" : "after:w-0"}
              after:block after:h-[2px] after:bg-white after:transition-all after:duration-300 after:mt-1 after:rounded
              hover:after:w-full`}
          >
            {item.name}
          </Link>
        ))}
      </div>
                <button
            className="relative text-white font-bold font-montserrat transition-all duration-200
                after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:mt-1 after:rounded
                hover:after:w-full"
            >
            Book Now !
            </button>

      {/* Mobile Menu Button */} 
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`relative text-white font-bold font-['Montserrat'] text-lg transition-all duration-200 
                ${pathname === item.href ? "after:w-full" : "after:w-0"}
                after:block after:h-[2px] after:bg-white after:transition-all after:duration-300 after:mt-1 after:rounded
                hover:after:w-full`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
