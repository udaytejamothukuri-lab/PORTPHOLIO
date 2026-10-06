import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { ExternalLink, Calendar, AlertCircle, Compass } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Workshops & Learning"
          title="Workshops &"
          highlightedWord="Certifications"
          subtitle="Immersive technical workshops, design bootcamps, and developer training."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioConfig.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0f141f]/80 dark:bg-[#0c1018]/90 border border-slate-800 hover:border-slate-700/80 shadow-xl flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:text-cyan-400 transition-colors shadow-inner">
                    <Compass className="w-6 h-6" />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {cert.name}
                </h3>

                <h4 className="text-sm font-semibold text-cyan-400 mt-1">
                  {cert.organization}
                </h4>

                {cert.date && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-2 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.date}</span>
                  </div>
                )}

                {cert.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-4">
                    {cert.description}
                  </p>
                )}

                {/* Skills Gained */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / Credential Link */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  {cert.credentialId ? (
                    <span className="text-slate-400 font-mono">
                      ID: <span className="text-slate-300">{cert.credentialId}</span>
                    </span>
                  ) : (
                    <span className="text-slate-400 italic">
                      Bootcamp Participation
                    </span>
                  )}
                </div>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800/80">
                    <AlertCircle className="w-3 h-3 text-amber-500/70" />
                    <span>Certificate link coming soon</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
