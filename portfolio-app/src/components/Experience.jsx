import { experience } from '../data.js';
import { useReveal } from '../useReveal.js';
import './Experience.css';

const typeColors = {
  perf: 'blue',
  test: 'green',
  ci: 'amber',
  feat: 'blue',
  process: 'green',
};

function LogLine({ entry, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`log-line reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className={`log-type type-${typeColors[entry.type]}`}>{entry.type}</span>
      <p className="log-text">{entry.text}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label">Experience</div>
      <h2 className="section-title">{experience.role}</h2>
      <p className="section-sub">
        <span className="mono">{experience.company}</span> · {experience.period} · {experience.location}
      </p>
      <div className="log-list">
        {experience.log.map((entry, i) => (
          <LogLine entry={entry} index={i} key={i} />
        ))}
      </div>
    </section>
  );
}
