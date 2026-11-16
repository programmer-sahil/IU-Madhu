import json

mcqs = []

# =========================================================================
# SECTION 5.1: Rational Unified Process (RUP) - 25 MCQs (001 to 025)
# =========================================================================

s51_data = [
    {
        "id": "itpm-u5-s51-mcq-001",
        "topic": "RUP Core Phases",
        "difficulty": "easy",
        "question": "Which of the following correctly lists the four core phases of the Rational Unified Process (RUP) in their proper sequential order?",
        "options": {
            "A": "Inception, Elaboration, Construction, Transition",
            "B": "Initiation, Planning, Execution, Closing",
            "C": "Requirements, Analysis, Design, Implementation",
            "D": "Inception, Construction, Elaboration, Deployment"
        },
        "correctAnswer": "A",
        "explanation": "RUP structures project lifecycles into four sequential core phases: Inception, Elaboration, Construction, and Transition.",
        "whyOthersAreWrong": [
            "Initiation, Planning, Execution, Closing are PMBOK process groups, not RUP phases.",
            "Requirements, Analysis, Design, Implementation are disciplines/waterfall stages, not RUP core phases.",
            "Inception, Construction, Elaboration, Deployment mixes phase order and uses 'Deployment' instead of Transition."
        ],
        "examTrap": "Do not confuse RUP phases with PMBOK process groups or traditional waterfall phases. Elaboration strictly precedes Construction.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Core Phases"
    },
    {
        "id": "itpm-u5-s51-mcq-002",
        "topic": "RUP Optional Lifecycle Phases",
        "difficulty": "medium",
        "question": "Beyond the four core project phases, which two optional post-transition phases are recognized in extended Unified Process frameworks?",
        "options": {
            "A": "Production and Disposal",
            "B": "Maintenance and Upgrading",
            "C": "Commissioning and Decommissioning",
            "D": "Monitoring and Archiving"
        },
        "correctAnswer": "A",
        "explanation": "Extended Unified Process models include two optional lifecycle phases: Production (operating and supporting the live system) and Disposal (retiring the software and data).",
        "whyOthersAreWrong": [
            "Maintenance and Upgrading are activities within operations, not official UP phase titles.",
            "Commissioning and Decommissioning are industrial engineering terms, not RUP terminology.",
            "Monitoring and Archiving are sub-activities, not the formal post-transition UP phases."
        ],
        "examTrap": "Exam questions often test the exact names: 'Production' and 'Disposal'.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Optional Lifecycle Phases"
    },
    {
        "id": "itpm-u5-s51-mcq-003",
        "topic": "RUP Inception Phase Objective",
        "difficulty": "easy",
        "question": "What is the primary objective of the Inception phase in RUP?",
        "options": {
            "A": "Establish the project scope, business case, and initial risk evaluation",
            "B": "Build 80% of the operational system components",
            "C": "Deploy the system to production and train end users",
            "D": "Finalize detailed software architecture baseline and mitigate all high risks"
        },
        "correctAnswer": "A",
        "explanation": "Inception establishes the business rationale, high-level requirements, project scope boundaries, and initial feasibility and risk assessment.",
        "whyOthersAreWrong": [
            "Building 80% of operational components is the main goal of the Construction phase.",
            "Deploying to production and training users occurs during the Transition phase.",
            "Finalizing the architecture baseline and mitigating critical risks occurs in the Elaboration phase."
        ],
        "examTrap": "Inception defines project scope and feasibility; it does not establish the full technical architecture baseline (which is Elaboration).",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Inception Phase Objective"
    },
    {
        "id": "itpm-u5-s51-mcq-004",
        "topic": "RUP Elaboration Phase Objective",
        "difficulty": "medium",
        "question": "In RUP, which key deliverable and milestone must be achieved by the end of the Elaboration phase before committing full resources to Construction?",
        "options": {
            "A": "An executable architectural baseline and mitigation of high-priority risks",
            "B": "A signed contractual agreement with external vendors",
            "C": "The complete user acceptance testing sign-off",
            "D": "The initial user manual and marketing materials"
        },
        "correctAnswer": "A",
        "explanation": "Elaboration focuses on establishing an executable architectural baseline, elaborating critical use cases, and addressing significant project risks.",
        "whyOthersAreWrong": [
            "Vendor contracts are procurement deliverables, not the primary architectural gate of Elaboration.",
            "User acceptance testing occurs during the Transition phase.",
            "User manuals and marketing are finalized during Construction and Transition."
        ],
        "examTrap": "Elaboration is fundamentally about architecture validation and major risk mitigation, not just requirement documentation.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Elaboration Phase Objective"
    },
    {
        "id": "itpm-u5-s51-mcq-005",
        "topic": "RUP Construction Phase Focus",
        "difficulty": "easy",
        "question": "What is the primary activity carried out during the Construction phase of RUP?",
        "options": {
            "A": "Developing the remaining system components and integrating features into a functional product",
            "B": "Formulating the initial vision and business case",
            "C": "Conducting beta testing with end users in their live environment",
            "D": "Decommissioning legacy mainframe databases"
        },
        "correctAnswer": "A",
        "explanation": "Construction is the manufacturing process of RUP where bulk coding, component construction, resource expenditure, and integration take place.",
        "whyOthersAreWrong": [
            "Vision and business case formulation belong to the Inception phase.",
            "Beta testing in the live user environment belongs to the Transition phase.",
            "Decommissioning legacy databases belongs to the Disposal phase."
        ],
        "examTrap": "Construction consumes the largest share of budget and developer hours, focusing on coding remaining components on the established architecture.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Construction Phase Focus"
    },
    {
        "id": "itpm-u5-s51-mcq-006",
        "topic": "RUP Transition Phase Activities",
        "difficulty": "medium",
        "question": "Which set of activities characteristically occurs during the RUP Transition phase?",
        "options": {
            "A": "Beta testing, user training, data conversion, and product deployment",
            "B": "Detailed architectural modeling, core use case identification, and spike prototyping",
            "C": "Initial feasibility analysis, project charter creation, and high-level budgeting",
            "D": "Writing unit tests for 100% of newly written component classes"
        },
        "correctAnswer": "A",
        "explanation": "Transition delivers the software system into user operations, incorporating beta testing, bug fixing, user training, data migration, and rollout.",
        "whyOthersAreWrong": [
            "Architectural modeling and spike prototyping occur in Elaboration.",
            "Feasibility, chartering, and high-level budgeting occur in Inception.",
            "Bulk unit test creation occurs in Construction."
        ],
        "examTrap": "Transition is not just 'copying files to server'; it encompasses user training, beta feedback, and operational readiness.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Transition Phase Activities"
    },
    {
        "id": "itpm-u5-s51-mcq-007",
        "topic": "RUP Disciplines Definition",
        "difficulty": "medium",
        "question": "In RUP terminology, what is a 'discipline'?",
        "options": {
            "A": "A collection of related activities or workflows directed toward producing a specific set of artifacts",
            "B": "A disciplinary measure taken when a developer fails code review",
            "C": "A fixed time-box during which no changes to scope are permitted",
            "D": "A strict organizational hierarchy of reporting relationships"
        },
        "correctAnswer": "A",
        "explanation": "A discipline (formerly called workflow) in RUP is a collection of related activities, roles, and artifacts related to a specific technical or management concern.",
        "whyOthersAreWrong": [
            "Discipline does not refer to punitive team actions.",
            "A fixed time-box is a Sprint or iteration concept, not a discipline.",
            "Organizational hierarchy relates to company structure, not RUP process disciplines."
        ],
        "examTrap": "Disciplines run concurrently across all phases; they are NOT sequential project phases.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Disciplines Definition"
    },
    {
        "id": "itpm-u5-s51-mcq-008",
        "topic": "RUP Six Core Disciplines",
        "difficulty": "medium",
        "question": "Which of the following correctly enumerates the six core engineering disciplines in RUP?",
        "options": {
            "A": "Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment",
            "B": "Inception, Elaboration, Construction, Transition, Production, Disposal",
            "C": "Planning, Estimating, Scheduling, Tracking, Controlling, Closing",
            "D": "Scoping, Coding, Debugging, Documenting, Delivering, Archiving"
        },
        "correctAnswer": "A",
        "explanation": "The six core engineering disciplines in RUP are Business Modeling, Requirements, Analysis & Design, Implementation, Test, and Deployment.",
        "whyOthersAreWrong": [
            "Inception, Elaboration, Construction, Transition are RUP phases, not disciplines.",
            "Planning, Estimating, Scheduling, etc. are project management processes.",
            "Scoping, Coding, Debugging are informal programming activities."
        ],
        "examTrap": "Distinguish RUP Phases (the horizontal time axis) from RUP Disciplines (the vertical content axis).",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Six Core Disciplines"
    },
    {
        "id": "itpm-u5-s51-mcq-009",
        "topic": "RUP Supporting Disciplines",
        "difficulty": "hard",
        "question": "In addition to the six core engineering disciplines, which three supporting disciplines are defined in RUP?",
        "options": {
            "A": "Configuration & Change Management, Project Management, Environment",
            "B": "Quality Assurance, Procurement, Financial Accounting",
            "C": "Vendor Management, Human Resources, Legal Compliance",
            "D": "Database Administration, Network Operations, Security Auditing"
        },
        "correctAnswer": "A",
        "explanation": "RUP defines three supporting disciplines: Configuration & Change Management, Project Management, and Environment (tooling and infrastructure).",
        "whyOthersAreWrong": [
            "Quality Assurance and Procurement are broader PM areas, not the specific RUP supporting triad.",
            "Vendor Management and HR are corporate functions.",
            "DBA and Network Operations are operational IT roles."
        ],
        "examTrap": "'Environment' in RUP refers specifically to the development environment, guidelines, and software tools provided to the engineering team.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Supporting Disciplines"
    },
    {
        "id": "itpm-u5-s51-mcq-010",
        "topic": "Workload Distribution Hump Chart",
        "difficulty": "medium",
        "question": "What does the classic RUP 'hump chart' (workload distribution) visually demonstrate about disciplines across phases?",
        "options": {
            "A": "All disciplines are active across all phases, but their workload intensity peaks in different phases",
            "B": "Only one discipline is executed per phase in a strict sequential waterfall manner",
            "C": "Testing only begins once Implementation has reached 100% completion",
            "D": "Requirements gathering is permanently frozen at the conclusion of Inception"
        },
        "correctAnswer": "A",
        "explanation": "The hump chart illustrates that disciplines are not isolated stages; each discipline occurs in every phase, but with differing workload peaks (e.g., Requirements peaks in Inception/Elaboration; Implementation peaks in Construction).",
        "whyOthersAreWrong": [
            "RUP is explicitly iterative and concurrent, not a strict single-discipline sequential model.",
            "Testing occurs continuously throughout all phases including Elaboration, not just after Implementation.",
            "Requirements are actively refined and elaborated during Elaboration and Construction."
        ],
        "examTrap": "RUP disciplines do not start and stop at phase boundaries. They span the entire project with varying intensity.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "Workload Distribution Hump Chart"
    },
    {
        "id": "itpm-u5-s51-mcq-011",
        "topic": "Throw-away Prototyping Purpose",
        "difficulty": "easy",
        "question": "What is the primary function of a 'throw-away prototype' in software engineering?",
        "options": {
            "A": "To clarify ambiguous requirements or explore technical feasibility, after which it is discarded",
            "B": "To serve as the initial codebase that is gradually expanded into the final product",
            "C": "To deploy an emergency hotfix to production servers",
            "D": "To train end users on the live production database"
        },
        "correctAnswer": "A",
        "explanation": "A throw-away prototype is developed rapidly to resolve specific uncertainties (user interface preferences, technical feasibility) and is intentionally discarded once understanding is achieved.",
        "whyOthersAreWrong": [
            "Gradually expanding into the final product defines an Evolutionary prototype.",
            "Emergency hotfixes are production maintenance patches, not throw-away prototypes.",
            "Throw-away prototypes are never connected to live production databases."
        ],
        "examTrap": "Never attempt to turn a throw-away prototype into production software; it lacks robust architecture, security, and error handling.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "Throw-away Prototyping Purpose"
    },
    {
        "id": "itpm-u5-s51-mcq-012",
        "topic": "Evolutionary Prototyping Mechanism",
        "difficulty": "medium",
        "question": "How does an 'evolutionary prototype' differ from a throw-away prototype?",
        "options": {
            "A": "It is built with production-grade architectural standards and iteratively refined until it becomes the final product",
            "B": "It is coded in a mock-up tool and deleted after stakeholder demonstration",
            "C": "It is only used during the Disposal phase of the software lifecycle",
            "D": "It avoids using any object-oriented or component-based design"
        },
        "correctAnswer": "A",
        "explanation": "Evolutionary prototyping begins with a well-structured core that meets initial understood requirements, which is continuously enhanced and refactored through successive iterations until the full system is realized.",
        "whyOthersAreWrong": [
            "Deleting after demonstration describes throw-away prototyping.",
            "Evolutionary prototypes are built during early development, not during Disposal.",
            "Evolutionary prototypes typically require solid architectural practices like object orientation."
        ],
        "examTrap": "Evolutionary prototypes require rigorous code quality from the start because their code forms the foundation of the production system.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "Evolutionary Prototyping Mechanism"
    },
    {
        "id": "itpm-u5-s51-mcq-013",
        "topic": "Prototype vs Production Reality",
        "difficulty": "medium",
        "question": "Why does the course book emphasize that 'a prototype is NOT production software'?",
        "options": {
            "A": "Prototypes typically lack robust error handling, security hardening, scalability, and full documentation",
            "B": "Prototypes cannot be compiled or executed on computer hardware",
            "C": "International copyright law forbids prototypes from being sold commercially",
            "D": "Prototypes are legally classified as hardware rather than software"
        },
        "correctAnswer": "A",
        "explanation": "Prototypes focus on demonstrating functionality or feasibility quickly; they omit crucial non-functional qualities such as exception handling, concurrency control, encryption, security, and scalability.",
        "whyOthersAreWrong": [
            "Prototypes are executable software models.",
            "Commercial copyright law does not dictate technical prototype definitions.",
            "Prototypes are software artifacts, not hardware."
        ],
        "examTrap": "Clients frequently pressure teams to 'just deploy the prototype'. The course book warns that doing so introduces severe operational instability.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "Prototype vs Production Reality"
    },
    {
        "id": "itpm-u5-s51-mcq-014",
        "topic": "RUP Best Practice: Visual Modeling",
        "difficulty": "easy",
        "question": "Which standard modeling language is foundational to RUP's best practice of 'modeling software visually'?",
        "options": {
            "A": "UML (Unified Modeling Language)",
            "B": "HTML (HyperText Markup Language)",
            "C": "SQL (Structured Query Language)",
            "D": "BPMN (Business Process Model and Notation)"
        },
        "correctAnswer": "A",
        "explanation": "RUP explicitly uses UML (Unified Modeling Language) to visually model software architecture, business processes, and system behavior.",
        "whyOthersAreWrong": [
            "HTML is a web presentation markup language.",
            "SQL is a database query language.",
            "While BPMN models business processes, RUP was natively architected around UML."
        ],
        "examTrap": "Rational Software leaders (Booch, Rumbaugh, Jacobson) created both UML and the Unified Process.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Best Practice: Visual Modeling"
    },
    {
        "id": "itpm-u5-s51-mcq-015",
        "topic": "RUP Best Practice: Component Architectures",
        "difficulty": "medium",
        "question": "What is the primary benefit of adopting 'component-based architectures' as recommended by RUP?",
        "options": {
            "A": "Promotes software reuse, modularity, and independent testability and maintainability",
            "B": "Eliminates the requirement to conduct software testing",
            "C": "Guarantees that software will never require refactoring",
            "D": "Ensures that software can only be run on IBM proprietary mainframe servers"
        },
        "correctAnswer": "A",
        "explanation": "Component-based architecture structures systems into well-defined, modular, reusable building blocks with explicit interfaces, enhancing maintainability and parallel development.",
        "whyOthersAreWrong": [
            "Modular architecture does not eliminate the need for thorough testing.",
            "No architecture can guarantee software will never need refactoring.",
            "Component design increases platform portability rather than locking into IBM mainframes."
        ],
        "examTrap": "Components are decoupled units of software communicating via contracts/interfaces, enabling incremental construction.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Best Practice: Component Architectures"
    },
    {
        "id": "itpm-u5-s51-mcq-016",
        "topic": "RUP Tooling Dependency & Decline",
        "difficulty": "medium",
        "question": "Which factor significantly contributed to the decline in popularity of RUP in favor of lightweight agile methodologies?",
        "options": {
            "A": "Heavy perceived administrative overhead and strong commercial dependency on the IBM Rational tool suite",
            "B": "Inability of RUP to support object-oriented programming languages",
            "C": "Government legislation banning the use of iterative software frameworks",
            "D": "Complete lack of quality assurance or testing guidelines in the RUP specification"
        },
        "correctAnswer": "A",
        "explanation": "RUP acquired a reputation for being bureaucratic and heavyweight, and its practical implementation was tightly coupled to expensive IBM Rational software tools (e.g., Rational Rose, ClearCase).",
        "whyOthersAreWrong": [
            "RUP was fundamentally built from the ground up for object-oriented development.",
            "No legislation has ever banned iterative frameworks.",
            "RUP included extensive, highly formalized testing disciplines."
        ],
        "examTrap": "Students often assume RUP failed because it was waterfall. In fact, RUP was iterative, but suffered from process heaviness and tooling lock-in.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Tooling Dependency & Decline"
    },
    {
        "id": "itpm-u5-s51-mcq-017",
        "topic": "RUP Milestones: Life-Cycle Objectives",
        "difficulty": "hard",
        "question": "Which formal milestone evaluates the success of the RUP Inception phase?",
        "options": {
            "A": "Lifecycle Objectives (LCO) Milestone",
            "B": "Lifecycle Architecture (LCA) Milestone",
            "C": "Initial Operational Capability (IOC) Milestone",
            "D": "Product Release (PR) Milestone"
        },
        "correctAnswer": "A",
        "explanation": "The Inception phase concludes with the Lifecycle Objectives (LCO) milestone, verifying basic scope, business case, and stakeholder alignment.",
        "whyOthersAreWrong": [
            "Lifecycle Architecture (LCA) milestone marks the conclusion of the Elaboration phase.",
            "Initial Operational Capability (IOC) marks the conclusion of Construction.",
            "Product Release marks the conclusion of Transition."
        ],
        "examTrap": "Memorize the 4 milestone gates: Inception = Lifecycle Objectives; Elaboration = Lifecycle Architecture; Construction = Initial Operational Capability; Transition = Product Release.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Milestones: Life-Cycle Objectives"
    },
    {
        "id": "itpm-u5-s51-mcq-018",
        "topic": "RUP Milestones: Lifecycle Architecture",
        "difficulty": "hard",
        "question": "The Lifecycle Architecture (LCA) milestone occurs at the boundary between which two RUP phases?",
        "options": {
            "A": "Elaboration and Construction",
            "B": "Inception and Elaboration",
            "C": "Construction and Transition",
            "D": "Transition and Production"
        },
        "correctAnswer": "A",
        "explanation": "The Lifecycle Architecture (LCA) milestone terminates the Elaboration phase; passing it gives approval to proceed into Construction.",
        "whyOthersAreWrong": [
            "Inception and Elaboration are separated by the Lifecycle Objectives milestone.",
            "Construction and Transition are separated by the Initial Operational Capability milestone.",
            "Transition and Production are separated by the Product Release milestone."
        ],
        "examTrap": "LCA requires an executable architectural baseline. If architecture is unstable, the project should not enter Construction.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Milestones: Lifecycle Architecture"
    },
    {
        "id": "itpm-u5-s51-mcq-019",
        "topic": "RUP Risk-Driven Character",
        "difficulty": "medium",
        "question": "What does it mean that RUP is an 'architecture-centric and risk-driven' process?",
        "options": {
            "A": "Early iterations prioritize addressing high-risk architectural elements first before routine functionality is coded",
            "B": "The project manager delays dealing with risks until the final deployment phase",
            "C": "The team only writes software code when a critical system failure occurs",
            "D": "Risk management is handled entirely by external insurance companies"
        },
        "correctAnswer": "A",
        "explanation": "Risk-driven means high-exposure risks (e.g., untried integration, performance bottlenecks) are tackled in early Elaboration iterations so failure occurs early and cheaply if at all.",
        "whyOthersAreWrong": [
            "Delaying risk resolution until deployment is the fatal flaw of traditional waterfall, which RUP specifically rejects.",
            "Writing code only during failures describes emergency patching, not planned engineering.",
            "Insurance covers financial loss, not architectural software risks."
        ],
        "examTrap": "RUP attacks risks early through iterations; it does not defer complex architectural unknowns to late stages.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Risk-Driven Character"
    },
    {
        "id": "itpm-u5-s51-mcq-020",
        "topic": "RUP Iteration Planning",
        "difficulty": "medium",
        "question": "Within RUP, what is produced at the end of every individual iteration?",
        "options": {
            "A": "An executable release (internal or external) demonstrating incremental progress",
            "B": "A purely theoretical document containing UML diagrams with no code",
            "C": "A complete reorganization of the executive board of directors",
            "D": "A completely new project charter signed by new sponsors"
        },
        "correctAnswer": "A",
        "explanation": "Every RUP iteration produces an executable, testable software release representing an incremental step toward the final system.",
        "whyOthersAreWrong": [
            "RUP iterations must result in executable code, not merely paper documentation.",
            "Board of directors reorganization is corporate governance unrelated to software iterations.",
            "Project charters are not renegotiated at the end of routine iterations."
        ],
        "examTrap": "An iteration in RUP is not a documentation exercise; it must yield an executable build.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Iteration Planning"
    },
    {
        "id": "itpm-u5-s51-mcq-021",
        "topic": "RUP Use-Case Driven Nature",
        "difficulty": "medium",
        "question": "What does it mean that RUP is 'use-case driven'?",
        "options": {
            "A": "Use cases serve as the foundational thread that guides requirements, design, implementation, and test cases",
            "B": "Developers only write code when an end user is physically sitting next to them",
            "C": "The software can only be used in specific legal court cases",
            "D": "No formal database schema can be designed"
        },
        "correctAnswer": "A",
        "explanation": "Use cases define system behavior from an external user's perspective and provide continuous traceability through analysis, design models, coding, and verification testing.",
        "whyOthersAreWrong": [
            "Sitting next to the developer describes Extreme Programming pair programming, not the RUP use-case definition.",
            "Legal court cases are irrelevant to software engineering use cases.",
            "Database schemas are actively derived from data models and use cases."
        ],
        "examTrap": "Use cases are not just requirements artifacts in RUP; test cases and architectural models are directly derived from them.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Use-Case Driven Nature"
    },
    {
        "id": "itpm-u5-s51-mcq-022",
        "topic": "RUP Disposal Phase Scope",
        "difficulty": "medium",
        "question": "Under what circumstance does a software project enter the RUP Disposal phase?",
        "options": {
            "A": "When the system has reached the end of its productive life and must be systematically decommissioned and replaced",
            "B": "When the project team runs out of coffee during a sprint",
            "C": "Immediately after the first iteration of Inception completes",
            "D": "Whenever a single defect is found during user acceptance testing"
        },
        "correctAnswer": "A",
        "explanation": "The Disposal phase handles the orderly end-of-life retirement of the system, including data archival, migration to a successor system, and decommissioning infrastructure.",
        "whyOthersAreWrong": [
            "Coffee supply issues are trivial office complaints.",
            "Inception concludes with Elaboration, not system Disposal.",
            "Defects in acceptance testing trigger defect fixing in Transition, not system retirement."
        ],
        "examTrap": "Disposal is a planned lifecycle phase for legacy retirement, not an emergency abandonment of an active project.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Disposal Phase Scope"
    },
    {
        "id": "itpm-u5-s51-mcq-023",
        "topic": "RUP Business Modeling Discipline",
        "difficulty": "hard",
        "question": "What is the primary objective of the 'Business Modeling' discipline in RUP?",
        "options": {
            "A": "To ensure that software developers understand the business context, organizational processes, and customer problems being solved",
            "B": "To prepare quarterly financial tax statements for corporate auditors",
            "C": "To create 3D computer animations of physical office buildings",
            "D": "To manage employee payroll and benefits administration"
        },
        "correctAnswer": "A",
        "explanation": "Business Modeling provides a common understanding between business stakeholders and technical engineers regarding the organization's workflows, terminology, and strategic goals.",
        "whyOthersAreWrong": [
            "Tax preparation is corporate finance, not software engineering business modeling.",
            "3D office animations are architectural graphics.",
            "Payroll is HR operations."
        ],
        "examTrap": "Business Modeling is an engineering discipline in RUP; it maps organizational business processes to software requirements.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Business Modeling Discipline"
    },
    {
        "id": "itpm-u5-s51-mcq-024",
        "topic": "RUP Change Management Discipline",
        "difficulty": "medium",
        "question": "Why is the 'Configuration & Change Management' discipline vital in an iterative process like RUP?",
        "options": {
            "A": "Because multiple iterations and parallel developer activities inevitably produce competing versions of artifacts that must be coordinated",
            "B": "To prevent any changes to software code once Inception is complete",
            "C": "To replace all developers with AI scripts after the Construction phase",
            "D": "To avoid having to write release notes for end users"
        },
        "correctAnswer": "A",
        "explanation": "In an iterative process, artifacts change continuously; configuration and change management maintains artifact integrity, version control, and traceability across iterations.",
        "whyOthersAreWrong": [
            "Iterative development welcomes controlled change; it does not freeze code after Inception.",
            "Replacing developers with AI scripts is not a RUP discipline goal.",
            "Release notes are required deliverables generated via change tracking."
        ],
        "examTrap": "Configuration management controls change; it does not ban change.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP Change Management Discipline"
    },
    {
        "id": "itpm-u5-s51-mcq-025",
        "topic": "RUP vs Waterfall Primary Distinction",
        "difficulty": "easy",
        "question": "What is the most fundamental architectural difference between RUP and traditional Waterfall?",
        "options": {
            "A": "RUP is iterative and refines all engineering disciplines concurrently, whereas Waterfall executes disciplines as discrete, non-overlapping sequential stages",
            "B": "RUP does not use any documentation, whereas Waterfall uses only documentation",
            "C": "RUP can only be used on projects with fewer than 3 people",
            "D": "Waterfall prohibits the use of compilers"
        },
        "correctAnswer": "A",
        "explanation": "Waterfall executes requirements, design, coding, and testing as separate sequential silos. RUP executes all disciplines across iterative cycles throughout the four phases.",
        "whyOthersAreWrong": [
            "RUP produces substantial documentation (models, specifications, test plans).",
            "RUP was specifically designed for medium to large enterprise software teams.",
            "Compilers are used in all software engineering methodologies."
        ],
        "examTrap": "Both RUP and Waterfall are structured, but RUP organizes work iteratively across concurrent disciplines rather than linear single-pass stages.",
        "source": {"type": "course-book", "unit": 5, "section": "5.1", "topic": "Rational Unified Process (RUP)"},
        "sourceUnit": 5, "sourceSection": "5.1", "sourceTopic": "RUP vs Waterfall Primary Distinction"
    }
]

mcqs.extend(s51_data)
print(f"Added Section 5.1 MCQs: {len(s51_data)} (Total: {len(mcqs)})")
