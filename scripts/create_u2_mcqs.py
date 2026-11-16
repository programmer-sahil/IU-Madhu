import json, os

u2_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-2"

mcqs = []

# Helper to add MCQ
def add_mcq(num, sec, topic, diff, q_type, q, optA, optB, optC, optD, ans, exp, wrong, trap, page):
    mcqs.append({
        "id": f"itpm-u2-s{sec.replace('.', '')}-mcq-{num:03d}",
        "subjectId": "it-project-management",
        "unit": 2,
        "unitId": 2,
        "section": sec,
        "topic": topic,
        "difficulty": diff,
        "type": q_type,
        "question": q,
        "options": {
            "A": optA,
            "B": optB,
            "C": optC,
            "D": optD
        },
        "correctAnswer": ans,
        "explanation": exp,
        "whyOthersAreWrong": wrong,
        "examTrap": trap,
        "source": {
            "type": "course-book",
            "unit": 2,
            "section": sec,
            "topic": topic,
            "page": page
        },
        "sourceUnit": 2,
        "sourceSection": sec,
        "sourceTopic": topic,
        "sourcePage": page
    })

# -----------------------------------------------------------------------------
# 2.1 PROJECT BREAKDOWN STRUCTURE & WORK PACKAGES (25 MCQs)
# -----------------------------------------------------------------------------
add_mcq(1, "2.1", "WBS Definition", "easy", "definition",
        "What is the primary definition and purpose of a Work Breakdown Structure (WBS)?",
        "A chronological Gantt chart illustrating task sequences",
        "A hierarchical decomposition of total project scope into manageable deliverable-oriented components",
        "A financial ledger recording cumulative project expenditures",
        "An organizational chart showing line management reporting relationships",
        "B",
        "A WBS is a hierarchical decomposition of the total project scope into smaller, deliverable-oriented components that can be managed independently, sequentially, or in parallel.",
        ["A Gantt chart is a schedule tool, not a scope breakdown hierarchy.", "A financial ledger tracks accounting costs, not deliverable decomposition.", "An organizational chart depicts corporate personnel hierarchy, not project scope."],
        "Do not confuse WBS with a sequential schedule; WBS represents scope hierarchy, not chronological timeline.", 35)

add_mcq(2, "2.1", "WBS Hierarchy Levels", "easy", "recall",
        "In the four-level WBS hierarchy presented in the course book, what does Level 1 represent?",
        "Individual coding tasks",
        "Functional modules",
        "The overall project or final product",
        "Subcontractor work packages",
        "C",
        "Level 1 represents the highest, most abstract level: the overall project or total product deliverable.",
        ["Individual tasks are found at Level 4.", "Functional modules reside at Level 3.", "Subcontractor work packages are mapped at Levels 2 or 3."],
        "Level 1 is always the total project/product.", 36)

add_mcq(3, "2.1", "WBS Hierarchy Levels", "medium", "classification",
        "At which level of the WBS hierarchy are detailed schedule, cost, and resource estimates primarily formulated?",
        "Level 1 (Project)",
        "Level 2 (Major Areas/Phases)",
        "Level 3 (Functional Entities)",
        "Level 4 (Individual Tasks)",
        "D",
        "Detailed effort, schedule, and resource estimations are made at the lowest level (Level 4 - individual tasks), which then aggregate upward.",
        ["Level 1 is too high-level for task estimates.", "Level 2 represents major phases or work areas.", "Level 3 represents functional groupings."],
        "Estimates originate at Level 4 tasks and roll upward to Levels 3, 2, and 1.", 36)

add_mcq(4, "2.1", "Bottom-Up Roll-Up", "medium", "concept",
        "What should the project team do if the bottom-up roll-up of task estimates exceeds the project's authorized constraints?",
        "Silently delete the contingency reserves",
        "Reconcile and adjust the WBS or negotiate project requirements with the sponsor",
        "Proceed without informing the sponsor and absorb overruns later",
        "Immediately abandon the WBS methodology",
        "B",
        "When the bottom-up roll-up exceeds baseline constraints (schedule or budget), the project manager must reconcile differences by adjusting tasks, scope, or negotiating requirements with the sponsor.",
        ["Deleting reserves removes risk protection.", "Proceeding secretly breaches project governance.", "Abandoning WBS leaves the project uncontrolled."],
        "Roll-up reconciliation is a standard governance requirement before finalizing baselines.", 37)

add_mcq(5, "2.1", "Work Package Definition", "easy", "definition",
        "What is a Work Package (WP) in project management?",
        "A collection of all marketing materials",
        "A manageable grouping of related tasks at a lower WBS level with assigned accountability and deliverables",
        "A physical container for shipping computer hardware",
        "The complete project charter document",
        "B",
        "A work package is a manageable grouping of related tasks at a lower level of the WBS with assigned accountability, budget, timeline, and defined deliverables.",
        ["Marketing materials are external project artifacts.", "A physical shipping box is hardware packaging.", "The project charter is the foundational authorization document."],
        "A work package groups tasks under a single accountable owner.", 37)

add_mcq(6, "2.1", "Milestone Characteristics", "easy", "concept",
        "Which attribute fundamentally characterizes a project milestone?",
        "It requires the largest budget allocation in the project",
        "It has a duration of zero (duration = 0) and consumes no resources",
        "It spans across the entire project lifecycle",
        "It can only be authorized by external regulatory bodies",
        "B",
        "A milestone represents a significant event or transition with zero duration and zero resource consumption.",
        ["Milestones consume zero budget directly.", "Milestones are discrete points in time, not ongoing spans.", "Milestones are established internally by the project team and sponsor."],
        "Milestone duration is ALWAYS zero.", 38)

add_mcq(7, "2.1", "Milestones vs Tasks", "medium", "comparison",
        "How does a milestone differ from a task in time planning?",
        "A milestone has duration and effort; a task has neither",
        "A task represents work consuming time and resources; a milestone is an instantaneous progress marker",
        "Tasks only appear in agile projects; milestones only appear in waterfall projects",
        "Milestones always precede all project tasks",
        "B",
        "Tasks represent active work packages that consume time, effort, and budget; milestones mark instantaneous progress verification points with zero duration.",
        ["This reverses the definitions.", "Both tasks and milestones exist in plan-driven and agile frameworks.", "Milestones occur at intermediate and terminal points throughout the schedule."],
        "Tasks consume resources; milestones mark events.", 38)

add_mcq(8, "2.1", "Agile Work Breakdown", "easy", "recall",
        "In agile software development, what is the typical hierarchical breakdown corresponding to the WBS concept?",
        "Policy -> Law -> Regulation",
        "Epic -> User Story -> Task",
        "Portfolio -> Corporation -> Subsidiary",
        "Vision -> Charter -> Contract",
        "B",
        "Agile teams decompose broad customer requirements from high-level Epics into manageable User Stories, and further into granular technical Tasks.",
        ["Policy/Law/Regulation is legal hierarchy.", "Portfolio/Corporation is business structure.", "Vision/Charter/Contract is project governance documentation."],
        "Agile breakdown: Epic -> User Story -> Task.", 38)

add_mcq(9, "2.1", "Requirements Traceability Matrix", "medium", "definition",
        "What is the primary purpose of a Requirements Traceability Matrix (RTM)?",
        "To track daily team attendance and working hours",
        "To provide a bidirectional link connecting requirements from origin through architecture, code, and test cases",
        "To calculate earned value variances and cost performance indices",
        "To rank team members according to performance appraisal scores",
        "B",
        "The RTM maps requirements forward to design components, code modules, and test verification cases, and backward to business needs, preventing missing work and gold plating.",
        ["Attendance tracking is HR timesheet management.", "Cost variances are tracked via EVM.", "Performance appraisal is HR management."],
        "RTM ensures 100% coverage: every requirement has a test case; no unrequested code is built.", 39)

add_mcq(10, "2.1", "Scope Creep Prevention", "medium", "concept",
        "How does the Requirements Traceability Matrix help prevent 'gold plating' (unauthorized scope expansion)?",
        "By automatically firing programmers who add extra features",
        "By ensuring that any work item or code component without an authorized source requirement is identified and rejected",
        "By enforcing strict waterfall sequencing with no change requests permitted",
        "By eliminating all code testing phases",
        "B",
        "Any work item or code module that cannot be mapped backward to an approved requirement in the RTM is unauthorized and excluded.",
        ["Automated termination is unrealistic.", "RTM accommodates approved changes; it does not freeze changes arbitrarily.", "Testing is essential to the RTM."],
        "Gold plating is detected when code has no parent requirement in the traceability matrix.", 39)

add_mcq(11, "2.1", "WBS Dictionary", "medium", "recall",
        "What is the function of the WBS Dictionary in scope management?",
        "It translates technical programming keywords into multiple natural languages",
        "It provides detailed descriptive documentation for each WBS component including scope, deliverables, and acceptance criteria",
        "It records employee salaries and contractual billing rates",
        "It serves as a glossary of generic IT hardware terms",
        "B",
        "The WBS Dictionary accompanies the WBS to provide detailed descriptions of the work, deliverables, resource requirements, and acceptance criteria for each work package.",
        ["It is not a linguistic language translation tool.", "Billing rates are kept in procurement/cost records.", "It describes specific project work packages, not general hardware."],
        "The WBS dictionary elaborates the content of each work package box.", 37)

