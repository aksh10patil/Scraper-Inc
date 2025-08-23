import React from 'react';

interface FeatureCardProps {
  title?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title = "Hover", 
  className = "" 
}) => {
  return (
    <div className={`feature-card ${className}`}>
      <div className="feature-card-info">
        <p>{title}</p>
      </div>
      
      <style jsx>{`
        .feature-card {
          width: 200px;
          height: 270px;
          background: linear-gradient(45deg, #00cc0a 25%, #00cc0a 25%, #444 25%, #444 50%, #00cc0a 50%, #00cc0a 75%, #444 75%, #444 100%);
          animation: animate_card 15s linear infinite;
          transition: 0.3s;
          background-size: 60px 60px;
          position: relative;
          overflow: visible;
          border-radius: 20px;
        }
        
        .feature-card-info {
          position: absolute;
          width: 96%;
          height: 96%;
          left: 2%;
          top: 2%;
          background-color: rgb(24, 22, 22);
          border-radius: 20px;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .feature-card-info:hover {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.822);
          backdrop-filter: blur(12px);
          left: 20px;
          top: 20px;
        }
        
        .feature-card-info p {
          color: white;
          font-weight: bold;
          font-size: 30px;
          margin: 0;
        }
        
        @keyframes animate_card {
          0% {
            background-position: 0px;
          }
          100% {
            background-position: 1000px;
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureCard;