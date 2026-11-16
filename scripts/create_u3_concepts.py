import json, os

u3_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-3"
os.makedirs(u3_dir, exist_ok=True)

summary_sections = [
    {
        "title": "3.1 Challenges of Cost Estimation in IT Projects",
        "summaryParagraph": "Cost estimation predicts the monetary resources needed for future project activities. It must encompass acquisition costs as well as recurring/running costs such as maintenance, support, operations, and overhead. A basic bottom-up approach sums task costs to calculate work-package costs, which then aggregate to form the project cost without contingency. Estimation is uniquely challenging in IT because future prices, scope, technology, staffing, market availability, and project duration fluctuate. Estimate quality is evaluated against nine criteria (A-C-C-P-R-D-U-V-V). Cost-benefit metrics (ROI, Payback Period, NPV, Profitability Index) determine whether a project proceeds. A structured reserve hierarchy separates task contingency, work-package contingency (cost baseline), and management reserve (total project budget).",
        "keyPoints": [
            "Cost estimation predicts future monetary resources, including acquisition, maintenance, support, and operational costs.",
            "Bottom-up costing: Task estimates -> Work package costs -> Project cost without contingency.",
            "Nine estimate quality attributes (A-C-C-P-R-D-U-V-V): Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.",
            "Plan-driven vs Agile: Plan-driven fixes scope (varying cost/schedule; uses three-point, expert, FPA); Agile fixes cost and schedule (varying scope; uses planning poker and iterative estimation).",
            "Cost-benefit metrics: ROI = Net Gain / Project Cost; Payback Period = time to break even; NPV = FV / (1 + interest)^t; Profitability Index = NPV / Project Cost.",
            "Reserve hierarchy: Task Estimate -> Task Contingency -> Work-Package Contingency -> Cost Baseline -> Management Reserve -> Project Budget.",
            "Contingency Reserve covers identified risks (known-unknowns); Management Reserve covers unforeseen work within project scope (unknown-unknowns)."
        ],
        "examInsight": "Never confuse contingency reserves with management reserves. Remember: Cost Baseline = Work Packages + Contingency Reserves; Project Budget = Cost Baseline + Management Reserve."
    },
    {
        "title": "3.2 Estimation Techniques",
        "summaryParagraph": "Four major estimation techniques are established for IT projects: Three-Point Estimation, Expert Estimation with Double-Blind Review, Function Point Analysis (FPA), and Planning Poker. Three-point estimation captures uncertainty as a probability range (optimistic, most probable, pessimistic) reflecting asymmetric downside risk skew. Expert review leverages specialized experience, using double-blind mechanisms to eliminate demographic and seniority biases. FPA quantifies user-visible business functionality across five function types (Inputs, Outputs, Inquiries, Interfaces, Files) independent of implementation technology, adjusting unadjusted function points (UFP) via the Complexity Adjustment Factor (CAF = 0.01 * TDI + 0.65). Planning Poker achieves consensus-based estimation in agile teams, preventing external pressure from cutting corners.",
        "keyPoints": [
            "Three-Point Estimation: Optimistic (best case), Most Probable (likely), Pessimistic (worst case). Probability curve is skewed because downside losses typically exceed potential savings.",
            "Expert Estimation & Double-Blind Review: Internal/external specialists review estimates. Double-blind hides estimator identity from reviewer and vice versa, removing power, status, gender, and racial biases.",
            "Function Point Analysis (FPA): Measures user-visible business functionality independent of programming language or implementation technology.",
            "FPA categories: Transaction functions (Inputs, Outputs, Inquiries) and Data functions (Internal Logical Files, External Interfaces) — Memory: I-O-Q-I-F.",
            "FPA Complexity Weights: Input (2/4/6), Output (3/5/7), Inquiry (2/4/6), Interface (5/7/10), File (7/10/15).",
            "FPA Formulas: CAF = 0.01 * TDI + 0.65; FP = UFP * CAF. (Example: TDI = 34 -> CAF = 0.99; FP = UFP * 0.99).",
            "FPA Limitations: Subjective, time-consuming, requires conversion to effort/cost, weak for algorithm-heavy technical systems with minimal UI.",
            "Planning Poker: 7-step consensus process (break work, agree unit, independent estimate, simultaneous reveal, extremes explain, discuss, repeat to consensus)."
        ],
        "examInsight": "Memorize the exact FPA weight values and the CAF formula. Remember that FPA measures business functional size, which still requires conversion to effort/cost."
    },
    {
        "title": "3.3 Cost Controlling Using Earned Value Analysis",
        "summaryParagraph": "Earned Value Management (EVM) integrates scope, schedule, and cost baselines into the Performance Measurement Baseline (PMB) to evaluate project performance. It relies on three primary base metrics: Planned Value (PV - authorized budget for scheduled work), Earned Value (EV - budgeted value of work actually performed), and Actual Cost (AC - real money spent). Variances (SV = EV - PV, CV = EV - AC) and indices (CPI = EV / AC, SPI = EV / PV) provide objective performance status. In IT projects, EVM requires reliable baselines and stability; fluid requirements make it challenging. When physical progress is hard to measure, the 25/75 rule is applied. Agile projects complement EVM with burn-down charts tracking remaining effort.",
        "keyPoints": [
            "Three Base Values: PV (What should have been done), EV (Budgeted value of work actually completed), AC (Money actually spent).",
            "Value First Rule: EV always appears first in variance and index formulas: SV = EV - PV, CV = EV - AC, CPI = EV / AC, SPI = EV / PV.",
            "Variance Interpretation: Positive SV = ahead of schedule, Negative SV = behind schedule. Positive CV = under budget, Negative CV = over budget.",
            "Index Interpretation: CPI < 1 = cost overrun (unfavorable), CPI > 1 = cost underrun (favorable). SPI < 1 = behind plan, SPI > 1 = ahead of plan.",
            "Textbook Worked Example: BAC = $9,000 (18,000 lines * $0.50). Month 1: PV = $3,000, EV = $2,500 (5,000 lines * $0.50), AC = $3,500. SV = -$500, CV = -$1,000, CPI = 0.71, SPI = 0.83 (behind schedule and over budget).",
            "EVM Assumptions & IT Limitations: Requires sound initial estimates and stable baselines; fluid requirements and overlapping agile iterations make EVM difficult in large IT projects.",
            "25/75 Rule: Credits 25% EV upon task initiation/preparation and remaining 75% upon completion.",
            "EVM vs Burn-Down: EVM measures value earned vs budget spent; Burn-Down plots remaining effort descending from 100% to 0%."
        ],
        "examInsight": "Remember: EV is the numerator in both CPI and SPI. CV compares EV with AC (cost); SV compares EV with PV (schedule)."
    },
    {
        "title": "3.4 Risk Management",
        "summaryParagraph": "Risk is inherent in IT projects, originating from technology, requirements, feasibility, communication, staffing, and contracts. Risk management must be continuous across the entire lifecycle, not a one-time planning exercise. A strategic sequence of prevention -> detection -> response ensures proactive control. The continuous cycle comprises four core functions (I-A-M-M: Identify, Assess/Analyse, Mitigate/Respond, Monitor/Report). Four risk response strategies (Avoid, Mitigate, Transfer, Accept) treat identified risks. Organizational risk management capability is measured across five maturity levels (A-A-O-M-A: Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive). Identification uses bottom-up and top-down perspectives; analysis combines qualitative evaluation with quantitative numerical methods, tracked in a living Risk Register with designated risk owners.",
        "keyPoints": [
            "Core Principle: Risk management is continuous throughout the lifecycle, with strategic emphasis: Prevention -> Detection -> Response.",
            "Four Risk Functions (I-A-M-M): 1. Identify & describe; 2. Assess & analyse; 3. Mitigate & respond; 4. Monitor & report.",
            "Four Risk Response Options: Avoid (eliminate cause), Mitigate (reduce likelihood/impact), Transfer (shift impact to third party via contract/insurance), Accept (acknowledge and retain residual risk).",
            "Exam Trap: Do not confuse the four risk management functions (I-A-M-M) with the four treatment options (Avoid, Mitigate, Transfer, Accept).",
            "Five Risk Maturity Levels (A-A-O-M-A): Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.",
            "Risk Identification: Bottom-Up (tasks -> work packages -> project impact) vs Top-Down (project-level symptoms -> cascade down to critical activities).",
            "Qualitative Analysis: Expert judgment, checklists, assumption analysis, cause-and-effect diagrams, influence diagrams, SWOT, likelihood-impact matrix.",
            "Quantitative Analysis: Numerical estimation of potential effects (e.g. EVM-style cost projections).",
            "Risk Register: Living document recording Risk Description, Likelihood, Severity/Impact, Risk Owner, and Mitigation Actions."
        ],
        "examInsight": "Level 1 is Ad hoc; Level 5 is Adaptive. Risk Owner is the designated entity responsible for monitoring and executing responses for that specific risk."
    }
]