add_mcq(12, "2.1", "WBS Decomposition Rule", "hard", "concept",
        "When decomposing a project into a WBS, what guideline indicates that a work package has been decomposed sufficiently?",
        "When it contains more than 500 sub-tasks",
        "When it can be reliably estimated in cost and duration, assigned to a single owner, and produces a distinct measurable deliverable",
        "When every single line of code is listed as an individual WBS box",
        "When the team reaches at least 15 hierarchical levels",
        "B",
        "Decomposition stops when work packages are small enough to estimate accurately, assign to an accountable person/team, and verify with a clear deliverable.",
        ["500 tasks per work package is excessively large.", "Listing single lines of code produces micromanagement chaos.", "15 levels creates unmanageable administrative overhead."],
        "Sufficient decomposition: estimable, assignable, measurable deliverable.", 37)

add_mcq(13, "2.1", "Deliverable Definition", "easy", "definition",
        "What is a project deliverable?",
        "Any unique and verifiable product, result, or capability to perform a service that must be produced to complete a phase or project",
        "The shipping invoice sent by an external courier",
        "The coffee served during daily stand-up meetings",
        "The verbal praise given by a project manager to a developer",
        "A",
        "A deliverable is a tangible, verifiable work product or capability produced to fulfill project objectives.",
        ["A shipping invoice is an operational receipt.", "Coffee is office hospitality.", "Verbal praise is interpersonal feedback."],
        "Deliverables are verifiable outcomes (e.g. software build, architecture design, test report).", 37)

add_mcq(14, "2.1", "WBS vs Organization Structure", "medium", "trap",
        "Why is it an exam trap to structure a WBS strictly according to company departmental departments rather than deliverables?",
        "Departments are legally prohibited from participating in IT projects",
        "Department-based WBS often obscures the actual product deliverables and creates cross-functional communication silos",
        "A deliverable-oriented WBS cannot be understood by developers",
        "Software projects must only follow agile story maps and never use WBS",
        "B",
        "The course emphasizes that a deliverable-oriented WBS focuses on what is being created. Departmental WBS structures focus on organizational silos, obscuring total deliverable integration.",
        ["Departments routinely participate in projects.", "Deliverable-oriented WBS is widely used and understood.", "Plan-driven and hybrid projects rely heavily on WBS."],
        "Deliverable-oriented WBS > functional department silo breakdown.", 36)

add_mcq(15, "2.1", "Requirements Origin", "easy", "recall",
        "From which initiating document do high-level requirements for the WBS primarily originate?",
        "The employee handbook",
        "The signed Project Charter and stakeholder agreements",
        "The annual financial tax audit report",
        "The company cafeteria menu",
        "B",
        "High-level requirements and scope boundaries are established in the Project Charter authorized by the sponsor.",
        ["Employee handbook governs HR policies.", "Tax reports are external financial filings.", "Cafeteria menu is unrelated."],
        "The Project Charter defines high-level scope and constraints.", 35)

add_mcq(16, "2.1", "Work Package Ownership", "medium", "concept",
        "Why should each work package have a single designated work-package leader (owner)?",
        "To ensure clear accountability for schedule, cost, and deliverable quality",
        "Because multi-person leadership is legally prohibited under German commercial code",
        "To prevent team members from talking to each other",
        "Because only managers are allowed to look at work packages",
        "A",
        "Single-point accountability ensures unambiguous responsibility for the delivery, timeline, and cost of that work package.",
        ["German law does not govern internal task assignments in this manner.", "Team communication should be active.", "All team members work with work packages."],
        "One owner per work package ensures clear accountability.", 37)

add_mcq(17, "2.1", "WBS Level 2 Structuring", "medium", "classification",
        "Which of the following represents a valid approach to structuring Level 2 in a WBS?",
        "Alphabetical order of all developers' first names",
        "Major project phases (e.g., Conception, Design, Implementation) or major functional subsystem areas",
        "The monetary cost of individual computer monitors",
        "Random assignment based on lottery numbers",
        "B",
        "Level 2 is typically organized either by major project lifecycle phases or by major architectural subsystems/work areas.",
        ["Developer names violate deliverable orientation.", "Monitor costs are hardware line items.", "Random assignment is non-methodological."],
        "Level 2 divides total scope by phases or major product subsystems.", 36)

add_mcq(18, "2.1", "Traceability Across Lifecycle", "hard", "scenario",
        "During user acceptance testing, a client queries why a specific cryptographic auditing module was developed. Which document definitively proves its contractual validity?",
        "The team's coffee expense ledger",
        "The Requirements Traceability Matrix linking the module to a specific signed security requirement",
        "A developer's personal browser search history",
        "The project manager's LinkedIn profile",
        "B",
        "The RTM provides the audit trail connecting the cryptographic module back to the original signed security requirement.",
        ["Expense ledgers track money, not requirement scope.", "Browser search history is irrelevant.", "LinkedIn profile is social media."],
        "Traceability matrix provides the definitive audit trail.", 39)

add_mcq(19, "2.1", "Agile Story Splitting", "medium", "concept",
        "Why do agile teams split large Epics into smaller User Stories and Tasks?",
        "To increase the total number of meetings held per day",
        "To create manageable units of work that can be estimated, developed, and tested within a single sprint iteration",
        "To bypass the need for code review",
        "To prevent the Product Owner from inspecting progress",
        "B",
        "Breaking epics into small user stories ensures they can be completed within a sprint, providing rapid feedback and continuous delivery.",
        ["Agile aims to eliminate unnecessary meetings.", "Code review is still mandatory.", "Product Owners actively inspect user stories in sprint reviews."],
        "Small stories enable fast feedback and reliable sprint estimation.", 38)

add_mcq(20, "2.1", "Task Definition", "easy", "definition",
        "In the context of Level 4 WBS, what is a 'task'?",
        "The strategic vision of the enterprise",
        "The smallest unit of planned work with an estimated duration, resource requirement, and specific deliverable",
        "An annual performance appraisal interview",
        "A permanent corporate policy",
        "B",
        "A task is the smallest planned work element within a work package, with specific duration, effort, and output.",
        ["Vision is an executive strategic concept.", "Performance appraisal is HR management.", "Policy is permanent organizational governance."],
        "Tasks are the discrete execution units at Level 4.", 36)

add_mcq(21, "2.1", "WBS Coding System", "medium", "recall",
        "What is the purpose of assigning numeric codes (e.g., 1.1, 1.2.1, 1.2.2) to WBS elements?",
        "To generate lottery numbers for team bonuses",
        "To uniquely identify each element's hierarchical position and enable cost/schedule aggregation",
        "To encrypt sensitive customer data",
        "To indicate developer salary brackets",
        "B",
        "WBS numbering creates a structured code of accounts, facilitating roll-up of cost, schedule, and progress tracking.",
        ["Bonuses are unrelated.", "Encryption uses cryptographic ciphers.", "Salary brackets are HR confidential data."],
        "WBS code of accounts identifies hierarchical parent-child relationships.", 36)

add_mcq(22, "2.1", "Deliverable Acceptance Criteria", "medium", "concept",
        "What must accompany each deliverable description in the WBS dictionary to avoid disputes upon completion?",
        "The home address of the lead programmer",
        "Explicit, measurable acceptance criteria agreed with the customer or stakeholder",
        "A guarantee that no bugs will ever be discovered in the future",
        "An automatic refund waiver",
        "B",
        "Clear, measurable acceptance criteria ensure mutual agreement on what constitutes acceptable quality and completeness.",
        ["Personal addresses are private HR data.", "A zero-bug guarantee across eternity is impossible.", "Refund waivers are legal contracting clauses."],
        "Clear acceptance criteria prevent end-of-project disputes.", 37)

add_mcq(23, "2.1", "WBS Revision Trigger", "hard", "scenario",
        "If a customer requests a major change in scope during project execution, how does the WBS reflect this?",
        "The team ignores the request and builds the original scope",
        "Through formal change control: once approved, the WBS, schedule, and cost baselines are officially updated",
        "The developer modifies the code secretly without updating the WBS",
        "The project is terminated immediately",
        "B",
        "Scope changes must pass through change control; if approved, the WBS and subsidiary baselines are formally updated.",
        ["Ignoring requests damages client alignment.", "Secret changes cause scope creep and baseline divergence.", "Termination is an extreme measure reserved for non-viable projects."],
        "Approved changes update the WBS baseline formally.", 37)

add_mcq(24, "2.1", "100% Rule in WBS", "medium", "concept",
        "What does the classic '100% Rule' state regarding the Work Breakdown Structure?",
        "100% of team members must work on the same task simultaneously",
        "The WBS must encompass 100% of the work defined by the project scope, and each level must roll up to 100% of its parent",
        "The project budget must have 100% contingency added",
        "Every developer must write 100 lines of code per hour",
        "B",
        "The 100% Rule states that the WBS includes 100% of the work defined by project scope and captures all deliverables—no more, no less.",
        ["Swarming on one task is an extreme agile practice, not the WBS rule.", "Contingency is typically 10-20%, not 100%.", "Lines of code per hour is an obsolete metric."],
        "100% rule: WBS includes all project work and nothing outside scope.", 36)

