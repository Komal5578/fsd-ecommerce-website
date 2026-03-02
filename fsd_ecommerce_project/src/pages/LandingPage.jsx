import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">♥</span>
          <span className="logo-text">Blushberry Gifts</span>
        </div>
        <button className="cart-btn" onClick={onNavigate}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-text">Shop Gifts</span>
        </button>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Handcrafted Gifts
            <br />
            <span className="highlight">That Never Disappoint</span>
          </h1>
          <p className="hero-subtitle">
            Made with love, delivered with care
          </p>
          <button className="cta-btn" onClick={onNavigate}>
            Explore Our Collection
          </button>
        </div>
        <div className="hero-decoration">
          <div className="floating-heart heart-1">♥</div>
          <div className="floating-heart heart-2">♥</div>
          <div className="floating-heart heart-3">♥</div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Blushberry Gifts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
