import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Github, BarChart3, Layers, ShoppingBag, Cpu, Code2, ArrowUpRight, Terminal } from 'lucide-react';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSnippetId, setActiveSnippetId] = useState(null);

  const categories = ['All', 'Full-Stack & Analytics', 'Design System & UI', 'E-Commerce', 'Cloud & DevOps Tooling'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3': return <BarChart3 size={40} className="project-header-icon" />;
      case 'Layers': return <Layers size={40} className="project-header-icon" />;
      case 'ShoppingBag': return <ShoppingBag size={40} className="project-header-icon" />;
      case 'Cpu': return <Cpu size={40} className="project-header-icon" />;
      default: return <Code2 size={40} className="project-header-icon" />;
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label reveal visible">Portfolio Showcase</div>
          <h2 className="section-title reveal visible">
            Featured <em>Projects</em> & Case Studies
          </h2>
          <p className="section-subtitle">
            Explore software engineering projects, design systems, and web applications built for speed, accessibility, and scale.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-tag-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tag-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* CSS Gradient Banner Header (NO photos!) */}
              <div className="project-card-header-banner" style={{ background: project.gradient }}>
                {renderIcon(project.icon)}
                <span className="project-cat-badge">{project.category}</span>
                {project.featured && <span className="featured-star-badge">⭐ Flagship</span>}
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>

                <div className="project-metrics-pill">
                  {project.metrics}
                </div>

                <div className="project-tags-row">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="project-tag-chip">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Code Snippet Drawer */}
                {activeSnippetId === project.id && (
                  <div className="card-code-drawer">
                    <div className="drawer-header">
                      <Terminal size={13} /> Code Architecture
                    </div>
                    <pre><code>{project.codeSnippet}</code></pre>
                  </div>
                )}

                <div className="project-card-footer">
                  <button
                    className="code-toggle-btn"
                    onClick={() => setActiveSnippetId(activeSnippetId === project.id ? null : project.id)}
                  >
                    <Code2 size={14} /> {activeSnippetId === project.id ? 'Hide Code' : 'View Code'}
                  </button>

                  <div className="footer-links-group">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-link"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-demo-btn primary inline-btn"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
