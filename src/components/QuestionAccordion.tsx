import React, { useState } from 'react';
import { DescriptiveQuestion, UnitId } from '../types';
import { getAllQuestions, allUnits } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import { 
  ChevronDown, ChevronUp, AlertTriangle, CheckSquare, Square, 
  Bookmark, BookmarkCheck, Clock, Award, Filter, Sparkles 
} from 'lucide-react';

interface QuestionAccordionProps {
  initialUnit?: UnitId;
}

export const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ initialUnit }) => {
  const { toggleBookmark, isBookmarked } = useProgress();
  const allQuestions = getAllQuestions();

  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit || 0); // 0 = all
  const [selectedMarks, setSelectedMarks] = useState<number>(0); // 0 = all
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [checklistState, setChecklistState] = useState<Record<string, Record<number, boolean>>>({});

  // Filtered Questions
  const filtered = allQuestions.filter(q => {
    if (selectedUnit !== 0 && q.unit !== selectedUnit) return false;
    if (selectedMarks !== 0 && q.marks !== selectedMarks) return false;
    if (selectedPriority !== 'all' && q.priority !== selectedPriority) return false;
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleChecklistItem = (qId: string, idx: number) => {
    setChecklistState(prev => {
      const qState = prev[qId] || {};
      return {
        ...prev,
        [qId]: {
          ...qState,
          [idx]: !qState[idx]
        }
      };
    });
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'VERY HIGH PRIORITY':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-300 dark:border-rose-800';
      case 'HIGH PRIORITY':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300 dark:border-amber-800';
      case 'POSSIBLE LONG QUESTION':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300 dark:border-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Filter Control Bar */}
      <div className="glass-card rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            Master's Exam Questions & Model Answers
          </h3>
          <p className="text-xs text-slate-500">
            Structured mark guidance, examiner rubrics, model solutions, and self-check checklists.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(Number(e.target.value))}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value={0}>All Units ({allQuestions.length})</option>
            {allUnits.map(u => (
              <option key={u.id} value={u.id}>Unit {u.id}</option>
            ))}
          </select>

          {/* Mark Filter */}
          <select
            value={selectedMarks}
            onChange={(e) => setSelectedMarks(Number(e.target.value))}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value={0}>All Marks</option>
            <option value={1}>1 Mark (Exact Fact)</option>
            <option value={6}>6 Marks (Structured)</option>
            <option value={8}>8 Marks (Comparative)</option>
            <option value={20}>20 Marks (Case Study)</option>
          </select>

          {/* Priority Filter */}
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value="all">All Priorities</option>
            <option value="VERY HIGH PRIORITY">Very High Priority</option>
            <option value="HIGH PRIORITY">High Priority</option>
            <option value="POSSIBLE SHORT QUESTION">Short Question</option>
            <option value="POSSIBLE LONG QUESTION">Long Question</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filtered.map(q => {
          const isExpanded = !!expandedIds[q.id];
          const qChecklist = checklistState[q.id] || {};

          return (
            <div
              key={q.id}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-200 border ${
                isExpanded 
                  ? 'border-indigo-400/80 dark:border-indigo-500/60 shadow-md ring-1 ring-indigo-500/20' 
                  : 'border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Accordion Header */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                      Unit {q.unit}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getPriorityBadge(q.priority)}`}>
                      {q.priority}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3" /> ~{q.suggestedTimeMinutes} mins
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {q.question}
                  </h4>
                </div>

                <div className="flex items-center gap-2 pt-1 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark({
                        id: q.id,
                        type: 'question',
                        title: q.question.slice(0, 70) + '...',
                        unit: q.unit
                      });
                    }}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400"
                    title="Bookmark"
                  >
                    {isBookmarked(q.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                  <div className="p-1 rounded-lg text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Accordion Body */}
              {isExpanded && (
                <div className="p-5 pt-0 space-y-6 border-t border-slate-100 dark:border-slate-800/80 animate-fade-in text-sm">
                  {/* Examiner Expectation */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-xs space-y-1">
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> What the Examiner Expects
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {q.examinerExpectation}
                    </p>
                  </div>

                  {/* Model Answer */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs block">
                      Master's-Level Model Answer
                    </span>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed font-sans text-xs md:text-sm whitespace-pre-line">
                      {q.modelAnswer}
                    </div>
                  </div>

                  {/* Keywords to Include */}
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs block mb-2">
                      Mandatory Keywords to Include in Answer
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {q.keywords.map((kw, i) => (
                        <span key={i} className="badge-keyword">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Common Mistake Alert */}
                  {q.commonMistakes && (
                    <div className="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/80 text-xs flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider block mb-0.5">
                          Common Student Mistake (Point Deductions)
                        </span>
                        <p className="text-rose-900 dark:text-rose-200 leading-relaxed">
                          {q.commonMistakes}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Interactive Self-Check Checklist */}
                  {q.selfCheckChecklist && q.selfCheckChecklist.length > 0 && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
                        Exam Answer Self-Check Checklist (Ensure You Covered All):
                      </span>
                      <div className="space-y-1.5">
                        {q.selfCheckChecklist.map((item, idx) => {
                          const isChecked = !!qChecklist[idx];
                          return (
                            <div
                              key={idx}
                              onClick={() => toggleChecklistItem(q.id, idx)}
                              className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                            >
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                              <span className={isChecked ? 'line-through text-slate-400' : ''}>
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
