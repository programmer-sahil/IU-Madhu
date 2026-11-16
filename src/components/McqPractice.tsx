import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MCQ, UnitId } from '../types';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, XCircle, Bookmark, BookmarkCheck, ArrowRight, ArrowLeft, 
  RotateCcw, Target, Timer, Flame, Award, BookOpen, AlertCircle, RefreshCw,
  Shuffle, HelpCircle, Check, Sparkles, Filter, ChevronRight, BarChart2,
  Clock, Zap, CheckSquare
} from 'lucide-react';

export type McqViewMode = 'practice' | 'exam' | 'rapid' | 'learn';
export type McqFocusFilter = 'all' | 'calculation' | 'scenario' | 'trap';
export type McqDifficultyFilter = 'all' | 'easy' | 'medium' | 'hard';
export type McqStatusFilter = 'all' | 'unseen' | 'incorrect' | 'correct' | 'bookmarked' | 'guessed';

interface McqPracticeProps {
  initialUnit?: UnitId;
  initialMode?: McqViewMode;
  onFinish?: () => void;
}

export const McqPractice: React.FC<McqPracticeProps> = ({ 
  initialUnit, 
  initialMode = 'practice' 
}) => {
  const [focusFilter, setFocusFilter] = useState<McqFocusFilter>(() => {
    if ((initialMode as string) === 'calculation') return 'calculation';
    if ((initialMode as string) === 'scenario') return 'scenario';
    return 'all';
  });
  const { progress, recordMcqAnswer, toggleBookmark, isBookmarked } = useProgress();
  const { currentSubject } = useSubject();
  const { getAllMcqs } = useSubjectData();
  const allMcqs = useMemo(() => getAllMcqs(), [getAllMcqs]);

  // Mode & Filters
  const [mode, setMode] = useState<McqViewMode>(initialMode);
  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit || 0); // 0 = All Available Units
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<McqDifficultyFilter>('all');
  const [statusFilter, setStatusFilter] = useState<McqStatusFilter>('all');
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [examQuestionCount, setExamQuestionCount] = useState<number>(20);

  // Practice state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userSelections, setUserSelections] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [guessedQuestions, setGuessedQuestions] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(`guessed_mcqs_${currentSubject.id}`);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Rapid Fire & Streak State
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(() => {
    try {
      const val = localStorage.getItem(`best_streak_${currentSubject.id}`);
      return val ? parseInt(val, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Exam state
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [timeElapsedSeconds, setTimeElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Available units that actually have MCQs
  const availableUnits = useMemo(() => {
    const unitSet = new Set(allMcqs.map(m => m.unit));
    return currentSubject.units.filter(u => unitSet.has(u.id as UnitId));
  }, [allMcqs, currentSubject]);

  // Available sections based on selected unit
  const availableSections = useMemo(() => {
    if (selectedUnit === 0) {
      const sections = new Set(allMcqs.map(m => m.section).filter(Boolean) as string[]);
      return Array.from(sections).sort();
    }
    const unitMcqs = allMcqs.filter(m => m.unit === selectedUnit);
    const sections = new Set(unitMcqs.map(m => m.section).filter(Boolean) as string[]);
    return Array.from(sections).sort();
  }, [allMcqs, selectedUnit]);

  // Save guessed questions to localStorage
  const toggleGuessed = useCallback((mcqId: string) => {
    setGuessedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(mcqId)) {
        next.delete(mcqId);
      } else {
        next.add(mcqId);
      }
      try {
        localStorage.setItem(`guessed_mcqs_${currentSubject.id}`, JSON.stringify(Array.from(next)));
      } catch (e) {
        // ignore
      }
      return next;
    });
  }, [currentSubject.id]);

  // Filter questions based on controls
  const activeQuestions = useMemo(() => {
    if (allMcqs.length === 0) return [];

    let filtered = [...allMcqs];

    // Unit filter
    if (selectedUnit !== 0) {
      filtered = filtered.filter(m => m.unit === selectedUnit);
    }

    // Section filter
    if (selectedSection !== 'all') {
      filtered = filtered.filter(m => m.section === selectedSection || m.sourceSection === selectedSection);
    }

    // Focus filter (Calculation vs Scenario vs Trap)
    if (focusFilter === 'calculation') {
      filtered = filtered.filter(m => 
        (m as any).type === 'calculation' || 
        (m.topic && /evm|cost|fpa|estimation|pert|float|variance|cpi|spi|pv|npv|roi|payback/i.test(m.topic))
      );
    } else if (focusFilter === 'scenario') {
      filtered = filtered.filter(m => 
        (m as any).type === 'scenario' || 
        (m.topic && /stakeholder|salience|raci|conflict|negotiation|culture|leadership|power/i.test(m.topic))
      );
    } else if (focusFilter === 'trap') {
      filtered = filtered.filter(m => Boolean(m.examTrap));
    }

    // Difficulty filter
    if (difficultyFilter !== 'all') {
      filtered = filtered.filter(m => {
        const d = (m.difficulty || 'medium').toLowerCase();
        return d === difficultyFilter;
      });
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(m => {
        const ans = progress.answeredMcqs[m.id];
        if (statusFilter === 'unseen') return !ans;
        if (statusFilter === 'correct') return ans && ans.isCorrect;
        if (statusFilter === 'incorrect') return ans && !ans.isCorrect;
        if (statusFilter === 'bookmarked') return isBookmarked(m.id);
        if (statusFilter === 'guessed') return guessedQuestions.has(m.id);
        return true;
      });
    }

    // Rapid Fire: strictly 10 questions
    if (mode === 'rapid') {
      return [...filtered].sort(() => Math.random() - 0.5).slice(0, 10);
    }

    // Exam mode count limit
    if (mode === 'exam') {
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      if (examQuestionCount > 0 && examQuestionCount < shuffled.length) {
        return shuffled.slice(0, examQuestionCount);
      }
      return shuffled;
    }

    // Shuffle if enabled in Practice mode
    if (isShuffled) {
      return [...filtered].sort(() => Math.random() - 0.5);
    }

    return filtered;
  }, [
    allMcqs, selectedUnit, selectedSection, difficultyFilter, statusFilter, 
    mode, focusFilter, isShuffled, examQuestionCount, progress.answeredMcqs, isBookmarked, guessedQuestions
  ]);

  // Reset indices on major filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserSelections({});
    setIsExamSubmitted(false);
    setTimeElapsedSeconds(0);
    setIsTimerRunning(true);
  }, [mode, focusFilter, selectedUnit, selectedSection, difficultyFilter, statusFilter, isShuffled]);

  // Timer for Exam mode
  useEffect(() => {
    if (mode !== 'exam' || !isTimerRunning || isExamSubmitted) return;
    const interval = setInterval(() => {
      setTimeElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [mode, isTimerRunning, isExamSubmitted]);

  const currentMcq: MCQ | undefined = activeQuestions[currentIndex];

  const handleSelectOption = useCallback((option: 'A' | 'B' | 'C' | 'D') => {
    if (!currentMcq) return;

    if (mode === 'exam' && !isExamSubmitted) {
      // In exam mode, can change before submit
      setUserSelections(prev => ({ ...prev, [currentMcq.id]: option }));
      return;
    }

    if (userSelections[currentMcq.id]) return; // locked in practice & rapid

    setUserSelections(prev => ({ ...prev, [currentMcq.id]: option }));
    const isCorrect = option === currentMcq.correctAnswer;
    recordMcqAnswer(currentMcq.id, option, isCorrect);

    if (isCorrect) {
      setCurrentStreak(s => {
        const next = s + 1;
        if (next > bestStreak) {
          setBestStreak(next);
          try {
            localStorage.setItem(`best_streak_${currentSubject.id}`, next.toString());
          } catch (e) {}
        }
        return next;
      });
      if (mode === 'practice' || mode === 'rapid') {
        confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
      }
    } else {
      setCurrentStreak(0);
    }

    // In Rapid Fire mode, auto-advance after 800ms
    if (mode === 'rapid') {
      setTimeout(() => {
        setCurrentIndex(prev => Math.min(prev + 1, activeQuestions.length - 1));
      }, 800);
    }
  }, [currentMcq, mode, isExamSubmitted, userSelections, recordMcqAnswer, bestStreak, currentSubject.id, activeQuestions.length]);

  // Keyboard navigation for Rapid Fire mode (1/A, 2/B, 3/C, 4/D)
  useEffect(() => {
    if (mode !== 'rapid' || activeQuestions.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      let option: 'A' | 'B' | 'C' | 'D' | null = null;
      if (key === '1' || key === 'A') option = 'A';
      if (key === '2' || key === 'B') option = 'B';
      if (key === '3' || key === 'C') option = 'C';
      if (key === '4' || key === 'D') option = 'D';

      if (option && currentMcq && !userSelections[currentMcq.id]) {
        handleSelectOption(option);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, activeQuestions, currentMcq, userSelections, handleSelectOption]);

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
    setIsExamSubmitted(true);
    setIsTimerRunning(false);

    // Record all exam answers
    activeQuestions.forEach(q => {
      const selected = userSelections[q.id];
      if (selected) {
        recordMcqAnswer(q.id, selected, selected === q.correctAnswer);
      }
    });

    const score = activeQuestions.filter(q => userSelections[q.id] === q.correctAnswer).length;
    const pct = activeQuestions.length > 0 ? (score / activeQuestions.length) * 100 : 0;
    if (pct >= 75) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Exam Score calculations & Performance Breakdowns
  const examStats = useMemo(() => {
    const total = activeQuestions.length;
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    const unitBreakdown: Record<number, { total: number; correct: number }> = {};
    const sectionBreakdown: Record<string, { total: number; correct: number }> = {};
    const difficultyBreakdown: Record<string, { total: number; correct: number }> = {};

    activeQuestions.forEach(q => {
      const sel = userSelections[q.id];
      const isRight = sel === q.correctAnswer;

      // Unit
      if (!unitBreakdown[q.unit]) unitBreakdown[q.unit] = { total: 0, correct: 0 };
      unitBreakdown[q.unit].total++;
      if (isRight) unitBreakdown[q.unit].correct++;

      // Section
      const sec = q.section || q.sourceSection || `Unit ${q.unit}`;
      if (!sectionBreakdown[sec]) sectionBreakdown[sec] = { total: 0, correct: 0 };
      sectionBreakdown[sec].total++;
      if (isRight) sectionBreakdown[sec].correct++;

      // Difficulty
      const diff = (q.difficulty || 'medium').toLowerCase();
      if (!difficultyBreakdown[diff]) difficultyBreakdown[diff] = { total: 0, correct: 0 };
      difficultyBreakdown[diff].total++;
      if (isRight) difficultyBreakdown[diff].correct++;

      if (!sel) {
        unanswered++;
      } else if (isRight) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { 
      total, correct, incorrect, unanswered, percentage, 
      unitBreakdown, sectionBreakdown, difficultyBreakdown 
    };
  }, [activeQuestions, userSelections]);

  // Overall Global Statistics for Header Summary Cards
  const overallStats = useMemo(() => {
    const total = allMcqs.length;
    const answeredMap = progress.answeredMcqs;
    const answeredEntries = Object.entries(answeredMap);
    
    // Filter to questions in this subject
    const subjectQIds = new Set(allMcqs.map(q => q.id));
    const subjectAnswered = answeredEntries.filter(([id]) => subjectQIds.has(id));
    
    const attempted = subjectAnswered.length;
    const correct = subjectAnswered.filter(([, val]) => val.isCorrect).length;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    // Weak Topics calculation
    const weakTopicCounts: Record<string, number> = {};
    subjectAnswered.filter(([, val]) => !val.isCorrect).forEach(([id]) => {
      const q = allMcqs.find(m => m.id === id);
      if (q && q.topic) {
        weakTopicCounts[q.topic] = (weakTopicCounts[q.topic] || 0) + 1;
      }
    });

    const topWeakTopics = Object.entries(weakTopicCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([topic]) => topic);

    return { total, attempted, correct, accuracy, topWeakTopics };
  }, [allMcqs, progress.answeredMcqs]);

  // If no MCQs available for this subject yet
  if (allMcqs.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">MCQ Practice</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>
        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <Award className="w-12 h-12 mx-auto text-indigo-500" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">MCQs in Preparation</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Questions for {currentSubject.title} are being aligned with official IU examination standards.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 8. NEW HEADER & SUMMARY CARDS */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                IT Project Management
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1 tracking-tight">
              MCQ Practice
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Master the course through targeted recall and exam-style practice.
            </p>
          </div>

          {/* Quick Streak Widget */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl">
            <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Streak</div>
              <div className="text-sm font-black text-slate-900 dark:text-white">{currentStreak} <span className="text-[11px] font-normal text-slate-400">(Best: {bestStreak})</span></div>
            </div>
          </div>
        </div>

        {/* 6 Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="glass-card rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Questions Available</div>
            <div className="text-xl font-black text-slate-900 dark:text-white mt-1">{overallStats.total}</div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">{availableUnits.length > 0 ? `${availableUnits.map(u => `U${u.id}`).join(", ")} Active` : "All Units"}</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Attempted</div>
            <div className="text-xl font-black text-slate-900 dark:text-white mt-1">{overallStats.attempted}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{overallStats.total - overallStats.attempted} unseen</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Correct</div>
            <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{overallStats.correct}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{overallStats.attempted - overallStats.correct} incorrect</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Accuracy</div>
            <div className="text-xl font-black text-indigo-600 dark:text-indigo-400 mt-1">{overallStats.accuracy}%</div>
            <div className="w-full bg-slate-200 dark:bg-slate-700/60 h-1 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${overallStats.accuracy}%` }} />
            </div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Current Streak</div>
            <div className="text-xl font-black text-amber-500 mt-1 flex items-center gap-1">
              <Flame className="w-4 h-4" /> {currentStreak}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Best record: {bestStreak}</div>
          </div>
          <div className="glass-card rounded-xl p-3 border border-slate-200/60 dark:border-slate-800/80">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Weak Topics</div>
            <div className="text-xs font-semibold text-rose-500 mt-1 truncate">
              {overallStats.topWeakTopics.length > 0 ? overallStats.topWeakTopics[0] : 'None identified'}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              {overallStats.topWeakTopics.length > 1 ? `+${overallStats.topWeakTopics.length - 1} more areas` : 'Keep practicing'}
            </div>
          </div>
        </div>
      </div>

      {/* 9. SOPHISTICATED MCQ FILTER BAR */}
      <div className="glass-card rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 space-y-4">
        {/* Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            {[
              { id: 'practice', label: 'Practice Mode', icon: BookOpen },
              { id: 'exam', label: 'Exam Mode', icon: Timer },
              { id: 'rapid', label: 'Rapid Fire (10)', icon: Zap },
            ].map(m => {
              const Icon = m.icon;
              const isActive = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id as McqViewMode)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick controls: Shuffle & Reset */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isShuffled
                  ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Shuffle</span>
            </button>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setUserSelections({});
                setIsExamSubmitted(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Dynamic Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Unit Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Unit
            </label>
            <select
              value={selectedUnit}
              onChange={(e) => {
                setSelectedUnit(Number(e.target.value));
                setSelectedSection('all');
              }}
              className="w-full text-xs font-medium rounded-lg px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value={0}>All Available Units ({availableUnits.map(u => `U${u.id}`).join(', ')})</option>
              {availableUnits.map(u => (
                <option key={u.id} value={u.id}>Unit {u.id}: {u.title}</option>
              ))}
            </select>
          </div>

          {/* Section Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Section
            </label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              disabled={availableSections.length === 0}
              className="w-full text-xs font-medium rounded-lg px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
            >
              <option value="all">All Sections</option>
              {availableSections.map(sec => (
                <option key={sec} value={sec}>Section {sec}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Difficulty
            </label>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value as McqDifficultyFilter)}
              className="w-full text-xs font-medium rounded-lg px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy (Foundation)</option>
              <option value="medium">Medium (Intermediate)</option>
              <option value="hard">Hard (Mastery)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as McqStatusFilter)}
              className="w-full text-xs font-medium rounded-lg px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">All Questions ({activeQuestions.length})</option>
              <option value="unseen">Unseen</option>
              <option value="incorrect">Incorrect</option>
              <option value="correct">Correct</option>
              <option value="bookmarked">Bookmarked</option>
              <option value="guessed">Guessed / Needs Review ({guessedQuestions.size})</option>
            </select>
          </div>
        </div>

        {/* Exam Mode Question Count Selector */}
        {mode === 'exam' && !isExamSubmitted && (
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Exam Length:</span>
            {[10, 20, 40, 0].map(cnt => (
              <button
                key={cnt}
                onClick={() => setExamQuestionCount(cnt)}
                className={`px-2.5 py-1 rounded text-xs font-semibold border transition-all ${
                  examQuestionCount === cnt
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cnt === 0 ? 'Full Unit' : `${cnt} Questions`}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* NO MATCHES STATE */}
      {activeQuestions.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <Filter className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Matching Questions Found</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
            Try adjusting your Section, Difficulty, or Status filters to broaden your practice scope.
          </p>
          <button
            onClick={() => {
              setSelectedUnit(0);
              setSelectedSection('all');
              setDifficultyFilter('all');
              setStatusFilter('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Reset All Filters
          </button>
        </div>
      ) : mode === 'exam' && isExamSubmitted ? (
        /* 11. EXAM MODE RESULTS VIEW */
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Exam Results</span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                  Performance Summary
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{examStats.percentage}%</div>
                  <div className="text-xs text-slate-500">{examStats.correct} of {examStats.total} correct</div>
                </div>
              </div>
            </div>

            {/* Score Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <div className="text-xs text-slate-500">Correct</div>
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{examStats.correct}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <div className="text-xs text-slate-500">Incorrect</div>
                <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">{examStats.incorrect}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <div className="text-xs text-slate-500">Unanswered</div>
                <div className="text-2xl font-black text-amber-500 mt-1">{examStats.unanswered}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                <div className="text-xs text-slate-500">Time Taken</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{formatTime(timeElapsedSeconds)}</div>
              </div>
            </div>

            {/* Detailed Performance Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Unit breakdown */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Performance by Unit</h4>
                {Object.entries(examStats.unitBreakdown).map(([u, s]) => (
                  <div key={u} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Unit {u}</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {s.correct}/{s.total} ({Math.round((s.correct / s.total) * 100)}%)
                    </span>
                  </div>
                ))}
              </div>

              {/* Section breakdown */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Performance by Section</h4>
                {Object.entries(examStats.sectionBreakdown).slice(0, 5).map(([sec, s]) => (
                  <div key={sec} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Sec {sec}</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {s.correct}/{s.total} ({Math.round((s.correct / s.total) * 100)}%)
                    </span>
                  </div>
                ))}
              </div>

              {/* Difficulty breakdown */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Performance by Difficulty</h4>
                {Object.entries(examStats.difficultyBreakdown).map(([diff, s]) => (
                  <div key={diff} className="flex items-center justify-between text-xs">
                    <span className="font-medium capitalize text-slate-700 dark:text-slate-300">{diff}</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {s.correct}/{s.total} ({Math.round((s.correct / s.total) * 100)}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <button
                onClick={() => {
                  setStatusFilter('incorrect');
                  setMode('practice');
                  setIsExamSubmitted(false);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-md transition-all"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Review Incorrect Answers</span>
              </button>

              <button
                onClick={() => {
                  setIsExamSubmitted(false);
                  setUserSelections({});
                  setTimeElapsedSeconds(0);
                  setIsTimerRunning(true);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Exam</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* 10. PRACTICE & RAPID FIRE MODE CARD VIEW */
        <div className="space-y-4">
          {currentMcq && (
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 transition-all">
              {/* Question Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-black bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    Q{currentIndex + 1} of {activeQuestions.length}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Unit {currentMcq.unit}
                  </span>
                  {currentMcq.section && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Sec {currentMcq.section}
                    </span>
                  )}
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                    (currentMcq.difficulty || 'medium').toLowerCase() === 'easy'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : (currentMcq.difficulty || 'medium').toLowerCase() === 'hard'
                      ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                  }`}>
                    {currentMcq.difficulty || 'Medium'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark({
                      id: currentMcq.id,
                      type: 'mcq',
                      title: currentMcq.question.slice(0, 60),
                      unit: currentMcq.unit
                    })}
                    className={`p-2 rounded-lg border transition-all ${
                      isBookmarked(currentMcq.id)
                        ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                        : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                    }`}
                    title="Bookmark question"
                  >
                    {isBookmarked(currentMcq.id) ? (
                      <BookmarkCheck className="w-4 h-4" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>

                  {/* "I guessed this" Button */}
                  <button
                    onClick={() => toggleGuessed(currentMcq.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      guessedQuestions.has(currentMcq.id)
                        ? 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title="Mark this answer as a guess to keep it in revision rotation"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{guessedQuestions.has(currentMcq.id) ? 'Marked as Guess' : 'I guessed this'}</span>
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {currentMcq.topic}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  {currentMcq.question}
                </h3>
              </div>

              {/* 4 Large Options */}
              <div className="grid grid-cols-1 gap-3">
                {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                  const optText = currentMcq.options[optKey];
                  const isSelected = userSelections[currentMcq.id] === optKey;
                  const isRevealed = (mode !== 'exam') && Boolean(userSelections[currentMcq.id]);
                  const isCorrect = optKey === currentMcq.correctAnswer;

                  let cardStyle = "border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200";

                  if (mode === 'exam') {
                    if (isSelected) {
                      cardStyle = "border-indigo-600 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-bold";
                    }
                  } else if (isRevealed) {
                    if (isCorrect) {
                      cardStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 font-bold ring-1 ring-emerald-500";
                    } else if (isSelected && !isCorrect) {
                      cardStyle = "border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-100 font-bold ring-1 ring-rose-500";
                    } else {
                      cardStyle = "opacity-50 border-slate-200 dark:border-slate-800 text-slate-500";
                    }
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelectOption(optKey)}
                      disabled={Boolean(userSelections[currentMcq.id]) && mode !== 'exam'}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${cardStyle}`}
                    >
                      <span className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                        isRevealed && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : isRevealed && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {optKey}
                      </span>
                      <span className="text-sm leading-snug pt-0.5">{optText}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback, Explanation, Exam Trap & Source Section (Practice Mode) */}
              {mode !== 'exam' && userSelections[currentMcq.id] && (
                <div className="space-y-3 pt-4 border-t border-slate-200/60 dark:border-slate-800 animate-fadeIn">
                  {/* Status Banner */}
                  <div className={`p-3.5 rounded-xl flex items-center gap-3 ${
                    userSelections[currentMcq.id] === currentMcq.correctAnswer
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300'
                  }`}>
                    {userSelections[currentMcq.id] === currentMcq.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    )}
                    <div className="text-xs sm:text-sm font-bold">
                      {userSelections[currentMcq.id] === currentMcq.correctAnswer ? (
                        <span>✓ Correct Answer: Option {currentMcq.correctAnswer}</span>
                      ) : (
                        <span>✗ Incorrect. Correct answer is Option {currentMcq.correctAnswer}</span>
                      )}
                    </div>
                  </div>

                  {/* Grounded Explanation */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Why?</div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {currentMcq.explanation}
                    </p>
                  </div>

                  {/* Exam Trap Alert (if present) */}
                  {currentMcq.examTrap && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">Exam Trap</div>
                        <div className="text-xs text-amber-800 dark:text-amber-200 mt-0.5">{currentMcq.examTrap}</div>
                      </div>
                    </div>
                  )}

                  {/* Compact Source Section Badge */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="font-medium">
                      Source: Unit {currentMcq.sourceUnit || currentMcq.unit} · Section {currentMcq.sourceSection || currentMcq.section} — {currentMcq.sourceTopic || currentMcq.topic} {currentMcq.sourcePage ? `(p. ${currentMcq.sourcePage})` : ''}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">{currentMcq.id}</span>
                  </div>
                </div>
              )}

              {/* Navigation & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {mode === 'exam' ? (
                  currentIndex === activeQuestions.length - 1 ? (
                    <button
                      onClick={handleSubmitExam}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all"
                    >
                      <CheckSquare className="w-4 h-4" />
                      <span>Submit Exam ({Object.keys(userSelections).length}/{activeQuestions.length})</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
                    >
                      <span>Next Question</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === activeQuestions.length - 1}
                    className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition-all"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
