import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig, GITHUB_USERNAME } from '../data/portfolioData';
import { GitBranch, Star, Terminal, ExternalLink, Code2, Calendar, GitFork } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  updatedAt: string;
}

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasValidUser, setHasValidUser] = useState(false);

  useEffect(() => {
    if (GITHUB_USERNAME) {
      setHasValidUser(true);
      setLoading(true);
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch repos');
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            const mapped: GitHubRepo[] = data.map((item: any) => ({
              name: item.name,
              description: item.description || 'Public GitHub repository',
              stars: item.stargazers_count,
              forks: item.forks_count,
              language: item.language || 'Code',
              url: item.html_url,
              updatedAt: new Date(item.updated_at).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              }),
            }));
            setRepos(mapped);
          } else {
            setRepos([]);
          }
        })
        .catch(() => {
          setRepos([]);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <section id="github" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Open Source & Repositories"
          title="Building in"
          highlightedWord="Public"
          subtitle="Explore public repositories, code contributions, and project source code on GitHub."
        />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-white shadow-xl">
                <GithubIcon className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>github.com/{GITHUB_USERNAME}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                  Continuous development • Git workflow • Collaborative experiments
                </p>
              </div>
            </div>

            <a
              href={portfolioConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white hover:bg-slate-200 text-slate-900 transition-colors shadow-lg shadow-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View My GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
            </a>
          </div>

          {/* Repo Showcase Grid */}
          <div className="mt-8">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-2 font-mono">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>Public Repositories</span>
            </h4>

            {loading ? (
              <div className="text-center py-12 text-slate-400 text-sm font-mono animate-pulse">
                Fetching latest repositories from GitHub API...
              </div>
            ) : hasValidUser && repos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-indigo-400 group-hover:text-cyan-400 font-mono font-semibold text-sm">
                        <span className="truncate">{repo.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 shrink-0 ml-1" />
                      </div>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono mt-4 pt-3 border-t border-slate-800/80 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{repo.language}</span>
                        </span>

                        <span className="flex items-center gap-1 text-[11px] text-slate-400" title="Updated date">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{repo.updatedAt}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1" title="Stars">
                          <Star className="w-3 h-3 text-amber-400" />
                          <span>{repo.stars}</span>
                        </span>
                        <span className="flex items-center gap-1" title="Forks">
                          <GitFork className="w-3 h-3 text-cyan-400" />
                          <span>{repo.forks}</span>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              /* Clean fallback card linking directly to GitHub profile */
              <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/90 text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-800/80 text-indigo-400 mx-auto flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white mb-2">
                  Repositories Hosted on GitHub
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
                  Visit my GitHub profile to explore my active repositories, commits, and project source code.
                </p>
                <a
                  href={portfolioConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Explore @{GITHUB_USERNAME} on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
