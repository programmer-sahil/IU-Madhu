import React, { useState } from 'react';
import { DescriptiveQuestion, UnitId } from '../types';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  ChevronDown, ChevronUp, AlertTriangle, CheckSquare, Square, 
  Bookmark, BookmarkCheck, Clock, Target, FileText, CheckCircle2, HelpCircle 
} from 'lucide-react';

interface QuestionAccordionProps {
  initialUnit?: UnitId;
}

export const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ initialUnit }) => {
  const { toggleBookmark, isBookmarked } = useProgress();
  const { currentSubject } = useSubject();
  const { getAllQuestions } = useSubjectData();
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
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300';
      case 'HIGH PRIORITY':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300';
      case 'POSSIBLE LONG QUESTION':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300';
    }
  };

  if (allQuestions.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Important Exam Q&A</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Exam Q&A In Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Important descriptive exam questions, case studies, marking rubrics, and model answers for {currentSubject.title} ({currentSubject.courseCode}) are currently being authored.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 items available</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Subject Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Important Exam Q&A</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currentSubject.title}
          </h2>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value={0}>All Units ({allQuestions.length})</option>
            {currentSubject.units.map(u => (
              <option key={u.id} value={u.id}>
                Unit {u.id}: {u.shortTitle || u.title.split(':')[0]}
              </option>
            ))}
          </select>

          {/* Marks Filter */}
          <select
            value={selectedMarks}
            onChange={(e) => setSelectedMarks(Number(e.target.value))}
            className="px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value={0}>All Marks</option>
            <option value={6}>6 Marks (Short)</option>
            <option value={8}>8 Marks (Medium)</option>
            <option value={20}>20 Marks (Case Study)</option>
          </select>

          {/* Priority Filter */}
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
          >
            <option value="all">All Priorities</option>
            <option value="VERY HIGH PRIORITY">Very High Priority</option>
            <option value="HIGH PRIORITY">High Priority</option>
            <option value="POSSIBLE LONG QUESTION">Long Questions</option>
          </select>
        </div>

        <div className="text-slate-500 font-mono">
          Showing {filtered.length} questions
        </div>
      </div>

      {/* Questions Accordion List */}
      <div className="space-y-4">
        {filtered.map(q => {
          const isExpanded = !!expandedIds[q.id];
          const qChecklist = checklistState[q.id] || {};
          const checkedCount = Object.values(qChecklist).filter(Boolean).length;

          return (
            <div 
              key={q.id}
              className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Question Header */}
              <div 
                onClick={() => toggleExpand(q.id)}
                className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded">
                      Unit {q.unit}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded">
                      {q.marks} Marks
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getPriorityBadge(q.priority)}`}>
                      {q.priority}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {q.suggestedTimeMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {q.question}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark({
                        id: q.id,
                        type: 'question',
                        title: q.question,
                        unit: q.unit
                      });
                    }}
                    className="p-1 rounded text-slate-400 hover:text-indigo-600"
                    title={isBookmarked(q.id) ? 'Bookmarked' : 'Add to revision list'}
                  >
                    {isBookmarked(q.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>

                  <div className="p-1 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Answer Content */}
              {isExpanded && (
                <div className="p-5 pt-0 space-y-6 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm animate-fade-in">
                  {/* Examiner Expectation */}
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-indigo-950 dark:text-indigo-200 space-y-1">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                      Examiner Evaluation Focus
                    </span>
                    <p className="text-xs leading-relaxed">{q.examinerExpectation}</p>
                  </div>

                  {/* Required Answer Structure */}
                  <div className="space-y-1.5">
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block">
                      Recommended Answer Structure
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {q.answerStructure.map((step, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Model Answer */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block">
                      Official Master's Model Answer
                    </span>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed font-sans whitespace-pre-line text-xs sm:text-sm">
                      {q.modelAnswer}
                    </div>
                  </div>

                  {/* Keywords to Include */}
                  <div className="space-y-1.5">
                    <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block">
                      Grading Keywords (Ensure these appear in your answer)
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {q.keywords.map((kw, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-mono">
                          ✓ {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Common Student Mistakes */}
                  <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/40 text-rose-950 dark:text-rose-200 space-y-1">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Common Mistake That Loses Points
                    </span>
                    <p className="text-xs leading-relaxed">{q.commonMistakes}</p>
                  </div>

                  {/* Self-Check Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                        Self-Marking Checklist
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">
                        {checkedCount} of {q.selfCheckChecklist.length} criteria met
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {q.selfCheckChecklist.map((item, idx) => {
                        const isChecked = !!qChecklist[idx];
                        return (
                          <div 
                            key={idx}
                            onClick={() => toggleChecklistItem(q.id, idx)}
                            className="flex items-start gap-2.5 cursor-pointer p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50"
                          >
                            <div className="mt-0.5 text-indigo-600">
                              {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-300 dark:text-slate-600" />}
                            </div>
                            <span className={`text-xs ${isChecked ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
