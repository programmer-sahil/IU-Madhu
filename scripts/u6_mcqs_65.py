import json

s65_data = [
    {
        "id": "itpm-u6-s65-mcq-111", "topic": "Functional Organization PM Authority", "difficulty": "easy",
        "question": "What is the level of authority held by a Project Manager in a traditional 'Functional Organization'?",
        "options": {
            "A": "Little or no formal authority; the PM typically acts as a part-time coordinator or expediter while functional department managers control budgets and resources",
            "B": "Total and absolute authority over all company finances and staff",
            "C": "Equal authority shared identically with the corporate Chief Financial Officer",
            "D": "Authority only over external legal lawsuits"
        },
        "correctAnswer": "A",
        "explanation": "In a Functional Organization, staff are grouped by specialty (marketing, engineering, accounting), and functional managers control budgets and assignments. A PM has little to no formal authority.",
        "whyOthersAreWrong": [
            "Total authority characterizes a Projectized Organization, not a Functional one.",
            "CFO authority is corporate executive finance.",
            "Legal lawsuits are handled by corporate general counsel."
        ],
        "examTrap": "Functional Organization = PM has *little or no authority* (coordinator/expediter).",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Functional Organization PM Authority"
    },
    {
        "id": "itpm-u6-s65-mcq-112", "topic": "Matrix Organization Continuum", "difficulty": "easy",
        "question": "What are the three variants of Matrix Organizations recognized in project management standards?",
        "options": {
            "A": "Weak Matrix, Balanced Matrix, Strong Matrix",
            "B": "Low Matrix, Medium Matrix, High Matrix",
            "C": "Primary Matrix, Secondary Matrix, Tertiary Matrix",
            "D": "Internal Matrix, External Matrix, Hybrid Matrix"
        },
        "correctAnswer": "A",
        "explanation": "Matrix structures are categorized across a continuum based on PM authority: Weak Matrix (functional manager dominates), Balanced Matrix (shared power), and Strong Matrix (PM dominates).",
        "whyOthersAreWrong": [
            "Low/Medium/High is informal slang.",
            "Primary/Secondary/Tertiary are classification tiers, not standard matrix types.",
            "Internal/External are boundary labels."
        ],
        "examTrap": "Remember the three official matrix types: Weak, Balanced, Strong.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Matrix Organization Continuum"
    },
    {
        "id": "itpm-u6-s65-mcq-113", "topic": "Weak Matrix PM Role", "difficulty": "medium",
        "question": "How does a 'Weak Matrix' organization operate regarding project authority?",
        "options": {
            "A": "Maintains many characteristics of a functional organization; the PM functions as a project coordinator or expediter with limited decision-making authority",
            "B": "The project manager can fire the functional manager at will",
            "C": "Developers are prohibited from writing software code",
            "D": "The organization has no employees and relies on volunteer labor"
        },
        "correctAnswer": "A",
        "explanation": "In a Weak Matrix, functional managers maintain primary control over budgets and staff. The PM acts primarily as a staff coordinator or expediter who facilitates communication but cannot enforce decisions.",
        "whyOthersAreWrong": [
            "PMs cannot fire functional managers in any matrix structure.",
            "Developers write code normally.",
            "Volunteer labor has nothing to do with matrix organizational structures."
        ],
        "examTrap": "Weak Matrix is very close to Functional: the Functional Manager holds real power.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Weak Matrix PM Role"
    },
    {
        "id": "itpm-u6-s65-mcq-114", "topic": "Balanced Matrix Shared Power", "difficulty": "medium",
        "question": "What is the defining power balance in a 'Balanced Matrix' organization?",
        "options": {
            "A": "Power and decision-making are shared relatively equally between the project manager and functional department managers",
            "B": "The project manager has 100% of the power and functional managers have 0%",
            "C": "External customers make all internal daily project management decisions",
            "D": "Decisions are made by tossing a coin each morning"
        },
        "correctAnswer": "A",
        "explanation": "In a Balanced Matrix, the PM defines project requirements, schedule, and tasks, while the functional manager decides which personnel are assigned and oversees their technical quality (shared power).",
        "whyOthersAreWrong": [
            "100% PM power defines a Projectized organization.",
            "Customers provide requirements, but do not manage internal corporate operations.",
            "Coin tossing is arbitrary randomness."
        ],
        "examTrap": "Balanced Matrix = Shared authority (requires continuous negotiation between PM and Functional Manager).",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Balanced Matrix Shared Power"
    },
    {
        "id": "itpm-u6-s65-mcq-115", "topic": "Strong Matrix PM Authority", "difficulty": "medium",
        "question": "What distinguishes a 'Strong Matrix' from a Balanced or Weak Matrix?",
        "options": {
            "A": "The project manager has primary authority, manages the project budget, and works in a full-time designated project management role with a dedicated PM department",
            "B": "The organization requires developers to pass physical weightlifting tests",
            "C": "Functional department managers have complete control over all project budgets",
            "D": "The organization only uses waterfall methodologies"
        },
        "correctAnswer": "A",
        "explanation": "In a Strong Matrix, the PM possesses high authority, controls the budget, and typically reports to a PMO Director rather than a functional department head, while functional managers provide staff.",
        "whyOthersAreWrong": [
            "Physical weightlifting is absurd.",
            "Functional managers dominating budget describes a Functional or Weak Matrix.",
            "Strong Matrix organizations use any appropriate methodology (Agile, Waterfall, Hybrid)."
        ],
        "examTrap": "Strong Matrix = PM has primary authority and full-time role; close to Projectized power.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Strong Matrix PM Authority"
    },
    {
        "id": "itpm-u6-s65-mcq-116", "topic": "Projectized Organization Structure", "difficulty": "medium",
        "question": "What defines a 'Projectized' (or Project-Oriented) organizational structure?",
        "options": {
            "A": "Team members are dedicated full-time to the project and report directly to the Project Manager, who possesses total operational and budgetary authority",
            "B": "All employees work in traditional permanent functional departments and never join project teams",
            "C": "The organization has no project managers and relies exclusively on outsourced call centers",
            "D": "The company operates without any budget or financial tracking"
        },
        "correctAnswer": "A",
        "explanation": "In a Projectized organization, the project is the primary structural unit. Team members are co-located or dedicated to the project, and the PM has complete authority over personnel and budget.",
        "whyOthersAreWrong": [
            "Permanent functional silos describe a Functional organization.",
            "Outsourced call centers do not define projectized engineering structures.",
            "Projectized organizations have rigorous financial tracking."
        ],
        "examTrap": "Projectized = PM has *maximum/total authority*. Team members report strictly to the PM.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Projectized Organization Structure"
    },
    {
        "id": "itpm-u6-s65-mcq-117", "topic": "Projectized 'No Home' Challenge", "difficulty": "hard",
        "question": "What is the classic organizational drawback known as the 'no home' problem in Projectized organizations?",
        "options": {
            "A": "When a project concludes, dedicated team members may face anxiety or lack immediate job reassignment because they have no permanent functional department to return to",
            "B": "Project managers are forced to work outdoors without physical office buildings",
            "C": "The company loses its corporate legal registration when a project finishes",
            "D": "Software code cannot be hosted on local computer hard drives"
        },
        "correctAnswer": "A",
        "explanation": "In pure projectized organizations, staff do not belong to functional departments (like an 'Engineering Department'). When a project finishes, members worry about job security or where they will be reassigned ('no home').",
        "whyOthersAreWrong": [
            "Working outdoors is absurd.",
            "Corporate legal registration persists independently of project closures.",
            "Software hosting is unrelated to organizational team reassignment."
        ],
        "examTrap": "The 'No Home' problem is the signature human resource drawback of Projectized organizations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Projectized 'No Home' Challenge"
    },
    {
        "id": "itpm-u6-s65-mcq-118", "topic": "Iterative Development Definition", "difficulty": "medium",
        "question": "How does the course book specifically define 'Iterative Development'?",
        "options": {
            "A": "Developing an initial low-fidelity version encompassing all or most system features early, and then progressively increasing the fidelity and depth across iterations",
            "B": "Building one single feature to 100% completion while ignoring all other features until next year",
            "C": "Writing code without any design documentation",
            "D": "Re-running a software compiler in an infinite loop until it crashes"
        },
        "correctAnswer": "A",
        "explanation": "Iterative development creates an end-to-end framework of the whole system at low fidelity early, refining and deepening all parts together over successive iterative passes.",
        "whyOthersAreWrong": [
            "Building one feature to 100% completion first is the definition of Incremental development.",
            "Iterative development uses structured design models (e.g. UML).",
            "Infinite compiler loops are hardware execution errors."
        ],
        "examTrap": "Iterative = *All features early at low fidelity*, refined together over time.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Iterative Development Definition"
    },
    {
        "id": "itpm-u6-s65-mcq-119", "topic": "Incremental Development Definition", "difficulty": "medium",
        "question": "How does the course book distinguish 'Incremental Development' from iterative development?",
        "options": {
            "A": "Incremental development completely finishes a small subset of features to full operational fidelity first, adding more completed features in subsequent releases",
            "B": "Incremental development builds all features at low quality and never tests them",
            "C": "Incremental development is strictly illegal under European software copyright laws",
            "D": "Incremental development can only be executed by hardware electricians"
        },
        "correctAnswer": "A",
        "explanation": "Incremental development starts with smaller parts of the product and finishes them completely before moving to the next parts, slowly adding completed slices until the system is fully formed.",
        "whyOthersAreWrong": [
            "Building all features at low fidelity is Iterative development.",
            "Incremental development is a standard, highly legal engineering model.",
            "Software engineers execute incremental software development."
        ],
        "examTrap": "Incremental = *Few features fully finished first*, adding more finished slices over time.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Incremental Development Definition"
    },
    {
        "id": "itpm-u6-s65-mcq-120", "topic": "Agile Development Synthesis", "difficulty": "medium",
        "question": "How does 'Agile Development' combine iterative and incremental models?",
        "options": {
            "A": "Agile is both iterative (progressively refining features based on feedback) AND incremental (delivering functional, potentially releasable vertical slices in short sprints)",
            "B": "Agile rejects both iterative and incremental concepts in favor of pure sequential waterfall",
            "C": "Agile is neither iterative nor incremental; it is strictly an accounting framework",
            "D": "Agile alternates between pure waterfall on odd sprints and pure chaos on even sprints"
        },
        "correctAnswer": "A",
        "explanation": "Agile marries both strategies: it delivers working increments (functional feature slices) at the end of every sprint while iteratively refining and adapting the overall architecture and backlog.",
        "whyOthersAreWrong": [
            "Agile explicitly rejects rigid pure waterfall.",
            "Agile is a software engineering methodology, not an accounting framework.",
            "Alternating waterfall and chaos is nonsensical."
        ],
        "examTrap": "Agile = BOTH *Iterative* (continuous refinement) AND *Incremental* (usable slices delivered each sprint).",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Agile Development Synthesis"
    },
    {
        "id": "itpm-u6-s65-mcq-121", "topic": "One-Size-Fits-All Myth", "difficulty": "easy",
        "question": "What does the course book emphasize regarding the concept of a 'one-size-fits-all' project management methodology?",
        "options": {
            "A": "A one-size-fits-all methodology is not a reality for IT project managers; methodologies must be tailored to project characteristics",
            "B": "Scrum is universally perfect for every project from nuclear reactors to mobile apps without modification",
            "C": "PMBOK should be enforced identically on every two-person software team",
            "D": "PRINCE2 is the only legal methodology permitted in the European Union"
        },
        "correctAnswer": "A",
        "explanation": "The course book explicitly stresses that there is no universal silver bullet methodology: attempting to force a single rigid methodology on all projects leads to failure.",
        "whyOthersAreWrong": [
            "Scrum is unsuited for fixed-contract, safety-critical systems requiring formal 1:1 verification.",
            "Enforcing all 47 PMBOK processes on 2-person teams creates suffocating bureaucracy.",
            "PRINCE2 is a popular standard, not a legally mandatory monopoly."
        ],
        "examTrap": "There is NO 'one-size-fits-all' methodology in IT project management.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "One-Size-Fits-All Myth"
    },
    {
        "id": "itpm-u6-s65-mcq-122", "topic": "Requirement Uncertainty Selection Dimension", "difficulty": "medium",
        "question": "When evaluated along the dimension of 'Requirement Uncertainty', which approach is favored when requirements are clear and fixed versus when requirements are novel and volatile?",
        "options": {
            "A": "Clear/Fixed requirements favor Predictive (Plan-driven); Novel/Volatile requirements favor Adaptive (Agile)",
            "B": "Clear/Fixed requirements favor Agile; Novel/Volatile requirements favor Waterfall",
            "C": "Both require abandoning all project management frameworks",
            "D": "Requirement volatility has zero impact on methodology selection"
        },
        "correctAnswer": "A",
        "explanation": "Stable, well-understood requirements allow for predictable upfront planning (Predictive/Waterfall/V-Model); volatile, evolving requirements demand short empirical feedback loops (Agile/Scrum).",
        "whyOthersAreWrong": [
            "Inverting the selection matches projects to the wrong failure modes.",
            "Uncertainty requires structured empirical frameworks, not abandonment.",
            "Requirement volatility is one of the primary drivers of methodology selection."
        ],
        "examTrap": "Stable = Predictive. Volatile/Uncertain = Adaptive/Agile.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Requirement Uncertainty Selection Dimension"
    },
    {
        "id": "itpm-u6-s65-mcq-123", "topic": "Safety-Critical Systems Selection", "difficulty": "medium",
        "question": "For a safety-critical aerospace flight control system requiring formal government aviation certification, which methodology paradigm is mandated?",
        "options": {
            "A": "Plan-driven predictive models (e.g., V-Model) providing exhaustive documentation and horizontal 1:1 verification traceability",
            "B": "Rapid trial-and-error Scrum with daily releases pushed directly to flying aircraft",
            "C": "A throw-away prototype developed in an unverified programming language",
            "D": "No project management methodology because aviation engineers do not need processes"
        },
        "correctAnswer": "A",
        "explanation": "Safety-critical, life-dependent systems require formal proof of conformance to safety regulations, making the comprehensive traceability of the V-Model essential.",
        "whyOthersAreWrong": [
            "Pushing unverified daily code to flying aircraft is lethal negligence.",
            "Throw-away prototypes lack rigorous safety verification.",
            "Aviation engineering requires the strictest process discipline in the world."
        ],
        "examTrap": "Safety-critical + Regulatory certification = Plan-driven / V-Model.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Safety-Critical Systems Selection"
    },
    {
        "id": "itpm-u6-s65-mcq-124", "topic": "Customer Availability Selection Dimension", "difficulty": "medium",
        "question": "How does 'Customer Availability' influence the selection between Agile and Plan-Driven methodologies?",
        "options": {
            "A": "Agile requires continuous, daily customer collaboration (e.g. an embedded Product Owner); if customers can only participate at major milestone gates, plan-driven approaches are more practical",
            "B": "Agile requires that customers never speak to developers",
            "C": "Plan-driven models require customers to write 100% of the code",
            "D": "Customer availability has no bearing on software methodologies"
        },
        "correctAnswer": "A",
        "explanation": "Agile relies on fast, daily customer steering. If the customer is an external client who can only attend quarterly milestone reviews, attempting Scrum will fail due to feedback starvation.",
        "whyOthersAreWrong": [
            "Agile demands close customer collaboration (Manifesto Value 3).",
            "Customers specify needs; developers write code.",
            "Lack of customer availability is a leading cause of agile failure."
        ],
        "examTrap": "If the client CANNOT collaborate daily, a pure agile approach will stall waiting for backlog decisions.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Customer Availability Selection Dimension"
    },
    {
        "id": "itpm-u6-s65-mcq-125", "topic": "Hybrid Methodologies in Practice", "difficulty": "medium",
        "question": "What is the defining characteristic of a 'Hybrid Project Management' approach as highlighted in Course Book Figure 48?",
        "options": {
            "A": "Pragmatically combining predictive planning for high-level governance, budgeting, and architecture with agile iterative sprints for software execution",
            "B": "Using Waterfall on sunny days and Agile on rainy days",
            "C": "Forcing developers to write code without using computer monitors",
            "D": "Randomly alternating project managers every single morning"
        },
        "correctAnswer": "A",
        "explanation": "Course Book Figure 48 shows how hybrid approaches blend predictive upfront architecture and contract baselining with agile iterative sprints to balance governance with delivery agility.",
        "whyOthersAreWrong": [
            "Weather conditions do not dictate software engineering frameworks.",
            "Developing without monitors is absurd.",
            "Rotating PMs daily destroys governance continuity."
        ],
        "examTrap": "Hybrid = *Predictive governance & budgeting* + *Agile iterative development*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Hybrid Methodologies in Practice"
    },
    {
        "id": "itpm-u6-s65-mcq-126", "topic": "Team Distribution Impact", "difficulty": "medium",
        "question": "How does team geographical distribution (co-located vs globally dispersed across multiple time zones) impact methodology selection?",
        "options": {
            "A": "Co-located teams thrive on informal agile face-to-face communication; globally dispersed teams require more formalized communication structures, clear interface contracts, and collaborative digital tooling",
            "B": "Globally dispersed teams can only use pure Waterfall from the 1970s",
            "C": "Co-located teams are legally required to use PRINCE2",
            "D": "Time zone differences have zero impact on software coordination"
        },
        "correctAnswer": "A",
        "explanation": "While agile can be scaled globally, physical distribution reduces spontaneous face-to-face interactions, necessitating more explicit interface documentation, electronic radiators, and asynchronous protocols.",
        "whyOthersAreWrong": [
            "Distributed teams successfully use modern scaled agile frameworks like LeSS and SAFe.",
            "There is no legal requirement mandating PRINCE2 for co-located teams.",
            "Time zone differences introduce major coordination delays."
        ],
        "examTrap": "Geographical distribution requires stronger *explicit interfaces* and intentional collaboration tooling.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Team Distribution Impact"
    },
    {
        "id": "itpm-u6-s65-mcq-127", "topic": "Organizational Culture Alignment", "difficulty": "hard",
        "question": "In an organization characterized by a strict 'Hierarchy Culture' with deeply ingrained bureaucratic approvals and rigid job descriptions, which methodology adoption strategy is most realistic?",
        "options": {
            "A": "PRINCE2 or a structured plan-driven hybrid, because it respects defined management levels, formal authorization gates, and clear role boundaries",
            "B": "Immediate radical transition to pure anarchic agile with zero managers",
            "C": "Firing the entire executive board and replacing them with junior developers",
            "D": "Cancelling all projects permanently"
        },
        "correctAnswer": "A",
        "explanation": "PRINCE2's clear hierarchy (Project Board -> PM -> Team Managers) and formal stage-gate authorizations naturally align with hierarchical corporate cultures, whereas extreme agile autonomy causes cultural rejection.",
        "whyOthersAreWrong": [
            "Radical anarchic transitions trigger intense executive resistance and organizational failure.",
            "Firing executive boards is not a project methodology strategy.",
            "Cancelling projects destroys business capability."
        ],
        "examTrap": "Match methodology to culture: Hierarchical cultures align best with *PRINCE2 / Plan-driven hybrid* governance.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Organizational Culture Alignment"
    },
    {
        "id": "itpm-u6-s65-mcq-128", "topic": "Project Size and Ceremony", "difficulty": "medium",
        "question": "As project size scales from a small 3-person team to a 200-person multi-vendor enterprise program, how must project ceremony and governance adjust?",
        "options": {
            "A": "Ceremony, formal interface definitions, risk management, and configuration controls must increase to manage complexity and coordination overhead",
            "B": "All project management must be eliminated to make the 200 people move faster",
            "C": "The team must switch exclusively to writing software code on paper",
            "D": "The project must reduce the number of meetings to zero"
        },
        "correctAnswer": "A",
        "explanation": "Large enterprise projects involve exponential coordination channels, substantial capital risk, and multi-vendor dependencies, demanding rigorous governance (PMBOK/PRINCE2/Scaled Agile).",
        "whyOthersAreWrong": [
            "Eliminating management in 200-person projects results in immediate chaos and failure.",
            "Paper coding is obsolete absurdity.",
            "Large projects require structured synchronization meetings."
        ],
        "examTrap": "Larger size and higher risk demand higher *governance formality* and structured interfaces.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Project Size and Ceremony"
    },
    {
        "id": "itpm-u6-s65-mcq-129", "topic": "Contractual Model Impact on Methodology", "difficulty": "hard",
        "question": "How does a commercial 'Fixed-Price, Fixed-Scope' contract impact the feasibility of using pure Agile?",
        "options": {
            "A": "It creates friction with Agile's principle of welcoming changing scope, often necessitating a plan-driven or hybrid framework with formal change-order control",
            "B": "It automatically guarantees that Agile will be 100% successful",
            "C": "It makes software coding illegal under international commercial law",
            "D": "It forces developers to work for free without corporate salary"
        },
        "correctAnswer": "A",
        "explanation": "Fixed-price/fixed-scope contracts legally lock scope, schedule, and cost. This directly clashes with Agile's flexible scope principle, requiring formal change control and baseline management.",
        "whyOthersAreWrong": [
            "Fixed-price contracts are a primary source of failure for naive agile adoptions.",
            "Commercial contracts do not make software development illegal.",
            "Salaries are paid according to employment contracts, not commercial terms."
        ],
        "examTrap": "Fixed-scope contracts conflict with Agile scope flexibility; they require *predictive baseline controls*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Contractual Model Impact on Methodology"
    },
    {
        "id": "itpm-u6-s65-mcq-130", "topic": "Comprehensive Methodology Selection Summary", "difficulty": "hard",
        "question": "A legacy insurance corporation is overhauling its core claims processing system ($50M budget, 150 developers across 4 vendors, strict financial audit regulations, but needing iterative user UI testing). What methodology design is best?",
        "options": {
            "A": "A robust Hybrid framework (combining PMBOK/PRINCE2 governance, formal procurement and audit baselines, with Scaled Agile/Scrum feature iterations for claims UI)",
            "B": "A pure undocumented trial-and-error approach with no project manager",
            "C": "Pure 1970s waterfall with zero customer interaction until final year rollout",
            "D": "Cancelling the project and forcing customers to file insurance claims by telegram"
        },
        "correctAnswer": "A",
        "explanation": "Large multi-vendor enterprise systems in regulated industries require predictive governance, procurement rigor, and auditability (PMBOK/PRINCE2) combined with iterative agile delivery for complex user workflows (Hybrid model).",
        "whyOthersAreWrong": [
            "Undocumented trial-and-error with $50M guarantees catastrophic corporate scandal.",
            "Pure waterfall with zero user input leads to severe usability failure.",
            "Telegrams are an obsolete telecommunications technology."
        ],
        "examTrap": "Complex enterprise projects with high auditability and modern UX demands require a *Hybrid framework*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Selection of the Appropriate Project Management Method"},
        "sourceUnit": 6, "sourceSection": "6.5", "sourceTopic": "Comprehensive Methodology Selection Summary"
    }
]

print(f"Prepared Section 6.5 MCQs: {len(s65_data)}")