add_mcq(25, "2.1", "Milestone Identification", "easy", "classification",
        "Which of the following is the best example of a true milestone?",
        "Coding the user login module (estimated: 14 days)",
        "System Architecture Design Document Approved by Sponsor",
        "Refactoring the database schema over two weeks",
        "Conducting daily 15-minute stand-up meetings",
        "B",
        "'System Architecture Design Document Approved' represents a point-in-time event marking successful sign-off with zero duration.",
        ["Coding for 14 days is an ongoing task.", "Refactoring over two weeks is a task.", "Daily stand-up meetings are recurring activities."],
        "Milestones are instant achievements/sign-offs, not durations.", 38)

# -----------------------------------------------------------------------------
# 2.2 PRIORITIZATION (25 MCQs)
# -----------------------------------------------------------------------------
add_mcq(26, "2.2", "Urgency vs Importance Matrix", "easy", "recall",
        "In the Urgency x Importance Matrix, what action is recommended for tasks in Quadrant 1 (High Importance and High Urgency)?",
        "Delegate them to external vendors immediately",
        "Critical focus: act on them immediately with top priority",
        "Postpone them until the end of the year",
        "Eliminate them as distractions",
        "B",
        "Quadrant 1 represents critical, pressing crises and deadlines that require immediate personal focus and action.",
        ["Delegation is typical for low-importance, high-urgency tasks (Q3).", "Postponing critical crises causes project failure.", "Elimination is for Q4 distractions."],
        "High Importance + High Urgency = Immediate Critical Focus.", 40)

add_mcq(27, "2.2", "Strategic Quadrant in Matrix", "medium", "concept",
        "In the Urgency x Importance Matrix, which quadrant represents proactive strategic planning and risk prevention?",
        "Quadrant 1 (High Urgency, High Importance)",
        "Quadrant 2 (Low Urgency, High Importance)",
        "Quadrant 3 (High Urgency, Low Importance)",
        "Quadrant 4 (Low Urgency, Low Importance)",
        "B",
        "Quadrant 2 items are highly important for long-term strategic success (planning, relationship building, prevention) but lack immediate urgency, requiring deliberate scheduling.",
        ["Q1 is crisis fighting.", "Q3 represents urgent interruptions of low strategic value.", "Q4 represents non-productive distractions."],
        "Q2 = Strategic goals and prevention. Requires deliberate focus before it becomes a Q1 crisis.", 40)

add_mcq(28, "2.2", "Kano Model Categories", "easy", "recall",
        "What three primary categories of customer requirements are distinguished in the Kano Model?",
        "Expensive, Moderate, Cheap",
        "Basic (Must-be), Performance (Satisfiers), and Delighters (Attractive)",
        "Software, Hardware, Firmware",
        "Initiation, Planning, Execution",
        "B",
        "The Kano model classifies product requirements into Basic requirements, Performance attributes, and Delighters.",
        ["Cost tiers are not the Kano model.", "Hardware/Software are technical system divisions.", "Project phases are lifecycle stages."],
        "Kano categories: Basic, Performance, Delighter.", 41)

add_mcq(29, "2.2", "Kano Basic Requirements", "medium", "concept",
        "What is the key characteristic of 'Basic' (Must-be) requirements in the Kano Model?",
        "They generate disproportionately high customer delight when present",
        "Their presence is taken for granted; their absence causes extreme customer dissatisfaction, but exceeding them yields diminishing returns",
        "They are completely optional and only implemented if budget permits",
        "They are always the cheapest features to build",
        "B",
        "Basic requirements are non-negotiable minimums. If missing, the customer is furious; if present, satisfaction remains neutral because they were expected.",
        ["Delighters create excitement, not basic features.", "Basic features are strictly mandatory.", "Basic features can be technically complex and expensive."],
        "Basic features: absence = dissatisfaction; presence = taken for granted (diminishing returns).", 41)

add_mcq(30, "2.2", "Kano Delighters Over Time", "hard", "concept",
        "How do customer expectations regarding 'Delighters' evolve over time according to Kano theory?",
        "Delighters become permanently exciting forever",
        "Over time, delighters become standard industry expectations and decay into basic requirements",
        "Delighters turn into project risks that must be avoided",
        "Delighters lose all monetary value and are removed from software",
        "B",
        "As competitors adopt the novel feature, customers become accustomed to it; what was once an unexpected delighter decays into an expected basic requirement (e.g. Wi-Fi on airplanes, touchscreen phones).",
        ["Excitement decays as familiarity increases.", "Delighters do not become risks.", "They become standard expected features."],
        "Kano decay: Delighter -> Performance -> Basic over time.", 42)

add_mcq(31, "2.2", "MoSCoW Method Acronym", "easy", "recall",
        "What does the acronym MoSCoW stand for in project requirement prioritization?",
        "Management, Operations, Scope, Cost, Work",
        "Must have, Should have, Could have, Won't have (this time)",
        "Milestones, Objectives, Standards, Controls, Warnings",
        "Monitoring, Organizing, Scheduling, Controlling, Winning",
        "B",
        "MoSCoW stands for Must-have, Should-have, Could-have, and Won't-have.",
        ["Other acronyms are fictitious inventions."],
        "MoSCoW = Must, Should, Could, Won't have.", 42)

add_mcq(32, "2.2", "MoSCoW Must-Have", "easy", "definition",
        "How is a 'Must-Have' requirement defined under the MoSCoW framework?",
        "A feature that would be nice to show during marketing demos",
        "A mandatory, non-negotiable requirement without which the product cannot launch or is illegal/unsafe",
        "A feature requested by a junior team member",
        "An item deferred to future version releases",
        "B",
        "Must-haves represent the critical minimum viable product. Without them, delivery fails or cannot legally operate.",
        ["Nice-to-have is Could-have.", "Junior requests must still meet the criteria.", "Deferred items are Won't-have."],
        "Without Must-haves, the system cannot go live.", 43)

add_mcq(33, "2.2", "MoSCoW Should-Have vs Could-Have", "medium", "comparison",
        "What is the key distinction between a 'Should-Have' and a 'Could-Have' requirement?",
        "Should-haves have no business value; Could-haves have maximum value",
        "Should-haves are highly important but a viable workaround exists; Could-haves are desirable but will be dropped first under resource pressure",
        "Could-haves are required by statutory law; Should-haves are optional",
        "Should-haves cannot be estimated; Could-haves have fixed costs",
        "B",
        "Should-haves are critical but not showstoppers if a temporary workaround exists; Could-haves provide small enhancements and are dropped immediately if schedule tightens.",
        ["Both have business value.", "Statutory requirements are Must-haves.", "Both can be estimated."],
        "Should-have = important with workaround; Could-have = nice enhancement dropped first.", 43)

add_mcq(34, "2.2", "MoSCoW Won't-Have", "medium", "concept",
        "Why is it beneficial to formally agree on 'Won't-Have' requirements in MoSCoW?",
        "It insults the customer so they reduce their expectations",
        "It sets clear scope boundaries and prevents scope creep by documenting agreed exclusions for the current release",
        "It permanently bans the feature from ever being developed by any software company",
        "It reduces the developer's hourly wage",
        "B",
        "Explicitly agreeing on what will NOT be delivered protects the team from scope creep and clarifies mutual expectations.",
        ["It builds professional clarity, not insults.", "Won't-haves can be built in later releases.", "Wage rates are unaffected."],
        "Won't-have establishes the out-of-scope boundary for this release.", 43)

add_mcq(35, "2.2", "Departmental Prioritization Differences", "hard", "scenario",
        "The compliance department classifies data export auditing as a 'Must-have', while the sales department classifies it as a 'Could-have' and demands flashy UI animations as 'Must-have'. What does this illustrate?",
        "Compliance officers do not understand IT projects",
        "Different organizational departments have conflicting perspectives and priorities based on their operational mandates",
        "Sales requirements always override all other departments",
        "The project should be paused until all departments merge into one",
        "B",
        "Stakeholders view value through their functional lens: legal/compliance focuses on regulatory risk; sales focuses on market appeal. The PM must reconcile these differences.",
        ["Compliance requirements are legally vital.", "No department unilaterally overrides statutory obligations.", "Merging departments is organizational nonsense."],
        "Conflicting departmental priorities require stakeholder negotiation and alignment.", 43)

add_mcq(36, "2.2", "Combining Kano and MoSCoW", "hard", "concept",
        "How can the Kano Model and MoSCoW method be combined effectively during requirements planning?",
        "By replacing all requirements with random choices",
        "By mapping Kano Basic requirements directly to MoSCoW Must-haves, and selecting a balanced mix of Performance and Delighters as Should/Could-haves",
        "By using Kano only for hardware and MoSCoW only for coffee purchases",
        "By discarding all customer feedback",
        "B",
        "Basic requirements must become Must-haves; Performance features become Should-haves; select Delighters are chosen as high-yield Could-haves or Should-haves.",
        ["Methodological synthesis is deliberate, not random.", "Both models apply to software systems.", "Customer feedback drives both models."],
        "Kano Basic -> MoSCoW Must; Kano Performance -> Should; Kano Delighter -> selected Could/Should.", 44)

add_mcq(37, "2.2", "Kano Diminishing Returns", "medium", "concept",
        "Why does over-investing in Kano 'Basic' requirements produce diminishing returns?",
        "Because basic features are illegal to build in Germany",
        "Because once the basic requirement is fully satisfied, additional investment does not increase customer satisfaction beyond neutral acceptance",
        "Because developers refuse to code basic requirements",
        "Because basic requirements automatically introduce security vulnerabilities",
        "B",
        "Customers expect basic features to work seamlessly (e.g., telephone call connection); spending twice as much on making calls connect faster yields virtually zero incremental customer satisfaction.",
        ["Basic features are legal and mandatory.", "Developers follow requirements.", "Basic features do not inherently add vulnerabilities."],
        "Basic features cap out at neutral satisfaction; extra investment yields zero extra delight.", 41)

