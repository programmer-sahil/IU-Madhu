import { MasterComparison, CheatSheetComparison } from "../../../../types";

export const unit6CheatSheetComparisons: CheatSheetComparison[] = [
  {
    "conceptA": "PMBOK Guide",
    "conceptB": "PRINCE2",
    "comparisonPoints": [
      {
        "criterion": "Origin & Sponsor",
        "detailA": "Project Management Institute (PMI), USA",
        "detailB": "Central Computer & Telecommunications Agency (CCTA/AXELOS), UK"
      },
      {
        "criterion": "Nature of Framework",
        "detailA": "Descriptive Knowledge Standard ('What a PM needs to know')",
        "detailB": "Prescriptive Process Methodology ('How to govern and who does what')"
      },
      {
        "criterion": "Core Structure",
        "detailA": "5 Process Groups, 10 Knowledge Areas, 47 Processes (ITTOs)",
        "detailB": "7 Principles, 7 Themes, 7 Processes (7-7-7 Architecture)"
      },
      {
        "criterion": "Governance Model",
        "detailA": "Focuses heavily on the Project Manager leading execution",
        "detailB": "Focuses on 4 Management Levels led by the Project Board triad"
      }
    ]
  },
  {
    "conceptA": "Project Scope",
    "conceptB": "Product Scope",
    "comparisonPoints": [
      {
        "criterion": "Fundamental Focus",
        "detailA": "All the work performed by the team to deliver the product",
        "detailB": "The features, functions, and characteristics of the deliverable"
      },
      {
        "criterion": "Measurement Baseline",
        "detailA": "Measured against the Project Management Plan, WBS, and WBS Dictionary",
        "detailB": "Measured against product requirements and user acceptance criteria"
      },
      {
        "criterion": "Completion Evaluation",
        "detailA": "Evaluated through project performance measurement and earned value",
        "detailB": "Evaluated through system testing, validation, and user acceptance"
      },
      {
        "criterion": "Change Governance",
        "detailA": "Controlled through Perform Integrated Change Control",
        "detailB": "Controlled through product backlog grooming or specification change requests"
      }
    ]
  },
  {
    "conceptA": "Manage by Stages",
    "conceptB": "Manage by Exception",
    "comparisonPoints": [
      {
        "criterion": "Governance Level",
        "detailA": "Macro-governance across discrete lifecycle stages",
        "detailB": "Micro-governance of daily operations within an active stage"
      },
      {
        "criterion": "Decision Trigger",
        "detailA": "Scheduled stage boundary gates re-authorizing funding and business case",
        "detailB": "Unscheduled tolerance breaches triggering an Exception Report"
      },
      {
        "criterion": "Operating Boundary",
        "detailA": "Partitioning the project into at least two discrete management stages",
        "detailB": "Setting explicit tolerances across 6 variables (Time, Cost, Quality, Scope, Risk, Benefits)"
      },
      {
        "criterion": "Executive Protection",
        "detailA": "Limits financial commitment stage-by-stage",
        "detailB": "Eliminates senior executive micro-management of daily tasks"
      }
    ]
  },
  {
    "conceptA": "Portfolio Management",
    "conceptB": "Programme Management",
    "comparisonPoints": [
      {
        "criterion": "Strategic Orientation",
        "detailA": "Strategic corporate alignment: 'Are we doing the right work?'",
        "detailB": "Benefit realization & synergy: 'Are we capturing collective benefits?'"
      },
      {
        "criterion": "Scope of Initiatives",
        "detailA": "Diverse collection of unrelated and related projects, programmes, operations",
        "detailB": "A group of closely related projects with inter-project dependencies"
      },
      {
        "criterion": "Primary Metric",
        "detailA": "Return on Investment (ROI), risk diversification, strategic goal fulfillment",
        "detailB": "Collective capability delivery and operational benefit realization"
      },
      {
        "criterion": "Lifecycle Horizon",
        "detailA": "Continuous and permanent, aligned to annual corporate planning cycles",
        "detailB": "Temporary but multi-year, terminating once benefits are transitioned"
      }
    ]
  },
  {
    "conceptA": "Programme Management",
    "conceptB": "Project Management",
    "comparisonPoints": [
      {
        "criterion": "Primary Deliverable",
        "detailA": "Business capabilities and strategic benefits (Outcomes & Benefits)",
        "detailB": "Specific unique deliverables and technical outputs (Outputs)"
      },
      {
        "criterion": "Management Focus",
        "detailA": "Managing inter-project dependencies, synergies, and change management",
        "detailB": "Delivering defined scope within schedule, budget, and quality limits"
      },
      {
        "criterion": "Change Perspective",
        "detailA": "Expects, embraces, and directs change to optimize business benefits",
        "detailB": "Controls and restricts change to protect established baselines"
      },
      {
        "criterion": "Success Criteria",
        "detailA": "Realization of measurable operational business benefits",
        "detailB": "Delivery of agreed scope on time, within budget, to specified quality"
      }
    ]
  },
  {
    "conceptA": "Supportive PMO",
    "conceptB": "Controlling PMO",
    "comparisonPoints": [
      {
        "criterion": "Level of Control",
        "detailA": "LOW level of control",
        "detailB": "MODERATE level of control"
      },
      {
        "criterion": "Authority Model",
        "detailA": "Consultative advisor and center of excellence",
        "detailB": "Compliance auditor and governance enforcer"
      },
      {
        "criterion": "Template Adoption",
        "detailA": "Optional; PMs adopt templates at their discretion",
        "detailB": "Mandatory; PMs must conform to standardized tools and templates"
      },
      {
        "criterion": "Auditing Activities",
        "detailA": "No formal compliance auditing",
        "detailB": "Conducts regular project reviews to ensure governance compliance"
      }
    ]
  },
  {
    "conceptA": "Controlling PMO",
    "conceptB": "Directive PMO",
    "comparisonPoints": [
      {
        "criterion": "Level of Control",
        "detailA": "MODERATE level of control",
        "detailB": "HIGH level of control"
      },
      {
        "criterion": "Project Manager Reporting",
        "detailA": "PMs report to functional departments, following PMO standards",
        "detailB": "PMs report directly to and are employed by the PMO"
      },
      {
        "criterion": "Project Management Mandate",
        "detailA": "Provides governance frameworks and audits compliance",
        "detailB": "Directly manages projects and takes operational ownership"
      },
      {
        "criterion": "Organizational Power",
        "detailA": "Standardization authority over process and reporting",
        "detailB": "Direct resource and operational authority over all enterprise projects"
      }
    ]
  },
  {
    "conceptA": "Large-Scale Scrum (LeSS)",
    "conceptB": "Scaled Agile Framework (SAFe)",
    "comparisonPoints": [
      {
        "criterion": "Scaling Philosophy",
        "detailA": "Minimalist 'More with LeSS' (descaling hierarchy, zero extra roles)",
        "detailB": "Prescriptive multi-tiered enterprise scaffolding (Team, Program, Portfolio)"
      },
      {
        "criterion": "Role Overhead",
        "detailA": "Zero new management roles in basic mode (1 PO for all 8 teams)",
        "detailB": "Adds RTEs, Product Managers, Solution Architects, Business Owners"
      },
      {
        "criterion": "Backlog Architecture",
        "detailA": "Strictly ONE Product Backlog for up to 8 feature teams",
        "detailB": "Hierarchical backlogs: Team Backlog, Program Backlog, Portfolio Backlog"
      },
      {
        "criterion": "Team Type",
        "detailA": "Mandates cross-functional Feature Teams across all architectural layers",
        "detailB": "Accommodates both Feature Teams and Component Teams"
      }
    ]
  },
  {
    "conceptA": "Basic LeSS",
    "conceptB": "LeSS Huge",
    "comparisonPoints": [
      {
        "criterion": "Target Scale",
        "detailA": "Up to 8 feature teams (roughly 50 to 70 developers)",
        "detailB": "More than 8 teams (hundreds to thousands of developers)"
      },
      {
        "criterion": "Product Owner Structure",
        "detailA": "Strictly ONE single Product Owner managing all teams",
        "detailB": "One head Product Owner supported by Area Product Owners (APOs)"
      },
      {
        "criterion": "Backlog Partitioning",
        "detailA": "Single unified Product Backlog with no sub-backlogs",
        "detailB": "Product Backlog partitioned into customer-centric Requirement Areas"
      },
      {
        "criterion": "Organizational Complexity",
        "detailA": "Radically minimal; zero intermediate coordination layers",
        "detailB": "Structured area governance to prevent head PO cognitive overload"
      }
    ]
  },
  {
    "conceptA": "Functional Organization",
    "conceptB": "Projectized Organization",
    "comparisonPoints": [
      {
        "criterion": "PM Authority Level",
        "detailA": "Little or no formal authority (part-time coordinator)",
        "detailB": "High to total authority over personnel, budget, and operations"
      },
      {
        "criterion": "Team Reporting Line",
        "detailA": "Staff report directly to permanent Functional Department Managers",
        "detailB": "Staff report dedicatedly to the Project Manager"
      },
      {
        "criterion": "Budget Control",
        "detailA": "Functional department managers control all budgets",
        "detailB": "Project Manager controls the project budget completely"
      },
      {
        "criterion": "Team Reassignment at Close",
        "detailA": "Smooth return to permanent functional department",
        "detailB": "'No home' dilemma; anxiety over future assignment upon project close"
      }
    ]
  },
  {
    "conceptA": "Weak Matrix",
    "conceptB": "Strong Matrix",
    "comparisonPoints": [
      {
        "criterion": "Dominant Authority",
        "detailA": "Functional department manager dominates power",
        "detailB": "Project manager dominates power"
      },
      {
        "criterion": "PM Role Nature",
        "detailA": "Part-time project coordinator or expediter",
        "detailB": "Full-time designated project manager"
      },
      {
        "criterion": "Budget Ownership",
        "detailA": "Controlled by functional department managers",
        "detailB": "Controlled directly by the project manager"
      },
      {
        "criterion": "PM Reporting Line",
        "detailA": "Reports within a functional department",
        "detailB": "Reports to a dedicated Project Management Department or PMO Director"
      }
    ]
  },
  {
    "conceptA": "Iterative Development",
    "conceptB": "Incremental Development",
    "comparisonPoints": [
      {
        "criterion": "Scope vs Fidelity",
        "detailA": "All features developed early at low fidelity, refined together",
        "detailB": "Few features developed early at 100% full fidelity, expanded over time"
      },
      {
        "criterion": "Delivery Pattern",
        "detailA": "Evolves the whole system through successive refinement passes",
        "detailB": "Delivers completely finished functional slices added sequentially"
      },
      {
        "criterion": "Customer Experience",
        "detailA": "Customer sees complete application shell evolving in depth",
        "detailB": "Customer receives small, fully finished working tools piece by piece"
      },
      {
        "criterion": "Analogy",
        "detailA": "Artist sketching full canvas in pencil, then watercolor, then oil",
        "detailB": "Modular house builder completing bedroom 100%, then kitchen 100%"
      }
    ]
  },
  {
    "conceptA": "Predictive (Plan-Driven)",
    "conceptB": "Adaptive (Agile)",
    "comparisonPoints": [
      {
        "criterion": "Requirement Assumption",
        "detailA": "Requirements can be fully known, specified, and baselined upfront",
        "detailB": "Requirements inevitably evolve as users interact with software"
      },
      {
        "criterion": "Cost of Change",
        "detailA": "Rises exponentially the later in the lifecycle change is requested",
        "detailB": "Kept relatively flat through modular design and short sprint cycles"
      },
      {
        "criterion": "Documentation Approach",
        "detailA": "Comprehensive, formal baseline specifications and audit trails",
        "detailB": "Lean, purposeful documentation subordinated to working software"
      },
      {
        "criterion": "Best Fit Domain",
        "detailA": "Safety-critical, heavily regulated, fixed-price contract projects",
        "detailB": "High volatility, innovative, exploratory, fast-moving markets"
      }
    ]
  },
  {
    "conceptA": "Directing a Project (DP)",
    "conceptB": "Controlling a Stage (CS)",
    "comparisonPoints": [
      {
        "criterion": "Process Ownership",
        "detailA": "Solely owned and executed by the Project Board",
        "detailB": "Owned and executed daily by the Project Manager"
      },
      {
        "criterion": "Time Horizon",
        "detailA": "Runs continuously across all stages from startup through closure",
        "detailB": "Active strictly during an authorized delivery stage"
      },
      {
        "criterion": "Core Activities",
        "detailA": "Authorizing initiation, stage plans, closure, and exception reports",
        "detailB": "Assigning Work Packages, tracking progress, managing stage issues"
      },
      {
        "criterion": "Level of Governance",
        "detailA": "Directing level (strategic decisions and governance approvals)",
        "detailB": "Managing level (operational day-to-day stage management)"
      }
    ]
  },
  {
    "conceptA": "Validate Scope (PMBOK)",
    "conceptB": "Control Quality (PMBOK)",
    "comparisonPoints": [
      {
        "criterion": "Primary Objective",
        "detailA": "Formalizing customer/stakeholder acceptance of completed deliverables",
        "detailB": "Monitoring and verifying technical correctness and conformance to specs"
      },
      {
        "criterion": "Key Participants",
        "detailA": "Project Manager, Sponsor, Customer, and User Stakeholders",
        "detailB": "Project Manager, Quality Assurance team, and technical testers"
      },
      {
        "criterion": "Input / Output Flow",
        "detailA": "Takes 'Verified Deliverables' from Quality and yields 'Accepted Deliverables'",
        "detailB": "Takes raw deliverables and yields 'Verified Deliverables'"
      },
      {
        "criterion": "Guiding Question",
        "detailA": "'Does the customer accept this deliverable?'",
        "detailB": "'Is this deliverable technically correct and defect-free?'"
      }
    ]
  }
];

