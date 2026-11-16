import json

s53_data = [
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
        "explanation": "Takeuchi and Nonaka (1986) used the metaphor of a rugby scrum—where a team moves forward together passing the ball back and forth—to describe high-performing self-organizing teams.",
        "whyOthersAreWrong": [
            "Lombardi and American football are unrelated to the origin of the term Scrum.",
            "Cricket is an individual batting/bowling sport, not the source of Scrum.",
            "Rowing uses crew metaphors, not the rugby scrummage."
        ],
        "examTrap": "Remember Takeuchi & Nonaka (1986) and the rugby scrummage metaphor.",
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Historical Origin"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Empirical Process Control Pillars"
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
        "examTrap": "Transparency requires a *common standard*—if people define 'Done' differently, transparency is destroyed.",
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Pillar: Transparency"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Pillar: Inspection"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Pillar: Adaptation"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Five Scrum Values"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Three Scrum Roles"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Role of the Product Owner"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Product Owner Single Accountability"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Role of the Scrum Master"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Traditional PM Absence in Scrum"
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
        "explanation": "The course book cites the classic guideline that development teams typically consist of 5 to 9 members—small enough to remain nimble and large enough to complete significant work.",
        "whyOthersAreWrong": [
            "25 to 50 members creates severe communication overhead and requires multi-team scaling frameworks.",
            "2 members is an XP pair, not a complete Scrum team.",
            "100 members is an enterprise organization requiring Scaled Agile (ART or LeSS)."
        ],
        "examTrap": "Remember the course book's classic number: 5 to 9 team members.",
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Development Team Size"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Three Artifacts"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Product Backlog Definition and Ordering"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Backlog Ownership"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "The Product Increment and DoD"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Definition of Done (DoD) Role"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Task Board Columns"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Duration Limit"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Time-Box Inviolability"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Planning Meeting Structure"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Planning Time-Box Limit"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Daily Scrum Time-Box"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Daily Scrum Three Questions"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Daily Scrum Target Audience"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Review Focus"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Retrospective Focus"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Events Order"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Goal Integrity"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Sprint Cancellation Authority"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Scrum Impediment Removal"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.3", "topic": "Scrum"},
        "sourceUnit": 5, "sourceSection": "5.3", "sourceTopic": "Cross-Project Scrum Team Members"
    }
]

print(f"Prepared Section 5.3 MCQs: {len(s53_data)}")