add_mcq(38, "2.2", "Kano Performance Features", "easy", "concept",
        "What characterizes a 'Performance' (Satisfier) attribute in the Kano Model?",
        "Satisfaction is proportional to the level of functionality provided (more is better)",
        "Customer satisfaction drops as functionality increases",
        "Customers never care about performance features",
        "Performance features are secret algorithms hidden from users",
        "A",
        "Performance attributes exhibit a linear relationship: higher speed, larger storage, or longer battery life directly increases satisfaction.",
        ["Satisfaction increases with performance.", "Customers actively evaluate performance attributes.", "They are visible product capabilities."],
        "Performance features: more is better (linear customer satisfaction).", 41)

add_mcq(39, "2.2", "Urgency vs Importance Quadrant 3", "medium", "classification",
        "In the Urgency x Importance Matrix, how should a project manager handle Quadrant 3 items (High Urgency, Low Importance)?",
        "Dedicate 100% of their working hours to them",
        "Delegate, automate, or minimize time spent, as they are urgent distractions lacking strategic impact",
        "Treat them as critical project milestones",
        "Report them immediately to the Board of Directors",
        "B",
        "Q3 consists of pressing requests or phone calls that seem urgent to others but contribute little to project success; PMs should delegate or limit time on them.",
        ["Spending all hours on Q3 neglects strategy.", "Q3 items are not milestones.", "The Board deals with high-level governance, not Q3 interruptions."],
        "Q3 = Urgent but Low Importance. Delegate or minimize.", 40)

add_mcq(40, "2.2", "MoSCoW Percentage Distribution", "hard", "concept",
        "What risk arises if a project team classifies 90% of all requirements as 'Must-have' in MoSCoW?",
        "The project finishes 90% faster",
        "The team loses all schedule buffer and scope flexibility, making cost or deadline overruns inevitable when unexpected issues occur",
        "The customer refuses to pay for Must-haves",
        "The team can no longer use agile frameworks",
        "B",
        "If almost everything is a Must-have, there is no scope flexibility to drop lower-priority items when delays strike, forcing project failure.",
        ["Over-classifying must-haves increases schedule risk, not speed.", "Customers gladly pay for essential must-haves.", "Agile requires scope flexibility."],
        "Too many Must-haves destroys schedule flexibility.", 43)

add_mcq(41, "2.2", "Urgency x Importance Quadrant 4", "easy", "recall",
        "What characterizes Quadrant 4 (Low Urgency and Low Importance) in time management?",
        "Urgent server crashes",
        "Time-wasting activities and trivia that should be eliminated or strictly limited",
        "Core architectural decisions",
        "Customer contract negotiations",
        "B",
        "Q4 represents non-urgent, non-important activities (social media scrolling, aimless reorganizing) that waste productive time.",
        ["Server crashes are Q1 crises.", "Architecture decisions are Q2 strategic work.", "Contract negotiations are Q1 or Q2."],
        "Q4 = Low Urgency + Low Importance. Eliminate / limit.", 40)

add_mcq(42, "2.2", "Kano Evaluation Questionnaire", "hard", "concept",
        "How are user opinions collected to classify a feature in the Kano Model?",
        "By asking users how they feel if the feature is PRESENT (functional) and how they feel if it is ABSENT (dysfunctional)",
        "By asking users how much cash they have in their bank account",
        "By measuring brain waves while users sleep",
        "By forcing users to write unit tests",
        "A",
        "The Kano methodology pairs functional questions (presence) with dysfunctional questions (absence) on a 5-point scale to categorize features.",
        ["Bank balance is irrelevant to product delight.", "Sleep brain waves are medical research.", "Users do not write unit tests."],
        "Kano pairs functional (present) and dysfunctional (absent) questions.", 42)

add_mcq(43, "2.2", "Prioritization Criteria Alignment", "medium", "scenario",
        "A healthcare IT project has limited budget. Which requirement must be prioritized first under all models?",
        "Patient data export in 15 different font choices",
        "Compliance with mandatory statutory medical data privacy regulations",
        "A custom 3D animated startup logo",
        "Background music in the clinic waiting room app",
        "B",
        "Statutory compliance is a non-negotiable legal requirement—a Kano Basic and MoSCoW Must-have.",
        ["Font choices are Could-haves.", "3D logos are non-essential Delighters.", "Background music is low-priority trivia."],
        "Statutory / regulatory compliance is always a non-negotiable Must-have.", 43)

add_mcq(44, "2.2", "Prioritization Frequency", "medium", "concept",
        "Why is prioritization considered a continuous activity throughout the project lifecycle rather than a one-time task?",
        "Because developers forget what they were working on every morning",
        "Because stakeholder requirements, market conditions, technical constraints, and available resources evolve over time",
        "Because project managers are legally required to change priorities daily",
        "Because software automatically changes its own code",
        "B",
        "Prioritization must adapt as customer needs shift, new competitors appear, or technical feasibility challenges emerge.",
        ["Developers use sprint backlogs.", "Daily legal mandates do not exist.", "Code does not change autonomously."],
        "Prioritization is dynamic as project context evolves.", 40)

add_mcq(45, "2.2", "Scope De-scoping Strategy", "hard", "scenario",
        "Two weeks before the scheduled release date, testing reveals critical performance bottlenecks. According to MoSCoW, which action should the PM take first to protect the launch date?",
        "Fire the lead architect",
        "Postpone or drop the agreed 'Could-have' features to free up developer capacity for fixing performance",
        "Delete all 'Must-have' authentication modules",
        "Demand that developers work 24 hours a day without sleep",
        "B",
        "MoSCoW provides flexibility by sacrificing Could-haves first, preserving core Must-have delivery within schedule constraints.",
        ["Firing the architect causes catastrophic disruption.", "Must-haves cannot be dropped.", "Extreme overtime causes errors and burnout."],
        "Under schedule pressure, drop Could-haves first to protect Must-haves.", 43)

add_mcq(46, "2.2", "Basic Feature Failure Case", "medium", "scenario",
        "An innovative new mobile banking app features AI investment advice (delighter) but frequently fails to display the user's basic account balance. What will customer sentiment be according to Kano?",
        "Extremely satisfied because the AI advice is fascinating",
        "Deeply dissatisfied because the basic, must-be requirement is broken",
        "Neutral because banking apps are always imperfect",
        "Indifferent to money",
        "B",
        "Delighters cannot compensate for failing basic requirements. Absence of a must-be feature causes extreme customer dissatisfaction.",
        ["Delighters do not make up for basic failures.", "Customers expect basic reliability.", "Financial users care deeply about accuracy."],
        "Broken Basic requirement = extreme dissatisfaction, regardless of delighters.", 41)

add_mcq(47, "2.2", "Kano Reverse Category", "hard", "concept",
        "In the extended Kano Model, what is a 'Reverse' requirement?",
        "A requirement that can only be developed backward in time",
        "A feature whose presence actually causes customer dissatisfaction because users prefer simplicity",
        "A feature that costs negative money to build",
        "A requirement that reverses the direction of the computer fan",
        "B",
        "A reverse attribute is one where users actively dislike having it (e.g. intrusive automated popups or overly complex toolbars).",
        ["Time travel is impossible.", "Negative cost is a financial fallacy.", "Hardware fan direction is irrelevant."],
        "Reverse requirement: presence causes dissatisfaction; users prefer its absence.", 42)

add_mcq(48, "2.2", "MoSCoW vs Kano Alignment", "medium", "comparison",
        "Which of the following pairings represents the most logical alignment between Kano and MoSCoW?",
        "Kano Basic <-> MoSCoW Won't-have",
        "Kano Basic <-> MoSCoW Must-have",
        "Kano Delighter <-> MoSCoW Must-have",
        "Kano Performance <-> MoSCoW Won't-have",
        "B",
        "Kano Basic requirements are mandatory non-negotiables, directly aligning with MoSCoW Must-haves.",
        ["Basic is never won't-have.", "Delighters are not mandatory must-haves.", "Performance features are not dropped by default."],
        "Basic = Must-have.", 44)

add_mcq(49, "2.2", "Prioritization Bias", "medium", "concept",
        "What common cognitive bias often distorts project requirement prioritization?",
        "Recency bias / loud stakeholder effect: giving priority to the most recent or aggressive stakeholder request regardless of strategic value",
        "Strict adherence to mathematical algorithms",
        "Excessive documentation of test cases",
        "Relying solely on automated linting tools",
        "A",
        "Unstructured prioritization falls prey to the 'squeaky wheel' or loudest stakeholder, pushing low-value requests ahead of critical work.",
        ["Algorithms reduce bias.", "Test documentation is good engineering.", "Linting is code formatting."],
        "Loudest stakeholder bias distorts rational prioritization.", 40)

add_mcq(50, "2.2", "Minimum Viable Product (MVP)", "easy", "concept",
        "In modern IT project management, which MoSCoW category constitutes the core of a Minimum Viable Product (MVP)?",
        "Could-have",
        "Must-have",
        "Won't-have",
        "Wish-list",
        "B",
        "The MVP comprises the essential Must-have requirements needed to validate the product in the market with real users.",
        ["Could-haves are non-essential enhancements.", "Won't-haves are excluded from this release.", "Wish-lists are unprioritized ideas."],
        "MVP = All Must-have requirements.", 43)

