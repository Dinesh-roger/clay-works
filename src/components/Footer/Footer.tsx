import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Footer.css';

const Footer: React.FC = () => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');

  const subscribeNewsletter = () => {
    const value = email.trim();
    if (!value || !value.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    const waMsg = `🔔 *New Newsletter Subscription – AasaiThambi Clay Works*\n\n📧 *Email:* ${value}\n\n_Please add to your updates & offers list._\n_Sent from AasaiThambi website_`;
    const waURL = `https://wa.me/919676791734?text=${encodeURIComponent(waMsg)}`;
    window.open(waURL, '_blank');
    showToast(`🎉 WhatsApp opened! Press Send to complete your subscription, ${value.split('@')[0]}!`);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="footer-brand d-flex align-items-center gap-3 mb-3">
                <div className="brand-logo-icon"><i className="fa-solid fa-gopuram"></i></div>
                <div className="brand-text-wrap">
                  <span className="brand-title">AasaiThambi</span>
                  <span className="brand-sub">Clay Works</span>
                </div>
              </div>
              <p className="footer-about">
                Crafting divine Vinayagar idols since 1999 from the sacred soils of Tirupathi.
                From 3 feet to 13 feet — every idol is a masterpiece of faith and artistry.
              </p>
              <div className="social-icons d-flex gap-3 mt-3">
                <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <h6 className="footer-heading">Quick Links</h6>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#categories">Collections</Link></li>
                <li><Link to="/products">Idols</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h6 className="footer-heading">Idol Sizes</h6>
              <ul className="footer-links">
                <li><Link to="/products?filter=3-5">3 – 5 Feet</Link></li>
                <li><Link to="/products?filter=6-8">6 – 8 Feet</Link></li>
                <li><Link to="/products?filter=9-11">9 – 11 Feet</Link></li>
                <li><Link to="/products?filter=12-13">12 – 13 Feet</Link></li>
                <li><Link to="/products">Eco-Clay Idols</Link></li>
                <li><Link to="/contact">Custom Orders</Link></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="footer-heading">Newsletter & Updates</h6>
              <p className="footer-sub">Get festival offers, new designs & early booking alerts.</p>
              <div className="footer-subscribe d-flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={subscribeNewsletter}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className="footer-badges d-flex gap-2 mt-4 flex-wrap">
                <span className="footer-badge"><i className="fa-solid fa-shield-halved me-1"></i> Secure Payments</span>
                <span className="footer-badge"><i className="fa-solid fa-leaf me-1"></i> Eco Certified</span>
                <span className="footer-badge"><i className="fa-solid fa-truck me-1"></i> Pan India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>© 2025 AasaiThambi Clay Works. All Rights Reserved. | Bommala Quarters, Tirupathi, Andhra Pradesh</span>
          <span>Crafted with <i className="fa-solid fa-heart text-danger"></i> for Devotion and Artistry</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
