import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { Code2, Globe, Brain, Database, Terminal, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &"
          highlightedWord="Proficiencies"
          subtitle="Categorized technical stack honestly categorized by practical application and engineering usage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.skillCategories.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-[#0f141f]/75 dark:bg-[#0c1018]/85 border border-slate-800 shadow-xl backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 ${
                categoryGroup.category === 'Data & Artificial Intelligence' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                  {getCategoryIcon(categoryGroup.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {categoryGroup.skills.length} skills cataloged
                  </span>
                </div>
              </div>

              {/* Skills Pill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/70 hover:border-indigo-500/30 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <Sparkles className="w-3 h-3 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-1">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on skills representation */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 inline-flex items-center gap-1.5">
            <span>💡</span>
            <span>Skill levels reflect academic projects, hands-on coursework, and active software practice.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
