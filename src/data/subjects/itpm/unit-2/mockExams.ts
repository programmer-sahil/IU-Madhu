import { MockExam } from "../../../../types";

export const unit2MockExams: MockExam[] = [
  {
    "id": "itpm-u2-mock-01",
    "title": "Unit 2 Comprehensive Exam 1",
    "subtitle": "WBS Decomposition, Network Logic, CPM, Float & Definition of Done",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u2-s1-mcq-001",
      "itpm-u2-s1-mcq-002",
      "itpm-u2-s1-mcq-003",
      "itpm-u2-s1-mcq-004",
      "itpm-u2-s1-mcq-005",
      "itpm-u2-s1-mcq-006",
      "itpm-u2-s1-mcq-007",
      "itpm-u2-s1-mcq-008",
      "itpm-u2-s1-mcq-009",
      "itpm-u2-s1-mcq-010",
      "itpm-u2-s1-mcq-011",
      "itpm-u2-s1-mcq-012",
      "itpm-u2-s1-mcq-013",
      "itpm-u2-s1-mcq-014",
      "itpm-u2-s1-mcq-015",
      "itpm-u2-s1-mcq-016",
      "itpm-u2-s1-mcq-017",
      "itpm-u2-s1-mcq-018",
      "itpm-u2-s1-mcq-019",
      "itpm-u2-s1-mcq-020",
      "itpm-u2-s1-mcq-021",
      "itpm-u2-s1-mcq-022",
      "itpm-u2-s2-mcq-001",
      "itpm-u2-s2-mcq-002",
      "itpm-u2-s2-mcq-003",
      "itpm-u2-s2-mcq-004",
      "itpm-u2-s2-mcq-005",
      "itpm-u2-s2-mcq-006",
      "itpm-u2-s2-mcq-007",
      "itpm-u2-s2-mcq-008",
      "itpm-u2-s2-mcq-009",
      "itpm-u2-s2-mcq-010",
      "itpm-u2-s2-mcq-011",
      "itpm-u2-s2-mcq-012",
      "itpm-u2-s2-mcq-013",
      "itpm-u2-s2-mcq-014",
      "itpm-u2-s2-mcq-015",
      "itpm-u2-s2-mcq-016",
      "itpm-u2-s2-mcq-017",
      "itpm-u2-s2-mcq-018"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u2-m1-desc-01",
        "unit": 2,
        "question": "Explain the 100% Rule in Work Breakdown Structure (WBS) construction and describe three approaches to WBS decomposition. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "100% Rule definition and mathematical significance",
          "Approach 1: Deliverable / Product-oriented",
          "Approach 2: Phase / Lifecycle-oriented",
          "Approach 3: Organizational / Departmental-oriented"
        ],
        "modelAnswer": "The 100% Rule states that the WBS encompasses 100% of the work defined by project scope and captures all deliverables\u2014internal, external, and interim. The sum of work at child levels must strictly equal 100% of the parent level with zero omissions and zero extraneous scope. Work not in the WBS cannot be executed or budgeted.\nThree decomposition approaches:\n1. Product-oriented: Decomposes scope by physical software subsystems and modules (e.g., Database, UI, Security API).\n2. Phase-oriented: Decomposes by sequential lifecycle stages (e.g., Inception, Design, Build, Test, Rollout).\n3. Organizational-oriented: Decomposes by departmental responsibility or cross-functional team ownership.",
        "rubricItems": [
          {
            "point": "Stated 100% Rule accurately including parent-child equivalence",
            "marksAllotted": 2
          },
          {
            "point": "Explained product, phase, and organizational decomposition models",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Emphasize that work omitted from the WBS cannot be budgeted, scheduled, or legally claimed as complete."
      },
      {
        "id": "itpm-u2-m1-desc-02",
        "unit": 2,
        "question": "Differentiate Total Float (TF) from Free Float (FF) and explain why activities on the Critical Path must have Total Float = 0. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Total Float (TF) definition and formula (LST - EST or LFT - EFT)",
          "Free Float (FF) definition and formula (min(EST successors) - EFT)",
          "Critical Path definition and zero-float mechanism"
        ],
        "modelAnswer": "Total Float (Total Slack) is the maximum amount of time an activity can be delayed from its Earliest Start Time without delaying the overall project delivery date (TF = LST - EST = LFT - EFT). Free Float is the duration an activity can be delayed without delaying the Earliest Start Time of any immediate successor activity (FF = min(EST successors) - EFT).\nThe Critical Path represents the longest sequence of dependent activities through the project network, determining the shortest possible duration to complete the project. Because any delay on this path directly postpones the project completion date, activities on the critical path have zero flexibility, meaning their Total Float is strictly zero.",
        "rubricItems": [
          {
            "point": "Defined Total Float with formula and project-level impact",
            "marksAllotted": 2
          },
          {
            "point": "Defined Free Float with formula and successor-level impact",
            "marksAllotted": 2
          },
          {
            "point": "Explained why critical path activities have zero float",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Use exact formulas: TF = LST - EST; FF = min(EST_successors) - EFT."
      },
      {
        "id": "itpm-u2-m1-desc-03",
        "unit": 2,
        "question": "Explain the Activity-on-Node (AON) layout used in PERT/CPM and state the mathematical rules for the Forward Pass and Backward Pass. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "AON node layout (Activity, Duration, EST, EFT, LST, LFT, Slack)",
          "Forward Pass rules: EFT = EST + Duration; Merge rule: max(EFT predecessors)",
          "Backward Pass rules: LST = LFT - Duration; Burst rule: min(LST successors)"
        ],
        "modelAnswer": "In the Activity-on-Node (AON) convention, nodes represent activities containing key scheduling parameters: Activity Name/ID, Estimated Duration, Earliest Start Time (EST), Earliest Finish Time (EFT), Latest Start Time (LST), Latest Finish Time (LFT), and Slack.\n1. Forward Pass (Calculates earliest possible dates from Project Day 0):\n- Single task: EFT = EST + Duration.\n- Merge Point (multiple incoming predecessors): An activity cannot begin until ALL predecessors finish, so EST = max(EFT of all incoming predecessors).\n2. Backward Pass (Calculates latest permissible dates from Project Finish Date):\n- Single task: LST = LFT - Duration.\n- Burst Point (multiple outgoing successors): An activity must finish in time to allow the most urgent successor to start, so LFT = min(LST of all outgoing successors).",
        "rubricItems": [
          {
            "point": "Detailed AON node parameters correctly",
            "marksAllotted": 2
          },
          {
            "point": "Stated forward pass formulas and merge rule (MAX)",
            "marksAllotted": 2
          },
          {
            "point": "Stated backward pass formulas and burst rule (MIN)",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Examiners check that you state the merge rule takes the MAXIMUM and the burst rule takes the MINIMUM."
      },
      {
        "id": "itpm-u2-m1-desc-04",
        "unit": 2,
        "question": "Compare the four Precedence Diagramming Method (PDM) dependency types and explain the operational role of Leads and Lags. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "FS (Finish-to-Start) - standard default",
          "SS (Start-to-Start), FF (Finish-to-Finish), SF (Start-to-Finish - rare)",
          "Leads (acceleration/overlap) vs Lags (mandatory delay/buffer)"
        ],
        "modelAnswer": "The Precedence Diagramming Method defines four logical relationships:\n1. Finish-to-Start (FS): Successor cannot start until predecessor finishes (most common default).\n2. Start-to-Start (SS): Successor cannot start until predecessor has started (parallel development).\n3. Finish-to-Finish (FF): Successor cannot finish until predecessor finishes (joint integration testing).\n4. Start-to-Finish (SF): Successor cannot finish until predecessor starts (rarest; used in system handover/shift changeover).\nA Lead represents an acceleration where a successor starts before its predecessor finishes (negative lag, overlapping work to compress schedule). A Lag represents a required waiting buffer between activities (e.g. 3-day data synchronization wait after server migration).",
        "rubricItems": [
          {
            "point": "Accurately described all 4 PDM dependencies (FS, SS, FF, SF)",
            "marksAllotted": 3
          },
          {
            "point": "Contrasted leads (compression overlap) with lags (mandatory delay buffer)",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Clarify that Start-to-Finish (SF) is the rarest dependency in IT projects."
      },
      {
        "id": "itpm-u2-m1-desc-05",
        "unit": 2,
        "question": "Define the Definition of Done (DoD) in IT project work packages and explain how a rigorous DoD prevents technical debt and false progress reporting. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Definition of Done (formal quality agreement)",
          "Typical criteria included in an IT DoD (code complete, peer reviewed, tested, documented, security scanned)",
          "Prevention of technical debt and false progress (90% done syndrome)"
        ],
        "modelAnswer": "The Definition of Done (DoD) is a formal, shared checklist of quality criteria that software deliverables and work packages must satisfy before they can be considered truly complete. A comprehensive IT DoD includes: code written and formatted, automated unit tests passing with required coverage, peer code review approved, static security vulnerability scans cleared, integration tests executed, and release documentation updated.\nA rigorous DoD prevents the notorious 90% done syndrome, where developers report tasks as nearly finished while unresolved defects, missing tests, and unmerged branches accumulate. By enforcing objective completion gates, the DoD ensures that incomplete work is never marked as done, halting the accumulation of hidden technical debt.",
        "rubricItems": [
          {
            "point": "Defined Definition of Done as an objective, shared quality contract",
            "marksAllotted": 2
          },
          {
            "point": "Listed concrete criteria (tests, code review, security, docs)",
            "marksAllotted": 2
          },
          {
            "point": "Explained prevention of technical debt and false progress reporting",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Emphasize that without an objective DoD, reported project progress is an illusion."
      },
      {
        "id": "itpm-u2-m1-desc-06",
        "unit": 2,
        "question": "Integrated Case Study: Core Banking Legacy Migration at EuroBank. EuroBank is migrating its central ledger from an on-premise mainframe to a modern distributed cloud platform across 8 critical work packages under an immutable regulatory deadline. Volatile business requirements and tight interdependencies threaten project delivery. Formulate an integrated Work Breakdown Structure (WBS), Activity-on-Node (AON) schedule network, Critical Path float management, and multi-tier Definition of Done strategy. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Deliverable-Oriented WBS & 100% Rule Decomposition (5 marks)",
          "AON Precedence Logic & Dependency Sizing (5 marks)",
          "Forward/Backward Pass, Float Calculation & Critical Path Defense (5 marks)",
          "Multi-Tier Definition of Done & Quality Gates (5 marks)"
        ],
        "modelAnswer": "1. Deliverable-Oriented WBS & 100% Rule: Decompose the migration into a 4-level deliverable-oriented WBS: Level 1: Core Banking Migration; Level 2: Data Extraction, Cloud Infrastructure, Business Logic Engines, Settlement API, Security & Audit; Level 3: Work packages sized according to the 8/80 hour rule. The 100% Rule is strictly enforced: every ledger account, historic transaction record, and regulatory compliance report is captured within child work packages; no unauthorized scope is permitted.\n\n2. AON Precedence Logic: Map work packages into an Activity-on-Node network:\n- WP1 (Schema Mapping) precedes WP2 (Data Extraction ETL) with FS dependency.\n- WP3 (Cloud Ledger Infrastructure) runs SS with WP2 with a 3-week lag to permit early test infrastructure provisioning.\n- WP4 (Ledger Logic Services) and WP5 (Settlement API) run in parallel, converging on WP6 (Integration & End-to-End Testing) via an incoming merge.\n- WP7 (User Acceptance & Regulatory Validation) and WP8 (Cutover) follow sequentially.\n\n3. Critical Path & Float Management: Execute Forward Pass (EFT = EST + Duration, taking MAX at merge points) and Backward Pass (LST = LFT - Duration, taking MIN at burst points). Isolate the Critical Path where Total Float = 0 (WP1 -> WP2 -> WP4 -> WP6 -> WP7 -> WP8). For non-critical activities (e.g. WP3 Cloud Infrastructure with TF = 14 days), monitor float consumption closely. If a non-critical activity delay exceeds its Free Float, immediate corrective intervention is mandated before it consumes Total Float and creates a second critical path.\n\n4. Multi-Tier Definition of Done: Establish a 3-tier DoD:\n- Developer Level: Clean compilation, 85% automated unit test coverage, zero SonarQube blocker/critical vulnerabilities, approved peer review.\n- Integration Level: Automated regression tests passing, ledger balancing verified with zero variance against mainframe parallel run, cryptographic audit logging enabled.\n- Release Level: Full external regulatory audit sign-off, emergency rollback procedure verified in staging within 30 minutes, and executive steering committee acceptance.",
        "rubricItems": [
          {
            "point": "Constructed deliverable-oriented WBS enforcing 100% Rule and 8/80 sizing",
            "marksAllotted": 5
          },
          {
            "point": "Established logical AON precedence network with realistic FS/SS dependencies and lags",
            "marksAllotted": 5
          },
          {
            "point": "Demonstrated forward/backward pass logic, float monitoring, and critical path defense",
            "marksAllotted": 5
          },
          {
            "point": "Designed comprehensive multi-tier Definition of Done guaranteeing banking auditability",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Demonstrate rigorous application of PERT node calculation rules (merge MAX, burst MIN, Slack = 0 on critical path)."
      }
    ]
  },
  {
    "id": "itpm-u2-mock-02",
    "title": "Unit 2 Comprehensive Exam 2",
    "subtitle": "Work Package Sizing, Prioritization Models, Gantt Milestones & Float Calculation",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u2-s2-mcq-019",
      "itpm-u2-s2-mcq-020",
      "itpm-u2-s2-mcq-021",
      "itpm-u2-s2-mcq-022",
      "itpm-u2-s2-mcq-023",
      "itpm-u2-s2-mcq-024",
      "itpm-u2-s3-mcq-001",
      "itpm-u2-s3-mcq-002",
      "itpm-u2-s3-mcq-003",
      "itpm-u2-s3-mcq-004",
      "itpm-u2-s3-mcq-005",
      "itpm-u2-s3-mcq-006",
      "itpm-u2-s3-mcq-007",
      "itpm-u2-s3-mcq-008",
      "itpm-u2-s3-mcq-009",
      "itpm-u2-s3-mcq-010",
      "itpm-u2-s3-mcq-011",
      "itpm-u2-s3-mcq-012",
      "itpm-u2-s3-mcq-013",
      "itpm-u2-s3-mcq-014",
      "itpm-u2-s3-mcq-015",
      "itpm-u2-s3-mcq-016",
      "itpm-u2-s3-mcq-017",
      "itpm-u2-s3-mcq-018",
      "itpm-u2-s3-mcq-019",
      "itpm-u2-s3-mcq-020",
      "itpm-u2-s3-mcq-021",
      "itpm-u2-s3-mcq-022",
      "itpm-u2-s3-mcq-023",
      "itpm-u2-s3-mcq-024",
      "itpm-u2-s3-mcq-025",
      "itpm-u2-s3-mcq-026",
      "itpm-u2-s3-mcq-027",
      "itpm-u2-s3-mcq-028",
      "itpm-u2-s3-mcq-029",
      "itpm-u2-s3-mcq-030",
      "itpm-u2-s3-mcq-031",
      "itpm-u2-s3-mcq-032",
      "itpm-u2-s4-mcq-001",
      "itpm-u2-s4-mcq-002"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u2-m2-desc-01",
        "unit": 2,
        "question": "Explain the operational guidelines for determining the lowest level of decomposition in a WBS (the Work Package level), including the 8/80 hour rule. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Definition of Work Package (lowest level of WBS)",
          "The 8/80 hour heuristic",
          "Single point of accountability",
          "Measurable milestone / completion criteria"
        ],
        "modelAnswer": "A Work Package is the lowest level of decomposition in a Work Breakdown Structure, representing a discrete unit of work that can be reliably estimated, scheduled, assigned, and controlled.\nKey Sizing & Decomposition Guidelines:\n1. The 8/80 Hour Heuristic: A work package should generally require no less than 8 hours (1 person-day) and no more than 80 hours (10 person-days or two working weeks) of effort. Decomposing below 8 hours creates excessive micromanagement and tracking overhead; leaving packages above 80 hours conceals schedule slippage and variance.\n2. Single Point of Accountability: Each work package must be assigned to exactly one named owner, team, or department to ensure unequivocal responsibility.\n3. Measurable Completion Criteria: The work package must produce an identifiable, verifiable deliverable with an objective Definition of Done.",
        "rubricItems": [
          {
            "point": "Defined work package as lowest controllable WBS element",
            "marksAllotted": 2
          },
          {
            "point": "Explained 8/80 hour sizing heuristic with rationale (no micromanagement, no hidden delays)",
            "marksAllotted": 2
          },
          {
            "point": "Stated single accountability and objective completion criteria",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Explain why tasks under 8 hours or over 80 hours cause project governance failure."
      },
      {
        "id": "itpm-u2-m2-desc-02",
        "unit": 2,
        "question": "Compare MoSCoW Prioritization with the Value vs. Effort Prioritization Matrix in IT project management. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "MoSCoW categories (Must, Should, Could, Wont have)",
          "Value vs. Effort Matrix (Quick Wins, Major Projects, Fill-ins, Thankless Tasks)",
          "When each model is best suited in IT projects"
        ],
        "modelAnswer": "MoSCoW prioritizes requirements into four distinct contractual categories:\n- Must Have: Non-negotiable core functionality; without it, the system cannot launch.\n- Should Have: Important features with high business impact, but viable manual workarounds exist.\n- Could Have: Desirable enhancements implemented only if time and budget permit.\n- Wont Have (this time): Agreed out of scope for the current release, preserving focus.\nIn contrast, the Value vs. Effort Matrix plots items along two quantitative or relative axes (Business Value vs Implementation Effort), categorizing tasks into: 1. Quick Wins (High Value, Low Effort - execute immediately); 2. Strategic Projects (High Value, High Effort - plan carefully); 3. Fill-ins (Low Value, Low Effort - do during downtime); 4. Money Pits / Thankless Tasks (Low Value, High Effort - avoid or discard).\nMoSCoW is ideal for fixed-deadline release scope negotiation, while Value vs Effort excels during early architectural backlog discovery.",
        "rubricItems": [
          {
            "point": "Defined all 4 MoSCoW categories accurately",
            "marksAllotted": 3
          },
          {
            "point": "Explained 4 quadrants of Value vs Effort matrix and practical usage",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Highlight that Wont have protects project scope by explicitly documenting what is deferred."
      },
      {
        "id": "itpm-u2-m2-desc-03",
        "unit": 2,
        "question": "A project activity has an estimated duration of 5 days. It has incoming Predecessors P1 (EFT = 8 days) and P2 (EFT = 12 days). Its outgoing Successors are S1 (LST = 22 days) and S2 (LST = 17 days). Calculate EST, EFT, LFT, LST, and Total Slack. State whether this activity is on the Critical Path. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Forward Pass: EST = max(EFT P1, EFT P2); EFT = EST + Duration",
          "Backward Pass: LFT = min(LST S1, LST S2); LST = LFT - Duration",
          "Slack Calculation: Slack = LST - EST = LFT - EFT",
          "Critical Path determination (Slack == 0 or > 0)"
        ],
        "modelAnswer": "1. Forward Pass Calculations:\n- Merge Rule: EST = max(EFT(P1), EFT(P2)) = max(8, 12) = 12 days.\n- Earliest Finish Time: EFT = EST + Duration = 12 + 5 = 17 days.\n\n2. Backward Pass Calculations:\n- Burst Rule: LFT = min(LST(S1), LST(S2)) = min(22, 17) = 17 days.\n- Latest Start Time: LST = LFT - Duration = 17 - 5 = 12 days.\n\n3. Total Slack Calculation:\n- Slack = LST - EST = 12 - 12 = 0 days (or LFT - EFT = 17 - 17 = 0 days).\n\n4. Critical Path Determination:\n- Because Total Slack = 0, this activity IS ON THE CRITICAL PATH. Any delay on this activity will directly delay the project delivery date by the same amount.",
        "rubricItems": [
          {
            "point": "Correctly calculated EST = 12 and EFT = 17 applying MAX merge rule",
            "marksAllotted": 2
          },
          {
            "point": "Correctly calculated LFT = 17 and LST = 12 applying MIN burst rule",
            "marksAllotted": 2
          },
          {
            "point": "Calculated Slack = 0 and accurately concluded activity is on Critical Path",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Always show the intermediate steps: show that max(8, 12) = 12 and min(22, 17) = 17."
      },
      {
        "id": "itpm-u2-m2-desc-04",
        "unit": 2,
        "question": "Explain the visual structure, utility, and limitations of Gantt Charts in IT project scheduling. How are Milestones represented? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Visual structure of Gantt Chart (horizontal time axis, task bars)",
          "Milestone representation (diamonds, zero-duration marker)",
          "Key advantages (intuitive executive communication, schedule tracking)",
          "Limitations (fails to display complex dependency logic and slack as clearly as PERT)"
        ],
        "modelAnswer": "A Gantt Chart is a horizontal bar chart displaying project activities along a calendar timeline. The horizontal axis represents calendar time, while the vertical axis lists work packages. Horizontal bars represent task duration, showing scheduled start and finish dates and progress percentage.\nMilestones are represented as black diamonds with zero duration, marking significant phase completions, executive approvals, or contractual deliverables.\nAdvantages:\n1. Highly intuitive and readable for non-technical executive stakeholders.\n2. Clearly communicates schedule progression, task concurrency, and overall project duration.\nLimitations:\n1. Becomes unwieldy and cluttered in large software projects with hundreds of activities.\n2. Does not clearly reveal complex dependency networks, network loops, or the mathematics of float and slack compared to PERT network diagrams.",
        "rubricItems": [
          {
            "point": "Explained Gantt chart visual mechanics and milestone diamond representation",
            "marksAllotted": 2
          },
          {
            "point": "Detailed communication advantages for executive stakeholders",
            "marksAllotted": 2
          },
          {
            "point": "Contrasted limitations in revealing dependency logic and float against PERT",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Differentiate a task (has duration) from a milestone (zero duration, event marker)."
      },
      {
        "id": "itpm-u2-m2-desc-05",
        "unit": 2,
        "question": "Contrast the Definition of Done (DoD) with Acceptance Criteria in agile and plan-driven software work packages. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Scope of DoD (global, system-wide quality checklist)",
          "Scope of Acceptance Criteria (local, feature-specific functional conditions)",
          "Interaction during verification and user sign-off"
        ],
        "modelAnswer": "The Definition of Done (DoD) and Acceptance Criteria operate at two complementary levels of quality assurance:\n1. Definition of Done (DoD): A global, universal checklist applied across ALL work packages and user stories. It defines systemic quality standards that must always be satisfied regardless of the specific feature (e.g., peer review completed, 80% unit test coverage, zero high-severity static security defects, clean build in CI/CD pipeline).\n2. Acceptance Criteria: Local, unique conditions specific to a single user story or work package. They define what the specific feature must do from a functional business perspective (e.g. When user enters valid CVV, payment gateway returns auth token within 2 seconds; if card is expired, error code E-104 is displayed).\nA deliverable must meet both: It must satisfy its unique Acceptance Criteria to be functionally correct, and satisfy the universal DoD to be technically acceptable for release.",
        "rubricItems": [
          {
            "point": "Contrasted global systemic scope of DoD with local feature scope of Acceptance Criteria",
            "marksAllotted": 3
          },
          {
            "point": "Provided concrete examples of both and explained why both are required for release",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Clarify that satisfying acceptance criteria is meaningless if the code fails the Definition of Done."
      },
      {
        "id": "itpm-u2-m2-desc-06",
        "unit": 2,
        "question": "Integrated Case Study: Omnichannel E-Commerce Platform Launch for RetailCorp. RetailCorp is launching a unified omnichannel retail engine connecting 200 physical stores, mobile apps, inventory ERP, and payment processing under a non-negotiable Black Friday launch date (22 weeks away). Multiple technical teams report conflicting priorities, dependency bottlenecks, and ambiguous completion criteria. Formulate an end-to-end WBS decomposition, dependency network optimization, critical path float management, and a robust Definition of Done governance system. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "WBS Decomposition & Work Package Boundary Definition (5 marks)",
          "PDM Network Logic, Leads/Lags & Dependency Optimization (5 marks)",
          "Critical Path Forward/Backward Pass, Float Buffer Management (5 marks)",
          "Definition of Done & Multi-Vendor Governance (5 marks)"
        ],
        "modelAnswer": "1. WBS Decomposition & Work Package Boundaries: Structure a 4-tier deliverable-oriented WBS strictly applying the 100% Rule: 1.0 Retail Platform; 2.1 Cloud POS Core; 2.2 Mobile/Web Storefront; 2.3 Real-Time Inventory ERP Connector; 2.4 Multi-Acquirer Payment Gateway; 2.5 Security, Compliance & PCI-DSS Audit. Work packages are broken down to 16-60 hours with clear physical boundaries (e.g. WP 2.3.2 Kafka Event Stream for In-Store POS Inventory Sync). Every work package has a single designated engineering lead.\n\n2. PDM Network Logic & Schedule Compression: Build an Activity-on-Node precedence network. To meet the aggressive 22-week deadline, utilize schedule compression techniques:\n- Fast-Tracking: Run WP 2.2 (Storefront UI) and WP 2.3 (ERP Connector) with a Start-to-Start (SS) dependency and a 2-week lag, allowing UI mockups and API stubbing to begin while backend schemas are finalized.\n- Apply Finish-to-Finish (FF) dependencies between payment tokenization and PCI compliance auditing.\n- Eliminate unnecessary sequential constraints, ensuring that only true hard technical dependencies govern sequence.\n\n3. Critical Path & Float Buffer Management: Execute Forward Pass (EST/EFT) and Backward Pass (LST/LFT). Identify the Critical Path: Cloud POS Core -> ERP Event Sync -> Payment Tokenization -> End-to-End Stress Testing -> Black Friday Cutover. The total critical duration is exactly 21 weeks, leaving only 1 week of Project Buffer. Non-critical work packages (e.g. Storefront Loyalty Rewards with TF = 3 weeks) are actively managed using buffer consumption burn-charts. If any non-critical task consumes >50% of its Total Float, resources are immediately leveled to prevent it from creating an auxiliary critical path.\n\n4. Definition of Done & Multi-Vendor Governance: Implement a rigorous contractual Definition of Done binding RetailCorps internal teams and third-party vendors:\n- Verification DoD: Automated unit test coverage >= 85%, API contracts verified via automated pact testing, performance validated under simulated 15,000 transactions/second load test with p99 latency < 250ms.\n- Operational DoD: PCI-DSS Level 1 compliance sign-off, automated deployment pipeline with automated rollback tested in under 5 minutes, operational runbooks and monitoring dashboards live in Datadog.\n- Governance Gate: Bi-weekly CCB reviews all change requests; any change request after Week 16 requires unanimous Steering Committee approval.",
        "rubricItems": [
          {
            "point": "Established deliverable-oriented WBS with 100% Rule and concrete 8/80 hour work packages",
            "marksAllotted": 5
          },
          {
            "point": "Optimized PDM network using fast-tracking, SS dependencies with lags, and hard logic",
            "marksAllotted": 5
          },
          {
            "point": "Executed critical path analysis, isolated zero-float chain, and protected project buffer",
            "marksAllotted": 5
          },
          {
            "point": "Constructed comprehensive, multi-vendor Definition of Done with performance and security gates",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Demonstrate that in retail IT with fixed holiday deadlines, buffer management and strict DoD are survival requirements."
      }
    ]
  }
];
