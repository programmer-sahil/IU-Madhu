import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Activity, Sparkles, CheckCircle2, 
  AlertCircle, ArrowRight, RefreshCw, BarChart3, HelpCircle, Layers, Shield
} from 'lucide-react';
import { useSubject } from '../contexts/SubjectContext';
import { useNavigate } from 'react-router-dom';

type LabModule = 'evm' | 'fpa' | 'financial' | 'pert' | 'practice';

export const CalculationLab: React.FC = () => {
  const { currentSubject } = useSubject();
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState<LabModule>('evm');

  // EVM State
  const [evmBac, setEvmBac] = useState<number>(9000);
  const [evmPv, setEvmPv] = useState<number>(3000);
  const [evmEv, setEvmEv] = useState<number>(2500);
  const [evmAc, setEvmAc] = useState<number>(3500);

  // EVM Calculations
  const evmSv = evmEv - evmPv;
  const evmCv = evmEv - evmAc;
  const evmCpi = evmAc > 0 ? Number((evmEv / evmAc).toFixed(2)) : 1.0;
  const evmSpi = evmPv > 0 ? Number((evmEv / evmPv).toFixed(2)) : 1.0;

  // FPA State
  // [Low, Average, High] counts
  const [fpaInputs, setFpaInputs] = useState<[number, number, number]>([3, 2, 1]); // weights 2, 4, 6
  const [fpaOutputs, setFpaOutputs] = useState<[number, number, number]>([2, 3, 1]); // weights 3, 5, 7
  const [fpaInquiries, setFpaInquiries] = useState<[number, number, number]>([4, 2, 0]); // weights 2, 4, 6
  const [fpaInterfaces, setFpaInterfaces] = useState<[number, number, number]>([1, 1, 1]); // weights 5, 7, 10
  const [fpaFiles, setFpaFiles] = useState<[number, number, number]>([1, 2, 0]); // weights 7, 10, 15
  const [fpaTdi, setFpaTdi] = useState<number>(34); // Total Degree of Influence (0-70)

  // FPA Calculations
  const ufp = 
    (fpaInputs[0] * 2 + fpaInputs[1] * 4 + fpaInputs[2] * 6) +
    (fpaOutputs[0] * 3 + fpaOutputs[1] * 5 + fpaOutputs[2] * 7) +
    (fpaInquiries[0] * 2 + fpaInquiries[1] * 4 + fpaInquiries[2] * 6) +
    (fpaInterfaces[0] * 5 + fpaInterfaces[1] * 7 + fpaInterfaces[2] * 10) +
    (fpaFiles[0] * 7 + fpaFiles[1] * 10 + fpaFiles[2] * 15);

  const caf = Number((0.01 * fpaTdi + 0.65).toFixed(2));
  const fp = Number((ufp * caf).toFixed(1));

  // Financial Metrics State
  const [netGain, setNetGain] = useState<number>(800000);
  const [projectCost, setProjectCost] = useState<number>(1000000);
  const [futureValue, setFutureValue] = useState<number>(1500000);
  const [interestRate, setInterestRate] = useState<number>(0.08); // 8%
  const [timePeriods, setTimePeriods] = useState<number>(3); // 3 years
  const [annualCashInflow, setAnnualCashInflow] = useState<number>(250000);

  // Financial Calculations
  const roi = projectCost > 0 ? Number(((netGain / projectCost) * 100).toFixed(1)) : 0;
  const npv = Number((futureValue / Math.pow(1 + interestRate, timePeriods)).toFixed(2));
  const profitabilityIndex = projectCost > 0 ? Number((npv / projectCost).toFixed(2)) : 0;
  const paybackPeriod = annualCashInflow > 0 ? Number((projectCost / annualCashInflow).toFixed(1)) : 0;

  // PERT State
  const [pertO, setPertO] = useState<number>(8);
  const [pertM, setPertM] = useState<number>(14);
  const [pertP, setPertP] = useState<number>(26);

  const pertTe = Number(((pertO + 4 * pertM + pertP) / 6).toFixed(2));
  const pertSigma = Number(((pertP - pertO) / 6).toFixed(2));
  const pertVar = Number(Math.pow(pertSigma, 2).toFixed(2));

  // Practice Problems State
  const [selectedPracticeIndex, setSelectedPracticeIndex] = useState<number>(0);
  const [practiceUserAnswer, setPracticeUserAnswer] = useState<string>('');
  const [practiceFeedback, setPracticeFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const practiceProblems = [
    {
      id: 1,
      title: "Earned Value Month 1 Analysis",
      unit: "Unit 3",
      question: "An IT software project has a BAC of $9,000. At the end of Month 1, Planned Value (PV) is $3,000, Earned Value (EV) is $2,500, and Actual Cost (AC) is $3,500. Calculate Cost Variance (CV) and Cost Performance Index (CPI).",
      correctCv: -1000,
      correctCpi: 0.71,
      steps: [
        "1. Identify Formula: CV = EV - AC = $2,500 - $3,500 = -$1,000 (Over Budget)",
        "2. Identify Formula: CPI = EV / AC = $2,500 / $3,500 = 0.714 (~0.71)",
        "3. Interpretation: CPI < 1.0 indicates cost overrun; for every $1 spent, only $0.71 of value is earned."
      ]
    },
    {
      id: 2,
      title: "Complexity Adjustment Factor (CAF) and Function Points",
      unit: "Unit 3",
      question: "A project has Unadjusted Function Points (UFP) of 120 and Total Degree of Influence (TDI) of 34 across 14 general system characteristics. What is the Complexity Adjustment Factor (CAF) and the final Adjusted Function Points (FP)?",
      correctCv: 0.99,
      correctCpi: 118.8,
      steps: [
        "1. CAF Formula: CAF = 0.01 * TDI + 0.65",
        "2. CAF Calculation: CAF = 0.01 * 34 + 0.65 = 0.34 + 0.65 = 0.99",
        "3. FP Formula: FP = UFP * CAF = 120 * 0.99 = 118.8 Function Points"
      ]
    },
    {
      id: 3,
      title: "Profitability Index Viability Decision",
      unit: "Unit 3",
      question: "An IT infrastructure upgrade has an initial cost of $500,000 and an estimated Net Present Value (NPV) of $625,000. Calculate the Profitability Index and determine if the project is financially viable.",
      correctCv: 1.25,
      correctCpi: 1.25,
      steps: [
        "1. Formula: Profitability Index = NPV / Project Cost",
        "2. Calculation: $625,000 / $500,000 = 1.25",
        "3. Decision: Since Profitability Index > 1.0, the investment generates positive net value and is financially acceptable."
      ]
    },
    {
      id: 4,
      title: "PERT Three-Point Estimation",
      unit: "Unit 2 / Unit 3",
      question: "A microservice deployment is estimated with: Optimistic = 6 days, Most Likely = 12 days, Pessimistic = 24 days. Calculate the PERT Expected Duration (TE) and Standard Deviation (sigma).",
      correctCv: 13,
      correctCpi: 3,
      steps: [
        "1. Expected Duration: TE = (o + 4m + p) / 6 = (6 + 4*12 + 24) / 6 = (6 + 48 + 24) / 6 = 78 / 6 = 13 days",
        "2. Standard Deviation: sigma = (p - o) / 6 = (24 - 6) / 6 = 18 / 6 = 3 days",
        "3. Confidence Range: 68% probability project finishes between 10 and 16 days (13 +/- 3)."
      ]
    }
  ];

  const currentProblem = practiceProblems[selectedPracticeIndex];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
              {currentSubject.courseCode} · Calculation & Formula Lab
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Interactive Practice</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1.5 tracking-tight">
            IT Project Management Formula Lab
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Strictly grounded in IU Unit 3 & Unit 2 curriculum. Test real EVM variances, Function Point calculations, capital budgeting metrics, and PERT distributions.
          </p>
        </div>

        <button
          onClick={() => navigate(`/subjects/${currentSubject.slug}/practice/mcq?mode=calculation`)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-md shadow-sky-600/20 self-start md:self-auto"
        >
          <Calculator className="w-4 h-4" />
          <span>Launch Calculation MCQs</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </button>
      </div>

      {/* Module Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800/80">
        {[
          { id: 'evm', label: 'Earned Value (EVM)', icon: Activity, badge: 'Unit 3' },
          { id: 'fpa', label: 'Function Point Analysis (FPA)', icon: Layers, badge: 'Unit 3' },
          { id: 'financial', label: 'ROI, NPV & Payback', icon: DollarSign, badge: 'Unit 3' },
          { id: 'pert', label: 'PERT 3-Point Sizing', icon: TrendingUp, badge: 'Unit 2' },
          { id: 'practice', label: 'Step-by-Step Solver', icon: Sparkles, badge: 'Exam Lab' },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeModule === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveModule(tab.id as LabModule)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                isActive
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm border border-slate-200 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isActive ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300' : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500'}`}>
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* MODULE 1: EVM */}
      {activeModule === 'evm' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-sky-500" />
                  EVM Input Parameters
                </h3>
                <button
                  onClick={() => {
                    setEvmBac(9000);
                    setEvmPv(3000);
                    setEvmEv(2500);
                    setEvmAc(3500);
                  }}
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  Textbook Preset
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Budget at Completion (BAC)</span>
                    <span className="font-mono text-sky-600 dark:text-sky-400">${evmBac.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={evmBac}
                    onChange={(e) => setEvmBac(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Planned Value (PV) — Scheduled Budget</span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">${evmPv.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max={evmBac}
                    step="250"
                    value={evmPv}
                    onChange={(e) => setEvmPv(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                  <p className="text-[11px] text-slate-500 mt-0.5">Value of work planned to be completed by current milestone.</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Earned Value (EV) — Value First!</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">${evmEv.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={evmBac}
                    step="250"
                    value={evmEv}
                    onChange={(e) => setEvmEv(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <p className="text-[11px] text-slate-500 mt-0.5">Budgeted value of work physically completed.</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-700 dark:text-slate-300">Actual Cost (AC) — Real Cash Spent</span>
                    <span className="font-mono text-amber-600 dark:text-amber-400">${evmAc.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max={evmBac * 1.5}
                    step="250"
                    value={evmAc}
                    onChange={(e) => setEvmAc(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <p className="text-[11px] text-slate-500 mt-0.5">Total actual expenditure incurred to date.</p>
                </div>
              </div>

              {/* 25/75 Crediting Rule Explainer */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-sky-500" />
                  IU 25/75 EV Crediting Rule
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                  When software deliverables are difficult to measure continuously, credit 25% of budgeted value upon start/setup and the remaining 75% upon verified completion.
                </p>
              </div>
            </div>

            {/* Live Real-Time Dashboard */}
            <div className="lg:col-span-7 space-y-6">
              {/* Variance Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-2xl border transition-all ${
                  evmSv >= 0 
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-950 dark:text-emerald-100'
                    : 'bg-rose-500/5 border-rose-500/20 text-rose-950 dark:text-rose-100'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Schedule Variance (SV)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-black/30">
                      EV - PV
                    </span>
                  </div>
                  <div className={`text-2xl font-black font-mono ${evmSv >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {evmSv >= 0 ? `+$${evmSv.toLocaleString()}` : `-$${Math.abs(evmSv).toLocaleString()}`}
                  </div>
                  <div className="text-xs font-bold mt-1">
                    {evmSv > 0 ? '🟢 Ahead of Schedule' : evmSv < 0 ? '🔴 Behind Schedule' : '⚪ On Schedule'}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  evmCv >= 0 
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-950 dark:text-emerald-100'
                    : 'bg-rose-500/5 border-rose-500/20 text-rose-950 dark:text-rose-100'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Cost Variance (CV)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-black/30">
                      EV - AC
                    </span>
                  </div>
                  <div className={`text-2xl font-black font-mono ${evmCv >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {evmCv >= 0 ? `+$${evmCv.toLocaleString()}` : `-$${Math.abs(evmCv).toLocaleString()}`}
                  </div>
                  <div className="text-xs font-bold mt-1">
                    {evmCv > 0 ? '🟢 Under Budget (Favorable)' : evmCv < 0 ? '🔴 Over Budget (Unfavorable)' : '⚪ On Budget'}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  evmSpi >= 1.0 
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-950 dark:text-emerald-100'
                    : 'bg-rose-500/5 border-rose-500/20 text-rose-950 dark:text-rose-100'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Schedule Perf Index (SPI)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-black/30">
                      EV / PV
                    </span>
                  </div>
                  <div className={`text-2xl font-black font-mono ${evmSpi >= 1.0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {evmSpi.toFixed(2)}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Progressing at <span className="font-bold text-slate-900 dark:text-white">{Math.round(evmSpi * 100)}%</span> of planned pace.
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border transition-all ${
                  evmCpi >= 1.0 
                    ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-950 dark:text-emerald-100'
                    : 'bg-rose-500/5 border-rose-500/20 text-rose-950 dark:text-rose-100'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600 dark:text-slate-400">Cost Perf Index (CPI)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/60 dark:bg-black/30">
                      EV / AC
                    </span>
                  </div>
                  <div className={`text-2xl font-black font-mono ${evmCpi >= 1.0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {evmCpi.toFixed(2)}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                    Yielding <span className="font-bold text-slate-900 dark:text-white">${evmCpi.toFixed(2)}</span> of value for every $1 spent.
                  </div>
                </div>
              </div>

              {/* Status Quadrant Visual */}
              <div className="p-5 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Four-Quadrant Performance Diagnosis
                </h4>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
                  <div className={`p-3 rounded-xl border ${evmSv >= 0 && evmCv >= 0 ? 'bg-emerald-500/20 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                    Ahead of Schedule & Under Budget
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Ideal performance</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${evmSv >= 0 && evmCv < 0 ? 'bg-amber-500/20 border-amber-500 text-amber-800 dark:text-amber-300 font-bold' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                    Ahead of Schedule & Over Budget
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Fast-tracking / Crashing</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${evmSv < 0 && evmCv >= 0 ? 'bg-indigo-500/20 border-indigo-500 text-indigo-800 dark:text-indigo-300 font-bold' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                    Behind Schedule & Under Budget
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Resource starvation / delays</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${evmSv < 0 && evmCv < 0 ? 'bg-rose-500/20 border-rose-500 text-rose-800 dark:text-rose-300 font-bold' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400'}`}>
                    Behind Schedule & Over Budget
                    <span className="block text-[10px] font-normal opacity-80 mt-0.5">Critical distress (Textbook Case)</span>
                  </div>
                </div>

                <div className="p-3 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800/60 text-xs text-sky-900 dark:text-sky-200">
                  <span className="font-bold">Golden Rule for Exam:</span> Always remember <strong>VALUE FIRST</strong>. Earned Value (EV) always leads in variances (<code className="font-mono">EV - PV</code>, <code className="font-mono">EV - AC</code>) and always sits in the numerator of indices (<code className="font-mono">EV / AC</code>, <code className="font-mono">EV / PV</code>).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 2: FPA */}
      {activeModule === 'fpa' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-500" />
                  Function Point Sizing Grid (I-O-Q-I-F)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Five standard function types with official complexity multipliers from IU Unit 3.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="text-slate-600 dark:text-slate-400">
                  Unadjusted FP: <strong className="text-slate-900 dark:text-white font-mono text-sm">{ufp}</strong>
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  CAF: <strong className="text-sky-600 dark:text-sky-400 font-mono text-sm">{caf}</strong>
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Final FP: <strong className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">{fp}</strong>
                </span>
              </div>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase tracking-wider font-bold">
                    <th className="py-2.5 px-3">Function Type</th>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3 text-center">Low (Weight)</th>
                    <th className="py-2.5 px-3 text-center">Average (Weight)</th>
                    <th className="py-2.5 px-3 text-center">High (Weight)</th>
                    <th className="py-2.5 px-3 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                  {/* Inputs */}
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">External Inputs (EI)</td>
                    <td className="py-3 px-3 text-slate-500">Transaction</td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInputs[0]}
                        onChange={(e) => setFpaInputs([Number(e.target.value), fpaInputs[1], fpaInputs[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 2</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInputs[1]}
                        onChange={(e) => setFpaInputs([fpaInputs[0], Number(e.target.value), fpaInputs[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 4</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInputs[2]}
                        onChange={(e) => setFpaInputs([fpaInputs[0], fpaInputs[1], Number(e.target.value)])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 6</span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-slate-900 dark:text-white">
                      {fpaInputs[0]*2 + fpaInputs[1]*4 + fpaInputs[2]*6}
                    </td>
                  </tr>

                  {/* Outputs */}
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">External Outputs (EO)</td>
                    <td className="py-3 px-3 text-slate-500">Transaction</td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaOutputs[0]}
                        onChange={(e) => setFpaOutputs([Number(e.target.value), fpaOutputs[1], fpaOutputs[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 3</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaOutputs[1]}
                        onChange={(e) => setFpaOutputs([fpaOutputs[0], Number(e.target.value), fpaOutputs[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 5</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaOutputs[2]}
                        onChange={(e) => setFpaOutputs([fpaOutputs[0], fpaOutputs[1], Number(e.target.value)])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 7</span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-slate-900 dark:text-white">
                      {fpaOutputs[0]*3 + fpaOutputs[1]*5 + fpaOutputs[2]*7}
                    </td>
                  </tr>

                  {/* Inquiries */}
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">External Inquiries (EQ)</td>
                    <td className="py-3 px-3 text-slate-500">Transaction</td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInquiries[0]}
                        onChange={(e) => setFpaInquiries([Number(e.target.value), fpaInquiries[1], fpaInquiries[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 2</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInquiries[1]}
                        onChange={(e) => setFpaInquiries([fpaInquiries[0], Number(e.target.value), fpaInquiries[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 4</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInquiries[2]}
                        onChange={(e) => setFpaInquiries([fpaInquiries[0], fpaInquiries[1], Number(e.target.value)])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 6</span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-slate-900 dark:text-white">
                      {fpaInquiries[0]*2 + fpaInquiries[1]*4 + fpaInquiries[2]*6}
                    </td>
                  </tr>

                  {/* Interfaces */}
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">External Interfaces (EIF)</td>
                    <td className="py-3 px-3 text-slate-500">Data Function</td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInterfaces[0]}
                        onChange={(e) => setFpaInterfaces([Number(e.target.value), fpaInterfaces[1], fpaInterfaces[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 5</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInterfaces[1]}
                        onChange={(e) => setFpaInterfaces([fpaInterfaces[0], Number(e.target.value), fpaInterfaces[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 7</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaInterfaces[2]}
                        onChange={(e) => setFpaInterfaces([fpaInterfaces[0], fpaInterfaces[1], Number(e.target.value)])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 10</span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-slate-900 dark:text-white">
                      {fpaInterfaces[0]*5 + fpaInterfaces[1]*7 + fpaInterfaces[2]*10}
                    </td>
                  </tr>

                  {/* Files */}
                  <tr>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">Internal Logical Files (ILF)</td>
                    <td className="py-3 px-3 text-slate-500">Data Function</td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaFiles[0]}
                        onChange={(e) => setFpaFiles([Number(e.target.value), fpaFiles[1], fpaFiles[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 7</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaFiles[1]}
                        onChange={(e) => setFpaFiles([fpaFiles[0], Number(e.target.value), fpaFiles[2]])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 10</span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={fpaFiles[2]}
                        onChange={(e) => setFpaFiles([fpaFiles[0], fpaFiles[1], Number(e.target.value)])}
                        className="w-14 px-2 py-1 text-center font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">x 15</span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-slate-900 dark:text-white">
                      {fpaFiles[0]*7 + fpaFiles[1]*10 + fpaFiles[2]*15}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TDI Slider & Adjustment Calculation */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Total Degree of Influence (TDI) [14 Factors x 0-5]</span>
                  <span className="font-mono text-sky-600 dark:text-sky-400">{fpaTdi} / 70</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="70"
                  value={fpaTdi}
                  onChange={(e) => setFpaTdi(Number(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Formula: <code className="font-mono">CAF = 0.01 * TDI + 0.65</code> (Range: 0.65 to 1.35)
                </p>
              </div>

              <div className="p-4 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 text-xs space-y-1">
                <span className="font-bold text-sky-900 dark:text-sky-200">Final Functional Size (Adjusted FP):</span>
                <div className="text-2xl font-black font-mono text-sky-600 dark:text-sky-400">
                  {fp} <span className="text-xs font-normal text-slate-600 dark:text-slate-400">Function Points</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Calculation: <code className="font-mono">{ufp} (UFP) * {caf} (CAF) = {fp} FP</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 3: FINANCIAL METRICS */}
      {activeModule === 'financial' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ROI & Payback */}
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                Return on Investment (ROI) & Payback
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Expected Net Gain ($)</label>
                  <input
                    type="number"
                    step="50000"
                    value={netGain}
                    onChange={(e) => setNetGain(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Total Project Cost ($)</label>
                  <input
                    type="number"
                    step="50000"
                    value={projectCost}
                    onChange={(e) => setProjectCost(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Annual Net Cash Inflow ($/year)</label>
                  <input
                    type="number"
                    step="25000"
                    value={annualCashInflow}
                    onChange={(e) => setAnnualCashInflow(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">ROI = Net Gain / Cost</span>
                  <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                    {roi}%
                  </div>
                  <span className="text-[10px] text-slate-500">
                    {roi > 0 ? 'Positive return' : 'Loss'}
                  </span>
                </div>

                <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Payback Period</span>
                  <div className="text-2xl font-black font-mono text-indigo-600 dark:text-indigo-400">
                    {paybackPeriod} <span className="text-xs font-normal">years</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Time to break even</span>
                </div>
              </div>
            </div>

            {/* NPV & Profitability Index */}
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <TrendingUp className="w-4 h-4 text-sky-500" />
                NPV & Profitability Index (PI)
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Future Value ($)</label>
                  <input
                    type="number"
                    step="100000"
                    value={futureValue}
                    onChange={(e) => setFutureValue(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Discount Rate (interest)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      max="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                    <span className="text-[10px] text-slate-400">e.g. 0.08 = 8%</span>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Time Periods (t in years)</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={timePeriods}
                      onChange={(e) => setTimePeriods(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="p-3.5 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">NPV = FV / (1 + i)^t</span>
                  <div className="text-2xl font-black font-mono text-sky-600 dark:text-sky-400">
                    ${Math.round(npv).toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-500">Discounted present value</span>
                </div>

                <div className={`p-3.5 rounded-xl border text-xs ${
                  profitabilityIndex >= 1.0 
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800'
                }`}>
                  <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Profitability Index = NPV / Cost</span>
                  <div className={`text-2xl font-black font-mono ${profitabilityIndex >= 1.0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {profitabilityIndex.toFixed(2)}
                  </div>
                  <span className="text-[10px] font-bold block mt-0.5">
                    {profitabilityIndex >= 1.0 ? '🟢 Viable (PI > 1.0)' : '🔴 Unviable (PI < 1.0)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 4: PERT */}
      {activeModule === 'pert' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <BarChart3 className="w-4 h-4 text-sky-500" />
              PERT Three-Point Estimation Calculator (Beta Distribution)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-2">
                <label className="font-bold text-emerald-900 dark:text-emerald-300 block">Optimistic Duration (o)</label>
                <input
                  type="number"
                  min="1"
                  value={pertO}
                  onChange={(e) => setPertO(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg font-mono bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700"
                />
                <p className="text-[11px] text-slate-500">Best-case scenario if everything goes perfectly.</p>
              </div>

              <div className="p-4 bg-sky-50 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-800 space-y-2">
                <label className="font-bold text-sky-900 dark:text-sky-300 block">Most Likely Duration (m) [Weight x 4]</label>
                <input
                  type="number"
                  min="1"
                  value={pertM}
                  onChange={(e) => setPertM(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg font-mono bg-white dark:bg-slate-800 border border-sky-300 dark:border-sky-700"
                />
                <p className="text-[11px] text-slate-500">Most probable duration under normal conditions.</p>
              </div>

              <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-800 space-y-2">
                <label className="font-bold text-rose-900 dark:text-rose-300 block">Pessimistic Duration (p)</label>
                <input
                  type="number"
                  min="1"
                  value={pertP}
                  onChange={(e) => setPertP(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg font-mono bg-white dark:bg-slate-800 border border-rose-300 dark:border-rose-700"
                />
                <p className="text-[11px] text-slate-500">Worst-case scenario with delays and complications.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <span className="text-slate-500 block">Expected Duration (TE)</span>
                <span className="text-xs text-slate-400 block mb-1">Formula: (o + 4m + p) / 6</span>
                <div className="text-3xl font-black font-mono text-sky-600 dark:text-sky-400">{pertTe} days</div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <span className="text-slate-500 block">Standard Deviation (sigma)</span>
                <span className="text-xs text-slate-400 block mb-1">Formula: (p - o) / 6</span>
                <div className="text-3xl font-black font-mono text-indigo-600 dark:text-indigo-400">{pertSigma} days</div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <span className="text-slate-500 block">Variance (sigma^2)</span>
                <span className="text-xs text-slate-400 block mb-1">Formula: ((p - o) / 6)^2</span>
                <div className="text-3xl font-black font-mono text-purple-600 dark:text-purple-400">{pertVar}</div>
              </div>
            </div>

            {/* Confidence Intervals */}
            <div className="p-4 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 text-xs space-y-2">
              <span className="font-bold text-sky-900 dark:text-sky-200">Examinable PERT Confidence Intervals:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-sky-200 dark:border-sky-800">
                  <div className="font-bold text-slate-800 dark:text-white">68.2% Confidence (1-sigma)</div>
                  <div className="font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                    {(pertTe - pertSigma).toFixed(1)} to {(pertTe + pertSigma).toFixed(1)} days
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-sky-200 dark:border-sky-800">
                  <div className="font-bold text-slate-800 dark:text-white">95.4% Confidence (2-sigma)</div>
                  <div className="font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                    {(pertTe - 2*pertSigma).toFixed(1)} to {(pertTe + 2*pertSigma).toFixed(1)} days
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-sky-200 dark:border-sky-800">
                  <div className="font-bold text-slate-800 dark:text-white">99.7% Confidence (3-sigma)</div>
                  <div className="font-mono text-sky-600 dark:text-sky-400 mt-0.5">
                    {(pertTe - 3*pertSigma).toFixed(1)} to {(pertTe + 3*pertSigma).toFixed(1)} days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 5: STEP-BY-STEP PRACTICE SOLVER */}
      {activeModule === 'practice' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                  {currentProblem.unit} · Practice Problem {currentProblem.id} of {practiceProblems.length}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  {currentProblem.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5">
                {practiceProblems.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPracticeIndex(idx);
                      setPracticeFeedback('idle');
                      setPracticeUserAnswer('');
                    }}
                    className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all ${
                      selectedPracticeIndex === idx
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/80 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {currentProblem.question}
            </div>

            {/* Step-by-Step Solution Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Examiner's Step-by-Step Mathematical Proof
              </h4>
              <div className="space-y-2">
                {currentProblem.steps.map((s, idx) => (
                  <div key={idx} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

