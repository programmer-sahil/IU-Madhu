import { DescriptiveQuestion } from "../../../../types";

export const unit6ImportantQuestions: DescriptiveQuestion[] = [
  {
    "id": "itpm-u6-qa-001",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Explain the structure of the PMBOK Guide as presented in the course book. Detail the distribution of its 47 processes across the 5 Process Groups and 10 Knowledge Areas.",
    "examinerExpectation": "Student must list all 5 process groups with exact process counts (2-24-8-11-2 = 47), list the 10 knowledge areas, and explain the ITTO architecture.",
    "answerStructure": [
      "Introduction: PMI PMBOK as global standard.",
      "5 Process Groups with exact counts: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2) = 47 processes.",
      "10 Knowledge Areas enumerated: Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder.",
      "ITTO Architecture: Inputs, Tools & Techniques, Outputs.",
      "Summary: Emphasize that Planning contains >50% of processes, reflecting plan-driven rigor."
    ],
    "keywords": [
      "PMBOK",
      "Process Groups",
      "Knowledge Areas",
      "47 Processes",
      "ITTO",
      "Initiating",
      "Planning",
      "Executing",
      "Monitoring & Controlling",
      "Closing"
    ],
    "modelAnswer": "The PMBOK Guide (Project Management Body of Knowledge), published by the Project Management Institute (PMI), structures project management into a 5x10 matrix consisting of 5 Process Groups and 10 Knowledge Areas, formalizing exactly 47 discrete processes:\n\n1. Five Process Groups (Chronological / Lifecycle Flow):\n- Initiating (2 processes): Develop Project Charter, Identify Stakeholders.\n- Planning (24 processes): Contains over half of all processes, developing the baselines for scope, schedule, budget, risk, and procurement.\n- Executing (8 processes): Coordinating personnel and resources to implement the plan.\n- Monitoring & Controlling (11 processes): Tracking, reviewing, and regulating progress against baselines, and controlling changes.\n- Closing (2 processes): Close Project or Phase, Close Procurements.\nTotal = 2 + 24 + 8 + 11 + 2 = 47 processes.\n\n2. Ten Knowledge Areas (Specialized Domains):\nProject Integration, Scope, Time/Schedule, Cost, Quality, Human Resources, Communications, Risk, Procurement, and Stakeholder Management.\n\nEvery process is standardized using an ITTO framework: taking defined Inputs (documents, organizational assets), applying specific Tools & Techniques (expert judgment, analytical techniques), and yielding formal Outputs (plans, deliverables, change requests).",
    "commonMistakes": "Getting process counts wrong (must be 2-24-8-11-2 = 47). Confusing process groups with project phases.",
    "selfCheckChecklist": [
      "Are all 5 process groups named with exact counts?",
      "Do the counts sum to 47?",
      "Are all 10 knowledge areas listed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK 5x10 Matrix & 47 Processes"
    }
  },
  {
    "id": "itpm-u6-qa-002",
    "unit": 6,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Differentiate between 'Project Scope' and 'Product Scope' in PMBOK. Explain how each is measured and controlled.",
    "examinerExpectation": "Student must define both terms, contrast 'work performed' with 'features delivered', and explain their respective measurement baselines.",
    "answerStructure": [
      "Define Product Scope: Features, functions, and technical characteristics of the deliverable.",
      "Define Project Scope: All work required to successfully deliver the product scope.",
      "Measurement Contrast: Product scope measured against requirements; Project scope measured against WBS/Plan.",
      "Control Contrast: Product scope validated via Validate Scope; Project scope controlled via Control Scope and change control."
    ],
    "keywords": [
      "Product Scope",
      "Project Scope",
      "Features and Functions",
      "Work Performed",
      "WBS Baseline",
      "Requirements Conformance"
    ],
    "modelAnswer": "A fundamental distinction in PMBOK Project Scope Management is maintained between Product Scope and Project Scope:\n\n1. Product Scope:\n- Definition: The features, functions, performance metrics, and technical characteristics that define the actual product, service, or result being created.\n- Focus: 'What is being delivered?' (e.g., encryption standards, response time, database schema, user interface features).\n- Measurement: Measured against the formal Product Requirements document and acceptance criteria.\n\n2. Project Scope:\n- Definition: The entirety of the work performed by the project team to deliver the product scope with specified quality.\n- Focus: 'What work must the team execute?' (e.g., writing specifications, setting up developer environments, conducting code reviews, weekly reporting, procurement negotiations).\n- Measurement: Measured against the Project Management Plan, Work Breakdown Structure (WBS), and WBS Dictionary.\n\nA project manager controls product scope through user validation and testing, while controlling project scope through baseline governance and preventing unauthorized work (gold-plating).",
    "commonMistakes": "Confusing the two definitions. Assuming project scope is just an informal synonym for product features.",
    "selfCheckChecklist": [
      "Is Product Scope tied to features/requirements?",
      "Is Project Scope tied to work performed/WBS?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "Project Scope vs Product Scope"
    }
  },
  {
    "id": "itpm-u6-qa-003",
    "unit": 6,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "What is the Performance Measurement Baseline (PMB) in PMBOK, and how does it integrate Earned Value Management (EVM)?",
    "examinerExpectation": "Student must define PMB as the integration of Scope, Schedule, and Cost baselines, and explain how EVM calculates variances against it.",
    "answerStructure": [
      "Define Performance Measurement Baseline (PMB): Integrated Scope, Schedule, and Cost baselines.",
      "Exclusion of Management Reserves: PMB includes contingency reserves but excludes management reserves.",
      "Role of Earned Value Management (EVM): Mathematical tracking of Planned Value (PV), Earned Value (EV), and Actual Cost (AC).",
      "Variance Analysis: Cost Variance (EV - AC) and Schedule Variance (EV - PV).",
      "Forecasting: Cost Performance Index (EV / AC) and Schedule Performance Index (EV / PV) projecting Estimate at Completion (EAC)."
    ],
    "keywords": [
      "Performance Measurement Baseline",
      "PMB",
      "Earned Value Management",
      "PV",
      "EV",
      "AC",
      "CV",
      "SV",
      "CPI",
      "SPI"
    ],
    "modelAnswer": "The Performance Measurement Baseline (PMB) is an approved, integrated scope-schedule-cost plan for project work against which actual project execution is mathematically evaluated:\n\n1. Composition: It is formed by integrating three primary baselines: the Scope Baseline (WBS + WBS Dictionary + Scope Statement), the Schedule Baseline, and the Cost Baseline (time-phased budget). It includes contingency reserves for known-unknown risks, but strictly excludes management reserves (which cover unknown-unknowns).\n\n2. Operationalization through Earned Value Management (EVM):\nEVM tracks three primary dimensions against the PMB:\n- Planned Value (PV): The authorized budget assigned to scheduled work.\n- Earned Value (EV): The measure of work performed expressed in terms of the budget authorized for that work.\n- Actual Cost (AC): The realized cost incurred for the work performed.\n\n3. Variance & Efficiency Tracking:\n- Schedule Variance: SV = EV - PV (measures schedule deviation in dollar terms).\n- Cost Variance: CV = EV - AC (measures budget overrun or underrun).\n- Performance Indices: CPI = EV / AC and SPI = EV / PV quantify cost and schedule efficiency, projecting the Estimate at Completion (EAC).",
    "commonMistakes": "Including management reserves in the PMB (management reserves are outside the PMB). Forgetting that PMB unifies all three constraints (Scope, Time, Cost).",
    "selfCheckChecklist": [
      "Are Scope, Schedule, and Cost baselines identified?",
      "Are PV, EV, and AC integrated?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "Performance Measurement Baseline & EVM"
    }
  },
  {
    "id": "itpm-u6-qa-004",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Describe the Change Control process in PMBOK. What is the role and composition of the Change Control Board (CCB)?",
    "examinerExpectation": "Student must detail the process 'Perform Integrated Change Control', describe how change requests flow, and explain the authority and composition of the CCB.",
    "answerStructure": [
      "Process Placement: Perform Integrated Change Control in Monitoring & Controlling / Integration Management.",
      "Flow of Change Requests: Submission -> Impact Analysis across all constraints -> CCB Evaluation -> Decision (Approve/Reject/Defer) -> Baseline Update & Communication.",
      "Role of CCB: Formally chartered body responsible for approving or rejecting changes to baselines.",
      "Composition of CCB: Project sponsor, project manager, customer/user reps, technical leads, procurement reps."
    ],
    "keywords": [
      "Perform Integrated Change Control",
      "Change Control Board",
      "CCB",
      "Change Request",
      "Baseline Update",
      "Impact Analysis"
    ],
    "modelAnswer": "In PMBOK, changes to project baselines are governed through the formal process 'Perform Integrated Change Control' within Project Integration Management:\n\n1. Change Request Workflow:\n- Any stakeholder may submit a formal Change Request.\n- The Project Manager assesses the holistic impact of the proposed change across all Iron Triangle constraints (scope, schedule, budget, quality, resources, and risk).\n- The change request and impact analysis are submitted to the Change Control Board (CCB).\n- The CCB formally evaluates, approves, rejects, or defers the change.\n- Approved changes result in updating project baselines, revising work packages, and notifying all affected stakeholders.\n\n2. Role and Composition of the Change Control Board (CCB):\n- Role: A formally chartered committee authorized to make binding decisions on proposed baseline modifications. It prevents scope creep and unauthorized schedule or budget expansions.\n- Composition: Typically chaired by the Project Sponsor or Executive, comprising the Project Manager, customer/user representatives, senior technical architects, and legal/procurement officers. The PM does not act as sole arbiter of baseline changes.",
    "commonMistakes": "Assuming the Project Manager has unilateral authority to approve baseline changes. Overlooking the holistic impact analysis step.",
    "selfCheckChecklist": [
      "Is the CCB defined as a formal chartered board?",
      "Is holistic impact analysis explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "Change Control & CCB"
    }
  },
  {
    "id": "itpm-u6-qa-005",
    "unit": 6,
    "marks": 6,
    "priority": "MEDIUM PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "What administrative and operational activities are mandated during the PMBOK 'Close Project or Phase' process? Why must this process be executed even for cancelled projects?",
    "examinerExpectation": "Student must enumerate closing activities (handover, lessons learned, archiving, resource release) and explain why premature cancellations still require formal closure.",
    "answerStructure": [
      "Mandated Activities: Deliverable handover, customer acceptance sign-off, archiving files, updating organizational assets, releasing staff/resources.",
      "Lessons Learned: Conducting final retrospective to capture what went well and what failed.",
      "Premature Closures: Even if cancelled, must document reasons for failure, salvage partial deliverables, release contracts, and record lessons."
    ],
    "keywords": [
      "Close Project or Phase",
      "Administrative Closure",
      "Deliverable Handover",
      "Lessons Learned",
      "Resource Release",
      "Premature Termination"
    ],
    "modelAnswer": "The PMBOK process 'Close Project or Phase' finalizes all activities across all process groups to formally complete the project or a specific lifecycle phase:\n\n1. Mandated Activities:\n- Formal Handover: Transferring finalized, accepted deliverables to operational maintenance teams or customer ownership.\n- Administrative Archiving: Collecting, indexing, and archiving all project documentation, contracts, change logs, and performance metrics.\n- Financial & Contract Closure: Finalizing contractor invoices, closing open purchase orders, and conducting formal vendor evaluations.\n- Resource Reassignment: Releasing personnel, equipment, and testing environments back to functional pools.\n- Lessons Learned Documentation: Compiling final project retrospectives to update Organizational Process Assets (OPAs).\n\n2. Applicability to Prematurely Terminated Projects:\nIf a project is cancelled early (due to budget cuts or lost business justification), Close Project or Phase MUST still be executed. It establishes the formal date and rationale for termination, salvages useful partial code or intellectual property, ensures vendor contracts are legally settled, and documents why the project failed so the enterprise avoids repeating identical mistakes.",
    "commonMistakes": "Assuming that cancelled projects simply stop without executing the Closing process. Forgetting resource release and lessons learned.",
    "selfCheckChecklist": [
      "Are both operational handover and administrative archiving included?",
      "Is the rationale for closing cancelled projects clearly stated?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "Project Closing Activities"
    }
  },
  {
    "id": "itpm-u6-qa-006",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Analyze the 7-7-7 structural architecture of PRINCE2. Briefly define its Principles, Themes, and Processes.",
    "examinerExpectation": "Student must list all 7 Principles, 7 Themes, and 7 Processes, defining what each structural category represents in the methodology.",
    "answerStructure": [
      "Overview: 7-7-7 architecture created by UK government (CCTA/OGC/AXELOS).",
      "7 Principles: Universal, mandatory rules (Continued business justification, Learn from experience, Defined roles, Manage by stages, Manage by exception, Focus on products, Tailor).",
      "7 Themes: Continuing aspects of project management (Business Case, Organization, Quality, Plans, Risk, Change, Progress).",
      "7 Processes: Step-by-step lifecycle flow (SU, DP, IP, CS, MP, SB, CP)."
    ],
    "keywords": [
      "PRINCE2",
      "7-7-7",
      "Seven Principles",
      "Seven Themes",
      "Seven Processes",
      "Business Case",
      "Manage by Stages",
      "Manage by Exception"
    ],
    "modelAnswer": "PRINCE2 (PRojects IN Controlled Environments) is built upon an integrated structural architecture consisting of exactly 7 Principles, 7 Themes, and 7 Processes:\n\n1. Seven Principles (The Mandatory Foundation):\nUniversal, self-validating rules that must all be observed for a project to be considered a PRINCE2 project:\n(1) Continued business justification, (2) Learn from experience, (3) Defined roles and responsibilities, (4) Manage by stages, (5) Manage by exception, (6) Focus on products, and (7) Tailor to suit the project environment.\n\n2. Seven Themes (The Continuing Management Aspects):\nSpecific management disciplines that must be continually addressed throughout the project lifecycle:\n(1) Business Case, (2) Organization, (3) Quality, (4) Plans, (5) Risk, (6) Change, and (7) Progress.\n\n3. Seven Processes (The Chronological Lifecycle Management Flow):\nThe chronological and event-driven workflow guiding the project from pre-project startup through closure:\n(1) Starting up a Project (SU), (2) Directing a Project (DP), (3) Initiating a Project (IP), (4) Controlling a Stage (CS), (5) Managing Product Delivery (MP), (6) Managing a Stage Boundary (SB), and (7) Closing a Project (CP).",
    "commonMistakes": "Mixing up items between Principles and Themes (e.g. calling Business Case a principle). Omitting Tailoring from the principles.",
    "selfCheckChecklist": [
      "Are all 7 Principles listed accurately?",
      "Are all 7 Themes listed accurately?",
      "Are all 7 Processes listed accurately?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2 7-7-7 Architecture"
    }
  },
  {
    "id": "itpm-u6-qa-007",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Detail the four Management Levels in PRINCE2 and describe the composition and specific responsibilities of the Project Board.",
    "examinerExpectation": "Student must list the 4 management levels (Corporate/Programme, Directing, Managing, Delivering) and detail the three Project Board roles (Executive, Senior User, Senior Supplier).",
    "answerStructure": [
      "Four Management Levels: Corporate/Programme Management, Project Board (Directing), Project Manager (Managing), Team Managers (Delivering).",
      "Project Board Composition: Triad representing Business, User, and Supplier interests.",
      "Role 1: Executive - Business owner, funding, ultimately accountable for project, owns Business Case.",
      "Role 2: Senior User - Specifies requirements, operational fitness, monitors benefit realization.",
      "Role 3: Senior Supplier - Accountable for technical integrity, resources, and feasibility.",
      "Note on PM: The PM reports TO the Board; PM is not a member of the Project Board."
    ],
    "keywords": [
      "Four Management Levels",
      "Project Board",
      "Executive",
      "Senior User",
      "Senior Supplier",
      "Directing Level",
      "Accountability Triad"
    ],
    "modelAnswer": "PRINCE2 separates project governance into four distinct management levels, ensuring clear boundaries between executive strategy, operational management, and technical delivery:\n\n1. Corporate or Programme Management: Commissioning level; mandates the project and appoints the Executive.\n2. Project Board (Directing Level): Holds overall authority, makes strategic decisions, commits resources, and approves stage plans.\n3. Project Manager (Managing Level): Runs day-to-day operations within tolerances agreed with the Project Board.\n4. Team Managers (Delivering Level): Lead specialized technical production of deliverables specified in Work Packages.\n\nThe Project Board Triad:\nThe Project Board is a three-role governance committee balancing all critical project interests:\n- The Executive: Appointed by corporate management, the Executive holds ultimate personal accountability for project success. Represents business interests, provides funding, and owns the Business Case.\n- The Senior User: Represents the departments and users who will operate the deliverables. Responsible for specifying operational requirements, committing user resources, and verifying that the project realizes planned operational benefits.\n- The Senior Supplier: Represents the internal engineering groups or external contractors building the deliverables. Responsible for technical feasibility, quality integrity, and supplying specialized technical personnel.\n\nThe Project Manager reports directly to the Project Board and is NEVER a voting member of the Board.",
    "commonMistakes": "Placing the Project Manager on the Project Board. Omitting the Senior Supplier or confusing Senior User with end-consumer.",
    "selfCheckChecklist": [
      "Are all 4 management levels named in hierarchical order?",
      "Are Executive, Senior User, and Senior Supplier defined clearly?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2 Management Levels & Project Board"
    }
  },
  {
    "id": "itpm-u6-qa-008",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Compare the PRINCE2 principles of 'Manage by Stages' and 'Manage by Exception'. How do they operate together to enforce governance without micro-management?",
    "examinerExpectation": "Student must define both principles, list the six tolerance areas, explain stage boundaries, and describe how they combine to empower PMs while protecting executive funds.",
    "answerStructure": [
      "Define Manage by Stages: Dividing project into discrete stages; review gates re-authorizing funding.",
      "Define Manage by Exception: Delegating authority bounded by tolerances across 6 variables.",
      "Six Tolerances: Time, Cost, Quality, Scope, Risk, Benefits.",
      "How They Combine: Stages provide macro-checkpoints (at boundaries); Exceptions govern micro-operations (within stages without executive meddling).",
      "Exception Handling Flow: Tolerance threatened -> Exception Report -> Board review -> Exception Plan."
    ],
    "keywords": [
      "Manage by Stages",
      "Manage by Exception",
      "Tolerances",
      "Stage Boundaries",
      "Exception Report",
      "Six Tolerances",
      "Governance"
    ],
    "modelAnswer": "In PRINCE2, 'Manage by Stages' and 'Manage by Exception' form a complementary governance system that prevents executive micro-management while eliminating runaway financial risk:\n\n1. Manage by Stages (Macro-Governance):\n- The project is partitioned into a minimum of two discrete management stages: the Initiation Stage (planning) and at least one Delivery Stage.\n- Funds and resources are committed strictly one stage at a time.\n- At each Stage Boundary (Managing a Stage Boundary process), the Project Board conducts a mandatory review: inspecting deliverables, confirming continued Business Case validity, and approving the Next Stage Plan before releasing further funds.\n\n2. Manage by Exception (Micro-Governance & Autonomy):\n- The Project Board sets specific tolerance thresholds for the Project Manager across six performance variables: Time (+/- days), Cost (+/- budget), Quality (acceptable variance), Scope (mandatory vs optional items), Risk (maximum exposure), and Benefits (minimum acceptable return).\n- As long as forecasts remain within these six tolerances, the PM manages autonomously without seeking Board approvals for daily tasks.\n- If a tolerance is breached or forecast to be breached, the PM must immediately raise an Exception Report. The Board evaluates the breach and may commission an Exception Plan to replace the current stage plan.\n\nTogether, Manage by Stages limits executive capital exposure at defined checkpoints, while Manage by Exception allows PMs to manage daily work efficiently without executive bottlenecking.",
    "commonMistakes": "Confusing stages with exceptions. Failing to enumerate the 6 tolerances (Time, Cost, Quality, Scope, Risk, Benefits).",
    "selfCheckChecklist": [
      "Are both principles clearly distinguished?",
      "Are all 6 tolerances listed?",
      "Is the Exception Report workflow detailed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "Manage by Stages vs Manage by Exception"
    }
  },
  {
    "id": "itpm-u6-qa-009",
    "unit": 6,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Describe the operational workflow and roles involved in the PRINCE2 processes 'Starting up a Project' (SU) and 'Directing a Project' (DP).",
    "examinerExpectation": "Student must explain SU as a pre-project filter and DP as the continuous Project Board oversight process spanning the entire project lifecycle.",
    "answerStructure": [
      "Starting up a Project (SU): Pre-project filter; purpose is to answer 'Do we have a viable project?'.",
      "SU Outputs: Project Brief, appointment of Executive and PM, Initiation Stage Plan.",
      "Directing a Project (DP): Continuous process owned solely by the Project Board.",
      "DP Key Activities: Authorizing initiation, authorizing stage plans, giving ad-hoc direction, reviewing exception reports, authorizing project closure."
    ],
    "keywords": [
      "Starting up a Project",
      "SU",
      "Directing a Project",
      "DP",
      "Project Brief",
      "Project Board",
      "Initiation Authorization",
      "Viability Filter"
    ],
    "modelAnswer": "In PRINCE2, project governance begins with a pre-project filter (SU) and is steered continuously by senior leadership through DP:\n\n1. Starting up a Project (SU):\n- Context: Occurs before the project officially exists (pre-project phase).\n- Objective: To determine whether the project has sufficient viability and business justification to warrant spending money on detailed planning. It answers: 'Do we have a viable and worthwhile project?'\n- Key Activities: Appointing the Executive and Project Manager; designing the Project Brief (broad scope and outline business case); and drafting the detailed Initiation Stage Plan.\n- Decision Gate: The Executive submits the Project Brief to corporate management to authorize formal initiation.\n\n2. Directing a Project (DP):\n- Ownership: The ONLY process executed by the Project Board.\n- Duration: Commences upon completion of SU and runs continuously until final project closure.\n- Operational Mechanics: The Project Board does not manage daily work; instead, it exercises governance through key decision points:\n  a) Authorizing Initiation (moving from SU to IP);\n  b) Authorizing the Project (approving the PID);\n  c) Authorizing each Stage Plan at Stage Boundaries;\n  d) Giving ad-hoc direction and evaluating Exception Reports;\n  e) Authorizing final project closure.",
    "commonMistakes": "Thinking SU is the detailed planning process (IP is detailed planning; SU is just pre-project feasibility). Thinking the PM executes DP (DP is owned solely by the Project Board).",
    "selfCheckChecklist": [
      "Is SU framed as a pre-project filter?",
      "Is DP identified as the Project Board's continuous directing process?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2 SU & DP Processes"
    }
  },
  {
    "id": "itpm-u6-qa-010",
    "unit": 6,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Explain the technique of 'Product-Based Planning' in PRINCE2. What are its three core artifacts?",
    "examinerExpectation": "Student must explain that products come before activities, and describe the Product Breakdown Structure, Product Description, and Product Flow Diagram.",
    "answerStructure": [
      "Core Philosophy: Focus on products rather than activities (Principle 6).",
      "Artifact 1: Product Breakdown Structure (PBS) - Hierarchical decomposition of all required deliverables.",
      "Artifact 2: Product Description - Detailed specification of quality criteria, tolerances, and testing methods for each product.",
      "Artifact 3: Product Flow Diagram (PFD) - Dependency sequence showing the production order of products.",
      "Activity Derivation: Gantt charts and activity schedules are created ONLY after the PFD is finalized."
    ],
    "keywords": [
      "Product-Based Planning",
      "Product Breakdown Structure",
      "PBS",
      "Product Description",
      "Product Flow Diagram",
      "PFD",
      "Quality Criteria"
    ],
    "modelAnswer": "PRINCE2 enforces the principle 'Focus on Products' through its signature technique: Product-Based Planning. Rather than immediately listing project activities or drawing Gantt charts, PRINCE2 requires planning deliverables first through three sequential artifacts:\n\n1. Product Breakdown Structure (PBS): A hierarchical decomposition chart displaying all products, sub-products, and intermediate deliverables required to deliver the final system (similar to an object-oriented WBS).\n\n2. Product Description: A formal specification created for every identified product on the PBS. It defines the product's purpose, composition, derivation, format, quality criteria, quality tolerance levels, and the quality method used to test conformance.\n\n3. Product Flow Diagram (PFD): A network diagram illustrating the logical sequence, dependencies, and flow of production among the products on the PBS.\n\nOnly after the Product Flow Diagram is established does the team identify the specific engineering activities needed to build each product and estimate activity durations and costs.",
    "commonMistakes": "Putting activity scheduling before product definitions. Forgetting Product Descriptions.",
    "selfCheckChecklist": [
      "Are PBS, Product Description, and PFD all described?",
      "Is the principle 'products before activities' highlighted?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2 Product-Based Planning"
    }
  },
  {
    "id": "itpm-u6-qa-011",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Compare and contrast PMBOK and PRINCE2. Explain why they are increasingly viewed as complementary rather than mutually exclusive.",
    "examinerExpectation": "Student must contrast origin, structure (Knowledge/ITTO vs Process/7-7-7), focus (what/knowledge vs how/governance), and explain how organizations combine them.",
    "answerStructure": [
      "Origin & Geography: PMBOK (PMI, USA); PRINCE2 (CCTA/AXELOS, UK/Europe).",
      "Philosophical Focus: PMBOK is a descriptive knowledge standard ('What a PM should know'); PRINCE2 is a prescriptive process methodology ('How to govern and who does what').",
      "Roles & Structure: PMBOK centers around the PM; PRINCE2 establishes formal 4 management levels and the Project Board triad.",
      "Complementary Synergy: PRINCE2 provides the governance framework and decision gates; PMBOK provides the detailed tools and techniques (EVM, CPM, PERT, ITTOs).",
      "Conclusion: Combining PRINCE2 governance with PMBOK tools creates a complete project management capability."
    ],
    "keywords": [
      "PMBOK vs PRINCE2",
      "Knowledge Standard",
      "Process Methodology",
      "Complementary",
      "Project Board",
      "Governance",
      "ITTO"
    ],
    "modelAnswer": "Although historically viewed as competing standards (PMBOK in North America, PRINCE2 in Europe), modern IT project management recognizes PMBOK and PRINCE2 as highly complementary frameworks addressing different dimensions of project delivery:\n\n1. Foundational Contrasts:\n- Focus & Philosophy: PMBOK is a comprehensive Body of Knowledge answering 'WHAT does a project manager need to know?' (covering 10 knowledge areas and detailed tools/techniques). PRINCE2 is a prescriptive process-based methodology answering 'HOW do we direct, manage, and deliver a project, and WHO is responsible?'\n- Organizational Governance: PMBOK focuses primarily on the Project Manager and team-level execution. PRINCE2 formalizes enterprise governance through 4 management levels, explicitly placing project direction in the hands of the Project Board (Executive, Senior User, Senior Supplier).\n- Planning Approach: PMBOK emphasizes work-based decomposition (WBS). PRINCE2 emphasizes product-based planning (PBS and Product Descriptions).\n\n2. Complementary Integration in Practice:\nModern enterprises successfully combine both:\n- PRINCE2 provides the overarching governance structure: formal business justification, Project Board decision gates, Manage by Exception tolerances, and stage funding.\n- PMBOK provides the deep execution toolkit: supplying the mathematical formulas (EVM, CPM, PERT), risk assessment techniques, and ITTO mechanisms used by the PM within those PRINCE2 stages.",
    "commonMistakes": "Claiming one framework makes the other obsolete. Forgetting that PRINCE2 has formal management levels while PMBOK focuses heavily on tools and knowledge.",
    "selfCheckChecklist": [
      "Are both frameworks compared on focus, origin, and roles?",
      "Is their practical complementary synergy clearly articulated?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PMBOK vs PRINCE2 Comparison"
    }
  },
  {
    "id": "itpm-u6-qa-012",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Deconstruct the three-tier multi-project management hierarchy (Portfolio, Programme, Project) as shown in Figure 46 of the course book. Compare their scopes, goals, and core questions.",
    "examinerExpectation": "Student must define Portfolio, Programme, and Project, comparing them across scope, governance focus, core guiding question, and deliverable types.",
    "answerStructure": [
      "Tier 1: Portfolio - Strategic scope, business alignment, investment balance. Question: 'Are we doing the right work?'.",
      "Tier 2: Programme - Coordinated related projects, synergy, capability building. Question: 'Are we realizing collective benefits?'.",
      "Tier 3: Project - Tactical outputs within Iron Triangle constraints. Question: 'Are we doing the work right?'.",
      "Comparison Table/Summary highlighting time horizon, metrics, and change management."
    ],
    "keywords": [
      "Multi-Project Hierarchy",
      "Portfolio",
      "Programme",
      "Project",
      "Strategic Alignment",
      "Benefits Realization",
      "Outputs",
      "Figure 46"
    ],
    "modelAnswer": "Course Book Figure 46 models the multi-project governance hierarchy, organizing organizational initiatives into three distinct tiers:\n\n1. Portfolio Management (Strategic Executive Tier):\n- Definition: The collection of projects, programmes, sub-portfolios, and operational activities grouped together to achieve corporate strategic business objectives.\n- Core Question: 'Are we doing the right work?'\n- Focus: Strategic alignment, capital allocation, prioritizing initiatives based on ROI, balancing high-risk innovation with low-risk operational stability, and risk diversification across the enterprise.\n\n2. Programme Management (Coordination & Synergy Tier):\n- Definition: A group of related projects and programme activities managed in a coordinated way to obtain synergistic benefits and control not available from managing them individually.\n- Core Question: 'Are we realizing collective business benefits?'\n- Focus: Managing inter-project dependencies, resolving cross-project technical interfaces, resource leveling, and ensuring that combined project outputs translate into measurable operational capabilities.\n\n3. Project Management (Tactical Delivery Tier):\n- Definition: A temporary endeavor undertaken to create a unique product, service, or result.\n- Core Question: 'Are we doing the work right?'\n- Focus: Delivering specific defined outputs within agreed scope, schedule, budget, and quality constraints.",
    "commonMistakes": "Treating a programme as just a 'big project'. Forgetting the signature questions ('doing the right work' vs 'doing work right').",
    "selfCheckChecklist": [
      "Are all 3 tiers defined accurately matching Figure 46?",
      "Are the core questions included for each tier?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management Hierarchy"
    }
  },
  {
    "id": "itpm-u6-qa-013",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Compare the three structural models of the Project Management Office (PMO): Supportive, Controlling, and Directive. Detail their authority levels, responsibilities, and organizational fit.",
    "examinerExpectation": "Student must list all 3 PMO models, contrast their degree of control (Low, Moderate, High), detail their core activities, and explain when an organization should choose each.",
    "answerStructure": [
      "Supportive PMO: Consultative role, templates, training, lessons learned repository; LOW level of control; fits entrepreneurial/decentralized cultures.",
      "Controlling PMO: Provides support and mandates compliance with frameworks, governance, and tools; MODERATE level of control; fits growing matrix organizations.",
      "Directive PMO: Directly manages projects; PMs report directly to PMO; HIGH level of control; fits large, highly regulated enterprises.",
      "Comparison Table summarizing Control Level, PM Reporting Line, and Core Mandate."
    ],
    "keywords": [
      "PMO",
      "Supportive PMO",
      "Controlling PMO",
      "Directive PMO",
      "Level of Control",
      "Compliance",
      "Organizational Fit"
    ],
    "modelAnswer": "Modern organizations establish a Project Management Office (PMO) to govern multi-project environments. PMOs are classified into three structural models based on their degree of control and authority:\n\n1. Supportive PMO (Low Control):\n- Role: Acts as a consultative center of excellence and knowledge repository.\n- Responsibilities: Supplies standardized templates, project management best practice guidelines, training programs, and archives historical lessons learned.\n- Authority: Exercises minimal formal control; adopting its templates and advice is optional for project managers.\n- Organizational Fit: Ideal for decentralized, innovative, or entrepreneurial organizations where teams value autonomy and formal bureaucracy is resisted.\n\n2. Controlling PMO (Moderate Control):\n- Role: Provides operational support while mandating organizational compliance.\n- Responsibilities: Establishes mandatory project management governance frameworks, prescribes standardized reporting tools and metrics dashboards, and conducts regular compliance audits.\n- Authority: Moderate; project managers report to functional departments but must conform strictly to PMO governance standards.\n- Organizational Fit: Suitable for medium-to-large organizations seeking consistency, governance transparency, and standard performance metrics across diverse departments.\n\n3. Directive PMO (High Control):\n- Role: Takes direct operational ownership of project delivery.\n- Responsibilities: Directly manages projects across the enterprise. Project Managers are employed by, assigned by, and report directly to the PMO.\n- Authority: High; the PMO exercises full command over project initiation, resource assignment, and methodology enforcement.\n- Organizational Fit: Essential in large, complex, heavily regulated enterprises (e.g. defense, banking, healthcare) requiring strict centralized control.",
    "commonMistakes": "Mixing up the control levels (Supportive=Low, Controlling=Moderate, Directive=High). Thinking PMs report to a Supportive PMO.",
    "selfCheckChecklist": [
      "Are all 3 PMO types compared accurately?",
      "Are control levels clearly stated as Low, Moderate, and High?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Three PMO Structural Types"
    }
  },
  {
    "id": "itpm-u6-qa-014",
    "unit": 6,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "How does multi-project management handle 'Resource Contention' when multiple concurrent projects require the same critical technical specialists?",
    "examinerExpectation": "Student must explain resource leveling across projects, strategic prioritization via portfolio governance, and the hazards of multi-project multitasking.",
    "answerStructure": [
      "Problem of Resource Contention: Shared specialists (database architects, security leads) bottleneck multiple projects.",
      "Hazard of Individual Multitasking: Cognitive context switching, fragmented attention, scheduling conflicts.",
      "Multi-Project Management Solution: Centralized resource visibility (PMO), strategic prioritization (Portfolio), cross-project resource leveling.",
      "Dedicated Allocation Principle: Striving for 100% focus where possible."
    ],
    "keywords": [
      "Resource Contention",
      "Multi-Project Management",
      "Context Switching",
      "Resource Leveling",
      "PMO Visibility",
      "Strategic Priority"
    ],
    "modelAnswer": "Resource contention is one of the most severe failure modes in multi-project IT environments, occurring when specialized personnel (e.g. database architects, cybersecurity specialists, lead cloud engineers) are demanded simultaneously by multiple project teams:\n\n1. The Multitasking Trap: Without multi-project coordination, management often fragments specialists across 4 or 5 projects (e.g. 20% on each). As the course book warns, this incurs severe context-switching overhead, burns out specialists, and creates multi-project bottlenecks when one project encounters unexpected delays.\n\n2. Multi-Project Management Solution:\n- Centralized Resource Visibility: An Enterprise PMO or Portfolio management system maps all resource commitments across the enterprise, identifying overallocations before projects launch.\n- Strategic Priority Allocation: When conflicts arise, resources are allocated based on corporate strategic priorities established by Portfolio Governance, rather than whoever shouts loudest.\n- Cross-Project Resource Leveling: Shared specialists are scheduled in dedicated blocks (e.g. 2 full weeks dedicated to Project A, then moving to Project B) rather than fragmented part-time multitasking.",
    "commonMistakes": "Assuming resource contention can be solved simply by asking developers to work overtime. Overlooking the cognitive penalties of context switching.",
    "selfCheckChecklist": [
      "Is the context-switching penalty explained?",
      "Is centralized PMO resource leveling detailed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Resource Contention"
    }
  },
  {
    "id": "itpm-u6-qa-015",
    "unit": 6,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Explain the concept of 'Benefits Realization' in Programme Management. How do programme managers manage inter-project dependencies to capture synergistic business value?",
    "examinerExpectation": "Student must explain that projects deliver outputs while programmes deliver outcomes/benefits, detail dependency management, and explain extended benefit tracking.",
    "answerStructure": [
      "Outputs vs Outcomes vs Benefits: Project delivers output (tool); Programme achieves outcome (new capability); Business realizes benefit (revenue/efficiency).",
      "Synergy Principle: 1 + 1 = 3 (projects coordinated together yield greater value than isolated efforts).",
      "Inter-Project Dependency Management: Managing technical interfaces, sequential milestones, and shared infrastructure.",
      "Extended Lifecycle: Benefit realization tracking continues well after component projects have closed."
    ],
    "keywords": [
      "Benefits Realization",
      "Programme Management",
      "Outputs vs Benefits",
      "Inter-Project Dependencies",
      "Synergy",
      "Operational Capability"
    ],
    "modelAnswer": "In Programme Management, the ultimate benchmark of success is not merely delivering software on time and budget, but achieving sustainable 'Benefits Realization':\n\n1. The Value Chain (Output -> Outcome -> Benefit):\n- Projects Deliver Outputs: Tangible, discrete deliverables (e.g. a new relational database, an updated mobile app, a staff training module).\n- Programmes Create Outcomes: Combining those outputs into a coherent operational capability (e.g. automated digital retail banking).\n- The Enterprise Realizes Benefits: The measurable financial or strategic improvement resulting from that capability (e.g. 30% reduction in branch transaction costs, \\$10M annual profit growth).\n\n2. Managing Inter-Project Dependencies to Capture Synergy:\nA programme manager actively orchestrates dependencies so that projects do not fail at the seams:\n- Interface Alignment: Ensuring technical APIs produced by Project 1 integrate seamlessly with the user interface built by Project 2.\n- Sequencing Synchronization: Ensuring the infrastructure project deploys cloud servers before the software project begins user acceptance testing.\n- Preventing Silos: Without programme coordination, Project 1 might 'succeed' on paper while delivering an output completely unusable by Project 2, destroying overall business ROI.",
    "commonMistakes": "Confusing project outputs with programme benefits. Treating programme management as just multiple projects running in parallel.",
    "selfCheckChecklist": [
      "Is the Output -> Outcome -> Benefit chain explained?",
      "Is inter-project dependency synchronization detailed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Programme Benefits Realization"
    }
  },
  {
    "id": "itpm-u6-qa-016",
    "unit": 6,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Why does scaling Agile across dozens of teams introduce quadratic communication complexity? Explain the mathematical formula governing communication channels.",
    "examinerExpectation": "Student must state and explain the formula n(n-1)/2, describe the exponential growth of channels, and explain why informal agile communication breaks down at scale.",
    "answerStructure": [
      "Formula: Number of communication channels = n(n-1)/2, where n is the number of participants.",
      "Mathematical Growth: 5 people = 10 channels; 20 people = 190 channels; 100 people = 4,950 channels.",
      "Breakdown of Informal Agile: Spontaneous face-to-face communication cannot scale across thousands of channels without causing meeting paralysis.",
      "Solution: Structured scaling frameworks (SoS, LeSS, SAFe) providing intentional coordination mechanisms."
    ],
    "keywords": [
      "Communication Channels",
      "n(n-1)/2",
      "Quadratic Complexity",
      "Scaling Challenge",
      "Informal Communication Breakdown"
    ],
    "modelAnswer": "Agile methodologies were originally formulated for small, co-located teams (typically 5 to 9 members) where communication is informal, spontaneous, and high-bandwidth. When attempting to scale agile to large enterprise projects with dozens or hundreds of developers, informal communication collapses due to quadratic channel expansion:\n\n1. Mathematical Foundation: The potential communication channels between participants grow quadratically according to the formula:\nChannels = n(n - 1) / 2 (where n is the number of individuals involved).\n\n2. Channel Explosion in Practice:\n- For a small team of 5 developers: 5(4) / 2 = 10 communication channels (easily managed informally).\n- For 20 developers: 20(19) / 2 = 190 channels (information begins fragmenting).\n- For a 100-person project: 100(99) / 2 = 4,950 potential communication channels.\n\n3. The Breakdown: If 100 developers attempt to communicate informally and attend unstructured meetings, developer productivity drops to zero under meeting bloat. Consequently, large enterprise projects require structured scaled frameworks (like Scrum of Scrums, LeSS, or SAFe) that channel communication through designated ambassadors, synchronized cadences, and clear architectural guardrails.",
    "commonMistakes": "Forgetting the formula n(n-1)/2. Failing to contrast small-team informal bandwidth with large-scale channel explosion.",
    "selfCheckChecklist": [
      "Is the formula n(n-1)/2 stated and demonstrated with numeric examples?",
      "Is the collapse of informal communication explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Scaling Communication Complexity"
    }
  },
  {
    "id": "itpm-u6-qa-017",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Describe the operational mechanics of Scrum of Scrums (SoS). Detail its four guiding questions and explain the unique significance of the fourth question.",
    "examinerExpectation": "Student must explain ambassador representation, time-box (~15 mins), list all 4 questions, and highlight why question 4 enforces bilateral accountability.",
    "answerStructure": [
      "Structure: Ambassadors from individual Scrum teams meet regularly for ~15 minutes.",
      "Purpose: Coordinate cross-team dependencies and resolve shared impediments without gathering all developers.",
      "Question 1: What has your team done since we last met?",
      "Question 2: What will your team do before we meet again?",
      "Question 3: What impediments is your team facing that affect other teams?",
      "Question 4: Are you putting any impediment in the way of other teams?",
      "Significance of Question 4: Proactive bilateral reflection; detecting if your commits or API changes block peer teams."
    ],
    "keywords": [
      "Scrum of Scrums",
      "SoS",
      "Ambassadors",
      "Four Questions",
      "Cross-Team Dependencies",
      "Bilateral Accountability",
      "Impediments"
    ],
    "modelAnswer": "Scrum of Scrums (SoS, Course Book Fig. 47) is an agile scaling technique designed to coordinate multiple autonomous Scrum teams working on an integrated system:\n\n1. Operational Mechanics:\n- Meeting Structure: Individual feature teams (each 5-9 members) select an 'ambassador' (often the Scrum Master or a developer active on the relevant dependency) to attend an inter-team coordination meeting.\n- Time-Box: Held regularly (daily or 2-3 times per week) time-boxed to approximately 15 minutes.\n- Focus: Unlike single-team standups that focus on internal sprint tasks, SoS focuses strictly on inter-team dependencies, shared technical interfaces, and cross-team impediments.\n\n2. The Four Guiding Questions:\nEach ambassador addresses four specific questions:\n(1) What has your team done since we last met that affects other teams?\n(2) What will your team do before we meet again that could affect other teams?\n(3) What impediments is your team facing that require help from, or could affect, other teams?\n(4) Are you putting any impediment in the way of other teams?\n\n3. Significance of the Fourth Question:\nQuestion 4 is unique and foundational to cross-team collaboration. While Question 3 looks outward at 'who is blocking me', Question 4 forces teams to look inward and ask: 'Are our technical decisions, delayed code commits, or unannounced API changes causing blockers for our peers?' It establishes bilateral accountability, transforming teams from competitive silos into collaborative partners.",
    "commonMistakes": "Thinking SoS only asks the standard 3 questions. Assuming ambassadors must strictly be project managers.",
    "selfCheckChecklist": [
      "Are all 4 questions listed accurately?",
      "Is the inward-looking bilateral nature of Question 4 highlighted?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Scrum of Scrums Mechanics & Four Questions"
    }
  },
  {
    "id": "itpm-u6-qa-018",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Explain the architecture of Large-Scale Scrum (LeSS) created by Craig Larman and Bas Vodde. Detail its single-source rules and the philosophy of 'More with LeSS'.",
    "examinerExpectation": "Student must name creators, explain 'More with LeSS' (scaling by descaling), enumerate the single-source rules (1 PO, 1 Backlog, 1 Sprint, 1 DoD, 1 Increment), and explain Feature Teams.",
    "answerStructure": [
      "Creators & Philosophy: Craig Larman and Bas Vodde; 'More with LeSS' (scaling by removing organizational bloat).",
      "Single-Source Rules for up to 8 teams: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, ONE integrated Increment.",
      "Feature Teams: Teams are cross-functional across all architectural layers, avoiding component silos.",
      "Sprint Planning in LeSS: Planning 1 (shared WHAT) and Planning 2 (team-specific HOW).",
      "Contrast with Bureaucracy: LeSS adds zero new management roles or bureaucratic overhead."
    ],
    "keywords": [
      "Large-Scale Scrum",
      "LeSS",
      "Craig Larman",
      "Bas Vodde",
      "More with LeSS",
      "Single Product Owner",
      "Single Product Backlog",
      "Feature Teams"
    ],
    "modelAnswer": "Large-Scale Scrum (LeSS), created by Craig Larman and Bas Vodde, is an agile scaling framework founded on the core philosophy 'More with LeSS'\u2014achieving enterprise agility by descaling organizational hierarchy and eliminating bureaucratic bloat rather than piling on complex management scaffolding:\n\n1. Basic LeSS Scope & Single-Source Rules:\nBasic LeSS scales standard Scrum across up to 8 feature teams (50 to 70 developers) while strictly maintaining Scrum's core simplicity through five non-negotiable single-source rules:\n- ONE Product Owner: Exactly one human Product Owner holds business accountability for the entire multi-team product.\n- ONE Product Backlog: A single, unified list of prioritized requirements from which all 8 teams pull work.\n- ONE Synchronized Sprint: All teams operate on identical sprint start and end dates.\n- ONE Common Definition of Done: A shared organizational baseline quality standard that applies to all teams.\n- ONE Potentially Releasable Increment: At the end of every sprint, all teams merge their code into a single, fully integrated, testable software increment.\n\n2. Cross-Functional Feature Teams:\nLeSS forbids architectural 'component teams' (e.g. separate UI team, Database team, Backend team). Instead, all teams are Feature Teams capable of pulling an end-to-end customer requirement from the backlog and implementing it across all architectural layers, eliminating hand-offs and inter-team dependency queues.",
    "commonMistakes": "Assuming each team in LeSS gets its own Product Owner or separate backlog. Believing LeSS adds lots of new management roles.",
    "selfCheckChecklist": [
      "Are Craig Larman and Bas Vodde named?",
      "Are all 5 single-source rules listed (1 PO, 1 Backlog, 1 Sprint, 1 DoD, 1 Increment)?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Large-Scale Scrum (LeSS) Architecture"
    }
  },
  {
    "id": "itpm-u6-qa-019",
    "unit": 6,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "How does 'LeSS Huge' adapt the Large-Scale Scrum framework for enterprise initiatives involving more than 8 teams? Explain the role of Area Product Owners (APOs).",
    "examinerExpectation": "Student must explain that projects beyond 8 teams introduce Requirement Areas, managed by Area Product Owners (APOs) who report to the overall Product Owner.",
    "answerStructure": [
      "Context: Basic LeSS maxes out at ~8 teams. Projects with 10 to 100+ teams require LeSS Huge.",
      "Cognitive Bottleneck: A single PO cannot groom backlogs for hundreds of developers alone.",
      "Requirement Areas: The master product is split into functional customer domains (e.g. Checkout, Catalog, Search).",
      "Area Product Owners (APOs): Each Requirement Area has an APO managing that area's sub-backlog.",
      "Overall Product Owner Role: Retains strategic vision, area prioritization, and enterprise alignment."
    ],
    "keywords": [
      "LeSS Huge",
      "Area Product Owner",
      "APO",
      "Requirement Areas",
      "Enterprise Scaling",
      "Cognitive Bottleneck"
    ],
    "modelAnswer": "While Basic LeSS effectively scales Scrum up to 8 feature teams, large enterprise systems involving hundreds or thousands of developers exceed the cognitive capacity of a single Product Owner. To scale further without losing agility, Larman and Vodde designed 'LeSS Huge':\n\n1. Requirement Areas:\nIn LeSS Huge, the product is partitioned into several customer-centric 'Requirement Areas' (e.g. in a core banking system: Loans, Credit Cards, Online Banking, Risk Compliance). Each Requirement Area contains 4 to 8 feature teams.\n\n2. Area Product Owners (APOs):\n- Each Requirement Area is assigned an Area Product Owner (APO).\n- The APO acts as the focused Product Owner for their specific area, grooming the Area Product Backlog and prioritizing user stories with their area's feature teams.\n\n3. The Overall Product Owner (OPO):\n- A single head Product Owner remains at the apex of the product.\n- The OPO focuses on enterprise product vision, overall strategic direction, and allocating team capacity across the Requirement Areas, delegating detailed feature prioritization to the APOs.",
    "commonMistakes": "Confusing Basic LeSS with LeSS Huge (Basic LeSS has NO APOs). Thinking APOs represent technical component teams rather than customer requirement areas.",
    "selfCheckChecklist": [
      "Is the distinction between Basic LeSS and LeSS Huge clear?",
      "Are Requirement Areas and Area Product Owners explained?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "LeSS Huge & Area Product Owners"
    }
  },
  {
    "id": "itpm-u6-qa-020",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Analyze the Scaled Agile Framework (SAFe) created by Dean Leffingwell. Explain the role of the Agile Release Train (ART) and deconstruct the CALMR approach to DevOps.",
    "examinerExpectation": "Student must name Dean Leffingwell, describe the ART (50-125 people on synchronized cadence), and define all 5 letters of CALMR (Culture, Automation, Lean Flow, Measurement, Recovery).",
    "answerStructure": [
      "Creator & Scope: Dean Leffingwell; enterprise multi-tier framework (Team, Program, Solution, Portfolio).",
      "Agile Release Train (ART): Long-lived team-of-teams (50 to 125 people) delivering value on synchronized cadence.",
      "CALMR DevOps Framework:\n  - C = Culture (shared responsibility between Dev and Ops)\n  - A = Automation (CI/CD pipelines, automated testing)\n  - L = Lean Flow (small batches, limiting WIP)\n  - M = Measurement (flow, MTTR, cycle time)\n  - R = Recovery (low MTTR, rollbacks, resilience).",
      "Summary: SAFe provides comprehensive enterprise scaffolding for large corporations."
    ],
    "keywords": [
      "SAFe",
      "Dean Leffingwell",
      "Agile Release Train",
      "ART",
      "50 to 125 people",
      "CALMR",
      "Culture",
      "Automation",
      "Lean Flow",
      "Measurement",
      "Recovery"
    ],
    "modelAnswer": "The Scaled Agile Framework (SAFe), created by Dean Leffingwell, is a highly structured enterprise framework that scales lean-agile practices across large multi-divisional corporations:\n\n1. The Agile Release Train (ART):\n- The central value delivery construct in SAFe.\n- An ART is a long-lived, cross-functional team-of-teams typically comprising 50 to 125 practitioners.\n- It aligns multiple agile teams to a shared mission, planning together during face-to-face Program Increment (PI) Planning events and executing on a synchronized cadence.\n\n2. The CALMR Approach to DevOps:\nSAFe incorporates DevOps through the CALMR mindset, ensuring continuous value delivery:\n- Culture (C): Fosters shared responsibility between software developers and IT operations, breaking down functional silos to jointly own system stability and deployment.\n- Automation (A): Eliminates manual error-prone hand-offs through automated CI/CD deployment pipelines, automated testing suites, and infrastructure-as-code.\n- Lean Flow (L): Accelerates throughput by shrinking batch sizes, limiting Work In Progress (WIP), and managing queue lengths.\n- Measurement (M): Objectively evaluates delivery performance using flow metrics, cycle times, deployment frequencies, and defect escape rates.\n- Recovery (R): Engineers systems for resilience, prioritizing low Mean Time To Recovery (MTTR) through automated rollbacks, blue-green deployments, and feature flags.",
    "commonMistakes": "Forgetting what CALMR stands for. Missing the official headcount range of the ART (50-125 people).",
    "selfCheckChecklist": [
      "Is Dean Leffingwell named?",
      "Is the ART headcount (50-125) stated?",
      "Are all 5 letters of CALMR deconstructed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "SAFe, ART, and CALMR DevOps"
    }
  },
  {
    "id": "itpm-u6-qa-021",
    "unit": 6,
    "marks": 8,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Contrast Large-Scale Scrum (LeSS) and the Scaled Agile Framework (SAFe) in terms of organizational philosophy, role overhead, and tailoring approach.",
    "examinerExpectation": "Student must contrast minimal descaling (LeSS) vs prescriptive scaffolding (SAFe), compare role overhead, and assess organizational suitability.",
    "answerStructure": [
      "Core Philosophy: LeSS = 'More with LeSS' (descaling, removing roles); SAFe = Comprehensive enterprise scaffolding.",
      "Role Overhead: LeSS adds zero new management roles in basic mode; SAFe adds Release Train Engineers, Solution Architects, Business Owners, Portfolio Managers.",
      "Prescriptiveness: LeSS is minimalist and principles-based; SAFe is highly prescriptive with detailed multi-tier templates.",
      "Critique: LeSS can be difficult for hierarchical corporate cultures to adopt; SAFe can feel like rebranded top-down bureaucracy to frontline engineers."
    ],
    "keywords": [
      "LeSS vs SAFe",
      "Descaling",
      "Prescriptive Scaffolding",
      "Role Overhead",
      "More with LeSS",
      "Enterprise Framework"
    ],
    "modelAnswer": "LeSS (Larman & Vodde) and SAFe (Leffingwell) represent two radically different philosophies for scaling agile across enterprise organizations:\n\n1. Organizational Philosophy:\n- LeSS adopts a minimalist, 'descaling' approach based on the principle 'More with LeSS'. It asserts that large organizations fail because they add too many management layers and specialized roles; true agility comes from stripping away bureaucracy and letting cross-functional feature teams self-organize around a single Product Backlog.\n- SAFe adopts a prescriptive, multi-tiered enterprise scaffolding approach. It acknowledges existing corporate hierarchies (Executive, Portfolio, Program, Team) and provides detailed processes, roles, and governance artifacts to coordinate agile teams within enterprise realities.\n\n2. Role and Management Overhead:\n- LeSS introduces NO new management roles in its basic framework (up to 8 teams share 1 PO and standard Scrum Masters). It adamantly rejects adding managers between teams and customers.\n- SAFe introduces an extensive suite of specialized roles: Release Train Engineers (RTEs), Product Managers, System Architects, Business Owners, Epic Owners, and Enterprise Architects.\n\n3. Adoption & Culture Fit:\n- LeSS demands deep organizational restructuring (dissolving component silos into true feature teams), which legacy corporate cultures often resist.\n- SAFe is easier for large corporations to adopt because it maps cleanly to corporate budgeting and hierarchy, but developers frequently criticize it for recreating top-down command-and-control bureaucracy under agile terminology.",
    "commonMistakes": "Treating both frameworks as identical. Failing to emphasize LeSS's radical removal of roles versus SAFe's addition of enterprise roles.",
    "selfCheckChecklist": [
      "Are both frameworks compared on philosophy, roles, and corporate fit?",
      "Is the course book's critical insight included?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "LeSS vs SAFe Comparison"
    }
  },
  {
    "id": "itpm-u6-qa-022",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Analyze the spectrum of Organizational Structures (Functional, Matrix [Weak, Balanced, Strong], and Projectized). Compare how Project Manager authority, resource availability, and budget control vary across each structure.",
    "examinerExpectation": "Student must define all 5 structures, compare PM authority (none to total), budget control, and team reporting relationships.",
    "answerStructure": [
      "Functional Organization: Department silos; PM has little/no authority, part-time coordinator; Functional manager controls budget.",
      "Weak Matrix: Functional manager dominates; PM is expediter/coordinator; functional budget control.",
      "Balanced Matrix: Shared authority; PM manages project schedule/tasks; functional manager provides staff; shared budget.",
      "Strong Matrix: PM has primary authority, full-time PM role, controls budget; dedicated PM department/PMO.",
      "Projectized Organization: Team dedicated full-time to project; PM has total authority over staff and budget.",
      "Comparison Table summarizing Structure, PM Authority, Budget Owner, and Team Assignment."
    ],
    "keywords": [
      "Organizational Structures",
      "Functional",
      "Weak Matrix",
      "Balanced Matrix",
      "Strong Matrix",
      "Projectized",
      "PM Authority Spectrum"
    ],
    "modelAnswer": "An organization's formal structure dictates the authority, autonomy, and effectiveness of its project managers along a broad spectrum:\n\n1. Functional Organization:\n- Structure: Staff are grouped by professional specialty into permanent functional departments (engineering, marketing, accounting).\n- PM Authority: Little or no formal authority. The PM acts as a part-time project coordinator or expediter who cannot enforce decisions.\n- Budget & Resources: Controlled 100% by Functional Department Managers.\n\n2. Matrix Organizations (The Balance of Power Continuum):\n- Weak Matrix: Maintains functional dominance. The PM coordinates tasks across departments but possesses limited decision-making power; functional managers control budgets and performance evaluations.\n- Balanced Matrix: Authority is shared relatively equally. The PM defines WHAT needs to be done and WHEN (schedule/tasks), while Functional Managers decide WHO executes the work and HOW technical quality is maintained.\n- Strong Matrix: The PM holds primary authority. The PM is full-time, controls the project budget, and typically reports to a dedicated PMO Director. Functional managers act as resource suppliers.\n\n3. Projectized (Project-Oriented) Organization:\n- Structure: Projects are the primary organizational units. Team members are dedicated full-time to the project and co-located.\n- PM Authority: High to total authority. The PM controls the budget, directs daily operations, and directly evaluates team personnel.",
    "commonMistakes": "Confusing Weak Matrix with Strong Matrix. Failing to mention that in Balanced Matrix, authority is split (What/When vs Who/How).",
    "selfCheckChecklist": [
      "Are all 5 structures defined accurately?",
      "Is PM authority tracked from 'little/none' up to 'total'?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Organizational Structures Spectrum"
    }
  },
  {
    "id": "itpm-u6-qa-023",
    "unit": 6,
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "question": "Explain the 'No Home' challenge in pure Projectized organizations. What human resource risks does it introduce, and how can leadership mitigate them?",
    "examinerExpectation": "Student must define the 'no home' problem (lack of functional department to return to upon project closure), describe employee anxiety, and detail mitigation strategies.",
    "answerStructure": [
      "Definition of 'No Home': In projectized firms, staff are attached to temporary projects, not permanent functional departments.",
      "The Problem: As project closing approaches, staff experience acute career anxiety regarding job security or next project assignment.",
      "Negative Operational Impact: Reduced focus during project closing, gold-plating/dragging out tasks to delay termination, attrition of top talent.",
      "Mitigation Strategies: Proactive resource planning by PMO, early reassignment interviews 2-3 months before project close, transitioning to operational support."
    ],
    "keywords": [
      "No Home Challenge",
      "Projectized Organization",
      "Project Closure Anxiety",
      "Resource Reassignment",
      "Career Insecurity",
      "PMO Planning"
    ],
    "modelAnswer": "In a pure Projectized (Project-Oriented) organizational structure, the project is the primary structural unit and permanent functional departments do not exist. This creates the classic human resource dilemma known as the 'No Home' problem:\n\n1. Cause of the Dilemma:\nIn functional or matrix organizations, team members return to their home department (e.g. the Software Engineering Department) once a project finishes. In a pure projectized organization, team members belong solely to the project. When the project terminates, their position ceases to exist.\n\n2. Operational Risks & Negative Impact:\n- Career Anxiety: As the project completion milestone approaches, team members experience high anxiety regarding potential unemployment or delayed reassignment.\n- Dragging Out Project Closure: Anxious developers may consciously or unconsciously stretch out final deliverables, invent minor tasks, or gold-plate code to avoid project termination.\n- Talent Attrition: Top engineers may abandon the project in its critical final weeks to accept permanent job offers elsewhere.\n\n3. Leadership Mitigation Strategies:\n- Early PMO Pipeline Planning: The PMO must plan upcoming projects 2 to 3 months in advance and communicate pipeline assignments to team members early.\n- Operational Transitioning: Assigning key developers to the Production/Maintenance phase of the released system.\n- Enterprise Talent Pooling: Maintaining an explicit talent bench to smooth transitions between project assignments.",
    "commonMistakes": "Thinking the 'no home' problem refers to remote work or physical offices. Forgetting the impact on project closure delays.",
    "selfCheckChecklist": [
      "Is the 'no home' dilemma clearly defined as a project closure HR issue?",
      "Are operational risks and mitigation strategies detailed?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Projectized 'No Home' Dilemma"
    }
  },
  {
    "id": "itpm-u6-qa-024",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Differentiate between Iterative, Incremental, and Agile software development lifecycles as strictly defined in the course book. Illustrate your answer with practical software examples.",
    "examinerExpectation": "Student must provide the exact course book definitions: Iterative (low fidelity of all features early, refined together); Incremental (subset of features fully built first, more added later); Agile (combines iterative and incremental).",
    "answerStructure": [
      "Iterative Development: Initial low-fidelity version encompassing all/most features early, progressively increasing fidelity across iterations (e.g. rough sketch to oil painting).",
      "Incremental Development: Completely finishes a small subset of features to 100% operational fidelity first, adding more completed features in subsequent releases (e.g. building a car by finishing the engine first).",
      "Agile Development: Combines BOTH models \u2014 delivering usable feature increments at the end of every sprint while iteratively adapting architecture and backlog.",
      "Practical Software Example illustrating the distinct development paths."
    ],
    "keywords": [
      "Iterative Development",
      "Incremental Development",
      "Agile Development",
      "Fidelity",
      "Feature Slices",
      "Course Book Distinction"
    ],
    "modelAnswer": "The official IU course book draws an exact, rigorous distinction between Iterative, Incremental, and Agile development, rejecting the sloppy industry habit of treating them as identical synonyms:\n\n1. Iterative Development (Evolving Fidelity across All Features):\n- Definition: Creates smaller chunks from a large software application, developing an initial low-fidelity version that encompasses all or most of the system's core features early. Subsequent iterations revisit and refine all elements together, progressively deepening architectural robustness, performance, and UI polish.\n- Analogy: An artist painting a canvas: first sketching the entire scene in pencil, then painting broad watercolor washes, and finally adding detailed oil textures across the whole image.\n- Software Example: Launching an e-commerce platform where catalog, cart, checkout, and search all exist on day one, but with dummy mock data and basic styling, iteratively upgraded to production databases and payment gateways.\n\n2. Incremental Development (Adding Fully Finished Feature Slices):\n- Definition: Begins with smaller parts of a larger model, completely finishing a subset of features to 100% operational fidelity before moving to the next. Slices are added incrementally until the product is fully formed.\n- Analogy: Building a modular house: completing the bedroom 100% (plumbing, paint, furniture) before building the kitchen 100%.\n- Software Example: Building the e-commerce platform by fully implementing, testing, and shipping only the 'User Authentication' module first. Once finished, fully implementing and shipping 'Product Catalog', and so on.\n\n3. Agile Development (The Synthesis):\n- Definition: Agile synthesizes BOTH iterative and incremental paradigms: it delivers usable, potentially releasable working increments of software in short sprints (incremental delivery) while continuously refining, adapting, and refactoring overall architecture and future user stories based on empirical feedback (iterative refinement).",
    "commonMistakes": "Treating Iterative and Incremental as identical. Failing to explain the difference in 'fidelity' across features.",
    "selfCheckChecklist": [
      "Is Iterative defined as low-fidelity of all features refined over time?",
      "Is Incremental defined as full-fidelity of few features added over time?",
      "Is Agile defined as combining both?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Iterative vs Incremental vs Agile"
    }
  },
  {
    "id": "itpm-u6-qa-025",
    "unit": 6,
    "marks": 8,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 15,
    "question": "Provide a comprehensive methodology selection framework for large IT projects. When should an enterprise select Predictive (PMBOK/PRINCE2), Adaptive (Scaled Agile/LeSS), or a Hybrid model?",
    "examinerExpectation": "Student must synthesize criteria across project size, uncertainty, regulatory audits, customer availability, and contract type, explaining why Hybrid is often optimal for enterprise IT.",
    "answerStructure": [
      "Premise: 'One-size-fits-all' does not exist in IT project management.",
      "Select Predictive (PMBOK / PRINCE2) When: Clear/stable requirements, safety-critical systems, strict regulatory compliance/audits, fixed-price commercial contracts.",
      "Select Adaptive (Scaled Agile / LeSS / SAFe) When: High requirement uncertainty/volatility, competitive time-to-market pressure, continuous customer availability, innovative exploratory software.",
      "Select Hybrid Model (Course Book Fig. 48) When: Enterprise systems needing predictive governance, procurement, and budget baselines combined with agile iterative sprint execution.",
      "Conclusion: Matching methodology to project dimensions ensures governance without suffocating agility."
    ],
    "keywords": [
      "Methodology Selection",
      "Predictive",
      "Adaptive",
      "Hybrid",
      "PMBOK",
      "PRINCE2",
      "LeSS",
      "SAFe",
      "Figure 48",
      "Decision Framework"
    ],
    "modelAnswer": "As emphasized in Course Book Section 6.5, a 'one-size-fits-all' methodology is a dangerous myth in IT project management. The selection of an appropriate project methodology for large initiatives requires evaluating multi-dimensional project characteristics:\n\n1. Select Predictive Methodologies (PMBOK Guide / PRINCE2) When:\n- Requirement Stability: Requirements are clearly defined, well-understood, and legally frozen upfront.\n- Criticality & Certification: The system is safety-critical (e.g. avionics, medical devices, nuclear control) or subject to strict statutory audits requiring 1:1 verification traceability.\n- Contractual Structure: The initiative operates under a fixed-price, fixed-scope commercial procurement contract with external vendor penalties.\n- Customer Engagement: Client stakeholders are unavailable for daily collaboration and prefer formal phase-gate approvals.\n\n2. Select Adaptive Methodologies (Scaled Agile / LeSS / SAFe) When:\n- Requirement Volatility: Requirements are exploratory, rapidly evolving, or driven by dynamic competitive market pressures.\n- Feedback Cadence: Rapid time-to-market and continuous customer validation of working software increments are essential.\n- Stakeholder Engagement: An empowered customer representative or Product Owner is embedded and available daily to steer backlog priorities.\n- Architecture & Culture: The software architecture is decoupled (microservices/APIs) and the organizational culture supports blameless retrospectives and self-organizing teams.\n\n3. Select a Hybrid Methodology (Course Book Figure 48) When:\n- Enterprise Reality: In complex modern IT projects, organizations frequently adopt a Hybrid model: employing predictive governance (PRINCE2 stage gates or PMBOK procurement/cost baselines) to satisfy corporate budgeting and regulatory audit requirements, while empowering engineering teams to execute daily development in adaptive agile sprints (Scrum/LeSS). This achieves governance predictability at the enterprise level with delivery agility at the technical level.",
    "commonMistakes": "Claiming Agile is always best or that Predictive models are dead. Overlooking contractual and safety-critical constraints.",
    "selfCheckChecklist": [
      "Are both Predictive and Adaptive criteria evaluated comprehensively?",
      "Is the Hybrid model highlighted matching Figure 48?"
    ],
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Methodology Selection Framework"
    }
  }
];
