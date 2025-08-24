'use client';

import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  metric?: string;
  category: string;
}

interface DualDirectionSlidingFeaturesProps {
  topCards?: FeatureCard[];
  bottomCards?: FeatureCard[];
  className?: string;
  speed?: number;
}

const topRowCards: FeatureCard[] = [
  { 
    title: "Advanced AI Engine", 
    description: "Machine learning algorithms that adapt and optimize data extraction patterns in real-time.",
    metric: "99.7%",
    category: "Intelligence"
  },
  { 
    title: "Enterprise Security", 
    description: "Bank-grade encryption and compliance with SOC 2, GDPR, and enterprise security standards.",
    metric: "256-bit",
    category: "Security"
  },
  { 
    title: "Global Infrastructure", 
    description: "Distributed architecture across 15+ regions with sub-100ms response times worldwide.",
    metric: "<100ms",
    category: "Performance"
  },
  { 
    title: "Intelligent Scaling", 
    description: "Auto-scaling infrastructure handles millions of requests with zero configuration required.",
    metric: "∞ Scale",
    category: "Scalability"
  },
  { 
    title: "Real-time Analytics", 
    description: "Advanced monitoring and insights with predictive analytics and custom reporting.",
    metric: "24/7",
    category: "Analytics"
  },
];

const bottomRowCards: FeatureCard[] = [
  { 
    title: "API Integration", 
    description: "RESTful and GraphQL APIs with comprehensive documentation and seamless integrations.",
    metric: "REST/GraphQL",
    category: "Integration"
  },
  { 
    title: "Data Processing", 
    description: "High-performance data processing pipeline with support for all data formats.",
    metric: "10GB/s",
    category: "Processing"
  },
  { 
    title: "Cloud Native", 
    description: "Built for modern cloud environments with containerized architecture support.",
    metric: "K8s Ready",
    category: "Infrastructure"
  },
  { 
    title: "Machine Learning", 
    description: "Advanced ML models for intelligent data extraction and pattern recognition.",
    metric: "99.9%",
    category: "AI/ML"
  },
  { 
    title: "Enterprise Support", 
    description: "24/7 dedicated support with SLA guarantees and priority response times.",
    metric: "24/7",
    category: "Support"
  },
];

