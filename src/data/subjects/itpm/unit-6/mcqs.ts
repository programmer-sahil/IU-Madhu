import { MCQ } from "../../../../types";

export const unit6Mcqs: MCQ[] = [
  {
    "id": "itpm-u6-s61-mcq-001",
    "topic": "PMBOK Standard Organization",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Standard Organization",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-002",
    "topic": "Five Process Groups",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Five Process Groups",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-003",
    "topic": "Total PMBOK Processes Count",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Total PMBOK Processes Count",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-004",
    "topic": "Process Group Distribution: Planning",
    "difficulty": "medium",
    "question": "Which PMBOK process group contains the largest number of processes, containing 24 out of the 47 total processes?",
    "options": {
      "A": "Planning Process Group",
      "B": "Executing Process Group",
      "C": "Monitoring & Controlling Process Group",
      "D": "Initiating Process Group"
    },
    "correctAnswer": "A",
    "explanation": "The Planning Process Group contains 24 processes\u2014over half of all PMBOK processes\u2014reflecting the rigorous plan-driven orientation of the framework.",
    "whyOthersAreWrong": [
      "Executing contains 8 processes.",
      "Monitoring & Controlling contains 11 processes.",
      "Initiating contains only 2 processes."
    ],
    "examTrap": "Remember the exact count: 24 processes in Planning.",
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Process Group Distribution: Planning",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-005",
    "topic": "Process Group Distribution: Initiating and Closing",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Process Group Distribution: Initiating and Closing",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-006",
    "topic": "Process Group Distribution: Executing & Controlling",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Process Group Distribution: Executing & Controlling",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-007",
    "topic": "Ten Knowledge Areas Count",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Ten Knowledge Areas Count",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-008",
    "topic": "Project Integration Management",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Integration Management",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-009",
    "topic": "Project Scope vs Product Scope",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Scope vs Product Scope",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-010",
    "topic": "ITTO Architecture",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "ITTO Architecture",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-011",
    "topic": "Project Charter Authorization",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Charter Authorization",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-012",
    "topic": "Perform Integrated Change Control",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Perform Integrated Change Control",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-013",
    "topic": "Project Management Plan Baselining",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Management Plan Baselining",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-014",
    "topic": "PMBOK Progressive Elaboration",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Progressive Elaboration",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-015",
    "topic": "Change Control Board (CCB)",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Change Control Board (CCB)",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-016",
    "topic": "Project Closing Activities",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Closing Activities",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-017",
    "topic": "PMBOK Human Resource Management",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Human Resource Management",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-018",
    "topic": "PMBOK Communications vs Stakeholder",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Communications vs Stakeholder",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-019",
    "topic": "Project Procurement Management Scope",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Procurement Management Scope",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-020",
    "topic": "Control Scope vs Validate Scope",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Control Scope vs Validate Scope",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-021",
    "topic": "Project Risk Management Planning",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Risk Management Planning",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-022",
    "topic": "PMBOK Quality vs Grade",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Quality vs Grade",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-023",
    "topic": "PMBOK Process Interaction",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Process Interaction",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-024",
    "topic": "Project Cost Management Baseline",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Project Cost Management Baseline",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-025",
    "topic": "Schedule Management: Critical Path Method",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Schedule Management: Critical Path Method",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-026",
    "topic": "Earned Value in PMBOK Monitoring",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Earned Value in PMBOK Monitoring",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-027",
    "topic": "Direct and Manage Project Work",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Direct and Manage Project Work",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-028",
    "topic": "Manage Stakeholder Engagement",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "Manage Stakeholder Engagement",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-029",
    "topic": "PMBOK Strengths in Large Projects",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Strengths in Large Projects",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s61-mcq-030",
    "topic": "PMBOK Limitations",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.1",
      "topic": "PMBOK Guide"
    },
    "sourceUnit": 6,
    "sourceSection": "6.1",
    "sourceTopic": "PMBOK Limitations",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-031",
    "topic": "PRINCE2 Acronym and Origin",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Acronym and Origin",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-032",
    "topic": "PRINCE2 7-7-7 Architecture",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 7-7-7 Architecture",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-033",
    "topic": "PRINCE2 Seven Principles",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Seven Principles",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-034",
    "topic": "Principle: Continued Business Justification",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Principle: Continued Business Justification",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-035",
    "topic": "Principle: Learn from Experience",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Principle: Learn from Experience",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-036",
    "topic": "Principle: Manage by Stages",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Principle: Manage by Stages",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-037",
    "topic": "Principle: Manage by Exception",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Principle: Manage by Exception",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-038",
    "topic": "Six PRINCE2 Tolerances",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Six PRINCE2 Tolerances",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-039",
    "topic": "Principle: Focus on Products",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Principle: Focus on Products",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-040",
    "topic": "Principle: Tailor to Environment",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Principle: Tailor to Environment",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-041",
    "topic": "PRINCE2 Seven Themes",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Seven Themes",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-042",
    "topic": "PRINCE2 Four Management Levels",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Four Management Levels",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-043",
    "topic": "Project Board Triad Interests",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Project Board Triad Interests",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-044",
    "topic": "Project Board: Executive Role",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Project Board: Executive Role",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-045",
    "topic": "Project Board: Senior User Role",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Project Board: Senior User Role",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-046",
    "topic": "Project Board: Senior Supplier Role",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Project Board: Senior Supplier Role",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-047",
    "topic": "PRINCE2 Seven Processes",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Seven Processes",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-048",
    "topic": "Process: Directing a Project (DP)",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Process: Directing a Project (DP)",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-049",
    "topic": "Process: Starting Up a Project (SU)",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Process: Starting Up a Project (SU)",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-050",
    "topic": "Process: Initiating a Project (IP)",
    "difficulty": "medium",
    "question": "What major master document is produced during the 'Initiating a Project' (IP) process in PRINCE2?",
    "options": {
      "A": "The Project Initiation Documentation (PID)",
      "B": "The daily standup whiteboard sticky notes",
      "C": "The annual corporate shareholder dividend report",
      "D": "The final product release notes"
    },
    "correctAnswer": "A",
    "explanation": "Initiating a Project (IP) produces the Project Initiation Documentation (PID)\u2014the comprehensive baseline suite defining the project's strategy, plans, controls, and Business Case.",
    "whyOthersAreWrong": [
      "Daily standup sticky notes are agile sprint artifacts.",
      "Dividend reports are investor relations documents.",
      "Release notes are generated during stage delivery."
    ],
    "examTrap": "The PID is the central baseline document of PRINCE2, produced in the IP process.",
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Process: Initiating a Project (IP)",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-051",
    "topic": "Process: Managing a Stage Boundary (SB)",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Process: Managing a Stage Boundary (SB)",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-052",
    "topic": "Process: Managing Product Delivery (MP)",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "Process: Managing Product Delivery (MP)",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-053",
    "topic": "PRINCE2 Exception Handling Flow",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Exception Handling Flow",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-054",
    "topic": "PRINCE2 vs PMBOK Primary Distinction",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 vs PMBOK Primary Distinction",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-055",
    "topic": "PRINCE2 Highlight Report",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Highlight Report",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-056",
    "topic": "PRINCE2 Product-Based Planning",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Product-Based Planning",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-057",
    "topic": "PRINCE2 Project Assurance",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Project Assurance",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-058",
    "topic": "PRINCE2 End Project Report",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 End Project Report",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-059",
    "topic": "PRINCE2 Theme: Organization",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Theme: Organization",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s62-mcq-060",
    "topic": "PRINCE2 Premature Closure",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.2",
      "topic": "PRINCE2"
    },
    "sourceUnit": 6,
    "sourceSection": "6.2",
    "sourceTopic": "PRINCE2 Premature Closure",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-061",
    "topic": "Multi-Project Hierarchy Tiers",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Multi-Project Hierarchy Tiers",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-062",
    "topic": "Portfolio Management Core Focus",
    "difficulty": "medium",
    "question": "What is the primary governing question and focus of 'Portfolio Management'?",
    "options": {
      "A": "'Are we doing the right work?' \u2014 aligning investments with corporate strategic objectives, prioritizing programs, and balancing overall organizational risk",
      "B": "'How do we code this database query in SQL?' \u2014 low-level technical software programming",
      "C": "'Who will approve the developer's vacation request for next Tuesday?' \u2014 routine administrative HR tasks",
      "D": "'How many lines of code were written before lunch?' \u2014 developer activity monitoring"
    },
    "correctAnswer": "A",
    "explanation": "Portfolio management ensures the organization invests its limited capital, staff, and executive attention in the right collection of programs and projects to achieve strategic business goals.",
    "whyOthersAreWrong": [
      "SQL query optimization is an engineering developer task.",
      "Vacation approvals are routine line-manager duties.",
      "Lines of code is an obsolete developer metric."
    ],
    "examTrap": "Portfolio = *Doing the RIGHT things* (strategic alignment). Project = *Doing things RIGHT* (operational execution).",
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Portfolio Management Core Focus",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-063",
    "topic": "Programme Management Core Focus",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Programme Management Core Focus",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-064",
    "topic": "Project Level Deliverable Focus",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Project Level Deliverable Focus",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-065",
    "topic": "Three PMO Structural Types",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Three PMO Structural Types",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-066",
    "topic": "Supportive PMO Characteristics",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Supportive PMO Characteristics",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-067",
    "topic": "Controlling PMO Characteristics",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Controlling PMO Characteristics",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-068",
    "topic": "Directive PMO Characteristics",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Directive PMO Characteristics",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-069",
    "topic": "Inter-Project Resource Contention",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Inter-Project Resource Contention",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-070",
    "topic": "Program Benefit Realization Timing",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Program Benefit Realization Timing",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-071",
    "topic": "Multi-Project Strategic Alignment",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Multi-Project Strategic Alignment",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-072",
    "topic": "PMO Lessons Learned Repository",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "PMO Lessons Learned Repository",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-073",
    "topic": "Portfolio Risk Diversification",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Portfolio Risk Diversification",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-074",
    "topic": "Programme Dependency Management",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Programme Dependency Management",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-075",
    "topic": "Portfolio Balancing Techniques",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Portfolio Balancing Techniques",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-076",
    "topic": "PMO Authority and Organizational Culture",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "PMO Authority and Organizational Culture",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-077",
    "topic": "Multi-Project Priority Shifts",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Multi-Project Priority Shifts",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-078",
    "topic": "Enterprise Resource Management",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Enterprise Resource Management",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-079",
    "topic": "Controlling PMO Compliance Audits",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Controlling PMO Compliance Audits",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s63-mcq-080",
    "topic": "Multi-Project Management Summary",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.3",
      "topic": "Multi-Project Management"
    },
    "sourceUnit": 6,
    "sourceSection": "6.3",
    "sourceTopic": "Multi-Project Management Summary",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-081",
    "topic": "Agile Scaling Core Challenge",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Agile Scaling Core Challenge",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-082",
    "topic": "Scrum of Scrums Structure",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Scrum of Scrums Structure",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-083",
    "topic": "SoS Four Questions",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SoS Four Questions",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-084",
    "topic": "SoS Fourth Question Importance",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SoS Fourth Question Importance",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-085",
    "topic": "LeSS Origin and Creators",
    "difficulty": "easy",
    "question": "Who created Large-Scale Scrum (LeSS), and what is its guiding philosophical principle?",
    "options": {
      "A": "Craig Larman and Bas Vodde; guiding principle: 'More with LeSS' (scaling Scrum by removing organizational complexity)",
      "B": "Jeff Sutherland and Ken Schwaber; guiding principle: 'Code Fast and Break Things'",
      "C": "Dean Leffingwell; guiding principle: 'Hierarchical Multi-Tier Command'",
      "D": "Bill Gates; guiding principle: 'Proprietary Enterprise Software'"
    },
    "correctAnswer": "A",
    "explanation": "Large-Scale Scrum (LeSS) was developed by Craig Larman and Bas Vodde, founded on the principle 'More with LeSS'\u2014scaling by descaling organization complexity rather than adding heavy layers.",
    "whyOthersAreWrong": [
      "Sutherland and Schwaber created base single-team Scrum.",
      "Dean Leffingwell created SAFe, not LeSS.",
      "Bill Gates is the founder of Microsoft."
    ],
    "examTrap": "LeSS = Craig Larman & Bas Vodde ('More with LeSS'). SAFe = Dean Leffingwell.",
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS Origin and Creators",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-086",
    "topic": "Basic LeSS Team Sizing",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Basic LeSS Team Sizing",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-087",
    "topic": "LeSS Single-Source Rules",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS Single-Source Rules",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-088",
    "topic": "LeSS Sprint Planning Part 1 & 2",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS Sprint Planning Part 1 & 2",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-089",
    "topic": "LeSS Huge Structure",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS Huge Structure",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-090",
    "topic": "SAFe Creator and Scope",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SAFe Creator and Scope",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-091",
    "topic": "Agile Release Train (ART) Headcount",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Agile Release Train (ART) Headcount",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-092",
    "topic": "SAFe CALMR Acronym",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SAFe CALMR Acronym",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-093",
    "topic": "CALMR: Culture Component",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "CALMR: Culture Component",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-094",
    "topic": "CALMR: Automation Component",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "CALMR: Automation Component",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-095",
    "topic": "CALMR: Lean Flow Component",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "CALMR: Lean Flow Component",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-096",
    "topic": "CALMR: Measurement Component",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "CALMR: Measurement Component",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-097",
    "topic": "CALMR: Recovery Component",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "CALMR: Recovery Component",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-098",
    "topic": "LeSS vs SAFe Philosophical Contrast",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS vs SAFe Philosophical Contrast",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-099",
    "topic": "Scaled Agile Dependency Management",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Scaled Agile Dependency Management",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0100",
    "topic": "SoS Meeting Duration",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SoS Meeting Duration",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0101",
    "topic": "Feature Teams in LeSS",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Feature Teams in LeSS",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0102",
    "topic": "SAFe Program Increment (PI) Planning",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SAFe Program Increment (PI) Planning",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0103",
    "topic": "LeSS Joint Retrospective",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS Joint Retrospective",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0104",
    "topic": "SoS Ambassador Selection",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SoS Ambassador Selection",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0105",
    "topic": "LeSS Definition of Done Across Teams",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "LeSS Definition of Done Across Teams",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0106",
    "topic": "Agile at Scale Integration Cadence",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Agile at Scale Integration Cadence",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0107",
    "topic": "SAFe Lean-Agile Leadership",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "SAFe Lean-Agile Leadership",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0108",
    "topic": "Enterprise Architecture Governance in Scaled Agile",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Enterprise Architecture Governance in Scaled Agile",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0109",
    "topic": "Scaled Agile Criticism in Course Book",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Scaled Agile Criticism in Course Book",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s64-mcq-0110",
    "topic": "Scaled Agile Framework Selection Summary",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.4",
      "topic": "Agile Software Processes in Large Projects"
    },
    "sourceUnit": 6,
    "sourceSection": "6.4",
    "sourceTopic": "Scaled Agile Framework Selection Summary",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-111",
    "topic": "Functional Organization PM Authority",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Functional Organization PM Authority",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-112",
    "topic": "Matrix Organization Continuum",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Matrix Organization Continuum",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-113",
    "topic": "Weak Matrix PM Role",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Weak Matrix PM Role",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-114",
    "topic": "Balanced Matrix Shared Power",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Balanced Matrix Shared Power",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-115",
    "topic": "Strong Matrix PM Authority",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Strong Matrix PM Authority",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-116",
    "topic": "Projectized Organization Structure",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Projectized Organization Structure",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-117",
    "topic": "Projectized 'No Home' Challenge",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Projectized 'No Home' Challenge",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-118",
    "topic": "Iterative Development Definition",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Iterative Development Definition",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-119",
    "topic": "Incremental Development Definition",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Incremental Development Definition",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-120",
    "topic": "Agile Development Synthesis",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Agile Development Synthesis",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-121",
    "topic": "One-Size-Fits-All Myth",
    "difficulty": "easy",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "One-Size-Fits-All Myth",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-122",
    "topic": "Requirement Uncertainty Selection Dimension",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Requirement Uncertainty Selection Dimension",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-123",
    "topic": "Safety-Critical Systems Selection",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Safety-Critical Systems Selection",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-124",
    "topic": "Customer Availability Selection Dimension",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Customer Availability Selection Dimension",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-125",
    "topic": "Hybrid Methodologies in Practice",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Hybrid Methodologies in Practice",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-126",
    "topic": "Team Distribution Impact",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Team Distribution Impact",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-127",
    "topic": "Organizational Culture Alignment",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Organizational Culture Alignment",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-128",
    "topic": "Project Size and Ceremony",
    "difficulty": "medium",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Project Size and Ceremony",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-129",
    "topic": "Contractual Model Impact on Methodology",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Contractual Model Impact on Methodology",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  },
  {
    "id": "itpm-u6-s65-mcq-130",
    "topic": "Comprehensive Methodology Selection Summary",
    "difficulty": "hard",
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
    "source": {
      "type": "course-book",
      "unit": 6,
      "section": "6.5",
      "topic": "Selection of the Appropriate Project Management Method"
    },
    "sourceUnit": 6,
    "sourceSection": "6.5",
    "sourceTopic": "Comprehensive Methodology Selection Summary",
    "unit": 6,
    "unitId": 6,
    "subjectId": "itpm"
  }
];
