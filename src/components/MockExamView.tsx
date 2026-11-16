import React, { useState, useEffect, useMemo } from 'react';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import confetti from 'canvas-confetti';
import { 
  Timer, Play, Pause, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, 
  RotateCcw, Award, FileText, CheckSquare, Square, Eye, Target 
} from 'lucide-react';

export const MockExamView: React.FC = () => {
  const { submitMockExam } = useProgress();
  const { currentSubject } = useSubject();
  const { mockExams, getAllMcqs } = useSubjectData();
  const allMcqs = useMemo(() => getAllMcqs(), [getAllMcqs]);

  const [activeMockId, setActiveMockId] = useState<string>(() => mockExams[0]?.id || 'mock-1');
  const [testState, setTestState] = useState<'intro' | 'active' | 'review'>('intro');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(120 * 60); // 120 mins
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'mcqs' | 'descriptive'>('mcqs');
  const [activeMcqIndex, setActiveMcqIndex] = useState<number>(0);
  
  // Student answers
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [descriptiveAnswers, setDescriptiveAnswers] = useState<Record<string, string>>({});
  const [selfScores, setSelfScores] = useState<Record<string, number>>({});
  const [rubricChecks, setRubricChecks] = useState<Record<string, Record<number, boolean>>>({});

  const currentMock = mockExams.find(m => m.id === activeMockId) || mockExams[0];

  // Resolve MCQs
  const mockMcqList = useMemo(() => {
    if (!currentMock) return [];
    return currentMock.mcqIds.map(id => allMcqs.find(m => m.id === id)).filter(Boolean) as any[];
  }, [currentMock, allMcqs]);

  // Timer loop
  useEffect(() => {
    let interval: any = null;
    if (testState === 'active' && !isPaused && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && testState === 'active') {
      handleSubmitExam();
    }
    return () => clearInterval(interval);
  }, [testState, isPaused, secondsRemaining]);

  const handleStartExam = () => {
    if (!currentMock) return;
    setSecondsRemaining(currentMock.timeLimitMinutes * 60);
    setMcqAnswers({});
    setDescriptiveAnswers({});
    setSelfScores({});
    setRubricChecks({});
    setTestState('active');
  };

  const handleSubmitExam = () => {
    setTestState('review');
    setIsPaused(false);
  };

  const handleFinishSelfScoring = () => {
    if (!currentMock) return;
    // Calculate total score
    let mcqScore = 0;
    mockMcqList.forEach(q => {
      if (mcqAnswers[q.id] === q.correctAnswer) {
        mcqScore += 1;
      }
    });

    let descriptiveTotal = 0;
    Object.values(selfScores).forEach(s => {
      descriptiveTotal += s;
    });

    const totalScore = mcqScore + descriptiveTotal;
    const timeSpent = (currentMock.timeLimitMinutes * 60) - secondsRemaining;

    submitMockExam({
      mockId: currentMock.id,
      score: totalScore,
      totalMarks: currentMock.totalMarks,
      mcqScore,
      descriptiveSelfScores: selfScores,
      timeSpentSeconds: timeSpent
    });

    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    alert(`Mock Exam submitted! Score: ${totalScore}/${currentMock.totalMarks} (${Math.round((totalScore/currentMock.totalMarks)*100)}%)`);
  };

  const formatTimer = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h > 0 ? `${h}:` : ''}${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (mockExams.length === 0 || !currentMock) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Mock Examinations</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <FileText className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Full Mock Examinations Under Development
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Official timed mock examinations with marking rubrics, case studies, and comprehensive feedback for {currentSubject.title} ({currentSubject.courseCode}) are currently in preparation.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 mock exams available</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Subject Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Full Mock Examinations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currentSubject.title}
          </h2>
        </div>
      </div>

      {/* Simulator 1 & 2 Selector Tabs */}
      {testState === 'intro' && (
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {mockExams.map(m => (
            <button
              key={m.id}
              onClick={() => setActiveMockId(m.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeMockId === m.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400'
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>
      )}

      {/* Intro State */}
      {testState === 'intro' && (
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
              IU International University Format
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {currentMock.title}
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl">
              {currentMock.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block">Total Marks</span>
              <span className="text-2xl font-black text-indigo-600">{currentMock.totalMarks}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block">Time Allowed</span>
              <span className="text-2xl font-black text-slate-800 dark:text-slate-200 font-mono">
                {currentMock.timeLimitMinutes}m
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block">MCQs</span>
              <span className="text-2xl font-black text-emerald-600">{currentMock.mcqIds.length}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block">Case Questions</span>
              <span className="text-2xl font-black text-purple-600">{currentMock.descriptiveQuestions.length}</span>
            </div>
          </div>

          <div className="space-y-3 p-5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs text-indigo-950 dark:text-indigo-200">
            <span className="font-bold uppercase tracking-wider block">Examination Instructions</span>
            <ul className="list-disc pl-4 space-y-1">
              <li>48 Multiple Choice questions (1 mark each = 48 marks)</li>
              <li>1 Compulsory Comprehensive Case Study (20 marks)</li>
              <li>2 Medium Analytical / Comparative questions (8 marks each = 16 marks)</li>
              <li>1 Short Foundational question (6 marks)</li>
              <li>Practice Readiness benchmark: Strong (≥ 80%), Progressing (70–79%), Developing (50–69%), Starting (&lt; 50%). Note: Course-book knowledge tests require ≥ 80% on the learning platform to register for assessment.</li>
            </ul>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Play className="w-4 h-4" />
            Start 120-Minute Examination Simulator
          </button>
        </div>
      )}

      {/* Active Exam Mode */}
      {testState === 'active' && (
        <div className="space-y-6">
          {/* Sticky Timer Bar */}
          <div className="sticky top-16 z-20 glass-card rounded-2xl p-4 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-mono font-bold text-lg text-indigo-600 dark:text-indigo-400">
                <Timer className="w-5 h-5 text-indigo-600 animate-pulse" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {currentMock.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(prev => !prev)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-500" /> : <Pause className="w-3.5 h-3.5" />}
                {isPaused ? 'Resume' : 'Pause'}
              </button>

              <button
                onClick={handleSubmitExam}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* Tab Selector: MCQs vs Descriptive */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('mcqs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'mcqs'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Part 1: 48 MCQs ({Object.keys(mcqAnswers).length}/48 answered)
            </button>
            <button
              onClick={() => setActiveTab('descriptive')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'descriptive'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Part 2: Descriptive Case Studies (4 Questions • 42 Marks)
            </button>
          </div>

          {/* Tab 1: MCQs */}
          {activeTab === 'mcqs' && mockMcqList.length > 0 && (
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Question Navigation Bubbles */}
              <div className="flex flex-wrap gap-1.5 pb-4 border-b border-slate-200 dark:border-slate-800">
                {mockMcqList.map((q, idx) => {
                  const isAnswered = !!mcqAnswers[q.id];
                  const isCurrent = idx === activeMcqIndex;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setActiveMcqIndex(idx)}
                      className={`w-7 h-7 rounded text-[11px] font-mono font-bold transition-all ${
                        isCurrent
                          ? 'ring-2 ring-indigo-500 bg-indigo-600 text-white'
                          : isAnswered
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Active MCQ Question */}
              {mockMcqList[activeMcqIndex] && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono font-bold text-indigo-600">
                      Question {activeMcqIndex + 1} of 48 (Unit {mockMcqList[activeMcqIndex].unit})
                    </span>
                    <span>1 Mark</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    {mockMcqList[activeMcqIndex].question}
                  </h3>

                  <div className="space-y-3">
                    {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                      const isSelected = mcqAnswers[mockMcqList[activeMcqIndex].id] === optKey;
                      return (
                        <button
                          key={optKey}
                          onClick={() => setMcqAnswers(prev => ({
                            ...prev,
                            [mockMcqList[activeMcqIndex].id]: optKey
                          }))}
                          className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                            isSelected
                              ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-200 font-semibold'
                              : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 bg-white/40 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'
                          }`}>
                            {optKey}
                          </span>
                          <span className="text-sm leading-relaxed">
                            {mockMcqList[activeMcqIndex].options[optKey]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setActiveMcqIndex(prev => Math.max(0, prev - 1))}
                      disabled={activeMcqIndex === 0}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 disabled:opacity-40"
                    >
                      ← Previous MCQ
                    </button>
                    <button
                      onClick={() => setActiveMcqIndex(prev => Math.min(mockMcqList.length - 1, prev + 1))}
                      disabled={activeMcqIndex === mockMcqList.length - 1}
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white disabled:opacity-40"
                    >
                      Next MCQ →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Descriptive Case Questions */}
          {activeTab === 'descriptive' && (
            <div className="space-y-6">
              {currentMock.descriptiveQuestions.map((dq, idx) => (
                <div key={dq.id} className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded font-mono font-bold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        Question {idx + 1} • {dq.marks} Marks
                      </span>
                      <span className="text-slate-400">Unit {dq.unit}</span>
                    </div>
                    <span className="font-mono text-slate-400">Suggested: {dq.suggestedMinutes} mins</span>
                  </div>

                  {dq.scenario && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <span className="font-bold uppercase tracking-wider text-[10px] text-indigo-600 block">
                        Case Scenario
                      </span>
                      <p className="leading-relaxed whitespace-pre-line">{dq.scenario}</p>
                    </div>
                  )}

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                    {dq.question}
                  </h3>

                  {/* Student Typing Area */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Your Examination Answer
                    </label>
                    <textarea
                      rows={10}
                      value={descriptiveAnswers[dq.id] || ''}
                      onChange={(e) => setDescriptiveAnswers(prev => ({
                        ...prev,
                        [dq.id]: e.target.value
                      }))}
                      placeholder="Type your structured answer here (Structure by Roman numerals or clear headings as requested)..."
                      className="w-full p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Review & Self-Scoring Mode */}
      {testState === 'review' && (
        <div className="space-y-8 animate-fade-in">
          <div className="glass-card rounded-2xl p-6 sm:p-8 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Exam Complete — Benchmark & Self-Score
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Official Marking Rubric Evaluation
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Compare your written responses against the official IU Master's model answer and award points using the grading rubric below.
            </p>
          </div>

          {/* Part 1: MCQ Results */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Part 1: Multiple Choice Scoring
            </h3>
            
            <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-2 text-xs">
              {mockMcqList.map((q, idx) => {
                const userChoice = mcqAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-2 rounded-lg border text-center font-mono ${
                      isCorrect 
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-800 dark:text-emerald-200' 
                        : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 text-rose-800 dark:text-rose-200'
                    }`}
                  >
                    <span className="text-[10px] block text-slate-400">Q{idx + 1}</span>
                    <span className="font-bold text-sm">{userChoice || '-'}</span>
                    <span className="text-[9px] block text-slate-400 mt-0.5">Key: {q.correctAnswer}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part 2: Descriptive Questions Self-Marking */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Part 2: Case Studies Model Answers & Rubrics
            </h3>

            {currentMock.descriptiveQuestions.map((dq, idx) => {
              const currentScore = selfScores[dq.id] || 0;
              const checks = rubricChecks[dq.id] || {};

              return (
                <div key={dq.id} className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 px-2.5 py-1 rounded">
                      Question {idx + 1} • {dq.marks} Marks Total
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500">Your Awarded Score:</span>
                      <input
                        type="number"
                        min={0}
                        max={dq.marks}
                        value={currentScore}
                        onChange={(e) => setSelfScores(prev => ({
                          ...prev,
                          [dq.id]: Math.min(dq.marks, Math.max(0, Number(e.target.value)))
                        }))}
                        className="w-16 px-2 py-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 font-bold text-sm text-center"
                      />
                      <span className="text-xs font-mono text-slate-400">/ {dq.marks}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {dq.question}
                  </h4>

                  {/* Student Answer Submitted */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      What You Wrote
                    </span>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 whitespace-pre-line max-h-48 overflow-y-auto">
                      {descriptiveAnswers[dq.id] || '(No answer provided)'}
                    </div>
                  </div>

                  {/* Model Answer */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
                      Official Master's Model Answer
                    </span>
                    <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line font-sans">
                      {dq.modelAnswer}
                    </div>
                  </div>

                  {/* Marking Rubric Breakdown */}
                  <div className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs">
                    <span className="font-bold text-slate-900 dark:text-white block">
                      Marking Rubric Criteria (Check items you fulfilled)
                    </span>
                    <div className="space-y-2">
                      {dq.rubricItems.map((item, rIdx) => {
                        const isChecked = !!checks[rIdx];
                        return (
                          <div 
                            key={rIdx}
                            onClick={() => {
                              setRubricChecks(prev => {
                                const qChecks = prev[dq.id] || {};
                                return {
                                  ...prev,
                                  [dq.id]: {
                                    ...qChecks,
                                    [rIdx]: !qChecks[rIdx]
                                  }
                                };
                              });
                            }}
                            className="flex items-start gap-2.5 cursor-pointer p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                          >
                            <div className="mt-0.5 text-indigo-600">
                              {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                            </div>
                            <div className="flex-1 flex justify-between gap-2">
                              <span className={isChecked ? 'text-indigo-600 font-medium' : 'text-slate-700 dark:text-slate-300'}>
                                {item.point}
                              </span>
                              <span className="font-mono text-slate-400 shrink-0">+{item.marksAllotted} marks</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Final Submission Button */}
            <div className="text-center pt-6">
              <button
                onClick={handleFinishSelfScoring}
                className="px-8 py-3.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg"
              >
                Save Exam Score & Update Readiness Diagnostic
              </button>
            </div>
          </div>
      )}
    </div>
  );
};
