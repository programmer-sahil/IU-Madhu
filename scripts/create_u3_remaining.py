import json, os

u3_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-3"

# 1. FLASHCARDS (45 flashcards)
flashcards = [
    {"id": "itpm-u3-fc-001", "unit": 3, "category": "Cost Estimation", "front": "What is cost estimation in IT projects?", "back": "The process of predicting monetary resources required for future project activities, including acquisition and recurring running costs (maintenance, support, ops).", "examTip": "Covers both acquisition and lifecycle operations."},
    {"id": "itpm-u3-fc-002", "unit": 3, "category": "Cost Estimation", "front": "What is 'project cost without contingency'?", "back": "The raw sum of task costs within work packages, aggregated across all work packages, before risk reserves are added.", "examTip": "Straightforward bottom-up sum before risk padding."},
    {"id": "itpm-u3-fc-003", "unit": 3, "category": "Cost Estimation", "front": "Name the 9 quality attributes of a cost estimate (A-C-C-P-R-D-U-V-V).", "back": "Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.", "examTip": "Memory aid: A-C-C-P-R-D-U-V-V."},
    {"id": "itpm-u3-fc-004", "unit": 3, "category": "Cost Estimation", "front": "Distinguish Accuracy from Precision in cost estimates.", "back": "Accuracy is closeness to true reality. Precision is level of detail/refinement (granularity/decimals). An estimate can be highly precise but wildly inaccurate.", "examTip": "Accuracy = truth; Precision = granularity."},
    {"id": "itpm-u3-fc-005", "unit": 3, "category": "Cost Estimation", "front": "How do plan-driven and agile estimation differ regarding constraints?", "back": "Plan-driven fixes scope (cost/schedule may vary); Agile fixes cost and schedule (scope varies iteratively).", "examTip": "Plan-driven = Scope fixed; Agile = Cost/Schedule fixed."},
    {"id": "itpm-u3-fc-006", "unit": 3, "category": "Financial", "front": "State the formula and interpretation for ROI.", "back": "ROI = Net Gain / Project Cost. Higher positive ROI = stronger return; negative = loss.", "examTip": "Example: $800k gain / $1M cost = 80%."},
    {"id": "itpm-u3-fc-007", "unit": 3, "category": "Financial", "front": "What is the Payback Period?", "back": "The time required for project cash gains to equal the initial capital investment ('time to break even').", "examTip": "Shorter payback recovers capital sooner."},
    {"id": "itpm-u3-fc-008", "unit": 3, "category": "Financial", "front": "State the Net Present Value (NPV) formula in Unit 3.", "back": "NPV = Future Value / (1 + interest)^time periods.", "examTip": "Discounts future cash back to present value."},
    {"id": "itpm-u3-fc-009", "unit": 3, "category": "Financial", "front": "State the Profitability Index formula and decision rule.", "back": "Profitability Index = NPV / Project Cost. An index > 1.0 means NPV exceeds project cost.", "examTip": "Must exceed 1.0 to be financially viable."},
    {"id": "itpm-u3-fc-010", "unit": 3, "category": "Reserves", "front": "State the budget reserve hierarchy from bottom to top.", "back": "Task Estimate -> Task Contingency -> Work-Package Contingency -> Cost Baseline -> Management Reserve -> Project Budget.", "examTip": "Cost baseline includes contingency, but EXCLUDES management reserve."},
    {"id": "itpm-u3-fc-011", "unit": 3, "category": "Reserves", "front": "What do Contingency Reserves cover?", "back": "Identified project risks ('known-unknowns') that have planned mitigation responses.", "examTip": "Assigned at task or work package level."},
    {"id": "itpm-u3-fc-012", "unit": 3, "category": "Reserves", "front": "What do Management Reserves cover?", "back": "Unforeseen work within project scope ('unknown-unknowns') withheld for managerial control.", "examTip": "Part of Project Budget, but excluded from Cost Baseline."},
    {"id": "itpm-u3-fc-013", "unit": 3, "category": "Techniques", "front": "What three values are used in Three-Point Estimation?", "back": "Optimistic (low/best), Most Probable (likely), and Pessimistic (high/worst).", "examTip": "Represents cost as a probability range rather than single point."},
    {"id": "itpm-u3-fc-014", "unit": 3, "category": "Techniques", "front": "Why is the cost probability curve skewed to the right?", "back": "Downside cost overruns can greatly exceed potential savings if all goes well.", "examTip": "Not a symmetric normal curve; downside skew."},
    {"id": "itpm-u3-fc-015", "unit": 3, "category": "Techniques", "front": "What is a Double-Blind Review in expert estimation?", "back": "Estimator identity is hidden from reviewer, and reviewer identity is hidden from estimator, reducing bias from power, status, gender, or race.", "examTip": "Limitation: in small niche fields, identities may be guessed."},
    {"id": "itpm-u3-fc-016", "unit": 3, "category": "Techniques", "front": "What does Function Point Analysis (FPA) measure?", "back": "The amount of user-visible business functionality a software system provides, independent of programming language or implementation technology.", "examTip": "Independent of implementation technology."},
    {"id": "itpm-u3-fc-017", "unit": 3, "category": "Techniques", "front": "Name the 5 FPA function types (I-O-Q-I-F).", "back": "Inputs, Outputs, Inquiries (Transaction functions) and External Interfaces, Internal Logical Files (Data functions).", "examTip": "Memory code: I-O-Q-I-F."},
    {"id": "itpm-u3-fc-018", "unit": 3, "category": "Techniques", "front": "What are the FPA complexity weights for Inputs and Inquiries?", "back": "Low = 2, Average = 4, High = 6 (identical for both).", "examTip": "Inputs and Inquiries share 2 / 4 / 6 weights."},
    {"id": "itpm-u3-fc-019", "unit": 3, "category": "Techniques", "front": "What are the FPA complexity weights for Outputs?", "back": "Low = 3, Average = 5, High = 7.", "examTip": "Outputs: 3 / 5 / 7."},
    {"id": "itpm-u3-fc-020", "unit": 3, "category": "Techniques", "front": "What are the FPA complexity weights for External Interfaces and Internal Files?", "back": "External Interfaces: 5 / 7 / 10. Internal Logical Files: 7 / 10 / 15.", "examTip": "Internal Files carry the highest weights: 7 / 10 / 15."},
    {"id": "itpm-u3-fc-021", "unit": 3, "category": "Techniques", "front": "State the Complexity Adjustment Factor (CAF) formula in FPA.", "back": "CAF = 0.01 x TDI + 0.65 (where TDI is Total Degree of Influence across 14 characteristics).", "examTip": "If TDI = 34 -> CAF = 0.01*34 + 0.65 = 0.99."},
    {"id": "itpm-u3-fc-022", "unit": 3, "category": "Techniques", "front": "State the formula for Adjusted Function Points (FP).", "back": "FP = UFP x CAF.", "examTip": "Unadjusted Function Points multiplied by CAF."},
    {"id": "itpm-u3-fc-023", "unit": 3, "category": "Techniques", "front": "What is the primary system inadequacy of FPA?", "back": "Inadequate for technical systems with complex mathematical algorithms but little visible functionality.", "examTip": "Works great for MIS/dialogue apps; poor for pure algorithmic tech systems."},
    {"id": "itpm-u3-fc-024", "unit": 3, "category": "Techniques", "front": "What is Planning Poker?", "back": "An agile consensus estimation method where team members estimate independently with cards and reveal simultaneously to avoid anchoring.", "examTip": "Estimates come from people performing work."},
    {"id": "itpm-u3-fc-025", "unit": 3, "category": "Techniques", "front": "What is the 7-step sequence of Planning Poker?", "back": "1. Break work; 2. Agree unit; 3. Estimate independently; 4. Reveal simultaneously; 5. Highest/lowest explain; 6. Discuss; 7. Repeat to consensus.", "examTip": "Never average votes; discuss outliers and re-vote."},
    {"id": "itpm-u3-fc-026", "unit": 3, "category": "EVM", "front": "Define Planned Value (PV).", "back": "Authorized budget assigned to scheduled work. 'What should have been accomplished by now.'", "examTip": "Total PV over project = PMB = BAC."},
    {"id": "itpm-u3-fc-027", "unit": 3, "category": "EVM", "front": "Define Earned Value (EV).", "back": "Measure of work performed expressed in terms of the budget authorized for that work. 'Budgeted value actually earned.'", "examTip": "EV is based on budgeted cost, NOT actual cost."},
    {"id": "itpm-u3-fc-028", "unit": 3, "category": "EVM", "front": "Define Actual Cost (AC).", "back": "The realized cost incurred for work performed up to the present. 'Money actually spent.'", "examTip": "AC is real cash expended."},
    {"id": "itpm-u3-fc-029", "unit": 3, "category": "EVM", "front": "State the Schedule Variance (SV) formula and sign rule.", "back": "SV = EV - PV. Positive = ahead of schedule; Negative = behind schedule.", "examTip": "Value First: EV comes first."},
    {"id": "itpm-u3-fc-030", "unit": 3, "category": "EVM", "front": "State the Cost Variance (CV) formula and sign rule.", "back": "CV = EV - AC. Positive = under budget (surplus); Negative = over budget (deficit).", "examTip": "Value First: EV comes first."},
    {"id": "itpm-u3-fc-031", "unit": 3, "category": "EVM", "front": "State the Cost Performance Index (CPI) formula and interpretation.", "back": "CPI = EV / AC. < 1.0 = cost overrun (inefficient); > 1.0 = cost underrun (favorable efficiency).", "examTip": "EV is the numerator."},
    {"id": "itpm-u3-fc-032", "unit": 3, "category": "EVM", "front": "State the Schedule Performance Index (SPI) formula and interpretation.", "back": "SPI = EV / PV. < 1.0 = behind schedule; > 1.0 = ahead of schedule.", "examTip": "EV is the numerator."},
    {"id": "itpm-u3-fc-033", "unit": 3, "category": "EVM", "front": "What does the 'Value First' memory rule dictate?", "back": "EV leads in variances (SV = EV - PV; CV = EV - AC) and is the numerator in indices (CPI = EV/AC; SPI = EV/PV).", "examTip": "Never start an EVM formula with PV or AC."},
    {"id": "itpm-u3-fc-034", "unit": 3, "category": "EVM", "front": "State the results of the course book worked EVM example.", "back": "BAC=$9,000, PV=$3,000, EV=$2,500, AC=$3,500 -> SV=-$500, CV=-$1,000, CPI=0.71, SPI=0.83 (Behind schedule and over budget).", "examTip": "Memorize these exact textbook figures."},
    {"id": "itpm-u3-fc-035", "unit": 3, "category": "EVM", "front": "What is the 25/75 Rule in earned value measurement?", "back": "Credits 25% of budgeted value at task initiation/preparation and 75% upon completion.", "examTip": "Used when physical completion is difficult to measure incrementally."},
    {"id": "itpm-u3-fc-036", "unit": 3, "category": "EVM", "front": "How does a Burn-Down Chart differ from EVM?", "back": "EVM compares value earned vs money spent; Burn-down plots remaining effort descending from 100% to 0%.", "examTip": "Burn-down shows remaining work; EVM shows performance efficiency."},
    {"id": "itpm-u3-fc-037", "unit": 3, "category": "Risk", "front": "Why must risk management be continuous across the lifecycle?", "back": "Risks change over time: new risks emerge, existing risks change probability/impact, and others vanish.", "examTip": "Continuous lifecycle discipline, not a one-time plan."},
    {"id": "itpm-u3-fc-038", "unit": 3, "category": "Risk", "front": "What is the strategic risk sequence in Unit 3?", "back": "Prevention -> Detection -> Response. More effort in prevention reduces later response effort.", "examTip": "Prevention first, detection second, response last."},
    {"id": "itpm-u3-fc-039", "unit": 3, "category": "Risk", "front": "Name the 4 core risk management functions (I-A-M-M).", "back": "1. Risk Identification & description; 2. Risk Assessment & analysis; 3. Risk Mitigation/response; 4. Risk Monitoring & reporting.", "examTip": "Memory aid: I-A-M-M."},
    {"id": "itpm-u3-fc-040", "unit": 3, "category": "Risk", "front": "Name the 4 risk response strategies (treatment options).", "back": "Avoid, Mitigate, Transfer, Accept.", "examTip": "Process = I-A-M-M; Treatment = Avoid, Mitigate, Transfer, Accept."},
    {"id": "itpm-u3-fc-041", "unit": 3, "category": "Risk", "front": "Name the 5 levels of the Risk Management Maturity Model (A-A-O-M-A).", "back": "Level 1: Ad hoc; Level 2: Abbreviated; Level 3: Organized; Level 4: Managed; Level 5: Adaptive.", "examTip": "Level 1 is Ad hoc; Level 5 is Adaptive."},
    {"id": "itpm-u3-fc-042", "unit": 3, "category": "Risk", "front": "Distinguish Bottom-Up and Top-Down risk identification.", "back": "Bottom-Up starts at tasks and aggregates to work packages and project; Top-Down starts with project symptoms and investigates down to tasks.", "examTip": "Bottom-up = tasks upward; Top-down = project downward."},
    {"id": "itpm-u3-fc-043", "unit": 3, "category": "Risk", "front": "List Qualitative Risk Analysis tools in Unit 3.", "back": "Expert input, past-project reviews, checklists, assumption analysis, cause-and-effect diagrams, influence diagrams, SWOT.", "examTip": "Non-numeric evaluation of cause, likelihood, and category."},
    {"id": "itpm-u3-fc-044", "unit": 3, "category": "Risk", "front": "What core fields comprise the Risk Register (Table 3)?", "back": "Risk Description, Likelihood, Severity (Impact), Owner, Mitigation Actions.", "examTip": "Table 3 in course book page 79."},
    {"id": "itpm-u3-fc-045", "unit": 3, "category": "Risk", "front": "What is the role of a Risk Owner?", "back": "The designated entity accountable for monitoring risk triggers and managing the agreed mitigation response.", "examTip": "Single accountable owner per risk."}
]

