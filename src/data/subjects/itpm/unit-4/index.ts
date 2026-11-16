import { UnitData } from "../../../../types";
import { unit4Mcqs } from "./mcqs";
import { unit4Flashcards } from "./flashcards";
import { unit4ImportantQuestions } from "./qa";
import { unit4Concepts, unit4SummarySections } from "./concepts";
import { unit4Comparisons } from "./comparisons";
import { unit4ExamTraps } from "./traps";
import { unit4Visuals } from "./visuals";
import { unit4MockExams } from "./mockExams";
import { unit4Scenarios } from "./scenarios";

export {
  unit4Mcqs,
  unit4Flashcards,
  unit4ImportantQuestions,
  unit4Concepts,
  unit4SummarySections,
  unit4Comparisons,
  unit4ExamTraps,
  unit4Visuals,
  unit4MockExams,
  unit4Scenarios
};

export const unit4Data: UnitData = {
  id: 4,
  code: "DLMBITPAM01-U04",
  title: "The Human Factor: Leadership, Culture, Stakeholders, and Conflict",
  subtitle: "Vision Keeping, transformational vs transactional leadership, 4 project cultures, Power-Interest Grid, Salience Model, RACI matrix, 5 conflict styles, and 4-phase negotiation spiral.",
  estimatedTime: "3.5 hours",
  color: "from-purple-600 to-pink-600",
  gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
  badge: "Unit 4",
  overview: "Official curriculum for Unit 4 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Explores the sociotechnical human factors governing IT project success. Covers Vision Keeping (Vision -> Mission -> Strategy cascade), transformational vs transactional leadership, the Competing Values Framework (Clan, Adhocracy, Hierarchy, Market) and indirect cultural mechanisms, comprehensive stakeholder management (sources, hard vs soft register data, Power-Interest Grid, Mitchell-Agle-Wood Salience Model, RACI matrix, 5 engagement levels), and conflict management (primary IT conflict sources, 5 conflict-resolution styles, 4-phase negotiation spiral, e-negotiation risks like flaming, and proactive conflict prevention architecture).",
  summarySections: unit4SummarySections,
  keyConcepts: unit4Concepts,
  cheatSheet: {
    mustMemorize: [
      "Vision = 'Where we want to be'; Mission = 'What we do and why'; Strategy = 'How we get there'.",
      "Vision Keeping: Continuously reminding and aligning team members with overarching purpose.",
      "Blended Leadership: Transformational (inspiration, intellectual stimulation) + Transactional (contracts, milestones, compliance).",
      "Four Cultures (Competing Values): Clan (internal/flexibility), Adhocracy (external/flexibility), Hierarchy (internal/control), Market (external/control).",
      "Indirect Culture Mechanisms: Symbols, rituals, stories/legends, behavioral role-modeling, recognition.",
      "Stakeholder Register: Hard data (objective, public) vs Soft data (confidential politics, expectations, fears).",
      "Power-Interest Grid: High Power/High Interest (Manage Closely); High Power/Low Interest (Keep Satisfied); Low Power/High Interest (Keep Informed); Low Power/Low Interest (Monitor).",
      "Salience Model (3 dimensions): Power, Legitimacy, Urgency (Mitchell, Agle & Wood 1997).",
      "Salience 7 Classes: Latent (Dormant, Discretionary, Demanding); Expectant (Dominant, Dangerous, Dependent); Definite (Power + Legitimacy + Urgency).",
      "Dangerous Stakeholder = Power + Urgency without Legitimacy (may resort to coercion or sabotage).",
      "RACI Matrix: Responsible (doer), Accountable (sole owner/approver), Consulted (two-way input), Informed (one-way update).",
      "RACI Golden Rule: Exactly ONE person Accountable (A) per deliverable. Never multiple.",
      "5 Engagement Levels: Unaware -> Resistant -> Neutral -> Supportive -> Leading.",
      "Primary IT Conflict Sources: Schedules and resource allocation historically dominate.",
      "5 Conflict Styles: Collaborate (Win-Win), Compromise (Give-and-Take), Force (Win-Lose), Smooth (Lose-Win), Withdraw (No Resolution).",
      "Collaborate is the true Win-Win standard; Compromise involves mutual sacrifice.",
      "4 Negotiation Phases: Intelligence -> Perception -> Strategy -> Communication (cyclical spiral).",
      "E-Negotiation Risks: Lean media strips non-verbal cues, delays trust, and risks aggressive 'flaming'.",
      "Proactive Prevention: Unambiguous RACI, Team Charter ground rules, blameless retrospectives."
    ],
    coreDefinitions: [
      { term: "Vision Keeping", definition: "Continuous leadership activity reminding and steering project members toward the overarching long-term vision.", examNote: "Prevents technical teams getting lost in tactical weeds." },
      { term: "Clan Culture", definition: "Internal-focus and flexible organizational culture prioritizing cohesion, collaboration, mentoring, and shared trust.", examNote: "Contrasts with Adhocracy (external innovation)." },
      { term: "Stakeholder Salience", definition: "The degree to which project managers give priority to competing stakeholder claims based on Power, Legitimacy, and Urgency.", examNote: "Mitchell, Agle & Wood (1997) framework." },
      { term: "Dangerous Stakeholder", definition: "A stakeholder with coercive Power and Urgent claims who lacks legal or moral Legitimacy.", examNote: "Power + Urgency without Legitimacy." },
      { term: "Accountable (RACI)", definition: "The single individual who possesses final approval authority and is held solely answerable for task completion.", examNote: "Exactly ONE Accountable per task." },
      { term: "Collaborate / Problem-Solve", definition: "Conflict resolution approach confronting root causes directly to synthesize win-win consensus.", examNote: "Takes time but builds lasting commitment." },
      { term: "Negotiation Spiral", definition: "Non-linear 4-stage process cycling through Intelligence, Perception, Strategy, and Communication.", examNote: "Early focus is on Intelligence and Perception." },
      { term: "Flaming", definition: "Hostile, uninhibited aggressive communication resulting from physical distance and lack of non-verbal cues in e-negotiation.", examNote: "Major risk in distributed IT projects." }
    ],
    importantNumbers: [
      { number: "3", label: "Strategic Hierarchy Levels", context: "Vision ('Where'), Mission ('What/Why'), Strategy ('How')." },
      { number: "4", label: "Project Culture Types", context: "Clan, Adhocracy, Market, Hierarchy (Competing Values Framework)." },
      { number: "4", label: "Power-Interest Quadrants", context: "Manage Closely, Keep Satisfied, Keep Informed, Monitor." },
      { number: "3", label: "Salience Attributes", context: "Power, Legitimacy, Urgency." },
      { number: "7", label: "Salience Stakeholder Classes", context: "Dormant, Discretionary, Demanding, Dominant, Dangerous, Dependent, Definite." },
      { number: "1", label: "Max Accountables per Task", context: "Exactly ONE person Accountable (A) in RACI matrix." },
      { number: "5", label: "Stakeholder Engagement Levels", context: "Unaware, Resistant, Neutral, Supportive, Leading." },
      { number: "5", label: "Conflict-Resolution Techniques", context: "Collaborate, Compromise, Force, Smooth, Withdraw." },
      { number: "4", label: "Negotiation Spiral Phases", context: "Intelligence -> Perception -> Strategy -> Communication." }
    ],
    frameworkNames: [
      { acronym: "CVF", fullName: "Competing Values Framework", focus: "Four organizational/project culture archetypes (Clan, Adhocracy, Market, Hierarchy)." },
      { acronym: "P-I Grid", fullName: "Power-Interest Matrix", focus: "Stakeholder engagement prioritization based on influence and concern." },
      { acronym: "Salience", fullName: "Stakeholder Salience Model", focus: "Mitchell, Agle & Wood (1997) dynamic classification (Power, Legitimacy, Urgency)." },
      { acronym: "RACI", fullName: "Linear Responsibility Chart", focus: "Clarifies governance: Responsible, Accountable, Consulted, Informed." },
      { acronym: "SEAM", fullName: "Stakeholder Engagement Assessment Matrix", focus: "Identifies C (Current) vs D (Desired) engagement gaps." },
      { acronym: "I-P-S-C", fullName: "Negotiation Spiral Model", focus: "Intelligence -> Perception -> Strategy -> Communication." }
    ],
    processes: [
      {
        name: "Stakeholder Engagement Workflow",
        steps: [
          "1. Identify stakeholders from Charter, contracts, EEFs, and OPAs",
          "2. Compile Stakeholder Register documenting hard data and confidential soft data",
          "3. Classify using Power-Interest Grid (4 quadrants) and Salience Model (7 classes)",
          "4. Map Current (C) vs Desired (D) engagement in Stakeholder Engagement Matrix",
          "5. Define governance and task ownership using RACI Matrix (exactly 1 'A')",
          "6. Execute communication plans and continuously update register across sprints"
        ],
        description: "Complete stakeholder identification, analysis, and engagement process."
      },
      {
        name: "Four-Phase Negotiation Process",
        steps: [
          "1. Intelligence Phase: Collect factual data, technical constraints, and define BATNA",
          "2. Perception Phase: Assess subjective framing, psychological biases, and emotional triggers",
          "3. Strategy Phase: Formulate concession packages, non-negotiables, and trade-off options",
          "4. Communication Phase: Conduct direct interactive exchange and secure formal agreement",
          "5. Spiral Feedback: Cycle back to Intelligence/Perception if impasse occurs"
        ],
        description: "Dynamic negotiation spiral for IT project disputes."
      }
    ],
    comparisons: [
      {
        conceptA: "Transformational Leadership",
        conceptB: "Transactional Leadership",
        comparisonPoints: [
          { criterion: "Focus", detailA: "Inspires vision, innovation, and intrinsic motivation", detailB: "Enforces contracts, milestones, and contingent rewards" },
          { criterion: "Intervention", detailA: "Intellectual stimulation and coaching", detailB: "Management by exception upon deviation" }
        ]
      },
      {
        conceptA: "Collaborate / Problem-Solve",
        conceptB: "Compromise / Reconcile",
        comparisonPoints: [
          { criterion: "Outcome", detailA: "True Win-Win; synthesizes perspectives and root causes", detailB: "Give-and-Take / Lose-Lose; both parties forfeit aspects" },
          { criterion: "Commitment", detailA: "High long-term consensus and team commitment", detailB: "Workable middle; residual tension may linger" }
        ]
      }
    ],
    examTraps: [
      { trap: "Multiple Accountables in RACI", truth: "Exactly ONE person must be Accountable (A) per task." },
      { trap: "Treating Compromise as Win-Win", truth: "Collaborate is Win-Win; Compromise involves mutual sacrifice." },
      { trap: "Believing Dangerous stakeholders have Legitimacy", truth: "Dangerous stakeholders have Power + Urgency but lack Legitimacy." },
      { trap: "Confusing High Power/Low Interest strategy", truth: "Keep Satisfied, NOT Keep Informed." }
    ],
    memoryShortcuts: [
      { acronym: "ONE 'A'", meaning: "Exactly one Accountable person per RACI row", usage: "RACI matrix questions" },
      { acronym: "I-P-S-C", meaning: "Intelligence -> Perception -> Strategy -> Communication", usage: "Negotiation phases" },
      { acronym: "P-L-U", meaning: "Power, Legitimacy, Urgency", usage: "Salience Model dimensions" },
      { acronym: "M-K-K-M", meaning: "Manage Closely, Keep Satisfied, Keep Informed, Monitor", usage: "Power-Interest quadrants" }
    ]
  },
  importantQuestions: unit4ImportantQuestions,
  flashcards: unit4Flashcards,
  mcqs: unit4Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Differentiate Vision, Mission, and Strategy and explain Vision Keeping",
    "Compare Transformational and Transactional leadership and justify a blended approach",
    "Identify the 4 project cultures and explain indirect cultural mechanisms",
    "Classify stakeholders on the Power-Interest Grid (4 quadrants) and apply strategies",
    "Analyze the Stakeholder Salience Model (7 classes across Power, Legitimacy, Urgency)",
    "Apply RACI matrix rules, ensuring exactly ONE person is Accountable",
    "Select appropriate conflict-resolution techniques (Collaborate, Compromise, Force, Smooth, Withdraw)",
    "Apply the 4-phase negotiation spiral (I-P-S-C) and mitigate e-negotiation risks (flaming)"
  ]
};
