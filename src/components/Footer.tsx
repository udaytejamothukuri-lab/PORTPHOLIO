import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#07090e] text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg text-white">
                {portfolioConfig.displayName}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                B.Tech CSE (Data Science)
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400 max-w-sm">
              Passionate about Artificial Intelligence, Data Science, software development, and building practical solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              aria-label="Email Uday Teja"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Stack credit */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs text-slate-400">
            <p>© {currentYear} {portfolioConfig.displayName}. All rights reserved.</p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
              Built with <span className="text-indigo-400 font-medium">React</span> & <span className="text-cyan-400 font-medium">TypeScript</span> • Styled with Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
