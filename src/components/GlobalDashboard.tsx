import React, { useMemo } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  CheckCircle2,
  GraduationCap,
  Target,
  Layers
} from 'lucide-react';

export interface SubjectItem {
  slug: string;
  shortCode: string;
  title: string;
  fullTitle: string;
  courseCode: string;
  unitCount: number;
  accentHex: string;
  description: string;
}

export interface SubjectProgressSummary {
  overallReadiness: number;
  totalAnswered: number;
  correctCount: number;
  accuracy: number;
  completedUnitsCount: number;
  masteredFlashcardsCount: number;
  bookmarkedCount: number;
  mockAttemptsCount: number;
  totalMcqsCount: number;
  lastActivity?: number;
}

export interface GlobalDashboardProps {
  subjects: Array<SubjectItem>;
  getSubjectProgress: (slug: string) => SubjectProgressSummary;
  onNavigateToSubject: (slug: string) => void;
  onNavigateToMcq: (slug: string) => void;
  onContinueStudying: () => void;
}

function formatRelativeTime(timestamp?: number): string {
  if (!timestamp || timestamp <= 0) {
    return 'Not started yet';
  }

  const now = Date.now();
  const diffMs = now - timestamp;

  if (diffMs < 0) {
    return 'Just now';
  }

  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 60) {
    return 'Just now';
  }

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    return `${diffMin} ${diffMin === 1 ? 'minute' : 'minutes'} ago`;
  }

  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  }

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  }

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 5) {
    return `${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ago`;
  }

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
  }

  const diffYears = Math.floor(diffDays / 365);
  return `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
}

function getReadinessTier(score: number): { label: string; color: string } {
  if (score >= 90) return { label: 'Mastered', color: 'text-emerald-500 dark:text-emerald-400' };
  if (score >= 75) return { label: 'Strong', color: 'text-indigo-600 dark:text-indigo-400' };
  if (score >= 60) return { label: 'Exam Ready', color: 'text-blue-600 dark:text-blue-400' };
  if (score >= 40) return { label: 'Foundation Built', color: 'text-amber-600 dark:text-amber-400' };
  return { label: 'Developing', color: 'text-slate-500 dark:text-slate-400' };
}

export const GlobalDashboard: React.FC<GlobalDashboardProps> = ({
  subjects,
  getSubjectProgress,
  onNavigateToSubject,
  onNavigateToMcq,
  onContinueStudying
}) => {
  // Identify the most recently active subject, falling back to the first subject
  const lastActiveSubject = useMemo(() => {
    if (!subjects || subjects.length === 0) return null;
    let latestTimestamp = -1;
    let candidate = subjects[0];

    for (const subject of subjects) {
      const progress = getSubjectProgress(subject.slug);
      if (progress?.lastActivity && progress.lastActivity > latestTimestamp) {
        latestTimestamp = progress.lastActivity;
        candidate = subject;
      }
    }
    return candidate;
  }, [subjects, getSubjectProgress]);

  // Aggregate progress metrics across all subjects
  const aggregates = useMemo(() => {
    let activeSubjectsCount = 0;
    let totalUnitsCompleted = 0;
    let totalCurriculumUnits = 0;
    let totalMcqsAttempted = 0;
    let totalMcqsAvailable = 0;
    let totalCorrectCount = 0;
    let totalRevisionItems = 0;
    let totalMockExams = 0;
    let totalReadinessSum = 0;

    subjects.forEach((subject) => {
      totalCurriculumUnits += subject.unitCount || 0;
      const progress = getSubjectProgress(subject.slug);
      if (!progress) return;

      const isSubjectStudied =
        (progress.lastActivity !== undefined && progress.lastActivity > 0) ||
        progress.totalAnswered > 0 ||
        progress.completedUnitsCount > 0 ||
        progress.masteredFlashcardsCount > 0 ||
        progress.bookmarkedCount > 0 ||
        progress.mockAttemptsCount > 0 ||
        progress.overallReadiness > 0;

      if (isSubjectStudied) {
        activeSubjectsCount += 1;
      }

      totalUnitsCompleted += progress.completedUnitsCount || 0;
      totalMcqsAttempted += progress.totalAnswered || 0;
      totalMcqsAvailable += progress.totalMcqsCount || 0;
      totalCorrectCount += progress.correctCount || 0;
      totalRevisionItems += (progress.masteredFlashcardsCount || 0) + (progress.bookmarkedCount || 0);
      totalMockExams += progress.mockAttemptsCount || 0;
      totalReadinessSum += progress.overallReadiness || 0;
    });

    const hasRealData =
      activeSubjectsCount > 0 ||
      totalUnitsCompleted > 0 ||
      totalMcqsAttempted > 0 ||
      totalMockExams > 0 ||
      totalRevisionItems > 0;

    const overallAccuracy =
      totalMcqsAttempted > 0 ? Math.round((totalCorrectCount / totalMcqsAttempted) * 100) : 0;

    const averageReadiness =
      subjects.length > 0 ? Math.round(totalReadinessSum / subjects.length) : 0;

    return {
      hasRealData,
      activeSubjectsCount,
      totalUnitsCompleted,
      totalCurriculumUnits,
      totalMcqsAttempted,
      totalMcqsAvailable,
      overallAccuracy,
      totalRevisionItems,
      totalMockExams,
      averageReadiness
    };
  }, [subjects, getSubjectProgress]);

  const targetMcqSlug = lastActiveSubject?.slug || (subjects.length > 0 ? subjects[0].slug : '');
  const tier = getReadinessTier(aggregates.averageReadiness);

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* 1. Hero Section */}
      <div className="rounded-[22px] md:rounded-[26px] p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#151E31] text-white border border-slate-800 shadow-card-dark relative overflow-hidden">
        {/* Subtle geometric depth & glow */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-l from-indigo-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4 md:space-y-5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-[8px] font-semibold bg-indigo-500/10 text-[#A5B4FC] border border-indigo-500/20 text-[11px] uppercase tracking-wider">
              IU MASTER'S EXAMINATION PREPARATION
            </span>
            {lastActiveSubject && (
              <span className="text-slate-400 text-[11px] font-mono flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-indigo-400" />
                Active: {lastActiveSubject.shortCode}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-heading">
            Master Your IU Exams
          </h1>

          <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed max-w-2xl">
            One focused workspace for revision, practice, mock examinations, high-yield concepts and exam readiness across your subjects.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onContinueStudying}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm flex items-center justify-center gap-2 transition-all min-h-[44px]"
            >
              <span>Continue Studying</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToMcq(targetMcqSlug)}
              disabled={!targetMcqSlug}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-[10px] text-xs font-semibold bg-[#1F2937] hover:bg-[#374151] text-[#F8FAFC] border border-slate-700/80 flex items-center justify-center gap-2 transition-all min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Practice MCQs</span>
              <Award className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. OVERALL EXAM READINESS Section */}
      {aggregates.hasRealData ? (
        <div className="premium-card rounded-[20px] p-5 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Overall Exam Readiness
              </span>
              <div className="flex items-center gap-3 mt-0.5">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-[#F8FAFC]">
                  {aggregates.averageReadiness}%
                </h3>
                <div className="text-xs">
                  <span className={`font-bold ${tier.color} block leading-tight`}>{tier.label}</span>
                  <span className="text-slate-400 text-[11px]">Academic Benchmark Across Subjects</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1.5 rounded-[10px] bg-slate-100 dark:bg-[#151E31] border border-slate-200 dark:border-slate-800 font-mono font-semibold text-[11px]">
                {aggregates.activeSubjectsCount} of {subjects.length} Subjects Active
              </span>
            </div>
          </div>

          {/* Progress Bar with Academic Tiers */}
          <div className="space-y-2">
            <div className="w-full bg-slate-100 dark:bg-[#0B1120] h-2.5 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-800/80">
              <div
                className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.max(aggregates.averageReadiness, 2)}%` }}
              />
            </div>
            <div className="grid grid-cols-4 text-[10px] text-slate-400 font-mono text-center">
              <span className="text-left">0% Developing</span>
              <span>40% Foundation</span>
              <span>60% Exam Ready</span>
              <span className="text-right">90%+ Mastered</span>
            </div>
          </div>

          {/* Aggregate Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1 text-xs">
            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>Subjects Active</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {aggregates.activeSubjectsCount}{' '}
                <span className="text-xs font-normal text-slate-400">/ {subjects.length}</span>
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>Units Completed</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {aggregates.totalUnitsCompleted}{' '}
                <span className="text-xs font-normal text-slate-400">/ {aggregates.totalCurriculumUnits}</span>
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>MCQs Attempted</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {aggregates.totalMcqsAttempted}{' '}
                {aggregates.totalMcqsAvailable > 0 && (
                  <span className="text-xs font-normal text-slate-400">/ {aggregates.totalMcqsAvailable}</span>
                )}
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                <Target className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Accuracy</span>
              </div>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {aggregates.overallAccuracy}%
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                <Award className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>Revision Items</span>
              </div>
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {aggregates.totalRevisionItems}
              </span>
            </div>

            <div className="p-3.5 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/70 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                <Clock className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                <span>Mock Exams</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                {aggregates.totalMockExams}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Friendly Empty State */
        <div className="premium-card rounded-[20px] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-[14px] bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center shrink-0 text-indigo-600 dark:text-indigo-400">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                Overall Exam Readiness
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                Begin studying a subject to track your overall progress
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
                Work through curriculum units, test yourself with MCQs, or review flashcards in any enrolled subject. Your cross-subject readiness analytics and exam diagnostic will automatically update here.
              </p>
            </div>
            {subjects.length > 0 && (
              <button
                onClick={() => onNavigateToSubject(subjects[0].slug)}
                className="px-4 py-2.5 rounded-[10px] text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm min-h-[44px]"
              >
                <span>Start {subjects[0].shortCode}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. YOUR SUBJECTS Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC] font-heading">
              Your Subjects
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select a subject to access curriculum units, cheat sheets, high-yield questions, and mock examinations
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-slate-100 dark:bg-[#151E31] text-xs font-mono text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            {subjects.length} Enrolled {subjects.length === 1 ? 'Subject' : 'Subjects'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjects.map((subject) => {
            const progress = getSubjectProgress(subject.slug) || {
              overallReadiness: 0,
              totalAnswered: 0,
              correctCount: 0,
              accuracy: 0,
              completedUnitsCount: 0,
              masteredFlashcardsCount: 0,
              bookmarkedCount: 0,
              mockAttemptsCount: 0,
              totalMcqsCount: 0
            };

            const isStarted =
              (progress.lastActivity !== undefined && progress.lastActivity > 0) ||
              progress.totalAnswered > 0 ||
              progress.completedUnitsCount > 0 ||
              progress.overallReadiness > 0;

            const relativeTime = formatRelativeTime(progress.lastActivity);

            return (
              <div
                key={subject.slug}
                className="premium-card rounded-[20px] p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-indigo-400/60 dark:hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all group relative overflow-hidden"
              >
                {/* Subject Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity"
                  style={{ backgroundColor: subject.accentHex || '#6366F1' }}
                />

                <div className="space-y-3.5">
                  {/* Top Bar: Short Code, Course Code & Unit Count */}
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2 py-0.5 rounded-[6px] font-mono font-bold text-[11px]"
                        style={{
                          backgroundColor: subject.accentHex ? `${subject.accentHex}18` : 'rgba(99, 102, 241, 0.12)',
                          color: subject.accentHex || '#818CF8'
                        }}
                      >
                        {subject.shortCode}
                      </span>
                      <span className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">
                        {subject.courseCode}
                      </span>
                    </div>

                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      {subject.unitCount} Units
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F8FAFC] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {subject.title}
                    </h3>
                    {subject.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {subject.description}
                      </p>
                    )}
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 dark:text-slate-400">Exam Readiness</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">
                        {progress.overallReadiness}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800/80 h-2 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${Math.max(progress.overallReadiness, isStarted ? 2 : 0)}%`,
                          backgroundColor: subject.accentHex || '#6366F1'
                        }}
                      />
                    </div>
                  </div>

                  {/* Subject Quick Meta: Completed Units & Last Activity */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 truncate">
                        {progress.completedUnitsCount} / {subject.unitCount} Units
                      </span>
                    </div>
                    <div className="p-2.5 rounded-[10px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 truncate" title={relativeTime}>
                        {relativeTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subject CTA Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onNavigateToSubject(subject.slug)}
                    className="flex-1 min-h-[44px] px-4 rounded-[10px] text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{isStarted ? 'Continue Subject' : 'Start Subject'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigateToMcq(subject.slug)}
                    title={`Practice MCQs for ${subject.shortCode}`}
                    className="min-h-[44px] px-3.5 rounded-[10px] text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-[#151E31] dark:hover:bg-[#1E293B] text-slate-700 dark:text-[#CBD5E1] transition-all flex items-center justify-center border border-slate-200/80 dark:border-slate-800"
                  >
                    <Award className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Optional "More Subjects" Placeholder Card */}
          <div className="premium-card rounded-[20px] p-5 sm:p-6 flex flex-col justify-between border-dashed border-2 border-slate-300/80 dark:border-slate-700/80 bg-slate-50/40 dark:bg-[#111827]/40 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-dashed border-slate-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded-[6px] font-mono font-semibold text-[11px] bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  ROADMAP
                </span>
                <span className="text-slate-400 text-[11px] font-mono">IU Master's</span>
              </div>

              <div className="w-10 h-10 rounded-[12px] bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-[#F8FAFC]">
                  More Subjects Coming
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Additional IU Master's curriculum modules are being structured according to official module syllabi and exam regulations.
                </p>
              </div>

              <div className="space-y-1.5 pt-1 text-[11px] text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                  <span>Aligned with official IU Examination Guides</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                  <span>Interactive high-yield Q&amp;A and mock exams</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="w-full min-h-[44px] px-4 rounded-[10px] text-xs font-semibold bg-slate-100/80 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60 select-none">
                <span>Curriculum Modules in Preparation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Tutor Academic Guidance Quote Card */}
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
