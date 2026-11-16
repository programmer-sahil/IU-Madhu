import { SubjectConfig, SubjectSlug } from '../../types/subject';

export const corporateGovernanceConfig: SubjectConfig = {
  id: 'corporate-governance',
  slug: 'corporate-governance',
  shortCode: 'CGIT',
  courseCode: 'DLMIGCR01-01_E',
  title: 'Corporate Governance of IT',
  fullTitle: 'Corporate Governance of IT, Compliance, and Law',
  description: 'Structured revision, exam-focused explanations, master comparisons, BSI standards, COBIT 2019, ITIL V4, and IT Law.',
  university: 'IU International University of Applied Sciences',
  unitCount: 6,
  accentColor: 'indigo',
  accentHex: '#6366f1',
  tools: {
    mcqs: true,
    flashcards: true,
    mockExams: true,
    cheatSheets: true,
    importantQA: true,
    visualLearning: true,
    comparisons: true,
    examTraps: true,
    numbersToKnow: true,
    thirtyMinSprint: true,
  },
  units: [
    {
      id: 1,
      number: 1,
      title: 'IT Governance: Motivation and Challenges',
      shortTitle: 'IT Governance',
      subtitle: 'Foundations of Enterprise IT Governance, Control Architectures & Accountability',
      status: 'active',
      sections: [
        { id: 'cgit-1-1', number: '1.1', title: 'Governance, Corporate Governance, and Enterprise Governance of IT (EGIT)' },
        { id: 'cgit-1-2', number: '1.2', title: 'The Why–What–How Approach to IT Governance' },
        { id: 'cgit-1-3', number: '1.3', title: 'Governance versus Management: The Critical Division' },
        { id: 'cgit-1-4', number: '1.4', title: 'Internal Control Architecture: Categories and Types' },
        { id: 'cgit-1-5', number: '1.5', title: 'Major Governance Frameworks & Standards: COSO, SOX, ISO/IEC 38500 & Deming Cycle' }
      ],
      topics: [
        'Enterprise Governance of IT (EGIT)',
        'Corporate Governance & Fiduciary Duty',
        'Why–What–How Governance Approach',
        'Governance vs Management Division',
        'Accountability vs Responsibility',
        'Internal Control System (ICS)',
        'Control Categories: Preventive, Detective, Corrective, Compensating',
        'Control Types: Entity-Level, Activity-Level, ITGC, Application Controls',
        'COSO Internal Control - Integrated Framework',
        'Sarbanes-Oxley Act (SOX) Section 404 & ITGCs',
        'ISO/IEC 38500: Evaluate, Direct, Monitor (EDM)',
        'ISO/IEC 38500 Six Principles',
        'Deming Cycle (PDCA) in IT Governance'
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Enterprise Governance of IT Using COBIT 2019',
      shortTitle: 'COBIT 2019',
      subtitle: 'The Global Standard for Enterprise Governance of Information & Technology',
      status: 'active',
      sections: [
        { id: 'cgit-2-1', number: '2.1', title: 'The Purpose and Nature of COBIT 2019' },
        { id: 'cgit-2-2', number: '2.2', title: 'Principles: Governance System (6) vs Governance Framework (3)' },
        { id: 'cgit-2-3', number: '2.3', title: 'The Seven Governance System Components' },
        { id: 'cgit-2-4', number: '2.4', title: 'The COBIT 2019 Core Model: 5 Domains and 40 Objectives' },
        { id: 'cgit-2-5', number: '2.5', title: 'The COBIT Goals Cascade (Target Cascade)' },
        { id: 'cgit-2-6', number: '2.6', title: 'Design Factors (11) and Capability Levels (0–5)' }
      ],
      topics: [
        'COBIT 2019 Framework Overview',
        'Six Governance System Principles',
        'Three Governance Framework Principles',
        'Seven Governance System Components',
        'COBIT Core Model (5 Domains, 40 Objectives)',
        'EDM Domain (Evaluate, Direct and Monitor - 5 Objectives)',
        'APO Domain (Align, Plan and Organize - 14 Objectives)',
        'BAI Domain (Build, Acquire and Implement - 11 Objectives)',
        'DSS Domain (Deliver, Service and Support - 6 Objectives)',
        'MEA Domain (Monitor, Evaluate and Assess - 4 Objectives)',
        'COBIT Goals Cascade (Stakeholder Drivers → Enterprise Goals → Alignment Goals → Governance Objectives)',
        'COBIT Design Factors (11 Factors)',
        'COBIT Capability Levels (0 to 5) & CMMI Alignment',
        'COBIT Implementation Lifecycle (7 Phases)'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Information Security and Risk Management',
      shortTitle: 'IT Compliance & Risk',
      subtitle: 'Risk Management, Control Architectures, Compliance Frameworks & Auditing',
      status: 'active',
      sections: [
        { id: 'cgit-3-1', number: '3.1', title: 'Fundamentals of IT Compliance & Risk Management' },
        { id: 'cgit-3-2', number: '3.2', title: 'The Canonical Risk Formula and Risk Assessment' },
        { id: 'cgit-3-3', number: '3.3', title: 'Inherent Risk vs Residual Risk & The Four Risk Treatments' },
        { id: 'cgit-3-4', number: '3.4', title: 'Internal Control Shortcomings and Human Limitations' },
        { id: 'cgit-3-5', number: '3.5', title: 'Major Compliance & Security Standards: ISO 27000 Series, SOC 2, NIST 800-53' }
      ],
      topics: [
        'IT Compliance Fundamentals & Regulatory Drivers',
        'Canonical Risk Formula (Risk = Threat × Vulnerability × Asset Value)',
        'Quantitative vs Qualitative Risk Analysis',
        'Inherent Risk vs Residual Risk',
        'Four Risk Treatment Options: Mitigate, Transfer, Avoid, Accept',
        'Risk Appetite and Risk Tolerance',
        'Internal Control Shortcomings & Management Override',
        'Human Factors & Access Creep (Privilege Creep)',
        'ISO/IEC 27000 Series (27001 ISMS, 27002 Controls, 27005 Risk)',
        'SOC 1 vs SOC 2 (Type 1 vs Type 2 Reports)',
        'SOC 2 Trust Services Criteria',
        'NIST SP 800-53 Security Control Baselines',
        'IT Auditing & Evidence Verification'
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'Basic IT Protection According to BSI',
      shortTitle: 'BSI IT-Grundschutz',
      subtitle: 'The German BSI IT-Grundschutz Framework, BSI Standards 200-x & Protection Requirements',
      status: 'active',
      sections: [
        { id: 'cgit-4-1', number: '4.1', title: 'What is BSI IT-Grundschutz & The BSI Standard Family' },
        { id: 'cgit-4-2', number: '4.2', title: 'The Six-Step IT-Grundschutz Implementation Process' },
        { id: 'cgit-4-3', number: '4.3', title: 'Protection Requirements & The CIA Triad' },
        { id: 'cgit-4-4', number: '4.4', title: 'Principles of Protection Requirement Determination: Maximum, Accumulation & Distribution' },
        { id: 'cgit-4-5', number: '4.5', title: 'Requirements Levels & The Crown Jewels Concept' }
      ],
      topics: [
        'BSI IT-Grundschutz Framework & German Federal Office for Information Security',
        'BSI Standards Family (200-1, 200-2, 200-3, 200-4 / 100-4)',
        'Six-Step IT-Grundschutz Process',
        'Step 1: Structural Analysis (Strukturanalyse)',
        'Step 2: Protection Requirements Determination (Schutzbedarfsfeststellung)',
        'Step 3: IT-Grundschutz Modelling (Modellierung)',
        'Step 4: IT-Grundschutz Check (Soll-Ist-Vergleich)',
        'Step 5: Supplementary Risk Analysis (Ergänzende Risikoanalyse - BSI 200-3)',
        'Step 6: Implementation Planning (Umsetzungsplanung)',
        'CIA Triad (Confidentiality, Integrity, Availability)',
        'Maximum Principle (Maximumprinzip)',
        'Accumulation Effect (Kumulationseffekt)',
        'Distribution Effect (Verteilungseffekt)',
        'IT-Grundschutz Compendium (Modules & Requirements)',
        'Requirement Levels (Basic, Standard, High)',
        'Crown Jewels (Kern-Absicherung) Strategy'
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'ITSM and IT Service Excellence',
      shortTitle: 'IT Service Management',
      subtitle: 'ITIL V4 Service Value System, Four Dimensions, 34 Practices & ISO/IEC 20000',
      status: 'active',
      sections: [
        { id: 'cgit-5-1', number: '5.1', title: 'What is ITSM and the ITIL V4 Service Value System (SVS)' },
        { id: 'cgit-5-2', number: '5.2', title: 'The Six Activities of the Service Value Chain (SVC)' },
        { id: 'cgit-5-3', number: '5.3', title: 'Core ITSM Practices: Incident, Problem, Change & Service Desk' },
        { id: 'cgit-5-4', number: '5.4', title: 'The Four Dimensions of Service Management' },
        { id: 'cgit-5-5', number: '5.5', title: 'ISO/IEC 20000-1:2018 vs ITIL V4 & Complementary Frameworks' }
      ],
      topics: [
        'IT Service Management (ITSM) & Value Co-Creation',
        'ITIL V4 Service Value System (SVS)',
        'ITIL V4 Seven Guiding Principles',
        'Service Value Chain (6 Activities: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support)',
        'Four Dimensions of Service Management',
        'ITIL V4 34 Practices (General, Service, Technical)',
        'Incident Management & Swarming',
        'Problem Management & Known Error Database (KEDB)',
        'Change Enablement (Standard, Normal, Emergency Changes & CAB)',
        'Service Desk Practice & Single Point of Contact',
        'Service Level Agreements (SLAs), OLAs, and Underpinning Contracts',
        'ISO/IEC 20000-1:2018 Certification Requirements',
        'Complementary Frameworks: MOF, FitSM'
      ]
    },
    {
      id: 6,
      number: 6,
      title: 'Compliance: Law and IT',
      shortTitle: 'IT Law',
      subtitle: 'E-Commerce Regulations, Intellectual Property, IT Contracting & EU GDPR / German BDSG',
      status: 'active',
      sections: [
        { id: 'cgit-6-1', number: '6.1', title: 'E-Commerce Law & German Statutory Requirements' },
        { id: 'cgit-6-2', number: '6.2', title: 'Intellectual Property (IP): Patents, Utility Models, Copyright & Domains' },
        { id: 'cgit-6-3', number: '6.3', title: 'IT Contracting: SLAs, Right-to-Audit & Vendor Continuity' },
        { id: 'cgit-6-4', number: '6.4', title: 'EU General Data Protection Regulation (GDPR / DSGVO)' },
        { id: 'cgit-6-5', number: '6.5', title: 'Technical Data Protection, Breach Notification & Penalties' }
      ],
      topics: [
        'E-Commerce Regulations & German Telemedia Act (TMG / DDG)',
        'Statutory Impressum Requirements & Penalties',
        'Button Solution (Button-Lösung)',
        'Consumer Right of Withdrawal & Statutory Exceptions',
        'Intellectual Property: Patents, Utility Models, Copyright, Trademarks',
        'Software Copyright & Work-for-Hire in Germany',
        'IT Contracting: SLAs, Penalties, and Limitation of Liability',
        'Software Escrow Agreements',
        'Right-to-Audit & Vendor Business Continuity',
        'EU GDPR / German BDSG Core Principles',
        'Controller vs Processor Responsibilities & Article 28 DPA',
        'Legal Bases for Data Processing (Article 6 & Article 9)',
        'Data Subject Rights (Access, Rectification, Erasure, Portability)',
        'Data Protection by Design & by Default (Art. 25)',
        '72-Hour Data Breach Notification (Art. 33 & Art. 34)',
        'Data Protection Officer (DPO) Appointment & Independence',
        'GDPR Enforcement & Two-Tier Penalties'
      ]
    }
  ]
};

export const itProjectManagementConfig: SubjectConfig = {
  id: 'it-project-management',
  slug: 'it-project-management',
  shortCode: 'ITPM',
  courseCode: 'DLMBITPAM01',
  title: 'IT Project Management',
  fullTitle: 'IT Project Management',
  description: 'Structured examination preparation covering IT project foundations, scheduling, cost estimation, EVM, team dynamics, agile and plan-driven methodologies.',
  university: 'IU International University of Applied Sciences',
  unitCount: 6,
  accentColor: 'sky',
  accentHex: '#0ea5e9',
  tools: {
    mcqs: true,
    flashcards: true,
    mockExams: true,
    cheatSheets: true,
    importantQA: true,
    visualLearning: true,
    comparisons: true,
    examTraps: true,
    numbersToKnow: true,
    thirtyMinSprint: true,
  },
  units: [
    {
      id: 1,
      number: 1,
      title: 'Introduction: Characteristics of IT Projects',
      shortTitle: 'Characteristics of IT Projects',
      subtitle: 'IT project characteristics, constraints, roles, phases, risk and the project manager.',
      status: 'active',
      sections: [
        { id: 'itpm-1-1', number: '1.1', title: 'Defining IT Projects' },
        { id: 'itpm-1-2', number: '1.2', title: 'Overview of Typical Roles and Phases of IT Projects' },
        { id: 'itpm-1-3', number: '1.3', title: 'Risks and Challenges of IT Projects' },
        { id: 'itpm-1-4', number: '1.4', title: 'Role of an IT Project Manager' }
      ],
      topics: [
        'Defining IT Projects & Temporary Endeavor',
        'Unique Deliverables in IT vs Operations',
        'Why IT Projects Are Difficult',
        'Organizational Information Needs (Operational, Management Knowledge, Executive)',
        'External Stakeholder Influences (Customers, Suppliers, Collaborators, Governments, Regulators)',
        'Sociotechnical Systems (Hardware, Software, Human Interaction)',
        'Project Success Beyond Simple Completion',
        'Iron Triangle (Scope, Schedule, Cost)',
        'Quintuple Constraints (Schedule, Cost, Context, Technical, Financing)',
        'Large-Project Hierarchy (Sponsor/PMO, PM, Technical Coordinator, Work-Package Leaders, Task Leaders, Team Members)',
        'Governance Bodies (PMB vs TMB)',
        'Resource Pooling & Context Switching (Utilization vs Efficiency)',
        'Five Generic Project Phases (Initiation, Planning, Launch/Execution, Monitor & Control, Termination)',
        'Parallel Execution of Monitoring & Controlling',
        'Project Charter & Official Authorization',
        'Plan-Driven vs Agile (Unit 1 Foundations)',
        'Project Risk Definition (Uncertain Event, Threat vs Opportunity)',
        'Risk Evaluation (Probability × Impact/Benefit)',
        'Sources of IT Project Risk (Technological, Organizational, Stakeholder)',
        'Risk Attitude (Appetite, Tolerance, Threshold; Risk-Averse, Risk-Neutral, Risk-Taking)',
        'Four-Step Risk Management Process (I-A-D-M)',
        'Four Risk Responses (M-A-T-A: Mitigate, Accept, Transfer, Avoid)',
        'Role of IT Project Manager & Skill Triangle',
        'Soft vs Hard Project Management Skills',
        'Lifecycle-Dependent PM Skills & Continuous Learning'
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Organizing the Work',
      shortTitle: 'Organizing the Work',
      subtitle: 'WBS, requirements prioritization, dependencies, PERT/Gantt and software quality.',
      status: 'active',
      sections: [
        { id: 'itpm-2-1', number: '2.1', title: 'Project Breakdown Structure, Work-Packages' },
        { id: 'itpm-2-2', number: '2.2', title: 'Prioritization' },
        { id: 'itpm-2-3', number: '2.3', title: 'Time Planning, Milestones, Gantt Chart' },
        { id: 'itpm-2-4', number: '2.4', title: 'Definition of Done' }
      ],
      topics: [
        'Work Breakdown Structure (WBS) & Hierarchical Decomposition',
        'Four Conceptual WBS Levels (Project, Areas, Functions, Tasks)',
        'Bottom-Up Roll-Up & Constraint Reconciliation',
        'Work Packages, Tasks, Deliverables & Milestones (Duration = 0)',
        'Agile Work Breakdown (Epic → User Story → Task)',
        'Requirements Traceability Matrix (Requirement → Design → Component → Test → Status)',
        'WBS Dictionary Contents',
        'Prioritization: Urgency × Importance Matrix (4 Quadrants)',
        'Kano Model (Basic, Performance, Delighter & Diminishing Returns)',
        'MoSCoW Method (Must, Should, Could, Won\'t-have & Departmental Differences)',
        'Combining Kano and MoSCoW for Prioritization',
        'Plan-Driven vs Agile Time Planning',
        'Precedence Relationships (FS, SS, SF, FF)',
        'Lead Time, Lag Time, and Slack/Float',
        'PERT Network Diagrams & Activity On Node',
        'PERT Formulas: EFT = EST + Duration, LST = LFT - Duration, Slack = LST - EST',
        'Forward Pass (Earliest Times) & Backward Pass (Latest Times)',
        'Critical Path Identification (Zero Slack)',
        'Gantt Chart (Visual Schedule, Dependencies, Progress)',
        'Advantages and Limitations of Gantt (Hides Resource Quantities & Costs)',
        'PERT vs Gantt Comparison',
        'Definition of Done (DoD) & Team Quality Criteria',
        'DoD ≠ Final Customer Acceptance (Exam Trap)',
        'ISO/IEC 25010 Quality in Use (5: Satisfaction, Effectiveness, Risk Freedom, Efficiency, Context Coverage)',
        'ISO/IEC 25010 Product Quality (8: Functional Suitability, Performance Efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability)',
        'Quality Gate (Formal Intermediate Checkpoint)',
        'Three-Tier Quality Comparison: DoD vs Quality Gate vs Final Acceptance'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Cost Estimation and Controlling',
      shortTitle: 'Cost Estimation and Controlling',
      subtitle: 'Cost estimation, financial metrics, Earned Value Management and project risk.',
      status: 'active',
      sections: [
        { id: 'itpm-3-1', number: '3.1', title: 'Challenges of Cost Estimation in IT Projects' },
        { id: 'itpm-3-2', number: '3.2', title: 'Estimation Techniques' },
        { id: 'itpm-3-3', number: '3.3', title: 'Cost Controlling Using Earned Value Analysis' },
        { id: 'itpm-3-4', number: '3.4', title: 'Risk Management' }
      ],
      topics: [
        'Challenges of Cost Estimation in IT Projects',
        'Quality Attributes of Cost Estimation Metrics',
        'Cost-Benefit Metrics: Return on Investment (ROI), Payback Period, Net Present Value (NPV), Profitability Index',
        'Estimation Techniques: Expert Judgment, Analogy, Delphi Method',
        'Function Point Analysis (FPA): Functional Types, Complexity Weighting (Table 1), 14 System Characteristics, TDI & CAF Formula',
        'Agile Cost Estimation & Planning Poker (Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)',
        'Earned Value Analysis (EVA): Planned Value (PV), Earned Value (EV), Actual Cost (AC), Budget at Completion (BAC)',
        'Cost Variance (CV = EV - AC) & Schedule Variance (SV = EV - PV)',
        'Cost Performance Index (CPI = EV / AC) & Schedule Performance Index (SPI = EV / PV)',
        '25/75 Earning Rule & Burn-down Chart Progress Tracking',
        'Risk Management Stages: Prevention, Detection, and Response',
        'Risk Maturity Hierarchy: Ad hoc, Abbreviated, Organized, Managed, Adaptive (Farah 2011)'
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'The Human Factor',
      shortTitle: 'The Human Factor',
      subtitle: 'Vision and leadership, stakeholder analysis, engagement, conflict and negotiation.',
      status: 'active',
      sections: [
        { id: 'itpm-4-1', number: '4.1', title: 'Vision Keeping' },
        { id: 'itpm-4-2', number: '4.2', title: 'Stakeholder Management' },
        { id: 'itpm-4-3', number: '4.3', title: 'Conflict Management' }
      ],
      topics: [
        'Project Vision & Vision Statement Formulation',
        'Project Culture, Organizational Climate & Psychological Safety',
        'Leadership Styles in IT Projects (Transformational, Servant, Situational)',
        'Stakeholder Identification & Analysis',
        'Mitchell, Agle & Wood Stakeholder Salience Model (Power, Legitimacy, Urgency)',
        'Power/Interest Grid & Stakeholder Engagement Strategies',
        'RACI Matrix (Responsible, Accountable, Consulted, Informed)',
        'Stakeholder Engagement Assessment Matrix (Unaware, Resistant, Neutral, Supportive, Leading)',
        'Communication Planning, Channels & Feedback Loops',
        'Sources of Conflict in IT Projects (Schedules, Priorities, Resources, Technical Opinions)',
        'Thomas-Kilmann Conflict Mode Instrument (Collaborating, Competing, Compromising, Accommodating, Avoiding)',
        'Principled Negotiation & Harvard Negotiation Project'
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'Organizing Small and Medium Projects',
      shortTitle: 'Small & Medium Projects',
      subtitle: 'RUP, Agile, Scrum and predictive approaches for small and medium IT projects.',
      status: 'active',
      sections: [
        { id: 'itpm-5-1', number: '5.1', title: 'Rational Unified Process (RUP)' },
        { id: 'itpm-5-2', number: '5.2', title: 'Agile Software Processes' },
        { id: 'itpm-5-3', number: '5.3', title: 'Scrum' },
        { id: 'itpm-5-4', number: '5.4', title: 'Plan-Driven Project Management in Small Projects' }
      ],
      topics: [
        'Rational Unified Process (RUP) Architecture & 4+1 View Model',
        'RUP Four Phases: Inception, Elaboration, Construction, Transition',
        'RUP Disciplines: Engineering vs Supporting Disciplines',
        'Agile Manifesto: 4 Core Values & 12 Guiding Principles',
        'Iterative and Incremental Development Cycle',
        'Scrum Framework: Roles (Product Owner, Scrum Master, Developers)',
        'Scrum Artifacts: Product Backlog, Sprint Backlog, Product Increment',
        'Scrum Events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective',
        'Sprint Burndown Charts & Kanban / Task Boards',
        'Plan-Driven Methodologies in Small Projects',
        'Waterfall Model & Waterfall with Feedback Loops',
        'V-Model (Verification and Validation Relationships)'
      ]
    },
    {
      id: 6,
      number: 6,
      title: 'Organizing Large Projects',
      shortTitle: 'Large Projects',
      subtitle: 'PMBOK, PRINCE2, portfolio/PMO structures, scaled agile and methodology selection.',
      status: 'active',
      sections: [
        { id: 'itpm-6-1', number: '6.1', title: 'PMBOK Guide' },
        { id: 'itpm-6-2', number: '6.2', title: 'PRINCE2' },
        { id: 'itpm-6-3', number: '6.3', title: 'Multi-Project Management' },
        { id: 'itpm-6-4', number: '6.4', title: 'Agile Software Processes in Large Projects' },
        { id: 'itpm-6-5', number: '6.5', title: 'Selection of the Appropriate Project Management Method' }
      ],
      topics: [
        'PMBOK Guide: 5 Process Groups (Initiating, Planning, Executing, Monitoring & Controlling, Closing)',
        'PMBOK 10 Knowledge Areas & 47 Processes',
        'PRINCE2 Framework: 7 Principles, 7 Themes, 7 Processes',
        'PRINCE2 Organization: Project Board, Project Manager, Team Manager',
        'Continued Business Justification & Business Case Management',
        'Multi-Project Management & Program Management',
        'Project Portfolio Management (PPM) & Resource Allocation',
        'Project Management Office (PMO) Types: Supportive, Controlling, Directive',
        'Scaling Agile: Scrum of Scrums (SoS)',
        'Scaled Agile Framework (SAFe): Essential, Large Solution, Portfolio SAFe',
        'Large-Scale Scrum (LeSS)',
        'Criteria for Selecting Project Management Methodologies (Stacey Matrix, Boehm-Turner Radar)',
        'Hybrid Project Management (Combining Agile Delivery with Plan-Driven Governance)'
      ]
    }
  ]
};

export const subjects: Record<SubjectSlug, SubjectConfig> = {
  'corporate-governance': corporateGovernanceConfig,
  'it-project-management': itProjectManagementConfig,
};

export const subjectList: SubjectConfig[] = [
  corporateGovernanceConfig,
  itProjectManagementConfig,
];

export const defaultSubjectSlug: SubjectSlug = 'corporate-governance';

export function getSubjectBySlug(slug: string): SubjectConfig | undefined {
  if (slug in subjects) {
    return subjects[slug as SubjectSlug];
  }
  return undefined;
}

export function getSubjectById(id: string): SubjectConfig | undefined {
  return subjectList.find(s => s.id === id);
}