# 2. IMPORTANT QUESTIONS (20 Q&A)
qa_list = [
    {
        "id": "itpm-u3-qa-001", "unit": 3,
        "question": "Explain six factors that make cost estimation difficult in IT projects.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Identifies 6 distinct source-supported challenges: uncertain scope, limited experience, planning horizon, project size, technology changes, and future resource prices.",
        "modelAnswer": "Cost estimation in IT projects is inherently complex because estimates predict future monetary requirements based on imperfect present information. Six primary factors make IT estimation challenging:\n\n1. Uncertain and Fluid Scope: Requirements in software projects evolve continuously as stakeholders gain clearer understanding during execution.\n2. Rapid Technology Changes: Fast hardware/software obsolescence means historical performance data may not apply to newly adopted platforms.\n3. Future Resource Price Fluctuations: Market rates for specialized IT contractors, cloud services, and software licenses fluctuate over time.\n4. Planning Horizon: The further in the future an activity is scheduled, the higher the uncertainty and margin of estimation error.\n5. Project Size and Complexity: Larger software projects exhibit non-linear coordination overhead and complex interface interdependencies.\n6. Staffing and Human Resource Availability: Turnover, skill disparities, and the difficulty of finding qualified domain specialists create significant productivity variations.",
        "answerStructure": ["Introduction to IT estimation challenges", "Six numbered and explained factors"],
        "keywords": ["Fluid scope", "Technology changes", "Price fluctuations", "Planning horizon", "Project size", "Staffing"],
        "commonMistakes": "Providing generic corporate excuses rather than the specific IT factors listed in the course material.",
        "selfCheckChecklist": ["Named 6 distinct factors?", "Explained how each impacts IT costing?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.1", "topic": "Challenges of Cost Estimation", "page": 63}
    },
    {
        "id": "itpm-u3-qa-002", "unit": 3,
        "question": "Explain the nine quality characteristics of a cost estimate (A-C-C-P-R-D-U-V-V).",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "List and define all 9 characteristics: Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.",
        "modelAnswer": "A professional project cost estimate is assessed against nine quality characteristics:\n\n1. Accuracy: How closely the estimate reflects true reality and final actual expenditures.\n2. Confidence Level: The statistical probability or certainty that actual costs will fall within the estimated range.\n3. Credibility: The degree of trust and belief stakeholders have in the realism and defensibility of the estimate.\n4. Precision: The level of refinement, detail, and granularity of the cost figures.\n5. Reliability: The consistency of the estimation technique when applied independently by different estimators.\n6. Documentation: A transparent audit trail of all underlying scope assumptions, baseline constraints, data sources, and calculations.\n7. Uniformity: Consistent use of standardized measurement units, currencies, inflation assumptions, and reporting conventions.\n8. Validity: The methodological soundness and appropriateness of the estimation approach for the technical domain.\n9. Verification: Independent cross-checking and testing to confirm the mathematical correctness of calculations.",
        "answerStructure": ["Introduce A-C-C-P-R-D-U-V-V", "Define each of the 9 characteristics concisely"],
        "keywords": ["Accuracy", "Confidence level", "Credibility", "Precision", "Reliability", "Documentation", "Uniformity", "Validity", "Verification"],
        "commonMistakes": "Confusing Accuracy (correctness) with Precision (detail/decimals).",
        "selfCheckChecklist": ["Listed all 9 characteristics?", "Correctly distinguished Accuracy and Precision?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.1", "topic": "Quality of Cost Estimates", "page": 64}
    },
    {
        "id": "itpm-u3-qa-003", "unit": 3,
        "question": "Explain the budget reserve hierarchy and distinguish Contingency Reserves from Management Reserves.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Explain the hierarchy (Task -> Task Contingency -> WP Contingency -> Cost Baseline -> Management Reserve -> Project Budget) and contrast contingency (known-unknowns) with management reserve (unknown-unknowns).",
        "modelAnswer": "Project budget components are structured hierarchically to manage uncertainty without double-counting risks:\n\n1. Task Estimates + Task Contingency: Raw effort estimate plus specific task-level risk buffer.\n2. Work-Package Contingency: Aggregation of work-package risks.\n3. Cost Baseline: The authorized, time-phased budget (Work Packages + Contingency Reserves) used for EVM performance measurement. Excludes management reserve.\n4. Management Reserve: Withheld at the project level for unforeseen work within project scope.\n5. Total Project Budget: Cost Baseline + Management Reserve.\n\nContingency vs Management Reserve:\n- Contingency Reserves: Address identified risks ('known-unknowns') evaluated in the risk register. Formally included in the Cost Baseline.\n- Management Reserves: Address unforeseen work within project scope ('unknown-unknowns'). Held for executive control and excluded from the Cost Baseline until formally transferred via change control.",
        "answerStructure": ["Diagram/outline the budget hierarchy", "Contingency reserve definition & scope", "Management reserve definition & scope", "Comparison summary"],
        "keywords": ["Task Contingency", "Work-Package Contingency", "Cost Baseline", "Management Reserve", "Project Budget", "Known-unknowns", "Unknown-unknowns"],
        "commonMistakes": "Including management reserves in the Cost Baseline.",
        "selfCheckChecklist": ["Outlined the full hierarchy?", "Contrasted known-unknowns with unknown-unknowns?", "Excluded management reserve from Cost Baseline?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.1", "topic": "Budget Reserves", "page": 65}
    },
    {
        "id": "itpm-u3-qa-004", "unit": 3,
        "question": "Explain the four cost-benefit metrics used in project selection: ROI, Payback Period, NPV, and Profitability Index.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Formulas and interpretation for ROI, Payback Period, NPV, and Profitability Index according to Unit 3.",
        "modelAnswer": "Cost-benefit metrics evaluate whether an IT project is financially justifiable:\n\n1. Return on Investment (ROI):\n- Formula: ROI = Net Gain / Project Cost.\n- Interpretation: Measures net profit relative to expenditure. Positive rate indicates financial gain (e.g. $800k gain / $1M cost = 80%); negative rate indicates loss.\n\n2. Payback Period:\n- Definition: The time required for cumulative project benefits to equal the initial investment ('time to break even'). Shorter payback recovers capital sooner.\n\n3. Net Present Value (NPV):\n- Formula: NPV = Future Value / (1 + interest)^time periods.\n- Interpretation: Discounts future cash inflows back to present value, accounting for the time value of money and inflation.\n\n4. Profitability Index:\n- Formula: Profitability Index = NPV / Project Cost.\n- Interpretation: Measures present value created per dollar spent. An index > 1.0 confirms that discounted benefits exceed investment cost.",
        "answerStructure": ["Explain ROI formula and meaning", "Explain Payback Period", "Explain NPV formula and meaning", "Explain Profitability Index"],
        "keywords": ["ROI = Net Gain / Cost", "Payback Period", "Break even", "NPV = FV / (1+i)^t", "Profitability Index > 1"],
        "commonMistakes": "Writing external multi-year NPV summations not present in Unit 3.",
        "selfCheckChecklist": ["Used the exact Unit 3 NPV formula?", "Stated Profitability Index > 1 rule?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.1", "topic": "Cost-Benefit Metrics", "page": 64}
    },
    {
        "id": "itpm-u3-qa-005", "unit": 3,
        "question": "Explain Three-Point Estimation, the triangular distribution, and why cost distributions are typically skewed.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Explain optimistic, likely, pessimistic values, triangular approximation, and why cost distribution is right-skewed.",
        "modelAnswer": "Three-point estimation replaces single-point deterministic guessing with a probabilistic range capturing uncertainty:\n\n1. Three Parameter Estimates:\n- Optimistic (o): Best-case scenario where nothing goes wrong.\n- Most Probable / Likely (m): Realistic expected cost under normal working conditions.\n- Pessimistic (p): Worst-case scenario where all plausible risks materialize.\n\n2. Triangular Approximation:\nThe area under the triangular curve represents 100% of event probability between the optimistic minimum and pessimistic maximum.\n\n3. Asymmetric Downside Skew:\nThe cost probability distribution is not a symmetric normal bell curve. It is skewed because downside cost growth can greatly exceed potential savings. When everything goes perfectly, potential savings are modest; but when technical and organizational disasters strike, cost overruns can be massive.",
        "answerStructure": ["Define 3 parameters", "Explain triangular approximation", "Explain why distribution is skewed"],
        "keywords": ["Optimistic", "Most probable", "Pessimistic", "Triangular approximation", "Asymmetric skew", "Downside risk"],
        "commonMistakes": "Assuming the cost curve is symmetric like a standard normal distribution.",
        "selfCheckChecklist": ["Defined all 3 points?", "Explained why cost distributions are skewed?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.2", "topic": "Three-Point Estimation", "page": 67}
    },
    {
        "id": "itpm-u3-qa-006", "unit": 3,
        "question": "Explain Expert Estimation, the Double-Blind Review process, and its main limitation in specialized IT fields.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "Explain expert sources, double-blind mechanism, bias reduction, and the small-field deduction limitation.",
        "modelAnswer": "Expert estimation utilizes internal specialists or external consultants with domain knowledge when the project team lacks historical estimation data.\n\nDouble-Blind Review Process:\nTo eliminate cognitive and social prejudice, cost plans undergo double-blind review:\n- Estimator identity is concealed from reviewers.\n- Reviewer identity is concealed from estimators.\n\nPurpose:\nIt removes bias stemming from power dynamics (e.g. a junior developer reviewing a director's estimate), gender, race, or author reputation (avoiding uncritical deference to industry celebrities).\n\nCourse-Supported Limitation:\nIn very small, highly specialized technical domains, writing styles, unique architectural approaches, or specialized terminology often allow reviewers or authors to guess each other's identity, partially undermining anonymity.",
        "answerStructure": ["Define expert sources", "Explain double-blind mechanism", "Explain bias reduction purpose", "State small-field limitation"],
        "keywords": ["Expert estimation", "Double-blind review", "Anonymity", "Bias reduction", "Power dynamics", "Small field limitation"],
        "commonMistakes": "Omitting the specific course limitation regarding small specialized fields.",
        "selfCheckChecklist": ["Explained mutual anonymity?", "Stated the small-field limitation?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.2", "topic": "Double-Blind Review", "page": 68}
    },
    {
        "id": "itpm-u3-qa-007", "unit": 3,
        "question": "Explain Function Point Analysis (FPA), its five function types, and the calculation of Adjusted Function Points.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Define FPA, list the 5 types (I-O-Q-I-F), explain UFP, TDI, CAF formula, and FP = UFP x CAF.",
        "modelAnswer": "Function Point Analysis (FPA) quantifies software size based on business functionality delivered to users, independent of programming language or implementation technology.\n\nFive Function Types (I-O-Q-I-F):\n- Transaction Functions: External Inputs (In), External Outputs (On), External Inquiries (Qn).\n- Data Functions: Internal Logical Files (Fn), External Interfaces (En).\n\nCalculation Steps:\n1. Unadjusted Function Points (UFP): Catalog all functions and multiply by complexity weights (Low, Average, High) to obtain total UFP.\n2. Total Degree of Influence (TDI): Rate 14 general system characteristics on a 0 to 5 scale and sum them to obtain TDI.\n3. Complexity Adjustment Factor (CAF): Calculate using the formula:\n   CAF = 0.01 x TDI + 0.65\n4. Final Adjusted Function Points (FP):\n   FP = UFP x CAF\n\n(Example: If UFP = 120 and TDI = 34, then CAF = 0.99, and FP = 120 x 0.99 = 118.8).",
        "answerStructure": ["Define FPA & technology independence", "List 5 function types", "State 4-step calculation process with formulas"],
        "keywords": ["FPA", "Technology-independent", "I-O-Q-I-F", "UFP", "TDI", "CAF = 0.01*TDI + 0.65", "FP = UFP*CAF"],
        "commonMistakes": "Forgetting the 0.65 baseline constant in the CAF formula.",
        "selfCheckChecklist": ["Listed all 5 function types?", "Stated CAF = 0.01 x TDI + 0.65?", "Stated FP = UFP x CAF?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.2", "topic": "Function Point Analysis", "page": 68}
    },
    {
        "id": "itpm-u3-qa-008", "unit": 3,
        "question": "Discuss the advantages and limitations of Function Point Analysis in software projects.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "List source-supported advantages (cross-language, contract negotiation, early sizing) and limitations (subjective, requires conversion to effort/cost, weak for algorithm-heavy systems).",
        "modelAnswer": "Function Point Analysis offers significant sizing strengths alongside distinct operational limitations:\n\nAdvantages:\n1. Technology Independence: Measures functional size based on user requirements rather than code syntax, enabling objective comparison across different programming languages.\n2. Early Estimation: Can be calculated early in the lifecycle once functional specifications are defined.\n3. Contract Negotiations: Provides an objective, standardized baseline for software procurement, vendor pricing, and SLAs.\n4. Metric Derivation: Serves as a reliable denominator for productivity metrics (hours per FP) and defect density.\n\nLimitations:\n1. Subjective Classification: Assigning complexity weights (Low/Avg/High) involves subjective human judgment.\n2. Time-Consuming: Detailed functional decomposition requires extensive training and effort.\n3. Requires Conversion: FPA produces a functional size, which must still be converted into effort (hours) and monetary cost based on team velocity.\n4. Inadequate for Algorithmic Systems: FPA works poorly for technical systems with complex algorithms but little user-visible UI/transactionality.",
        "answerStructure": ["Explain 4 advantages", "Explain 4 limitations"],
        "keywords": ["Technology-independent", "Contract negotiations", "Subjective", "Requires conversion to effort", "Inadequate for algorithmic systems"],
        "commonMistakes": "Claiming FPA directly calculates monetary cost without needing conversion.",
        "selfCheckChecklist": ["Listed 3-4 advantages?", "Listed 3-4 limitations?", "Mentioned algorithmic system weakness?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.2", "topic": "FPA Advantages & Limitations", "page": 72}
    },
    {
        "id": "itpm-u3-qa-009", "unit": 3,
        "question": "Explain the Planning Poker estimation process step by step and why it is useful in agile projects.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "The 7-step sequence and explanation of why it prevents pressure toward artificially low estimates.",
        "modelAnswer": "Planning Poker is an agile consensus estimation method based on the principle that estimates should come from the team members performing the work.\n\nSeven-Step Sequence:\n1. Break work into small, estimable user stories.\n2. Agree on estimation unit (e.g. story points using a Fibonacci-like scale).\n3. Estimate independently: Each team member selects a card privately.\n4. Reveal simultaneously: All members display their cards at the same moment.\n5. Extremes explain: Highest and lowest estimators explain their reasoning first.\n6. Team discusses: Assumptions, risks, and hidden complexities are clarified.\n7. Repeat until consensus: Re-vote until the team converges on an agreed estimate.\n\nWhy It Is Useful:\n- Prevents Anchoring: Simultaneous reveal stops senior or vocal members from anchoring others.\n- Eliminates External Pressure: Shields teams from management pressure to provide artificially low estimates.\n- Fosters Shared Ownership: Broadens understanding and builds team consensus.",
        "answerStructure": ["Core principle", "Seven numbered steps", "Why it is useful (3 points)"],
        "keywords": ["Planning poker", "Consensus", "7-step sequence", "Simultaneous reveal", "Anchoring prevention", "Fibonacci"],
        "commonMistakes": "Suggesting that planning poker votes should be mathematically averaged.",
        "selfCheckChecklist": ["Outlined all 7 steps?", "Emphasized simultaneous reveal?", "Explained anchoring prevention?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.2", "topic": "Planning Poker", "page": 72}
    },
    {
        "id": "itpm-u3-qa-010", "unit": 3,
        "question": "Define PV, EV, and AC in Earned Value Management, and explain how SV and CV are calculated and interpreted.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Define PV, EV, AC, formulas for SV and CV, 'Value First' rule, and sign interpretations.",
        "modelAnswer": "Earned Value Management (EVM) tracks project performance using three foundational metrics:\n\n1. Planned Value (PV): The authorized budget assigned to scheduled work up to the reporting date ('what should have been accomplished by now').\n2. Earned Value (EV): The budgeted value of work actually completed ('budgeted value actually earned').\n3. Actual Cost (AC): The realized expenditure incurred in performing that work ('money actually spent').\n\nVariances and Interpretation (Value First Rule: EV always leads):\n- Schedule Variance: SV = EV - PV.\n  * Positive SV (> 0): EV exceeds PV -> Ahead of schedule.\n  * Negative SV (< 0): EV is less than PV -> Behind schedule.\n- Cost Variance: CV = EV - AC.\n  * Positive CV (> 0): EV exceeds AC -> Under budget (favorable surplus).\n  * Negative CV (< 0): EV is less than AC -> Over budget (unfavorable deficit).",
        "answerStructure": ["Define PV, EV, AC", "State SV formula & interpretation", "State CV formula & interpretation", "Highlight Value First rule"],
        "keywords": ["Planned Value (PV)", "Earned Value (EV)", "Actual Cost (AC)", "SV = EV - PV", "CV = EV - AC", "Value First", "Ahead/Behind", "Under/Over budget"],
        "commonMistakes": "Reversing formula terms (e.g. PV - EV or AC - EV).",
        "selfCheckChecklist": ["Defined PV, EV, AC accurately?", "Stated SV = EV - PV?", "Stated CV = EV - AC?", "Correctly interpreted signs?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.3", "topic": "EVM Metrics & Variances", "page": 73}
    },
    {
        "id": "itpm-u3-qa-011", "unit": 3,
        "question": "Explain Cost Performance Index (CPI) and Schedule Performance Index (SPI), including formulas and interpretation thresholds.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Formulas for CPI and SPI, interpretation thresholds (< 1, = 1, > 1), and tolerance bands.",
        "modelAnswer": "Performance indices provide normalized efficiency ratios for EVM monitoring:\n\n1. Cost Performance Index (CPI):\n- Formula: CPI = EV / AC.\n- Interpretation:\n  * CPI < 1.0: Cost overrun / inefficient (spending more than $1.00 for every $1.00 of work earned).\n  * CPI = 1.0: Exactly on budget.\n  * CPI > 1.0: Cost underrun / favorable efficiency (spending less than budgeted for earned work).\n\n2. Schedule Performance Index (SPI):\n- Formula: SPI = EV / PV.\n- Interpretation:\n  * SPI < 1.0: Behind schedule (progressing at a slower rate than planned).\n  * SPI = 1.0: Exactly on schedule.\n  * SPI > 1.0: Ahead of schedule (achieving more earned value than scheduled).\n\nOperational Practice:\nTeams often establish tolerance ranges (e.g. between 0.8 and 1.2) where deviations within the band are monitored and breaches trigger executive intervention.",
        "answerStructure": ["CPI formula & interpretation", "SPI formula & interpretation", "Tolerance range practice"],
        "keywords": ["CPI = EV / AC", "SPI = EV / PV", "< 1 overrun/behind", "> 1 underrun/ahead", "Tolerance range 0.8 - 1.2"],
        "commonMistakes": "Inverting the formulas (putting AC or PV in the numerator).",
        "selfCheckChecklist": ["EV in the numerator for both?", "Explained < 1 and > 1 thresholds?", "Mentioned tolerance ranges?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.3", "topic": "EVM Indices", "page": 75}
    },
    {
        "id": "itpm-u3-qa-012", "unit": 3,
        "question": "Work through the textbook EVM example (cRobot project): BAC = $9,000, Month 1 PV = $3,000, 5,000 lines completed at $0.50/line, AC = $3,500. Calculate all metrics and interpret status.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Calculate EV, SV, CV, CPI, SPI and explain why the project is behind schedule and over budget.",
        "modelAnswer": "Textbook EVM Worked Example:\n- Baseline: BAC = 18,000 lines * $0.50 = $9,000 over 3 months linearly.\n- Month 1 Planned Value: PV = $9,000 / 3 = $3,000 (representing 6,000 scheduled lines).\n- Month 1 Actuals: 5,000 lines completed; AC = $3,500 (extra spent on dev tools/training).\n\nCalculations:\n1. Earned Value: EV = 5,000 lines * $0.50 = $2,500.\n2. Schedule Variance: SV = EV - PV = $2,500 - $3,000 = -$500.\n3. Cost Variance: CV = EV - AC = $2,500 - $3,500 = -$1,000.\n4. Cost Performance Index: CPI = EV / AC = $2,500 / $3,500 = 0.714 (~0.71).\n5. Schedule Performance Index: SPI = EV / PV = $2,500 / $3,000 = 0.833 (~0.83).\n\nInterpretation:\n- Behind Schedule: Negative SV (-$500) and SPI < 1.0 (0.83) indicate the team only achieved 83% of scheduled work.\n- Over Budget: Negative CV (-$1,000) and CPI < 1.0 (0.71) indicate the project spent 71% more than it should have for the work delivered.",
        "answerStructure": ["State input parameters", "Calculate EV, SV, CV, CPI, SPI step by step", "Provide clear operational interpretation"],
        "keywords": ["BAC = $9,000", "PV = $3,000", "EV = $2,500", "AC = $3,500", "SV = -$500", "CV = -$1,000", "CPI = 0.71", "SPI = 0.83", "Behind schedule", "Over budget"],
        "commonMistakes": "Arithmetic rounding errors or reversing signs on SV/CV.",
        "selfCheckChecklist": ["EV = $2,500?", "SV = -$500?", "CV = -$1,000?", "CPI = 0.71?", "SPI = 0.83?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.3", "topic": "Textbook EVM Example", "page": 74}
    },
    {
        "id": "itpm-u3-qa-013", "unit": 3,
        "question": "Discuss the assumptions and limitations of Earned Value Management in IT software projects.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "List underlying assumptions (stable baseline, reliable tracking) and IT limitations (fluid scope, agile overlap, large project complexity).",
        "modelAnswer": "While EVM provides powerful integrated control, its utility in IT depends on key assumptions that are often challenged in practice:\n\nUnderlying Assumptions:\n1. Reliable Initial Estimates: Assumes original work package estimates are accurate.\n2. Stable Performance Baseline: Assumes minimal scope creep and a reasonably predictable environment.\n3. Verified Quality: Assumes completed work satisfies required quality standards.\n4. Timely Tracking Data: Assumes actual cost and progress data are recorded reliably.\n\nIT Project Limitations:\n1. Fluid Requirements: Software requirements evolve rapidly; when scope changes continuously, defining a stable 'earned value' becomes elusive.\n2. Overlapping Agile Iterations: In agile, planning, coding, and testing overlap continuously, blurring formal baseline comparisons.\n3. Difficulty Measuring Physical Completion: Intellectual software design cannot be measured like laying physical bricks; crediting rules (e.g. 25/75) must be improvised.\n4. Scalability Challenges in Large Projects: The course book explicitly notes major difficulties applying EVM to very large IT projects due to architectural volatility.",
        "answerStructure": ["Explain 4 assumptions", "Explain 4 IT limitations"],
        "keywords": ["Reliable estimates", "Stable baseline", "Fluid requirements", "Agile overlap", "Physical completion measurement", "Large project difficulty"],
        "commonMistakes": "Claiming EVM is completely useless in software rather than explaining the specific contextual challenges.",
        "selfCheckChecklist": ["Listed 3-4 assumptions?", "Listed 3-4 IT challenges?", "Mentioned large IT project difficulties?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.3", "topic": "EVM Assumptions & IT Limitations", "page": 76}
    },
    {
        "id": "itpm-u3-qa-014", "unit": 3,
        "question": "Explain the four core functions of risk management (I-A-M-M) and the four risk response strategies.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Explain the 4 functions (Identify, Assess, Mitigate, Monitor) and the 4 treatments (Avoid, Mitigate, Transfer, Accept) while warning against confusing them.",
        "modelAnswer": "Risk management is a continuous lifecycle discipline comprising four core functions (I-A-M-M):\n\n1. Risk Identification and Description: Proactively detecting, cataloging, and documenting potential technical, cost, schedule, and organizational risks.\n2. Risk Assessment and Analysis: Evaluating the risk category, likelihood of occurrence, root cause, and severity of potential impact.\n3. Risk Mitigation / Response Selection: Choosing and implementing appropriate response strategies.\n4. Risk Monitoring and Reporting: Continuously tracking risk triggers, monitoring register updates, and detecting whether risks materialize, change, or vanish.\n\nFour Risk Response Strategies (Treatment Options):\n- Avoid: Changing project scope or architecture to completely eliminate the risk.\n- Mitigate: Taking proactive steps to reduce the likelihood and/or impact to an acceptable level.\n- Transfer: Shifting financial or operational impact to a third party (e.g. insurance, warranties, fixed-price vendor contracts).\n- Accept: Acknowledging residual risk and establishing contingency reserves without active intervention unless triggers occur.",
        "answerStructure": ["Explain 4 I-A-M-M functions", "Explain 4 response strategies", "Emphasize process vs response distinction"],
        "keywords": ["Identify", "Assess", "Mitigate", "Monitor", "I-A-M-M", "Avoid", "Mitigate", "Transfer", "Accept"],
        "commonMistakes": "Confusing the management process (I-A-M-M) with the response strategies (M-A-T-A).",
        "selfCheckChecklist": ["Described all 4 functions?", "Described all 4 response strategies?", "Clarified the distinction?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.4", "topic": "Risk Functions & Responses", "page": 77}
    },
    {
        "id": "itpm-u3-qa-015", "unit": 3,
        "question": "Explain the five levels of the IT Risk Management Maturity Model (A-A-O-M-A).",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "List and define Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.",
        "modelAnswer": "The Risk Management Maturity Model benchmarks organizational capability across five progressive stages (A-A-O-M-A):\n\n1. Level 1 - Ad hoc: Informal, disorganized, and chaotic. Risk handling depends on individual initiative; processes are undocumented, and budget/schedule deviations are common.\n2. Level 2 - Abbreviated: Basic risk processes exist, but are inconsistently understood and applied across teams; project outcomes remain largely unpredictable.\n3. Level 3 - Organized: Standardized, documented, and formal risk processes are institutionalized and integrated end-to-end across project lifecycles, producing predictable results.\n4. Level 4 - Managed: Process effectiveness is quantitatively measured and documented; empirical risk metrics are actively controlled and used for strategic decision-making.\n5. Level 5 - Adaptive: Continuous optimization through institutionalized feedback loops, process innovation, new technologies, and systematic organizational learning.",
        "answerStructure": ["Introduce A-A-O-M-A", "Detail Levels 1 to 5 with exact course titles and characteristics"],
        "keywords": ["Ad hoc (Level 1)", "Abbreviated (Level 2)", "Organized (Level 3)", "Managed (Level 4)", "Adaptive (Level 5)", "A-A-O-M-A"],
        "commonMistakes": "Using CMMI terms like 'Optimized' instead of the exact Unit 3 term 'Adaptive'.",
        "selfCheckChecklist": ["Used exact terms: Ad hoc, Abbreviated, Organized, Managed, Adaptive?", "Described progressive capability at each level?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.4", "topic": "Risk Maturity Model", "page": 77}
    },
    {
        "id": "itpm-u3-qa-016", "unit": 3,
        "question": "Compare Top-Down and Bottom-Up risk identification approaches in IT projects.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "Contrast task-level aggregation (bottom-up) with project symptom cascading (top-down).",
        "modelAnswer": "IT risk identification utilizes both bottom-up and top-down perspectives to achieve comprehensive coverage:\n\n1. Bottom-Up Risk Identification:\n- Process: Begins at the lowest WBS level (individual tasks and work packages). Developers and task leaders identify localized technical, resource, or schedule vulnerabilities.\n- Roll-Up: Localized risks are evaluated for cumulative impact and rolled upward to assess total work package and project consequences.\n- Strength: Detects detailed, ground-level technical and engineering risks that executives overlook.\n\n2. Top-Down Risk Identification:\n- Process: Begins at the macro project or work-package level by analyzing overarching performance problems, strategic constraints, or environmental variances.\n- Cascade: Cascades downward through the hierarchy to investigate and isolate the specific critical activities responsible.\n- Strength: Aligns risk analysis with strategic project objectives and executive governance priorities.",
        "answerStructure": ["Explain Bottom-Up process and strength", "Explain Top-Down process and strength", "Summary comparison"],
        "keywords": ["Bottom-Up", "Tasks to project", "Localized vulnerabilities", "Top-Down", "Project symptoms", "Cascade downward"],
        "commonMistakes": "Claiming one approach is universally superior rather than recognizing their complementary nature.",
        "selfCheckChecklist": ["Explained Bottom-Up?", "Explained Top-Down?", "Contrasted starting points and aggregation directions?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.4", "topic": "Top-Down vs Bottom-Up Identification", "page": 77}
    },
    {
        "id": "itpm-u3-qa-017", "unit": 3,
        "question": "Explain Qualitative Risk Analysis and describe four qualitative evaluation techniques supported in Unit 3.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "Define qualitative analysis and describe 4 tools: expert input, checklists, assumption analysis, cause-and-effect/influence diagrams, or SWOT.",
        "modelAnswer": "Qualitative Risk Analysis prioritizes identified risks by assessing their categories, likelihood of occurrence, and severity of potential impact using descriptive and evaluative methods.\n\nFour Supported Qualitative Techniques:\n1. Expert Judgment and Past-Project Reviews: Consulting domain veterans and reviewing historical project closeout reports to identify recurring risk patterns.\n2. Risk Checklists: Pre-populated lists of common IT failure points (e.g. data security, third-party API dependencies, scope creep) based on lessons learned.\n3. Assumption Analysis: Validating project planning assumptions; an unverified assumption is a potential risk that must be tested.\n4. Cause-and-Effect / Influence Diagrams: Ishikawa (fishbone) diagrams exploring root causes of technical failures, or influence diagrams mapping how variables affect project outcomes.\n\nThese techniques feed directly into the Likelihood-Impact matrix to establish mitigation priorities.",
        "answerStructure": ["Define qualitative risk analysis", "Explain 4 specific techniques", "Link to Likelihood-Impact prioritization"],
        "keywords": ["Qualitative analysis", "Expert judgment", "Checklists", "Assumption analysis", "Cause-and-effect diagrams", "Likelihood-Impact matrix"],
        "commonMistakes": "Including quantitative Monte Carlo simulations not present in Unit 3.",
        "selfCheckChecklist": ["Defined qualitative analysis?", "Described 4 distinct tools from the course book?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.4", "topic": "Qualitative Risk Analysis", "page": 78}
    },
    {
        "id": "itpm-u3-qa-018", "unit": 3,
        "question": "Describe the structure and purpose of the project Risk Register (Table 3) and explain the role of the Risk Owner.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "List Table 3 columns (Description, Likelihood, Severity, Owner, Mitigation Actions) and explain the Risk Owner's role.",
        "modelAnswer": "The Risk Register is the foundational, living artifact used to record, track, and manage all identified project uncertainties.\n\nStructure (Table 3 in Course Book):\n1. Risk Description: Clear, unambiguous statement of the uncertain event and its potential consequences (e.g. 'Scope creep from stakeholder requests').\n2. Likelihood: The probability of occurrence (e.g. Low, Medium, High).\n3. Severity (Impact): The magnitude of potential damage to schedule, budget, or quality (e.g. Low, Medium, High).\n4. Owner: The designated individual or group accountable for that specific risk.\n5. Mitigation Actions: The agreed proactive strategy or contingency action plan.\n\nRole of the Risk Owner:\nThe risk owner is the single assigned entity responsible for monitoring risk trigger symptoms, updating register entries, and executing the authorized response plan if the risk materializes. Assigning a designated owner ensures accountability and prevents risks from being neglected.",
        "answerStructure": ["Purpose of Risk Register", "Explain all 5 columns from Table 3", "Explain the role and accountability of the Risk Owner"],
        "keywords": ["Risk Register", "Table 3", "Risk Description", "Likelihood", "Severity", "Risk Owner", "Mitigation Actions", "Accountability"],
        "commonMistakes": "Treating the Risk Register as a static document created once and forgotten.",
        "selfCheckChecklist": ["Listed all 5 columns from Table 3?", "Defined the Risk Owner's responsibilities?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.4", "topic": "Risk Register", "page": 79}
    },
    {
        "id": "itpm-u3-qa-019", "unit": 3,
        "question": "Explain the 25/75 Rule in EVM and compare it with other physical completion measurement approaches.",
        "marks": 6, "priority": "MEDIUM PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "Explain the 25% start / 75% completion rule and why it is applied when incremental progress is hard to measure.",
        "modelAnswer": "In software projects, measuring the exact physical completion of ongoing intellectual work (e.g. algorithm architecture or debugging) is notoriously difficult.\n\nThe 25/75 Rule:\nTo prevent subjective guessing, the 25/75 crediting convention establishes that:\n- 25% of the task's budgeted value (EV) is credited immediately when work actively begins or preparation is verified.\n- 75% of the budgeted value is credited only when the task satisfies 100% of its completion criteria.\n\nComparison and Purpose:\nUnlike crude binary crediting (0/100 rule) which shows zero progress until final completion, or subjective percentage-complete estimates that encourage false optimism (e.g. tasks lingering at '90% done' for months), the 25/75 rule provides early visibility while tying the vast majority of earned value (75%) strictly to validated completion.",
        "answerStructure": ["Explain the measurement dilemma in software", "Define the 25/75 rule mechanics", "Contrast with 0/100 and subjective percentage"],
        "keywords": ["25/75 rule", "25% at start", "75% at completion", "Physical completion measurement", "Subjective progress prevention"],
        "commonMistakes": "Reversing the percentages (e.g. claiming 75% at start and 25% at end).",
        "selfCheckChecklist": ["25% at start/prep?", "75% at completion?", "Explained why it is used?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.3", "topic": "25/75 Rule", "page": 76}
    },
    {
        "id": "itpm-u3-qa-020", "unit": 3,
        "question": "A software project has Month 1 PV = $60,000, EV = $48,000, and AC = $72,000. It also faces an integration risk (High Likelihood / High Impact). Calculate EVM metrics, interpret status, and recommend risk management actions.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Calculate SV, CV, CPI, SPI; conclude behind schedule and over budget; propose risk avoidance/mitigation and risk register updates.",
        "modelAnswer": "1. EVM Metric Calculations:\n- SV = EV - PV = $48,000 - $60,000 = -$12,000.\n- CV = EV - AC = $48,000 - $72,000 = -$24,000.\n- CPI = EV / AC = $48,000 / $72,000 = 0.667 (~0.67).\n- SPI = EV / PV = $48,000 / $60,000 = 0.80.\n\n2. Operational Status Interpretation:\n- Schedule: Negative SV (-$12,000) and SPI = 0.80 (< 1.0) indicate the project is significantly behind schedule (achieved only 80% of scheduled work).\n- Budget: Negative CV (-$24,000) and CPI = 0.67 (< 1.0) indicate severe cost overruns (spending $1.50 for every $1.00 of earned value).\n\n3. Risk Management Actions:\n- Integration Risk Response: Rated High Likelihood / High Impact, this critical threat requires immediate proactive Mitigation or Avoidance. Build a rapid architectural spike/prototype to resolve interface mismatches, or adopt proven commercial middleware.\n- Risk Register Maintenance: Enter the integration risk in Table 3 with High/High ratings, assign a dedicated Technical Coordinator as Risk Owner, establish trigger symptoms, and fund contingency reserves from work-package buffers.",
        "answerStructure": ["Calculate SV, CV, CPI, SPI", "Interpret schedule and cost status", "Recommend risk responses and register actions"],
        "keywords": ["SV = -$12,000", "CV = -$24,000", "CPI = 0.67", "SPI = 0.80", "Behind schedule", "Over budget", "High/High risk", "Mitigation", "Risk Owner"],
        "commonMistakes": "Calculating metrics without explaining the operational risk recommendations.",
        "selfCheckChecklist": ["Calculated all 4 EVM metrics?", "Concluded behind schedule and over budget?", "Addressed the High/High integration risk?"],
        "source": {"type": "course-book", "unit": 3, "section": "3.3 & 3.4", "topic": "Case Analysis", "page": 74}
    }
]

