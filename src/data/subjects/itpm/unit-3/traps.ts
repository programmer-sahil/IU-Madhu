import { ExamTrapItem } from "../../../../types";

export const unit3ExamTraps: ExamTrapItem[] = [
  {
    "id": "itpm-u3-trap-001",
    "unit": 3,
    "topic": "EV vs AC",
    "commonStudentMistake": "Assuming Earned Value (EV) and Actual Cost (AC) are the same number.",
    "correctAcademicTruth": "EV is the budgeted value of work performed; AC is real cash spent. They only match if CPI is exactly 1.0.",
    "whyExaminerDeductsMarks": "Conflates physical work accomplished with money spent, defeating the entire purpose of EVM.",
    "howToRemember": "EV = Work accomplished in budget dollars. AC = Real cash disbursed."
  },
  {
    "id": "itpm-u3-trap-002",
    "unit": 3,
    "topic": "PV vs EV",
    "commonStudentMistake": "Confusing Planned Value (PV) with Earned Value (EV).",
    "correctAcademicTruth": "PV is what was scheduled to be done; EV is what was actually completed. Comparing them gives SV.",
    "whyExaminerDeductsMarks": "Fails to distinguish scheduled plans from realized deliverables.",
    "howToRemember": "PV = Scheduled budget. EV = Earned budget."
  },
  {
    "id": "itpm-u3-trap-003",
    "unit": 3,
    "topic": "Formula Signs: Cost Variance",
    "commonStudentMistake": "Calculating CV as AC - EV, or thinking positive CV means over budget.",
    "correctAcademicTruth": "CV = EV - AC. Positive CV is favorable (under budget surplus); Negative CV is unfavorable (over budget deficit).",
    "whyExaminerDeductsMarks": "Value First rule: EV always leads. Reversing terms reverses the management conclusion.",
    "howToRemember": "CV = EV - AC. Positive is good (surplus); Negative is bad (over budget)."
  },
  {
    "id": "itpm-u3-trap-004",
    "unit": 3,
    "topic": "Formula Signs: Schedule Variance",
    "commonStudentMistake": "Calculating SV as PV - EV, or comparing EV with AC for schedule.",
    "correctAcademicTruth": "SV = EV - PV. Compares EV with PV (never AC). Positive = ahead; Negative = behind schedule.",
    "whyExaminerDeductsMarks": "Mixing cost data into schedule variance calculations.",
    "howToRemember": "SV checks Schedule, so compare EV with PV. EV leads: SV = EV - PV."
  },
  {
    "id": "itpm-u3-trap-005",
    "unit": 3,
    "topic": "Performance Index Thresholds",
    "commonStudentMistake": "Thinking CPI < 1.0 or SPI < 1.0 is favorable.",
    "correctAcademicTruth": "Values less than 1.0 are always unfavorable (cost overrun or schedule delay). Values greater than 1.0 are favorable.",
    "whyExaminerDeductsMarks": "Reverses the financial and schedule efficiency logic.",
    "howToRemember": "Index < 1.0 is unfavorable; Index > 1.0 is favorable."
  },
  {
    "id": "itpm-u3-trap-006",
    "unit": 3,
    "topic": "Contingency vs Management Reserve",
    "commonStudentMistake": "Believing contingency reserves and management reserves serve the same purpose.",
    "correctAcademicTruth": "Contingency reserves address identified risks ('known-unknowns'); management reserves address unforeseen work within scope ('unknown-unknowns').",
    "whyExaminerDeductsMarks": "Fails to distinguish baseline risk buffers from executive control reserves.",
    "howToRemember": "Contingency = Known-unknowns. Management = Unknown-unknowns."
  },
  {
    "id": "itpm-u3-trap-007",
    "unit": 3,
    "topic": "Management Reserve in Baseline",
    "commonStudentMistake": "Including Management Reserve inside the project Cost Baseline.",
    "correctAcademicTruth": "The Cost Baseline EXCLUDES management reserve. Total Project Budget = Cost Baseline + Management Reserve.",
    "whyExaminerDeductsMarks": "EVM performance baseline (PMB) cannot contain management reserve.",
    "howToRemember": "Cost Baseline = Work Packages + Contingency (NO Management Reserve)."
  },
  {
    "id": "itpm-u3-trap-008",
    "unit": 3,
    "topic": "FPA Effort Fallacy",
    "commonStudentMistake": "Thinking that because FPA is technology-independent, it directly gives project cost without effort conversion.",
    "correctAcademicTruth": "FPA measures functional size only. Sizing must still be converted to person-hours and monetary cost based on team productivity.",
    "whyExaminerDeductsMarks": "Conflates functional sizing with financial budgeting.",
    "howToRemember": "FPA gives functional size (FP). You must multiply by hours/FP to get effort and cost."
  },
  {
    "id": "itpm-u3-trap-009",
    "unit": 3,
    "topic": "FPA Weight Tampering",
    "commonStudentMistake": "Using FPA weights from outside standards rather than the official Unit 3 weights.",
    "correctAcademicTruth": "Official weights: Input (2/4/6), Output (3/5/7), Inquiry (2/4/6), Interface (5/7/10), File (7/10/15).",
    "whyExaminerDeductsMarks": "Violates IU curriculum exam standard.",
    "howToRemember": "Inputs & Inquiries = 2/4/6. Outputs = 3/5/7. Interfaces = 5/7/10. Files = 7/10/15."
  },
  {
    "id": "itpm-u3-trap-010",
    "unit": 3,
    "topic": "Planning Poker Averaging Fallacy",
    "commonStudentMistake": "Averaging divergent planning poker votes to establish the story point estimate.",
    "correctAcademicTruth": "Planning poker requires consensus. Teams discuss outliers (high and low) and re-vote until consensus is achieved.",
    "whyExaminerDeductsMarks": "Averaging masks underlying scope misunderstandings.",
    "howToRemember": "Never average planning poker cards; discuss outliers and re-vote to consensus."
  },
  {
    "id": "itpm-u3-trap-011",
    "unit": 3,
    "topic": "Burn-Down Chart vs EVM",
    "commonStudentMistake": "Assuming a burn-down chart measures earned monetary value or cost efficiency.",
    "correctAcademicTruth": "Burn-down charts only track remaining effort in a sprint descending to zero. They do not track financial expenditures or EVM ratios.",
    "whyExaminerDeductsMarks": "Confuses agile sprint effort tracking with earned value cost control.",
    "howToRemember": "Burn-down = Effort left (hours/points). EVM = Budgeted value earned vs cash spent."
  },
  {
    "id": "itpm-u3-trap-012",
    "unit": 3,
    "topic": "Continuous Risk Management",
    "commonStudentMistake": "Treating risk management as a one-time planning activity completed during initiation.",
    "correctAcademicTruth": "Risk management is continuous across the entire project lifecycle. Risks evolve, emerge, and vanish continuously.",
    "whyExaminerDeductsMarks": "One-time risk planning guarantees failure as external conditions change.",
    "howToRemember": "Risk management never stops until final project termination."
  },
  {
    "id": "itpm-u3-trap-013",
    "unit": 3,
    "topic": "Risk Process vs Response Options",
    "commonStudentMistake": "Listing Avoid, Mitigate, Transfer, Accept as the four risk management functions.",
    "correctAcademicTruth": "The 4 functions are I-A-M-M (Identify, Assess, Mitigate, Monitor). Avoid, Mitigate, Transfer, Accept are the 4 response strategies.",
    "whyExaminerDeductsMarks": "Conflates the governance lifecycle with tactical treatment options.",
    "howToRemember": "Process = I-A-M-M functions. Tactics = Avoid, Mitigate, Transfer, Accept."
  },
  {
    "id": "itpm-u3-trap-014",
    "unit": 3,
    "topic": "Risk Maturity Level 1 vs Level 5",
    "commonStudentMistake": "Naming Level 1 'Initial' or Level 5 'Optimized' using generic CMMI terminology.",
    "correctAcademicTruth": "In Unit 3, Level 1 is Ad hoc and Level 5 is Adaptive (A-A-O-M-A: Ad hoc, Abbreviated, Organized, Managed, Adaptive).",
    "whyExaminerDeductsMarks": "Fails to use course-specific terminology.",
    "howToRemember": "A-A-O-M-A: Ad hoc (1) -> Abbreviated (2) -> Organized (3) -> Managed (4) -> Adaptive (5)."
  },
  {
    "id": "itpm-u3-trap-015",
    "unit": 3,
    "topic": "25/75 Rule Usage",
    "commonStudentMistake": "Claiming the 25/75 rule credits 75% at start and 25% at completion.",
    "correctAcademicTruth": "25% is credited upon initiation/preparation; the remaining 75% is credited upon validated 100% completion.",
    "whyExaminerDeductsMarks": "Reversing percentages encourages false claims of progress before work is finished.",
    "howToRemember": "25% at start, 75% at completion."
  },
  {
    "id": "itpm-u3-trap-016",
    "unit": 3,
    "topic": "Precision vs Accuracy Trap",
    "commonStudentMistake": "Believing that an estimate with 4 decimal places is automatically accurate.",
    "correctAcademicTruth": "Decimal places represent precision (refinement), not accuracy. An estimate can be precisely wrong.",
    "whyExaminerDeductsMarks": "Confuses superficial granularity with truthfulness to reality.",
    "howToRemember": "Accuracy = Correctness. Precision = Decimal places / detail."
  },
  {
    "id": "itpm-u3-trap-017",
    "unit": 3,
    "topic": "Risk Owner Blame Fallacy",
    "commonStudentMistake": "Thinking the Risk Owner is a scapegoat who is penalized if a risk occurs.",
    "correctAcademicTruth": "A risk owner is the designated entity accountable for monitoring trigger symptoms and executing the planned mitigation response.",
    "whyExaminerDeductsMarks": "Misinterprets risk governance as personal liability.",
    "howToRemember": "Risk Owner = Accountable monitor and response manager."
  },
  {
    "id": "itpm-u3-trap-018",
    "unit": 3,
    "topic": "NPV Discounting Formula",
    "commonStudentMistake": "Multiplying Future Value by (1 + interest) instead of dividing.",
    "correctAcademicTruth": "NPV discounts future money back to today: NPV = Future Value / (1 + interest)^t.",
    "whyExaminerDeductsMarks": "Compounding money into the future instead of discounting to present value.",
    "howToRemember": "Present Value divides: FV / (1 + i)^t."
  }
];
