import React from 'react';

export default function WaveDivider({
  topBg = '#1D9E75',
  waveColor = '#F0EAD8',
  height = '80px',
  variant = 1
}) {
  const paths = {
    1: "M0,80 L0,30 C180,70 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1360,20 1440,40 L1440,80 Z",
    2: "M0,0 C360,60 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,60 L0,60 Z",
    3: "M0,70 L0,30 C240,70 480,0 720,35 C960,70 1200,10 1440,40 L1440,70 Z"
  };

  const viewBoxes = {
    1: "0 0 1440 80",
    2: "0 0 1440 60",
    3: "0 0 1440 70"
  };

  return (
    <div className="wave-divider" aria-hidden="true">
      <svg
        viewBox={viewBoxes[variant] || viewBoxes[1]}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height, background: topBg, width: '100%', display: 'block' }}
      >
        <path d={paths[variant] || paths[1]} fill={waveColor} />
      </svg>
    </div>
  );
}
