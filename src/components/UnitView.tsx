import React, { useState } from 'react';
import { UnitData } from '../types';
import { useProgress } from '../hooks/useProgress';
import { CheatSheetView } from './CheatSheetView';
import { QuestionAccordion } from './QuestionAccordion';
import { McqPractice } from './McqPractice';
import { FlashcardDeck } from './FlashcardDeck';
import confetti from 'canvas-confetti';
import { 
  BookOpen, FileText, Zap, HelpCircle, Layers, Target, 
  CheckCircle2, Clock, Award, CheckSquare, Square, ChevronRight, Eye 
} from 'lucide-react';

interface UnitViewProps {
  unit: UnitData;
  initialTab?: string;
}

export const UnitView: React.FC<UnitViewProps> = ({ unit, initialTab = 'overview' }) => {
  const { progress, toggleUnitCompleted } = useProgress();
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [revealedRecall, setRevealedRecall] = useState<Record<string, boolean>>({});
  const [unitChecklist, setUnitChecklist] = useState<Record<number, boolean>>({});

  const isUnitCompleted = progress.completedUnits.includes(unit.id);

  const toggleRecallAnswer = (id: string) => {
    setRevealedRecall(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChecklistItem = (idx: number) => {
    setUnitChecklist(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleMarkComplete = () => {
    toggleUnitCompleted(unit.id);
    if (!isUnitCompleted) {
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-6">
      {/* Unit Hero Banner */}
      <div className={`rounded-3xl p-6 md:p-8 bg-gradient-to-r ${unit.gradient} text-white shadow-xl relative overflow-hidden`}>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 backdrop-blur-3xl transform skew-x-12 pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider">
              Unit {unit.id} • {unit.code}
            </span>
            <span className="px-3 py-1 rounded-full font-semibold bg-white/10 backdrop-blur-md flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {unit.estimatedTime} Revision
            </span>
            {isUnitCompleted && (
              <span className="px-3 py-1 rounded-full font-bold bg-emerald-500/90 text-white flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Unit Mastered
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            {unit.title}
          </h2>
          <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed">
            {unit.subtitle}
          </p>

          {/* Quick Mark Complete Button */}
          <div className="pt-2">
            <button
              onClick={handleMarkComplete}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 ${
                isUnitCompleted
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isUnitCompleted ? 'Unit Marked Completed' : 'Mark Unit as Completed'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'overview', label: 'Overview', icon: BookOpen },
          { id: 'summary', label: 'Master’s Summary', icon: FileText },
          { id: 'cheatSheet', label: 'Cheat Sheet', icon: Zap },
          { id: 'questions', label: 'Important Q&A', icon: HelpCircle },
          { id: 'mcqs', label: 'MCQ Practice', icon: Award },
          { id: 'flashcards', label: 'Flashcards', icon: Layers },
          { id: 'examFocus', label: 'Active Recall & Readiness', icon: Target }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fade-in">
          {/* Executive Overview Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Academic Unit Syllabus & Examination Focus
            </h3>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {unit.overview}
            </p>
          </div>

          {/* Key Concepts Grid (Dual Explanation: Simple vs Exam Definition) */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Core Examinable Concepts (Simple vs Master’s Definition)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unit.keyConcepts.map(kc => (
                <div
                  key={kc.id}
                  className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:border-indigo-400 transition-all"
                >
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-indigo-600 font-mono text-[11px] uppercase">
                      {kc.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {kc.term}
                  </h4>

                  <div className="space-y-2 text-xs">
                    {/* Simple Explanation */}
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800">
                      <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block mb-0.5">
                        Intuitive Mental Model:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 italic">
                        "{kc.simpleExplanation}"
                      </p>
                    </div>

                    {/* Academic Exam Definition */}
                    <div className="p-2.5 rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/60">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider text-[10px] block mb-0.5">
                        Academic Exam Definition:
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {kc.examDefinition}
                      </p>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {kc.examKeywords.map((kw, i) => (
                      <span key={i} className="badge-keyword text-[10px]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Master's Summary */}
      {activeTab === 'summary' && (
        <div className="space-y-6 animate-fade-in">
          {unit.summarySections.map((sec, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {sec.title}
              </h3>

              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {sec.summaryParagraph}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-1.5 text-xs">
                {sec.keyPoints.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="text-indigo-600 font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>

              {/* Optional Section Comparison Table */}
              {sec.comparisonTable && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 mt-3">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        {sec.comparisonTable.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {sec.comparisonTable.rows.map((r, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                          {r.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional Process Steps */}
              {sec.processSteps && (
                <div className="space-y-2 mt-3 text-xs">
                  {sec.processSteps.map(st => (
                    <div key={st.step} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {st.step}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">{st.title}</span>
                        <span className="text-slate-600 dark:text-slate-400">{st.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Exam Insight Callout */}
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                <strong>Examiner Insight:</strong> {sec.examInsight}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Cheat Sheet */}
      {activeTab === 'cheatSheet' && (
        <div className="animate-fade-in">
          <CheatSheetView initialUnit={unit.id} />
        </div>
      )}

      {/* Tab 4: Important Questions */}
      {activeTab === 'questions' && (
        <div className="animate-fade-in">
          <QuestionAccordion initialUnit={unit.id} />
        </div>
      )}

      {/* Tab 5: MCQ Practice */}
      {activeTab === 'mcqs' && (
        <div className="animate-fade-in">
          <McqPractice initialUnit={unit.id} initialMode="learn" />
        </div>
      )}

      {/* Tab 6: Flashcards */}
      {activeTab === 'flashcards' && (
        <div className="animate-fade-in">
          <FlashcardDeck initialUnit={unit.id} />
        </div>
      )}

      {/* Tab 7: Exam Focus & Active Recall */}
      {activeTab === 'examFocus' && (
        <div className="space-y-6 animate-fade-in">
          {/* Active Recall Section */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Active Recall Drill
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Can You Recall? (Test Yourself Without Notes)
              </h3>
              <p className="text-xs text-slate-500">
                Attempt to answer each prompt mentally or in writing before clicking to reveal the model answer.
              </p>
            </div>

            <div className="space-y-3">
              {unit.activeRecall.map((ar, i) => {
                const isRevealed = !!revealedRecall[ar.id];
                return (
                  <div key={ar.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 space-y-3 text-xs">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-indigo-600 font-mono text-sm">{i + 1}.</span>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          {ar.question}
                        </h4>
                      </div>
                      <button
                        onClick={() => toggleRecallAnswer(ar.id)}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 flex items-center gap-1.5 shrink-0"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        {isRevealed ? 'Hide Answer' : 'Show Answer'}
                      </button>
                    </div>

                    {isRevealed && (
                      <div className="p-3 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-slate-800 dark:text-slate-200 leading-relaxed animate-fade-in">
                        <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                          Model Recall Answer:
                        </span>
                        {ar.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Unit Completion Readiness Checklist */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  You are Exam-Ready for Unit {unit.id} if you can:
                </h3>
                <p className="text-xs text-slate-500">
                  Check all conditions. Once all are met, formally mark this unit complete.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-600">
                {Object.values(unitChecklist).filter(Boolean).length} / {unit.completionChecklist.length} Verified
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {unit.completionChecklist.map((crit, idx) => {
                const isChecked = !!unitChecklist[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleChecklistItem(idx)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold'
                        : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <span>{crit}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleMarkComplete}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 ${
                  isUnitCompleted
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                {isUnitCompleted ? 'Marked Complete (Click to Undo)' : 'Mark Unit Complete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
