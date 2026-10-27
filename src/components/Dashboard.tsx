import React from 'react';
import { allUnits } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import { 
  Award, BookOpen, Clock, CheckCircle2, ArrowRight, ShieldCheck, 
  Flame, Sparkles, TrendingUp, HelpCircle, Layers, Quote 
} from 'lucide-react';

interface DashboardProps {
  onNavigateToUnit: (unitId: number, tab?: string) => void;
  onNavigateToMcq: (unitId?: number) => void;
  onNavigateToReadiness: () => void;
  onNavigateToMock: () => void;
  onNavigateToLastMinute: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onNavigateToUnit,
  onNavigateToMcq,
  onNavigateToReadiness,
  onNavigateToMock,
  onNavigateToLastMinute
}) => {
  const { analytics, progress } = useProgress();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-navy-950 via-slate-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider">
              IU Master's Examination Platform
            </span>
            <span className="text-slate-400">Course Code: DLMIGCR01-01_E</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Master Corporate Governance of IT
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Structured revision, high-yield concepts, exam questions, 230+ MCQs, cheat sheets, and full 90-mark mock preparation — all in one place.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateToUnit(1)}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105"
            >
              Start Revision
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToMcq()}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-all"
            >
              Practice MCQs
              <Award className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={onNavigateToLastMinute}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-md flex items-center gap-2 transition-all"
            >
              <Flame className="w-4 h-4" />
              30-Min Cram
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Readiness System */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Personal Study Analytics
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              Overall Exam Readiness: {analytics.overallReadiness}%
            </h3>
          </div>
          <button
            onClick={onNavigateToReadiness}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 flex items-center gap-1.5"
          >
            Detailed Diagnostic
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Horizontal Animated Readiness Bar */}
        <div className="py-4 space-y-2">
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${analytics.overallReadiness}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>0% Beginner</span>
            <span>60% Pass Target</span>
            <span>80% First Class</span>
            <span>100% Exam Master</span>
          </div>
        </div>

        {/* Analytics Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Units Completed</span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {analytics.completedUnitsCount} / 6
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">MCQs Practiced</span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {analytics.totalAnswered} / {analytics.totalMcqsCount}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">MCQ Accuracy</span>
            <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
              {analytics.accuracy}%
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Strong Units</span>
            <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">
              {analytics.strongUnits.length > 0 ? analytics.strongUnits.map(u => `U${u}`).join(', ') : 'In Progress'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-slate-400 block text-[11px]">Needs Revision</span>
            <span className="text-lg font-black text-amber-600 dark:text-amber-400">
              {analytics.weakUnits.length > 0 ? analytics.weakUnits.map(u => `U${u}`).join(', ') : 'None Flagged'}
            </span>
          </div>
        </div>
      </div>

      {/* Six Unit Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Curriculum Units
          </h3>
          <span className="text-xs text-slate-500 font-mono">6 Units • DLMIGCR01-01_E</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUnits.map(unit => {
            const isCompleted = progress.completedUnits.includes(unit.id);
            const stats = analytics.unitStats[unit.id] || { total: 0, answered: 0, correct: 0 };
            const unitPct = Math.round((stats.answered / stats.total) * 100);

            return (
              <div
                key={unit.id}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all shadow-sm flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      Unit {unit.id}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" /> {unit.estimatedTime}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors mt-2">
                    {unit.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {unit.subtitle}
                  </p>

                  {/* Badges / Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 my-3 text-[11px] text-center">
                    <div>
                      <span className="text-slate-400 block">Concepts</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{unit.keyConcepts.length}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Questions</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{unit.importantQuestions.length}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">MCQs</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{unit.mcqs.length}</span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">MCQ Progress</span>
                      <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{unitPct}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded-full transition-all"
                        style={{ width: `${unitPct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigateToUnit(unit.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    Continue Learning
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tutor Motivation Quote */}
      <div className="glass-card rounded-2xl p-6 border-l-4 border-l-indigo-600 flex items-start gap-4">
        <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
        <div className="space-y-1 text-xs md:text-sm">
          <p className="text-slate-800 dark:text-slate-200 font-medium italic leading-relaxed">
            “Do not try to memorize everything equally. Master the frameworks, comparisons, processes, definitions and numbers most likely to convert directly into exam marks.”
          </p>
          <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 pt-1">
            — Tutor SK SAHIL, IU International University of Applied Sciences
          </div>
        </div>
      </div>
    </div>
  );
};