concepts = [
    {
        "id": "itpm-u3-conc-001",
        "term": "Cost Estimation Basics & Bottom-Up Costing",
        "simpleExplanation": "Predicting the total monetary resources required to execute future project activities.",
        "examDefinition": "The process of developing an approximation of monetary resources needed to complete project activities, including acquisition, maintenance, support, operations, and overhead.",
        "whyItMatters": "Under-estimating causes project insolvency; over-estimating causes rejection of viable business cases.",
        "howItWorks": "Sums task costs into work package costs, which roll up to form 'project cost without contingency'.",
        "examKeywords": ["Monetary resources", "Bottom-up costing", "Acquisition cost", "Operational cost", "Project cost without contingency"],
        "commonTrap": "Thinking cost estimation only covers developer programming hours while forgetting maintenance, support, and overhead.",
        "category": "Cost Estimation"
    },
    {
        "id": "itpm-u3-conc-002",
        "term": "Estimate Quality Characteristics (A-C-C-P-R-D-U-V-V)",
        "simpleExplanation": "The nine formal criteria used to assess whether a cost estimate is reliable and defensible.",
        "examDefinition": "Nine academic quality attributes: Accuracy (truthfulness to reality), Confidence level (statistical certainty), Credibility (believability), Precision (level of detail/granularity), Reliability (consistency across estimators), Documentation (audit trail of assumptions), Uniformity (standardized units and guidelines), Validity (sound methodology), Verification (independent review).",
        "whyItMatters": "Protects project budgets from optimistic guesswork and provides defensible baselines for governance approval.",
        "howItWorks": "Estimators apply the A-C-C-P-R-D-U-V-V checklist before presenting cost proposals to sponsors.",
        "examKeywords": ["Accuracy", "Confidence level", "Credibility", "Precision", "Reliability", "Documentation", "Uniformity", "Validity", "Verification"],
        "commonTrap": "Confusing Accuracy (closeness to actual cost) with Precision (number of decimal places or level of detail).",
        "category": "Cost Estimation"
    },
    {
        "id": "itpm-u3-conc-003",
        "term": "Budget Reserve Hierarchy",
        "simpleExplanation": "The step-by-step structure separating task buffers, contingency reserves, and management reserves.",
        "examDefinition": "A tiered financial buffer architecture: Task Estimates -> Task Contingency -> Work-Package Contingency -> Cost Baseline -> Management Reserve -> Total Project Budget.",
        "whyItMatters": "Ensures that risk reserves are allocated transparently without double-counting the same risk at multiple levels.",
        "howItWorks": "Contingency reserves address identified risks ('known-unknowns'); management reserves address unforeseen work within project scope ('unknown-unknowns').",
        "examKeywords": ["Task Contingency", "Work-Package Contingency", "Cost Baseline", "Management Reserve", "Project Budget", "Known-unknowns"],
        "commonTrap": "Including management reserve in the Cost Baseline. Cost Baseline excludes Management Reserve; Project Budget includes it.",
        "category": "Cost Estimation"
    },
    {
        "id": "itpm-u3-conc-004",
        "term": "Cost-Benefit Financial Metrics (ROI, Payback, NPV, PI)",
        "simpleExplanation": "Four financial metrics used to justify whether an IT investment should be undertaken.",
        "examDefinition": "Four canonical metrics: ROI = Net Gain / Project Cost (positive=gain, negative=loss); Payback Period = time required to break even; NPV = Future Value / (1 + interest)^t (discounts future cash flow); Profitability Index = NPV / Project Cost (greater than 1 means NPV exceeds cost).",
        "whyItMatters": "Sponsors use these metrics to select among competing IT capital investments.",
        "howItWorks": "Calculated during business case initiation to establish financial viability.",
        "examKeywords": ["ROI", "Net Gain / Project Cost", "Payback Period", "Break even", "NPV", "Profitability Index > 1"],
        "commonTrap": "Forgetting that in the course formula, NPV is discounted: FV / (1 + interest)^t.",
        "category": "Financial Metrics"
    },
    {
        "id": "itpm-u3-conc-005",
        "term": "Three-Point Estimation",
        "simpleExplanation": "Estimating cost or duration as a probability range using optimistic, most likely, and pessimistic values.",
        "examDefinition": "An estimating technique using three values: Optimistic (best case), Most Probable (likely case), and Pessimistic (worst case), reflecting an asymmetric cost probability distribution.",
        "whyItMatters": "Single-point estimates hide uncertainty; three-point estimation models the realistic reality that downside risks exceed upside savings.",
        "howItWorks": "Constructs a triangular approximation capturing 100% of probability between the optimistic minimum and pessimistic maximum.",
        "examKeywords": ["Optimistic", "Most probable", "Pessimistic", "Triangular approximation", "Asymmetric skew"],
        "commonTrap": "Assuming the cost distribution is a symmetric normal bell curve; downside cost growth can greatly exceed possible savings.",
        "category": "Estimation Techniques"
    },
    {
        "id": "itpm-u3-conc-006",
        "term": "Expert Estimation & Double-Blind Review",
        "simpleExplanation": "Using experienced specialists to review estimates while hiding the identities of both sides to eliminate bias.",
        "examDefinition": "An estimation process where internal or external specialists review cost plans under a double-blind protocol, hiding estimator identity from reviewer and reviewer from estimator.",
        "whyItMatters": "Eliminates cognitive, power, gender, seniority, and racial prejudices during cost review.",
        "howItWorks": "Submissions and reviews are anonymized through an independent coordinator.",
        "examKeywords": ["Expert judgment", "Double-blind review", "Bias reduction", "Anonymity", "Reviewer independence"],
        "commonTrap": "Ignoring the course-stated limitation: in a very small specialist domain, identities can still be inferred.",
        "category": "Estimation Techniques"
    },
    {
        "id": "itpm-u3-conc-007",
        "term": "Function Point Analysis (FPA)",
        "simpleExplanation": "A standardized method to measure software size based on user-visible functionality, independent of coding language.",
        "examDefinition": "A software sizing technique that measures business functionality delivered to users across five function types (Inputs, Outputs, Inquiries, Interfaces, Files), adjusted by a Complexity Adjustment Factor (CAF = 0.01 * TDI + 0.65).",
        "whyItMatters": "Allows early sizing and cost comparison across different programming languages and contract vendors.",
        "howItWorks": "Sums weighted elementary functions into Unadjusted Function Points (UFP), calculates TDI from 14 characteristics, derives CAF, and computes FP = UFP * CAF.",
        "examKeywords": ["FPA", "Technology-independent", "UFP", "TDI", "CAF = 0.01*TDI + 0.65", "FP = UFP*CAF", "I-O-Q-I-F"],
        "commonTrap": "Thinking FPA automatically gives cost; FPA only measures functional size and must be converted to effort and cost via team productivity.",
        "category": "Estimation Techniques"
    },
    {
        "id": "itpm-u3-conc-008",
        "term": "Planning Poker",
        "simpleExplanation": "An agile consensus estimation game where team members reveal card estimates simultaneously to avoid anchoring.",
        "examDefinition": "An agile collaborative estimation technique where team members independently estimate user stories using Fibonacci-like cards, reveal them simultaneously, explain extreme outliers, and discuss until consensus is reached.",
        "whyItMatters": "Prevents management or loud team members from coercing artificially low estimates, fostering shared ownership.",
        "howItWorks": "7-step sequence: Break work -> Agree unit -> Estimate independently -> Reveal together -> Highest/lowest explain -> Discuss -> Repeat to consensus.",
        "examKeywords": ["Planning poker", "Agile estimation", "Consensus", "Independent estimates", "Simultaneous reveal", "Fibonacci"],
        "commonTrap": "Averaging the card numbers instead of discussing outliers to achieve genuine team consensus.",
        "category": "Estimation Techniques"
    },
    {
        "id": "itpm-u3-conc-009",
        "term": "Earned Value Management (EVM) Core Metrics",
        "simpleExplanation": "Tracking project progress by comparing planned budget, earned work value, and actual cash spent.",
        "examDefinition": "A project controlling method combining scope, schedule, and cost performance against the Performance Measurement Baseline (PMB) using Planned Value (PV), Earned Value (EV), and Actual Cost (AC).",
        "whyItMatters": "Prevents the illusion of progress by measuring what was actually earned for the money spent.",
        "howItWorks": "PV = authorized budget for scheduled work; EV = budgeted value of work completed; AC = actual cost incurred.",
        "examKeywords": ["Planned Value (PV)", "Earned Value (EV)", "Actual Cost (AC)", "PMB", "BAC"],
        "commonTrap": "Confusing EV with AC. EV is budgeted value earned; AC is real cash spent.",
        "category": "Earned Value Management"
    },
    {
        "id": "itpm-u3-conc-010",
        "term": "EVM Variances and Performance Indices",
        "simpleExplanation": "Formulas that calculate whether a project is ahead/behind schedule and under/over budget.",
        "examDefinition": "Mathematical performance metrics: Schedule Variance (SV = EV - PV), Cost Variance (CV = EV - AC), Cost Performance Index (CPI = EV / AC), Schedule Performance Index (SPI = EV / PV).",
        "whyItMatters": "Provides objective, early warning indicators of project slippage and budget overruns.",
        "howItWorks": "Value First rule: EV is always first in variances and the numerator in indices. Positive variance and indices > 1.0 are favorable.",
        "examKeywords": ["SV = EV - PV", "CV = EV - AC", "CPI = EV / AC", "SPI = EV / PV", "Value First", "Ahead/Behind", "Under/Over budget"],
        "commonTrap": "Reversing the formulas (e.g. PV - EV or AC - EV). EV always comes first!",
        "category": "Earned Value Management"
    },
    {
        "id": "itpm-u3-conc-011",
        "term": "Continuous Risk Management & 4 Functions (I-A-M-M)",
        "simpleExplanation": "Risk management must be executed continuously across the lifecycle through four sequential functions.",
        "examDefinition": "A continuous lifecycle process comprising four core functions: 1. Risk Identification & description; 2. Risk Assessment & analysis; 3. Risk Mitigation & response; 4. Risk Monitoring & reporting (I-A-M-M).",
        "whyItMatters": "One-time risk planning leaves projects vulnerable to emerging uncertainties and changing external conditions.",
        "howItWorks": "Repeatedly identifies technical, cost, and schedule risks, reduces residual risk to acceptable levels, and tracks trigger symptoms.",
        "examKeywords": ["Continuous lifecycle", "Identify", "Assess", "Mitigate", "Monitor", "I-A-M-M"],
        "commonTrap": "Confusing the 4 management functions (I-A-M-M) with the 4 risk response strategies (Avoid, Mitigate, Transfer, Accept).",
        "category": "Risk Management"
    },
    {
        "id": "itpm-u3-conc-012",
        "term": "Five-Level Risk Management Maturity Model",
        "simpleExplanation": "A 5-stage organizational ladder from disorganized chaos to continuous adaptive improvement in risk.",
        "examDefinition": "A capability maturity framework: Level 1 Ad hoc (informal/disorganized), Level 2 Abbreviated (inconsistent process), Level 3 Organized (standardized/documented/integrated), Level 4 Managed (measured, controlled, decision-supporting), Level 5 Adaptive (continuous improvement, innovation, feedback).",
        "whyItMatters": "Higher maturity directly correlates with predictable cost and schedule delivery in IT projects.",
        "howItWorks": "Organizations progress from Level 1 to Level 5 (A-A-O-M-A) by institutionalizing documented procedures and metrics.",
        "examKeywords": ["Ad hoc (Level 1)", "Abbreviated (Level 2)", "Organized (Level 3)", "Managed (Level 4)", "Adaptive (Level 5)", "A-A-O-M-A"],
        "commonTrap": "Thinking Level 1 is 'Organized' or Level 5 is 'Optimized'. The exact course terms are Level 1: Ad hoc, Level 5: Adaptive.",
        "category": "Risk Management"
    }
]

with open(os.path.join(u3_dir, "concepts.ts"), "w") as f:
    f.write('import { KeyConcept, UnitSummarySection } from "../../../../types";\n\n')
    f.write('export const unit3SummarySections: UnitSummarySection[] = ' + json.dumps(summary_sections, indent=2) + ';\n\n')
    f.write('export const unit3Concepts: KeyConcept[] = ' + json.dumps(concepts, indent=2) + ';\n')

print("Generated Unit 3 concepts.ts")
