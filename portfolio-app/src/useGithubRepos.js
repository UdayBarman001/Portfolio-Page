import { useEffect, useState } from 'react';

let cache = null; // module-level cache so we only hit the API once per page load

export function useGithubRepos(username) {
  const [state, setState] = useState({
    repos: cache,
    loading: !cache,
    error: null,
  });

  useEffect(() => {
    if (cache) {
      setState({ repos: cache, loading: false, error: null });
      return;
    }

    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { headers: { Accept: 'application/vnd.github+json' } }
        );

        if (!res.ok) {
          throw new Error(
            res.status === 403
              ? 'GitHub API rate limit reached — try again in a bit.'
              : `GitHub API returned ${res.status}`
          );
        }

        const data = await res.json();
        const cleaned = data
          .filter((r) => !r.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        if (!cancelled) {
          cache = cleaned;
          setState({ repos: cleaned, loading: false, error: null });
        }
      } catch (err) {
        if (!cancelled) {
          setState({ repos: null, loading: false, error: err.message });
        }
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}

// Best-effort match of a curated project to its real, live repo (for accurate links + stars).
export function matchRepo(repos, hint) {
  if (!repos || !hint) return null;
  const target = hint.toLowerCase();
  return (
    repos.find((r) => r.name.toLowerCase() === target) ||
    repos.find((r) => r.name.toLowerCase().includes(target)) ||
    null
  );
}
