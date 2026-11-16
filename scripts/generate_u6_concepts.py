import json

summary_sections = [
  {
    "title": "6.1 PMBOK Guide",
    "summaryParagraph": "The Project Management Body of Knowledge (PMBOK Guide), published by the Project Management Institute (PMI), serves as a global foundational standard for project management. In the official course book's edition, the PMBOK framework organizes project activities across 5 Process Groups (Initiating [2 processes], Planning [24 processes], Executing [8 processes], Monitoring & Controlling [11 processes], and Closing [2 processes]) and 10 Knowledge Areas (Integration, Scope, Time/Schedule, Cost, Quality, Human Resources, Communications, Risk, Procurement, Stakeholder). In total, this forms a matrix of exactly 47 discrete processes. Each process is formalized using an ITTO (Inputs, Tools & Techniques, Outputs) architecture. A critical conceptual distinction is maintained between Project Scope (the work that needs to be accomplished to deliver a product, service, or result) and Product Scope (the features, functions, and characteristics that characterize the product itself). PMBOK is characterized by formal baseline governance, progressive elaboration, and rigorous change control procedures.",
    "keyPoints": [
      "PMI PMBOK Standard: Global professional framework structuring project management knowledge.",
      "Five Process Groups: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2). Total = exactly 47 processes.",
      "Ten Knowledge Areas: Integration, Scope, Time, Cost, Quality, Human Resources, Communications, Risk, Procurement, Stakeholder Management.",
      "ITTO Architecture: Every process is defined by specific Inputs, Tools & Techniques, and Outputs.",
      "Project Scope vs Product Scope: Product Scope = features and functions; Project Scope = the work required to deliver that product scope.",
      "Baseline Governance: Scope, Schedule, and Cost baselines form the performance measurement baseline against which variances are tracked."
    ],
    "examInsight": "Memorize the exact process distribution numbers across the 5 process groups: 2-24-8-11-2 = 47 processes total. Be ready to distinguish Project Scope (work performed) from Product Scope (features/functions delivered)."
  },
  {
    "title": "6.2 PRINCE2",
    "summaryParagraph": "PRINCE2 (Projects IN Controlled Environments) is a structured, process-based project management method originating as the de facto standard of the UK government (published by CCTA/OGC/AXELOS with contributions from over 150 European organizations). PRINCE2 is characterized by product-focused planning and clear management boundaries. The framework is structured around four integrated elements: 7 Principles (universal, self-validating rules: Continued business justification, Learn from experience, Defined roles and responsibilities, Manage by stages, Manage by exception, Focus on products, Tailor to suit the environment), 7 Themes (aspects that must be addressed continuously: Business Case, Organization, Quality, Plans, Risk, Change, Progress), and 7 Processes (chronological management flow: Starting up a Project [SU], Directing a Project [DP], Initiating a Project [IP], Controlling a Stage [CS], Managing Product Delivery [MP], Managing a Stage Boundary [SB], Closing a Project [CP]). Governance is apportioned across 4 Management Levels: Corporate/Programme Management, Project Board (Executive, Senior User, Senior Supplier), Project Manager, and Team Managers. Core operational principles include 'Manage by Stages' (discrete review gates) and 'Manage by Exception' (delegated authority bounded by tolerances).",
    "keyPoints": [
      "PRINCE2 7-7-7 Architecture: Exactly 7 Principles, 7 Themes, and 7 Processes.",
      "Seven Principles: Continued business justification, Learn from experience, Defined roles, Manage by stages, Manage by exception, Focus on products, Tailor to environment.",
      "Seven Themes: Business Case, Organization, Quality, Plans, Risk, Change, Progress.",
      "Seven Processes: SU (Starting Up), DP (Directing), IP (Initiating), CS (Controlling Stage), MP (Managing Product Delivery), SB (Managing Stage Boundary), CP (Closing).",
      "Four Management Levels: Corporate/Programme -> Project Board (Executive, Senior User, Senior Supplier) -> Project Manager -> Team Managers.",
      "Manage by Exception: Tolerances set for Time, Cost, Quality, Scope, Risk, Benefits. PM only escalates via Exception Report when tolerances are breached.",
      "Manage by Stages: Stage boundaries serve as mandatory authorization gates where Business Case justification is re-verified before funding next stage."
    ],
    "examInsight": "Memorize the 7-7-7 structure. Distinguish 'Manage by Stages' (gated stage funding) from 'Manage by Exception' (operating within tolerances without micro-management). Know the Project Board triad: Executive (business/funding), Senior User (operational needs), Senior Supplier (technical delivery)."
  },
  {
    "title": "6.3 Multi-Project Management",
    "summaryParagraph": "Modern organizations concurrently plan and execute multiple IT projects to fulfill overarching strategic goals. Multi-project management establishes hierarchical governance structured across three tiers (Figure 46 in the course book): Portfolio, Programme, and Project. A Portfolio comprises projects, programmes, and operations grouped to achieve strategic business objectives, focusing primarily on 'doing the right work' through strategic alignment, capital allocation, and risk balancing. A Programme comprises a group of related projects managed in a coordinated fashion to obtain collective business benefits and capabilities that would not be realized by managing them individually. A Project is a temporary endeavor delivering specific outputs within Iron Triangle constraints. Multi-project coordination is governed through a Project Management Office (PMO), categorized into three structural models: Supportive PMO (consultative, provides templates and training, low control), Controlling PMO (provides support and mandates compliance with frameworks and governance, moderate control), and Directive PMO (directly manages projects and assigns PMs, high control).",
    "keyPoints": [
      "Strategic Hierarchy: Portfolio -> Programme -> Project.",
      "Portfolio Focus: 'Doing the right work' — strategic alignment, portfolio prioritization, investment optimization, risk balance.",
      "Programme Focus: 'Benefit realization' — managing inter-project dependencies to capture synergistic business benefits not achievable individually.",
      "Project Focus: 'Doing work right' — delivering specific outputs/deliverables within scope, schedule, and cost constraints.",
      "Three PMO Types:\n  - Supportive: Consultative role, templates, training, repository; Low control.\n  - Controlling: Support + compliance auditing, frameworks, governance; Moderate control.\n  - Directive: Directly manages projects and assigns project managers; High control."
    ],
    "examInsight": "Distinguish the core questions: Portfolio = 'Are we doing the RIGHT things?' Programme = 'Are we capturing collective BENEFITS?' Project = 'Are we delivering OUTPUTS on schedule/budget?' Memorize the 3 PMO types and their control levels (Supportive=Low, Controlling=Moderate, Directive=High)."
  },
  {
    "title": "6.4 Agile Software Processes in Large Projects",
    "summaryParagraph": "While agile originated for small co-located teams, scaling agile to large enterprise projects requires addressing inter-team dependencies, communication overhead (which grows quadratically with team size), enterprise architecture, and organizational governance. Three major scaling approaches are detailed in the course book: (1) Scrum of Scrums (SoS): An inter-team coordination technique where designated ambassadors from multiple Scrum teams meet regularly (~15 minutes) answering four questions regarding completed work, upcoming work, inter-team blockers, and potential impediments being imposed on other teams. (2) Large-Scale Scrum (LeSS): Formulated by Craig Larman and Bas Vodde around the philosophy 'More with LeSS'. Basic LeSS scales Scrum up to 8 feature teams while maintaining strict single-source simplicity: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, and ONE integrated Potentially Releasable Increment. For larger environments, LeSS Huge introduces Area Product Owners (APOs). (3) Scaled Agile Framework (SAFe): Formulated by Dean Leffingwell, SAFe provides an enterprise multi-tier framework centered on the Agile Release Train (ART) — a long-lived team of agile teams (50 to 125 people) delivering value on a synchronized cadence, supported by 5 Core Competencies and the CALMR approach to DevOps (Culture, Automation, Lean Flow, Measurement, Recovery).",
    "keyPoints": [
      "Scaling Challenges: Inter-team dependencies, coordination overhead (quadratic growth: n(n-1)/2), architectural consistency, compliance.",
      "Scrum of Scrums (SoS): Ambassadors meet for 15-min standup answering 4 questions focused on inter-team dependencies and mutual impediments.",
      "Large-Scale Scrum (LeSS): Craig Larman & Bas Vodde. Scales up to 8 feature teams with NO extra roles. Single-source rules: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, ONE Increment.",
      "LeSS Huge: Scales beyond 8 teams by introducing Area Product Owners (APOs) managing Requirement Areas.",
      "Scaled Agile Framework (SAFe): Dean Leffingwell. Agile Release Train (ART) consists of 50-125 people delivering value on cadence.",
      "CALMR DevOps in SAFe: Culture, Automation, Lean Flow, Measurement, Recovery."
    ],
    "examInsight": "LeSS is defined by its radical simplicity: ONE PO, ONE Backlog, ONE Sprint, ONE DoD, ONE Increment for up to 8 teams. In SoS, know the 4th question: 'Are you putting any impediment in the way of other teams?' Memorize the acronym CALMR."
  },
  {
    "title": "6.5 Selection of the Appropriate Project Management Method",
    "summaryParagraph": "Selecting an appropriate project management methodology requires evaluating organizational structures, project dimensions, and lifecycle paradigms. Organizational structures significantly dictate project manager authority: Functional Organization (PM has little/no authority, part-time coordinator), Matrix Organization (Weak Matrix: PM coordinator; Balanced Matrix: shared power; Strong Matrix: PM has primary authority and full-time role), and Projectized Organization (PM has total authority over dedicated teams, but faces team reassignment challenges upon project closure). Across lifecycle models, methodologies lie on a continuum from Predictive (plan-driven, sequential, frozen baselines) to Adaptive (agile, iterative, incremental). The course book distinguishes Iterative, Incremental, and Agile development: Iterative development creates an initial low-fidelity sketch of all features and progressively refines fidelity; Incremental development builds a small subset of features to 100% completion first, adding more completed features in subsequent stages; Agile development unifies both iterative refinement and incremental delivery. Methodology selection evaluates project size, uncertainty, regulatory constraints, customer availability, and team maturity.",
    "keyPoints": [
      "Organizational Structures:\n  - Functional: Departmental silos; PM has minimal/no authority (part-time coordinator).\n  - Weak Matrix: Functional manager dominates; PM acts as coordinator.\n  - Balanced Matrix: Authority is split equally between PM and functional manager.\n  - Strong Matrix: PM has primary authority and full-time PM role.\n  - Projectized (Project-Oriented): PM has full authority over dedicated project team; 'no home' challenge at completion.",
      "Lifecycle Model Spectrum:\n  - Predictive: Known requirements, high compliance, low volatility.\n  - Iterative: Low fidelity of ALL features first, refined over time.\n  - Incremental: Full fidelity of FEW features first, expanded over time.\n  - Agile: Combines iterative refinement and incremental delivery.",
      "Selection Criteria: Project size, team distribution, requirement volatility, regulatory auditing, and client availability."
    ],
    "examInsight": "Understand the precise difference between Iterative (all features low fidelity first, refined together) and Incremental (subset of features fully built first, more added later). Memorize PM authority levels across Functional, Matrix (Weak, Balanced, Strong), and Projectized organizations."
  }
]

