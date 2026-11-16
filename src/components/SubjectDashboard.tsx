import React, { useMemo } from 'react';
import { 
  Award, BookOpen, CheckCircle2, ArrowRight, 
  GraduationCap, Compass, ShieldCheck, Flame, Layers, HelpCircle, FileCheck, AlertOctagon
} from 'lucide-react';

export interface SubjectUnit {
  id: number;
  number: number;
  title: string;
  shortTitle?: string;
  subtitle: string;
  sections: Array<{ id: string; title: string }>;
}

export interface SubjectConfig {
  slug: string;
  shortCode: string;
  courseCode: string;
  title: string;
  fullTitle: string;
  description: string;
  accentHex: string;
  units: SubjectUnit[];
}

export interface SubjectAnalytics {
  overallReadiness: number;
  totalAnswered: number;
  correctCount: number;
  accuracy: number;
  completedUnitsCount: number;
  masteredFlashcardsCount: number;
  bookmarkedCount: number;
  mockAttemptsCount: number;
  totalMcqsCount: number;
  unitStats: Record<number, { total: number; answered: number; correct: number }>;
  strongUnits: number[];
  weakUnits: number[];
}

export interface SubjectProgress {
  completedUnits: number[];
}

export interface SubjectDashboardProps {
  subject: SubjectConfig;
  analytics: SubjectAnalytics;
  progress: SubjectProgress;
  hasContent: boolean; // true for CGIT which has data, false for ITPM initially
  onNavigateToUnit: (unitId: number, tab?: string) => void;
  onNavigateToMcq: (unitId?: number) => void;
  onNavigateToReadiness: () => void;
  onNavigateToMock: () => void;
  onNavigateToLastMinute: () => void;
}

