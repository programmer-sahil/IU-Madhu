import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, Quote, Award } from 'lucide-react';

const TUTOR_QUOTES = [
  {
    quote: "Stay calm and trust the structured methodology. In the IU examination, exact definitions, milestone gates, and unambiguous roles matter more than general intuition.",
    context: "Exam Strategy",
    source: "Tutor SK SAHIL"
  },
  {
    quote: "Notice how questions test boundaries: RUP phases run engineering disciplines concurrently; Scrum has no Project Manager; and the PRINCE2 Project Board is a balanced triad.",
    context: "Framework Distinctions",
    source: "Tutor SK SAHIL"
  },
  {
    quote: "For Earned Value calculations: write down the formula first. EV = % complete × BAC, SV = EV - PV, CV = EV - AC. An index > 1.0 (CPI, SPI) is always favorable.",
    context: "Calculation Precision",
    source: "Tutor SK SAHIL"
  },
  {
    quote: "When analyzing conflict scenarios: Thomas-Kilmann Collaborating (win-win) is the gold standard for consensus, whereas Compromise requires mutual concessions (lose-lose).",
    context: "Conflict Management",
    source: "Tutor SK SAHIL"
  },
  {
    quote: "Remember the PMBOK 5x10 matrix: exactly 47 processes in the syllabus, with Planning accounting for 24 of them — over 50% of the entire framework!",
    context: "High-Yield Numbers",
    source: "Tutor SK SAHIL"
  },
  {
    quote: "In the 90-minute examination: allocate 1 minute per MCQ and preserve 30 minutes for structured descriptive explanations using official course-book terminology.",
    context: "Time Management",
    source: "Tutor SK SAHIL"
  },
  {
    quote: "Under the Iron Triangle, quality is fixed at the center. In Agile, cost and schedule are fixed while scope is estimated and flexed dynamically.",
    context: "Constraint Dynamics",
    source: "Tutor SK SAHIL"
  }
];

export const TutorQuoteCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [index, setIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Auto-rotate every 18 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % TUTOR_QUOTES.length);
    }, 18000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIsRotating(true);
    setIndex(prev => (prev + 1) % TUTOR_QUOTES.length);
    setTimeout(() => setIsRotating(false), 300);
  };

  const current = TUTOR_QUOTES[index];

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/50 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-sky-950/30 p-5 shadow-sm transition-all duration-300 ${className}`}>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 rounded-full bg-sky-500/10 blur-2xl pointer-events-none" />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-wide text-slate-900 dark:text-white">
                TUTOR SK SAHIL
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-800">
                {current.context}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">IU Exam Coach & Mentor</span>
          </div>
        </div>

        <button
          onClick={handleNext}
          title="Next Guidance Tip"
          className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="relative pl-3.5 border-l-2 border-sky-500/40 my-2">
        <Quote className="w-3.5 h-3.5 text-sky-500/30 absolute -top-1 -left-2" />
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
          "{current.quote}"
        </p>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 pt-1">
        <span>Grounded in DLMBITPAM01 Syllabus</span>
        <div className="flex gap-1">
          {TUTOR_QUOTES.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`inline-block w-1.5 h-1.5 rounded-full cursor-pointer transition-all ${
                i === index ? 'bg-sky-500 w-3' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

