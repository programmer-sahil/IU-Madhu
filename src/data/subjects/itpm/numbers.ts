import { HighYieldNumber } from '../../../types';

export const itpmNumbers: HighYieldNumber[] = [
  // --- Unit 1 Numbers ---
  {
    id: 'itpm-num-001',
    number: '3',
    unit: 1,
    framework: 'Iron Triangle',
    label: 'Classical Constraints (Triple Constraint)',
    context: 'The traditional project management triangle consisting of Scope, Schedule (Time), and Cost.',
    examQuestionPrompt: 'Which three constraints constitute the classical Iron Triangle of project management?',
    trapToAvoid: 'Do not substitute Quality or Risk into the classical triangle; in the classical model, Quality is treated as an outcome of balancing these three.'
  },
  {
    id: 'itpm-num-002',
    number: '5',
    unit: 1,
    framework: 'Quintuple Constraints',
    label: 'IU Course Book Extended Constraints',
    context: 'The five specific project constraints recognized in the IU Course Book (Figure 3): Schedule, Cost, Context, Technical, and Financing.',
    examQuestionPrompt: 'What are the five dimensions of the Quintuple Constraints framework in the official course book?',
    trapToAvoid: 'Do not list general PMBOK constraints. The course book explicitly defines: Schedule, Cost, Context, Technical, and Financing.'
  },
  {
    id: 'itpm-num-003',
    number: '3',
    unit: 1,
    framework: 'Information Architecture',
    label: 'Levels of Organizational Information Needs',
    context: 'The three organizational tiers of information served by IT systems: Operational level, Management knowledge level, and Executive level.',
    examQuestionPrompt: 'Which three levels of information needs must enterprise IT systems fulfill across an organization?',
    trapToAvoid: 'Do not confuse operational transactional data with high-level executive strategic synthesis.'
  },
  {
    id: 'itpm-num-004',
    number: '5',
    unit: 1,
    framework: 'Stakeholder Classification',
    label: 'External Stakeholder Categories',
    context: 'The five external stakeholder groups identified in the course book: Customers, Suppliers, Collaborators/Business Partners, Governments, and Regulators.',
    examQuestionPrompt: 'Name the five external stakeholder categories that influence IT project outcomes.',
    trapToAvoid: 'External stakeholders cannot be managed through internal line management; they require negotiation, compliance, and relationship management.'
  },
  {
    id: 'itpm-num-005',
    number: '5',
    unit: 1,
    framework: 'Project Lifecycle',
    label: 'Generic Project Phases',
    context: 'The five generic sequential and overlapping phases: Initiation, Planning, Launch/Execution, Monitor & Control, and Termination/Closure.',
    examQuestionPrompt: 'What are the five phases of the generic project lifecycle?',
    trapToAvoid: 'Monitor & Control is NOT an isolated late phase; it runs concurrently with Execution.'
  },
  {
    id: 'itpm-num-006',
    number: '4',
    unit: 1,
    framework: 'PM Role Profile',
    label: 'Core Project Manager Roles Across Lifecycle',
    context: 'The four sequential roles an IT PM assumes: Initiator (concept), Planner (decomposition), Implementer (execution), and Controller (monitoring & variance management).',
    examQuestionPrompt: 'Which four roles characterize the evolving responsibilities of an IT project manager throughout the lifecycle?',
    trapToAvoid: 'A PM is not merely a technical lead; they must transition from visionary Initiator to rigorous Controller.'
  },
  {
    id: 'itpm-num-007',
    number: '4',
    unit: 1,
    framework: 'Risk Lifecycle',
    label: 'Four-Step Risk Management Process (I-A-D-M)',
    context: 'The systematic cycle: Identify risks -> Assess (Probability × Impact) -> Develop response -> Monitor and review.',
    examQuestionPrompt: 'What are the four systematic stages in the IT project risk management process?',
    trapToAvoid: 'Risk assessment is not a one-time event during initiation; it must be continuously monitored.'
  },
  {
    id: 'itpm-num-008',
    number: '4',
    unit: 1,
    framework: 'Risk Response',
    label: 'Canonical Risk Response Strategies (M-A-T-A)',
    context: 'The four formal responses to threats: Mitigate (reduce likelihood/impact), Accept (acknowledge and retain), Transfer (insurance/vendor SLA), Avoid (eliminate cause).',
    examQuestionPrompt: 'What are the four classic risk treatment strategies for project threats?',
    trapToAvoid: 'Transfer does NOT eliminate the risk; it transfers financial accountability or management responsibility.'
  },

  // --- Unit 2 Numbers ---
  {
    id: 'itpm-num-009',
    number: '4',
    unit: 2,
    framework: 'WBS Architecture',
    label: 'Conceptual Levels in WBS Decomposition',
    context: 'Level 1: Overall Project -> Level 2: Project Subsystems/Phases -> Level 3: Work Packages -> Level 4: Elementary Tasks.',
    examQuestionPrompt: 'What are the four typical hierarchical levels in a Work Breakdown Structure decomposition?',
    trapToAvoid: 'Work Packages are intermediate manageable groupings; elementary tasks are at the lowest executable level.'
  },
  {
    id: 'itpm-num-010',
    number: '100%',
    unit: 2,
    framework: 'WBS Integrity',
    label: 'The 100% Rule',
    context: 'The fundamental rule that subordinate elements at each level must represent exactly 100% of parent scope—nothing omitted, nothing extra (prevents gold plating).',
    examQuestionPrompt: 'State the core principle of the 100% Rule in WBS construction.',
    trapToAvoid: 'If work is not captured in the WBS, it is out of scope and cannot be budgeted or scheduled.'
  },
  {
    id: 'itpm-num-011',
    number: '0',
    unit: 2,
    framework: 'Time Planning & Scheduling',
    label: 'Milestone Duration & Critical Path Slack',
    context: 'A milestone strictly has ZERO duration (Duration = 0); similarly, all activities on the Critical Path have exactly ZERO slack (Float = 0).',
    examQuestionPrompt: 'What is the duration of a project milestone, and what is the slack of an activity on the critical path?',
    trapToAvoid: 'A milestone consumes zero time and resources. If an item takes 2 days to perform, it is an activity or quality gate, NOT a milestone.'
  },
  {
    id: 'itpm-num-012',
    number: '3',
    unit: 2,
    framework: 'Kano Model',
    label: 'Three Core Kano Requirement Categories',
    context: 'Basic (Must-Be requirements taken for granted), Performance (Linear satisfaction proportional to execution), and Delighters (Unexpected attractive features).',
    examQuestionPrompt: 'Name the three primary requirement categories in the Kano customer satisfaction model.',
    trapToAvoid: 'Absence of Delighters causes ZERO customer dissatisfaction, while absence of Basic requirements causes severe outrage.'
  },
  {
    id: 'itpm-num-013',
    number: '1994',
    unit: 2,
    framework: 'MoSCoW Prioritization',
    label: 'Year MoSCoW Was Created by Dai Clegg (Oracle UK)',
    context: 'Dai Clegg invented MoSCoW at Oracle UK in 1994 to facilitate rapid qualitative timeboxed release scoping using clear linguistic categories.',
    examQuestionPrompt: 'Who developed the MoSCoW prioritization technique and in what year?',
    trapToAvoid: 'MoSCoW was not developed by PMI, Noriaki Kano, or Henry Gantt; it was created by Dai Clegg of Oracle UK in 1994.'
  },
  {
    id: 'itpm-num-014',
    number: '4',
    unit: 2,
    framework: 'MoSCoW Method',
    label: 'Four MoSCoW Priority Categories',
    context: 'Must-have (non-negotiable for current release), Should-have (important but workarounds exist), Could-have (desirable if time permits), Won\'t-have (deferred to future).',
    examQuestionPrompt: 'What do the four letters in MoSCoW stand for and what is the sacrifice rule under schedule pressure?',
    trapToAvoid: 'Under schedule pressure, always drop Could-haves first, then Should-haves. NEVER drop Must-haves.'
  },
  {
    id: 'itpm-num-015',
    number: '4',
    unit: 2,
    framework: 'Precedence Network',
    label: 'Four Logical Precedence Dependency Types',
    context: 'Finish-to-Start (FS - most common default), Start-to-Start (SS - concurrent initiation), Finish-to-Finish (FF - joint completion), Start-to-Finish (SF - rarest).',
    examQuestionPrompt: 'Identify the four logical dependency relationships in activity network diagramming.',
    trapToAvoid: 'FS is the standard default; SF is the rarest (legacy retirement upon new system launch).'
  },
  {
    id: 'itpm-num-016',
    number: '5',
    unit: 2,
    framework: 'ISO/IEC 25010',
    label: 'Quality-in-Use Characteristics (S-E-F-E-C)',
    context: 'The five characteristics of Quality-in-Use: Satisfaction, Effectiveness, Freedom from risk, Efficiency, and Context coverage.',
    examQuestionPrompt: 'Enumerate the five characteristics comprising the ISO/IEC 25010 Quality-in-Use model.',
    trapToAvoid: 'Do not confuse the 5 Quality-in-Use characteristics with the 8 Product Quality characteristics.'
  },
  {
    id: 'itpm-num-017',
    number: '8',
    unit: 2,
    framework: 'ISO/IEC 25010',
    label: 'Product Quality Characteristics (F-P-U-R-S-C-P-M)',
    context: 'The eight internal/external product software characteristics: Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, and Maintainability.',
    examQuestionPrompt: 'List the eight product quality characteristics defined in the ISO/IEC 25010 standard.',
    trapToAvoid: 'Security and Usability are Product Quality characteristics, while Satisfaction and Freedom from Risk belong to Quality-in-Use.'
  },
  {
    id: 'itpm-num-018',
    number: '2',
    unit: 2,
    framework: 'Quality Gates (Kneuper 2018)',
    label: 'Essential Quality Gate Components',
    context: 'According to Ralf Kneuper (2018), a formal Quality Gate consists of two mandatory elements: (1) Deliverables definition, and (2) Formal review issuing Go/No-Go decisions.',
    examQuestionPrompt: 'What two constituent elements define a Quality Gate according to Kneuper (2018)?',
    trapToAvoid: 'A Quality Gate is not just an informal checkpoint; it requires predefined deliverable criteria and an authorized formal Go/No-Go decision.'
  }
,
  // --- Unit 3 Numbers ---
  {
    id: 'itpm-num-019',
    number: '9',
    unit: 3,
    framework: 'A-C-C-P-R-D-U-V-V',
    label: 'Quality Attributes of a Defensible Cost Estimate',
    context: 'Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.',
    examQuestionPrompt: 'Which nine attributes define the quality of a cost estimate according to Unit 3?',
    trapToAvoid: 'Do not confuse Precision (granularity/decimals) with Accuracy (closeness to real cost).'
  },
  {
    id: 'itpm-num-020',
    number: '5',
    unit: 3,
    framework: 'FPA',
    label: 'Function Point Analysis Elementary Function Types',
    context: 'Inputs, Outputs, Inquiries (Transaction functions) and Interfaces, Files (Data functions). Memory aid: I-O-Q-I-F.',
    examQuestionPrompt: 'What are the five elementary function types classified in Function Point Analysis?',
    trapToAvoid: 'Inputs and Inquiries share 2/4/6 weights, while Outputs have 3/5/7 weights.'
  },
  {
    id: 'itpm-num-021',
    number: '0.65',
    unit: 3,
    framework: 'FPA',
    label: 'CAF Baseline Constant',
    context: 'Complexity Adjustment Factor formula: CAF = 0.01 * TDI + 0.65. With TDI=34, CAF = 0.99.',
    examQuestionPrompt: 'What is the baseline constant in the Complexity Adjustment Factor (CAF) equation?',
    trapToAvoid: 'Do not forget to multiply Total Degree of Influence (TDI) by 0.01 before adding 0.65.'
  },
  {
    id: 'itpm-num-022',
    number: '4',
    unit: 3,
    framework: 'EVM',
    label: 'Core Variance and Performance Index Formulas',
    context: 'SV = EV - PV, CV = EV - AC, CPI = EV / AC, SPI = EV / PV. EV always leads.',
    examQuestionPrompt: 'State the four foundational Earned Value Management formulas for variance and efficiency.',
    trapToAvoid: 'VALUE FIRST: EV always leads (EV - PV, EV - AC). Never subtract EV from PV or AC.'
  },
  {
    id: 'itpm-num-023',
    number: '25/75',
    unit: 3,
    framework: 'EVM',
    label: 'Earned Value Crediting Rule for Software Work',
    context: '25% credited at start/preparation, 75% credited upon completion when continuous measurement is difficult.',
    examQuestionPrompt: 'What EVM crediting rule is recommended when intellectual work progress is hard to measure continuously?',
    trapToAvoid: 'It is 25% at initiation and 75% at completion, NOT 50/50.'
  },
  {
    id: 'itpm-num-024',
    number: '4',
    unit: 3,
    framework: 'Risk Management',
    label: 'Continuous Risk Management Functions (I-A-M-M)',
    context: 'Identify, Assess, Mitigate, Monitor.',
    examQuestionPrompt: 'Which four continuous functions make up the IT risk management cycle?',
    trapToAvoid: 'I-A-M-M is the 4-step process; M-A-T-A (Mitigate, Avoid, Transfer, Accept) are the 4 treatment choices.'
  },
  {
    id: 'itpm-num-025',
    number: '4',
    unit: 3,
    framework: 'Risk Treatment',
    label: 'Risk Response Strategies (M-A-T-A)',
    context: 'Avoid, Mitigate, Transfer, Accept.',
    examQuestionPrompt: 'Enumerate the four standard risk treatment strategies in IT projects.',
    trapToAvoid: 'Do not confuse Mitigate (the treatment) with the overarching Risk Management lifecycle.'
  },
  {
    id: 'itpm-num-026',
    number: '5',
    unit: 3,
    framework: 'Risk Maturity',
    label: 'Organizational Risk Maturity Levels (A-A-O-M-A)',
    context: 'Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.',
    examQuestionPrompt: 'Identify the five levels of IT risk management organizational maturity.',
    trapToAvoid: 'Level 1 is Ad hoc; Level 2 is Abbreviated (not Absent); Level 5 is Adaptive.'
  },

  // --- Unit 4 Numbers ---
  {
    id: 'itpm-num-027',
    number: '3',
    unit: 4,
    framework: 'Vision Keeping',
    label: 'Strategic Alignment Hierarchy Levels',
    context: 'Vision ("Where we want to be"), Mission ("What we do and why"), Strategy ("How we get there").',
    examQuestionPrompt: 'What three hierarchical levels link long-term organizational transformation to tactical execution?',
    trapToAvoid: 'Vision is the future destination; Mission is current purpose; Strategy is the roadmap.'
  },
  {
    id: 'itpm-num-028',
    number: '4',
    unit: 4,
    framework: 'Competing Values',
    label: 'Structural Project Culture Archetypes',
    context: 'Clan (internal/flex), Adhocracy (external/flex), Hierarchy (internal/control), Market (external/control).',
    examQuestionPrompt: 'Name the four culture quadrants of the Competing Values Framework.',
    trapToAvoid: 'Clan is internal/flexible; Adhocracy is external/flexible. Both value flexibility.'
  },
  {
    id: 'itpm-num-029',
    number: '4',
    unit: 4,
    framework: 'Power-Interest Grid',
    label: 'Stakeholder Prioritization Quadrants',
    context: 'Manage Closely (High/High), Keep Satisfied (High Power/Low Interest), Keep Informed (Low Power/High Interest), Monitor (Low/Low).',
    examQuestionPrompt: 'State the management strategy for all four quadrants of the Power-Interest Grid.',
    trapToAvoid: 'High Power / Low Interest is Keep Satisfied, NOT Keep Informed.'
  },
  {
    id: 'itpm-num-030',
    number: '3',
    unit: 4,
    framework: 'Salience Model',
    label: 'Mitchell, Agle & Wood Stakeholder Dimensions',
    context: 'Power (ability to impose will), Legitimacy (moral/legal claim), Urgency (time-sensitivity).',
    examQuestionPrompt: 'Which three attributes determine stakeholder salience in the Mitchell, Agle & Wood model?',
    trapToAvoid: 'The attributes are Power, Legitimacy, Urgency. Interest is NOT one of the salience dimensions.'
  },
  {
    id: 'itpm-num-031',
    number: '7',
    unit: 4,
    framework: 'Salience Model',
    label: 'Stakeholder Salience Classes',
    context: 'Latent (Dormant, Discretionary, Demanding), Expectant (Dominant, Dangerous, Dependent), Definite (all 3).',
    examQuestionPrompt: 'How many stakeholder categories are produced by combinations of the three salience attributes?',
    trapToAvoid: 'A Dangerous stakeholder has Power + Urgency but lacks Legitimacy.'
  },
  {
    id: 'itpm-num-032',
    number: '1',
    unit: 4,
    framework: 'RACI Governance',
    label: 'Maximum Accountable Persons per Work Package',
    context: 'Exactly ONE person must be Accountable (A) for any given activity to prevent diffusion of responsibility.',
    examQuestionPrompt: 'How many individuals can be designated as Accountable for a single deliverable in a RACI chart?',
    trapToAvoid: 'Multiple people can be Responsible, but exactly ONE person must be Accountable.'
  },
  {
    id: 'itpm-num-033',
    number: '5',
    unit: 4,
    framework: 'Stakeholder Engagement',
    label: 'Stakeholder Engagement Spectrum Levels',
    context: 'Unaware, Resistant, Neutral, Supportive, Leading.',
    examQuestionPrompt: 'List the five stakeholder engagement levels evaluated in the assessment matrix.',
    trapToAvoid: 'The order is Unaware -> Resistant -> Neutral -> Supportive -> Leading.'
  },
  {
    id: 'itpm-num-034',
    number: '5',
    unit: 4,
    framework: 'Conflict Management',
    label: 'Conflict-Resolution Techniques',
    context: 'Collaborate (Win-Win), Compromise (Give-and-Take), Force (Win-Lose), Smooth (Lose-Win), Withdraw (No Resolution).',
    examQuestionPrompt: 'Identify the five conflict-handling styles based on assertiveness and cooperativeness.',
    trapToAvoid: 'Compromise is NOT a win-win; it is a give-and-take involving mutual loss. Collaborate is the true win-win.'
  },
  {
    id: 'itpm-num-035',
    number: '4',
    unit: 4,
    framework: 'Negotiation Spiral',
    label: 'Dynamic Phases of Project Negotiation',
    context: 'Intelligence -> Perception -> Strategy -> Communication (I-P-S-C).',
    examQuestionPrompt: 'Name the four phases of the negotiation spiral in IT projects.',
    trapToAvoid: 'Negotiation starts with Intelligence (fact gathering), NOT Communication.'
  },
  // --- Unit 5 Numbers ---
  {
    id: 'itpm-num-036',
    number: '4',
    unit: 5,
    framework: 'RUP Lifecycle',
    label: 'Core Development Phases of RUP',
    context: 'Inception, Elaboration, Construction, Transition (I-E-C-T).',
    examQuestionPrompt: 'Which four sequential phases structure the core lifecycle of RUP?',
    trapToAvoid: 'Elaboration strictly precedes Construction. Architecture baseline is proven in Elaboration.'
  },
  {
    id: 'itpm-num-037',
    number: '2',
    unit: 5,
    framework: 'Unified Process Lifecycle',
    label: 'Optional Post-Transition Lifecycle Phases',
    context: 'Production (system maintenance and monitoring) and Disposal (system decommissioning and migration).',
    examQuestionPrompt: 'What are the two optional post-transition phases in extended Unified Process frameworks?',
    trapToAvoid: 'RUP has 4 core development phases PLUS 2 optional lifecycle phases.'
  },
  {
    id: 'itpm-num-038',
    number: '6',
    unit: 5,
    framework: 'RUP Disciplines',
    label: 'Core Engineering Disciplines in RUP',
    context: 'Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment.',
    examQuestionPrompt: 'Name the six core engineering disciplines in the RUP framework.',
    trapToAvoid: 'Disciplines run concurrently across all phases with shifting workload peaks; they are not sequential stages.'
  },
  {
    id: 'itpm-num-039',
    number: '4',
    unit: 5,
    framework: 'Agile Manifesto',
    label: 'Core Foundational Values',
    context: 'Individuals & interactions > processes/tools; Working software > comprehensive documentation; Customer collaboration > contract negotiation; Responding to change > following a plan.',
    examQuestionPrompt: 'State the four core values of the 2001 Agile Manifesto.',
    trapToAvoid: 'Items on the left are valued MORE than items on the right. Right-hand items still hold value.'
  },
  {
    id: 'itpm-num-040',
    number: '12',
    unit: 5,
    framework: 'Agile Principles',
    label: 'Supporting Principles of the Agile Manifesto',
    context: 'The 12 principles covering early delivery, welcoming change, sustainable pace, motivated teams, simplicity, and self-organization.',
    examQuestionPrompt: 'How many principles support the Agile Manifesto?',
    trapToAvoid: 'Principle 10 defines simplicity as maximizing the amount of work NOT done.'
  },
  {
    id: 'itpm-num-041',
    number: '4',
    unit: 5,
    framework: 'Software Versioning',
    label: 'Semantic Release Versioning Format',
    context: 'major.minor.build.revision (e.g. 4.2.5.9).',
    examQuestionPrompt: 'What standard four-part scheme is used for software release versioning?',
    trapToAvoid: 'The order is Build (compilation sequence) then Revision (bugfix/patch).'
  },
  {
    id: 'itpm-num-042',
    number: '3',
    unit: 5,
    framework: 'Scrum Theory',
    label: 'Empirical Process Control Pillars',
    context: 'Transparency, Inspection, Adaptation.',
    examQuestionPrompt: 'What are the three pillars upholding empirical process control in Scrum?',
    trapToAvoid: 'Do not confuse the 3 empirical pillars with the 5 Scrum values.'
  },
  {
    id: 'itpm-num-043',
    number: '5',
    unit: 5,
    framework: 'Scrum Culture',
    label: 'Foundational Scrum Values',
    context: 'Commitment, Courage, Focus, Openness, Respect (C-C-F-O-R).',
    examQuestionPrompt: 'List the five core values that underpin human behavior in Scrum.',
    trapToAvoid: 'Efficiency and Speed are business goals, NOT Scrum core values.'
  },
  {
    id: 'itpm-num-044',
    number: '3',
    unit: 5,
    framework: 'Scrum Governance',
    label: 'Defined Scrum Roles (Accountabilities)',
    context: 'Product Owner, Scrum Master, Developers. There is NO Project Manager in Scrum!',
    examQuestionPrompt: 'Which three roles constitute the entire Scrum Team?',
    trapToAvoid: 'Scrum has NO Project Manager. Any option featuring Project Manager as a formal Scrum role is incorrect.'
  },
  {
    id: 'itpm-num-045',
    number: '5 to 9',
    unit: 5,
    framework: 'Scrum Team Structure',
    label: 'Optimal Development Team Sizing',
    context: 'Typically 5 to 9 cross-functional team members.',
    examQuestionPrompt: 'What is the recommended size range for a development team in Scrum?',
    trapToAvoid: '5 to 9 is the classic course book guideline for optimal communication without scaling overhead.'
  },
  {
    id: 'itpm-num-046',
    number: '15 minutes',
    unit: 5,
    framework: 'Scrum Ceremonies',
    label: 'Daily Scrum Time-Box',
    context: 'Strictly 15 minutes daily standup for Developers.',
    examQuestionPrompt: 'What is the strict time-box for the Daily Scrum meeting?',
    trapToAvoid: 'It is strictly 15 minutes. It is a peer synchronization meeting, NOT a management status report.'
  },
  {
    id: 'itpm-num-047',
    number: '<= 1 month',
    unit: 5,
    framework: 'Scrum Time-Boxing',
    label: 'Sprint Duration Limit',
    context: 'Sprints are fixed at 1 month or less (typically 2 weeks). Time-box is NEVER extended if work is unfinished.',
    examQuestionPrompt: 'What is the maximum duration for a Scrum Sprint, and can it be extended for unfinished work?',
    trapToAvoid: 'Never extend a sprint! Unfinished work returns to the Product Backlog.'
  },
  {
    id: 'itpm-num-048',
    number: '4',
    unit: 5,
    framework: 'V-Model',
    label: 'Horizontal Verification Traceability Pairs',
    context: 'Requirements/Acceptance, Design/System, Architecture/Integration, Module/Unit.',
    examQuestionPrompt: 'Name the four horizontal traceability pairings linking specifications to test levels in the V-Model.',
    trapToAvoid: 'Test design occurs early on the left arm concurrently with specification, before coding at vertex.'
  },

  // --- Unit 6 Numbers ---
  {
    id: 'itpm-num-049',
    number: '47',
    unit: 6,
    framework: 'PMBOK Guide',
    label: 'Total Discrete Processes',
    context: 'Distributed across 5 Process Groups and 10 Knowledge Areas in the official course book matrix (Figs 42 & 43).',
    examQuestionPrompt: 'How many total processes are defined in the PMBOK Guide matrix in the course book?',
    trapToAvoid: 'Memorize the exact number: 47 processes.'
  },
  {
    id: 'itpm-num-050',
    number: '2-24-8-11-2',
    unit: 6,
    framework: 'PMBOK Distribution',
    label: 'Process Distribution Across 5 Process Groups',
    context: 'Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2).',
    examQuestionPrompt: 'Detail the process count distribution across the 5 PMBOK Process Groups.',
    trapToAvoid: 'Planning contains 24 processes—over half of all PMBOK processes.'
  },
  {
    id: 'itpm-num-051',
    number: '10',
    unit: 6,
    framework: 'PMBOK Knowledge',
    label: 'PMBOK Knowledge Areas',
    context: 'Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder.',
    examQuestionPrompt: 'How many Knowledge Areas are established in the PMBOK Guide?',
    trapToAvoid: 'Stakeholder is independent of Communications.'
  },
  {
    id: 'itpm-num-052',
    number: '7-7-7',
    unit: 6,
    framework: 'PRINCE2 Architecture',
    label: 'Core Structural Elements of PRINCE2',
    context: '7 Principles, 7 Themes, and 7 Processes.',
    examQuestionPrompt: 'What is the signature 7-7-7 structural architecture of PRINCE2?',
    trapToAvoid: 'Principles are mandatory rules; Themes are management aspects; Processes are lifecycle flow.'
  },
  {
    id: 'itpm-num-053',
    number: '4',
    unit: 6,
    framework: 'PRINCE2 Governance',
    label: 'PRINCE2 Management Levels',
    context: 'Corporate/Programme Management, Project Board (Directing), Project Manager (Managing), Team Managers (Delivering).',
    examQuestionPrompt: 'List the four management levels in the PRINCE2 organizational hierarchy.',
    trapToAvoid: 'The Project Manager is NOT on the Project Board; the PM reports TO the Board.'
  },
  {
    id: 'itpm-num-054',
    number: '3',
    unit: 6,
    framework: 'PRINCE2 Directing',
    label: 'Project Board Triad Interests',
    context: 'Executive (Business/Funding/Accountable), Senior User (User needs & benefits), Senior Supplier (Technical delivery & resources).',
    examQuestionPrompt: 'Which three stakeholder interests are represented on the PRINCE2 Project Board?',
    trapToAvoid: 'The Executive owns the Business Case and holds ultimate accountability.'
  },
  {
    id: 'itpm-num-055',
    number: '6',
    unit: 6,
    framework: 'PRINCE2 Tolerances',
    label: 'Manage by Exception Tolerance Variables',
    context: 'Time, Cost, Quality, Scope, Risk, Benefits.',
    examQuestionPrompt: 'Across which six variables are tolerances set under PRINCE2 Manage by Exception?',
    trapToAvoid: 'Memory aid: T-C-Q-S-R-B. Tolerances define the PM autonomous boundary.'
  },
  {
    id: 'itpm-num-056',
    number: '3',
    unit: 6,
    framework: 'Multi-Project PMO',
    label: 'PMO Structural Control Models',
    context: 'Supportive (Low control, consultative), Controlling (Moderate control, compliance auditing), Directive (High control, PMs report to PMO).',
    examQuestionPrompt: 'Identify the three types of PMO categorized by their degree of authority and control.',
    trapToAvoid: 'Supportive = Low; Controlling = Moderate; Directive = High.'
  },
  {
    id: 'itpm-num-057',
    number: '4',
    unit: 6,
    framework: 'Scaled Agile',
    label: 'Scrum of Scrums (SoS) Guiding Questions',
    context: 'Adds Question 4: "Are you putting any impediment in the way of other teams?" to surface cross-team impacts.',
    examQuestionPrompt: 'How many questions are addressed in Scrum of Scrums and what is the unique fourth question?',
    trapToAvoid: 'SoS has 4 questions, specifically focusing on cross-team dependencies.'
  },
  {
    id: 'itpm-num-058',
    number: '8',
    unit: 6,
    framework: 'Scaled Agile',
    label: 'Basic LeSS Maximum Feature Teams',
    context: 'Up to 8 feature teams (50-70 developers) supported by 1 single Product Owner and 1 shared Product Backlog.',
    examQuestionPrompt: 'What is the maximum number of feature teams supported by Basic Large-Scale Scrum (LeSS)?',
    trapToAvoid: 'Beyond 8 teams, LeSS Huge introduces Area Product Owners (APOs).'
  },
  {
    id: 'itpm-num-059',
    number: '50 to 125',
    unit: 6,
    framework: 'SAFe',
    label: 'Agile Release Train (ART) Headcount',
    context: 'A synchronized team-of-teams of 50 to 125 people delivering value on a cadence.',
    examQuestionPrompt: 'What is the typical headcount range for an Agile Release Train in SAFe?',
    trapToAvoid: 'Headcount range is officially 50 to 125 people.'
  },
  {
    id: 'itpm-num-060',
    number: '5',
    unit: 6,
    framework: 'SAFe DevOps',
    label: 'CALMR Mindset Elements',
    context: 'Culture, Automation, Lean Flow, Measurement, Recovery.',
    examQuestionPrompt: 'What are the five components of the CALMR DevOps model in SAFe?',
    trapToAvoid: 'Memorize verbatim: Culture, Automation, Lean Flow, Measurement, Recovery.'
  }
];
