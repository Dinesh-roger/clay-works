import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../../components/Marquee/Marquee';
import FeaturesStrip from '../../components/FeaturesStrip/FeaturesStrip';
import CTABanner from '../../components/CTABanner/CTABanner';
import ProductCard from '../../components/ProductCard/ProductCard';
import QuickViewModal from '../../components/QuickViewModal/QuickViewModal';
import HeroParticles from './HeroParticles';
import { useCountUp } from '../../hooks/useCountUp';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types';
import './Home.css';

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
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Show a mix of idols across sizes on the homepage, like a "Shop by Collection" grid
  const FEATURED_PRODUCTS = PRODUCTS.slice(0, 8);

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
              <div className="hero-idol-showcase">
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
              </div>
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

      {/* ===== OUR COLLECTIONS (PRODUCT GRID) ===== */}
      <section id="categories" className="products-preview-section section-gap">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-tag">Shop Our Idols</span>
            <h2 className="section-title">Our Collections</h2>
            <p className="section-desc">
              From intimate home shrines to grand pandal centerpieces — find your perfect Vinayagar
            </p>
          </div>

          <div className="row g-4">
            {FEATURED_PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
                delay={index * 0.05}
              />
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn-primary-custom">
              <i className="fa-solid fa-gopuram me-2"></i> View All Collections
            </Link>
          </div>
        </div>
      </section>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}

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
