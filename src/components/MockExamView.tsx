import React, { useState, useEffect, useMemo } from 'react';
import { mockExams } from '../data/mockTests';
import { getAllMcqs } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import confetti from 'canvas-confetti';
import { 
  Timer, Play, Pause, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, 
  RotateCcw, Award, FileText, CheckSquare, Square, Eye, Sparkles 
} from 'lucide-react';

export const MockExamView: React.FC = () => {
  const { submitMockExam } = useProgress();
  const allMcqs = useMemo(() => getAllMcqs(), []);

  const [activeMockId, setActiveMockId] = useState<string>('mock-1');
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
    setSecondsRemaining(currentMock.timeLimitMinutes * 60);
    setMcqAnswers({});
    setDescriptiveAnswers({});
    setSelfScores({});
    setRubricChecks({});
    setActiveMcqIndex(0);
    setIsPaused(false);
    setTestState('active');
  };

  const handleSelectMcq = (qId: string, option: 'A' | 'B' | 'C' | 'D') => {
    if (testState !== 'active') return;
    setMcqAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleSubmitExam = () => {
    setTestState('review');
    setIsPaused(false);

    // Calculate MCQ score automatically
    let mcqScore = 0;
    mockMcqList.forEach(q => {
      if (mcqAnswers[q.id] === q.correctAnswer) {
        mcqScore++;
      }
    });

    // Record submission
    const timeSpent = (currentMock.timeLimitMinutes * 60) - secondsRemaining;
    submitMockExam({
      mockId: currentMock.id,
      score: mcqScore, // will be augmented as user self-evaluates descriptive questions
      totalMarks: currentMock.totalMarks,
      mcqScore,
      descriptiveSelfScores: {},
      timeSpentSeconds: Math.max(1, timeSpent)
    });

    confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
  };

  const formatTimer = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Auto-calculated MCQ score
  const mcqScore = useMemo(() => {
    let score = 0;
    mockMcqList.forEach(q => {
      if (mcqAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [mockMcqList, mcqAnswers]);

  // Total Descriptive Self Score
  const totalDescriptiveScore = useMemo(() => {
    return Object.values(selfScores).reduce((acc, v) => acc + (v || 0), 0);
  }, [selfScores]);

  const totalScore = mcqScore + totalDescriptiveScore;
  const overallPercentage = Math.round((totalScore / currentMock.totalMarks) * 100);

  const toggleRubric = (descId: string, rIdx: number, marksAllotted: number) => {
    setRubricChecks(prev => {
      const qRubric = prev[descId] || {};
      const newStatus = !qRubric[rIdx];
      const updatedQRubric = { ...qRubric, [rIdx]: newStatus };

      // Recompute self score for this question
      const qDef = currentMock.descriptiveQuestions.find(d => d.id === descId);
      if (qDef) {
        let earned = 0;
        qDef.rubricItems.forEach((item, idx) => {
          if (updatedQRubric[idx]) {
            earned += item.marksAllotted;
          }
        });
        setSelfScores(sPrev => ({ ...sPrev, [descId]: earned }));
      }

      return {
        ...prev,
        [descId]: updatedQRubric
      };
    });
  };

  return (
    <div className="space-y-6">
      {/* Intro View */}
      {testState === 'intro' && (
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto space-y-6 text-center border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="inline-flex p-4 rounded-3xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
            <Award className="w-12 h-12" />
          </div>

          <div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              IU Master's Final Examination Simulator
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
              {currentMock.title}
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto mt-2">
              Exact replication of the IU International University 90-mark exam format.
            </p>
          </div>

          {/* Test Selector */}
          <div className="flex justify-center gap-3">
            {mockExams.map(m => (
              <button
                key={m.id}
                onClick={() => setActiveMockId(m.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeMockId === m.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>

          {/* Exam Structure Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left py-4 border-y border-slate-100 dark:border-slate-800 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <span className="text-slate-400 block">Total Marks</span>
              <span className="text-lg font-black text-slate-900 dark:text-white">90 Marks</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <span className="text-slate-400 block">Time Allowed</span>
              <span className="text-lg font-black text-slate-900 dark:text-white">120 Minutes</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <span className="text-slate-400 block">MCQ Section</span>
              <span className="text-lg font-black text-slate-900 dark:text-white">48 Questions (48m)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
              <span className="text-slate-400 block">Descriptive Section</span>
              <span className="text-lg font-black text-slate-900 dark:text-white">42 Marks (4 Tasks)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-left text-xs space-y-1">
            <span className="font-bold text-amber-800 dark:text-amber-300 block">
              Examination Instructions:
            </span>
            <ul className="text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
              <li>48 Multiple Choice Questions: 1 mark each (8 questions per unit across all 6 units).</li>
              <li>1 Case Study: 20 marks (~35 minutes recommended).</li>
              <li>2 Structured Questions: 8 marks each (~12 minutes recommended).</li>
              <li>1 Short Question: 6 marks (~10 minutes recommended).</li>
              <li>Model answers remain hidden until formal submission. You can pause and resume.</li>
            </ul>
          </div>

          <button
            onClick={handleStartExam}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all"
          >
            Start Timed Examination (120 Mins)
          </button>
        </div>
      )}

      {/* Active Exam Interface */}
      {testState === 'active' && (
        <div className="space-y-6">
          {/* Persistent Exam Control Header */}
          <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-16 z-20 shadow-md">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                {currentMock.title}
              </span>
              <div className="flex rounded-lg p-0.5 bg-slate-100 dark:bg-slate-800">
                <button
                  onClick={() => setActiveTab('mcqs')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    activeTab === 'mcqs'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Part A: 48 MCQs ({Object.keys(mcqAnswers).length}/48)
                </button>
                <button
                  onClick={() => setActiveTab('descriptive')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    activeTab === 'descriptive'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Part B: Descriptive (4 Tasks)
                </button>
              </div>
            </div>

            {/* Timer and Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-sm font-bold">
                <Timer className="w-4 h-4 text-amber-400" />
                <span className={secondsRemaining < 600 ? 'text-rose-400 animate-pulse' : ''}>
                  {formatTimer(secondsRemaining)}
                </span>
              </div>

              <button
                onClick={() => setIsPaused(prev => !prev)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>

              <button
                onClick={handleSubmitExam}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* Paused Overlay */}
          {isPaused ? (
            <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto space-y-4">
              <Timer className="w-12 h-12 text-amber-500 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Exam Paused</h3>
              <p className="text-xs text-slate-500">
                The clock is stopped. Click resume when you are ready to continue.
              </p>
              <button
                onClick={() => setIsPaused(false)}
                className="px-6 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white"
              >
                Resume Examination
              </button>
            </div>
          ) : activeTab === 'mcqs' ? (
            /* Part A: MCQs Grid & Navigation */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Question Navigator Drawer */}
              <div className="lg:col-span-3 glass-card rounded-2xl p-4 space-y-3 max-h-[600px] overflow-y-auto">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span>Questions (48)</span>
                  <span className="font-mono text-indigo-600">
                    {Object.keys(mcqAnswers).length} Answered
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {mockMcqList.map((q, idx) => {
                    const isAnswered = !!mcqAnswers[q.id];
                    const isCurrent = idx === activeMcqIndex;
                    return (
                      <button
                        key={q.id}
                        onClick={() => setActiveMcqIndex(idx)}
                        className={`h-8 rounded-lg text-xs font-bold font-mono transition-all ${
                          isCurrent
                            ? 'ring-2 ring-indigo-500 bg-indigo-600 text-white'
                            : isAnswered
                            ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Single Active MCQ Card */}
              {mockMcqList[activeMcqIndex] && (
                <div className="lg:col-span-9 glass-card rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-indigo-600 font-mono">
                      Question {activeMcqIndex + 1} of 48 (1 Mark)
                    </span>
                    <span className="text-slate-500">Unit {mockMcqList[activeMcqIndex].unit} • {mockMcqList[activeMcqIndex].topic}</span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    {mockMcqList[activeMcqIndex].question}
                  </h3>

                  <div className="space-y-3">
                    {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                      const optText = mockMcqList[activeMcqIndex].options[optKey];
                      const isSelected = mcqAnswers[mockMcqList[activeMcqIndex].id] === optKey;

                      return (
                        <button
                          key={optKey}
                          onClick={() => handleSelectMcq(mockMcqList[activeMcqIndex].id, optKey)}
                          className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3.5 ${
                            isSelected
                              ? 'border-indigo-600 bg-indigo-50/90 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-100 font-semibold ring-2 ring-indigo-500/30'
                              : 'border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 hover:border-slate-300'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {optKey}
                          </span>
                          <span className="flex-1 leading-normal">{optText}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setActiveMcqIndex(prev => Math.max(0, prev - 1))}
                      disabled={activeMcqIndex === 0}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 disabled:opacity-30"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveMcqIndex(prev => Math.min(mockMcqList.length - 1, prev + 1))}
                      disabled={activeMcqIndex === mockMcqList.length - 1}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 disabled:opacity-30"
                    >
                      Next Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Part B: Descriptive Tasks */
            <div className="space-y-6">
              {currentMock.descriptiveQuestions.map((task, tIdx) => (
                <div key={task.id} className="glass-card rounded-2xl p-6 space-y-4 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-indigo-600 font-mono">
                      Task {tIdx + 1}: {task.marks} Marks
                    </span>
                    <span className="text-slate-400">
                      Suggested Time: ~{task.suggestedMinutes} mins • Unit {task.unit}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {task.question}
                  </h3>

                  {task.scenario && (
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                      <strong>Scenario Context:</strong> {task.scenario}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400">
                      Your Examination Answer Draft:
                    </label>
                    <textarea
                      value={descriptiveAnswers[task.id] || ''}
                      onChange={(e) => setDescriptiveAnswers(prev => ({ ...prev, [task.id]: e.target.value }))}
                      rows={8}
                      placeholder="Type your structured answer here (Structure, Terminology, Frameworks, Controls, Legal implications)..."
                      className="w-full p-3.5 rounded-xl text-xs font-sans bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Post-Submission Review View */}
      {testState === 'review' && (
        <div className="space-y-6 animate-fade-in">
          {/* Result Banner Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Exam Submission Verified
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Total Score: {totalScore} / {currentMock.totalMarks} ({overallPercentage}%)
            </h2>

            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-xs py-2">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60">
                <span className="text-slate-400 block">MCQ Score</span>
                <span className="text-base font-bold text-indigo-600">{mcqScore} / 48</span>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60">
                <span className="text-slate-400 block">Descriptive Score</span>
                <span className="text-base font-bold text-purple-600">{totalDescriptiveScore} / 42</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60">
                <span className="text-slate-400 block">Grade Classification</span>
                <span className="text-base font-bold text-emerald-600">
                  {overallPercentage >= 80 ? 'First Class (1.x)' : overallPercentage >= 70 ? 'Strong (2.x)' : 'Pass (3.x)'}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setTestState('intro')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                Back to Mock Menu
              </button>
            </div>
          </div>

          {/* Descriptive Question Rubric & Model Answer Review */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Descriptive Section: Model Answers & Self-Grading Rubric
            </h3>

            {currentMock.descriptiveQuestions.map((task, tIdx) => {
              const qRubric = rubricChecks[task.id] || {};
              const awardedMarks = selfScores[task.id] || 0;

              return (
                <div key={task.id} className="glass-card rounded-2xl p-6 space-y-6 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-indigo-600 font-mono text-sm">
                      Task {tIdx + 1}: {task.marks} Marks
                    </span>
                    <span className="font-bold font-mono text-emerald-600 text-sm">
                      Self-Awarded: {awardedMarks} / {task.marks} Marks
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {task.question}
                  </h4>

                  {/* User Answer vs Model Answer */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                      <span className="font-bold text-slate-500 uppercase tracking-wider block">
                        Your Submitted Draft:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                        {descriptiveAnswers[task.id] || '(No answer drafted)'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1 text-xs">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Model Answer:
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                        {task.modelAnswer}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Grading Rubric */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs">
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                      Marking Rubric (Check criteria covered in your answer):
                    </span>
                    <div className="space-y-2">
                      {task.rubricItems.map((r, rIdx) => {
                        const isChecked = !!qRubric[rIdx];
                        return (
                          <div
                            key={rIdx}
                            onClick={() => toggleRubric(task.id, rIdx, r.marksAllotted)}
                            className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-indigo-400"
                          >
                            <div className="flex items-center gap-2">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                              <span className={isChecked ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}>
                                {r.point}
                              </span>
                            </div>
                            <span className="font-mono font-bold text-indigo-600 shrink-0 ml-3">
                              +{r.marksAllotted} Marks
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Examiner Advice */}
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
                    <strong>Examiner Advice:</strong> {task.examinerAdvice}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
