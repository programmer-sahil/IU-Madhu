import { UnitData } from '../../types';

export const unit3Data: UnitData = {
  id: 3,
  code: 'DLMIGCR01-01_E-U3',
  title: 'IT Compliance',
  subtitle: 'Risk Management, Control Architectures, Compliance Frameworks & Auditing',
  estimatedTime: '4.5 Hours',
  color: 'emerald',
  gradient: 'from-emerald-600 via-teal-600 to-indigo-900',
  badge: 'Risk & Standards',
  overview: `Unit 3 explores the operational and regulatory core of IT Compliance and Information Security Risk Management. It examines the formal definitions of compliance, risk appetite, tolerance, and thresholds; the canonical risk formula (Risk = Threat × Vulnerability × Asset Value); inherent vs residual risk; the four risk treatment strategies (Mitigate, Accept, Avoid, Transfer); internal control categories and types; control limitations (human error, collusion, management override, access creep); and premier standards including ISO 31000, ISO/IEC 27001 (3-year certification cycle), ISO 27002, ISO 27005, SOC 2 (Type 1 vs Type 2), and NIST SP 800-53.`,

  summarySections: [
    {
      title: '1. Fundamentals of IT Compliance & Risk Management',
      summaryParagraph: `IT Compliance is the state of adhering to mandated laws, regulatory requirements, industry standards, and internal corporate policies governing information systems and data handling. Rather than an end in itself, compliance is a baseline discipline within risk management designed to prevent legal penalties, operational paralysis, and reputational destruction.`,
      keyPoints: [
        'IT Compliance: The demonstrable adherence to regulatory rules, statutory laws (e.g., GDPR, SOX), industry regulations (e.g., PCI-DSS), and internal governance policies.',
        'Risk Management: The coordinated activities to direct and control an organization with regard to risk (ISO 31000). Balances risk exposure with strategic value creation.',
        'Risk Appetite: The broad amount and type of risk an organization is willing to pursue or retain in pursuit of its strategic objectives (set by the Board).',
        'Risk Tolerance: The acceptable level of variation or deviation around specific objectives (the operational boundaries of appetite).',
        'Risk Threshold: The quantifiable point or trigger level beyond which immediate risk response or executive escalation is mandated.'
      ],
      examInsight: `Do not confuse Risk Appetite with Risk Tolerance. Risk Appetite is the broad strategic willingness to take risk set by the Board; Risk Tolerance is the operational variance permitted around specific performance targets.`
    },
    {
      title: '2. The Canonical Risk Formula and Risk Assessment',
      summaryParagraph: `In IT compliance and cybersecurity theory, risk is formally expressed as a function of three variables: Threat, Vulnerability, and Asset Value.`,
      keyPoints: [
        'The Risk Formula: Risk = Threat × Vulnerability × Asset Value',
        'Threat: Any natural, human, or technical circumstance with the potential to adversely impact an asset (e.g., ransomware gang, flood, hardware failure).',
        'Vulnerability: A weakness, flaw, or gap in security procedures, design, implementation, or internal controls that can be exploited by a threat.',
        'Asset Value: The tangible and intangible worth of the asset (confidentiality, integrity, availability, financial impact, replacement cost, regulatory penalties).',
        'Core Axiom: If any of the three factors is zero, Risk is mathematically ZERO. If an unpatched zero-day vulnerability exists on an offline machine holding no valuable data and disconnected from networks, risk remains negligible.'
      ],
      examInsight: `Remember: Risk = Threat × Vulnerability × Asset Value. If there is no vulnerability (patched), or no threat (threat actor impossible), or no asset value, there is no risk.`
    },
    {
      title: '3. Inherent Risk vs Residual Risk & The Four Risk Treatments',
      summaryParagraph: `Risk management measures exposure before and after the application of controls. Once risks are identified and assessed, management selects from four distinct treatment strategies:`,
      comparisonTable: {
        headers: ['Concept', 'Definition & Formula', 'Action & Context'],
        rows: [
          ['Inherent Risk', 'Gross risk level present in an environment BEFORE any controls or safeguards are applied.', 'Evaluates raw exposure based on natural threats and vulnerabilities.'],
          ['Residual Risk', 'Net risk remaining AFTER controls, countermeasures, and treatments have been implemented.', 'Formula: Residual Risk = Inherent Risk − Impact of Controls. Must fall within Risk Appetite.'],
          ['Mitigate / Modify', 'Deploying controls to reduce likelihood or impact.', 'Installing firewalls, implementing MFA, establishing security policies.'],
          ['Transfer / Share', 'Shifting financial or operational impact to a third party.', 'Purchasing cyber insurance, outsourcing infrastructure to a vetted SaaS with SLA penalties.'],
          ['Avoid', 'Eliminating the risk exposure by ceasing the activity or discarding the asset.', 'Decommissioning a vulnerable legacy server rather than trying to patch it.'],
          ['Accept', 'Formally acknowledging and retaining the risk without additional controls.', 'Occurs when the cost of controls exceeds asset value and risk is within appetite. Requires formal sign-off.']
        ]
      },
      keyPoints: [
        'Residual risk can NEVER be reduced to absolute zero in practical enterprise computing.',
        'Risk Acceptance is valid only when formally signed off by an authorized asset owner and within approved risk appetite thresholds.'
      ],
      examInsight: `Exam Trap: "Risk Transfer" does NOT transfer legal or regulatory accountability. A company can transfer financial risk via cyber insurance, but under GDPR or SOX, the organization remains legally accountable for data breaches.`
    },
    {
      title: '4. Internal Control Shortcomings and Human Limitations',
      summaryParagraph: `No control system is infallible. Academic examination frequently tests the inherent limitations and human vulnerabilities of control architectures:`,
      keyPoints: [
        '1. Human Error: Honest mistakes, cognitive overload, fatigue, or misunderstanding of complex SOPs leading to misconfigurations or accidental data exposure.',
        '2. Fraud: Intentional deception or asset theft by employees or insiders motivated by personal financial gain.',
        '3. Collusion: Two or more individuals conspiring together to circumvent controls (e.g., an accountant and a payment authorizer colluding to bypass segregation of duties).',
        '4. Management Override: Senior executives using authority to bypass standard controls and approvals, often under the guise of "business urgency".',
        '5. Access Creep (Privilege Creep): The gradual accumulation of unnecessary system privileges over time as an employee changes roles, violating the Principle of Least Privilege.'
      ],
      examInsight: `Examiners test how controls fail. Be prepared to name: Human Error, Fraud, Collusion, Management Override, and Access Creep.`
    },
    {
      title: '5. Major Compliance & Security Standards: ISO 27000 Series, SOC 2, NIST 800-53',
      summaryParagraph: `Organizations benchmark compliance against established international frameworks:`,
      keyPoints: [
        'ISO/IEC 27001: The specification standard for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Uses the PDCA cycle. Organizations are formally certified for a 3-year validity cycle with annual surveillance audits.',
        'ISO/IEC 27002: The code of practice / control catalogue. Provides guidance and implementation advice for security controls (Annex A of 27001). Cannot be certified against independently.',
        'ISO/IEC 27005: Guidance for information security risk management. Details risk identification, analysis, evaluation, and treatment methodologies aligned with ISO 31000 and ISO 27001.',
        'ISO 31000: General, high-level risk management principles, framework, and process guidelines applicable across all organizational domains.',
        'SOC 2 (System and Organization Controls 2): AICPA standard evaluating service organizations based on five Trust Services Criteria: Security (Common Criteria), Availability, Processing Integrity, Confidentiality, and Privacy. Type 1 evaluates design at a point in time; Type 2 tests operating effectiveness over a period of time (typically 6–12 months).',
        'NIST SP 800-53: Comprehensive catalog of security and privacy controls for federal information systems and critical infrastructure.'
      ],
      examInsight: `Crucial difference: ISO 27001 is the certifiable ISMS requirement; ISO 27002 is the control catalogue (cannot be certified). SOC 2 Type 1 = point in time (design only); SOC 2 Type 2 = operational period (operating effectiveness). ISO 27001 certification cycle = 3 years!`
    }
  ],

  keyConcepts: [
    {
      id: 'c3-1',
      term: 'Risk Formula (Risk = Threat × Vulnerability × Asset Value)',
      simpleExplanation: 'Risk is the danger created when a threat exploits a weakness to harm something valuable.',
      examDefinition: 'Information security risk is defined as the mathematical or qualitative product of three variables: Risk = Threat × Vulnerability × Asset Value. Risk represents the likelihood and impact of a threat actor exploiting a specific vulnerability to compromise an organizational asset.',
      whyItMatters: 'Demonstrates that risk cannot exist without all three elements present simultaneously.',
      howItWorks: 'Risk assessment calculates likelihood and impact based on threat capability/motivation, vulnerability exploitability, and business asset valuation.',
      examKeywords: ['Risk = Threat × Vulnerability × Asset Value', 'Threat', 'Vulnerability', 'Asset Value', 'Likelihood', 'Impact'],
      commonTrap: 'Confusing Threat (external actor/event) with Vulnerability (internal system weakness).',
      category: 'Risk Foundations'
    },
    {
      id: 'c3-2',
      term: 'Inherent Risk vs Residual Risk',
      simpleExplanation: 'Inherent risk is the raw danger before doing anything; Residual risk is the danger left over after controls are applied.',
      examDefinition: 'Inherent risk is the raw, unmitigated risk exposure an enterprise faces in the absence of any safeguards or countermeasures. Residual risk is the remaining risk exposure after existing or planned internal controls have been applied (Residual Risk = Inherent Risk − Control Impact).',
      whyItMatters: 'Executive management and the Board must verify that Residual Risk falls within the approved Risk Appetite.',
      howItWorks: 'Organizations identify inherent risk, design and deploy controls, measure control effectiveness, and determine if residual risk is acceptable or requires further treatment.',
      examKeywords: ['Inherent Risk', 'Residual Risk', 'Control Impact', 'Risk Appetite', 'Gross vs Net Risk'],
      commonTrap: 'Believing that residual risk can or should be reduced to zero (zero risk is economically impossible).',
      category: 'Risk Foundations'
    },
    {
      id: 'c3-3',
      term: 'The Four Risk Treatments',
      simpleExplanation: 'Four ways to handle risk: Mitigate (reduce it), Avoid (stop doing it), Transfer (insure/outsource it), Accept (live with it).',
      examDefinition: 'The four formal risk treatment strategies under ISO 31000 / ISO 27005: 1. Mitigate/Modify (deploying controls to lower likelihood or impact), 2. Avoid (ceasing the risk-bearing activity), 3. Transfer/Share (shifting financial burden to insurers or partners), 4. Accept (formally retaining the risk within approved appetite).',
      whyItMatters: 'Gives organizations a systematic taxonomy to allocate capital and prioritize security investments.',
      howItWorks: 'Each identified risk is evaluated against cost-benefit and risk appetite to select the optimal treatment option.',
      examKeywords: ['Mitigate (Modify)', 'Avoid', 'Transfer (Share)', 'Accept', 'ISO 31000', 'Cyber Insurance'],
      commonTrap: 'Assuming that transferring risk via cyber insurance relieves the organization of statutory legal responsibility.',
      category: 'Risk Treatment'
    },
    {
      id: 'c3-4',
      term: 'ISO/IEC 27001 vs ISO/IEC 27002 vs ISO/IEC 27005',
      simpleExplanation: '27001 is the certifiable rulebook for the management system; 27002 is the menu of specific security controls; 27005 is the risk assessment guide.',
      examDefinition: 'ISO/IEC 27001 specifies the normative requirements for establishing, operating, and certifying an ISMS (3-year cycle). ISO/IEC 27002 provides implementation guidance for the security controls referenced in Annex A. ISO/IEC 27005 provides guidelines for information security risk assessment and management.',
      whyItMatters: 'Confusing these standards causes instant point deductions in exams and certification audits.',
      howItWorks: 'An organization builds an ISMS following ISO 27001, performs risk management using ISO 27005, and selects controls from ISO 27002.',
      examKeywords: ['ISO 27001 (ISMS Certification)', 'ISO 27002 (Control Guidelines)', 'ISO 27005 (Risk Management)', '3-Year Cycle', 'Annex A'],
      commonTrap: 'Saying a company is "certified against ISO 27002". Certification is ONLY possible against ISO 27001.',
      category: 'Standards'
    },
    {
      id: 'c3-5',
      term: 'SOC 2 Type 1 vs Type 2',
      simpleExplanation: 'SOC 2 Type 1 is a snapshot of control design today; Type 2 proves the controls actually worked continuously over 6 to 12 months.',
      examDefinition: 'SOC 2 (System and Organization Controls 2) attestation reports evaluate service organizations across Trust Services Criteria. A Type 1 report attests to the suitability of the design of controls at a specific point in time. A Type 2 report tests and attests to the operating effectiveness of controls over a specified period (typically 6–12 months).',
      whyItMatters: 'Type 2 is the gold standard required by enterprise enterprise customers because it verifies controls were actually followed in practice.',
      howItWorks: 'Auditors review policies for Type 1, but sample evidence over time (tickets, logs, reviews) for Type 2.',
      examKeywords: ['SOC 2', 'Trust Services Criteria', 'Type 1 (Point in time / Design)', 'Type 2 (Period of time / Operating effectiveness)'],
      commonTrap: 'Stating that SOC 2 Type 1 proves controls operated effectively over time.',
      category: 'Auditing & Attestation'
    },
    {
      id: 'c3-6',
      term: 'Access Creep (Privilege Creep)',
      simpleExplanation: 'When employees change jobs inside a company and keep their old permissions, ending up with way too much access.',
      examDefinition: 'Access creep is the gradual, unmonitored accumulation of user access rights and administrative privileges as an employee transfers across roles or projects without previous permissions being revoked, violating the Principle of Least Privilege.',
      whyItMatters: 'Creates massive insider threat risk, segregation of duties conflicts, and easy lateral movement for compromised accounts.',
      howItWorks: 'Prevented by regular user access reviews (attestations), role-based access control (RBAC), and automated identity lifecycle management (joiner-mover-leaver).',
      examKeywords: ['Access Creep', 'Privilege Creep', 'Principle of Least Privilege', 'User Access Review', 'Segregation of Duties'],
      commonTrap: 'Treating access creep as an external hacker technique; it is an internal organizational control deficiency.',
      category: 'Control Shortcomings'
    }
  ],

  cheatSheet: {
    mustMemorize: [
      'Risk Formula: Risk = Threat × Vulnerability × Asset Value.',
      'Inherent Risk = Gross raw risk BEFORE controls. Residual Risk = Net risk remaining AFTER controls.',
      'Four Risk Treatments: Mitigate (reduce), Accept (retain), Avoid (eliminate), Transfer (share/insure).',
      'Risk Appetite (Board broad appetite) vs Risk Tolerance (operational variance permitted) vs Risk Threshold (escalation trigger).',
      'Control Shortcomings: Human Error, Fraud, Collusion, Management Override, Access Creep.',
      'ISO 27001 = Certifiable ISMS requirements (3-year cycle). ISO 27002 = Control catalogue guidelines (cannot be certified). ISO 27005 = Risk management.',
      'SOC 2: 5 Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy). Type 1 = Design at a point in time; Type 2 = Operating effectiveness over period (6-12 months).',
      'Design Effectiveness (Blueprint sound?) vs Operating Effectiveness (Did it work consistently in practice?).'
    ],
    coreDefinitions: [
      {
        term: 'IT Compliance',
        definition: 'Demonstrable adherence of an organization’s IT systems and processes to external legal statutes, contractual agreements, industry regulations, and internal governance policies.'
      },
      {
        term: 'Risk Appetite',
        definition: 'The broad amount and type of risk that an organization is willing to accept or retain in pursuit of its strategic business objectives, established by the Board.'
      },
      {
        term: 'Residual Risk',
        definition: 'The risk remaining after risk treatment options and internal controls have been applied (Inherent Risk minus Control Impact).'
      },
      {
        term: 'Principle of Least Privilege',
        definition: 'The security practice of granting users only the minimum access rights and permissions necessary to perform their legitimate job responsibilities.'
      }
    ],
    importantNumbers: [
      { number: '3 Years', label: 'ISO 27001 Validity', context: 'Certification is valid for 3 years, subject to mandatory annual surveillance audits.' },
      { number: '5 Criteria', label: 'SOC 2 Trust Criteria', context: 'Security (mandatory Common Criteria), Availability, Processing Integrity, Confidentiality, Privacy.' },
      { number: '6 to 12 Mo', label: 'SOC 2 Type 2 Period', context: 'Standard testing duration to evaluate operating effectiveness of controls.' },
      { number: '4 Strategies', label: 'Risk Treatments', context: 'Mitigate (Modify), Avoid, Transfer (Share), Accept.' }
    ],
    frameworkNames: [
      { acronym: 'ISO 31000', fullName: 'Risk Management — Guidelines', focus: 'General enterprise risk management framework and principles' },
      { acronym: 'ISO/IEC 27001', fullName: 'Information Security Management Systems — Requirements', focus: 'Certifiable ISMS baseline standard' },
      { acronym: 'ISO/IEC 27002', fullName: 'Information Security Controls', focus: 'Reference code of practice for security controls' },
      { acronym: 'ISO/IEC 27005', fullName: 'Information Security Risk Management', focus: 'Risk assessment and treatment methodology for ISMS' },
      { acronym: 'SOC 2', fullName: 'System and Organization Controls 2', focus: 'AICPA attestation standard for service organizations' },
      { acronym: 'NIST SP 800-53', fullName: 'Security and Privacy Controls for Federal Information Systems', focus: 'Comprehensive US catalog of security controls' }
    ],
    processes: [
      {
        name: 'ISO 27005 / ISO 31000 Risk Management Process',
        steps: [
          'Scope & Context Establishment: Define boundaries, regulatory environment, and risk criteria.',
          'Risk Identification: Identify assets, threats, vulnerabilities, existing controls, and consequences.',
          'Risk Analysis: Determine likelihood and impact (qualitative or quantitative).',
          'Risk Evaluation: Compare calculated risk against enterprise risk appetite and criteria.',
          'Risk Treatment: Select Mitigate, Avoid, Transfer, or Accept.',
          'Monitoring & Review: Continuously track risks and control effectiveness.'
        ],
        description: 'Standard international workflow for managing IT and information security risks.'
      }
    ],
    comparisons: [
      {
        conceptA: 'Inherent Risk',
        conceptB: 'Residual Risk',
        comparisonPoints: [
          { criterion: 'State', detailA: 'Gross risk exposure BEFORE controls', detailB: 'Net risk exposure AFTER controls' },
          { criterion: 'Calculation', detailA: 'Threat × Vulnerability × Asset Value', detailB: 'Inherent Risk − Impact of Controls' },
          { criterion: 'Governance Role', detailA: 'Determines what controls are needed', detailB: 'Must be verified to sit within approved Risk Appetite' }
        ]
      },
      {
        conceptA: 'SOC 2 Type 1',
        conceptB: 'SOC 2 Type 2',
        comparisonPoints: [
          { criterion: 'Scope Tested', detailA: 'Suitability of Control Design only', detailB: 'Suitability of Design AND Operating Effectiveness' },
          { criterion: 'Timeframe', detailA: 'Point in time (e.g., as of June 30)', detailB: 'Period of time (e.g., Jan 1 to Dec 31, typically 6–12 months)' },
          { criterion: 'Assurance Level', detailA: 'Moderate (proves controls look good on paper)', detailB: 'High (proves controls operated consistently in practice)' }
        ]
      }
    ],
    examTraps: [
      {
        trap: 'Claiming that transferring risk via cyber insurance relieves legal liability under GDPR or SOX.',
        truth: 'Risk transfer only shifts financial costs. The enterprise retains full legal and regulatory liability.'
      },
      {
        trap: 'Saying an organization is "ISO 27002 certified".',
        truth: 'Organizations can ONLY be certified against ISO/IEC 27001. ISO 27002 is merely an advisory guide.'
      },
      {
        trap: 'Assuming residual risk can be reduced to zero.',
        truth: 'Zero risk is practically impossible. Residual risk always exists and must be managed within risk appetite.'
      }
    ],
    memoryShortcuts: [
      { acronym: 'M-A-T-A', meaning: 'Mitigate, Avoid, Transfer, Accept', usage: 'The 4 fundamental risk treatment options.' },
      { acronym: 'T-V-A', meaning: 'Threat × Vulnerability × Asset Value', usage: 'The canonical Risk Formula.' },
      { acronym: 'SAP-CP', meaning: 'Security, Availability, Processing Integrity, Confidentiality, Privacy', usage: 'SOC 2 Five Trust Services Criteria.' }
    ]
  },

  importantQuestions: [
    {
      id: 'q3-1',
      unit: 3,
      question: 'Explain the complete risk-and-control logic used in IT compliance, incorporating risk appetite, the risk formula, inherent vs residual risk, control categories and types, and risk treatments.',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'Provide an end-to-end logical narrative connecting: Risk Appetite -> Risk Formula -> Inherent Risk -> Controls (Categories & Types) -> Residual Risk -> Risk Treatments. Must explain that residual risk must not exceed risk appetite.',
      modelAnswer: `The risk-and-control logic in IT compliance establishes a structured mathematical and managerial continuum:

1. Risk Appetite & Governance Foundation:
The governing body (Board) defines the enterprise Risk Appetite—the broad quantum of risk the organization is prepared to accept in pursuit of its strategic goals.

2. Risk Calculation & Inherent Risk:
Prior to implementing controls, the organization assesses its Inherent (gross) Risk using the canonical risk formula:
Risk = Threat × Vulnerability × Asset Value
Where Threat is the potential danger, Vulnerability is the exploitable system flaw, and Asset Value is the business impact. Inherent risk represents raw exposure.

3. Internal Control Architecture:
To reduce inherent risk, management designs and deploys Internal Controls across:
- Control Categories (mechanisms): Administrative (policies, training), Physical (locks, guards), and Technical/Logical (firewalls, MFA, encryption).
- Control Types (functional timing): Preventative (stops incidents), Detective (identifies ongoing/past incidents), Corrective (remediates damage), Directive, Deterrent, and Compensatory.

4. Residual Risk Determination:
Residual Risk is the net risk exposure remaining after controls have been implemented:
Residual Risk = Inherent Risk − Control Impact
The fundamental governance imperative is: Residual Risk must fall within the approved Risk Appetite.

5. Risk Treatment Options:
If residual risk exceeds risk appetite, management applies the four risk treatment strategies:
- Mitigate/Modify: Deploying additional or compensatory controls.
- Transfer/Share: Offsetting financial impact via cyber insurance or SLAs.
- Avoid: Ceasing the risky activity or retiring the vulnerable technology.
- Accept: Formally retaining the residual risk when controls are cost-prohibitive and exposure is signed off within appetite.`,
      answerStructure: [
        '1. Definition of Risk Appetite set by the Board.',
        '2. The canonical Risk Formula and definition of Inherent Risk.',
        '3. Control deployment across categories (Admin/Physical/Technical) and types (Preventative/Detective/Corrective).',
        '4. Formula for Residual Risk and comparison against Risk Appetite.',
        '5. The four Risk Treatment options (Mitigate, Transfer, Avoid, Accept).'
      ],
      keywords: ['Risk Appetite', 'Risk = Threat × Vulnerability × Asset Value', 'Inherent Risk', 'Residual Risk', 'Control Categories', 'Control Types', 'Mitigate', 'Transfer', 'Avoid', 'Accept'],
      commonMistakes: 'Leaving out the risk formula, failing to explain that residual risk must be lower than risk appetite, or confusing categories with types.',
      selfCheckChecklist: [
        'Mentioned Risk Appetite set by Board',
        'Included canonical formula: Threat × Vulnerability × Asset Value',
        'Differentiated Inherent vs Residual Risk',
        'Referenced control categories and types',
        'Listed all 4 risk treatments (Mitigate, Transfer, Avoid, Accept)'
      ]
    },
    {
      id: 'q3-2',
      unit: 3,
      question: 'Compare ISO/IEC 27001, ISO/IEC 27002, and ISO/IEC 27005. Detail the certification validity period for ISO 27001.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'Clearly delineate between requirements/certification (27001), code of practice/guidelines (27002), and risk management (27005). State the exact 3-year certification validity cycle with surveillance audits.',
      modelAnswer: `The ISO/IEC 27000 family forms a cohesive information security management suite with distinct roles:

1. ISO/IEC 27001 (ISMS Requirements):
- Role: The normative specification standard for establishing, implementing, operating, monitoring, reviewing, maintaining, and continually improving an Information Security Management System (ISMS).
- Certification: It is the ONLY standard in the family against which an organization can achieve formal accredited certification.
- Validity Cycle: ISO 27001 certification is valid for exactly 3 years, subject to mandatory annual surveillance audits (in Year 1 and Year 2) and a full recertification audit prior to the end of Year 3.

2. ISO/IEC 27002 (Code of Practice for Information Security Controls):
- Role: An advisory guidance document providing practical implementation advice, best practices, and explanations for the security controls referenced in Annex A of ISO 27001.
- Certification: Organizations CANNOT be certified against ISO 27002; it serves solely as an implementation handbook and control catalogue.

3. ISO/IEC 27005 (Information Security Risk Management):
- Role: Provides detailed guidelines for conducting information security risk assessments and risk treatments within the context of an ISMS, operationalizing the general principles of ISO 31000 for cybersecurity.`,
      answerStructure: [
        '1. ISO 27001: Normative specification, certifiable ISMS, 3-year validity with annual surveillance.',
        '2. ISO 27002: Guidance/catalogue for controls (Annex A), non-certifiable.',
        '3. ISO 27005: Risk management methodology guidelines.',
        '4. Summary matrix or clear concluding contrast.'
      ],
      keywords: ['ISO/IEC 27001', 'ISO/IEC 27002', 'ISO/IEC 27005', 'ISMS', 'Certifiable', 'Annex A', '3 Years Validity', 'Annual Surveillance Audits', 'Risk Management Guidelines'],
      commonMistakes: 'Stating that companies can get certified under ISO 27002, or claiming ISO 27001 certification lasts for 5 years or indefinitely.',
      selfCheckChecklist: [
        'Emphasized that only ISO 27001 is certifiable',
        'Stated 3-year validity period with annual surveillance audits',
        'Explained ISO 27002 as implementation guidance for controls',
        'Identified ISO 27005 as risk management guidelines'
      ]
    },
    {
      id: 'q3-3',
      unit: 3,
      question: 'Explain what SOC 2 is, differentiate between Type 1 and Type 2 reports, and name the five Trust Services Criteria.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'Define SOC 2 as an AICPA attestation standard for service providers. List all 5 Trust Services Criteria. Contrast Type 1 (point in time / design) with Type 2 (period of time / operating effectiveness).',
      modelAnswer: `SOC 2 (System and Organization Controls 2) is an independent attestation standard developed by the AICPA (American Institute of CPAs) designed for service providers (e.g., cloud platforms, SaaS, data centers) to evaluate their internal controls governing customer data.

The Five Trust Services Criteria:
1. Security (Common Criteria): Protection against unauthorized access (the only mandatory criterion in every SOC 2 report).
2. Availability: Systems and services are operational and accessible as agreed.
3. Processing Integrity: System processing is complete, valid, accurate, timely, and authorized.
4. Confidentiality: Information designated as confidential is protected from unauthorized access or disclosure.
5. Privacy: Personal information is collected, used, retained, disclosed, and disposed of in conformity with commitments and privacy principles.

Distinction Between Type 1 and Type 2 Reports:
- SOC 2 Type 1 Report: Evaluates the suitability of the design of controls at a single, specific point in time (e.g., as of December 31). The auditor assesses whether the control descriptions are fairly presented and whether the controls are appropriately designed to meet criteria if operated effectively.
- SOC 2 Type 2 Report: Evaluates both the design suitability AND the operating effectiveness of controls over a specified period of time (typically 6 to 12 months). The auditor actively samples and tests transactions, logs, and evidence throughout the period to prove controls actually operated consistently. Type 2 provides vastly higher assurance.`,
      answerStructure: [
        '1. Definition of SOC 2 and target audience (service organizations).',
        '2. Enumeration of all 5 Trust Services Criteria with Security as common baseline.',
        '3. Contrast between Type 1 (point in time / design) and Type 2 (period of time / operating effectiveness).'
      ],
      keywords: ['SOC 2', 'AICPA', 'Trust Services Criteria', 'Security', 'Availability', 'Processing Integrity', 'Confidentiality', 'Privacy', 'Type 1 (Point in time)', 'Type 2 (Period of time)', 'Operating Effectiveness'],
      commonMistakes: 'Stating Security is optional, or confusing Type 1 with Type 2.',
      selfCheckChecklist: [
        'Listed all 5 Trust Services Criteria',
        'Highlighted Security as the Common Criteria',
        'Contrasted Type 1 (point in time, design) vs Type 2 (period, operating effectiveness)'
      ]
    },
    {
      id: 'q3-4',
      unit: 3,
      question: 'What is Access Creep (Privilege Creep), why does it represent a critical control shortcoming, and how can it be remediated?',
      marks: 6,
      priority: 'POSSIBLE SHORT QUESTION',
      suggestedTimeMinutes: 8,
      examinerExpectation: 'Define access creep as accumulation of unnecessary privileges over time when changing roles. Explain the resulting security risk (violation of Least Privilege, SoD conflicts). Describe remediation (access reviews, automated de-provisioning).',
      modelAnswer: `Access Creep (also known as Privilege Creep) refers to the gradual accumulation of system permissions, access rights, and administrative privileges by an employee as they transfer between projects, teams, or departments over time, where newly granted rights are added while obsolete privileges are never revoked.

Why it represents a critical control shortcoming:
1. Violation of the Principle of Least Privilege: Users end up with permissions far in excess of their current operational duties.
2. Segregation of Duties (SoD) Conflicts: An employee moving from a developer role to a financial accounting role might retain code deployment rights and gain payment approval rights, enabling undetected fraud.
3. Expanded Attack Surface: If an employee's credentials are breached, the attacker gains lateral access across numerous disparate systems.

Remediation Mechanisms:
1. Periodic User Access Reviews (Access Attestation): Mandatory manager sign-offs at least quarterly or annually to certify the ongoing necessity of every permission.
2. Automated Role-Based Access Control (RBAC): Granting access strictly based on dynamic job roles rather than individual exceptions.
3. Automated Lifecycle Management: Robust Identity and Access Management (IAM) workflows that automatically de-provision prior permissions upon role change (Joiner-Mover-Leaver processes).`,
      answerStructure: [
        '1. Definition of Access Creep.',
        '2. Analysis of why it is dangerous (Least privilege, SoD, blast radius).',
        '3. Concrete remediation mechanisms (Reviews, RBAC, automated de-provisioning).'
      ],
      keywords: ['Access Creep', 'Privilege Creep', 'Principle of Least Privilege', 'Segregation of Duties', 'User Access Review', 'RBAC', 'Joiner-Mover-Leaver'],
      commonMistakes: 'Treating access creep as an external hacking tactic rather than an internal administrative control failure.',
      selfCheckChecklist: [
        'Defined access creep through employee role transitions',
        'Linked it to violation of Least Privilege and SoD',
        'Identified user access reviews and automated de-provisioning as solutions'
      ]
    }
  ],

  flashcards: [
    {
      id: 'fc3-1',
      unit: 3,
      front: 'The Canonical Risk Formula',
      back: 'Risk = Threat × Vulnerability × Asset Value.\nIf any component is zero, risk is zero.',
      category: 'Risk',
      examTip: 'Threat is external/circumstance; Vulnerability is internal weakness.'
    },
    {
      id: 'fc3-2',
      unit: 3,
      front: 'Inherent Risk vs Residual Risk',
      back: 'Inherent Risk: Gross risk BEFORE any controls.\nResidual Risk: Net risk remaining AFTER controls.\nResidual Risk = Inherent Risk − Control Impact.',
      category: 'Risk',
      examTip: 'Residual risk must sit within approved Risk Appetite.'
    },
    {
      id: 'fc3-3',
      unit: 3,
      front: 'The 4 Risk Treatments',
      back: '1. Mitigate/Modify (deploy controls)\n2. Avoid (eliminate activity)\n3. Transfer/Share (insurance, contracts)\n4. Accept (retain risk within appetite)',
      category: 'Risk Treatment',
      examTip: 'Risk transfer does NOT transfer legal regulatory liability!'
    },
    {
      id: 'fc3-4',
      unit: 3,
      front: 'ISO/IEC 27001 Certification Cycle',
      back: '3-Year validity cycle.\nRequires mandatory annual surveillance audits in Year 1 & 2, followed by recertification audit in Year 3.',
      category: 'Standards',
      examTip: 'Remember the number: 3 Years!'
    },
    {
      id: 'fc3-5',
      unit: 3,
      front: 'ISO 27001 vs ISO 27002',
      back: 'ISO 27001: Certifiable ISMS requirements.\nISO 27002: Guidance & control catalogue (cannot be certified against independently).',
      category: 'Standards',
      examTip: 'Never say a company is "ISO 27002 certified".'
    },
    {
      id: 'fc3-6',
      unit: 3,
      front: 'SOC 2 Type 1 vs Type 2',
      back: 'Type 1: Suitability of control design at a single POINT IN TIME.\nType 2: Design AND operating effectiveness over a PERIOD OF TIME (6–12 months).',
      category: 'Auditing',
      examTip: 'Type 2 tests actual evidence over time!'
    },
    {
      id: 'fc3-7',
      unit: 3,
      front: 'SOC 2: Five Trust Services Criteria',
      back: '1. Security (Common Criteria - mandatory)\n2. Availability\n3. Processing Integrity\n4. Confidentiality\n5. Privacy',
      category: 'Auditing',
      examTip: 'Security is the only mandatory criterion.'
    },
    {
      id: 'fc3-8',
      unit: 3,
      front: 'Access Creep (Privilege Creep)',
      back: 'The gradual accumulation of unneeded permissions over time as an employee changes roles without previous rights being revoked. Violates Least Privilege.',
      category: 'Controls',
      examTip: 'Prevented via periodic User Access Reviews (UAR) and RBAC.'
    }
  ],

  activeRecall: [
    {
      id: 'ar3-1',
      question: 'What is the canonical IT risk formula, and what happens if any of the three factors is zero?',
      answer: 'Risk = Threat × Vulnerability × Asset Value. If any factor is zero (e.g. no vulnerability exists or no threat actor can reach the asset), Risk is mathematically zero.',
      keywords: ['Risk = Threat × Vulnerability × Asset Value', 'Zero risk if any factor is zero']
    },
    {
      id: 'ar3-2',
      question: 'Name the four risk treatment options under ISO 31000.',
      answer: '1. Mitigate (Modify), 2. Avoid, 3. Transfer (Share), 4. Accept.',
      keywords: ['Mitigate', 'Avoid', 'Transfer', 'Accept']
    },
    {
      id: 'ar3-3',
      question: 'How long is an ISO/IEC 27001 certification valid, and what is required during that period?',
      answer: 'Valid for 3 years, requiring mandatory annual surveillance audits in Year 1 and Year 2, and full recertification in Year 3.',
      keywords: ['3 years', 'Annual surveillance audits', 'Recertification']
    },
    {
      id: 'ar3-4',
      question: 'What is the core difference between a SOC 2 Type 1 and a SOC 2 Type 2 report?',
      answer: 'Type 1 tests control design at a single point in time. Type 2 tests design and operating effectiveness over a period of time (typically 6–12 months).',
      keywords: ['Type 1 point in time', 'Type 2 period of time', 'Operating effectiveness']
    }
  ],

  completionChecklist: [
    'Can recite and apply the Risk Formula: Risk = Threat × Vulnerability × Asset Value',
    'Can differentiate Inherent Risk from Residual Risk and link them to Risk Appetite',
    'Can explain all 4 Risk Treatments (Mitigate, Transfer, Avoid, Accept)',
    'Know the 5 Control Shortcomings (Human Error, Fraud, Collusion, Management Override, Access Creep)',
    'Know the difference between ISO 27001 (certifiable, 3-yr cycle), ISO 27002, and ISO 27005',
    'Can explain SOC 2 Type 1 vs Type 2 and list the 5 Trust Services Criteria',
    'Achieved at least 80% on Unit 3 MCQ Practice'
  ],

  mcqs: [
    {
      id: 'u3-mcq-1',
      unit: 3,
      topic: 'Risk Formula',
      question: 'According to the canonical risk formula in IT compliance, how is risk calculated?',
      options: {
        A: 'Risk = Threat + Vulnerability + Asset Value',
        B: 'Risk = Threat × Vulnerability × Asset Value',
        C: 'Risk = Inherent Risk / Controls',
        D: 'Risk = Asset Value − Annual Loss Expectancy'
      },
      correctAnswer: 'B',
      explanation: 'Risk is formally modeled as the multiplicative product of Threat, Vulnerability, and Asset Value (Risk = Threat × Vulnerability × Asset Value).',
      memoryTip: 'Risk = Threat × Vulnerability × Asset Value (Multiplication!).',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-2',
      unit: 3,
      topic: 'Risk Terminology',
      question: 'What is the gross risk exposure present in an enterprise BEFORE any security controls or countermeasures are implemented?',
      options: {
        A: 'Residual risk',
        B: 'Inherent risk',
        C: 'Accepted risk',
        D: 'Tolerable risk'
      },
      correctAnswer: 'B',
      explanation: 'Inherent risk is the raw, gross level of risk that exists prior to the application of controls and mitigations.',
      memoryTip: 'Inherent = Raw / Before controls. Residual = After controls.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-3',
      unit: 3,
      topic: 'Residual Risk',
      question: 'Which condition must be met for an organization’s residual risk to be deemed governance-compliant?',
      options: {
        A: 'Residual risk must be mathematically reduced to absolute zero.',
        B: 'Residual risk must fall within the organization’s approved Risk Appetite.',
        C: 'Residual risk must exceed inherent risk by at least 20%.',
        D: 'Residual risk must be fully outsourced to an external cloud vendor.'
      },
      correctAnswer: 'B',
      explanation: 'Residual risk can never be zero; it is compliant when management and the Board verify that it falls within approved Risk Appetite thresholds.',
      memoryTip: 'Residual Risk must fall within Risk Appetite.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-4',
      unit: 3,
      topic: 'Risk Treatment',
      question: 'An enterprise decides to purchase a comprehensive €10 million cyber insurance policy to cover ransom payments and forensic costs. Which risk treatment strategy is this?',
      options: {
        A: 'Risk Avoidance',
        B: 'Risk Mitigation',
        C: 'Risk Transfer (Sharing)',
        D: 'Risk Invalidation'
      },
      correctAnswer: 'C',
      explanation: 'Purchasing cyber insurance shifts the financial impact of a loss to a third party, exemplifying Risk Transfer (or Risk Sharing).',
      memoryTip: 'Insurance = Risk Transfer.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-5',
      unit: 3,
      topic: 'Risk Treatment Limits',
      question: 'Does purchasing cyber insurance relieve an enterprise from regulatory fines and legal liability under GDPR or SOX?',
      options: {
        A: 'Yes, insurance contracts supersede statutory EU regulations.',
        B: 'No, financial risk may be transferred, but statutory and legal accountability cannot be transferred to a third party.',
        C: 'Yes, provided the insurer is registered in the European Union.',
        D: 'Only if the policy was approved by the Board.'
      },
      correctAnswer: 'B',
      explanation: 'Risk transfer only shifts financial consequences. Legal and fiduciary accountability cannot be transferred or outsourced.',
      memoryTip: 'Financial risk can be transferred; legal liability cannot.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-6',
      unit: 3,
      topic: 'ISO Standards',
      question: 'How long is an accredited ISO/IEC 27001 certificate valid for an enterprise?',
      options: {
        A: '1 year',
        B: '3 years',
        C: '5 years',
        D: 'Indefinitely until a breach occurs'
      },
      correctAnswer: 'B',
      explanation: 'An ISO/IEC 27001 certification is valid for a 3-year cycle, requiring mandatory surveillance audits in years 1 and 2, followed by recertification.',
      memoryTip: 'ISO 27001 certification validity = 3 years.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-7',
      unit: 3,
      topic: 'ISO Standards Difference',
      question: 'Can an enterprise obtain an accredited external certification against ISO/IEC 27002 alone?',
      options: {
        A: 'Yes, any ISO standard can be certified independently.',
        B: 'No, ISO/IEC 27002 is an advisory code of practice and control catalogue; certification is only conducted against ISO/IEC 27001.',
        C: 'Yes, but only in Germany under BSI supervision.',
        D: 'Only if the company has fewer than 250 employees.'
      },
      correctAnswer: 'B',
      explanation: 'ISO/IEC 27002 is an advisory guide for controls. Certification can only be achieved against the requirements of ISO/IEC 27001.',
      memoryTip: 'Certify against 27001; guide controls with 27002.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-8',
      unit: 3,
      topic: 'SOC 2 Reports',
      question: 'What is the fundamental difference between a SOC 2 Type 1 report and a SOC 2 Type 2 report?',
      options: {
        A: 'Type 1 is for physical security, while Type 2 is for software security.',
        B: 'Type 1 evaluates control design at a single point in time, while Type 2 tests operating effectiveness over a period of time (typically 6–12 months).',
        C: 'Type 1 is published by ISO, while Type 2 is published by NIST.',
        D: 'Type 1 is free, while Type 2 is government-subsidized.'
      },
      correctAnswer: 'B',
      explanation: 'Type 1 is a point-in-time design assessment. Type 2 tests both design and operating effectiveness by sampling evidence over 6 to 12 months.',
      memoryTip: 'Type 1 = Point in time (design). Type 2 = Period of time (operating effectiveness).',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-9',
      unit: 3,
      topic: 'SOC 2 Trust Criteria',
      question: 'Which of the five Trust Services Criteria is mandatory in every SOC 2 attestation report?',
      options: {
        A: 'Privacy',
        B: 'Availability',
        C: 'Security (Common Criteria)',
        D: 'Processing Integrity'
      },
      correctAnswer: 'C',
      explanation: 'Security (also termed the Common Criteria) is the baseline mandatory requirement in all SOC 2 reports. The other four are optional based on service scope.',
      memoryTip: 'Security (Common Criteria) is mandatory in every SOC 2.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-10',
      unit: 3,
      topic: 'Control Shortcomings',
      question: 'An employee transfers from the IT helpdesk to financial accounting, and six months later moves to customer service, retaining permissions from all three roles. This is an example of:',
      options: {
        A: 'Management Override',
        B: 'Access Creep (Privilege Creep)',
        C: 'Collusion',
        D: 'Ransomware lateral movement'
      },
      correctAnswer: 'B',
      explanation: 'Access creep is the accumulation of unnecessary access rights over time as personnel change roles without previous privileges being revoked.',
      memoryTip: 'Accumulating old permissions = Access Creep.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-11',
      unit: 3,
      topic: 'Risk Treatment',
      question: 'A company identifies that an old legacy web server has an unpatchable vulnerability. Rather than leaving it exposed or writing custom code, they shut down the server and terminate the service permanently. This is:',
      options: {
        A: 'Risk Acceptance',
        B: 'Risk Avoidance',
        C: 'Risk Transfer',
        D: 'Risk Mitigation'
      },
      correctAnswer: 'B',
      explanation: 'Risk Avoidance involves eliminating the risk exposure entirely by terminating the activity or retiring the vulnerable asset.',
      memoryTip: 'Shutting down / eliminating the asset = Risk Avoidance.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-12',
      unit: 3,
      topic: 'Risk Appetite vs Tolerance',
      question: 'Which statement correctly contrasts Risk Appetite and Risk Tolerance?',
      options: {
        A: 'Risk Appetite is set by junior developers, while Risk Tolerance is set by external auditors.',
        B: 'Risk Appetite is the broad strategic level of risk the Board is willing to accept; Risk Tolerance is the acceptable operational variance around specific objectives.',
        C: 'Risk Tolerance is always higher than Risk Appetite.',
        D: 'They are completely synonymous in modern compliance frameworks.'
      },
      correctAnswer: 'B',
      explanation: 'Risk appetite reflects strategic high-level willingness set by the Board; risk tolerance is the tactical deviation or variance allowed around specific performance metrics.',
      memoryTip: 'Appetite = Broad strategic boundary. Tolerance = Operational variance.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-13',
      unit: 3,
      topic: 'Control Shortcomings',
      question: 'When two employees in separate departments conspire together to approve fictitious invoices and bypass segregation of duties, which control shortcoming has occurred?',
      options: {
        A: 'Collusion',
        B: 'Human Error',
        C: 'Access Creep',
        D: 'System Latency'
      },
      correctAnswer: 'A',
      explanation: 'Collusion occurs when two or more individuals work together to secretly subvert internal controls such as segregation of duties.',
      memoryTip: 'Conspiring together to bypass controls = Collusion.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-14',
      unit: 3,
      topic: 'ISO 31000',
      question: 'What is the primary role of ISO 31000 in risk management?',
      options: {
        A: 'It provides a certifiable checklist for firewall configurations.',
        B: 'It provides generic, high-level guidelines and principles for risk management across any organization and domain.',
        C: 'It replaces national commercial criminal codes.',
        D: 'It specifies SQL query syntax for databases.'
      },
      correctAnswer: 'B',
      explanation: 'ISO 31000 is a non-certifiable standard that establishes overarching principles and a framework for managing risk across all organizational areas.',
      memoryTip: 'ISO 31000 = Universal risk management guidelines.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-15',
      unit: 3,
      topic: 'ISO 27005',
      question: 'Which ISO standard specifically provides guidance for Information Security Risk Management within an ISMS?',
      options: {
        A: 'ISO/IEC 27005',
        B: 'ISO 9001',
        C: 'ISO 14001',
        D: 'ISO/IEC 38500'
      },
      correctAnswer: 'A',
      explanation: 'ISO/IEC 27005 is dedicated to Information Security Risk Management, providing methodologies for risk identification, estimation, and evaluation aligned with ISO 27001.',
      memoryTip: 'ISO 27005 = Information security risk management.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-16',
      unit: 3,
      topic: 'Audit Testing',
      question: 'An auditor checks whether an IT change control policy requires documented rollback plans, but finds that no changes were actually deployed this month to test. What has the auditor evaluated?',
      options: {
        A: 'Design Effectiveness only',
        B: 'Operating Effectiveness only',
        C: 'Both Design and Operating Effectiveness',
        D: 'Residual Risk Acceptance'
      },
      correctAnswer: 'A',
      explanation: 'The auditor evaluated whether the control was properly designed on paper (Design Effectiveness), but could not test whether it functioned in real operations over time (Operating Effectiveness).',
      memoryTip: 'Paper / blueprint review = Design Effectiveness.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-17',
      unit: 3,
      topic: 'Control Shortcomings',
      question: 'The CEO demands that the IT security director immediately bypass multi-factor authentication for his personal iPad before boarding a flight. This is an example of:',
      options: {
        A: 'Collusion',
        B: 'Management Override',
        C: 'Access Creep',
        D: 'Technical Corrective Control'
      },
      correctAnswer: 'B',
      explanation: 'Management Override occurs when executive leadership uses authority to circumvent established security controls and policies.',
      memoryTip: 'Executives bypassing controls = Management Override.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-18',
      unit: 3,
      topic: 'NIST Standards',
      question: 'Which NIST Special Publication provides a comprehensive catalog of security and privacy controls for federal information systems?',
      options: {
        A: 'NIST SP 800-53',
        B: 'NIST SP 800-14',
        C: 'NIST SP 700-1',
        D: 'NIST SP 999-99'
      },
      correctAnswer: 'A',
      explanation: 'NIST SP 800-53 is the benchmark catalog of security and privacy controls widely used across government and commercial enterprises.',
      memoryTip: 'NIST SP 800-53 = Master security control catalog.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-19',
      unit: 3,
      topic: 'Risk Threshold',
      question: 'What is a "Risk Threshold" in enterprise risk management?',
      options: {
        A: 'The total value of all servers owned by a firm.',
        B: 'A specific quantifiable trigger level beyond which a risk requires mandatory escalation or immediate intervention.',
        C: 'The maximum discount offered by cloud vendors.',
        D: 'The amount of memory installed on a database server.'
      },
      correctAnswer: 'B',
      explanation: 'A risk threshold is a quantifiable trigger or boundary; breaching it mandates immediate escalation, executive notification, or remediation.',
      memoryTip: 'Risk Threshold = Quantitative trigger requiring escalation.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-20',
      unit: 3,
      topic: 'Principle of Least Privilege',
      question: 'The Principle of Least Privilege states that users should be granted:',
      options: {
        A: 'Full domain administrator privileges to prevent service tickets.',
        B: 'Only the minimum system access rights strictly necessary to execute their legitimate job functions.',
        C: 'Zero access to any computer during probation.',
        D: 'Equal access to all financial databases across the firm.'
      },
      correctAnswer: 'B',
      explanation: 'Least Privilege mandates restricting permissions to the absolute minimum required for legitimate job duties.',
      memoryTip: 'Least Privilege = Minimum necessary access.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-21',
      unit: 3,
      topic: 'Risk Calculation',
      question: 'If a database containing public marketing brochures has a critical remote code execution vulnerability, but the data has zero confidential value and cannot be pivoted to other systems, what is the impact on Risk?',
      options: {
        A: 'Risk is infinite because vulnerability is critical.',
        B: 'Risk remains very low or negligible because Asset Value is negligible.',
        C: 'Risk is automatically classified as a severe ISO violation.',
        D: 'The risk formula cannot be calculated.'
      },
      correctAnswer: 'B',
      explanation: 'Because Risk = Threat × Vulnerability × Asset Value, having negligible Asset Value (public data, no pivot ability) keeps overall Risk low.',
      memoryTip: 'Low asset value = Low overall risk.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-22',
      unit: 3,
      topic: 'Risk Acceptance',
      question: 'When is Risk Acceptance considered legitimate and academically sound?',
      options: {
        A: 'When the IT manager ignores an email from the auditor.',
        B: 'When the cost of remediation exceeds the asset value, risk is within appetite, and acceptance is formally documented and approved by the asset owner.',
        C: 'Whenever software licenses expire.',
        D: 'Only after a ransomware attack has concluded.'
      },
      correctAnswer: 'B',
      explanation: 'Legitimate risk acceptance requires formal documentation, asset owner authorization, and confirmation that the exposure falls within approved risk appetite.',
      memoryTip: 'Acceptance must be formal, documented, and within appetite.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-23',
      unit: 3,
      topic: 'SOC 2 Audience',
      question: 'Who is the primary target audience for an independent SOC 2 Type 2 attestation report?',
      options: {
        A: 'General public reading Twitter',
        B: 'Enterprise B2B customers, regulators, and partner auditors evaluating vendor risk',
        C: 'Junior software interns',
        D: 'Hardware retail buyers'
      },
      correctAnswer: 'B',
      explanation: 'SOC 2 reports are shared with B2B customers and auditors under NDAs to provide third-party assurance regarding vendor controls.',
      memoryTip: 'SOC 2 = B2B vendor risk assurance.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-24',
      unit: 3,
      topic: 'Control Shortcomings',
      question: 'What is the primary operational mitigation against Access Creep?',
      options: {
        A: 'Installing biometric door scanners on restrooms',
        B: 'Conducting periodic User Access Reviews (UAR) and implementing automated de-provisioning on role change',
        C: 'Increasing password length to 30 characters',
        D: 'Switching all servers to Linux'
      },
      correctAnswer: 'B',
      explanation: 'Periodic access reviews (access recertification) and automated de-provisioning upon employee transfer directly remediate access creep.',
      memoryTip: 'User Access Reviews + Automated de-provisioning stops access creep.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-25',
      unit: 3,
      topic: 'Control Categories',
      question: 'A locked server rack enclosure inside an air-conditioned room is an example of what control category?',
      options: {
        A: 'Administrative control',
        B: 'Physical control',
        C: 'Technical logical control',
        D: 'Compensatory directive control'
      },
      correctAnswer: 'B',
      explanation: 'A server rack enclosure with a key or combination lock provides a physical barrier, making it a Physical control.',
      memoryTip: 'Server racks & locks = Physical category.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-26',
      unit: 3,
      topic: 'Auditing Terminology',
      question: 'When an auditor selects 25 sample change management tickets across the year to verify that each had formal QA approval prior to production release, what is being tested?',
      options: {
        A: 'Design Effectiveness',
        B: 'Operating Effectiveness',
        C: 'Risk Tolerance',
        D: 'Principle of Least Privilege'
      },
      correctAnswer: 'B',
      explanation: 'Sampling real execution evidence over time tests whether the control operated effectively in practice (Operating Effectiveness).',
      memoryTip: 'Testing real samples across time = Operating Effectiveness.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-27',
      unit: 3,
      topic: 'Threat vs Vulnerability',
      question: 'Which of the following is a VULNERABILITY rather than a THREAT?',
      options: {
        A: 'A nation-state cyber espionage group',
        B: 'An unpatched SQL injection flaw in a public login page',
        C: 'A Category 5 hurricane approaching the data center',
        D: 'A disgruntled employee planning data theft'
      },
      correctAnswer: 'B',
      explanation: 'An unpatched software flaw is an internal weakness (Vulnerability). Nation-states, hurricanes, and disgruntled employees are Threats (external/internal actors or events).',
      memoryTip: 'Flaw in system = Vulnerability; Danger/actor = Threat.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-28',
      unit: 3,
      topic: 'Risk Mitigation',
      question: 'Implementing Multi-Factor Authentication (MFA) on all employee VPN accounts is an example of which risk treatment strategy?',
      options: {
        A: 'Risk Avoidance',
        B: 'Risk Mitigation (Modification)',
        C: 'Risk Acceptance',
        D: 'Risk Transfer'
      },
      correctAnswer: 'B',
      explanation: 'Deploying controls such as MFA reduces the likelihood of unauthorized account takeover, which is Risk Mitigation (or Modification).',
      memoryTip: 'Deploying security controls = Risk Mitigation.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-29',
      unit: 3,
      topic: 'ISO 27001 ISMS Scope',
      question: 'What is the "Statement of Applicability" (SoA) in an ISO/IEC 27001 implementation?',
      options: {
        A: 'A bill sent to external auditors.',
        B: 'A mandatory document detailing which Annex A controls were selected, whether they are implemented, and the justification for inclusions or exclusions.',
        C: 'A list of employee social security numbers.',
        D: 'An advertising brochure for customers.'
      },
      correctAnswer: 'B',
      explanation: 'The Statement of Applicability (SoA) is a core ISO 27001 requirement documenting which controls from Annex A apply, their implementation status, and justifications.',
      memoryTip: 'Statement of Applicability (SoA) = Documented list of selected & excluded controls.',
      difficulty: 'Mastery'
    },
    {
      id: 'u3-mcq-30',
      unit: 3,
      topic: 'Control Types',
      question: 'A firewall rule blocking inbound traffic from known malicious IP addresses is primarily what type of control?',
      options: {
        A: 'Detective control',
        B: 'Preventative control',
        C: 'Corrective control',
        D: 'Directive control'
      },
      correctAnswer: 'B',
      explanation: 'Blocking malicious traffic before it enters the network prevents the intrusion from happening, making it a Preventative control.',
      memoryTip: 'Blocking packets = Preventative.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-31',
      unit: 3,
      topic: 'Control Limitations',
      question: 'Why can an internal control system never guarantee 100% elimination of risk?',
      options: {
        A: 'Because open source software is banned by ISO.',
        B: 'Because controls are subject to inherent limitations including human error, collusion, cost-benefit trade-offs, and management override.',
        C: 'Because computers are fundamentally unpredictable.',
        D: 'Because auditors require at least 5% risk to remain employed.'
      },
      correctAnswer: 'B',
      explanation: 'COSO and all audit standards emphasize inherent limitations: human error, collusion, management override, and economic constraints ensure absolute zero risk cannot be attained.',
      memoryTip: 'Inherent limitations: human error, collusion, override, economics.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-32',
      unit: 3,
      topic: 'SOC 2 Trust Criteria',
      question: 'Under SOC 2, the criterion "Processing Integrity" evaluates whether:',
      options: {
        A: 'The data center is powered by renewable solar energy.',
        B: 'System processing is complete, valid, accurate, timely, and authorized.',
        C: 'All employees sign non-disclosure agreements.',
        D: 'The building has physical fire extinguishers.'
      },
      correctAnswer: 'B',
      explanation: 'Processing Integrity evaluates whether systems achieve their purpose by processing data in a complete, valid, accurate, timely, and authorized manner.',
      memoryTip: 'Processing Integrity = Complete, valid, accurate, timely, authorized.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-33',
      unit: 3,
      topic: 'Risk Formula',
      question: 'If a threat actor exists and an unpatched vulnerability is present, but the system holds no data, has no network connections, and has zero asset value to the organization, what is the calculated risk?',
      options: {
        A: 'Critical risk',
        B: 'Zero (or negligible) risk',
        C: 'High inherent risk',
        D: 'Standard compliance violation'
      },
      correctAnswer: 'B',
      explanation: 'Risk is the product of Threat × Vulnerability × Asset Value. If Asset Value is 0, Risk is 0.',
      memoryTip: 'Zero asset value = Zero risk.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-34',
      unit: 3,
      topic: 'ISO 27001 Surveillance Audits',
      question: 'During the 3-year validity cycle of an ISO/IEC 27001 certification, when must surveillance audits be conducted?',
      options: {
        A: 'Every 6 months',
        B: 'Annually in Year 1 and Year 2',
        C: 'Only if a data breach is publicly reported',
        D: 'Surveillance audits are completely optional'
      },
      correctAnswer: 'B',
      explanation: 'ISO 27001 requires mandatory annual surveillance audits at Year 1 and Year 2 to verify continual compliance before recertification at Year 3.',
      memoryTip: 'Surveillance audits = Annually in Year 1 and Year 2.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-35',
      unit: 3,
      topic: 'Risk Tolerance',
      question: 'If a bank sets a maximum allowable transaction processing downtime of 15 minutes, this metric represents a concrete example of:',
      options: {
        A: 'Risk Appetite',
        B: 'Risk Tolerance',
        C: 'Residual Fraud',
        D: 'Access Creep'
      },
      correctAnswer: 'B',
      explanation: 'Risk tolerance defines acceptable operational boundaries and variance around specific targets (such as 15 minutes of downtime).',
      memoryTip: 'Specific operational boundary = Risk Tolerance.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-36',
      unit: 3,
      topic: 'Control Shortcoming',
      question: 'A developer accidentally enters production database credentials into a public GitHub repository because of fatigue. This control failure is primarily attributed to:',
      options: {
        A: 'Collusion',
        B: 'Human Error',
        C: 'Management Override',
        D: 'Access Creep'
      },
      correctAnswer: 'B',
      explanation: 'Honest mistakes, fatigue, or slips by employees represent the classic control limitation of Human Error.',
      memoryTip: 'Fatigue & honest slips = Human Error.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-37',
      unit: 3,
      topic: 'SOC 2 Type 2 Period',
      question: 'What is the standard minimum testing period for a SOC 2 Type 2 evaluation to be accepted by enterprise customers?',
      options: {
        A: '24 hours',
        B: '1 week',
        C: '6 months (typically 6 to 12 months)',
        D: '5 years'
      },
      correctAnswer: 'C',
      explanation: 'SOC 2 Type 2 evaluates operating effectiveness across a period of time, with 6 to 12 months being the standard industry duration.',
      memoryTip: 'SOC 2 Type 2 timeframe = 6 to 12 months.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-38',
      unit: 3,
      topic: 'Auditing Controls',
      question: 'Why must an auditor verify Design Effectiveness before testing Operating Effectiveness?',
      options: {
        A: 'Because testing operating effectiveness is illegal without design sign-off.',
        B: 'Because if a control is poorly designed, it will fail to prevent or detect risk regardless of how consistently it is operated.',
        C: 'Because design effectiveness tests software, while operating tests hardware.',
        D: 'To reduce audit fees for the client.'
      },
      correctAnswer: 'B',
      explanation: 'If a control design is fundamentally flawed, consistently operating that flawed control is useless. Hence, design suitability must be validated first.',
      memoryTip: 'No point testing operation if the design is fundamentally broken.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u3-mcq-39',
      unit: 3,
      topic: 'Control Categories',
      question: 'An automated vulnerability scanner that scans enterprise networks every weekend and generates a remediation ticket is what category of control?',
      options: {
        A: 'Physical control',
        B: 'Administrative control',
        C: 'Technical (Logical) control',
        D: 'Deterrent control'
      },
      correctAnswer: 'C',
      explanation: 'The vulnerability scanner is a software tool running on computing systems, categorizing it as a Technical (or Logical) control.',
      memoryTip: 'Software tools & scripts = Technical category.',
      difficulty: 'Foundation'
    },
    {
      id: 'u3-mcq-40',
      unit: 3,
      topic: 'Risk Treatment',
      question: 'When an organization decides to outsource its payment processing to an established PCI-DSS Level 1 compliant gateway rather than storing credit cards internally, it is engaging in:',
      options: {
        A: 'Risk Acceptance and Fraud',
        B: 'Risk Mitigation and Risk Transfer/Sharing',
        C: 'Management Override',
        D: 'Access Creep'
      },
      correctAnswer: 'B',
      explanation: 'Outsourcing payment handling mitigates technical risk by removing credit cards from internal scope, and transfers operational payment risks to the certified provider.',
      memoryTip: 'Outsourcing specialized payment handling = Mitigation + Risk Transfer.',
      difficulty: 'Intermediate'
    }
  ]
};
