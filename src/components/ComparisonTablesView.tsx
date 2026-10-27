import React, { useState } from 'react';
import { masterComparisons } from '../data/comparisons';
import { 
  GitCompare, Search, AlertTriangle, Key, Sparkles, Filter 
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
            Concept Discriminators & Traps
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Master Comparison Tables
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Quick-comparison tables for concepts commonly confused in final university examinations.
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
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Main Layout: Left List + Right Detailed Comparison Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Selector List */}
        <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-1">
          {filtered.map(comp => (
            <div
              key={comp.id}
              onClick={() => setSelectedCompId(comp.id)}
              className={`p-3.5 rounded-xl cursor-pointer border transition-all text-left ${
                selectedCompId === comp.id
                  ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/60 shadow-sm'
                  : 'border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                  {comp.unit}
                </span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {comp.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                {comp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Active Table Card */}
        <div className="lg:col-span-8 space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-md space-y-6">
            <div>
              <div className="text-xs uppercase font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {currentComp.unit}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {currentComp.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {currentComp.description}
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3 w-1/4">Aspect / Criterion</th>
                    <th className="p-3 w-3/8 text-indigo-700 dark:text-indigo-300 font-bold">{currentComp.columns[0]}</th>
                    <th className="p-3 w-3/8 text-blue-700 dark:text-blue-300 font-bold">{currentComp.columns[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentComp.criteria.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-semibold text-slate-900 dark:text-white bg-slate-50/60 dark:bg-slate-850/40">
                        {row.aspect}
                      </td>
                      <td className="p-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                        {row.itemA}
                      </td>
                      <td className="p-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                        {row.itemB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exam Trap Alert */}
            <div className="p-4 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/80 text-xs flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider block mb-0.5">
                  Exam Trap
                </span>
                <p className="text-rose-900 dark:text-rose-200 leading-relaxed">
                  {currentComp.examTrap}
                </p>
              </div>
            </div>

            {/* Memory Rule */}
            <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/80 text-xs flex items-start gap-3">
              <Key className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider block mb-0.5">
                  Memory Rule
                </span>
                <p className="text-slate-800 dark:text-slate-200 font-semibold italic">
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
