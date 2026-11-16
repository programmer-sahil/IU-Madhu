import { KeyConcept, UnitSummarySection } from "../../../../types";

export const unit2Concepts: KeyConcept[] = [
  {
    id: "itpm-u2-c01",
    term: "Work Breakdown Structure (WBS)",
    simpleExplanation: "A tree structure breaking the project down into smaller, assignable work packages and tasks.",
    examDefinition: "A hierarchical decomposition of the total project scope into manageable, assignable, and measurable components. Progresses from Level 1 (project title) through Level 2 (phases/deliverables), Level 3 (work packages), to Level 4 (elementary tasks).",
    whyItMatters: "Provides the foundational baseline against which schedule, cost, resources, and scope are estimated, budgeted, and monitored.",
    howItWorks: "Detailed estimates are created at the lowest task level and rolled upward. The 100% Rule ensures that child components encompass exactly 100% of the parent scope without omission or extraneous work.",
    examKeywords: ["Hierarchical decomposition", "Manageable components", "Work packages", "Elementary tasks", "100% Rule", "Bottom-up estimation"],
    commonTrap: "WBS is a scope decomposition tool, not an organizational chart or linear chronological schedule.",
    category: "2.1 WBS & Scope"
  },
  {
    id: "itpm-u2-c02",
    term: "Requirements Traceability Matrix (RTM)",
    simpleExplanation: "A grid linking business requirements to design components, deliverables, and test cases.",
    examDefinition: "A bidirectional grid establishing traceability from business needs and stakeholder requirements through system architecture, work packages, code deliverables, to verification test cases.",
    whyItMatters: "Ensures complete requirement coverage, proves compliance, prevents gold plating (unauthorized scope), and enables rapid change impact analysis.",
    howItWorks: "Each requirement is mapped forward to code and tests, and backward to business goals. If a requirement is modified, dependent modules and test suites are immediately flagged.",
    examKeywords: ["Requirements Traceability Matrix", "Bidirectional link", "Gold plating", "Impact analysis", "Verification"],
    commonTrap: "Do not view the traceability matrix as purely a test plan; it governs scope and change impact.",
    category: "2.1 WBS & Scope"
  },
  {
    id: "itpm-u2-c03",
    term: "Deliverable vs Milestone",
    simpleExplanation: "A deliverable is a tangible output produced; a milestone is a zero-duration point in time.",
    examDefinition: "A deliverable is a verifiable product, service, or document produced by project activities requiring duration and budget. A milestone is a significant moment or reference event in time strictly having zero duration (D = 0).",
    whyItMatters: "Prevents confusing project outputs that require active work with schedule timeline markers.",
    howItWorks: "Deliverables are evaluated against acceptance criteria. Milestones mark the achievement of transition states but do NOT themselves perform quality checks.",
    examKeywords: ["Deliverable", "Milestone", "Zero duration", "Tangible output", "Reference event"],
    commonTrap: "Milestones strictly have ZERO duration; if an item lasts 2 weeks, it is a task or work package.",
    category: "2.1 WBS & Scope"
  },
  {
    id: "itpm-u2-c04",
    term: "Kano Customer Satisfaction Model",
    simpleExplanation: "A model showing that different requirement types satisfy customers in non-linear ways.",
    examDefinition: "Created by Noriaki Kano to challenge the assumption that customer satisfaction is proportional to feature improvement. It divides requirements into Basic (must-be), Performance (linear satisfier), and Delighters (attractive attributes).",
    whyItMatters: "Prevents development teams from wasting resources on delighters while neglecting basic operational necessities.",
    howItWorks: "Basic needs are taken for granted (absence causes disaster; presence is neutral). Performance needs increase satisfaction linearly. Delighters produce exponential delight (absence causes zero dissatisfaction).",
    examKeywords: ["Kano Model", "Noriaki Kano", "Basic requirements", "Performance needs", "Delighters", "Non-linear satisfaction"],
    commonTrap: "Absence of Delighters causes NO dissatisfaction because customers never anticipated them.",
    category: "2.2 Prioritization"
  },
  {
    id: "itpm-u2-c05",
    term: "MoSCoW Prioritization Method",
    simpleExplanation: "A scope prioritization method: Must-have, Should-have, Could-have, Won't-have.",
    examDefinition: "Developed by Dai Clegg of Oracle UK in 1994 for software development. Uses words instead of numbers to foster collaborative discussion on business value.",
    whyItMatters: "Provides an unambiguous rule for scope trade-offs under schedule or financial pressure.",
    howItWorks: "Must-haves are non-negotiable minimums. Should-haves have temporary workarounds. Could-haves are dropped under pressure. Won't-haves establish explicit release boundaries for the current timebox.",
    examKeywords: ["MoSCoW", "Dai Clegg", "Oracle UK 1994", "Must-have", "Should-have", "Could-have", "Won't-have", "Timebox"],
    commonTrap: "Under schedule pressure, sacrifice Could-haves first, then Should-haves; NEVER drop Must-haves.",
    category: "2.2 Prioritization"
  },
  {
    id: "itpm-u2-c06",
    term: "Urgency vs Importance Matrix",
    simpleExplanation: "A 4-quadrant decision framework separating immediate deadline panic from strategic value.",
    examDefinition: "The Eisenhower matrix applied to project management. Urgent tasks provoke reactive, defensive knee-jerk responses; important tasks contribute to long-term project goals through proactive planning.",
    whyItMatters: "Protects teams from being trapped in perpetual fire-fighting mode.",
    howItWorks: "High+High = Crises (immediate focus). Low Urgency+High Importance = Proactive Planning (strategic goal focus). High Urgency+Low Importance = Interruptions (e.g. routine external reporting; delegate/streamline). Low+Low = Distractions (eliminate).",
    examKeywords: ["Urgency", "Importance", "Reactive mindset", "Proactive planning", "External reporting", "Crises"],
    commonTrap: "Routine progress reporting to external stakeholders is High Urgency, Low Importance.",
    category: "2.2 Prioritization"
  },
  {
    id: "itpm-u2-c07",
    term: "Precedence Relationships & Leads/Lags",
    simpleExplanation: "The four ways activities link together (FS, SS, FF, SF) plus acceleration and waiting times.",
    examDefinition: "Logical relationships linking successor activities to predecessors: Finish-to-Start (FS, most common default), Start-to-Start (SS, concurrency), Finish-to-Finish (FF, coordination), and Start-to-Finish (SF, rarest).",
    whyItMatters: "Governs the sequencing and concurrency of project work across the schedule.",
    howItWorks: "Lead time allows activity overlap (advances successor). Lag time inserts a mandatory delay (waiting period).",
    examKeywords: ["FS", "SS", "FF", "SF", "Lead time", "Lag time", "Precedence diagramming", "Concurrency"],
    commonTrap: "FS is the most common relationship; SF is the rarest (e.g. legacy system retirement upon new system start).",
    category: "2.3 Time Planning"
  },
  {
    id: "itpm-u2-c08",
    term: "PERT & Critical Path Method",
    simpleExplanation: "Network analysis calculating earliest/latest times, slack, and the zero-slack critical path.",
    examDefinition: "Event-oriented scheduling technique. Forward Pass computes EST and EFT (EFT = EST + Dur; max EFT at merges). Backward Pass computes LFT and LST (LST = LFT - Dur; min LST at bursts). Slack = LST - EST.",
    whyItMatters: "Identifies the Critical Path (longest path, zero slack) dictating the minimum project completion time.",
    howItWorks: "Activities with Slack = 0 cannot vary. Any delay on a critical-path task pushes the project completion date day-for-day.",
    examKeywords: ["PERT", "Forward pass", "Backward pass", "EST/EFT", "LST/LFT", "Slack", "Float", "Critical Path", "Zero slack"],
    commonTrap: "Forward pass merge = MAXIMUM EFT. Backward pass burst = MINIMUM LST. Critical path has ZERO slack.",
    category: "2.3 Time Planning"
  },
  {
    id: "itpm-u2-c09",
    term: "Gantt Charts & Limitations",
    simpleExplanation: "Bar chart showing timeline, overlaps, and progress, with key blind spots in resources and costs.",
    examDefinition: "A horizontal bar chart displaying project activities along calendar dates, illustrating durations, dependencies, and progress status.",
    whyItMatters: "Provides an intuitive visual tool for stakeholder communication and concurrency modeling.",
    howItWorks: "Visualizes start dates, end dates, and overlaps. However, course book explicitly notes that it does NOT show resource quantities (e.g. 20 people vs 10 people) or costs, and requires continuous updating.",
    examKeywords: ["Gantt chart", "Visual timeline", "Concurrency", "Resource blindspot", "Cost invisibility", "Maintenance"],
    commonTrap: "Gantt charts do NOT reveal resource quantities or financial costs directly.",
    category: "2.3 Time Planning"
  },
  {
    id: "itpm-u2-c10",
    term: "Definition of Done (DoD) vs Acceptance",
    simpleExplanation: "DoD is the internal team quality filter; Customer Acceptance is external client sign-off.",
    examDefinition: "DoD is a team-agreed checklist of technical quality criteria (coded to standards, peer-reviewed, unit-tested, integrated, documented) required before marking items complete. Customer Acceptance is formal validation by client/sponsor that deliverables satisfy business needs.",
    whyItMatters: "Ensures software meets internal engineering standards before exposure to external stakeholders.",
    howItWorks: "The team continuously validates work against DoD during sprints. The DoD is a living artifact that tightens as team maturity improves.",
    examKeywords: ["Definition of Done", "Customer Acceptance", "Internal QA filter", "Peer review", "Unit testing", "Documentation"],
    commonTrap: "DoD is an internal team mechanism, NOT final customer acceptance.",
    category: "2.4 Quality & DoD"
  },
  {
    id: "itpm-u2-c11",
    term: "ISO/IEC 25010 Quality Models",
    simpleExplanation: "International standard establishing Quality-in-Use (5) and Product Quality (8) models.",
    examDefinition: "Standard defining software quality models: Quality-in-Use (Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage [S-E-F-E-C]) and Product Quality (Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability [F-P-U-R-S-C-P-M]).",
    whyItMatters: "Creates a shared vocabulary and standard across distributed teams and stakeholders.",
    howItWorks: "Quality-in-Use measures real-world user interaction outcomes; Product Quality measures technical software attributes.",
    examKeywords: ["ISO/IEC 25010", "Quality-in-Use", "Product Quality", "S-E-F-E-C", "F-P-U-R-S-C-P-M"],
    commonTrap: "Quality-in-Use has 5 characteristics; Product Quality has 8 characteristics. Do not confuse them!",
    category: "2.4 Quality & DoD"
  },
  {
    id: "itpm-u2-c12",
    term: "Quality Gates (Kneuper, 2018)",
    simpleExplanation: "Formal stage checkpoints with deliverable checks and Go/No-Go decisions.",
    examDefinition: "A formal review at a project stage boundary consisting of: (1) defined deliverables expected at that stage, plus (2) a formal review checking adequate quality before authorizing transition to the next phase.",
    whyItMatters: "Prevents defective work from cascading into subsequent project phases.",
    howItWorks: "Issues formal Go / Conditional / No-Go governance decisions based on objective quality criteria. Contrasted with milestones, which are simply points in time with zero quality inspection.",
    examKeywords: ["Quality Gate", "Kneuper 2018", "Formal review", "Go/No-Go decision", "Stage boundary", "Milestone contrast"],
    commonTrap: "A milestone is merely a calendar date; a quality gate performs active inspection and issues a gate decision.",
    category: "2.4 Quality & DoD"
  }
];

