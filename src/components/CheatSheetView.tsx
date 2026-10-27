import React, { useState } from 'react';
import { UnitId, CheatSheetData } from '../types';
import { allUnits, getUnitById } from '../data/units';
import { 
  Zap, BookMarked, Hash, Layers, GitCompare, AlertOctagon, 
  Key, ArrowRight, Printer 
} from 'lucide-react';

interface CheatSheetViewProps {
  initialUnit?: UnitId;
}

export const CheatSheetView: React.FC<CheatSheetViewProps> = ({ initialUnit = 1 }) => {
  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit);

  const unit = getUnitById(selectedUnit) || allUnits[0];
  const cs: CheatSheetData = unit.cheatSheet;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
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
            {allUnits.map(u => (
              <button
                key={u.id}
                onClick={() => setSelectedUnit(u.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedUnit === u.id
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                U{u.id}
              </button>
            ))}
          </div>

          <button
            onClick={handlePrint}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            title="Print Cheat Sheet"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid of Compact High-Yield Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Must Memorize Card */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-indigo-600 space-y-3">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
            <Zap className="w-4 h-4" />
            <span>Must Memorize</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {cs.mustMemorize.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exam Traps & Avoid Card */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-rose-600 space-y-3">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
            <AlertOctagon className="w-4 h-4" />
            <span>Exam Traps (Fatal Deductions)</span>
          </div>
          <div className="space-y-2.5 text-xs">
            {cs.examTraps.map((et, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/60">
                <span className="font-bold text-rose-800 dark:text-rose-300 block mb-0.5">
                  Trap: {et.trap}
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Truth: {et.truth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Numbers */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-amber-600 space-y-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
            <Hash className="w-4 h-4" />
            <span>Important Numbers in Unit {unit.id}</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {cs.importantNumbers.map((num, i) => (
              <div key={i} className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/60">
                <div className="text-lg font-black text-amber-700 dark:text-amber-300 font-mono">
                  {num.number}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {num.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {num.context}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Shortcuts */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-purple-600 space-y-3">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
            <Key className="w-4 h-4" />
            <span>Memory Shortcuts & Mnemonics</span>
          </div>
          <div className="space-y-2 text-xs">
            {cs.memoryShortcuts.map((ms, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/60">
                <span className="font-mono font-bold text-purple-700 dark:text-purple-300 text-xs">
                  {ms.acronym}
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-medium ml-2">
                  → {ms.meaning}
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {ms.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Definitions */}
        <div className="glass-card rounded-2xl p-6 md:col-span-2 border-l-4 border-l-emerald-600 space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
            <BookMarked className="w-4 h-4" />
            <span>Core Definitions (Exact Terminology)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {cs.coreDefinitions.map((cd, i) => (
              <div key={i} className="p-3.5 rounded-[12px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-[#F8FAFC] block">
                  {cd.term}
                </span>
                <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
                  {cd.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Framework Names */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-cyan-600 space-y-3">
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
            <Layers className="w-4 h-4" />
            <span>Frameworks & Full Acronyms</span>
          </div>
          <div className="space-y-2 text-xs">
            {cs.frameworkNames.map((fn, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-cyan-700 dark:text-cyan-300 font-mono">
                  {fn.acronym}
                </span>
                <div className="font-medium text-slate-800 dark:text-slate-200 text-xs">
                  {fn.fullName}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Focus: {fn.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Process Flows */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-l-blue-600 space-y-3">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
            <GitCompare className="w-4 h-4" />
            <span>Key Unit Processes</span>
          </div>
          <div className="space-y-3 text-xs">
            {cs.processes.map((proc, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white block">
                  {proc.name}
                </span>
                <div className="space-y-1">
                  {proc.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
