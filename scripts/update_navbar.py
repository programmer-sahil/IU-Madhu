with open("src/components/AppNavbar.tsx", "r") as f:
    text = f.read()

# 1. Imports
imp_anchor = "import React from 'react';"
new_imp = """import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, Search, Sun, Moon, CheckCircle2, Zap, Calculator, Compass, Flame, FileCheck, ChevronDown
} from 'lucide-react';"""
text = text.replace(imp_anchor, new_imp)
text = text.replace("import { \n  Menu, Search, Sun, Moon, CheckCircle2 \n} from 'lucide-react';", "")

# 2. Add Quick Practice state inside component
anchor_state = "  const tier = getReadinessTier(readinessScore);"
new_state = """  const navigate = useNavigate();
  const [isQuickPracticeOpen, setIsQuickPracticeOpen] = useState(false);
  const quickPracticeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (quickPracticeRef.current && !quickPracticeRef.current.contains(e.target as Node)) {
        setIsQuickPracticeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tier = getReadinessTier(readinessScore);"""
text = text.replace(anchor_state, new_state)

# 3. Add Quick Practice dropdown in the right-side container
anchor_right = "{/* Right: Search, Readiness Pill, Theme Switcher */}\n      <div className=\"flex items-center gap-2 sm:gap-3 shrink-0\">"
qp_button = """{/* Right: Search, Readiness Pill, Theme Switcher */}
      <div className=\"flex items-center gap-2 sm:gap-3 shrink-0\">
        {/* Quick Practice Dropdown Action */}
        {!isGlobalView && currentSubject && (
          <div className="relative" ref={quickPracticeRef}>
            <button
              onClick={() => setIsQuickPracticeOpen(!isQuickPracticeOpen)}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-all cursor-pointer shadow-sm"
              title="Quick Practice Shortcuts"
            >
              <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Quick Practice</span>
              <ChevronDown className={`w-3 h-3 text-sky-500 transition-transform ${isQuickPracticeOpen ? 'rotate-180' : ''}`} />
            </button>

            {isQuickPracticeOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#0B1120] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-xs space-y-1 animate-fadeIn">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Targeted Revision Sprints
                </div>

                <button
                  onClick={() => {
                    setIsQuickPracticeOpen(false);
                    navigate(`/subjects/${currentSubject.title.toLowerCase().replace(/\\s+/g, '-')}/practice/mcq?mode=rapid`);
                  }}
                  className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold">10 Rapid MCQs</div>
                    <div className="text-[10px] text-slate-400">Timed 10-question flash challenge</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setIsQuickPracticeOpen(false);
                    navigate(`/subjects/${currentSubject.title.toLowerCase().replace(/\\s+/g, '-')}/practice/calculation-lab`);
                  }}
                  className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                    <Calculator className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold">EVM & Formula Lab</div>
                    <div className="text-[10px] text-slate-400">EVM, FPA, ROI, and PERT practice</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setIsQuickPracticeOpen(false);
                    navigate(`/subjects/${currentSubject.title.toLowerCase().replace(/\\s+/g, '-')}/practice/scenario-lab`);
                  }}
                  className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold">Stakeholder & Conflict Scenarios</div>
                    <div className="text-[10px] text-slate-400">Unit 4 dilemmas & RACI puzzles</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setIsQuickPracticeOpen(false);
                    navigate(`/subjects/${currentSubject.title.toLowerCase().replace(/\\s+/g, '-')}/tools/30-minute-sprint`);
                  }}
                  className="w-full flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold">30-Min Exam Sprint</div>
                    <div className="text-[10px] text-slate-400">High-yield morning checklist</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        )}"""
text = text.replace(anchor_right, qp_button)

with open("src/components/AppNavbar.tsx", "w") as f:
    f.write(text)

print("Updated AppNavbar.tsx successfully!")

