import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Zap, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const renderCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={24} className="teal-icon" />;
      case 'Server': return <Server size={24} className="amber-icon" />;
      case 'Zap': return <Zap size={24} className="teal-icon" />;
      default: return <Code2 size={24} className="teal-icon" />;
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label reveal visible">Technical Expertise</div>
          <h2 className="section-title reveal visible">
            Skills & <em>Architectural</em> Mastery
          </h2>
          <p className="section-subtitle">
            A breakdown of technologies, frameworks, and engineering best practices I bring to every project.
          </p>
        </div>

        <div className="skills-grid-3">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="skills-category-card">
              <div className="skills-cat-header">
                {renderCategoryIcon(cat.icon)}
                <h3>{cat.title}</h3>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-name-row">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Badge Stream */}
        <div className="tech-stack-container">
          <h4>Core Tooling & Ecosystem</h4>
          <div className="tech-pills-row">
            {['React 19', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Vanilla CSS', 'TailwindCSS', 'Vite', 'Docker', 'Jest', 'CI/CD', 'Git', 'Lighthouse 100'].map((tech, i) => (
              <span key={i} className="tech-pill">
                <CheckCircle2 size={13} className="teal-icon" /> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
