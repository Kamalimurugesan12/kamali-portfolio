import Reveal from './Reveal';

export default function SectionHeading({ index, eyebrow, title, intro, id }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow__num">{index}</span>
        <span className="eyebrow__line" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </Reveal>
  );
}
