import React from 'react';
import { allUnits } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import { 
  Award, BookOpen, Clock, CheckCircle2, ArrowRight, 
  Target, GraduationCap, Quote, AlertTriangle
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

  const getReadinessTier = (score: number) => {
    if (score >= 90) return { label: 'Mastered', color: 'text-emerald-500' };
    if (score >= 75) return { label: 'Strong', color: 'text-indigo-400' };
    if (score >= 60) return { label: 'Exam Ready', color: 'text-blue-400' };
    if (score >= 40) return { label: 'Foundation Built', color: 'text-amber-400' };
    return { label: 'Developing', color: 'text-slate-400' };
  };

  const tier = getReadinessTier(analytics.overallReadiness);
  const isFreshStudent = analytics.totalAnswered === 0 && analytics.completedUnitsCount === 0;

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="rounded-[22px] md:rounded-[26px] p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#151E31] text-white border border-slate-800 shadow-card-dark relative overflow-hidden">
        {/* Subtle geometric depth */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-indigo-500/5 via-indigo-500/2 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4 md:space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-[8px] font-semibold bg-indigo-500/10 text-[#A5B4FC] border border-indigo-500/20 text-[11px] uppercase tracking-wider">
              IU Master's Examination Preparation
            </span>
            <span className="text-slate-400 text-[11px] font-mono">Course: DLMIGCR01-01_E</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-heading">
            Master Corporate Governance of IT
          </h1>

          <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed max-w-2xl">
            Structured revision, exam-focused explanations, practice questions, MCQs, cheat sheets and mock examinations across all six units.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateToUnit(1)}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm flex items-center justify-center gap-2 transition-all min-h-[44px]"
            >
              Continue Revision
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToMcq()}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] text-xs font-semibold bg-[#1F2937] hover:bg-[#374151] text-[#F8FAFC] border border-slate-700/80 flex items-center justify-center gap-2 transition-all min-h-[44px]"
            >
              Practice MCQs
              <Award className="w-4 h-4 text-indigo-400" />
            </button>
            <button
              onClick={onNavigateToLastMinute}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-[10px] text-xs font-semibold bg-transparent hover:bg-slate-800/60 text-[#CBD5E1] hover:text-white border border-slate-700/60 flex items-center justify-center gap-2 transition-all min-h-[44px]"
            >
              30-Min Final Revision
            </button>
          </div>
        </div>
      </div>

      {/* Personal Study Analytics & Exam Readiness */}
      <div className="premium-card rounded-[20px] p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Exam Readiness Diagnostic
            </span>
            <div className="flex items-center gap-3 mt-0.5">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-[#F8FAFC]">
                {analytics.overallReadiness}%
              </h3>
              <div className="text-xs">
                <span className={`font-bold ${tier.color} block leading-tight`}>{tier.label}</span>
                <span className="text-slate-400 text-[11px]">Academic Benchmarked</span>
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateToReadiness}
            className="self-start sm:self-auto px-3.5 py-2 rounded-[10px] text-xs font-semibold bg-slate-100 dark:bg-[#151E31] text-slate-700 dark:text-[#CBD5E1] hover:bg-slate-200 dark:hover:bg-[#1E293B] border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 transition-colors"
          >
            <span>Full Diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Progress Bar with Academic Tiers */}
        <div className="space-y-2">
          <div className="w-full bg-slate-100 dark:bg-[#0B1120] h-2.5 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-800/80">
            <div
              className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${Math.max(analytics.overallReadiness, 2)}%` }}
            />
          </div>
          <div className="grid grid-cols-4 text-[10px] text-slate-400 font-mono text-center">
            <span className="text-left">0% Developing</span>
            <span>40% Foundation</span>
            <span>60% Exam Ready</span>
            <span className="text-right">90%+ Mastered</span>
          </div>
        </div>

        {/* If student hasn't started yet, show friendly academic encouragement */}
        {isFreshStudent ? (
          <div className="p-4 rounded-[14px] bg-slate-50 dark:bg-[rgba(30,41,59,0.55)] border border-slate-200/80 dark:border-[rgba(148,163,184,0.14)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                Start your first revision session
              </span>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                Complete one topic or answer an MCQ to begin tracking your exam readiness.
              </p>
            </div>
            <button
              onClick={() => onNavigateToUnit(1)}
              className="px-4 py-2 rounded-[8px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold self-start sm:self-auto shrink-0 transition-colors"
            >
              Start Unit 1 →
            </button>
          </div>
        ) : (
          /* Analytics Metric Cards Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1 text-xs">
            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">Units Completed</span>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {analytics.completedUnitsCount} <span className="text-xs font-normal text-slate-400">/ 6</span>
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">MCQs Practiced</span>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {analytics.totalAnswered} <span className="text-xs font-normal text-slate-400">/ {analytics.totalMcqsCount}</span>
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">MCQ Accuracy</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {analytics.accuracy}%
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">Strong Units</span>
              <span className="text-base font-bold text-indigo-600 dark:text-indigo-400 truncate block">
                {analytics.strongUnits.length > 0 ? analytics.strongUnits.map(u => `U${u}`).join(', ') : 'Analyzing'}
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[11px]">Needs Revision</span>
              <span className="text-base font-bold text-amber-600 dark:text-amber-400 truncate block">
                {analytics.weakUnits.length > 0 ? analytics.weakUnits.map(u => `U${u}`).join(', ') : 'None Flagged'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Curriculum Units Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
              Curriculum Units
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Comprehensive Master's syllabus coverage for examination preparation
            </p>
          </div>
          <span className="hidden sm:inline text-xs text-slate-500 font-mono">
            6 Units • DLMIGCR01-01_E
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allUnits.map(unit => {
            const isCompleted = progress.completedUnits.includes(unit.id);
            const stats = analytics.unitStats[unit.id] || { total: 0, answered: 0, correct: 0 };
            const unitPct = stats.total > 0 ? Math.round((stats.answered / stats.total) * 100) : 0;

            return (
              <div
                key={unit.id}
                className="premium-card rounded-[18px] p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-indigo-400/60 dark:hover:border-indigo-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">
                      UNIT 0{unit.id}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" /> {unit.estimatedTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-2.5">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {unit.subtitle}
                  </p>

                  {/* High-yield metric chips */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800/80 my-3 text-[11px] text-center">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Concepts</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{unit.keyConcepts.length}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Questions</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{unit.importantQuestions.length}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">MCQs</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{unit.mcqs.length}</span>
                    </div>
                  </div>

                  {/* MCQ Progress Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">MCQ Progress</span>
                      <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{unitPct}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${unitPct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigateToUnit(unit.id)}
                    className="w-full min-h-[44px] px-4 rounded-[10px] text-xs font-semibold bg-slate-100 dark:bg-[#151E31] text-slate-800 dark:text-[#CBD5E1] group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-600 dark:group-hover:text-white transition-all flex items-center justify-center gap-1.5 border border-slate-200/80 dark:border-slate-800"
                  >
                    Continue Unit →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tutor SK SAHIL Academic Guidance Quote */}
      <div className="premium-card rounded-[18px] p-5 sm:p-6 border-l-4 border-l-indigo-600 dark:border-l-indigo-500 flex items-start gap-4">
        <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-slate-800 dark:text-[#CBD5E1] leading-relaxed italic">
            “Do not try to memorize everything equally. Master the frameworks, comparisons, processes, definitions and numbers most likely to convert directly into exam marks.”
          </p>
          <div className="text-xs font-semibold text-slate-900 dark:text-white pt-1">
            — Tutor SK SAHIL <span className="text-slate-400 font-normal">| IU International University of Applied Sciences</span>
          </div>
        </div>
      </div>
    </div>
  );
};
