import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className={`back-to-top${visible ? ' visible' : ''}`} onClick={scrollToTop}>
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
