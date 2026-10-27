import React, { useState } from 'react';
import { examTrapsData } from '../data/examTraps';
import { 
  AlertOctagon, AlertTriangle, CheckCircle2, Key, Filter, ShieldAlert 
} from 'lucide-react';

export const ExamTrapsView: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<number>(0); // 0 = all

  const filtered = selectedUnit === 0 
    ? examTrapsData 
    : examTrapsData.filter(t => t.unit === selectedUnit);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300">
            Fatal Examination Pitfalls
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Exam Traps You Must Avoid
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real student errors documented from previous university exam papers and why examiners immediately deduct points.
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
            All Traps ({examTrapsData.length})
          </button>
          {[1, 2, 3, 4, 5, 6].map(u => (
            <button
              key={u}
              onClick={() => setSelectedUnit(u)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedUnit === u
                  ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              U{u}
            </button>
          ))}
        </div>
      </div>

      {/* Traps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(trap => (
          <div
            key={trap.id}
            className="glass-card rounded-2xl p-6 border-l-4 border-l-rose-500 space-y-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
                Unit {trap.unit} • {trap.topic}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                High Risk Trap
              </span>
            </div>

            {/* The Trap */}
            <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/60 text-xs space-y-1">
              <span className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <AlertTriangle className="w-3.5 h-3.5" /> Common Student Mistake (DO NOT WRITE)
              </span>
              <p className="text-rose-950 dark:text-rose-200 font-semibold line-through">
                "{trap.commonStudentMistake}"
              </p>
            </div>

            {/* The Academic Truth */}
            <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/60 text-xs space-y-1">
              <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Correct Academic Truth
              </span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {trap.correctAcademicTruth}
              </p>
            </div>

            {/* Why Examiner Deducts Marks */}
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-0.5">
              <span className="font-bold text-slate-700 dark:text-slate-300">Why Points are Lost: </span>
              <span>{trap.whyExaminerDeductsMarks}</span>
            </div>

            {/* Memory Rule */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs">
              <Key className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span className="font-semibold text-indigo-900 dark:text-indigo-200 italic">
                Rule: {trap.howToRemember}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
