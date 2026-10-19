import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0047FF', '#FF4D00', '#1A1814']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="contact-inner">
        <div>
          <div className="section-label reveal">Get In Touch</div>
          <div className="contact-big reveal">
            Let's<br />
            <em>build</em><br />
            together.
          </div>
          <p className="contact-sub reveal">
            Whether you have a project in mind, want to collaborate, or just want to say hello — I'm always up for a good conversation.
          </p>

          <div className="contact-links reveal">
            <a href={`mailto:${DEVELOPER_INFO.email}`} className="contact-link">
              <div>
                <div className="contact-link-name">Email</div>
                <div className="contact-link-handle">{DEVELOPER_INFO.email}</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 17L17 1M17 1H4M17 1V14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a href={DEVELOPER_INFO.github} target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-name">GitHub</div>
                <div className="contact-link-handle">github.com/AnilkumarMaripi</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 17L17 1M17 1H4M17 1V14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-name">LinkedIn</div>
                <div className="contact-link-handle">anil-kumar-maripi-11012a382</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 17L17 1M17 1H4M17 1V14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a href={DEVELOPER_INFO.twitter} target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-name">Twitter / X</div>
                <div className="contact-link-handle">@anilkumar_imdk</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 17L17 1M17 1H4M17 1V14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-form-wrap reveal">
          <div className="section-label">Send A Message</div>
          <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
            <div className="form-row">
              <label className="form-label" htmlFor="fname">Your Name</label>
              <input
                type="text"
                id="fname"
                className="form-input"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="femail">Email Address</label>
              <input
                type="email"
                id="femail"
                className="form-input"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="fsubject">Subject</label>
              <input
                type="text"
                id="fsubject"
                className="form-input"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div className="form-row">
              <label className="form-label" htmlFor="fmsg">Message</label>
              <textarea
                id="fmsg"
                className="form-textarea"
                rows="4"
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              <span>{sending ? 'Sending...' : sent ? 'Sent ✓' : 'Send Message →'}</span>
            </button>

            {sent && (
              <div
                id="form-success"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: '#16a34a',
                  marginTop: '1rem',
                  letterSpacing: '0.05em'
                }}
              >
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
