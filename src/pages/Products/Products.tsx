import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import QuickViewModal from '../../components/QuickViewModal/QuickViewModal';
import { PRODUCTS } from '../../data/products';
import type { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import './Products.css';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: '3–5 Ft', value: '3-5' },
  { label: '6–8 Ft', value: '6-8' },
  { label: '9–11 Ft', value: '9-11' },
  { label: '12–13 Ft', value: '12-13' },
];

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { showToast } = useApp();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const urlFilter = searchParams.get('filter') || 'all';
  const urlSearch = searchParams.get('search') || '';
  const [activeFilter, setActiveFilter] = useState(urlFilter);

  useEffect(() => {
    setActiveFilter(urlFilter);
  }, [urlFilter]);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (urlSearch) {
      const q = urlSearch.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.size.toLowerCase().includes(q)
      );
    } else if (activeFilter !== 'all') {
      list = list.filter((p) => p.category === activeFilter);
    }
    return list;
  }, [activeFilter, urlSearch]);

  useEffect(() => {
    if (urlSearch) {
      showToast(`Found ${filtered.length} idol(s) matching "${urlSearch}"`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlSearch]);

  const handleFilterClick = (value: string) => {
    setActiveFilter(value);
    const next = new URLSearchParams();
    if (value !== 'all') next.set('filter', value);
    setSearchParams(next);
  };

  return (
    <section id="products" className="products-section section-gap">
      <div className="container">
        <div className="section-header d-flex justify-content-between align-items-end flex-wrap gap-3 mb-5">
          <div>
            <span className="section-tag">Featured Idols</span>
            <h2 className="section-title mb-0">Our Premium Vinayagar Idols</h2>
          </div>
          {!urlSearch && (
            <div className="d-flex gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                  onClick={() => handleFilterClick(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {urlSearch && (
          <p className="mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-mid)' }}>
            Showing results for &quot;<strong>{urlSearch}</strong>&quot; —{' '}
            <button
              className="filter-btn"
              style={{ display: 'inline-block' }}
              onClick={() => setSearchParams({})}
            >
              Clear search
            </button>
          </p>
        )}

        <div className="row g-4">
          {filtered.length === 0 ? (
            <div className="col-12 text-center py-5">
              <i
                className="fa-solid fa-gopuram"
                style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.3 }}
              ></i>
              <p style={{ color: 'var(--text-light)', fontFamily: 'var(--font-body)', marginTop: 16 }}>
                No idols found in this category. <br />
                <a href="/contact" style={{ color: 'var(--gold)' }}>Request a custom order!</a>
              </p>
            </div>
          ) : (
            filtered.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
                delay={index * 0.07}
              />
            ))
          )}
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </section>
  );
};

export default Products;
