import { useEffect, useState } from 'react';
import { profile } from '../data.js';
import './Navbar.css';

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'repos', label: 'Repositories' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={handleNavClick}>
          <span className="navbar-name">{profile.name.split(' ')[0].toUpperCase()}</span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="navbar-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${profile.email}`} className="navbar-cta">
          Hire Me
        </a>

        <button
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile-panel ${open ? 'is-open' : ''}`}>
        <nav className="navbar-mobile-links" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="navbar-mobile-link" onClick={handleNavClick}>
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="navbar-mobile-link navbar-mobile-cta"
            onClick={handleNavClick}
          >
            Hire Me →
          </a>
        </nav>
      </div>
    </header>
  );
}
