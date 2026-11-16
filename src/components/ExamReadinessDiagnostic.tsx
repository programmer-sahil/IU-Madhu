import React from 'react';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
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
  const { currentSubject } = useSubject();
  const { mockExams } = useSubjectData();

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
        message: 'Good foundation, but specific technical gaps remain in key principles and practices. Target your weak units.'
      };
    }
    if (score >= 60) {
      return {
        label: 'Needs Targeted Revision',
        color: 'text-amber-500',
        bgColor: 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800',
        badge: 'Borderline Pass (3.0 - 3.7)',
        message: 'High risk of losing marks on definitions, numbers, and comparative questions. Run through unit cheat sheets immediately.'
      };
    }
    return {
      label: 'Return to Core Concepts',
      color: 'text-rose-500',
      bgColor: 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800',
      badge: 'Unprepared (< 4.0)',
      message: 'Comprehensive review recommended across all units before taking the actual exam.'
    };
  };

  const tier = getTierInfo(analytics.overallReadiness);
  const units = currentSubject.units;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-mono">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-400 font-medium">{currentSubject.title}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Exam Readiness Diagnostic
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Real-time readiness algorithm weighted across MCQs (35%), unit completions (25%), flashcard retention (20%), and mock exam simulations (20%).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => resetProgress()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 transition-colors"
            title="Reset revision history for this subject"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

      {/* Main Readiness Gauge Card */}
      <div className={`rounded-2xl p-6 sm:p-8 border ${tier.bgColor} transition-all`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              {tier.badge}
            </span>
            <h3 className={`text-3xl sm:text-4xl font-extrabold ${tier.color}`}>
              {tier.label}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {tier.message}
            </p>
          </div>

          {/* Big Circular/Numeric Score Display */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm shrink-0 min-w-[160px]">
            <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
              {analytics.overallReadiness}%
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">
              Readiness Score
            </span>
          </div>
        </div>

        {/* Progress Bar with Grade Milestones */}
        <div className="mt-8 space-y-2">
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-1000"
              style={{ width: `${Math.max(analytics.overallReadiness, 2)}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>0% (Fail Risk)</span>
            <span>60% (Pass Threshold)</span>
            <span>80% (First Class)</span>
            <span>100% (Mastery)</span>
          </div>
        </div>
      </div>

      {/* Metric Breakdown Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-medium text-slate-500">MCQ Volume</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {analytics.totalAnswered} <span className="text-xs text-slate-400 font-normal">/ {analytics.totalMcqsCount}</span>
          </div>
          <span className="text-[11px] text-indigo-600 font-semibold block">
            {analytics.accuracy}% accuracy
          </span>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-medium text-slate-500">Curriculum Units</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {progress.completedUnits.length} <span className="text-xs text-slate-400 font-normal">/ {units.length}</span>
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold block">
            {Math.round((progress.completedUnits.length / units.length) * 100)}% completed
          </span>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-medium text-slate-500">Flashcards Mastered</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {analytics.masteredFlashcardsCount}
          </div>
          <span className="text-[11px] text-slate-400 block">
            Active recall retention
          </span>
        </div>

        <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs font-medium text-slate-500">Mock Exams</span>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {analytics.mockAttemptsCount} <span className="text-xs text-slate-400 font-normal">/ {mockExams.length > 0 ? mockExams.length : '-'}</span>
          </div>
          <span className="text-[11px] text-amber-600 font-semibold block">
            {mockExams.length > 0 ? 'Timed simulations' : 'Preparing'}
          </span>
        </div>
      </div>

      {/* Unit Breakdown Matrix */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-base">
          Unit-Wise Performance Matrix
        </h3>

        <div className="space-y-3">
          {units.map(unit => {
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
                    {stats.total > 0 
                      ? `MCQs: ${stats.answered}/${stats.total} attempted (${uAcc}% accuracy)`
                      : `${unit.sections.length} sections defined`}
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
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">Simulate Exam</h4>
          <p className="text-xs text-slate-500">
            Sit for Full Mock Exams under timed 120-minute conditions with marking rubrics.
          </p>
        </div>

        <div 
          onClick={() => resetProgress()}
          className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-rose-400 transition-all space-y-2"
        >
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Diagnostics Control</span>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">Reset Revision History</h4>
          <p className="text-xs text-slate-500">
            Clear answered MCQs and progress for this subject to test readiness from scratch.
          </p>
        </div>
      </div>
    </div>
  );
};
