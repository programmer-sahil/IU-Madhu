import React, { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  Hash, Bookmark, BookmarkCheck, Search, AlertCircle, HelpCircle 
} from 'lucide-react';

export const NumbersView: React.FC = () => {
  const { toggleBookmark, isBookmarked } = useProgress();
  const { currentSubject } = useSubject();
  const { numbers } = useSubjectData();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<number>(0);

  const filtered = numbers.filter(n => {
    if (selectedUnit !== 0 && n.unit !== selectedUnit) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        n.number.toLowerCase().includes(q) ||
        n.label.toLowerCase().includes(q) ||
        n.framework.toLowerCase().includes(q) ||
        n.context.toLowerCase().includes(q)
      );
    }
    return true;
  });

  if (numbers.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Numbers to Know</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <Hash className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Numbers to Know In Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Essential quantitative thresholds, statutory deadlines, formulas (PERT, EVM), and framework structures for {currentSubject.title} ({currentSubject.courseCode}) will appear here once authored.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 numbers available</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Subject Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">High-Yield Numerical Facts</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Numbers You Must Remember
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Crucial quantitative metrics, statutory deadlines, terms of protection, and framework counts guaranteed to appear in {currentSubject.title} exams.
          </p>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search numbers, penalties, terms..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Unit Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setSelectedUnit(0)}
          className={`px-3 py-1.5 rounded-lg font-bold transition-all shrink-0 ${
            selectedUnit === 0
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
          }`}
        >
          All Numbers ({numbers.length})
        </button>
        {currentSubject.units.map(u => (
          <button
            key={u.id}
            onClick={() => setSelectedUnit(u.id)}
            className={`px-3 py-1.5 rounded-lg font-mono font-bold transition-all shrink-0 ${
              selectedUnit === u.id
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Unit {u.id}
          </button>
        ))}
      </div>

      {/* Grid of Number Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(item => (
          <div 
            key={item.id}
            className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-mono text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded text-[11px] font-bold">
                  Unit {item.unit} • {item.framework}
                </span>
                <button
                  onClick={() => toggleBookmark({
                    id: item.id,
                    type: 'number',
                    title: `${item.number} — ${item.label}`,
                    unit: item.unit
                  })}
                  className="p-1 rounded text-slate-400 hover:text-indigo-600"
                  title="Bookmark"
                >
                  {isBookmarked(item.id) ? (
                    <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Number Callout */}
              <div className="pt-3 space-y-1">
                <span className="text-3xl font-black text-amber-600 dark:text-amber-400 font-mono tracking-tight block">
                  {item.number}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                  {item.context}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              {/* Exam Question Prompt */}
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-[11px] space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-indigo-500" /> Likely Question:
                </span>
                <p className="text-slate-600 dark:text-slate-400 italic">
                  "{item.examQuestionPrompt}"
                </p>
              </div>

              {/* Trap To Avoid */}
              <div className="p-2.5 rounded-lg bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 text-rose-950 dark:text-rose-200 text-[11px] space-y-0.5">
                <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Trap to Avoid:
                </span>
                <p className="leading-relaxed">{item.trapToAvoid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
