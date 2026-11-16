import { UnitData } from "../../../../types";
import { unit5Mcqs } from "./mcqs";
import { unit5Flashcards } from "./flashcards";
import { unit5ImportantQuestions } from "./qa";
import { unit5Concepts, unit5SummarySections } from "./concepts";
import { unit5Comparisons, unit5CheatSheetComparisons } from "./comparisons";
import { unit5ExamTraps } from "./traps";
import { unit5Visuals } from "./visuals";
import { unit5MockExams } from "./mockExams";
import { unit5Scenarios } from "./scenarios";

export {
  unit5Mcqs,
  unit5Flashcards,
  unit5ImportantQuestions,
  unit5Concepts,
  unit5SummarySections,
  unit5Comparisons,
  unit5ExamTraps,
  unit5Visuals,
  unit5MockExams,
  unit5Scenarios
};

export const unit5Data: UnitData = {
  id: 5,
  code: "DLMBITPAM01-U05",
  title: "Organizing Small and Medium Projects",
  subtitle: "Rational Unified Process (RUP), Agile Software Processes, Scrum, and Plan-Driven Predictive Lifecycles (Waterfall, Sashimi, V-Model).",
  estimatedTime: "3.5 hours",
  color: "from-blue-600 to-cyan-600",
  gradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
  badge: "Unit 5",
  overview: "Official curriculum for Unit 5 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers modern engineering lifecycles for small and medium IT projects. Explores the Rational Unified Process (RUP) with its 4 core phases (Inception, Elaboration, Construction, Transition) and 2 optional phases (Production, Disposal), concurrent disciplines, workload hump chart, and prototyping strategies. Examines the Agile Manifesto (4 core values, 12 principles, self-organizing teams, and semantic versioning). Deconstructs Scrum in depth: 3 empirical pillars (Transparency, Inspection, Adaptation), 5 core values, 3 defined roles (Product Owner, Scrum Master, Developers — with NO Project Manager), 3 artifacts (Product Backlog, Sprint Backlog, Increment + Definition of Done), and 4 time-boxed ceremonies. Concludes with plan-driven predictive models in small projects: Pure Waterfall, Waterfall with Feedback, Sashimi (overlapping phases), and the V-Model with its 1:1 horizontal verification traceability links, alongside comprehensive methodology selection frameworks.",
  summarySections: unit5SummarySections,
  keyConcepts: unit5Concepts,
  cheatSheet: {
    mustMemorize: [
      "RUP 4 Core Phases: Inception (LCO gate), Elaboration (LCA gate), Construction (IOC gate), Transition (PR gate).",
      "RUP 2 Optional Lifecycle Phases: Production (live operations & maintenance) and Disposal (system decommissioning & migration).",
      "RUP Prototyping Rule: Throw-away prototypes are discarded; Evolutionary prototypes evolve into production. A prototype is NOT production software.",
      "Agile Manifesto 4 Values: Individuals & interactions > processes/tools; Working software > comprehensive documentation; Customer collaboration > contract negotiation; Responding to change > following a plan.",
      "Agile Simplicity (Principle 10): 'The art of maximizing the amount of work not done.'",
      "Software Versioning: major.minor.build.revision (e.g. 4.2.5.9).",
      "Scrum 3 Empirical Pillars: Transparency, Inspection, Adaptation.",
      "Scrum 5 Values: Commitment, Courage, Focus, Openness, Respect.",
      "Scrum 3 Roles: Product Owner, Scrum Master, Developers. There is NO Project Manager role in Scrum!",
      "Scrum Team Size: Typically between 5 and 9 members.",
      "Scrum Sprint Rules: Time-box <= 1 month. Sprints are NEVER extended if tasks are incomplete. Unfinished work returns to Product Backlog.",
      "Daily Scrum: Strictly 15 minutes, time-boxed. Peer-to-peer sync for Developers, NOT a management status report.",
      "V-Model Horizontal Links: Requirements <-> Acceptance; System Design <-> System Test; Architecture <-> Integration Test; Detailed Design <-> Unit Test.",
      "Verification vs Validation: Verification = 'Did we build the system right?'; Validation = 'Did we build the right system?'."
    ],
    coreDefinitions: [
      {
        term: "Inception Phase",
        definition: "RUP phase establishing scope, business case, and initial feasibility, ending at the Lifecycle Objectives milestone.",
        examNote: "Scope & feasibility gate; not full architecture."
      },
      {
        term: "Elaboration Phase",
        definition: "RUP phase proving the executable architectural baseline and mitigating critical risks, ending at the Lifecycle Architecture milestone.",
        examNote: "Passing LCA gate is required before mass resource commitment to Construction."
      },
      {
        term: "Definition of Done (DoD)",
        definition: "Formal shared agreement on quality criteria that software must satisfy to be deemed potentially releasable.",
        examNote: "Without DoD, working software is an illusion and transparency is destroyed."
      },
      {
        term: "Sashimi Model",
        definition: "Waterfall variant where adjacent phases overlap like sliced fish to compress schedule duration.",
        examNote: "Compresses schedule but introduces rework risk if upstream specs shift."
      },
      {
        term: "V-Model",
        definition: "Plan-driven model linking left-side decomposition phases directly to right-side integration and verification test levels.",
        examNote: "Industry standard for safety-critical systems requiring strict audit traceability."
      }
    ],
    importantNumbers: [
      { number: "4", label: "Core RUP Phases", context: "Inception, Elaboration, Construction, Transition." },
      { number: "2", label: "Optional RUP Phases", context: "Production and Disposal post-transition phases." },
      { number: "6", label: "Core RUP Disciplines", context: "Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment." },
      { number: "4", label: "Agile Manifesto Values", context: "Drafted in February 2001 by 17 software signatories in Snowbird, Utah." },
      { number: "12", label: "Agile Principles", context: "Operational principles supporting the Agile Manifesto." },
      { number: "3", label: "Scrum Empirical Pillars", context: "Transparency, Inspection, Adaptation." },
      { number: "5", label: "Scrum Core Values", context: "Commitment, Courage, Focus, Openness, Respect." },
      { number: "3", label: "Scrum Roles", context: "Product Owner, Scrum Master, Developers. (No Project Manager)." },
      { number: "5 to 9", label: "Optimal Scrum Team Size", context: "Classic cross-functional development team guideline." },
      { number: "15 minutes", label: "Daily Scrum Time-Box", context: "Strict daily coordination time-box for Developers." },
      { number: "<= 1 month", label: "Sprint Duration Limit", context: "Fixed time-box that is never extended." },
      { number: "4", label: "V-Model Traceability Pairs", context: "Requirements/Acceptance, Design/System, Architecture/Integration, Module/Unit." }
    ],
    frameworkNames: [
      { acronym: "RUP", fullName: "Rational Unified Process", focus: "Architecture-centric, use-case driven iterative engineering framework." },
      { acronym: "UML", fullName: "Unified Modeling Language", focus: "Visual modeling standard utilized extensively throughout RUP disciplines." },
      { acronym: "DoD", fullName: "Definition of Done", focus: "Shared quality checklist required for software to enter the Increment." },
      { acronym: "LCO", fullName: "Lifecycle Objectives", focus: "Milestone gate concluding the RUP Inception phase." },
      { acronym: "LCA", fullName: "Lifecycle Architecture", focus: "Milestone gate concluding the RUP Elaboration phase." },
      { acronym: "IOC", fullName: "Initial Operational Capability", focus: "Milestone gate concluding the RUP Construction phase." },
      { acronym: "PR", fullName: "Product Release", focus: "Milestone gate concluding the RUP Transition phase." }
    ],
    processes: [
      {
        name: "RUP Iterative Lifecycle",
        steps: [
          "1. Inception: Establish scope, business case, and core use cases (Ends at LCO milestone)",
          "2. Elaboration: Prove executable architectural baseline and retire risks (Ends at LCA milestone)",
          "3. Construction: Iteratively develop operational components and software (Ends at IOC milestone)",
          "4. Transition: Conduct beta testing, deployment, and user acceptance (Ends at PR milestone)"
        ],
        description: "Four sequential core phases of RUP where engineering disciplines execute concurrently."
      },
      {
        name: "Scrum Sprint Execution Loop",
        steps: [
          "1. Sprint Planning: PO presents goals; Developers forecast Sprint Backlog",
          "2. Daily Scrum: 15-min daily developer synchronization of 24h work and blockers",
          "3. Sprint Review: Inspect completed Increment against DoD with stakeholders",
          "4. Sprint Retrospective: Inspect team processes, tools, and relationships for continuous improvement"
        ],
        description: "Standard empirical feedback cycle repeated every sprint (<= 1 month)."
      }
    ],
    comparisons: unit5CheatSheetComparisons,
    examTraps: [
      { trap: "Believing architecture is finalized in RUP Inception.", truth: "Architecture is baseline-tested and proven in the Elaboration phase (LCA gate)." },
      { trap: "Assuming Scrum has a Project Manager.", truth: "Scrum has NO Project Manager role. Responsibilities are divided between PO, SM, and Developers." },
      { trap: "Extending a sprint if work is incomplete.", truth: "Sprint duration is an inviolable time-box (<= 1 month). Unfinished work returns to Product Backlog." },
      { trap: "Thinking prototypes can be deployed directly into production.", truth: "A prototype is not production software. Throw-away prototypes are discarded; evolutionary prototypes require refactoring." }
    ],
    memoryShortcuts: [
      { acronym: "I-E-C-T", meaning: "Inception, Elaboration, Construction, Transition", usage: "Four core sequential phases of RUP." },
      { acronym: "LCO-LCA-IOC-PR", meaning: "Lifecycle Objectives, Lifecycle Architecture, Initial Operational Capability, Product Release", usage: "Four milestone gates concluding RUP phases." },
      { acronym: "T-I-A", meaning: "Transparency, Inspection, Adaptation", usage: "Three empirical pillars of Scrum." }
    ]
  },
  importantQuestions: unit5ImportantQuestions,
  flashcards: unit5Flashcards,
  mcqs: unit5Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Explain the 4 core RUP phases (Inception, Elaboration, Construction, Transition) and 2 optional phases (Production, Disposal)",
    "Describe RUP disciplines and explain the workload distribution hump chart",
    "Contrast Throw-away Prototyping with Evolutionary Prototyping and explain why prototypes != production",
    "State the 4 core values and 12 principles of the Agile Manifesto (2001)",
    "Analyze self-organizing teams, mutual accountability, and software release versioning (major.minor.build.revision)",
    "Explain Scrum's 3 empirical pillars (Transparency, Inspection, Adaptation) and 5 core values",
    "Differentiate the 3 Scrum roles (Product Owner, Scrum Master, Developers) and confirm the absence of a Project Manager",
    "Explain the 3 Scrum artifacts (Product Backlog, Sprint Backlog, Increment) and Definition of Done",
    "Explain the 4 Scrum events and enforce Sprint time-box inviolability (never extend deadlines)",
    "Compare Pure Waterfall, Waterfall with Feedback, and the Sashimi (overlapping) model",
    "Analyze the V-Model and its 1:1 horizontal verification traceability links",
    "Apply decision criteria to select between Plan-driven and Agile methodologies for small projects"
  ]
};
