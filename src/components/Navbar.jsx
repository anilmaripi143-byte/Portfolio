import React, { useState, useEffect } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.scrollY > 80) {
          nav.style.boxShadow = '0 4px 40px rgba(0,0,0,0.06)';
        } else {
          nav.style.boxShadow = 'none';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav id="navbar">
        <a href="#hero" className="nav-logo" onClick={(e) => scrollToSection(e, '#hero')}>
          ak<span>.</span>dev
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
          <li><a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a></li>
          <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
        <a href={`mailto:${DEVELOPER_INFO.email}`} className="nav-cta">
          Hire Me
        </a>
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
        <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
        <a href={`mailto:${DEVELOPER_INFO.email}`}>Hire Me →</a>
      </div>
    </>
  );
}
