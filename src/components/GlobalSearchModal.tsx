import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  X,
  BookOpen,
  Layers,
  HelpCircle,
  Hash,
  ArrowRight,
  GitCompare,
  Award,
  Globe,
  FileText
} from 'lucide-react';

export interface SearchResultItem {
  id: string;
  type: 'section' | 'concept' | 'question' | 'mcq' | 'flashcard' | 'number' | 'comparison' | string;
  title: string;
  subtitle: string;
  unit: number;
  snippet: string;
  subjectSlug: string;
  subjectTitle: string;
  subjectShortCode: string;
  action: () => void;
  priorityScore?: number;
}

export interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void; // Now takes a URL path, not view string
  currentSubjectSlug: string;
  currentSubjectTitle: string;
  // Data for search
  allSubjectsData: Array<{
    slug: string;
    title: string;
    shortCode: string;
    units: Array<{
      id: number;
      title: string;
      sections?: Array<{ id: string; number: string; title: string }>;
      keyConcepts?: any[];
      importantQuestions?: any[];
      mcqs?: any[];
      flashcards?: any[];
    }>;
    comparisons: any[];
    numbers: any[];
  }>;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentSubjectSlug = 'cgit',
  currentSubjectTitle = 'Corporate Governance of IT',
  allSubjectsData = []
}) => {
  const [query, setQuery] = useState<string>('');
  const [searchScope, setSearchScope] = useState<'current' | 'all'>('current');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [prevIsOpen, setPrevIsOpen] = useState<boolean>(isOpen);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Synchronize state when modal opens/closes without triggering cascading re-renders
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setSearchScope('current');
      setQuery('');
      setSelectedIndex(-1);
    }
  }

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Current Subject Object
  const currentSubject = useMemo(() => {
    if (!allSubjectsData || allSubjectsData.length === 0) return null;
    return allSubjectsData.find((s) => s.slug === currentSubjectSlug) || allSubjectsData[0];
  }, [allSubjectsData, currentSubjectSlug]);

  const currentSubjectShortCode = currentSubject?.shortCode || currentSubjectSlug.toUpperCase();

  // Color styles for subject badges
  const getSubjectBadgeStyle = (slug: string) => {
    switch (slug?.toLowerCase()) {
      case 'corporate-governance':
      case 'cgit':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/80';
      case 'it-project-management':
      case 'itpm':
        return 'bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300 border-sky-200 dark:border-sky-800/80';
      default:
        return 'bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800/80';
    }
  };

  // Type badge styling
  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'section':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-300 dark:border-sky-800 font-semibold';
      case 'concept':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300';
      case 'question':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300';
      case 'mcq':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300';
      case 'flashcard':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300';
      case 'number':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300';
      case 'comparison':
        return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/70 dark:text-cyan-300';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  // Content type icon
  const renderTypeIcon = (type: string) => {
    switch (type) {
      case 'section':
        return <BookOpen className="w-3 h-3 shrink-0 text-sky-600 dark:text-sky-400" />;
      case 'concept':
        return <BookOpen className="w-3 h-3 shrink-0" />;
      case 'question':
        return <HelpCircle className="w-3 h-3 shrink-0" />;
      case 'mcq':
        return <Award className="w-3 h-3 shrink-0" />;
      case 'flashcard':
        return <Layers className="w-3 h-3 shrink-0" />;
      case 'number':
        return <Hash className="w-3 h-3 shrink-0" />;
      case 'comparison':
        return <GitCompare className="w-3 h-3 shrink-0" />;
      default:
        return <FileText className="w-3 h-3 shrink-0" />;
    }
  };

  // Determine subjects to search based on scope toggle
  const targetSubjects = useMemo(() => {
    if (!allSubjectsData || allSubjectsData.length === 0) return [];
    if (searchScope === 'current') {
      const match = allSubjectsData.filter((s) => s.slug === currentSubjectSlug);
      return match.length > 0 ? match : allSubjectsData.slice(0, 1);
    }
    return allSubjectsData;
  }, [allSubjectsData, searchScope, currentSubjectSlug]);

  // Dynamic Subject-Specific Suggestions for empty query state
  const subjectSuggestions = useMemo<string[]>(() => {
    if (!currentSubject) {
      return ['Concepts', 'Questions', 'MCQs', 'High-Yield'];
    }

    // Curated high-yield terms if CGIT
    if (currentSubject.slug === 'cgit') {
      return ['EDM', 'Residual Risk', 'BSI 200-2', '72 hours', 'SVC', 'GDPR'];
    }

    const suggestions: string[] = [];

    // Extract dynamic terms from current subject units
    if (Array.isArray(currentSubject.units)) {
      for (const u of currentSubject.units) {
        if (Array.isArray(u.keyConcepts)) {
          for (const kc of u.keyConcepts) {
            if (kc.term && !suggestions.includes(kc.term)) {
              suggestions.push(kc.term);
            }
            if (Array.isArray(kc.examKeywords)) {
              for (const kw of kc.examKeywords) {
                if (typeof kw === 'string' && kw.length > 2 && !suggestions.includes(kw)) {
                  suggestions.push(kw);
                }
              }
            }
            if (suggestions.length >= 6) break;
          }
        }
        if (suggestions.length >= 6) break;
      }
    }

    // Extract from numbers if needed
    if (suggestions.length < 6 && Array.isArray(currentSubject.numbers)) {
      for (const n of currentSubject.numbers) {
        if (n.number && !suggestions.includes(n.number)) {
          suggestions.push(n.number);
        }
        if (suggestions.length >= 6) break;
      }
    }

    return suggestions.length > 0
      ? suggestions.slice(0, 6)
      : ['Core Concepts', 'Exam Questions', 'Practice MCQs', 'Formulas'];
  }, [currentSubject]);

  // Search indexing and filtering
  const results = useMemo<SearchResultItem[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: SearchResultItem[] = [];
    const isSearchingAll = searchScope === 'all';

    for (const subject of targetSubjects) {
      const shortCode = subject.shortCode || subject.slug.toUpperCase();
      const subjectTitle = subject.title || shortCode;
      const subjectSlug = subject.slug;

      // 1. Index Units Content
      if (Array.isArray(subject.units)) {
        for (const u of subject.units) {
          const unitId = typeof u.id === 'number' ? u.id : parseInt(String(u.id), 10) || 1;

          // 0. Syllabus Sections (Top Priority for exact match)
          if (Array.isArray((u as any).sections)) {
            for (const sec of (u as any).sections) {
              const secNum = (sec.number || '').toLowerCase();
              const secTitle = (sec.title || '').toLowerCase();
              const cleanSec = secNum.replace('.', '');
              const qClean = q.replace('section', '').replace('sec', '').replace('.', '').trim();

              const isExactNumberMatch = secNum === q || cleanSec === q || `section ${secNum}` === q || `sec ${secNum}` === q || (cleanSec === qClean && qClean.length > 0);
              const isExactTitleMatch = secTitle === q;
              const isTitleMatch = secTitle.includes(q);
              const isNumberMatch = secNum.includes(q);

              if (isExactNumberMatch || isExactTitleMatch || isTitleMatch || isNumberMatch) {
                const priorityScore = isExactNumberMatch ? 1000 : (isExactTitleMatch ? 800 : (isTitleMatch ? 600 : 400));
                const baseTitle = `Section ${sec.number}: ${sec.title}`;
                items.push({
                  id: sec.id || `${subjectSlug}-sec-${sec.number}`,
                  type: 'section',
                  title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
                  subtitle: `Unit ${unitId} Syllabus Section`,
                  unit: unitId,
                  snippet: `Official IU Syllabus Section ${sec.number} — ${u.title}`,
                  subjectSlug,
                  subjectTitle,
                  subjectShortCode: shortCode,
                  priorityScore,
                  action: () => {
                    onNavigate(`/subjects/${subjectSlug}/units/${unitId}`);
                    onClose();
                  }
                });
              }
            }
          }

          // Key Concepts
          if (Array.isArray(u.keyConcepts)) {
            for (let i = 0; i < u.keyConcepts.length; i++) {
              const kc = u.keyConcepts[i];
              const term = (kc.term || '').toLowerCase();
              const def = (kc.examDefinition || '').toLowerCase();
              const expl = (kc.simpleExplanation || '').toLowerCase();
              const keywords = Array.isArray(kc.examKeywords)
                ? kc.examKeywords.join(' ').toLowerCase()
                : String(kc.examKeywords || '').toLowerCase();

              if (
                term.includes(q) ||
                def.includes(q) ||
                expl.includes(q) ||
                keywords.includes(q)
              ) {
                const baseTitle = kc.term || 'Key Concept';
                const priorityScore = term === q ? 300 : (term.includes(q) ? 200 : 100);
                items.push({
                  id: kc.id || `${subjectSlug}-kc-${unitId}-${i}`,
                  type: 'concept',
                  title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
                  subtitle: `Unit ${unitId}: Key Concept`,
                  unit: unitId,
                  snippet: kc.examDefinition || kc.simpleExplanation || '',
                  subjectSlug,
                  subjectTitle,
                  subjectShortCode: shortCode,
                  priorityScore,
                  action: () => {
                    onNavigate(`/subjects/${subjectSlug}/units/${unitId}`);
                    onClose();
                  }
                });
              }
            }
          }

          // Descriptive Questions
          if (Array.isArray(u.importantQuestions)) {
            for (let i = 0; i < u.importantQuestions.length; i++) {
              const quest = u.importantQuestions[i];
              const questionText = (quest.question || '').toLowerCase();
              const modelAns = (quest.modelAnswer || '').toLowerCase();
              const qKeywords = Array.isArray(quest.keywords)
                ? quest.keywords.join(' ').toLowerCase()
                : String(quest.keywords || '').toLowerCase();

              if (
                questionText.includes(q) ||
                modelAns.includes(q) ||
                qKeywords.includes(q)
              ) {
                const questUnit = typeof quest.unit === 'number' ? quest.unit : unitId;
                const baseTitle = quest.question || 'Exam Question';
                const priorityScore = questionText.includes(q) ? 150 : 80;
                items.push({
                  id: quest.id || `${subjectSlug}-q-${questUnit}-${i}`,
                  type: 'question',
                  title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
                  subtitle: `Unit ${questUnit}: ${quest.marks ? `${quest.marks} Marks ` : ''}Exam Question`,
                  unit: questUnit,
                  snippet:
                    (quest.modelAnswer || '').slice(0, 150) +
                    ((quest.modelAnswer?.length || 0) > 150 ? '...' : ''),
                  subjectSlug,
                  subjectTitle,
                  subjectShortCode: shortCode,
                  priorityScore,
                  action: () => {
                    onNavigate(`/subjects/${subjectSlug}/tools/important-qa?unit=${questUnit}`);
                    onClose();
                  }
                });
              }
            }
          }

          // MCQs
          if (Array.isArray(u.mcqs)) {
            for (let i = 0; i < u.mcqs.length; i++) {
              const mcq = u.mcqs[i];
              const mcqQ = (mcq.question || '').toLowerCase();
              const explanation = (mcq.explanation || '').toLowerCase();
              const memoryTip = (mcq.memoryTip || '').toLowerCase();

              if (
                mcqQ.includes(q) ||
                explanation.includes(q) ||
                memoryTip.includes(q)
              ) {
                const mcqUnit = typeof mcq.unit === 'number' ? mcq.unit : unitId;
                const baseTitle = mcq.question || 'MCQ Practice Question';
                const priorityScore = mcqQ.includes(q) ? 140 : 70;
                items.push({
                  id: mcq.id || `${subjectSlug}-mcq-${mcqUnit}-${i}`,
                  type: 'mcq',
                  title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
                  subtitle: `Unit ${mcqUnit}: Practice MCQ${mcq.topic ? ` (${mcq.topic})` : ''}`,
                  unit: mcqUnit,
                  snippet: `${mcq.correctAnswer ? `Answer: ${mcq.correctAnswer} — ` : ''}${(mcq.explanation || '').slice(0, 120)}${(mcq.explanation?.length || 0) > 120 ? '...' : ''}`,
                  subjectSlug,
                  subjectTitle,
                  subjectShortCode: shortCode,
                  priorityScore,
                  action: () => {
                    onNavigate(`/subjects/${subjectSlug}/practice/mcq?unit=${mcqUnit}`);
                    onClose();
                  }
                });
              }
            }
          }

          // Flashcards
          if (Array.isArray(u.flashcards)) {
            for (let i = 0; i < u.flashcards.length; i++) {
              const fc = u.flashcards[i];
              const front = (fc.front || '').toLowerCase();
              const back = (fc.back || '').toLowerCase();
              const category = (fc.category || '').toLowerCase();

              if (front.includes(q) || back.includes(q) || category.includes(q)) {
                const fcUnit = typeof fc.unit === 'number' ? fc.unit : unitId;
                const baseTitle = fc.front || 'Flashcard';
                const priorityScore = front.includes(q) ? 130 : 60;
                items.push({
                  id: fc.id || `${subjectSlug}-fc-${fcUnit}-${i}`,
                  type: 'flashcard',
                  title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
                  subtitle: `Unit ${fcUnit}: Flashcard${fc.category ? ` (${fc.category})` : ''}`,
                  unit: fcUnit,
                  snippet:
                    (fc.back || '').slice(0, 130) +
                    ((fc.back?.length || 0) > 130 ? '...' : ''),
                  subjectSlug,
                  subjectTitle,
                  subjectShortCode: shortCode,
                  priorityScore,
                  action: () => {
                    onNavigate(`/subjects/${subjectSlug}/practice/flashcards?unit=${fcUnit}`);
                    onClose();
                  }
                });
              }
            }
          }
        }
      }

      // 2. Index High-Yield Numbers
      if (Array.isArray(subject.numbers)) {
        for (let i = 0; i < subject.numbers.length; i++) {
          const num = subject.numbers[i];
          const numberStr = (num.number || '').toLowerCase();
          const label = (num.label || '').toLowerCase();
          const context = (num.context || '').toLowerCase();
          const framework = (num.framework || '').toLowerCase();

          if (
            numberStr.includes(q) ||
            label.includes(q) ||
            context.includes(q) ||
            framework.includes(q)
          ) {
            const numUnit = typeof num.unit === 'number' ? num.unit : 1;
            const baseTitle = `${num.number || ''} — ${num.label || 'High-Yield Number'}`;
            const priorityScore = numberStr === q ? 250 : 90;
            items.push({
              id: num.id || `${subjectSlug}-num-${i}`,
              type: 'number',
              title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
              subtitle: `Unit ${numUnit}: High-Yield Number${num.framework ? ` (${num.framework})` : ''}`,
              unit: numUnit,
              snippet: num.context || '',
              subjectSlug,
              subjectTitle,
              subjectShortCode: shortCode,
              priorityScore,
              action: () => {
                onNavigate(`/subjects/${subjectSlug}/tools/numbers`);
                onClose();
              }
            });
          }
        }
      }

      // 3. Index Master Comparisons
      if (Array.isArray(subject.comparisons)) {
        for (let i = 0; i < subject.comparisons.length; i++) {
          const comp = subject.comparisons[i];
          const title = (comp.title || '').toLowerCase();
          const description = (comp.description || '').toLowerCase();
          const examTrap = (comp.examTrap || '').toLowerCase();

          if (
            title.includes(q) ||
            description.includes(q) ||
            examTrap.includes(q)
          ) {
            const compUnit = typeof comp.unit === 'number' ? comp.unit : 1;
            const baseTitle = comp.title || 'Master Comparison';
            const priorityScore = title.includes(q) ? 180 : 85;
            items.push({
              id: comp.id || `${subjectSlug}-comp-${i}`,
              type: 'comparison',
              title: isSearchingAll ? `${subjectTitle}: ${baseTitle}` : baseTitle,
              subtitle: `${comp.unit ? `${comp.unit}: ` : ''}Master Comparison Table`,
              unit: compUnit,
              snippet: comp.description || comp.examTrap || '',
              subjectSlug,
              subjectTitle,
              subjectShortCode: shortCode,
              priorityScore,
              action: () => {
                onNavigate(`/subjects/${subjectSlug}/tools/comparisons`);
                onClose();
              }
            });
          }
        }
      }
    }

    // Rank by priorityScore descending
    items.sort((a, b) => (b.priorityScore || 0) - (a.priorityScore || 0));

    return items.slice(0, 20); // Limit 20 results
  }, [query, targetSubjects, searchScope, onNavigate, onClose]);

  // Derived clamped selected index
  const safeSelectedIndex = selectedIndex >= results.length ? -1 : selectedIndex;

  // Keyboard navigation: Cmd+K to toggle/open, Escape to close, Arrows to select
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
        return;
      }

      // Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        if (isOpen) {
          e.preventDefault();
          onClose();
          return;
        }
      }

      // Result list navigation when open
      if (!isOpen || results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter') {
        if (safeSelectedIndex >= 0 && safeSelectedIndex < results.length) {
          e.preventDefault();
          results[safeSelectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, results, safeSelectedIndex]);

  // Scroll active item into view
  useEffect(() => {
    if (safeSelectedIndex >= 0 && resultsContainerRef.current) {
      const activeEl = resultsContainerRef.current.children[safeSelectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [safeSelectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="rounded-[20px] w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827] flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 shrink-0">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search across ${searchScope === 'current' ? (currentSubject?.title || currentSubjectTitle) : 'all subjects'}...`}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Close modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scope Tabs: Current Subject | All Subjects */}
        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/40 flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/70 rounded-xl">
            <button
              type="button"
              onClick={() => setSearchScope('current')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                searchScope === 'current'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Current Subject</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                  searchScope === 'current'
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-100'
                    : 'bg-slate-300/60 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                {currentSubjectShortCode}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSearchScope('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                searchScope === 'all'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>All Subjects</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                  searchScope === 'all'
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-100'
                    : 'bg-slate-300/60 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                {allSubjectsData.length || 'All'}
              </span>
            </button>
          </div>

          <span className="text-[11px] text-slate-400 ml-auto hidden sm:inline">
            {searchScope === 'current' ? currentSubjectTitle : 'Global search'}
          </span>
        </div>

        {/* Search Results List */}
        <div
          ref={resultsContainerRef}
          className="flex-1 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60"
        >
          {query.trim() === '' ? (
            <div className="p-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-4">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {searchScope === 'current'
                  ? `Type any keyword to search across ${currentSubjectTitle || 'the current subject'}`
                  : 'Type any keyword to search across all subjects'}
              </p>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Quick suggestions for {currentSubjectShortCode}:
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 max-w-md pt-1">
                  {subjectSuggestions.map((term, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
                    >
                      "{term}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 space-y-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                No matches found for "{query}"
              </p>
              <p className="text-slate-400">
                {searchScope === 'current'
                  ? 'Try switching to "All Subjects" or using different keywords.'
                  : 'Try searching with shorter keywords or different terms.'}
              </p>
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === safeSelectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all space-y-1.5 text-left border group ${
                    isSelected
                      ? 'bg-indigo-50/80 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800'
                      : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {/* Result Header: Subject Badge + Subtitle + Type Badge */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Subject badge (small colored pill with shortCode) */}
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono uppercase tracking-wider border ${getSubjectBadgeStyle(
                          item.subjectSlug
                        )}`}
                      >
                        {item.subjectShortCode}
                      </span>

                      {/* Subtitle / Unit */}
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono text-[11px]">
                        {item.subtitle}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${getTypeBadgeStyle(
                        item.type
                      )}`}
                    >
                      {renderTypeIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                  </div>

                  {/* Title (prefixed with subject name when searching all subjects) */}
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors shrink-0" />
                  </div>

                  {/* Snippet */}
                  {item.snippet && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {item.snippet}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">
                ESC
              </kbd>{' '}
              to close
            </span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-400">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">
                Cmd+K
              </kbd>{' '}
              toggle
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline flex items-center gap-1 text-slate-400">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">
                ↑↓
              </kbd>{' '}
              navigate
            </span>
          </div>
          <span className="font-medium text-slate-600 dark:text-slate-300">
            {results.length} {results.length === 1 ? 'result' : 'results'} found
          </span>
        </div>
      </div>
    </div>
  );
};
