import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label reveal visible">Client Feedback</div>
          <h2 className="section-title reveal visible">
            What <em>Engineering Leaders</em> Say
          </h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#e8991a" color="#e8991a" />
                ))}
              </div>
              <p className="testimonial-text">"{item.quote}"</p>

              <div className="testimonial-author">
                {/* CSS Initials Avatar (NO photo URLs!) */}
                <div className="initials-avatar">
                  {item.initials}
                </div>
                <div>
                  <h4>{item.author}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
