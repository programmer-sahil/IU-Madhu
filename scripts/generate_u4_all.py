import json, os

u4_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-4"
os.makedirs(u4_dir, exist_ok=True)

# 2. IMPORTANT QUESTIONS (20 Q&A items)
qa_items = [
    {
        "id": "itpm-u4-qa-001",
        "unit": 4,
        "topic": "Vision, Mission, and Strategy",
        "question": "Explain the relationship among vision, mission, and strategy in an IT project context. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "In IT project management, vision, mission, and strategy form a connected hierarchy:\n\n1. Vision: Represents 'Where we want to be'—an inspiring mental picture of the desired future state and long-term organizational transformation after the project is delivered.\n2. Mission: Represents 'What we do and why'—the core current purpose, operational scope, and immediate objectives of the project team, defining how it serves business needs today.\n3. Strategy: Represents 'How we get there'—the specific roadmap, resource allocations, architectural approaches, and milestone plans chosen to achieve the mission and realize the vision.\n\nWithout a clear vision, strategy lacks direction; without strategy, vision remains an unachievable dream. Vision Keeping ensures team members align daily coding and architectural decisions with this strategic hierarchy.",
        "keyChecklistPoints": [
            "Vision = 'Where we want to be' (future transformation/destination)",
            "Mission = 'What we do and why' (core purpose and current scope)",
            "Strategy = 'How we get there' (action plan and roadmap)",
            "Explains the alignment between daily execution and strategic vision"
        ],
        "examinerTip": "Avoid treating vision and mission as interchangeable synonyms. Use the 'Where vs What/Why vs How' framework.",
        "source": "Unit 4 · Section 4.1 — Vision Keeping"
    },
    {
        "id": "itpm-u4-qa-002",
        "unit": 4,
        "topic": "Transformational vs Transactional Leadership",
        "question": "Compare transformational and transactional leadership in IT projects. Why is a blended leadership approach recommended? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Transformational and transactional leadership address distinct dimensions of team management:\n\n1. Transformational Leadership: Focuses on inspiring, motivating, and intellectually stimulating team members. The leader acts as a role model, articulates an appealing vision, encourages out-of-the-box problem solving, and offers individualized consideration. This fosters high intrinsic motivation, team cohesion, and innovation.\n2. Transactional Leadership: Focuses on structure, formal contracts, clear milestones, and contingent rewards. The leader monitors performance against predefined criteria, provides rewards for compliance, and exercises corrective intervention (management by exception) when deviations occur.\n\nWhy Blended? Modern IT projects are complex, volatile, and technically demanding. Transformational leadership alone may lack operational rigor and deadline discipline, while transactional leadership alone stifles creativity and intrinsic commitment. A balanced project manager uses transformational behaviors to align the team with the vision and culture, while leveraging transactional mechanisms to enforce coding standards, compliance, and sprint deliveries.",
        "keyChecklistPoints": [
            "Defines transformational leadership (inspiration, vision, intellectual stimulation)",
            "Defines transactional leadership (contracts, contingent rewards, management by exception)",
            "Explains limitation of relying on only one style",
            "Justifies the blended approach for IT environments"
        ],
        "examinerTip": "Do not claim transformational is simply 'good' and transactional is 'bad'. Both are essential tools for a project manager.",
        "source": "Unit 4 · Section 4.1 — Vision Keeping"
    },
    {
        "id": "itpm-u4-qa-003",
        "unit": 4,
        "topic": "Project Culture Types & Indirect Mechanisms",
        "question": "Explain the four structural project-culture types and describe three indirect mechanisms a project manager can use to shape team culture. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 9,
        "modelAnswer": "Based on the Competing Values Framework applied in IT projects, four structural culture types exist:\n1. Hierarchy Culture (Internal / Stability): Focuses on formal procedures, standardized processes, clear rules, and predictability (e.g. banking core systems).\n2. Market Culture (External / Stability): Results-oriented, competitive, focused on hitting quantitative targets, customer delivery, and market dominance.\n3. Clan Culture (Internal / Flexibility): Collaborative, family-like environment emphasizing shared values, cohesion, mentoring, open communication, and consensus.\n4. Adhocracy Culture (External / Flexibility): Dynamic, entrepreneurial, risk-taking environment centered on innovation, experimentation, and rapid adaptability.\n\nIndirect Mechanisms to Shape Culture:\n- Symbols: Physical or digital artifacts (e.g., project logos, team dashboards, visual boards) representing shared identity.\n- Rituals & Ceremonies: Structured recurring events such as daily stand-ups, sprint demos, and retrospectives that reinforce collective norms.\n- Stories & Legends: Sharing anecdotes about past team achievements, overcoming technical hurdles, or customer delight to establish behavioral benchmarks.\n- Role-Modeling & Recognition: Publicly praising behaviors that exemplify desired cultural values (e.g. peer code reviews, transparent blameless post-mortems).",
        "keyChecklistPoints": [
            "Names and defines 4 cultures: Hierarchy, Market, Clan, Adhocracy",
            "Identifies internal/external and flexibility/control dimensions",
            "Describes 3 indirect mechanisms: symbols, rituals, stories, or recognition"
        ],
        "examinerTip": "Ensure you correctly contrast Clan (internal/flexible) with Adhocracy (external/flexible).",
        "source": "Unit 4 · Section 4.1 — Vision Keeping"
    },
    {
        "id": "itpm-u4-qa-004",
        "unit": 4,
        "topic": "Stakeholder Identification",
        "question": "Identify key sources and methods used for stakeholder identification in IT projects. Why must identification be continuous? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Stakeholder identification systematically discovers all individuals, groups, or organizations that may affect or be affected by the IT project.\n\nKey Sources & Methods:\n1. Project Charter: Identifies the sponsor, key customer contacts, initial business owners, and approved governance bodies.\n2. Procurement & Vendor Contracts: Identifies external suppliers, third-party API providers, and consulting partners.\n3. Enterprise Environmental Factors (EEFs): Organizational charts, industry regulations, compliance bodies, and union agreements.\n4. Stakeholder Interviews & Brainstorming: Structured conversations with business analysts, system architects, and subject matter experts.\n5. Lesson Learned Repositories & OPAs: Records from past historical IT initiatives revealing unexpected stakeholders.\n\nWhy Continuous? IT projects operate in dynamic environments. Over the project lifecycle, organizational restructuring occurs, key personnel leave, regulatory mandates emerge, and technical architecture decisions introduce new external vendors or dependent internal teams. If identification stops after initiation, unmanaged stakeholders will arise late, causing costly scope churn and resistance.",
        "keyChecklistPoints": [
            "Identifies sources: Charter, contracts, EEFs, interviews, historical repositories",
            "Explains why identification is an iterative, ongoing process",
            "Mentions risks of failing to update stakeholder registers (scope churn, late resistance)"
        ],
        "examinerTip": "State clearly that stakeholder identification is not a one-time initiation event.",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-005",
        "unit": 4,
        "topic": "Stakeholder Register: Hard vs Soft Data",
        "question": "Describe the structure of a Stakeholder Register. Distinguish between 'hard data' and 'soft data' and explain how soft data should be handled. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "A Stakeholder Register is the central management artifact documenting all identified stakeholders, their classification, and planned engagement strategies.\n\nStructure:\n1. Hard Data (Objective / Public):\n   - Identification details: Full name, title, department, organization, contact information.\n   - Project role: Project sponsor, technical lead, business analyst, vendor representative.\n   - Formal authority and decision rights.\n\n2. Soft Data (Subjective / Sensitive):\n   - Internal motivations, political interests, and personal expectations.\n   - Perceived threats (e.g. fear of job displacement due to automation).\n   - Power, interest, and influence ratings; stakeholder sentiment (resistant, supportive).\n   - Potential alliances and hidden conflicts.\n\nHandling Soft Data:\nBecause soft data contains sensitive behavioral assessments and political evaluations, it must be handled with strict confidentiality. It should not be posted publicly on shared team wikis or circulated openly. Only authorized project leadership should access soft data to avoid damaging interpersonal trust and causing political backlash.",
        "keyChecklistPoints": [
            "Defines purpose of the Stakeholder Register",
            "Lists components of hard data (name, role, department, contact)",
            "Lists components of soft data (expectations, political influence, resistance, fears)",
            "Highlights confidentiality and access restriction for soft data"
        ],
        "examinerTip": "Explicitly mention confidentiality when discussing soft data.",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-006",
        "unit": 4,
        "topic": "Power-Interest Grid",
        "question": "Explain the Power-Interest Grid and state the management strategy for all four quadrants. Provide an IT project example for each. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 9,
        "modelAnswer": "The Power-Interest Grid maps stakeholders across two dimensions: Level of Authority/Power (Y-axis) and Level of Concern/Interest (X-axis). It dictates four distinct engagement strategies:\n\n1. High Power, High Interest -> 'Manage Closely':\n   - Strategy: Involve heavily in governance, decision-making, and regular steerco meetings; address concerns proactively.\n   - IT Example: Executive Project Sponsor, Lead Product Owner.\n\n2. High Power, Low Interest -> 'Keep Satisfied':\n   - Strategy: Keep informed of major milestones, ensure requirements are fulfilled, avoid overwhelming with day-to-day tactical details, ensure they do not become blockers.\n   - IT Example: Chief Financial Officer (CFO), Data Protection Officer / Compliance Board.\n\n3. Low Power, High Interest -> 'Keep Informed':\n   - Strategy: Provide frequent updates, transparent demos, and user forums; leverage their enthusiasm as champions and testers.\n   - IT Example: End-user departmental clerks, junior software developers.\n\n4. Low Power, Low Interest -> 'Monitor':\n   - Strategy: Track periodically with minimal effort; observe if their power or interest levels shift.\n   - IT Example: General employees unaffected by the new system, peripheral hardware suppliers.",
        "keyChecklistPoints": [
            "Names 4 quadrants: Manage Closely, Keep Satisfied, Keep Informed, Monitor",
            "Accurately maps power and interest levels to each quadrant",
            "Provides an appropriate IT project example for each"
        ],
        "examinerTip": "Do not confuse 'Keep Satisfied' (High Power/Low Interest) with 'Keep Informed' (Low Power/High Interest).",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-007",
        "unit": 4,
        "topic": "Stakeholder Salience Model",
        "question": "Explain the Stakeholder Salience Model (Mitchell, Agle & Wood) including its three dimensions and the seven stakeholder classes. [8 marks]",
        "marks": 8,
        "suggestedMinutes": 12,
        "modelAnswer": "The Stakeholder Salience Model categorizes stakeholders based on the presence or absence of three dynamic attributes:\n1. Power: The ability to impose one's will on the project (coercive, utilitarian, or normative).\n2. Legitimacy: The perceived appropriateness, legality, or moral right of a stakeholder's claim.\n3. Urgency: The degree to which a stakeholder's claim calls for immediate attention (time-sensitive and critical).\n\nSeven Stakeholder Classes:\nA. Latent Stakeholders (1 attribute — low salience):\n   1. Dormant (Power only): Possesses power to impose will but lacks legitimate claim or urgent agenda (e.g. prospective acquirer).\n   2. Discretionary (Legitimacy only): Legitimate claim but lacks power or urgency (e.g. charitable beneficiaries of corporate CSR).\n   3. Demanding (Urgency only): Highly vocal and urgent claims but lacks formal power and legitimacy (e.g. lone online complainers).\n\nB. Expectant Stakeholders (2 attributes — moderate salience):\n   4. Dominant (Power + Legitimacy): Strong formal authority and legitimate expectations; typically form the steering committee.\n   5. Dangerous (Power + Urgency): Possesses coercive leverage and urgent claims without legitimacy; may use strikes, sabotage, or protests.\n   6. Dependent (Legitimacy + Urgency): Urgent and legitimate needs but lacks power; relies on advocates or sponsors to enforce claims (e.g. local residents, end-user clerks).\n\nC. Highly Salient (3 attributes):\n   7. Definite (Power + Legitimacy + Urgency): The highest priority; requires immediate, comprehensive management attention (e.g. compliance regulator issuing an immediate injunction or the primary project sponsor during a critical crisis).",
        "keyChecklistPoints": [
            "Defines Power, Legitimacy, and Urgency",
            "Latent (1 attribute): Dormant, Discretionary, Demanding",
            "Expectant (2 attributes): Dominant, Dangerous, Dependent",
            "Definite (3 attributes): All three dimensions combined",
            "Identifies dynamic nature of the model (attributes can shift over time)"
        ],
        "examinerTip": "Memorize the 3 groups: Latent (1), Expectant (2), Definite (3). Dangerous is Power + Urgency without Legitimacy.",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-008",
        "unit": 4,
        "topic": "RACI Matrix",
        "question": "Explain the RACI matrix and its role in project governance. What is the cardinal rule regarding the 'Accountable' role? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "The RACI matrix is a linear responsibility chart that clarifies roles and responsibilities across project deliverables and work activities.\n\nFour Roles:\n- R — Responsible: The 'doer' who performs the actual execution of the task or activity.\n- A — Accountable: The individual with ultimate ownership, decision authority, and veto power. The person who signs off on the work and answers for its success or failure.\n- C — Consulted: Subject matter experts who provide vital two-way input and advisory feedback before decisions are finalized or tasks completed.\n- I — Informed: Stakeholders who are kept updated on progress, decisions, or milestones through one-way communication.\n\nCardinal Rule of RACI:\nThere must be exactly ONE 'A' (Accountable) per activity or deliverable.\n- If multiple people are Accountable, responsibility is diffused, leading to finger-pointing, slow decision-making, and paralysis.\n- If zero people are Accountable, no one takes ownership, causing deliverables to slip.",
        "keyChecklistPoints": [
            "Defines all 4 roles: Responsible, Accountable, Consulted, Informed",
            "Distinguishes two-way Consulted from one-way Informed",
            "States the cardinal rule: Exactly ONE person Accountable per task",
            "Explains consequences of having multiple or zero Accountables"
        ],
        "examinerTip": "Always state: 'Multiple people can be Responsible, but exactly ONE person can be Accountable.'",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-009",
        "unit": 4,
        "topic": "Stakeholder Engagement Levels",
        "question": "Describe the five stakeholder engagement levels and how a project manager uses the Stakeholder Engagement Assessment Matrix. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Stakeholder engagement describes the degree of active involvement, support, and collaboration exhibited by stakeholders.\n\nFive Engagement Levels:\n1. Unaware: Uninformed about the project and its potential impacts.\n2. Resistant: Aware of the project and its potential impacts, but actively opposes the change or fears negative consequences.\n3. Neutral: Aware of the project, but neither supportive nor resistant.\n4. Supportive: Aware of the project and its impacts, and actively supports its goals and deliverables.\n5. Leading: Aware of the project and its impacts, and actively champions the project to ensure successful delivery.\n\nStakeholder Engagement Assessment Matrix:\nThe matrix plots stakeholders against these five levels, marking 'C' for Current engagement and 'D' for Desired engagement.\n- Gaps between C and D (e.g., a key business head who is currently Resistant but needs to be Supportive) trigger targeted communication actions, training, or incentives to close the gap.",
        "keyChecklistPoints": [
            "Lists 5 levels: Unaware, Resistant, Neutral, Supportive, Leading",
            "Defines each level accurately",
            "Explains C (Current) and D (Desired) notation in the assessment matrix",
            "Explains how gaps trigger proactive management actions"
        ],
        "examinerTip": "Memorize the sequence: Unaware -> Resistant -> Neutral -> Supportive -> Leading.",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-010",
        "unit": 4,
        "topic": "Sources of Conflict in IT Projects",
        "question": "What are the primary sources of conflict in IT projects? How does project phase influence conflict types? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Conflict is natural in IT projects due to competing priorities, limited resources, and intellectual ambiguity.\n\nPrimary Sources of Conflict:\n1. Project Priorities & Scope: Disagreements over which features to build first, feature bloat, and technical debt.\n2. Schedule & Deadlines: Clashes between ambitious marketing/business delivery targets and realistic engineering delivery timeframes.\n3. Resource Allocation: Competition for top developers, DevOps engineers, and specialized infrastructure across multiple concurrent projects.\n4. Technical Opinions & Architecture: Debates over programming languages, framework selection, monolithic vs microservice architecture, and technical trade-offs.\n5. Administrative Procedures & Governance: Resistance to project reporting overhead, agile ceremonies, or documentation standards.\n6. Cost & Budget: Budget overruns, unexpected licensing costs, and vendor billing disputes.\n7. Personalities & Culture: Interpersonal clashes, communication style mismatches, and cultural differences across distributed virtual teams.\n\nPhase Influence:\n- Early phases: Conflicts center on priorities, scope, and resource commitments.\n- Execution phases: Conflicts shift toward schedules, technical trade-offs, and testing bottlenecks.\n- Closing phases: Conflicts center on delivery deadlines, acceptance criteria, and operational handoff.",
        "keyChecklistPoints": [
            "Lists top conflict sources (schedule, priorities, resources, technical opinions, cost, personality)",
            "Explains that schedules and resource allocation are dominant conflict sources",
            "Discusses how conflict types evolve across project lifecycle phases"
        ],
        "examinerTip": "Mention that schedule and resource availability are consistently the highest sources of project conflict.",
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    },
    {
        "id": "itpm-u4-qa-011",
        "unit": 4,
        "topic": "Five Conflict Resolution Techniques",
        "question": "Detail the five conflict-resolution techniques according to the course curriculum. Provide an appropriate scenario for each. [8 marks]",
        "marks": 8,
        "suggestedMinutes": 12,
        "modelAnswer": "The course identifies five standard conflict-resolution techniques balancing assertiveness and cooperativeness:\n\n1. Collaborate / Problem-Solve (Win-Win):\n   - Description: Parties confront the problem directly, examine root causes, openly share information, and develop a mutually beneficial solution.\n   - Best used: When issues are critical, consensus and buy-in are vital, and diverse perspectives must be merged.\n   - IT Scenario: Integrating two disparate architectural modules where lead architects collaborate to design a unified API interface.\n\n2. Compromise / Reconcile (Lose-Lose / Give-and-Take):\n   - Description: Both parties give up something to reach a mutually acceptable middle ground. Offers partial satisfaction.\n   - Best used: When time is limited, both parties have equal power, and a temporary or workable solution is needed.\n   - IT Scenario: Negotiating sprint scope where business drops two non-critical user stories so developers can meet the sprint deadline.\n\n3. Force / Direct (Win-Lose):\n   - Description: Pushing one's viewpoint at the expense of others, using formal authority or power.\n   - Best used: In emergencies, vital regulatory/security compliance, or to enforce unpopular mandatory policies.\n   - IT Scenario: PM mandates immediate application of a critical zero-day security patch despite developer complaints about disruption.\n\n4. Smooth / Accommodate (Lose-Win):\n   - Description: Emphasizing areas of agreement while playing down areas of difference to maintain harmony.\n   - Best used: When the issue is trivial, matters far more to the other party, or to preserve an important relationship.\n   - IT Scenario: Accepting a team member's preferred UI button color scheme to keep morale high.\n\n5. Withdraw / Avoid (No Resolution):\n   - Description: Retreating from an actual or potential conflict situation; postponing the issue.\n   - Best used: When emotions are overheated, more information is needed, or the PM has no authority to resolve it.\n   - IT Scenario: Calling a 1-hour recess during an angry architectural debate to allow tempers to cool before resuming.",
        "keyChecklistPoints": [
            "Names all 5 techniques: Collaborate, Compromise, Force, Smooth, Withdraw",
            "Identifies win/lose orientation for each (Win-Win, Give-and-take, Win-Lose, Lose-Win, No resolution)",
            "Gives a concrete IT scenario for each technique"
        ],
        "examinerTip": "Avoid stating that Compromise is the 'best' solution; Collaborate is the gold standard because it is win-win, whereas compromise involves mutual loss.",
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    },
    {
        "id": "itpm-u4-qa-012",
        "unit": 4,
        "topic": "Four-Phase Negotiation Spiral",
        "question": "Explain the four phases of negotiation in IT projects and how their relative emphasis evolves. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Negotiation in IT projects follows a dynamic four-phase spiral model:\n\n1. Intelligence Phase: Information gathering. Parties identify the core issues, gather factual technical and financial data, assess counterparty constraints, and determine their Best Alternative to a Negotiated Agreement (BATNA).\n2. Perception Phase: Cognitive framing. Parties assess how each side perceives the conflict, identifying subjective biases, emotional triggers, risk tolerances, and underlying interests versus stated positions.\n3. Strategy Phase: Formulation of options and tactical trade-offs. Negotiators define concession strategies, identify non-negotiables, package proposals, and determine acceptable settlement ranges.\n4. Communication Phase: Direct interaction and dialogue. Parties exchange proposals, debate options, make concessions, and draft formal agreements.\n\nEvolution Over Time:\nNegotiation is not linear; it spirals cyclically. Early stages require heavy emphasis on Intelligence and Perception. As talks advance, Strategy and Communication dominate. However, if communication breaks down, parties must cycle back to Intelligence and Perception to re-evaluate assumptions before re-engaging in communication.",
        "keyChecklistPoints": [
            "Names 4 phases: Intelligence, Perception, Strategy, Communication",
            "Defines activities in each phase",
            "Explains the cyclical/spiral nature of negotiation",
            "Explains why early phases focus on intelligence/perception while later phases focus on communication"
        ],
        "examinerTip": "Do not skip the Perception phase; in IT, differing technical paradigms make cognitive perception critical.",
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    },
    {
        "id": "itpm-u4-qa-013",
        "unit": 4,
        "topic": "E-Negotiation: Benefits and Limitations",
        "question": "Evaluate e-negotiation in distributed IT projects. Discuss its advantages, its psychological risks, and recommendations to mitigate risks. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 9,
        "modelAnswer": "E-negotiation conducts negotiations via digital media (email, instant messaging, video calls, collaboration platforms).\n\nAdvantages:\n- Global Reach & Time Zones: Enables cross-border participation across disparate time zones without travel costs.\n- Reflection & Documentation: Asynchronous communication (email) allows negotiators time to compose reasoned replies and automatically generates a written audit trail.\n- Level Playing Field: Diminishes physical intimidation, status dominance, and charismatic persuasion.\n\nPsychological Risks & Limitations:\n- Absence of Non-Verbal Cues: In text-based communication, tone, facial expressions, and body language are missing, leading to frequent misinterpretations.\n- Flaming & De-individuation: Physical distance reduces empathy, increasing the likelihood of aggressive, blunt, or inflammatory language ('flaming').\n- Low Trust & Social Bonding: Difficulty building interpersonal rapport, leading to transactional and adversarial stances.\n\nMitigation Recommendations:\n- Establish 'Rich Media' first: Use high-definition video calls or an initial face-to-face kickoff to build personal rapport before text negotiations.\n- Ground Rules: Enforce strict professional etiquette and etiquette guidelines.\n- Verification: Rephrase and confirm agreements explicitly in writing before concluding.",
        "keyChecklistPoints": [
            "Lists advantages (global reach, audit trail, reflection time, reduced intimidation)",
            "Lists risks (lack of non-verbal cues, flaming, low trust, misinterpretation)",
            "Provides actionable mitigation recommendations (video first, ground rules, rephrasing)"
        ],
        "examinerTip": "Remember the term 'flaming'—a key psychological phenomenon in e-negotiation mentioned in course materials.",
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    },
    {
        "id": "itpm-u4-qa-014",
        "unit": 4,
        "topic": "Proactive Conflict Prevention",
        "question": "Explain how an IT project manager can prevent destructive conflict before it escalates. Detail four concrete preventive mechanisms. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Proactive conflict prevention focuses on establishing clear structures, transparent expectations, and open communication channels before friction turns into destructive disputes.\n\nFour Concrete Preventive Mechanisms:\n1. Unambiguous RACI Charting: Explicitly defining exactly who is Accountable, Responsible, Consulted, and Informed for every work package eliminates role ambiguity and territorial disputes.\n2. Team Charter & Working Agreements: Collaboratively establishing ground rules during project kickoff regarding communication channels, response times, code review standards, and meeting etiquette.\n3. Transparent Information Radiators & Open Communication: Maintaining real-time visibility into backlogs, burn-down charts, and sprint goals prevents rumors, misinformation, and surprise deadline slips.\n4. Regular Retrospectives & Psychological Safety: Hosting blameless sprint retrospectives where team members can air micro-frustrations early before they fester into major interpersonal grievances.",
        "keyChecklistPoints": [
            "Contrasts proactive prevention with reactive dispute handling",
            "Explains RACI matrix to eliminate role ambiguity",
            "Explains Team Charter / Working Agreements for behavioral norms",
            "Explains transparent communication and regular retrospectives"
        ],
        "examinerTip": "Frame your answer around governance clarity and psychological safety.",
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    },
    {
        "id": "itpm-u4-qa-015",
        "unit": 4,
        "topic": "Salience Dynamics: Dangerous Stakeholders",
        "question": "In the Salience Model, what constitutes a 'Dangerous' stakeholder? How should an IT project manager manage them? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "In Mitchell, Agle & Wood's Salience Model, a Dangerous Stakeholder possesses two attributes: Power and Urgency, but lacks Legitimacy.\n\nCharacteristics:\n- Because they have power and urgent claims but lack legitimate authority or moral standing, they may resort to coercive tactics, illegal pressure, media leaks, sabotage, or strikes to force their demands.\n- IT Example: A disgruntled former developer who retains backdoor administrative credentials and demands ransom, or an activist group launching a DDoS attack against a project launch.\n\nManagement Strategy:\n1. Immediate Acknowledgment: Address their urgent demands promptly without necessarily capitulating; ignoring them accelerates hostility.\n2. Security & Containment: Enforce strict access control, revoke unauthorized privileges, and engage corporate legal and cybersecurity teams.\n3. Channeling Toward Legitimacy: Seek to understand the underlying grievance and steer the interaction into recognized, legitimate channels (e.g. structured dispute arbitration).\n4. Constant Monitoring: Maintain high vigilance because dangerous stakeholders can inflict catastrophic reputational or technical damage.",
        "keyChecklistPoints": [
            "Defines Dangerous = Power + Urgency without Legitimacy",
            "Explains risk of coercive or destructive tactics",
            "Outlines management approach: prompt engagement, containment, legal/security measures, channeling to legitimacy"
        ],
        "examinerTip": "Never say 'ignore them because they lack legitimacy.' Lacking legitimacy with power and urgency makes them dangerous, not ignorable.",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-016",
        "unit": 4,
        "topic": "Transitioning Resistant Stakeholders",
        "question": "Outline a structured strategy for transitioning a key departmental head from 'Resistant' to 'Supportive' in an enterprise IT rollout. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Enterprise IT rollouts (e.g. ERP, CRM) frequently trigger resistance due to fear of loss of autonomy, workflow disruption, or fear of obsolescence.\n\nTransition Strategy:\n1. Root-Cause Discovery (Soft Data): Conduct confidential one-on-one discovery sessions to understand personal fears, past bad project experiences, and specific departmental pain points.\n2. Value Demonstration & Alignment: Tailor the project vision to highlight direct departmental benefits (e.g., eliminating tedious manual reconciliation, providing real-time analytics).\n3. Active Participation (Consulted / Responsible): Involve the department head as a member of the project steering committee or designate their trusted deputy as a lead subject matter expert in design workshops.\n4. Comprehensive Training & Safety Net: Provide tailored training programs, dedicated transition support, and a guaranteed contingency fallback plan to reduce anxiety about operational failure.\n5. Recognition & Milestone Celebrations: Publicly acknowledge the department's contributions during sprint reviews and milestone celebrations, elevating their status to an internal project champion.",
        "keyChecklistPoints": [
            "Identifies common causes of resistance (fear of change, workflow disruption)",
            "Confidential discovery of root cause using soft data",
            "Involvement in design/governance (Consulted role)",
            "Targeted training and public recognition to foster ownership"
        ],
        "examinerTip": "Focus on empathy, involvement, and addressing underlying self-interest.",
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
    },
    {
        "id": "itpm-u4-qa-017",
        "unit": 4,
        "topic": "Virtual & Cross-Cultural Team Dynamics",
        "question": "What unique leadership challenges arise in virtual, cross-cultural IT teams, and how can they be overcome? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Virtual and cross-cultural IT teams introduce spatial, temporal, and cultural friction.\n\nChallenges:\n1. Communication Asynchrony: Time-zone differences cause lag in technical decision-making and reduce spontaneous interactions.\n2. Cultural Misunderstandings: Divergent cultural norms regarding hierarchy, directness of feedback, and conflict avoidance can lead to offense or hidden dissent.\n3. Trust Deficit: The absence of physical proximity impairs informal bonding, resulting in transactional, low-trust relationships.\n\nOvercoming Strategies:\n1. Hybrid Communication Cadence: Balance asynchronous updates (Jira, documentation) with synchronous video check-ins and shared overlapping 'core hours'.\n2. Cultural Sensitivity Training & Explicit Norms: Establish clear team working agreements that account for varying communication styles (e.g. encouraging quiet members to contribute in writing).\n3. Virtual Social Rituals: Create virtual water-cooler channels, informal coffee chats, and celebrate cultural holidays across team regions.\n4. Transparent Shared Vision: Keep the project vision visible on central dashboards to unify distributed teams under a single shared purpose.",
        "keyChecklistPoints": [
            "Identifies challenges: time-zone lag, cultural communication norms, trust deficit",
            "Recommends overlapping core hours and balanced communication tools",
            "Recommends team working agreements and cultural empathy",
            "Recommends virtual team-building rituals"
        ],
        "examinerTip": "Link this back to indirect mechanisms of culture (rituals, symbols).",
        "source": "Unit 4 · Section 4.1 — Vision Keeping"
    },
    {
        "id": "itpm-u4-qa-018",
        "unit": 4,
        "topic": "Alignment: Project vs Organizational Culture",
        "question": "Discuss the potential friction when an agile IT project operates within a rigid hierarchical parent organization. How should the PM navigate this? [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "Friction emerges when the cultural values of the project team clash with the broader parent enterprise:\n\nCultural Clash:\n- The Agile Project Team operates in an Adhocracy/Clan culture: prioritizing rapid iteration, self-organizing autonomy, open communication, and empirical feedback.\n- The Parent Organization operates in a Hierarchy culture: demanding fixed upfront annual budgets, strict gate reviews, bureaucratic sign-offs, and risk aversion.\n\nNavigation Strategy for the PM:\n1. Act as a Cultural 'Buffer' / Translator: Translate agile metrics (burn-down charts, sprint velocity) into executive hierarchical terminology (milestones, cost variance, risk registers).\n2. Dual Governance Framework: Establish an agreed interface where internal team sprints remain flexible while formal monthly steering committees receive standardized reports.\n3. Incremental Delivery of Business Value: Deliver working software early to build credibility and demonstrate that agile practices reduce enterprise risk rather than introduce chaos.\n4. Secure Executive Sponsorship: Leverage a high-power sponsor to protect the team's agile culture from bureaucratic encroachment.",
        "keyChecklistPoints": [
            "Contrasts Adhocracy/Clan project culture with Hierarchy enterprise culture",
            "Explains specific points of friction (annual budgets vs sprints, gate reviews vs autonomy)",
            "Details PM's role as cultural translator and buffer",
            "Emphasizes delivering early business value to build executive trust"
        ],
        "examinerTip": "Use the Competing Values terminology (Hierarchy vs Adhocracy/Clan).",
        "source": "Unit 4 · Section 4.1 — Vision Keeping"
    },
    {
        "id": "itpm-u4-qa-019",
        "unit": 4,
        "topic": "Scope Negotiation: Business vs Engineering",
        "question": "Apply the 4-phase negotiation model to resolve a scope dispute between an aggressive Marketing VP and the Lead Technical Architect. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 9,
        "modelAnswer": "Applying the 4-phase negotiation model:\n\n1. Intelligence Phase: The PM collects objective facts—the Marketing VP's launch campaign deadline, the exact architectural refactoring required by the Architect, developer velocity, and system load benchmarks. Identifies BATNAs.\n2. Perception Phase: The PM diagnoses underlying cognitive concerns. Marketing perceives the Architect as overly academic and risk-averse; the Architect perceives Marketing as reckless and ignorant of technical debt.\n3. Strategy Phase: The PM devises trade-off packages: e.g., delivering 80% of marketing features by the public campaign date using a temporary microservice, with the remaining 20% and architectural refactoring scheduled for the subsequent sprint.\n4. Communication Phase: The PM convenes a structured meeting, frames the discussion around shared project success, presents the phased release package, addresses emotional concerns, and secures formal sign-off.",
        "keyChecklistPoints": [
            "Applies Intelligence phase (fact finding, velocity, technical debt, deadlines)",
            "Applies Perception phase (diagnosing subjective fears and biases)",
            "Applies Strategy phase (packaging phased delivery and trade-offs)",
            "Applies Communication phase (facilitated dialogue and formal agreement)"
        ],
        "examinerTip": "Walk through all four phases systematically in order.",
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    },
    {
        "id": "itpm-u4-qa-020",
        "unit": 4,
        "topic": "Comprehensive Human Factor Case Application",
        "question": "Synthesize Unit 4 concepts to explain why technical competence alone is insufficient for IT project success. [6 marks]",
        "marks": 6,
        "suggestedMinutes": 8,
        "modelAnswer": "IT projects are sociotechnical endeavors. High-quality code and state-of-the-art architecture can still fail completely if human factors are ignored:\n\n1. Vision & Purpose: Without Vision Keeping, brilliant engineers build technically sophisticated features that fail to solve core business problems.\n2. Leadership & Culture: Toxic, high-pressure environments create turnover, burn-out, and team silos, sabotaging code quality.\n3. Stakeholder Alignment: Neglected stakeholders with high power (e.g. compliance, CFO) can veto deployments or defund projects at the finish line, while resistant end users can refuse to adopt the new platform.\n4. Conflict Resolution: Unresolved disputes between business and tech teams escalate into paralysis, scope bloat, and missed deadlines.\n\nConclusion: Technical competence builds the product; human-factor competence ensures the product is embraced, adopted, and delivers long-term organizational value.",
        "keyChecklistPoints": [
            "Defines IT projects as sociotechnical systems",
            "Explains the role of vision keeping in aligning tech with business goals",
            "Highlights impact of stakeholder management on adoption and funding",
            "Emphasizes leadership and constructive conflict management in preventing failure"
        ],
        "examinerTip": "Conclude with the insight that software must be accepted by people to succeed.",
        "source": "Unit 4 · Section 4.1, 4.2, 4.3 — Complete Unit"
    }
]

# Write qa.ts
with open(os.path.join(u4_dir, "qa.ts"), "w") as f:
    f.write('import { ImportantQuestion } from "../../../../types";\n\n')
    f.write('export const unit4ImportantQuestions: ImportantQuestion[] = ' + json.dumps(qa_items, indent=2) + ';\n')

print("Generated Unit 4 qa.ts")

