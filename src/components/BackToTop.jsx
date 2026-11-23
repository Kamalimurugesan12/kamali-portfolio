import { useEffect, useState } from 'react';
import Icon from './Icons';

/** Floating back-to-top button with a scroll-progress ring. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      className={`to-top ${show ? 'is-shown' : ''}`}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <svg className="to-top__ring" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="20" className="to-top__track" />
        <circle cx="22" cy="22" r="20" className="to-top__progress" />
      </svg>
      <Icon name="arrowUp" size={18} />
    </button>
  );
}
