import { projects, profile } from '../data.js';
import { useReveal } from '../useReveal.js';
import { useGithubRepos, matchRepo } from '../useGithubRepos.js';
import './Projects.css';

function ProjectCard({ project, repos }) {
  const liveRepo = matchRepo(repos, project.repoHint);
  const githubUrl = liveRepo ? liveRepo.html_url : project.links.github;

  return (
    <div className={`project-card accent-${project.tagColor}`}>
      <div className="project-card-accent" />
      <div className="project-card-body">
        <div className="project-card-head">
          <span className="project-tag">{project.tag}</span>
          <span className="stack-type-badge">{project.stackType}</span>
        </div>

        <h3 className="project-name">{project.name}</h3>
        <p className="project-oneliner">{project.oneLiner}</p>

        <div className="project-metrics">
          {project.metrics.map((m) => (
            <div className="project-metric" key={m.label}>
              <span className="project-metric-value">{m.value}</span>
              <span className="project-metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="project-stack">
          {project.stack.slice(0, 5).map((t) => (
            <span className="stack-chip" key={t}>{t}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="project-link">
            <span className="btn-play">&#9654;</span> GitHub
            {liveRepo && typeof liveRepo.stargazers_count === 'number' && liveRepo.stargazers_count > 0 && (
              <span className="project-link-stars"> &#9733; {liveRepo.stargazers_count}</span>
            )}
          </a>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link project-link-secondary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { repos } = useGithubRepos(profile.githubUsername);
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className={`row-section reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="row-header">
        <div className="section-label">Production Systems</div>
        <h2 className="section-title">Things I&rsquo;ve shipped</h2>
        <p className="section-sub">
          Deployed systems, not tutorial clones &mdash; scroll for the metrics, trade-offs, and stack behind each one.
        </p>
      </div>
      <div className="project-row">
        {projects.map((p) => (
          <ProjectCard project={p} repos={repos} key={p.id} />
        ))}
      </div>
    </section>
  );
}