# 3. COMPARISONS (12 comparisons)
comparisons = [
    {
        "id": "itpm-u3-comp-001", "title": "Agile vs Plan-Driven Cost Estimation", "unit": "Unit 3",
        "description": "Comparison of upfront predictive cost estimation versus iterative agile effort estimation.",
        "columns": ["Plan-Driven Cost Estimation", "Agile Cost Estimation"],
        "criteria": [
            {"aspect": "Planning Logic", "itemA": "Detailed early estimation of all activities upfront", "itemB": "Approximate initial sizing; refined iteratively per sprint"},
            {"aspect": "Fixed Constraint", "itemA": "Scope is generally fixed; cost and schedule may vary", "itemB": "Cost and schedule (sprint timebox) are fixed; scope varies"},
            {"aspect": "Primary Techniques", "itemA": "Three-point estimation, expert review, Function Point Analysis", "itemB": "Planning Poker, story points, velocity burn-down"}
        ],
        "examTrap": "Do not treat agile as having no estimates; agile fixes time and cost while varying scope.",
        "memoryRule": "Plan-driven = Scope fixed. Agile = Time & Cost fixed."
    },
    {
        "id": "itpm-u3-comp-002", "title": "Contingency Reserve vs Management Reserve", "unit": "Unit 3",
        "description": "Critical distinction between risk buffers for known-unknowns and unknown-unknowns.",
        "columns": ["Contingency Reserve", "Management Reserve"],
        "criteria": [
            {"aspect": "Addressed Uncertainties", "itemA": "Identified risks ('known-unknowns') evaluated in risk register", "itemB": "Unforeseen work within project scope ('unknown-unknowns')"},
            {"aspect": "Baseline Inclusion", "itemA": "Formally INCLUDED in the Cost Baseline", "itemB": "EXCLUDED from Cost Baseline; included in Project Budget"},
            {"aspect": "Control Level", "itemA": "Project Manager controls within work-package limits", "itemB": "Withheld by Project Sponsor / PMB for management control"}
        ],
        "examTrap": "Cost Baseline includes Contingency Reserves, but EXCLUDES Management Reserves.",
        "memoryRule": "Contingency = Known-unknowns (in baseline). Management = Unknown-unknowns (outside baseline)."
    },
    {
        "id": "itpm-u3-comp-003", "title": "Three-Point vs Expert Estimation", "unit": "Unit 3",
        "description": "Probabilistic statistical range modeling versus qualitative expert judgment.",
        "columns": ["Three-Point Estimation", "Expert Estimation"],
        "criteria": [
            {"aspect": "Methodology", "itemA": "Calculates probabilistic triangular distribution (o, m, p)", "itemB": "Relies on specialized experience, education, and domain training"},
            {"aspect": "Bias Control", "itemA": "Models asymmetric downside risk mathematically", "itemB": "Uses double-blind review to hide author/reviewer identity"},
            {"aspect": "Data Source", "itemA": "Gathered from project team and knowledgeable stakeholders", "itemB": "Provided by internal specialists or external consultants"}
        ],
        "examTrap": "Three-point estimation models variance; expert estimation leverages specialized historical judgment.",
        "memoryRule": "Three-Point = Probability range (o, m, p). Expert = Specialized knowledge + double-blind."
    },
    {
        "id": "itpm-u3-comp-004", "title": "Expert Estimation vs Planning Poker", "unit": "Unit 3",
        "description": "Independent specialist review versus collaborative agile team consensus.",
        "columns": ["Expert Estimation", "Planning Poker"],
        "criteria": [
            {"aspect": "Participants", "itemA": "Specialized internal or external experts / consultants", "itemB": "The cross-functional agile team performing the work"},
            {"aspect": "Estimation Process", "itemA": "Double-blind review protocol to eliminate social bias", "itemB": "Simultaneous card reveal, extreme discussions, consensus"},
            {"aspect": "Output Metric", "itemA": "Monetary cost figures or direct person-hours", "itemB": "Relative story points or ideal days on a Fibonacci scale"}
        ],
        "examTrap": "Planning poker is team consensus; expert estimation is external/internal specialist judgment.",
        "memoryRule": "Expert = Specialized consultation. Planning Poker = Team consensus game."
    },
    {
        "id": "itpm-u3-comp-005", "title": "Function Point Analysis vs Planning Poker", "unit": "Unit 3",
        "description": "Standardized functional sizing metric versus relative agile effort sizing.",
        "columns": ["Function Point Analysis (FPA)", "Planning Poker"],
        "criteria": [
            {"aspect": "Underlying Metric", "itemA": "Standardized functional size (UFP, TDI, CAF, FP)", "itemB": "Relative story points based on team consensus"},
            {"aspect": "Technology Dependence", "itemA": "Strictly technology-independent based on business functions", "itemB": "Relative to the specific team's technical implementation capability"},
            {"aspect": "Best Application", "itemA": "Standard dialogue and MIS information systems", "itemB": "Agile software sprints and iterative user story sizing"}
        ],
        "examTrap": "FPA measures functional product size; planning poker sizes relative delivery effort.",
        "memoryRule": "FPA = System size in Function Points. Planning Poker = Sprint effort in Story Points."
    },
    {
        "id": "itpm-u3-comp-006", "title": "Planned Value (PV) vs Earned Value (EV) vs Actual Cost (AC)", "unit": "Unit 3",
        "description": "The three foundational pillars of Earned Value Management.",
        "columns": ["Planned Value (PV) / Earned Value (EV)", "Actual Cost (AC)"],
        "criteria": [
            {"aspect": "Core Concept", "itemA": "PV = Authorized budget scheduled; EV = Budgeted value performed", "itemB": "AC = Real monetary expenditure incurred to date"},
            {"aspect": "Memory Phrase", "itemA": "PV = 'What should be done'; EV = 'What was earned'", "itemB": "AC = 'What was actually spent'"},
            {"aspect": "Baseline Role", "itemA": "Both are valued in authorized baseline dollars", "itemB": "Drawn directly from accounting general ledgers"}
        ],
        "examTrap": "EV is based on budgeted rates, NOT actual cost spent.",
        "memoryRule": "PV = Budget scheduled. EV = Budget earned. AC = Real money spent."
    },
    {
        "id": "itpm-u3-comp-007", "title": "Schedule Variance (SV) vs Cost Variance (CV)", "unit": "Unit 3",
        "description": "Comparison of schedule deviation in dollars versus budget surplus/deficit.",
        "columns": ["Schedule Variance (SV)", "Cost Variance (CV)"],
        "criteria": [
            {"aspect": "Mathematical Formula", "itemA": "SV = EV - PV", "itemB": "CV = EV - AC"},
            {"aspect": "Dimension Evaluated", "itemA": "Schedule performance expressed in budget currency", "itemB": "Cost performance (budget surplus or deficit)"},
            {"aspect": "Positive Sign Meaning", "itemA": "Positive SV = Ahead of schedule", "itemB": "Positive CV = Under budget (favorable surplus)"}
        ],
        "examTrap": "SV compares EV with PV; CV compares EV with AC. Both start with EV.",
        "memoryRule": "SV = EV - PV (Schedule). CV = EV - AC (Cost). Value First!"
    },
    {
        "id": "itpm-u3-comp-008", "title": "Cost Performance Index (CPI) vs Schedule Performance Index (SPI)", "unit": "Unit 3",
        "description": "Comparison of normalized cost efficiency versus schedule progress efficiency.",
        "columns": ["Cost Performance Index (CPI)", "Schedule Performance Index (SPI)"],
        "criteria": [
            {"aspect": "Mathematical Formula", "itemA": "CPI = EV / AC", "itemB": "SPI = EV / PV"},
            {"aspect": "Efficiency Focus", "itemA": "Financial cost efficiency ($ earned per $ spent)", "itemB": "Schedule progression rate (work earned vs planned)"},
            {"aspect": "Threshold Rule", "itemA": "< 1 = Cost overrun; > 1 = Cost underrun (efficient)", "itemB": "< 1 = Behind schedule; > 1 = Ahead of schedule"}
        ],
        "examTrap": "EV is always the numerator in both indices.",
        "memoryRule": "CPI = EV / AC. SPI = EV / PV. Greater than 1.0 is favorable."
    },
    {
        "id": "itpm-u3-comp-009", "title": "Earned Value Management vs Burn-Down Chart", "unit": "Unit 3",
        "description": "Integrated baseline progress measurement versus agile effort remaining tracking.",
        "columns": ["Earned Value Management (EVM)", "Agile Burn-Down Chart"],
        "criteria": [
            {"aspect": "Core Question", "itemA": "'How much value has been earned relative to money spent?'", "itemB": "'How much work/effort remains in the sprint?'"},
            {"aspect": "Visual Trajectory", "itemA": "Ascending S-curves tracking cumulative PV, EV, and AC", "itemB": "Descending line burning downward from 100% to 0%"},
            {"aspect": "Primary Domain", "itemA": "Plan-driven, hybrid, and formal contract reporting", "itemB": "Daily sprint tracking within agile development teams"}
        ],
        "examTrap": "Burn-down charts do not track financial actual cost or earned monetary value.",
        "memoryRule": "EVM = Value earned vs money spent. Burn-down = Remaining effort descending to 0."
    },
    {
        "id": "itpm-u3-comp-010", "title": "Top-Down vs Bottom-Up Risk Identification", "unit": "Unit 3",
        "description": "Symptom-driven investigation versus task-level vulnerability aggregation.",
        "columns": ["Top-Down Risk Identification", "Bottom-Up Risk Identification"],
        "criteria": [
            {"aspect": "Starting Point", "itemA": "Project-level performance symptoms or strategic issues", "itemB": "Individual tasks and granular engineering activities"},
            {"aspect": "Analytical Direction", "itemA": "Cascades downward to isolate critical activity causes", "itemB": "Aggregates upward to work packages and total project impact"},
            {"aspect": "Primary Strength", "itemA": "Maintains strategic perspective aligned with governance", "itemB": "Surfaces hidden ground-level technical vulnerabilities"}
        ],
        "examTrap": "Bottom-up aggregates upward; top-down cascades downward from macroscopic symptoms.",
        "memoryRule": "Top-Down = Project symptoms down. Bottom-Up = Task vulnerabilities up."
    },
    {
        "id": "itpm-u3-comp-011", "title": "Qualitative vs Quantitative Risk Analysis", "unit": "Unit 3",
        "description": "Descriptive prioritization versus mathematical impact modeling.",
        "columns": ["Qualitative Risk Analysis", "Quantitative Risk Analysis"],
        "criteria": [
            {"aspect": "Analytical Approach", "itemA": "Descriptive, categorical evaluation (likelihood x severity)", "itemB": "Numerical estimation of potential monetary/schedule impacts"},
            {"aspect": "Core Techniques", "itemA": "Checklists, SWOT, assumption analysis, cause-and-effect", "itemB": "Mathematical cost projections and EVM-style forecasts"},
            {"aspect": "Primary Output", "itemA": "Prioritized risk list and Likelihood-Impact matrix", "itemB": "Numerical cost reserves and probability distributions"}
        ],
        "examTrap": "Qualitative prioritizes based on categories; quantitative assigns numerical financial/time values.",
        "memoryRule": "Qualitative = Categories & Likelihood-Impact matrix. Quantitative = Numbers & dollars."
    },
    {
        "id": "itpm-u3-comp-012", "title": "Risk Management Process vs Risk Response Strategies", "unit": "Unit 3",
        "description": "The four continuous lifecycle management functions versus the four risk treatment options.",
        "columns": ["Risk Management Process (I-A-M-M)", "Risk Response Strategies (M-A-T-A)"],
        "criteria": [
            {"aspect": "Core Identity", "itemA": "The four lifecycle management functions", "itemB": "The four tactical risk treatment options"},
            {"aspect": "Constituent Elements", "itemA": "Identify, Assess/Analyse, Mitigate/Respond, Monitor/Report", "itemB": "Avoid, Mitigate, Transfer, Accept"},
            {"aspect": "Operational Role", "itemA": "Continuous governance cycle executed across all phases", "itemB": "Specific response tactics chosen during the Mitigate step"}
        ],
        "examTrap": "Do not confuse the 4 management functions (I-A-M-M) with the 4 response options (Avoid/Mitigate/Transfer/Accept).",
        "memoryRule": "Process = I-A-M-M functions. Tactics = Avoid, Mitigate, Transfer, Accept."
    }
]

