import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export default function Marquee() {
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {displayItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-item marquee-sep">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
