import React, { useState } from 'react';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  GitCompare, Search, AlertTriangle, Key, Filter 
} from 'lucide-react';

export const ComparisonTablesView: React.FC = () => {
  const { currentSubject } = useSubject();
  const { comparisons } = useSubjectData();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompId, setSelectedCompId] = useState<string>(() => comparisons[0]?.id || '');

  const filtered = comparisons.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentComp = comparisons.find(c => c.id === selectedCompId) || comparisons[0];

  if (comparisons.length === 0 || !currentComp) {
    return (
      <div className="space-y-6 max-w-7xl mx-auto pb-12">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Comparisons</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <GitCompare className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Master Comparison Tables In Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Side-by-side analytical comparisons for concepts frequently confused in examinations for {currentSubject.title} ({currentSubject.courseCode}) are currently being authored.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 comparison tables available</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Subject Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Master Comparison Matrices</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 font-heading">
            Master Comparison Tables
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] mt-0.5">
            Side-by-side analytical comparisons for concepts frequently confused in {currentSubject.title} examinations.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search comparisons (e.g. 'governance', 'GDPR')..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Main Grid: Left Selector List, Right Active Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List of Comparisons (4 Cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-1">
          {filtered.map(comp => {
            const isSelected = comp.id === currentComp.id;
            return (
              <div
                key={comp.id}
                onClick={() => setSelectedCompId(comp.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-sm'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-300 text-slate-800 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{comp.unit}</span>
                  <span className="text-[10px] uppercase font-bold">{comp.criteria.length} Criteria</span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm leading-snug">
                  {comp.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {comp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Active Comparison Matrix (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 mb-1">
                <span>{currentComp.unit}</span>
                <span>•</span>
                <span>Formal Academic Distinction</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {currentComp.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {currentComp.description}
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold">
                  <tr>
                    <th className="p-3 w-1/4">Criterion / Aspect</th>
                    <th className="p-3 w-3/8 text-indigo-600 dark:text-indigo-400 font-semibold">{currentComp.columns[0]}</th>
                    <th className="p-3 w-3/8 text-purple-600 dark:text-purple-400 font-semibold">{currentComp.columns[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {currentComp.criteria.map((c, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                      <td className="p-3 font-semibold text-slate-900 dark:text-white bg-slate-50/70 dark:bg-slate-800/30">
                        {c.aspect}
                        {c.keyDifference && (
                          <span className="block text-[10px] text-slate-400 font-normal mt-0.5">
                            Key: {c.keyDifference}
                          </span>
                        )}
                      </td>
                      <td className="p-3 leading-relaxed whitespace-pre-line">{c.itemA}</td>
                      <td className="p-3 leading-relaxed whitespace-pre-line">{c.itemB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exam Trap & Memory Rule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 space-y-1">
                <span className="font-bold text-rose-600 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> High-Risk Exam Trap
                </span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                  {currentComp.examTrap}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 space-y-1">
                <span className="font-bold text-indigo-600 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> Memory Shortcut Rule
                </span>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-mono font-medium">
                  {currentComp.memoryRule}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
