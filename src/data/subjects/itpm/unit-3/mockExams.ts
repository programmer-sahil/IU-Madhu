import { MockExam } from "../../../../types";

export const unit3MockExams: MockExam[] = [
  {
    "id": "itpm-u3-mock-01",
    "title": "Unit 3 Mock Exam 1",
    "subtitle": "Cost Estimation, FPA, Earned Value Management, and Risk Lifecycle",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u3-s31-mcq-001",
      "itpm-u3-s31-mcq-002",
      "itpm-u3-s31-mcq-003",
      "itpm-u3-s31-mcq-004",
      "itpm-u3-s31-mcq-005",
      "itpm-u3-s31-mcq-006",
      "itpm-u3-s31-mcq-007",
      "itpm-u3-s31-mcq-008",
      "itpm-u3-s31-mcq-009",
      "itpm-u3-s31-mcq-010",
      "itpm-u3-s31-mcq-011",
      "itpm-u3-s31-mcq-012",
      "itpm-u3-s31-mcq-013",
      "itpm-u3-s31-mcq-014",
      "itpm-u3-s31-mcq-015",
      "itpm-u3-s32-mcq-016",
      "itpm-u3-s32-mcq-017",
      "itpm-u3-s32-mcq-018",
      "itpm-u3-s32-mcq-019",
      "itpm-u3-s32-mcq-020",
      "itpm-u3-s32-mcq-021",
      "itpm-u3-s32-mcq-022",
      "itpm-u3-s32-mcq-023",
      "itpm-u3-s32-mcq-024",
      "itpm-u3-s32-mcq-025",
      "itpm-u3-s32-mcq-026",
      "itpm-u3-s32-mcq-027",
      "itpm-u3-s32-mcq-028",
      "itpm-u3-s32-mcq-029",
      "itpm-u3-s32-mcq-030",
      "itpm-u3-s33-mcq-031",
      "itpm-u3-s33-mcq-032",
      "itpm-u3-s33-mcq-033",
      "itpm-u3-s33-mcq-034",
      "itpm-u3-s33-mcq-035",
      "itpm-u3-s33-mcq-036",
      "itpm-u3-s33-mcq-037",
      "itpm-u3-s33-mcq-038",
      "itpm-u3-s33-mcq-039",
      "itpm-u3-s33-mcq-040"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u3-mock1-desc-01",
        "unit": 3,
        "question": "Explain six factors that make cost estimation difficult in IT projects. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Scope fluidity",
          "Technology obsolescence",
          "Resource price fluctuation",
          "Planning horizon",
          "Size/complexity",
          "Staffing turnover"
        ],
        "modelAnswer": "Cost estimation in IT is complex due to: 1. Uncertain scope; 2. Technology advancements; 3. Price changes; 4. Planning horizon; 5. Size and interdependencies; 6. Staffing and skill availability.",
        "rubricItems": [
          {
            "point": "Identified and explained 6 IT cost estimation factors",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Focus on IT specific factors like scope fluidity and technology shifts rather than generic corporate factors."
      },
      {
        "id": "itpm-u3-mock1-desc-02",
        "unit": 3,
        "question": "Explain the structure and purpose of contingency reserves and management reserves. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Contingency reserves (known-unknowns, in baseline)",
          "Management reserves (unknown-unknowns, outside baseline)",
          "Budget hierarchy comparison"
        ],
        "modelAnswer": "Contingency reserves address identified risks ('known-unknowns') and are included in the Cost Baseline. Management reserves address unforeseen work within scope ('unknown-unknowns') and are held at the project level, excluded from the Cost Baseline.",
        "rubricItems": [
          {
            "point": "Contrasted known-unknowns vs unknown-unknowns and baseline inclusion",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Clearly state that management reserve is EXCLUDED from the Cost Baseline used for EVM."
      },
      {
        "id": "itpm-u3-mock1-desc-03",
        "unit": 3,
        "question": "Explain Function Point Analysis and state its main advantages and limitations. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Definition of FPA & 5 types",
          "Advantages (technology-independent, contracts)",
          "Limitations (subjective, conversion to effort)"
        ],
        "modelAnswer": "FPA measures software size through 5 function types (Inputs, Outputs, Inquiries, Interfaces, Files). Advantages: technology-independent, early estimation, contract negotiations. Limitations: subjective complexity ratings, requires conversion to effort and cost, weak for algorithmic systems.",
        "rubricItems": [
          {
            "point": "Explained FPA concept, 5 types, advantages, and limitations",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Remember to note that FPA still requires conversion to effort/cost."
      },
      {
        "id": "itpm-u3-mock1-desc-04",
        "unit": 3,
        "question": "Define PV, EV and AC, and explain how SV and CV are calculated and interpreted. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Define PV, EV, AC",
          "State SV = EV - PV and CV = EV - AC",
          "Value First rule",
          "Sign interpretations"
        ],
        "modelAnswer": "PV = authorized budget scheduled; EV = budgeted value earned; AC = actual cash spent. SV = EV - PV (positive = ahead; negative = behind). CV = EV - AC (positive = under budget; negative = over budget). EV always leads in both formulas.",
        "rubricItems": [
          {
            "point": "Correct definitions, formulas, and sign interpretations",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Never reverse the formula terms; EV must come first."
      },
      {
        "id": "itpm-u3-mock1-desc-05",
        "unit": 3,
        "question": "Explain the four core functions of risk management and the four response options. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Four functions: Identify, Assess, Mitigate, Monitor (I-A-M-M)",
          "Four responses: Avoid, Mitigate, Transfer, Accept",
          "Process vs response distinction"
        ],
        "modelAnswer": "Risk cycle functions: Identify, Assess, Mitigate, Monitor (I-A-M-M). Risk response strategies: Avoid (eliminate cause), Mitigate (reduce likelihood/impact), Transfer (shift to 3rd party), Accept (retain with contingency reserve).",
        "rubricItems": [
          {
            "point": "Named all 4 functions and all 4 response strategies correctly",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Do not confuse the management process (I-A-M-M) with the response strategies."
      },
      {
        "id": "itpm-u3-mock1-desc-06",
        "unit": 3,
        "question": "A software project has Month 1 PV = $60,000, EV = $48,000, and AC = $72,000. It faces an integration risk (High Likelihood / High Impact) and supplier delay (Medium Likelihood / High Impact). Calculate SV, CV, CPI, SPI; interpret status; propose risk responses; and explain Risk Register monitoring. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "EVM calculations (SV, CV, CPI, SPI)",
          "Status interpretation",
          "Risk responses for both risks",
          "Risk Register logging & continuous monitoring"
        ],
        "modelAnswer": "1. Calculations:\n- SV = EV - PV = $48k - $60k = -$12,000\n- CV = EV - AC = $48k - $72k = -$24,000\n- CPI = EV / AC = $48k / $72k = 0.67\n- SPI = EV / PV = $48k / $60k = 0.80\n2. Status: Project is behind schedule (SPI=0.80 < 1) and over budget (CPI=0.67 < 1).\n3. Risk Responses: Integration risk (High/High) requires Mitigation/Avoidance via technical proof-of-concept spike and standardized middleware. Supplier delay (Med/High) requires Transfer via contractual SLA penalties and buffer inventory.\n4. Risk Register: Enter description, likelihood, severity, assigned owner, and mitigation actions. Update continuously across lifecycle.",
        "rubricItems": [
          {
            "point": "Accurate EVM calculations with formulas",
            "marksAllotted": 6
          },
          {
            "point": "Clear operational status interpretation",
            "marksAllotted": 4
          },
          {
            "point": "Sound risk response strategies for both scenarios",
            "marksAllotted": 6
          },
          {
            "point": "Risk Register structure, ownership, and monitoring procedure",
            "marksAllotted": 4
          }
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
    "mcqIds": [
      "itpm-u3-s31-mcq-011",
      "itpm-u3-s31-mcq-012",
      "itpm-u3-s31-mcq-013",
      "itpm-u3-s31-mcq-014",
      "itpm-u3-s31-mcq-015",
      "itpm-u3-s31-mcq-016",
      "itpm-u3-s31-mcq-017",
      "itpm-u3-s31-mcq-018",
      "itpm-u3-s31-mcq-019",
      "itpm-u3-s31-mcq-020",
      "itpm-u3-s32-mcq-021",
      "itpm-u3-s32-mcq-022",
      "itpm-u3-s32-mcq-023",
      "itpm-u3-s32-mcq-024",
      "itpm-u3-s32-mcq-025",
      "itpm-u3-s32-mcq-026",
      "itpm-u3-s32-mcq-027",
      "itpm-u3-s32-mcq-028",
      "itpm-u3-s32-mcq-029",
      "itpm-u3-s32-mcq-030",
      "itpm-u3-s32-mcq-031",
      "itpm-u3-s32-mcq-032",
      "itpm-u3-s32-mcq-033",
      "itpm-u3-s32-mcq-034",
      "itpm-u3-s32-mcq-035",
      "itpm-u3-s33-mcq-036",
      "itpm-u3-s33-mcq-037",
      "itpm-u3-s33-mcq-038",
      "itpm-u3-s33-mcq-039",
      "itpm-u3-s33-mcq-040",
      "itpm-u3-s33-mcq-041",
      "itpm-u3-s33-mcq-042",
      "itpm-u3-s33-mcq-043",
      "itpm-u3-s33-mcq-044",
      "itpm-u3-s33-mcq-045",
      "itpm-u3-s34-mcq-046",
      "itpm-u3-s34-mcq-047",
      "itpm-u3-s34-mcq-048",
      "itpm-u3-s34-mcq-049",
      "itpm-u3-s34-mcq-050"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u3-mock2-desc-01",
        "unit": 3,
        "question": "Compare plan-driven and agile cost estimation and identify suitable techniques for each. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Plan-driven constraints and techniques",
          "Agile constraints and techniques",
          "Direct contrast"
        ],
        "modelAnswer": "Plan-driven fixes scope upfront while cost/schedule vary; uses Three-point estimation, expert review, and FPA. Agile fixes cost and schedule (timeboxed sprints) while scope varies iteratively; uses Planning Poker and velocity burn-down.",
        "rubricItems": [
          {
            "point": "Contrasted constraints and assigned appropriate techniques",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Contrast which constraint is fixed vs variable in each approach."
      },
      {
        "id": "itpm-u3-mock2-desc-02",
        "unit": 3,
        "question": "Explain three-point estimation, expert estimation and the purpose of double-blind review. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Three-point parameters & distribution",
          "Expert sources",
          "Double-blind review purpose and limitation"
        ],
        "modelAnswer": "Three-point estimation uses optimistic, likely, and pessimistic values to model skewed cost distributions. Expert estimation uses domain specialists. Double-blind review hides estimator and reviewer identities to eliminate power, gender, race, and seniority bias.",
        "rubricItems": [
          {
            "point": "Explained three-point parameters, expert estimation, and double-blind review",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Mention the downside skew and the small-field limitation of double-blind review."
      },
      {
        "id": "itpm-u3-mock2-desc-03",
        "unit": 3,
        "question": "Explain the planning-poker process step by step and why it is useful. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "7-step sequence",
          "Anchoring prevention",
          "Consensus benefits"
        ],
        "modelAnswer": "7 steps: Break work, agree unit, estimate independently, reveal simultaneously, highest/lowest explain, discuss, repeat to consensus. Useful because it prevents anchoring, shields against executive coercion, and builds team consensus.",
        "rubricItems": [
          {
            "point": "Detailed 7 steps and explained anti-anchoring benefits",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "State clearly that planning poker uses consensus, not averaging."
      },
      {
        "id": "itpm-u3-mock2-desc-04",
        "unit": 3,
        "question": "Discuss the advantages, assumptions and limitations of EVM in IT projects. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Advantages of EVM",
          "Core assumptions",
          "IT software limitations"
        ],
        "modelAnswer": "Advantages: visualizes cost and schedule progress together against baseline. Assumptions: sound initial estimates, stable baseline, reliable tracking. Limitations in IT: fluid scope makes EV hard to define, agile iterations blur baselines, and physical completion is hard to measure.",
        "rubricItems": [
          {
            "point": "Discussed advantages, assumptions, and IT-specific limitations",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Address why large IT projects struggle with EVM definition."
      },
      {
        "id": "itpm-u3-mock2-desc-05",
        "unit": 3,
        "question": "Explain the five levels of IT risk-management maturity and how maturity improves project control. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Name 5 levels (A-A-O-M-A)",
          "Define each level",
          "Impact on cost/schedule control"
        ],
        "modelAnswer": "Level 1: Ad hoc (informal/disorganized); Level 2: Abbreviated (some process, inconsistent); Level 3: Organized (standardized/documented); Level 4: Managed (measured and controlled); Level 5: Adaptive (continuous improvement). Higher maturity reduces deviations and yields predictable delivery.",
        "rubricItems": [
          {
            "point": "Named all 5 levels correctly and linked to project control",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Use exact Unit 3 terms: Ad hoc, Abbreviated, Organized, Managed, Adaptive."
      },
      {
        "id": "itpm-u3-mock2-desc-06",
        "unit": 3,
        "question": "An organization is planning a new commercial information system. Requirements are evolving, management is pressuring for low estimates, and past projects had overruns. Design an estimation-and-control approach using Unit 3 techniques. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Estimate quality & reserves",
          "Technique choice (Planning poker / FPA)",
          "EVM or burn-down control",
          "Continuous risk management & register"
        ],
        "modelAnswer": "1. Estimate Quality & Reserves: Apply A-C-C-P-R-D-U-V-V. Establish cost baseline with contingency reserves for identified risks and management reserve for scope uncertainty. Resist artificial cuts.\n2. Estimation Techniques: Use Planning Poker for agile user stories to foster developer consensus and prevent executive pressure. Apply FPA on high-level specs for objective contractual sizing.\n3. Controlling: Use sprint Burn-Down charts for daily effort tracking and EVM at major milestone gates to verify value earned vs budget spent (using 25/75 rule for intellectual work).\n4. Risk Management: Establish continuous I-A-M-M cycle. Create Risk Register with designated owners, prioritize risks via Likelihood-Impact matrix, apply M-A-T-A responses, and raise organizational maturity toward Level 4/5.",
        "rubricItems": [
          {
            "point": "Applied estimate quality attributes and reserve structure",
            "marksAllotted": 5
          },
          {
            "point": "Selected and justified Planning Poker and/or FPA",
            "marksAllotted": 5
          },
          {
            "point": "Designed controlling approach using EVM and/or Burn-down",
            "marksAllotted": 5
          },
          {
            "point": "Constructed continuous risk management cycle with Risk Register",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Structure the answer systematically using the Unit 3 framework headings."
      }
    ]
  }
];
