import { ExamTrapItem } from '../types';

export const examTrapsData: ExamTrapItem[] = [
  {
    id: 'trap-1',
    unit: 1,
    topic: 'Governance Acronym Expansion',
    commonStudentMistake: 'Writing "Evaluate, Deliver and Monitor" for EDM.',
    correctAcademicTruth: 'EDM strictly stands for Evaluate, DIRECT, and Monitor. "Delivery" belongs to Management (DSS: Deliver, Service and Support).',
    whyExaminerDeductsMarks: 'Conflates board-level governance direction with operational executive delivery, demonstrating fundamental confusion between Governance and Management.',
    howToRemember: 'The Board DIRECTS policy; it never DELIVERS software code. EDM = Evaluate, Direct, Monitor.'
  },
  {
    id: 'trap-2',
    unit: 1,
    topic: 'Control Taxonomy Interchange',
    commonStudentMistake: 'Interchanging Control Categories with Control Types (e.g. calling "Preventative" a category, or "Technical" a type).',
    correctAcademicTruth: 'Categories describe the operational MECHANISM: Administrative, Physical, Technical/Logical. Types describe the functional TIMING: Preventative, Deterrent, Detective, Directive, Corrective, Compensatory.',
    whyExaminerDeductsMarks: 'Reveals a failure to grasp basic control theory. A single control has both a category and a type (e.g., MFA is Technical + Preventative).',
    howToRemember: 'Categories = What is it made of (Paper, Lock, Code)? Types = When/Why does it act (Stop, Spot, Fix)?'
  },
  {
    id: 'trap-3',
    unit: 1,
    topic: 'Board of Directors Mandate',
    commonStudentMistake: 'Claiming that the Board of Directors manages operational IT projects or configures firewalls.',
    correctAcademicTruth: 'The Board is the governing body accountable for Governance (EDM). Executive management (CEO, CIO) executes management (PBRM).',
    whyExaminerDeductsMarks: 'The entire ISO/IEC 38500 and COBIT framework is predicated on separating governance oversight from operational management.',
    howToRemember: 'Board = Strategy & Governance (EDM). Executives = Management & Execution (PBRM).'
  },
  {
    id: 'trap-4',
    unit: 2,
    topic: 'COBIT Principles Sets',
    commonStudentMistake: 'Confusing the 6 Governance System Principles with the 3 Governance Framework Principles.',
    correctAcademicTruth: 'The 6 System Principles guide an enterprise in governing IT. The 3 Framework Principles (Conceptual Model, Open & Flexible, Aligned to Standards) guided ISACA in building COBIT.',
    whyExaminerDeductsMarks: 'Direct test of COBIT 2019 architecture. Conflating them proves the student did not study the 2019 update.',
    howToRemember: '6 principles for the System (your company); 3 principles for the Framework (ISACA).'
  },
  {
    id: 'trap-5',
    unit: 2,
    topic: 'COBIT Governance Domains',
    commonStudentMistake: 'Listing MEA (Monitor, Evaluate and Assess) or APO as Governance domains.',
    correctAcademicTruth: 'The COBIT Core Model has 1 Governance Domain (EDM, 5 objectives) and 4 Management Domains (APO, BAI, DSS, MEA, 35 objectives).',
    whyExaminerDeductsMarks: 'EDM is the sole governance domain. MEA is management monitoring internal controls and compliance.',
    howToRemember: 'EDM = The Only Governance Domain. The other 4 are Management.'
  },
  {
    id: 'trap-6',
    unit: 3,
    topic: 'Risk Transfer Legal Scope',
    commonStudentMistake: 'Claiming that purchasing cyber insurance or outsourcing to cloud transfers legal liability under GDPR or SOX.',
    correctAcademicTruth: 'Risk transfer only shifts financial impact. Statutory legal accountability and regulatory liability CANNOT be transferred or outsourced.',
    whyExaminerDeductsMarks: 'Fundamental legal principle: You can outsource operations, but you cannot outsource statutory accountability.',
    howToRemember: 'Insurance pays the bills; the company still takes the legal blame.'
  },
  {
    id: 'trap-7',
    unit: 3,
    topic: 'ISO Standards Certification',
    commonStudentMistake: 'Writing that an organization is "ISO 27002 certified".',
    correctAcademicTruth: 'Organizations can ONLY be certified against ISO/IEC 27001. ISO/IEC 27002 is merely an advisory code of practice and control catalogue.',
    whyExaminerDeductsMarks: 'Instant deduction on any compliance exam. 27002 contains no certifiable management clauses.',
    howToRemember: 'Certify against 27001 (the rulebook). Use 27002 as the recipe guide.'
  },
  {
    id: 'trap-8',
    unit: 3,
    topic: 'Residual Risk Zero Fallacy',
    commonStudentMistake: 'Stating that effective controls reduce residual risk to zero.',
    correctAcademicTruth: 'Zero risk is economically and practically impossible. Residual risk must be reduced to an acceptable level that falls within approved Risk Appetite.',
    whyExaminerDeductsMarks: 'Shows a naive misunderstanding of enterprise risk management. All systems retain residual risk.',
    howToRemember: 'Risk is never zero. Residual Risk must be ≤ Risk Appetite.'
  },
  {
    id: 'trap-9',
    unit: 4,
    topic: 'BSI Protection Categories',
    commonStudentMistake: 'Writing "Low, Medium, High" as the BSI protection categories.',
    correctAcademicTruth: 'BSI IT-Grundschutz recognizes ONLY three categories: Normal, High (Hoch), and Very High (Sehr Hoch). There is NO "Low" category!',
    whyExaminerDeductsMarks: 'BSI methodology specifically replaced "Low" with "Normal" to indicate that even standard baseline IT requires serious protection.',
    howToRemember: 'BSI has NO "Low". Only Normal, High, Very High.'
  },
  {
    id: 'trap-10',
    unit: 4,
    topic: 'Maximum Principle Averaging Fallacy',
    commonStudentMistake: 'Averaging protection requirements (e.g., claiming Normal + Very High = High).',
    correctAcademicTruth: 'Averaging is strictly forbidden under BSI. The Maximum Principle dictates that the host inherits the HIGHEST requirement among hosted apps.',
    whyExaminerDeductsMarks: 'Averaging under-protects the most critical application, exposing the organization to catastrophic failure.',
    howToRemember: 'Never average in BSI! The highest requirement wins (Maximum Principle).'
  },
  {
    id: 'trap-11',
    unit: 4,
    topic: 'Distribution Effect on Confidentiality',
    commonStudentMistake: 'Applying the Distribution Effect to lower Confidentiality requirements.',
    correctAcademicTruth: 'The Distribution Effect lowers Availability and Integrity through redundancy, but almost NEVER lowers Confidentiality because compromising a single node exposes the data.',
    whyExaminerDeductsMarks: 'Violates basic security architecture. Redundant server nodes duplicate confidential data, increasing rather than reducing exposure.',
    howToRemember: 'Redundancy helps Availability, NOT Confidentiality.'
  },
  {
    id: 'trap-12',
    unit: 5,
    topic: 'Incident vs Problem Misconception',
    commonStudentMistake: 'Believing Problem Management restores daily services, or that Incident Management finds root causes.',
    correctAcademicTruth: 'Incident Management restores normal service quickly using workarounds. Problem Management investigates the underlying root cause and manages known errors.',
    whyExaminerDeductsMarks: 'Confusing symptom management with root-cause elimination is the primary failure mode in ITSM.',
    howToRemember: 'Incident = Stop the bleeding fast. Problem = Cure the disease.'
  },
  {
    id: 'trap-13',
    unit: 5,
    topic: 'Organizational ITIL Certification',
    commonStudentMistake: 'Claiming an enterprise organization is "ITIL certified".',
    correctAcademicTruth: 'Organizations CANNOT be ITIL certified; ITIL only certifies individual persons. Organizations achieve certification under ISO/IEC 20000-1.',
    whyExaminerDeductsMarks: 'Shows ignorance of international certification schemes. Axelos does not offer company audits.',
    howToRemember: 'People get ITIL certified; companies get ISO 20000 certified.'
  },
  {
    id: 'trap-14',
    unit: 6,
    topic: 'Pseudonymisation vs Anonymisation Legal Status',
    commonStudentMistake: 'Assuming that pseudonymised data falls outside GDPR scope.',
    correctAcademicTruth: 'Pseudonymised data is REVERSIBLE and remains PERSONAL DATA subject to all GDPR rules. Only irreversibly ANONYMISED data falls outside GDPR.',
    whyExaminerDeductsMarks: 'Fatal compliance mistake that leads companies to massive fines. Pseudonymisation is a technical security measure, not an exit from GDPR.',
    howToRemember: 'Pseudonymisation = Still personal data (GDPR applies). Anonymisation = Outside GDPR.'
  },
  {
    id: 'trap-15',
    unit: 6,
    topic: 'GDPR Breach Notification Recipient',
    commonStudentMistake: 'Stating that the Processor notifies the Supervisory Authority within 72 hours.',
    correctAcademicTruth: 'The CONTROLLER notifies the Supervisory Authority within 72 hours. The Processor notifies the Controller without undue delay.',
    whyExaminerDeductsMarks: 'Processors have no direct mandate to report customer breaches to regulators unless acting as joint controller.',
    howToRemember: 'Processor reports to Controller -> Controller reports to DPA within 72 hours.'
  },
  {
    id: 'trap-16',
    unit: 6,
    topic: 'GDPR Maximum Fine Calculation',
    commonStudentMistake: 'Writing "whichever is lower" or citing only €20 million without the percentage.',
    correctAcademicTruth: 'Tier 2 GDPR fines are up to €20,000,000 OR 4% of total worldwide annual turnover, WHICHEVER IS GREATER.',
    whyExaminerDeductsMarks: 'For global tech giants, 4% of turnover is billions of euros, dwarfing €20 million. Writing "lower" fundamentally reverses the law.',
    howToRemember: '€20m OR 4%, WHICHEVER IS GREATER.'
  },
  {
    id: 'trap-17',
    unit: 6,
    topic: 'German Copyright Formalities',
    commonStudentMistake: 'Claiming that German Copyright (Urheberrecht) requires registration with the patent office or a © symbol.',
    correctAcademicTruth: 'Copyright arises AUTOMATICALLY upon creation of the work. No registration, application, or symbol is required.',
    whyExaminerDeductsMarks: 'Confuses Anglo-American historical copyright formalities with European continental civil law.',
    howToRemember: 'Copyright is born automatically when code is written.'
  }
];
