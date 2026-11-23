import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useSpotlight from '../hooks/useSpotlight';
import { about, profile } from '../data/portfolioData';

export default function About() {
  const spotlight = useSpotlight();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="About me"
          id="about-title"
          title={
            <>
              Building useful software, <span className="text-gradient">one project at a time.</span>
            </>
          }
        />

        <div className="about__grid">
          <Reveal className="about__visual">
            <div className="about__photo-wrap">
              <span className="about__shape about__shape--a" aria-hidden="true" />
              <span className="about__shape about__shape--b" aria-hidden="true" />
              <div className="about__frame">
                <picture>
                  <source type="image/webp" srcSet={`${profile.photo.webpSmall} 480w, ${profile.photo.webp} 900w`} sizes="(max-width: 960px) 70vw, 380px" />
                  <img
                    className="about__photo"
                    src={profile.photo.jpg}
                    alt={profile.photo.alt}
                    width="900"
                    height="1166"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
              <p className="about__caption">
                <span className="mono">B.E. CSE</span>
                <span aria-hidden="true">·</span>
                <span className="mono">Class of 2028</span>
              </p>
            </div>
          </Reveal>

          <div className="about__content">
            <Reveal delay={60}>
              {about.paragraphs.map((p) => (
                <p key={p} className="about__text">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="about__cards">
              {about.cards.map((card, i) => (
                <Reveal key={card.title} delay={80 + i * 70}>
                  <article className="info-card spot" onPointerMove={spotlight}>
                    <span className="info-card__icon">
                      <Icon name={card.icon} size={20} />
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <ul className="highlight-list" aria-label="Personal highlights">
                {about.highlights.map((h) => (
                  <li key={h}>
                    <Icon name="check" size={16} />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