const DualDirectionSlidingFeatures: React.FC<DualDirectionSlidingFeaturesProps> = ({ 
  topCards = topRowCards,
  bottomCards = bottomRowCards,
  className = "",
  speed = 25
}) => {
  // Duplicate cards for seamless loops
  const extendedTopCards = [...topCards, ...topCards];
  const extendedBottomCards = [...bottomCards, ...bottomCards];

  return (
    <div className={`dual-slider ${className}`}>
      <div className="section-header">
        <div className="header-badge">Enterprise Solutions</div>
        <h1>Built for Scale, Security & Performance</h1>
        <p>Enterprise-grade data extraction platform trusted by Fortune 500 companies worldwide</p>
      </div>
      
      <div className="sliders-wrapper">
        {/* Top Row - Sliding Left */}
        <div className="slider-row">
          <div className="slider-track top-track">
            {extendedTopCards.map((card, index) => (
              <div key={`top-${index}`} className="feature-card top-card">
                <div className="card-header">
                  <div className="category-badge primary">{card.category}</div>
                  {card.metric && <div className="metric">{card.metric}</div>}
                </div>
                
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                
                <div className="card-accent primary-accent"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Row - Sliding Right */}
        <div className="slider-row">
          <div className="slider-track bottom-track">
            {extendedBottomCards.map((card, index) => (
              <div key={`bottom-${index}`} className="feature-card bottom-card">
                <div className="card-header">
                  <div className="category-badge secondary">{card.category}</div>
                  {card.metric && <div className="metric">{card.metric}</div>}
                </div>
                
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                
                <div className="card-accent secondary-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient fade overlays */}
      <div className="fade-overlay fade-left"></div>
      <div className="fade-overlay fade-right"></div>
      
      <style jsx>{`
        .dual-slider {
          min-height: 100vh;
          padding: 3rem 0;
          background: 
            linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%),
            radial-gradient(ellipse at top, rgba(147, 112, 219, 0.06), transparent 50%),
            radial-gradient(ellipse at bottom, rgba(75, 0, 130, 0.08), transparent 50%);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .dual-slider::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(147, 112, 219, 0.02) 100px,
              rgba(147, 112, 219, 0.02) 101px
            );
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 2rem;
          position: relative;
          z-index: 3;
        }
        
        .header-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, rgba(147, 112, 219, 0.1), rgba(75, 0, 130, 0.1));
          border: 1px solid rgba(147, 112, 219, 0.2);
          border-radius: 50px;
          color: #b19cd9;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }
        
        .section-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 1.5rem 0;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 50%, #b19cd9 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .section-header p {
          font-size: 1.25rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.6;
          font-weight: 400;
        }
        
        .sliders-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }
        
        .slider-row {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .slider-track {
          display: flex;
          gap: 2rem;
          will-change: transform;
          height: 100%;
          align-items: center;
          justify-content: flex-start;
        }
        
        .top-track {
          animation: slideLeftVisible ${speed}s linear infinite;
        }
        
        .bottom-track {
          animation: slideRightVisible ${speed}s linear infinite;
          animation-delay: 0s;
        }
        
        .feature-card {
          min-width: 380px;
          width: 380px;
          height: 280px;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.75rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(20px);
          overflow: hidden;
          flex-shrink: 0;
          cursor: pointer;
        }
        
        .top-card {
          border-top: 2px solid rgba(147, 112, 219, 0.3);
        }
        
        .bottom-card {
          border-bottom: 2px solid rgba(186, 85, 211, 0.3);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(147, 112, 219, 0.4), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 120px rgba(147, 112, 219, 0.2);
          z-index: 2;
        }
        
        .top-card:hover {
          border-color: rgba(147, 112, 219, 0.4);
          background: linear-gradient(135deg, 
            rgba(147, 112, 219, 0.05) 0%,
            rgba(255, 255, 255, 0.03) 100%
          );
        }
        
        .bottom-card:hover {
          border-color: rgba(186, 85, 211, 0.4);
          background: linear-gradient(135deg, 
            rgba(186, 85, 211, 0.05) 0%,
            rgba(255, 255, 255, 0.03) 100%
          );
        }
        
        .feature-card:hover::before {
          opacity: 1;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        
        .category-badge {
          padding: 0.375rem 0.875rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }
        
        .category-badge.primary {
          background: rgba(147, 112, 219, 0.12);
          border: 1px solid rgba(147, 112, 219, 0.25);
          color: #b19cd9;
        }
        
        .category-badge.secondary {
          background: rgba(186, 85, 211, 0.12);
          border: 1px solid rgba(186, 85, 211, 0.25);
          color: #dda0dd;
        }
        
        .feature-card:hover .category-badge.primary {
          background: rgba(147, 112, 219, 0.2);
          border-color: rgba(147, 112, 219, 0.4);
          color: #dda0dd;
        }
        
        .feature-card:hover .category-badge.secondary {
          background: rgba(186, 85, 211, 0.2);
          border-color: rgba(186, 85, 211, 0.4);
          color: #f0c0f0;
        }
        
        .metric {
          font-size: 1.125rem;
          font-weight: 700;
          color: #9370db;
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
          transition: color 0.3s ease;
        }
        
        .feature-card:hover .metric {
          color: #b19cd9;
        }
        
        .card-content h3 {
          font-size: 1.625rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1rem 0;
          line-height: 1.3;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .card-content h3 {
          transform: translateY(-2px);
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .card-content p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
          transition: color 0.3s ease;
        }
        
        .feature-card:hover .card-content p {
          color: #b19cd9;
        }
        
        .card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        
        .primary-accent {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(147, 112, 219, 0.6) 30%,
            rgba(147, 112, 219, 0.8) 50%,
            rgba(147, 112, 219, 0.6) 70%,
            transparent 100%
          );
        }
        
        .secondary-accent {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(186, 85, 211, 0.6) 30%,
            rgba(186, 85, 211, 0.8) 50%,
            rgba(186, 85, 211, 0.6) 70%,
            transparent 100%
          );
        }
        
        .feature-card:hover .card-accent {
          transform: scaleX(1);
        }
        
        .fade-overlay {
          position: absolute;
          top: 0;
          width: 250px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        
        .fade-left {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(10, 10, 10, 1) 0%,
            rgba(26, 26, 46, 0.9) 25%,
            rgba(22, 33, 62, 0.7) 50%,
            transparent 100%
          );
        }
        
        .fade-right {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(10, 10, 10, 1) 0%,
            rgba(26, 26, 46, 0.9) 25%,
            rgba(22, 33, 62, 0.7) 50%,
            transparent 100%
          );
        }
        
        @keyframes slideLeftVisible {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-380px * 5 - 2rem * 4));
          }
        }
        
        @keyframes slideRightVisible {
          0% {
            transform: translateX(calc(-380px * 5 - 2rem * 4));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        /* Synchronized pause on hover */
        .sliders-wrapper:hover .slider-track {
          animation-play-state: paused;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .dual-slider {
            padding: 2rem 0;
          }
          
          .section-header {
            padding: 0 1rem;
            margin-bottom: 2rem;
          }
          
          .section-header h1 {
            font-size: 2.5rem;
          }
          
          .section-header p {
            font-size: 1.125rem;
          }
          
          .sliders-wrapper {
            gap: 1.5rem;
          }
          
          .slider-row {
            height: 280px;
          }
          
          .feature-card {
            min-width: 320px;
            width: 320px;
            height: 240px;
            padding: 1.5rem;
          }
          
          .card-content h3 {
            font-size: 1.375rem;
          }
          
          .card-content p {
            font-size: 0.875rem;
          }
          
          .fade-overlay {
            width: 100px;
          }
        }
        
        @media (max-width: 480px) {
          .section-header h1 {
            font-size: 2rem;
          }
          
          .section-header p {
            font-size: 1rem;
          }
          
          .slider-row {
            height: 260px;
          }
          
          .feature-card {
            min-width: 280px;
            width: 280px;
            height: 220px;
            padding: 1.25rem;
          }
          
          .slider-track {
            gap: 1.5rem;
          }
        }
        
        /* High-end screen optimization */
        @media (min-width: 1600px) {
          .section-header h1 {
            font-size: 4rem;
          }
          
          .slider-row {
            height: 360px;
          }
          
          .feature-card {
            min-width: 420px;
            width: 420px;
            height: 320px;
          }
        }
      `}</style>
    </div>
  );
};

export default DualDirectionSlidingFeatures;