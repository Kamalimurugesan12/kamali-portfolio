import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useSpotlight from '../hooks/useSpotlight';
import { education } from '../data/portfolioData';

export default function Education() {
  const spotlight = useSpotlight();

  return (
    <section id="education" className="section section--alt" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow="Education"
          id="education-title"
          title={
            <>
              Academic <span className="text-gradient">foundation.</span>
            </>
          }
        />

        <div className="edu__grid">
          {education.map((e, i) => (
            <Reveal key={e.id} delay={i * 100}>
              <article className="edu-card spot" onPointerMove={spotlight}>
                <div className="edu-card__top">
                  <span className="edu-card__icon">
                    <Icon name={e.current ? 'cap' : 'book'} size={22} />
                  </span>
                  {e.current ? <span className="edu-card__badge">Currently pursuing</span> : null}
                </div>
                <h3>{e.institution}</h3>
                <p className="edu-card__degree">{e.degree}</p>
                {e.period ? <p className="edu-card__meta mono">{e.period}</p> : null}
                <p className="edu-card__score">{e.score}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
