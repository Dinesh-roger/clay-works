import React from 'react';
import Reveal from '../../components/Reveal/Reveal';
import './Process.css';

const STEPS = [
  {
    num: '01',
    icon: 'fa-mountain',
    title: 'Clay Selection',
    desc: 'Premium river clay sourced from sacred banks of Tamil Nadu — tested for purity and plasticity.',
  },
  {
    num: '02',
    icon: 'fa-hands',
    title: 'Hand Sculpting',
    desc: "Master artisans shape each curve by hand, breathing life into Lord Ganesha's divine form.",
  },
  {
    num: '03',
    icon: 'fa-fire',
    title: 'Sun Drying & Kiln',
    desc: 'Naturally sun-dried for strength, then kiln-fired to achieve perfect durability and texture.',
  },
  {
    num: '04',
    icon: 'fa-paint-brush',
    title: 'Hand Painting',
    desc: 'Vibrant natural and chemical-free paints applied by skilled painters — each stroke a prayer.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="process-section section-gap">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-tag">Our Craft</span>
          <h2 className="section-title">From Earth to Divinity</h2>
          <p className="section-desc">A sacred seven-step journey that transforms raw clay into a blessed idol</p>
        </div>
        <div className="process-timeline">
          <div className="process-line"></div>
          <div className="row g-5">
            {STEPS.map((s, i) => (
              <div className="col-md-6 col-lg-3" key={s.num}>
                <Reveal className="process-step" delay={i * 0.12}>
                  <div className="step-num">{s.num}</div>
                  <div className="step-icon"><i className={`fa-solid ${s.icon}`}></i></div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;