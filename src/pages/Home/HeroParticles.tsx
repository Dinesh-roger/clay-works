import React, { useMemo } from 'react';

const SYMBOLS = ["🕉️", "🙏", "🌸", "🪔", "🎶", "🌺", "🕊️", "🌼", "🌿", "🍃"];

const HeroParticles: React.FC = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        fontSize: Math.random() * 14 + 10,
        opacity: Math.random() * 0.3 + 0.05,
        duration: Math.random() * 15 + 12,
        delay: Math.random() * 8,
      })),
    []
  );

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.fontSize}px`,
            opacity: p.opacity,
            animation: `particleFly ${p.duration}s linear ${p.delay}s infinite`,
            pointerEvents: 'none',
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
};

export default HeroParticles;
