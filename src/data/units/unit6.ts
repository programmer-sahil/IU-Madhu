import { UnitData } from '../../types';

export const unit6Data: UnitData = {
  id: 6,
  code: 'DLMIGCR01-01_E-U6',
  title: 'IT Law',
  subtitle: 'E-Commerce Regulations, Intellectual Property, IT Contracting & EU GDPR / German BDSG',
  estimatedTime: '5.0 Hours',
  color: 'rose',
  gradient: 'from-rose-600 via-pink-600 to-indigo-950',
  badge: 'Law & Data Protection',
  overview: `Unit 6 covers the statutory legal framework governing information technology, software, and data processing across Germany and the European Union. It details German e-commerce requirements (mandatory Impressum and the 14-day statutory Right of Withdrawal), Intellectual Property distinctions (Patents for 20 years, German Utility Models / Gebrauchsmuster for 10 years, Copyright / Urheberrecht for 70 years post-mortem, and Creative Commons / CC0), domain disputes (cybersquatting vs typosquatting), IT contracting and vendor SLA clauses, and the EU General Data Protection Regulation (GDPR / DSGVO) alongside the German Federal Data Protection Act (BDSG). Key GDPR concepts include Controller vs Processor, Data Processing Agreements (Art. 28), Data Subject Rights, Pseudonymisation vs Anonymisation, Privacy by Design/Default, the 72-hour breach notification rule (Art. 33), and the two-tier administrative fine structure (€20m / 4%).`,

  summarySections: [
    {
      title: '1. E-Commerce Law & German Statutory Requirements',
      summaryParagraph: `Commercial internet operations in Germany and the EU are governed by strict consumer protection and electronic commerce statutes designed to protect market transparency and consumer rights.`,
      keyPoints: [
        'Mandatory Legal Notice (Impressum - § 5 DDG / formerly TMG): Any commercial website offering services or goods in Germany must display an easily recognizable, directly accessible, and constantly available Impressum ("two-click rule"). Must include company name, legal form, physical postal address, contact email and phone, authorized representatives (e.g. Managing Director / Geschäftsführer), commercial register number (Handelsregister) and VAT ID (USt-IdNr.).',
        'Statutory Right of Withdrawal (Widerrufsrecht - § 312g BGB): In B2C distance selling (e-commerce), consumers possess a statutory right to withdraw from a purchase contract within 14 calendar days without stating any reason. The merchant must explicitly instruct the consumer; failure to provide proper withdrawal instructions extends the withdrawal period by 12 months!',
        'Electronic Contracting: Transparent presentation of terms (AGB), explicit confirmation buttons ("Zahlungspflichtig bestellen" - the button solution / Button-Lösung), and immediate automated electronic receipt confirmation.'
      ],
      examInsight: `Number to remember: 14 calendar days for the statutory right of withdrawal. Failing to instruct consumers extends it by up to 12 months! An Impressum must be reachable within two clicks.`
    },
    {
      title: '2. Intellectual Property (IP): Patents, Utility Models, Copyright & Domains',
      summaryParagraph: `Protecting digital intellectual creations requires navigating four distinct legal regimes with strict statutory durations and conditions:`,
      comparisonTable: {
        headers: ['IP Regime', 'Subject Matter Protected', 'Duration / Term', 'Registration Requirement & Nature'],
        rows: [
          ['Patent (Patentrecht)', 'Technical inventions solving a technical problem with novelty, non-obvious inventive step, and industrial applicability.', '20 Years from filing date.', 'Requires formal application, official examination by patent office (DPMA/EPO), and grant.'],
          ['Utility Model (Gebrauchsmuster)', 'Technical inventions (the "petty patent" / kleines Patent in Germany). Software as such is generally excluded unless tied to hardware.', 'Maximum 10 Years (starts at 3 yrs, renewable up to 10).', 'Registered unexamined by DPMA; fast and inexpensive; novelty only verified during litigation.'],
          ['Copyright (Urheberrecht)', 'Individual personal intellectual creative works (literature, art, software source code). Protects expression, not underlying ideas.', '70 Years post mortem auctoris (70 years after author’s death).', 'Arises AUTOMATICALLY upon creation. No official registration or copyright notice required in Germany/EU.'],
          ['Creative Commons (CC / CC0)', 'Standardized public copyright licensing suite allowing authors to grant public usage rights (BY, SA, NC, ND).', 'Perpetual / duration of copyright.', 'CC0 represents a complete dedication of work to the public domain (waiving all copyright claims).']
        ]
      },
      keyPoints: [
        'Domain Infringements:',
        '- Cybersquatting: Registering an Internet domain name identical or confusingly similar to a famous trademark in bad faith, with the intent to resell it to the trademark owner at an extortionate price.',
        '- Typosquatting: Registering intentional common misspellings of popular domains (e.g., goggle.com, amzon.de) to siphon traffic, serve fraudulent advertising, or conduct phishing.'
      ],
      examInsight: `Exam Numbers to Memorize: Patent = 20 Years; Utility Model (Gebrauchsmuster) = 10 Years; Copyright = 70 Years after author's death (post mortem auctoris). Copyright arises automatically without registration!`
    },
    {
      title: '3. IT Contracting: SLAs, Right-to-Audit & Vendor Continuity',
      summaryParagraph: `Enterprise IT agreements govern the commercial and operational commitments of external technology vendors, cloud providers, and systems integrators:`,
      keyPoints: [
        'Service Level Agreements (SLAs): Legally binding contractual metrics defining service availability (e.g., 99.9% uptime), response times, resolution times, and financial service credits / penalties for SLA breaches.',
        'Right-to-Audit Clause: A mandatory contractual provision empowering the customer (or their independent auditors and supervisory authorities) to physically and logically inspect the vendor’s data centers, processes, and security controls to verify compliance (vital under GDPR and banking regulations).',
        'Business Continuity & Disaster Recovery (BCP/DR) Obligations: Contractual clauses mandating that the vendor maintain tested DR sites, documented RTO/RPO targets, and continuous data mirroring.',
        'Escrow Agreements: Depositing source code with a trusted neutral third party, released to the customer if the software vendor goes bankrupt.'
      ],
      examInsight: `If a cloud contract lacks a Right-to-Audit clause, the customer cannot legally prove GDPR or banking compliance to external regulators!`
    },
    {
      title: '4. EU General Data Protection Regulation (GDPR / DSGVO)',
      summaryParagraph: `The GDPR (Regulation EU 2016/679) is the world’s benchmark data protection law, establishing harmonized privacy rights across all EU member states, enforceable against any global company offering goods/services to EU residents or monitoring EU behavior.`,
      keyPoints: [
        'Personal Data (Art. 4(1)): Any information relating to an identified or identifiable natural person ("data subject").',
        'Controller (Art. 4(7)): The natural or legal person that, alone or jointly with others, determines the PURPOSES AND MEANS of personal data processing. Holds primary legal accountability.',
        'Processor (Art. 4(8)): A natural or legal person that processes personal data ON BEHALF OF the controller.',
        'Data Processing Agreement (DPA / AVV - Art. 28): A mandatory legal contract binding a processor to a controller, guaranteeing adequate technical and organizational measures (TOMs), confidentiality, audit rights, and deletion of data upon contract termination.',
        'Data Subject Rights: Right to be Informed (Art. 13/14), Access (Art. 15), Rectification (Art. 16), Erasure / "Right to be Forgotten" (Art. 17), Restriction (Art. 18), Data Portability (Art. 20), Object (Art. 21), and Right to Complain to a Supervisory Authority (Art. 77).',
        'Data Protection Officer (DPO / Datenschutzbeauftragter): Mandatory under GDPR Art. 37 for public bodies, core monitoring, or special category data processing. In Germany (§ 38 BDSG), mandatory if an enterprise permanently employs at least 20 persons in automated data processing.'
      ],
      examInsight: `Controller determines PURPOSES and MEANS. Processor only acts ON BEHALF OF the controller under a written Art. 28 DPA contract.`
    },
    {
      title: '5. Technical Data Protection, Breach Notification & Penalties',
      summaryParagraph: `GDPR mandates strict technical engineering principles, rapid incident reporting, and severe economic penalties:`,
      comparisonTable: {
        headers: ['Concept / Mandate', 'Legal Definition & Requirements', 'Exam Trap & Key Distinction'],
        rows: [
          ['Pseudonymisation (Art. 4(5))', 'Processing personal data such that it can no longer be attributed to a specific data subject without additional separate information, kept separately under strict technical controls.', 'Reversible! Pseudonymised data is STILL PERSONAL DATA under GDPR scope.'],
          ['Anonymisation (Recital 26)', 'Irreversibly stripping data so the natural person can no longer be identified by anyone using any reasonable means.', 'Irreversible! Truly anonymized data falls OUTSIDE GDPR scope.'],
          ['Privacy by Design (Art. 25(1))', 'Embedding data protection principles and technical safeguards (TOMs) directly into systems during the initial design phase.', 'Must be built in from day one, not bolted on after release.'],
          ['Privacy by Default (Art. 25(2))', 'Ensuring that, by default, only personal data strictly necessary for each specific purpose is processed (strictest settings active out of the box).', 'No pre-ticked consent boxes! User must actively opt-in.'],
          ['72-Hour Breach Notification (Art. 33)', 'The Controller must notify the competent Supervisory Authority (DPA) without undue delay and, where feasible, within 72 HOURS after becoming aware of a breach, unless unlikely to result in risk.', 'Processor notifies the CONTROLLER without undue delay (not the DPA directly!). Notification to data subjects required under Art. 34 if HIGH risk.'],
          ['GDPR Maximum Penalties (Art. 83)', 'Tier 1 (Art. 83(4)): Up to €10 million or 2% of total worldwide annual turnover.\nTier 2 (Art. 83(5) - Severe): Up to €20 million or 4% of total worldwide annual turnover, whichever is greater.', 'Whichever is GREATER! Tier 2 applies to fundamental principle violations and data subject rights.']
        ]
      },
      keyPoints: [
        'Notice the fine calculation: €20 million OR 4% of worldwide annual turnover, WHICHEVER IS HIGHER.',
        'Breach reporting clock: 72 hours from the moment the controller becomes aware.'
      ],
      examInsight: `Fatal Exam Pitfalls:\n1. Pseudonymised data IS still personal data. Only Anonymised data is exempt from GDPR.\n2. The 72-hour notification applies to the Controller notifying the Supervisory Authority (DPA). The Processor reports to the Controller.\n3. The fine is €20 million or 4%, WHICHEVER IS GREATER.`
    }
  ],

  keyConcepts: [
    {
      id: 'c6-1',
      term: 'Controller vs Processor (GDPR)',
      simpleExplanation: 'The Controller decides why and how data is processed; the Processor just does the work for them under contract.',
      examDefinition: 'Under GDPR Art. 4, a Controller is the entity that determines the purposes and means of processing personal data, bearing primary statutory liability. A Processor is an entity that processes personal data exclusively on behalf of and under the documented instructions of the Controller via a mandatory Art. 28 Data Processing Agreement (DPA).',
      whyItMatters: 'Determines primary legal liability, who must notify the supervisory authority during a breach, and who must handle data subject requests.',
      howItWorks: 'An e-commerce firm (Controller) hires AWS or a cloud payroll vendor (Processor). The vendor cannot use customer data for their own marketing.',
      examKeywords: ['Controller', 'Processor', 'Purposes and Means', 'On behalf of', 'Data Processing Agreement (Art. 28)', 'Liability'],
      commonTrap: 'Assuming a cloud provider is a Controller; cloud hosts processing customer data are Processors.',
      category: 'GDPR Architecture'
    },
    {
      id: 'c6-2',
      term: 'Pseudonymisation vs Anonymisation',
      simpleExplanation: 'Pseudonymised data can be unscrambled with a secret key (still protected by GDPR); Anonymised data is destroyed beyond repair (not protected by GDPR).',
      examDefinition: 'Pseudonymisation (Art. 4(5)) replaces personal identifiers with a pseudonym or hash such that attribution requires separate, secured key information; it remains personal data subject to GDPR. Anonymisation irreversibly alters personal data so that identification is impossible by any reasonable means; truly anonymized data falls outside GDPR scope (Recital 26).',
      whyItMatters: 'Treating pseudonymised data as exempt from GDPR leads to catastrophic non-compliance fines.',
      howItWorks: 'Hashing patient IDs with a salt kept in a secure vault = Pseudonymisation. Irreversibly aggregating patient stats into national age-group averages = Anonymisation.',
      examKeywords: ['Pseudonymisation (Reversible)', 'Anonymisation (Irreversible)', 'Still personal data', 'Outside GDPR scope', 'Recital 26'],
      commonTrap: 'Claiming that pseudonymised data is exempt from GDPR. It is strictly subject to GDPR!',
      category: 'Technical Privacy'
    },
    {
      id: 'c6-3',
      term: '72-Hour Data Breach Notification (Art. 33)',
      simpleExplanation: 'Controllers must report serious data leaks to the privacy regulator within 72 hours of finding out.',
      examDefinition: 'GDPR Article 33 mandates that in the case of a personal data breach, the Controller must notify the competent supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of it, unless the breach is unlikely to result in a risk to the rights and freedoms of natural persons.',
      whyItMatters: 'Failure to report within 72 hours triggers massive administrative fines under Tier 1 of GDPR.',
      howItWorks: 'Breach discovered -> Incident team validates within hours -> If risk exists, Controller drafts formal notification to DPA -> If HIGH risk to individuals, data subjects notified directly under Art. 34.',
      examKeywords: ['72 Hours', 'Controller', 'Supervisory Authority (DPA)', 'Without undue delay', 'Article 33', 'Article 34 (High risk to data subjects)'],
      commonTrap: 'Stating the Processor reports directly to the DPA within 72 hours. Processors report to the Controller without undue delay.',
      category: 'GDPR Compliance'
    },
    {
      id: 'c6-4',
      term: 'GDPR Two-Tier Maximum Penalties',
      simpleExplanation: 'Two fine levels: Minor offenses up to €10m or 2%; Major offenses up to €20m or 4% of global turnover, whichever is higher.',
      examDefinition: 'GDPR Article 83 establishes two tiers of administrative fines: Tier 1 (Art. 83(4)): Up to €10,000,000 or 2% of total worldwide annual turnover of preceding financial year (for processor breaches, TOMs, DPO failures). Tier 2 (Art. 83(5)): Up to €20,000,000 or 4% of total worldwide annual turnover (for core principle violations, data subject rights, international transfers), whichever is greater.',
      whyItMatters: 'Creates existential financial liability that forces corporate boards to fund data privacy programs.',
      howItWorks: 'Supervisory authorities assess gravity, duration, intentionality, prior infringements, and technical measures taken before calculating fines.',
      examKeywords: ['Tier 1: €10m / 2%', 'Tier 2: €20m / 4%', 'Worldwide annual turnover', 'Whichever is greater', 'Article 83'],
      commonTrap: 'Writing "whichever is lower" or forgetting that Tier 2 caps out at €20m or 4%.',
      category: 'GDPR Compliance'
    },
    {
      id: 'c6-5',
      term: 'Privacy by Design vs Privacy by Default',
      simpleExplanation: 'Design means building privacy into the code from day one; Default means giving users the strictest privacy settings out of the box.',
      examDefinition: 'Privacy by Design (Art. 25(1)) requires organizations to implement appropriate technical and organizational measures (TOMs) from the earliest design stages of any system. Privacy by Default (Art. 25(2)) mandates that, by default, systems only process personal data strictly necessary for each specific purpose, with the most privacy-friendly settings enabled without user intervention.',
      whyItMatters: 'Prohibits deceptive dark patterns and opt-out data harvesting architectures.',
      howItWorks: 'Design: Architecting end-to-end encryption into a mobile app before coding. Default: Disabling location tracking and marketing profiling until the user manually turns them on.',
      examKeywords: ['Privacy by Design (Art. 25(1))', 'Privacy by Default (Art. 25(2))', 'Technical and Organizational Measures (TOMs)', 'Strictest default settings'],
      commonTrap: 'Confusing the two: Design is the architecture; Default is the initial user setting out of the box.',
      category: 'Technical Privacy'
    },
    {
      id: 'c6-6',
      term: 'Patents vs Utility Models vs Copyright',
      simpleExplanation: 'Patents protect tech inventions for 20 yrs; Utility models protect smaller tech inventions for 10 yrs; Copyright protects creative works for 70 yrs post-death.',
      examDefinition: 'Patents protect novel technical inventions for 20 years following rigorous examination. Utility Models (Gebrauchsmuster) in Germany protect technical inventions for up to 10 years without substantive examination. Copyright (Urheberrecht) protects creative literary, artistic, and software code expressions automatically upon creation for 70 years after the author’s death.',
      whyItMatters: 'Determines filing costs, speed of protection, and intellectual property enforcement strategy.',
      howItWorks: 'Hardware device -> Patent (20 yrs); Fast mechanical gadget -> Utility Model (10 yrs); Application source code -> Copyright (70 yrs post-mortem).',
      examKeywords: ['Patent (20 years)', 'Utility Model (10 years / Gebrauchsmuster)', 'Copyright (70 years post mortem)', 'Automatic creation', 'Technical invention'],
      commonTrap: 'Believing software source code in Europe is primarily protected by patents. It is protected automatically by Copyright.',
      category: 'Intellectual Property'
    }
  ],

  cheatSheet: {
    mustMemorize: [
      'GDPR Breach Notification: 72 HOURS from awareness to Supervisory Authority (Controller). Processor notifies Controller without undue delay.',
      'GDPR Max Fines: Tier 1 = €10m or 2% turnover; Tier 2 (Severe) = €20m or 4% turnover, WHICHEVER IS GREATER.',
      'Controller = Determines purposes and means. Processor = Processes on behalf of controller (Art. 28 DPA).',
      'Pseudonymisation = REVERSIBLE (still personal data, GDPR applies). Anonymisation = IRREVERSIBLE (outside GDPR scope).',
      'German Impressum (§ 5 DDG/TMG) = Mandatory commercial legal notice reachable within two clicks.',
      'Right of Withdrawal (§ 312g BGB) = 14 calendar days for consumers in distance contracts. Extended by 12 months if uninstructed.',
      'IP Durations: Patents = 20 years; German Utility Model (Gebrauchsmuster) = 10 years max; Copyright (Urheberrecht) = 70 years after author’s death.',
      'Copyright arises AUTOMATICALLY upon creation (no registration required in Germany/EU).',
      'Cybersquatting = Bad faith registration of trademark domain to extort. Typosquatting = Misspelling domains for traffic/phishing.',
      'Right-to-Audit Clause = Vital contractual right allowing customer/auditors to inspect vendor facilities and controls.'
    ],
    coreDefinitions: [
      {
        term: 'Personal Data',
        definition: 'Any information relating to an identified or identifiable natural person ("data subject") (GDPR Art. 4(1)).'
      },
      {
        term: 'Data Controller',
        definition: 'The natural or legal person that determines the purposes and means of the processing of personal data (GDPR Art. 4(7)).'
      },
      {
        term: 'Data Processor',
        definition: 'A natural or legal person that processes personal data on behalf of the controller under a binding contract (GDPR Art. 4(8)).'
      },
      {
        term: 'Impressum',
        definition: 'Mandatory German statutory legal information notice required on commercial websites disclosing corporate identity and authorized representatives.'
      }
    ],
    importantNumbers: [
      { number: '72 Hours', label: 'Breach Notification', context: 'Timeframe for Controller to notify the Supervisory Authority under GDPR Art. 33.' },
      { number: '€20m / 4%', label: 'Max GDPR Penalty', context: 'Maximum fine for severe infringements (whichever is higher) under Art. 83(5).' },
      { number: '€10m / 2%', label: 'Tier 1 GDPR Penalty', context: 'Maximum fine for technical/operational violations under Art. 83(4).' },
      { number: '14 Days', label: 'Right of Withdrawal', context: 'Statutory cancellation period for consumers under § 312g BGB.' },
      { number: '20 Years', label: 'Patent Duration', context: 'Term of protection for technical inventions from the date of filing.' },
      { number: '10 Years', label: 'Utility Model Term', context: 'Maximum duration of German Gebrauchsmuster protection.' },
      { number: '70 Years', label: 'Copyright Post-Mortem', context: 'Duration of copyright protection after author’s death (post mortem auctoris).' },
      { number: '20 Persons', label: 'BDSG DPO Threshold', context: 'German threshold of employees regularly processing data requiring a DPO (§ 38 BDSG).' }
    ],
    frameworkNames: [
      { acronym: 'GDPR / DSGVO', fullName: 'General Data Protection Regulation (EU 2016/679)', focus: 'Harmonized European data privacy regulation' },
      { acronym: 'BDSG', fullName: 'Bundesdatenschutzgesetz', focus: 'German Federal Data Protection Act supplementing GDPR' },
      { acronym: 'DDG / TMG', fullName: 'Digitale-Dienste-Gesetz (formerly Telemediengesetz)', focus: 'German digital services law governing website Impressum' },
      { acronym: 'DPMA', fullName: 'Deutsches Patent- und Markenamt', focus: 'German Patent and Trademark Office' },
      { acronym: 'DPA', fullName: 'Data Protection Authority / Supervisory Authority', focus: 'Independent public authority supervising GDPR enforcement' }
    ],
    processes: [
      {
        name: 'GDPR Data Breach Response Workflow',
        steps: [
          '1. Detection & Verification: Confirm unauthorized access, loss, or alteration of personal data.',
          '2. Processor Escalation: If breach occurred at processor, processor notifies controller without undue delay.',
          '3. Risk Assessment: Controller assesses likelihood and severity of risk to data subjects’ rights and freedoms.',
          '4. Supervisory Authority Notification: If risk exists, notify DPA within 72 hours of becoming aware (Art. 33).',
          '5. Data Subject Communication: If HIGH risk exists, notify affected individuals without undue delay (Art. 34).',
          '6. Remediation & Documentation: Record breach in internal incident register; execute corrective security measures.'
        ],
        description: 'Mandatory legal response cycle for personal data security incidents.'
      }
    ],
    comparisons: [
      {
        conceptA: 'Data Controller',
        conceptB: 'Data Processor',
        comparisonPoints: [
          { criterion: 'Decision Authority', detailA: 'Determines the PURPOSES and MEANS of processing', detailB: 'Processes data ONLY on behalf of and instructed by the controller' },
          { criterion: 'Contractual Instrument', detailA: 'Issues documented processing instructions', detailB: 'Bound by Art. 28 Data Processing Agreement (DPA / AVV)' },
          { criterion: 'Breach Notification Duty', detailA: 'Notifies Supervisory Authority within 72 hours (Art. 33)', detailB: 'Notifies the Controller without undue delay' },
          { criterion: 'Primary Accountability', detailA: 'Directly accountable to data subjects and supervisory authority', detailB: 'Accountable contractually to controller and under specific processor duties' }
        ]
      },
      {
        conceptA: 'Pseudonymisation',
        conceptB: 'Anonymisation',
        comparisonPoints: [
          { criterion: 'Reversibility', detailA: 'Reversible (data subject re-identifiable via separate key)', detailB: 'Irreversible (re-identification impossible by any reasonable means)' },
          { criterion: 'Legal Status under GDPR', detailA: 'STILL PERSONAL DATA (fully within GDPR scope)', detailB: 'OUTSIDE GDPR scope (GDPR principles no longer apply)' },
          { criterion: 'Technical Method', detailA: 'Keyed hashing, tokenization, separate storage of identifiers', detailB: 'Noise addition, k-anonymity, complete destruction of linkage' }
        ]
      },
      {
        conceptA: 'Patents',
        conceptB: 'Copyright (Urheberrecht)',
        comparisonPoints: [
          { criterion: 'Subject Matter', detailA: 'Technical inventions solving a technical problem', detailB: 'Personal creative works (literature, music, software code)' },
          { criterion: 'Protection Origin', detailA: 'Requires formal filing, examination, and official grant by office', detailB: 'Arises automatically upon creation; no registration needed' },
          { criterion: 'Duration', detailA: '20 years from application filing date', detailB: '70 years after the death of the creator (post mortem auctoris)' }
        ]
      }
    ],
    examTraps: [
      {
        trap: 'Assuming Pseudonymised data is exempt from GDPR rules.',
        truth: 'Pseudonymised data is STILL personal data. Only irreversibly ANONYMISED data falls outside GDPR.'
      },
      {
        trap: 'Thinking the Processor notifies the Data Protection Authority within 72 hours.',
        truth: 'The CONTROLLER notifies the DPA within 72 hours. The Processor notifies the Controller without undue delay.'
      },
      {
        trap: 'Writing "whichever is lower" for GDPR fines.',
        truth: 'The statutory fine formula is €20 million OR 4% of annual worldwide turnover, WHICHEVER IS HIGHER.'
      },
      {
        trap: 'Stating copyright requires official registration or a © symbol in Germany.',
        truth: 'Copyright arises automatically upon creation under German Urheberrecht. No registration or symbol is needed.'
      }
    ],
    memoryShortcuts: [
      { acronym: '72 - 20 - 4', meaning: '72 Hours, €20 Million, 4%', usage: 'The vital GDPR breach notification and maximum fine numbers.' },
      { acronym: '20 - 10 - 70', meaning: 'Patents (20), Utility Models (10), Copyright (70)', usage: 'Intellectual property durations.' },
      { acronym: 'PURPOSES & MEANS', meaning: 'Controller Definition', usage: 'The hallmark definition separating Controller from Processor.' }
    ]
  },

  importantQuestions: [
    {
      id: 'q6-1',
      unit: 6,
      question: 'Differentiate between a Data Controller and a Data Processor under GDPR. Detail the mandatory requirements of an Article 28 Data Processing Agreement (DPA).',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'Define Controller (determines purposes and means). Define Processor (processes on behalf of controller). Detail their relationship and list core mandatory clauses of an Art. 28 DPA (documented instructions, confidentiality, technical/organizational measures, sub-processors, assisting with data subject rights, breach notification, return/deletion of data, right to audit).',
      modelAnswer: `Under the EU General Data Protection Regulation (GDPR), the legal roles and obligations governing personal data processing are strictly demarcated:

1. Data Controller (Art. 4(7)):
- Definition: The natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the PURPOSES AND MEANS of the processing of personal data.
- Legal Role: The Controller holds primary statutory accountability for compliance with all GDPR data protection principles (lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity, confidentiality, and accountability). The Controller is directly liable to data subjects and the Supervisory Authority.

2. Data Processor (Art. 4(8)):
- Definition: A natural or legal person, public authority, agency, or other body which processes personal data strictly ON BEHALF OF and under the documented instructions of the Controller.
- Operational Role: Common examples include cloud infrastructure providers (AWS, Azure), SaaS payroll platforms, and external data centers. A processor cannot process the data for its own independent commercial purposes.

3. Mandatory Elements of an Article 28 Data Processing Agreement (DPA / AVV):
Under GDPR Art. 28(3), processing by a processor must be governed by a binding written contract stipulating that the processor must:
1. Process personal data ONLY on documented instructions from the controller (including regarding international data transfers).
2. Ensure that persons authorized to process the personal data have committed themselves to confidentiality.
3. Implement appropriate Technical and Organizational Measures (TOMs) pursuant to Art. 32 to ensure a level of security appropriate to the risk.
4. Not engage another processor (sub-processor) without prior specific or general written authorization of the controller.
5. Assist the controller by appropriate technical and organizational measures in responding to data subjects exercising their rights (Chapter III).
6. Assist the controller in ensuring compliance with breach notification duties (Art. 33/34) and Data Protection Impact Assessments (DPIA - Art. 35).
7. At the choice of the controller, delete or return all personal data after the end of the provision of services.
8. Make available to the controller all information necessary to demonstrate compliance and allow for and contribute to audits, including physical and technical inspections conducted by the controller or an auditor (Right to Audit).`,
      answerStructure: [
        '1. Definition and accountability of the Data Controller (purposes and means).',
        '2. Definition and operational scope of the Data Processor (on behalf of controller).',
        '3. Comprehensive enumeration of mandatory Art. 28 DPA contractual clauses (at least 6-8 clauses).',
        '4. Concluding emphasis on the Right to Audit.'
      ],
      keywords: ['Controller', 'Processor', 'Purposes and Means', 'On behalf of', 'Article 28 DPA', 'Technical and Organizational Measures (TOMs)', 'Documented instructions', 'Sub-processors', 'Right to Audit', 'Return or deletion'],
      commonMistakes: 'Stating the processor decides why data is collected, or omitting the mandatory right to audit in the DPA.',
      selfCheckChecklist: [
        'Defined Controller with "purposes and means"',
        'Defined Processor with "on behalf of"',
        'Listed core Art. 28 requirements',
        'Mentioned confidentiality, TOMs, sub-processors, and right to audit'
      ]
    },
    {
      id: 'q6-2',
      unit: 6,
      question: 'Explain the GDPR 72-hour breach notification requirement under Article 33. When must the Controller notify the Supervisory Authority, and when must Data Subjects be informed under Article 34?',
      marks: 8,
      priority: 'VERY HIGH PRIORITY',
      suggestedTimeMinutes: 12,
      examinerExpectation: 'Explain Art. 33 (Controller notifies Supervisory Authority within 72 hours of becoming aware unless unlikely to result in risk). State Processor’s obligation to notify Controller without undue delay. Explain Art. 34 (notifying data subjects when breach results in a HIGH risk). Detail the contents of the notification.',
      modelAnswer: `GDPR Articles 33 and 34 establish a multi-tiered legal framework for managing and reporting personal data breaches:

1. Controller Notification to the Supervisory Authority (Article 33):
- Notification Trigger: In the event of a personal data breach, the Controller must notify the competent supervisory authority (DPA) without undue delay and, where feasible, not later than 72 HOURS after having become aware of it.
- Exception: Notification is NOT required if the breach is "unlikely to result in a risk to the rights and freedoms of natural persons" (e.g., a lost laptop whose entire hard drive was encrypted with state-of-the-art AES-256 and the decryption key was never compromised).
- Late Notification: If notification is made after 72 hours, it must be accompanied by reasoned justifications for the delay.
- Mandatory Contents of Notification:
  1. Nature of the breach, including categories and approximate number of data subjects and data records concerned.
  2. Name and contact details of the Data Protection Officer (DPO).
  3. Likely consequences of the personal data breach.
  4. Measures taken or proposed to be taken by the controller to address and mitigate the breach.

2. Processor’s Obligation:
- The Processor does NOT notify the Supervisory Authority. Under Art. 33(2), the Processor must notify the CONTROLLER without undue delay after becoming aware of a personal data breach.

3. Communication to Data Subjects (Article 34):
- Trigger: When the personal data breach is likely to result in a HIGH RISK to the rights and freedoms of natural persons (e.g., leaked credit cards, medical history, passwords).
- Requirement: The controller must communicate the breach to the affected data subjects directly, in clear and plain language, without undue delay.
- Exceptions to notifying individuals:
  1. The controller applied appropriate technological protection (e.g., robust encryption rendering data unintelligible).
  2. Subsequent measures ensured that the high risk is no longer likely to materialize.
  3. It would involve disproportionate effort (in which case a public communication or equivalent measure is issued).`,
      answerStructure: [
        '1. Article 33: Controller duty to notify Supervisory Authority within 72 hours, exception, and required contents.',
        '2. Processor duty: Notify Controller without undue delay.',
        '3. Article 34: Duty to notify Data Subjects when HIGH RISK exists, and the 3 statutory exceptions.'
      ],
      keywords: ['72 Hours', 'Article 33', 'Supervisory Authority (DPA)', 'Without undue delay', 'Risk to rights and freedoms', 'Article 34', 'High Risk', 'Data Subjects', 'Processor duty', 'Encryption exception'],
      commonMistakes: 'Stating the Processor reports directly to the DPA, or claiming that data subjects must be notified for every minor breach (they are only notified if HIGH risk exists).',
      selfCheckChecklist: [
        'Stated 72-hour deadline for Controller to DPA',
        'Noted exception when risk is unlikely',
        'Clarified processor notifies controller without undue delay',
        'Contrasted with Art. 34 high-risk notification to data subjects'
      ]
    },
    {
      id: 'q6-3',
      unit: 6,
      question: 'Contrast Patents, German Utility Models (Gebrauchsmuster), and Copyright (Urheberrecht) in terms of subject matter, registration requirement, and duration of protection.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'Structured comparison across all three regimes covering: protected subject matter, whether formal application/examination is required, and the exact duration of protection.',
      modelAnswer: `In German and European intellectual property law, technical inventions and creative works are protected under three distinct regimes:

1. Patent (Patentrecht):
- Subject Matter: Technical inventions solving a technical problem that demonstrate absolute novelty, an inventive step (non-obviousness), and industrial applicability. (Pure software as such is excluded, but computer-implemented inventions solving technical problems are patentable).
- Registration Requirement: Formal application to patent office (DPMA or EPO), substantive examination of novelty and inventive step, and official grant.
- Duration: Maximum 20 YEARS from the application filing date.

2. Utility Model (Gebrauchsmuster - "Petty Patent"):
- Subject Matter: Technical inventions (devices, tools, apparatus). Pure software processes are generally excluded in Germany.
- Registration Requirement: Registered without substantive examination of novelty and inventive step by the DPMA. Extremely fast and cost-effective; novelty is only scrutinized if challenged in court.
- Duration: Maximum 10 YEARS (initial 3-year term, renewable up to 10 years).

3. Copyright (Urheberrecht):
- Subject Matter: Personal intellectual creative creations in literature, science, art, and computer software programs (source code and object code). Protects the individual expression, not the underlying algorithm or mathematical idea.
- Registration Requirement: None! Arises AUTOMATICALLY upon the creation of the work. No registration, deposit, or copyright notice (©) is required in Germany/EU.
- Duration: 70 YEARS after the death of the author (post mortem auctoris).`,
      answerStructure: [
        '1. Patent: Subject matter (technical inventions), registration (formal examination), duration (20 years).',
        '2. Utility Model: Subject matter, registration (unexamined / fast), duration (max 10 years).',
        '3. Copyright: Subject matter (software code/creative expression), registration (automatic / none), duration (70 years post-mortem).'
      ],
      keywords: ['Patent (20 years)', 'Utility Model (10 years / Gebrauchsmuster)', 'Copyright (70 years post mortem)', 'Technical invention', 'Unexamined register', 'Automatic protection', 'DPMA'],
      commonMistakes: 'Stating copyright requires official registration in Germany, or mixing up the 10-year and 20-year terms.',
      selfCheckChecklist: [
        'Stated 20 years for Patents',
        'Stated 10 years for Utility Models (Gebrauchsmuster)',
        'Stated 70 years after death for Copyright',
        'Emphasized automatic creation of copyright'
      ]
    },
    {
      id: 'q6-4',
      unit: 6,
      question: 'Explain the German e-commerce requirements: the Impressum obligation under § 5 DDG (formerly TMG) and the consumer Right of Withdrawal under § 312g BGB.',
      marks: 6,
      priority: 'HIGH PRIORITY',
      suggestedTimeMinutes: 10,
      examinerExpectation: 'Explain what an Impressum is, who needs it, what it must contain, and the two-click rule. Explain the 14-day statutory Right of Withdrawal (§ 312g BGB) and the consequence of failing to instruct consumers.',
      modelAnswer: `Commercial e-commerce operations in Germany are subject to strict statutory consumer protection mandates:

1. The Impressum Requirement (§ 5 Digitale-Dienste-Gesetz - DDG / formerly TMG):
- Requirement: Any commercial website offering telemedia services for business purposes (geschäftsmäßig) in Germany must provide an easily recognizable, directly accessible, and permanently available legal notice (Impressum).
- Accessibility: Case law establishes the "two-click rule"—the Impressum must be reachable from any page on the website within a maximum of two clicks and clearly labeled (e.g., "Impressum" or "Legal Notice").
- Mandatory Contents:
  - Full company name and legal entity form (e.g., GmbH, AG).
  - Physical geographic postal address (P.O. boxes are invalid).
  - Rapid contact details: active email address and telephone number.
  - Names of legal authorized representatives (e.g., Managing Directors / Geschäftsführer).
  - Commercial register number (Handelsregister) and competent local court (Amtsgericht).
  - Value-Added Tax Identification Number (USt-IdNr.) or economic operator ID.
- Penalty: Non-compliance constitutes an anti-competitive regulatory infraction subject to warning letters (Abmahnungen) and fines up to €50,000.

2. Statutory Right of Withdrawal (Widerrufsrecht - § 312g BGB):
- Mandate: In B2C distance sales (online shopping), consumers possess an unconditional statutory right to cancel and withdraw from the purchase contract within 14 CALENDAR DAYS without providing any reason.
- Timeline: The 14-day cancellation window begins upon physical receipt of goods by the consumer and proper receipt of statutory withdrawal instructions.
- Consequence of Failure: If the merchant fails to properly instruct the consumer regarding their right of withdrawal, the withdrawal period does not expire after 14 days; instead, it is extended by an additional 12 MONTHS (total 12 months and 14 days)!`,
      answerStructure: [
        '1. Impressum (§ 5 DDG): Purpose, two-click accessibility rule, and mandatory disclosed elements.',
        '2. Right of Withdrawal (§ 312g BGB): 14 calendar days duration, unconditional nature.',
        '3. Consequence of improper withdrawal instructions (12-month extension).'
      ],
      keywords: ['Impressum', '§ 5 DDG', 'Two-click rule', 'Commercial register', 'Right of Withdrawal', 'Widerrufsrecht', '§ 312g BGB', '14 calendar days', '12 months extension'],
      commonMistakes: 'Writing 14 business days instead of calendar days, or omitting the 12-month extension consequence.',
      selfCheckChecklist: [
        'Mentioned § 5 DDG and two-click rule',
        'Listed mandatory Impressum contents',
        'Stated 14 calendar days for Right of Withdrawal',
        'Explained 12-month extension for failure to instruct'
      ]
    }
  ],

  flashcards: [
    {
      id: 'fc6-1',
      unit: 6,
      front: 'GDPR 72-Hour Breach Notification (Art. 33)',
      back: 'Controller must notify the Supervisory Authority (DPA) within 72 HOURS of becoming aware of a personal data breach, unless unlikely to result in risk.',
      category: 'GDPR',
      examTip: 'Processor notifies Controller without undue delay.'
    },
    {
      id: 'fc6-2',
      unit: 6,
      front: 'GDPR Maximum Penalties (Two Tiers)',
      back: 'Tier 1: Up to €10m or 2% of annual global turnover.\nTier 2 (Severe): Up to €20m or 4% of annual global turnover, WHICHEVER IS GREATER.',
      category: 'GDPR',
      examTip: 'Remember: Whichever is greater!'
    },
    {
      id: 'fc6-3',
      unit: 6,
      front: 'Controller vs Processor',
      back: 'Controller = Determines PURPOSES and MEANS.\nProcessor = Processes data ON BEHALF OF controller under an Art. 28 DPA.',
      category: 'GDPR',
      examTip: 'Cloud infrastructure hosts are Processors.'
    },
    {
      id: 'fc6-4',
      unit: 6,
      front: 'Pseudonymisation vs Anonymisation',
      back: 'Pseudonymisation = Reversible (still personal data, GDPR applies).\nAnonymisation = Irreversible (outside GDPR scope).',
      category: 'Privacy',
      examTip: 'Pseudonymised data is STILL personal data!'
    },
    {
      id: 'fc6-5',
      unit: 6,
      front: 'German Right of Withdrawal (Widerrufsrecht)',
      back: '14 calendar days for consumers in distance selling (§ 312g BGB).\nIf merchant fails to instruct, extended by 12 months (12 months + 14 days).',
      category: 'E-Commerce',
      examTip: '14 calendar days, not business days.'
    },
    {
      id: 'fc6-6',
      unit: 6,
      front: 'IP Durations: Patents, Utility Models, Copyright',
      back: 'Patents = 20 Years\nGerman Utility Model (Gebrauchsmuster) = 10 Years\nCopyright (Urheberrecht) = 70 Years post mortem auctoris (after author’s death).',
      category: 'IP Law',
      examTip: 'Mnemonic: 20 - 10 - 70.'
    },
    {
      id: 'fc6-7',
      unit: 6,
      front: 'Copyright Creation in Germany/EU',
      back: 'Arises AUTOMATICALLY upon creation of the work. No registration, filing, or copyright symbol (©) is required.',
      category: 'IP Law',
      examTip: 'Unlike patents, copyright requires zero registration.'
    },
    {
      id: 'fc6-8',
      unit: 6,
      front: 'Cybersquatting vs Typosquatting',
      back: 'Cybersquatting: Bad-faith registration of trademarked domains to extort.\nTyposquatting: Registering common misspellings to siphon traffic/phishing.',
      category: 'Domain Law',
      examTip: 'Both violate trademark laws in bad faith.'
    }
  ],

  activeRecall: [
    {
      id: 'ar6-1',
      question: 'What is the statutory deadline for reporting a personal data breach under GDPR Article 33, who notifies whom, and what is the exception?',
      answer: 'The Controller must notify the Supervisory Authority within 72 hours of becoming aware. Exception: notification is not required if the breach is unlikely to result in risk to the rights and freedoms of individuals. The Processor notifies the Controller without undue delay.',
      keywords: ['72 hours', 'Controller to Supervisory Authority', 'Unlikely to result in risk', 'Processor to Controller']
    },
    {
      id: 'ar6-2',
      question: 'What are the two tiers of maximum administrative fines under GDPR Article 83?',
      answer: 'Tier 1: Up to €10 million or 2% of annual worldwide turnover. Tier 2 (Severe): Up to €20 million or 4% of annual worldwide turnover, whichever is greater.',
      keywords: ['€10m or 2%', '€20m or 4%', 'Whichever is greater']
    },
    {
      id: 'ar6-3',
      question: 'Why is pseudonymised data still subject to GDPR while anonymised data is not?',
      answer: 'Pseudonymised data is reversible (can be re-identified with separate key/data), so it remains personal data. Anonymised data is irreversibly stripped of identifiers, so it falls outside GDPR scope.',
      keywords: ['Pseudonymised is reversible', 'Still personal data', 'Anonymised is irreversible', 'Outside GDPR']
    },
    {
      id: 'ar6-4',
      question: 'State the exact terms of protection for Patents, German Utility Models (Gebrauchsmuster), and Copyright (Urheberrecht).',
      answer: 'Patents: 20 years from filing date. Utility Models: Maximum 10 years. Copyright: 70 years after the death of the author (post mortem auctoris).',
      keywords: ['Patents 20 years', 'Utility Models 10 years', 'Copyright 70 years after author death']
    }
  ],

  completionChecklist: [
    'Can recite the 72-hour GDPR breach notification rule and distinguish Controller vs Processor duties',
    'Know the two GDPR penalty tiers (€10m/2% and €20m/4%, whichever is greater)',
    'Can differentiate Pseudonymisation (reversible, GDPR applies) from Anonymisation (irreversible, exempt)',
    'Know the German e-commerce requirements: Impressum (§ 5 DDG) and Right of Withdrawal (14 days, 12-month extension)',
    'Can state IP protection terms: Patent (20 yrs), Utility Model (10 yrs), Copyright (70 yrs post-mortem)',
    'Understand why Right-to-Audit clauses in cloud contracts are legally indispensable',
    'Achieved at least 80% on Unit 6 MCQ Practice'
  ],

  mcqs: [
    {
      id: 'u6-mcq-1',
      unit: 6,
      topic: 'GDPR Breach Notification',
      question: 'Under GDPR Article 33, within what timeframe must a Data Controller notify the competent Supervisory Authority after becoming aware of a personal data breach?',
      options: {
        A: '24 hours',
        B: '48 hours',
        C: '72 hours',
        D: '14 calendar days'
      },
      correctAnswer: 'C',
      explanation: 'Article 33 requires notification to the supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware.',
      memoryTip: 'GDPR breach notification = 72 hours.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-2',
      unit: 6,
      topic: 'GDPR Maximum Penalties',
      question: 'What is the maximum administrative fine for severe GDPR infringements (Tier 2, such as violating core principles or data subject rights) under Article 83(5)?',
      options: {
        A: 'Up to €5 million or 1% of turnover',
        B: 'Up to €10 million or 2% of total worldwide annual turnover, whichever is lower',
        C: 'Up to €20 million or 4% of total worldwide annual turnover of preceding financial year, whichever is higher',
        D: 'Fixed fine of €100,000 per breached record'
      },
      correctAnswer: 'C',
      explanation: 'Tier 2 penalties reach up to €20 million OR 4% of total worldwide annual turnover of preceding financial year, whichever is higher.',
      memoryTip: 'Max GDPR Fine = €20 million or 4% turnover (whichever is greater).',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-3',
      unit: 6,
      topic: 'Controller vs Processor',
      question: 'Under GDPR, what distinguishes a Data Controller from a Data Processor?',
      options: {
        A: 'The Controller is always an EU citizen, while the Processor is foreign.',
        B: 'The Controller determines the PURPOSES and MEANS of processing, while the Processor processes data strictly on behalf of the Controller.',
        C: 'The Processor owns the data, while the Controller stores it.',
        D: 'There is no legal difference in liability.'
      },
      correctAnswer: 'B',
      explanation: 'The Controller decides why and how data is processed (purposes and means). The Processor executes processing on behalf of the controller under contract.',
      memoryTip: 'Controller = Purposes & Means. Processor = On behalf of controller.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-4',
      unit: 6,
      topic: 'Technical Privacy',
      question: 'Why does pseudonymised personal data remain fully within the regulatory scope of the GDPR?',
      options: {
        A: 'Because the EU Commission owns the decryption algorithms.',
        B: 'Because pseudonymisation is reversible, meaning the data subject can still be re-identified using separate key information.',
        C: 'Because pseudonymisation is banned under German law.',
        D: 'It does not; pseudonymised data is completely exempt from GDPR.'
      },
      correctAnswer: 'B',
      explanation: 'Pseudonymisation separates identifiers from data, but remains reversible with key data. Therefore, it remains personal data subject to GDPR.',
      memoryTip: 'Pseudonymisation is reversible -> Still personal data under GDPR.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-5',
      unit: 6,
      topic: 'German E-Commerce',
      question: 'In German e-commerce distance selling (§ 312g BGB), how long is the statutory consumer Right of Withdrawal (Widerrufsrecht)?',
      options: {
        A: '7 business days',
        B: '14 calendar days',
        C: '30 calendar days',
        D: '90 days'
      },
      correctAnswer: 'B',
      explanation: 'Consumers have a statutory right to withdraw from online purchases within 14 calendar days without giving any reason.',
      memoryTip: 'Right of Withdrawal = 14 calendar days.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-6',
      unit: 6,
      topic: 'German E-Commerce Penalty',
      question: 'What occurs if an online merchant in Germany fails to properly inform a consumer about their statutory Right of Withdrawal prior to purchase?',
      options: {
        A: 'The merchant’s server is seized by the police.',
        B: 'The withdrawal period is extended by 12 months (lasting 12 months and 14 days).',
        C: 'The consumer must pay double the purchase price.',
        D: 'The contract becomes completely invalid immediately.'
      },
      correctAnswer: 'B',
      explanation: 'Under § 356(3) BGB, failure to provide statutory withdrawal instructions extends the withdrawal window by 12 months.',
      memoryTip: 'Failure to instruct = 12-month extension to withdrawal right.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-7',
      unit: 6,
      topic: 'Intellectual Property',
      question: 'How long is the term of protection for a technical Patent from its application filing date?',
      options: {
        A: '10 years',
        B: '14 years',
        C: '20 years',
        D: '70 years after inventor’s death'
      },
      correctAnswer: 'C',
      explanation: 'Patents grant exclusive protection for technical inventions for 20 years from the date of filing.',
      memoryTip: 'Patent term = 20 years.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-8',
      unit: 6,
      topic: 'Intellectual Property',
      question: 'What is the maximum duration of protection for a German Utility Model (Gebrauchsmuster)?',
      options: {
        A: '3 years',
        B: '10 years',
        C: '20 years',
        D: '50 years'
      },
      correctAnswer: 'B',
      explanation: 'A German Utility Model (Gebrauchsmuster, or "petty patent") provides protection for a maximum of 10 years.',
      memoryTip: 'Utility Model (Gebrauchsmuster) max term = 10 years.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-9',
      unit: 6,
      topic: 'Copyright Duration',
      question: 'Under German Urheberrecht and EU copyright law, how long does Copyright protection last for software code and literary works?',
      options: {
        A: '20 years from release date',
        B: '50 years from creation',
        C: '70 years after the death of the author (post mortem auctoris)',
        D: 'Indefinitely until registered'
      },
      correctAnswer: 'C',
      explanation: 'Copyright lasts for the life of the author plus 70 years after their death (post mortem auctoris).',
      memoryTip: 'Copyright = Life + 70 years post-mortem.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-10',
      unit: 6,
      topic: 'Copyright Registration',
      question: 'What formal registration or official procedure is required in Germany to obtain Copyright (Urheberrecht) protection over software source code?',
      options: {
        A: 'Registration with the DPMA and payment of a €500 fee',
        B: 'None; copyright arises automatically upon creation of the work without any registration or symbol requirement',
        C: 'Displaying the official © symbol on every file',
        D: 'Depositing code in the German National Library'
      },
      correctAnswer: 'B',
      explanation: 'Under German and continental European copyright law, copyright arises automatically upon the creation of the work. No registration or copyright notice is required.',
      memoryTip: 'Copyright arises AUTOMATICALLY upon creation (no registration!).',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-11',
      unit: 6,
      topic: 'Domain Disputes',
      question: 'Registering an intentional common misspelling of a famous brand (such as "amzon.de" or "goggle.com") to intercept web traffic or distribute malware is known as:',
      options: {
        A: 'Cybersquatting',
        B: 'Typosquatting',
        C: 'Data Portability',
        D: 'Reverse Engineering'
      },
      correctAnswer: 'B',
      explanation: 'Typosquatting targets typographical errors made by Internet users entering website addresses into web browsers.',
      memoryTip: 'Common misspellings = Typosquatting.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-12',
      unit: 6,
      topic: 'IT Contracting',
      question: 'Why is a "Right-to-Audit" clause considered essential in enterprise cloud and SaaS vendor contracts?',
      options: {
        A: 'It allows the customer to write off cloud fees as tax credits.',
        B: 'It grants the customer and regulatory authorities the legal right to inspect vendor security controls and verify statutory compliance (such as GDPR Art. 28).',
        C: 'It forces the vendor to provide free software upgrades.',
        D: 'It transfers the customer’s copyright to the cloud provider.'
      },
      correctAnswer: 'B',
      explanation: 'GDPR Art. 28 and financial regulations mandate that controllers verify processor compliance. Without a Right-to-Audit clause, independent verification is legally impossible.',
      memoryTip: 'Right-to-Audit enables statutory verification of vendor compliance.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-13',
      unit: 6,
      topic: 'Processor Breach Notification',
      question: 'If a cloud hosting provider (acting as Data Processor) suffers a ransomware breach affecting customer databases, what is its legal reporting obligation under GDPR Art. 33(2)?',
      options: {
        A: 'It must notify the Supervisory Authority directly within 72 hours.',
        B: 'It must notify the affected Controllers without undue delay.',
        C: 'It has no reporting obligation if the data was encrypted.',
        D: 'It must publish a press release in European newspapers within 14 days.'
      },
      correctAnswer: 'B',
      explanation: 'Processors do not report directly to the Supervisory Authority; they must notify the Controller without undue delay.',
      memoryTip: 'Processor reports to Controller without undue delay.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-14',
      unit: 6,
      topic: 'Data Subject Rights',
      question: 'Which GDPR article grants data subjects the "Right to Erasure" (commonly known as the "Right to be Forgotten")?',
      options: {
        A: 'Article 15',
        B: 'Article 17',
        C: 'Article 20',
        D: 'Article 33'
      },
      correctAnswer: 'B',
      explanation: 'Article 17 governs the Right to Erasure (\'Right to be Forgotten\'). Article 15 is Access, Art. 20 is Portability, and Art. 33 is Breach Notification.',
      memoryTip: 'Article 17 = Right to Erasure / Forgotten.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-15',
      unit: 6,
      topic: 'Data Portability',
      question: 'The Right to Data Portability (GDPR Art. 20) entitles data subjects to receive their personal data in what format?',
      options: {
        A: 'In physical handwritten letters only',
        B: 'In a structured, commonly used, and machine-readable format (e.g., JSON or CSV)',
        C: 'Encrypted with a proprietary vendor cipher',
        D: 'Printed on microfiche film'
      },
      correctAnswer: 'B',
      explanation: 'Data portability requires controllers to provide data in a structured, commonly used, and machine-readable format to allow transfer to another provider.',
      memoryTip: 'Data Portability = Structured, commonly used, machine-readable format.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-16',
      unit: 6,
      topic: 'Privacy by Default',
      question: 'Which of the following practices constitutes a direct violation of "Privacy by Default" (GDPR Art. 25(2))?',
      options: {
        A: 'Setting user profiles to public by default with pre-ticked consent boxes for marketing tracking.',
        B: 'Encrypting passwords using salted bcrypt.',
        C: 'Deleting log files automatically after 30 days.',
        D: 'Requiring users to enter an email address to register.'
      },
      correctAnswer: 'A',
      explanation: 'Privacy by default requires that only necessary data is processed and the most privacy-friendly settings apply automatically out-of-the-box. Pre-ticked boxes violate this.',
      memoryTip: 'Pre-ticked consent boxes violate Privacy by Default.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-17',
      unit: 6,
      topic: 'Creative Commons CC0',
      question: 'What does a Creative Commons CC0 dedication signify when applied to an open-source dataset or image?',
      options: {
        A: 'The work cannot be used for commercial purposes.',
        B: 'The author dedicates the work to the public domain, waiving all copyright and related rights worldwide to the maximum extent permitted by law.',
        C: 'Users must pay royalties after 100 downloads.',
        D: 'The software must only run on Linux.'
      },
      correctAnswer: 'B',
      explanation: 'CC0 is the universal public domain dedication tool, allowing creators to waive all copyright interests and dedicate their works to the public domain.',
      memoryTip: 'CC0 = Public Domain dedication (no rights reserved).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-18',
      unit: 6,
      topic: 'German DPO Threshold',
      question: 'Under § 38 of the German Federal Data Protection Act (BDSG), when must an enterprise mandatorily designate a Data Protection Officer (DPO)?',
      options: {
        A: 'Only if the company is listed on the Frankfurt Stock Exchange.',
        B: 'If the enterprise permanently employs at least 20 persons in the automated processing of personal data.',
        C: 'Whenever revenue exceeds €100 million.',
        D: 'Only for healthcare providers.'
      },
      correctAnswer: 'B',
      explanation: 'Section 38 BDSG sets the employee threshold: designating a DPO is mandatory if at least 20 employees are permanently engaged in automated data processing.',
      memoryTip: 'German BDSG DPO threshold = 20 persons regularly processing data.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-19',
      unit: 6,
      topic: 'German Impressum Rule',
      question: 'In German e-commerce jurisprudence, what is the established "two-click rule" regarding the website Impressum?',
      options: {
        A: 'Users must click twice to accept cookies.',
        B: 'The legal notice (Impressum) must be easily recognizable, directly accessible, and reachable from any page on the website within at most two mouse clicks.',
        C: 'Orders are only legally binding after two confirmation clicks.',
        D: 'Websites must shut down after two failed logins.'
      },
      correctAnswer: 'B',
      explanation: 'Case law dictates that the Impressum must be directly reachable from every subpage within a maximum of two clicks via a clear link.',
      memoryTip: 'Impressum must be accessible within TWO clicks from anywhere.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-20',
      unit: 6,
      topic: 'Breach Notification to Data Subjects',
      question: 'Under GDPR Article 34, when must a Controller notify the affected DATA SUBJECTS directly regarding a personal data breach?',
      options: {
        A: 'For every single incident, even if no data was exposed.',
        B: 'Only when the breach is likely to result in a HIGH RISK to the rights and freedoms of natural persons.',
        C: 'Only if ordered to do so by Interpol.',
        D: 'Never; controllers only talk to regulators.'
      },
      correctAnswer: 'B',
      explanation: 'Data subjects must be notified without undue delay only when the breach is likely to result in a HIGH RISK to their rights and freedoms (Art. 34).',
      memoryTip: 'Notify individuals directly only if HIGH risk exists.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-21',
      unit: 6,
      topic: 'Anonymisation Status',
      question: 'If personal data is transformed through irreversible differential privacy techniques so that re-identification of individuals is mathematically impossible, what is its legal status under GDPR?',
      options: {
        A: 'It remains personal data subject to all GDPR fines.',
        B: 'It constitutes Anonymised Data, and the principles of data protection under GDPR no longer apply (Recital 26).',
        C: 'It must be reported to the DPA within 72 hours.',
        D: 'It is classified as special category healthcare data.'
      },
      correctAnswer: 'B',
      explanation: 'Recital 26 GDPR states that principles of data protection do not apply to anonymous information—information which does not relate to an identified or identifiable natural person.',
      memoryTip: 'Truly anonymised data falls OUTSIDE GDPR scope.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-22',
      unit: 6,
      topic: 'Cybersquatting',
      question: 'An individual registers "siemens-appliances-store.com" in bad faith with no intention of using it, hoping to demand €50,000 from Siemens AG. This act is called:',
      options: {
        A: 'Cybersquatting',
        B: 'Typosquatting',
        C: 'Reverse engineering',
        D: 'Fair use'
      },
      correctAnswer: 'A',
      explanation: 'Cybersquatting is the bad-faith registration of domain names identical or confusingly similar to trademarks to extort money from the trademark holder.',
      memoryTip: 'Registering trademarked domain in bad faith to extort = Cybersquatting.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-23',
      unit: 6,
      topic: 'GDPR Tier 1 Fines',
      question: 'What is the maximum fine under Tier 1 of GDPR (Article 83(4)), covering technical infractions such as failure to maintain processing records or execute an Art. 28 DPA?',
      options: {
        A: 'Up to €1 million or 0.5% turnover',
        B: 'Up to €10 million or 2% of total worldwide annual turnover, whichever is higher',
        C: 'Up to €20 million or 4% of turnover',
        D: '€50,000 maximum'
      },
      correctAnswer: 'B',
      explanation: 'Tier 1 penalties are up to €10 million or 2% of annual global turnover, whichever is higher.',
      memoryTip: 'Tier 1 = €10m or 2% turnover.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-24',
      unit: 6,
      topic: 'Data Subject Rights',
      question: 'Under GDPR Article 15 (Right of Access), what is a Data Controller required to provide to an individual requesting their data?',
      options: {
        A: 'The private encryption keys of the company servers.',
        B: 'Confirmation of whether personal data is being processed, a copy of the personal data, purposes of processing, categories of data, and recipients.',
        C: 'The salary details of all company executives.',
        D: 'A certificate of ownership for the database.'
      },
      correctAnswer: 'B',
      explanation: 'Art. 15 entitles individuals to confirm if their data is processed, receive a copy of that data, and understand the purposes, recipients, and retention periods.',
      memoryTip: 'Right of Access = Confirmation + Copy of data + Purposes and recipients.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-25',
      unit: 6,
      topic: 'Software Escrow Agreement',
      question: 'What is the primary purpose of a Software Escrow clause in an enterprise IT software contract?',
      options: {
        A: 'To transfer source code to open-source licenses.',
        B: 'To deposit source code with an independent third-party escrow agent, releasing it to the customer if the software vendor becomes insolvent or bankrupt.',
        C: 'To avoid paying software license fees.',
        D: 'To encrypt code against government surveillance.'
      },
      correctAnswer: 'B',
      explanation: 'Source code escrow protects customers from vendor bankruptcy by ensuring the customer can access source code to maintain mission-critical software.',
      memoryTip: 'Escrow protects customer if the software vendor goes bankrupt.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-26',
      unit: 6,
      topic: 'Privacy by Design Architecture',
      question: 'Implementing data minimization, automatic record expiration, and end-to-end encryption into the software architecture during sprint planning is an example of:',
      options: {
        A: 'Privacy by Design (Art. 25(1))',
        B: 'Cybersquatting',
        C: 'Right of Withdrawal',
        D: 'Utility Model Registration'
      },
      correctAnswer: 'A',
      explanation: 'Embedding data protection safeguards into the technical architecture from inception fulfills Privacy by Design.',
      memoryTip: 'Architecting privacy from day one = Privacy by Design.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-27',
      unit: 6,
      topic: 'German Button Solution',
      question: 'Under German consumer contract law (§ 312j BGB - the "Button Solution"), what must be displayed on the final ordering button in an online shop?',
      options: {
        A: '"Continue"',
        B: '"Register"',
        C: 'An unambiguous phrasing indicating a binding payment obligation, such as "Zahlungspflichtig bestellen" (Order with obligation to pay)',
        D: '"Download free trial"'
      },
      correctAnswer: 'C',
      explanation: 'The German "Button-Lösung" requires the final checkout button to explicitly state a payment obligation (e.g. "Zahlungspflichtig bestellen"). Ambiguous labels like "Weiter" invalidate the contract.',
      memoryTip: 'Button-Lösung = "Zahlungspflichtig bestellen" (explicit payment notice).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-28',
      unit: 6,
      topic: 'DPO Independence',
      question: 'Under GDPR Article 38, what is a mandatory statutory protection granted to a designated Data Protection Officer (DPO)?',
      options: {
        A: 'The DPO must be paid more than the CEO.',
        B: 'The DPO shall not be dismissed or penalized by the controller or processor for performing their statutory duties, and reports directly to highest management.',
        C: 'The DPO holds diplomatic immunity from local police.',
        D: 'The DPO must be an external consultant.'
      },
      correctAnswer: 'B',
      explanation: 'DPOs enjoy statutory independence: they cannot be dismissed or penalized for executing their duties and report directly to executive leadership.',
      memoryTip: 'DPO cannot be fired or penalized for doing their job.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-29',
      unit: 6,
      topic: 'GDPR Breach Exception',
      question: 'If a lost corporate laptop containing 5,000 patient records was encrypted with verified full-disk AES-256 and the key was safely stored off-device, why might the Controller be exempt from notifying the DATA SUBJECTS under Art. 34?',
      options: {
        A: 'Because the data was rendered unintelligible to any unauthorized person lacking access to the key.',
        B: 'Because laptops are not subject to GDPR.',
        C: 'Because patient data has no financial value.',
        D: 'Because the loss occurred outside the European Union.'
      },
      correctAnswer: 'A',
      explanation: 'Under Art. 34(3)(a), communication to data subjects is not required if the controller applied technological protections (like robust encryption) rendering data unintelligible.',
      memoryTip: 'Strong encryption makes data unintelligible, waiving data subject notice.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-30',
      unit: 6,
      topic: 'Right of Withdrawal Exceptions',
      question: 'Which of the following purchases is typically EXCLUDED from the statutory 14-day Right of Withdrawal under § 312g(2) BGB?',
      options: {
        A: 'A standard off-the-shelf printed book',
        B: 'Individually customized goods manufactured to specific customer specifications (e.g., custom engraved hardware), or sealed software unsealed after delivery',
        C: 'A standard computer mouse',
        D: 'A generic cotton t-shirt'
      },
      correctAnswer: 'B',
      explanation: 'Customized bespoke goods and unsealed software or audio recordings are statutory exceptions where the right of withdrawal is waived.',
      memoryTip: 'Custom goods & unsealed software = No withdrawal right.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-31',
      unit: 6,
      topic: 'Special Category Data',
      question: 'Under GDPR Article 9, which of the following is classified as "Special Category" (sensitive) personal data subject to stricter processing bans?',
      options: {
        A: 'Business email address',
        B: 'Biometric data for uniquely identifying a natural person, genetic data, health data, and political opinions',
        C: 'IP address of a home router',
        D: 'Company registration number'
      },
      correctAnswer: 'B',
      explanation: 'Art. 9 defines special categories: racial/ethnic origin, political opinions, religious beliefs, genetic/biometric data, health data, and sexual orientation.',
      memoryTip: 'Health, genetics, biometrics, politics = Special Category (Art. 9).',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-32',
      unit: 6,
      topic: 'International Data Transfers',
      question: 'When transferring personal data from the EU to a third country lacking an adequacy decision, which legal safeguard is most commonly deployed under GDPR Art. 46?',
      options: {
        A: 'A verbal agreement between developers',
        B: 'Standard Contractual Clauses (SCCs) adopted by the EU Commission, accompanied by a Transfer Impact Assessment (TIA)',
        C: 'A non-disclosure agreement written in German',
        D: 'Paying a €1,000 fee to the DPMA'
      },
      correctAnswer: 'B',
      explanation: 'Standard Contractual Clauses (SCCs) approved by the European Commission, reinforced by Transfer Impact Assessments, are the standard Art. 46 transfer mechanism.',
      memoryTip: 'International data transfers = Standard Contractual Clauses (SCCs).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-33',
      unit: 6,
      topic: 'IP Law Distinction',
      question: 'An engineer invents a brand new cryptographic microchip architecture that processes hashes 10x faster. Which IP protection should the company pursue for maximum 20-year exclusive monopoly?',
      options: {
        A: 'Copyright',
        B: 'Patent',
        C: 'Trademark',
        D: 'CC-BY License'
      },
      correctAnswer: 'B',
      explanation: 'A novel technical microchip solving a technical problem qualifies for Patent protection, providing up to 20 years of exclusive commercial rights.',
      memoryTip: 'Novel technical invention = Patent (20 years).',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-34',
      unit: 6,
      topic: 'Right of Rectification',
      question: 'What does GDPR Article 16 (Right to Rectification) allow a data subject to demand?',
      options: {
        A: 'Immediate financial compensation of €5,000',
        B: 'The correction of inaccurate personal data without undue delay, and completion of incomplete data',
        C: 'The termination of the company’s operating license',
        D: 'Free shares in the company'
      },
      correctAnswer: 'B',
      explanation: 'Art. 16 entitles individuals to obtain from the controller without undue delay the rectification of inaccurate personal data concerning them.',
      memoryTip: 'Article 16 = Right to Rectification (fix inaccurate data).',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-35',
      unit: 6,
      topic: 'German BDSG Context',
      question: 'Section 26 of the German Federal Data Protection Act (BDSG) specifically governs which sensitive domain of data processing?',
      options: {
        A: 'Maritime shipping logistics',
        B: 'Data processing for employment-related purposes (Employee Data Protection)',
        C: 'Space satellite communications',
        D: 'Video game microtransactions'
      },
      correctAnswer: 'B',
      explanation: 'Section 26 BDSG provides the national statutory framework for processing personal data of employees in Germany.',
      memoryTip: '§ 26 BDSG = Employee Data Protection in Germany.',
      difficulty: 'Mastery'
    },
    {
      id: 'u6-mcq-36',
      unit: 6,
      topic: 'GDPR Accountability Principle',
      question: 'The GDPR principle of "Accountability" (Art. 5(2)) places what burden upon the Data Controller?',
      options: {
        A: 'The controller must hire at least 50 external accountants.',
        B: 'The controller is responsible for, and must be able to DEMONSTRATE compliance with, all data protection principles.',
        C: 'The controller must publicly disclose all financial transactions.',
        D: 'The controller must publish customer emails online.'
      },
      correctAnswer: 'B',
      explanation: 'Accountability requires controllers not just to obey the principles, but to proactively maintain documented evidence proving ongoing compliance.',
      memoryTip: 'Accountability = Must be able to DEMONSTRATE compliance.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-37',
      unit: 6,
      topic: 'Patent vs Utility Model Speed',
      question: 'Why would an IT hardware startup in Germany file for a Utility Model (Gebrauchsmuster) rather than a full Patent for a fast-moving physical gadget?',
      options: {
        A: 'Because utility models last 100 years.',
        B: 'Because utility models are registered quickly and inexpensively without awaiting substantive examination, providing immediate registration protection within weeks.',
        C: 'Because patents are illegal for startups.',
        D: 'Because utility models do not require fees.'
      },
      correctAnswer: 'B',
      explanation: 'Utility models are registered within weeks without substantive novelty examination, allowing rapid legal protection for short-lifecycle products.',
      memoryTip: 'Utility models register rapidly without waiting for patent examinations.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-38',
      unit: 6,
      topic: 'Data Subject Right to Object',
      question: 'When a data subject objects to the processing of their personal data for DIRECT MARKETING purposes under GDPR Art. 21(2), what must the Controller do?',
      options: {
        A: 'The controller can override the objection if marketing profits exceed €10,000.',
        B: 'The controller must immediately cease processing the personal data for direct marketing; there are no statutory balancing tests or exceptions.',
        C: 'The controller charges a €20 processing fee.',
        D: 'The controller files an appeal with the Supreme Court.'
      },
      correctAnswer: 'B',
      explanation: 'The right to object to direct marketing is absolute. Once exercised, processing for direct marketing must stop immediately with zero exceptions.',
      memoryTip: 'Objection to direct marketing is ABSOLUTE. Must cease immediately.',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-39',
      unit: 6,
      topic: 'DPA Investigation Powers',
      question: 'Under GDPR Article 58, which of the following is an investigative or corrective power of a Data Protection Supervisory Authority?',
      options: {
        A: 'Imposing a temporary or definitive limitation including a ban on processing.',
        B: 'Sentencing company directors to mandatory military service.',
        C: 'Confiscating all company bank accounts without notice.',
        D: 'Cancelling an author’s copyright.'
      },
      correctAnswer: 'A',
      explanation: 'Under Art. 58, DPAs possess powers to issue warnings, order compliance, impose processing bans, and levy administrative fines up to €20m / 4%.',
      memoryTip: 'DPAs can order complete processing bans and issue fines.',
      difficulty: 'Foundation'
    },
    {
      id: 'u6-mcq-40',
      unit: 6,
      topic: 'E-Commerce Impressum Omission',
      question: 'What is the immediate legal risk in Germany if a commercial online retailer fails to provide a compliant Impressum on its website?',
      options: {
        A: 'The site can be immediately targeted by competitors and consumer associations with costly legal warning letters (Abmahnungen) and cease-and-desist claims.',
        B: 'The domain name is automatically transferred to the German government.',
        C: 'The ISP cuts all electricity to the company building.',
        D: 'There is no legal consequence if products are high quality.'
      },
      correctAnswer: 'A',
      explanation: 'Missing or defective Impressums violate unfair competition laws (UWG), triggering rapid warning notices (Abmahnungen) with legal fee claims and injunctions.',
      memoryTip: 'Missing Impressum triggers Abmahnungen (formal warning letters).',
      difficulty: 'Intermediate'
    },
    {
      id: 'u6-mcq-41',
      unit: 6,
      topic: 'GDPR Processor Liability',
      question: 'Can a Data Processor be held directly liable by a Supervisory Authority for GDPR violations?',
      options: {
        A: 'No, only controllers can ever be fined under GDPR.',
        B: 'Yes, processors can be fined directly for violating obligations specifically directed at processors (e.g. Art. 28, Art. 32 security, sub-processor rules).',
        C: 'Only if the processor has headquarters in Germany.',
        D: 'Only if the fine is under €10,000.'
      },
      correctAnswer: 'B',
      explanation: 'Unlike pre-GDPR laws, GDPR imposes direct statutory obligations and direct liability on Processors under Articles 28, 30, 32, 33(2), and 37.',
      memoryTip: 'Processors have direct statutory liability under GDPR.',
      difficulty: 'Mastery'
    },
    {
      id: 'u6-mcq-42',
      unit: 6,
      topic: 'Right to Restriction of Processing',
      question: 'What does the "Right to Restriction of Processing" (GDPR Art. 18) mean for the stored data?',
      options: {
        A: 'The data must be immediately destroyed from all backup tapes.',
        B: 'The data may, with the exception of storage, only be processed with the data subject’s consent or for legal claims, while its accuracy or lawfulness is contested.',
        C: 'The data is transferred to a public blockchain.',
        D: 'The data must be converted to paper format.'
      },
      correctAnswer: 'B',
      explanation: 'Restriction freezes the data: the controller may continue to store it, but cannot actively process it while disputes (e.g., accuracy) are resolved.',
      memoryTip: 'Restriction = Freezing processing while keeping data in storage.',
      difficulty: 'Intermediate'
    }
  ]
};