# 4. EXAM TRAPS (18 traps)
traps = [
    {
        "id": "itpm-u3-trap-001", "unit": 3, "topic": "EV vs AC",
        "commonStudentMistake": "Assuming Earned Value (EV) and Actual Cost (AC) are the same number.",
        "correctAcademicTruth": "EV is the budgeted value of work performed; AC is real cash spent. They only match if CPI is exactly 1.0.",
        "whyExaminerDeductsMarks": "Conflates physical work accomplished with money spent, defeating the entire purpose of EVM.",
        "howToRemember": "EV = Work accomplished in budget dollars. AC = Real cash disbursed."
    },
    {
        "id": "itpm-u3-trap-002", "unit": 3, "topic": "PV vs EV",
        "commonStudentMistake": "Confusing Planned Value (PV) with Earned Value (EV).",
        "correctAcademicTruth": "PV is what was scheduled to be done; EV is what was actually completed. Comparing them gives SV.",
        "whyExaminerDeductsMarks": "Fails to distinguish scheduled plans from realized deliverables.",
        "howToRemember": "PV = Scheduled budget. EV = Earned budget."
    },
    {
        "id": "itpm-u3-trap-003", "unit": 3, "topic": "Formula Signs: Cost Variance",
        "commonStudentMistake": "Calculating CV as AC - EV, or thinking positive CV means over budget.",
        "correctAcademicTruth": "CV = EV - AC. Positive CV is favorable (under budget surplus); Negative CV is unfavorable (over budget deficit).",
        "whyExaminerDeductsMarks": "Value First rule: EV always leads. Reversing terms reverses the management conclusion.",
        "howToRemember": "CV = EV - AC. Positive is good (surplus); Negative is bad (over budget)."
    },
    {
        "id": "itpm-u3-trap-004", "unit": 3, "topic": "Formula Signs: Schedule Variance",
        "commonStudentMistake": "Calculating SV as PV - EV, or comparing EV with AC for schedule.",
        "correctAcademicTruth": "SV = EV - PV. Compares EV with PV (never AC). Positive = ahead; Negative = behind schedule.",
        "whyExaminerDeductsMarks": "Mixing cost data into schedule variance calculations.",
        "howToRemember": "SV checks Schedule, so compare EV with PV. EV leads: SV = EV - PV."
    },
    {
        "id": "itpm-u3-trap-005", "unit": 3, "topic": "Performance Index Thresholds",
        "commonStudentMistake": "Thinking CPI < 1.0 or SPI < 1.0 is favorable.",
        "correctAcademicTruth": "Values less than 1.0 are always unfavorable (cost overrun or schedule delay). Values greater than 1.0 are favorable.",
        "whyExaminerDeductsMarks": "Reverses the financial and schedule efficiency logic.",
        "howToRemember": "Index < 1.0 is unfavorable; Index > 1.0 is favorable."
    },
    {
        "id": "itpm-u3-trap-006", "unit": 3, "topic": "Contingency vs Management Reserve",
        "commonStudentMistake": "Believing contingency reserves and management reserves serve the same purpose.",
        "correctAcademicTruth": "Contingency reserves address identified risks ('known-unknowns'); management reserves address unforeseen work within scope ('unknown-unknowns').",
        "whyExaminerDeductsMarks": "Fails to distinguish baseline risk buffers from executive control reserves.",
        "howToRemember": "Contingency = Known-unknowns. Management = Unknown-unknowns."
    },
    {
        "id": "itpm-u3-trap-007", "unit": 3, "topic": "Management Reserve in Baseline",
        "commonStudentMistake": "Including Management Reserve inside the project Cost Baseline.",
        "correctAcademicTruth": "The Cost Baseline EXCLUDES management reserve. Total Project Budget = Cost Baseline + Management Reserve.",
        "whyExaminerDeductsMarks": "EVM performance baseline (PMB) cannot contain management reserve.",
        "howToRemember": "Cost Baseline = Work Packages + Contingency (NO Management Reserve)."
    },
    {
        "id": "itpm-u3-trap-008", "unit": 3, "topic": "FPA Effort Fallacy",
        "commonStudentMistake": "Thinking that because FPA is technology-independent, it directly gives project cost without effort conversion.",
        "correctAcademicTruth": "FPA measures functional size only. Sizing must still be converted to person-hours and monetary cost based on team productivity.",
        "whyExaminerDeductsMarks": "Conflates functional sizing with financial budgeting.",
        "howToRemember": "FPA gives functional size (FP). You must multiply by hours/FP to get effort and cost."
    },
    {
        "id": "itpm-u3-trap-009", "unit": 3, "topic": "FPA Weight Tampering",
        "commonStudentMistake": "Using FPA weights from outside standards rather than the official Unit 3 weights.",
        "correctAcademicTruth": "Official weights: Input (2/4/6), Output (3/5/7), Inquiry (2/4/6), Interface (5/7/10), File (7/10/15).",
        "whyExaminerDeductsMarks": "Violates IU curriculum exam standard.",
        "howToRemember": "Inputs & Inquiries = 2/4/6. Outputs = 3/5/7. Interfaces = 5/7/10. Files = 7/10/15."
    },
    {
        "id": "itpm-u3-trap-010", "unit": 3, "topic": "Planning Poker Averaging Fallacy",
        "commonStudentMistake": "Averaging divergent planning poker votes to establish the story point estimate.",
        "correctAcademicTruth": "Planning poker requires consensus. Teams discuss outliers (high and low) and re-vote until consensus is achieved.",
        "whyExaminerDeductsMarks": "Averaging masks underlying scope misunderstandings.",
        "howToRemember": "Never average planning poker cards; discuss outliers and re-vote to consensus."
    },
    {
        "id": "itpm-u3-trap-011", "unit": 3, "topic": "Burn-Down Chart vs EVM",
        "commonStudentMistake": "Assuming a burn-down chart measures earned monetary value or cost efficiency.",
        "correctAcademicTruth": "Burn-down charts only track remaining effort in a sprint descending to zero. They do not track financial expenditures or EVM ratios.",
        "whyExaminerDeductsMarks": "Confuses agile sprint effort tracking with earned value cost control.",
        "howToRemember": "Burn-down = Effort left (hours/points). EVM = Budgeted value earned vs cash spent."
    },
    {
        "id": "itpm-u3-trap-012", "unit": 3, "topic": "Continuous Risk Management",
        "commonStudentMistake": "Treating risk management as a one-time planning activity completed during initiation.",
        "correctAcademicTruth": "Risk management is continuous across the entire project lifecycle. Risks evolve, emerge, and vanish continuously.",
        "whyExaminerDeductsMarks": "One-time risk planning guarantees failure as external conditions change.",
        "howToRemember": "Risk management never stops until final project termination."
    },
    {
        "id": "itpm-u3-trap-013", "unit": 3, "topic": "Risk Process vs Response Options",
        "commonStudentMistake": "Listing Avoid, Mitigate, Transfer, Accept as the four risk management functions.",
        "correctAcademicTruth": "The 4 functions are I-A-M-M (Identify, Assess, Mitigate, Monitor). Avoid, Mitigate, Transfer, Accept are the 4 response strategies.",
        "whyExaminerDeductsMarks": "Conflates the governance lifecycle with tactical treatment options.",
        "howToRemember": "Process = I-A-M-M functions. Tactics = Avoid, Mitigate, Transfer, Accept."
    },
    {
        "id": "itpm-u3-trap-014", "unit": 3, "topic": "Risk Maturity Level 1 vs Level 5",
        "commonStudentMistake": "Naming Level 1 'Initial' or Level 5 'Optimized' using generic CMMI terminology.",
        "correctAcademicTruth": "In Unit 3, Level 1 is Ad hoc and Level 5 is Adaptive (A-A-O-M-A: Ad hoc, Abbreviated, Organized, Managed, Adaptive).",
        "whyExaminerDeductsMarks": "Fails to use course-specific terminology.",
        "howToRemember": "A-A-O-M-A: Ad hoc (1) -> Abbreviated (2) -> Organized (3) -> Managed (4) -> Adaptive (5)."
    },
    {
        "id": "itpm-u3-trap-015", "unit": 3, "topic": "25/75 Rule Usage",
        "commonStudentMistake": "Claiming the 25/75 rule credits 75% at start and 25% at completion.",
        "correctAcademicTruth": "25% is credited upon initiation/preparation; the remaining 75% is credited upon validated 100% completion.",
        "whyExaminerDeductsMarks": "Reversing percentages encourages false claims of progress before work is finished.",
        "howToRemember": "25% at start, 75% at completion."
    },
    {
        "id": "itpm-u3-trap-016", "unit": 3, "topic": "Precision vs Accuracy Trap",
        "commonStudentMistake": "Believing that an estimate with 4 decimal places is automatically accurate.",
        "correctAcademicTruth": "Decimal places represent precision (refinement), not accuracy. An estimate can be precisely wrong.",
        "whyExaminerDeductsMarks": "Confuses superficial granularity with truthfulness to reality.",
        "howToRemember": "Accuracy = Correctness. Precision = Decimal places / detail."
    },
    {
        "id": "itpm-u3-trap-017", "unit": 3, "topic": "Risk Owner Blame Fallacy",
        "commonStudentMistake": "Thinking the Risk Owner is a scapegoat who is penalized if a risk occurs.",
        "correctAcademicTruth": "A risk owner is the designated entity accountable for monitoring trigger symptoms and executing the planned mitigation response.",
        "whyExaminerDeductsMarks": "Misinterprets risk governance as personal liability.",
        "howToRemember": "Risk Owner = Accountable monitor and response manager."
    },
    {
        "id": "itpm-u3-trap-018", "unit": 3, "topic": "NPV Discounting Formula",
        "commonStudentMistake": "Multiplying Future Value by (1 + interest) instead of dividing.",
        "correctAcademicTruth": "NPV discounts future money back to today: NPV = Future Value / (1 + interest)^t.",
        "whyExaminerDeductsMarks": "Compounding money into the future instead of discounting to present value.",
        "howToRemember": "Present Value divides: FV / (1 + i)^t."
    }
]

