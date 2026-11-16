import { DescriptiveQuestion } from "../../../../types";

export const unit5ImportantQuestions: DescriptiveQuestion[] = [
  {
    "id": "itpm-u5-qa-001",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Explain the four core phases of the Rational Unified Process (RUP) and describe the primary objectives and activities of each phase.",
    "examinerExpectation": "Student must list all 4 core phases in exact sequential order (Inception, Elaboration, Construction, Transition), explain the core technical focus of each according to Section 5.1 of the course book, and note why iterations are not typical in Inception.",
    "answerStructure": [
      "Introduction: Define RUP as an iterative software process framework categorized along 6 engineering disciplines.",
      "Phase 1: Inception - High-level scope, business modeling, core use cases, and feasibility (iterations not typical due to abstract nature).",
      "Phase 2: Elaboration - Detailed requirements, UML architectural modeling (use cases, class diagrams), and critical risk identification.",
      "Phase 3: Construction - Bulk coding, programming, unit/integration testing, and debugging to build high-quality deliverables.",
      "Phase 4: Transition - Delivery to customers/users and maintenance team, hardware/network setup, user documentation, and training.",
      "Optional Phases: Mention optional Production (operational feedback) and Disposal (system replacement) phases."
    ],
    "keywords": [
      "Inception",
      "Elaboration",
      "Construction",
      "Transition",
      "Business Modeling",
      "UML Diagrams",
      "Architectural View",
      "User Acceptance",
      "Maintenance Team"
    ],
    "modelAnswer": "The Rational Unified Process (RUP) organizes software development into four core sequential phases, each characterized by specific technical objectives:\n\n1. Inception Phase: Focuses on determining project scope, business case feasibility, and high-level use cases. Business modeling requires the greatest effort here. Iterations are not typical in this phase due to its generic and abstract nature.\n\n2. Elaboration Phase: Focuses on creating detailed project requirements, establishing an architectural view using UML diagrams (such as use cases for actors and interactions, and class hierarchies for object-oriented development), and identifying project risks to ensure future project success.\n\n3. Construction Phase: Developers program, test, and debug code to produce high-quality deliverables that are thoroughly tested and ready for user acceptance. Resource expenditure and implementation effort peak during this phase.\n\n4. Transition Phase: Transfers the completed solution to customers/users and to the maintenance team that oversees patches and upgrades. At this stage, hardware requirements are addressed, user documentation is prepared, and user training is conducted.\n\nAdditionally, the course book notes two optional full-lifecycle phases: a Production phase (to observe live user response and feed insights to future projects) and a Disposal phase (when transitioning smoothly to a replacement system).",
    "commonMistakes": "Confusing Elaboration with Construction (thinking coding happens without prior architectural modeling in Elaboration). Forgetting that iterations are not typical in Inception.",
    "selfCheckChecklist": [
      "Are all 4 core phases listed in exact order?",
      "Is UML architectural modeling correctly attributed to Elaboration?",
      "Are customer handover, training, and maintenance correctly attributed to Transition?",
      "Are the two optional phases (Production, Disposal) mentioned?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Core Phases & Milestones"
    }
  },
  {
    "id": "itpm-u5-qa-002",
    "unit": 5,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Describe the concept of 'Disciplines' in RUP and explain what the classic 'Hump Chart' reveals about workload distribution across phases.",
    "examinerExpectation": "Examiner expects student to list the 6 core disciplines and 3 supporting disciplines, contrast disciplines with phases, and explain the significance of the workload hump chart.",
    "answerStructure": [
      "Define Discipline: A collection of related activities, workflows, and artifacts.",
      "List 6 Core Disciplines: Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment.",
      "List 3 Supporting Disciplines: Configuration & Change Management, Project Management, Environment.",
      "Explain Hump Chart: Horizontal axis = Phases; Vertical axis = Disciplines. Curves demonstrate continuous concurrent discipline execution with shifting effort peaks."
    ],
    "keywords": [
      "Disciplines",
      "Hump Chart",
      "Workload Distribution",
      "Business Modeling",
      "Requirements",
      "Implementation",
      "Test",
      "Concurrent Execution"
    ],
    "modelAnswer": "In RUP, a 'discipline' (workflow) is a collection of related activities and roles directed toward producing a specific category of software artifacts. RUP defines six core engineering disciplines (Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment) and three supporting disciplines (Configuration & Change Management, Project Management, Environment).\n\nThe classic RUP 'Hump Chart' visually plots project phases along the horizontal axis and disciplines along the vertical axis. It demonstrates two fundamental principles:\n1. Disciplines are NOT sequential waterfall silos; every discipline is active across all four phases to some degree (e.g., testing and implementation occur during Elaboration).\n2. Workload intensity shifts dynamically over time: Requirements and Business Modeling peak during Inception and Elaboration; Implementation and Testing peak during Construction; Deployment peaks during Transition.",
    "commonMistakes": "Confusing disciplines with phases (treating disciplines as sequential time stages). Thinking testing only occurs during Transition.",
    "selfCheckChecklist": [
      "Are all 6 core engineering disciplines named?",
      "Is the hump chart explained as showing shifting workload peaks rather than single-phase silos?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Disciplines & Hump Chart"
    }
  },
  {
    "id": "itpm-u5-qa-003",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Compare and contrast Throw-away Prototyping and Evolutionary Prototyping. Why does the course book caution that 'a prototype is NOT production software'?",
    "examinerExpectation": "Student must clearly define both prototyping strategies, compare their objectives, lifecycles, and code quality expectations, and articulate the non-functional risks of pushing prototype code to production.",
    "answerStructure": [
      "Define Throw-away Prototyping: Built rapidly to explore feasibility/clarify requirements, then discarded.",
      "Define Evolutionary Prototyping: Built with architectural rigor, iteratively refined into the final product.",
      "Comparison Table/Points: Focus, code quality, lifecycle destination, speed.",
      "Explain 'Prototype != Production': Lack of non-functional requirements (security, exception handling, scalability, concurrency, data integrity)."
    ],
    "keywords": [
      "Throw-away Prototyping",
      "Evolutionary Prototyping",
      "Requirements Clarification",
      "Architectural Rigor",
      "Non-functional Requirements",
      "Scalability",
      "Security Hardening"
    ],
    "modelAnswer": "Prototyping is an essential risk-mitigation technique in software engineering, manifesting in two distinct strategies:\n\n1. Throw-away Prototyping: Constructs a quick, rudimentary model strictly to clarify ambiguous user requirements or test technical feasibility. Once the required learning is achieved, the prototype is discarded. Speed is prioritized over architectural robustness, error handling, and code quality.\n\n2. Evolutionary Prototyping: Begins with a solid, well-architected core implementing verified initial requirements. This prototype is iteratively extended, refactored, and tested across successive cycles until it evolves directly into the final operational system. It requires production-level engineering discipline from the very first line of code.\n\nThe course book explicitly warns that 'a prototype is NOT production software' because exploratory prototypes are built to prove concepts, not run businesses. They invariably omit vital non-functional quality attributes: robust exception handling, concurrency management, encryption, defensive security hardening, database normalization, and scalability under load. Yielding to stakeholder pressure to deploy a prototype straight into production introduces severe operational instability, vulnerability, and technical debt.",
    "commonMistakes": "Believing a throw-away prototype can be patched into production. Failing to mention non-functional quality attributes (security, scalability, exception handling).",
    "selfCheckChecklist": [
      "Are both prototyping types defined accurately?",
      "Is the fate of throw-away code (discarded) clearly stated?",
      "Are at least 3 non-functional reasons provided for why prototypes are not production systems?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Prototyping Strategies"
    }
  },
  {
    "id": "itpm-u5-qa-004",
    "unit": 5,
    "marks": 6,
    "priority": "MEDIUM PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Explain the role and activities of the two optional lifecycle phases in the extended Unified Process: Production and Disposal.",
    "examinerExpectation": "Student must identify the two optional phases (Production, Disposal), explain when they occur (post-Transition), and describe the operational activities within each.",
    "answerStructure": [
      "Context: Extended UP recognizes that software lifecycle continues after project handover.",
      "Production Phase: Operational support, live monitoring, patch updates, user support.",
      "Disposal Phase: System retirement, data archiving, data migration, hardware decommissioning.",
      "Significance: Total cost of ownership encompasses maintenance and disposal."
    ],
    "keywords": [
      "Production Phase",
      "Disposal Phase",
      "Post-Transition",
      "Decommissioning",
      "Data Archiving",
      "System Maintenance",
      "Operational Monitoring"
    ],
    "modelAnswer": "Extended Unified Process frameworks incorporate two optional post-transition lifecycle phases that address the ongoing reality of software systems:\n\n1. Production Phase: Commences once the software is deployed and handed over to live operations. Its primary objectives include monitoring live performance, providing continuous end-user technical support, diagnosing operational defects, deploying bug patches, and conducting routine maintenance updates to keep the system aligned with operating system and environmental changes.\n\n2. Disposal Phase: Represents the final stage when a software system reaches the end of its useful economic or technical life. Its activities include systematic system retirement, migrating active customer data to a replacement platform, archiving historical transaction databases to meet statutory audit requirements, and securely decommissioning physical hardware and hosting infrastructure.",
    "commonMistakes": "Assuming RUP stops at Transition. Omitting data archiving and migration from the Disposal phase.",
    "selfCheckChecklist": [
      "Are both Production and Disposal phases named?",
      "Is Disposal described as planned retirement and data migration?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Optional Lifecycle Phases"
    }
  },
  {
    "id": "itpm-u5-qa-005",
    "unit": 5,
    "marks": 6,
    "priority": "POSSIBLE SHORT QUESTION",
    "suggestedTimeMinutes": 10,
    "question": "What factors contributed to the decline of the Rational Unified Process (RUP) in favor of lightweight agile methodologies like Scrum?",
    "examinerExpectation": "Student should identify the key criticisms of RUP: process complexity, heavy documentation, and proprietary tool dependency.",
    "answerStructure": [
      "Perceived Heaviness: Bureaucracy, excessive artifacts, and ceremony.",
      "Documentation Overhead: Demanded exhaustive modeling (UML) that slowed fast-moving projects.",
      "Tool Lock-In: High commercial dependency on expensive IBM Rational tooling suite.",
      "Agile Contrast: Scrum and XP offered simpler, low-overhead alternatives focused on working code."
    ],
    "keywords": [
      "Heavyweight",
      "Bureaucracy",
      "IBM Rational Tools",
      "Tooling Dependency",
      "UML Overhead",
      "Lightweight Agile"
    ],
    "modelAnswer": "Although RUP introduced groundbreaking iterative principles, several factors led to its declining industry adoption in favor of lightweight agile frameworks:\n\n1. Perceived Heaviness and Bureaucracy: RUP was often applied as a rigid, heavyweight process with an overwhelming volume of roles, disciplines, workflows, and template artifacts, creating administrative friction for small and medium teams.\n\n2. Excessive Documentation and Modeling: RUP's heavy emphasis on exhaustive visual modeling with UML and formal specifications often diverted developer hours away from producing working, releasable software.\n\n3. Commercial Tool Lock-In: Practical adoption of RUP was tightly coupled to IBM Rational's proprietary and expensive software ecosystem (e.g., Rational Rose, ClearCase, RequisitePro), making it cost-prohibitive and complex to maintain.\n\nAs customer requirements demanded faster time-to-market, lightweight frameworks like Scrum and XP gained dominance by offering bare-minimum ceremony and direct focus on working software.",
    "commonMistakes": "Claiming RUP was a waterfall model (it was explicitly iterative). Failing to mention the IBM Rational tooling dependency.",
    "selfCheckChecklist": [
      "Is RUP's iterative nature acknowledged while explaining its administrative heaviness?",
      "Is the IBM Rational tool suite mentioned?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "RUP Decline & Tool Dependency"
    }
  },
  {
    "id": "itpm-u5-qa-006",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "State and analyze the four foundational values of the 2001 Agile Manifesto. How do the authors qualify the relationship between the items on the left and right?",
    "examinerExpectation": "Student must state all four values verbatim, explain the philosophical shift of each, and quote/explain the crucial qualifying statement regarding the right-hand items.",
    "answerStructure": [
      "Historical Context: February 2001, Snowbird, Utah, 17 signatories.",
      "Value 1: Individuals and interactions over processes and tools.",
      "Value 2: Working software over comprehensive documentation.",
      "Value 3: Customer collaboration over contract negotiation.",
      "Value 4: Responding to change over following a plan.",
      "Balancing Qualification: 'While there is value in the items on the right, we value the items on the left more.'"
    ],
    "keywords": [
      "Individuals and interactions",
      "Working software",
      "Customer collaboration",
      "Responding to change",
      "Snowbird Utah",
      "Left vs Right",
      "Balancing Statement"
    ],
    "modelAnswer": "In February 2001, seventeen software leaders gathered in Snowbird, Utah and published the Agile Manifesto, articulating four foundational values:\n\n1. Individuals and interactions over processes and tools: Human talent, collaboration, and high-bandwidth communication drive project success far more effectively than rigid adherence to automated tools or bureaucratic procedures.\n\n2. Working software over comprehensive documentation: The primary, unambiguous proof of progress is functional, tested software. Documentation should be lean and purposeful rather than an exhaustive substitute for working code.\n\n3. Customer collaboration over contract negotiation: Adversarial legalistic contract enforcement is replaced by an ongoing partnership where customer representatives actively guide product development daily.\n\n4. Responding to change over following a plan: Because software requirements evolve as users experience increments, teams must embrace change as a competitive advantage rather than blindly following an obsolete upfront plan.\n\nCrucially, the authors appended a balancing qualification: 'That is, while there is value in the items on the right, we value the items on the left more.' This confirms that agile does NOT eliminate processes, documentation, contracts, or planning; it simply prioritizes the human, adaptive, and working elements on the left.",
    "commonMistakes": "Stating that agile has 'no documentation' or 'no planning'. Reversing the values (putting right-hand items over left-hand items).",
    "selfCheckChecklist": [
      "Are all four values stated with exact left/right ordering?",
      "Is the qualifying sentence about the right-hand items clearly explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Manifesto Four Values"
    }
  },
  {
    "id": "itpm-u5-qa-007",
    "unit": 5,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "How is 'Simplicity' defined in Principle 10 of the Agile Manifesto, and why is this concept essential to maintaining project agility?",
    "examinerExpectation": "Student must quote the exact definition ('the art of maximizing the amount of work not done') and explain how this principle prevents over-engineering, scope bloat, and technical debt.",
    "answerStructure": [
      "Quote Definition: 'Simplicity\u2014the art of maximizing the amount of work not done\u2014is essential.'",
      "Contrast with common misconception: Simplicity does not mean primitive or simplistic code.",
      "Mechanisms: Avoiding gold-plating, deferring speculative features (YAGNI), eliminating unnecessary documentation.",
      "Impact on Agility: Smaller codebases are easier to test, refactor, maintain, and adapt."
    ],
    "keywords": [
      "Simplicity",
      "Maximizing work not done",
      "Gold-plating",
      "YAGNI",
      "Technical Debt",
      "Principle 10"
    ],
    "modelAnswer": "Principle 10 of the Agile Manifesto defines simplicity concisely: 'Simplicity\u2014the art of maximizing the amount of work not done\u2014is essential.'\n\nThis definition rejects the common misconception that simplicity means writing trivial or unsophisticated software. Instead, it embodies a rigorous engineering discipline:\n1. Eliminating Gold-Plating: Teams deliver exactly what satisfies user value today, actively resisting the temptation to build speculative, complex architectures for hypothetical future needs (the 'You Aren't Gonna Need It' / YAGNI principle).\n2. Lean Artifacts: Eliminates bureaucratic reports, unnecessary meetings, and unused software features that add maintenance drag without user benefit.\n3. Preserving Agility: Every line of unwritten code is a line that never needs debugging, testing, refactoring, or securing. Keeping the system minimal ensures the team can pivot rapidly when true requirements change.",
    "commonMistakes": "Defining simplicity as 'building easy apps' or 'cutting testing corners'. Failing to cite 'maximizing the amount of work not done'.",
    "selfCheckChecklist": [
      "Is the exact definition quoted verbatim?",
      "Is the connection between minimal codebase and rapid adaptability explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Principle 10: Simplicity"
    }
  },
  {
    "id": "itpm-u5-qa-008",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Analyze the organizational structure and operating principles of 'Self-Organizing Teams' in Agile. What authority do they possess, and how does accountability operate?",
    "examinerExpectation": "Examiner expects student to explain what self-organizing means, identify the boundary between WHAT (business) and HOW (team), describe cross-functionality, and explain mutual accountability.",
    "answerStructure": [
      "Define Self-Organizing: Cross-functional group with internal autonomy over work execution.",
      "Authority Boundaries: Product Owner/Business defines WHAT; Team defines HOW.",
      "Core Attributes: Cross-functional competence, high-bandwidth communication, mutual accountability.",
      "Mutual Accountability: Collective ownership; team succeeds or fails as a unit, eliminating individual blame."
    ],
    "keywords": [
      "Self-Organizing",
      "Autonomous",
      "Cross-Functional",
      "Mutual Accountability",
      "Shared Ownership",
      "What vs How",
      "Cockburn & Highsmith"
    ],
    "modelAnswer": "In agile software engineering, a self-organizing team is an autonomous, cross-functional group of professionals who manage their own work rather than taking task-by-task orders from a traditional command-and-control manager.\n\n1. Clear Authority Boundaries: Self-organization operates within explicit boundaries. External business management and the Product Owner define the 'WHAT'\u2014the strategic vision, business priorities, and acceptance criteria in the Product Backlog. The team holds sole professional autonomy over the 'HOW'\u2014estimating effort, designing technical architecture, breaking stories into tasks, and assigning work among themselves.\n\n2. Cross-Functionality: The team possesses all necessary competencies (analysis, coding, database design, testing, infrastructure) internally, eliminating hand-offs and waiting dependencies between separate departmental silos.\n\n3. High-Bandwidth Communication: As highlighted by Cockburn and Highsmith, continuous, informal, and face-to-face communication is the lifeblood of self-organizing teams, enabling real-time problem-solving.\n\n4. Mutual Accountability: Accountability is collective rather than individual. The team commits together to the Sprint Goal, and they succeed or fail together. If a tester is overwhelmed, developers assist with testing; individual finger-pointing is eliminated in favor of shared ownership.",
    "commonMistakes": "Assuming self-organizing teams have total anarchy with no boundaries (they are strictly bound by the Product Backlog and Sprint Goal). Thinking individuals retain separate specialist accountability.",
    "selfCheckChecklist": [
      "Is the 'What vs How' distinction made clearly?",
      "Is mutual/collective accountability explained without individual blame?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Self-Organizing Teams"
    }
  },
  {
    "id": "itpm-u5-qa-009",
    "unit": 5,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Explain the standard software versioning scheme 'major.minor.build.revision' as presented in the course book. Illustrate your answer using the example '4.2.5.9'.",
    "examinerExpectation": "Student must identify the 4 components in exact sequence, explain the technical meaning of each component, and correctly map the example 4.2.5.9.",
    "answerStructure": [
      "Identify Format: major.minor.build.revision.",
      "Explain Major: Breaking architectural changes or substantial new functionality.",
      "Explain Minor: Smaller, backward-compatible feature enhancements.",
      "Explain Build: Specific compilation/assembly iteration count.",
      "Explain Revision: Bug fixes, security patches, or hotfixes.",
      "Deconstruct Example 4.2.5.9: 4th major release, 2nd minor release, 5th compilation build, 9th bugfix revision."
    ],
    "keywords": [
      "Versioning",
      "Major",
      "Minor",
      "Build",
      "Revision",
      "Backward Compatibility",
      "4.2.5.9"
    ],
    "modelAnswer": "Software release versioning tracks the evolution, compatibility, and maintenance state of a product using the standard four-part format 'major.minor.build.revision'. Each element communicates specific technical information:\n\n1. Major: Signifies fundamental architectural overhauls, significant platform updates, or major feature packages that may introduce breaking changes or deprecate older APIs.\n2. Minor: Denotes backward-compatible feature additions, enhancements, and functional improvements within the existing major architecture.\n3. Build: Identifies the internal automated compilation or assembly sequence number generated by continuous integration systems.\n4. Revision: Indicates minor bug fixes, maintenance patches, security updates, or localized defect resolutions that alter no functionality.\n\nApplying this to the course book's explicit example '4.2.5.9':\n- '4' indicates the fourth major release of the software;\n- '2' indicates the second minor feature release within major version 4;\n- '5' indicates the fifth compilation build of that minor release;\n- '9' indicates the ninth maintenance revision/bugfix applied to build 5.",
    "commonMistakes": "Swapping the order of 'build' and 'revision'. Inverting major and minor meanings.",
    "selfCheckChecklist": [
      "Are all 4 terms in correct sequential order?",
      "Is the example 4.2.5.9 deconstructed accurately matching the course book?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Software Versioning Scheme"
    }
  },
  {
    "id": "itpm-u5-qa-010",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Scrum is founded on empirical process control theory. Define and explain its three foundational pillars: Transparency, Inspection, and Adaptation.",
    "examinerExpectation": "Student must identify all three pillars, define each within Scrum context, explain how they interact, and describe how Scrum ceremonies operationalize them.",
    "answerStructure": [
      "Theoretical Basis: Empirical process control (knowledge comes from experience and observing reality).",
      "Pillar 1: Transparency - Open visibility and shared standards (e.g. Definition of Done).",
      "Pillar 2: Inspection - Frequent evaluation of artifacts and progress toward sprint goal.",
      "Pillar 3: Adaptation - Prompt adjustment when deviations outside acceptable limits occur.",
      "Interdependence: Inspection without transparency is flawed; adaptation without inspection is blind."
    ],
    "keywords": [
      "Empirical Process Control",
      "Transparency",
      "Inspection",
      "Adaptation",
      "Definition of Done",
      "Artifacts",
      "Deviations"
    ],
    "modelAnswer": "Scrum rejects rigid predictive planning in favor of Empirical Process Control, which asserts that in complex, uncertain environments, reliable decisions must be based on observed evidence and real-world experimentation. It is upheld by three essential pillars:\n\n1. Transparency: Significant aspects of the process, progress, and deliverables must be clearly visible to all stakeholders and developers. Transparency requires a common language and shared standard of understanding\u2014most notably the Definition of Done (DoD). If developers call an item 'done' when it has not been tested, transparency is destroyed and stakeholders are misled.\n\n2. Inspection: Scrum artifacts (Product Backlog, Sprint Backlog, Increment) and progress toward agreed sprint goals must be inspected frequently to detect undesirable variances or quality degradation. However, inspections must be structured (through formal Scrum events) so they do not disrupt development flow.\n\n3. Adaptation: If an inspection reveals that one or more aspects of the process or product deviate outside acceptable tolerances, the process, materials, or plans must be adjusted immediately to prevent further compounding errors.\n\nThese pillars form a continuous feedback loop: without transparency, inspection evaluates falsehoods; without inspection, problems remain hidden; without adaptation, inspection is a useless academic exercise.",
    "commonMistakes": "Confusing the 3 pillars with the 5 values. Failing to emphasize that adaptation must occur promptly.",
    "selfCheckChecklist": [
      "Are Transparency, Inspection, and Adaptation all thoroughly defined?",
      "Is the role of shared standards (like DoD) in Transparency explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum Empirical Pillars"
    }
  },
  {
    "id": "itpm-u5-qa-011",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Analyze how traditional Project Manager responsibilities are distributed among the three Scrum roles: Product Owner, Scrum Master, and Developers.",
    "examinerExpectation": "Student must highlight that Scrum has NO Project Manager, and systematically explain how scope, budget, process, facilitation, schedule, and quality are apportioned among PO, SM, and Developers.",
    "answerStructure": [
      "Core Premise: Scrum eliminates the traditional centralized Project Manager role to avoid command-and-control bottlenecks.",
      "Product Owner Responsibilities: Scope, business case, ROI, prioritization, customer requirements.",
      "Scrum Master Responsibilities: Process governance, Scrum enforcement, servant-leadership, impediment removal.",
      "Developers Responsibilities: Technical design, task scheduling, effort estimation, quality assurance, increment delivery.",
      "Conclusion: PM duties are decentralized into specialized accountabilities."
    ],
    "keywords": [
      "No Project Manager",
      "Product Owner",
      "Scrum Master",
      "Developers",
      "Decentralized Governance",
      "Impediments",
      "Backlog Prioritization"
    ],
    "modelAnswer": "Scrum deliberately eliminates the traditional single 'Project Manager' role. In traditional management, one person simultaneously controls scope, schedule, budget, team assignments, and process compliance\u2014creating communication bottlenecks and conflicts of interest. Scrum redistributes these responsibilities across three distinct, balanced roles:\n\n1. Product Owner (Business & Value Governance): Inherits traditional PM scope, budget, and business justification responsibilities. The PO defines the product vision, manages stakeholder expectations, evaluates ROI, and holds sole authority over the prioritization and acceptance of Product Backlog items.\n\n2. Scrum Master (Process & Team Coaching): Inherits traditional PM facilitation and risk-removal responsibilities, but acts as a servant-leader rather than a boss. The SM enforces Scrum rules, facilitates events, protects the team from external distractions, and actively resolves organizational and technical impediments.\n\n3. Developers (Execution & Schedule Governance): Inherits traditional PM task allocation, scheduling, and technical governance responsibilities. As a self-organizing group (typically 5 to 9 members), the Developers estimate task effort, decide how much work to pull into a Sprint, design technical architecture, assign tasks among themselves, and guarantee quality through the Definition of Done.",
    "commonMistakes": "Claiming that the Scrum Master is just a modern title for Project Manager. Overlooking the Developers' role in managing their own schedule and task distribution.",
    "selfCheckChecklist": [
      "Is the complete absence of a traditional PM stated explicitly?",
      "Are responsibilities mapped accurately to PO, SM, and Developers?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Traditional PM Distribution in Scrum"
    }
  },
  {
    "id": "itpm-u5-qa-012",
    "unit": 5,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Contrast the accountabilities of the Product Owner and the Scrum Master. Why is combining these two roles into one person considered a severe Scrum anti-pattern?",
    "examinerExpectation": "Student must contrast PO (value/what) vs SM (process/impediments), and explain the fatal conflict of interest that occurs if one individual holds both roles.",
    "answerStructure": [
      "Role of Product Owner: Focuses on WHAT to build, business value, stakeholder priorities, backlog order.",
      "Role of Scrum Master: Focuses on HOW the team works, process health, psychological safety, blocker removal.",
      "Conflict of Interest in Combining Roles: PO pressure for more features will override SM duty to protect sustainable pace and process discipline.",
      "Outcome of Anti-Pattern: Team burnout, compromised Definition of Done, loss of psychological safety."
    ],
    "keywords": [
      "Product Owner",
      "Scrum Master",
      "Conflict of Interest",
      "Anti-Pattern",
      "Sustainable Pace",
      "What vs How",
      "Role Combining"
    ],
    "modelAnswer": "The Product Owner and Scrum Master hold fundamentally distinct and intentionally balanced accountabilities in Scrum:\n\n- The Product Owner represents the voice of the business and customer. The PO is externally facing, ROI-driven, and focused on WHAT the team builds, constantly pushing to maximize the business value delivered in each sprint.\n- The Scrum Master represents the process and the team. The SM is internally facing, people-oriented, and focused on HOW the team works, serving as a coach who protects the team from external pressure, ensures a sustainable development pace, and removes blockers.\n\nCombining the Product Owner and Scrum Master roles into a single individual is a catastrophic Scrum anti-pattern because it creates an irreconcilable conflict of interest:\n1. Destruction of Sustainable Pace: When scope pressure mounts, an individual acting as PO will naturally demand more features, while their duty as SM to protect the team from overload is compromised.\n2. Erosion of Quality: A combined PO/SM is tempted to waive criteria in the Definition of Done (e.g. skipping integration tests or documentation) to meet feature delivery deadlines.\n3. Loss of Safety: Developers cannot confide blockers or process grievances to a Scrum Master who also evaluates commercial priorities and feature delivery.",
    "commonMistakes": "Failing to explain the specific conflict of interest. Assuming combining roles is acceptable in small companies.",
    "selfCheckChecklist": [
      "Are both roles sharply contrasted?",
      "Are at least two distinct conflicts of interest detailed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "PO vs SM & Anti-Patterns"
    }
  },
  {
    "id": "itpm-u5-qa-013",
    "unit": 5,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Describe the three formal Scrum artifacts (Product Backlog, Sprint Backlog, Increment) and explain how the Definition of Done governs the transition of work into the Increment.",
    "examinerExpectation": "Student must define all three artifacts, identify who owns and manages each, and explain how the Definition of Done serves as the quality gate for the Increment.",
    "answerStructure": [
      "Product Backlog: Single dynamic source of requirements, managed exclusively by Product Owner.",
      "Sprint Backlog: Selected items + delivery plan, owned exclusively by Developers.",
      "Increment: Sum of completed backlog items that meet the Definition of Done.",
      "Role of Definition of Done (DoD): Formal quality checklist (unit tests, integration, documentation) preventing incomplete code from being declared finished."
    ],
    "keywords": [
      "Product Backlog",
      "Sprint Backlog",
      "Increment",
      "Definition of Done",
      "DoD",
      "Potentially Releasable",
      "Quality Gate"
    ],
    "modelAnswer": "Scrum defines three formal artifacts that provide full transparency across the development lifecycle:\n\n1. Product Backlog: An emergent, ordered list of everything that might be needed in the product (features, functions, bug fixes, enhancements). It is dynamic, never complete, and exclusively managed and prioritized by the Product Owner.\n\n2. Sprint Backlog: The set of Product Backlog items selected for the current Sprint, combined with the detailed technical plan and task breakdown for delivering them. It is owned solely by the Developers, and only they may alter its tasks during the sprint.\n\n3. The Increment: The usable, integrated sum of all Product Backlog items completed during the current Sprint, added to the value of all previous increments. At the end of the Sprint, the Increment must be in a potentially releasable condition.\n\nThe Definition of Done (DoD) is the formal quality contract governing the Increment. It establishes an unambiguous checklist of technical criteria (e.g., unit test coverage >= 80%, peer code review passed, CI build green, documentation updated) that an item must satisfy. If a user story does not satisfy 100% of the DoD, it CANNOT be included in the Increment and CANNOT be demonstrated at the Sprint Review; it returns to the Product Backlog.",
    "commonMistakes": "Claiming the PO owns the Sprint Backlog (Developers own it). Believing partially completed items can be counted in the Increment.",
    "selfCheckChecklist": [
      "Are all 3 artifacts accurately defined with clear ownership?",
      "Is the DoD explicitly described as a strict gate for the Increment?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum Artifacts & Definition of Done"
    }
  },
  {
    "id": "itpm-u5-qa-014",
    "unit": 5,
    "marks": 6,
    "priority": "POSSIBLE SHORT QUESTION",
    "suggestedTimeMinutes": 10,
    "question": "What is the purpose, time-box, and standard agenda of the Daily Scrum? List common anti-patterns that destroy its effectiveness.",
    "examinerExpectation": "Student must state the 15-minute time-box, identify the Developers as the primary audience, list the three guiding questions, and identify anti-patterns (e.g. status report to manager, problem-solving derailment).",
    "answerStructure": [
      "Purpose & Time-box: 15 minutes daily standup for Developers to synchronize and plan next 24 hours.",
      "Three Guiding Questions: What did I do yesterday? What will I do today? What blockers exist?",
      "Anti-Patterns: Turning it into a management status meeting, deep-dive technical debates exceeding 15 minutes, treating it as an attendance roll-call."
    ],
    "keywords": [
      "Daily Scrum",
      "15 minutes",
      "Three Questions",
      "Impediments",
      "Anti-Patterns",
      "Status Meeting",
      "Time-Box"
    ],
    "modelAnswer": "The Daily Scrum is a 15-minute time-boxed daily event designed strictly for the Developers to inspect progress toward the Sprint Goal and synchronize their tactical plan for the next 24 hours.\n\nIts traditional agenda centers on three concise questions answered by each developer:\n1. What did I do yesterday that helped the Development Team meet the Sprint Goal?\n2. What will I do today to help the Development Team meet the Sprint Goal?\n3. Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?\n\nCommon anti-patterns that ruin its effectiveness include:\n- Management Status Report: Developers report to the Scrum Master or PM instead of conversing with their peers.\n- Problem-Solving Rabbit Holes: Teams begin debating complex architectural algorithms during the standup; technical discussions should be deferred until immediately after the 15-minute meeting.\n- Time-Box Violation: Allowing the meeting to drag on for 30 to 60 minutes, causing developer fatigue.",
    "commonMistakes": "Thinking the Daily Scrum is for the Product Owner or PM to track attendance. Forgetting the strict 15-minute time-box.",
    "selfCheckChecklist": [
      "Is the 15-minute time-box stated?",
      "Are the three classic questions listed?",
      "Are realistic anti-patterns identified?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Daily Scrum Mechanics & Anti-Patterns"
    }
  },
  {
    "id": "itpm-u5-qa-015",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Distinguish between the Sprint Review and the Sprint Retrospective in terms of primary objective, participants, artifacts inspected, and expected outcomes.",
    "examinerExpectation": "Student should contrast Review (outward product focus with stakeholders) vs Retrospective (inward team process focus), comparing participants, timing, and outcomes.",
    "answerStructure": [
      "Core Distinction: Review inspects the PRODUCT; Retrospective inspects the PROCESS.",
      "Sprint Review: Product focus, attendees include Scrum Team + external stakeholders, inspects Increment, outcome is adapted Product Backlog.",
      "Sprint Retrospective: Process focus, attendees strictly internal Scrum Team, inspects people, tools, relationships, outcome is actionable process improvements.",
      "Comparison Table/Points highlighting timing and psychological atmosphere."
    ],
    "keywords": [
      "Sprint Review",
      "Sprint Retrospective",
      "Product Focus",
      "Process Focus",
      "Stakeholders",
      "Psychological Safety",
      "Continuous Improvement"
    ],
    "modelAnswer": "Although held consecutively at the conclusion of a Sprint, the Sprint Review and Sprint Retrospective serve two entirely different inspection-and-adaptation functions:\n\n1. Sprint Review (Product & Stakeholder Focus):\n- Objective: To inspect the newly delivered Increment of working software and adapt the Product Backlog based on real-world stakeholder feedback.\n- Participants: The Scrum Team (PO, SM, Developers) AND key external stakeholders, customers, and business sponsors.\n- Focus: Working software demo, market trends, budget remaining, and upcoming release plans.\n- Outcome: An updated, re-prioritized Product Backlog reflecting customer reactions to the demonstrated increment.\n\n2. Sprint Retrospective (Team & Process Focus):\n- Objective: To inspect how the last Sprint went with respect to people, relationships, engineering processes, and tools, and identify concrete ways to improve.\n- Participants: Strictly the internal Scrum Team (Developers, Scrum Master, Product Owner). External stakeholders are excluded to preserve psychological safety.\n- Focus: Internal collaboration, communication bottlenecks, DoD effectiveness, and developer tools.\n- Outcome: A tangible list of actionable process improvements prioritized for implementation in the immediate next sprint.",
    "commonMistakes": "Allowing external stakeholders into the Retrospective (destroys psychological safety). Believing the Retrospective is for bug fixing.",
    "selfCheckChecklist": [
      "Is the Product vs Process distinction emphasized?",
      "Is the participant list for each event accurately differentiated?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Sprint Review vs Sprint Retrospective"
    }
  },
  {
    "id": "itpm-u5-qa-016",
    "unit": 5,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Explain the rule of 'Sprint Time-Box Inviolability'. What must happen when the Developers cannot finish all planned user stories before the sprint deadline?",
    "examinerExpectation": "Student must state that sprint length is never extended, explain the rationale (cadence, transparency, risk containment), and describe how incomplete work is handled.",
    "answerStructure": [
      "Inviolable Rule: Sprint duration is fixed; it is NEVER extended under any circumstance.",
      "Handling Incomplete Work: Stop work when time-box expires; do not mark incomplete items as done; return them to Product Backlog.",
      "Re-Estimation & Grooming: Incomplete items are re-estimated and re-prioritized by PO for future sprints.",
      "Why Extending Deadlines is Fatal: Destroys velocity metrics, hides estimation flaws, damages predictability."
    ],
    "keywords": [
      "Time-Box Inviolability",
      "Never Extend",
      "Incomplete Work",
      "Product Backlog Return",
      "Velocity Distortion",
      "Transparency"
    ],
    "modelAnswer": "In Scrum, the duration of a Sprint is an inviolable time-box (typically 1 to 4 weeks). The foundational rule is that a Sprint deadline is NEVER extended to allow developers to finish incomplete tasks.\n\nIf the Developers reach the end of the sprint with unfinished items:\n1. The Sprint Ends Promptly: The time-box terminates exactly on schedule. Incomplete items CANNOT be marked 'Done' and CANNOT be demonstrated in the Sprint Review as part of the Increment.\n2. Work Returns to Backlog: Incomplete items are returned to the Product Backlog. The team estimates remaining effort, and the Product Owner decides whether to prioritize them in the next sprint or defer them.\n\nWhy Extending Deadlines is Prohibited:\n- Hides Systemic Problems: Extending deadlines masks poor estimation, technical debt, or external bottlenecks, destroying process transparency.\n- Destroys Predictive Cadence: Unpredictable sprint lengths invalidate historical team velocity, making reliable release forecasting impossible.",
    "commonMistakes": "Suggesting that a sprint can be extended by a few days 'if everyone agrees'. Counting partial credit for 90% completed stories.",
    "selfCheckChecklist": [
      "Is 'NEVER extend a sprint' stated prominently?",
      "Is the return of unfinished work to the Product Backlog clearly explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Sprint Time-Boxing & Incomplete Work"
    }
  },
  {
    "id": "itpm-u5-qa-017",
    "unit": 5,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Compare Pure Waterfall, Waterfall with Feedback, and the Sashimi Model. Explain how each variation handles phase transitions, concurrency, and risk.",
    "examinerExpectation": "Student must describe all three models, compare their phase transition rules (strict sequential vs backward feedback loops vs overlapping concurrency), and assess their risk trade-offs.",
    "answerStructure": [
      "Pure Waterfall: Strict linear sequence; each phase freezes before next begins; zero concurrency; highest risk of late failure.",
      "Waterfall with Feedback: Sequential with backward loops to adjacent phase; localized defect correction; moderate risk.",
      "Sashimi Model: Overlapping phases (like slices of sashimi); high concurrency; shortens duration; risk of rework if upstream changes.",
      "Comparison Table/Summary across Duration, Concurrency, and Risk."
    ],
    "keywords": [
      "Pure Waterfall",
      "Waterfall with Feedback",
      "Sashimi Model",
      "Phase Overlap",
      "Concurrency",
      "Rework Risk",
      "Late Defect Discovery"
    ],
    "modelAnswer": "Plan-driven project management encompasses three key lifecycle variations with distinct phase transition and concurrency mechanisms:\n\n1. Pure Waterfall Model:\n- Mechanics: Enforces a strictly unidirectional sequence (Requirements -> Design -> Coding -> Testing -> Maintenance). A phase must achieve 100% completion and formal milestone sign-off before the next phase begins.\n- Concurrency: Zero concurrency; phases operate in total isolation.\n- Risk: Extremely high risk of late failure; requirements or design errors remain undetected until testing at the end of the schedule, where fixes are exponentially expensive.\n\n2. Waterfall with Feedback Model (Course Book Fig. 39):\n- Mechanics: Retains the general linear sequence but introduces formal backward feedback loops between immediately adjacent phases (e.g. testing -> coding, coding -> design).\n- Concurrency: Minimal concurrency, but acknowledges that downstream execution reveals upstream defects.\n- Risk: Moderate risk; feedback allows localized corrections, but broad architectural misalignments still incur significant delays.\n\n3. Sashimi Model (Course Book Fig. 40):\n- Mechanics: Named after overlapping slices of Japanese raw fish, adjacent phases deliberately overlap. Design begins while requirements are still being refined, and coding starts before design is fully frozen.\n- Concurrency: High phase concurrency; downstream specialists provide real-time feedback to upstream teams.\n- Risk: Significantly compresses overall schedule duration, but introduces the risk of rework: if upstream requirements fundamentally change, partially completed downstream code must be discarded.",
    "commonMistakes": "Confusing Waterfall with Feedback and Sashimi. Failing to explain the rework risk inherent in Sashimi's concurrency.",
    "selfCheckChecklist": [
      "Are all three models characterized accurately?",
      "Is the Sashimi raw-fish metaphor and overlapping structure explained?",
      "Are risk trade-offs contrasted across all three?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Waterfall Variations & Sashimi Model"
    }
  },
  {
    "id": "itpm-u5-qa-018",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Explain the architecture of the V-Model. Detail the horizontal 1:1 traceability relationships between its left-hand specification phases and right-hand testing phases.",
    "examinerExpectation": "Student must draw or describe the V-shape geometry (descending decomposition, vertex coding, ascending verification) and enumerate the four exact horizontal pairs linking design to test levels.",
    "answerStructure": [
      "Geometry: Left arm = Project Decomposition & Specification; Vertex = Implementation (Coding); Right arm = Integration & Verification.",
      "Horizontal Mapping 1: Requirements Analysis <-> Acceptance Testing.",
      "Horizontal Mapping 2: System Design <-> System Testing.",
      "Horizontal Mapping 3: Architecture Design <-> Integration Testing.",
      "Horizontal Mapping 4: Detailed Module Design <-> Unit Testing.",
      "Timing Advantage: Test planning and test case design occur on the left arm concurrently with specification, long before coding begins."
    ],
    "keywords": [
      "V-Model",
      "Decomposition",
      "Verification",
      "Validation",
      "Horizontal Traceability",
      "Acceptance Testing",
      "System Testing",
      "Integration Testing",
      "Unit Testing"
    ],
    "modelAnswer": "The V-Model (Course Book Fig. 41) is a plan-driven software lifecycle model that bends the linear waterfall into a V-shaped geometry to highlight the relationship between specification and verification:\n\n- Left Descending Arm (Decomposition & Specification): Breaks down the project from user concepts to detailed code specifications.\n- Vertex (Implementation): The physical writing and compilation of source code.\n- Right Ascending Arm (Integration & Verification): Systematically integrates and verifies the software from single units up to full operational acceptance.\n\nThe defining power of the V-Model lies in its horizontal 1:1 traceability links between each specification phase and its corresponding testing phase:\n\n1. Requirements Analysis <\u2014> Acceptance Testing: Top-level business and user requirements directly define the acceptance criteria used during final acceptance testing with the client.\n2. System Design <\u2014> System Testing: Overall system architecture and functional specifications determine the comprehensive end-to-end system test plans.\n3. Architecture Design <\u2014> Integration Testing: High-level subsystem boundaries and component interface designs dictate the integration test suites verifying data exchange between components.\n4. Detailed Module Design <\u2014> Unit Testing: Low-level algorithms, class logic, and data structures specify the individual unit tests that verify isolated code routines.\n\nCrucially, test design occurs early: acceptance and system test cases are written on the left side during requirements and design, long before coding begins at the vertex.",
    "commonMistakes": "Mapping Unit Testing to Requirements Analysis (inverting the levels). Believing test design happens on the right side (test execution happens on the right; test planning happens on the left).",
    "selfCheckChecklist": [
      "Are all 4 horizontal pairs mapped correctly?",
      "Is the distinction between early test planning and late test execution emphasized?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "V-Model Traceability & Testing Levels"
    }
  },
  {
    "id": "itpm-u5-qa-019",
    "unit": 5,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Differentiate between 'Verification' and 'Validation' in software quality management. Illustrate how both are represented in the V-Model.",
    "examinerExpectation": "Student must cite Boehm's questions ('built right' vs 'built right thing'), contrast technical conformance with fitness for user purpose, and map them to V-Model test levels.",
    "answerStructure": [
      "Quote Boehm's Questions: Verification = 'Did we build the system right?'; Validation = 'Did we build the right system?'.",
      "Define Verification: Technical conformance to specifications, static checking, unit and integration tests.",
      "Define Validation: Operational fitness for purpose, end-user dynamic evaluation, acceptance testing.",
      "Mapping to V-Model: Lower levels (Unit, Integration, System) focus on Verification; Top level (Acceptance) focuses on Validation."
    ],
    "keywords": [
      "Verification",
      "Validation",
      "Built Right",
      "Right System",
      "Boehm",
      "Conformance",
      "Fitness for Purpose",
      "Acceptance Testing"
    ],
    "modelAnswer": "Barry Boehm formulated the classic distinction between Verification and Validation, which forms the core of software quality assurance in the V-Model:\n\n1. Verification ('Did we build the system right?'):\n- Definition: The process of evaluating software artifacts to determine whether they strictly adhere to the technical specifications, architectural models, and standards established in the preceding phase.\n- Focus: Conformance to specifications, error-free logic, interface data formats, and internal quality.\n- V-Model Representation: Executed during Unit Testing (verifying code against detailed design) and Integration Testing (verifying interfaces against architectural design).\n\n2. Validation ('Did we build the right system?'):\n- Definition: The process of evaluating the operational software at the end of development to ensure that it fulfills its intended business purpose and satisfies the real-world operational needs of the user.\n- Focus: User satisfaction, business workflow compatibility, and fitness for intended use.\n- V-Model Representation: Executed during Acceptance Testing, where actual end users validate the completed system against their original business requirements.\n\nA system can pass verification completely (zero syntax or architectural bugs) while failing validation completely (building a useless tool that does not solve the user's business problem).",
    "commonMistakes": "Confusing the two terms or using them interchangeably. Failing to mention Boehm's guiding questions.",
    "selfCheckChecklist": [
      "Are Boehm's exact questions quoted?",
      "Is the possibility of passing verification while failing validation explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Verification vs Validation"
    }
  },
  {
    "id": "itpm-u5-qa-020",
    "unit": 5,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Provide a comprehensive decision framework for selecting between a Plan-Driven methodology (e.g. V-Model) and an Agile methodology (e.g. Scrum) for a small-to-medium IT project.",
    "examinerExpectation": "Student should synthesize selection criteria across requirement stability, safety/regulatory criticality, user availability, team experience, and contract type, explaining why neither methodology fits all scenarios.",
    "answerStructure": [
      "Intro: One-size-fits-all does not exist; methodology must match project characteristics.",
      "Criteria favoring Plan-Driven (V-Model/Waterfall): Stable/known requirements, safety-critical systems (medical, aerospace), strict regulatory audits, fixed-price contracts.",
      "Criteria favoring Agile (Scrum): High requirement volatility, innovative/novel products, high customer availability, fast time-to-market pressure.",
      "Hybrid Pragmatism: Combining predictive architectural baselining with agile sprint execution."
    ],
    "keywords": [
      "Methodology Selection",
      "Plan-Driven",
      "Agile",
      "Requirement Stability",
      "Regulatory Compliance",
      "Safety-Critical",
      "Hybrid Approach",
      "Customer Availability"
    ],
    "modelAnswer": "No single project management methodology is universally superior. For small and medium IT projects, the selection between a Plan-Driven approach (like the V-Model) and an Agile approach (like Scrum) depends on a rigorous analysis of project dimensions:\n\n1. Select Plan-Driven (Predictive / V-Model) When:\n- Requirements Stability: Requirements are fully understood, stable, and unlikely to change during development.\n- System Criticality & Compliance: The software is safety-critical (e.g., medical devices, automotive controls, avionics) or subject to strict statutory audits that demand comprehensive documentation and 1:1 verification traceability.\n- Contractual Structure: The project operates under a rigid, fixed-price, fixed-scope commercial contract with external legal liability.\n- Stakeholder Availability: Customer stakeholders are unavailable for daily collaboration and prefer formal milestone sign-offs.\n\n2. Select Agile (Scrum / Adaptive) When:\n- Requirement Uncertainty: Requirements are novel, vague, exploratory, or expected to evolve rapidly as the market changes.\n- Speed to Market: Delivering early, working increments to secure customer feedback or capture competitive market share is paramount.\n- Stakeholder Availability: An empowered business representative (Product Owner) is available daily to answer questions and steer priorities.\n- Culture & Autonomy: The organization supports self-organizing teams, psychological safety, and blameless retrospectives.\n\nIn many modern IT projects, organizations successfully adopt a Hybrid model: utilizing plan-driven predictive governance to establish high-level feasibility and architecture, followed by agile Scrum sprints to execute software development iteratively.",
    "commonMistakes": "Claiming Agile is always modern and superior while Plan-driven is obsolete. Overlooking regulatory compliance and safety-criticality constraints.",
    "selfCheckChecklist": [
      "Are both methodologies given balanced, scenario-based evaluation?",
      "Are regulatory and safety-critical domains explicitly tied to plan-driven models?"
    ],
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Methodology Selection Framework"
    }
  }
];
