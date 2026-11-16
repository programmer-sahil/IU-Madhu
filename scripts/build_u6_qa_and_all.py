import json

# =========================================================================
# 1. QA.TS (25 Q&As)
# =========================================================================
qa_list = [
    # 6.1 PMBOK (1-5)
    {
        "id": "itpm-u6-qa-001", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Explain the structure of the PMBOK Guide as presented in the course book. Detail the distribution of its 47 processes across the 5 Process Groups and 10 Knowledge Areas.",
        "examinerExpectation": "Student must list all 5 process groups with exact process counts (2-24-8-11-2 = 47), list the 10 knowledge areas, and explain the ITTO architecture.",
        "answerStructure": [
            "Introduction: PMI PMBOK as global standard.",
            "5 Process Groups with exact counts: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2) = 47 processes.",
            "10 Knowledge Areas enumerated: Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder.",
            "ITTO Architecture: Inputs, Tools & Techniques, Outputs.",
            "Summary: Emphasize that Planning contains >50% of processes, reflecting plan-driven rigor."
        ],
        "keywords": ["PMBOK", "Process Groups", "Knowledge Areas", "47 Processes", "ITTO", "Initiating", "Planning", "Executing", "Monitoring & Controlling", "Closing"],
        "modelAnswer": "The PMBOK Guide (Project Management Body of Knowledge), published by the Project Management Institute (PMI), structures project management into a 5x10 matrix consisting of 5 Process Groups and 10 Knowledge Areas, formalizing exactly 47 discrete processes:\n\n1. Five Process Groups (Chronological / Lifecycle Flow):\n- Initiating (2 processes): Develop Project Charter, Identify Stakeholders.\n- Planning (24 processes): Contains over half of all processes, developing the baselines for scope, schedule, budget, risk, and procurement.\n- Executing (8 processes): Coordinating personnel and resources to implement the plan.\n- Monitoring & Controlling (11 processes): Tracking, reviewing, and regulating progress against baselines, and controlling changes.\n- Closing (2 processes): Close Project or Phase, Close Procurements.\nTotal = 2 + 24 + 8 + 11 + 2 = 47 processes.\n\n2. Ten Knowledge Areas (Specialized Domains):\nProject Integration, Scope, Time/Schedule, Cost, Quality, Human Resources, Communications, Risk, Procurement, and Stakeholder Management.\n\nEvery process is standardized using an ITTO framework: taking defined Inputs (documents, organizational assets), applying specific Tools & Techniques (expert judgment, analytical techniques), and yielding formal Outputs (plans, deliverables, change requests).",
        "commonMistakes": "Getting process counts wrong (must be 2-24-8-11-2 = 47). Confusing process groups with project phases.",
        "selfCheckChecklist": ["Are all 5 process groups named with exact counts?", "Do the counts sum to 47?", "Are all 10 knowledge areas listed?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK 5x10 Matrix & 47 Processes"}
    },
    {
        "id": "itpm-u6-qa-002", "unit": 6, "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 10,
        "question": "Differentiate between 'Project Scope' and 'Product Scope' in PMBOK. Explain how each is measured and controlled.",
        "examinerExpectation": "Student must define both terms, contrast 'work performed' with 'features delivered', and explain their respective measurement baselines.",
        "answerStructure": [
            "Define Product Scope: Features, functions, and technical characteristics of the deliverable.",
            "Define Project Scope: All work required to successfully deliver the product scope.",
            "Measurement Contrast: Product scope measured against requirements; Project scope measured against WBS/Plan.",
            "Control Contrast: Product scope validated via Validate Scope; Project scope controlled via Control Scope and change control."
        ],
        "keywords": ["Product Scope", "Project Scope", "Features and Functions", "Work Performed", "WBS Baseline", "Requirements Conformance"],
        "modelAnswer": "A fundamental distinction in PMBOK Project Scope Management is maintained between Product Scope and Project Scope:\n\n1. Product Scope:\n- Definition: The features, functions, performance metrics, and technical characteristics that define the actual product, service, or result being created.\n- Focus: 'What is being delivered?' (e.g., encryption standards, response time, database schema, user interface features).\n- Measurement: Measured against the formal Product Requirements document and acceptance criteria.\n\n2. Project Scope:\n- Definition: The entirety of the work performed by the project team to deliver the product scope with specified quality.\n- Focus: 'What work must the team execute?' (e.g., writing specifications, setting up developer environments, conducting code reviews, weekly reporting, procurement negotiations).\n- Measurement: Measured against the Project Management Plan, Work Breakdown Structure (WBS), and WBS Dictionary.\n\nA project manager controls product scope through user validation and testing, while controlling project scope through baseline governance and preventing unauthorized work (gold-plating).",
        "commonMistakes": "Confusing the two definitions. Assuming project scope is just an informal synonym for product features.",
        "selfCheckChecklist": ["Is Product Scope tied to features/requirements?", "Is Project Scope tied to work performed/WBS?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Project Scope vs Product Scope"}
    },
    {
        "id": "itpm-u6-qa-003", "unit": 6, "marks": 8, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "What is the Performance Measurement Baseline (PMB) in PMBOK, and how does it integrate Earned Value Management (EVM)?",
        "examinerExpectation": "Student must define PMB as the integration of Scope, Schedule, and Cost baselines, and explain how EVM calculates variances against it.",
        "answerStructure": [
            "Define Performance Measurement Baseline (PMB): Integrated Scope, Schedule, and Cost baselines.",
            "Exclusion of Management Reserves: PMB includes contingency reserves but excludes management reserves.",
            "Role of Earned Value Management (EVM): Mathematical tracking of Planned Value (PV), Earned Value (EV), and Actual Cost (AC).",
            "Variance Analysis: Cost Variance (EV - AC) and Schedule Variance (EV - PV).",
            "Forecasting: Cost Performance Index (EV / AC) and Schedule Performance Index (EV / PV) projecting Estimate at Completion (EAC)."
        ],
        "keywords": ["Performance Measurement Baseline", "PMB", "Earned Value Management", "PV", "EV", "AC", "CV", "SV", "CPI", "SPI"],
        "modelAnswer": "The Performance Measurement Baseline (PMB) is an approved, integrated scope-schedule-cost plan for project work against which actual project execution is mathematically evaluated:\n\n1. Composition: It is formed by integrating three primary baselines: the Scope Baseline (WBS + WBS Dictionary + Scope Statement), the Schedule Baseline, and the Cost Baseline (time-phased budget). It includes contingency reserves for known-unknown risks, but strictly excludes management reserves (which cover unknown-unknowns).\n\n2. Operationalization through Earned Value Management (EVM):\nEVM tracks three primary dimensions against the PMB:\n- Planned Value (PV): The authorized budget assigned to scheduled work.\n- Earned Value (EV): The measure of work performed expressed in terms of the budget authorized for that work.\n- Actual Cost (AC): The realized cost incurred for the work performed.\n\n3. Variance & Efficiency Tracking:\n- Schedule Variance: SV = EV - PV (measures schedule deviation in dollar terms).\n- Cost Variance: CV = EV - AC (measures budget overrun or underrun).\n- Performance Indices: CPI = EV / AC and SPI = EV / PV quantify cost and schedule efficiency, projecting the Estimate at Completion (EAC).",
        "commonMistakes": "Including management reserves in the PMB (management reserves are outside the PMB). Forgetting that PMB unifies all three constraints (Scope, Time, Cost).",
        "selfCheckChecklist": ["Are Scope, Schedule, and Cost baselines identified?", "Are PV, EV, and AC integrated?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Performance Measurement Baseline & EVM"}
    },
    {
        "id": "itpm-u6-qa-004", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Describe the Change Control process in PMBOK. What is the role and composition of the Change Control Board (CCB)?",
        "examinerExpectation": "Student must detail the process 'Perform Integrated Change Control', describe how change requests flow, and explain the authority and composition of the CCB.",
        "answerStructure": [
            "Process Placement: Perform Integrated Change Control in Monitoring & Controlling / Integration Management.",
            "Flow of Change Requests: Submission -> Impact Analysis across all constraints -> CCB Evaluation -> Decision (Approve/Reject/Defer) -> Baseline Update & Communication.",
            "Role of CCB: Formally chartered body responsible for approving or rejecting changes to baselines.",
            "Composition of CCB: Project sponsor, project manager, customer/user reps, technical leads, procurement reps."
        ],
        "keywords": ["Perform Integrated Change Control", "Change Control Board", "CCB", "Change Request", "Baseline Update", "Impact Analysis"],
        "modelAnswer": "In PMBOK, changes to project baselines are governed through the formal process 'Perform Integrated Change Control' within Project Integration Management:\n\n1. Change Request Workflow:\n- Any stakeholder may submit a formal Change Request.\n- The Project Manager assesses the holistic impact of the proposed change across all Iron Triangle constraints (scope, schedule, budget, quality, resources, and risk).\n- The change request and impact analysis are submitted to the Change Control Board (CCB).\n- The CCB formally evaluates, approves, rejects, or defers the change.\n- Approved changes result in updating project baselines, revising work packages, and notifying all affected stakeholders.\n\n2. Role and Composition of the Change Control Board (CCB):\n- Role: A formally chartered committee authorized to make binding decisions on proposed baseline modifications. It prevents scope creep and unauthorized schedule or budget expansions.\n- Composition: Typically chaired by the Project Sponsor or Executive, comprising the Project Manager, customer/user representatives, senior technical architects, and legal/procurement officers. The PM does not act as sole arbiter of baseline changes.",
        "commonMistakes": "Assuming the Project Manager has unilateral authority to approve baseline changes. Overlooking the holistic impact analysis step.",
        "selfCheckChecklist": ["Is the CCB defined as a formal chartered board?", "Is holistic impact analysis explained?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Change Control & CCB"}
    },
    {
        "id": "itpm-u6-qa-005", "unit": 6, "marks": 6, "priority": "MEDIUM PRIORITY", "suggestedTimeMinutes": 10,
        "question": "What administrative and operational activities are mandated during the PMBOK 'Close Project or Phase' process? Why must this process be executed even for cancelled projects?",
        "examinerExpectation": "Student must enumerate closing activities (handover, lessons learned, archiving, resource release) and explain why premature cancellations still require formal closure.",
        "answerStructure": [
            "Mandated Activities: Deliverable handover, customer acceptance sign-off, archiving files, updating organizational assets, releasing staff/resources.",
            "Lessons Learned: Conducting final retrospective to capture what went well and what failed.",
            "Premature Closures: Even if cancelled, must document reasons for failure, salvage partial deliverables, release contracts, and record lessons."
        ],
        "keywords": ["Close Project or Phase", "Administrative Closure", "Deliverable Handover", "Lessons Learned", "Resource Release", "Premature Termination"],
        "modelAnswer": "The PMBOK process 'Close Project or Phase' finalizes all activities across all process groups to formally complete the project or a specific lifecycle phase:\n\n1. Mandated Activities:\n- Formal Handover: Transferring finalized, accepted deliverables to operational maintenance teams or customer ownership.\n- Administrative Archiving: Collecting, indexing, and archiving all project documentation, contracts, change logs, and performance metrics.\n- Financial & Contract Closure: Finalizing contractor invoices, closing open purchase orders, and conducting formal vendor evaluations.\n- Resource Reassignment: Releasing personnel, equipment, and testing environments back to functional pools.\n- Lessons Learned Documentation: Compiling final project retrospectives to update Organizational Process Assets (OPAs).\n\n2. Applicability to Prematurely Terminated Projects:\nIf a project is cancelled early (due to budget cuts or lost business justification), Close Project or Phase MUST still be executed. It establishes the formal date and rationale for termination, salvages useful partial code or intellectual property, ensures vendor contracts are legally settled, and documents why the project failed so the enterprise avoids repeating identical mistakes.",
        "commonMistakes": "Assuming that cancelled projects simply stop without executing the Closing process. Forgetting resource release and lessons learned.",
        "selfCheckChecklist": ["Are both operational handover and administrative archiving included?", "Is the rationale for closing cancelled projects clearly stated?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Project Closing Activities"}
    },

    # 6.2 PRINCE2 (6-11)
    {
        "id": "itpm-u6-qa-006", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Analyze the 7-7-7 structural architecture of PRINCE2. Briefly define its Principles, Themes, and Processes.",
        "examinerExpectation": "Student must list all 7 Principles, 7 Themes, and 7 Processes, defining what each structural category represents in the methodology.",
        "answerStructure": [
            "Overview: 7-7-7 architecture created by UK government (CCTA/OGC/AXELOS).",
            "7 Principles: Universal, mandatory rules (Continued business justification, Learn from experience, Defined roles, Manage by stages, Manage by exception, Focus on products, Tailor).",
            "7 Themes: Continuing aspects of project management (Business Case, Organization, Quality, Plans, Risk, Change, Progress).",
            "7 Processes: Step-by-step lifecycle flow (SU, DP, IP, CS, MP, SB, CP)."
        ],
        "keywords": ["PRINCE2", "7-7-7", "Seven Principles", "Seven Themes", "Seven Processes", "Business Case", "Manage by Stages", "Manage by Exception"],
        "modelAnswer": "PRINCE2 (PRojects IN Controlled Environments) is built upon an integrated structural architecture consisting of exactly 7 Principles, 7 Themes, and 7 Processes:\n\n1. Seven Principles (The Mandatory Foundation):\nUniversal, self-validating rules that must all be observed for a project to be considered a PRINCE2 project:\n(1) Continued business justification, (2) Learn from experience, (3) Defined roles and responsibilities, (4) Manage by stages, (5) Manage by exception, (6) Focus on products, and (7) Tailor to suit the project environment.\n\n2. Seven Themes (The Continuing Management Aspects):\nSpecific management disciplines that must be continually addressed throughout the project lifecycle:\n(1) Business Case, (2) Organization, (3) Quality, (4) Plans, (5) Risk, (6) Change, and (7) Progress.\n\n3. Seven Processes (The Chronological Lifecycle Management Flow):\nThe chronological and event-driven workflow guiding the project from pre-project startup through closure:\n(1) Starting up a Project (SU), (2) Directing a Project (DP), (3) Initiating a Project (IP), (4) Controlling a Stage (CS), (5) Managing Product Delivery (MP), (6) Managing a Stage Boundary (SB), and (7) Closing a Project (CP).",
        "commonMistakes": "Mixing up items between Principles and Themes (e.g. calling Business Case a principle). Omitting Tailoring from the principles.",
        "selfCheckChecklist": ["Are all 7 Principles listed accurately?", "Are all 7 Themes listed accurately?", "Are all 7 Processes listed accurately?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 7-7-7 Architecture"}
    },
    {
        "id": "itpm-u6-qa-007", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
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
        "keywords": ["Four Management Levels", "Project Board", "Executive", "Senior User", "Senior Supplier", "Directing Level", "Accountability Triad"],
        "modelAnswer": "PRINCE2 separates project governance into four distinct management levels, ensuring clear boundaries between executive strategy, operational management, and technical delivery:\n\n1. Corporate or Programme Management: Commissioning level; mandates the project and appoints the Executive.\n2. Project Board (Directing Level): Holds overall authority, makes strategic decisions, commits resources, and approves stage plans.\n3. Project Manager (Managing Level): Runs day-to-day operations within tolerances agreed with the Project Board.\n4. Team Managers (Delivering Level): Lead specialized technical production of deliverables specified in Work Packages.\n\nThe Project Board Triad:\nThe Project Board is a three-role governance committee balancing all critical project interests:\n- The Executive: Appointed by corporate management, the Executive holds ultimate personal accountability for project success. Represents business interests, provides funding, and owns the Business Case.\n- The Senior User: Represents the departments and users who will operate the deliverables. Responsible for specifying operational requirements, committing user resources, and verifying that the project realizes planned operational benefits.\n- The Senior Supplier: Represents the internal engineering groups or external contractors building the deliverables. Responsible for technical feasibility, quality integrity, and supplying specialized technical personnel.\n\nThe Project Manager reports directly to the Project Board and is NEVER a voting member of the Board.",
        "commonMistakes": "Placing the Project Manager on the Project Board. Omitting the Senior Supplier or confusing Senior User with end-consumer.",
        "selfCheckChecklist": ["Are all 4 management levels named in hierarchical order?", "Are Executive, Senior User, and Senior Supplier defined clearly?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Management Levels & Project Board"}
    },
    {
        "id": "itpm-u6-qa-008", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Compare the PRINCE2 principles of 'Manage by Stages' and 'Manage by Exception'. How do they operate together to enforce governance without micro-management?",
        "examinerExpectation": "Student must define both principles, list the six tolerance areas, explain stage boundaries, and describe how they combine to empower PMs while protecting executive funds.",
        "answerStructure": [
            "Define Manage by Stages: Dividing project into discrete stages; review gates re-authorizing funding.",
            "Define Manage by Exception: Delegating authority bounded by tolerances across 6 variables.",
            "Six Tolerances: Time, Cost, Quality, Scope, Risk, Benefits.",
            "How They Combine: Stages provide macro-checkpoints (at boundaries); Exceptions govern micro-operations (within stages without executive meddling).",
            "Exception Handling Flow: Tolerance threatened -> Exception Report -> Board review -> Exception Plan."
        ],
        "keywords": ["Manage by Stages", "Manage by Exception", "Tolerances", "Stage Boundaries", "Exception Report", "Six Tolerances", "Governance"],
        "modelAnswer": "In PRINCE2, 'Manage by Stages' and 'Manage by Exception' form a complementary governance system that prevents executive micro-management while eliminating runaway financial risk:\n\n1. Manage by Stages (Macro-Governance):\n- The project is partitioned into a minimum of two discrete management stages: the Initiation Stage (planning) and at least one Delivery Stage.\n- Funds and resources are committed strictly one stage at a time.\n- At each Stage Boundary (Managing a Stage Boundary process), the Project Board conducts a mandatory review: inspecting deliverables, confirming continued Business Case validity, and approving the Next Stage Plan before releasing further funds.\n\n2. Manage by Exception (Micro-Governance & Autonomy):\n- The Project Board sets specific tolerance thresholds for the Project Manager across six performance variables: Time (+/- days), Cost (+/- budget), Quality (acceptable variance), Scope (mandatory vs optional items), Risk (maximum exposure), and Benefits (minimum acceptable return).\n- As long as forecasts remain within these six tolerances, the PM manages autonomously without seeking Board approvals for daily tasks.\n- If a tolerance is breached or forecast to be breached, the PM must immediately raise an Exception Report. The Board evaluates the breach and may commission an Exception Plan to replace the current stage plan.\n\nTogether, Manage by Stages limits executive capital exposure at defined checkpoints, while Manage by Exception allows PMs to manage daily work efficiently without executive bottlenecking.",
        "commonMistakes": "Confusing stages with exceptions. Failing to enumerate the 6 tolerances (Time, Cost, Quality, Scope, Risk, Benefits).",
        "selfCheckChecklist": ["Are both principles clearly distinguished?", "Are all 6 tolerances listed?", "Is the Exception Report workflow detailed?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Manage by Stages vs Manage by Exception"}
    },
    {
        "id": "itpm-u6-qa-009", "unit": 6, "marks": 8, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Describe the operational workflow and roles involved in the PRINCE2 processes 'Starting up a Project' (SU) and 'Directing a Project' (DP).",
        "examinerExpectation": "Student must explain SU as a pre-project filter and DP as the continuous Project Board oversight process spanning the entire project lifecycle.",
        "answerStructure": [
            "Starting up a Project (SU): Pre-project filter; purpose is to answer 'Do we have a viable project?'.",
            "SU Outputs: Project Brief, appointment of Executive and PM, Initiation Stage Plan.",
            "Directing a Project (DP): Continuous process owned solely by the Project Board.",
            "DP Key Activities: Authorizing initiation, authorizing stage plans, giving ad-hoc direction, reviewing exception reports, authorizing project closure."
        ],
        "keywords": ["Starting up a Project", "SU", "Directing a Project", "DP", "Project Brief", "Project Board", "Initiation Authorization", "Viability Filter"],
        "modelAnswer": "In PRINCE2, project governance begins with a pre-project filter (SU) and is steered continuously by senior leadership through DP:\n\n1. Starting up a Project (SU):\n- Context: Occurs before the project officially exists (pre-project phase).\n- Objective: To determine whether the project has sufficient viability and business justification to warrant spending money on detailed planning. It answers: 'Do we have a viable and worthwhile project?'\n- Key Activities: Appointing the Executive and Project Manager; designing the Project Brief (broad scope and outline business case); and drafting the detailed Initiation Stage Plan.\n- Decision Gate: The Executive submits the Project Brief to corporate management to authorize formal initiation.\n\n2. Directing a Project (DP):\n- Ownership: The ONLY process executed by the Project Board.\n- Duration: Commences upon completion of SU and runs continuously until final project closure.\n- Operational Mechanics: The Project Board does not manage daily work; instead, it exercises governance through key decision points:\n  a) Authorizing Initiation (moving from SU to IP);\n  b) Authorizing the Project (approving the PID);\n  c) Authorizing each Stage Plan at Stage Boundaries;\n  d) Giving ad-hoc direction and evaluating Exception Reports;\n  e) Authorizing final project closure.",
        "commonMistakes": "Thinking SU is the detailed planning process (IP is detailed planning; SU is just pre-project feasibility). Thinking the PM executes DP (DP is owned solely by the Project Board).",
        "selfCheckChecklist": ["Is SU framed as a pre-project filter?", "Is DP identified as the Project Board's continuous directing process?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 SU & DP Processes"}
    },
    {
        "id": "itpm-u6-qa-010", "unit": 6, "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 10,
        "question": "Explain the technique of 'Product-Based Planning' in PRINCE2. What are its three core artifacts?",
        "examinerExpectation": "Student must explain that products come before activities, and describe the Product Breakdown Structure, Product Description, and Product Flow Diagram.",
        "answerStructure": [
            "Core Philosophy: Focus on products rather than activities (Principle 6).",
            "Artifact 1: Product Breakdown Structure (PBS) - Hierarchical decomposition of all required deliverables.",
            "Artifact 2: Product Description - Detailed specification of quality criteria, tolerances, and testing methods for each product.",
            "Artifact 3: Product Flow Diagram (PFD) - Dependency sequence showing the production order of products.",
            "Activity Derivation: Gantt charts and activity schedules are created ONLY after the PFD is finalized."
        ],
        "keywords": ["Product-Based Planning", "Product Breakdown Structure", "PBS", "Product Description", "Product Flow Diagram", "PFD", "Quality Criteria"],
        "modelAnswer": "PRINCE2 enforces the principle 'Focus on Products' through its signature technique: Product-Based Planning. Rather than immediately listing project activities or drawing Gantt charts, PRINCE2 requires planning deliverables first through three sequential artifacts:\n\n1. Product Breakdown Structure (PBS): A hierarchical decomposition chart displaying all products, sub-products, and intermediate deliverables required to deliver the final system (similar to an object-oriented WBS).\n\n2. Product Description: A formal specification created for every identified product on the PBS. It defines the product's purpose, composition, derivation, format, quality criteria, quality tolerance levels, and the quality method used to test conformance.\n\n3. Product Flow Diagram (PFD): A network diagram illustrating the logical sequence, dependencies, and flow of production among the products on the PBS.\n\nOnly after the Product Flow Diagram is established does the team identify the specific engineering activities needed to build each product and estimate activity durations and costs.",
        "commonMistakes": "Putting activity scheduling before product definitions. Forgetting Product Descriptions.",
        "selfCheckChecklist": ["Are PBS, Product Description, and PFD all described?", "Is the principle 'products before activities' highlighted?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Product-Based Planning"}
    },
    {
        "id": "itpm-u6-qa-011", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Compare and contrast PMBOK and PRINCE2. Explain why they are increasingly viewed as complementary rather than mutually exclusive.",
        "examinerExpectation": "Student must contrast origin, structure (Knowledge/ITTO vs Process/7-7-7), focus (what/knowledge vs how/governance), and explain how organizations combine them.",
        "answerStructure": [
            "Origin & Geography: PMBOK (PMI, USA); PRINCE2 (CCTA/AXELOS, UK/Europe).",
            "Philosophical Focus: PMBOK is a descriptive knowledge standard ('What a PM should know'); PRINCE2 is a prescriptive process methodology ('How to govern and who does what').",
            "Roles & Structure: PMBOK centers around the PM; PRINCE2 establishes formal 4 management levels and the Project Board triad.",
            "Complementary Synergy: PRINCE2 provides the governance framework and decision gates; PMBOK provides the detailed tools and techniques (EVM, CPM, PERT, ITTOs).",
            "Conclusion: Combining PRINCE2 governance with PMBOK tools creates a complete project management capability."
        ],
        "keywords": ["PMBOK vs PRINCE2", "Knowledge Standard", "Process Methodology", "Complementary", "Project Board", "Governance", "ITTO"],
        "modelAnswer": "Although historically viewed as competing standards (PMBOK in North America, PRINCE2 in Europe), modern IT project management recognizes PMBOK and PRINCE2 as highly complementary frameworks addressing different dimensions of project delivery:\n\n1. Foundational Contrasts:\n- Focus & Philosophy: PMBOK is a comprehensive Body of Knowledge answering 'WHAT does a project manager need to know?' (covering 10 knowledge areas and detailed tools/techniques). PRINCE2 is a prescriptive process-based methodology answering 'HOW do we direct, manage, and deliver a project, and WHO is responsible?'\n- Organizational Governance: PMBOK focuses primarily on the Project Manager and team-level execution. PRINCE2 formalizes enterprise governance through 4 management levels, explicitly placing project direction in the hands of the Project Board (Executive, Senior User, Senior Supplier).\n- Planning Approach: PMBOK emphasizes work-based decomposition (WBS). PRINCE2 emphasizes product-based planning (PBS and Product Descriptions).\n\n2. Complementary Integration in Practice:\nModern enterprises successfully combine both:\n- PRINCE2 provides the overarching governance structure: formal business justification, Project Board decision gates, Manage by Exception tolerances, and stage funding.\n- PMBOK provides the deep execution toolkit: supplying the mathematical formulas (EVM, CPM, PERT), risk assessment techniques, and ITTO mechanisms used by the PM within those PRINCE2 stages.",
        "commonMistakes": "Claiming one framework makes the other obsolete. Forgetting that PRINCE2 has formal management levels while PMBOK focuses heavily on tools and knowledge.",
        "selfCheckChecklist": ["Are both frameworks compared on focus, origin, and roles?", "Is their practical complementary synergy clearly articulated?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PMBOK vs PRINCE2 Comparison"}
    },

    # 6.3 Multi-Project Management (12-15)
    {
        "id": "itpm-u6-qa-012", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Deconstruct the three-tier multi-project management hierarchy (Portfolio, Programme, Project) as shown in Figure 46 of the course book. Compare their scopes, goals, and core questions.",
        "examinerExpectation": "Student must define Portfolio, Programme, and Project, comparing them across scope, governance focus, core guiding question, and deliverable types.",
        "answerStructure": [
            "Tier 1: Portfolio - Strategic scope, business alignment, investment balance. Question: 'Are we doing the right work?'.",
            "Tier 2: Programme - Coordinated related projects, synergy, capability building. Question: 'Are we realizing collective benefits?'.",
            "Tier 3: Project - Tactical outputs within Iron Triangle constraints. Question: 'Are we doing the work right?'.",
            "Comparison Table/Summary highlighting time horizon, metrics, and change management."
        ],
        "keywords": ["Multi-Project Hierarchy", "Portfolio", "Programme", "Project", "Strategic Alignment", "Benefits Realization", "Outputs", "Figure 46"],
        "modelAnswer": "Course Book Figure 46 models the multi-project governance hierarchy, organizing organizational initiatives into three distinct tiers:\n\n1. Portfolio Management (Strategic Executive Tier):\n- Definition: The collection of projects, programmes, sub-portfolios, and operational activities grouped together to achieve corporate strategic business objectives.\n- Core Question: 'Are we doing the right work?'\n- Focus: Strategic alignment, capital allocation, prioritizing initiatives based on ROI, balancing high-risk innovation with low-risk operational stability, and risk diversification across the enterprise.\n\n2. Programme Management (Coordination & Synergy Tier):\n- Definition: A group of related projects and programme activities managed in a coordinated way to obtain synergistic benefits and control not available from managing them individually.\n- Core Question: 'Are we realizing collective business benefits?'\n- Focus: Managing inter-project dependencies, resolving cross-project technical interfaces, resource leveling, and ensuring that combined project outputs translate into measurable operational capabilities.\n\n3. Project Management (Tactical Delivery Tier):\n- Definition: A temporary endeavor undertaken to create a unique product, service, or result.\n- Core Question: 'Are we doing the work right?'\n- Focus: Delivering specific defined outputs within agreed scope, schedule, budget, and quality constraints.",
        "commonMistakes": "Treating a programme as just a 'big project'. Forgetting the signature questions ('doing the right work' vs 'doing work right').",
        "selfCheckChecklist": ["Are all 3 tiers defined accurately matching Figure 46?", "Are the core questions included for each tier?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management Hierarchy"}
    },
    {
        "id": "itpm-u6-qa-013", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Compare the three structural models of the Project Management Office (PMO): Supportive, Controlling, and Directive. Detail their authority levels, responsibilities, and organizational fit.",
        "examinerExpectation": "Student must list all 3 PMO models, contrast their degree of control (Low, Moderate, High), detail their core activities, and explain when an organization should choose each.",
        "answerStructure": [
            "Supportive PMO: Consultative role, templates, training, lessons learned repository; LOW level of control; fits entrepreneurial/decentralized cultures.",
            "Controlling PMO: Provides support and mandates compliance with frameworks, governance, and tools; MODERATE level of control; fits growing matrix organizations.",
            "Directive PMO: Directly manages projects; PMs report directly to PMO; HIGH level of control; fits large, highly regulated enterprises.",
            "Comparison Table summarizing Control Level, PM Reporting Line, and Core Mandate."
        ],
        "keywords": ["PMO", "Supportive PMO", "Controlling PMO", "Directive PMO", "Level of Control", "Compliance", "Organizational Fit"],
        "modelAnswer": "Modern organizations establish a Project Management Office (PMO) to govern multi-project environments. PMOs are classified into three structural models based on their degree of control and authority:\n\n1. Supportive PMO (Low Control):\n- Role: Acts as a consultative center of excellence and knowledge repository.\n- Responsibilities: Supplies standardized templates, project management best practice guidelines, training programs, and archives historical lessons learned.\n- Authority: Exercises minimal formal control; adopting its templates and advice is optional for project managers.\n- Organizational Fit: Ideal for decentralized, innovative, or entrepreneurial organizations where teams value autonomy and formal bureaucracy is resisted.\n\n2. Controlling PMO (Moderate Control):\n- Role: Provides operational support while mandating organizational compliance.\n- Responsibilities: Establishes mandatory project management governance frameworks, prescribes standardized reporting tools and metrics dashboards, and conducts regular compliance audits.\n- Authority: Moderate; project managers report to functional departments but must conform strictly to PMO governance standards.\n- Organizational Fit: Suitable for medium-to-large organizations seeking consistency, governance transparency, and standard performance metrics across diverse departments.\n\n3. Directive PMO (High Control):\n- Role: Takes direct operational ownership of project delivery.\n- Responsibilities: Directly manages projects across the enterprise. Project Managers are employed by, assigned by, and report directly to the PMO.\n- Authority: High; the PMO exercises full command over project initiation, resource assignment, and methodology enforcement.\n- Organizational Fit: Essential in large, complex, heavily regulated enterprises (e.g. defense, banking, healthcare) requiring strict centralized control.",
        "commonMistakes": "Mixing up the control levels (Supportive=Low, Controlling=Moderate, Directive=High). Thinking PMs report to a Supportive PMO.",
        "selfCheckChecklist": ["Are all 3 PMO types compared accurately?", "Are control levels clearly stated as Low, Moderate, and High?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Three PMO Structural Types"}
    },
    {
        "id": "itpm-u6-qa-014", "unit": 6, "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 10,
        "question": "How does multi-project management handle 'Resource Contention' when multiple concurrent projects require the same critical technical specialists?",
        "examinerExpectation": "Student must explain resource leveling across projects, strategic prioritization via portfolio governance, and the hazards of multi-project multitasking.",
        "answerStructure": [
            "Problem of Resource Contention: Shared specialists (database architects, security leads) bottleneck multiple projects.",
            "Hazard of Individual Multitasking: Cognitive context switching, fragmented attention, scheduling conflicts.",
            "Multi-Project Management Solution: Centralized resource visibility (PMO), strategic prioritization (Portfolio), cross-project resource leveling.",
            "Dedicated Allocation Principle: Striving for 100% focus where possible."
        ],
        "keywords": ["Resource Contention", "Multi-Project Management", "Context Switching", "Resource Leveling", "PMO Visibility", "Strategic Priority"],
        "modelAnswer": "Resource contention is one of the most severe failure modes in multi-project IT environments, occurring when specialized personnel (e.g. database architects, cybersecurity specialists, lead cloud engineers) are demanded simultaneously by multiple project teams:\n\n1. The Multitasking Trap: Without multi-project coordination, management often fragments specialists across 4 or 5 projects (e.g. 20% on each). As the course book warns, this incurs severe context-switching overhead, burns out specialists, and creates multi-project bottlenecks when one project encounters unexpected delays.\n\n2. Multi-Project Management Solution:\n- Centralized Resource Visibility: An Enterprise PMO or Portfolio management system maps all resource commitments across the enterprise, identifying overallocations before projects launch.\n- Strategic Priority Allocation: When conflicts arise, resources are allocated based on corporate strategic priorities established by Portfolio Governance, rather than whoever shouts loudest.\n- Cross-Project Resource Leveling: Shared specialists are scheduled in dedicated blocks (e.g. 2 full weeks dedicated to Project A, then moving to Project B) rather than fragmented part-time multitasking.",
        "commonMistakes": "Assuming resource contention can be solved simply by asking developers to work overtime. Overlooking the cognitive penalties of context switching.",
        "selfCheckChecklist": ["Is the context-switching penalty explained?", "Is centralized PMO resource leveling detailed?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Resource Contention"}
    },
    {
        "id": "itpm-u6-qa-015", "unit": 6, "marks": 8, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Explain the concept of 'Benefits Realization' in Programme Management. How do programme managers manage inter-project dependencies to capture synergistic business value?",
        "examinerExpectation": "Student must explain that projects deliver outputs while programmes deliver outcomes/benefits, detail dependency management, and explain extended benefit tracking.",
        "answerStructure": [
            "Outputs vs Outcomes vs Benefits: Project delivers output (tool); Programme achieves outcome (new capability); Business realizes benefit (revenue/efficiency).",
            "Synergy Principle: 1 + 1 = 3 (projects coordinated together yield greater value than isolated efforts).",
            "Inter-Project Dependency Management: Managing technical interfaces, sequential milestones, and shared infrastructure.",
            "Extended Lifecycle: Benefit realization tracking continues well after component projects have closed."
        ],
        "keywords": ["Benefits Realization", "Programme Management", "Outputs vs Benefits", "Inter-Project Dependencies", "Synergy", "Operational Capability"],
        "modelAnswer": "In Programme Management, the ultimate benchmark of success is not merely delivering software on time and budget, but achieving sustainable 'Benefits Realization':\n\n1. The Value Chain (Output -> Outcome -> Benefit):\n- Projects Deliver Outputs: Tangible, discrete deliverables (e.g. a new relational database, an updated mobile app, a staff training module).\n- Programmes Create Outcomes: Combining those outputs into a coherent operational capability (e.g. automated digital retail banking).\n- The Enterprise Realizes Benefits: The measurable financial or strategic improvement resulting from that capability (e.g. 30% reduction in branch transaction costs, \$10M annual profit growth).\n\n2. Managing Inter-Project Dependencies to Capture Synergy:\nA programme manager actively orchestrates dependencies so that projects do not fail at the seams:\n- Interface Alignment: Ensuring technical APIs produced by Project 1 integrate seamlessly with the user interface built by Project 2.\n- Sequencing Synchronization: Ensuring the infrastructure project deploys cloud servers before the software project begins user acceptance testing.\n- Preventing Silos: Without programme coordination, Project 1 might 'succeed' on paper while delivering an output completely unusable by Project 2, destroying overall business ROI.",
        "commonMistakes": "Confusing project outputs with programme benefits. Treating programme management as just multiple projects running in parallel.",
        "selfCheckChecklist": ["Is the Output -> Outcome -> Benefit chain explained?", "Is inter-project dependency synchronization detailed?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Programme Benefits Realization"}
    },

    # 6.4 Agile Software Processes in Large Projects (16-21)
    {
        "id": "itpm-u6-qa-016", "unit": 6, "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 10,
        "question": "Why does scaling Agile across dozens of teams introduce quadratic communication complexity? Explain the mathematical formula governing communication channels.",
        "examinerExpectation": "Student must state and explain the formula n(n-1)/2, describe the exponential growth of channels, and explain why informal agile communication breaks down at scale.",
        "answerStructure": [
            "Formula: Number of communication channels = n(n-1)/2, where n is the number of participants.",
            "Mathematical Growth: 5 people = 10 channels; 20 people = 190 channels; 100 people = 4,950 channels.",
            "Breakdown of Informal Agile: Spontaneous face-to-face communication cannot scale across thousands of channels without causing meeting paralysis.",
            "Solution: Structured scaling frameworks (SoS, LeSS, SAFe) providing intentional coordination mechanisms."
        ],
        "keywords": ["Communication Channels", "n(n-1)/2", "Quadratic Complexity", "Scaling Challenge", "Informal Communication Breakdown"],
        "modelAnswer": "Agile methodologies were originally formulated for small, co-located teams (typically 5 to 9 members) where communication is informal, spontaneous, and high-bandwidth. When attempting to scale agile to large enterprise projects with dozens or hundreds of developers, informal communication collapses due to quadratic channel expansion:\n\n1. Mathematical Foundation: The potential communication channels between participants grow quadratically according to the formula:\nChannels = n(n - 1) / 2 (where n is the number of individuals involved).\n\n2. Channel Explosion in Practice:\n- For a small team of 5 developers: 5(4) / 2 = 10 communication channels (easily managed informally).\n- For 20 developers: 20(19) / 2 = 190 channels (information begins fragmenting).\n- For a 100-person project: 100(99) / 2 = 4,950 potential communication channels.\n\n3. The Breakdown: If 100 developers attempt to communicate informally and attend unstructured meetings, developer productivity drops to zero under meeting bloat. Consequently, large enterprise projects require structured scaled frameworks (like Scrum of Scrums, LeSS, or SAFe) that channel communication through designated ambassadors, synchronized cadences, and clear architectural guardrails.",
        "commonMistakes": "Forgetting the formula n(n-1)/2. Failing to contrast small-team informal bandwidth with large-scale channel explosion.",
        "selfCheckChecklist": ["Is the formula n(n-1)/2 stated and demonstrated with numeric examples?", "Is the collapse of informal communication explained?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Scaling Communication Complexity"}
    },
    {
        "id": "itpm-u6-qa-017", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
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
        "keywords": ["Scrum of Scrums", "SoS", "Ambassadors", "Four Questions", "Cross-Team Dependencies", "Bilateral Accountability", "Impediments"],
        "modelAnswer": "Scrum of Scrums (SoS, Course Book Fig. 47) is an agile scaling technique designed to coordinate multiple autonomous Scrum teams working on an integrated system:\n\n1. Operational Mechanics:\n- Meeting Structure: Individual feature teams (each 5-9 members) select an 'ambassador' (often the Scrum Master or a developer active on the relevant dependency) to attend an inter-team coordination meeting.\n- Time-Box: Held regularly (daily or 2-3 times per week) time-boxed to approximately 15 minutes.\n- Focus: Unlike single-team standups that focus on internal sprint tasks, SoS focuses strictly on inter-team dependencies, shared technical interfaces, and cross-team impediments.\n\n2. The Four Guiding Questions:\nEach ambassador addresses four specific questions:\n(1) What has your team done since we last met that affects other teams?\n(2) What will your team do before we meet again that could affect other teams?\n(3) What impediments is your team facing that require help from, or could affect, other teams?\n(4) Are you putting any impediment in the way of other teams?\n\n3. Significance of the Fourth Question:\nQuestion 4 is unique and foundational to cross-team collaboration. While Question 3 looks outward at 'who is blocking me', Question 4 forces teams to look inward and ask: 'Are our technical decisions, delayed code commits, or unannounced API changes causing blockers for our peers?' It establishes bilateral accountability, transforming teams from competitive silos into collaborative partners.",
        "commonMistakes": "Thinking SoS only asks the standard 3 questions. Assuming ambassadors must strictly be project managers.",
        "selfCheckChecklist": ["Are all 4 questions listed accurately?", "Is the inward-looking bilateral nature of Question 4 highlighted?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Scrum of Scrums Mechanics & Four Questions"}
    },
    {
        "id": "itpm-u6-qa-018", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Explain the architecture of Large-Scale Scrum (LeSS) created by Craig Larman and Bas Vodde. Detail its single-source rules and the philosophy of 'More with LeSS'.",
        "examinerExpectation": "Student must name creators, explain 'More with LeSS' (scaling by descaling), enumerate the single-source rules (1 PO, 1 Backlog, 1 Sprint, 1 DoD, 1 Increment), and explain Feature Teams.",
        "answerStructure": [
            "Creators & Philosophy: Craig Larman and Bas Vodde; 'More with LeSS' (scaling by removing organizational bloat).",
            "Single-Source Rules for up to 8 teams: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, ONE integrated Increment.",
            "Feature Teams: Teams are cross-functional across all architectural layers, avoiding component silos.",
            "Sprint Planning in LeSS: Planning 1 (shared WHAT) and Planning 2 (team-specific HOW).",
            "Contrast with Bureaucracy: LeSS adds zero new management roles or bureaucratic overhead."
        ],
        "keywords": ["Large-Scale Scrum", "LeSS", "Craig Larman", "Bas Vodde", "More with LeSS", "Single Product Owner", "Single Product Backlog", "Feature Teams"],
        "modelAnswer": "Large-Scale Scrum (LeSS), created by Craig Larman and Bas Vodde, is an agile scaling framework founded on the core philosophy 'More with LeSS'—achieving enterprise agility by descaling organizational hierarchy and eliminating bureaucratic bloat rather than piling on complex management scaffolding:\n\n1. Basic LeSS Scope & Single-Source Rules:\nBasic LeSS scales standard Scrum across up to 8 feature teams (50 to 70 developers) while strictly maintaining Scrum's core simplicity through five non-negotiable single-source rules:\n- ONE Product Owner: Exactly one human Product Owner holds business accountability for the entire multi-team product.\n- ONE Product Backlog: A single, unified list of prioritized requirements from which all 8 teams pull work.\n- ONE Synchronized Sprint: All teams operate on identical sprint start and end dates.\n- ONE Common Definition of Done: A shared organizational baseline quality standard that applies to all teams.\n- ONE Potentially Releasable Increment: At the end of every sprint, all teams merge their code into a single, fully integrated, testable software increment.\n\n2. Cross-Functional Feature Teams:\nLeSS forbids architectural 'component teams' (e.g. separate UI team, Database team, Backend team). Instead, all teams are Feature Teams capable of pulling an end-to-end customer requirement from the backlog and implementing it across all architectural layers, eliminating hand-offs and inter-team dependency queues.",
        "commonMistakes": "Assuming each team in LeSS gets its own Product Owner or separate backlog. Believing LeSS adds lots of new management roles.",
        "selfCheckChecklist": ["Are Craig Larman and Bas Vodde named?", "Are all 5 single-source rules listed (1 PO, 1 Backlog, 1 Sprint, 1 DoD, 1 Increment)?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Large-Scale Scrum (LeSS) Architecture"}
    },
    {
        "id": "itpm-u6-qa-019", "unit": 6, "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 10,
        "question": "How does 'LeSS Huge' adapt the Large-Scale Scrum framework for enterprise initiatives involving more than 8 teams? Explain the role of Area Product Owners (APOs).",
        "examinerExpectation": "Student must explain that projects beyond 8 teams introduce Requirement Areas, managed by Area Product Owners (APOs) who report to the overall Product Owner.",
        "answerStructure": [
            "Context: Basic LeSS maxes out at ~8 teams. Projects with 10 to 100+ teams require LeSS Huge.",
            "Cognitive Bottleneck: A single PO cannot groom backlogs for hundreds of developers alone.",
            "Requirement Areas: The master product is split into functional customer domains (e.g. Checkout, Catalog, Search).",
            "Area Product Owners (APOs): Each Requirement Area has an APO managing that area's sub-backlog.",
            "Overall Product Owner Role: Retains strategic vision, area prioritization, and enterprise alignment."
        ],
        "keywords": ["LeSS Huge", "Area Product Owner", "APO", "Requirement Areas", "Enterprise Scaling", "Cognitive Bottleneck"],
        "modelAnswer": "While Basic LeSS effectively scales Scrum up to 8 feature teams, large enterprise systems involving hundreds or thousands of developers exceed the cognitive capacity of a single Product Owner. To scale further without losing agility, Larman and Vodde designed 'LeSS Huge':\n\n1. Requirement Areas:\nIn LeSS Huge, the product is partitioned into several customer-centric 'Requirement Areas' (e.g. in a core banking system: Loans, Credit Cards, Online Banking, Risk Compliance). Each Requirement Area contains 4 to 8 feature teams.\n\n2. Area Product Owners (APOs):\n- Each Requirement Area is assigned an Area Product Owner (APO).\n- The APO acts as the focused Product Owner for their specific area, grooming the Area Product Backlog and prioritizing user stories with their area's feature teams.\n\n3. The Overall Product Owner (OPO):\n- A single head Product Owner remains at the apex of the product.\n- The OPO focuses on enterprise product vision, overall strategic direction, and allocating team capacity across the Requirement Areas, delegating detailed feature prioritization to the APOs.",
        "commonMistakes": "Confusing Basic LeSS with LeSS Huge (Basic LeSS has NO APOs). Thinking APOs represent technical component teams rather than customer requirement areas.",
        "selfCheckChecklist": ["Is the distinction between Basic LeSS and LeSS Huge clear?", "Are Requirement Areas and Area Product Owners explained?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "LeSS Huge & Area Product Owners"}
    },
    {
        "id": "itpm-u6-qa-020", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Analyze the Scaled Agile Framework (SAFe) created by Dean Leffingwell. Explain the role of the Agile Release Train (ART) and deconstruct the CALMR approach to DevOps.",
        "examinerExpectation": "Student must name Dean Leffingwell, describe the ART (50-125 people on synchronized cadence), and define all 5 letters of CALMR (Culture, Automation, Lean Flow, Measurement, Recovery).",
        "answerStructure": [
            "Creator & Scope: Dean Leffingwell; enterprise multi-tier framework (Team, Program, Solution, Portfolio).",
            "Agile Release Train (ART): Long-lived team-of-teams (50 to 125 people) delivering value on synchronized cadence.",
            "CALMR DevOps Framework:\n  - C = Culture (shared responsibility between Dev and Ops)\n  - A = Automation (CI/CD pipelines, automated testing)\n  - L = Lean Flow (small batches, limiting WIP)\n  - M = Measurement (flow, MTTR, cycle time)\n  - R = Recovery (low MTTR, rollbacks, resilience).",
            "Summary: SAFe provides comprehensive enterprise scaffolding for large corporations."
        ],
        "keywords": ["SAFe", "Dean Leffingwell", "Agile Release Train", "ART", "50 to 125 people", "CALMR", "Culture", "Automation", "Lean Flow", "Measurement", "Recovery"],
        "modelAnswer": "The Scaled Agile Framework (SAFe), created by Dean Leffingwell, is a highly structured enterprise framework that scales lean-agile practices across large multi-divisional corporations:\n\n1. The Agile Release Train (ART):\n- The central value delivery construct in SAFe.\n- An ART is a long-lived, cross-functional team-of-teams typically comprising 50 to 125 practitioners.\n- It aligns multiple agile teams to a shared mission, planning together during face-to-face Program Increment (PI) Planning events and executing on a synchronized cadence.\n\n2. The CALMR Approach to DevOps:\nSAFe incorporates DevOps through the CALMR mindset, ensuring continuous value delivery:\n- Culture (C): Fosters shared responsibility between software developers and IT operations, breaking down functional silos to jointly own system stability and deployment.\n- Automation (A): Eliminates manual error-prone hand-offs through automated CI/CD deployment pipelines, automated testing suites, and infrastructure-as-code.\n- Lean Flow (L): Accelerates throughput by shrinking batch sizes, limiting Work In Progress (WIP), and managing queue lengths.\n- Measurement (M): Objectively evaluates delivery performance using flow metrics, cycle times, deployment frequencies, and defect escape rates.\n- Recovery (R): Engineers systems for resilience, prioritizing low Mean Time To Recovery (MTTR) through automated rollbacks, blue-green deployments, and feature flags.",
        "commonMistakes": "Forgetting what CALMR stands for. Missing the official headcount range of the ART (50-125 people).",
        "selfCheckChecklist": ["Is Dean Leffingwell named?", "Is the ART headcount (50-125) stated?", "Are all 5 letters of CALMR deconstructed?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "SAFe, ART, and CALMR DevOps"}
    },
    {
        "id": "itpm-u6-qa-021", "unit": 6, "marks": 8, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Contrast Large-Scale Scrum (LeSS) and the Scaled Agile Framework (SAFe) in terms of organizational philosophy, role overhead, and tailoring approach.",
        "examinerExpectation": "Student must contrast minimal descaling (LeSS) vs prescriptive scaffolding (SAFe), compare role overhead, and assess organizational suitability.",
        "answerStructure": [
            "Core Philosophy: LeSS = 'More with LeSS' (descaling, removing roles); SAFe = Comprehensive enterprise scaffolding.",
            "Role Overhead: LeSS adds zero new management roles in basic mode; SAFe adds Release Train Engineers, Solution Architects, Business Owners, Portfolio Managers.",
            "Prescriptiveness: LeSS is minimalist and principles-based; SAFe is highly prescriptive with detailed multi-tier templates.",
            "Critique: LeSS can be difficult for hierarchical corporate cultures to adopt; SAFe can feel like rebranded top-down bureaucracy to frontline engineers."
        ],
        "keywords": ["LeSS vs SAFe", "Descaling", "Prescriptive Scaffolding", "Role Overhead", "More with LeSS", "Enterprise Framework"],
        "modelAnswer": "LeSS (Larman & Vodde) and SAFe (Leffingwell) represent two radically different philosophies for scaling agile across enterprise organizations:\n\n1. Organizational Philosophy:\n- LeSS adopts a minimalist, 'descaling' approach based on the principle 'More with LeSS'. It asserts that large organizations fail because they add too many management layers and specialized roles; true agility comes from stripping away bureaucracy and letting cross-functional feature teams self-organize around a single Product Backlog.\n- SAFe adopts a prescriptive, multi-tiered enterprise scaffolding approach. It acknowledges existing corporate hierarchies (Executive, Portfolio, Program, Team) and provides detailed processes, roles, and governance artifacts to coordinate agile teams within enterprise realities.\n\n2. Role and Management Overhead:\n- LeSS introduces NO new management roles in its basic framework (up to 8 teams share 1 PO and standard Scrum Masters). It adamantly rejects adding managers between teams and customers.\n- SAFe introduces an extensive suite of specialized roles: Release Train Engineers (RTEs), Product Managers, System Architects, Business Owners, Epic Owners, and Enterprise Architects.\n\n3. Adoption & Culture Fit:\n- LeSS demands deep organizational restructuring (dissolving component silos into true feature teams), which legacy corporate cultures often resist.\n- SAFe is easier for large corporations to adopt because it maps cleanly to corporate budgeting and hierarchy, but developers frequently criticize it for recreating top-down command-and-control bureaucracy under agile terminology.",
        "commonMistakes": "Treating both frameworks as identical. Failing to emphasize LeSS's radical removal of roles versus SAFe's addition of enterprise roles.",
        "selfCheckChecklist": ["Are both frameworks compared on philosophy, roles, and corporate fit?", "Is the course book's critical insight included?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "LeSS vs SAFe Comparison"}
    },

    # 6.5 Selection of the Appropriate Project Management Method (22-25)
    {
        "id": "itpm-u6-qa-022", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
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
        "keywords": ["Organizational Structures", "Functional", "Weak Matrix", "Balanced Matrix", "Strong Matrix", "Projectized", "PM Authority Spectrum"],
        "modelAnswer": "An organization's formal structure dictates the authority, autonomy, and effectiveness of its project managers along a broad spectrum:\n\n1. Functional Organization:\n- Structure: Staff are grouped by professional specialty into permanent functional departments (engineering, marketing, accounting).\n- PM Authority: Little or no formal authority. The PM acts as a part-time project coordinator or expediter who cannot enforce decisions.\n- Budget & Resources: Controlled 100% by Functional Department Managers.\n\n2. Matrix Organizations (The Balance of Power Continuum):\n- Weak Matrix: Maintains functional dominance. The PM coordinates tasks across departments but possesses limited decision-making power; functional managers control budgets and performance evaluations.\n- Balanced Matrix: Authority is shared relatively equally. The PM defines WHAT needs to be done and WHEN (schedule/tasks), while Functional Managers decide WHO executes the work and HOW technical quality is maintained.\n- Strong Matrix: The PM holds primary authority. The PM is full-time, controls the project budget, and typically reports to a dedicated PMO Director. Functional managers act as resource suppliers.\n\n3. Projectized (Project-Oriented) Organization:\n- Structure: Projects are the primary organizational units. Team members are dedicated full-time to the project and co-located.\n- PM Authority: High to total authority. The PM controls the budget, directs daily operations, and directly evaluates team personnel.",
        "commonMistakes": "Confusing Weak Matrix with Strong Matrix. Failing to mention that in Balanced Matrix, authority is split (What/When vs Who/How).",
        "selfCheckChecklist": ["Are all 5 structures defined accurately?", "Is PM authority tracked from 'little/none' up to 'total'?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Organizational Structures Spectrum"}
    },
    {
        "id": "itpm-u6-qa-023", "unit": 6, "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 10,
        "question": "Explain the 'No Home' challenge in pure Projectized organizations. What human resource risks does it introduce, and how can leadership mitigate them?",
        "examinerExpectation": "Student must define the 'no home' problem (lack of functional department to return to upon project closure), describe employee anxiety, and detail mitigation strategies.",
        "answerStructure": [
            "Definition of 'No Home': In projectized firms, staff are attached to temporary projects, not permanent functional departments.",
            "The Problem: As project closing approaches, staff experience acute career anxiety regarding job security or next project assignment.",
            "Negative Operational Impact: Reduced focus during project closing, gold-plating/dragging out tasks to delay termination, attrition of top talent.",
            "Mitigation Strategies: Proactive resource planning by PMO, early reassignment interviews 2-3 months before project close, transitioning to operational support."
        ],
        "keywords": ["No Home Challenge", "Projectized Organization", "Project Closure Anxiety", "Resource Reassignment", "Career Insecurity", "PMO Planning"],
        "modelAnswer": "In a pure Projectized (Project-Oriented) organizational structure, the project is the primary structural unit and permanent functional departments do not exist. This creates the classic human resource dilemma known as the 'No Home' problem:\n\n1. Cause of the Dilemma:\nIn functional or matrix organizations, team members return to their home department (e.g. the Software Engineering Department) once a project finishes. In a pure projectized organization, team members belong solely to the project. When the project terminates, their position ceases to exist.\n\n2. Operational Risks & Negative Impact:\n- Career Anxiety: As the project completion milestone approaches, team members experience high anxiety regarding potential unemployment or delayed reassignment.\n- Dragging Out Project Closure: Anxious developers may consciously or unconsciously stretch out final deliverables, invent minor tasks, or gold-plate code to avoid project termination.\n- Talent Attrition: Top engineers may abandon the project in its critical final weeks to accept permanent job offers elsewhere.\n\n3. Leadership Mitigation Strategies:\n- Early PMO Pipeline Planning: The PMO must plan upcoming projects 2 to 3 months in advance and communicate pipeline assignments to team members early.\n- Operational Transitioning: Assigning key developers to the Production/Maintenance phase of the released system.\n- Enterprise Talent Pooling: Maintaining an explicit talent bench to smooth transitions between project assignments.",
        "commonMistakes": "Thinking the 'no home' problem refers to remote work or physical offices. Forgetting the impact on project closure delays.",
        "selfCheckChecklist": ["Is the 'no home' dilemma clearly defined as a project closure HR issue?", "Are operational risks and mitigation strategies detailed?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Projectized 'No Home' Dilemma"}
    },
    {
        "id": "itpm-u6-qa-024", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Differentiate between Iterative, Incremental, and Agile software development lifecycles as strictly defined in the course book. Illustrate your answer with practical software examples.",
        "examinerExpectation": "Student must provide the exact course book definitions: Iterative (low fidelity of all features early, refined together); Incremental (subset of features fully built first, more added later); Agile (combines iterative and incremental).",
        "answerStructure": [
            "Iterative Development: Initial low-fidelity version encompassing all/most features early, progressively increasing fidelity across iterations (e.g. rough sketch to oil painting).",
            "Incremental Development: Completely finishes a small subset of features to 100% operational fidelity first, adding more completed features in subsequent releases (e.g. building a car by finishing the engine first).",
            "Agile Development: Combines BOTH models — delivering usable feature increments at the end of every sprint while iteratively adapting architecture and backlog.",
            "Practical Software Example illustrating the distinct development paths."
        ],
        "keywords": ["Iterative Development", "Incremental Development", "Agile Development", "Fidelity", "Feature Slices", "Course Book Distinction"],
        "modelAnswer": "The official IU course book draws an exact, rigorous distinction between Iterative, Incremental, and Agile development, rejecting the sloppy industry habit of treating them as identical synonyms:\n\n1. Iterative Development (Evolving Fidelity across All Features):\n- Definition: Creates smaller chunks from a large software application, developing an initial low-fidelity version that encompasses all or most of the system's core features early. Subsequent iterations revisit and refine all elements together, progressively deepening architectural robustness, performance, and UI polish.\n- Analogy: An artist painting a canvas: first sketching the entire scene in pencil, then painting broad watercolor washes, and finally adding detailed oil textures across the whole image.\n- Software Example: Launching an e-commerce platform where catalog, cart, checkout, and search all exist on day one, but with dummy mock data and basic styling, iteratively upgraded to production databases and payment gateways.\n\n2. Incremental Development (Adding Fully Finished Feature Slices):\n- Definition: Begins with smaller parts of a larger model, completely finishing a subset of features to 100% operational fidelity before moving to the next. Slices are added incrementally until the product is fully formed.\n- Analogy: Building a modular house: completing the bedroom 100% (plumbing, paint, furniture) before building the kitchen 100%.\n- Software Example: Building the e-commerce platform by fully implementing, testing, and shipping only the 'User Authentication' module first. Once finished, fully implementing and shipping 'Product Catalog', and so on.\n\n3. Agile Development (The Synthesis):\n- Definition: Agile synthesizes BOTH iterative and incremental paradigms: it delivers usable, potentially releasable working increments of software in short sprints (incremental delivery) while continuously refining, adapting, and refactoring overall architecture and future user stories based on empirical feedback (iterative refinement).",
        "commonMistakes": "Treating Iterative and Incremental as identical. Failing to explain the difference in 'fidelity' across features.",
        "selfCheckChecklist": ["Is Iterative defined as low-fidelity of all features refined over time?", "Is Incremental defined as full-fidelity of few features added over time?", "Is Agile defined as combining both?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Iterative vs Incremental vs Agile"}
    },
    {
        "id": "itpm-u6-qa-025", "unit": 6, "marks": 8, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 15,
        "question": "Provide a comprehensive methodology selection framework for large IT projects. When should an enterprise select Predictive (PMBOK/PRINCE2), Adaptive (Scaled Agile/LeSS), or a Hybrid model?",
        "examinerExpectation": "Student must synthesize criteria across project size, uncertainty, regulatory audits, customer availability, and contract type, explaining why Hybrid is often optimal for enterprise IT.",
        "answerStructure": [
            "Premise: 'One-size-fits-all' does not exist in IT project management.",
            "Select Predictive (PMBOK / PRINCE2) When: Clear/stable requirements, safety-critical systems, strict regulatory compliance/audits, fixed-price commercial contracts.",
            "Select Adaptive (Scaled Agile / LeSS / SAFe) When: High requirement uncertainty/volatility, competitive time-to-market pressure, continuous customer availability, innovative exploratory software.",
            "Select Hybrid Model (Course Book Fig. 48) When: Enterprise systems needing predictive governance, procurement, and budget baselines combined with agile iterative sprint execution.",
            "Conclusion: Matching methodology to project dimensions ensures governance without suffocating agility."
        ],
        "keywords": ["Methodology Selection", "Predictive", "Adaptive", "Hybrid", "PMBOK", "PRINCE2", "LeSS", "SAFe", "Figure 48", "Decision Framework"],
        "modelAnswer": "As emphasized in Course Book Section 6.5, a 'one-size-fits-all' methodology is a dangerous myth in IT project management. The selection of an appropriate project methodology for large initiatives requires evaluating multi-dimensional project characteristics:\n\n1. Select Predictive Methodologies (PMBOK Guide / PRINCE2) When:\n- Requirement Stability: Requirements are clearly defined, well-understood, and legally frozen upfront.\n- Criticality & Certification: The system is safety-critical (e.g. avionics, medical devices, nuclear control) or subject to strict statutory audits requiring 1:1 verification traceability.\n- Contractual Structure: The initiative operates under a fixed-price, fixed-scope commercial procurement contract with external vendor penalties.\n- Customer Engagement: Client stakeholders are unavailable for daily collaboration and prefer formal phase-gate approvals.\n\n2. Select Adaptive Methodologies (Scaled Agile / LeSS / SAFe) When:\n- Requirement Volatility: Requirements are exploratory, rapidly evolving, or driven by dynamic competitive market pressures.\n- Feedback Cadence: Rapid time-to-market and continuous customer validation of working software increments are essential.\n- Stakeholder Engagement: An empowered customer representative or Product Owner is embedded and available daily to steer backlog priorities.\n- Architecture & Culture: The software architecture is decoupled (microservices/APIs) and the organizational culture supports blameless retrospectives and self-organizing teams.\n\n3. Select a Hybrid Methodology (Course Book Figure 48) When:\n- Enterprise Reality: In complex modern IT projects, organizations frequently adopt a Hybrid model: employing predictive governance (PRINCE2 stage gates or PMBOK procurement/cost baselines) to satisfy corporate budgeting and regulatory audit requirements, while empowering engineering teams to execute daily development in adaptive agile sprints (Scrum/LeSS). This achieves governance predictability at the enterprise level with delivery agility at the technical level.",
        "commonMistakes": "Claiming Agile is always best or that Predictive models are dead. Overlooking contractual and safety-critical constraints.",
        "selfCheckChecklist": ["Are both Predictive and Adaptive criteria evaluated comprehensively?", "Is the Hybrid model highlighted matching Figure 48?"],
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Methodology Selection Framework"}
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/qa.ts', 'w') as f:
    f.write(f'import {{ DescriptiveQuestion }} from "../../../../types";\n\nexport const unit6ImportantQuestions: DescriptiveQuestion[] = {json.dumps(qa_list, indent=2)};\n')
print(f"Generated unit-6/qa.ts ({len(qa_list)} Q&As)")

# =========================================================================
# 2. COMPARISONS.TS (15 Comparisons)
# =========================================================================
comparisons_list = [
    {
        "conceptA": "PMBOK Guide",
        "conceptB": "PRINCE2",
        "comparisonPoints": [
            {"criterion": "Origin & Sponsor", "detailA": "Project Management Institute (PMI), USA", "detailB": "Central Computer & Telecommunications Agency (CCTA/AXELOS), UK"},
            {"criterion": "Nature of Framework", "detailA": "Descriptive Knowledge Standard ('What a PM needs to know')", "detailB": "Prescriptive Process Methodology ('How to govern and who does what')"},
            {"criterion": "Core Structure", "detailA": "5 Process Groups, 10 Knowledge Areas, 47 Processes (ITTOs)", "detailB": "7 Principles, 7 Themes, 7 Processes (7-7-7 Architecture)"},
            {"criterion": "Governance Model", "detailA": "Focuses heavily on the Project Manager leading execution", "detailB": "Focuses on 4 Management Levels led by the Project Board triad"}
        ]
    },
    {
        "conceptA": "Project Scope",
        "conceptB": "Product Scope",
        "comparisonPoints": [
            {"criterion": "Fundamental Focus", "detailA": "All the work performed by the team to deliver the product", "detailB": "The features, functions, and characteristics of the deliverable"},
            {"criterion": "Measurement Baseline", "detailA": "Measured against the Project Management Plan, WBS, and WBS Dictionary", "detailB": "Measured against product requirements and user acceptance criteria"},
            {"criterion": "Completion Evaluation", "detailA": "Evaluated through project performance measurement and earned value", "detailB": "Evaluated through system testing, validation, and user acceptance"},
            {"criterion": "Change Governance", "detailA": "Controlled through Perform Integrated Change Control", "detailB": "Controlled through product backlog grooming or specification change requests"}
        ]
    },
    {
        "conceptA": "Manage by Stages",
        "conceptB": "Manage by Exception",
        "comparisonPoints": [
            {"criterion": "Governance Level", "detailA": "Macro-governance across discrete lifecycle stages", "detailB": "Micro-governance of daily operations within an active stage"},
            {"criterion": "Decision Trigger", "detailA": "Scheduled stage boundary gates re-authorizing funding and business case", "detailB": "Unscheduled tolerance breaches triggering an Exception Report"},
            {"criterion": "Operating Boundary", "detailA": "Partitioning the project into at least two discrete management stages", "detailB": "Setting explicit tolerances across 6 variables (Time, Cost, Quality, Scope, Risk, Benefits)"},
            {"criterion": "Executive Protection", "detailA": "Limits financial commitment stage-by-stage", "detailB": "Eliminates senior executive micro-management of daily tasks"}
        ]
    },
    {
        "conceptA": "Portfolio Management",
        "conceptB": "Programme Management",
        "comparisonPoints": [
            {"criterion": "Strategic Orientation", "detailA": "Strategic corporate alignment: 'Are we doing the right work?'", "detailB": "Benefit realization & synergy: 'Are we capturing collective benefits?'"},
            {"criterion": "Scope of Initiatives", "detailA": "Diverse collection of unrelated and related projects, programmes, operations", "detailB": "A group of closely related projects with inter-project dependencies"},
            {"criterion": "Primary Metric", "detailA": "Return on Investment (ROI), risk diversification, strategic goal fulfillment", "detailB": "Collective capability delivery and operational benefit realization"},
            {"criterion": "Lifecycle Horizon", "detailA": "Continuous and permanent, aligned to annual corporate planning cycles", "detailB": "Temporary but multi-year, terminating once benefits are transitioned"}
        ]
    },
    {
        "conceptA": "Programme Management",
        "conceptB": "Project Management",
        "comparisonPoints": [
            {"criterion": "Primary Deliverable", "detailA": "Business capabilities and strategic benefits (Outcomes & Benefits)", "detailB": "Specific unique deliverables and technical outputs (Outputs)"},
            {"criterion": "Management Focus", "detailA": "Managing inter-project dependencies, synergies, and change management", "detailB": "Delivering defined scope within schedule, budget, and quality limits"},
            {"criterion": "Change Perspective", "detailA": "Expects, embraces, and directs change to optimize business benefits", "detailB": "Controls and restricts change to protect established baselines"},
            {"criterion": "Success Criteria", "detailA": "Realization of measurable operational business benefits", "detailB": "Delivery of agreed scope on time, within budget, to specified quality"}
        ]
    },
    {
        "conceptA": "Supportive PMO",
        "conceptB": "Controlling PMO",
        "comparisonPoints": [
            {"criterion": "Level of Control", "detailA": "LOW level of control", "detailB": "MODERATE level of control"},
            {"criterion": "Authority Model", "detailA": "Consultative advisor and center of excellence", "detailB": "Compliance auditor and governance enforcer"},
            {"criterion": "Template Adoption", "detailA": "Optional; PMs adopt templates at their discretion", "detailB": "Mandatory; PMs must conform to standardized tools and templates"},
            {"criterion": "Auditing Activities", "detailA": "No formal compliance auditing", "detailB": "Conducts regular project reviews to ensure governance compliance"}
        ]
    },
    {
        "conceptA": "Controlling PMO",
        "conceptB": "Directive PMO",
        "comparisonPoints": [
            {"criterion": "Level of Control", "detailA": "MODERATE level of control", "detailB": "HIGH level of control"},
            {"criterion": "Project Manager Reporting", "detailA": "PMs report to functional departments, following PMO standards", "detailB": "PMs report directly to and are employed by the PMO"},
            {"criterion": "Project Management Mandate", "detailA": "Provides governance frameworks and audits compliance", "detailB": "Directly manages projects and takes operational ownership"},
            {"criterion": "Organizational Power", "detailA": "Standardization authority over process and reporting", "detailB": "Direct resource and operational authority over all enterprise projects"}
        ]
    },
    {
        "conceptA": "Large-Scale Scrum (LeSS)",
        "conceptB": "Scaled Agile Framework (SAFe)",
        "comparisonPoints": [
            {"criterion": "Scaling Philosophy", "detailA": "Minimalist 'More with LeSS' (descaling hierarchy, zero extra roles)", "detailB": "Prescriptive multi-tiered enterprise scaffolding (Team, Program, Portfolio)"},
            {"criterion": "Role Overhead", "detailA": "Zero new management roles in basic mode (1 PO for all 8 teams)", "detailB": "Adds RTEs, Product Managers, Solution Architects, Business Owners"},
            {"criterion": "Backlog Architecture", "detailA": "Strictly ONE Product Backlog for up to 8 feature teams", "detailB": "Hierarchical backlogs: Team Backlog, Program Backlog, Portfolio Backlog"},
            {"criterion": "Team Type", "detailA": "Mandates cross-functional Feature Teams across all architectural layers", "detailB": "Accommodates both Feature Teams and Component Teams"}
        ]
    },
    {
        "conceptA": "Basic LeSS",
        "conceptB": "LeSS Huge",
        "comparisonPoints": [
            {"criterion": "Target Scale", "detailA": "Up to 8 feature teams (roughly 50 to 70 developers)", "detailB": "More than 8 teams (hundreds to thousands of developers)"},
            {"criterion": "Product Owner Structure", "detailA": "Strictly ONE single Product Owner managing all teams", "detailB": "One head Product Owner supported by Area Product Owners (APOs)"},
            {"criterion": "Backlog Partitioning", "detailA": "Single unified Product Backlog with no sub-backlogs", "detailB": "Product Backlog partitioned into customer-centric Requirement Areas"},
            {"criterion": "Organizational Complexity", "detailA": "Radically minimal; zero intermediate coordination layers", "detailB": "Structured area governance to prevent head PO cognitive overload"}
        ]
    },
    {
        "conceptA": "Functional Organization",
        "conceptB": "Projectized Organization",
        "comparisonPoints": [
            {"criterion": "PM Authority Level", "detailA": "Little or no formal authority (part-time coordinator)", "detailB": "High to total authority over personnel, budget, and operations"},
            {"criterion": "Team Reporting Line", "detailA": "Staff report directly to permanent Functional Department Managers", "detailB": "Staff report dedicatedly to the Project Manager"},
            {"criterion": "Budget Control", "detailA": "Functional department managers control all budgets", "detailB": "Project Manager controls the project budget completely"},
            {"criterion": "Team Reassignment at Close", "detailA": "Smooth return to permanent functional department", "detailB": "'No home' dilemma; anxiety over future assignment upon project close"}
        ]
    },
    {
        "conceptA": "Weak Matrix",
        "conceptB": "Strong Matrix",
        "comparisonPoints": [
            {"criterion": "Dominant Authority", "detailA": "Functional department manager dominates power", "detailB": "Project manager dominates power"},
            {"criterion": "PM Role Nature", "detailA": "Part-time project coordinator or expediter", "detailB": "Full-time designated project manager"},
            {"criterion": "Budget Ownership", "detailA": "Controlled by functional department managers", "detailB": "Controlled directly by the project manager"},
            {"criterion": "PM Reporting Line", "detailA": "Reports within a functional department", "detailB": "Reports to a dedicated Project Management Department or PMO Director"}
        ]
    },
    {
        "conceptA": "Iterative Development",
        "conceptB": "Incremental Development",
        "comparisonPoints": [
            {"criterion": "Scope vs Fidelity", "detailA": "All features developed early at low fidelity, refined together", "detailB": "Few features developed early at 100% full fidelity, expanded over time"},
            {"criterion": "Delivery Pattern", "detailA": "Evolves the whole system through successive refinement passes", "detailB": "Delivers completely finished functional slices added sequentially"},
            {"criterion": "Customer Experience", "detailA": "Customer sees complete application shell evolving in depth", "detailB": "Customer receives small, fully finished working tools piece by piece"},
            {"criterion": "Analogy", "detailA": "Artist sketching full canvas in pencil, then watercolor, then oil", "detailB": "Modular house builder completing bedroom 100%, then kitchen 100%"}
        ]
    },
    {
        "conceptA": "Predictive (Plan-Driven)",
        "conceptB": "Adaptive (Agile)",
        "comparisonPoints": [
            {"criterion": "Requirement Assumption", "detailA": "Requirements can be fully known, specified, and baselined upfront", "detailB": "Requirements inevitably evolve as users interact with software"},
            {"criterion": "Cost of Change", "detailA": "Rises exponentially the later in the lifecycle change is requested", "detailB": "Kept relatively flat through modular design and short sprint cycles"},
            {"criterion": "Documentation Approach", "detailA": "Comprehensive, formal baseline specifications and audit trails", "detailB": "Lean, purposeful documentation subordinated to working software"},
            {"criterion": "Best Fit Domain", "detailA": "Safety-critical, heavily regulated, fixed-price contract projects", "detailB": "High volatility, innovative, exploratory, fast-moving markets"}
        ]
    },
    {
        "conceptA": "Directing a Project (DP)",
        "conceptB": "Controlling a Stage (CS)",
        "comparisonPoints": [
            {"criterion": "Process Ownership", "detailA": "Solely owned and executed by the Project Board", "detailB": "Owned and executed daily by the Project Manager"},
            {"criterion": "Time Horizon", "detailA": "Runs continuously across all stages from startup through closure", "detailB": "Active strictly during an authorized delivery stage"},
            {"criterion": "Core Activities", "detailA": "Authorizing initiation, stage plans, closure, and exception reports", "detailB": "Assigning Work Packages, tracking progress, managing stage issues"},
            {"criterion": "Level of Governance", "detailA": "Directing level (strategic decisions and governance approvals)", "detailB": "Managing level (operational day-to-day stage management)"}
        ]
    },
    {
        "conceptA": "Validate Scope (PMBOK)",
        "conceptB": "Control Quality (PMBOK)",
        "comparisonPoints": [
            {"criterion": "Primary Objective", "detailA": "Formalizing customer/stakeholder acceptance of completed deliverables", "detailB": "Monitoring and verifying technical correctness and conformance to specs"},
            {"criterion": "Key Participants", "detailA": "Project Manager, Sponsor, Customer, and User Stakeholders", "detailB": "Project Manager, Quality Assurance team, and technical testers"},
            {"criterion": "Input / Output Flow", "detailA": "Takes 'Verified Deliverables' from Quality and yields 'Accepted Deliverables'", "detailB": "Takes raw deliverables and yields 'Verified Deliverables'"},
            {"criterion": "Guiding Question", "detailA": "'Does the customer accept this deliverable?'", "detailB": "'Is this deliverable technically correct and defect-free?'"}
        ]
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/comparisons.ts', 'w') as f:
    f.write(f'import {{ CheatSheetComparison }} from "../../../../types";\n\nexport const unit6Comparisons: CheatSheetComparison[] = {json.dumps(comparisons_list, indent=2)};\n')
print(f"Generated unit-6/comparisons.ts ({len(comparisons_list)} comparisons)")

# =========================================================================
# 3. TRAPS.TS (25 Exam Traps)
# =========================================================================
traps_list = [
    {
        "id": "itpm-u6-trap-001", "unit": 6, "relatedConcept": "PMBOK Processes Distribution",
        "trapTitle": "Misremembering the 2-24-8-11-2 Process Distribution",
        "trapDescription": "Students mix up the number of processes across the 5 PMBOK Process Groups.",
        "whyStudentsFail": "Exam questions test the exact distribution: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2).",
        "correctApproach": "Remember the 2-24-8-11-2 pattern. Planning has 24 processes; Initiating and Closing have 2 each."
    },
    {
        "id": "itpm-u6-trap-002", "unit": 6, "relatedConcept": "PMBOK Process Groups",
        "trapTitle": "Confusing Process Groups with Project Phases",
        "trapDescription": "Treating Initiating, Planning, Executing, Controlling, Closing as sequential phases.",
        "whyStudentsFail": "Process groups overlap continuously throughout every phase of a project.",
        "correctApproach": "Process groups are overlapping activity categories, NOT chronological lifecycle phases."
    },
    {
        "id": "itpm-u6-trap-003", "unit": 6, "relatedConcept": "Project Scope vs Product Scope",
        "trapTitle": "Inverting Project Scope and Product Scope",
        "trapDescription": "Defining Project Scope as features and Product Scope as work performed.",
        "whyStudentsFail": "Product Scope = features and functions of deliverable. Project Scope = work performed to deliver that product.",
        "correctApproach": "Product = Deliverable features; Project = Work performed."
    },
    {
        "id": "itpm-u6-trap-004", "unit": 6, "relatedConcept": "PMBOK Integration Management",
        "trapTitle": "Placing Integrated Change Control in Scope Management",
        "trapDescription": "Assuming 'Perform Integrated Change Control' belongs to Scope Management.",
        "whyStudentsFail": "Change control affects scope, schedule, budget, risk, and procurement simultaneously, so it belongs to Integration Management.",
        "correctApproach": "Integrated Change Control belongs to Project Integration Management."
    },
    {
        "id": "itpm-u6-trap-005", "unit": 6, "relatedConcept": "PMBOK Cost Baseline",
        "trapTitle": "Including Management Reserves in the Cost Baseline",
        "trapDescription": "Believing Management Reserves are part of the Performance Measurement Baseline.",
        "whyStudentsFail": "Cost Baseline includes Contingency Reserves, but EXCLUDES Management Reserves.",
        "correctApproach": "Cost Baseline = Work Package Estimates + Contingency Reserves. Management Reserves sit outside."
    },
    {
        "id": "itpm-u6-trap-006", "unit": 6, "relatedConcept": "Validate Scope vs Control Quality",
        "trapTitle": "Confusing Validate Scope with Quality Control",
        "trapDescription": "Thinking Validate Scope checks for technical bugs.",
        "whyStudentsFail": "Control Quality verifies technical correctness; Validate Scope secures customer formal acceptance.",
        "correctApproach": "Quality Control = defect check; Validate Scope = customer acceptance."
    },
    {
        "id": "itpm-u6-trap-007", "unit": 6, "relatedConcept": "PRINCE2 7-7-7 Structure",
        "trapTitle": "Mixing PRINCE2 Principles and Themes",
        "trapDescription": "Calling Business Case a principle or Manage by Exception a theme.",
        "whyStudentsFail": "Principles are rules (e.g. Manage by Exception); Themes are continuing disciplines (e.g. Business Case).",
        "correctApproach": "Keep the 7 Principles (universal rules) distinct from the 7 Themes (management aspects)."
    },
    {
        "id": "itpm-u6-trap-008", "unit": 6, "relatedConcept": "PRINCE2 Project Board",
        "trapTitle": "Placing the Project Manager on the Project Board",
        "trapDescription": "Assuming the Project Manager is a voting member of the Project Board.",
        "whyStudentsFail": "The Project Board represents Executive, Senior User, and Senior Supplier. The PM reports TO the Board.",
        "correctApproach": "The PM is NEVER a member of the Project Board."
    },
    {
        "id": "itpm-u6-trap-009", "unit": 6, "relatedConcept": "PRINCE2 Manage by Exception",
        "trapTitle": "Believing the PM Escalates Every Daily Variance",
        "trapDescription": "Assuming the Project Board approves daily task adjustments.",
        "whyStudentsFail": "Under Manage by Exception, the PM manages autonomously within agreed tolerances, escalating only when a tolerance is breached.",
        "correctApproach": "PM works autonomously within tolerances. Escalates only via Exception Report upon breach."
    },
    {
        "id": "itpm-u6-trap-010", "unit": 6, "relatedConcept": "PRINCE2 Six Tolerances",
        "trapTitle": "Forgetting the Six PRINCE2 Tolerances",
        "trapDescription": "Omitting Benefits or Risk from the tolerance list.",
        "whyStudentsFail": "PRINCE2 sets tolerances across Time, Cost, Quality, Scope, Risk, and Benefits.",
        "correctApproach": "Memorize all 6 tolerances: T-C-Q-S-R-B."
    },
    {
        "id": "itpm-u6-trap-011", "unit": 6, "relatedConcept": "PRINCE2 Processes",
        "trapTitle": "Confusing Starting Up (SU) with Initiating (IP)",
        "trapDescription": "Assuming detailed planning happens in Starting up a Project.",
        "whyStudentsFail": "SU is a lightweight pre-project filter; IP creates the comprehensive Project Initiation Documentation (PID).",
        "correctApproach": "SU = Pre-project brief; IP = Detailed baseline planning."
    },
    {
        "id": "itpm-u6-trap-012", "unit": 6, "relatedConcept": "PRINCE2 Directing a Project",
        "trapTitle": "Assuming the Project Manager Directs the Project",
        "trapDescription": "Believing the PM executes the 'Directing a Project' (DP) process.",
        "whyStudentsFail": "Directing a Project (DP) is the sole process owned and executed by the Project Board.",
        "correctApproach": "DP belongs to the Project Board, NOT the Project Manager."
    },
    {
        "id": "itpm-u6-trap-013", "unit": 6, "relatedConcept": "Multi-Project Hierarchy",
        "trapTitle": "Treating a Programme as Just a Big Project",
        "trapDescription": "Defining a Programme as a single large project with a long timeline.",
        "whyStudentsFail": "A programme coordinates MULTIPLE related projects to capture synergistic business benefits not achievable individually.",
        "correctApproach": "Programme = group of related projects focused on benefits realization."
    },
    {
        "id": "itpm-u6-trap-014", "unit": 6, "relatedConcept": "Three PMO Types",
        "trapTitle": "Inverting PMO Control Levels",
        "trapDescription": "Calling a Controlling PMO high control or Directive PMO moderate control.",
        "whyStudentsFail": "Supportive = Low control; Controlling = Moderate control; Directive = High control.",
        "correctApproach": "Supportive (Low) -> Controlling (Moderate) -> Directive (High)."
    },
    {
        "id": "itpm-u6-trap-015", "unit": 6, "relatedConcept": "Scrum of Scrums",
        "trapTitle": "Assuming Scrum of Scrums Only Asks Three Questions",
        "trapDescription": "Believing SoS asks the same 3 questions as the Daily Scrum.",
        "whyStudentsFail": "SoS asks FOUR questions, including the crucial bilateral question: 'Are you putting any impediment in the way of other teams?'",
        "correctApproach": "SoS has 4 questions, focusing heavily on cross-team dependencies."
    },
    {
        "id": "itpm-u6-trap-016", "unit": 6, "relatedConcept": "Large-Scale Scrum (LeSS)",
        "trapTitle": "Giving Each Team Its Own Product Owner in LeSS",
        "trapDescription": "Assuming each of the 8 feature teams in Basic LeSS gets a separate Product Owner.",
        "whyStudentsFail": "LeSS enforces strict single-source rules: ONE Product Owner and ONE Product Backlog for all 8 teams.",
        "correctApproach": "In Basic LeSS, there is only ONE Product Owner for all teams."
    },
    {
        "id": "itpm-u6-trap-017", "unit": 6, "relatedConcept": "LeSS Huge",
        "trapTitle": "Introducing Area Product Owners in Basic LeSS",
        "trapDescription": "Adding APOs to projects with fewer than 8 teams.",
        "whyStudentsFail": "APOs only exist in LeSS Huge for massive projects exceeding 8 teams.",
        "correctApproach": "Basic LeSS (<=8 teams) = 1 PO; LeSS Huge (>8 teams) = Area Product Owners."
    },
    {
        "id": "itpm-u6-trap-018", "unit": 6, "relatedConcept": "SAFe Agile Release Train",
        "trapTitle": "Misremembering the ART Headcount Range",
        "trapDescription": "Assuming an Agile Release Train has 10 people or 1,000 people.",
        "whyStudentsFail": "The official headcount of an Agile Release Train in SAFe is 50 to 125 people.",
        "correctApproach": "ART = 50 to 125 people."
    },
    {
        "id": "itpm-u6-trap-019", "unit": 6, "relatedConcept": "SAFe CALMR DevOps",
        "trapTitle": "Misidentifying CALMR Acronym Components",
        "trapDescription": "Replacing 'Recovery' with 'Resilience' or 'Lean Flow' with 'Logic'.",
        "whyStudentsFail": "CALMR strictly stands for: Culture, Automation, Lean Flow, Measurement, Recovery.",
        "correctApproach": "C-A-L-M-R = Culture, Automation, Lean Flow, Measurement, Recovery."
    },
    {
        "id": "itpm-u6-trap-020", "unit": 6, "relatedConcept": "Matrix Organizations",
        "trapTitle": "Confusing Weak Matrix with Strong Matrix",
        "trapDescription": "Assuming the PM dominates in a Weak Matrix.",
        "whyStudentsFail": "Weak Matrix = Functional manager rules; Strong Matrix = PM rules with full-time role.",
        "correctApproach": "Weak = FM power; Balanced = Shared power; Strong = PM power."
    },
    {
        "id": "itpm-u6-trap-021", "unit": 6, "relatedConcept": "Projectized Organization",
        "trapTitle": "Misunderstanding the 'No Home' Dilemma",
        "trapDescription": "Thinking 'no home' refers to remote telecommuting.",
        "whyStudentsFail": "It refers to team member career anxiety upon project closure because there is no permanent functional department to return to.",
        "correctApproach": "'No Home' = lack of permanent departmental home upon project dissolution."
    },
    {
        "id": "itpm-u6-trap-022", "unit": 6, "relatedConcept": "Iterative vs Incremental",
        "trapTitle": "Treating Iterative and Incremental as Synonyms",
        "trapDescription": "Failing to distinguish low-fidelity whole system (Iterative) from high-fidelity pieces (Incremental).",
        "whyStudentsFail": "The course book explicitly separates them: Iterative = all features, increasing fidelity; Incremental = few features, full fidelity.",
        "correctApproach": "Iterative = Sketch to paint. Incremental = Room by room."
    },
    {
        "id": "itpm-u6-trap-023", "unit": 6, "relatedConcept": "Methodology Selection",
        "trapTitle": "Declaring Plan-Driven Models Obsolete for All Large Projects",
        "trapDescription": "Assuming all large modern projects must use pure agile.",
        "whyStudentsFail": "Fixed-price contracts, strict regulatory compliance, and safety-critical systems require predictive governance (PMBOK/PRINCE2/V-Model).",
        "correctApproach": "Predictive models remain essential for compliance, safety, and fixed contracts."
    },
    {
        "id": "itpm-u6-trap-024", "unit": 6, "relatedConcept": "Hybrid Methodologies",
        "trapTitle": "Assuming Hybrid Means Confused Management",
        "trapDescription": "Believing hybrid approaches are accidental or undisciplined.",
        "whyStudentsFail": "Course Book Figure 48 emphasizes that Hybrid intentionally combines predictive budgeting/governance with agile execution.",
        "correctApproach": "Hybrid = Predictive governance + Agile sprint delivery."
    },
    {
        "id": "itpm-u6-trap-025", "unit": 6, "relatedConcept": "PRINCE2 Premature Closure",
        "trapTitle": "Assuming Cancelled PRINCE2 Projects Skip Closing",
        "trapDescription": "Thinking a cancelled project just stops without executing Closing a Project.",
        "whyStudentsFail": "PRINCE2 mandates executing Closing a Project (CP) even for premature terminations to salvage assets and capture lessons.",
        "correctApproach": "Closing process MUST be executed even if the project is aborted early."
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/traps.ts', 'w') as f:
    f.write(f'export interface ExamTrapItem {{\n  id: string;\n  trapTitle: string;\n  trapDescription: string;\n  whyStudentsFail: string;\n  correctApproach: string;\n  relatedConcept: string;\n  unit: number;\n}}\n\nexport const unit6ExamTraps: ExamTrapItem[] = {json.dumps(traps_list, indent=2)};\n')
print(f"Generated unit-6/traps.ts ({len(traps_list)} traps)")

# =========================================================================
# 4. VISUALS.TS (8 Visuals)
# =========================================================================
visuals_list = [
    {
        "id": "itpm-u6-vis-001",
        "title": "PMBOK 5x10 Process Matrix (Figures 42 & 43)",
        "description": "Cross-tabulation of 5 Process Groups across 10 Knowledge Areas mapping all 47 discrete processes.",
        "type": "matrix",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-002",
        "title": "PRINCE2 7-7-7 Architecture & Process Model (Figure 45)",
        "description": "Integration of 7 Principles, 7 Themes, and 7 chronological Processes across 4 Management Levels.",
        "type": "architecture",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-003",
        "title": "PRINCE2 Four Management Levels & Project Board Triad",
        "description": "Hierarchical governance linking Corporate/Programme, Project Board (Executive, Senior User, Senior Supplier), PM, and Team Managers.",
        "type": "hierarchy",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-004",
        "title": "Multi-Project Hierarchy (Figure 46)",
        "description": "Strategic reporting structure connecting Portfolio (strategy), Programme (benefits), and Projects (outputs).",
        "type": "reporting-tree",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-005",
        "title": "PMO Authority & Control Spectrum",
        "description": "Comparative spectrum illustrating Supportive (Low), Controlling (Moderate), and Directive (High) PMO control models.",
        "type": "spectrum",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-006",
        "title": "Scrum of Scrums Multi-Team Coordination (Figure 47)",
        "description": "Inter-team ambassador coordination meeting addressing four dependency and blocker questions.",
        "type": "network",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-007",
        "title": "LeSS Single-Source vs LeSS Huge Requirement Areas",
        "description": "Structural comparison of Basic LeSS (1 PO, 1 Backlog for 8 teams) against LeSS Huge Area Product Owners.",
        "type": "scaling-comparison",
        "unit": 6
    },
    {
        "id": "itpm-u6-vis-008",
        "title": "Project Management Methodologies Continuum (Figure 48)",
        "description": "Methodology spectrum mapping Predictive, Iterative, Incremental, Agile, and Hybrid lifecycle models.",
        "type": "continuum",
        "unit": 6
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/visuals.ts', 'w') as f:
    f.write(f'export const unit6Visuals = {json.dumps(visuals_list, indent=2)};\n')
print(f"Generated unit-6/visuals.ts ({len(visuals_list)} visuals)")

# =========================================================================
# 5. SCENARIOS.TS (8 Scenarios)
# =========================================================================
scenarios_list = [
    {
        "id": "itpm-u6-scen-001",
        "title": "The Tolerance Breach Escalation",
        "category": "PRINCE2 Governance",
        "type": "manage-by-exception",
        "context": "During Stage 3 of an enterprise ERP deployment, the Project Manager calculates that vendor consulting fees will cause the stage budget to exceed its approved £500,000 cost tolerance by 12%. The Project Manager considers taking £60,000 from Stage 4 funds secretly to balance the books.",
        "question": "What is the mandatory action required of the Project Manager under PRINCE2 Manage by Exception?",
        "options": [
            "Immediately produce and submit an Exception Report to the Project Board explaining the forecast breach and presenting options.",
            "Transfer funds secretly from Stage 4 because the overall project budget might still balance out.",
            "Cancel the project immediately without notifying the Project Board.",
            "Fire the vendor consulting team and refuse to pay their submitted invoices."
        ],
        "correctIndex": 0,
        "rationale": "Under Manage by Exception, the PM has no authority to exceed agreed stage tolerances or reallocate future stage funds. The PM must immediately alert the Project Board via an Exception Report; only the Board can authorize an Exception Plan.",
        "source": "Unit 6 · Section 6.2 — PRINCE2"
    },
    {
        "id": "itpm-u6-scen-002",
        "title": "The Evaporated Business Case",
        "category": "PRINCE2 Principles",
        "type": "business-justification",
        "context": "A retail bank is building a nationwide branch kiosk network. Halfway through the project, government legislation mandates free digital mobile banking, rendering branch kiosks economically unviable. The Project Sponsor insists on finishing the remaining kiosks because $5M has already been spent.",
        "question": "How does the PRINCE2 principle of 'Continued Business Justification' direct the Project Board to act?",
        "options": [
            "Terminate the project prematurely through the 'Closing a Project' process; continuing to spend money on an unviable project violates core governance.",
            "Continue building the kiosks to avoid wasting the $5M already spent (succumbing to the Sunk Cost Fallacy).",
            "Fire the government regulators and sue the national parliament.",
            "Hide the legislative changes from corporate shareholders."
        ],
        "correctIndex": 0,
        "rationale": "Principle 1 mandates Continued Business Justification: if business justification disappears, the project MUST be stopped early. Sunk costs cannot justify continuing an unviable initiative. The Board must direct premature closure via the Closing process.",
        "source": "Unit 6 · Section 6.2 — PRINCE2"
    },
    {
        "id": "itpm-u6-scen-003",
        "title": "The Siloed Project Disaster",
        "category": "Multi-Project Management",
        "type": "portfolio-alignment",
        "context": "A healthcare corporation runs 40 independent IT projects. Two separate hospital divisions independently spend $3M each contracting different vendors to build electronic patient record systems, resulting in incompatible databases that cannot exchange patient histories.",
        "question": "What multi-project governance body and tier was missing to prevent this duplicated investment?",
        "options": [
            "Portfolio Management / Enterprise PMO to ensure strategic alignment, eliminate duplication, and govern enterprise investments.",
            "Daily developer standups in the hospital cafeteria.",
            "A software testing consulting agency.",
            "An offshore call center in another time zone."
        ],
        "correctIndex": 0,
        "rationale": "Portfolio Management focuses on 'doing the right work', providing centralized visibility to ensure projects advance corporate strategy without duplicate capital expenditure or incompatible technical silos.",
        "source": "Unit 6 · Section 6.3 — Multi-Project Management"
    },
    {
        "id": "itpm-u6-scen-004",
        "title": "The Misaligned Directive PMO",
        "category": "PMO Models",
        "type": "pmo-culture-fit",
        "context": "A fast-growing gaming startup with an informal, highly creative hacker culture hires an executive who immediately institutes a Directive PMO, mandating that all project managers report to him, requiring 40 pages of weekly status forms, and dictating task allocations.",
        "question": "Why is this Directive PMO facing widespread rebellion and developer resignations?",
        "options": [
            "A Directive PMO exerts high centralized control, which directly clashes with an entrepreneurial, decentralized creative culture that thrives on autonomy.",
            "Directive PMOs only function on projects with more than 10,000 employees.",
            "Gaming software cannot be managed using project management principles.",
            "The PMO failed to purchase video game consoles for developers."
        ],
        "correctIndex": 0,
        "rationale": "A PMO model must match organizational culture. Forcing a Directive PMO (high control) onto an entrepreneurial, autonomous culture causes organizational rejection and talent flight. A Supportive PMO would have been more appropriate.",
        "source": "Unit 6 · Section 6.3 — Multi-Project Management"
    },
    {
        "id": "itpm-u6-scen-005",
        "title": "The LeSS Backlog Fragmentation Trap",
        "category": "Scaled Agile",
        "type": "less-backlog-rules",
        "context": "An e-commerce firm adopts Large-Scale Scrum (LeSS) across 6 feature teams. To keep teams happy, management appoints 6 separate Product Owners and creates 6 separate Product Backlogs, allowing each team to pick their own priorities independently.",
        "question": "What fundamental LeSS single-source rule has been violated, and what operational risk emerges?",
        "options": [
            "LeSS mandates strictly ONE Product Owner and ONE Product Backlog; fragmenting backlogs creates sub-product silos and destroys enterprise release alignment.",
            "LeSS mandates that only external customers can act as Product Owners.",
            "LeSS requires exactly 20 Product Owners for 6 teams.",
            "LeSS forbids the use of computers for backlog management."
        ],
        "correctIndex": 0,
        "rationale": "In LeSS, scaling is achieved through radical simplification: ONE Product Owner and ONE shared Product Backlog for all teams (up to 8). Fragmenting backlogs recreates isolated component silos and destroys whole-product alignment.",
        "source": "Unit 6 · Section 6.4 — Agile Software Processes in Large Projects"
    },
    {
        "id": "itpm-u6-scen-006",
        "title": "The SoS Bilateral Impediment Discovery",
        "category": "Scrum of Scrums",
        "type": "sos-fourth-question",
        "context": "At a Scrum of Scrums meeting, the ambassador from Team Alpha mentions they refactored the customer database schema to speed up their search queries. The ambassador from Team Beta realizes that this unannounced schema change will break Team Beta's payment checkout pipeline tonight.",
        "question": "Which specific Scrum of Scrums question was designed to uncover this exact inter-team dependency risk?",
        "options": [
            "Question 4: 'Are you putting any impediment in the way of other teams?'",
            "Question 1: 'What did you do yesterday?'",
            "Question 2: 'What will you do tomorrow?'",
            "Question 3: 'What is blocking your team?'"
        ],
        "correctAnswer": 0,
        "correctIndex": 0,
        "rationale": "Question 4 uniquely enforces bilateral responsibility: it compels teams to reflect on whether their internal architectural choices or code commits are creating downstream blockers for peer teams.",
        "source": "Unit 6 · Section 6.4 — Agile Software Processes in Large Projects"
    },
    {
        "id": "itpm-u6-scen-007",
        "title": "The Weak Matrix Authority Crisis",
        "category": "Organizational Structures",
        "type": "matrix-authority-conflict",
        "context": "In a Weak Matrix organization, a project manager is held accountable by senior executives for missing a critical software release deadline. The project manager explains that the Functional Engineering Manager repeatedly pulled senior developers off the project to work on routine operational maintenance tickets without the PM's consent.",
        "question": "Why is the project manager structurally powerless to prevent this in a Weak Matrix?",
        "options": [
            "In a Weak Matrix, functional managers maintain primary control over personnel and resource allocations; the PM acts only as a coordinator without authority to command staff.",
            "In a Weak Matrix, project managers are legally forbidden from talking to functional managers.",
            "Functional managers have total authority over project managers in all matrix models.",
            "The project manager forgot to purchase project management software."
        ],
        "correctIndex": 0,
        "rationale": "In a Weak Matrix, real authority rests with functional department managers. The PM is merely an expediter/coordinator, creating an organizational mismatch when held accountable for deadlines without holding resource authority.",
        "source": "Unit 6 · Section 6.5 — Selection of the Appropriate Project Management Method"
    },
    {
        "id": "itpm-u6-scen-008",
        "title": "The Enterprise Banking Hybrid Solution",
        "category": "Methodology Selection",
        "type": "hybrid-implementation",
        "context": "A global investment bank must replace its core clearing settlement engine. Central banking authorities require formal verification audit baselines and fixed-milestone reporting, but traders demand rapid iterative GUI releases to refine real-time trade charts.",
        "question": "How should the enterprise structure its methodology according to Course Book Figure 48?",
        "options": [
            "Implement a Hybrid model: utilize predictive governance (PMBOK/PRINCE2 baselines and stage gates) for regulatory compliance and core architecture, combined with agile sprints (Scrum) for rapid trader UI feature iterations.",
            "Use pure 1970s waterfall and tell traders they cannot see any software for 4 years.",
            "Use pure undocumented Scrum and refuse to provide audit records to central bank regulators.",
            "Cancel the project and process trades manually by phone."
        ],
        "correctIndex": 0,
        "rationale": "Course Book Figure 48 emphasizes that modern enterprise IT thrives on Hybrid models: satisfying regulatory compliance and architectural baselines through predictive governance, while capturing usability agility through iterative agile sprints.",
        "source": "Unit 6 · Section 6.5 — Selection of the Appropriate Project Management Method"
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/scenarios.ts', 'w') as f:
    f.write(f'export interface ScenarioItem {{\n  id: string;\n  title: string;\n  category: string;\n  type: string;\n  context: string;\n  question: string;\n  options: string[];\n  correctIndex: number;\n  rationale: string;\n  source: string;\n}}\n\nexport const unit6Scenarios: ScenarioItem[] = {json.dumps(scenarios_list, indent=2)};\n')
print(f"Generated unit-6/scenarios.ts ({len(scenarios_list)} scenarios)")

# =========================================================================
# 6. MOCKEXAMS.TS (2 Mock Exams)
# =========================================================================
mock_exams = [
    {
        "id": "itpm-u6-mock-01",
        "title": "Unit 6 Foundation Mock Exam: PMBOK & PRINCE2 Frameworks",
        "subtitle": "PMBOK 5 process groups & 47 processes, ITTO, PRINCE2 7-7-7 architecture, Project Board roles, and Manage by Exception.",
        "totalMarks": 60,
        "timeLimitMinutes": 90,
        "mcqIds": [
            "itpm-u6-s61-mcq-001", "itpm-u6-s61-mcq-002", "itpm-u6-s61-mcq-003", "itpm-u6-s61-mcq-004", "itpm-u6-s61-mcq-005",
            "itpm-u6-s61-mcq-006", "itpm-u6-s61-mcq-007", "itpm-u6-s61-mcq-008", "itpm-u6-s61-mcq-009", "itpm-u6-s61-mcq-010",
            "itpm-u6-s61-mcq-011", "itpm-u6-s61-mcq-012", "itpm-u6-s61-mcq-013", "itpm-u6-s61-mcq-014", "itpm-u6-s61-mcq-015",
            "itpm-u6-s62-mcq-031", "itpm-u6-s62-mcq-032", "itpm-u6-s62-mcq-033", "itpm-u6-s62-mcq-034", "itpm-u6-s62-mcq-035",
            "itpm-u6-s62-mcq-036", "itpm-u6-s62-mcq-037", "itpm-u6-s62-mcq-038", "itpm-u6-s62-mcq-039", "itpm-u6-s62-mcq-040",
            "itpm-u6-s62-mcq-041", "itpm-u6-s62-mcq-042", "itpm-u6-s62-mcq-043", "itpm-u6-s62-mcq-044", "itpm-u6-s62-mcq-045"
        ],
        "descriptiveQuestions": [
            {
                "id": "itpm-u6-mock-01-d01",
                "unit": 6,
                "question": "Explain the distribution of PMBOK's 47 processes across its 5 Process Groups and differentiate Project Scope from Product Scope.",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "5 Process Groups with exact numbers: 2-24-8-11-2 = 47 processes",
                    "Product Scope definition: Features and functions",
                    "Project Scope definition: Work performed to deliver product scope",
                    "Governance contrast"
                ],
                "modelAnswer": "PMBOK distributes exactly 47 processes across 5 Process Groups: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), and Closing (2). Product Scope encompasses the features and technical characteristics of the deliverable itself; Project Scope encompasses all work executed by the project team to deliver that product scope.",
                "rubricItems": [
                    {"point": "Exact process counts per group (2-24-8-11-2 = 47)", "marksAllotted": 4},
                    {"point": "Accurate distinction between Product Scope and Project Scope", "marksAllotted": 4}
                ],
                "examinerAdvice": "Ensure process distribution numbers are exact. Over 50% reside in Planning."
            },
            {
                "id": "itpm-u6-mock-01-d02",
                "unit": 6,
                "question": "Detail the composition and responsibilities of the PRINCE2 Project Board. How does 'Manage by Exception' govern the Board's relationship with the Project Manager?",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "Project Board Triad: Executive, Senior User, Senior Supplier",
                    "Individual responsibilities of each Board role",
                    "Manage by Exception: Tolerances across 6 variables (T-C-Q-S-R-B)",
                    "Exception Report workflow"
                ],
                "modelAnswer": "The PRINCE2 Project Board represents three key stakeholder interests: the Executive (business justification, funding, ultimate accountability), the Senior User (operational needs and benefit realization), and the Senior Supplier (technical delivery resources and feasibility). Under Manage by Exception, the Board sets tolerances across 6 variables (Time, Cost, Quality, Scope, Risk, Benefits); the PM manages autonomously within tolerances, escalating via an Exception Report only when a breach is forecast.",
                "rubricItems": [
                    {"point": "All 3 Project Board roles accurately defined", "marksAllotted": 4},
                    {"point": "Manage by Exception and 6 tolerances explained", "marksAllotted": 4}
                ],
                "examinerAdvice": "Never place the Project Manager as a voting member of the Project Board."
            }
        ]
    },
    {
        "id": "itpm-u6-mock-02",
        "title": "Unit 6 Mastery Mock Exam: Multi-Project, Scaled Agile & Methodology Selection",
        "subtitle": "Multi-project hierarchy (Portfolio, Programme, Project), 3 PMO models, Scrum of Scrums, LeSS, SAFe, organizational structures, and hybrid models.",
        "totalMarks": 90,
        "timeLimitMinutes": 120,
        "mcqIds": [
            "itpm-u6-s63-mcq-061", "itpm-u6-s63-mcq-062", "itpm-u6-s63-mcq-063", "itpm-u6-s63-mcq-064", "itpm-u6-s63-mcq-065",
            "itpm-u6-s63-mcq-066", "itpm-u6-s63-mcq-067", "itpm-u6-s63-mcq-068", "itpm-u6-s63-mcq-069", "itpm-u6-s63-mcq-070",
            "itpm-u6-s64-mcq-081", "itpm-u6-s64-mcq-082", "itpm-u6-s64-mcq-083", "itpm-u6-s64-mcq-084", "itpm-u6-s64-mcq-085",
            "itpm-u6-s64-mcq-086", "itpm-u6-s64-mcq-087", "itpm-u6-s64-mcq-088", "itpm-u6-s64-mcq-089", "itpm-u6-s64-mcq-090",
            "itpm-u6-s65-mcq-111", "itpm-u6-s65-mcq-112", "itpm-u6-s65-mcq-113", "itpm-u6-s65-mcq-114", "itpm-u6-s65-mcq-115",
            "itpm-u6-s65-mcq-116", "itpm-u6-s65-mcq-117", "itpm-u6-s65-mcq-118", "itpm-u6-s65-mcq-119", "itpm-u6-s65-mcq-120"
        ],
        "descriptiveQuestions": [
            {
                "id": "itpm-u6-mock-02-d01",
                "unit": 6,
                "question": "Deconstruct the multi-project hierarchy (Portfolio, Programme, Project) and contrast the 3 structural models of the PMO.",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "Hierarchy: Portfolio (strategic alignment), Programme (benefits realization), Project (outputs)",
                    "Core questions: Doing right work vs doing work right",
                    "3 PMO Types: Supportive (Low), Controlling (Moderate), Directive (High)",
                    "Governance comparison"
                ],
                "modelAnswer": "The multi-project hierarchy connects three tiers: Portfolio ('doing the right work' via strategic alignment and capital allocation), Programme ('capturing collective benefits' via inter-project coordination), and Project ('doing work right' by delivering outputs within constraints). Multi-project governance is executed via PMOs: Supportive PMOs provide templates and advice (Low Control), Controlling PMOs mandate compliance with frameworks and audit reporting (Moderate Control), and Directive PMOs directly manage projects and assign project managers (High Control).",
                "rubricItems": [
                    {"point": "Portfolio, Programme, and Project accurately defined and contrasted", "marksAllotted": 4},
                    {"point": "All 3 PMO models explained with exact control levels", "marksAllotted": 4}
                ],
                "examinerAdvice": "Remember the control levels: Supportive=Low, Controlling=Moderate, Directive=High."
            },
            {
                "id": "itpm-u6-mock-02-d02",
                "unit": 6,
                "question": "Compare Large-Scale Scrum (LeSS) and the Scaled Agile Framework (SAFe). Contrast their scaling philosophy, role overhead, and handling of architecture.",
                "marks": 8,
                "suggestedMinutes": 15,
                "answerStructure": [
                    "LeSS Philosophy: 'More with LeSS' (descaling, zero added roles, 1 PO, 1 Backlog)",
                    "SAFe Philosophy: Prescriptive enterprise scaffolding (ART, PI Planning, 50-125 people)",
                    "Role comparison: LeSS (no extra roles) vs SAFe (RTEs, Architects, Business Owners)",
                    "Architectural runway vs feature team self-organization"
                ],
                "modelAnswer": "LeSS (Larman & Vodde) and SAFe (Leffingwell) represent contrasting scaling philosophies: LeSS scales by 'descaling' organization complexity, keeping exactly ONE Product Owner, ONE Backlog, and zero extra management roles for up to 8 feature teams. SAFe provides prescriptive multi-tiered enterprise scaffolding centered around the Agile Release Train (50-125 people) with specialized roles (RTEs, Solution Architects, Business Owners) and the CALMR DevOps model. While SAFe is easier for legacy corporate hierarchies to adopt, LeSS avoids bureaucratic bloat.",
                "rubricItems": [
                    {"point": "LeSS single-source rules and descaling philosophy explained", "marksAllotted": 4},
                    {"point": "SAFe ART, roles, and CALMR DevOps explained", "marksAllotted": 4}
                ],
                "examinerAdvice": "Emphasize LeSS's radical avoidance of new roles versus SAFe's structured enterprise scaffolding."
            }
        ]
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/mockExams.ts', 'w') as f:
    f.write(f'import {{ MockExam }} from "../../../../types";\n\nexport const unit6MockExams: MockExam[] = {json.dumps(mock_exams, indent=2)};\n')
print(f"Generated unit-6/mockExams.ts ({len(mock_exams)} mock exams)")

# =========================================================================
# 7. INDEX.TS
# =========================================================================
index_content = """import { UnitData } from "../../../../types";
import { unit6Mcqs } from "./mcqs";
import { unit6Flashcards } from "./flashcards";
import { unit6ImportantQuestions } from "./qa";
import { unit6Concepts, unit6SummarySections } from "./concepts";
import { unit6Comparisons } from "./comparisons";
import { unit6ExamTraps } from "./traps";
import { unit6Visuals } from "./visuals";
import { unit6MockExams } from "./mockExams";
import { unit6Scenarios } from "./scenarios";

export {
  unit6Mcqs,
  unit6Flashcards,
  unit6ImportantQuestions,
  unit6Concepts,
  unit6SummarySections,
  unit6Comparisons,
  unit6ExamTraps,
  unit6Visuals,
  unit6MockExams,
  unit6Scenarios
};

export const unit6Data: UnitData = {
  id: 6,
  code: "DLMBITPAM01-U06",
  title: "Organizing Large Projects",
  subtitle: "PMBOK Guide, PRINCE2, Multi-Project Management (Portfolio & PMO), Scaled Agile (SoS, LeSS, SAFe), and Methodology Selection.",
  estimatedTime: "4.0 hours",
  color: "from-indigo-600 to-purple-600",
  gradient: "linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)",
  badge: "Unit 6",
  overview: "Official curriculum for Unit 6 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Explores large-scale, enterprise, and multi-project governance frameworks. Deconstructs the PMBOK Guide across 5 Process Groups (2-24-8-11-2 = 47 processes) and 10 Knowledge Areas, distinguishing Project Scope from Product Scope. Details PRINCE2's 7-7-7 architecture (7 Principles, 7 Themes, 7 Processes), 4 Management Levels, Project Board triad (Executive, Senior User, Senior Supplier), and core governance tenets ('Manage by Stages' and 'Manage by Exception' across 6 tolerances). Analyzes Multi-Project Management hierarchies (Portfolio -> Programme -> Project) and the three structural PMO models (Supportive, Controlling, Directive). Evaluates scaled agile frameworks including Scrum of Scrums (SoS 4 questions), Large-Scale Scrum (LeSS single-source rules and LeSS Huge), and SAFe (Agile Release Train and CALMR DevOps). Concludes with organizational structures (Functional, Matrix, Projectized) and comprehensive methodology selection frameworks (Predictive vs Adaptive vs Hybrid).",
  summarySections: unit6SummarySections,
  keyConcepts: unit6Concepts,
  cheatSheet: {
    mustMemorize: [
      "PMBOK Process Distribution: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2) = EXACTLY 47 processes.",
      "Project Scope vs Product Scope: Product Scope = features and functions; Project Scope = all the work performed to deliver that product scope.",
      "PRINCE2 7-7-7 Structure: Exactly 7 Principles, 7 Themes, and 7 Processes.",
      "PRINCE2 Four Management Levels: Corporate/Programme -> Project Board -> Project Manager -> Team Managers.",
      "PRINCE2 Project Board Triad: Executive (Business/Funding/Accountable), Senior User (User needs & benefits), Senior Supplier (Technical delivery & resources).",
      "PRINCE2 Six Tolerances: Time, Cost, Quality, Scope, Risk, Benefits.",
      "Manage by Exception: Tolerances set across 6 variables. PM escalates via Exception Report only when a tolerance is breached.",
      "Manage by Stages: Minimum 2 stages (Initiation + Delivery). Stage boundaries require Board re-authorization of Business Case.",
      "Multi-Project Hierarchy: Portfolio ('doing right work' / strategy) -> Programme ('benefits realization' / synergy) -> Project ('doing work right' / outputs).",
      "Three PMO Types: Supportive (Low control, consultative), Controlling (Moderate control, compliance auditing), Directive (High control, PMs report to PMO).",
      "Scrum of Scrums: Ambassadors meet (~15 mins) answering 4 questions. Question 4: 'Are you putting any impediment in the way of other teams?'",
      "LeSS Single-Source Rules: ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, ONE Increment (for up to 8 feature teams).",
      "SAFe Agile Release Train (ART): Long-lived team-of-teams (50 to 125 people) delivering value on synchronized cadence.",
      "SAFe CALMR DevOps: Culture, Automation, Lean Flow, Measurement, Recovery.",
      "Organizational Structures: Functional (PM has little/no authority), Weak Matrix (FM dominates), Balanced Matrix (shared), Strong Matrix (PM dominates), Projectized (PM has total authority).",
      "Iterative vs Incremental: Iterative = all features early at low fidelity, refined together; Incremental = few features at 100% full fidelity, added over time; Agile = both."
    ],
    coreDefinitions: [
      {
        term: "PMBOK Guide",
        definition: "Global knowledge standard published by PMI structuring project management into 5 process groups, 10 knowledge areas, and 47 processes.",
        examNote: "Planning contains 24 of the 47 processes."
      },
      {
        term: "PRINCE2",
        definition: "Process-based project management methodology developed by the UK government structured around 7 principles, 7 themes, and 7 processes.",
        examNote: "Signature triad of sevens (7-7-7)."
      },
      {
        term: "Project Board",
        definition: "PRINCE2 directing body holding overall accountability, representing Executive, Senior User, and Senior Supplier.",
        examNote: "The PM is not a member of the Project Board; the PM reports to the Board."
      },
      {
        term: "Programme",
        definition: "A group of related projects managed in a coordinated way to obtain synergistic benefits not available from managing them individually.",
        examNote: "Focuses on benefit realization rather than single project outputs."
      },
      {
        term: "Large-Scale Scrum (LeSS)",
        definition: "Agile scaling framework created by Craig Larman and Bas Vodde based on 'More with LeSS', keeping 1 PO and 1 Backlog for up to 8 teams.",
        examNote: "LeSS Huge adds Area Product Owners for >8 teams."
      }
    ],
    importantNumbers: [
      { number: "47", label: "PMBOK Total Processes", context: "2 Initiating, 24 Planning, 8 Executing, 11 Monitoring & Controlling, 2 Closing." },
      { number: "5", label: "PMBOK Process Groups", context: "Initiating, Planning, Executing, Monitoring & Controlling, Closing." },
      { number: "10", label: "PMBOK Knowledge Areas", context: "Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder." },
      { number: "7", label: "PRINCE2 Principles", context: "Universal rules required for PRINCE2 compliance." },
      { number: "7", label: "PRINCE2 Themes", context: "Continuous management aspects throughout project." },
      { number: "7", label: "PRINCE2 Processes", context: "SU, DP, IP, CS, MP, SB, CP." },
      { number: "4", label: "PRINCE2 Management Levels", context: "Corporate/Programme, Project Board, Project Manager, Team Managers." },
      { number: "6", label: "PRINCE2 Tolerances", context: "Time, Cost, Quality, Scope, Risk, Benefits." },
      { number: "3", label: "PMO Structural Types", context: "Supportive (Low), Controlling (Moderate), Directive (High)." },
      { number: "4", label: "Scrum of Scrums Questions", context: "Includes the 4th bilateral impediment question." },
      { number: "8", label: "Basic LeSS Maximum Teams", context: "Up to 8 feature teams supported by 1 single Product Owner." },
      { number: "50 to 125", label: "SAFe ART Headcount", context: "Team-of-teams headcount in an Agile Release Train." }
    ],
    frameworkNames: [
      { acronym: "PMBOK", fullName: "Project Management Body of Knowledge", focus: "Global standard published by PMI covering 47 processes across 10 knowledge areas." },
      { acronym: "PRINCE2", fullName: "PRojects IN Controlled Environments", focus: "Process-based methodology from the UK government based on 7 principles, 7 themes, and 7 processes." },
      { acronym: "PMO", fullName: "Project Management Office", focus: "Organizational entity supporting, controlling, or directing enterprise projects." },
      { acronym: "SoS", fullName: "Scrum of Scrums", focus: "Inter-team coordination meeting of ambassadors answering 4 dependency questions." },
      { acronym: "LeSS", fullName: "Large-Scale Scrum", focus: "Scaling Scrum by descaling organization, keeping 1 PO and 1 Backlog for up to 8 teams." },
      { acronym: "SAFe", fullName: "Scaled Agile Framework", focus: "Enterprise multi-tiered framework centered around the Agile Release Train and CALMR DevOps." },
      { acronym: "ART", fullName: "Agile Release Train", focus: "Long-lived team of agile teams (50-125 people) delivering value on synchronized cadence in SAFe." },
      { acronym: "CALMR", fullName: "Culture, Automation, Lean Flow, Measurement, Recovery", focus: "SAFe's five-element DevOps and continuous delivery mindset." }
    ]
  }
};
"""

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/index.ts', 'w') as f:
    f.write(index_content)
print("Generated unit-6/index.ts successfully!")
