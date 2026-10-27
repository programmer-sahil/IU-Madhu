import React from 'react';
import { useProgress } from '../hooks/useProgress';
import { allUnits } from '../data/units';
import { 
  Award, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, 
  ShieldCheck, Flame, RotateCcw 
} from 'lucide-react';

interface ExamReadinessDiagnosticProps {
  onNavigateToUnit?: (unitId: number) => void;
  onNavigateToMcq?: () => void;
  onNavigateToMock?: () => void;
}

export const ExamReadinessDiagnostic: React.FC<ExamReadinessDiagnosticProps> = ({
  onNavigateToUnit,
  onNavigateToMcq,
  onNavigateToMock
}) => {
  const { analytics, progress, resetProgress } = useProgress();

  const getTierInfo = (score: number) => {
    if (score >= 90) {
      return {
        label: 'Excellent Readiness',
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800',
        badge: 'Top Tier (1.0 - 1.3)',
        message: 'You possess exceptional mastery of the frameworks, statutory numbers, and model answers. Attempt mock exams to cement timing.'
      };
    }
    if (score >= 80) {
      return {
        label: 'Strong Readiness',
        color: 'text-indigo-500',
        bgColor: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-800',
        badge: 'First Class (1.4 - 1.7)',
        message: 'You have solid comprehensive coverage. Review the Exam Traps and finalize weak unit MCQs to cross into the top bracket.'
      };
    }
    if (score >= 70) {
      return {
        label: 'Good, Revise Weak Areas',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-800',
        badge: 'Solid Pass (2.0 - 2.5)',
        message: 'Good foundation, but specific technical gaps remain in BSI effects, ITIL practices, or GDPR articles. Target your weak units.'
      };
    }
    if (score >= 60) {
      return {
        label: 'Needs Targeted Revision',
        color: 'text-amber-500',
        bgColor: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800',
        badge: 'Borderline Pass (3.0 - 3.7)',
        message: 'High risk of losing marks on definitions, numbers, and 8-mark comparative questions. Run through unit cheat sheets immediately.'
      };
    }
    return {
      label: 'Return to Core Concepts',
      color: 'text-rose-500',
      bgColor: 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800',
      badge: 'At Risk (Under 4.0)',
      message: 'You have not yet covered sufficient material. Begin systematically with Unit 1 and practice MCQs in Learn Mode.'
    };
  };

  const tier = getTierInfo(analytics.overallReadiness);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-slate-200 dark:border-slate-800">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Continuous Diagnostic Algorithm
        </span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
          Am I Ready for the Final Exam?
        </h2>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Calculated from your MCQ accuracy, flashcard mastery, completed unit checklists, and mock submissions.
        </p>
      </div>

      {/* Main Readiness Gauge Card */}
      <div className={`glass-card rounded-3xl p-8 border ${tier.bgColor} shadow-lg text-center space-y-6`}>
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-40 h-40 transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="14"
              className="text-slate-200 dark:text-slate-800"
              fill="transparent"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="14"
              strokeDasharray={440}
              strokeDashoffset={440 - (440 * analytics.overallReadiness) / 100}
              strokeLinecap="round"
              className={`${tier.color} transition-all duration-1000 ease-out`}
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-slate-900 dark:text-white font-mono">
              {analytics.overallReadiness}%
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Exam Ready
            </span>
          </div>
        </div>

        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700">
            {tier.badge}
          </span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
            {tier.label}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto mt-1 leading-relaxed">
            {tier.message}
          </p>
        </div>

        {/* Diagnostic Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60">
            <span className="text-slate-400 block">MCQs Practiced</span>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              {analytics.totalAnswered} / {analytics.totalMcqsCount}
            </span>
            <span className="text-[10px] text-indigo-600 block mt-0.5">{analytics.accuracy}% accuracy</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60">
            <span className="text-slate-400 block">Units Completed</span>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              {analytics.completedUnitsCount} / 6
            </span>
            <span className="text-[10px] text-emerald-600 block mt-0.5">Formal checklists verified</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60">
            <span className="text-slate-400 block">Mastered Flashcards</span>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              {analytics.masteredFlashcardsCount}
            </span>
            <span className="text-[10px] text-purple-600 block mt-0.5">Active recall terms</span>
          </div>

          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/60">
            <span className="text-slate-400 block">Full Mocks Attempted</span>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              {analytics.mockAttemptsCount} / 2
            </span>
            <span className="text-[10px] text-amber-600 block mt-0.5">90-mark simulators</span>
          </div>
        </div>
      </div>

      {/* Unit Breakdown Matrix */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-base">
          Unit-Wise Performance Matrix
        </h3>

        <div className="space-y-3">
          {allUnits.map(unit => {
            const stats = analytics.unitStats[unit.id] || { total: 0, answered: 0, correct: 0 };
            const uAcc = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;
            const isCompleted = progress.completedUnits.includes(unit.id);

            return (
              <div
                key={unit.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-indigo-600 font-mono">Unit {unit.id}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{unit.title}</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">
                    MCQs: {stats.answered}/{stats.total} attempted ({uAcc}% accuracy)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    isCompleted 
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {isCompleted ? 'Checklist Verified' : 'In Progress'}
                  </span>

                  {onNavigateToUnit && (
                    <button
                      onClick={() => onNavigateToUnit(unit.id)}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 flex items-center gap-1"
                    >
                      Revise Unit
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Next Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          onClick={onNavigateToMcq}
          className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-indigo-500 transition-all space-y-2"
        >
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Recommended Action 1</span>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">Practice Weak MCQs</h4>
          <p className="text-xs text-slate-500">
            Automatically repeat questions you answered incorrectly in past study sessions.
          </p>
        </div>

        <div 
          onClick={onNavigateToMock}
          className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-indigo-500 transition-all space-y-2"
        >
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Recommended Action 2</span>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">Simulate 90-Mark Exam</h4>
          <p className="text-xs text-slate-500">
            Sit for Full Mock Exam 1 or 2 under timed 120-minute conditions.
          </p>
        </div>

        <div 
          onClick={resetProgress}
          className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-rose-400 transition-all space-y-2"
        >
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Diagnostics Control</span>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">Reset Revision History</h4>
          <p className="text-xs text-slate-500">
            Clear all answered MCQs and checklists to re-test your readiness from scratch.
          </p>
        </div>
      </div>
    </div>
  );
};
