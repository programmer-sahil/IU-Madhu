import json, re

# 1. Update registry.ts for itpm unit 3 and 4
reg_path = "src/data/subjects/registry.ts"
with open(reg_path, "r") as f:
    reg_content = f.read()

# Replace status: 'coming-soon' for Unit 3 and Unit 4 under itProjectManagementConfig
itpm_pos = reg_content.find("itProjectManagementConfig")
itpm_part = reg_content[itpm_pos:]

# Replace Unit 3 status
unit3_old = re.search(r"(id:\s*3,\s*\n\s*number:\s*3,[\s\S]*?status:\s*)'coming-soon'", itpm_part)
if unit3_old:
    itpm_part = itpm_part[:unit3_old.start(1)] + unit3_old.group(1) + "'active'" + itpm_part[unit3_old.end():]

# Replace Unit 4 status
unit4_old = re.search(r"(id:\s*4,\s*\n\s*number:\s*4,[\s\S]*?status:\s*)'coming-soon'", itpm_part)
if unit4_old:
    itpm_part = itpm_part[:unit4_old.start(1)] + unit4_old.group(1) + "'active'" + itpm_part[unit4_old.end():]

reg_content = reg_content[:itpm_pos] + itpm_part
with open(reg_path, "w") as f:
    f.write(reg_content)
print("Updated registry.ts: Unit 3 and 4 are now active!")

# 2. Update units.ts
units_code = '''import { UnitData, UnitId } from '../../../types';
import { unit1Data } from './unit-1';
import { unit2Data } from './unit-2';
import { unit3Data } from './unit-3';
import { unit4Data } from './unit-4';
import { itProjectManagementConfig } from '../registry';

// Units 5 to 6 as coming-soon shells with official syllabus headers
const comingSoonUnits: UnitData[] = itProjectManagementConfig.units
  .filter(u => u.id > 4)
  .map(u => {
    const unitId = u.id as UnitId;
    return {
      id: unitId,
      code: `DLMBITPAM01-U0${u.id}`,
      title: u.title,
      subtitle: u.subtitle || '',
      estimatedTime: '2 hours',
      color: 'from-slate-700 to-slate-900',
      gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      badge: 'Coming Soon',
      overview: `Official IU International University curriculum for ${u.title} (Module DLMBITPAM01). Content preparation in progress. Units 1 through 4 are fully active and exam-ready.`,
      summarySections: u.sections.map((s, idx) => {
        const associatedTopics = u.topics.filter((_, tIdx) => tIdx % u.sections.length === idx);
        return {
          title: `${s.number} ${s.title}`,
          summaryParagraph: `Curriculum section ${s.number}: ${s.title}. Content currently in preparation.`,
          keyPoints: associatedTopics.length > 0 ? associatedTopics : [s.title],
          examInsight: `Examinable knowledge area under Module DLMBITPAM01: ${s.title}.`
        };
      }),
      keyConcepts: [],
      cheatSheet: {
        mustMemorize: [],
        coreDefinitions: [],
        highYieldNumbers: [],
        frameworkNames: [],
        processes: [],
        comparisons: [],
        examTraps: [],
        memoryShortcuts: []
      },
      importantQuestions: [],
      flashcards: [],
      mcqs: [],
      activeRecall: [],
      completionChecklist: u.topics.map(t => `Prepare ${t} upon release`)
    };
  });

export const itpmUnits: UnitData[] = [
  unit1Data,
  unit2Data,
  unit3Data,
  unit4Data,
  ...comingSoonUnits
];

export const allUnits: UnitData[] = itpmUnits;

export const getUnitById = (id: number): UnitData | undefined => {
  return itpmUnits.find(u => u.id === id);
};

export const getAllMcqs = () => {
  return itpmUnits.flatMap(u => u.mcqs);
};

export const getAllFlashcards = () => {
  return itpmUnits.flatMap(u => u.flashcards);
};

export const getAllQuestions = () => {
  return itpmUnits.flatMap(u => u.importantQuestions);
};
'''

with open("src/data/subjects/itpm/units.ts", "w") as f:
    f.write(units_code)
print("Updated units.ts with Unit 1, 2, 3, 4!")

