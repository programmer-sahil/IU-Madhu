import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Layers, HelpCircle, Hash, FileText, ArrowRight } from 'lucide-react';
import { allUnits, getAllMcqs, getAllQuestions, getAllFlashcards } from '../data/units';
import { highYieldNumbers } from '../data/numbers';
import { masterComparisons } from '../data/comparisons';

interface SearchResultItem {
  id: string;
  type: 'concept' | 'question' | 'mcq' | 'flashcard' | 'number' | 'comparison';
  title: string;
  subtitle: string;
  unit: number;
  snippet: string;
  action: () => void;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, unitId?: number) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener for ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search Index Generation
  const results = useMemo<SearchResultItem[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    const items: SearchResultItem[] = [];

    // Search Key Concepts
    allUnits.forEach(u => {
      u.keyConcepts.forEach(kc => {
        if (
          kc.term.toLowerCase().includes(q) ||
          kc.examDefinition.toLowerCase().includes(q) ||
          kc.simpleExplanation.toLowerCase().includes(q) ||
          kc.examKeywords.some(k => k.toLowerCase().includes(q))
        ) {
          items.push({
            id: kc.id,
            type: 'concept',
            title: kc.term,
            subtitle: `Unit ${u.id}: Key Concept`,
            unit: u.id,
            snippet: kc.examDefinition,
            action: () => {
              onNavigate('unit', u.id);
              onClose();
            }
          });
        }
      });
    });

    // Search Descriptive Questions
    getAllQuestions().forEach(quest => {
      if (
        quest.question.toLowerCase().includes(q) ||
        quest.modelAnswer.toLowerCase().includes(q) ||
        quest.keywords.some(k => k.toLowerCase().includes(q))
      ) {
        items.push({
          id: quest.id,
          type: 'question',
          title: quest.question,
          subtitle: `Unit ${quest.unit}: ${quest.marks} Marks Exam Question`,
          unit: quest.unit,
          snippet: quest.modelAnswer.slice(0, 150) + '...',
          action: () => {
            onNavigate('questions', quest.unit);
            onClose();
          }
        });
      }
    });

    // Search MCQs
    getAllMcqs().forEach(mcq => {
      if (
        mcq.question.toLowerCase().includes(q) ||
        mcq.explanation.toLowerCase().includes(q) ||
        mcq.memoryTip.toLowerCase().includes(q)
      ) {
        items.push({
          id: mcq.id,
          type: 'mcq',
          title: mcq.question,
          subtitle: `Unit ${mcq.unit}: Practice MCQ (${mcq.topic})`,
          unit: mcq.unit,
          snippet: `Answer: ${mcq.correctAnswer} — ${mcq.explanation.slice(0, 120)}...`,
          action: () => {
            onNavigate('mcq', mcq.unit);
            onClose();
          }
        });
      }
    });

    // Search Numbers
    highYieldNumbers.forEach(n => {
      if (
        n.number.toLowerCase().includes(q) ||
        n.label.toLowerCase().includes(q) ||
        n.context.toLowerCase().includes(q)
      ) {
        items.push({
          id: n.id,
          type: 'number',
          title: `${n.number} — ${n.label}`,
          subtitle: `Unit ${n.unit}: High-Yield Number (${n.framework})`,
          unit: n.unit,
          snippet: n.context,
          action: () => {
            onNavigate('numbers');
            onClose();
          }
        });
      }
    });

    // Search Comparisons
    masterComparisons.forEach(comp => {
      if (
        comp.title.toLowerCase().includes(q) ||
        comp.description.toLowerCase().includes(q) ||
        comp.examTrap.toLowerCase().includes(q)
      ) {
        items.push({
          id: comp.id,
          type: 'comparison',
          title: comp.title,
          subtitle: `${comp.unit}: Master Comparison Table`,
          unit: 1,
          snippet: comp.description,
          action: () => {
            onNavigate('comparisons');
            onClose();
          }
        });
      }
    });

    return items.slice(0, 20); // top 20 matches
  }, [query, onNavigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-20 px-4 animate-fade-in">
      <div className="rounded-[20px] w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms, frameworks, numbers, questions, MCQs (e.g., 'residual risk', 'EDM', '72 hours')..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[480px] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-xs text-slate-400 space-y-1">
              <p>Type any keyword to search across the entire CGIT course curriculum.</p>
              <p className="font-mono text-[11px] text-slate-500">Quick suggestions: "EDM", "Residual Risk", "BSI 200-2", "72 hours", "SVC", "GDPR"</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              No matching concepts, questions, or MCQs found for "{query}".
            </div>
          ) : (
            results.map(item => (
              <div
                key={item.id}
                onClick={item.action}
                className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-colors space-y-1 text-left"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
                    {item.subtitle}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.type}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {item.snippet}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Press ESC to close</span>
          <span>{results.length} results found</span>
        </div>
      </div>
    </div>
  );
};
