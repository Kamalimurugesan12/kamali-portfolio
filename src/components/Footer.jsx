import Icon from './Icons';
import { footerLinks, profile } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="logo" aria-label={`${profile.name}, back to top`}>
            <span className="logo__mark">{profile.initials}</span>
            <span className="logo__text">
              {profile.name}
              <span className="logo__dot">.</span>
            </span>
          </a>
          <p>{profile.title} · B.E. Computer Science and Engineering</p>
          <div className="footer__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn--sm" aria-label="GitHub profile (opens in a new tab)">
              <Icon name="github" size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn--sm" aria-label="LinkedIn profile (opens in a new tab)">
              <Icon name="linkedin" size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn icon-btn--sm" aria-label="Send an email">
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <p className="footer__heading mono">Quick links</p>
          <ul>
            {footerLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta">
          <p className="footer__heading mono">Resume</p>
          <a href={profile.resume} download={profile.resumeFileName} className="btn btn--outline">
            <Icon name="download" size={16} />
            Download PDF
          </a>
          <button type="button" className="footer__top" onClick={toTop}>
            Back to top <Icon name="arrowUp" size={16} />
          </button>
        </div>
      </div>

      <div className="container footer__bar">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="mono">Designed and built with React</p>
      </div>
    </footer>
  );
}
