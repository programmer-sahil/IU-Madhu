import { MockExam } from '../../../types';
import { unit1Mcqs } from './unit-1';
import { unit2Mcqs } from './unit-2';
import { unit3MockExams } from './unit-3/mockExams';
import { unit4MockExams } from './unit-4/mockExams';
import { unit5MockExams } from './unit-5/mockExams';
import { unit6MockExams } from './unit-6/mockExams';

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
        modelAnswer: '1. Operational Tier: Frontline transactional processing, high granularity, immediate time horizon.\n2. Management Tier: Tactical monitoring, department aggregation, monthly performance reviews.\n3. Executive Tier: Long-term strategic synthesis, trend forecasts, decision support for enterprise competitiveness.',
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
        modelAnswer: 'The IT PM functions across 4 lifecycle roles:\n1. Initiator: Clarifies business goals, identifies initial stakeholders, drafts project charter.\n2. Planner: Decomposes scope into WBS, estimates costs and schedules, establishes baselines.\n3. Implementer: Mobilizes resources, leads the technical team, facilitates cross-functional collaboration.\n4. Controller: Measures EVM progress, manages variances, oversees change control, and executes risk mitigation.',
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
        modelAnswer: '1. Governance & Stakeholders: Establish a dedicated Steering Committee including regulators and compliance heads (High Power). Implement weekly cadence with clear decision escalation pathways.\n2. Constraint Prioritization: Define Security and Regulatory Compliance as non-negotiable constraints, while using agile prioritization (MoSCoW) for customer-facing features.\n3. Risk Management: Establish a dynamic Risk Register covering cloud vendor lock-in, latency, and compliance. Allocate appropriate contingency reserves.\n4. PM Leadership: Adopt an active Controller and Implementer posture, balancing technical rigor with stakeholder alignment.',
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
        modelAnswer: '1. WBS Decomposition: Construct a deliverable-oriented WBS down to 8-80 hour work package level following the 100% Rule.\n2. Network Logic: Build an AON precedence diagram mapping FS, SS, and FF dependencies, establishing clear predecessor chains.\n3. Critical Path Method: Execute Forward Pass (ES/EF) and Backward Pass (LS/LF) to isolate the Critical Path (TF = 0) and identify near-critical paths.\n4. PERT Probabilistic Confidence: Apply three-point estimation (o, m, p) across critical activities to calculate TE and project variance. Provide management with 68% (1-sigma), 95% (2-sigma), and 99.7% (3-sigma) confidence intervals instead of an unrealistic single-point estimate.',
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
  // --- Unit 3 Mock Exams ---
  ...unit3MockExams,
  // --- Unit 4 Mock Exams ---
  ...unit4MockExams,
  // --- Unit 5 Mock Exams ---
  ...unit5MockExams,
  // --- Unit 6 Mock Exams ---
  ...unit6MockExams
];
