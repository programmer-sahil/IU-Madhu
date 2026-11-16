import { MockExam } from "../../../../types";

export const unit1MockExams: MockExam[] = [
  {
    "id": "itpm-u1-mock-01",
    "title": "Unit 1 Comprehensive Exam 1",
    "subtitle": "Characteristics, Constraints, Roles & Risks of IT Projects",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u1-s1-mcq-001",
      "itpm-u1-s1-mcq-002",
      "itpm-u1-s1-mcq-003",
      "itpm-u1-s1-mcq-004",
      "itpm-u1-s1-mcq-005",
      "itpm-u1-s1-mcq-006",
      "itpm-u1-s1-mcq-007",
      "itpm-u1-s1-mcq-008",
      "itpm-u1-s1-mcq-009",
      "itpm-u1-s1-mcq-010",
      "itpm-u1-s1-mcq-011",
      "itpm-u1-s1-mcq-012",
      "itpm-u1-s1-mcq-013",
      "itpm-u1-s1-mcq-014",
      "itpm-u1-s1-mcq-015",
      "itpm-u1-s1-mcq-016",
      "itpm-u1-s1-mcq-017",
      "itpm-u1-s1-mcq-018",
      "itpm-u1-s2-mcq-001",
      "itpm-u1-s2-mcq-002",
      "itpm-u1-s2-mcq-003",
      "itpm-u1-s2-mcq-004",
      "itpm-u1-s2-mcq-005",
      "itpm-u1-s2-mcq-006",
      "itpm-u1-s2-mcq-007",
      "itpm-u1-s2-mcq-008",
      "itpm-u1-s2-mcq-009",
      "itpm-u1-s2-mcq-010",
      "itpm-u1-s2-mcq-011",
      "itpm-u1-s2-mcq-012",
      "itpm-u1-s2-mcq-013",
      "itpm-u1-s2-mcq-014",
      "itpm-u1-s2-mcq-015",
      "itpm-u1-s2-mcq-016",
      "itpm-u1-s2-mcq-017",
      "itpm-u1-s2-mcq-018",
      "itpm-u1-s2-mcq-019",
      "itpm-u1-s2-mcq-020",
      "itpm-u1-s2-mcq-021",
      "itpm-u1-s2-mcq-022"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u1-m1-desc-01",
        "unit": 1,
        "question": "Differentiate IT projects from continuous business operations across four dimensions. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Temporary duration vs ongoing continuation",
          "Unique deliverable vs standard repetition",
          "Cross-functional temporary team vs departmental hierarchy",
          "Uncertainty & risk profile"
        ],
        "modelAnswer": "IT projects are temporary endeavors with defined start and end dates aimed at creating a unique product, service, or result. They are staffed by cross-functional transient teams and carry significant technological and requirement uncertainty. In contrast, business operations are continuous, repetitive, ongoing functions performed by permanent departmental staff to sustain organizational stability with low, predictable variance.",
        "rubricItems": [
          {
            "point": "Accurately differentiated temporary vs continuous duration",
            "marksAllotted": 2
          },
          {
            "point": "Contrasted unique deliverable with repetitive operations",
            "marksAllotted": 2
          },
          {
            "point": "Contrasted cross-functional team and uncertainty profiles",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Use exact course-book keywords: temporary, unique deliverable, continuous, repetitive."
      },
      {
        "id": "itpm-u1-m1-desc-02",
        "unit": 1,
        "question": "Explain the three levels of organizational information needs served by IT projects. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Operational Tier (transactional, high granularity)",
          "Management Tier (tactical, departmental aggregation)",
          "Executive Tier (strategic synthesis, decision support)"
        ],
        "modelAnswer": "IT projects serve three levels of organizational information needs:\n1. Operational Tier: Focuses on day-to-day transactional processing, high granularity data, and immediate operational execution.\n2. Management Tier: Provides tactical monitoring, aggregation of department metrics, exception reporting, and monthly performance tracking.\n3. Executive Tier: Synthesizes long-term strategic indicators, trend forecasts, and competitive business intelligence to support enterprise-level decision making.",
        "rubricItems": [
          {
            "point": "Operational tier correctly characterized with transactional detail",
            "marksAllotted": 2
          },
          {
            "point": "Management tier explained with tactical monitoring and aggregation",
            "marksAllotted": 2
          },
          {
            "point": "Executive tier explained with strategic synthesis and decision support",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Clearly separate granular operational data from aggregated strategic knowledge."
      },
      {
        "id": "itpm-u1-m1-desc-03",
        "unit": 1,
        "question": "Discuss the Extended Project Constraints and contrast them with the classical Triple Constraint. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Triple Constraint definition (Scope, Time, Cost)",
          "Extended constraints dimensions (Quality, Risk, Customer Satisfaction, Strategic Value)",
          "Why Triple Constraint alone is insufficient in IT"
        ],
        "modelAnswer": "The classical Triple Constraint focuses strictly on Scope, Time, and Cost. In modern IT environments, this view is insufficient because projects can finish on time and within budget while still failing if software quality is deficient, cybersecurity is compromised, or users reject the system. Extended constraints incorporate Quality, Risk Exposure, Resource Availability, Customer Satisfaction, and realized Strategic Business Value.",
        "rubricItems": [
          {
            "point": "Defined classical Triple Constraint accurately",
            "marksAllotted": 2
          },
          {
            "point": "Identified extended constraints (Quality, Risk, Satisfaction, Value)",
            "marksAllotted": 2
          },
          {
            "point": "Explained why on-time/on-budget delivery can still fail in IT",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Emphasize that delivering a working application that fails user adoption constitutes project failure."
      },
      {
        "id": "itpm-u1-m1-desc-04",
        "unit": 1,
        "question": "Analyze the four primary roles of an IT Project Manager throughout the project lifecycle. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Initiator Role (clarifying goals, charter, early stakeholders)",
          "Planner Role (WBS decomposition, estimation, schedule baselines)",
          "Implementer Role (resource mobilization, team leadership, execution)",
          "Controller Role (performance measurement, variance control, risk response)"
        ],
        "modelAnswer": "An IT Project Manager executes four core lifecycle roles:\n1. Initiator: Clarifies strategic business objectives, identifies primary stakeholders, and establishes the project charter.\n2. Planner: Decomposes scope into work packages, develops cost and schedule baselines, and prepares risk management plans.\n3. Implementer: Mobilizes resources, guides developer teams, facilitates cross-functional communication, and removes blockers.\n4. Controller: Measures earned value progress, evaluates variances, manages change requests, and triggers corrective responses.",
        "rubricItems": [
          {
            "point": "Initiator and Planner roles defined with lifecycle deliverables",
            "marksAllotted": 3
          },
          {
            "point": "Implementer and Controller roles defined with monitoring mechanisms",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Connect each PM role directly to its corresponding lifecycle phase."
      },
      {
        "id": "itpm-u1-m1-desc-05",
        "unit": 1,
        "question": "Explain the primary technical, operational, and environmental risks inherent to IT projects and the importance of early risk identification. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Technical risks (architecture, unproven tech, integration)",
          "Operational risks (team turnover, user adoption, training)",
          "Environmental risks (regulatory shifts, vendor dependency)",
          "Economic value of early risk detection"
        ],
        "modelAnswer": "IT projects face distinct categories of risk:\n1. Technical Risks: Evolving architectural frameworks, unproven technologies, integration failures with legacy databases, and security vulnerabilities.\n2. Operational Risks: Loss of key engineering personnel, inadequate user involvement, and lack of training.\n3. Environmental Risks: Changing legal regulations and third-party vendor lock-in.\nEarly risk identification is critical because resolving defects or architectural misalignment during initiation or planning costs a fraction of fixing defects post-deployment.",
        "rubricItems": [
          {
            "point": "Covered technical, operational, and environmental risk categories",
            "marksAllotted": 3
          },
          {
            "point": "Explained economic necessity of early risk discovery",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Mention the exponential cost escalation of fixing defects late in the lifecycle."
      },
      {
        "id": "itpm-u1-m1-desc-06",
        "unit": 1,
        "question": "Case Study: Urgent Mobile Banking Transformation at FinBank AG. FinBank AG must launch a new cloud-native mobile banking application within 9 months under evolving regulatory standards, high concurrency requirements, and unproven microservices. Formulate a comprehensive governance, constraint prioritization, risk management, and PM leadership strategy. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Governance Framework & Stakeholder Engagement (5 marks)",
          "Constraint Prioritization & Scope Boundaries (5 marks)",
          "Proactive Risk Management & Early Warning Triggers (5 marks)",
          "IT Project Manager Leadership & Lifecycle Control (5 marks)"
        ],
        "modelAnswer": "1. Governance Framework & Stakeholder Engagement: Establish a Project Steering Committee comprising Executive Sponsors, Chief Compliance Officer, Security Head, and Lead Architect. Implement bi-weekly governance gates with clear decision escalation pathways to address regulatory ambiguities rapidly.\n\n2. Constraint Prioritization & Scope Boundaries: Apply dynamic constraint prioritization: Security, Regulatory Compliance, and Transaction Integrity are fixed non-negotiable constraints. Budget and Schedule are managed with agile prioritization, ensuring an MVP launches within 9 months while non-critical features are deferred.\n\n3. Proactive Risk Management & Early Warning Triggers: Build a dynamic Risk Register addressing cloud latency, third-party API dependencies, and security audit delays. Define quantitative Project Triggers (e.g., API response latency exceeding 300ms under 50% simulated load, or unresolved compliance findings 60 days before launch) that immediately activate pre-planned contingency plans.\n\n4. PM Leadership & Lifecycle Control: The PM must operate across all 4 roles: As Initiator, formalize security boundaries in the charter; as Planner, establish modular work packages with clear completion criteria; as Implementer, foster daily collaborative problem-solving; and as Controller, continuously monitor EVM schedule and cost indicators while tracking risk trigger manifestations.",
        "rubricItems": [
          {
            "point": "Established clear steering governance with compliance and architectural stakeholders",
            "marksAllotted": 5
          },
          {
            "point": "Classified constraints realistically for the financial regulatory environment",
            "marksAllotted": 5
          },
          {
            "point": "Designed actionable risk register with specific measurable project triggers",
            "marksAllotted": 5
          },
          {
            "point": "Demonstrated holistic application of all four PM lifecycle roles",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "Ground your answer in specific financial IT domain realities: regulatory compliance, transaction security, and latency."
      }
    ]
  },
  {
    "id": "itpm-u1-mock-02",
    "title": "Unit 1 Comprehensive Exam 2",
    "subtitle": "Software Invisibility, Lifecycle Phases, Governance & Risk Triggers",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u1-s2-mcq-013",
      "itpm-u1-s2-mcq-014",
      "itpm-u1-s2-mcq-015",
      "itpm-u1-s2-mcq-016",
      "itpm-u1-s2-mcq-017",
      "itpm-u1-s2-mcq-018",
      "itpm-u1-s2-mcq-019",
      "itpm-u1-s2-mcq-020",
      "itpm-u1-s2-mcq-021",
      "itpm-u1-s2-mcq-022",
      "itpm-u1-s3-mcq-001",
      "itpm-u1-s3-mcq-002",
      "itpm-u1-s3-mcq-003",
      "itpm-u1-s3-mcq-004",
      "itpm-u1-s3-mcq-005",
      "itpm-u1-s3-mcq-006",
      "itpm-u1-s3-mcq-007",
      "itpm-u1-s3-mcq-008",
      "itpm-u1-s3-mcq-009",
      "itpm-u1-s3-mcq-010",
      "itpm-u1-s3-mcq-011",
      "itpm-u1-s3-mcq-012",
      "itpm-u1-s3-mcq-013",
      "itpm-u1-s3-mcq-014",
      "itpm-u1-s3-mcq-015",
      "itpm-u1-s3-mcq-016",
      "itpm-u1-s3-mcq-017",
      "itpm-u1-s3-mcq-018",
      "itpm-u1-s4-mcq-001",
      "itpm-u1-s4-mcq-002",
      "itpm-u1-s4-mcq-003",
      "itpm-u1-s4-mcq-004",
      "itpm-u1-s4-mcq-005",
      "itpm-u1-s4-mcq-006",
      "itpm-u1-s4-mcq-007",
      "itpm-u1-s4-mcq-008",
      "itpm-u1-s4-mcq-009",
      "itpm-u1-s4-mcq-010",
      "itpm-u1-s4-mcq-011",
      "itpm-u1-s4-mcq-012"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u1-m2-desc-01",
        "unit": 1,
        "question": "Analyze why the invisibility and malleability of software make IT projects uniquely challenging compared to civil engineering projects. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Invisibility of software deliverables",
          "Malleability and the illusion of zero-cost change",
          "Rapid obsolescence of underlying technology stacks",
          "Impact on progress measurement"
        ],
        "modelAnswer": "Unlike civil engineering projects where physical progress (e.g. concrete poured, steel erected) is tangible and directly visible, software is intangible and invisible. Progress cannot be verified simply by observing code files. Furthermore, because software appears malleable (just text in an editor), stakeholders falsely assume changes can be made instantaneously at zero cost. Finally, the rapid obsolescence of IT technologies creates high volatility not present in traditional engineering.",
        "rubricItems": [
          {
            "point": "Explained software intangibility and difficulty of visual progress verification",
            "marksAllotted": 2
          },
          {
            "point": "Explained malleability illusion and uncontrolled scope change",
            "marksAllotted": 2
          },
          {
            "point": "Contrasted with traditional physical engineering disciplines",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Reference Fred Brooks classic characteristics of software engineering."
      },
      {
        "id": "itpm-u1-m2-desc-02",
        "unit": 1,
        "question": "Detail the four typical phases of an IT project lifecycle and identify the critical gate deliverable required to exit each phase. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Phase 1: Initiation / Definition (Project Charter)",
          "Phase 2: Planning (Project Management Plan / Baselines)",
          "Phase 3: Execution / Implementation (Working Deliverables / Tested Solution)",
          "Phase 4: Closeout (Handover Sign-off & Lessons Learned)"
        ],
        "modelAnswer": "The four typical lifecycle phases are:\n1. Initiation / Definition: Identifies business needs and feasibility. Gate deliverable: Approved Project Charter authorizing project existence.\n2. Planning: Defines scope, schedule, budget, and risk strategy. Gate deliverable: Integrated Project Management Plan with approved baselines.\n3. Execution / Implementation: Software is coded, integrated, and verified. Gate deliverable: Fully tested, deployable software solution.\n4. Closeout: Final handover to operations and post-project evaluation. Gate deliverable: Formal customer acceptance documentation and Disseminated Lessons Learned report.",
        "rubricItems": [
          {
            "point": "All four phases named in correct sequential order",
            "marksAllotted": 2
          },
          {
            "point": "Accurate gate deliverable identified for each phase boundary",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Ensure you state both the phase activities and the specific gate deliverable required to exit."
      },
      {
        "id": "itpm-u1-m2-desc-03",
        "unit": 1,
        "question": "Explain the concept of Project Triggers in risk management. Provide three concrete IT project warning signals and the required PM intervention. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Definition of Project Triggers (symptoms/thresholds)",
          "Example 1: Developer turnover / sickness (personnel risk)",
          "Example 2: Bug density increasing across sprints (architectural risk)",
          "Example 3: API latency threshold breach (performance risk)",
          "Immediate PM intervention upon trigger event"
        ],
        "modelAnswer": "Project Triggers (also known as risk symptoms or warning indicators) are specific events, thresholds, or observable signals indicating that an identified risk is manifesting or imminent.\nExamples in IT Projects:\n1. Unresolved critical defect count increasing by >20% across two iterations (trigger for architectural instability; PM intervention: pause new feature work for defect refactoring).\n2. External vendor API response latency exceeding 400ms under test loads (trigger for integration failure; PM intervention: engage vendor SLA escalation and activate fallback caching).\n3. Senior engineer updating resumes or taking unscheduled leave (trigger for key resource loss; PM intervention: initiate paired programming and knowledge transfer documentation).\nWhen a trigger manifests, the assigned risk owner immediately activates the contingency plan.",
        "rubricItems": [
          {
            "point": "Defined project trigger as measurable early-warning symptom",
            "marksAllotted": 2
          },
          {
            "point": "Provided three realistic IT-specific trigger examples with appropriate PM responses",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Differentiate a risk trigger (symptom) from the underlying risk event itself."
      },
      {
        "id": "itpm-u1-m2-desc-04",
        "unit": 1,
        "question": "Contrast the IT Project Managers role as a Facilitator and Leader versus an authoritative Commander in cross-functional software teams. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Authoritative Commander model (micromanagement, top-down instruction)",
          "Facilitator/Leader model (servant leadership, empowerment, removing blockers)",
          "Why facilitation succeeds with autonomous knowledge workers"
        ],
        "modelAnswer": "In traditional hierarchical environments, a project manager acted as an authoritative commander, issuing top-down task assignments, enforcing rigid schedules, and micromanaging execution. In modern IT environments, technical teams consist of highly specialized knowledge workers whose technical expertise often exceeds the PMs. The PM must therefore act as a Facilitator and Leader: articulating the project vision, aligning business priorities, shielding the team from external distractions, removing impediments, and creating psychological safety for technical innovation.",
        "rubricItems": [
          {
            "point": "Contrasted top-down commanding with servant leadership and facilitation",
            "marksAllotted": 3
          },
          {
            "point": "Explained why autonomous knowledge workers require empowerment rather than micromanagement",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Highlight that IT developers cannot be micromanaged effectively due to the creative and complex nature of programming."
      },
      {
        "id": "itpm-u1-m2-desc-05",
        "unit": 1,
        "question": "Discuss how Scope Creep emerges in IT projects and outline four proactive management techniques an IT project manager must establish during initiation and planning. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Mechanism of scope creep (informal requests, gold plating, vague requirements)",
          "Technique 1: Formal Change Control Board (CCB) process",
          "Technique 2: Deliverable-oriented WBS with 100% Rule",
          "Technique 3: Prioritization framework (MoSCoW)",
          "Technique 4: Clear Definition of Done and signed scope baseline"
        ],
        "modelAnswer": "Scope creep refers to the uncontrolled, incremental expansion of project scope without corresponding adjustments to time, cost, and resources. It emerges when developers accept informal client requests, engage in developer gold-plating, or when initial requirements are vague.\nProactive Management Techniques:\n1. Establish a Formal Change Control Process: Require all scope changes to be submitted via written change requests evaluated by a Change Control Board (CCB) for schedule and cost impact.\n2. Rigorous WBS Construction: Enforce the 100% Rule so that any work not in the WBS is formally out of scope.\n3. Backlog Prioritization: Utilize MoSCoW prioritization to trade off new requests against lower-priority existing features.\n4. Written Scope Sign-off: Secure explicit stakeholder sign-off on the scope baseline and acceptance criteria prior to execution.",
        "rubricItems": [
          {
            "point": "Defined scope creep and identified root causes (informal requests, vagueness)",
            "marksAllotted": 2
          },
          {
            "point": "Detailed four concrete, proactive scope management mechanisms",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Emphasize that managing change is not about rejecting change, but controlling its impact on time and cost."
      },
      {
        "id": "itpm-u1-m2-desc-06",
        "unit": 1,
        "question": "Integrated Case Study: Legacy Hospital Information System (HIS) Modernization. HealthNet operates 5 regional hospitals providing 24/7 patient care. Its 15-year-old monolithic HIS must be replaced with a modern microservices architecture under strict patient privacy regulations (GDPR/HIPAA), zero downtime tolerance, and skeptical clinical staff. Formulate a comprehensive project charter, stakeholder alignment, operational continuity, and risk governance strategy. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Project Charter & High-Level Scope Boundaries (5 marks)",
          "Clinical Stakeholder Alignment & Change Management (5 marks)",
          "Zero-Downtime Operational Continuity & Migration Architecture (5 marks)",
          "Regulatory Compliance & Incident Risk Governance (5 marks)"
        ],
        "modelAnswer": "1. Project Charter & Scope Boundaries: Formalize the project charter defining explicit boundaries: Core electronic health record (EHR) migration, lab integration, and pharmacy dispensing are in scope; peripheral administrative modules are deferred. Establish clear success criteria: Zero data loss, sub-second query latency for emergency departments, and full regulatory certification.\n\n2. Clinical Stakeholder Alignment: Doctors and nurses are key high-power/high-interest stakeholders who resist disruptions. Form a Clinical Advisory Panel of senior physicians and head nurses to co-design user interfaces. Implement phased training with clinical champions in each hospital to drive adoption rather than imposing IT mandates.\n\n3. Zero-Downtime Operational Continuity: A big-bang deployment in a 24/7 hospital is an unacceptable life-safety risk. Execute a phased Strangler Fig migration: Route traffic through an API gateway, migrating non-critical services (appointment scheduling) first while running the legacy HIS and new platform in parallel with bidirectional database synchronization. Fallback rollback procedures must be tested and executable within 60 seconds.\n\n4. Regulatory Compliance & Risk Governance: Incorporate patient data privacy (GDPR / medical confidentiality) into the Definition of Done. Enforce role-based access control (RBAC) with cryptographic audit logging. Establish continuous risk monitoring with predefined triggers (e.g. data synchronization lag > 500ms activates immediate automated alert and switch to read-only legacy mode).",
        "rubricItems": [
          {
            "point": "Formulated rigorous charter with clear scope boundaries and clinical success metrics",
            "marksAllotted": 5
          },
          {
            "point": "Designed empathetic clinical stakeholder engagement and change management strategy",
            "marksAllotted": 5
          },
          {
            "point": "Formulated phased migration architecture guaranteeing 24/7 patient care continuity",
            "marksAllotted": 5
          },
          {
            "point": "Integrated healthcare regulatory compliance and measurable risk triggers",
            "marksAllotted": 5
          }
        ],
        "examinerAdvice": "In healthcare IT scenarios, life-safety, operational continuity, and patient privacy are paramount."
      }
    ]
  }
];
