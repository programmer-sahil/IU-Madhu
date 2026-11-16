import { MasterComparison } from "../../../../types";

export const unit1Comparisons: MasterComparison[] = [
  {
    "id": "itpm-u1-comp-001",
    "title": "Project vs Operations",
    "unit": "Unit 1",
    "description": "Fundamental distinction between temporary strategic endeavors and ongoing routine business operations.",
    "columns": [
      "Project",
      "Operations"
    ],
    "criteria": [
      {
        "aspect": "Duration & Lifespan",
        "itemA": "Temporary: Definite, defined start date and end date.",
        "itemB": "Ongoing: Permanent, continuous, and indefinite.",
        "keyDifference": "Projects always end; operations continue indefinitely."
      },
      {
        "aspect": "Nature of Deliverable",
        "itemA": "Creates a unique product, service, or result.",
        "itemB": "Produces repetitive, standardized goods or services.",
        "keyDifference": "Uniqueness vs repetition."
      },
      {
        "aspect": "Strategic Purpose",
        "itemA": "Drives organizational change, innovation, and strategic transformation.",
        "itemB": "Maintains day-to-day business continuity and revenue flow.",
        "keyDifference": "Change agent vs business stability."
      },
      {
        "aspect": "Uncertainty & Risk",
        "itemA": "High uncertainty due to novelty, unique scope, and temporary teams.",
        "itemB": "Low uncertainty; governed by standard operating procedures (SOPs).",
        "keyDifference": "High novelty risk vs low operational process risk."
      }
    ],
    "examTrap": "Temporary refers to the project endeavor, NEVER to the lifespan of the resulting software product.",
    "memoryRule": "Projects = Temporary & Unique. Operations = Ongoing & Repeated."
  },
  {
    "id": "itpm-u1-comp-002",
    "title": "Plan-Driven vs Agile Project Management",
    "unit": "Unit 1",
    "description": "Comparison of predictive upfront planning versus iterative adaptive execution in Unit 1 foundations.",
    "columns": [
      "Plan-Driven Approach",
      "Agile Approach"
    ],
    "criteria": [
      {
        "aspect": "Planning Horizon",
        "itemA": "Comprehensive whole-project plans detailed early in lifecycle.",
        "itemB": "High-level initial roadmap; details added just-in-time near iteration.",
        "keyDifference": "Predictive upfront planning vs rolling-wave iterative planning."
      },
      {
        "aspect": "Requirements Handling",
        "itemA": "Aims to freeze requirements early; changes managed through formal CCB.",
        "itemB": "Embraces evolving requirements; expects customer feedback each sprint.",
        "keyDifference": "Change resistance/control vs change adaptation."
      },
      {
        "aspect": "Execution Structure",
        "itemA": "Predictive sequential activity phases (Initiation \u2192 Planning \u2192 Execution).",
        "itemB": "Short, repeating iterative timeboxes (sprints) delivering working increments.",
        "keyDifference": "Sequential phases vs iterative cycles."
      },
      {
        "aspect": "Best Suited Environment",
        "itemA": "Large, contractually rigid, highly regulated projects with stable scope.",
        "itemB": "Innovative, dynamic software environments with evolving user needs.",
        "keyDifference": "Stability/regulatory compliance vs speed/market responsiveness."
      }
    ],
    "examTrap": "Do not assume agile has no planning. Agile plans continuously at sprint boundaries.",
    "memoryRule": "Plan-driven = Early detail & predictive phases. Agile = High-level initial & sprint iterations."
  },
  {
    "id": "itpm-u1-comp-003",
    "title": "Project Management Board (PMB) vs Technical Management Board (TMB)",
    "unit": "Unit 1",
    "description": "Governance division between overall project management and technical realization in large projects.",
    "columns": [
      "Project Management Board (PMB)",
      "Technical Management Board (TMB)"
    ],
    "criteria": [
      {
        "aspect": "Primary Governance Focus",
        "itemA": "Overall progress, direction, resource allocation, and budget baselines.",
        "itemB": "Technical architecture, engineering decisions, and technical conflict resolution.",
        "keyDifference": "Nontechnical management governance vs technical engineering governance."
      },
      {
        "aspect": "Adjacent Organizational Partner",
        "itemA": "Sits adjacent to and advises the Project Manager.",
        "itemB": "Sits adjacent to and advises the Technical Coordinator.",
        "keyDifference": "PM partnership vs Technical Coordinator partnership."
      },
      {
        "aspect": "Dispute Resolution Scope",
        "itemA": "Arbitrates nontechnical disputes, contract changes, and priority clashes.",
        "itemB": "Arbitrates unresolved technical problems and architectural clashes between teams.",
        "keyDifference": "Commercial/organizational disputes vs engineering/technical disputes."
      },
      {
        "aspect": "Audit & Review Role",
        "itemA": "Evaluates schedule variances, cost deviations, and corrective action plans.",
        "itemB": "Performs technical audits and evaluates deliverable quality against milestone criteria.",
        "keyDifference": "Budget/schedule baseline audits vs technical milestone specification audits."
      }
    ],
    "examTrap": "PMB = overall/nontechnical governance. TMB = technical governance. Do not mix up their scopes!",
    "memoryRule": "PMB governs the project; TMB governs the technical solution."
  },
  {
    "id": "itpm-u1-comp-004",
    "title": "Project Sponsor vs Project Manager",
    "unit": "Unit 1",
    "description": "Division of executive ownership and operational execution responsibility.",
    "columns": [
      "Project Sponsor",
      "Project Manager"
    ],
    "criteria": [
      {
        "aspect": "Organizational Authority",
        "itemA": "Executive champion owning the business case and corporate justification.",
        "itemB": "Operational leader with formal authority granted via the signed charter.",
        "keyDifference": "Business ownership vs operational project leadership."
      },
      {
        "aspect": "Resource & Funding Role",
        "itemA": "Secures enterprise funding and champions high-level resource needs.",
        "itemB": "Manages day-to-day resource allocation and tracks budget consumption.",
        "keyDifference": "Secures funding vs manages spending."
      },
      {
        "aspect": "Primary Accountability",
        "itemA": "Accountable for enterprise strategic alignment and business value realization.",
        "itemB": "Accountable for deliverable completion within scope, schedule, and cost baselines.",
        "keyDifference": "Strategic business value vs tactical baseline execution."
      }
    ],
    "examTrap": "The Sponsor authorizes the project by signing the charter; the PM does NOT self-authorize.",
    "memoryRule": "Sponsor provides the money and business case; PM delivers the project."
  },
  {
    "id": "itpm-u1-comp-005",
    "title": "Work-Package Leader vs Task Leader",
    "unit": "Unit 1",
    "description": "Hierarchy and delegation of work breakdown components.",
    "columns": [
      "Work-Package Leader (WPL)",
      "Task Leader"
    ],
    "criteria": [
      {
        "aspect": "Hierarchical Tier",
        "itemA": "Reports directly to Technical Coordinator / Project Manager.",
        "itemB": "Reports directly to the Work-Package Leader.",
        "keyDifference": "Work package level vs sub-task activity level."
      },
      {
        "aspect": "Scope of Responsibility",
        "itemA": "Manages an entire work package, its integrated deliverables, and budget.",
        "itemB": "Guides specific task execution and individual team members within a work package.",
        "keyDifference": "Package integration vs specific task completion."
      },
      {
        "aspect": "Reporting Cadence",
        "itemA": "Synthesizes package progress and reports upward to technical management.",
        "itemB": "Tracks daily progress of task engineers and reports status to the WPL.",
        "keyDifference": "Synthesized package status vs daily task-level status."
      }
    ],
    "examTrap": "WPLs manage whole work packages; Task Leaders direct individual tasks inside a work package.",
    "memoryRule": "Work Package contains Tasks. WPL leads Task Leaders."
  },
  {
    "id": "itpm-u1-comp-006",
    "title": "Threat vs Opportunity (Risk Dimensions)",
    "unit": "Unit 1",
    "description": "The two faces of project uncertainty: negative and positive risk.",
    "columns": [
      "Threat (Negative Risk)",
      "Opportunity (Positive Risk)"
    ],
    "criteria": [
      {
        "aspect": "Effect on Objectives",
        "itemA": "Uncertain event that causes damage, delay, or cost overruns.",
        "itemB": "Uncertain event that yields benefits, acceleration, or cost savings.",
        "keyDifference": "Harmful impact vs beneficial impact."
      },
      {
        "aspect": "Strategic Goal",
        "itemA": "Reduce probability and mitigate potential damage.",
        "itemB": "Increase probability and exploit/enhance potential benefit.",
        "keyDifference": "Defense/reduction vs offense/exploitation."
      },
      {
        "aspect": "Typical Responses",
        "itemA": "Mitigate, Accept, Transfer, Avoid (M-A-T-A).",
        "itemB": "Exploit, Share, Enhance, Accept.",
        "keyDifference": "Threat mitigation vs opportunity capture."
      }
    ],
    "examTrap": "Risk is NOT exclusively negative! Positive risk is called an Opportunity.",
    "memoryRule": "Negative risk = Threat. Positive risk = Opportunity."
  },
  {
    "id": "itpm-u1-comp-007",
    "title": "Risk Mitigation vs Transfer vs Acceptance vs Avoidance",
    "unit": "Unit 1",
    "description": "Comparison of the four M-A-T-A risk response strategies.",
    "columns": [
      "Mitigate / Avoid",
      "Transfer / Accept"
    ],
    "criteria": [
      {
        "aspect": "Mitigate vs Avoid",
        "itemA": "Mitigate reduces probability/impact while still performing the activity.",
        "itemB": "Avoid cancels or completely refuses the activity to eliminate risk to zero.",
        "keyDifference": "Reducing risk while proceeding vs canceling the activity entirely."
      },
      {
        "aspect": "Transfer vs Accept",
        "itemA": "Transfer shifts financial/operational liability to a third party (insurance/SLA).",
        "itemB": "Accept retains the risk internally, absorbing losses if they occur, while monitoring.",
        "keyDifference": "Paying an outside entity to take liability vs bearing the risk internally."
      }
    ],
    "examTrap": "Transfer does NOT eliminate the risk; it merely shifts financial liability to an external entity.",
    "memoryRule": "Mitigate = reduce. Avoid = cancel. Transfer = shift. Accept = tolerate."
  },
  {
    "id": "itpm-u1-comp-008",
    "title": "Soft / Qualitative vs Hard / Quantitative PM Skills",
    "unit": "Unit 1",
    "description": "The two complementary pillars of project manager competence.",
    "columns": [
      "Soft / Qualitative Skills",
      "Hard / Quantitative Skills"
    ],
    "criteria": [
      {
        "aspect": "Primary Focus",
        "itemA": "Interpersonal relationships, leadership, trust, communication, and negotiation.",
        "itemB": "Mathematical scheduling, variance analysis, deliverable tracking, and baselining.",
        "keyDifference": "People and leadership vs numbers and analytical methods."
      },
      {
        "aspect": "Measurement",
        "itemA": "Subjective, behavioral, and qualitative; judged by trust and team morale.",
        "itemB": "Objective, formula-driven, and metricized; judged by variance and critical path.",
        "keyDifference": "Behavioral/social vs mathematical/procedural."
      },
      {
        "aspect": "Dominant Context",
        "itemA": "Resolving team conflicts, aligning sponsors, and coaching through crises.",
        "itemB": "Constructing WBS schedules, measuring cost variances, and milestone tracking.",
        "keyDifference": "Stakeholder engagement vs project performance control."
      }
    ],
    "examTrap": "Technical coding ability is NOT a substitute for soft skills or project quantitative control.",
    "memoryRule": "Soft skills lead people. Hard skills control performance baselines."
  }
];
