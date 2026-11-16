import React, { useState, useMemo } from 'react';
import { 
  Zap, Search, Filter, BookOpen, Calculator, Hash, ArrowLeftRight, 
  AlertTriangle, CheckCircle2, ChevronDown, ChevronRight, Bookmark, 
  HelpCircle, Sparkles, Layers, Award
} from 'lucide-react';
import { TutorQuoteCard } from './TutorQuoteCard';
import { 
  itpmUnits, 
  itpmNumbers, 
  itpmComparisons, 
  itpmExamTraps, 
  unit3Formulas,
  getAllQuestions 
} from '../data/subjects/itpm';

type TabCategory = 'all' | 'memorize' | 'formulas' | 'numbers' | 'comparisons' | 'traps' | 'qa';

const MUST_MEMORIZE_CARDS = [
  {
    unit: 1,
    title: "Iron Triangle vs Quintuple Constraints",
    points: [
      "Classic Iron Triangle: Scope, Schedule, Cost with Quality fixed at the center.",
      "Quintuple Constraints (IU Model): Schedule, Cost, Context, Technical, Financing.",
      "Project vs Operations: Projects are temporary with unique deliverables; operations are ongoing and repetitive.",
      "Agile shifts the paradigm: Schedule & Cost are fixed; Scope is estimated and flexed."
    ],
    trap: "Quality is NOT a 4th side of the triangle; it is the central outcome constrained by the three sides."
  },
  {
    unit: 2,
    title: "WBS, Milestone Gates & Definition of Done",
    points: [
      "WBS is 100% deliverable-oriented, hierarchically decomposed into Work Packages (lowest level).",
      "Milestones have ZERO duration and consume ZERO resources; they are binary checkpoint gates.",
      "Precedence types: Finish-to-Start (FS - most common), SS, FF, Start-to-Finish (SF - rare).",
      "Definition of Done (DoD): Objective binary checklist ensuring working software meets quality criteria."
    ],
    trap: "A Milestone is NOT a short task; its duration is strictly 0 days."
  },
  {
    unit: 3,
    title: "Earned Value Management & PERT Gold Standards",
    points: [
      "EV = % Completed × BAC. PV = Planned % × BAC. AC = Actual Money Spent.",
      "Cost Variance: CV = EV - AC (Positive = Under budget, Negative = Over budget).",
      "Schedule Variance: SV = EV - PV (Positive = Ahead of schedule, Negative = Behind).",
      "Efficiency Indices: CPI = EV / AC, SPI = EV / PV. Values > 1.0 indicate favorable performance.",
      "PERT Weighted Average: Te = (Optimistic + 4 × Most Likely + Pessimistic) / 6."
    ],
    trap: "Cost Variance is EV - AC, NEVER AC - EV. If AC > EV, you have a negative variance (over budget)."
  },
  {
    unit: 4,
    title: "RACI Governance & Thomas-Kilmann Conflict Modes",
    points: [
      "RACI Rule: Exactly ONE 'A' (Accountable) person per deliverable to prevent split accountability.",
      "Multiple 'R' (Responsible doers) are permitted; 'C' is two-way consult; 'I' is one-way broadcast.",
      "Communication Channels Formula: N(N - 1) / 2. Explains exponential communication overhead.",
      "Conflict Modes: Collaborating (Win-Win consensus) is the gold standard; Compromise is give-and-take lose-lose."
    ],
    trap: "Having two 'A's on a single task violates RACI governance rules and leads to diffusion of responsibility."
  },
  {
    unit: 5,
    title: "RUP Hump Chart & Scrum Rules",
    points: [
      "RUP has 4 phases (Inception, Elaboration, Construction, Transition) and 6 concurrent disciplines.",
      "Disciplines are NOT sequential: they run concurrently in all phases; only their workload peaks vary.",
      "Scrum has 3 Roles (PO, SM, Developers — NO Project Manager role exists in Scrum!).",
      "Sprint timebox: ≤ 1 month, NEVER extended to complete unfinished backlog items."
    ],
    trap: "Scrum has NO Project Manager role. Responsibilities are split between PO, SM, and Developers."
  },
  {
    unit: 6,
    title: "PMBOK 47 Processes & PRINCE2 7-7-7 Triad",
    points: [
      "PMBOK syllabus defines exactly 47 processes: Planning has 24 processes (over 50% of the entire guide!).",
      "PRINCE2 Triad (Project Board): Executive (funding/business), Senior User (needs/benefits), Senior Supplier (technical delivery).",
      "PRINCE2 has 6 defined Tolerances: Time, Cost, Scope, Quality, Risk, Benefit.",
      "PMO Types: Supportive (Low control, advisory), Controlling (Moderate, mandatory frameworks), Directive (High, directly assigns PMs)."
    ],
    trap: "The Project Board is NOT led by the Project Manager; the PM reports TO the Project Board."
  }
];

