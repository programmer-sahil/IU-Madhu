import json

# =========================================================================
# 1. QA.TS (20 Q&As)
# =========================================================================
qa_list = [
    {
        "id": "itpm-u5-qa-001",
        "unit": 5,
        "marks": 8,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 15,
        "question": "Explain the four core phases of the Rational Unified Process (RUP) and describe the primary milestone gate that terminates each phase.",
        "examinerExpectation": "Student must list all 4 phases in exact sequential order (Inception, Elaboration, Construction, Transition), explain the core technical focus of each, and identify the formal milestone gate concluding each phase.",
        "answerStructure": [
            "Introduction: Define RUP as an iterative, architecture-centric, use-case driven process framework.",
            "Phase 1: Inception - Scope, business case, initial feasibility, terminating in Lifecycle Objectives (LCO) milestone.",
            "Phase 2: Elaboration - Architectural baseline, critical use cases, risk mitigation, terminating in Lifecycle Architecture (LCA) milestone.",
            "Phase 3: Construction - Bulk coding, component development, feature completion, terminating in Initial Operational Capability (IOC) milestone.",
            "Phase 4: Transition - Rollout, beta testing, user training, operational handover, terminating in Product Release (PR) milestone.",
            "Summary: Note the sequential gates ensure major architectural risks are solved in Elaboration before large capital expenditure in Construction."
        ],
        "keywords": ["Inception", "Elaboration", "Construction", "Transition", "Lifecycle Objectives", "Lifecycle Architecture", "Initial Operational Capability", "Product Release", "Architectural Baseline"],
        "modelAnswer": "The Rational Unified Process (RUP) organizes software development into four sequential phases, each concluding with a distinct milestone gate:\n\n1. Inception Phase: Focuses on establishing the business case, project scope boundaries, high-level requirements, and initial risk assessment. It concludes with the Lifecycle Objectives (LCO) Milestone, which verifies stakeholder consensus on scope and financial viability.\n\n2. Elaboration Phase: Focuses on analyzing the problem domain, establishing an executable architectural baseline, elaborating critical use cases, and mitigating high-exposure technical risks. It concludes with the Lifecycle Architecture (LCA) Milestone; passing this gate proves the architecture is sound and stable.\n\n3. Construction Phase: Represents the manufacturing phase where remaining components and application features are developed, integrated, and thoroughly tested. It concludes with the Initial Operational Capability (IOC) Milestone, indicating a functional beta product is ready for user deployment.\n\n4. Transition Phase: Delivers the software into the live user environment, encompassing beta testing, defect fixing, user training, data migration, and operational handover. It concludes with the Product Release (PR) Milestone, confirming the system meets user acceptance criteria and business goals.",
        "commonMistakes": "Confusing Elaboration with Construction (thinking coding happens only in Construction, or architecture is decided in Inception). Omitting the formal milestone names (LCO, LCA, IOC, PR).",
        "selfCheckChecklist": [
            "Are all 4 phases listed in exact order?",
            "Is the architectural baseline correctly attributed to Elaboration?",
            "Are all 4 formal milestone gates named correctly?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "RUP Core Phases & Milestones"}
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
        "keywords": ["Disciplines", "Hump Chart", "Workload Distribution", "Business Modeling", "Requirements", "Implementation", "Test", "Concurrent Execution"],
        "modelAnswer": "In RUP, a 'discipline' (workflow) is a collection of related activities and roles directed toward producing a specific category of software artifacts. RUP defines six core engineering disciplines (Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment) and three supporting disciplines (Configuration & Change Management, Project Management, Environment).\n\nThe classic RUP 'Hump Chart' visually plots project phases along the horizontal axis and disciplines along the vertical axis. It demonstrates two fundamental principles:\n1. Disciplines are NOT sequential waterfall silos; every discipline is active across all four phases to some degree (e.g., testing and implementation occur during Elaboration).\n2. Workload intensity shifts dynamically over time: Requirements and Business Modeling peak during Inception and Elaboration; Implementation and Testing peak during Construction; Deployment peaks during Transition.",
        "commonMistakes": "Confusing disciplines with phases (treating disciplines as sequential time stages). Thinking testing only occurs during Transition.",
        "selfCheckChecklist": [
            "Are all 6 core engineering disciplines named?",
            "Is the hump chart explained as showing shifting workload peaks rather than single-phase silos?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "RUP Disciplines & Hump Chart"}
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
        "keywords": ["Throw-away Prototyping", "Evolutionary Prototyping", "Requirements Clarification", "Architectural Rigor", "Non-functional Requirements", "Scalability", "Security Hardening"],
        "modelAnswer": "Prototyping is an essential risk-mitigation technique in software engineering, manifesting in two distinct strategies:\n\n1. Throw-away Prototyping: Constructs a quick, rudimentary model strictly to clarify ambiguous user requirements or test technical feasibility. Once the required learning is achieved, the prototype is discarded. Speed is prioritized over architectural robustness, error handling, and code quality.\n\n2. Evolutionary Prototyping: Begins with a solid, well-architected core implementing verified initial requirements. This prototype is iteratively extended, refactored, and tested across successive cycles until it evolves directly into the final operational system. It requires production-level engineering discipline from the very first line of code.\n\nThe course book explicitly warns that 'a prototype is NOT production software' because exploratory prototypes are built to prove concepts, not run businesses. They invariably omit vital non-functional quality attributes: robust exception handling, concurrency management, encryption, defensive security hardening, database normalization, and scalability under load. Yielding to stakeholder pressure to deploy a prototype straight into production introduces severe operational instability, vulnerability, and technical debt.",
        "commonMistakes": "Believing a throw-away prototype can be patched into production. Failing to mention non-functional quality attributes (security, scalability, exception handling).",
        "selfCheckChecklist": [
            "Are both prototyping types defined accurately?",
            "Is the fate of throw-away code (discarded) clearly stated?",
            "Are at least 3 non-functional reasons provided for why prototypes are not production systems?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Prototyping Strategies"}
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
        "keywords": ["Production Phase", "Disposal Phase", "Post-Transition", "Decommissioning", "Data Archiving", "System Maintenance", "Operational Monitoring"],
        "modelAnswer": "Extended Unified Process frameworks incorporate two optional post-transition lifecycle phases that address the ongoing reality of software systems:\n\n1. Production Phase: Commences once the software is deployed and handed over to live operations. Its primary objectives include monitoring live performance, providing continuous end-user technical support, diagnosing operational defects, deploying bug patches, and conducting routine maintenance updates to keep the system aligned with operating system and environmental changes.\n\n2. Disposal Phase: Represents the final stage when a software system reaches the end of its useful economic or technical life. Its activities include systematic system retirement, migrating active customer data to a replacement platform, archiving historical transaction databases to meet statutory audit requirements, and securely decommissioning physical hardware and hosting infrastructure.",
        "commonMistakes": "Assuming RUP stops at Transition. Omitting data archiving and migration from the Disposal phase.",
        "selfCheckChecklist": [
            "Are both Production and Disposal phases named?",
            "Is Disposal described as planned retirement and data migration?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "RUP Optional Lifecycle Phases"}
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
        "keywords": ["Heavyweight", "Bureaucracy", "IBM Rational Tools", "Tooling Dependency", "UML Overhead", "Lightweight Agile"],
        "modelAnswer": "Although RUP introduced groundbreaking iterative principles, several factors led to its declining industry adoption in favor of lightweight agile frameworks:\n\n1. Perceived Heaviness and Bureaucracy: RUP was often applied as a rigid, heavyweight process with an overwhelming volume of roles, disciplines, workflows, and template artifacts, creating administrative friction for small and medium teams.\n\n2. Excessive Documentation and Modeling: RUP's heavy emphasis on exhaustive visual modeling with UML and formal specifications often diverted developer hours away from producing working, releasable software.\n\n3. Commercial Tool Lock-In: Practical adoption of RUP was tightly coupled to IBM Rational's proprietary and expensive software ecosystem (e.g., Rational Rose, ClearCase, RequisitePro), making it cost-prohibitive and complex to maintain.\n\nAs customer requirements demanded faster time-to-market, lightweight frameworks like Scrum and XP gained dominance by offering bare-minimum ceremony and direct focus on working software.",
        "commonMistakes": "Claiming RUP was a waterfall model (it was explicitly iterative). Failing to mention the IBM Rational tooling dependency.",
        "selfCheckChecklist": [
            "Is RUP's iterative nature acknowledged while explaining its administrative heaviness?",
            "Is the IBM Rational tool suite mentioned?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "RUP Decline & Tool Dependency"}
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
        "keywords": ["Individuals and interactions", "Working software", "Customer collaboration", "Responding to change", "Snowbird Utah", "Left vs Right", "Balancing Statement"],
        "modelAnswer": "In February 2001, seventeen software leaders gathered in Snowbird, Utah and published the Agile Manifesto, articulating four foundational values:\n\n1. Individuals and interactions over processes and tools: Human talent, collaboration, and high-bandwidth communication drive project success far more effectively than rigid adherence to automated tools or bureaucratic procedures.\n\n2. Working software over comprehensive documentation: The primary, unambiguous proof of progress is functional, tested software. Documentation should be lean and purposeful rather than an exhaustive substitute for working code.\n\n3. Customer collaboration over contract negotiation: Adversarial legalistic contract enforcement is replaced by an ongoing partnership where customer representatives actively guide product development daily.\n\n4. Responding to change over following a plan: Because software requirements evolve as users experience increments, teams must embrace change as a competitive advantage rather than blindly following an obsolete upfront plan.\n\nCrucially, the authors appended a balancing qualification: 'That is, while there is value in the items on the right, we value the items on the left more.' This confirms that agile does NOT eliminate processes, documentation, contracts, or planning; it simply prioritizes the human, adaptive, and working elements on the left.",
        "commonMistakes": "Stating that agile has 'no documentation' or 'no planning'. Reversing the values (putting right-hand items over left-hand items).",
        "selfCheckChecklist": [
            "Are all four values stated with exact left/right ordering?",
            "Is the qualifying sentence about the right-hand items clearly explained?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Manifesto Four Values"}
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
            "Quote Definition: 'Simplicity—the art of maximizing the amount of work not done—is essential.'",
            "Contrast with common misconception: Simplicity does not mean primitive or simplistic code.",
            "Mechanisms: Avoiding gold-plating, deferring speculative features (YAGNI), eliminating unnecessary documentation.",
            "Impact on Agility: Smaller codebases are easier to test, refactor, maintain, and adapt."
        ],
        "keywords": ["Simplicity", "Maximizing work not done", "Gold-plating", "YAGNI", "Technical Debt", "Principle 10"],
        "modelAnswer": "Principle 10 of the Agile Manifesto defines simplicity concisely: 'Simplicity—the art of maximizing the amount of work not done—is essential.'\n\nThis definition rejects the common misconception that simplicity means writing trivial or unsophisticated software. Instead, it embodies a rigorous engineering discipline:\n1. Eliminating Gold-Plating: Teams deliver exactly what satisfies user value today, actively resisting the temptation to build speculative, complex architectures for hypothetical future needs (the 'You Aren't Gonna Need It' / YAGNI principle).\n2. Lean Artifacts: Eliminates bureaucratic reports, unnecessary meetings, and unused software features that add maintenance drag without user benefit.\n3. Preserving Agility: Every line of unwritten code is a line that never needs debugging, testing, refactoring, or securing. Keeping the system minimal ensures the team can pivot rapidly when true requirements change.",
        "commonMistakes": "Defining simplicity as 'building easy apps' or 'cutting testing corners'. Failing to cite 'maximizing the amount of work not done'.",
        "selfCheckChecklist": [
            "Is the exact definition quoted verbatim?",
            "Is the connection between minimal codebase and rapid adaptability explained?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Principle 10: Simplicity"}
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
        "keywords": ["Self-Organizing", "Autonomous", "Cross-Functional", "Mutual Accountability", "Shared Ownership", "What vs How", "Cockburn & Highsmith"],
        "modelAnswer": "In agile software engineering, a self-organizing team is an autonomous, cross-functional group of professionals who manage their own work rather than taking task-by-task orders from a traditional command-and-control manager.\n\n1. Clear Authority Boundaries: Self-organization operates within explicit boundaries. External business management and the Product Owner define the 'WHAT'—the strategic vision, business priorities, and acceptance criteria in the Product Backlog. The team holds sole professional autonomy over the 'HOW'—estimating effort, designing technical architecture, breaking stories into tasks, and assigning work among themselves.\n\n2. Cross-Functionality: The team possesses all necessary competencies (analysis, coding, database design, testing, infrastructure) internally, eliminating hand-offs and waiting dependencies between separate departmental silos.\n\n3. High-Bandwidth Communication: As highlighted by Cockburn and Highsmith, continuous, informal, and face-to-face communication is the lifeblood of self-organizing teams, enabling real-time problem-solving.\n\n4. Mutual Accountability: Accountability is collective rather than individual. The team commits together to the Sprint Goal, and they succeed or fail together. If a tester is overwhelmed, developers assist with testing; individual finger-pointing is eliminated in favor of shared ownership.",
        "commonMistakes": "Assuming self-organizing teams have total anarchy with no boundaries (they are strictly bound by the Product Backlog and Sprint Goal). Thinking individuals retain separate specialist accountability.",
        "selfCheckChecklist": [
            "Is the 'What vs How' distinction made clearly?",
            "Is mutual/collective accountability explained without individual blame?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Self-Organizing Teams"}
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
        "keywords": ["Versioning", "Major", "Minor", "Build", "Revision", "Backward Compatibility", "4.2.5.9"],
        "modelAnswer": "Software release versioning tracks the evolution, compatibility, and maintenance state of a product using the standard four-part format 'major.minor.build.revision'. Each element communicates specific technical information:\n\n1. Major: Signifies fundamental architectural overhauls, significant platform updates, or major feature packages that may introduce breaking changes or deprecate older APIs.\n2. Minor: Denotes backward-compatible feature additions, enhancements, and functional improvements within the existing major architecture.\n3. Build: Identifies the internal automated compilation or assembly sequence number generated by continuous integration systems.\n4. Revision: Indicates minor bug fixes, maintenance patches, security updates, or localized defect resolutions that alter no functionality.\n\nApplying this to the course book's explicit example '4.2.5.9':\n- '4' indicates the fourth major release of the software;\n- '2' indicates the second minor feature release within major version 4;\n- '5' indicates the fifth compilation build of that minor release;\n- '9' indicates the ninth maintenance revision/bugfix applied to build 5.",
        "commonMistakes": "Swapping the order of 'build' and 'revision'. Inverting major and minor meanings.",
        "selfCheckChecklist": [
            "Are all 4 terms in correct sequential order?",
            "Is the example 4.2.5.9 deconstructed accurately matching the course book?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Software Versioning Scheme"}
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
        "keywords": ["Empirical Process Control", "Transparency", "Inspection", "Adaptation", "Definition of Done", "Artifacts", "Deviations"],
        "modelAnswer": "Scrum rejects rigid predictive planning in favor of Empirical Process Control, which asserts that in complex, uncertain environments, reliable decisions must be based on observed evidence and real-world experimentation. It is upheld by three essential pillars:\n\n1. Transparency: Significant aspects of the process, progress, and deliverables must be clearly visible to all stakeholders and developers. Transparency requires a common language and shared standard of understanding—most notably the Definition of Done (DoD). If developers call an item 'done' when it has not been tested, transparency is destroyed and stakeholders are misled.\n\n2. Inspection: Scrum artifacts (Product Backlog, Sprint Backlog, Increment) and progress toward agreed sprint goals must be inspected frequently to detect undesirable variances or quality degradation. However, inspections must be structured (through formal Scrum events) so they do not disrupt development flow.\n\n3. Adaptation: If an inspection reveals that one or more aspects of the process or product deviate outside acceptable tolerances, the process, materials, or plans must be adjusted immediately to prevent further compounding errors.\n\nThese pillars form a continuous feedback loop: without transparency, inspection evaluates falsehoods; without inspection, problems remain hidden; without adaptation, inspection is a useless academic exercise.",
        "commonMistakes": "Confusing the 3 pillars with the 5 values. Failing to emphasize that adaptation must occur promptly.",
        "selfCheckChecklist": [
            "Are Transparency, Inspection, and Adaptation all thoroughly defined?",
            "Is the role of shared standards (like DoD) in Transparency explained?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum Empirical Pillars"}
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
        "keywords": ["No Project Manager", "Product Owner", "Scrum Master", "Developers", "Decentralized Governance", "Impediments", "Backlog Prioritization"],
        "modelAnswer": "Scrum deliberately eliminates the traditional single 'Project Manager' role. In traditional management, one person simultaneously controls scope, schedule, budget, team assignments, and process compliance—creating communication bottlenecks and conflicts of interest. Scrum redistributes these responsibilities across three distinct, balanced roles:\n\n1. Product Owner (Business & Value Governance): Inherits traditional PM scope, budget, and business justification responsibilities. The PO defines the product vision, manages stakeholder expectations, evaluates ROI, and holds sole authority over the prioritization and acceptance of Product Backlog items.\n\n2. Scrum Master (Process & Team Coaching): Inherits traditional PM facilitation and risk-removal responsibilities, but acts as a servant-leader rather than a boss. The SM enforces Scrum rules, facilitates events, protects the team from external distractions, and actively resolves organizational and technical impediments.\n\n3. Developers (Execution & Schedule Governance): Inherits traditional PM task allocation, scheduling, and technical governance responsibilities. As a self-organizing group (typically 5 to 9 members), the Developers estimate task effort, decide how much work to pull into a Sprint, design technical architecture, assign tasks among themselves, and guarantee quality through the Definition of Done.",
        "commonMistakes": "Claiming that the Scrum Master is just a modern title for Project Manager. Overlooking the Developers' role in managing their own schedule and task distribution.",
        "selfCheckChecklist": [
            "Is the complete absence of a traditional PM stated explicitly?",
            "Are responsibilities mapped accurately to PO, SM, and Developers?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Traditional PM Distribution in Scrum"}
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
        "keywords": ["Product Owner", "Scrum Master", "Conflict of Interest", "Anti-Pattern", "Sustainable Pace", "What vs How", "Role Combining"],
        "modelAnswer": "The Product Owner and Scrum Master hold fundamentally distinct and intentionally balanced accountabilities in Scrum:\n\n- The Product Owner represents the voice of the business and customer. The PO is externally facing, ROI-driven, and focused on WHAT the team builds, constantly pushing to maximize the business value delivered in each sprint.\n- The Scrum Master represents the process and the team. The SM is internally facing, people-oriented, and focused on HOW the team works, serving as a coach who protects the team from external pressure, ensures a sustainable development pace, and removes blockers.\n\nCombining the Product Owner and Scrum Master roles into a single individual is a catastrophic Scrum anti-pattern because it creates an irreconcilable conflict of interest:\n1. Destruction of Sustainable Pace: When scope pressure mounts, an individual acting as PO will naturally demand more features, while their duty as SM to protect the team from overload is compromised.\n2. Erosion of Quality: A combined PO/SM is tempted to waive criteria in the Definition of Done (e.g. skipping integration tests or documentation) to meet feature delivery deadlines.\n3. Loss of Safety: Developers cannot confide blockers or process grievances to a Scrum Master who also evaluates commercial priorities and feature delivery.",
        "commonMistakes": "Failing to explain the specific conflict of interest. Assuming combining roles is acceptable in small companies.",
        "selfCheckChecklist": [
            "Are both roles sharply contrasted?",
            "Are at least two distinct conflicts of interest detailed?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "PO vs SM & Anti-Patterns"}
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
        "keywords": ["Product Backlog", "Sprint Backlog", "Increment", "Definition of Done", "DoD", "Potentially Releasable", "Quality Gate"],
        "modelAnswer": "Scrum defines three formal artifacts that provide full transparency across the development lifecycle:\n\n1. Product Backlog: An emergent, ordered list of everything that might be needed in the product (features, functions, bug fixes, enhancements). It is dynamic, never complete, and exclusively managed and prioritized by the Product Owner.\n\n2. Sprint Backlog: The set of Product Backlog items selected for the current Sprint, combined with the detailed technical plan and task breakdown for delivering them. It is owned solely by the Developers, and only they may alter its tasks during the sprint.\n\n3. The Increment: The usable, integrated sum of all Product Backlog items completed during the current Sprint, added to the value of all previous increments. At the end of the Sprint, the Increment must be in a potentially releasable condition.\n\nThe Definition of Done (DoD) is the formal quality contract governing the Increment. It establishes an unambiguous checklist of technical criteria (e.g., unit test coverage >= 80%, peer code review passed, CI build green, documentation updated) that an item must satisfy. If a user story does not satisfy 100% of the DoD, it CANNOT be included in the Increment and CANNOT be demonstrated at the Sprint Review; it returns to the Product Backlog.",
        "commonMistakes": "Claiming the PO owns the Sprint Backlog (Developers own it). Believing partially completed items can be counted in the Increment.",
        "selfCheckChecklist": [
            "Are all 3 artifacts accurately defined with clear ownership?",
            "Is the DoD explicitly described as a strict gate for the Increment?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum Artifacts & Definition of Done"}
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
        "keywords": ["Daily Scrum", "15 minutes", "Three Questions", "Impediments", "Anti-Patterns", "Status Meeting", "Time-Box"],
        "modelAnswer": "The Daily Scrum is a 15-minute time-boxed daily event designed strictly for the Developers to inspect progress toward the Sprint Goal and synchronize their tactical plan for the next 24 hours.\n\nIts traditional agenda centers on three concise questions answered by each developer:\n1. What did I do yesterday that helped the Development Team meet the Sprint Goal?\n2. What will I do today to help the Development Team meet the Sprint Goal?\n3. Do I see any impediment that prevents me or the Development Team from meeting the Sprint Goal?\n\nCommon anti-patterns that ruin its effectiveness include:\n- Management Status Report: Developers report to the Scrum Master or PM instead of conversing with their peers.\n- Problem-Solving Rabbit Holes: Teams begin debating complex architectural algorithms during the standup; technical discussions should be deferred until immediately after the 15-minute meeting.\n- Time-Box Violation: Allowing the meeting to drag on for 30 to 60 minutes, causing developer fatigue.",
        "commonMistakes": "Thinking the Daily Scrum is for the Product Owner or PM to track attendance. Forgetting the strict 15-minute time-box.",
        "selfCheckChecklist": [
            "Is the 15-minute time-box stated?",
            "Are the three classic questions listed?",
            "Are realistic anti-patterns identified?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Daily Scrum Mechanics & Anti-Patterns"}
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
        "keywords": ["Sprint Review", "Sprint Retrospective", "Product Focus", "Process Focus", "Stakeholders", "Psychological Safety", "Continuous Improvement"],
        "modelAnswer": "Although held consecutively at the conclusion of a Sprint, the Sprint Review and Sprint Retrospective serve two entirely different inspection-and-adaptation functions:\n\n1. Sprint Review (Product & Stakeholder Focus):\n- Objective: To inspect the newly delivered Increment of working software and adapt the Product Backlog based on real-world stakeholder feedback.\n- Participants: The Scrum Team (PO, SM, Developers) AND key external stakeholders, customers, and business sponsors.\n- Focus: Working software demo, market trends, budget remaining, and upcoming release plans.\n- Outcome: An updated, re-prioritized Product Backlog reflecting customer reactions to the demonstrated increment.\n\n2. Sprint Retrospective (Team & Process Focus):\n- Objective: To inspect how the last Sprint went with respect to people, relationships, engineering processes, and tools, and identify concrete ways to improve.\n- Participants: Strictly the internal Scrum Team (Developers, Scrum Master, Product Owner). External stakeholders are excluded to preserve psychological safety.\n- Focus: Internal collaboration, communication bottlenecks, DoD effectiveness, and developer tools.\n- Outcome: A tangible list of actionable process improvements prioritized for implementation in the immediate next sprint.",
        "commonMistakes": "Allowing external stakeholders into the Retrospective (destroys psychological safety). Believing the Retrospective is for bug fixing.",
        "selfCheckChecklist": [
            "Is the Product vs Process distinction emphasized?",
            "Is the participant list for each event accurately differentiated?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Sprint Review vs Sprint Retrospective"}
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
        "keywords": ["Time-Box Inviolability", "Never Extend", "Incomplete Work", "Product Backlog Return", "Velocity Distortion", "Transparency"],
        "modelAnswer": "In Scrum, the duration of a Sprint is an inviolable time-box (typically 1 to 4 weeks). The foundational rule is that a Sprint deadline is NEVER extended to allow developers to finish incomplete tasks.\n\nIf the Developers reach the end of the sprint with unfinished items:\n1. The Sprint Ends Promptly: The time-box terminates exactly on schedule. Incomplete items CANNOT be marked 'Done' and CANNOT be demonstrated in the Sprint Review as part of the Increment.\n2. Work Returns to Backlog: Incomplete items are returned to the Product Backlog. The team estimates remaining effort, and the Product Owner decides whether to prioritize them in the next sprint or defer them.\n\nWhy Extending Deadlines is Prohibited:\n- Hides Systemic Problems: Extending deadlines masks poor estimation, technical debt, or external bottlenecks, destroying process transparency.\n- Destroys Predictive Cadence: Unpredictable sprint lengths invalidate historical team velocity, making reliable release forecasting impossible.",
        "commonMistakes": "Suggesting that a sprint can be extended by a few days 'if everyone agrees'. Counting partial credit for 90% completed stories.",
        "selfCheckChecklist": [
            "Is 'NEVER extend a sprint' stated prominently?",
            "Is the return of unfinished work to the Product Backlog clearly explained?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Sprint Time-Boxing & Incomplete Work"}
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
        "keywords": ["Pure Waterfall", "Waterfall with Feedback", "Sashimi Model", "Phase Overlap", "Concurrency", "Rework Risk", "Late Defect Discovery"],
        "modelAnswer": "Plan-driven project management encompasses three key lifecycle variations with distinct phase transition and concurrency mechanisms:\n\n1. Pure Waterfall Model:\n- Mechanics: Enforces a strictly unidirectional sequence (Requirements -> Design -> Coding -> Testing -> Maintenance). A phase must achieve 100% completion and formal milestone sign-off before the next phase begins.\n- Concurrency: Zero concurrency; phases operate in total isolation.\n- Risk: Extremely high risk of late failure; requirements or design errors remain undetected until testing at the end of the schedule, where fixes are exponentially expensive.\n\n2. Waterfall with Feedback Model (Course Book Fig. 39):\n- Mechanics: Retains the general linear sequence but introduces formal backward feedback loops between immediately adjacent phases (e.g. testing -> coding, coding -> design).\n- Concurrency: Minimal concurrency, but acknowledges that downstream execution reveals upstream defects.\n- Risk: Moderate risk; feedback allows localized corrections, but broad architectural misalignments still incur significant delays.\n\n3. Sashimi Model (Course Book Fig. 40):\n- Mechanics: Named after overlapping slices of Japanese raw fish, adjacent phases deliberately overlap. Design begins while requirements are still being refined, and coding starts before design is fully frozen.\n- Concurrency: High phase concurrency; downstream specialists provide real-time feedback to upstream teams.\n- Risk: Significantly compresses overall schedule duration, but introduces the risk of rework: if upstream requirements fundamentally change, partially completed downstream code must be discarded.",
        "commonMistakes": "Confusing Waterfall with Feedback and Sashimi. Failing to explain the rework risk inherent in Sashimi's concurrency.",
        "selfCheckChecklist": [
            "Are all three models characterized accurately?",
            "Is the Sashimi raw-fish metaphor and overlapping structure explained?",
            "Are risk trade-offs contrasted across all three?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Waterfall Variations & Sashimi Model"}
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
        "keywords": ["V-Model", "Decomposition", "Verification", "Validation", "Horizontal Traceability", "Acceptance Testing", "System Testing", "Integration Testing", "Unit Testing"],
        "modelAnswer": "The V-Model (Course Book Fig. 41) is a plan-driven software lifecycle model that bends the linear waterfall into a V-shaped geometry to highlight the relationship between specification and verification:\n\n- Left Descending Arm (Decomposition & Specification): Breaks down the project from user concepts to detailed code specifications.\n- Vertex (Implementation): The physical writing and compilation of source code.\n- Right Ascending Arm (Integration & Verification): Systematically integrates and verifies the software from single units up to full operational acceptance.\n\nThe defining power of the V-Model lies in its horizontal 1:1 traceability links between each specification phase and its corresponding testing phase:\n\n1. Requirements Analysis <—> Acceptance Testing: Top-level business and user requirements directly define the acceptance criteria used during final acceptance testing with the client.\n2. System Design <—> System Testing: Overall system architecture and functional specifications determine the comprehensive end-to-end system test plans.\n3. Architecture Design <—> Integration Testing: High-level subsystem boundaries and component interface designs dictate the integration test suites verifying data exchange between components.\n4. Detailed Module Design <—> Unit Testing: Low-level algorithms, class logic, and data structures specify the individual unit tests that verify isolated code routines.\n\nCrucially, test design occurs early: acceptance and system test cases are written on the left side during requirements and design, long before coding begins at the vertex.",
        "commonMistakes": "Mapping Unit Testing to Requirements Analysis (inverting the levels). Believing test design happens on the right side (test execution happens on the right; test planning happens on the left).",
        "selfCheckChecklist": [
            "Are all 4 horizontal pairs mapped correctly?",
            "Is the distinction between early test planning and late test execution emphasized?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "V-Model Traceability & Testing Levels"}
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
        "keywords": ["Verification", "Validation", "Built Right", "Right System", "Boehm", "Conformance", "Fitness for Purpose", "Acceptance Testing"],
        "modelAnswer": "Barry Boehm formulated the classic distinction between Verification and Validation, which forms the core of software quality assurance in the V-Model:\n\n1. Verification ('Did we build the system right?'):\n- Definition: The process of evaluating software artifacts to determine whether they strictly adhere to the technical specifications, architectural models, and standards established in the preceding phase.\n- Focus: Conformance to specifications, error-free logic, interface data formats, and internal quality.\n- V-Model Representation: Executed during Unit Testing (verifying code against detailed design) and Integration Testing (verifying interfaces against architectural design).\n\n2. Validation ('Did we build the right system?'):\n- Definition: The process of evaluating the operational software at the end of development to ensure that it fulfills its intended business purpose and satisfies the real-world operational needs of the user.\n- Focus: User satisfaction, business workflow compatibility, and fitness for intended use.\n- V-Model Representation: Executed during Acceptance Testing, where actual end users validate the completed system against their original business requirements.\n\nA system can pass verification completely (zero syntax or architectural bugs) while failing validation completely (building a useless tool that does not solve the user's business problem).",
        "commonMistakes": "Confusing the two terms or using them interchangeably. Failing to mention Boehm's guiding questions.",
        "selfCheckChecklist": [
            "Are Boehm's exact questions quoted?",
            "Is the possibility of passing verification while failing validation explained?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Verification vs Validation"}
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
        "keywords": ["Methodology Selection", "Plan-Driven", "Agile", "Requirement Stability", "Regulatory Compliance", "Safety-Critical", "Hybrid Approach", "Customer Availability"],
        "modelAnswer": "No single project management methodology is universally superior. For small and medium IT projects, the selection between a Plan-Driven approach (like the V-Model) and an Agile approach (like Scrum) depends on a rigorous analysis of project dimensions:\n\n1. Select Plan-Driven (Predictive / V-Model) When:\n- Requirements Stability: Requirements are fully understood, stable, and unlikely to change during development.\n- System Criticality & Compliance: The software is safety-critical (e.g., medical devices, automotive controls, avionics) or subject to strict statutory audits that demand comprehensive documentation and 1:1 verification traceability.\n- Contractual Structure: The project operates under a rigid, fixed-price, fixed-scope commercial contract with external legal liability.\n- Stakeholder Availability: Customer stakeholders are unavailable for daily collaboration and prefer formal milestone sign-offs.\n\n2. Select Agile (Scrum / Adaptive) When:\n- Requirement Uncertainty: Requirements are novel, vague, exploratory, or expected to evolve rapidly as the market changes.\n- Speed to Market: Delivering early, working increments to secure customer feedback or capture competitive market share is paramount.\n- Stakeholder Availability: An empowered business representative (Product Owner) is available daily to answer questions and steer priorities.\n- Culture & Autonomy: The organization supports self-organizing teams, psychological safety, and blameless retrospectives.\n\nIn many modern IT projects, organizations successfully adopt a Hybrid model: utilizing plan-driven predictive governance to establish high-level feasibility and architecture, followed by agile Scrum sprints to execute software development iteratively.",
        "commonMistakes": "Claiming Agile is always modern and superior while Plan-driven is obsolete. Overlooking regulatory compliance and safety-criticality constraints.",
        "selfCheckChecklist": [
            "Are both methodologies given balanced, scenario-based evaluation?",
            "Are regulatory and safety-critical domains explicitly tied to plan-driven models?"
        ],
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Methodology Selection Framework"}
    }
]

# Write QA
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/qa.ts', 'w') as f:
    f.write(f'import {{ DescriptiveQuestion }} from "../../../../types";\n\nexport const unit5ImportantQuestions: DescriptiveQuestion[] = {json.dumps(qa_list, indent=2)};\n')
print(f"Generated unit-5/qa.ts ({len(qa_list)} Q&As)")

# =========================================================================
# 2. COMPARISONS.TS (15 Comparisons)
# =========================================================================
comparisons_list = [
    {
        "conceptA": "RUP Inception Phase",
        "conceptB": "RUP Elaboration Phase",
        "comparisonPoints": [
            {"criterion": "Primary Objective", "detailA": "Establish business case, scope boundaries, and initial feasibility", "detailB": "Establish executable architectural baseline and mitigate high risks"},
            {"criterion": "Milestone Gate", "detailA": "Lifecycle Objectives (LCO) milestone", "detailB": "Lifecycle Architecture (LCA) milestone"},
            {"criterion": "Requirements Depth", "detailA": "High-level use cases and vision statement", "detailB": "Detailed specification of critical architectural use cases"},
            {"criterion": "Resource Allocation", "detailA": "Small team, minimal budget expenditure", "detailB": "Moderate team size, focused engineering spikes"}
        ]
    },
    {
        "conceptA": "RUP Elaboration Phase",
        "conceptB": "RUP Construction Phase",
        "comparisonPoints": [
            {"criterion": "Core Focus", "detailA": "Architectural design, risk mitigation, and technical feasibility", "detailB": "Bulk component coding, feature implementation, and testing"},
            {"criterion": "Milestone Gate", "detailA": "Lifecycle Architecture (LCA) milestone", "detailB": "Initial Operational Capability (IOC) milestone"},
            {"criterion": "Resource Expenditure", "detailA": "Moderate expenditure (~15-20% of effort)", "detailB": "Largest expenditure of budget and developer hours (~50-60%)"},
            {"criterion": "Deliverable", "detailA": "Proven architectural baseline with core use cases", "detailB": "Feature-complete beta software ready for user transition"}
        ]
    },
    {
        "conceptA": "RUP Construction Phase",
        "conceptB": "RUP Transition Phase",
        "comparisonPoints": [
            {"criterion": "Operating Environment", "detailA": "Internal developer and test lab environments", "detailB": "Live customer or staging user environment"},
            {"criterion": "Primary Activities", "detailA": "Building components, writing unit tests, feature integration", "detailB": "Beta testing, user training, data conversion, and deployment"},
            {"criterion": "Milestone Gate", "detailA": "Initial Operational Capability (IOC) milestone", "detailB": "Product Release (PR) milestone"},
            {"criterion": "Primary User Role", "detailA": "Limited; occasional review of internal builds", "detailB": "Extensive; active beta testing and operational acceptance"}
        ]
    },
    {
        "conceptA": "Throw-away Prototyping",
        "conceptB": "Evolutionary Prototyping",
        "comparisonPoints": [
            {"criterion": "Intended Fate of Code", "detailA": "Discarded completely after learning is achieved", "detailB": "Preserved, refactored, and evolved into final production software"},
            {"criterion": "Primary Goal", "detailA": "Clarify ambiguous requirements or test feasibility", "detailB": "Incrementally build and deliver working product slices"},
            {"criterion": "Code Quality Standards", "detailA": "Quick, rudimentary; ignores error handling and security", "detailB": "Production-grade from day one; high architectural rigor"},
            {"criterion": "Development Speed", "detailA": "Extremely fast initial build", "detailB": "Deliberate, disciplined incremental development"}
        ]
    },
    {
        "conceptA": "Prototype",
        "conceptB": "Production Software",
        "comparisonPoints": [
            {"criterion": "Primary Purpose", "detailA": "Demonstrate concepts and validate user preferences", "detailB": "Reliably run live business operations under continuous load"},
            {"criterion": "Non-Functional Attributes", "detailA": "Omitted (poor concurrency, minimal security, limited error handling)", "detailB": "Hardened (robust security, scalability, disaster recovery, concurrency)"},
            {"criterion": "Data Integrity", "detailA": "Dummy mock data, unvalidated inputs", "detailB": "Strict transactional integrity, ACID compliance, encrypted storage"},
            {"criterion": "Documentation & Auditing", "detailA": "Minimal or non-existent", "detailB": "Comprehensive operational manuals, audit logs, and compliance records"}
        ]
    },
    {
        "conceptA": "Agile Left-Hand Values",
        "conceptB": "Agile Right-Hand Items",
        "comparisonPoints": [
            {"criterion": "Agile Priority", "detailA": "Valued MORE (Primary drivers of agility and success)", "detailB": "Valued LESS (Still retain value, but secondary to left items)"},
            {"criterion": "Core Items", "detailA": "Individuals & interactions, Working software, Customer collaboration, Responding to change", "detailB": "Processes & tools, Comprehensive documentation, Contract negotiation, Following a plan"},
            {"criterion": "Adaptability Focus", "detailA": "High responsiveness to volatile human and market factors", "detailB": "Structural control and formal predictability"},
            {"criterion": "Failure Mode if Ignored", "detailA": "Rigidity, bureaucracy, alienated users, delayed value", "detailB": "Lack of audit trails, undefined contracts, tool chaos"}
        ]
    },
    {
        "conceptA": "Self-Organizing Agile Team",
        "conceptB": "Traditional Hierarchical Team",
        "comparisonPoints": [
            {"criterion": "Decision-Making on 'How'", "detailA": "Autonomous team decision through consensus and expertise", "detailB": "Dictated top-down by project manager or department head"},
            {"criterion": "Accountability Structure", "detailA": "Mutual accountability; team succeeds or fails collectively", "detailB": "Individual accountability; individual finger-pointing for errors"},
            {"criterion": "Skill Distribution", "detailA": "Cross-functional (all required disciplines embedded in team)", "detailB": "Functional silos (separate development, QA, and DBA departments)"},
            {"criterion": "Communication Pattern", "detailA": "Continuous, informal, high-bandwidth peer-to-peer dialogue", "detailB": "Formal status meetings, written memos, and ticketing queues"}
        ]
    },
    {
        "conceptA": "Product Owner",
        "conceptB": "Scrum Master",
        "comparisonPoints": [
            {"criterion": "Core Question Owned", "detailA": "WHAT gets built and in what business order", "detailB": "HOW the team collaborates and enacts Scrum principles"},
            {"criterion": "Artifact Ownership", "detailA": "Sole owner of the Product Backlog", "detailB": "No artifact ownership; protects process and removes impediments"},
            {"criterion": "Key Success Metric", "detailA": "Maximizing business value and ROI of the product", "detailB": "Team process effectiveness, psychological safety, and velocity stability"},
            {"criterion": "Primary Relationship", "detailA": "Faces outward toward stakeholders, customers, and business", "detailB": "Faces inward toward Developers, coaching and clearing blockers"}
        ]
    },
    {
        "conceptA": "Scrum Master",
        "conceptB": "Traditional Project Manager",
        "comparisonPoints": [
            {"criterion": "Authority Model", "detailA": "Servant-leader with zero administrative authority over members", "detailB": "Command-and-control authority; assigns tasks and conducts reviews"},
            {"criterion": "Task Allocation", "detailA": "Developers self-organize and pull their own tasks", "detailB": "PM directly assigns tasks to specific individual team members"},
            {"criterion": "Scope & Budget Ownership", "detailA": "Does not manage budget or scope (handled by Product Owner)", "detailB": "Directly controls scope, schedule, budget, and procurement"},
            {"criterion": "Meeting Philosophy", "detailA": "Facilitates 15-min daily sync; removes external blockers", "detailB": "Chairs formal status meetings; demands milestone variance reports"}
        ]
    },
    {
        "conceptA": "Product Backlog",
        "conceptB": "Sprint Backlog",
        "comparisonPoints": [
            {"criterion": "Ownership", "detailA": "Solely owned and prioritized by the Product Owner", "detailB": "Solely owned and modified by the Developers"},
            {"criterion": "Time Horizon", "detailA": "Long-term; covers entire product lifecycle until disposal", "detailB": "Short-term; strictly covers the current active Sprint (<= 1 month)"},
            {"criterion": "Level of Detail", "detailA": "Top items highly detailed; lower items coarse-grained", "detailB": "Highly granular; broken down into specific daily engineering tasks"},
            {"criterion": "Change Authority", "detailA": "PO can add, delete, or re-order items at any time", "detailB": "Only Developers can add/remove tasks during the active Sprint"}
        ]
    },
    {
        "conceptA": "Sprint Review",
        "conceptB": "Sprint Retrospective",
        "comparisonPoints": [
            {"criterion": "Primary Subject", "detailA": "The PRODUCT INCREMENT delivered during the sprint", "detailB": "The TEAM PROCESS, relationships, tools, and practices"},
            {"criterion": "Attendees", "detailA": "Scrum Team PLUS external stakeholders and customers", "detailB": "STRICTLY the internal Scrum Team (PO, SM, Developers)"},
            {"criterion": "Direct Output", "detailA": "Adapted and re-prioritized Product Backlog", "detailB": "Actionable team improvement backlog item for immediate next sprint"},
            {"criterion": "Atmosphere Focus", "detailA": "Demonstration, commercial feedback, release roadmap", "detailB": "Blameless reflection, continuous learning, psychological safety"}
        ]
    },
    {
        "conceptA": "Pure Waterfall Model",
        "conceptB": "Waterfall with Feedback",
        "comparisonPoints": [
            {"criterion": "Phase Flow", "detailA": "Strictly unidirectional; never revisits prior phases", "detailB": "Primarily sequential, but permits backward loops to adjacent phase"},
            {"criterion": "Defect Handling", "detailA": "Defects in late testing require catastrophic project-wide rework", "detailB": "Downstream discoveries trigger localized fixes in previous phase"},
            {"criterion": "Flexibility", "detailA": "Completely inflexible once phase gates close", "detailB": "Limited flexibility to refine immediate upstream deliverables"},
            {"criterion": "Course Book Representation", "detailA": "Figure 38 (Cascading linear blocks)", "detailB": "Figure 39 (Cascading blocks with return arrows to previous phase)"}
        ]
    },
    {
        "conceptA": "Waterfall with Feedback",
        "conceptB": "Sashimi Model",
        "comparisonPoints": [
            {"criterion": "Phase Concurrency", "detailA": "Phases are executed sequentially; feedback occurs retrospectively", "detailB": "Adjacent phases overlap concurrently like sliced raw fish"},
            {"criterion": "Schedule Duration", "detailA": "Full cumulative duration of all sequential phase durations", "detailB": "Compressed duration due to parallel phase execution"},
            {"criterion": "Communication Need", "detailA": "Periodic formal hand-offs at milestone boundaries", "detailB": "Intensive, continuous communication between overlapping specialists"},
            {"criterion": "Rework Exposure", "detailA": "Rework contained to immediate prior phase iteration", "detailB": "Rework risk if upstream specs change while downstream code is ongoing"}
        ]
    },
    {
        "conceptA": "Pure Waterfall",
        "conceptB": "V-Model",
        "comparisonPoints": [
            {"criterion": "Geometry & Visual Form", "detailA": "Downward linear cascade (Figure 38)", "detailB": "V-shaped geometry: descending specs, vertex coding, ascending test"},
            {"criterion": "Test Planning Timing", "detailA": "Test planning is deferred until coding finishes near end", "detailB": "Test plans are designed early on the left side during specification"},
            {"criterion": "Traceability", "detailA": "Implicit through phase gate documents", "detailB": "Explicit 1:1 horizontal mapping between spec levels and test levels"},
            {"criterion": "Safety-Critical Applicability", "detailA": "Prone to late defect discovery; high failure risk", "detailB": "Industry standard for safety-critical systems needing formal audit trails"}
        ]
    },
    {
        "conceptA": "Plan-Driven (Predictive)",
        "conceptB": "Agile (Adaptive)",
        "comparisonPoints": [
            {"criterion": "Requirement Assumption", "detailA": "Requirements can be fully known, frozen, and baselined upfront", "detailB": "Requirements inevitably evolve as users experience working software"},
            {"criterion": "Cost of Change", "detailA": "Rises exponentially the later in the lifecycle change occurs", "detailB": "Kept relatively flat through modular architecture and short sprints"},
            {"criterion": "Primary Metric of Progress", "detailA": "Conformance to plan, milestone sign-offs, and earned value", "detailB": "Working, potentially releasable software delivered to users"},
            {"criterion": "Ideal Project Domain", "detailA": "Stable requirements, safety-critical, strict regulatory audits", "detailB": "High volatility, innovative products, exploratory software"}
        ]
    }
]

# Write comparisons
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/comparisons.ts', 'w') as f:
    f.write(f'import {{ CheatSheetComparison }} from "../../../../types";\n\nexport const unit5Comparisons: CheatSheetComparison[] = {json.dumps(comparisons_list, indent=2)};\n')
print(f"Generated unit-5/comparisons.ts ({len(comparisons_list)} comparisons)")

# =========================================================================
# 3. TRAPS.TS (20 Exam Traps)
# =========================================================================
traps_list = [
    {
        "id": "itpm-u5-trap-001", "unit": 5, "relatedConcept": "RUP Core Phases",
        "trapTitle": "Confusing Elaboration with Construction in RUP",
        "trapDescription": "Students often assume software architecture is designed in Inception and all coding happens in Construction.",
        "whyStudentsFail": "In RUP, the executable architectural baseline is proven in ELABORATION, while Construction focuses on mass component coding.",
        "correctApproach": "Remember: Inception = Scope/Feasibility; Elaboration = Architecture/Risk mitigation; Construction = Bulk component coding; Transition = Deployment."
    },
    {
        "id": "itpm-u5-trap-002", "unit": 5, "relatedConcept": "RUP Optional Lifecycle Phases",
        "trapTitle": "Believing RUP Has Only Four Phases",
        "trapDescription": "Students forget the two optional post-transition lifecycle phases: Production and Disposal.",
        "whyStudentsFail": "RUP defines 4 core phases (Inception, Elaboration, Construction, Transition) PLUS 2 optional lifecycle phases (Production, Disposal).",
        "correctApproach": "Always look for Production and Disposal when questions ask about the complete extended Unified Process lifecycle."
    },
    {
        "id": "itpm-u5-trap-003", "unit": 5, "relatedConcept": "RUP Disciplines & Hump Chart",
        "trapTitle": "Treating RUP Disciplines as Sequential Waterfall Stages",
        "trapDescription": "Assuming testing only happens in Transition, or requirements gathering only happens in Inception.",
        "whyStudentsFail": "RUP disciplines run CONCURRENTLY across all phases. The hump chart shows shifting effort peaks, not isolated phase silos.",
        "correctApproach": "Remember that testing occurs in Elaboration and Construction, while requirements are refined during Construction."
    },
    {
        "id": "itpm-u5-trap-004", "unit": 5, "relatedConcept": "Prototyping",
        "trapTitle": "Assuming Throw-away Prototypes Can Become Production Software",
        "trapDescription": "Believing a throw-away prototype can be patched and deployed into live business operations.",
        "whyStudentsFail": "The course book explicitly stresses that prototypes lack non-functional robustness (security, error handling, scalability, concurrency).",
        "correctApproach": "Throw-away prototypes must be DISCARDED. Only evolutionary prototypes are engineered for production evolution."
    },
    {
        "id": "itpm-u5-trap-005", "unit": 5, "relatedConcept": "Agile Manifesto Values",
        "trapTitle": "Claiming Agile Prohibits Documentation and Planning",
        "trapDescription": "Selecting distractors that state Agile teams 'never write documentation' or 'do no planning'.",
        "whyStudentsFail": "The Agile Manifesto explicitly qualifies: 'While there is value in the items on the right, we value the items on the left more.'",
        "correctApproach": "Documentation and planning still exist in Agile; they are simply lean, purposeful, and subordinated to working software."
    },
    {
        "id": "itpm-u5-trap-006", "unit": 5, "relatedConcept": "Agile Manifesto Values",
        "trapTitle": "Reversing Agile Manifesto Value Equations",
        "trapDescription": "Misreading questions that flip left-hand and right-hand items (e.g. 'comprehensive documentation over working software').",
        "whyStudentsFail": "Exam writers deliberately swap terms to trap students who skim options carelessly.",
        "correctApproach": "Always verify: [LEFT ITEM: People, Working Software, Collaboration, Change] OVER [RIGHT ITEM: Tools, Documentation, Contracts, Plan]."
    },
    {
        "id": "itpm-u5-trap-007", "unit": 5, "relatedConcept": "Agile Principle 10",
        "trapTitle": "Misdefining Simplicity as 'Writing Easy Software'",
        "trapDescription": "Defining simplicity as building basic user interfaces or avoiding difficult algorithms.",
        "whyStudentsFail": "Principle 10 has an exact official definition: 'the art of maximizing the amount of work not done'.",
        "correctApproach": "Look strictly for the phrase 'maximizing the amount of work not done' in multiple-choice options."
    },
    {
        "id": "itpm-u5-trap-008", "unit": 5, "relatedConcept": "Self-Organizing Teams",
        "trapTitle": "Assuming Self-Organizing Teams Have No Management or Boundaries",
        "trapDescription": "Believing self-organizing teams can decide what products to build or change corporate strategy autonomously.",
        "whyStudentsFail": "Self-organizing teams own HOW work is accomplished, but the Product Owner strictly controls WHAT is built.",
        "correctApproach": "Differentiate: Business/PO owns the 'What'; Self-organizing developers own the 'How'."
    },
    {
        "id": "itpm-u5-trap-009", "unit": 5, "relatedConcept": "Software Versioning",
        "trapTitle": "Inverting Build and Revision in Version Numbers",
        "trapDescription": "Mixing up the 3rd and 4th digits of the versioning scheme (e.g. calling '9' the build and '5' the revision in 4.2.5.9).",
        "whyStudentsFail": "The sequence is strictly: Major -> Minor -> Build -> Revision.",
        "correctApproach": "Remember M-M-B-R: Build comes before Revision."
    },
    {
        "id": "itpm-u5-trap-010", "unit": 5, "relatedConcept": "Scrum Empirical Pillars vs Values",
        "trapTitle": "Confusing Scrum's 3 Pillars with its 5 Values",
        "trapDescription": "Listing Commitment or Focus as empirical process control pillars.",
        "whyStudentsFail": "Pillars = Transparency, Inspection, Adaptation. Values = Commitment, Courage, Focus, Openness, Respect.",
        "correctApproach": "Keep mechanics (3 Pillars: T-I-A) separate from human ethics (5 Values: C-C-F-O-R)."
    },
    {
        "id": "itpm-u5-trap-011", "unit": 5, "relatedConcept": "Scrum Roles",
        "trapTitle": "Looking for a 'Project Manager' in Scrum",
        "trapDescription": "Selecting 'Project Manager' as a standard role or assuming the Scrum Master is just a renamed PM.",
        "whyStudentsFail": "Scrum has NO Project Manager role. PM responsibilities are distributed among the PO, SM, and Developers.",
        "correctApproach": "There are only three roles in Scrum: Product Owner, Scrum Master, Developers. Reject any answer claiming PM is a Scrum role."
    },
    {
        "id": "itpm-u5-trap-012", "unit": 5, "relatedConcept": "Product Owner Accountability",
        "trapTitle": "Assuming the Product Owner Can Be a Committee",
        "trapDescription": "Believing a committee of department heads can share the Product Owner role.",
        "whyStudentsFail": "Scrum mandates that the Product Owner is strictly ONE person to prevent political gridlock and ensure clear prioritization.",
        "correctApproach": "The PO may represent a committee's desires, but only ONE person holds the formal PO accountability."
    },
    {
        "id": "itpm-u5-trap-013", "unit": 5, "relatedConcept": "Sprint Backlog Ownership",
        "trapTitle": "Believing the Product Owner Owns the Sprint Backlog",
        "trapDescription": "Assuming the PO manages tasks on the Sprint Backlog during the active sprint.",
        "whyStudentsFail": "The Product Owner owns the *Product Backlog*, but the Developers solely own the *Sprint Backlog*.",
        "correctApproach": "Once the sprint starts, only the Developers can modify the tasks and technical plan in the Sprint Backlog."
    },
    {
        "id": "itpm-u5-trap-014", "unit": 5, "relatedConcept": "Sprint Time-Boxing",
        "trapTitle": "Extending a Sprint Deadline to Complete Remaining Work",
        "trapDescription": "Thinking a sprint can be extended by a few days when tasks are 90% complete.",
        "whyStudentsFail": "A Scrum sprint is an INVIOLABLE time-box. It is NEVER extended. Unfinished work returns to the Product Backlog.",
        "correctApproach": "Sprint length never changes. Scope is adjusted; time is never moved."
    },
    {
        "id": "itpm-u5-trap-015", "unit": 5, "relatedConcept": "Daily Scrum",
        "trapTitle": "Treating the Daily Scrum as a Management Status Meeting",
        "trapDescription": "Believing developers report their daily progress to the Scrum Master or external managers.",
        "whyStudentsFail": "The Daily Scrum is by and for the Developers to synchronize among themselves, not a management status report.",
        "correctApproach": "Developers talk to each other, planning their next 24 hours toward the Sprint Goal."
    },
    {
        "id": "itpm-u5-trap-016", "unit": 5, "relatedConcept": "Scrum Events",
        "trapTitle": "Confusing Sprint Review with Sprint Retrospective",
        "trapDescription": "Believing the Retrospective demos software to clients, or the Review is for team process improvement.",
        "whyStudentsFail": "Review = PRODUCT focus with external stakeholders. Retrospective = PROCESS/TEAM focus strictly with internal team.",
        "correctApproach": "Review demos the Increment. Retrospective improves team collaboration and tools."
    },
    {
        "id": "itpm-u5-trap-017", "unit": 5, "relatedConcept": "Waterfall Models",
        "trapTitle": "Claiming Pure Waterfall Includes Feedback Loops",
        "trapDescription": "Assuming pure waterfall permits returning to earlier phases when bugs are discovered.",
        "whyStudentsFail": "Pure Waterfall is strictly unidirectional. 'Waterfall with Feedback' is a distinct modified variant.",
        "correctApproach": "Pure waterfall has NO backward loops. If feedback arrows exist, it is Waterfall with Feedback (Figure 39)."
    },
    {
        "id": "itpm-u5-trap-018", "unit": 5, "relatedConcept": "V-Model",
        "trapTitle": "Assuming V-Model Testing Starts After Coding Finishes",
        "trapDescription": "Thinking testing is ignored until the right-hand arm is reached.",
        "whyStudentsFail": "Test EXECUTION happens on the right side, but test PLANNING and test case design occur on the left side during specification.",
        "correctApproach": "Acceptance test cases are written during Requirements Analysis, long before coding begins at the vertex."
    },
    {
        "id": "itpm-u5-trap-019", "unit": 5, "relatedConcept": "Verification vs Validation",
        "trapTitle": "Confusing Verification ('Built Right') with Validation ('Built Right Thing')",
        "trapDescription": "Swapping the definitions of Verification and Validation.",
        "whyStudentsFail": "Verification = Conformance to specs ('Did we build the system right?'). Validation = Conformance to user needs ('Did we build the right system?').",
        "correctApproach": "Verification = specs/code check. Validation = customer/operational use check."
    },
    {
        "id": "itpm-u5-trap-020", "unit": 5, "relatedConcept": "Methodology Selection",
        "trapTitle": "Declaring Plan-Driven Models Obsolete for All Small Projects",
        "trapDescription": "Assuming Agile is always superior and Waterfall/V-Model should never be used.",
        "whyStudentsFail": "Safety-critical, life-dependent, and strictly audited projects require the formal verification and traceability of plan-driven models (V-Model).",
        "correctApproach": "Choose Plan-driven for stable specs and safety/audit compliance; choose Agile for uncertainty and rapid feedback."
    }
]

# Write traps
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/traps.ts', 'w') as f:
    f.write(f'export interface ExamTrapItem {{\n  id: string;\n  trapTitle: string;\n  trapDescription: string;\n  whyStudentsFail: string;\n  correctApproach: string;\n  relatedConcept: string;\n  unit: number;\n}}\n\nexport const unit5ExamTraps: ExamTrapItem[] = {json.dumps(traps_list, indent=2)};\n')
print(f"Generated unit-5/traps.ts ({len(traps_list)} traps)")

# =========================================================================
# 4. VISUALS.TS (8 Visuals)
# =========================================================================
visuals_list = [
    {
        "id": "itpm-u5-vis-001",
        "title": "RUP Lifecycle Phases & Gate Milestones",
        "description": "Sequential progression through Inception (LCO), Elaboration (LCA), Construction (IOC), Transition (PR), plus Production and Disposal.",
        "type": "lifecycle",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-002",
        "title": "RUP Workload Hump Chart (Figure 35)",
        "description": "Visual representation of how 6 core engineering disciplines run concurrently across all phases with shifting effort peaks.",
        "type": "chart",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-003",
        "title": "Throw-away vs Evolutionary Prototyping Flow",
        "description": "Comparing the discard path of exploratory prototypes against the iterative architectural growth of evolutionary prototypes.",
        "type": "comparison-flow",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-004",
        "title": "Agile Manifesto Four Value Scales",
        "description": "Visual scale illustrating that while right-side items hold value, left-side human and working items are valued significantly more.",
        "type": "balance",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-005",
        "title": "Scrum 3-3-4 Framework Architecture",
        "description": "Structural mapping of Scrum: 3 Empirical Pillars, 3 Roles, 3 Artifacts, and 4 Time-Boxed Events.",
        "type": "framework",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-006",
        "title": "Sprint Task Board Workflow (Figure 37)",
        "description": "Kanban-style information radiator tracking user stories and tasks through To Do, In Progress, and Done.",
        "type": "board",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-007",
        "title": "Waterfall Variations: Pure vs Feedback vs Sashimi",
        "description": "Visual comparison of linear cascade (Fig. 38), backward feedback loops (Fig. 39), and overlapping phase concurrency (Fig. 40).",
        "type": "comparison",
        "unit": 5
    },
    {
        "id": "itpm-u5-vis-008",
        "title": "The V-Model 1:1 Horizontal Traceability (Figure 41)",
        "description": "V-shaped architecture mapping Requirements <-> Acceptance, Design <-> System, Architecture <-> Integration, and Modules <-> Unit Testing.",
        "type": "v-model",
        "unit": 5
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/visuals.ts', 'w') as f:
    f.write(f'export const unit5Visuals = {json.dumps(visuals_list, indent=2)};\n')
print(f"Generated unit-5/visuals.ts ({len(visuals_list)} visuals)")

# =========================================================================
# 5. SCENARIOS.TS (8 Scenarios)
# =========================================================================
scenarios_list = [
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
        "source": "Unit 5 · Section 5.3 — Scrum"
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
        "source": "Unit 5 · Section 5.3 — Scrum"
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
        "source": "Unit 5 · Section 5.1 — Rational Unified Process (RUP)"
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
        "source": "Unit 5 · Section 5.4 — Plan-Driven Project Management in Small Projects"
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
        "source": "Unit 5 · Section 5.3 — Scrum"
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
        "source": "Unit 5 · Section 5.3 — Scrum"
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
        "source": "Unit 5 · Section 5.4 — Plan-Driven Project Management in Small Projects"
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
        "source": "Unit 5 · Section 5.3 — Scrum"
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/scenarios.ts', 'w') as f:
    f.write(f'export interface ScenarioItem {{\n  id: string;\n  title: string;\n  category: string;\n  type: string;\n  context: string;\n  question: string;\n  options: string[];\n  correctIndex: number;\n  rationale: string;\n  source: string;\n}}\n\nexport const unit5Scenarios: ScenarioItem[] = {json.dumps(scenarios_list, indent=2)};\n')
print(f"Generated unit-5/scenarios.ts ({len(scenarios_list)} scenarios)")

# =========================================================================
# 6. MOCKEXAMS.TS (2 Mock Exams)
# =========================================================================
mock_exams = [
    {
        "id": "itpm-u5-mock-01",
        "title": "Unit 5 Foundation Mock Exam: RUP & Agile Principles",
        "subtitle": "Rational Unified Process phases & disciplines, Agile Manifesto values & 12 principles, and software versioning.",
        "totalMarks": 60,
        "timeLimitMinutes": 90,
        "mcqIds": [
            "itpm-u5-s51-mcq-001", "itpm-u5-s51-mcq-002", "itpm-u5-s51-mcq-003", "itpm-u5-s51-mcq-004", "itpm-u5-s51-mcq-005",
            "itpm-u5-s51-mcq-006", "itpm-u5-s51-mcq-007", "itpm-u5-s51-mcq-008", "itpm-u5-s51-mcq-009", "itpm-u5-s51-mcq-010",
            "itpm-u5-s51-mcq-011", "itpm-u5-s51-mcq-012", "itpm-u5-s51-mcq-013", "itpm-u5-s51-mcq-014", "itpm-u5-s51-mcq-015",
            "itpm-u5-s52-mcq-026", "itpm-u5-s52-mcq-027", "itpm-u5-s52-mcq-028", "itpm-u5-s52-mcq-029", "itpm-u5-s52-mcq-030",
            "itpm-u5-s52-mcq-031", "itpm-u5-s52-mcq-032", "itpm-u5-s52-mcq-033", "itpm-u5-s52-mcq-034", "itpm-u5-s52-mcq-035",
            "itpm-u5-s52-mcq-036", "itpm-u5-s52-mcq-037", "itpm-u5-s52-mcq-038", "itpm-u5-s52-mcq-039", "itpm-u5-s52-mcq-040"
        ],
        "descriptiveQuestions": [
            {
                "id": "itpm-u5-mock-01-d01",
                "unit": 5,
                "question": "Explain the four core phases of RUP and describe the primary milestone gate concluding each phase.",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "Define RUP architecture",
                    "Detail Inception (LCO gate)",
                    "Detail Elaboration (LCA gate)",
                    "Detail Construction (IOC gate)",
                    "Detail Transition (PR gate)"
                ],
                "modelAnswer": "RUP structures software development into four sequential phases, each ending in a formal milestone gate: Inception (Lifecycle Objectives milestone), Elaboration (Lifecycle Architecture milestone), Construction (Initial Operational Capability milestone), and Transition (Product Release milestone). Elaboration establishes the executable architectural baseline and mitigates high risks before Construction undertakes bulk coding.",
                "rubricItems": [
                    {"point": "All 4 phases correctly ordered and defined", "marksAllotted": 4},
                    {"point": "All 4 milestone gates named accurately (LCO, LCA, IOC, PR)", "marksAllotted": 4}
                ],
                "examinerAdvice": "Never confuse Elaboration with Construction. Architecture is validated during Elaboration."
            },
            {
                "id": "itpm-u5-mock-01-d02",
                "unit": 5,
                "question": "State and analyze the four core values of the Agile Manifesto (2001).",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "Value 1: Individuals and interactions over processes and tools",
                    "Value 2: Working software over comprehensive documentation",
                    "Value 3: Customer collaboration over contract negotiation",
                    "Value 4: Responding to change over following a plan",
                    "Balancing qualification: Right items still hold value"
                ],
                "modelAnswer": "The 2001 Agile Manifesto establishes four values: (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, and (4) Responding to change over following a plan. While there is value in the items on the right, the items on the left are valued more.",
                "rubricItems": [
                    {"point": "All 4 values stated accurately without inversion", "marksAllotted": 6},
                    {"point": "Balancing qualification regarding right-hand items explained", "marksAllotted": 2}
                ],
                "examinerAdvice": "Ensure left-hand items are clearly prioritized over right-hand items."
            }
        ]
    },
    {
        "id": "itpm-u5-mock-02",
        "title": "Unit 5 Mastery Mock Exam: Scrum & Plan-Driven Lifecycle Models",
        "subtitle": "Scrum roles, events, artifacts, time-boxing rules, Waterfall variants, and V-Model horizontal verification traceability.",
        "totalMarks": 90,
        "timeLimitMinutes": 120,
        "mcqIds": [
            "itpm-u5-s53-mcq-056", "itpm-u5-s53-mcq-057", "itpm-u5-s53-mcq-058", "itpm-u5-s53-mcq-059", "itpm-u5-s53-mcq-060",
            "itpm-u5-s53-mcq-061", "itpm-u5-s53-mcq-062", "itpm-u5-s53-mcq-063", "itpm-u5-s53-mcq-064", "itpm-u5-s53-mcq-065",
            "itpm-u5-s53-mcq-066", "itpm-u5-s53-mcq-067", "itpm-u5-s53-mcq-068", "itpm-u5-s53-mcq-069", "itpm-u5-s53-mcq-070",
            "itpm-u5-s53-mcq-071", "itpm-u5-s53-mcq-072", "itpm-u5-s53-mcq-073", "itpm-u5-s53-mcq-074", "itpm-u5-s53-mcq-075",
            "itpm-u5-s54-mcq-088", "itpm-u5-s54-mcq-089", "itpm-u5-s54-mcq-090", "itpm-u5-s54-mcq-091", "itpm-u5-s54-mcq-092",
            "itpm-u5-s54-mcq-093", "itpm-u5-s54-mcq-094", "itpm-u5-s54-mcq-095", "itpm-u5-s54-mcq-096", "itpm-u5-s54-mcq-097"
        ],
        "descriptiveQuestions": [
            {
                "id": "itpm-u5-mock-02-d01",
                "unit": 5,
                "question": "Analyze how traditional Project Manager responsibilities are distributed among the three Scrum roles.",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "No Project Manager role in Scrum",
                    "Product Owner: Scope, business value, budget, backlog priorities",
                    "Scrum Master: Process coaching, servant-leadership, impediment removal",
                    "Developers: Technical design, scheduling, task allocation, DoD quality"
                ],
                "modelAnswer": "Scrum has no Project Manager. Responsibilities are distributed across three roles: Product Owner manages scope, ROI, and Product Backlog prioritization; Scrum Master facilitates events, enforces process, and clears blockers; Developers self-organize to estimate effort, assign daily tasks, and deliver increments satisfying the Definition of Done.",
                "rubricItems": [
                    {"point": "Explicit statement that Scrum has no Project Manager", "marksAllotted": 2},
                    {"point": "Detailed breakdown across PO, SM, and Developers", "marksAllotted": 6}
                ],
                "examinerAdvice": "Never imply the Scrum Master is simply a project manager."
            },
            {
                "id": "itpm-u5-mock-02-d02",
                "unit": 5,
                "question": "Detail the four horizontal 1:1 traceability relationships in the V-Model.",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "V-Model geometry explanation",
                    "Pair 1: Requirements Analysis <-> Acceptance Testing",
                    "Pair 2: System Design <-> System Testing",
                    "Pair 3: Architecture Design <-> Integration Testing",
                    "Pair 4: Detailed Module Design <-> Unit Testing"
                ],
                "modelAnswer": "The V-Model connects left-hand specifications with right-hand test levels: (1) Requirements Analysis pairs with Acceptance Testing, (2) System Design pairs with System Testing, (3) Architecture Design pairs with Integration Testing, and (4) Detailed Module Design pairs with Unit Testing. Test cases are planned on the left side concurrently with design.",
                "rubricItems": [
                    {"point": "All 4 horizontal pairs mapped with 100% accuracy", "marksAllotted": 6},
                    {"point": "Early test planning on the left side explained", "marksAllotted": 2}
                ],
                "examinerAdvice": "Do not invert the mapping levels. Top pairs with top; bottom pairs with bottom."
            }
        ]
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/mockExams.ts', 'w') as f:
    f.write(f'import {{ MockExam }} from "../../../../types";\n\nexport const unit5MockExams: MockExam[] = {json.dumps(mock_exams, indent=2)};\n')
print(f"Generated unit-5/mockExams.ts ({len(mock_exams)} mock exams)")

# =========================================================================
# 7. INDEX.TS
# =========================================================================
index_content = """import { UnitData } from "../../../../types";
import { unit5Mcqs } from "./mcqs";
import { unit5Flashcards } from "./flashcards";
import { unit5ImportantQuestions } from "./qa";
import { unit5Concepts, unit5SummarySections } from "./concepts";
import { unit5Comparisons } from "./comparisons";
import { unit5ExamTraps } from "./traps";
import { unit5Visuals } from "./visuals";
import { unit5MockExams } from "./mockExams";
import { unit5Scenarios } from "./scenarios";

export {
  unit5Mcqs,
  unit5Flashcards,
  unit5ImportantQuestions,
  unit5Concepts,
  unit5SummarySections,
  unit5Comparisons,
  unit5ExamTraps,
  unit5Visuals,
  unit5MockExams,
  unit5Scenarios
};

export const unit5Data: UnitData = {
  id: 5,
  code: "DLMBITPAM01-U05",
  title: "Organizing Small and Medium Projects",
  subtitle: "Rational Unified Process (RUP), Agile Software Processes, Scrum, and Plan-Driven Predictive Lifecycles (Waterfall, Sashimi, V-Model).",
  estimatedTime: "3.5 hours",
  color: "from-blue-600 to-cyan-600",
  gradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
  badge: "Unit 5",
  overview: "Official curriculum for Unit 5 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers modern engineering lifecycles for small and medium IT projects. Explores the Rational Unified Process (RUP) with its 4 core phases (Inception, Elaboration, Construction, Transition) and 2 optional phases (Production, Disposal), concurrent disciplines, workload hump chart, and prototyping strategies. Examines the Agile Manifesto (4 core values, 12 principles, self-organizing teams, and semantic versioning). Deconstructs Scrum in depth: 3 empirical pillars (Transparency, Inspection, Adaptation), 5 core values, 3 defined roles (Product Owner, Scrum Master, Developers — with NO Project Manager), 3 artifacts (Product Backlog, Sprint Backlog, Increment + Definition of Done), and 4 time-boxed ceremonies. Concludes with plan-driven predictive models in small projects: Pure Waterfall, Waterfall with Feedback, Sashimi (overlapping phases), and the V-Model with its 1:1 horizontal verification traceability links, alongside comprehensive methodology selection frameworks.",
  summarySections: unit5SummarySections,
  keyConcepts: unit5Concepts,
  cheatSheet: {
    mustMemorize: [
      "RUP 4 Core Phases: Inception (LCO gate), Elaboration (LCA gate), Construction (IOC gate), Transition (PR gate).",
      "RUP 2 Optional Lifecycle Phases: Production (live operations & maintenance) and Disposal (system decommissioning & migration).",
      "RUP Prototyping Rule: Throw-away prototypes are discarded; Evolutionary prototypes evolve into production. A prototype is NOT production software.",
      "Agile Manifesto 4 Values: Individuals & interactions > processes/tools; Working software > comprehensive documentation; Customer collaboration > contract negotiation; Responding to change > following a plan.",
      "Agile Simplicity (Principle 10): 'The art of maximizing the amount of work not done.'",
      "Software Versioning: major.minor.build.revision (e.g. 4.2.5.9).",
      "Scrum 3 Empirical Pillars: Transparency, Inspection, Adaptation.",
      "Scrum 5 Values: Commitment, Courage, Focus, Openness, Respect.",
      "Scrum 3 Roles: Product Owner, Scrum Master, Developers. There is NO Project Manager role in Scrum!",
      "Scrum Team Size: Typically between 5 and 9 members.",
      "Scrum Sprint Rules: Time-box <= 1 month. Sprints are NEVER extended if tasks are incomplete. Unfinished work returns to Product Backlog.",
      "Daily Scrum: Strictly 15 minutes, time-boxed. Peer-to-peer sync for Developers, NOT a management status report.",
      "V-Model Horizontal Links: Requirements <-> Acceptance; System Design <-> System Test; Architecture <-> Integration Test; Detailed Design <-> Unit Test.",
      "Verification vs Validation: Verification = 'Did we build the system right?'; Validation = 'Did we build the right system?'."
    ],
    coreDefinitions: [
      {
        term: "Inception Phase",
        definition: "RUP phase establishing scope, business case, and initial feasibility, ending at the Lifecycle Objectives milestone.",
        examNote: "Scope & feasibility gate; not full architecture."
      },
      {
        term: "Elaboration Phase",
        definition: "RUP phase proving the executable architectural baseline and mitigating critical risks, ending at the Lifecycle Architecture milestone.",
        examNote: "Passing LCA gate is required before mass resource commitment to Construction."
      },
      {
        term: "Definition of Done (DoD)",
        definition: "Formal shared agreement on quality criteria that software must satisfy to be deemed potentially releasable.",
        examNote: "Without DoD, working software is an illusion and transparency is destroyed."
      },
      {
        term: "Sashimi Model",
        definition: "Waterfall variant where adjacent phases overlap like sliced fish to compress schedule duration.",
        examNote: "Compresses schedule but introduces rework risk if upstream specs shift."
      },
      {
        term: "V-Model",
        definition: "Plan-driven model linking left-side decomposition phases directly to right-side integration and verification test levels.",
        examNote: "Industry standard for safety-critical systems requiring strict audit traceability."
      }
    ],
    importantNumbers: [
      { number: "4", label: "Core RUP Phases", context: "Inception, Elaboration, Construction, Transition." },
      { number: "2", label: "Optional RUP Phases", context: "Production and Disposal post-transition phases." },
      { number: "6", label: "Core RUP Disciplines", context: "Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment." },
      { number: "4", label: "Agile Manifesto Values", context: "Drafted in February 2001 by 17 software signatories in Snowbird, Utah." },
      { number: "12", label: "Agile Principles", context: "Operational principles supporting the Agile Manifesto." },
      { number: "3", label: "Scrum Empirical Pillars", context: "Transparency, Inspection, Adaptation." },
      { number: "5", label: "Scrum Core Values", context: "Commitment, Courage, Focus, Openness, Respect." },
      { number: "3", label: "Scrum Roles", context: "Product Owner, Scrum Master, Developers. (No Project Manager)." },
      { number: "5 to 9", label: "Optimal Scrum Team Size", context: "Classic cross-functional development team guideline." },
      { number: "15 minutes", label: "Daily Scrum Time-Box", context: "Strict daily coordination time-box for Developers." },
      { number: "<= 1 month", label: "Sprint Duration Limit", context: "Fixed time-box that is never extended." },
      { number: "4", label: "V-Model Traceability Pairs", context: "Requirements/Acceptance, Design/System, Architecture/Integration, Module/Unit." }
    ],
    frameworkNames: [
      { acronym: "RUP", fullName: "Rational Unified Process", focus: "Architecture-centric, use-case driven iterative engineering framework." },
      { acronym: "UML", fullName: "Unified Modeling Language", focus: "Visual modeling standard utilized extensively throughout RUP disciplines." },
      { acronym: "DoD", fullName: "Definition of Done", focus: "Shared quality checklist required for software to enter the Increment." },
      { acronym: "LCO", fullName: "Lifecycle Objectives", focus: "Milestone gate concluding the RUP Inception phase." },
      { acronym: "LCA", fullName: "Lifecycle Architecture", focus: "Milestone gate concluding the RUP Elaboration phase." },
      { acronym: "IOC", fullName: "Initial Operational Capability", focus: "Milestone gate concluding the RUP Construction phase." },
      { acronym: "PR", fullName: "Product Release", focus: "Milestone gate concluding the RUP Transition phase." }
    ]
  }
};
"""

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/index.ts', 'w') as f:
    f.write(index_content)
print("Generated unit-5/index.ts successfully!")
