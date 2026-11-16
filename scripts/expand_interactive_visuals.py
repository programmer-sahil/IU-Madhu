import os

vis_path = "src/components/InteractiveVisuals.tsx"
with open(vis_path, "r") as f:
    content = f.read()

# Let's locate where unit 2 visuals start:
# In the original file:
#   }
#
#   return (
#     <div className="space-y-8 animate-fadeIn">
# ...
u1_end_marker = "  if (unitId === 1) {"
u2_start_marker = "  // Unit 2 Visuals\n  return ("

# Replace u2_start_marker with if (unitId === 2) { return (
if "if (unitId === 2) {" not in content:
    content = content.replace("  return (\n    <div className=\"space-y-8 animate-fadeIn\">\n      {/* Visual 1: WBS Decomposition Explorer */}", "  if (unitId === 2) {\n    return (\n      <div className=\"space-y-8 animate-fadeIn\">\n        {/* Visual 1: WBS Decomposition Explorer */}")
    # Replace the last `); \n};` with `);\n  }`
    last_return_end = content.rfind("    </div>\n  );\n};")
    if last_return_end != -1:
        u2_content = content[:last_return_end + 11] + "  }\n"
    else:
        # try another pattern
        u2_content = content.rstrip()[:-2] + "\n  }\n"
else:
    u2_content = content

u3_visuals_code = '''
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

  // Fallback for Units 5 & 6
  return (
    <div className="glass-card rounded-2xl p-12 text-center space-y-3 border border-slate-200 dark:border-slate-800">
      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
        <Compass className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-slate-900 dark:text-white">Unit {unitId} Visual Learning In Preparation</h3>
      <p className="text-xs text-slate-500 max-w-md mx-auto">
        Interactive concept maps, process flows, and architectural diagrams for Unit {unitId} are currently being developed.
      </p>
    </div>
  );
};
'''

full_code = u2_content + u3_visuals_code
with open(vis_path, "w") as f:
    f.write(full_code)

print("Updated InteractiveVisuals.tsx with complete Units 3 and 4 visual learning architectures!")

