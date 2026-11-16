import { Flashcard } from "../../../../types";

export const unit5Flashcards: Flashcard[] = [
  {
    "id": "itpm-u5-fc-001",
    "unit": 5,
    "category": "RUP",
    "front": "What are the four sequential core phases of RUP?",
    "back": "Inception, Elaboration, Construction, Transition. (Memory aid: I-E-C-T).",
    "examTip": "Elaboration strictly precedes Construction. Architecture is validated in Elaboration.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Core Phases"
    }
  },
  {
    "id": "itpm-u5-fc-002",
    "unit": 5,
    "category": "RUP",
    "front": "What are the two optional lifecycle phases in extended Unified Process frameworks?",
    "back": "Production (system maintenance and monitoring in live environment) and Disposal (system decommissioning, data archiving, and migration).",
    "examTip": "RUP has 4 core development phases + 2 optional lifecycle phases.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Optional Lifecycle Phases"
    }
  },
  {
    "id": "itpm-u5-fc-003",
    "unit": 5,
    "category": "RUP",
    "front": "What is the primary deliverable of the RUP Inception phase?",
    "back": "Business case, project scope boundaries, initial feasibility assessment, and initial risk evaluation (culminating in the Lifecycle Objectives milestone).",
    "examTip": "Inception is about feasibility and scope, NOT complete technical architecture.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Inception"
    }
  },
  {
    "id": "itpm-u5-fc-004",
    "unit": 5,
    "category": "RUP",
    "front": "What are the primary deliverables and goals of the RUP Elaboration phase?",
    "back": "Detailed project requirements, an architectural view using UML diagrams (use cases and class hierarchies), and early risk identification and mitigation.",
    "examTip": "Construction cannot safely begin until requirements, architecture, and risks are established in Elaboration.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Elaboration",
      "page": 101
    }
  },
  {
    "id": "itpm-u5-fc-005",
    "unit": 5,
    "category": "RUP",
    "front": "What are the six core engineering disciplines in RUP?",
    "back": "Business Modeling, Requirements, Analysis & Design, Implementation, Test, and Deployment.",
    "examTip": "Remember that disciplines run concurrently across ALL phases with shifting workload peaks.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Disciplines"
    }
  },
  {
    "id": "itpm-u5-fc-006",
    "unit": 5,
    "category": "RUP",
    "front": "What are the three supporting disciplines in RUP?",
    "back": "Configuration & Change Management, Project Management, and Environment (tooling/infrastructure).",
    "examTip": "Environment refers to development tools and infrastructure guidelines.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Supporting Disciplines"
    }
  },
  {
    "id": "itpm-u5-fc-007",
    "unit": 5,
    "category": "RUP",
    "front": "What does the RUP 'hump chart' illustrate?",
    "back": "The workload distribution of disciplines across phases: every discipline occurs in every phase, but effort peaks at different times.",
    "examTip": "Testing is continuous across all phases, not just an end-stage activity.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Hump Chart"
    }
  },
  {
    "id": "itpm-u5-fc-008",
    "unit": 5,
    "category": "RUP",
    "front": "What is a 'throw-away prototype'?",
    "back": "A quick prototype built specifically to clarify unclear requirements or test technical feasibility, then intentionally discarded.",
    "examTip": "Never attempt to convert a throw-away prototype into production software.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Throw-away Prototyping"
    }
  },
  {
    "id": "itpm-u5-fc-009",
    "unit": 5,
    "category": "RUP",
    "front": "What is an 'evolutionary prototype'?",
    "back": "A prototype built with production-grade architecture that is iteratively expanded and refined until it becomes the final system.",
    "examTip": "Evolutionary prototyping requires high code quality from day one.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Evolutionary Prototyping"
    }
  },
  {
    "id": "itpm-u5-fc-010",
    "unit": 5,
    "category": "RUP",
    "front": "Why is 'a prototype NOT production software'?",
    "back": "Prototypes typically lack non-functional robustness: exception handling, concurrency, encryption, scalability, and security hardening.",
    "examTip": "Resist stakeholder pressure to deploy prototypes directly to live production.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Prototype vs Production"
    }
  },
  {
    "id": "itpm-u5-fc-011",
    "unit": 5,
    "category": "RUP",
    "front": "What are RUP's six best practices?",
    "back": "(1) Develop iteratively, (2) Manage requirements, (3) Use component architectures, (4) Model visually (UML), (5) Verify quality continuously, (6) Control changes.",
    "examTip": "Visual modeling is centered around UML (Unified Modeling Language).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Best Practices"
    }
  },
  {
    "id": "itpm-u5-fc-012",
    "unit": 5,
    "category": "RUP",
    "front": "Why did RUP decline in popularity?",
    "back": "Perceived administrative heavyweight process, complex documentation requirements, and strong commercial dependency on expensive IBM Rational tools.",
    "examTip": "Lightweight agile frameworks (like Scrum) emerged as a direct reaction to RUP heaviness.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Decline"
    }
  },
  {
    "id": "itpm-u5-fc-013",
    "unit": 5,
    "category": "Agile",
    "front": "What are the four core values of the Agile Manifesto (2001)?",
    "back": "1. Individuals and interactions over processes and tools\n2. Working software over comprehensive documentation\n3. Customer collaboration over contract negotiation\n4. Responding to change over following a plan.",
    "examTip": "Items on the left are valued MORE than items on the right (which still have value).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Manifesto Values"
    }
  },
  {
    "id": "itpm-u5-fc-014",
    "unit": 5,
    "category": "Agile",
    "front": "How does the Agile Manifesto qualify the items on the right?",
    "back": "'That is, while there is value in the items on the right, we value the items on the left more.'",
    "examTip": "Agile does NOT say documentation or contracts have zero value.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Manifesto Balancing"
    }
  },
  {
    "id": "itpm-u5-fc-015",
    "unit": 5,
    "category": "Agile",
    "front": "What is the primary measure of progress in Agile (Principle 7)?",
    "back": "Working software.",
    "examTip": "Not hours worked, not earned value, not documentation volume: strictly working software.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Principle 7"
    }
  },
  {
    "id": "itpm-u5-fc-016",
    "unit": 5,
    "category": "Agile",
    "front": "How is 'Simplicity' defined in Agile Principle 10?",
    "back": "Simplicity is 'the art of maximizing the amount of work not done'.",
    "examTip": "Memorize this exact phrasing verbatim for IU examinations.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Principle 10: Simplicity"
    }
  },
  {
    "id": "itpm-u5-fc-017",
    "unit": 5,
    "category": "Agile",
    "front": "What does Principle 8 say about development pace?",
    "back": "Agile processes promote sustainable development: sponsors, developers, and users should be able to maintain a constant pace indefinitely.",
    "examTip": "Rejects toxic overtime crunch and hero-driven death marches.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Principle 8: Sustainable Pace"
    }
  },
  {
    "id": "itpm-u5-fc-018",
    "unit": 5,
    "category": "Agile",
    "front": "What is the most effective communication method according to Principle 6?",
    "back": "Face-to-face conversation.",
    "examTip": "Minimizes misunderstandings and contextual delay compared to written documents.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Principle 6"
    }
  },
  {
    "id": "itpm-u5-fc-019",
    "unit": 5,
    "category": "Agile",
    "front": "What does Agile Principle 2 say about changing requirements?",
    "back": "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.",
    "examTip": "Change is treated as a competitive asset, not a project defect.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Principle 2"
    }
  },
  {
    "id": "itpm-u5-fc-020",
    "unit": 5,
    "category": "Agile",
    "front": "What is a 'self-organizing team'?",
    "back": "A team that autonomously chooses HOW best to accomplish work, operating under collective responsibility and mutual accountability.",
    "examTip": "Management defines the WHAT; the self-organizing team defines the HOW.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Self-Organizing Teams"
    }
  },
  {
    "id": "itpm-u5-fc-021",
    "unit": 5,
    "category": "Agile",
    "front": "What is the standard software versioning scheme in the course book?",
    "back": "major.minor.build.revision (e.g., 4.2.5.9).",
    "examTip": "Major = architecture/breaking; Minor = features; Build = compile number; Revision = bug fixes.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Software Versioning"
    }
  },
  {
    "id": "itpm-u5-fc-022",
    "unit": 5,
    "category": "Agile",
    "front": "In version 4.2.5.9, what does each component represent?",
    "back": "4 = 4th major release, 2 = 2nd minor feature release, 5 = 5th compilation build, 9 = 9th bugfix revision.",
    "examTip": "Ensure you do not swap build and revision.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Software Versioning Example"
    }
  },
  {
    "id": "itpm-u5-fc-023",
    "unit": 5,
    "category": "Agile",
    "front": "What does 'cross-functional' mean in Agile teams?",
    "back": "The team possesses all competencies (analysis, design, coding, testing, deployment) needed to deliver the increment without relying on outside silos.",
    "examTip": "Eliminates hand-offs and departmental waiting queues.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Cross-Functional Teams"
    }
  },
  {
    "id": "itpm-u5-fc-024",
    "unit": 5,
    "category": "Agile",
    "front": "What is mutual accountability in Agile?",
    "back": "The entire team shares collective responsibility for success and failure; there is no individual scapegoating or finger-pointing.",
    "examTip": "Fosters psychological safety and cross-training.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Mutual Accountability"
    }
  },
  {
    "id": "itpm-u5-fc-025",
    "unit": 5,
    "category": "Scrum",
    "front": "What are the three pillars of empirical process control in Scrum?",
    "back": "Transparency, Inspection, and Adaptation.",
    "examTip": "Do not confuse the 3 empirical pillars with the 5 Scrum values.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum Empirical Pillars"
    }
  },
  {
    "id": "itpm-u5-fc-026",
    "unit": 5,
    "category": "Scrum",
    "front": "What are the five core values of Scrum?",
    "back": "Commitment, Courage, Focus, Openness, Respect.",
    "examTip": "Memory aid: C-C-F-O-R.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Five Scrum Values"
    }
  },
  {
    "id": "itpm-u5-fc-027",
    "unit": 5,
    "category": "Scrum",
    "front": "What are the three formal roles in Scrum?",
    "back": "Product Owner, Scrum Master, and Developers (Development Team).",
    "examTip": "There is NO Project Manager role in Scrum!",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Three Scrum Roles"
    }
  },
  {
    "id": "itpm-u5-fc-028",
    "unit": 5,
    "category": "Scrum",
    "front": "What is the primary accountability of the Product Owner?",
    "back": "Maximizing the value of the product and exclusively managing and ordering the Product Backlog. (Must be ONE person, not a committee).",
    "examTip": "PO owns WHAT gets built; Developers own HOW it is built.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Product Owner Role"
    }
  },
  {
    "id": "itpm-u5-fc-029",
    "unit": 5,
    "category": "Scrum",
    "front": "What is the primary role of the Scrum Master?",
    "back": "A servant-leader who coaches the team on Scrum, facilitates events, and removes organizational and technical impediments.",
    "examTip": "The Scrum Master is not a project manager and has no administrative authority over team members.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum Master Role"
    }
  },
  {
    "id": "itpm-u5-fc-030",
    "unit": 5,
    "category": "Scrum",
    "front": "What is the typical optimal size for a Development Team in Scrum?",
    "back": "Typically between 5 and 9 members.",
    "examTip": "5 to 9 provides optimal communication bandwidth without scaling overhead.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum Team Size"
    }
  },
  {
    "id": "itpm-u5-fc-031",
    "unit": 5,
    "category": "Scrum",
    "front": "What are the three formal artifacts in Scrum?",
    "back": "Product Backlog, Sprint Backlog, and the Increment.",
    "examTip": "Burn-down charts and user stories are techniques, not official core Scrum artifacts.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum Artifacts"
    }
  },
  {
    "id": "itpm-u5-fc-032",
    "unit": 5,
    "category": "Scrum",
    "front": "Who owns the Sprint Backlog?",
    "back": "The Developers solely own the Sprint Backlog. Only they can modify tasks during the Sprint.",
    "examTip": "The Product Owner owns the Product Backlog, but Developers own the Sprint Backlog.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Sprint Backlog Ownership"
    }
  },
  {
    "id": "itpm-u5-fc-033",
    "unit": 5,
    "category": "Scrum",
    "front": "What is the Definition of Done (DoD)?",
    "back": "A formal, shared agreement on the quality criteria that an increment must satisfy to be considered releasable (tested, integrated, documented).",
    "examTip": "Without a DoD, progress is an illusion and transparency is destroyed.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Definition of Done"
    }
  },
  {
    "id": "itpm-u5-fc-034",
    "unit": 5,
    "category": "Scrum",
    "front": "What are the time-box rules for a Scrum Sprint?",
    "back": "Sprints are fixed at 1 month or less (typically 2 weeks). Sprint duration is NEVER extended if tasks are incomplete.",
    "examTip": "Unfinished tasks return to the Product Backlog; the sprint deadline is never moved.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Sprint Time-Box Rules"
    }
  },
  {
    "id": "itpm-u5-fc-035",
    "unit": 5,
    "category": "Scrum",
    "front": "What is the time-box and purpose of the Daily Scrum?",
    "back": "Strictly 15 minutes. For Developers to synchronize and plan the next 24 hours (What did I do? What will I do? What blockers exist?).",
    "examTip": "It is NOT a management status report to the PM or Scrum Master.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Daily Scrum"
    }
  },
  {
    "id": "itpm-u5-fc-036",
    "unit": 5,
    "category": "Scrum",
    "front": "What is the difference between Sprint Review and Sprint Retrospective?",
    "back": "Sprint Review inspects the PRODUCT INCREMENT with stakeholders. Sprint Retrospective inspects the TEAM'S INTERNAL PROCESS, tools, and relationships.",
    "examTip": "Review = product focus; Retrospective = team process focus.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Review vs Retrospective"
    }
  },
  {
    "id": "itpm-u5-fc-037",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "What characterizes the pure Waterfall model?",
    "back": "Strict linear sequential phases (Requirements -> Design -> Implementation -> Testing -> Maintenance) where each phase must finish before the next begins.",
    "examTip": "Pure waterfall has NO overlapping phases and NO backward feedback loops.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Pure Waterfall"
    }
  },
  {
    "id": "itpm-u5-fc-038",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "What is Waterfall with Feedback?",
    "back": "A waterfall variant that introduces backward iteration loops to the immediately preceding phase when defects or ambiguities arise.",
    "examTip": "Still primarily sequential, but permits localized backward correction.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Waterfall with Feedback"
    }
  },
  {
    "id": "itpm-u5-fc-039",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "What is the Sashimi Model?",
    "back": "A waterfall variant where adjacent phases overlap like slices of raw fish, reducing schedule duration and fostering continuous feedback.",
    "examTip": "Sashimi shortens delivery time, but introduces rework risk if upstream specs change.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Sashimi Model"
    }
  },
  {
    "id": "itpm-u5-fc-040",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "What is the structural shape of the V-Model?",
    "back": "Left arm = Decomposition and specification; Bottom vertex = Implementation (Coding); Right arm = Integration and verification.",
    "examTip": "Bends waterfall into a V to emphasize verification against specifications.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "V-Model Structure"
    }
  },
  {
    "id": "itpm-u5-fc-041",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "In the V-Model, what does Acceptance Testing verify?",
    "back": "Requirements Analysis (top-level customer business requirements).",
    "examTip": "Acceptance Testing pairs horizontally with Requirements Analysis.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "V-Model: Acceptance Testing"
    }
  },
  {
    "id": "itpm-u5-fc-042",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "In the V-Model, what does System Testing verify?",
    "back": "System Design specifications.",
    "examTip": "System Testing pairs horizontally with System Design.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "V-Model: System Testing"
    }
  },
  {
    "id": "itpm-u5-fc-043",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "In the V-Model, what does Integration Testing verify?",
    "back": "Architecture Design (component interfaces and subsystem interactions).",
    "examTip": "Integration Testing pairs horizontally with Architecture Design.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "V-Model: Integration Testing"
    }
  },
  {
    "id": "itpm-u5-fc-044",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "In the V-Model, what does Unit Testing verify?",
    "back": "Detailed Module Design (individual classes, functions, and algorithms).",
    "examTip": "Unit Testing pairs horizontally with Detailed Design at the base of the V.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "V-Model: Unit Testing"
    }
  },
  {
    "id": "itpm-u5-fc-045",
    "unit": 5,
    "category": "Plan-Driven",
    "front": "When should plan-driven models (like V-Model) be chosen over Agile in small projects?",
    "back": "When requirements are stable and well-understood, regulatory audit trails are mandatory, or the system is safety-critical.",
    "examTip": "Stable specs + Regulatory/Safety compliance = Plan-driven / V-Model.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Predictive Selection"
    }
  }
];
