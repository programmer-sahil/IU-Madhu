import React, { useState } from 'react';
import { UnitId, CheatSheetData } from '../types';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  Zap, BookMarked, Hash, Layers, GitCompare, AlertOctagon, 
  Key, ArrowRight, Printer 
} from 'lucide-react';

interface CheatSheetViewProps {
  initialUnit?: UnitId;
}

export const CheatSheetView: React.FC<CheatSheetViewProps> = ({ initialUnit = 1 }) => {
  const { currentSubject } = useSubject();
  const { units, getUnitById } = useSubjectData();

  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit);

  const unit = getUnitById(selectedUnit) || units[0];

  const handlePrint = () => {
    window.print();
  };

  if (!unit || units.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Cheat Sheets</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <Zap className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Cheat Sheets In Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              High-yield printable revision cheat sheets for {currentSubject.title} ({currentSubject.courseCode}) are currently being formatted.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 items available</span>
          </div>
        </div>
      </div>
    );
  }

  const cs: CheatSheetData = unit.cheatSheet;

  return (
    <div className="space-y-6">
      {/* Subject Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Cheat Sheets</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currentSubject.title}
          </h2>
        </div>
      </div>

      {/* Top Unit Selector Bar */}
      <div className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            High-Yield Revision Sheet
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Unit {unit.id} Cheat Sheet: {unit.title.split(':')[0]}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {currentSubject.units.map(u => (
              <button
                key={u.id}
                onClick={() => setSelectedUnit(u.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedUnit === u.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                U{u.id}
              </button>
            ))}
          </div>

          <button
            onClick={handlePrint}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 hover:border-indigo-400 transition-all shadow-sm"
            title="Print Cheat Sheet"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Column Dense Academic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
        {/* Left Column: Must-Memorize & Core Definitions */}
        <div className="space-y-6">
          {/* Section 1: Must Memorize Takeaways */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Key className="w-4 h-4" />
              <h4 className="font-bold uppercase tracking-wider text-xs">
                Non-Negotiable Exam Truths
              </h4>
            </div>
            <ul className="space-y-2">
              {cs.mustMemorize.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-indigo-600 font-bold shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Exact Definitions */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <BookMarked className="w-4 h-4" />
              <h4 className="font-bold uppercase tracking-wider text-xs">
                Official Exam Definitions
              </h4>
            </div>
            <div className="space-y-3">
              {cs.coreDefinitions.map((def, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">{def.term}</span>
                    {def.examNote && (
                      <span className="text-[10px] font-mono text-purple-600 bg-purple-50 dark:bg-purple-950 px-1.5 py-0.5 rounded">
                        {def.examNote}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{def.definition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: High Yield Numbers */}
          {cs.importantNumbers.length > 0 && (
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Hash className="w-4 h-4" />
                <h4 className="font-bold uppercase tracking-wider text-xs">
                  Crucial Numbers & Deadlines
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {cs.importantNumbers.map((num, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                    <span className="font-bold text-amber-800 dark:text-amber-300 font-mono text-sm block">
                      {num.number}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px]">
                      {num.label}
                    </span>
                    <span className="text-slate-500 text-[10px] block mt-0.5">
                      {num.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Comparisons, Processes, Exam Traps & Acronyms */}
        <div className="space-y-6">
          {/* Section 4: Key Frameworks */}
          {cs.frameworkNames.length > 0 && (
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <Layers className="w-4 h-4" />
                <h4 className="font-bold uppercase tracking-wider text-xs">
                  Framework Standards Map
                </h4>
              </div>
              <div className="space-y-2">
                {cs.frameworkNames.map((fw, idx) => (
                  <div key={idx} className="flex items-start justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <span className="font-mono font-bold text-indigo-600 w-24 shrink-0">{fw.acronym}</span>
                    <div className="flex-1">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 block">{fw.fullName}</span>
                      <span className="text-slate-500 text-[11px]">{fw.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Step-by-Step Processes */}
          {cs.processes.length > 0 && (
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-xs text-slate-900 dark:text-white">
                Core Processes & Lifecycles
              </h4>
              <div className="space-y-3">
                {cs.processes.map((proc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1.5">
                    <span className="font-bold text-indigo-600 block">{proc.name}</span>
                    <div className="flex flex-wrap items-center gap-1 font-mono text-[11px]">
                      {proc.steps.map((st, sIdx) => (
                        <React.Fragment key={sIdx}>
                          {sIdx > 0 && <span className="text-slate-400">→</span>}
                          <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                            {st}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="text-slate-500 text-[11px] pt-1">{proc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 6: Exam Pitfalls & Truths */}
          {cs.examTraps.length > 0 && (
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <AlertOctagon className="w-4 h-4" />
                <h4 className="font-bold uppercase tracking-wider text-xs">
                  Avoid Fatal Point Deductions
                </h4>
              </div>
              <div className="space-y-2">
                {cs.examTraps.map((trap, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-1">
                    <span className="text-rose-700 dark:text-rose-300 font-semibold block flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-rose-600 text-white font-mono text-[10px] flex items-center justify-center shrink-0">✕</span>
                      {trap.trap}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 block pl-5 text-[11px]">
                      <strong className="text-emerald-600">Truth:</strong> {trap.truth}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 7: Quick Memory Acronyms */}
          {cs.memoryShortcuts.length > 0 && (
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-xs text-slate-900 dark:text-white">
                Exam Acronym Shortcuts
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {cs.memoryShortcuts.map((sc, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <span className="font-mono font-bold text-indigo-600 text-sm block">{sc.acronym}</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px]">{sc.meaning}</span>
                    <span className="text-slate-500 text-[10px] block mt-0.5">{sc.usage}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
