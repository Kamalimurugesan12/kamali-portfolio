import { useEffect, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

const INTERACTIVE = 'a, button, input, textarea, [role="button"], .project-card, .spot';

/**
 * Subtle cursor-follow effect for desktop: a small dot plus a trailing ring that
 * grows over interactive elements. The native cursor stays visible.
 */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let frame;
    let visible = false;

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        dot.current?.classList.add('is-on');
        ring.current?.classList.add('is-on');
      }
      const hot = e.target instanceof Element && e.target.closest(INTERACTIVE);
      ring.current?.classList.toggle('is-hot', Boolean(hot));
    };
    const onLeave = () => {
      visible = false;
      dot.current?.classList.remove('is-on');
      ring.current?.classList.remove('is-on');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced]);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
