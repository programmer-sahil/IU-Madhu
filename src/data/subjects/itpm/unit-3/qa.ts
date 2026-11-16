import { DescriptiveQuestion } from "../../../../types";

export const unit3ImportantQuestions: DescriptiveQuestion[] = [
  {
    "id": "itpm-u3-qa-001",
    "unit": 3,
    "question": "Explain six factors that make cost estimation difficult in IT projects.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Identifies 6 distinct source-supported challenges: uncertain scope, limited experience, planning horizon, project size, technology changes, and future resource prices.",
    "modelAnswer": "Cost estimation in IT projects is inherently complex because estimates predict future monetary requirements based on imperfect present information. Six primary factors make IT estimation challenging:\n\n1. Uncertain and Fluid Scope: Requirements in software projects evolve continuously as stakeholders gain clearer understanding during execution.\n2. Rapid Technology Changes: Fast hardware/software obsolescence means historical performance data may not apply to newly adopted platforms.\n3. Future Resource Price Fluctuations: Market rates for specialized IT contractors, cloud services, and software licenses fluctuate over time.\n4. Planning Horizon: The further in the future an activity is scheduled, the higher the uncertainty and margin of estimation error.\n5. Project Size and Complexity: Larger software projects exhibit non-linear coordination overhead and complex interface interdependencies.\n6. Staffing and Human Resource Availability: Turnover, skill disparities, and the difficulty of finding qualified domain specialists create significant productivity variations.",
    "answerStructure": [
      "Introduction to IT estimation challenges",
      "Six numbered and explained factors"
    ],
    "keywords": [
      "Fluid scope",
      "Technology changes",
      "Price fluctuations",
      "Planning horizon",
      "Project size",
      "Staffing"
    ],
    "commonMistakes": "Providing generic corporate excuses rather than the specific IT factors listed in the course material.",
    "selfCheckChecklist": [
      "Named 6 distinct factors?",
      "Explained how each impacts IT costing?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Challenges of Cost Estimation",
      "page": 63
    }
  },
  {
    "id": "itpm-u3-qa-002",
    "unit": 3,
    "question": "Explain the nine quality characteristics of a cost estimate (A-C-C-P-R-D-U-V-V).",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "List and define all 9 characteristics: Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.",
    "modelAnswer": "A professional project cost estimate is assessed against nine quality characteristics:\n\n1. Accuracy: How closely the estimate reflects true reality and final actual expenditures.\n2. Confidence Level: The statistical probability or certainty that actual costs will fall within the estimated range.\n3. Credibility: The degree of trust and belief stakeholders have in the realism and defensibility of the estimate.\n4. Precision: The level of refinement, detail, and granularity of the cost figures.\n5. Reliability: The consistency of the estimation technique when applied independently by different estimators.\n6. Documentation: A transparent audit trail of all underlying scope assumptions, baseline constraints, data sources, and calculations.\n7. Uniformity: Consistent use of standardized measurement units, currencies, inflation assumptions, and reporting conventions.\n8. Validity: The methodological soundness and appropriateness of the estimation approach for the technical domain.\n9. Verification: Independent cross-checking and testing to confirm the mathematical correctness of calculations.",
    "answerStructure": [
      "Introduce A-C-C-P-R-D-U-V-V",
      "Define each of the 9 characteristics concisely"
    ],
    "keywords": [
      "Accuracy",
      "Confidence level",
      "Credibility",
      "Precision",
      "Reliability",
      "Documentation",
      "Uniformity",
      "Validity",
      "Verification"
    ],
    "commonMistakes": "Confusing Accuracy (correctness) with Precision (detail/decimals).",
    "selfCheckChecklist": [
      "Listed all 9 characteristics?",
      "Correctly distinguished Accuracy and Precision?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality of Cost Estimates",
      "page": 64
    }
  },
  {
    "id": "itpm-u3-qa-003",
    "unit": 3,
    "question": "Explain the budget reserve hierarchy and distinguish Contingency Reserves from Management Reserves.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Explain the hierarchy (Task -> Task Contingency -> WP Contingency -> Cost Baseline -> Management Reserve -> Project Budget) and contrast contingency (known-unknowns) with management reserve (unknown-unknowns).",
    "modelAnswer": "Project budget components are structured hierarchically to manage uncertainty without double-counting risks:\n\n1. Task Estimates + Task Contingency: Raw effort estimate plus specific task-level risk buffer.\n2. Work-Package Contingency: Aggregation of work-package risks.\n3. Cost Baseline: The authorized, time-phased budget (Work Packages + Contingency Reserves) used for EVM performance measurement. Excludes management reserve.\n4. Management Reserve: Withheld at the project level for unforeseen work within project scope.\n5. Total Project Budget: Cost Baseline + Management Reserve.\n\nContingency vs Management Reserve:\n- Contingency Reserves: Address identified risks ('known-unknowns') evaluated in the risk register. Formally included in the Cost Baseline.\n- Management Reserves: Address unforeseen work within project scope ('unknown-unknowns'). Held for executive control and excluded from the Cost Baseline until formally transferred via change control.",
    "answerStructure": [
      "Diagram/outline the budget hierarchy",
      "Contingency reserve definition & scope",
      "Management reserve definition & scope",
      "Comparison summary"
    ],
    "keywords": [
      "Task Contingency",
      "Work-Package Contingency",
      "Cost Baseline",
      "Management Reserve",
      "Project Budget",
      "Known-unknowns",
      "Unknown-unknowns"
    ],
    "commonMistakes": "Including management reserves in the Cost Baseline.",
    "selfCheckChecklist": [
      "Outlined the full hierarchy?",
      "Contrasted known-unknowns with unknown-unknowns?",
      "Excluded management reserve from Cost Baseline?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Budget Reserves",
      "page": 65
    }
  },
  {
    "id": "itpm-u3-qa-004",
    "unit": 3,
    "question": "Explain the four cost-benefit metrics used in project selection: ROI, Payback Period, NPV, and Profitability Index.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Formulas and interpretation for ROI, Payback Period, NPV, and Profitability Index according to Unit 3.",
    "modelAnswer": "Cost-benefit metrics evaluate whether an IT project is financially justifiable:\n\n1. Return on Investment (ROI):\n- Formula: ROI = Net Gain / Project Cost.\n- Interpretation: Measures net profit relative to expenditure. Positive rate indicates financial gain (e.g. $800k gain / $1M cost = 80%); negative rate indicates loss.\n\n2. Payback Period:\n- Definition: The time required for cumulative project benefits to equal the initial investment ('time to break even'). Shorter payback recovers capital sooner.\n\n3. Net Present Value (NPV):\n- Formula: NPV = Future Value / (1 + interest)^time periods.\n- Interpretation: Discounts future cash inflows back to present value, accounting for the time value of money and inflation.\n\n4. Profitability Index:\n- Formula: Profitability Index = NPV / Project Cost.\n- Interpretation: Measures present value created per dollar spent. An index > 1.0 confirms that discounted benefits exceed investment cost.",
    "answerStructure": [
      "Explain ROI formula and meaning",
      "Explain Payback Period",
      "Explain NPV formula and meaning",
      "Explain Profitability Index"
    ],
    "keywords": [
      "ROI = Net Gain / Cost",
      "Payback Period",
      "Break even",
      "NPV = FV / (1+i)^t",
      "Profitability Index > 1"
    ],
    "commonMistakes": "Writing external multi-year NPV summations not present in Unit 3.",
    "selfCheckChecklist": [
      "Used the exact Unit 3 NPV formula?",
      "Stated Profitability Index > 1 rule?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Cost-Benefit Metrics",
      "page": 64
    }
  },
  {
    "id": "itpm-u3-qa-005",
    "unit": 3,
    "question": "Explain Three-Point Estimation, the triangular distribution, and why cost distributions are typically skewed.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Explain optimistic, likely, pessimistic values, triangular approximation, and why cost distribution is right-skewed.",
    "modelAnswer": "Three-point estimation replaces single-point deterministic guessing with a probabilistic range capturing uncertainty:\n\n1. Three Parameter Estimates:\n- Optimistic (o): Best-case scenario where nothing goes wrong.\n- Most Probable / Likely (m): Realistic expected cost under normal working conditions.\n- Pessimistic (p): Worst-case scenario where all plausible risks materialize.\n\n2. Triangular Approximation:\nThe area under the triangular curve represents 100% of event probability between the optimistic minimum and pessimistic maximum.\n\n3. Asymmetric Downside Skew:\nThe cost probability distribution is not a symmetric normal bell curve. It is skewed because downside cost growth can greatly exceed potential savings. When everything goes perfectly, potential savings are modest; but when technical and organizational disasters strike, cost overruns can be massive.",
    "answerStructure": [
      "Define 3 parameters",
      "Explain triangular approximation",
      "Explain why distribution is skewed"
    ],
    "keywords": [
      "Optimistic",
      "Most probable",
      "Pessimistic",
      "Triangular approximation",
      "Asymmetric skew",
      "Downside risk"
    ],
    "commonMistakes": "Assuming the cost curve is symmetric like a standard normal distribution.",
    "selfCheckChecklist": [
      "Defined all 3 points?",
      "Explained why cost distributions are skewed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Three-Point Estimation",
      "page": 67
    }
  },
  {
    "id": "itpm-u3-qa-006",
    "unit": 3,
    "question": "Explain Expert Estimation, the Double-Blind Review process, and its main limitation in specialized IT fields.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Explain expert sources, double-blind mechanism, bias reduction, and the small-field deduction limitation.",
    "modelAnswer": "Expert estimation utilizes internal specialists or external consultants with domain knowledge when the project team lacks historical estimation data.\n\nDouble-Blind Review Process:\nTo eliminate cognitive and social prejudice, cost plans undergo double-blind review:\n- Estimator identity is concealed from reviewers.\n- Reviewer identity is concealed from estimators.\n\nPurpose:\nIt removes bias stemming from power dynamics (e.g. a junior developer reviewing a director's estimate), gender, race, or author reputation (avoiding uncritical deference to industry celebrities).\n\nCourse-Supported Limitation:\nIn very small, highly specialized technical domains, writing styles, unique architectural approaches, or specialized terminology often allow reviewers or authors to guess each other's identity, partially undermining anonymity.",
    "answerStructure": [
      "Define expert sources",
      "Explain double-blind mechanism",
      "Explain bias reduction purpose",
      "State small-field limitation"
    ],
    "keywords": [
      "Expert estimation",
      "Double-blind review",
      "Anonymity",
      "Bias reduction",
      "Power dynamics",
      "Small field limitation"
    ],
    "commonMistakes": "Omitting the specific course limitation regarding small specialized fields.",
    "selfCheckChecklist": [
      "Explained mutual anonymity?",
      "Stated the small-field limitation?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Double-Blind Review",
      "page": 68
    }
  },
  {
    "id": "itpm-u3-qa-007",
    "unit": 3,
    "question": "Explain Function Point Analysis (FPA), its five function types, and the calculation of Adjusted Function Points.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Define FPA, list the 5 types (I-O-Q-I-F), explain UFP, TDI, CAF formula, and FP = UFP x CAF.",
    "modelAnswer": "Function Point Analysis (FPA) quantifies software size based on business functionality delivered to users, independent of programming language or implementation technology.\n\nFive Function Types (I-O-Q-I-F):\n- Transaction Functions: External Inputs (In), External Outputs (On), External Inquiries (Qn).\n- Data Functions: Internal Logical Files (Fn), External Interfaces (En).\n\nCalculation Steps:\n1. Unadjusted Function Points (UFP): Catalog all functions and multiply by complexity weights (Low, Average, High) to obtain total UFP.\n2. Total Degree of Influence (TDI): Rate 14 general system characteristics on a 0 to 5 scale and sum them to obtain TDI.\n3. Complexity Adjustment Factor (CAF): Calculate using the formula:\n   CAF = 0.01 x TDI + 0.65\n4. Final Adjusted Function Points (FP):\n   FP = UFP x CAF\n\n(Example: If UFP = 120 and TDI = 34, then CAF = 0.99, and FP = 120 x 0.99 = 118.8).",
    "answerStructure": [
      "Define FPA & technology independence",
      "List 5 function types",
      "State 4-step calculation process with formulas"
    ],
    "keywords": [
      "FPA",
      "Technology-independent",
      "I-O-Q-I-F",
      "UFP",
      "TDI",
      "CAF = 0.01*TDI + 0.65",
      "FP = UFP*CAF"
    ],
    "commonMistakes": "Forgetting the 0.65 baseline constant in the CAF formula.",
    "selfCheckChecklist": [
      "Listed all 5 function types?",
      "Stated CAF = 0.01 x TDI + 0.65?",
      "Stated FP = UFP x CAF?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Function Point Analysis",
      "page": 68
    }
  },
  {
    "id": "itpm-u3-qa-008",
    "unit": 3,
    "question": "Discuss the advantages and limitations of Function Point Analysis in software projects.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "List source-supported advantages (cross-language, contract negotiation, early sizing) and limitations (subjective, requires conversion to effort/cost, weak for algorithm-heavy systems).",
    "modelAnswer": "Function Point Analysis offers significant sizing strengths alongside distinct operational limitations:\n\nAdvantages:\n1. Technology Independence: Measures functional size based on user requirements rather than code syntax, enabling objective comparison across different programming languages.\n2. Early Estimation: Can be calculated early in the lifecycle once functional specifications are defined.\n3. Contract Negotiations: Provides an objective, standardized baseline for software procurement, vendor pricing, and SLAs.\n4. Metric Derivation: Serves as a reliable denominator for productivity metrics (hours per FP) and defect density.\n\nLimitations:\n1. Subjective Classification: Assigning complexity weights (Low/Avg/High) involves subjective human judgment.\n2. Time-Consuming: Detailed functional decomposition requires extensive training and effort.\n3. Requires Conversion: FPA produces a functional size, which must still be converted into effort (hours) and monetary cost based on team velocity.\n4. Inadequate for Algorithmic Systems: FPA works poorly for technical systems with complex algorithms but little user-visible UI/transactionality.",
    "answerStructure": [
      "Explain 4 advantages",
      "Explain 4 limitations"
    ],
    "keywords": [
      "Technology-independent",
      "Contract negotiations",
      "Subjective",
      "Requires conversion to effort",
      "Inadequate for algorithmic systems"
    ],
    "commonMistakes": "Claiming FPA directly calculates monetary cost without needing conversion.",
    "selfCheckChecklist": [
      "Listed 3-4 advantages?",
      "Listed 3-4 limitations?",
      "Mentioned algorithmic system weakness?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Advantages & Limitations",
      "page": 72
    }
  },
  {
    "id": "itpm-u3-qa-009",
    "unit": 3,
    "question": "Explain the Planning Poker estimation process step by step and why it is useful in agile projects.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "The 7-step sequence and explanation of why it prevents pressure toward artificially low estimates.",
    "modelAnswer": "Planning Poker is an agile consensus estimation method based on the principle that estimates should come from the team members performing the work.\n\nSeven-Step Sequence:\n1. Break work into small, estimable user stories.\n2. Agree on estimation unit (e.g. story points using a Fibonacci-like scale).\n3. Estimate independently: Each team member selects a card privately.\n4. Reveal simultaneously: All members display their cards at the same moment.\n5. Extremes explain: Highest and lowest estimators explain their reasoning first.\n6. Team discusses: Assumptions, risks, and hidden complexities are clarified.\n7. Repeat until consensus: Re-vote until the team converges on an agreed estimate.\n\nWhy It Is Useful:\n- Prevents Anchoring: Simultaneous reveal stops senior or vocal members from anchoring others.\n- Eliminates External Pressure: Shields teams from management pressure to provide artificially low estimates.\n- Fosters Shared Ownership: Broadens understanding and builds team consensus.",
    "answerStructure": [
      "Core principle",
      "Seven numbered steps",
      "Why it is useful (3 points)"
    ],
    "keywords": [
      "Planning poker",
      "Consensus",
      "7-step sequence",
      "Simultaneous reveal",
      "Anchoring prevention",
      "Fibonacci"
    ],
    "commonMistakes": "Suggesting that planning poker votes should be mathematically averaged.",
    "selfCheckChecklist": [
      "Outlined all 7 steps?",
      "Emphasized simultaneous reveal?",
      "Explained anchoring prevention?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker",
      "page": 72
    }
  },
  {
    "id": "itpm-u3-qa-010",
    "unit": 3,
    "question": "Define PV, EV, and AC in Earned Value Management, and explain how SV and CV are calculated and interpreted.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Define PV, EV, AC, formulas for SV and CV, 'Value First' rule, and sign interpretations.",
    "modelAnswer": "Earned Value Management (EVM) tracks project performance using three foundational metrics:\n\n1. Planned Value (PV): The authorized budget assigned to scheduled work up to the reporting date ('what should have been accomplished by now').\n2. Earned Value (EV): The budgeted value of work actually completed ('budgeted value actually earned').\n3. Actual Cost (AC): The realized expenditure incurred in performing that work ('money actually spent').\n\nVariances and Interpretation (Value First Rule: EV always leads):\n- Schedule Variance: SV = EV - PV.\n  * Positive SV (> 0): EV exceeds PV -> Ahead of schedule.\n  * Negative SV (< 0): EV is less than PV -> Behind schedule.\n- Cost Variance: CV = EV - AC.\n  * Positive CV (> 0): EV exceeds AC -> Under budget (favorable surplus).\n  * Negative CV (< 0): EV is less than AC -> Over budget (unfavorable deficit).",
    "answerStructure": [
      "Define PV, EV, AC",
      "State SV formula & interpretation",
      "State CV formula & interpretation",
      "Highlight Value First rule"
    ],
    "keywords": [
      "Planned Value (PV)",
      "Earned Value (EV)",
      "Actual Cost (AC)",
      "SV = EV - PV",
      "CV = EV - AC",
      "Value First",
      "Ahead/Behind",
      "Under/Over budget"
    ],
    "commonMistakes": "Reversing formula terms (e.g. PV - EV or AC - EV).",
    "selfCheckChecklist": [
      "Defined PV, EV, AC accurately?",
      "Stated SV = EV - PV?",
      "Stated CV = EV - AC?",
      "Correctly interpreted signs?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Metrics & Variances",
      "page": 73
    }
  },
  {
    "id": "itpm-u3-qa-011",
    "unit": 3,
    "question": "Explain Cost Performance Index (CPI) and Schedule Performance Index (SPI), including formulas and interpretation thresholds.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Formulas for CPI and SPI, interpretation thresholds (< 1, = 1, > 1), and tolerance bands.",
    "modelAnswer": "Performance indices provide normalized efficiency ratios for EVM monitoring:\n\n1. Cost Performance Index (CPI):\n- Formula: CPI = EV / AC.\n- Interpretation:\n  * CPI < 1.0: Cost overrun / inefficient (spending more than $1.00 for every $1.00 of work earned).\n  * CPI = 1.0: Exactly on budget.\n  * CPI > 1.0: Cost underrun / favorable efficiency (spending less than budgeted for earned work).\n\n2. Schedule Performance Index (SPI):\n- Formula: SPI = EV / PV.\n- Interpretation:\n  * SPI < 1.0: Behind schedule (progressing at a slower rate than planned).\n  * SPI = 1.0: Exactly on schedule.\n  * SPI > 1.0: Ahead of schedule (achieving more earned value than scheduled).\n\nOperational Practice:\nTeams often establish tolerance ranges (e.g. between 0.8 and 1.2) where deviations within the band are monitored and breaches trigger executive intervention.",
    "answerStructure": [
      "CPI formula & interpretation",
      "SPI formula & interpretation",
      "Tolerance range practice"
    ],
    "keywords": [
      "CPI = EV / AC",
      "SPI = EV / PV",
      "< 1 overrun/behind",
      "> 1 underrun/ahead",
      "Tolerance range 0.8 - 1.2"
    ],
    "commonMistakes": "Inverting the formulas (putting AC or PV in the numerator).",
    "selfCheckChecklist": [
      "EV in the numerator for both?",
      "Explained < 1 and > 1 thresholds?",
      "Mentioned tolerance ranges?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Indices",
      "page": 75
    }
  },
  {
    "id": "itpm-u3-qa-012",
    "unit": 3,
    "question": "Work through the textbook EVM example (cRobot project): BAC = $9,000, Month 1 PV = $3,000, 5,000 lines completed at $0.50/line, AC = $3,500. Calculate all metrics and interpret status.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Calculate EV, SV, CV, CPI, SPI and explain why the project is behind schedule and over budget.",
    "modelAnswer": "Textbook EVM Worked Example:\n- Baseline: BAC = 18,000 lines * $0.50 = $9,000 over 3 months linearly.\n- Month 1 Planned Value: PV = $9,000 / 3 = $3,000 (representing 6,000 scheduled lines).\n- Month 1 Actuals: 5,000 lines completed; AC = $3,500 (extra spent on dev tools/training).\n\nCalculations:\n1. Earned Value: EV = 5,000 lines * $0.50 = $2,500.\n2. Schedule Variance: SV = EV - PV = $2,500 - $3,000 = -$500.\n3. Cost Variance: CV = EV - AC = $2,500 - $3,500 = -$1,000.\n4. Cost Performance Index: CPI = EV / AC = $2,500 / $3,500 = 0.714 (~0.71).\n5. Schedule Performance Index: SPI = EV / PV = $2,500 / $3,000 = 0.833 (~0.83).\n\nInterpretation:\n- Behind Schedule: Negative SV (-$500) and SPI < 1.0 (0.83) indicate the team only achieved 83% of scheduled work.\n- Over Budget: Negative CV (-$1,000) and CPI < 1.0 (0.71) indicate the project spent 71% more than it should have for the work delivered.",
    "answerStructure": [
      "State input parameters",
      "Calculate EV, SV, CV, CPI, SPI step by step",
      "Provide clear operational interpretation"
    ],
    "keywords": [
      "BAC = $9,000",
      "PV = $3,000",
      "EV = $2,500",
      "AC = $3,500",
      "SV = -$500",
      "CV = -$1,000",
      "CPI = 0.71",
      "SPI = 0.83",
      "Behind schedule",
      "Over budget"
    ],
    "commonMistakes": "Arithmetic rounding errors or reversing signs on SV/CV.",
    "selfCheckChecklist": [
      "EV = $2,500?",
      "SV = -$500?",
      "CV = -$1,000?",
      "CPI = 0.71?",
      "SPI = 0.83?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Textbook EVM Example",
      "page": 74
    }
  },
  {
    "id": "itpm-u3-qa-013",
    "unit": 3,
    "question": "Discuss the assumptions and limitations of Earned Value Management in IT software projects.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "List underlying assumptions (stable baseline, reliable tracking) and IT limitations (fluid scope, agile overlap, large project complexity).",
    "modelAnswer": "While EVM provides powerful integrated control, its utility in IT depends on key assumptions that are often challenged in practice:\n\nUnderlying Assumptions:\n1. Reliable Initial Estimates: Assumes original work package estimates are accurate.\n2. Stable Performance Baseline: Assumes minimal scope creep and a reasonably predictable environment.\n3. Verified Quality: Assumes completed work satisfies required quality standards.\n4. Timely Tracking Data: Assumes actual cost and progress data are recorded reliably.\n\nIT Project Limitations:\n1. Fluid Requirements: Software requirements evolve rapidly; when scope changes continuously, defining a stable 'earned value' becomes elusive.\n2. Overlapping Agile Iterations: In agile, planning, coding, and testing overlap continuously, blurring formal baseline comparisons.\n3. Difficulty Measuring Physical Completion: Intellectual software design cannot be measured like laying physical bricks; crediting rules (e.g. 25/75) must be improvised.\n4. Scalability Challenges in Large Projects: The course book explicitly notes major difficulties applying EVM to very large IT projects due to architectural volatility.",
    "answerStructure": [
      "Explain 4 assumptions",
      "Explain 4 IT limitations"
    ],
    "keywords": [
      "Reliable estimates",
      "Stable baseline",
      "Fluid requirements",
      "Agile overlap",
      "Physical completion measurement",
      "Large project difficulty"
    ],
    "commonMistakes": "Claiming EVM is completely useless in software rather than explaining the specific contextual challenges.",
    "selfCheckChecklist": [
      "Listed 3-4 assumptions?",
      "Listed 3-4 IT challenges?",
      "Mentioned large IT project difficulties?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Assumptions & IT Limitations",
      "page": 76
    }
  },
  {
    "id": "itpm-u3-qa-014",
    "unit": 3,
    "question": "Explain the four core functions of risk management (I-A-M-M) and the four risk response strategies.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Explain the 4 functions (Identify, Assess, Mitigate, Monitor) and the 4 treatments (Avoid, Mitigate, Transfer, Accept) while warning against confusing them.",
    "modelAnswer": "Risk management is a continuous lifecycle discipline comprising four core functions (I-A-M-M):\n\n1. Risk Identification and Description: Proactively detecting, cataloging, and documenting potential technical, cost, schedule, and organizational risks.\n2. Risk Assessment and Analysis: Evaluating the risk category, likelihood of occurrence, root cause, and severity of potential impact.\n3. Risk Mitigation / Response Selection: Choosing and implementing appropriate response strategies.\n4. Risk Monitoring and Reporting: Continuously tracking risk triggers, monitoring register updates, and detecting whether risks materialize, change, or vanish.\n\nFour Risk Response Strategies (Treatment Options):\n- Avoid: Changing project scope or architecture to completely eliminate the risk.\n- Mitigate: Taking proactive steps to reduce the likelihood and/or impact to an acceptable level.\n- Transfer: Shifting financial or operational impact to a third party (e.g. insurance, warranties, fixed-price vendor contracts).\n- Accept: Acknowledging residual risk and establishing contingency reserves without active intervention unless triggers occur.",
    "answerStructure": [
      "Explain 4 I-A-M-M functions",
      "Explain 4 response strategies",
      "Emphasize process vs response distinction"
    ],
    "keywords": [
      "Identify",
      "Assess",
      "Mitigate",
      "Monitor",
      "I-A-M-M",
      "Avoid",
      "Mitigate",
      "Transfer",
      "Accept"
    ],
    "commonMistakes": "Confusing the management process (I-A-M-M) with the response strategies (M-A-T-A).",
    "selfCheckChecklist": [
      "Described all 4 functions?",
      "Described all 4 response strategies?",
      "Clarified the distinction?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Functions & Responses",
      "page": 77
    }
  },
  {
    "id": "itpm-u3-qa-015",
    "unit": 3,
    "question": "Explain the five levels of the IT Risk Management Maturity Model (A-A-O-M-A).",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "List and define Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.",
    "modelAnswer": "The Risk Management Maturity Model benchmarks organizational capability across five progressive stages (A-A-O-M-A):\n\n1. Level 1 - Ad hoc: Informal, disorganized, and chaotic. Risk handling depends on individual initiative; processes are undocumented, and budget/schedule deviations are common.\n2. Level 2 - Abbreviated: Basic risk processes exist, but are inconsistently understood and applied across teams; project outcomes remain largely unpredictable.\n3. Level 3 - Organized: Standardized, documented, and formal risk processes are institutionalized and integrated end-to-end across project lifecycles, producing predictable results.\n4. Level 4 - Managed: Process effectiveness is quantitatively measured and documented; empirical risk metrics are actively controlled and used for strategic decision-making.\n5. Level 5 - Adaptive: Continuous optimization through institutionalized feedback loops, process innovation, new technologies, and systematic organizational learning.",
    "answerStructure": [
      "Introduce A-A-O-M-A",
      "Detail Levels 1 to 5 with exact course titles and characteristics"
    ],
    "keywords": [
      "Ad hoc (Level 1)",
      "Abbreviated (Level 2)",
      "Organized (Level 3)",
      "Managed (Level 4)",
      "Adaptive (Level 5)",
      "A-A-O-M-A"
    ],
    "commonMistakes": "Using CMMI terms like 'Optimized' instead of the exact Unit 3 term 'Adaptive'.",
    "selfCheckChecklist": [
      "Used exact terms: Ad hoc, Abbreviated, Organized, Managed, Adaptive?",
      "Described progressive capability at each level?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Maturity Model",
      "page": 77
    }
  },
  {
    "id": "itpm-u3-qa-016",
    "unit": 3,
    "question": "Compare Top-Down and Bottom-Up risk identification approaches in IT projects.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Contrast task-level aggregation (bottom-up) with project symptom cascading (top-down).",
    "modelAnswer": "IT risk identification utilizes both bottom-up and top-down perspectives to achieve comprehensive coverage:\n\n1. Bottom-Up Risk Identification:\n- Process: Begins at the lowest WBS level (individual tasks and work packages). Developers and task leaders identify localized technical, resource, or schedule vulnerabilities.\n- Roll-Up: Localized risks are evaluated for cumulative impact and rolled upward to assess total work package and project consequences.\n- Strength: Detects detailed, ground-level technical and engineering risks that executives overlook.\n\n2. Top-Down Risk Identification:\n- Process: Begins at the macro project or work-package level by analyzing overarching performance problems, strategic constraints, or environmental variances.\n- Cascade: Cascades downward through the hierarchy to investigate and isolate the specific critical activities responsible.\n- Strength: Aligns risk analysis with strategic project objectives and executive governance priorities.",
    "answerStructure": [
      "Explain Bottom-Up process and strength",
      "Explain Top-Down process and strength",
      "Summary comparison"
    ],
    "keywords": [
      "Bottom-Up",
      "Tasks to project",
      "Localized vulnerabilities",
      "Top-Down",
      "Project symptoms",
      "Cascade downward"
    ],
    "commonMistakes": "Claiming one approach is universally superior rather than recognizing their complementary nature.",
    "selfCheckChecklist": [
      "Explained Bottom-Up?",
      "Explained Top-Down?",
      "Contrasted starting points and aggregation directions?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Top-Down vs Bottom-Up Identification",
      "page": 77
    }
  },
  {
    "id": "itpm-u3-qa-017",
    "unit": 3,
    "question": "Explain Qualitative Risk Analysis and describe four qualitative evaluation techniques supported in Unit 3.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Define qualitative analysis and describe 4 tools: expert input, checklists, assumption analysis, cause-and-effect/influence diagrams, or SWOT.",
    "modelAnswer": "Qualitative Risk Analysis prioritizes identified risks by assessing their categories, likelihood of occurrence, and severity of potential impact using descriptive and evaluative methods.\n\nFour Supported Qualitative Techniques:\n1. Expert Judgment and Past-Project Reviews: Consulting domain veterans and reviewing historical project closeout reports to identify recurring risk patterns.\n2. Risk Checklists: Pre-populated lists of common IT failure points (e.g. data security, third-party API dependencies, scope creep) based on lessons learned.\n3. Assumption Analysis: Validating project planning assumptions; an unverified assumption is a potential risk that must be tested.\n4. Cause-and-Effect / Influence Diagrams: Ishikawa (fishbone) diagrams exploring root causes of technical failures, or influence diagrams mapping how variables affect project outcomes.\n\nThese techniques feed directly into the Likelihood-Impact matrix to establish mitigation priorities.",
    "answerStructure": [
      "Define qualitative risk analysis",
      "Explain 4 specific techniques",
      "Link to Likelihood-Impact prioritization"
    ],
    "keywords": [
      "Qualitative analysis",
      "Expert judgment",
      "Checklists",
      "Assumption analysis",
      "Cause-and-effect diagrams",
      "Likelihood-Impact matrix"
    ],
    "commonMistakes": "Including external quantitative simulation tools not taught in Unit 3.",
    "selfCheckChecklist": [
      "Defined qualitative analysis?",
      "Described 4 distinct tools from the course book?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Qualitative Risk Analysis",
      "page": 78
    }
  },
  {
    "id": "itpm-u3-qa-018",
    "unit": 3,
    "question": "Describe the structure and purpose of the project Risk Register (Table 3) and explain the role of the Risk Owner.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "List Table 3 columns (Description, Likelihood, Severity, Owner, Mitigation Actions) and explain the Risk Owner's role.",
    "modelAnswer": "The Risk Register is the foundational, living artifact used to record, track, and manage all identified project uncertainties.\n\nStructure (Table 3 in Course Book):\n1. Risk Description: Clear, unambiguous statement of the uncertain event and its potential consequences (e.g. 'Scope creep from stakeholder requests').\n2. Likelihood: The probability of occurrence (e.g. Low, Medium, High).\n3. Severity (Impact): The magnitude of potential damage to schedule, budget, or quality (e.g. Low, Medium, High).\n4. Owner: The designated individual or group accountable for that specific risk.\n5. Mitigation Actions: The agreed proactive strategy or contingency action plan.\n\nRole of the Risk Owner:\nThe risk owner is the single assigned entity responsible for monitoring risk trigger symptoms, updating register entries, and executing the authorized response plan if the risk materializes. Assigning a designated owner ensures accountability and prevents risks from being neglected.",
    "answerStructure": [
      "Purpose of Risk Register",
      "Explain all 5 columns from Table 3",
      "Explain the role and accountability of the Risk Owner"
    ],
    "keywords": [
      "Risk Register",
      "Table 3",
      "Risk Description",
      "Likelihood",
      "Severity",
      "Risk Owner",
      "Mitigation Actions",
      "Accountability"
    ],
    "commonMistakes": "Treating the Risk Register as a static document created once and forgotten.",
    "selfCheckChecklist": [
      "Listed all 5 columns from Table 3?",
      "Defined the Risk Owner's responsibilities?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Register",
      "page": 79
    }
  },
  {
    "id": "itpm-u3-qa-019",
    "unit": 3,
    "question": "Explain the 25/75 Rule in EVM and compare it with other physical completion measurement approaches.",
    "marks": 6,
    "priority": "MEDIUM PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Explain the 25% start / 75% completion rule and why it is applied when incremental progress is hard to measure.",
    "modelAnswer": "In software projects, measuring the exact physical completion of ongoing intellectual work (e.g. algorithm architecture or debugging) is notoriously difficult.\n\nThe 25/75 Rule:\nTo prevent subjective guessing, the 25/75 crediting convention establishes that:\n- 25% of the task's budgeted value (EV) is credited immediately when work actively begins or preparation is verified.\n- 75% of the budgeted value is credited only when the task satisfies 100% of its completion criteria.\n\nComparison and Purpose:\nUnlike crude binary crediting (0/100 rule) which shows zero progress until final completion, or subjective percentage-complete estimates that encourage false optimism (e.g. tasks lingering at '90% done' for months), the 25/75 rule provides early visibility while tying the vast majority of earned value (75%) strictly to validated completion.",
    "answerStructure": [
      "Explain the measurement dilemma in software",
      "Define the 25/75 rule mechanics",
      "Contrast with 0/100 and subjective percentage"
    ],
    "keywords": [
      "25/75 rule",
      "25% at start",
      "75% at completion",
      "Physical completion measurement",
      "Subjective progress prevention"
    ],
    "commonMistakes": "Reversing the percentages (e.g. claiming 75% at start and 25% at end).",
    "selfCheckChecklist": [
      "25% at start/prep?",
      "75% at completion?",
      "Explained why it is used?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "25/75 Rule",
      "page": 76
    }
  },
  {
    "id": "itpm-u3-qa-020",
    "unit": 3,
    "question": "A software project has Month 1 PV = $60,000, EV = $48,000, and AC = $72,000. It also faces an integration risk (High Likelihood / High Impact). Calculate EVM metrics, interpret status, and recommend risk management actions.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Calculate SV, CV, CPI, SPI; conclude behind schedule and over budget; propose risk avoidance/mitigation and risk register updates.",
    "modelAnswer": "1. EVM Metric Calculations:\n- SV = EV - PV = $48,000 - $60,000 = -$12,000.\n- CV = EV - AC = $48,000 - $72,000 = -$24,000.\n- CPI = EV / AC = $48,000 / $72,000 = 0.667 (~0.67).\n- SPI = EV / PV = $48,000 / $60,000 = 0.80.\n\n2. Operational Status Interpretation:\n- Schedule: Negative SV (-$12,000) and SPI = 0.80 (< 1.0) indicate the project is significantly behind schedule (achieved only 80% of scheduled work).\n- Budget: Negative CV (-$24,000) and CPI = 0.67 (< 1.0) indicate severe cost overruns (spending $1.50 for every $1.00 of earned value).\n\n3. Risk Management Actions:\n- Integration Risk Response: Rated High Likelihood / High Impact, this critical threat requires immediate proactive Mitigation or Avoidance. Build a rapid architectural spike/prototype to resolve interface mismatches, or adopt proven commercial middleware.\n- Risk Register Maintenance: Enter the integration risk in Table 3 with High/High ratings, assign a dedicated Technical Coordinator as Risk Owner, establish trigger symptoms, and fund contingency reserves from work-package buffers.",
    "answerStructure": [
      "Calculate SV, CV, CPI, SPI",
      "Interpret schedule and cost status",
      "Recommend risk responses and register actions"
    ],
    "keywords": [
      "SV = -$12,000",
      "CV = -$24,000",
      "CPI = 0.67",
      "SPI = 0.80",
      "Behind schedule",
      "Over budget",
      "High/High risk",
      "Mitigation",
      "Risk Owner"
    ],
    "commonMistakes": "Calculating metrics without explaining the operational risk recommendations.",
    "selfCheckChecklist": [
      "Calculated all 4 EVM metrics?",
      "Concluded behind schedule and over budget?",
      "Addressed the High/High integration risk?"
    ],
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3 & 3.4",
      "topic": "Case Analysis",
      "page": 74
    }
  }
];
