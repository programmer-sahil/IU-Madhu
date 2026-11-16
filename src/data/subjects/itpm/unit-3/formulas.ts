export const unit3Formulas = [
  {
    "id": "itpm-u3-form-001",
    "name": "Return on Investment (ROI)",
    "formula": "ROI = Net Gain / Project Cost",
    "unit": 3,
    "description": "Calculates the financial return relative to project expenditure.",
    "variables": [
      {
        "symbol": "Net Gain",
        "meaning": "Total financial gains/revenue minus project cost"
      },
      {
        "symbol": "Project Cost",
        "meaning": "Total capital invested in the project"
      }
    ],
    "interpretation": "Positive ROI = financial profit; Negative ROI = financial loss. Higher is better.",
    "example": "Net Gain = $800,000, Cost = $1,000,000 -> ROI = 800k / 1M = 0.80 (80%)."
  },
  {
    "id": "itpm-u3-form-002",
    "name": "Net Present Value (NPV)",
    "formula": "NPV = Future Value / (1 + interest)^time periods",
    "unit": 3,
    "description": "Discounts future cash revenue back to current present value.",
    "variables": [
      {
        "symbol": "Future Value",
        "meaning": "Anticipated future monetary cash inflow"
      },
      {
        "symbol": "interest",
        "meaning": "Discount or interest rate per period"
      },
      {
        "symbol": "time periods",
        "meaning": "Number of compounding time periods"
      }
    ],
    "interpretation": "Expresses the current purchasing power of future cash flows.",
    "example": "FV = $1,100 in 1 year at 10% interest -> NPV = 1100 / (1 + 0.10)^1 = $1,000."
  },
  {
    "id": "itpm-u3-form-003",
    "name": "Profitability Index",
    "formula": "Profitability Index = NPV / Project Cost",
    "unit": 3,
    "description": "Measures discounted value generated per dollar of project investment.",
    "variables": [
      {
        "symbol": "NPV",
        "meaning": "Discounted net present value of project gains"
      },
      {
        "symbol": "Project Cost",
        "meaning": "Total initial capital expenditure"
      }
    ],
    "interpretation": "Values > 1.0 indicate favorable return where NPV exceeds project cost.",
    "example": "NPV = $1,200,000, Cost = $1,000,000 -> PI = 1.2M / 1.0M = 1.2 (Favorable)."
  },
  {
    "id": "itpm-u3-form-004",
    "name": "FPA Complexity Adjustment Factor (CAF)",
    "formula": "CAF = 0.01 x TDI + 0.65",
    "unit": 3,
    "description": "Adjusts unadjusted function points based on 14 general system characteristics.",
    "variables": [
      {
        "symbol": "TDI",
        "meaning": "Total Degree of Influence (sum of 14 scores from 0 to 5, range 0 to 70)"
      },
      {
        "symbol": "0.65",
        "meaning": "Baseline adjustment constant"
      }
    ],
    "interpretation": "Typical range is 0.65 (no influence) to 1.35 (maximum influence).",
    "example": "TDI = 34 -> CAF = 0.01 * 34 + 0.65 = 0.34 + 0.65 = 0.99."
  },
  {
    "id": "itpm-u3-form-005",
    "name": "Adjusted Function Points (FP)",
    "formula": "FP = UFP x CAF",
    "unit": 3,
    "description": "Calculates final technology-independent functional software size.",
    "variables": [
      {
        "symbol": "UFP",
        "meaning": "Unadjusted Function Points (sum of weighted I-O-Q-I-F functions)"
      },
      {
        "symbol": "CAF",
        "meaning": "Complexity Adjustment Factor"
      }
    ],
    "interpretation": "Final functional size used for cross-language sizing and productivity baselines.",
    "example": "UFP = 120, CAF = 0.99 -> FP = 120 * 0.99 = 118.8."
  },
  {
    "id": "itpm-u3-form-006",
    "name": "EVM Schedule Variance (SV)",
    "formula": "SV = EV - PV",
    "unit": 3,
    "description": "Measures schedule deviation expressed in budget currency.",
    "variables": [
      {
        "symbol": "EV",
        "meaning": "Earned Value (budgeted value of work completed)"
      },
      {
        "symbol": "PV",
        "meaning": "Planned Value (authorized budget for scheduled work)"
      }
    ],
    "interpretation": "Positive SV = Ahead of schedule; Negative SV = Behind schedule. Zero = on schedule.",
    "example": "EV = $2,500, PV = $3,000 -> SV = 2500 - 3000 = -$500 (Behind schedule)."
  },
  {
    "id": "itpm-u3-form-007",
    "name": "EVM Cost Variance (CV)",
    "formula": "CV = EV - AC",
    "unit": 3,
    "description": "Measures budget surplus or deficit at a given reporting date.",
    "variables": [
      {
        "symbol": "EV",
        "meaning": "Earned Value (budgeted value of work completed)"
      },
      {
        "symbol": "AC",
        "meaning": "Actual Cost (real money spent)"
      }
    ],
    "interpretation": "Positive CV = Under budget (surplus); Negative CV = Over budget (deficit).",
    "example": "EV = $2,500, AC = $3,500 -> CV = 2500 - 3500 = -$1,000 (Over budget)."
  },
  {
    "id": "itpm-u3-form-008",
    "name": "Cost Performance Index (CPI)",
    "formula": "CPI = EV / AC",
    "unit": 3,
    "description": "Measures cost efficiency of earned work per dollar spent.",
    "variables": [
      {
        "symbol": "EV",
        "meaning": "Earned Value in numerator"
      },
      {
        "symbol": "AC",
        "meaning": "Actual Cost in denominator"
      }
    ],
    "interpretation": "< 1.0 = Cost overrun / inefficient; > 1.0 = Under budget / efficient. 1.0 = on budget.",
    "example": "EV = $2,500, AC = $3,500 -> CPI = 2500 / 3500 = 0.714 (Cost overrun)."
  },
  {
    "id": "itpm-u3-form-009",
    "name": "Schedule Performance Index (SPI)",
    "formula": "SPI = EV / PV",
    "unit": 3,
    "description": "Measures schedule progression rate relative to plan.",
    "variables": [
      {
        "symbol": "EV",
        "meaning": "Earned Value in numerator"
      },
      {
        "symbol": "PV",
        "meaning": "Planned Value in denominator"
      }
    ],
    "interpretation": "< 1.0 = Behind schedule; > 1.0 = Ahead of schedule. 1.0 = on schedule.",
    "example": "EV = $2,500, PV = $3,000 -> SPI = 2500 / 3000 = 0.833 (Behind schedule)."
  }
];
