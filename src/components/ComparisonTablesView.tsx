import React, { useState } from 'react';
import { masterComparisons } from '../data/comparisons';
import { 
  GitCompare, Search, AlertTriangle, Key, Filter 
} from 'lucide-react';

export const ComparisonTablesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompId, setSelectedCompId] = useState<string>(masterComparisons[0].id);

  const filtered = masterComparisons.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentComp = masterComparisons.find(c => c.id === selectedCompId) || masterComparisons[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200/90 dark:border-slate-800/80">
        <div>
          <span className="px-2.5 py-0.5 rounded-[6px] text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-[#A5B4FC] border border-indigo-200/60 dark:border-indigo-800/60 font-mono text-[11px]">
            Master Comparison Matrices
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 font-heading">
            Master Comparison Tables
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] mt-0.5">
            Side-by-side analytical comparisons for concepts frequently confused in Master's examinations.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search comparisons..."
            className="w-full pl-9 pr-4 py-2 rounded-[10px] text-xs bg-white dark:bg-[#151E31] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 min-h-[40px]"
          />
        </div>
      </div>

      {/* Main Layout: Left List + Right Detailed Comparison Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Selector List */}
        <div className="lg:col-span-4 space-y-2 max-h-[600px] lg:max-h-[750px] overflow-y-auto pr-1 scrollbar-thin">
          {filtered.map(comp => (
            <div
              key={comp.id}
              onClick={() => setSelectedCompId(comp.id)}
              className={`p-3.5 rounded-[14px] cursor-pointer border transition-all text-left ${
                selectedCompId === comp.id
                  ? 'border-indigo-500 bg-indigo-50/80 dark:bg-[#151E31] shadow-sm ring-1 ring-indigo-500/20'
                  : 'border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#111827] hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
                  {comp.unit}
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {comp.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                {comp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Active Table Card */}
        <div className="lg:col-span-8 space-y-4">
          <div className="premium-card rounded-[18px] p-5 sm:p-6 space-y-5">
            <div>
              <div className="text-[11px] uppercase font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {currentComp.unit}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-0.5">
                {currentComp.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#CBD5E1] mt-1">
                {currentComp.description}
              </p>
            </div>

            {/* Mobile Card Representation (< 640px) */}
            <div className="sm:hidden space-y-3">
              {currentComp.criteria.map((row, idx) => (
                <div key={idx} className="p-3.5 rounded-[12px] border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#151E31]/50 space-y-2">
                  <span className="font-bold text-xs text-slate-900 dark:text-white block border-b border-slate-200/60 dark:border-slate-800 pb-1.5">
                    {row.aspect}
                  </span>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 block text-[11px] mb-0.5">
                        {currentComp.columns[0]}:
                      </span>
                      <p className="text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
                        {row.itemA}
                      </p>
                    </div>
                    <div className="pt-1 border-t border-slate-200/40 dark:border-slate-800">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 block text-[11px] mb-0.5">
                        {currentComp.columns[1]}:
                      </span>
                      <p className="text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
                        {row.itemB}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop & Tablet Table (Hidden on small mobile) */}
            <div className="hidden sm:block overflow-x-auto rounded-[14px] border border-slate-200 dark:border-slate-800 scrollbar-thin">
              <table className="w-full text-left text-xs min-w-[500px]">
                <thead className="bg-slate-100 dark:bg-[#151E31] text-slate-800 dark:text-[#F8FAFC] font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-3.5 w-1/4">Aspect / Criterion</th>
                    <th className="p-3.5 w-3/8 text-indigo-700 dark:text-indigo-300 font-bold">{currentComp.columns[0]}</th>
                    <th className="p-3.5 w-3/8 text-blue-700 dark:text-blue-300 font-bold">{currentComp.columns[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentComp.criteria.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-white bg-slate-50/60 dark:bg-[#151E31]/40">
                        {row.aspect}
                      </td>
                      <td className="p-3.5 text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
                        {row.itemA}
                      </td>
                      <td className="p-3.5 text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
                        {row.itemB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exam Trap Alert */}
            <div className="p-4 rounded-[12px] bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block mb-0.5 text-[10px]">
                  Examiner Trap & Confusion Point
                </span>
                <p className="text-amber-900 dark:text-amber-200 leading-relaxed">
                  {currentComp.examTrap}
                </p>
              </div>
            </div>

            {/* Memory Anchor */}
            <div className="p-4 rounded-[12px] bg-slate-50 dark:bg-[#151E31]/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
              <Key className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-0.5 text-[10px]">
                  Quick Memory Anchor
                </span>
                <p className="text-slate-800 dark:text-[#CBD5E1] font-medium leading-relaxed">
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
