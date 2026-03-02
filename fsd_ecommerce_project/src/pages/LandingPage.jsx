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
          <i className="fa-solid fa-cart-shopping"></i>
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
