import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" 
      aria-hidden="true"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35] dark:opacity-[0.25]" />

      {/* Top Center-Right Glowing Orb */}
      <div 
        className="absolute -top-[15%] left-[25%] sm:left-[35%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-br from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl opacity-75 dark:opacity-60 transform-gpu animate-pulse-slow" 
      />

      {/* Hero Bottom-Left Cyan Accent Orb */}
      <div 
        className="absolute top-[25%] -left-[10%] w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl opacity-60 dark:opacity-45 transform-gpu" 
      />

      {/* Mid-Page Subtle Violet Glow */}
      <div 
        className="absolute top-[60%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-bl from-purple-600/10 via-indigo-700/10 to-transparent blur-3xl opacity-50 dark:opacity-40 transform-gpu" 
      />

      {/* Bottom Accent Glow */}
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-cyan-600/10 via-indigo-600/10 to-transparent blur-3xl opacity-50 dark:opacity-35 transform-gpu" 
      />

      {/* Vignette Radial Mask to keep text readable */}
      <div className="absolute inset-0 bg-radial-gradient" />
    </div>
  );
};
