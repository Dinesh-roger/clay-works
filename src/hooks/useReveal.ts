import { useEffect, useRef } from 'react';

/**
 * Adds a "visible" class to the element once it scrolls into view,
 * replicating the IntersectionObserver reveal animation from the
 * original script.js.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
