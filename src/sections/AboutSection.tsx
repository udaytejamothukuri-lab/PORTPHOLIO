import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { BookOpen, Cpu, Rocket, Award, CheckCircle2, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const statIcons = [BookOpen, Cpu, Rocket, Award];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Background & Journey"
          title="About"
          highlightedWord="Me"
          subtitle="A dedicated Computer Science & Data Science student driven by hands-on engineering, active learning, and real-world impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0f141f]/70 dark:bg-[#0c1018]/80 border border-slate-800 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Passionate About Building Technology That Matters</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I am Mothukuri Uday Teja, a B.Tech Computer Science & Engineering (Data Science) student interested in Artificial Intelligence, Data Science, software development, and emerging technologies.
                </p>
                <p>
                  I enjoy learning by building practical projects and exploring new technologies through workshops, technical events, and hands-on experimentation.
                </p>
              </div>

              {/* Core Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-medium">Student Developer</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-medium">AI & Data Science Enthusiast</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium">Continuous Learner</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-indigo-300 block mb-0.5">My Goal</span>
                <p className="text-slate-400">
                  To secure an impactful engineering or AI/Data Science internship where I can apply my programming, problem-solving, and machine learning skills while learning alongside engineering teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {portfolioConfig.stats.map((stat, index) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-[#0f141f]/70 dark:bg-[#0c1018]/80 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-slate-200 text-sm mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-normal">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
