import React from 'react';
import { DEVELOPER_INFO, SKILL_GROUPS } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about">
      <div>
        <div className="section-label reveal">About Me</div>
        <h2 className="about-title reveal">
          Crafting<br />
          <em>beautiful</em><br />
          digital worlds
        </h2>
        <p className="about-text reveal">
          {DEVELOPER_INFO.about}
        </p>
        <div className="about-stats reveal">
          {DEVELOPER_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-box">
              <div className="stat-num" data-count={stat.num}>
                {stat.num}+
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-right reveal">
        {SKILL_GROUPS.map((group, idx) => (
          <div key={idx} className="skills-group">
            <div className="skills-group-title">{group.title}</div>
            <div className="skills-tags">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-tag">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
