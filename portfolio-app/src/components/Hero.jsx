import { useEffect, useRef, useState } from 'react';
import { profile, heroStats } from '../data.js';
import './Hero.css';

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1100;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span className="stat-value" ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-badge">PORTFOLIO ORIGINAL</span>

        <h1 className="hero-title">{profile.tagline}</h1>

        <div className="hero-info-row">
          <span className="hero-match">98% Match</span>
          <span>{profile.role}</span>
          <span className="hero-rating">B.TECH &apos;26</span>
          <span>{profile.location}</span>
        </div>

        <p className="hero-sub">{profile.summary}</p>

        <div className="hero-stat-strip" role="group" aria-label="Engineering metrics">
          {heroStats.map((s, i) => (
            <div className="stat-cell" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            <span className="btn-play">&#9654;</span> View Projects
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">
            <span className="btn-info">&#9432;</span> Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
