import json

summary_sections = [
  {
    "title": "5.1 Rational Unified Process (RUP)",
    "summaryParagraph": "The Rational Unified Process (RUP) is an iterative and incremental software engineering process framework created by Rational Software (later IBM). RUP breaks project work into four sequential phases: Inception (defining project scope, business case, and initial risk assessment), Elaboration (architectural baseline, critical use cases, detailed requirements, and risk mitigation), Construction (coding, component development, and testing to produce the operational product), and Transition (deploying the system to the user environment, beta testing, training, and operational handover). Two optional lifecycle phases exist: Production (system maintenance and monitoring) and Disposal (system decommissioning and migration). Across these phases, work is organized into six core engineering disciplines (Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment) and three supporting disciplines (Configuration & Change Management, Project Management, Environment). Workload distribution across disciplines varies by phase, illustrated by the classic 'hump chart'. RUP also introduces prototyping: Throw-away prototyping (exploratory, discarded after clarifying requirements) versus Evolutionary prototyping (iteratively expanded into the final product). Key RUP best practices include iterative development, requirements management, component-based architectures, visual modeling with UML, continuous quality verification, and change control. RUP is heavily dependent on IBM Rational tools and fell out of widespread use due to perceived heaviness.",
    "keyPoints": [
      "Four Core RUP Phases: Inception (feasibility/scope), Elaboration (architecture/requirements), Construction (building/coding), Transition (deployment/rollout).",
      "Two Optional Lifecycle Phases: Production (operating and maintaining software in live environment) and Disposal (decommissioning and retiring legacy system).",
      "Six Core Disciplines: Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment.",
      "Workload Hump Chart: All disciplines occur across all phases, but effort peaks at different times (e.g. Requirements peaks in Inception/Elaboration; Implementation peaks in Construction).",
      "Throw-away Prototyping: Built to clarify unclear requirements or test technical feasibility, then discarded; never transformed into production software.",
      "Evolutionary Prototyping: Incrementally built upon and refined until it becomes the final operational software.",
      "Prototype != Production: A prototype lacks full architectural robustness, scalability, security, and error handling of production systems.",
      "Six Best Practices: Develop iteratively, manage requirements, use component architectures, model visually (UML), continuously verify quality, control changes.",
      "Tooling Dependence: Heavily tied to IBM Rational tooling suite, which contributed to its decline in favor of lightweight agile methodologies."
    ],
    "examInsight": "Memorize the exact 4 core phases in order (Inception -> Elaboration -> Construction -> Transition) and the 2 optional phases (Production, Disposal). Distinguish Throw-away prototyping (discarded) from Evolutionary prototyping (becomes the product). Notice that disciplines run throughout all phases with shifting effort, not in strict waterfall silos."
  },
  {
    "title": "5.2 Agile Software Processes",
    "summaryParagraph": "Agile software development arose in response to changing, uncertain requirements and the rigidity of heavyweight, plan-driven methodologies. In February 2001, seventeen software leaders drafted the Agile Manifesto, establishing four foundational values: (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, and (4) Responding to change over following a plan. While the items on the right have value, those on the left are valued more. Supporting the manifesto are 12 principles emphasizing continuous delivery, welcoming change even late in development, frequent delivery of working software (weeks to months), daily collaboration between business and developers, motivated teams, face-to-face communication, working software as the primary progress metric, sustainable development pace, technical excellence, simplicity (maximizing work NOT done), self-organizing teams, and regular reflection and adaptation. Self-organizing teams possess autonomy regarding HOW work is done, maintain cross-functional competencies, and operate under mutual accountability. Software versioning follows the standard industry pattern 'major.minor.build.revision' (e.g. 4.2.105.9), where major denotes breaking/architectural changes, minor denotes new features, build denotes compiled builds, and revision denotes bug fixes.",
    "keyPoints": [
      "Agile Manifesto (2001): 4 core values and 12 supporting principles created to handle volatile software requirements.",
      "Value 1: Individuals and interactions OVER processes and tools.",
      "Value 2: Working software OVER comprehensive documentation.",
      "Value 3: Customer collaboration OVER contract negotiation.",
      "Value 4: Responding to change OVER following a plan.",
      "12 Principles: Continuous delivery, embrace changing requirements, deliver working software frequently, daily business-developer collaboration, support motivated individuals, face-to-face conversation, working software as progress measure, sustainable pace, technical excellence, simplicity (art of maximizing work not done), self-organizing teams, regular retrospectives.",
      "Self-Organizing Teams: Team chooses HOW to execute work, not dictated by top-down management; shared responsibility and mutual accountability.",
      "Communication Dominance: Face-to-face and high-bandwidth informal communication replace bureaucratic documentation exchanges.",
      "Versioning Scheme: 'major.minor.build.revision' (e.g., 4.2.5.9: 4 = major release, 2 = minor feature addition, 5 = build number, 9 = bug fix/revision)."
    ],
    "examInsight": "IU exams test the exact 4 values of the Agile Manifesto verbatim. Be vigilant against distractors that reverse the values (e.g. 'comprehensive documentation over working software'). Also memorize the 4-level versioning schema 'major.minor.build.revision'."
  },
  {
    "title": "5.3 Scrum",
    "summaryParagraph": "Scrum is an agile framework based on empirical process control theory, originating from Takeuchi and Nonaka's rugby metaphor (1986) and formalized for software by Ken Schwaber and Jeff Sutherland. Empirical control relies on three pillars: Transparency (aspects of process must be visible to those responsible for outcome), Inspection (frequent inspection of artifacts and progress toward goals), and Adaptation (adjusting process or material immediately if deviations occur). Scrum is anchored by five values: Commitment, Courage, Focus, Openness, and Respect. Scrum defines exactly three roles: (1) Product Owner (owns the product vision, single point of value optimization, exclusively manages and orders the Product Backlog), (2) Scrum Master (servant-leader, facilitates Scrum events, coaches the team, removes organizational and technical impediments, ensures Scrum theory is enacted; NOT a project manager), and (3) Developers/Development Team (cross-functional, self-organizing group typically sized between 5 and 9 members responsible for delivering potentially releasable Increments; there are NO sub-titles or sub-teams). Scrum artifacts include the Product Backlog (dynamic, prioritized master requirements list), Sprint Backlog (selected backlog items plus the delivery plan), and the Increment (usable sum of all completed items meeting the Definition of Done). Scrum events comprise: Sprint Planning (max 8 hours for 1-month sprint), Daily Scrum (strictly 15 minutes, answering three questions on progress and blockers), Sprint Review (inspecting Increment with stakeholders), and Sprint Retrospective (team inspecting itself to improve processes and tools). Sprints have a fixed time-box (typically 1 to 4 weeks, never exceeding 1 month) and their duration is NEVER extended if tasks are unfinished.",
    "keyPoints": [
      "Three Empirical Pillars: Transparency (open visibility), Inspection (frequent checking), Adaptation (prompt adjustment).",
      "Five Scrum Values: Commitment, Courage, Focus, Openness, Respect.",
      "Three Scrum Roles: Product Owner (backlog owner, ROI/value maximizer), Scrum Master (servant leader, impediment remover, Scrum coach), Developers (5-9 cross-functional builders). NO Project Manager role exists in Scrum!",
      "Three Scrum Artifacts: Product Backlog (single ordered requirements source), Sprint Backlog (sprint forecast + task plan), Increment (potentially releasable software meeting DoD).",
      "Sprint Duration & Rules: 1 to 4 weeks (max 1 month). Time-box is FIXED; never extend a sprint deadline because work is incomplete. Unfinished work returns to Product Backlog.",
      "Four Scrum Events: Sprint Planning (what & how), Daily Scrum (15 min daily standup: yesterday, today, blockers), Sprint Review (demo to stakeholders), Sprint Retrospective (internal team process improvement).",
      "Definition of Done (DoD): Formal shared agreement on criteria software must meet to be considered releasable (unit tests pass, code reviewed, documented).",
      "Task Board: Visualizes Sprint workflow typically using columns: To Do, In Progress, In Review/Testing, Done."
    ],
    "examInsight": "Scrum eliminates the traditional Project Manager role; PM responsibilities are distributed between the Product Owner (scope, priority, value) and Scrum Master (process, facilitation, blocker removal). Daily Scrum is strictly 15 minutes. Sprints are NEVER extended."
  },
  {
    "title": "5.4 Plan-Driven Project Management in Small Projects",
    "summaryParagraph": "Plan-driven (predictive) project management methodologies establish comprehensive upfront planning, sequential progression through distinct lifecycle phases, and formal milestone gating before advancing. In small projects, plan-driven approaches remain valuable when requirements are well understood, regulatory or compliance mandates require rigorous audit trails, or contractual arrangements mandate fixed scope, schedule, and budget. Four primary variations exist: (1) Pure Waterfall Model (linear sequential flow: Requirements -> Design -> Implementation/Coding -> Verification/Testing -> Deployment/Maintenance; each phase must complete before the next begins, leading to high risk if early assumptions were flawed), (2) Waterfall with Feedback (introduces feedback loops allowing returns to the immediately preceding phase when defects or ambiguities are discovered), (3) Sashimi Model (overlapping phases, named after sliced raw fish, enabling earlier phase starts, reduced overall cycle time, and continuous communication between adjacent phase specialists), and (4) V-Model (an extension of Waterfall that bends upward into a V shape, explicitly pairing each left-hand specification/decomposition phase with a corresponding right-hand testing/verification phase: Requirements Analysis pairs with Acceptance Testing, System Design pairs with System Testing, Architectural Design pairs with Integration Testing, and Detailed Module Design pairs with Unit Testing). Choosing between plan-driven and agile in small projects hinges on requirement stability, user availability, team maturity, and safety/criticality constraints.",
    "keyPoints": [
      "Pure Waterfall: Strict linear sequential phases (Requirements -> Design -> Coding -> Testing -> Deployment). No phase overlapping; high risk of late defect discovery.",
      "Waterfall with Feedback: Incorporates backward iterations to adjacent prior phases when testing or implementation reveals errors.",
      "Sashimi Model: Overlapping waterfall phases; adjacent phases run in parallel to shorten total schedule and provide ongoing inter-phase feedback.",
      "V-Model (Verification & Validation): Left descending arm = Decomposition & Specification; Vertex = Implementation (Coding); Right ascending arm = Integration & Verification.",
      "V-Model 1:1 Mapping: Requirements Analysis <-> Acceptance Testing; System Design <-> System Testing; Architecture Design <-> Integration Testing; Detailed Design <-> Unit Testing.",
      "Predictive Strengths: Clear documentation, predictable milestone gating, straightforward contractual governance, ideal for safety-critical and regulated domains.",
      "Predictive Weaknesses: Inflexibility, high cost of change late in lifecycle, delayed working software delivery, vulnerability to incorrect upfront requirements.",
      "Selection Criteria in Small Projects: Use Plan-driven for stable, certified, contractually fixed projects; use Agile for exploratory, dynamic, user-experience-driven projects."
    ],
    "examInsight": "Memorize the exact V-Model horizontal mappings between left-side specifications and right-side test levels (especially Requirements <-> Acceptance Testing and Detailed Design <-> Unit Testing). Distinguish Waterfall with Feedback (sequential with back-steps) from Sashimi (explicit overlapping of phases)."
  }
]

