export type BadgeType = 'bestseller' | 'new' | 'eco';

export interface Product {
  id: number;
  name: string;
  category: string;
  categoryLabel: string;
  size: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  badge: BadgeType;
  badgeLabel: string;
  eco: boolean;
  img: string;
  imgFallback: string;
}

export interface CartItem extends Product {
  qty: number;
}