# 5. FORMULAS & CALCULATIONS (for Calculation Lab & Numbers view)
formulas = [
    {
        "id": "itpm-u3-form-001",
        "name": "Return on Investment (ROI)",
        "formula": "ROI = Net Gain / Project Cost",
        "unit": 3,
        "description": "Calculates the financial return relative to project expenditure.",
        "variables": [
            {"symbol": "Net Gain", "meaning": "Total financial gains/revenue minus project cost"},
            {"symbol": "Project Cost", "meaning": "Total capital invested in the project"}
        ],
        "interpretation": "Positive ROI = financial profit; Negative ROI = financial loss. Higher is better.",
        "example": "Net Gain = $800,000, Cost = $1,000,000 -> ROI = 800k / 1M = 0.80 (80%)."
    },
    {
        "id": "itpm-u3-form-002",
        "name": "Net Present Value (NPV)",
        "formula": "NPV = Future Value / (1 + interest)^time periods",
        "unit": 3,
        "description": "Discounts future cash revenue back to current present value.",
        "variables": [
            {"symbol": "Future Value", "meaning": "Anticipated future monetary cash inflow"},
            {"symbol": "interest", "meaning": "Discount or interest rate per period"},
            {"symbol": "time periods", "meaning": "Number of compounding time periods"}
        ],
        "interpretation": "Expresses the current purchasing power of future cash flows.",
        "example": "FV = $1,100 in 1 year at 10% interest -> NPV = 1100 / (1 + 0.10)^1 = $1,000."
    },
    {
        "id": "itpm-u3-form-003",
        "name": "Profitability Index",
        "formula": "Profitability Index = NPV / Project Cost",
        "unit": 3,
        "description": "Measures discounted value generated per dollar of project investment.",
        "variables": [
            {"symbol": "NPV", "meaning": "Discounted net present value of project gains"},
            {"symbol": "Project Cost", "meaning": "Total initial capital expenditure"}
        ],
        "interpretation": "Values > 1.0 indicate favorable return where NPV exceeds project cost.",
        "example": "NPV = $1,200,000, Cost = $1,000,000 -> PI = 1.2M / 1.0M = 1.2 (Favorable)."
    },
    {
        "id": "itpm-u3-form-004",
        "name": "FPA Complexity Adjustment Factor (CAF)",
        "formula": "CAF = 0.01 x TDI + 0.65",
        "unit": 3,
        "description": "Adjusts unadjusted function points based on 14 general system characteristics.",
        "variables": [
            {"symbol": "TDI", "meaning": "Total Degree of Influence (sum of 14 scores from 0 to 5, range 0 to 70)"},
            {"symbol": "0.65", "meaning": "Baseline adjustment constant"}
        ],
        "interpretation": "Typical range is 0.65 (no influence) to 1.35 (maximum influence).",
        "example": "TDI = 34 -> CAF = 0.01 * 34 + 0.65 = 0.34 + 0.65 = 0.99."
    },
    {
        "id": "itpm-u3-form-005",
        "name": "Adjusted Function Points (FP)",
        "formula": "FP = UFP x CAF",
        "unit": 3,
        "description": "Calculates final technology-independent functional software size.",
        "variables": [
            {"symbol": "UFP", "meaning": "Unadjusted Function Points (sum of weighted I-O-Q-I-F functions)"},
            {"symbol": "CAF", "meaning": "Complexity Adjustment Factor"}
        ],
        "interpretation": "Final functional size used for cross-language sizing and productivity baselines.",
        "example": "UFP = 120, CAF = 0.99 -> FP = 120 * 0.99 = 118.8."
    },
    {
        "id": "itpm-u3-form-006",
        "name": "EVM Schedule Variance (SV)",
        "formula": "SV = EV - PV",
        "unit": 3,
        "description": "Measures schedule deviation expressed in budget currency.",
        "variables": [
            {"symbol": "EV", "meaning": "Earned Value (budgeted value of work completed)"},
            {"symbol": "PV", "meaning": "Planned Value (authorized budget for scheduled work)"}
        ],
        "interpretation": "Positive SV = Ahead of schedule; Negative SV = Behind schedule. Zero = on schedule.",
        "example": "EV = $2,500, PV = $3,000 -> SV = 2500 - 3000 = -$500 (Behind schedule)."
    },
    {
        "id": "itpm-u3-form-007",
        "name": "EVM Cost Variance (CV)",
        "formula": "CV = EV - AC",
        "unit": 3,
        "description": "Measures budget surplus or deficit at a given reporting date.",
        "variables": [
            {"symbol": "EV", "meaning": "Earned Value (budgeted value of work completed)"},
            {"symbol": "AC", "meaning": "Actual Cost (real money spent)"}
        ],
        "interpretation": "Positive CV = Under budget (surplus); Negative CV = Over budget (deficit).",
        "example": "EV = $2,500, AC = $3,500 -> CV = 2500 - 3500 = -$1,000 (Over budget)."
    },
    {
        "id": "itpm-u3-form-008",
        "name": "Cost Performance Index (CPI)",
        "formula": "CPI = EV / AC",
        "unit": 3,
        "description": "Measures cost efficiency of earned work per dollar spent.",
        "variables": [
            {"symbol": "EV", "meaning": "Earned Value in numerator"},
            {"symbol": "AC", "meaning": "Actual Cost in denominator"}
        ],
        "interpretation": "< 1.0 = Cost overrun / inefficient; > 1.0 = Under budget / efficient. 1.0 = on budget.",
        "example": "EV = $2,500, AC = $3,500 -> CPI = 2500 / 3500 = 0.714 (Cost overrun)."
    },
    {
        "id": "itpm-u3-form-009",
        "name": "Schedule Performance Index (SPI)",
        "formula": "SPI = EV / PV",
        "unit": 3,
        "description": "Measures schedule progression rate relative to plan.",
        "variables": [
            {"symbol": "EV", "meaning": "Earned Value in numerator"},
            {"symbol": "PV", "meaning": "Planned Value in denominator"}
        ],
        "interpretation": "< 1.0 = Behind schedule; > 1.0 = Ahead of schedule. 1.0 = on schedule.",
        "example": "EV = $2,500, PV = $3,000 -> SPI = 2500 / 3000 = 0.833 (Behind schedule)."
    }
]

