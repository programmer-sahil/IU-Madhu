import { CheatSheetComparison, MasterComparison } from '../../../../types';

export const unit2Comparisons: CheatSheetComparison[] = [
  {
    "conceptA": "Work Breakdown Structure (WBS)",
    "conceptB": "Requirements Traceability Matrix (RTM)",
    "comparisonPoints": [
      {
        "criterion": "Core Purpose",
        "detailA": "Decomposes total project scope hierarchically into manageable work packages and tasks.",
        "detailB": "Establishes bidirectional links between requirements, architecture design, and test cases."
      },
      {
        "criterion": "Structure",
        "detailA": "Hierarchical tree diagram or numbered outline (Level 1 project to Level 4 tasks).",
        "detailB": "Two-dimensional matrix/grid linking requirement IDs across lifecycle stages."
      },
      {
        "criterion": "Role in Estimation",
        "detailA": "Forms the basis for bottom-up cost, schedule, and resource estimation.",
        "detailB": "Assesses completeness and verifies that test cases cover every requirement."
      },
      {
        "criterion": "Scope Creep Defense",
        "detailA": "Applies the 100% Rule to define boundaries of included vs excluded work.",
        "detailB": "Identifies gold plating by exposing code/tasks that lack an authorized requirement."
      }
    ]
  },
  {
    "conceptA": "Project Deliverable",
    "conceptB": "Project Milestone",
    "comparisonPoints": [
      {
        "criterion": "Fundamental Nature",
        "detailA": "A tangible output or document produced by project activities (code, report, prototype).",
        "detailB": "A significant moment or reference event in time (e.g. 'Architecture Approved')."
      },
      {
        "criterion": "Duration",
        "detailA": "Consumes time and duration to design, construct, and verify.",
        "detailB": "Strictly has zero duration (Duration = 0)."
      },
      {
        "criterion": "Resource Consumption",
        "detailA": "Consumes labor, budget, and material resources.",
        "detailB": "Consumes zero direct labor or budget."
      },
      {
        "criterion": "Quality Verification",
        "detailA": "Must satisfy verifiable acceptance criteria to receive sign-off.",
        "detailB": "Does not perform quality checks; simply indicates when a point in time is reached."
      }
    ]
  },
  {
    "conceptA": "Kano Model",
    "conceptB": "MoSCoW Method",
    "comparisonPoints": [
      {
        "criterion": "Origin & Context",
        "detailA": "Noriaki Kano (quality control and customer satisfaction).",
        "detailB": "Dai Clegg, Oracle UK in 1994 (software requirements prioritization)."
      },
      {
        "criterion": "Analytical Lens",
        "detailA": "Customer satisfaction perspective (emotional and behavioral user reaction).",
        "detailB": "Project delivery and governance perspective (contractual necessity and release urgency)."
      },
      {
        "criterion": "Categories",
        "detailA": "Basic (must-be), Performance (linear satisfier), Delighters (attractive).",
        "detailB": "Must-have, Should-have, Could-have, Won't-have."
      },
      {
        "criterion": "Handling Pressure",
        "detailA": "Prioritize 100% Basics -> Optimize Performance -> Add few Delighters.",
        "detailB": "Protect Must-haves -> Sacrifice Could-haves first, then Should-haves if time runs out."
      }
    ]
  },
  {
    "conceptA": "Kano Basic Requirements",
    "conceptB": "Kano Delighters",
    "comparisonPoints": [
      {
        "criterion": "Customer Expectation",
        "detailA": "Taken for granted as obvious; customers rarely mention them in interviews.",
        "detailB": "Completely unexpected and unprompted; surprises and wows the customer."
      },
      {
        "criterion": "Effect of Absence",
        "detailA": "Causes severe dissatisfaction and total product rejection.",
        "detailB": "Causes zero dissatisfaction because customers never anticipated the feature."
      },
      {
        "criterion": "Effect of Presence",
        "detailA": "Produces neutral satisfaction (merely prevents outrage).",
        "detailB": "Dramatically elevates satisfaction to premium levels."
      },
      {
        "criterion": "cRobot Example",
        "detailA": "Physical robot mobility (moving around the house).",
        "detailB": "Human-like head tilt/movement during social interaction."
      }
    ]
  },
  {
    "conceptA": "Urgent Activities",
    "conceptB": "Important Activities",
    "comparisonPoints": [
      {
        "criterion": "Core Driver",
        "detailA": "Immediate deadline pressure or emerging crisis demanding attention.",
        "detailB": "Long-term strategic value and fundamental project goal attainment."
      },
      {
        "criterion": "Team Mindset",
        "detailA": "Defensive, reactive, pressured mindset prone to knee-jerk suboptimal choices.",
        "detailB": "Proactive, deliberate, rational mindset open to strategic opportunities."
      },
      {
        "criterion": "Course Book Example",
        "detailA": "Routine progress reporting to external stakeholders (High Urgency, Low Importance).",
        "detailB": "Architectural design, risk mitigation, and proactive planning (Low Urgency, High Importance)."
      },
      {
        "criterion": "Strategic Goal",
        "detailA": "Resolve crisis quickly or automate/delegate to minimize distraction.",
        "detailB": "Dedicate focused engineering hours to ensure durable project success."
      }
    ]
  },
  {
    "conceptA": "Finish-to-Start (FS)",
    "conceptB": "Start-to-Start (SS)",
    "comparisonPoints": [
      {
        "criterion": "Logical Rule",
        "detailA": "Successor cannot start until Predecessor has completely finished.",
        "detailB": "Successor can start once Predecessor has started."
      },
      {
        "criterion": "Frequency",
        "detailA": "Default and most common relationship in project management.",
        "detailB": "Frequent relationship used to enable concurrent engineering."
      },
      {
        "criterion": "Schedule Impact",
        "detailA": "Strictly sequential; total duration equals sum of both activities.",
        "detailB": "Enables activity overlap (concurrency), compressing total duration."
      },
      {
        "criterion": "Course Book Example",
        "detailA": "Robot hardware manufacturing must finish before system testing begins.",
        "detailB": "Software coding begins as soon as hardware construction begins."
      }
    ]
  },
  {
    "conceptA": "PERT Network Analysis",
    "conceptB": "Gantt Chart",
    "comparisonPoints": [
      {
        "criterion": "Primary Strength",
        "detailA": "Models complex network dependencies, calculates critical path, and reveals slack.",
        "detailB": "Provides intuitive, visual calendar timeline easily understood by stakeholders."
      },
      {
        "criterion": "Visual Format",
        "detailA": "Node-and-arrow network diagram emphasizing logical precedence.",
        "detailB": "Horizontal bar chart along calendar dates showing durations and overlaps."
      },
      {
        "criterion": "Resource & Cost Visibility",
        "detailA": "Focuses on mathematical duration, earliest/latest times, and buffers.",
        "detailB": "Does NOT show resource quantities or costs (major course book limitation)."
      },
      {
        "criterion": "Relationship",
        "detailA": "Provides underlying mathematical calculations supporting the schedule.",
        "detailB": "Translates PERT calculations into the public schedule presentation."
      }
    ]
  },
  {
    "conceptA": "Forward Pass",
    "conceptB": "Backward Pass",
    "comparisonPoints": [
      {
        "criterion": "Direction of Flow",
        "detailA": "From project beginning (Day 0) to project completion.",
        "detailB": "From target project completion date backward to Day 0."
      },
      {
        "criterion": "Values Calculated",
        "detailA": "Earliest Start Time (EST) and Earliest Finish Time (EFT).",
        "detailB": "Latest Finish Time (LFT) and Latest Start Time (LST)."
      },
      {
        "criterion": "Core Formula",
        "detailA": "EFT = EST + Duration.",
        "detailB": "LST = LFT - Duration."
      },
      {
        "criterion": "Multiple Branches Rule",
        "detailA": "At a merge: EST(successor) = MAXIMUM of all predecessor EFTs.",
        "detailB": "At a burst: LFT(predecessor) = MINIMUM of all successor LSTs."
      }
    ]
  },
  {
    "conceptA": "Definition of Done (DoD)",
    "conceptB": "Customer Acceptance",
    "comparisonPoints": [
      {
        "criterion": "Ownership & Authority",
        "detailA": "Created, owned, and enforced internally by the development team.",
        "detailB": "Evaluated and authorized externally by the customer, sponsor, or client."
      },
      {
        "criterion": "Primary Purpose",
        "detailA": "Internal quality assurance filter ensuring code standards, tests, and documentation.",
        "detailB": "Confirms deliverables fulfill business needs and meet contractual requirements."
      },
      {
        "criterion": "Evaluation Frequency",
        "detailA": "Continuous; checked at the completion of every task, user story, and sprint.",
        "detailB": "Periodic; conducted at formal milestone reviews, quality gates, and project closeout."
      },
      {
        "criterion": "Evolution",
        "detailA": "Living artifact that evolves and tightens as team maturity improves.",
        "detailB": "Formally governed by project baseline contracts and agreed acceptance criteria."
      }
    ]
  },
  {
    "conceptA": "Quality Gate",
    "conceptB": "Project Milestone",
    "comparisonPoints": [
      {
        "criterion": "Definition",
        "detailA": "Deliverable definition plus formal review verifying adequate quality at stage end.",
        "detailB": "A significant moment or point in time marking a transition or accomplishment."
      },
      {
        "criterion": "Quality Verification",
        "detailA": "Actively inspects and verifies deliverables against technical quality standards.",
        "detailB": "Does not perform any quality check itself; simply marks a calendar event."
      },
      {
        "criterion": "Decision Authority",
        "detailA": "Issues formal Go / Conditional / No-Go decision governing phase transition.",
        "detailB": "Does not issue governance decisions; indicates date attainment."
      },
      {
        "criterion": "Course Book Authority",
        "detailA": "Defined by Kneuper (2018) as an intermediate acceptance review in large projects.",
        "detailB": "Universal project milestone tracking across all methodologies."
      }
    ]
  }
];

