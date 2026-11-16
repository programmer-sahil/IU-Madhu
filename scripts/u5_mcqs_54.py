import json

s54_data = [
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Process Importance in Small Projects"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Pure Waterfall Sequence"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Waterfall Major Weakness"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Waterfall with Feedback Mechanism"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Sashimi Model Metaphor and Function"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Sashimi Model Advantage"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Basic Structure"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Left-Hand Arm Elements"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Right-Hand Arm Elements"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Traceability Link: Requirements & Acceptance"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Traceability Link: System Design & System Testing"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Traceability Link: Architecture & Integration"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Traceability Link: Detailed Design & Unit Testing"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Early Test Planning"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Predictive Methodology Selection Criteria"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Agile Selection Criteria in Small Projects"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Predictive Governance and Milestones"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Hybrid Methodologies in Practice"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "V-Model Verification vs Validation"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Waterfall Change Control Penalty"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Sashimi Model Risk"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Small Project Resource Allocation"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.4", "topic": "Plan-Driven Project Management in Small Projects"},
        "sourceUnit": 5, "sourceSection": "5.4", "sourceTopic": "Comprehensive Model Selection Summary"
    }
]

print(f"Prepared Section 5.4 MCQs: {len(s54_data)}")