export const unit6Comparisons: MasterComparison[] = [
  {
    "id": "itpm-u6-comp-001",
    "title": "PMBOK Guide vs PRINCE2",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between PMBOK Guide and PRINCE2.",
    "columns": [
      "PMBOK Guide",
      "PRINCE2"
    ],
    "criteria": [
      {
        "aspect": "Origin & Sponsor",
        "itemA": "Project Management Institute (PMI), USA",
        "itemB": "Central Computer & Telecommunications Agency (CCTA/AXELOS), UK",
        "keyDifference": "Project Management Institute (PMI), USA vs Central Computer & Telecommunications Agency (CCTA/AXELOS), UK"
      },
      {
        "aspect": "Nature of Framework",
        "itemA": "Descriptive Knowledge Standard ('What a PM needs to know')",
        "itemB": "Prescriptive Process Methodology ('How to govern and who does what')",
        "keyDifference": "Descriptive Knowledge Standard ('What a PM needs to know') vs Prescriptive Process Methodology ('How to govern and who does what')"
      },
      {
        "aspect": "Core Structure",
        "itemA": "5 Process Groups, 10 Knowledge Areas, 47 Processes (ITTOs)",
        "itemB": "7 Principles, 7 Themes, 7 Processes (7-7-7 Architecture)",
        "keyDifference": "5 Process Groups, 10 Knowledge Areas, 47 Processes (ITTOs) vs 7 Principles, 7 Themes, 7 Processes (7-7-7 Architecture)"
      },
      {
        "aspect": "Governance Model",
        "itemA": "Focuses heavily on the Project Manager leading execution",
        "itemB": "Focuses on 4 Management Levels led by the Project Board triad",
        "keyDifference": "Focuses heavily on the Project Manager leading execution vs Focuses on 4 Management Levels led by the Project Board triad"
      }
    ],
    "examTrap": "Do not confuse PMBOK Guide with PRINCE2. Verify governance levels.",
    "memoryRule": "PMBOK Guide vs PRINCE2"
  },
  {
    "id": "itpm-u6-comp-002",
    "title": "Project Scope vs Product Scope",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Project Scope and Product Scope.",
    "columns": [
      "Project Scope",
      "Product Scope"
    ],
    "criteria": [
      {
        "aspect": "Fundamental Focus",
        "itemA": "All the work performed by the team to deliver the product",
        "itemB": "The features, functions, and characteristics of the deliverable",
        "keyDifference": "All the work performed by the team to deliver the product vs The features, functions, and characteristics of the deliverable"
      },
      {
        "aspect": "Measurement Baseline",
        "itemA": "Measured against the Project Management Plan, WBS, and WBS Dictionary",
        "itemB": "Measured against product requirements and user acceptance criteria",
        "keyDifference": "Measured against the Project Management Plan, WBS, and WBS Dictionary vs Measured against product requirements and user acceptance criteria"
      },
      {
        "aspect": "Completion Evaluation",
        "itemA": "Evaluated through project performance measurement and earned value",
        "itemB": "Evaluated through system testing, validation, and user acceptance",
        "keyDifference": "Evaluated through project performance measurement and earned value vs Evaluated through system testing, validation, and user acceptance"
      },
      {
        "aspect": "Change Governance",
        "itemA": "Controlled through Perform Integrated Change Control",
        "itemB": "Controlled through product backlog grooming or specification change requests",
        "keyDifference": "Controlled through Perform Integrated Change Control vs Controlled through product backlog grooming or specification change requests"
      }
    ],
    "examTrap": "Do not confuse Project Scope with Product Scope. Verify governance levels.",
    "memoryRule": "Project Scope vs Product Scope"
  },
  {
    "id": "itpm-u6-comp-003",
    "title": "Manage by Stages vs Manage by Exception",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Manage by Stages and Manage by Exception.",
    "columns": [
      "Manage by Stages",
      "Manage by Exception"
    ],
    "criteria": [
      {
        "aspect": "Governance Level",
        "itemA": "Macro-governance across discrete lifecycle stages",
        "itemB": "Micro-governance of daily operations within an active stage",
        "keyDifference": "Macro-governance across discrete lifecycle stages vs Micro-governance of daily operations within an active stage"
      },
      {
        "aspect": "Decision Trigger",
        "itemA": "Scheduled stage boundary gates re-authorizing funding and business case",
        "itemB": "Unscheduled tolerance breaches triggering an Exception Report",
        "keyDifference": "Scheduled stage boundary gates re-authorizing funding and business case vs Unscheduled tolerance breaches triggering an Exception Report"
      },
      {
        "aspect": "Operating Boundary",
        "itemA": "Partitioning the project into at least two discrete management stages",
        "itemB": "Setting explicit tolerances across 6 variables (Time, Cost, Quality, Scope, Risk, Benefits)",
        "keyDifference": "Partitioning the project into at least two discrete management stages vs Setting explicit tolerances across 6 variables (Time, Cost, Quality, Scope, Risk, Benefits)"
      },
      {
        "aspect": "Executive Protection",
        "itemA": "Limits financial commitment stage-by-stage",
        "itemB": "Eliminates senior executive micro-management of daily tasks",
        "keyDifference": "Limits financial commitment stage-by-stage vs Eliminates senior executive micro-management of daily tasks"
      }
    ],
    "examTrap": "Do not confuse Manage by Stages with Manage by Exception. Verify governance levels.",
    "memoryRule": "Manage by Stages vs Manage by Exception"
  },
  {
    "id": "itpm-u6-comp-004",
    "title": "Portfolio Management vs Programme Management",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Portfolio Management and Programme Management.",
    "columns": [
      "Portfolio Management",
      "Programme Management"
    ],
    "criteria": [
      {
        "aspect": "Strategic Orientation",
        "itemA": "Strategic corporate alignment: 'Are we doing the right work?'",
        "itemB": "Benefit realization & synergy: 'Are we capturing collective benefits?'",
        "keyDifference": "Strategic corporate alignment: 'Are we doing the right work?' vs Benefit realization & synergy: 'Are we capturing collective benefits?'"
      },
      {
        "aspect": "Scope of Initiatives",
        "itemA": "Diverse collection of unrelated and related projects, programmes, operations",
        "itemB": "A group of closely related projects with inter-project dependencies",
        "keyDifference": "Diverse collection of unrelated and related projects, programmes, operations vs A group of closely related projects with inter-project dependencies"
      },
      {
        "aspect": "Primary Metric",
        "itemA": "Return on Investment (ROI), risk diversification, strategic goal fulfillment",
        "itemB": "Collective capability delivery and operational benefit realization",
        "keyDifference": "Return on Investment (ROI), risk diversification, strategic goal fulfillment vs Collective capability delivery and operational benefit realization"
      },
      {
        "aspect": "Lifecycle Horizon",
        "itemA": "Continuous and permanent, aligned to annual corporate planning cycles",
        "itemB": "Temporary but multi-year, terminating once benefits are transitioned",
        "keyDifference": "Continuous and permanent, aligned to annual corporate planning cycles vs Temporary but multi-year, terminating once benefits are transitioned"
      }
    ],
    "examTrap": "Do not confuse Portfolio Management with Programme Management. Verify governance levels.",
    "memoryRule": "Portfolio Management vs Programme Management"
  },
  {
    "id": "itpm-u6-comp-005",
    "title": "Programme Management vs Project Management",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Programme Management and Project Management.",
    "columns": [
      "Programme Management",
      "Project Management"
    ],
    "criteria": [
      {
        "aspect": "Primary Deliverable",
        "itemA": "Business capabilities and strategic benefits (Outcomes & Benefits)",
        "itemB": "Specific unique deliverables and technical outputs (Outputs)",
        "keyDifference": "Business capabilities and strategic benefits (Outcomes & Benefits) vs Specific unique deliverables and technical outputs (Outputs)"
      },
      {
        "aspect": "Management Focus",
        "itemA": "Managing inter-project dependencies, synergies, and change management",
        "itemB": "Delivering defined scope within schedule, budget, and quality limits",
        "keyDifference": "Managing inter-project dependencies, synergies, and change management vs Delivering defined scope within schedule, budget, and quality limits"
      },
      {
        "aspect": "Change Perspective",
        "itemA": "Expects, embraces, and directs change to optimize business benefits",
        "itemB": "Controls and restricts change to protect established baselines",
        "keyDifference": "Expects, embraces, and directs change to optimize business benefits vs Controls and restricts change to protect established baselines"
      },
      {
        "aspect": "Success Criteria",
        "itemA": "Realization of measurable operational business benefits",
        "itemB": "Delivery of agreed scope on time, within budget, to specified quality",
        "keyDifference": "Realization of measurable operational business benefits vs Delivery of agreed scope on time, within budget, to specified quality"
      }
    ],
    "examTrap": "Do not confuse Programme Management with Project Management. Verify governance levels.",
    "memoryRule": "Programme Management vs Project Management"
  },
  {
    "id": "itpm-u6-comp-006",
    "title": "Supportive PMO vs Controlling PMO",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Supportive PMO and Controlling PMO.",
    "columns": [
      "Supportive PMO",
      "Controlling PMO"
    ],
    "criteria": [
      {
        "aspect": "Level of Control",
        "itemA": "LOW level of control",
        "itemB": "MODERATE level of control",
        "keyDifference": "LOW level of control vs MODERATE level of control"
      },
      {
        "aspect": "Authority Model",
        "itemA": "Consultative advisor and center of excellence",
        "itemB": "Compliance auditor and governance enforcer",
        "keyDifference": "Consultative advisor and center of excellence vs Compliance auditor and governance enforcer"
      },
      {
        "aspect": "Template Adoption",
        "itemA": "Optional; PMs adopt templates at their discretion",
        "itemB": "Mandatory; PMs must conform to standardized tools and templates",
        "keyDifference": "Optional; PMs adopt templates at their discretion vs Mandatory; PMs must conform to standardized tools and templates"
      },
      {
        "aspect": "Auditing Activities",
        "itemA": "No formal compliance auditing",
        "itemB": "Conducts regular project reviews to ensure governance compliance",
        "keyDifference": "No formal compliance auditing vs Conducts regular project reviews to ensure governance compliance"
      }
    ],
    "examTrap": "Do not confuse Supportive PMO with Controlling PMO. Verify governance levels.",
    "memoryRule": "Supportive PMO vs Controlling PMO"
  },
  {
    "id": "itpm-u6-comp-007",
    "title": "Controlling PMO vs Directive PMO",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Controlling PMO and Directive PMO.",
    "columns": [
      "Controlling PMO",
      "Directive PMO"
    ],
    "criteria": [
      {
        "aspect": "Level of Control",
        "itemA": "MODERATE level of control",
        "itemB": "HIGH level of control",
        "keyDifference": "MODERATE level of control vs HIGH level of control"
      },
      {
        "aspect": "Project Manager Reporting",
        "itemA": "PMs report to functional departments, following PMO standards",
        "itemB": "PMs report directly to and are employed by the PMO",
        "keyDifference": "PMs report to functional departments, following PMO standards vs PMs report directly to and are employed by the PMO"
      },
      {
        "aspect": "Project Management Mandate",
        "itemA": "Provides governance frameworks and audits compliance",
        "itemB": "Directly manages projects and takes operational ownership",
        "keyDifference": "Provides governance frameworks and audits compliance vs Directly manages projects and takes operational ownership"
      },
      {
        "aspect": "Organizational Power",
        "itemA": "Standardization authority over process and reporting",
        "itemB": "Direct resource and operational authority over all enterprise projects",
        "keyDifference": "Standardization authority over process and reporting vs Direct resource and operational authority over all enterprise projects"
      }
    ],
    "examTrap": "Do not confuse Controlling PMO with Directive PMO. Verify governance levels.",
    "memoryRule": "Controlling PMO vs Directive PMO"
  },
  {
    "id": "itpm-u6-comp-008",
    "title": "Large-Scale Scrum (LeSS) vs Scaled Agile Framework (SAFe)",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Large-Scale Scrum (LeSS) and Scaled Agile Framework (SAFe).",
    "columns": [
      "Large-Scale Scrum (LeSS)",
      "Scaled Agile Framework (SAFe)"
    ],
    "criteria": [
      {
        "aspect": "Scaling Philosophy",
        "itemA": "Minimalist 'More with LeSS' (descaling hierarchy, zero extra roles)",
        "itemB": "Prescriptive multi-tiered enterprise scaffolding (Team, Program, Portfolio)",
        "keyDifference": "Minimalist 'More with LeSS' (descaling hierarchy, zero extra roles) vs Prescriptive multi-tiered enterprise scaffolding (Team, Program, Portfolio)"
      },
      {
        "aspect": "Role Overhead",
        "itemA": "Zero new management roles in basic mode (1 PO for all 8 teams)",
        "itemB": "Adds RTEs, Product Managers, Solution Architects, Business Owners",
        "keyDifference": "Zero new management roles in basic mode (1 PO for all 8 teams) vs Adds RTEs, Product Managers, Solution Architects, Business Owners"
      },
      {
        "aspect": "Backlog Architecture",
        "itemA": "Strictly ONE Product Backlog for up to 8 feature teams",
        "itemB": "Hierarchical backlogs: Team Backlog, Program Backlog, Portfolio Backlog",
        "keyDifference": "Strictly ONE Product Backlog for up to 8 feature teams vs Hierarchical backlogs: Team Backlog, Program Backlog, Portfolio Backlog"
      },
      {
        "aspect": "Team Type",
        "itemA": "Mandates cross-functional Feature Teams across all architectural layers",
        "itemB": "Accommodates both Feature Teams and Component Teams",
        "keyDifference": "Mandates cross-functional Feature Teams across all architectural layers vs Accommodates both Feature Teams and Component Teams"
      }
    ],
    "examTrap": "Do not confuse Large-Scale Scrum (LeSS) with Scaled Agile Framework (SAFe). Verify governance levels.",
    "memoryRule": "Large-Scale Scrum (LeSS) vs Scaled Agile Framework (SAFe)"
  },
  {
    "id": "itpm-u6-comp-009",
    "title": "Basic LeSS vs LeSS Huge",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Basic LeSS and LeSS Huge.",
    "columns": [
      "Basic LeSS",
      "LeSS Huge"
    ],
    "criteria": [
      {
        "aspect": "Target Scale",
        "itemA": "Up to 8 feature teams (roughly 50 to 70 developers)",
        "itemB": "More than 8 teams (hundreds to thousands of developers)",
        "keyDifference": "Up to 8 feature teams (roughly 50 to 70 developers) vs More than 8 teams (hundreds to thousands of developers)"
      },
      {
        "aspect": "Product Owner Structure",
        "itemA": "Strictly ONE single Product Owner managing all teams",
        "itemB": "One head Product Owner supported by Area Product Owners (APOs)",
        "keyDifference": "Strictly ONE single Product Owner managing all teams vs One head Product Owner supported by Area Product Owners (APOs)"
      },
      {
        "aspect": "Backlog Partitioning",
        "itemA": "Single unified Product Backlog with no sub-backlogs",
        "itemB": "Product Backlog partitioned into customer-centric Requirement Areas",
        "keyDifference": "Single unified Product Backlog with no sub-backlogs vs Product Backlog partitioned into customer-centric Requirement Areas"
      },
      {
        "aspect": "Organizational Complexity",
        "itemA": "Radically minimal; zero intermediate coordination layers",
        "itemB": "Structured area governance to prevent head PO cognitive overload",
        "keyDifference": "Radically minimal; zero intermediate coordination layers vs Structured area governance to prevent head PO cognitive overload"
      }
    ],
    "examTrap": "Do not confuse Basic LeSS with LeSS Huge. Verify governance levels.",
    "memoryRule": "Basic LeSS vs LeSS Huge"
  },
  {
    "id": "itpm-u6-comp-010",
    "title": "Functional Organization vs Projectized Organization",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Functional Organization and Projectized Organization.",
    "columns": [
      "Functional Organization",
      "Projectized Organization"
    ],
    "criteria": [
      {
        "aspect": "PM Authority Level",
        "itemA": "Little or no formal authority (part-time coordinator)",
        "itemB": "High to total authority over personnel, budget, and operations",
        "keyDifference": "Little or no formal authority (part-time coordinator) vs High to total authority over personnel, budget, and operations"
      },
      {
        "aspect": "Team Reporting Line",
        "itemA": "Staff report directly to permanent Functional Department Managers",
        "itemB": "Staff report dedicatedly to the Project Manager",
        "keyDifference": "Staff report directly to permanent Functional Department Managers vs Staff report dedicatedly to the Project Manager"
      },
      {
        "aspect": "Budget Control",
        "itemA": "Functional department managers control all budgets",
        "itemB": "Project Manager controls the project budget completely",
        "keyDifference": "Functional department managers control all budgets vs Project Manager controls the project budget completely"
      },
      {
        "aspect": "Team Reassignment at Close",
        "itemA": "Smooth return to permanent functional department",
        "itemB": "'No home' dilemma; anxiety over future assignment upon project close",
        "keyDifference": "Smooth return to permanent functional department vs 'No home' dilemma; anxiety over future assignment upon project close"
      }
    ],
    "examTrap": "Do not confuse Functional Organization with Projectized Organization. Verify governance levels.",
    "memoryRule": "Functional Organization vs Projectized Organization"
  },
  {
    "id": "itpm-u6-comp-011",
    "title": "Weak Matrix vs Strong Matrix",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Weak Matrix and Strong Matrix.",
    "columns": [
      "Weak Matrix",
      "Strong Matrix"
    ],
    "criteria": [
      {
        "aspect": "Dominant Authority",
        "itemA": "Functional department manager dominates power",
        "itemB": "Project manager dominates power",
        "keyDifference": "Functional department manager dominates power vs Project manager dominates power"
      },
      {
        "aspect": "PM Role Nature",
        "itemA": "Part-time project coordinator or expediter",
        "itemB": "Full-time designated project manager",
        "keyDifference": "Part-time project coordinator or expediter vs Full-time designated project manager"
      },
      {
        "aspect": "Budget Ownership",
        "itemA": "Controlled by functional department managers",
        "itemB": "Controlled directly by the project manager",
        "keyDifference": "Controlled by functional department managers vs Controlled directly by the project manager"
      },
      {
        "aspect": "PM Reporting Line",
        "itemA": "Reports within a functional department",
        "itemB": "Reports to a dedicated Project Management Department or PMO Director",
        "keyDifference": "Reports within a functional department vs Reports to a dedicated Project Management Department or PMO Director"
      }
    ],
    "examTrap": "Do not confuse Weak Matrix with Strong Matrix. Verify governance levels.",
    "memoryRule": "Weak Matrix vs Strong Matrix"
  },
  {
    "id": "itpm-u6-comp-012",
    "title": "Iterative Development vs Incremental Development",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Iterative Development and Incremental Development.",
    "columns": [
      "Iterative Development",
      "Incremental Development"
    ],
    "criteria": [
      {
        "aspect": "Scope vs Fidelity",
        "itemA": "All features developed early at low fidelity, refined together",
        "itemB": "Few features developed early at 100% full fidelity, expanded over time",
        "keyDifference": "All features developed early at low fidelity, refined together vs Few features developed early at 100% full fidelity, expanded over time"
      },
      {
        "aspect": "Delivery Pattern",
        "itemA": "Evolves the whole system through successive refinement passes",
        "itemB": "Delivers completely finished functional slices added sequentially",
        "keyDifference": "Evolves the whole system through successive refinement passes vs Delivers completely finished functional slices added sequentially"
      },
      {
        "aspect": "Customer Experience",
        "itemA": "Customer sees complete application shell evolving in depth",
        "itemB": "Customer receives small, fully finished working tools piece by piece",
        "keyDifference": "Customer sees complete application shell evolving in depth vs Customer receives small, fully finished working tools piece by piece"
      },
      {
        "aspect": "Analogy",
        "itemA": "Artist sketching full canvas in pencil, then watercolor, then oil",
        "itemB": "Modular house builder completing bedroom 100%, then kitchen 100%",
        "keyDifference": "Artist sketching full canvas in pencil, then watercolor, then oil vs Modular house builder completing bedroom 100%, then kitchen 100%"
      }
    ],
    "examTrap": "Do not confuse Iterative Development with Incremental Development. Verify governance levels.",
    "memoryRule": "Iterative Development vs Incremental Development"
  },
  {
    "id": "itpm-u6-comp-013",
    "title": "Predictive (Plan-Driven) vs Adaptive (Agile)",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Predictive (Plan-Driven) and Adaptive (Agile).",
    "columns": [
      "Predictive (Plan-Driven)",
      "Adaptive (Agile)"
    ],
    "criteria": [
      {
        "aspect": "Requirement Assumption",
        "itemA": "Requirements can be fully known, specified, and baselined upfront",
        "itemB": "Requirements inevitably evolve as users interact with software",
        "keyDifference": "Requirements can be fully known, specified, and baselined upfront vs Requirements inevitably evolve as users interact with software"
      },
      {
        "aspect": "Cost of Change",
        "itemA": "Rises exponentially the later in the lifecycle change is requested",
        "itemB": "Kept relatively flat through modular design and short sprint cycles",
        "keyDifference": "Rises exponentially the later in the lifecycle change is requested vs Kept relatively flat through modular design and short sprint cycles"
      },
      {
        "aspect": "Documentation Approach",
        "itemA": "Comprehensive, formal baseline specifications and audit trails",
        "itemB": "Lean, purposeful documentation subordinated to working software",
        "keyDifference": "Comprehensive, formal baseline specifications and audit trails vs Lean, purposeful documentation subordinated to working software"
      },
      {
        "aspect": "Best Fit Domain",
        "itemA": "Safety-critical, heavily regulated, fixed-price contract projects",
        "itemB": "High volatility, innovative, exploratory, fast-moving markets",
        "keyDifference": "Safety-critical, heavily regulated, fixed-price contract projects vs High volatility, innovative, exploratory, fast-moving markets"
      }
    ],
    "examTrap": "Do not confuse Predictive (Plan-Driven) with Adaptive (Agile). Verify governance levels.",
    "memoryRule": "Predictive (Plan-Driven) vs Adaptive (Agile)"
  },
  {
    "id": "itpm-u6-comp-014",
    "title": "Directing a Project (DP) vs Controlling a Stage (CS)",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Directing a Project (DP) and Controlling a Stage (CS).",
    "columns": [
      "Directing a Project (DP)",
      "Controlling a Stage (CS)"
    ],
    "criteria": [
      {
        "aspect": "Process Ownership",
        "itemA": "Solely owned and executed by the Project Board",
        "itemB": "Owned and executed daily by the Project Manager",
        "keyDifference": "Solely owned and executed by the Project Board vs Owned and executed daily by the Project Manager"
      },
      {
        "aspect": "Time Horizon",
        "itemA": "Runs continuously across all stages from startup through closure",
        "itemB": "Active strictly during an authorized delivery stage",
        "keyDifference": "Runs continuously across all stages from startup through closure vs Active strictly during an authorized delivery stage"
      },
      {
        "aspect": "Core Activities",
        "itemA": "Authorizing initiation, stage plans, closure, and exception reports",
        "itemB": "Assigning Work Packages, tracking progress, managing stage issues",
        "keyDifference": "Authorizing initiation, stage plans, closure, and exception reports vs Assigning Work Packages, tracking progress, managing stage issues"
      },
      {
        "aspect": "Level of Governance",
        "itemA": "Directing level (strategic decisions and governance approvals)",
        "itemB": "Managing level (operational day-to-day stage management)",
        "keyDifference": "Directing level (strategic decisions and governance approvals) vs Managing level (operational day-to-day stage management)"
      }
    ],
    "examTrap": "Do not confuse Directing a Project (DP) with Controlling a Stage (CS). Verify governance levels.",
    "memoryRule": "Directing a Project (DP) vs Controlling a Stage (CS)"
  },
  {
    "id": "itpm-u6-comp-015",
    "title": "Validate Scope (PMBOK) vs Control Quality (PMBOK)",
    "unit": "Unit 6",
    "description": "In-depth academic comparison between Validate Scope (PMBOK) and Control Quality (PMBOK).",
    "columns": [
      "Validate Scope (PMBOK)",
      "Control Quality (PMBOK)"
    ],
    "criteria": [
      {
        "aspect": "Primary Objective",
        "itemA": "Formalizing customer/stakeholder acceptance of completed deliverables",
        "itemB": "Monitoring and verifying technical correctness and conformance to specs",
        "keyDifference": "Formalizing customer/stakeholder acceptance of completed deliverables vs Monitoring and verifying technical correctness and conformance to specs"
      },
      {
        "aspect": "Key Participants",
        "itemA": "Project Manager, Sponsor, Customer, and User Stakeholders",
        "itemB": "Project Manager, Quality Assurance team, and technical testers",
        "keyDifference": "Project Manager, Sponsor, Customer, and User Stakeholders vs Project Manager, Quality Assurance team, and technical testers"
      },
      {
        "aspect": "Input / Output Flow",
        "itemA": "Takes 'Verified Deliverables' from Quality and yields 'Accepted Deliverables'",
        "itemB": "Takes raw deliverables and yields 'Verified Deliverables'",
        "keyDifference": "Takes 'Verified Deliverables' from Quality and yields 'Accepted Deliverables' vs Takes raw deliverables and yields 'Verified Deliverables'"
      },
      {
        "aspect": "Guiding Question",
        "itemA": "'Does the customer accept this deliverable?'",
        "itemB": "'Is this deliverable technically correct and defect-free?'",
        "keyDifference": "'Does the customer accept this deliverable?' vs 'Is this deliverable technically correct and defect-free?'"
      }
    ],
    "examTrap": "Do not confuse Validate Scope (PMBOK) with Control Quality (PMBOK). Verify governance levels.",
    "memoryRule": "Validate Scope (PMBOK) vs Control Quality (PMBOK)"
  }
];
