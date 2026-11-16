import json

s64_data = [
    {
        "id": "itpm-u6-s64-mcq-081", "topic": "Agile Scaling Core Challenge", "difficulty": "easy",
        "question": "Why does scaling agile to large projects involving dozens of teams introduce significant communication and coordination complexity?",
        "options": {
            "A": "Because communication channels grow quadratically (n(n-1)/2) and cross-team dependencies create integration bottlenecks",
            "B": "Because agile frameworks can only be executed on laptops running Linux",
            "C": "Because developers in large projects are legally forbidden from talking to each other",
            "D": "Because Scrum Masters cannot attend meetings that have more than three chairs"
        },
        "correctAnswer": "A",
        "explanation": "As the number of participants increases, potential communication channels multiply rapidly according to n(n-1)/2, making informal communication insufficient without structured scaling frameworks.",
        "whyOthersAreWrong": [
            "Agile frameworks are operating system agnostic.",
            "There are no legal bans on developer communication.",
            "Meeting room seating is an absurd distractor."
        ],
        "examTrap": "Communication channels expand according to n(n-1)/2, demanding formal scaling coordination.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Agile Scaling Core Challenge"
    },
    {
        "id": "itpm-u6-s64-mcq-082", "topic": "Scrum of Scrums Structure", "difficulty": "easy",
        "question": "What is the primary operational mechanism of 'Scrum of Scrums' (SoS) as shown in Course Book Figure 47?",
        "options": {
            "A": "Designated ambassadors from multiple individual Scrum teams meet regularly to coordinate inter-team dependencies and remove cross-team blockers",
            "B": "All 500 enterprise developers gather in one room every morning for an 8-hour standup",
            "C": "Project managers replace all Scrum Masters and reintroduce Gantt charts",
            "D": "External auditors inspect developer source code line-by-line each evening"
        },
        "correctAnswer": "A",
        "explanation": "In Scrum of Scrums, individual teams (each typically 5-9 members) select an ambassador (often the Scrum Master or a relevant developer) to participate in an inter-team sync (~15 mins) to coordinate shared work.",
        "whyOthersAreWrong": [
            "Gathering 500 people every morning would paralyze development entirely.",
            "SoS is an agile scaling technique, not an elimination of Scrum roles.",
            "Auditors do not direct daily agile synchronization."
        ],
        "examTrap": "SoS uses *ambassadors* to keep meeting size small and nimble, avoiding massive meeting bloat.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Scrum of Scrums Structure"
    },
    {
        "id": "itpm-u6-s64-mcq-083", "topic": "SoS Four Questions", "difficulty": "medium",
        "question": "Which of the following correctly identifies the four questions addressed during a Scrum of Scrums meeting?",
        "options": {
            "A": "What has your team done since last meeting? What will your team do before next meeting? What impediments affect other teams? Are you putting any impediment in another team's way?",
            "B": "How much budget remains? How many lines of code were written? Who was late today? What is for lunch?",
            "C": "Who made coding mistakes? What are the quarterly profits? When is the holiday party? What is the CEO's salary?",
            "D": "Which vendor is cheapest? How do we cancel the contract? Where is the server room? Who has the admin password?"
        },
        "correctAnswer": "A",
        "explanation": "SoS adapts the 3 daily Scrum questions and adds a crucial 4th question addressing mutual cross-team impediments: 'Are you putting any impediment in the way of other teams?'",
        "whyOthersAreWrong": [
            "Budget, lines of code, and punctuality are bureaucratic management concerns.",
            "Mistakes and profits are not agile synchronization topics.",
            "Vendor pricing is procurement governance."
        ],
        "examTrap": "Remember that SoS has FOUR questions (not three), specifically focusing on *inter-team dependencies*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SoS Four Questions"
    },
    {
        "id": "itpm-u6-s64-mcq-084", "topic": "SoS Fourth Question Importance", "difficulty": "hard",
        "question": "Why is the fourth question in Scrum of Scrums ('Are you putting any impediment in the way of other teams?') critically unique?",
        "options": {
            "A": "It forces teams to proactively identify unintended downstream impacts of their technical architectural choices or delays on peer teams",
            "B": "It allows developers to publicly accuse other teams of incompetence",
            "C": "It determines which team receives a monetary penalty at the end of the sprint",
            "D": "It gives teams the authority to shut down competing projects"
        },
        "correctAnswer": "A",
        "explanation": "Question 4 promotes bilateral responsibility: a team must not only report what is blocking them, but also reflect on whether their code commits, API changes, or delays are creating blockers for other teams.",
        "whyOthersAreWrong": [
            "Public accusations destroy trust and psychological safety.",
            "Monetary penalties create perverse incentives and toxic competition.",
            "Teams cannot unilaterally shut down other projects."
        ],
        "examTrap": "Question 4 looks INWARD to detect if YOUR team is accidentally blocking OTHERS.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SoS Fourth Question Importance"
    },
    {
        "id": "itpm-u6-s64-mcq-085", "topic": "LeSS Origin and Creators", "difficulty": "easy",
        "question": "Who created Large-Scale Scrum (LeSS), and what is its guiding philosophical principle?",
        "options": {
            "A": "Craig Larman and Bas Vodde; guiding principle: 'More with LeSS' (scaling Scrum by removing organizational complexity)",
            "B": "Jeff Sutherland and Ken Schwaber; guiding principle: 'Code Fast and Break Things'",
            "C": "Dean Leffingwell; guiding principle: 'Hierarchical Multi-Tier Command'",
            "D": "Bill Gates; guiding principle: 'Proprietary Enterprise Software'"
        },
        "correctAnswer": "A",
        "explanation": "Large-Scale Scrum (LeSS) was developed by Craig Larman and Bas Vodde, founded on the principle 'More with LeSS'—scaling by descaling organization complexity rather than adding heavy layers.",
        "whyOthersAreWrong": [
            "Sutherland and Schwaber created base single-team Scrum.",
            "Dean Leffingwell created SAFe, not LeSS.",
            "Bill Gates is the founder of Microsoft."
        ],
        "examTrap": "LeSS = Craig Larman & Bas Vodde ('More with LeSS'). SAFe = Dean Leffingwell.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS Origin and Creators"
    },
    {
        "id": "itpm-u6-s64-mcq-086", "topic": "Basic LeSS Team Sizing", "difficulty": "medium",
        "question": "Basic LeSS is designed to scale Scrum up to approximately how many feature teams?",
        "options": {
            "A": "Up to 8 feature teams (roughly 50 to 70 people)",
            "B": "Up to 500 feature teams",
            "C": "Strictly 2 teams of 2 people each",
            "D": "An unlimited number of teams with no boundaries"
        },
        "correctAnswer": "A",
        "explanation": "Basic LeSS is optimized for up to 8 cross-functional feature teams (each 5-9 members). For larger organizations beyond 8 teams, LeSS Huge is applied.",
        "whyOthersAreWrong": [
            "500 teams requires LeSS Huge or multi-train enterprise frameworks.",
            "2 teams is a basic pair, not the upper limit of Basic LeSS.",
            "Unlimited scaling without structure leads to chaotic failure."
        ],
        "examTrap": "Basic LeSS = up to 8 feature teams. Beyond 8 teams = LeSS Huge.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Basic LeSS Team Sizing"
    },
    {
        "id": "itpm-u6-s64-mcq-087", "topic": "LeSS Single-Source Rules", "difficulty": "hard",
        "question": "What is the defining 'single-source' rule of Large-Scale Scrum (LeSS) across all participating feature teams?",
        "options": {
            "A": "ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, and ONE integrated Potentially Releasable Increment",
            "B": "Every team has its own separate Product Owner and its own completely isolated Product Backlog",
            "C": "Each team chooses its own sprint length (e.g. Team A does 1 week, Team B does 5 weeks)",
            "D": "Each team has its own unique Definition of Done that ignores other teams' code"
        },
        "correctAnswer": "A",
        "explanation": "LeSS is true Scrum scaled: it enforces radical single-source simplicity. Even with 8 teams, there is strictly ONE Product Owner, ONE shared Product Backlog, ONE synchronized Sprint, ONE shared DoD, and ONE integrated Increment.",
        "whyOthersAreWrong": [
            "Separate POs and separate backlogs per team creates siloed sub-products, violating LeSS core principles.",
            "Sprint cadences must be strictly synchronized in LeSS.",
            "A single common Definition of Done is non-negotiable in LeSS."
        ],
        "examTrap": "In LeSS, there is ONLY ONE Product Owner and ONE Product Backlog for all 8 teams. Do not select options giving each team its own PO.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS Single-Source Rules"
    },
    {
        "id": "itpm-u6-s64-mcq-088", "topic": "LeSS Sprint Planning Part 1 & 2", "difficulty": "hard",
        "question": "How is Sprint Planning structured across multiple teams in LeSS?",
        "options": {
            "A": "Sprint Planning 1 is shared by representatives from all teams with the single PO to select backlog items; Sprint Planning 2 is held separately by each team to design their task breakdown",
            "B": "All teams sit in silence for 40 hours while the Scrum Master writes code",
            "C": "Only one team plans per sprint; other teams take vacation",
            "D": "Planning is eliminated entirely because LeSS relies on automated AI planning"
        },
        "correctAnswer": "A",
        "explanation": "In LeSS, Sprint Planning Part 1 is a joint session where the single PO and team representatives clarify what items will be pulled by which team. Sprint Planning Part 2 is held in parallel by each individual team to break down their tasks.",
        "whyOthersAreWrong": [
            "Silent 40-hour meetings violate agile principles.",
            "All teams execute sprints concurrently.",
            "Planning remains an essential Scrum event in LeSS."
        ],
        "examTrap": "LeSS splits planning: Planning 1 = Joint (WHAT/who pulls what); Planning 2 = Team-specific (HOW).",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS Sprint Planning Part 1 & 2"
    },
    {
        "id": "itpm-u6-s64-mcq-089", "topic": "LeSS Huge Structure", "difficulty": "medium",
        "question": "When a project scales beyond 8 teams (potentially involving hundreds or thousands of developers), how does 'LeSS Huge' adapt the Product Owner role?",
        "options": {
            "A": "By organizing teams into Requirement Areas, each managed by an Area Product Owner (APO) who reports to the overall Product Owner",
            "B": "By replacing all Product Owners with corporate lawyers",
            "C": "By forcing developers to write code without any backlog",
            "D": "By dismantling the teams and switching to a strict sequential waterfall model"
        },
        "correctAnswer": "A",
        "explanation": "LeSS Huge introduces Area Product Owners (APOs) to manage specific Requirement Areas (sub-backlogs) within the single overarching Product Backlog, preventing the head Product Owner from being cognitively overloaded.",
        "whyOthersAreWrong": [
            "Lawyers do not manage product feature backlogs.",
            "Development without a backlog causes complete chaos.",
            "LeSS Huge maintains scaled agile, never retreating to waterfall."
        ],
        "examTrap": "LeSS Huge introduces *Area Product Owners (APOs)* managing *Requirement Areas*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS Huge Structure"
    },
    {
        "id": "itpm-u6-s64-mcq-090", "topic": "SAFe Creator and Scope", "difficulty": "easy",
        "question": "Who created the Scaled Agile Framework (SAFe), and what is its organizational scope?",
        "options": {
            "A": "Dean Leffingwell; comprehensive enterprise framework scaling agile across Team, Program, Large Solution, and Portfolio tiers",
            "B": "Ken Schwaber; small mobile application framework for 2 people",
            "C": "Peter DeGrace; culinary framework for seafood logistics",
            "D": "Barry Boehm; spiral model for mainframe hardware manufacturing"
        },
        "correctAnswer": "A",
        "explanation": "Dean Leffingwell created SAFe (Scaled Agile Framework), providing structured templates, competencies, and coordination mechanisms to scale lean-agile practices across large global enterprises.",
        "whyOthersAreWrong": [
            "Schwaber co-created Scrum, not SAFe.",
            "Peter DeGrace coined the Sashimi model metaphor.",
            "Barry Boehm created COCOMO and the Spiral model."
        ],
        "examTrap": "SAFe was created by Dean Leffingwell for large enterprise corporations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SAFe Creator and Scope"
    },
    {
        "id": "itpm-u6-s64-mcq-091", "topic": "Agile Release Train (ART) Headcount", "difficulty": "medium",
        "question": "What is an 'Agile Release Train' (ART) in SAFe, and what is its typical headcount?",
        "options": {
            "A": "A long-lived team of agile teams (typically 50 to 125 people) that plans, commits, and executes together on a synchronized cadence",
            "B": "A physical diesel locomotive carrying computer servers between data centers",
            "C": "A pair of two developers who write code while riding public transportation",
            "D": "A database script that compiles code once per year"
        },
        "correctAnswer": "A",
        "explanation": "The Agile Release Train (ART) is the core value delivery mechanism in SAFe: a synchronized cross-functional team-of-teams typically comprising 50 to 125 practitioners delivering incremental value.",
        "whyOthersAreWrong": [
            "ART is an organizational metaphor, not a physical railway vehicle.",
            "Two developers riding transit is an absurd distractor.",
            "ART delivers value every few weeks, not once a year."
        ],
        "examTrap": "Remember the official headcount of an Agile Release Train: 50 to 125 people.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Agile Release Train (ART) Headcount"
    },
    {
        "id": "itpm-u6-s64-mcq-092", "topic": "SAFe CALMR Acronym", "difficulty": "hard",
        "question": "What does the CALMR acronym represent in SAFe's approach to DevOps and Continuous Delivery?",
        "options": {
            "A": "Culture, Automation, Lean Flow, Measurement, Recovery",
            "B": "Command, Authority, Leadership, Management, Regulation",
            "C": "Cost, Accuracy, Logic, Modularity, Reliability",
            "D": "Continuous, Agile, Lean, Modern, Robust"
        },
        "correctAnswer": "A",
        "explanation": "In SAFe, CALMR encapsulates the DevOps mindset: Culture of shared responsibility, Automation of delivery pipelines, Lean flow (small batch sizes), Measurement of flow and quality, and Recovery (rapid mean time to restore).",
        "whyOthersAreWrong": [
            "Command and Authority contradict agile principles.",
            "Cost, Accuracy, etc. are generic quality terms.",
            "Continuous, Agile, etc. is an invented combination."
        ],
        "examTrap": "Memorize CALMR: Culture, Automation, Lean Flow, Measurement, Recovery.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SAFe CALMR Acronym"
    },
    {
        "id": "itpm-u6-s64-mcq-093", "topic": "CALMR: Culture Component", "difficulty": "medium",
        "question": "What is the primary focus of the 'Culture' component in SAFe CALMR DevOps?",
        "options": {
            "A": "Fostering shared responsibility between software development and IT operations, breaking down functional silos",
            "B": "Mandating that all team members listen to the same style of music",
            "C": "Requiring employees to wear formal corporate suits during coding",
            "D": "Organizing annual corporate golf tournaments"
        },
        "correctAnswer": "A",
        "explanation": "Culture in CALMR represents tearing down the traditional 'wall of confusion' between developers (who want rapid change) and operations (who want stability), establishing joint ownership of delivery.",
        "whyOthersAreWrong": [
            "Music preferences have no bearing on DevOps culture.",
            "Dress codes do not foster engineering collaboration.",
            "Golf tournaments are corporate leisure."
        ],
        "examTrap": "DevOps culture means joint, shared responsibility between Development and Operations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "CALMR: Culture Component"
    },
    {
        "id": "itpm-u6-s64-mcq-094", "topic": "CALMR: Automation Component", "difficulty": "easy",
        "question": "What is the primary objective of 'Automation' in the CALMR DevOps framework?",
        "options": {
            "A": "Automating continuous integration, automated testing, continuous deployment, and infrastructure provisioning to accelerate delivery",
            "B": "Replacing all human software developers with automated scripts",
            "C": "Automatically deleting emails unread after 24 hours",
            "D": "Automating coffee brewing machines in the breakroom"
        },
        "correctAnswer": "A",
        "explanation": "Automation eliminates manual, error-prone hand-offs through automated CI/CD pipelines, automated testing, and infrastructure-as-code.",
        "whyOthersAreWrong": [
            "Automation empowers human engineers; it does not replace human problem solving.",
            "Deleting emails unread damages communication.",
            "Coffee brewing is office facilities."
        ],
        "examTrap": "Automation focuses on the continuous deployment pipeline (CI/CD and automated regression tests).",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "CALMR: Automation Component"
    },
    {
        "id": "itpm-u6-s64-mcq-095", "topic": "CALMR: Lean Flow Component", "difficulty": "medium",
        "question": "What technique is emphasized under 'Lean Flow' in the CALMR model to optimize delivery throughput?",
        "options": {
            "A": "Reducing batch sizes, limiting Work In Progress (WIP), and managing queue lengths",
            "B": "Working 90-hour weeks during end-of-year deployment crunches",
            "C": "Building 5-year plans before writing any software code",
            "D": "Accumulating code changes for 12 months before performing a single release"
        },
        "correctAnswer": "A",
        "explanation": "Lean Flow emphasizes keeping batch sizes small, restricting WIP, and accelerating flow to eliminate waste and queue wait times.",
        "whyOthersAreWrong": [
            "90-hour crunch weeks violate sustainable pace and cause high defect rates.",
            "5-year plans belong to rigid predictive planning.",
            "Large annual batches create catastrophic release integration failures."
        ],
        "examTrap": "Lean Flow = Small batch sizes + Limiting WIP.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "CALMR: Lean Flow Component"
    },
    {
        "id": "itpm-u6-s64-mcq-096", "topic": "CALMR: Measurement Component", "difficulty": "medium",
        "question": "What is measured under the 'Measurement' pillar of SAFe CALMR?",
        "options": {
            "A": "Flow metrics, cycle time, deployment frequency, failure rates, and mean time to restore (MTTR)",
            "B": "Number of keyboard strokes logged by programmers per hour",
            "C": "Physical body weight of software developers",
            "D": "The decibel noise level in the corporate dining cafeteria"
        },
        "correctAnswer": "A",
        "explanation": "Measurement focuses on objective flow and stability metrics: cycle time, lead time, throughput, test coverage, and Mean Time To Recovery.",
        "whyOthersAreWrong": [
            "Keystrokes measures meaningless activity, incentivizing bloated code.",
            "Body weight is irrelevant personal medical data.",
            "Cafeteria noise is facilities management."
        ],
        "examTrap": "Measure *flow, lead time, and recovery speed*, NOT developer hours or keystrokes.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "CALMR: Measurement Component"
    },
    {
        "id": "itpm-u6-s64-mcq-097", "topic": "CALMR: Recovery Component", "difficulty": "medium",
        "question": "What is the core philosophy of 'Recovery' in CALMR DevOps?",
        "options": {
            "A": "Designing architectures and deployment pipelines for low Mean Time To Recovery (MTTR) through rollbacks, blue-green deployments, and feature flags",
            "B": "Sending developers to a spa retreat whenever a software bug occurs",
            "C": "Recovering lost corporate files by searching through office garbage bins",
            "D": "Suing cloud hosting providers for all service outages"
        },
        "correctAnswer": "A",
        "explanation": "Recovery assumes failures will inevitably occur in complex systems; systems must be engineered for fast recovery via automated rollbacks, canary testing, and feature toggles.",
        "whyOthersAreWrong": [
            "Spa retreats do not fix server outages.",
            "Garbage searches are absurd.",
            "Lawsuits do not restore live operational databases."
        ],
        "examTrap": "Recovery emphasizes fast *MTTR* (Mean Time To Recovery) and automated rollbacks.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "CALMR: Recovery Component"
    },
    {
        "id": "itpm-u6-s64-mcq-098", "topic": "LeSS vs SAFe Philosophical Contrast", "difficulty": "hard",
        "question": "What is the fundamental philosophical contrast between Large-Scale Scrum (LeSS) and the Scaled Agile Framework (SAFe)?",
        "options": {
            "A": "LeSS scales Scrum by descaling organizational hierarchy and adding NO extra management roles; SAFe scales by providing comprehensive multi-tiered enterprise governance structures and defined roles",
            "B": "LeSS was created for banks; SAFe was created for video games",
            "C": "LeSS uses waterfall planning; SAFe uses extreme programming",
            "D": "LeSS bans software testing; SAFe bans all software code"
        },
        "correctAnswer": "A",
        "explanation": "LeSS believes in radical reduction of organizational structure ('More with LeSS'). SAFe provides an extensive, detailed framework covering portfolio management, release management, and architecture governance.",
        "whyOthersAreWrong": [
            "Both are used across diverse corporate sectors including finance and tech.",
            "Neither framework uses waterfall; both are scaled agile.",
            "Testing and coding are foundational to both frameworks."
        ],
        "examTrap": "LeSS = *descaling* organization; SAFe = *prescriptive enterprise scaffolding*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS vs SAFe Philosophical Contrast"
    },
    {
        "id": "itpm-u6-s64-mcq-099", "topic": "Scaled Agile Dependency Management", "difficulty": "medium",
        "question": "What is a major cause of failure when enterprise corporations attempt to scale Agile without restructuring their legacy architecture?",
        "options": {
            "A": "Tightly coupled monolithic architectures create massive cross-team technical dependencies, preventing teams from releasing independently",
            "B": "Developers forget how to use modern programming compilers",
            "C": "Corporate laptops run out of disk space during morning standups",
            "D": "Labor laws forbid large software development teams"
        },
        "correctAnswer": "A",
        "explanation": "If the underlying software architecture is tightly coupled, autonomous teams cannot release software independently; every release becomes a massive, delayed integration headache.",
        "whyOthersAreWrong": [
            "Compilers function normally regardless of team size.",
            "Disk space is a minor hardware issue.",
            "Labor laws regulate working conditions, not agile team structures."
        ],
        "examTrap": "Autonomous teams require *decoupled, modular architecture* to succeed at scale.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Scaled Agile Dependency Management"
    },
    {
        "id": "itpm-u6-s64-mcq-0100", "topic": "SoS Meeting Duration", "difficulty": "easy",
        "question": "What is the recommended duration limit for a standard Scrum of Scrums (SoS) meeting?",
        "options": {
            "A": "Approximately 15 minutes",
            "B": "Exactly 4 hours",
            "C": "A full 8-hour working day",
            "D": "There is no limit; it lasts until all enterprise bugs are fixed"
        },
        "correctAnswer": "A",
        "explanation": "Like the Daily Scrum, the Scrum of Scrums is designed as a time-boxed, high-efficiency coordination meeting (~15 minutes) to surface cross-team dependencies without devolving into lengthy technical debates.",
        "whyOthersAreWrong": [
            "4 hours turns the standup into an exhausting committee debate.",
            "An 8-hour meeting halts all development across the enterprise.",
            "No time limit violates agile time-boxing principles."
        ],
        "examTrap": "Keep it time-boxed: ~15 minutes. In-depth technical problem solving occurs after the meeting among affected parties.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SoS Meeting Duration"
    },
    {
        "id": "itpm-u6-s64-mcq-0101", "topic": "Feature Teams in LeSS", "difficulty": "hard",
        "question": "What type of teams are strictly mandated in Large-Scale Scrum (LeSS)?",
        "options": {
            "A": "Cross-functional Feature Teams capable of delivering complete end-to-end user features across all architectural layers",
            "B": "Component Teams segregated by technical layer (e.g., UI team, Database team, API team)",
            "C": "Testing-only teams that only execute manual regression tests",
            "D": "Temporary contractor groups that change every week"
        },
        "correctAnswer": "A",
        "explanation": "LeSS requires cross-functional 'Feature Teams' that can pull a customer-centric feature from the backlog and build it across all architectural layers (database, business logic, UI) to avoid inter-team handoffs.",
        "whyOthersAreWrong": [
            "Component teams create severe dependency chains and hand-off queues, which LeSS explicitly rejects.",
            "Testing-only teams recreate departmental silos.",
            "Weekly contractor churn destroys team predictability and cohesion."
        ],
        "examTrap": "LeSS explicitly demands *Feature Teams*, rejecting architectural *Component Teams*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Feature Teams in LeSS"
    },
    {
        "id": "itpm-u6-s64-mcq-0102", "topic": "SAFe Program Increment (PI) Planning", "difficulty": "medium",
        "question": "What is the primary synchronization event in SAFe where all members of the Agile Release Train plan together for the upcoming increment?",
        "options": {
            "A": "Program Increment (PI) Planning",
            "B": "Daily Scrum",
            "C": "Annual Shareholder Meeting",
            "D": "Final Project Closeout Meeting"
        },
        "correctAnswer": "A",
        "explanation": "PI Planning is the cadence-based, face-to-face event (typically 2 days) where all teams on the Agile Release Train align on a shared vision, build their team iteration plans, and map dependencies.",
        "whyOthersAreWrong": [
            "Daily Scrum is a 15-minute single-team standup.",
            "Shareholder meetings are corporate investor governance.",
            "Closeout meetings happen at project termination."
        ],
        "examTrap": "PI Planning is the signature cadence-based alignment event for the entire ART in SAFe.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SAFe Program Increment (PI) Planning"
    },
    {
        "id": "itpm-u6-s64-mcq-0103", "topic": "LeSS Joint Retrospective", "difficulty": "hard",
        "question": "In LeSS, in addition to each team conducting its own internal Sprint Retrospective, what additional retrospective is held to address cross-team systemic issues?",
        "options": {
            "A": "An Overall Retrospective attended by the Product Owner, Scrum Masters, and rotating team representatives to inspect cross-team systemic and organizational obstacles",
            "B": "A legal investigation conducted by external law enforcement",
            "C": "A disciplinary tribunal that issues wage deductions for slow code delivery",
            "D": "An annual performance review conducted by corporate human resources"
        },
        "correctAnswer": "A",
        "explanation": "In LeSS, teams first hold their own team retrospectives. Afterward, an Overall Retrospective is held with the PO, Scrum Masters, and team representatives to focus on systemic, cross-team, and organizational improvements.",
        "whyOthersAreWrong": [
            "Retrospectives are blameless agile improvement sessions, not police investigations.",
            "Wage deductions violate labor ethics and destroy collaboration.",
            "Annual HR reviews evaluate individuals, not team engineering systems."
        ],
        "examTrap": "LeSS has two levels of retrospective: *Team Retrospective* (local team) and *Overall Retrospective* (systemic cross-team issues).",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS Joint Retrospective"
    },
    {
        "id": "itpm-u6-s64-mcq-0104", "topic": "SoS Ambassador Selection", "difficulty": "medium",
        "question": "Who should ideally serve as the 'ambassador' representing a team at the Scrum of Scrums meeting?",
        "options": {
            "A": "A team member best suited to address the current inter-team dependencies or technical risks (could be a developer, architect, or Scrum Master depending on context)",
            "B": "Strictly the highest-paid executive in the corporate office",
            "C": "An external marketing agency representative",
            "D": "The newest summer intern who joined the company yesterday"
        },
        "correctAnswer": "A",
        "explanation": "The SoS ambassador role is flexible: while often the Scrum Master, teams frequently send the developer or specialist who is actively working on the cross-team interface or dependency being discussed.",
        "whyOthersAreWrong": [
            "Executives lack operational insight into technical sprint dependencies.",
            "Marketing agencies represent external advertising, not engineering dependencies.",
            "New interns lack context on project architecture."
        ],
        "examTrap": "The SoS ambassador does NOT have to be the Scrum Master; it should be whoever best understands the active cross-team dependency.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SoS Ambassador Selection"
    },
    {
        "id": "itpm-u6-s64-mcq-0105", "topic": "LeSS Definition of Done Across Teams", "difficulty": "hard",
        "question": "In LeSS, how does the Definition of Done (DoD) operate when multiple feature teams deliver into the same shared product?",
        "options": {
            "A": "There is a single shared organizational Definition of Done that applies to all teams; individual teams may add more stringent criteria, but can NEVER weaken the common DoD",
            "B": "Each team defines whatever quality criteria they want independently",
            "C": "The Definition of Done is eliminated because testing is handled by a separate offshore company",
            "D": "The DoD is only updated once every five years"
        },
        "correctAnswer": "A",
        "explanation": "LeSS mandates that all teams share a common base Definition of Done to ensure that the combined increment is genuinely integrated and potentially releasable. An individual team can make its DoD stricter, but never weaker.",
        "whyOthersAreWrong": [
            "Allowing teams to weaken DoD causes massive integration failure when code is combined.",
            "Offshore testing does not replace team-level definition of done.",
            "Five years is absurdly infrequent."
        ],
        "examTrap": "In LeSS: Common base DoD for all teams. A team may extend/tighten it, but can NEVER relax it.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "LeSS Definition of Done Across Teams"
    },
    {
        "id": "itpm-u6-s64-mcq-0106", "topic": "Agile at Scale Integration Cadence", "difficulty": "medium",
        "question": "What is the continuous integration standard required when scaling Agile across multiple teams?",
        "options": {
            "A": "All code from all teams must be continuously integrated and verified automatically via CI pipelines at least daily",
            "B": "Teams integrate their code once every six months during a scheduled corporate shutdown",
            "C": "Code is never integrated until the customer pays the final invoice",
            "D": "Each team uses a completely different programming language that cannot be linked"
        },
        "correctAnswer": "A",
        "explanation": "Scaled agile cannot function with late integration. All teams must integrate their code continuously into a single shared trunk/mainline, verified by automated automated test suites.",
        "whyOthersAreWrong": [
            "Integrating every six months recreates catastrophic 'integration hell'.",
            "Delaying integration until invoicing causes project failure.",
            "Incompatible languages prevent system integration."
        ],
        "examTrap": "Continuous integration is the architectural backbone of scaled agile.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Agile at Scale Integration Cadence"
    },
    {
        "id": "itpm-u6-s64-mcq-0107", "topic": "SAFe Lean-Agile Leadership", "difficulty": "medium",
        "question": "Why is 'Lean-Agile Leadership' recognized as a foundational competency in the Scaled Agile Framework (SAFe)?",
        "options": {
            "A": "Because enterprise transformation requires leaders who exemplify lean-agile mindsets, empower teams, and dismantle organizational impediments",
            "B": "Because executives must personally write all unit tests for the development teams",
            "C": "Because managers are required to cut developer salaries by 50%",
            "D": "Because leaders must eliminate all computers and return to paper forms"
        },
        "correctAnswer": "A",
        "explanation": "Lean-Agile Leaders drive and sustain organizational change by learning, modeling, and teaching Lean-Agile principles, replacing command-and-control with servant leadership.",
        "whyOthersAreWrong": [
            "Leaders guide strategy and culture; they do not write low-level unit tests.",
            "Cutting salaries destroys team morale and prompts mass resignations.",
            "Paper forms are obsolete bureaucracy."
        ],
        "examTrap": "Leadership in SAFe is about empowering teams and leading organizational change by example.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "SAFe Lean-Agile Leadership"
    },
    {
        "id": "itpm-u6-s64-mcq-0108", "topic": "Enterprise Architecture Governance in Scaled Agile", "difficulty": "hard",
        "question": "How is technical and enterprise architectural consistency maintained across dozens of autonomous agile teams?",
        "options": {
            "A": "Through an Architectural Runway and collaborative Community of Practice (CoP) providing shared guidelines, enabling decentralized team implementation within agreed architectural guardrails",
            "B": "By locking developers in soundproof rooms and forbidding any architectural discussions",
            "C": "By forcing all developers to write code using only 1970s assembly language",
            "D": "By submitting every single line of code to a government architecture committee for approval"
        },
        "correctAnswer": "A",
        "explanation": "Scaled agile balances intentional architecture with emergent design: an Architectural Runway and Communities of Practice provide common infrastructure, protocols, and guardrails without centralizing every coding decision.",
        "whyOthersAreWrong": [
            "Forbidding discussions causes chaotic architectural fragmentation.",
            "Assembly language is an absurd constraint.",
            "External government approvals for every line of code would paralyze delivery."
        ],
        "examTrap": "Architecture in scaled agile combines *intentional architecture* (guardrails) with *emergent design* (team autonomy).",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Enterprise Architecture Governance in Scaled Agile"
    },
    {
        "id": "itpm-u6-s64-mcq-0109", "topic": "Scaled Agile Criticism in Course Book", "difficulty": "hard",
        "question": "According to the course book's critical analysis of scaled agile frameworks, what is a frequent operational complaint from developers and testers at the ground level?",
        "options": {
            "A": "Developers, testers, and product owners who could offer valuable feedback are often excluded from higher-level enterprise decision-making, and heavy scaling frameworks can feel like re-branded top-down bureaucracy",
            "B": "The frameworks make developers write too few lines of code",
            "C": "Developers are required to work exclusively at night without pay",
            "D": "The frameworks prohibit the use of databases"
        },
        "correctAnswer": "A",
        "explanation": "The course book explicitly highlights that in large scaled agile implementations, higher-level enterprise decisions often exclude frontline technical feedback, risking the reintroduction of top-down bureaucratic control under agile terminology.",
        "whyOthersAreWrong": [
            "Lines of code is not the core complaint; bureaucratic detachment is.",
            "Working at night without pay is an illegal labor violation.",
            "Databases are essential technical components across all frameworks."
        ],
        "examTrap": "Course book critical insight: Scaling frameworks risk recreating top-down management while sidelining frontline engineers from enterprise decisions.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Scaled Agile Criticism in Course Book"
    },
    {
        "id": "itpm-u6-s64-mcq-0110", "topic": "Scaled Agile Framework Selection Summary", "difficulty": "medium",
        "question": "A mid-sized company with 6 software teams building an interconnected SaaS e-commerce suite wants to scale agile with minimal management overhead and zero new management roles. Which framework is best aligned?",
        "options": {
            "A": "Basic Large-Scale Scrum (LeSS)",
            "B": "A heavy 4-tier SAFe enterprise deployment with Release Train Engineers and Business Owners",
            "C": "Pure Waterfall model with zero iterations",
            "D": "Abandoning all agile methods and hiring an external outsourcing company"
        },
        "correctAnswer": "A",
        "explanation": "Basic LeSS is designed precisely for up to 8 teams seeking to scale Scrum with NO added management roles or structural bureaucracy, maintaining ONE PO and ONE Backlog under the 'More with LeSS' philosophy.",
        "whyOthersAreWrong": [
            "SAFe introduces substantial roles, tiers, and administrative infrastructure unsuited for a team wanting zero new roles.",
            "Waterfall abandons iterative agility.",
            "Outsourcing does not solve internal scaling methodology needs."
        ],
        "examTrap": "Wanting scaling *without added roles or bureaucracy* points directly to LeSS ('More with LeSS').",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Software Processes in Large Projects"},
        "sourceUnit": 6, "sourceSection": "6.4", "sourceTopic": "Scaled Agile Framework Selection Summary"
    }
]

print(f"Prepared Section 6.4 MCQs: {len(s64_data)}")
