import React from 'react';
import { 
  Menu, Search, Sun, Moon, Sparkles, Award, Shield, CheckCircle2 
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

interface NavbarProps {
  onOpenMobileSidebar: () => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigateToReadiness: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMobileSidebar,
  onOpenSearch,
  isDarkMode,
  onToggleDarkMode,
  onNavigateToReadiness
}) => {
  const { analytics } = useProgress();

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-[#070b14]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Mobile Toggle & Brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-800 dark:text-slate-200">
            Corporate Governance of IT, Compliance & Law
          </span>
          <span className="text-slate-400 font-mono">DLMIGCR01-01_E</span>
        </div>
      </div>

      {/* Right: Search, Readiness, Theme Switcher */}
      <div className="flex items-center gap-3">
        {/* Global Search Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800/80 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-all"
        >
          <Search className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="hidden md:inline">Search revision material...</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold">
            ⌘K
          </span>
        </button>

        {/* Readiness Pill */}
        <button
          onClick={onNavigateToReadiness}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:scale-105 transition-all"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span>{analytics.overallReadiness}% Ready</span>
        </button>

        {/* Light / Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition-all"
          title="Toggle Light / Dark Mode"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
        </button>
      </div>
    </header>
  );
};
