with open("src/components/LastMinuteRevision.tsx", "r") as f:
    text = f.read()

itpm_checklist = """const defaultItpmNightBeforeChecklist = [
  'Memorized IT Project = Temporary + Unique deliverable vs Business Operations = Repetitive + Ongoing',
  'Memorized Triple Constraint (Scope, Time, Cost) & Quintuple Constraints (Schedule, Cost, Context, Technical, Financing)',
  'Memorized 4 PM Roles: Initiator, Planner, Implementer, Controller',
  'Memorized 100% Rule in WBS: Captures 100% of scope; no extra work, no omissions',
  'Memorized 4 Precedence Types: FS (standard), SS, FF, SF (rarest) and Critical Path Total Float = 0',
  'Memorized PERT Formulas: TE = (o + 4m + p)/6 and sigma = (p - o)/6; 68% (1σ), 95% (2σ), 99.7% (3σ)',
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
"""

# Insert itpm checklist after defaultCgitNightBeforeChecklist
if "defaultItpmNightBeforeChecklist" not in text:
    anchor = "const defaultCgitNightBeforeChecklist = ["
    pos = text.find(anchor)
    end_bracket = text.find("];\n", pos) + 3
    text = text[:end_bracket] + "\n" + itpm_checklist + text[end_bracket:]

# Replace checklist reference
if "const activeChecklist =" not in text:
    target = "  const currentUnitData = getUnitById(activeUnit) || units[0];"
    replacement = """  const activeChecklist = currentSubject.slug === 'it-project-management'
    ? defaultItpmNightBeforeChecklist
    : defaultCgitNightBeforeChecklist;

  const currentUnitData = getUnitById(activeUnit) || units[0];"""
    text = text.replace(target, replacement)
    text = text.replace("defaultCgitNightBeforeChecklist.map((item, idx)", "activeChecklist.map((item, idx)")
    text = text.replace("defaultCgitNightBeforeChecklist.length", "activeChecklist.length")

with open("src/components/LastMinuteRevision.tsx", "w") as f:
    f.write(text)

print("Updated LastMinuteRevision.tsx successfully!")