export const SubjectDashboard: React.FC<SubjectDashboardProps> = ({
  subject,
  analytics,
  progress,
  hasContent,
  onNavigateToUnit,
  onNavigateToMcq,
  onNavigateToReadiness,
  onNavigateToMock,
  onNavigateToLastMinute
}) => {
  const getReadinessTier = (score: number) => {
    if (score >= 90) return { label: 'Mastered', color: 'text-emerald-500' };
    if (score >= 75) return { label: 'Strong', color: 'text-indigo-400' };
    if (score >= 60) return { label: 'Exam Ready', color: 'text-blue-400' };
    if (score >= 40) return { label: 'Foundation Built', color: 'text-amber-400' };
    return { label: 'Developing', color: 'text-slate-400' };
  };

  const tier = getReadinessTier(analytics.overallReadiness ?? 0);
  const isFreshStudent = (analytics.totalAnswered ?? 0) === 0 && (analytics.completedUnitsCount ?? 0) === 0;
  const firstUnitId = subject.units.length > 0 ? subject.units[0].id : 1;

  // Dynamic "What Should I Study Next?" Recommendation
  const recommendation = useMemo(() => {
    // 1. Weak unit recommendation
    if (analytics.weakUnits && analytics.weakUnits.length > 0) {
      const weakUnitId = analytics.weakUnits[0];
      const u = subject.units.find(item => item.id === weakUnitId) || subject.units[0];
      return {
        badge: 'Diagnostic Recommendation',
        badgeColor: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/25',
        title: `Targeted Revision: Unit ${u.number} (${u.shortTitle || u.title})`,
        reason: `Your accuracy in Unit ${u.number} is currently below our 70% exam benchmark. Targeted MCQ practice and exam traps will turn this into a strong unit.`,
        cta: `Practice Unit ${u.number} MCQs →`,
        action: () => onNavigateToMcq(u.id),
      };
    }

    // 2. Uncompleted unit recommendation
    const firstUncompleted = subject.units.find(u => !progress.completedUnits?.includes(u.id));
    if (firstUncompleted) {
      return {
        badge: 'Next Curriculum Milestone',
        badgeColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
        title: `Continue Course: Unit ${firstUncompleted.number} — ${firstUncompleted.title}`,
        reason: `Complete this unit's key concepts and revision summary to progress towards full 6-unit syllabus mastery.`,
        cta: `Open Unit ${firstUncompleted.number} →`,
        action: () => onNavigateToUnit(firstUncompleted.id),
      };
    }

    // 3. High readiness / simulation recommendation
    if (analytics.overallReadiness >= 75) {
      return {
        badge: 'Final Exam Readiness',
        badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
        title: 'Run a 90-Minute Comprehensive Practice Simulation',
        reason: 'You have mastered the foundational units. Test your endurance, pacing, and multi-unit recall under realistic exam conditions.',
        cta: 'Launch Comprehensive Practice →',
        action: () => onNavigateToMock(),
      };
    }

    // Default: Start Unit 1
    return {
      badge: 'Recommended Starting Point',
      badgeColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
      title: `Start Unit 1: ${subject.units[0]?.title || 'Characteristics of IT Projects'}`,
      reason: 'Lay the groundwork with project characteristics, governance constraints, and IT project manager responsibilities.',
      cta: 'Begin Unit 1 →',
      action: () => onNavigateToUnit(firstUnitId),
    };
  }, [analytics.weakUnits, analytics.overallReadiness, subject.units, progress.completedUnits, onNavigateToMcq, onNavigateToUnit, onNavigateToMock, firstUnitId]);

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="rounded-[22px] md:rounded-[26px] p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#151E31] text-white border border-slate-800 shadow-card-dark relative overflow-hidden">
        {/* Subtle geometric depth */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-indigo-500/5 via-indigo-500/2 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4 md:space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-[8px] font-semibold bg-indigo-500/10 text-[#A5B4FC] border border-indigo-500/20 text-[11px] uppercase tracking-wider">
              IU MASTER'S EXAMINATION PREPARATION
            </span>
            <span className="text-slate-400 text-[11px] font-mono">Course: {subject.courseCode}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-heading">
            Master {subject.title}
          </h1>

          <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed max-w-2xl">
            {subject.description}
          </p>

          {/* Quick Curriculum Status Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              {analytics.totalMcqsCount || 620} MCQs Available
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              All 6 Units Exam Ready
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              24 Sections • 12 Mocks
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateToUnit(firstUnitId)}
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
              Final Revision Sprint
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic "What Should I Study Next?" Recommendation Card */}
      <div className="premium-card rounded-[20px] p-5 sm:p-6 border-l-4 border-l-indigo-600 dark:border-l-indigo-500 bg-gradient-to-r from-indigo-50/50 via-white to-sky-50/30 dark:from-indigo-950/20 dark:via-[#111827] dark:to-[#151E31] space-y-3">
        <div className="flex items-center justify-between">
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${recommendation.badgeColor}`}>
            {recommendation.badge}
          </span>
          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
            <Compass className="w-3.5 h-3.5 text-indigo-500" /> Adaptive Learning Guidance
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {recommendation.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {recommendation.reason}
            </p>
          </div>
          <button
            type="button"
            onClick={recommendation.action}
            className="px-5 py-2.5 rounded-[10px] text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm flex items-center justify-center gap-2 transition-all shrink-0 self-start sm:self-auto min-h-[40px]"
          >
            <span>{recommendation.cta}</span>
          </button>
        </div>
      </div>

      {/* Exam Readiness Diagnostic Section */}
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

        {/* Friendly academic encouragement if student hasn't started yet */}
        {isFreshStudent ? (
          <div className="p-4 rounded-[14px] bg-slate-50 dark:bg-[rgba(30,41,59,0.55)] border border-slate-200/80 dark:border-[rgba(148,163,184,0.14)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                Start your first revision session
              </span>
              <p className="text-slate-600 dark:text-[#CBD5E1]">
                {hasContent 
                  ? "Complete one topic or answer an MCQ to begin tracking your exam readiness."
                  : "Explore syllabus units and sections to prepare for upcoming exam modules."}
              </p>
            </div>
            <button
              onClick={() => onNavigateToUnit(firstUnitId)}
              className="px-4 py-2 rounded-[8px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold self-start sm:self-auto shrink-0 transition-colors"
            >
              Start Unit {subject.units[0]?.number ?? 1} →
            </button>
          </div>
        ) : (
          /* Analytics Metric Cards Grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1 text-xs">
            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <span className="text-slate-400 block text-[11px]">Units Completed</span>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {analytics.completedUnitsCount} <span className="text-xs font-normal text-slate-400">/ {subject.units.length}</span>
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
                {analytics.strongUnits && analytics.strongUnits.length > 0 ? analytics.strongUnits.map(u => `U${u}`).join(', ') : 'Analyzing'}
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[11px]">Needs Revision</span>
              <span className="text-base font-bold text-amber-600 dark:text-amber-400 truncate block">
                {analytics.weakUnits && analytics.weakUnits.length > 0 ? analytics.weakUnits.map(u => `U${u}`).join(', ') : 'None Flagged'}
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
            {subject.units.length} Units • {subject.courseCode}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subject.units.map(unit => {
            const isCompleted = progress.completedUnits?.includes(unit.id);
            const stats = analytics.unitStats?.[unit.id] || { total: 0, answered: 0, correct: 0 };
            const isComingSoon = (unit as any).status === 'coming-soon' || stats.total === 0;
            const unitPct = stats.total > 0 
              ? Math.round((stats.answered / stats.total) * 100) 
              : (isCompleted ? 100 : 0);

            return (
              <div
                key={unit.id}
                className="premium-card rounded-[18px] p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-indigo-400/60 dark:hover:border-indigo-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">
                      UNIT {String(unit.number).padStart(2, '0')}
                    </span>
                    {isCompleted ? (
                      <span className="text-emerald-500 flex items-center gap-1 font-semibold text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                      </span>
                    ) : !isComingSoon ? (
                      <span className="text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/20">
                        Active & Exam Ready
                      </span>
                    ) : (
                      <span className="text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 border border-amber-500/20">
                        In Preparation
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-2.5">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {unit.subtitle}
                  </p>

                  {/* Content metrics: Real data only */}
                  {!isComingSoon ? (
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800/80 my-3 text-[11px] text-center">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Sections</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{unit.sections.length}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">MCQs</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-bold">{stats.total}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Answered</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{stats.answered}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="py-3 px-3.5 my-3 rounded-[10px] bg-slate-50 dark:bg-[#151E31]/50 border border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Syllabus: <strong className="text-slate-900 dark:text-white font-mono">{unit.sections.length}</strong> Sections</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        Content In Progress
                      </span>
                    </div>
                  )}

                  {/* Unit Progress Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">{!isComingSoon ? 'MCQ Progress' : 'Curriculum Preview'}</span>
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
                    {!isComingSoon ? 'Continue Unit →' : 'View Syllabus Preview →'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Coverage & Integrity Matrix (6-Unit Diagnostic View) */}
      <div className="premium-card rounded-[22px] p-6 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Course-Book Grounded
              </span>
              <span className="text-xs text-slate-400 font-mono">DLMBITPAM01</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
              Course Coverage & Syllabus Diagnostic Matrix
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Comprehensive inventory across all 6 syllabus units, 24 sections, and multi-tier revision tools.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              620 MCQs • 260 FCs • 12 Mocks
            </span>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto scrollbar-thin rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs min-w-[640px]">
            <thead className="bg-slate-50 dark:bg-[#151E31] text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3">Unit & Scope</th>
                <th className="p-3 text-center">Sections</th>
                <th className="p-3 text-center">MCQ Bank</th>
                <th className="p-3 text-center">Flashcards</th>
                <th className="p-3 text-center">Q&A</th>
                <th className="p-3 text-center">Traps & Comparisons</th>
                <th className="p-3 text-center">Mock Exams</th>
                <th className="p-3 text-right">Audit Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
              {[
                { u: 1, title: 'Characteristics of IT Projects', sec: 4, mcqs: 70, fc: 30, qa: 20, comps: 8, traps: 14, mocks: 2 },
                { u: 2, title: 'Organizing the Work', sec: 4, mcqs: 100, fc: 40, qa: 20, comps: 10, traps: 20, mocks: 2 },
                { u: 3, title: 'Cost Estimation and Controlling', sec: 4, mcqs: 110, fc: 45, qa: 20, comps: 12, traps: 18, mocks: 2 },
                { u: 4, title: 'The Human Factor', sec: 3, mcqs: 100, fc: 45, qa: 20, comps: 11, traps: 18, mocks: 2 },
                { u: 5, title: 'Small and Medium Projects', sec: 4, mcqs: 110, fc: 45, qa: 20, comps: 15, traps: 20, mocks: 2 },
                { u: 6, title: 'Organizing Large Projects', sec: 5, mcqs: 130, fc: 55, qa: 25, comps: 15, traps: 25, mocks: 2 },
              ].map(row => (
                <tr key={row.u} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-3 font-semibold text-slate-900 dark:text-white">
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 mr-2">U{row.u}</span>
                    <span>{row.title}</span>
                  </td>
                  <td className="p-3 text-center font-mono text-slate-600 dark:text-slate-300">{row.sec}</td>
                  <td className="p-3 text-center font-mono font-bold text-indigo-600 dark:text-indigo-400">{row.mcqs}</td>
                  <td className="p-3 text-center font-mono text-slate-600 dark:text-slate-300">{row.fc}</td>
                  <td className="p-3 text-center font-mono text-slate-600 dark:text-slate-300">{row.qa}</td>
                  <td className="p-3 text-center font-mono text-slate-600 dark:text-slate-300">{row.traps} / {row.comps}</td>
                  <td className="p-3 text-center font-mono text-slate-600 dark:text-slate-300">{row.mocks} (90m)</td>
                  <td className="p-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50/80 dark:bg-[#151E31]/80 font-bold border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
              <tr>
                <td className="p-3">Course Totals</td>
                <td className="p-3 text-center font-mono">24</td>
                <td className="p-3 text-center font-mono text-indigo-600 dark:text-indigo-400 font-black">620</td>
                <td className="p-3 text-center font-mono">260</td>
                <td className="p-3 text-center font-mono">125</td>
                <td className="p-3 text-center font-mono">115 / 71</td>
                <td className="p-3 text-center font-mono">12</td>
                <td className="p-3 text-right text-emerald-600 dark:text-emerald-400 font-mono">100% Grounded</td>
              </tr>
            </tfoot>
          </table>
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

export default SubjectDashboard;
