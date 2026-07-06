import React from 'react';
import type { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatPrice, discountPercent } from '../../utils/format';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  delay?: number;
}

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<i key={i} className="fa-solid fa-star"></i>);
    else if (rating >= i - 0.5) stars.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    else stars.push(<i key={i} className="fa-regular fa-star"></i>);
  }
  return <>{stars}</>;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, delay = 0 }) => {
  const { toggleWishlist, isWishlisted, orderOnWhatsApp, showToast } = useApp();
  const discount = discountPercent(product.price, product.oldPrice);
  const wishlisted = isWishlisted(product.id);

  const shareProduct = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${product.name} – AasaiThambi Clay Works`,
          text: `Check out this beautiful ${product.size} Vinayagar idol at ₹${formatPrice(product.price)}!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => showToast('Link copied to clipboard! 🔗'))
        .catch(() => showToast('Share: ' + window.location.href));
    }
  };

  return (
    <div className="col-sm-6 col-lg-3 reveal visible" style={{ transitionDelay: `${delay}s` }}>
      <div className="product-card">
        <div className="product-img-wrap">
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = product.imgFallback;
            }}
          />
          <div className={`product-badge ${product.badge}`}>{product.badgeLabel}</div>
          {product.eco && (
            <div className="product-badge eco" style={{ top: '44px' }}>🌿 Eco</div>
          )}
          {discount > 0 && (
            <div
              style={{
                position: 'absolute',
                top: product.eco ? '80px' : '44px',
                left: '12px',
                background: '#e74c3c',
                color: 'white',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '3px 9px',
                borderRadius: '50px',
                fontFamily: 'var(--font-body)',
              }}
            >
              -{discount}%
            </div>
          )}
          <div className="product-actions">
            <button
              className="product-action-btn"
              title="Add to Wishlist"
              onClick={() => toggleWishlist(product)}
              style={wishlisted ? { color: '#e74c3c' } : undefined}
            >
              <i className={wishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
            </button>
            <button className="product-action-btn" title="Quick View" onClick={() => onQuickView(product)}>
              <i className="fa-regular fa-eye"></i>
            </button>
            <button className="product-action-btn" title="Share" onClick={shareProduct}>
              <i className="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
        <div className="product-body">
          <div className="product-category">{product.categoryLabel}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-stars">
            <Stars rating={product.rating} />
            <span>({product.reviews} reviews)</span>
          </div>
          <div className="product-size">Size: <strong>{product.size}</strong></div>
          <div className="product-price-row">
            <div>
              <span className="product-price">₹{formatPrice(product.price)}</span>
              <span className="product-old-price">₹{formatPrice(product.oldPrice)}</span>
            </div>
            <button className="order-whatsapp-btn" onClick={() => orderOnWhatsApp(product)}>
              <i className="fa-brands fa-whatsapp"></i> Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
export { Stars };