# 3. Update comparisons.ts
comp_code = '''import { MasterComparison } from '../../../types';
import { unit2Comparisons } from './unit-2/comparisons';
import { unit3Comparisons } from './unit-3/comparisons';
import { unit4Comparisons } from './unit-4/comparisons';

export const itpmComparisons: MasterComparison[] = [
  // --- Unit 1 Master Comparisons ---
  {
    id: 'itpm-cmp-001',
    title: 'IT Projects vs Standard Business Operations',
    unit: 'Unit 1',
    description: 'Fundamental structural and managerial distinctions between temporary project endeavors and ongoing operational activities.',
    columns: ['IT Projects', 'Business Operations'],
    criteria: [
      { aspect: 'Duration & Lifecycle', itemA: 'Temporary endeavor with definitive start and end dates', itemB: 'Ongoing, repetitive, and continuous without predetermined end' },
      { aspect: 'Output & Deliverable', itemA: 'Unique deliverable, product, service, or system result', itemB: 'Standardized repetitive goods, services, or maintenance' },
      { aspect: 'Resource Allocation', itemA: 'Temporary cross-functional teams; fluctuating resource demand', itemB: 'Permanent functional departments; stable staffing models' },
      { aspect: 'Uncertainty & Risk', itemA: 'High risk and uncertainty due to novel technology/scope', itemB: 'Low risk; predictable processes and historical baselines' }
    ]
  },
  {
    id: 'itpm-cmp-002',
    title: 'Operational Information vs Management Information vs Executive Knowledge',
    unit: 'Unit 1',
    description: 'The three organizational tiers of information requirements served by IT systems.',
    columns: ['Operational & Management Info', 'Executive Knowledge & Strategy'],
    criteria: [
      { aspect: 'Target Audience', itemA: 'Frontline staff, team leads, department supervisors', itemB: 'C-suite executives, board of directors, enterprise strategists' },
      { aspect: 'Time Horizon', itemA: 'Immediate daily tasks to monthly tactical reviews', itemB: 'Multi-year strategic vision and competitive positioning' },
      { aspect: 'Granularity', itemA: 'Highly detailed, transactional, real-time data feeds', itemB: 'Highly aggregated summaries, trends, and market indicators' }
    ]
  },
  {
    id: 'itpm-cmp-003',
    title: 'Classical Triple Constraint vs Extended IT Project Constraints',
    unit: 'Unit 1',
    description: 'Evolution from the traditional Iron Triangle to modern multidimensional project constraints.',
    columns: ['Classical Triple Constraint', 'Modern Extended Constraints'],
    criteria: [
      { aspect: 'Core Dimensions', itemA: 'Scope, Time (Schedule), and Cost (Budget)', itemB: 'Scope, Time, Cost, Quality, Risk, Resources, Stakeholder Value' },
      { aspect: 'Success Definition', itemA: 'On time, within budget, and meeting predefined scope', itemB: 'Realized business value, user adoption, security, compliance' }
    ]
  },
  // --- Unit 2 Master Comparisons ---
  ...unit2Comparisons,
  // --- Unit 3 Master Comparisons ---
  ...unit3Comparisons,
  // --- Unit 4 Master Comparisons ---
  ...unit4Comparisons
];
'''

with open("src/data/subjects/itpm/comparisons.ts", "w") as f:
    f.write(comp_code)
print("Updated comparisons.ts with all units!")

# 4. Update examTraps.ts
traps_code = '''import { ExamTrapItem } from '../../../types';
import { unit2ExamTraps } from './unit-2/traps';
import { unit3ExamTraps } from './unit-3/traps';
import { unit4ExamTraps } from './unit-4/traps';

export const itpmExamTraps: ExamTrapItem[] = [
  // --- Unit 1 Traps ---
  {
    id: 'itpm-trp-001',
    unit: 1,
    topic: 'Projects vs Operations',
    commonStudentMistake: 'Classifying continuous system maintenance, monthly security patching, or help-desk ticket resolution as an IT project.',
    correctAcademicTruth: 'An IT project must be a TEMPORARY endeavor producing a UNIQUE deliverable. Ongoing routine maintenance is an operational activity.',
    whyExaminerDeductsMarks: 'Confuses routine business operations with temporary project lifecycle governance.',
    howToRemember: 'Unique + Temporary = Project. Repetitive + Ongoing = Operations.'
  },
  {
    id: 'itpm-trp-002',
    unit: 1,
    topic: 'Authority vs Influence',
    commonStudentMistake: 'Assuming the project manager always has formal line-management authority to fire or reassign team members.',
    correctAcademicTruth: 'In matrix organizations, PMs frequently have high project responsibility but limited direct line authority; they must rely on negotiation and influence.',
    whyExaminerDeductsMarks: 'Ignores matrix organizational realities where functional managers retain line control over resources.',
    howToRemember: 'PM = Project accountability & leadership; Functional Manager = Line authority & career reviews.'
  },
  // --- Unit 2 Traps ---
  ...unit2ExamTraps,
  // --- Unit 3 Traps ---
  ...unit3ExamTraps,
  // --- Unit 4 Traps ---
  ...unit4ExamTraps
];
'''

