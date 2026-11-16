import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Award, Clock, CheckCircle2, XCircle, AlertTriangle, ArrowRight, 
  RotateCcw, Sparkles, Filter, Bookmark, Check, ShieldAlert, BookOpen,
  ChevronRight, Flag, HelpCircle
} from 'lucide-react';
import { getAllMcqs } from '../data/subjects/itpm';
import { MCQ } from '../types';
import { TutorQuoteCard } from './TutorQuoteCard';

type ExamMode = 'quick' | 'standard' | 'full' | 'weak';

interface ExamConfig {
  name: string;
  questionCount: number;
  timeLimitMinutes: number;
  description: string;
  badge: string;
}

const EXAM_CONFIGS: Record<ExamMode, ExamConfig> = {
  quick: {
    name: 'Quick Sprint Mock',
    questionCount: 30,
    timeLimitMinutes: 30,
    description: '30 balanced questions across all 6 units. Ideal for a fast daily knowledge check.',
    badge: '30 Min · 30 Marks'
  },
  standard: {
    name: 'Standard Comprehensive Mock',
    questionCount: 50,
    timeLimitMinutes: 60,
    description: '50 questions spanning all 24 syllabus sections with balanced easy, medium, and hard mix.',
    badge: '60 Min · 50 Marks'
  },
  full: {
    name: 'Official Full Exam Simulation',
    questionCount: 60,
    timeLimitMinutes: 90,
    description: 'Authentic IU examination simulation. Exactly 90 minutes, 60 marks, 50% pass mark (30/60).',
    badge: '90 Min · 60 Marks · Official'
  },
  weak: {
    name: 'High-Difficulty & Trap Practice',
    questionCount: 35,
    timeLimitMinutes: 45,
    description: 'Concentrated session of questions tagged Hard or containing critical exam pitfalls.',
    badge: '45 Min · 35 Marks · Advanced'
  }
};

