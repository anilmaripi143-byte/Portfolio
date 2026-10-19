import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        © {new Date().getFullYear()} {DEVELOPER_INFO.name}. All rights reserved.
      </div>
      <div className="footer-logo">
        ak<span>.</span>dev
      </div>
      <div className="footer-right">
        Built with <span style={{ color: 'var(--accent)' }}>♥</span> in Vijayawada
      </div>
    </footer>
  );
}
