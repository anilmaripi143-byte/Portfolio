import React from 'react';
import { MapPin, Phone, Mail, Clock, Compass } from 'lucide-react';

export default function InfoSection() {
  return (
    <section className="info-section" id="info">
      <div className="container">
        <div className="info-grid">
          <div className="reveal-left visible">
            <div className="info-logo">
              Shore<span>Shack</span>
            </div>
            <p className="info-tagline">
              A small beach shack with a big heart — serving fresh, honest food right on the Malibu waterfront since 2018. Come hungry, leave happy.
            </p>
            <div className="info-badges">
              <span className="shack-badge">☀️ Waterfront Dining</span>
              <span className="shack-badge">🌊 Pier 7 Boardwalk</span>
            </div>
          </div>

          <div className="reveal visible">
            <div className="info-title">Find Us</div>
            <ul className="info-list">
              <li>
                <MapPin size={18} />
                <div>
                  <strong>Boardwalk Level, Pier 7</strong><br />
                  Malibu Beach, CA 90265
                </div>
              </li>
              <li>
                <Phone size={18} />
                <div>(555) 0-SHACK</div>
              </li>
              <li>
                <Mail size={18} />
                <div>hello@shoreshack.com</div>
              </li>
            </ul>
          </div>

          <div className="reveal visible">
            <div className="info-title">Hours</div>
            <div className="hours-row">
              <strong>Mon – Fri</strong>
              <span className="open">8:00 am – 9:00 pm</span>
            </div>
            <div className="hours-row">
              <strong>Saturday</strong>
              <span className="open">7:30 am – 10:00 pm</span>
            </div>
            <div className="hours-row">
              <strong>Sunday</strong>
              <span className="open">8:00 am – 8:00 pm</span>
            </div>
            <div className="hours-row">
              <strong>Public Holidays</strong>
              <span>10:00 am – 6:00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
