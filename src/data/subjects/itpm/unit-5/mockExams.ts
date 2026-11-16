import { MockExam } from "../../../../types";

export const unit5MockExams: MockExam[] = [
  {
    "id": "itpm-u5-mock-01",
    "title": "Unit 5 Foundation Mock Exam: RUP & Agile Principles",
    "subtitle": "Rational Unified Process phases & disciplines, Agile Manifesto values & 12 principles, and software versioning.",
    "totalMarks": 60,
    "timeLimitMinutes": 90,
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
        "id": "itpm-u5-mock-01-d01",
        "unit": 5,
        "question": "Explain the four core phases of RUP and describe the primary milestone gate concluding each phase.",
        "marks": 8,
        "suggestedMinutes": 15,
        "answerStructure": [
          "Define RUP architecture",
          "Detail Inception (LCO gate)",
          "Detail Elaboration (LCA gate)",
          "Detail Construction (IOC gate)",
          "Detail Transition (PR gate)"
        ],
        "modelAnswer": "RUP structures software development into four sequential phases, each ending in a formal milestone gate: Inception (Lifecycle Objectives milestone), Elaboration (Lifecycle Architecture milestone), Construction (Initial Operational Capability milestone), and Transition (Product Release milestone). Elaboration establishes the executable architectural baseline and mitigates high risks before Construction undertakes bulk coding.",
        "rubricItems": [
          {
            "point": "All 4 phases correctly ordered and defined",
            "marksAllotted": 4
          },
          {
            "point": "All 4 milestone gates named accurately (LCO, LCA, IOC, PR)",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Never confuse Elaboration with Construction. Architecture is validated during Elaboration."
      },
      {
        "id": "itpm-u5-mock-01-d02",
        "unit": 5,
        "question": "State and analyze the four core values of the Agile Manifesto (2001).",
        "marks": 8,
        "suggestedMinutes": 15,
        "answerStructure": [
          "Value 1: Individuals and interactions over processes and tools",
          "Value 2: Working software over comprehensive documentation",
          "Value 3: Customer collaboration over contract negotiation",
          "Value 4: Responding to change over following a plan",
          "Balancing qualification: Right items still hold value"
        ],
        "modelAnswer": "The 2001 Agile Manifesto establishes four values: (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, and (4) Responding to change over following a plan. While there is value in the items on the right, the items on the left are valued more.",
        "rubricItems": [
          {
            "point": "All 4 values stated accurately without inversion",
            "marksAllotted": 6
          },
          {
            "point": "Balancing qualification regarding right-hand items explained",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Ensure left-hand items are clearly prioritized over right-hand items."
      }
    ]
  },
  {
    "id": "itpm-u5-mock-02",
    "title": "Unit 5 Mastery Mock Exam: Scrum & Plan-Driven Lifecycle Models",
    "subtitle": "Scrum roles, events, artifacts, time-boxing rules, Waterfall variants, and V-Model horizontal verification traceability.",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
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
      "itpm-u5-s54-mcq-088",
      "itpm-u5-s54-mcq-089",
      "itpm-u5-s54-mcq-090",
      "itpm-u5-s54-mcq-091",
      "itpm-u5-s54-mcq-092",
      "itpm-u5-s54-mcq-093",
      "itpm-u5-s54-mcq-094",
      "itpm-u5-s54-mcq-095",
      "itpm-u5-s54-mcq-096",
      "itpm-u5-s54-mcq-097"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u5-mock-02-d01",
        "unit": 5,
        "question": "Analyze how traditional Project Manager responsibilities are distributed among the three Scrum roles.",
        "marks": 8,
        "suggestedMinutes": 15,
        "answerStructure": [
          "No Project Manager role in Scrum",
          "Product Owner: Scope, business value, budget, backlog priorities",
          "Scrum Master: Process coaching, servant-leadership, impediment removal",
          "Developers: Technical design, scheduling, task allocation, DoD quality"
        ],
        "modelAnswer": "Scrum has no Project Manager. Responsibilities are distributed across three roles: Product Owner manages scope, ROI, and Product Backlog prioritization; Scrum Master facilitates events, enforces process, and clears blockers; Developers self-organize to estimate effort, assign daily tasks, and deliver increments satisfying the Definition of Done.",
        "rubricItems": [
          {
            "point": "Explicit statement that Scrum has no Project Manager",
            "marksAllotted": 2
          },
          {
            "point": "Detailed breakdown across PO, SM, and Developers",
            "marksAllotted": 6
          }
        ],
        "examinerAdvice": "Never imply the Scrum Master is simply a project manager."
      },
      {
        "id": "itpm-u5-mock-02-d02",
        "unit": 5,
        "question": "Detail the four horizontal 1:1 traceability relationships in the V-Model.",
        "marks": 8,
        "suggestedMinutes": 15,
        "answerStructure": [
          "V-Model geometry explanation",
          "Pair 1: Requirements Analysis <-> Acceptance Testing",
          "Pair 2: System Design <-> System Testing",
          "Pair 3: Architecture Design <-> Integration Testing",
          "Pair 4: Detailed Module Design <-> Unit Testing"
        ],
        "modelAnswer": "The V-Model connects left-hand specifications with right-hand test levels: (1) Requirements Analysis pairs with Acceptance Testing, (2) System Design pairs with System Testing, (3) Architecture Design pairs with Integration Testing, and (4) Detailed Module Design pairs with Unit Testing. Test cases are planned on the left side concurrently with design.",
        "rubricItems": [
          {
            "point": "All 4 horizontal pairs mapped with 100% accuracy",
            "marksAllotted": 6
          },
          {
            "point": "Early test planning on the left side explained",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Do not invert the mapping levels. Top pairs with top; bottom pairs with bottom."
      }
    ]
  }
];
