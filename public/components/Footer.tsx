// src/components/Footer.tsx

"use client";

export default function Footer() {
  return (
    <footer className="text-white px-6 md:px-16 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Helping brands
          </h2>
          <p className="text-xl md:text-3xl text-gray-300 font-light mt-2">
            Define their future, and that <br className="hidden sm:block" /> of
            the world around them.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-sm">
          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-medium">Raipur</p>
               
                <p>T. +91 7225010093</p>
              </div>
              <div>
                <p>
                  Chattisgarh, <br />
                  22 28012 India
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white">About us</a></li>
              <li><a href="/services" className="hover:text-white">What we do</a></li>
              <li><a href="/work" className="hover:text-white">Projects</a></li>
              <li><a href="/insights" className="hover:text-white">Insights</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social & Subsidies */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