# -----------------------------------------------------------------------------
# 2.3 TIME PLANNING, MILESTONES, GANTT CHART (25 MCQs)
# -----------------------------------------------------------------------------
add_mcq(51, "2.3", "Precedence Relationship FS", "easy", "definition",
        "What does a Finish-to-Start (FS) precedence dependency mean?",
        "The successor activity cannot start until the predecessor activity has finished",
        "Both activities must start at the exact same millisecond",
        "The predecessor cannot start until the successor finishes",
        "Neither activity is ever allowed to finish",
        "A",
        "Finish-to-Start is the most common relationship: Activity B cannot commence until Activity A is completed.",
        ["Same start time is Start-to-Start (SS).", "This describes an impossible circular reverse dependency.", "Project activities must finish."],
        "FS: Predecessor finishes before Successor can start.", 44)

add_mcq(52, "2.3", "Precedence Relationship SS", "easy", "definition",
        "What does a Start-to-Start (SS) relationship signify?",
        "The successor activity cannot start until the predecessor activity has started",
        "The successor cannot finish until the predecessor finishes",
        "Both activities must be cancelled immediately",
        "The successor finishes before the predecessor starts",
        "A",
        "Start-to-Start means Activity B can begin once Activity A has begun (e.g. code writing starts, and unit test writing can start in parallel).",
        ["Successor finishing with predecessor is Finish-to-Finish (FF).", "Cancellation is not a schedule dependency.", "Impossible chronological reversal."],
        "SS: Predecessor starts, enabling Successor to start.", 44)

add_mcq(53, "2.3", "Precedence Relationship FF", "easy", "definition",
        "What does a Finish-to-Finish (FF) relationship specify?",
        "The successor activity cannot finish until the predecessor activity has finished",
        "Both activities must start together",
        "The project has reached permanent termination",
        "Activities have zero duration",
        "A",
        "Finish-to-Finish dictates that Activity B cannot complete until Activity A completes (e.g. documentation review cannot finish until document writing finishes).",
        ["Starting together is SS.", "FF is a dependency, not project termination.", "Activities have durations."],
        "FF: Successor cannot finish until Predecessor finishes.", 45)

add_mcq(54, "2.3", "Precedence Relationship SF", "medium", "definition",
        "What does the rare Start-to-Finish (SF) relationship specify?",
        "The predecessor must finish before the successor can start",
        "The successor activity cannot finish until the predecessor activity has started",
        "Both activities finish at the same time",
        "Neither activity has a predecessor",
        "B",
        "Start-to-Finish dictates that Activity B cannot finish until Activity A starts (e.g. an old IT system cannot be shut down/finished until the new replacement system has started operation).",
        ["This describes FS.", "Finishing together is FF.", "Dependencies require predecessors."],
        "SF: Old system cannot finish/turn off until new system starts.", 45)

add_mcq(55, "2.3", "Lead Time", "medium", "concept",
        "What is 'Lead Time' in project schedule management?",
        "The amount of time a project manager leads a meeting",
        "An acceleration of the successor activity where it starts before the predecessor activity has fully completed",
        "A mandatory penalty fee paid to external suppliers",
        "The total duration of the critical path",
        "B",
        "Lead time advances the successor activity, creating an overlap with the predecessor (negative lag).",
        ["Meeting duration is managerial time.", "Supplier penalty is a contractual fee.", "Critical path is total duration."],
        "Lead = overlap / acceleration (starts earlier).", 45)

add_mcq(56, "2.3", "Lag Time", "medium", "concept",
        "What is 'Lag Time' in network scheduling?",
        "A delay caused by slow computer network bandwidth",
        "A mandatory waiting time inserted between the completion of a predecessor and the start of a successor activity",
        "The time wasted when employees arrive late to work",
        "The total slack on the critical path",
        "B",
        "Lag time is an intentional delay between activities where no active work is done (e.g. waiting 3 days for database replication or concrete drying).",
        ["Network latency is technical telecommunications lag.", "Tardiness is an HR disciplinary matter.", "Critical path slack is zero."],
        "Lag = mandatory waiting delay between activities.", 45)

add_mcq(57, "2.3", "PERT Earliest Finish Time (EFT)", "easy", "calculation",
        "According to PERT scheduling formulas, how is Earliest Finish Time (EFT) calculated?",
        "EFT = EST + Duration",
        "EFT = LFT - Duration",
        "EFT = EST - LST",
        "EFT = Duration / 2",
        "A",
        "The earliest an activity can finish is its Earliest Start Time plus its expected duration: EFT = EST + Duration.",
        ["LFT - Duration calculates Latest Start Time (LST).", "EST - LST is related to slack calculation.", "Duration / 2 is halfway point."],
        "EFT = EST + Duration.", 46)

add_mcq(58, "2.3", "PERT Latest Start Time (LST)", "easy", "calculation",
        "How is Latest Start Time (LST) calculated during the backward pass?",
        "LST = LFT - Duration",
        "LST = EST + Duration",
        "LST = LFT + Duration",
        "LST = EFT / 2",
        "A",
        "In the backward pass, the latest an activity can start without delaying project completion is: LST = LFT - Duration.",
        ["EST + Duration is EFT.", "Adding duration to LFT extends past allowable deadline.", "Division by 2 is irrelevant."],
        "LST = LFT - Duration.", 46)

add_mcq(59, "2.3", "Slack (Float) Formula", "easy", "calculation",
        "What is the mathematical formula for Activity Slack (Total Float)?",
        "Slack = LST - EST (or LFT - EFT)",
        "Slack = EFT + LFT",
        "Slack = Duration x 2",
        "Slack = EST / LST",
        "A",
        "Slack (Float) is the buffer an activity has before it delays the project: Slack = LST - EST = LFT - EFT.",
        ["Adding finish times produces an arbitrary number.", "Multiplying duration is unrelated.", "Dividing start times is meaningless."],
        "Slack = LST - EST = LFT - EFT.", 47)

add_mcq(60, "2.3", "Critical Path Definition", "medium", "concept",
        "What defines the Critical Path in a project network diagram?",
        "The sequence of activities with the shortest duration",
        "The sequence of dependent activities with zero slack (Slack = 0) that dictates the overall project duration",
        "The path that uses the most expensive software licenses",
        "The activities assigned exclusively to junior programmers",
        "B",
        "The critical path is the longest path through the network and has zero float/slack. A delay to any activity on this path delays the entire project.",
        ["It is the longest path in time, not shortest.", "Software license costs do not define the path.", "Task assignment does not determine network critical path."],
        "Critical Path = Longest sequence, Zero Slack, determines project duration.", 47)

add_mcq(61, "2.3", "PERT Forward Pass Rule", "hard", "concept",
        "During the PERT forward pass, when an activity has multiple immediate predecessors, how is its Earliest Start Time (EST) determined?",
        "Take the minimum of all predecessors' EFT values",
        "Take the maximum of all predecessors' EFT values",
        "Calculate the arithmetic average of all predecessors' durations",
        "Choose the predecessor with the lowest cost",
        "B",
        "An activity cannot start until ALL its preceding activities have finished; therefore, EST equals the MAXIMUM EFT among its immediate predecessors.",
        ["Taking the minimum would start the activity before slower predecessors finish.", "Averages violate dependency constraints.", "Cost does not determine schedule start times."],
        "Forward pass: EST = MAX(predecessors' EFT).", 46)

add_mcq(62, "2.3", "PERT Backward Pass Rule", "hard", "concept",
        "During the PERT backward pass, when an activity has multiple immediate successors, how is its Latest Finish Time (LFT) determined?",
        "Take the maximum of all successors' LST values",
        "Take the minimum of all successors' LST values",
        "Sum all successors' durations together",
        "Select the successor with the highest budget",
        "B",
        "To ensure no succeeding activity is delayed, the predecessor must finish before the EARLIEST (minimum) of its successors' latest start times: LFT = MIN(successors' LST).",
        ["Taking the maximum would cause the earliest successor to be delayed.", "Summing durations is invalid.", "Budget is irrelevant to network timing."],
        "Backward pass: LFT = MIN(successors' LST).", 47)

add_mcq(63, "2.3", "PERT Simple Calculation Scenario", "medium", "calculation",
        "An activity has an EST of Day 4 and a Duration of 6 days. Its LFT is Day 15. What are its EFT, LST, and Slack?",
        "EFT = 10, LST = 9, Slack = 5",
        "EFT = 24, LST = 21, Slack = 0",
        "EFT = 10, LST = 4, Slack = 0",
        "EFT = 15, LST = 6, Slack = 9",
        "A",
        "EFT = EST + Duration = 4 + 6 = 10. LST = LFT - Duration = 15 - 6 = 9. Slack = LST - EST = 9 - 4 = 5 (or 15 - 10 = 5).",
        ["Incorrect arithmetic calculations."],
        "EFT = 4+6=10; LST = 15-6=9; Slack = 9-4=5.", 46)

