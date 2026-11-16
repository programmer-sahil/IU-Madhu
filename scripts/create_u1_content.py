import json
import os

u1_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-1"
os.makedirs(u1_dir, exist_ok=True)

# -----------------------------------------------------------------------------
# UNIT 1 MCQS (70 Total: 18 in 1.1, 22 in 1.2, 18 in 1.3, 12 in 1.4)
# -----------------------------------------------------------------------------

mcqs = [
    # ---------------- 1.1 DEFINING IT PROJECTS (18 MCQs) ----------------
    {
        "id": "itpm-u1-s1-mcq-001",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Defining IT Projects",
        "difficulty": "easy",
        "question": "Which two attributes fundamentally distinguish a project from ongoing business operations?",
        "options": {
            "A": "Temporary duration and unique deliverable",
            "B": "Continuous execution and repeated processes",
            "C": "Fixed team size and standard operating procedures",
            "D": "Permanent funding and recurring deliverables"
        },
        "correctAnswer": "A",
        "explanation": "A project is defined as a temporary endeavor undertaken to create a unique product, service, or result. In contrast, operations are ongoing and repetitive activities.",
        "whyOthersAreWrong": [
            "Continuous execution and repeated processes define routine business operations.",
            "Fixed team size and standard procedures are operational traits, not the defining markers of a project.",
            "Projects have finite lifespans and unique outcomes rather than permanent funding and recurring deliverables."
        ],
        "examTrap": "Do not confuse project uniqueness with operations. Projects always have a defined start and finish, creating something unique.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Defining IT Projects", "sourcePage": 16
    },
    {
        "id": "itpm-u1-s1-mcq-002",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Defining IT Projects",
        "difficulty": "easy",
        "question": "What does 'temporary' signify in the context of an IT project?",
        "options": {
            "A": "The project deliverable will only last for a short time",
            "B": "The project has a defined beginning and a defined end",
            "C": "Project staff are hired only on temporary freelance contracts",
            "D": "The technology chosen will quickly become obsolete"
        },
        "correctAnswer": "B",
        "explanation": "'Temporary' means the project work has a definite beginning and end point. The resulting product or service itself is typically intended to be long-lasting.",
        "whyOthersAreWrong": [
            "The deliverable or product itself is intended to be lasting and useful, even though the project effort is temporary.",
            "Staff contracts do not define project temporality; core employees often staff projects.",
            "Technology lifespan does not define whether an organizational endeavor is temporary."
        ],
        "examTrap": "Temporary applies to the project endeavor and its timeline, NEVER to the lifespan of the resulting product or service.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Defining IT Projects", "sourcePage": 16
    },
    {
        "id": "itpm-u1-s1-mcq-003",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "IT Project Management Core Concepts",
        "difficulty": "medium",
        "question": "Which of the following best summarizes the core operational scope of IT project management?",
        "options": {
            "A": "Developing plans, organizing work, monitoring against plans, and accountability for project goals",
            "B": "Writing source code and personally deploying production database servers",
            "C": "Eliminating all project uncertainties and guaranteeing zero software defects",
            "D": "Operating permanent technical help desks and customer support channels"
        },
        "correctAnswer": "A",
        "explanation": "IT project management is the disciplined application of developing project plans, organizing team effort, monitoring execution against those plans, and maintaining accountability for achieving project goals.",
        "whyOthersAreWrong": [
            "Coding and server administration are specialist technical tasks, not the management discipline itself.",
            "No project manager can eliminate all uncertainties; risk is managed, not magically abolished.",
            "Operating ongoing help desks belongs to operations and service management, not temporary projects."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Defining IT Projects", "sourcePage": 16
    },
    {
        "id": "itpm-u1-s1-mcq-004",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Challenges of IT Projects",
        "difficulty": "medium",
        "question": "Why are IT projects widely considered more difficult to manage than traditional engineering projects?",
        "options": {
            "A": "Rapidly changing technology, unclear/evolving requirements, and sociotechnical complexity",
            "B": "IT projects do not have any constraints on cost or schedule",
            "C": "IT projects involve only mechanical machinery without any human users",
            "D": "IT projects have universally standardized and unchanging blueprints"
        },
        "correctAnswer": "A",
        "explanation": "IT projects face fast-moving technology, high requirement volatility, complex stakeholder landscapes, legacy integrations, and sociotechnical interactions between people and software.",
        "whyOthersAreWrong": [
            "IT projects are heavily constrained by time, budget, and scope.",
            "IT systems explicitly involve human interaction and social contexts.",
            "Unlike civil engineering, software lacks physical, immutable blueprints and faces fluid requirements."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Why IT Projects are Difficult", "page": 17 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Why IT Projects are Difficult", "sourcePage": 17
    },
    {
        "id": "itpm-u1-s1-mcq-005",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Discipline Maturity",
        "difficulty": "hard",
        "question": "Which factor is highlighted in the course book regarding the maturity of IT project management as a discipline?",
        "options": {
            "A": "It is centuries old with fully codified and immutable natural laws",
            "B": "It is a relatively young discipline with limited sharing of failure lessons across organizations",
            "C": "It has completely eliminated project failure rates across all commercial sectors",
            "D": "It relies entirely on hardware manufacturing techniques established during the Industrial Revolution"
        },
        "correctAnswer": "B",
        "explanation": "The course book explains that IT project management is still a relatively young discipline where organizations frequently hide or fail to share lessons learned from project failures.",
        "whyOthersAreWrong": [
            "IT project management emerged in recent decades, unlike centuries-old construction disciplines.",
            "Failure rates in IT projects remain significant.",
            "Software cannot be treated purely as industrial assembly-line manufacturing."
        ],
        "examTrap": "Exam trap: Organizations frequently conceal failed IT projects, limiting industry-wide learning.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Why IT Projects are Difficult", "page": 17 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Why IT Projects are Difficult", "sourcePage": 17
    },
    {
        "id": "itpm-u1-s1-mcq-006",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Organizational Information Needs",
        "difficulty": "easy",
        "question": "In an organization, the operational level primarily requires IT systems to support:",
        "options": {
            "A": "Routine daily transactions and structured operational tracking",
            "B": "Long-term ten-year strategic business acquisitions",
            "C": "Executive corporate governance policy formulation",
            "D": "Annual statutory shareholder dividend declarations"
        },
        "correctAnswer": "A",
        "explanation": "The operational level of an enterprise requires IT systems to handle day-to-day transactions, order processing, and routine structured tasks.",
        "whyOthersAreWrong": [
            "Long-term 10-year strategy is an executive-level concern.",
            "Corporate governance policies are formulated at executive and board levels.",
            "Dividend declarations belong to senior corporate executive governance."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Organizational Information Needs", "page": 17 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Organizational Information Needs", "sourcePage": 17
    },
    {
        "id": "itpm-u1-s1-mcq-007",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Organizational Information Needs",
        "difficulty": "medium",
        "question": "At the management knowledge level, IT systems mainly assist decision-makers by:",
        "options": {
            "A": "Converting raw operational data into meaningful patterns, insights, and actionable knowledge",
            "B": "Directly soldering circuit boards and physical network cables",
            "C": "Eliminating the need for middle management and project team leaders",
            "D": "Replacing all operational staff with automated robots"
        },
        "correctAnswer": "A",
        "explanation": "At the middle management/knowledge level, systems aggregate and transform operational transaction data into structured patterns, reports, and knowledge for tactical decisions.",
        "whyOthersAreWrong": [
            "Hardware cabling is low-level physical maintenance, not knowledge-level decision support.",
            "IT systems support managers rather than abolishing project leadership roles.",
            "Automating operational tasks does not define the management knowledge role."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Organizational Information Needs", "page": 17 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Organizational Information Needs", "sourcePage": 17
    },
    {
        "id": "itpm-u1-s1-mcq-008",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Organizational Information Needs",
        "difficulty": "medium",
        "question": "What type of information is primarily demanded at the executive level of an enterprise?",
        "options": {
            "A": "Strategic summaries, macro trends, and high-level performance indicators",
            "B": "Detailed minute-by-minute database query logs",
            "C": "Individual daily timesheets of junior programmers",
            "D": "Raw unformatted network packet headers"
        },
        "correctAnswer": "A",
        "explanation": "Executive level leadership requires aggregated, strategic information to determine long-term organizational direction, market positioning, and enterprise resource allocation.",
        "whyOthersAreWrong": [
            "Database logs are examined by operational DBAs and technical teams.",
            "Individual timesheets are handled by line managers and operational HR.",
            "Packet headers are technical diagnostic data, not executive-level information."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Organizational Information Needs", "page": 17 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Organizational Information Needs", "sourcePage": 17
    },
    {
        "id": "itpm-u1-s1-mcq-009",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "External Influences",
        "difficulty": "easy",
        "question": "Which group of external stakeholders has the legal authority to impose mandatory compliance constraints on an IT project?",
        "options": {
            "A": "Governments and regulatory bodies",
            "B": "Hardware component subcontractors",
            "C": "Junior software quality testing interns",
            "D": "Open-source developer discussion forums"
        },
        "correctAnswer": "A",
        "explanation": "Governments and regulatory agencies enforce mandatory legal, data protection, security, and statutory compliance requirements on IT projects.",
        "whyOthersAreWrong": [
            "Subcontractors operate under commercial contracts rather than statutory public law.",
            "Testing interns have internal operational duties, not statutory regulatory authority.",
            "Open-source forums offer voluntary community discussion, not legal mandates."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "External Influences", "page": 18 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "External Influences", "sourcePage": 18
    },
    {
        "id": "itpm-u1-s1-mcq-010",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Sociotechnical Systems",
        "difficulty": "medium",
        "question": "Why does the course book describe IT systems as 'sociotechnical systems'?",
        "options": {
            "A": "They combine hardware and software with human behavior and social interaction",
            "B": "They can only be programmed using social networking scripting languages",
            "C": "They are exclusively maintained by non-profit social welfare institutions",
            "D": "They operate in complete isolation from human operators and organizations"
        },
        "correctAnswer": "A",
        "explanation": "A sociotechnical system links physical hardware and software with human organizational behavior, user habits, and social structures. The course book uses the tablet computer as an example.",
        "whyOthersAreWrong": [
            "Sociotechnical has nothing to do with social media programming languages.",
            "Sociotechnical systems exist across commercial, governmental, and industrial organizations.",
            "The term explicitly highlights the mutual dependence of human and technological elements."
        ],
        "examTrap": "Exam trap: An IT system is never just software or hardware; user behavior, organizational context, and social processes are inseparable parts of the system.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Sociotechnical Systems", "page": 18 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Sociotechnical Systems", "sourcePage": 18
    },
    {
        "id": "itpm-u1-s1-mcq-011",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Project Success",
        "difficulty": "medium",
        "question": "Why does delivering all technical components alone NOT guarantee project success?",
        "options": {
            "A": "Project success requires balancing objectives and constraints while delivering intended business value to stakeholders",
            "B": "Technical deliverables are legally prohibited from being considered in success evaluations",
            "C": "Success is determined exclusively by the number of lines of code written",
            "D": "A project is only successful if it runs indefinitely without ever terminating"
        },
        "correctAnswer": "A",
        "explanation": "Technical completion is insufficient if the deliverable fails to deliver expected business value, is rejected by end users, or excessively violates budget, schedule, or quality constraints.",
        "whyOthersAreWrong": [
            "Technical deliverables are obviously a core component, but not the sole criterion of success.",
            "Lines of code is an obsolete, discredited metric that does not measure business value.",
            "Projects must terminate by definition; indefinite endeavors are ongoing operations."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Project Success", "page": 18 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Project Success", "sourcePage": 18
    },
    {
        "id": "itpm-u1-s1-mcq-012",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "The Iron Triangle",
        "difficulty": "easy",
        "question": "Which three core constraints constitute the classic 'Iron Triangle' of project management?",
        "options": {
            "A": "Scope, Schedule, and Cost",
            "B": "Quality, Risk, and People",
            "C": "Hardware, Software, and Network",
            "D": "Strategy, Governance, and Compliance"
        },
        "correctAnswer": "A",
        "explanation": "The Iron Triangle represents the fundamental trade-off model composed of Scope, Schedule (time), and Cost (budget/resources).",
        "whyOthersAreWrong": [
            "Quality and risk are critical constraints, but the three nodes of the classic Iron Triangle are Scope, Schedule, and Cost.",
            "Hardware, software, and network are technical infrastructure elements.",
            "Strategy, governance, and compliance are organizational governance dimensions."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Iron Triangle", "page": 19 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Iron Triangle", "sourcePage": 19
    },
    {
        "id": "itpm-u1-s1-mcq-013",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Iron Triangle Trade-offs",
        "difficulty": "easy",
        "question": "According to the Iron Triangle, expanding the scope of an IT project while keeping quality constant generally results in:",
        "options": {
            "A": "An increase in required time, cost, or resources",
            "B": "An automatic decrease in overall project costs",
            "C": "A faster delivery schedule without additional staff",
            "D": "Zero impact on project budget or timeline"
        },
        "correctAnswer": "A",
        "explanation": "Widening scope requires more effort and activities, which inevitably demands more calendar time, higher financial expenditure, or additional resources.",
        "whyOthersAreWrong": [
            "Expanding scope increases workload, which cannot decrease costs.",
            "Extra scope cannot accelerate delivery without substantial resource increases, and even then has limits.",
            "The constraints are interdependent; altering one directly exerts pressure on the others."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Iron Triangle", "page": 19 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Iron Triangle", "sourcePage": 19
    },
    {
        "id": "itpm-u1-s1-mcq-014",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Iron Triangle Trade-offs",
        "difficulty": "medium",
        "question": "If an organization demands that an IT project's delivery schedule be drastically compressed without reducing scope, what is the direct consequence?",
        "options": {
            "A": "Additional resources and higher costs must be injected, or quality risk will rise",
            "B": "The project will automatically require fewer programmers and less equipment",
            "C": "The technical complexity of the system will naturally decrease",
            "D": "Stakeholder communication requirements will be eliminated"
        },
        "correctAnswer": "A",
        "explanation": "Shortening the timeline requires crashing or fast-tracking activities, which increases resource expenditure (overtime, extra specialists) or risks compromising technical quality.",
        "whyOthersAreWrong": [
            "Compressing time requires more resource capacity, not fewer programmers.",
            "Technical complexity remains the same or worsens due to concurrency and rushed integration.",
            "Stakeholder communication becomes even more critical during accelerated execution."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Iron Triangle", "page": 19 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Iron Triangle", "sourcePage": 19
    },
    {
        "id": "itpm-u1-s1-mcq-015",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Iron Triangle Trade-offs",
        "difficulty": "medium",
        "question": "When executive leadership unexpectedly cuts an approved project budget by 30%, what is the most realistic project management adjustment according to the Iron Triangle?",
        "options": {
            "A": "Negotiate a reduced realizable scope or extend the delivery schedule",
            "B": "Demand that programmers double their daily working hours without pay",
            "C": "Pretend the budget cut did not occur and continue full scope realization",
            "D": "Eliminate all testing and deploy unverified software immediately"
        },
        "correctAnswer": "A",
        "explanation": "A substantial reduction in funding must be balanced by deselecting lower-priority features (reducing scope) or adjusting delivery expectations, rather than ignoring reality.",
        "whyOthersAreWrong": [
            "Unpaid overtime causes burnout, legal violations, and severe quality defects.",
            "Ignoring financial constraints leads to abrupt project insolvency and shutdown.",
            "Abolishing testing breaches quality standards and creates disastrous operational failures."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Iron Triangle", "page": 19 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Iron Triangle", "sourcePage": 19
    },
    {
        "id": "itpm-u1-s1-mcq-016",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Quintuple Constraints",
        "difficulty": "medium",
        "question": "Which specific five constraints form the 'Quintuple Project Constraints' model in the official IU course book?",
        "options": {
            "A": "Schedule, Cost, Context, Technical, and Financing",
            "B": "Scope, Time, Cost, Quality, and Risk",
            "C": "Hardware, Software, People, Process, and Data",
            "D": "Planning, Coding, Testing, Deployment, and Maintenance"
        },
        "correctAnswer": "A",
        "explanation": "The official IU course book explicitly defines the quintuple constraints as: Schedule, Cost, Context, Technical, and Financing (Figure 3, page 20).",
        "whyOthersAreWrong": [
            "Scope, Time, Cost, Quality, Risk is a common generic model from PMBOK, but NOT the specific quintuple model in the IU course book.",
            "Hardware, software, people, process, data is an information systems component model.",
            "Planning, coding, testing, deployment, maintenance are software lifecycle stages."
        ],
        "examTrap": "CRITICAL EXAM TRAP: The IU course book specifically lists Schedule, Cost, Context, Technical, and Financing. Do not substitute PMBOK constraints!",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Quintuple Constraints", "sourcePage": 20
    },
    {
        "id": "itpm-u1-s1-mcq-017",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Quintuple Constraints",
        "difficulty": "hard",
        "question": "In the Quintuple Constraints model, what does the 'Context' constraint encompass?",
        "options": {
            "A": "The operating environment, including cultural, organizational, customization, and legal/regulatory factors",
            "B": "The physical memory allocation of the application server CPU",
            "C": "The hourly billing rate of external software consultants",
            "D": "The compiler version used during continuous integration builds"
        },
        "correctAnswer": "A",
        "explanation": "Context considers the operational environment ranging from local or global cultural concerns and customization needs to organizational politics and legal/regulatory frameworks.",
        "whyOthersAreWrong": [
            "CPU memory allocation falls under the Technical constraint.",
            "Hourly consultant rates belong to Cost and Financing constraints.",
            "Compiler versions belong to the Technical/software configuration domain."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Quintuple Constraints", "sourcePage": 20
    },
    {
        "id": "itpm-u1-s1-mcq-018",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.1",
        "topic": "Quintuple Constraints",
        "difficulty": "hard",
        "question": "How does the 'Technical' constraint in the Quintuple model correspond to the classic Iron Triangle?",
        "options": {
            "A": "It essentially corresponds to the Scope constraint, covering technical design and system requirements",
            "B": "It replaces the Schedule constraint completely",
            "C": "It is identical to the Financing constraint",
            "D": "It represents external public relations marketing"
        },
        "correctAnswer": "A",
        "explanation": "The course book explicitly states: 'The technical constraints essentially correspond to the scope constraints we saw in the iron triangle' (page 20).",
        "whyOthersAreWrong": [
            "Schedule is maintained as its own distinct constraint in the quintuple model.",
            "Financing is a separate constraint concerning cash flow and funding sources.",
            "Marketing is not a technical architectural constraint."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 },
        "sourceUnit": 1, "sourceSection": "1.1", "sourceTopic": "Quintuple Constraints", "sourcePage": 20
    },

    # ---------------- 1.2 ROLES AND PHASES (22 MCQs) ----------------
    {
        "id": "itpm-u1-s2-mcq-001",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Large-Project Hierarchy",
        "difficulty": "easy",
        "question": "In the large-project hierarchy presented in Unit 1, which role is placed directly above the Project Manager?",
        "options": {
            "A": "Project Sponsor / Project Management Office (PMO)",
            "B": "Technical Coordinator",
            "C": "Work-Package Leader",
            "D": "Task Leader"
        },
        "correctAnswer": "A",
        "explanation": "In the large plan-driven project hierarchy, the Project Sponsor and PMO occupy the top executive tier above the Project Manager.",
        "whyOthersAreWrong": [
            "The Technical Coordinator reports directly to the Project Manager.",
            "Work-Package Leaders report up to the Technical Coordinator and PM.",
            "Task Leaders operate below Work-Package Leaders."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Large-Project Hierarchy", "page": 21 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Large-Project Hierarchy", "sourcePage": 21
    },
    {
        "id": "itpm-u1-s2-mcq-002",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Sponsor",
        "difficulty": "easy",
        "question": "What is the primary role and responsibility of the Project Sponsor?",
        "options": {
            "A": "Owning the business case, securing funding, and providing high-level organizational support",
            "B": "Writing unit tests and conducting daily code reviews for software developers",
            "C": "Designing database schemas and configuring network routing switches",
            "D": "Chairing weekly operational task-level status standups"
        },
        "correctAnswer": "A",
        "explanation": "The Project Sponsor champions the project business case, ensures financial resources are provided, and aligns the project with enterprise strategy.",
        "whyOthersAreWrong": [
            "Coding and testing are developer and QA specialist activities.",
            "Database schemas are designed by data architects and technical teams.",
            "Task-level standups are led by task leaders or work package leaders."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 21 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 21
    },
    {
        "id": "itpm-u1-s2-mcq-003",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Management Office (PMO)",
        "difficulty": "medium",
        "question": "What is the primary institutional role of a Project Management Office (PMO) in supporting projects?",
        "options": {
            "A": "Providing standardized project management procedures, templates, and multi-project resource support",
            "B": "Serving as the exclusive legal defense team in civil litigation against clients",
            "C": "Dictating specific programming syntax and variable naming conventions",
            "D": "Replacing all project managers with an automated algorithm"
        },
        "correctAnswer": "A",
        "explanation": "A PMO offers centralized organizational support, standardized governance templates, portfolio visibility, and assists in staffing and resource coordination.",
        "whyOthersAreWrong": [
            "Legal litigation is handled by corporate legal counsel, not the PMO.",
            "Programming syntax standards are established by lead software architects.",
            "The PMO empowers and guides human project managers, rather than replacing them."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 21 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 21
    },
    {
        "id": "itpm-u1-s2-mcq-004",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Manager Reporting",
        "difficulty": "easy",
        "question": "In a formal project hierarchy, to whom does the Project Manager primarily report upward?",
        "options": {
            "A": "The Project Sponsor and the Project Management Board (PMB)",
            "B": "The individual task programmers",
            "C": "The external hardware component distributor",
            "D": "The junior testing technicians"
        },
        "correctAnswer": "A",
        "explanation": "The Project Manager maintains upward accountability and reporting to the Project Sponsor and the Project Management Board (PMB).",
        "whyOthersAreWrong": [
            "Programmers report upward through task leaders and WPLs, not vice versa.",
            "Hardware vendors are external suppliers managed under contract.",
            "Testers report upward through their technical leads."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 21 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 21
    },
    {
        "id": "itpm-u1-s2-mcq-005",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Manager Responsibilities",
        "difficulty": "medium",
        "question": "Which set of responsibilities squarely belongs to the Project Manager?",
        "options": {
            "A": "Overall project coordination, progress monitoring against baselines, chairing meetings, and deliverables tracking",
            "B": "Approving personal banking loans for team members",
            "C": "Replacing the board of directors during corporate takeovers",
            "D": "Writing all system documentation and user manuals personally"
        },
        "correctAnswer": "A",
        "explanation": "The PM carries total accountability for project execution, stakeholder coordination, performance tracking, meeting management, and deliverable realization.",
        "whyOthersAreWrong": [
            "Personal loans have no place in project management responsibilities.",
            "Board of directors replacement is shareholder governance, far outside project scope.",
            "User manuals are drafted by technical writers and development teams."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "page": 22
    },
    {
        "id": "itpm-u1-s2-mcq-006",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Technical Coordinator",
        "difficulty": "medium",
        "question": "What is the primary function of the Technical Coordinator in a large plan-driven IT project?",
        "options": {
            "A": "Supporting the PM technically, overseeing Work-Package Leaders, and maintaining the technical project library",
            "B": "Securing corporate equity financing from venture capital investors",
            "C": "Signing financial auditing disclosures for corporate tax returns",
            "D": "Handling employee payroll processing and health insurance deductions"
        },
        "correctAnswer": "A",
        "explanation": "The Technical Coordinator acts as the technical lead supporting the PM, monitors development specifications, oversees WPLs, and maintains project technical documentation and history.",
        "whyOthersAreWrong": [
            "Venture capital financing is handled by executives and founders.",
            "Tax disclosures belong to corporate finance and certified public accountants.",
            "Payroll processing is a corporate human resources function."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-007",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Work-Package Leader",
        "difficulty": "easy",
        "question": "A Work-Package Leader (WPL) is primarily responsible for:",
        "options": {
            "A": "The coordination, deliverables, and progress reporting of a specific assigned work package",
            "B": "Securing overall project charter sign-off from executive sponsors",
            "C": "Corporate public relations and brand marketing campaigns",
            "D": "The entire enterprise IT budget and corporate IT infrastructure"
        },
        "correctAnswer": "A",
        "explanation": "A WPL manages the scope, deliverables, task coordination, and status reporting of their designated work package.",
        "whyOthersAreWrong": [
            "Securing charter sign-off is the responsibility of the Project Sponsor and PM.",
            "Corporate PR is a marketing department activity.",
            "Enterprise IT budget is managed by the CIO/corporate management."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-008",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Task Leader",
        "difficulty": "easy",
        "question": "What is the primary role of a Task Leader in the project hierarchy?",
        "options": {
            "A": "Guiding and coordinating specific task-level execution within a work package",
            "B": "Deciding overall project business viability and funding allocations",
            "C": "Signing legal contracts with external third-party software vendors",
            "D": "Representing the company in regulatory hearings"
        },
        "correctAnswer": "A",
        "explanation": "Task leaders operate directly below the WPL, coordinating individual technical tasks and ensuring assigned team members complete deliverables.",
        "whyOthersAreWrong": [
            "Business viability and funding belong to the Project Sponsor.",
            "Vendor contracting is managed by procurement and the Project Manager.",
            "Regulatory representation is conducted by legal and executive officers."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-009",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Team Member",
        "difficulty": "easy",
        "question": "In the project organizational structure, what is the role of a Team Member?",
        "options": {
            "A": "Executing specialized technical work and producing assigned task deliverables",
            "B": "Authorizing baseline changes to the overall project charter",
            "C": "Allocating corporate funding reserves across different departments",
            "D": "Conducting statutory external financial audits"
        },
        "correctAnswer": "A",
        "explanation": "Team members perform hands-on technical work—programming, database development, UI design, quality testing, and documentation.",
        "whyOthersAreWrong": [
            "Baseline charter changes require PMB and Project Sponsor authorization.",
            "Funding reserves allocation is an executive/sponsor function.",
            "External audits are carried out by independent accounting firms."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Roles", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Roles", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-010",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Management Board (PMB)",
        "difficulty": "medium",
        "question": "Which matters fall directly under the governance scope of the Project Management Board (PMB)?",
        "options": {
            "A": "Overall progress, resource allocations, major plan changes, cost deviations, and nontechnical disputes",
            "B": "Detailed compiler flag optimizations and SQL query syntax revisions",
            "C": "Designing user interface icon shapes and color palettes",
            "D": "Daily unit test defect triage meetings"
        },
        "correctAnswer": "A",
        "explanation": "The PMB oversees strategic direction, resource allocations, major scope/budget baselines, corrective actions, and resolves nontechnical disagreements.",
        "whyOthersAreWrong": [
            "Compiler flags and SQL queries are technical details handled by developers and TMB.",
            "UI icon design is handled by UX specialists.",
            "Daily defect triage is managed by QA and task leaders."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Governance Bodies", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Governance Bodies", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-011",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Technical Management Board (TMB)",
        "difficulty": "medium",
        "question": "What is the primary governance focus of the Technical Management Board (TMB)?",
        "options": {
            "A": "Resolving unresolved technical problems, technical conflicts, and auditing against technical milestones",
            "B": "Negotiating employee annual salary increases and vacation leave",
            "C": "Selecting corporate office furniture and real estate leases",
            "D": "Deciding company-wide dividend payouts to shareholders"
        },
        "correctAnswer": "A",
        "explanation": "The TMB focuses exclusively on technical governance: resolving technical disputes between teams, approving technical changes, and evaluating deliverables against milestone specifications.",
        "whyOthersAreWrong": [
            "Salary and leave are corporate HR matters.",
            "Office leases belong to corporate facilities management.",
            "Dividend payouts are determined by the corporate executive board."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Governance Bodies", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Governance Bodies", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-012",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "PMB vs TMB Distinction",
        "difficulty": "hard",
        "question": "How do the PMB and TMB crucially divide their governance authority?",
        "options": {
            "A": "PMB handles overall/nontechnical governance and strategic deviations; TMB handles technical governance and technical conflicts",
            "B": "PMB is only for agile projects; TMB is only for construction projects",
            "C": "PMB writes source code; TMB audits financial receipts",
            "D": "PMB manages external suppliers; TMB manages only client billing"
        },
        "correctAnswer": "A",
        "explanation": "PMB focuses on overall project management (cost, schedule, major plan deviations, nontechnical disagreements), while TMB focuses on technical realization, architecture, and engineering conflicts.",
        "whyOthersAreWrong": [
            "Both boards exist in large plan-driven IT project structures described in the course book.",
            "Neither board writes code or audits receipts; both are steering and governance bodies.",
            "Client billing and supplier contracts are handled through procurement and project management."
        ],
        "examTrap": "EXAM TRAP: PMB = overall / nontechnical governance. TMB = technical governance. Do not mix their purviews!",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Governance Bodies", "page": 22 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Governance Bodies", "sourcePage": 22
    },
    {
        "id": "itpm-u1-s2-mcq-013",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Resource Pooling Benefits",
        "difficulty": "medium",
        "question": "What is a primary organizational benefit of pooling specialized technical staff across multiple IT projects?",
        "options": {
            "A": "High utilization of scarce specialists and potentially lower overall resource cost",
            "B": "Elimination of all scheduling conflicts across departments",
            "C": "Immediate 100% dedication of each specialist to a single project",
            "D": "Total elimination of communication overhead between teams"
        },
        "correctAnswer": "A",
        "explanation": "Pooling allows specialized experts (e.g. database tuners, security auditors) to be shared across projects, maximizing their utilization without hiring full-time specialists for every project.",
        "whyOthersAreWrong": [
            "Sharing resources actually increases cross-project scheduling conflicts.",
            "Pooled specialists are shared across projects rather than 100% dedicated to one.",
            "Communication overhead increases because specialists must coordinate with multiple project teams."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Resource Pooling", "page": 23 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Resource Pooling", "sourcePage": 23
    },
    {
        "id": "itpm-u1-s2-mcq-014",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Resource Pooling Problems",
        "difficulty": "medium",
        "question": "What is the major operational downside when technical specialists are shared across several concurrent projects?",
        "options": {
            "A": "Severe efficiency loss and cognitive friction caused by frequent context switching",
            "B": "Specialists become overpaid by multiple project budgets simultaneously",
            "C": "The technology used by the projects will become incompatible",
            "D": "The organization's legal incorporation becomes invalid"
        },
        "correctAnswer": "A",
        "explanation": "Jumping between projects forces specialists to repeatedly switch contexts, resulting in lost productivity, divided loyalty, weaker team cohesion, and fatigue.",
        "whyOthersAreWrong": [
            "Specialists receive their standard corporate salary, not multiple duplicate salaries.",
            "Technical compatibility depends on architecture, not employee allocation models.",
            "Staff allocation has no bearing on corporate legal incorporation."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Resource Pooling", "page": 23 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Resource Pooling", "sourcePage": 23
    },
    {
        "id": "itpm-u1-s2-mcq-015",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Resource Pooling Exam Trap",
        "difficulty": "hard",
        "question": "Which statement accurately captures the trade-off highlighted in the course book regarding shared technical specialists?",
        "options": {
            "A": "Shared specialists can improve resource utilization but often reduce productivity and efficiency due to context switching",
            "B": "Shared specialists always produce higher quality software than dedicated team members",
            "C": "Resource pooling eliminates competition for resources among project managers",
            "D": "Context switching has been scientifically proven to have zero impact on software engineering efficiency"
        },
        "correctAnswer": "A",
        "explanation": "The course book explicitly stresses that while pooling maximizes specialist utilization on paper, actual individual efficiency drops due to the cognitive drag of repeated context switching.",
        "whyOthersAreWrong": [
            "Divided attention frequently causes subtle bugs, rather than guaranteeing higher quality.",
            "Resource pooling intensifies competition among project managers fighting for specialist hours.",
            "Context switching causes well-documented, substantial productivity penalties."
        ],
        "examTrap": "EXAM TRAP: High resource utilization does NOT equal high efficiency. Repeated context switching degrades individual productivity.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Resource Pooling", "page": 23 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Resource Pooling", "sourcePage": 23
    },
    {
        "id": "itpm-u1-s2-mcq-016",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Five Project Phases",
        "difficulty": "easy",
        "question": "What is the correct sequential order of the five generic project phases presented in Unit 1?",
        "options": {
            "A": "Conception/Initiation → Definition/Planning → Launch/Execution → Monitor/Control → Termination",
            "B": "Planning → Initiation → Termination → Execution → Monitor",
            "C": "Execution → Planning → Conception → Termination → Control",
            "D": "Initiation → Launch → Planning → Closure → Monitoring"
        },
        "correctAnswer": "A",
        "explanation": "The generic lifecycle moves from Conception/Initiation, to Definition/Planning, Launch/Execution, Monitor/Control, through to Termination (with Monitor/Control operating concurrently across execution).",
        "whyOthersAreWrong": [
            "Initiation must precede planning, and termination is always the final phase.",
            "Execution cannot occur before conception and planning.",
            "Planning precedes launch/execution."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Phases", "page": 24 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Phases", "sourcePage": 24
    },
    {
        "id": "itpm-u1-s2-mcq-017",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Initiation Phase",
        "difficulty": "medium",
        "question": "Which activities are primarily conducted during the Conception / Initiation phase?",
        "options": {
            "A": "Identifying customer need, assessing feasibility, identifying stakeholders, holding kick-off, and creating the project charter",
            "B": "Writing production source code and executing comprehensive integration load tests",
            "C": "Disbanding the project team and archiving all contract files",
            "D": "Conducting post-implementation warranty maintenance"
        },
        "correctAnswer": "A",
        "explanation": "Initiation focuses on establishing project justification, preliminary requirements, feasibility, appointing the sponsor and PM, and formalizing the project charter.",
        "whyOthersAreWrong": [
            "Writing production code belongs to the Launch/Execution phase.",
            "Disbanding the team and archiving records occurs during Termination.",
            "Warranty maintenance belongs to ongoing post-project operations."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Phases", "page": 24 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Phases", "sourcePage": 24
    },
    {
        "id": "itpm-u1-s2-mcq-018",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Charter",
        "difficulty": "medium",
        "question": "What mnemonic memory card summarizes the essential contents of a Project Charter in Unit 1?",
        "options": {
            "A": "WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO",
            "B": "CODE + TEST + BUILD + DEPLOY + MONITOR + REPEAT",
            "C": "PLAN + DO + CHECK + ACT + AUDIT + CLOSE",
            "D": "INPUT + PROCESS + OUTPUT + STORAGE + NETWORK"
        },
        "correctAnswer": "A",
        "explanation": "The revision memory formula captures charter contents: WHY (justification/objectives), WHAT (scope/deliverables), RISK, WHEN (milestones), MONEY (budget), APPROVAL (criteria), WHO (PM/Sponsor).",
        "whyOthersAreWrong": [
            "Code, test, build, deploy is a CI/CD technical pipeline.",
            "Plan, Do, Check, Act is the Deming quality cycle.",
            "Input, process, output is an information processing schema."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Charter", "page": 24 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Charter", "sourcePage": 24
    },
    {
        "id": "itpm-u1-s2-mcq-019",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Project Charter Authorization",
        "difficulty": "hard",
        "question": "What is the critical academic and legal effect of signing the Project Charter?",
        "options": {
            "A": "It officially authorizes the project to exist and grants the PM authority to commit organizational resources",
            "B": "It guarantees that the software will be delivered with zero defects",
            "C": "It locks the code repository so no future changes can ever be made",
            "D": "It marks the immediate technical completion and termination of the project"
        },
        "correctAnswer": "A",
        "explanation": "Signing the charter is the formal gateway that authorizes the project's existence and empowers the PM to utilize organizational personnel and funding.",
        "whyOthersAreWrong": [
            "Signing a charter initiates work; it cannot guarantee zero defects.",
            "A charter does not freeze code; technical development has not even started.",
            "Charter signing starts the project lifecycle, rather than terminating it."
        ],
        "examTrap": "EXAM TRAP: The project does not officially exist until the Project Charter is signed by the sponsor.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Charter", "page": 24 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Charter", "sourcePage": 24
    },
    {
        "id": "itpm-u1-s2-mcq-020",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Planning Phase",
        "difficulty": "easy",
        "question": "Which key baselines are established during the Definition / Planning phase of an IT project?",
        "options": {
            "A": "Scope baseline, schedule baseline, and cost baseline",
            "B": "Employee salary baseline, tax baseline, and stock price baseline",
            "C": "Hardware failure baseline, power outage baseline, and cooling baseline",
            "D": "Marketing billboard baseline and public relations baseline"
        },
        "correctAnswer": "A",
        "explanation": "The planning phase establishes the triple performance baselines: scope baseline (WBS), schedule baseline, and cost baseline against which project execution is monitored.",
        "whyOthersAreWrong": [
            "Salaries and corporate stock prices are corporate financial concerns, not project performance baselines.",
            "Power outages and cooling are data center facility parameters.",
            "Billboards and PR campaigns are corporate marketing activities."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Phases", "page": 25 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Phases", "sourcePage": 25
    },
    {
        "id": "itpm-u1-s2-mcq-021",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Monitoring and Controlling Phase",
        "difficulty": "hard",
        "question": "What is a distinctive timing characteristic of the 'Monitor and Control' phase in IT projects?",
        "options": {
            "A": "It runs in parallel with much of the project work rather than acting as an isolated end phase",
            "B": "It occurs exclusively after the project is formally closed and terminated",
            "C": "It is performed solely during the initial 24 hours of project conception",
            "D": "It replaces the execution phase completely in agile projects"
        },
        "correctAnswer": "A",
        "explanation": "Monitoring and controlling is not an isolated sequential stage that waits until execution finishes; it operates continuously alongside planning, execution, and closing.",
        "whyOthersAreWrong": [
            "Post-closure evaluation is a post-mortem review, whereas project monitoring must happen while work is active.",
            "Monitoring cannot be restricted to the first 24 hours.",
            "Monitoring accompanies execution; it does not replace the realization of deliverables."
        ],
        "examTrap": "EXAM TRAP: Do not view Monitor & Control as a brief, separate phase at the end of the project. It runs concurrently with execution.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Phases", "page": 25 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Project Phases", "sourcePage": 25
    },
    {
        "id": "itpm-u1-s2-mcq-022",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.2",
        "topic": "Plan-Driven vs Agile",
        "difficulty": "medium",
        "question": "How do plan-driven and agile methodologies fundamentally differ in their approach to early planning in Unit 1?",
        "options": {
            "A": "Plan-driven focuses on detailed whole-project plans upfront; agile starts with high-level planning and adds details iteratively",
            "B": "Plan-driven uses no written documentation; agile creates thousands of specification pages before coding",
            "C": "Plan-driven operates without schedules; agile enforces completely rigid five-year schedules",
            "D": "Plan-driven welcomes changes at any moment; agile strictly bans customer feedback"
        },
        "correctAnswer": "A",
        "explanation": "Plan-driven projects invest heavily in comprehensive upfront plans for the full lifecycle, while agile embraces iterative adaptation, detailing work close to sprint execution.",
        "whyOthersAreWrong": [
            "Plan-driven requires extensive documentation; agile values working software over comprehensive documentation.",
            "Plan-driven relies heavily on rigorous schedules; agile uses fixed-length short timeboxes.",
            "Agile welcomes evolving requirements; plan-driven manages change through formal, controlled change request gates."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Plan-Driven vs Agile", "page": 25 },
        "sourceUnit": 1, "sourceSection": "1.2", "sourceTopic": "Plan-Driven vs Agile", "sourcePage": 25
    },

    # ---------------- 1.3 RISKS AND CHALLENGES (18 MCQs) ----------------
    {
        "id": "itpm-u1-s3-mcq-001",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Project Risk Definition",
        "difficulty": "easy",
        "question": "How is a 'project risk' formally defined in the course material?",
        "options": {
            "A": "An uncertain event or condition that, if it occurs, has a positive or negative effect on project objectives",
            "B": "A guaranteed negative catastrophe that will definitely cause project cancellation",
            "C": "A mistake made by junior developers that must result in immediate termination",
            "D": "Any project expense that exceeds fifty euros"
        },
        "correctAnswer": "A",
        "explanation": "Risk is fundamentally an uncertainty. Crucially, it can exert either a negative impact (threat) or a positive impact (opportunity) on objectives.",
        "whyOthersAreWrong": [
            "A guaranteed event is an issue or constraint, not a probabilistic risk.",
            "Risks are uncertainties across the project, not personal employee disciplinary events.",
            "Normal budgeted expenses are not risks."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Managing Risks", "sourcePage": 26
    },
    {
        "id": "itpm-u1-s3-mcq-002",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Threat vs Opportunity",
        "difficulty": "easy",
        "question": "In project risk terminology, what are negative and positive risks termed respectively?",
        "options": {
            "A": "Threat (negative) and Opportunity (positive)",
            "B": "Defect (negative) and Feature (positive)",
            "C": "Penalty (negative) and Bonus (positive)",
            "D": "Liability (negative) and Equity (positive)"
        },
        "correctAnswer": "A",
        "explanation": "Academic project management categorizes negative risk as a Threat and positive risk as an Opportunity.",
        "whyOthersAreWrong": [
            "Defect and feature are software engineering product terms, not risk classifications.",
            "Penalty and bonus are contractual financial terms.",
            "Liability and equity are balance sheet accounting classifications."
        ],
        "examTrap": "EXAM TRAP: Risk does NOT mean only negative events. Positive risks are opportunities that should be maximized.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Managing Risks", "sourcePage": 26
    },
    {
        "id": "itpm-u1-s3-mcq-003",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Evaluation",
        "difficulty": "medium",
        "question": "Which two primary dimensions are used to evaluate project risks?",
        "options": {
            "A": "Probability of occurrence and Magnitude of potential damage or benefit",
            "B": "Programming language version and database storage size",
            "C": "Number of pages in the specification and font size of the charter",
            "D": "Distance between office locations and developer commuting times"
        },
        "correctAnswer": "A",
        "explanation": "Risk exposure is determined by evaluating both how likely an event is (probability) and its expected severity or advantage (impact/magnitude).",
        "whyOthersAreWrong": [
            "Programming languages and database size are technical implementation choices.",
            "Specification page count does not evaluate risk severity.",
            "Office geography is irrelevant to formal risk evaluation."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Managing Risks", "sourcePage": 26
    },
    {
        "id": "itpm-u1-s3-mcq-004",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Dynamic Nature of Risk",
        "difficulty": "medium",
        "question": "How does risk exposure typically behave over the lifecycle of an IT project as more information becomes known?",
        "options": {
            "A": "Risk changes dynamically over time as uncertainties are resolved or new threats emerge",
            "B": "Risk remains completely static and identical on every single day of the project",
            "C": "Risk increases to 100% on the final day of delivery without exception",
            "D": "Risk disappears entirely as soon as planning is signed off"
        },
        "correctAnswer": "A",
        "explanation": "Risk is dynamic. As design decisions are finalized and prototypes tested, certain uncertainties drop while new technical or integration risks can emerge.",
        "whyOthersAreWrong": [
            "Risk is never static; knowledge gain constantly alters probability and impact estimates.",
            "Risk does not arbitrarily leap to 100% at project end.",
            "Signing planning documents does not magically eliminate execution risks."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Managing Risks", "sourcePage": 26
    },
    {
        "id": "itpm-u1-s3-mcq-005",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Technological Risk Sources",
        "difficulty": "easy",
        "question": "Which of the following is classified as a Technological source of IT project risk?",
        "options": {
            "A": "Integration problems with legacy interfaces and inadequate system scalability",
            "B": "Disagreements over union employee holiday entitlements",
            "C": "Corporate currency devaluation in foreign branches",
            "D": "Changes in general statutory consumer sales tax rates"
        },
        "correctAnswer": "A",
        "explanation": "Technological risks stem from system interfaces, immature tech stacks, architectural bottlenecks, unproven software platforms, and scalability limits.",
        "whyOthersAreWrong": [
            "Union entitlements are organizational and HR matters.",
            "Currency devaluation is a macroeconomic financial risk.",
            "Tax rates are external legal/governmental factors."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Sources of IT Project Risk", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Sources of IT Project Risk", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-006",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Organizational Risk Sources",
        "difficulty": "easy",
        "question": "Which of the following represents an Organizational source of IT project risk?",
        "options": {
            "A": "Inadequate staffing, limited funding, and immature organizational project management practices",
            "B": "Memory leaks in third-party C++ libraries",
            "C": "Fiber-optic undersea cable severing during an earthquake",
            "D": "Operating system kernel panic during unit testing"
        },
        "correctAnswer": "A",
        "explanation": "Organizational risks arise from within the enterprise: resource constraints, weak executive sponsorship, immature processes, and departmental silos.",
        "whyOthersAreWrong": [
            "Memory leaks and kernel panics are technical software risks.",
            "Subsea cable severing is an external environmental/physical hazard."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Sources of IT Project Risk", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Sources of IT Project Risk", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-007",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Stakeholder Risk Sources",
        "difficulty": "medium",
        "question": "Which factor exemplifies a User / Stakeholder-related source of IT project risk?",
        "options": {
            "A": "Underestimating the number of active users and poor communication of business expectations",
            "B": "Configuring wrong subnet masks on backup network routers",
            "C": "Purchasing incorrect solid-state drive form factors",
            "D": "A compiler syntax error preventing source compilation"
        },
        "correctAnswer": "A",
        "explanation": "User and stakeholder risks involve misunderstanding end-user workload, poor requirements elicitation, user resistance to adoption, and communication gaps.",
        "whyOthersAreWrong": [
            "Subnet masks and drive form factors are technical hardware/network infrastructure issues.",
            "Compiler syntax errors are developer-level technical defects."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Sources of IT Project Risk", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Sources of IT Project Risk", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-008",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Appetite",
        "difficulty": "hard",
        "question": "What is 'Risk Appetite' in project risk management?",
        "options": {
            "A": "The degree of uncertainty an organization is willing to take on in anticipation of a reward",
            "B": "The total financial loss an organization has suffered in past bankruptcies",
            "C": "The legally mandated maximum fine imposed by government regulators",
            "D": "The percentage of software code that has not yet been unit tested"
        },
        "correctAnswer": "A",
        "explanation": "Risk appetite defines an organization's high-level strategic willingness to accept uncertainty and pursue innovative or challenging ventures for return.",
        "whyOthersAreWrong": [
            "Past losses measure historical damage, not forward-looking appetite.",
            "Regulatory fines are legal sanctions, not voluntary risk appetite.",
            "Untested code is technical debt / QA deficit."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Attitudes", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Attitudes", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-009",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Tolerance",
        "difficulty": "hard",
        "question": "How is 'Risk Tolerance' distinguished from general risk attitude in the course book?",
        "options": {
            "A": "The degree, amount, or volume of risk that an organization or individual will withstand",
            "B": "The complete refusal to engage in any business operations",
            "C": "The exact speed at which an IT system processes SQL transactions",
            "D": "The number of hours developers can work without taking a break"
        },
        "correctAnswer": "A",
        "explanation": "Risk tolerance specifies the measurable boundary or capacity of variance from objectives that an organization is able and willing to absorb.",
        "whyOthersAreWrong": [
            "Refusing all business is extreme risk aversion, not the definition of tolerance.",
            "SQL processing speed is a technical performance metric.",
            "Developer stamina is a human resource / labor regulation issue."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Attitudes", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Attitudes", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-010",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Threshold",
        "difficulty": "medium",
        "question": "What is the critical exam rule regarding a 'Risk Threshold'?",
        "options": {
            "A": "Risks below the threshold are acceptable; risks above the threshold are not tolerated and require active response",
            "B": "Risks above the threshold are ignored; risks below the threshold require immediate project shutdown",
            "C": "A threshold is only used to calculate employee annual bonuses",
            "D": "Thresholds apply exclusively to marketing budgets and never to technical risks"
        },
        "correctAnswer": "A",
        "explanation": "A risk threshold is a clear line of demarcation: risk exposures falling below it can be accepted/tolerated, while exposures exceeding it mandate active intervention.",
        "whyOthersAreWrong": [
            "Risks exceeding thresholds can never be ignored; they demand urgent treatment.",
            "Thresholds govern risk governance, not bonus formulas.",
            "Thresholds apply across all project dimensions (technical, schedule, cost)."
        ],
        "examTrap": "EXAM TRAP: Below threshold = acceptable / tolerable. Above threshold = NOT tolerated (action required).",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Attitudes", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Attitudes", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-011",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Attitudes",
        "difficulty": "easy",
        "question": "Which of the following identifies the three classic risk attitudes described in Unit 1?",
        "options": {
            "A": "Risk-averse, Risk-neutral, and Risk-taking",
            "B": "Optimistic, Pessimistic, and Fatalistic",
            "C": "Preventive, Detective, and Corrective",
            "D": "Functional, Operational, and Strategic"
        },
        "correctAnswer": "A",
        "explanation": "The course book explicitly categorizes individual and organizational risk postures into Risk-averse, Risk-neutral, and Risk-taking.",
        "whyOthersAreWrong": [
            "Optimistic and pessimistic are informal psychological adjectives.",
            "Preventive, detective, and corrective are internal control categories.",
            "Functional, operational, and strategic are organizational levels."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Attitudes", "page": 27 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Attitudes", "sourcePage": 27
    },
    {
        "id": "itpm-u1-s3-mcq-012",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Process (I-A-D-M)",
        "difficulty": "easy",
        "question": "What four-step process sequence is established in Unit 1 for managing project risks?",
        "options": {
            "A": "IDENTIFY → ANALYZE → DECIDE → MONITOR (I-A-D-M)",
            "B": "IGNORE → ASSESS → DELEGATE → MITIGATE",
            "C": "INITIATE → ACCUMULATE → DISTRIBUTE → MAINTAIN",
            "D": "INSPECT → ADAPT → DELIVER → MEASURE"
        },
        "correctAnswer": "A",
        "explanation": "The risk management cycle follows the four-step sequence: IDENTIFY risk, ANALYZE its likelihood/impact, DECIDE upon the response strategy, and continuously MONITOR progress.",
        "whyOthersAreWrong": [
            "Risk management never begins with 'ignore'.",
            "Accumulate and distribute are BSI protection distribution terms.",
            "Inspect and adapt is Scrum empirical process control."
        ],
        "examTrap": "EXAM TRAP: Remember the mnemonic I-A-D-M: Identify, Analyze, Decide, Monitor.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Management Process", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Management Process", "sourcePage": 28
    },
    {
        "id": "itpm-u1-s3-mcq-013",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Identification",
        "difficulty": "medium",
        "question": "What is the primary objective of the 'IDENTIFY' step in the I-A-D-M risk process?",
        "options": {
            "A": "Detecting and recording potential events and uncertainties that could impact project objectives",
            "B": "Purchasing commercial insurance policies before knowing what systems are being built",
            "C": "Punishing developers who report potential technical vulnerabilities",
            "D": "Calculating the mathematical standard deviation of programmer typing speeds"
        },
        "correctAnswer": "A",
        "explanation": "Identification surfaces, discovers, and catalogs potential risk events (threats and opportunities) across technical, organizational, and external categories.",
        "whyOthersAreWrong": [
            "Insurance is purchased during the Decide/Respond step, not before risks are understood.",
            "Reporting vulnerabilities is encouraged to maintain safety and visibility.",
            "Typing speed deviation is not an identification method."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Management Process", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Management Process", "sourcePage": 28
    },
    {
        "id": "itpm-u1-s3-mcq-014",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Analysis",
        "difficulty": "medium",
        "question": "During the 'ANALYZE' step in the risk management process, what is evaluated?",
        "options": {
            "A": "The probability of occurrence and the potential severity of damage or benefit",
            "B": "The graphic design aesthetics of the project team's presentation slides",
            "C": "The personal dietary preferences of executive stakeholders",
            "D": "The brand of coffee machine installed in the developer kitchen"
        },
        "correctAnswer": "A",
        "explanation": "Analysis evaluates how likely the identified risk is to happen and what quantitative or qualitative consequence it would inflict on scope, schedule, cost, or quality.",
        "whyOthersAreWrong": [
            "Slide aesthetics have no bearing on risk analysis.",
            "Dietary preferences and kitchen appliances are irrelevant to project risk analysis."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Management Process", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Management Process", "sourcePage": 28
    },
    {
        "id": "itpm-u1-s3-mcq-015",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Responses (M-A-T-A)",
        "difficulty": "easy",
        "question": "Which four fundamental risk response strategies are detailed in Unit 1?",
        "options": {
            "A": "MITIGATE, ACCEPT, TRANSFER, and AVOID (M-A-T-A)",
            "B": "MAXIMIZE, AMORTIZE, TERMINATE, and ABANDON",
            "C": "MONITOR, AUDIT, TRACK, and ARCHIVE",
            "D": "MEASURE, ANALYZE, TARGET, and ALLOCATE"
        },
        "correctAnswer": "A",
        "explanation": "The four core risk responses are: Mitigate, Accept, Transfer, and Avoid. Remember the mnemonic M-A-T-A.",
        "whyOthersAreWrong": [
            "Amortize is a depreciation accounting term, not a primary risk response.",
            "Monitor, audit, track are monitoring governance actions, not the 4 response strategies.",
            "Measure, analyze, target, allocate is an operational metrics workflow."
        ],
        "examTrap": "EXAM TRAP: Learn the M-A-T-A responses: Mitigate, Accept, Transfer, Avoid.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Responses", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Responses", "sourcePage": 28
    },
    {
        "id": "itpm-u1-s3-mcq-016",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Mitigation",
        "difficulty": "medium",
        "question": "How is the 'MITIGATE' risk response formally defined?",
        "options": {
            "A": "Taking active measures to reduce the probability of occurrence and/or potential damage",
            "B": "Shifting all financial liability to an external insurance carrier",
            "C": "Deciding not to perform the activity at all because risk is too severe",
            "D": "Acknowledging the risk and taking no active reducing measures"
        },
        "correctAnswer": "A",
        "explanation": "Mitigation implements safeguards, automated testing, redundancy, or training to lower the likelihood of failure or minimize the damage if an event occurs.",
        "whyOthersAreWrong": [
            "Shifting liability to a third party is Transfer.",
            "Canceling or not performing the activity is Avoidance.",
            "Taking no active reducing measures is Acceptance."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Responses", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Responses", "sourcePage": 28
    },
    {
        "id": "itpm-u1-s3-mcq-017",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Transfer",
        "difficulty": "medium",
        "question": "Purchasing commercial insurance or negotiating a fixed-price SLA with a cloud hosting vendor is an example of which risk response?",
        "options": {
            "A": "Risk Transfer",
            "B": "Risk Avoidance",
            "C": "Risk Acceptance",
            "D": "Risk Elimination"
        },
        "correctAnswer": "A",
        "explanation": "Transfer shifts the financial or operational consequence of a risk to an external third party such as an insurance carrier or contractual provider.",
        "whyOthersAreWrong": [
            "Avoidance means not undertaking the activity at all.",
            "Acceptance means bearing the consequences internally.",
            "Elimination is not one of the standard M-A-T-A strategies."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Responses", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Responses", "sourcePage": 28
    },
    {
        "id": "itpm-u1-s3-mcq-018",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.3",
        "topic": "Risk Avoidance vs Acceptance",
        "difficulty": "hard",
        "question": "When an IT project team decides to cancel an unproven high-risk third-party AI module because the downside catastrophic risk outweighs its benefits, which response is being applied?",
        "options": {
            "A": "Risk Avoidance",
            "B": "Risk Acceptance",
            "C": "Risk Transfer",
            "D": "Risk Mitigation"
        },
        "correctAnswer": "A",
        "explanation": "Avoidance eliminates the risk exposure entirely by deliberately modifying the project plan to not perform the hazardous activity or feature.",
        "whyOthersAreWrong": [
            "Acceptance would proceed with the module while tolerating the risk.",
            "Transfer would purchase insurance or hire a contractor to take the financial fall.",
            "Mitigation would attempt to test or constrain the module while still deploying it."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Responses", "page": 28 },
        "sourceUnit": 1, "sourceSection": "1.3", "sourceTopic": "Risk Responses", "sourcePage": 28
    },

    # ---------------- 1.4 ROLE OF AN IT PROJECT MANAGER (12 MCQs) ----------------
    {
        "id": "itpm-u1-s4-mcq-001",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Soft PM Skills",
        "difficulty": "easy",
        "question": "Which skill set represents the 'Soft / Qualitative' competencies required of an IT project manager?",
        "options": {
            "A": "Trustworthiness, leadership, negotiation, communication, and team building",
            "B": "Writing regular expressions and binary assembly code",
            "C": "Calculating critical path float and schedule performance indices only",
            "D": "Configuring network firewalls and database indexing parameters"
        },
        "correctAnswer": "A",
        "explanation": "Soft/qualitative skills encompass human interactions: leadership, negotiation, interpersonal communication, trust, conflict resolution, and motivation.",
        "whyOthersAreWrong": [
            "Binary assembly is a deep low-level programming task.",
            "Float and SPI calculations belong to hard quantitative project management methods.",
            "Firewalls and database tuning are technical infrastructure specializations."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Skills", "page": 29 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Skills", "sourcePage": 29
    },
    {
        "id": "itpm-u1-s4-mcq-002",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Hard PM Skills",
        "difficulty": "easy",
        "question": "Which of the following belongs to the 'Hard / Quantitative' project management skills described in Unit 1?",
        "options": {
            "A": "Determining measurable deliverables, constructing schedules, and applying quantitative variance methods",
            "B": "Providing emotional empathy during team psychological counseling sessions",
            "C": "Designing corporate graphic logos and visual branding merchandise",
            "D": "Hosting social company anniversary celebrations"
        },
        "correctAnswer": "A",
        "explanation": "Hard skills encompass structured, mathematical, and formal techniques: schedule planning, budget estimation, deliverable tracking, risk calculation, and quantitative reporting.",
        "whyOthersAreWrong": [
            "Empathy and counseling relate to interpersonal emotional intelligence.",
            "Graphic logo design belongs to marketing and design departments.",
            "Hosting social events is an informal team-building activity."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Skills", "page": 29 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Skills", "sourcePage": 29
    },
    {
        "id": "itpm-u1-s4-mcq-003",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Technical Specialization vs Problem Understanding",
        "difficulty": "hard",
        "question": "What core insight does the course book emphasize regarding technical specialization for IT project managers?",
        "options": {
            "A": "Understanding domain problems and continuously learning is more critical than being the best programmer or system administrator",
            "B": "The project manager must always be the fastest and most prolific coder on the team",
            "C": "A project manager must possess zero technical understanding to remain objective",
            "D": "Technical knowledge is strictly banned from project management certification"
        },
        "correctAnswer": "A",
        "explanation": "While technical background is helpful, a PM does not need to be the best coder; being able to analyze domain problems, coordinate people, and continuously learn is far more important.",
        "whyOthersAreWrong": [
            "Project managers who attempt to be the primary coder neglect vital management, communication, and risk duties.",
            "Zero technical knowledge hinders communication with developers and architects.",
            "Technical understanding is valued and integrated into project management competencies."
        ],
        "examTrap": "EXAM TRAP: Technical specialization alone does NOT make an effective PM. Problem analysis, leadership, and continuous learning are primary.",
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Competencies", "page": 29 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Competencies", "sourcePage": 29
    },
    {
        "id": "itpm-u1-s4-mcq-004",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Role of Technical Knowledge",
        "difficulty": "medium",
        "question": "In what specific way does technical understanding legitimately aid an IT project manager?",
        "options": {
            "A": "It helps the PM ask incisive questions, understand technical dependencies, and evaluate team estimates realistically",
            "B": "It enables the PM to override all software architect decisions without consultation",
            "C": "It allows the PM to personally write all code and dispense with development staff",
            "D": "It guarantees that the project will finish at exactly zero financial cost"
        },
        "correctAnswer": "A",
        "explanation": "Technical literacy enables the PM to communicate effectively with specialists, assess architectural trade-offs, and gauge the validity of effort estimates.",
        "whyOthersAreWrong": [
            "The PM collaborates with technical leaders rather than autocratically overriding architects.",
            "A PM cannot replace the engineering team.",
            "No technical knowledge eliminates project costs."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Competencies", "page": 29 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Competencies", "sourcePage": 29
    },
    {
        "id": "itpm-u1-s4-mcq-005",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Continuous Learning",
        "difficulty": "easy",
        "question": "Why is 'willingness to continuously learn' highlighted as a vital personality trait for an IT project manager?",
        "options": {
            "A": "Technology, tools, and project environments change rapidly throughout the IT industry",
            "B": "University degrees become legally void after twelve months without re-examination",
            "C": "Project managers are required by law to take high school mathematics tests annually",
            "D": "Clients refuse to work with project managers who hold certifications older than 30 days"
        },
        "correctAnswer": "A",
        "explanation": "The rapid pace of technological innovation, emerging frameworks, and evolving business models demands that PMs adapt and learn continuously.",
        "whyOthersAreWrong": [
            "Academic degrees do not expire after twelve months.",
            "There is no statutory high school re-testing law.",
            "Certifications remain valid for years according to certifying body guidelines."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Competencies", "page": 30 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Competencies", "sourcePage": 30
    },
    {
        "id": "itpm-u1-s4-mcq-006",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Lifecycle Skill Shift",
        "difficulty": "medium",
        "question": "During the early phases of an IT project (Initiation and Planning), which project management skill is particularly critical?",
        "options": {
            "A": "Human-resource acquisition and stakeholder alignment",
            "B": "Archiving expired contractual records in offsite vaults",
            "C": "Disbanding task teams and performing project post-mortems",
            "D": "Processing final vendor severance bonuses"
        },
        "correctAnswer": "A",
        "explanation": "Early on, the PM must assemble the team, secure scarce talent, negotiate staffing agreements, and align diverse stakeholders behind common objectives.",
        "whyOthersAreWrong": [
            "Archiving and team disbanding occur at project termination.",
            "Post-mortems occur at closure.",
            "Final severance bonuses belong to post-project closure or HR operations."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Lifecycle Skills", "page": 30 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "Lifecycle Skills", "sourcePage": 30
    },
    {
        "id": "itpm-u1-s4-mcq-007",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Lifecycle Skill Shift",
        "difficulty": "medium",
        "question": "As the project transitions into Launch / Execution and Monitoring, which skill set becomes increasingly prominent?",
        "options": {
            "A": "Active team management, performance coaching, and variance control",
            "B": "Drafting initial business justification memos for the charter",
            "C": "Conducting feasibility interviews before the project is funded",
            "D": "Writing statutory corporate articles of incorporation"
        },
        "correctAnswer": "A",
        "explanation": "During execution and monitoring, the PM must lead daily operations, coach developers, track milestones, resolve roadblocks, and manage variances against baselines.",
        "whyOthersAreWrong": [
            "Drafting business cases occurs during early initiation.",
            "Feasibility interviews occur prior to charter approval.",
            "Articles of incorporation belong to company founding."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Lifecycle Skills", "page": 30 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "Lifecycle Skills", "sourcePage": 30
    },
    {
        "id": "itpm-u1-s4-mcq-008",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Lifecycle Skill Shift",
        "difficulty": "hard",
        "question": "Which capability is highlighted as being potentially required across ALL phases of the project lifecycle without exception?",
        "options": {
            "A": "Conflict management and negotiation capability",
            "B": "Hardware decommissioning protocols",
            "C": "Final project sign-off ceremonies",
            "D": "Charter drafting techniques"
        },
        "correctAnswer": "A",
        "explanation": "Conflict can erupt at any time—during charter negotiations, requirement prioritization, resource contention in execution, or final acceptance disagreements.",
        "whyOthersAreWrong": [
            "Decommissioning only occurs at project termination or asset retirement.",
            "Sign-off ceremonies occur at milestone or project completion.",
            "Charter drafting is restricted to early initiation."
        ],
        "examTrap": "EXAM TRAP: HR acquisition is vital early; team management is vital during execution; CONFLICT MANAGEMENT is required throughout all phases.",
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Lifecycle Skills", "page": 30 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "Lifecycle Skills", "sourcePage": 30
    },
    {
        "id": "itpm-u1-s4-mcq-009",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Project Triggers",
        "difficulty": "medium",
        "question": "In the context of IT project monitoring, what are 'Project Triggers'?",
        "options": {
            "A": "Early warning indicators, symptoms, or threshold events that signal a risk is emerging or requires immediate action",
            "B": "Automated physical hardware sensors that detect office building earthquakes",
            "C": "SQL database scripts that automatically wipe test records upon completion",
            "D": "Electronic keycards used to open physical server room security doors"
        },
        "correctAnswer": "A",
        "explanation": "Triggers are early symptoms or warning signs (e.g. repeated missed small milestones, developer turnover, defect spikes) that indicate an identified risk is becoming reality.",
        "whyOthersAreWrong": [
            "Seismic sensors are physical facility equipment.",
            "Database cleanup scripts are technical database maintenance tools.",
            "Keycards are physical security access mechanisms."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Project Triggers", "page": 31 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "Project Triggers", "sourcePage": 31
    },
    {
        "id": "itpm-u1-s4-mcq-010",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "PM as Communication Hub",
        "difficulty": "easy",
        "question": "Why is the IT Project Manager often characterized as the central 'communication hub' of a project?",
        "options": {
            "A": "The PM links and translates information between technical teams, executive sponsors, end users, and vendors",
            "B": "The PM personally answers every customer support phone call across the entire corporation",
            "C": "The PM operates the physical telephone switchboard in the office lobby",
            "D": "The PM is legally forbidden from allowing developers to talk to each other"
        },
        "correctAnswer": "A",
        "explanation": "The PM bridges the communication divide between technical jargon, business strategy, user requirements, and executive expectations.",
        "whyOthersAreWrong": [
            "Customer support phone queues are handled by service desk staff.",
            "Telephone switchboard operation is a facilities/reception role.",
            "Developers must collaborate continuously; healthy communication is fostered, not blocked."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Communication Hub", "page": 31 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "Communication Hub", "sourcePage": 31
    },
    {
        "id": "itpm-u1-s4-mcq-011",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Strategic Management Skill",
        "difficulty": "hard",
        "question": "What does 'Strategic Management' capability enable an IT project manager to do?",
        "options": {
            "A": "Ensure that project objectives directly support broader corporate business goals and organizational competitive advantage",
            "B": "Write complex recursive algorithmic sort routines in low-level C code",
            "C": "Configure high-availability Kubernetes cluster failover protocols",
            "D": "Conduct manual visual inspection of individual silicon microchips"
        },
        "correctAnswer": "A",
        "explanation": "Strategic management aligns project deliverables with executive vision, ensuring the project creates sustainable commercial value and advances enterprise strategy.",
        "whyOthersAreWrong": [
            "Recursive algorithms and Kubernetes failovers are specialized engineering tasks.",
            "Silicon microchip inspection belongs to semiconductor fabrication testing."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Competencies", "page": 31 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Competencies", "sourcePage": 31
    },
    {
        "id": "itpm-u1-s4-mcq-012",
        "subjectId": "it-project-management",
        "unit": 1,
        "unitId": 1,
        "section": "1.4",
        "topic": "Problem-Solving Orientation",
        "difficulty": "medium",
        "question": "How should an IT Project Manager approach problem-solving when severe project deviations occur?",
        "options": {
            "A": "Through systematic root-cause analysis, stakeholder consultation, and disciplined corrective action plans",
            "B": "By immediately blaming junior team members and falsifying progress reports to sponsors",
            "C": "By ignoring deviations and hoping that the system will automatically fix itself",
            "D": "By deleting all project documentation so auditors cannot find any variance"
        },
        "correctAnswer": "A",
        "explanation": "Professional project management solves problems by analyzing underlying causes, evaluating trade-offs with stakeholders, and implementing formal corrective measures.",
        "whyOthersAreWrong": [
            "Blaming staff and falsifying data breaches professional ethics and worsens failure.",
            "Ignoring deviations leads to compounding project crises.",
            "Deleting documentation is fraudulent and catastrophic for project governance."
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Competencies", "page": 32 },
        "sourceUnit": 1, "sourceSection": "1.4", "sourceTopic": "PM Competencies", "sourcePage": 32
    }
]

print(f"Total Unit 1 MCQs generated: {len(mcqs)}")

# Write mcqs.ts
with open(f"{u1_dir}/mcqs.ts", "w") as f:
    f.write('import { MCQ } from "../../../../types";\n\n')
    f.write('export const unit1Mcqs: MCQ[] = ' + json.dumps(mcqs, indent=2) + ';\n')

print("Wrote unit-1/mcqs.ts")

# -------------------------------------------------------------
# UNIT 1 FLASHCARDS (30 Flashcards)
# -------------------------------------------------------------
flashcards = [
    {
        "id": "itpm-u1-fc-001",
        "unit": 1,
        "category": "Project Foundations",
        "front": "What is the official definition of a Project?",
        "back": "A temporary endeavor undertaken to create a unique product, service, or result (with a defined start and finish).",
        "examTip": "Temporary refers to the endeavor and timeframe, NEVER to the lifespan of the resulting deliverable.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 }
    },
    {
        "id": "itpm-u1-fc-002",
        "unit": 1,
        "category": "Project Foundations",
        "front": "How do Projects differ from routine Operations?",
        "back": "Projects are temporary and produce unique deliverables. Operations are ongoing, permanent, and produce repeated, routine deliverables.",
        "examTip": "Two critical words: Temporary and Unique vs Ongoing and Repeated.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 }
    },
    {
        "id": "itpm-u1-fc-003",
        "unit": 1,
        "category": "Core Concept",
        "front": "What is the core definition of IT Project Management?",
        "back": "Developing plans, organizing work, monitoring execution against plans, and maintaining accountability for achieving project goals.",
        "examTip": "Focus on the four pillars: Plans, Organize, Monitor, Accountability.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 }
    },
    {
        "id": "itpm-u1-fc-004",
        "unit": 1,
        "category": "System Complexity",
        "front": "What is a Sociotechnical System?",
        "back": "A system combining hardware, software, and human/social interaction. The course book uses the tablet computer as an example.",
        "examTip": "An IT system is never pure technology; people, organizational workflows, and social habits are integral parts.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Sociotechnical Systems", "page": 18 }
    },
    {
        "id": "itpm-u1-fc-005",
        "unit": 1,
        "category": "Information Needs",
        "front": "What are the three organizational information levels?",
        "back": "1. Operational level (routine transactions, daily data)\n2. Management knowledge level (meaningful patterns, tactical insights)\n3. Executive level (strategic summaries, long-term direction)",
        "examTip": "Operational = routine transactions; Management = tactical knowledge; Executive = strategic direction.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Information Needs", "page": 17 }
    },
    {
        "id": "itpm-u1-fc-006",
        "unit": 1,
        "category": "Constraints",
        "front": "What are the three constraints of the classic Iron Triangle?",
        "back": "Scope, Schedule (time), and Cost (budget/resources).",
        "examTip": "Altering any one constraint directly pressures the other two.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Iron Triangle", "page": 19 }
    },
    {
        "id": "itpm-u1-fc-007",
        "unit": 1,
        "category": "Constraints",
        "front": "What are the Five Quintuple Project Constraints in the course book?",
        "back": "1. Schedule\n2. Cost\n3. Context\n4. Technical\n5. Financing",
        "examTip": "MEMORIZE EXACTLY: Schedule, Cost, Context, Technical, Financing. Do not substitute generic PMBOK terms!",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 }
    },
    {
        "id": "itpm-u1-fc-008",
        "unit": 1,
        "category": "Constraints",
        "front": "In the Quintuple model, what does the Context constraint cover?",
        "back": "The operational environment: local/global concerns, cultural factors, organizational politics, customization, and legal/regulatory compliance.",
        "examTip": "Context = Environment, culture, customization, and legal/regulatory boundaries.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 }
    },
    {
        "id": "itpm-u1-fc-009",
        "unit": 1,
        "category": "Constraints",
        "front": "How does the Technical constraint relate to the Iron Triangle?",
        "back": "The Technical constraint in the quintuple model corresponds directly to the Scope constraint in the Iron Triangle.",
        "examTip": "Course book explicitly states: Technical constraints correspond to scope constraints.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 }
    },
    {
        "id": "itpm-u1-fc-010",
        "unit": 1,
        "category": "Roles & Hierarchy",
        "front": "What is the hierarchy of roles in a large plan-driven IT project?",
        "back": "Project Sponsor / PMO → Project Manager → Technical Coordinator → Work-Package Leaders → Task Leaders → Team Members.",
        "examTip": "PMB advises adjacent to PM; TMB advises adjacent to Technical Coordinator.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Hierarchy", "page": 21 }
    },
    {
        "id": "itpm-u1-fc-011",
        "unit": 1,
        "category": "Roles & Hierarchy",
        "front": "What are the core responsibilities of the Project Sponsor?",
        "back": "Owns the business case, champions the project at executive level, secures funding, and ensures project needs are addressed.",
        "examTip": "The Sponsor provides the business case and funding championing, not technical coding.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Sponsor", "page": 21 }
    },
    {
        "id": "itpm-u1-fc-012",
        "unit": 1,
        "category": "Roles & Hierarchy",
        "front": "What is the role of a Project Management Office (PMO)?",
        "back": "Provides major organizational project support, standardized procedures, governance templates, and cross-project resource coordination.",
        "examTip": "The PMO supports projects with standard templates and resource governance.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "PMO", "page": 21 }
    },
    {
        "id": "itpm-u1-fc-013",
        "unit": 1,
        "category": "Roles & Hierarchy",
        "front": "What does a Technical Coordinator do?",
        "back": "Supports the PM technically, monitors development specifications, oversees Work-Package Leaders, and maintains the technical project library.",
        "examTip": "Technical Coordinator = Technical lead supporting the PM + maintains technical library.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Technical Coordinator", "page": 22 }
    },
    {
        "id": "itpm-u1-fc-014",
        "unit": 1,
        "category": "Governance",
        "front": "What is the primary focus of the Project Management Board (PMB)?",
        "back": "Overall progress/direction, risk, resource allocations, major budget/plan deviations, corrective actions, and nontechnical disputes.",
        "examTip": "PMB = overall / nontechnical steering and corrective action.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "PMB", "page": 22 }
    },
    {
        "id": "itpm-u1-fc-015",
        "unit": 1,
        "category": "Governance",
        "front": "What is the primary focus of the Technical Management Board (TMB)?",
        "back": "Technical decisions, unresolved technical problems, technical conflicts, technical/contractual coordination, and audits against milestones.",
        "examTip": "TMB = technical governance, technical conflict resolution, and milestone audits.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "TMB", "page": 22 }
    },
    {
        "id": "itpm-u1-fc-016",
        "unit": 1,
        "category": "Resource Management",
        "front": "What is the key trade-off of Resource Pooling across IT projects?",
        "back": "Benefit: Higher specialist utilization and potentially lower resource costs.\nProblem: Frequent context switching, efficiency loss, divided loyalty, and burnout.",
        "examTip": "EXAM TRAP: Utilization increases, but individual efficiency decreases due to context switching.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Resource Pooling", "page": 23 }
    },
    {
        "id": "itpm-u1-fc-017",
        "unit": 1,
        "category": "Project Phases",
        "front": "What are the Five Generic Project Phases in order?",
        "back": "1. Conception / Initiation\n2. Definition / Planning\n3. Launch / Execution\n4. Monitor / Control\n5. Termination",
        "examTip": "Monitor/Control runs concurrently with much of project work, not as a brief end phase.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Phases", "page": 24 }
    },
    {
        "id": "itpm-u1-fc-018",
        "unit": 1,
        "category": "Project Charter",
        "front": "What is the memory formula for the Project Charter?",
        "back": "WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO",
        "examTip": "WHY=justification, WHAT=scope, RISK=key risks, WHEN=milestones, MONEY=budget, APPROVAL=criteria, WHO=PM/Sponsor.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Charter", "page": 24 }
    },
    {
        "id": "itpm-u1-fc-019",
        "unit": 1,
        "category": "Project Charter",
        "front": "What is the critical effect of signing the Project Charter?",
        "back": "It formally acknowledges and authorizes the project's existence and empowers the Project Manager to commit organizational resources.",
        "examTip": "CRITICAL EXAM FACT: Signing the charter = official authorization of the project.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Charter", "page": 24 }
    },
    {
        "id": "itpm-u1-fc-020",
        "unit": 1,
        "category": "Methodologies",
        "front": "Compare Plan-Driven and Agile approaches in Unit 1.",
        "back": "Plan-driven: Detailed whole-project plans upfront, predictive activity phases, formal change control.\nAgile: High-level initial roadmap, iterative sprints, embrace change close to execution.",
        "examTip": "Plan-driven emphasizes upfront baseline predictability; Agile emphasizes rapid iterative adaptation.",
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Plan-Driven vs Agile", "page": 25 }
    },
    {
        "id": "itpm-u1-fc-021",
        "unit": 1,
        "category": "Risk Management",
        "front": "What is the formal definition of Project Risk?",
        "back": "An uncertain event or condition that, if it occurs, has a positive (opportunity) or negative (threat) effect on project objectives.",
        "examTip": "Risk contains two sides: negative = Threat, positive = Opportunity.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 }
    },
    {
        "id": "itpm-u1-fc-022",
        "unit": 1,
        "category": "Risk Management",
        "front": "What two dimensions determine Risk Exposure?",
        "back": "Probability of occurrence × Magnitude of potential damage or benefit (Impact).",
        "examTip": "Risk = Probability × Impact. It changes over time as knowledge increases.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 }
    },
    {
        "id": "itpm-u1-fc-023",
        "unit": 1,
        "category": "Risk Governance",
        "front": "Distinguish Risk Appetite, Tolerance, and Threshold.",
        "back": "Appetite: High-level willingness to take on uncertainty for reward.\nTolerance: Measurable amount/volume of risk an entity will withstand.\nThreshold: Boundary line (below = acceptable, above = not tolerated).",
        "examTip": "Threshold is the decision line: below is tolerated, above mandates active intervention.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Attitudes", "page": 27 }
    },
    {
        "id": "itpm-u1-fc-024",
        "unit": 1,
        "category": "Risk Process",
        "front": "What is the 4-step Risk Process mnemonic (I-A-D-M)?",
        "back": "IDENTIFY → ANALYZE → DECIDE → MONITOR\n(Identify potential risks, analyze probability/impact, decide on treatment strategy, monitor continuously).",
        "examTip": "Remember: I-A-D-M.",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Process", "page": 28 }
    },
    {
        "id": "itpm-u1-fc-025",
        "unit": 1,
        "category": "Risk Responses",
        "front": "What is the 4 Risk Responses mnemonic (M-A-T-A)?",
        "back": "MITIGATE (reduce probability/damage)\nACCEPT (tolerate low risk and monitor)\nTRANSFER (shift liability to third party / insurance)\nAVOID (cancel or do not perform hazardous activity)",
        "examTip": "Remember: M-A-T-A (Mitigate, Accept, Transfer, Avoid).",
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Responses", "page": 28 }
    },
    {
        "id": "itpm-u1-fc-026",
        "unit": 1,
        "category": "Project Manager",
        "front": "What are Soft vs Hard PM skills in Unit 1?",
        "back": "Soft/qualitative: Trustworthiness, leadership, strategic management, communication, negotiation, team building.\nHard/quantitative: Defining deliverables, scheduling, variance calculation, quantitative control methods.",
        "examTip": "Soft = interpersonal and leadership; Hard = mathematical, scheduling, and variance methods.",
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Skills", "page": 29 }
    },
    {
        "id": "itpm-u1-fc-027",
        "unit": 1,
        "category": "Project Manager",
        "front": "How important is technical specialization for an IT PM?",
        "back": "Technical understanding is helpful for asking questions, but understanding domain problems, leadership, and continuous learning is FAR more important than being the best programmer.",
        "examTip": "A PM does not need to be the lead developer; domain problem analysis and coordination are primary.",
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Competencies", "page": 29 }
    },
    {
        "id": "itpm-u1-fc-028",
        "unit": 1,
        "category": "Project Manager",
        "front": "How do PM skill requirements shift across the project lifecycle?",
        "back": "Early (Initiation/Planning): HR acquisition & stakeholder alignment.\nMiddle (Execution/Monitoring): Team management & variance control.\nThroughout: Conflict management and negotiation are required continuously.",
        "examTip": "HR acquisition early; team management in execution; conflict management across ALL phases.",
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Lifecycle Skills", "page": 30 }
    },
    {
        "id": "itpm-u1-fc-029",
        "unit": 1,
        "category": "Project Monitoring",
        "front": "What are Project Triggers?",
        "back": "Early warning indicators, symptoms, or milestone variances that signal a potential risk is emerging or about to occur.",
        "examTip": "Triggers are early symptoms prompting immediate risk contingency action.",
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Project Triggers", "page": 31 }
    },
    {
        "id": "itpm-u1-fc-030",
        "unit": 1,
        "category": "Project Success",
        "front": "Why is simple on-time completion insufficient for IT project success?",
        "back": "A project is only truly successful if it balances objectives and constraints while delivering intended business value and meeting stakeholder acceptance.",
        "examTip": "On-time delivery of a system that nobody uses or that provides no value is a project failure.",
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Project Success", "page": 18 }
    }
]

print(f"Total Unit 1 Flashcards generated: {len(flashcards)}")

with open(f"{u1_dir}/flashcards.ts", "w") as f:
    f.write('import { Flashcard } from "../../../../types";\n\n')
    f.write('export const unit1Flashcards: Flashcard[] = ' + json.dumps(flashcards, indent=2) + ';\n')

print("Wrote unit-1/flashcards.ts")

# -------------------------------------------------------------
# UNIT 1 IMPORTANT Q&A (20 Items from Revision Pack)
# -------------------------------------------------------------
qa_items = [
    {
        "id": "itpm-u1-qa-001",
        "unit": 1,
        "question": "Define a project and distinguish it from routine business operations.",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Examiner expects the formal definition with temporary endeavor and unique deliverable, contrasted with ongoing, repeated operations.",
        "modelAnswer": "A project is defined as a temporary endeavor undertaken to create a unique product, service, or result. It has a specific beginning and a defined end point.\n\nIn contrast, business operations are permanent or ongoing endeavors consisting of repetitive activities designed to sustain day-to-day organizational functions (e.g. daily transaction processing, IT helpdesk operations).\n\nKey Differences:\n1. Duration: Projects are temporary with finite lifecycles; operations are ongoing and indefinite.\n2. Output: Projects deliver unique, customized outcomes; operations deliver standardized, recurring goods or services.\n3. Purpose: Projects drive strategic change or innovation; operations maintain business continuity.\n4. Risk & Uncertainty: Projects carry higher uncertainty due to novelty; operations operate with established, predictable processes.",
        "answerStructure": [
            "Formal definition of project (temporary + unique)",
            "Definition of operations (ongoing + repetitive)",
            "Four distinct points of contrast (duration, output, purpose, uncertainty)"
        ],
        "keywords": ["Temporary endeavor", "Unique deliverable", "Defined beginning and end", "Operations", "Ongoing and repetitive", "Strategic change"],
        "commonMistakes": "Confusing the temporary duration of the project work with the lifespan of the deliverable (which is usually long-lasting).",
        "selfCheckChecklist": [
            "Did I mention temporary and unique?",
            "Did I define operations as ongoing and repetitive?",
            "Did I clearly state that deliverables are intended to be durable?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 }
    },
    {
        "id": "itpm-u1-qa-002",
        "unit": 1,
        "question": "What is IT project management and what are its four core management activities?",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Clear definition highlighting plan development, work organization, monitoring against plans, and accountability.",
        "modelAnswer": "IT project management is the disciplined application of knowledge, skills, tools, and techniques to project activities to meet project requirements and achieve specific business objectives.\n\nIts four core management activities comprise:\n1. Developing Plans: Formulating scope, schedule, budget, risk, and technical baselines.\n2. Organizing Work: Structuring teams, allocating work packages, and establishing communication flows.\n3. Monitoring Against Plans: Tracking actual progress, comparing metrics against baselines, and identifying variances early.\n4. Maintaining Accountability: Directing corrective actions and taking formal responsibility for project deliverables and stakeholder value.",
        "answerStructure": [
            "Comprehensive definition of IT PM",
            "Four core activities clearly numbered and explained"
        ],
        "keywords": ["Developing plans", "Organizing work", "Monitoring against plans", "Accountability", "Baselines"],
        "commonMistakes": "Describing IT project management purely as programming or server setup rather than organizational governance and coordination.",
        "selfCheckChecklist": [
            "Did I list the four core activities accurately?",
            "Did I distinguish management coordination from technical coding?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Defining IT Projects", "page": 16 }
    },
    {
        "id": "itpm-u1-qa-003",
        "unit": 1,
        "question": "Why are IT projects especially challenging compared to traditional engineering projects?",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Discuss requirement volatility, rapid technological obsolescence, sociotechnical integration, multiple stakeholder conflicts, and discipline youth.",
        "modelAnswer": "IT projects exhibit unique management challenges rooted in several distinctive factors:\n1. Volatile & Evolving Requirements: Unlike civil engineering with physical blueprints, software requirements evolve rapidly as user understanding matures.\n2. High Pace of Technological Change: Underlying frameworks, operating systems, and security threats change during project lifecycles.\n3. Sociotechnical Complexity: IT systems tightly couple hardware, software algorithms, and human organizational behavior (users, culture, processes).\n4. Multi-Stakeholder Landscapes: Systems must satisfy diverse internal user groups (operational, managerial, executive) and external regulators simultaneously.\n5. Young Discipline & Limited Failure Sharing: IT PM is relatively young, and organizations frequently conceal failed IT projects, limiting industry-wide learning.\n6. Legacy & Customization Friction: Integrating new platforms with fragile legacy mainframe databases creates severe interface risks.",
        "answerStructure": [
            "Introduction contrasting software with physical construction",
            "5-6 specific source-supported reasons",
            "Brief concluding summary on sociotechnical impact"
        ],
        "keywords": ["Sociotechnical complexity", "Changing requirements", "Rapid technological change", "Legacy integration", "Immature discipline", "Failure concealment"],
        "commonMistakes": "Stating that IT projects fail because 'programmers are lazy' rather than identifying structural and sociotechnical drivers.",
        "selfCheckChecklist": [
            "Did I mention sociotechnical nature?",
            "Did I explain the limited sharing of failure lessons?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Why IT Projects are Difficult", "page": 17 }
    },
    {
        "id": "itpm-u1-qa-004",
        "unit": 1,
        "question": "Explain the Iron Triangle of Project Constraints and illustrate the trade-offs when one constraint is altered.",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Define Scope, Schedule, and Cost. Provide clear concrete examples of trade-offs when modifying one constraint.",
        "modelAnswer": "The Iron Triangle illustrates the fundamental interdependency between the three primary project constraints:\n1. Scope: The boundary of features, deliverables, and technical work to be performed.\n2. Schedule (Time): The calendar duration and milestones established to deliver the project.\n3. Cost (Budget/Resources): The financial budget, equipment, and human labor hours allocated.\n\nTrade-Off Dynamics:\n• Expanding Scope: If the client requests additional features, the schedule must be extended, or the budget/resources must be increased (or quality will decline).\n• Shortening Schedule: If the launch date is brought forward (crashing/fast-tracking), more resources/cost must be injected, or scope must be reduced.\n• Cutting Budget: If executive leadership cuts funding by 30%, the team must negotiate a smaller realizable scope or accept an extended delivery timeline.",
        "answerStructure": [
            "Define the 3 nodes of the triangle",
            "Explain interdependency principle",
            "Provide specific examples of Scope increase, Schedule compression, and Budget cuts"
        ],
        "keywords": ["Iron Triangle", "Scope", "Schedule", "Cost", "Trade-offs", "Interdependency"],
        "commonMistakes": "Claiming that an experienced project manager can expand scope without affecting either cost or schedule.",
        "selfCheckChecklist": [
            "Did I identify all three nodes correctly?",
            "Did I explain the trade-off mechanics clearly?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Iron Triangle", "page": 19 }
    },
    {
        "id": "itpm-u1-qa-005",
        "unit": 1,
        "question": "What are the Five Quintuple Project Constraints? Explain how they expand upon the Iron Triangle.",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Explicitly list Schedule, Cost, Context, Technical, Financing from Figure 3 (page 20). Explain Context and Technical specifically.",
        "modelAnswer": "Given the complexity of modern IT projects, the official IU course book introduces the Quintuple Project Constraints model (Gransberg & Jeong), expanding the three constraints into five interdependent dimensions:\n\n1. Schedule: Timeframes, delivery deadlines, and milestone sequencing.\n2. Cost: Internal expenditure, labor costs, and operational budget consumption.\n3. Context: The operating environment, including organizational culture, local/global requirements, user customization, and legal/regulatory compliance.\n4. Technical: The technical architecture, software specifications, design, and functional scope (corresponds to Scope in the Iron Triangle).\n5. Financing: Cash flow availability, capital funding sources, and multi-period disbursement schedules.\n\nSignificance: IT systems do not exist in an architectural vacuum. Adding 'Context' ensures cultural and regulatory compliance are managed, while 'Financing' ensures cash liquidity and funding viability are maintained.",
        "answerStructure": [
            "List all 5 constraints exactly as named in the course book",
            "Define Context and Technical in detail",
            "State how Technical corresponds to Scope"
        ],
        "keywords": ["Quintuple constraints", "Schedule", "Cost", "Context", "Technical", "Financing", "Gransberg & Jeong"],
        "commonMistakes": "Listing generic PMBOK terms (Quality, Risk) instead of the five explicitly specified in the course book (Schedule, Cost, Context, Technical, Financing).",
        "selfCheckChecklist": [
            "Did I use the exact book terms: Schedule, Cost, Context, Technical, Financing?",
            "Did I note that Technical corresponds to Scope?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.1", "topic": "Quintuple Constraints", "page": 20 }
    },
    {
        "id": "itpm-u1-qa-006",
        "unit": 1,
        "question": "Explain the organizational hierarchy of a large plan-driven IT project.",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Describe the full chain from Sponsor/PMO down to Team Member, with PMB and TMB steering bodies.",
        "modelAnswer": "A large plan-driven IT project utilizes a structured hierarchy to ensure accountability, governance, and division of technical labor:\n\n1. Project Sponsor / PMO (Top Executive Tier): The Sponsor owns the business case and funding. The PMO provides organizational guidelines and resource support.\n2. Project Manager: Carries overall accountability for project delivery, reporting upward to the Sponsor/PMB and directing the project team.\n3. Technical Coordinator: Directly supports the PM on technical matters, monitors specifications, oversees Work-Package Leaders, and manages the technical library.\n4. Work-Package Leaders (WPL): Manage assigned work packages, coordinate component deliverables, and report progress to the Technical Coordinator.\n5. Task Leaders: Lead specific task execution within a work package, guiding day-to-day work.\n6. Team Members: Specialized technical engineers executing coding, testing, and documentation.\n\nAdvisory & Governance Bodies:\n• PMB (Project Management Board): Sits adjacent to the PM for overall nontechnical governance.\n• TMB (Technical Management Board): Sits adjacent to the Technical Coordinator for technical decisions and dispute resolution.",
        "answerStructure": [
            "List hierarchy from top to bottom in correct sequence",
            "State role of PMB adjacent to PM",
            "State role of TMB adjacent to Technical Coordinator"
        ],
        "keywords": ["Project Sponsor", "PMO", "Project Manager", "Technical Coordinator", "Work-Package Leader", "Task Leader", "Team Member", "PMB", "TMB"],
        "commonMistakes": "Omitting the Technical Coordinator or reversing the hierarchy of WPL and Task Leader.",
        "selfCheckChecklist": [
            "Is the hierarchy strictly in top-to-bottom order?",
            "Did I explain the role of PMB and TMB?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Hierarchy", "page": 21 }
    },
    {
        "id": "itpm-u1-qa-007",
        "unit": 1,
        "question": "Differentiate the roles and responsibilities of the Project Management Board (PMB) and Technical Management Board (TMB).",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Contrast overall nontechnical governance (PMB) with technical governance and dispute resolution (TMB).",
        "modelAnswer": "The PMB and TMB operate as complementary governance bodies with distinct jurisdictions:\n\nProject Management Board (PMB):\n• Focus: Overall project governance, strategic direction, and nontechnical management.\n• Responsibilities: Monitors progress against schedule and budget baselines, manages project-level risks, approves resource reallocations, authorizes major plan changes, directs corrective actions, and resolves nontechnical disputes.\n\nTechnical Management Board (TMB):\n• Focus: Specialized technical governance and engineering integrity.\n• Responsibilities: Resolves complex or unresolved technical issues, arbitrates technical disagreements between teams/vendors, coordinates technical/contractual specifications, and evaluates deliverables through technical audits against milestone criteria.\n\nSummary Rule: PMB governs overall project direction and resources; TMB governs technical decisions and engineering conflicts.",
        "answerStructure": [
            "Heading and detailed bullets for PMB",
            "Heading and detailed bullets for TMB",
            "Concise concluding distinction"
        ],
        "keywords": ["PMB", "TMB", "Overall governance", "Nontechnical differences", "Technical conflicts", "Milestone audits", "Corrective action"],
        "commonMistakes": "Treating PMB and TMB as the same board or assigning technical conflict arbitration to the PMB.",
        "selfCheckChecklist": [
            "Did I assign nontechnical disputes to PMB?",
            "Did I assign technical conflicts and milestone audits to TMB?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Governance Bodies", "page": 22 }
    },
    {
        "id": "itpm-u1-qa-008",
        "unit": 1,
        "question": "Explain the Five Generic Project Phases in order and highlight the special characteristic of the Monitor and Control phase.",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "List Conception/Initiation, Definition/Planning, Launch/Execution, Monitor/Control, Termination in sequence. Emphasize that Monitor/Control runs in parallel.",
        "modelAnswer": "The lifecycle of an IT project comprises five generic phases:\n\n1. Conception / Initiation: Clarifying customer need, preliminary requirements, feasibility analysis, appointing sponsor/PM, holding kick-off, and creating the project charter.\n2. Definition / Planning: Establishing scope baseline (WBS), schedule baseline, cost baseline, risk register, and integrated project plan.\n3. Launch / Execution: Realizing actual deliverables, acquiring teams and infrastructure, quality assurance, stakeholder engagement, and deliverable reviews.\n4. Monitor / Control: Measuring actual performance against baselines, tracking metrics, calculating variances, and implementing corrective actions.\n5. Termination: Final deliverable acceptance, releasing resources, post-implementation review (lessons learned), and contract closure.\n\nCritical Characteristic: The Monitor & Control phase does NOT wait for execution to end. It runs in parallel across much of the project work, continuously evaluating progress and steering activities.",
        "answerStructure": [
            "Numbered list of 5 phases in correct sequence",
            "Key activities for each phase",
            "Dedicated callout on the concurrent nature of Monitor & Control"
        ],
        "keywords": ["Initiation", "Planning", "Execution", "Monitor and Control", "Termination", "Runs in parallel", "Baselines"],
        "commonMistakes": "Drawing Monitor and Control as a tiny isolated phase strictly occurring after execution finishes.",
        "selfCheckChecklist": [
            "Are all 5 phases in correct order?",
            "Did I emphasize that Monitor & Control runs concurrently with execution?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Phases", "page": 24 }
    },
    {
        "id": "itpm-u1-qa-009",
        "unit": 1,
        "question": "What is a Project Charter? Explain its purpose, key contents, and academic significance.",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Define charter, explain WHY+WHAT+RISK+WHEN+MONEY+APPROVAL+WHO, and state that signing officially authorizes the project.",
        "modelAnswer": "A Project Charter is the foundational governance document created during the Initiation phase that formally acknowledges and establishes an IT project.\n\nCore Contents (Memory Formula: WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO):\n1. WHY: Purpose, business justification, and measurable business objectives.\n2. WHAT: High-level requirements, project scope boundaries, and key deliverables.\n3. RISK: Pre-identified high-level risks and major project assumptions.\n4. WHEN: Summary milestone schedule and critical target dates.\n5. MONEY: Pre-approved budget allocation and financial constraints.\n6. APPROVAL: Success criteria, sign-off rules, and deliverable acceptance standards.\n7. WHO: Appointed Project Manager, Project Sponsor, and assigned authority levels.\n\nAcademic & Legal Significance: Signing the project charter by the Project Sponsor officially authorizes the project to exist and grants the Project Manager formal authority to commit organizational resources.",
        "answerStructure": [
            "Formal definition of charter",
            "7 components structured around memory formula",
            "Statement on official authorization by signing"
        ],
        "keywords": ["Project Charter", "Official authorization", "Business case", "Sponsor", "Authority levels", "WHY WHAT RISK WHEN MONEY APPROVAL WHO"],
        "commonMistakes": "Forgetting to state that signing the charter officially authorizes the project and commits resources.",
        "selfCheckChecklist": [
            "Did I mention that signing authorizes the project?",
            "Did I list the memory components accurately?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Project Charter", "page": 24 }
    },
    {
        "id": "itpm-u1-qa-010",
        "unit": 1,
        "question": "Compare plan-driven and agile project management approaches as presented in Unit 1.",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Contrast upfront planning, requirement volatility, phase structure, and adaptation support.",
        "modelAnswer": "Unit 1 contrasts plan-driven and agile methodologies along core architectural dimensions:\n\n1. Planning Horizon:\n• Plan-Driven: Emphasizes extensive, detailed whole-project planning early in the lifecycle before development starts.\n• Agile: Emphasizes high-level initial roadmap planning, adding detailed specifications close to execution within short iterations/sprints.\n\n2. Requirements & Change Handling:\n• Plan-Driven: Assumes requirements can be locked early; manages changes through formal, restrictive change control boards.\n• Agile: Welcomes evolving requirements throughout the lifecycle, optimizing the system for ongoing adaptation and customer feedback.\n\n3. Workflow & Phases:\n• Plan-Driven: Executes in predictive, logically related activity phases (e.g. Conception → Definition → Launch → Close).\n• Agile: Realizes value through rapid, repeating iterative timeboxes (sprints) producing working increments.\n\n4. Suitable Context:\n• Plan-Driven: Ideal for large, contractually fixed, regulated systems with well-understood requirements.\n• Agile: Ideal for dynamic, innovative software where end-user needs evolve through frequent prototypes.",
        "answerStructure": [
            "Comparison across 4 structured dimensions (planning, change, workflow, context)",
            "Clear balance without declaring one universally superior"
        ],
        "keywords": ["Plan-driven", "Agile", "Upfront planning", "Iterative sprints", "Change management", "Requirements volatility"],
        "commonMistakes": "Adding complex Scrum mechanics (story points, burndowns) not covered in Unit 1.",
        "selfCheckChecklist": [
            "Did I contrast upfront detail vs just-in-time detail?",
            "Did I keep the scope strictly aligned with Unit 1?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.2", "topic": "Plan-Driven vs Agile", "page": 25 }
    },
    {
        "id": "itpm-u1-qa-011",
        "unit": 1,
        "question": "Define project risk and explain the concepts of Threat and Opportunity.",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Define risk as an uncertain event/condition. Explain negative risk as threat and positive risk as opportunity.",
        "modelAnswer": "A project risk is formally defined as an uncertain event or condition that, if it occurs, has a positive or negative effect on one or more project objectives (such as scope, schedule, cost, or quality).\n\nTwo Dimensions of Risk:\n1. Threat (Negative Risk):\n• An uncertain event that, if realized, harms project objectives.\n• Examples: Critical database server failure, key programmer departure, unexpected regulatory penalties, interface incompatibility.\n• Management Objective: Minimize probability and mitigate potential damage.\n\n2. Opportunity (Positive Risk):\n• An uncertain event that, if realized, benefits project objectives.\n• Examples: Favorable cloud infrastructure price drops, early completion of dependent components, discovering open-source libraries that accelerate development.\n• Management Objective: Maximize probability and exploit positive impacts.\n\nKey Takeaway: Risk is not merely synonymous with disaster; professional PM actively identifies and captures opportunities.",
        "answerStructure": [
            "Formal definition emphasizing uncertainty",
            "Detailed definition and examples of Threat",
            "Detailed definition and examples of Opportunity",
            "Concluding rule on positive risk"
        ],
        "keywords": ["Project risk", "Uncertain event", "Threat", "Opportunity", "Positive risk", "Negative risk"],
        "commonMistakes": "Stating that risk is strictly negative and that positive events are called 'luck' rather than opportunities.",
        "selfCheckChecklist": [
            "Did I define positive risk as opportunity?",
            "Did I provide examples for both threat and opportunity?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 }
    },
    {
        "id": "itpm-u1-qa-012",
        "unit": 1,
        "question": "How are project risks evaluated and why does risk exposure change dynamically over time?",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Explain Probability × Magnitude of impact. Explain why risk evolves as knowledge increases.",
        "modelAnswer": "Project risks are evaluated across two primary quantitative/qualitative dimensions:\n1. Probability of Occurrence: The likelihood that the uncertain event will take place (ranging from very unlikely to highly probable).\n2. Magnitude of Consequence (Impact): The severity of potential financial, schedule, or technical damage (for threats) or benefit (for opportunities).\n\nRisk Exposure Formula: Risk Exposure = Probability × Impact\n\nDynamic Nature of Risk Over Time:\n• Risk does not remain static. As the project advances through its lifecycle, team knowledge increases and technical ambiguities are resolved.\n• When a prototype succeeds or a legacy interface is tested, related risks disappear from the active register.\n• Concurrently, new risks emerge during execution (e.g. unforeseen user load, third-party vendor delays, organizational restructuring).\n• Therefore, risk evaluation is an ongoing iterative discipline, not a one-time planning exercise.",
        "answerStructure": [
            "Define Probability and Impact",
            "State the evaluation calculation / matrix logic",
            "Explain why risk evolves as project knowledge increases"
        ],
        "keywords": ["Probability", "Impact", "Magnitude of damage", "Risk exposure", "Dynamic risk", "Knowledge increase"],
        "commonMistakes": "Assuming risk is only calculated once during initiation and never revised.",
        "selfCheckChecklist": [
            "Did I explain Probability × Impact?",
            "Did I explain that risk shifts as knowledge increases?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Managing Risks", "page": 26 }
    },
    {
        "id": "itpm-u1-qa-013",
        "unit": 1,
        "question": "Identify and explain major sources of IT project risk, categorizing them into Technological, Organizational, and User/Stakeholder risks.",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Provide clear source-supported categories and examples for Technological, Organizational, and User/Stakeholder risks.",
        "modelAnswer": "The course book groups common IT project risks into three major source categories:\n\n1. Technological Risks:\n• Inadequate technology or weak technical infrastructure.\n• Complex, fragile integration interfaces between new systems and legacy databases.\n• Insufficient system scalability or unexpected performance bottlenecks.\n• Reliance on immature, unproven programming libraries or third-party tools.\n\n2. Organizational Risks:\n• Inadequate staffing or sudden loss of key personnel.\n• Limited or unstable project funding throughout the lifecycle.\n• Immature organizational project management practices and lack of executive support.\n• Ineffective resource management strategy leading to specialist over-allocation.\n\n3. User & Stakeholder-Related Risks:\n• Underestimating the actual volume and concurrency of active users.\n• Poor stakeholder communication leading to misunderstood business requirements.\n• High external dependencies on third-party suppliers or collaborators.\n• User resistance to organizational change and new software workflows.",
        "answerStructure": [
            "Clear headings for the three categories",
            "3-4 concrete source-supported examples per category"
        ],
        "keywords": ["Technological risks", "Organizational risks", "User stakeholder risks", "Legacy integration", "Scalability", "Resource strategy"],
        "commonMistakes": "Listing generic personal complaints rather than the source-grounded categories.",
        "selfCheckChecklist": [
            "Are all three categories present?",
            "Did I include legacy integration and user volume underestimation?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Sources of IT Project Risk", "page": 27 }
    },
    {
        "id": "itpm-u1-qa-014",
        "unit": 1,
        "question": "Explain the Four-Step Risk Management Process (I-A-D-M).",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Explain IDENTIFY, ANALYZE, DECIDE, MONITOR in sequential order with specific project activities.",
        "modelAnswer": "Unit 1 outlines an animated four-step continuous risk-management lifecycle represented by the mnemonic I-A-D-M:\n\n1. IDENTIFY (I):\n• Objective: Detect and document all potential threats and opportunities before they affect the project.\n• Activities: Stakeholder interviews, technical reviews, historical lesson audits, and cataloging in a Risk Register.\n\n2. ANALYZE (A):\n• Objective: Evaluate the severity and likelihood of each identified risk.\n• Activities: Assessing probability of occurrence and estimating the size of damage or benefit, prioritizing critical exposures.\n\n3. DECIDE (D):\n• Objective: Select and formulate the appropriate response strategy.\n• Activities: Choosing one of the M-A-T-A strategies (Mitigate, Accept, Transfer, Avoid), allocating contingency funds, and assigning risk owners.\n\n4. MONITOR (M):\n• Objective: Track active risks, identify emerging project triggers, and evaluate response effectiveness.\n• Activities: Continuous tracking of early warning indicators and updating the risk register throughout execution.",
        "answerStructure": [
            "Mnemonic introduction (I-A-D-M)",
            "Step-by-step breakdown with Objective and Activities for each step"
        ],
        "keywords": ["I-A-D-M", "Identify", "Analyze", "Decide", "Monitor", "Risk Register", "Risk Owners"],
        "commonMistakes": "Swapping the order of Analyze and Decide, or skipping the continuous Monitor step.",
        "selfCheckChecklist": [
            "Did I list I-A-D-M in exact order?",
            "Did I explain what happens in each step?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Process", "page": 28 }
    },
    {
        "id": "itpm-u1-qa-015",
        "unit": 1,
        "question": "Explain the Four Risk Responses (M-A-T-A) with suitable IT project examples.",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Define Mitigate, Accept, Transfer, Avoid with clear, realistic source-consistent IT examples.",
        "modelAnswer": "When responding to identified threats, project managers utilize the four M-A-T-A response strategies:\n\n1. MITIGATE:\n• Action: Proactively reduce the probability of occurrence and/or the magnitude of potential damage.\n• IT Example: Implementing automated regression test suites and building redundant database failover servers to prevent outages.\n\n2. ACCEPT:\n• Action: Acknowledge the risk and choose not to take active reducing measures, retaining the risk internally and monitoring it.\n• IT Example: Tolerating a minor, cosmetic CSS rendering glitch on an obsolete web browser used by under 0.05% of users.\n\n3. TRANSFER:\n• Action: Shift the financial or operational impact of the risk to an external third party.\n• IT Example: Purchasing commercial business interruption insurance or contracting an external cloud provider under a guaranteed uptime SLA.\n\n4. AVOID:\n• Action: Eliminate the risk exposure entirely by deliberately modifying project scope or not performing the high-risk activity.\n• IT Example: Canceling an experimental, unproven third-party AI module and using an established rule-based algorithm instead.",
        "answerStructure": [
            "Mnemonic introduction (M-A-T-A)",
            "Definition and concrete IT example for each of the 4 responses"
        ],
        "keywords": ["Mitigate", "Accept", "Transfer", "Avoid", "M-A-T-A", "Risk response", "SLA insurance"],
        "commonMistakes": "Confusing Mitigation (reducing impact/probability) with Avoidance (canceling the activity completely).",
        "selfCheckChecklist": [
            "Did I define Mitigate, Accept, Transfer, Avoid?",
            "Did I give a specific IT example for each?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Responses", "page": 28 }
    },
    {
        "id": "itpm-u1-qa-016",
        "unit": 1,
        "question": "Explain Risk Appetite, Risk Tolerance, and Risk Threshold, and identify the three primary risk attitudes.",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Clearly define appetite, tolerance, and threshold (below=acceptable, above=not tolerated). List risk-averse, risk-neutral, risk-taking.",
        "modelAnswer": "Risk governance relies on three structural threshold concepts:\n\n1. Risk Appetite: The broad degree of uncertainty an organization is willing to undertake in pursuit of value or strategic innovation.\n2. Risk Tolerance: The specific, measurable volume or amount of risk an organization can absorb before severe failure occurs.\n3. Risk Threshold: The precise operational boundary line separating acceptable risk from unacceptable risk:\n   • Below Threshold: Risk is within acceptable limits; can be tolerated/accepted.\n   • Above Threshold: Risk is NOT tolerated; immediate active intervention is mandated.\n\nThree Primary Risk Attitudes:\n• Risk-Averse: Prefers certainty and safety; willing to pay significant premiums to avoid or mitigate uncertainty.\n• Risk-Neutral: Evaluates decisions objectively based on expected statistical value without emotional bias (described in Unit 1 as more reserved/measured).\n• Risk-Taking (Risk-Seeking): Willing to accept substantial uncertainty in exchange for high potential rewards.",
        "answerStructure": [
            "Define Appetite, Tolerance, Threshold with clear threshold rule",
            "Define the three attitudes: Averse, Neutral, Taking"
        ],
        "keywords": ["Risk appetite", "Risk tolerance", "Risk threshold", "Risk-averse", "Risk-neutral", "Risk-taking", "Boundary"],
        "commonMistakes": "Failing to explain the threshold rule (below = acceptable, above = not tolerated).",
        "selfCheckChecklist": [
            "Did I explain the threshold rule explicitly?",
            "Did I define all three risk attitudes?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.3", "topic": "Risk Attitudes", "page": 27 }
    },
    {
        "id": "itpm-u1-qa-017",
        "unit": 1,
        "question": "What are the main responsibilities of an IT Project Manager?",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "List overall project responsibility, upward reporting, coordination, chairing meetings, performance monitoring, and deliverable accountability.",
        "modelAnswer": "An IT Project Manager holds total operational accountability for project success. Primary responsibilities include:\n\n1. Overall Project Responsibility: Ensuring the project fulfills approved charter objectives within approved constraints.\n2. Upward Reporting: Serving as primary liaison to the Project Sponsor, PMO, and Project Management Board (PMB), delivering accurate status reports.\n3. Cross-Functional Coordination: Aligning developers, architects, testers, external vendors, and business stakeholders.\n4. Meeting Leadership: Chairing project meetings, steering committees, and milestone review sessions.\n5. Performance Monitoring & Variance Control: Tracking deliverables against schedule, cost, and scope baselines; initiating corrective action.\n6. Administrative & Financial Stewardship: Managing budget disbursements, approving invoices, and maintaining compliance.\n7. Risk & Issue Resolution: Leading the I-A-D-M risk cycle and clearing operational roadblocks for development teams.",
        "answerStructure": [
            "Introductory statement on overall accountability",
            "6-7 clearly defined responsibilities"
        ],
        "keywords": ["Overall project responsibility", "Upward reporting", "Coordination", "Chairing meetings", "Performance monitoring", "Variance control"],
        "commonMistakes": "Focusing solely on coding and server installation rather than management stewardship.",
        "selfCheckChecklist": [
            "Did I cover upward reporting to sponsors?",
            "Did I mention performance monitoring against baselines?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Responsibilities", "page": 29 }
    },
    {
        "id": "itpm-u1-qa-018",
        "unit": 1,
        "question": "Distinguish between Soft/Qualitative and Hard/Quantitative skills of an IT Project Manager. Why is continuous learning vital?",
        "marks": 6,
        "priority": "VERY HIGH PRIORITY",
        "suggestedTimeMinutes": 8,
        "examinerExpectation": "Contrast soft skills with hard quantitative methods. Emphasize domain understanding and continuous learning over pure coding ability.",
        "modelAnswer": "An effective IT Project Manager requires a balanced mastery of both soft and hard competencies:\n\n1. Soft / Qualitative Skills:\n• Interpersonal Leadership: Inspiring team members, establishing psychological safety, and fostering shared ownership.\n• Communication & Negotiation: Bridging technical and executive terminology; negotiating scope and resources with sponsors and vendors.\n• Trustworthiness & Problem Solving: Maintaining ethical transparency, managing interpersonal conflicts, and building stakeholder confidence.\n\n2. Hard / Quantitative Skills:\n• Goal & Deliverable Formulation: Decomposing high-level requirements into measurable work packages and deliverables.\n• Schedule & Budget Construction: Developing critical path schedules, budget baselines, and milestone networks.\n• Quantitative Control: Applying performance variance measurement across time, cost, quality, procurement, and risk.\n\nWhy Continuous Learning is Vital:\n• Technical specialization alone does NOT make an effective PM. Understanding and analyzing domain problems is far more critical than being the best programmer.\n• Because IT architectures, cloud platforms, and methodologies evolve at extreme speed, an IT PM must cultivate a willingness to learn continuously to remain competent.",
        "answerStructure": [
            "Section on Soft/Qualitative skills",
            "Section on Hard/Quantitative skills",
            "Dedicated explanation of domain problem analysis and continuous learning"
        ],
        "keywords": ["Soft skills", "Hard skills", "Quantitative control", "Leadership", "Negotiation", "Continuous learning", "Domain problems"],
        "commonMistakes": "Asserting that a PM must be the lead coder or that technical skills are entirely unnecessary.",
        "selfCheckChecklist": [
            "Did I cover both soft and hard skills?",
            "Did I emphasize domain problem analysis over pure programming?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "PM Skills", "page": 29 }
    },
    {
        "id": "itpm-u1-qa-019",
        "unit": 1,
        "question": "Why do Project Manager skill requirements change across the project lifecycle?",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Explain how early phases demand HR acquisition, middle phases demand team management, and conflict management is needed throughout.",
        "modelAnswer": "The demands placed upon an IT Project Manager evolve dynamically as the project transitions through its lifecycle phases:\n\n1. Early Lifecycle (Conception & Planning):\n• Primary Need: Human-Resource Acquisition & Strategic Alignment.\n• Focus: Negotiating with functional managers to secure top talent, assembling core teams, aligning executive sponsors on scope, and drafting the charter.\n\n2. Mid Lifecycle (Execution & Monitoring):\n• Primary Need: Team Management & Variance Control.\n• Focus: Guiding technical execution, motivating developers, coaching through roadblocks, tracking progress against baselines, and steering corrective actions.\n\n3. Late Lifecycle (Termination):\n• Primary Need: Contract Closure & Administrative Finalization.\n• Focus: Securing formal client sign-off, transitioning deliverables to operations, releasing staff, and compiling lessons learned.\n\n4. Throughout ALL Phases (Persistent Need):\n• Conflict Management & Negotiation Capability: Disagreements over priorities, resources, architectural choices, and scope changes can erupt at any time.",
        "answerStructure": [
            "Phased breakdown: Early (HR acquisition), Mid (Team management), Late (Closure)",
            "Prominent callout that Conflict Management is required across all phases"
        ],
        "keywords": ["Lifecycle skill shift", "HR acquisition", "Team management", "Conflict management", "Negotiation", "Across all phases"],
        "commonMistakes": "Thinking skill demands remain uniform from day 1 to project closure.",
        "selfCheckChecklist": [
            "Did I note HR acquisition is early?",
            "Did I note conflict management is needed throughout all phases?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Lifecycle Skills", "page": 30 }
    },
    {
        "id": "itpm-u1-qa-020",
        "unit": 1,
        "question": "What are Project Triggers and why are they critical in project risk monitoring?",
        "marks": 6,
        "priority": "HIGH PRIORITY",
        "suggestedTimeMinutes": 7,
        "examinerExpectation": "Define project triggers as early warning symptoms or threshold events prompting risk contingency action.",
        "modelAnswer": "In project risk monitoring, Project Triggers (also known as risk symptoms or warning indicators) are specific events, thresholds, or observable signals that indicate an identified risk is manifesting or about to occur.\n\nKey Characteristics & Function:\n1. Early Warning Mechanism: Triggers alert the project manager before a catastrophic failure occurs, providing time for corrective intervention.\n2. Examples in IT Projects:\n• A key developer taking repeated sick leave or updating their LinkedIn profile (trigger for key personnel loss).\n• Unresolved bugs increasing by 20% in two consecutive sprints (trigger for architectural instability).\n• Response latency on a microservice exceeding 500ms under 50% simulated load (trigger for scalability failure).\n• Late delivery of an external vendor API endpoint by more than 3 days (trigger for third-party schedule delay).\n3. Operational Action: When a trigger condition is met, the assigned risk owner immediately activates the pre-planned contingency plan.",
        "answerStructure": [
            "Clear definition of project trigger",
            "3-4 concrete IT examples",
            "Operational significance in activating contingency plans"
        ],
        "keywords": ["Project triggers", "Early warning indicators", "Symptoms", "Threshold events", "Contingency plans", "Risk owner"],
        "commonMistakes": "Describing triggers as final project deliverables rather than early diagnostic indicators.",
        "selfCheckChecklist": [
            "Did I define triggers as early warning signs?",
            "Did I provide clear IT project examples?"
        ],
        "source": { "type": "course-book", "unit": 1, "section": "1.4", "topic": "Project Triggers", "page": 31 }
    }
]

print(f"Total Unit 1 Q&A generated: {len(qa_items)}")

with open(f"{u1_dir}/qa.ts", "w") as f:
    f.write('import { DescriptiveQuestion } from "../../../../types";\n\n')
    f.write('export const unit1ImportantQuestions: DescriptiveQuestion[] = ' + json.dumps(qa_items, indent=2) + ';\n')

print("Wrote unit-1/qa.ts")

# -------------------------------------------------------------
# UNIT 1 COMPARISONS (8 Master Comparisons)
# -------------------------------------------------------------
comparisons = [
    {
        "id": "itpm-u1-comp-001",
        "title": "Project vs Operations",
        "unit": "Unit 1",
        "description": "Fundamental distinction between temporary strategic endeavors and ongoing routine business operations.",
        "columns": ["Project", "Operations"],
        "criteria": [
            {
                "aspect": "Duration & Lifespan",
                "itemA": "Temporary: Definite, defined start date and end date.",
                "itemB": "Ongoing: Permanent, continuous, and indefinite.",
                "keyDifference": "Projects always end; operations continue indefinitely."
            },
            {
                "aspect": "Nature of Deliverable",
                "itemA": "Creates a unique product, service, or result.",
                "itemB": "Produces repetitive, standardized goods or services.",
                "keyDifference": "Uniqueness vs repetition."
            },
            {
                "aspect": "Strategic Purpose",
                "itemA": "Drives organizational change, innovation, and strategic transformation.",
                "itemB": "Maintains day-to-day business continuity and revenue flow.",
                "keyDifference": "Change agent vs business stability."
            },
            {
                "aspect": "Uncertainty & Risk",
                "itemA": "High uncertainty due to novelty, unique scope, and temporary teams.",
                "itemB": "Low uncertainty; governed by standard operating procedures (SOPs).",
                "keyDifference": "High novelty risk vs low operational process risk."
            }
        ],
        "examTrap": "Temporary refers to the project endeavor, NEVER to the lifespan of the resulting software product.",
        "memoryRule": "Projects = Temporary & Unique. Operations = Ongoing & Repeated."
    },
    {
        "id": "itpm-u1-comp-002",
        "title": "Plan-Driven vs Agile Project Management",
        "unit": "Unit 1",
        "description": "Comparison of predictive upfront planning versus iterative adaptive execution in Unit 1 foundations.",
        "columns": ["Plan-Driven Approach", "Agile Approach"],
        "criteria": [
            {
                "aspect": "Planning Horizon",
                "itemA": "Comprehensive whole-project plans detailed early in lifecycle.",
                "itemB": "High-level initial roadmap; details added just-in-time near iteration.",
                "keyDifference": "Predictive upfront planning vs rolling-wave iterative planning."
            },
            {
                "aspect": "Requirements Handling",
                "itemA": "Aims to freeze requirements early; changes managed through formal CCB.",
                "itemB": "Embraces evolving requirements; expects customer feedback each sprint.",
                "keyDifference": "Change resistance/control vs change adaptation."
            },
            {
                "aspect": "Execution Structure",
                "itemA": "Predictive sequential activity phases (Initiation → Planning → Execution).",
                "itemB": "Short, repeating iterative timeboxes (sprints) delivering working increments.",
                "keyDifference": "Sequential phases vs iterative cycles."
            },
            {
                "aspect": "Best Suited Environment",
                "itemA": "Large, contractually rigid, highly regulated projects with stable scope.",
                "itemB": "Innovative, dynamic software environments with evolving user needs.",
                "keyDifference": "Stability/regulatory compliance vs speed/market responsiveness."
            }
        ],
        "examTrap": "Do not assume agile has no planning. Agile plans continuously at sprint boundaries.",
        "memoryRule": "Plan-driven = Early detail & predictive phases. Agile = High-level initial & sprint iterations."
    },
    {
        "id": "itpm-u1-comp-003",
        "title": "Project Management Board (PMB) vs Technical Management Board (TMB)",
        "unit": "Unit 1",
        "description": "Governance division between overall project management and technical realization in large projects.",
        "columns": ["Project Management Board (PMB)", "Technical Management Board (TMB)"],
        "criteria": [
            {
                "aspect": "Primary Governance Focus",
                "itemA": "Overall progress, direction, resource allocation, and budget baselines.",
                "itemB": "Technical architecture, engineering decisions, and technical conflict resolution.",
                "keyDifference": "Nontechnical management governance vs technical engineering governance."
            },
            {
                "aspect": "Adjacent Organizational Partner",
                "itemA": "Sits adjacent to and advises the Project Manager.",
                "itemB": "Sits adjacent to and advises the Technical Coordinator.",
                "keyDifference": "PM partnership vs Technical Coordinator partnership."
            },
            {
                "aspect": "Dispute Resolution Scope",
                "itemA": "Arbitrates nontechnical disputes, contract changes, and priority clashes.",
                "itemB": "Arbitrates unresolved technical problems and architectural clashes between teams.",
                "keyDifference": "Commercial/organizational disputes vs engineering/technical disputes."
            },
            {
                "aspect": "Audit & Review Role",
                "itemA": "Evaluates schedule variances, cost deviations, and corrective action plans.",
                "itemB": "Performs technical audits and evaluates deliverable quality against milestone criteria.",
                "keyDifference": "Budget/schedule baseline audits vs technical milestone specification audits."
            }
        ],
        "examTrap": "PMB = overall/nontechnical governance. TMB = technical governance. Do not mix up their scopes!",
        "memoryRule": "PMB governs the project; TMB governs the technical solution."
    },
    {
        "id": "itpm-u1-comp-004",
        "title": "Project Sponsor vs Project Manager",
        "unit": "Unit 1",
        "description": "Division of executive ownership and operational execution responsibility.",
        "columns": ["Project Sponsor", "Project Manager"],
        "criteria": [
            {
                "aspect": "Organizational Authority",
                "itemA": "Executive champion owning the business case and corporate justification.",
                "itemB": "Operational leader with formal authority granted via the signed charter.",
                "keyDifference": "Business ownership vs operational project leadership."
            },
            {
                "aspect": "Resource & Funding Role",
                "itemA": "Secures enterprise funding and champions high-level resource needs.",
                "itemB": "Manages day-to-day resource allocation and tracks budget consumption.",
                "keyDifference": "Secures funding vs manages spending."
            },
            {
                "aspect": "Primary Accountability",
                "itemA": "Accountable for enterprise strategic alignment and business value realization.",
                "itemB": "Accountable for deliverable completion within scope, schedule, and cost baselines.",
                "keyDifference": "Strategic business value vs tactical baseline execution."
            }
        ],
        "examTrap": "The Sponsor authorizes the project by signing the charter; the PM does NOT self-authorize.",
        "memoryRule": "Sponsor provides the money and business case; PM delivers the project."
    },
    {
        "id": "itpm-u1-comp-005",
        "title": "Work-Package Leader vs Task Leader",
        "unit": "Unit 1",
        "description": "Hierarchy and delegation of work breakdown components.",
        "columns": ["Work-Package Leader (WPL)", "Task Leader"],
        "criteria": [
            {
                "aspect": "Hierarchical Tier",
                "itemA": "Reports directly to Technical Coordinator / Project Manager.",
                "itemB": "Reports directly to the Work-Package Leader.",
                "keyDifference": "Work package level vs sub-task activity level."
            },
            {
                "aspect": "Scope of Responsibility",
                "itemA": "Manages an entire work package, its integrated deliverables, and budget.",
                "itemB": "Guides specific task execution and individual team members within a work package.",
                "keyDifference": "Package integration vs specific task completion."
            },
            {
                "aspect": "Reporting Cadence",
                "itemA": "Synthesizes package progress and reports upward to technical management.",
                "itemB": "Tracks daily progress of task engineers and reports status to the WPL.",
                "keyDifference": "Synthesized package status vs daily task-level status."
            }
        ],
        "examTrap": "WPLs manage whole work packages; Task Leaders direct individual tasks inside a work package.",
        "memoryRule": "Work Package contains Tasks. WPL leads Task Leaders."
    },
    {
        "id": "itpm-u1-comp-006",
        "title": "Threat vs Opportunity (Risk Dimensions)",
        "unit": "Unit 1",
        "description": "The two faces of project uncertainty: negative and positive risk.",
        "columns": ["Threat (Negative Risk)", "Opportunity (Positive Risk)"],
        "criteria": [
            {
                "aspect": "Effect on Objectives",
                "itemA": "Uncertain event that causes damage, delay, or cost overruns.",
                "itemB": "Uncertain event that yields benefits, acceleration, or cost savings.",
                "keyDifference": "Harmful impact vs beneficial impact."
            },
            {
                "aspect": "Strategic Goal",
                "itemA": "Reduce probability and mitigate potential damage.",
                "itemB": "Increase probability and exploit/enhance potential benefit.",
                "keyDifference": "Defense/reduction vs offense/exploitation."
            },
            {
                "aspect": "Typical Responses",
                "itemA": "Mitigate, Accept, Transfer, Avoid (M-A-T-A).",
                "itemB": "Exploit, Share, Enhance, Accept.",
                "keyDifference": "Threat mitigation vs opportunity capture."
            }
        ],
        "examTrap": "Risk is NOT exclusively negative! Positive risk is called an Opportunity.",
        "memoryRule": "Negative risk = Threat. Positive risk = Opportunity."
    },
    {
        "id": "itpm-u1-comp-007",
        "title": "Risk Mitigation vs Transfer vs Acceptance vs Avoidance",
        "unit": "Unit 1",
        "description": "Comparison of the four M-A-T-A risk response strategies.",
        "columns": ["Mitigate / Avoid", "Transfer / Accept"],
        "criteria": [
            {
                "aspect": "Mitigate vs Avoid",
                "itemA": "Mitigate reduces probability/impact while still performing the activity.",
                "itemB": "Avoid cancels or completely refuses the activity to eliminate risk to zero.",
                "keyDifference": "Reducing risk while proceeding vs canceling the activity entirely."
            },
            {
                "aspect": "Transfer vs Accept",
                "itemA": "Transfer shifts financial/operational liability to a third party (insurance/SLA).",
                "itemB": "Accept retains the risk internally, absorbing losses if they occur, while monitoring.",
                "keyDifference": "Paying an outside entity to take liability vs bearing the risk internally."
            }
        ],
        "examTrap": "Transfer does NOT eliminate the risk; it merely shifts financial liability to an external entity.",
        "memoryRule": "Mitigate = reduce. Avoid = cancel. Transfer = shift. Accept = tolerate."
    },
    {
        "id": "itpm-u1-comp-008",
        "title": "Soft / Qualitative vs Hard / Quantitative PM Skills",
        "unit": "Unit 1",
        "description": "The two complementary pillars of project manager competence.",
        "columns": ["Soft / Qualitative Skills", "Hard / Quantitative Skills"],
        "criteria": [
            {
                "aspect": "Primary Focus",
                "itemA": "Interpersonal relationships, leadership, trust, communication, and negotiation.",
                "itemB": "Mathematical scheduling, variance analysis, deliverable tracking, and baselining.",
                "keyDifference": "People and leadership vs numbers and analytical methods."
            },
            {
                "aspect": "Measurement",
                "itemA": "Subjective, behavioral, and qualitative; judged by trust and team morale.",
                "itemB": "Objective, formula-driven, and metricized; judged by variance and critical path.",
                "keyDifference": "Behavioral/social vs mathematical/procedural."
            },
            {
                "aspect": "Dominant Context",
                "itemA": "Resolving team conflicts, aligning sponsors, and coaching through crises.",
                "itemB": "Constructing WBS schedules, measuring cost variances, and milestone tracking.",
                "keyDifference": "Stakeholder engagement vs project performance control."
            }
        ],
        "examTrap": "Technical coding ability is NOT a substitute for soft skills or project quantitative control.",
        "memoryRule": "Soft skills lead people. Hard skills control performance baselines."
    }
]

print(f"Total Unit 1 Comparisons generated: {len(comparisons)}")

with open(f"{u1_dir}/comparisons.ts", "w") as f:
    f.write('import { MasterComparison } from "../../../../types";\n\n')
    f.write('export const unit1Comparisons: MasterComparison[] = ' + json.dumps(comparisons, indent=2) + ';\n')

print("Wrote unit-1/comparisons.ts")

# -------------------------------------------------------------
# UNIT 1 EXAM TRAPS (14 Items)
# -------------------------------------------------------------
traps = [
    {
        "id": "itpm-u1-trap-001",
        "unit": 1,
        "topic": "Project Uniqueness vs Operations",
        "commonStudentMistake": "Believing that 'temporary' means the resulting software or deliverable will only be used for a short time.",
        "correctAcademicTruth": "Temporary applies strictly to the project effort, timeline, and team organization. The resulting product or service is typically intended to be durable and long-lasting.",
        "whyExaminerDeductsMarks": "Demonstrates confusion between the temporary endeavor and the permanent operational lifecycle of the product.",
        "howToRemember": "The project is temporary (it finishes); the product is durable (it stays in operations)."
    },
    {
        "id": "itpm-u1-trap-002",
        "unit": 1,
        "topic": "Project Risk Definition",
        "commonStudentMistake": "Assuming that risk is always a negative problem or disaster.",
        "correctAcademicTruth": "Risk is an uncertain event with positive OR negative effects. Negative risk is a Threat; positive risk is an Opportunity.",
        "whyExaminerDeductsMarks": "Ignores the entire discipline of opportunity identification and capture.",
        "howToRemember": "Risk has two faces: Threat (negative) and Opportunity (positive)."
    },
    {
        "id": "itpm-u1-trap-003",
        "unit": 1,
        "topic": "Monitor and Control Phase Timing",
        "commonStudentMistake": "Treating Monitor and Control as an isolated end phase that starts only after execution is 100% complete.",
        "correctAcademicTruth": "Monitor and Control runs concurrently with much of project work, actively tracking execution against baselines.",
        "whyExaminerDeductsMarks": "If you only monitor at the end, it is an autopsy/post-mortem, not active project control.",
        "howToRemember": "Monitor & Control runs in parallel with execution."
    },
    {
        "id": "itpm-u1-trap-004",
        "unit": 1,
        "topic": "PMB vs TMB Authority",
        "commonStudentMistake": "Thinking PMB and TMB are the same board or that PMB resolves technical code conflicts.",
        "correctAcademicTruth": "PMB governs overall project direction, resources, costs, and nontechnical disputes. TMB governs technical decisions, engineering conflicts, and milestone audits.",
        "whyExaminerDeductsMarks": "Confuses strategic project management with specialized technical engineering governance.",
        "howToRemember": "PMB = Project / nontechnical. TMB = Technical / engineering."
    },
    {
        "id": "itpm-u1-trap-005",
        "unit": 1,
        "topic": "Project Charter Authorization",
        "commonStudentMistake": "Thinking the Project Manager signs the charter to grant themselves permission to spend money.",
        "correctAcademicTruth": "The Project Sponsor signs the charter. Signing officially authorizes the project's existence and empowers the PM to commit organizational resources.",
        "whyExaminerDeductsMarks": "A PM cannot self-authorize a project; governance authority flows from the Sponsor.",
        "howToRemember": "Sponsor signs the charter → project officially exists → PM receives authority."
    },
    {
        "id": "itpm-u1-trap-006",
        "unit": 1,
        "topic": "PM Technical Specialization",
        "commonStudentMistake": "Assuming the most effective IT Project Manager must be the best programmer or system architect on the team.",
        "correctAcademicTruth": "Technical specialization is helpful context, but analyzing domain problems, leading teams, and continuous learning are far more important.",
        "whyExaminerDeductsMarks": "A PM who focuses on coding fails to perform coordination, risk management, and stakeholder stewardship.",
        "howToRemember": "Lead the project, don't be the lead coder."
    },
    {
        "id": "itpm-u1-trap-007",
        "unit": 1,
        "topic": "Resource Pooling Trade-off",
        "commonStudentMistake": "Believing that sharing specialists across many projects creates 100% efficiency and zero problems.",
        "correctAcademicTruth": "Shared specialists improve utilization on paper, but severely degrade individual efficiency due to continuous context switching and divided attention.",
        "whyExaminerDeductsMarks": "Fails to recognize the severe cognitive friction and delay caused by multi-tasking across project contexts.",
        "howToRemember": "High utilization ≠ high efficiency. Context switching destroys productivity."
    },
    {
        "id": "itpm-u1-trap-008",
        "unit": 1,
        "topic": "Quintuple Constraints Model",
        "commonStudentMistake": "Substituting generic PMBOK constraints (Time, Cost, Scope, Quality, Risk) for the course book model.",
        "correctAcademicTruth": "The official course book explicitly specifies: Schedule, Cost, Context, Technical, and Financing (Figure 3, p. 20).",
        "whyExaminerDeductsMarks": "Directly breaches the IU syllabus model.",
        "howToRemember": "Quintuple = Schedule, Cost, Context, Technical, Financing."
    },
    {
        "id": "itpm-u1-trap-009",
        "unit": 1,
        "topic": "Risk Threshold",
        "commonStudentMistake": "Assuming risks above the threshold are ignored because they are too difficult to solve.",
        "correctAcademicTruth": "Risks below the threshold are acceptable/tolerable. Risks above the threshold are NOT tolerated and mandate active treatment.",
        "whyExaminerDeductsMarks": "Reverses the fundamental definition of risk tolerance and governance thresholds.",
        "howToRemember": "Below threshold = tolerated. Above threshold = immediate action required."
    },
    {
        "id": "itpm-u1-trap-010",
        "unit": 1,
        "topic": "Risk Transfer Misconception",
        "commonStudentMistake": "Believing that Risk Transfer physically removes the risk event from happening.",
        "correctAcademicTruth": "Transfer shifts the financial or contractual liability to a third party (e.g. insurance). The risk event itself can still physically occur.",
        "whyExaminerDeductsMarks": "Confuses financial insurance with technical risk avoidance.",
        "howToRemember": "Transfer shifts the bill, not the reality of the hazard."
    },
    {
        "id": "itpm-u1-trap-011",
        "unit": 1,
        "topic": "Sociotechnical Systems",
        "commonStudentMistake": "Viewing an IT project purely as software code and server hardware.",
        "correctAcademicTruth": "IT projects produce sociotechnical systems where technology and human organizational behavior/workflows interact inextricably.",
        "whyExaminerDeductsMarks": "Ignores the human, organizational, and adoption factors that determine whether an IT project succeeds.",
        "howToRemember": "IT system = Hardware + Software + People/Organization."
    },
    {
        "id": "itpm-u1-trap-012",
        "unit": 1,
        "topic": "Project Success Definition",
        "commonStudentMistake": "Believing that delivering all technical components automatically equals project success.",
        "correctAcademicTruth": "Technical delivery alone does not define success. A project must balance objectives and constraints while delivering intended business value to users.",
        "whyExaminerDeductsMarks": "A system built on time and budget that nobody uses is a business failure.",
        "howToRemember": "Success = Technical delivery + Constraint balance + Stakeholder business value."
    },
    {
        "id": "itpm-u1-trap-013",
        "unit": 1,
        "topic": "Lifecycle Skills Timing",
        "commonStudentMistake": "Believing human resource acquisition is most critical during project termination.",
        "correctAcademicTruth": "HR acquisition is vital during early Initiation/Planning. Team management is vital during Execution. Conflict management is required throughout all phases.",
        "whyExaminerDeductsMarks": "Shows lack of understanding of lifecycle staffing dynamics.",
        "howToRemember": "Staff early, manage during execution, resolve conflict always."
    },
    {
        "id": "itpm-u1-trap-014",
        "unit": 1,
        "topic": "Project Triggers",
        "commonStudentMistake": "Confusing project triggers with project milestones or final deliverables.",
        "correctAcademicTruth": "Triggers are early warning symptoms (indicators) signaling that an identified risk is emerging and contingency action must be activated.",
        "whyExaminerDeductsMarks": "Fails to grasp proactive risk monitoring.",
        "howToRemember": "Trigger = smoke before the fire (early warning sign)."
    }
]

print(f"Total Unit 1 Traps generated: {len(traps)}")

with open(f"{u1_dir}/traps.ts", "w") as f:
    f.write('import { ExamTrapItem } from "../../../../types";\n\n')
    f.write('export const unit1ExamTraps: ExamTrapItem[] = ' + json.dumps(traps, indent=2) + ';\n')

print("Wrote unit-1/traps.ts")

# -------------------------------------------------------------
# UNIT 1 CONCEPTS & SUMMARY SECTIONS
# -------------------------------------------------------------
concepts = [
    {
        "id": "itpm-u1-c-001",
        "term": "Project vs Operations",
        "simpleExplanation": "A project is a temporary effort creating a unique outcome, whereas operations are ongoing and repetitive.",
        "examDefinition": "A project is a temporary endeavor undertaken to create a unique product, service, or result. In contrast, operations are ongoing activities producing repetitive outputs to sustain business functions.",
        "whyItMatters": "Core foundational distinction that determines governance, staffing, budgeting, and accountability.",
        "howItWorks": "Projects have defined start and finish dates with temporary multi-disciplinary teams. Operations follow standardized processes with permanent departmental units.",
        "examKeywords": ["Temporary endeavor", "Unique deliverable", "Operations", "Ongoing and repetitive"],
        "commonTrap": "Do not confuse the temporary project with the resulting software product, which is durable.",
        "category": "Foundations"
    },
    {
        "id": "itpm-u1-c-002",
        "term": "Iron Triangle",
        "simpleExplanation": "The three interdependent constraints of Scope, Schedule, and Cost.",
        "examDefinition": "The classic project management model demonstrating the trade-off relationship between Scope, Schedule (time), and Cost (resources/budget). Altering one constraint unavoidably exerts pressure on the other two.",
        "whyItMatters": "Enables realistic stakeholder negotiation when demands change during the project.",
        "howItWorks": "More scope requires more time or cost. Shorter schedule demands additional resources or reduced scope. Reduced budget requires cutting scope or extending the timeline.",
        "examKeywords": ["Scope", "Schedule", "Cost", "Trade-offs", "Interdependency"],
        "commonTrap": "You cannot increase scope without impacting either schedule, cost, or quality.",
        "category": "Constraints"
    },
    {
        "id": "itpm-u1-c-003",
        "term": "Quintuple Project Constraints",
        "simpleExplanation": "The expanded 5-constraint model: Schedule, Cost, Context, Technical, Financing.",
        "examDefinition": "A five-constraint model (Gransberg & Jeong) that expands the Iron Triangle to encompass: Schedule, Cost, Context (cultural, regulatory, environmental factors), Technical (scope, design, architecture), and Financing (cash flow, funding viability).",
        "whyItMatters": "Prevents IT projects from failing due to external cultural or funding constraints overlooked by the Iron Triangle.",
        "howItWorks": "Technical corresponds to Scope. Context accounts for environmental and compliance realities. Financing tracks cash availability.",
        "examKeywords": ["Schedule", "Cost", "Context", "Technical", "Financing", "Gransberg & Jeong"],
        "commonTrap": "Only use the five in the course book. Do not substitute PMBOK Quality/Risk into this specific model.",
        "category": "Constraints"
    },
    {
        "id": "itpm-u1-c-004",
        "term": "Sociotechnical Systems",
        "simpleExplanation": "IT systems combine technology (hardware/software) with human social and organizational behavior.",
        "examDefinition": "An information system architecture that integrates physical hardware, software code, and human organizational processes/behaviors into an inseparable, interacting whole.",
        "whyItMatters": "Explains why technically flawless code fails if users reject the workflow or if organizational culture is ignored.",
        "howItWorks": "Hardware, software, and human operators co-determine system performance. The course book uses the tablet computer as a prime example.",
        "examKeywords": ["Hardware", "Software", "Human interaction", "Social structures", "Tablet example"],
        "commonTrap": "Never treat an IT project as purely software code; human and social workflows are integral parts.",
        "category": "Systems Theory"
    },
    {
        "id": "itpm-u1-c-005",
        "term": "Project Charter",
        "simpleExplanation": "The official document authorizing the project to exist and empowering the Project Manager.",
        "examDefinition": "The foundational initiation document approved by the Project Sponsor that formally authorizes the project's existence and grants the Project Manager authority to commit organizational resources.",
        "whyItMatters": "Without a signed charter, the project does not officially exist and resources cannot be legally committed.",
        "howItWorks": "Summarized by: WHY (justification), WHAT (scope), RISK (high-level), WHEN (milestones), MONEY (budget), APPROVAL (criteria), WHO (PM/Sponsor).",
        "examKeywords": ["Project Charter", "Official authorization", "Sponsor sign-off", "Resource commitment", "WHY WHAT RISK WHEN MONEY APPROVAL WHO"],
        "commonTrap": "The PM does not sign the charter to self-authorize; the Project Sponsor must sign it.",
        "category": "Governance"
    },
    {
        "id": "itpm-u1-c-006",
        "term": "Project Management Board (PMB) vs Technical Management Board (TMB)",
        "simpleExplanation": "PMB governs overall project direction and resources; TMB governs technical decisions and conflicts.",
        "examDefinition": "PMB is responsible for overall progress, resource allocation, budget baselines, plan deviations, and nontechnical disputes. TMB is responsible for technical decisions, unresolved engineering problems, and auditing deliverables against milestone criteria.",
        "whyItMatters": "Separates commercial and strategic steering from complex technical architecture decisions.",
        "howItWorks": "PMB advises the PM. TMB advises the Technical Coordinator. Technical conflicts escalate to TMB; budget and baseline disputes escalate to PMB.",
        "examKeywords": ["PMB", "TMB", "Overall governance", "Technical governance", "Milestone audits", "Nontechnical disputes"],
        "commonTrap": "PMB = overall/nontechnical governance. TMB = technical governance.",
        "category": "Governance"
    },
    {
        "id": "itpm-u1-c-007",
        "term": "Four-Step Risk Process (I-A-D-M)",
        "simpleExplanation": "The continuous lifecycle of risk management: Identify, Analyze, Decide, Monitor.",
        "examDefinition": "The four-step iterative risk management framework: 1. Identify potential uncertainties; 2. Analyze likelihood and severity; 3. Decide on response strategy (M-A-T-A); 4. Monitor triggers and risk status continuously.",
        "whyItMatters": "Ensures risks are surfaced early and handled systematically before turning into crises.",
        "howItWorks": "Identified risks enter the risk register, are scored on probability and impact, assigned a response strategy, and tracked via triggers.",
        "examKeywords": ["I-A-D-M", "Identify", "Analyze", "Decide", "Monitor", "Risk Register"],
        "commonTrap": "Remember the exact sequence: Identify → Analyze → Decide → Monitor.",
        "category": "Risk Management"
    },
    {
        "id": "itpm-u1-c-008",
        "term": "Four Risk Responses (M-A-T-A)",
        "simpleExplanation": "The four ways to treat an identified threat: Mitigate, Accept, Transfer, Avoid.",
        "examDefinition": "The four canonical risk treatment strategies: Mitigate (reduce probability or damage), Accept (tolerate low/acceptable risk), Transfer (shift financial impact to a third party), and Avoid (cancel or alter activity to eliminate risk).",
        "whyItMatters": "Gives project managers structured, deliberate responses rather than improvised panics.",
        "howItWorks": "Mitigate uses automated tests/redundancy; Accept monitors low risk; Transfer uses insurance/vendor SLAs; Avoid cancels unproven high-risk modules.",
        "examKeywords": ["Mitigate", "Accept", "Transfer", "Avoid", "M-A-T-A", "Risk response"],
        "commonTrap": "Transfer does not eliminate the risk event; it only shifts financial liability.",
        "category": "Risk Management"
    }
]

summary_sections = [
    {
        "title": "1.1 Defining IT Projects",
        "summaryParagraph": "Establishes the fundamental definition of a project as a temporary endeavor producing a unique deliverable, distinguishing it from ongoing routine operations. Explores why IT projects are particularly challenging due to sociotechnical complexity, requirement volatility, rapid technological shifts, and multi-level stakeholder information needs (operational, management knowledge, executive). Introduces the classic Iron Triangle (Scope, Schedule, Cost) and the expanded Quintuple Project Constraints (Schedule, Cost, Context, Technical, Financing).",
        "keyPoints": [
            "Project = Temporary endeavor undertaken to create a unique product, service, or result.",
            "Operations = Ongoing, repetitive activities sustaining business continuity.",
            "IT systems are Sociotechnical Systems linking hardware, software, and human/social behavior.",
            "Information needs: Operational (transactions), Management Knowledge (patterns/insights), Executive (strategic direction).",
            "Iron Triangle: Scope, Schedule, Cost trade-off dynamics.",
            "Quintuple Constraints: Schedule, Cost, Context, Technical, Financing (Gransberg & Jeong)."
        ],
        "examInsight": "CRITICAL EXAM FOCUS: The exact five Quintuple constraints (Schedule, Cost, Context, Technical, Financing) and sociotechnical systems definition."
    },
    {
        "title": "1.2 Overview of Typical Roles and Phases of IT Projects",
        "summaryParagraph": "Details the organizational hierarchy of large plan-driven projects from Sponsor and PMO down to Work-Package Leaders, Task Leaders, and Team Members. Examines the complementary steering roles of the Project Management Board (PMB) for overall governance and Technical Management Board (TMB) for technical governance. Explores the trade-offs of resource pooling (high utilization vs efficiency loss from context switching). Details the Five Generic Phases (Conception, Definition, Launch, Monitor/Control, Termination) highlighting that Monitor & Control runs in parallel. Establishes the Project Charter (WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO) as the official authorization of a project.",
        "keyPoints": [
            "Hierarchy: Sponsor/PMO → PM → Technical Coordinator → WPL → Task Leader → Team Member.",
            "PMB governs overall progress, budget, deviations, and nontechnical disputes.",
            "TMB governs technical decisions, engineering conflicts, and milestone audits.",
            "Resource pooling improves specialist utilization but reduces efficiency due to repeated context switching.",
            "Five Generic Phases: Initiation, Planning, Execution, Monitor/Control, Termination.",
            "Monitor & Control runs concurrently with much of project execution.",
            "Signing the Project Charter officially authorizes the project to exist and commits resources."
        ],
        "examInsight": "CRITICAL EXAM FOCUS: PMB vs TMB distinction, Project Charter signing = official authorization, and Monitor & Control running in parallel."
    },
    {
        "title": "1.3 Risks and Challenges of IT Projects",
        "summaryParagraph": "Defines project risk as an uncertain event capable of positive impact (opportunity) or negative impact (threat). Evaluates risk through Probability × Impact, emphasizing that risk changes dynamically over time as knowledge increases. Classifies IT risks into Technological, Organizational, and Stakeholder categories. Formulates risk appetite, tolerance, and threshold (below = acceptable, above = not tolerated). Establishes the continuous Four-Step Risk Management Process (I-A-D-M: Identify, Analyze, Decide, Monitor) and the Four Risk Responses (M-A-T-A: Mitigate, Accept, Transfer, Avoid).",
        "keyPoints": [
            "Risk = Uncertain event affecting objectives positively (Opportunity) or negatively (Threat).",
            "Risk Exposure = Probability of occurrence × Magnitude of impact/damage.",
            "Risk Threshold: Below is acceptable/tolerable; above is NOT tolerated (demands action).",
            "Four-Step Process: IDENTIFY → ANALYZE → DECIDE → MONITOR (I-A-D-M).",
            "Four Responses: MITIGATE, ACCEPT, TRANSFER, AVOID (M-A-T-A)."
        ],
        "examInsight": "CRITICAL EXAM FOCUS: Positive risk = opportunity; I-A-D-M sequence; M-A-T-A responses; threshold rule."
    },
    {
        "title": "1.4 Role of an IT Project Manager",
        "summaryParagraph": "Delineates the core competencies and stewardship expected of an IT Project Manager. Divides capabilities into Soft/Qualitative (leadership, negotiation, trustworthiness, communication) and Hard/Quantitative (scheduling, baseline tracking, quantitative variance control). Emphasizes that understanding domain problems, leadership, and continuous learning are far more important than being the best programmer. Details how skill demands shift across the lifecycle (HR acquisition early, team management during execution, conflict management throughout). Defines project triggers as early warning symptoms prompting contingency response.",
        "keyPoints": [
            "Soft Skills: Leadership, strategic management, negotiation, communication, trust, conflict resolution.",
            "Hard Skills: Deliverable formulation, schedule construction, quantitative variance control.",
            "Domain problem understanding & continuous learning > pure programming specialization.",
            "Lifecycle shifts: HR acquisition in early phases; team management in execution; conflict management throughout all phases.",
            "Project Triggers: Early warning symptoms indicating an identified risk is emerging."
        ],
        "examInsight": "CRITICAL EXAM FOCUS: PM skills shift across the lifecycle; conflict management is required throughout all phases; domain analysis over coding."
    }
]

with open(f"{u1_dir}/concepts.ts", "w") as f:
    f.write('import { KeyConcept, UnitSummarySection } from "../../../../types";\n\n')
    f.write('export const unit1Concepts: KeyConcept[] = ' + json.dumps(concepts, indent=2) + ';\n\n')
    f.write('export const unit1SummarySections: UnitSummarySection[] = ' + json.dumps(summary_sections, indent=2) + ';\n')

print("Wrote unit-1/concepts.ts")

# -------------------------------------------------------------
# UNIT 1 VISUALS CONFIGURATION
# -------------------------------------------------------------
visuals = {
    "ironTriangle": {
        "nodes": [
            { "id": "scope", "name": "Scope", "description": "Features, deliverables, and technical boundaries. Increasing scope requires more time or cost.", "impact": "More scope → more time/resources" },
            { "id": "schedule", "name": "Schedule", "description": "Timeframe, deadlines, and milestone dates. Compressing schedule requires more resources/cost.", "impact": "Shorter schedule → higher resource cost" },
            { "id": "cost", "name": "Cost", "description": "Budget, staff, and financial resources. Reduced budget requires cutting scope or extending time.", "impact": "Reduced budget → smaller realizable scope" }
        ]
    },
    "quintupleConstraints": {
        "constraints": [
            { "name": "Schedule", "category": "Time", "description": "Delivery dates, activity durations, and milestone sequencing." },
            { "name": "Cost", "category": "Budget", "description": "Internal resource costs, expenditures, and direct project spending." },
            { "name": "Context", "category": "Environment", "description": "Operating environment: cultural nuances, organizational politics, customization, and legal/regulatory compliance." },
            { "name": "Technical", "category": "Scope", "description": "Technical design, architecture, system scope, and engineering specifications (corresponds to Scope in Iron Triangle)." },
            { "name": "Financing", "category": "Capital", "description": "Cash flow timing, capital availability, and institutional funding sources." }
        ]
    },
    "hierarchy": {
        "tiers": [
            { "level": 1, "role": "Project Sponsor / PMO", "description": "Business case ownership, funding champions, standard templates & governance support", "adjacent": "Executive Governance" },
            { "level": 2, "role": "Project Manager", "description": "Overall project accountability, baseline tracking, upward reporting, meeting leadership", "adjacent": "Project Management Board (PMB) [Overall / Nontechnical Governance]" },
            { "level": 3, "role": "Technical Coordinator", "description": "Technical lead supporting PM, monitors specifications, oversees WPLs, maintains tech library", "adjacent": "Technical Management Board (TMB) [Technical Governance & Audits]" },
            { "level": 4, "role": "Work-Package Leaders (WPL)", "description": "Coordination, deliverables, and progress reporting of assigned work packages", "adjacent": None },
            { "level": 5, "role": "Task Leaders", "description": "Specific task-level coordination and day-to-day work guidance", "adjacent": None },
            { "level": 6, "role": "Team Members", "description": "Specialized technical execution: programming, testing, UI design, documentation", "adjacent": None }
        ]
    },
    "fivePhases": [
        { "phase": 1, "name": "Conception / Initiation", "focus": "Client need, preliminary requirements, feasibility, sponsor appointed, kick-off, Project Charter signed." },
        { "phase": 2, "name": "Definition / Planning", "focus": "Scope baseline (WBS), schedule baseline, cost baseline, risk register, integrated project plan." },
        { "phase": 3, "name": "Launch / Execution", "focus": "Realizing deliverables, acquiring infrastructure, quality assurance, stakeholder engagement." },
        { "phase": 4, "name": "Monitor / Control", "focus": "PARALLEL EXECUTION: Continuous tracking against baselines, variance calculation, corrective action." },
        { "phase": 5, "name": "Termination", "focus": "Final deliverable sign-off, releasing resources, post-implementation review, contract archiving." }
    ],
    "riskProcessIADM": [
        { "step": 1, "code": "I", "name": "IDENTIFY", "desc": "Detect and catalog potential threats and opportunities in the Risk Register." },
        { "step": 2, "code": "A", "name": "ANALYZE", "desc": "Evaluate Probability of occurrence × Magnitude of impact/benefit." },
        { "step": 3, "code": "D", "name": "DECIDE", "desc": "Formulate response strategy (M-A-T-A), assign risk owners, and set contingency reserves." },
        { "step": 4, "code": "M", "name": "MONITOR", "desc": "Continuously track active risks and project triggers throughout execution." }
    ],
    "riskResponsesMATA": [
        { "code": "M", "name": "MITIGATE", "action": "Reduce probability and/or damage", "example": "Automated regression tests and redundant server failover." },
        { "code": "A", "name": "ACCEPT", "action": "Acknowledge and retain low risk", "example": "Tolerating minor cosmetic glitches on obsolete browsers." },
        { "code": "T", "name": "TRANSFER", "action": "Shift financial liability to third party", "example": "Purchasing commercial insurance or cloud provider SLAs." },
        { "code": "A", "name": "AVOID", "action": "Cancel or alter activity to eliminate risk", "example": "Deliberately canceling an unproven AI module." }
    ]
}

with open(f"{u1_dir}/visuals.ts", "w") as f:
    f.write('export const unit1Visuals = ' + json.dumps(visuals, indent=2) + ';\n')

print("Wrote unit-1/visuals.ts")

# -------------------------------------------------------------
# UNIT 1 INDEX
# -------------------------------------------------------------
with open(f"{u1_dir}/index.ts", "w") as f:
    f.write('''import { UnitData } from "../../../../types";
import { unit1Mcqs } from "./mcqs";
import { unit1Flashcards } from "./flashcards";
import { unit1ImportantQuestions } from "./qa";
import { unit1Concepts, unit1SummarySections } from "./concepts";
import { unit1ExamTraps } from "./traps";
import { unit1Visuals } from "./visuals";

export { unit1Mcqs, unit1Flashcards, unit1ImportantQuestions, unit1Concepts, unit1SummarySections, unit1ExamTraps, unit1Visuals };

export const unit1Data: UnitData = {
  id: 1,
  code: "DLMBITPAM01-U01",
  title: "Introduction: Characteristics of IT Projects",
  subtitle: "Defining IT projects, constraints, roles, project phases, risks, and the competencies of an IT project manager.",
  estimatedTime: "2 hours",
  color: "from-indigo-600 to-violet-700",
  gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
  badge: "Unit 1",
  overview: "Official curriculum for Unit 1 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers fundamental definitions, Iron Triangle & Quintuple constraints, large-project roles (PMB vs TMB), generic project phases, project charter, I-A-D-M risk management, M-A-T-A risk responses, and project manager competencies.",
  summarySections: unit1SummarySections,
  keyConcepts: unit1Concepts,
  cheatSheet: {
    mustMemorize: [
      "Project = Temporary endeavor undertaken to create a unique product, service, or result.",
      "Operations = Ongoing, repetitive activities sustaining business functions.",
      "Iron Triangle = Scope, Schedule, Cost.",
      "Quintuple Constraints = Schedule, Cost, Context, Technical, Financing.",
      "Sociotechnical System = Hardware + Software + Human/Social Interaction.",
      "Hierarchy: Sponsor/PMO → PM → Technical Coordinator → WPL → Task Leader → Team Member.",
      "PMB = Overall/nontechnical governance; TMB = Technical governance & milestone audits.",
      "Resource Pooling: Improves specialist utilization but reduces efficiency due to repeated context switching.",
      "Five Phases: Conception/Initiation, Definition/Planning, Launch/Execution, Monitor/Control, Termination.",
      "Monitor & Control runs in parallel with much of project execution.",
      "Signing the Project Charter officially authorizes the project and commits resources.",
      "Charter Formula: WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO.",
      "Risk = Uncertain event affecting objectives positively (Opportunity) or negatively (Threat).",
      "Threshold Rule: Below is acceptable/tolerable; above is NOT tolerated (action required).",
      "Risk Process (I-A-D-M): Identify → Analyze → Decide → Monitor.",
      "Risk Responses (M-A-T-A): Mitigate, Accept, Transfer, Avoid.",
      "PM Competencies: Understanding domain problems and continuous learning > pure coding specialization.",
      "Lifecycle PM Skills: HR acquisition early; team management during execution; conflict management throughout all phases.",
      "Project Triggers = Early warning indicators/symptoms prompting risk response."
    ],
    coreDefinitions: [
      { term: "Project", definition: "A temporary endeavor undertaken to create a unique product, service, or result.", examNote: "Temporary refers to endeavor; deliverable is durable." },
      { term: "Operations", definition: "Ongoing and repetitive organizational activities sustaining day-to-day business continuity.", examNote: "Contrast with temporary project." },
      { term: "Sociotechnical System", definition: "An interconnected system linking hardware, software, and human/social behavior.", examNote: "Tablet computer example." },
      { term: "Project Charter", definition: "Foundational initiation document authorized by the Sponsor establishing the project.", examNote: "Signing officially authorizes project." },
      { term: "Project Risk", definition: "An uncertain event/condition that, if it occurs, has a positive (opportunity) or negative (threat) effect.", examNote: "Positive risk = opportunity." },
      { term: "Risk Threshold", definition: "Specific boundary: below is acceptable, above is not tolerated.", examNote: "Governs mandatory intervention." },
      { term: "Project Triggers", definition: "Early warning indicators/symptoms signaling that an identified risk is emerging.", examNote: "Activates contingency plan." }
    ],
    importantNumbers: [
      { number: "3", label: "Iron Triangle Constraints", context: "Scope, Schedule, Cost." },
      { number: "5", label: "Quintuple Project Constraints", context: "Schedule, Cost, Context, Technical, Financing." },
      { number: "5", label: "Generic Project Phases", context: "Initiation, Planning, Execution, Monitor/Control, Termination." },
      { number: "4", label: "Risk Management Steps", context: "Identify, Analyze, Decide, Monitor (I-A-D-M)." },
      { number: "4", label: "Risk Response Strategies", context: "Mitigate, Accept, Transfer, Avoid (M-A-T-A)." }
    ],
    frameworkNames: [
      { acronym: "I-A-D-M", fullName: "Risk Management Process", focus: "Identify → Analyze → Decide → Monitor." },
      { acronym: "M-A-T-A", fullName: "Risk Response Strategies", focus: "Mitigate, Accept, Transfer, Avoid." },
      { acronym: "PMB", fullName: "Project Management Board", focus: "Overall and nontechnical governance, progress, budget, deviations." },
      { acronym: "TMB", fullName: "Technical Management Board", focus: "Technical governance, architecture, technical disputes, milestone audits." },
      { acronym: "PMO", fullName: "Project Management Office", focus: "Organizational support, standardized templates, cross-project resource coordination." }
    ],
    processes: [
      {
        name: "I-A-D-M Risk Lifecycle",
        steps: [
            "1. Identify: Detect and catalog uncertainties in Risk Register",
            "2. Analyze: Evaluate Probability × Magnitude of impact/benefit",
            "3. Decide: Select M-A-T-A response strategy and allocate reserves",
            "4. Monitor: Continuously track project triggers and register updates"
        ],
        description: "Continuous risk management process across the IT project lifecycle."
      },
      {
        name: "Generic Project Lifecycle",
        steps: [
            "1. Conception/Initiation: Customer need, feasibility, sponsor appointed, charter signed",
            "2. Definition/Planning: Baselines established (scope/schedule/cost), subsidiary plans",
            "3. Launch/Execution: Deliverables realized, team acquired, quality assurance",
            "4. Monitor/Control: Runs in parallel, measuring metrics, controlling variances",
            "5. Termination: Final acceptance, staff released, lessons learned, closure"
        ],
        description: "Five generic phases of an IT project."
      }
    ],
    comparisons: [
      {
        conceptA: "Project",
        conceptB: "Operations",
        comparisonPoints: [
          { criterion: "Duration", detailA: "Temporary: definite start and end date", detailB: "Ongoing: permanent and indefinite" },
          { criterion: "Output", detailA: "Unique product, service, or result", detailB: "Standardized, repetitive goods or services" },
          { criterion: "Purpose", detailA: "Strategic organizational change/innovation", detailB: "Business continuity and daily functions" }
        ]
      },
      {
        conceptA: "PMB",
        conceptB: "TMB",
        comparisonPoints: [
          { criterion: "Jurisdiction", detailA: "Overall progress, budget, nontechnical disputes", detailB: "Technical architecture, engineering conflicts" },
          { criterion: "Partner", detailA: "Advises Project Manager", detailB: "Advises Technical Coordinator" },
          { criterion: "Audits", detailA: "Schedule and cost baseline variances", detailB: "Deliverable technical quality against milestone criteria" }
        ]
      }
    ],
    examTraps: [
      { trap: "Believing temporary means the software will only last a short time.", truth: "Temporary applies to the project endeavor; the software deliverable is intended to be durable." },
      { trap: "Assuming risk is only negative.", truth: "Positive risk is called an Opportunity and should be maximized." },
      { trap: "Thinking Monitor & Control is a short phase at the end.", truth: "Monitor & Control runs in parallel with much of the project work." },
      { trap: "Confusing PMB and TMB.", truth: "PMB = overall/nontechnical governance. TMB = technical governance." },
      { trap: "Thinking the PM self-authorizes the project.", truth: "The Project Sponsor signs the Project Charter to officially authorize the project." }
    ],
    memoryShortcuts: [
      { acronym: "WHY+WHAT+RISK+WHEN+MONEY+APPROVAL+WHO", meaning: "Project Charter essential contents", usage: "Memorize for charter descriptive exam questions." },
      { acronym: "I-A-D-M", meaning: "Identify, Analyze, Decide, Monitor", usage: "Four-step continuous risk management lifecycle." },
      { acronym: "M-A-T-A", meaning: "Mitigate, Accept, Transfer, Avoid", usage: "Four canonical risk response strategies." }
    ]
  },
  importantQuestions: unit1ImportantQuestions,
  flashcards: unit1Flashcards,
  mcqs: unit1Mcqs,
  activeRecall: [
    { id: "u1-ar-01", question: "What two words distinguish a project from operations?", answer: "Temporary and unique.", keywords: ["Temporary", "Unique"] },
    { id: "u1-ar-02", question: "Name the five Quintuple constraints in the course book.", answer: "Schedule, Cost, Context, Technical, Financing.", keywords: ["Schedule", "Cost", "Context", "Technical", "Financing"] },
    { id: "u1-ar-03", question: "Which governance board handles unresolved technical problems?", answer: "The Technical Management Board (TMB).", keywords: ["TMB", "Technical Management Board"] },
    { id: "u1-ar-04", question: "What officially authorizes a project to exist?", answer: "Signing the Project Charter by the Project Sponsor.", keywords: ["Signing", "Project Charter", "Sponsor", "Authorizes"] },
    { id: "u1-ar-05", question: "What are the four risk responses in M-A-T-A?", answer: "Mitigate, Accept, Transfer, Avoid.", keywords: ["Mitigate", "Accept", "Transfer", "Avoid"] }
  ],
  completionChecklist: [
    "Define a project and distinguish it from ongoing operations",
    "Explain the Iron Triangle and Quintuple constraints (Schedule, Cost, Context, Technical, Financing)",
    "Explain why IT systems are sociotechnical systems",
    "Draw the large-project hierarchy and distinguish PMB from TMB",
    "Explain resource pooling utilization vs efficiency loss from context switching",
    "Name the five generic project phases and explain parallel monitoring",
    "State the contents of a Project Charter and explain its authorization effect",
    "Define project risk, threat, and opportunity",
    "Execute the I-A-D-M risk management process and M-A-T-A responses",
    "Distinguish soft and hard PM skills and explain lifecycle skill shifts"
  ]
};
''')

print("Wrote unit-1/index.ts")
print("Unit 1 Generation Complete!")
