export function formatPrice(num: number): string {
  return num.toLocaleString('en-IN');
}

export function discountPercent(price: number, oldPrice: number): number {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}
