import { skills, education, achievements } from '../data.js';
import { useReveal } from '../useReveal.js';
import './Skills.css';

export default function Skills() {
  const [ref, visible] = useReveal();
  return (
    <section id="skills" className="section">
      <div className="section-label">Skills & Tools</div>
      <h2 className="section-title">Tools I reach for</h2>
      <p className="section-sub">
        Grouped by what they’re for, not alphabetized — because that’s how I actually think about them.
      </p>

      <div ref={ref} className={`skills-grid reveal ${visible ? 'is-visible' : ''}`}>
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <span className="skill-group-label mono">{group}</span>
            <div className="skill-chips">
              {items.map((item) => (
                <span className="skill-chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="edu-achieve-grid">
        <div className="edu-block">
          <span className="section-label" style={{ marginBottom: '12px' }}>EDUCATION</span>
          {education.map((e) => (
            <div key={e.school} className="edu-entry">
              <strong>{e.school}</strong>
              <span>{e.degree}</span>
              <span className="mono edu-meta">{e.period} · {e.detail}</span>
            </div>
          ))}
        </div>
        <div className="achieve-block">
          <span className="section-label" style={{ marginBottom: '12px' }}>ACHIEVEMENTS</span>
          <ul className="achieve-list">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