export const unit2SummarySections: UnitSummarySection[] = [
  {
    title: "2.1 Project Breakdown Structure and Work-Packages",
    summaryParagraph: "Organizing project work begins after charter authorization by decomposing total scope into manageable, assignable components. A WBS structures work from Level 1 (project title) through major deliverables/phases (Level 2), work packages (Level 3), down to elementary tasks (Level 4). Cost, schedule, and resource estimates are developed at the task level and rolled upward. The 100% Rule mandates that child elements completely encompass the parent scope without omission or extraneous additions. Deliverables are tangible outputs that require time and effort to create and verify against criteria, whereas Milestones are reference moments in time with zero duration. A Requirements Traceability Matrix connects requirements from business needs to test cases, preventing scope creep and enabling precise change impact analysis. The WBS Dictionary records work package narrative details, responsible partners, resources, and acceptance criteria.",
    keyPoints: [
      "WBS organizes scope; estimates roll bottom-up from lowest tasks.",
      "100% Rule applies to every decomposition level: child nodes equal 100% of parent.",
      "Deliverable = verifiable output; Milestone = point in time with zero duration (D = 0).",
      "Traceability Matrix ensures 100% coverage and exposes unauthorized gold plating.",
      "WBS Dictionary provides the detailed substance behind graphical WBS codes."
    ],
    comparisonTable: {
      headers: ["Criterion", "Project Deliverable", "Project Milestone"],
      rows: [
        ["Nature", "Tangible output or document produced", "Significant moment or reference event in time"],
        ["Duration", "Positive duration (requires active work)", "Strictly ZERO duration (D = 0)"],
        ["Resource Consumption", "Consumes budget, labor, and materials", "Consumes zero direct labor or budget"],
        ["Quality Role", "Evaluated against acceptance criteria", "Does NOT perform quality checks itself"]
      ]
    },
    examInsight: "Remember that bottom-up task estimates roll upward to form the project baselines. Milestones strictly have zero duration and do not perform quality inspections."
  },
  {
    title: "2.2 Prioritization",
    summaryParagraph: "Prioritization orders work, focuses scarce resources, and establishes early warnings for schedule breakdown. Operating solely by urgency induces a defensive, reactive, knee-jerk mindset that compromises project success. The Urgency vs Importance matrix balances immediate pressure with long-term goals: High Urgency/Low Importance activities (e.g. routine external reporting) should be streamlined, while Low Urgency/High Importance activities represent strategic proactive planning. Noriaki Kano challenged linear satisfaction assumptions: Basic needs are taken for granted (absence causes outrage); Performance needs provide linear gains; Delighters are unexpected innovations that produce exponential delight. Dai Clegg developed MoSCoW at Oracle UK in 1994, using words to stimulate value discussions. Under pressure, Could-haves are dropped first, then Should-haves, while Must-haves remain non-negotiable.",
    keyPoints: [
      "Urgency triggers reactive defensiveness; Importance enables proactive rational planning.",
      "External progress reporting is High Urgency, Low Importance.",
      "Kano: 100% Basic first -> Viable Performance -> Select Delighters (absence of delighters causes NO dissatisfaction).",
      "MoSCoW (Dai Clegg, Oracle UK, 1994): Must, Should, Could, Won't (for this timebox).",
      "Under pressure, sacrifice Could-haves first, then Should-haves; never sacrifice Must-haves."
    ],
    comparisonTable: {
      headers: ["Criterion", "Kano Model", "MoSCoW Method"],
      rows: [
        ["Perspective", "Customer satisfaction (emotional reaction)", "Project delivery & scope governance"],
        ["Categories", "Basic, Performance, Delighter", "Must-have, Should-have, Could-have, Won't-have"],
        ["Mapping", "Basic = Must-Have", "Delighter = Could-Have"],
        ["Under Pressure", "Ensure 100% Basic first", "Drop Could-haves first, then Should-haves"]
      ]
    },
    examInsight: "Dai Clegg of Oracle UK created MoSCoW in 1994. Words over numbers stimulate value debate. Absence of Delighters causes zero dissatisfaction."
  },
  {
    title: "2.3 Time Planning, Milestones, and Gantt Chart",
    summaryParagraph: "Sequencing activities in time is fundamental to project planning. Four precedence relationships link activities: Finish-to-Start (FS, most common), Start-to-Start (SS, concurrency), Finish-to-Finish (FF, completion coordination), and Start-to-Finish (SF, rarest). Lead time advances successor start dates (overlap), while Lag time inserts mandatory waiting delays. PERT diagrams model network logic: the Forward Pass computes EST and EFT from day zero, taking the MAXIMUM EFT at converging merge points; the Backward Pass computes LFT and LST from project completion, taking the MINIMUM LST at diverging burst points. Slack represents scheduling buffer (Slack = LST - EST = LFT - EFT). Activities with zero slack form the Critical Path, dictating the shortest possible project completion time. Delays on critical activities delay project completion day-for-day. Gantt charts visually illustrate schedules along calendar dates, but have key limitations: they do not show resource quantities or costs, require continuous manual updating, and become complex in large projects.",
    keyPoints: [
      "FS is the default dependency; SF is the rarest.",
      "Forward Pass: EFT = EST + Duration; merge point = MAX EFT of predecessors.",
      "Backward Pass: LST = LFT - Duration; burst point = MIN LST of successors.",
      "Slack = LST - EST = LFT - EFT. Zero slack = Critical Path.",
      "Gantt limitation: does NOT reveal resource quantities or financial costs directly."
    ],
    comparisonTable: {
      headers: ["Criterion", "PERT Network", "Gantt Chart"],
      rows: [
        ["Primary Strength", "Models network logic, critical path, and slack", "Intuitive calendar visualization of schedule"],
        ["Visual Format", "Node-and-arrow network diagram", "Horizontal calendar bar chart"],
        ["Resource Visibility", "Focuses on mathematical duration and float", "Does NOT show resource quantities or costs"],
        ["Relationship", "Underlying calculation engine", "Visual stakeholder presentation"]
      ]
    },
    examInsight: "Forward merge = MAXIMUM EFT. Backward burst = MINIMUM LST. Critical path tasks strictly have zero slack. Gantt charts do not show resource quantities."
  },
  {
    title: "2.4 Definition of Done",
    summaryParagraph: "A deliverable must be accepted against predetermined criteria. In agile IT development, the Definition of Done (DoD) provides a team-agreed quality checklist: coded to standards, peer-reviewed, unit-tested, integrated, and documented. DoD serves as an internal team quality assurance filter, whereas Customer Acceptance represents formal external validation and sign-off by clients/sponsors. The DoD is a living artifact that tightens as the team gains domain expertise. ISO/IEC 25010 establishes two quality models: Quality-in-Use has 5 characteristics (Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage [completeness and flexibility]); Product Quality has 8 characteristics (Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability). Kneuper (2018) defines Quality Gates as deliverable definitions combined with formal reviews at stage boundaries, issuing Go/No-Go decisions to control phase transitions in large projects.",
    keyPoints: [
      "DoD = internal team quality checklist; Customer Acceptance = external client sign-off.",
      "Standard DoD: Code standard + Review + Unit tests + Integration + Documentation.",
      "ISO/IEC 25010 Quality-in-Use = 5 characteristics (S-E-F-E-C).",
      "ISO/IEC 25010 Product Quality = 8 characteristics (F-P-U-R-S-C-P-M).",
      "Quality Gate (Kneuper, 2018) = Deliverables + Formal Review issuing Go/No-Go decisions."
    ],
    comparisonTable: {
      headers: ["Criterion", "Definition of Done (DoD)", "Customer Acceptance"],
      rows: [
        ["Ownership", "Created, owned, and enforced by development team", "Evaluated and authorized by customer/sponsor"],
        ["Purpose", "Internal team quality assurance filter", "Confirms product solves client business needs"],
        ["Frequency", "Continuous (end of every task/sprint)", "Periodic (stage gates, release, project closeout)"],
        ["Evolution", "Living artifact that matures over time", "Contractually governed by baseline criteria"]
      ]
    },
    examInsight: "DoD != Customer Acceptance. ISO 25010 Quality-in-Use has 5 characteristics (S-E-F-E-C); Product Quality has 8 (F-P-U-R-S-C-P-M). Quality Gate = Deliverables + Formal Review."
  }
];
