import { profile } from '../data.js';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">Let’s build something that has to work.</h2>
      <p className="section-sub">
        Open to SDE roles and backend-heavy full stack work. Fastest way to reach me is email.
      </p>

      <div className="contact-links">
        <a href={`mailto:${profile.email}`} className="contact-link">
          <span className="contact-link-label">EMAIL</span>
          <span className="contact-link-value">{profile.email}</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link-label">GITHUB</span>
          <span className="contact-link-value">github.com/{profile.githubUsername}</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
          <span className="contact-link-label">LINKEDIN</span>
          <span className="contact-link-value">{profile.linkedin.replace('https://', '')}</span>
        </a>
      </div>
    </section>
  );
}
