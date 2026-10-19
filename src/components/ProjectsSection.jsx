import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection() {
  const [hoverImageSrc, setHoverImageSrc] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const hoverImgRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (hoverImgRef.current && isHovering) {
        const x = e.clientX + 24;
        const y = e.clientY - 90;
        hoverImgRef.current.style.left = `${x}px`;
        hoverImgRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  return (
    <section id="projects">
      {/* Floating Hover Image Follower */}
      <div
        id="proj-hover-img"
        ref={hoverImgRef}
        className={isHovering ? 'visible' : ''}
      >
        <img src={hoverImageSrc} alt="Project Preview" />
      </div>

      <div className="projects-header">
        <div className="reveal">
          <div className="section-label">Selected Work</div>
          <div className="projects-title">
            Projects<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)' }}>
              &amp; Case Studies
            </span>
          </div>
        </div>
        <div className="projects-count reveal">
          {String(PROJECTS.length).padStart(2, '0')} Projects
        </div>
      </div>

      <div id="project-list">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="project-item reveal"
            data-img={project.img}
            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
            onMouseEnter={() => {
              setHoverImageSrc(project.img);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            <div className="project-num">{project.id}</div>
            <div>
              <div className="project-name">{project.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                {project.desc}
              </div>
            </div>
            <div className="project-tech">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              View{' '}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
