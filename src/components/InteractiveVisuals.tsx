import React, { useState } from 'react';
import { 
  Layers, ArrowRight, Play, Info, CheckCircle2, AlertTriangle, 
  Clock, DollarSign, Shield, Cpu, Users, GitBranch, Sparkles, RefreshCw, Compass,
  Target, Activity, Check, ExternalLink, Zap, Award
} from 'lucide-react';

interface InteractiveVisualsProps {
  unitId: number;
}

export const InteractiveVisuals: React.FC<InteractiveVisualsProps> = ({ unitId }) => {
  // Unit 1 state
  const [selectedTriangleNode, setSelectedTriangleNode] = useState<'scope' | 'schedule' | 'cost'>('scope');
  const [selectedPentagonNode, setSelectedPentagonNode] = useState<string>('Technical');
  const [selectedRole, setSelectedRole] = useState<string>('pm');

  // Unit 2 state
  const [wbsExpandedLevel, setWbsExpandedLevel] = useState<number>(3);
  const [selectedKanoCategory, setSelectedKanoCategory] = useState<'basic' | 'performance' | 'delighter'>('basic');
  const [selectedPrecedence, setSelectedPrecedence] = useState<'FS' | 'SS' | 'FF' | 'SF'>('FS');
  const [lagDays, setLagDays] = useState<number>(2);
  const [pertDurations, setPertDurations] = useState<Record<string, number>>({
    A: 4, B: 6, C: 8, D: 7, E: 9, F: 5
  });
  const [isoModelTab, setIsoModelTab] = useState<'qualityInUse' | 'productQuality'>('qualityInUse');

  // Unit 5 state
  const [selectedRupPhase, setSelectedRupPhase] = useState<'inception' | 'elaboration' | 'construction' | 'transition'>('inception');
  const [activeScrumStep, setActiveScrumStep] = useState<number>(0);
  const [selectedVModelLevel, setSelectedVModelLevel] = useState<number>(0);

  // Unit 6 state
  const [selectedPmbokPG, setSelectedPmbokPG] = useState<'initiating' | 'planning' | 'executing' | 'monitoring' | 'closing'>('planning');
  const [selectedPrinceRole, setSelectedPrinceRole] = useState<'executive' | 'seniorUser' | 'seniorSupplier'>('executive');
  const [selectedPmoType, setSelectedPmoType] = useState<'supportive' | 'controlling' | 'directive'>('controlling');
  const [selectedScaledFramework, setSelectedScaledFramework] = useState<'sos' | 'less' | 'safe'>('sos');

  // PERT Calculation for 6-node network: A -> (B -> D, C -> E) -> F
  // A(4): EST 0, EFT 4
  // B(6): EST 4, EFT 10
  // C(8): EST 4, EFT 12
  // D(7): EST 10, EFT 17
  // E(9): EST 12, EFT 21
  // F(5): EST max(EFT_D, EFT_E) = max(17, 21) = 21, EFT = 21 + 5 = 26
  // Backward pass from project finish = 26:
  // F(5): LFT 26, LST 21
  // D(7): LFT 21, LST 14 (Slack = 14 - 10 = 4)
  // E(9): LFT 21, LST 12 (Slack = 12 - 12 = 0)
  // B(6): LFT 14, LST 8 (Slack = 8 - 4 = 4)
  // C(8): LFT 12, LST 4 (Slack = 4 - 4 = 0)
  // A(4): LFT min(LST_B, LST_C) = min(8, 4) = 4, LST = 0 (Slack = 0)
  // Critical Path: A -> C -> E -> F (Duration = 4 + 8 + 9 + 5 = 26)
  const eftA = pertDurations.A;
  const estB = eftA;
  const eftB = estB + pertDurations.B;
  const estC = eftA;
  const eftC = estC + pertDurations.C;
  const estD = eftB;
  const eftD = estD + pertDurations.D;
  const estE = eftC;
  const eftE = estE + pertDurations.E;
  const estF = Math.max(eftD, eftE);
  const eftF = estF + pertDurations.F;

  const projectDuration = eftF;
  const lftF = projectDuration;
  const lstF = lftF - pertDurations.F;
  const lftD = lstF;
  const lstD = lftD - pertDurations.D;
  const lftE = lstF;
  const lstE = lftE - pertDurations.E;
  const lftB = lstD;
  const lstB = lftB - pertDurations.B;
  const lftC = lstE;
  const lstC = lftC - pertDurations.C;
  const lftA = Math.min(lstB, lstC);
  const lstA = lftA - pertDurations.A;

  const slackA = lstA - 0;
  const slackB = lstB - estB;
  const slackC = lstC - estC;
  const slackD = lstD - estD;
  const slackE = lstE - estE;
  const slackF = lstF - estF;

  if (unitId === 1) {
    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Visual 1: Iron Triangle */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Section 1.1 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                The Classic Iron Triangle & Trade-Off Dynamics
              </h3>
            </div>
            <span className="text-xs text-slate-500">Interactive Constraint Explorer</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Interactive SVG Triangle */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <svg viewBox="0 0 300 260" className="w-full max-w-[280px]">
                {/* Triangle paths */}
                <polygon
                  points="150,30 40,220 260,220"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-indigo-500/30 dark:text-indigo-500/20"
                />
                <line x1="150" y1="30" x2="40" y2="220" stroke="currentColor" strokeWidth="4" className={selectedTriangleNode === 'scope' ? 'text-indigo-500' : 'text-slate-300 dark:text-slate-700'} />
                <line x1="40" y1="220" x2="260" y2="220" stroke="currentColor" strokeWidth="4" className={selectedTriangleNode === 'cost' ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-700'} />
                <line x1="260" y1="220" x2="150" y2="30" stroke="currentColor" strokeWidth="4" className={selectedTriangleNode === 'schedule' ? 'text-cyan-500' : 'text-slate-300 dark:text-slate-700'} />

                {/* Scope Node (Top) */}
                <g onClick={() => setSelectedTriangleNode('scope')} className="cursor-pointer">
                  <circle cx="150" cy="30" r="24" className={`${selectedTriangleNode === 'scope' ? 'fill-indigo-600 stroke-indigo-300' : 'fill-slate-700 hover:fill-slate-600'} transition-all`} strokeWidth="3" />
                  <text x="150" y="34" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Scope</text>
                </g>

                {/* Cost Node (Bottom Left) */}
                <g onClick={() => setSelectedTriangleNode('cost')} className="cursor-pointer">
                  <circle cx="40" cy="220" r="24" className={`${selectedTriangleNode === 'cost' ? 'fill-emerald-600 stroke-emerald-300' : 'fill-slate-700 hover:fill-slate-600'} transition-all`} strokeWidth="3" />
                  <text x="40" y="224" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Cost</text>
                </g>

                {/* Schedule Node (Bottom Right) */}
                <g onClick={() => setSelectedTriangleNode('schedule')} className="cursor-pointer">
                  <circle cx="260" cy="220" r="24" className={`${selectedTriangleNode === 'schedule' ? 'fill-cyan-600 stroke-cyan-300' : 'fill-slate-700 hover:fill-slate-600'} transition-all`} strokeWidth="3" />
                  <text x="260" y="224" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Schedule</text>
                </g>
              </svg>
              <div className="text-xs text-slate-500 mt-2">Click any node to see trade-off consequences</div>
            </div>

            {/* Node Explanation Card */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Selected Constraint: {selectedTriangleNode.toUpperCase()}
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white mt-1">
                  {selectedTriangleNode === 'scope' && 'Scope (Features, Deliverables & Quality)'}
                  {selectedTriangleNode === 'schedule' && 'Schedule (Timeframe, Milestones & Deadlines)'}
                  {selectedTriangleNode === 'cost' && 'Cost (Budget, Human Labor & Tech Resources)'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {selectedTriangleNode === 'scope' && 'Increasing project scope unavoidably requires more time (extended schedule) and/or more resources (higher cost). Attempting to expand scope with fixed time and budget causes defects.'}
                  {selectedTriangleNode === 'schedule' && 'Compressing the project schedule requires crashing (adding more developers/overtime = higher cost) or fast-tracking (parallel activities = higher risk), or reducing scope.'}
                  {selectedTriangleNode === 'cost' && 'Reducing the project budget forces cuts in deliverable scope or limits available specialist labor, often leading to slower delivery or omitted features.'}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">IU Exam Rule</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  In DLMBITPAM01, you must emphasize that altering any single vertex exerts immediate pressure on the other two vertices. No parameter can be altered in isolation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual 2: Quintuple Constraints Pentagon */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">IU Course Book Figure 3</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                The Quintuple Constraints Model (5 Constraints)
              </h3>
            </div>
            <span className="text-xs text-slate-500">Official DLMBITPAM01 Taxonomy</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { name: 'Schedule', icon: Clock, desc: 'Temporal deadlines, milestones, phase gates, and critical path activities.' },
              { name: 'Cost', icon: DollarSign, desc: 'Allocated budget, labor compensation, tooling, infrastructure expenditures.' },
              { name: 'Context', icon: Shield, desc: 'External laws, industry regulations, corporate culture, sociotechnical environment.' },
              { name: 'Technical', icon: Cpu, desc: 'Functional scope, architectural complexity, software performance, hardware specifications.' },
              { name: 'Financing', icon: DollarSign, desc: 'Cash-flow schedules, venture funding tranches, investor payment milestones.' }
            ].map(item => {
              const Icon = item.icon;
              const isSel = selectedPentagonNode === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setSelectedPentagonNode(item.name)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSel
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-md ring-1 ring-cyan-500'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-5 h-5 text-cyan-500 mb-2" />
                  <div className="text-xs font-bold">{item.name}</div>
                  <div className="text-[10px] text-slate-500 line-clamp-2 mt-1">{item.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Visual 3: Large Project Role Hierarchy */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Section 1.2 Hierarchy</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
              Large-Scale IT Project Governance & Role Hierarchy
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Click any role to inspect reporting lines, governance boundaries, and PMB vs TMB jurisdiction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Hierarchy Tree */}
            <div className="lg:col-span-2 space-y-3">
              {/* Level 1: Sponsor & PMO */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedRole('sponsor')}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    selectedRole === 'sponsor' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  Project Sponsor (Authorizes Charter)
                </button>
                <button
                  onClick={() => setSelectedRole('pmo')}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    selectedRole === 'pmo' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  PMO (Standards & Resource Pool)
                </button>
              </div>

              <div className="text-center text-slate-400 font-mono text-xs">↓</div>

              {/* Level 2: Project Manager & PMB */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedRole('pm')}
                  className={`px-6 py-3 rounded-xl border text-xs font-black transition-all ${
                    selectedRole === 'pm' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  Project Manager (Overall Accountability)
                </button>
                <button
                  onClick={() => setSelectedRole('pmb')}
                  className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                    selectedRole === 'pmb' ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30'
                  }`}
                >
                  [PMB: Overall Governance]
                </button>
              </div>

              <div className="text-center text-slate-400 font-mono text-xs">↓</div>

              {/* Level 3: Technical Coordinator & TMB */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedRole('tc')}
                  className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                    selectedRole === 'tc' ? 'bg-cyan-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700'
                  }`}
                >
                  Technical Coordinator (Architecture)
                </button>
                <button
                  onClick={() => setSelectedRole('tmb')}
                  className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                    selectedRole === 'tmb' ? 'bg-cyan-600 text-white shadow-md' : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
                  }`}
                >
                  [TMB: Technical Audits]
                </button>
              </div>

              <div className="text-center text-slate-400 font-mono text-xs">↓</div>

              {/* Level 4: WPLs & Task Leaders */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setSelectedRole('wpl')}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-medium transition-all ${
                    selectedRole === 'wpl' ? 'bg-slate-800 text-white' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Work-Package Leaders (WPL)
                </button>
                <span className="text-slate-400 font-mono text-xs">→</span>
                <button
                  onClick={() => setSelectedRole('tl')}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-medium transition-all ${
                    selectedRole === 'tl' ? 'bg-slate-800 text-white' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Task Leaders
                </button>
                <span className="text-slate-400 font-mono text-xs">→</span>
                <button
                  onClick={() => setSelectedRole('tm')}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-medium transition-all ${
                    selectedRole === 'tm' ? 'bg-slate-800 text-white' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Team Members / Engineers
                </button>
              </div>
            </div>

            {/* Role Detail Sidebar */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Role Profile</span>
              {selectedRole === 'sponsor' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Project Sponsor</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Owns the Business Case. Signs the Project Charter to officially authorize the project and release corporate funding. Provides executive-level backing.
                  </p>
                </div>
              )}
              {selectedRole === 'pmo' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Project Management Office (PMO)</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Provides standardized templates, training, cross-project resource pooling, and procedural alignment across enterprise projects.
                  </p>
                </div>
              )}
              {selectedRole === 'pm' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Project Manager (PM)</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Single point of accountability for overall project success. Manages schedule, cost, scope, team communication, reports to the Sponsor, and chairs governance meetings.
                  </p>
                </div>
              )}
              {selectedRole === 'pmb' && (
                <div>
                  <h4 className="text-sm font-bold text-amber-600 dark:text-amber-400">Project Management Board (PMB)</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Advises the PM on overall and non-technical governance: progress tracking, budget deviations, contractual conflicts, and schedule milestone compliance.
                  </p>
                </div>
              )}
              {selectedRole === 'tc' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Technical Coordinator</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Directs system architecture, technical design, engineering methodologies, and hardware/software integration across work packages.
                  </p>
                </div>
              )}
              {selectedRole === 'tmb' && (
                <div>
                  <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400">Technical Management Board (TMB)</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Advises the Technical Coordinator on architectural disputes, audits deliverable technical quality against milestone criteria, and resolves technical engineering deadlocks.
                  </p>
                </div>
              )}
              {selectedRole === 'wpl' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Work-Package Leader (WPL)</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Responsible for a specific deliverable or work package grouping. Often belongs to an external partner or subcontracted engineering firm.
                  </p>
                </div>
              )}
              {selectedRole === 'tl' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Task Leader</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Directs the day-to-day execution of elementary tasks, assigning daily tickets and coordinating individual contributors.
                  </p>
                </div>
              )}
              {selectedRole === 'tm' && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Team Member / Engineer</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Executes code, writes documentation, performs unit testing, and directly creates the project deliverables.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Unit 2 Visuals
  if (unitId === 2) {
    return (
    <div className="space-y-8 animate-fadeIn">
      {/* Visual 1: WBS Decomposition Explorer & 100% Rule */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Section 2.1 WBS</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
              Work Breakdown Structure & The 100% Rule
            </h3>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
            <span className="text-slate-500 font-semibold px-2">Expand:</span>
            {[2, 3, 4].map(lvl => (
              <button
                key={lvl}
                onClick={() => setWbsExpandedLevel(lvl)}
                className={`px-2 py-0.5 rounded font-bold ${
                  wbsExpandedLevel >= lvl ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                L{lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive WBS Tree Display */}
        <div className="space-y-3 font-mono text-xs">
          {/* Level 1: Project */}
          <div className="p-3 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-between">
            <span>Level 1: 1.0 cRobot Autonomous Assistant Project [100% Total Scope]</span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Project Baseline</span>
          </div>

          {/* Level 2: Subsystems */}
          {wbsExpandedLevel >= 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pl-4 border-l-2 border-indigo-500/40">
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-900 dark:text-indigo-200 font-semibold">
                1.1 Hardware Subsystem
              </div>
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-900 dark:text-indigo-200 font-semibold">
                1.2 Software Subsystem
              </div>
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-900 dark:text-indigo-200 font-semibold">
                1.3 Integration & Testing
              </div>
            </div>
          )}

          {/* Level 3: Work Packages */}
          {wbsExpandedLevel >= 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pl-8 border-l-2 border-indigo-500/20">
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                1.1.1 Chassis Frame
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                1.1.2 Mobility Motors
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                1.2.1 Navigation AI
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                1.2.2 Voice Interaction
              </div>
            </div>
          )}

          {/* Level 4: Elementary Tasks */}
          {wbsExpandedLevel >= 4 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-12 border-l-2 border-slate-300 dark:border-slate-700 text-[11px]">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                1.1.1.1 3D Frame CAD
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                1.1.2.1 Motor Bench Test
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                1.2.1.1 Obstacle Avoidance
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                1.2.2.1 Speech Parser
              </div>
            </div>
          )}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong className="text-slate-900 dark:text-white block mb-1">The 100% Rule in Action:</strong>
          Every child level must sum to exactly 100% of the parent scope above it. Estimates of time, budget, and labor roll upward from Level 4 elementary tasks to establish the project baselines.
        </div>
      </div>

      {/* Visual 2: Kano Satisfaction & MoSCoW Prioritization Simulator */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Section 2.2 Prioritization</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
              Kano Model & MoSCoW Prioritization Simulator
            </h3>
          </div>
          <span className="text-xs text-slate-500">Dai Clegg (1994) & Noriaki Kano</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setSelectedKanoCategory('basic')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedKanoCategory === 'basic'
                ? 'bg-rose-500/10 border-rose-500 text-rose-900 dark:text-rose-200 shadow-md ring-1 ring-rose-500'
                : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Basic / Must-Be</div>
            <div className="text-sm font-black mt-1">MoSCoW: Must-Have</div>
            <p className="text-xs text-slate-500 mt-1">Taken for granted. Absence causes customer outrage; presence is merely neutral.</p>
            <div className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 mt-2">cRobot Example: Physical Mobility</div>
          </button>

          <button
            onClick={() => setSelectedKanoCategory('performance')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedKanoCategory === 'performance'
                ? 'bg-indigo-500/10 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-md ring-1 ring-indigo-500'
                : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Performance / Satisfier</div>
            <div className="text-sm font-black mt-1">MoSCoW: Should-Have</div>
            <p className="text-xs text-slate-500 mt-1">Linear satisfaction. More investment yields proportional satisfaction up to diminishing returns.</p>
            <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 mt-2">cRobot Example: Response Speed & Battery</div>
          </button>

          <button
            onClick={() => setSelectedKanoCategory('delighter')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedKanoCategory === 'delighter'
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-md ring-1 ring-emerald-500'
                : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Delighter / Attractive</div>
            <div className="text-sm font-black mt-1">MoSCoW: Could-Have</div>
            <p className="text-xs text-slate-500 mt-1">Unexpected surprise. Absence causes ZERO dissatisfaction; presence creates exponential delight.</p>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-2">cRobot Example: Human-like Head Tilt</div>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
          <strong className="text-slate-900 dark:text-white block">Key Prioritization Strategy:</strong>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            100% of Basic requirements must be met before release. Performance needs are optimized according to budget. A few select Delighters are added to wow customers, while avoiding gold plating.
          </p>
        </div>
      </div>

      {/* Visual 3: Four Precedence Relationships Simulator */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Section 2.3 Dependencies</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
              Precedence Relationships & Leads/Lags Simulator
            </h3>
          </div>
          <div className="flex items-center gap-1">
            {(['FS', 'SS', 'FF', 'SF'] as const).map(p => (
              <button
                key={p}
                onClick={() => setSelectedPrecedence(p)}
                className={`px-3 py-1 rounded text-xs font-bold border transition-all ${
                  selectedPrecedence === p ? 'bg-indigo-600 text-white border-indigo-600 shadow' : 'border-slate-200 dark:border-slate-800 text-slate-600'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-900 dark:text-white">
              {selectedPrecedence === 'FS' && 'Finish-to-Start (FS) — Default & Most Common'}
              {selectedPrecedence === 'SS' && 'Start-to-Start (SS) — Concurrent Parallel Work'}
              {selectedPrecedence === 'FF' && 'Finish-to-Finish (FF) — Synchronized Completion'}
              {selectedPrecedence === 'SF' && 'Start-to-Finish (SF) — Rarest Dependency Type'}
            </span>
            <span className="text-slate-500 font-mono">Lag: {lagDays} days</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-24 text-slate-500">Predecessor:</span>
              <div className="h-7 bg-indigo-600 text-white rounded px-3 flex items-center text-[11px] w-48">
                Task A (Duration: 5d)
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-24 text-slate-500">Successor:</span>
              <div
                className="h-7 bg-cyan-600 text-white rounded px-3 flex items-center text-[11px] w-48 transition-all"
                style={{
                  marginLeft: selectedPrecedence === 'FS' ? `${120 + lagDays * 10}px` : selectedPrecedence === 'SS' ? `${lagDays * 15}px` : selectedPrecedence === 'FF' ? `${80 + lagDays * 10}px` : `${20 + lagDays * 10}px`
                }}
              >
                Task B ({selectedPrecedence})
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <label className="text-xs text-slate-500">Adjust Lag Time (Days):</label>
            <input
              type="range"
              min="0"
              max="10"
              value={lagDays}
              onChange={(e) => setLagDays(Number(e.target.value))}
              className="accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Visual 4: Live PERT Network & Critical Path Calculator */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Section 2.3 Critical Path</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
              Interactive PERT Network & Critical Path Calculator
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Project Duration:</span>
            <span className="px-3 py-1 rounded-lg text-sm font-black bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-mono">
              {projectDuration} Weeks
            </span>
          </div>
        </div>

        {/* 6 Node Visual PERT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          {/* Node A */}
          <div className={`p-4 rounded-xl border ${slackA === 0 ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60'}`}>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>EST: 0</span>
              <span className="font-bold text-slate-900 dark:text-white">Task A</span>
              <span>EFT: {eftA}</span>
            </div>
            <div className="py-2 text-center text-sm font-black text-slate-900 dark:text-white">
              Dur: {pertDurations.A}w {slackA === 0 && <span className="text-xs text-rose-500 font-bold block">[CRITICAL]</span>}
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>LST: {lstA}</span>
              <span className="font-bold text-indigo-600">Slack: {slackA}</span>
              <span>LFT: {lftA}</span>
            </div>
          </div>

          {/* Node B */}
          <div className={`p-4 rounded-xl border ${slackB === 0 ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60'}`}>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>EST: {estB}</span>
              <span className="font-bold text-slate-900 dark:text-white">Task B (H/W)</span>
              <span>EFT: {eftB}</span>
            </div>
            <div className="py-2 text-center text-sm font-black text-slate-900 dark:text-white">
              Dur: {pertDurations.B}w {slackB === 0 ? <span className="text-xs text-rose-500 font-bold block">[CRITICAL]</span> : <span className="text-xs text-emerald-600 block">[Non-Critical]</span>}
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>LST: {lstB}</span>
              <span className="font-bold text-indigo-600">Slack: {slackB}</span>
              <span>LFT: {lftB}</span>
            </div>
          </div>

          {/* Node C */}
          <div className={`p-4 rounded-xl border ${slackC === 0 ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60'}`}>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>EST: {estC}</span>
              <span className="font-bold text-slate-900 dark:text-white">Task C (S/W)</span>
              <span>EFT: {eftC}</span>
            </div>
            <div className="py-2 text-center text-sm font-black text-slate-900 dark:text-white">
              Dur: {pertDurations.C}w {slackC === 0 ? <span className="text-xs text-rose-500 font-bold block">[CRITICAL]</span> : <span className="text-xs text-emerald-600 block">[Non-Critical]</span>}
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>LST: {lstC}</span>
              <span className="font-bold text-indigo-600">Slack: {slackC}</span>
              <span>LFT: {lftC}</span>
            </div>
          </div>

          {/* Node D */}
          <div className={`p-4 rounded-xl border ${slackD === 0 ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60'}`}>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>EST: {estD}</span>
              <span className="font-bold text-slate-900 dark:text-white">Task D (Fab)</span>
              <span>EFT: {eftD}</span>
            </div>
            <div className="py-2 text-center text-sm font-black text-slate-900 dark:text-white">
              Dur: {pertDurations.D}w {slackD === 0 ? <span className="text-xs text-rose-500 font-bold block">[CRITICAL]</span> : <span className="text-xs text-emerald-600 block">[Non-Critical]</span>}
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>LST: {lstD}</span>
              <span className="font-bold text-indigo-600">Slack: {slackD}</span>
              <span>LFT: {lftD}</span>
            </div>
          </div>

          {/* Node E */}
          <div className={`p-4 rounded-xl border ${slackE === 0 ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60'}`}>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>EST: {estE}</span>
              <span className="font-bold text-slate-900 dark:text-white">Task E (Dev)</span>
              <span>EFT: {eftE}</span>
            </div>
            <div className="py-2 text-center text-sm font-black text-slate-900 dark:text-white">
              Dur: {pertDurations.E}w {slackE === 0 ? <span className="text-xs text-rose-500 font-bold block">[CRITICAL]</span> : <span className="text-xs text-emerald-600 block">[Non-Critical]</span>}
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>LST: {lstE}</span>
              <span className="font-bold text-indigo-600">Slack: {slackE}</span>
              <span>LFT: {lftE}</span>
            </div>
          </div>

          {/* Node F (Terminal Merge) */}
          <div className={`p-4 rounded-xl border ${slackF === 0 ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60'}`}>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>EST: {estF}</span>
              <span className="font-bold text-slate-900 dark:text-white">Task F (Integ)</span>
              <span>EFT: {eftF}</span>
            </div>
            <div className="py-2 text-center text-sm font-black text-slate-900 dark:text-white">
              Dur: {pertDurations.F}w {slackF === 0 && <span className="text-xs text-rose-500 font-bold block">[CRITICAL]</span>}
            </div>
            <div className="flex justify-between text-slate-500 text-[10px]">
              <span>LST: {lstF}</span>
              <span className="font-bold text-indigo-600">Slack: {slackF}</span>
              <span>LFT: {lftF}</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
          <strong className="text-slate-900 dark:text-white block">Critical Path Highlighting (Red):</strong>
          <span>The Critical Path traces through activities where Slack = 0: <strong>A → C → E → F</strong> (Total: {projectDuration} weeks). Any delay along this chain directly pushes the project delivery date.</span>
        </div>
      </div>

      {/* Visual 5: ISO/IEC 25010 Quality Models Tree */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Section 2.4 Standards</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
              ISO/IEC 25010 Software Quality Models
            </h3>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
            <button
              onClick={() => setIsoModelTab('qualityInUse')}
              className={`px-3 py-1 rounded font-bold transition-all ${
                isoModelTab === 'qualityInUse' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Quality-in-Use (5)
            </button>
            <button
              onClick={() => setIsoModelTab('productQuality')}
              className={`px-3 py-1 rounded font-bold transition-all ${
                isoModelTab === 'productQuality' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Product Quality (8)
            </button>
          </div>
        </div>

        {isoModelTab === 'qualityInUse' ? (
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
              Mnemonic: S-E-F-E-C (Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { name: 'Satisfaction', desc: 'Degree to which user needs are satisfied (usefulness, trust, pleasure, comfort).' },
                { name: 'Effectiveness', desc: 'Accuracy and completeness with which users achieve specified goals.' },
                { name: 'Freedom from Risk', desc: 'Mitigates potential risks to economic status, health, safety, and environment.' },
                { name: 'Efficiency', desc: 'Resources expended (time, effort, cost) relative to accuracy and goal completion.' },
                { name: 'Context Coverage', desc: 'Context Completeness (specified contexts) + Flexibility (unanticipated contexts).' }
              ].map(q => (
                <div key={q.name} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{q.name}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{q.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
              Mnemonic: F-P-U-R-S-C-P-M (Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Functional Suitability', sub: 'Completeness, Correctness, Appropriateness' },
                { name: 'Performance Efficiency', sub: 'Time behavior (speed), Capacity, Resource utilization' },
                { name: 'Usability', sub: 'Learnability, Operability, User error protection, Aesthetics, Accessibility' },
                { name: 'Reliability', sub: 'Maturity, Availability, Fault tolerance, Recoverability' },
                { name: 'Security', sub: 'Confidentiality, Integrity, Non-repudiation, Accountability, Authenticity' },
                { name: 'Compatibility', sub: 'Coexistence, Interoperability' },
                { name: 'Portability', sub: 'Adaptability, Installability' },
                { name: 'Maintainability', sub: 'Modularity, Reusability, Analyzability, Modifiability, Testability' }
              ].map(p => (
                <div key={p.name} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{p.name}</div>
                  <div className="text-[10px] text-slate-500">{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    );
  }

  // =========================================================================
  // UNIT 3 VISUALS: Cost Estimation, FPA, EVM, and Risk Lifecycle
  // =========================================================================
  if (unitId === 3) {
    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Visual 1: Cost Reserve Stack Hierarchy */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Section 3.1 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                The Financial Reserve Stack Hierarchy
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Known-Unknowns vs Unknown-Unknowns</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Visual Pyramid / Stack */}
            <div className="space-y-2">
              {[
                { level: 'Project Budget', sub: 'Total Authorized Funding', desc: 'Cost Baseline + Management Reserve. Approved by executive governance.', color: 'bg-purple-600 text-white', tag: 'Total Capital' },
                { level: 'Management Reserve', sub: 'Unknown-Unknowns', desc: 'Withheld for unforeseen work within project scope. Excluded from Cost Baseline.', color: 'bg-indigo-500 text-white', tag: 'Executive Reserve' },
                { level: 'Cost Baseline', sub: 'Performance Measurement Baseline (PMB)', desc: 'Authorized budget across all work packages plus contingency reserves.', color: 'bg-sky-500 text-white', tag: 'Cost Baseline' },
                { level: 'Work-Package Contingency', sub: 'Aggregated Identified Risks', desc: 'Contingency allocated to work packages for quantified risk responses.', color: 'bg-teal-500 text-white', tag: 'WP Buffer' },
                { level: 'Task Contingency', sub: 'Known-Unknowns', desc: 'Buffer for task-specific risk events identified during estimation.', color: 'bg-emerald-500 text-white', tag: 'Task Buffer' },
                { level: 'Task Estimates', sub: 'Project Cost Without Contingency', desc: 'Bottom-up raw monetary sum of all task activities.', color: 'bg-slate-700 text-white', tag: 'Base Cost' }
              ].map((tier, idx) => (
                <div key={tier.level} className={`p-3.5 rounded-xl ${tier.color} shadow-sm flex items-center justify-between text-xs`}>
                  <div>
                    <span className="font-bold text-sm block">{6 - idx}. {tier.level}</span>
                    <span className="text-[11px] opacity-90">{tier.sub}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-black/25 font-mono text-[10px] uppercase font-semibold">
                    {tier.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Exam Trap Warning Box */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 space-y-2 text-xs">
                <div className="font-bold flex items-center gap-2 text-amber-700 dark:text-amber-300">
                  <AlertTriangle className="w-4 h-4" />
                  Crucial Exam Distinction: Baseline vs Budget
                </div>
                <p className="leading-relaxed">
                  <strong>Cost Baseline = Work Packages + Contingency Reserves.</strong><br />
                  <strong>Project Budget = Cost Baseline + Management Reserve.</strong>
                </p>
                <p className="text-[11px] text-amber-800 dark:text-amber-300 leading-snug">
                  Management Reserve is explicitly <em>excluded</em> from the Cost Baseline because it covers unexpected changes rather than planned risk responses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                <span className="font-bold text-slate-900 dark:text-white">Estimate Quality Criteria (A-C-C-P-R-D-U-V-V):</span>
                <div className="grid grid-cols-3 gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  <span>• Accuracy</span>
                  <span>• Confidence</span>
                  <span>• Credibility</span>
                  <span>• Precision</span>
                  <span>• Reliability</span>
                  <span>• Documentation</span>
                  <span>• Uniformity</span>
                  <span>• Validity</span>
                  <span>• Verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual 2: Three-Point Triangular & Skew Distribution */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Section 3.2 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Three-Point Probability Distribution & Downside Skew
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Optimistic (o) · Most Probable (m) · Pessimistic (p)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 text-sm block">Optimistic (o)</span>
              <p className="text-slate-600 dark:text-slate-400">Best-case monetary cost assuming zero roadblocks, zero rework, and maximum productivity.</p>
            </div>
            <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-1">
              <span className="font-bold text-sky-900 dark:text-sky-300 text-sm block">Most Probable (m)</span>
              <p className="text-slate-600 dark:text-slate-400">The mode of the distribution; realistic resource consumption under normal project conditions.</p>
            </div>
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-1">
              <span className="font-bold text-rose-900 dark:text-rose-300 text-sm block">Pessimistic (p)</span>
              <p className="text-slate-600 dark:text-slate-400">Worst-case scenario with significant defects, scope churn, technical delays, and vendor slips.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Why is the curve skewed to the right?</strong> In software engineering, potential cost savings are bounded (you cannot deliver in negative time), whereas potential cost and schedule overruns have long tails that can exceed initial estimates by multiples.
          </div>
        </div>

        {/* Visual 3: EVM Value First Variance Map */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Section 3.3 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Earned Value Management (EVM) Core Architecture
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">VALUE FIRST: EV Leads in All Formulas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-400 block font-mono">SV = EV - PV</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">Schedule Variance</div>
              <p className="text-[11px] text-slate-500">Positive = Ahead of schedule; Negative = Behind schedule.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-400 block font-mono">CV = EV - AC</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">Cost Variance</div>
              <p className="text-[11px] text-slate-500">Positive = Under budget; Negative = Over budget.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-400 block font-mono">SPI = EV / PV</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">Schedule Index</div>
              <p className="text-[11px] text-slate-500">&gt; 1.0 = Ahead of schedule pace; &lt; 1.0 = Slower than planned.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-400 block font-mono">CPI = EV / AC</span>
              <div className="text-base font-bold text-slate-900 dark:text-white">Cost Index</div>
              <p className="text-[11px] text-slate-500">&gt; 1.0 = Cost efficient; &lt; 1.0 = Cost overrun per dollar spent.</p>
            </div>
          </div>
        </div>

        {/* Visual 4: Risk Lifecycle & Maturity Ladder */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Section 3.4 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Continuous Risk Cycle (I-A-M-M) & Maturity Ladder (A-A-O-M-A)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Prevention → Detection → Response</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* 4 Functions */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Four Risk Management Functions (I-A-M-M):</span>
              {[
                { name: '1. Identify', desc: 'Systematically discover threats to schedule, cost, technical, and staffing.' },
                { name: '2. Assess', desc: 'Evaluate Likelihood and Severity to prioritize in the Likelihood-Impact Matrix.' },
                { name: '3. Mitigate', desc: 'Select response strategy: Avoid, Mitigate, Transfer, or Accept.' },
                { name: '4. Monitor', desc: 'Continuously track risk register triggers and audit contingency reserves.' }
              ].map(f => (
                <div key={f.name} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-bold text-sky-600 dark:text-sky-400">{f.name}</div>
                  <div className="text-slate-500 mt-0.5">{f.desc}</div>
                </div>
              ))}
            </div>

            {/* 5-Level Maturity Ladder */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Risk Maturity Ladder (A-A-O-M-A):</span>
              {[
                { lvl: 'Level 5: Adaptive', desc: 'Continuous improvement, predictive analytics, enterprise-wide lessons learned.' },
                { lvl: 'Level 4: Managed', desc: 'Quantitatively measured and controlled processes with statistical benchmarks.' },
                { lvl: 'Level 3: Organized', desc: 'Standardized organization-wide procedures, formal risk registers, and roles.' },
                { lvl: 'Level 2: Abbreviated', desc: 'Inconsistent informal risk processes practiced on some projects but not others.' },
                { lvl: 'Level 1: Ad hoc', desc: 'Chaotic, disorganized, purely reactive firefighting without formal risk tracking.' }
              ].map(m => (
                <div key={m.lvl} className="p-2.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">{m.lvl}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // UNIT 4 VISUALS: Leadership, Culture, Stakeholders, and Conflict
  // =========================================================================
  if (unitId === 4) {
    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Visual 1: Vision Hierarchy Cascade */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Section 4.1 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                The Vision Keeping Cascade & Dual Leadership Balance
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Where → What/Why → How</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1">
              <span className="font-bold text-purple-900 dark:text-purple-300 text-sm block">1. Vision</span>
              <div className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400">"Where we want to be"</div>
              <p className="text-slate-600 dark:text-slate-400">Inspiring mental picture of the desired future end state and long-term organizational transformation.</p>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
              <span className="font-bold text-indigo-900 dark:text-indigo-300 text-sm block">2. Mission</span>
              <div className="text-[11px] font-mono font-bold text-indigo-600 dark:text-indigo-400">"What we do and why"</div>
              <p className="text-slate-600 dark:text-slate-400">Core operational purpose, current business scope, and customer value delivered today.</p>
            </div>
            <div className="p-4 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800 space-y-1">
              <span className="font-bold text-pink-900 dark:text-pink-300 text-sm block">3. Strategy</span>
              <div className="text-[11px] font-mono font-bold text-pink-600 dark:text-pink-400">"How we get there"</div>
              <p className="text-slate-600 dark:text-slate-400">Action plan, milestone roadmap, resource allocation, and technical path to execute the mission.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <span className="font-bold text-slate-900 dark:text-white">Blended Leadership Model:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-400">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <strong className="text-purple-600 dark:text-purple-400 block mb-0.5">Transformational Leadership</strong>
                Fosters intrinsic motivation, vision alignment, psychological safety, and creative technical innovation.
              </div>
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <strong className="text-indigo-600 dark:text-indigo-400 block mb-0.5">Transactional Governance</strong>
                Enforces contracts, compliance mandates, sprint milestones, and rigorous engineering quality standards.
              </div>
            </div>
          </div>
        </div>

        {/* Visual 2: Competing Values Framework (4 Project Cultures) */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Section 4.1 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                The Competing Values Culture Framework
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Internal vs External · Flexibility vs Control</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 text-sm block">Clan Culture (Collaborate)</span>
              <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">Internal Focus + High Flexibility</div>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Shared values, family-like cohesion, mentoring, open communication, and consensus.</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1">
              <span className="font-bold text-purple-900 dark:text-purple-300 text-sm block">Adhocracy Culture (Create)</span>
              <div className="text-[10px] font-mono text-purple-700 dark:text-purple-400 font-semibold">External Focus + High Flexibility</div>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Dynamic, innovative, risk-taking, cutting-edge experimentation, entrepreneurial agility.</p>
            </div>
            <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-1">
              <span className="font-bold text-sky-900 dark:text-sky-300 text-sm block">Hierarchy Culture (Control)</span>
              <div className="text-[10px] font-mono text-sky-700 dark:text-sky-400 font-semibold">Internal Focus + High Control/Stability</div>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Standardized procedures, strict governance, predictability, formal compliance, rules.</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1">
              <span className="font-bold text-amber-900 dark:text-amber-300 text-sm block">Market Culture (Compete)</span>
              <div className="text-[10px] font-mono text-amber-700 dark:text-amber-400 font-semibold">External Focus + High Control/Stability</div>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Results-driven, competitive, focused on hard quantitative targets and bottom-line delivery.</p>
            </div>
          </div>
        </div>

        {/* Visual 3: Power-Interest Grid & Salience Model */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Section 4.2 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Stakeholder Prioritization: Power-Interest Grid & Salience
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Manage Closely · Keep Satisfied · Keep Informed · Monitor</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Power-Interest Grid */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="font-bold text-slate-900 dark:text-white text-xs block">Power-Interest Grid (4 Quadrants):</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <div className="font-bold text-purple-700 dark:text-purple-300">Keep Satisfied</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">High Power · Low Interest</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">CFO, Compliance regulators.</p>
                </div>
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300">Manage Closely</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">High Power · High Interest</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">Key Sponsors, Product Owners.</p>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="font-bold text-slate-700 dark:text-slate-300">Monitor</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Low Power · Low Interest</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Peripheral vendors, general public.</p>
                </div>
                <div className="p-3 bg-sky-500/10 border border-sky-500/30 rounded-lg">
                  <div className="font-bold text-sky-700 dark:text-sky-300">Keep Informed</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Low Power · High Interest</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">End users, technical champions.</p>
                </div>
              </div>
            </div>

            {/* Salience 7 Classes */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <span className="font-bold text-slate-900 dark:text-white block">Salience Model (Mitchell, Agle & Wood 1997):</span>
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong className="text-purple-600 dark:text-purple-400">Latent (1 attr):</strong> Dormant (Power), Discretionary (Legitimacy), Demanding (Urgency).
                </div>
                <div className="p-2 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <strong className="text-indigo-600 dark:text-indigo-400">Expectant (2 attr):</strong> Dominant (P+L), Dangerous (P+U - no legitimacy!), Dependent (L+U).
                </div>
                <div className="p-2 rounded bg-purple-600 text-white font-bold">
                  Definite Stakeholder (3 attr): Power + Legitimacy + Urgency. Highest priority!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual 4: RACI Matrix & Conflict Resolution */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Section 4.3 Model</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                RACI Governance Rule & The 5 Conflict Resolution Modes
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Exactly 1 Accountable · Collaborate = Win-Win</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* RACI */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block">RACI Linear Responsibility Rules:</span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>• <strong>R (Responsible):</strong> The 'doer' who executes the task. Multiple people allowed.</li>
                <li>• <strong>A (Accountable):</strong> The sole owner with veto power. <strong>EXACTLY ONE 'A' PER TASK.</strong></li>
                <li>• <strong>C (Consulted):</strong> Two-way dialogue with experts before decision.</li>
                <li>• <strong>I (Informed):</strong> One-way status update broadcast after decision.</li>
              </ul>
            </div>

            {/* 5 Conflict Styles */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block">Five Conflict Handling Modes:</span>
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold text-emerald-800 dark:text-emerald-300">
                  Collaborate / Problem-Solve: Win-Win consensus (gold standard).
                </div>
                <div className="p-2 rounded bg-sky-500/10 border border-sky-500/20 text-sky-800 dark:text-sky-300">
                  Compromise / Reconcile: Give-and-take / lose-lose middle ground.
                </div>
                <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300">
                  Force / Direct: Win-Lose authoritative emergency enforcement.
                </div>
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300">
                  Smooth / Accommodate: Downplays differences to keep peace.
                </div>
                <div className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  Withdraw / Avoid: Postpones dispute or allows tempers to cool.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (unitId === 5) {
    const rupPhases = {
      inception: {
        name: 'Inception',
        milestone: 'Scope & Feasibility Gate',
        objective: 'Determine project scope, business case feasibility, and core use cases.',
        workloads: {
          'Business Modeling': 85,
          'Requirements': 75,
          'Analysis & Design': 35,
          'Implementation': 15,
          'Test': 10,
          'Deployment': 5,
        },
        examFact: 'Primary focus is business modeling and viability. Iterations are not typical here due to abstract nature.'
      },
      elaboration: {
        name: 'Elaboration',
        milestone: 'Requirements & Architectural Baseline Gate',
        objective: 'Establish system requirements, UML architectural models, and mitigate primary project risks.',
        workloads: {
          'Business Modeling': 30,
          'Requirements': 80,
          'Analysis & Design': 90,
          'Implementation': 45,
          'Test': 30,
          'Deployment': 10,
        },
        examFact: 'Most critical phase for technical risk retirement. Architecture and UML models established before coding.'
      },
      construction: {
        name: 'Construction',
        milestone: 'Operational Software Gate',
        objective: 'Developers program, test, and debug code to produce high-quality tested deliverables ready for user acceptance.',
        workloads: {
          'Business Modeling': 5,
          'Requirements': 20,
          'Analysis & Design': 40,
          'Implementation': 95,
          'Test': 80,
          'Deployment': 25,
        },
        examFact: 'Highest resource expenditure. Multiple iterations build executable increments toward complete product.'
      },
      transition: {
        name: 'Transition',
        milestone: 'User Acceptance & Handover Gate',
        objective: 'Transfer solution to customers/users and maintenance team, complete user documentation, and conduct user training.',
        workloads: {
          'Business Modeling': 0,
          'Requirements': 10,
          'Analysis & Design': 10,
          'Implementation': 25,
          'Test': 70,
          'Deployment': 95,
        },
        examFact: 'Phase concludes with user acceptance, operational handoff to maintenance, and hardware/network setup.'
      }
    };

    const scrumSteps = [
      {
        step: '1. Product Backlog Refinement',
        owner: 'Product Owner (Exclusive Owner)',
        timebox: 'Continuous (up to 10% sprint capacity)',
        details: 'Single prioritized source of all requirements. Items are DEEP (Detailed appropriately, Estimated, Emergent, Prioritized). Only PO can add, reorder, or cancel requirements.',
        rule: 'PO represents stakeholders; developers do NOT unilaterally alter backlog priority.'
      },
      {
        step: '2. Sprint Planning',
        owner: 'Entire Scrum Team (PO, SM, Developers)',
        timebox: 'Max 8 hours for 1-month sprint',
        details: 'Part 1 (What): PO presents sprint goal & backlog items. Part 2 (How): Developers break selected items into technical tasks and forecast Sprint Backlog.',
        rule: 'Sprint Goal is locked at planning. Scope cannot be altered if it endangers the goal.'
      },
      {
        step: '3. Sprint Execution & Daily Scrum',
        owner: 'Developers (Facilitated by Scrum Master)',
        timebox: '15 minutes daily (strictly 24h synchronization)',
        details: 'Team synchronizes work and plans next 24h. Three questions: What did I do yesterday? What will I do today? What impediments are in my way? Sprint duration <= 1 month, NEVER extended.',
        rule: 'Daily Scrum is NOT a status report to management or Scrum Master; it is for developers.'
      },
      {
        step: '4. Sprint Review',
        owner: 'Scrum Team + Invited Key Stakeholders',
        timebox: 'Max 4 hours for 1-month sprint',
        details: 'Live inspection of the Increment. PO discusses completed items. Stakeholders give feedback. Product Backlog is adapted based on market shifts and learning.',
        rule: 'Only items meeting the Definition of Done (DoD) can be demonstrated. No partial work!'
      },
      {
        step: '5. Sprint Retrospective',
        owner: 'Scrum Team (PO, SM, Developers)',
        timebox: 'Max 3 hours for 1-month sprint',
        details: 'Inspect people, relationships, processes, and tools. Identify what went well and what failed. Generate actionable process improvement items for the very next sprint.',
        rule: 'Focuses on continuous process improvement (Kaizen), not software features.'
      }
    ];

    const vModelLevels = [
      {
        level: 'Level 1: Business Acceptance',
        left: 'Requirements Specification',
        leftDesc: 'Captures stakeholder needs, functional scope, operational use cases, and business constraints.',
        right: 'Acceptance Testing',
        rightDesc: 'Validates that the software fulfills business requirements and contracts in the user environment.',
        verification: '1:1 Direct Verification: Acceptance test cases are derived directly from Requirements Specification!'
      },
      {
        level: 'Level 2: System Architecture',
        left: 'System Design',
        leftDesc: 'Defines end-to-end system topology, external interfaces, non-functional performance, and security specs.',
        right: 'System Testing',
        rightDesc: 'Tests the complete integrated system against functional and non-functional system design criteria.',
        verification: '1:1 Direct Verification: System test cases verify end-to-end performance and complete system design!'
      },
      {
        level: 'Level 3: Component Integration',
        left: 'Architecture Design',
        leftDesc: 'Decomposes system into subsystems, modules, communication protocols, and API data contracts.',
        right: 'Integration Testing',
        rightDesc: 'Tests data exchange, interface compatibility, and inter-subsystem communications.',
        verification: '1:1 Direct Verification: Integration tests specifically target interface boundaries between modules!'
      },
      {
        level: 'Level 4: Detailed Implementation',
        left: 'Module Implementation (Code)',
        leftDesc: 'Translates detailed algorithms, data structures, and business logic into executable source code.',
        right: 'Unit Testing',
        rightDesc: 'Tests individual functions, methods, and classes in isolation (white-box logic and branch coverage).',
        verification: '1:1 Direct Verification: Unit tests verify internal code branch correctness against module specs!'
      }
    ];

    const currentPhase = rupPhases[selectedRupPhase];
    const currentScrum = scrumSteps[activeScrumStep];
    const currentV = vModelLevels[selectedVModelLevel];

    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Visual 1: RUP Hump Chart Interactive Workload Explorer */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Section 5.1 Architecture</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                RUP Hump Chart & Concurrent Engineering Disciplines
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Disciplines run concurrently across all 4 phases</span>
          </div>

          {/* Phase Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
            {(['inception', 'elaboration', 'construction', 'transition'] as const).map(p => (
              <button
                key={p}
                onClick={() => setSelectedRupPhase(p)}
                className={`flex-1 min-w-[120px] py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedRupPhase === p
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {rupPhases[p].name}
              </button>
            ))}
          </div>

          {/* Phase Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/50">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Milestone Gate</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{currentPhase.milestone}</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Phase Goal</span>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">{currentPhase.objective}</p>
            </div>
          </div>

          {/* Workload Bars for 6 Disciplines */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              Discipline Workload Profile during {currentPhase.name} Phase:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(currentPhase.workloads).map(([discipline, pct]) => (
                <div key={discipline} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{discipline}</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{pct}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">IU Course Book Rule: </strong>
              {currentPhase.examFact}
            </div>
          </div>
        </div>

        {/* Visual 2: Scrum Sprint Cycle Engine */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Section 5.3 Framework</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Scrum Sprint Engine & Artifact Loop
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">3 Roles · 3 Artifacts · 4 Events · Sprint ≤ 1 Month</span>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {scrumSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveScrumStep(idx)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  activeScrumStep === idx
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-400'
                }`}
              >
                <span className="text-[10px] font-bold block opacity-80">Stage {idx + 1}</span>
                <span className="text-xs font-bold line-clamp-1">{s.step.split('. ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="p-6 rounded-2xl bg-sky-50/60 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-800/50 space-y-4">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Active Stage</span>
                <h4 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{currentScrum.step}</h4>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-500 block">Timebox Allowance</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{currentScrum.timebox}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">Ownership & Responsibility:</span>
              <span className="text-sky-700 dark:text-sky-300 font-semibold">{currentScrum.owner}</span>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentScrum.details}
            </p>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>Strict IU Exam Trap: </strong> {currentScrum.rule}
              </div>
            </div>
          </div>
        </div>

        {/* Visual 3: V-Model 1:1 Horizontal Verification Explorer */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Section 5.4 Verification</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                V-Model 1:1 Horizontal Verification Architecture
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Descending Spec ⟷ Ascending Testing</span>
          </div>

          {/* Level Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {vModelLevels.map((lvl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVModelLevel(idx)}
                className={`p-3 rounded-xl text-center border transition-all ${
                  selectedVModelLevel === idx
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md font-bold'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                }`}
              >
                <span className="text-[10px] block opacity-80">Tier {idx + 1}</span>
                <span className="text-xs">{lvl.level.split(': ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Visual Pair Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left Wing: Specification */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Left Wing · Specification (Decomposition)
              </span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">{currentV.left}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentV.leftDesc}
              </p>
            </div>

            {/* Right Wing: Testing */}
            <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/50 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Right Wing · Verification (Integration)
              </span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">{currentV.right}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentV.rightDesc}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-900 dark:text-indigo-300 flex items-center gap-3">
            <GitBranch className="w-5 h-5 shrink-0 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold">{currentV.verification}</span>
          </div>
        </div>
      </div>
    );
  }

  if (unitId === 6) {
    const pmbokGroups = {
      initiating: {
        name: 'Initiating Process Group',
        count: 2,
        pct: '4.3%',
        processes: ['4.1 Develop Project Charter', '13.1 Identify Stakeholders'],
        description: 'Defines a new project or phase by obtaining authorization to start. Produces the Project Charter and Stakeholder Register.'
      },
      planning: {
        name: 'Planning Process Group',
        count: 24,
        pct: '51.1%',
        processes: [
          'Develop Project Management Plan', 'Plan Scope Management', 'Collect Requirements', 'Define Scope', 'Create WBS',
          'Plan Schedule Management', 'Define Activities', 'Sequence Activities', 'Estimate Activity Resources', 'Estimate Activity Durations', 'Develop Schedule',
          'Plan Cost Management', 'Estimate Costs', 'Determine Budget', 'Plan Quality Management', 'Plan Human Resource Management', 'Plan Communications Management',
          'Plan Risk Management', 'Identify Risks', 'Perform Qualitative Risk Analysis', 'Perform Quantitative Risk Analysis', 'Plan Risk Responses',
          'Plan Procurement Management', 'Plan Stakeholder Management'
        ],
        description: 'Establishes the total scope, refines objectives, and develops the course of action. Comprises over 50% of all PMBOK processes (24 out of 47)!'
      },
      executing: {
        name: 'Executing Process Group',
        count: 8,
        pct: '17.0%',
        processes: [
          'Direct and Manage Project Work', 'Perform Quality Assurance', 'Acquire Project Team', 'Develop Project Team',
          'Manage Project Team', 'Manage Communications', 'Conduct Procurements', 'Manage Stakeholder Engagement'
        ],
        description: 'Completes the work defined in the Project Management Plan to satisfy project specifications. Involves coordinating people and resources.'
      },
      monitoring: {
        name: 'Monitoring & Controlling Process Group',
        count: 11,
        pct: '23.4%',
        processes: [
          'Monitor and Control Project Work', 'Perform Integrated Change Control', 'Validate Scope', 'Control Scope',
          'Control Schedule', 'Control Costs', 'Control Quality', 'Control Communications',
          'Control Risks', 'Control Procurements', 'Control Stakeholder Engagement'
        ],
        description: 'Tracks, reviews, and regulates project progress and performance. Identifies areas where changes to the plan are required and initiates corresponding changes.'
      },
      closing: {
        name: 'Closing Process Group',
        count: 2,
        pct: '4.3%',
        processes: ['4.6 Close Project or Phase', '12.4 Close Procurements'],
        description: 'Formally finalizes all activities across all process groups to formally complete the project or phase. Conducts lessons learned and releases resources.'
      }
    };

    const princeRoles = {
      executive: {
        title: 'The Executive (Business Interest)',
        owns: 'Business Case & Project Funding',
        role: 'Key decision maker who ultimately owns the project. Chairs the Project Board and ensures the project delivers value for money and maintains continuous business justification.',
        toleranceFocus: 'Cost, Benefit, and Business Return tolerances.'
      },
      seniorUser: {
        title: 'Senior User (User Interest)',
        owns: 'User Requirements & Benefits Realization',
        role: 'Represents the operational users who will work with the project outputs. Specifies user requirements, verifies product usability, and guarantees operational benefits realization after rollout.',
        toleranceFocus: 'Quality, Scope, and operational benefit tolerances.'
      },
      seniorSupplier: {
        title: 'Senior Supplier (Supplier Interest)',
        owns: 'Technical Delivery & Resource Competence',
        role: 'Represents designers, technical specialists, internal developers, or external suppliers. Guarantees technical feasibility of proposed solutions and supplies qualified production resources.',
        toleranceFocus: 'Time, Technical Quality, and implementation cost tolerances.'
      }
    };

    const pmoTypes = {
      supportive: {
        name: 'Supportive PMO',
        controlLevel: 'Low Control',
        description: 'Acts as a consultative advisory body. Provides project templates, best practices, training, lessons learned repository, and document archives. Projects operate with high autonomy.',
        examPoint: 'Lowest degree of organizational control.'
      },
      controlling: {
        name: 'Controlling PMO',
        controlLevel: 'Moderate Control',
        description: 'Provides support while requiring strict compliance. Enforces specific project management frameworks, templates, governance gates, and periodic audit reporting.',
        examPoint: 'Moderate degree of control; compliance is mandatory.'
      },
      directive: {
        name: 'Directive PMO',
        controlLevel: 'High Control',
        description: 'Directly manages projects by assigning and supervising project managers. Project managers report directly to the PMO rather than functional departmental heads.',
        examPoint: 'Highest degree of control; direct line management of project managers.'
      }
    };

    const scaledFrameworks = {
      sos: {
        name: 'Scrum of Scrums (SoS)',
        champion: 'Jeff Sutherland / Agile Scaling Standard',
        coreConcept: 'Inter-team coordination meeting where designated ambassadors from multiple individual Scrum teams synchronize dependencies.',
        keyFacts: [
          'Teams typically send 1 technical ambassador or Scrum Master.',
          'Maintains 4 standard questions (including Q4: "Are you putting any impediment in the way of other teams?").',
          'Not a status report to management; coordinates cross-team release blocks.'
        ]
      },
      less: {
        name: 'Large-Scale Scrum (LeSS)',
        champion: 'Craig Larman & Bas Vodde',
        coreConcept: '"More with LeSS" principle. Keeps single-team Scrum rules intact while scaling up to 8 feature teams.',
        keyFacts: [
          'EXACTLY ONE Product Owner for all feature teams.',
          'EXACTLY ONE unified Product Backlog for all teams.',
          'All teams share a single integrated Product Increment at the end of every sprint.',
          'LeSS Huge scales to thousands of developers by introducing Area Product Owners (APOs).'
        ]
      },
      safe: {
        name: 'Scaled Agile Framework (SAFe)',
        champion: 'Dean Leffingwell',
        coreConcept: 'Enterprise-level multi-tier framework aligning strategy, portfolio, and execution across hundreds of developers.',
        keyFacts: [
          'Agile Release Train (ART): Cross-functional team-of-teams (50 to 125 people).',
          'Program Increment (PI): Standard planning cadence typically spanning 8 to 12 weeks.',
          'CALMR DevOps Mindset: Culture, Automation, Lean flow, Measurement, Recovery.'
        ]
      }
    };

    const currentPmbok = pmbokGroups[selectedPmbokPG];
    const currentPrince = princeRoles[selectedPrinceRole];
    const currentPmo = pmoTypes[selectedPmoType];
    const currentScaled = scaledFrameworks[selectedScaledFramework];

    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Visual 1: PMBOK 5x10 Process Group Matrix */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Section 6.1 Standard</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                PMBOK Guide 5x10 Process Matrix (47 Processes)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">5 Process Groups · 10 Knowledge Areas · Exactly 47 Processes</span>
          </div>

          {/* Process Group Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(['initiating', 'planning', 'executing', 'monitoring', 'closing'] as const).map(pg => (
              <button
                key={pg}
                onClick={() => setSelectedPmbokPG(pg)}
                className={`p-3 rounded-xl text-center border transition-all ${
                  selectedPmbokPG === pg
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md font-bold'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-rose-400'
                }`}
              >
                <span className="text-[10px] block opacity-80 uppercase tracking-wider">
                  {pmbokGroups[pg].count} Processes ({pmbokGroups[pg].pct})
                </span>
                <span className="text-xs font-bold">{pmbokGroups[pg].name.replace(' Process Group', '')}</span>
              </button>
            ))}
          </div>

          {/* Group Details */}
          <div className="p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/50 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-black text-slate-900 dark:text-white">{currentPmbok.name}</h4>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300">
                {currentPmbok.count} / 47 Total Processes
              </span>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentPmbok.description}
            </p>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                Official PMBOK Processes in this Group:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                {currentPmbok.processes.map((p, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual 2: PRINCE2 Governance Triad & 4 Management Levels */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Section 6.2 Governance</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                PRINCE2 Project Board Triad & Management by Exception
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">7 Principles · 7 Themes · 7 Processes · 6 Tolerances</span>
          </div>

          {/* 4 Management Levels Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 block">Level 1</span>
              <strong className="text-slate-900 dark:text-white">Corporate / Programme</strong>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300">
              <span className="text-[10px] block opacity-80">Level 2 (Directing)</span>
              <strong>Project Board (Triad)</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 block">Level 3 (Managing)</span>
              <strong className="text-slate-900 dark:text-white">Project Manager</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-500 block">Level 4 (Delivering)</span>
              <strong className="text-slate-900 dark:text-white">Team Manager(s)</strong>
            </div>
          </div>

          {/* Triad Role Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {(['executive', 'seniorUser', 'seniorSupplier'] as const).map(role => (
              <button
                key={role}
                onClick={() => setSelectedPrinceRole(role)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  selectedPrinceRole === role
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-400'
                }`}
              >
                <span className="text-[10px] block opacity-80">Project Board Role</span>
                <span className="text-xs font-bold">{princeRoles[role].title.split(' (')[0]}</span>
              </button>
            ))}
          </div>

          {/* Role Details */}
          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/50 space-y-3">
            <h4 className="text-base font-black text-slate-900 dark:text-white">{currentPrince.title}</h4>
            <div className="text-xs font-semibold text-amber-700 dark:text-amber-300">
              Ownership: {currentPrince.owns}
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentPrince.role}
            </p>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-900 dark:text-white">Tolerance Focus: </span>
              <span className="text-slate-600 dark:text-slate-300">{currentPrince.toleranceFocus}</span>
            </div>
          </div>

          {/* 6 Tolerances */}
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-white block">
              PRINCE2 Six Defined Project Tolerances (Management by Exception):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-[11px] font-mono">
              <span className="p-1.5 rounded bg-slate-200 dark:bg-slate-800">1. Time</span>
              <span className="p-1.5 rounded bg-slate-200 dark:bg-slate-800">2. Cost</span>
              <span className="p-1.5 rounded bg-slate-200 dark:bg-slate-800">3. Quality</span>
              <span className="p-1.5 rounded bg-slate-200 dark:bg-slate-800">4. Scope</span>
              <span className="p-1.5 rounded bg-slate-200 dark:bg-slate-800">5. Risk</span>
              <span className="p-1.5 rounded bg-slate-200 dark:bg-slate-800">6. Benefit</span>
            </div>
          </div>
        </div>

        {/* Visual 3: Multi-Project Hierarchy & PMO Authority Selector */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Section 6.3 Governance</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Multi-Project Hierarchy & PMO Authority Types
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">Portfolio ⟷ Programme ⟷ Project</span>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase text-purple-600 dark:text-purple-400">Top Tier · Strategic</span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">Portfolio</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Collection of projects, programmes, and operations managed as a group to achieve strategic objectives. Question: <em>"Are we doing the right things?"</em>
              </p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/50 space-y-2">
              <span className="text-[10px] font-bold uppercase text-purple-600 dark:text-purple-400">Middle Tier · Benefits</span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">Programme</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                A group of related projects managed in a coordinated manner to obtain benefits and control not available from managing them individually.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-[10px] font-bold uppercase text-purple-600 dark:text-purple-400">Execution Tier · Outputs</span>
              <h4 className="text-base font-black text-slate-900 dark:text-white">Project</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Temporary endeavor with defined scope, budget, and deadline to deliver a unique product, service, or result. Focuses on iron triangle constraints.
              </p>
            </div>
          </div>

          {/* PMO Selector */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              PMO Organizational Control Models:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(['supportive', 'controlling', 'directive'] as const).map(pmo => (
                <button
                  key={pmo}
                  onClick={() => setSelectedPmoType(pmo)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedPmoType === pmo
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                      : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-400'
                  }`}
                >
                  <span className="text-[10px] block opacity-80">{pmoTypes[pmo].controlLevel}</span>
                  <span className="text-xs font-bold">{pmoTypes[pmo].name}</span>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/50 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 dark:text-white text-sm">{currentPmo.name}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                  {currentPmo.controlLevel}
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentPmo.description}
              </p>
              <div className="text-[11px] font-semibold text-purple-700 dark:text-purple-300">
                Exam Key: {currentPmo.examPoint}
              </div>
            </div>
          </div>
        </div>

        {/* Visual 4: Scaled Agile Frameworks (SoS, LeSS, SAFe) */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Section 6.4 Scaled Agile</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                Scaled Agile Framework Architectures
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">SoS · LeSS · SAFe</span>
          </div>

          {/* Framework Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {(['sos', 'less', 'safe'] as const).map(fw => (
              <button
                key={fw}
                onClick={() => setSelectedScaledFramework(fw)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  selectedScaledFramework === fw
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-teal-400'
                }`}
              >
                <span className="text-[10px] block opacity-80">{scaledFrameworks[fw].champion}</span>
                <span className="text-xs font-bold">{scaledFrameworks[fw].name}</span>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/50 space-y-3">
            <h4 className="text-base font-black text-slate-900 dark:text-white">{currentScaled.name}</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
              {currentScaled.coreConcept}
            </p>
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 block">
                Official IU Examination Points:
              </span>
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                {currentScaled.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for any unexpected unit
  return (
    <div className="glass-card rounded-2xl p-12 text-center space-y-3 border border-slate-200 dark:border-slate-800">
      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
        <Compass className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-slate-900 dark:text-white">Unit {unitId} Visual Learning</h3>
      <p className="text-xs text-slate-500 max-w-md mx-auto">
        Please select a unit from 1 to 6 to explore interactive visual models.
      </p>
    </div>
  );
};
