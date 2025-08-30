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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        alert(data.error || "Something went wrong.");
        return;
      }
  
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        acceptData: false,
      });
    } catch (err) {
      console.error("Submit error:", err);
      alert("❌ Failed to send message.");
    }
  };
  

  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-16 flex items-center justify-center p-4 gradient-background">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We&apos;re ready to <br />
            hear from <span className="text-pink-300">you!</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          We’ve embraced being a hybrid-first company from the start. By saving on traditional office overhead, we invest more into building solutions that matter and delivering them efficiently. 
          Wherever you are, our team is ready to 
          collaborate seamlessly and create impact together.
          </p>
        </div>

        {/* Right side - Form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">
            <span>get in touch with</span>
          </div>
          <div className="title-2">
            <span>Scraperr</span>
          </div>
          
          <section className="bg-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>

          <div className="input-container">
            <input
              placeholder="Name" 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="placeholder-black"
            />
          </div>

          <div className="input-container">
            <input 
              placeholder="Email" 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="placeholder-black"
            />
          </div>

          <div className="input-container">
            <input 
              placeholder="Phone" 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="placeholder-black"
            />
          </div>

          <div className="input-container">
            <textarea 
              placeholder="Message" 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
                className="placeholder-black"
            ></textarea>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="acceptData"
              checked={formData.acceptData}
              onChange={handleInputChange}
              id="acceptData"
              className="placeholder-black"
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
