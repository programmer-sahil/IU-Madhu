import { Flashcard } from "../../../../types";

export const unit2Flashcards: Flashcard[] = [
  {
    "id": "itpm-u2-fc-001",
    "unit": 2,
    "front": "What is the primary function of a Work Breakdown Structure (WBS)?",
    "back": "To break down overall project work into smaller, manageable components (work packages and tasks) that can be estimated, scheduled, assigned, and monitored.",
    "category": "2.1 WBS & Scope",
    "examTip": "WBS estimates roll bottom-up from lowest-level tasks into work packages and baselines.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Purpose",
      "page": 35
    }
  },
  {
    "id": "itpm-u2-fc-002",
    "unit": 2,
    "front": "What is a 'Work Package' in project planning?",
    "back": "A manageable grouping of related project activities and deliverables at an intermediate/lowest WBS level, assignable to a specific partner or team with single accountability.",
    "category": "2.1 WBS & Scope",
    "examTip": "Work packages are the standard unit for contractor assignment and cost accounting.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Work Package",
      "page": 35
    }
  },
  {
    "id": "itpm-u2-fc-003",
    "unit": 2,
    "front": "What is the 100% Rule in WBS decomposition?",
    "back": "The total work encompassed in the child components must equal exactly 100% of the work of the parent component\u2014neither more nor less.",
    "category": "2.1 WBS & Scope",
    "examTip": "Applies across all levels: Level 1 contains 100% of project work.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "100% Rule",
      "page": 3
    }
  },
  {
    "id": "itpm-u2-fc-004",
    "unit": 2,
    "front": "What is the fundamental difference between a Deliverable and a Milestone?",
    "back": "A Deliverable is a tangible output or document produced (requires duration and resources). A Milestone is a significant moment or event in time with ZERO duration.",
    "category": "2.1 WBS & Scope",
    "examTip": "Milestones mark points in time; deliverables are the verifiable outputs.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Deliverables vs Milestones",
      "page": 36
    }
  },
  {
    "id": "itpm-u2-fc-005",
    "unit": 2,
    "front": "What is an 'Epic' in agile requirements breakdown?",
    "back": "A large, high-level user story or requirement that is too complex to finish in a single sprint and must be decomposed into smaller user stories.",
    "category": "2.1 WBS & Scope",
    "examTip": "Epic = multi-sprint size; User Story = single-sprint size.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Epics",
      "page": 4
    }
  },
  {
    "id": "itpm-u2-fc-006",
    "unit": 2,
    "front": "What is a 'User Story'?",
    "back": "A concise narrative description of desired software interaction and business value written from the perspective of an end user.",
    "category": "2.1 WBS & Scope",
    "examTip": "Written in business/user terms rather than technical implementation details.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "User Stories",
      "page": 4
    }
  },
  {
    "id": "itpm-u2-fc-007",
    "unit": 2,
    "front": "What is a Requirements Traceability Matrix (RTM)?",
    "back": "A grid/table linking requirements from business objectives through architecture design and work packages to test cases and verification results.",
    "category": "2.1 WBS & Scope",
    "examTip": "Ensures full coverage, proves compliance, and prevents gold plating (unauthorized scope).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Traceability Matrix",
      "page": 38
    }
  },
  {
    "id": "itpm-u2-fc-008",
    "unit": 2,
    "front": "How does a Traceability Matrix aid Change Management?",
    "back": "It enables rapid impact analysis: when a requirement changes, the matrix shows exactly which modules, code deliverables, and test cases must be modified.",
    "category": "2.1 WBS & Scope",
    "examTip": "Essential tool for evaluating the cost and time impact of change requests.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Impact Analysis",
      "page": 38
    }
  },
  {
    "id": "itpm-u2-fc-009",
    "unit": 2,
    "front": "What is a WBS Dictionary?",
    "back": "A document providing detailed descriptions of each WBS component: scope, deliverables, responsible partner, acceptance criteria, assumptions, resources, and costs.",
    "category": "2.1 WBS & Scope",
    "examTip": "Provides the detailed narrative behind the short labels in the WBS chart.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Dictionary",
      "page": 39
    }
  },
  {
    "id": "itpm-u2-fc-010",
    "unit": 2,
    "front": "Which three core baselines are formed upon completing project organization?",
    "back": "Scope baseline (WBS + WBS Dictionary + Scope Statement), Schedule baseline, and Cost baseline.",
    "category": "2.1 WBS & Scope",
    "examTip": "These three baselines provide the benchmark against which project performance is monitored.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Project Baselines",
      "page": 34
    }
  },
  {
    "id": "itpm-u2-fc-011",
    "unit": 2,
    "front": "Why is requirements prioritization critical in IT projects?",
    "back": "To establish execution order, direct limited resources to high-value items, mitigate risk, and set milestones.",
    "category": "2.2 Prioritization",
    "examTip": "Avoids wasting effort on trivial features while starving critical functionality.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Prioritization Purpose",
      "page": 39
    }
  },
  {
    "id": "itpm-u2-fc-012",
    "unit": 2,
    "front": "What is the psychological hazard of managing purely by 'Urgency'?",
    "back": "It triggers a defensive, reactive, knee-jerk mindset pressured by deadlines that produces suboptimal decisions and jeopardizes project success.",
    "category": "2.2 Prioritization",
    "examTip": "Important tasks allow proactive, rational decision-making; urgency provokes reactive panic.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency Mindset",
      "page": 39
    }
  },
  {
    "id": "itpm-u2-fc-013",
    "unit": 2,
    "front": "How does the Eisenhower Matrix treat 'High Importance + Low Urgency' tasks?",
    "back": "Focus on project goals through deliberate planning, searching for opportunities, productive collaborations, and strategic architecture.",
    "category": "2.2 Prioritization",
    "examTip": "This quadrant drives long-term project excellence and prevents future crises.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "High Importance Low Urgency",
      "page": 40
    }
  },
  {
    "id": "itpm-u2-fc-014",
    "unit": 2,
    "front": "What example does the course book give for 'High Urgency + Low Importance'?",
    "back": "Reporting project progress to external stakeholders (requires immediate attention to meet deadlines, but does not alter core deliverable functionality).",
    "category": "2.2 Prioritization",
    "examTip": "Common exam question! Attention required, but activity could be streamlined/delegated.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgent Low Importance",
      "page": 40
    }
  },
  {
    "id": "itpm-u2-fc-015",
    "unit": 2,
    "front": "What are the three core categories in the standard Kano Model?",
    "back": "1) Basic / Baseline requirements (must-be),\n2) Performance needs (linear satisfiers),\n3) Delighters (attractive attributes).",
    "category": "2.2 Prioritization",
    "examTip": "Created by Noriaki Kano to challenge the assumption that all feature improvements linearly increase satisfaction.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Categories",
      "page": 40
    }
  },
  {
    "id": "itpm-u2-fc-016",
    "unit": 2,
    "front": "What is the key behavioral rule of Kano 'Basic' requirements?",
    "back": "Customers take them for granted and rarely mention them. If absent, customers are intensely dissatisfied; if present, satisfaction is merely neutral.",
    "category": "2.2 Prioritization",
    "examTip": "Example: cRobot mobility. If it cannot move, it fails completely.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Basic",
      "page": 41
    }
  },
  {
    "id": "itpm-u2-fc-017",
    "unit": 2,
    "front": "What characterizes Kano 'Delighters'?",
    "back": "Unexpected, innovative features. If absent, customers feel zero dissatisfaction (they didn't expect it); if present, customer satisfaction increases exponentially.",
    "category": "2.2 Prioritization",
    "examTip": "Example: cRobot human-like head movement. Warning: do not over-invest at the expense of basics!",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Delighters",
      "page": 42
    }
  },
  {
    "id": "itpm-u2-fc-018",
    "unit": 2,
    "front": "Who invented MoSCoW prioritization and when?",
    "back": "Dai Clegg of Oracle UK in 1994, originally developed for software development requirements prioritization.",
    "category": "2.2 Prioritization",
    "examTip": "M = Must-have, S = Should-have, C = Could-have, W = Won't-have (this time).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Origin",
      "page": 42
    }
  },
  {
    "id": "itpm-u2-fc-019",
    "unit": 2,
    "front": "What is the crucial difference between MoSCoW Must-have and Should-have?",
    "back": "Must-haves are non-negotiable minimums (without them, project fails). Should-haves are highly important, but viable temporary workarounds exist if omitted.",
    "category": "2.2 Prioritization",
    "examTip": "Under schedule pressure, drop Could-haves first, then Should-haves; NEVER drop Must-haves.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Must vs Should",
      "page": 42
    }
  },
  {
    "id": "itpm-u2-fc-020",
    "unit": 2,
    "front": "Why does MoSCoW use descriptive words instead of numbers (1, 2, 3)?",
    "back": "To widen category boundaries and trigger productive stakeholder discussions on true business value rather than arguing over arbitrary numerical ranks.",
    "category": "2.2 Prioritization",
    "examTip": "Words foster consensus on business necessity; numbers encourage territorial ranking disputes.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Words",
      "page": 42
    }
  },
  {
    "id": "itpm-u2-fc-021",
    "unit": 2,
    "front": "What are the four precedence relationship types in scheduling diagrams?",
    "back": "1) Finish-to-Start (FS) - most common\n2) Start-to-Start (SS)\n3) Finish-to-Finish (FF)\n4) Start-to-Finish (SF) - rarest",
    "category": "2.3 Time Planning",
    "examTip": "FS = default. SF = legacy system retirement upon new system start.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Precedence Relationships",
      "page": 45
    }
  },
  {
    "id": "itpm-u2-fc-022",
    "unit": 2,
    "front": "What is the difference between 'Lead Time' and 'Lag Time'?",
    "back": "Lead time accelerates the successor activity (overlap / negative lag). Lag time inserts a mandatory delay between predecessor and successor (positive delay).",
    "category": "2.3 Time Planning",
    "examTip": "Lead compresses time; Lag inserts waiting time (e.g. waiting for concrete to dry or software burn-in).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Lead vs Lag",
      "page": 46
    }
  },
  {
    "id": "itpm-u2-fc-023",
    "unit": 2,
    "front": "What is 'Slack' (Float) in a project network?",
    "back": "The maximum time an activity can be delayed from its earliest start without delaying the overall project completion date.",
    "category": "2.3 Time Planning",
    "examTip": "Formula: Slack = LST - EST = LFT - EFT.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack Definition",
      "page": 46
    }
  },
  {
    "id": "itpm-u2-fc-024",
    "unit": 2,
    "front": "What is the 'Critical Path'?",
    "back": "The longest sequence of dependent activities through the network diagram with zero total slack, dictating the shortest time in which the project can finish.",
    "category": "2.3 Time Planning",
    "examTip": "Any delay on a critical path task causes a day-for-day delay in final project delivery.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Critical Path",
      "page": 47
    }
  },
  {
    "id": "itpm-u2-fc-025",
    "unit": 2,
    "front": "What is the formula for Earliest Finish Time (EFT) during the Forward Pass?",
    "back": "EFT = EST + Duration (starting from Day 0 at project inception).",
    "category": "2.3 Time Planning",
    "examTip": "At a merge point with multiple predecessors: EST(successor) = MAX(EFT of all predecessors).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Forward Pass Formula",
      "page": 48
    }
  },
  {
    "id": "itpm-u2-fc-026",
    "unit": 2,
    "front": "What is the formula for Latest Start Time (LST) during the Backward Pass?",
    "back": "LST = LFT - Duration (working backward from target completion date).",
    "category": "2.3 Time Planning",
    "examTip": "At a burst point with multiple successors: LFT(predecessor) = MIN(LST of all successors).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Backward Pass Formula",
      "page": 49
    }
  },
  {
    "id": "itpm-u2-fc-027",
    "unit": 2,
    "front": "What layout is used in a standard PERT node in the course book?",
    "back": "Top-Left: EST | Center: Task ID & Duration | Top-Right: EFT\nBottom-Left: LST | Bottom-Center: Slack | Bottom-Right: LFT",
    "category": "2.3 Time Planning",
    "examTip": "Top row = Earliest times (Forward pass). Bottom row = Latest times (Backward pass).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "PERT Node Layout",
      "page": 48
    }
  },
  {
    "id": "itpm-u2-fc-028",
    "unit": 2,
    "front": "What is a major limitation of Gantt Charts highlighted in the course book?",
    "back": "They do not show resource quantities or costs (e.g. an 8-week task requiring 20 people looks identical to an 8-week task requiring 5 people).",
    "category": "2.3 Time Planning",
    "examTip": "Also: require constant updating and become unreadable when projects are highly complex.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Gantt Limitations",
      "page": 51
    }
  },
  {
    "id": "itpm-u2-fc-029",
    "unit": 2,
    "front": "Why should PERT and Gantt charts be used together?",
    "back": "They are complementary: PERT calculates network logic, critical paths, and slack; Gantt presents an intuitive calendar visualization for stakeholders.",
    "category": "2.3 Time Planning",
    "examTip": "PERT provides mathematical scheduling precision; Gantt provides visual timeline communication.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Complementary Tools",
      "page": 53
    }
  },
  {
    "id": "itpm-u2-fc-030",
    "unit": 2,
    "front": "Does baseline approval mean planning is permanently over?",
    "back": "No. Planning is iterative; plans are revised and refined as monitoring and execution reveal variances and new insights.",
    "category": "2.3 Time Planning",
    "examTip": "Baseline approval authorizes execution, but change management ensures continuous plan adjustment.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Iterative Planning",
      "page": 53
    }
  },
  {
    "id": "itpm-u2-fc-031",
    "unit": 2,
    "front": "What is the Definition of Done (DoD)?",
    "back": "A team-agreed set of technical quality and completion criteria that must be satisfied before any deliverable is considered finished.",
    "category": "2.4 Quality & DoD",
    "examTip": "Core standard: coded to standards, peer-reviewed, unit tested, integrated, documented.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD Definition",
      "page": 53
    }
  },
  {
    "id": "itpm-u2-fc-032",
    "unit": 2,
    "front": "Is the Definition of Done (DoD) the same as Final Customer Acceptance?",
    "back": "NO. DoD is an internal team quality assurance filter before passing work forward. Customer Acceptance is formal verification and sign-off by external clients/sponsors.",
    "category": "2.4 Quality & DoD",
    "examTip": "Classic IU exam trap! DoD = Team QA criteria; Acceptance = Stakeholder sign-off.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD vs Acceptance",
      "page": 2
    }
  },
  {
    "id": "itpm-u2-fc-033",
    "unit": 2,
    "front": "Why should the Definition of Done evolve over time?",
    "back": "As the team matures, understands the problem domain better, and identifies high-value quality patterns, they update the DoD to raise standards.",
    "category": "2.4 Quality & DoD",
    "examTip": "DoD is a living artifact, not a frozen rulebook.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD Evolution",
      "page": 53
    }
  },
  {
    "id": "itpm-u2-fc-034",
    "unit": 2,
    "front": "What are the two quality models defined in ISO/IEC 25010?",
    "back": "1) Quality-in-Use model (5 characteristics)\n2) Product Quality model (8 characteristics)",
    "category": "2.4 Quality & DoD",
    "examTip": "Quality in Use focuses on real-world user outcomes; Product Quality focuses on software static/dynamic properties.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "ISO 25010 Models",
      "page": 54
    }
  },
  {
    "id": "itpm-u2-fc-035",
    "unit": 2,
    "front": "What are the 5 characteristics of ISO/IEC 25010 'Quality-in-Use'?",
    "back": "Mnemonic S-E-F-E-C:\n1) Satisfaction\n2) Effectiveness\n3) Freedom from risk\n4) Efficiency\n5) Context coverage",
    "category": "2.4 Quality & DoD",
    "examTip": "Remember S-E-F-E-C! Context coverage has two elements: context completeness and flexibility.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality-in-Use 5",
      "page": 54
    }
  },
  {
    "id": "itpm-u2-fc-036",
    "unit": 2,
    "front": "What are the 8 characteristics of ISO/IEC 25010 'Product Quality'?",
    "back": "Mnemonic F-P-U-R-S-C-P-M:\n1) Functional suitability\n2) Performance efficiency\n3) Usability\n4) Reliability\n5) Security\n6) Compatibility\n7) Portability\n8) Maintainability",
    "category": "2.4 Quality & DoD",
    "examTip": "Eight product quality characteristics. Usability includes aesthetics; Security includes non-repudiation.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Product Quality 8",
      "page": 55
    }
  },
  {
    "id": "itpm-u2-fc-037",
    "unit": 2,
    "front": "Under ISO/IEC 25010 Product Quality, what are the three elements of 'Functional Suitability'?",
    "back": "1) Functional completeness (covers all specified tasks)\n2) Functional correctness (correct results with precision)\n3) Functional appropriateness (facilitates goals without extraneous steps)",
    "category": "2.4 Quality & DoD",
    "examTip": "Completeness, Correctness, Appropriateness.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Functional Suitability Elements",
      "page": 55
    }
  },
  {
    "id": "itpm-u2-fc-038",
    "unit": 2,
    "front": "What is a 'Quality Gate' according to Kneuper (2018)?",
    "back": "A formal intermediate checkpoint at a stage boundary consisting of defined deliverables plus a formal review verifying they meet adequate quality before advancing.",
    "category": "2.4 Quality & DoD",
    "examTip": "Quality Gate = Deliverable Definition + Formal Quality Review at stage end.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality Gate Definition",
      "page": 58
    }
  },
  {
    "id": "itpm-u2-fc-039",
    "unit": 2,
    "front": "How does a Quality Gate differ from a Milestone?",
    "back": "A milestone is merely a calendar point in time with no built-in quality evaluation. A quality gate is an active formal quality review with a go/no-go gate decision.",
    "category": "2.4 Quality & DoD",
    "examTip": "Passing a milestone date does not prove deliverables are defect-free; a quality gate does.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality Gate vs Milestone",
      "page": 16
    }
  },
  {
    "id": "itpm-u2-fc-040",
    "unit": 2,
    "front": "What are the 5 domains in Bannerman & Thorogood's (2012) framework for IT project success?",
    "back": "1) Process,\n2) Project Management,\n3) Product,\n4) Business,\n5) Strategy.",
    "category": "2.4 Quality & DoD",
    "examTip": "Multi-domain framework: success extends beyond mere on-time completion to product and strategic value.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Multi-Domain Framework",
      "page": 58
    }
  }
];
