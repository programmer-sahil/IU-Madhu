import { KeyConcept, UnitSummarySection } from "../../../../types";

export const unit1Concepts: KeyConcept[] = [
  {
    "id": "itpm-u1-c-001",
    "term": "Project vs Operations",
    "simpleExplanation": "A project is a temporary effort creating a unique outcome, whereas operations are ongoing and repetitive.",
    "examDefinition": "A project is a temporary endeavor undertaken to create a unique product, service, or result. In contrast, operations are ongoing activities producing repetitive outputs to sustain business functions.",
    "whyItMatters": "Core foundational distinction that determines governance, staffing, budgeting, and accountability.",
    "howItWorks": "Projects have defined start and finish dates with temporary multi-disciplinary teams. Operations follow standardized processes with permanent departmental units.",
    "examKeywords": [
      "Temporary endeavor",
      "Unique deliverable",
      "Operations",
      "Ongoing and repetitive"
    ],
    "commonTrap": "Do not confuse the temporary project with the resulting software product, which is durable.",
    "category": "Foundations"
  },
  {
    "id": "itpm-u1-c-002",
    "term": "Iron Triangle",
    "simpleExplanation": "The three interdependent constraints of Scope, Schedule, and Cost.",
    "examDefinition": "The classic project management model demonstrating the trade-off relationship between Scope, Schedule (time), and Cost (resources/budget). Altering one constraint unavoidably exerts pressure on the other two.",
    "whyItMatters": "Enables realistic stakeholder negotiation when demands change during the project.",
    "howItWorks": "More scope requires more time or cost. Shorter schedule demands additional resources or reduced scope. Reduced budget requires cutting scope or extending the timeline.",
    "examKeywords": [
      "Scope",
      "Schedule",
      "Cost",
      "Trade-offs",
      "Interdependency"
    ],
    "commonTrap": "You cannot increase scope without impacting either schedule, cost, or quality.",
    "category": "Constraints"
  },
  {
    "id": "itpm-u1-c-003",
    "term": "Quintuple Project Constraints",
    "simpleExplanation": "The expanded 5-constraint model: Schedule, Cost, Context, Technical, Financing.",
    "examDefinition": "A five-constraint model (Gransberg & Jeong) that expands the Iron Triangle to encompass: Schedule, Cost, Context (cultural, regulatory, environmental factors), Technical (scope, design, architecture), and Financing (cash flow, funding viability).",
    "whyItMatters": "Prevents IT projects from failing due to external cultural or funding constraints overlooked by the Iron Triangle.",
    "howItWorks": "Technical corresponds to Scope. Context accounts for environmental and compliance realities. Financing tracks cash availability.",
    "examKeywords": [
      "Schedule",
      "Cost",
      "Context",
      "Technical",
      "Financing",
      "Gransberg & Jeong"
    ],
    "commonTrap": "Only use the five in the course book. Do not substitute PMBOK Quality/Risk into this specific model.",
    "category": "Constraints"
  },
  {
    "id": "itpm-u1-c-004",
    "term": "Sociotechnical Systems",
    "simpleExplanation": "IT systems combine technology (hardware/software) with human social and organizational behavior.",
    "examDefinition": "An information system architecture that integrates physical hardware, software code, and human organizational processes/behaviors into an inseparable, interacting whole.",
    "whyItMatters": "Explains why technically flawless code fails if users reject the workflow or if organizational culture is ignored.",
    "howItWorks": "Hardware, software, and human operators co-determine system performance. The course book uses the tablet computer as a prime example.",
    "examKeywords": [
      "Hardware",
      "Software",
      "Human interaction",
      "Social structures",
      "Tablet example"
    ],
    "commonTrap": "Never treat an IT project as purely software code; human and social workflows are integral parts.",
    "category": "Systems Theory"
  },
  {
    "id": "itpm-u1-c-005",
    "term": "Project Charter",
    "simpleExplanation": "The official document authorizing the project to exist and empowering the Project Manager.",
    "examDefinition": "The foundational initiation document approved by the Project Sponsor that formally authorizes the project's existence and grants the Project Manager authority to commit organizational resources.",
    "whyItMatters": "Without a signed charter, the project does not officially exist and resources cannot be legally committed.",
    "howItWorks": "Summarized by: WHY (justification), WHAT (scope), RISK (high-level), WHEN (milestones), MONEY (budget), APPROVAL (criteria), WHO (PM/Sponsor).",
    "examKeywords": [
      "Project Charter",
      "Official authorization",
      "Sponsor sign-off",
      "Resource commitment",
      "WHY WHAT RISK WHEN MONEY APPROVAL WHO"
    ],
    "commonTrap": "The PM does not sign the charter to self-authorize; the Project Sponsor must sign it.",
    "category": "Governance"
  },
  {
    "id": "itpm-u1-c-006",
    "term": "Project Management Board (PMB) vs Technical Management Board (TMB)",
    "simpleExplanation": "PMB governs overall project direction and resources; TMB governs technical decisions and conflicts.",
    "examDefinition": "PMB is responsible for overall progress, resource allocation, budget baselines, plan deviations, and nontechnical disputes. TMB is responsible for technical decisions, unresolved engineering problems, and auditing deliverables against milestone criteria.",
    "whyItMatters": "Separates commercial and strategic steering from complex technical architecture decisions.",
    "howItWorks": "PMB advises the PM. TMB advises the Technical Coordinator. Technical conflicts escalate to TMB; budget and baseline disputes escalate to PMB.",
    "examKeywords": [
      "PMB",
      "TMB",
      "Overall governance",
      "Technical governance",
      "Milestone audits",
      "Nontechnical disputes"
    ],
    "commonTrap": "PMB = overall/nontechnical governance. TMB = technical governance.",
    "category": "Governance"
  },
  {
    "id": "itpm-u1-c-007",
    "term": "Four-Step Risk Process (I-A-D-M)",
    "simpleExplanation": "The continuous lifecycle of risk management: Identify, Analyze, Decide, Monitor.",
    "examDefinition": "The four-step iterative risk management framework: 1. Identify potential uncertainties; 2. Analyze likelihood and severity; 3. Decide on response strategy (M-A-T-A); 4. Monitor triggers and risk status continuously.",
    "whyItMatters": "Ensures risks are surfaced early and handled systematically before turning into crises.",
    "howItWorks": "Identified risks enter the risk register, are scored on probability and impact, assigned a response strategy, and tracked via triggers.",
    "examKeywords": [
      "I-A-D-M",
      "Identify",
      "Analyze",
      "Decide",
      "Monitor",
      "Risk Register"
    ],
    "commonTrap": "Remember the exact sequence: Identify \u2192 Analyze \u2192 Decide \u2192 Monitor.",
    "category": "Risk Management"
  },
  {
    "id": "itpm-u1-c-008",
    "term": "Four Risk Responses (M-A-T-A)",
    "simpleExplanation": "The four ways to treat an identified threat: Mitigate, Accept, Transfer, Avoid.",
    "examDefinition": "The four canonical risk treatment strategies: Mitigate (reduce probability or damage), Accept (tolerate low/acceptable risk), Transfer (shift financial impact to a third party), and Avoid (cancel or alter activity to eliminate risk).",
    "whyItMatters": "Gives project managers structured, deliberate responses rather than improvised panics.",
    "howItWorks": "Mitigate uses automated tests/redundancy; Accept monitors low risk; Transfer uses insurance/vendor SLAs; Avoid cancels unproven high-risk modules.",
    "examKeywords": [
      "Mitigate",
      "Accept",
      "Transfer",
      "Avoid",
      "M-A-T-A",
      "Risk response"
    ],
    "commonTrap": "Transfer does not eliminate the risk event; it only shifts financial liability.",
    "category": "Risk Management"
  }
];

