import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Award,
  Zap,
  MoreHorizontal,
  X,
  CheckCircle2,
  Bookmark,
  Layers,
  GitCompare,
  AlertOctagon,
  Hash,
  Flame,
  FileCheck,
  ArrowRight,
  HelpCircle,
  Compass,
  Home,
  Calculator
} from 'lucide-react';

export interface MobileBottomNavProps {
  currentPath: string;
  currentSubjectSlug: string;
  currentSubjectUnits: Array<{ id: number; title: string; subtitle: string }>;
  onNavigate: (path: string) => void;
  isSubjectView: boolean; // false on global home
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPath = '/',
  currentSubjectSlug = 'cgit',
  currentSubjectUnits = [],
  onNavigate,
  isSubjectView = true
}) => {
  const [activeSheet, setActiveSheet] = useState<'units' | 'more' | 'practice' | null>(null);

  // Active route detections for subject view
  const isHomeActive = currentPath === '/' || currentPath === '';
  const isUnitsActive = currentPath.includes('/units/');
  const isPracticeActive =
    currentPath.includes('/practice/') ||
    currentPath.includes('/mcq') ||
    currentPath.includes('/calculation-lab') ||
    currentPath.includes('/scenario-lab') ||
    currentPath.includes('/flashcard');
  const isRevisionActive =
    currentPath.includes('/cheat-sheets') ||
    currentPath.includes('/cheat-sheet');
  const isMoreActive =
    currentPath.includes('/mock') ||
    currentPath.includes('/comparisons') ||
    currentPath.includes('/diagrams') ||
    currentPath.includes('/traps') ||
    currentPath.includes('/numbers') ||
    currentPath.includes('/last-minute') ||
    currentPath.includes('/readiness') ||
    currentPath.includes('/bookmarks') ||
    currentPath.includes('/questions');

  // If on global home (isSubjectView === false), show simplified nav
  if (!isSubjectView) {
    return (
      <nav
        aria-label="Global Mobile Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800/80 px-4 lg:hidden flex items-center justify-around h-16 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* 1. Global Home */}
        <button
          onClick={() => onNavigate('/')}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isHomeActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        {/* 2. All Subjects */}
        <button
          onClick={() => onNavigate('/#subjects')}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            currentPath.includes('#subjects') || currentPath.includes('/subjects') && !currentSubjectSlug
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Compass className="w-4 h-4 mb-0.5" />
          <span>All Subjects</span>
        </button>

        {/* 3. Resume / Current Subject Study (if slug exists) */}
        {currentSubjectSlug && (
          <button
            onClick={() => onNavigate(`/subjects/${currentSubjectSlug}`)}
            className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
              currentPath.startsWith(`/subjects/${currentSubjectSlug}`)
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span className="truncate max-w-[90px]">
              {currentSubjectSlug.toUpperCase()}
            </span>
          </button>
        )}
      </nav>
    );
  }

  // Full Subject-Aware Mobile Navigation
  return (
    <>
      {/* Bottom Sheet Backdrop */}
      {activeSheet && (
        <div
          onClick={() => setActiveSheet(null)}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden animate-fade-in"
        />
      )}

      {/* Units Selector Drawer */}
      {activeSheet === 'units' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#111827] rounded-t-2xl p-5 border-t border-slate-200 dark:border-slate-800 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          {/* Drawer Handle */}
          <div className="w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3" />

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Curriculum
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Select Study Unit
              </h3>
            </div>
            <button
              onClick={() => setActiveSheet(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close unit selector"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {currentSubjectUnits && currentSubjectUnits.length > 0 ? (
              currentSubjectUnits.map((unit) => {
                const isSelected =
                  currentPath === `/subjects/${currentSubjectSlug}/units/${unit.id}` ||
                  currentPath.endsWith(`/units/${unit.id}`);
                return (
                  <button
                    key={unit.id}
                    onClick={() => {
                      onNavigate(`/subjects/${currentSubjectSlug}/units/${unit.id}`);
                      setActiveSheet(null);
                    }}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-700 text-indigo-900 dark:text-indigo-200'
                        : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        U{unit.id}
                      </span>
                      <div>
                        <div className="text-xs font-bold">
                          {unit.title ? unit.title.split(':')[0] : `Unit ${unit.id}`}
                        </div>
                        {unit.subtitle && (
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {unit.subtitle}
                          </div>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-slate-400">
                No units available for this subject.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Practice Selector Drawer */}
      {activeSheet === 'practice' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#111827] rounded-t-2xl p-5 border-t border-slate-200 dark:border-slate-800 shadow-2xl lg:hidden">
          {/* Drawer Handle */}
          <div className="w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3" />

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Active Recall
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Practice & Retention
              </h3>
            </div>
            <button
              onClick={() => setActiveSheet(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close practice menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Final Exam Simulation */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/practice/final-exam`);
                setActiveSheet(null);
              }}
              className={`p-3.5 rounded-xl border text-left space-y-2 transition-all hover:border-emerald-500 ${
                currentPath.includes('/final-exam')
                  ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Final Exam
                </div>
                <div className="text-[10px] text-slate-400">90-min Simulation</div>
              </div>
            </button>

            {/* MCQ Practice */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/practice/mcq`);
                setActiveSheet(null);
              }}
              className={`p-3.5 rounded-xl border text-left space-y-2 transition-all hover:border-indigo-500 ${
                currentPath.includes('/practice/mcq') || currentPath.includes('/mcqs')
                  ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  MCQ Practice
                </div>
                <div className="text-[10px] text-slate-400">Multi-Mode Bank</div>
              </div>
            </button>

            {/* Calculation Lab */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/practice/calculation-lab`);
                setActiveSheet(null);
              }}
              className={`p-3.5 rounded-xl border text-left space-y-2 transition-all hover:border-sky-500 ${
                currentPath.includes('/calculation-lab')
                  ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Calculation Lab
                </div>
                <div className="text-[10px] text-slate-400">EVM & FPA Solver</div>
              </div>
            </button>

            {/* Scenario Lab */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/practice/scenario-lab`);
                setActiveSheet(null);
              }}
              className={`p-3.5 rounded-xl border text-left space-y-2 transition-all hover:border-purple-500 ${
                currentPath.includes('/scenario-lab')
                  ? 'border-purple-500 bg-purple-50/50 dark:bg-purple-950/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Scenario Lab
                </div>
                <div className="text-[10px] text-slate-400">Stakeholder & Conflict</div>
              </div>
            </button>

            {/* Flashcards */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/practice/flashcards`);
                setActiveSheet(null);
              }}
              className={`p-3.5 rounded-xl border text-left space-y-2 transition-all hover:border-amber-500 ${
                currentPath.includes('/practice/flashcards') ||
                currentPath.includes('/flashcards')
                  ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/40'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60'
              }`}
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Flashcards
                </div>
                <div className="text-[10px] text-slate-400">Interactive 3D Flip</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* "More" Drawer */}
      {activeSheet === 'more' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#111827] rounded-t-2xl p-5 border-t border-slate-200 dark:border-slate-800 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          {/* Drawer Handle */}
          <div className="w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3" />

          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Examination Tools
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                More Revision Modules
              </h3>
            </div>
            <button
              onClick={() => setActiveSheet(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close more menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {/* Quick Revision Hub */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/tools/quick-revision`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
            >
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <div className="font-bold">Quick Revision</div>
                <div className="text-[10px] text-slate-400">High-Yield Hub</div>
              </div>
            </button>

            {/* Mock Exams */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/mock-exams`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
            >
              <FileCheck className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <div className="font-bold">Mock Exams</div>
                <div className="text-[10px] text-slate-400">Timed 90-Marks</div>
              </div>
            </button>

            {/* Comparisons */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/comparisons`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
            >
              <GitCompare className="w-4 h-4 text-blue-500 shrink-0" />
              <div>
                <div className="font-bold">Comparisons</div>
                <div className="text-[10px] text-slate-400">Master Tables</div>
              </div>
            </button>

            {/* Visual Learning / Diagrams */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/diagrams`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors"
            >
              <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <div className="font-bold">Visual Learning</div>
                <div className="text-[10px] text-slate-400">Concept Diagrams</div>
              </div>
            </button>

            {/* Exam Traps */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/traps`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-rose-400 dark:hover:border-rose-600 transition-colors"
            >
              <AlertOctagon className="w-4 h-4 text-rose-500 shrink-0" />
              <div>
                <div className="font-bold">Exam Traps</div>
                <div className="text-[10px] text-slate-400">Pitfall Cards</div>
              </div>
            </button>

            {/* Key Numbers */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/numbers`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
            >
              <Hash className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <div className="font-bold">Key Numbers</div>
                <div className="text-[10px] text-slate-400">High-Yield Facts</div>
              </div>
            </button>

            {/* 30-Min Sprint */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/last-minute`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-rose-400 dark:hover:border-rose-600 transition-colors"
            >
              <Flame className="w-4 h-4 text-rose-500 shrink-0" />
              <div>
                <div className="font-bold">30-Min Sprint</div>
                <div className="text-[10px] text-slate-400">Final Checklist</div>
              </div>
            </button>

            {/* Exam Readiness Diagnostic */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/readiness`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <div className="font-bold">Readiness</div>
                <div className="text-[10px] text-slate-400">Diagnostic</div>
              </div>
            </button>

            {/* Bookmarks */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/bookmarks`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
            >
              <Bookmark className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <div className="font-bold">Revision List</div>
                <div className="text-[10px] text-slate-400">Bookmarks</div>
              </div>
            </button>

            {/* Important Questions */}
            <button
              onClick={() => {
                onNavigate(`/subjects/${currentSubjectSlug}/questions`);
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200 hover:border-amber-400 dark:hover:border-amber-600 transition-colors col-span-2"
            >
              <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <div className="font-bold">Exam Questions & Model Answers</div>
                <div className="text-[10px] text-slate-400">
                  Full Answers, Marking Rubrics & Advice
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Fixed Bottom Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800/80 px-2 lg:hidden flex items-center justify-around h-16 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {/* 1. Home (navigates to global home "/") */}
        <button
          onClick={() => {
            onNavigate('/');
            setActiveSheet(null);
          }}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isHomeActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        {/* 2. Units */}
        <button
          onClick={() => setActiveSheet((prev) => (prev === 'units' ? null : 'units'))}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isUnitsActive || activeSheet === 'units'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 mb-0.5" />
          <span>Units</span>
        </button>

        {/* 3. Practice */}
        <button
          onClick={() => setActiveSheet((prev) => (prev === 'practice' ? null : 'practice'))}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isPracticeActive || activeSheet === 'practice'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4 mb-0.5" />
          <span>Practice</span>
        </button>

        {/* 4. Revision (Cheat sheets for current subject) */}
        <button
          onClick={() => {
            onNavigate(`/subjects/${currentSubjectSlug}/cheat-sheets`);
            setActiveSheet(null);
          }}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isRevisionActive
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Zap className="w-4 h-4 mb-0.5" />
          <span>Revision</span>
        </button>

        {/* 5. More */}
        <button
          onClick={() => setActiveSheet((prev) => (prev === 'more' ? null : 'more'))}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isMoreActive || activeSheet === 'more'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <MoreHorizontal className="w-4 h-4 mb-0.5" />
          <span>More</span>
        </button>
      </nav>
    </>
  );
};
