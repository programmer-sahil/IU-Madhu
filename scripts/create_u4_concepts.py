import json, os

u4_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-4"
os.makedirs(u4_dir, exist_ok=True)

summary_sections = [
    {
        "title": "4.1 Vision Keeping",
        "summaryParagraph": "IT projects succeed through people. IT teams are uniquely challenging because they are often temporary, transient, part-time, multidisciplinary, cross-cultural, and geographically dispersed. The project manager must attract expertise, create cohesion, and sustain motivation while managing constraints. Human motivation centers around three primary drivers: Achievement, Affiliation, and Power. A project vision provides an inspiring picture of the future ('Where are we going?'), translated through a concise Vision Statement, operationalized by a practical Mission ('What are we concretely trying to achieve?'), and executed via Strategy ('How will we achieve it?'). Leadership (communicating vision and motivating) and Management (communicating objectives and organizing work) overlap in practice. Transformational leadership inspires through trust and empowerment; Transactional leadership establishes structure, goals, rewards, and control. Best project leaders blend both. Project culture manifests in four structural types (Power, Role, Task, Person) shaped directly (vision, mission, communication) and indirectly (norms, rituals, stories).",
        "keyPoints": [
            "Human factor challenges in IT: temporary duration, transient members, cross-cultural perspectives, multidisciplinary skills, and remote/virtual distribution.",
            "Three core motivators: Achievement (desire for excellence/recognition), Affiliation (belonging and connection), Power (influence/control over people or activities).",
            "The Vision Chain: Vision (inspiring future picture) -> Mission (concrete, measurable purpose) -> Strategy (short/long-term goals and approach).",
            "Vision Statement: concise declaration communicating the big picture, typically framed around action + deliverable + criteria.",
            "Leadership vs Management: Leadership centers on communicating vision and motivating; Management centers on communicating objectives and organizing work. They overlap in project practice.",
            "Transformational vs Transactional: Transformational = vision, trust, empowerment, motivation; Transactional = structure, goals, rewards, recognition, control. Blended leadership combines both.",
            "Caution on Leadership Switching: Abrupt, unprincipled switching between transformational and transactional styles is perceived by teams as manipulative or unstable.",
            "Four Culture Types: Power Culture (PM/central power, informal), Role Culture (formal jobs/hierarchy), Task Culture (expertise intersections), Person Culture (individual is central).",
            "Culture Shaping: Direct mechanisms (vision, mission, formal communication) vs Indirect mechanisms (team norms, rituals, shared stories)."
        ],
        "examInsight": "Distinguish Vision (where we are going) from Mission (concrete goals) and Strategy (how to get there). Never claim transformational is always better; projects need transactional structure as a foundation."
    },
    {
        "title": "4.2 Stakeholder Management",
        "summaryParagraph": "A stakeholder is any individual, group, or organization that may affect, be affected by, or perceive itself to be affected by a project activity, decision, or outcome. Stakeholder management is relationship management, not merely message distribution. The dynamic 6-step lifecycle comprises: Identify -> Analyse -> Classify -> Plan engagement -> Communicate/Engage -> Monitor/Adapt. Stakeholder classification models include the Power-Interest Grid (Manage closely, Keep satisfied, Keep informed, Monitor), Power-Influence and Influence-Impact grids, and the 3-attribute Salience Model (Power, Legitimacy, Urgency) yielding 7 categories (Definite, Dominant, Dangerous, Dependent, Dormant, Discretionary, Demanding). The RACI matrix defines role accountability (Responsible, Accountable, Consulted, Informed). Stakeholders are tracked in a Stakeholder Register combining hard and soft data, and mapped across 5 engagement levels (Unaware, Resistant, Neutral, Supportive, Leading) using an Engagement Matrix (Current vs Desired).",
        "keyPoints": [
            "Stakeholder definition: Anyone who may affect, be affected by, or perceive themselves affected by project outcomes.",
            "Core principle: Stakeholder management is relationship management, not mere broadcast communication.",
            "Six-step continuous process: Identify -> Analyse -> Classify -> Plan engagement -> Communicate/Engage -> Monitor/Adapt.",
            "Power-Interest Grid: High Power/High Interest = MANAGE CLOSELY; High Power/Low Interest = KEEP SATISFIED; Low Power/High Interest = KEEP INFORMED; Low Power/Low Interest = MONITOR / MINIMUM EFFORT.",
            "Salience Model (Mitchell et al.): Evaluates Power, Legitimacy, Urgency.",
            "Seven Salience Categories: Definite/Core (P+L+U), Dominant (P+L), Dangerous (P+U), Dependent (L+U), Dormant (P only), Discretionary (L only), Demanding (U only).",
            "RACI Matrix: Responsible (does work), Accountable (owns/approves - preferably ONE person), Consulted (two-way input), Informed (one-way updates).",
            "Stakeholder Register: Hard data (contact, department, role, knowledge) + Soft data (influence, expectations, key requirements, critical period, engagement actions).",
            "Five Engagement Levels: Unaware -> Resistant -> Neutral -> Supportive -> Leading. Tracked via Current (C) vs Desired (D) matrix."
        ],
        "examInsight": "Memorize the exact Power-Interest quadrants: High P/Low I = Keep Satisfied; Low P/High I = Keep Informed. In RACI, Accountable should preferably be assigned to exactly ONE person."
    },
    {
        "title": "4.3 Conflict Management",
        "summaryParagraph": "Conflict is an intense, protracted disagreement that can become unstructured and destructive. While some structured debate supports innovation and problem-solving, unresolved conflict severely damages project delivery. Sources include competition for limited resources, checks and balances, scheduling pressures, interpersonal/cultural differences, and contract responsibilities. Five conflict styles exist on the assertiveness/cooperativeness spectrum: Withdraw/Avoid (postpone), Force/Direct (win-lose emergency decisions), Compromise/Reconcile (middle ground concessions), Collaborate/Problem-Solve (consensus integration), and Smooth/Accommodate (conceding for harmony). Negotiation is a core PM optimization skill progressing through a four-stage spiral (Intelligence -> Perception -> Strategy -> Communication). Over time, early stages focus on intelligence/perception, while communication becomes dominant in later stages. E-negotiation provides detailed written records but lacks non-verbal cues. Proactive conflict prevention relies on clear contracts, team ground rules, role clarity, early intervention, and trust.",
        "keyPoints": [
            "Conflict nature: Intense, protracted disagreement. Some conflict aids brainstorming, but unresolved conflict damages performance.",
            "Sources of conflict: Limited resource competition, scheduling pressures, interpersonal/cultural working styles, checks & balances, contractual accountability.",
            "Conflict intensity factors: Issue importance, emotional intensity, time pressure, importance to actors, and motivation to resolve.",
            "Five Conflict-Resolution Styles:\n  - Withdraw / Avoid: Retreat/postpone. Use when issue is trivial or outside authority; risk: problem remains.\n  - Force / Direct: Impose decision (win-lose). Use in urgent emergencies; risk: damages relationships.\n  - Compromise / Reconcile: Middle ground. Each side concedes something; risk: partial/temporary solution.\n  - Collaborate / Problem-Solve: Integrate perspectives for win-win consensus. Use for critical issues; risk: takes time.\n  - Smooth / Accommodate: Emphasize common ground and concede position. Use for harmony; risk: underlying issue unaddressed.",
            "Negotiation 4-Stage Spiral: Intelligence (gather facts) -> Perception (interpret meaning) -> Strategy (formulate approach) -> Communication (execute proposals). Repeat until agreement or walk-away.",
            "Negotiation Evolution in Time: Early stages dominated by intelligence/perception; later stages dominated by communication. Strategy remains continuous.",
            "E-Negotiation: Advantages (written record, asynchronous thought, reduced emotional pressure); Challenges (lacks body cues, impersonal/cold, timezone/cultural misinterpretations).",
            "Conflict Prevention Checklist: Ground rules/norms, clear contracts, frequent communication, role clarity, early intervention, trust, clear expectations."
        ],
        "examInsight": "No single conflict style is universally best. Force/Direct is appropriate in emergencies; Collaborate is best for critical durable solutions. Remember the 4 negotiation phases in exact sequence: Intelligence -> Perception -> Strategy -> Communication."
    }
]

