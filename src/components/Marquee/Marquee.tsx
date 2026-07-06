import React from 'react';
import './Marquee.css';

const ITEMS = [
  '🙏 Eco-Friendly Clay',
  '🎨 Hand-Painted Finishes',
  '🏆 25+ Years Legacy',
  '✨ Custom Sizes Available',
  '🕉️ Blessed by Artisans',
  '💛 Ganesh Chaturthi Specials',
  '🌿 Natural Colors Used',
];

const Marquee: React.FC = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-banner">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}&nbsp;•&nbsp;</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
