import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = portfolioConfig;

  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Academic Foundations"
          title="Education &"
          highlightedWord="Degree"
          subtitle="Strong academic grounding in Computer Science principles, algorithms, and applied technology."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-slate-700 transition-colors">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              {/* Left Column: Degree & University */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{education.status}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {education.degree}
                </h3>
                
                <h4 className="text-base sm:text-lg font-semibold text-cyan-400">
                  {education.field}
                </h4>

                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{education.institution}</span>
                </div>
              </div>

              {/* Right Column: Meta details badge */}
              <div className="flex flex-row md:flex-col items-start md:items-end gap-3 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{education.graduationYear}</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights / Specialization */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h5 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                Core Coursework & Highlights
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {education.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/70 flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
