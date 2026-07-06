import React from 'react';
import Reveal from '../../components/Reveal/Reveal';
import './Gallery.css';

const GALLERY_ITEMS = [
  {
    img: '/images/WhatsApp Image 2026-06-07 at 10.16.38 AM (1).jpeg',
    alt: 'Vinayagar Idol 1',
    label: 'Grand Vinayagar',
    fallback: 'https://placehold.co/500x500/8b4513/ffd700?text=Ganesh+Idol&font=playfair-display',
  },
  {
    img: '/images/WhatsApp Image 2026-06-07 at 10.16.38 AM.jpeg',
    alt: 'Vinayagar Idol 2',
    label: 'Golden Ganesha',
    fallback: 'https://placehold.co/500x500/d4a843/1a0a00?text=Gold+Ganesha&font=playfair-display',
  },
  {
    img: '/images/WhatsApp Image 2026-06-07 at 10.16.39 AM (2).jpeg',
    alt: 'Vinayagar Idol 3',
    label: 'Clay Heritage',
    fallback: 'https://placehold.co/500x500/c0392b/ffd700?text=Clay+Ganesha&font=playfair-display',
  },
  {
    img: '/images/3 feet.webp',
    alt: 'Vinayagar Idol 4',
    label: 'Festival Edition',
    fallback: 'https://placehold.co/500x500/2c1810/ffd700?text=Festival+Ganesha&font=playfair-display',
  },
  
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="gallery-section section-gap">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-tag">Visual Stories</span>
          <h2 className="section-title">Gallery of Devotion</h2>
        </div>
        <div className="row g-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={item.label}>
              <Reveal className="gallery-card" delay={i * 0.07}>
                <div className="gallery-img-wrap">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = item.fallback;
                    }}
                  />
                </div>
                <div className="gallery-caption">{item.label}</div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;