with open("src/data/subjects/itpm/examTraps.ts", "w") as f:
    f.write(traps_code)
print("Updated examTraps.ts with all units!")

# 5. Update numbers.ts
numbers_code = '''import { HighYieldNumber } from '../../../types';

export const itpmNumbers: HighYieldNumber[] = [
  // --- Unit 1 Numbers ---
  { number: '3', label: 'Classical Constraints (Iron Triangle)', context: 'Scope, Time, Cost.' },
  { number: '3', label: 'Information Need Levels', context: 'Operational, Management, Executive.' },
  { number: '5', label: 'External Stakeholder Categories', context: 'Customers, Suppliers, Collaborators, Governments, Regulators.' },
  { number: '4', label: 'Core PM Roles', context: 'Initiator, Planner, Implementer, Controller.' },

  // --- Unit 2 Numbers ---
  { number: '4', label: 'Dependency Types', context: 'FS (Finish-to-Start), SS (Start-to-Start), FF (Finish-to-Finish), SF (Start-to-Finish).' },
  { number: '0', label: 'Total Float on Critical Path', context: 'Tasks on the critical path have zero float (TF = 0); any delay directly postpones project finish.' },
  { number: '4', label: 'PERT Weighting Factor', context: 'The most likely estimate (m) is weighted by 4 in PERT formula: (o + 4m + p) / 6.' },
  { number: '6', label: 'PERT Divisor', context: 'Denominator in both PERT Expected Duration and Standard Deviation: (p - o) / 6.' },
  { number: '68%', label: 'PERT 1-Sigma Confidence', context: 'Probability project finishes within Expected Duration +/- 1 Standard Deviation.' },
  { number: '95%', label: 'PERT 2-Sigma Confidence', context: 'Probability project finishes within Expected Duration +/- 2 Standard Deviations.' },
  { number: '99.7%', label: 'PERT 3-Sigma Confidence', context: 'Probability project finishes within Expected Duration +/- 3 Standard Deviations.' },
  { number: '3', label: 'WBS Decomposition Approaches', context: 'Product-oriented, Phase-oriented, Department/Organizational-oriented.' },

  // --- Unit 3 Numbers ---
  { number: '9', label: 'Cost-Estimate Quality Attributes', context: 'Accuracy, Confidence, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification (A-C-C-P-R-D-U-V-V).' },
  { number: '5', label: 'FPA Function Types', context: 'Inputs, Outputs, Inquiries, External Interfaces, Internal Logical Files (I-O-Q-I-F).' },
  { number: '0.65', label: 'CAF Baseline Constant', context: 'CAF formula: CAF = 0.01 x TDI + 0.65.' },
  { number: '4', label: 'EVM Core Variance Formulas', context: 'SV = EV - PV, CV = EV - AC, CPI = EV / AC, SPI = EV / PV.' },
  { number: '25/75', label: 'EVM Crediting Rule', context: '25% credited at start/preparation, 75% credited upon verified completion.' },
  { number: '4', label: 'Risk Functions (I-A-M-M)', context: 'Identify, Assess, Mitigate, Monitor.' },
  { number: '4', label: 'Risk Response Strategies', context: 'Avoid, Mitigate, Transfer, Accept.' },
  { number: '5', label: 'Risk Maturity Levels (A-A-O-M-A)', context: 'Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.' },

  // --- Unit 4 Numbers ---
  { number: '3', label: 'Vision Hierarchy Levels', context: 'Vision ("Where we want to be"), Mission ("What we do and why"), Strategy ("How we get there").' },
  { number: '4', label: 'Structural Culture Types (CVF)', context: 'Clan (internal/flex), Adhocracy (external/flex), Hierarchy (internal/control), Market (external/control).' },
  { number: '4', label: 'Power-Interest Quadrants', context: 'Manage Closely, Keep Satisfied, Keep Informed, Monitor.' },
  { number: '3', label: 'Salience Attributes', context: 'Power, Legitimacy, Urgency (Mitchell, Agle & Wood 1997).' },
  { number: '7', label: 'Salience Stakeholder Classes', context: 'Latent (Dormant, Discretionary, Demanding), Expectant (Dominant, Dangerous, Dependent), Definite.' },
  { number: '1', label: 'Cardinal RACI Rule', context: 'Exactly ONE person must be Accountable (A) for any given activity.' },
  { number: '5', label: 'Stakeholder Engagement Levels', context: 'Unaware, Resistant, Neutral, Supportive, Leading.' },
  { number: '5', label: 'Conflict-Resolution Techniques', context: 'Collaborate (Win-Win), Compromise (Give-and-Take), Force (Win-Lose), Smooth (Lose-Win), Withdraw (No Resolution).' },
  { number: '4', label: 'Negotiation Spiral Phases', context: 'Intelligence -> Perception -> Strategy -> Communication (I-P-S-C).' }
];
'''

