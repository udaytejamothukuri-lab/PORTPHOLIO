import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Practical Growth"
          title="Learning &"
          highlightedWord="Technical Experience"
          subtitle="A transparent record of hands-on technical investigations, project execution, and developer competency."
        />

        {/* Notice Badge */}
        <div className="mb-10 p-4 rounded-2xl bg-indigo-950/20 border border-indigo-800/30 text-xs sm:text-sm text-slate-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded-md bg-indigo-500/20 text-indigo-400">ℹ️</span>
            <span>
              <strong>Student Transparency Note:</strong> The timeline below captures hands-on engineering, hackathon problem-solving, and laboratory project implementation rather than corporate employment.
            </span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-10">
          {portfolioConfig.learningExperience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 shadow-lg hover:border-slate-700 transition-colors">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-indigo-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
