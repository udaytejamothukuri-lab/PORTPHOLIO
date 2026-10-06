import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Code2, Terminal } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mb-6 shadow-sm shadow-emerald-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioConfig.statusBadge}</span>
            </div>

            {/* Small Greeting */}
            <p className="text-base sm:text-lg font-mono font-medium text-indigo-400 mb-2">
              Hi, I'm <span className="text-white font-bold">Uday Teja</span> 👋
            </p>

            {/* Recruiter-Focused Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              CSE (Data Science) Student |{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Building with AI, Data & Code
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-5">
              {portfolioConfig.subTagline}
            </p>

            {/* 3 Highlight Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>AI & Machine Learning</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Data Science</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Software Development</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="mt-8 pt-8 border-t border-slate-800/80 flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={portfolioConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={portfolioConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  aria-label="Contact Section"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  title="Contact Uday Teja"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Profile / Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Decorative Gradient Glow behind image */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-500 to-purple-600 opacity-40 group-hover:opacity-60 blur-xl transition duration-500" />

              {/* Main Card with Subtle Border & Soft Glow */}
              <div className="relative w-72 sm:w-84 rounded-3xl bg-[#0d121c]/95 border border-slate-700/80 p-5 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-md">
                
                {/* Visual Header / Avatar area with proper aspect ratio */}
                <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/60 overflow-hidden flex items-center justify-center shadow-inner">
                  {!imgError ? (
                    <img
                      src={portfolioConfig.profileImage}
                      alt={portfolioConfig.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                      loading="eager"
                    />
                  ) : (
                    /* Fallback initials if image fails */
                    <div className="flex flex-col items-center justify-center text-center p-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/25 mb-3">
                        <div className="w-full h-full bg-[#090a0f] rounded-[14px] flex items-center justify-center font-mono font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                          {portfolioConfig.initials}
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-slate-300">
                        {portfolioConfig.displayName}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                        B.Tech CSE (Data Science)
                      </span>
                    </div>
                  )}

                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 shadow-md">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Data Science</span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-indigo-300 shadow-md">
                    <Code2 className="w-3 h-3 text-indigo-400" />
                    <span>AI & Dev</span>
                  </div>
                </div>

                {/* Profile Card Footer Meta */}
                <div className="pt-4 mt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-indigo-400" />
                      <span className="text-slate-300 font-mono">Specializing in</span>
                    </div>
                    <span className="text-xs font-semibold text-cyan-400">CSE (Data Science)</span>
                  </div>

                  <div className="mt-2.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-slate-400 font-medium">Open to Internship Opportunities</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
