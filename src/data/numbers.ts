import { HighYieldNumber } from '../types';

export const highYieldNumbers: HighYieldNumber[] = [
  {
    id: 'num-1',
    number: '72 Hours',
    unit: 6,
    framework: 'EU GDPR (Art. 33)',
    label: 'Statutory Data Breach Notification',
    context: 'The mandatory timeframe within which a Data Controller must notify the competent Supervisory Authority (DPA) after becoming aware of a personal data breach.',
    examQuestionPrompt: 'Within how many hours must a personal data breach be reported to the supervisory authority under GDPR?',
    trapToAvoid: 'Do not confuse with the processor reporting duty. Processors report to the controller "without undue delay".'
  },
  {
    id: 'num-2',
    number: '€20m or 4%',
    unit: 6,
    framework: 'EU GDPR (Art. 83(5))',
    label: 'Maximum Tier 2 Administrative Fine',
    context: 'The maximum fine for severe violations (principles, data subject rights): up to €20,000,000 or 4% of total worldwide annual turnover, whichever is higher.',
    examQuestionPrompt: 'What is the maximum administrative penalty for severe infringements of the GDPR?',
    trapToAvoid: 'Never write "whichever is lower". The law mandates "whichever is greater".'
  },
  {
    id: 'num-3',
    number: '€10m or 2%',
    unit: 6,
    framework: 'EU GDPR (Art. 83(4))',
    label: 'Tier 1 Administrative Fine',
    context: 'The maximum fine for technical and operational violations (e.g. processor contracts, security of processing, record keeping): up to €10m or 2% turnover, whichever is higher.',
    examQuestionPrompt: 'What is the Tier 1 maximum penalty under GDPR Art. 83(4)?',
    trapToAvoid: 'Do not use Tier 1 limits when answering questions about core data rights or consent violations.'
  },
  {
    id: 'num-4',
    number: '14 Days',
    unit: 6,
    framework: 'German BGB (§ 312g)',
    label: 'Statutory Right of Withdrawal',
    context: 'Consumers purchasing goods or services online (distance contracts) have an unconditional statutory right to cancel within 14 calendar days.',
    examQuestionPrompt: 'How long is the consumer right of withdrawal in German e-commerce?',
    trapToAvoid: 'It is 14 calendar days, not business days. Failing to instruct the consumer extends it by 12 months.'
  },
  {
    id: 'num-5',
    number: '3 Years',
    unit: 3,
    framework: 'ISO/IEC 27001',
    label: 'ISMS Certification Validity Cycle',
    context: 'Accredited ISO/IEC 27001 certificates are valid for 3 years, requiring mandatory annual surveillance audits in Year 1 and Year 2.',
    examQuestionPrompt: 'How long is an accredited ISO 27001 certificate valid for an organization?',
    trapToAvoid: 'Do not state 1 year or 5 years. The cycle is 3 years with annual surveillance.'
  },
  {
    id: 'num-6',
    number: '10 Years',
    unit: 6,
    framework: 'German Gebrauchsmustergesetz',
    label: 'Utility Model Maximum Protection',
    context: 'The maximum duration of protection for a German Utility Model (Gebrauchsmuster, or "petty patent") for technical inventions.',
    examQuestionPrompt: 'What is the maximum duration of protection for a German Utility Model?',
    trapToAvoid: 'Do not confuse with Patents (20 years) or Copyright (70 years post-mortem).'
  },
  {
    id: 'num-7',
    number: '20 Years',
    unit: 6,
    framework: 'Patent Law (PatG / EPC)',
    label: 'Patent Protection Duration',
    context: 'The statutory term of protection for a technical patent, running from the date of the formal patent application filing.',
    examQuestionPrompt: 'What is the statutory duration of patent protection from the application filing date?',
    trapToAvoid: 'Patent protection does not run from the grant date, but from the official filing date.'
  },
  {
    id: 'num-8',
    number: '70 Years',
    unit: 6,
    framework: 'Urheberrecht (UrhG / EU)',
    label: 'Copyright Post-Mortem Duration',
    context: 'Copyright protection over creative works and software source code lasts for the life of the author plus 70 years after their death (post mortem auctoris).',
    examQuestionPrompt: 'How long does copyright protect software and creative works in Germany and the EU?',
    trapToAvoid: 'Copyright does not expire 70 years after publication; it is 70 years after the creator dies.'
  },
  {
    id: 'num-9',
    number: '40',
    unit: 2,
    framework: 'COBIT 2019 Core Model',
    label: 'Governance & Management Objectives',
    context: 'The total number of objectives in the COBIT 2019 Core Model: 5 EDM + 14 APO + 11 BAI + 6 DSS + 4 MEA = 40.',
    examQuestionPrompt: 'How many total Governance and Management Objectives exist in the COBIT 2019 Core Model?',
    trapToAvoid: 'Do not cite 37 (which was the number in COBIT 5). COBIT 2019 has 40.'
  },
  {
    id: 'num-10',
    number: '5 Domains',
    unit: 2,
    framework: 'COBIT 2019 Core Model',
    label: '1 Governance + 4 Management Domains',
    context: 'The five domains: EDM (Evaluate, Direct, Monitor - 5), APO (14), BAI (11), DSS (6), MEA (4).',
    examQuestionPrompt: 'Name the five domains of COBIT 2019 and classify them into governance and management.',
    trapToAvoid: 'Only EDM is a governance domain. The other four are management domains.'
  },
  {
    id: 'num-11',
    number: '34',
    unit: 5,
    framework: 'ITIL V4',
    label: 'Total Management Practices',
    context: 'ITIL V4 organizes service management into 34 practices: 14 General Management, 17 Service Management, and 3 Technical Management.',
    examQuestionPrompt: 'How many management practices are defined in ITIL V4 and how are they categorized?',
    trapToAvoid: 'Do not confuse ITIL practices with the 26 processes of ITIL v3.'
  },
  {
    id: 'num-12',
    number: '6 Activities',
    unit: 5,
    framework: 'ITIL V4 Service Value Chain',
    label: 'Service Value Chain Operating Model',
    context: 'The six core activities of the Service Value Chain: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support (PIEDOD).',
    examQuestionPrompt: 'List the six activities of the ITIL V4 Service Value Chain.',
    trapToAvoid: 'Do not omit Obtain/Build or confuse with the 5 SVS macro elements.'
  },
  {
    id: 'num-13',
    number: '4 Dimensions',
    unit: 5,
    framework: 'ITIL V4',
    label: 'Four Dimensions of Service Management',
    context: 'The four perspectives: Organizations and People, Information and Technology, Partners and Suppliers, Value Streams and Processes.',
    examQuestionPrompt: 'What are the Four Dimensions of Service Management in ITIL V4?',
    trapToAvoid: 'Do not substitute external concepts like "Security" or "Financial" for the four formal dimensions.'
  },
  {
    id: 'num-14',
    number: '7 Principles',
    unit: 5,
    framework: 'ITIL V4',
    label: 'ITIL Guiding Principles',
    context: 'Focus on value, Start where you are, Progress iteratively, Collaborate, Think holistically, Keep simple, Optimize & automate.',
    examQuestionPrompt: 'How many Guiding Principles exist in ITIL V4?',
    trapToAvoid: 'Do not confuse with the 6 Governance System Principles of COBIT 2019.'
  },
  {
    id: 'num-15',
    number: '7 Components',
    unit: 2,
    framework: 'COBIT 2019',
    label: 'Governance System Components',
    context: 'Processes, Org Structures, Policies/Principles, Information, Culture/Ethics, People/Skills, Services/Infrastructure.',
    examQuestionPrompt: 'How many Governance System Components are defined in COBIT 2019?',
    trapToAvoid: 'These were called "Enablers" in COBIT 5, now officially termed "Components".'
  },
  {
    id: 'num-16',
    number: '11 Factors',
    unit: 2,
    framework: 'COBIT 2019',
    label: 'Governance Design Factors',
    context: 'The 11 context factors used to tailor an enterprise governance system (strategy, risk, threats, role of IT, size, etc.).',
    examQuestionPrompt: 'How many Design Factors does COBIT 2019 provide for customizing a governance system?',
    trapToAvoid: 'Do not confuse Design Factors (11) with Governance Components (7).'
  },
  {
    id: 'num-17',
    number: '0 to 5',
    unit: 2,
    framework: 'COBIT 2019 / CMMI',
    label: 'Process Capability Levels',
    context: 'Level 0 (Incomplete), Level 1 (Initial), Level 2 (Managed), Level 3 (Defined), Level 4 (Quantitatively Managed), Level 5 (Optimizing).',
    examQuestionPrompt: 'What is the scale of process capability levels used in COBIT 2019?',
    trapToAvoid: 'The scale starts at 0 (Incomplete), NOT at 1.'
  },
  {
    id: 'num-18',
    number: '3 Categories',
    unit: 4,
    framework: 'BSI IT-Grundschutz',
    label: 'Protection Requirement Categories',
    context: 'Normal, High (Hoch), and Very High (Sehr Hoch) across the CIA triad.',
    examQuestionPrompt: 'What are the three protection requirement categories in BSI IT-Grundschutz?',
    trapToAvoid: 'There is NO "Low" category in BSI IT-Grundschutz.'
  },
  {
    id: 'num-19',
    number: '6 Steps',
    unit: 4,
    framework: 'BSI Standard 200-2',
    label: 'IT-Grundschutz Implementation Workflow',
    context: '1. Structural Analysis -> 2. Protection Requirements -> 3. Modelling -> 4. IT-Grundschutz Check -> 5. Supplementary Risk Analysis -> 6. Implementation.',
    examQuestionPrompt: 'How many sequential steps form the BSI IT-Grundschutz methodology?',
    trapToAvoid: 'Soll-Ist-Vergleich is performed during Step 4 (IT-Grundschutz Check).'
  },
  {
    id: 'num-20',
    number: '20 Persons',
    unit: 6,
    framework: 'German BDSG (§ 38)',
    label: 'Statutory DPO Appointment Threshold',
    context: 'In Germany, an enterprise must designate a Data Protection Officer if it permanently employs at least 20 persons in automated data processing.',
    examQuestionPrompt: 'What is the employee threshold for mandatory DPO designation under German BDSG § 38?',
    trapToAvoid: 'The statutory threshold is 20 persons (raised from the old 10 persons threshold).'
  }
];
