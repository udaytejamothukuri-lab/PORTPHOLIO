import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedWord,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-14 sm:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 dark:text-white">
        {title}{' '}
        {highlightedWord && (
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {highlightedWord}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
