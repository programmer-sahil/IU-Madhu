import { MockExam } from "../../../../types";

export const unit4MockExams: MockExam[] = [
  {
    "id": "itpm-u4-mock-01",
    "title": "Unit 4 Mock Exam 1",
    "subtitle": "Vision Keeping, Leadership Dynamics, Stakeholder Engagement, and Conflict Management",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u4-s41-mcq-001",
      "itpm-u4-s41-mcq-002",
      "itpm-u4-s41-mcq-003",
      "itpm-u4-s41-mcq-004",
      "itpm-u4-s41-mcq-005",
      "itpm-u4-s41-mcq-006",
      "itpm-u4-s41-mcq-007",
      "itpm-u4-s41-mcq-008",
      "itpm-u4-s41-mcq-009",
      "itpm-u4-s41-mcq-010",
      "itpm-u4-s41-mcq-011",
      "itpm-u4-s41-mcq-012",
      "itpm-u4-s41-mcq-013",
      "itpm-u4-s41-mcq-014",
      "itpm-u4-s41-mcq-015",
      "itpm-u4-s41-mcq-016",
      "itpm-u4-s41-mcq-017",
      "itpm-u4-s41-mcq-018",
      "itpm-u4-s41-mcq-019",
      "itpm-u4-s41-mcq-020",
      "itpm-u4-s41-mcq-021",
      "itpm-u4-s41-mcq-022",
      "itpm-u4-s41-mcq-023",
      "itpm-u4-s41-mcq-024",
      "itpm-u4-s41-mcq-025",
      "itpm-u4-s41-mcq-026",
      "itpm-u4-s41-mcq-027",
      "itpm-u4-s41-mcq-028",
      "itpm-u4-s41-mcq-029",
      "itpm-u4-s41-mcq-030",
      "itpm-u4-s42-mcq-031",
      "itpm-u4-s42-mcq-032",
      "itpm-u4-s42-mcq-033",
      "itpm-u4-s42-mcq-034",
      "itpm-u4-s42-mcq-035",
      "itpm-u4-s42-mcq-036",
      "itpm-u4-s42-mcq-037",
      "itpm-u4-s42-mcq-038",
      "itpm-u4-s42-mcq-039",
      "itpm-u4-s42-mcq-040"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u4-mock1-desc-01",
        "unit": 4,
        "question": "Explain the relationship among vision, mission and strategy in an IT project. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Define Vision ('Where we want to be')",
          "Define Mission ('What we do and why')",
          "Define Strategy ('How we get there')",
          "Explain hierarchical alignment and Vision Keeping"
        ],
        "modelAnswer": "Vision is 'Where we want to be'\u2014the inspiring future state. Mission is 'What we do and why'\u2014the current core purpose and operational boundaries. Strategy is 'How we get there'\u2014the action roadmap, resource allocation, and technical path. In an IT project, these form an aligned cascade where daily execution must serve the strategic milestones that realize the overarching vision.",
        "rubricItems": [
          {
            "point": "Accurately distinguished Vision, Mission, and Strategy using the Where/What/How model",
            "marksAllotted": 4
          },
          {
            "point": "Connected hierarchy to project team alignment and Vision Keeping",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Never treat vision and mission as identical. Use the Where/What/How distinction clearly."
      },
      {
        "id": "itpm-u4-mock1-desc-02",
        "unit": 4,
        "question": "Compare transformational and transactional leadership. Why may a blended approach be useful? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Define Transformational Leadership",
          "Define Transactional Leadership",
          "Justify Blended Model in IT delivery"
        ],
        "modelAnswer": "Transformational leadership inspires, motivates, stimulates intellectual innovation, and fosters deep intrinsic commitment. Transactional leadership relies on clear structures, explicit contracts, contingent rewards, and management-by-exception to enforce compliance. A blended approach is essential because IT projects demand both visionary inspiration to solve complex problems and transactional discipline to meet strict release milestones, security policies, and architectural standards.",
        "rubricItems": [
          {
            "point": "Accurately contrasted transformational and transactional traits",
            "marksAllotted": 4
          },
          {
            "point": "Justified blended leadership in complex IT environments",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Do not dismiss transactional leadership; explain how it complements transformational inspiration."
      },
      {
        "id": "itpm-u4-mock1-desc-03",
        "unit": 4,
        "question": "Explain the power-interest grid and the management strategy for all four quadrants. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "High Power, High Interest -> Manage Closely",
          "High Power, Low Interest -> Keep Satisfied",
          "Low Power, High Interest -> Keep Informed",
          "Low Power, Low Interest -> Monitor"
        ],
        "modelAnswer": "The Power-Interest grid maps stakeholders across Power (authority/influence) and Interest (concern/impact):\n1. High Power, High Interest: 'Manage Closely'\u2014active partnership, regular involvement in key decisions (e.g. Project Sponsor).\n2. High Power, Low Interest: 'Keep Satisfied'\u2014meet expectations, avoid overwhelming with day-to-day details, ensure no veto exercised (e.g. CFO, Compliance).\n3. Low Power, High Interest: 'Keep Informed'\u2014frequent updates, leverage enthusiasm as testers and champions (e.g. End Users).\n4. Low Power, Low Interest: 'Monitor'\u2014observe with minimal effort for shifts in power or interest (e.g. peripheral suppliers).",
        "rubricItems": [
          {
            "point": "Correctly named all four quadrants and strategies",
            "marksAllotted": 4
          },
          {
            "point": "Provided realistic IT project examples and rationales",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Ensure High Power/Low Interest is Keep Satisfied, not Keep Informed."
      },
      {
        "id": "itpm-u4-mock1-desc-04",
        "unit": 4,
        "question": "Explain the RACI matrix and how it supports stakeholder management. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Define R, A, C, I",
          "State the cardinal rule (single Accountable)",
          "Explain stakeholder benefits (clarity, conflict reduction)"
        ],
        "modelAnswer": "RACI clarifies governance roles: Responsible (the doer who executes), Accountable (the sole owner who signs off and answers for outcome), Consulted (two-way expert advisor before decisions), and Informed (one-way recipient of progress updates). The cardinal rule is that exactly ONE person is Accountable per activity. This eliminates role ambiguity, prevents task duplication, clarifies communication channels, and preempts boundary disputes.",
        "rubricItems": [
          {
            "point": "Correctly defined all 4 RACI roles",
            "marksAllotted": 3
          },
          {
            "point": "Emphasized the single-Accountable rule and stakeholder clarity benefits",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Highlight that multiple people can be Responsible, but only one can be Accountable."
      },
      {
        "id": "itpm-u4-mock1-desc-05",
        "unit": 4,
        "question": "Discuss the five conflict-resolution techniques and state one appropriate use situation for each. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Collaborate / Problem-Solve",
          "Compromise / Reconcile",
          "Force / Direct",
          "Smooth / Accommodate",
          "Withdraw / Avoid"
        ],
        "modelAnswer": "1. Collaborate (Win-Win): Directly confront problem, examine alternatives, build consensus. Best when issues are vital and long-term commitment needed.\n2. Compromise (Give-and-Take): Both parties concede ground for a middle solution. Best when time is short and parties have equal power.\n3. Force (Win-Lose): Authoritative enforcement using power. Best in emergencies or vital security/compliance mandates.\n4. Smooth (Lose-Win): Emphasize agreement, downplay differences. Best when issue is trivial or preserving harmony is paramount.\n5. Withdraw (No Resolution): Postpone issue or retreat. Best for cooling off heated tempers or when PM lacks jurisdiction.",
        "rubricItems": [
          {
            "point": "Listed all 5 conflict techniques with correct orientations",
            "marksAllotted": 3
          },
          {
            "point": "Provided valid, realistic situational use cases for each",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Note that Compromise is not a pure win-win; it involves mutual sacrifice."
      },
      {
        "id": "itpm-u4-mock1-desc-06",
        "unit": 4,
        "question": "A university is implementing a new digital examination platform. The project sponsor wants rapid delivery; the compliance office has high authority but little day-to-day interest; lecturers and students are highly interested but have limited formal power; a vendor controls a critical integration. The development team is distributed across countries. Several developers disagree about priorities, responsibility for testing is unclear, and resistance is increasing because the team does not understand the project's purpose. Using Unit 4 concepts, develop a complete human-factor management response. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Vision & Purpose alignment (Vision Keeping)",
          "Leadership style and project culture",
          "Stakeholder classification & engagement (Power-Interest & Salience)",
          "Governance clarity via RACI",
          "Conflict resolution and cross-cultural e-negotiation"
        ],
        "modelAnswer": "1. Vision Keeping & Alignment: Articulate a clear, compelling project vision statement highlighting academic integrity and seamless student experience. Use Vision Keeping rituals (kickoffs, sprint demos) to connect distributed developers' coding tasks to the broader mission.\n2. Leadership & Culture: Adopt a blended leadership model\u2014transformational leadership to inspire the global engineering team and build Clan/Adhocracy trust, paired with transactional governance to track milestone delivery. Establish explicit virtual working agreements.\n3. Stakeholder Management:\n   - Sponsor: High Power, High Interest -> Manage Closely via weekly steerco.\n   - Compliance Office: High Power, Low Interest -> Keep Satisfied through tailored audit memos.\n   - Lecturers & Students: Low Power, High Interest -> Keep Informed through pilot demos and town halls.\n   - Vendor: Expectant/Dominant stakeholder -> active contract management.\n4. RACI Matrix: Resolve test ambiguity by assigning exactly ONE Accountable (e.g. QA Lead) for release verification, with developers Responsible (R) and lecturers Consulted (C).\n5. Conflict Management & Negotiation: Use Collaborate/Problem-Solve to resolve developer priority disputes. For distributed cross-cultural negotiations with the vendor and remote developers, avoid text 'flaming' by holding synchronous video sessions and structuring dialogue through the 4 phases (Intelligence -> Perception -> Strategy -> Communication).",
        "rubricItems": [
          {
            "point": "Formulated Vision Keeping and blended leadership strategy",
            "marksAllotted": 4
          },
          {
            "point": "Accurately classified all stakeholders on Power-Interest Grid with correct strategies",
            "marksAllotted": 5
          },
          {
            "point": "Constructed RACI governance eliminating role ambiguity",
            "marksAllotted": 4
          },
          {
            "point": "Selected appropriate conflict resolution and e-negotiation safeguards",
            "marksAllotted": 5
          },
          {
            "point": "Demonstrated cohesive, holistic synthesis across Unit 4 themes",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Structure your answer using the sub-headings from the scenario prompt."
      }
    ]
  },
  {
    "id": "itpm-u4-mock-02",
    "title": "Unit 4 Mock Exam 2",
    "subtitle": "Project Culture, Salience Dynamics, RACI Governance, and Negotiation Architecture",
    "totalMarks": 90,
    "timeLimitMinutes": 120,
    "mcqIds": [
      "itpm-u4-s42-mcq-041",
      "itpm-u4-s42-mcq-042",
      "itpm-u4-s42-mcq-043",
      "itpm-u4-s42-mcq-044",
      "itpm-u4-s42-mcq-045",
      "itpm-u4-s42-mcq-046",
      "itpm-u4-s42-mcq-047",
      "itpm-u4-s42-mcq-048",
      "itpm-u4-s42-mcq-049",
      "itpm-u4-s42-mcq-050",
      "itpm-u4-s42-mcq-051",
      "itpm-u4-s42-mcq-052",
      "itpm-u4-s42-mcq-053",
      "itpm-u4-s42-mcq-054",
      "itpm-u4-s42-mcq-055",
      "itpm-u4-s42-mcq-056",
      "itpm-u4-s42-mcq-057",
      "itpm-u4-s42-mcq-058",
      "itpm-u4-s42-mcq-059",
      "itpm-u4-s42-mcq-060",
      "itpm-u4-s42-mcq-061",
      "itpm-u4-s42-mcq-062",
      "itpm-u4-s42-mcq-063",
      "itpm-u4-s42-mcq-064",
      "itpm-u4-s42-mcq-065",
      "itpm-u4-s42-mcq-066",
      "itpm-u4-s42-mcq-067",
      "itpm-u4-s42-mcq-068",
      "itpm-u4-s42-mcq-069",
      "itpm-u4-s42-mcq-070",
      "itpm-u4-s43-mcq-071",
      "itpm-u4-s43-mcq-072",
      "itpm-u4-s43-mcq-073",
      "itpm-u4-s43-mcq-074",
      "itpm-u4-s43-mcq-075",
      "itpm-u4-s43-mcq-076",
      "itpm-u4-s43-mcq-077",
      "itpm-u4-s43-mcq-078",
      "itpm-u4-s43-mcq-079",
      "itpm-u4-s43-mcq-080"
    ],
    "descriptiveQuestions": [
      {
        "id": "itpm-u4-mock2-desc-01",
        "unit": 4,
        "question": "Explain the four structural project-culture types and three indirect mechanisms used to shape culture. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "4 Cultures: Hierarchy, Market, Clan, Adhocracy",
          "3 Indirect Mechanisms: Symbols, Rituals, Stories/Rewards"
        ],
        "modelAnswer": "Four cultures based on Competing Values:\n1. Hierarchy: Internal focus & control; formalized rules, strict processes, predictability.\n2. Market: External focus & control; competitive, driven by quantitative targets and bottom line.\n3. Clan: Internal focus & flexibility; collaborative, family-like cohesion, mentoring, consensus.\n4. Adhocracy: External focus & flexibility; entrepreneurial, innovative, risk-taking.\nIndirect Mechanisms:\n- Symbols: Visual emblems and project dashboards reinforcing shared identity.\n- Rituals: Structured recurring ceremonies (daily standups, retrospectives) reinforcing teamwork.\n- Stories/Rewards: Celebrating heroic technical achievements and modeling desired behaviors.",
        "rubricItems": [
          {
            "point": "Explained all 4 culture types with axes",
            "marksAllotted": 4
          },
          {
            "point": "Described 3 indirect culture-shaping mechanisms",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Make sure Clan is internal/flexible and Adhocracy is external/flexible."
      },
      {
        "id": "itpm-u4-mock2-desc-02",
        "unit": 4,
        "question": "Explain the stakeholder salience model, including the seven stakeholder categories. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "3 Attributes: Power, Legitimacy, Urgency",
          "Latent: Dormant, Discretionary, Demanding",
          "Expectant: Dominant, Dangerous, Dependent",
          "Definite: All 3 attributes"
        ],
        "modelAnswer": "Mitchell, Agle & Wood's Salience Model uses three dynamic attributes: Power (ability to impose will), Legitimacy (moral/legal claim), and Urgency (time-sensitivity):\n1. Latent (1 attribute): Dormant (Power only), Discretionary (Legitimacy only), Demanding (Urgency only).\n2. Expectant (2 attributes): Dominant (Power + Legitimacy), Dangerous (Power + Urgency without Legitimacy), Dependent (Legitimacy + Urgency without Power).\n3. Definite (3 attributes): Power + Legitimacy + Urgency. Requires highest priority management attention.",
        "rubricItems": [
          {
            "point": "Defined Power, Legitimacy, Urgency",
            "marksAllotted": 2
          },
          {
            "point": "Correctly listed and categorized all seven stakeholder classes",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "Highlight that Dangerous stakeholders lack Legitimacy and may resort to coercion."
      },
      {
        "id": "itpm-u4-mock2-desc-03",
        "unit": 4,
        "question": "Describe the stakeholder register and the five stakeholder engagement levels. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Stakeholder Register: Hard data vs Soft data",
          "5 Levels: Unaware, Resistant, Neutral, Supportive, Leading",
          "Assessment Matrix (Current vs Desired gap)"
        ],
        "modelAnswer": "The Stakeholder Register records hard data (name, title, contact, formal project role) and confidential soft data (expectations, fears, political power, attitude).\nThe Five Engagement Levels are:\n1. Unaware: Oblivious to project and impacts.\n2. Resistant: Aware and actively opposing.\n3. Neutral: Aware but neither supportive nor opposing.\n4. Supportive: Aware and actively helping.\n5. Leading: Championing project success.\nThe Engagement Assessment Matrix maps Current (C) against Desired (D) levels; identified gaps trigger targeted engagement interventions.",
        "rubricItems": [
          {
            "point": "Distinguished hard and soft data in stakeholder register",
            "marksAllotted": 2
          },
          {
            "point": "Listed all 5 engagement levels and explained C/D gap analysis",
            "marksAllotted": 4
          }
        ],
        "examinerAdvice": "State that soft data is strictly confidential."
      },
      {
        "id": "itpm-u4-mock2-desc-04",
        "unit": 4,
        "question": "Explain the four phases of negotiation and how their relative importance changes over time. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "4 Phases: Intelligence, Perception, Strategy, Communication",
          "Dynamic spiral evolution over time"
        ],
        "modelAnswer": "Negotiation unfolds in four spiral phases:\n1. Intelligence: Gathering objective facts, requirements, constraints, and BATNA.\n2. Perception: Understanding cognitive frames, emotional triggers, and psychological positions.\n3. Strategy: Defining concession packages, non-negotiables, and trade-off options.\n4. Communication: Direct exchange, dialogue, proposal counter-offers, and formal agreement.\nEvolution: Negotiation is non-linear. Early phases emphasize Intelligence and Perception. As talks advance, Strategy and Communication take center stage. If impasses occur during communication, negotiators must spiral back to Intelligence and Perception to re-evaluate underlying assumptions.",
        "rubricItems": [
          {
            "point": "Accurately named and defined all 4 phases (I-P-S-C)",
            "marksAllotted": 4
          },
          {
            "point": "Explained the spiral, non-linear progression over time",
            "marksAllotted": 2
          }
        ],
        "examinerAdvice": "Do not skip Perception; in IT projects, conflicting paradigms make perception vital."
      },
      {
        "id": "itpm-u4-mock2-desc-05",
        "unit": 4,
        "question": "Evaluate e-negotiation and explain how project managers can prevent conflict before it escalates. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 10,
        "answerStructure": [
          "Evaluate e-negotiation: benefits vs risks (flaming)",
          "Preventive mechanisms: RACI, Charters, Retrospectives"
        ],
        "modelAnswer": "E-negotiation enables asynchronous global reach, written audit trails, and reflection time across time zones. However, lean digital media strips non-verbal cues, impairs trust formation, and risks aggressive 'flaming'.\nConflict Prevention:\n1. Unambiguous RACI charts to eliminate role ambiguity.\n2. Team Charters establishing explicit communication ground rules.\n3. Transparent Information Radiators ensuring zero surprise deadline slips.\n4. Blameless Retrospectives to air micro-frustrations early.",
        "rubricItems": [
          {
            "point": "Balanced evaluation of e-negotiation with psychological risks",
            "marksAllotted": 3
          },
          {
            "point": "Outlined concrete proactive conflict prevention mechanisms",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Mention the phenomenon of 'flaming' in digital communications."
      },
      {
        "id": "itpm-u4-mock2-desc-06",
        "unit": 4,
        "question": "A multinational company is replacing a legacy ERP system. The CFO has strong power but little day-to-day interest. Department heads are highly interested and some are resistant. End users fear job changes. A compliance body can block go-live if controls are inadequate. The implementation partner and internal IT team blame each other for missed deadlines. Most discussions are online across different cultures, and several messages have been misunderstood. As project manager, apply Unit 4 concepts to stabilize the project. [20 marks]",
        "marks": 20,
        "suggestedMinutes": 35,
        "answerStructure": [
          "Stakeholder classification & engagement strategy",
          "RACI clarification for partner and internal IT",
          "Leadership and conflict-resolution style",
          "Structuring negotiation & e-negotiation safeguards",
          "Preventive mechanisms and culture stabilization"
        ],
        "modelAnswer": "1. Stakeholder Classification & Engagement:\n   - CFO: High Power / Low Interest -> Keep Satisfied with concise ROI and risk status reports.\n   - Department Heads: High Power / High Interest -> Manage Closely; transition from Resistant to Supportive by involving them in design workshops (Consulted role).\n   - End Users: Low Power / High Interest -> Keep Informed; address job security fears via comprehensive reskilling programs.\n   - Compliance Body: Definite Stakeholder (Power + Legitimacy + Urgency) -> prioritize controls and audit requirements.\n2. RACI Governance: Formulate an explicit RACI chart between the external implementation partner and internal IT team. Assign exactly ONE Accountable owner per milestone (e.g. Internal IT Lead for Acceptance, Partner for Technical Delivery) to stop finger-pointing.\n3. Conflict Resolution & Leadership: Adopt a Collaborate / Problem-Solve approach to joint troubleshooting. The PM must blend transformational leadership (re-anchoring the shared vision of organizational efficiency) with transactional governance (firm milestone deliverables).\n4. Negotiation & E-Negotiation Safeguards: Transition toxic asynchronous email exchanges to synchronous video calls to restore non-verbal cues. Structure negotiations using the 4 phases (Intelligence -> Perception -> Strategy -> Communication). Establish strict etiquette rules to prevent cross-cultural flaming.\n5. Preventive Architecture: Implement blameless retrospectives, transparent Jira radiators, and weekly standup rituals to cultivate a healthy Clan/Adhocracy culture.",
        "rubricItems": [
          {
            "point": "Classified CFO, department heads, end users, compliance body accurately",
            "marksAllotted": 5
          },
          {
            "point": "Constructed clear RACI separating partner and internal responsibilities",
            "marksAllotted": 4
          },
          {
            "point": "Selected blended leadership and Collaborative conflict resolution",
            "marksAllotted": 4
          },
          {
            "point": "Formulated structured negotiation and e-negotiation safeguards",
            "marksAllotted": 4
          },
          {
            "point": "Recommended holistic preventive cultural mechanisms",
            "marksAllotted": 3
          }
        ],
        "examinerAdvice": "Tie every solution back to a concrete theoretical concept from Unit 4."
      }
    ]
  }
];
