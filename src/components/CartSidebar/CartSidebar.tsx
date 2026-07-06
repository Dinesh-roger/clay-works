import React from 'react';
import { useApp } from '../../context/AppContext';
import { formatPrice } from '../../utils/format';
import './CartSidebar.css';

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, cartTotal, checkout } = useApp();

  return (
    <>
      <div className={`cart-sidebar${isCartOpen ? ' open' : ''}`}>
        <div className="cart-header">
          <h5><i className="fa-solid fa-cart-shopping me-2"></i>Your Cart</h5>
          <button onClick={closeCart}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <i className="fa-solid fa-gopuram"></i>
              <p>Your cart is empty.<br />Add a divine idol!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.img}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.imgFallback;
                  }}
                />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{formatPrice(item.price)} × {item.qty}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-body)' }}>
                    {item.size}
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} title="Remove">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{formatPrice(cartTotal)}</span>
            </div>
            <button className="btn-primary-custom w-100" onClick={checkout}>
              <i className="fa-solid fa-credit-card me-2"></i>Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <div className={`cart-overlay${isCartOpen ? ' active' : ''}`} onClick={closeCart}></div>
    </>
  );
};

export default CartSidebar;
