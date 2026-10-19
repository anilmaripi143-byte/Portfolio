import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Calendar, Briefcase, Award } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label reveal visible">Career Journey</div>
          <h2 className="section-title reveal visible">
            Work <em>Experience</em> & Milestones
          </h2>
        </div>

        <div className="timeline-container">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">
                  <Calendar size={13} /> {item.period}
                </div>
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
