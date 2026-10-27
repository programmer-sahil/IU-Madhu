import { UnitData } from '../../types';

export const unit4Data: UnitData = {
  id: 4,
  code: 'DLMIGCR01-01_E-U4',
  title: 'Basic IT Protection According to BSI',
  subtitle: 'The German BSI IT-Grundschutz Framework, BSI Standards 200-x & Protection Requirements',
  estimatedTime: '4.0 Hours',
  color: 'amber',
  gradient: 'from-amber-600 via-orange-600 to-indigo-950',
  badge: 'BSI & Methodology',
  overview: `Unit 4 covers the rigorous German national information security methodology: BSI IT-Grundschutz developed by the Federal Office for Information Security (Bundesamt für Sicherheit in der Informationstechnik - BSI). It covers the BSI 200-x standards (BSI 200-1 for ISMS, BSI 200-2 for IT-Grundschutz methodology, BSI 200-3 for supplementary risk analysis, and BSI 100-4/200-4 for Business Continuity & Emergency Management), the 6-step implementation workflow, protection requirement categories (Normal, High, Very High) across the CIA triad, the Maximum Principle and its modifying Accumulation and Distribution Effects, requirement tiers (Core, Standard, High-level), and business continuity / disaster recovery.`,

  summarySections: [
    {
      title: '1. What is BSI IT-Grundschutz & The BSI Standard Family',
      summaryParagraph: `BSI IT-Grundschutz is a globally respected, modular information security standard established by the German federal government (BSI). It provides a practical, structured approach to establishing an Information Security Management System (ISMS) compatible with ISO/IEC 27001, but offers pre-packaged, standardized security modules (the IT-Grundschutz Compendium) eliminating the need for every organization to invent controls from scratch.`,
      keyPoints: [
        'BSI 200-1: General requirements for an Information Security Management System (ISMS). Defines the overarching governance framework, management responsibilities, and ISMS lifecycle, harmonized with ISO/IEC 27001.',
        'BSI 200-2: IT-Grundschutz Methodology. Explains the concrete steps to implement IT-Grundschutz. Outlines three implementation approaches: Basic Protection (Basis-Absicherung), Core Protection (Kern-Absicherung for crown jewels), and Standard Protection (Standard-Absicherung).',
        'BSI 200-3: Risk Analysis based on IT-Grundschutz. Specifies the methodology for supplementary risk analysis when components have High or Very High protection requirements or cannot be modeled with standard compendium modules.',
        'BSI 100-4 / 200-4: Business Continuity Management (BCM) and Emergency Management (Notfallmanagement). Details business impact analysis (BIA), disaster recovery, and continuity planning.'
      ],
      examInsight: `Number & Standard Matching Trap: BSI 200-1 = ISMS Requirements; BSI 200-2 = Methodology (Basic, Core, Standard); BSI 200-3 = Risk Analysis; BSI 100-4/200-4 = Emergency / BCM. Memorize these exact standard numbers!`
    },
    {
      title: '2. The Six-Step IT-Grundschutz Implementation Process',
      summaryParagraph: `Under BSI 200-2, implementing IT-Grundschutz follows a strict, repeatable six-phase process:`,
      processSteps: [
        { step: 1, title: 'Structural Analysis (Strukturanalyse)', description: 'Cataloging the enterprise information domain: business processes, applications, IT systems, networks, rooms, and infrastructure components into a structured inventory.' },
        { step: 2, title: 'Determination of Protection Requirements (Schutzbedarfsfeststellung)', description: 'Evaluating the required level of protection (Normal, High, Very High) across the CIA triad (Confidentiality, Integrity, Availability) for all processes, applications, and IT systems.' },
        { step: 3, title: 'Modelling (Modellierung)', description: 'Mapping existing IT assets to the standardized modules in the IT-Grundschutz Compendium (e.g., server, router, cloud storage, client).' },
        { step: 4, title: 'IT-Grundschutz Check (Soll-Ist-Vergleich)', description: 'Comparing the security requirements defined in the mapped modules (target state / Soll) against actual existing security measures (current state / Ist) to identify security gaps.' },
        { step: 5, title: 'Supplementary Risk Analysis (Ergänzende Risikoanalyse - BSI 200-3)', description: 'Conducting explicit risk analysis for components with High or Very High protection requirements or when no standard compendium module exists.' },
        { step: 6, title: 'Implementation Planning & Execution (Umsetzungsplanung)', description: 'Prioritizing identified security gaps, allocating resources, establishing timelines, and executing countermeasures.' }
      ],
      keyPoints: [
        'Order of steps is mandatory: Structural Analysis -> Protection Requirements -> Modelling -> IT-Grundschutz Check -> Risk Analysis -> Implementation.',
        'Modelling maps assets directly to IT-Grundschutz Compendium modules.'
      ],
      examInsight: `A classic exam sequence question! You must know all 6 steps in chronological order. Sol-Ist-Vergleich takes place during Step 4 (IT-Grundschutz Check).`
    },
    {
      title: '3. Protection Requirements & The CIA Triad',
      summaryParagraph: `Protection requirements evaluate the potential damage to the organization if a security objective is violated. Evaluated separately across the classic CIA triad:`,
      keyPoints: [
        'Confidentiality (Vertraulichkeit): Protecting information against unauthorized disclosure.',
        'Integrity (Integrität): Ensuring accuracy, completeness, and prevention of unauthorized modifications.',
        'Availability (Verfügbarkeit): Ensuring authorized users have timely, reliable access to systems and information.',
        'Three Protection Categories:',
        '- Normal: The consequences of a security incident are limited and manageable.',
        '- High (Hoch): The consequences can be considerable (e.g., severe financial loss, major regulatory violation, extensive impairment of business operations).',
        '- Very High (Sehr Hoch): The consequences can reach catastrophic or existentially threatening proportions (e.g., loss of human life, bankruptcy, loss of operating license).'
      ],
      examInsight: `The 3 categories under BSI IT-Grundschutz are strictly: Normal, High (Hoch), and Very High (Sehr Hoch). There is NO "Low" category in BSI IT-Grundschutz!`
    },
    {
      title: '4. Principles of Protection Requirement Determination: Maximum, Accumulation & Distribution',
      summaryParagraph: `When determining the protection requirement of an IT system or network that supports multiple applications or processes, BSI defines one primary baseline rule and two modifying effects:`,
      comparisonTable: {
        headers: ['Principle / Effect', 'Core Rule & Definition', 'Practical Enterprise Example'],
        rows: [
          ['Maximum Principle (Maximumprinzip)', 'Baseline Rule: An IT component inherits the HIGHEST protection requirement of any application or business process running on it.', 'If a server runs Application A (Normal) and Application B (Very High), the server is classified as VERY HIGH.'],
          ['Accumulation Effect (Kumulationseffekt)', 'Modifying Rule: Multiple independent low/normal risks aggregate to cause disproportionate combined damage, ELEVATING the protection requirement.', 'A server hosts 50 "Normal" client portals. Individually, losing one is manageable. Losing all 50 simultaneously threatens the company’s existence, so availability is elevated to HIGH or VERY HIGH.'],
          ['Distribution Effect (Verteilungseffekt)', 'Modifying Rule: Protection requirements can be LOWERED for an individual component because data, tasks, or redundancy are distributed across multiple systems.', 'A database is mirrored across 3 geo-redundant data centers. If one server fails, the others take over with zero disruption. The Availability requirement for a single server can be reduced from Very High to Normal.']
        ]
      },
      keyPoints: [
        'The Maximum Principle is the default baseline.',
        'Accumulation Effect RAISES the protection requirement.',
        'Distribution Effect LOWERS the protection requirement (requires verifiable redundancy/distribution).'
      ],
      examInsight: `Examiners test these three concepts constantly! Always state: Maximum Principle is the baseline; Accumulation Effect elevates protection upward; Distribution Effect reduces protection downward.`
    },
    {
      title: '5. Requirements Levels & The Crown Jewels Concept',
      summaryParagraph: `The IT-Grundschutz Compendium categorizes security measures into distinct requirement tiers:`,
      keyPoints: [
        'Core Requirements (Basis-Anforderungen): Fundamental baseline measures that must be implemented under all circumstances. Essential for minimum survival.',
        'Standard Requirements (Standard-Anforderungen): Typical state-of-the-art security measures required to achieve standard BSI compliance.',
        'Additional Requirements (Anforderungen bei erhöhtem Schutzbedarf): Advanced measures triggered whenever a component is assessed as having High or Very High protection requirements.',
        'Crown Jewels Concept (Kern-Absicherung): Focuses comprehensive security investments and high-protection measures directly on the enterprise’s most mission-critical assets (crown jewels) that guarantee corporate survival, rather than diffusing resources evenly across all non-critical assets.'
      ],
      examInsight: `Remember the 3 requirement levels: Core (Basis), Standard, and Additional (erhöhtem Schutzbedarf). Core requirements must ALWAYS be fulfilled.`
    }
  ],

  keyConcepts: [
    {
      id: 'c4-1',
      term: 'BSI Standards Family (200-1, 200-2, 200-3, 100-4/200-4)',
      simpleExplanation: 'Germany’s national cybersecurity rulebook: 200-1 for ISMS, 200-2 for process steps, 200-3 for risk analysis, 200-4 for emergency management.',
      examDefinition: 'The BSI 200-x series forms the modular baseline for IT-Grundschutz: BSI 200-1 defines ISMS requirements; BSI 200-2 details the IT-Grundschutz methodology and implementation approaches (Basic, Core, Standard); BSI 200-3 defines supplementary risk analysis; and BSI 100-4 / 200-4 governs Emergency and Business Continuity Management (BCM).',
      whyItMatters: 'Provides a standardized, certifiable method recognized internationally as equivalent to ISO/IEC 27001.',
      howItWorks: 'Organizations implement an ISMS under 200-1, execute the 6-step method under 200-2, conduct risk analysis under 200-3 for high-risk assets, and plan disaster recovery under 200-4.',
      examKeywords: ['BSI 200-1', 'BSI 200-2', 'BSI 200-3', 'BSI 100-4/200-4', 'IT-Grundschutz', 'ISMS', 'Compendium'],
      commonTrap: 'Mixing up 200-2 (Methodology) with 200-3 (Risk Analysis).',
      category: 'BSI Standards'
    },
    {
      id: 'c4-2',
      term: 'Maximum Principle (Maximumprinzip)',
      simpleExplanation: 'A server or network must be protected at the level of the most critical thing running on it.',
      examDefinition: 'The Maximum Principle is the fundamental baseline rule in BSI protection requirement determination, dictating that an IT system, network, or infrastructure room inherits the highest protection requirement of any application or business process dependent upon it across Confidentiality, Integrity, and Availability.',
      whyItMatters: 'Prevents critical applications from suffering security breaches caused by under-protecting the underlying host infrastructure.',
      howItWorks: 'If an IT system hosts App 1 (Normal), App 2 (High), and App 3 (Normal), the IT system is assigned High protection.',
      examKeywords: ['Maximum Principle', 'Maximumprinzip', 'Baseline rule', 'Inherited protection', 'Highest requirement'],
      commonTrap: 'Averaging the protection requirements (e.g., claiming Normal + High = Medium). In BSI, averaging is forbidden!',
      category: 'Methodology'
    },
    {
      id: 'c4-3',
      term: 'Accumulation Effect (Kumulationseffekt)',
      simpleExplanation: 'When lots of small, normal things combine on one server, losing them all at once causes huge damage, so protection must be increased.',
      examDefinition: 'The Accumulation Effect (Kumulationseffekt) is a modifying rule in BSI protection requirement determination where multiple individual applications or data sets with Normal protection requirements aggregate on a single component, such that simultaneous failure or compromise creates catastrophic cumulative damage, elevating the component’s requirement to High or Very High.',
      whyItMatters: 'Recognizes systemic concentration risk that the naive Maximum Principle would overlook.',
      howItWorks: 'Analyst reviews aggregated business impact: if 100 minor client databases on one server would bankrupt the firm if destroyed, Availability is elevated from Normal to High.',
      examKeywords: ['Accumulation Effect', 'Kumulationseffekt', 'Aggregated damage', 'Elevates protection', 'Concentration risk'],
      commonTrap: 'Believing the accumulation effect lowers protection; it strictly ELEVATES protection requirements.',
      category: 'Methodology'
    },
    {
      id: 'c4-4',
      term: 'Distribution Effect (Verteilungseffekt)',
      simpleExplanation: 'When you spread data or use redundant backup servers, losing one server does not hurt as much, so protection requirement for that single server can be lowered.',
      examDefinition: 'The Distribution Effect (Verteilungseffekt) is a modifying rule in BSI protection requirement determination where the redundancy, segmentation, or distributed architecture of an IT service allows the failure or compromise of an individual IT component to have reduced impact, thereby justifying a DOWNWARD adjustment of that component’s protection requirement.',
      whyItMatters: 'Prevents wasteful over-expenditure on individual nodes in highly resilient, geo-redundant cluster architectures.',
      howItWorks: 'If a Very High availability database is mirrored across 3 active-active data centers, a single server node’s failure causes zero business outage, lowering its individual Availability requirement.',
      examKeywords: ['Distribution Effect', 'Verteilungseffekt', 'Redundancy', 'Lowers protection requirement', 'Geo-redundancy'],
      commonTrap: 'Applying the distribution effect to Confidentiality. If one mirrored server is stolen, data confidentiality is fully breached!',
      category: 'Methodology'
    },
    {
      id: 'c4-5',
      term: 'IT-Grundschutz Check (Soll-Ist-Vergleich)',
      simpleExplanation: 'Step 4 where you compare what security measures BSI says you SHOULD have (Soll) against what you ACTUALLY have (Ist).',
      examDefinition: 'The IT-Grundschutz Check is the fourth step of the BSI implementation process wherein the target security requirements specified in the mapped Compendium modules (Soll) are systematically audited against the currently existing organizational and technical safeguards (Ist) to identify vulnerabilities and compliance gaps.',
      whyItMatters: 'Directly yields the actionable gap analysis required for implementation planning.',
      howItWorks: 'Every requirement is evaluated: Entbehrlich (dispensable), Ja (implemented), Nein (not implemented), or Teilweise (partially implemented).',
      examKeywords: ['Soll-Ist-Vergleich', 'Step 4', 'Gap analysis', 'Compendium modules', 'Deficiency identification'],
      commonTrap: 'Conducting the check before completing structural analysis and modelling.',
      category: 'Process Steps'
    },
    {
      id: 'c4-6',
      term: 'Crown Jewels (Kern-Absicherung)',
      simpleExplanation: 'Protecting the absolute most critical assets that keep the company alive first and best.',
      examDefinition: 'The Core Protection (Kern-Absicherung) approach focuses enterprise security resources and highest-tier safeguards specifically on the organization’s "Crown Jewels"—the critical assets, key processes, and sensitive data whose compromise would threaten the existence of the enterprise.',
      whyItMatters: 'Enables rapid, high-impact risk reduction when resources do not permit immediate enterprise-wide standard protection.',
      howItWorks: 'Organizations isolate crown jewels, determine High/Very High protection requirements, and implement comprehensive safeguards around them before expanding to broader systems.',
      examKeywords: ['Crown Jewels', 'Kern-Absicherung', 'Core Protection', 'Existential threat', 'Targeted prioritization'],
      commonTrap: 'Assuming Core Protection covers all enterprise assets; it strictly covers mission-critical crown jewels.',
      category: 'Protection Approaches'
    }
  ],

  cheatSheet: {
    mustMemorize: [
      'BSI Standards: 200-1 (ISMS), 200-2 (Methodology), 200-3 (Risk Analysis), 100-4/200-4 (Emergency / BCM).',
      '6 Steps: 1. Structural Analysis -> 2. Protection Requirements -> 3. Modelling -> 4. IT-Grundschutz Check (Soll-Ist) -> 5. Supplementary Risk Analysis -> 6. Implementation.',
      '3 Protection Categories: Normal, High (Hoch), Very High (Sehr Hoch). (No "Low" category!).',
      'Protection Objectives: Confidentiality, Integrity, Availability (CIA).',
      'Maximum Principle = Default baseline; component inherits HIGHEST requirement of hosted processes.',
      'Accumulation Effect = ELEVATES requirement due to aggregated cumulative damage.',
      'Distribution Effect = LOWERS requirement due to distributed redundancy.',
      '3 Implementation Approaches: Basic Protection (Basis), Core Protection (Kern - crown jewels), Standard Protection (Standard).',
      '3 Requirement Levels: Core (Basis), Standard, and Additional (bei erhöhtem Schutzbedarf).'
    ],
    coreDefinitions: [
      {
        term: 'IT-Grundschutz',
        definition: 'A structured, modular information security standard developed by Germany’s BSI to establish and certify an ISMS compatible with ISO 27001.'
      },
      {
        term: 'Maximum Principle',
        definition: 'The fundamental rule that an IT component inherits the highest protection requirement among all business processes and applications it supports.'
      },
      {
        term: 'Accumulation Effect',
        definition: 'The phenomenon where multiple individually manageable risks aggregate on a single component, resulting in severe cumulative damage that elevates its protection category.'
      },
      {
        term: 'Distribution Effect',
        definition: 'The reduction of an individual component’s protection requirement made possible by architectural redundancy and distributed processing.'
      }
    ],
    importantNumbers: [
      { number: '200-1', label: 'ISMS Requirements', context: 'Defines general ISMS principles compatible with ISO 27001.' },
      { number: '200-2', label: 'Methodology', context: 'Defines Basic, Core, and Standard Protection approaches and the 6-step process.' },
      { number: '200-3', label: 'Risk Analysis', context: 'Specifies supplementary risk analysis for High / Very High assets.' },
      { number: '100-4 / 200-4', label: 'Emergency Management', context: 'Governs Business Continuity Management (BCM) and Disaster Recovery.' },
      { number: '3 Categories', label: 'Protection Categories', context: 'Normal, High (Hoch), Very High (Sehr Hoch).' },
      { number: '6 Steps', label: 'Process Steps', context: 'Structural Analysis -> Protection -> Modelling -> Check -> Risk -> Implementation.' }
    ],
    frameworkNames: [
      { acronym: 'BSI', fullName: 'Bundesamt für Sicherheit in der Informationstechnik', focus: 'German Federal Office for Information Security' },
      { acronym: 'BSI 200-1', fullName: 'Management Systems for Information Security (ISMS)', focus: 'ISMS governance and lifecycle' },
      { acronym: 'BSI 200-2', fullName: 'IT-Grundschutz Methodology', focus: 'Step-by-step implementation and protection approaches' },
      { acronym: 'BSI 200-3', fullName: 'Risk Analysis based on IT-Grundschutz', focus: 'Supplementary risk analysis guidelines' },
      { acronym: 'BSI 200-4', fullName: 'Business Continuity Management', focus: 'Emergency management, business impact analysis, and disaster recovery' }
    ],
    processes: [
      {
        name: 'BSI 6-Step Implementation Cycle',
        steps: [
          '1. Structural Analysis: Inventory business processes, applications, IT systems, networks, and physical rooms.',
          '2. Determination of Protection Requirements: Assign Normal, High, or Very High across CIA; apply Maximum Principle, Accumulation, and Distribution.',
          '3. Modelling: Select matching modules from the IT-Grundschutz Compendium.',
          '4. IT-Grundschutz Check: Perform Soll-Ist comparison to find unimplemented security measures.',
          '5. Supplementary Risk Analysis: Execute BSI 200-3 risk analysis for High/Very High items.',
          '6. Implementation Planning: Formulate security roadmap, allocate budget, and deploy controls.'
        ],
        description: 'Complete operational workflow for IT-Grundschutz compliance.'
      }
    ],
    comparisons: [
      {
        conceptA: 'Maximum Principle',
        conceptB: 'Accumulation Effect',
        comparisonPoints: [
          { criterion: 'Role', detailA: 'Baseline default rule', detailB: 'Modifying exception rule' },
          { criterion: 'Mechanism', detailA: 'Inherits the single highest requirement among hosted applications', detailB: 'Aggregates multiple lower requirements whose combined failure causes catastrophic loss' },
          { criterion: 'Effect on Requirement', detailA: 'Sets baseline (e.g. Normal + High -> High)', detailB: 'Elevates requirement (e.g. 50 × Normal -> High/Very High)' }
        ]
      },
      {
        conceptA: 'Accumulation Effect',
        conceptB: 'Distribution Effect',
        comparisonPoints: [
          { criterion: 'Direction of Adjustment', detailA: 'ELEVATES protection requirement upward', detailB: 'LOWERS protection requirement downward' },
          { criterion: 'Trigger Condition', detailA: 'Concentration of multiple dependencies on one single component', detailB: 'Architectural redundancy, clustering, or distribution across multiple components' },
          { criterion: 'Application to Confidentiality', detailA: 'Fully applicable (loss of multiple confidential data sets causes major leak)', detailB: 'Rarely applicable (mirrored nodes still leak data if one is compromised)' }
        ]
      }
    ],
    examTraps: [
      {
        trap: 'Assuming there is a "Low" protection category in BSI IT-Grundschutz.',
        truth: 'BSI recognizes ONLY three categories: Normal, High (Hoch), and Very High (Sehr Hoch).'
      },
      {
        trap: 'Averaging protection requirements (e.g., Normal + Very High = High).',
        truth: 'Averaging is strictly forbidden. The Maximum Principle dictates that the highest requirement wins.'
      },
      {
        trap: 'Applying the Distribution Effect to Confidentiality without justification.',
        truth: 'Distribution lowers availability/integrity risks through redundancy, but does NOT lower confidentiality requirements because compromise of any single node exposes the data.'
      }
    ],
    memoryShortcuts: [
      { acronym: 'S-P-M-C-R-I', meaning: 'Structural, Protection, Modelling, Check, Risk, Implementation', usage: 'The 6 BSI IT-Grundschutz steps in order.' },
      { acronym: 'N-H-VH', meaning: 'Normal, High, Very High', usage: 'The 3 BSI Protection Requirement Categories.' },
      { acronym: 'M-A-D', meaning: 'Maximum, Accumulation, Distribution', usage: 'The 3 principles for determining protection requirements.' }
    ]
  },

  importantQuestions: [
    {
      id: 'q4-1',
      unit: 4,
      question: 'Explain the principles of protection requirement determination under BSI IT-Grundschutz: the Maximum Principle, the Accumulation Effect, and the Distribution Effect.',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'Define protection requirement determination across CIA. Explain the Maximum Principle as the primary baseline rule. Detail how the Accumulation Effect elevates requirements and how the Distribution Effect lowers requirements, providing realistic IT architecture examples for each.',
      modelAnswer: `Under BSI Standard 200-2, protection requirement determination (Schutzbedarfsfeststellung) evaluates the potential damage resulting from a breach of Confidentiality, Integrity, or Availability across three categories: Normal, High, and Very High.

When determining the protection requirement of supporting IT systems and networks, three governing principles apply:

1. The Maximum Principle (Maximumprinzip - Baseline Rule):
- The fundamental default rule: An IT component inherits the highest protection requirement among all applications, processes, or data sets hosted upon or routed through it.
- Averaging is strictly prohibited.
- Example: A database server hosts an internal employee cafeteria menu app (Protection Requirement: Normal) and the enterprise SAP ERP financial ledger (Protection Requirement: Very High). Under the Maximum Principle, the server inherits a baseline protection requirement of VERY HIGH for all three CIA dimensions.

2. The Accumulation Effect (Kumulationseffekt - Upward Modifier):
- An exception rule that ELEVATES the protection requirement.
- When multiple business processes or applications, each individually possessing only a "Normal" protection requirement, reside on a single shared component, their simultaneous loss or corruption creates cumulative damage that threatens enterprise operations or solvency.
- Example: An e-commerce hosting server powers 80 small online stores. Losing one store causes limited damage (Normal). However, an outage taking down all 80 stores simultaneously causes catastrophic contractual penalties and reputational collapse, elevating the server’s Availability requirement from Normal to HIGH or VERY HIGH.

3. The Distribution Effect (Verteilungseffekt - Downward Modifier):
- An exception rule that LOWERS the protection requirement.
- When an application with a High or Very High requirement is architected across redundant, geographically distributed, or parallel IT components, the failure or compromise of an individual component does not cause an overall service outage.
- Example: A mission-critical online banking portal with Very High Availability requirements runs across three active-active, load-balanced, geo-redundant cluster servers. If one server crashes, the other two seamlessly handle all customer traffic without downtime. Therefore, the Availability requirement for any individual cluster server node may be reduced from Very High to Normal.
- Critical Exam Caveat: The Distribution Effect typically applies to Availability (and Integrity via voting mechanisms), but almost never applies to Confidentiality, because compromising a single node exposes all confidential data.`,
      answerStructure: [
        '1. Introduction: Scope of protection requirement determination across CIA (Normal, High, Very High).',
        '2. Maximum Principle: Default baseline rule, inheritance of highest requirement, no averaging, example.',
        '3. Accumulation Effect: Mechanism, upward adjustment, cumulative damage, example.',
        '4. Distribution Effect: Mechanism, downward adjustment, redundancy justification, example, and caveat regarding Confidentiality.'
      ],
      keywords: ['Maximum Principle', 'Maximumprinzip', 'Accumulation Effect', 'Kumulationseffekt', 'Distribution Effect', 'Verteilungseffekt', 'Normal', 'High', 'Very High', 'Confidentiality', 'Integrity', 'Availability', 'Redundancy'],
      commonMistakes: 'Averaging requirements, claiming Accumulation lowers protection, or claiming Distribution lowers confidentiality requirements.',
      selfCheckChecklist: [
        'Defined the 3 protection categories (Normal, High, Very High)',
        'Explained Maximum Principle as default baseline',
        'Explained Accumulation Effect as upward modifier with example',
        'Explained Distribution Effect as downward modifier with example',
        'Noted that Distribution Effect does not easily apply to Confidentiality'
      ]
    },
    {
      id: 'q4-2',
      unit: 4,
      question: 'Detail the six sequential steps of the BSI IT-Grundschutz implementation process according to BSI Standard 200-2.',
      marks: 6,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'List all six steps in exact chronological order with concise explanations: 1. Structural Analysis, 2. Protection Requirement Determination, 3. Modelling, 4. IT-Grundschutz Check, 5. Supplementary Risk Analysis, 6. Implementation Planning.',
      modelAnswer: `BSI Standard 200-2 mandates an iterative, 6-step workflow for implementing IT-Grundschutz:

1. Structural Analysis (Strukturanalyse):
Systematically identifying and documenting the scope of the information domain: business processes, applications, IT systems (servers, clients), industrial systems, networks, physical premises, and personnel roles.

2. Determination of Protection Requirements (Schutzbedarfsfeststellung):
Assessing the required protection level (Normal, High, Very High) across the CIA triad (Confidentiality, Integrity, Availability) for all processes, applications, and IT systems, applying the Maximum Principle, Accumulation Effect, and Distribution Effect.

3. Modelling (Modellierung):
Mapping the inventoried structural elements to the standardized security modules defined in the IT-Grundschutz Compendium (e.g., APP.1.1 Office Products, SYS.1.1 General Server, NET.1.1 Network Architecture).

4. IT-Grundschutz Check (Soll-Ist-Vergleich):
Conducting a gap analysis by systematically comparing the target requirements stipulated by the mapped modules (Soll) against currently active organizational and technical measures (Ist) to identify vulnerabilities.

5. Supplementary Risk Analysis (Ergänzende Risikoanalyse - BSI 200-3):
Performing a dedicated risk analysis for components evaluated as having High or Very High protection requirements, or for systems operating in unusual environments where standard compendium modules are insufficient.

6. Implementation Planning & Execution (Umsetzungsplanung):
Prioritizing identified security deficiencies, allocating budget and technical personnel, defining implementation roadmaps, and deploying safeguards.`,
      answerStructure: [
        '1. Step 1: Structural Analysis (Strukturanalyse).',
        '2. Step 2: Protection Requirement Determination (Schutzbedarfsfeststellung).',
        '3. Step 3: Modelling (Modellierung).',
        '4. Step 4: IT-Grundschutz Check (Soll-Ist-Vergleich).',
        '5. Step 5: Supplementary Risk Analysis (Ergänzende Risikoanalyse).',
        '6. Step 6: Implementation Planning (Umsetzungsplanung).'
      ],
      keywords: ['Strukturanalyse', 'Schutzbedarfsfeststellung', 'Modellierung', 'IT-Grundschutz Check', 'Soll-Ist-Vergleich', 'Ergänzende Risikoanalyse', 'Umsetzungsplanung', 'BSI 200-2', 'BSI 200-3'],
      commonMistakes: 'Reversing the sequence of Modelling and Protection Requirements, or placing the IT-Grundschutz Check before Modelling.',
      selfCheckChecklist: [
        'Listed all 6 steps in exact order',
        'Included both German and English terminology',
        'Explained Soll-Ist-Vergleich in Step 4',
        'Referenced BSI 200-3 in Step 5'
      ]
    },
    {
      id: 'q4-3',
      unit: 4,
      question: 'Explain the BSI Standard family: BSI 200-1, BSI 200-2, BSI 200-3, and BSI 100-4 / 200-4.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'Accurately state the official title and core focus of each BSI standard. Connect them into a coherent management system.',
      modelAnswer: `The German Federal Office for Information Security (BSI) organizes its information security and resilience guidelines into a structured family of standards:

1. BSI Standard 200-1 (Management Systems for Information Security - ISMS):
- Focus: Specifies the overarching requirements for establishing, operating, maintaining, and continually optimizing an Information Security Management System (ISMS).
- Harmonization: Fully compatible and harmonized with ISO/IEC 27001, defining leadership, governance roles, and management commitment.

2. BSI Standard 200-2 (IT-Grundschutz Methodology):
- Focus: Explains the practical, step-by-step methodology to implement IT-Grundschutz across an enterprise.
- Approaches: Outlines three distinct implementation approaches: Basic Protection (Basis-Absicherung), Core Protection (Kern-Absicherung for crown jewels), and Standard Protection (Standard-Absicherung).

3. BSI Standard 200-3 (Risk Analysis based on IT-Grundschutz):
- Focus: Details the procedure for conducting a supplementary risk analysis (Ergänzende Risikoanalyse).
- Application: Triggered when assets have High or Very High protection requirements or cannot be represented adequately by the standardized modules of the IT-Grundschutz Compendium.

4. BSI Standard 100-4 / BSI 200-4 (Emergency Management / Business Continuity Management - BCM):
- Focus: Covers Business Continuity Management (BCM) and Disaster Recovery (Notfallmanagement).
- Methodology: Provides instructions for Business Impact Analysis (BIA), developing business continuity strategies, defining emergency operational procedures, and conducting disaster recovery drills to ensure organizational resilience during catastrophic incidents.`,
      answerStructure: [
        '1. BSI 200-1: ISMS specification and ISO 27001 compatibility.',
        '2. BSI 200-2: IT-Grundschutz Methodology (Basic, Core, Standard approaches).',
        '3. BSI 200-3: Supplementary Risk Analysis.',
        '4. BSI 100-4 / 200-4: Emergency Management & Business Continuity Management (BCM).'
      ],
      keywords: ['BSI 200-1', 'BSI 200-2', 'BSI 200-3', 'BSI 100-4', 'BSI 200-4', 'ISMS', 'Methodology', 'Risk Analysis', 'Emergency Management', 'BCM', 'Business Impact Analysis'],
      commonMistakes: 'Swapping the functions of 200-2 and 200-3, or forgetting 100-4/200-4 handles Business Continuity / Emergency Management.',
      selfCheckChecklist: [
        'Correctly identified 200-1 as ISMS',
        'Correctly identified 200-2 as Methodology',
        'Correctly identified 200-3 as Risk Analysis',
        'Correctly identified 100-4/200-4 as Emergency Management / BCM'
      ]
    }
  ],

  flashcards: [
    {
      id: 'fc4-1',
      unit: 4,
      front: 'BSI Standard Numbers (200-1, 200-2, 200-3, 200-4)',
      back: '200-1 = ISMS Requirements\n200-2 = IT-Grundschutz Methodology\n200-3 = Risk Analysis\n200-4 (or 100-4) = Emergency Management / BCM',
      category: 'BSI Standards',
      examTip: 'Must-know standard numbers!'
    },
    {
      id: 'fc4-2',
      unit: 4,
      front: 'The 3 BSI Protection Categories',
      back: '1. Normal\n2. High (Hoch)\n3. Very High (Sehr Hoch)\n(Note: There is NO "Low" category!).',
      category: 'Methodology',
      examTip: 'Never write "Low" for BSI!'
    },
    {
      id: 'fc4-3',
      unit: 4,
      front: 'Maximum Principle (Maximumprinzip)',
      back: 'An IT component inherits the HIGHEST protection requirement of any application or process it supports across Confidentiality, Integrity, and Availability. Averaging is forbidden.',
      category: 'Methodology',
      examTip: 'Baseline default rule in BSI.'
    },
    {
      id: 'fc4-4',
      unit: 4,
      front: 'Accumulation Effect (Kumulationseffekt)',
      back: 'When multiple individual applications with Normal protection aggregate on one server, simultaneous failure causes catastrophic combined loss, ELEVATING the component to High or Very High.',
      category: 'Methodology',
      examTip: 'Always raises the protection requirement!'
    },
    {
      id: 'fc4-5',
      unit: 4,
      front: 'Distribution Effect (Verteilungseffekt)',
      back: 'When redundancy, clustering, or distribution allows failure of a single node without service disruption, LOWERS that component’s requirement (mainly for Availability).',
      category: 'Methodology',
      examTip: 'Rarely applies to Confidentiality!'
    },
    {
      id: 'fc4-6',
      unit: 4,
      front: 'IT-Grundschutz 6 Steps (in order)',
      back: '1. Structural Analysis\n2. Protection Requirements\n3. Modelling\n4. IT-Grundschutz Check (Soll-Ist)\n5. Supplementary Risk Analysis\n6. Implementation Planning',
      category: 'Process',
      examTip: 'Mnemonic: S-P-M-C-R-I.'
    },
    {
      id: 'fc4-7',
      unit: 4,
      front: 'Core Protection (Kern-Absicherung) / Crown Jewels',
      back: 'Focuses security efforts and highest safeguards strictly on the enterprise’s most mission-critical assets ("Crown Jewels") that guarantee corporate survival.',
      category: 'Approaches',
      examTip: 'Contrasted with Basic Protection and Standard Protection.'
    },
    {
      id: 'fc4-8',
      unit: 4,
      front: 'Three Requirement Tiers in Compendium',
      back: '1. Core Requirements (Basis-Anforderungen)\n2. Standard Requirements (Standard-Anforderungen)\n3. Additional Requirements (Anforderungen bei erhöhtem Schutzbedarf)',
      category: 'Requirements',
      examTip: 'Core requirements must always be fulfilled.'
    }
  ],

  activeRecall: [
    {
      id: 'ar4-1',
      question: 'What are the four core BSI standards in the 200-x / 100-x family and what does each cover?',
      answer: 'BSI 200-1 (ISMS), BSI 200-2 (IT-Grundschutz Methodology), BSI 200-3 (Supplementary Risk Analysis), and BSI 100-4 / 200-4 (Emergency Management / BCM).',
      keywords: ['200-1 ISMS', '200-2 Methodology', '200-3 Risk Analysis', '100-4/200-4 Emergency Management/BCM']
    },
    {
      id: 'ar4-2',
      question: 'What are the three protection categories in BSI IT-Grundschutz, and which category does not exist?',
      answer: 'The three categories are Normal, High (Hoch), and Very High (Sehr Hoch). There is NO "Low" category.',
      keywords: ['Normal', 'High (Hoch)', 'Very High (Sehr Hoch)', 'No Low category']
    },
    {
      id: 'ar4-3',
      question: 'How do the Accumulation Effect and Distribution Effect modify the Maximum Principle?',
      answer: 'The Maximum Principle is the default baseline (inheriting highest requirement). The Accumulation Effect ELEVATES the requirement due to aggregated cumulative damage. The Distribution Effect LOWERS the requirement due to architectural redundancy.',
      keywords: ['Maximum baseline', 'Accumulation elevates', 'Distribution lowers']
    },
    {
      id: 'ar4-4',
      question: 'What happens during Step 4 (IT-Grundschutz Check) of the BSI methodology?',
      answer: 'A Soll-Ist comparison: comparing target requirements from mapped Compendium modules (Soll) against actual active safeguards (Ist) to uncover security gaps.',
      keywords: ['Soll-Ist-Vergleich', 'Target vs actual', 'Security gaps']
    }
  ],

  completionChecklist: [
    'Can recite BSI 200-1, 200-2, 200-3, and 100-4/200-4 roles',
    'Can list all 6 steps of the IT-Grundschutz implementation workflow in order',
    'Can explain the Maximum Principle, Accumulation Effect, and Distribution Effect',
    'Know the 3 Protection Categories (Normal, High, Very High) across the CIA triad',
    'Understand the 3 implementation approaches (Basic, Core/Crown Jewels, Standard)',
    'Can identify the 3 requirement tiers (Core, Standard, Additional)',
    'Achieved at least 80% on Unit 4 MCQ Practice'
  ],

  mcqs: [
    {
      id: 'u4-mcq-1',
      unit: 4,
      topic: 'BSI Standards',
      question: 'Which BSI Standard defines the concrete IT-Grundschutz methodology and implementation approaches (Basic, Core, Standard)?',
      options: {
        A: 'BSI Standard 200-1',
        B: 'BSI Standard 200-2',
        C: 'BSI Standard 200-3',
        D: 'BSI Standard 100-4'
      },
      correctAnswer: 'B',
      explanation: 'BSI Standard 200-2 specifies the IT-Grundschutz methodology, detailing the 6-step process and the three protection approaches.',
      memoryTip: 'BSI 200-2 = IT-Grundschutz Methodology.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-2',
      unit: 4,
      topic: 'BSI Standards',
      question: 'Which BSI Standard defines the methodology for Supplementary Risk Analysis (Ergänzende Risikoanalyse)?',
      options: {
        A: 'BSI Standard 200-1',
        B: 'BSI Standard 200-2',
        C: 'BSI Standard 200-3',
        D: 'BSI Standard 200-4'
      },
      correctAnswer: 'C',
      explanation: 'BSI Standard 200-3 governs risk analysis based on IT-Grundschutz, applied whenever assets have High/Very High requirements or un-modelled threats.',
      memoryTip: 'BSI 200-3 = Risk Analysis.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-3',
      unit: 4,
      topic: 'Emergency Management',
      question: 'Which standard in the BSI portfolio governs Emergency Management (Notfallmanagement) and Business Continuity Management (BCM)?',
      options: {
        A: 'BSI Standard 200-1',
        B: 'BSI Standard 200-3',
        C: 'BSI Standard 100-4 / 200-4',
        D: 'BSI Standard 38500'
      },
      correctAnswer: 'C',
      explanation: 'BSI Standard 100-4 (and the updated BSI 200-4) establishes guidelines for Emergency Management and Business Continuity Management.',
      memoryTip: 'BSI 100-4 / 200-4 = Emergency Management / BCM.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-4',
      unit: 4,
      topic: 'Protection Categories',
      question: 'What are the THREE official protection requirement categories recognized under BSI IT-Grundschutz?',
      options: {
        A: 'Low, Medium, High',
        B: 'Normal, High (Hoch), Very High (Sehr Hoch)',
        C: 'Tier 1, Tier 2, Tier 3',
        D: 'Basic, Standard, Crown Jewel'
      },
      correctAnswer: 'B',
      explanation: 'BSI recognizes strictly three protection categories: Normal, High (Hoch), and Very High (Sehr Hoch). There is no "Low" category.',
      memoryTip: 'Normal, High, Very High. No "Low" in BSI!',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-5',
      unit: 4,
      topic: 'Maximum Principle',
      question: 'According to the Maximum Principle (Maximumprinzip), how is the protection requirement of a physical server determined?',
      options: {
        A: 'By averaging the requirements of all applications running on it.',
        B: 'The server inherits the HIGHEST protection requirement of any application or business process running on it.',
        C: 'The server is automatically assigned "Normal" unless an auditor intervenes.',
        D: 'The server adopts the lowest requirement to minimize operational costs.'
      },
      correctAnswer: 'B',
      explanation: 'The Maximum Principle dictates that an IT component inherits the highest protection requirement among all applications it supports.',
      memoryTip: 'Maximum Principle: Highest hosted requirement wins.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-6',
      unit: 4,
      topic: 'Accumulation Effect',
      question: 'An enterprise hosts 100 administrative customer portals on a single database server. While each portal individually has a "Normal" availability requirement, a server crash would take down all 100 simultaneously, threatening corporate insolvency. What principle applies?',
      options: {
        A: 'Distribution Effect (lowering requirements to Normal)',
        B: 'Accumulation Effect (elevating availability requirement to High or Very High)',
        C: 'Averaging Principle (leaving requirement unchanged)',
        D: 'Principle of Least Privilege'
      },
      correctAnswer: 'B',
      explanation: 'The Accumulation Effect (Kumulationseffekt) occurs when multiple individually manageable risks aggregate on one component, creating catastrophic cumulative damage that elevates protection requirements.',
      memoryTip: 'Concentration of many normal risks into catastrophic loss = Accumulation Effect.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-7',
      unit: 4,
      topic: 'Distribution Effect',
      question: 'A mission-critical payment application with a "Very High" availability requirement is deployed across three active-active, geographically separated redundant data centers. Why may the availability requirement for an individual server node be reduced to "Normal"?',
      options: {
        A: 'Due to the Accumulation Effect',
        B: 'Due to the Distribution Effect',
        C: 'Because German law waives compliance for payment processors',
        D: 'Because the Maximum Principle forbids high availability'
      },
      correctAnswer: 'B',
      explanation: 'The Distribution Effect (Verteilungseffekt) allows a downward adjustment of a single component’s protection requirement when redundancy or clustering ensures the overall service suffers no outage.',
      memoryTip: 'Redundancy reduces individual component requirement = Distribution Effect.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-8',
      unit: 4,
      topic: 'Distribution Effect Limitation',
      question: 'Why does the Distribution Effect rarely apply to the protection objective of CONFIDENTIALITY?',
      options: {
        A: 'Because BSI standards outlaw encryption.',
        B: 'Because mirroring data across multiple redundant servers means compromising even ONE single server exposes the confidential data entirely.',
        C: 'Because confidentiality can only be evaluated on paper.',
        D: 'Because the Distribution Effect only applies to network cables.'
      },
      correctAnswer: 'B',
      explanation: 'Redundancy mitigates availability failure, but does not split confidential secrets. If a server is compromised, confidentiality is fully lost regardless of how many other servers exist.',
      memoryTip: 'Redundancy protects availability, NOT confidentiality.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-9',
      unit: 4,
      topic: 'BSI 6-Step Process',
      question: 'In the BSI IT-Grundschutz implementation process, what is the FIRST step?',
      options: {
        A: 'Determination of Protection Requirements',
        B: 'Structural Analysis (Strukturanalyse)',
        C: 'Modelling',
        D: 'Supplementary Risk Analysis'
      },
      correctAnswer: 'B',
      explanation: 'Step 1 is Structural Analysis (Strukturanalyse), where the enterprise creates an inventory of all business processes, applications, IT systems, networks, and rooms.',
      memoryTip: 'Step 1 = Structural Analysis (Inventory everything).',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-10',
      unit: 4,
      topic: 'BSI 6-Step Process',
      question: 'In which step of the BSI IT-Grundschutz implementation process is the "Soll-Ist-Vergleich" (Target-Actual comparison) performed?',
      options: {
        A: 'Step 1: Structural Analysis',
        B: 'Step 3: Modelling',
        C: 'Step 4: IT-Grundschutz Check',
        D: 'Step 6: Implementation Planning'
      },
      correctAnswer: 'C',
      explanation: 'Step 4 is the IT-Grundschutz Check, where the target requirements in the mapped modules (Soll) are compared against active measures (Ist) to find gaps.',
      memoryTip: 'Step 4 IT-Grundschutz Check = Soll-Ist-Vergleich.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-11',
      unit: 4,
      topic: 'Crown Jewels Approach',
      question: 'The Core Protection (Kern-Absicherung) approach under BSI 200-2 is characterized by:',
      options: {
        A: 'Applying minimal basic measures across all enterprise assets.',
        B: 'Focusing comprehensive security measures and high protection specifically on the enterprise’s most mission-critical assets ("Crown Jewels").',
        C: 'Outsourcing all IT security to public cloud providers.',
        D: 'Ignoring physical security to focus solely on software.'
      },
      correctAnswer: 'B',
      explanation: 'Core Protection focuses resources on the organization’s "Crown Jewels"—the vital business processes and assets whose compromise threatens enterprise survival.',
      memoryTip: 'Core Protection (Kern-Absicherung) = Protecting the Crown Jewels.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-12',
      unit: 4,
      topic: 'BSI Compendium Requirements',
      question: 'What are the three tiers of security requirements defined in the modules of the IT-Grundschutz Compendium?',
      options: {
        A: 'Tier 1, Tier 2, Tier 3',
        B: 'Core Requirements, Standard Requirements, and Additional Requirements for High/Very High Protection',
        C: 'Administrative, Physical, and Technical Requirements',
        D: 'Preventative, Detective, and Corrective Requirements'
      },
      correctAnswer: 'B',
      explanation: 'Compendium modules structure requirements into: 1. Core Requirements (Basis-Anforderungen), 2. Standard Requirements, and 3. Additional Requirements (bei erhöhtem Schutzbedarf).',
      memoryTip: 'Core (Basis), Standard, and Additional (erhöhtem Schutzbedarf).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-13',
      unit: 4,
      topic: 'Modelling Step',
      question: 'What occurs during Step 3 ("Modelling") of the BSI IT-Grundschutz workflow?',
      options: {
        A: 'IT assets identified in the structural analysis are mapped to appropriate modules from the IT-Grundschutz Compendium.',
        B: 'External hackers are hired to conduct penetration tests.',
        C: 'The Board of Directors calculates the annual dividend.',
        D: 'Network cables are physically measured and rewired.'
      },
      correctAnswer: 'A',
      explanation: 'Modelling involves mapping real-world IT components (servers, switches, applications) to standardized building blocks (modules) in the IT-Grundschutz Compendium.',
      memoryTip: 'Modelling = Mapping assets to Compendium modules.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-14',
      unit: 4,
      topic: 'Supplementary Risk Analysis Trigger',
      question: 'When is an enterprise required to conduct a Supplementary Risk Analysis according to BSI Standard 200-3?',
      options: {
        A: 'For every single laptop in the company regardless of data handled.',
        B: 'When an IT component has High or Very High protection requirements, or operates in an environment not covered by standard Compendium modules.',
        C: 'Only after a physical break-in occurs.',
        D: 'Whenever a company updates its operating system.'
      },
      correctAnswer: 'B',
      explanation: 'Standard IT-Grundschutz modules cover normal protection. When protection requirements are High or Very High, or when novel operational conditions exist, BSI 200-3 risk analysis is mandatory.',
      memoryTip: 'High/Very High protection or unmodelled threats = BSI 200-3 Risk Analysis.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-15',
      unit: 4,
      topic: 'BSI 200-1 Harmonization',
      question: 'With which international standard is BSI Standard 200-1 fundamentally harmonized and compatible?',
      options: {
        A: 'ISO/IEC 27001',
        B: 'IEEE 802.3',
        C: 'PCI-DSS',
        D: 'COSO 1992'
      },
      correctAnswer: 'A',
      explanation: 'BSI 200-1 establishes ISMS requirements fully compatible with ISO/IEC 27001, allowing organizations to obtain both ISO 27001 and BSI certifications seamlessly.',
      memoryTip: 'BSI 200-1 is harmonized with ISO/IEC 27001.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-16',
      unit: 4,
      topic: 'Protection Categories Damage',
      question: 'A security incident that could cause "catastrophic damage, endanger human life, or threaten the very existence of the organization" is classified under which BSI category?',
      options: {
        A: 'Normal',
        B: 'High (Hoch)',
        C: 'Very High (Sehr Hoch)',
        D: 'Fatal'
      },
      correctAnswer: 'C',
      explanation: 'Under BSI definition, Very High (Sehr Hoch) applies when consequences reach catastrophic levels, threaten human life, or endanger enterprise survival.',
      memoryTip: 'Existential threat or loss of life = Very High (Sehr Hoch).',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-17',
      unit: 4,
      topic: 'BSI Compendium Structure',
      question: 'In the IT-Grundschutz Compendium, modules are organized by layers. Which layer contains modules like "General Server" and "Virtualization"?',
      options: {
        A: 'ISMS Layer',
        B: 'Process Layer (CON)',
        C: 'System Layer (SYS)',
        D: 'Environmental Layer (INF)'
      },
      correctAnswer: 'C',
      explanation: 'The System Layer (SYS) contains technical IT system modules such as SYS.1.1 (General Server), SYS.1.5 (Virtualization), and SYS.2.1 (Client).',
      memoryTip: 'Servers, clients, virtualization = System Layer (SYS).',
      difficulty: 'Mastery'
    },
    {
      id: 'u4-mcq-18',
      unit: 4,
      topic: 'Business Impact Analysis (BIA)',
      question: 'In BSI 100-4 / 200-4 Emergency Management, what is the primary purpose of a Business Impact Analysis (BIA)?',
      options: {
        A: 'To calculate corporate income tax deductions.',
        B: 'To identify critical business processes, assess the financial/operational consequences of outages over time, and establish Recovery Time Objectives (RTO).',
        C: 'To discipline negligent employees.',
        D: 'To select colors for marketing logos.'
      },
      correctAnswer: 'B',
      explanation: 'BIA identifies critical business processes, evaluates downtime impact over time, and establishes Maximum Tolerable Outage (MTO) and Recovery Time Objectives (RTO).',
      memoryTip: 'BIA = Downtime impact over time & RTO determination.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-19',
      unit: 4,
      topic: 'Implementation Approaches',
      question: 'Which BSI IT-Grundschutz implementation approach provides the complete, standard level of security across the entire enterprise information domain?',
      options: {
        A: 'Basis-Absicherung (Basic Protection)',
        B: 'Kern-Absicherung (Core Protection)',
        C: 'Standard-Absicherung (Standard Protection)',
        D: 'Zero-Absicherung'
      },
      correctAnswer: 'C',
      explanation: 'Standard-Absicherung (Standard Protection) represents the full, comprehensive implementation of IT-Grundschutz across all systems, eligible for an ISO 27001 certificate based on IT-Grundschutz.',
      memoryTip: 'Standard-Absicherung = Complete enterprise-wide Grundschutz.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-20',
      unit: 4,
      topic: 'Step 6 Implementation',
      question: 'During Step 6 (Umsetzungsplanung), how are identified security measures prioritized?',
      options: {
        A: 'Random selection via lottery',
        B: 'Core requirements (Basis-Anforderungen) must be implemented first, followed by Standard and Additional requirements based on risk and cost-benefit',
        C: 'Implementing the most expensive hardware first',
        D: 'Leaving all implementation until the next calendar year'
      },
      correctAnswer: 'B',
      explanation: 'Core requirements (Basis-Anforderungen) represent non-negotiable fundamentals that must be deployed immediately, followed by standard and high-protection measures.',
      memoryTip: 'Core requirements are prioritized first in Umsetzungsplanung.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-21',
      unit: 4,
      topic: 'Maximum Principle Application',
      question: 'A firewall routes traffic for: (1) internal email (Availability: Normal), (2) HR intranet (Confidentiality: High), and (3) core medical telemetry (Integrity: Very High). Under the Maximum Principle, what is the firewall’s baseline requirement across CIA?',
      options: {
        A: 'C: Normal, I: Normal, A: Normal',
        B: 'C: High, I: Very High, A: Normal',
        C: 'C: Very High, I: Very High, A: Very High',
        D: 'C: High, I: High, A: High'
      },
      correctAnswer: 'B',
      explanation: 'The Maximum Principle applies independently to EACH dimension of the CIA triad: C inherits High (from HR), I inherits Very High (from telemetry), and A inherits Normal (highest among hosted apps is email).',
      memoryTip: 'Maximum Principle is evaluated per CIA dimension independently!',
      difficulty: 'Mastery'
    },
    {
      id: 'u4-mcq-22',
      unit: 4,
      topic: 'Core Requirements Non-fulfillment',
      question: 'If an auditor finds that an enterprise fails to satisfy a "Core Requirement" (Basis-Anforderung) in an IT-Grundschutz audit, what is the consequence?',
      options: {
        A: 'The auditor awards a bronze medal.',
        B: 'It represents a critical non-conformity preventing BSI certification, as core requirements are non-negotiable baselines.',
        C: 'The enterprise is given a €5 discount.',
        D: 'Nothing, core requirements are purely optional recommendations.'
      },
      correctAnswer: 'B',
      explanation: 'Core requirements represent the mandatory baseline of IT-Grundschutz. Failing a core requirement blocks certification.',
      memoryTip: 'Core requirements are strictly mandatory baselines.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-23',
      unit: 4,
      topic: 'Structural Analysis Infrastructure',
      question: 'Why does BSI Structural Analysis include physical rooms (e.g., server rooms, archives, offices)?',
      options: {
        A: 'To verify compliance with German interior decorating laws.',
        B: 'Because environmental and physical threats (fire, water, physical theft) directly jeopardize the IT systems housed within those rooms.',
        C: 'To calculate commercial property tax.',
        D: 'Physical rooms are excluded from modern IT-Grundschutz.'
      },
      correctAnswer: 'B',
      explanation: 'Structural analysis covers physical infrastructure (rooms, buildings) because physical security directly affects the CIA of the hosted IT systems.',
      memoryTip: 'Infrastructure rooms protect hardware against physical & environmental threats.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-24',
      unit: 4,
      topic: 'BSI Compendium Layers',
      question: 'Which IT-Grundschutz Compendium layer covers physical and environmental security (e.g., building security, server room cabling, fire protection)?',
      options: {
        A: 'INF (Infrastructure Layer)',
        B: 'NET (Network Layer)',
        C: 'APP (Application Layer)',
        D: 'OPS (Operations Layer)'
      },
      correctAnswer: 'A',
      explanation: 'The INF layer (Infrastructure) covers buildings, cabling, server rooms, and physical security measures.',
      memoryTip: 'INF layer = Physical infrastructure, rooms, and buildings.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-25',
      unit: 4,
      topic: 'Basic Protection Approach',
      question: 'What is the primary objective of the "Basic Protection" (Basis-Absicherung) approach in BSI 200-2?',
      options: {
        A: 'Achieving the highest possible security maturity across all systems.',
        B: 'Establishing a quick, foundational baseline of basic safeguards across all systems to eliminate gross vulnerabilities before pursuing full standard protection.',
        C: 'Replacing all human staff with firewalls.',
        D: 'Certifying the enterprise for US DoD contracts.'
      },
      correctAnswer: 'B',
      explanation: 'Basis-Absicherung enables organizations to quickly deploy fundamental baseline safeguards across all assets, securing the perimeter before transitioning to standard protection.',
      memoryTip: 'Basis-Absicherung = Rapid baseline across everything.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-26',
      unit: 4,
      topic: 'Maximum Principle Limitation',
      question: 'Why is "Averaging" protection requirements (e.g., claiming a Normal system and a Very High system result in High) strictly forbidden in BSI methodology?',
      options: {
        A: 'Because BSI lacks a division formula.',
        B: 'Because averaging under-protects the most critical asset, leaving it vulnerable to catastrophic breach.',
        C: 'Because German law requires all numbers to be integers.',
        D: 'Because averaging is only allowed under ISO 9001.'
      },
      correctAnswer: 'B',
      explanation: 'Averaging would compromise security: protecting a Very High asset with merely "High" controls exposes it to existential failure.',
      memoryTip: 'Never average! The highest requirement must be protected.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-27',
      unit: 4,
      topic: 'Emergency Management Roles',
      question: 'Under BSI 100-4 / 200-4, what role is responsible for coordinating the overall emergency management process across the enterprise?',
      options: {
        A: 'Helpdesk Trainee',
        B: 'Emergency Management Officer (Notfallbeauftragter)',
        C: 'External Building Landlord',
        D: 'Software Quality Assurance Lead'
      },
      correctAnswer: 'B',
      explanation: 'The Emergency Management Officer (Notfallbeauftragter) oversees business continuity planning, BIA execution, and disaster response coordination.',
      memoryTip: 'Notfallbeauftragter = Emergency Management Officer.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-28',
      unit: 4,
      topic: 'IT-Grundschutz Check Results',
      question: 'When performing the Soll-Ist comparison in Step 4, what are the standard assessment classifications for each requirement?',
      options: {
        A: 'Red, Yellow, Green',
        B: 'Ja (Yes / Implemented), Nein (No / Unimplemented), Teilweise (Partially implemented), Entbehrlich (Dispensable)',
        C: 'Pass, Fail, Deferred',
        D: 'High, Medium, Low'
      },
      correctAnswer: 'B',
      explanation: 'BSI IT-Grundschutz evaluates requirements as: Ja (Yes), Nein (No), Teilweise (Partially), or Entbehrlich (Dispensable/Not applicable).',
      memoryTip: 'Ja, Nein, Teilweise, Entbehrlich.',
      difficulty: 'Mastery'
    },
    {
      id: 'u4-mcq-29',
      unit: 4,
      topic: 'BSI 200-3 Risk Matrix',
      question: 'In BSI Standard 200-3, risk assessment evaluates risk through which two primary dimensions?',
      options: {
        A: 'Bandwidth and Storage',
        B: 'Frequency / Likelihood of occurrence (Häufigkeit) and Impact / Extent of damage (Schadensausmaß)',
        C: 'Hardware age and Vendor market share',
        D: 'Software lines of code and Developer salary'
      },
      correctAnswer: 'B',
      explanation: 'BSI 200-3 assesses risk using a standard risk matrix combining Likelihood of occurrence (Häufigkeit) and Extent of damage (Schadensausmaß).',
      memoryTip: 'Likelihood (Häufigkeit) × Extent of Damage (Schadensausmaß).',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-30',
      unit: 4,
      topic: 'Disaster Recovery Metrics',
      question: 'In Business Continuity and Disaster Recovery under BSI 200-4, what does "Recovery Time Objective" (RTO) signify?',
      options: {
        A: 'The maximum acceptable age of restored data backup files.',
        B: 'The targeted duration of time within which a business process or IT service must be restored after a disaster.',
        C: 'The total cost of purchasing replacement servers.',
        D: 'The amount of time taken to notify law enforcement.'
      },
      correctAnswer: 'B',
      explanation: 'RTO defines the maximum acceptable duration of time to restore an IT system or process to operational status following an incident. RPO defines acceptable data loss.',
      memoryTip: 'RTO = Time to restore. RPO = Point in time / data loss limit.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-31',
      unit: 4,
      topic: 'Disaster Recovery Metrics',
      question: 'What does "Recovery Point Objective" (RPO) measure in BSI emergency management?',
      options: {
        A: 'The maximum allowable data loss measured in time backward from the disaster event.',
        B: 'The geographical distance between data centers.',
        C: 'The number of staff present in the building.',
        D: 'The speed of the network router.'
      },
      correctAnswer: 'A',
      explanation: 'RPO defines the maximum tolerable period of data loss (e.g., maximum 1 hour of transaction data lost since last backup).',
      memoryTip: 'RPO = Point of data loss (backups). RTO = Time to get back up.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-32',
      unit: 4,
      topic: 'Maximum Principle',
      question: 'If a virtual machine host server supports three virtual machines with Integrity requirements of: VM1 = Normal, VM2 = High, VM3 = Normal, what is the host server’s baseline Integrity requirement?',
      options: {
        A: 'Normal',
        B: 'High',
        C: 'Very High',
        D: 'Intermediate'
      },
      correctAnswer: 'B',
      explanation: 'Under the Maximum Principle, the host inherits the highest requirement among its hosted VMs, which is High (from VM2).',
      memoryTip: 'Maximum Principle: Highest hosted VM dictates host requirement.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-33',
      unit: 4,
      topic: 'BSI Certificate',
      question: 'Can an organization obtain an accredited ISO/IEC 27001 certificate based on IT-Grundschutz (ISO 27001 auf der Basis von IT-Grundschutz)?',
      options: {
        A: 'No, BSI certification is strictly prohibited from using ISO labels.',
        B: 'Yes, fulfilling Standard Protection under BSI IT-Grundschutz qualifies an organization for an accredited ISO 27001 certificate issued by BSI.',
        C: 'Only if the enterprise is owned by the German Federal Ministry of Defence.',
        D: 'Only if no cloud computing is used.'
      },
      correctAnswer: 'B',
      explanation: 'BSI operates an accredited scheme where successful audit of Standard-Absicherung awards an "ISO 27001 Certificate on the basis of IT-Grundschutz".',
      memoryTip: 'BSI issues ISO 27001 certificates on the basis of IT-Grundschutz.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-34',
      unit: 4,
      topic: 'Protection Determination',
      question: 'Which of the following is evaluated when determining protection requirements under BSI 200-2?',
      options: {
        A: 'Personal political opinions of the CEO',
        B: 'Potential damage to business operations, financial losses, regulatory non-compliance, and impairment of personal rights in case of CIA breach',
        C: 'The physical height of server racks',
        D: 'Software licensing fees from Microsoft'
      },
      correctAnswer: 'B',
      explanation: 'Protection requirements evaluate damage scenarios: financial loss, violation of laws/contracts, negative impact on operations, and violation of personal rights/safety.',
      memoryTip: 'Damage scenarios = Financial, legal, operational, and personal harm.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-35',
      unit: 4,
      topic: 'Step 5 Supplementary Risk Analysis',
      question: 'Why does BSI IT-Grundschutz use "Supplementary Risk Analysis" rather than starting with a full risk analysis from scratch for every asset?',
      options: {
        A: 'To save time and cost by relying on proven, pre-packaged standard safeguards for normal risks, focusing deep analysis only where risks are exceptionally high.',
        B: 'Because BSI standards do not allow mathematical calculations.',
        C: 'To prevent external auditors from reading system logs.',
        D: 'Because German law bans risk assessments for small companies.'
      },
      correctAnswer: 'A',
      explanation: 'IT-Grundschutz solves the inefficiency of full risk assessments by pre-defining proven controls for normal risks, reserving custom risk analysis (BSI 200-3) for high-exposure items.',
      memoryTip: 'Pre-packaged standard controls save time; risk analysis reserved for high-risk assets.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-36',
      unit: 4,
      topic: 'Core Requirements Priority',
      question: 'During emergency operational planning or rapid compliance remediation, why must Core Requirements (Basis-Anforderungen) be deployed first?',
      options: {
        A: 'Because they are legally copyrighted by BSI.',
        B: 'Because they address fundamental existential vulnerabilities without which any advanced controls are completely ineffective.',
        C: 'Because they are always free of charge.',
        D: 'Because they do not require software.'
      },
      correctAnswer: 'B',
      explanation: 'Core requirements form the indispensable baseline foundation. If core requirements (e.g., basic patching, backups) are missing, advanced safeguards fail.',
      memoryTip: 'Core requirements are the indispensable foundation.',
      difficulty: 'Foundation'
    },
    {
      id: 'u4-mcq-37',
      unit: 4,
      topic: 'Accumulation Effect Trigger',
      question: 'What is the key prerequisite for triggering the Accumulation Effect in an IT architecture?',
      options: {
        A: 'Every asset must have a Very High protection requirement.',
        B: 'Multiple independent business processes or applications must share a single IT resource, such that their combined simultaneous loss causes disproportionate cumulative damage.',
        C: 'The company must have at least 1,000 servers.',
        D: 'All applications must use the same programming language.'
      },
      correctAnswer: 'B',
      explanation: 'Accumulation requires shared reliance on a single component where simultaneous disruption causes aggregate damage far exceeding individual losses.',
      memoryTip: 'Concentration of multiple dependencies on a single shared asset.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u4-mcq-38',
      unit: 4,
      topic: 'Distribution Effect Requirement',
      question: 'Before an auditor permits the use of the Distribution Effect to lower an availability requirement, what must the enterprise demonstrate?',
      options: {
        A: 'A signed letter from the CEO promising no outages.',
        B: 'Verifiable technical redundancy, automatic failover mechanisms, and validated disaster recovery testing proving that an individual node’s loss causes no service disruption.',
        C: 'That the software is open-source.',
        D: 'That all servers are located in the same room.'
      },
      correctAnswer: 'B',
      explanation: 'The Distribution Effect cannot be assumed theoretically; the enterprise must prove functional redundancy, clustering, and validated failover.',
      memoryTip: 'Proven redundancy & tested failover required for Distribution Effect.',
      difficulty: 'Intermediate'
    }
  ]
};
