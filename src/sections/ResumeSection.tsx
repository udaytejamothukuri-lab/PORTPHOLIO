import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../data/portfolioData';
import { Download, FileText, CheckCircle2, Eye, AlertCircle } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleResumeClick = async (action: 'download' | 'view') => {
    try {
      const response = await fetch(portfolioConfig.resumePath, { method: 'HEAD' });
      if (response.ok) {
        if (action === 'download') {
          const link = document.createElement('a');
          link.href = portfolioConfig.resumePath;
          link.download = `${portfolioConfig.displayName.replace(/\s+/g, '_')}_Resume.pdf`;
          link.click();
        } else {
          window.open(portfolioConfig.resumePath, '_blank');
        }
      } else {
        setDownloadNotice('Resume will be available soon.');
      }
    } catch {
      setDownloadNotice('Resume will be available soon.');
    }
  };

  return (
    <section id="resume" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Verified"
          highlightedWord="Resume"
          subtitle="A comprehensive single-page summary of coursework, competencies, and engineering projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#131a29]/90 to-[#0c1018]/90 border border-indigo-500/30 p-8 sm:p-12 text-center shadow-2xl overflow-hidden backdrop-blur-md"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
            <FileText className="w-8 h-8" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Want to know more about my journey?
          </h3>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Download or view my full engineering resume formatted for technical recruiters, ATS compatibility, and internship review.
          </p>

          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 mb-8">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ATS-Formatted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified Coursework</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Project Architecture Summaries</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleResumeClick('download')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => handleResumeClick('view')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>View Resume in Browser</span>
            </button>
          </div>

          {/* Notification Alert if file missing */}
          {downloadNotice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-center justify-center gap-2 text-left"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{downloadNotice}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
