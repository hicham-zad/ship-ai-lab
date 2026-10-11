'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Fades children up once when they scroll into view. Content is visible without JS and with reduced motion. */
export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      const timer = setTimeout(() => setShown(true), 0);
      return () => clearTimeout(timer);
    }
    // only hide content that is currently below the fold
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      const timer = setTimeout(() => setShown(true), 0);
      return () => clearTimeout(timer);
    }
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pcx-reveal${armed && !shown ? ' pcx-hidden' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
