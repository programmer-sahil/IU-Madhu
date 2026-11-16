import { MCQ } from "../../../../types";

export const unit5Mcqs: MCQ[] = [
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Core Phases",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Optional Lifecycle Phases",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Inception Phase Objective",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Elaboration Phase Objective",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Construction Phase Focus",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Transition Phase Activities",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Disciplines Definition",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Six Core Disciplines",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Supporting Disciplines",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "Workload Distribution Hump Chart",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "Throw-away Prototyping Purpose",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "Evolutionary Prototyping Mechanism",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "Prototype vs Production Reality",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Best Practice: Visual Modeling",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Best Practice: Component Architectures",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Tooling Dependency & Decline",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s51-mcq-017",
    "topic": "RUP Inception Characteristics",
    "difficulty": "hard",
    "question": "According to the IU course book, why are iterations within the phase NOT typical for the RUP Inception phase?",
    "options": {
      "A": "Because of its generic and abstract nature focusing on broad scope and business goals",
      "B": "Because software code must be fully completed and deployed during Inception",
      "C": "Because the Unified Process strictly prohibits meetings during project initiation",
      "D": "Because customer feedback cannot be gathered until after software disposal"
    },
    "correctAnswer": "A",
    "explanation": "Section 5.1 of the course book explicitly notes that while iterations within phases are the norm for Elaboration, Construction, and Transition, this is not typical for the Inception phase because of its generic and abstract nature.",
    "whyOthersAreWrong": [
      "Software coding occurs primarily in Construction, not Inception.",
      "RUP encourages communication and does not prohibit stakeholder meetings.",
      "Customer feedback occurs throughout iterations and especially during Transition, not only after disposal."
    ],
    "examTrap": "Remember that Inception defines initial scope and business case; its abstract nature means multiple internal iterations are not typical.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)",
      "page": 101
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Inception Characteristics",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s51-mcq-018",
    "topic": "RUP Elaboration Phase Modeling",
    "difficulty": "hard",
    "question": "In the RUP Elaboration phase, which modeling tools and diagrams are specifically developed to establish the architectural view of the solution components?",
    "options": {
      "A": "Unified Modeling Language (UML) use cases and class hierarchies",
      "B": "Earned Value Analysis graphs and burn-down charts",
      "C": "PRINCE2 product breakdown structures and exception reports",
      "D": "Single-point deterministic duration estimates"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly states that in the Elaboration phase, specific diagrams are developed using the Unified Modeling Language (UML), including use cases for identifying actors and interactions, and class hierarchies if an object-oriented language is used.",
    "whyOthersAreWrong": [
      "EVM graphs are cost controlling tools in Unit 3, not RUP architectural modeling tools.",
      "PRINCE2 product breakdown structures belong to Unit 6, not RUP Elaboration.",
      "Single-point deterministic estimates do not constitute UML architectural views."
    ],
    "examTrap": "Elaboration is where requirements and UML architectural views (use cases and class hierarchies) are established, along with risk identification.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)",
      "page": 101
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Elaboration Phase Modeling",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Risk-Driven Character",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Iteration Planning",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Use-Case Driven Nature",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Disposal Phase Scope",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Business Modeling Discipline",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP Change Management Discipline",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
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
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.1",
      "topic": "Rational Unified Process (RUP)"
    },
    "sourceUnit": 5,
    "sourceSection": "5.1",
    "sourceTopic": "RUP vs Waterfall Primary Distinction",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-026",
    "topic": "Agile Manifesto Year and Origin",
    "difficulty": "easy",
    "question": "In what year and under what primary motivation was the Agile Manifesto created?",
    "options": {
      "A": "In February 2001, to address the need for flexible, lightweight alternatives to heavyweight, documentation-driven software processes",
      "B": "In 1986, to standardize mainframe computer programming across NATO defense contractors",
      "C": "In 1995, as an official ISO standard for relational database management",
      "D": "In 2011, to establish legal contracts for cloud computing hosting providers"
    },
    "correctAnswer": "A",
    "explanation": "Seventeen software development practitioners gathered in Snowbird, Utah in February 2001 to find common ground among lightweight methods, drafting the Agile Manifesto.",
    "whyOthersAreWrong": [
      "1986 was the year Takeuchi and Nonaka published their rugby paper, not the Agile Manifesto.",
      "1995 was when Scrum was first presented at OOPSLA, not the Agile Manifesto.",
      "2011 is decades after the initial agile revolution."
    ],
    "examTrap": "The Agile Manifesto was drafted in February 2001 by 17 software leaders in Snowbird, Utah.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Manifesto Year and Origin",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-027",
    "topic": "Agile Manifesto Core Value 1",
    "difficulty": "easy",
    "question": "Which of the following is the first value stated in the Agile Manifesto?",
    "options": {
      "A": "Individuals and interactions over processes and tools",
      "B": "Processes and tools over individuals and interactions",
      "C": "Comprehensive documentation over working software",
      "D": "Following a plan over responding to change"
    },
    "correctAnswer": "A",
    "explanation": "The first value of the Agile Manifesto explicitly states: 'Individuals and interactions over processes and tools'.",
    "whyOthersAreWrong": [
      "Reversing the value prioritizes rigid processes over human collaboration.",
      "Comprehensive documentation over working software is the exact opposite of Value 2.",
      "Following a plan over responding to change is the exact opposite of Value 4."
    ],
    "examTrap": "IU exam questions frequently test whether you know which item is on the LEFT (valued more) versus on the RIGHT.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Manifesto Core Value 1",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-028",
    "topic": "Agile Manifesto Core Value 2",
    "difficulty": "easy",
    "question": "What does the second value of the Agile Manifesto prioritize?",
    "options": {
      "A": "Working software over comprehensive documentation",
      "B": "Contract negotiation over customer collaboration",
      "C": "Detailed architectural specifications over executable code",
      "D": "Automated code generation over human review"
    },
    "correctAnswer": "A",
    "explanation": "The second value is: 'Working software over comprehensive documentation'. Working code provides the ultimate proof of progress.",
    "whyOthersAreWrong": [
      "Contract negotiation over customer collaboration is the inverse of Value 3.",
      "Prioritizing specifications over code contradicts the agile emphasis on working software.",
      "Automated code generation is a tool technique, not a manifesto value."
    ],
    "examTrap": "Agile does not forbid documentation; it values working software MORE than comprehensive documentation.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Manifesto Core Value 2",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-029",
    "topic": "Agile Manifesto Core Value 3",
    "difficulty": "easy",
    "question": "Which statement accurately represents the third value of the Agile Manifesto?",
    "options": {
      "A": "Customer collaboration over contract negotiation",
      "B": "Contract negotiation over customer collaboration",
      "C": "Fixed-price bidding over time-and-materials billing",
      "D": "Legal arbitration over customer feedback"
    },
    "correctAnswer": "A",
    "explanation": "Value 3 emphasizes partnering closely with the customer throughout development ('Customer collaboration over contract negotiation').",
    "whyOthersAreWrong": [
      "Inverting the statement reflects traditional adversarial legal procurement.",
      "Fixed-price vs T&M is a commercial contract model, not an Agile Manifesto value.",
      "Legal arbitration is a dispute mechanism, contradicting continuous collaboration."
    ],
    "examTrap": "Contracts remain necessary in agile business, but flexible collaboration takes priority over rigid legalistic enforcement.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Manifesto Core Value 3",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-030",
    "topic": "Agile Manifesto Core Value 4",
    "difficulty": "easy",
    "question": "What is prioritized in the fourth value of the Agile Manifesto?",
    "options": {
      "A": "Responding to change over following a plan",
      "B": "Following a plan over responding to change",
      "C": "Locking down requirements over accommodating user feedback",
      "D": "Eliminating all project schedules and deadlines"
    },
    "correctAnswer": "A",
    "explanation": "Value 4 states: 'Responding to change over following a plan', recognizing that software requirements inevitably evolve as users interact with the system.",
    "whyOthersAreWrong": [
      "Following a plan over responding to change describes the rigidity of traditional plan-driven management.",
      "Locking down requirements prevents agile adaptation.",
      "Agile uses strict sprint schedules and time-boxes; it never eliminates deadlines."
    ],
    "examTrap": "Agile teams DO plan (Sprint Planning, Release Planning), but they adapt their plans when reality changes.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Manifesto Core Value 4",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-031",
    "topic": "Manifesto Right vs Left Interpretation",
    "difficulty": "medium",
    "question": "What closing qualifying sentence appears in the Agile Manifesto regarding the items on the right versus the left?",
    "options": {
      "A": "'That is, while there is value in the items on the right, we value the items on the left more.'",
      "B": "'All items on the right are considered harmful and must be eliminated immediately.'",
      "C": "'Items on the right are strictly reserved for government defense projects.'",
      "D": "'Only certified Scrum Masters may interpret items on the right.'"
    },
    "correctAnswer": "A",
    "explanation": "The authors explicitly noted: 'That is, while there is value in the items on the right, we value the items on the left more.' Processes, documentation, contracts, and plans still have value.",
    "whyOthersAreWrong": [
      "Agile does not claim processes or documentation are harmful; it balances them against working value.",
      "Items on the right apply across all industries, not just defense.",
      "Any practitioner can interpret the values; no proprietary certification is required."
    ],
    "examTrap": "Never select options stating that Agile abandons all planning or documentation. The right-hand items still hold value.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Manifesto Right vs Left Interpretation",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-032",
    "topic": "Agile Principle 1: Customer Satisfaction",
    "difficulty": "easy",
    "question": "According to the first principle of the Agile Manifesto, what is the highest priority?",
    "options": {
      "A": "To satisfy the customer through early and continuous delivery of valuable software",
      "B": "To minimize developer overtime hours at all costs",
      "C": "To write exhaustive technical manuals before coding begins",
      "D": "To ensure 100% compliance with ISO 9001 audit standards"
    },
    "correctAnswer": "A",
    "explanation": "Principle 1 states: 'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.'",
    "whyOthersAreWrong": [
      "Sustainable pace is Principle 8, not the declared highest priority.",
      "Exhaustive manuals contradict the core values of agile.",
      "ISO compliance is an external audit concern, not an Agile Manifesto principle."
    ],
    "examTrap": "Principle 1 links customer satisfaction directly to *early and continuous delivery*.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 1: Customer Satisfaction",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-033",
    "topic": "Agile Principle 2: Welcoming Change",
    "difficulty": "medium",
    "question": "What is the agile attitude toward changing requirements late in development according to Principle 2?",
    "options": {
      "A": "Welcome changing requirements, even late in development, to harness change for customer competitive advantage",
      "B": "Reject all late changes through formal change-control penalties",
      "C": "Accept changes only if the customer signs a double-rate fee amendment",
      "D": "Require the customer to undergo a psychiatric evaluation"
    },
    "correctAnswer": "A",
    "explanation": "Principle 2 states: 'Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.'",
    "whyOthersAreWrong": [
      "Rejecting late changes is a classic waterfall change control behavior.",
      "Financial penalties undermine collaboration.",
      "Absurd distractor."
    ],
    "examTrap": "Traditional project management treats late change as a risk to be suppressed; agile treats change as a competitive opportunity.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 2: Welcoming Change",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-034",
    "topic": "Agile Principle 3: Delivery Frequency",
    "difficulty": "medium",
    "question": "Principle 3 advises delivering working software frequently with what preferred timeframe?",
    "options": {
      "A": "From a couple of weeks to a couple of months, with a preference to the shorter timescale",
      "B": "Every 12 to 18 months in major enterprise releases",
      "C": "Once every five business years",
      "D": "Only when all project budget funds have been fully expended"
    },
    "correctAnswer": "A",
    "explanation": "Principle 3 specifies delivery frequency: 'from a couple of weeks to a couple of months, with a preference to the shorter timescale.'",
    "whyOthersAreWrong": [
      "12 to 18 months represents traditional legacy release cycles.",
      "Five years is completely unviable in modern IT.",
      "Releasing only when funds expire is a project failure symptom."
    ],
    "examTrap": "Remember the exact wording: 'from a couple of weeks to a couple of months, with a preference to the shorter timescale'.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 3: Delivery Frequency",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-035",
    "topic": "Agile Principle 4: Daily Collaboration",
    "difficulty": "easy",
    "question": "Who must work together daily throughout the project according to Agile Principle 4?",
    "options": {
      "A": "Business people and developers",
      "B": "External auditors and tax accountants",
      "C": "Hardware vendors and facilities managers",
      "D": "Competitors and regulatory agencies"
    },
    "correctAnswer": "A",
    "explanation": "Principle 4 states: 'Business people and developers must work together daily throughout the project.'",
    "whyOthersAreWrong": [
      "Auditors do not collaborate daily with developers.",
      "Hardware vendors provide physical infrastructure periodically.",
      "Competitors do not collaborate inside the project team."
    ],
    "examTrap": "The collaboration is between *business people* (domain experts, Product Owners) and *developers* (engineers).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 4: Daily Collaboration",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-036",
    "topic": "Agile Principle 5: Motivated Individuals",
    "difficulty": "medium",
    "question": "What environment should be provided to project teams according to Agile Principle 5?",
    "options": {
      "A": "Build projects around motivated individuals, give them the environment and support they need, and trust them to get the job done",
      "B": "Install biometric surveillance cameras and track every keystroke",
      "C": "Enforce strict salary deductions for any code that contains bugs",
      "D": "Maintain complete segregation of duties between programmers and testers"
    },
    "correctAnswer": "A",
    "explanation": "Principle 5 emphasizes human trust and empowerment: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.'",
    "whyOthersAreWrong": [
      "Keystroke tracking destroys trust and motivation.",
      "Salary deductions for bugs encourage developers to hide defects.",
      "Segregation of duties contradicts cross-functional collaboration."
    ],
    "examTrap": "Principle 5 explicitly anchors project success in *trusting* motivated individuals rather than micro-managing them.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 5: Motivated Individuals",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-037",
    "topic": "Agile Principle 6: Face-to-Face Communication",
    "difficulty": "easy",
    "question": "What is identified by Agile Principle 6 as the most efficient and effective method of conveying information to and within a development team?",
    "options": {
      "A": "Face-to-face conversation",
      "B": "Detailed formal email threads with legal read receipts",
      "C": "Comprehensive 500-page software requirements specification (SRS) documents",
      "D": "Anonymous suggestion boxes in the breakroom"
    },
    "correctAnswer": "A",
    "explanation": "Principle 6 states: 'The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.'",
    "whyOthersAreWrong": [
      "Email threads lack real-time nonverbal feedback and rich context.",
      "Long SRS documents are slow to read and rapidly become obsolete.",
      "Anonymous suggestion boxes are detached and unsuited for technical design."
    ],
    "examTrap": "Face-to-face communication (including high-bandwidth video for distributed teams) minimizes misunderstanding compared to text documentation.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 6: Face-to-Face Communication",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-038",
    "topic": "Agile Principle 7: Primary Progress Measure",
    "difficulty": "easy",
    "question": "What is the primary measure of progress according to Agile Principle 7?",
    "options": {
      "A": "Working software",
      "B": "Number of pages of documentation written",
      "C": "Percentage of total project budget spent",
      "D": "Number of hours developers spent logged into the IDE"
    },
    "correctAnswer": "A",
    "explanation": "Principle 7 is concise and explicit: 'Working software is the primary measure of progress.'",
    "whyOthersAreWrong": [
      "Documentation volume does not prove the system functions or satisfies users.",
      "Spending budget measures cost burn, not delivered value.",
      "Hours logged measures input/effort, not valuable output."
    ],
    "examTrap": "Do not select 'earned value' or 'hours worked'. In the Agile Manifesto, progress is measured strictly by *working software*.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 7: Primary Progress Measure",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-039",
    "topic": "Agile Principle 8: Sustainable Development",
    "difficulty": "medium",
    "question": "What does Agile Principle 8 state regarding the development pace of sponsors, developers, and users?",
    "options": {
      "A": "They should be able to maintain a constant pace indefinitely",
      "B": "They should work 80-hour weeks during the final month of every sprint",
      "C": "Developers should code as fast as possible in week 1 and take week 2 off",
      "D": "Sponsors should dictate daily work hours using biometric clocks"
    },
    "correctAnswer": "A",
    "explanation": "Principle 8 promotes sustainability: 'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.'",
    "whyOthersAreWrong": [
      "Crunch time and 80-hour weeks lead to developer burnout, severe bugs, and attrition.",
      "Erratic burst work undermines predictability and quality.",
      "Biometric surveillance destroys professional autonomy."
    ],
    "examTrap": "Agile explicitly rejects hero-driven 'death marches' in favor of a predictable, sustainable, constant pace.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 8: Sustainable Development",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-040",
    "topic": "Agile Principle 9: Technical Excellence",
    "difficulty": "medium",
    "question": "According to Principle 9, what enhances agility over the long term?",
    "options": {
      "A": "Continuous attention to technical excellence and good design",
      "B": "Writing quick 'dirty' hacks to meet deadlines without automated tests",
      "C": "Purchasing the most expensive enterprise server licenses",
      "D": "Outsourcing 100% of software testing to overseas contractors"
    },
    "correctAnswer": "A",
    "explanation": "Principle 9 states: 'Continuous attention to technical excellence and good design enhances agility.' High-quality code makes future modifications fast and safe.",
    "whyOthersAreWrong": [
      "Dirty hacks accumulate technical debt, causing the software to become brittle and unchangeable.",
      "Hardware licenses do not substitute for good software architecture.",
      "Outsourcing testing does not replace technical engineering discipline."
    ],
    "examTrap": "Agility is not fast, sloppy coding. Agility requires high code craftsmanship so the software remains easy to adapt.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 9: Technical Excellence",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-041",
    "topic": "Agile Principle 10: Definition of Simplicity",
    "difficulty": "hard",
    "question": "How is 'Simplicity' formally defined in Principle 10 of the Agile Manifesto?",
    "options": {
      "A": "The art of maximizing the amount of work not done",
      "B": "Writing code using only basic if-else statements",
      "C": "Restricting software applications to a single screen interface",
      "D": "Refusing to implement any user authentication or security protocols"
    },
    "correctAnswer": "A",
    "explanation": "Principle 10 provides the famous definition: 'Simplicity\u2014the art of maximizing the amount of work not done\u2014is essential.'",
    "whyOthersAreWrong": [
      "Basic if-else statements relate to coding syntax, not manifesto simplicity.",
      "Single-screen limits are arbitrary UI constraints.",
      "Omitting security is negligence, not simplicity."
    ],
    "examTrap": "Memorize this exact phrasing: 'the art of maximizing the amount of work not done'. It is a frequent IU exam trap.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 10: Definition of Simplicity",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-042",
    "topic": "Agile Principle 11: Self-Organizing Teams",
    "difficulty": "medium",
    "question": "What emerges from self-organizing teams according to Agile Principle 11?",
    "options": {
      "A": "The best architectures, requirements, and designs",
      "B": "Total organizational chaos and endless debating",
      "C": "The complete elimination of the need for software testing",
      "D": "Automatic generation of database schemas without human input"
    },
    "correctAnswer": "A",
    "explanation": "Principle 11 states: 'The best architectures, requirements, and designs emerge from self-organizing teams.'",
    "whyOthersAreWrong": [
      "Agile frameworks prevent chaos through regular inspection and empirical time-boxing.",
      "Testing remains essential and integrated into the definition of done.",
      "Automated tools aid design, but teams generate the architectures."
    ],
    "examTrap": "Principle 11 asserts that architecture is not solely handed down by an ivory-tower chief architect, but emerges from collaborative team insight.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 11: Self-Organizing Teams",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-043",
    "topic": "Agile Principle 12: Regular Reflection",
    "difficulty": "easy",
    "question": "What action does the team undertake at regular intervals according to Agile Principle 12?",
    "options": {
      "A": "Reflects on how to become more effective, then tunes and adjusts its behavior accordingly",
      "B": "Audits the personal financial bank accounts of all team members",
      "C": "Rewrites the entire codebase in a newly trending programming language",
      "D": "Elects a new project sponsor from among the customer user base"
    },
    "correctAnswer": "A",
    "explanation": "Principle 12 provides the foundation for the Sprint Retrospective: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.'",
    "whyOthersAreWrong": [
      "Personal bank accounts have nothing to do with agile team effectiveness.",
      "Rewriting code in new trending languages is reckless churn.",
      "Project sponsors are executive funding stakeholders, not elected team members."
    ],
    "examTrap": "Principle 12 is the origin of the Sprint Retrospective ceremony.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Principle 12: Regular Reflection",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-044",
    "topic": "Self-Organizing Teams: Authority Boundaries",
    "difficulty": "medium",
    "question": "In a self-organizing agile team, what specific authority does the team hold?",
    "options": {
      "A": "The autonomy to decide HOW to execute and accomplish the agreed-upon sprint work",
      "B": "The unilateral authority to change corporate pricing and marketing budgets",
      "C": "The right to cancel the project without notifying executive management",
      "D": "The power to hire and fire executive board members"
    },
    "correctAnswer": "A",
    "explanation": "Self-organization gives the team professional autonomy over HOW the work is accomplished (design, task distribution, implementation techniques), while the Product Owner defines WHAT must be built.",
    "whyOthersAreWrong": [
      "Corporate pricing and marketing belong to executive business management.",
      "Project cancellation is an executive sponsor prerogative.",
      "Hiring/firing board members belongs to shareholders and trustees."
    ],
    "examTrap": "Self-organization does NOT mean the team chooses what business products to build. The Product Owner owns the 'What'; the team owns the 'How'.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Self-Organizing Teams: Authority Boundaries",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-045",
    "topic": "Agile Team Communication",
    "difficulty": "medium",
    "question": "According to Cockburn & Highsmith (cited in the course book), what is the core ingredient that makes self-organizing teams exceptionally effective?",
    "options": {
      "A": "High-bandwidth, frequent, and open communication",
      "B": "Strict non-disclosure agreements enforced between teammates",
      "C": "Monetary bonuses distributed daily to the top coder",
      "D": "Exclusively communicating through formal Jira ticket comments"
    },
    "correctAnswer": "A",
    "explanation": "Cockburn & Highsmith emphasize that what makes self-organizing agile teams exceptional is communication\u2014continuous, direct, informal, and collaborative interaction.",
    "whyOthersAreWrong": [
      "NDAs between teammates destroy trust and open knowledge sharing.",
      "Daily individual bonuses create toxic internal competition.",
      "Relying solely on Jira comments slows communication and increases misunderstanding."
    ],
    "examTrap": "Communication is the lifeblood of agile; processes and tools are secondary to human conversation.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Team Communication",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-046",
    "topic": "Software Versioning Format",
    "difficulty": "easy",
    "question": "What standard four-element format is used for software release versioning as described in the course book?",
    "options": {
      "A": "major.minor.build.revision",
      "B": "year.month.day.hour",
      "C": "alpha.beta.release.candidate",
      "D": "phase.stage.gate.milestone"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly details the standard software versioning scheme: 'major.minor.build.revision' (e.g., 4.2.5.9).",
    "whyOthersAreWrong": [
      "Year.month.day is calendar versioning (CalVer), not the standard semantic 4-part schema in the book.",
      "Alpha/beta/RC are release lifecycle tags, not the 4-part numeric schema.",
      "Phase.stage.gate is project governance terminology."
    ],
    "examTrap": "Memorize the exact four terms in order: major, minor, build, revision.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Software Versioning Format",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-047",
    "topic": "Software Versioning: Major Number",
    "difficulty": "medium",
    "question": "In the version number '4.2.5.9', what does the first number ('4') signify?",
    "options": {
      "A": "The fourth major release of the software, typically involving substantial architectural changes or new functionality",
      "B": "That the software requires 4 gigabytes of RAM to execute",
      "C": "That exactly four developers wrote the codebase",
      "D": "That the software has a four-year warranty period"
    },
    "correctAnswer": "A",
    "explanation": "The 'major' number represents significant, foundational releases that often include breaking architectural changes or major feature sets.",
    "whyOthersAreWrong": [
      "Memory requirements are hardware specifications, not version identifiers.",
      "Team size is unrelated to the release version number.",
      "Warranty duration is a legal contract term."
    ],
    "examTrap": "A major version increment signals fundamental changes; older APIs may be deprecated.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Software Versioning: Major Number",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-048",
    "topic": "Software Versioning: Minor Number",
    "difficulty": "medium",
    "question": "In the version identifier '4.2.5.9', what does the second number ('2') indicate?",
    "options": {
      "A": "The second minor release, representing smaller feature additions or enhancements compatible with the major architecture",
      "B": "The number of supported operating system platforms",
      "C": "That the software is in its second day of deployment",
      "D": "The number of database tables used"
    },
    "correctAnswer": "A",
    "explanation": "The 'minor' number indicates smaller feature additions, enhancements, or capabilities that remain backward-compatible with the major release.",
    "whyOthersAreWrong": [
      "Platform compatibility is noted in system requirements.",
      "Days of deployment is operational uptime data.",
      "Database table count is an internal schema metric."
    ],
    "examTrap": "Minor increments add features without breaking existing architectural compatibility.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Software Processes",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-049",
    "topic": "Software Versioning: Build and Revision",
    "difficulty": "medium",
    "question": "In the version identifier '4.2.5.9', what do the final two numbers ('5' and '9') specifically designate?",
    "options": {
      "A": "The 5th compilation build and the 9th bugfix revision",
      "B": "5 days of development time and 9 hours of testing",
      "C": "5 customer complaints and 9 resolved tickets",
      "D": "Release month (May) and release day (9th)"
    },
    "correctAnswer": "A",
    "explanation": "According to the course book's explicit example: '4.2.5.9 indicates this is the fourth major release, the second minor release, the fifth build, and the ninth revision.'",
    "whyOthersAreWrong": [
      "Development hours are tracked in timesheets, not version numbers.",
      "Complaint counts are customer support metrics.",
      "Calendar dates are not encoded in the standard semantic 4-part build schema."
    ],
    "examTrap": "The sequence is: Build (compilation iteration) then Revision (patch/bugfix iteration).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Software Versioning: Build and Revision",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-050",
    "topic": "Cross-Functional Agile Team",
    "difficulty": "easy",
    "question": "What is the defining characteristic of a 'cross-functional' agile development team?",
    "options": {
      "A": "The team possesses all skills (e.g. analysis, design, coding, testing, deployment) necessary to produce a working increment without relying on external hand-offs",
      "B": "Every team member works for a completely different competing software corporation",
      "C": "The team only writes code that operates across multiple hardware microprocessors",
      "D": "Team members change their job titles randomly every Monday"
    },
    "correctAnswer": "A",
    "explanation": "Cross-functional teams contain all competencies required to deliver valuable software end-to-end, eliminating dependency queues and hand-off delays between separate departmental silos.",
    "whyOthersAreWrong": [
      "Teammates working for competitors would breach confidentiality.",
      "Microprocessor portability is a software runtime property, not team organization.",
      "Changing job titles randomly causes confusion and serves no engineering purpose."
    ],
    "examTrap": "Cross-functional means having all required skills inside the team, so they do not wait on external departments to complete work.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Cross-Functional Agile Team",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-051",
    "topic": "Mutual Accountability in Agile",
    "difficulty": "medium",
    "question": "How does accountability operate within a true self-organizing agile team?",
    "options": {
      "A": "Accountability is shared mutually across the entire team; the team succeeds or fails collectively as a unit",
      "B": "The project manager identifies and publicly punishes the single lowest-performing developer each Friday",
      "C": "Developers blame the testing team whenever a bug escapes into production",
      "D": "External auditors bear full personal liability for all software crashes"
    },
    "correctAnswer": "A",
    "explanation": "Agile self-organizing teams practice collective ownership and mutual accountability. No individual is singled out; the entire team takes joint responsibility for delivering the increment.",
    "whyOthersAreWrong": [
      "Public punishment destroys team psychological safety and collaboration.",
      "Blaming other specialists reintroduces toxic organizational silos.",
      "Auditors assess compliance; they do not bear operational liability for software crashes."
    ],
    "examTrap": "In agile, there are no individual finger-pointing exercises; success and failure belong collectively to the entire team.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Mutual Accountability in Agile",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-052",
    "topic": "Agile Response to Requirement Uncertainty",
    "difficulty": "medium",
    "question": "Why is agile particularly superior to plan-driven models when requirements are highly uncertain or evolving?",
    "options": {
      "A": "Frequent short delivery cycles provide rapid real-world feedback, allowing course corrections before major resources are misdirected",
      "B": "Agile eliminates the need to pay software developers salaries until requirements are certain",
      "C": "Agile legally releases the development company from all liability for delivering working systems",
      "D": "Agile allows developers to ignore user complaints permanently"
    },
    "correctAnswer": "A",
    "explanation": "Short iterative cycles generate tangible increments that users inspect, revealing misunderstood or emerging requirements early when changes are cheap and easy to make.",
    "whyOthersAreWrong": [
      "Developers are compensated on time/salary regardless of methodology.",
      "Agile contracts do not grant immunity from delivering quality software.",
      "Agile actively seeks and embraces user feedback rather than ignoring complaints."
    ],
    "examTrap": "Plan-driven models assume requirements can be fully known upfront. Agile assumes requirements will evolve as users experience working software.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Response to Requirement Uncertainty",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-053",
    "topic": "Agile Documentation Perspective",
    "difficulty": "hard",
    "question": "What is the accurate characterization of documentation in agile software development?",
    "options": {
      "A": "Documentation should be 'barely sufficient' and purposeful, created only to support value delivery without becoming an administrative burden",
      "B": "Documentation is strictly forbidden by the Agile Manifesto and will void Scrum certification",
      "C": "Documentation must be at least twice as long as the underlying computer source code",
      "D": "Documentation is only written in binary machine code"
    },
    "correctAnswer": "A",
    "explanation": "Agile does not eliminate documentation; it advocates creating lean, purposeful documentation that directly aids development, maintenance, and onboarding, avoiding wasteful over-documentation.",
    "whyOthersAreWrong": [
      "The manifesto explicitly affirms that documentation has value; it is never forbidden.",
      "Arbitrary length rules promote wasteful fluff.",
      "Documentation is written in human languages for human communication."
    ],
    "examTrap": "Exam trap: 'Agile eliminates documentation'. Correct answer: Agile values working software MORE, keeping documentation concise and fit-for-purpose.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Documentation Perspective",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-054",
    "topic": "Agile Technical Debt Management",
    "difficulty": "hard",
    "question": "How do agile principles prevent the dangerous accumulation of 'technical debt'?",
    "options": {
      "A": "Through continuous attention to technical excellence, refactoring, automated testing, and sustainable pace",
      "B": "By borrowing financial loans from commercial banks to pay off software developers",
      "C": "By declaring that old code will never need to be maintained",
      "D": "By deleting 50% of the codebase randomly at the end of every calendar quarter"
    },
    "correctAnswer": "A",
    "explanation": "Agile emphasizes continuous refactoring, automated unit/integration testing, peer review, and maintaining clean code (Principle 9) during every single sprint so technical debt never compounds.",
    "whyOthersAreWrong": [
      "Technical debt is an engineering metaphor for messy code and architectural shortcuts, not a bank loan.",
      "Code must always be maintained; ignoring it leads to system failure.",
      "Random deletion is destructive absurdity."
    ],
    "examTrap": "Technical debt is repaid through continuous refactoring and high quality standards in the Definition of Done.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Technical Debt Management",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s52-mcq-055",
    "topic": "Agile Customer Collaboration Practical Implementation",
    "difficulty": "medium",
    "question": "In practice, how is 'customer collaboration' operationalized on a day-to-day agile project?",
    "options": {
      "A": "Through continuous involvement of a dedicated customer representative (such as a Product Owner) embedded with the development team",
      "B": "By having customers inspect the software once a year at an annual general meeting",
      "C": "By communicating exclusively through corporate legal counsel",
      "D": "By sending customers marketing newsletters once per quarter"
    },
    "correctAnswer": "A",
    "explanation": "Customer collaboration requires continuous, intimate interaction\u2014typically embodied by an empowered Product Owner or on-site customer representative who clarifies requirements daily and provides immediate feedback.",
    "whyOthersAreWrong": [
      "Annual inspection provides feedback far too late to guide development.",
      "Legal counsel creates friction and slows communication.",
      "Marketing newsletters are one-way promotional broadcasts, not collaborative engineering."
    ],
    "examTrap": "Agile collaboration is daily and embedded, not an annual or quarterly contractual review.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.2",
      "topic": "Agile Software Processes"
    },
    "sourceUnit": 5,
    "sourceSection": "5.2",
    "sourceTopic": "Agile Customer Collaboration Practical Implementation",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-056",
    "topic": "Scrum Historical Origin",
    "difficulty": "easy",
    "question": "From which sport and seminal research paper was the term 'Scrum' originally derived in product development?",
    "options": {
      "A": "Rugby, from Takeuchi and Nonaka's 1986 Harvard Business Review paper 'The New New Product Development Game'",
      "B": "American Football, from Vince Lombardi's playbook in 1968",
      "C": "Cricket, from the Marylebone Cricket Club rules of 1788",
      "D": "Rowing, from the Oxford-Cambridge Boat Race guidelines of 1920"
    },
    "correctAnswer": "A",
    "explanation": "Takeuchi and Nonaka (1986) used the metaphor of a rugby scrum\u2014where a team moves forward together passing the ball back and forth\u2014to describe high-performing self-organizing teams.",
    "whyOthersAreWrong": [
      "Lombardi and American football are unrelated to the origin of the term Scrum.",
      "Cricket is an individual batting/bowling sport, not the source of Scrum.",
      "Rowing uses crew metaphors, not the rugby scrummage."
    ],
    "examTrap": "Remember Takeuchi & Nonaka (1986) and the rugby scrummage metaphor.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Historical Origin",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-057",
    "topic": "Empirical Process Control Pillars",
    "difficulty": "easy",
    "question": "Scrum is founded on empirical process control theory. Which three pillars uphold all empirical implementation in Scrum?",
    "options": {
      "A": "Transparency, Inspection, Adaptation",
      "B": "Planning, Scheduling, Monitoring",
      "C": "Scope, Schedule, Budget",
      "D": "Command, Control, Compliance"
    },
    "correctAnswer": "A",
    "explanation": "Empirical process control in Scrum relies strictly on three pillars: Transparency (visibility of significant aspects), Inspection (frequent evaluation of artifacts), and Adaptation (prompt adjustment).",
    "whyOthersAreWrong": [
      "Planning, Scheduling, Monitoring are traditional management activities.",
      "Scope, Schedule, Budget form the Iron Triangle constraints.",
      "Command, Control, Compliance represent outdated authoritarian management."
    ],
    "examTrap": "Do not confuse the 3 Empirical Pillars (Transparency, Inspection, Adaptation) with the 5 Scrum Values or 3 Roles.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Empirical Process Control Pillars",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-058",
    "topic": "Scrum Pillar: Transparency",
    "difficulty": "medium",
    "question": "What is required to achieve 'Transparency' according to Scrum theory?",
    "options": {
      "A": "Significant aspects of the process must be visible to those responsible for the outcome, defined by a common standard",
      "B": "All computer source code must be published publicly on the internet for free",
      "C": "Employees must work in offices with glass walls and no private doors",
      "D": "All personal salaries and tax returns must be posted on the team whiteboard"
    },
    "correctAnswer": "A",
    "explanation": "Transparency requires that observers share a common standard of understanding (e.g. a shared Definition of Done) and that artifacts and status are openly visible without obfuscation.",
    "whyOthersAreWrong": [
      "Transparency in Scrum does not mean making proprietary commercial IP open source.",
      "Glass office walls are physical architecture, not Scrum process transparency.",
      "Personal salaries are confidential HR information, unrelated to sprint artifact transparency."
    ],
    "examTrap": "Transparency requires a *common standard*\u2014if people define 'Done' differently, transparency is destroyed.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Pillar: Transparency",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-059",
    "topic": "Scrum Pillar: Inspection",
    "difficulty": "medium",
    "question": "How should 'Inspection' be conducted in Scrum so it remains beneficial?",
    "options": {
      "A": "Scrum users must frequently inspect Scrum artifacts and progress toward goals, but not so frequently that it gets in the way of the work",
      "B": "Inspection must be performed exclusively by an external government regulatory inspector",
      "C": "Inspection must occur continuously every 15 minutes throughout the entire working day",
      "D": "Inspection is prohibited until the entire project is completed and shipped"
    },
    "correctAnswer": "A",
    "explanation": "Inspection must be frequent enough to detect variances early, but must not be executed so excessively as to disrupt developer focus and flow.",
    "whyOthersAreWrong": [
      "Inspection is conducted internally by the Scrum team and stakeholders, not just external regulators.",
      "Inspecting every 15 minutes would paralyze development.",
      "Inspecting only at project end is the failing pattern of waterfall."
    ],
    "examTrap": "Scrum provides formal inspection events (Daily Scrum, Review, Retrospective) specifically to prevent ad-hoc inspection disruptions.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Pillar: Inspection",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-060",
    "topic": "Scrum Pillar: Adaptation",
    "difficulty": "easy",
    "question": "When does 'Adaptation' occur within an empirical Scrum process?",
    "options": {
      "A": "As soon as an inspection determines that one or more aspects of a process deviate outside acceptable limits",
      "B": "Only after receiving permission from a corporate change control board six months later",
      "C": "Only when the company changes its corporate brand logo",
      "D": "Never, because Scrum processes are permanently immutable"
    },
    "correctAnswer": "A",
    "explanation": "If inspection reveals process or product deviation from acceptable tolerances, an adjustment must be made as quickly as possible to minimize further divergence.",
    "whyOthersAreWrong": [
      "Waiting six months for CCB approval destroys agility and permits compounding errors.",
      "Corporate logo redesign has no bearing on software sprint adaptation.",
      "Scrum processes thrive on empirical adjustment; they are never immutable."
    ],
    "examTrap": "Adaptation must happen *as quickly as possible* to stop further defect accumulation.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Pillar: Adaptation",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-061",
    "topic": "Five Scrum Values",
    "difficulty": "medium",
    "question": "Which of the following correctly lists the five core values of Scrum?",
    "options": {
      "A": "Commitment, Courage, Focus, Openness, Respect",
      "B": "Efficiency, Speed, Secrecy, Compliance, Authority",
      "C": "Honesty, Profitability, Punctuality, Loyalty, Order",
      "D": "Transparency, Inspection, Adaptation, Feedback, Simplicity"
    },
    "correctAnswer": "A",
    "explanation": "The five foundational values of Scrum are Commitment, Courage, Focus, Openness, and Respect.",
    "whyOthersAreWrong": [
      "Secrecy and Authority directly contradict agile openness and autonomy.",
      "Honesty and Profitability are general business terms, not the 5 specific Scrum values.",
      "Transparency, Inspection, Adaptation are the 3 empirical pillars, not values."
    ],
    "examTrap": "Do not mix the 3 pillars (Transparency, Inspection, Adaptation) with the 5 values (Commitment, Courage, Focus, Openness, Respect).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Five Scrum Values",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-062",
    "topic": "Three Scrum Roles",
    "difficulty": "easy",
    "question": "Which three roles constitute the entire Scrum Team?",
    "options": {
      "A": "Product Owner, Scrum Master, Developers (Development Team)",
      "B": "Project Manager, Technical Lead, Quality Assurance Director",
      "C": "Business Analyst, Systems Architect, Chief Executive Officer",
      "D": "Program Sponsor, Database Administrator, Scrum Coordinator"
    },
    "correctAnswer": "A",
    "explanation": "Scrum defines exactly three accountabilities/roles: Product Owner, Scrum Master, and Developers (Development Team).",
    "whyOthersAreWrong": [
      "Project Manager and QA Director do not exist as formal roles in Scrum.",
      "Business Analyst and Architect titles are subsumed into the cross-functional Developers group.",
      "Program Sponsor and Scrum Coordinator are not standard Scrum roles."
    ],
    "examTrap": "There is NO 'Project Manager' role in Scrum. Any option featuring 'Project Manager' as a formal Scrum role is incorrect.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Three Scrum Roles",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-063",
    "topic": "Role of the Product Owner",
    "difficulty": "easy",
    "question": "What is the primary responsibility of the Product Owner in Scrum?",
    "options": {
      "A": "Maximizing the value of the product and exclusively managing and ordering the Product Backlog",
      "B": "Assigning daily programming tasks to individual developers",
      "C": "Enforcing coding syntax guidelines during automated builds",
      "D": "Removing hardware networking cables from the office"
    },
    "correctAnswer": "A",
    "explanation": "The Product Owner is the sole person accountable for maximizing the value of the product resulting from work of the Development Team, and the sole owner of Product Backlog management.",
    "whyOthersAreWrong": [
      "Developers self-organize and pick their own tasks; the PO never micro-manages task assignments.",
      "Coding syntax is governed by the engineering team's standards in the DoD.",
      "Hardware cabling is IT facilities work."
    ],
    "examTrap": "The Product Owner owns WHAT gets built and in what order, but NEVER dictates HOW developers build it.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Role of the Product Owner",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-064",
    "topic": "Product Owner Single Accountability",
    "difficulty": "medium",
    "question": "Can the Product Owner role in Scrum be executed by a committee?",
    "options": {
      "A": "No, the Product Owner must be one single person, even though they may represent the desires of a committee",
      "B": "Yes, Scrum mandates that the Product Owner consist of at least five rotating department heads",
      "C": "Yes, but only if all members of the committee are certified software testers",
      "D": "No, the Product Owner must be an automated artificial intelligence bot"
    },
    "correctAnswer": "A",
    "explanation": "In Scrum, the Product Owner is one person, not a committee. The PO may represent a committee or diverse stakeholders, but decision-making authority for backlog prioritization rests in one clear individual.",
    "whyOthersAreWrong": [
      "A committee PO creates conflicting priorities, political paralysis, and lack of accountability.",
      "Tester certification does not qualify a committee to act as PO.",
      "The PO must be an empowered human business leader."
    ],
    "examTrap": "The PO is strictly ONE person. If a committee wants a backlog change, they must convince the single Product Owner.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Product Owner Single Accountability",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-065",
    "topic": "Role of the Scrum Master",
    "difficulty": "easy",
    "question": "What is the primary role of the Scrum Master?",
    "options": {
      "A": "To act as a servant-leader, coach the team on Scrum theory and practices, and remove impediments to progress",
      "B": "To act as the technical chief architect and write all complex algorithms",
      "C": "To approve developer vacation requests and write annual performance reviews",
      "D": "To negotiate commercial pricing with external corporate customers"
    },
    "correctAnswer": "A",
    "explanation": "The Scrum Master is a servant-leader who helps those outside the Scrum Team understand how to interact productively, facilitates events, and clears obstacles (impediments) blocking the Developers.",
    "whyOthersAreWrong": [
      "The Scrum Master is not necessarily the chief architect; technical design belongs to Developers.",
      "The Scrum Master is not a line manager and does not conduct HR performance reviews.",
      "Commercial negotiations belong to sales and the Product Owner."
    ],
    "examTrap": "The Scrum Master has NO managerial authority over team members; they serve and coach the team.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Role of the Scrum Master",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-066",
    "topic": "Traditional PM Absence in Scrum",
    "difficulty": "medium",
    "question": "Where do traditional Project Manager responsibilities reside within Scrum?",
    "options": {
      "A": "They are split and distributed between the Product Owner, the Scrum Master, and the self-organizing Developers",
      "B": "They are transferred entirely to the corporate legal department",
      "C": "They are permanently discarded and never executed by anyone",
      "D": "They are handled by an external project management office director who attends daily standups"
    },
    "correctAnswer": "A",
    "explanation": "Scrum contains no single Project Manager role. Scope and budget are managed by the PO; process and facilitation by the SM; schedule and task execution by the Developers.",
    "whyOthersAreWrong": [
      "Legal handles legal risks, not daily PM duties.",
      "PM activities (scheduling, budgeting, quality control) are essential and actively handled across the 3 Scrum roles.",
      "PMO directors do not attend or direct daily Scrum standups."
    ],
    "examTrap": "Classic exam question: 'Who is the project manager in Scrum?' Answer: Scrum has no project manager; duties are distributed across PO, SM, and Developers.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Traditional PM Absence in Scrum",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-067",
    "topic": "Development Team Size",
    "difficulty": "medium",
    "question": "What is the typical optimal size for a Development Team in Scrum as noted in the course book?",
    "options": {
      "A": "Typically between 5 and 9 members",
      "B": "Between 25 and 50 members",
      "C": "Exactly 2 members (pair programming)",
      "D": "At least 100 members"
    },
    "correctAnswer": "A",
    "explanation": "The course book cites the classic guideline that development teams typically consist of 5 to 9 members\u2014small enough to remain nimble and large enough to complete significant work.",
    "whyOthersAreWrong": [
      "25 to 50 members creates severe communication overhead and requires multi-team scaling frameworks.",
      "2 members is an XP pair, not a complete Scrum team.",
      "100 members is an enterprise organization requiring Scaled Agile (ART or LeSS)."
    ],
    "examTrap": "Remember the course book's classic number: 5 to 9 team members.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Development Team Size",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-068",
    "topic": "Scrum Three Artifacts",
    "difficulty": "easy",
    "question": "Which of the following correctly identifies the three formal artifacts defined in Scrum?",
    "options": {
      "A": "Product Backlog, Sprint Backlog, and Increment",
      "B": "Project Charter, Gantt Chart, and Risk Register",
      "C": "Vision Statement, User Stories, and Burn-Down Chart",
      "D": "Business Case, Architecture Document, and Test Plan"
    },
    "correctAnswer": "A",
    "explanation": "Scrum officially specifies three artifacts: Product Backlog, Sprint Backlog, and the Increment.",
    "whyOthersAreWrong": [
      "Project Charter, Gantt Chart, Risk Register are traditional plan-driven artifacts.",
      "User Stories and Burn-Down Charts are common agile techniques, but NOT formal core Scrum artifacts.",
      "Business Case and Architecture Document are RUP/traditional documents."
    ],
    "examTrap": "Burn-down charts and User Stories are widely used, but they are NOT official Scrum artifacts in the formal theory.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Three Artifacts",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-069",
    "topic": "Product Backlog Definition and Ordering",
    "difficulty": "medium",
    "question": "What is the Product Backlog, and who has sole authority to order its items?",
    "options": {
      "A": "An ordered list of everything that might be needed in the product; the Product Owner has sole authority over its order",
      "B": "A list of technical bugs; the lead tester has sole authority over its order",
      "C": "A fixed contract that cannot be modified after project inception; the CEO orders it",
      "D": "A database of completed features; customers vote online to order it"
    },
    "correctAnswer": "A",
    "explanation": "The Product Backlog is an evolving, ordered list of all features, functions, requirements, and fixes for the product. The Product Owner is solely responsible for its content and order.",
    "whyOthersAreWrong": [
      "The backlog contains all features and user value, not merely technical bugs.",
      "The backlog is dynamic and continuously refined, never a frozen contract.",
      "Customers provide input, but the PO has sole ordering authority."
    ],
    "examTrap": "The Product Backlog is never complete; it evolves dynamically as long as the product exists.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Product Backlog Definition and Ordering",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-070",
    "topic": "Sprint Backlog Ownership",
    "difficulty": "medium",
    "question": "Who owns the Sprint Backlog, and who can make changes to it during an active Sprint?",
    "options": {
      "A": "The Developers solely own the Sprint Backlog and are the only ones who can modify its tasks during the sprint",
      "B": "The Product Owner owns the Sprint Backlog and reassigns tasks daily",
      "C": "The Scrum Master owns the Sprint Backlog and updates it after each Daily Scrum",
      "D": "The Project Sponsor owns the Sprint Backlog and audits it weekly"
    },
    "correctAnswer": "A",
    "explanation": "The Sprint Backlog is the plan created by and for the Developers. Only the Developers can change its tasks during the Sprint as they decompose work and learn more.",
    "whyOthersAreWrong": [
      "The PO cannot unilaterally add or remove tasks from the Sprint Backlog during an active sprint.",
      "The Scrum Master facilitates the process but does not own or modify the technical task list.",
      "Project sponsors do not manage sprint backlog tasks."
    ],
    "examTrap": "The Product Owner owns the *Product Backlog*, but the Developers own the *Sprint Backlog*.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Backlog Ownership",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-071",
    "topic": "The Product Increment and DoD",
    "difficulty": "medium",
    "question": "What criteria must a piece of software meet to be officially considered part of the Scrum 'Increment'?",
    "options": {
      "A": "It must be in a usable, potentially releasable condition and satisfy 100% of the team's Definition of Done (DoD)",
      "B": "It must be 90% coded, even if no automated tests have been executed",
      "C": "It must be approved by the marketing department's graphic design team",
      "D": "It must be physically burnt onto a read-only optical CD-ROM"
    },
    "correctAnswer": "A",
    "explanation": "An Increment is a concrete stepping stone toward the product goal. At the end of a Sprint, the new Increment must be usable and satisfy the formal Definition of Done.",
    "whyOthersAreWrong": [
      "90% coded is NOT done in Scrum; partially completed work cannot be part of the Increment.",
      "Marketing visual approval is not the technical Definition of Done.",
      "Optical media distribution is obsolete physical deployment."
    ],
    "examTrap": "In Scrum, there is no such thing as '95% done'. If an item does not meet the Definition of Done, it is not part of the Increment.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "The Product Increment and DoD",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-072",
    "topic": "Definition of Done (DoD) Role",
    "difficulty": "easy",
    "question": "What is the primary purpose of the 'Definition of Done' (DoD) in Scrum?",
    "options": {
      "A": "To provide a formal, shared understanding of the quality criteria and completion standards required for an increment to be releasable",
      "B": "To record the exact time each developer clocks out of the office",
      "C": "To establish a legal disclaimer protecting against customer copyright lawsuits",
      "D": "To list the personal hobbies and interests of team members"
    },
    "correctAnswer": "A",
    "explanation": "The Definition of Done creates transparency by providing everyone with a shared understanding of what work was completed to guarantee releasable quality (e.g., tested, reviewed, documented).",
    "whyOthersAreWrong": [
      "Clock-out times are HR timesheet tracking.",
      "Copyright protection is legal affairs.",
      "Personal hobbies have no place in engineering standards."
    ],
    "examTrap": "The DoD prevents developers from declaring code 'done' when it has only been written on their local machine without integration or testing.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Definition of Done (DoD) Role",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-073",
    "topic": "Sprint Task Board Columns",
    "difficulty": "easy",
    "question": "As depicted in Figure 37 of the course book, what standard columns typically organize the visual Sprint Task Board?",
    "options": {
      "A": "To Do, In Progress, Done",
      "B": "Initiated, Planned, Executed, Closed",
      "C": "Phase 1, Phase 2, Phase 3, Phase 4",
      "D": "Approved, Rejected, Suspended, Archived"
    },
    "correctAnswer": "A",
    "explanation": "Course book Figure 37 displays the classic Sprint Task Board tracking user stories and tasks through workflow columns: 'To Do', 'In Progress', and 'Done'.",
    "whyOthersAreWrong": [
      "Initiated, Planned, Executed, Closed are PMBOK groups.",
      "Phase 1 through Phase 4 are project lifecycle stages.",
      "Approved, Rejected, etc. are change request states."
    ],
    "examTrap": "The Task Board provides real-time information radiator transparency on sprint task progress.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Task Board Columns",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-074",
    "topic": "Sprint Duration Limit",
    "difficulty": "medium",
    "question": "What is the standard duration constraint for a Scrum Sprint?",
    "options": {
      "A": "A fixed time-box of one month or less (typically 1 to 4 weeks)",
      "B": "Exactly six months to allow complete system integration",
      "C": "A variable duration that changes every week based on how tired developers feel",
      "D": "As long as necessary until all planned user stories are 100% finished"
    },
    "correctAnswer": "A",
    "explanation": "Sprints are fixed time-boxes of one month or less (most commonly 2 weeks) to maintain a regular cadence and limit financial and planning risk.",
    "whyOthersAreWrong": [
      "Six months is too long, delaying feedback and compounding risk.",
      "Variable sprint lengths disrupt team velocity and forecasting predictability.",
      "Waiting until all stories are done destroys the time-box principle."
    ],
    "examTrap": "Sprints NEVER exceed one month. Their duration is fixed and consistent across the project.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Duration Limit",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-075",
    "topic": "Sprint Time-Box Inviolability",
    "difficulty": "hard",
    "question": "If the Developers realize two days before Sprint end that they cannot complete all planned Sprint Backlog items, what must they do?",
    "options": {
      "A": "End the Sprint on schedule; move incomplete items back to the Product Backlog, and never extend the Sprint deadline",
      "B": "Extend the Sprint deadline by 5 business days until all code is finished",
      "C": "Mark incomplete items as 'Done' and fix them secretly in production",
      "D": "Cancel the entire company and dissolve the corporation"
    },
    "correctAnswer": "A",
    "explanation": "The sprint duration is an inviolable time-box. A Sprint is NEVER extended. Unfinished items are re-estimated, returned to the Product Backlog, and considered for future sprints.",
    "whyOthersAreWrong": [
      "Extending deadlines violates Scrum time-boxing and conceals reality.",
      "Marking incomplete items as Done corrupts the DoD and destroys transparency.",
      "Dissolving the corporation is absurd panic."
    ],
    "examTrap": "NEVER extend a sprint! This is one of the most heavily tested Scrum rules on IU examinations.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Time-Box Inviolability",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-076",
    "topic": "Sprint Planning Meeting Structure",
    "difficulty": "medium",
    "question": "What two fundamental questions does the Scrum Team address during Sprint Planning?",
    "options": {
      "A": "'What can be delivered in this Sprint?' and 'How will the chosen work be accomplished?'",
      "B": "'Who made mistakes in the last release?' and 'How much should their salary be cut?'",
      "C": "'Which vendor offers the cheapest server hardware?' and 'How do we terminate our office lease?'",
      "D": "'What are the total sales figures for the prior fiscal decade?' and 'Who will write the annual report?'"
    },
    "correctAnswer": "A",
    "explanation": "Sprint Planning addresses Topic 1: What can be delivered in this Increment? and Topic 2: How will the chosen work be delivered?",
    "whyOthersAreWrong": [
      "Scrum is blameless; salaries are never docked in planning.",
      "Vendor hardware leases are infrastructure facilities issues.",
      "Decade sales figures are historical corporate reporting."
    ],
    "examTrap": "Sprint Planning covers both WHAT (selecting backlog items) and HOW (designing and breaking down tasks).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Planning Meeting Structure",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-077",
    "topic": "Sprint Planning Time-Box Limit",
    "difficulty": "hard",
    "question": "What is the maximum time-box for a Sprint Planning meeting for a standard one-month Sprint?",
    "options": {
      "A": "Maximum of 8 hours (proportionately shorter for shorter sprints)",
      "B": "Maximum of 30 minutes",
      "C": "Exactly 40 hours (a full working week)",
      "D": "There is no time limit; it continues until every line of code is written"
    },
    "correctAnswer": "A",
    "explanation": "Sprint Planning is time-boxed to a maximum of 8 hours for a one-month Sprint. For shorter Sprints (e.g. 2 weeks), it is proportionally shorter (typically 4 hours).",
    "whyOthersAreWrong": [
      "30 minutes is insufficient to plan a full month of engineering work.",
      "40 hours is wasteful meeting bloat.",
      "No time limit violates the core principle of Scrum time-boxing."
    ],
    "examTrap": "Memorize: 8 hours maximum for a 1-month sprint; 4 hours for a 2-week sprint.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Planning Time-Box Limit",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-078",
    "topic": "Daily Scrum Time-Box",
    "difficulty": "easy",
    "question": "What is the strict time-box for the Daily Scrum meeting?",
    "options": {
      "A": "15 minutes",
      "B": "60 minutes",
      "C": "3 hours",
      "D": "2 minutes per question per developer with a 4-hour cap"
    },
    "correctAnswer": "A",
    "explanation": "The Daily Scrum is strictly time-boxed to 15 minutes, held at the same time and place every working day to maintain simplicity and focus.",
    "whyOthersAreWrong": [
      "60 minutes turns the standup into an exhausting status meeting.",
      "3 hours is an entire half-day lost to discussion.",
      "Complex formulas contradict the clean 15-minute time-box."
    ],
    "examTrap": "Always 15 minutes! The meeting is not for problem-solving; technical follow-ups happen immediately afterwards.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Daily Scrum Time-Box",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-079",
    "topic": "Daily Scrum Three Questions",
    "difficulty": "medium",
    "question": "Which three traditional questions guide team members during the Daily Scrum?",
    "options": {
      "A": "What did I do yesterday? What will I do today? What impediments are in my way?",
      "B": "How much budget was spent? How many lines of code were written? Who was late?",
      "C": "What is the company stock price? When is the next holiday? What is for lunch?",
      "D": "Which customer complained? Why did testing fail? Who should be replaced?"
    },
    "correctAnswer": "A",
    "explanation": "The classic structure of the Daily Scrum centers on: (1) What did I do yesterday that helped the team meet the Sprint Goal? (2) What will I do today? (3) Do I see any impediment that blocks me or the team?",
    "whyOthersAreWrong": [
      "Budget, lines of code, and punctuality are bureaucratic metrics irrelevant to sprint execution.",
      "Stock price and lunch are non-operational distractions.",
      "Blame and complaints undermine psychological safety and peer collaboration."
    ],
    "examTrap": "The 3 questions focus on synchronizing work and identifying impediments toward the Sprint Goal.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Daily Scrum Three Questions",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-080",
    "topic": "Daily Scrum Target Audience",
    "difficulty": "medium",
    "question": "For whom is the Daily Scrum specifically designed, and who participates actively?",
    "options": {
      "A": "It is an internal coordination event for the Developers to synchronize progress and plan their next 24 hours",
      "B": "It is a formal status presentation given by developers to executive corporate managers",
      "C": "It is a sales demonstration for prospective marketing leads",
      "D": "It is a legal deposition conducted by external regulatory compliance officers"
    },
    "correctAnswer": "A",
    "explanation": "The Daily Scrum is by and for the Developers. It is NOT a status meeting for managers or external stakeholders. Outside observers may attend but cannot disrupt the Developers.",
    "whyOthersAreWrong": [
      "Daily Scrum is explicitly not a management reporting session.",
      "Sales demonstrations belong to the Sprint Review, not daily developer standups.",
      "Legal depositions are judicial actions, completely unrelated to agile standups."
    ],
    "examTrap": "The Daily Scrum is NOT a status report to the Scrum Master or Product Owner; it is peer-to-peer developer coordination.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Daily Scrum Target Audience",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-081",
    "topic": "Sprint Review Focus",
    "difficulty": "medium",
    "question": "What is the primary objective of the Sprint Review held at the end of the Sprint?",
    "options": {
      "A": "To inspect the Increment with stakeholders and adapt the Product Backlog based on feedback",
      "B": "To conduct individual performance evaluations of developers and assign bonuses",
      "C": "To compile the team's internal bug tracking logs for legal archiving",
      "D": "To plan the detailed task breakdown for the next three sprints"
    },
    "correctAnswer": "A",
    "explanation": "The Sprint Review is an informal working session where the Scrum Team and stakeholders collaborate on what was accomplished in the Sprint and adapt future backlog priorities based on demonstrated software.",
    "whyOthersAreWrong": [
      "Performance evaluations and bonuses have no place in Sprint Reviews.",
      "Bug archiving is an administrative task.",
      "Detailed task breakdowns belong to Sprint Planning, not Sprint Review."
    ],
    "examTrap": "The Sprint Review is a demonstration and collaboration meeting with stakeholders; the Sprint Retrospective is the internal team improvement meeting.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Review Focus",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-082",
    "topic": "Sprint Retrospective Focus",
    "difficulty": "medium",
    "question": "What distinguishes the Sprint Retrospective from the Sprint Review?",
    "options": {
      "A": "The Retrospective focuses internally on team processes, relationships, tools, and continuous self-improvement, whereas the Review focuses on the product increment",
      "B": "The Retrospective is open to all external customers, whereas the Review is top-secret",
      "C": "The Retrospective is held before the Sprint begins, whereas the Review is held halfway through",
      "D": "The Retrospective only happens if the software fails all automated tests"
    },
    "correctAnswer": "A",
    "explanation": "Sprint Review looks outward at the PRODUCT INCREMENT with stakeholders; Sprint Retrospective looks inward at the TEAM, PROCESS, TOOLS, and relationships to inspect and adapt how they work.",
    "whyOthersAreWrong": [
      "External customers attend the Sprint Review, but the Retrospective is strictly an internal team meeting.",
      "Retrospective occurs at the very end of the sprint, after the Sprint Review.",
      "Retrospectives occur every single sprint, regardless of success or test outcomes."
    ],
    "examTrap": "Review = Product inspection with stakeholders. Retrospective = Team process inspection and improvement.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Retrospective Focus",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-083",
    "topic": "Scrum Events Order",
    "difficulty": "medium",
    "question": "What is the correct sequential order of Scrum events within a single Sprint lifecycle?",
    "options": {
      "A": "Sprint Planning -> Daily Scrums (throughout execution) -> Sprint Review -> Sprint Retrospective",
      "B": "Sprint Retrospective -> Sprint Review -> Sprint Planning -> Daily Scrums",
      "C": "Daily Scrums -> Sprint Planning -> Sprint Retrospective -> Sprint Review",
      "D": "Sprint Review -> Sprint Retrospective -> Daily Scrums -> Sprint Planning"
    },
    "correctAnswer": "A",
    "explanation": "A sprint begins with Sprint Planning, proceeds through daily execution with Daily Scrums, conducts the Sprint Review to demo the increment, and concludes with the Sprint Retrospective.",
    "whyOthersAreWrong": [
      "Retrospective cannot occur before the work is done and reviewed.",
      "Daily Scrums cannot precede the planning meeting that defines the sprint goal.",
      "Review cannot happen before execution."
    ],
    "examTrap": "Remember that Sprint Retrospective is the final closing ceremony of a Sprint, occurring immediately after Sprint Review.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Events Order",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-084",
    "topic": "Sprint Goal Integrity",
    "difficulty": "hard",
    "question": "What rule governs changes to the Sprint Backlog during an active Sprint?",
    "options": {
      "A": "No changes are made that would endanger or compromise the agreed-upon Sprint Goal",
      "B": "The Product Owner can change the Sprint Goal every morning during the Daily Scrum",
      "C": "Any stakeholder can add new features directly to the sprint board at will",
      "D": "The team must completely wipe the board and restart if a new bug is reported"
    },
    "correctAnswer": "A",
    "explanation": "During the Sprint, scope may be clarified and re-negotiated between the Product Owner and Developers as more is learned, but NO changes are made that would endanger the Sprint Goal.",
    "whyOthersAreWrong": [
      "The PO cannot arbitrarily alter the Sprint Goal mid-sprint.",
      "Stakeholders must submit requests to the PO for Product Backlog grooming, not inject them into an active sprint.",
      "Bugs are triaged; the sprint is not wiped."
    ],
    "examTrap": "The Sprint Goal is fixed during the Sprint. If the Sprint Goal becomes completely obsolete, only the Product Owner has the authority to cancel the Sprint.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Goal Integrity",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-085",
    "topic": "Sprint Cancellation Authority",
    "difficulty": "hard",
    "question": "Under what circumstance and by whose authority can a Sprint be cancelled before its time-box expires?",
    "options": {
      "A": "Only the Product Owner can cancel the Sprint, and only if the Sprint Goal becomes completely obsolete or invalid",
      "B": "Any developer can cancel the sprint whenever they encounter a difficult programming bug",
      "C": "The Scrum Master must cancel the sprint if a Daily Scrum exceeds 15 minutes",
      "D": "Sprints can never be cancelled under any circumstance even if the company goes bankrupt"
    },
    "correctAnswer": "A",
    "explanation": "A Sprint can be cancelled before the Sprint time-box is over. Only the Product Owner has the authority to cancel the Sprint, typically when the business direction changes and the Sprint Goal becomes obsolete.",
    "whyOthersAreWrong": [
      "Developers do not possess the business authority to cancel a sprint.",
      "A meeting running over time is coached by the Scrum Master, not grounds for sprint cancellation.",
      "Sprints can indeed be cancelled if their business justification disappears."
    ],
    "examTrap": "ONLY the Product Owner has the authority to cancel a Sprint.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Sprint Cancellation Authority",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-086",
    "topic": "Scrum Impediment Removal",
    "difficulty": "medium",
    "question": "When a developer raises a severe blocker during the Daily Scrum, what is the Scrum Master's immediate duty?",
    "options": {
      "A": "Take ownership of tracking and actively helping to remove or facilitate the removal of that impediment outside the meeting",
      "B": "Immediately suspend the Daily Scrum and debate the technical algorithm for two hours",
      "C": "Tell the developer that blockers are personal failures and fine them",
      "D": "Delete the blocked task from the sprint board so nobody notices"
    },
    "correctAnswer": "A",
    "explanation": "The Scrum Master is accountable for removing organizational and environmental impediments that prevent the Developers from making progress, coordinating resolutions outside the 15-minute standup.",
    "whyOthersAreWrong": [
      "Debating algorithms inside the Daily Scrum breaches the 15-minute time-box.",
      "Blaming and fining developers violates Scrum values.",
      "Hiding blocked tasks destroys transparency."
    ],
    "examTrap": "Impediments are logged in the Daily Scrum, but solved AFTER the 15-minute time-box with relevant parties.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Scrum Impediment Removal",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s53-mcq-087",
    "topic": "Cross-Project Scrum Team Members",
    "difficulty": "medium",
    "question": "According to the course book, what is the major risk when team members are assigned individually to multiple concurrent Scrum projects?",
    "options": {
      "A": "Severe context-switching penalties, fragmented focus, conflicting priorities, and loss of team cohesion",
      "B": "Immediate hardware overheating of company laptops",
      "C": "Developers will accidentally merge all proprietary databases into one public file",
      "D": "Scrum Masters will be legally prosecuted by labor unions"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly highlights the risk of assigning developers across multiple projects: context switching destroys focus, reduces productivity, creates scheduling bottlenecks, and damages team spirit.",
    "whyOthersAreWrong": [
      "Laptop hardware does not overheat due to multi-project tasking.",
      "Database merges are prevented by database access controls.",
      "Multi-project allocation is inefficient management, not an illegal union crime."
    ],
    "examTrap": "Scrum functions best when team members are 100% dedicated to ONE team and ONE sprint goal.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.3",
      "topic": "Scrum"
    },
    "sourceUnit": 5,
    "sourceSection": "5.3",
    "sourceTopic": "Cross-Project Scrum Team Members",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-088",
    "topic": "Process Importance in Small Projects",
    "difficulty": "medium",
    "question": "What does research (e.g., Martin, Pearson, & Furumo, 2005a, cited in the course book) demonstrate about project management processes in small projects?",
    "options": {
      "A": "The development process followed in small projects is just as important to their success as it is in large projects",
      "B": "Small projects never need any project management or coordination at all",
      "C": "Small projects can only succeed if they use multi-million dollar enterprise software",
      "D": "Process in small projects should be twice as bureaucratic as in government mega-projects"
    },
    "correctAnswer": "A",
    "explanation": "Despite the misconception that small projects can run on informal chaos without coordination, research proves that following a structured development process is just as critical to the success of small projects as large ones.",
    "whyOthersAreWrong": [
      "Lack of management and coordination is a primary cause of small project failure.",
      "Expensive enterprise tools are unnecessary and counterproductive for small teams.",
      "Excessive bureaucracy paralyzes small projects."
    ],
    "examTrap": "Do not assume small projects do not need process discipline. Process discipline is equally essential.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Process Importance in Small Projects",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-089",
    "topic": "Pure Waterfall Sequence",
    "difficulty": "easy",
    "question": "Which of the following describes the fundamental structure of the pure Waterfall model?",
    "options": {
      "A": "A linear sequential sequence where each phase must be completely finished before the next phase begins",
      "B": "A circular iterative loop where coding and requirements happen simultaneously every day",
      "C": "An anarchic model with no phases, milestones, or deliverables",
      "D": "A spiral model where risk management eliminates the need for testing"
    },
    "correctAnswer": "A",
    "explanation": "The pure Waterfall model is strictly linear and sequential: each phase (requirements, design, coding, testing, maintenance) cascades into the next and must finish completely with sign-off before proceeding.",
    "whyOthersAreWrong": [
      "Simultaneous daily coding and requirements describes agile or extreme programming.",
      "Anarchic approaches are unmanaged chaos.",
      "Spiral models incorporate iterative risk cycles, not pure waterfall linearity."
    ],
    "examTrap": "Pure waterfall has NO backward loops or overlapping phases. Each phase is a discrete, frozen stage.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Pure Waterfall Sequence",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-090",
    "topic": "Waterfall Major Weakness",
    "difficulty": "medium",
    "question": "What is the most critical vulnerability of the pure Waterfall model in IT projects?",
    "options": {
      "A": "Errors made in early requirements or design are often discovered only during late testing, making fixes extremely expensive or catastrophic",
      "B": "It produces too much executable code too early in the project lifecycle",
      "C": "It requires daily customer meetings that exhaust business executives",
      "D": "It cannot be documented using written human language"
    },
    "correctAnswer": "A",
    "explanation": "Because testing occurs near the very end of the sequential pipeline, fundamental flaws in requirements or architectural assumptions remain hidden until the end, when rework costs are at their highest.",
    "whyOthersAreWrong": [
      "Waterfall produces executable code very LATE, not too early.",
      "Waterfall minimizes customer interaction after initial requirements sign-off.",
      "Waterfall relies heavily on extensive written documentation."
    ],
    "examTrap": "The late discovery of defects and architectural errors is the classic failure mode of pure waterfall.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Waterfall Major Weakness",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-091",
    "topic": "Waterfall with Feedback Mechanism",
    "difficulty": "medium",
    "question": "How does the 'Waterfall Model with Feedback' (Course Book Figure 39) improve upon pure waterfall?",
    "options": {
      "A": "By incorporating backward iteration loops allowing teams to revisit the immediately preceding phase when issues are discovered",
      "B": "By eliminating all design documentation completely",
      "C": "By running all phases simultaneously on day one of the project",
      "D": "By requiring customers to write the programming code"
    },
    "correctAnswer": "A",
    "explanation": "Waterfall with Feedback introduces backward arrows between adjacent phases (e.g. testing -> coding, coding -> design), acknowledging that discoveries in later stages require localized rework in the preceding phase.",
    "whyOthersAreWrong": [
      "Waterfall with Feedback retains formal documentation across all stages.",
      "Running all phases simultaneously describes extreme concurrency or chaos.",
      "Customers specify requirements; they do not write software code."
    ],
    "examTrap": "Feedback loops in Figure 39 connect adjacent phases backwards; it is still primarily sequential, not fully iterative like Scrum.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Waterfall with Feedback Mechanism",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-092",
    "topic": "Sashimi Model Metaphor and Function",
    "difficulty": "medium",
    "question": "Why is the 'Sashimi Model' named after Japanese sliced fish, and how does it function?",
    "options": {
      "A": "Because project phases overlap like overlapping slices of sashimi, allowing subsequent phases to begin before prior ones fully finish",
      "B": "Because it was invented exclusively for the Japanese seafood logistics industry",
      "C": "Because the project manager must consume raw fish before every milestone gate",
      "D": "Because the source code can only be written during cold winter seasons"
    },
    "correctAnswer": "A",
    "explanation": "In the Sashimi model (Peter DeGrace), development phases overlap like slices of sashimi on a plate. Design starts while requirements are still being finalized, and coding begins while design is under way, reducing schedule duration.",
    "whyOthersAreWrong": [
      "It is a general software engineering model, not restricted to seafood companies.",
      "The culinary naming is purely an analogy for overlapping geometric slices.",
      "Software seasons are irrelevant."
    ],
    "examTrap": "Sashimi = *overlapping waterfall phases*. It shortens total duration and fosters continuous inter-phase feedback.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Sashimi Model Metaphor and Function",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-093",
    "topic": "Sashimi Model Advantage",
    "difficulty": "medium",
    "question": "What is the primary advantage of the Sashimi model compared to the traditional sequential waterfall?",
    "options": {
      "A": "Shorter overall project duration through phase concurrency and immediate feedback between adjacent specialists",
      "B": "Elimination of all need for communication between developers and designers",
      "C": "Total exemption from software security audits",
      "D": "Ability to ship software without writing any test cases"
    },
    "correctAnswer": "A",
    "explanation": "Overlapping phases compresses the overall project schedule and allows engineers in downstream phases to provide real-time feedback to upstream specialists before designs are locked down.",
    "whyOthersAreWrong": [
      "Sashimi increases the necessity of communication between adjacent phase teams.",
      "No project management model exempts software from security audits.",
      "Testing is an integral overlapping phase in Sashimi."
    ],
    "examTrap": "Sashimi compresses schedule through overlap, but requires strong communication to manage shifting interface definitions.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Sashimi Model Advantage",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-094",
    "topic": "V-Model Basic Structure",
    "difficulty": "easy",
    "question": "What is the structural geometry of the V-Model as shown in Figure 41 of the course book?",
    "options": {
      "A": "A descending left-hand arm of decomposition and specification, a bottom vertex of implementation, and an ascending right-hand arm of integration and verification",
      "B": "A circular loop with four concentric rings representing risk analysis",
      "C": "A horizontal bar chart showing task durations across a calendar timeline",
      "D": "A pyramid with executive managers at the top and programmers at the base"
    },
    "correctAnswer": "A",
    "explanation": "The V-Model bends the waterfall into a V shape: the left downward slope represents project specification and decomposition; the vertex is coding; the right upward slope represents integration, verification, and validation.",
    "whyOthersAreWrong": [
      "Concentric rings describe Boehm's Spiral Model, not the V-Model.",
      "A horizontal bar chart over time is a Gantt chart.",
      "A managerial pyramid reflects organizational hierarchy."
    ],
    "examTrap": "Left side = Decomposition/Specification; Vertex = Coding/Implementation; Right side = Integration/Verification.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Basic Structure",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-095",
    "topic": "V-Model Left-Hand Arm Elements",
    "difficulty": "medium",
    "question": "Which phases make up the descending (left-hand) arm of the classic V-Model?",
    "options": {
      "A": "Requirements Analysis -> System Design -> Architecture Design -> Detailed Module Design",
      "B": "Unit Testing -> Integration Testing -> System Testing -> Acceptance Testing",
      "C": "Sprint Planning -> Daily Standup -> Sprint Review -> Sprint Retrospective",
      "D": "Inception -> Elaboration -> Construction -> Transition"
    },
    "correctAnswer": "A",
    "explanation": "The left side descends from high-level user needs to detailed technical specifications: Requirements Analysis -> System Design -> Architecture Design -> Detailed Module Design.",
    "whyOthersAreWrong": [
      "Unit, Integration, System, Acceptance testing constitute the ascending right-hand arm.",
      "Sprint events belong to Scrum.",
      "Inception through Transition are RUP phases."
    ],
    "examTrap": "Left arm descends in granularity: from broad business requirements down to detailed module design.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Left-Hand Arm Elements",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-096",
    "topic": "V-Model Right-Hand Arm Elements",
    "difficulty": "medium",
    "question": "Which phases form the ascending (right-hand) arm of the V-Model?",
    "options": {
      "A": "Unit Testing -> Integration Testing -> System Testing -> Acceptance Testing",
      "B": "Requirements Analysis -> System Design -> Architecture Design -> Detailed Design",
      "C": "Market Research -> Feasibility Study -> Budgeting -> Contract Award",
      "D": "Backlog Grooming -> Story Pointing -> Velocity Tracking -> Burndown Analysis"
    },
    "correctAnswer": "A",
    "explanation": "The right arm ascends from lowest-level code tests to final operational validation: Unit Testing -> Integration Testing -> System Testing -> Acceptance Testing.",
    "whyOthersAreWrong": [
      "Requirements down to Detailed Design form the descending left-hand arm.",
      "Market research and feasibility are project initiation activities.",
      "Story points and velocity belong to agile estimation."
    ],
    "examTrap": "Right arm ascends in integration level: from single unit tests up to full acceptance testing with the customer.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Right-Hand Arm Elements",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-097",
    "topic": "V-Model Traceability Link: Requirements & Acceptance",
    "difficulty": "medium",
    "question": "In the V-Model, which right-hand testing phase directly validates the left-hand 'Requirements Analysis' phase?",
    "options": {
      "A": "Acceptance Testing",
      "B": "Unit Testing",
      "C": "Integration Testing",
      "D": "Detailed Code Inspection"
    },
    "correctAnswer": "A",
    "explanation": "Requirements Analysis directly maps horizontally to Acceptance Testing; acceptance criteria written during requirements analysis are used to validate the final software with the client.",
    "whyOthersAreWrong": [
      "Unit testing maps horizontally to Detailed Module Design.",
      "Integration testing maps horizontally to Architecture Design.",
      "Code inspection occurs during Implementation."
    ],
    "examTrap": "Top-level specification (Requirements Analysis) pairs with top-level verification (Acceptance Testing).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Traceability Link: Requirements & Acceptance",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-098",
    "topic": "V-Model Traceability Link: System Design & System Testing",
    "difficulty": "medium",
    "question": "In the V-Model, what testing phase verifies the 'System Design' specifications?",
    "options": {
      "A": "System Testing",
      "B": "Unit Testing",
      "C": "Acceptance Testing",
      "D": "Module Regression Testing"
    },
    "correctAnswer": "A",
    "explanation": "System Design establishes overall system behavior, performance, and communication protocols, which are verified directly against System Testing.",
    "whyOthersAreWrong": [
      "Unit testing validates individual functions and algorithms in Detailed Design.",
      "Acceptance testing validates customer business requirements.",
      "Module regression testing is a subset of unit and component testing."
    ],
    "examTrap": "System Design pairs 1:1 with System Testing.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Traceability Link: System Design & System Testing",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-099",
    "topic": "V-Model Traceability Link: Architecture & Integration",
    "difficulty": "medium",
    "question": "Which testing level in the V-Model verifies the 'Architecture Design' (high-level structure and component interfaces)?",
    "options": {
      "A": "Integration Testing",
      "B": "Unit Testing",
      "C": "Acceptance Testing",
      "D": "Stress and Load Testing"
    },
    "correctAnswer": "A",
    "explanation": "Architecture Design defines how components, subsystems, and external interfaces interconnect; Integration Testing directly verifies these component interfaces and data flows.",
    "whyOthersAreWrong": [
      "Unit testing checks isolated code units, not interface integration between components.",
      "Acceptance testing evaluates end-user business scenarios.",
      "Load testing evaluates hardware capacity under scale."
    ],
    "examTrap": "Architecture Design pairs directly with Integration Testing.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Traceability Link: Architecture & Integration",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0100",
    "topic": "V-Model Traceability Link: Detailed Design & Unit Testing",
    "difficulty": "easy",
    "question": "Which testing phase in the V-Model validates the 'Detailed Module Design'?",
    "options": {
      "A": "Unit Testing",
      "B": "Acceptance Testing",
      "C": "System Testing",
      "D": "Beta Testing"
    },
    "correctAnswer": "A",
    "explanation": "Detailed Module Design specifies individual functions, classes, and logic blocks; Unit Testing directly verifies these individual code units.",
    "whyOthersAreWrong": [
      "Acceptance testing checks high-level business requirements with users.",
      "System testing checks full end-to-end integrated functionality.",
      "Beta testing is pre-release testing in live user environments."
    ],
    "examTrap": "Detailed Module Design pairs with Unit Testing at the base of the V.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Traceability Link: Detailed Design & Unit Testing",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0101",
    "topic": "V-Model Early Test Planning",
    "difficulty": "hard",
    "question": "What is the crucial timing advantage of the V-Model regarding test planning?",
    "options": {
      "A": "Test plans and test cases are designed on the left side concurrently with each specification phase, long before coding begins",
      "B": "Testing is postponed entirely until the customer signs off on the final invoice",
      "C": "Developers only write tests when code causes an operational server crash",
      "D": "Tests are auto-generated by the compiler without human intervention"
    },
    "correctAnswer": "A",
    "explanation": "In the V-Model, acceptance test plans are written during Requirements Analysis; system test cases during System Design; integration test plans during Architecture Design. Testing is planned early, not as an afterthought.",
    "whyOthersAreWrong": [
      "Postponing test planning is a critical defect of naive waterfall.",
      "Testing only after crashes is reactive maintenance, not proactive QA.",
      "Compilers check syntax, not semantic business logic tests."
    ],
    "examTrap": "Test *execution* occurs on the right side, but test *design/planning* occurs on the left side during specification.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Early Test Planning",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0102",
    "topic": "Predictive Methodology Selection Criteria",
    "difficulty": "medium",
    "question": "Under which project conditions is a plan-driven (predictive) methodology like the V-Model or Waterfall highly recommended for a small IT project?",
    "options": {
      "A": "When requirements are clear, stable, and well-understood upfront, and the system is safety-critical or subject to strict regulatory auditing",
      "B": "When user requirements change daily and the product is an experimental mobile game",
      "C": "When the customer has no idea what they want and refuses to write specifications",
      "D": "When the development team has zero software engineering experience"
    },
    "correctAnswer": "A",
    "explanation": "Plan-driven models excel when requirements are well understood and stable, technology is proven, and regulatory or safety standards require formal audit documentation and traceability.",
    "whyOthersAreWrong": [
      "High requirement volatility and experimental gaming strongly favor Agile.",
      "Unclear requirements with reluctant customers require iterative agile prototyping.",
      "Inexperienced teams struggle even more under rigid predictive models if plans are flawed."
    ],
    "examTrap": "Stable requirements + Regulatory/Safety compliance = Plan-driven / Predictive model.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Predictive Methodology Selection Criteria",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0103",
    "topic": "Agile Selection Criteria in Small Projects",
    "difficulty": "medium",
    "question": "When should a small project team choose an Agile approach (such as Scrum) over a plan-driven approach?",
    "options": {
      "A": "When requirements are uncertain, evolving, or innovative, and frequent customer feedback is essential to guide the product",
      "B": "When building nuclear reactor safety shutdown triggers where requirements are fixed by law",
      "C": "When the client demands a legally locked fixed-price contract with zero tolerance for change",
      "D": "When all team members refuse to communicate with each other"
    },
    "correctAnswer": "A",
    "explanation": "Agile methodologies are designed for volatility, uncertainty, and innovation, where customer interaction and empirical increments reveal the best path forward.",
    "whyOthersAreWrong": [
      "Nuclear safety systems mandate formal verification models like the V-Model.",
      "Fixed-price, zero-change contracts align with plan-driven predictive models.",
      "Refusal to communicate destroys agile teams completely."
    ],
    "examTrap": "Uncertainty + Need for rapid feedback = Agile.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Agile Selection Criteria in Small Projects",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0104",
    "topic": "Predictive Governance and Milestones",
    "difficulty": "medium",
    "question": "What role do 'milestone gates' play in plan-driven small project management?",
    "options": {
      "A": "They serve as formal decision points where deliverables are audited and authorized before funds and approval are granted for the next phase",
      "B": "They are social parties where developers celebrate writing 1,000 lines of code",
      "C": "They are legal deadlines when developers must be replaced by new hires",
      "D": "They serve as automatic triggers to delete old database backups"
    },
    "correctAnswer": "A",
    "explanation": "Milestone gates (phase exits) enforce governance: stakeholders inspect deliverables (specifications, test results) to verify quality and business alignment before committing resources to subsequent phases.",
    "whyOthersAreWrong": [
      "Milestone gates are formal technical and management audit reviews, not social parties.",
      "Replacing developers at gates is destructive and unnecessary.",
      "Database backups are operational maintenance tasks."
    ],
    "examTrap": "Phase gates prevent a project from advancing to coding if requirements or designs are substandard.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Predictive Governance and Milestones",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0105",
    "topic": "Hybrid Methodologies in Practice",
    "difficulty": "medium",
    "question": "How do modern organizations often combine plan-driven and agile methods in small-to-medium IT projects?",
    "options": {
      "A": "By utilizing predictive planning for high-level architectural baselining and budgeting, while employing agile sprints for iterative feature execution",
      "B": "By using Waterfall on odd days of the week and Scrum on even days",
      "C": "By forcing developers to write code without compiling it",
      "D": "By ignoring all requirements and letting customers write all tests"
    },
    "correctAnswer": "A",
    "explanation": "Many projects adopt a pragmatic hybrid approach: predictive governance for feasibility, architectural baseline, and compliance, combined with agile iterations for software development and user feedback.",
    "whyOthersAreWrong": [
      "Alternating methodologies by odd/even days is nonsensical chaos.",
      "Code must always be compiled and verified.",
      "Ignoring requirements causes project disaster."
    ],
    "examTrap": "Hybrid models blend predictive architectural/budget discipline with agile execution flexibility.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Hybrid Methodologies in Practice",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0106",
    "topic": "V-Model Verification vs Validation",
    "difficulty": "hard",
    "question": "In the V-Model, what is the precise distinction between 'Verification' and 'Validation'?",
    "options": {
      "A": "Verification evaluates whether the software conforms to its specified technical requirements ('Did we build the system right?'); Validation evaluates whether it satisfies user operational needs ('Did we build the right system?')",
      "B": "Verification is done by programmers; Validation is done by corporate lawyers",
      "C": "Verification is checking if the computer turns on; Validation is checking if the monitor displays color",
      "D": "Verification is a PMBOK term; Validation is exclusively a PRINCE2 term"
    },
    "correctAnswer": "A",
    "explanation": "Boehm's classic distinction applies: Verification confirms that products meet specified technical design requirements ('Are we building the product right?'). Validation confirms that the system fulfills its intended operational purpose for the user ('Are we building the right product?').",
    "whyOthersAreWrong": [
      "Validation is performed with user stakeholders, not just lawyers.",
      "Hardware power checks are basic facility checks.",
      "Verification and Validation are universal software engineering concepts in ISO and IEEE."
    ],
    "examTrap": "Verification = 'Did we build it RIGHT?' (conformance to specs). Validation = 'Did we build the RIGHT thing?' (fitness for purpose).",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "V-Model Verification vs Validation",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0107",
    "topic": "Waterfall Change Control Penalty",
    "difficulty": "medium",
    "question": "Why is introducing a scope change mid-way through a Waterfall project typically so disruptive and expensive?",
    "options": {
      "A": "Because upstream documents (requirements, system architecture, detailed designs) must all be formally revised, approved, and re-baselined",
      "B": "Because the project manager must pay an automatic fine to the PMI institute",
      "C": "Because Waterfall contracts mandate that developers work without pay for three months",
      "D": "Because computers cannot recompile code once written"
    },
    "correctAnswer": "A",
    "explanation": "In Waterfall, every phase produces frozen baseline documents that feed subsequent phases. Changing scope mid-stream requires updating requirements, re-architecting designs, refactoring code, and re-writing test scripts.",
    "whyOthersAreWrong": [
      "PMI does not collect fines for methodology changes.",
      "Labor laws prohibit working without compensation.",
      "Compilers recompile code repeatedly."
    ],
    "examTrap": "The cost of change in Waterfall rises exponentially the later in the lifecycle the change is requested.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Waterfall Change Control Penalty",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0108",
    "topic": "Sashimi Model Risk",
    "difficulty": "hard",
    "question": "What is the primary management risk introduced when implementing the Sashimi (overlapping phases) model?",
    "options": {
      "A": "If an upstream phase undergoes a major change, work already begun in the downstream overlapping phase may need to be scrapped and redone",
      "B": "The project will be forced to switch to seafood industry regulations",
      "C": "Team members will forget how to write software documentation",
      "D": "Hardware servers will automatically reject overlapping network packets"
    },
    "correctAnswer": "A",
    "explanation": "Because coding begins before design is 100% frozen, a fundamental shift in design can invalidate already-written code, resulting in wasted effort and rework.",
    "whyOthersAreWrong": [
      "The model name is a metaphor; industry regulations do not apply.",
      "Sashimi retains structured documentation.",
      "Network packet routing is independent of project management models."
    ],
    "examTrap": "The trade-off in Sashimi: shorter schedule duration vs the risk of rework if upstream assumptions change while downstream work is already underway.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Sashimi Model Risk",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0109",
    "topic": "Small Project Resource Allocation",
    "difficulty": "medium",
    "question": "In small projects using plan-driven methods, how are roles often handled compared to large corporate projects?",
    "options": {
      "A": "Individuals often perform multiple roles (e.g. system analyst and tester, or project manager and architect), requiring clear task differentiation",
      "B": "Every single role must be filled by a separate full-time external consultant",
      "C": "No roles are assigned and work is completed randomly",
      "D": "All roles are filled by artificial intelligence bots"
    },
    "correctAnswer": "A",
    "explanation": "Small projects rarely have the budget for separate full-time specialists for every role; team members frequently wear multiple hats, requiring careful tracking of duties and priorities.",
    "whyOthersAreWrong": [
      "Hiring full-time consultants for every role would bankrupt a small project.",
      "Unassigned roles result in neglected responsibilities and project failure.",
      "Software engineering projects require skilled human judgment."
    ],
    "examTrap": "Wearing multiple hats is common in small projects, but role responsibilities must remain clearly defined.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Small Project Resource Allocation",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u5-s54-mcq-0110",
    "topic": "Comprehensive Model Selection Summary",
    "difficulty": "hard",
    "question": "A medical device startup is developing embedded firmware that controls patient insulin dosages. Requirements are strictly defined by health authorities, and failure carries life-threatening risk. Which project model is most appropriate?",
    "options": {
      "A": "A rigorous plan-driven model such as the V-Model, providing end-to-end traceability and formal verification at each specification level",
      "B": "A chaotic, undocumented trial-and-error approach",
      "C": "A pure throw-away prototype deployed straight into patient clinics",
      "D": "An experimental framework where user stories are randomly generated by a marketing intern"
    },
    "correctAnswer": "A",
    "explanation": "Safety-critical, life-dependent systems with strictly regulated requirements demand the rigorous verification, validation, and traceability provided by models like the V-Model.",
    "whyOthersAreWrong": [
      "Undocumented trial-and-error is criminal negligence in medical devices.",
      "Deploying throw-away prototypes in healthcare violates medical ethics and law.",
      "Marketing interns do not specify life-critical medical dosage firmware."
    ],
    "examTrap": "Safety-critical, high-consequence systems with clear regulations require plan-driven verification rigor (V-Model), NOT exploratory prototyping.",
    "source": {
      "type": "course-book",
      "unit": 5,
      "section": "5.4",
      "topic": "Plan-Driven Project Management in Small Projects"
    },
    "sourceUnit": 5,
    "sourceSection": "5.4",
    "sourceTopic": "Comprehensive Model Selection Summary",
    "unit": 5,
    "unitId": 5,
    "subjectId": "itpm"
  }
];
