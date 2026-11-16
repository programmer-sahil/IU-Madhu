import { UnitData } from "../../../../types";
import { unit1Mcqs } from "./mcqs";
import { unit1Flashcards } from "./flashcards";
import { unit1ImportantQuestions } from "./qa";
import { unit1Concepts, unit1SummarySections } from "./concepts";
import { unit1ExamTraps } from "./traps";
import { unit1Visuals } from "./visuals";
import { unit1MockExams } from "./mockExams";

export { unit1Mcqs, unit1Flashcards, unit1ImportantQuestions, unit1Concepts, unit1SummarySections, unit1ExamTraps, unit1Visuals, unit1MockExams };

export const unit1Data: UnitData = {
  id: 1,
  code: "DLMBITPAM01-U01",
  title: "Introduction: Characteristics of IT Projects",
  subtitle: "Defining IT projects, constraints, roles, project phases, risks, and the competencies of an IT project manager.",
  estimatedTime: "2 hours",
  color: "from-indigo-600 to-violet-700",
  gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
  badge: "Unit 1",
  overview: "Official curriculum for Unit 1 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers fundamental definitions, Iron Triangle & Quintuple constraints, large-project roles (PMB vs TMB), generic project phases, project charter, I-A-D-M risk management, M-A-T-A risk responses, and project manager competencies.",
  summarySections: unit1SummarySections,
  keyConcepts: unit1Concepts,
  cheatSheet: {
    mustMemorize: [
      "Project = Temporary endeavor undertaken to create a unique product, service, or result.",
      "Operations = Ongoing, repetitive activities sustaining business functions.",
      "Iron Triangle = Scope, Schedule, Cost.",
      "Quintuple Constraints = Schedule, Cost, Context, Technical, Financing.",
      "Sociotechnical System = Hardware + Software + Human/Social Interaction.",
      "Hierarchy: Sponsor/PMO → PM → Technical Coordinator → WPL → Task Leader → Team Member.",
      "PMB = Overall/nontechnical governance; TMB = Technical governance & milestone audits.",
      "Resource Pooling: Improves specialist utilization but reduces efficiency due to repeated context switching.",
      "Five Phases: Conception/Initiation, Definition/Planning, Launch/Execution, Monitor/Control, Termination.",
      "Monitor & Control runs in parallel with much of project execution.",
      "Signing the Project Charter officially authorizes the project and commits resources.",
      "Charter Formula: WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO.",
      "Risk = Uncertain event affecting objectives positively (Opportunity) or negatively (Threat).",
      "Threshold Rule: Below is acceptable/tolerable; above is NOT tolerated (action required).",
      "Risk Process (I-A-D-M): Identify → Analyze → Decide → Monitor.",
      "Risk Responses (M-A-T-A): Mitigate, Accept, Transfer, Avoid.",
      "PM Competencies: Understanding domain problems and continuous learning > pure coding specialization.",
      "Lifecycle PM Skills: HR acquisition early; team management during execution; conflict management throughout all phases.",
      "Project Triggers = Early warning indicators/symptoms prompting risk response."
    ],
    coreDefinitions: [
      { term: "Project", definition: "A temporary endeavor undertaken to create a unique product, service, or result.", examNote: "Temporary refers to endeavor; deliverable is durable." },
      { term: "Operations", definition: "Ongoing and repetitive organizational activities sustaining day-to-day business continuity.", examNote: "Contrast with temporary project." },
      { term: "Sociotechnical System", definition: "An interconnected system linking hardware, software, and human/social behavior.", examNote: "Tablet computer example." },
      { term: "Project Charter", definition: "Foundational initiation document authorized by the Sponsor establishing the project.", examNote: "Signing officially authorizes project." },
      { term: "Project Risk", definition: "An uncertain event/condition that, if it occurs, has a positive (opportunity) or negative (threat) effect.", examNote: "Positive risk = opportunity." },
      { term: "Risk Threshold", definition: "Specific boundary: below is acceptable, above is not tolerated.", examNote: "Governs mandatory intervention." },
      { term: "Project Triggers", definition: "Early warning indicators/symptoms signaling that an identified risk is emerging.", examNote: "Activates contingency plan." }
    ],
    importantNumbers: [
      { number: "3", label: "Iron Triangle Constraints", context: "Scope, Schedule, Cost." },
      { number: "5", label: "Quintuple Project Constraints", context: "Schedule, Cost, Context, Technical, Financing." },
      { number: "5", label: "Generic Project Phases", context: "Initiation, Planning, Execution, Monitor/Control, Termination." },
      { number: "4", label: "Risk Management Steps", context: "Identify, Analyze, Decide, Monitor (I-A-D-M)." },
      { number: "4", label: "Risk Response Strategies", context: "Mitigate, Accept, Transfer, Avoid (M-A-T-A)." }
    ],
    frameworkNames: [
      { acronym: "I-A-D-M", fullName: "Risk Management Process", focus: "Identify → Analyze → Decide → Monitor." },
      { acronym: "M-A-T-A", fullName: "Risk Response Strategies", focus: "Mitigate, Accept, Transfer, Avoid." },
      { acronym: "PMB", fullName: "Project Management Board", focus: "Overall and nontechnical governance, progress, budget, deviations." },
      { acronym: "TMB", fullName: "Technical Management Board", focus: "Technical governance, architecture, technical disputes, milestone audits." },
      { acronym: "PMO", fullName: "Project Management Office", focus: "Organizational support, standardized templates, cross-project resource coordination." }
    ],
    processes: [
      {
        name: "I-A-D-M Risk Lifecycle",
        steps: [
            "1. Identify: Detect and catalog uncertainties in Risk Register",
            "2. Analyze: Evaluate Probability × Magnitude of impact/benefit",
            "3. Decide: Select M-A-T-A response strategy and allocate reserves",
            "4. Monitor: Continuously track project triggers and register updates"
        ],
        description: "Continuous risk management process across the IT project lifecycle."
      },
      {
        name: "Generic Project Lifecycle",
        steps: [
            "1. Conception/Initiation: Customer need, feasibility, sponsor appointed, charter signed",
            "2. Definition/Planning: Baselines established (scope/schedule/cost), subsidiary plans",
            "3. Launch/Execution: Deliverables realized, team acquired, quality assurance",
            "4. Monitor/Control: Runs in parallel, measuring metrics, controlling variances",
            "5. Termination: Final acceptance, staff released, lessons learned, closure"
        ],
        description: "Five generic phases of an IT project."
      }
    ],
    comparisons: [
      {
        conceptA: "Project",
        conceptB: "Operations",
        comparisonPoints: [
          { criterion: "Duration", detailA: "Temporary: definite start and end date", detailB: "Ongoing: permanent and indefinite" },
          { criterion: "Output", detailA: "Unique product, service, or result", detailB: "Standardized, repetitive goods or services" },
          { criterion: "Purpose", detailA: "Strategic organizational change/innovation", detailB: "Business continuity and daily functions" }
        ]
      },
      {
        conceptA: "PMB",
        conceptB: "TMB",
        comparisonPoints: [
          { criterion: "Jurisdiction", detailA: "Overall progress, budget, nontechnical disputes", detailB: "Technical architecture, engineering conflicts" },
          { criterion: "Partner", detailA: "Advises Project Manager", detailB: "Advises Technical Coordinator" },
          { criterion: "Audits", detailA: "Schedule and cost baseline variances", detailB: "Deliverable technical quality against milestone criteria" }
        ]
      }
    ],
    examTraps: [
      { trap: "Believing temporary means the software will only last a short time.", truth: "Temporary applies to the project endeavor; the software deliverable is intended to be durable." },
      { trap: "Assuming risk is only negative.", truth: "Positive risk is called an Opportunity and should be maximized." },
      { trap: "Thinking Monitor & Control is a short phase at the end.", truth: "Monitor & Control runs in parallel with much of the project work." },
      { trap: "Confusing PMB and TMB.", truth: "PMB = overall/nontechnical governance. TMB = technical governance." },
      { trap: "Thinking the PM self-authorizes the project.", truth: "The Project Sponsor signs the Project Charter to officially authorize the project." }
    ],
    memoryShortcuts: [
      { acronym: "WHY+WHAT+RISK+WHEN+MONEY+APPROVAL+WHO", meaning: "Project Charter essential contents", usage: "Memorize for charter descriptive exam questions." },
      { acronym: "I-A-D-M", meaning: "Identify, Analyze, Decide, Monitor", usage: "Four-step continuous risk management lifecycle." },
      { acronym: "M-A-T-A", meaning: "Mitigate, Accept, Transfer, Avoid", usage: "Four canonical risk response strategies." }
    ]
  },
  importantQuestions: unit1ImportantQuestions,
  flashcards: unit1Flashcards,
  mcqs: unit1Mcqs,
  activeRecall: [
    { id: "u1-ar-01", question: "What two words distinguish a project from operations?", answer: "Temporary and unique.", keywords: ["Temporary", "Unique"] },
    { id: "u1-ar-02", question: "Name the five Quintuple constraints in the course book.", answer: "Schedule, Cost, Context, Technical, Financing.", keywords: ["Schedule", "Cost", "Context", "Technical", "Financing"] },
    { id: "u1-ar-03", question: "Which governance board handles unresolved technical problems?", answer: "The Technical Management Board (TMB).", keywords: ["TMB", "Technical Management Board"] },
    { id: "u1-ar-04", question: "What officially authorizes a project to exist?", answer: "Signing the Project Charter by the Project Sponsor.", keywords: ["Signing", "Project Charter", "Sponsor", "Authorizes"] },
    { id: "u1-ar-05", question: "What are the four risk responses in M-A-T-A?", answer: "Mitigate, Accept, Transfer, Avoid.", keywords: ["Mitigate", "Accept", "Transfer", "Avoid"] }
  ],
  completionChecklist: [
    "Define a project and distinguish it from ongoing operations",
    "Explain the Iron Triangle and Quintuple constraints (Schedule, Cost, Context, Technical, Financing)",
    "Explain why IT systems are sociotechnical systems",
    "Draw the large-project hierarchy and distinguish PMB from TMB",
    "Explain resource pooling utilization vs efficiency loss from context switching",
    "Name the five generic project phases and explain parallel monitoring",
    "State the contents of a Project Charter and explain its authorization effect",
    "Define project risk, threat, and opportunity",
    "Execute the I-A-D-M risk management process and M-A-T-A responses",
    "Distinguish soft and hard PM skills and explain lifecycle skill shifts"
  ]
};
