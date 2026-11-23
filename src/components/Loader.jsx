import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
import { profile } from '../data/portfolioData';

/** Custom loading screen: a monogram that draws itself, then lifts away. */
export default function Loader({ onDone }) {
  const reduced = useReducedMotion();
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.classList.add('is-loading');
    const hold = reduced ? 250 : 1500;
    const exit = reduced ? 0 : 650;
    const t1 = setTimeout(() => setLeaving(true), hold);
    const t2 = setTimeout(() => {
      setGone(true);
      document.body.classList.remove('is-loading');
      onDone?.();
    }, hold + exit);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.classList.remove('is-loading');
    };
  }, [reduced, onDone]);

  if (gone) return null;

  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="loader__mark">
        <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
          <defs>
            <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4d8dff" />
              <stop offset="1" stopColor="#8b7bff" />
            </linearGradient>
          </defs>
          <rect className="loader__ring" x="6" y="6" width="108" height="108" rx="28" />
        </svg>
        <span className="loader__initials">{profile.initials}</span>
      </div>
      <p className="loader__text">Loading portfolio</p>
      <span className="loader__bar" aria-hidden="true" />
    </div>
  );
}