# 6. MOCK EXAMS (Unit 3 Mock Test 1 and Mock Test 2)
# Using MCQs 1-40 for Mock 1, and MCQs 21-60 / generated set for Mock 2
mock_exams = [
    {
        "id": "itpm-u3-mock-01",
        "title": "Unit 3 Mock Exam 1",
        "subtitle": "Cost Estimation, FPA, Earned Value Management, and Risk Lifecycle",
        "totalMarks": 90,
        "timeLimitMinutes": 120,
        "mcqIds": [f"itpm-u3-s{sec.replace('.', '')}-mcq-{i:03d}" for i, sec in enumerate(["3.1"]*15 + ["3.2"]*15 + ["3.3"]*10, 1)],
        "descriptiveQuestions": [
            {
                "id": "itpm-u3-mock1-desc-01", "unit": 3,
                "question": "Explain six factors that make cost estimation difficult in IT projects. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Scope fluidity", "Technology obsolescence", "Resource price fluctuation", "Planning horizon", "Size/complexity", "Staffing turnover"],
                "modelAnswer": "Cost estimation in IT is complex due to: 1. Uncertain scope; 2. Technology advancements; 3. Price changes; 4. Planning horizon; 5. Size and interdependencies; 6. Staffing and skill availability.",
                "rubricItems": [{"point": "Identified and explained 6 IT cost estimation factors", "marksAllotted": 6}],
                "examinerAdvice": "Focus on IT specific factors like scope fluidity and technology shifts rather than generic corporate factors."
            },
            {
                "id": "itpm-u3-mock1-desc-02", "unit": 3,
                "question": "Explain the structure and purpose of contingency reserves and management reserves. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Contingency reserves (known-unknowns, in baseline)", "Management reserves (unknown-unknowns, outside baseline)", "Budget hierarchy comparison"],
                "modelAnswer": "Contingency reserves address identified risks ('known-unknowns') and are included in the Cost Baseline. Management reserves address unforeseen work within scope ('unknown-unknowns') and are held at the project level, excluded from the Cost Baseline.",
                "rubricItems": [{"point": "Contrasted known-unknowns vs unknown-unknowns and baseline inclusion", "marksAllotted": 6}],
                "examinerAdvice": "Clearly state that management reserve is EXCLUDED from the Cost Baseline used for EVM."
            },
            {
                "id": "itpm-u3-mock1-desc-03", "unit": 3,
                "question": "Explain Function Point Analysis and state its main advantages and limitations. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Definition of FPA & 5 types", "Advantages (technology-independent, contracts)", "Limitations (subjective, conversion to effort)"],
                "modelAnswer": "FPA measures software size through 5 function types (Inputs, Outputs, Inquiries, Interfaces, Files). Advantages: technology-independent, early estimation, contract negotiations. Limitations: subjective complexity ratings, requires conversion to effort and cost, weak for algorithmic systems.",
                "rubricItems": [{"point": "Explained FPA concept, 5 types, advantages, and limitations", "marksAllotted": 6}],
                "examinerAdvice": "Remember to note that FPA still requires conversion to effort/cost."
            },
            {
                "id": "itpm-u3-mock1-desc-04", "unit": 3,
                "question": "Define PV, EV and AC, and explain how SV and CV are calculated and interpreted. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Define PV, EV, AC", "State SV = EV - PV and CV = EV - AC", "Value First rule", "Sign interpretations"],
                "modelAnswer": "PV = authorized budget scheduled; EV = budgeted value earned; AC = actual cash spent. SV = EV - PV (positive = ahead; negative = behind). CV = EV - AC (positive = under budget; negative = over budget). EV always leads in both formulas.",
                "rubricItems": [{"point": "Correct definitions, formulas, and sign interpretations", "marksAllotted": 6}],
                "examinerAdvice": "Never reverse the formula terms; EV must come first."
            },
            {
                "id": "itpm-u3-mock1-desc-05", "unit": 3,
                "question": "Explain the four core functions of risk management and the four response options. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Four functions: Identify, Assess, Mitigate, Monitor (I-A-M-M)", "Four responses: Avoid, Mitigate, Transfer, Accept", "Process vs response distinction"],
                "modelAnswer": "Risk cycle functions: Identify, Assess, Mitigate, Monitor (I-A-M-M). Risk response strategies: Avoid (eliminate cause), Mitigate (reduce likelihood/impact), Transfer (shift to 3rd party), Accept (retain with contingency reserve).",
                "rubricItems": [{"point": "Named all 4 functions and all 4 response strategies correctly", "marksAllotted": 6}],
                "examinerAdvice": "Do not confuse the management process (I-A-M-M) with the response strategies."
            },
            {
                "id": "itpm-u3-mock1-desc-06", "unit": 3,
                "question": "A software project has Month 1 PV = $60,000, EV = $48,000, and AC = $72,000. It faces an integration risk (High Likelihood / High Impact) and supplier delay (Medium Likelihood / High Impact). Calculate SV, CV, CPI, SPI; interpret status; propose risk responses; and explain Risk Register monitoring. [20 marks]",
                "marks": 20, "suggestedMinutes": 35,
                "answerStructure": ["EVM calculations (SV, CV, CPI, SPI)", "Status interpretation", "Risk responses for both risks", "Risk Register logging & continuous monitoring"],
                "modelAnswer": "1. Calculations:\n- SV = EV - PV = $48k - $60k = -$12,000\n- CV = EV - AC = $48k - $72k = -$24,000\n- CPI = EV / AC = $48k / $72k = 0.67\n- SPI = EV / PV = $48k / $60k = 0.80\n2. Status: Project is behind schedule (SPI=0.80 < 1) and over budget (CPI=0.67 < 1).\n3. Risk Responses: Integration risk (High/High) requires Mitigation/Avoidance via technical proof-of-concept spike and standardized middleware. Supplier delay (Med/High) requires Transfer via contractual SLA penalties and buffer inventory.\n4. Risk Register: Enter description, likelihood, severity, assigned owner, and mitigation actions. Update continuously across lifecycle.",
                "rubricItems": [
                    {"point": "Accurate EVM calculations with formulas", "marksAllotted": 6},
                    {"point": "Clear operational status interpretation", "marksAllotted": 4},
                    {"point": "Sound risk response strategies for both scenarios", "marksAllotted": 6},
                    {"point": "Risk Register structure, ownership, and monitoring procedure", "marksAllotted": 4}
                ],
                "examinerAdvice": "Follow the formula -> substitution -> result -> interpretation structure for all calculations."
            }
        ]
    },
    {
        "id": "itpm-u3-mock-02",
        "title": "Unit 3 Mock Exam 2",
        "subtitle": "Estimation Quality, Planning Poker, EVM Assumptions, and Risk Maturity",
        "totalMarks": 90,
        "timeLimitMinutes": 120,
        "mcqIds": [f"itpm-u3-s{sec.replace('.', '')}-mcq-{i:03d}" for i, sec in enumerate(["3.1"]*10 + ["3.2"]*15 + ["3.3"]*10 + ["3.4"]*5, 11)],
        "descriptiveQuestions": [
            {
                "id": "itpm-u3-mock2-desc-01", "unit": 3,
                "question": "Compare plan-driven and agile cost estimation and identify suitable techniques for each. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Plan-driven constraints and techniques", "Agile constraints and techniques", "Direct contrast"],
                "modelAnswer": "Plan-driven fixes scope upfront while cost/schedule vary; uses Three-point estimation, expert review, and FPA. Agile fixes cost and schedule (timeboxed sprints) while scope varies iteratively; uses Planning Poker and velocity burn-down.",
                "rubricItems": [{"point": "Contrasted constraints and assigned appropriate techniques", "marksAllotted": 6}],
                "examinerAdvice": "Contrast which constraint is fixed vs variable in each approach."
            },
            {
                "id": "itpm-u3-mock2-desc-02", "unit": 3,
                "question": "Explain three-point estimation, expert estimation and the purpose of double-blind review. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Three-point parameters & distribution", "Expert sources", "Double-blind review purpose and limitation"],
                "modelAnswer": "Three-point estimation uses optimistic, likely, and pessimistic values to model skewed cost distributions. Expert estimation uses domain specialists. Double-blind review hides estimator and reviewer identities to eliminate power, gender, race, and seniority bias.",
                "rubricItems": [{"point": "Explained three-point parameters, expert estimation, and double-blind review", "marksAllotted": 6}],
                "examinerAdvice": "Mention the downside skew and the small-field limitation of double-blind review."
            },
            {
                "id": "itpm-u3-mock2-desc-03", "unit": 3,
                "question": "Explain the planning-poker process step by step and why it is useful. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["7-step sequence", "Anchoring prevention", "Consensus benefits"],
                "modelAnswer": "7 steps: Break work, agree unit, estimate independently, reveal simultaneously, highest/lowest explain, discuss, repeat to consensus. Useful because it prevents anchoring, shields against executive coercion, and builds team consensus.",
                "rubricItems": [{"point": "Detailed 7 steps and explained anti-anchoring benefits", "marksAllotted": 6}],
                "examinerAdvice": "State clearly that planning poker uses consensus, not averaging."
            },
            {
                "id": "itpm-u3-mock2-desc-04", "unit": 3,
                "question": "Discuss the advantages, assumptions and limitations of EVM in IT projects. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Advantages of EVM", "Core assumptions", "IT software limitations"],
                "modelAnswer": "Advantages: visualizes cost and schedule progress together against baseline. Assumptions: sound initial estimates, stable baseline, reliable tracking. Limitations in IT: fluid scope makes EV hard to define, agile iterations blur baselines, and physical completion is hard to measure.",
                "rubricItems": [{"point": "Discussed advantages, assumptions, and IT-specific limitations", "marksAllotted": 6}],
                "examinerAdvice": "Address why large IT projects struggle with EVM definition."
            },
            {
                "id": "itpm-u3-mock2-desc-05", "unit": 3,
                "question": "Explain the five levels of IT risk-management maturity and how maturity improves project control. [6 marks]",
                "marks": 6, "suggestedMinutes": 10,
                "answerStructure": ["Name 5 levels (A-A-O-M-A)", "Define each level", "Impact on cost/schedule control"],
                "modelAnswer": "Level 1: Ad hoc (informal/disorganized); Level 2: Abbreviated (some process, inconsistent); Level 3: Organized (standardized/documented); Level 4: Managed (measured and controlled); Level 5: Adaptive (continuous improvement). Higher maturity reduces deviations and yields predictable delivery.",
                "rubricItems": [{"point": "Named all 5 levels correctly and linked to project control", "marksAllotted": 6}],
                "examinerAdvice": "Use exact Unit 3 terms: Ad hoc, Abbreviated, Organized, Managed, Adaptive."
            },
            {
                "id": "itpm-u3-mock2-desc-06", "unit": 3,
                "question": "An organization is planning a new commercial information system. Requirements are evolving, management is pressuring for low estimates, and past projects had overruns. Design an estimation-and-control approach using Unit 3 techniques. [20 marks]",
                "marks": 20, "suggestedMinutes": 35,
                "answerStructure": ["Estimate quality & reserves", "Technique choice (Planning poker / FPA)", "EVM or burn-down control", "Continuous risk management & register"],
                "modelAnswer": "1. Estimate Quality & Reserves: Apply A-C-C-P-R-D-U-V-V. Establish cost baseline with contingency reserves for identified risks and management reserve for scope uncertainty. Resist artificial cuts.\n2. Estimation Techniques: Use Planning Poker for agile user stories to foster developer consensus and prevent executive pressure. Apply FPA on high-level specs for objective contractual sizing.\n3. Controlling: Use sprint Burn-Down charts for daily effort tracking and EVM at major milestone gates to verify value earned vs budget spent (using 25/75 rule for intellectual work).\n4. Risk Management: Establish continuous I-A-M-M cycle. Create Risk Register with designated owners, prioritize risks via Likelihood-Impact matrix, apply M-A-T-A responses, and raise organizational maturity toward Level 4/5.",
                "rubricItems": [
                    {"point": "Applied estimate quality attributes and reserve structure", "marksAllotted": 5},
                    {"point": "Selected and justified Planning Poker and/or FPA", "marksAllotted": 5},
                    {"point": "Designed controlling approach using EVM and/or Burn-down", "marksAllotted": 5},
                    {"point": "Constructed continuous risk management cycle with Risk Register", "marksAllotted": 5}
                ],
                "examinerAdvice": "Structure the answer systematically using the Unit 3 framework headings."
            }
        ]
    }
]

