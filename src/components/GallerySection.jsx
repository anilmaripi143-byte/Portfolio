import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/portfolioData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'ui', label: 'UI Design' },
    { key: 'web', label: 'Web Dev' },
    { key: 'motion', label: 'Motion' },
    { key: 'brand', label: 'Branding' }
  ];

  return (
    <section id="gallery">
      <div className="gallery-header">
        <div>
          <div className="section-label reveal">Visual Gallery</div>
          <h2 className="gallery-title reveal">
            Design<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)' }}>
              Works
            </span>
          </h2>
        </div>
        <p className="gallery-desc reveal">
          A curated collection of UI explorations, design systems, and visual experiments that push the boundaries of what's possible in the browser.
        </p>
      </div>

      <div className="gallery-filters reveal">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid" id="galleryGrid">
        {GALLERY_ITEMS.map((item) => {
          const isVisible = activeFilter === 'all' || item.cat === activeFilter;
          return (
            <div
              key={item.id}
              className={`gallery-item ${item.spanClass}`}
              data-cat={item.cat}
              style={{
                opacity: isVisible ? 1 : 0.2,
                transform: isVisible ? 'scale(1)' : 'scale(0.97)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-item-title">{item.title}</div>
                <div className="gallery-item-cat">{item.catLabel}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
