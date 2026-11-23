import Icon from './Icons';
import CountUp from './CountUp';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useSpotlight from '../hooks/useSpotlight';
import { achievements } from '../data/portfolioData';

const STATS = [
  { value: 300, decimals: 0, suffix: '+', label: 'LeetCode problems solved' },
  { value: 8.6, decimals: 1, suffix: '', label: 'Current CGPA' },
  { value: 95.3, decimals: 1, suffix: '%', label: 'Class XII' },
  { value: 94.6, decimals: 1, suffix: '%', label: 'Class X' },
];

export default function Achievements() {
  const spotlight = useSpotlight();

  return (
    <section id="achievements" className="section" aria-labelledby="achievements-title">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Achievements & certifications"
          id="achievements-title"
          title={
            <>
              Milestones <span className="text-gradient">along the way.</span>
            </>
          }
        />

        <Reveal>
          <dl className="stat-strip">
            {STATS.map((s) => (
              <div key={s.label} className="stat-strip__item">
                <dt>{s.label}</dt>
                <dd>
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80}>
              <article className={`ach-card spot ${i === 0 ? 'ach-card--featured gradient-border' : ''}`} onPointerMove={spotlight}>
                {i === 0 ? <span className="ach-card__badge">Featured</span> : null}
                <span className="ach-card__icon">
                  <Icon name={a.icon} size={22} />
                </span>
                <p className="ach-card__tag mono">{a.tag}</p>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
