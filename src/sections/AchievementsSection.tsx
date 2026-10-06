import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { Trophy, Compass, Flag, Target } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Bootcamp':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Workshop':
        return <Flag className="w-5 h-5 text-cyan-400" />;
      case 'Academics':
      default:
        return <Target className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Milestones & Events"
          title="Achievements &"
          highlightedWord="Activities"
          subtitle="Key technical milestones, hackathons, and design immersion events."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioConfig.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0f141f]/75 dark:bg-[#0c1018]/85 border border-slate-800 hover:border-slate-700/80 shadow-lg flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                {getCategoryIcon(item.category)}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider font-mono">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>

                <h4 className="text-xs font-medium text-cyan-400">
                  {item.organizationOrEvent}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>

                {item.highlight && (
                  <div className="pt-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      ★ {item.highlight}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
