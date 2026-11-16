import json

s52_data = [
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Manifesto Year and Origin"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Manifesto Core Value 1"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Manifesto Core Value 2"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Manifesto Core Value 3"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Manifesto Core Value 4"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Manifesto Right vs Left Interpretation"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 1: Customer Satisfaction"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 2: Welcoming Change"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 3: Delivery Frequency"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 4: Daily Collaboration"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 5: Motivated Individuals"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 6: Face-to-Face Communication"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 7: Primary Progress Measure"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 8: Sustainable Development"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 9: Technical Excellence"
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
        "explanation": "Principle 10 provides the famous definition: 'Simplicity—the art of maximizing the amount of work not done—is essential.'",
        "whyOthersAreWrong": [
            "Basic if-else statements relate to coding syntax, not manifesto simplicity.",
            "Single-screen limits are arbitrary UI constraints.",
            "Omitting security is negligence, not simplicity."
        ],
        "examTrap": "Memorize this exact phrasing: 'the art of maximizing the amount of work not done'. It is a frequent IU exam trap.",
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 10: Definition of Simplicity"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 11: Self-Organizing Teams"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Principle 12: Regular Reflection"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Self-Organizing Teams: Authority Boundaries"
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
        "explanation": "Cockburn & Highsmith emphasize that what makes self-organizing agile teams exceptional is communication—continuous, direct, informal, and collaborative interaction.",
        "whyOthersAreWrong": [
            "NDAs between teammates destroy trust and open knowledge sharing.",
            "Daily individual bonuses create toxic internal competition.",
            "Relying solely on Jira comments slows communication and increases misunderstanding."
        ],
        "examTrap": "Communication is the lifeblood of agile; processes and tools are secondary to human conversation.",
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Team Communication"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Software Versioning Format"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Software Versioning: Major Number"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Software Processes"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Software Versioning: Build and Revision"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Cross-Functional Agile Team"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Mutual Accountability in Agile"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Response to Requirement Uncertainty"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Documentation Perspective"
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
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Technical Debt Management"
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
        "explanation": "Customer collaboration requires continuous, intimate interaction—typically embodied by an empowered Product Owner or on-site customer representative who clarifies requirements daily and provides immediate feedback.",
        "whyOthersAreWrong": [
            "Annual inspection provides feedback far too late to guide development.",
            "Legal counsel creates friction and slows communication.",
            "Marketing newsletters are one-way promotional broadcasts, not collaborative engineering."
        ],
        "examTrap": "Agile collaboration is daily and embedded, not an annual or quarterly contractual review.",
        "source": {"type": "course-book", "unit": 5, "section": "5.2", "topic": "Agile Software Processes"},
        "sourceUnit": 5, "sourceSection": "5.2", "sourceTopic": "Agile Customer Collaboration Practical Implementation"
    }
]

print(f"Prepared Section 5.2 MCQs: {len(s52_data)}")
