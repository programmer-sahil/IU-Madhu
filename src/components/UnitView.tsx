import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UnitData } from '../types';
import { useProgress } from '../hooks/useProgress';
import { CheatSheetView } from './CheatSheetView';
import { QuestionAccordion } from './QuestionAccordion';
import { McqPractice } from './McqPractice';
import { FlashcardDeck } from './FlashcardDeck';
import { InteractiveVisuals } from './InteractiveVisuals';
import confetti from 'canvas-confetti';
import { 
  BookOpen, FileText, Zap, HelpCircle, Layers, Target, 
  CheckCircle2, Clock, Award, CheckSquare, Square, Eye, EyeOff, Cpu,
  ChevronRight, ArrowLeft
} from 'lucide-react';

interface UnitViewProps {
  unit: UnitData;
  initialTab?: string;
  subjectTitle?: string;
  subjectSlug?: string;
}

export const UnitView: React.FC<UnitViewProps> = ({ 
  unit, 
  initialTab = 'overview',
  subjectTitle,
  subjectSlug 
}) => {
  const navigate = useNavigate();
  const { progress, toggleUnitCompleted } = useProgress();
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [revealedRecall, setRevealedRecall] = useState<Record<string, boolean>>({});
  const [unitChecklist, setUnitChecklist] = useState<Record<number, boolean>>({});

  const keyConcepts = unit.keyConcepts || [];
  const summarySections = unit.summarySections || [];
  const activeRecall = unit.activeRecall || [];
  const completionChecklist = unit.completionChecklist || [];

  const isUnitCompleted = progress.completedUnits.includes(unit.id);

  // IntersectionObserver for tracking active section while scrolling
  useEffect(() => {
    if (activeTab !== 'summary') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    summarySections.forEach((_, idx) => {
      const el = document.getElementById(`sec-${unit.id}-${idx + 1}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTab, summarySections, unit.id]);

  const toggleRecallAnswer = (id: string) => {
    setRevealedRecall(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChecklistItem = (idx: number) => {
    setUnitChecklist(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleMarkComplete = () => {
    toggleUnitCompleted(unit.id);
    if (!isUnitCompleted) {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Clickable Academic Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap pb-1">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <button
          type="button"
          onClick={() => navigate(subjectSlug ? `/subjects/${subjectSlug}` : '/')}
          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium truncate max-w-[200px]"
        >
          {subjectTitle || 'Subject Dashboard'}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-900 dark:text-white font-semibold truncate">
          Unit {unit.id}: {unit.shortTitle || unit.title}
        </span>
      </nav>

      {/* Mobile Sticky Floating "Back to Subject" Button */}
      <div className="lg:hidden fixed bottom-20 left-4 z-40">
        <button
          type="button"
          onClick={() => navigate(subjectSlug ? `/subjects/${subjectSlug}` : '/')}
          className="px-3.5 py-2 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white text-xs font-semibold shadow-xl backdrop-blur-md border border-slate-700/60 flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Subject</span>
        </button>
      </div>
      {/* Unit Hero Banner */}
      <div className="rounded-[22px] md:rounded-[26px] p-6 sm:p-8 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#151E31] text-white border border-slate-800 shadow-card-dark relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-[8px] font-semibold bg-indigo-500/15 text-[#A5B4FC] border border-indigo-500/25 uppercase tracking-wider text-[11px]">
              Unit {unit.id} • {unit.code}
            </span>
            <span className="px-2.5 py-1 rounded-[8px] text-slate-300 bg-slate-800/60 border border-slate-700/60 flex items-center gap-1.5 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {unit.estimatedTime} Revision
            </span>
            {isUnitCompleted && (
              <span className="px-2.5 py-1 rounded-[8px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Unit Mastered
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight font-heading">
            {unit.title}
          </h1>
          <p className="text-[#CBD5E1] text-xs sm:text-sm font-normal leading-relaxed max-w-2xl">
            {unit.subtitle}
          </p>

          <div className="pt-1">
            <button
              onClick={handleMarkComplete}
              className={`min-h-[40px] px-4 py-2 rounded-[10px] text-xs font-semibold transition-all flex items-center gap-2 ${
                isUnitCompleted
                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/30'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isUnitCompleted ? 'Marked Completed (Click to Undo)' : 'Mark Unit as Completed'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin border-b border-slate-200/90 dark:border-slate-800/80">
        {[
          { id: 'overview', label: 'Overview', icon: BookOpen },
          { id: 'summary', label: 'Summary', icon: FileText },
          { id: 'cheatSheet', label: 'Cheat Sheet', icon: Zap },
          { id: 'questions', label: 'Important Q&A', icon: HelpCircle },
          { id: 'visuals', label: 'Interactive Visuals', icon: Cpu },
          { id: 'mcqs', label: 'MCQ Practice', icon: Award },
          { id: 'flashcards', label: 'Flashcards', icon: Layers },
          { id: 'examFocus', label: 'Active Recall', icon: Target }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] text-xs font-semibold whitespace-nowrap transition-all min-h-[40px] ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#151E31] border border-slate-200 dark:border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Overview & Core Concept Cards (NO STARK WHITE RECTANGLES!) */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-fade-in">
          {/* Executive Overview Card */}
          <div className="premium-card rounded-[18px] p-5 sm:p-6 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Syllabus Scope & Examination Focus
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
              {unit.overview}
            </p>
          </div>

          {/* Section Heading */}
          <div className="pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              CORE EXAMINABLE CONCEPTS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
              Simple Understanding vs Master's-Level Definition
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Learn the intuitive meaning first, then memorize the precise terminology expected in written examination answers.
            </p>
          </div>

          {/* Key Concepts Grid: 1 column mobile, 2 columns desktop */}
          {keyConcepts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {keyConcepts.map(kc => (
                <div
                  key={kc.id}
                  className="concept-card flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Category and Title */}
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800/80">
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-[11px] uppercase tracking-wider">
                        {kc.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC]">
                      {kc.term}
                    </h3>

                    {/* Dual Inset Panels with High Contrast */}
                    <div className="space-y-2.5">
                      {/* 1. Simple Mental Model */}
                      <div className="inset-mental-model">
                        <span className="font-bold text-slate-600 dark:text-[#A5B4FC] uppercase tracking-wider text-[10px] block mb-1">
                          Simple Mental Model
                        </span>
                        <p className="text-slate-700 dark:text-[#CBD5E1] text-xs leading-relaxed italic">
                          "{kc.simpleExplanation}"
                        </p>
                      </div>

                      {/* 2. Academic Exam Definition */}
                      <div className="inset-academic-def">
                        <span className="font-bold text-indigo-700 dark:text-[#C7D2FE] uppercase tracking-wider text-[10px] block mb-1">
                          Master's Exam Definition
                        </span>
                        <p className="text-slate-900 dark:text-[#F8FAFC] text-xs leading-relaxed font-normal">
                          {kc.examDefinition}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Exam Keyword Chips */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Essential Keywords
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(kc.examKeywords || []).map((kw, i) => (
                        <span key={i} className="badge-keyword">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="premium-card rounded-[18px] p-6 text-center text-slate-500 dark:text-slate-400 text-xs">
              Key concept definitions for this unit are being prepared according to university examination guidelines.
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Master's Summary */}
      {activeTab === 'summary' && (
        <div className="space-y-6 animate-fade-in max-w-4xl">
          {/* Sticky Section Pill Bar with Scroll Tracking */}
          {summarySections.length > 0 && (
            <div className="sticky top-16 z-20 -mx-1 px-3 py-2 bg-slate-50/95 dark:bg-[#0B1120]/95 backdrop-blur-md rounded-xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-thin shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Sections:
              </span>
              {summarySections.map((sec, idx) => {
                const secId = `sec-${unit.id}-${idx + 1}`;
                const isCurrent = activeSectionId === secId || (!activeSectionId && idx === 0);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveSectionId(secId);
                      document.getElementById(secId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                      isCurrent
                        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-400/30'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span className="font-mono text-[10px]">{unit.id}.{idx + 1}</span>
                    <span className="truncate max-w-[130px]">{sec.title}</span>
                  </button>
                );
              })}
            </div>
          )}

          {summarySections.length > 0 ? (
            summarySections.map((sec, idx) => (
              <div
                key={idx}
                id={`sec-${unit.id}-${idx + 1}`}
                className="premium-card rounded-[18px] p-5 sm:p-6 space-y-4 scroll-mt-28"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-500 font-bold block mb-1">
                    Section {unit.id}.{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {sec.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
                  {sec.summaryParagraph}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2 text-xs">
                  {(sec.keyPoints || []).map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-slate-700 dark:text-[#CBD5E1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Section Comparison Table (Responsive with smooth scrolling) */}
                {sec.comparisonTable && (
                  <div className="mt-4 rounded-[14px] border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-[#0B1120]/60">
                    <div className="overflow-x-auto scrollbar-thin">
                      <table className="w-full text-left text-xs min-w-[500px]">
                        <thead className="bg-slate-100 dark:bg-[#151E31] text-slate-800 dark:text-[#F8FAFC] font-semibold border-b border-slate-200 dark:border-slate-800">
                          <tr>
                            {sec.comparisonTable.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                          {sec.comparisonTable.rows.map((r, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                              {r.map((cell, cIdx) => (
                                <td 
                                  key={cIdx} 
                                  className={`p-3 ${cIdx === 0 ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-[#CBD5E1]'}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Process Steps */}
                {sec.processSteps && (
                  <div className="space-y-2 mt-4 text-xs">
                    {sec.processSteps.map(st => (
                      <div key={st.step} className="p-3.5 rounded-[12px] bg-slate-50 dark:bg-[#151E31]/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          {st.step}
                        </span>
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block">{st.title}</span>
                          <span className="text-slate-600 dark:text-[#CBD5E1]">{st.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Academic Exam Insight Panel */}
                {sec.examInsight && (
                  <div className="p-3.5 rounded-[12px] bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                    <strong className="text-amber-700 dark:text-amber-300">Examiner Insight:</strong> {sec.examInsight}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="premium-card rounded-[18px] p-6 text-center text-slate-500 dark:text-slate-400 text-xs">
              Detailed syllabus summary sections for this unit are being prepared according to university examination guidelines.
            </div>
          )}
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

      {/* Tab: Interactive Visuals */}
      {activeTab === 'visuals' && (
        <div className="animate-fade-in">
          <InteractiveVisuals unitId={unit.id} />
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

      {/* Tab 7: Active Recall & Readiness */}
      {activeTab === 'examFocus' && (
        <div className="space-y-6 animate-fade-in max-w-4xl">
          {/* Active Recall Drills */}
          <div className="premium-card rounded-[18px] p-5 sm:p-6 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                ACTIVE RECALL DRILL
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Can You Recall? (Test Yourself Without Notes)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Attempt to formulate each answer mentally before clicking to reveal the model answer.
              </p>
            </div>

            <div className="space-y-3">
              {activeRecall.length > 0 ? (
                activeRecall.map((ar, i) => {
                  const isRevealed = !!revealedRecall[ar.id];
                  return (
                    <div key={ar.id} className="p-4 rounded-[14px] border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#151E31]/50 space-y-3 text-xs">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-sm">{i + 1}.</span>
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {ar.question}
                          </h4>
                        </div>
                        <button
                          onClick={() => toggleRecallAnswer(ar.id)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#111827] text-slate-700 dark:text-[#CBD5E1] border border-slate-200 dark:border-slate-700 hover:border-indigo-400 flex items-center gap-1.5 shrink-0 transition-colors"
                        >
                          {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          {isRevealed ? 'Hide' : 'Reveal'}
                        </button>
                      </div>

                      {isRevealed && (
                        <div className="p-3.5 rounded-[10px] bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 text-slate-800 dark:text-[#CBD5E1] leading-relaxed animate-fade-in">
                          <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                            Model Recall Answer:
                          </span>
                          {ar.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-4 rounded-[14px] border border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-xs">
                  Active recall self-test prompts for this unit are being compiled.
                </div>
              )}
            </div>
          </div>

          {/* Unit Completion Checklist */}
          <div className="premium-card rounded-[18px] p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  You are Exam-Ready for Unit {unit.id} if you can:
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Verify each criterion before formally marking this unit complete.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 self-start sm:self-auto">
                {Object.values(unitChecklist).filter(Boolean).length} / {completionChecklist.length} Verified
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {completionChecklist.length > 0 ? (
                completionChecklist.map((crit, idx) => {
                  const isChecked = !!unitChecklist[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`p-3.5 rounded-[12px] border cursor-pointer transition-all flex items-center gap-3 ${
                        isChecked
                          ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold'
                          : 'bg-white dark:bg-[#151E31]/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-[#CBD5E1] hover:border-indigo-400'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                      <span>{crit}</span>
                    </div>
                  );
                })
              ) : (
                <div className="p-3.5 rounded-[12px] border border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-xs">
                  Readiness verification checklist items for this unit will appear here.
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleMarkComplete}
                className={`min-h-[44px] px-6 py-2.5 rounded-[10px] text-xs font-semibold transition-all flex items-center gap-2 ${
                  isUnitCompleted
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
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
