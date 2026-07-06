import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/#categories', label: 'Collections' },
  { to: '/products', label: 'Idols' },
  { to: '/process', label: 'Craft Process' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const CATEGORY_OPTIONS = ['All', '3–5 Feet', '6–8 Feet', '9–11 Feet', '12–13 Feet', 'Custom'];

const Navbar: React.FC = () => {
  const { cartCount, wishlist, toggleCart, showToast } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeSection, setActiveSection] = useState<'home' | 'categories'>('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: on the home page, track whether the "Collections" section
  // is in view so we can highlight Home vs Collections correctly — both
  // point to path "/", so plain route-matching can't tell them apart.
  useEffect(() => {
    if (location.pathname !== '/') return;

    setActiveSection('home');
    const el = document.getElementById('categories');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActiveSection(entry.isIntersecting ? 'categories' : 'home'),
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleSearch = () => {
    const query = searchValue.trim();
    if (!query) return;
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  const handleWishlistClick = () => {
    if (wishlist.length === 0) {
      showToast('Your wishlist is empty. Click ❤️ on any idol to add!');
    } else {
      showToast(`You have ${wishlist.length} item(s) in your wishlist! ❤️`);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top${scrolled ? ' scrolled' : ''}`} id="mainNav">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <div className="brand-logo-icon">
            <i className="fa-solid fa-gopuram"></i>
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">AasaiThambi</span>
            <span className="brand-sub">Clay Works</span>
          </div>
        </Link>

        <div className="search-wrapper d-none d-lg-flex flex-grow-1 mx-4">
          <div className="search-category-select">
            <select>
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search Vinayagar Idols, Sizes, Designs..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="nav-icons d-flex align-items-center gap-3 ms-auto">
          <div className="nav-icon-wrap d-none d-md-flex" onClick={() => showToast('Login / Register feature coming soon! 🙏')}>
            <i className="fa-regular fa-user"></i>
            <span>Account</span>
          </div>
          <div className="nav-icon-wrap d-none d-md-flex" onClick={handleWishlistClick}>
            <i className="fa-regular fa-heart"></i>
            <span>Wishlist <span className="badge-count">{wishlist.length}</span></span>
          </div>
          <div className="nav-icon-wrap cart-icon-wrap" onClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart <span className="badge-count">{cartCount}</span></span>
          </div>
          <button className="navbar-toggler ms-2" type="button" onClick={() => setMenuOpen((v) => !v)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className={`collapse navbar-collapse mt-2 mt-lg-0${menuOpen ? ' show' : ''}`} id="mainMenu">
          <ul className="navbar-nav mx-auto gap-1 gap-lg-0">
            {NAV_LINKS.map((link) => {
              const basePath = link.to.split('#')[0] || '/';
              const isHomeLink = link.label === 'Home';
              const isCollectionsLink = link.label === 'Collections';
              return (
                <li className="nav-item" key={link.label}>
                  <NavLink
                    className={({ isActive }) => {
                      let active = isActive;
                      if (location.pathname === '/') {
                        if (isHomeLink) active = activeSection === 'home';
                        if (isCollectionsLink) active = activeSection === 'categories';
                      }
                      return `nav-link${active ? ' active' : ''}`;
                    }}
                    to={link.to}
                    end={basePath === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="search-wrapper d-flex d-lg-none mt-2">
            <input
              type="text"
              className="search-input"
              placeholder="Search idols..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;