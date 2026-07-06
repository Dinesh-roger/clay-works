import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal/Reveal';
import './About.css';

const IMAGES = [
  '/images/workspace(1).jpeg',
  '/images/workspace(3).jpeg',
  '/images/workspace.jpeg',
  '/images/workspace(4).jpeg',
];

const HIGHLIGHTS = [
  'Eco-Friendly Materials',
  'ISO Certified Workshop',
  'Pan-India Shipping',
  'Custom Orders Welcome',
  '3 to 13 Feet Range',
  '1200+ Idols Delivered',
];

const About: React.FC = () => {
  return (
    <section id="about" className="about-section section-gap">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Reveal className="about-image-grid" direction="left">
              {IMAGES.map((img) => (
                <div className="about-image-cell" key={img}>
                  <img
                    src={img}
                    alt="About AasaiThambi"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://placehold.co/400x400/2c1810/ffd700?text=Our+Workshop&font=playfair-display';
                    }}
                  />
                </div>
              ))}
              <div className="about-exp-badge">
                <span className="exp-num">25</span>
                <span className="exp-text">Years of<br />Artisan Legacy</span>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" className="col-lg-6" direction="right">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Passion Shaped in Clay,<br />Blessed by Tradition</h2>
            <p className="about-desc">
              AasaiThambi Clay Works was founded in 1999 in Bommala Quarters, Tirupathi by a family of
              passionate clay artisans. What began as a small workshop crafting temple idols has grown
              into one of Tirupathi&apos;s most respected Vinayagar idol manufacturers, delivering divine
              masterpieces across 18+ Indian states.
            </p>
            <p className="about-desc">
              Every idol we create carries the soul of our ancestors&apos; craft — from the sacred clay we
              source to the final brushstroke of gold. We are proud to be part of India&apos;s living
              cultural heritage.
            </p>
            <div className="about-highlights row g-3 mt-3">
              {HIGHLIGHTS.map((h) => (
                <div className="col-6" key={h}>
                  <div className="highlight-item">
                    <i className="fa-solid fa-check-circle"></i> {h}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary-custom mt-4 d-inline-block">
              <i className="fa-solid fa-phone me-2"></i> Talk to an Artisan
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;