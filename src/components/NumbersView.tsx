import React, { useState } from 'react';
import { highYieldNumbers } from '../data/numbers';
import { useProgress } from '../hooks/useProgress';
import { 
  Hash, Bookmark, BookmarkCheck, Search, AlertCircle, HelpCircle 
} from 'lucide-react';

export const NumbersView: React.FC = () => {
  const { toggleBookmark, isBookmarked } = useProgress();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<number>(0);

  const filtered = highYieldNumbers.filter(n => {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
            High-Yield Numerical Facts
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Numbers You Must Remember
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Crucial quantitative metrics, statutory deadlines, terms of protection, and framework counts guaranteed to appear in exams.
          </p>
        </div>

        {/* Search & Unit Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search numbers..."
              className="pl-9 pr-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-44"
            />
          </div>

          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(Number(e.target.value))}
            className="px-2.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value={0}>All Units</option>
            {[1, 2, 3, 4, 5, 6].map(u => (
              <option key={u} value={u}>Unit {u}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Number Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(item => (
          <div
            key={item.id}
            className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 hover:border-amber-400 dark:hover:border-amber-500 transition-all shadow-sm flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                  Unit {item.unit} • {item.framework}
                </span>
                <button
                  onClick={() => toggleBookmark({
                    id: item.id,
                    type: 'number',
                    title: `${item.number} — ${item.label}`,
                    unit: item.unit
                  })}
                  className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
                >
                  {isBookmarked(item.id) ? (
                    <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Huge Number Callout */}
              <div className="pt-3 pb-1">
                <div className="text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight text-gradient">
                  {item.number}
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {item.context}
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="p-2 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200">
                <span className="font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-0.5">
                  <HelpCircle className="w-3 h-3" /> Potential Exam Question:
                </span>
                <p className="italic text-[11px] leading-tight">
                  "{item.examQuestionPrompt}"
                </p>
              </div>

              <div className="p-2 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200">
                <span className="font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider text-rose-700 dark:text-rose-300 mb-0.5">
                  <AlertCircle className="w-3 h-3" /> Trap to Avoid:
                </span>
                <p className="text-[11px] leading-tight">
                  {item.trapToAvoid}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
