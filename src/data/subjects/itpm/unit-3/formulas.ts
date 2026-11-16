export interface FormulaDefinition {
  id: string;
  name: string;
  formula: string;
  unit: number;
  description: string;
  variables: { symbol: string; meaning: string }[];
  interpretation: string;
  example: string;
  sourceVerified: boolean;
  sourceUnit: number;
  sourceSection: string;
  sourcePage: number;
}

export const unit3Formulas: FormulaDefinition[] = [
  {
    id: "itpm-u3-form-001",
    name: "Return on Investment (ROI)",
    formula: "ROI = Net Gain / Project Cost",
    unit: 3,
    description: "Calculates the financial return relative to project expenditure.",
    variables: [
      {
        symbol: "Net Gain",
        meaning: "Total financial revenue/gains minus project cost"
      },
      {
        symbol: "Project Cost",
        meaning: "Total capital invested in the project"
      }
    ],
    interpretation: "Positive ROI = financial profit; Negative ROI = financial loss. Example: $800,000 / $1,000,000 = 0.8 = 80%.",
    example: "Net Gain = $800,000, Cost = $1,000,000 -> ROI = 800k / 1M = 0.80 (80%).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.1",
    sourcePage: 64
  },
  {
    id: "itpm-u3-form-002",
    name: "Net Present Value (NPV)",
    formula: "NPV = Future Value / (1 + interest)^time periods",
    unit: 3,
    description: "Discounts future cash revenue back to current present purchasing power.",
    variables: [
      {
        symbol: "Future Value",
        meaning: "Anticipated future monetary cash payment"
      },
      {
        symbol: "interest",
        meaning: "Annual discount or interest rate (e.g. 0.10 for 10%)"
      },
      {
        symbol: "time periods",
        meaning: "Number of years/periods until payment occurs"
      }
    ],
    interpretation: "Determines the current amount needed today to produce the desired future income.",
    example: "FV = $2,000,000 in 3 years at 10% interest -> NPV = 2,000,000 / (1 + 0.10)^3 = $1,502,630.",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.1",
    sourcePage: 64
  },
  {
    id: "itpm-u3-form-003",
    name: "Profitability Index",
    formula: "Profitability Index = NPV / Project Cost",
    unit: 3,
    description: "Measures discounted value generated per dollar of project investment.",
    variables: [
      {
        symbol: "NPV",
        meaning: "Discounted net present value of project cash flows"
      },
      {
        symbol: "Project Cost",
        meaning: "Total initial capital expenditure"
      }
    ],
    interpretation: "Values > 1.0 indicate favorable return where NPV exceeds project cost.",
    example: "NPV = $1,502,630, Cost = $1,000,000 -> PI = 1,502,630 / 1,000,000 = 1.50 (50% increase in profit).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.1",
    sourcePage: 64
  },
  {
    id: "itpm-u3-form-004",
    name: "FPA Complexity Adjustment Factor (CAF)",
    formula: "CAF = 0.01 x TDI + 0.65",
    unit: 3,
    description: "Adjusts unadjusted function points based on 14 general system characteristics.",
    variables: [
      {
        symbol: "TDI",
        meaning: "Total Degree of Influence (sum of 14 scores from 0 to 5, range 0 to 70)"
      },
      {
        symbol: "0.65",
        meaning: "Baseline adjustment constant"
      }
    ],
    interpretation: "Typical range is 0.65 (no influence) to 1.35 (maximum influence).",
    example: "TDI = 34 -> CAF = 0.01 * 34 + 0.65 = 0.34 + 0.65 = 0.99.",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.2",
    sourcePage: 70
  },
  {
    id: "itpm-u3-form-005",
    name: "Adjusted Function Points (FP)",
    formula: "FP = UFP x CAF",
    unit: 3,
    description: "Calculates technology-independent functional software size.",
    variables: [
      {
        symbol: "UFP",
        meaning: "Unadjusted Function Points (sum of weighted elementary functions using Table 1)"
      },
      {
        symbol: "CAF",
        meaning: "Complexity Adjustment Factor"
      }
    ],
    interpretation: "Final functional size used to estimate code lines (FP x language factor) and costs.",
    example: "UFP = 128, CAF = 0.99 -> FP = 128 * 0.99 = 127 FP (Java lines = 127 * 38 = 4,826 LOC).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.2",
    sourcePage: 71
  },
  {
    id: "itpm-u3-form-006",
    name: "EVM Schedule Variance (SV)",
    formula: "SV = EV - PV",
    unit: 3,
    description: "Measures schedule deviation expressed in budget currency.",
    variables: [
      {
        symbol: "EV",
        meaning: "Earned Value (budgeted value of work completed)"
      },
      {
        symbol: "PV",
        meaning: "Planned Value (authorized budget for scheduled work)"
      }
    ],
    interpretation: "Positive SV = Ahead of schedule; Negative SV = Behind schedule. Zero = on schedule.",
    example: "EV = $2,500, PV = $3,000 -> SV = 2,500 - 3,000 = -$500 (Behind schedule).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.3",
    sourcePage: 73
  },
  {
    id: "itpm-u3-form-007",
    name: "EVM Cost Variance (CV)",
    formula: "CV = EV - AC",
    unit: 3,
    description: "Measures budget surplus or deficit at a given reporting date.",
    variables: [
      {
        symbol: "EV",
        meaning: "Earned Value (budgeted value of work completed)"
      },
      {
        symbol: "AC",
        meaning: "Actual Cost (real money spent)"
      }
    ],
    interpretation: "Positive CV = Under budget (surplus); Negative CV = Over budget (deficit).",
    example: "EV = $2,500, AC = $3,500 -> CV = 2,500 - 3,500 = -$1,000 (Over budget).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.3",
    sourcePage: 73
  },
  {
    id: "itpm-u3-form-008",
    name: "Cost Performance Index (CPI)",
    formula: "CPI = EV / AC",
    unit: 3,
    description: "Measures cost efficiency of earned work per dollar spent.",
    variables: [
      {
        symbol: "EV",
        meaning: "Earned Value in numerator"
      },
      {
        symbol: "AC",
        meaning: "Actual Cost in denominator"
      }
    ],
    interpretation: "< 1.0 = Cost overrun / inefficient; > 1.0 = Under budget / efficient. 1.0 = on budget.",
    example: "EV = $2,500, AC = $3,500 -> CPI = 2,500 / 3,500 = 0.714 (~0.71, Cost overrun).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.3",
    sourcePage: 74
  },
  {
    id: "itpm-u3-form-009",
    name: "Schedule Performance Index (SPI)",
    formula: "SPI = EV / PV",
    unit: 3,
    description: "Measures schedule progression rate relative to plan.",
    variables: [
      {
        symbol: "EV",
        meaning: "Earned Value in numerator"
      },
      {
        symbol: "PV",
        meaning: "Planned Value in denominator"
      }
    ],
    interpretation: "< 1.0 = Behind schedule; > 1.0 = Ahead of schedule. 1.0 = on schedule.",
    example: "EV = $2,500, PV = $3,000 -> SPI = 2,500 / 3,000 = 0.833 (~0.83, Behind schedule).",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.3",
    sourcePage: 74
  },
  {
    id: "itpm-u3-form-010",
    name: "25/75 Earning Rule",
    formula: "EV_start = 0.25 x PV_task; EV_complete = 0.75 x PV_task",
    unit: 3,
    description: "Earned value progress crediting rule for work packages.",
    variables: [
      {
        symbol: "EV_start",
        meaning: "25% of task budget earned immediately upon start/setup"
      },
      {
        symbol: "EV_complete",
        meaning: "Remaining 75% earned only upon full task completion"
      }
    ],
    interpretation: "Prevents subjective progress inflation while recognizing setup initiation effort.",
    example: "Task PV = $4,000. When work starts: EV = $1,000 (25%). When fully completed: remaining $3,000 (75%) credited.",
    sourceVerified: true,
    sourceUnit: 3,
    sourceSection: "3.3",
    sourcePage: 74
  }
];
