import React from 'react';
import { EXPERIENCE_ITEMS, CERTIFICATIONS } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="section-label reveal">Education &amp; Global Certifications</div>

      <div className="exp-grid">
        <div className="exp-timeline reveal">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-year">{item.year}</div>
              <div className="exp-role">{item.role}</div>
              <div className="exp-company">{item.company}</div>
              <div className="exp-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="exp-right reveal">
          <div className="exp-big-text">
            Building things<br />
            that <em>matter.</em>
          </div>
          <div className="section-label">Licenses &amp; Certifications</div>
          <ul className="awards-list">
            {CERTIFICATIONS.map((cert, idx) => (
              <li key={idx} className="award-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <div className="award-name" style={{ fontSize: '15px' }}>{cert.name}</div>
                  <div className="award-year">{cert.date}</div>
                </div>
                <div className="award-org" style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.05em' }}>
                  {cert.org}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted)' }}>
                  Credential ID: {cert.credentialId}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
