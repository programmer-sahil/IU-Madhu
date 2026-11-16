import json

s61_data = [
    {
        "id": "itpm-u6-s61-mcq-001", "topic": "PMBOK Standard Organization", "difficulty": "easy",
        "question": "Which professional organization publishes the Project Management Body of Knowledge (PMBOK Guide)?",
        "options": {
            "A": "PMI (Project Management Institute)",
            "B": "AXELOS / UK Cabinet Office",
            "C": "IEEE (Institute of Electrical and Electronics Engineers)",
            "D": "ACM (Association for Computing Machinery)"
        },
        "correctAnswer": "A",
        "explanation": "The PMBOK Guide is published by the Project Management Institute (PMI), standardizing project management knowledge and practice worldwide.",
        "whyOthersAreWrong": [
            "AXELOS publishes PRINCE2, not the PMBOK Guide.",
            "IEEE publishes engineering and technical computing standards.",
            "ACM is an academic computing society."
        ],
        "examTrap": "PMI publishes PMBOK; AXELOS / OGC publishes PRINCE2. Do not mix their organizational sponsors.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Standard Organization"
    },
    {
        "id": "itpm-u6-s61-mcq-002", "topic": "Five Process Groups", "difficulty": "easy",
        "question": "Which of the following correctly lists the five PMBOK Process Groups in their typical sequential order?",
        "options": {
            "A": "Initiating, Planning, Executing, Monitoring & Controlling, Closing",
            "B": "Inception, Elaboration, Construction, Transition, Production",
            "C": "Starting Up, Directing, Initiating, Managing Delivery, Closing",
            "D": "Analysis, Design, Coding, Testing, Deployment"
        },
        "correctAnswer": "A",
        "explanation": "PMBOK defines 5 Process Groups: Initiating, Planning, Executing, Monitoring & Controlling, and Closing.",
        "whyOthersAreWrong": [
            "Inception through Production are RUP phases.",
            "Starting Up, Directing, etc. are PRINCE2 processes.",
            "Analysis through Deployment are traditional Waterfall software development stages."
        ],
        "examTrap": "Process groups are NOT project phases; they overlap throughout each phase of a project.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Five Process Groups"
    },
    {
        "id": "itpm-u6-s61-mcq-003", "topic": "Total PMBOK Processes Count", "difficulty": "medium",
        "question": "How many total discrete processes are defined across the 5 Process Groups and 10 Knowledge Areas in the official course book's PMBOK matrix?",
        "options": {
            "A": "Exactly 47 processes",
            "B": "Exactly 24 processes",
            "C": "Exactly 7 processes",
            "D": "Exactly 100 processes"
        },
        "correctAnswer": "A",
        "explanation": "Course Book Figures 42 and 43 explicitly map the 5 Process Groups and 10 Knowledge Areas, resulting in exactly 47 discrete processes.",
        "whyOthersAreWrong": [
            "24 processes is the count in the Planning process group alone.",
            "7 processes is the count in PRINCE2.",
            "100 processes is an arbitrary number."
        ],
        "examTrap": "Memorize the exact number: 47 processes.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Total PMBOK Processes Count"
    },
    {
        "id": "itpm-u6-s61-mcq-004", "topic": "Process Group Distribution: Planning", "difficulty": "medium",
        "question": "Which PMBOK process group contains the largest number of processes, containing 24 out of the 47 total processes?",
        "options": {
            "A": "Planning Process Group",
            "B": "Executing Process Group",
            "C": "Monitoring & Controlling Process Group",
            "D": "Initiating Process Group"
        },
        "correctAnswer": "A",
        "explanation": "The Planning Process Group contains 24 processes—over half of all PMBOK processes—reflecting the rigorous plan-driven orientation of the framework.",
        "whyOthersAreWrong": [
            "Executing contains 8 processes.",
            "Monitoring & Controlling contains 11 processes.",
            "Initiating contains only 2 processes."
        ],
        "examTrap": "Remember the exact count: 24 processes in Planning.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Process Group Distribution: Planning"
    },
    {
        "id": "itpm-u6-s61-mcq-005", "topic": "Process Group Distribution: Initiating and Closing", "difficulty": "hard",
        "question": "How many processes are contained in the Initiating and Closing process groups respectively?",
        "options": {
            "A": "2 in Initiating and 2 in Closing",
            "B": "5 in Initiating and 5 in Closing",
            "C": "1 in Initiating and 1 in Closing",
            "D": "4 in Initiating and 8 in Closing"
        },
        "correctAnswer": "A",
        "explanation": "Both Initiating and Closing contain exactly 2 processes each: Initiating has 'Develop Project Charter' and 'Identify Stakeholders'; Closing has 'Close Project or Phase' and 'Close Procurements'.",
        "whyOthersAreWrong": [
            "5 is the count of Process Groups, not processes within Initiating/Closing.",
            "1 is incomplete; both have two distinct processes.",
            "4 and 8 are incorrect counts."
        ],
        "examTrap": "Remember the 2-24-8-11-2 pattern: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2).",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Process Group Distribution: Initiating and Closing"
    },
    {
        "id": "itpm-u6-s61-mcq-006", "topic": "Process Group Distribution: Executing & Controlling", "difficulty": "hard",
        "question": "How many processes are assigned to the Executing and Monitoring & Controlling process groups respectively?",
        "options": {
            "A": "8 in Executing and 11 in Monitoring & Controlling",
            "B": "11 in Executing and 8 in Monitoring & Controlling",
            "C": "15 in Executing and 15 in Monitoring & Controlling",
            "D": "4 in Executing and 7 in Monitoring & Controlling"
        },
        "correctAnswer": "A",
        "explanation": "Executing contains exactly 8 processes, while Monitoring & Controlling contains exactly 11 processes.",
        "whyOthersAreWrong": [
            "Inverting 8 and 11 is an exam trap.",
            "15 and 15 are incorrect counts.",
            "4 and 7 are incorrect counts."
        ],
        "examTrap": "Monitoring & Controlling (11) has MORE processes than Executing (8).",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Process Group Distribution: Executing & Controlling"
    },
    {
        "id": "itpm-u6-s61-mcq-007", "topic": "Ten Knowledge Areas Count", "difficulty": "easy",
        "question": "How many Knowledge Areas are established in the official PMBOK framework in the course book?",
        "options": {
            "A": "10 Knowledge Areas",
            "B": "5 Knowledge Areas",
            "C": "7 Knowledge Areas",
            "D": "12 Knowledge Areas"
        },
        "correctAnswer": "A",
        "explanation": "The PMBOK Guide defines exactly 10 Knowledge Areas covering the specialized disciplines of project management.",
        "whyOthersAreWrong": [
            "5 is the number of Process Groups, not Knowledge Areas.",
            "7 is the number of PRINCE2 Principles, Themes, and Processes.",
            "12 is the number of Agile principles."
        ],
        "examTrap": "5 Process Groups x 10 Knowledge Areas = 47 Processes.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Ten Knowledge Areas Count"
    },
    {
        "id": "itpm-u6-s61-mcq-008", "topic": "Project Integration Management", "difficulty": "medium",
        "question": "Which PMBOK Knowledge Area is responsible for coordinating and unifying all other project management processes throughout the project lifecycle?",
        "options": {
            "A": "Project Integration Management",
            "B": "Project Communications Management",
            "C": "Project Procurement Management",
            "D": "Project Stakeholder Management"
        },
        "correctAnswer": "A",
        "explanation": "Project Integration Management includes the processes and activities to identify, define, combine, unify, and coordinate the various processes and project management activities.",
        "whyOthersAreWrong": [
            "Communications focuses on distributing information, not unifying the entire project plan.",
            "Procurement focuses on external vendor contracts.",
            "Stakeholder management focuses on stakeholder relationships."
        ],
        "examTrap": "Integration Management is the ONLY knowledge area that spans all 5 process groups.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Integration Management"
    },
    {
        "id": "itpm-u6-s61-mcq-009", "topic": "Project Scope vs Product Scope", "difficulty": "medium",
        "question": "What is the crucial distinction between 'Product Scope' and 'Project Scope' in PMBOK?",
        "options": {
            "A": "Product Scope describes the features and functions of the product; Project Scope describes all the work required to deliver that product",
            "B": "Product Scope is written by lawyers; Project Scope is written by marketing interns",
            "C": "Product Scope only applies to hardware; Project Scope only applies to software",
            "D": "Product Scope is measured in dollars; Project Scope is measured in lines of code"
        },
        "correctAnswer": "A",
        "explanation": "Product Scope encompasses the features and characteristics that describe the deliverable; Project Scope encompasses all the work performed by the project team to deliver that product.",
        "whyOthersAreWrong": [
            "Lawyers and marketing interns do not define technical project scope.",
            "Product scope applies to both hardware and software products.",
            "Both scopes have financial and engineering metrics."
        ],
        "examTrap": "Product Scope = Features and functions. Project Scope = Work performed to deliver them.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Scope vs Product Scope"
    },
    {
        "id": "itpm-u6-s61-mcq-010", "topic": "ITTO Architecture", "difficulty": "easy",
        "question": "In PMBOK, every one of the 47 processes is formalized using which standard tripartite architecture?",
        "options": {
            "A": "ITTO: Inputs, Tools & Techniques, Outputs",
            "B": "PDCA: Plan, Do, Check, Act",
            "C": "CRUD: Create, Read, Update, Delete",
            "D": "ACID: Atomicity, Consistency, Isolation, Durability"
        },
        "correctAnswer": "A",
        "explanation": "PMBOK models every single process using ITTO: Inputs (documents/data needed), Tools & Techniques (methods applied), and Outputs (deliverables produced).",
        "whyOthersAreWrong": [
            "PDCA is Deming's continuous improvement cycle.",
            "CRUD is a database operations acronym.",
            "ACID represents database transaction reliability properties."
        ],
        "examTrap": "ITTO stands for Inputs, Tools & Techniques, Outputs.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "ITTO Architecture"
    },
    {
        "id": "itpm-u6-s61-mcq-011", "topic": "Project Charter Authorization", "difficulty": "medium",
        "question": "Which PMBOK Initiating process formally authorizes the existence of a project and gives the project manager formal authority to commit organizational resources?",
        "options": {
            "A": "Develop Project Charter",
            "B": "Identify Stakeholders",
            "C": "Plan Scope Management",
            "D": "Direct and Manage Project Work"
        },
        "correctAnswer": "A",
        "explanation": "The Project Charter, issued by the project initiator or sponsor, formally authorizes the project and grants the PM authority to apply organizational resources to project activities.",
        "whyOthersAreWrong": [
            "Identify Stakeholders identifies interested parties, but does not authorize the project.",
            "Plan Scope Management is a planning process.",
            "Direct and Manage Project Work is an executing process."
        ],
        "examTrap": "The PM cannot formally expend company funds until the Project Charter is signed by the sponsor.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Charter Authorization"
    },
    {
        "id": "itpm-u6-s61-mcq-012", "topic": "Perform Integrated Change Control", "difficulty": "hard",
        "question": "In which process group and knowledge area does 'Perform Integrated Change Control' reside?",
        "options": {
            "A": "Monitoring & Controlling Process Group / Project Integration Management",
            "B": "Planning Process Group / Project Scope Management",
            "C": "Executing Process Group / Project Quality Management",
            "D": "Closing Process Group / Project Procurement Management"
        },
        "correctAnswer": "A",
        "explanation": "Perform Integrated Change Control is a Monitoring & Controlling process within Project Integration Management, reviewing all change requests and managing changes to deliverables and baselines.",
        "whyOthersAreWrong": [
            "It is a Monitoring & Controlling process, not Planning.",
            "Executing handles carrying out work, not approving change requests.",
            "Closing handles contract termination and administrative closure."
        ],
        "examTrap": "Change Control is part of Integration Management, NOT Scope Management alone, because changes affect scope, cost, time, and risk simultaneously.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Perform Integrated Change Control"
    },
    {
        "id": "itpm-u6-s61-mcq-013", "topic": "Project Management Plan Baselining", "difficulty": "medium",
        "question": "What is the primary baseline against which project performance is formally monitored and controlled in PMBOK?",
        "options": {
            "A": "The Performance Measurement Baseline (Scope, Schedule, and Cost Baselines)",
            "B": "The developer's daily timesheet logs",
            "C": "The annual corporate marketing forecast",
            "D": "The competitor's stock price"
        },
        "correctAnswer": "A",
        "explanation": "The integrated Scope, Schedule, and Cost baselines form the Performance Measurement Baseline (PMB) against which earned value variances are tracked.",
        "whyOthersAreWrong": [
            "Timesheet logs record raw hours, not the integrated performance baseline.",
            "Marketing forecasts are sales estimates, not project baselines.",
            "Competitor stock prices are external market indicators."
        ],
        "examTrap": "Performance measurement baseline integrates Scope + Schedule + Cost.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Management Plan Baselining"
    },
    {
        "id": "itpm-u6-s61-mcq-014", "topic": "PMBOK Progressive Elaboration", "difficulty": "medium",
        "question": "What does 'progressive elaboration' mean in PMBOK project planning?",
        "options": {
            "A": "Continuously improving and detailing a plan as more specific information and accurate estimates become available",
            "B": "Adding speculative features to software without client permission",
            "C": "Gradually increasing developer salaries each month",
            "D": "Changing the project manager every two weeks"
        },
        "correctAnswer": "A",
        "explanation": "Progressive elaboration means developing in steps and continuing by increments, allowing project plans to become more detailed and specific as clearer information emerges.",
        "whyOthersAreWrong": [
            "Adding unauthorized features is scope creep or gold-plating.",
            "Salary increases are HR compensation policies.",
            "Rotating project managers destabilizes project governance."
        ],
        "examTrap": "Progressive elaboration is legitimate planned refinement; it is NOT scope creep.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Progressive Elaboration"
    },
    {
        "id": "itpm-u6-s61-mcq-015", "topic": "Change Control Board (CCB)", "difficulty": "medium",
        "question": "What is the primary role of the Change Control Board (CCB) in a PMBOK-governed project?",
        "options": {
            "A": "A formally chartered group responsible for reviewing, evaluating, approving, deferring, or rejecting changes to project baselines",
            "B": "A committee that replaces computer circuit boards when hardware fails",
            "C": "A disciplinary panel that fines developers for syntax errors",
            "D": "An external agency that audits corporate tax filings"
        },
        "correctAnswer": "A",
        "explanation": "The CCB is a formal group of stakeholders responsible for evaluating proposed changes against project constraints and deciding whether to approve, reject, or defer them.",
        "whyOthersAreWrong": [
            "Circuit board replacement is computer hardware maintenance.",
            "Disciplinary fines for bugs violate professional engineering practices.",
            "Corporate tax auditing is handled by tax authorities."
        ],
        "examTrap": "The project manager does not necessarily own the CCB; the CCB includes sponsors and business stakeholders.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Change Control Board (CCB)"
    },
    {
        "id": "itpm-u6-s61-mcq-016", "topic": "Project Closing Activities", "difficulty": "medium",
        "question": "Which key activity is conducted during the PMBOK 'Close Project or Phase' process?",
        "options": {
            "A": "Documenting lessons learned, transferring final deliverables, archiving project files, and releasing project resources",
            "B": "Writing the initial project charter and business case",
            "C": "Developing the first draft of the Work Breakdown Structure (WBS)",
            "D": "Negotiating hourly billing rates for junior software developers"
        },
        "correctAnswer": "A",
        "explanation": "Closing finalizes all activities across all process groups, encompassing lessons learned, deliverable handover, administrative file archiving, and resource reassignment.",
        "whyOthersAreWrong": [
            "Charter creation belongs to Initiating.",
            "WBS creation belongs to Planning.",
            "Hourly rate negotiations belong to Procurement Planning."
        ],
        "examTrap": "Closing must be completed even for prematurely terminated or cancelled projects.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Closing Activities"
    },
    {
        "id": "itpm-u6-s61-mcq-017", "topic": "PMBOK Human Resource Management", "difficulty": "easy",
        "question": "Which of the following processes belongs to Project Human Resource Management in PMBOK?",
        "options": {
            "A": "Develop Project Team",
            "B": "Control Costs",
            "C": "Perform Qualitative Risk Analysis",
            "D": "Plan Procurement Management"
        },
        "correctAnswer": "A",
        "explanation": "Develop Project Team (along with Plan HR Management, Acquire Project Team, and Manage Project Team) belongs to Project Human Resource Management.",
        "whyOthersAreWrong": [
            "Control Costs belongs to Cost Management.",
            "Perform Qualitative Risk Analysis belongs to Risk Management.",
            "Plan Procurement Management belongs to Procurement Management."
        ],
        "examTrap": "Develop Project Team focuses on team cohesion and competency; Manage Project Team focuses on tracking performance and resolving conflict.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Human Resource Management"
    },
    {
        "id": "itpm-u6-s61-mcq-018", "topic": "PMBOK Communications vs Stakeholder", "difficulty": "hard",
        "question": "Why did PMI separate Project Stakeholder Management from Project Communications Management as an independent 10th Knowledge Area?",
        "options": {
            "A": "Because stakeholder management is relationship and engagement management, not merely message generation and distribution",
            "B": "Because software developers refused to attend communications meetings",
            "C": "Because government laws required a separate stakeholder accounting standard",
            "D": "To increase the total number of processes to an even 50"
        },
        "correctAnswer": "A",
        "explanation": "Communications focuses on the transmission of information; Stakeholder Management focuses on understanding expectations, managing interpersonal relationships, and actively engaging stakeholders.",
        "whyOthersAreWrong": [
            "Developer meeting attendance is an internal team issue.",
            "Government law does not mandate PMI knowledge areas.",
            "The process count is 47, not 50."
        ],
        "examTrap": "Communications = *information distribution*. Stakeholder Management = *relationship & engagement management*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Communications vs Stakeholder"
    },
    {
        "id": "itpm-u6-s61-mcq-019", "topic": "Project Procurement Management Scope", "difficulty": "medium",
        "question": "What is the primary focus of Project Procurement Management in PMBOK?",
        "options": {
            "A": "Purchasing or acquiring products, services, or results needed from outside the project team",
            "B": "Hiring permanent full-time employees through corporate human resources",
            "C": "Developing in-house open source software libraries",
            "D": "Auditing executive corporate expense accounts"
        },
        "correctAnswer": "A",
        "explanation": "Procurement Management processes handle contract creation, vendor selection, contract administration, and procurement closure for external goods and services.",
        "whyOthersAreWrong": [
            "Permanent hiring is internal HR management.",
            "In-house software development is internal technical execution.",
            "Executive expense auditing is corporate accounting."
        ],
        "examTrap": "Procurement deals with external legal contracts and vendor performance.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Procurement Management Scope"
    },
    {
        "id": "itpm-u6-s61-mcq-020", "topic": "Control Scope vs Validate Scope", "difficulty": "hard",
        "question": "In PMBOK Scope Management, how does 'Validate Scope' differ from 'Control Scope'?",
        "options": {
            "A": "Validate Scope formalizes customer acceptance of completed deliverables; Control Scope monitors project scope status and manages baseline changes",
            "B": "Validate Scope is done by coders; Control Scope is done by users",
            "C": "Validate Scope is an Initiating process; Control Scope is a Closing process",
            "D": "Validate Scope checks for syntax bugs; Control Scope checks for logic bugs"
        },
        "correctAnswer": "A",
        "explanation": "Validate Scope is the process of formalizing stakeholder acceptance of the completed project deliverables. Control Scope monitors status and manages changes to the scope baseline.",
        "whyOthersAreWrong": [
            "Both processes involve the PM and stakeholders.",
            "Both processes belong to the Monitoring & Controlling Process Group.",
            "Syntax and logic checks are part of Quality Control, not Scope Validation."
        ],
        "examTrap": "Validate Scope is about customer *acceptance*; Control Quality is about technical *correctness*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Control Scope vs Validate Scope"
    },
    {
        "id": "itpm-u6-s61-mcq-021", "topic": "Project Risk Management Planning", "difficulty": "medium",
        "question": "Which PMBOK process establishes the general risk management approach, tools, thresholds, and risk scoring matrices to be used on a project?",
        "options": {
            "A": "Plan Risk Management",
            "B": "Identify Risks",
            "C": "Perform Qualitative Risk Analysis",
            "D": "Control Risks"
        },
        "correctAnswer": "A",
        "explanation": "Plan Risk Management defines how to conduct risk management activities for a project, establishing the Risk Management Plan and probability-impact definitions.",
        "whyOthersAreWrong": [
            "Identify Risks populates the initial Risk Register with specific risk events.",
            "Perform Qualitative Risk Analysis assesses the priority of identified risks.",
            "Control Risks implements risk response plans and evaluates risk effectiveness."
        ],
        "examTrap": "Plan Risk Management defines HOW risk will be managed; it does not list individual risks.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Risk Management Planning"
    },
    {
        "id": "itpm-u6-s61-mcq-022", "topic": "PMBOK Quality vs Grade", "difficulty": "hard",
        "question": "How does PMBOK distinguish between 'Quality' and 'Grade'?",
        "options": {
            "A": "Quality is the degree to which a set of inherent characteristics fulfills requirements; Grade is a design category assigned to deliverables having the same functional use but different technical features",
            "B": "Quality applies to software; Grade applies strictly to hardware",
            "C": "Quality is measured by cost; Grade is measured by delivery speed",
            "D": "There is no distinction; PMBOK uses them interchangeably"
        },
        "correctAnswer": "A",
        "explanation": "Quality is conformance to requirements (zero defects). Grade is a category of capability (e.g. low grade = basic features; high grade = luxury features). Low quality is always a problem; low grade may not be.",
        "whyOthersAreWrong": [
            "Quality and grade apply across all project deliverables.",
            "Cost and speed do not define quality versus grade.",
            "They are distinct concepts rigorously separated by PMI."
        ],
        "examTrap": "Low quality is ALWAYS a failure. Low grade (e.g., economy software with few features that runs flawlessly) is acceptable if planned.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Quality vs Grade"
    },
    {
        "id": "itpm-u6-s61-mcq-023", "topic": "PMBOK Process Interaction", "difficulty": "medium",
        "question": "How do PMBOK processes interact in actual project execution?",
        "options": {
            "A": "Processes overlap and interact iteratively across phases; they are rarely discrete or one-time events",
            "B": "Every process must be completely finished before any other process can begin",
            "C": "Only one process group can be active in any given calendar quarter",
            "D": "Processes only execute in alphabetical order"
        },
        "correctAnswer": "A",
        "explanation": "While presented sequentially for pedagogical clarity, PMBOK processes interact iteratively and concurrently throughout the project lifecycle.",
        "whyOthersAreWrong": [
            "Strict non-overlapping execution would paralyze project management.",
            "Multiple process groups run simultaneously (e.g. Executing and Controlling run concurrently).",
            "Alphabetical order is absurd."
        ],
        "examTrap": "Process groups are NOT sequential phases; they run concurrently throughout the project.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Process Interaction"
    },
    {
        "id": "itpm-u6-s61-mcq-024", "topic": "Project Cost Management Baseline", "difficulty": "medium",
        "question": "What is the Cost Baseline in PMBOK Project Cost Management?",
        "options": {
            "A": "The approved version of the time-phased project budget, excluding any management reserves",
            "B": "The total company valuation on the New York Stock Exchange",
            "C": "The minimum wage paid to contractor programmers",
            "D": "The cost of paper and stationery in the project office"
        },
        "correctAnswer": "A",
        "explanation": "The cost baseline is the approved time-phased budget used to measure, monitor, and control overall cost performance. It includes contingency reserves but excludes management reserves.",
        "whyOthersAreWrong": [
            "Company stock valuation is corporate equity, not project cost baseline.",
            "Minimum wage is statutory labor law.",
            "Stationery cost is a minor overhead expense."
        ],
        "examTrap": "Cost Baseline includes Contingency Reserves, but EXCLUDES Management Reserves.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Project Cost Management Baseline"
    },
    {
        "id": "itpm-u6-s61-mcq-025", "topic": "Schedule Management: Critical Path Method", "difficulty": "medium",
        "question": "What does the Critical Path Method (CPM) identify in PMBOK Project Time Management?",
        "options": {
            "A": "The sequence of scheduled activities that determines the minimum total project duration, having zero total float",
            "B": "The path that costs the most money to execute",
            "C": "The path that employs the largest number of software testers",
            "D": "The physical walking route between the server room and executive offices"
        },
        "correctAnswer": "A",
        "explanation": "The critical path is the longest path of dependent activities through a network diagram, determining the shortest possible project completion time. Activities on it have zero float.",
        "whyOthersAreWrong": [
            "Critical path is determined by activity duration, not financial cost.",
            "Tester headcount does not define the critical path.",
            "Walking routes are physical facility pathways."
        ],
        "examTrap": "Critical path has the LONGEST path duration, but represents the SHORTEST time in which the project can finish.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Schedule Management: Critical Path Method"
    },
    {
        "id": "itpm-u6-s61-mcq-026", "topic": "Earned Value in PMBOK Monitoring", "difficulty": "medium",
        "question": "Which core tool is utilized in 'Control Costs' to integrate scope, schedule, and cost performance measurements?",
        "options": {
            "A": "Earned Value Management (EVM)",
            "B": "Expert Judgment only",
            "C": "Daily Scrum standup notes",
            "D": "SWOT Analysis"
        },
        "correctAnswer": "A",
        "explanation": "Earned Value Management (EVM) integrates the scope baseline with cost and schedule baselines to provide objective variance and forecasting metrics (CV, SV, CPI, SPI).",
        "whyOthersAreWrong": [
            "Expert judgment is subjective and cannot replace mathematical EVM metrics.",
            "Daily Scrum is an agile ceremony, not PMBOK EVM.",
            "SWOT analysis is strategic planning, not cost variance analysis."
        ],
        "examTrap": "EVM is the primary quantitative monitoring tool in PMBOK cost control.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Earned Value in PMBOK Monitoring"
    },
    {
        "id": "itpm-u6-s61-mcq-027", "topic": "Direct and Manage Project Work", "difficulty": "medium",
        "question": "Which process is the primary operational integration process during project execution where deliverables are physically produced?",
        "options": {
            "A": "Direct and Manage Project Work",
            "B": "Develop Project Management Plan",
            "C": "Monitor and Control Project Work",
            "D": "Close Project or Phase"
        },
        "correctAnswer": "A",
        "explanation": "Direct and Manage Project Work is the Executing process where the project team leads and performs the work defined in the project management plan to produce deliverables.",
        "whyOthersAreWrong": [
            "Develop Project Management Plan creates the plan during Planning.",
            "Monitor and Control Project Work tracks performance during Controlling.",
            "Close Project or Phase finalizes deliverables during Closing."
        ],
        "examTrap": "Deliverables are produced as an output of 'Direct and Manage Project Work'.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Direct and Manage Project Work"
    },
    {
        "id": "itpm-u6-s61-mcq-028", "topic": "Manage Stakeholder Engagement", "difficulty": "medium",
        "question": "What is the primary objective of 'Manage Stakeholder Engagement' in the Executing process group?",
        "options": {
            "A": "Communicating and working with stakeholders to meet their needs/expectations, address issues, and foster appropriate engagement",
            "B": "Preventing stakeholders from contacting any project team members",
            "C": "Sending promotional marketing brochures once per year",
            "D": "Firing any stakeholder who criticizes software features"
        },
        "correctAnswer": "A",
        "explanation": "Manage Stakeholder Engagement actively works with stakeholders to increase support and minimize resistance throughout project execution.",
        "whyOthersAreWrong": [
            "Blocking stakeholders creates resistance and hostility.",
            "Annual brochures are passive marketing, not active engagement.",
            "Stakeholders cannot be fired by the project manager."
        ],
        "examTrap": "Engagement requires two-way active collaboration, not one-way broadcasts.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "Manage Stakeholder Engagement"
    },
    {
        "id": "itpm-u6-s61-mcq-029", "topic": "PMBOK Strengths in Large Projects", "difficulty": "medium",
        "question": "Why is the PMBOK Guide especially well-suited for large, complex IT infrastructure and enterprise systems projects?",
        "options": {
            "A": "It provides comprehensive governance, formal baseline management, explicit risk and procurement controls, and standard ITTO processes",
            "B": "It eliminates the need for software testing or debugging",
            "C": "It guarantees that software will never contain bugs",
            "D": "It requires only one person to manage a 5,000-person project"
        },
        "correctAnswer": "A",
        "explanation": "Large enterprise projects demand structured governance, contract administration, multi-stakeholder integration, and auditable baselines that PMBOK comprehensively formalizes.",
        "whyOthersAreWrong": [
            "Quality management in PMBOK requires extensive testing.",
            "No methodology guarantees zero defects.",
            "Large projects require substantial project management teams."
        ],
        "examTrap": "PMBOK excels where formal contract administration, multi-vendor procurement, and auditability are required.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Strengths in Large Projects"
    },
    {
        "id": "itpm-u6-s61-mcq-030", "topic": "PMBOK Limitations", "difficulty": "medium",
        "question": "What is widely recognized as the primary operational drawback of applying PMBOK to small, fast-moving software projects?",
        "options": {
            "A": "Potential process overhead, excessive documentation, and administrative bureaucracy if not appropriately tailored",
            "B": "Inability to support computer software development",
            "C": "Lack of any risk management or cost control techniques",
            "D": "Strict prohibition against using object-oriented programming"
        },
        "correctAnswer": "A",
        "explanation": "If applied dogmatically without tailoring, PMBOK's 47 processes and extensive documentation create heavyweight bureaucracy unsuited for small, fast-paced projects.",
        "whyOthersAreWrong": [
            "PMBOK is widely used across software engineering.",
            "PMBOK has extensive risk and cost management processes.",
            "PMBOK is programming language agnostic."
        ],
        "examTrap": "PMBOK must ALWAYS be tailored; applying all 47 processes to a small project is an anti-pattern.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Guide"},
        "sourceUnit": 6, "sourceSection": "6.1", "sourceTopic": "PMBOK Limitations"
    }
]

print(f"Prepared Section 6.1 MCQs: {len(s61_data)}")
