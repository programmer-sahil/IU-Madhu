import { UnitData } from "../../../../types";
import { unit6Mcqs } from "./mcqs";
import { unit6Flashcards } from "./flashcards";
import { unit6ImportantQuestions } from "./qa";
import { unit6Concepts, unit6SummarySections } from "./concepts";
import { unit6Comparisons, unit6CheatSheetComparisons } from "./comparisons";
import { unit6ExamTraps } from "./traps";
import { unit6Visuals } from "./visuals";
import { unit6MockExams } from "./mockExams";
import { unit6Scenarios } from "./scenarios";

export {
  unit6Mcqs,
  unit6Flashcards,
  unit6ImportantQuestions,
  unit6Concepts,
  unit6SummarySections,
  unit6Comparisons,
  unit6ExamTraps,
  unit6Visuals,
  unit6MockExams,
  unit6Scenarios
};

export const unit6Data: UnitData = {
  id: 6,
  code: "DLMBITPAM01-U06",
  title: "Organizing Large Projects",
  subtitle: "PMBOK Guide, PRINCE2, Multi-Project Management (Portfolio & PMO), Scaled Agile (SoS, LeSS, SAFe), and Methodology Selection.",
  estimatedTime: "4.0 hours",
  color: "from-indigo-600 to-purple-600",
  gradient: "linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)",
  badge: "Unit 6",
  overview: "Official curriculum for Unit 6 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Explores large-scale, enterprise, and multi-project governance frameworks. Deconstructs the PMBOK Guide across 5 Process Groups (2-24-8-11-2 = 47 processes) and 10 Knowledge Areas, distinguishing Project Scope from Product Scope. Details PRINCE2's 7-7-7 architecture (7 Principles, 7 Themes, 7 Processes), 4 Management Levels, Project Board triad (Executive, Senior User, Senior Supplier), and core governance tenets ('Manage by Stages' and 'Manage by Exception' across 6 tolerances). Analyzes Multi-Project Management hierarchies (Portfolio -> Programme -> Project) and the three structural PMO models (Supportive, Controlling, Directive). Evaluates scaled agile frameworks including Scrum of Scrums (SoS 4 questions), Large-Scale Scrum (LeSS single-source rules and LeSS Huge), and SAFe (Agile Release Train and CALMR DevOps). Concludes with organizational structures (Functional, Matrix, Projectized) and comprehensive methodology selection frameworks (Predictive vs Adaptive vs Hybrid).",
  summarySections: unit6SummarySections,
  keyConcepts: unit6Concepts,
  cheatSheet: {
    mustMemorize: [
      "PMBOK Process Distribution: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2) = EXACTLY 47 processes.",
      "Project Scope vs Product Scope: Product Scope = features and functions; Project Scope = all the work performed to deliver that product scope.",
      "PRINCE2 7-7-7 Structure: Exactly 7 Principles, 7 Themes, and 7 Processes.",
      "PRINCE2 Four Management Levels: Corporate/Programme -> Project Board -> Project Manager -> Team Managers.",
      "PRINCE2 Project Board Triad: Executive (Business/Funding/Accountable), Senior User (User needs & benefits), Senior Supplier (Technical delivery & resources).",
      "PRINCE2 Six Tolerances: Time, Cost, Quality, Scope, Risk, Benefits.",
      "Manage by Exception: Tolerances set across 6 variables. PM escalates via Exception Report only when a tolerance is breached.",
      "Manage by Stages: Minimum 2 stages (Initiation + Delivery). Stage boundaries require Board re-authorization of Business Case.",
      "Multi-Project Hierarchy: Portfolio ('doing right work' / strategy) -> Programme ('benefits realization' / synergy) -> Project ('doing work right' / outputs).",
      "Three PMO Types: Supportive (Low control, consultative), Controlling (Moderate control, compliance auditing), Directive (High control, PMs report to PMO).",
      "Scrum of Scrums: Ambassadors meet (~15 mins) answering 4 questions. Question 4: 'Are you putting any impediment in the way of other teams?'",
      "LeSS Single-Source Rules: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, ONE Increment (for up to 8 feature teams).",
      "SAFe Agile Release Train (ART): Long-lived team-of-teams (50 to 125 people) delivering value on synchronized cadence.",
      "SAFe CALMR DevOps: Culture, Automation, Lean Flow, Measurement, Recovery.",
      "Organizational Structures: Functional (PM has little/no authority), Weak Matrix (FM dominates), Balanced Matrix (shared), Strong Matrix (PM dominates), Projectized (PM has total authority).",
      "Iterative vs Incremental: Iterative = all features early at low fidelity, refined together; Incremental = few features at 100% full fidelity, added over time; Agile = both."
    ],
    coreDefinitions: [
      {
        term: "PMBOK Guide",
        definition: "Global knowledge standard published by PMI structuring project management into 5 process groups, 10 knowledge areas, and 47 processes.",
        examNote: "Planning contains 24 of the 47 processes."
      },
      {
        term: "PRINCE2",
        definition: "Process-based project management methodology developed by the UK government structured around 7 principles, 7 themes, and 7 processes.",
        examNote: "Signature triad of sevens (7-7-7)."
      },
      {
        term: "Project Board",
        definition: "PRINCE2 directing body holding overall accountability, representing Executive, Senior User, and Senior Supplier.",
        examNote: "The PM is not a member of the Project Board; the PM reports to the Board."
      },
      {
        term: "Programme",
        definition: "A group of related projects managed in a coordinated way to obtain synergistic benefits not available from managing them individually.",
        examNote: "Focuses on benefit realization rather than single project outputs."
      },
      {
        term: "Large-Scale Scrum (LeSS)",
        definition: "Agile scaling framework created by Craig Larman and Bas Vodde based on 'More with LeSS', keeping 1 PO and 1 Backlog for up to 8 teams.",
        examNote: "LeSS Huge adds Area Product Owners for >8 teams."
      }
    ],
    importantNumbers: [
      { number: "47", label: "PMBOK Total Processes", context: "2 Initiating, 24 Planning, 8 Executing, 11 Monitoring & Controlling, 2 Closing." },
      { number: "5", label: "PMBOK Process Groups", context: "Initiating, Planning, Executing, Monitoring & Controlling, Closing." },
      { number: "10", label: "PMBOK Knowledge Areas", context: "Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder." },
      { number: "7", label: "PRINCE2 Principles", context: "Universal rules required for PRINCE2 compliance." },
      { number: "7", label: "PRINCE2 Themes", context: "Continuous management aspects throughout project." },
      { number: "7", label: "PRINCE2 Processes", context: "SU, DP, IP, CS, MP, SB, CP." },
      { number: "4", label: "PRINCE2 Management Levels", context: "Corporate/Programme, Project Board, Project Manager, Team Managers." },
      { number: "6", label: "PRINCE2 Tolerances", context: "Time, Cost, Quality, Scope, Risk, Benefits." },
      { number: "3", label: "PMO Structural Types", context: "Supportive (Low), Controlling (Moderate), Directive (High)." },
      { number: "4", label: "Scrum of Scrums Questions", context: "Includes the 4th bilateral impediment question." },
      { number: "8", label: "Basic LeSS Maximum Teams", context: "Up to 8 feature teams supported by 1 single Product Owner." },
      { number: "50 to 125", label: "SAFe ART Headcount", context: "Team-of-teams headcount in an Agile Release Train." }
    ],
    frameworkNames: [
      { acronym: "PMBOK", fullName: "Project Management Body of Knowledge", focus: "Global standard published by PMI covering 47 processes across 10 knowledge areas." },
      { acronym: "PRINCE2", fullName: "PRojects IN Controlled Environments", focus: "Process-based methodology from the UK government based on 7 principles, 7 themes, and 7 processes." },
      { acronym: "PMO", fullName: "Project Management Office", focus: "Organizational entity supporting, controlling, or directing enterprise projects." },
      { acronym: "SoS", fullName: "Scrum of Scrums", focus: "Inter-team coordination meeting of ambassadors answering 4 dependency questions." },
      { acronym: "LeSS", fullName: "Large-Scale Scrum", focus: "Scaling Scrum by descaling organization, keeping 1 PO and 1 Backlog for up to 8 teams." },
      { acronym: "SAFe", fullName: "Scaled Agile Framework", focus: "Enterprise multi-tiered framework centered around the Agile Release Train and CALMR DevOps." },
      { acronym: "ART", fullName: "Agile Release Train", focus: "Long-lived team of agile teams (50-125 people) delivering value on synchronized cadence in SAFe." },
      { acronym: "CALMR", fullName: "Culture, Automation, Lean Flow, Measurement, Recovery", focus: "SAFe's five-element DevOps and continuous delivery mindset." }
    ],
    processes: [
      {
        name: "PMBOK 5 Process Groups",
        steps: [
          "1. Initiating (2): Develop Project Charter, Identify Stakeholders",
          "2. Planning (24): Scope, Schedule, Cost, Quality, HR, Comms, Risk, Procurement, Stakeholder",
          "3. Executing (8): Direct and Manage Project Work, Quality Assurance, Team Acquisition",
          "4. Monitoring & Controlling (11): Integrated Change Control, Scope/Schedule/Cost Control",
          "5. Closing (2): Close Project or Phase, Close Procurements"
        ],
        description: "Official 47-process matrix structuring project delivery under the PMBOK Guide."
      },
      {
        name: "PRINCE2 Governance Cycle",
        steps: [
          "1. Directing (Project Board): Authorizes initiation, stage boundaries, and project closure",
          "2. Managing (Project Manager): Daily coordination within stage tolerance limits",
          "3. Delivering (Team Manager): Work package execution and delivery verification"
        ],
        description: "Hierarchical management structure driven by Management by Exception and Business Justification."
      }
    ],
    comparisons: unit6CheatSheetComparisons,
    examTraps: [
      { trap: "Thinking PMBOK has 49 or 50 processes in the IU exam.", truth: "The official course book matrix defines exactly 47 processes (5th Edition syllabus)." },
      { trap: "Assuming the Project Manager leads the PRINCE2 Project Board.", truth: "The Executive chairs the Project Board; the PM reports TO the Board." },
      { trap: "Confusing Project Scope with Product Scope.", truth: "Product scope = features and functions; Project scope = all the work required to deliver that product." },
      { trap: "Thinking LeSS allows multiple Product Owners for basic scaling.", truth: "Basic LeSS enforces EXACTLY ONE Product Owner and ONE Product Backlog for up to 8 feature teams." }
    ],
    memoryShortcuts: [
      { acronym: "2-24-8-11-2", meaning: "Initiating (2), Planning (24), Executing (8), M&C (11), Closing (2)", usage: "Distribution of PMBOK 47 processes across 5 process groups." },
      { acronym: "7-7-7", meaning: "7 Principles, 7 Themes, 7 Processes", usage: "Core architecture of PRINCE2." },
      { acronym: "CALMR", meaning: "Culture, Automation, Lean Flow, Measurement, Recovery", usage: "SAFe DevOps mindset." }
    ]
  },
  importantQuestions: unit6ImportantQuestions,
  flashcards: unit6Flashcards,
  mcqs: unit6Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Detail the PMBOK 5 Process Groups (2-24-8-11-2 = 47 processes) and 10 Knowledge Areas",
    "Differentiate Product Scope (features/functions) from Project Scope (work performed)",
    "Explain the PMBOK Performance Measurement Baseline (PMB) and Earned Value Management",
    "Detail the Change Control workflow and Change Control Board (CCB) authority",
    "Explain PRINCE2's 7-7-7 architecture (7 Principles, 7 Themes, 7 Processes)",
    "Detail the 4 PRINCE2 Management Levels and Project Board triad (Executive, Senior User, Senior Supplier)",
    "Apply 'Manage by Stages' and 'Manage by Exception' across the 6 tolerance variables",
    "Describe PRINCE2 Product-Based Planning (PBS, Product Descriptions, Product Flow Diagram)",
    "Compare and contrast PMBOK and PRINCE2 as complementary standards",
    "Deconstruct the Multi-Project hierarchy (Portfolio, Programme, Project) and 3 PMO models (Supportive, Controlling, Directive)",
    "Explain Scrum of Scrums (SoS) mechanics and the bilateral 4th impediment question",
    "Analyze Large-Scale Scrum (LeSS single-source rules: 1 PO, 1 Backlog for 8 teams) and LeSS Huge (Area Product Owners)",
    "Detail the SAFe Agile Release Train (ART, 50-125 people) and CALMR DevOps mindset",
    "Contrast PM authority across Functional, Matrix (Weak, Balanced, Strong), and Projectized structures",
    "Differentiate Iterative (low fidelity all features), Incremental (full fidelity few features), and Agile lifecycles",
    "Apply the comprehensive methodology selection framework (Predictive, Adaptive, Hybrid)"
  ]
};
