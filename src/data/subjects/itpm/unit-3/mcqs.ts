import { MCQ } from "../../../../types";

export const unit3Mcqs: MCQ[] = [
  {
    "id": "itpm-u3-s31-mcq-001",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Cost Estimation Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "How is project cost estimation defined in the course book?",
    "options": {
      "A": "The historical audit of taxes paid during the previous fiscal year",
      "B": "The process of predicting the monetary resources needed to complete future project activities",
      "C": "The automated calculation of developer salaries based on lines of code written",
      "D": "The legal procedure for registering software copyrights with patent offices"
    },
    "correctAnswer": "B",
    "explanation": "Cost estimation is the process of predicting the monetary resources required to execute future project activities, including direct labor, materials, and ongoing support.",
    "whyOthersAreWrong": [
      "Tax auditing is a backward-looking financial accounting procedure.",
      "Salaries are fixed payroll matters, not total project activity estimates.",
      "Copyright registration is an intellectual property legal process."
    ],
    "examTrap": "Cost estimation is a forward-looking prediction process for future activity resources.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Cost Estimation Definition",
      "page": 63
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Cost Estimation Definition",
    "sourcePage": 63
  },
  {
    "id": "itpm-u3-s31-mcq-002",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Project Cost Without Contingency",
    "difficulty": "easy",
    "type": "recall",
    "question": "What is the straightforward bottom-up sum of individual task and work-package estimates called before adding risk reserves?",
    "options": {
      "A": "Earned Value at Completion (BAC)",
      "B": "Project cost without contingency",
      "C": "Management Reserve Baseline",
      "D": "Profitability Index"
    },
    "correctAnswer": "B",
    "explanation": "Adding the individual task costs to calculate work-package costs, and then summing work packages, produces the basic 'project cost without contingency'.",
    "whyOthersAreWrong": [
      "BAC includes cost baseline allocations and contingency.",
      "Management reserve is withheld at the project level for unforeseen work.",
      "Profitability Index is a financial ratio comparing NPV to cost."
    ],
    "examTrap": "Sum of raw task and work package estimates = Project cost without contingency.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Project Cost Without Contingency",
      "page": 63
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Project Cost Without Contingency",
    "sourcePage": 63
  },
  {
    "id": "itpm-u3-s31-mcq-003",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Challenges of IT Cost Estimation",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why is cost estimation recognized as particularly challenging in IT projects compared to standard manufacturing?",
    "options": {
      "A": "Because IT projects never require financial budgets",
      "B": "Because future conditions such as scope, technology, resource prices, staffing, and project duration fluctuate over time",
      "C": "Because hardware manufacturers refuse to publish prices",
      "D": "Because software cannot be measured in monetary units"
    },
    "correctAnswer": "B",
    "explanation": "IT cost estimation is difficult because estimates depend on predictions about future conditions that are inherently fluid (evolving scope, market price changes, technological shifts, team turnover).",
    "whyOthersAreWrong": [
      "IT projects are subject to strict financial budget constraints.",
      "Hardware vendor pricing is readily available.",
      "Software development consumes significant monetary capital."
    ],
    "examTrap": "Changing future conditions (scope, tech, prices, staffing) make IT estimation challenging.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Challenges of IT Cost Estimation",
      "page": 63
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Challenges of IT Cost Estimation",
    "sourcePage": 63
  },
  {
    "id": "itpm-u3-s31-mcq-004",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Total Cost of Ownership Elements",
    "difficulty": "medium",
    "type": "classification",
    "question": "Which set of cost elements must be considered beyond initial software acquisition/development when estimating total project costs?",
    "options": {
      "A": "Only developer overtime meals",
      "B": "Recurring and running costs such as maintenance, support, operational infrastructure, and overhead",
      "C": "Competitor company stock options",
      "D": "The personal income taxes of external end users"
    },
    "correctAnswer": "B",
    "explanation": "Complete cost estimation must encompass acquisition/development costs plus ongoing recurring expenses: maintenance, technical support, operations, and indirect overhead.",
    "whyOthersAreWrong": [
      "Meals are minor travel and subsistence expenses.",
      "Competitor stocks are unrelated investments.",
      "End-user personal taxes are outside project scope."
    ],
    "examTrap": "Cost estimation includes acquisition + recurring running costs (maintenance, support, ops).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Total Cost of Ownership Elements",
      "page": 63
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Total Cost of Ownership Elements",
    "sourcePage": 63
  },
  {
    "id": "itpm-u3-s31-mcq-005",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Cost Estimation Trade-Offs",
    "difficulty": "medium",
    "type": "concept",
    "question": "Which strategic trade-off must project managers evaluate when formulating IT project cost estimates?",
    "options": {
      "A": "Whether to hire only left-handed programmers",
      "B": "In-house vs outsourced development, lease vs buy equipment, and centralized vs distributed work",
      "C": "Whether to replace all computer monitors with televisions",
      "D": "Whether to pay developers in cryptocurrency or gold coins"
    },
    "correctAnswer": "B",
    "explanation": "Course materials emphasize key managerial trade-offs: build in-house or outsource, lease or purchase hardware/software, centralize or distribute team locations, and share cross-project resources.",
    "whyOthersAreWrong": [
      "Irrelevant physical criteria.",
      "Monitor hardware choices do not represent the primary strategic trade-offs.",
      "Standard commercial currency is used."
    ],
    "examTrap": "Core trade-offs: In-house vs outsourced, lease vs buy, centralized vs distributed.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Cost Estimation Trade-Offs",
      "page": 63
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Cost Estimation Trade-Offs",
    "sourcePage": 63
  },
  {
    "id": "itpm-u3-s31-mcq-006",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Accuracy",
    "difficulty": "easy",
    "type": "definition",
    "question": "Under the nine quality characteristics of a cost estimate (A-C-C-P-R-D-U-V-V), what does 'Accuracy' evaluate?",
    "options": {
      "A": "How well the cost estimate reflects true reality and final actual expenditures",
      "B": "The number of decimal digits included in the calculation",
      "C": "Whether the estimate was approved by an external marketing consultant",
      "D": "The physical weight of the printed budget binder"
    },
    "correctAnswer": "A",
    "explanation": "Accuracy asks: 'How well does this estimate reflect reality?' It measures the closeness between the predicted cost and the actual final outcome.",
    "whyOthersAreWrong": [
      "The number of decimal digits represents precision, not accuracy.",
      "Consultant approval relates to credibility, not accuracy.",
      "Binder weight is irrelevant."
    ],
    "examTrap": "Accuracy = Closeness to reality / true actual cost.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Accuracy",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Accuracy",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-007",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Precision",
    "difficulty": "medium",
    "type": "comparison",
    "question": "How does 'Precision' differ from 'Accuracy' in cost estimate evaluation?",
    "options": {
      "A": "Precision is closeness to reality; Accuracy is the level of detail",
      "B": "Precision refers to the level of refinement and granularity of the cost figures; Accuracy refers to how well they reflect actual reality",
      "C": "Precision only applies to agile projects; Accuracy only applies to waterfall",
      "D": "Precision measures team morale; Accuracy measures budget size"
    },
    "correctAnswer": "B",
    "explanation": "An estimate can be highly precise ($1,245,678.43) but completely inaccurate (actual cost is $5,000,000). Precision is level of detail/refinement; Accuracy is truth to reality.",
    "whyOthersAreWrong": [
      "Reverses the definitions.",
      "Both attributes apply across all project management methodologies.",
      "Morale and budget size are separate concepts."
    ],
    "examTrap": "Exam Trap: Precision is level of refinement/detail; Accuracy is correctness/truth to reality.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Precision",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Precision",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-008",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Confidence Level",
    "difficulty": "medium",
    "type": "definition",
    "question": "What does the 'Confidence Level' of a cost estimate indicate?",
    "options": {
      "A": "How loud the project manager speaks during executive meetings",
      "B": "The statistical certainty or probability that the actual cost will fall within the estimated range",
      "C": "The developer's self-esteem during code deployment",
      "D": "Whether the customer smiles when reviewing the invoice"
    },
    "correctAnswer": "B",
    "explanation": "Confidence level indicates the degree of statistical probability or certainty that actual costs will remain within the designated cost boundary.",
    "whyOthersAreWrong": [
      "Vocal volume is presentation style.",
      "Developer self-esteem is psychological emotion.",
      "Customer smiles are interpersonal expressions."
    ],
    "examTrap": "Confidence level = Probability / certainty that actual costs fall within estimated bounds.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Confidence Level",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Confidence Level",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-009",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Credibility",
    "difficulty": "easy",
    "type": "definition",
    "question": "What does 'Credibility' signify as a cost-estimate quality attribute?",
    "options": {
      "A": "The belief and confidence that key stakeholders have in the realism and feasibility of the estimate",
      "B": "Whether the project manager has a university degree in English literature",
      "C": "The speed at which the accounting software runs",
      "D": "Whether developers believe the project will win industry awards"
    },
    "correctAnswer": "A",
    "explanation": "Credibility asks: 'Is the estimate believable to stakeholders?' It reflects trust in the estimator's rigor and the plausibility of the figures.",
    "whyOthersAreWrong": [
      "Degree subject is irrelevant.",
      "Accounting software performance is technical efficiency.",
      "Awards are external recognition."
    ],
    "examTrap": "Credibility = Stakeholder belief and trust in the realism of the cost estimate.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Credibility",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Credibility",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-010",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Reliability",
    "difficulty": "medium",
    "type": "definition",
    "question": "What does 'Reliability' measure in the context of cost estimation quality?",
    "options": {
      "A": "Whether multiple independent estimators following the same method arrive at consistent, comparable cost results",
      "B": "Whether the development servers stay powered on 24 hours a day",
      "C": "How many years the project manager has worked at the company",
      "D": "The warranty period of the server hardware"
    },
    "correctAnswer": "A",
    "explanation": "Reliability evaluates consistency: if the same estimation technique is applied independently by different experts, it should yield consistent results.",
    "whyOthersAreWrong": [
      "Server uptime is technical infrastructure availability.",
      "Manager tenure is HR seniority.",
      "Hardware warranty is procurement terms."
    ],
    "examTrap": "Reliability = Consistency of results across independent applications.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Reliability",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Reliability",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-011",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Documentation",
    "difficulty": "easy",
    "type": "recall",
    "question": "Why is 'Documentation' a required quality characteristic of a professional cost estimate?",
    "options": {
      "A": "To provide a clear audit trail of all underlying assumptions, data sources, methods, and calculations",
      "B": "To generate extra paperwork so auditors remain employed",
      "C": "To conceal financial discrepancies from project sponsors",
      "D": "To increase the cost of printing paper"
    },
    "correctAnswer": "A",
    "explanation": "Documentation captures the baseline assumptions, scope boundary inclusions/exclusions, pricing models, and methodology used, enabling verification and change control.",
    "whyOthersAreWrong": [
      "Paperwork for its own sake is administrative waste.",
      "Concealment violates governance transparency.",
      "Printing cost is trivial."
    ],
    "examTrap": "Documentation = Clear audit trail of assumptions, data, and calculations.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Documentation",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Documentation",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-012",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attribute: Uniformity",
    "difficulty": "medium",
    "type": "definition",
    "question": "What does 'Uniformity' require when preparing project cost estimates?",
    "options": {
      "A": "Every developer must wear identical uniforms at work",
      "B": "Estimates must use standardized units of measurement, consistent currency, clear inflation assumptions, and unified reporting conventions",
      "C": "Every task must be assigned the exact same financial cost",
      "D": "All projects must take exactly 12 months to complete"
    },
    "correctAnswer": "B",
    "explanation": "Uniformity ensures that units of effort (hours, days), currencies, inflation factors, and reporting formats are consistent across all work packages.",
    "whyOthersAreWrong": [
      "Clothing uniforms are corporate dress code.",
      "Tasks vary widely in complexity and cost.",
      "Project durations vary by scope."
    ],
    "examTrap": "Uniformity = Standardized units, currency, inflation rules, and reporting formats.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attribute: Uniformity",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attribute: Uniformity",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-013",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Quality Attributes: Validity & Verification",
    "difficulty": "medium",
    "type": "comparison",
    "question": "In the A-C-C-P-R-D-U-V-V framework, how are 'Validity' and 'Verification' distinguished?",
    "options": {
      "A": "Validity checks methodology soundness; Verification involves independent mathematical and procedural cross-checking",
      "B": "Validity applies to hardware; Verification applies to software",
      "C": "Validity is done after project completion; Verification is done before project start",
      "D": "They are redundant synonyms meaning the exact same thing"
    },
    "correctAnswer": "A",
    "explanation": "Validity asks: 'Is the estimation methodology theoretically sound and appropriate for this domain?' Verification asks: 'Have the calculations been independently cross-checked and proven correct?'",
    "whyOthersAreWrong": [
      "Both apply to total project cost.",
      "Both are conducted before baselines are finalized.",
      "They evaluate methodology (validity) vs calculation audit (verification)."
    ],
    "examTrap": "Validity = Sound methodology. Verification = Independent calculation cross-check.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Quality Attributes: Validity & Verification",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Quality Attributes: Validity & Verification",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-014",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Memory Aid ACCPRDUVV",
    "difficulty": "easy",
    "type": "recall",
    "question": "What does the memory aid 'A-C-C-P-R-D-U-V-V' represent in Unit 3?",
    "options": {
      "A": "The nine quality characteristics of a professional cost estimate",
      "B": "The nine project phases in the Waterfall model",
      "C": "The nine earned value formulas",
      "D": "The nine roles on a Scrum development team"
    },
    "correctAnswer": "A",
    "explanation": "A-C-C-P-R-D-U-V-V stands for Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.",
    "whyOthersAreWrong": [
      "Waterfall has 5 generic phases.",
      "EVM has 4 core formulas.",
      "Scrum has 3 roles."
    ],
    "examTrap": "A-C-C-P-R-D-U-V-V = Nine cost-estimate quality characteristics.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Memory Aid ACCPRDUVV",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Memory Aid ACCPRDUVV",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-015",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Plan-Driven vs Agile Cost Estimation",
    "difficulty": "medium",
    "type": "comparison",
    "question": "How do plan-driven and agile project management differ regarding cost and scope flexibility?",
    "options": {
      "A": "Plan-driven fixes cost and varies scope; Agile fixes scope and varies budget",
      "B": "Plan-driven typically fixes scope upfront (varying cost/schedule if needed); Agile fixes cost and schedule (varying scope iteratively)",
      "C": "Both fix scope, schedule, and cost permanently with zero flexibility",
      "D": "Agile never estimates costs; plan-driven never tracks schedules"
    },
    "correctAnswer": "B",
    "explanation": "In plan-driven project management, scope is generally fixed upfront while cost and schedule may vary. In agile, cost and schedule (sprint timeboxes) are fixed while scope is adjusted iteratively.",
    "whyOthersAreWrong": [
      "Reverses the fundamental Iron Triangle logic of the two approaches.",
      "The Triple Constraint dictates that you cannot fix all three simultaneously without extreme risk.",
      "Both frameworks estimate and track resources."
    ],
    "examTrap": "Plan-driven = Scope fixed (cost/schedule vary). Agile = Cost & schedule fixed (scope varies).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Plan-Driven vs Agile Cost Estimation",
      "page": 63
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Plan-Driven vs Agile Cost Estimation",
    "sourcePage": 63
  },
  {
    "id": "itpm-u3-s31-mcq-016",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "ROI Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "What is the official Return on Investment (ROI) formula specified in Unit 3?",
    "options": {
      "A": "ROI = Net Gain / Project Cost",
      "B": "ROI = Project Cost / Net Gain",
      "C": "ROI = Planned Value - Actual Cost",
      "D": "ROI = Future Value x (1 + interest)"
    },
    "correctAnswer": "A",
    "explanation": "The course book defines ROI as the ratio of net profit/gains to total project cost: ROI = Net Gain / Project Cost.",
    "whyOthersAreWrong": [
      "Inverting the formula gives the reciprocal.",
      "PV - AC is an invalid hybrid EVM term.",
      "FV x (1+i) compounds money forward."
    ],
    "examTrap": "ROI = Net Gain / Project Cost.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "ROI Formula",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "ROI Formula",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-017",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "ROI Calculation Scenario",
    "difficulty": "medium",
    "type": "calculation",
    "question": "A project costs $1,000,000 and generates $1,800,000 in total revenue after three years. What are the net gain and ROI according to the textbook example?",
    "options": {
      "A": "Net Gain = $800,000; ROI = 80% (0.80)",
      "B": "Net Gain = $1,800,000; ROI = 180%",
      "C": "Net Gain = -$200,000; ROI = -20%",
      "D": "Net Gain = $1,000,000; ROI = 100%"
    },
    "correctAnswer": "A",
    "explanation": "Net Gain = Total Gains - Project Cost = $1,800,000 - $1,000,000 = $800,000. ROI = $800,000 / $1,000,000 = 0.80 = 80%.",
    "whyOthersAreWrong": [
      "Total revenue ($1.8M) is not the net gain; costs must be deducted.",
      "Negative values indicate losses.",
      "Gain is $800k, not $1M."
    ],
    "examTrap": "Net Gain = $1.8M - $1.0M = $800k. ROI = $800k / $1.0M = 80%.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "ROI Calculation Scenario",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "ROI Calculation Scenario",
    "sourcePage": 64,
    "calculationSteps": [
      "Step 1: Calculate Net Gain = Revenue - Cost = $1,800,000 - $1,000,000 = $800,000",
      "Step 2: Calculate ROI = Net Gain / Project Cost = $800,000 / $1,000,000 = 0.80 (80%)"
    ]
  },
  {
    "id": "itpm-u3-s31-mcq-018",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Payback Period Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "What does the 'Payback Period' measure in project financial evaluation?",
    "options": {
      "A": "The time required for cumulative project gains to equal the initial investment (time to break even)",
      "B": "The deadline when developers must pay back travel expenses",
      "C": "The contractual penalty date for late software delivery",
      "D": "The time it takes to rewrite deprecated code"
    },
    "correctAnswer": "A",
    "explanation": "The payback period is the time required for a project's cash inflows to recover the initial capital investment\u2014commonly remembered as 'time to break even'.",
    "whyOthersAreWrong": [
      "Travel reimbursement is operational accounting.",
      "Contractual penalty is liquidated damages.",
      "Code refactoring is software maintenance."
    ],
    "examTrap": "Payback Period = Time required to break even (gains equal investment).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Payback Period Definition",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Payback Period Definition",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-019",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "NPV Formula",
    "difficulty": "medium",
    "type": "calculation",
    "question": "Which formula for Net Present Value (NPV) is explicitly established in Unit 3?",
    "options": {
      "A": "NPV = Future Value / (1 + interest)^time periods",
      "B": "NPV = Future Value x (1 + interest)^time periods",
      "C": "NPV = Project Cost / (1 + interest)",
      "D": "NPV = Net Gain - Project Cost"
    },
    "correctAnswer": "A",
    "explanation": "Unit 3 defines NPV discounting as: NPV = Future Value / (1 + interest)^time periods. It calculates the current value of future revenue.",
    "whyOthersAreWrong": [
      "Multiplying compounds money into the future instead of discounting to present value.",
      "Project cost is an outflow, not the future cash flow being discounted.",
      "Net gain minus cost is net profit."
    ],
    "examTrap": "NPV formula in Unit 3: NPV = Future Value / (1 + interest)^time periods.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "NPV Formula",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "NPV Formula",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-020",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Profitability Index Formula",
    "difficulty": "medium",
    "type": "calculation",
    "question": "What is the formula and interpretation for the Profitability Index in Unit 3?",
    "options": {
      "A": "Profitability Index = NPV / Project Cost; a value greater than 1 means NPV exceeds cost",
      "B": "Profitability Index = Project Cost / NPV; a value less than 0 means profit",
      "C": "Profitability Index = EV / AC; a value greater than 1 means ahead of schedule",
      "D": "Profitability Index = Net Gain x Time; a value of 100 is required"
    },
    "correctAnswer": "A",
    "explanation": "Profitability Index = NPV / Project Cost. An index above 1.0 indicates that the discounted present value of benefits exceeds project costs.",
    "whyOthersAreWrong": [
      "Inverting the formula creates an inverted ratio.",
      "EV / AC is the Cost Performance Index (CPI).",
      "Gain x Time is dimensionally meaningless."
    ],
    "examTrap": "Profitability Index = NPV / Project Cost. Value > 1.0 is favorable.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Profitability Index Formula",
      "page": 64
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Profitability Index Formula",
    "sourcePage": 64
  },
  {
    "id": "itpm-u3-s31-mcq-021",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Metric Quantity Dilemma",
    "difficulty": "medium",
    "type": "concept",
    "question": "What managerial risk arises from having either 'too few' or 'too many' cost metrics?",
    "options": {
      "A": "Too few metrics can distort reality; too many metrics create information overload, waste effort, and trigger resistance",
      "B": "Too few metrics guarantees project failure; too many metrics guarantees zero bugs",
      "C": "Metric quantity has zero impact on projects",
      "D": "Too many metrics automatically reduces project costs to zero"
    },
    "correctAnswer": "A",
    "explanation": "The course book warns: too few metrics fail to reflect reality accurately; too many metrics flood managers with data, obscure critical insights, and create team resistance.",
    "whyOthersAreWrong": [
      "Extremist claims.",
      "Metrics directly shape management control.",
      "Metrics do not reduce costs to zero."
    ],
    "examTrap": "Metric balance: too few distort reality; too many create overload and resistance.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Metric Quantity Dilemma",
      "page": 65
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Metric Quantity Dilemma",
    "sourcePage": 65
  },
  {
    "id": "itpm-u3-s31-mcq-022",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Budget Reserve Hierarchy",
    "difficulty": "medium",
    "type": "recall",
    "question": "Which sequence correctly depicts the visual hierarchy of project budget components?",
    "options": {
      "A": "Project Budget -> Task Estimate -> Cost Baseline",
      "B": "Task Estimate -> Task Contingency -> Work-Package Contingency -> Cost Baseline -> Management Reserve -> Project Budget",
      "C": "Management Reserve -> Cost Baseline -> Task Estimate",
      "D": "Actual Cost -> Planned Value -> Earned Value -> Budget"
    },
    "correctAnswer": "B",
    "explanation": "The hierarchy builds upward: Task Estimate + Task Contingency -> Work-Package Contingency -> Cost Baseline + Management Reserve -> Total Project Budget.",
    "whyOthersAreWrong": [
      "Reverses and scrambles the hierarchy.",
      "Inverted sequence.",
      "Lists EVM metrics, not budget reserve hierarchy."
    ],
    "examTrap": "Reserve hierarchy: Task -> Task Contingency -> WP Contingency -> Cost Baseline -> Management Reserve -> Project Budget.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Budget Reserve Hierarchy",
      "page": 65
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Budget Reserve Hierarchy",
    "sourcePage": 65
  },
  {
    "id": "itpm-u3-s31-mcq-023",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Contingency Reserve Scope",
    "difficulty": "easy",
    "type": "concept",
    "question": "What do Contingency Reserves specifically address in project budgeting?",
    "options": {
      "A": "Identified project risks ('known-unknowns') for which responses are planned",
      "B": "Unforeseen scope expansion outside the project charter",
      "C": "Annual bonuses for senior executive management",
      "D": "The payment of government fines for illegal operations"
    },
    "correctAnswer": "A",
    "explanation": "Contingency reserves cover identified risks ('known-unknowns') that have been evaluated in the risk register (e.g. anticipated software debugging effort).",
    "whyOthersAreWrong": [
      "Unforeseen work is addressed by management reserves.",
      "Executive bonuses are corporate compensation.",
      "Fines are legal liabilities."
    ],
    "examTrap": "Contingency Reserve = Identified risks ('known-unknowns').",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Contingency Reserve Scope",
      "page": 65
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Contingency Reserve Scope",
    "sourcePage": 65
  },
  {
    "id": "itpm-u3-s31-mcq-024",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Management Reserve Scope",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the specific purpose of a Management Reserve in the budget hierarchy?",
    "options": {
      "A": "To purchase coffee and snacks for the project office",
      "B": "To cover unforeseen work within project scope ('unknown-unknowns') held for managerial control",
      "C": "To cover identified task-level software bugs",
      "D": "To artificially inflate the company's stock valuation"
    },
    "correctAnswer": "B",
    "explanation": "Management reserves are withheld at the project level for unforeseen work within scope ('unknown-unknowns') and are controlled by senior governance.",
    "whyOthersAreWrong": [
      "Office snacks are petty office expenses.",
      "Task-level bugs are covered by task/contingency reserves.",
      "Stock manipulation is financial fraud."
    ],
    "examTrap": "Management Reserve = Unforeseen work within project scope ('unknown-unknowns').",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Management Reserve Scope",
      "page": 65
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Management Reserve Scope",
    "sourcePage": 65
  },
  {
    "id": "itpm-u3-s31-mcq-025",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.1",
    "topic": "Contingency vs Management Reserve Trap",
    "difficulty": "hard",
    "type": "trap",
    "question": "Why is it an exam trap to include the Management Reserve in the project's Cost Baseline?",
    "options": {
      "A": "Management reserves are part of the total Project Budget, but are EXCLUDED from the Cost Baseline used for EVM performance measurement",
      "B": "Management reserves do not exist in modern project management",
      "C": "Cost Baselines can only contain developer salaries, not risk reserves",
      "D": "Management reserves are legally owned by external banks"
    },
    "correctAnswer": "A",
    "explanation": "The Cost Baseline includes work packages and contingency reserves, but EXCLUDES management reserve. The Project Budget equals Cost Baseline PLUS Management Reserve.",
    "whyOthersAreWrong": [
      "Management reserves are standard in project governance.",
      "Cost baselines include work packages plus contingency reserves.",
      "Reserves are internal corporate allocations."
    ],
    "examTrap": "Exam Trap: Cost Baseline = Work Packages + Contingency Reserves (EXCLUDES Management Reserve).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.1",
      "topic": "Contingency vs Management Reserve Trap",
      "page": 66
    },
    "sourceUnit": 3,
    "sourceSection": "3.1",
    "sourceTopic": "Contingency vs Management Reserve Trap",
    "sourcePage": 66
  },
  {
    "id": "itpm-u3-s32-mcq-026",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Three-Point Estimation Values",
    "difficulty": "easy",
    "type": "recall",
    "question": "What three estimates are gathered in Three-Point Estimation?",
    "options": {
      "A": "Direct cost, indirect cost, and profit",
      "B": "Optimistic (low/best), Most Probable (likely), and Pessimistic (high/worst)",
      "C": "Planned value, earned value, and actual cost",
      "D": "Minimum wage, average wage, and executive salary"
    },
    "correctAnswer": "B",
    "explanation": "Three-point estimation uses three values: Optimistic (everything goes right), Most Probable (likely outcome), and Pessimistic (everything goes wrong).",
    "whyOthersAreWrong": [
      "Direct/indirect are accounting classifications.",
      "PV/EV/AC are EVM tracking metrics.",
      "Wages are labor rates."
    ],
    "examTrap": "Three-point estimates = Optimistic, Most Probable, Pessimistic.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Three-Point Estimation Values",
      "page": 67
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Three-Point Estimation Values",
    "sourcePage": 67
  },
  {
    "id": "itpm-u3-s32-mcq-027",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Cost Distribution Skewness",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why is the probability distribution curve in cost estimation typically asymmetric (skewed) rather than a symmetric normal distribution?",
    "options": {
      "A": "Because software developers are inherently pessimistic about technology",
      "B": "Because the money saved when everything goes well is typically less than the potential cost growth when things go wrong",
      "C": "Because symmetric curves are mathematically impossible to draw",
      "D": "Because government inflation laws mandate right-skewed pricing"
    },
    "correctAnswer": "B",
    "explanation": "The course book explains: cost distributions are skewed because potential downside cost overruns are much larger than the potential savings if everything goes perfectly.",
    "whyOthersAreWrong": [
      "Psychological bias is not the mathematical justification.",
      "Normal distributions are symmetric.",
      "Inflation laws do not dictate curve geometry."
    ],
    "examTrap": "Cost curve is skewed: downside losses can greatly exceed possible savings.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Cost Distribution Skewness",
      "page": 67
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Cost Distribution Skewness",
    "sourcePage": 67
  },
  {
    "id": "itpm-u3-s32-mcq-028",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Three-Point Triangular Approximation",
    "difficulty": "medium",
    "type": "concept",
    "question": "What does the total area under the triangular approximation curve represent in three-point estimation?",
    "options": {
      "A": "The developer's hourly wage",
      "B": "100 percent of the probability that the cost falls between the optimistic and pessimistic boundaries",
      "C": "The management reserve percentage",
      "D": "The lines of code delivered per day"
    },
    "correctAnswer": "B",
    "explanation": "The total area under the probability density curve equals 1.0 (100%), representing certainty that actual cost will lie between the optimistic and pessimistic limits.",
    "whyOthersAreWrong": [
      "Hourly wage is a rate.",
      "Management reserve is a financial buffer.",
      "Lines of code is productivity."
    ],
    "examTrap": "Area under curve = 100% of event probability between optimistic and pessimistic limits.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Three-Point Triangular Approximation",
      "page": 67
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Three-Point Triangular Approximation",
    "sourcePage": 67
  },
  {
    "id": "itpm-u3-s32-mcq-029",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Expert Estimation Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "Who qualifies to provide Expert Estimation when the immediate project team lacks historical experience?",
    "options": {
      "A": "Only external government regulators",
      "B": "Internal specialists from other departments, external consultants, or specialized professional groups with relevant knowledge and training",
      "C": "Any employee who has been at the company for less than one week",
      "D": "Only the company's chief legal counsel"
    },
    "correctAnswer": "B",
    "explanation": "Expert judgment draws upon individuals or groups with specialized training, education, and historical experience, sourced internally or from external consultancies.",
    "whyOthersAreWrong": [
      "Regulators enforce rules, they do not estimate software costs.",
      "Inexperienced employees lack historical domain knowledge.",
      "Legal counsel assesses contracts, not technical software effort."
    ],
    "examTrap": "Experts can be internal specialists or external consultants with domain experience.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Expert Estimation Definition",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Expert Estimation Definition",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-030",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Double-Blind Review Mechanism",
    "difficulty": "medium",
    "type": "definition",
    "question": "How does a Double-Blind Review operate during the expert cost estimation process?",
    "options": {
      "A": "Both the estimator and the reviewer wear blindfolds during meetings",
      "B": "The identity of the estimator is hidden from the reviewer, and the identity of the reviewer is hidden from the estimator",
      "C": "Two reviewers must independently inspect the code twice",
      "D": "The project budget is hidden from both the customer and the sponsor"
    },
    "correctAnswer": "B",
    "explanation": "In a double-blind review, all identifying information is removed so neither party knows who authored or who is reviewing the cost estimates.",
    "whyOthersAreWrong": [
      "Physical blindfolds are absurd.",
      "Two reviews is dual review, not double-blind.",
      "Hiding budgets from sponsors violates governance."
    ],
    "examTrap": "Double-blind review: estimator and reviewer identities are mutually concealed.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Double-Blind Review Mechanism",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Double-Blind Review Mechanism",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-031",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Double-Blind Review Purpose",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the primary objective of using a double-blind review in IT cost estimation?",
    "options": {
      "A": "To prevent reviewers from being biased by the estimators' power status, seniority, gender, race, or reputation",
      "B": "To double the estimated cost of the project",
      "C": "To speed up review meetings by eliminating discussion",
      "D": "To avoid paying reviewers for their time"
    },
    "correctAnswer": "A",
    "explanation": "Anonymity prevents bias arising from power relationships (e.g. a subordinate reviewing a boss) or halo effects (e.g. famous experts receiving uncritical approval).",
    "whyOthersAreWrong": [
      "Double-blind does not double the budget.",
      "It encourages thorough independent evaluation, not hasty sign-off.",
      "Reviewers are compensated as normal."
    ],
    "examTrap": "Double-blind review removes status, authority, and demographic prejudice.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Double-Blind Review Purpose",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Double-Blind Review Purpose",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-032",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Double-Blind Review Limitation",
    "difficulty": "hard",
    "type": "concept",
    "question": "What practical limitation of double-blind review is specifically noted in the course book?",
    "options": {
      "A": "It is prohibited under European labor laws",
      "B": "In a very small, specialized technical field, the identities of estimators or reviewers may still be deduced from the content",
      "C": "Double-blind reviews can only be performed using physical paper envelopes",
      "D": "It cannot be used for projects costing over $100,000"
    },
    "correctAnswer": "B",
    "explanation": "In niche or highly specialized domains, writing style, technical approach, or unique expertise often allows reviewers or authors to infer each other's identity.",
    "whyOthersAreWrong": [
      "Double-blind review is completely legal and widely encouraged.",
      "Electronic blind reviews are standard.",
      "Applicable to projects of any financial scale."
    ],
    "examTrap": "Course limitation: In small niche fields, identities may still be guessed.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Double-Blind Review Limitation",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Double-Blind Review Limitation",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-033",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Function Point Analysis Core Premise",
    "difficulty": "easy",
    "type": "definition",
    "question": "What does Function Point Analysis (FPA) fundamentally measure?",
    "options": {
      "A": "The number of CPU cycles consumed by a server",
      "B": "The amount of business functionality a software system provides to users, independent of implementation technology",
      "C": "The physical number of transistors on a microchip",
      "D": "The exact lines of code written in Python or C++"
    },
    "correctAnswer": "B",
    "explanation": "FPA quantifies software size based on user-visible business functional requirements, remaining independent of programming languages and hardware.",
    "whyOthersAreWrong": [
      "CPU cycles measure processing load.",
      "Transistors measure hardware density.",
      "Lines of code depend heavily on the specific language used."
    ],
    "examTrap": "FPA measures user-visible business functionality independent of implementation technology.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Function Point Analysis Core Premise",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Function Point Analysis Core Premise",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-034",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Function Categories",
    "difficulty": "easy",
    "type": "recall",
    "question": "What two broad categories of functions are evaluated in Function Point Analysis?",
    "options": {
      "A": "Hardware functions and Firmware functions",
      "B": "Transaction functions and Data functions",
      "C": "Financial functions and Legal functions",
      "D": "Agile functions and Waterfall functions"
    },
    "correctAnswer": "B",
    "explanation": "FPA groups functions into Transaction functions (processes moving data) and Data functions (data storage structures).",
    "whyOthersAreWrong": [
      "Hardware/Firmware are physical layers.",
      "Financial/Legal are business domains.",
      "Agile/Waterfall are methodologies."
    ],
    "examTrap": "FPA two categories: Transaction functions and Data functions.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Function Categories",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Function Categories",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-035",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Five FPA Function Types (I-O-Q-I-F)",
    "difficulty": "easy",
    "type": "recall",
    "question": "What are the five standardized function types identified in Function Point Analysis?",
    "options": {
      "A": "Inputs, Outputs, Inquiries, External Interfaces, Internal Logical Files",
      "B": "Initiation, Planning, Execution, Monitoring, Closure",
      "C": "Identify, Analyze, Decide, Mitigate, Monitor",
      "D": "Servers, Routers, Switches, Firewalls, Cables"
    },
    "correctAnswer": "A",
    "explanation": "The five FPA function types (memory: I-O-Q-I-F) are: Inputs (In), Outputs (On), Inquiries (Qn), External Interfaces (En), and Internal Logical Files (Fn).",
    "whyOthersAreWrong": [
      "Generic project phases.",
      "Risk management process steps.",
      "Physical network hardware."
    ],
    "examTrap": "Five FPA types: Inputs, Outputs, Inquiries, Interfaces, Files (I-O-Q-I-F).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Five FPA Function Types (I-O-Q-I-F)",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Five FPA Function Types (I-O-Q-I-F)",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-036",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Transaction Functions",
    "difficulty": "medium",
    "type": "classification",
    "question": "Which three FPA function types constitute 'Transaction Functions'?",
    "options": {
      "A": "Inputs, Outputs, and Inquiries",
      "B": "Internal Files, External Interfaces, and Servers",
      "C": "Cost, Schedule, and Scope",
      "D": "Optimistic, Likely, and Pessimistic"
    },
    "correctAnswer": "A",
    "explanation": "Transaction functions manage the flow of data into, out of, and through the system: External Inputs (In), External Outputs (On), and External Inquiries (Qn).",
    "whyOthersAreWrong": [
      "Files and Interfaces are Data functions.",
      "Iron triangle constraints.",
      "Three-point estimates."
    ],
    "examTrap": "Transaction functions = Inputs, Outputs, Inquiries.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Transaction Functions",
      "page": 68
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Transaction Functions",
    "sourcePage": 68
  },
  {
    "id": "itpm-u3-s32-mcq-037",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Data Functions",
    "difficulty": "medium",
    "type": "classification",
    "question": "Which two FPA function types constitute 'Data Functions'?",
    "options": {
      "A": "Inputs and Outputs",
      "B": "Internal Logical Files (Fn) and External Interfaces (En)",
      "C": "CPI and SPI",
      "D": "Tasks and Milestones"
    },
    "correctAnswer": "B",
    "explanation": "Data functions represent internal logical data stores maintained by the app (Internal Files) and data referenced across external boundaries (External Interfaces).",
    "whyOthersAreWrong": [
      "Inputs and Outputs are Transaction functions.",
      "CPI and SPI are EVM indices.",
      "Tasks and milestones are schedule entities."
    ],
    "examTrap": "Data functions = Internal Logical Files (Fn) and External Interfaces (En).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Data Functions",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Data Functions",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-038",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Input Weights",
    "difficulty": "medium",
    "type": "recall",
    "question": "According to the official Unit 3 weights table, what are the complexity weights for an 'Input' function?",
    "options": {
      "A": "Low = 2, Average = 4, High = 6",
      "B": "Low = 3, Average = 5, High = 7",
      "C": "Low = 5, Average = 7, High = 10",
      "D": "Low = 7, Average = 10, High = 15"
    },
    "correctAnswer": "A",
    "explanation": "Unit 3 weight table for Input: Low complexity = 2, Average complexity = 4, High complexity = 6.",
    "whyOthersAreWrong": [
      "3, 5, 7 are Output weights.",
      "5, 7, 10 are Interface weights.",
      "7, 10, 15 are File weights."
    ],
    "examTrap": "FPA Input weights: 2 (Low), 4 (Average), 6 (High).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Input Weights",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Input Weights",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-039",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Output Weights",
    "difficulty": "medium",
    "type": "recall",
    "question": "In the Unit 3 FPA complexity table, what are the weights assigned to an 'Output' function?",
    "options": {
      "A": "Low = 2, Average = 4, High = 6",
      "B": "Low = 3, Average = 5, High = 7",
      "C": "Low = 5, Average = 7, High = 10",
      "D": "Low = 1, Average = 2, High = 3"
    },
    "correctAnswer": "B",
    "explanation": "Unit 3 weight table for Output: Low complexity = 3, Average complexity = 5, High complexity = 7.",
    "whyOthersAreWrong": [
      "2, 4, 6 are Input and Inquiry weights.",
      "5, 7, 10 are Interface weights.",
      "1, 2, 3 is not an FPA scale."
    ],
    "examTrap": "FPA Output weights: 3 (Low), 5 (Average), 7 (High).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Output Weights",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Output Weights",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-040",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Inquiry Weights",
    "difficulty": "medium",
    "type": "recall",
    "question": "In Function Point Analysis, what complexity weights are assigned to an 'Inquiry' function?",
    "options": {
      "A": "Low = 2, Average = 4, High = 6",
      "B": "Low = 3, Average = 5, High = 7",
      "C": "Low = 7, Average = 10, High = 15",
      "D": "Low = 4, Average = 8, High = 12"
    },
    "correctAnswer": "A",
    "explanation": "Inquiries share the exact same complexity weights as Inputs: Low = 2, Average = 4, High = 6.",
    "whyOthersAreWrong": [
      "3, 5, 7 are Output weights.",
      "7, 10, 15 are File weights.",
      "Arbitrary numbers."
    ],
    "examTrap": "FPA Inquiry weights: 2 (Low), 4 (Average), 6 (High) \u2014 identical to Input.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Inquiry Weights",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Inquiry Weights",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-041",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA External Interface Weights",
    "difficulty": "medium",
    "type": "recall",
    "question": "What complexity weights does the Unit 3 course book assign to an 'External Interface' function?",
    "options": {
      "A": "Low = 2, Average = 4, High = 6",
      "B": "Low = 3, Average = 5, High = 7",
      "C": "Low = 5, Average = 7, High = 10",
      "D": "Low = 7, Average = 10, High = 15"
    },
    "correctAnswer": "C",
    "explanation": "Unit 3 weight table for External Interface: Low = 5, Average = 7, High = 10.",
    "whyOthersAreWrong": [
      "2, 4, 6 are Input/Inquiry weights.",
      "3, 5, 7 are Output weights.",
      "7, 10, 15 are File weights."
    ],
    "examTrap": "FPA External Interface weights: 5 (Low), 7 (Average), 10 (High).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA External Interface Weights",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA External Interface Weights",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-042",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Internal File Weights",
    "difficulty": "medium",
    "type": "recall",
    "question": "What complexity weights are assigned to an 'Internal Logical File' in Unit 3?",
    "options": {
      "A": "Low = 2, Average = 4, High = 6",
      "B": "Low = 3, Average = 5, High = 7",
      "C": "Low = 5, Average = 7, High = 10",
      "D": "Low = 7, Average = 10, High = 15"
    },
    "correctAnswer": "D",
    "explanation": "Internal Logical Files carry the highest weights: Low = 7, Average = 10, High = 15.",
    "whyOthersAreWrong": [
      "2, 4, 6 are Input/Inquiry weights.",
      "3, 5, 7 are Output weights.",
      "5, 7, 10 are Interface weights."
    ],
    "examTrap": "FPA Internal File weights: 7 (Low), 10 (Average), 15 (High).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Internal File Weights",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Internal File Weights",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-043",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Unadjusted Function Points (UFP)",
    "difficulty": "easy",
    "type": "definition",
    "question": "How is Unadjusted Function Points (UFP) calculated in FPA?",
    "options": {
      "A": "By counting total lines of code in the repository",
      "B": "By summing the products of each identified function count multiplied by its respective complexity weight",
      "C": "By dividing the project budget by the number of developers",
      "D": "By measuring the physical database storage in gigabytes"
    },
    "correctAnswer": "B",
    "explanation": "UFP is calculated by cataloging all elementary functions (Inputs, Outputs, Inquiries, Interfaces, Files), multiplying each by its complexity weight, and summing them together.",
    "whyOthersAreWrong": [
      "Lines of code is source metrics.",
      "Budget division is average cost allocation.",
      "Database size is physical storage."
    ],
    "examTrap": "UFP = Sum of all (Function Count x Complexity Weight).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Unadjusted Function Points (UFP)",
      "page": 69
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Unadjusted Function Points (UFP)",
    "sourcePage": 69
  },
  {
    "id": "itpm-u3-s32-mcq-044",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Complexity Adjustment Factor Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "What is the official formula for the Complexity Adjustment Factor (CAF) in Unit 3?",
    "options": {
      "A": "CAF = 0.01 x TDI + 0.65",
      "B": "CAF = 0.05 x TDI + 1.00",
      "C": "CAF = TDI / 100",
      "D": "CAF = UFP x 0.01 + 0.65"
    },
    "correctAnswer": "A",
    "explanation": "The course book establishes the canonical formula: CAF = 0.01 * TDI + 0.65, where TDI is the Total Degree of Influence.",
    "whyOthersAreWrong": [
      "Invalid multipliers.",
      "TDI / 100 ignores the baseline constant 0.65.",
      "Uses UFP instead of TDI."
    ],
    "examTrap": "CAF Formula: CAF = 0.01 x TDI + 0.65.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Complexity Adjustment Factor Formula",
      "page": 70
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Complexity Adjustment Factor Formula",
    "sourcePage": 70
  },
  {
    "id": "itpm-u3-s32-mcq-045",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Adjusted Function Points Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "How are final Adjusted Function Points (FP) calculated?",
    "options": {
      "A": "FP = UFP x CAF",
      "B": "FP = UFP / CAF",
      "C": "FP = UFP + TDI",
      "D": "FP = CAF / 0.01"
    },
    "correctAnswer": "A",
    "explanation": "Final adjusted function points are obtained by multiplying the unadjusted function points by the complexity factor: FP = UFP * CAF.",
    "whyOthersAreWrong": [
      "Dividing by CAF reverses the adjustment.",
      "Adding TDI conflates influence score with functional units.",
      "CAF / 0.01 is arbitrary."
    ],
    "examTrap": "FP Formula: FP = UFP x CAF.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Adjusted Function Points Formula",
      "page": 70
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Adjusted Function Points Formula",
    "sourcePage": 70
  },
  {
    "id": "itpm-u3-s32-mcq-046",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Worked Example Calculation",
    "difficulty": "medium",
    "type": "calculation",
    "question": "An application has an unadjusted function point count (UFP) of 120 and a Total Degree of Influence (TDI) of 34. What are the CAF and adjusted FP?",
    "options": {
      "A": "CAF = 0.99; FP = 118.8",
      "B": "CAF = 0.65; FP = 78.0",
      "C": "CAF = 1.34; FP = 160.8",
      "D": "CAF = 0.99; FP = 120.0"
    },
    "correctAnswer": "A",
    "explanation": "CAF = 0.01 * TDI + 0.65 = 0.01 * 34 + 0.65 = 0.34 + 0.65 = 0.99. FP = UFP * CAF = 120 * 0.99 = 118.8.",
    "whyOthersAreWrong": [
      "Ignores the TDI addition.",
      "Fails to add 0.65 constant.",
      "Rounds incorrectly."
    ],
    "examTrap": "TDI = 34 -> CAF = 0.99. FP = 120 x 0.99 = 118.8.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Worked Example Calculation",
      "page": 70
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Worked Example Calculation",
    "sourcePage": 70,
    "calculationSteps": [
      "Step 1: Calculate CAF = 0.01 x TDI + 0.65 = 0.01 x 34 + 0.65 = 0.34 + 0.65 = 0.99",
      "Step 2: Calculate FP = UFP x CAF = 120 x 0.99 = 118.8"
    ]
  },
  {
    "id": "itpm-u3-s32-mcq-047",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Advantages",
    "difficulty": "medium",
    "type": "recall",
    "question": "Which of the following is a major advantage of Function Point Analysis highlighted in the course book?",
    "options": {
      "A": "It provides a technology-independent measure of size based on user business requirements and supports contract negotiations",
      "B": "It eliminates all need for software testing",
      "C": "It automatically generates executable code from requirements",
      "D": "It guarantees that projects finish with zero software bugs"
    },
    "correctAnswer": "A",
    "explanation": "FPA measures software functionality independently of programming language, allowing early estimation, vendor comparison, and contract negotiation baselines.",
    "whyOthersAreWrong": [
      "FPA is a sizing technique; testing is still mandatory.",
      "FPA does not write code.",
      "No estimation tool guarantees zero bugs."
    ],
    "examTrap": "FPA advantages: Technology-independent, requirement-based, supports contract negotiations.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Advantages",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Advantages",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-048",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA Limitations",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is a primary limitation of Function Point Analysis noted in Unit 3?",
    "options": {
      "A": "It is illegal under European Union software standards",
      "B": "It involves subjective evaluations, is time-consuming, requires skill, and must still be converted into effort and cost",
      "C": "It can only be computed after software is deployed to production",
      "D": "It only works for hardware microchips"
    },
    "correctAnswer": "B",
    "explanation": "FPA requires subjective complexity ratings, takes substantial time and training, and outputs a functional size that still needs conversion to effort (person-hours) and monetary cost.",
    "whyOthersAreWrong": [
      "FPA is an established ISO/IEC standard.",
      "FPA is performed early during design specifications.",
      "FPA applies to software, not microchips."
    ],
    "examTrap": "FPA limitations: Subjective, time-consuming, requires conversion to effort and cost.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA Limitations",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA Limitations",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-049",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "FPA System Inadequacy",
    "difficulty": "hard",
    "type": "concept",
    "question": "For which type of software system is Function Point Analysis explicitly recognized as inadequate?",
    "options": {
      "A": "Standard business dialogue applications and MIS systems",
      "B": "Technical systems with complex mathematical algorithms but little visible functionality",
      "C": "Online e-commerce websites with shopping carts",
      "D": "Database management systems"
    },
    "correctAnswer": "B",
    "explanation": "The course book specifically states that FPA works well for dialogue and information systems, but is rather inadequate for technical systems with complex algorithms but little user-visible UI.",
    "whyOthersAreWrong": [
      "FPA was specifically designed for dialogue and MIS systems.",
      "E-commerce is a standard dialogue system.",
      "Database apps map directly to internal files and transactions."
    ],
    "examTrap": "FPA limitation: Inadequate for algorithm-heavy technical systems with minimal visible functionality.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "FPA System Inadequacy",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "FPA System Inadequacy",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-050",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Planning Poker Core Premise",
    "difficulty": "easy",
    "type": "definition",
    "question": "What core premise underlies the Planning Poker estimation technique?",
    "options": {
      "A": "The project manager should dictate all estimates to enforce obedience",
      "B": "Estimation should be based on the consensus of the people who will actually perform the work",
      "C": "The cheapest contractor estimate must always be accepted",
      "D": "Estimates must be determined by a computer random-number generator"
    },
    "correctAnswer": "B",
    "explanation": "Planning poker starts from the principle that estimates must come from the consensus of the team members doing the work, fostering ownership and accuracy.",
    "whyOthersAreWrong": [
      "Top-down dictation creates unrealistic pressure and low morale.",
      "Cheapest estimates often cause quality failure.",
      "Random numbers undermine engineering rigor."
    ],
    "examTrap": "Planning poker: Estimates come from the consensus of people doing the work.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker Core Premise",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Planning Poker Core Premise",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-051",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Planning Poker 7-Step Sequence",
    "difficulty": "hard",
    "type": "sequence",
    "question": "What is the correct 7-step sequence for conducting a Planning Poker session?",
    "options": {
      "A": "1. Break work; 2. Agree unit; 3. Estimate independently; 4. Reveal simultaneously; 5. Highest/lowest explain; 6. Discuss; 7. Repeat until consensus",
      "B": "1. Agree unit; 2. Reveal cards; 3. Manager decides; 4. Write code; 5. Test; 6. Review; 7. Close project",
      "C": "1. Reveal cards; 2. Estimate independently; 3. Average the numbers; 4. Discard outliers; 5. Break work; 6. Discuss; 7. Done",
      "D": "1. Break work; 2. Manager assigns points; 3. Developers agree; 4. Vote; 5. Reveal; 6. Rework; 7. Exit"
    },
    "correctAnswer": "A",
    "explanation": "The standard 7 steps: Break work into small items -> Agree on unit -> Estimate independently -> Reveal cards simultaneously -> Highest and lowest estimators explain reasoning -> Team discusses -> Repeat until consensus is reached.",
    "whyOthersAreWrong": [
      "Managers do not impose numbers in planning poker.",
      "Cards cannot be revealed before independent estimation.",
      "Manager assignment violates agile consensus."
    ],
    "examTrap": "Planning Poker Sequence: Break -> Unit -> Independent -> Reveal -> Extremes explain -> Discuss -> Consensus.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker 7-Step Sequence",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Planning Poker 7-Step Sequence",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-052",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Planning Poker Simultaneous Reveal",
    "difficulty": "medium",
    "type": "concept",
    "question": "Why must planning poker cards be revealed simultaneously rather than one person at a time?",
    "options": {
      "A": "To make the game more exciting for spectators",
      "B": "To prevent cognitive anchoring, where later estimators are influenced by earlier estimates or senior team members",
      "C": "To ensure all cards land on the floor together",
      "D": "Because cards cannot be read individually"
    },
    "correctAnswer": "B",
    "explanation": "Simultaneous reveal prevents cognitive bias and social anchoring: people are not pressured to adjust their honest estimate to match the opinion of a vocal peer or senior leader.",
    "whyOthersAreWrong": [
      "Spectator entertainment is irrelevant.",
      "Dropping cards is clumsy.",
      "Cards are easy to read individually."
    ],
    "examTrap": "Simultaneous reveal avoids cognitive anchoring and peer pressure.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker Simultaneous Reveal",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Planning Poker Simultaneous Reveal",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-053",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Planning Poker Extreme Explanations",
    "difficulty": "medium",
    "type": "concept",
    "question": "In planning poker, after cards are revealed, who speaks first to begin the team discussion?",
    "options": {
      "A": "The team member who voted exactly in the middle",
      "B": "The team members with the highest and lowest estimates",
      "C": "The external project sponsor",
      "D": "The office receptionist"
    },
    "correctAnswer": "B",
    "explanation": "The people with the highest and lowest estimates explain their reasoning first; the high estimator may see hidden complexities, while the low estimator may know a simpler solution.",
    "whyOthersAreWrong": [
      "Middle voters offer less contrasting insight.",
      "Sponsors do not participate in developer sizing poker.",
      "Receptionists are operational administration."
    ],
    "examTrap": "High and low estimators explain first to surface hidden assumptions and simpler solutions.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker Extreme Explanations",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Planning Poker Extreme Explanations",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-054",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Planning Poker Consensus Rule",
    "difficulty": "easy",
    "type": "trap",
    "question": "When planning poker estimates diverge widely (e.g. votes of 2, 3, 5, 13), how does the team resolve the final estimate?",
    "options": {
      "A": "By calculating the mathematical average and rounding to three decimal places",
      "B": "By discussing the divergence, clarifying assumptions, and re-estimating until genuine consensus is reached",
      "C": "The Scrum Master decides unilaterally",
      "D": "The highest estimate is automatically adopted without discussion"
    },
    "correctAnswer": "B",
    "explanation": "Planning poker forbids simple averaging. Divergent numbers signal different understandings of scope or risk; the team discusses and re-votes until consensus is achieved.",
    "whyOthersAreWrong": [
      "Averaging masks underlying misunderstandings.",
      "Unilateral decisions destroy team consensus.",
      "Defaulting to the highest estimate pads budgets arbitrarily."
    ],
    "examTrap": "Exam Trap: Never average planning poker votes; discuss and re-vote to reach consensus.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker Consensus Rule",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Planning Poker Consensus Rule",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s32-mcq-055",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.2",
    "topic": "Planning Poker Units",
    "difficulty": "easy",
    "type": "recall",
    "question": "What measurement units are typically agreed upon before estimating in Planning Poker?",
    "options": {
      "A": "Kilograms or Liters",
      "B": "Story points, ideal days, or relative effort units using a Fibonacci-like scale",
      "C": "Euros or US Dollars per minute",
      "D": "Lines of code per developer"
    },
    "correctAnswer": "B",
    "explanation": "Planning poker uses relative sizing units such as story points or ideal engineering days, often utilizing Fibonacci-like card sequences (1, 2, 3, 5, 8, 13, 21).",
    "whyOthersAreWrong": [
      "Physical weights are physical goods.",
      "Financial currency is not used for agile story point poker.",
      "Lines of code is obsolete."
    ],
    "examTrap": "Planning poker units = Story points or ideal days on a Fibonacci-like scale.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.2",
      "topic": "Planning Poker Units",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.2",
    "sourceTopic": "Planning Poker Units",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s33-mcq-056",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Core Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "What is Earned Value Management (EVM) in project management?",
    "options": {
      "A": "A method that measures developer morale through weekly surveys",
      "B": "A method combining scope, schedule, and cost/resource measurement to assess project performance and progress",
      "C": "An accounting tool used solely to file annual corporate tax returns",
      "D": "A technique for negotiating lower hardware prices with vendors"
    },
    "correctAnswer": "B",
    "explanation": "EVM integrates the scope baseline, schedule baseline, and cost baseline to provide objective, integrated measurement of project performance.",
    "whyOthersAreWrong": [
      "Morale surveys measure team sentiment.",
      "Tax filing is general accounting.",
      "Vendor negotiation is procurement."
    ],
    "examTrap": "EVM integrates scope, schedule, and cost performance measurement.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Core Definition",
      "page": 72
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Core Definition",
    "sourcePage": 72
  },
  {
    "id": "itpm-u3-s33-mcq-057",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Performance Measurement Baseline (PMB)",
    "difficulty": "medium",
    "type": "concept",
    "question": "In EVM, what does the Performance Measurement Baseline (PMB) represent?",
    "options": {
      "A": "The developer's hourly overtime billing rate",
      "B": "The total approved Planned Value (PV) across the entire project schedule, also known as Budget at Completion (BAC)",
      "C": "The total Actual Cost spent up to yesterday",
      "D": "The company's annual profit margin"
    },
    "correctAnswer": "B",
    "explanation": "The PMB is the authorized, time-phased budget baseline (total PV over time). At project completion, total PV equals the Budget at Completion (BAC).",
    "whyOthersAreWrong": [
      "Billing rate is a labor cost unit.",
      "AC is realized expenditure, not baseline.",
      "Profit margin is corporate finance."
    ],
    "examTrap": "PMB = Total planned value over time = Budget at Completion (BAC).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Performance Measurement Baseline (PMB)",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Performance Measurement Baseline (PMB)",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-058",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Planned Value (PV) Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "How is Planned Value (PV) defined in Earned Value Management?",
    "options": {
      "A": "The actual cash disbursed to contractors",
      "B": "The authorized budget assigned to the scheduled work (what should have been accomplished by now)",
      "C": "The market value of the company's software products",
      "D": "The total profit expected after 10 years"
    },
    "correctAnswer": "B",
    "explanation": "PV represents the authorized budget scheduled to be performed up to a specific reporting date: 'what should have been done'.",
    "whyOthersAreWrong": [
      "Actual cash spent is Actual Cost (AC).",
      "Market value is commercial revenue.",
      "10-year profit is long-term business return."
    ],
    "examTrap": "PV = Authorized budget for scheduled work ('what should have been done').",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Planned Value (PV) Definition",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Planned Value (PV) Definition",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-059",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Earned Value (EV) Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "What is Earned Value (EV) in project cost controlling?",
    "options": {
      "A": "The real money spent to buy hardware",
      "B": "The measure of work performed expressed in terms of the budget authorized for that completed work",
      "C": "The project manager's annual salary bonus",
      "D": "The total lines of code deleted during refactoring"
    },
    "correctAnswer": "B",
    "explanation": "EV measures physical work accomplished expressed in terms of the authorized budget for that work: 'budgeted value actually earned'.",
    "whyOthersAreWrong": [
      "Real cash spent is Actual Cost (AC).",
      "Bonus is executive compensation.",
      "Deleted code is engineering refactoring."
    ],
    "examTrap": "EV = Budgeted value of work actually performed.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Earned Value (EV) Definition",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Earned Value (EV) Definition",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-060",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Actual Cost (AC) Definition",
    "difficulty": "easy",
    "type": "definition",
    "question": "What does Actual Cost (AC) represent in EVM?",
    "options": {
      "A": "The authorized budget planned for next month",
      "B": "The realized cost incurred for the work performed up to the present date",
      "C": "The estimated cost of fixing future bugs",
      "D": "The replacement cost of the server room"
    },
    "correctAnswer": "B",
    "explanation": "AC is the total realized expenditure incurred in executing work completed up to the reporting date: 'money actually spent'.",
    "whyOthersAreWrong": [
      "Authorized planned budget is PV.",
      "Future bug cost is contingency estimation.",
      "Replacement cost is insurance valuation."
    ],
    "examTrap": "AC = Realized cost incurred for work performed ('money actually spent').",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Actual Cost (AC) Definition",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Actual Cost (AC) Definition",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-061",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Schedule Variance (SV) Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "What is the mathematical formula for Schedule Variance (SV)?",
    "options": {
      "A": "SV = EV - PV",
      "B": "SV = PV - EV",
      "C": "SV = EV - AC",
      "D": "SV = EV / PV"
    },
    "correctAnswer": "A",
    "explanation": "SV = EV - PV. It measures schedule deviation in budgetary terms. Remember 'Value First': EV comes first.",
    "whyOthersAreWrong": [
      "PV - EV reverses the variance sign.",
      "EV - AC calculates Cost Variance (CV).",
      "EV / PV calculates the Schedule Performance Index (SPI)."
    ],
    "examTrap": "Schedule Variance: SV = EV - PV.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Schedule Variance (SV) Formula",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Schedule Variance (SV) Formula",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-062",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Cost Variance (CV) Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "What is the mathematical formula for Cost Variance (CV)?",
    "options": {
      "A": "SV = EV - PV",
      "B": "CV = EV - AC",
      "C": "CV = AC - EV",
      "D": "CV = EV / AC"
    },
    "correctAnswer": "B",
    "explanation": "CV = EV - AC. It measures budget surplus or deficit. Remember 'Value First': EV comes first.",
    "whyOthersAreWrong": [
      "EV - PV is Schedule Variance (SV).",
      "AC - EV reverses the variance sign.",
      "EV / AC is the Cost Performance Index (CPI)."
    ],
    "examTrap": "Cost Variance: CV = EV - AC.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Cost Variance (CV) Formula",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Cost Variance (CV) Formula",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-063",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Cost Performance Index (CPI) Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "What is the formula for the Cost Performance Index (CPI)?",
    "options": {
      "A": "CPI = EV / AC",
      "B": "CPI = AC / EV",
      "C": "CPI = EV / PV",
      "D": "CPI = PV / AC"
    },
    "correctAnswer": "A",
    "explanation": "CPI = EV / AC. It measures cost efficiency. EV is the numerator.",
    "whyOthersAreWrong": [
      "AC / EV inverts cost efficiency.",
      "EV / PV is the Schedule Performance Index (SPI).",
      "PV / AC is an invalid hybrid ratio."
    ],
    "examTrap": "Cost Performance Index: CPI = EV / AC.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Cost Performance Index (CPI) Formula",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Cost Performance Index (CPI) Formula",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-064",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Schedule Performance Index (SPI) Formula",
    "difficulty": "easy",
    "type": "calculation",
    "question": "What is the formula for the Schedule Performance Index (SPI)?",
    "options": {
      "A": "SPI = EV / PV",
      "B": "SPI = PV / EV",
      "C": "SPI = EV / AC",
      "D": "SPI = AC / PV"
    },
    "correctAnswer": "A",
    "explanation": "SPI = EV / PV. It measures schedule efficiency. EV is the numerator.",
    "whyOthersAreWrong": [
      "PV / EV inverts schedule efficiency.",
      "EV / AC is CPI.",
      "AC / PV is an invalid ratio."
    ],
    "examTrap": "Schedule Performance Index: SPI = EV / PV.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Schedule Performance Index (SPI) Formula",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Schedule Performance Index (SPI) Formula",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-065",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Value First Memory Rule",
    "difficulty": "easy",
    "type": "recall",
    "question": "What does the 'Value First' memory rule emphasize for all EVM formulas?",
    "options": {
      "A": "Planned Value always comes first",
      "B": "Earned Value (EV) always comes first in variances (EV - PV, EV - AC) and is always the numerator in indices (EV/AC, EV/PV)",
      "C": "Actual Cost always comes first",
      "D": "Customer satisfaction always overrides all formulas"
    },
    "correctAnswer": "B",
    "explanation": "In every standard EVM formula, EV leads: SV = EV - PV, CV = EV - AC, CPI = EV / AC, SPI = EV / PV.",
    "whyOthersAreWrong": [
      "PV only comes second in SV and SPI.",
      "AC only comes second in CV and CPI.",
      "Customer satisfaction is quality, not EVM formula structure."
    ],
    "examTrap": "Memory Rule: VALUE FIRST. EV always leads in variances and sits in the numerator of indices.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Value First Memory Rule",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Value First Memory Rule",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-066",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Schedule Variance (SV) Interpretation",
    "difficulty": "medium",
    "type": "concept",
    "question": "How is the sign of Schedule Variance (SV) interpreted?",
    "options": {
      "A": "Positive SV = ahead of schedule; Negative SV = behind schedule",
      "B": "Positive SV = behind schedule; Negative SV = ahead of schedule",
      "C": "Positive SV = over budget; Negative SV = under budget",
      "D": "Positive SV = project cancelled; Negative SV = project completed"
    },
    "correctAnswer": "A",
    "explanation": "Because SV = EV - PV, a positive SV means EV > PV (we earned more value than planned -> ahead of schedule); negative SV means behind schedule.",
    "whyOthersAreWrong": [
      "Reverses the schedule interpretation.",
      "Cost budget status is indicated by CV, not SV.",
      "Project completion status is not indicated by SV sign alone."
    ],
    "examTrap": "SV: Positive = Ahead of schedule; Negative = Behind schedule.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Schedule Variance (SV) Interpretation",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Schedule Variance (SV) Interpretation",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-067",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Cost Variance (CV) Interpretation",
    "difficulty": "medium",
    "type": "concept",
    "question": "How is the sign of Cost Variance (CV) interpreted?",
    "options": {
      "A": "Positive CV = over budget; Negative CV = under budget",
      "B": "Positive CV = under budget (favorable surplus); Negative CV = over budget (unfavorable deficit)",
      "C": "Positive CV = ahead of schedule; Negative CV = behind schedule",
      "D": "Positive CV = zero actual costs incurred"
    },
    "correctAnswer": "B",
    "explanation": "Because CV = EV - AC, a positive CV means EV > AC (earned value exceeds actual money spent -> under budget/surplus); negative CV means over budget/deficit.",
    "whyOthersAreWrong": [
      "Reverses the budget interpretation.",
      "Schedule status is indicated by SV, not CV.",
      "CV does not mean zero actual cost."
    ],
    "examTrap": "CV: Positive = Under budget (favorable); Negative = Over budget (unfavorable).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Cost Variance (CV) Interpretation",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Cost Variance (CV) Interpretation",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-068",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "CPI Interpretation",
    "difficulty": "medium",
    "type": "concept",
    "question": "How is a Cost Performance Index (CPI) value interpreted?",
    "options": {
      "A": "CPI < 1.0 = cost overrun / unfavorable; CPI > 1.0 = cost underrun / favorable efficiency",
      "B": "CPI < 1.0 = cost underrun; CPI > 1.0 = cost overrun",
      "C": "CPI < 1.0 = ahead of schedule; CPI > 1.0 = behind schedule",
      "D": "CPI = 1.0 means the project has failed"
    },
    "correctAnswer": "A",
    "explanation": "CPI < 1.0 indicates that the project is getting less than $1.00 of earned value for every $1.00 spent (cost overrun); CPI > 1.0 indicates favorable efficiency.",
    "whyOthersAreWrong": [
      "Reverses the economic efficiency interpretation.",
      "Schedule status is indicated by SPI, not CPI.",
      "CPI = 1.0 represents exactly on-budget performance."
    ],
    "examTrap": "CPI: < 1.0 = Cost overrun (inefficient); > 1.0 = Under budget (efficient).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "CPI Interpretation",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "CPI Interpretation",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-069",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "SPI Interpretation",
    "difficulty": "medium",
    "type": "concept",
    "question": "How is a Schedule Performance Index (SPI) value interpreted?",
    "options": {
      "A": "SPI < 1.0 = over budget; SPI > 1.0 = under budget",
      "B": "SPI < 1.0 = behind schedule (less work completed than planned); SPI > 1.0 = ahead of schedule (more work completed than planned)",
      "C": "SPI < 1.0 = ahead of schedule; SPI > 1.0 = behind schedule",
      "D": "SPI = 1.0 means the critical path has 50 days of slack"
    },
    "correctAnswer": "B",
    "explanation": "SPI < 1.0 means the project is progressing at a slower rate than planned (less work earned than scheduled); SPI > 1.0 means ahead of plan.",
    "whyOthersAreWrong": [
      "Cost status is tracked via CPI, not SPI.",
      "Reverses the schedule efficiency interpretation.",
      "Critical path slack is tracked in CPM networks, not defined by SPI."
    ],
    "examTrap": "SPI: < 1.0 = Behind schedule; > 1.0 = Ahead of schedule.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "SPI Interpretation",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "SPI Interpretation",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-070",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Textbook EVM Worked Example: BAC & PV",
    "difficulty": "easy",
    "type": "recall",
    "question": "In the Unit 3 textbook worked example (cRobot AI project), an application is estimated to require 18,000 lines of code at $0.50 per line over 3 months linearly. What are the baseline BAC and Month 1 PV?",
    "options": {
      "A": "BAC = $9,000; Month 1 PV = $3,000",
      "B": "BAC = $18,000; Month 1 PV = $6,000",
      "C": "BAC = $4,500; Month 1 PV = $1,500",
      "D": "BAC = $36,000; Month 1 PV = $12,000"
    },
    "correctAnswer": "A",
    "explanation": "BAC = 18,000 lines * $0.50 = $9,000. Linear distribution across 3 months yields Month 1 PV = $9,000 / 3 = $3,000 (representing 6,000 lines of code).",
    "whyOthersAreWrong": [
      "Fails to multiply lines by cost per line.",
      "Halves the values erroneously.",
      "Multiplies incorrectly."
    ],
    "examTrap": "Textbook example: BAC = 18k x $0.50 = $9,000. Month 1 PV = $9,000 / 3 = $3,000.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Textbook EVM Worked Example: BAC & PV",
      "page": 74
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Textbook EVM Worked Example: BAC & PV",
    "sourcePage": 74
  },
  {
    "id": "itpm-u3-s33-mcq-071",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Textbook EVM Example: EV Calculation",
    "difficulty": "medium",
    "type": "calculation",
    "question": "In the textbook example, the team completes 5,000 lines of code in Month 1 at the baseline rate of $0.50 per line. What is the Earned Value (EV)?",
    "options": {
      "A": "EV = $3,000",
      "B": "EV = $2,500",
      "C": "EV = $3,500",
      "D": "EV = $5,000"
    },
    "correctAnswer": "B",
    "explanation": "EV = completed lines * budgeted cost per line = 5,000 lines * $0.50 = $2,500.",
    "whyOthersAreWrong": [
      "$3,000 is the scheduled Planned Value (PV).",
      "$3,500 is the Actual Cost (AC).",
      "$5,000 is the physical line count without multiplying by cost."
    ],
    "examTrap": "Textbook example EV = 5,000 x $0.50 = $2,500.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Textbook EVM Example: EV Calculation",
      "page": 74
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Textbook EVM Example: EV Calculation",
    "sourcePage": 74,
    "calculationSteps": [
      "Step 1: Identify physical work completed = 5,000 lines",
      "Step 2: Multiply by budgeted rate per line = 5,000 x $0.50 = $2,500"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-072",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Textbook EVM Example: SV & CV",
    "difficulty": "medium",
    "type": "calculation",
    "question": "Using the textbook values (PV = $3,000, EV = $2,500, AC = $3,500), what are the Schedule Variance (SV) and Cost Variance (CV)?",
    "options": {
      "A": "SV = -$500; CV = -$1,000",
      "B": "SV = +$500; CV = +$1,000",
      "C": "SV = -$1,000; CV = -$500",
      "D": "SV = $0; CV = $0"
    },
    "correctAnswer": "A",
    "explanation": "SV = EV - PV = $2,500 - $3,000 = -$500. CV = EV - AC = $2,500 - $3,500 = -$1,000.",
    "whyOthersAreWrong": [
      "Reverses the signs.",
      "Swaps SV and CV values.",
      "Values are not zero."
    ],
    "examTrap": "Textbook example: SV = 2500 - 3000 = -$500. CV = 2500 - 3500 = -$1,000.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Textbook EVM Example: SV & CV",
      "page": 74
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Textbook EVM Example: SV & CV",
    "sourcePage": 74,
    "calculationSteps": [
      "Step 1: Calculate SV = EV - PV = $2,500 - $3,000 = -$500",
      "Step 2: Calculate CV = EV - AC = $2,500 - $3,500 = -$1,000"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-073",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Textbook EVM Example: CPI & SPI",
    "difficulty": "hard",
    "type": "calculation",
    "question": "Using the textbook values (PV = $3,000, EV = $2,500, AC = $3,500), what are the CPI and SPI, and what is the project status?",
    "options": {
      "A": "CPI = 0.71, SPI = 0.83; Behind schedule and over budget",
      "B": "CPI = 1.40, SPI = 1.20; Ahead of schedule and under budget",
      "C": "CPI = 0.83, SPI = 0.71; Ahead of schedule and over budget",
      "D": "CPI = 1.00, SPI = 1.00; Exactly on schedule and budget"
    },
    "correctAnswer": "A",
    "explanation": "CPI = EV / AC = $2,500 / $3,500 = 0.714 (~0.71). SPI = EV / PV = $2,500 / $3,000 = 0.833 (~0.83). Both indices < 1.0 -> Behind schedule and over budget.",
    "whyOthersAreWrong": [
      "Inverted calculations.",
      "Swapped index values.",
      "Project is not on baseline."
    ],
    "examTrap": "Textbook example: CPI = 2500/3500 = 0.71 (over budget); SPI = 2500/3000 = 0.83 (behind schedule).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Textbook EVM Example: CPI & SPI",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Textbook EVM Example: CPI & SPI",
    "sourcePage": 75,
    "calculationSteps": [
      "Step 1: Calculate CPI = EV / AC = $2,500 / $3,500 \u2248 0.714 (0.71)",
      "Step 2: Calculate SPI = EV / PV = $2,500 / $3,000 \u2248 0.833 (0.83)",
      "Step 3: Interpret status: CPI < 1 (over budget), SPI < 1 (behind schedule)"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-074",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Status Quadrant: Both Favorable",
    "difficulty": "easy",
    "type": "interpretation",
    "question": "A project has CPI = 1.15 and SPI = 1.08. What is the current operational status of the project?",
    "options": {
      "A": "Behind schedule and over budget",
      "B": "Ahead of schedule and under budget (favorable cost and schedule performance)",
      "C": "Ahead of schedule but suffering severe cost overruns",
      "D": "Behind schedule but saving massive amounts of money"
    },
    "correctAnswer": "B",
    "explanation": "Both indices are greater than 1.0: SPI > 1.0 means ahead of schedule; CPI > 1.0 means under budget (spending less than budgeted for work earned).",
    "whyOthersAreWrong": [
      "Indices would be < 1.0.",
      "CPI is > 1.0, meaning under budget.",
      "SPI is > 1.0, meaning ahead of schedule."
    ],
    "examTrap": "CPI > 1 and SPI > 1 = Under budget and ahead of schedule.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Status Quadrant: Both Favorable",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Status Quadrant: Both Favorable",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-075",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Status Quadrant: Ahead but Over Budget",
    "difficulty": "medium",
    "type": "interpretation",
    "question": "A project report shows SV = +$15,000 and CV = -$25,000. How should the project manager interpret this status to the sponsor?",
    "options": {
      "A": "The project is ahead of schedule but experiencing a cost overrun (over budget)",
      "B": "The project is behind schedule and under budget",
      "C": "The project has completed with zero defects",
      "D": "The project budget has been stolen"
    },
    "correctAnswer": "A",
    "explanation": "SV is positive (+ ahead of schedule); CV is negative (- over budget). The team is progressing faster than planned, but spending more than authorized for that work.",
    "whyOthersAreWrong": [
      "Reverses both interpretations.",
      "Defect quality is not measured by SV/CV.",
      "Negative CV represents expenditure overrun, not theft."
    ],
    "examTrap": "Positive SV = Ahead of schedule; Negative CV = Over budget.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Status Quadrant: Ahead but Over Budget",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Status Quadrant: Ahead but Over Budget",
    "sourcePage": 73
  },
  {
    "id": "itpm-u3-s33-mcq-076",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Status Quadrant: Behind but Under Budget",
    "difficulty": "medium",
    "type": "interpretation",
    "question": "A software project has CPI = 1.25 and SPI = 0.80. What is occurring on the project?",
    "options": {
      "A": "Work is ahead of schedule and costs are out of control",
      "B": "The project is behind schedule (less work completed than scheduled), but is operating under budget for the work actually accomplished",
      "C": "The project is on time and exactly on budget",
      "D": "The project was terminated last month"
    },
    "correctAnswer": "B",
    "explanation": "SPI = 0.80 (< 1.0 -> behind schedule); CPI = 1.25 (> 1.0 -> under budget/cost efficient).",
    "whyOthersAreWrong": [
      "SPI is < 1.0.",
      "Indices diverge from 1.0.",
      "EVM is being actively reported, meaning the project is active."
    ],
    "examTrap": "CPI > 1 (under budget) + SPI < 1 (behind schedule).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Status Quadrant: Behind but Under Budget",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Status Quadrant: Behind but Under Budget",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-077",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Calculation: CV and CPI",
    "difficulty": "medium",
    "type": "calculation",
    "question": "A work package has Planned Value PV = $50,000, Earned Value EV = $40,000, and Actual Cost AC = $60,000. Calculate CV and CPI.",
    "options": {
      "A": "CV = -$20,000; CPI = 0.67",
      "B": "CV = +$20,000; CPI = 1.50",
      "C": "CV = -$10,000; CPI = 0.80",
      "D": "CV = +$10,000; CPI = 1.25"
    },
    "correctAnswer": "A",
    "explanation": "CV = EV - AC = $40,000 - $60,000 = -$20,000. CPI = EV / AC = $40,000 / $60,000 = 0.667 (~0.67).",
    "whyOthersAreWrong": [
      "Inverted signs.",
      "Calculates SV instead of CV.",
      "Inverted ratio."
    ],
    "examTrap": "CV = 40k - 60k = -$20,000. CPI = 40k / 60k = 0.67.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Calculation: CV and CPI",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Calculation: CV and CPI",
    "sourcePage": 73,
    "calculationSteps": [
      "Step 1: Calculate CV = EV - AC = $40,000 - $60,000 = -$20,000",
      "Step 2: Calculate CPI = EV / AC = $40,000 / $60,000 \u2248 0.667 (0.67)"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-078",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Calculation: SV and SPI",
    "difficulty": "medium",
    "type": "calculation",
    "question": "A work package has Planned Value PV = $80,000, Earned Value EV = $100,000, and Actual Cost AC = $90,000. Calculate SV and SPI.",
    "options": {
      "A": "SV = +$20,000; SPI = 1.25",
      "B": "SV = -$20,000; SPI = 0.80",
      "C": "SV = +$10,000; SPI = 1.11",
      "D": "SV = -$10,000; SPI = 0.90"
    },
    "correctAnswer": "A",
    "explanation": "SV = EV - PV = $100,000 - $80,000 = +$20,000. SPI = EV / PV = $100,000 / $80,000 = 1.25.",
    "whyOthersAreWrong": [
      "Negative sign is incorrect.",
      "Compares EV with AC instead of PV.",
      "Incorrect subtraction."
    ],
    "examTrap": "SV = 100k - 80k = +$20,000. SPI = 100k / 80k = 1.25.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Calculation: SV and SPI",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Calculation: SV and SPI",
    "sourcePage": 73,
    "calculationSteps": [
      "Step 1: Calculate SV = EV - PV = $100,000 - $80,000 = +$20,000",
      "Step 2: Calculate SPI = EV / PV = $100,000 / $80,000 = 1.25"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-079",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM 25/75 Rule",
    "difficulty": "easy",
    "type": "definition",
    "question": "What does the '25/75 Rule' specify in earned value measurement?",
    "options": {
      "A": "25% of the budget goes to developers and 75% goes to managers",
      "B": "25% of the task's earned value is credited upon starting/preparation, and the remaining 75% is credited upon 100% completion",
      "C": "25% of project risks must be avoided and 75% mitigated",
      "D": "Work is executed 25 hours per week with 75 hours of meetings"
    },
    "correctAnswer": "B",
    "explanation": "The 25/75 rule credits 25% of the budgeted value when the work package begins/prepares, and the final 75% upon validated physical completion.",
    "whyOthersAreWrong": [
      "Salary distribution is HR compensation.",
      "Risk strategies are not governed by fixed percentages.",
      "Facetious working hours."
    ],
    "examTrap": "25/75 rule: 25% credited at start/preparation, 75% credited upon completion.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM 25/75 Rule",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM 25/75 Rule",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s33-mcq-080",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "When to Use 25/75 Rule",
    "difficulty": "medium",
    "type": "concept",
    "question": "When is an earned value crediting convention like the 25/75 Rule particularly useful in IT projects?",
    "options": {
      "A": "When physical completion of an ongoing technical work package is difficult to measure objectively",
      "B": "When the customer refuses to pay invoices",
      "C": "When developers write code in 25 different programming languages",
      "D": "When the project duration is less than 24 hours"
    },
    "correctAnswer": "A",
    "explanation": "The course book notes that rules like 25/75 are applied when physical progress cannot be measured incrementally on a daily basis.",
    "whyOthersAreWrong": [
      "Invoicing disputes are commercial matters.",
      "Programming languages are technical stack choices.",
      "Ultra-short projects do not use complex EVM crediting."
    ],
    "examTrap": "25/75 rule is applied when physical progress is difficult to measure objectively.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "When to Use 25/75 Rule",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "When to Use 25/75 Rule",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s33-mcq-081",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Assumptions in IT",
    "difficulty": "medium",
    "type": "concept",
    "question": "Which of the following is a foundational assumption underlying meaningful EVM analysis?",
    "options": {
      "A": "Sound and reliable initial cost/schedule estimates, reliable tracking data, and a sufficiently stable external environment",
      "B": "Project scope must expand by at least 50% every week",
      "C": "Work quality and testing are completely ignored",
      "D": "The project must never have a budget baseline"
    },
    "correctAnswer": "A",
    "explanation": "EVM assumes reliable original baselines, accurate accounting/progress data, acceptable deliverable quality, and reasonable external stability.",
    "whyOthersAreWrong": [
      "Scope creep undermines EVM.",
      "Quality failure invalidates earned value.",
      "Baselines are mandatory for EVM."
    ],
    "examTrap": "EVM assumes reliable original estimates, good tracking data, and baseline stability.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Assumptions in IT",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Assumptions in IT",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s33-mcq-082",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Challenges in Large IT Projects",
    "difficulty": "hard",
    "type": "concept",
    "question": "Why does the course book identify Earned Value Management as particularly difficult in large IT projects?",
    "options": {
      "A": "EVM is legally banned on large software projects",
      "B": "Fluid and changing IT requirements make earned value difficult to define, and overlapping agile planning/execution complicates baseline tracking",
      "C": "Large projects have too much money to bother tracking costs",
      "D": "Computers cannot calculate fractions with large numbers"
    },
    "correctAnswer": "B",
    "explanation": "Course book page 76 highlights major difficulty in large IT projects: evolving requirements make defining 'earned value' elusive, and agile overlapping iterations blur baselines.",
    "whyOthersAreWrong": [
      "EVM is widely used across industry.",
      "Large projects have the strictest budgetary oversight.",
      "Modern software easily computes financial ratios."
    ],
    "examTrap": "IT challenges: Fluid requirements make EV hard to define; overlapping agile iterations blur baselines.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Challenges in Large IT Projects",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Challenges in Large IT Projects",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s33-mcq-083",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM vs Burn-Down Chart Core Difference",
    "difficulty": "medium",
    "type": "comparison",
    "question": "What is the fundamental difference between EVM and an Agile Burn-Down Chart?",
    "options": {
      "A": "EVM measures planned value earned against actual cost incurred; a burn-down chart plots remaining effort over time declining toward zero",
      "B": "EVM only tracks bugs; burn-down charts only track developer salaries",
      "C": "A burn-down chart tracks past money; EVM tracks future profits",
      "D": "Both are identical visual graphs with no differences"
    },
    "correctAnswer": "A",
    "explanation": "EVM evaluates value earned vs money spent against a baseline; a burn-down chart tracks how much effort remains in the sprint, ideally descending from 100% to 0%.",
    "whyOthersAreWrong": [
      "EVM tracks scope/schedule/cost; burn-down tracks effort remaining.",
      "Burn-down tracks remaining effort, not past money.",
      "They represent fundamentally different dimensions."
    ],
    "examTrap": "EVM = Value earned vs money spent. Burn-down = Remaining effort descending to zero.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM vs Burn-Down Chart Core Difference",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM vs Burn-Down Chart Core Difference",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s33-mcq-084",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Burn-Down Chart Visual Trajectory",
    "difficulty": "easy",
    "type": "recall",
    "question": "In an ideal agile sprint, what visual trajectory should a Burn-Down Chart display?",
    "options": {
      "A": "A line that progressively descends from 100% remaining effort toward 0% at sprint end",
      "B": "An exponential curve shooting upward into the sky",
      "C": "A horizontal line that never moves",
      "D": "A random sine wave oscillating up and down"
    },
    "correctAnswer": "A",
    "explanation": "A burn-down chart starts with total estimated sprint effort and burns downward day-by-day, ideally reaching zero remaining effort on the final day.",
    "whyOthersAreWrong": [
      "Upward trajectory indicates expanding work or negative progress.",
      "Horizontal line indicates zero progress.",
      "Sine waves indicate chaotic scope thrashing."
    ],
    "examTrap": "Burn-down chart ideally declines from 100% effort remaining to 0% at sprint completion.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Burn-Down Chart Visual Trajectory",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Burn-Down Chart Visual Trajectory",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s33-mcq-085",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Calculation: Determining EV from Percentage",
    "difficulty": "medium",
    "type": "calculation",
    "question": "A software module has a total budgeted cost (PV baseline) of $40,000. Physical inspection verifies that exactly 60% of the work is complete. Actual Cost spent to date is $28,000. What is the Earned Value (EV)?",
    "options": {
      "A": "EV = $24,000",
      "B": "EV = $28,000",
      "C": "EV = $40,000",
      "D": "EV = $16,000"
    },
    "correctAnswer": "A",
    "explanation": "EV = Total Budget * % Complete = $40,000 * 0.60 = $24,000.",
    "whyOthersAreWrong": [
      "$28,000 is the Actual Cost (AC).",
      "$40,000 is the total baseline budget.",
      "$16,000 is the unearned remaining budget (40%)."
    ],
    "examTrap": "EV = Budget x % Complete = $40,000 x 60% = $24,000.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Calculation: Determining EV from Percentage",
      "page": 73
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Calculation: Determining EV from Percentage",
    "sourcePage": 73,
    "calculationSteps": [
      "Step 1: Identify baseline budget = $40,000",
      "Step 2: Multiply by percentage complete = $40,000 x 0.60 = $24,000"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-086",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "EVM Comprehensive Scenario: Status Evaluation",
    "difficulty": "hard",
    "type": "scenario",
    "question": "Following from the previous question (EV = $24,000, AC = $28,000, and scheduled PV to date was $30,000), calculate CV, SV, CPI, and SPI. What action should the project manager prioritize?",
    "options": {
      "A": "CV = -$4,000, SV = -$6,000, CPI = 0.86, SPI = 0.80; The project is behind schedule and over budget, requiring corrective action to accelerate progress and control spending",
      "B": "CV = +$4,000, SV = +$6,000, CPI = 1.14, SPI = 1.25; The project is performing excellently and needs no intervention",
      "C": "CV = $0, SV = $0, CPI = 1.00, SPI = 1.00; The project is exactly on track",
      "D": "CV = -$28,000, SV = -$30,000, CPI = 0.50, SPI = 0.50; The project must be immediately abandoned"
    },
    "correctAnswer": "A",
    "explanation": "CV = EV - AC = $24k - $28k = -$4,000. SV = EV - PV = $24k - $30k = -$6,000. CPI = $24k / $28k = 0.857 (~0.86). SPI = $24k / $30k = 0.80. Both variances negative, both indices < 1.0 -> Behind schedule and over budget.",
    "whyOthersAreWrong": [
      "Reverses signs and efficiency interpretation.",
      "Values are clearly divergent from baseline.",
      "Calculation values are inaccurate."
    ],
    "examTrap": "CV = -$4k, SV = -$6k, CPI = 0.86, SPI = 0.80 -> Behind schedule and over budget.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "EVM Comprehensive Scenario: Status Evaluation",
      "page": 74
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "EVM Comprehensive Scenario: Status Evaluation",
    "sourcePage": 74,
    "calculationSteps": [
      "Step 1: Calculate CV = EV - AC = $24,000 - $28,000 = -$4,000",
      "Step 2: Calculate SV = EV - PV = $24,000 - $30,000 = -$6,000",
      "Step 3: Calculate CPI = $24,000 / $28,000 \u2248 0.857 (0.86)",
      "Step 4: Calculate SPI = $24,000 / $30,000 = 0.80",
      "Step 5: Conclude: Behind schedule (SPI < 1) and over budget (CPI < 1)"
    ]
  },
  {
    "id": "itpm-u3-s33-mcq-087",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.3",
    "topic": "Tolerance Range for EVM Indices",
    "difficulty": "medium",
    "type": "concept",
    "question": "What common operational practice regarding EVM performance indices (CPI and SPI) is noted in Unit 3?",
    "options": {
      "A": "Project teams often establish a tolerance band (e.g. between 0.8 and 1.2) where deviations trigger managerial attention only if breached",
      "B": "Indices must remain exactly 1.000 at all times or developers are penalized",
      "C": "CPI and SPI are deleted if they drop below 0.9",
      "D": "Indices are only checked once at the end of the 5-year warranty period"
    },
    "correctAnswer": "A",
    "explanation": "Course book page 75 notes: In practice, project teams often establish tolerance ranges (e.g. between 0.8 and 1.2) to govern management by exception.",
    "whyOthersAreWrong": [
      "Exact 1.000 is impossible in dynamic projects.",
      "Deleting poor metrics conceals reality.",
      "EVM is monitored periodically (weekly/monthly)."
    ],
    "examTrap": "Teams establish an index tolerance range (e.g. 0.8 to 1.2) for management intervention.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.3",
      "topic": "Tolerance Range for EVM Indices",
      "page": 75
    },
    "sourceUnit": 3,
    "sourceSection": "3.3",
    "sourceTopic": "Tolerance Range for EVM Indices",
    "sourcePage": 75
  },
  {
    "id": "itpm-u3-s34-mcq-088",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Continuous Risk Management",
    "difficulty": "easy",
    "type": "concept",
    "question": "What core principle regarding risk management in IT projects is emphasized throughout Unit 3?",
    "options": {
      "A": "Risk management is a one-time planning exercise performed only before project kickoff",
      "B": "Risk management must be continuous throughout the entire project lifecycle, because risks evolve, emerge, and vanish over time",
      "C": "Risk management is only necessary when a project is already bankrupt",
      "D": "Risk management should only be conducted by external police officers"
    },
    "correctAnswer": "B",
    "explanation": "Risk management is an active, continuous lifecycle discipline. Risks change over time; new risks emerge, existing risks alter severity, and some vanish.",
    "whyOthersAreWrong": [
      "One-time planning leaves projects defenseless against evolving risks.",
      "Post-bankruptcy is an autopsy, not project management.",
      "Police enforce criminal law."
    ],
    "examTrap": "Core principle: Risk management is continuous throughout the project lifecycle.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Continuous Risk Management",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Continuous Risk Management",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s34-mcq-089",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Strategic Risk Sequence",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the general strategic sequence emphasized for managing project risks?",
    "options": {
      "A": "Response -> Detection -> Prevention",
      "B": "Prevention -> Detection -> Response (more effort on prevention reduces later response effort)",
      "C": "Ignore -> Deny -> Blame others",
      "D": "Termination -> Initiation -> Planning"
    },
    "correctAnswer": "B",
    "explanation": "The course book highlights: teams adopt risk strategies following Prevention -> Detection -> Response. Statistically, more time spent on prevention reduces later response effort.",
    "whyOthersAreWrong": [
      "Reverses the proactive sequence.",
      "Denial is pathological organizational failure.",
      "Termination is project closure."
    ],
    "examTrap": "Strategic sequence: Prevention -> Detection -> Response. Prevention reduces response effort.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Strategic Risk Sequence",
      "page": 76
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Strategic Risk Sequence",
    "sourcePage": 76
  },
  {
    "id": "itpm-u3-s34-mcq-090",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Four Core Risk Functions (I-A-M-M)",
    "difficulty": "easy",
    "type": "recall",
    "question": "What are the four core functions of the risk management cycle established in Unit 3?",
    "options": {
      "A": "1. Identify & describe; 2. Assess & analyse; 3. Mitigate & respond; 4. Monitor & report",
      "B": "1. Plan; 2. Build; 3. Run; 4. Terminate",
      "C": "1. Avoid; 2. Mitigate; 3. Transfer; 4. Accept",
      "D": "1. Scope; 2. Schedule; 3. Cost; 4. Quality"
    },
    "correctAnswer": "A",
    "explanation": "The continuous risk cycle comprises four core functions (I-A-M-M): 1. Risk identification & description; 2. Risk assessment & analysis; 3. Risk mitigation/response; 4. Risk monitoring & reporting.",
    "whyOthersAreWrong": [
      "Generic engineering lifecycle.",
      "These are the four risk treatment response options, NOT the management functions.",
      "Iron triangle and quality constraints."
    ],
    "examTrap": "Four risk functions (I-A-M-M): Identify -> Assess -> Mitigate -> Monitor.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Four Core Risk Functions (I-A-M-M)",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Four Core Risk Functions (I-A-M-M)",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-091",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Process vs Response Trap",
    "difficulty": "hard",
    "type": "trap",
    "question": "Why is it an exam trap to confuse the Risk Management Process with Risk Response Strategies?",
    "options": {
      "A": "The process consists of 4 lifecycle functions (I-A-M-M); response strategies are the 4 treatment options (Avoid, Mitigate, Transfer, Accept) chosen during the mitigation step",
      "B": "Risk response strategies are only used in agile, while the process is only used in waterfall",
      "C": "They are legally synonymous under German commercial code",
      "D": "Risk responses cannot be documented in the risk register"
    },
    "correctAnswer": "A",
    "explanation": "The process is the overall management methodology (Identify, Assess, Mitigate, Monitor). Response strategies (Avoid, Mitigate, Transfer, Accept) are specific tactical tools used in step 3.",
    "whyOthersAreWrong": [
      "Both apply across plan-driven and agile frameworks.",
      "They are conceptually distinct.",
      "Responses are explicitly documented in the risk register."
    ],
    "examTrap": "Exam Trap: Process = I-A-M-M functions. Treatment Options = Avoid, Mitigate, Transfer, Accept.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Process vs Response Trap",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Process vs Response Trap",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-092",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Identification Function",
    "difficulty": "easy",
    "type": "definition",
    "question": "What occurs during the 'Risk Identification and Description' function of the risk cycle?",
    "options": {
      "A": "The project manager fires all contractors",
      "B": "Project uncertainties, threats, and technological opportunities are discovered, cataloged, and documented",
      "C": "Financial profits are distributed to shareholders",
      "D": "Software source code is deleted"
    },
    "correctAnswer": "B",
    "explanation": "Identification proactively uncovers potential cost, schedule, technical, and architectural risks and documents their characteristics.",
    "whyOthersAreWrong": [
      "Firing staff is an extreme administrative action.",
      "Profit distribution is corporate dividends.",
      "Deleting code is sabotage."
    ],
    "examTrap": "Risk Identification = Discovering and documenting potential risks and opportunities.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Identification Function",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Identification Function",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-093",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Assessment and Analysis Function",
    "difficulty": "medium",
    "type": "definition",
    "question": "What is evaluated during the 'Risk Assessment and Analysis' function?",
    "options": {
      "A": "Risk category, likelihood of occurring, underlying cause, and magnitude of potential impact",
      "B": "The developer's keyboard typing ergonomics",
      "C": "The color scheme of the office walls",
      "D": "The cafeteria lunch menu"
    },
    "correctAnswer": "A",
    "explanation": "Assessment evaluates the nature/category of the risk, estimates its likelihood (probability), analyzes root causes, and gauges potential severity (impact).",
    "whyOthersAreWrong": [
      "Ergonomics is health and safety.",
      "Wall color is interior design.",
      "Cafeteria menu is office hospitality."
    ],
    "examTrap": "Risk Assessment = Analyzing category, likelihood, cause, and impact.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Assessment and Analysis Function",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Assessment and Analysis Function",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-094",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Response: Avoid",
    "difficulty": "medium",
    "type": "definition",
    "question": "What does the risk response strategy 'Avoid' entail?",
    "options": {
      "A": "Ignoring the risk and hoping it never happens",
      "B": "Changing project plans, requirements, or architecture to completely eliminate the risk or protect objectives from its impact",
      "C": "Purchasing commercial insurance against software failure",
      "D": "Hiring extra programmers to work overtime"
    },
    "correctAnswer": "B",
    "explanation": "Avoidance eliminates the threat entirely (e.g. dropping a high-risk experimental feature or adopting a proven commercial vendor).",
    "whyOthersAreWrong": [
      "Ignoring risk is passive acceptance, not avoidance.",
      "Insurance is Risk Transfer.",
      "Hiring extra staff for rework is Mitigation."
    ],
    "examTrap": "Avoid = Eliminate the threat entirely by altering scope or technical approach.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Response: Avoid",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Response: Avoid",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-095",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Response: Mitigate",
    "difficulty": "medium",
    "type": "definition",
    "question": "What does the risk response strategy 'Mitigate' involve?",
    "options": {
      "A": "Taking proactive actions to reduce the probability of occurrence and/or reduce the impact of the risk to an acceptable level",
      "B": "Transferring 100% of the project budget to an offshore bank",
      "C": "Removing all testing phases to save time",
      "D": "Refusing to talk to the project customer"
    },
    "correctAnswer": "A",
    "explanation": "Mitigation reduces risk exposure (e.g. conducting prototype proof-of-concepts to reduce technical uncertainty or adding automated testing to catch defects early).",
    "whyOthersAreWrong": [
      "Offshore transfers are financial treasury actions.",
      "Removing testing increases risk drastically.",
      "Avoiding customers damages communication."
    ],
    "examTrap": "Mitigate = Proactive actions reducing likelihood and/or impact.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Response: Mitigate",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Response: Mitigate",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-096",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Response: Transfer",
    "difficulty": "medium",
    "type": "definition",
    "question": "How is the 'Transfer' risk response strategy implemented in IT projects?",
    "options": {
      "A": "Shifting the financial or operational impact and ownership of the risk to a third party (e.g. through warranties, insurance, fixed-price contracts, or SLAs)",
      "B": "Transferring the project manager to another company",
      "C": "Copying code files from one computer folder to another",
      "D": "Postponing all project meetings indefinitely"
    },
    "correctAnswer": "A",
    "explanation": "Transfer passes the impact to a third party who assumes responsibility (e.g. fixed-price vendor contracts, performance bonds, software escrow, insurance).",
    "whyOthersAreWrong": [
      "Transferring the manager is personnel turnover.",
      "Copying files is data backup.",
      "Postponing meetings is poor communication."
    ],
    "examTrap": "Transfer = Shifting risk consequence and ownership to a third party (insurance, SLA, vendor contract).",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Response: Transfer",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Response: Transfer",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-097",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Response: Accept",
    "difficulty": "medium",
    "type": "definition",
    "question": "What does the 'Accept' risk response strategy mean in project management?",
    "options": {
      "A": "Pretending that no risks exist in the world",
      "B": "Acknowledging the risk and deciding not to take active action unless it occurs, retaining residual risk supported by contingency reserves",
      "C": "Surrendering to project failure immediately",
      "D": "Forcing developers to sign liability waivers"
    },
    "correctAnswer": "B",
    "explanation": "Acceptance is chosen when risks cannot be avoided or mitigated cost-effectively. The team establishes a contingency buffer and monitors triggers.",
    "whyOthersAreWrong": [
      "Pretending risk does not exist is ignorant denial.",
      "Surrender is premature termination.",
      "Liability waivers do not manage technical risk."
    ],
    "examTrap": "Accept = Acknowledge residual risk, establish contingency reserves, and monitor.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Response: Accept",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Response: Accept",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-098",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Five Risk Maturity Levels Memory Aid",
    "difficulty": "easy",
    "type": "recall",
    "question": "What does the memory aid 'A-A-O-M-A' stand for in the Unit 3 Risk Management Maturity Model?",
    "options": {
      "A": "Level 1 Ad hoc -> Level 2 Abbreviated -> Level 3 Organized -> Level 4 Managed -> Level 5 Adaptive",
      "B": "Avoid -> Accept -> Organize -> Mitigate -> Analyze",
      "C": "Accuracy -> Actionable -> Output -> Monitor -> Actual",
      "D": "Agile -> Architecture -> Operations -> Management -> Audit"
    },
    "correctAnswer": "A",
    "explanation": "A-A-O-M-A represents the five risk maturity levels: Level 1: Ad hoc, Level 2: Abbreviated, Level 3: Organized, Level 4: Managed, Level 5: Adaptive.",
    "whyOthersAreWrong": [
      "Muddled collection of risk terms.",
      "Muddled quality and EVM terms.",
      "Generic IT terms."
    ],
    "examTrap": "A-A-O-M-A = Ad hoc, Abbreviated, Organized, Managed, Adaptive.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Five Risk Maturity Levels Memory Aid",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Five Risk Maturity Levels Memory Aid",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-099",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Maturity Level 1: Ad hoc",
    "difficulty": "easy",
    "type": "recall",
    "question": "What characterizes Level 1 (Ad hoc) in the Risk Management Maturity Model?",
    "options": {
      "A": "Standardized processes integrated across the organization",
      "B": "Informal and disorganized approaches; risk management is left to individual initiative, and cost/schedule deviations are common",
      "C": "Continuous feedback and automated risk response bots",
      "D": "Comprehensive quantitative risk metrics reviewed weekly by the Board"
    },
    "correctAnswer": "B",
    "explanation": "Level 1 (Ad hoc) is chaotic and informal. Processes are undefined, risk handling is reactive and individual-dependent, and overruns are frequent.",
    "whyOthersAreWrong": [
      "Standardized processes describe Level 3 (Organized).",
      "Continuous feedback describes Level 5 (Adaptive).",
      "Quantitative metrics describe Level 4 (Managed)."
    ],
    "examTrap": "Level 1: Ad hoc = Informal, disorganized, individual-dependent, common deviations.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Maturity Level 1: Ad hoc",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Maturity Level 1: Ad hoc",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-100",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Maturity Level 2: Abbreviated",
    "difficulty": "medium",
    "type": "definition",
    "question": "What distinguishes Level 2 (Abbreviated) from Level 1 in risk maturity?",
    "options": {
      "A": "Some risk processes exist but are inconsistently understood and followed; risk outcomes remain largely unpredictable",
      "B": "Risk is completely eliminated from all projects",
      "C": "The organization has achieved the highest possible level of excellence",
      "D": "Risk management is exclusively handled by AI systems"
    },
    "correctAnswer": "A",
    "explanation": "Level 2 (Abbreviated) has introductory risk processes, but compliance is inconsistent across teams, leaving outcomes unpredictable.",
    "whyOthersAreWrong": [
      "Risk is never 100% eliminated.",
      "Highest level is Level 5 (Adaptive).",
      "AI does not replace organizational risk discipline."
    ],
    "examTrap": "Level 2: Abbreviated = Some process exists, but inconsistent and outcomes unpredictable.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Maturity Level 2: Abbreviated",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Maturity Level 2: Abbreviated",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-101",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Maturity Level 3: Organized",
    "difficulty": "medium",
    "type": "definition",
    "question": "What milestone is achieved when an organization reaches Risk Maturity Level 3 (Organized)?",
    "options": {
      "A": "Standardized and documented risk processes are institutionalized and integrated end-to-end, producing more predictable results",
      "B": "Projects no longer require budgets or schedules",
      "C": "All risks are transferred to insurance companies",
      "D": "Developers are exempted from code reviews"
    },
    "correctAnswer": "A",
    "explanation": "Level 3 (Organized) features formalized, standardized, and documented risk procedures integrated into project workflows, yielding predictable results.",
    "whyOthersAreWrong": [
      "Budgets and schedules remain vital.",
      "Not all risks can or should be insured.",
      "Code reviews are essential."
    ],
    "examTrap": "Level 3: Organized = Standardized, documented, and integrated end-to-end.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Maturity Level 3: Organized",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Maturity Level 3: Organized",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-102",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Maturity Level 4: Managed",
    "difficulty": "medium",
    "type": "definition",
    "question": "What characterizes Risk Maturity Level 4 (Managed)?",
    "options": {
      "A": "Process effectiveness is measured and documented; risk information is actively controlled and used for decision-making",
      "B": "Risk is managed by shouting at team members",
      "C": "Processes are discarded in favor of pure guesswork",
      "D": "Projects operate with zero contingency reserves"
    },
    "correctAnswer": "A",
    "explanation": "Level 4 (Managed) uses quantitative metrics to measure risk process effectiveness, controlling variances and feeding empirical data into management decisions.",
    "whyOthersAreWrong": [
      "Shouting is abusive management.",
      "Guesswork is Level 1 chaos.",
      "Contingency reserves are managed quantitatively at Level 4."
    ],
    "examTrap": "Level 4: Managed = Measured, documented, controlled, and used for decisions.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Maturity Level 4: Managed",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Maturity Level 4: Managed",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-103",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Maturity Level 5: Adaptive",
    "difficulty": "medium",
    "type": "definition",
    "question": "What defines the highest stage of risk maturity: Level 5 (Adaptive)?",
    "options": {
      "A": "Continuous improvement through systematic feedback, innovation, and adoption of new technologies and lessons learned",
      "B": "The company stops doing projects altogether",
      "C": "Zero risks ever occur in the organization",
      "D": "Management reserves are increased to 1,000%"
    },
    "correctAnswer": "A",
    "explanation": "Level 5 (Adaptive) continually optimizes risk practices through institutionalized feedback loops, process innovation, and lessons learned.",
    "whyOthersAreWrong": [
      "Stopping projects is corporate failure.",
      "Zero risk is impossible in business.",
      "Excessive reserves waste capital."
    ],
    "examTrap": "Level 5: Adaptive = Continuous improvement through feedback, innovation, and new technology.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Maturity Level 5: Adaptive",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Maturity Level 5: Adaptive",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-104",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Top-Down vs Bottom-Up Risk Identification",
    "difficulty": "hard",
    "type": "comparison",
    "question": "How do Bottom-Up and Top-Down risk identification approaches differ in practice?",
    "options": {
      "A": "Bottom-Up starts at tasks and aggregates upward to work packages and project impact; Top-Down starts with project symptoms/problems and investigates downward to critical activities",
      "B": "Bottom-Up is only used by junior developers; Top-Down is only used by sponsors",
      "C": "Bottom-Up only identifies opportunities; Top-Down only identifies threats",
      "D": "Bottom-Up eliminates risk; Top-Down creates risk"
    },
    "correctAnswer": "A",
    "explanation": "Bottom-Up examines granular technical tasks to identify localized vulnerabilities and sums their impact upward. Top-Down analyzes macroscopic project variances and drills down to identify root causes.",
    "whyOthersAreWrong": [
      "Both approaches involve collaborative cross-functional participation.",
      "Both identify positive opportunities and negative threats.",
      "Neither eliminates risk autonomously."
    ],
    "examTrap": "Bottom-Up = Tasks -> Work Packages -> Project. Top-Down = Project symptoms -> Drill down to activities.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Top-Down vs Bottom-Up Risk Identification",
      "page": 77
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Top-Down vs Bottom-Up Risk Identification",
    "sourcePage": 77
  },
  {
    "id": "itpm-u3-s34-mcq-105",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Qualitative Risk Analysis Methods",
    "difficulty": "medium",
    "type": "classification",
    "question": "Which set of tools is classified as Qualitative Risk Analysis in Unit 3?",
    "options": {
      "A": "Earned Value Analysis calculations only",
      "B": "Expert judgment, past-project reviews, checklists, assumption analysis, cause-and-effect diagrams, influence diagrams, and SWOT",
      "C": "Compound interest formulas and depreciation tables",
      "D": "Hardware circuit voltage meters"
    },
    "correctAnswer": "B",
    "explanation": "Qualitative risk analysis uses descriptive, non-purely mathematical techniques: expert input, lessons learned checklists, assumption testing, Ishikawa diagrams, influence diagrams, and SWOT.",
    "whyOthersAreWrong": [
      "EVM projections are quantitative.",
      "Interest tables are finance metrics.",
      "Voltage meters are physical electrical tools."
    ],
    "examTrap": "Qualitative tools: Expert input, checklists, assumption analysis, cause-and-effect, influence diagrams, SWOT.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Qualitative Risk Analysis Methods",
      "page": 78
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Qualitative Risk Analysis Methods",
    "sourcePage": 78
  },
  {
    "id": "itpm-u3-s34-mcq-106",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Quantitative Risk Analysis Nature",
    "difficulty": "medium",
    "type": "definition",
    "question": "What is the focus of Quantitative Risk Analysis in the course book?",
    "options": {
      "A": "Evaluating developer facial expressions",
      "B": "The numerical estimation of the potential effects of risks on project objectives (e.g. monetary cost projections)",
      "C": "Writing descriptive essays about historical software failures",
      "D": "Counting how many words are in the project charter"
    },
    "correctAnswer": "B",
    "explanation": "Quantitative risk analysis numerically models the probabilistic cost and schedule impacts of risks on project baselines.",
    "whyOthersAreWrong": [
      "Facial expressions are subjective emotion.",
      "Descriptive essays are qualitative historical reviews.",
      "Word counts are document formatting."
    ],
    "examTrap": "Quantitative analysis = Numerical estimation of potential effects on cost and schedule.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Quantitative Risk Analysis Nature",
      "page": 78
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Quantitative Risk Analysis Nature",
    "sourcePage": 78
  },
  {
    "id": "itpm-u3-s34-mcq-107",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Likelihood-Impact Matrix",
    "difficulty": "easy",
    "type": "concept",
    "question": "How does a Likelihood-Impact Matrix assist project managers in risk management?",
    "options": {
      "A": "It generates software code automatically",
      "B": "It maps likelihood against severity/impact to prioritize high-attention risks requiring urgent mitigation",
      "C": "It tracks the physical location of company vehicles",
      "D": "It calculates employee tax deductions"
    },
    "correctAnswer": "B",
    "explanation": "The Likelihood-Impact matrix prioritizes risks into high, medium, and low bands, ensuring that severe, probable threats receive immediate resource allocation.",
    "whyOthersAreWrong": [
      "Matrices do not write code.",
      "Vehicle tracking is fleet logistics.",
      "Tax deductions are payroll accounting."
    ],
    "examTrap": "Likelihood-Impact matrix prioritizes risks to focus resources on high-threat items.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Likelihood-Impact Matrix",
      "page": 78
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Likelihood-Impact Matrix",
    "sourcePage": 78
  },
  {
    "id": "itpm-u3-s34-mcq-108",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Register Core Fields",
    "difficulty": "easy",
    "type": "recall",
    "question": "According to Table 3 in Unit 3, what core fields must be included in the project Risk Register?",
    "options": {
      "A": "Risk Description, Likelihood, Severity (Impact), Owner, Mitigation Actions",
      "B": "Employee Name, Home Address, Bank Account, Shoe Size",
      "C": "Computer IP Address, MAC Address, WiFi Password, Cable Length",
      "D": "Planned Value, Earned Value, Actual Cost, CPI"
    },
    "correctAnswer": "A",
    "explanation": "Table 3 specifies the canonical Risk Register columns: Risk description, Likelihood, Severity, Owner, and Mitigation Actions.",
    "whyOthersAreWrong": [
      "Personal data is HR privacy information.",
      "Network attributes are IT infrastructure details.",
      "EVM metrics are tracked in cost reports."
    ],
    "examTrap": "Risk Register fields: Description, Likelihood, Severity, Owner, Mitigation Actions.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Register Core Fields",
      "page": 79
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Register Core Fields",
    "sourcePage": 79
  },
  {
    "id": "itpm-u3-s34-mcq-109",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Role of the Risk Owner",
    "difficulty": "medium",
    "type": "concept",
    "question": "What is the specific responsibility of the 'Risk Owner' designated in the Risk Register?",
    "options": {
      "A": "The person or entity responsible for monitoring the risk and executing the agreed-upon mitigation response if triggers occur",
      "B": "The person who is legally blamed and sued if a risk occurs",
      "C": "The person who pays for project losses out of their personal salary",
      "D": "The external customer who buys the software"
    },
    "correctAnswer": "A",
    "explanation": "A risk owner is the assigned individual or group accountable for monitoring risk symptoms (triggers) and managing the response strategy.",
    "whyOthersAreWrong": [
      "Risk owners are accountable managers, not scapegoats.",
      "Personal salary deduction is illegal and unviable.",
      "Customers do not manage internal technical risks."
    ],
    "examTrap": "Risk Owner = Person responsible for monitoring risk and executing mitigation actions.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Role of the Risk Owner",
      "page": 79
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Role of the Risk Owner",
    "sourcePage": 79
  },
  {
    "id": "itpm-u3-s34-mcq-110",
    "subjectId": "it-project-management",
    "unit": 3,
    "unitId": 3,
    "section": "3.4",
    "topic": "Risk Register Maintenance",
    "difficulty": "easy",
    "type": "concept",
    "question": "How frequently should the project Risk Register be updated?",
    "options": {
      "A": "Only once on the first day of the project, then sealed in an archive",
      "B": "Continuously throughout all project phases as new risks emerge, existing risks change, or risks materialize/vanish",
      "C": "Only when the project manager leaves the company",
      "D": "Never, because risk registers are optional decorative artifacts"
    },
    "correctAnswer": "B",
    "explanation": "The risk register is a living document maintained and reviewed continuously across the project lifecycle to reflect changing risk status.",
    "whyOthersAreWrong": [
      "Sealing the register leaves the project blind to emerging threats.",
      "Turnover is not the update trigger.",
      "The risk register is a mandatory core control tool."
    ],
    "examTrap": "The Risk Register must be reviewed and updated continuously across all project phases.",
    "source": {
      "type": "course-book",
      "unit": 3,
      "section": "3.4",
      "topic": "Risk Register Maintenance",
      "page": 79
    },
    "sourceUnit": 3,
    "sourceSection": "3.4",
    "sourceTopic": "Risk Register Maintenance",
    "sourcePage": 79
  }
];
