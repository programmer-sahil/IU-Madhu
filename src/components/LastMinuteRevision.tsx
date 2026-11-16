import React, { useState, useEffect } from 'react';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  Zap, Clock, Play, Pause, RotateCcw, CheckSquare, Square, 
  Hash, CheckCircle2, ShieldCheck, Flame 
} from 'lucide-react';

const defaultCgitNightBeforeChecklist = [
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

const defaultItpmNightBeforeChecklist = [
  'Memorized IT Project = Temporary + Unique deliverable vs Business Operations = Repetitive + Ongoing',
  'Memorized Triple Constraint (Scope, Time, Cost) & Quintuple Constraints (Schedule, Cost, Context, Technical, Financing)',
  'Memorized 4 PM Roles: Initiator, Planner, Implementer, Controller',
  'Memorized 100% Rule in WBS: Captures 100% of scope; no extra work, no omissions',
  'Memorized 4 Precedence Types: FS (standard), SS, FF, SF (rarest) and Critical Path Total Float = 0',
  'Memorized PERT Node Formulas: Forward Pass EFT = EST + Dur (max at merges), Backward Pass LST = LFT - Dur (min at bursts), Slack = LST - EST; Critical Path has Slack = 0',
  'Memorized 9 Cost Estimate Quality Criteria: A-C-C-P-R-D-U-V-V (Accuracy, Confidence, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification)',
  'Memorized Cost Reserve Hierarchy: Task Estimate → Task Buffer → WP Buffer → Cost Baseline → Management Reserve → Project Budget',
  'Memorized Contingency = Known-Unknowns (inside baseline); Management Reserve = Unknown-Unknowns (outside baseline)',
  'Memorized FPA 5 Types (I-O-Q-I-F): Inputs (2/4/6), Outputs (3/5/7), Inquiries (2/4/6), Interfaces (5/7/10), Files (7/10/15)',
  'Memorized FPA CAF Formula: CAF = 0.01 * TDI + 0.65 (TDI = 34 -> CAF = 0.99; FP = UFP * CAF)',
  'Memorized EVM Golden Rule VALUE FIRST: SV = EV - PV; CV = EV - AC; CPI = EV / AC; SPI = EV / PV',
  'Memorized EVM 25/75 Rule: 25% credited at start/setup, 75% credited upon completion',
  'Memorized Risk Cycle (I-A-M-M): Identify, Assess, Mitigate, Monitor; 4 Treatments: Avoid, Mitigate, Transfer, Accept',
  'Memorized 5 Risk Maturity Levels: A-A-O-M-A (Ad hoc, Abbreviated, Organized, Managed, Adaptive)',
  'Memorized Vision Keeping Cascade: Vision ("Where"), Mission ("What/Why"), Strategy ("How")',
  'Memorized 4 Culture Archetypes: Clan (internal/flex), Adhocracy (external/flex), Hierarchy (internal/control), Market (external/control)',
  'Memorized Power-Interest Grid: High Power/High Interest (Manage Closely); High Power/Low Interest (Keep Satisfied); Low Power/High Interest (Keep Informed); Low Power/Low Interest (Monitor)',
  'Memorized Salience Model: Power, Legitimacy, Urgency (7 classes); Dangerous = Power + Urgency without Legitimacy',
  'Memorized RACI Cardinal Rule: Exactly ONE person Accountable (A) per activity; multiple Responsible (R) allowed',
  'Memorized 5 Conflict Styles: Collaborate (Win-Win), Compromise (Give-and-Take), Force (Win-Lose), Smooth (Lose-Win), Withdraw (No Resolution)',
  'Memorized 4 Negotiation Spiral Phases: Intelligence -> Perception -> Strategy -> Communication; e-negotiation risks flaming'
];

export const LastMinuteRevision: React.FC = () => {
  const { currentSubject } = useSubject();
  const { units, getUnitById } = useSubjectData();

  const [sprintMode, setSprintMode] = useState<'15min' | '30min' | '60min'>('30min');
  const [activeUnit, setActiveUnit] = useState<number>(1);
  const [timerSeconds, setTimerSeconds] = useState<number>(300); // default 5 minutes
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

  const toggleCheck = (idx: number) => {
    setCheckedChecklist(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleModeChange = (mode: '15min' | '30min' | '60min') => {
    setSprintMode(mode);
    setIsTimerRunning(false);
    if (mode === '15min') {
      setTimerSeconds(900);
    } else if (mode === '30min') {
      setTimerSeconds(300); // 5 min per unit
    } else {
      setTimerSeconds(3600); // 60 min
    }
  };

  const activeChecklist = currentSubject.slug === 'it-project-management'
    ? defaultItpmNightBeforeChecklist
    : defaultCgitNightBeforeChecklist;

  const currentUnitData = getUnitById(activeUnit) || units[0];

  if (units.length === 0 || !currentUnitData) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Final Revision Protocol</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <Flame className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Final Revision Protocol in Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              High-intensity exam morning revision sprint and night-before checklist for {currentSubject.title} ({currentSubject.courseCode}) is currently being compiled.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 items available</span>
          </div>
        </div>
      </div>
    );
  }

  const checklistItems = activeChecklist;

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-12">
      {/* Subject Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Night-Before & Exam Morning Protocol</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Final Exam Revision Sprints
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Calibrated for maximum marks retention: select your available time window before entering the exam room.
          </p>
        </div>

        {/* Sprint Mode Selection Tabs */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => handleModeChange('15min')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              sprintMode === '15min'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            15-Min Turbo
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('30min')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              sprintMode === '30min'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            30-Min Rapid
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('60min')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              sprintMode === '60min'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            60-Min Comprehensive
          </button>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
              {sprintMode === '15min' ? '15-Minute Countdown' : (sprintMode === '30min' ? `Unit ${activeUnit} (5-Min Sprint)` : '60-Minute Master Countdown')}
            </span>
            <span className="text-2xl font-black font-mono text-slate-900 dark:text-white">
              {formatTimer(timerSeconds)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsTimerRunning(prev => !prev)}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              isTimerRunning
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'
                : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm'
            }`}
          >
            {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isTimerRunning ? 'Pause' : 'Start Timer'}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsTimerRunning(false);
              setTimerSeconds(sprintMode === '15min' ? 900 : (sprintMode === '30min' ? 300 : 3600));
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Reset Timer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* MODE 1: 15-MINUTE TURBO SPRINT */}
      {sprintMode === '15min' && (
        <div className="space-y-6 animate-fade-in">
          {/* Whitelisted Formulas Matrix */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
                  Strict Course-Book Whitelist
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Essential Calculation Rules & Formulas
                </h3>
              </div>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                100% Course Book
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">EVM Golden Rules (Value First)</span>
                <div className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                  SV = EV - PV | CV = EV - AC<br />
                  SPI = EV / PV | CPI = EV / AC
                </div>
                <p className="text-[11px] text-slate-500">Positive SV/CV is favorable; &gt; 1.0 SPI/CPI is efficient.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">PERT CPM Node Calculation</span>
                <div className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                  EFT = EST + Dur (max at merge)<br />
                  LST = LFT - Dur (min at burst)<br />
                  Slack = LFT - EFT = LST - EST
                </div>
                <p className="text-[11px] text-slate-500">Critical Path activities have Total Slack = 0.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">Function Point Adjustment (CAF)</span>
                <div className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                  CAF = 0.01 × TDI + 0.65<br />
                  FP = UFP × CAF
                </div>
                <p className="text-[11px] text-slate-500">TDI ranges 0 to 70 across 14 General System Characteristics.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#151E31]/70 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">Financial Evaluation (Unit 3 p. 64)</span>
                <div className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                  ROI = (Gain / Cost) × 100%<br />
                  NPV = FV / (1 + i)^t<br />
                  PI = NPV / Initial Investment
                </div>
                <p className="text-[11px] text-slate-500">Course book example: €800k / €1.0M = 80% ROI.</p>
              </div>
            </div>
          </div>

          {/* Top 6 High-Yield Exam Traps */}
          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-rose-600 dark:text-rose-400">
              Exam Hall Defensive Shield
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Top 6 Examiner Trick Questions
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-rose-600 dark:text-rose-400">Trap 1: DoD ≠ Customer Acceptance.</strong> Definition of Done is internal team consensus that a work-package meets quality standards. Final acceptance belongs to the client/sponsor.
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-rose-600 dark:text-rose-400">Trap 2: RACI Accountability.</strong> Exactly ONE role can be Accountable (A) for an activity. Multiple Responsible (R) roles are allowed.
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-rose-600 dark:text-rose-400">Trap 3: RUP Phases vs Deliverables.</strong> Inception, Elaboration, Construction, Transition. The IU course book teaches phases by core objectives and deliverables, not external milestone acronyms.
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-rose-600 dark:text-rose-400">Trap 4: 25/75 Earning Rule.</strong> 25% EV is credited when the task begins; the remaining 75% is credited ONLY when 100% complete.
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-rose-600 dark:text-rose-400">Trap 5: PMBOK Processes.</strong> The IU book teaches exactly 47 processes across 5 process groups and 10 knowledge areas.
              </div>
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-rose-600 dark:text-rose-400">Trap 6: Dangerous Stakeholders.</strong> In Mitchell et al.'s Salience Model, Dangerous stakeholders possess Power and Urgency, but LACK Legitimacy.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: 30-MINUTE RAPID REVIEW (UNIT-BY-UNIT 5 MINS) */}
      {sprintMode === '30min' && (
        <div className="space-y-6 animate-fade-in">
          {/* Unit Sprint Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {currentSubject.units.map(u => (
              <button
                key={u.id}
                type="button"
                onClick={() => {
                  setActiveUnit(u.id);
                  setTimerSeconds(300);
                  setIsTimerRunning(false);
                }}
                className={`p-3 rounded-xl border text-center transition-all ${
                  activeUnit === u.id
                    ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                }`}
              >
                <span className="text-xs font-mono block">Sprint {u.id}</span>
                <span className="text-[10px] opacity-80 truncate block">{u.shortTitle || `Unit ${u.id}`}</span>
              </button>
            ))}
          </div>

          {/* Active Unit Sprint Content */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold text-indigo-600 uppercase tracking-wider">
                Sprint Focus • 5 Minutes Rapid Review
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Unit {currentUnitData.id}: {currentUnitData.title}
              </h3>
            </div>

            {/* Core Definitions */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Core Definitions to Scan
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentUnitData.cheatSheet.coreDefinitions.slice(0, 4).map((def, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-slate-900 dark:text-white block">{def.term}</span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{def.definition}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Must-Memorize Truths */}
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2 text-xs">
              <span className="font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider text-[10px] block">
                Guaranteed Exam Truths
              </span>
              <ul className="space-y-1.5 text-slate-800 dark:text-slate-200">
                {currentUnitData.cheatSheet.mustMemorize.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: 60-MINUTE COMPREHENSIVE WALK & CHECKLIST */}
      {sprintMode === '60min' && (
        <div className="space-y-6 animate-fade-in">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  60-Minute Comprehensive Walk
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  The Full Night-Before Master Checklist
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tick each item as you confirm recall. Achieve 100% verification before heading to sleep.
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
                {Object.values(checkedChecklist).filter(Boolean).length} / {checklistItems.length} Verified
              </div>
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistItems.length > 0 ? (Object.values(checkedChecklist).filter(Boolean).length / checklistItems.length) * 100 : 0}%` }}
              />
            </div>

            <div className="space-y-2 text-xs pt-2">
              {checklistItems.map((item, idx) => {
                const isChecked = !!checkedChecklist[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className="flex items-start gap-3 p-3 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60"
                  >
                    <div className="mt-0.5 text-emerald-600 shrink-0">
                      {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-300 dark:text-slate-600" />}
                    </div>
                    <span className={`leading-relaxed ${isChecked ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'}`}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Shared Night Before Final Checklist in 30-min mode */}
      {sprintMode === '30min' && (
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Exam Night Checklist
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                The Night-Before Checklist
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400">
              {Object.values(checkedChecklist).filter(Boolean).length} / {checklistItems.length} verified
            </span>
          </div>

          <div className="space-y-2 text-xs">
            {checklistItems.map((item, idx) => {
              const isChecked = !!checkedChecklist[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className="flex items-start gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="mt-0.5 text-emerald-600">
                    {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-300 dark:text-slate-600" />}
                  </div>
                  <span className={`leading-relaxed ${isChecked ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
