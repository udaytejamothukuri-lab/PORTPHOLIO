import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ExternalLink, Eye, Sprout, Bot, Camera, Layout, Clock } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Data Science', 'AI & NLP', 'Computer Vision', 'Web Development'];

  const getProjectIcon = (projectId: string) => {
    switch (projectId) {
      case 'crop-advisory-ai':
        return <Sprout className="w-7 h-7 text-emerald-400" />;
      case 'faq-chatbot':
        return <Bot className="w-7 h-7 text-indigo-400" />;
      case 'object-detection-tracking':
        return <Camera className="w-7 h-7 text-cyan-400" />;
      case 'personal-portfolio':
      default:
        return <Layout className="w-7 h-7 text-purple-400" />;
    }
  };

  const filteredProjects = portfolioConfig.projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Data Science') return p.technologies.includes('Data Science');
    if (filter === 'AI & NLP') return p.technologies.includes('NLP') || p.technologies.includes('AI');
    if (filter === 'Computer Vision') return p.technologies.includes('Computer Vision') || p.technologies.includes('OpenCV');
    if (filter === 'Web Development') return p.technologies.includes('Web Development') || p.technologies.includes('React');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Featured Engineering"
          title="Applied"
          highlightedWord="Projects"
          subtitle="Real-world applications and machine learning models developed with clean architectures, practical problem formulations, and technical depth."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 hover:border-slate-700/80 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Card Banner */}
                <div className="relative h-44 sm:h-52 bg-gradient-to-br from-slate-900 via-[#121824] to-[#0c1018] p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                  {/* Decorative background grid & subtle glow */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                  <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

                  {/* Header: Category Badge & Project Number */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 z-10">
                    <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Problem Solved Snippet */}
                    <div className="mt-4 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300 block mb-1">
                        Problem Solved:
                      </span>
                      <p className="line-clamp-2">
                        {project.problemSolved}
                      </p>
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button Action Bar */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    {/* View Details Button */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>View Details</span>
                    </button>

                    {/* GitHub & Live Demo Actions */}
                    <div className="flex items-center gap-2">
                      {/* GitHub Button */}
                      {hasRepo ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 text-xs font-mono cursor-default"
                          title="Repository coming soon"
                        >
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>Repo coming soon</span>
                        </span>
                      )}

                      {/* Live Demo Button */}
                      {hasLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-sm transition-all"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-400 text-xs font-mono cursor-default"
                          title="Live demo in development"
                        >
                          <span>Demo coming soon</span>
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
