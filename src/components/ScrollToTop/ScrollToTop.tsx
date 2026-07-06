import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Mirrors normal browser navigation behaviour for a single-page app:
 * scrolls to top on route change, or to the matching element when the
 * URL contains a hash (e.g. /#categories).
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
