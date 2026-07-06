import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner: React.FC = () => {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-overlay"></div>
      <div className="container position-relative z-1 text-center">
        <i className="fa-solid fa-om cta-om-icon"></i>
        <h2>Planning Ganesh Chaturthi This Year?</h2>
        <p>Book your custom Vinayagar idol now — slots fill fast during the festival season.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <Link to="/contact" className="btn-primary-custom">
            <i className="fa-solid fa-calendar-check me-2"></i> Book Custom Order
          </Link>
          <a href="tel:+919676791734" className="btn-outline-custom">
            <i className="fa-solid fa-phone me-2"></i> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
