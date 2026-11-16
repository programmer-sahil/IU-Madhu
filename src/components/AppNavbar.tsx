import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, Search, Sun, Moon, CheckCircle2, Zap, Calculator, Compass, Flame, FileCheck, ChevronDown
} from 'lucide-react';


export interface AppNavbarProps {
  onOpenMobileSidebar: () => void;
  onOpenSearch: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigateToReadiness: () => void;
  currentViewTitle: string;
  // Subject context
  currentSubject?: {
    shortCode: string;
    courseCode: string;
    title: string;
    slug?: string;
  };
  readinessScore: number;
  isGlobalView?: boolean;
}

export const AppNavbar: React.FC<AppNavbarProps> = ({
  onOpenMobileSidebar,
  onOpenSearch,
  isDarkMode,
  onToggleDarkMode,
  onNavigateToReadiness,
  currentViewTitle,
  currentSubject,
  readinessScore,
  isGlobalView = false
}) => {
  // Professional readiness tier text
  const getReadinessTier = (score: number) => {
    if (score >= 90) return 'Mastered';
    if (score >= 75) return 'Strong';
    if (score >= 60) return 'Exam Ready';
    if (score >= 40) return 'Foundation';
    return 'Developing';
  };

  const navigate = useNavigate();
  const [isQuickPracticeOpen, setIsQuickPracticeOpen] = useState(false);
  const quickPracticeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (quickPracticeRef.current && !quickPracticeRef.current.contains(e.target as Node)) {
        setIsQuickPracticeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tier = getReadinessTier(readinessScore);
  const monogram = isGlobalView ? 'IU' : (currentSubject?.shortCode || 'IU');

  return (
    <header className="sticky top-0 z-30 h-14 bg-white/95 dark:bg-[#070B14]/90 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Mobile Navigation Trigger, Monogram & Breadcrumb Context */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenMobileSidebar}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden shrink-0"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Dynamic Monogram on Mobile (IU for global, or subject shortCode) */}
        <div className="w-7 h-7 rounded bg-slate-900 dark:bg-[#151E31] border border-indigo-500/40 flex items-center justify-center shrink-0 lg:hidden">
          <span className={`font-mono font-bold text-indigo-400 ${monogram.length > 3 ? 'text-[8px]' : monogram.length > 2 ? 'text-[9px]' : 'text-[10px]'}`}>
            {monogram}
          </span>
        </div>

        {/* Breadcrumb Context */}
        <div className="truncate">
          {isGlobalView ? (
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
              <span className="text-slate-400 dark:text-slate-500 font-medium">Home</span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="font-bold text-slate-900 dark:text-white truncate">
                {currentViewTitle && currentViewTitle !== 'Home' && currentViewTitle !== 'Dashboard'
                  ? currentViewTitle
                  : 'All Subjects'}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
              <span className="font-bold text-slate-900 dark:text-white shrink-0 truncate">
                {currentViewTitle}
              </span>
              {currentSubject && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">/</span>
                  <span className="text-slate-600 dark:text-slate-300 font-medium truncate max-w-[140px] sm:max-w-[220px] md:max-w-none">
                    {currentSubject.title}
                  </span>
                  <span className="hidden md:inline text-slate-300 dark:text-slate-700">/</span>
                  <span className="hidden md:inline text-slate-500 dark:text-slate-400 text-[11px] font-mono shrink-0">
                    {currentSubject.courseCode}
                  </span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right: Search, Readiness Pill, Theme Switcher */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Quick Practice Dropdown Action */}
        {!isGlobalView && currentSubject && (
          <div className="relative" ref={quickPracticeRef}>
            <button
              onClick={() => setIsQuickPracticeOpen(!isQuickPracticeOpen)}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-all cursor-pointer shadow-sm"
              title="Quick Practice Shortcuts"
            >
              <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Quick Practice</span>
              <ChevronDown className={`w-3 h-3 text-sky-500 transition-transform ${isQuickPracticeOpen ? 'rotate-180' : ''}`} />
            </button>

            {isQuickPracticeOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#0B1120] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs space-y-1 animate-fadeIn">
                {(() => {
                  const targetSlug = currentSubject?.slug || currentSubject?.title.toLowerCase().replace(/\s+/g, '-') || 'it-project-management';
                  return (
                    <>
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Targeted Revision Sprints
                      </div>

                      <button
                        onClick={() => {
                          setIsQuickPracticeOpen(false);
                          navigate(`/subjects/${targetSlug}/practice/final-exam`);
                        }}
                        className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                          <FileCheck className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold">Final Exam Simulation</div>
                          <div className="text-[10px] text-slate-400">90-min official timed simulation</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setIsQuickPracticeOpen(false);
                          navigate(`/subjects/${targetSlug}/practice/mcq?mode=rapid`);
                        }}
                        className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold">10 Rapid MCQs</div>
                          <div className="text-[10px] text-slate-400">Timed 10-question flash challenge</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setIsQuickPracticeOpen(false);
                          navigate(`/subjects/${targetSlug}/practice/calculation-lab`);
                        }}
                        className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                          <Calculator className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold">EVM & Formula Lab</div>
                          <div className="text-[10px] text-slate-400">EVM, FPA, ROI, and PERT practice</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setIsQuickPracticeOpen(false);
                          navigate(`/subjects/${targetSlug}/practice/scenario-lab`);
                        }}
                        className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                          <Compass className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold">Stakeholder & Conflict Scenarios</div>
                          <div className="text-[10px] text-slate-400">Unit 4 dilemmas & RACI puzzles</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setIsQuickPracticeOpen(false);
                          navigate(`/subjects/${targetSlug}/tools/30-minute-sprint`);
                        }}
                        className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                          <Flame className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="font-bold">30-Min Exam Sprint</div>
                          <div className="text-[10px] text-slate-400">High-yield morning checklist</div>
                        </div>
                      </button>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        )}
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

        {/* Readiness Pill (Overall Progress for global, subject-specific for subject views) */}
        <button
          onClick={onNavigateToReadiness}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-900/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all"
          title={isGlobalView ? 'View Overall Progress' : 'View Exam Readiness Diagnostic'}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span className="font-bold">{readinessScore}%</span>
          <span className="hidden sm:inline text-[11px] text-indigo-500 dark:text-indigo-400">
            {isGlobalView ? 'Overall Progress' : `(${tier})`}
          </span>
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

export default AppNavbar;
