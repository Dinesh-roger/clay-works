import React from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  as?: 'div' | 'section';
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Wraps children in a div that fades/slides into view once it scrolls
 * into the viewport, using the same "reveal" / "reveal-left" / "reveal-right"
 * CSS classes as the original site.
 */
const Reveal: React.FC<RevealProps> = ({
  as = 'div',
  className = '',
  direction = 'up',
  delay = 0,
  children,
  style,
}) => {
  const ref = useReveal<HTMLDivElement>();
  const baseClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
  const Tag = as as any;

  return (
    <Tag ref={ref} className={`${baseClass} ${className}`.trim()} style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </Tag>
  );
};

export default Reveal;