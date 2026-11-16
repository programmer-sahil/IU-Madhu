import { MasterComparison } from "../../../../types";

export const unit3Comparisons: MasterComparison[] = [
  {
    "id": "itpm-u3-comp-001",
    "title": "Agile vs Plan-Driven Cost Estimation",
    "unit": "Unit 3",
    "description": "Comparison of upfront predictive cost estimation versus iterative agile effort estimation.",
    "columns": [
      "Plan-Driven Cost Estimation",
      "Agile Cost Estimation"
    ],
    "criteria": [
      {
        "aspect": "Planning Logic",
        "itemA": "Detailed early estimation of all activities upfront",
        "itemB": "Approximate initial sizing; refined iteratively per sprint"
      },
      {
        "aspect": "Fixed Constraint",
        "itemA": "Scope is generally fixed; cost and schedule may vary",
        "itemB": "Cost and schedule (sprint timebox) are fixed; scope varies"
      },
      {
        "aspect": "Primary Techniques",
        "itemA": "Three-point estimation, expert review, Function Point Analysis",
        "itemB": "Planning Poker, story points, velocity burn-down"
      }
    ],
    "examTrap": "Do not treat agile as having no estimates; agile fixes time and cost while varying scope.",
    "memoryRule": "Plan-driven = Scope fixed. Agile = Time & Cost fixed."
  },
  {
    "id": "itpm-u3-comp-002",
    "title": "Contingency Reserve vs Management Reserve",
    "unit": "Unit 3",
    "description": "Critical distinction between risk buffers for known-unknowns and unknown-unknowns.",
    "columns": [
      "Contingency Reserve",
      "Management Reserve"
    ],
    "criteria": [
      {
        "aspect": "Addressed Uncertainties",
        "itemA": "Identified risks ('known-unknowns') evaluated in risk register",
        "itemB": "Unforeseen work within project scope ('unknown-unknowns')"
      },
      {
        "aspect": "Baseline Inclusion",
        "itemA": "Formally INCLUDED in the Cost Baseline",
        "itemB": "EXCLUDED from Cost Baseline; included in Project Budget"
      },
      {
        "aspect": "Control Level",
        "itemA": "Project Manager controls within work-package limits",
        "itemB": "Withheld by Project Sponsor / PMB for management control"
      }
    ],
    "examTrap": "Cost Baseline includes Contingency Reserves, but EXCLUDES Management Reserves.",
    "memoryRule": "Contingency = Known-unknowns (in baseline). Management = Unknown-unknowns (outside baseline)."
  },
  {
    "id": "itpm-u3-comp-003",
    "title": "Three-Point vs Expert Estimation",
    "unit": "Unit 3",
    "description": "Probabilistic statistical range modeling versus qualitative expert judgment.",
    "columns": [
      "Three-Point Estimation",
      "Expert Estimation"
    ],
    "criteria": [
      {
        "aspect": "Methodology",
        "itemA": "Calculates probabilistic triangular distribution (o, m, p)",
        "itemB": "Relies on specialized experience, education, and domain training"
      },
      {
        "aspect": "Bias Control",
        "itemA": "Models asymmetric downside risk mathematically",
        "itemB": "Uses double-blind review to hide author/reviewer identity"
      },
      {
        "aspect": "Data Source",
        "itemA": "Gathered from project team and knowledgeable stakeholders",
        "itemB": "Provided by internal specialists or external consultants"
      }
    ],
    "examTrap": "Three-point estimation models variance; expert estimation leverages specialized historical judgment.",
    "memoryRule": "Three-Point = Probability range (o, m, p). Expert = Specialized knowledge + double-blind."
  },
  {
    "id": "itpm-u3-comp-004",
    "title": "Expert Estimation vs Planning Poker",
    "unit": "Unit 3",
    "description": "Independent specialist review versus collaborative agile team consensus.",
    "columns": [
      "Expert Estimation",
      "Planning Poker"
    ],
    "criteria": [
      {
        "aspect": "Participants",
        "itemA": "Specialized internal or external experts / consultants",
        "itemB": "The cross-functional agile team performing the work"
      },
      {
        "aspect": "Estimation Process",
        "itemA": "Double-blind review protocol to eliminate social bias",
        "itemB": "Simultaneous card reveal, extreme discussions, consensus"
      },
      {
        "aspect": "Output Metric",
        "itemA": "Monetary cost figures or direct person-hours",
        "itemB": "Relative story points or ideal days on a Fibonacci scale"
      }
    ],
    "examTrap": "Planning poker is team consensus; expert estimation is external/internal specialist judgment.",
    "memoryRule": "Expert = Specialized consultation. Planning Poker = Team consensus game."
  },
  {
    "id": "itpm-u3-comp-005",
    "title": "Function Point Analysis vs Planning Poker",
    "unit": "Unit 3",
    "description": "Standardized functional sizing metric versus relative agile effort sizing.",
    "columns": [
      "Function Point Analysis (FPA)",
      "Planning Poker"
    ],
    "criteria": [
      {
        "aspect": "Underlying Metric",
        "itemA": "Standardized functional size (UFP, TDI, CAF, FP)",
        "itemB": "Relative story points based on team consensus"
      },
      {
        "aspect": "Technology Dependence",
        "itemA": "Strictly technology-independent based on business functions",
        "itemB": "Relative to the specific team's technical implementation capability"
      },
      {
        "aspect": "Best Application",
        "itemA": "Standard dialogue and MIS information systems",
        "itemB": "Agile software sprints and iterative user story sizing"
      }
    ],
    "examTrap": "FPA measures functional product size; planning poker sizes relative delivery effort.",
    "memoryRule": "FPA = System size in Function Points. Planning Poker = Sprint effort in Story Points."
  },
  {
    "id": "itpm-u3-comp-006",
    "title": "Planned Value (PV) vs Earned Value (EV) vs Actual Cost (AC)",
    "unit": "Unit 3",
    "description": "The three foundational pillars of Earned Value Management.",
    "columns": [
      "Planned Value (PV) / Earned Value (EV)",
      "Actual Cost (AC)"
    ],
    "criteria": [
      {
        "aspect": "Core Concept",
        "itemA": "PV = Authorized budget scheduled; EV = Budgeted value performed",
        "itemB": "AC = Real monetary expenditure incurred to date"
      },
      {
        "aspect": "Memory Phrase",
        "itemA": "PV = 'What should be done'; EV = 'What was earned'",
        "itemB": "AC = 'What was actually spent'"
      },
      {
        "aspect": "Baseline Role",
        "itemA": "Both are valued in authorized baseline dollars",
        "itemB": "Drawn directly from accounting general ledgers"
      }
    ],
    "examTrap": "EV is based on budgeted rates, NOT actual cost spent.",
    "memoryRule": "PV = Budget scheduled. EV = Budget earned. AC = Real money spent."
  },
  {
    "id": "itpm-u3-comp-007",
    "title": "Schedule Variance (SV) vs Cost Variance (CV)",
    "unit": "Unit 3",
    "description": "Comparison of schedule deviation in dollars versus budget surplus/deficit.",
    "columns": [
      "Schedule Variance (SV)",
      "Cost Variance (CV)"
    ],
    "criteria": [
      {
        "aspect": "Mathematical Formula",
        "itemA": "SV = EV - PV",
        "itemB": "CV = EV - AC"
      },
      {
        "aspect": "Dimension Evaluated",
        "itemA": "Schedule performance expressed in budget currency",
        "itemB": "Cost performance (budget surplus or deficit)"
      },
      {
        "aspect": "Positive Sign Meaning",
        "itemA": "Positive SV = Ahead of schedule",
        "itemB": "Positive CV = Under budget (favorable surplus)"
      }
    ],
    "examTrap": "SV compares EV with PV; CV compares EV with AC. Both start with EV.",
    "memoryRule": "SV = EV - PV (Schedule). CV = EV - AC (Cost). Value First!"
  },
  {
    "id": "itpm-u3-comp-008",
    "title": "Cost Performance Index (CPI) vs Schedule Performance Index (SPI)",
    "unit": "Unit 3",
    "description": "Comparison of normalized cost efficiency versus schedule progress efficiency.",
    "columns": [
      "Cost Performance Index (CPI)",
      "Schedule Performance Index (SPI)"
    ],
    "criteria": [
      {
        "aspect": "Mathematical Formula",
        "itemA": "CPI = EV / AC",
        "itemB": "SPI = EV / PV"
      },
      {
        "aspect": "Efficiency Focus",
        "itemA": "Financial cost efficiency ($ earned per $ spent)",
        "itemB": "Schedule progression rate (work earned vs planned)"
      },
      {
        "aspect": "Threshold Rule",
        "itemA": "< 1 = Cost overrun; > 1 = Cost underrun (efficient)",
        "itemB": "< 1 = Behind schedule; > 1 = Ahead of schedule"
      }
    ],
    "examTrap": "EV is always the numerator in both indices.",
    "memoryRule": "CPI = EV / AC. SPI = EV / PV. Greater than 1.0 is favorable."
  },
  {
    "id": "itpm-u3-comp-009",
    "title": "Earned Value Management vs Burn-Down Chart",
    "unit": "Unit 3",
    "description": "Integrated baseline progress measurement versus agile effort remaining tracking.",
    "columns": [
      "Earned Value Management (EVM)",
      "Agile Burn-Down Chart"
    ],
    "criteria": [
      {
        "aspect": "Core Question",
        "itemA": "'How much value has been earned relative to money spent?'",
        "itemB": "'How much work/effort remains in the sprint?'"
      },
      {
        "aspect": "Visual Trajectory",
        "itemA": "Ascending S-curves tracking cumulative PV, EV, and AC",
        "itemB": "Descending line burning downward from 100% to 0%"
      },
      {
        "aspect": "Primary Domain",
        "itemA": "Plan-driven, hybrid, and formal contract reporting",
        "itemB": "Daily sprint tracking within agile development teams"
      }
    ],
    "examTrap": "Burn-down charts do not track financial actual cost or earned monetary value.",
    "memoryRule": "EVM = Value earned vs money spent. Burn-down = Remaining effort descending to 0."
  },
  {
    "id": "itpm-u3-comp-010",
    "title": "Top-Down vs Bottom-Up Risk Identification",
    "unit": "Unit 3",
    "description": "Symptom-driven investigation versus task-level vulnerability aggregation.",
    "columns": [
      "Top-Down Risk Identification",
      "Bottom-Up Risk Identification"
    ],
    "criteria": [
      {
        "aspect": "Starting Point",
        "itemA": "Project-level performance symptoms or strategic issues",
        "itemB": "Individual tasks and granular engineering activities"
      },
      {
        "aspect": "Analytical Direction",
        "itemA": "Cascades downward to isolate critical activity causes",
        "itemB": "Aggregates upward to work packages and total project impact"
      },
      {
        "aspect": "Primary Strength",
        "itemA": "Maintains strategic perspective aligned with governance",
        "itemB": "Surfaces hidden ground-level technical vulnerabilities"
      }
    ],
    "examTrap": "Bottom-up aggregates upward; top-down cascades downward from macroscopic symptoms.",
    "memoryRule": "Top-Down = Project symptoms down. Bottom-Up = Task vulnerabilities up."
  },
  {
    "id": "itpm-u3-comp-011",
    "title": "Qualitative vs Quantitative Risk Analysis",
    "unit": "Unit 3",
    "description": "Descriptive prioritization versus mathematical impact modeling.",
    "columns": [
      "Qualitative Risk Analysis",
      "Quantitative Risk Analysis"
    ],
    "criteria": [
      {
        "aspect": "Analytical Approach",
        "itemA": "Descriptive, categorical evaluation (likelihood x severity)",
        "itemB": "Numerical estimation of potential monetary/schedule impacts"
      },
      {
        "aspect": "Core Techniques",
        "itemA": "Checklists, SWOT, assumption analysis, cause-and-effect",
        "itemB": "Mathematical cost projections and EVM-style forecasts"
      },
      {
        "aspect": "Primary Output",
        "itemA": "Prioritized risk list and Likelihood-Impact matrix",
        "itemB": "Numerical cost reserves and probability distributions"
      }
    ],
    "examTrap": "Qualitative prioritizes based on categories; quantitative assigns numerical financial/time values.",
    "memoryRule": "Qualitative = Categories & Likelihood-Impact matrix. Quantitative = Numbers & dollars."
  },
  {
    "id": "itpm-u3-comp-012",
    "title": "Risk Management Process vs Risk Response Strategies",
    "unit": "Unit 3",
    "description": "The four continuous lifecycle management functions versus the four risk treatment options.",
    "columns": [
      "Risk Management Process (I-A-M-M)",
      "Risk Response Strategies (M-A-T-A)"
    ],
    "criteria": [
      {
        "aspect": "Core Identity",
        "itemA": "The four lifecycle management functions",
        "itemB": "The four tactical risk treatment options"
      },
      {
        "aspect": "Constituent Elements",
        "itemA": "Identify, Assess/Analyse, Mitigate/Respond, Monitor/Report",
        "itemB": "Avoid, Mitigate, Transfer, Accept"
      },
      {
        "aspect": "Operational Role",
        "itemA": "Continuous governance cycle executed across all phases",
        "itemB": "Specific response tactics chosen during the Mitigate step"
      }
    ],
    "examTrap": "Do not confuse the 4 management functions (I-A-M-M) with the 4 response options (Avoid/Mitigate/Transfer/Accept).",
    "memoryRule": "Process = I-A-M-M functions. Tactics = Avoid, Mitigate, Transfer, Accept."
  }
];
