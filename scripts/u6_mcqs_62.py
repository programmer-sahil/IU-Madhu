import json

s62_data = [
    {
        "id": "itpm-u6-s62-mcq-031", "topic": "PRINCE2 Acronym and Origin", "difficulty": "easy",
        "question": "What does the acronym PRINCE2 stand for, and what was its original governmental origin?",
        "options": {
            "A": "PRojects IN Controlled Environments, originating as the de facto project standard of the UK government",
            "B": "PRoject INfrastructure for Central Enterprises, developed by the European Central Bank",
            "C": "PRocess INtegration for Computer Engineering, created by the US Department of Defense",
            "D": "PRogramme INnovation in Controlled Ecosystems, established by the United Nations"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 stands for PRojects IN Controlled Environments, originally published by the UK Central Computer and Telecommunications Agency (CCTA/OGC/AXELOS) as the UK government standard.",
        "whyOthersAreWrong": [
            "European Central Bank did not create PRINCE2.",
            "US DoD created early defense standards, but not PRINCE2.",
            "United Nations is unrelated to PRINCE2's origin."
        ],
        "examTrap": "Remember the exact acronym: PRojects IN Controlled Environments (UK government origin).",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Acronym and Origin"
    },
    {
        "id": "itpm-u6-s62-mcq-032", "topic": "PRINCE2 7-7-7 Architecture", "difficulty": "easy",
        "question": "What is the structural architecture of PRINCE2 regarding its core components?",
        "options": {
            "A": "7 Principles, 7 Themes, and 7 Processes",
            "B": "5 Process Groups, 10 Knowledge Areas, and 47 Processes",
            "C": "4 Values, 12 Principles, and 3 Roles",
            "D": "4 Core Phases, 6 Disciplines, and 3 Supporting Disciplines"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 is famously built on a 7-7-7 architecture: exactly 7 Principles, 7 Themes, and 7 Processes.",
        "whyOthersAreWrong": [
            "5 Process Groups and 10 Knowledge Areas is PMBOK.",
            "4 Values and 12 Principles is the Agile Manifesto.",
            "4 Core Phases and 6 Disciplines is RUP."
        ],
        "examTrap": "Remember PRINCE2's signature triad of sevens: 7-7-7.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 7-7-7 Architecture"
    },
    {
        "id": "itpm-u6-s62-mcq-033", "topic": "PRINCE2 Seven Principles", "difficulty": "medium",
        "question": "Which of the following is NOT one of the seven foundational principles of PRINCE2?",
        "options": {
            "A": "Continuous software compilation and deployment",
            "B": "Continued business justification",
            "C": "Manage by stages",
            "D": "Focus on products"
        },
        "correctAnswer": "A",
        "explanation": "Continuous software compilation is an XP/DevOps engineering practice, not a PRINCE2 principle. The 7 principles are: Continued business justification, Learn from experience, Defined roles, Manage by stages, Manage by exception, Focus on products, Tailor to environment.",
        "whyOthersAreWrong": [
            "Continued business justification is Principle 1.",
            "Manage by stages is Principle 4.",
            "Focus on products is Principle 6."
        ],
        "examTrap": "PRINCE2 principles are universal management governance rules, not software coding techniques.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Seven Principles"
    },
    {
        "id": "itpm-u6-s62-mcq-034", "topic": "Principle: Continued Business Justification", "difficulty": "medium",
        "question": "What is required under the PRINCE2 principle of 'Continued Business Justification'?",
        "options": {
            "A": "A documented Business Case must remain valid throughout the project, and the project must be stopped if justification disappears",
            "B": "The project must be funded exclusively through commercial bank loans",
            "C": "The customer must sign a new contract every Friday morning",
            "D": "All project profits must be donated to charity"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 mandates that a project must have a justifiable business reason from start to end; if market conditions change and the Business Case is no longer viable, the project must be formally terminated early.",
        "whyOthersAreWrong": [
            "Funding sources (internal vs loans) are irrelevant to the business case validity.",
            "Weekly contract re-signing is absurd bureaucracy.",
            "Charity donations are unrelated to business justification."
        ],
        "examTrap": "If the business justification evaporates, PRINCE2 explicitly mandates stopping the project immediately.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Principle: Continued Business Justification"
    },
    {
        "id": "itpm-u6-s62-mcq-035", "topic": "Principle: Learn from Experience", "difficulty": "easy",
        "question": "When does a PRINCE2 project team seek and apply lessons learned according to the 'Learn from Experience' principle?",
        "options": {
            "A": "Throughout the entire project lifecycle: when starting up, throughout delivery, and at project closure",
            "B": "Strictly on the final day of the project during celebratory drinks",
            "C": "Only when the project fails completely and enters legal bankruptcy",
            "D": "Only during the initial recruitment interviews of programmers"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 requires learning from prior projects during startup, continuous logging of lessons during stage execution, and formal dissemination of lessons learned at closure.",
        "whyOthersAreWrong": [
            "Postponing learning to the final party means past mistakes are repeated during project execution.",
            "Learning must occur on successful projects, not just bankrupt ones.",
            "Recruitment interviews do not capture operational project lessons."
        ],
        "examTrap": "Learning from experience happens *before, during, and after* the project.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Principle: Learn from Experience"
    },
    {
        "id": "itpm-u6-s62-mcq-036", "topic": "Principle: Manage by Stages", "difficulty": "medium",
        "question": "How does the principle of 'Manage by Stages' protect executive project sponsors in PRINCE2?",
        "options": {
            "A": "By breaking the project into discrete management stages where the Project Board only commits funds one stage at a time after re-evaluating the Business Case",
            "B": "By delegating all budget control to junior programmers without audit oversight",
            "C": "By forcing the project manager to work on a physical theatrical stage",
            "D": "By requiring 100 stages for every project regardless of size"
        },
        "correctAnswer": "A",
        "explanation": "Managing by stages provides senior management with review gates: investment is committed stage-by-stage, limiting financial risk if assumptions prove false.",
        "whyOthersAreWrong": [
            "Delegating all budget without oversight destroys executive governance.",
            "Theatrical stages are performing arts venues.",
            "PRINCE2 requires at least two stages (Initiation stage + delivery stage), not 100 stages."
        ],
        "examTrap": "A PRINCE2 project must have at least TWO management stages: Initiation Stage + at least one delivery stage.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Principle: Manage by Stages"
    },
    {
        "id": "itpm-u6-s62-mcq-037", "topic": "Principle: Manage by Exception", "difficulty": "medium",
        "question": "What is the core operational mechanism of 'Manage by Exception' in PRINCE2?",
        "options": {
            "A": "Setting explicit tolerance boundaries across six project variables; the PM manages autonomously and escalates only when a tolerance is breached or forecast to be breached",
            "B": "Executive managers attend daily developer meetings and approve every line of code",
            "C": "Project managers are fired immediately whenever an unexpected exception occurs in computer software",
            "D": "The project is exempt from all corporate accounting and tax laws"
        },
        "correctAnswer": "A",
        "explanation": "Manage by Exception delegates authority: as long as forecasts remain within agreed tolerances, the Project Manager works without interference. Only breaches trigger escalation via an Exception Report.",
        "whyOthersAreWrong": [
            "Executive micromanagement is the exact antithesis of Manage by Exception.",
            "Software exceptions are technical bugs, not project governance tolerance breaches.",
            "Projects are never exempt from corporate law."
        ],
        "examTrap": "Manage by Exception prevents micro-management. The PM escalates only when *tolerances* are threatened.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Principle: Manage by Exception"
    },
    {
        "id": "itpm-u6-s62-mcq-038", "topic": "Six PRINCE2 Tolerances", "difficulty": "hard",
        "question": "Across which six project performance variables are tolerances set under PRINCE2 Manage by Exception?",
        "options": {
            "A": "Time, Cost, Quality, Scope, Risk, Benefits",
            "B": "Hardware, Software, Firmware, Networks, Databases, Storage",
            "C": "Initiating, Planning, Executing, Monitoring, Controlling, Closing",
            "D": "Input, Process, Output, Feedback, Environment, Boundary"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 defines tolerances across exactly six dimensions: Time, Cost, Quality, Scope, Risk, and Benefits.",
        "whyOthersAreWrong": [
            "Hardware, software, etc. are IT technical infrastructure components.",
            "Initiating through Closing are PMBOK process groups.",
            "Input through Boundary are general systems theory components."
        ],
        "examTrap": "Remember the 6 tolerances: Time, Cost, Quality, Scope, Risk, Benefits.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Six PRINCE2 Tolerances"
    },
    {
        "id": "itpm-u6-s62-mcq-039", "topic": "Principle: Focus on Products", "difficulty": "medium",
        "question": "What does the principle 'Focus on Products' emphasize in PRINCE2?",
        "options": {
            "A": "Projects are driven by the definition and delivery of agreed outputs (products) and their quality criteria, rather than simply carrying out activities",
            "B": "Projects should spend 90% of their budget on consumer retail marketing",
            "C": "Software developers must physically build plastic consumer goods",
            "D": "The team should ignore customer requirements and build whatever product they like"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 emphasizes that a project is output-oriented: work is defined by Product Descriptions and quality criteria, preventing the trap of being busy with activity without producing tangible deliverables.",
        "whyOthersAreWrong": [
            "Marketing spend does not define project product planning.",
            "Products in PRINCE2 refer to any tangible deliverable (documents, software, training), not just physical plastic goods.",
            "Ignoring customer requirements violates business justification."
        ],
        "examTrap": "PRINCE2 uses Product Breakdown Structures (PBS) and Product Descriptions before planning activity schedules.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Principle: Focus on Products"
    },
    {
        "id": "itpm-u6-s62-mcq-040", "topic": "Principle: Tailor to Environment", "difficulty": "easy",
        "question": "What is the purpose of the PRINCE2 principle 'Tailor to Suit the Project Environment'?",
        "options": {
            "A": "To adapt PRINCE2's themes, processes, and documentation to match project scale, complexity, geography, risk, and importance",
            "B": "To purchase expensive bespoke business suits for project managers",
            "C": "To force every small 2-day project to produce 500 pages of formal reports",
            "D": "To change the programming language every time the weather changes"
        },
        "correctAnswer": "A",
        "explanation": "Tailoring ensures that the governance and documentation are proportional to the project's scale, complexity, and risk, avoiding both unmanaged chaos and paralyzing bureaucracy.",
        "whyOthersAreWrong": [
            "Bespoke clothing is apparel tailoring, not methodology tailoring.",
            "Generating 500 pages for small projects is bureaucratic anti-tailoring.",
            "Weather is irrelevant to software engineering languages."
        ],
        "examTrap": "PRINCE2 is NOT one-size-fits-all. Tailoring is a mandatory principle.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Principle: Tailor to Environment"
    },
    {
        "id": "itpm-u6-s62-mcq-041", "topic": "PRINCE2 Seven Themes", "difficulty": "medium",
        "question": "Which of the following correctly enumerates the seven Themes in PRINCE2?",
        "options": {
            "A": "Business Case, Organization, Quality, Plans, Risk, Change, Progress",
            "B": "Initiating, Planning, Executing, Monitoring, Controlling, Reviewing, Closing",
            "C": "Scope, Schedule, Cost, Quality, Resources, Communications, Procurement",
            "D": "Vision, Mission, Strategy, Goals, Objectives, Tactics, Tasks"
        },
        "correctAnswer": "A",
        "explanation": "The 7 Themes represent aspects of project management that must be addressed continuously throughout the project: Business Case, Organization, Quality, Plans, Risk, Change, Progress.",
        "whyOthersAreWrong": [
            "Initiating through Closing are PMBOK process groups.",
            "Scope through Procurement are PMBOK knowledge areas.",
            "Vision through Tasks is a strategic planning cascade."
        ],
        "examTrap": "Remember the 7 Themes: Business Case, Organization, Quality, Plans, Risk, Change, Progress.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Seven Themes"
    },
    {
        "id": "itpm-u6-s62-mcq-042", "topic": "PRINCE2 Four Management Levels", "difficulty": "medium",
        "question": "What are the four management levels in the PRINCE2 organizational hierarchy?",
        "options": {
            "A": "Corporate or Programme Management, Project Board (Directing), Project Manager (Managing), Team Managers (Delivering)",
            "B": "Shareholders, Board of Directors, Chief Executive Officer, Interns",
            "C": "Product Owner, Scrum Master, Development Team, End Users",
            "D": "Client, General Contractor, Subcontractor, Laborer"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 separates management into 4 distinct levels: Commissioning (Corporate/Programme), Directing (Project Board), Managing (Project Manager), and Delivering (Team Managers).",
        "whyOthersAreWrong": [
            "Shareholders through Interns is a corporate equity hierarchy.",
            "PO, SM, Development Team are Scrum roles.",
            "Client through Laborer is construction contracting terminology."
        ],
        "examTrap": "Remember the 4 levels: Corporate/Programme -> Project Board -> Project Manager -> Team Managers.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Four Management Levels"
    },
    {
        "id": "itpm-u6-s62-mcq-043", "topic": "Project Board Triad Interests", "difficulty": "hard",
        "question": "Which three primary stakeholder interests are represented on the PRINCE2 Project Board?",
        "options": {
            "A": "Executive (Business/Funding), Senior User (Operational Needs), Senior Supplier (Technical Delivery)",
            "B": "Project Manager, Scrum Master, Lead Developer",
            "C": "Corporate Lawyer, Tax Accountant, External Auditor",
            "D": "Chief Executive Officer, Human Resources Director, Marketing Specialist"
        },
        "correctAnswer": "A",
        "explanation": "The Project Board must represent all three primary project interests: Executive (owns business justification and funding), Senior User (specifies requirements and uses the product), and Senior Supplier (provides technical resources and delivery expertise).",
        "whyOthersAreWrong": [
            "The Project Manager is NOT a member of the Project Board; the PM reports to the Board.",
            "Lawyers and auditors are external specialists.",
            "CEO, HR, and Marketing are general corporate roles."
        ],
        "examTrap": "The Project Board triad is: Executive, Senior User, Senior Supplier. The PM is NEVER the Project Board.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Project Board Triad Interests"
    },
    {
        "id": "itpm-u6-s62-mcq-044", "topic": "Project Board: Executive Role", "difficulty": "medium",
        "question": "What is the primary responsibility of the 'Executive' on the PRINCE2 Project Board?",
        "options": {
            "A": "Ultimately accountable for the project, representing the business interests and owning the Business Case",
            "B": "Writing source code and debugging technical algorithms",
            "C": "Representing the end users who will operate the system daily",
            "D": "Supplying programming contractors from external agencies"
        },
        "correctAnswer": "A",
        "explanation": "The Executive is appointed by Corporate/Programme management and is ultimately accountable for project success, ensuring value for money and owning the Business Case.",
        "whyOthersAreWrong": [
            "Technical coding belongs to Team Managers and suppliers.",
            "Representing end users is the responsibility of the Senior User.",
            "Supplying contractors is the responsibility of the Senior Supplier."
        ],
        "examTrap": "The Executive owns the *Business Case* and holds final accountability on the Project Board.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Project Board: Executive Role"
    },
    {
        "id": "itpm-u6-s62-mcq-045", "topic": "Project Board: Senior User Role", "difficulty": "medium",
        "question": "What is the specific responsibility of the 'Senior User' on the Project Board?",
        "options": {
            "A": "Specifies user requirements, commits user resources, and monitors that products will achieve their intended operational benefits",
            "B": "Secures financial bank loans for the project",
            "C": "Designs the technical hardware architecture of the database cluster",
            "D": "Conducts annual salary reviews for supplier programmers"
        },
        "correctAnswer": "A",
        "explanation": "The Senior User represents the individuals or departments who will use the final product, verifying operational suitability and realizing planned benefits.",
        "whyOthersAreWrong": [
            "Securing funding is the responsibility of the Executive and Corporate Management.",
            "Technical database architecture belongs to the Senior Supplier.",
            "Salary reviews are external HR matters."
        ],
        "examTrap": "Senior User = User requirements and *benefit realization* in operations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Project Board: Senior User Role"
    },
    {
        "id": "itpm-u6-s62-mcq-046", "topic": "Project Board: Senior Supplier Role", "difficulty": "medium",
        "question": "What does the 'Senior Supplier' represent on the Project Board?",
        "options": {
            "A": "The technical integrity, feasibility, and quality of the specialist products and resources supplied to the project",
            "B": "The customer's retail accounting department",
            "C": "The legal department of the local municipal government",
            "D": "The end-consumer buying tickets online"
        },
        "correctAnswer": "A",
        "explanation": "The Senior Supplier represents the interests of those designing, developing, facilitating, and maintaining the project's products, accountable for technical feasibility and resource commitment.",
        "whyOthersAreWrong": [
            "Customer accounting is represented by the Executive.",
            "Municipal legal departments are external regulatory stakeholders.",
            "End-consumers are represented by the Senior User."
        ],
        "examTrap": "Senior Supplier = Technical feasibility, technical integrity, and supply of developer resources.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Project Board: Senior Supplier Role"
    },
    {
        "id": "itpm-u6-s62-mcq-047", "topic": "PRINCE2 Seven Processes", "difficulty": "hard",
        "question": "Which of the following lists the seven formal Processes in the PRINCE2 model (Course Book Figure 45)?",
        "options": {
            "A": "Starting up a Project, Directing a Project, Initiating a Project, Controlling a Stage, Managing Product Delivery, Managing a Stage Boundary, Closing a Project",
            "B": "Initiating, Planning, Executing, Monitoring, Controlling, Transitioning, Closing",
            "C": "Inception, Elaboration, Construction, Transition, Production, Disposal, Maintenance",
            "D": "Requirements, Analysis, Design, Coding, Testing, Deployment, Auditing"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 defines exactly 7 processes: SU (Starting Up), DP (Directing), IP (Initiating), CS (Controlling a Stage), MP (Managing Product Delivery), SB (Managing a Stage Boundary), and CP (Closing a Project).",
        "whyOthersAreWrong": [
            "Initiating through Closing is PMBOK.",
            "Inception through Disposal is RUP.",
            "Requirements through Auditing is Waterfall."
        ],
        "examTrap": "Memorize the 7 process acronyms: SU, DP, IP, CS, MP, SB, CP.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Seven Processes"
    },
    {
        "id": "itpm-u6-s62-mcq-048", "topic": "Process: Directing a Project (DP)", "difficulty": "hard",
        "question": "Who executes the 'Directing a Project' (DP) process, and how long does it run?",
        "options": {
            "A": "The Project Board executes DP, running continuously from project startup through the final closure authorization",
            "B": "The Project Manager executes DP during the first two weeks of the project only",
            "C": "Team Managers execute DP during daily software releases",
            "D": "External auditors execute DP after the project is completed"
        },
        "correctAnswer": "A",
        "explanation": "Directing a Project (DP) is the sole process owned by the Project Board. It starts upon completion of Starting Up a Project and runs continuously across all stages until project closure.",
        "whyOthersAreWrong": [
            "The Project Manager executes Controlling a Stage and Initiating, not DP.",
            "Team Managers execute Managing Product Delivery.",
            "Auditors do not direct the project."
        ],
        "examTrap": "DP is the Project Board's process. The PM does NOT execute DP.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Process: Directing a Project (DP)"
    },
    {
        "id": "itpm-u6-s62-mcq-049", "topic": "Process: Starting Up a Project (SU)", "difficulty": "medium",
        "question": "What is the primary purpose of the 'Starting up a Project' (SU) pre-project process in PRINCE2?",
        "options": {
            "A": "To ensure that the prerequisites for initiating a project are in place by answering: 'Do we have a viable and worthwhile project?'",
            "B": "To write the complete production source code for all deliverables",
            "C": "To train 50,000 corporate end users on system administration",
            "D": "To conduct final user acceptance sign-off"
        },
        "correctAnswer": "A",
        "explanation": "SU is a lightweight pre-project filter designed to prevent unviable projects from being initiated. It designs the project brief, appoints the Project Board, and seeks authorization to initiate.",
        "whyOthersAreWrong": [
            "No coding occurs in SU; it is pre-project feasibility.",
            "User training occurs during Managing Product Delivery near project end.",
            "Acceptance sign-off occurs in Closing."
        ],
        "examTrap": "SU happens BEFORE the project officially starts. Initiating a Project (IP) happens AFTER the Board approves the Project Brief.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Process: Starting Up a Project (SU)"
    },
    {
        "id": "itpm-u6-s62-mcq-050", "topic": "Process: Initiating a Project (IP)", "difficulty": "medium",
        "question": "What major master document is produced during the 'Initiating a Project' (IP) process in PRINCE2?",
        "options": {
            "A": "The Project Initiation Documentation (PID)",
            "B": "The daily standup whiteboard sticky notes",
            "C": "The annual corporate shareholder dividend report",
            "D": "The final product release notes"
        },
        "correctAnswer": "A",
        "explanation": "Initiating a Project (IP) produces the Project Initiation Documentation (PID)—the comprehensive baseline suite defining the project's strategy, plans, controls, and Business Case.",
        "whyOthersAreWrong": [
            "Daily standup sticky notes are agile sprint artifacts.",
            "Dividend reports are investor relations documents.",
            "Release notes are generated during stage delivery."
        ],
        "examTrap": "The PID is the central baseline document of PRINCE2, produced in the IP process.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Process: Initiating a Project (IP)"
    },
    {
        "id": "itpm-u6-s62-mcq-051", "topic": "Process: Managing a Stage Boundary (SB)", "difficulty": "medium",
        "question": "What is the primary activity carried out by the Project Manager during 'Managing a Stage Boundary' (SB)?",
        "options": {
            "A": "Reviewing the current stage performance, updating the Project Plan and Business Case, and preparing the Next Stage Plan for Project Board approval",
            "B": "Writing unit tests for newly developed software classes",
            "C": "Firing the Senior User for requesting a change",
            "D": "Dissolving the corporate entity and archiving bank accounts"
        },
        "correctAnswer": "A",
        "explanation": "Managing a Stage Boundary (SB) prepares information so the Project Board can evaluate stage success, re-evaluate business justification, and decide whether to authorize the Next Stage Plan.",
        "whyOthersAreWrong": [
            "Unit testing is performed by technical teams in Managing Product Delivery.",
            "Project managers cannot fire Project Board members.",
            "Dissolving corporate entities is bankruptcy liquidation."
        ],
        "examTrap": "SB happens near the end of a stage to prepare for the NEXT stage. The Board decides at the boundary gate.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Process: Managing a Stage Boundary (SB)"
    },
    {
        "id": "itpm-u6-s62-mcq-052", "topic": "Process: Managing Product Delivery (MP)", "difficulty": "medium",
        "question": "Who controls and executes the 'Managing Product Delivery' (MP) process, and what mechanism governs it?",
        "options": {
            "A": "Team Managers execute MP, governed by formal 'Work Packages' agreed with the Project Manager",
            "B": "The Project Board executes MP using informal email chats",
            "C": "External end-users execute MP by voting online",
            "D": "Government regulators execute MP using criminal warrants"
        },
        "correctAnswer": "A",
        "explanation": "Managing Product Delivery is the interface between the Project Manager and Team Managers. Team Managers accept, execute, and deliver Work Packages according to agreed quality criteria.",
        "whyOthersAreWrong": [
            "The Project Board directs at the governance level, not technical delivery.",
            "End users validate products; they do not execute MP.",
            "Government warrants are law enforcement actions."
        ],
        "examTrap": "Work Packages are the formal contracts between the Project Manager and Team Managers in MP.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "Process: Managing Product Delivery (MP)"
    },
    {
        "id": "itpm-u6-s62-mcq-053", "topic": "PRINCE2 Exception Handling Flow", "difficulty": "hard",
        "question": "When a Project Manager forecasts that a stage will exceed its agreed Cost tolerance, what is the mandatory sequence of actions in PRINCE2?",
        "options": {
            "A": "Submit an Exception Report immediately to the Project Board; if requested by the Board, produce an Exception Plan for approval",
            "B": "Secretly transfer funds from another company project without informing anyone",
            "C": "Extend the project deadline by six months without telling the Board",
            "D": "Cancel the project immediately without notifying stakeholders"
        },
        "correctAnswer": "A",
        "explanation": "Under Manage by Exception, the PM must immediately raise an Exception Report detailing the breach and options. The Project Board evaluates it and may instruct the PM to prepare an Exception Plan.",
        "whyOthersAreWrong": [
            "Transferring funds secretly is corporate fraud.",
            "Changing deadlines unilaterally violates governance.",
            "Only the Project Board has the authority to cancel a project."
        ],
        "examTrap": "PM raises an *Exception Report* first. The PM only creates an *Exception Plan* if the Board requests one.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Exception Handling Flow"
    },
    {
        "id": "itpm-u6-s62-mcq-054", "topic": "PRINCE2 vs PMBOK Primary Distinction", "difficulty": "medium",
        "question": "What is a primary conceptual distinction between PRINCE2 and PMBOK?",
        "options": {
            "A": "PRINCE2 is a process-based methodology specifying 'how' to manage with clear organizational roles; PMBOK is a knowledge standard covering 'what' a PM needs to know",
            "B": "PRINCE2 is strictly for small agile teams; PMBOK is strictly for construction",
            "C": "PRINCE2 does not allow changes; PMBOK prohibits planning",
            "D": "PMBOK was created in Europe; PRINCE2 was created in the United States"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 provides a prescriptive, step-by-step governance methodology with explicit roles; PMBOK is a comprehensive body of knowledge and reference framework of tools and techniques.",
        "whyOthersAreWrong": [
            "PRINCE2 is widely used for major enterprise/government projects.",
            "Both frameworks incorporate disciplined change control and planning.",
            "PMBOK was created in the US (PMI); PRINCE2 was created in the UK (CCTA/OGC)."
        ],
        "examTrap": "They are complementary: PRINCE2 answers *who does what and when*; PMBOK answers *what tools and knowledge to use*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 vs PMBOK Primary Distinction"
    },
    {
        "id": "itpm-u6-s62-mcq-055", "topic": "PRINCE2 Highlight Report", "difficulty": "medium",
        "question": "What is the purpose of the 'Highlight Report' submitted by the Project Manager to the Project Board in PRINCE2?",
        "options": {
            "A": "A regular, time-interval summary of stage progress, tolerance status, and upcoming risks for the Project Board",
            "B": "A marketing brochure highlighting company executive achievements",
            "C": "A developer timesheet logging hourly keyboard activity",
            "D": "A legal contract granting property rights to suppliers"
        },
        "correctAnswer": "A",
        "explanation": "The Highlight Report is produced periodically by the PM to keep the Project Board informed of stage progress, actual performance against tolerances, and key risks without burdening them with minutiae.",
        "whyOthersAreWrong": [
            "Marketing brochures are external promotional tools.",
            "Timesheets are internal HR operational tracking.",
            "Property rights are commercial legal contracts."
        ],
        "examTrap": "Highlight Report = periodic status to Board. Exception Report = urgent notification of tolerance breach.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Highlight Report"
    },
    {
        "id": "itpm-u6-s62-mcq-056", "topic": "PRINCE2 Product-Based Planning", "difficulty": "hard",
        "question": "In PRINCE2, which technique is mandated before any activity scheduling or Gantt charting takes place?",
        "options": {
            "A": "Product-Based Planning (Product Breakdown Structure, Product Flow Diagram, Product Descriptions)",
            "B": "Writing Java or C++ source code for the user login page",
            "C": "Conducting daily standup meetings with external suppliers",
            "D": "Estimating developer salaries using three-point PERT formulas"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2 enforces Product-Based Planning: you first define what products are needed (PBS), describe their quality standards (Product Descriptions), and sequence their dependencies (Product Flow Diagram) before planning activities.",
        "whyOthersAreWrong": [
            "Coding cannot begin before products and requirements are specified.",
            "Daily standups are Scrum ceremonies.",
            "Salary estimation is an HR budgeting activity."
        ],
        "examTrap": "Products come FIRST, activities come SECOND in PRINCE2 planning.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Product-Based Planning"
    },
    {
        "id": "itpm-u6-s62-mcq-057", "topic": "PRINCE2 Project Assurance", "difficulty": "hard",
        "question": "What is the function of 'Project Assurance' in the PRINCE2 governance structure?",
        "options": {
            "A": "An independent oversight function ensuring that the project remains viable, user needs are met, and technical standards are satisfied",
            "B": "An insurance policy that repays investors if software has bugs",
            "C": "A marketing guarantee promising zero defects to end users",
            "D": "A legal contract obligating suppliers to work without pay during defects"
        },
        "correctAnswer": "A",
        "explanation": "Project Assurance monitors all aspects of the project's performance independently of the Project Manager, assuring the Project Board that business, user, and technical standards are upheld.",
        "whyOthersAreWrong": [
            "Commercial insurance is financial risk management, not PRINCE2 project assurance.",
            "Zero defect guarantees are marketing slogans.",
            "Unpaid work violates labor law."
        ],
        "examTrap": "Project Assurance is independent of the Project Manager. The PM cannot assure their own project.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Project Assurance"
    },
    {
        "id": "itpm-u6-s62-mcq-058", "topic": "PRINCE2 End Project Report", "difficulty": "medium",
        "question": "During the 'Closing a Project' (CP) process, what formal document does the PM prepare for the Project Board to authorize project closure?",
        "options": {
            "A": "End Project Report (including Lessons Learned Report)",
            "B": "Project Charter",
            "C": "Product Backlog Sprint 1 Plan",
            "D": "Initial Business Case draft"
        },
        "correctAnswer": "A",
        "explanation": "In Closing a Project (CP), the PM drafts the End Project Report (comparing actual performance against the PID) and Lessons Learned Report for Project Board sign-off.",
        "whyOthersAreWrong": [
            "Project Charter is a PMBOK initiating document.",
            "Sprint 1 plan is a Scrum artifact.",
            "Initial Business Case draft belongs to pre-project Starting Up."
        ],
        "examTrap": "Closing requires the End Project Report and Lessons Learned Report.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 End Project Report"
    },
    {
        "id": "itpm-u6-s62-mcq-059", "topic": "PRINCE2 Theme: Organization", "difficulty": "medium",
        "question": "What is the primary concern of the 'Organization' Theme in PRINCE2?",
        "options": {
            "A": "Defining and establishing the project's structure of accountability and responsibilities (who is accountable to whom)",
            "B": "Arranging office desks and purchasing computer furniture",
            "C": "Filing corporate tax documents with government authorities",
            "D": "Managing company shareholder elections"
        },
        "correctAnswer": "A",
        "explanation": "The Organization Theme establishes the temporary management structure for the project, defining clear roles and responsibilities across the 4 management levels.",
        "whyOthersAreWrong": [
            "Furniture arrangement is office facilities management.",
            "Tax filings are corporate financial accounting.",
            "Shareholder elections are corporate governance."
        ],
        "examTrap": "Organization answers: *'Who has what responsibility and accountability on this project?'*",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Theme: Organization"
    },
    {
        "id": "itpm-u6-s62-mcq-060", "topic": "PRINCE2 Premature Closure", "difficulty": "hard",
        "question": "Can a PRINCE2 project be closed prematurely, and what must happen if it is?",
        "options": {
            "A": "Yes; if business justification disappears or the Project Board instructs, the project must enter the Closing a Project process to salvage deliverables and record lessons",
            "B": "No; once started, a PRINCE2 project must run for its full planned duration even if all funds are lost",
            "C": "Yes, but all project managers must be reported to the police",
            "D": "No; early closure is strictly forbidden by the AXELOS certification board"
        },
        "correctAnswer": "A",
        "explanation": "If the business justification evaporates or an unresolvable exception occurs, the Board directs premature closure. The project must still follow the 'Closing a Project' process to archive assets and record lessons.",
        "whyOthersAreWrong": [
            "Running projects without business justification violates Principle 1.",
            "Premature closure is good governance, not a crime.",
            "AXELOS explicitly provides standard processes for premature closure."
        ],
        "examTrap": "Even premature cancellations MUST execute the Closing process to secure deliverables and lessons.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2"},
        "sourceUnit": 6, "sourceSection": "6.2", "sourceTopic": "PRINCE2 Premature Closure"
    }
]

print(f"Prepared Section 6.2 MCQs: {len(s62_data)}")