export const QuickRevision: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState<TabCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered Must Memorize Cards
  const filteredMustMemorize = useMemo(() => {
    return MUST_MEMORIZE_CARDS.filter(c => {
      if (selectedUnit !== 'all' && c.unit !== selectedUnit) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return c.title.toLowerCase().includes(query) ||
          c.points.some(p => p.toLowerCase().includes(query)) ||
          c.trap.toLowerCase().includes(query);
      }
      return true;
    });
  }, [selectedUnit, searchQuery]);

  // Filtered Formulas
  const filteredFormulas = useMemo(() => {
    return unit3Formulas.filter(f => {
      if (selectedUnit !== 'all' && selectedUnit !== 3 && selectedUnit !== 2) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return f.name.toLowerCase().includes(query) ||
          f.formula.toLowerCase().includes(query) ||
          f.description.toLowerCase().includes(query);
      }
      return true;
    });
  }, [selectedUnit, searchQuery]);

  // Filtered Numbers
  const filteredNumbers = useMemo(() => {
    return itpmNumbers.filter(n => {
      if (selectedUnit !== 'all' && n.unit !== selectedUnit) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (n.label || '').toLowerCase().includes(query) ||
          (n.number || '').toLowerCase().includes(query) ||
          (n.context || '').toLowerCase().includes(query) ||
          (n.framework || '').toLowerCase().includes(query);
      }
      return true;
    });
  }, [selectedUnit, searchQuery]);

  // Filtered Comparisons
  const filteredComparisons = useMemo(() => {
    return itpmComparisons.filter(c => {
      if (selectedUnit !== 'all' && !c.unit.includes(String(selectedUnit))) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return c.title.toLowerCase().includes(query) ||
          c.columns[0].toLowerCase().includes(query) ||
          c.columns[1].toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query);
      }
      return true;
    });
  }, [selectedUnit, searchQuery]);

  // Filtered Traps
  const filteredTraps = useMemo(() => {
    return itpmExamTraps.filter(t => {
      if (selectedUnit !== 'all' && t.unit !== selectedUnit) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return t.topic.toLowerCase().includes(query) ||
          t.commonStudentMistake.toLowerCase().includes(query) ||
          t.correctAcademicTruth.toLowerCase().includes(query);
      }
      return true;
    });
  }, [selectedUnit, searchQuery]);

  // 20 High-Yield Questions
  const highYieldQA = useMemo(() => {
    const all = getAllQuestions();
    const filtered = all.filter(q => {
      if (selectedUnit !== 'all' && q.unit !== selectedUnit) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return q.question.toLowerCase().includes(query) ||
          q.modelAnswer.toLowerCase().includes(query);
      }
      return true;
    });
    return filtered.slice(0, 20);
  }, [selectedUnit, searchQuery]);

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-sky-950 text-white shadow-xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              DLMBITPAM01 · High-Yield Revision Hub
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Units 1 to 6
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            IT Project Management Quick Revision
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Consolidated, high-yield examination notes, exact mathematical formulas, must-know numbers, and framework distinctions grounded 100% in the official IU course book.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 sm:flex-col shrink-0">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center min-w-[110px]">
            <span className="text-[10px] text-slate-300 block font-semibold">Total Sections</span>
            <span className="text-xl font-black text-sky-400">24 Sections</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center min-w-[110px]">
            <span className="text-[10px] text-slate-300 block font-semibold">Active MCQs</span>
            <span className="text-xl font-black text-emerald-400">620 Questions</span>
          </div>
        </div>
      </div>

      {/* Tutor Quote Card */}
      <TutorQuoteCard />

      {/* Filter and Search Controls */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 space-y-4">
        {/* Unit Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setSelectedUnit('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedUnit === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Units (1–6)
            </button>
            {[1, 2, 3, 4, 5, 6].map(u => (
              <button
                key={u}
                onClick={() => setSelectedUnit(u)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedUnit === u
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Unit {u}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter topics, numbers, traps..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
          {[
            { id: 'all', label: 'All Content', icon: Layers },
            { id: 'memorize', label: 'Must Memorize', icon: Zap },
            { id: 'formulas', label: 'Formulas & Math', icon: Calculator },
            { id: 'numbers', label: 'Numbers to Know', icon: Hash },
            { id: 'comparisons', label: 'Top Comparisons', icon: ArrowLeftRight },
            { id: 'traps', label: 'Exam Traps', icon: AlertTriangle },
            { id: 'qa', label: '20 High-Yield Q&A', icon: BookOpen },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as TabCategory)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: Must Memorize Cards */}
      {(activeCategory === 'all' || activeCategory === 'memorize') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <span>Must Memorize Core Principles</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {filteredMustMemorize.length} Units Found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMustMemorize.map(card => (
              <div
                key={card.unit}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-amber-400/50 transition-all space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    Unit {card.unit} Core Rule
                  </span>
                  <span className="text-xs font-mono text-slate-400">IU Course Book</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold shrink-0">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-800 dark:text-rose-300 flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <div>
                    <strong>Exam Trap: </strong> {card.trap}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Formulas & Math */}
      {(activeCategory === 'all' || activeCategory === 'formulas') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-sky-500" />
              <span>Formulas, EVM & Math Cheat Sheet</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {filteredFormulas.length} Formulas Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFormulas.map(form => (
              <div
                key={form.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2.5"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">{form.name}</span>
                  <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 px-2 py-0.5 rounded border border-sky-200/50 dark:border-sky-800">
                    Unit {form.unit}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 text-sky-400 font-mono text-xs font-bold text-center border border-slate-800">
                  {form.formula}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {form.description}
                </p>

                <div className="text-[11px] text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Interpretation: </span>
                  {form.interpretation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: High-Yield Numbers */}
      {(activeCategory === 'all' || activeCategory === 'numbers') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Hash className="w-5 h-5 text-emerald-500" />
              <span>High-Yield Numbers to Know</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {filteredNumbers.length} Curated Values
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredNumbers.map((num, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 transition-all space-y-1.5"
              >
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{num.label}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    Unit {num.unit}
                  </span>
                </div>
                <div className="text-lg font-black text-emerald-600 dark:text-emerald-400 font-mono">
                  {num.number}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {num.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: Top Comparisons */}
      {(activeCategory === 'all' || activeCategory === 'comparisons') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <ArrowLeftRight className="w-5 h-5 text-purple-500" />
              <span>Master Framework Comparisons</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {filteredComparisons.length} Comparisons Available
            </span>
          </div>

          <div className="space-y-4">
            {filteredComparisons.slice(0, 10).map((cmp, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {cmp.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    Unit {cmp.unit} Comparison
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700">
                    <span className="font-bold text-purple-600 dark:text-purple-400 block mb-1">
                      {cmp.columns[0]}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                      {cmp.description || 'Official course-book baseline perspective.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40">
                    <span className="font-bold text-sky-600 dark:text-sky-400 block mb-1">
                      {cmp.columns[1]}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                      {cmp.memoryRule || 'Key exam distinction rule.'}
                    </p>
                  </div>
                </div>

                {cmp.criteria && cmp.criteria.length > 0 && (
                  <div className="overflow-x-auto text-[11px]">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400">
                          <th className="py-1 px-2 font-semibold">Aspect</th>
                          <th className="py-1 px-2 font-semibold text-purple-600 dark:text-purple-400">{cmp.columns[0]}</th>
                          <th className="py-1 px-2 font-semibold text-sky-600 dark:text-sky-400">{cmp.columns[1]}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-slate-700 dark:text-slate-300">
                        {cmp.criteria.slice(0, 4).map((c, idx) => (
                          <tr key={idx}>
                            <td className="py-1 px-2 font-medium text-slate-900 dark:text-white">{c.aspect}</td>
                            <td className="py-1 px-2">{c.itemA}</td>
                            <td className="py-1 px-2">{c.itemB}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: Exam Traps */}
      {(activeCategory === 'all' || activeCategory === 'traps') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
              <span>Common Exam Traps & Pitfalls</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {filteredTraps.length} Traps Tracked
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTraps.slice(0, 16).map((trap, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2.5"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">{trap.topic}</span>
                  <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded border border-rose-200/50 dark:border-rose-800">
                    Unit {trap.unit}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-900 dark:text-rose-300">
                  <strong className="block text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400">Common Student Error:</strong>
                  {trap.commonStudentMistake}
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300">
                  <strong className="block text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">IU Course Book Fact:</strong>
                  {trap.correctAcademicTruth}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 6: 20 High-Yield Q&A */}
      {(activeCategory === 'all' || activeCategory === 'qa') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <span>20 High-Yield Descriptive Questions</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              Model Answers & Keywords
            </span>
          </div>

          <div className="space-y-3">
            {highYieldQA.map((q, idx) => {
              const isExpanded = expandedCards[q.id];
              return (
                <div
                  key={q.id || idx}
                  className="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          Unit {q.unit} · {q.marks || 6} Marks
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{q.priority || `Unit ${q.unit}`}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {q.question}
                      </h4>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          Model Answer:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                          {q.modelAnswer}
                        </p>
                      </div>

                      {q.keywords && q.keywords.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-2">
                          <span className="text-[10px] font-bold text-slate-500">Key Terms:</span>
                          {q.keywords.map((kw, kIdx) => (
                            <span key={kIdx} className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default QuickRevision;
