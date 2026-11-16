import { ExamTrapItem } from "../../../../types";

export const unit5ExamTraps: ExamTrapItem[] = [
  {
    "id": "itpm-u5-trap-001",
    "unit": 5,
    "topic": "RUP Core Phases",
    "commonStudentMistake": "Students often assume software architecture is designed in Inception and all coding happens in Construction.",
    "correctAcademicTruth": "Remember: Inception = Scope/Feasibility; Elaboration = Architecture/Risk mitigation; Construction = Bulk component coding; Transition = Deployment.",
    "whyExaminerDeductsMarks": "In RUP, the executable architectural baseline is proven in ELABORATION, while Construction focuses on mass component coding.",
    "howToRemember": "Remember: Inception = Scope/Feasibility; Elaboration = Architecture/Risk mitigation; Construction = Bulk component coding; Transition = Deployment."
  },
  {
    "id": "itpm-u5-trap-002",
    "unit": 5,
    "topic": "RUP Optional Lifecycle Phases",
    "commonStudentMistake": "Students forget the two optional post-transition lifecycle phases: Production and Disposal.",
    "correctAcademicTruth": "Always look for Production and Disposal when questions ask about the complete extended Unified Process lifecycle.",
    "whyExaminerDeductsMarks": "RUP defines 4 core phases (Inception, Elaboration, Construction, Transition) PLUS 2 optional lifecycle phases (Production, Disposal).",
    "howToRemember": "Always look for Production and Disposal when questions ask about the complete extended Unified Process lifecycle."
  },
  {
    "id": "itpm-u5-trap-003",
    "unit": 5,
    "topic": "RUP Disciplines & Hump Chart",
    "commonStudentMistake": "Assuming testing only happens in Transition, or requirements gathering only happens in Inception.",
    "correctAcademicTruth": "Remember that testing occurs in Elaboration and Construction, while requirements are refined during Construction.",
    "whyExaminerDeductsMarks": "RUP disciplines run CONCURRENTLY across all phases. The hump chart shows shifting effort peaks, not isolated phase silos.",
    "howToRemember": "Remember that testing occurs in Elaboration and Construction, while requirements are refined during Construction."
  },
  {
    "id": "itpm-u5-trap-004",
    "unit": 5,
    "topic": "Prototyping",
    "commonStudentMistake": "Believing a throw-away prototype can be patched and deployed into live business operations.",
    "correctAcademicTruth": "Throw-away prototypes must be DISCARDED. Only evolutionary prototypes are engineered for production evolution.",
    "whyExaminerDeductsMarks": "The course book explicitly stresses that prototypes lack non-functional robustness (security, error handling, scalability, concurrency).",
    "howToRemember": "Throw-away prototypes must be DISCARDED. Only evolutionary prototypes are engineered for production evolution."
  },
  {
    "id": "itpm-u5-trap-005",
    "unit": 5,
    "topic": "Agile Manifesto Values",
    "commonStudentMistake": "Selecting distractors that state Agile teams 'never write documentation' or 'do no planning'.",
    "correctAcademicTruth": "Documentation and planning still exist in Agile; they are simply lean, purposeful, and subordinated to working software.",
    "whyExaminerDeductsMarks": "The Agile Manifesto explicitly qualifies: 'While there is value in the items on the right, we value the items on the left more.'",
    "howToRemember": "Documentation and planning still exist in Agile; they are simply lean, purposeful, and subordinated to working software."
  },
  {
    "id": "itpm-u5-trap-006",
    "unit": 5,
    "topic": "Agile Manifesto Values",
    "commonStudentMistake": "Misreading questions that flip left-hand and right-hand items (e.g. 'comprehensive documentation over working software').",
    "correctAcademicTruth": "Always verify: [LEFT ITEM: People, Working Software, Collaboration, Change] OVER [RIGHT ITEM: Tools, Documentation, Contracts, Plan].",
    "whyExaminerDeductsMarks": "Exam writers deliberately swap terms to trap students who skim options carelessly.",
    "howToRemember": "Always verify: [LEFT ITEM: People, Working Software, Collaboration, Change] OVER [RIGHT ITEM: Tools, Documentation, Contracts, Plan]."
  },
  {
    "id": "itpm-u5-trap-007",
    "unit": 5,
    "topic": "Agile Principle 10",
    "commonStudentMistake": "Defining simplicity as building basic user interfaces or avoiding difficult algorithms.",
    "correctAcademicTruth": "Look strictly for the phrase 'maximizing the amount of work not done' in multiple-choice options.",
    "whyExaminerDeductsMarks": "Principle 10 has an exact official definition: 'the art of maximizing the amount of work not done'.",
    "howToRemember": "Look strictly for the phrase 'maximizing the amount of work not done' in multiple-choice options."
  },
  {
    "id": "itpm-u5-trap-008",
    "unit": 5,
    "topic": "Self-Organizing Teams",
    "commonStudentMistake": "Believing self-organizing teams can decide what products to build or change corporate strategy autonomously.",
    "correctAcademicTruth": "Differentiate: Business/PO owns the 'What'; Self-organizing developers own the 'How'.",
    "whyExaminerDeductsMarks": "Self-organizing teams own HOW work is accomplished, but the Product Owner strictly controls WHAT is built.",
    "howToRemember": "Differentiate: Business/PO owns the 'What'; Self-organizing developers own the 'How'."
  },
  {
    "id": "itpm-u5-trap-009",
    "unit": 5,
    "topic": "Software Versioning",
    "commonStudentMistake": "Mixing up the 3rd and 4th digits of the versioning scheme (e.g. calling '9' the build and '5' the revision in 4.2.5.9).",
    "correctAcademicTruth": "Remember M-M-B-R: Build comes before Revision.",
    "whyExaminerDeductsMarks": "The sequence is strictly: Major -> Minor -> Build -> Revision.",
    "howToRemember": "Remember M-M-B-R: Build comes before Revision."
  },
  {
    "id": "itpm-u5-trap-010",
    "unit": 5,
    "topic": "Scrum Empirical Pillars vs Values",
    "commonStudentMistake": "Listing Commitment or Focus as empirical process control pillars.",
    "correctAcademicTruth": "Keep mechanics (3 Pillars: T-I-A) separate from human ethics (5 Values: C-C-F-O-R).",
    "whyExaminerDeductsMarks": "Pillars = Transparency, Inspection, Adaptation. Values = Commitment, Courage, Focus, Openness, Respect.",
    "howToRemember": "Keep mechanics (3 Pillars: T-I-A) separate from human ethics (5 Values: C-C-F-O-R)."
  },
  {
    "id": "itpm-u5-trap-011",
    "unit": 5,
    "topic": "Scrum Roles",
    "commonStudentMistake": "Selecting 'Project Manager' as a standard role or assuming the Scrum Master is just a renamed PM.",
    "correctAcademicTruth": "There are only three roles in Scrum: Product Owner, Scrum Master, Developers. Reject any answer claiming PM is a Scrum role.",
    "whyExaminerDeductsMarks": "Scrum has NO Project Manager role. PM responsibilities are distributed among the PO, SM, and Developers.",
    "howToRemember": "There are only three roles in Scrum: Product Owner, Scrum Master, Developers. Reject any answer claiming PM is a Scrum role."
  },
  {
    "id": "itpm-u5-trap-012",
    "unit": 5,
    "topic": "Product Owner Accountability",
    "commonStudentMistake": "Believing a committee of department heads can share the Product Owner role.",
    "correctAcademicTruth": "The PO may represent a committee's desires, but only ONE person holds the formal PO accountability.",
    "whyExaminerDeductsMarks": "Scrum mandates that the Product Owner is strictly ONE person to prevent political gridlock and ensure clear prioritization.",
    "howToRemember": "The PO may represent a committee's desires, but only ONE person holds the formal PO accountability."
  },
  {
    "id": "itpm-u5-trap-013",
    "unit": 5,
    "topic": "Sprint Backlog Ownership",
    "commonStudentMistake": "Assuming the PO manages tasks on the Sprint Backlog during the active sprint.",
    "correctAcademicTruth": "Once the sprint starts, only the Developers can modify the tasks and technical plan in the Sprint Backlog.",
    "whyExaminerDeductsMarks": "The Product Owner owns the *Product Backlog*, but the Developers solely own the *Sprint Backlog*.",
    "howToRemember": "Once the sprint starts, only the Developers can modify the tasks and technical plan in the Sprint Backlog."
  },
  {
    "id": "itpm-u5-trap-014",
    "unit": 5,
    "topic": "Sprint Time-Boxing",
    "commonStudentMistake": "Thinking a sprint can be extended by a few days when tasks are 90% complete.",
    "correctAcademicTruth": "Sprint length never changes. Scope is adjusted; time is never moved.",
    "whyExaminerDeductsMarks": "A Scrum sprint is an INVIOLABLE time-box. It is NEVER extended. Unfinished work returns to the Product Backlog.",
    "howToRemember": "Sprint length never changes. Scope is adjusted; time is never moved."
  },
  {
    "id": "itpm-u5-trap-015",
    "unit": 5,
    "topic": "Daily Scrum",
    "commonStudentMistake": "Believing developers report their daily progress to the Scrum Master or external managers.",
    "correctAcademicTruth": "Developers talk to each other, planning their next 24 hours toward the Sprint Goal.",
    "whyExaminerDeductsMarks": "The Daily Scrum is by and for the Developers to synchronize among themselves, not a management status report.",
    "howToRemember": "Developers talk to each other, planning their next 24 hours toward the Sprint Goal."
  },
  {
    "id": "itpm-u5-trap-016",
    "unit": 5,
    "topic": "Scrum Events",
    "commonStudentMistake": "Believing the Retrospective demos software to clients, or the Review is for team process improvement.",
    "correctAcademicTruth": "Review demos the Increment. Retrospective improves team collaboration and tools.",
    "whyExaminerDeductsMarks": "Review = PRODUCT focus with external stakeholders. Retrospective = PROCESS/TEAM focus strictly with internal team.",
    "howToRemember": "Review demos the Increment. Retrospective improves team collaboration and tools."
  },
  {
    "id": "itpm-u5-trap-017",
    "unit": 5,
    "topic": "Waterfall Models",
    "commonStudentMistake": "Assuming pure waterfall permits returning to earlier phases when bugs are discovered.",
    "correctAcademicTruth": "Pure waterfall has NO backward loops. If feedback arrows exist, it is Waterfall with Feedback (Figure 39).",
    "whyExaminerDeductsMarks": "Pure Waterfall is strictly unidirectional. 'Waterfall with Feedback' is a distinct modified variant.",
    "howToRemember": "Pure waterfall has NO backward loops. If feedback arrows exist, it is Waterfall with Feedback (Figure 39)."
  },
  {
    "id": "itpm-u5-trap-018",
    "unit": 5,
    "topic": "V-Model",
    "commonStudentMistake": "Thinking testing is ignored until the right-hand arm is reached.",
    "correctAcademicTruth": "Acceptance test cases are written during Requirements Analysis, long before coding begins at the vertex.",
    "whyExaminerDeductsMarks": "Test EXECUTION happens on the right side, but test PLANNING and test case design occur on the left side during specification.",
    "howToRemember": "Acceptance test cases are written during Requirements Analysis, long before coding begins at the vertex."
  },
  {
    "id": "itpm-u5-trap-019",
    "unit": 5,
    "topic": "Verification vs Validation",
    "commonStudentMistake": "Swapping the definitions of Verification and Validation.",
    "correctAcademicTruth": "Verification = specs/code check. Validation = customer/operational use check.",
    "whyExaminerDeductsMarks": "Verification = Conformance to specs ('Did we build the system right?'). Validation = Conformance to user needs ('Did we build the right system?').",
    "howToRemember": "Verification = specs/code check. Validation = customer/operational use check."
  },
  {
    "id": "itpm-u5-trap-020",
    "unit": 5,
    "topic": "Methodology Selection",
    "commonStudentMistake": "Assuming Agile is always superior and Waterfall/V-Model should never be used.",
    "correctAcademicTruth": "Choose Plan-driven for stable specs and safety/audit compliance; choose Agile for uncertainty and rapid feedback.",
    "whyExaminerDeductsMarks": "Safety-critical, life-dependent, and strictly audited projects require the formal verification and traceability of plan-driven models (V-Model).",
    "howToRemember": "Choose Plan-driven for stable specs and safety/audit compliance; choose Agile for uncertainty and rapid feedback."
  }
];
