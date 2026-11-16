import { Flashcard } from "../../../../types";

export const unit3Flashcards: Flashcard[] = [
  {
    "id": "itpm-u3-fc-001",
    "unit": 3,
    "category": "Cost Estimation",
    "front": "What is cost estimation in IT projects?",
    "back": "The process of predicting monetary resources required for future project activities, including acquisition and recurring running costs (maintenance, support, ops).",
    "examTip": "Covers both acquisition and lifecycle operations."
  },
  {
    "id": "itpm-u3-fc-002",
    "unit": 3,
    "category": "Cost Estimation",
    "front": "What is 'project cost without contingency'?",
    "back": "The raw sum of task costs within work packages, aggregated across all work packages, before risk reserves are added.",
    "examTip": "Straightforward bottom-up sum before risk padding."
  },
  {
    "id": "itpm-u3-fc-003",
    "unit": 3,
    "category": "Cost Estimation",
    "front": "Name the 9 quality attributes of a cost estimate (A-C-C-P-R-D-U-V-V).",
    "back": "Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.",
    "examTip": "Memory aid: A-C-C-P-R-D-U-V-V."
  },
  {
    "id": "itpm-u3-fc-004",
    "unit": 3,
    "category": "Cost Estimation",
    "front": "Distinguish Accuracy from Precision in cost estimates.",
    "back": "Accuracy is closeness to true reality. Precision is level of detail/refinement (granularity/decimals). An estimate can be highly precise but wildly inaccurate.",
    "examTip": "Accuracy = truth; Precision = granularity."
  },
  {
    "id": "itpm-u3-fc-005",
    "unit": 3,
    "category": "Cost Estimation",
    "front": "How do plan-driven and agile estimation differ regarding constraints?",
    "back": "Plan-driven fixes scope (cost/schedule may vary); Agile fixes cost and schedule (scope varies iteratively).",
    "examTip": "Plan-driven = Scope fixed; Agile = Cost/Schedule fixed."
  },
  {
    "id": "itpm-u3-fc-006",
    "unit": 3,
    "category": "Financial",
    "front": "State the formula and interpretation for ROI.",
    "back": "ROI = Net Gain / Project Cost. Higher positive ROI = stronger return; negative = loss.",
    "examTip": "Example: $800k gain / $1M cost = 80%."
  },
  {
    "id": "itpm-u3-fc-007",
    "unit": 3,
    "category": "Financial",
    "front": "What is the Payback Period?",
    "back": "The time required for project cash gains to equal the initial capital investment ('time to break even').",
    "examTip": "Shorter payback recovers capital sooner."
  },
  {
    "id": "itpm-u3-fc-008",
    "unit": 3,
    "category": "Financial",
    "front": "State the Net Present Value (NPV) formula in Unit 3.",
    "back": "NPV = Future Value / (1 + interest)^time periods.",
    "examTip": "Discounts future cash back to present value."
  },
  {
    "id": "itpm-u3-fc-009",
    "unit": 3,
    "category": "Financial",
    "front": "State the Profitability Index formula and decision rule.",
    "back": "Profitability Index = NPV / Project Cost. An index > 1.0 means NPV exceeds project cost.",
    "examTip": "Must exceed 1.0 to be financially viable."
  },
  {
    "id": "itpm-u3-fc-010",
    "unit": 3,
    "category": "Reserves",
    "front": "State the budget reserve hierarchy from bottom to top.",
    "back": "Task Estimate -> Task Contingency -> Work-Package Contingency -> Cost Baseline -> Management Reserve -> Project Budget.",
    "examTip": "Cost baseline includes contingency, but EXCLUDES management reserve."
  },
  {
    "id": "itpm-u3-fc-011",
    "unit": 3,
    "category": "Reserves",
    "front": "What do Contingency Reserves cover?",
    "back": "Identified project risks ('known-unknowns') that have planned mitigation responses.",
    "examTip": "Assigned at task or work package level."
  },
  {
    "id": "itpm-u3-fc-012",
    "unit": 3,
    "category": "Reserves",
    "front": "What do Management Reserves cover?",
    "back": "Unforeseen work within project scope ('unknown-unknowns') withheld for managerial control.",
    "examTip": "Part of Project Budget, but excluded from Cost Baseline."
  },
  {
    "id": "itpm-u3-fc-013",
    "unit": 3,
    "category": "Techniques",
    "front": "What three values are used in Three-Point Estimation?",
    "back": "Optimistic (low/best), Most Probable (likely), and Pessimistic (high/worst).",
    "examTip": "Represents cost as a probability range rather than single point."
  },
  {
    "id": "itpm-u3-fc-014",
    "unit": 3,
    "category": "Techniques",
    "front": "Why is the cost probability curve skewed to the right?",
    "back": "Downside cost overruns can greatly exceed potential savings if all goes well.",
    "examTip": "Not a symmetric normal curve; downside skew."
  },
  {
    "id": "itpm-u3-fc-015",
    "unit": 3,
    "category": "Techniques",
    "front": "What is a Double-Blind Review in expert estimation?",
    "back": "Estimator identity is hidden from reviewer, and reviewer identity is hidden from estimator, reducing bias from power, status, gender, or race.",
    "examTip": "Limitation: in small niche fields, identities may be guessed."
  },
  {
    "id": "itpm-u3-fc-016",
    "unit": 3,
    "category": "Techniques",
    "front": "What does Function Point Analysis (FPA) measure?",
    "back": "The amount of user-visible business functionality a software system provides, independent of programming language or implementation technology.",
    "examTip": "Independent of implementation technology."
  },
  {
    "id": "itpm-u3-fc-017",
    "unit": 3,
    "category": "Techniques",
    "front": "Name the 5 FPA function types (I-O-Q-I-F).",
    "back": "Inputs, Outputs, Inquiries (Transaction functions) and External Interfaces, Internal Logical Files (Data functions).",
    "examTip": "Memory code: I-O-Q-I-F."
  },
  {
    "id": "itpm-u3-fc-018",
    "unit": 3,
    "category": "Techniques",
    "front": "What are the FPA complexity weights for Inputs and Inquiries?",
    "back": "Low = 2, Average = 4, High = 6 (identical for both).",
    "examTip": "Inputs and Inquiries share 2 / 4 / 6 weights."
  },
  {
    "id": "itpm-u3-fc-019",
    "unit": 3,
    "category": "Techniques",
    "front": "What are the FPA complexity weights for Outputs?",
    "back": "Low = 3, Average = 5, High = 7.",
    "examTip": "Outputs: 3 / 5 / 7."
  },
  {
    "id": "itpm-u3-fc-020",
    "unit": 3,
    "category": "Techniques",
    "front": "What are the FPA complexity weights for External Interfaces and Internal Files?",
    "back": "External Interfaces: 5 / 7 / 10. Internal Logical Files: 7 / 10 / 15.",
    "examTip": "Internal Files carry the highest weights: 7 / 10 / 15."
  },
  {
    "id": "itpm-u3-fc-021",
    "unit": 3,
    "category": "Techniques",
    "front": "State the Complexity Adjustment Factor (CAF) formula in FPA.",
    "back": "CAF = 0.01 x TDI + 0.65 (where TDI is Total Degree of Influence across 14 characteristics).",
    "examTip": "If TDI = 34 -> CAF = 0.01*34 + 0.65 = 0.99."
  },
  {
    "id": "itpm-u3-fc-022",
    "unit": 3,
    "category": "Techniques",
    "front": "State the formula for Adjusted Function Points (FP).",
    "back": "FP = UFP x CAF.",
    "examTip": "Unadjusted Function Points multiplied by CAF."
  },
  {
    "id": "itpm-u3-fc-023",
    "unit": 3,
    "category": "Techniques",
    "front": "What is the primary system inadequacy of FPA?",
    "back": "Inadequate for technical systems with complex mathematical algorithms but little visible functionality.",
    "examTip": "Works great for MIS/dialogue apps; poor for pure algorithmic tech systems."
  },
  {
    "id": "itpm-u3-fc-024",
    "unit": 3,
    "category": "Techniques",
    "front": "What is Planning Poker?",
    "back": "An agile consensus estimation method where team members estimate independently with cards and reveal simultaneously to avoid anchoring.",
    "examTip": "Estimates come from people performing work."
  },
  {
    "id": "itpm-u3-fc-025",
    "unit": 3,
    "category": "Techniques",
    "front": "What is the 7-step sequence of Planning Poker?",
    "back": "1. Break work; 2. Agree unit; 3. Estimate independently; 4. Reveal simultaneously; 5. Highest/lowest explain; 6. Discuss; 7. Repeat to consensus.",
    "examTip": "Never average votes; discuss outliers and re-vote."
  },
  {
    "id": "itpm-u3-fc-026",
    "unit": 3,
    "category": "EVM",
    "front": "Define Planned Value (PV).",
    "back": "Authorized budget assigned to scheduled work. 'What should have been accomplished by now.'",
    "examTip": "Total PV over project = PMB = BAC."
  },
  {
    "id": "itpm-u3-fc-027",
    "unit": 3,
    "category": "EVM",
    "front": "Define Earned Value (EV).",
    "back": "Measure of work performed expressed in terms of the budget authorized for that work. 'Budgeted value actually earned.'",
    "examTip": "EV is based on budgeted cost, NOT actual cost."
  },
  {
    "id": "itpm-u3-fc-028",
    "unit": 3,
    "category": "EVM",
    "front": "Define Actual Cost (AC).",
    "back": "The realized cost incurred for work performed up to the present. 'Money actually spent.'",
    "examTip": "AC is real cash expended."
  },
  {
    "id": "itpm-u3-fc-029",
    "unit": 3,
    "category": "EVM",
    "front": "State the Schedule Variance (SV) formula and sign rule.",
    "back": "SV = EV - PV. Positive = ahead of schedule; Negative = behind schedule.",
    "examTip": "Value First: EV comes first."
  },
  {
    "id": "itpm-u3-fc-030",
    "unit": 3,
    "category": "EVM",
    "front": "State the Cost Variance (CV) formula and sign rule.",
    "back": "CV = EV - AC. Positive = under budget (surplus); Negative = over budget (deficit).",
    "examTip": "Value First: EV comes first."
  },
  {
    "id": "itpm-u3-fc-031",
    "unit": 3,
    "category": "EVM",
    "front": "State the Cost Performance Index (CPI) formula and interpretation.",
    "back": "CPI = EV / AC. < 1.0 = cost overrun (inefficient); > 1.0 = cost underrun (favorable efficiency).",
    "examTip": "EV is the numerator."
  },
  {
    "id": "itpm-u3-fc-032",
    "unit": 3,
    "category": "EVM",
    "front": "State the Schedule Performance Index (SPI) formula and interpretation.",
    "back": "SPI = EV / PV. < 1.0 = behind schedule; > 1.0 = ahead of schedule.",
    "examTip": "EV is the numerator."
  },
  {
    "id": "itpm-u3-fc-033",
    "unit": 3,
    "category": "EVM",
    "front": "What does the 'Value First' memory rule dictate?",
    "back": "EV leads in variances (SV = EV - PV; CV = EV - AC) and is the numerator in indices (CPI = EV/AC; SPI = EV/PV).",
    "examTip": "Never start an EVM formula with PV or AC."
  },
  {
    "id": "itpm-u3-fc-034",
    "unit": 3,
    "category": "EVM",
    "front": "State the results of the course book worked EVM example.",
    "back": "BAC=$9,000, PV=$3,000, EV=$2,500, AC=$3,500 -> SV=-$500, CV=-$1,000, CPI=0.71, SPI=0.83 (Behind schedule and over budget).",
    "examTip": "Memorize these exact textbook figures."
  },
  {
    "id": "itpm-u3-fc-035",
    "unit": 3,
    "category": "EVM",
    "front": "What is the 25/75 Rule in earned value measurement?",
    "back": "Credits 25% of budgeted value at task initiation/preparation and 75% upon completion.",
    "examTip": "Used when physical completion is difficult to measure incrementally."
  },
  {
    "id": "itpm-u3-fc-036",
    "unit": 3,
    "category": "EVM",
    "front": "How does a Burn-Down Chart differ from EVM?",
    "back": "EVM compares value earned vs money spent; Burn-down plots remaining effort descending from 100% to 0%.",
    "examTip": "Burn-down shows remaining work; EVM shows performance efficiency."
  },
  {
    "id": "itpm-u3-fc-037",
    "unit": 3,
    "category": "Risk",
    "front": "Why must risk management be continuous across the lifecycle?",
    "back": "Risks change over time: new risks emerge, existing risks change probability/impact, and others vanish.",
    "examTip": "Continuous lifecycle discipline, not a one-time plan."
  },
  {
    "id": "itpm-u3-fc-038",
    "unit": 3,
    "category": "Risk",
    "front": "What is the strategic risk sequence in Unit 3?",
    "back": "Prevention -> Detection -> Response. More effort in prevention reduces later response effort.",
    "examTip": "Prevention first, detection second, response last."
  },
  {
    "id": "itpm-u3-fc-039",
    "unit": 3,
    "category": "Risk",
    "front": "Name the 4 core risk management functions (I-A-M-M).",
    "back": "1. Risk Identification & description; 2. Risk Assessment & analysis; 3. Risk Mitigation/response; 4. Risk Monitoring & reporting.",
    "examTip": "Memory aid: I-A-M-M."
  },
  {
    "id": "itpm-u3-fc-040",
    "unit": 3,
    "category": "Risk",
    "front": "Name the 4 risk response strategies (treatment options).",
    "back": "Avoid, Mitigate, Transfer, Accept.",
    "examTip": "Process = I-A-M-M; Treatment = Avoid, Mitigate, Transfer, Accept."
  },
  {
    "id": "itpm-u3-fc-041",
    "unit": 3,
    "category": "Risk",
    "front": "Name the 5 levels of the Risk Management Maturity Model (A-A-O-M-A).",
    "back": "Level 1: Ad hoc; Level 2: Abbreviated; Level 3: Organized; Level 4: Managed; Level 5: Adaptive.",
    "examTip": "Level 1 is Ad hoc; Level 5 is Adaptive."
  },
  {
    "id": "itpm-u3-fc-042",
    "unit": 3,
    "category": "Risk",
    "front": "Distinguish Bottom-Up and Top-Down risk identification.",
    "back": "Bottom-Up starts at tasks and aggregates to work packages and project; Top-Down starts with project symptoms and investigates down to tasks.",
    "examTip": "Bottom-up = tasks upward; Top-down = project downward."
  },
  {
    "id": "itpm-u3-fc-043",
    "unit": 3,
    "category": "Risk",
    "front": "List Qualitative Risk Analysis tools in Unit 3.",
    "back": "Expert input, past-project reviews, checklists, assumption analysis, cause-and-effect diagrams, influence diagrams, SWOT.",
    "examTip": "Non-numeric evaluation of cause, likelihood, and category."
  },
  {
    "id": "itpm-u3-fc-044",
    "unit": 3,
    "category": "Risk",
    "front": "What core fields comprise the Risk Register (Table 3)?",
    "back": "Risk Description, Likelihood, Severity (Impact), Owner, Mitigation Actions.",
    "examTip": "Table 3 in course book page 79."
  },
  {
    "id": "itpm-u3-fc-045",
    "unit": 3,
    "category": "Risk",
    "front": "What is the role of a Risk Owner?",
    "back": "The designated entity accountable for monitoring risk triggers and managing the agreed mitigation response.",
    "examTip": "Single accountable owner per risk."
  }
];
