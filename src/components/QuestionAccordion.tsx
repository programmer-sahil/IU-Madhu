import React, { useState } from 'react';
import { DescriptiveQuestion, UnitId } from '../types';
import { getAllQuestions, allUnits } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import { 
  ChevronDown, ChevronUp, AlertTriangle, CheckSquare, Square, 
  Bookmark, BookmarkCheck, Clock, Target, FileText, CheckCircle2 
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
        return 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-900/60';
      case 'HIGH PRIORITY':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-900/60';
      case 'POSSIBLE LONG QUESTION':
        return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-900/60';
      default:
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-900/60';
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Header and Filter Control Bar */}
      <div className="premium-card rounded-[18px] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
            EXAMINATION PRACTICE
          </span>
          <h2 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg font-heading">
            Master's Exam Questions & Model Solutions
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Structured mark guidance, examiner rubrics, model solutions, and self-check checklists.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(Number(e.target.value))}
            className="px-2.5 py-1.5 rounded-[8px] text-xs font-semibold bg-white dark:bg-[#151E31] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
            className="px-2.5 py-1.5 rounded-[8px] text-xs font-semibold bg-white dark:bg-[#151E31] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
            className="px-2.5 py-1.5 rounded-[8px] text-xs font-semibold bg-white dark:bg-[#151E31] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
              className={`premium-card rounded-[18px] overflow-hidden transition-all duration-200 border ${
                isExpanded 
                  ? 'border-indigo-500/80 dark:border-indigo-500/60 shadow-md ring-1 ring-indigo-500/20' 
                  : 'border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Accordion Header */}
              <div
                onClick={() => toggleExpand(q.id)}
                className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4 select-none hover:bg-slate-50/50 dark:hover:bg-[#151E31]/40 transition-colors"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
                      Unit {q.unit}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className={`px-2 py-0.5 rounded-[6px] text-[10px] font-bold border ${getPriorityBadge(q.priority)}`}>
                      {q.priority}
                    </span>
                    <span className="px-2 py-0.5 rounded-[6px] text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 font-mono text-[10px]">
                      <Clock className="w-3 h-3" /> ~{q.suggestedTimeMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-[#F8FAFC] leading-snug">
                    {q.question}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 pt-1 shrink-0">
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
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-indigo-500"
                    title="Bookmark Question"
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
                <div className="p-5 pt-0 space-y-5 border-t border-slate-100 dark:border-slate-800/80 animate-fade-in text-sm">
                  {/* Examiner Guidance (Target icon, no AI sparkles!) */}
                  <div className="p-4 rounded-[14px] bg-slate-50 dark:bg-[rgba(30,41,59,0.55)] border border-slate-200/80 dark:border-[rgba(148,163,184,0.14)] border-l-[3px] border-l-indigo-600 dark:border-l-[#6366F1] space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-indigo-600 dark:text-[#A5B4FC]" />
                      <span className="font-bold uppercase tracking-wider text-indigo-700 dark:text-[#A5B4FC] text-[10px]">
                        EXAMINER GUIDANCE
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 dark:text-[#F8FAFC]">
                      What the Examiner Expects
                    </h4>

                    <p className="text-slate-700 dark:text-[#CBD5E1] leading-relaxed">
                      {q.examinerExpectation}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded-[6px] text-[10px] font-semibold bg-white dark:bg-[#151E31] text-slate-600 dark:text-[#CBD5E1] border border-slate-200 dark:border-slate-700">
                        Definition
                      </span>
                      <span className="px-2 py-0.5 rounded-[6px] text-[10px] font-semibold bg-white dark:bg-[#151E31] text-slate-600 dark:text-[#CBD5E1] border border-slate-200 dark:border-slate-700">
                        Framework terminology
                      </span>
                      <span className="px-2 py-0.5 rounded-[6px] text-[10px] font-semibold bg-white dark:bg-[#151E31] text-slate-600 dark:text-[#CBD5E1] border border-slate-200 dark:border-slate-700">
                        Structured comparison
                      </span>
                    </div>
                  </div>

                  {/* Model Answer */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs block">
                        Master's-Level Model Answer
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {q.marks} Marks Structure
                      </span>
                    </div>
                    <div className="p-4 rounded-[14px] bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-[#F8FAFC] leading-relaxed font-sans text-xs sm:text-sm whitespace-pre-line">
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

                  {/* Common Student Mistake Alert */}
                  {q.commonMistakes && (
                    <div className="p-3.5 rounded-[12px] bg-amber-500/10 border border-amber-500/30 text-xs flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block mb-0.5 text-[10px]">
                          Common Student Mistake (Examiner Point Deductions)
                        </span>
                        <p className="text-amber-900 dark:text-amber-200 leading-relaxed">
                          {q.commonMistakes}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Interactive Self-Check Checklist */}
                  {q.selfCheckChecklist && q.selfCheckChecklist.length > 0 && (
                    <div className="p-4 rounded-[14px] bg-slate-50/70 dark:bg-[#151E31]/50 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block text-[11px]">
                        Exam Answer Self-Check Checklist (Ensure You Covered All):
                      </span>
                      <div className="space-y-1.5">
                        {q.selfCheckChecklist.map((item, idx) => {
                          const isChecked = !!qChecklist[idx];
                          return (
                            <div
                              key={idx}
                              onClick={() => toggleChecklistItem(q.id, idx)}
                              className="flex items-center gap-2.5 cursor-pointer text-slate-700 dark:text-[#CBD5E1] hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
