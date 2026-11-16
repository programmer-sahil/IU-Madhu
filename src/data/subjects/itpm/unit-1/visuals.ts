export const unit1Visuals = {
  "ironTriangle": {
    "nodes": [
      {
        "id": "scope",
        "name": "Scope",
        "description": "Features, deliverables, and technical boundaries. Increasing scope requires more time or cost.",
        "impact": "More scope \u2192 more time/resources"
      },
      {
        "id": "schedule",
        "name": "Schedule",
        "description": "Timeframe, deadlines, and milestone dates. Compressing schedule requires more resources/cost.",
        "impact": "Shorter schedule \u2192 higher resource cost"
      },
      {
        "id": "cost",
        "name": "Cost",
        "description": "Budget, staff, and financial resources. Reduced budget requires cutting scope or extending time.",
        "impact": "Reduced budget \u2192 smaller realizable scope"
      }
    ]
  },
  "quintupleConstraints": {
    "constraints": [
      {
        "name": "Schedule",
        "category": "Time",
        "description": "Delivery dates, activity durations, and milestone sequencing."
      },
      {
        "name": "Cost",
        "category": "Budget",
        "description": "Internal resource costs, expenditures, and direct project spending."
      },
      {
        "name": "Context",
        "category": "Environment",
        "description": "Operating environment: cultural nuances, organizational politics, customization, and legal/regulatory compliance."
      },
      {
        "name": "Technical",
        "category": "Scope",
        "description": "Technical design, architecture, system scope, and engineering specifications (corresponds to Scope in Iron Triangle)."
      },
      {
        "name": "Financing",
        "category": "Capital",
        "description": "Cash flow timing, capital availability, and institutional funding sources."
      }
    ]
  },
  "hierarchy": {
    "tiers": [
      {
        "level": 1,
        "role": "Project Sponsor / PMO",
        "description": "Business case ownership, funding champions, standard templates & governance support",
        "adjacent": "Executive Governance"
      },
      {
        "level": 2,
        "role": "Project Manager",
        "description": "Overall project accountability, baseline tracking, upward reporting, meeting leadership",
        "adjacent": "Project Management Board (PMB) [Overall / Nontechnical Governance]"
      },
      {
        "level": 3,
        "role": "Technical Coordinator",
        "description": "Technical lead supporting PM, monitors specifications, oversees WPLs, maintains tech library",
        "adjacent": "Technical Management Board (TMB) [Technical Governance & Audits]"
      },
      {
        "level": 4,
        "role": "Work-Package Leaders (WPL)",
        "description": "Coordination, deliverables, and progress reporting of assigned work packages",
        "adjacent": null
      },
      {
        "level": 5,
        "role": "Task Leaders",
        "description": "Specific task-level coordination and day-to-day work guidance",
        "adjacent": null
      },
      {
        "level": 6,
        "role": "Team Members",
        "description": "Specialized technical execution: programming, testing, UI design, documentation",
        "adjacent": null
      }
    ]
  },
  "fivePhases": [
    {
      "phase": 1,
      "name": "Conception / Initiation",
      "focus": "Client need, preliminary requirements, feasibility, sponsor appointed, kick-off, Project Charter signed."
    },
    {
      "phase": 2,
      "name": "Definition / Planning",
      "focus": "Scope baseline (WBS), schedule baseline, cost baseline, risk register, integrated project plan."
    },
    {
      "phase": 3,
      "name": "Launch / Execution",
      "focus": "Realizing deliverables, acquiring infrastructure, quality assurance, stakeholder engagement."
    },
    {
      "phase": 4,
      "name": "Monitor / Control",
      "focus": "PARALLEL EXECUTION: Continuous tracking against baselines, variance calculation, corrective action."
    },
    {
      "phase": 5,
      "name": "Termination",
      "focus": "Final deliverable sign-off, releasing resources, post-implementation review, contract archiving."
    }
  ],
  "riskProcessIADM": [
    {
      "step": 1,
      "code": "I",
      "name": "IDENTIFY",
      "desc": "Detect and catalog potential threats and opportunities in the Risk Register."
    },
    {
      "step": 2,
      "code": "A",
      "name": "ANALYZE",
      "desc": "Evaluate Probability of occurrence \u00d7 Magnitude of impact/benefit."
    },
    {
      "step": 3,
      "code": "D",
      "name": "DECIDE",
      "desc": "Formulate response strategy (M-A-T-A), assign risk owners, and set contingency reserves."
    },
    {
      "step": 4,
      "code": "M",
      "name": "MONITOR",
      "desc": "Continuously track active risks and project triggers throughout execution."
    }
  ],
  "riskResponsesMATA": [
    {
      "code": "M",
      "name": "MITIGATE",
      "action": "Reduce probability and/or damage",
      "example": "Automated regression tests and redundant server failover."
    },
    {
      "code": "A",
      "name": "ACCEPT",
      "action": "Acknowledge and retain low risk",
      "example": "Tolerating minor cosmetic glitches on obsolete browsers."
    },
    {
      "code": "T",
      "name": "TRANSFER",
      "action": "Shift financial liability to third party",
      "example": "Purchasing commercial insurance or cloud provider SLAs."
    },
    {
      "code": "A",
      "name": "AVOID",
      "action": "Cancel or alter activity to eliminate risk",
      "example": "Deliberately canceling an unproven AI module."
    }
  ]
};
