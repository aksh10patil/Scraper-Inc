'use client';

import React, { useState } from 'react';
import Navbar from '../../../public/components/Navbar';
import Footer from '../../../public/components/Footer';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptData: false
  });

  // ✅ Strongly type the input change event
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked; // only applies if checkbox

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // ✅ Strongly type the form submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center p-4 gradient-background">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We&apos;re ready to <br />
            hear from <span className="text-pink-300">you!</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            We love what we do, and even more to do it from Alicante. 
            Although we work in a hybrid way, our offices in Alicante and 
            Madrid are open to you. Use us as an excuse to visit and discover 
            why the iconic is created here, surrounded by the Mediterranean.
          </p>
        </div>

        {/* Right side - Form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <span>get in touch with</span>
          </div>
          <div className="title-2">
            <span>SCRAPER</span>
          </div>
          
          <section className="bg-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>

          <div className="input-container">
            <input 
              placeholder="Name*" 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <input 
              placeholder="Email*" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-container">
            <input 
              placeholder="Phone" 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-container">
            <textarea 
              placeholder="Message*" 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
            ></textarea>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="acceptData"
              checked={formData.acceptData}
              onChange={handleInputChange}
              id="acceptData"
            />
            <label htmlFor="acceptData">
              I have read and accept the <a href="#" className="data-link">data protection law</a>
            </label>
          </div>

        

          <button className="submit" type="submit">
            <span className="sign-text">Submit</span>
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Page;
