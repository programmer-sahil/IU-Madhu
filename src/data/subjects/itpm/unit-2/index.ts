import { UnitData } from "../../../../types";
import { unit2Mcqs } from "./mcqs";
import { unit2Flashcards } from "./flashcards";
import { unit2ImportantQuestions } from "./qa";
import { unit2Concepts, unit2SummarySections } from "./concepts";
import { unit2ExamTraps } from "./traps";
import { unit2Comparisons } from "./comparisons";
import { unit2PertFormulas, unit2CalculationExercises } from "./formulas";
import { unit2Visuals } from "./visuals";

export {
  unit2Mcqs,
  unit2Flashcards,
  unit2ImportantQuestions,
  unit2Concepts,
  unit2SummarySections,
  unit2ExamTraps,
  unit2Comparisons,
  unit2PertFormulas,
  unit2CalculationExercises,
  unit2Visuals
};

export const unit2Data: UnitData = {
  id: 2,
  code: "DLMBITPAM01-U02",
  title: "Organizing the Work: Planning, Prioritization, Scheduling & Quality",
  subtitle: "Work Breakdown Structure, Kano & MoSCoW prioritization, PERT & Gantt scheduling, Definition of Done, and ISO/IEC 25010.",
  estimatedTime: "2.5 hours",
  color: "from-cyan-600 to-indigo-700",
  gradient: "linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)",
  badge: "Unit 2",
  overview: "Official curriculum for Unit 2 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers breaking down project work using WBS and the 100% Rule, managing scope with Traceability Matrices, prioritizing requirements using the Urgency/Importance Matrix, Kano Model, and MoSCoW method, scheduling activities using four precedence relationships, leads, lags, PERT network forward/backward passes, Critical Path, and Gantt charts, establishing the Definition of Done (DoD) vs Customer Acceptance, applying the ISO/IEC 25010 quality models (5 Quality-in-Use + 8 Product Quality), and implementing Quality Gates (Kneuper, 2018).",
  summarySections: unit2SummarySections,
  keyConcepts: unit2Concepts,
  cheatSheet: {
    mustMemorize: [
      "WBS: Project -> Subsystems/Phases -> Work Packages -> Elementary Tasks.",
      "100% Rule: Subordinate elements must represent exactly 100% of parent scope.",
      "Estimates roll bottom-up from lowest-level tasks into work packages and baselines.",
      "Deliverable = Tangible verifiable output (requires duration and resources).",
      "Milestone = Significant moment or event in time with ZERO duration (D = 0).",
      "Milestones do NOT perform quality checks; Quality Gates do.",
      "Traceability Matrix: Links Requirements -> Design -> Code -> Test Cases.",
      "Traceability prevents gold plating and enables rapid change impact analysis.",
      "WBS Dictionary: Companion document detailing work package scope, owner, and criteria.",
      "Urgency = Reactive knee-jerk pressure. Importance = Proactive long-term planning.",
      "External progress reporting = High Urgency + Low Importance.",
      "Kano: Basic (must-be), Performance (linear satisfier), Delighters (attractive).",
      "Absence of Delighters causes ZERO customer dissatisfaction.",
      "MoSCoW (Dai Clegg, Oracle UK, 1994): Must, Should, Could, Won't (for this timebox).",
      "Under pressure: sacrifice Could-haves first, then Should-haves; NEVER drop Must-haves.",
      "Precedences: FS (most common default), SS (concurrency), FF (coordination), SF (rarest).",
      "Lead = Overlap / negative lag. Lag = Mandatory delay / waiting time.",
      "PERT Forward Pass: EFT = EST + Duration. Merge point = MAXIMUM EFT of predecessors.",
      "PERT Backward Pass: LST = LFT - Duration. Burst point = MINIMUM LST of successors.",
      "Slack = LST - EST = LFT - EFT. Critical Path = Longest sequence with ZERO slack.",
      "Critical Path Delay: Delay on critical path delays project completion day-for-day.",
      "Gantt limitation: Does NOT show resource quantities (e.g. 20 people vs 10) or financial costs.",
      "PERT and Gantt are complementary planning tools.",
      "DoD = Team-agreed quality checklist (code standard, review, tests, integrated, documented).",
      "DoD is an internal team QA filter; Customer Acceptance is external client sign-off.",
      "DoD is a living artifact that evolves as team maturity improves.",
      "ISO/IEC 25010 Quality-in-Use = 5 characteristics: Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage (S-E-F-E-C).",
      "ISO/IEC 25010 Product Quality = 8 characteristics: Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability (F-P-U-R-S-C-P-M).",
      "Quality Gate (Kneuper, 2018) = Deliverables definition + Formal Review issuing Go/No-Go decisions.",
      "Bannerman & Thorogood (2012) Multi-Domain Success: Process, Project Management, Product, Business, Strategy."
    ],
    coreDefinitions: [
      { term: "Work Breakdown Structure (WBS)", definition: "A hierarchical decomposition of project scope into manageable, assignable, and measurable components.", examNote: "Decomposition rolls bottom-up; 100% rule applies." },
      { term: "Work Package", definition: "A manageable grouping of related project activities and deliverables at an intermediate/lowest WBS level.", examNote: "Standard unit for contractor assignment and cost accounting." },
      { term: "Milestone", definition: "A significant zero-duration point in time marking a major accomplishment or stage transition.", examNote: "Zero duration; does not perform quality checks." },
      { term: "Requirements Traceability Matrix", definition: "A grid linking requirements to design, components, deliverables, and test cases.", examNote: "Prevents gold plating; essential for impact analysis." },
      { term: "Kano Model", definition: "A customer satisfaction model categorizing requirements into Basic, Performance, and Delighter attributes.", examNote: "Absence of delighters causes zero dissatisfaction." },
      { term: "MoSCoW Method", definition: "A software requirements prioritization framework (Must, Should, Could, Won't) created by Dai Clegg (1994).", examNote: "Words over numbers encourage value debates." },
      { term: "Slack (Float)", definition: "The maximum amount of time an activity can be delayed without delaying project completion.", examNote: "Slack = LST - EST = LFT - EFT. Zero slack = Critical path." },
      { term: "Critical Path", definition: "The longest sequence of dependent activities through the network diagram having zero slack.", examNote: "Determines shortest possible project duration." },
      { term: "Definition of Done (DoD)", definition: "A team-agreed set of technical quality criteria that must be satisfied before marking work done.", examNote: "Internal QA filter, distinct from customer acceptance." },
      { term: "Quality Gate", definition: "A formal review at a project stage boundary verifying that deliverables meet quality standards before advancing.", examNote: "Kneuper (2018): Deliverables + Formal Review." }
    ],
    importantNumbers: [
      { number: "4", label: "WBS Hierarchy Levels", context: "Project (1) -> Major Deliverables/Phases (2) -> Work Packages (3) -> Elementary Tasks (4)." },
      { number: "100%", label: "WBS Scope Integrity Rule", context: "Subordinate elements must represent exactly 100% of parent scope, neither more nor less." },
      { number: "3", label: "Kano Satisfaction Categories", context: "Basic (Must-Be), Performance (Linear Satisfier), Delighters (Attractive)." },
      { number: "4", label: "MoSCoW Categories", context: "Must-have, Should-have, Could-have, Won't-have (Dai Clegg, 1994)." },
      { number: "4", label: "Precedence Dependency Types", context: "Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF)." },
      { number: "0", label: "Milestone & Critical Path Slack", context: "Milestones have 0 duration; critical path tasks have 0 slack." },
      { number: "5", label: "ISO/IEC 25010 Quality-in-Use Characteristics", context: "Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage (S-E-F-E-C)." },
      { number: "8", label: "ISO/IEC 25010 Product Quality Characteristics", context: "Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability (F-P-U-R-S-C-P-M)." },
      { number: "5", label: "Multi-Domain Success Framework Domains", context: "Process, Project Management, Product, Business, Strategy (Bannerman & Thorogood, 2012)." }
    ],
    frameworkNames: [
      { acronym: "WBS", fullName: "Work Breakdown Structure", focus: "Hierarchical scope decomposition with the 100% Rule." },
      { acronym: "RTM", fullName: "Requirements Traceability Matrix", focus: "Bidirectional linkage from requirements to design and test cases." },
      { acronym: "MoSCoW", fullName: "Must, Should, Could, Won't", focus: "Scope prioritization technique developed by Dai Clegg (Oracle UK, 1994)." },
      { acronym: "PERT", fullName: "Program Evaluation Review Technique", focus: "Event-oriented network scheduling, forward/backward pass, critical path." },
      { acronym: "DoD", fullName: "Definition of Done", focus: "Team-agreed technical completion checklist (internal QA filter)." },
      { acronym: "ISO/IEC 25010", fullName: "Systems and Software Quality Requirements and Evaluation (SQuaRE)", focus: "Dual models: Quality-in-Use (5) and Product Quality (8)." }
    ],
    processes: [
      {
        name: "PERT Schedule Calculation Process",
        steps: [
          "1. Forward Pass: From Day 0 calculate EFT = EST + Duration; take max(EFT) at merges.",
          "2. Terminal Point: Identify minimum project duration as maximum EFT of terminal tasks.",
          "3. Backward Pass: From project completion calculate LST = LFT - Duration; take min(LST) at bursts.",
          "4. Slack Calculation: Compute Slack = LST - EST = LFT - EFT.",
          "5. Critical Path Identification: Trace the continuous path of tasks with zero slack."
        ],
        description: "Mathematical network technique determining project schedule baselines and float."
      },
      {
        name: "Work Organization Process",
        steps: [
          "1. Decompose scope into WBS hierarchy and apply 100% Rule.",
          "2. Construct Requirements Traceability Matrix linking requirements to tests.",
          "3. Prioritize requirements using Kano satisfaction and MoSCoW timebox boundaries.",
          "4. Sequence activities into precedence network and compute PERT critical path.",
          "5. Establish Definition of Done and schedule Quality Gates at stage boundaries."
        ],
        description: "End-to-end process of organizing IT project work from authorization to execution."
      }
    ],
    comparisons: unit2Comparisons,
    examTraps: [
      { trap: "Believing that the WBS replaces the Project Charter.", truth: "The Charter authorizes the project; the WBS organizes the work." },
      { trap: "Assuming milestones have duration or perform quality checks.", truth: "Milestones have ZERO duration and do not check quality; quality gates check quality." },
      { trap: "Believing that fulfilling basic Kano requirements delights customers.", truth: "Basic needs are taken for granted; absence causes outrage, but presence is merely neutral." },
      { trap: "Assuming omitting a Delighter causes customer complaints.", truth: "Absence of delighters causes zero dissatisfaction because customers never anticipated them." },
      { trap: "Attributing MoSCoW to Noriaki Kano or Henry Gantt.", truth: "MoSCoW was created by Dai Clegg of Oracle UK in 1994." },
      { trap: "Confusing Definition of Done with final customer acceptance.", truth: "DoD is an internal team QA filter; customer acceptance is external client sign-off." },
      { trap: "Confusing ISO 25010 Quality-in-Use (5) with Product Quality (8).", truth: "Quality-in-Use has 5 characteristics (S-E-F-E-C); Product Quality has 8 (F-P-U-R-S-C-P-M)." }
    ],
    memoryShortcuts: [
      { acronym: "S-E-F-E-C", meaning: "Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage", usage: "Five ISO/IEC 25010 Quality-in-Use characteristics." },
      { acronym: "F-P-U-R-S-C-P-M", meaning: "Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability", usage: "Eight ISO/IEC 25010 Product Quality characteristics." },
      { acronym: "M-S-C-W", meaning: "Must-have, Should-have, Could-have, Won't-have", usage: "Dai Clegg's 1994 prioritization categories." },
      { acronym: "EFT = EST + Dur", meaning: "Forward Pass formula", usage: "Earliest finish time (take MAX at merges)." },
      { acronym: "LST = LFT - Dur", meaning: "Backward Pass formula", usage: "Latest start time (take MIN at bursts)." }
    ]
  },
  importantQuestions: unit2ImportantQuestions,
  flashcards: unit2Flashcards,
  mcqs: unit2Mcqs,
  activeRecall: [
    { id: "u2-ar-01", question: "What is the 100% Rule in WBS decomposition?", answer: "Subordinate elements must represent exactly 100% of parent scope, neither more nor less.", keywords: ["100% Rule", "Subordinate", "Parent scope"] },
    { id: "u2-ar-02", question: "What is the duration of a project milestone?", answer: "Strictly zero duration (D = 0).", keywords: ["Zero duration", "D = 0"] },
    { id: "u2-ar-03", question: "Who created MoSCoW and in what year?", answer: "Dai Clegg of Oracle UK in 1994.", keywords: ["Dai Clegg", "Oracle UK", "1994"] },
    { id: "u2-ar-04", question: "What is the slack of an activity on the Critical Path?", answer: "Zero slack (Slack = 0).", keywords: ["Zero slack", "Slack = 0"] },
    { id: "u2-ar-05", question: "What is the difference between DoD and Customer Acceptance?", answer: "DoD is an internal team QA filter; Customer Acceptance is external client sign-off.", keywords: ["Internal team QA", "External client sign-off"] },
    { id: "u2-ar-06", question: "Name the five ISO/IEC 25010 Quality-in-Use characteristics.", answer: "Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage.", keywords: ["Satisfaction", "Effectiveness", "Freedom from risk", "Efficiency", "Context coverage"] }
  ],
  completionChecklist: [
    "Decompose project scope into a WBS and apply the 100% Rule",
    "Explain the purpose of the Requirements Traceability Matrix and WBS Dictionary",
    "Distinguish between Deliverables (tangible outputs) and Milestones (zero duration)",
    "Categorize tasks using the Urgency vs Importance Matrix (routine reporting = High Urgency, Low Importance)",
    "Apply the Kano Model (Basic, Performance, Delighter) and explain customer satisfaction curves",
    "Apply MoSCoW prioritization (Dai Clegg, 1994) and understand scope trade-offs under pressure",
    "Model dependencies with the four precedence types (FS, SS, FF, SF) and leads/lags",
    "Calculate PERT Forward Pass (EFT = EST + Dur; max at merge) and Backward Pass (LST = LFT - Dur; min at burst)",
    "Calculate Slack (LST - EST) and identify the Critical Path (zero slack)",
    "Explain the advantages and specific limitations of Gantt Charts (no resource quantities or costs)",
    "Define Definition of Done (DoD) and distinguish it from Customer Acceptance",
    "Detail the ISO/IEC 25010 Quality-in-Use (5) and Product Quality (8) models",
    "Explain Quality Gates (Kneuper, 2018) and Go/No-Go phase transition decisions"
  ]
};
