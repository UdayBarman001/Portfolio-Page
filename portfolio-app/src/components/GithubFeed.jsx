import { useState } from 'react';
import { profile } from '../data.js';
import { useGithubRepos } from '../useGithubRepos.js';
import { useReveal } from '../useReveal.js';
import './GithubFeed.css';

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#e8a33d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Dockerfile: '#5ea8ff',
  Shell: '#89e051',
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card">
      <div className="repo-card-top">
        <span
          className="repo-lang-dot"
          style={{ background: languageColors[repo.language] || '#8a93a6' }}
        />
        <span className="repo-lang-name">{repo.language || 'Misc'}</span>
      </div>
      <h4 className="repo-name">{repo.name}</h4>
      <p className="repo-desc">{repo.description || 'No description provided.'}</p>
      <div className="repo-card-foot">
        {repo.stargazers_count > 0 && <span>&#9733; {repo.stargazers_count}</span>}
        <span className="repo-updated">synced {timeAgo(repo.pushed_at)}</span>
      </div>
    </a>
  );
}

function FeedSkeleton() {
  return (
    <div className="repo-skeleton-row" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div className="repo-skeleton-card" key={i} />
      ))}
    </div>
  );
}

export default function GithubFeed() {
  const { repos, loading, error } = useGithubRepos(profile.githubUsername);
  const [ref, visible] = useReveal();

  return (
    <section id="repos" className={`row-section reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="row-header">
        <div className="section-label">
          <span className={`live-dot ${loading ? 'is-syncing' : ''}`} />
          Live From GitHub
        </div>
        <h2 className="section-title">More on my profile</h2>
        <p className="section-sub">
          This row calls the GitHub API for{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className="section-sub-link">
            @{profile.githubUsername}
          </a>{' '}
          on every visit &mdash; no copy-pasted list.
        </p>
      </div>

      {loading && <FeedSkeleton />}

      {error && (
        <div className="repo-error">
          <p>{error}</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="project-link">
            View directly on GitHub &rarr;
          </a>
        </div>
      )}

      {!loading && !error && repos && repos.length === 0 && (
        <p className="repo-empty">No public repositories found for this account yet.</p>
      )}

      {!loading && !error && repos && repos.length > 0 && (
        <div className="repo-row">
          {repos.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
        </div>
      )}
    </section>
  );
}
