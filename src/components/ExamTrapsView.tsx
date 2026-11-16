import React, { useState } from 'react';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  AlertOctagon, AlertTriangle, CheckCircle2, Key, Filter, ShieldAlert 
} from 'lucide-react';

export const ExamTrapsView: React.FC = () => {
  const { currentSubject } = useSubject();
  const { examTraps } = useSubjectData();

  const [selectedUnit, setSelectedUnit] = useState<number>(0); // 0 = all

  const filtered = selectedUnit === 0 
    ? examTraps 
    : examTraps.filter(t => t.unit === selectedUnit);

  if (examTraps.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Exam Traps</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <AlertOctagon className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Exam Traps In Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              High-frequency examination pitfalls, common student misconceptions, and distractor analyses for {currentSubject.title} ({currentSubject.courseCode}) are currently being compiled.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 items available</span>
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
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Fatal Examination Pitfalls</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Exam Traps You Must Avoid
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real student errors documented from previous university exam papers in {currentSubject.title} and why examiners immediately deduct points.
          </p>
        </div>

        {/* Unit Selector */}
        <div className="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setSelectedUnit(0)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              selectedUnit === 0
                ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            All Traps ({examTraps.length})
          </button>
          {currentSubject.units.map(u => (
            <button
              key={u.id}
              onClick={() => setSelectedUnit(u.id)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                selectedUnit === u.id
                  ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              U{u.id}
            </button>
          ))}
        </div>
      </div>

      {/* Traps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(trap => (
          <div 
            key={trap.id}
            className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-rose-300 dark:hover:border-rose-900/60 transition-all"
          >
            {/* Meta Header */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="font-mono font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4" />
                Unit {trap.unit} • {trap.topic}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
                Fatal Trap
              </span>
            </div>

            {/* The Student Mistake */}
            <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 text-xs space-y-1">
              <span className="font-bold text-[10px] uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                Common Student Mistake
              </span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                "{trap.commonStudentMistake}"
              </p>
            </div>

            {/* The Academic Truth */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-1">
              <span className="font-bold text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Academic Truth
              </span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                {trap.correctAcademicTruth}
              </p>
            </div>

            {/* Why Examiner Deducts Marks */}
            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] block">
                Why Points Are Deducted:
              </span>
              <p className="leading-relaxed">{trap.whyExaminerDeductsMarks}</p>
            </div>

            {/* Memory Tip */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs flex items-start gap-2 text-indigo-700 dark:text-indigo-300">
              <Key className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
              <div className="font-mono text-[11px]">
                <strong className="font-bold uppercase tracking-wider text-[10px] block">How to Remember:</strong>
                {trap.howToRemember}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
