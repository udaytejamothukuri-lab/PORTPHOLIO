import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = (theme: Theme) => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-4 h-4 text-indigo-400" />;
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'system':
        return <Monitor className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700/60 dark:border-slate-800 bg-slate-900/60 dark:bg-slate-900/80 hover:bg-slate-800/80 dark:hover:bg-slate-800 transition-all duration-200 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        title="Theme settings"
      >
        {getThemeIcon(currentTheme)}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl p-1 bg-slate-900/95 dark:bg-slate-950/95 border border-slate-800 backdrop-blur-md shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={() => {
              onThemeChange('dark');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              currentTheme === 'dark'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark</span>
          </button>

          <button
            onClick={() => {
              onThemeChange('light');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors mt-0.5 ${
              currentTheme === 'light'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light</span>
          </button>

          <button
            onClick={() => {
              onThemeChange('system');
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors mt-0.5 ${
              currentTheme === 'system'
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
};
