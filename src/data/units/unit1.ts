import type { UnitData } from '../../types';

export const unit1Data: UnitData = {
  id: 1,
  code: 'DLMIGCR01-01_E-U1',
  title: 'IT Governance: Motivation and Challenges',
  subtitle: 'Foundations of Enterprise IT Governance, Control Architectures & Accountability',
  estimatedTime: '3.5 Hours',
  color: 'indigo',
  gradient: 'from-blue-600 via-indigo-600 to-indigo-900',
  badge: 'Foundation & Principles',
  overview: `Unit 1 establishes the academic and pragmatic imperative for Enterprise Governance of IT (EGIT). In modern digital enterprises, information technology is no longer merely a support function but an integral strategic driver and source of existential risk. This unit explores corporate governance, the fundamental divergence between governance and management, control categories and types, standard frameworks (COSO, SOX, ISO/IEC 38500), the Deming PDCA cycle, and the strict division of responsibilities between the governing body (Board of Directors) and executive management.`,
  
  summarySections: [
    {
      title: '1. Governance, Corporate Governance, and Enterprise Governance of IT (EGIT)',
      summaryParagraph: `Corporate governance encompasses the systemic rules, practices, processes, and institutional structures by which an entire corporation is directed, controlled, and held accountable. It balances the often divergent interests of diverse stakeholders—including shareholders, executive management, customers, suppliers, financiers, regulatory authorities, and the community. Enterprise Governance of IT (EGIT) is an integral component of corporate governance; it ensures that organizational IT sustains and extends corporate strategies and objectives while mitigating technology-related risks.`,
      keyPoints: [
        'Corporate Governance: Focuses on overarching enterprise accountability, fiduciary duties, transparency, risk management, and strategic direction.',
        'Enterprise Governance of IT (EGIT): Directs and controls current and future IT utilization, aligning IT investments with business strategy, realizing promised business value, mitigating IT risks, and optimizing resource allocation.',
        'Strategic Alignment: IT strategy must directly mirror and reinforce corporate strategy—IT is neither an isolated operational silo nor purely a cost center.',
        'Value Delivery: Ensuring IT investments yield tangible business outcomes on time, within budget, and with measurable ROI/benefits realization.',
        'Risk Management: Safeguarding corporate IT assets, establishing operational resilience, and ensuring statutory compliance across all digital processes.'
      ],
      examInsight: `Examiners penalize answers that treat IT governance as an internal technical IT department matter. You must emphasize that EGIT is an integral part of enterprise/corporate governance and is the ultimate fiduciary responsibility of the Board of Directors.`
    },
    {
      title: '2. The Why–What–How Approach to IT Governance',
      summaryParagraph: `The IU course materials articulate IT governance through the structured 'Why–What–How' architecture. This mental model provides clarity when analyzing organizational digital strategy and risk posture.`,
      keyPoints: [
        'WHY (Motivation & Drivers): Explains the underlying necessity of IT governance. Driven by regulatory requirements (e.g., SOX, GDPR), competitive pressures, cost inefficiencies, high-profile IT failures, cyber threats, and reliance on digital processes.',
        'WHAT (Governance Objectives & Direction): Articulates the strategic goals, policies, and principles established by the governing body. Defines "what needs to be achieved" (e.g., strategic alignment, risk threshold, compliance mandate, value realization).',
        'HOW (Execution, Management & Frameworks): Details the operational implementation, management practices, operational workflows, and execution mechanisms. Achieved through frameworks like COBIT, ITIL, ISO/IEC 27001, and operational internal controls.'
      ],
      examInsight: `In descriptive questions, use the Why–What–How structure to systematically unpack any IT governance case or scenario. Remember: the Board decides the Why and the What; Executive Management operationalizes the How.`
    },
    {
      title: '3. Governance versus Management: The Critical Division',
      summaryParagraph: `A core tenet of modern governance theory (and ISO/IEC 38500 / COBIT) is the clear operational and conceptual separation between Governance and Management. Conflating these two functions is the single most common failure mode in both real-world enterprises and examination answers.`,
      comparisonTable: {
        headers: ['Dimension', 'Governance', 'Management'],
        rows: [
          ['Primary Role', 'Evaluates, Directs, and Monitors (EDM)', 'Plans, Builds, Runs, and Monitors (PBRM)'],
          ['Responsible Body', 'Board of Directors / Supervisory Board / Governing Body', 'Executive Management (CEO, CIO, CTO, Management Board)'],
          ['Orientation', 'Strategic, long-term, stakeholder-focused, fiduciary', 'Operational, tactical, execution-focused, delivery-oriented'],
          ['Core Question', 'Are we doing the right things for stakeholders?', 'Are we doing things right, efficiently, and effectively?'],
          ['Framework Focus', 'ISO/IEC 38500, COBIT Governance Domain (EDM)', 'COBIT Management Domains (APO, BAI, DSS, MEA), ITIL V4'],
          ['Accountability', 'Ultimate fiduciary accountability to shareholders & society', 'Operational accountability to the Board of Directors']
        ]
      },
      keyPoints: [
        'Governance ensures stakeholder needs, conditions, and options are evaluated; sets direction through prioritization and decision making; and monitors performance and compliance against agreed-on direction.',
        'Management plans, builds, runs, and monitors activities in alignment with the direction set by the governance body to achieve the enterprise objectives.'
      ],
      examInsight: `Exam Trap: Never say that the Board "manages" or "executes" IT processes. The Board directs and monitors; management executes and operates.`
    },
    {
      title: '4. Internal Control Architecture: Categories and Types',
      summaryParagraph: `An internal control is any policy, process, device, practice, or other action designed to manage risk and provide reasonable assurance regarding the achievement of objectives. In IT governance and compliance, controls are categorized into structural categories (mechanisms) and operational types (time/function of intervention).`,
      keyPoints: [
        'CONTROL CATEGORIES (The Nature / Mechanism):',
        '1. Administrative (Organizational/Management) Controls: Policies, standards, codes of conduct, hiring procedures, security awareness training, and segregation of duties.',
        '2. Physical Controls: Tangible barriers and physical mechanisms safeguarding physical assets (e.g., biometric door locks, security guards, CCTV, fire suppression, fence barriers).',
        '3. Technical (Logical) Controls: Hardware and software mechanisms embedded in IT systems (e.g., access control lists, firewalls, encryption, MFA, intrusion prevention systems, automated audit logging).',
        'CONTROL TYPES (Function / Point of Intervention):',
        '1. Preventative: Aims to deter or prevent an undesirable event from occurring before it happens (e.g., dual authorization, MFA, input validation).',
        '2. Deterrent: Discourages potential violators from attempting a violation (e.g., warning banners, conspicuous CCTV, penalties policy).',
        '3. Detective: Identifies, detects, and records an incident or error during or after its occurrence (e.g., audit log reviews, IDS, file integrity monitoring, financial reconciliation).',
        '4. Directive: Guides or mandates compliant behavior (e.g., acceptable use policies, standard operating procedures).',
        '5. Corrective: Rectifies the impact of an undesirable event and restores normal operations after an incident has occurred (e.g., restoring backups, patching vulnerabilities, incident response execution).',
        '6. Compensatory: An alternative or supplementary control implemented when a primary control is technically unfeasible or cost-prohibitive (e.g., intense supervisory review when segregation of duties cannot be enforced in a small team).'
      ],
      examInsight: `Do NOT confuse Control Categories (Administrative, Physical, Technical) with Control Types (Preventative, Detective, Corrective, etc.). An administrative control can be preventative (e.g., training policy) or detective (e.g., supervisory log sign-off).`
    },
    {
      title: '5. Major Governance Frameworks & Standards: COSO, SOX, ISO/IEC 38500 & Deming Cycle',
      summaryParagraph: `Modern IT governance operates upon an interconnected tapestry of legal mandates, international standards, and process improvement frameworks.`,
      keyPoints: [
        'COSO (Committee of Sponsoring Organizations of the Treadway Commission): Internal Control - Integrated Framework. Defines 5 interrelated components: Control Environment, Risk Assessment, Control Activities, Information & Communication, and Monitoring Activities. Established as the premier baseline for internal control over financial reporting.',
        'SOX (Sarbanes-Oxley Act of 2002): U.S. Federal legislation enacted following massive corporate accounting scandals (Enron, WorldCom). Section 404 mandates that management and independent auditors certify the adequacy of internal controls over financial reporting (ICFR). Since financial systems run on IT, IT General Controls (ITGCs: change management, logical access, computer operations) became legally enforceable.',
        'Deming Cycle (PDCA Cycle): Plan-Do-Check-Act iterative management model for continual quality improvement: Plan (define objectives, processes, controls) -> Do (implement and execute) -> Check (monitor, measure against policies and objectives) -> Act (take corrective actions for continual improvement). Directly mirrors ISO standard management loops.',
        'ISO/IEC 38500: The international standard for Corporate Governance of IT. Formulates 6 core principles: Responsibility, Strategy, Acquisition, Performance, Conformance, and Human Behavior. Outlines the governing body cyclical model: Evaluate, Direct, Monitor (EDM).'
      ],
      examInsight: `ISO/IEC 38500 provides principles for the Board of Directors, whereas COBIT provides a detailed operational and governance model. SOX Section 404 is the primary legal driver making IT internal controls a top board-level priority.`
    }
  ],

  keyConcepts: [
    {
      id: 'c1-1',
      term: 'Enterprise Governance of IT (EGIT)',
      simpleExplanation: 'The system by which an organization directs and controls its IT to support business goals and manage risks.',
      examDefinition: 'Enterprise Governance of IT (EGIT) is an integral element of enterprise governance overseen by the governing body (Board of Directors), ensuring that IT delivers measurable business value, aligns with corporate strategy, mitigates technological risks, and optimizes resource consumption.',
      whyItMatters: 'Without EGIT, IT investments diverge from business strategy, leading to massive financial waste, compliance breaches, and catastrophic cyber exposure.',
      howItWorks: 'The Board evaluates stakeholder needs, directs strategy through mandates and policies, and monitors performance and compliance using scorecards and audits.',
      examKeywords: ['Board of Directors', 'Strategic alignment', 'Value delivery', 'Risk management', 'Resource optimization', 'Fiduciary accountability'],
      commonTrap: 'Confusing EGIT with operational IT management or viewing it merely as an IT department responsibility.',
      category: 'Governance Foundations'
    },
    {
      id: 'c1-2',
      term: 'Governance vs Management',
      simpleExplanation: 'Governance sets the direction and checks results (the Board); Management runs daily operations to get there (Executives).',
      examDefinition: 'Governance ensures that stakeholder needs, conditions, and options are evaluated to determine enterprise objectives, setting direction through prioritization and decision making, and monitoring performance and compliance. Management plans, builds, runs, and monitors activities in alignment with the direction set by the governance body.',
      whyItMatters: 'Maintaining clear separation prevents governance blind spots, conflicts of interest, operational micromanagement, and lack of independent oversight.',
      howItWorks: 'Governance uses Evaluate, Direct, Monitor (EDM). Management uses Plan, Build, Run, Monitor (PBRM).',
      examKeywords: ['Evaluate, Direct, Monitor', 'Plan, Build, Run, Monitor', 'Governing Body', 'Executive Management', 'ISO/IEC 38500'],
      commonTrap: 'Stating that the Board of Directors executes IT projects or manages daily incident tickets.',
      category: 'Governance vs Management'
    },
    {
      id: 'c1-3',
      term: 'Compensating (Compensatory) Control',
      simpleExplanation: 'A backup control put in place when the primary control cannot be implemented due to cost or technical limits.',
      examDefinition: 'A compensating control is an alternative safeguard or procedure designed to mitigate the risk of an unaddressed vulnerability when a primary control is technically unfeasible, commercially impractical, or hindered by structural constraints (e.g., lack of staff for segregation of duties).',
      whyItMatters: 'Enables an organization to satisfy compliance requirements and mitigate critical risk exposure even when standard controls cannot be deployed.',
      howItWorks: 'If segregation of duties is impossible due to team size, a compensating control such as daily automated management transaction log reviews and independent supervisor sign-offs is established.',
      examKeywords: ['Alternative safeguard', 'Primary control unfeasible', 'Equivalent level of assurance', 'Segregation of duties'],
      commonTrap: 'Believing compensating controls are permanent excuses to ignore security policies without providing equivalent risk reduction.',
      category: 'Internal Controls'
    },
    {
      id: 'c1-4',
      term: 'Sarbanes-Oxley Act (SOX) Section 404',
      simpleExplanation: 'A US law requiring companies and auditors to prove that their financial and underlying IT systems have strict, effective internal controls.',
      examDefinition: 'Section 404 of the Sarbanes-Oxley Act of 2002 mandates that corporate management and independent external auditors establish, maintain, and assess the effectiveness of an internal control structure and procedures for financial reporting (ICFR), relying heavily on IT General Controls (ITGCs).',
      whyItMatters: 'It legally elevates IT controls (access control, change management, backup integrity) into mandatory personal criminal/financial liability for CEOs and CFOs.',
      howItWorks: 'Organizations map IT infrastructure supporting financial statements, test ITGCs annually, identify control deficiencies, and publish auditor attestation reports.',
      examKeywords: ['Section 404', 'Internal Control over Financial Reporting (ICFR)', 'IT General Controls (ITGC)', 'External Auditor Attestation', 'Management Liability'],
      commonTrap: 'Thinking SOX is an IT security standard like ISO 27001; it is a financial disclosure law whose enforcement depends on IT controls.',
      category: 'Regulatory & Standards'
    },
    {
      id: 'c1-5',
      term: 'PDCA Cycle (Deming Cycle)',
      simpleExplanation: 'A 4-step loop—Plan, Do, Check, Act—used to continuously improve quality and governance.',
      examDefinition: 'The PDCA (Plan-Do-Check-Act) Cycle is a four-stage iterative management methodology for the continual control and continual improvement of processes, governance structures, and security management systems (ISMS).',
      whyItMatters: 'Provides the cyclical foundation for ISO standards (ISO 9001, ISO 27001, ISO 20000) and ensures governance is not treated as a static one-off event.',
      howItWorks: 'Plan: Establish objectives and processes. Do: Implement processes and controls. Check: Monitor, measure, and audit performance against objectives. Act: Take corrective and preventive actions to close gaps and optimize.',
      examKeywords: ['Plan, Do, Check, Act', 'Iterative loop', 'Continual improvement', 'ISO alignment', 'Corrective action'],
      commonTrap: 'Mixing up "Check" and "Act"—Check is measuring/evaluating; Act is implementing corrective improvements.',
      category: 'Methodologies'
    },
    {
      id: 'c1-6',
      term: 'ISO/IEC 38500',
      simpleExplanation: 'The international standard guiding corporate boards on how to govern IT responsibly.',
      examDefinition: 'ISO/IEC 38500 is the international corporate governance of IT standard providing principles for directors of organizations on the effective, efficient, and acceptable use of IT. It defines the governance cycle of Evaluate, Direct, and Monitor across six core principles.',
      whyItMatters: 'Gives boards an authoritative, non-technical, principle-based framework to fulfill their fiduciary duties regarding IT.',
      howItWorks: 'Applies 6 principles (Responsibility, Strategy, Acquisition, Performance, Conformance, Human Behavior) through 3 core tasks (Evaluate, Direct, Monitor).',
      examKeywords: ['Principles-based', 'Governing body', 'Evaluate, Direct, Monitor', 'Six principles', 'Fiduciary duty'],
      commonTrap: 'Viewing ISO/IEC 38500 as an operational checklist for IT engineers rather than a governance framework for the Board.',
      category: 'Regulatory & Standards'
    }
  ],

  cheatSheet: {
    mustMemorize: [
      'Governance = Evaluate, Direct, Monitor (EDM). Primarily the Board / Governing Body.',
      'Management = Plan, Build, Run, Monitor (PBRM). Primarily Executive Management (CEO, CIO).',
      'The Why-What-How Hierarchy: Why = Drivers/Motivation; What = Strategic Objectives/Policies; How = Execution/Frameworks.',
      'Control Categories (Nature): Administrative, Physical, Technical (Logical).',
      'Control Types (Action): Preventative, Deterrent, Detective, Directive, Corrective, Compensatory.',
      'Deming Cycle: Plan -> Do -> Check -> Act (Iterative Continual Improvement).',
      'SOX Section 404: Management & Auditor assessment of Internal Controls over Financial Reporting (ICFR) via ITGCs.',
      'ISO/IEC 38500: 6 Principles (Responsibility, Strategy, Acquisition, Performance, Conformance, Human Behavior).'
    ],
    coreDefinitions: [
      {
        term: 'Corporate Governance',
        definition: 'System of rules, practices, and processes by which a firm is directed and controlled, balancing stakeholder interests and ensuring corporate accountability.'
      },
      {
        term: 'Enterprise Governance of IT (EGIT)',
        definition: 'An integral part of corporate governance that addresses the definition and implementation of processes, structures, and relational mechanisms to enable business and IT people to execute their responsibilities in support of business/IT alignment and the creation of business value.'
      },
      {
        term: 'Internal Control',
        definition: 'A mechanism, policy, or procedure designed to provide reasonable assurance regarding the achievement of objectives in operational effectiveness, reliable reporting, and compliance.'
      },
      {
        term: 'Compensating Control',
        definition: 'An alternate control that mitigates the risk when an organization cannot implement a standard primary control due to technical or business constraints.'
      }
    ],
    importantNumbers: [
      { number: 'Section 404', label: 'SOX Internal Controls', context: 'Mandates assessment and attestation of internal controls over financial reporting.'
      },
      { number: '6 Principles', label: 'ISO/IEC 38500', context: 'Responsibility, Strategy, Acquisition, Performance, Conformance, Human Behavior.' },
      { number: '3 Tasks', label: 'Governance Cycle', context: 'Evaluate, Direct, Monitor (EDM) carried out by the governing body.' },
      { number: '5 Components', label: 'COSO Framework', context: 'Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring.' }
    ],
    frameworkNames: [
      { acronym: 'COSO', fullName: 'Committee of Sponsoring Organizations of the Treadway Commission', focus: 'Internal Control - Integrated Framework for financial and enterprise control' },
      { acronym: 'SOX', fullName: 'Sarbanes-Oxley Act of 2002', focus: 'US federal law enforcing internal control reporting (Section 404) and executive accountability' },
      { acronym: 'ISO/IEC 38500', fullName: 'Corporate Governance of Information Technology', focus: 'International standard for board-level direction and evaluation of IT' },
      { acronym: 'PDCA', fullName: 'Plan-Do-Check-Act (Deming Cycle)', focus: 'Universal 4-stage management loop for continual improvement' }
    ],
    processes: [
      {
        name: 'Governance Cycle (ISO/IEC 38500)',
        steps: [
          'Evaluate: Assess current and future use of IT, stakeholder needs, proposals, and risk posture.',
          'Direct: Assign responsibilities, establish strategies, define policies, and approve investment priorities.',
          'Monitor: Supervise compliance against policies, progress toward business goals, and overall performance.'
        ],
        description: 'The recurring board-level governance feedback loop ensuring IT fulfills stakeholder goals.'
      },
      {
        name: 'Deming PDCA Improvement Loop',
        steps: [
          'Plan: Establish scope, analyze baseline, define target metrics and controls.',
          'Do: Deploy controls, execute processes, train personnel, operate safeguards.',
          'Check: Audit operations, review logs, verify metric compliance against baseline.',
          'Act: Implement corrective and preventive actions, remediate findings, refine policies.'
        ],
        description: 'Iterative quality and management system improvement cycle.'
      }
    ],
    comparisons: [
      {
        conceptA: 'Governance',
        conceptB: 'Management',
        comparisonPoints: [
          { criterion: 'Core Triad', detailA: 'Evaluate, Direct, Monitor (EDM)', detailB: 'Plan, Build, Run, Monitor (PBRM)' },
          { criterion: 'Accountable Body', detailA: 'Board of Directors / Governing Body', detailB: 'Executive Management (CEO, CIO, CTO)' },
          { criterion: 'Focus', detailA: 'Stakeholder value, strategic direction, risk appetite', detailB: 'Operational efficiency, project delivery, tactical execution' },
          { criterion: 'Time Horizon', detailA: 'Long-term enterprise sustainability', detailB: 'Short-to-medium term operational targets' }
        ]
      },
      {
        conceptA: 'Control Categories',
        conceptB: 'Control Types',
        comparisonPoints: [
          { criterion: 'Definition', detailA: 'The physical, technical, or administrative nature of the control mechanism', detailB: 'The functional purpose or timing of control intervention relative to an incident' },
          { criterion: 'Examples', detailA: 'Administrative (Policy), Physical (Locks), Technical (Firewall)', detailB: 'Preventative (MFA), Detective (Logs), Corrective (Backups)' },
          { criterion: 'Relationship', detailA: 'Defines HOW the control is constructed', detailB: 'Defines WHEN and WHY the control acts' }
        ]
      }
    ],
    examTraps: [
      {
        trap: 'Confusing Control Categories with Control Types.',
        truth: 'Categories describe the mechanism (Administrative, Physical, Technical). Types describe the timing/intent (Preventative, Detective, Corrective, Compensatory, Directive, Deterrent).'
      },
      {
        trap: 'Claiming the Board of Directors manages operational IT projects.',
        truth: 'The Board governs (Evaluate, Direct, Monitor). Executive management plans, builds, runs, and manages.'
      },
      {
        trap: 'Assuming SOX applies only to accounting staff.',
        truth: 'SOX Section 404 relies heavily on IT General Controls (ITGCs) because financial reporting is entirely processed through IT systems.'
      }
    ],
    memoryShortcuts: [
      { acronym: 'EDM', meaning: 'Evaluate, Direct, Monitor', usage: 'Board-level governance responsibilities under ISO 38500 and COBIT.' },
      { acronym: 'PBRM', meaning: 'Plan, Build, Run, Monitor', usage: 'Executive management responsibilities.' },
      { acronym: 'APT', meaning: 'Administrative, Physical, Technical', usage: 'The 3 structural Control Categories.' },
      { acronym: 'PDCA', meaning: 'Plan, Do, Check, Act', usage: 'Deming continual improvement cycle.' }
    ]
  },

  importantQuestions: [
    {
      id: 'q1-1',
      unit: 1,
      question: 'Define Enterprise Governance of IT (EGIT) and distinguish clearly between governance and management.',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'The examiner expects a rigorous academic definition of EGIT establishing it as part of corporate governance, followed by a structured differentiation between governance (Board level, EDM) and management (Executive level, PBRM). Both roles, orientations, and key activities must be highlighted.',
      modelAnswer: `Enterprise Governance of IT (EGIT) is an integral component of corporate governance overseen by the governing body (Board of Directors). It encompasses the leadership, organizational structures, and processes that ensure an enterprise's information technology sustains and extends corporate strategies and objectives while optimizing risks and resource utilization.

The fundamental distinction between governance and management rests upon distinct bodies, responsibilities, and operational horizons:

1. Primary Responsibilities & Functional Mandate:
- Governance ensures that stakeholder needs, conditions, and options are evaluated; sets direction through prioritization and decision-making; and monitors performance and compliance against agreed-upon direction. Its core triad is Evaluate, Direct, and Monitor (EDM).
- Management plans, builds, runs, and monitors activities in alignment with the direction set by the governance body to achieve the enterprise objectives. Its core operational cycle is Plan, Build, Run, and Monitor (PBRM).

2. Organizational Accountability & Bodies:
- Governance is the fiduciary responsibility of the Board of Directors / Supervisory Board.
- Management is executed by Executive Management, specifically the CEO, CIO, CTO, and business unit leaders.

3. Strategic vs Operational Horizon:
- Governance maintains a long-term, enterprise-wide perspective focused on value realization, stakeholder accountability, and risk appetite.
- Management operates within tactical, short-to-medium term horizons, focusing on project delivery, day-to-day operations, service levels, and technical efficiency.`,
      answerStructure: [
        '1. Formal definition of Enterprise Governance of IT (EGIT) as part of corporate governance.',
        '2. Core triad of Governance: Evaluate, Direct, Monitor (EDM) and accountable body (Board).',
        '3. Core cycle of Management: Plan, Build, Run, Monitor (PBRM) and accountable body (Executives).',
        '4. Comparative distinction across orientation, time horizon, and accountability.'
      ],
      keywords: ['Enterprise Governance of IT', 'Corporate Governance', 'Evaluate, Direct, Monitor (EDM)', 'Plan, Build, Run, Monitor (PBRM)', 'Board of Directors', 'Executive Management', 'Strategic alignment', 'Value creation'],
      commonMistakes: 'Describing IT governance as a purely technical IT department duty, or writing that the Board "manages" or "builds" IT systems.',
      selfCheckChecklist: [
        'Defined EGIT as part of corporate governance',
        'Stated EDM for governance and Board responsibility',
        'Stated PBRM for management and Executive responsibility',
        'Contrasted strategic vs operational horizons'
      ]
    },
    {
      id: 'q1-2',
      unit: 1,
      question: 'Explain the three control categories and contrast preventative, detective, corrective, and compensatory control types with concrete IT examples.',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'Examiners look for a clean separation between Control Categories (the mechanism) and Control Types (the timing/function). Each requested control type must be defined with a concrete, realistic enterprise IT example.',
      modelAnswer: `Internal controls in IT governance are classified structurally into categories and functionally into types:

A. Control Categories (Mechanism / Nature of Control):
1. Administrative Controls: Organizational policies, standards, procedures, security awareness training, and separation of duties. (Example: An approved Information Security Policy signed by all employees).
2. Physical Controls: Tangible barriers protecting physical computing assets and facilities. (Example: Biometric access controls, perimeter fences, server room CCTV).
3. Technical (Logical) Controls: Safeguards executed by hardware and software systems. (Example: Next-generation firewalls, multi-factor authentication, database encryption).

B. Control Types (Timing & Functional Intervention):
1. Preventative Controls: Proactively designed to stop a security incident, error, or unauthorized action from occurring prior to inception.
   - Example: Multi-Factor Authentication (MFA) and strict role-based access control preventing unauthorized logins.
2. Detective Controls: Designed to identify and record an undesirable event or discrepancy during or after it occurs.
   - Example: Automated Security Information and Event Management (SIEM) log alerts flagging abnormal data exfiltration.
3. Corrective Controls: Designed to remediate damage, restore systems, and eliminate root causes after an incident has occurred.
   - Example: Restoring verified immutable offline backups following a ransomware infection, or applying emergency security patches.
4. Compensatory Controls: Alternative measures implemented when standard primary controls are technically unfeasible or commercially impractical, providing equivalent risk mitigation.
   - Example: In a small IT department where full segregation of duties between developers and production release engineers is impossible, daily independent managerial log review and automated hash verification serve as a compensatory control.`,
      answerStructure: [
        '1. Introduction defining internal controls and the category vs type taxonomy.',
        '2. Three Control Categories: Administrative, Physical, Technical with IT examples.',
        '3. Four Control Types: Preventative, Detective, Corrective, Compensatory with clear IT examples.'
      ],
      keywords: ['Administrative Controls', 'Physical Controls', 'Technical (Logical) Controls', 'Preventative', 'Detective', 'Corrective', 'Compensatory', 'Segregation of duties', 'MFA', 'Backups'],
      commonMistakes: 'Treating "Technical" as a control type and "Preventative" as a category, or failing to provide realistic enterprise IT examples for each.',
      selfCheckChecklist: [
        'Separated 3 categories (Administrative, Physical, Technical)',
        'Explained 4 types (Preventative, Detective, Corrective, Compensatory)',
        'Provided concrete IT examples for all 7 items',
        'Highlighted the concept of equivalent assurance for compensatory controls'
      ]
    },
    {
      id: 'q1-3',
      unit: 1,
      question: 'Explain why the Sarbanes-Oxley Act (SOX) Section 404 fundamentally impacted IT governance and internal controls.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'Explain what SOX Section 404 mandates, why it forced non-IT executives to scrutinize IT systems, what IT General Controls (ITGCs) are, and how it elevated IT governance to a board-level legal liability.',
      modelAnswer: `Enacted in 2002 following massive corporate financial scandals, the Sarbanes-Oxley Act (SOX) fundamentally revolutionized IT governance through Section 404:

1. Legal Mandate over Financial Systems:
Section 404 requires corporate executive management (CEO and CFO) and independent external auditors to formally report on and attest to the adequacy and operating effectiveness of Internal Control over Financial Reporting (ICFR).

2. The Inextricable Link to IT:
Because modern enterprises record, process, and generate financial reports exclusively through IT systems (ERPs, databases, cloud accounting), ICFR is entirely dependent on the integrity, confidentiality, and availability of the underlying IT environment.

3. Institutionalization of IT General Controls (ITGCs):
To satisfy Section 404, enterprises were forced to formally audit and document ITGCs across three critical areas:
- Access to Programs and Data: Ensuring unauthorized personnel cannot alter financial ledgers.
- Program Changes: Ensuring that code deployments to production financial systems are strictly authorized, tested, and segregated from developers.
- Computer Operations: Ensuring batch processing, data backups, and job scheduling operate reliably.

4. Executive Liability:
Material weaknesses in ITGCs can prevent an auditor from issuing an unqualified opinion, exposing executive management to civil and criminal liability. Consequently, SOX transformed IT governance from an operational IT concern into a mandatory, board-level compliance priority.`,
      answerStructure: [
        '1. Purpose of SOX Section 404 (ICFR and executive attestation).',
        '2. Reliance of financial reporting on enterprise IT systems.',
        '3. Core ITGC domains (Access, Change Management, Operations).',
        '4. Board-level liability and formal elevation of IT governance.'
      ],
      keywords: ['SOX Section 404', 'Internal Control over Financial Reporting (ICFR)', 'IT General Controls (ITGC)', 'Program change management', 'Access controls', 'Executive liability', 'External auditor attestation'],
      commonMistakes: 'Stating SOX is a technical cybersecurity regulation, rather than a corporate financial reporting law that heavily impacts IT.',
      selfCheckChecklist: [
        'Mentioned Section 404 and ICFR',
        'Explained role of ITGCs (Access, Changes, Operations)',
        'Highlighted executive accountability and board elevation'
      ]
    },
    {
      id: 'q1-4',
      unit: 1,
      question: 'What does EDM stand for in IT governance frameworks such as ISO/IEC 38500 and COBIT?',
      marks: 1,
      priority: 'POSSIBLE SHORT QUESTION',
      suggestedTimeMinutes: 2,
      examinerExpectation: 'Exact spelling and recognition of EDM without confusing the "D".',
      modelAnswer: `In ISO/IEC 38500 and COBIT, EDM stands for:
- E: Evaluate
- D: Direct
- M: Monitor`,
      answerStructure: ['State the exact acronym components.'],
      keywords: ['Evaluate', 'Direct', 'Monitor'],
      commonMistakes: 'Writing "Evaluate, Deliver and Monitor" or "Execute, Direct, Manage". The "D" stands strictly for Direct, not Deliver or Deploy.',
      selfCheckChecklist: ['Correctly identified Evaluate, Direct, Monitor']
    },
    {
      id: 'q1-5',
      unit: 1,
      question: 'Case Study: Enterprise Governance Failure and ICFR Transformation at FinGlobal AG. FinGlobal AG, a publicly traded European financial services enterprise, suffered a severe operational disruption during quarter-end financial closing. An emergency audit revealed that development engineers held direct, unmonitored administrative write access to production database ledgers, bypassing the formal change approval process. Formulate a comprehensive 20-mark Master’s response addressing the governance failure, applying ISO/IEC 38500 and COBIT governance vs management responsibilities, analyzing SOX Section 404 ICFR and ITGC implications, classifying internal controls by category and type, applying the canonical risk formula, and detailing board-level corrective recommendations.',
      marks: 20,
      priority: 'POSSIBLE LONG QUESTION',
      suggestedTimeMinutes: 35,
      examinerExpectation: 'A comprehensive, multi-layered Master’s response structured into all nine academic dimensions: Introduction & Problem Formulation, Governance vs Management (ISO 38500 / COBIT), Framework Application, Risk Formula & Control Architecture (Categories vs Types), Statutory Compliance & ITGCs (SOX 404), ITSM Interface (ITIL V4), Executive Accountability, Practical Remediation, and Strategic Conclusion.',
      modelAnswer: `COMPREHENSIVE MASTER'S-LEVEL CASE STUDY SOLUTION: FINGLOBAL AG

1. Introduction & Central Problem Formulation:
FinGlobal AG exhibits a catastrophic breakdown across both corporate governance and operational IT controls. Developers possessing unmonitored administrative write access to production financial databases violates the fundamental principle of Segregation of Duties (SoD), invalidates the integrity of the general ledger, and directly compromises Internal Control over Financial Reporting (ICFR). This is not merely a technical failure; it exposes executive management to severe civil and regulatory liability under SOX Section 404 and corporate governance codes.

2. Enterprise Governance vs Management Analysis (ISO/IEC 38500 & COBIT 2019):
- Governing Body (Supervisory Board) Failure: The Board failed in its fiduciary governance mandate under the Evaluate, Direct, and Monitor (EDM) triad. Specifically:
  * Evaluate: Failed to evaluate stakeholder risk exposure arising from rapid software release cycles versus financial data integrity.
  * Direct: Failed to establish enforceable corporate policies requiring strict segregation of duties between development and production environments.
  * Monitor: Failed to oversee independent compliance reporting (MEA02 - Managed System of Internal Control), relying on passive management reassurances.
- Executive Management (CEO, CIO, CTO) Failure: Executives failed across Plan, Build, Run, and Monitor (PBRM). Under APO13 (Managed Security) and BAI06 (Managed IT Changes), management permitted operational convenience to override standard control baselines.

3. Framework Application & Alignment Cascade:
Using the COBIT 2019 Goals Cascade, the breakdown traces as follows:
- Stakeholder Need: Sustainable business continuity, accurate financial reporting, and regulatory compliance.
- Enterprise Goal: EG07 (Compliance with external laws and regulations) and EG01 (Portfolio of competitive products/services).
- Alignment Goal: AG05 (Delivery of I&T services in line with business requirements) and AG11 (Quality of financial and operational management information).
- Governance/Management Objectives: Direct operational failures in EDM03 (Risk Optimization), APO12 (Managed Risk), BAI06 (Managed IT Changes), and DSS05 (Managed Security Services).

4. Risk Formulation & Internal Control Architecture:
- Canonical Risk Calculation:
  Risk = Threat × Vulnerability × Asset Value
  * Threat: Unauthorized or erroneous alteration of financial ledgers by internal personnel or compromised developer credentials.
  * Vulnerability: Direct administrative production database access without Multi-Factor Authentication (MFA), dual authorization, or audit logging.
  * Asset Value: Multi-million euro regulatory exposure, stock market devaluation, and loss of banking licenses.
  Because both Vulnerability and Asset Value are extremely high, Inherent Risk is critical.
- Control Taxonomy Breakdown:
  * Administrative Controls (Failed): Information security policy failed to mandate formal Segregation of Duties (SoD) and quarterly User Access Reviews (UAR).
  * Physical Controls: Server rooms secured, but irrelevant to logical database exposure.
  * Technical / Logical Controls (Failed): Lack of Role-Based Access Control (RBAC), lack of Privileged Access Management (PAM) vaulting, and absence of database transaction log immutability.
  * Control Types Needed: Preventative (MFA, automated pipeline blocking direct write access), Detective (automated SIEM alerts for unauthorized SQL execution), and Corrective (database rollback and forensic ledger reconciliation).

5. Statutory Compliance & IT General Controls (SOX Section 404):
Under SOX Section 404, FinGlobal AG's management must attest to the effectiveness of ICFR:
- The identified deficiencies constitute a "Material Weakness" in IT General Controls (ITGCs), specifically within:
  * Access to Programs and Data: Direct write access without segregation of duties.
  * Program Changes: Developers deploying changes directly into production without independent review or Change Advisory Board (CAB) authorization.
- Legal Consequence: External auditors must issue an adverse opinion on internal controls. The CEO and CFO face potential civil enforcement and criminal penalties under Section 906 for certifying inaccurate control disclosures.

6. Service Management & Operational Controls (ITIL V4):
- Change Enablement: Production changes must be classified as Normal Changes, requiring peer code review, automated testing in a staging environment, CAB risk assessment, and automated deployment via CI/CD pipelines without human write access.
- Incident & Problem Management: Deploy emergency database restoration as an Incident workaround, but initiate a formal Problem ticket to identify root causes and log a Known Error in the KEDB.

7. Executive Recommendations & Practical Remediation:
1. Immediate Remediation (Days 1–7):
   - Revoke all developer direct write access to production databases.
   - Enforce Privileged Access Management (PAM) with just-in-time (JIT) elevation and session recording for emergency DBAs.
2. Short-Term Governance Overhaul (Days 8–60):
   - Conduct a 100% User Access Review (UAR) across all financial systems to eradicate Access Creep.
   - Implement an automated CI/CD release pipeline where code merges require two independent approvals (four-eyes principle) and deployment is handled exclusively by service accounts.
3. Long-Term Board Oversight (Ongoing):
   - Establish a dedicated Board IT Governance & Risk Sub-Committee under EDM01.
   - Commission an independent SOC 2 Type 2 attestation and ISO/IEC 27001 surveillance audit to re-establish market credibility.

8. Conclusion:
Enterprise governance is not an operational burden but the foundational safeguard of corporate value. By enforcing the strict separation of governance (EDM) from management (PBRM), establishing rigorous ITGCs, and embedding compliance into automated value streams, FinGlobal AG protects both shareholder value and statutory compliance.`,
      answerStructure: [
        '1. Executive Summary & Problem Formulation (ICFR, SoD, database write access).',
        '2. Governance vs Management Analysis (ISO 38500 / COBIT: Board EDM vs Executive PBRM).',
        '3. Framework Alignment (COBIT Goals Cascade & relevant objectives).',
        '4. Risk Formula & Control Architecture (Categories vs Types, Inherent vs Residual).',
        '5. Statutory Compliance & ITGCs (SOX 404, Material Weakness, executive liability).',
        '6. ITIL V4 Service Management Integration (Change Enablement, KEDB).',
        '7. Time-phased Remediation Roadmap (Immediate, Short-Term, Board Oversight).',
        '8. Concluding Synthesis on Value and Compliance.'
      ],
      keywords: ['Enterprise Governance of IT', 'ISO/IEC 38500', 'COBIT 2019', 'Evaluate, Direct, Monitor (EDM)', 'Plan, Build, Run, Monitor (PBRM)', 'SOX Section 404', 'Internal Control over Financial Reporting (ICFR)', 'IT General Controls (ITGC)', 'Access to Programs and Data', 'Program Change Management', 'Risk = Threat × Vulnerability × Asset Value', 'Administrative Controls', 'Technical Controls', 'Preventative Controls', 'Segregation of Duties (SoD)', 'Privileged Access Management (PAM)', 'User Access Review'],
      commonMistakes: 'Treating the scenario as a routine bug without recognizing the board-level governance failure, confusing control categories with types, or failing to identify SOX 404 material weaknesses in ITGCs.',
      selfCheckChecklist: [
        'Structured response across all 8 major Master’s analytical dimensions',
        'Contrasted Board EDM with Executive PBRM under ISO 38500 / COBIT',
        'Calculated risk using Threat × Vulnerability × Asset Value',
        'Categorized controls (Administrative, Physical, Technical) and types (Preventative, Detective, Corrective)',
        'Analyzed SOX 404 ICFR and ITGC domains (Access, Changes, Operations)',
        'Integrated ITIL V4 Change Enablement and Problem Management',
        'Provided actionable, time-phased recommendations'
      ]
    }
  ],

  flashcards: [
    {
      id: 'fc1-1',
      unit: 1,
      front: 'Enterprise Governance of IT (EGIT)',
      back: 'An integral part of corporate governance overseen by the Board of Directors, ensuring IT aligns with business strategy, creates value, manages risk, and optimizes resources.',
      category: 'Governance',
      examTip: 'Always link EGIT to corporate governance and the Board of Directors.'
    },
    {
      id: 'fc1-2',
      unit: 1,
      front: 'EDM vs PBRM',
      back: 'EDM (Evaluate, Direct, Monitor) = Governance (Board).\nPBRM (Plan, Build, Run, Monitor) = Management (Executives).',
      category: 'Governance vs Management',
      examTip: 'The "D" in EDM is Direct, NEVER Deliver.'
    },
    {
      id: 'fc1-3',
      unit: 1,
      front: 'Control Categories (3 structural mechanisms)',
      back: '1. Administrative (Policies, training, vetting)\n2. Physical (Locks, CCTV, guards)\n3. Technical/Logical (Firewalls, encryption, MFA)',
      category: 'Controls',
      examTip: 'Categories define the mechanism; types define the operational purpose.'
    },
    {
      id: 'fc1-4',
      unit: 1,
      front: 'Compensating (Compensatory) Control',
      back: 'An alternative safeguard implemented when a standard primary control is technically unfeasible or cost-prohibitive, providing equivalent risk mitigation (e.g., intensive supervisor reviews when segregation of duties cannot be enforced).',
      category: 'Controls',
      examTip: 'Must provide equivalent assurance!'
    },
    {
      id: 'fc1-5',
      unit: 1,
      front: 'SOX Section 404',
      back: 'US law mandating corporate management and external auditors attest to the effectiveness of Internal Control over Financial Reporting (ICFR), driven by IT General Controls (ITGCs).',
      category: 'Compliance',
      examTip: 'Connects IT change management and access controls directly to financial reporting integrity.'
    },
    {
      id: 'fc1-6',
      unit: 1,
      front: 'Deming Cycle (PDCA)',
      back: 'Plan -> Do -> Check -> Act.\nIterative 4-step loop for continual quality and security improvement, utilized across ISO management systems.',
      category: 'Methodologies',
      examTip: 'Check is measurement/audit; Act is corrective improvement.'
    },
    {
      id: 'fc1-7',
      unit: 1,
      front: 'ISO/IEC 38500: Six Principles',
      back: '1. Responsibility\n2. Strategy\n3. Acquisition\n4. Performance\n5. Conformance\n6. Human Behavior',
      category: 'Standards',
      examTip: 'Principle-based standard for the governing body, not technical procedures.'
    },
    {
      id: 'fc1-8',
      unit: 1,
      front: 'Directive Control vs Deterrent Control',
      back: 'Directive Control: Prescribes acceptable behavior (e.g., policies, SOPs).\nDeterrent Control: Discourages potential violators (e.g., warning banners, CCTV, disciplinary sanctions).',
      category: 'Controls',
      examTip: 'Both influence human intent before action.'
    }
  ],

  activeRecall: [
    {
      id: 'ar1-1',
      question: 'What are the two distinct bodies responsible for Governance and Management respectively, and what are their core triads/cycles?',
      answer: 'Governance is the fiduciary duty of the Board of Directors / Governing Body, operating via Evaluate, Direct, and Monitor (EDM). Management is executed by Executive Management (CEO/CIO/CTO), operating via Plan, Build, Run, and Monitor (PBRM).',
      keywords: ['Board of Directors', 'Executive Management', 'EDM', 'PBRM']
    },
    {
      id: 'ar1-2',
      question: 'Name the 3 control categories and the 6 control types.',
      answer: 'Categories: Administrative, Physical, Technical (Logical). Types: Preventative, Deterrent, Detective, Directive, Corrective, Compensatory.',
      keywords: ['Administrative', 'Physical', 'Technical', 'Preventative', 'Deterrent', 'Detective', 'Directive', 'Corrective', 'Compensatory']
    },
    {
      id: 'ar1-3',
      question: 'Explain what makes a compensatory control acceptable to an external compliance auditor.',
      answer: 'It must provide an equivalent level of risk mitigation and assurance as the missing primary control, and be formally documented, tested, and monitored.',
      keywords: ['Equivalent assurance', 'Risk mitigation', 'Documented', 'Tested']
    },
    {
      id: 'ar1-4',
      question: 'What is the role of IT General Controls (ITGC) under SOX Section 404?',
      answer: 'ITGCs ensure the integrity, security, and reliability of financial computing systems across access controls, change management, and computer operations.',
      keywords: ['SOX 404', 'ITGC', 'Financial systems integrity', 'Access', 'Change management']
    }
  ],

  completionChecklist: [
    'Can clearly define Enterprise Governance of IT (EGIT) as part of corporate governance',
    'Can recite and contrast EDM (Evaluate, Direct, Monitor) vs PBRM (Plan, Build, Run, Monitor)',
    'Can classify any control into its category (Admin/Physical/Technical) and type (Preventative/Detective/Corrective/etc.)',
    'Understand why SOX Section 404 elevated ITGCs to board-level legal liability',
    'Can articulate all 4 stages of the Deming PDCA cycle',
    'Can list the 6 principles of ISO/IEC 38500',
    'Achieved at least 80% on Unit 1 MCQ Practice'
  ],

  mcqs: [
    {
      id: 'u1-mcq-1',
      unit: 1,
      topic: 'Governance vs Management',
      question: 'Which of the following correctly pairs the organizational body with its primary mandate according to modern IT governance frameworks?',
      options: {
        A: 'Board of Directors -> Plan, Build, Run, Monitor (PBRM)',
        B: 'Board of Directors -> Evaluate, Direct, Monitor (EDM)',
        C: 'Executive Management -> Evaluate, Direct, Monitor (EDM)',
        D: 'Audit Committee -> Plan, Build, Deliver, Manage (PBDM)'
      },
      correctAnswer: 'B',
      explanation: 'The Board of Directors (governing body) is accountable for Governance, which centers on Evaluating stakeholder needs, Directing strategic priorities, and Monitoring performance (EDM). Executive management is responsible for Management (PBRM).',
      memoryTip: 'EDM = Board / Governance. PBRM = Executives / Management.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-2',
      unit: 1,
      topic: 'COBIT Governance Acronym',
      question: 'In COBIT and ISO/IEC 38500, what does the letter "D" in the governance triad "EDM" specifically stand for?',
      options: {
        A: 'Deliver',
        B: 'Deploy',
        C: 'Direct',
        D: 'Develop'
      },
      correctAnswer: 'C',
      explanation: 'In the EDM triad, D stands strictly for "Direct". The governing body directs management by setting strategic priorities, policies, and risk boundaries. Delivery is an operational management activity.',
      memoryTip: 'The Board DIRECTS, it never DELIVERS.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-3',
      unit: 1,
      topic: 'Control Categories vs Types',
      question: 'A security awareness training program for all employees is best classified as which category and type of control?',
      options: {
        A: 'Technical category, Corrective type',
        B: 'Physical category, Detective type',
        C: 'Logical category, Compensatory type',
        D: 'Administrative category, Preventative type'
      },
      correctAnswer: 'D',
      explanation: 'Security awareness training is established via organizational policy and education, making it an Administrative (or organizational) control. Its intent is to prevent employees from falling for phishing or making human errors, making it a Preventative control.',
      memoryTip: 'Training = Administrative mechanism; stops mistakes before they happen = Preventative.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-4',
      unit: 1,
      topic: 'Control Types',
      question: 'When an organization cannot segregate duties between software developers and production database administrators due to extreme staff shortage, what kind of control is deployed to provide equivalent assurance?',
      options: {
        A: 'Directive control',
        B: 'Deterrent control',
        C: 'Compensatory (compensating) control',
        D: 'Physical control'
      },
      correctAnswer: 'C',
      explanation: 'A compensatory control is an alternative safeguard designed to mitigate risk when primary controls (such as segregation of duties) cannot be implemented, providing equivalent assurance (e.g., automated independent log audits).',
      memoryTip: 'Compensatory = compensating for a missing standard control.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-5',
      unit: 1,
      topic: 'Regulatory & SOX',
      question: 'Why did Section 404 of the Sarbanes-Oxley Act (SOX) have a monumental impact on IT governance?',
      options: {
        A: 'It mandated the adoption of open-source operating systems for financial reporting.',
        B: 'It required all IT departments to report directly to the U.S. Department of Justice.',
        C: 'It made CEOs and CFOs personally liable for Internal Control over Financial Reporting (ICFR), which relies heavily on IT General Controls.',
        D: 'It outlawed cloud computing for all publicly traded financial institutions.'
      },
      correctAnswer: 'C',
      explanation: 'SOX Section 404 requires corporate leadership to attest to the effectiveness of ICFR. Because financial processing is digital, IT General Controls (change management, logical access, operations) became legally enforceable under threat of criminal penalties.',
      memoryTip: 'SOX 404 = ICFR attestation + ITGCs = Board-level priority.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-6',
      unit: 1,
      topic: 'Deming Cycle',
      question: 'In the Plan-Do-Check-Act (PDCA) cycle, what occurs during the "Act" stage?',
      options: {
        A: 'Initial execution of standard operating procedures.',
        B: 'Implementing corrective and preventive actions to close identified gaps and drive continual improvement.',
        C: 'Auditing system logs against predefined baselines.',
        D: 'Defining the high-level governance vision and business objectives.'
      },
      correctAnswer: 'B',
      explanation: 'In PDCA, "Check" is where monitoring, measuring, and auditing take place. "Act" (or Adjust) is where management takes corrective actions to remediate findings, close performance gaps, and refine the management system.',
      memoryTip: 'Check = Audit & Measure. Act = Remediate & Improve.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-7',
      unit: 1,
      topic: 'ISO/IEC 38500',
      question: 'Which of the following is NOT one of the six core principles of ISO/IEC 38500?',
      options: {
        A: 'Responsibility',
        B: 'Continuous Deployment',
        C: 'Human Behavior',
        D: 'Conformance'
      },
      correctAnswer: 'B',
      explanation: 'The six principles of ISO/IEC 38500 are: Responsibility, Strategy, Acquisition, Performance, Conformance, and Human Behavior. Continuous Deployment is a DevOps software engineering technique, not a governance principle.',
      memoryTip: 'ISO 38500: Responsibility, Strategy, Acquisition, Performance, Conformance, Human Behavior.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-8',
      unit: 1,
      topic: 'Why-What-How Approach',
      question: 'In the Why-What-How approach to IT governance, which element describes the operational frameworks, management practices, and technical tools?',
      options: {
        A: 'The HOW',
        B: 'The WHAT',
        C: 'The WHY',
        D: 'The WHO'
      },
      correctAnswer: 'A',
      explanation: 'WHY explains business drivers and motivation; WHAT defines governance objectives and strategic policies; HOW details operational execution, frameworks (COBIT, ITIL), and technical tools.',
      memoryTip: 'Why = Drivers. What = Objectives/Policies. How = Frameworks & Execution.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-9',
      unit: 1,
      topic: 'Control Types',
      question: 'An automated Intrusion Detection System (IDS) alerts a security analyst that an unauthorized IP address attempted SQL injection. What type of control is the IDS acting as in this scenario?',
      options: {
        A: 'Detective control',
        B: 'Preventative control',
        C: 'Directive control',
        D: 'Compensating control'
      },
      correctAnswer: 'A',
      explanation: 'An Intrusion Detection System (IDS) identifies and alerts on events that have occurred or are occurring, functioning as a Detective control. An Intrusion Prevention System (IPS) that actively blocks the packet would be Preventative.',
      memoryTip: 'IDS = Detects (Detective). IPS = Prevents (Preventative).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-10',
      unit: 1,
      topic: 'Enterprise Governance of IT',
      question: 'Which statement accurately describes the relationship between Corporate Governance and Enterprise Governance of IT (EGIT)?',
      options: {
        A: 'Corporate Governance is a subset of Enterprise Governance of IT.',
        B: 'Enterprise Governance of IT is an integral part of Corporate Governance.',
        C: 'Enterprise Governance of IT replaces Corporate Governance in digital companies.',
        D: 'They are completely independent domains managed by separate external bodies.'
      },
      correctAnswer: 'B',
      explanation: 'Enterprise Governance of IT is not an isolated discipline; it is an integral component of overall corporate governance, ensuring that technology investments align with corporate goals and fiduciary obligations.',
      memoryTip: 'EGIT is a child/subset of Corporate Governance.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-11',
      unit: 1,
      topic: 'Control Types',
      question: 'A warning banner displayed upon server login stating "Unauthorized access is prohibited and will be prosecuted to the full extent of the law" is primarily an example of a:',
      options: {
        A: 'Compensatory control',
        B: 'Corrective control',
        C: 'Deterrent control',
        D: 'Technical corrective control'
      },
      correctAnswer: 'C',
      explanation: 'A deterrent control aims to discourage potential attackers or violators by clearly communicating the consequences and making them reconsider their malicious action.',
      memoryTip: 'Warning signs & banners = Deterrent.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-12',
      unit: 1,
      topic: 'Internal Control Shortcomings',
      question: 'Which of the following represents an inherent limitation of any internal control system?',
      options: {
        A: 'Management override, human error, and collusion can bypass even well-designed controls.',
        B: 'Controls cannot be applied to relational databases.',
        C: 'Internal controls only apply to publicly traded US companies.',
        D: 'ISO standards forbid automated technical controls.'
      },
      correctAnswer: 'A',
      explanation: 'All internal control frameworks (including COSO) acknowledge inherent limitations: controls cannot eliminate risk entirely because human error, management override, and collusion among employees can subvert them.',
      memoryTip: 'Human error + Collusion + Management Override = Core control limitations.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-13',
      unit: 1,
      topic: 'Control Types',
      question: 'Restoring data from a verified, immutable backup after a database corruption incident is an example of what control type?',
      options: {
        A: 'Corrective control',
        B: 'Detective control',
        C: 'Preventative control',
        D: 'Directive control'
      },
      correctAnswer: 'A',
      explanation: 'A corrective control comes into effect after an incident or error has occurred to remediate damage and return the system to a known good operational state.',
      memoryTip: 'Restoration & patching = Corrective.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-14',
      unit: 1,
      topic: 'COSO Framework',
      question: 'How many interrelated components are defined in the COSO Internal Control - Integrated Framework?',
      options: {
        A: 'Three',
        B: 'Five',
        C: 'Seven',
        D: 'Ten'
      },
      correctAnswer: 'B',
      explanation: 'COSO defines 5 components: 1. Control Environment, 2. Risk Assessment, 3. Control Activities, 4. Information and Communication, and 5. Monitoring Activities.',
      memoryTip: 'COSO cube has 5 core control components.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-15',
      unit: 1,
      topic: 'Governance Measurement',
      question: 'What is the primary purpose of an IT Balanced Scorecard in IT governance measurement?',
      options: {
        A: 'To eliminate the need for financial balance sheets.',
        B: 'To replace external financial auditing under SOX.',
        C: 'To calculate the exact hourly wages of software engineers.',
        D: 'To evaluate IT performance across multiple perspectives (financial, customer, internal processes, learning/growth) aligned with business strategy.'
      },
      correctAnswer: 'D',
      explanation: 'The IT Balanced Scorecard translates business-IT strategy into measurable indicators across four balanced perspectives: Corporate Contribution (Financial), Customer/User Orientation, Operational Excellence (Internal Processes), and Future Orientation (Learning & Growth).',
      memoryTip: 'Scorecard balances financial with operational, customer, and future growth.',
      difficulty: 'Mastery'
    },
    {
      id: 'u1-mcq-16',
      unit: 1,
      topic: 'Control Categories',
      question: 'A security guard stationed at the entrance of a Tier IV enterprise data center is an example of a:',
      options: {
        A: 'Technical preventative control',
        B: 'Administrative detective control',
        C: 'Physical control',
        D: 'Logical directive control'
      },
      correctAnswer: 'C',
      explanation: 'A security guard provides a tangible, real-world physical barrier to unauthorized building entry, categorizing it directly as a Physical control.',
      memoryTip: 'Guards, fences, locks = Physical category.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-17',
      unit: 1,
      topic: 'Governance vs Management',
      question: 'Which of the following activities is strictly a MANAGEMENT activity rather than a GOVERNANCE activity?',
      options: {
        A: 'Evaluating stakeholder risk appetite and business options.',
        B: 'Setting enterprise-wide policies and strategic priorities.',
        C: 'Configuring network routers and testing software release candidates.',
        D: 'Monitoring organizational compliance with corporate bylaws.'
      },
      correctAnswer: 'C',
      explanation: 'Configuring network infrastructure and testing code are operational execution tasks belonging to Management (Plan, Build, Run). Evaluating options, setting strategic policies, and monitoring high-level compliance belong to Governance.',
      memoryTip: 'Technical configuration & code tests = Management execution.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-18',
      unit: 1,
      topic: 'IT Governance Implementation',
      question: 'When implementing IT governance in a large corporation, what is typically the most significant cultural barrier to success?',
      options: {
        A: 'Excessive availability of commercial frameworks.',
        B: 'High clock speeds of enterprise server processors.',
        C: 'Over-compliance with open-source software licenses.',
        D: 'Siloed thinking between business units and IT, accompanied by lack of executive sponsorship.'
      },
      correctAnswer: 'D',
      explanation: 'Effective IT governance requires deep relational mechanisms. Lack of active executive sponsorship and entrenched silos between business leadership and IT are universally recognized as the primary reasons governance implementations stall.',
      memoryTip: 'Governance fails when business and IT remain disconnected silos without executive backing.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-19',
      unit: 1,
      topic: 'Control Types',
      question: 'A formalized written Acceptable Use Policy (AUP) that instructs employees on mandatory handling of corporate laptops is an example of a:',
      options: {
        A: 'Technical corrective control',
        B: 'Directive control',
        C: 'Physical preventative control',
        D: 'Compensatory detective control'
      },
      correctAnswer: 'B',
      explanation: 'Directive controls prescribe specific required actions and behavioral boundaries through rules, guidelines, and formal policies.',
      memoryTip: 'Policies directing human behavior = Directive controls.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-20',
      unit: 1,
      topic: 'Fiduciary Duty',
      question: 'Under modern corporate law and governance standards, who holds ultimate fiduciary accountability for the catastrophic failure of an enterprise IT strategy?',
      options: {
        A: 'The external software contractor',
        B: 'The Junior Systems Administrator',
        C: 'The IT Helpdesk Manager',
        D: 'The Board of Directors (Governing Body)'
      },
      correctAnswer: 'D',
      explanation: 'Ultimate legal and fiduciary accountability for the organization’s direction, risk oversight, and asset preservation rests squarely with the Board of Directors.',
      memoryTip: 'Ultimate accountability always sits with the Board of Directors.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-21',
      unit: 1,
      topic: 'Control Types',
      question: 'Biometric fingerprint scanners that prevent unauthorized individuals from unlocking a server room door are classified as:',
      options: {
        A: 'Technical category and Corrective type',
        B: 'Administrative category and Detective type',
        C: 'Physical category and Preventative type',
        D: 'Logical category and Compensatory type'
      },
      correctAnswer: 'C',
      explanation: 'The scanner controls physical access to a room (Physical category) and stops unauthorized entry before it occurs (Preventative type). Note that while biometric sensors use electronics, their operational purpose is physical access control.',
      memoryTip: 'Door locks & biometric barriers = Physical category + Preventative type.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-22',
      unit: 1,
      topic: 'ISO/IEC 38500 Tasks',
      question: 'Under ISO/IEC 38500, what are the three main tasks that the governing body must continuously perform?',
      options: {
        A: 'Plan, Build, Run',
        B: 'Identify, Protect, Defend',
        C: 'Detect, Respond, Recover',
        D: 'Evaluate, Direct, Monitor'
      },
      correctAnswer: 'D',
      explanation: 'ISO/IEC 38500 defines the governance cycle of the governing body as: Evaluate (current and future IT use), Direct (preparation and implementation of plans/policies), and Monitor (conformance to plans and performance).',
      memoryTip: 'ISO 38500 governing body task triad = Evaluate, Direct, Monitor (EDM).',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-23',
      unit: 1,
      topic: 'IT Governance Drivers',
      question: 'Which of the following is an INTERNAL driver for establishing enterprise IT governance?',
      options: {
        A: 'High IT project failure rates and lack of transparency in IT spending',
        B: 'Sarbanes-Oxley Act auditor requirements',
        C: 'Statutory compliance with the GDPR',
        D: 'Mandatory industry regulations from banking supervisory authorities'
      },
      correctAnswer: 'A',
      explanation: 'Internal drivers originate within the organization—such as runaway IT project costs, lack of business-IT alignment, and operational inefficiencies. External drivers include statutory laws (SOX, GDPR) and market regulations.',
      memoryTip: 'Internal = internal costs, efficiency, culture; External = laws & regulations.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-24',
      unit: 1,
      topic: 'SOX ITGCs',
      question: 'Which of the following is considered one of the core domains of IT General Controls (ITGC) under SOX compliance audits?',
      options: {
        A: 'Graphic user interface color palette',
        B: 'Marketing brochure design',
        C: 'Employee social media popularity',
        D: 'Program Change Management'
      },
      correctAnswer: 'D',
      explanation: 'The core domains of ITGCs evaluated by auditors are: 1. Logical Access Controls, 2. Program Change Management, 3. Program Development, and 4. Computer Operations.',
      memoryTip: 'Core ITGCs: Access, Changes, Development, Operations.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-25',
      unit: 1,
      topic: 'Control Taxonomy',
      question: 'A nightly script that compares financial transaction totals between two independent databases and logs an exception report if a variance is found is an example of a:',
      options: {
        A: 'Administrative Directive control',
        B: 'Physical Preventative control',
        C: 'Technical Detective control',
        D: 'Deterrent Compensatory control'
      },
      correctAnswer: 'C',
      explanation: 'The script executes logically in software (Technical) and functions by uncovering and logging discrepancies after transaction processing (Detective).',
      memoryTip: 'Automated script finding errors = Technical + Detective.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-26',
      unit: 1,
      topic: 'Governance Mechanisms',
      question: 'In academic IT governance literature, governance mechanisms are categorized into structures, processes, and relational mechanisms. An IT Strategy Committee at the Board level is an example of a:',
      options: {
        A: 'Relational mechanism',
        B: 'Process mechanism',
        C: 'Structural mechanism',
        D: 'Technical mechanism'
      },
      correctAnswer: 'C',
      explanation: 'Structural mechanisms refer to organizational units, roles, committees, and reporting lines (e.g., Board IT committee, CIO role). Process mechanisms include strategic planning and portfolio management. Relational mechanisms involve collaboration, shared learning, and culture.',
      memoryTip: 'Committees & roles = Structural; Workflows = Process; Collaboration = Relational.',
      difficulty: 'Mastery'
    },
    {
      id: 'u1-mcq-27',
      unit: 1,
      topic: 'Deming Cycle & ISMS',
      question: 'Which international standard structure is explicitly architected around the Deming Plan-Do-Check-Act (PDCA) continual improvement cycle?',
      options: {
        A: 'TCP/IP Model',
        B: 'ISO/IEC 27001 (Information Security Management Systems)',
        C: 'IEEE 802.11 Wi-Fi standard',
        D: 'ASCII character encoding standard'
      },
      correctAnswer: 'B',
      explanation: 'ISO management standards—especially ISO/IEC 27001 and ISO 20000—are fundamentally grounded in the Plan-Do-Check-Act continual improvement philosophy.',
      memoryTip: 'ISO 27001 ISMS uses PDCA for continual improvement.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-28',
      unit: 1,
      topic: 'Governance vs Management',
      question: 'If executive management launches a major multi-million euro cloud migration without consulting the Board, which governance failure has occurred?',
      options: {
        A: 'The Board failed to write the software code.',
        B: 'Management overrode the governing body’s duty to Evaluate and Direct strategic investments.',
        C: 'The helpdesk failed to log an operational ticket.',
        D: 'The organization violated the Deming cycle.'
      },
      correctAnswer: 'B',
      explanation: 'Strategic decisions involving massive capital expenditure and enterprise risk exposure fall directly under the Board’s governance mandate to Evaluate, Direct, and approve.',
      memoryTip: 'Major strategic investments require Board evaluation and direction.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-29',
      unit: 1,
      topic: 'Control Types',
      question: 'Requiring two separate senior managers to approve wire transfers over €50,000 ("four-eyes principle") is an example of what type of control?',
      options: {
        A: 'Preventative control',
        B: 'Detective control',
        C: 'Corrective control',
        D: 'Deterrent control'
      },
      correctAnswer: 'A',
      explanation: 'Dual authorization (four-eyes principle) actively prevents an unauthorized or fraudulent transaction from executing unless both parties authorize it.',
      memoryTip: 'Four-eyes principle stops unauthorized actions = Preventative.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-30',
      unit: 1,
      topic: 'Value Creation in EGIT',
      question: 'According to COBIT and EGIT principles, enterprise value from IT investments is realized through:',
      options: {
        A: 'Benefits realization, Risk optimization, and Resource optimization.',
        B: 'Maximizing the purchase of proprietary server hardware.',
        C: 'Eliminating all forms of business risk entirely.',
        D: 'Delegating all corporate decisions to external cloud providers.'
      },
      correctAnswer: 'A',
      explanation: 'Enterprise Governance of IT creates value by balancing three fundamental pillars: 1. Benefits Realization, 2. Risk Optimization, and 3. Resource Optimization.',
      memoryTip: 'Value Creation = Benefits Realization + Risk Optimization + Resource Optimization.',
      difficulty: 'Mastery'
    },
    {
      id: 'u1-mcq-31',
      unit: 1,
      topic: 'Control Types',
      question: 'Which of the following is the best example of a DIRECTIVE control in an IT organization?',
      options: {
        A: 'An antivirus scanner moving malware to quarantine.',
        B: 'A firewall dropping packets with invalid TCP flags.',
        C: 'A halon gas fire suppression system in a data center.',
        D: 'A password complexity policy requiring 14 characters, numbers, and symbols.'
      },
      correctAnswer: 'D',
      explanation: 'A formal policy that mandates required behavior (such as password requirements) directs human actions, making it a Directive control.',
      memoryTip: 'Policies and mandates = Directive controls.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-32',
      unit: 1,
      topic: 'Segregation of Duties',
      question: 'Why is Segregation of Duties (SoD) considered a vital administrative control in IT environments?',
      options: {
        A: 'It ensures that no single individual has end-to-end control to perpetrate and conceal fraud or unauthorized errors.',
        B: 'It prevents computer processors from overheating.',
        C: 'It eliminates the need for software license agreements.',
        D: 'It reduces the total number of staff required in an IT department.'
      },
      correctAnswer: 'A',
      explanation: 'Segregation of Duties divides critical tasks among different individuals so that accidental errors or intentional fraud cannot be executed and hidden by a single person.',
      memoryTip: 'SoD prevents single-point fraud and concealment.',
      difficulty: 'Foundation'
    },
    {
      id: 'u1-mcq-33',
      unit: 1,
      topic: 'Control Testing',
      question: 'In internal auditing of IT controls, what is the distinction between "Design Effectiveness" and "Operating Effectiveness"?',
      options: {
        A: 'Design effectiveness assesses whether the control is properly formulated to prevent/detect risk; operating effectiveness tests whether the control functioned consistently as designed over time.',
        B: 'Design effectiveness refers to UI aesthetics, while operating effectiveness refers to code efficiency.',
        C: 'Design effectiveness tests physical locks, while operating effectiveness tests software.',
        D: 'There is no difference in audit methodology.'
      },
      correctAnswer: 'A',
      explanation: 'Auditors first test Design Effectiveness (if properly followed, will this control achieve its objective?). Then they test Operating Effectiveness (did the control actually operate consistently throughout the audit period?).',
      memoryTip: 'Design = Is the blueprint sound? Operating = Did it actually work in practice?',
      difficulty: 'Mastery'
    },
    {
      id: 'u1-mcq-34',
      unit: 1,
      topic: 'ISO/IEC 38500 Principle',
      question: 'The ISO/IEC 38500 principle of "Human Behavior" mandates that governing bodies ensure that:',
      options: {
        A: 'All employees are replaced with AI algorithms.',
        B: 'IT policies and practices demonstrate respect for human behavior, including the actual needs and psychological factors of all people involved.',
        C: 'Employees are subjected to polygraph lie detector tests.',
        D: 'Human employees are not allowed to access databases.'
      },
      correctAnswer: 'B',
      explanation: 'The Human Behavior principle recognizes that IT systems succeed or fail based on human factors. Policies, practices, and systems must respect human behavior, capabilities, and ergonomic/psychological needs.',
      memoryTip: 'Human Behavior principle = Respect human capabilities, needs, and limitations.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u1-mcq-35',
      unit: 1,
      topic: 'Deming Cycle Check Stage',
      question: 'An internal auditor reviews firewall change logs against the formal change ticket registry to verify that all deployments were authorized. Which Deming PDCA stage does this represent?',
      options: {
        A: 'Plan',
        B: 'Do',
        C: 'Act',
        D: 'Check'
      },
      correctAnswer: 'D',
      explanation: 'Auditing, comparing records against standards, and verifying whether controls functioned as intended is the essence of the "Check" stage in PDCA.',
      memoryTip: 'Auditing & verifying = Check.',
      difficulty: 'Foundation'
    }
  ]
};
