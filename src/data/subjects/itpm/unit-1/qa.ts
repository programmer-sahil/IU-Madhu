import { DescriptiveQuestion } from "../../../../types";

export const unit1ImportantQuestions: DescriptiveQuestion[] = [
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
    "keywords": [
      "Temporary endeavor",
      "Unique deliverable",
      "Defined beginning and end",
      "Operations",
      "Ongoing and repetitive",
      "Strategic change"
    ],
    "commonMistakes": "Confusing the temporary duration of the project work with the lifespan of the deliverable (which is usually long-lasting).",
    "selfCheckChecklist": [
      "Did I mention temporary and unique?",
      "Did I define operations as ongoing and repetitive?",
      "Did I clearly state that deliverables are intended to be durable?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.1",
      "topic": "Defining IT Projects",
      "page": 16
    }
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
    "keywords": [
      "Developing plans",
      "Organizing work",
      "Monitoring against plans",
      "Accountability",
      "Baselines"
    ],
    "commonMistakes": "Describing IT project management purely as programming or server setup rather than organizational governance and coordination.",
    "selfCheckChecklist": [
      "Did I list the four core activities accurately?",
      "Did I distinguish management coordination from technical coding?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.1",
      "topic": "Defining IT Projects",
      "page": 16
    }
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
    "keywords": [
      "Sociotechnical complexity",
      "Changing requirements",
      "Rapid technological change",
      "Legacy integration",
      "Immature discipline",
      "Failure concealment"
    ],
    "commonMistakes": "Stating that IT projects fail because 'programmers are lazy' rather than identifying structural and sociotechnical drivers.",
    "selfCheckChecklist": [
      "Did I mention sociotechnical nature?",
      "Did I explain the limited sharing of failure lessons?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.1",
      "topic": "Why IT Projects are Difficult",
      "page": 17
    }
  },
  {
    "id": "itpm-u1-qa-004",
    "unit": 1,
    "question": "Explain the Iron Triangle of Project Constraints and illustrate the trade-offs when one constraint is altered.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Define Scope, Schedule, and Cost. Provide clear concrete examples of trade-offs when modifying one constraint.",
    "modelAnswer": "The Iron Triangle illustrates the fundamental interdependency between the three primary project constraints:\n1. Scope: The boundary of features, deliverables, and technical work to be performed.\n2. Schedule (Time): The calendar duration and milestones established to deliver the project.\n3. Cost (Budget/Resources): The financial budget, equipment, and human labor hours allocated.\n\nTrade-Off Dynamics:\n\u2022 Expanding Scope: If the client requests additional features, the schedule must be extended, or the budget/resources must be increased (or quality will decline).\n\u2022 Shortening Schedule: If the launch date is brought forward (crashing/fast-tracking), more resources/cost must be injected, or scope must be reduced.\n\u2022 Cutting Budget: If executive leadership cuts funding by 30%, the team must negotiate a smaller realizable scope or accept an extended delivery timeline.",
    "answerStructure": [
      "Define the 3 nodes of the triangle",
      "Explain interdependency principle",
      "Provide specific examples of Scope increase, Schedule compression, and Budget cuts"
    ],
    "keywords": [
      "Iron Triangle",
      "Scope",
      "Schedule",
      "Cost",
      "Trade-offs",
      "Interdependency"
    ],
    "commonMistakes": "Claiming that an experienced project manager can expand scope without affecting either cost or schedule.",
    "selfCheckChecklist": [
      "Did I identify all three nodes correctly?",
      "Did I explain the trade-off mechanics clearly?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.1",
      "topic": "Iron Triangle",
      "page": 19
    }
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
    "keywords": [
      "Quintuple constraints",
      "Schedule",
      "Cost",
      "Context",
      "Technical",
      "Financing",
      "Gransberg & Jeong"
    ],
    "commonMistakes": "Listing generic PMBOK terms (Quality, Risk) instead of the five explicitly specified in the course book (Schedule, Cost, Context, Technical, Financing).",
    "selfCheckChecklist": [
      "Did I use the exact book terms: Schedule, Cost, Context, Technical, Financing?",
      "Did I note that Technical corresponds to Scope?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.1",
      "topic": "Quintuple Constraints",
      "page": 20
    }
  },
  {
    "id": "itpm-u1-qa-006",
    "unit": 1,
    "question": "Explain the organizational hierarchy of a large plan-driven IT project.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Describe the full chain from Sponsor/PMO down to Team Member, with PMB and TMB steering bodies.",
    "modelAnswer": "A large plan-driven IT project utilizes a structured hierarchy to ensure accountability, governance, and division of technical labor:\n\n1. Project Sponsor / PMO (Top Executive Tier): The Sponsor owns the business case and funding. The PMO provides organizational guidelines and resource support.\n2. Project Manager: Carries overall accountability for project delivery, reporting upward to the Sponsor/PMB and directing the project team.\n3. Technical Coordinator: Directly supports the PM on technical matters, monitors specifications, oversees Work-Package Leaders, and manages the technical library.\n4. Work-Package Leaders (WPL): Manage assigned work packages, coordinate component deliverables, and report progress to the Technical Coordinator.\n5. Task Leaders: Lead specific task execution within a work package, guiding day-to-day work.\n6. Team Members: Specialized technical engineers executing coding, testing, and documentation.\n\nAdvisory & Governance Bodies:\n\u2022 PMB (Project Management Board): Sits adjacent to the PM for overall nontechnical governance.\n\u2022 TMB (Technical Management Board): Sits adjacent to the Technical Coordinator for technical decisions and dispute resolution.",
    "answerStructure": [
      "List hierarchy from top to bottom in correct sequence",
      "State role of PMB adjacent to PM",
      "State role of TMB adjacent to Technical Coordinator"
    ],
    "keywords": [
      "Project Sponsor",
      "PMO",
      "Project Manager",
      "Technical Coordinator",
      "Work-Package Leader",
      "Task Leader",
      "Team Member",
      "PMB",
      "TMB"
    ],
    "commonMistakes": "Omitting the Technical Coordinator or reversing the hierarchy of WPL and Task Leader.",
    "selfCheckChecklist": [
      "Is the hierarchy strictly in top-to-bottom order?",
      "Did I explain the role of PMB and TMB?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.2",
      "topic": "Project Hierarchy",
      "page": 21
    }
  },
  {
    "id": "itpm-u1-qa-007",
    "unit": 1,
    "question": "Differentiate the roles and responsibilities of the Project Management Board (PMB) and Technical Management Board (TMB).",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Contrast overall nontechnical governance (PMB) with technical governance and dispute resolution (TMB).",
    "modelAnswer": "The PMB and TMB operate as complementary governance bodies with distinct jurisdictions:\n\nProject Management Board (PMB):\n\u2022 Focus: Overall project governance, strategic direction, and nontechnical management.\n\u2022 Responsibilities: Monitors progress against schedule and budget baselines, manages project-level risks, approves resource reallocations, authorizes major plan changes, directs corrective actions, and resolves nontechnical disputes.\n\nTechnical Management Board (TMB):\n\u2022 Focus: Specialized technical governance and engineering integrity.\n\u2022 Responsibilities: Resolves complex or unresolved technical issues, arbitrates technical disagreements between teams/vendors, coordinates technical/contractual specifications, and evaluates deliverables through technical audits against milestone criteria.\n\nSummary Rule: PMB governs overall project direction and resources; TMB governs technical decisions and engineering conflicts.",
    "answerStructure": [
      "Heading and detailed bullets for PMB",
      "Heading and detailed bullets for TMB",
      "Concise concluding distinction"
    ],
    "keywords": [
      "PMB",
      "TMB",
      "Overall governance",
      "Nontechnical differences",
      "Technical conflicts",
      "Milestone audits",
      "Corrective action"
    ],
    "commonMistakes": "Treating PMB and TMB as the same board or assigning technical conflict arbitration to the PMB.",
    "selfCheckChecklist": [
      "Did I assign nontechnical disputes to PMB?",
      "Did I assign technical conflicts and milestone audits to TMB?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.2",
      "topic": "Governance Bodies",
      "page": 22
    }
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
    "keywords": [
      "Initiation",
      "Planning",
      "Execution",
      "Monitor and Control",
      "Termination",
      "Runs in parallel",
      "Baselines"
    ],
    "commonMistakes": "Drawing Monitor and Control as a tiny isolated phase strictly occurring after execution finishes.",
    "selfCheckChecklist": [
      "Are all 5 phases in correct order?",
      "Did I emphasize that Monitor & Control runs concurrently with execution?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.2",
      "topic": "Project Phases",
      "page": 24
    }
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
    "keywords": [
      "Project Charter",
      "Official authorization",
      "Business case",
      "Sponsor",
      "Authority levels",
      "WHY WHAT RISK WHEN MONEY APPROVAL WHO"
    ],
    "commonMistakes": "Forgetting to state that signing the charter officially authorizes the project and commits resources.",
    "selfCheckChecklist": [
      "Did I mention that signing authorizes the project?",
      "Did I list the memory components accurately?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.2",
      "topic": "Project Charter",
      "page": 24
    }
  },
  {
    "id": "itpm-u1-qa-010",
    "unit": 1,
    "question": "Compare plan-driven and agile project management approaches as presented in Unit 1.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Contrast upfront planning, requirement volatility, phase structure, and adaptation support.",
    "modelAnswer": "Unit 1 contrasts plan-driven and agile methodologies along core architectural dimensions:\n\n1. Planning Horizon:\n\u2022 Plan-Driven: Emphasizes extensive, detailed whole-project planning early in the lifecycle before development starts.\n\u2022 Agile: Emphasizes high-level initial roadmap planning, adding detailed specifications close to execution within short iterations/sprints.\n\n2. Requirements & Change Handling:\n\u2022 Plan-Driven: Assumes requirements can be locked early; manages changes through formal, restrictive change control boards.\n\u2022 Agile: Welcomes evolving requirements throughout the lifecycle, optimizing the system for ongoing adaptation and customer feedback.\n\n3. Workflow & Phases:\n\u2022 Plan-Driven: Executes in predictive, logically related activity phases (e.g. Conception \u2192 Definition \u2192 Launch \u2192 Close).\n\u2022 Agile: Realizes value through rapid, repeating iterative timeboxes (sprints) producing working increments.\n\n4. Suitable Context:\n\u2022 Plan-Driven: Ideal for large, contractually fixed, regulated systems with well-understood requirements.\n\u2022 Agile: Ideal for dynamic, innovative software where end-user needs evolve through frequent prototypes.",
    "answerStructure": [
      "Comparison across 4 structured dimensions (planning, change, workflow, context)",
      "Clear balance without declaring one universally superior"
    ],
    "keywords": [
      "Plan-driven",
      "Agile",
      "Upfront planning",
      "Iterative sprints",
      "Change management",
      "Requirements volatility"
    ],
    "commonMistakes": "Adding complex Scrum mechanics (story points, burndowns) not covered in Unit 1.",
    "selfCheckChecklist": [
      "Did I contrast upfront detail vs just-in-time detail?",
      "Did I keep the scope strictly aligned with Unit 1?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.2",
      "topic": "Plan-Driven vs Agile",
      "page": 25
    }
  },
  {
    "id": "itpm-u1-qa-011",
    "unit": 1,
    "question": "Define project risk and explain the concepts of Threat and Opportunity.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Define risk as an uncertain event/condition. Explain negative risk as threat and positive risk as opportunity.",
    "modelAnswer": "A project risk is formally defined as an uncertain event or condition that, if it occurs, has a positive or negative effect on one or more project objectives (such as scope, schedule, cost, or quality).\n\nTwo Dimensions of Risk:\n1. Threat (Negative Risk):\n\u2022 An uncertain event that, if realized, harms project objectives.\n\u2022 Examples: Critical database server failure, key programmer departure, unexpected regulatory penalties, interface incompatibility.\n\u2022 Management Objective: Minimize probability and mitigate potential damage.\n\n2. Opportunity (Positive Risk):\n\u2022 An uncertain event that, if realized, benefits project objectives.\n\u2022 Examples: Favorable cloud infrastructure price drops, early completion of dependent components, discovering open-source libraries that accelerate development.\n\u2022 Management Objective: Maximize probability and exploit positive impacts.\n\nKey Takeaway: Risk is not merely synonymous with disaster; professional PM actively identifies and captures opportunities.",
    "answerStructure": [
      "Formal definition emphasizing uncertainty",
      "Detailed definition and examples of Threat",
      "Detailed definition and examples of Opportunity",
      "Concluding rule on positive risk"
    ],
    "keywords": [
      "Project risk",
      "Uncertain event",
      "Threat",
      "Opportunity",
      "Positive risk",
      "Negative risk"
    ],
    "commonMistakes": "Stating that risk is strictly negative and that positive events are called 'luck' rather than opportunities.",
    "selfCheckChecklist": [
      "Did I define positive risk as opportunity?",
      "Did I provide examples for both threat and opportunity?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.3",
      "topic": "Managing Risks",
      "page": 26
    }
  },
  {
    "id": "itpm-u1-qa-012",
    "unit": 1,
    "question": "How are project risks evaluated and why does risk exposure change dynamically over time?",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Explain Probability \u00d7 Magnitude of impact. Explain why risk evolves as knowledge increases.",
    "modelAnswer": "Project risks are evaluated across two primary quantitative/qualitative dimensions:\n1. Probability of Occurrence: The likelihood that the uncertain event will take place (ranging from very unlikely to highly probable).\n2. Magnitude of Consequence (Impact): The severity of potential financial, schedule, or technical damage (for threats) or benefit (for opportunities).\n\nRisk Exposure Formula: Risk Exposure = Probability \u00d7 Impact\n\nDynamic Nature of Risk Over Time:\n\u2022 Risk does not remain static. As the project advances through its lifecycle, team knowledge increases and technical ambiguities are resolved.\n\u2022 When a prototype succeeds or a legacy interface is tested, related risks disappear from the active register.\n\u2022 Concurrently, new risks emerge during execution (e.g. unforeseen user load, third-party vendor delays, organizational restructuring).\n\u2022 Therefore, risk evaluation is an ongoing iterative discipline, not a one-time planning exercise.",
    "answerStructure": [
      "Define Probability and Impact",
      "State the evaluation calculation / matrix logic",
      "Explain why risk evolves as project knowledge increases"
    ],
    "keywords": [
      "Probability",
      "Impact",
      "Magnitude of damage",
      "Risk exposure",
      "Dynamic risk",
      "Knowledge increase"
    ],
    "commonMistakes": "Assuming risk is only calculated once during initiation and never revised.",
    "selfCheckChecklist": [
      "Did I explain Probability \u00d7 Impact?",
      "Did I explain that risk shifts as knowledge increases?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.3",
      "topic": "Managing Risks",
      "page": 26
    }
  },
  {
    "id": "itpm-u1-qa-013",
    "unit": 1,
    "question": "Identify and explain major sources of IT project risk, categorizing them into Technological, Organizational, and User/Stakeholder risks.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Provide clear source-supported categories and examples for Technological, Organizational, and User/Stakeholder risks.",
    "modelAnswer": "The course book groups common IT project risks into three major source categories:\n\n1. Technological Risks:\n\u2022 Inadequate technology or weak technical infrastructure.\n\u2022 Complex, fragile integration interfaces between new systems and legacy databases.\n\u2022 Insufficient system scalability or unexpected performance bottlenecks.\n\u2022 Reliance on immature, unproven programming libraries or third-party tools.\n\n2. Organizational Risks:\n\u2022 Inadequate staffing or sudden loss of key personnel.\n\u2022 Limited or unstable project funding throughout the lifecycle.\n\u2022 Immature organizational project management practices and lack of executive support.\n\u2022 Ineffective resource management strategy leading to specialist over-allocation.\n\n3. User & Stakeholder-Related Risks:\n\u2022 Underestimating the actual volume and concurrency of active users.\n\u2022 Poor stakeholder communication leading to misunderstood business requirements.\n\u2022 High external dependencies on third-party suppliers or collaborators.\n\u2022 User resistance to organizational change and new software workflows.",
    "answerStructure": [
      "Clear headings for the three categories",
      "3-4 concrete source-supported examples per category"
    ],
    "keywords": [
      "Technological risks",
      "Organizational risks",
      "User stakeholder risks",
      "Legacy integration",
      "Scalability",
      "Resource strategy"
    ],
    "commonMistakes": "Listing generic personal complaints rather than the source-grounded categories.",
    "selfCheckChecklist": [
      "Are all three categories present?",
      "Did I include legacy integration and user volume underestimation?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.3",
      "topic": "Sources of IT Project Risk",
      "page": 27
    }
  },
  {
    "id": "itpm-u1-qa-014",
    "unit": 1,
    "question": "Explain the Four-Step Risk Management Process (I-A-D-M).",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Explain IDENTIFY, ANALYZE, DECIDE, MONITOR in sequential order with specific project activities.",
    "modelAnswer": "Unit 1 outlines an animated four-step continuous risk-management lifecycle represented by the mnemonic I-A-D-M:\n\n1. IDENTIFY (I):\n\u2022 Objective: Detect and document all potential threats and opportunities before they affect the project.\n\u2022 Activities: Stakeholder interviews, technical reviews, historical lesson audits, and cataloging in a Risk Register.\n\n2. ANALYZE (A):\n\u2022 Objective: Evaluate the severity and likelihood of each identified risk.\n\u2022 Activities: Assessing probability of occurrence and estimating the size of damage or benefit, prioritizing critical exposures.\n\n3. DECIDE (D):\n\u2022 Objective: Select and formulate the appropriate response strategy.\n\u2022 Activities: Choosing one of the M-A-T-A strategies (Mitigate, Accept, Transfer, Avoid), allocating contingency funds, and assigning risk owners.\n\n4. MONITOR (M):\n\u2022 Objective: Track active risks, identify emerging project triggers, and evaluate response effectiveness.\n\u2022 Activities: Continuous tracking of early warning indicators and updating the risk register throughout execution.",
    "answerStructure": [
      "Mnemonic introduction (I-A-D-M)",
      "Step-by-step breakdown with Objective and Activities for each step"
    ],
    "keywords": [
      "I-A-D-M",
      "Identify",
      "Analyze",
      "Decide",
      "Monitor",
      "Risk Register",
      "Risk Owners"
    ],
    "commonMistakes": "Swapping the order of Analyze and Decide, or skipping the continuous Monitor step.",
    "selfCheckChecklist": [
      "Did I list I-A-D-M in exact order?",
      "Did I explain what happens in each step?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.3",
      "topic": "Risk Process",
      "page": 28
    }
  },
  {
    "id": "itpm-u1-qa-015",
    "unit": 1,
    "question": "Explain the Four Risk Responses (M-A-T-A) with suitable IT project examples.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Define Mitigate, Accept, Transfer, Avoid with clear, realistic source-consistent IT examples.",
    "modelAnswer": "When responding to identified threats, project managers utilize the four M-A-T-A response strategies:\n\n1. MITIGATE:\n\u2022 Action: Proactively reduce the probability of occurrence and/or the magnitude of potential damage.\n\u2022 IT Example: Implementing automated regression test suites and building redundant database failover servers to prevent outages.\n\n2. ACCEPT:\n\u2022 Action: Acknowledge the risk and choose not to take active reducing measures, retaining the risk internally and monitoring it.\n\u2022 IT Example: Tolerating a minor, cosmetic CSS rendering glitch on an obsolete web browser used by under 0.05% of users.\n\n3. TRANSFER:\n\u2022 Action: Shift the financial or operational impact of the risk to an external third party.\n\u2022 IT Example: Purchasing commercial business interruption insurance or contracting an external cloud provider under a guaranteed uptime SLA.\n\n4. AVOID:\n\u2022 Action: Eliminate the risk exposure entirely by deliberately modifying project scope or not performing the high-risk activity.\n\u2022 IT Example: Canceling an experimental, unproven third-party AI module and using an established rule-based algorithm instead.",
    "answerStructure": [
      "Mnemonic introduction (M-A-T-A)",
      "Definition and concrete IT example for each of the 4 responses"
    ],
    "keywords": [
      "Mitigate",
      "Accept",
      "Transfer",
      "Avoid",
      "M-A-T-A",
      "Risk response",
      "SLA insurance"
    ],
    "commonMistakes": "Confusing Mitigation (reducing impact/probability) with Avoidance (canceling the activity completely).",
    "selfCheckChecklist": [
      "Did I define Mitigate, Accept, Transfer, Avoid?",
      "Did I give a specific IT example for each?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.3",
      "topic": "Risk Responses",
      "page": 28
    }
  },
  {
    "id": "itpm-u1-qa-016",
    "unit": 1,
    "question": "Explain Risk Appetite, Risk Tolerance, and Risk Threshold, and identify the three primary risk attitudes.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Clearly define appetite, tolerance, and threshold (below=acceptable, above=not tolerated). List risk-averse, risk-neutral, risk-taking.",
    "modelAnswer": "Risk governance relies on three structural threshold concepts:\n\n1. Risk Appetite: The broad degree of uncertainty an organization is willing to undertake in pursuit of value or strategic innovation.\n2. Risk Tolerance: The specific, measurable volume or amount of risk an organization can absorb before severe failure occurs.\n3. Risk Threshold: The precise operational boundary line separating acceptable risk from unacceptable risk:\n   \u2022 Below Threshold: Risk is within acceptable limits; can be tolerated/accepted.\n   \u2022 Above Threshold: Risk is NOT tolerated; immediate active intervention is mandated.\n\nThree Primary Risk Attitudes:\n\u2022 Risk-Averse: Prefers certainty and safety; willing to pay significant premiums to avoid or mitigate uncertainty.\n\u2022 Risk-Neutral: Evaluates decisions objectively based on expected statistical value without emotional bias (described in Unit 1 as more reserved/measured).\n\u2022 Risk-Taking (Risk-Seeking): Willing to accept substantial uncertainty in exchange for high potential rewards.",
    "answerStructure": [
      "Define Appetite, Tolerance, Threshold with clear threshold rule",
      "Define the three attitudes: Averse, Neutral, Taking"
    ],
    "keywords": [
      "Risk appetite",
      "Risk tolerance",
      "Risk threshold",
      "Risk-averse",
      "Risk-neutral",
      "Risk-taking",
      "Boundary"
    ],
    "commonMistakes": "Failing to explain the threshold rule (below = acceptable, above = not tolerated).",
    "selfCheckChecklist": [
      "Did I explain the threshold rule explicitly?",
      "Did I define all three risk attitudes?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.3",
      "topic": "Risk Attitudes",
      "page": 27
    }
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
    "keywords": [
      "Overall project responsibility",
      "Upward reporting",
      "Coordination",
      "Chairing meetings",
      "Performance monitoring",
      "Variance control"
    ],
    "commonMistakes": "Focusing solely on coding and server installation rather than management stewardship.",
    "selfCheckChecklist": [
      "Did I cover upward reporting to sponsors?",
      "Did I mention performance monitoring against baselines?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.4",
      "topic": "PM Responsibilities",
      "page": 29
    }
  },
  {
    "id": "itpm-u1-qa-018",
    "unit": 1,
    "question": "Distinguish between Soft/Qualitative and Hard/Quantitative skills of an IT Project Manager. Why is continuous learning vital?",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Contrast soft skills with hard quantitative methods. Emphasize domain understanding and continuous learning over pure coding ability.",
    "modelAnswer": "An effective IT Project Manager requires a balanced mastery of both soft and hard competencies:\n\n1. Soft / Qualitative Skills:\n\u2022 Interpersonal Leadership: Inspiring team members, establishing psychological safety, and fostering shared ownership.\n\u2022 Communication & Negotiation: Bridging technical and executive terminology; negotiating scope and resources with sponsors and vendors.\n\u2022 Trustworthiness & Problem Solving: Maintaining ethical transparency, managing interpersonal conflicts, and building stakeholder confidence.\n\n2. Hard / Quantitative Skills:\n\u2022 Goal & Deliverable Formulation: Decomposing high-level requirements into measurable work packages and deliverables.\n\u2022 Schedule & Budget Construction: Developing critical path schedules, budget baselines, and milestone networks.\n\u2022 Quantitative Control: Applying performance variance measurement across time, cost, quality, procurement, and risk.\n\nWhy Continuous Learning is Vital:\n\u2022 Technical specialization alone does NOT make an effective PM. Understanding and analyzing domain problems is far more critical than being the best programmer.\n\u2022 Because IT architectures, cloud platforms, and methodologies evolve at extreme speed, an IT PM must cultivate a willingness to learn continuously to remain competent.",
    "answerStructure": [
      "Section on Soft/Qualitative skills",
      "Section on Hard/Quantitative skills",
      "Dedicated explanation of domain problem analysis and continuous learning"
    ],
    "keywords": [
      "Soft skills",
      "Hard skills",
      "Quantitative control",
      "Leadership",
      "Negotiation",
      "Continuous learning",
      "Domain problems"
    ],
    "commonMistakes": "Asserting that a PM must be the lead coder or that technical skills are entirely unnecessary.",
    "selfCheckChecklist": [
      "Did I cover both soft and hard skills?",
      "Did I emphasize domain problem analysis over pure programming?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.4",
      "topic": "PM Skills",
      "page": 29
    }
  },
  {
    "id": "itpm-u1-qa-019",
    "unit": 1,
    "question": "Why do Project Manager skill requirements change across the project lifecycle?",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Explain how early phases demand HR acquisition, middle phases demand team management, and conflict management is needed throughout.",
    "modelAnswer": "The demands placed upon an IT Project Manager evolve dynamically as the project transitions through its lifecycle phases:\n\n1. Early Lifecycle (Conception & Planning):\n\u2022 Primary Need: Human-Resource Acquisition & Strategic Alignment.\n\u2022 Focus: Negotiating with functional managers to secure top talent, assembling core teams, aligning executive sponsors on scope, and drafting the charter.\n\n2. Mid Lifecycle (Execution & Monitoring):\n\u2022 Primary Need: Team Management & Variance Control.\n\u2022 Focus: Guiding technical execution, motivating developers, coaching through roadblocks, tracking progress against baselines, and steering corrective actions.\n\n3. Late Lifecycle (Termination):\n\u2022 Primary Need: Contract Closure & Administrative Finalization.\n\u2022 Focus: Securing formal client sign-off, transitioning deliverables to operations, releasing staff, and compiling lessons learned.\n\n4. Throughout ALL Phases (Persistent Need):\n\u2022 Conflict Management & Negotiation Capability: Disagreements over priorities, resources, architectural choices, and scope changes can erupt at any time.",
    "answerStructure": [
      "Phased breakdown: Early (HR acquisition), Mid (Team management), Late (Closure)",
      "Prominent callout that Conflict Management is required across all phases"
    ],
    "keywords": [
      "Lifecycle skill shift",
      "HR acquisition",
      "Team management",
      "Conflict management",
      "Negotiation",
      "Across all phases"
    ],
    "commonMistakes": "Thinking skill demands remain uniform from day 1 to project closure.",
    "selfCheckChecklist": [
      "Did I note HR acquisition is early?",
      "Did I note conflict management is needed throughout all phases?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.4",
      "topic": "Lifecycle Skills",
      "page": 30
    }
  },
  {
    "id": "itpm-u1-qa-020",
    "unit": 1,
    "question": "What are Project Triggers and why are they critical in project risk monitoring?",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 7,
    "examinerExpectation": "Define project triggers as early warning symptoms or threshold events prompting risk contingency action.",
    "modelAnswer": "In project risk monitoring, Project Triggers (also known as risk symptoms or warning indicators) are specific events, thresholds, or observable signals that indicate an identified risk is manifesting or about to occur.\n\nKey Characteristics & Function:\n1. Early Warning Mechanism: Triggers alert the project manager before a catastrophic failure occurs, providing time for corrective intervention.\n2. Examples in IT Projects:\n\u2022 A key developer taking repeated sick leave or updating their LinkedIn profile (trigger for key personnel loss).\n\u2022 Unresolved bugs increasing by 20% in two consecutive sprints (trigger for architectural instability).\n\u2022 Response latency on a microservice exceeding 500ms under 50% simulated load (trigger for scalability failure).\n\u2022 Late delivery of an external vendor API endpoint by more than 3 days (trigger for third-party schedule delay).\n3. Operational Action: When a trigger condition is met, the assigned risk owner immediately activates the pre-planned contingency plan.",
    "answerStructure": [
      "Clear definition of project trigger",
      "3-4 concrete IT examples",
      "Operational significance in activating contingency plans"
    ],
    "keywords": [
      "Project triggers",
      "Early warning indicators",
      "Symptoms",
      "Threshold events",
      "Contingency plans",
      "Risk owner"
    ],
    "commonMistakes": "Describing triggers as final project deliverables rather than early diagnostic indicators.",
    "selfCheckChecklist": [
      "Did I define triggers as early warning signs?",
      "Did I provide clear IT project examples?"
    ],
    "source": {
      "type": "course-book",
      "unit": 1,
      "section": "1.4",
      "topic": "Project Triggers",
      "page": 31
    }
  }
];
