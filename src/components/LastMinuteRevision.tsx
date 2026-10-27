import React, { useState, useEffect } from 'react';
import { allUnits, getUnitById } from '../data/units';
import { 
  Zap, Clock, Play, Pause, RotateCcw, CheckSquare, Square, 
  Hash, CheckCircle2, ShieldCheck, Flame 
} from 'lucide-react';

const nightBeforeChecklist = [
  'Memorized EDM = Evaluate, Direct, Monitor (Governance) vs PBRM (Management)',
  'Memorized COBIT Core Model (5 Domains, 40 Objectives: 5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA)',
  'Memorized COBIT Goals Cascade: Stakeholder Needs → 13 Enterprise Goals → 13 Alignment Goals → 40 Objectives',
  'Memorized Canonical Risk Formula: Risk = Threat × Vulnerability × Asset Value',
  'Memorized Inherent vs Residual Risk and the rule: Residual Risk ≤ Risk Appetite',
  'Memorized the 4 Risk Treatments: Mitigate, Avoid, Transfer, Accept',
  'Memorized BSI IT-Grundschutz 6 Steps (Structural Analysis, Protection, Modelling, Check, Risk, Implementation)',
  'Memorized BSI 3 Protection Categories: Normal, High, Very High (NO Low!) and Maximum, Accumulation, Distribution',
  'Memorized ITIL V4 SVS (5 elements) and 6 Service Value Chain activities (PIEDOD)',
  'Memorized Incident vs Problem (Symptom/Restoration vs Root Cause & KEDB) and 3 Change types',
  'Memorized GDPR 72-hour breach reporting to Supervisory Authority (Controller duty) & 2 penalty tiers (€20m/4%)',
  'Memorized Pseudonymisation (reversible, GDPR applies) vs Anonymisation (irreversible, outside GDPR)',
  'Memorized Intellectual Property terms: Patents 20 years, Utility Models 10 years, Copyright 70 years post-mortem',
  'Memorized German E-commerce: Impressum (§ 5 DDG - two clicks) and Right of Withdrawal (14 calendar days)'
];

export const LastMinuteRevision: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState<number>(1);
  const [timerSeconds, setTimerSeconds] = useState<number>(300); // 5 minutes
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const handleUnitSwitch = (uId: number) => {
    setActiveUnit(uId);
    setTimerSeconds(300);
    setIsTimerRunning(false);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleCheck = (idx: number) => {
    setCheckedChecklist(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const unit = getUnitById(activeUnit) || allUnits[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> High-Pressure Sprint
            </span>
            <span className="text-xs text-slate-500">5 Mins Per Unit = 30 Mins Total</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            30-Minute Final Revision
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Cram the absolute highest-yield formulas, comparisons, traps, and definitions right before walking into the examination hall.
          </p>
        </div>

        {/* 5-Minute Unit Timer */}
        <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center gap-4 shrink-0 shadow-md">
          <div className="text-center font-mono">
            <div className="text-xs text-slate-400 uppercase tracking-widest">Unit Timer</div>
            <div className="text-2xl font-black text-amber-400">{formatTimer(timerSeconds)}</div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsTimerRunning(prev => !prev)}
              className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
              title={isTimerRunning ? 'Pause' : 'Start'}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                setTimerSeconds(300);
                setIsTimerRunning(false);
              }}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Unit Selector Tabs */}
      <div className="grid grid-cols-6 gap-2">
        {allUnits.map(u => (
          <button
            key={u.id}
            onClick={() => handleUnitSwitch(u.id)}
            className={`p-3 rounded-xl border text-center transition-all ${
              activeUnit === u.id
                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold shadow-sm'
                : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:border-slate-300'
            }`}
          >
            <span className="block text-xs uppercase font-mono">5 Mins</span>
            <span className="text-sm font-bold block">Unit {u.id}</span>
          </button>
        ))}
      </div>

      {/* High-Yield Sprint Cards for the Active Unit */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Must Know Core */}
        <div className="glass-card rounded-2xl p-5 border-l-4 border-l-indigo-500 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> Core Concepts & Triads
          </span>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {unit.cheatSheet.mustMemorize.slice(0, 5).map((m, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-indigo-600 font-bold">•</span>
                <span className="leading-snug">{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fatal Traps */}
        <div className="glass-card rounded-2xl p-5 border-l-4 border-l-rose-500 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5" /> Exam Traps (Do Not Write)
          </span>
          <div className="space-y-2 text-xs">
            {unit.cheatSheet.examTraps.map((et, i) => (
              <div key={i} className="p-2 rounded-lg bg-rose-50/70 dark:bg-rose-950/40 text-[11px] leading-tight">
                <span className="font-bold text-rose-700 block mb-0.5">Trap: {et.trap}</span>
                <span className="text-slate-700 dark:text-slate-300">Truth: {et.truth}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Crucial Numbers */}
        <div className="glass-card rounded-2xl p-5 border-l-4 border-l-amber-500 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
            <Hash className="w-3.5 h-3.5" /> High-Yield Numbers
          </span>
          <div className="space-y-2 text-xs">
            {unit.cheatSheet.importantNumbers.map((num, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-amber-50/70 dark:bg-amber-950/40">
                <span className="font-mono font-bold text-amber-700 dark:text-amber-300 text-sm">
                  {num.number}
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium text-right text-[11px]">
                  {num.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Night Before Exam Checklist */}
      <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              Night Before Exam Checklist
            </h3>
            <p className="text-xs text-slate-500">
              Verify every checkmark before sleeping. If you can explain all 14 points, you are ready for a high first-class mark.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-indigo-600">
            {Object.values(checkedChecklist).filter(Boolean).length} / {nightBeforeChecklist.length} Checked
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {nightBeforeChecklist.map((item, idx) => {
            const isChecked = !!checkedChecklist[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                  isChecked
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <span className={isChecked ? 'line-through text-slate-500' : ''}>
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
