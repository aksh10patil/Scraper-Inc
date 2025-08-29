"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-bold font-['Montserrat'] transition-all duration-200 ${className}
        ${active ? "after:w-full" : "after:w-0"}
        after:block after:h-[2px] after:bg-white after:transition-all after:duration-300 after:mt-1 after:rounded
        hover:after:w-full`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black z-50">
    {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
        <img 
          src="/Scraper-hq2.webp"   // replace with your logo path
          alt="Scraper Logo" 
          className="h-10 w-auto"
        />
        <span className="text-2xl font-extrabold tracking-wide text-white font-['Montserrat']">
          Scraperr
        </span>
      </a>

  

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.name}
            active={pathname === item.href}
            className="text-white"
          />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.name}
              active={pathname === item.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg"
            />
          ))}
        </div>
      )}
    </nav>
  );
}
