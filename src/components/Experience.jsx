import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useSpotlight from '../hooks/useSpotlight';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const spotlight = useSpotlight();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Experience & internships"
          id="experience-title"
          title={
            <>
              Experience from <span className="text-gradient">two internships.</span>
            </>
          }
        />

        <ol className="timeline">
          {experiences.map((exp, i) => (
            <li key={exp.id} className="timeline__item">
              <span className="timeline__node" aria-hidden="true" />
              <Reveal delay={i * 100}>
                <article className="exp-card spot" onPointerMove={spotlight}>
                  <header className="exp-card__head">
                    <div>
                      <p className="exp-card__org">{exp.organization}</p>
                      <h3 className="exp-card__role">{exp.role}</h3>
                    </div>
                    {exp.duration ? <p className="exp-card__duration mono">{exp.duration}</p> : null}
                  </header>

                  <p className="exp-card__summary">{exp.summary}</p>

                  <ul className="tag-list" aria-label={`Technologies used at ${exp.organization}`}>
                    {exp.tech.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="exp-card__cols">
                    <div>
                      <h4>Responsibilities</h4>
                      <ul className="bullets">
                        {exp.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Key contributions</h4>
                      <ul className="bullets">
                        {exp.contributions.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
