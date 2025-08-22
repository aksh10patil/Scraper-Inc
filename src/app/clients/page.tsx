import React, { useState, useEffect, useRef } from 'react'; // Added useRef
import './App.css';
import logoImage from './images/logo.png'; // Import the logo image

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [footerTiles, setFooterTiles] = useState([]);
  const [floatingParticles, setFloatingParticles] = useState([]);

  // Ref for the login card to apply mouse-based 3D tilt
  const loginCardRef = useRef(null);

  useEffect(() => {
    const generateFooterTiles = () => {
      const tiles = [];
      for (let i = 0; i < 40; i++) {
        tiles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 120,
          size: Math.random() * 15 + 8,
          delay: Math.random() * 4,
          duration: Math.random() * 3 + 2
        });
      }
      setFooterTiles(tiles);
    };

    const generateFloatingParticles = () => {
      const particles = [];
      for (let i = 0; i < 25; i++) {
        particles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 5,
          duration: Math.random() * 4 + 3
        });
      }
      setFloatingParticles(particles);
    };

    generateFooterTiles();
    generateFloatingParticles();
  }, []);

  // Effect for 3D tilt on the login card based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!loginCardRef.current) return;
      const rect = loginCardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * 8; // Adjust tilt intensity
      const rotateY = (x - 0.5) * 8; // Adjust tilt intensity
      const scale = 1.01; // Slight scale on hover

      loginCardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
        translateY(-5px) /* Add a slight lift */
      `;
    };

    const handleMouseLeave = () => {
      if (!loginCardRef.current) return;
      loginCardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateY(0)'; // Reset
    };

    const currentLoginCard = loginCardRef.current;
    if (currentLoginCard) {
      currentLoginCard.addEventListener('mousemove', handleMouseMove);
      currentLoginCard.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        currentLoginCard.removeEventListener('mousemove', handleMouseMove);
        currentLoginCard.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Replaced alert with console.log as per instructions
      console.log('Login successful!');
    }, 2000);
  };

  const handleGoogleLogin = () => {
    // Replaced alert with console.log as per instructions
    console.log('Google login clicked!');
  };

  return (
    <div className="app">
      {/* Background Grid */}
      <div className="background-grid">
        {/* Vertical grid lines */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="grid-line-vertical"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
        
        {/* Horizontal grid lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="grid-line-horizontal"
            style={{
              top: `${i * 6.67}%`,
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}

        {/* Grid squares */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`s-${i}`}
            className="grid-square"
            style={{
              left: `${(i % 15) * 6.67}%`,
              top: `${Math.floor(i / 15) * 25}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Footer Glow Effect */}
      <div className="footer-glow">
        {/* Glowing tiles at footer */}
        {footerTiles.map((tile) => (
          <div
            key={tile.id}
            className="footer-tile"
            style={{
              left: `${tile.x}%`,
              bottom: `${tile.y}px`,
              width: `${tile.size}px`,
              height: `${tile.size}px`,
              animationDelay: `${tile.delay}s`,
              animationDuration: `${tile.duration}s`
            }}
          />
        ))}
        
        {/* Floating particles */}
        {floatingParticles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle"
            style={{
              left: `${particle.x}%`,
              bottom: '0px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            {/* Using img tag for logo.png */}
            <img src={logoImage} alt="Crowhub Logo" />
          </div>
          <div className="brand">CrowHub.</div> {/* Updated brand name */}
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="login-card" ref={loginCardRef}> {/* Attach ref here */}
            <h1 className="title">Welcome back</h1>
            <p className="subtitle">We missed you !</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="••••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="remember"
                    name="rememberMe"
                    className="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label className="checkbox-label" htmlFor="remember">Remember me</label>
                </div>
                <a href="#forgot" className="forgot-link">Forgot password ?</a>
              </div>

              <button
                type="submit"
                className="sign-in-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            <button className="google-btn" onClick={handleGoogleLogin}>
              <span className="google-icon"></span> 
              Continue with Google
            </button>

            <p className="signup-text">
              Don't have an account? <a href="#signup" className="signup-link">Sign up for free!</a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
