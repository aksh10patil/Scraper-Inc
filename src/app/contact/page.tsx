'use client';

import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptData: false
  });

  const handleInputChange = (e : any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{background: 'linear-gradient(135deg, #6B46C1 0%, #7C3AED 25%, #8B5CF6 50%, #9333EA 75%, #A855F7 100%)'}}>
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We're ready to <br />
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
        <div className="form">
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

          <div className="attach-files">
            <svg className="attach-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Attach files
          </div>

          <button className="submit" type="button" onClick={handleSubmit}>
            <span className="sign-text">Submit</span>
          </button>
        </div>
      </div>

      <style>{`
        .form {
          position: relative;
          display: block;
          padding: 2.2rem;
          max-width: 450px;
          width: 100%;
          background: linear-gradient(
              14deg,
              rgba(75, 0, 130, 0.9) 0%,
              rgba(106, 90, 205, 0.8) 66%,
              rgba(138, 43, 226, 0.9) 100%
            ),
            radial-gradient(
              circle,
              rgba(75, 0, 130, 0.6) 0%,
              rgba(106, 90, 205, 0.3) 65%,
              rgba(138, 43, 226, 0.9) 100%
            );
          border: 2px solid #E879F9;
          box-shadow: rgba(168, 85, 247, 0.4) 0px 0px 50px -15px;
          overflow: hidden;
          z-index: 1;
          border-radius: 8px;
        }

        .input-container {
          position: relative;
          margin: 16px 0;
        }

        .input-container input,
        .input-container textarea,
        .form button {
          outline: none;
          border: 2px solid #E879F9;
          margin: 8px 0;
          font-family: monospace;
          border-radius: 4px;
        }

        .input-container input,
        .input-container textarea {
          background-color: #fff;
          padding: 10px;
          font-size: 0.875rem;
          line-height: 1.25rem;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .input-container textarea {
          resize: vertical;
          min-height: 80px;
        }

        .input-container input:focus::placeholder,
        .input-container textarea:focus::placeholder {
          opacity: 0;
          transition: opacity 0.9s;
        }

        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin: 16px 0;
          color: #C4B5FD;
          font-size: 0.875rem;
          font-family: monospace;
        }

        .checkbox-container input[type="checkbox"] {
          width: 16px;
          height: 16px;
          margin: 0;
          accent-color: #A855F7;
        }

        .checkbox-container label {
          line-height: 1.4;
          cursor: pointer;
        }

        .data-link {
          color: #E879F9;
          text-decoration: underline;
        }

        .data-link:hover {
          color: #F3E8FF;
        }

        .attach-files {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #C4B5FD;
          font-size: 0.875rem;
          font-family: monospace;
          cursor: pointer;
          padding: 8px 0;
          margin: 16px 0;
        }

        .attach-files:hover {
          color: #E879F9;
        }

        .attach-icon {
          width: 16px;
          height: 16px;
        }

        .submit {
          position: relative;
          display: block;
          padding: 12px;
          background: linear-gradient(90deg, #7C3AED 0%, #A855F7 100%);
          color: #ffffff;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 500;
          width: 100%;
          text-transform: uppercase;
          overflow: hidden;
          cursor: pointer;
        }

        .submit:hover {
          transition: all 0.2s ease-out;
          box-shadow: 4px 5px 17px -4px #E879F9;
        }

        .submit:hover::before {
          animation: sh02 0.5s 0s linear;
        }

        .submit::before {
          content: "";
          display: block;
          width: 0px;
          height: 85%;
          position: absolute;
          top: 50%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          transform: skewX(-20deg);
        }

        @keyframes sh02 {
          from {
            opacity: 0;
            left: 0%;
          }
          50% {
            opacity: 1;
          }
          to {
            opacity: 0;
            left: 100%;
          }
        }

        .form-title {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-family: monospace;
          font-weight: 600;
          text-align: center;
          color: #fff;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
          animation-duration: 1.5s;
          overflow: hidden;
          transition: 0.12s;
          margin-bottom: -0.5rem;
        }

        .form-title span {
          animation: flickering 2s linear infinite both;
        }

        .title-2 {
          display: block;
          margin-top: -0.5rem;
          margin-bottom: 1rem;
          font-size: 2.1rem;
          font-weight: 800;
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          -webkit-text-stroke: #E879F9 0.1rem;
          letter-spacing: 0.2rem;
          color: transparent;
          position: relative;
          text-shadow: 0px 0px 16px #E879F9;
        }

        .title-2 span::before,
        .title-2 span::after {
          content: "—";
        }

        @keyframes flickering {
          0%, 100% {
            opacity: 1;
          }
          41.99% {
            opacity: 1;
          }
          42% {
            opacity: 0;
          }
          43% {
            opacity: 0;
          }
          43.01% {
            opacity: 1;
          }
          47.99% {
            opacity: 1;
          }
          48% {
            opacity: 0;
          }
          49% {
            opacity: 0;
          }
          49.01% {
            opacity: 1;
          }
        }

        .bg-stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          background-size: cover;
          animation: animateBg 50s linear infinite;
        }

        @keyframes animateBg {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .star {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
            0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
          animation: animate 3s linear infinite;
        }

        .star::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg, #fff, transparent);
        }

        @keyframes animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(315deg) translateX(-1000px);
            opacity: 0;
          }
        }

        .star:nth-child(1) {
          top: 0;
          right: 0;
          left: initial;
          animation-delay: 0s;
          animation-duration: 1s;
        }

        .star:nth-child(2) {
          top: 0;
          right: 100px;
          left: initial;
          animation-delay: 0.2s;
          animation-duration: 3s;
        }

        .star:nth-child(3) {
          top: 0;
          right: 220px;
          left: initial;
          animation-delay: 2.75s;
          animation-duration: 2.75s;
        }

        .star:nth-child(4) {
          top: 0;
          right: -220px;
          left: initial;
          animation-delay: 1.6s;
          animation-duration: 1.6s;
        }

        @media (max-width: 768px) {
          .form {
            max-width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;