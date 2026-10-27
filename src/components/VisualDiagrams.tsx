import React, { useState } from 'react';
import { 
  GitBranch, Shield, ArrowRight, Layers, RefreshCw, Cpu, Database, 
  Lock, CheckCircle2, AlertTriangle, Eye, Server, Globe, FileText,
  Users, Scale, Zap, Info, ChevronRight
} from 'lucide-react';

interface DiagramDef {
  id: string;
  unit: number;
  title: string;
  subtitle: string;
  category: string;
}

const diagramsList: DiagramDef[] = [
  { id: 'gov-mgmt', unit: 1, title: 'Governance vs Management', subtitle: 'Board (EDM) vs Executive Management (PBRM)', category: 'Governance' },
  { id: 'why-what-how', unit: 1, title: 'Why → What → How Model', subtitle: 'Motivation, Strategic Objectives & Framework Execution', category: 'Governance' },
  { id: 'pdca', unit: 1, title: 'Deming PDCA Cycle', subtitle: 'Plan-Do-Check-Act Iterative Continual Improvement Loop', category: 'Methodology' },
  { id: 'cobit-structure', unit: 2, title: 'COBIT 2019 Core Model', subtitle: '1 Governance Domain (EDM) & 4 Management Domains (APO, BAI, DSS, MEA)', category: 'COBIT' },
  { id: 'cobit-cascade', unit: 2, title: 'COBIT Goals Cascade', subtitle: 'Stakeholder Needs → 13 Enterprise Goals → 13 Alignment Goals → 40 Objectives', category: 'COBIT' },
  { id: 'risk-formula', unit: 3, title: 'Canonical Risk Formula', subtitle: 'Risk = Threat × Vulnerability × Asset Value', category: 'Risk & Controls' },
  { id: 'inherent-residual', unit: 3, title: 'Inherent → Controls → Residual Risk', subtitle: 'Risk Appetite Boundary and Net Risk Calculation', category: 'Risk & Controls' },
  { id: 'control-categories', unit: 3, title: 'Control Categories (3 Mechanisms)', subtitle: 'Administrative, Physical, and Technical / Logical Controls', category: 'Risk & Controls' },
  { id: 'six-control-types', unit: 3, title: 'Six Control Types (Timing & Purpose)', subtitle: 'Preventative, Deterrent, Detective, Directive, Corrective, Compensatory', category: 'Risk & Controls' },
  { id: 'risk-treatment', unit: 3, title: 'Four Risk Treatments', subtitle: 'Mitigate (Modify), Avoid, Transfer (Share), Accept', category: 'Risk & Controls' },
  { id: 'bsi-process', unit: 4, title: 'BSI IT-Grundschutz 6 Steps', subtitle: 'Structural Analysis to Implementation Planning (BSI 200-2)', category: 'BSI Grundschutz' },
  { id: 'bsi-principles', unit: 4, title: 'Maximum, Accumulation & Distribution', subtitle: 'The 3 Rules of Protection Requirement Determination', category: 'BSI Grundschutz' },
  { id: 'itil-svs', unit: 5, title: 'ITIL V4 Service Value System (SVS)', subtitle: 'From Demand/Opportunity to Co-created Value', category: 'ITIL & ITSM' },
  { id: 'itil-svc', unit: 5, title: 'ITIL V4 Service Value Chain (6 Activities)', subtitle: 'Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support', category: 'ITIL & ITSM' },
  { id: 'itil-dimensions', unit: 5, title: 'Four Dimensions of Service Management', subtitle: 'Organizations & People, Info & Tech, Partners & Suppliers, Value Streams & Processes', category: 'ITIL & ITSM' },
  { id: 'controller-processor', unit: 6, title: 'Data Controller vs Data Processor', subtitle: 'Purposes & Means vs Processing on Behalf (Art. 28 DPA)', category: 'IT Law & GDPR' },
  { id: 'pseudo-anon', unit: 6, title: 'Pseudonymisation vs Anonymisation', subtitle: 'Reversible (GDPR Applies) vs Irreversible (Outside GDPR)', category: 'IT Law & GDPR' },
  { id: 'gdpr-breach-flow', unit: 6, title: 'GDPR 72-Hour Breach Notification Workflow', subtitle: 'Incident Discovery, Risk Assessment, DPA & Data Subject Reporting', category: 'IT Law & GDPR' }
];

