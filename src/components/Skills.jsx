import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useSpotlight from '../hooks/useSpotlight';
import { professionalSkills, skillCategories } from '../data/portfolioData';

export default function Skills() {
  const spotlight = useSpotlight();

  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          id="skills-title"
          title={
            <>
              The tools I <span className="text-gradient">build with.</span>
            </>
          }
          intro="Grouped by what I use them for, based on my internships and projects."
        />

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 80}>
              <article className="skill-card spot" onPointerMove={spotlight}>
                <header className="skill-card__head">
                  <span className="skill-card__icon">
                    <Icon name={cat.icon} size={20} />
                  </span>
                  <h3>{cat.title}</h3>
                </header>
                <ul className="skill-list">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="skill-chip">
                      <span className="skill-chip__badge" aria-hidden="true">
                        {s.badge}
                      </span>
                      <span className="skill-chip__name">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="soft-skills">
          <h3 className="soft-skills__title">Professional skills</h3>
          <ul className="soft-skills__list">
            {professionalSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