# 7. VISUALS
visuals = [
    {"id": "itpm-u3-vis-001", "title": "Cost Reserve Hierarchy", "description": "Step-by-step financial stack: Task Estimate -> Task Contingency -> WP Contingency -> Cost Baseline -> Management Reserve -> Project Budget.", "type": "hierarchy", "unit": 3},
    {"id": "itpm-u3-vis-002", "title": "Three-Point Triangular Distribution", "description": "Asymmetric cost probability curve showing optimistic, most probable, and pessimistic points with downside skew.", "type": "chart", "unit": 3},
    {"id": "itpm-u3-vis-003", "title": "FPA Five Function Types & Weights", "description": "Grid of Inputs, Outputs, Inquiries, External Interfaces, and Internal Files with Low/Average/High complexity multipliers.", "type": "table", "unit": 3},
    {"id": "itpm-u3-vis-004", "title": "Planning Poker 7-Step Sequence", "description": "Flowchart of agile estimation: Break work -> Agree unit -> Independent cards -> Reveal -> Extremes explain -> Discuss -> Consensus.", "type": "flow", "unit": 3},
    {"id": "itpm-u3-vis-005", "title": "EVM Base Metrics & Variances", "description": "Diagram linking PV, EV, AC to variances (SV, CV) and performance indices (CPI, SPI) emphasizing Value First.", "type": "formula-map", "unit": 3},
    {"id": "itpm-u3-vis-006", "title": "EVM Status Quadrant", "description": "4-quadrant grid mapping Ahead/Behind schedule against Under/Over budget.", "type": "quadrant", "unit": 3},
    {"id": "itpm-u3-vis-007", "title": "Burn-Down Chart Trajectory", "description": "Ideal descending effort curve from 100% to 0% remaining effort compared to EVM.", "type": "chart", "unit": 3},
    {"id": "itpm-u3-vis-008", "title": "Risk Management Lifecycle (I-A-M-M)", "description": "Continuous circular cycle: Identify -> Assess -> Mitigate -> Monitor.", "type": "cycle", "unit": 3},
    {"id": "itpm-u3-vis-009", "title": "Five-Level Risk Maturity Ladder (A-A-O-M-A)", "description": "Progressive capability steps: Level 1 Ad hoc -> Level 2 Abbreviated -> Level 3 Organized -> Level 4 Managed -> Level 5 Adaptive.", "type": "ladder", "unit": 3},
    {"id": "itpm-u3-vis-010", "title": "Likelihood-Impact Risk Matrix", "description": "2D grid mapping likelihood against severity to prioritize high-attention threats.", "type": "matrix", "unit": 3},
    {"id": "itpm-u3-vis-011", "title": "Risk Register Layout", "description": "Interactive layout of Table 3: Description, Likelihood, Severity, Owner, Mitigation Actions.", "type": "register", "unit": 3}
]

