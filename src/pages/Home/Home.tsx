import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Marquee from '../../components/Marquee/Marquee';
import FeaturesStrip from '../../components/FeaturesStrip/FeaturesStrip';
import CTABanner from '../../components/CTABanner/CTABanner';
import HeroParticles from './HeroParticles';
import { useCountUp } from '../../hooks/useCountUp';
import './Home.css';

const CATEGORIES = [
  { icon: 'fa-gopuram', size: '3 – 5 Ft', name: 'Home Shrine', count: '12 Designs', filter: '3-5' },
  { icon: 'fa-gopuram', size: '6 – 8 Ft', name: 'Society Idol', count: '8 Designs', filter: '6-8' },
  { icon: 'fa-gopuram', size: '9 – 11 Ft', name: 'Pandal Grade', count: '6 Designs', filter: '9-11', active: true },
  { icon: 'fa-gopuram', size: '12 – 13 Ft', name: 'Grand Idol', count: '4 Designs', filter: '12-13' },
  { icon: 'fa-leaf', size: 'Eco Clay', name: 'Dissolves Fast', count: 'All Sizes', filter: 'all' },
  { icon: 'fa-palette', size: 'Custom', name: 'Your Design', count: 'Any Size', filter: 'all' },
];

const STATS = [
  { target: 1200, label: 'Idols Delivered' },
  { target: 25, label: 'Years Legacy' },
  { target: 18, label: 'States Served' },
];

const TESTIMONIALS = [
  {
    initials: 'RS',
    name: 'Rajesh Subramaniam',
    place: 'Chennai, Tamil Nadu',
    rating: 5,
    text: "We ordered a 9-foot Vinayagar for our colony's Ganesh Chaturthi. The idol was breathtaking — every detail perfectly carved. Delivered safely, on time. Highly recommend AasaiThambi!",
  },
  {
    initials: 'PD',
    name: 'Priya Dhanasekaran',
    place: 'Coimbatore, Tamil Nadu',
    rating: 5,
    featured: true,
    text: 'Got a custom 5-foot eco-clay idol for my home puja. The natural colours are stunning and the clay dissolved completely during visarjan. Pure art, pure devotion. Will order every year!',
  },
  {
    initials: 'MK',
    name: 'Murugesan Kannan',
    place: 'Madurai, Tamil Nadu',
    rating: 4.5,
    text: "Ordered a 13-foot grand idol for our temple festival. The craftsmanship is unbelievable. AasaiThambi's team was so helpful throughout — from design approval to safe installation.",
  },
];

const StatItem: React.FC<{ target: number; label: string }> = ({ target, label }) => {
  const { ref, count } = useCountUp(target);
  return (
    <div className="stat-item">
      <span className="stat-num" ref={ref}>{count}</span><span>+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const StarsInline: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<i key={i} className="fa-solid fa-star"></i>);
    else if (rating >= i - 0.5) stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    else stars.push(<i key={i} className="fa-regular fa-star"></i>);
  }
  return <div className="stars">{stars}</div>;
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <HeroParticles />
        <div className="container h-100 position-relative z-1">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="hero-badge">
                <i className="fa-solid fa-star me-1"></i> Trusted Since 1999
              </div>
              <h1 className="hero-title">
                Sacred Clay<br />
                <span className="hero-title-accent">Masterpieces</span><br />
                By Artisan Hands
              </h1>
              <p className="hero-desc">
                Handcrafted Vinayagar Idols from <strong>3 Feet to 13 Feet</strong> —
                ancient clay-working tradition. Every idol is a blessing, shaped with devotion.
              </p>
              <div className="hero-cta d-flex flex-wrap gap-3">
                <Link to="/products" className="btn-primary-custom">
                  <i className="fa-solid fa-gopuram me-2"></i> Explore Idols
                </Link>
                <Link to="/contact" className="btn-outline-custom">
                  <i className="fa-solid fa-phone me-2"></i> Custom Order
                </Link>
              </div>
              <div className="hero-stats d-flex gap-4 mt-5 flex-wrap">
                {STATS.map((s, i) => (
                  <React.Fragment key={s.label}>
                    <StatItem target={s.target} label={s.label} />
                    {i < STATS.length - 1 && <div className="stat-divider"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
              {/* <div className="hero-idol-showcase">
                <div className="hero-idol-glow"></div>
                <img
                  src="/images/WhatsApp Image 2026-06-07 at 10.16.39 AM (3).jpeg"
                  alt="Vinayagar Idol"
                  className="hero-idol-img"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/420x520/d4a843/1a0a00?text=Vinayagar+Idol&font=playfair-display';
                  }}
                />
                <div className="hero-idol-badge">
                  <i className="fa-solid fa-award"></i>
                  <span>Award Winning</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <Marquee />
      <FeaturesStrip />

      {/* ===== CATEGORIES ===== */}
      <section id="categories" className="categories-section section-gap">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-tag">Browse by Size</span>
            <h2 className="section-title">Our Collections</h2>
            <p className="section-desc">
              From intimate home shrines to grand pandal centerpieces — find your perfect Vinayagar
            </p>
          </div>
          <div className="row g-4">
            {CATEGORIES.map((cat) => (
              <div className="col-6 col-md-4 col-lg-2" key={cat.name}>
                <div
                  className={`category-card${cat.active ? ' active' : ''}`}
                  onClick={() => navigate(`/products?filter=${cat.filter}`)}
                >
                  <div className="cat-icon-wrap"><i className={`fa-solid ${cat.icon}`}></i></div>
                  <div className="cat-size">{cat.size}</div>
                  <div className="cat-name">{cat.name}</div>
                  <div className="cat-count">{cat.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section section-gap">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-tag">Devotee Reviews</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div className="row g-4">
            {TESTIMONIALS.map((t) => (
              <div className="col-md-4" key={t.name}>
                <div className={`testimonial-card${t.featured ? ' featured' : ''}`}>
                  <StarsInline rating={t.rating} />
                  <p>&quot;{t.text}&quot;</p>
                  <div className="reviewer">
                    <div className="reviewer-avatar">{t.initials}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.place}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Home;