export const FinalExamPractice: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<ExamMode | null>(null);
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isExamCompleted, setIsExamCompleted] = useState<boolean>(false);

  // Exam session state
  const [examQuestions, setExamQuestions] = useState<MCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [showInstantFeedback, setShowInstantFeedback] = useState<boolean>(false);
  const [reviewMistakesOnly, setReviewMistakesOnly] = useState<boolean>(false);

  // All MCQs pool
  const allMcqs = useMemo(() => getAllMcqs(), []);

  // Timer Effect
  useEffect(() => {
    if (!isExamActive || isExamCompleted) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isExamCompleted]);

  // Start exam handler
  const handleStartExam = (mode: ExamMode) => {
    const config = EXAM_CONFIGS[mode];
    let pool: MCQ[] = [];

    if (mode === 'weak') {
      pool = allMcqs.filter(m => m.difficulty === 'hard' || !!m.examTrap);
    } else {
      pool = [...allMcqs];
    }

    // Shuffle and pick
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, config.questionCount);

    setExamQuestions(selected);
    setSelectedMode(mode);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeRemainingSeconds(config.timeLimitMinutes * 60);
    setIsExamActive(true);
    setIsExamCompleted(false);
    setReviewMistakesOnly(false);
  };

  const handleSelectOption = (questionId: string, optionLetter: string) => {
    if (isExamCompleted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionLetter }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleFinishExam = () => {
    setIsExamActive(false);
    setIsExamCompleted(true);
  };

  // Score Calculation
  const scoreStats = useMemo(() => {
    let correct = 0;
    const unitBreakdown: Record<number, { correct: number; total: number }> = {
      1: { correct: 0, total: 0 },
      2: { correct: 0, total: 0 },
      3: { correct: 0, total: 0 },
      4: { correct: 0, total: 0 },
      5: { correct: 0, total: 0 },
      6: { correct: 0, total: 0 },
    };

    examQuestions.forEach(q => {
      const uId = q.unit || q.sourceUnit || (q.source && q.source.unit) || 1;
      if (unitBreakdown[uId]) {
        unitBreakdown[uId].total += 1;
      }
      if (userAnswers[q.id] === q.correctAnswer) {
        correct += 1;
        if (unitBreakdown[uId]) {
          unitBreakdown[uId].correct += 1;
        }
      }
    });

    const total = examQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const isPassed = percentage >= 50;

    return { correct, total, percentage, isPassed, unitBreakdown };
  }, [examQuestions, userAnswers]);

  // Format Time Helper
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Filtered review questions
  const displayedQuestions = useMemo(() => {
    if (!isExamCompleted) return examQuestions;
    if (reviewMistakesOnly) {
      return examQuestions.filter(q => userAnswers[q.id] !== q.correctAnswer);
    }
    return examQuestions;
  }, [isExamCompleted, reviewMistakesOnly, examQuestions, userAnswers]);

  const currentQuestion = examQuestions[currentIndex];

  // =========================================================================
  // Screen 1: Mode Selection
  // =========================================================================
  if (!isExamActive && !isExamCompleted) {
    return (
      <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-16">
        {/* Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
              DLMBITPAM01 · Examination Simulator
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              IU Final Examination Practice
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Test your exam readiness with official timed simulations. Authentic IU multiple-choice formats with instant or deferred marking, full distractor analysis, and unit-by-unit scoring.
            </p>
          </div>
        </div>

        {/* Tutor Quote Card */}
        <TutorQuoteCard />

        {/* Mode Cards */}
        <div className="space-y-4">
          <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-500" />
            <span>Select Practice or Exam Mode</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(Object.keys(EXAM_CONFIGS) as ExamMode[]).map(mode => {
              const cfg = EXAM_CONFIGS[mode];
              const isSimulation = mode === 'full';
              return (
                <div
                  key={mode}
                  className={`p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    isSimulation
                      ? 'bg-gradient-to-br from-indigo-500/10 via-white to-sky-500/5 dark:from-indigo-950/40 dark:via-slate-900 dark:to-sky-950/20 border-indigo-500/40 shadow-md ring-1 ring-indigo-500/20'
                      : 'bg-white dark:bg-slate-900/70 border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {cfg.badge}
                      </span>
                      {isSimulation && (
                        <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Recommended Final Prep
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {cfg.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cfg.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {cfg.timeLimitMinutes} min
                      </span>
                      <span>•</span>
                      <span>{cfg.questionCount} Questions</span>
                    </div>

                    <button
                      onClick={() => handleStartExam(mode)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 transition-all"
                    >
                      <span>Start Simulation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Screen 2: Active Exam Session
  // =========================================================================
  if (isExamActive && currentQuestion) {
    const isAnswered = !!userAnswers[currentQuestion.id];
    const isFlagged = !!flaggedQuestions[currentQuestion.id];
    const timeIsLow = timeRemainingSeconds < 300; // < 5 mins

    return (
      <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto pb-16">
        {/* Sticky Control Header */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4 sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Question {currentIndex + 1} of {examQuestions.length}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Unit {currentQuestion.unit || 1}
            </span>
          </div>

          {/* Timer Display */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold border transition-colors ${
              timeIsLow
                ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30 animate-pulse'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>

            <button
              onClick={() => toggleFlag(currentQuestion.id)}
              className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                isFlagged
                  ? 'bg-amber-500/10 text-amber-600 border-amber-500/30'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-transparent'
              }`}
              title="Flag for review"
            >
              <Flag className="w-4 h-4" />
            </button>

            <button
              onClick={handleFinishExam}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-all shadow-sm"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / examQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQuestion.question}
            </h3>
            <span className="text-[10px] font-mono text-slate-400 shrink-0">
              Section {currentQuestion.section}
            </span>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {Object.entries(currentQuestion.options).map(([letter, text]) => {
              const isSelected = userAnswers[currentQuestion.id] === letter;
              return (
                <button
                  key={letter}
                  onClick={() => handleSelectOption(currentQuestion.id, letter)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20 shadow-sm'
                      : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-800'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {letter}
                  </span>
                  <span className="text-xs sm:text-sm pt-0.5 leading-relaxed text-slate-900 dark:text-slate-100 font-medium">
                    {text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant feedback toggle in practice mode */}
          {selectedMode !== 'full' && (
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showInstantFeedback}
                  onChange={e => setShowInstantFeedback(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>Instant Explanation Mode</span>
              </label>

              {showInstantFeedback && isAnswered && (
                <span className={`font-bold ${
                  userAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}>
                  {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? '✓ Correct Answer'
                    : `✗ Incorrect (Correct: ${currentQuestion.correctAnswer})`}
                </span>
              )}
            </div>
          )}

          {/* Instant Explanation Box */}
          {showInstantFeedback && isAnswered && (
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/50 space-y-2 text-xs">
              <span className="font-bold text-slate-900 dark:text-white block">Explanation:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              {currentQuestion.examTrap && (
                <div className="text-amber-700 dark:text-amber-300 font-semibold pt-1">
                  Trap: {currentQuestion.examTrap}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Nav Buttons & Question Grid Jump */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 transition-all"
          >
            Previous
          </button>

          <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] sm:max-w-md py-1">
            {examQuestions.map((q, idx) => {
              const answered = !!userAnswers[q.id];
              const flagged = !!flaggedQuestions[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-[10px] font-bold font-mono transition-all shrink-0 ${
                    isCurrent
                      ? 'ring-2 ring-indigo-500 bg-indigo-600 text-white'
                      : flagged
                      ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40'
                      : answered
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                      : 'bg-slate-100 dark:bg-slate-800/60 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
            disabled={currentIndex === examQuestions.length - 1}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-40 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Screen 3: Results & Comprehensive Review
  // =========================================================================
  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto pb-16">
      {/* Score Summary Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl relative overflow-hidden ${
        scoreStats.isPassed
          ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-indigo-950 text-white border-emerald-500/30'
          : 'bg-gradient-to-br from-rose-950 via-slate-900 to-slate-900 text-white border-rose-500/30'
      }`}>
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${
              scoreStats.isPassed
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                : 'bg-rose-500/20 text-rose-300 border-rose-400/30'
            }`}>
              {scoreStats.isPassed ? 'EXAMINATION PASSED (≥ 50%)' : 'REVISION REQUIRED (< 50%)'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {scoreStats.isPassed ? 'Congratulations! Target Achieved.' : 'Keep Practicing! Refine Core Concepts.'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              You scored {scoreStats.correct} out of {scoreStats.total} ({scoreStats.percentage}%). Official IU examination pass threshold is 50%.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center">
              <span className="text-[10px] text-slate-300 block font-semibold uppercase">Overall Score</span>
              <span className={`text-3xl sm:text-4xl font-black font-mono ${
                scoreStats.isPassed ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {scoreStats.percentage}%
              </span>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <span className="text-[10px] text-slate-300 block font-semibold uppercase">Marks</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white">
                {scoreStats.correct}/{scoreStats.total}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Breakdown Bars */}
      <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Performance by Syllabus Unit:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {([1, 2, 3, 4, 5, 6] as const).map(uId => {
            const data = scoreStats.unitBreakdown[uId];
            if (!data || data.total === 0) return null;
            const pct = Math.round((data.correct / data.total) * 100);
            return (
              <div key={uId} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Unit {uId}</span>
                  <span className="font-mono font-bold text-slate-600 dark:text-slate-400">
                    {data.correct}/{data.total} ({pct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-1.5 rounded-full ${pct >= 50 ? 'bg-emerald-500' : 'bg-rose-500'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setReviewMistakesOnly(false)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              !reviewMistakesOnly
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            All Questions ({examQuestions.length})
          </button>
          <button
            onClick={() => setReviewMistakesOnly(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              reviewMistakesOnly
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            Mistakes Only ({scoreStats.total - scoreStats.correct})
          </button>
        </div>

        <button
          onClick={() => {
            setIsExamActive(false);
            setIsExamCompleted(false);
            setSelectedMode(null);
          }}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Practice Another Mock</span>
        </button>
      </div>

      {/* Review Questions List */}
      <div className="space-y-4">
        {displayedQuestions.map((q, idx) => {
          const userAns = userAnswers[q.id];
          const isCorrect = userAns === q.correctAnswer;
          return (
            <div
              key={q.id || idx}
              className={`p-5 rounded-3xl border transition-all space-y-4 ${
                isCorrect
                  ? 'bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 shadow-sm'
                  : 'bg-rose-50/20 dark:bg-rose-950/10 border-rose-200/60 dark:border-rose-900/40 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      isCorrect
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                    }`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Unit {q.unit || 1} · Section {q.section}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    {q.question}
                  </h4>
                </div>
              </div>

              {/* Options Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(q.options).map(([letter, text]) => {
                  const isRight = letter === q.correctAnswer;
                  const isChosen = letter === userAns;
                  return (
                    <div
                      key={letter}
                      className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                        isRight
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200 font-medium'
                          : isChosen
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200'
                          : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span className="font-mono font-bold shrink-0">{letter}.</span>
                      <span>{text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Course Book Explanation & Why Others Wrong */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs space-y-2.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
                    Official Course Book Explanation:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>

                {q.whyOthersAreWrong && q.whyOthersAreWrong.length > 0 && (
                  <div className="pt-1.5 border-t border-slate-200/60 dark:border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Distractor Analysis:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                      {q.whyOthersAreWrong.map((reason, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <span className="text-slate-400">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {q.examTrap && (
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <div>
                      <strong>IU Exam Trap: </strong> {q.examTrap}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FinalExamPractice;

