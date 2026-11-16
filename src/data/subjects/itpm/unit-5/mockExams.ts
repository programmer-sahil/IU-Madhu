import { MockExam } from "../../../../types";

export const unit5MockExams: MockExam[] = [
  {
    "id": "itpm-u5-mock-01",
    "title": "Unit 5 Comprehensive Exam 1",
    "subtitle": "Rational Unified Process (RUP), Agile Values, Principles & Prototyping",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u5-s51-mcq-001",
      "itpm-u5-s51-mcq-002",
      "itpm-u5-s51-mcq-003",
      "itpm-u5-s51-mcq-004",
      "itpm-u5-s51-mcq-005",
      "itpm-u5-s51-mcq-006",
      "itpm-u5-s51-mcq-007",
      "itpm-u5-s51-mcq-008",
      "itpm-u5-s51-mcq-009",
      "itpm-u5-s51-mcq-010",
      "itpm-u5-s51-mcq-011",
      "itpm-u5-s51-mcq-012",
      "itpm-u5-s51-mcq-013",
      "itpm-u5-s51-mcq-014",
      "itpm-u5-s51-mcq-015",
      "itpm-u5-s51-mcq-016",
      "itpm-u5-s51-mcq-017",
      "itpm-u5-s51-mcq-018",
      "itpm-u5-s51-mcq-019",
      "itpm-u5-s51-mcq-020",
      "itpm-u5-s51-mcq-021",
      "itpm-u5-s51-mcq-022",
      "itpm-u5-s51-mcq-023",
      "itpm-u5-s51-mcq-024",
      "itpm-u5-s51-mcq-025",
      "itpm-u5-s52-mcq-026",
      "itpm-u5-s52-mcq-027",
      "itpm-u5-s52-mcq-028",
      "itpm-u5-s52-mcq-029",
      "itpm-u5-s52-mcq-030",
      "itpm-u5-s52-mcq-031",
      "itpm-u5-s52-mcq-032",
      "itpm-u5-s52-mcq-033",
      "itpm-u5-s52-mcq-034",
      "itpm-u5-s52-mcq-035",
      "itpm-u5-s52-mcq-036",
      "itpm-u5-s52-mcq-037",
      "itpm-u5-s52-mcq-038",
      "itpm-u5-s52-mcq-039",
      "itpm-u5-s52-mcq-040"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u5-m1-desc-01",
        "unit": 5,
        "question": "Explain the four core phases of the Rational Unified Process (RUP) and the two optional phases for full lifecycle management. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Core Phase 1: Inception (Scope, business case, initial use cases)",
          "Core Phase 2: Elaboration (Requirements, UML architectural view, risk identification)",
          "Core Phase 3: Construction (Coding, debugging, tested deliverables)",
          "Core Phase 4: Transition (Customer deployment, training, maintenance handover)",
          "Optional Phases: Production & Disposal"
        ],
        "modelAnswer": "The Rational Unified Process (RUP) defines four sequential core phases:\n1. Inception: Establishes business goals, project scope, and initial use cases (iterations are not typical due to its abstract nature).\n2. Elaboration: Develops detailed requirements, establishes an architectural view using UML diagrams (use cases and class hierarchies), and identifies critical risks.\n3. Construction: Developers program, test, and debug code to produce high-quality deliverables ready for user acceptance.\n4. Transition: Delivers the solution to customers/users and to the maintenance team, preparing user documentation and training.\nAdditionally, two optional phases manage the complete lifecycle: the Production phase (observing live user response to feed future upgrades) and the Disposal phase (safely decommissioning or replacing the system).",
        "rubricItems": [
          {
            "point": "All 4 core phases named and explained with correct technical focus",
            "marksAllotted": 4
          },
          {
            "point": "Both optional phases (Production, Disposal) accurately defined",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Do not import external milestone acronyms; explain the core technical focus of each phase from Section 5.1."
      },
      {
        "id": "itpm-u5-m1-desc-02",
        "unit": 5,
        "question": "State and analyze the four core values of the Agile Manifesto (2001) and explain the balancing qualification. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Value 1: Individuals and interactions over processes and tools",
          "Value 2: Working software over comprehensive documentation",
          "Value 3: Customer collaboration over contract negotiation",
          "Value 4: Responding to change over following a plan",
          "Balancing qualification regarding right-hand items"
        ],
        "modelAnswer": "The 2001 Manifesto for Agile Software Development establishes four fundamental values:\n1. Individuals and interactions over processes and tools.\n2. Working software over comprehensive documentation.\n3. Customer collaboration over contract negotiation.\n4. Responding to change over following a plan.\nThe balancing qualification explicitly clarifies that while there is value in the items on the right (processes, documentation, contracts, plans), the items on the left are valued more. Agile does not eliminate documentation or planning; it prioritizes working software and adaptive collaboration.",
        "rubricItems": [
          {
            "point": "All 4 values accurately stated without inversion",
            "marksAllotted": 4
          },
          {
            "point": "Balancing qualification regarding right-hand items explained",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Ensure left-hand items are clearly prioritized over right-hand items."
      },
      {
        "id": "itpm-u5-m1-desc-03",
        "unit": 5,
        "question": "Analyze the concept of Self-Organizing Teams (Principle 11). How do they operate and what type of leadership is required? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Definition of self-organizing team (authority to act independently)",
          "Operational mechanics (monitoring own progress, seeking support)",
          "Contrast with micromanaged teams",
          "Required leadership profile (inspired leadership, encouragement, support)"
        ],
        "modelAnswer": "A self-organizing team has the authority and flexibility to act independently using any methodology they like as long as the job is done. Members monitor their own progress, take responsibility for their work, establish internal hierarchies of accountability, and seek external support when unresolvable obstacles arise. It stands at the opposite extreme from a micromanaged team where a leader controls every minor activity.\nForming self-organizing teams requires inspired leadership that, instead of guiding and commanding members, encourages them to take initiative, removes blockers, and provides resources and psychological support.",
        "rubricItems": [
          {
            "point": "Defined self-organizing team authority and autonomous progress monitoring",
            "marksAllotted": 3
          },
          {
            "point": "Explained contrast with micromanagement and the required supportive leadership posture",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Reference Section 5.2: spontaneous self-organization is rare; inspired leadership is required."
      },
      {
        "id": "itpm-u5-m1-desc-04",
        "unit": 5,
        "question": "Explain the four-level software versioning scheme taught in the course book (major.minor.build.revision). Provide an example and explain each component. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Format: major.minor.build.revision",
          "Major release (significant new features, 1-2 times a year)",
          "Minor release (function/requirement completed)",
          "Build (aggregation of revisions)",
          "Revision (working versions, daily occurrence)",
          "Concrete example (e.g. 4.2.5.9)"
        ],
        "modelAnswer": "The IU course book presents a 4-level versioning scheme in the format major.minor.build.revision:\n1. Major Release: Deployed when significant new features or architectural capabilities are added (typically once or twice a year).\n2. Minor Release: Released when an individual function, user requirement, or feature is completed.\n3. Build: Formed by the internal aggregation of several revisions into a stable testable compilation.\n4. Revision: Working daily versions of the application created during active development.\nFor example, Version 4.2.5.9 indicates the 4th major release of the software, the 2nd minor release, the 5th build, and the 9th revision.",
        "rubricItems": [
          {
            "point": "Identified format major.minor.build.revision with all 4 levels explained",
            "marksAllotted": 4
          },
          {
            "point": "Provided and accurately decoded a concrete version string (e.g. 4.2.5.9)",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Use exact course-book terminology from page 109 (major.minor.build.revision); avoid external numbering systems."
      },
      {
        "id": "itpm-u5-m1-desc-05",
        "unit": 5,
        "question": "Differentiate Throw-away Prototypes from Evolutionary Prototypes. What are the severe risks of deploying a prototype directly to production? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Throw-away Prototype definition (discarded once uncertainty resolved)",
          "Evolutionary Prototype definition (gradually extended into final product)",
          "Risks of deploying prototypes to production (missing business rules, lack of integration, security holes)"
        ],
        "modelAnswer": "A prototype is a learning tool to reduce uncertainty and verify user interfaces or technical concepts. Two main types exist:\n1. Throw-away Prototypes: Built rapidly to answer a specific technical or UI question and discarded once that knowledge is gained.\n2. Evolutionary Prototypes: Gradually extended and revised through successive iterations until turning into the final product.\nRisks of Deploying to Production: Because prototypes are built rapidly, stakeholders may confuse the prototype with a finished solution. Prototypes typically omit integration, comprehensive business rules, security validation, and error handling. Shipping a prototype directly to production results in severe reliability failures, technical debt, and security vulnerabilities.",
        "rubricItems": [
          {
            "point": "Accurately contrasted throw-away and evolutionary prototypes",
            "marksAllotted": 3
          },
          {
            "point": "Identified the risks of shipping prototypes (lack of business rules, integration, security)",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Emphasize the core course-book maxim: A prototype is NOT production software."
      },
      {
        "id": "itpm-u5-m1-desc-06",
        "unit": 5,
        "question": "Integrated Case Study: Cloud ERP Microservices Transition at MedTech GmbH. MedTech GmbH is developing a specialized inventory and compliance microservice for hospital pharmacies. The domain is fraught with changing regulatory requirements, unproven integration with hospital databases, and tight deadlines. The engineering team proposes using RUP architectural modeling combined with agile iterations, while management pressures them to deploy an early prototype immediately. Formulate a comprehensive lifecycle strategy covering RUP phase governance, prototyping safeguards, and agile development values. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "RUP Phase Structuring & Workload Balancing (5 marks)",
          "Prototyping Strategy & Production Safeguards (5 marks)",
          "Agile Iterations & Changing Requirements Management (5 marks)",
          "Transition, Training & Operational Maintenance Handover (5 marks)"
        ],
        "modelAnswer": "1. RUP Phase Structuring: Structure the project across the 4 core RUP phases:\n- Inception: Align with pharmacy executives and compliance officers on scope, legal boundaries, and high-level use cases. Business modeling receives the highest effort; iterations are kept minimal.\n- Elaboration: Establish the architectural baseline using UML diagrams (use cases for pharmacists and nurses, class diagrams for inventory models). Mitigate high technical risks (database integration latency) before coding.\n- Construction: Program and test microservices iteratively, peaking implementation and testing effort to build high-quality deliverables.\n- Transition: Deploy to live hospital environments, complete user documentation, and execute user training.\n\n2. Prototyping Strategy & Safeguards: Resist management pressure to ship an unverified prototype. Utilize throw-away prototypes strictly for exploratory UI verification with clinical pharmacists. Maintain a strict policy: A prototype is NOT production software. Code for production must be developed in Construction with full business rules, automated testing, and security scanning.\n\n3. Agile Iterations & Requirements: Apply Agile Value 4 (Responding to change over following a plan) and Principle 2 (Welcome changing requirements, even late in development). Because healthcare regulations evolve, requirements are prioritized in iterative backlogs, delivering working, verified software every 2 to 4 weeks for stakeholder inspection.\n\n4. Transition & Handover Governance: Transition phase must formally transfer the software to the hospital customer and the internal maintenance team. Hardware network configurations are verified, comprehensive user documentation is published, and user training sessions are conducted. Finally, plan for an optional Production phase to monitor operational performance and collect insights for future feature releases.",
        "rubricItems": [
          {
            "point": "Mapped RUP core phases and concurrent discipline workload accurately",
            "marksAllotted": 5
          },
          {
            "point": "Established clear prototyping governance preventing premature prototype deployment",
            "marksAllotted": 5
          },
          {
            "point": "Applied agile values to manage volatile healthcare compliance requirements",
            "marksAllotted": 5
          },
          {
            "point": "Formulated robust Transition and handover strategy with documentation and training",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Highlight the synergy between RUP architectural rigor and Agiles adaptability."
      }
    ]
  },
  {
    "id": "itpm-u5-mock-02",
    "title": "Unit 5 Comprehensive Exam 2",
    "subtitle": "Scrum Framework, Plan-Driven Models, Sashimi & V-Model Traceability",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u5-s52-mcq-041",
      "itpm-u5-s52-mcq-042",
      "itpm-u5-s52-mcq-043",
      "itpm-u5-s52-mcq-044",
      "itpm-u5-s52-mcq-045",
      "itpm-u5-s52-mcq-046",
      "itpm-u5-s52-mcq-047",
      "itpm-u5-s52-mcq-048",
      "itpm-u5-s52-mcq-049",
      "itpm-u5-s52-mcq-050",
      "itpm-u5-s52-mcq-051",
      "itpm-u5-s52-mcq-052",
      "itpm-u5-s52-mcq-053",
      "itpm-u5-s52-mcq-054",
      "itpm-u5-s52-mcq-055",
      "itpm-u5-s53-mcq-056",
      "itpm-u5-s53-mcq-057",
      "itpm-u5-s53-mcq-058",
      "itpm-u5-s53-mcq-059",
      "itpm-u5-s53-mcq-060",
      "itpm-u5-s53-mcq-061",
      "itpm-u5-s53-mcq-062",
      "itpm-u5-s53-mcq-063",
      "itpm-u5-s53-mcq-064",
      "itpm-u5-s53-mcq-065",
      "itpm-u5-s53-mcq-066",
      "itpm-u5-s53-mcq-067",
      "itpm-u5-s53-mcq-068",
      "itpm-u5-s53-mcq-069",
      "itpm-u5-s53-mcq-070",
      "itpm-u5-s53-mcq-071",
      "itpm-u5-s53-mcq-072",
      "itpm-u5-s53-mcq-073",
      "itpm-u5-s53-mcq-074",
      "itpm-u5-s53-mcq-075",
      "itpm-u5-s53-mcq-076",
      "itpm-u5-s53-mcq-077",
      "itpm-u5-s53-mcq-078",
      "itpm-u5-s53-mcq-079",
      "itpm-u5-s53-mcq-080"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u5-m2-desc-01",
        "unit": 5,
        "question": "Explain the three empirical pillars of Scrum (Transparency, Inspection, Adaptation) and analyze the five Scrum core values. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Three empirical pillars: Transparency, Inspection, Adaptation",
          "Five core Scrum values: Commitment, Courage, Focus, Openness, Respect",
          "Why empiricism replaces predictive forecasting in complex software"
        ],
        "modelAnswer": "Scrum is founded on empirical process control, which relies on three pillars:\n1. Transparency: Significant aspects of the process, work, and Definition of Done must be visible to those responsible for the outcome.\n2. Inspection: Scrum artifacts and progress toward goals must be frequently inspected to detect undesirable variances.\n3. Adaptation: If an inspection shows deviation outside acceptable limits, the process or material must be adjusted immediately.\nThese pillars are sustained by five core values: Commitment (to achieving sprint goals), Courage (to do the right thing and work on tough problems), Focus (on the work of the sprint), Openness (about all work and challenges), and Respect (for team members as capable, independent people).",
        "rubricItems": [
          {
            "point": "Accurately defined Transparency, Inspection, and Adaptation",
            "marksAllotted": 3
          },
          {
            "point": "Listed and explained the five Scrum core values",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Emphasize that without Transparency, Inspection and Adaptation are impossible."
      },
      {
        "id": "itpm-u5-m2-desc-02",
        "unit": 5,
        "question": "Analyze how traditional Project Manager responsibilities are distributed among the three Scrum roles. Why is there NO Project Manager in Scrum? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Explicit statement: Scrum has NO Project Manager role",
          "Product Owner responsibilities (Scope, ROI, Backlog prioritization)",
          "Scrum Master responsibilities (Process coaching, servant-leadership, obstacle removal)",
          "Developers responsibilities (Technical design, daily scheduling, DoD delivery)"
        ],
        "modelAnswer": "Scrum explicitly contains NO Project Manager role. To avoid split accountability and foster self-organization, traditional project management responsibilities are distributed across three distinct roles:\n1. Product Owner: Owns the WHAT and WHY\u2014maximizing business value, managing scope, budget, and single-handedly prioritizing the Product Backlog.\n2. Scrum Master: Owns the PROCESS\u2014acting as a servant-leader, coaching the team in Scrum practices, facilitating events, and removing organizational impediments.\n3. Developers: Own the HOW and HOW MUCH\u2014self-organizing to estimate backlog items, plan daily execution, make architectural choices, and deliver increments satisfying the Definition of Done.",
        "rubricItems": [
          {
            "point": "Explicitly stated that Scrum contains no Project Manager",
            "marksAllotted": 2
          },
          {
            "point": "Detailed allocation of traditional PM duties across PO, SM, and Developers",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Never describe the Scrum Master as a project manager with a different title."
      },
      {
        "id": "itpm-u5-m2-desc-03",
        "unit": 5,
        "question": "Explain Scrum time-boxing rules for the Sprint and Daily Scrum. What happens when tasks are incomplete at the end of a sprint? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Sprint time-box rule (maximum 1 month, fixed duration)",
          "Daily Scrum time-box (strictly 15 minutes, developer sync)",
          "Rule for incomplete tasks: Sprints are NEVER extended; work returns to Product Backlog"
        ],
        "modelAnswer": "In Scrum, events are strictly time-boxed:\n1. Sprint: Fixed duration of one month or less (typically 2 to 4 weeks). Sprints create consistency; once a sprint begins, its duration is fixed and NEVER extended.\n2. Daily Scrum: A strictly time-boxed 15-minute daily synchronization event for Developers to inspect progress toward the Sprint Goal and plan the next 24 hours.\nHandling Incomplete Work: If items cannot be completed before the sprint ends, the sprint is NOT extended. Incomplete items do not enter the Increment; they are evaluated, re-estimated, and returned to the Product Backlog for the Product Owner to re-prioritize in future sprints.",
        "rubricItems": [
          {
            "point": "Stated sprint time-box (<= 1 month) and daily scrum time-box (15 minutes)",
            "marksAllotted": 3
          },
          {
            "point": "Explained that sprints are never extended and incomplete work returns to Product Backlog",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Emphasize that extending a sprint destroys predictability and cadence."
      },
      {
        "id": "itpm-u5-m2-desc-04",
        "unit": 5,
        "question": "Compare the Pure Waterfall model, Waterfall with Feedback, and the Sashimi model (overlapping phases) in small projects. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Pure Waterfall (strict sequence, no backward steps)",
          "Waterfall with Feedback (loopbacks between adjacent phases)",
          "Sashimi Model (overlapping phases like sliced fish)",
          "Trade-offs: schedule compression vs rework risk"
        ],
        "modelAnswer": "1. Pure Waterfall: Sequential model where a phase begins only after the preceding phase is 100% complete and approved. Simple to manage, but highly vulnerable to changing requirements.\n2. Waterfall with Feedback: Introduces feedback loops between adjacent phases, allowing the team to return to the prior phase when errors or design flaws are discovered.\n3. Sashimi Model: Allows adjacent phases to overlap like slices of raw fish (e.g. database design starts once primary requirements are known, before UI specs are finished). Advantages: Accelerates delivery and optimizes specialist utilization. Disadvantage: If upstream specifications change radically, downstream work must be scrapped, increasing rework risk.",
        "rubricItems": [
          {
            "point": "Accurately contrasted Pure Waterfall, Waterfall with Feedback, and Sashimi",
            "marksAllotted": 4
          },
          {
            "point": "Explained schedule compression and rework trade-off in the Sashimi model",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Reference Figure 40 from the course book regarding the Sashimi overlapping phases."
      },
      {
        "id": "itpm-u5-m2-desc-05",
        "unit": 5,
        "question": "Explain the four horizontal 1:1 verification traceability pairs in the V-Model and contrast Verification with Validation. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "V-Model geometry (decomposition left, integration right)",
          "Four horizontal pairs: Requirements <-> Acceptance; System Design <-> System Test; Architecture <-> Integration Test; Module Design <-> Unit Test",
          "Verification (Did we build the system right?) vs Validation (Did we build the right system?)"
        ],
        "modelAnswer": "The V-Model connects left-hand decomposition phases directly with right-hand integration and testing phases via four horizontal 1:1 traceability relationships:\n1. Requirements Analysis <\u2014> Acceptance Testing (Validates business needs with users).\n2. System Design <\u2014> System Testing (Verifies total system behavior and performance).\n3. Architecture Design <\u2014> Integration Testing (Verifies component interfaces and protocols).\n4. Detailed Module Design <\u2014> Unit Testing (Verifies internal code logic and modules).\nVerification vs. Validation:\n- Verification: Evaluates whether software meets specified technical requirements (Did we build the system right?).\n- Validation: Evaluates whether software fulfills its intended operational purpose in the real world (Did we build the right system?).",
        "rubricItems": [
          {
            "point": "Mapped all 4 horizontal pairs with 100% accuracy",
            "marksAllotted": 4
          },
          {
            "point": "Contrasted Verification and Validation with canonical questions",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Ensure top pairs with top (Requirements/Acceptance) and bottom pairs with bottom (Module/Unit)."
      },
      {
        "id": "itpm-u5-m2-desc-06",
        "unit": 5,
        "question": "Integrated Case Study: Mobile Payment Processing Engine at PayFlow. PayFlow is developing a mission-critical payment tokenization gateway under a fixed 6-month regulatory compliance window. The engineering team of 7 developers struggles with scope churn, missed delivery dates, and conflict over code readiness. Management considers migrating from ad-hoc processes to Scrum, while compliance auditors demand strict traceability. Formulate an end-to-end agile governance strategy covering team sizing, sprint mechanics, Definition of Done, and compliance traceability. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Scrum Team Structure & Role Governance (5 marks)",
          "Sprint Execution Cadence & Inviolable Time-Boxes (5 marks)",
          "Definition of Done & Quality Gate Enforcement (5 marks)",
          "Audit Traceability & Hybrid Plan-Driven Integration (5 marks)"
        ],
        "modelAnswer": "1. Scrum Team Structure & Role Governance: Establish a standard cross-functional team of 7 developers (well within the optimal 5 to 9 guideline). Enforce clear separation of responsibilities: Designate a single Product Owner with exclusive authority over Product Backlog prioritization. Appoint a dedicated Scrum Master to facilitate events and protect the team from external interference. Prohibit executives from assigning side tasks directly to developers.\n\n2. Sprint Cadence & Time-Boxes: Implement 2-week sprint cycles with fixed time-boxes: Sprint Planning (max 4 hours for 2-week sprint), Daily Scrum (strictly 15 minutes, standing, focusing on daily coordination), Sprint Review (inspecting working software), and Sprint Retrospective. Enforce the inviolable sprint rule: Sprints are never extended; incomplete items return to the Product Backlog for re-prioritization.\n\n3. Definition of Done (DoD): Create an objective, non-negotiable DoD agreed by developers and auditors:\n- Peer code review completed and approved by two senior engineers.\n- Automated unit and integration tests passing with >= 85% branch coverage.\n- Static analysis scan showing zero high-severity vulnerabilities.\n- Tokenization response time verified under 150ms in staging.\n- API documentation updated and signed off.\n\n4. Audit Traceability & Hybrid Integration: To satisfy strict regulatory compliance without compromising agility, incorporate V-Model traceability concepts into backlog management: Each user story must link acceptance tests back to regulatory requirements. Acceptance testing is executed continuously in the sprint, while the Definition of Done provides verifiable audit artifacts at every Sprint Review.",
        "rubricItems": [
          {
            "point": "Established textbook Scrum roles and optimal team sizing (5-9)",
            "marksAllotted": 5
          },
          {
            "point": "Designed complete time-boxed sprint lifecycle and incomplete work rules",
            "marksAllotted": 5
          },
          {
            "point": "Formulated rigorous Definition of Done guaranteeing payment security",
            "marksAllotted": 5
          },
          {
            "point": "Integrated compliance traceability into agile sprint execution",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Show how empirical Scrum practices and rigorous quality gates satisfy regulatory compliance."
      }
    ]
  }
];