export const unit2MasterComparisons: MasterComparison[] = [
  {
    "id": "itpm-u2-cmp-001",
    "title": "Work Breakdown Structure (WBS) vs Requirements Traceability Matrix (RTM)",
    "unit": "Unit 2",
    "description": "Structural comparison between scope decomposition and end-to-end requirements traceability.",
    "columns": [
      "Work Breakdown Structure (WBS)",
      "Requirements Traceability Matrix (RTM)"
    ],
    "criteria": [
      {
        "aspect": "Core Purpose",
        "itemA": "Decomposes total project scope hierarchically into manageable work packages and tasks.",
        "itemB": "Establishes bidirectional links between requirements, architecture design, and test cases.",
        "keyDifference": "Work Breakdown Structure (WBS): Decomposes total project scope hierarchically into manageable work packages and tasks. vs Requirements Traceability Matrix (RTM): Establishes bidirectional links between requirements, architecture design, and test cases."
      },
      {
        "aspect": "Structure",
        "itemA": "Hierarchical tree diagram or numbered outline (Level 1 project to Level 4 tasks).",
        "itemB": "Two-dimensional matrix/grid linking requirement IDs across lifecycle stages.",
        "keyDifference": "Work Breakdown Structure (WBS): Hierarchical tree diagram or numbered outline (Level 1 project to Level 4 tasks). vs Requirements Traceability Matrix (RTM): Two-dimensional matrix/grid linking requirement IDs across lifecycle stages."
      },
      {
        "aspect": "Role in Estimation",
        "itemA": "Forms the basis for bottom-up cost, schedule, and resource estimation.",
        "itemB": "Assesses completeness and verifies that test cases cover every requirement.",
        "keyDifference": "Work Breakdown Structure (WBS): Forms the basis for bottom-up cost, schedule, and resource estimation. vs Requirements Traceability Matrix (RTM): Assesses completeness and verifies that test cases cover every requirement."
      },
      {
        "aspect": "Scope Creep Defense",
        "itemA": "Applies the 100% Rule to define boundaries of included vs excluded work.",
        "itemB": "Identifies gold plating by exposing code/tasks that lack an authorized requirement.",
        "keyDifference": "Work Breakdown Structure (WBS): Applies the 100% Rule to define boundaries of included vs excluded work. vs Requirements Traceability Matrix (RTM): Identifies gold plating by exposing code/tasks that lack an authorized requirement."
      }
    ],
    "examTrap": "The WBS organizes project work; the RTM tracks requirements through verification. Neither replaces the other.",
    "memoryRule": "WBS = Scope hierarchy. RTM = Traceability from requirement to test."
  },
  {
    "id": "itpm-u2-cmp-002",
    "title": "Project Deliverable vs Project Milestone",
    "unit": "Unit 2",
    "description": "Fundamental distinction between tangible project outputs and zero-duration reference markers.",
    "columns": [
      "Project Deliverable",
      "Project Milestone"
    ],
    "criteria": [
      {
        "aspect": "Fundamental Nature",
        "itemA": "A tangible output or document produced by project activities (code, report, prototype).",
        "itemB": "A significant moment or reference event in time (e.g. 'Architecture Approved').",
        "keyDifference": "Project Deliverable: A tangible output or document produced by project activities (code, report, prototype). vs Project Milestone: A significant moment or reference event in time (e.g. 'Architecture Approved')."
      },
      {
        "aspect": "Duration",
        "itemA": "Consumes time and duration to design, construct, and verify.",
        "itemB": "Strictly has zero duration (Duration = 0).",
        "keyDifference": "Project Deliverable: Consumes time and duration to design, construct, and verify. vs Project Milestone: Strictly has zero duration (Duration = 0)."
      },
      {
        "aspect": "Resource Consumption",
        "itemA": "Consumes labor, budget, and material resources.",
        "itemB": "Consumes zero direct labor or budget.",
        "keyDifference": "Project Deliverable: Consumes labor, budget, and material resources. vs Project Milestone: Consumes zero direct labor or budget."
      },
      {
        "aspect": "Quality Verification",
        "itemA": "Must satisfy verifiable acceptance criteria to receive sign-off.",
        "itemB": "Does not perform quality checks; simply indicates when a point in time is reached.",
        "keyDifference": "Project Deliverable: Must satisfy verifiable acceptance criteria to receive sign-off. vs Project Milestone: Does not perform quality checks; simply indicates when a point in time is reached."
      }
    ],
    "examTrap": "A milestone has strictly ZERO duration. If an item takes time or resources to produce, it is a deliverable or task.",
    "memoryRule": "Deliverable = Tangible product (Duration > 0). Milestone = Date/Event (Duration = 0)."
  },
  {
    "id": "itpm-u2-cmp-003",
    "title": "Kano Model vs MoSCoW Method",
    "unit": "Unit 2",
    "description": "Comparison between customer-perceived value modeling and release timebox prioritization.",
    "columns": [
      "Kano Model",
      "MoSCoW Method"
    ],
    "criteria": [
      {
        "aspect": "Origin & Context",
        "itemA": "Noriaki Kano (quality control and customer satisfaction).",
        "itemB": "Dai Clegg, Oracle UK in 1994 (software requirements prioritization).",
        "keyDifference": "Kano Model: Noriaki Kano (quality control and customer satisfaction). vs MoSCoW Method: Dai Clegg, Oracle UK in 1994 (software requirements prioritization)."
      },
      {
        "aspect": "Analytical Lens",
        "itemA": "Customer satisfaction perspective (emotional and behavioral user reaction).",
        "itemB": "Project delivery and governance perspective (contractual necessity and release urgency).",
        "keyDifference": "Kano Model: Customer satisfaction perspective (emotional and behavioral user reaction). vs MoSCoW Method: Project delivery and governance perspective (contractual necessity and release urgency)."
      },
      {
        "aspect": "Categories",
        "itemA": "Basic (must-be), Performance (linear satisfier), Delighters (attractive).",
        "itemB": "Must-have, Should-have, Could-have, Won't-have.",
        "keyDifference": "Kano Model: Basic (must-be), Performance (linear satisfier), Delighters (attractive). vs MoSCoW Method: Must-have, Should-have, Could-have, Won't-have."
      },
      {
        "aspect": "Handling Pressure",
        "itemA": "Prioritize 100% Basics -> Optimize Performance -> Add few Delighters.",
        "itemB": "Protect Must-haves -> Sacrifice Could-haves first, then Should-haves if time runs out.",
        "keyDifference": "Kano Model: Prioritize 100% Basics -> Optimize Performance -> Add few Delighters. vs MoSCoW Method: Protect Must-haves -> Sacrifice Could-haves first, then Should-haves if time runs out."
      }
    ],
    "examTrap": "Kano measures customer satisfaction dynamics; MoSCoW prioritizes delivery timebox necessity.",
    "memoryRule": "Kano = Customer emotion (Basic/Performance/Delight). MoSCoW = Delivery priority (Must/Should/Could/Won't)."
  },
  {
    "id": "itpm-u2-cmp-004",
    "title": "Kano Basic Requirements vs Kano Delighters",
    "unit": "Unit 2",
    "description": "Analysis of the asymmetric customer satisfaction curves between mandatory and attractive attributes.",
    "columns": [
      "Kano Basic Requirements",
      "Kano Delighters"
    ],
    "criteria": [
      {
        "aspect": "Customer Expectation",
        "itemA": "Taken for granted as obvious; customers rarely mention them in interviews.",
        "itemB": "Completely unexpected and unprompted; surprises and wows the customer.",
        "keyDifference": "Kano Basic Requirements: Taken for granted as obvious; customers rarely mention them in interviews. vs Kano Delighters: Completely unexpected and unprompted; surprises and wows the customer."
      },
      {
        "aspect": "Effect of Absence",
        "itemA": "Causes severe dissatisfaction and total product rejection.",
        "itemB": "Causes zero dissatisfaction because customers never anticipated the feature.",
        "keyDifference": "Kano Basic Requirements: Causes severe dissatisfaction and total product rejection. vs Kano Delighters: Causes zero dissatisfaction because customers never anticipated the feature."
      },
      {
        "aspect": "Effect of Presence",
        "itemA": "Produces neutral satisfaction (merely prevents outrage).",
        "itemB": "Dramatically elevates satisfaction to premium levels.",
        "keyDifference": "Kano Basic Requirements: Produces neutral satisfaction (merely prevents outrage). vs Kano Delighters: Dramatically elevates satisfaction to premium levels."
      },
      {
        "aspect": "cRobot Example",
        "itemA": "Physical robot mobility (moving around the house).",
        "itemB": "Human-like head tilt/movement during social interaction.",
        "keyDifference": "Kano Basic Requirements: Physical robot mobility (moving around the house). vs Kano Delighters: Human-like head tilt/movement during social interaction."
      }
    ],
    "examTrap": "Absence of Delighters causes ZERO dissatisfaction; absence of Basic needs causes severe dissatisfaction.",
    "memoryRule": "Basic = Taken for granted (outrage if absent). Delighter = Unexpected surprise (zero complaint if absent)."
  },
  {
    "id": "itpm-u2-cmp-005",
    "title": "Urgent Activities vs Important Activities",
    "unit": "Unit 2",
    "description": "Prioritization distinction between deadline pressure and strategic project contribution.",
    "columns": [
      "Urgent Activities",
      "Important Activities"
    ],
    "criteria": [
      {
        "aspect": "Core Driver",
        "itemA": "Immediate deadline pressure or emerging crisis demanding attention.",
        "itemB": "Long-term strategic value and fundamental project goal attainment.",
        "keyDifference": "Urgent Activities: Immediate deadline pressure or emerging crisis demanding attention. vs Important Activities: Long-term strategic value and fundamental project goal attainment."
      },
      {
        "aspect": "Team Mindset",
        "itemA": "Defensive, reactive, pressured mindset prone to knee-jerk suboptimal choices.",
        "itemB": "Proactive, deliberate, rational mindset open to strategic opportunities.",
        "keyDifference": "Urgent Activities: Defensive, reactive, pressured mindset prone to knee-jerk suboptimal choices. vs Important Activities: Proactive, deliberate, rational mindset open to strategic opportunities."
      },
      {
        "aspect": "Course Book Example",
        "itemA": "Routine progress reporting to external stakeholders (High Urgency, Low Importance).",
        "itemB": "Architectural design, risk mitigation, and proactive planning (Low Urgency, High Importance).",
        "keyDifference": "Urgent Activities: Routine progress reporting to external stakeholders (High Urgency, Low Importance). vs Important Activities: Architectural design, risk mitigation, and proactive planning (Low Urgency, High Importance)."
      },
      {
        "aspect": "Strategic Goal",
        "itemA": "Resolve crisis quickly or automate/delegate to minimize distraction.",
        "itemB": "Dedicate focused engineering hours to ensure durable project success.",
        "keyDifference": "Urgent Activities: Resolve crisis quickly or automate/delegate to minimize distraction. vs Important Activities: Dedicate focused engineering hours to ensure durable project success."
      }
    ],
    "examTrap": "External status reporting is High Urgency + Low Importance; proactive risk planning is High Importance + Low Urgency.",
    "memoryRule": "Urgent = Reactive pressure. Important = Long-term strategic value."
  },
  {
    "id": "itpm-u2-cmp-006",
    "title": "Finish-to-Start (FS) vs Start-to-Start (SS)",
    "unit": "Unit 2",
    "description": "Sequential dependency versus concurrent parallel task execution.",
    "columns": [
      "Finish-to-Start (FS)",
      "Start-to-Start (SS)"
    ],
    "criteria": [
      {
        "aspect": "Logical Rule",
        "itemA": "Successor cannot start until Predecessor has completely finished.",
        "itemB": "Successor can start once Predecessor has started.",
        "keyDifference": "Finish-to-Start (FS): Successor cannot start until Predecessor has completely finished. vs Start-to-Start (SS): Successor can start once Predecessor has started."
      },
      {
        "aspect": "Frequency",
        "itemA": "Default and most common relationship in project management.",
        "itemB": "Frequent relationship used to enable concurrent engineering.",
        "keyDifference": "Finish-to-Start (FS): Default and most common relationship in project management. vs Start-to-Start (SS): Frequent relationship used to enable concurrent engineering."
      },
      {
        "aspect": "Schedule Impact",
        "itemA": "Strictly sequential; total duration equals sum of both activities.",
        "itemB": "Enables activity overlap (concurrency), compressing total duration.",
        "keyDifference": "Finish-to-Start (FS): Strictly sequential; total duration equals sum of both activities. vs Start-to-Start (SS): Enables activity overlap (concurrency), compressing total duration."
      },
      {
        "aspect": "Course Book Example",
        "itemA": "Robot hardware manufacturing must finish before system testing begins.",
        "itemB": "Software coding begins as soon as hardware construction begins.",
        "keyDifference": "Finish-to-Start (FS): Robot hardware manufacturing must finish before system testing begins. vs Start-to-Start (SS): Software coding begins as soon as hardware construction begins."
      }
    ],
    "examTrap": "FS is the natural default precedence; SS indicates concurrent parallel workstreams.",
    "memoryRule": "FS = Finish A then start B. SS = Start A and start B together."
  },
  {
    "id": "itpm-u2-cmp-007",
    "title": "PERT Network Analysis vs Gantt Chart",
    "unit": "Unit 2",
    "description": "Complementary scheduling tools: mathematical network logic versus temporal timeline visualization.",
    "columns": [
      "PERT Network Analysis",
      "Gantt Chart"
    ],
    "criteria": [
      {
        "aspect": "Primary Strength",
        "itemA": "Models complex network dependencies, calculates critical path, and reveals slack.",
        "itemB": "Provides intuitive, visual calendar timeline easily understood by stakeholders.",
        "keyDifference": "PERT Network Analysis: Models complex network dependencies, calculates critical path, and reveals slack. vs Gantt Chart: Provides intuitive, visual calendar timeline easily understood by stakeholders."
      },
      {
        "aspect": "Visual Format",
        "itemA": "Node-and-arrow network diagram emphasizing logical precedence.",
        "itemB": "Horizontal bar chart along calendar dates showing durations and overlaps.",
        "keyDifference": "PERT Network Analysis: Node-and-arrow network diagram emphasizing logical precedence. vs Gantt Chart: Horizontal bar chart along calendar dates showing durations and overlaps."
      },
      {
        "aspect": "Resource & Cost Visibility",
        "itemA": "Focuses on mathematical duration, earliest/latest times, and buffers.",
        "itemB": "Does NOT show resource quantities or costs (major course book limitation).",
        "keyDifference": "PERT Network Analysis: Focuses on mathematical duration, earliest/latest times, and buffers. vs Gantt Chart: Does NOT show resource quantities or costs (major course book limitation)."
      },
      {
        "aspect": "Relationship",
        "itemA": "Provides underlying mathematical calculations supporting the schedule.",
        "itemB": "Translates PERT calculations into the public schedule presentation.",
        "keyDifference": "PERT Network Analysis: Provides underlying mathematical calculations supporting the schedule. vs Gantt Chart: Translates PERT calculations into the public schedule presentation."
      }
    ],
    "examTrap": "PERT shows logical dependencies and critical path calculation; Gantt shows calendar schedules and duration visually.",
    "memoryRule": "PERT = Logical sequence & slack analysis. Gantt = Calendar timeline & progress tracking."
  },
  {
    "id": "itpm-u2-cmp-008",
    "title": "Forward Pass vs Backward Pass",
    "unit": "Unit 2",
    "description": "Mathematical calculation passes in PERT network diagramming for float determination.",
    "columns": [
      "Forward Pass",
      "Backward Pass"
    ],
    "criteria": [
      {
        "aspect": "Direction of Flow",
        "itemA": "From project beginning (Day 0) to project completion.",
        "itemB": "From target project completion date backward to Day 0.",
        "keyDifference": "Forward Pass: From project beginning (Day 0) to project completion. vs Backward Pass: From target project completion date backward to Day 0."
      },
      {
        "aspect": "Values Calculated",
        "itemA": "Earliest Start Time (EST) and Earliest Finish Time (EFT).",
        "itemB": "Latest Finish Time (LFT) and Latest Start Time (LST).",
        "keyDifference": "Forward Pass: Earliest Start Time (EST) and Earliest Finish Time (EFT). vs Backward Pass: Latest Finish Time (LFT) and Latest Start Time (LST)."
      },
      {
        "aspect": "Core Formula",
        "itemA": "EFT = EST + Duration.",
        "itemB": "LST = LFT - Duration.",
        "keyDifference": "Forward Pass: EFT = EST + Duration. vs Backward Pass: LST = LFT - Duration."
      },
      {
        "aspect": "Multiple Branches Rule",
        "itemA": "At a merge: EST(successor) = MAXIMUM of all predecessor EFTs.",
        "itemB": "At a burst: LFT(predecessor) = MINIMUM of all successor LSTs.",
        "keyDifference": "Forward Pass: At a merge: EST(successor) = MAXIMUM of all predecessor EFTs. vs Backward Pass: At a burst: LFT(predecessor) = MINIMUM of all successor LSTs."
      }
    ],
    "examTrap": "Forward pass calculates Earliest Times (take MAX at merges); Backward pass calculates Latest Times (take MIN at bursts).",
    "memoryRule": "Forward = EFT = EST + Dur (MAX at merge). Backward = LST = LFT - Dur (MIN at burst)."
  },
  {
    "id": "itpm-u2-cmp-009",
    "title": "Definition of Done (DoD) vs Customer Acceptance",
    "unit": "Unit 2",
    "description": "Internal technical quality compliance versus external client contractual verification.",
    "columns": [
      "Definition of Done (DoD)",
      "Customer Acceptance"
    ],
    "criteria": [
      {
        "aspect": "Ownership & Authority",
        "itemA": "Created, owned, and enforced internally by the development team.",
        "itemB": "Evaluated and authorized externally by the customer, sponsor, or client.",
        "keyDifference": "Definition of Done (DoD): Created, owned, and enforced internally by the development team. vs Customer Acceptance: Evaluated and authorized externally by the customer, sponsor, or client."
      },
      {
        "aspect": "Primary Purpose",
        "itemA": "Internal quality assurance filter ensuring code standards, tests, and documentation.",
        "itemB": "Confirms deliverables fulfill business needs and meet contractual requirements.",
        "keyDifference": "Definition of Done (DoD): Internal quality assurance filter ensuring code standards, tests, and documentation. vs Customer Acceptance: Confirms deliverables fulfill business needs and meet contractual requirements."
      },
      {
        "aspect": "Evaluation Frequency",
        "itemA": "Continuous; checked at the completion of every task, user story, and sprint.",
        "itemB": "Periodic; conducted at formal milestone reviews, quality gates, and project closeout.",
        "keyDifference": "Definition of Done (DoD): Continuous; checked at the completion of every task, user story, and sprint. vs Customer Acceptance: Periodic; conducted at formal milestone reviews, quality gates, and project closeout."
      },
      {
        "aspect": "Evolution",
        "itemA": "Living artifact that evolves and tightens as team maturity improves.",
        "itemB": "Formally governed by project baseline contracts and agreed acceptance criteria.",
        "keyDifference": "Definition of Done (DoD): Living artifact that evolves and tightens as team maturity improves. vs Customer Acceptance: Formally governed by project baseline contracts and agreed acceptance criteria."
      }
    ],
    "examTrap": "DoD is an internal engineering team quality agreement; Customer Acceptance is external client formal contract sign-off.",
    "memoryRule": "DoD = Internal team QA filter. Acceptance = External client sign-off."
  },
  {
    "id": "itpm-u2-cmp-010",
    "title": "Quality Gate vs Project Milestone",
    "unit": "Unit 2",
    "description": "Temporal stage marker versus formal quality audit checkpoint with Go/No-Go authority.",
    "columns": [
      "Quality Gate",
      "Project Milestone"
    ],
    "criteria": [
      {
        "aspect": "Definition",
        "itemA": "Deliverable definition plus formal review verifying adequate quality at stage end.",
        "itemB": "A significant moment or point in time marking a transition or accomplishment.",
        "keyDifference": "Quality Gate: Deliverable definition plus formal review verifying adequate quality at stage end. vs Project Milestone: A significant moment or point in time marking a transition or accomplishment."
      },
      {
        "aspect": "Quality Verification",
        "itemA": "Actively inspects and verifies deliverables against technical quality standards.",
        "itemB": "Does not perform any quality check itself; simply marks a calendar event.",
        "keyDifference": "Quality Gate: Actively inspects and verifies deliverables against technical quality standards. vs Project Milestone: Does not perform any quality check itself; simply marks a calendar event."
      },
      {
        "aspect": "Decision Authority",
        "itemA": "Issues formal Go / Conditional / No-Go decision governing phase transition.",
        "itemB": "Does not issue governance decisions; indicates date attainment.",
        "keyDifference": "Quality Gate: Issues formal Go / Conditional / No-Go decision governing phase transition. vs Project Milestone: Does not issue governance decisions; indicates date attainment."
      },
      {
        "aspect": "Course Book Authority",
        "itemA": "Defined by Kneuper (2018) as an intermediate acceptance review in large projects.",
        "itemB": "Universal project milestone tracking across all methodologies.",
        "keyDifference": "Quality Gate: Defined by Kneuper (2018) as an intermediate acceptance review in large projects. vs Project Milestone: Universal project milestone tracking across all methodologies."
      }
    ],
    "examTrap": "Milestones mark reference points in time; Quality Gates perform formal deliverable audits with Go/No-Go decisions.",
    "memoryRule": "Milestone = Calendar flag. Quality Gate = Formal review + Go/No-Go decision."
  }
];