concepts = [
    {
        "id": "itpm-u4-conc-001",
        "term": "The Human Factor in IT Projects",
        "simpleExplanation": "Understanding that IT projects succeed through people, collaboration, and social dynamics, not just code and servers.",
        "examDefinition": "The management of people-related dynamics in IT projects characterized by temporary lifecycles, transient and cross-functional teams, distributed virtual work, and multidisciplinary coordination.",
        "whyItMatters": "Most IT project failures stem from communication breakdowns, stakeholder resistance, and team conflict rather than technical inability.",
        "howItWorks": "Project managers balance technical constraints with interpersonal leadership, culture shaping, and proactive relationship management.",
        "examKeywords": ["Human factor", "Temporary teams", "Transient workforce", "Cross-cultural", "Virtual teams", "Social systems"],
        "category": "Human Factor"
    },
    {
        "id": "itpm-u4-conc-002",
        "term": "Three Core Motivators (Achievement, Affiliation, Power)",
        "simpleExplanation": "The three psychological drives that motivate developers and IT professionals.",
        "examDefinition": "Three distinct motivational drivers: Achievement (desire for personal excellence, recognition as an achiever), Affiliation (need for belonging, connection, and team acceptance), and Power (desire for influence, control over people, decisions, or resources).",
        "whyItMatters": "Aligning task assignments with personal motivators drastically improves performance and team retention.",
        "howItWorks": "Achievement-driven developers thrive on challenging technical tasks; affiliation-driven members excel in team bonding; power-driven members seek leadership roles.",
        "examKeywords": ["Achievement", "Affiliation", "Power", "Motivation", "Recognition", "Belonging", "Influence"],
        "category": "Motivation"
    },
    {
        "id": "itpm-u4-conc-003",
        "term": "The Vision Chain (Vision -> Mission -> Strategy)",
        "simpleExplanation": "The hierarchical progression from inspiring future dream to daily measurable work.",
        "examDefinition": "The directional alignment hierarchy: Vision (uplifting, belief-forming picture of the shared future: 'Where are we going?') -> Mission (concrete, measurable, practical expression: 'What are we trying to achieve?') -> Strategy (short- and long-term goals and execution approach: 'How will we achieve it?').",
        "whyItMatters": "Connects high-level executive purpose to the daily coding activities of team members.",
        "howItWorks": "Vision inspires belief; Mission defines measurable milestones; Strategy allocates resources and execution tactics.",
        "examKeywords": ["Vision", "Where are we going", "Mission", "Measurable objectives", "Strategy", "How to achieve it"],
        "category": "Vision Keeping"
    },
    {
        "id": "itpm-u4-conc-004",
        "term": "Transformational vs Transactional Leadership",
        "simpleExplanation": "Inspiring through vision and empowerment versus managing through structure, goals, and rewards.",
        "examDefinition": "Two foundational leadership styles: Transformational leadership inspires followers through a compelling vision, trust, empowerment, personal interaction, and creativity. Transactional leadership establishes a structured environment with clear role expectations, measurable goals, rewards, recognition, and performance control.",
        "whyItMatters": "Projects require transactional structure for baseline control, and transformational leadership for motivation and overcoming crises.",
        "howItWorks": "Best project leaders use transactional behavior as a baseline foundation and layer transformational behaviors for inspiration. Poor switching seems manipulative.",
        "examKeywords": ["Transformational", "Inspiration", "Trust", "Empowerment", "Transactional", "Structure", "Goals", "Rewards", "Blended leadership"],
        "category": "Leadership"
    },
    {
        "id": "itpm-u4-conc-005",
        "term": "Four Project Culture Types (Power, Role, Task, Person)",
        "simpleExplanation": "The four structural personalities an organization or project team adopts.",
        "examDefinition": "Four structural project culture types: 1. Power Culture (central power source, PM-centered, informal communication, common in small projects); 2. Role Culture (formal job descriptions, clear hierarchy, coordination from top, common in large projects); 3. Task Culture (interdisciplinary teams, power based on expertise intersections); 4. Person Culture (individual is central, common in professional associations).",
        "whyItMatters": "Project management practices must match the underlying culture to avoid organizational friction.",
        "howItWorks": "Shaped directly through formal vision/mission and indirectly through informal norms, rituals, and stories.",
        "examKeywords": ["Power Culture", "Role Culture", "Task Culture", "Person Culture", "Direct shaping", "Indirect shaping", "Norms and rituals"],
        "category": "Culture"
    },
    {
        "id": "itpm-u4-conc-006",
        "term": "Power-Interest Grid Classification",
        "simpleExplanation": "A 2x2 matrix categorizing stakeholders by their power and interest to determine engagement strategy.",
        "examDefinition": "A four-quadrant stakeholder classification matrix: 1. High Power / High Interest: MANAGE CLOSELY; 2. High Power / Low Interest: KEEP SATISFIED; 3. Low Power / High Interest: KEEP INFORMED; 4. Low Power / Low Interest: MONITOR / MINIMUM EFFORT.",
        "whyItMatters": "Prevents spending excessive effort on low-impact actors while neglecting powerful decision-makers.",
        "howItWorks": "Maps stakeholders into quadrants and applies the corresponding communication and engagement treatment.",
        "examKeywords": ["Power-Interest Grid", "Manage Closely", "Keep Satisfied", "Keep Informed", "Monitor / Minimum Effort", "2x2 matrix"],
        "commonTrap": "Confusing High Power / Low Interest (Keep Satisfied) with Low Power / High Interest (Keep Informed).",
        "category": "Stakeholder Management"
    },
    {
        "id": "itpm-u4-conc-007",
        "term": "Stakeholder Salience Model (Mitchell et al.)",
        "simpleExplanation": "A 3-attribute Venn model classifying stakeholders based on Power, Legitimacy, and Urgency.",
        "examDefinition": "A stakeholder classification model based on three attributes: Power (ability to impose will), Legitimacy (authorized, socially accepted involvement), and Urgency (time-sensitivity and importance of claim). Produces 7 classes: Definite (all 3), Dominant (P+L), Dangerous (P+U), Dependent (L+U), Dormant (P only), Discretionary (L only), Demanding (U only).",
        "whyItMatters": "Identifies dangerous rogue stakeholders (hackers, activists) and dependent stakeholders who may ally with power centers.",
        "howItWorks": "Overlapping attributes dictate management attention altitude, with Definite stakeholders receiving highest priority.",
        "examKeywords": ["Salience Model", "Power", "Legitimacy", "Urgency", "Definite", "Dominant", "Dangerous", "Dependent", "Dormant", "Discretionary", "Demanding"],
        "category": "Stakeholder Management"
    },
    {
        "id": "itpm-u4-conc-008",
        "term": "RACI Matrix",
        "simpleExplanation": "A responsibility assignment matrix clarifying who does, owns, advises, and watches each task.",
        "examDefinition": "A responsibility assignment matrix defining four stakeholder participation roles: R = Responsible (the doer of work), A = Accountable (the single owner/approver), C = Consulted (two-way expert input), I = Informed (one-way progress updates).",
        "whyItMatters": "Eliminates role ambiguity, prevents multiple competing decision-makers, and ensures single-point accountability.",
        "howItWorks": "Tasks are listed in rows, roles in columns; each intersection is tagged R, A, C, or I. Exactly one 'A' is recommended per task.",
        "examKeywords": ["RACI", "Responsible (does work)", "Accountable (owns/approves)", "Consulted (two-way input)", "Informed (one-way update)", "Single accountability"],
        "category": "Stakeholder Management"
    },
    {
        "id": "itpm-u4-conc-009",
        "term": "Stakeholder Engagement Levels & Matrix",
        "simpleExplanation": "Tracking stakeholder attitudes from hostile resistance to proactive leadership.",
        "examDefinition": "A 5-stage stakeholder attitude progression: Unaware -> Resistant -> Neutral -> Supportive -> Leading. Tracked in an Engagement Matrix comparing Current engagement (C) with Desired engagement (D).",
        "whyItMatters": "Allows project managers to formulate targeted relationship interventions to move resistant stakeholders to supportive or neutral stances.",
        "howItWorks": "Evaluates stakeholder positions during initiation and updates them dynamically across lifecycle phases.",
        "examKeywords": ["Engagement Levels", "Unaware", "Resistant", "Neutral", "Supportive", "Leading", "Current (C)", "Desired (D)"],
        "category": "Stakeholder Management"
    },
    {
        "id": "itpm-u4-conc-010",
        "term": "Five Conflict-Resolution Styles",
        "simpleExplanation": "The five ways to handle project conflict: avoid, force, compromise, collaborate, or accommodate.",
        "examDefinition": "Five conflict management strategies: 1. Withdraw / Avoid (postpone/retreat); 2. Force / Direct (win-lose decision imposition); 3. Compromise / Reconcile (middle-ground concessions); 4. Collaborate / Problem-Solve (win-win consensus integration); 5. Smooth / Accommodate (conceding position for relationship harmony).",
        "whyItMatters": "No single style is universally best; managers must adapt their conflict response based on issue importance, time pressure, and relationship value.",
        "howItWorks": "Urgent crises require Force; trivial/out-of-scope issues allow Avoidance; critical long-term issues require Collaboration.",
        "examKeywords": ["Withdraw/Avoid", "Force/Direct", "Compromise/Reconcile", "Collaborate/Problem-Solve", "Smooth/Accommodate", "Win-lose vs Win-win"],
        "category": "Conflict Management"
    },
    {
        "id": "itpm-u4-conc-011",
        "term": "Negotiation Four-Stage Spiral",
        "simpleExplanation": "Negotiation progresses through four repeating phases: information gathering, making sense, strategy, and communication.",
        "examDefinition": "A 4-phase cyclical negotiation framework: 1. Intelligence (gathering information on issues and parties) -> 2. Perception (interpreting information and discovering meaning) -> 3. Strategy (formulating approach and tactics) -> 4. Communication (executing strategy and exchanging proposals). Repeats until agreement or walk-away.",
        "whyItMatters": "Structures complex project negotiations, ensuring managers prepare thoroughly before exchanging offers.",
        "howItWorks": "Early stages are dominated by intelligence and perception; later stages become dominated by communication. Strategy remains continuous.",
        "examKeywords": ["Negotiation spiral", "Intelligence", "Perception", "Strategy", "Communication", "Temporal shift"],
        "category": "Conflict Management"
    },
    {
        "id": "itpm-u4-conc-012",
        "term": "E-Negotiation & Conflict Prevention",
        "simpleExplanation": "Virtual digital negotiation trade-offs, and proactive methods to stop conflict before it starts.",
        "examDefinition": "E-negotiation provides written audit trails and asynchronous reflection, but lacks non-verbal cues and increases cultural misunderstanding. Conflict prevention relies on ground rules, clear contracts, role clarity, early intervention, and mutual trust.",
        "whyItMatters": "Distributed IT teams negotiate extensively via email and chat, where misinterpretations escalate rapidly into toxic conflict.",
        "howItWorks": "PMs establish team norms early, clarify RACI boundaries, and intervene at early warning symptoms before disputes escalate.",
        "examKeywords": ["E-negotiation", "Written record", "Lack of non-verbal cues", "Conflict prevention", "Ground rules", "Early intervention"],
        "category": "Conflict Management"
    }
]

with open(os.path.join(u4_dir, "concepts.ts"), "w") as f:
    f.write('import { KeyConcept, UnitSummarySection } from "../../../../types";\n\n')
    f.write('export const unit4SummarySections: UnitSummarySection[] = ' + json.dumps(summary_sections, indent=2) + ';\n\n')
    f.write('export const unit4Concepts: KeyConcept[] = ' + json.dumps(concepts, indent=2) + ';\n')

print("Generated Unit 4 concepts.ts")