add_mcq(64, "2.3", "Critical Path Delay Impact", "medium", "scenario",
        "Activity C is on the critical path with a planned duration of 5 days. Due to an unexpected server crash, Activity C takes 9 days (a 4-day delay). What happens to the overall project finish date?",
        "The project finish date is unaffected because of management reserve",
        "The overall project completion date is delayed by exactly 4 days, unless schedule compression actions are taken",
        "The project finishes 4 days earlier",
        "Only non-critical activities are delayed",
        "B",
        "Because critical path activities have zero slack, any delay on the critical path translates day-for-day into an overall project delay.",
        ["Reserves do not automatically compress time without action.", "Delays cannot advance completion.", "Non-critical activities with slack absorb delays; critical path cannot."],
        "Critical path delay = project completion delay.", 47)

add_mcq(65, "2.3", "Gantt Chart Advantages", "easy", "recall",
        "What is a primary advantage of a Gantt chart in project management?",
        "It hides all schedule information from external stakeholders",
        "It provides a clear, highly visual horizontal bar timeline of activities, milestones, and schedule status",
        "It automatically writes software code without human developers",
        "It guarantees that projects finish under budget",
        "B",
        "Gantt charts excel at presenting project schedule timelines, progress status, and milestone dates in an intuitive visual bar chart.",
        ["Gantt charts share information, not hide it.", "Gantt charts do not generate code.", "Gantt charts visualize time; they do not guarantee budget control."],
        "Gantt charts provide clear visual timeline communication.", 48)

add_mcq(66, "2.3", "Gantt Chart Limitations", "medium", "concept",
        "What is a well-known limitation of traditional Gantt charts highlighted in the course book?",
        "They are illegal under international copyright conventions",
        "They do not explicitly display resource quantities, costs, or complex dependency networks as clearly as network diagrams",
        "They can only display a maximum of 3 tasks",
        "They cannot be viewed on digital screens",
        "B",
        "Gantt charts focus on time; they often mask inter-task dependency logic in complex projects and do not show resource loading or expenditure details directly.",
        ["Gantt charts are standard commercial tools.", "Gantt charts can display hundreds of tasks.", "Modern Gantt charts are digital."],
        "Gantt limitation: hides resource quantities, costs, and complex dependency webs.", 48)

add_mcq(67, "2.3", "PERT vs Gantt Comparison", "medium", "comparison",
        "When comparing PERT network diagrams with Gantt charts, which statement is true?",
        "Gantt is superior for calculating critical path float; PERT is only for client presentations",
        "PERT diagrams clearly highlight workflow logic, dependencies, and slack; Gantt charts excel at communicating calendar timelines and progress to stakeholders",
        "PERT diagrams do not use activity durations",
        "Both tools eliminate the need for project managers",
        "B",
        "PERT focuses on logical dependency networks and float calculation; Gantt translates the result into a calendar timeline easily understood by stakeholders.",
        ["PERT calculates float; Gantt is used for presentations.", "PERT relies on activity durations.", "Project managers are essential to interpret both."],
        "PERT = Dependency logic & float; Gantt = Calendar timeline & visual progress.", 49)

add_mcq(68, "2.3", "Crashing Schedule Compression", "hard", "concept",
        "What is 'Crashing' as a schedule compression technique?",
        "Intentionally deleting lines of code until the software works",
        "Adding additional resources (e.g. overtime, extra personnel) to critical path activities to shorten duration at the expense of higher cost",
        "Executing sequential activities in parallel without adding resources",
        "Shutting down the project office unexpectedly",
        "B",
        "Crashing shortens critical path duration by adding resources, trading off higher cost for reduced time.",
        ["Deleting code is sabotage.", "Executing sequential activities in parallel is Fast Tracking.", "Office shutdown is termination."],
        "Crashing = Add resources to critical path -> higher cost, shorter time.", 47)

add_mcq(69, "2.3", "Fast Tracking Schedule Compression", "hard", "concept",
        "What is 'Fast Tracking' as a schedule compression technique, and what is its primary risk?",
        "Replacing developers with AI models; risk of total computer failure",
        "Performing activities in parallel that were originally scheduled sequentially; risk of rework and increased coordination defects",
        "Hiring faster typists; risk of broken keyboards",
        "Extending the project deadline by six months; risk of sponsor annoyance",
        "B",
        "Fast tracking overlaps sequential activities (e.g. starting coding before design sign-off). Its main risk is rework if the preceding work changes.",
        ["AI replacement is outside Unit 2 scope.", "Typing speed is not a PM scheduling technique.", "Extending deadlines is schedule delay, not compression."],
        "Fast Tracking = Overlapping sequential tasks -> risk of rework.", 47)

add_mcq(70, "2.3", "Free Float vs Total Float", "hard", "concept",
        "What is the difference between Total Float and Free Float?",
        "Total Float delays the project; Free Float advances the project",
        "Total Float is the delay an activity can tolerate without delaying project completion; Free Float is the delay tolerated without delaying any subsequent successor's EST",
        "Free Float is provided free of charge by contractors; Total Float is paid for",
        "Total Float only exists in agile; Free Float only exists in plan-driven",
        "B",
        "Total Float (Slack) affects overall project completion; Free Float is the buffer before impacting immediate successor activities.",
        ["Floats do not advance projects.", "Floats are time buffers, not monetary fees.", "Both concepts apply to CPM network scheduling."],
        "Total Float = Buffer before delaying project. Free Float = Buffer before delaying successor EST.", 47)

add_mcq(71, "2.3", "Multiple Critical Paths", "medium", "concept",
        "What happens when a project network has multiple critical paths of equal duration?",
        "Project risk increases significantly because a delay on ANY of the parallel critical paths will delay project completion",
        "The project duration is automatically halved",
        "The project manager is relieved of responsibility",
        "All activities become non-critical",
        "A",
        "Multiple critical paths multiply project schedule risk, as the team must simultaneously monitor multiple zero-slack activity sequences.",
        ["Duration is not halved.", "Manager responsibility increases.", "Multiple paths are critical, not non-critical."],
        "Multiple critical paths = heightened project schedule risk.", 47)

add_mcq(72, "2.3", "Activity on Node (AON)", "easy", "recall",
        "In modern PERT/CPM network diagrams, what does Activity on Node (AON) represent?",
        "Activities are written inside the nodes (boxes), and arrows represent precedence dependencies",
        "Activities are written only along the arrows, and nodes represent zero duration",
        "Nodes represent developer desks, and arrows represent physical walking paths",
        "Nodes represent corporate branch offices",
        "A",
        "In AON diagrams (precedence diagramming method), activities and their parameters (EST, EFT, duration, slack) are housed within the nodes/boxes.",
        ["Activities on arrows is the legacy Activity on Arrow (AOA) format.", "Desks and walking paths are physical facility layouts.", "Branch offices are corporate structures."],
        "AON: Activities inside boxes (nodes); arrows depict dependencies.", 46)

add_mcq(73, "2.3", "Zero Slack Verification", "easy", "calculation",
        "An activity has EST = 12, EFT = 18, LST = 12, LFT = 18. Is this activity on the critical path?",
        "No, because duration is positive",
        "Yes, because Slack = LST - EST = 12 - 12 = 0",
        "Cannot be determined without knowing the budget",
        "No, because start time is greater than 10",
        "B",
        "Slack = LST - EST = 12 - 12 = 0 (and LFT - EFT = 18 - 18 = 0). Zero slack confirms the activity lies on the critical path.",
        ["Duration on critical path is always positive.", "Budget is not needed for slack.", "Absolute start time magnitude is irrelevant."],
        "Slack = 0 -> on the critical path.", 47)

add_mcq(74, "2.3", "Gantt Milestone Display", "easy", "classification",
        "How is a milestone traditionally represented visually on a Gantt chart?",
        "As a wide horizontal bar spanning several months",
        "As a small diamond symbol with zero width",
        "As a red circular pie chart",
        "As a blinking neon exclamation point",
        "B",
        "Because milestones have zero duration, Gantt charts depict them as diamond symbols at a specific point on the timeline.",
        ["Horizontal bars depict tasks with duration.", "Pie charts display proportional breakdown, not milestones.", "Neon blinking is not standard software notation."],
        "Milestones on Gantt = Diamond symbols (duration = 0).", 48)

add_mcq(75, "2.3", "Time Planning in Agile vs Plan-Driven", "medium", "comparison",
        "How does time planning differ fundamentally between plan-driven and agile IT projects?",
        "Plan-driven projects plan upfront detailed schedules with fixed scope; agile projects use fixed-duration timeboxes (sprints) with variable scope",
        "Plan-driven projects have no schedules; agile projects plan 5 years in advance",
        "Agile never tracks time; plan-driven only tracks coffee breaks",
        "Plan-driven projects only use calendars; agile projects use sundials",
        "A",
        "Plan-driven fixes scope and calculates schedule using CPM/Gantt; agile fixes timeboxes (e.g. 2-week sprints) and adjusts scope delivery based on team velocity.",
        ["Plan-driven uses detailed schedules; agile uses iterative sprints.", "Agile tracks sprint velocity and burndown continuously.", "Facetious options."],
        "Plan-driven = Scope fixed, schedule calculated. Agile = Timebox fixed, scope variable.", 44)

