import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { CartItem, Product } from '../types';
import { formatPrice } from '../utils/format';

const OWNER_NUMBER = '919676791734';

interface AppContextValue {
  cart: CartItem[];
  wishlist: number[];
  isCartOpen: boolean;
  toastMessage: string | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: number) => boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  cartCount: number;
  cartTotal: number;
  showToast: (message: string) => void;
  orderOnWhatsApp: (product: Product) => void;
  checkout: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((v) => !v), []);

  const addToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          showToast(`Added another ${product.name} to cart!`);
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }
        showToast(`${product.name} added to cart! 🛒`);
        return [...prev, { ...product, qty: 1 }];
      });
      openCart();
    },
    [openCart, showToast]
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      setCart((prev) => prev.filter((item) => item.id !== productId));
      showToast('Item removed from cart.');
    },
    [showToast]
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      setWishlist((prev) => {
        if (prev.includes(product.id)) {
          showToast('Removed from wishlist.');
          return prev.filter((id) => id !== product.id);
        }
        showToast(`${product.name} added to wishlist! ❤️`);
        return [...prev, product.id];
      });
    },
    [showToast]
  );

  const isWishlisted = useCallback((productId: number) => wishlist.includes(productId), [wishlist]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);

  const orderOnWhatsApp = useCallback((product: Product) => {
    const baseURL = window.location.origin + '/';
    const imageURL = baseURL + product.img.replace(/^\//, '');

    const waMessage =
      '🙏 *Order Enquiry – AasaiThambi Clay Works*\n\n' +
      `🛕 *Idol:* ${product.name}\n` +
      `📏 *Size:* ${product.size}\n` +
      `💰 *Price:* ₹${formatPrice(product.price)}\n` +
      `🖼️ *Photo:* ${imageURL}\n` +
      '\nI am interested in this idol. Please share more details & confirm availability.\n' +
      '\n_Sent from AasaiThambi website_';

    const waURL = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(waMessage)}`;
    window.open(waURL, '_blank');
    showToast('📲 Opening WhatsApp — just press Send to place your order!');
  }, [showToast]);

  const checkout = useCallback(() => {
    if (cart.length === 0) {
      showToast('Your cart is empty!');
      return;
    }
    showToast(`🙏 Thank you! Redirecting to payment for ₹${formatPrice(cartTotal)}...`);
    setTimeout(() => {
      closeCart();
    }, 2000);
  }, [cart, cartTotal, closeCart, showToast]);

  const value: AppContextValue = {
    cart,
    wishlist,
    isCartOpen,
    toastMessage,
    addToCart,
    removeFromCart,
    toggleWishlist,
    isWishlisted,
    toggleCart,
    openCart,
    closeCart,
    cartCount,
    cartTotal,
    showToast,
    orderOnWhatsApp,
    checkout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an AppProvider');
  return ctx;
}
