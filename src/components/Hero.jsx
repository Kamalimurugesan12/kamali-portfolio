import { useRef } from 'react';
import Icon from './Icons';
import MagneticButton from './MagneticButton';
import CountUp from './CountUp';
import useTyping from '../hooks/useTyping';
import { heroStats, profile } from '../data/portfolioData';

const FLOATING = [
  { label: 'React', className: 'chip-float--1' },
  { label: 'Spring Boot', className: 'chip-float--2' },
  { label: 'FastAPI', className: 'chip-float--3' },
];

export default function Hero() {
  const role = useTyping(profile.roles);
  const stage = useRef(null);

  // Subtle pointer parallax for the portrait and floating chips.
  const onMove = (e) => {
    const el = stage.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--px', ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    el.style.setProperty('--py', ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };
  const onLeave = () => {
    stage.current?.style.setProperty('--px', '0');
    stage.current?.style.setProperty('--py', '0');
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('projects')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Decorative geometric background */}
      <div className="hero__bg" aria-hidden="true">
        <span className="geo geo--ring" />
        <span className="geo geo--square" />
        <span className="geo geo--plus" />
        <span className="geo geo--dots" />
        <span className="geo geo--tri" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="status-pill">
            <span className="status-pill__dot" aria-hidden="true" />
            {profile.status}
          </p>

          <p className="hero__hello">Hello, I'm</p>
          <h1 id="hero-title" className="hero__name">
            Kamali <span className="hero__name-accent">M</span>
          </h1>

          <p className="hero__role" aria-live="off">
            <span className="hero__role-prefix">&gt;</span>
            <span className="hero__role-text">{role}</span>
            <span className="caret" aria-hidden="true" />
            <span className="sr-only">{profile.title}</span>
          </p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <MagneticButton href="#projects" onClick={scrollToProjects}>
              View Projects
              <Icon name="arrowRight" size={18} />
            </MagneticButton>
            <MagneticButton href={profile.resume} download={profile.resumeFileName} variant="outline">
              <Icon name="download" size={18} />
              Download Resume
            </MagneticButton>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile (opens in a new tab)">
              <Icon name="github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile (opens in a new tab)">
              <Icon name="linkedin" />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Send an email">
              <Icon name="mail" />
            </a>
            <span className="hero__social-line" aria-hidden="true" />
          </div>

          <dl className="hero__stats">
            {heroStats.map((s) => (
              <div key={s.label} className="stat">
                <dt>{s.label}</dt>
                <dd>
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__stage" ref={stage} onPointerMove={onMove} onPointerLeave={onLeave}>
          <div className="portrait">
            <div className="portrait__glow" aria-hidden="true" />
            <div className="portrait__frame gradient-border">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${profile.photo.webpSmall} 480w, ${profile.photo.webp} 900w`}
                  sizes="(max-width: 960px) min(300px, 70vw), 440px"
                />
                <img
                  src={profile.photo.jpg}
                  alt={profile.photo.alt}
                  width="900"
                  height="1166"
                  fetchpriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            {FLOATING.map((c) => (
              <span key={c.label} className={`chip-float ${c.className}`} aria-hidden="true">
                {c.label}
              </span>
            ))}
            <span className="portrait__tag" aria-hidden="true">
              <Icon name="code" size={14} /> Full-stack
            </span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <span className="scroll-cue__mouse" aria-hidden="true" />
        <span>Scroll</span>
      </a>
    </section>
  );
}
