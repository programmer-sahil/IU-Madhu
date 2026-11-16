import { MasterComparison, CheatSheetComparison } from "../../../../types";

export const unit5CheatSheetComparisons: CheatSheetComparison[] = [
  {
    "conceptA": "RUP Inception Phase",
    "conceptB": "RUP Elaboration Phase",
    "comparisonPoints": [
      {
        "criterion": "Primary Objective",
        "detailA": "Establish business case, scope boundaries, and initial feasibility",
        "detailB": "Establish executable architectural baseline and mitigate high risks"
      },
      {
        "criterion": "Phase Deliverable",
        "detailA": "Project charter, business case, and high-level use cases",
        "detailB": "Detailed requirements, UML diagrams, and architectural view"
      },
      {
        "criterion": "Requirements Depth",
        "detailA": "High-level use cases and vision statement",
        "detailB": "Detailed specification of critical architectural use cases"
      },
      {
        "criterion": "Resource Allocation",
        "detailA": "Small team, minimal budget expenditure",
        "detailB": "Moderate team size, focused engineering spikes"
      }
    ]
  },
  {
    "conceptA": "RUP Elaboration Phase",
    "conceptB": "RUP Construction Phase",
    "comparisonPoints": [
      {
        "criterion": "Core Focus",
        "detailA": "Architectural design, risk mitigation, and technical feasibility",
        "detailB": "Bulk component coding, feature implementation, and testing"
      },
      {
        "criterion": "Phase Deliverable",
        "detailA": "System architecture, UML models, and risk analysis",
        "detailB": "Complete programmed code and verified test suites"
      },
      {
        "criterion": "Resource Expenditure",
        "detailA": "Moderate expenditure (~15-20% of effort)",
        "detailB": "Largest expenditure of budget and developer hours (~50-60%)"
      },
      {
        "criterion": "Deliverable",
        "detailA": "Proven architectural baseline with core use cases",
        "detailB": "Feature-complete beta software ready for user transition"
      }
    ]
  },
  {
    "conceptA": "RUP Construction Phase",
    "conceptB": "RUP Transition Phase",
    "comparisonPoints": [
      {
        "criterion": "Operating Environment",
        "detailA": "Internal developer and test lab environments",
        "detailB": "Live customer or staging user environment"
      },
      {
        "criterion": "Primary Activities",
        "detailA": "Building components, writing unit tests, feature integration",
        "detailB": "Beta testing, user training, data conversion, and deployment"
      },
      {
        "criterion": "Phase Deliverable",
        "detailA": "Complete tested software components ready for deployment",
        "detailB": "Customer acceptance, user documentation, and operational handover"
      },
      {
        "criterion": "Primary User Role",
        "detailA": "Limited; occasional review of internal builds",
        "detailB": "Extensive; active beta testing and operational acceptance"
      }
    ]
  },
  {
    "conceptA": "Throw-away Prototyping",
    "conceptB": "Evolutionary Prototyping",
    "comparisonPoints": [
      {
        "criterion": "Intended Fate of Code",
        "detailA": "Discarded completely after learning is achieved",
        "detailB": "Preserved, refactored, and evolved into final production software"
      },
      {
        "criterion": "Primary Goal",
        "detailA": "Clarify ambiguous requirements or test feasibility",
        "detailB": "Incrementally build and deliver working product slices"
      },
      {
        "criterion": "Code Quality Standards",
        "detailA": "Quick, rudimentary; ignores error handling and security",
        "detailB": "Production-grade from day one; high architectural rigor"
      },
      {
        "criterion": "Development Speed",
        "detailA": "Extremely fast initial build",
        "detailB": "Deliberate, disciplined incremental development"
      }
    ]
  },
  {
    "conceptA": "Prototype",
    "conceptB": "Production Software",
    "comparisonPoints": [
      {
        "criterion": "Primary Purpose",
        "detailA": "Demonstrate concepts and validate user preferences",
        "detailB": "Reliably run live business operations under continuous load"
      },
      {
        "criterion": "Non-Functional Attributes",
        "detailA": "Omitted (poor concurrency, minimal security, limited error handling)",
        "detailB": "Hardened (robust security, scalability, disaster recovery, concurrency)"
      },
      {
        "criterion": "Data Integrity",
        "detailA": "Dummy mock data, unvalidated inputs",
        "detailB": "Strict transactional integrity, ACID compliance, encrypted storage"
      },
      {
        "criterion": "Documentation & Auditing",
        "detailA": "Minimal or non-existent",
        "detailB": "Comprehensive operational manuals, audit logs, and compliance records"
      }
    ]
  },
  {
    "conceptA": "Agile Left-Hand Values",
    "conceptB": "Agile Right-Hand Items",
    "comparisonPoints": [
      {
        "criterion": "Agile Priority",
        "detailA": "Valued MORE (Primary drivers of agility and success)",
        "detailB": "Valued LESS (Still retain value, but secondary to left items)"
      },
      {
        "criterion": "Core Items",
        "detailA": "Individuals & interactions, Working software, Customer collaboration, Responding to change",
        "detailB": "Processes & tools, Comprehensive documentation, Contract negotiation, Following a plan"
      },
      {
        "criterion": "Adaptability Focus",
        "detailA": "High responsiveness to volatile human and market factors",
        "detailB": "Structural control and formal predictability"
      },
      {
        "criterion": "Failure Mode if Ignored",
        "detailA": "Rigidity, bureaucracy, alienated users, delayed value",
        "detailB": "Lack of audit trails, undefined contracts, tool chaos"
      }
    ]
  },
  {
    "conceptA": "Self-Organizing Agile Team",
    "conceptB": "Traditional Hierarchical Team",
    "comparisonPoints": [
      {
        "criterion": "Decision-Making on 'How'",
        "detailA": "Autonomous team decision through consensus and expertise",
        "detailB": "Dictated top-down by project manager or department head"
      },
      {
        "criterion": "Accountability Structure",
        "detailA": "Mutual accountability; team succeeds or fails collectively",
        "detailB": "Individual accountability; individual finger-pointing for errors"
      },
      {
        "criterion": "Skill Distribution",
        "detailA": "Cross-functional (all required disciplines embedded in team)",
        "detailB": "Functional silos (separate development, QA, and DBA departments)"
      },
      {
        "criterion": "Communication Pattern",
        "detailA": "Continuous, informal, high-bandwidth peer-to-peer dialogue",
        "detailB": "Formal status meetings, written memos, and ticketing queues"
      }
    ]
  },
  {
    "conceptA": "Product Owner",
    "conceptB": "Scrum Master",
    "comparisonPoints": [
      {
        "criterion": "Core Question Owned",
        "detailA": "WHAT gets built and in what business order",
        "detailB": "HOW the team collaborates and enacts Scrum principles"
      },
      {
        "criterion": "Artifact Ownership",
        "detailA": "Sole owner of the Product Backlog",
        "detailB": "No artifact ownership; protects process and removes impediments"
      },
      {
        "criterion": "Key Success Metric",
        "detailA": "Maximizing business value and ROI of the product",
        "detailB": "Team process effectiveness, psychological safety, and velocity stability"
      },
      {
        "criterion": "Primary Relationship",
        "detailA": "Faces outward toward stakeholders, customers, and business",
        "detailB": "Faces inward toward Developers, coaching and clearing blockers"
      }
    ]
  },
  {
    "conceptA": "Scrum Master",
    "conceptB": "Traditional Project Manager",
    "comparisonPoints": [
      {
        "criterion": "Authority Model",
        "detailA": "Servant-leader with zero administrative authority over members",
        "detailB": "Command-and-control authority; assigns tasks and conducts reviews"
      },
      {
        "criterion": "Task Allocation",
        "detailA": "Developers self-organize and pull their own tasks",
        "detailB": "PM directly assigns tasks to specific individual team members"
      },
      {
        "criterion": "Scope & Budget Ownership",
        "detailA": "Does not manage budget or scope (handled by Product Owner)",
        "detailB": "Directly controls scope, schedule, budget, and procurement"
      },
      {
        "criterion": "Meeting Philosophy",
        "detailA": "Facilitates 15-min daily sync; removes external blockers",
        "detailB": "Chairs formal status meetings; demands milestone variance reports"
      }
    ]
  },
  {
    "conceptA": "Product Backlog",
    "conceptB": "Sprint Backlog",
    "comparisonPoints": [
      {
        "criterion": "Ownership",
        "detailA": "Solely owned and prioritized by the Product Owner",
        "detailB": "Solely owned and modified by the Developers"
      },
      {
        "criterion": "Time Horizon",
        "detailA": "Long-term; covers entire product lifecycle until disposal",
        "detailB": "Short-term; strictly covers the current active Sprint (<= 1 month)"
      },
      {
        "criterion": "Level of Detail",
        "detailA": "Top items highly detailed; lower items coarse-grained",
        "detailB": "Highly granular; broken down into specific daily engineering tasks"
      },
      {
        "criterion": "Change Authority",
        "detailA": "PO can add, delete, or re-order items at any time",
        "detailB": "Only Developers can add/remove tasks during the active Sprint"
      }
    ]
  },
  {
    "conceptA": "Sprint Review",
    "conceptB": "Sprint Retrospective",
    "comparisonPoints": [
      {
        "criterion": "Primary Subject",
        "detailA": "The PRODUCT INCREMENT delivered during the sprint",
        "detailB": "The TEAM PROCESS, relationships, tools, and practices"
      },
      {
        "criterion": "Attendees",
        "detailA": "Scrum Team PLUS external stakeholders and customers",
        "detailB": "STRICTLY the internal Scrum Team (PO, SM, Developers)"
      },
      {
        "criterion": "Direct Output",
        "detailA": "Adapted and re-prioritized Product Backlog",
        "detailB": "Actionable team improvement backlog item for immediate next sprint"
      },
      {
        "criterion": "Atmosphere Focus",
        "detailA": "Demonstration, commercial feedback, release roadmap",
        "detailB": "Blameless reflection, continuous learning, psychological safety"
      }
    ]
  },
  {
    "conceptA": "Pure Waterfall Model",
    "conceptB": "Waterfall with Feedback",
    "comparisonPoints": [
      {
        "criterion": "Phase Flow",
        "detailA": "Strictly unidirectional; never revisits prior phases",
        "detailB": "Primarily sequential, but permits backward loops to adjacent phase"
      },
      {
        "criterion": "Defect Handling",
        "detailA": "Defects in late testing require catastrophic project-wide rework",
        "detailB": "Downstream discoveries trigger localized fixes in previous phase"
      },
      {
        "criterion": "Flexibility",
        "detailA": "Completely inflexible once phase gates close",
        "detailB": "Limited flexibility to refine immediate upstream deliverables"
      },
      {
        "criterion": "Course Book Representation",
        "detailA": "Figure 38 (Cascading linear blocks)",
        "detailB": "Figure 39 (Cascading blocks with return arrows to previous phase)"
      }
    ]
  },
  {
    "conceptA": "Waterfall with Feedback",
    "conceptB": "Sashimi Model",
    "comparisonPoints": [
      {
        "criterion": "Phase Concurrency",
        "detailA": "Phases are executed sequentially; feedback occurs retrospectively",
        "detailB": "Adjacent phases overlap concurrently like sliced raw fish"
      },
      {
        "criterion": "Schedule Duration",
        "detailA": "Full cumulative duration of all sequential phase durations",
        "detailB": "Compressed duration due to parallel phase execution"
      },
      {
        "criterion": "Communication Need",
        "detailA": "Periodic formal hand-offs at milestone boundaries",
        "detailB": "Intensive, continuous communication between overlapping specialists"
      },
      {
        "criterion": "Rework Exposure",
        "detailA": "Rework contained to immediate prior phase iteration",
        "detailB": "Rework risk if upstream specs change while downstream code is ongoing"
      }
    ]
  },
  {
    "conceptA": "Pure Waterfall",
    "conceptB": "V-Model",
    "comparisonPoints": [
      {
        "criterion": "Geometry & Visual Form",
        "detailA": "Downward linear cascade (Figure 38)",
        "detailB": "V-shaped geometry: descending specs, vertex coding, ascending test"
      },
      {
        "criterion": "Test Planning Timing",
        "detailA": "Test planning is deferred until coding finishes near end",
        "detailB": "Test plans are designed early on the left side during specification"
      },
      {
        "criterion": "Traceability",
        "detailA": "Implicit through phase gate documents",
        "detailB": "Explicit 1:1 horizontal mapping between spec levels and test levels"
      },
      {
        "criterion": "Safety-Critical Applicability",
        "detailA": "Prone to late defect discovery; high failure risk",
        "detailB": "Industry standard for safety-critical systems needing formal audit trails"
      }
    ]
  },
  {
    "conceptA": "Plan-Driven (Predictive)",
    "conceptB": "Agile (Adaptive)",
    "comparisonPoints": [
      {
        "criterion": "Requirement Assumption",
        "detailA": "Requirements can be fully known, frozen, and baselined upfront",
        "detailB": "Requirements inevitably evolve as users experience working software"
      },
      {
        "criterion": "Cost of Change",
        "detailA": "Rises exponentially the later in the lifecycle change occurs",
        "detailB": "Kept relatively flat through modular architecture and short sprints"
      },
      {
        "criterion": "Primary Metric of Progress",
        "detailA": "Conformance to plan, milestone sign-offs, and earned value",
        "detailB": "Working, potentially releasable software delivered to users"
      },
      {
        "criterion": "Ideal Project Domain",
        "detailA": "Stable requirements, safety-critical, strict regulatory audits",
        "detailB": "High volatility, innovative products, exploratory software"
      }
    ]
  }
];