concepts = [
  {
    "id": "itpm-u5-c01",
    "term": "RUP Four Core Phases",
    "simpleExplanation": "The four main stages that every RUP software project moves through from idea to deployment.",
    "examDefinition": "The sequential lifecycle phases of the Rational Unified Process: Inception (scope, feasibility, business case), Elaboration (architectural baseline and requirements), Construction (building components and coding), and Transition (deployment, beta testing, and user rollout).",
    "whyItMatters": "Provides a structured framework that mitigates high risks early (during elaboration) before full capital is committed to mass construction.",
    "howItWorks": "Each phase ends with a major milestone gate assessing whether the project is ready to proceed to the next phase.",
    "examKeywords": ["Inception", "Elaboration", "Construction", "Transition", "Milestones", "Architectural Baseline"],
    "commonTrap": "Confusing Elaboration with Construction. Architecture and major risks are resolved in Elaboration; mass code building occurs in Construction.",
    "category": "RUP"
  },
  {
    "id": "itpm-u5-c02",
    "term": "RUP Optional Lifecycle Phases (Production & Disposal)",
    "simpleExplanation": "The two phases that occur after the software is released: running it live, and eventually retiring it.",
    "examDefinition": "The two post-transition lifecycle phases in extended Unified Process frameworks: Production (operational support, patch maintenance, and live system monitoring) and Disposal (system decommissioning, data archiving, and migration to replacement systems).",
    "whyItMatters": "Acknowledges that software systems incur operational costs and eventual retirement obligations beyond initial project delivery.",
    "howItWorks": "Production maintains system availability; Disposal systematically decommissions hardware and archives database assets.",
    "examKeywords": ["Production Phase", "Disposal Phase", "Post-Transition", "Decommissioning", "System Maintenance"],
    "commonTrap": "Assuming RUP only has four phases total. The four core development phases are supplemented by two optional lifecycle phases (Production and Disposal).",
    "category": "RUP"
  },
  {
    "id": "itpm-u5-c03",
    "term": "RUP Disciplines & Workload Hump Chart",
    "simpleExplanation": "The six engineering activities (like requirements, design, coding, testing) that happen continuously across all phases, but in different amounts.",
    "examDefinition": "The core workflows in RUP (Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment) that run concurrently across all four phases with shifting intensity, visually depicted in the RUP 'hump chart'.",
    "whyItMatters": "Demonstrates that RUP is not a waterfall model; testing and implementation occur during Elaboration, and requirements are refined during Construction.",
    "howItWorks": "Workload for Requirements peaks during Inception and Elaboration; Implementation and Testing peak during Construction; Deployment peaks in Transition.",
    "examKeywords": ["Disciplines", "Hump Chart", "Workload Distribution", "Continuous Testing", "Iterative"],
    "commonTrap": "Thinking testing only happens in the Transition phase. In RUP, testing is a continuous discipline active across all phases, peaking in Construction.",
    "category": "RUP"
  },
  {
    "id": "itpm-u5-c04",
    "term": "Throw-away vs Evolutionary Prototyping",
    "simpleExplanation": "Throw-away prototypes are discarded after learning; evolutionary prototypes are refined to become the real product.",
    "examDefinition": "Two distinct prototyping strategies: Throw-away prototyping constructs a quick, rough model strictly to clarify ambiguous requirements or test feasibility, which is then discarded; Evolutionary prototyping constructs a robust, architectural slice that is iteratively refined into the final production software.",
    "whyItMatters": "Prevents teams from mistakenly pushing insecure, unscalable throw-away prototype code into production environments.",
    "howItWorks": "Throw-away prioritizes speed over architecture; evolutionary prioritizes high-quality code and extensible design from day one.",
    "examKeywords": ["Throw-away Prototype", "Evolutionary Prototype", "Feasibility", "Prototype != Production", "Requirements Clarification"],
    "commonTrap": "Believing a throw-away prototype can be patched up to become the production system. Course book explicitly warns that prototypes lack production quality.",
    "category": "RUP & Agile"
  },
  {
    "id": "itpm-u5-c05",
    "term": "Agile Manifesto Four Core Values",
    "simpleExplanation": "The four foundational philosophical choices written in 2001 that prioritize people, working code, collaboration, and adaptability.",
    "examDefinition": "The four values of the 2001 Agile Manifesto: (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, (4) Responding to change over following a plan.",
    "whyItMatters": "Serves as the philosophical benchmark for all agile methodologies, guiding trade-off decisions in volatile project environments.",
    "howItWorks": "While the items on the right are recognized as having value, the items on the left are valued significantly more.",
    "examKeywords": ["Individuals and interactions", "Working software", "Customer collaboration", "Responding to change", "Manifesto 2001"],
    "commonTrap": "Thinking agile means 'zero documentation' or 'no planning'. The manifesto states there is value in the right-side items, but left-side items are valued more.",
    "category": "Agile"
  },
  {
    "id": "itpm-u5-c06",
    "term": "Agile Twelve Principles & Simplicity",
    "simpleExplanation": "The twelve actionable rules supporting the Agile Manifesto, emphasizing fast delivery, customer collaboration, and doing only what is needed.",
    "examDefinition": "The 12 operational principles behind the Agile Manifesto, including early and continuous software delivery, welcoming changing requirements, sustainable development pace, face-to-face communication, self-organizing teams, and Simplicity defined as 'the art of maximizing the amount of work not done'.",
    "whyItMatters": "Prevents teams from over-engineering solutions and ensures continuous focus on real business value and sustainable human pace.",
    "howItWorks": "Teams evaluate every feature and meeting against whether it directly advances working software or eliminates unnecessary waste.",
    "examKeywords": ["12 Principles", "Continuous Delivery", "Simplicity", "Work not done", "Sustainable Pace", "Face-to-face"],
    "commonTrap": "Defining simplicity as 'building easy software'. In the Agile Manifesto, Simplicity is explicitly 'the art of maximizing the amount of work NOT done'.",
    "category": "Agile"
  },
  {
    "id": "itpm-u5-c07",
    "term": "Self-Organizing Agile Teams",
    "simpleExplanation": "Autonomous, cross-functional teams that decide for themselves how to do their work without top-down task assignment.",
    "examDefinition": "A cross-functional group of professionals possessing all skills needed to deliver the increment, possessing internal autonomy to determine HOW work is accomplished, and operating under collective responsibility and mutual accountability.",
    "whyItMatters": "Eliminates management bottlenecks, increases ownership, boosts team morale, and accelerates local decision-making in complex environments.",
    "howItWorks": "Management defines the WHAT (business goals and backlog order), and the team autonomously decides WHO does WHAT and HOW.",
    "examKeywords": ["Self-organizing", "Autonomous", "Cross-functional", "Mutual accountability", "Shared responsibility"],
    "commonTrap": "Assuming self-organizing teams have no boundaries. They are strictly bound by the Product Backlog priorities and sprint goals set with the Product Owner.",
    "category": "Agile"
  },
  {
    "id": "itpm-u5-c08",
    "term": "Software Versioning Scheme (Major.Minor.Build.Revision)",
    "simpleExplanation": "The standard four-part number used to track software releases (e.g., 4.2.105.9).",
    "examDefinition": "The standard four-level software versioning format 'major.minor.build.revision', where 'major' indicates architectural/breaking changes, 'minor' indicates new features, 'build' indicates compilation iterations, and 'revision' indicates bug fixes and patches.",
    "whyItMatters": "Provides unambiguous technical traceability for deployments, compatibility checks, bug tracking, and release management.",
    "howItWorks": "Example: Version 4.2.5.9 indicates the 4th major release, 2nd minor feature upgrade, 5th compilation build, and 9th bugfix revision.",
    "examKeywords": ["Versioning", "Major", "Minor", "Build", "Revision", "Release Management"],
    "commonTrap": "Inverting the order or confusing 'build' with 'revision'. 'Build' represents the compile sequence; 'revision' represents bug fixes.",
    "category": "Agile & Engineering"
  },
  {
    "id": "itpm-u5-c09",
    "term": "Scrum Three Empirical Pillars & Five Values",
    "simpleExplanation": "Scrum works through real-world observation (Transparency, Inspection, Adaptation) supported by five team values.",
    "examDefinition": "The theoretical foundation of Scrum based on Empirical Process Control: Transparency (significant aspects visible to all), Inspection (frequent checking of artifacts and progress), and Adaptation (immediate process adjustment). Supported by 5 values: Commitment, Courage, Focus, Openness, Respect.",
    "whyItMatters": "Allows teams to navigate complex, unpredictable software environments by relying on observable evidence rather than rigid upfront plans.",
    "howItWorks": "Scrum events (Daily Scrum, Review, Retrospective) serve as explicit inspection and adaptation checkpoints across transparent artifacts.",
    "examKeywords": ["Transparency", "Inspection", "Adaptation", "Commitment", "Courage", "Focus", "Openness", "Respect"],
    "commonTrap": "Confusing the 3 empirical pillars with the 5 values. Pillars are the operational mechanics; values are the human cultural behavior.",
    "category": "Scrum"
  },
  {
    "id": "itpm-u5-c010",
    "term": "Scrum Three Roles (PO, Scrum Master, Developers)",
    "simpleExplanation": "The three defined roles in Scrum: Product Owner (the what), Scrum Master (the process), and Developers (the builders).",
    "examDefinition": "The triad of Scrum accountabilities: Product Owner (maximizes product value and exclusively manages the Product Backlog), Scrum Master (servant-leader who removes impediments and enforces Scrum practices), and Developers (5-9 cross-functional professionals who build the releasable increment).",
    "whyItMatters": "Eliminates traditional single-manager command-and-control bottlenecks by separating value prioritization from technical execution and process facilitation.",
    "howItWorks": "PO owns the backlog; Developers own the sprint execution and quality; Scrum Master protects the team from external distractions and resolves blockers.",
    "examKeywords": ["Product Owner", "Scrum Master", "Developers", "No Project Manager", "5 to 9 members", "Impediments"],
    "commonTrap": "Looking for a 'Project Manager' role in Scrum. Scrum has NO Project Manager; PM functions are distributed between the PO and SM.",
    "category": "Scrum"
  },
  {
    "id": "itpm-u5-c011",
    "term": "Scrum Three Artifacts & Definition of Done",
    "simpleExplanation": "The three items that provide transparency in Scrum: Product Backlog, Sprint Backlog, and the usable Increment.",
    "examDefinition": "The core deliverables representing work or value in Scrum: (1) Product Backlog (dynamic ordered list of product requirements), (2) Sprint Backlog (selected backlog items plus implementation plan), and (3) Increment (usable, integrated sum of backlog items meeting the shared Definition of Done).",
    "whyItMatters": "Ensures complete transparency and objective measurement of actual progress based on potentially releasable working software.",
    "howItWorks": "Work only becomes part of the Increment when it satisfies 100% of the criteria in the agreed Definition of Done (DoD).",
    "examKeywords": ["Product Backlog", "Sprint Backlog", "Increment", "Definition of Done", "DoD", "Releasable"],
    "commonTrap": "Thinking the Sprint Backlog is owned by the Product Owner. The Sprint Backlog is owned strictly and exclusively by the Developers.",
    "category": "Scrum"
  },
  {
    "id": "itpm-u5-c012",
    "term": "Scrum Four Events & Sprint Time-Boxing",
    "simpleExplanation": "The four structured meetings in Scrum, all bound by strict time limits within a sprint of one month or less.",
    "examDefinition": "The four formal opportunities for inspection and adaptation in Scrum: Sprint Planning (scope and plan), Daily Scrum (15-min daily coordination), Sprint Review (inspecting increment with stakeholders), and Sprint Retrospective (team inspecting its process). Sprints are time-boxed to <= 1 month and NEVER extended.",
    "whyItMatters": "Regularizes feedback, prevents scope creep during execution, eliminates ad-hoc meetings, and ensures steady cadence.",
    "howItWorks": "If work is incomplete at the end of the time-box, the sprint still closes on schedule; incomplete items return to the Product Backlog.",
    "examKeywords": ["Sprint Planning", "Daily Scrum", "15 minutes", "Sprint Review", "Sprint Retrospective", "Time-box", "Never extend"],
    "commonTrap": "Extending a sprint by a few days to finish remaining tasks. In Scrum, sprint length is immutable; you reduce scope, never extend time.",
    "category": "Scrum"
  },
  {
    "id": "itpm-u5-c013",
    "term": "Waterfall & Waterfall with Feedback Models",
    "simpleExplanation": "Waterfall flows strictly downwards; Waterfall with Feedback adds return loops to the previous step when errors are found.",
    "examDefinition": "Plan-driven lifecycle models: Pure Waterfall enforces a strict linear sequence (Requirements -> Design -> Coding -> Testing -> Deployment) where each phase must finish before the next starts; Waterfall with Feedback introduces backward loops allowing teams to revisit the immediate prior phase upon discovering defects.",
    "whyItMatters": "Provides predictable governance and documentation for stable domains, while the feedback variant reduces the catastrophic risk of pure linear progression.",
    "howItWorks": "Feedback loops allow verification findings in Testing to trigger localized design or coding revisions in the preceding phase.",
    "examKeywords": ["Waterfall Model", "Linear Sequential", "Feedback Loops", "Predictive", "Milestone Gating"],
    "commonTrap": "Claiming pure waterfall includes feedback loops. Pure waterfall is strictly unidirectional; Waterfall with Feedback is a distinct variant.",
    "category": "Plan-Driven"
  },
  {
    "id": "itpm-u5-c014",
    "term": "Sashimi Model & V-Model Traceability",
    "simpleExplanation": "Sashimi overlaps phases like slices of fish; V-Model maps each design phase to a specific test phase.",
    "examDefinition": "Specialized plan-driven models: The Sashimi model overlaps adjacent waterfall phases to reduce schedule duration and enable continuous communication; The V-Model links left-side decomposition phases directly to right-side verification test levels (Requirements <-> Acceptance, Design <-> System, Architecture <-> Integration, Module <-> Unit).",
    "whyItMatters": "Sashimi accelerates schedules while preserving documentation; V-Model guarantees complete traceability between requirements and test coverage.",
    "howItWorks": "In V-Model, acceptance test plans are written concurrently with requirements analysis, before coding even begins.",
    "examKeywords": ["Sashimi Model", "Overlapping Phases", "V-Model", "Verification & Validation", "Traceability", "Acceptance Testing"],
    "commonTrap": "Thinking V-Model testing begins only after coding is done. Test *planning* occurs during the corresponding left-hand design phase.",
    "category": "Plan-Driven"
  }
]

content = f"""import {{ KeyConcept, UnitSummarySection }} from "../../../../types";

export const unit5SummarySections: UnitSummarySection[] = {json.dumps(summary_sections, indent=2)};

export const unit5Concepts: KeyConcept[] = {json.dumps(concepts, indent=2)};
"""

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/concepts.ts', 'w') as f:
    f.write(content)

print("Generated unit-5/concepts.ts successfully!")
