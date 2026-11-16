import { UnitData } from "../../../../types";
import { unit3Mcqs } from "./mcqs";
import { unit3Flashcards } from "./flashcards";
import { unit3ImportantQuestions } from "./qa";
import { unit3Concepts, unit3SummarySections } from "./concepts";
import { unit3Comparisons } from "./comparisons";
import { unit3ExamTraps } from "./traps";
import { unit3Formulas } from "./formulas";
import { unit3Visuals } from "./visuals";
import { unit3MockExams } from "./mockExams";

export {
  unit3Mcqs,
  unit3Flashcards,
  unit3ImportantQuestions,
  unit3Concepts,
  unit3SummarySections,
  unit3Comparisons,
  unit3ExamTraps,
  unit3Formulas,
  unit3Visuals,
  unit3MockExams
};

export const unit3Data: UnitData = {
  id: 3,
  code: "DLMBITPAM01-U03",
  title: "Cost Estimation and Controlling",
  subtitle: "Cost estimation challenges, quality attributes (A-C-C-P-R-D-U-V-V), FPA, planning poker, EVM metrics & calculations, and risk lifecycle management.",
  estimatedTime: "3 hours",
  color: "from-indigo-600 to-teal-600",
  gradient: "linear-gradient(135deg, #4f46e5 0%, #0d9488 100%)",
  badge: "Unit 3",
  overview: "Official curriculum for Unit 3 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers challenges of cost estimation in IT, the nine estimate quality attributes (A-C-C-P-R-D-U-V-V), budget reserves hierarchy, cost-benefit metrics (ROI, Payback, NPV, Profitability Index), estimation techniques (three-point estimation, expert double-blind review, Function Point Analysis, planning poker), Earned Value Analysis (PV, EV, AC, SV, CV, CPI, SPI, 25/75 rule, burn-down), and risk management (I-A-M-M cycle, response strategies, 5-level maturity model, risk register).",
  summarySections: unit3SummarySections,
  keyConcepts: unit3Concepts,
  cheatSheet: {
    mustMemorize: [
      "Quality attributes (A-C-C-P-R-D-U-V-V): Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.",
      "Plan-driven: scope fixed (cost/schedule vary); Agile: cost/schedule fixed (scope varies).",
      "Cost-benefit metrics: ROI = Net Gain / Project Cost; Payback = time to break even; NPV = FV / (1+i)^t; Profitability Index = NPV / Cost.",
      "Budget hierarchy: Task -> Task Contingency -> WP Contingency -> Cost Baseline -> Management Reserve -> Project Budget.",
      "Contingency Reserve = Known-unknowns (in baseline). Management Reserve = Unknown-unknowns (outside baseline).",
      "Three-point: Optimistic, Most Probable, Pessimistic. Skewed distribution because downside overruns exceed potential savings.",
      "Double-blind review hides estimator and reviewer identities to remove power, status, gender, and racial bias.",
      "FPA measures user-visible business functionality independent of programming language.",
      "5 FPA types (I-O-Q-I-F): Inputs (2/4/6), Outputs (3/5/7), Inquiries (2/4/6), Interfaces (5/7/10), Files (7/10/15).",
      "FPA formulas: CAF = 0.01 x TDI + 0.65; FP = UFP x CAF. (TDI = 34 -> CAF = 0.99).",
      "Planning Poker: 7-step consensus process. Simultaneous reveal avoids anchoring. Never average votes.",
      "EVM base metrics: PV (should have been done), EV (budget earned), AC (real money spent).",
      "VALUE FIRST: SV = EV - PV; CV = EV - AC; CPI = EV / AC; SPI = EV / PV.",
      "Variances: Positive SV = ahead; Negative SV = behind. Positive CV = under budget; Negative CV = over budget.",
      "Indices: CPI/SPI < 1.0 = unfavorable (overrun/behind); > 1.0 = favorable (underrun/ahead).",
      "Textbook example: BAC=$9,000, PV=$3,000, EV=$2,500, AC=$3,500 -> SV=-$500, CV=-$1,000, CPI=0.71, SPI=0.83.",
      "25/75 Rule: 25% credited at start/prep, 75% at completion when physical progress is hard to measure.",
      "EVM vs Burn-down: EVM measures value earned vs cost; Burn-down plots remaining effort descending from 100% to 0%.",
      "Continuous risk management: Prevention -> Detection -> Response.",
      "Four risk functions (I-A-M-M): Identify, Assess, Mitigate, Monitor.",
      "Four risk responses: Avoid, Mitigate, Transfer, Accept. (Process != Treatment options).",
      "Five maturity levels (A-A-O-M-A): Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.",
      "Risk Register fields: Description, Likelihood, Severity, Owner, Mitigation Actions."
    ],
    coreDefinitions: [
      { term: "Planned Value (PV)", definition: "Authorized budget assigned to scheduled work ('what should have been accomplished by now').", examNote: "Total PV over project = PMB = BAC." },
      { term: "Earned Value (EV)", definition: "Budgeted value of work actually performed ('budgeted value actually earned').", examNote: "EV leads in SV, CV, CPI, and SPI." },
      { term: "Actual Cost (AC)", definition: "Realized cost incurred for work performed to date ('money actually spent').", examNote: "CV compares EV with AC." },
      { term: "Function Point Analysis", definition: "A standardized technique measuring user-visible business functionality independent of implementation technology.", examNote: "Sizing metric; still requires conversion to effort/cost." },
      { term: "Risk Register", definition: "Living document tracking risk description, likelihood, severity, assigned owner, and mitigation actions.", examNote: "Updated continuously across all project phases." }
    ],
    importantNumbers: [
      { number: "9", label: "Estimate Quality Characteristics", context: "Accuracy, Confidence, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification." },
      { number: "3", label: "Three-Point Values", context: "Optimistic, Most Probable, Pessimistic." },
      { number: "5", label: "FPA Function Types", context: "Inputs, Outputs, Inquiries, External Interfaces, Internal Logical Files." },
      { number: "0.65", label: "CAF Baseline Constant", context: "Formula: CAF = 0.01 x TDI + 0.65." },
      { number: "4", label: "EVM Formulas", context: "SV = EV - PV, CV = EV - AC, CPI = EV / AC, SPI = EV / PV." },
      { number: "25/75", label: "Earned Value Crediting Rule", context: "25% credited at start/preparation, 75% credited upon completion." },
      { number: "4", label: "Risk Management Functions", context: "Identify, Assess, Mitigate, Monitor (I-A-M-M)." },
      { number: "4", label: "Risk Response Strategies", context: "Avoid, Mitigate, Transfer, Accept." },
      { number: "5", label: "Risk Management Maturity Levels", context: "Ad hoc, Abbreviated, Organized, Managed, Adaptive (A-A-O-M-A)." }
    ],
    frameworkNames: [
      { acronym: "A-C-C-P-R-D-U-V-V", fullName: "Estimate Quality Framework", focus: "Nine characteristics governing defensible cost estimates." },
      { acronym: "FPA", fullName: "Function Point Analysis", focus: "Technology-independent software functional sizing." },
      { acronym: "EVM", fullName: "Earned Value Management", focus: "Integrated scope, schedule, and cost performance control." },
      { acronym: "I-A-M-M", fullName: "Risk Management Cycle", focus: "Identify -> Assess -> Mitigate -> Monitor." },
      { acronym: "A-A-O-M-A", fullName: "Risk Maturity Model", focus: "Five organizational maturity levels (Ad hoc to Adaptive)." }
    ],
    processes: [
      {
        name: "EVM Performance Calculation",
        steps: [
          "1. Determine PV from schedule baseline, EV from completed work, and AC from actual expenditures",
          "2. Calculate Schedule Variance: SV = EV - PV (Positive = ahead, Negative = behind)",
          "3. Calculate Cost Variance: CV = EV - AC (Positive = under budget, Negative = over budget)",
          "4. Calculate Cost Performance Index: CPI = EV / AC (< 1 overrun, > 1 efficient)",
          "5. Calculate Schedule Performance Index: SPI = EV / PV (< 1 behind, > 1 ahead)",
          "6. Determine overall project status and execute corrective actions"
        ],
        description: "Standard earned value variance and index calculation workflow."
      },
      {
        name: "Function Point Sizing Process",
        steps: [
          "1. Catalog elementary functions: Inputs, Outputs, Inquiries, Interfaces, Files",
          "2. Assign Low/Average/High weights to compute Unadjusted Function Points (UFP)",
          "3. Score 14 system characteristics (0 to 5) and sum to obtain Total Degree of Influence (TDI)",
          "4. Compute Complexity Adjustment Factor: CAF = 0.01 x TDI + 0.65",
          "5. Compute Adjusted Function Points: FP = UFP x CAF",
          "6. Convert FP to effort and cost using historical team productivity"
        ],
        description: "Algorithmic functional size determination process."
      }
    ],
    comparisons: [
      {
        conceptA: "Earned Value Management",
        conceptB: "Burn-Down Chart",
        comparisonPoints: [
          { criterion: "Focus", detailA: "Measures value earned vs budget spent against baseline", detailB: "Plots remaining sprint effort descending toward zero" },
          { criterion: "Currency", detailA: "Monetary values (dollars, euros)", detailB: "Effort units (hours, story points)" }
        ]
      }
    ],
    examTraps: [
      { trap: "Reversing SV or CV formulas", truth: "VALUE FIRST: EV always leads (SV = EV - PV; CV = EV - AC)." },
      { trap: "Including Management Reserve in Cost Baseline", truth: "Cost Baseline EXCLUDES Management Reserve; Project Budget includes it." },
      { trap: "Confusing I-A-M-M with Avoid/Mitigate/Transfer/Accept", truth: "I-A-M-M is the 4-step process; M-A-T-A is the 4 treatment options." }
    ],
    memoryShortcuts: [
      { acronym: "VALUE FIRST", meaning: "EV leads in all variances and sits in the numerator of all indices", usage: "EVM calculations" },
      { acronym: "A-C-C-P-R-D-U-V-V", meaning: "Accuracy, Confidence, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification", usage: "Estimate quality" },
      { acronym: "A-A-O-M-A", meaning: "Ad hoc (1), Abbreviated (2), Organized (3), Managed (4), Adaptive (5)", usage: "Risk maturity ladder" }
    ]
  },
  importantQuestions: unit3ImportantQuestions,
  flashcards: unit3Flashcards,
  mcqs: unit3Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Evaluate cost estimates against the 9 quality attributes (A-C-C-P-R-D-U-V-V)",
    "Calculate ROI, Payback Period, NPV, and Profitability Index",
    "Calculate Unadjusted Function Points, CAF, and Adjusted Function Points",
    "Perform EVM calculations: PV, EV, AC, SV, CV, CPI, SPI and interpret status",
    "Apply continuous risk management (I-A-M-M) and evaluate risk maturity (A-A-O-M-A)"
  ]
};
