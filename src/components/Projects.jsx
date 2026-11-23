import Icon from './Icons';
import ProjectArt from './ProjectArt';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const { title, description, tech, repo, demo, image, art, size, id } = project;
  const hasLinks = Boolean(repo || demo);

  return (
    <Reveal as="div" delay={(index % 3) * 80} className={`project project--${size}`}>
      <article className="project-card" tabIndex={hasLinks ? undefined : 0} aria-labelledby={`${id}-title`}>
        <span className="project-card__border" aria-hidden="true" />

        <div className="project-card__media">
          <div className="project-card__visual">
            {image ? (
              <img src={image} alt={`Screenshot of ${title}`} loading="lazy" decoding="async" />
            ) : (
              <ProjectArt kind={art} uid={id} />
            )}
            <span className="project-card__index mono" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="project-card__details">
            <p>{description}</p>
          </div>
        </div>

        <div className="project-card__body">
          <h3 id={`${id}-title`} className="project-card__title">
            {title}
          </h3>
          <ul className="tag-list" aria-label={`Technologies used in ${title}`}>
            {tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          {hasLinks ? (
            <div className="project-card__links">
              {repo ? (
                <a href={repo} target="_blank" rel="noopener noreferrer" className="link-btn">
                  <Icon name="github" size={16} />
                  Code
                  <span className="sr-only"> for {title} (opens in a new tab)</span>
                </a>
              ) : null}
              {demo ? (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="link-btn link-btn--accent">
                  <Icon name="external" size={16} />
                  Live demo
                  <span className="sr-only"> of {title} (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Selected projects"
          id="projects-title"
          title={
            <>
              Things I've <span className="text-gradient">designed and built.</span>
            </>
          }
          intro="Each card shows what I built and the technologies behind it. Code and live links appear wherever a public repository or deployment exists."
        />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal className="projects__more">
          <a href="https://github.com/Kamalimurugesan12" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            <Icon name="github" size={18} />
            See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
