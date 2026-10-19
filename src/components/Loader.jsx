import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate loader name in
    gsap.to('#loader-name', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.1
    });

    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          gsap.to('#loader', {
            yPercent: -100,
            duration: 0.9,
            ease: 'power4.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 300);
      } else {
        setProgress(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div id="loader">
      <div className="loader-name" id="loader-name">
        Anil Kumar <span style={{ color: 'var(--accent)' }}>.</span> M
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-counter">
        {String(progress).padStart(3, '0')}
      </div>
    </div>
  );
}
