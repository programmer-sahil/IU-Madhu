import React, { useState, useEffect, useMemo } from 'react';
import { MCQ, UnitId } from '../types';
import { getAllMcqs, allUnits } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, XCircle, Bookmark, BookmarkCheck, ArrowRight, ArrowLeft, 
  RotateCcw, Sparkles, Timer, Flame, Award, BookOpen, AlertCircle, RefreshCw
} from 'lucide-react';

export type McqMode = 'learn' | 'exam' | 'weak' | 'rapid' | 'unit' | 'full';

interface McqPracticeProps {
  initialUnit?: UnitId;
  initialMode?: McqMode;
  onFinish?: () => void;
}

export const McqPractice: React.FC<McqPracticeProps> = ({ 
  initialUnit, 
  initialMode = 'learn' 
}) => {
  const { progress, recordMcqAnswer, toggleBookmark, isBookmarked } = useProgress();
  const allMcqs = useMemo(() => getAllMcqs(), []);

  const [mode, setMode] = useState<McqMode>(initialMode);
  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit || 1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelections, setUserSelections] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeElapsedSeconds, setTimeElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Filter questions based on mode and unit
  const activeQuestions = useMemo(() => {
    if (mode === 'weak') {
      const wrongIds = Object.entries(progress.answeredMcqs)
        .filter(([, v]) => !v.isCorrect)
        .map(([id]) => id);
      const filtered = allMcqs.filter(m => wrongIds.includes(m.id));
      return filtered.length > 0 ? filtered : allMcqs.slice(0, 10);
    }
    if (mode === 'rapid') {
      return [...allMcqs].sort(() => Math.random() - 0.5).slice(0, 10);
    }
    if (mode === 'full') {
      // 8 questions per unit = 48 questions
      const perUnit = [1, 2, 3, 4, 5, 6].flatMap(uId => {
        const uMcqs = allMcqs.filter(m => m.unit === uId);
        return [...uMcqs].sort(() => Math.random() - 0.5).slice(0, 8);
      });
      return perUnit;
    }
    if (mode === 'unit') {
      const uMcqs = allMcqs.filter(m => m.unit === selectedUnit);
      return [...uMcqs].sort(() => Math.random() - 0.5).slice(0, 20);
    }
    // Learn mode: by unit
    return allMcqs.filter(m => m.unit === selectedUnit);
  }, [mode, selectedUnit, allMcqs, progress.answeredMcqs]);

  // Reset when questions change
  useEffect(() => {
    setCurrentIndex(0);
    setUserSelections({});
    setIsSubmitted(false);
    setTimeElapsedSeconds(0);
    setIsTimerRunning(true);
  }, [mode, selectedUnit]);

  // Timer
  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  const currentMcq: MCQ | undefined = activeQuestions[currentIndex];

  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!currentMcq) return;
    if (mode === 'exam' || mode === 'unit' || mode === 'full') {
      // In exam mode, can change before submit
      setUserSelections(prev => ({ ...prev, [currentMcq.id]: option }));
      return;
    }

    // In Learn mode: lock after first select
    if (userSelections[currentMcq.id]) return;

    setUserSelections(prev => ({ ...prev, [currentMcq.id]: option }));
    const isCorrect = option === currentMcq.correctAnswer;
    recordMcqAnswer(currentMcq.id, option, isCorrect);

    if (isCorrect) {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);

    // Record all answers
    activeQuestions.forEach(q => {
      const selected = userSelections[q.id];
      if (selected) {
        recordMcqAnswer(q.id, selected, selected === q.correctAnswer);
      }
    });

    const score = activeQuestions.filter(q => userSelections[q.id] === q.correctAnswer).length;
    const pct = (score / activeQuestions.length) * 100;
    if (pct >= 80) {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Exam Score calculations
  const examStats = useMemo(() => {
    const total = activeQuestions.length;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    const weakUnitCounts: Record<number, number> = {};

    activeQuestions.forEach(q => {
      const sel = userSelections[q.id];
      if (!sel) {
        unanswered++;
      } else if (sel === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
        weakUnitCounts[q.unit] = (weakUnitCounts[q.unit] || 0) + 1;
      }
    });

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const sortedWeakUnits = Object.entries(weakUnitCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([u]) => Number(u));

    return { total, correct, incorrect, unanswered, percentage, sortedWeakUnits };
  }, [activeQuestions, userSelections]);

  return (
    <div className="space-y-6">
      {/* Mode & Filter Bar */}
      <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Practice Modes */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'learn', label: 'Learn Mode', icon: BookOpen },
            { id: 'exam', label: 'Exam Mode', icon: Timer },
            { id: 'weak', label: 'Weak Questions', icon: AlertCircle },
            { id: 'rapid', label: 'Rapid Fire (10)', icon: Flame },
            { id: 'unit', label: 'Unit Test (20)', icon: Sparkles },
            { id: 'full', label: 'Full Course (48)', icon: Award }
          ].map(m => {
            const Icon = m.icon;
            const isActive = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setMode(m.id as McqMode);
                  setIsSubmitted(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {m.label}
              </button>
            );
          })}
        </div>

        {/* Unit Selector (when applicable) */}
        {['learn', 'unit'].includes(mode) && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Unit:</span>
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(Number(e.target.value))}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {allUnits.map(u => (
                <option key={u.id} value={u.id}>
                  Unit {u.id}: {u.title.split(':')[0]}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Main MCQ Content or Result Screen */}
      {isSubmitted ? (
        /* Result Screen */
        <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto space-y-6 text-center animate-fade-in border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="inline-flex p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
            <Award className="w-12 h-12" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-600">
              Assessment Completed
            </span>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
              Score: {examStats.correct} / {examStats.total}
            </h3>
            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
              {examStats.percentage}% Accuracy
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-4 gap-2 py-4 border-y border-slate-100 dark:border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block">Correct</span>
              <span className="font-bold text-emerald-600 text-base">{examStats.correct}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Incorrect</span>
              <span className="font-bold text-rose-600 text-base">{examStats.incorrect}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Unanswered</span>
              <span className="font-bold text-amber-600 text-base">{examStats.unanswered}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Time Spent</span>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-base">{formatTime(timeElapsedSeconds)}</span>
            </div>
          </div>

          {/* Revision Recommendations */}
          {examStats.sortedWeakUnits.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-left text-xs space-y-2">
              <span className="font-bold text-amber-800 dark:text-amber-300 block">
                Recommended Revision Priority:
              </span>
              <p className="text-slate-600 dark:text-slate-400">
                You experienced incorrect answers in: {examStats.sortedWeakUnits.map(u => `Unit ${u}`).join(', ')}. Review the corresponding Cheat Sheets and Comparison Tables.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentIndex(0);
                setUserSelections({});
                setTimeElapsedSeconds(0);
                setIsTimerRunning(true);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Test
            </button>
            <button
              onClick={() => {
                setMode('weak');
                setIsSubmitted(false);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Retry Wrong Questions
            </button>
          </div>
        </div>
      ) : activeQuestions.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
          <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
            No Questions Available
          </h4>
          <p className="text-xs text-slate-500">
            {mode === 'weak' ? 'You have no recorded wrong questions! Excellent mastery.' : 'Select another mode or unit.'}
          </p>
          <button
            onClick={() => setMode('learn')}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 text-white"
          >
            Go to Learn Mode
          </button>
        </div>
      ) : currentMcq ? (
        /* Question Card */
        <div className="glass-card rounded-2xl p-6 space-y-6 max-w-3xl mx-auto shadow-md border border-slate-200/80 dark:border-slate-800/80">
          {/* Top Question Info */}
          <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                Q {currentIndex + 1} of {activeQuestions.length}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-500">Unit {currentMcq.unit}</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {currentMcq.topic}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-500 flex items-center gap-1">
                <Timer className="w-3.5 h-3.5" />
                {formatTime(timeElapsedSeconds)}
              </span>
              <button
                onClick={() => toggleBookmark({
                  id: currentMcq.id,
                  type: 'mcq',
                  title: currentMcq.question.slice(0, 60) + '...',
                  unit: currentMcq.unit
                })}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-indigo-600 transition-colors"
                title="Bookmark Question"
              >
                {isBookmarked(currentMcq.id) ? (
                  <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
            {currentMcq.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-3">
            {(['A', 'B', 'C', 'D'] as const).map(optKey => {
              const optText = currentMcq.options[optKey];
              const selectedOpt = userSelections[currentMcq.id];
              const isSelected = selectedOpt === optKey;
              const isRevealed = mode === 'learn' ? !!selectedOpt : false;
              const isCorrectOpt = optKey === currentMcq.correctAnswer;

              let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 hover:border-indigo-400 text-slate-800 dark:text-slate-200';

              if (isRevealed) {
                if (isCorrectOpt) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-100 font-semibold shadow-sm';
                } else if (isSelected && !isCorrectOpt) {
                  btnStyle = 'border-rose-500 bg-rose-50/90 dark:bg-rose-950/70 text-rose-900 dark:text-rose-100';
                }
              } else if (isSelected) {
                btnStyle = 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-100 font-semibold ring-2 ring-indigo-500/30';
              }

              return (
                <button
                  key={optKey}
                  onClick={() => handleSelectOption(optKey)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 text-sm ${btnStyle}`}
                >
                  <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                    isRevealed && isCorrectOpt
                      ? 'bg-emerald-600 text-white'
                      : isRevealed && isSelected
                      ? 'bg-rose-600 text-white'
                      : isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}>
                    {optKey}
                  </span>
                  <span className="flex-1 leading-normal">{optText}</span>
                  {isRevealed && isCorrectOpt && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  )}
                  {isRevealed && isSelected && !isCorrectOpt && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible immediately in Learn mode if answered) */}
          {mode === 'learn' && userSelections[currentMcq.id] && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 text-xs animate-fade-in">
              <div>
                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-1">
                  Why this is correct:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentMcq.explanation}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">Remember:</span>
                <p className="text-slate-800 dark:text-slate-200 font-semibold italic">
                  {currentMcq.memoryTip}
                </p>
              </div>
            </div>
          )}

          {/* Question Navigator & Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Previous
            </button>

            {/* In Exam / Test mode: Finish Button */}
            {['exam', 'unit', 'full'].includes(mode) && (
              <button
                onClick={handleSubmitExam}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
              >
                Submit Exam ({Object.keys(userSelections).length}/{activeQuestions.length})
              </button>
            )}

            <button
              onClick={handleNext}
              disabled={currentIndex === activeQuestions.length - 1}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
            >
              Next
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
