'use client'

import React from 'react'
import Navbar from '../../../public/components/Navbar'
import Footer from '../../../public/components/Footer'
import ProjectCardClients from '../../../public/components/ProjectCardClients'

const clients = () => {


  return (
    <>
      <Navbar />
      <div className='gradient-background'>

              <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 text-white">
              {/* Top label */}
              <p className="text-sm md:text-base font-medium mb-4">Success stories</p>

              {/* Main heading */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl">
                Next-generation brands
              </h2>

              {/* Bold subheading */}
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 leading-tight max-w-4xl">
                Authentic, visionary <br className="hidden md:block"/> 
                and transformational
              </h3>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
                Every brand faces a turning point, a moment of choice between remaining or evolving. 
                We are sharing a few stories we&apos;ve had the privilege to be a part of.
              </p>

              {/* Link */}
              <a
                href="#"
                className="text-xl md:text-2xl font-medium underline underline-offset-4 hover:text-purple-300 transition"
              >
                All success stories
              </a>
            </section>

            <ProjectCardClients />
      <Footer />

      </div>
    
    </>


    
  
  )
}

export default clients