import React, { useEffect, useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';

export default function GithubSection() {
  const [ghStats, setGhStats] = useState({
    repos: '15+',
    stars: '20+',
    followers: '10+',
    contributions: '500+'
  });

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch('https://api.github.com/users/AnilkumarMaripi');
        if (res.ok) {
          const data = await res.json();
          setGhStats((prev) => ({
            ...prev,
            repos: data.public_repos ? `${data.public_repos}+` : prev.repos,
            followers: data.followers ? `${data.followers}+` : prev.followers
          }));
        }
      } catch (e) {
        // Fallback defaults
      }
    }
    fetchGitHubData();
  }, []);

  // Generate 30 weeks x 7 days contribution grid
  const weeks = 30;
  const days = 7;

  return (
    <section id="github-section">
      <div className="github-inner">
        <div className="reveal">
          <div className="section-label" style={{ color: 'rgba(245,240,232,0.4)' }}>
            Open Source
          </div>
          <h2 className="github-title">
            Code I've<br />
            put into <em>the world.</em>
          </h2>
          <p className="github-desc">
            Every commit tells a story. Every repo is a conversation. I believe in building in public and contributing to the ecosystem that built me.
          </p>
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>

        <div className="reveal">
          <div id="github-stats">
            <div className="gh-stat">
              <div className="gh-num">{ghStats.repos}</div>
              <div className="gh-label">Repositories</div>
            </div>
            <div className="gh-stat">
              <div className="gh-num">{ghStats.stars}</div>
              <div className="gh-label">Stars Earned</div>
            </div>
            <div className="gh-stat">
              <div className="gh-num">{ghStats.followers}</div>
              <div className="gh-label">Followers</div>
            </div>
            <div className="gh-stat">
              <div className="gh-num">{ghStats.contributions}</div>
              <div className="gh-label">Contributions</div>
            </div>
          </div>

          <div className="contribution-grid">
            <div className="contrib-title">Contribution Activity — {new Date().getFullYear()}</div>
            {[...Array(days)].map((_, d) => (
              <div key={d} className="contrib-row">
                {[...Array(weeks)].map((_, w) => {
                  const seed = (d * 30 + w * 7 + 13) % 100;
                  let level = '';
                  if (seed > 50) level = 'l1';
                  if (seed > 70) level = 'l2';
                  if (seed > 85) level = 'l3';
                  if (seed > 94) level = 'l4';
                  return <div key={w} className={`contrib-cell ${level}`}></div>;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
