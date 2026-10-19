import React, { useEffect, useRef } from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';

export default function ShoreshackHero({ onExploreClick }) {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="hero">
      <div className="hero-bg-img" ref={bgRef}></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Now Open · Boardwalk Level, Pier 7
        </div>
        <h1>
          Fresh From<br />
          <em>The Shore</em>
          <span className="sub-line">Real food. Real good. Real fast.</span>
        </h1>
        <p className="hero-desc">
          Handcrafted sandwiches, vibrant bowls, and ice-cold drinks — made with local ingredients right here on the waterfront.
        </p>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <Clock size={16} />
            <span>Open 8am – 9pm</span>
          </div>
          <span className="hero-meta-sep"></span>
          <div className="hero-meta-item">
            <Phone size={16} />
            <span>(555) 0-SHACK</span>
          </div>
          <span className="hero-meta-sep"></span>
          <div className="hero-meta-item">
            <MapPin size={16} />
            <span>Malibu Beach, CA</span>
          </div>
        </div>

        <div className="hero-cta-group">
          <button 
            className="hero-primary-btn"
            onClick={() => {
              const el = document.getElementById('menu');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Order Beachside Now
          </button>
          <button 
            className="hero-secondary-btn"
            onClick={() => {
              const el = document.getElementById('special');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Today's Special ✨
          </button>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        Scroll
      </div>
    </main>
  );
}
