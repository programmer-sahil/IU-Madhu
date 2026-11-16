export interface ScenarioItem {
  id: string;
  title: string;
  category: string;
  type: string;
  context: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  source: string;
}

export const unit4Scenarios: ScenarioItem[] = [
  {
    "id": "itpm-u4-scen-001",
    "title": "The Compliance Regulator's Audit Mandate",
    "category": "Stakeholder Management",
    "type": "power-interest",
    "context": "A nationwide healthcare IT modernization project is three weeks from launch. The regional Data Privacy Authority announces an unscheduled audit of patient record encryption protocols. The Authority does not attend weekly agile standups, but holds legal power to shut down the system launch immediately if non-compliant.",
    "question": "Where does the Data Privacy Authority belong on the Power-Interest Grid, and what is the appropriate management strategy?",
    "options": [
      "High Power, Low Interest -> Keep Satisfied",
      "High Power, High Interest -> Manage Closely",
      "Low Power, High Interest -> Keep Informed",
      "Low Power, Low Interest -> Monitor"
    ],
    "correctIndex": 0,
    "rationale": "The Authority possesses immense formal authority (High Power) to halt the system, but has low interest in day-to-day agile operations. The strategy is 'Keep Satisfied': ensure compliance standards are met rigorously, provide tailored compliance briefings, and avoid overwhelming them with technical sprint minutiae so they do not exercise negative veto power.",
    "source": "Unit 4 \u00b7 Section 4.2 \u2014 Stakeholder Management"
  },
  {
    "id": "itpm-u4-scen-002",
    "title": "The Disgruntled Ex-Lead Developer",
    "category": "Stakeholder Management",
    "type": "salience",
    "context": "A senior software developer was let go last month due to restructuring. They still possess emergency backdoor administrative access to legacy database servers, and they urgently demand six months of severance pay, threatening to lock the production databases within 24 hours.",
    "question": "Under Mitchell, Agle & Wood's Salience Model, how is this stakeholder categorized, and what attributes do they hold?",
    "options": [
      "Dangerous Stakeholder (Power + Urgency, lacking Legitimacy)",
      "Definite Stakeholder (Power + Legitimacy + Urgency)",
      "Dominant Stakeholder (Power + Legitimacy)",
      "Demanding Stakeholder (Urgency only)"
    ],
    "correctIndex": 0,
    "rationale": "The former developer holds coercive leverage (Power via backdoor access) and an immediate time-sensitive claim (Urgency), but lacks legal/moral standing (Legitimacy) to extort the company. By definition, Power + Urgency without Legitimacy equals a 'Dangerous Stakeholder'. Immediate management response must combine security lockdown with legal containment.",
    "source": "Unit 4 \u00b7 Section 4.2 \u2014 Stakeholder Management"
  },
  {
    "id": "itpm-u4-scen-003",
    "title": "RACI Matrix: Production Deployment Sign-Off",
    "category": "Stakeholder Management",
    "type": "raci",
    "context": "The project team is establishing governance for deploying release v2.4 to production. The Project Manager, Lead DevOps Engineer, Product Owner, and QA Lead all want to co-sign the release and share ultimate accountability.",
    "question": "What does RACI governance prescribe regarding the 'Accountable' role for this deployment activity?",
    "options": [
      "Exactly ONE person must be designated as Accountable (A); others should be Responsible (R) or Consulted (C)",
      "All four should be designated as Accountable (A) to guarantee unanimous consensus",
      "Accountability should rotate between the DevOps Engineer and QA Lead each sprint",
      "The entire steering committee should collectively hold Accountable status"
    ],
    "correctIndex": 0,
    "rationale": "The cardinal rule of RACI is that exactly ONE individual must be Accountable (A) for any given activity. Multiple 'A's diffuse responsibility, causing finger-pointing and paralysis during incidents. The DevOps Engineer executes the deployment (Responsible), the QA Lead and PM are Consulted, and the Product Owner (or designated Delivery Head) is the sole Accountable owner.",
    "source": "Unit 4 \u00b7 Section 4.2 \u2014 Stakeholder Management"
  },
  {
    "id": "itpm-u4-scen-004",
    "title": "The Critical Zero-Day Security Vulnerability",
    "category": "Conflict Management",
    "type": "conflict-resolution",
    "context": "A critical zero-day vulnerability (CVSS 10.0) is discovered in the core authentication library 12 hours before a major product marketing launch. The Marketing Director insists on launching on schedule and patching next week. The Chief Information Security Officer (CISO) and Project Manager know a breach could destroy the firm's reputation.",
    "question": "Which conflict-resolution technique must the Project Manager exercise in this emergency situation?",
    "options": [
      "Force / Direct (Win-Lose authoritative enforcement)",
      "Compromise / Reconcile (Postpone patch by 3 days as middle ground)",
      "Smooth / Accommodate (Agree with Marketing to preserve morale)",
      "Withdraw / Avoid (Wait until next week's steerco meeting)"
    ],
    "correctIndex": 0,
    "rationale": "Force / Direct is specifically warranted in emergency situations involving vital compliance, security, or safety issues where fast, decisive action is non-negotiable. Compromise or smoothing would introduce catastrophic security vulnerabilities.",
    "source": "Unit 4 \u00b7 Section 4.3 \u2014 Conflict Management"
  },
  {
    "id": "itpm-u4-scen-005",
    "title": "Architectural Integration Dispute",
    "category": "Conflict Management",
    "type": "conflict-resolution",
    "context": "Two senior software architects disagree strongly on how to integrate the CRM module with the billing engine: Architect A advocates a synchronous REST API, while Architect B insists on an asynchronous event-driven message queue. Both approaches have technical merits and long-term implications, and team commitment to the final choice is vital.",
    "question": "Which conflict-resolution mode provides the best long-term outcome?",
    "options": [
      "Collaborate / Problem-Solve (confront root technical needs and synthesize solutions)",
      "Compromise / Reconcile (use REST for half the endpoints and queue for the other half)",
      "Force / Direct (the PM randomly selects REST to save time)",
      "Withdraw / Avoid (let developers write both implementations independently)"
    ],
    "correctIndex": 0,
    "rationale": "Collaborate / Problem-Solve is the gold standard when both sets of concerns are too important to compromise, and long-term commitment and architectural integrity are critical. The parties openly evaluate technical trade-offs to reach an optimal consensus (win-win).",
    "source": "Unit 4 \u00b7 Section 4.3 \u2014 Conflict Management"
  },
  {
    "id": "itpm-u4-scen-006",
    "title": "The Resentful Global Email Thread",
    "category": "Negotiation",
    "type": "negotiation-spiral",
    "context": "During cross-border negotiation over API schema changes, a developer in Germany emails a blunt critique of a proposal from a developer in Japan, using all caps and exclamation points. The Japanese developer feels publicly humiliated and responds with formal hostility ('flaming'). Negotiations grind to a complete halt.",
    "question": "According to the 4-phase negotiation model and e-negotiation principles, what should the PM do?",
    "options": [
      "Halt text-based negotiation, hold a video/voice call to rebuild perception and trust, and establish communication ground rules",
      "Reply-all enforcing a unilateral deadline using Force/Direct",
      "Ignore the emails and assume cultural differences will sort themselves out",
      "Compromise by splitting the API schema evenly down the middle"
    ],
    "correctIndex": 0,
    "rationale": "This scenario illustrates the classic risk of e-negotiation: lack of non-verbal cues and de-individuation leading to 'flaming'. When communication breaks down, negotiators must cycle back to the Perception and Intelligence phases using richer media (video/voice) to rebuild interpersonal empathy and establish explicit communication protocols.",
    "source": "Unit 4 \u00b7 Section 4.3 \u2014 Conflict Management"
  }
];
