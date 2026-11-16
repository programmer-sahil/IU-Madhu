import { MockExam } from "../../../../types";

export const unit6MockExams: MockExam[] = [
  {
    "id": "itpm-u6-mock-01",
    "title": "Unit 6 Comprehensive Exam 1",
    "subtitle": "PMBOK 47 Processes, PRINCE2 7-7-7 Architecture & Project Board Governance",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u6-s61-mcq-001",
      "itpm-u6-s61-mcq-002",
      "itpm-u6-s61-mcq-003",
      "itpm-u6-s61-mcq-004",
      "itpm-u6-s61-mcq-005",
      "itpm-u6-s61-mcq-006",
      "itpm-u6-s61-mcq-007",
      "itpm-u6-s61-mcq-008",
      "itpm-u6-s61-mcq-009",
      "itpm-u6-s61-mcq-010",
      "itpm-u6-s61-mcq-011",
      "itpm-u6-s61-mcq-012",
      "itpm-u6-s61-mcq-013",
      "itpm-u6-s61-mcq-014",
      "itpm-u6-s61-mcq-015",
      "itpm-u6-s61-mcq-016",
      "itpm-u6-s61-mcq-017",
      "itpm-u6-s61-mcq-018",
      "itpm-u6-s61-mcq-019",
      "itpm-u6-s61-mcq-020",
      "itpm-u6-s61-mcq-021",
      "itpm-u6-s61-mcq-022",
      "itpm-u6-s61-mcq-023",
      "itpm-u6-s61-mcq-024",
      "itpm-u6-s61-mcq-025",
      "itpm-u6-s61-mcq-026",
      "itpm-u6-s61-mcq-027",
      "itpm-u6-s61-mcq-028",
      "itpm-u6-s61-mcq-029",
      "itpm-u6-s61-mcq-030",
      "itpm-u6-s62-mcq-031",
      "itpm-u6-s62-mcq-032",
      "itpm-u6-s62-mcq-033",
      "itpm-u6-s62-mcq-034",
      "itpm-u6-s62-mcq-035",
      "itpm-u6-s62-mcq-036",
      "itpm-u6-s62-mcq-037",
      "itpm-u6-s62-mcq-038",
      "itpm-u6-s62-mcq-039",
      "itpm-u6-s62-mcq-040"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u6-m1-desc-01",
        "unit": 6,
        "question": "Explain the distribution of PMBOK 47 processes across its 5 Process Groups and 10 Knowledge Areas. Why does Planning contain over 50% of all processes? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "5 Process Groups and exact process counts: 2 - 24 - 8 - 11 - 2 = 47 processes",
          "10 Knowledge Areas enumeration",
          "Rationale for Planning containing 24 processes (>50%)"
        ],
        "modelAnswer": "The PMBOK Guide distributes exactly 47 processes across 5 Process Groups and 10 Knowledge Areas:\n- Initiating: 2 processes\n- Planning: 24 processes (over 50% of the entire framework)\n- Executing: 8 processes\n- Monitoring & Controlling: 11 processes\n- Closing: 2 processes\n(Total: 47 processes).\nThe 10 Knowledge Areas span Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, and Stakeholder Management.\nPlanning contains 24 processes because predictive project management emphasizes thorough upfront risk retirement, baseline establishment, and integrated planning before capital and developer resources are heavily expended in Execution.",
        "rubricItems": [
          {
            "point": "Stated exact process counts per group (2, 24, 8, 11, 2) summing to 47",
            "marksAllotted": 3
          },
          {
            "point": "Listed knowledge areas and explained why Planning contains >50% of processes",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Process numbers must be exact: 2 Initiating, 24 Planning, 8 Executing, 11 Monitoring & Controlling, 2 Closing."
      },
      {
        "id": "itpm-u6-m1-desc-02",
        "unit": 6,
        "question": "Differentiate Product Scope from Project Scope according to the PMBOK Guide. Provide an IT example for each. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Product Scope definition (features, functions, characteristics)",
          "Project Scope definition (work performed to deliver product scope)",
          "Concrete IT software example illustrating the boundary"
        ],
        "modelAnswer": "1. Product Scope: The features, technical capabilities, characteristics, and functions that characterize a product, service, or result. In an IT context, product scope includes database schema specifications, API endpoints, encryption standards, UI screen workflows, and system response latency.\n2. Project Scope: The work performed by the project team to deliver a product, service, or result with the specified product scope. In an IT context, project scope includes developer sprint planning, architectural spikes, writing unit tests, conducting code reviews, creating user manuals, and configuring CI/CD deployment pipelines.\nProduct scope defines WHAT the system is; project scope defines the WORK required to create it.",
        "rubricItems": [
          {
            "point": "Defined Product Scope accurately with an IT example",
            "marksAllotted": 3
          },
          {
            "point": "Defined Project Scope accurately with an IT example",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Ensure you clearly distinguish the end deliverable (product) from the effort to create it (project)."
      },
      {
        "id": "itpm-u6-m1-desc-03",
        "unit": 6,
        "question": "Detail the composition and responsibilities of the PRINCE2 Project Board. How does Manage by Exception govern the Boards relationship with the Project Manager? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Three Project Board roles: Executive, Senior User, Senior Supplier",
          "Principle of Manage by Exception",
          "Six project tolerance variables (Time, Cost, Quality, Scope, Risk, Benefits)",
          "Escalation via Exception Report"
        ],
        "modelAnswer": "The PRINCE2 Project Board represents three primary stakeholder interests:\n1. Executive: Appointed by corporate management, owns the business case, provides funding, and holds ultimate accountability.\n2. Senior User: Represents the interests of users who will operate the solution, specifying requirements and ensuring benefit realization.\n3. Senior Supplier: Represents developers and technical specialists providing resources and skills to build the products.\nUnder Manage by Exception, the Project Board delegates day-to-day management to the Project Manager by setting quantitative tolerances across six variables: Time, Cost, Quality, Scope, Risk, and Benefits. As long as the project remains within approved tolerances, the PM operates autonomously without micromanagement. If a tolerance breach is forecast, the PM must escalate immediately to the Board via an Exception Report.",
        "rubricItems": [
          {
            "point": "Defined all 3 Project Board roles (Executive, Senior User, Senior Supplier)",
            "marksAllotted": 3
          },
          {
            "point": "Explained Manage by Exception, 6 tolerance variables, and Exception Report workflow",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "The Project Manager is NOT a voting member of the Project Board; the PM reports to the Board."
      },
      {
        "id": "itpm-u6-m1-desc-04",
        "unit": 6,
        "question": "Explain the 7-7-7 architecture of the PRINCE2 framework (7 Principles, 7 Themes, 7 Processes). [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "7 Principles (universal obligations)",
          "7 Themes (aspects of management addressed continuously)",
          "7 Processes (lifecycle management flow)"
        ],
        "modelAnswer": "PRINCE2 is structured around a rigorous 7-7-7 architecture:\n1. 7 Principles (universal, non-negotiable obligations): Continued business justification, Learn from experience, Defined roles and responsibilities, Manage by stages, Manage by exception, Focus on products, Tailor to suit the project environment.\n2. 7 Themes (aspects of project management that must be addressed continuously): Business Case, Organization, Quality, Plans, Risk, Change, Progress.\n3. 7 Processes (lifecycle stages directing management from conception to closure): Starting up a Project, Directing a Project, Initiating a Project, Controlling a Stage, Managing Product Delivery, Managing a Stage Boundary, Closing a Project.",
        "rubricItems": [
          {
            "point": "Explained role and key examples of the 7 Principles",
            "marksAllotted": 2
          },
          {
            "point": "Explained role and key examples of the 7 Themes",
            "marksAllotted": 2
          },
          {
            "point": "Explained role and key examples of the 7 Processes",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Emphasize that the 7 principles are universal; if any principle is ignored, it is not a PRINCE2 project."
      },
      {
        "id": "itpm-u6-m1-desc-05",
        "unit": 6,
        "question": "Compare the PMBOK Guide and PRINCE2 frameworks across structural philosophy, role definitions, and certification focus. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "PMBOK philosophy (knowledge-based descriptive body of knowledge)",
          "PRINCE2 philosophy (process-based prescriptive methodology)",
          "Role governance: PM-centric (PMBOK) vs Board-governed (PRINCE2)",
          "Product vs Process focus"
        ],
        "modelAnswer": "1. Philosophy & Nature: PMBOK is a descriptive Body of Knowledge published by PMI (US), outlining best practice knowledge areas and process groups that project teams tailor. PRINCE2 is a prescriptive, structured methodology developed for the UK government, providing step-by-step processes and mandatory management products.\n2. Role Governance: PMBOK is PM-centric, centering decision authority on the Project Manager. PRINCE2 is Project Board-centric, distributing strategic governance among the Executive, Senior User, and Senior Supplier, with the PM managing day-to-day execution within tolerances.\n3. Core Focus: PMBOK emphasizes tools and techniques (ITTOs) and behavioral competencies; PRINCE2 emphasizes continuous business justification, stage-gate approvals, and product-based planning.",
        "rubricItems": [
          {
            "point": "Contrasted descriptive knowledge guide (PMBOK) with prescriptive methodology (PRINCE2)",
            "marksAllotted": 3
          },
          {
            "point": "Contrasted PM-centric governance with Project Board / Manage by Exception governance",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Highlight that PMBOK and PRINCE2 are complementary: PRINCE2 provides governance structure, while PMBOK supplies tools and techniques."
      },
      {
        "id": "itpm-u6-m1-desc-06",
        "unit": 6,
        "question": "Integrated Case Study: Enterprise Core Infrastructure Transformation at GlobalLogistics Corp. GlobalLogistics Corp operates in 40 countries and must modernize its worldwide warehouse management system. Multiple international contractors, public stakeholders, and high financial risk require transparent governance. The CIO mandates adopting a hybrid model combining PRINCE2 executive governance with PMBOK planning and risk controls. Formulate a complete governance strategy covering Project Board establishment, Manage by Exception tolerances, PMBOK knowledge area integration, and stage-gate control. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "PRINCE2 Project Board Structure & Stakeholder Representation (5 marks)",
          "Manage by Exception Governance & 6 Tolerance Limits (5 marks)",
          "PMBOK Planning, Risk & Procurement Integration (5 marks)",
          "Stage Boundary Reviews & Continued Business Justification (5 marks)"
        ],
        "modelAnswer": "1. PRINCE2 Project Board Governance: Establish a dedicated Project Board to direct the project:\n- Executive: Corporate VP of Logistics, owning the business case and funding.\n- Senior User: Committee of regional warehouse directors, ensuring warehouse operational usability and efficiency.\n- Senior Supplier: Technical executives from the lead cloud infrastructure contractor and software vendor, responsible for technical quality and architectural viability.\nThe Project Manager reports to the Board and does not hold a voting seat.\n\n2. Manage by Exception & Tolerances: Define quantitative tolerances across all 6 PRINCE2 dimensions:\n- Time: +/- 2 weeks per 3-month management stage.\n- Cost: +/- 5% of stage budget (up to ,000 variance limit).\n- Quality: 100% automated regression test pass rate with zero P1/P2 defects.\n- Scope: Mandatory warehouse dispatch workflows non-negotiable; auxiliary analytics negotiable.\n- Risk: Residual risk score must not exceed threshold; single threat exposure > ,000 escalates to Board.\n- Benefits: Projected warehouse throughput efficiency must increase by at least 15%.\nIf any limit is forecast to breach, the PM immediately halts execution and submits an Exception Report with alternative options.\n\n3. PMBOK Planning & Controls: Within approved tolerances, the PM executes PMBOK planning processes: Build an integrated WBS, map Critical Path dependencies, enforce EVM cost tracking (measuring CV, SV, CPI, SPI), and manage multi-vendor contracts using PMBOK Procurement Management processes.\n\n4. Stage Boundary Reviews & Business Justification: Divide the multi-year program into 5 distinct management stages. At each stage boundary, execute the Managing a Stage Boundary process: Re-evaluate the Business Case to confirm continued justification, review lessons learned, update project risk registers, and submit an End Stage Report. The Project Board must formally approve proceeding before funds are authorized for the next stage.",
        "rubricItems": [
          {
            "point": "Established clear PRINCE2 Project Board with Executive, Senior User, and Senior Supplier",
            "marksAllotted": 5
          },
          {
            "point": "Defined operational tolerances across all 6 PRINCE2 dimensions with escalation thresholds",
            "marksAllotted": 5
          },
          {
            "point": "Integrated PMBOK planning, EVM controlling, and procurement techniques into stage execution",
            "marksAllotted": 5
          },
          {
            "point": "Designed robust stage-gate approval mechanism maintaining continued business justification",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Demonstrate how combining PRINCE2s governance oversight with PMBOKs execution tools provides end-to-end control."
      }
    ]
  },
  {
    "id": "itpm-u6-mock-02",
    "title": "Unit 6 Comprehensive Exam 2",
    "subtitle": "Multi-Project Management, PMO Typologies, Scaled Agile (SoS, LeSS, SAFe) & Method Selection",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u6-s62-mcq-041",
      "itpm-u6-s62-mcq-042",
      "itpm-u6-s62-mcq-043",
      "itpm-u6-s62-mcq-044",
      "itpm-u6-s62-mcq-045",
      "itpm-u6-s62-mcq-046",
      "itpm-u6-s62-mcq-047",
      "itpm-u6-s62-mcq-048",
      "itpm-u6-s62-mcq-049",
      "itpm-u6-s62-mcq-050",
      "itpm-u6-s62-mcq-051",
      "itpm-u6-s62-mcq-052",
      "itpm-u6-s62-mcq-053",
      "itpm-u6-s62-mcq-054",
      "itpm-u6-s62-mcq-055",
      "itpm-u6-s62-mcq-056",
      "itpm-u6-s62-mcq-057",
      "itpm-u6-s62-mcq-058",
      "itpm-u6-s62-mcq-059",
      "itpm-u6-s62-mcq-060",
      "itpm-u6-s63-mcq-061",
      "itpm-u6-s63-mcq-062",
      "itpm-u6-s63-mcq-063",
      "itpm-u6-s63-mcq-064",
      "itpm-u6-s63-mcq-065",
      "itpm-u6-s63-mcq-066",
      "itpm-u6-s63-mcq-067",
      "itpm-u6-s63-mcq-068",
      "itpm-u6-s63-mcq-069",
      "itpm-u6-s63-mcq-070",
      "itpm-u6-s63-mcq-071",
      "itpm-u6-s63-mcq-072",
      "itpm-u6-s63-mcq-073",
      "itpm-u6-s63-mcq-074",
      "itpm-u6-s63-mcq-075",
      "itpm-u6-s63-mcq-076",
      "itpm-u6-s63-mcq-077",
      "itpm-u6-s63-mcq-078",
      "itpm-u6-s63-mcq-079",
      "itpm-u6-s63-mcq-080"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u6-m2-desc-01",
        "unit": 6,
        "question": "Deconstruct the multi-project hierarchy (Portfolio, Program, Project). Contrast their strategic focus, authority, and definition of success. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Portfolio tier (strategic alignment, capital allocation, doing right work)",
          "Program tier (collective benefits realization, inter-project coordination)",
          "Project tier (delivering outputs/deliverables within constraints, doing work right)",
          "Contrasting success definitions"
        ],
        "modelAnswer": "The multi-project management hierarchy operates across three distinct organizational tiers:\n1. Portfolio: Focuses on doing the right work. Aggregates programs and projects to align with high-level corporate strategies and optimize resource allocation. Success is measured by overall business value, ROI, and strategic goal achievement.\n2. Program: Focuses on inter-project coordination to capture collective capabilities and synergies that cannot be achieved by managing projects individually. Success is measured by benefit realization and improved organizational capability.\n3. Project: Focuses on doing the work right. Executes specific temporary endeavors to create defined deliverables within scope, schedule, and cost constraints. Success is measured by deliverable quality, time adherence, and budget control.",
        "rubricItems": [
          {
            "point": "Accurately defined and contrasted Portfolio, Program, and Project",
            "marksAllotted": 3
          },
          {
            "point": "Contrasted strategic focus (right work vs work right) and success definitions",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Remember the core distinction: Portfolios align with strategy; Programs realize benefits; Projects deliver outputs."
      },
      {
        "id": "itpm-u6-m2-desc-02",
        "unit": 6,
        "question": "Explain the three structural typologies of the Project Management Office (Supportive, Controlling, Directive) and their degree of organizational control. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Supportive PMO (Low control, advisory, templates, training)",
          "Controlling PMO (Moderate control, compliance, audits, frameworks)",
          "Directive PMO (High control, directly manages projects, assigns PMs)"
        ],
        "modelAnswer": "The PMBOK Guide classifies Project Management Offices (PMOs) into three structural typologies based on their degree of control:\n1. Supportive PMO: Exercises LOW control. Acts as a consultative resource, providing project templates, best practice guidelines, training, and historical documentation archives. Project managers operate independently without mandatory oversight.\n2. Controlling PMO: Exercises MODERATE control. Mandates compliance with organizational project governance frameworks, requires standard reporting templates, enforces EVM tracking, and conducts periodic compliance audits.\n3. Directive PMO: Exercises HIGH control. Directly manages all projects within its domain. Project managers report directly to the PMO, and the PMO directly assigns resources, controls budgets, and oversees day-to-day project operations.",
        "rubricItems": [
          {
            "point": "All 3 PMO models defined with exact degree of control (Low, Moderate, High)",
            "marksAllotted": 3
          },
          {
            "point": "Explained operational function and authority of each PMO type",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Control levels are exact: Supportive = Low; Controlling = Moderate; Directive = High."
      },
      {
        "id": "itpm-u6-m2-desc-03",
        "unit": 6,
        "question": "Explain the operational mechanics of Scrum of Scrums (SoS). What team sizes are recommended, and how are ambassadors utilized? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Scrum of Scrums definition and purpose",
          "Team size guidelines (groups of agile teams with < 12 individuals each)",
          "Ambassador selection and meeting cadence",
          "Focus on inter-team coordination and dependency impediments"
        ],
        "modelAnswer": "Scrum of Scrums (SoS) is an agile scaling technique used to coordinate multiple interrelated Scrum teams working on a common product. The project is divided into agile teams of less than 12 individuals each to maintain agility and rapid communication.\nOperational Mechanics:\n1. Ambassador Election: Each individual Scrum team elects an ambassador (typically a developer or Scrum Master with deep technical understanding of current work) to participate in the SoS meeting.\n2. Meeting Cadence: The Scrum of Scrums meets at regular intervals (typically 2 to 3 times per week, or daily).\n3. Four Core Questions: Rather than a mere status report, ambassadors address: What has your team done since last meeting that affects other teams? What will your team do that may impact others? What impediments is your team facing that require help from another team? What dependencies are blocking progress?",
        "rubricItems": [
          {
            "point": "Stated team size guidelines (< 12 individuals per team) and purpose of SoS",
            "marksAllotted": 2
          },
          {
            "point": "Explained ambassador role and election",
            "marksAllotted": 2
          },
          {
            "point": "Detailed the focus on cross-team dependencies and inter-team impediment removal",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Reference Section 6.4 (p. 134): teams have less than 12 individuals and elect an ambassador."
      },
      {
        "id": "itpm-u6-m2-desc-04",
        "unit": 6,
        "question": "Explain Large-Scale Scrum (LeSS). Detail its More with Less principle and its single-source scaling rules. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "LeSS core scaling philosophy (single Scrum scaling to multiple teams)",
          "Single-source rules: ONE Product Owner, ONE Product Backlog, ONE Product, ONE Sprint",
          "More with Less principle (more responsibility with less rules, more customer focus with less artifacts)"
        ],
        "modelAnswer": "Large-scale Scrum (LeSS) scales agile by treating large projects as a single unified Scrum rather than creating complex hierarchical layers. Regardless of how many teams are involved, LeSS enforces strict single-source rules:\n- Exactly ONE Product Owner\n- Exactly ONE Product Backlog\n- Exactly ONE integrated deliverable\n- Exactly ONE common Sprint cadence\nCore Principle: More with Less:\nLeSS advocates more responsibility with less rules, more customer-focus with less artifacts, more team ownership of processes, and more meaningful work by having less defined processes. LeSS rejects adding specialized management layers, coordinators, or auxiliary architects, requiring deep organizational descaling where autonomous feature teams coordinate directly with the single Product Owner.",
        "rubricItems": [
          {
            "point": "Stated LeSS single-source rules (1 PO, 1 Backlog, 1 Product, 1 Sprint)",
            "marksAllotted": 3
          },
          {
            "point": "Explained More with Less principle and organizational descaling philosophy",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Use exact course-book phrasing from page 136: more responsibility with less rules, more customer-focus with less artifacts."
      },
      {
        "id": "itpm-u6-m2-desc-05",
        "unit": 6,
        "question": "Detail the Scaled Agile Framework (SAFe 4.6). Explain its 5 core competencies and how it replaces traditional phase-based development with a flow-based approach. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "SAFe 4.6 five core competencies (lean-agile leadership, team/technical agility, DevOps/release on demand, business solutions/lean systems, lean portfolio management)",
          "Replacing traditional phases with flow-based cadence",
          "Multi-tier alignment: Portfolio, Program, Team levels"
        ],
        "modelAnswer": "SAFe (Scaled Agile Framework) scales agile across large enterprises by combining agile development, systems thinking, and Lean product development.\nSAFe 4.6 defines five core competencies required for lean enterprises:\n1. Lean-Agile Leadership\n2. Team and Technical Agility\n3. DevOps and Release on Demand\n4. Business Solutions and Lean Systems Engineering\n5. Lean Portfolio Management\nReplacing Phases with Flow: SAFe replaces traditional sequential phase-based execution with a synchronized, flow-based cadence centered around the Agile Release Train (ART). Instead of massive upfront design, teams develop detailed plans for the near term and less detailed plans for the longer term (rolling-wave planning). At the portfolio level, SAFe applies lean prioritization; at the program level, it aligns multiple teams to a common vision; and at the team level, it utilizes Scrum and Kanban.",
        "rubricItems": [
          {
            "point": "Listed SAFe 4.6 core competencies accurately",
            "marksAllotted": 3
          },
          {
            "point": "Explained replacement of phases with synchronized flow-based cadence across portfolio/program/team",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Highlight that SAFe combines lightweight agile team flexibility with structured enterprise coordination."
      },
      {
        "id": "itpm-u6-m2-desc-06",
        "unit": 6,
        "question": "Integrated Case Study: Methodology Selection for a 400-Developer Digital Banking Program at Continental Financial. Continental Financial is undertaking an enterprise-wide modernization program comprising mobile banking, core ledger replacement, AI fraud detection, and regulatory reporting across 400 engineers. Organizational culture is traditionally risk-averse and bureaucratic, yet market competition demands fast release cycles. Multiple senior stakeholders advocate competing approaches: PMBOK, PRINCE2, Scrum of Scrums, LeSS, and SAFe. Formulate a comprehensive methodology evaluation and selection strategy based on Section 6.5 criteria (organizational culture, project size, team distribution, regulatory constraints, and clarity of requirements). [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Organizational Culture & Governance Alignment (5 marks)",
          "Evaluation of Candidate Frameworks (PMBOK, PRINCE2, LeSS, SAFe) (5 marks)",
          "Recommended Hybrid Scaling Architecture (5 marks)",
          "PMO Oversight, Change Management & Transition Roadmap (5 marks)"
        ],
        "modelAnswer": "1. Organizational Culture & Governance Evaluation: Based on Section 6.5 criteria, methodology selection must align with organizational culture, project scale, and constraints. Continental Financial has a hierarchical, risk-averse culture operating under strict financial regulations. A pure radical agile descaling model like LeSS would trigger severe cultural resistance because executive stakeholders demand explicit budget baselines, stage approvals, and formal compliance documentation.\n\n2. Evaluation of Candidate Frameworks:\n- Pure PMBOK / PRINCE2: Provides excellent governance and risk controls but fails to deliver rapid digital innovation across 400 developers.\n- Scrum of Scrums: Effective for 2 to 4 small teams, but lacks the enterprise portfolio governance needed for 400 developers.\n- LeSS: Promotes radical simplicity (1 PO, 1 Backlog), but having a single PO oversee 400 developers across fraud detection, mobile apps, and central ledgers is operationally infeasible.\n- SAFe: Fits enterprise banking hierarchies perfectly by providing multi-tiered governance (Portfolio, Program, Team) and aligning enterprise architects with business owners while allowing teams to execute Scrum.\n\n3. Recommended Hybrid Architecture:\n- Executive Tier (Portfolio Governance): Adopt PRINCE2 / PMBOK stage-gate governance and Lean Portfolio Management. A Project Board (Executive, Senior User, Senior Supplier) authorizes capital and reviews stage tolerances.\n- Program Tier (Scaling Coordination): Deploy Scaled Agile Framework (SAFe) Agile Release Trains (ARTs) aligned along business value streams (e.g., ART 1: Mobile Retail; ART 2: Core Ledger; ART 3: AI Fraud Detection). Synchronized 10-week Program Increments (PIs) align dependencies across teams.\n- Team Tier: Individual cross-functional feature teams (5 to 9 developers) execute 2-week Scrum sprints, enforcing a strict Definition of Done and automated CI/CD testing.\n\n4. PMO Oversight & Transition Roadmap: Establish a Controlling PMO to provide standardized tooling, manage cross-ART dependencies, and maintain the EVM Performance Measurement Baseline. Execute a phased 18-month transition: Train executives in Lean-Agile leadership first, pilot SAFe on a single value stream (Mobile Retail), and scale to legacy ledger replacement only after agile tooling and automated testing maturity are established.",
        "rubricItems": [
          {
            "point": "Evaluated organizational culture, project scale, and regulatory constraints using Section 6.5 criteria",
            "marksAllotted": 5
          },
          {
            "point": "Systematically analyzed trade-offs of PMBOK, PRINCE2, SoS, LeSS, and SAFe",
            "marksAllotted": 5
          },
          {
            "point": "Designed a coherent, realistic hybrid architecture blending executive governance with scaled agile execution",
            "marksAllotted": 5
          },
          {
            "point": "Formulated PMO governance and phased transformation roadmap managing organizational change",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Demonstrate nuanced synthesis: show why pure models fail in large banks and why a hybrid tailored approach is academically superior."
      }
    ]
  }
];
