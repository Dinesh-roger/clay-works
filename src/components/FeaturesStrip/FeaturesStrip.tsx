import React from 'react';
import Reveal from '../Reveal/Reveal';
import './FeaturesStrip.css';

const FEATURES = [
  { icon: 'fa-gopuram', title: 'Pure Divine', desc: 'Each And Every Idols Are Made Up Of Pure Clay' },
  { icon: 'fa-hands', title: '100% Handcrafted', desc: 'Each idol shaped by master Tamil artisans' },
  { icon: 'fa-leaf', title: 'Eco Friendly', desc: 'Pure clay, natural paints – dissolves safely' },
  { icon: 'fa-headset', title: '24/7 Support', desc: 'Dedicated team for custom & bulk orders' },
];

const FeaturesStrip: React.FC = () => {
  return (
    <section className="features-strip">
      <div className="container">
        <div className="row g-3">
          {FEATURES.map((f, i) => (
            <div className="col-6 col-md-3" key={f.title}>
              <Reveal className="feature-card" delay={i * 0.1}>
                <i className={`fa-solid ${f.icon} feature-icon`}></i>
                <h6>{f.title}</h6>
                <p>{f.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;