export const unit1SummarySections: UnitSummarySection[] = [
  {
    "title": "1.1 Defining IT Projects",
    "summaryParagraph": "Establishes the fundamental definition of a project as a temporary endeavor producing a unique deliverable, distinguishing it from ongoing routine operations. Explores why IT projects are particularly challenging due to sociotechnical complexity, requirement volatility, rapid technological shifts, and multi-level stakeholder information needs (operational, management knowledge, executive). Introduces the classic Iron Triangle (Scope, Schedule, Cost) and the expanded Quintuple Project Constraints (Schedule, Cost, Context, Technical, Financing).",
    "keyPoints": [
      "Project = Temporary endeavor undertaken to create a unique product, service, or result.",
      "Operations = Ongoing, repetitive activities sustaining business continuity.",
      "IT systems are Sociotechnical Systems linking hardware, software, and human/social behavior.",
      "Information needs: Operational (transactions), Management Knowledge (patterns/insights), Executive (strategic direction).",
      "Iron Triangle: Scope, Schedule, Cost trade-off dynamics.",
      "Quintuple Constraints: Schedule, Cost, Context, Technical, Financing (Gransberg & Jeong)."
    ],
    "examInsight": "CRITICAL EXAM FOCUS: The exact five Quintuple constraints (Schedule, Cost, Context, Technical, Financing) and sociotechnical systems definition."
  },
  {
    "title": "1.2 Overview of Typical Roles and Phases of IT Projects",
    "summaryParagraph": "Details the organizational hierarchy of large plan-driven projects from Sponsor and PMO down to Work-Package Leaders, Task Leaders, and Team Members. Examines the complementary steering roles of the Project Management Board (PMB) for overall governance and Technical Management Board (TMB) for technical governance. Explores the trade-offs of resource pooling (high utilization vs efficiency loss from context switching). Details the Five Generic Phases (Conception, Definition, Launch, Monitor/Control, Termination) highlighting that Monitor & Control runs in parallel. Establishes the Project Charter (WHY + WHAT + RISK + WHEN + MONEY + APPROVAL + WHO) as the official authorization of a project.",
    "keyPoints": [
      "Hierarchy: Sponsor/PMO \u2192 PM \u2192 Technical Coordinator \u2192 WPL \u2192 Task Leader \u2192 Team Member.",
      "PMB governs overall progress, budget, deviations, and nontechnical disputes.",
      "TMB governs technical decisions, engineering conflicts, and milestone audits.",
      "Resource pooling improves specialist utilization but reduces efficiency due to repeated context switching.",
      "Five Generic Phases: Initiation, Planning, Execution, Monitor/Control, Termination.",
      "Monitor & Control runs concurrently with much of project execution.",
      "Signing the Project Charter officially authorizes the project to exist and commits resources."
    ],
    "examInsight": "CRITICAL EXAM FOCUS: PMB vs TMB distinction, Project Charter signing = official authorization, and Monitor & Control running in parallel."
  },
  {
    "title": "1.3 Risks and Challenges of IT Projects",
    "summaryParagraph": "Defines project risk as an uncertain event capable of positive impact (opportunity) or negative impact (threat). Evaluates risk through Probability \u00d7 Impact, emphasizing that risk changes dynamically over time as knowledge increases. Classifies IT risks into Technological, Organizational, and Stakeholder categories. Formulates risk appetite, tolerance, and threshold (below = acceptable, above = not tolerated). Establishes the continuous Four-Step Risk Management Process (I-A-D-M: Identify, Analyze, Decide, Monitor) and the Four Risk Responses (M-A-T-A: Mitigate, Accept, Transfer, Avoid).",
    "keyPoints": [
      "Risk = Uncertain event affecting objectives positively (Opportunity) or negatively (Threat).",
      "Risk Exposure = Probability of occurrence \u00d7 Magnitude of impact/damage.",
      "Risk Threshold: Below is acceptable/tolerable; above is NOT tolerated (demands action).",
      "Four-Step Process: IDENTIFY \u2192 ANALYZE \u2192 DECIDE \u2192 MONITOR (I-A-D-M).",
      "Four Responses: MITIGATE, ACCEPT, TRANSFER, AVOID (M-A-T-A)."
    ],
    "examInsight": "CRITICAL EXAM FOCUS: Positive risk = opportunity; I-A-D-M sequence; M-A-T-A responses; threshold rule."
  },
  {
    "title": "1.4 Role of an IT Project Manager",
    "summaryParagraph": "Delineates the core competencies and stewardship expected of an IT Project Manager. Divides capabilities into Soft/Qualitative (leadership, negotiation, trustworthiness, communication) and Hard/Quantitative (scheduling, baseline tracking, quantitative variance control). Emphasizes that understanding domain problems, leadership, and continuous learning are far more important than being the best programmer. Details how skill demands shift across the lifecycle (HR acquisition early, team management during execution, conflict management throughout). Defines project triggers as early warning symptoms prompting contingency response.",
    "keyPoints": [
      "Soft Skills: Leadership, strategic management, negotiation, communication, trust, conflict resolution.",
      "Hard Skills: Deliverable formulation, schedule construction, quantitative variance control.",
      "Domain problem understanding & continuous learning > pure programming specialization.",
      "Lifecycle shifts: HR acquisition in early phases; team management in execution; conflict management throughout all phases.",
      "Project Triggers: Early warning symptoms indicating an identified risk is emerging."
    ],
    "examInsight": "CRITICAL EXAM FOCUS: PM skills shift across the lifecycle; conflict management is required throughout all phases; domain analysis over coding."
  }
];
