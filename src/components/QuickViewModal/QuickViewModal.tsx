import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatPrice } from '../../utils/format';
import { Stars } from '../ProductCard/ProductCard';
import './QuickViewModal.css';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { orderOnWhatsApp } = useApp();

  return (
    <div
      className="quick-view-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="quick-view-modal">
        <div className="quick-view-img">
          <img
            src={product.img}
            alt={product.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = product.imgFallback;
            }}
          />
        </div>
        <div className="quick-view-body">
          <div className="quick-view-category">{product.categoryLabel}</div>
          <h3 className="quick-view-title">{product.name}</h3>
          <div className="quick-view-rating">
            <Stars rating={product.rating} /> <span>({product.reviews} reviews)</span>
          </div>
          <div className="quick-view-price">
            <span className="price-now">₹{formatPrice(product.price)}</span>
            <span className="price-old">₹{formatPrice(product.oldPrice)}</span>
          </div>
          <ul className="quick-view-specs">
            <li>📐 <strong>Size:</strong> {product.size}</li>
            <li>🌿 <strong>Material:</strong> {product.eco ? 'Eco-Friendly Clay' : 'Premium River Clay'}</li>
            <li>🎨 <strong>Finish:</strong> Hand-painted with natural colours</li>
            <li>📦 <strong>Delivery:</strong> Pan-India, 7–14 days</li>
          </ul>
          <div className="quick-view-actions">
            <button
              className="btn-primary-custom quick-view-whatsapp-btn"
              onClick={() => {
                orderOnWhatsApp(product);
                onClose();
              }}
            >
              <i className="fa-brands fa-whatsapp me-2"></i> Order on WhatsApp
            </button>
            <Link to="/contact" className="btn-outline-custom" onClick={onClose}>
              Custom Order
            </Link>
          </div>
        </div>
        <button className="quick-view-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default QuickViewModal;
