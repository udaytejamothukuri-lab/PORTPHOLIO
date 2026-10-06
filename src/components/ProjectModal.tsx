import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers, ArrowRight, BookOpen, Clock } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const hasRepo = Boolean(
    project.githubUrl &&
    project.githubUrl.startsWith('http') &&
    project.githubUrl !== 'ADD_PROJECT_REPOSITORY_URL'
  );

  const hasLive = Boolean(
    project.liveUrl &&
    project.liveUrl.startsWith('http') &&
    project.liveUrl !== '#'
  );

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-3xl my-8 max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d121c] dark:bg-[#0b0e14] border border-slate-700/80 dark:border-slate-800 shadow-2xl z-10 text-slate-100 p-6 sm:p-8"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              {project.badge && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 mb-2">
                  {project.badge}
                </span>
              )}
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
            
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="mt-6 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {/* Overview */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5 font-mono">
                <Layers className="w-4 h-4" /> Overview
              </h4>
              <p className="text-slate-300 leading-relaxed">
                {project.shortDescription || 'Details to be added'}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <h5 className="font-semibold text-rose-400 text-sm flex items-center gap-1.5 mb-2 font-mono">
                  <AlertCircle className="w-4 h-4" /> Problem
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  {project.problemSolved || 'Details to be added'}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <h5 className="font-semibold text-emerald-400 text-sm flex items-center gap-1.5 mb-2 font-mono">
                  <CheckCircle2 className="w-4 h-4" /> Solution
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  {project.solution || 'Details to be added'}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-4 h-4" /> Key Features
              </h4>
              {project.keyFeatures && project.keyFeatures.length > 0 ? (
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400 italic">Details to be added</p>
              )}
            </div>

            {/* Technology Stack */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-3 font-mono">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-lg font-mono font-medium bg-slate-800/90 text-slate-200 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40">
              <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-300 mb-2.5 flex items-center gap-1.5 font-mono">
                <BookOpen className="w-4 h-4 text-indigo-400" /> What I Learned
              </h4>
              {project.whatILearned && project.whatILearned.length > 0 ? (
                <ul className="space-y-1.5">
                  {project.whatILearned.map((learning, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 list-disc list-inside">
                      {learning}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400 italic">Details to be added</p>
              )}
            </div>

            {/* Future Improvements */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h4 className="text-xs uppercase font-bold tracking-wider text-cyan-400 mb-2 font-mono">
                Future Improvements
              </h4>
              {project.futureImprovements && project.futureImprovements.length > 0 ? (
                <ul className="space-y-1.5">
                  {project.futureImprovements.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-400 italic">Details to be added</p>
              )}
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-mono">
              Configurable via <code className="text-indigo-300 font-mono">portfolioData.ts</code>
            </span>

            <div className="flex items-center gap-3">
              {hasRepo ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-800 bg-slate-900/80 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Repository coming soon</span>
                </span>
              )}

              {hasLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg shadow-indigo-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-800 bg-slate-900/80 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Demo coming soon</span>
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
