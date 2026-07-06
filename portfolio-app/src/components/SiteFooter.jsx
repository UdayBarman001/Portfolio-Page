import { profile } from '../data.js';
import './SiteFooter.css';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-status mono">
          <span className="site-footer-dot" aria-hidden="true" />
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>

        <div className="site-footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#hero">Back to top ↑</a>
        </div>

        <div className="site-footer-meta mono">
          <span>© {year} {profile.name}</span>
          <span className="site-footer-divider">/</span>
          <span>Built with React + Vite</span>
        </div>
      </div>
    </footer>
  );
}