concepts = [
  {
    "id": "itpm-u6-c01",
    "term": "PMBOK 5 Process Groups & 47 Processes",
    "simpleExplanation": "The five stages of PMBOK project management containing exactly 47 standard processes.",
    "examDefinition": "The 5 Process Groups defined by PMI's PMBOK Guide: Initiating (2 processes), Planning (24 processes), Executing (8 processes), Monitoring & Controlling (11 processes), and Closing (2 processes), totaling exactly 47 discrete processes.",
    "whyItMatters": "Provides a comprehensive, standardized process taxonomy ensuring no critical management activity is omitted.",
    "howItWorks": "Planning contains the vast majority of processes (24 out of 47), reflecting PMBOK's plan-driven emphasis.",
    "examKeywords": ["PMBOK", "Process Groups", "47 Processes", "Initiating", "Planning", "Executing", "Monitoring & Controlling", "Closing"],
    "commonTrap": "Forgetting the exact counts per group: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2).",
    "category": "PMBOK"
  },
  {
    "id": "itpm-u6-c02",
    "term": "Project Scope vs Product Scope",
    "simpleExplanation": "Product scope is what the software does; project scope is the work the team must do to deliver it.",
    "examDefinition": "A foundational PMBOK distinction: Product Scope encompasses the features, functions, and characteristics that define a product, service, or result; Project Scope encompasses all the work performed to deliver that product scope with specified quality.",
    "whyItMatters": "Prevents confusing software feature requirements with the engineering, testing, governance, and management effort required to deliver them.",
    "howItWorks": "Product scope is measured against product requirements; project scope is measured against the project management plan and WBS.",
    "examKeywords": ["Project Scope", "Product Scope", "Features and Functions", "Work Performed", "WBS", "Requirements"],
    "commonTrap": "Confusing the two terms. Product Scope = features of the software; Project Scope = all the work done by the project team.",
    "category": "PMBOK"
  },
  {
    "id": "itpm-u6-c03",
    "term": "PRINCE2 Seven Principles",
    "simpleExplanation": "The seven universal core rules that every PRINCE2 project must strictly obey.",
    "examDefinition": "The 7 foundational principles of PRINCE2: (1) Continued business justification, (2) Learn from experience, (3) Defined roles and responsibilities, (4) Manage by stages, (5) Manage by exception, (6) Focus on products, and (7) Tailor to suit the project environment.",
    "whyItMatters": "Principles are universal and self-validating; if a project violates any single principle, it is not a true PRINCE2 project.",
    "howItWorks": "Principles guide all decision-making across themes and processes throughout the project lifecycle.",
    "examKeywords": ["PRINCE2 Principles", "Continued Business Justification", "Learn from Experience", "Manage by Stages", "Manage by Exception", "Focus on Products", "Tailor"],
    "commonTrap": "Confusing the 7 Principles with the 7 Themes or 7 Processes.",
    "category": "PRINCE2"
  },
  {
    "id": "itpm-u6-c04",
    "term": "PRINCE2 Four Management Levels & Project Board",
    "simpleExplanation": "The four tiers of authority in PRINCE2, led at the project level by a three-person Project Board.",
    "examDefinition": "The 4 management layers in PRINCE2: Corporate/Programme Management, Project Board (Directing), Project Manager (Managing), and Team Managers (Delivering). The Project Board represents three key interests: Executive (business/funding), Senior User (operational needs), and Senior Supplier (technical delivery).",
    "whyItMatters": "Ensures executive accountability without micro-managing daily operational tasks, balancing business, user, and supplier interests.",
    "howItWorks": "The Project Board delegates day-to-day stage management to the PM within defined tolerances.",
    "examKeywords": ["Four Management Levels", "Project Board", "Executive", "Senior User", "Senior Supplier", "Directing Level"],
    "commonTrap": "Assuming the Project Manager sits on the Project Board. The PM reports TO the Project Board.",
    "category": "PRINCE2"
  },
  {
    "id": "itpm-u6-c05",
    "term": "Manage by Stages vs Manage by Exception",
    "simpleExplanation": "Manage by stages means approving money stage by stage; manage by exception means only bothering the boss when tolerances are broken.",
    "examDefinition": "Two defining governance principles of PRINCE2: 'Manage by Stages' mandates breaking the project into discrete stages with mandatory boundary gates re-authorizing funding; 'Manage by Exception' establishes distinct tolerances (time, cost, quality, scope, risk, benefits) allowing the PM to manage autonomously without escalation unless a tolerance breach is forecast.",
    "whyItMatters": "Limits financial exposure at stage boundaries and eliminates executive micro-management through tolerance thresholds.",
    "howItWorks": "If a tolerance is breached, the PM submits an Exception Report to the Project Board requesting an Exception Plan.",
    "examKeywords": ["Manage by Stages", "Manage by Exception", "Tolerances", "Exception Report", "Stage Boundaries", "Governance"],
    "commonTrap": "Confusing the two: Stages = discrete funding review gates; Exception = tolerance-based autonomous management.",
    "category": "PRINCE2"
  },
  {
    "id": "itpm-u6-c06",
    "term": "Multi-Project Hierarchy: Portfolio, Programme, Project",
    "simpleExplanation": "Portfolios align with corporate strategy; Programmes coordinate projects for collective benefits; Projects build specific deliverables.",
    "examDefinition": "The three-tier multi-project structure: Portfolio (collection of programs, projects, and operations aligned to strategic business goals), Programme (group of related projects managed cooperatively to capture synergistic benefits), and Project (temporary endeavor producing unique outputs).",
    "whyItMatters": "Prevents projects from operating in silos, ensuring investments directly support corporate strategy and capture collective ROI.",
    "howItWorks": "Portfolios focus on 'doing the right work'; Programmes focus on 'capturing collective benefits'; Projects focus on 'delivering outputs right'.",
    "examKeywords": ["Portfolio", "Programme", "Project", "Strategic Alignment", "Benefits Realization", "Synergy", "Multi-Project"],
    "commonTrap": "Treating a programme as just a 'very large project'. A programme coordinates multiple projects to realize overarching business benefits.",
    "category": "Multi-Project Management"
  },
  {
    "id": "itpm-u6-c07",
    "term": "Three Types of PMO (Supportive, Controlling, Directive)",
    "simpleExplanation": "The three kinds of Project Management Offices, ranging from helpful advice to strict control.",
    "examDefinition": "The 3 structural models of PMO: Supportive PMO (consultative role, provides templates, best practices, and training; low control), Controlling PMO (provides support and mandates compliance with frameworks, governance, and tools; moderate control), and Directive PMO (directly manages projects by assigning PMs who report to the PMO; high control).",
    "whyItMatters": "Defines the degree of authority and organizational governance exerted over project managers and teams.",
    "howItWorks": "Organizations select a PMO type based on organizational maturity, regulatory scrutiny, and management culture.",
    "examKeywords": ["PMO", "Supportive PMO", "Controlling PMO", "Directive PMO", "Level of Control", "Governance"],
    "commonTrap": "Swapping control levels: Supportive = Low; Controlling = Moderate; Directive = High.",
    "category": "Multi-Project Management"
  },
  {
    "id": "itpm-u6-c08",
    "term": "Scrum of Scrums (SoS) Four Questions",
    "simpleExplanation": "A 15-minute meeting where ambassadors from different Scrum teams coordinate and clear cross-team blockers.",
    "examDefinition": "A scaled agile coordination technique where ambassadors from multiple Scrum teams meet regularly (~15 minutes) answering four specific questions regarding inter-team dependencies and mutual impediments.",
    "whyItMatters": "Prevents large multi-team projects from developing integration blind spots and cross-team bottlenecks.",
    "howItWorks": "Question 4 specifically asks: 'Are you putting any impediment in the way of other teams?'",
    "examKeywords": ["Scrum of Scrums", "SoS", "Ambassadors", "Four Questions", "Cross-team Dependencies", "Inter-team Impediments"],
    "commonTrap": "Thinking SoS only asks 3 questions like Daily Scrum. SoS has 4 questions, including cross-team impacts.",
    "category": "Scaled Agile"
  },
  {
    "id": "itpm-u6-c09",
    "term": "Large-Scale Scrum (LeSS) Single-Source Rules",
    "simpleExplanation": "LeSS scales Scrum up to 8 teams while keeping ONE Product Owner, ONE Backlog, ONE Sprint, ONE DoD, and ONE Increment.",
    "examDefinition": "A scaling framework created by Craig Larman and Bas Vodde based on the principle 'More with LeSS'. It scales Scrum to up to 8 feature teams with NO added management roles, requiring: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, and ONE integrated Potentially Releasable Increment.",
    "whyItMatters": "Eliminates organizational bloat, departmental silos, and bureaucratic overhead when scaling Scrum across multiple teams.",
    "howItWorks": "All 8 teams draw items from the single Product Backlog and deliver into a single shared Increment every sprint.",
    "examKeywords": ["LeSS", "Large-Scale Scrum", "Craig Larman", "Bas Vodde", "Single Product Owner", "Single Product Backlog", "More with LeSS"],
    "commonTrap": "Assuming each team in LeSS gets its own Product Owner or its own separate Product Backlog. In LeSS, there is only ONE PO and ONE Backlog.",
    "category": "Scaled Agile"
  },
  {
    "id": "itpm-u6-c010",
    "term": "LeSS Huge & Area Product Owners (APOs)",
    "simpleExplanation": "The variant of LeSS used when projects grow beyond 8 teams, adding Area Product Owners.",
    "examDefinition": "The extended scaling structure of LeSS for projects exceeding 8 teams (up to thousands of developers), which introduces Requirement Areas managed by Area Product Owners (APOs) reporting to the overarching Product Owner.",
    "whyItMatters": "Enables massive enterprise scaling while preventing a single Product Owner from becoming an unmanageable cognitive bottleneck.",
    "howItWorks": "The overall PO focuses on enterprise vision and area prioritization; APOs manage backlog refinement for specific functional areas.",
    "examKeywords": ["LeSS Huge", "Area Product Owner", "APO", "Requirement Areas", "Enterprise Scaling"],
    "commonTrap": "Confusing basic LeSS with LeSS Huge. Basic LeSS has NO Area Product Owners; only LeSS Huge introduces APOs.",
    "category": "Scaled Agile"
  },
  {
    "id": "itpm-u6-c011",
    "term": "SAFe Agile Release Train (ART) & CALMR",
    "simpleExplanation": "SAFe organizes 50 to 125 people into a synchronized team-of-teams called an Agile Release Train, supported by CALMR DevOps.",
    "examDefinition": "Core constructs of the Scaled Agile Framework (SAFe) created by Dean Leffingwell: The Agile Release Train (ART) is a long-lived team of agile teams (50-125 people) delivering value on a synchronized cadence; CALMR represents SAFe's DevOps approach: Culture, Automation, Lean Flow, Measurement, and Recovery.",
    "whyItMatters": "Provides enterprise alignment, program increment planning, and continuous value delivery across large corporations.",
    "howItWorks": "ARTs plan together during Program Increment (PI) planning events and execute synchronized iterations.",
    "examKeywords": ["SAFe", "Agile Release Train", "ART", "50 to 125 people", "CALMR", "Culture", "Automation", "Lean Flow", "Measurement", "Recovery"],
    "commonTrap": "Forgetting what CALMR stands for: Culture, Automation, Lean Flow, Measurement, Recovery.",
    "category": "Scaled Agile"
  },
  {
    "id": "itpm-u6-c012",
    "term": "Organizational Structures & PM Authority Spectrum",
    "simpleExplanation": "How corporate structure decides whether the project manager has zero power, shared power, or total power.",
    "examDefinition": "The continuum of organizational structures defining PM authority: Functional (little/no authority; part-time coordinator), Weak Matrix (functional manager dominates; PM coordinator), Balanced Matrix (shared authority), Strong Matrix (PM has primary authority and full-time role), and Projectized (PM has total authority over dedicated teams).",
    "whyItMatters": "Mismatches between assigned project responsibility and organizational structural authority lead to project failure.",
    "howItWorks": "In projectized organizations, PMs control budgets and staff; in functional organizations, functional managers retain all power.",
    "examKeywords": ["Functional Organization", "Weak Matrix", "Balanced Matrix", "Strong Matrix", "Projectized Organization", "PM Authority Spectrum"],
    "commonTrap": "Confusing Weak Matrix with Strong Matrix. In Weak Matrix, the functional manager rules; in Strong Matrix, the PM rules.",
    "category": "Organizational Structures"
  },
  {
    "id": "itpm-u6-c013",
    "term": "Iterative vs Incremental vs Agile Development",
    "simpleExplanation": "Iterative refines all features together from rough to polished; Incremental finishes a few features fully first; Agile combines both.",
    "examDefinition": "Three distinct software lifecycle strategies: Iterative development creates an initial low-fidelity version of all features and progressively increases fidelity; Incremental development builds a small subset of features to 100% completion first, adding more completed features in subsequent cycles; Agile development integrates both iterative refinement and incremental releases.",
    "whyItMatters": "Enables project managers to choose the correct engineering flow based on whether requirements need holistic architectural evolution or modular feature delivery.",
    "howItWorks": "Iterative = all features, increasing fidelity. Incremental = few features, full fidelity. Agile = both simultaneously.",
    "examKeywords": ["Iterative Development", "Incremental Development", "Agile Development", "Fidelity", "Feature Slices", "Lifecycle Strategy"],
    "commonTrap": "Treating Iterative and Incremental as identical synonyms. The course book explicitly distinguishes them.",
    "category": "Methodology Selection"
  },
  {
    "id": "itpm-u6-c014",
    "term": "Project Methodology Selection Decision Factors",
    "simpleExplanation": "The key project factors that dictate whether to use Predictive, Agile, or Hybrid methods.",
    "examDefinition": "The strategic criteria for selecting project management methodologies: Project size and complexity, requirement volatility and uncertainty, regulatory and safety-criticality constraints, stakeholder and client availability, team experience, and organizational culture.",
    "whyItMatters": "Eliminates dogmatic methodology choices, ensuring the process matches the operational reality of the system.",
    "howItWorks": "High uncertainty + available client = Agile; Stable specs + safety-critical = Plan-driven; Mixed enterprise = Hybrid.",
    "examKeywords": ["Methodology Selection", "Predictive", "Adaptive", "Hybrid", "Requirement Volatility", "Safety-Critical", "Decision Matrix"],
    "commonTrap": "Assuming one methodology is always superior. A 'one-size-fits-all' methodology does not exist in IT project management.",
    "category": "Methodology Selection"
  }
]

content = f"""import {{ KeyConcept, UnitSummarySection }} from "../../../../types";

export const unit6SummarySections: UnitSummarySection[] = {json.dumps(summary_sections, indent=2)};

export const unit6Concepts: KeyConcept[] = {json.dumps(concepts, indent=2)};
"""

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/concepts.ts', 'w') as f:
    f.write(content)

print("Generated unit-6/concepts.ts successfully!")
