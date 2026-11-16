export interface ScenarioItem {
  id: string;
  title: string;
  category: string;
  type: string;
  context: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  source: string;
}

export const unit5Scenarios: ScenarioItem[] = [
  {
    "id": "itpm-u5-scen-001",
    "title": "The Incomplete Sprint Dilemma",
    "category": "Scrum Governance",
    "type": "sprint-timeboxing",
    "context": "Three days before the end of a two-week sprint, the Developers discover an unforeseen database integration complexity. Two out of five user stories committed for the Sprint cannot be completed before the sprint deadline. The Product Owner urges the team to extend the sprint deadline by 4 days to finish the stories.",
    "question": "What is the correct action according to Scrum rules?",
    "options": [
      "Terminate the Sprint strictly on schedule; incomplete stories cannot be marked Done and must return to the Product Backlog.",
      "Grant the 4-day extension because customer commitments must be honored at all costs.",
      "Mark the incomplete user stories as 'Done' and fix the database integration secretly during the next sprint.",
      "Cancel the Sprint immediately and disband the development team."
    ],
    "correctIndex": 0,
    "rationale": "A Scrum Sprint is an inviolable time-box. Sprints are NEVER extended. Unfinished work must not be marked Done (protecting Definition of Done transparency) and must return to the Product Backlog for re-estimation and re-prioritization.",
    "source": "Unit 5 \u00b7 Section 5.3 \u2014 Scrum"
  },
  {
    "id": "itpm-u5-scen-002",
    "title": "The Overzealous Product Owner",
    "category": "Role Boundaries",
    "type": "role-conflict",
    "context": "A newly appointed Product Owner attends the Daily Scrum and begins assigning specific coding tasks to individual junior developers, instructing them to bypass unit tests to accelerate feature delivery.",
    "question": "How should the Scrum Master intervene to uphold Scrum theory?",
    "options": [
      "Remind the Product Owner that Developers are self-organizing and own HOW the work is accomplished, including task assignment and test execution.",
      "Instruct the developers to obey the Product Owner because the PO is the ultimate boss of the project.",
      "Transfer all Product Backlog ownership to the junior developers.",
      "Cancel the project immediately due to irreconcilable organizational conflict."
    ],
    "correctIndex": 0,
    "rationale": "The Product Owner owns WHAT gets built (backlog priorities), but has zero authority over HOW developers build the software or assign tasks. Task assignment belongs solely to the self-organizing Developers, and the Scrum Master must coach the PO on role boundaries.",
    "source": "Unit 5 \u00b7 Section 5.3 \u2014 Scrum"
  },
  {
    "id": "itpm-u5-scen-003",
    "title": "The Rushed Prototype Hazard",
    "category": "RUP & Prototyping",
    "type": "prototype-risk",
    "context": "A fintech startup developed a throw-away prototype in two weeks to demonstrate a mobile peer-to-peer payment UI to venture capitalists. Impressed by the slick visual interface, the CEO orders the engineering team to deploy that exact prototype codebase directly to real banking customers next Monday.",
    "question": "Why must the lead engineer resist this executive order according to software engineering principles?",
    "options": [
      "Throw-away prototypes lack essential non-functional attributes such as encryption, concurrency control, exception handling, and scalability.",
      "Throw-away prototypes can only be compiled on mainframe supercomputers.",
      "International law strictly prohibits commercial sales of software written in Python or JavaScript.",
      "The engineering team will lose their professional Scrum certification."
    ],
    "correctIndex": 0,
    "rationale": "The course book explicitly stresses that a prototype is NOT production software. Throw-away prototypes focus purely on visual demonstration or feasibility, omitting vital non-functional qualities (security hardening, transactional concurrency, exception recovery, scalability). Deploying them creates extreme operational hazard.",
    "source": "Unit 5 \u00b7 Section 5.1 \u2014 Rational Unified Process (RUP)"
  },
  {
    "id": "itpm-u5-scen-004",
    "title": "Medical Implant Firmware Selection",
    "category": "Plan-Driven Selection",
    "type": "methodology-selection",
    "context": "An engineering team is developing embedded micro-controller firmware for an automated cardiac pacemaker. Requirements are strictly mandated by medical health regulators, and software malfunction poses life-threatening consequences.",
    "question": "Which software project management methodology is most appropriate for this project?",
    "options": [
      "The V-Model, providing end-to-end specification traceability and rigorous verification at every decomposition level.",
      "A rapid exploratory Scrum framework where firmware updates are pushed directly to patient devices daily.",
      "A pure throw-away prototype model with zero documentation.",
      "An anarchic trial-and-error approach with no test planning."
    ],
    "correctIndex": 0,
    "rationale": "Safety-critical, life-dependent systems subject to strict statutory audits require the rigorous verification, validation, and horizontal traceability guaranteed by the V-Model. Exploratory agile prototyping is inappropriate for life-critical firmware.",
    "source": "Unit 5 \u00b7 Section 5.4 \u2014 Plan-Driven Project Management in Small Projects"
  },
  {
    "id": "itpm-u5-scen-005",
    "title": "Conflating Review and Retrospective",
    "category": "Scrum Ceremonies",
    "type": "ceremony-conflation",
    "context": "At the end of a sprint, a team combines the Sprint Review and Sprint Retrospective into a single meeting with external commercial clients. During the meeting, developers begin openly arguing about colleague personality conflicts and complaints about development tools in front of the clients.",
    "question": "What fundamental Scrum structural principle was violated?",
    "options": [
      "The Sprint Retrospective must remain an internal team meeting to protect psychological safety and blameless process improvement.",
      "External clients should never be allowed to see working software.",
      "Retrospectives must only be conducted once every calendar year.",
      "Sprint Reviews must be conducted entirely in writing without spoken words."
    ],
    "correctIndex": 0,
    "rationale": "The Sprint Review is an outward-facing product demonstration with stakeholders; the Sprint Retrospective is an inward-facing team improvement meeting strictly reserved for the internal Scrum Team. Inviting clients into retrospectives destroys psychological safety and damages professional trust.",
    "source": "Unit 5 \u00b7 Section 5.3 \u2014 Scrum"
  },
  {
    "id": "itpm-u5-scen-006",
    "title": "Multi-Project Allocation Context Switching",
    "category": "Resource Allocation",
    "type": "context-switching",
    "context": "Management assigns a senior database engineer to work concurrently across four different agile projects, splitting her time into 25% increments. Within a month, her productivity plunges and three project sprints miss their deadlines due to database bottlenecks.",
    "question": "What known IT project phenomenon explains this outcome?",
    "options": [
      "Severe context-switching penalties, fragmented mental focus, and scheduling bottlenecks caused by multi-project allocation.",
      "Hardware limitations of modern corporate laptop processors.",
      "The database engineer is deliberately sabotaging the company.",
      "Agile frameworks cannot function if database tables have more than 10 columns."
    ],
    "correctIndex": 0,
    "rationale": "As detailed in the course book, allocating team members across multiple concurrent projects imposes massive cognitive context-switching overhead, fragments focus, creates cross-project scheduling bottlenecks, and destroys team cohesion.",
    "source": "Unit 5 \u00b7 Section 5.3 \u2014 Scrum"
  },
  {
    "id": "itpm-u5-scen-007",
    "title": "The Sashimi Overlap Rework Trap",
    "category": "Plan-Driven Variations",
    "type": "concurrency-risk",
    "context": "A small project team adopts the Sashimi model to compress schedule duration, starting database coding while system architecture design is 50% complete. Two weeks later, the system architect discovers an unresolvable security flaw and radically alters the core database schema.",
    "question": "What consequence must the project manager manage as a result of the Sashimi concurrency trade-off?",
    "options": [
      "Two weeks of already-written database code must be discarded and rewritten, representing the classic rework risk of overlapping phases.",
      "The team is legally barred from using relational databases.",
      "The project manager must automatically be replaced by an external auditor.",
      "The Sashimi model automatically reverts all source code changes using Git."
    ],
    "correctIndex": 0,
    "rationale": "The Sashimi model compresses total project duration through phase overlap, but inherently accepts the risk that fundamental upstream design shifts will invalidate partially completed downstream work, requiring rework.",
    "source": "Unit 5 \u00b7 Section 5.4 \u2014 Plan-Driven Project Management in Small Projects"
  },
  {
    "id": "itpm-u5-scen-008",
    "title": "The Absent Definition of Done",
    "category": "Scrum Artifacts",
    "type": "dod-failure",
    "context": "A software team has no written Definition of Done. At the Sprint Review, a developer demonstrates a feature by showing hardcoded mock data on his local laptop screen. When deployed to staging, the code immediately crashes because no database integration or unit tests were ever executed.",
    "question": "Why is a formal Definition of Done (DoD) non-negotiable in Scrum?",
    "options": [
      "It creates transparency by establishing an objective quality checklist that code must satisfy to be deemed potentially releasable.",
      "It is a legal document required by government labor departments to pay salaries.",
      "It eliminates the need for software developers to communicate with testers.",
      "It guarantees that software will never have any bugs in production."
    ],
    "correctIndex": 0,
    "rationale": "The Definition of Done provides the shared standard of transparency in Scrum. Without a formal DoD, progress is an illusion; developers declare work 'done' based on subjective local criteria, masking defective and incomplete software.",
    "source": "Unit 5 \u00b7 Section 5.3 \u2014 Scrum"
  }
];
