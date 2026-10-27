import React from 'react';
import { 
  Menu, Search, Sun, Moon, CheckCircle2 
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

interface NavbarProps {
  onOpenMobileSidebar: () => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigateToReadiness: () => void;
  currentViewTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMobileSidebar,
  onOpenSearch,
  isDarkMode,
  onToggleDarkMode,
  onNavigateToReadiness,
  currentViewTitle = 'Dashboard'
}) => {
  const { analytics } = useProgress();

  // Professional readiness tier text
  const getReadinessTier = (score: number) => {
    if (score >= 90) return 'Mastered';
    if (score >= 75) return 'Strong';
    if (score >= 60) return 'Exam Ready';
    if (score >= 40) return 'Foundation';
    return 'Developing';
  };

  const tier = getReadinessTier(analytics.overallReadiness);

  return (
    <header className="sticky top-0 z-30 h-14 bg-white/95 dark:bg-[#070B14]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Mobile Navigation Trigger & Context */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenMobileSidebar}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Minimal Monogram on Mobile */}
        <div className="w-7 h-7 rounded bg-slate-900 dark:bg-[#151E31] border border-indigo-500/40 flex items-center justify-center shrink-0 lg:hidden">
          <span className="font-mono font-bold text-[10px] text-indigo-400">CG</span>
        </div>

        <div className="truncate">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-900 dark:text-white truncate">
              {currentViewTitle}
            </span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden md:inline text-slate-500 dark:text-slate-400 text-[11px] font-mono">
              DLMIGCR01-01_E
            </span>
          </div>
        </div>
      </div>

      {/* Right: Search, Readiness, Theme Switcher */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Global Search Button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs bg-slate-100 dark:bg-[#111827] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition-all"
          title="Search revision notes (⌘K)"
        >
          <Search className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="hidden sm:inline text-[11px]">Search...</span>
          <kbd className="hidden sm:inline text-[10px] font-mono px-1 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold border border-slate-300 dark:border-slate-700">
            ⌘K
          </kbd>
        </button>

        {/* Readiness Pill */}
        <button
          onClick={onNavigateToReadiness}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all"
          title="View Exam Readiness Diagnostic"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span className="font-bold">{analytics.overallReadiness}%</span>
          <span className="hidden sm:inline text-[11px] text-indigo-500 dark:text-indigo-400">({tier})</span>
        </button>

        {/* Light / Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111827] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
        </button>
      </div>
    </header>
  );
};
