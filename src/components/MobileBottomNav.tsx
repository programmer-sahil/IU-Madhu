import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Award, Zap, MoreHorizontal, 
  X, CheckCircle2, Bookmark, Layers, GitCompare, AlertOctagon, 
  Hash, Flame, FileCheck, ArrowRight
} from 'lucide-react';
import { allUnits } from '../data/units';

interface MobileBottomNavProps {
  currentView: string;
  selectedUnitId: number;
  onNavigate: (view: string, unitId?: number) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  selectedUnitId,
  onNavigate,
}) => {
  const [activeSheet, setActiveSheet] = useState<'units' | 'more' | 'practice' | null>(null);

  const isUnitsActive = currentView === 'unit';
  const isPracticeActive = currentView === 'mcqs' || currentView === 'flashcards';
  const isRevisionActive = currentView === 'cheatSheets' || currentView === 'traps' || currentView === 'numbers' || currentView === 'lastMinute';
  const isMoreActive = currentView === 'mock' || currentView === 'comparisons' || currentView === 'diagrams' || currentView === 'readiness' || currentView === 'bookmarks';

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
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {allUnits.map(unit => {
              const isSelected = currentView === 'unit' && selectedUnitId === unit.id;
              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    onNavigate('unit', unit.id);
                    setActiveSheet(null);
                  }}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-300 dark:border-indigo-700 text-indigo-900 dark:text-indigo-200'
                      : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      U{unit.id}
                    </span>
                    <div>
                      <div className="text-xs font-bold">{unit.title.split(':')[0]}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{unit.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Practice Selector Drawer */}
      {activeSheet === 'practice' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#111827] rounded-t-2xl p-5 border-t border-slate-200 dark:border-slate-800 shadow-2xl lg:hidden">
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
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                onNavigate('mcqs');
                setActiveSheet(null);
              }}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-left space-y-2 hover:border-indigo-500"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">MCQ Practice</div>
                <div className="text-[11px] text-slate-400">233 Questions, 6 Modes</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('flashcards');
                setActiveSheet(null);
              }}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-left space-y-2 hover:border-indigo-500"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Flashcards</div>
                <div className="text-[11px] text-slate-400">Interactive 3D Flip</div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* "More" Drawer */}
      {activeSheet === 'more' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#111827] rounded-t-2xl p-5 border-t border-slate-200 dark:border-slate-800 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
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
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                onNavigate('mock');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <FileCheck className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <div className="font-bold">Mock Exams</div>
                <div className="text-[10px] text-slate-400">2x 90 Marks</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('comparisons');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <GitCompare className="w-4 h-4 text-blue-500 shrink-0" />
              <div>
                <div className="font-bold">Comparisons</div>
                <div className="text-[10px] text-slate-400">16 Tables</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('diagrams');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <div className="font-bold">Visual Learning</div>
                <div className="text-[10px] text-slate-400">18 Diagrams</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('traps');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <AlertOctagon className="w-4 h-4 text-rose-500 shrink-0" />
              <div>
                <div className="font-bold">Exam Traps</div>
                <div className="text-[10px] text-slate-400">Pitfall Cards</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('numbers');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <Hash className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <div className="font-bold">Key Numbers</div>
                <div className="text-[10px] text-slate-400">20 Must-Know</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('lastMinute');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <Flame className="w-4 h-4 text-rose-500 shrink-0" />
              <div>
                <div className="font-bold">30-Min Sprint</div>
                <div className="text-[10px] text-slate-400">Final Checklist</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('readiness');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <div>
                <div className="font-bold">Readiness</div>
                <div className="text-[10px] text-slate-400">Diagnostic</div>
              </div>
            </button>

            <button
              onClick={() => {
                onNavigate('bookmarks');
                setActiveSheet(null);
              }}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-2.5 text-left text-slate-800 dark:text-slate-200"
            >
              <Bookmark className="w-4 h-4 text-indigo-500 shrink-0" />
              <div>
                <div className="font-bold">Revision List</div>
                <div className="text-[10px] text-slate-400">Bookmarks</div>
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
        {/* 1. Home */}
        <button
          onClick={() => {
            onNavigate('dashboard');
            setActiveSheet(null);
          }}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            currentView === 'dashboard'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 mb-0.5" />
          <span>Home</span>
        </button>

        {/* 2. Units */}
        <button
          onClick={() => setActiveSheet(prev => prev === 'units' ? null : 'units')}
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
          onClick={() => setActiveSheet(prev => prev === 'practice' ? null : 'practice')}
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isPracticeActive || activeSheet === 'practice'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4 mb-0.5" />
          <span>Practice</span>
        </button>

        {/* 4. Revision (Cheat sheets) */}
        <button
          onClick={() => {
            onNavigate('cheatSheets');
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
          onClick={() => setActiveSheet(prev => prev === 'more' ? null : 'more')}
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
