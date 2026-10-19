import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-number" aria-hidden="true">01</div>

      <div className="hero-index reveal">
        <span>{DEVELOPER_INFO.title}</span>
        <span>{DEVELOPER_INFO.subTitle}</span>
      </div>

      <h1 className="hero-title">
        <div style={{ overflow: 'hidden' }}>
          <span className="title-line block">{DEVELOPER_INFO.shortName}</span>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <span className="title-line block">
            <em className="serif-word">{DEVELOPER_INFO.lastName.split(' ')[0]}</em>
          </span>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <span className="title-line block outline-text">
            . M
          </span>
        </div>
      </h1>

      <div className="hero-bottom reveal">
        <div>
          <div className="hero-desc">
            Building digital experiences<br />
            that live at the intersection of<br />
            <strong style={{ color: 'var(--charcoal)' }}>code, craft &amp; creativity.</strong>
          </div>
          <div className="hero-availability" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
            <div className="hero-dot"></div>
            {DEVELOPER_INFO.availability}
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