# -----------------------------------------------------------------------------
# 2.4 DEFINITION OF DONE & QUALITY (25 MCQs)
# -----------------------------------------------------------------------------
add_mcq(76, "2.4", "Definition of Done Core Meaning", "easy", "definition",
        "What is the Definition of Done (DoD) in agile software development?",
        "A statement that the project budget has been completely spent",
        "An agreed-upon checklist of quality, engineering, and verification criteria that a work item must satisfy before being considered complete",
        "The customer's final signature on the warranty certificate",
        "A legal document filing for corporate dissolution",
        "B",
        "DoD is the team's shared agreement on technical standards (e.g. tested, reviewed, documented, integrated) required before marking any item done.",
        ["Spending the budget is cost depletion, not DoD.", "Customer signature is final formal acceptance.", "Corporate dissolution is closing the company."],
        "DoD = Agreed checklist of quality standards before marking work complete.", 53)

add_mcq(77, "2.4", "DoD vs Final Customer Acceptance", "medium", "trap",
        "Why is it a critical exam trap to confuse the Definition of Done (DoD) with Final Customer Acceptance?",
        "They are legally identical in all jurisdictions",
        "DoD is internal team quality verification ensuring readiness; Final Customer Acceptance is the client's formal contractual sign-off of business deliverables",
        "Customer Acceptance occurs daily; DoD occurs once every three years",
        "DoD only applies to hardware; Acceptance only applies to software",
        "B",
        "DoD ensures internal technical and functional standards before demonstration; Customer Acceptance is the external client's formal approval and handover.",
        ["They are distinct governance concepts.", "Customer acceptance occurs at milestone/phase completion, not daily.", "Both apply to software and systems."],
        "DoD = Internal team completion standard. Acceptance = External client contractual sign-off.", 53)

add_mcq(78, "2.4", "Technical Debt Prevention", "medium", "concept",
        "How does a rigorous Definition of Done help prevent the accumulation of 'Technical Debt'?",
        "By allowing programmers to skip writing unit tests when deadlines approach",
        "By ensuring that code reviews, refactoring, documentation, and automated tests are completed immediately rather than deferred to future phases",
        "By borrowing financial money from commercial banks",
        "By deleting all legacy source code automatically",
        "B",
        "Technical debt accumulates when shortcuts are taken. A strict DoD forbids marking work done until testing, review, and documentation standards are met.",
        ["Skipping tests directly creates technical debt.", "Financial bank loans are fiscal debt, not technical debt.", "Deleting legacy code without plan is destructive."],
        "Strict DoD stops technical shortcuts, preventing technical debt.", 53)

add_mcq(79, "2.4", "ISO/IEC 25010 Quality Model Overview", "easy", "recall",
        "What two primary quality models are established in the ISO/IEC 25010 standard?",
        "Hardware Model and Firmware Model",
        "Product Quality Model and Quality in Use Model",
        "Waterfall Model and Agile Model",
        "Financial Model and Tax Model",
        "B",
        "ISO/IEC 25010 divides software quality into Product Quality (8 characteristics) and Quality in Use (5 characteristics).",
        ["Hardware/Firmware is hardware engineering.", "Waterfall/Agile are process models.", "Financial/Tax are accounting frameworks."],
        "ISO/IEC 25010: Product Quality (8) + Quality in Use (5).", 54)

add_mcq(80, "2.4", "ISO/IEC 25010 Quality in Use Count", "easy", "recall",
        "How many characteristics comprise the ISO/IEC 25010 Quality in Use model?",
        "3",
        "5",
        "8",
        "14",
        "B",
        "Quality in Use consists of 5 characteristics: Effectiveness, Efficiency, Satisfaction, Risk Freedom, and Context Coverage.",
        ["Product quality has 8 characteristics.", "14 is the FPA TDI characteristics count."],
        "Quality in Use = 5 characteristics.", 54)

add_mcq(81, "2.4", "ISO/IEC 25010 Quality in Use Elements", "medium", "recall",
        "Which set of characteristics belongs to the ISO/IEC 25010 'Quality in Use' model?",
        "Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage",
        "Functional Suitability, Reliability, Security, Maintainability, Portability",
        "CPU Speed, RAM Size, Hard Disk Space, GPU Cores, Screen Resolution",
        "Plan, Build, Run, Monitor, Evaluate",
        "A",
        "Quality in Use evaluates user interaction outcomes: Effectiveness, Efficiency, Satisfaction, Risk Freedom, and Context Coverage.",
        ["This lists Product Quality characteristics.", "This lists hardware specifications.", "This lists governance/management lifecycle terms."],
        "Quality in Use (5): Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage.", 54)

add_mcq(82, "2.4", "ISO/IEC 25010 Product Quality Count", "easy", "recall",
        "How many characteristics comprise the ISO/IEC 25010 Product Quality model?",
        "4",
        "6",
        "8",
        "12",
        "C",
        "Product Quality comprises 8 characteristics: Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, and Portability.",
        ["Quality in use has 5 characteristics."],
        "Product Quality = 8 characteristics.", 55)

add_mcq(83, "2.4", "ISO/IEC 25010 Functional Suitability", "medium", "definition",
        "What does 'Functional Suitability' measure in the ISO/IEC 25010 Product Quality model?",
        "Whether the software interface uses attractive neon colors",
        "The degree to which the functions provided meet stated and implied user needs under specified conditions (completeness, correctness, appropriateness)",
        "The physical weight of the computer server",
        "The developer's typing speed during code implementation",
        "B",
        "Functional suitability evaluates functional completeness, correctness, and appropriateness against user requirements.",
        ["Aesthetic colors relate to usability aspects.", "Physical weight is hardware transport.", "Typing speed is irrelevant."],
        "Functional suitability = Completeness, correctness, and appropriateness of functions.", 55)

add_mcq(84, "2.4", "ISO/IEC 25010 Maintainability", "medium", "concept",
        "Why is 'Maintainability' an essential product quality characteristic in IT projects?",
        "It guarantees the software will never require updates",
        "It measures the effectiveness and efficiency with which software can be modified, corrected, improved, or adapted to environment changes",
        "It allows users to change code while playing online video games",
        "It eliminates the need for software documentation",
        "B",
        "Maintainability assesses modularity, reusability, analyzability, modifiability, and testability, reducing long-term lifecycle operating costs.",
        ["Software always requires ongoing maintenance.", "Gaming modifications are unrelated.", "Documentation is required for maintainability."],
        "Maintainability = Ease of modifying, fixing, and adapting software.", 55)

add_mcq(85, "2.4", "Quality Gate Definition", "easy", "definition",
        "What is a 'Quality Gate' in project governance?",
        "A physical security turnstile at the office entrance",
        "A formal checkpoint at the end of a project phase where deliverables are evaluated against predefined quality criteria before permission to proceed is granted",
        "An automated password generator",
        "A software firewall blocking incoming network packets",
        "B",
        "A quality gate is a formal milestone gate where phase outputs are assessed against quality metrics. Failure to meet criteria blocks advancement.",
        ["Physical turnstiles are building facilities.", "Password generator is security tooling.", "Firewall is network infrastructure."],
        "Quality Gate = Formal checkpoint approving or halting transition between phases.", 56)

add_mcq(86, "2.4", "Three-Tier Quality Comparison", "hard", "comparison",
        "How do DoD, Quality Gates, and Final Customer Acceptance relate to each other?",
        "They are redundant synonyms that perform the exact same task simultaneously",
        "DoD operates at the daily/sprint level for items; Quality Gates operate at phase boundaries; Final Acceptance operates at project handover to the client",
        "Final Acceptance occurs first, followed by Quality Gates, and DoD happens after project closure",
        "Quality Gates only apply to financial budgets; DoD only applies to office cleaning",
        "B",
        "The three-tier quality hierarchy operates at increasing governance altitudes: DoD (task/story), Quality Gate (phase transition), Final Acceptance (client sign-off).",
        ["They operate at distinctly different levels.", "The sequence is reversed.", "DoD and Quality Gates are engineering and project governance controls."],
        "Tier 1: DoD (item/sprint) -> Tier 2: Quality Gate (phase) -> Tier 3: Acceptance (client sign-off).", 56)

add_mcq(87, "2.4", "DoD Checklist Components", "medium", "classification",
        "Which of the following is typically included in a robust Definition of Done for a software user story?",
        "Personal holiday schedules of developers",
        "Code compiled without warnings, peer code review completed, unit and integration tests passed, documentation updated, deployed to staging",
        "Signing the initial commercial contract",
        "Purchasing new office furniture",
        "B",
        "A standard engineering DoD includes code hygiene, peer review, automated testing, documentation, and successful deployment to a verification environment.",
        ["Holiday schedules are HR records.", "Contract signing happens during project initiation.", "Furniture is facilities management."],
        "DoD checklist: reviewed, tested, documented, and deployable.", 53)

add_mcq(88, "2.4", "ISO/IEC 25010 Reliability", "medium", "definition",
        "Under ISO/IEC 25010, what does 'Reliability' measure?",
        "The degree to which a system performs specified functions under specified conditions for a specified period of time (maturity, fault tolerance, recoverability)",
        "How quickly developers respond to phone calls",
        "The market value of company shares on the stock exchange",
        "The physical thickness of the printed user manual",
        "A",
        "Reliability evaluates system availability, fault tolerance, recoverability, and maturity under operational stress.",
        ["Phone response time is customer service.", "Stock value is corporate finance.", "Manual thickness is documentation volume."],
        "Reliability = Fault tolerance, maturity, recoverability, availability.", 55)

