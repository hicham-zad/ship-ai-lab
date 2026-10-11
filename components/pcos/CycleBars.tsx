'use client';

import { useEffect, useRef, useState } from 'react';

/** Bars grow when scrolled into view. Cycles outside 21–35 days are marked, exactly as the app does. */
export default function CycleBars({ lengths }: { lengths: number[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [go, setGo] = useState(false);
  const max = 45;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      const timer = setTimeout(() => setGo(true), 0);
      return () => clearTimeout(timer);
    }
    const io = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { setGo(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // plot area is 170 - 28 padding - 22 label ≈ 118px; 21 and 35 day guides sit at their true height
  const plot = 118;
  const guide = (d: number) => 18 + 22 + (plot * d) / max;
  return (
    <div ref={ref} className={`pcx-cycles${go ? ' go' : ''}`} role="img" aria-label={`Cycle lengths in days: ${lengths.join(', ')}`}>
      <div className="pcx-band" style={{ bottom: guide(35) }}>35</div>
      <div className="pcx-band" style={{ bottom: guide(21) }}>21</div>
      {lengths.map((l, i) => (
        <div key={i} className={`pcx-cyc${l < 21 || l > 35 ? ' out' : ''}`}>
          {l}
          <span style={{ ['--h' as string]: `${(plot * l) / max}px`, transitionDelay: `${i * 110}ms` }} />
        </div>
      ))}
    </div>
  );
}
