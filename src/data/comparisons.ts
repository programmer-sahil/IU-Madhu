import { MasterComparison } from '../types';

export const masterComparisons: MasterComparison[] = [
  {
    id: 'comp-1',
    title: 'Governance vs Management',
    unit: 'Unit 1 & 2',
    description: 'The fundamental separation of responsibilities between directing/monitoring and executing/operating.',
    columns: ['Governance', 'Management'],
    criteria: [
      {
        aspect: 'Core Responsibility Triad',
        itemA: 'Evaluate, Direct, and Monitor (EDM)',
        itemB: 'Plan, Build, Run, and Monitor (PBRM)',
        keyDifference: 'Governance evaluates options and sets direction; management executes.'
      },
      {
        aspect: 'Accountable Body',
        itemA: 'Board of Directors / Governing Body / Supervisory Board',
        itemB: 'Executive Management (CEO, CIO, CTO, Management Committee)',
        keyDifference: 'The Board is fiduciary; executives run daily operations.'
      },
      {
        aspect: 'Time Horizon & Orientation',
        itemA: 'Long-term enterprise sustainability, stakeholder value, risk appetite',
        itemB: 'Tactical, operational, short-to-medium term service delivery and projects',
        keyDifference: 'Governance focuses on the future and stakeholders; management on operational execution.'
      },
      {
        aspect: 'Key Question',
        itemA: '"Are we doing the right things for enterprise stakeholders?"',
        itemB: '"Are we doing things right, efficiently, and effectively?"',
        keyDifference: 'Doing the right things (effectiveness) vs doing things right (efficiency).'
      },
      {
        aspect: 'Primary Frameworks',
        itemA: 'ISO/IEC 38500, COBIT Governance Domain (EDM)',
        itemB: 'COBIT Management Domains (APO, BAI, DSS, MEA), ITIL V4',
        keyDifference: 'COBIT separates EDM into governance, and the other 4 domains into management.'
      }
    ],
    examTrap: 'Never write that the Board "manages", "deploys", or "configures" IT systems. The Board evaluates, directs, and monitors.',
    memoryRule: 'EDM = Board / Governance. PBRM = Executives / Management.'
  },
  {
    id: 'comp-2',
    title: 'Framework vs Standard',
    unit: 'Unit 1, 2, 3, 5',
    description: 'Understanding the distinction between flexible best-practice guidance and strict verifiable specifications.',
    columns: ['Framework (e.g., COBIT, ITIL, TOGAF)', 'Standard (e.g., ISO 27001, ISO 20000, ISO 38500)'],
    criteria: [
      {
        aspect: 'Nature & Flexibility',
        itemA: 'Flexible, adaptable guidance; outlines "how to think" and recommended practices',
        itemB: 'Strict, formalized, normative specifications defining mandatory "shall" requirements',
        keyDifference: 'Frameworks can be tailored; standard requirements are mandatory for compliance.'
      },
      {
        aspect: 'Certification Scope',
        itemA: 'Organizations CANNOT be certified against frameworks (e.g. no "ITIL-certified company")',
        itemB: 'Organizations CAN achieve formal accredited third-party certification',
        keyDifference: 'Standards are certifiable by accredited audit bodies.'
      },
      {
        aspect: 'Language Used',
        itemA: 'Descriptive, recommendations, best practices ("should", "can")',
        itemB: 'Prescriptive, formal criteria, mandatory clauses ("shall", "must")',
        keyDifference: 'Standards use unambiguous normative clauses.'
      }
    ],
    examTrap: 'Claiming an enterprise is "ITIL certified" or "COBIT certified". Only individuals hold ITIL credentials; companies get certified against ISO 20000 or ISO 27001.',
    memoryRule: 'Framework = Guidebook for people. Standard = Certifiable specification for organizations.'
  },
  {
    id: 'comp-3',
    title: 'COBIT 2019 vs ITIL V4',
    unit: 'Unit 2 & 5',
    description: 'How the global umbrella governance model compares to the premier IT service management operating model.',
    columns: ['COBIT 2019 (ISACA)', 'ITIL V4 (Axelos / PeopleCert)'],
    criteria: [
      {
        aspect: 'Scope & Position',
        itemA: 'Overarching enterprise governance and management umbrella (EGIT)',
        itemB: 'Specialized IT Service Management (ITSM) operating model',
        keyDifference: 'COBIT sits above ITIL, aligning service delivery with corporate strategy.'
      },
      {
        aspect: 'Core Architecture',
        itemA: '5 Domains (EDM, APO, BAI, DSS, MEA) & 40 Objectives',
        itemB: 'Service Value System (SVS) & 6 Service Value Chain activities (PIEDOD)',
        keyDifference: 'COBIT uses 40 objectives; ITIL uses 34 practices and the Service Value Chain.'
      },
      {
        aspect: 'Governance Role',
        itemA: 'Contains an explicit Governance Domain (EDM) directed by the Board',
        itemB: 'Includes Governance as one of the 5 macro components of the SVS',
        keyDifference: 'COBIT provides granular governance objectives (EDM01-05).'
      },
      {
        aspect: 'Customization',
        itemA: 'Uses 11 Design Factors to customize the governance system',
        itemB: 'Uses 7 Guiding Principles and the Four Dimensions to adapt',
        keyDifference: 'COBIT design factors formally score and tailor process capability targets.'
      }
    ],
    examTrap: 'Viewing COBIT and ITIL as competitors. They are complementary: COBIT provides the governance umbrella, while ITIL provides the service delivery practices.',
    memoryRule: 'COBIT = The Governance Umbrella. ITIL = The Service Delivery Engine.'
  },
  {
    id: 'comp-4',
    title: 'ITIL V4 vs ISO/IEC 20000-1:2018',
    unit: 'Unit 5',
    description: 'The relationship between ITSM best practices and the certifiable international standard.',
    columns: ['ITIL V4', 'ISO/IEC 20000-1:2018'],
    criteria: [
      {
        aspect: 'Legal / Audit Status',
        itemA: 'Non-auditable advisory guidance and process descriptions',
        itemB: 'Auditable specification standard for a Service Management System (SMS)',
        keyDifference: 'ISO 20000 is an international legal/commercial audit baseline.'
      },
      {
        aspect: 'Certification Eligibility',
        itemA: 'Only individuals can take ITIL exams and hold certifications',
        itemB: 'Enterprises and service providers can achieve formal organizational certification',
        keyDifference: 'Companies achieve ISO 20000 certification; staff earn ITIL certificates.'
      },
      {
        aspect: 'Structure',
        itemA: 'Service Value System, 4 Dimensions, 34 Practices',
        itemB: 'Annex SL High-Level Structure (Clauses 4 through 10)',
        keyDifference: 'ISO 20000 follows standardized ISO management clauses.'
      }
    ],
    examTrap: 'Saying a vendor has an "ITIL certificate". Check if they actually have an ISO/IEC 20000-1 certificate.',
    memoryRule: 'ITIL trains the workers; ISO 20000 certifies the company.'
  },
  {
    id: 'comp-5',
    title: 'ISO 27001 vs ISO 27002 vs ISO 27005',
    unit: 'Unit 3',
    description: 'The three core pillars of the ISO/IEC 27000 information security suite.',
    columns: ['ISO/IEC 27001', 'ISO/IEC 27002 & ISO/IEC 27005'],
    criteria: [
      {
        aspect: 'Role & Function',
        itemA: 'Specification standard for establishing, running, and certifying an ISMS',
        itemB: '27002: Control catalogue/guidelines; 27005: Risk management methodology',
        keyDifference: 'Only 27001 is certifiable; 27002 and 27005 are guidance handbooks.'
      },
      {
        aspect: 'Auditable Requirements',
        itemA: 'Contains mandatory normative clauses (Clauses 4-10) and Annex A reference',
        itemB: 'Provides non-mandatory best-practice explanations and implementation tips',
        keyDifference: 'Failing an ISO 27001 clause results in an audit non-conformity.'
      },
      {
        aspect: 'Certification Validity',
        itemA: 'Valid for 3 years, with mandatory annual surveillance audits in Years 1 & 2',
        itemB: 'No certification exists for 27002 or 27005',
        keyDifference: 'Only 27001 awards accredited certification badges.'
      }
    ],
    examTrap: 'Never write that an organization is "ISO 27002 certified". Certification is strictly against ISO 27001.',
    memoryRule: '27001 certifies the ISMS; 27002 details the controls; 27005 guides the risk assessment.'
  },
  {
    id: 'comp-6',
    title: 'Administrative vs Physical vs Technical Controls',
    unit: 'Unit 1 & 3',
    description: 'The three structural Control Categories categorized by their operational mechanism.',
    columns: ['Administrative (Organizational)', 'Physical vs Technical (Logical)'],
    criteria: [
      {
        aspect: 'Mechanism & Substance',
        itemA: 'Policies, procedures, standards, training, background checks, codes of conduct',
        itemB: 'Physical: Real-world tangible barriers. Technical: Hardware/software algorithms.',
        keyDifference: 'Admin guides human behavior; Physical guards facilities; Technical guards data in systems.'
      },
      {
        aspect: 'Examples',
        itemA: 'Acceptable Use Policy, NDA, Security Awareness Training, Segregation of Duties',
        itemB: 'Physical: Biometric door lock, CCTV, guard, fence. Technical: Firewall, MFA, AES encryption.',
        keyDifference: 'Locks & guards are physical; firewalls & encryption are technical.'
      },
      {
        aspect: 'Failure Modes',
        itemA: 'Ignored by staff, human error, lack of enforcement, cognitive fatigue',
        itemB: 'Physical: Power failure, physical breach. Technical: Software bugs, zero-days.',
        keyDifference: 'Administrative fails through human disobedience; technical through software flaws.'
      }
    ],
    examTrap: 'Confusing categories (Admin, Physical, Technical) with functional types (Preventative, Detective, Corrective).',
    memoryRule: 'Admin = Written rules. Physical = Tangible barriers. Technical = Software/Hardware.'
  },
  {
    id: 'comp-7',
    title: 'Preventative vs Detective vs Corrective Controls',
    unit: 'Unit 1 & 3',
    description: 'Control Types classified by the temporal point of intervention relative to an incident.',
    columns: ['Preventative Controls', 'Detective vs Corrective Controls'],
    criteria: [
      {
        aspect: 'Point of Intervention',
        itemA: 'BEFORE the incident: stops the unwanted event from occurring',
        itemB: 'Detective: DURING/AFTER: discovers the event. Corrective: AFTER: fixes the damage.',
        keyDifference: 'Preventative stops it; Detective spots it; Corrective fixes it.'
      },
      {
        aspect: 'Concrete IT Examples',
        itemA: 'Multi-Factor Authentication (MFA), dual authorization, input sanitization',
        itemB: 'Detective: SIEM log alerts, IDS, monthly reconciliations. Corrective: Restoring backups, patching.',
        keyDifference: 'MFA stops unauthorized entry; SIEM finds anomalous logins; backups restore lost data.'
      },
      {
        aspect: 'Cost of Failure',
        itemA: 'Lowest cost: prevents breach from taking place',
        itemB: 'Higher cost: damage is already happening or done, requiring response and remediation',
        keyDifference: 'Prevention is vastly cheaper than cleanup.'
      }
    ],
    examTrap: 'Classifying an Intrusion Detection System (IDS) as preventative. An IDS detects; an Intrusion Prevention System (IPS) prevents.',
    memoryRule: 'Preventative = Stop it. Detective = Find it. Corrective = Fix it.'
  },
  {
    id: 'comp-8',
    title: 'Inherent Risk vs Residual Risk',
    unit: 'Unit 3',
    description: 'Gross risk exposure before controls versus net risk exposure remaining after controls.',
    columns: ['Inherent Risk (Gross Risk)', 'Residual Risk (Net Risk)'],
    criteria: [
      {
        aspect: 'Definition & State',
        itemA: 'Raw, unmitigated risk exposure present in the absence of all safeguards',
        itemB: 'Remaining risk exposure after existing or planned controls have been implemented',
        keyDifference: 'Inherent is before controls; Residual is after controls.'
      },
      {
        aspect: 'Formula',
        itemA: 'Risk = Threat × Vulnerability × Asset Value',
        itemB: 'Residual Risk = Inherent Risk − Impact of Internal Controls',
        keyDifference: 'Residual risk subtracts the risk reduction achieved by controls.'
      },
      {
        aspect: 'Governance Target',
        itemA: 'Informs what level of control investment is required',
        itemB: 'MUST fall within the approved enterprise Risk Appetite set by the Board',
        keyDifference: 'If Residual Risk > Risk Appetite, further treatment (or avoidance) is mandatory.'
      }
    ],
    examTrap: 'Believing residual risk can or should be reduced to zero. Zero risk is practically impossible; residual risk must be within risk appetite.',
    memoryRule: 'Inherent = Raw danger. Residual = Leftover danger after controls.'
  },
  {
    id: 'comp-9',
    title: 'BSI 200-1 vs BSI 200-2 vs BSI 200-3 vs BSI 100-4/200-4',
    unit: 'Unit 4',
    description: 'The distinct roles of the German BSI information security standards family.',
    columns: ['BSI 200-1 & 200-2', 'BSI 200-3 & BSI 100-4 / 200-4'],
    criteria: [
      {
        aspect: 'Standard 200-1 Role',
        itemA: 'ISMS Requirements (harmonized with ISO/IEC 27001; defines management commitment)',
        itemB: '—',
        keyDifference: 'Sets the overarching management system rules.'
      },
      {
        aspect: 'Standard 200-2 Role',
        itemA: 'IT-Grundschutz Methodology (6 steps: Structural Analysis to Implementation; Basic/Core/Standard)',
        itemB: '—',
        keyDifference: 'Provides the concrete implementation guide and protection approaches.'
      },
      {
        aspect: 'Standard 200-3 Role',
        itemA: '—',
        itemB: 'Risk Analysis based on IT-Grundschutz (supplementary risk analysis for High/Very High items)',
        keyDifference: 'Specifies custom risk analysis when compendium modules are insufficient.'
      },
      {
        aspect: 'Standard 100-4 / 200-4 Role',
        itemA: '—',
        itemB: 'Emergency Management & Business Continuity Management (BIA, DR plans, crisis response)',
        keyDifference: 'Governs organizational survival and disaster recovery.'
      }
    ],
    examTrap: 'Confusing 200-2 (Methodology) with 200-3 (Risk Analysis).',
    memoryRule: '200-1 ISMS, 200-2 Methodology, 200-3 Risk Analysis, 200-4 Emergency / BCM.'
  },
  {
    id: 'comp-10',
    title: 'Maximum Principle vs Accumulation Effect vs Distribution Effect',
    unit: 'Unit 4',
    description: 'The three governing rules for determining protection requirements in BSI IT-Grundschutz.',
    columns: ['Maximum Principle (Baseline)', 'Accumulation (Elevates) vs Distribution (Lowers)'],
    criteria: [
      {
        aspect: 'Role in Methodology',
        itemA: 'The default baseline rule: component inherits highest requirement among hosted apps',
        itemB: 'Accumulation & Distribution are modifying exception rules that adjust the baseline',
        keyDifference: 'Maximum sets the start point; Accumulation raises it; Distribution lowers it.'
      },
      {
        aspect: 'Direction of Impact',
        itemA: 'Determines baseline (no adjustment direction)',
        itemB: 'Accumulation: ADJUSTS UPWARD. Distribution: ADJUSTS DOWNWARD.',
        keyDifference: 'Accumulation elevates protection; Distribution reduces protection.'
      },
      {
        aspect: 'Underlying Architectural Cause',
        itemA: 'Hosting multiple applications of varying criticality on one shared host',
        itemB: 'Accumulation: Aggregated cumulative damage of many normal assets. Distribution: Redundancy & clustering.',
        keyDifference: 'Concentration of many minor apps raises risk; active geo-redundancy lowers risk.'
      },
      {
        aspect: 'Application to Confidentiality',
        itemA: 'Applies fully across CIA',
        itemB: 'Accumulation applies to CIA. Distribution RARELY applies to Confidentiality (redundancy leaks data).',
        keyDifference: 'Distribution only lowers Availability and Integrity, almost never Confidentiality.'
      }
    ],
    examTrap: 'Applying the Distribution Effect to Confidentiality. If an encrypted database is mirrored to 3 servers, breaching any one server exposes the data completely.',
    memoryRule: 'Maximum = Highest wins. Accumulation = Upward. Distribution = Downward.'
  },
  {
    id: 'comp-11',
    title: 'Incident Management vs Problem Management',
    unit: 'Unit 5',
    description: 'The core operational difference between immediate symptom restoration and root-cause eradication.',
    columns: ['Incident Management', 'Problem Management'],
    criteria: [
      {
        aspect: 'Primary Objective',
        itemA: 'Restore normal service operation as quickly as possible and minimize disruption',
        itemB: 'Identify root causes of recurring incidents, prevent incidents, and manage known errors',
        keyDifference: 'Incident management stops the bleeding; problem management cures the disease.'
      },
      {
        aspect: 'Core Mechanism',
        itemA: 'Rapid triage, standard operating procedures, and temporary workarounds',
        itemB: 'Root cause analysis, trend evaluation, Known Error Database (KEDB), permanent RFCs',
        keyDifference: 'Workaround vs permanent architectural/code fix.'
      },
      {
        aspect: 'Time Horizon',
        itemA: 'Urgent, real-time, measured in minutes or hours (Mean Time to Restore - MTTR)',
        itemB: 'Analytical, medium-to-long term, proactive trend investigation',
        keyDifference: 'Immediate operational response vs structural engineering investigation.'
      }
    ],
    examTrap: 'Closing a problem ticket because an incident workaround restored service. The problem must remain open as a Known Error until root cause is fixed permanently.',
    memoryRule: 'Incident = Fix the symptom fast. Problem = Fix the root cause forever.'
  },
  {
    id: 'comp-12',
    title: 'Data Controller vs Data Processor (GDPR)',
    unit: 'Unit 6',
    description: 'The foundational division of legal accountability under the European General Data Protection Regulation.',
    columns: ['Data Controller (Art. 4(7))', 'Data Processor (Art. 4(8))'],
    criteria: [
      {
        aspect: 'Decision Authority',
        itemA: 'Determines the PURPOSES AND MEANS of personal data processing',
        itemB: 'Processes personal data strictly ON BEHALF OF and instructed by the Controller',
        keyDifference: 'The Controller decides why and how; the Processor executes under orders.'
      },
      {
        aspect: 'Statutory Instrument',
        itemA: 'Issues documented processing instructions to processors',
        itemB: 'Must be bound by a mandatory Art. 28 Data Processing Agreement (DPA / AVV)',
        keyDifference: 'Processors cannot touch data without a written Art. 28 DPA contract.'
      },
      {
        aspect: 'Breach Notification Duty',
        itemA: 'Notifies Supervisory Authority within 72 hours, and data subjects if high risk',
        itemB: 'Notifies the CONTROLLER without undue delay (does NOT notify DPA directly)',
        keyDifference: 'The Processor escalates to the Controller; the Controller reports to the DPA.'
      },
      {
        aspect: 'Primary Legal Liability',
        itemA: 'Primary statutory accountability to data subjects and supervisory authorities',
        itemB: 'Direct statutory liability for processor-specific articles (28, 30, 32, 33(2)) and contractual liability',
        keyDifference: 'Controller bears overarching liability for data processing legitimacy.'
      }
    ],
    examTrap: 'Stating that the Processor notifies the Data Protection Authority within 72 hours. The Controller notifies the DPA; the Processor reports to the Controller.',
    memoryRule: 'Controller = Purposes & Means. Processor = On behalf of controller.'
  },
  {
    id: 'comp-13',
    title: 'Pseudonymisation vs Anonymisation',
    unit: 'Unit 6',
    description: 'The critical legal and technical boundary determining whether GDPR rules apply.',
    columns: ['Pseudonymisation (Art. 4(5))', 'Anonymisation (Recital 26)'],
    criteria: [
      {
        aspect: 'Reversibility',
        itemA: 'REVERSIBLE: Identifiers replaced by token/hash, but re-identification is possible with a separate key',
        itemB: 'IRREVERSIBLE: Identifiers permanently eliminated; re-identification impossible by any reasonable means',
        keyDifference: 'Pseudonymised data can be unscrambled; anonymised data cannot.'
      },
      {
        aspect: 'Legal Scope under GDPR',
        itemA: 'STILL PERSONAL DATA: Fully subject to all GDPR principles, rights, and penalties',
        itemB: 'OUTSIDE GDPR SCOPE: No longer personal data; GDPR principles do not apply',
        keyDifference: 'Pseudonymisation is a security control (TOM); Anonymisation exits GDPR.'
      },
      {
        aspect: 'Primary Purpose',
        itemA: 'Reduces risk of breach; satisfies Privacy by Design requirements',
        itemB: 'Enables open public data sharing and permanent statistical research without privacy liability',
        keyDifference: 'Security safeguard vs complete de-regulation.'
      }
    ],
    examTrap: 'Believing pseudonymised data is exempt from GDPR. It is strictly subject to GDPR because re-identification is possible.',
    memoryRule: 'Pseudonymisation = Reversible (GDPR applies). Anonymisation = Irreversible (GDPR exits).'
  },
  {
    id: 'comp-14',
    title: 'Patent vs Utility Model vs Copyright',
    unit: 'Unit 6',
    description: 'Comparative taxonomy of intellectual property regimes in German and European law.',
    columns: ['Patent (20 Years)', 'Utility Model (10 Yrs) vs Copyright (70 Yrs Post-Mortem)'],
    criteria: [
      {
        aspect: 'Subject Matter Protected',
        itemA: 'Technical inventions solving a technical problem (novelty, inventive step, industrial use)',
        itemB: 'Utility Model: Technical devices. Copyright: Creative works & software code expressions.',
        keyDifference: 'Patents & Utility models protect technical inventions; Copyright protects creative expression.'
      },
      {
        aspect: 'Registration Requirement',
        itemA: 'Mandatory formal application, substantive novelty examination by patent office, and official grant',
        itemB: 'Utility Model: Rapid unexamined registration. Copyright: AUTOMATIC upon creation (zero registration).',
        keyDifference: 'Copyright requires zero registration; Patents require years of formal examination.'
      },
      {
        aspect: 'Statutory Duration',
        itemA: '20 Years from application filing date',
        itemB: 'Utility Model: Maximum 10 Years. Copyright: 70 Years after author’s death (post mortem).',
        keyDifference: '20 years vs 10 years vs Life + 70 years.'
      }
    ],
    examTrap: 'Claiming software source code in Germany is patented. Source code is protected automatically by Copyright (Urheberrecht).',
    memoryRule: '20 years for Patents, 10 years for Utility Models, 70 years after death for Copyright.'
  },
  {
    id: 'comp-15',
    title: 'Cybersquatting vs Typosquatting',
    unit: 'Unit 6',
    description: 'Bad-faith domain name infringements under trademark and unfair competition laws.',
    columns: ['Cybersquatting', 'Typosquatting'],
    criteria: [
      {
        aspect: 'Domain Formulation',
        itemA: 'Exact or confusingly similar match to a famous trademark (e.g., brand-store.com)',
        itemB: 'Intentional common typographical misspelling of a famous domain (e.g., amzon.de, goggle.com)',
        keyDifference: 'Targeting trademark name vs exploiting human typing typos.'
      },
      {
        aspect: 'Primary Malicious Intent',
        itemA: 'Extorting the trademark holder by offering to resell the domain at an exorbitant price',
        itemB: 'Intercepting traffic to serve fraudulent affiliate ads, steal credentials, or drop malware',
        keyDifference: 'Extortion/reselling vs traffic monetization/phishing.'
      },
      {
        aspect: 'Legal Remedy',
        itemA: 'UDRP dispute proceedings (WIPO) or court action under trademark infringement',
        itemB: 'UDRP transfer, trademark dilution, and consumer protection fraud enforcement',
        keyDifference: 'Both can be recovered via UDRP (Uniform Domain-Name Dispute-Resolution Policy).'
      }
    ],
    examTrap: 'Interchanging the two terms: Cybersquatting targets trademark reselling; Typosquatting targets typos for traffic/phishing.',
    memoryRule: 'Cyber = Hold trademark for ransom. Typo = Exploit typing mistakes.'
  },
  {
    id: 'comp-16',
    title: 'Privacy by Design vs Privacy by Default',
    unit: 'Unit 6',
    description: 'The two foundational engineering mandates of GDPR Article 25.',
    columns: ['Privacy by Design (Art. 25(1))', 'Privacy by Default (Art. 25(2))'],
    criteria: [
      {
        aspect: 'Core Mandate',
        itemA: 'Embedding data protection principles and technical safeguards directly into systems during the initial design phase',
        itemB: 'Ensuring that, by default, systems only process personal data strictly necessary for each specific purpose',
        keyDifference: 'Design is the technical architecture; Default is the initial out-of-the-box user setting.'
      },
      {
        aspect: 'Implementation Focus',
        itemA: 'Architectural engineering: encryption, pseudonymisation, data isolation, automated retention policies',
        itemB: 'User settings: strictest privacy options pre-selected, no pre-ticked consent boxes, opt-in by default',
        keyDifference: 'Behind-the-scenes engineering vs user-facing default configurations.'
      },
      {
        aspect: 'Timing of Application',
        itemA: 'At the time of determining the means for processing and during system development',
        itemB: 'Whenever the software is deployed and an end-user begins using the product',
        keyDifference: 'Design occurs during R&D; Default governs live operation.'
      }
    ],
    examTrap: 'Confusing the two concepts: Privacy by Design is architectural; Privacy by Default means the user does not have to change settings to protect their privacy.',
    memoryRule: 'Design = Build it in from day one. Default = Strictest privacy out of the box.'
  }
];
