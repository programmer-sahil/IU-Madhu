import { SourceMetadata } from "../../../../types";

export interface PertFormula {
  name: string;
  formula: string;
  variables: { symbol: string; meaning: string }[];
  description: string;
  examApplication: string;
  source: SourceMetadata;
}

export interface PertCalculationExercise {
  id: string;
  title: string;
  scenario: string;
  givenValues: Record<string, number | string>;
  stepByStepSolution: string[];
  finalAnswer: string;
  examTrap: string;
}

export const unit2PertFormulas: PertFormula[] = [
  {
    name: "Earliest Finish Time (Forward Pass)",
    formula: "EFT = EST + Duration",
    variables: [
      { symbol: "EFT", meaning: "Earliest Finish Time of the activity" },
      { symbol: "EST", meaning: "Earliest Start Time of the activity" },
      { symbol: "Duration", meaning: "Estimated activity duration" }
    ],
    description: "Calculated during the forward pass from day zero. The earliest time an activity can finish is its earliest start plus its duration.",
    examApplication: "At an incoming merge with multiple predecessors: EST(successor) = max(EFT of all predecessors).",
    source: { type: "course-book", unit: 2, section: "2.3", topic: "Forward Pass", page: 48 }
  },
  {
    name: "Latest Start Time (Backward Pass)",
    formula: "LST = LFT - Duration",
    variables: [
      { symbol: "LST", meaning: "Latest Start Time of the activity" },
      { symbol: "LFT", meaning: "Latest Finish Time of the activity" },
      { symbol: "Duration", meaning: "Estimated activity duration" }
    ],
    description: "Calculated during the backward pass from project completion. The latest allowable start time that preserves project delivery.",
    examApplication: "At an outgoing burst with multiple successors: LFT(predecessor) = min(LST of all successors).",
    source: { type: "course-book", unit: 2, section: "2.3", topic: "Backward Pass", page: 49 }
  },
  {
    name: "Total Slack / Float",
    formula: "Slack = LST - EST = LFT - EFT",
    variables: [
      { symbol: "Slack", meaning: "Scheduling buffer / variability" },
      { symbol: "LST - EST", meaning: "Difference between latest and earliest start" },
      { symbol: "LFT - EFT", meaning: "Difference between latest and earliest finish" }
    ],
    description: "The maximum amount of time an activity can be delayed without delaying the overall project delivery date.",
    examApplication: "Activities with Slack = 0 form the Critical Path. If delay <= Slack, project completion is unaffected.",
    source: { type: "course-book", unit: 2, section: "2.3", topic: "Slack Calculation", page: 50 }
  }
];

export const unit2CalculationExercises: PertCalculationExercise[] = [
  {
    id: "pert-ex-001",
    title: "Forward Pass: Single Task EFT",
    scenario: "Task A has an earliest start time of day 8 and a duration of 6 days.",
    givenValues: { EST: 8, Duration: 6 },
    stepByStepSolution: [
      "Identify the forward pass formula: EFT = EST + Duration",
      "Substitute given values: EFT = 8 + 6",
      "Calculate result: EFT = 14 days"
    ],
    finalAnswer: "EFT = 14 days",
    examTrap: "Do not subtract duration; forward pass adds duration."
  },
  {
    id: "pert-ex-002",
    title: "Forward Pass: Converging Merge Point",
    scenario: "Task D depends on Predecessor B (EFT = 12 weeks) and Predecessor C (EFT = 17 weeks).",
    givenValues: { "EFT(B)": 12, "EFT(C)": 17 },
    stepByStepSolution: [
      "Identify merge rule: Task D cannot begin until ALL incoming predecessors are completed.",
      "Apply rule: EST(D) = max(EFT(B), EFT(C))",
      "Substitute values: EST(D) = max(12, 17) = 17 weeks"
    ],
    finalAnswer: "EST(D) = 17 weeks",
    examTrap: "Never take the minimum or average; all predecessors must finish before the successor can start."
  },
  {
    id: "pert-ex-003",
    title: "Backward Pass: Single Task LST",
    scenario: "Task M has a latest finish time of week 26 and a duration of 8 weeks.",
    givenValues: { LFT: 26, Duration: 8 },
    stepByStepSolution: [
      "Identify backward pass formula: LST = LFT - Duration",
      "Substitute values: LST = 26 - 8",
      "Calculate result: LST = 18 weeks"
    ],
    finalAnswer: "LST = 18 weeks",
    examTrap: "Backward pass subtracts duration from LFT."
  },
  {
    id: "pert-ex-004",
    title: "Backward Pass: Diverging Burst Point",
    scenario: "Task P is followed by Successor Q (LST = week 21) and Successor R (LST = week 16).",
    givenValues: { "LST(Q)": 21, "LST(R)": 16 },
    stepByStepSolution: [
      "Identify burst rule: Predecessor P must finish early enough to allow the earliest successor to start.",
      "Apply rule: LFT(P) = min(LST(Q), LST(R))",
      "Substitute values: LFT(P) = min(21, 16) = 16 weeks"
    ],
    finalAnswer: "LFT(P) = 16 weeks",
    examTrap: "Taking the maximum (21) would delay Task R by 5 weeks, violating its latest start."
  },
  {
    id: "pert-ex-005",
    title: "Slack and Critical Path Status",
    scenario: "Task T has EST = 14, EFT = 20, LST = 19, and LFT = 25.",
    givenValues: { EST: 14, EFT: 20, LST: 19, LFT: 25 },
    stepByStepSolution: [
      "Calculate duration: EFT - EST = 20 - 14 = 6 weeks",
      "Calculate Slack using start times: Slack = LST - EST = 19 - 14 = 5 weeks",
      "Verify Slack using finish times: Slack = LFT - EFT = 25 - 20 = 5 weeks",
      "Evaluate Critical Path: Since Slack = 5 > 0, Task T is NOT on the critical path."
    ],
    finalAnswer: "Slack = 5 weeks (Non-critical)",
    examTrap: "Both LST - EST and LFT - EFT must match. If they differ, check arithmetic."
  }
];
