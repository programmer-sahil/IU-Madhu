import { UnitData } from '../../types';

export const unit2Data: UnitData = {
  id: 2,
  code: 'DLMIGCR01-01_E-U2',
  title: 'COBIT 2019',
  subtitle: 'The Global Standard for Enterprise Governance of Information & Technology',
  estimatedTime: '4.5 Hours',
  color: 'blue',
  gradient: 'from-cyan-600 via-blue-600 to-indigo-900',
  badge: 'Framework Architecture',
  overview: `COBIT 2019 (Control Objectives for Information and Related Technologies) published by ISACA is the definitive international framework for Enterprise Governance of Information and Technology (EGIT). This unit examines COBIT's purpose, the strict division between governance and management, the 6 governance-system principles and 3 governance-framework principles, the 7 governance-system components, the 40 Governance and Management Objectives across the 5 domains (EDM, APO, BAI, DSS, MEA), the 4-step Target Cascade, the 11 Design Factors, the CMMI-aligned Capability Levels (0 to 5), and the 7-phase Implementation Lifecycle.`,

  summarySections: [
    {
      title: '1. The Purpose and Nature of COBIT 2019',
      summaryParagraph: `COBIT 2019 provides an overarching umbrella framework for enterprise governance of IT. Crucially, COBIT does not replace operational frameworks or technical standards (such as ITIL, TOGAF, or ISO/IEC 27001); instead, it integrates and aligns them under a unified governance and management umbrella. It ensures that IT enables business strategy, delivers promised value, manages risks within acceptable thresholds, and optimizes resource allocation.`,
      keyPoints: [
        'COBIT is an overarching framework that sits above specific methodologies (ITIL for service management, TOGAF for enterprise architecture, ISO 27001 for security).',
        'Addresses Enterprise Governance of IT (EGIT), covering the full end-to-end business and technology lifecycle.',
        'Not a technical standard, but a governance and management business framework for the entire enterprise.'
      ],
      examInsight: `Exam Trap: COBIT is NOT a prescriptive technical standard that tells engineers what software to code or how to configure routers. It is a business framework providing objectives, components, and design factors for governance and management.`
    },
    {
      title: '2. Principles: Governance System (6) vs Governance Framework (3)',
      summaryParagraph: `COBIT 2019 makes a critical distinction between principles required for a Governance System (how an organization governs IT) and principles required for a Governance Framework (how the framework itself is built). Confusing these sets of principles is a primary exam trap!`,
      comparisonTable: {
        headers: ['Six Governance System Principles', 'Three Governance Framework Principles'],
        rows: [
          ['1. Provide Stakeholder Value', '1. Based on Conceptual Model (identifies key components and relationships)'],
          ['2. Holistic Approach (7 components working together)', '2. Open and Flexible (allows new content and updates without disruption)'],
          ['3. Dynamic Governance System (adapts to changes)', '3. Aligned to Major Standards (integrates ISO, ITIL, TOGAF, NIST, etc.)'],
          ['4. Governance Distinct from Management', '—'],
          ['5. Tailored to Enterprise Needs (using 11 design factors)', '—'],
          ['6. End-to-End Governance System', '—']
        ]
      },
      keyPoints: [
        'Governance System Principles (6) guide the actual implementation of governance in an enterprise.',
        'Governance Framework Principles (3) guide ISACA and framework designers in architecting COBIT itself.'
      ],
      examInsight: `Always remember: 6 System Principles vs 3 Framework Principles. A common exam MCQ asks: "Which of the following is a governance framework principle rather than a governance system principle?" The answer will be Conceptual Model, Open and Flexible, or Aligned to Major Standards.`
    },
    {
      title: '3. The Seven Governance System Components',
      summaryParagraph: `To satisfy governance and management objectives, an enterprise must establish, configure, and maintain seven interrelated components:`,
      keyPoints: [
        '1. Processes: An organized set of practices and activities to achieve specified objectives and produce a set of outputs in support of achieving overall IT-related goals.',
        '2. Organizational Structures: The key decision-making entities and reporting lines in an enterprise (e.g., Board, IT steering committee, CIO).',
        '3. Principles, Policies, and Frameworks: The vehicle to translate the desired behavior into practical guidance for day-to-day management.',
        '4. Information: Pervades any organization; includes all information produced and used by the enterprise (vital for decision making).',
        '5. Culture, Ethics, and Behavior: The mindset, attitudes, and cultural norms often underestimated as a success factor in governance activities.',
        '6. People, Skills, and Competencies: Required for good decision making, successful execution, and correct completion of all activities.',
        '7. Services, Infrastructure, and Applications: The physical infrastructure, technology platforms, software applications, and IT services that provide the computing capabilities.'
      ],
      examInsight: `COBIT views these 7 components holistically. Having great technology (Component 7) is useless if the enterprise lacks skilled people (Component 6), proper culture (Component 5), or clear processes (Component 1).`
    },
    {
      title: '4. The COBIT 2019 Core Model: 5 Domains and 40 Objectives',
      summaryParagraph: `The COBIT Core Model defines 40 Governance and Management Objectives organized across five distinct domains. There is exactly 1 Governance domain (5 objectives) and 4 Management domains (35 objectives).`,
      comparisonTable: {
        headers: ['Domain', 'Type', 'Count', 'Core Focus & Acronym Meaning'],
        rows: [
          ['EDM (Evaluate, Direct, Monitor)', 'Governance', '5 Objectives', 'Sole governance domain. Governed by Board. Evaluates options, directs strategy, monitors outcomes.'],
          ['APO (Align, Plan, Organize)', 'Management', '14 Objectives', 'Strategic IT management. Covers strategy, architecture, portfolio, innovation, budget, human resources, risk, security.'],
          ['BAI (Build, Acquire, Implement)', 'Management', '11 Objectives', 'Solutions delivery and transformation. Covers program/project management, requirements definition, software acquisition, change management.'],
          ['DSS (Deliver, Service, Support)', 'Management', '6 Objectives', 'Operational execution. Covers service operations, incident/problem requests, security operations, continuity, business data.'],
          ['MEA (Monitor, Evaluate, Assess)', 'Management', '4 Objectives', 'Management monitoring. Covers performance, internal control system, compliance with external requirements, assurance.']
        ]
      },
      keyPoints: [
        'Total Objectives = 40 (5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA).',
        'EDM is the ONLY domain belonging to Governance. APO, BAI, DSS, and MEA belong to Management.',
        'EDM01 (Ensured Governance Framework Setting), EDM02 (Benefits Delivery), EDM03 (Risk Optimization), EDM04 (Resource Optimization), EDM05 (Stakeholder Engagement).'
      ],
      examInsight: `Number to remember: 40 objectives in total, 1 governance domain (5 objectives) and 4 management domains (35 objectives). Learn the acronyms: EDM, APO, BAI, DSS, MEA.`
    },
    {
      title: '5. The COBIT Goals Cascade (Target Cascade)',
      summaryParagraph: `The COBIT Goals Cascade is the mechanism that translates stakeholder needs into actionable governance and management objectives through a 4-step hierarchy:`,
      processSteps: [
        { step: 1, title: 'Stakeholder Drivers and Needs', description: 'Originates from external environment (regulations, market) and internal drivers, translated into enterprise strategy.' },
        { step: 2, title: 'Enterprise Goals (13 EG)', description: 'Strategic business goals structured according to the balanced scorecard (Financial, Customer, Internal, Learning/Growth).' },
        { step: 3, title: 'Alignment Goals (13 AG)', description: 'IT-related goals that directly support the achievement of enterprise goals (formerly called IT Goals in COBIT 5).' },
        { step: 4, title: 'Governance and Management Objectives (40 GMO)', description: 'The 40 specific objectives in the COBIT core model required to satisfy the alignment goals.' }
      ],
      keyPoints: [
        'Stakeholder Needs -> Enterprise Goals (13) -> Alignment Goals (13) -> Governance & Management Objectives (40).',
        'Ensures traceability: every technical IT activity maps back to an alignment goal, which maps to an enterprise goal, which satisfies stakeholder drivers.'
      ],
      examInsight: `Examiners love testing the sequence of the Goals Cascade. Note the term change in COBIT 2019: what was called "IT-related goals" in COBIT 5 is now officially called "Alignment Goals" (13 goals).`
    },
    {
      title: '6. Design Factors (11) and Capability Levels (0–5)',
      summaryParagraph: `COBIT 2019 introduced 11 Design Factors that allow an enterprise to customize and tailor its governance system rather than adopting a one-size-fits-all model. Performance is measured using CMMI-aligned capability levels (0 to 5).`,
      keyPoints: [
        '11 Design Factors: 1. Enterprise Strategy, 2. Enterprise Goals, 3. Risk Profile, 4. I&T-Related Issues, 5. Threat Landscape, 6. Compliance Requirements, 7. Role of IT, 8. Sourcing Model, 9. IT Implementation Methods, 10. Technology Adoption Strategy, 11. Enterprise Size.',
        'Capability Levels (Process-level, CMMI-aligned):',
        'Level 0 (Incomplete): Work may or may not be completed; goals not met.',
        'Level 1 (Initial): Process largely achieves its purpose via incomplete activities.',
        'Level 2 (Managed): Process is planned, monitored, and adjusted; work products established.',
        'Level 3 (Defined): Process is well-defined using enterprise-wide standard procedures.',
        'Level 4 (Quantitatively Managed): Process is quantitatively measured and controlled with statistical metrics.',
        'Level 5 (Optimizing): Focus on continuous improvement and innovation.'
      ],
      examInsight: `Capability Levels apply to individual PROCESSES (0–5). Maturity Levels apply to overall FOCUS AREAS (0–5). Remember: 11 Design Factors enable tailoring!`
    }
  ],

  keyConcepts: [
    {
      id: 'c2-1',
      term: 'COBIT Core Model (5 Domains, 40 Objectives)',
      simpleExplanation: 'COBIT’s master structure of 40 goals split into 1 governance area (EDM) and 4 management areas (APO, BAI, DSS, MEA).',
      examDefinition: 'The COBIT 2019 Core Model consists of 40 Governance and Management Objectives categorized into five domains: Evaluate, Direct and Monitor (EDM - Governance), and Align, Plan and Organize (APO), Build, Acquire and Implement (BAI), Deliver, Service and Support (DSS), and Monitor, Evaluate and Assess (MEA) (Management).',
      whyItMatters: 'Provides an exhaustive, standardized taxonomy covering every aspect of enterprise IT governance and operations.',
      howItWorks: 'Organizations assess which of the 40 objectives are most critical based on their design factors and target cascade, then design components to meet them.',
      examKeywords: ['40 Objectives', '5 Domains', 'EDM', 'APO', 'BAI', 'DSS', 'MEA', 'Governance vs Management'],
      commonTrap: 'Listing MEA or APO as governance domains. Only EDM is a governance domain.',
      category: 'Core Model'
    },
    {
      id: 'c2-2',
      term: 'COBIT Goals Cascade',
      simpleExplanation: 'A 4-step translation chain: Stakeholder Needs -> Enterprise Goals -> Alignment Goals -> Governance/Management Objectives.',
      examDefinition: 'The COBIT Goals Cascade is the mechanism that supports the definition of priorities and governance objectives by translating stakeholder needs into 13 Enterprise Goals, which cascade into 13 Alignment Goals, which ultimately map to the 40 Governance and Management Objectives.',
      whyItMatters: 'Guarantees direct line-of-sight from technical IT configurations to stakeholder value creation and enterprise profitability.',
      howItWorks: 'Uses mapping tables with primary (P) and secondary (S) relationships between each tier of the cascade.',
      examKeywords: ['Stakeholder Needs', 'Enterprise Goals (13)', 'Alignment Goals (13)', 'Governance & Management Objectives (40)', 'Traceability'],
      commonTrap: 'Writing "IT Goals" instead of the COBIT 2019 term "Alignment Goals".',
      category: 'Methodology'
    },
    {
      id: 'c2-3',
      term: 'COBIT Design Factors (11 Factors)',
      simpleExplanation: '11 enterprise traits (like size, strategy, risk, cloud use) used to customize COBIT for a specific company.',
      examDefinition: 'Design Factors in COBIT 2019 are eleven context-specific enterprise parameters (such as enterprise strategy, risk profile, threat landscape, compliance requirements, role of IT, and sourcing models) that influence the design of an enterprise’s customized governance system.',
      whyItMatters: 'Prevents the fatal flaw of treating COBIT as a rigid, one-size-fits-all blueprint.',
      howItWorks: 'Inputting the 11 design factors into the COBIT Design Guide tool generates prioritized objectives and target capability levels.',
      examKeywords: ['11 Design Factors', 'Tailored governance system', 'Enterprise strategy', 'Risk profile', 'Threat landscape', 'Role of IT'],
      commonTrap: 'Confusing the 11 Design Factors with the 7 Governance System Components.',
      category: 'Governance Design'
    },
    {
      id: 'c2-4',
      term: 'COBIT Capability Levels (0 to 5)',
      simpleExplanation: 'A 6-level rating (0 to 5) measuring how mature and disciplined a specific IT process is, based on CMMI.',
      examDefinition: 'COBIT 2019 adopts the CMMI (Capability Maturity Model Integration) process capability scheme ranging from Level 0 (Incomplete) through Level 1 (Initial), Level 2 (Managed), Level 3 (Defined), Level 4 (Quantitatively Managed), to Level 5 (Optimizing).',
      whyItMatters: 'Enables objective benchmarking and gap analysis for IT process performance and regulatory compliance.',
      howItWorks: 'Activities associated with each governance/management objective are assigned target capability levels. A process achieves Level 3 only if all activities for levels 1, 2, and 3 are successfully executed.',
      examKeywords: ['CMMI-aligned', 'Level 0 to 5', 'Incomplete', 'Initial', 'Managed', 'Defined', 'Quantitatively Managed', 'Optimizing'],
      commonTrap: 'Starting capability levels at Level 1; in CMMI and COBIT, the scale begins at Level 0 (Incomplete).',
      category: 'Performance Measurement'
    }
  ],

  cheatSheet: {
    mustMemorize: [
      '5 Domains: EDM (5) = Governance. APO (14), BAI (11), DSS (6), MEA (4) = Management.',
      'Total Objectives: 40 Governance and Management Objectives.',
      '6 Governance System Principles: Stakeholder Value, Holistic Approach, Dynamic, Governance Distinct from Management, Tailored, End-to-End.',
      '3 Governance Framework Principles: Based on Conceptual Model, Open and Flexible, Aligned to Major Standards.',
      '7 Governance Components: Processes, Org Structures, Principles/Policies, Information, Culture/Ethics, People/Skills, Services/Infrastructure.',
      'Target Cascade: Stakeholder Drivers -> 13 Enterprise Goals -> 13 Alignment Goals -> 40 Governance/Management Objectives.',
      '11 Design Factors: Strategy, Goals, Risk Profile, I&T Issues, Threat Landscape, Compliance, Role of IT, Sourcing, Implementation Methods, Tech Adoption, Enterprise Size.',
      'Process Capability Levels: 0 (Incomplete), 1 (Initial), 2 (Managed), 3 (Defined), 4 (Quantitatively Managed), 5 (Optimizing).'
    ],
    coreDefinitions: [
      {
        term: 'COBIT 2019',
        definition: 'A comprehensive framework for Enterprise Governance of Information and Technology (EGIT) created by ISACA, aligning IT strategy with business goals.'
      },
      {
        term: 'Governance Objective',
        definition: 'An objective that relates to a governance process within the EDM domain, evaluated and directed by the governing body.'
      },
      {
        term: 'Management Objective',
        definition: 'An objective relating to an operational process within APO, BAI, DSS, or MEA, planned, built, run, and monitored by executive management.'
      },
      {
        term: 'Design Factor',
        definition: 'A specific contextual variable that influences the design, prioritization, and tailoring of an enterprise governance system.'
      }
    ],
    importantNumbers: [
      { number: '40', label: 'Core Objectives', context: '5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA.' },
      { number: '5', label: 'Domains', context: '1 Governance Domain (EDM) and 4 Management Domains (APO, BAI, DSS, MEA).' },
      { number: '6 vs 3', label: 'Principles', context: '6 Governance System Principles vs 3 Governance Framework Principles.' },
      { number: '7', label: 'Components', context: 'Processes, Org Structures, Policies, Information, Culture, People, Services/Infrastructure.' },
      { number: '13 + 13', label: 'Goals Cascade', context: '13 Enterprise Goals mapped to 13 Alignment Goals.' },
      { number: '11', label: 'Design Factors', context: 'Parameters used to customize and tailor the governance system.' },
      { number: '0 to 5', label: 'Capability Levels', context: 'CMMI process capability rating from Incomplete (0) to Optimizing (5).' }
    ],
    frameworkNames: [
      { acronym: 'COBIT', fullName: 'Control Objectives for Information and Related Technologies', focus: 'Enterprise Governance of Information and Technology (ISACA)' },
      { acronym: 'EDM', fullName: 'Evaluate, Direct and Monitor', focus: 'Sole governance domain in COBIT' },
      { acronym: 'APO', fullName: 'Align, Plan and Organize', focus: 'Management domain covering strategy, architecture, risk, security' },
      { acronym: 'BAI', fullName: 'Build, Acquire and Implement', focus: 'Management domain covering solutions, changes, projects' },
      { acronym: 'DSS', fullName: 'Deliver, Service and Support', focus: 'Management domain covering operational services and security operations' },
      { acronym: 'MEA', fullName: 'Monitor, Evaluate and Assess', focus: 'Management domain covering internal control assessment and compliance' }
    ],
    processes: [
      {
        name: 'COBIT Goals Cascade Flow',
        steps: [
          'Stakeholder Drivers & Needs: Derived from regulations, market dynamics, and competitive strategy.',
          'Enterprise Goals (13): Structured across Balanced Scorecard dimensions (Financial, Customer, Internal, Learning).',
          'Alignment Goals (13): Translate business objectives into IT-related outcomes.',
          'Governance & Management Objectives (40): Select and prioritize relevant objectives from the 5 domains.'
        ],
        description: 'Translates business aspirations into actionable IT governance and management practices.'
      },
      {
        name: 'COBIT Implementation Lifecycle (7 Phases)',
        steps: [
          'Phase 1: What are the drivers? (Initiate program)',
          'Phase 2: Where are we now? (Define problems & scope)',
          'Phase 3: Where do we want to be? (Define target state & gap analysis)',
          'Phase 4: What needs to be done? (Plan program & develop roadmap)',
          'Phase 5: How do we get there? (Execute plan & implement solutions)',
          'Phase 6: Did we get there? (Realize benefits & operate)',
          'Phase 7: How do we keep the momentum going? (Review effectiveness & sustain continual improvement)'
        ],
        description: 'Iterative 7-phase lifecycle for implementing and sustaining EGIT.'
      }
    ],
    comparisons: [
      {
        conceptA: 'Governance System Principles (6)',
        conceptB: 'Governance Framework Principles (3)',
        comparisonPoints: [
          { criterion: 'Target Audience', detailA: 'Enterprises implementing and operating a governance system', detailB: 'ISACA and framework authors building the framework architecture' },
          { criterion: 'Number', detailA: '6 principles', detailB: '3 principles' },
          { criterion: 'Core Focus', detailA: 'Stakeholder value, holistic, dynamic, distinct governance, tailored, end-to-end', detailB: 'Conceptual model, open & flexible, aligned to major standards' }
        ]
      },
      {
        conceptA: 'EDM Domain',
        conceptB: 'APO / BAI / DSS / MEA Domains',
        comparisonPoints: [
          { criterion: 'Classification', detailA: 'Governance', detailB: 'Management' },
          { criterion: 'Lead Responsibility', detailA: 'Governing Body / Board of Directors', detailB: 'Executive Management (CEO, CIO, CTO, IT Directors)' },
          { criterion: 'Core Role', detailA: 'Evaluate, Direct, Monitor', detailB: 'Plan, Build, Run, Monitor' },
          { criterion: 'Objective Count', detailA: '5 objectives (EDM01 to EDM05)', detailB: '35 objectives total across the 4 domains' }
        ]
      }
    ],
    examTraps: [
      {
        trap: 'Writing "Evaluate, Deliver and Monitor" for EDM.',
        truth: 'EDM is Evaluate, DIRECT and Monitor. Delivery belongs to DSS (Deliver, Service and Support).'
      },
      {
        trap: 'Confusing 6 System Principles with 3 Framework Principles.',
        truth: 'System principles describe how an enterprise governs. Framework principles describe how COBIT itself is constructed.'
      },
      {
        trap: 'Calling COBIT a technical standard like ISO 27001.',
        truth: 'COBIT is an overarching business framework that incorporates and aligns standards like ISO 27001 and ITIL.'
      }
    ],
    memoryShortcuts: [
      { acronym: 'EDM-APO-BAI-DSS-MEA', meaning: 'The 5 COBIT Domains', usage: '1 Governance domain + 4 Management domains.' },
      { acronym: 'PIPC-PSO', meaning: 'Processes, Information, Principles, Culture, People, Services, Org Structures', usage: 'The 7 Governance System Components.' },
      { acronym: 'SD -> EG -> AG -> GMO', meaning: 'Goals Cascade', usage: 'Stakeholder Drivers -> Enterprise Goals -> Alignment Goals -> Governance/Management Objectives.' }
    ]
  },

  importantQuestions: [
    {
      id: 'q2-1',
      unit: 2,
      question: 'Explain the structure of the COBIT 2019 Core Model, detailing the five domains and the distinction between governance and management objectives.',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'State the total number of objectives (40), list all 5 domains with their acronym expansions and objective counts, clearly designate EDM as the sole governance domain and the other four as management domains, and explain the roles of the Board versus Executive Management.',
      modelAnswer: `The COBIT 2019 Core Model organizes enterprise information and technology activities into 40 Governance and Management Objectives grouped into five discrete domains:

1. The Governance Domain (1 Domain, 5 Objectives):
- EDM: Evaluate, Direct and Monitor (EDM01 to EDM05).
- Accountable Body: Governing Body / Board of Directors.
- Mandate: Evaluates stakeholder needs and strategic options, directs executive management through prioritization and policy mandates, and monitors compliance and performance. It encompasses EDM01 (Governance Framework Setting), EDM02 (Benefits Delivery), EDM03 (Risk Optimization), EDM04 (Resource Optimization), and EDM05 (Stakeholder Engagement).

2. The Management Domains (4 Domains, 35 Objectives):
- APO: Align, Plan and Organize (14 Objectives, APO01 to APO14). Focuses on the overall organization, strategy, enterprise architecture, innovation, portfolio, budget, human resources, relationships, risk, and security management.
- BAI: Build, Acquire and Implement (11 Objectives, BAI01 to BAI11). Focuses on the definition, acquisition, development, and implementation of IT solutions, program/project management, availability/capacity, organizational change, and IT changes.
- DSS: Deliver, Service and Support (6 Objectives, DSS01 to DSS06). Focuses on operational delivery, service requests, incident/problem management, continuity, security operations, and business process controls.
- MEA: Monitor, Evaluate and Assess (4 Objectives, MEA01 to MEA04). Focuses on managerial oversight, performance monitoring, internal control system adequacy, compliance with external requirements, and independent assurance.

Distinction:
Governance (EDM) determines *what* the enterprise should achieve for stakeholders; Management (APO, BAI, DSS, MEA) operationalizes *how* to plan, build, run, and monitor activities to deliver those objectives.`,
      answerStructure: [
        '1. Total structure: 40 objectives across 5 domains.',
        '2. Governance domain: EDM (5 objectives), Board responsibility, Evaluate/Direct/Monitor.',
        '3. Four Management domains: APO (14), BAI (11), DSS (6), MEA (4) with key focus areas.',
        '4. Contrast between governance direction and management execution.'
      ],
      keywords: ['40 Objectives', 'EDM', 'APO', 'BAI', 'DSS', 'MEA', 'Evaluate, Direct and Monitor', 'Board of Directors', 'Executive Management', 'Governance vs Management'],
      commonMistakes: 'Stating that MEA is a governance domain, miscalculating the number of objectives, or expanding EDM as Evaluate, Deliver and Monitor.',
      selfCheckChecklist: [
        'Stated 40 objectives in total',
        'Listed all 5 domains with full acronym names',
        'Designated EDM as sole governance domain (5 objectives)',
        'Designated APO (14), BAI (11), DSS (6), MEA (4) as management domains'
      ]
    },
    {
      id: 'q2-2',
      unit: 2,
      question: 'Describe the COBIT 2019 Goals Cascade (Target Cascade) and explain how it creates alignment between business strategy and IT activities.',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'Diagram or step-by-step explanation of the 4 cascade stages: Stakeholder Drivers & Needs -> Enterprise Goals (13) -> Alignment Goals (13) -> Governance & Management Objectives (40). Must emphasize how mapping ensures strategic alignment and eliminates IT activities that do not generate business value.',
      modelAnswer: `The COBIT 2019 Goals Cascade (Target Cascade) is the structural mechanism that translates stakeholder needs into actionable governance and management practices. It operates through four sequential tiers:

1. Step 1: Stakeholder Drivers and Needs
Stakeholder needs (from shareholders, customers, regulators, employees) are driven by market developments, new technologies, regulatory requirements, and competitive pressures. These needs must be evaluated to form enterprise strategy.

2. Step 2: Enterprise Goals (13 Goals)
Stakeholder needs are translated into 13 standardized Enterprise Goals structured according to the four Balanced Scorecard (BSC) dimensions: Financial, Customer, Internal, and Learning & Growth. (Examples include Portfolio of competitive products, Compliance with external laws, and Managed business risk).

3. Step 3: Alignment Goals (13 Goals)
Enterprise goals cascade into 13 Alignment Goals (formerly known as IT-related goals in COBIT 5). These define the specific outcomes required from information and technology to directly achieve the enterprise goals. (Examples include Quality of technology services, Security of information, and Agility to turn business requirements into solutions).

4. Step 4: Governance and Management Objectives (40 Objectives)
Alignment goals map directly to the 40 Governance and Management Objectives within the COBIT Core Model (EDM, APO, BAI, DSS, MEA). Each alignment goal is supported by specific objectives classified as Primary (P) or Secondary (S).

Alignment Impact:
The cascade provides rigorous traceability: every operational IT process or control can be justified by tracing upwards to an Alignment Goal, then to an Enterprise Goal, and ultimately to a Stakeholder Need. It prevents IT from operating in a vacuum or investing in technologies that do not yield measurable business value.`,
      answerStructure: [
        '1. Purpose of the cascade (strategic alignment and value traceability).',
        '2. Step 1: Stakeholder Drivers and Needs.',
        '3. Step 2: Enterprise Goals (13 BSC-aligned goals).',
        '4. Step 3: Alignment Goals (13 IT-related goals).',
        '5. Step 4: Governance and Management Objectives (40 objectives).',
        '6. Concluding synthesis on business-IT alignment.'
      ],
      keywords: ['Goals Cascade', 'Target Cascade', 'Stakeholder Drivers', 'Enterprise Goals (13)', 'Alignment Goals (13)', 'Governance & Management Objectives (40)', 'Balanced Scorecard', 'Traceability'],
      commonMistakes: 'Referring to Alignment Goals as "IT goals" without mentioning the COBIT 2019 terminology, or skipping the Enterprise Goals tier.',
      selfCheckChecklist: [
        'Detailed all 4 stages in exact sequence',
        'Mentioned 13 Enterprise Goals and 13 Alignment Goals',
        'Mentioned the 40 Core Model objectives',
        'Explained the business value / traceability mechanism'
      ]
    },
    {
      id: 'q2-3',
      unit: 2,
      question: 'Contrast the Six Governance System Principles with the Three Governance Framework Principles in COBIT 2019.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'List both sets of principles accurately, explain the fundamental difference between a Governance System and a Governance Framework, and show why ISACA divided them in COBIT 2019.',
      modelAnswer: `COBIT 2019 explicitly differentiates between the principles governing an enterprise’s governance system and the principles used to design the COBIT framework itself:

A. Governance System Principles (6 Principles):
These guide an enterprise in designing, implementing, and operating its specific IT governance system:
1. Provide Stakeholder Value: Satisfying stakeholder needs and generating business value while balancing risk and resource utilization.
2. Holistic Approach: Built on seven interrelated components working together.
3. Dynamic Governance System: Adapts dynamically when enterprise strategy, technology, or risk changes.
4. Governance Distinct from Management: Maintaining a clear separation between EDM (governance) and PBRM (management).
5. Tailored to Enterprise Needs: Customized using the 11 design factors rather than adopting a generic template.
6. End-to-End Governance System: Encompassing all enterprise information and technology across all business functions.

B. Governance Framework Principles (3 Principles):
These guide framework developers (ISACA) in structuring the COBIT framework:
1. Based on Conceptual Model: The framework identifies key components and relationships to maximize consistency and automation.
2. Open and Flexible: Allows new content and concepts to be added without breaking the underlying model.
3. Aligned to Major Standards: Harmonizes with and cross-references standards like ITIL, TOGAF, ISO/IEC 27001, and NIST.`,
      answerStructure: [
        '1. Distinction between Governance System (enterprise application) and Framework (COBIT design).',
        '2. Listing and brief explanation of the 6 Governance System Principles.',
        '3. Listing and brief explanation of the 3 Governance Framework Principles.'
      ],
      keywords: ['Governance System Principles (6)', 'Governance Framework Principles (3)', 'Stakeholder Value', 'Holistic Approach', 'Dynamic', 'Distinct from Management', 'Tailored', 'End-to-End', 'Conceptual Model', 'Open and Flexible', 'Aligned to Standards'],
      commonMistakes: 'Mixing up which principle belongs to which category (e.g., claiming "Open and Flexible" is a system principle).',
      selfCheckChecklist: [
        'Explained the difference between system and framework principles',
        'Listed all 6 system principles',
        'Listed all 3 framework principles'
      ]
    },
    {
      id: 'q2-4',
      unit: 2,
      question: 'What are the CMMI-aligned process capability levels used in COBIT 2019, and what does Level 0 signify?',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 8,
      examinerExpectation: 'List all capability levels from 0 to 5, providing the formal CMMI name for each, and define Level 0 explicitly as Incomplete.',
      modelAnswer: `COBIT 2019 measures process performance using a CMMI-aligned capability level scale ranging from 0 to 5:

- Level 0: Incomplete — The process does not achieve its basic purpose; activities may or may not be completed, and little or no organized work product exists.
- Level 1: Initial — The process achieves its purpose through an incomplete or ad-hoc set of activities.
- Level 2: Managed — The process is planned, monitored, and adjusted; activities are performed in an organized manner and work products are properly established.
- Level 3: Defined — The process is standardized across the entire enterprise using defined organizational assets and standard operating procedures.
- Level 4: Quantitatively Managed — The process is monitored and controlled using quantitative measurements and statistical analysis.
- Level 5: Optimizing — The process is continuously improved and optimized through innovation and continuous learning.

Key Exam Note: Capability levels apply to individual processes (activities within an objective). Maturity levels apply to entire focus areas.`,
      answerStructure: [
        '1. State adoption of CMMI capability scale (0 to 5).',
        '2. Enumerate each level with its formal designation and meaning.',
        '3. Note distinction between process capability (0-5) and focus area maturity.'
      ],
      keywords: ['Capability Levels', 'CMMI', 'Level 0 Incomplete', 'Level 1 Initial', 'Level 2 Managed', 'Level 3 Defined', 'Level 4 Quantitatively Managed', 'Level 5 Optimizing'],
      commonMistakes: 'Beginning the scale at Level 1, omitting Level 0 (Incomplete), or confusing Level 2 (Managed) with Level 3 (Defined).',
      selfCheckChecklist: [
        'Started with Level 0 Incomplete',
        'Correctly listed Levels 1, 2, 3, 4, 5',
        'Noted CMMI alignment'
      ]
    }
  ],

  flashcards: [
    {
      id: 'fc2-1',
      unit: 2,
      front: 'The 5 COBIT 2019 Domains',
      back: 'Governance (1): EDM (Evaluate, Direct, Monitor)\nManagement (4): APO (Align, Plan, Organize), BAI (Build, Acquire, Implement), DSS (Deliver, Service, Support), MEA (Monitor, Evaluate, Assess).',
      category: 'Domains',
      examTip: 'EDM is the ONLY governance domain.'
    },
    {
      id: 'fc2-2',
      unit: 2,
      front: 'COBIT Core Model: Total Number of Objectives',
      back: '40 Objectives in total:\n- EDM: 5\n- APO: 14\n- BAI: 11\n- DSS: 6\n- MEA: 4',
      category: 'Objectives',
      examTip: 'Remember the formula: 5 + 14 + 11 + 6 + 4 = 40.'
    },
    {
      id: 'fc2-3',
      unit: 2,
      front: 'COBIT Goals Cascade: 4 Tiers',
      back: '1. Stakeholder Drivers & Needs\n2. Enterprise Goals (13 BSC goals)\n3. Alignment Goals (13 IT goals)\n4. Governance & Management Objectives (40 Core Objectives)',
      category: 'Target Cascade',
      examTip: 'In COBIT 2019, IT goals are called "Alignment Goals".'
    },
    {
      id: 'fc2-4',
      unit: 2,
      front: 'Six Governance System Principles',
      back: '1. Provide Stakeholder Value\n2. Holistic Approach\n3. Dynamic Governance System\n4. Governance Distinct from Management\n5. Tailored to Enterprise Needs\n6. End-to-End Governance System',
      category: 'Principles',
      examTip: 'Distinct from the 3 Framework principles!'
    },
    {
      id: 'fc2-5',
      unit: 2,
      front: 'Three Governance Framework Principles',
      back: '1. Based on Conceptual Model\n2. Open and Flexible\n3. Aligned to Major Standards',
      category: 'Principles',
      examTip: 'Applies to ISACA building COBIT, not the enterprise.'
    },
    {
      id: 'fc2-6',
      unit: 2,
      front: 'Seven Governance System Components',
      back: '1. Processes\n2. Organizational Structures\n3. Principles, Policies & Frameworks\n4. Information\n5. Culture, Ethics & Behavior\n6. People, Skills & Competencies\n7. Services, Infrastructure & Applications',
      category: 'Components',
      examTip: 'Work holistically to deliver governance objectives.'
    },
    {
      id: 'fc2-7',
      unit: 2,
      front: 'COBIT Process Capability Levels (0–5)',
      back: 'Level 0: Incomplete\nLevel 1: Initial\nLevel 2: Managed\nLevel 3: Defined\nLevel 4: Quantitatively Managed\nLevel 5: Optimizing',
      category: 'Capability',
      examTip: 'Based on CMMI. Always starts at 0, not 1.'
    },
    {
      id: 'fc2-8',
      unit: 2,
      front: 'COBIT Design Factors (Count & Purpose)',
      back: '11 Design Factors.\nUsed to tailor and customize the governance system to enterprise context (e.g., enterprise strategy, role of IT, threat landscape, sourcing model).',
      category: 'Design Factors',
      examTip: 'COBIT is never one-size-fits-all!'
    }
  ],

  activeRecall: [
    {
      id: 'ar2-1',
      question: 'What are the five domains of COBIT 2019, how many objectives are in each, and which one is the sole governance domain?',
      answer: 'EDM (5 objectives) - sole governance domain. APO (14 objectives), BAI (11 objectives), DSS (6 objectives), MEA (4 objectives) - management domains. Total = 40 objectives.',
      keywords: ['EDM (5)', 'APO (14)', 'BAI (11)', 'DSS (6)', 'MEA (4)', '40 objectives']
    },
    {
      id: 'ar2-2',
      question: 'State the four sequential tiers of the COBIT 2019 Target (Goals) Cascade.',
      answer: '1. Stakeholder Drivers and Needs -> 2. Enterprise Goals (13) -> 3. Alignment Goals (13) -> 4. Governance and Management Objectives (40).',
      keywords: ['Stakeholder Needs', 'Enterprise Goals (13)', 'Alignment Goals (13)', 'Objectives (40)']
    },
    {
      id: 'ar2-3',
      question: 'Name the 3 Governance Framework Principles in COBIT 2019.',
      answer: '1. Based on Conceptual Model, 2. Open and Flexible, 3. Aligned to Major Standards.',
      keywords: ['Conceptual Model', 'Open and Flexible', 'Aligned to Major Standards']
    },
    {
      id: 'ar2-4',
      question: 'What are the capability levels from 0 to 5 in COBIT 2019?',
      answer: '0: Incomplete, 1: Initial, 2: Managed, 3: Defined, 4: Quantitatively Managed, 5: Optimizing.',
      keywords: ['0 Incomplete', '1 Initial', '2 Managed', '3 Defined', '4 Quantitatively Managed', '5 Optimizing']
    }
  ],

  completionChecklist: [
    'Can recite the 5 domains and 40 objectives count (EDM: 5, APO: 14, BAI: 11, DSS: 6, MEA: 4)',
    'Can differentiate the 6 Governance System Principles from the 3 Governance Framework Principles',
    'Can list all 7 Governance System Components',
    'Can explain the 4-step Goals Cascade (Stakeholder -> Enterprise -> Alignment -> Objectives)',
    'Know the 11 Design Factors that customize governance',
    'Can list CMMI capability levels from 0 (Incomplete) to 5 (Optimizing)',
    'Achieved at least 80% on Unit 2 MCQ Practice'
  ],

  mcqs: [
    {
      id: 'u2-mcq-1',
      unit: 2,
      topic: 'COBIT Domains',
      question: 'Which of the following is the SOLE governance domain in the COBIT 2019 Core Model?',
      options: {
        A: 'Align, Plan and Organize (APO)',
        B: 'Evaluate, Direct and Monitor (EDM)',
        C: 'Monitor, Evaluate and Assess (MEA)',
        D: 'Deliver, Service and Support (DSS)'
      },
      correctAnswer: 'B',
      explanation: 'In COBIT 2019, EDM (Evaluate, Direct and Monitor) is the only governance domain. APO, BAI, DSS, and MEA are management domains.',
      memoryTip: 'EDM = The only Governance domain.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-2',
      unit: 2,
      topic: 'Core Model Numbers',
      question: 'What is the total number of Governance and Management Objectives defined in the COBIT 2019 Core Model?',
      options: {
        A: '34',
        B: '37',
        C: '40',
        D: '48'
      },
      correctAnswer: 'C',
      explanation: 'The COBIT 2019 Core Model contains exactly 40 objectives: 5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA = 40.',
      memoryTip: '40 total objectives in COBIT 2019 (COBIT 5 had 37).',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-3',
      unit: 2,
      topic: 'Domain Breakdown',
      question: 'How many management objectives belong to the Align, Plan and Organize (APO) domain in COBIT 2019?',
      options: {
        A: '5',
        B: '6',
        C: '11',
        D: '14'
      },
      correctAnswer: 'D',
      explanation: 'The APO domain contains 14 management objectives (APO01 to APO14), making it the largest domain in COBIT.',
      memoryTip: 'APO = 14 objectives (Strategy, Architecture, Portfolio, Risk, etc.).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-4',
      unit: 2,
      topic: 'Principles Distinction',
      question: 'Which of the following is one of the THREE Governance Framework Principles (as opposed to a Governance System Principle)?',
      options: {
        A: 'Provide Stakeholder Value',
        B: 'Open and Flexible',
        C: 'Dynamic Governance System',
        D: 'Holistic Approach'
      },
      correctAnswer: 'B',
      explanation: 'The three Governance Framework principles are: 1. Based on Conceptual Model, 2. Open and Flexible, 3. Aligned to Major Standards. The others are Governance System principles.',
      memoryTip: 'Framework principles: Conceptual Model, Open & Flexible, Aligned to Standards.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-5',
      unit: 2,
      topic: 'Target Cascade',
      question: 'In COBIT 2019, what term replaced "IT-related goals" from COBIT 5 in the Goals Cascade?',
      options: {
        A: 'Digital Goals',
        B: 'Alignment Goals',
        C: 'Operational Targets',
        D: 'Enabler Goals'
      },
      correctAnswer: 'B',
      explanation: 'COBIT 2019 renamed "IT-related goals" to "Alignment Goals" to emphasize that IT goals exist solely to align with and support enterprise goals.',
      memoryTip: 'COBIT 5 IT-related goals -> COBIT 2019 Alignment Goals (13).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-6',
      unit: 2,
      topic: 'Governance System Components',
      question: 'How many Governance System Components are defined in COBIT 2019 (formerly known as "Enablers" in COBIT 5)?',
      options: {
        A: 'Four',
        B: 'Six',
        C: 'Seven',
        D: 'Eleven'
      },
      correctAnswer: 'C',
      explanation: 'There are 7 Governance System Components: 1. Processes, 2. Organizational Structures, 3. Principles/Policies/Frameworks, 4. Information, 5. Culture/Ethics/Behavior, 6. People/Skills/Competencies, 7. Services/Infrastructure/Applications.',
      memoryTip: '7 Components of a Governance System.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-7',
      unit: 2,
      topic: 'Design Factors',
      question: 'How many Design Factors are provided in COBIT 2019 to tailor an enterprise governance system?',
      options: {
        A: '7',
        B: '11',
        C: '13',
        D: '40'
      },
      correctAnswer: 'B',
      explanation: 'COBIT 2019 introduces 11 Design Factors (e.g., Enterprise Strategy, Threat Landscape, Role of IT, Sourcing Model) to customize the governance system.',
      memoryTip: '11 Design Factors for tailoring.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-8',
      unit: 2,
      topic: 'Capability Levels',
      question: 'COBIT 2019 process capability measurement adopts which international model and capability rating scale?',
      options: {
        A: 'ISO 9001 scale from 1 to 10',
        B: 'CMMI-aligned capability levels from 0 to 5',
        C: 'Six Sigma DMAIC levels from 1 to 5',
        D: 'ITIL Maturity matrix from A to F'
      },
      correctAnswer: 'B',
      explanation: 'COBIT 2019 aligns with the CMMI process capability model, utilizing levels from 0 (Incomplete) to 5 (Optimizing).',
      memoryTip: 'COBIT capability = CMMI 0 to 5.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-9',
      unit: 2,
      topic: 'Capability Levels',
      question: 'What capability level is achieved when a process is "well-defined using enterprise-wide standard procedures"?',
      options: {
        A: 'Level 1 (Initial)',
        B: 'Level 2 (Managed)',
        C: 'Level 3 (Defined)',
        D: 'Level 4 (Quantitatively Managed)'
      },
      correctAnswer: 'C',
      explanation: 'Level 3 is formally defined as "Defined"—meaning the process is standardized across the organization using established organizational assets.',
      memoryTip: 'Level 2 = Managed locally. Level 3 = Defined organization-wide.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-10',
      unit: 2,
      topic: 'Domain Responsibilities',
      question: 'An enterprise is setting up its IT change enablement and software acquisition procedures. Which COBIT domain contains these management objectives?',
      options: {
        A: 'EDM',
        B: 'APO',
        C: 'BAI',
        D: 'DSS'
      },
      correctAnswer: 'C',
      explanation: 'BAI (Build, Acquire and Implement) contains objectives related to acquiring software, managing programs/projects, and managing IT changes (e.g., BAI06 Managed IT Changes).',
      memoryTip: 'Building, acquiring, changes = BAI.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-11',
      unit: 2,
      topic: 'Domain Responsibilities',
      question: 'Incident management, service desk requests, and IT security operations fall under which COBIT 2019 domain?',
      options: {
        A: 'DSS (Deliver, Service and Support)',
        B: 'BAI (Build, Acquire and Implement)',
        C: 'APO (Align, Plan and Organize)',
        D: 'MEA (Monitor, Evaluate and Assess)'
      },
      correctAnswer: 'A',
      explanation: 'Operational execution, day-to-day service delivery, helpdesk requests, and operational security controls belong to DSS (Deliver, Service and Support).',
      memoryTip: 'Operational services, incidents & security = DSS.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-12',
      unit: 2,
      topic: 'Domain Responsibilities',
      question: 'Which COBIT domain contains the objective "Managed System of Internal Control" and "Managed Compliance with External Requirements"?',
      options: {
        A: 'MEA (Monitor, Evaluate and Assess)',
        B: 'EDM (Evaluate, Direct and Monitor)',
        C: 'APO (Align, Plan and Organize)',
        D: 'BAI (Build, Acquire and Implement)'
      },
      correctAnswer: 'A',
      explanation: 'MEA focuses on monitoring performance, evaluating internal controls (MEA02), and assessing compliance with external laws and regulations (MEA03).',
      memoryTip: 'Monitoring, controls assessment & compliance = MEA.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-13',
      unit: 2,
      topic: 'Target Cascade Sequence',
      question: 'What is the correct sequence of tiers in the COBIT 2019 Goals Cascade?',
      options: {
        A: 'Enterprise Goals -> Alignment Goals -> Stakeholder Drivers -> Objectives',
        B: 'Stakeholder Drivers & Needs -> Enterprise Goals -> Alignment Goals -> Governance/Management Objectives',
        C: 'Alignment Goals -> Enterprise Goals -> Objectives -> Stakeholder Drivers',
        D: 'Governance Objectives -> Management Objectives -> Enterprise Goals -> IT Goals'
      },
      correctAnswer: 'B',
      explanation: 'The sequence is: Stakeholder Drivers & Needs -> Enterprise Goals (13) -> Alignment Goals (13) -> Governance and Management Objectives (40).',
      memoryTip: 'Needs -> Enterprise Goals -> Alignment Goals -> Objectives.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-14',
      unit: 2,
      topic: 'Enterprise Goals',
      question: 'How many Enterprise Goals are defined in the COBIT 2019 Goals Cascade, and how are they structured?',
      options: {
        A: '7 goals structured by ITIL practices',
        B: '13 goals structured across the 4 Balanced Scorecard dimensions',
        C: '40 goals structured across the 5 COBIT domains',
        D: '11 goals structured by Design Factors'
      },
      correctAnswer: 'B',
      explanation: 'COBIT 2019 defines 13 Enterprise Goals structured across the 4 Balanced Scorecard dimensions: Financial, Customer, Internal, and Learning & Growth.',
      memoryTip: '13 Enterprise Goals structured by Balanced Scorecard.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-15',
      unit: 2,
      topic: 'Alignment Goals',
      question: 'How many Alignment Goals are defined in COBIT 2019?',
      options: {
        A: '5',
        B: '11',
        C: '13',
        D: '34'
      },
      correctAnswer: 'C',
      explanation: 'COBIT 2019 defines exactly 13 Alignment Goals that map between the 13 Enterprise Goals and the 40 Governance and Management Objectives.',
      memoryTip: '13 Enterprise Goals map to 13 Alignment Goals.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-16',
      unit: 2,
      topic: 'EDM Objectives',
      question: 'Which of the following is NOT an EDM governance objective in COBIT 2019?',
      options: {
        A: 'EDM01 Ensured Governance Framework Setting and Maintenance',
        B: 'EDM02 Ensured Benefits Delivery',
        C: 'EDM03 Ensured Risk Optimization',
        D: 'EDM06 Ensured Continuous Delivery of Software'
      },
      correctAnswer: 'D',
      explanation: 'There are only 5 EDM objectives: EDM01 (Framework Setting), EDM02 (Benefits Delivery), EDM03 (Risk Optimization), EDM04 (Resource Optimization), and EDM05 (Stakeholder Engagement). There is no EDM06.',
      memoryTip: 'EDM has exactly 5 objectives (EDM01 to EDM05).',
      difficulty: 'Mastery'
    },
    {
      id: 'u2-mcq-17',
      unit: 2,
      topic: 'Design Factors',
      question: 'If a bank operates under strict banking supervision and criminal penalties for data leakage, which Design Factor is primarily driving high target capability levels for security and compliance objectives?',
      options: {
        A: 'Design Factor 6: Compliance Requirements',
        B: 'Design Factor 9: IT Implementation Methods',
        C: 'Design Factor 11: Enterprise Size',
        D: 'Design Factor 10: Technology Adoption Strategy'
      },
      correctAnswer: 'A',
      explanation: 'Design Factor 6 (Compliance Requirements) assesses the stringency of legal and regulatory compliance, directly inflating priority for MEA03 (Compliance) and APO13 (Security).',
      memoryTip: 'Strict external laws = Design Factor 6 (Compliance Requirements).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-18',
      unit: 2,
      topic: 'Implementation Lifecycle',
      question: 'How many phases comprise the COBIT 2019 Implementation Lifecycle?',
      options: {
        A: '3 phases',
        B: '5 phases',
        C: '7 phases',
        D: '12 phases'
      },
      correctAnswer: 'C',
      explanation: 'The COBIT Implementation Lifecycle consists of 7 cyclical phases (from "What are the drivers?" through "How do we keep the momentum going?").',
      memoryTip: '7 phases in the COBIT implementation lifecycle.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-19',
      unit: 2,
      topic: 'Implementation Lifecycle',
      question: 'In the COBIT 7-phase implementation lifecycle, Phase 2 asks "Where are we now?". What is its primary governance activity?',
      options: {
        A: 'Purchasing commercial off-the-shelf software',
        B: 'Assessing current process capability and identifying existing pain points',
        C: 'Disbanding the IT Steering Committee',
        D: 'Writing code for automated test suites'
      },
      correctAnswer: 'B',
      explanation: 'Phase 2 ("Where are we now?") evaluates the current state (as-is baseline) by assessing current process capability levels and identifying enterprise pain points.',
      memoryTip: 'Phase 2 = As-Is assessment of current capability.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-20',
      unit: 2,
      topic: 'Governance System Principles',
      question: 'The Governance System Principle "Holistic Approach" means that:',
      options: {
        A: 'Only software algorithms are evaluated.',
        B: 'A governance system requires all seven components to interact and work together effectively.',
        C: 'The Board makes all decisions without input from executives.',
        D: 'The organization uses cloud services exclusively.'
      },
      correctAnswer: 'B',
      explanation: 'A holistic governance system is built from seven components (processes, people, information, culture, infrastructure, etc.) that function synergistically.',
      memoryTip: 'Holistic = All 7 components working together.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-21',
      unit: 2,
      topic: 'Governance vs Management in COBIT',
      question: 'Under COBIT 2019, which entity is accountable for setting direction through prioritization and decision making?',
      options: {
        A: 'Governance (Governing Body / Board)',
        B: 'Management (Lead Developer)',
        C: 'External cloud vendors',
        D: 'Tier 1 Helpdesk Agents'
      },
      correctAnswer: 'A',
      explanation: 'Setting direction through prioritization and high-level decision making is a core governance responsibility of the governing body (Board).',
      memoryTip: 'Setting direction = Governance / Board.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-22',
      unit: 2,
      topic: 'COBIT 2019 Core Focus',
      question: 'Does COBIT 2019 claim to make business decisions or determine the specific technical architecture for an enterprise?',
      options: {
        A: 'Yes, COBIT dictates the exact programming languages and server vendors.',
        B: 'No, COBIT provides a governance and management framework to guide decision making, but does not dictate specific business strategies or technical designs.',
        C: 'Yes, but only for financial institutions.',
        D: 'No, COBIT only applies to non-profit organizations.'
      },
      correctAnswer: 'B',
      explanation: 'COBIT does not make business decisions or dictate technology architectures; it provides the framework, processes, and guidance to enable enterprises to govern and manage IT effectively.',
      memoryTip: 'COBIT guides decision making; it never dictates specific technical brands.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-23',
      unit: 2,
      topic: 'Role of IT Design Factor',
      question: 'Design Factor 7 evaluates the "Role of IT" according to which established quadrant model?',
      options: {
        A: 'Porter’s Five Forces',
        B: 'McFarlan’s Strategic Grid (Support, Factory, Turnaround, Strategic)',
        C: 'Deming PDCA Quadrant',
        D: 'Maslow’s Hierarchy of Needs'
      },
      correctAnswer: 'B',
      explanation: 'Design Factor 7 utilizes McFarlan’s Strategic Grid, categorizing IT into: Support, Factory, Turnaround, or Strategic.',
      memoryTip: 'Role of IT uses McFarlan’s Grid (Support, Factory, Turnaround, Strategic).',
      difficulty: 'Mastery'
    },
    {
      id: 'u2-mcq-24',
      unit: 2,
      topic: 'Capability Level 4',
      question: 'In COBIT 2019 process capability assessment, what distinguishes Level 4 (Quantitatively Managed) from Level 3 (Defined)?',
      options: {
        A: 'Level 4 processes are completely undocumented.',
        B: 'Level 4 processes are measured and controlled using statistical metrics and quantitative techniques.',
        C: 'Level 4 requires all staff to hold PhDs.',
        D: 'Level 4 means the process is outsourced to a public cloud.'
      },
      correctAnswer: 'B',
      explanation: 'Level 3 means standard processes are defined. Level 4 adds quantitative, statistical measurement and control over process performance.',
      memoryTip: 'Level 4 = Statistical & Quantitative control.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-25',
      unit: 2,
      topic: 'MEA Domain',
      question: 'How many objectives are in the MEA (Monitor, Evaluate and Assess) domain in COBIT 2019?',
      options: {
        A: '4',
        B: '5',
        C: '6',
        D: '11'
      },
      correctAnswer: 'A',
      explanation: 'MEA contains exactly 4 objectives: MEA01 (Performance & Conformance), MEA02 (Internal Control System), MEA03 (Compliance with External Requirements), and MEA04 (Assurance).',
      memoryTip: 'MEA = 4 objectives.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-26',
      unit: 2,
      topic: 'DSS Domain',
      question: 'How many objectives are in the DSS (Deliver, Service and Support) domain?',
      options: {
        A: '4',
        B: '6',
        C: '11',
        D: '14'
      },
      correctAnswer: 'B',
      explanation: 'DSS contains 6 objectives (DSS01 to DSS06: Operations, Service Requests/Incidents, Problems, Continuity, Security Services, Business Process Controls).',
      memoryTip: 'DSS = 6 objectives.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-27',
      unit: 2,
      topic: 'BAI Domain',
      question: 'How many objectives are in the BAI (Build, Acquire and Implement) domain?',
      options: {
        A: '5',
        B: '6',
        C: '11',
        D: '14'
      },
      correctAnswer: 'C',
      explanation: 'BAI contains 11 objectives (BAI01 Programs, BAI02 Requirements, BAI03 Solutions, BAI04 Availability/Capacity, BAI05 Organizational Change, BAI06 IT Changes, etc.).',
      memoryTip: 'BAI = 11 objectives.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-28',
      unit: 2,
      topic: 'Governance System Principles',
      question: 'Which Governance System Principle states that a governance system should cover all enterprise information and technology across all business functions rather than just the IT department?',
      options: {
        A: 'End-to-End Governance System',
        B: 'Based on Conceptual Model',
        C: 'Open and Flexible',
        D: 'CMMI Alignment'
      },
      correctAnswer: 'A',
      explanation: 'The principle "End-to-End Governance System" mandates that governance must encompass all technology and information processing across the entire enterprise.',
      memoryTip: 'Enterprise-wide coverage = End-to-End Governance System.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-29',
      unit: 2,
      topic: 'COBIT vs Standards',
      question: 'How does COBIT 2019 relate to technical frameworks like ITIL and ISO/IEC 27001?',
      options: {
        A: 'COBIT invalidates and bans their use.',
        B: 'COBIT acts as an overarching governance umbrella, aligning and referencing these specialized frameworks.',
        C: 'COBIT is identical in every detail to ITIL.',
        D: 'COBIT only allows ISO standards to be read by the Board.'
      },
      correctAnswer: 'B',
      explanation: 'COBIT does not replace specialized standards; it acts as an overarching governance framework that integrates, maps, and aligns them (e.g., ITIL for services, ISO 27001 for security).',
      memoryTip: 'COBIT = The overarching governance umbrella.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-30',
      unit: 2,
      topic: 'Design Factors',
      question: 'Design Factor 8 examines "Sourcing Model". What are the typical sourcing models evaluated?',
      options: {
        A: 'Waterwall, Agile, DevOps',
        B: 'Outsourcing, Cloud, Insourced / Shared Services',
        C: 'Single-tier, Multi-tier, Peer-to-peer',
        D: 'Direct, Indirect, Dual'
      },
      correctAnswer: 'B',
      explanation: 'Design Factor 8 evaluates how the enterprise obtains IT services: insourced, outsourced, cloud computing, or hybrid/shared services.',
      memoryTip: 'Sourcing = Insourced vs Cloud vs Outsourced.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-31',
      unit: 2,
      topic: 'Process Capability Level 5',
      question: 'What is the highest capability level achievable by a process in COBIT 2019?',
      options: {
        A: 'Level 3 Defined',
        B: 'Level 4 Managed',
        C: 'Level 5 Optimizing',
        D: 'Level 6 Perfected'
      },
      correctAnswer: 'C',
      explanation: 'The highest capability level in the CMMI scheme is Level 5: Optimizing, where the process is continuously improved through innovative improvements.',
      memoryTip: 'Level 5 = Optimizing (highest).',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-32',
      unit: 2,
      topic: 'APO Domain Objectives',
      question: 'Which objective in the APO domain specifically addresses "Managed Information Security"?',
      options: {
        A: 'APO01',
        B: 'APO12',
        C: 'APO13',
        D: 'APO14'
      },
      correctAnswer: 'C',
      explanation: 'APO13 is "Managed Security" in COBIT 2019. APO12 is "Managed Risk", and APO14 is "Managed Data".',
      memoryTip: 'APO12 = Risk; APO13 = Security; APO14 = Data.',
      difficulty: 'Mastery'
    },
    {
      id: 'u2-mcq-33',
      unit: 2,
      topic: 'Culture, Ethics and Behavior',
      question: 'Why does COBIT 2019 include "Culture, Ethics and Behavior" as one of the seven governance components?',
      options: {
        A: 'Because corporate governance mandates religious services.',
        B: 'Because human attitudes and organizational culture are critical determinants of whether governance controls succeed or are bypassed.',
        C: 'Because it is required by the U.S. Patent Office.',
        D: 'To reduce the costs of computer hardware.'
      },
      correctAnswer: 'B',
      explanation: 'Culture, ethics, and behavior shape how individuals comply with policies and controls. Without a supportive ethical culture, even well-engineered technical controls fail.',
      memoryTip: 'Culture determines whether controls succeed or get bypassed.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-34',
      unit: 2,
      topic: 'Dynamic Governance System Principle',
      question: 'The Governance System Principle "Dynamic Governance System" means that:',
      options: {
        A: 'The governance system must reboot every 24 hours.',
        B: 'Whenever enterprise strategy, threats, or business models change, the governance system must be updated to account for the impact.',
        C: 'The Board changes its members weekly.',
        D: 'Dynamic memory allocation is used on servers.'
      },
      correctAnswer: 'B',
      explanation: 'A dynamic governance system considers the impact of changes in enterprise strategy or technology, adjusting design factors and capability targets accordingly.',
      memoryTip: 'Dynamic = Adjusts when business strategy or threats change.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-35',
      unit: 2,
      topic: 'Governance Framework Principle',
      question: 'The Governance Framework Principle "Based on a Conceptual Model" requires that:',
      options: {
        A: 'COBIT cannot be written in English.',
        B: 'The framework identifies key components and relationships to optimize consistency and allow automation.',
        C: 'All concepts must be purely theoretical without practical use.',
        D: 'The framework must only run on mainframe computers.'
      },
      correctAnswer: 'B',
      explanation: 'A conceptual model identifies the key components and relationships, ensuring logical consistency and enabling software tools to automate governance design.',
      memoryTip: 'Conceptual Model = Identifies key components and relationships consistently.',
      difficulty: 'Mastery'
    },
    {
      id: 'u2-mcq-36',
      unit: 2,
      topic: 'EDM03 Objective',
      question: 'What is the specific focus of the governance objective EDM03 in COBIT 2019?',
      options: {
        A: 'Ensured Risk Optimization',
        B: 'Managed Service Requests',
        C: 'Managed Human Resources',
        D: 'Ensured Vendor Profits'
      },
      correctAnswer: 'A',
      explanation: 'EDM03 is "Ensured Risk Optimization", where the governing body sets risk appetite and tolerance thresholds and monitors IT risk exposure.',
      memoryTip: 'EDM02 = Benefits; EDM03 = Risk Optimization; EDM04 = Resource Optimization.',
      difficulty: 'Mastery'
    },
    {
      id: 'u2-mcq-37',
      unit: 2,
      topic: 'COBIT 2019 Publishing Organization',
      question: 'Which professional association develops and maintains the COBIT framework?',
      options: {
        A: 'ISO (International Organization for Standardization)',
        B: 'ISACA (Information Systems Audit and Control Association)',
        C: 'BSI (Federal Office for Information Security)',
        D: 'Axelos'
      },
      correctAnswer: 'B',
      explanation: 'ISACA (Information Systems Audit and Control Association) creates and maintains COBIT.',
      memoryTip: 'COBIT is developed by ISACA.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-38',
      unit: 2,
      topic: 'Tailored Governance Principle',
      question: 'Why does COBIT 2019 insist that a governance system must be "Tailored to Enterprise Needs"?',
      options: {
        A: 'Because identical governance systems across companies violate antitrust laws.',
        B: 'Because every enterprise has different strategies, risk profiles, regulatory constraints, and sizes; a generic system fails.',
        C: 'To force companies to hire expensive consultants.',
        D: 'Because open source software requires tailoring.'
      },
      correctAnswer: 'B',
      explanation: 'Every organization operates in a unique context. Tailoring using design factors ensures governance matches specific enterprise risks, strategy, and resources.',
      memoryTip: 'Tailored = Fits unique organizational context, strategy, and risk.',
      difficulty: 'Foundation'
    },
    {
      id: 'u2-mcq-39',
      unit: 2,
      topic: 'Implementation Lifecycle Phase 7',
      question: 'In the COBIT 7-phase implementation lifecycle, what is the core question asked in Phase 7?',
      options: {
        A: '"What are the drivers?"',
        B: '"Where do we want to be?"',
        C: '"How do we keep the momentum going?"',
        D: '"How much did the project cost?"'
      },
      correctAnswer: 'C',
      explanation: 'Phase 7 asks "How do we keep the momentum going?", focusing on embedding changes into operational culture and sustaining continual improvement.',
      memoryTip: 'Phase 7 = How do we keep momentum going? (Sustain).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u2-mcq-40',
      unit: 2,
      topic: 'Alignment Goals Count',
      question: 'In mapping the Goals Cascade, how many Alignment Goals directly link to the 40 Governance and Management Objectives?',
      options: {
        A: '7',
        B: '11',
        C: '13',
        D: '25'
      },
      correctAnswer: 'C',
      explanation: 'There are 13 Alignment Goals in COBIT 2019, which link directly to the 40 Governance and Management Objectives.',
      memoryTip: '13 Alignment Goals.',
      difficulty: 'Foundation'
    }
  ]
};
