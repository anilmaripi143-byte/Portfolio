import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Code2, Sparkles, Terminal, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function PortfolioHero({ onOpenShoreShackDemo }) {
  return (
    <section className="portfolio-hero" id="portfolio-hero">
      <div className="container">
        <div className="portfolio-hero-grid">
          <div className="portfolio-hero-text">
            <div className="hero-badge portfolio-badge">
              <span className="hero-badge-dot"></span>
              {DEVELOPER_INFO.title}
            </div>

            <h1 className="portfolio-title">
              Crafting <em className="teal-text">Fluid Web Apps</em> & <br />
              High-Performance UI Architectures
            </h1>

            <p className="portfolio-bio">
              {DEVELOPER_INFO.tagline} Specialized in modern React 19, custom CSS design systems, WebGL interactions, and ultra-fast Core Web Vitals.
            </p>

            {/* Featured Highlight Card for Shore Shack */}
            <div className="flagship-highlight-card">
              <div className="highlight-badge">⭐ Flagship Case Study</div>
              <h3>Shore Shack Beachside Restaurant Web App</h3>
              <p>
                A modern React application built with vanilla CSS tokens, real-time category filtering, slide-over ordering drawer, custom spring cursor, and 100/100 Lighthouse performance score.
              </p>
              <button className="highlight-cta-btn" onClick={onOpenShoreShackDemo}>
                <Sparkles size={16} /> Explore Live Shore Shack App
              </button>
            </div>

            <div className="portfolio-hero-ctas">
              <a href="#projects" className="hero-primary-btn">
                View All Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="hero-secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links-row">
              <a href={DEVELOPER_INFO.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} /> <span>GitHub</span>
              </a>
              <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} /> <span>LinkedIn</span>
              </a>
              <a href={`mailto:${DEVELOPER_INFO.email}`} aria-label="Email">
                <Mail size={18} /> <span>{DEVELOPER_INFO.email}</span>
              </a>
            </div>
          </div>

          <div className="portfolio-hero-stats">
            <div className="stat-card">
              <div className="stat-num">6+</div>
              <div className="stat-label">Years Experience</div>
              <p className="stat-sub">Specializing in Frontend & React Architecture</p>
            </div>

            <div className="stat-card">
              <div className="stat-num">40+</div>
              <div className="stat-label">Projects Delivered</div>
              <p className="stat-sub">Web Apps, Dashboards & Headless Stores</p>
            </div>

            <div className="stat-card">
              <div className="stat-num">100</div>
              <div className="stat-label">Lighthouse Target</div>
              <p className="stat-sub">Optimized LCP, CLS & Micro-animations</p>
            </div>

            <div className="code-snippet-box">
              <div className="code-box-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-filename">ShoreShackApp.jsx</span>
              </div>
              <pre className="code-content">
<code>{`const ShoreShackApp = () => {
  const [activeCat, setActiveCat] = useState('all');
  const { cartItems } = useCart();
  
  return (
    <ShoreShackLayout theme="coastal">
      <ParallaxHero title="Fresh From The Shore" />
      <FilterableMenu category={activeCat} />
      <OrderDrawer items={cartItems} />
    </ShoreShackLayout>
  );
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
