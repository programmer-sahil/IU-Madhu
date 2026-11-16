import json

s63_data = [
    {
        "id": "itpm-u6-s63-mcq-061", "topic": "Multi-Project Hierarchy Tiers", "difficulty": "easy",
        "question": "What is the three-tier governance hierarchy of multi-project management as shown in Figure 46 of the course book?",
        "options": {
            "A": "Portfolio -> Programme -> Project",
            "B": "Scrum Master -> Product Owner -> Developer",
            "C": "Initiating -> Planning -> Executing",
            "D": "Inception -> Elaboration -> Construction"
        },
        "correctAnswer": "A",
        "explanation": "Figure 46 illustrates the multi-project hierarchical reporting structure: Portfolio management at the strategic top, Programme management coordinating related projects in the middle, and individual Projects delivering specific outputs at the operational base.",
        "whyOthersAreWrong": [
            "Scrum roles represent agile team accountabilities.",
            "Initiating, Planning, Executing are PMBOK process groups.",
            "Inception, Elaboration, Construction are RUP phases."
        ],
        "examTrap": "Top to bottom: Portfolio (strategy) -> Programme (benefits) -> Project (outputs).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Multi-Project Hierarchy Tiers"
    },
    {
        "id": "itpm-u6-s63-mcq-062", "topic": "Portfolio Management Core Focus", "difficulty": "medium",
        "question": "What is the primary governing question and focus of 'Portfolio Management'?",
        "options": {
            "A": "'Are we doing the right work?' — aligning investments with corporate strategic objectives, prioritizing programs, and balancing overall organizational risk",
            "B": "'How do we code this database query in SQL?' — low-level technical software programming",
            "C": "'Who will approve the developer's vacation request for next Tuesday?' — routine administrative HR tasks",
            "D": "'How many lines of code were written before lunch?' — developer activity monitoring"
        },
        "correctAnswer": "A",
        "explanation": "Portfolio management ensures the organization invests its limited capital, staff, and executive attention in the right collection of programs and projects to achieve strategic business goals.",
        "whyOthersAreWrong": [
            "SQL query optimization is an engineering developer task.",
            "Vacation approvals are routine line-manager duties.",
            "Lines of code is an obsolete developer metric."
        ],
        "examTrap": "Portfolio = *Doing the RIGHT things* (strategic alignment). Project = *Doing things RIGHT* (operational execution).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Portfolio Management Core Focus"
    },
    {
        "id": "itpm-u6-s63-mcq-063", "topic": "Programme Management Core Focus", "difficulty": "medium",
        "question": "How does 'Programme Management' differ from managing multiple independent projects?",
        "options": {
            "A": "A Programme coordinates related projects to obtain synergistic business benefits and control that would not be available from managing them individually",
            "B": "A Programme is just an informal synonym for a single project that runs longer than two years",
            "C": "A Programme is managed exclusively by artificial intelligence without human oversight",
            "D": "A Programme requires eliminating all testing and documentation"
        },
        "correctAnswer": "A",
        "explanation": "Programmes group related projects to achieve overarching strategic benefits and operational capabilities (e.g. an airline launching an integrated customer loyalty, ticketing, and mobile app program).",
        "whyOthersAreWrong": [
            "A programme is not just a long project; it coordinates multiple inter-dependent projects.",
            "Human executive programme managers lead programmes.",
            "Testing and documentation are vital across all projects in a programme."
        ],
        "examTrap": "Programme = *Benefits realization* and inter-project synergy.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Programme Management Core Focus"
    },
    {
        "id": "itpm-u6-s63-mcq-064", "topic": "Project Level Deliverable Focus", "difficulty": "easy",
        "question": "Within the multi-project hierarchy, what is the primary focus of an individual 'Project'?",
        "options": {
            "A": "Delivering specific defined outputs/deliverables within approved scope, schedule, and cost constraints",
            "B": "Setting the 10-year strategic corporate vision for the enterprise",
            "C": "Purchasing commercial real estate for corporate headquarters",
            "D": "Issuing quarterly dividend payments to company shareholders"
        },
        "correctAnswer": "A",
        "explanation": "At the operational base of the hierarchy, a project is a temporary endeavor focused on producing defined deliverables within Iron Triangle constraints.",
        "whyOthersAreWrong": [
            "10-year corporate vision is executive leadership / portfolio concern.",
            "Real estate purchasing is corporate facilities / portfolio investment.",
            "Shareholder dividends are corporate finance / treasury actions."
        ],
        "examTrap": "Projects deliver *outputs*; Programmes deliver *benefits*; Portfolios deliver *strategic alignment*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Project Level Deliverable Focus"
    },
    {
        "id": "itpm-u6-s63-mcq-065", "topic": "Three PMO Structural Types", "difficulty": "easy",
        "question": "Which of the following correctly identifies the three structural types of Project Management Offices (PMOs) categorized by their level of control?",
        "options": {
            "A": "Supportive, Controlling, Directive",
            "B": "Initiating, Planning, Closing",
            "C": "Functional, Matrix, Projectized",
            "D": "Weak, Balanced, Strong"
        },
        "correctAnswer": "A",
        "explanation": "PMBOK and modern PM standards classify PMOs into three distinct models based on authority: Supportive (low control), Controlling (moderate control), and Directive (high control).",
        "whyOthersAreWrong": [
            "Initiating, Planning, Closing are process groups.",
            "Functional, Matrix, Projectized are organizational structures.",
            "Weak, Balanced, Strong are sub-types of matrix organizations."
        ],
        "examTrap": "Do not confuse PMO types (Supportive, Controlling, Directive) with organizational structures (Functional, Matrix, Projectized).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Three PMO Structural Types"
    },
    {
        "id": "itpm-u6-s63-mcq-066", "topic": "Supportive PMO Characteristics", "difficulty": "medium",
        "question": "What is the defining role and level of control of a 'Supportive PMO'?",
        "options": {
            "A": "Acts as a consultative repository providing templates, best practices, training, and lessons learned; exerts a LOW level of control",
            "B": "Directly assigns all project managers and directly manages daily project tasks; exerts HIGH control",
            "C": "Audits projects and enforces mandatory disciplinary fines; exerts MODERATE control",
            "D": "Replaces the board of directors and controls company shares"
        },
        "correctAnswer": "A",
        "explanation": "A Supportive PMO serves as a project repository and center of excellence, offering templates, guidance, and training. It advises project teams without enforcing mandatory compliance (Low Control).",
        "whyOthersAreWrong": [
            "Directly managing projects and assigning PMs is a Directive PMO.",
            "Mandating compliance and auditing describes a Controlling PMO.",
            "Controlling company shares is corporate governance."
        ],
        "examTrap": "Supportive PMO = Consultative role with LOW control.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Supportive PMO Characteristics"
    },
    {
        "id": "itpm-u6-s63-mcq-067", "topic": "Controlling PMO Characteristics", "difficulty": "medium",
        "question": "What characterizes a 'Controlling PMO' in an enterprise setting?",
        "options": {
            "A": "Provides support while mandating compliance through specific project management frameworks, templates, tools, and governance audits; exerts a MODERATE level of control",
            "B": "Acts strictly as an optional library with zero authority; exerts LOW control",
            "C": "Takes total direct management of all projects away from project managers; exerts TOTAL control",
            "D": "Outsources all software development to overseas vendors"
        },
        "correctAnswer": "A",
        "explanation": "A Controlling PMO provides support but requires adherence to organizational project management standards, reporting formats, and governance audits (Moderate Control).",
        "whyOthersAreWrong": [
            "Optional library with zero authority is a Supportive PMO.",
            "Taking direct management of projects is a Directive PMO.",
            "Outsourcing is a procurement strategy, not a PMO model."
        ],
        "examTrap": "Controlling PMO = Support + Mandated Compliance (MODERATE control).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Controlling PMO Characteristics"
    },
    {
        "id": "itpm-u6-s63-mcq-068", "topic": "Directive PMO Characteristics", "difficulty": "medium",
        "question": "How does a 'Directive PMO' operate within an organization?",
        "options": {
            "A": "It directly manages projects by assigning project managers who report directly to the PMO; exerts a HIGH level of control",
            "B": "It only provides optional templates when requested by email",
            "C": "It is an external consulting firm that audits corporate financial statements",
            "D": "It only exists for projects with fewer than three developers"
        },
        "correctAnswer": "A",
        "explanation": "A Directive PMO takes direct operational control: project managers are employed by and report directly to the PMO, ensuring standard execution across all enterprise projects (High Control).",
        "whyOthersAreWrong": [
            "Optional templates describe a Supportive PMO.",
            "Financial audit is handled by CPA accounting firms.",
            "Directive PMOs typically manage large enterprise portfolios, not 3-person projects."
        ],
        "examTrap": "Directive PMO = PMs report directly to the PMO (HIGH control).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Directive PMO Characteristics"
    },
    {
        "id": "itpm-u6-s63-mcq-069", "topic": "Inter-Project Resource Contention", "difficulty": "medium",
        "question": "What is a primary operational benefit of multi-project management when multiple projects require the same specialized technical resources (e.g. senior database architects)?",
        "options": {
            "A": "Provides centralized visibility to balance resource allocations, prevent overallocation, and schedule shared specialists across projects",
            "B": "Eliminates the need for any technical specialists by automating all database work",
            "C": "Forces project managers to engage in physical combat for specialist time",
            "D": "Cancels all projects except the single lowest-cost project"
        },
        "correctAnswer": "A",
        "explanation": "Multi-project governance (via PMO or Program/Portfolio management) resolves resource contention by leveling specialist workloads across projects according to strategic priority.",
        "whyOthersAreWrong": [
            "Automation aids routine tasks but does not eliminate need for specialized architects.",
            "Physical combat is absurd.",
            "Cancelling all projects destroys corporate capability."
        ],
        "examTrap": "Multi-project management resolves resource bottlenecks through strategic resource leveling.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Inter-Project Resource Contention"
    },
    {
        "id": "itpm-u6-s63-mcq-070", "topic": "Program Benefit Realization Timing", "difficulty": "hard",
        "question": "When are the benefits of a Programme typically realized compared to individual project outputs?",
        "options": {
            "A": "Benefits often emerge iteratively throughout the programme lifecycle and continue well after individual component projects have closed",
            "B": "Benefits are realized strictly on the very first day of project kickoff",
            "C": "Benefits can only be measured after the company is liquidated",
            "D": "Benefits must be realized within 15 minutes of project closing"
        },
        "correctAnswer": "A",
        "explanation": "Projects deliver outputs (e.g. software, trained staff). Programmes orchestrate these outputs into operational capabilities that generate business benefits over an extended operational horizon.",
        "whyOthersAreWrong": [
            "Benefits cannot be realized at kickoff before deliverables exist.",
            "Liquidation terminates the business, destroying benefits.",
            "15 minutes is insufficient to capture operational business ROI."
        ],
        "examTrap": "Outputs are immediate project deliverables; Benefits are longer-term business outcomes tracked by Programme management.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Program Benefit Realization Timing"
    },
    {
        "id": "itpm-u6-s63-mcq-071", "topic": "Multi-Project Strategic Alignment", "difficulty": "medium",
        "question": "What is the primary risk if an organization runs dozens of IT projects concurrently without centralized Portfolio Management?",
        "options": {
            "A": "Projects duplicate effort, work at cross-purposes, compete destructively for scarce resources, and fail to advance corporate strategic goals",
            "B": "Computer servers will automatically delete all operating systems",
            "C": "Project managers will lose their academic degrees",
            "D": "The company will be barred from using the internet"
        },
        "correctAnswer": "A",
        "explanation": "Without portfolio coordination, projects operate as uncoordinated silos, leading to duplicated systems, incompatible architectures, resource gridlock, and wasted capital.",
        "whyOthersAreWrong": [
            "Operating systems are unaffected by organizational governance.",
            "Academic degrees are not revoked due to uncoordinated corporate projects.",
            "Internet access is unrelated to portfolio alignment."
        ],
        "examTrap": "Uncoordinated projects lead to strategic drift and destructive resource competition.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Multi-Project Strategic Alignment"
    },
    {
        "id": "itpm-u6-s63-mcq-072", "topic": "PMO Lessons Learned Repository", "difficulty": "easy",
        "question": "How does a PMO facilitate organizational learning across different project teams?",
        "options": {
            "A": "By maintaining an accessible central repository of historical project archives, metrics, templates, and lessons learned",
            "B": "By publicly shaming project managers who make mistakes in the company newsletter",
            "C": "By forcing project managers to memorize all 47 PMBOK processes word-for-word",
            "D": "By deleting all documentation immediately upon project closure"
        },
        "correctAnswer": "A",
        "explanation": "A central PMO repository ensures that successful practices and painful mistakes are documented, analyzed, and reused so subsequent projects do not reinvent the wheel.",
        "whyOthersAreWrong": [
            "Public shaming destroys psychological safety and encourages teams to conceal mistakes.",
            "Rote memorization does not foster pragmatic problem solving.",
            "Deleting documentation prevents organizational learning."
        ],
        "examTrap": "The PMO acts as the *organizational memory* of past project performance.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "PMO Lessons Learned Repository"
    },
    {
        "id": "itpm-u6-s63-mcq-073", "topic": "Portfolio Risk Diversification", "difficulty": "hard",
        "question": "How does Portfolio Risk Management differ from Project Risk Management?",
        "options": {
            "A": "Portfolio Risk balances aggregate organizational exposure across multiple initiatives (e.g. balancing high-risk innovation with low-risk compliance); Project Risk focuses on threats/opportunities for a single project",
            "B": "Portfolio Risk only evaluates weather disasters; Project Risk only evaluates computer bugs",
            "C": "Portfolio Risk is managed by software developers; Project Risk is managed by the CEO",
            "D": "There is no difference; the terms are completely interchangeable"
        },
        "correctAnswer": "A",
        "explanation": "Project risk focuses on specific events affecting project objectives. Portfolio risk takes an aggregate investment perspective, balancing the risk-reward profile of the entire collection of organizational initiatives.",
        "whyOthersAreWrong": [
            "Both evaluate broad technical, commercial, and environmental risks.",
            "Portfolio risk is managed by executives/portfolio managers; project risk by project managers.",
            "They are distinct levels of risk governance."
        ],
        "examTrap": "Portfolio risk = aggregate balance of organizational investments. Project risk = tactical threat/opportunity management for one project.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Portfolio Risk Diversification"
    },
    {
        "id": "itpm-u6-s63-mcq-074", "topic": "Programme Dependency Management", "difficulty": "medium",
        "question": "What is a primary responsibility of a Programme Manager regarding project interfaces?",
        "options": {
            "A": "Managing inter-project dependencies, resolving cross-project interface conflicts, and coordinating release schedules",
            "B": "Writing daily unit test code for each project team",
            "C": "Serving as the sole developer on the critical path of every project",
            "D": "Approving every individual line of code written across all projects"
        },
        "correctAnswer": "A",
        "explanation": "A Programme Manager focuses on the seams between projects: ensuring outputs from Project A (e.g. new database) are ready when needed as inputs for Project B (e.g. new mobile app).",
        "whyOthersAreWrong": [
            "Coding unit tests is a developer task within individual projects.",
            "Programme managers coordinate governance; they do not write critical path code.",
            "Code reviews are handled by peer engineers."
        ],
        "examTrap": "Program managers manage *inter-project dependencies* and release synergies.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Programme Dependency Management"
    },
    {
        "id": "itpm-u6-s63-mcq-075", "topic": "Portfolio Balancing Techniques", "difficulty": "medium",
        "question": "In multi-project portfolio management, what does 'portfolio balancing' typically involve?",
        "options": {
            "A": "Balancing investments across short-term vs long-term initiatives, high-risk vs low-risk projects, and innovation vs maintenance",
            "B": "Ensuring every project has exactly the same number of lines of code",
            "C": "Requiring every project manager to weigh exactly the same on a physical scale",
            "D": "Allocating exactly equal funding to every department regardless of strategic priority"
        },
        "correctAnswer": "A",
        "explanation": "Portfolio balancing optimizes the mix of projects to ensure the enterprise sustains current operational stability while investing in strategic future growth.",
        "whyOthersAreWrong": [
            "Lines of code cannot be balanced equally across disparate systems.",
            "Physical weight is absurd.",
            "Equal funding across all departments ignores strategic business priorities."
        ],
        "examTrap": "Portfolio balancing is about the *strategic mix* of investments (risk vs return, run vs grow).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Portfolio Balancing Techniques"
    },
    {
        "id": "itpm-u6-s63-mcq-076", "topic": "PMO Authority and Organizational Culture", "difficulty": "hard",
        "question": "Why might a newly established 'Directive PMO' face severe resistance in a company with a strong decentralized, entrepreneurial culture?",
        "options": {
            "A": "Because project managers and department heads perceive the direct assignment of PMs and centralized control as an infringement on their autonomy",
            "B": "Because Directive PMOs refuse to use computers",
            "C": "Because labor unions legally prohibit all project management offices",
            "D": "Because Directive PMOs require developers to wear formal military uniforms"
        },
        "correctAnswer": "A",
        "explanation": "A Directive PMO introduces high centralized control and strict governance. In entrepreneurial or decentralized cultures, this sudden loss of local autonomy generates intense political friction.",
        "whyOthersAreWrong": [
            "Directive PMOs utilize advanced enterprise software tools.",
            "Labor unions do not ban PMOs.",
            "Military uniforms are absurd."
        ],
        "examTrap": "A PMO model must match organizational culture: forcing a Directive PMO on an entrepreneurial culture invites organizational rejection.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "PMO Authority and Organizational Culture"
    },
    {
        "id": "itpm-u6-s63-mcq-077", "topic": "Multi-Project Priority Shifts", "difficulty": "medium",
        "question": "When corporate strategy shifts abruptly due to a major macroeconomic event, what multi-project entity decides which projects are paused, accelerated, or terminated?",
        "options": {
            "A": "Portfolio Governance / Steering Committee",
            "B": "Individual project team Scrum Masters",
            "C": "Junior software developers voting on an internet forum",
            "D": "External hardware server vendors"
        },
        "correctAnswer": "A",
        "explanation": "The Portfolio Governance / Investment Steering Committee holds the executive business authority to evaluate enterprise impact and reallocate capital, terminating or reprioritizing projects.",
        "whyOthersAreWrong": [
            "Scrum Masters facilitate team processes; they do not set enterprise investment strategy.",
            "Junior developers do not make enterprise capital allocation decisions.",
            "Hardware vendors sell equipment; they do not govern customer portfolios."
        ],
        "examTrap": "Project cancellation across a portfolio is an executive Portfolio Governance decision.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Multi-Project Priority Shifts"
    },
    {
        "id": "itpm-u6-s63-mcq-078", "topic": "Enterprise Resource Management", "difficulty": "medium",
        "question": "What is the primary role of an Enterprise PMO (EPMO) regarding standardized project tools?",
        "options": {
            "A": "Selecting, maintaining, and supporting common project management tools, metrics dashboards, and reporting standards across the organization",
            "B": "Forcing every developer to use the same brand of computer keyboard",
            "C": "Writing all software source code for every company project",
            "D": "Auditing personal employee internet search histories"
        },
        "correctAnswer": "A",
        "explanation": "An EPMO establishes standard tooling and performance metrics (e.g. standard PM software, portfolio dashboards, EVM tracking), enabling consistent executive comparison across projects.",
        "whyOthersAreWrong": [
            "Keyboard brand is irrelevant ergonomic preference.",
            "EPMOs establish management standards; they do not write software code.",
            "Internet history auditing is corporate IT security / HR oversight."
        ],
        "examTrap": "EPMO standardizes *management tools and dashboards*, creating consistent executive transparency.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Enterprise Resource Management"
    },
    {
        "id": "itpm-u6-s63-mcq-079", "topic": "Controlling PMO Compliance Audits", "difficulty": "medium",
        "question": "What happens during a compliance audit conducted by a Controlling PMO?",
        "options": {
            "A": "The PMO reviews project artifacts to verify adherence to standardized governance, risk registers, and reporting baselines",
            "B": "The PMO deletes any project that has open bug reports",
            "C": "The PMO arrests developers who exceed their budget estimates",
            "D": "The PMO confiscates all project office chairs"
        },
        "correctAnswer": "A",
        "explanation": "A Controlling PMO verifies that project managers follow approved project governance frameworks, maintain accurate risk registers, and report standardized metrics.",
        "whyOthersAreWrong": [
            "All software has open bugs; deleting projects with bugs would destroy all development.",
            "PMOs have no legal arrest powers.",
            "Confiscating chairs is absurd."
        ],
        "examTrap": "Controlling PMOs enforce *process and reporting compliance* across projects.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Controlling PMO Compliance Audits"
    },
    {
        "id": "itpm-u6-s63-mcq-080", "topic": "Multi-Project Management Summary", "difficulty": "hard",
        "question": "An enterprise is planning to build a new corporate banking app, upgrade its core transaction ledger, and overhaul security authentication. How should these initiatives be organized?",
        "options": {
            "A": "As a Programme under multi-project management, coordinating the three related projects to capture collective business benefits and manage inter-project dependencies",
            "B": "As three completely secret projects that hide all information from one another",
            "C": "As a single 10-year project with one developer working alone",
            "D": "By cancelling all three initiatives and relying on paper ledgers"
        },
        "correctAnswer": "A",
        "explanation": "These initiatives are interdependent (app needs ledger and security) and collectively deliver the capability of digital banking. Organizing them as a Programme captures synergistic benefits and coordinates dependencies.",
        "whyOthersAreWrong": [
            "Secret silos create incompatible technical interfaces and project failure.",
            "A single developer would take decades and lacks cross-functional expertise.",
            "Paper ledgers are an obsolete retreat."
        ],
        "examTrap": "Interdependent projects delivering a collective strategic capability should be managed as a *Programme*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Management"},
        "sourceUnit": 6, "sourceSection": "6.3", "sourceTopic": "Multi-Project Management Summary"
    }
]

print(f"Prepared Section 6.3 MCQs: {len(s63_data)}")
