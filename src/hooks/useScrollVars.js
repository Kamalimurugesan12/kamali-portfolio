import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Publishes scroll data as CSS custom properties on <html>:
 *   --scroll     : pixels scrolled (used for subtle parallax)
 *   --scroll-pct : 0 to 1 progress through the page
 * Throttled with requestAnimationFrame.
 */
export default function useScrollVars() {
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const update = () => {
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const y = window.scrollY;
      root.style.setProperty('--scroll-pct', String(Math.min(1, y / max)));
      root.style.setProperty('--scroll', reduced ? '0' : String(Math.min(y, 1600)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reduced]);
}
