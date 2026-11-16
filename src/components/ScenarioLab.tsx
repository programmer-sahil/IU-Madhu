import React, { useState } from 'react';
import { 
  Compass, Users, MessageSquare, ShieldAlert, CheckCircle2, 
  AlertCircle, ArrowRight, RefreshCw, BarChart2, Layers, Award,
  Sparkles, Filter, Eye, ChevronRight
} from 'lucide-react';
import { useSubject } from '../contexts/SubjectContext';
import { unit4Scenarios, ScenarioItem } from '../data/subjects/itpm/unit-4/scenarios';
import { useNavigate } from 'react-router-dom';

type ScenarioTab = 'dilemmas' | 'power-interest' | 'salience' | 'conflict-styles' | 'negotiation';

export const ScenarioLab: React.FC = () => {
  const { currentSubject } = useSubject();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ScenarioTab>('dilemmas');

  // Scenario Walkthrough State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [completedScenarios, setCompletedScenarios] = useState<Record<string, boolean>>({});

  // Filtered scenarios
  const filteredScenarios = unit4Scenarios.filter(s => 
    selectedCategory === 'all' ? true : s.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );
  const activeScenario: ScenarioItem | undefined = filteredScenarios[currentScenarioIdx] || filteredScenarios[0];

  // Power-Interest Interactive State
  const [piPower, setPiPower] = useState<'low' | 'high'>('high');
  const [piInterest, setPiInterest] = useState<'low' | 'high'>('high');

  // Salience Interactive State
  const [hasPower, setHasPower] = useState<boolean>(true);
  const [hasLegitimacy, setHasLegitimacy] = useState<boolean>(false);
  const [hasUrgency, setHasUrgency] = useState<boolean>(true);

  // Compute Salience Class
  const getSalienceClass = (p: boolean, l: boolean, u: boolean) => {
    const count = (p ? 1 : 0) + (l ? 1 : 0) + (u ? 1 : 0);
    if (count === 3) return {
      name: 'Definite Stakeholder',
      category: 'Definite (High Salience)',
      description: 'Possesses Power, Legitimacy, AND Urgency. Requires immediate, continuous, highest-priority management.',
      action: 'Immediate priority; give direct line to leadership.'
    };
    if (count === 2) {
      if (p && l) return {
        name: 'Dominant Stakeholder',
        category: 'Expectant (Moderate Salience)',
        description: 'Possesses Power and Legitimacy without Urgency. Typical of formal boards, steerco, or executive sponsors.',
        action: 'Formulate strong governance alignment; keep satisfied.'
      };
      if (p && u) return {
        name: 'Dangerous Stakeholder',
        category: 'Expectant (High Risk)',
        description: 'Possesses Power and Urgency without Legitimacy. May resort to coercion, boycotts, or sabotage.',
        action: 'Exercise extreme caution; mitigate urgency or channel into legitimate forums.'
      };
      if (l && u) return {
        name: 'Dependent Stakeholder',
        category: 'Expectant (Needs Advocacy)',
        description: 'Possesses Legitimacy and Urgency without Power. End-users or affected community members who rely on others to advocate for them.',
        action: 'Provide project advocate / representative.'
      };
    }
    if (count === 1) {
      if (p) return {
        name: 'Dormant Stakeholder',
        category: 'Latent (Low Salience)',
        description: 'Possesses Power but no Legitimacy or Urgency. Can become dangerous if urgency is acquired.',
        action: 'Monitor for sudden shifts in urgency.'
      };
      if (l) return {
        name: 'Discretionary Stakeholder',
        category: 'Latent (Low Salience)',
        description: 'Possesses Legitimacy but no Power or Urgency. Charities, educational initiatives, CSR recipients.',
        action: 'Engage via regular public reports; no urgent pressure.'
      };
      if (u) return {
        name: 'Demanding Stakeholder',
        category: 'Latent (Low Salience)',
        description: 'Possesses Urgency only; loud and vocal but lacks formal standing or coercive muscle.',
        action: 'Acknowledge politely without diverting critical project resources.'
      };
    }
    return {
      name: 'Non-Stakeholder',
      category: 'No Salience',
      description: 'Lacks Power, Legitimacy, and Urgency.',
      action: 'No management action required.'
    };
  };

  const salienceResult = getSalienceClass(hasPower, hasLegitimacy, hasUrgency);

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted || !activeScenario) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === activeScenario.correctIndex;
    if (isCorrect && !completedScenarios[activeScenario.id]) {
      setScore(s => s + 1);
    }
    setCompletedScenarios(prev => ({ ...prev, [activeScenario.id]: true }));
  };

  const handleNextScenario = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    if (currentScenarioIdx < filteredScenarios.length - 1) {
      setCurrentScenarioIdx(i => i + 1);
    } else {
      setCurrentScenarioIdx(0);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-16 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12 pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
              Unit 4 · Interactive Laboratory
            </span>
            <span className="px-3 py-1 bg-emerald-500/80 rounded-full text-xs font-bold text-white flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              Scenario Mastery: {score} / {unit4Scenarios.length}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Stakeholder & Conflict Scenario Lab
          </h1>
          <p className="text-white/80 max-w-2xl text-sm leading-relaxed">
            Test and apply the human dynamics of IT project management. Master Mitchell's Salience Model (7 classes), Power-Interest Grid strategies, RACI governance rules, the 5 Thomas-Kilmann conflict modes, and the 4-phase negotiation spiral.
          </p>

          {/* Module Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'dilemmas', label: '🧭 Real-World Dilemmas', icon: Compass },
              { id: 'power-interest', label: '📊 Power-Interest Matrix', icon: BarChart2 },
              { id: 'salience', label: '🎯 Salience Model (7 Classes)', icon: Users },
              { id: 'conflict-styles', label: '⚔️ 5 Conflict Modes', icon: ShieldAlert },
              { id: 'negotiation', label: '🌀 Negotiation Spiral', icon: MessageSquare },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ScenarioTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md scale-105'
                      : 'bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* TAB 1: DILEMMAS */}
      {activeTab === 'dilemmas' && activeScenario && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Filter Scenarios:</span>
              <div className="flex flex-wrap gap-1.5">
                {['all', 'stakeholder', 'conflict', 'negotiation'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentScenarioIdx(0);
                      setSelectedOption(null);
                      setIsAnswerSubmitted(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                      selectedCategory === cat
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>Scenario {currentScenarioIdx + 1} of {filteredScenarios.length}</span>
              <div className="w-24 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${((currentScenarioIdx + 1) / filteredScenarios.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Active Scenario Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  {activeScenario.source}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {activeScenario.title}
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                {activeScenario.category}
              </span>
            </div>

            {/* Context Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Project Context & Dilemma
              </span>
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                {activeScenario.context}
              </p>
            </div>

            {/* Question */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-600 text-white text-xs font-black flex items-center justify-center">?</span>
                {activeScenario.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {activeScenario.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === activeScenario.correctIndex;
                  let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-amber-400';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 font-semibold';
                    } else {
                      btnStyle = 'opacity-50 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-500';
                    }
                  } else if (isSelected) {
                    btnStyle = 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-100 font-bold shadow-sm';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${btnStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                        isAnswerSubmitted && isCorrect 
                          ? 'bg-emerald-500 text-white' 
                          : isAnswerSubmitted && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : isSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm sm:text-base leading-snug pt-0.5">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback / Rationale */}
            {isAnswerSubmitted && (
              <div className={`p-5 rounded-2xl border-2 space-y-3 animate-fade-in ${
                selectedOption === activeScenario.correctIndex
                  ? 'bg-emerald-50/80 dark:bg-emerald-950/20 border-emerald-500/40'
                  : 'bg-rose-50/80 dark:bg-rose-950/20 border-rose-500/40'
              }`}>
                <div className="flex items-center gap-2">
                  {selectedOption === activeScenario.correctIndex ? (
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-black">
                      <CheckCircle2 className="w-5 h-5" />
                      Correct Decision!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-black">
                      <AlertCircle className="w-5 h-5" />
                      Incorrect Approach
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {activeScenario.rationale}
                </p>
                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Grounding: {activeScenario.source}</span>
                  <span>Category: {activeScenario.category}</span>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  setSelectedOption(null);
                  setIsAnswerSubmitted(false);
                }}
                className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Selection
              </button>

              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  Verify Decision
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleNextScenario}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  Next Dilemma
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: POWER-INTEREST GRID SIMULATOR */}
      {activeTab === 'power-interest' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider font-mono">
              Section 4.2 · Stakeholder Management
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Interactive Power-Interest Grid
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Select Power and Interest attributes to test the appropriate management strategy prescribed by the IU curriculum.
            </p>
          </div>

          {/* Interactive Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Power Level</span>
              <div className="flex gap-2">
                {(['low', 'high'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setPiPower(p)}
                    className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all ${
                      piPower === p
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {p} Power
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Interest Level</span>
              <div className="flex gap-2">
                {(['low', 'high'] as const).map(i => (
                  <button
                    key={i}
                    onClick={() => setPiInterest(i)}
                    className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all ${
                      piInterest === i
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {i} Interest
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Quadrants Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Top-Left: High Power, Low Interest */}
            <div className={`p-5 rounded-2xl border-2 transition-all ${
              piPower === 'high' && piInterest === 'low'
                ? 'border-amber-500 bg-amber-50/80 dark:bg-amber-950/30 scale-102 shadow-md'
                : 'border-slate-200 dark:border-slate-800 opacity-60'
            }`}>
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase">High Power · Low Interest</span>
                {piPower === 'high' && piInterest === 'low' && <CheckCircle2 className="w-5 h-5 text-amber-600" />}
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Keep Satisfied</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Provide executive summaries and verify compliance needs are met. Avoid overwhelming them with excessive operational details, but prevent them using veto power.
              </p>
              <span className="inline-block mt-3 px-2 py-1 bg-amber-200/60 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 rounded text-xs font-semibold">
                E.g., Legal / Compliance, CFO, Regulatory bodies
              </span>
            </div>

            {/* Top-Right: High Power, High Interest */}
            <div className={`p-5 rounded-2xl border-2 transition-all ${
              piPower === 'high' && piInterest === 'high'
                ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 scale-102 shadow-md'
                : 'border-slate-200 dark:border-slate-800 opacity-60'
            }`}>
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">High Power · High Interest</span>
                {piPower === 'high' && piInterest === 'high' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Manage Closely</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Key decision-makers and sponsors. Engage them continuously, involve them in major scope/design checkpoints, and maintain deep proactive alignment.
              </p>
              <span className="inline-block mt-3 px-2 py-1 bg-emerald-200/60 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200 rounded text-xs font-semibold">
                E.g., Project Sponsor, Product Owner, Lead Architect
              </span>
            </div>

            {/* Bottom-Left: Low Power, Low Interest */}
            <div className={`p-5 rounded-2xl border-2 transition-all ${
              piPower === 'low' && piInterest === 'low'
                ? 'border-slate-500 bg-slate-50/80 dark:bg-slate-800/40 scale-102 shadow-md'
                : 'border-slate-200 dark:border-slate-800 opacity-60'
            }`}>
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Low Power · Low Interest</span>
                {piPower === 'low' && piInterest === 'low' && <CheckCircle2 className="w-5 h-5 text-slate-600" />}
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Monitor (Minimal Effort)</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Monitor passively through standard channels. Do not spend scarce project management bandwidth here unless their power or interest shifts upward.
              </p>
              <span className="inline-block mt-3 px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded text-xs font-semibold">
                E.g., Distant operational departments, general public
              </span>
            </div>

            {/* Bottom-Right: Low Power, High Interest */}
            <div className={`p-5 rounded-2xl border-2 transition-all ${
              piPower === 'low' && piInterest === 'high'
                ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/30 scale-102 shadow-md'
                : 'border-slate-200 dark:border-slate-800 opacity-60'
            }`}>
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase">Low Power · High Interest</span>
                {piPower === 'low' && piInterest === 'high' && <CheckCircle2 className="w-5 h-5 text-indigo-600" />}
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">Keep Informed</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Keep them thoroughly updated via newsletters, demos, and progress memos. They can be valuable allies and early adopters who provide useful feedback.
              </p>
              <span className="inline-block mt-3 px-2 py-1 bg-indigo-200/60 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-200 rounded text-xs font-semibold">
                E.g., End-users, helpdesk technicians, QA testers
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SALIENCE MODEL (7 CLASSES) */}
      {activeTab === 'salience' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider font-mono">
              Section 4.2 · Mitchell, Agle & Wood (1997)
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              The 7 Stakeholder Salience Classes
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Toggle the three core attributes (Power, Legitimacy, Urgency) to diagnose the exact stakeholder class and management priority.
            </p>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: '⚡ Power', active: hasPower, set: setHasPower, desc: 'Ability to impose will or enforce decisions' },
              { label: '⚖️ Legitimacy', active: hasLegitimacy, set: setHasLegitimacy, desc: 'Lawful, moral, or contractual standing' },
              { label: '🚨 Urgency', active: hasUrgency, set: setHasUrgency, desc: 'Time-sensitive or critical priority claim' },
            ].map((attr, idx) => (
              <button
                key={idx}
                onClick={() => attr.set(!attr.active)}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  attr.active
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between pb-1">
                  <span className="text-base font-black">{attr.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase ${
                    attr.active ? 'bg-rose-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {attr.active ? 'Active' : 'Off'}
                  </span>
                </div>
                <p className="text-xs opacity-80">{attr.desc}</p>
              </button>
            ))}
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-lg space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-rose-400">Diagnosed Stakeholder Class</span>
                <h3 className="text-2xl font-black">{salienceResult.name}</h3>
              </div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold">
                {salienceResult.category}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-white/50">Characteristics:</span>
                <p className="text-white/90 leading-relaxed">{salienceResult.description}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-white/50">Mandatory Action:</span>
                <p className="text-emerald-300 font-semibold leading-relaxed">{salienceResult.action}</p>
              </div>
            </div>

            {/* Exam Trap Alert if Dangerous Stakeholder */}
            {salienceResult.name === 'Dangerous Stakeholder' && (
              <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-start gap-3 text-rose-200 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">CRITICAL EXAM TRAP: </span>
                  Dangerous stakeholders have <strong>Power + Urgency without Legitimacy</strong>. They may resort to coercive measures, wildcat strikes, or data sabotage. Do not dismiss them as harmless just because they lack legal legitimacy!
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: 5 CONFLICT STYLES */}
      {activeTab === 'conflict-styles' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-mono">
              Section 4.3 · Thomas-Kilmann Conflict Mode Instrument
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              The 5 Conflict-Resolution Techniques
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Contrasting Cooperativeness (concern for others) with Assertiveness (concern for own goals).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'Collaborate / Problem-Solve',
                outcome: 'Win-Win',
                axes: 'High Assertiveness, High Cooperation',
                color: 'emerald',
                desc: 'Confronts root causes directly. Gathers perspectives to synthesize consensus. Takes time but delivers lasting commitment.',
                when: 'Long-term architectural decisions, crucial cross-team interfaces.'
              },
              {
                name: 'Compromise / Reconcile',
                outcome: 'Give-and-Take (Lose-Lose partially)',
                axes: 'Moderate Assertiveness, Moderate Cooperation',
                color: 'amber',
                desc: 'Both parties make concessions to find an acceptable middle ground. Quick resolution, but can result in suboptimal solutions.',
                when: 'Deadlocked issues under tight deadlines where goals are moderately important.'
              },
              {
                name: 'Force / Direct',
                outcome: 'Win-Lose',
                axes: 'High Assertiveness, Low Cooperation',
                color: 'rose',
                desc: 'Enforces one viewpoint using formal authority or positional power. Fast, but damages morale and breeds resentment.',
                when: 'Emergencies, vital security vulnerabilities, regulatory compliance.'
              },
              {
                name: 'Smooth / Accommodate',
                outcome: 'Lose-Win',
                axes: 'Low Assertiveness, High Cooperation',
                color: 'blue',
                desc: 'Emphasizes agreement and minimizes differences. Surrenders own position to protect interpersonal harmony.',
                when: 'The issue matters far more to the other party; preserving relationships is paramount.'
              },
              {
                name: 'Withdraw / Avoid',
                outcome: 'No Resolution',
                axes: 'Low Assertiveness, Low Cooperation',
                color: 'slate',
                desc: 'Postpones or retreats from the conflict. Fails to resolve the underlying issue.',
                when: 'Emotions are excessively high and cool-off time is required, or the issue is trivial.'
              },
            ].map((style, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    {style.axes}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-black ${
                    style.outcome.includes('Win-Win') ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                    style.outcome.includes('Win-Lose') ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                    'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {style.outcome}
                  </span>
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white">{style.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{style.desc}</p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Exam Use: </span>
                  <span className="text-slate-500">{style.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: NEGOTIATION SPIRAL */}
      {activeTab === 'negotiation' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider font-mono">
              Section 4.3 · The 4-Phase Negotiation Spiral
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              The 4 Negotiation Phases & E-Negotiation
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Negotiation in IT projects does not follow a straight waterfall; it is an iterative spiral across four interconnected phases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: 'Phase 1', title: 'Intelligence', desc: 'Data gathering, market analysis, understanding partner constraints, technical parameters, and historical facts.' },
              { step: 'Phase 2', title: 'Perception', desc: 'Framing expectations, recognizing cultural filters, building interpersonal empathy, and defining the negotiation tone.' },
              { step: 'Phase 3', title: 'Strategy', desc: 'Setting aspiration levels, trade-offs, fallback positions (BATNA), concessions ladder, and bargaining packages.' },
              { step: 'Phase 4', title: 'Communication', desc: 'Information exchange, tactical offer presentation, persuasion, summarizing points of agreement, and contract formalization.' },
            ].map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">{p.step}</span>
                <h3 className="text-base font-black text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* E-Negotiation Highlights */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
              E-Negotiation: Advantages vs Exam Traps
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1 text-emerald-800 dark:text-emerald-300">
                <span className="font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Clear Advantages:</span>
                <p className="text-slate-600 dark:text-slate-400">Written audit trail, removes status/hierarchical intimidation, flexible across time zones, allows structured technical analysis before replying.</p>
              </div>
              <div className="space-y-1 text-rose-800 dark:text-rose-300">
                <span className="font-bold flex items-center gap-1.5"><AlertCircle className="w-4 h-4" /> Critical Exam Traps:</span>
                <p className="text-slate-600 dark:text-slate-400">Absence of non-verbal cues and facial empathy, emotional misunderstandings, de-individuation leading to <strong>flaming</strong>, and delayed trust formation.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