with open("src/data/subjects/itpm/numbers.ts", "w") as f:
    f.write(numbers_code)
print("Updated numbers.ts with all units!")

# 6. Update mockTests.ts
mocks_code = '''import { MockExam } from '../../../types';
import { unit1Mcqs } from './unit-1';
import { unit2Mcqs } from './unit-2';
import { unit3MockExams } from './unit-3/mockExams';
import { unit4MockExams } from './unit-4/mockExams';

export const itpmMockExams: MockExam[] = [
  // --- Unit 1 Mock Exam ---
  {
    id: 'itpm-mock-u1',
    title: 'Unit 1 Comprehensive Exam',
    subtitle: 'Characteristics, Constraints, Roles & Risks of IT Projects',
    totalMarks: 90,
    timeLimitMinutes: 120,
    mcqIds: unit1Mcqs.slice(0, 40).map(m => m.id),
    descriptiveQuestions: [
      {
        id: 'u1-mock-d1',
        unit: 1,
        question: 'Differentiate IT projects from continuous business operations across four dimensions. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['Temporary vs Continuous', 'Unique Deliverable vs Standard Repetition', 'Team Lifecycle', 'Uncertainty Profile'],
        modelAnswer: 'IT projects are temporary endeavors with defined beginnings and ends, creating unique deliverables with cross-functional transient teams and high technical uncertainty. Business operations are continuous, ongoing, repetitive, staffed by permanent departments, and characterized by predictable risk profiles.',
        rubricItems: [{ point: 'Identified all four dimensions accurately', marksAllotted: 6 }],
        examinerAdvice: 'Use the official keywords: Temporary, Unique, Continuous, Repetitive.'
      },
      {
        id: 'u1-mock-d2',
        unit: 1,
        question: 'Explain the three levels of organizational information needs served by IT projects. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['Operational Tier', 'Management Tier', 'Executive Knowledge Tier'],
        modelAnswer: '1. Operational Tier: Frontline transactional processing, high granularity, immediate time horizon.\\n2. Management Tier: Tactical monitoring, department aggregation, monthly performance reviews.\\n3. Executive Tier: Long-term strategic synthesis, trend forecasts, decision support for enterprise competitiveness.',
        rubricItems: [{ point: 'Explained all three tiers and target audiences', marksAllotted: 6 }],
        examinerAdvice: 'Clearly distinguish granular operational data from aggregated strategic knowledge.'
      },
      {
        id: 'u1-mock-d3',
        unit: 1,
        question: 'Discuss the Extended Project Constraints and how they expand upon the classical Triple Constraint. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['Define Triple Constraint', 'Enumerate Extended Dimensions', 'Business Value Perspective'],
        modelAnswer: 'The classical Triple Constraint focuses strictly on Scope, Time, and Cost. In modern IT environments, this is insufficient because projects may deliver on time and budget but fail on quality, security, or user adoption. Extended constraints include Quality, Risk, Resource Availability, Customer Satisfaction, and realized Strategic Value.',
        rubricItems: [{ point: 'Accurately compared Triple Constraint with extended dimensions', marksAllotted: 6 }],
        examinerAdvice: 'Explain why on-time delivery without quality or adoption is project failure.'
      },
      {
        id: 'u1-mock-d4',
        unit: 1,
        question: 'Analyze the four primary roles of an IT Project Manager throughout the project lifecycle. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['Initiator Role', 'Planner Role', 'Implementer Role', 'Controller Role'],
        modelAnswer: 'The IT PM functions across 4 lifecycle roles:\\n1. Initiator: Clarifies business goals, identifies initial stakeholders, drafts project charter.\\n2. Planner: Decomposes scope into WBS, estimates costs and schedules, establishes baselines.\\n3. Implementer: Mobilizes resources, leads the technical team, facilitates cross-functional collaboration.\\n4. Controller: Measures EVM progress, manages variances, oversees change control, and executes risk mitigation.',
        rubricItems: [{ point: 'Detailed all 4 roles with corresponding lifecycle activities', marksAllotted: 6 }],
        examinerAdvice: 'Connect each role directly to its corresponding lifecycle phase.'
      },
      {
        id: 'u1-mock-d5',
        unit: 1,
        question: 'A financial institution initiates an urgent mobile banking transformation under tight deadlines, evolving regulations, and unproven cloud architecture. Design a comprehensive risk-management and governance strategy. [20 marks]',
        marks: 20,
        suggestedMinutes: 35,
        answerStructure: ['Governance & Stakeholders', 'Constraint Prioritization', 'Risk Management', 'PM Leadership Profile'],
        modelAnswer: '1. Governance & Stakeholders: Establish a dedicated Steering Committee including regulators and compliance heads (High Power). Implement weekly cadence with clear decision escalation pathways.\\n2. Constraint Prioritization: Define Security and Regulatory Compliance as non-negotiable constraints, while using agile prioritization (MoSCoW) for customer-facing features.\\n3. Risk Management: Establish a dynamic Risk Register covering cloud vendor lock-in, latency, and compliance. Allocate appropriate contingency reserves.\\n4. PM Leadership: Adopt an active Controller and Implementer posture, balancing technical rigor with stakeholder alignment.',
        rubricItems: [
          { point: 'Integrated stakeholder governance and regulatory considerations', marksAllotted: 5 },
          { point: 'Prioritized constraints realistically for financial domain', marksAllotted: 5 },
          { point: 'Formulated proactive risk register and reserve strategy', marksAllotted: 5 },
          { point: 'Demonstrated holistic leadership and lifecycle control', marksAllotted: 5 }
        ],
        examinerAdvice: 'Always ground case answers in specific IT domain challenges (security, compliance, architecture).'
      }
    ]
  },
  // --- Unit 2 Mock Exam ---
  {
    id: 'itpm-mock-u2',
    title: 'Unit 2 Comprehensive Exam',
    subtitle: 'WBS, Network Diagrams, CPM, Float, and PERT Estimation',
    totalMarks: 90,
    timeLimitMinutes: 120,
    mcqIds: unit2Mcqs.slice(0, 40).map(m => m.id),
    descriptiveQuestions: [
      {
        id: 'u2-mock-d1',
        unit: 2,
        question: 'Explain the 100% Rule in Work Breakdown Structure (WBS) construction and describe three approaches to WBS decomposition. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['100% Rule definition', 'Three decomposition approaches: Product, Phase, Organizational'],
        modelAnswer: 'The 100% Rule states that the WBS encompasses 100% of the work defined by project scope and captures all deliverables—internal, external, and interim. No scope may exist outside the WBS. Three decomposition approaches: 1. Product-oriented (by physical software components/subsystems); 2. Phase-oriented (by lifecycle stages: Inception, Build, Test); 3. Organizational-oriented (by departmental responsibility).',
        rubricItems: [{ point: 'Stated 100% Rule and accurately explained all 3 decomposition models', marksAllotted: 6 }],
        examinerAdvice: 'Emphasize that work omitted from the WBS cannot be executed or budgeted.'
      },
      {
        id: 'u2-mock-d2',
        unit: 2,
        question: 'Differentiate Total Float (TF) from Free Float (FF) and explain why critical path activities have TF = 0. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['Define Total Float', 'Define Free Float', 'Explain TF = 0 on Critical Path'],
        modelAnswer: 'Total Float is the duration an activity can be delayed from its Early Start without postponing the project finish date (LS - ES or LF - EF). Free Float is the duration an activity can be delayed without delaying the Early Start of any immediate successor. The Critical Path represents the longest sequence of dependent activities and determines the shortest possible project completion time; any delay directly delays project completion, meaning float is zero.',
        rubricItems: [{ point: 'Accurately defined TF and FF and explained zero float mechanism', marksAllotted: 6 }],
        examinerAdvice: 'Use the mathematical expressions: TF = LS - ES; FF = min(ES_successors) - EF.'
      },
      {
        id: 'u2-mock-d3',
        unit: 2,
        question: 'Explain the PERT three-point estimation formulas for Expected Duration and Standard Deviation. Why is the most likely estimate weighted by 4? [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['Formula: TE = (o + 4m + p) / 6', 'Formula: sigma = (p - o) / 6', 'Beta Distribution weighting rationale'],
        modelAnswer: 'PERT Expected Duration: TE = (o + 4m + p) / 6, where o is optimistic, m is most likely, and p is pessimistic. Standard Deviation: sigma = (p - o) / 6. The most likely estimate (m) is weighted by 4 to reflect the unimodal Beta probability distribution, where outcomes cluster around the modal value while accounting for asymmetric tail probabilities.',
        rubricItems: [{ point: 'Stated both formulas correctly and explained Beta distribution weighting', marksAllotted: 6 }],
        examinerAdvice: 'Never write a simple average; PERT uses divisor 6 with weight 4 on m.'
      },
      {
        id: 'u2-mock-d4',
        unit: 2,
        question: 'Compare AON (Precedence Diagramming Method) with AOA (Arrow Diagramming Method) in IT project scheduling. [6 marks]',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: ['AON Node vs Arrow usage', 'AOA Node vs Arrow usage', 'Support for 4 dependency types and dummy activities'],
        modelAnswer: 'In AON (Activity-on-Node), nodes represent activities and arrows represent dependencies; it natively supports all 4 dependency types (FS, SS, FF, SF) without dummy activities. In AOA (Activity-on-Arrow), arrows represent activities and nodes represent milestone events; it only supports FS dependencies and requires artificial dummy activities to represent logical relationships.',
        rubricItems: [{ point: 'Contrasted node/arrow semantics and dependency flexibility', marksAllotted: 6 }],
        examinerAdvice: 'Point out that modern scheduling tools exclusively use AON/PDM.'
      },
      {
        id: 'u2-mock-d5',
        unit: 2,
        question: 'A core banking legacy migration project comprises 8 major work packages. Requirements are volatile, technical dependencies are tight, and management demands a deterministic launch date. Design an integrated scheduling, critical path, and probabilistic estimation approach. [20 marks]',
        marks: 20,
        suggestedMinutes: 35,
        answerStructure: ['WBS Decomposition', 'Network Logic & Dependencies', 'Critical Path & Float Analysis', 'PERT Probabilistic Confidence'],
        modelAnswer: '1. WBS Decomposition: Construct a deliverable-oriented WBS down to 8-80 hour work package level following the 100% Rule.\\n2. Network Logic: Build an AON precedence diagram mapping FS, SS, and FF dependencies, establishing clear predecessor chains.\\n3. Critical Path Method: Execute Forward Pass (ES/EF) and Backward Pass (LS/LF) to isolate the Critical Path (TF = 0) and identify near-critical paths.\\n4. PERT Probabilistic Confidence: Apply three-point estimation (o, m, p) across critical activities to calculate TE and project variance. Provide management with 68% (1-sigma), 95% (2-sigma), and 99.7% (3-sigma) confidence intervals instead of an unrealistic single-point estimate.',
        rubricItems: [
          { point: 'Structured WBS with work package sizing guidelines', marksAllotted: 5 },
          { point: 'Built rigorous AON network logic and dependency rules', marksAllotted: 5 },
          { point: 'Executed Forward/Backward passes and isolated critical path', marksAllotted: 5 },
          { point: 'Calculated PERT probability ranges and variance intervals', marksAllotted: 5 }
        ],
        examinerAdvice: 'Emphasize that managing high-risk IT schedules requires probabilistic ranges, not deterministic optimism.'
      }
    ]
  },
  // --- Unit 3 Mock Exams (2 full exams) ---
  ...unit3MockExams,
  // --- Unit 4 Mock Exams (2 full exams) ---
  ...unit4MockExams
];
'''

with open("src/data/subjects/itpm/mockTests.ts", "w") as f:
    f.write(mocks_code)
print("Updated mockTests.ts with Unit 1, 2, 3, 4!")

# 7. Update itpm/index.ts
itpm_idx_code = '''export * from './units';
export * from './comparisons';
export * from './examTraps';
export * from './numbers';
export * from './mockTests';
export { unit1Data } from './unit-1';
export { unit2Data } from './unit-2';
export { unit3Data } from './unit-3';
export { unit4Data } from './unit-4';
export { unit3Formulas } from './unit-3/formulas';
export { unit4Scenarios } from './unit-4/scenarios';
'''

with open("src/data/subjects/itpm/index.ts", "w") as f:
    f.write(itpm_idx_code)
print("Updated itpm/index.ts!")