add_mcq(89, "2.4", "ISO/IEC 25010 Security", "medium", "definition",
        "What does 'Security' assess in the ISO/IEC 25010 Product Quality model?",
        "The number of security guards stationed in the server room",
        "The degree to which information and data are protected so that unauthorized persons cannot access, read, or modify them (confidentiality, integrity, non-repudiation)",
        "Whether developers lock their laptop screens when going for lunch",
        "The price of anti-virus software subscriptions",
        "B",
        "Security evaluates confidentiality, integrity, non-repudiation, accountability, and authenticity of system information.",
        ["Physical guards are facility security.", "Screen locking is operational hygiene.", "Subscription price is procurement cost."],
        "Security = Confidentiality, integrity, non-repudiation, authenticity.", 55)

add_mcq(90, "2.4", "ISO/IEC 25010 Usability", "easy", "concept",
        "What is the focus of 'Usability' in ISO/IEC 25010?",
        "How easily the software can be understood, learned, operated, and aesthetically appreciated by specified users",
        "How many gigabytes of RAM the software consumes",
        "Whether the software can compile on quantum supercomputers",
        "The speed of network cables",
        "A",
        "Usability covers appropriateness recognizability, learnability, operability, user error protection, and user interface aesthetics.",
        ["RAM consumption is performance efficiency.", "Quantum compilation is portability.", "Network cables are physical hardware."],
        "Usability = Learnability, operability, user error protection, user satisfaction.", 55)

add_mcq(91, "2.4", "Quality Assurance vs Quality Control", "medium", "comparison",
        "How does Quality Assurance (QA) differ from Quality Control (QC)?",
        "QA focuses on preventing defects by improving processes; QC focuses on detecting defects in finished deliverables through testing and inspection",
        "QA is only done by customers; QC is only done by interns",
        "QA has no relationship with software; QC is an accounting audit",
        "They are opposite terms where QA introduces bugs and QC removes them",
        "A",
        "Quality Assurance is process-oriented (prevention); Quality Control is product-oriented (inspection and testing of outputs).",
        ["Both are performed by professional project teams.", "Both are core software engineering disciplines.", "QA never intends to introduce bugs."],
        "QA = Process-oriented prevention. QC = Product-oriented inspection/detection.", 54)

add_mcq(92, "2.4", "DoD Evolution", "medium", "concept",
        "How should a software development team handle its Definition of Done over the course of multiple project sprints?",
        "The DoD must remain strictly frozen and never change for 10 years",
        "The DoD should be inspected and adapted during Sprint Retrospectives, becoming progressively more stringent as team engineering maturity increases",
        "The DoD should be weakened and simplified whenever deadlines are tight",
        "The DoD should be discarded after Sprint 1",
        "B",
        "Continuous improvement dictates that teams refine their DoD during retrospectives (e.g. adding automated security scans or higher test coverage requirements).",
        ["Freezing DoD ignores continuous learning.", "Weakening DoD under deadline pressure accumulates technical debt.", "Discarding DoD removes quality control."],
        "DoD is updated in retrospectives, raising quality standards as team matures.", 53)

add_mcq(93, "2.4", "ISO/IEC 25010 Portability", "easy", "definition",
        "What does 'Portability' evaluate under the ISO/IEC 25010 standard?",
        "The physical weight of the laptop computer",
        "The ease with which a software system can be transferred from one hardware, software, or operational environment to another",
        "The ability of an employee to work from home",
        "How fast software packages can be shipped via postal mail",
        "B",
        "Portability measures adaptability, installability, and replaceability across diverse operating systems and platforms.",
        ["Physical laptop weight is hardware portability.", "Remote work is telecommuting HR policy.", "Postal delivery is logistics."],
        "Portability = Adaptability, installability, replaceability across environments.", 55)

add_mcq(94, "2.4", "ISO/IEC 25010 Compatibility", "medium", "definition",
        "What does 'Compatibility' measure in the ISO/IEC 25010 model?",
        "The degree to which two or more systems can exchange information and perform required functions while sharing the same hardware/software environment (co-existence, interoperability)",
        "Whether developers share similar political opinions",
        "The battery life of smartphones",
        "How well the project manager gets along with the customer",
        "A",
        "Compatibility assesses co-existence (sharing common environment without mutual detriment) and interoperability (exchanging and using information).",
        ["Political views are personal.", "Battery life is hardware power performance.", "Personal relationships are interpersonal dynamics."],
        "Compatibility = Co-existence and Interoperability.", 55)

add_mcq(95, "2.4", "Quality Gate Decision Options", "hard", "concept",
        "What are the possible governance outcomes when a project deliverable is evaluated at a Quality Gate?",
        "Pass (proceed to next phase), Conditional Pass (proceed with corrective actions tracked), Rework (halt and fix deficiencies), or Terminate",
        "Every project is automatically passed regardless of findings",
        "The quality gate can only result in hiring more lawyers",
        "Deliverables are burned and rewritten from scratch every time",
        "A",
        "Quality gates act as decision filters: deliverables can be approved, approved conditionally, sent back for rework, or killed if unviable.",
        ["Automatic pass negates the purpose of the gate.", "Legal hiring is not a quality gate outcome.", "Rewriting everything from scratch is unnecessary."],
        "Quality gate decisions: Pass, Conditional Pass, Rework, Terminate.", 56)

add_mcq(96, "2.4", "DoD Violation Consequence", "medium", "scenario",
        "A developer declares a user story 'done' because coding is finished, but automated unit tests and code review have not been executed. What should the project manager or Scrum Master do?",
        "Accept the story as 100% complete and demo it to the client",
        "Refuse to mark the story as done until all DoD criteria (unit tests, code review) are fully satisfied",
        "Fire the developer on the spot",
        "Write the unit tests themselves during the night",
        "B",
        "An item is NOT done until all criteria on the DoD are met. Allowing incomplete items to be declared done undermines transparency and quality.",
        ["Demonstrating unverified code creates client embarrassment and bugs.", "Immediate firing is disproportionate and disruptive.", "Managers should enforce team standards, not cover up shortcuts."],
        "If DoD is not 100% met, the item is NOT done.", 53)

add_mcq(97, "2.4", "ISO/IEC 25010 Performance Efficiency", "medium", "definition",
        "What does 'Performance Efficiency' assess in ISO/IEC 25010?",
        "How many cups of coffee the development team consumes per day",
        "Performance relative to the amount of resources used under stated conditions (time behavior, resource utilization, capacity)",
        "The cost of cloud computing hosting bills only",
        "The speed at which the CEO reads emails",
        "B",
        "Performance efficiency evaluates response time, processing throughput, resource utilization, and maximum capacity limits.",
        ["Coffee consumption is office trivia.", "Cloud hosting bill is a cost consequence, not the technical metric itself.", "CEO reading speed is personal executive habit."],
        "Performance Efficiency = Response time, resource utilization, capacity.", 55)

add_mcq(98, "2.4", "Quality in Use Context Coverage", "hard", "concept",
        "Under ISO/IEC 25010 Quality in Use, what does 'Context Coverage' measure?",
        "How many insurance policies cover the software against fire",
        "The degree to which software is effective, efficient, safe, and satisfying in both specified contexts of use and unexpected/extended contexts",
        "The geographic area covered by wireless cell towers",
        "The percentage of code covered by comments",
        "B",
        "Context coverage measures context completeness (working in all intended user environments) and flexibility (adapting to unanticipated user contexts).",
        ["Insurance policies are commercial risk transfer.", "Cell towers are telecommunications infrastructure.", "Comment ratio is code documentation."],
        "Context Coverage = Performance across specified AND extended/unexpected user contexts.", 54)

add_mcq(99, "2.4", "DoD Transparency Function", "easy", "concept",
        "Why is the Definition of Done vital for maintaining transparency between the project team and stakeholders?",
        "It hides internal bugs from external view",
        "It provides a shared, unambiguous understanding of what 'completed work' actually means, preventing premature celebration of incomplete software",
        "It prevents stakeholders from asking questions during sprint reviews",
        "It serves as a marketing press release",
        "B",
        "DoD creates transparency so everyone understands that 'done' means production-ready, fully tested, and verified—not merely coded.",
        ["DoD creates visibility, not concealment.", "Stakeholders are encouraged to inspect work in reviews.", "DoD is an engineering standard, not marketing."],
        "DoD establishes unambiguous shared meaning of 'completed'.", 53)

add_mcq(100, "2.4", "Cost of Quality (CoQ)", "hard", "concept",
        "In project quality management, what does the Cost of Quality (CoQ) framework demonstrate?",
        "It is always cheaper to let customers find bugs in production than to test code during development",
        "Money invested early in Prevention and Appraisal (DoD, testing, code reviews) is vastly cheaper than the Failure Costs incurred when defects reach production",
        "Quality has no financial cost and is achieved automatically",
        "Testing software costs more than rebuilding the entire company",
        "B",
        "The Cost of Quality proves that early defect prevention (conformance costs) avoids catastrophic external failure costs (recalls, lawsuits, reputational ruin).",
        ["Finding bugs in production is 10x to 100x more expensive.", "Quality requires deliberate investment.", "Rebuilding a company is hyperbole."],
        "Prevention & Appraisal (DoD) is far cheaper than post-release Failure costs.", 54)

# Write to file
with open(os.path.join(u2_dir, "mcqs.ts"), "w") as f:
    f.write('import { MCQ } from "../../../../types";\n\n')
    f.write('export const unit2Mcqs: MCQ[] = ' + json.dumps(mcqs, indent=2) + ';\n')

print(f"Generated {len(mcqs)} Unit 2 MCQs in mcqs.ts")