export const unit5Comparisons: MasterComparison[] = [
  {
    "id": "itpm-u5-comp-001",
    "title": "RUP Inception Phase vs RUP Elaboration Phase",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between RUP Inception Phase and RUP Elaboration Phase.",
    "columns": [
      "RUP Inception Phase",
      "RUP Elaboration Phase"
    ],
    "criteria": [
      {
        "aspect": "Primary Objective",
        "itemA": "Establish business case, scope boundaries, and initial feasibility",
        "itemB": "Establish executable architectural baseline and mitigate high risks",
        "keyDifference": "Establish business case, scope boundaries, and initial feasibility vs Establish executable architectural baseline and mitigate high risks"
      },
      {
        "aspect": "Phase Deliverable",
        "itemA": "Project charter, business case, and high-level use cases",
        "itemB": "Detailed requirements, UML diagrams, and architectural view",
        "keyDifference": "Project charter and business case vs Detailed requirements and UML architectural view"
      },
      {
        "aspect": "Requirements Depth",
        "itemA": "High-level use cases and vision statement",
        "itemB": "Detailed specification of critical architectural use cases",
        "keyDifference": "High-level use cases and vision statement vs Detailed specification of critical architectural use cases"
      },
      {
        "aspect": "Resource Allocation",
        "itemA": "Small team, minimal budget expenditure",
        "itemB": "Moderate team size, focused engineering spikes",
        "keyDifference": "Small team, minimal budget expenditure vs Moderate team size, focused engineering spikes"
      }
    ],
    "examTrap": "Do not confuse RUP Inception Phase with RUP Elaboration Phase. Distinguish their roles and boundaries.",
    "memoryRule": "RUP Inception Phase != RUP Elaboration Phase"
  },
  {
    "id": "itpm-u5-comp-002",
    "title": "RUP Elaboration Phase vs RUP Construction Phase",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between RUP Elaboration Phase and RUP Construction Phase.",
    "columns": [
      "RUP Elaboration Phase",
      "RUP Construction Phase"
    ],
    "criteria": [
      {
        "aspect": "Core Focus",
        "itemA": "Architectural design, risk mitigation, and technical feasibility",
        "itemB": "Bulk component coding, feature implementation, and testing",
        "keyDifference": "Architectural design, risk mitigation, and technical feasibility vs Bulk component coding, feature implementation, and testing"
      },
      {
        "aspect": "Phase Deliverable",
        "itemA": "System architecture, UML models, and risk analysis",
        "itemB": "Complete programmed code and verified test suites",
        "keyDifference": "Architectural UML models and risk analysis vs Complete programmed code and test suites"
      },
      {
        "aspect": "Resource Expenditure",
        "itemA": "Moderate expenditure (~15-20% of effort)",
        "itemB": "Largest expenditure of budget and developer hours (~50-60%)",
        "keyDifference": "Moderate expenditure (~15-20% of effort) vs Largest expenditure of budget and developer hours (~50-60%)"
      },
      {
        "aspect": "Deliverable",
        "itemA": "Proven architectural baseline with core use cases",
        "itemB": "Feature-complete beta software ready for user transition",
        "keyDifference": "Proven architectural baseline with core use cases vs Feature-complete beta software ready for user transition"
      }
    ],
    "examTrap": "Do not confuse RUP Elaboration Phase with RUP Construction Phase. Distinguish their roles and boundaries.",
    "memoryRule": "RUP Elaboration Phase != RUP Construction Phase"
  },
  {
    "id": "itpm-u5-comp-003",
    "title": "RUP Construction Phase vs RUP Transition Phase",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between RUP Construction Phase and RUP Transition Phase.",
    "columns": [
      "RUP Construction Phase",
      "RUP Transition Phase"
    ],
    "criteria": [
      {
        "aspect": "Operating Environment",
        "itemA": "Internal developer and test lab environments",
        "itemB": "Live customer or staging user environment",
        "keyDifference": "Internal developer and test lab environments vs Live customer or staging user environment"
      },
      {
        "aspect": "Primary Activities",
        "itemA": "Building components, writing unit tests, feature integration",
        "itemB": "Beta testing, user training, data conversion, and deployment",
        "keyDifference": "Building components, writing unit tests, feature integration vs Beta testing, user training, data conversion, and deployment"
      },
      {
        "aspect": "Phase Deliverable",
        "itemA": "Complete tested software components ready for deployment",
        "itemB": "Customer acceptance, user documentation, and operational handover",
        "keyDifference": "Tested software components vs Customer acceptance and operational handover"
      },
      {
        "aspect": "Primary User Role",
        "itemA": "Limited; occasional review of internal builds",
        "itemB": "Extensive; active beta testing and operational acceptance",
        "keyDifference": "Limited; occasional review of internal builds vs Extensive; active beta testing and operational acceptance"
      }
    ],
    "examTrap": "Do not confuse RUP Construction Phase with RUP Transition Phase. Distinguish their roles and boundaries.",
    "memoryRule": "RUP Construction Phase != RUP Transition Phase"
  },
  {
    "id": "itpm-u5-comp-004",
    "title": "Throw-away Prototyping vs Evolutionary Prototyping",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Throw-away Prototyping and Evolutionary Prototyping.",
    "columns": [
      "Throw-away Prototyping",
      "Evolutionary Prototyping"
    ],
    "criteria": [
      {
        "aspect": "Intended Fate of Code",
        "itemA": "Discarded completely after learning is achieved",
        "itemB": "Preserved, refactored, and evolved into final production software",
        "keyDifference": "Discarded completely after learning is achieved vs Preserved, refactored, and evolved into final production software"
      },
      {
        "aspect": "Primary Goal",
        "itemA": "Clarify ambiguous requirements or test feasibility",
        "itemB": "Incrementally build and deliver working product slices",
        "keyDifference": "Clarify ambiguous requirements or test feasibility vs Incrementally build and deliver working product slices"
      },
      {
        "aspect": "Code Quality Standards",
        "itemA": "Quick, rudimentary; ignores error handling and security",
        "itemB": "Production-grade from day one; high architectural rigor",
        "keyDifference": "Quick, rudimentary; ignores error handling and security vs Production-grade from day one; high architectural rigor"
      },
      {
        "aspect": "Development Speed",
        "itemA": "Extremely fast initial build",
        "itemB": "Deliberate, disciplined incremental development",
        "keyDifference": "Extremely fast initial build vs Deliberate, disciplined incremental development"
      }
    ],
    "examTrap": "Do not confuse Throw-away Prototyping with Evolutionary Prototyping. Distinguish their roles and boundaries.",
    "memoryRule": "Throw-away Prototyping != Evolutionary Prototyping"
  },
  {
    "id": "itpm-u5-comp-005",
    "title": "Prototype vs Production Software",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Prototype and Production Software.",
    "columns": [
      "Prototype",
      "Production Software"
    ],
    "criteria": [
      {
        "aspect": "Primary Purpose",
        "itemA": "Demonstrate concepts and validate user preferences",
        "itemB": "Reliably run live business operations under continuous load",
        "keyDifference": "Demonstrate concepts and validate user preferences vs Reliably run live business operations under continuous load"
      },
      {
        "aspect": "Non-Functional Attributes",
        "itemA": "Omitted (poor concurrency, minimal security, limited error handling)",
        "itemB": "Hardened (robust security, scalability, disaster recovery, concurrency)",
        "keyDifference": "Omitted (poor concurrency, minimal security, limited error handling) vs Hardened (robust security, scalability, disaster recovery, concurrency)"
      },
      {
        "aspect": "Data Integrity",
        "itemA": "Dummy mock data, unvalidated inputs",
        "itemB": "Strict transactional integrity, ACID compliance, encrypted storage",
        "keyDifference": "Dummy mock data, unvalidated inputs vs Strict transactional integrity, ACID compliance, encrypted storage"
      },
      {
        "aspect": "Documentation & Auditing",
        "itemA": "Minimal or non-existent",
        "itemB": "Comprehensive operational manuals, audit logs, and compliance records",
        "keyDifference": "Minimal or non-existent vs Comprehensive operational manuals, audit logs, and compliance records"
      }
    ],
    "examTrap": "Do not confuse Prototype with Production Software. Distinguish their roles and boundaries.",
    "memoryRule": "Prototype != Production Software"
  },
  {
    "id": "itpm-u5-comp-006",
    "title": "Agile Left-Hand Values vs Agile Right-Hand Items",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Agile Left-Hand Values and Agile Right-Hand Items.",
    "columns": [
      "Agile Left-Hand Values",
      "Agile Right-Hand Items"
    ],
    "criteria": [
      {
        "aspect": "Agile Priority",
        "itemA": "Valued MORE (Primary drivers of agility and success)",
        "itemB": "Valued LESS (Still retain value, but secondary to left items)",
        "keyDifference": "Valued MORE (Primary drivers of agility and success) vs Valued LESS (Still retain value, but secondary to left items)"
      },
      {
        "aspect": "Core Items",
        "itemA": "Individuals & interactions, Working software, Customer collaboration, Responding to change",
        "itemB": "Processes & tools, Comprehensive documentation, Contract negotiation, Following a plan",
        "keyDifference": "Individuals & interactions, Working software, Customer collaboration, Responding to change vs Processes & tools, Comprehensive documentation, Contract negotiation, Following a plan"
      },
      {
        "aspect": "Adaptability Focus",
        "itemA": "High responsiveness to volatile human and market factors",
        "itemB": "Structural control and formal predictability",
        "keyDifference": "High responsiveness to volatile human and market factors vs Structural control and formal predictability"
      },
      {
        "aspect": "Failure Mode if Ignored",
        "itemA": "Rigidity, bureaucracy, alienated users, delayed value",
        "itemB": "Lack of audit trails, undefined contracts, tool chaos",
        "keyDifference": "Rigidity, bureaucracy, alienated users, delayed value vs Lack of audit trails, undefined contracts, tool chaos"
      }
    ],
    "examTrap": "Do not confuse Agile Left-Hand Values with Agile Right-Hand Items. Distinguish their roles and boundaries.",
    "memoryRule": "Agile Left-Hand Values != Agile Right-Hand Items"
  },
  {
    "id": "itpm-u5-comp-007",
    "title": "Self-Organizing Agile Team vs Traditional Hierarchical Team",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Self-Organizing Agile Team and Traditional Hierarchical Team.",
    "columns": [
      "Self-Organizing Agile Team",
      "Traditional Hierarchical Team"
    ],
    "criteria": [
      {
        "aspect": "Decision-Making on 'How'",
        "itemA": "Autonomous team decision through consensus and expertise",
        "itemB": "Dictated top-down by project manager or department head",
        "keyDifference": "Autonomous team decision through consensus and expertise vs Dictated top-down by project manager or department head"
      },
      {
        "aspect": "Accountability Structure",
        "itemA": "Mutual accountability; team succeeds or fails collectively",
        "itemB": "Individual accountability; individual finger-pointing for errors",
        "keyDifference": "Mutual accountability; team succeeds or fails collectively vs Individual accountability; individual finger-pointing for errors"
      },
      {
        "aspect": "Skill Distribution",
        "itemA": "Cross-functional (all required disciplines embedded in team)",
        "itemB": "Functional silos (separate development, QA, and DBA departments)",
        "keyDifference": "Cross-functional (all required disciplines embedded in team) vs Functional silos (separate development, QA, and DBA departments)"
      },
      {
        "aspect": "Communication Pattern",
        "itemA": "Continuous, informal, high-bandwidth peer-to-peer dialogue",
        "itemB": "Formal status meetings, written memos, and ticketing queues",
        "keyDifference": "Continuous, informal, high-bandwidth peer-to-peer dialogue vs Formal status meetings, written memos, and ticketing queues"
      }
    ],
    "examTrap": "Do not confuse Self-Organizing Agile Team with Traditional Hierarchical Team. Distinguish their roles and boundaries.",
    "memoryRule": "Self-Organizing Agile Team != Traditional Hierarchical Team"
  },
  {
    "id": "itpm-u5-comp-008",
    "title": "Product Owner vs Scrum Master",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Product Owner and Scrum Master.",
    "columns": [
      "Product Owner",
      "Scrum Master"
    ],
    "criteria": [
      {
        "aspect": "Core Question Owned",
        "itemA": "WHAT gets built and in what business order",
        "itemB": "HOW the team collaborates and enacts Scrum principles",
        "keyDifference": "WHAT gets built and in what business order vs HOW the team collaborates and enacts Scrum principles"
      },
      {
        "aspect": "Artifact Ownership",
        "itemA": "Sole owner of the Product Backlog",
        "itemB": "No artifact ownership; protects process and removes impediments",
        "keyDifference": "Sole owner of the Product Backlog vs No artifact ownership; protects process and removes impediments"
      },
      {
        "aspect": "Key Success Metric",
        "itemA": "Maximizing business value and ROI of the product",
        "itemB": "Team process effectiveness, psychological safety, and velocity stability",
        "keyDifference": "Maximizing business value and ROI of the product vs Team process effectiveness, psychological safety, and velocity stability"
      },
      {
        "aspect": "Primary Relationship",
        "itemA": "Faces outward toward stakeholders, customers, and business",
        "itemB": "Faces inward toward Developers, coaching and clearing blockers",
        "keyDifference": "Faces outward toward stakeholders, customers, and business vs Faces inward toward Developers, coaching and clearing blockers"
      }
    ],
    "examTrap": "Do not confuse Product Owner with Scrum Master. Distinguish their roles and boundaries.",
    "memoryRule": "Product Owner != Scrum Master"
  },
  {
    "id": "itpm-u5-comp-009",
    "title": "Scrum Master vs Traditional Project Manager",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Scrum Master and Traditional Project Manager.",
    "columns": [
      "Scrum Master",
      "Traditional Project Manager"
    ],
    "criteria": [
      {
        "aspect": "Authority Model",
        "itemA": "Servant-leader with zero administrative authority over members",
        "itemB": "Command-and-control authority; assigns tasks and conducts reviews",
        "keyDifference": "Servant-leader with zero administrative authority over members vs Command-and-control authority; assigns tasks and conducts reviews"
      },
      {
        "aspect": "Task Allocation",
        "itemA": "Developers self-organize and pull their own tasks",
        "itemB": "PM directly assigns tasks to specific individual team members",
        "keyDifference": "Developers self-organize and pull their own tasks vs PM directly assigns tasks to specific individual team members"
      },
      {
        "aspect": "Scope & Budget Ownership",
        "itemA": "Does not manage budget or scope (handled by Product Owner)",
        "itemB": "Directly controls scope, schedule, budget, and procurement",
        "keyDifference": "Does not manage budget or scope (handled by Product Owner) vs Directly controls scope, schedule, budget, and procurement"
      },
      {
        "aspect": "Meeting Philosophy",
        "itemA": "Facilitates 15-min daily sync; removes external blockers",
        "itemB": "Chairs formal status meetings; demands milestone variance reports",
        "keyDifference": "Facilitates 15-min daily sync; removes external blockers vs Chairs formal status meetings; demands milestone variance reports"
      }
    ],
    "examTrap": "Do not confuse Scrum Master with Traditional Project Manager. Distinguish their roles and boundaries.",
    "memoryRule": "Scrum Master != Traditional Project Manager"
  },
  {
    "id": "itpm-u5-comp-010",
    "title": "Product Backlog vs Sprint Backlog",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Product Backlog and Sprint Backlog.",
    "columns": [
      "Product Backlog",
      "Sprint Backlog"
    ],
    "criteria": [
      {
        "aspect": "Ownership",
        "itemA": "Solely owned and prioritized by the Product Owner",
        "itemB": "Solely owned and modified by the Developers",
        "keyDifference": "Solely owned and prioritized by the Product Owner vs Solely owned and modified by the Developers"
      },
      {
        "aspect": "Time Horizon",
        "itemA": "Long-term; covers entire product lifecycle until disposal",
        "itemB": "Short-term; strictly covers the current active Sprint (<= 1 month)",
        "keyDifference": "Long-term; covers entire product lifecycle until disposal vs Short-term; strictly covers the current active Sprint (<= 1 month)"
      },
      {
        "aspect": "Level of Detail",
        "itemA": "Top items highly detailed; lower items coarse-grained",
        "itemB": "Highly granular; broken down into specific daily engineering tasks",
        "keyDifference": "Top items highly detailed; lower items coarse-grained vs Highly granular; broken down into specific daily engineering tasks"
      },
      {
        "aspect": "Change Authority",
        "itemA": "PO can add, delete, or re-order items at any time",
        "itemB": "Only Developers can add/remove tasks during the active Sprint",
        "keyDifference": "PO can add, delete, or re-order items at any time vs Only Developers can add/remove tasks during the active Sprint"
      }
    ],
    "examTrap": "Do not confuse Product Backlog with Sprint Backlog. Distinguish their roles and boundaries.",
    "memoryRule": "Product Backlog != Sprint Backlog"
  },
  {
    "id": "itpm-u5-comp-011",
    "title": "Sprint Review vs Sprint Retrospective",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Sprint Review and Sprint Retrospective.",
    "columns": [
      "Sprint Review",
      "Sprint Retrospective"
    ],
    "criteria": [
      {
        "aspect": "Primary Subject",
        "itemA": "The PRODUCT INCREMENT delivered during the sprint",
        "itemB": "The TEAM PROCESS, relationships, tools, and practices",
        "keyDifference": "The PRODUCT INCREMENT delivered during the sprint vs The TEAM PROCESS, relationships, tools, and practices"
      },
      {
        "aspect": "Attendees",
        "itemA": "Scrum Team PLUS external stakeholders and customers",
        "itemB": "STRICTLY the internal Scrum Team (PO, SM, Developers)",
        "keyDifference": "Scrum Team PLUS external stakeholders and customers vs STRICTLY the internal Scrum Team (PO, SM, Developers)"
      },
      {
        "aspect": "Direct Output",
        "itemA": "Adapted and re-prioritized Product Backlog",
        "itemB": "Actionable team improvement backlog item for immediate next sprint",
        "keyDifference": "Adapted and re-prioritized Product Backlog vs Actionable team improvement backlog item for immediate next sprint"
      },
      {
        "aspect": "Atmosphere Focus",
        "itemA": "Demonstration, commercial feedback, release roadmap",
        "itemB": "Blameless reflection, continuous learning, psychological safety",
        "keyDifference": "Demonstration, commercial feedback, release roadmap vs Blameless reflection, continuous learning, psychological safety"
      }
    ],
    "examTrap": "Do not confuse Sprint Review with Sprint Retrospective. Distinguish their roles and boundaries.",
    "memoryRule": "Sprint Review != Sprint Retrospective"
  },
  {
    "id": "itpm-u5-comp-012",
    "title": "Pure Waterfall Model vs Waterfall with Feedback",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Pure Waterfall Model and Waterfall with Feedback.",
    "columns": [
      "Pure Waterfall Model",
      "Waterfall with Feedback"
    ],
    "criteria": [
      {
        "aspect": "Phase Flow",
        "itemA": "Strictly unidirectional; never revisits prior phases",
        "itemB": "Primarily sequential, but permits backward loops to adjacent phase",
        "keyDifference": "Strictly unidirectional; never revisits prior phases vs Primarily sequential, but permits backward loops to adjacent phase"
      },
      {
        "aspect": "Defect Handling",
        "itemA": "Defects in late testing require catastrophic project-wide rework",
        "itemB": "Downstream discoveries trigger localized fixes in previous phase",
        "keyDifference": "Defects in late testing require catastrophic project-wide rework vs Downstream discoveries trigger localized fixes in previous phase"
      },
      {
        "aspect": "Flexibility",
        "itemA": "Completely inflexible once phase gates close",
        "itemB": "Limited flexibility to refine immediate upstream deliverables",
        "keyDifference": "Completely inflexible once phase gates close vs Limited flexibility to refine immediate upstream deliverables"
      },
      {
        "aspect": "Course Book Representation",
        "itemA": "Figure 38 (Cascading linear blocks)",
        "itemB": "Figure 39 (Cascading blocks with return arrows to previous phase)",
        "keyDifference": "Figure 38 (Cascading linear blocks) vs Figure 39 (Cascading blocks with return arrows to previous phase)"
      }
    ],
    "examTrap": "Do not confuse Pure Waterfall Model with Waterfall with Feedback. Distinguish their roles and boundaries.",
    "memoryRule": "Pure Waterfall Model != Waterfall with Feedback"
  },
  {
    "id": "itpm-u5-comp-013",
    "title": "Waterfall with Feedback vs Sashimi Model",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Waterfall with Feedback and Sashimi Model.",
    "columns": [
      "Waterfall with Feedback",
      "Sashimi Model"
    ],
    "criteria": [
      {
        "aspect": "Phase Concurrency",
        "itemA": "Phases are executed sequentially; feedback occurs retrospectively",
        "itemB": "Adjacent phases overlap concurrently like sliced raw fish",
        "keyDifference": "Phases are executed sequentially; feedback occurs retrospectively vs Adjacent phases overlap concurrently like sliced raw fish"
      },
      {
        "aspect": "Schedule Duration",
        "itemA": "Full cumulative duration of all sequential phase durations",
        "itemB": "Compressed duration due to parallel phase execution",
        "keyDifference": "Full cumulative duration of all sequential phase durations vs Compressed duration due to parallel phase execution"
      },
      {
        "aspect": "Communication Need",
        "itemA": "Periodic formal hand-offs at milestone boundaries",
        "itemB": "Intensive, continuous communication between overlapping specialists",
        "keyDifference": "Periodic formal hand-offs at milestone boundaries vs Intensive, continuous communication between overlapping specialists"
      },
      {
        "aspect": "Rework Exposure",
        "itemA": "Rework contained to immediate prior phase iteration",
        "itemB": "Rework risk if upstream specs change while downstream code is ongoing",
        "keyDifference": "Rework contained to immediate prior phase iteration vs Rework risk if upstream specs change while downstream code is ongoing"
      }
    ],
    "examTrap": "Do not confuse Waterfall with Feedback with Sashimi Model. Distinguish their roles and boundaries.",
    "memoryRule": "Waterfall with Feedback != Sashimi Model"
  },
  {
    "id": "itpm-u5-comp-014",
    "title": "Pure Waterfall vs V-Model",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Pure Waterfall and V-Model.",
    "columns": [
      "Pure Waterfall",
      "V-Model"
    ],
    "criteria": [
      {
        "aspect": "Geometry & Visual Form",
        "itemA": "Downward linear cascade (Figure 38)",
        "itemB": "V-shaped geometry: descending specs, vertex coding, ascending test",
        "keyDifference": "Downward linear cascade (Figure 38) vs V-shaped geometry: descending specs, vertex coding, ascending test"
      },
      {
        "aspect": "Test Planning Timing",
        "itemA": "Test planning is deferred until coding finishes near end",
        "itemB": "Test plans are designed early on the left side during specification",
        "keyDifference": "Test planning is deferred until coding finishes near end vs Test plans are designed early on the left side during specification"
      },
      {
        "aspect": "Traceability",
        "itemA": "Implicit through phase gate documents",
        "itemB": "Explicit 1:1 horizontal mapping between spec levels and test levels",
        "keyDifference": "Implicit through phase gate documents vs Explicit 1:1 horizontal mapping between spec levels and test levels"
      },
      {
        "aspect": "Safety-Critical Applicability",
        "itemA": "Prone to late defect discovery; high failure risk",
        "itemB": "Industry standard for safety-critical systems needing formal audit trails",
        "keyDifference": "Prone to late defect discovery; high failure risk vs Industry standard for safety-critical systems needing formal audit trails"
      }
    ],
    "examTrap": "Do not confuse Pure Waterfall with V-Model. Distinguish their roles and boundaries.",
    "memoryRule": "Pure Waterfall != V-Model"
  },
  {
    "id": "itpm-u5-comp-015",
    "title": "Plan-Driven (Predictive) vs Agile (Adaptive)",
    "unit": "Unit 5",
    "description": "In-depth academic comparison between Plan-Driven (Predictive) and Agile (Adaptive).",
    "columns": [
      "Plan-Driven (Predictive)",
      "Agile (Adaptive)"
    ],
    "criteria": [
      {
        "aspect": "Requirement Assumption",
        "itemA": "Requirements can be fully known, frozen, and baselined upfront",
        "itemB": "Requirements inevitably evolve as users experience working software",
        "keyDifference": "Requirements can be fully known, frozen, and baselined upfront vs Requirements inevitably evolve as users experience working software"
      },
      {
        "aspect": "Cost of Change",
        "itemA": "Rises exponentially the later in the lifecycle change occurs",
        "itemB": "Kept relatively flat through modular architecture and short sprints",
        "keyDifference": "Rises exponentially the later in the lifecycle change occurs vs Kept relatively flat through modular architecture and short sprints"
      },
      {
        "aspect": "Primary Metric of Progress",
        "itemA": "Conformance to plan, milestone sign-offs, and earned value",
        "itemB": "Working, potentially releasable software delivered to users",
        "keyDifference": "Conformance to plan, milestone sign-offs, and earned value vs Working, potentially releasable software delivered to users"
      },
      {
        "aspect": "Ideal Project Domain",
        "itemA": "Stable requirements, safety-critical, strict regulatory audits",
        "itemB": "High volatility, innovative products, exploratory software",
        "keyDifference": "Stable requirements, safety-critical, strict regulatory audits vs High volatility, innovative products, exploratory software"
      }
    ],
    "examTrap": "Do not confuse Plan-Driven (Predictive) with Agile (Adaptive). Distinguish their roles and boundaries.",
    "memoryRule": "Plan-Driven (Predictive) != Agile (Adaptive)"
  }
];