export const VisualDiagrams: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<string>('gov-mgmt');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const current = diagramsList.find(d => d.id === activeDiagram) || diagramsList[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
              Interactive Architecture & Concept Maps
            </span>
            <span className="text-xs text-slate-500">18 Visual Models</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Visual Learning System
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Interactive, responsive diagrams for high-yield exam concepts. Click nodes to inspect exam details.
          </p>
        </div>
      </div>

      {/* Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {diagramsList.map(diag => (
          <button
            key={diag.id}
            onClick={() => {
              setActiveDiagram(diag.id);
              setSelectedNode(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeDiagram === diag.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700/60'
            }`}
          >
            Unit {diag.unit}: {diag.title}
          </button>
        ))}
      </div>

      {/* Main Diagram Canvas Card */}
      <div className="glass-card rounded-2xl p-6 relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">
              Unit {current.unit} • {current.category}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {current.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {current.subtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            Interactive SVG Canvas
          </span>
        </div>

        {/* Dynamic Diagram Renderers */}
        <div className="min-h-[380px] flex items-center justify-center py-4">
          {activeDiagram === 'gov-mgmt' && (
            <div className="w-full max-w-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Governance Box */}
                <div 
                  onClick={() => setSelectedNode('governance')}
                  className={`cursor-pointer rounded-xl p-5 border transition-all ${
                    selectedNode === 'governance' 
                      ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 shadow-glow-indigo' 
                      : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                      Governance (EDM)
                    </span>
                    <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Governing Body / Board of Directors
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Evaluates stakeholder needs, Directs strategic priorities and risk appetite, and Monitors performance & compliance.
                  </p>
                  <div className="flex gap-2 mt-4 text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-indigo-600">E: Evaluate</span>
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-indigo-600">D: Direct</span>
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-indigo-600">M: Monitor</span>
                  </div>
                </div>

                {/* Management Box */}
                <div 
                  onClick={() => setSelectedNode('management')}
                  className={`cursor-pointer rounded-xl p-5 border transition-all ${
                    selectedNode === 'management' 
                      ? 'bg-blue-50/90 dark:bg-blue-950/60 border-blue-500 shadow-md' 
                      : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                      Management (PBRM)
                    </span>
                    <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Executive Management (CEO, CIO, CTO)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Plans, Builds, Runs, and Monitors operational IT activities in alignment with Board direction to achieve enterprise goals.
                  </p>
                  <div className="flex gap-2 mt-4 text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-blue-600">P: Plan</span>
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-blue-600">B: Build</span>
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-blue-600">R: Run</span>
                    <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 font-semibold text-blue-600">M: Monitor</span>
                  </div>
                </div>
              </div>

              {/* Interaction Flow */}
              <div className="bg-slate-100/70 dark:bg-slate-800/40 rounded-xl p-4 flex flex-col md:flex-row items-center justify-around gap-4 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Board sets Direction & Appetite</span>
                  <ArrowRight className="w-4 h-4 text-indigo-500" />
                  <span>Management Executes</span>
                </div>
                <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700" />
                <div className="flex items-center gap-2">
                  <span>Management Reports Metrics</span>
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Board Monitors Performance</span>
                </div>
              </div>
            </div>
          )}

          {activeDiagram === 'why-what-how' && (
            <div className="w-full max-w-3xl space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  onClick={() => setSelectedNode('why')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedNode === 'why' ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/50' : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-indigo-600 uppercase mb-1">1. WHY</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Drivers & Motivation</h4>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Statutory mandates (GDPR, SOX)</li>
                    <li>• Cyber threats & operational risks</li>
                    <li>• Wasteful IT expenditures</li>
                    <li>• Digital competitive pressure</li>
                  </ul>
                </div>

                <div 
                  onClick={() => setSelectedNode('what')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedNode === 'what' ? 'border-purple-500 bg-purple-50/80 dark:bg-purple-950/50' : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-purple-600 uppercase mb-1">2. WHAT</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Strategic Objectives</h4>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• Strategic business-IT alignment</li>
                    <li>• Tangible business value realization</li>
                    <li>• Risk optimization & tolerance boundaries</li>
                    <li>• Governance policies & principles</li>
                  </ul>
                </div>

                <div 
                  onClick={() => setSelectedNode('how')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedNode === 'how' ? 'border-teal-500 bg-teal-50/80 dark:bg-teal-950/50' : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-teal-600 uppercase mb-1">3. HOW</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Frameworks & Execution</h4>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
                    <li>• COBIT 2019 Core Model & Design</li>
                    <li>• ITIL V4 Service Management</li>
                    <li>• ISO/IEC 27001 ISMS & Controls</li>
                    <li>• BSI IT-Grundschutz Compendium</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-lg text-xs text-center text-slate-600 dark:text-slate-400">
                Exam Key: The Board defines the <strong>Why</strong> and the <strong>What</strong>; Executive Management executes the <strong>How</strong>.
              </div>
            </div>
          )}

          {activeDiagram === 'pdca' && (
            <div className="w-full max-w-2xl py-2">
              <div className="grid grid-cols-2 gap-4">
                <div 
                  onClick={() => setSelectedNode('plan')}
                  className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 cursor-pointer hover:border-blue-500"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-blue-700 dark:text-blue-300">1. PLAN</span>
                    <span className="text-xs bg-blue-200 dark:bg-blue-900 px-2 py-0.5 rounded text-blue-800 dark:text-blue-200">Design</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Establish ISMS objectives, risk assessment criteria, policies, and target metrics.
                  </p>
                </div>

                <div 
                  onClick={() => setSelectedNode('do')}
                  className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/40 cursor-pointer hover:border-emerald-500"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">2. DO</span>
                    <span className="text-xs bg-emerald-200 dark:bg-emerald-900 px-2 py-0.5 rounded text-emerald-800 dark:text-emerald-200">Execute</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Deploy security controls, execute operational workflows, train employees, and manage processes.
                  </p>
                </div>

                <div 
                  onClick={() => setSelectedNode('act')}
                  className="p-4 rounded-xl border border-purple-200 dark:border-purple-900 bg-purple-50/70 dark:bg-purple-950/40 cursor-pointer hover:border-purple-500"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-purple-700 dark:text-purple-300">4. ACT (Adjust)</span>
                    <span className="text-xs bg-purple-200 dark:bg-purple-900 px-2 py-0.5 rounded text-purple-800 dark:text-purple-200">Improve</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Implement corrective and preventive actions to close audit gaps and continually improve.
                  </p>
                </div>

                <div 
                  onClick={() => setSelectedNode('check')}
                  className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/70 dark:bg-amber-950/40 cursor-pointer hover:border-amber-500"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-amber-700 dark:text-amber-300">3. CHECK</span>
                    <span className="text-xs bg-amber-200 dark:bg-amber-900 px-2 py-0.5 rounded text-amber-800 dark:text-amber-200">Measure</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Monitor, measure, and audit performance against target baseline metrics and policies.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeDiagram === 'cobit-structure' && (
            <div className="w-full max-w-3xl space-y-4">
              {/* Governance Tier */}
              <div 
                onClick={() => setSelectedNode('edm')}
                className="p-4 rounded-xl border-2 border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-indigo-700 dark:text-indigo-300 text-sm">
                    GOVERNANCE DOMAIN (Board of Directors) — 5 Objectives
                  </span>
                  <span className="badge-keyword">Sole Governance Domain</span>
                </div>
                <div className="font-semibold text-slate-900 dark:text-white text-base">
                  EDM: Evaluate, Direct and Monitor (EDM01 to EDM05)
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  EDM01 Framework • EDM02 Benefits • EDM03 Risk Optimization • EDM04 Resource Optimization • EDM05 Stakeholder
                </div>
              </div>

              {/* Management Tier */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div 
                  onClick={() => setSelectedNode('apo')}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-blue-400"
                >
                  <div className="text-xs font-bold text-blue-600">APO (14)</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Align, Plan, Organize</div>
                  <div className="text-[11px] text-slate-500 mt-1">Strategy, Architecture, Portfolio, Risk, Security</div>
                </div>

                <div 
                  onClick={() => setSelectedNode('bai')}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-blue-400"
                >
                  <div className="text-xs font-bold text-teal-600">BAI (11)</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Build, Acquire, Implement</div>
                  <div className="text-[11px] text-slate-500 mt-1">Programs, Requirements, Solutions, IT Changes</div>
                </div>

                <div 
                  onClick={() => setSelectedNode('dss')}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-blue-400"
                >
                  <div className="text-xs font-bold text-amber-600">DSS (6)</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Deliver, Service, Support</div>
                  <div className="text-[11px] text-slate-500 mt-1">Operations, Incidents, Problems, Security Services</div>
                </div>

                <div 
                  onClick={() => setSelectedNode('mea')}
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-blue-400"
                >
                  <div className="text-xs font-bold text-rose-600">MEA (4)</div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Monitor, Evaluate, Assess</div>
                  <div className="text-[11px] text-slate-500 mt-1">Performance, Internal Controls, Compliance</div>
                </div>
              </div>

              <div className="text-center text-xs font-mono text-slate-500 dark:text-slate-400">
                Formula: 5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA = 40 Core Model Objectives
              </div>
            </div>
          )}

          {activeDiagram === 'cobit-cascade' && (
            <div className="w-full max-w-3xl space-y-3">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-600">TIER 1</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Stakeholder Drivers & Needs</h4>
                </div>
                <span className="text-xs text-slate-500">Market, regulations, society, economy</span>
              </div>

              <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-indigo-500 rotate-90" /></div>

              <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-600">TIER 2</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">13 Enterprise Goals (EG)</h4>
                </div>
                <span className="badge-keyword">Balanced Scorecard (4 Perspectives)</span>
              </div>

              <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-indigo-500 rotate-90" /></div>

              <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600">TIER 3</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">13 Alignment Goals (AG)</h4>
                </div>
                <span className="badge-keyword">Formerly "IT-related goals"</span>
              </div>

              <div className="flex justify-center"><ArrowRight className="w-4 h-4 text-indigo-500 rotate-90" /></div>

              <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-600">TIER 4</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">40 Governance & Management Objectives (GMO)</h4>
                </div>
                <span className="badge-keyword">EDM, APO, BAI, DSS, MEA</span>
              </div>
            </div>
          )}

          {activeDiagram === 'risk-formula' && (
            <div className="w-full max-w-2xl text-center space-y-6">
              <div className="inline-flex items-center gap-3 bg-slate-100 dark:bg-slate-800/90 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-lg font-mono font-bold">
                <span className="text-rose-600 dark:text-rose-400">Risk</span>
                <span>=</span>
                <span className="text-amber-600 dark:text-amber-400">Threat</span>
                <span>×</span>
                <span className="text-blue-600 dark:text-blue-400">Vulnerability</span>
                <span>×</span>
                <span className="text-emerald-600 dark:text-emerald-400">Asset Value</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-3 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50/60 dark:bg-amber-950/30">
                  <div className="font-bold text-amber-700 dark:text-amber-300 text-xs">THREAT</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Potential external or internal event/actor capable of harm (e.g. ransomware group, hurricane).
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30">
                  <div className="font-bold text-blue-700 dark:text-blue-300 text-xs">VULNERABILITY</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Internal weakness, flaw, or missing control that can be exploited (e.g. unpatched software).
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/30">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300 text-xs">ASSET VALUE</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Worth of the asset (financial value, confidentiality, integrity, availability, regulatory fines).
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 italic">
                Axiom: If any of the three factors is zero, calculated risk is ZERO.
              </div>
            </div>
          )}

          {activeDiagram === 'inherent-residual' && (
            <div className="w-full max-w-2xl space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-1/3 p-4 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/70 dark:bg-rose-950/40 text-center">
                  <div className="text-xs font-bold text-rose-600 uppercase">Gross Exposure</div>
                  <div className="font-bold text-slate-900 dark:text-white text-base">Inherent Risk</div>
                  <div className="text-xs text-slate-500 mt-1">Risk before any controls</div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">− Subtract</span>
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                    Impact of Controls
                  </div>
                </div>

                <div className="w-full md:w-1/3 p-4 rounded-xl border border-emerald-300 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/40 text-center">
                  <div className="text-xs font-bold text-emerald-600 uppercase">Net Exposure</div>
                  <div className="font-bold text-slate-900 dark:text-white text-base">Residual Risk</div>
                  <div className="text-xs text-slate-500 mt-1">Risk remaining after controls</div>
                </div>
              </div>

              {/* Appetite Boundary */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-indigo-400 dark:border-indigo-600 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Governance Compliance Boundary
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                  Residual Risk MUST fall within approved Risk Appetite (set by the Board)
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  If Residual Risk &gt; Risk Appetite: Apply further risk treatment (Mitigate, Transfer, or Avoid).
                </div>
              </div>
            </div>
          )}

          {activeDiagram === 'bsi-process' && (
            <div className="w-full max-w-3xl space-y-2">
              {[
                { step: 1, title: 'Structural Analysis (Strukturanalyse)', desc: 'Inventory business processes, applications, IT systems, networks, premises' },
                { step: 2, title: 'Determination of Protection Requirements (Schutzbedarfsfeststellung)', desc: 'Assign Normal, High, or Very High across CIA; apply Maximum, Accumulation, Distribution' },
                { step: 3, title: 'Modelling (Modellierung)', desc: 'Map IT assets to IT-Grundschutz Compendium modules' },
                { step: 4, title: 'IT-Grundschutz Check (Soll-Ist-Vergleich)', desc: 'Compare target module requirements (Soll) against actual measures (Ist) to find gaps' },
                { step: 5, title: 'Supplementary Risk Analysis (Ergänzende Risikoanalyse - BSI 200-3)', desc: 'Conduct custom risk analysis for High/Very High assets or novel threat environments' },
                { step: 6, title: 'Implementation Planning (Umsetzungsplanung)', desc: 'Prioritize core requirements, allocate budget, deploy technical and organizational measures' }
              ].map(s => (
                <div key={s.step} className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white">{s.title}: </span>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeDiagram === 'bsi-principles' && (
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30">
                <span className="text-xs font-bold text-blue-600 uppercase">Default Baseline</span>
                <h4 className="font-bold text-slate-900 dark:text-white mt-1 mb-2">Maximum Principle</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  An IT component inherits the <strong>HIGHEST</strong> protection requirement of any application running on it.
                </p>
                <div className="mt-3 text-[11px] font-mono text-blue-700 dark:text-blue-300">
                  App A (Normal) + App B (Very High) → Host = Very High
                </div>
              </div>

              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50/60 dark:bg-rose-950/30">
                <span className="text-xs font-bold text-rose-600 uppercase">Upward Modifier</span>
                <h4 className="font-bold text-slate-900 dark:text-white mt-1 mb-2">Accumulation Effect</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Multiple "Normal" applications aggregate on one component, where simultaneous failure causes catastrophic damage, <strong>ELEVATING</strong> the requirement.
                </p>
                <div className="mt-3 text-[11px] font-mono text-rose-700 dark:text-rose-300">
                  50 × Normal → Elevated to High or Very High
                </div>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/60 dark:bg-emerald-950/30">
                <span className="text-xs font-bold text-emerald-600 uppercase">Downward Modifier</span>
                <h4 className="font-bold text-slate-900 dark:text-white mt-1 mb-2">Distribution Effect</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Architectural redundancy and clustering ensure a single node failure causes zero outage, <strong>LOWERING</strong> that node's requirement (Availability).
                </p>
                <div className="mt-3 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
                  Geo-redundancy lowers individual server to Normal
                </div>
              </div>
            </div>
          )}

          {activeDiagram === 'itil-svc' && (
            <div className="w-full max-w-3xl space-y-4 text-center">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800 font-bold text-sm text-indigo-700 dark:text-indigo-300">
                Plan (Ensures shared understanding of vision, status & improvement)
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <span className="font-bold text-blue-600">Engage</span>
                  <p className="text-slate-500 mt-1">Understands stakeholder needs & demand</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <span className="font-bold text-purple-600">Design & Transition</span>
                  <p className="text-slate-500 mt-1">Meets expectations for cost, quality, speed</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <span className="font-bold text-teal-600">Obtain / Build</span>
                  <p className="text-slate-500 mt-1">Service components available to specs</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                  <span className="font-bold text-emerald-600">Deliver & Support</span>
                  <p className="text-slate-500 mt-1">Day-to-day operations & SLAs</p>
                </div>
              </div>

              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl border border-indigo-200 dark:border-indigo-800 font-bold text-sm text-indigo-700 dark:text-indigo-300">
                Improve (Continual improvement across all 4 dimensions & activities)
              </div>
            </div>
          )}

          {activeDiagram === 'gdpr-breach-flow' && (
            <div className="w-full max-w-2xl space-y-3">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500">STEP 1</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Breach Detected / Confirmed</h4>
                </div>
                <span className="text-xs text-rose-500 font-bold">72-Hour Clock Starts</span>
              </div>

              <div className="p-3 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-indigo-600">STEP 2 (If Processor)</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Processor Notifies Controller</h4>
                </div>
                <span className="badge-keyword">Without Undue Delay</span>
              </div>

              <div className="p-3 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/40 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-purple-600">STEP 3</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Controller Risk Assessment</h4>
                </div>
                <span className="text-xs text-slate-500">Likely risk to rights & freedoms?</span>
              </div>

              <div className="p-3 rounded-xl border border-rose-300 dark:border-rose-900 bg-rose-50/80 dark:bg-rose-950/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-rose-600">STEP 4: Art. 33 DPA Notification</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Controller Notifies Supervisory Authority</h4>
                </div>
                <span className="font-mono font-bold text-rose-600 text-xs">Max 72 Hours</span>
              </div>

              <div className="p-3 rounded-xl border border-amber-300 dark:border-amber-900 bg-amber-50/80 dark:bg-amber-950/50 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-600">STEP 5: Art. 34 Individual Notification</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Notify Affected Data Subjects</h4>
                </div>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300">Mandatory if HIGH RISK</span>
              </div>
            </div>
          )}

          {/* Fallback for other diagrams */}
          {!['gov-mgmt', 'why-what-how', 'pdca', 'cobit-structure', 'cobit-cascade', 'risk-formula', 'inherent-residual', 'bsi-process', 'bsi-principles', 'itil-svc', 'gdpr-breach-flow'].includes(activeDiagram) && (
            <div className="w-full max-w-2xl text-center p-6 space-y-4">
              <div className="inline-flex p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                <Layers className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {current.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                {current.subtitle}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-left space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white">Core Architectural Insights:</div>
                <p className="text-slate-600 dark:text-slate-300">
                  Inspect the corresponding unit cheat sheets and descriptive questions for complete mathematical, regulatory, and process formulations.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
