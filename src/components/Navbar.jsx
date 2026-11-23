import { useEffect, useState } from 'react';
import Icon from './Icons';
import MagneticButton from './MagneticButton';
import useActiveSection from '../hooks/useActiveSection';
import { navLinks, profile } from '../data/portfolioData';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  // Close the menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <a href="#skip" className="skip-link">
        Skip to content
      </a>
      <nav className="navbar__inner container" aria-label="Primary">
        <a href="#home" className="logo" aria-label={`${profile.name}, back to top`} onClick={() => setOpen(false)}>
          <span className="logo__mark">{profile.initials}</span>
          <span className="logo__text">
            Kamali<span className="logo__dot">.</span>
          </span>
        </a>

        <ul id="primary-menu" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${active === link.id ? 'is-active' : ''}`}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href={profile.resume} download={profile.resumeFileName} className="btn btn--primary">
              <Icon name="download" size={18} />
              Download Resume
            </a>
          </li>
        </ul>

        <div className="navbar__actions">
          <MagneticButton
            href={profile.resume}
            download={profile.resumeFileName}
            variant="outline"
            className="navbar__resume"
            strength={0.2}
          >
            <Icon name="download" size={16} />
            Resume
          </MagneticButton>
          <button
            type="button"
            className="hamburger"
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