# Write files
with open(os.path.join(u3_dir, "flashcards.ts"), "w") as f:
    f.write('import { Flashcard } from "../../../../types";\n\n')
    f.write('export const unit3Flashcards: Flashcard[] = ' + json.dumps(flashcards, indent=2) + ';\n')

with open(os.path.join(u3_dir, "qa.ts"), "w") as f:
    f.write('import { DescriptiveQuestion } from "../../../../types";\n\n')
    f.write('export const unit3ImportantQuestions: DescriptiveQuestion[] = ' + json.dumps(qa_list, indent=2) + ';\n')

with open(os.path.join(u3_dir, "comparisons.ts"), "w") as f:
    f.write('import { MasterComparison } from "../../../../types";\n\n')
    f.write('export const unit3Comparisons: MasterComparison[] = ' + json.dumps(comparisons, indent=2) + ';\n')

with open(os.path.join(u3_dir, "traps.ts"), "w") as f:
    f.write('import { ExamTrapItem } from "../../../../types";\n\n')
    f.write('export const unit3ExamTraps: ExamTrapItem[] = ' + json.dumps(traps, indent=2) + ';\n')

with open(os.path.join(u3_dir, "formulas.ts"), "w") as f:
    f.write('export const unit3Formulas = ' + json.dumps(formulas, indent=2) + ';\n')

with open(os.path.join(u3_dir, "visuals.ts"), "w") as f:
    f.write('export const unit3Visuals = ' + json.dumps(visuals, indent=2) + ';\n')

with open(os.path.join(u3_dir, "mockExams.ts"), "w") as f:
    f.write('import { MockExam } from "../../../../types";\n\n')
    f.write('export const unit3MockExams: MockExam[] = ' + json.dumps(mock_exams, indent=2) + ';\n')

# calculations.ts helper
calc_content = """// Calculation helpers and practice scenarios for Unit 3
export interface EvmCalculationScenario {
  pv: number;
  ev: number;
  ac: number;
  sv: number;
  cv: number;
  cpi: number;
  spi: number;
  scheduleStatus: 'Ahead of Schedule' | 'On Schedule' | 'Behind Schedule';
  costStatus: 'Under Budget' | 'On Budget' | 'Over Budget';
}

export function calculateEvm(pv: number, ev: number, ac: number): EvmCalculationScenario {
  const sv = ev - pv;
  const cv = ev - ac;
  const cpi = ac > 0 ? Number((ev / ac).toFixed(2)) : 1.0;
  const spi = pv > 0 ? Number((ev / pv).toFixed(2)) : 1.0;

  const scheduleStatus = sv > 0 ? 'Ahead of Schedule' : sv < 0 ? 'Behind Schedule' : 'On Schedule';
  const costStatus = cv > 0 ? 'Under Budget' : cv < 0 ? 'Over Budget' : 'On Budget';

  return { pv, ev, ac, sv, cv, cpi, spi, scheduleStatus, costStatus };
}

export function calculateFpa(
  inputs: { count: number; weight: number },
  outputs: { count: number; weight: number },
  inquiries: { count: number; weight: number },
  interfaces: { count: number; weight: number },
  files: { count: number; weight: number },
  tdi: number
) {
  const ufp = (inputs.count * inputs.weight) +
              (outputs.count * outputs.weight) +
              (inquiries.count * inquiries.weight) +
              (interfaces.count * interfaces.weight) +
              (files.count * files.weight);
  const caf = Number((0.01 * tdi + 0.65).toFixed(4));
  const fp = Number((ufp * caf).toFixed(2));
  return { ufp, tdi, caf, fp };
}

export function calculateRoi(netGain: number, projectCost: number) {
  if (projectCost <= 0) return 0;
  return Number((netGain / projectCost).toFixed(4));
}

export function calculateNpv(futureValue: number, interestRate: number, periods: number) {
  if (periods < 0) return futureValue;
  const factor = Math.pow(1 + interestRate, periods);
  return Number((futureValue / factor).toFixed(2));
}

export function calculateProfitabilityIndex(npv: number, projectCost: number) {
  if (projectCost <= 0) return 0;
  return Number((npv / projectCost).toFixed(2));
}
"""
with open(os.path.join(u3_dir, "calculations.ts"), "w") as f:
    f.write(calc_content)

# index.ts
index_content = """import { UnitData } from "../../../../types";
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
"""
with open(os.path.join(u3_dir, "index.ts"), "w") as f:
    f.write(index_content)

print("Generated remaining Unit 3 files successfully!")
