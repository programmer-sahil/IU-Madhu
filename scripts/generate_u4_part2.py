import json, os

u4_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-4"
os.makedirs(u4_dir, exist_ok=True)

# 3. COMPARISONS (11 Master Comparisons)
comparisons = [
    {
        "id": "itpm-u4-comp-001",
        "title": "Vision vs Vision Statement",
        "unit": "Unit 4",
        "description": "Comparison between the overarching conceptual vision and its written linguistic articulation.",
        "columns": ["Project Vision", "Project Vision Statement"],
        "criteria": [
            {"aspect": "Nature", "itemA": "An inspiring mental picture of the desired future end state", "itemB": "A concise, written declaration formalizing that mental picture"},
            {"aspect": "Function", "itemA": "Provides continuous motivational North Star for team alignment", "itemB": "Communicates goals clearly to external and internal stakeholders"},
            {"aspect": "Form", "itemA": "Conceptual, emotional, and long-term aspirational orientation", "itemB": "Linguistic, structured, and formally documented"}
        ]
    },
    {
        "id": "itpm-u4-comp-002",
        "title": "Vision vs Mission vs Strategy",
        "unit": "Unit 4",
        "description": "The strategic alignment hierarchy connecting future aspiration to daily execution.",
        "columns": ["Vision", "Mission / Strategy"],
        "criteria": [
            {"aspect": "Core Question", "itemA": "'Where do we want to be?' (Future destination)", "itemB": "Mission: 'What do we do and why?' / Strategy: 'How do we get there?'"},
            {"aspect": "Time Horizon", "itemA": "Long-term future state post-project implementation", "itemB": "Current operational present (Mission) and medium-term roadmap (Strategy)"},
            {"aspect": "Focus", "itemA": "Aspirational value creation and organizational impact", "itemB": "Daily deliverables, technical architecture, and milestone execution"}
        ]
    },
    {
        "id": "itpm-u4-comp-003",
        "title": "Leadership vs Management",
        "unit": "Unit 4",
        "description": "Distinct roles and behavioral orientations within IT project administration.",
        "columns": ["Leadership", "Management"],
        "criteria": [
            {"aspect": "Primary Focus", "itemA": "People, vision, inspiration, motivation, and change", "itemB": "Processes, planning, budgeting, organizing, and controlling"},
            {"aspect": "Mechanism", "itemA": "Empowering individuals and aligning teams behind shared values", "itemB": "Enforcing structures, tracking variances, and administering workflows"},
            {"aspect": "Orientation", "itemA": "Doing the right things (effectiveness and direction)", "itemB": "Doing things right (efficiency and compliance)"}
        ]
    },
    {
        "id": "itpm-u4-comp-004",
        "title": "Transformational vs Transactional Leadership",
        "unit": "Unit 4",
        "description": "Two foundational leadership paradigms required in a balanced project manager.",
        "columns": ["Transformational Leadership", "Transactional Leadership"],
        "criteria": [
            {"aspect": "Driver", "itemA": "Charisma, vision, intellectual stimulation, individualized care", "itemB": "Contractual agreements, explicit expectations, contingent rewards"},
            {"aspect": "Motivation", "itemA": "Fosters high intrinsic motivation, autonomy, and creativity", "itemB": "Leverages extrinsic motivation (bonuses, praise, penalties)"},
            {"aspect": "Intervention", "itemA": "Proactive coaching, inspiration, and capability building", "itemB": "Reactive management-by-exception when errors or deviations occur"}
        ]
    },
    {
        "id": "itpm-u4-comp-005",
        "title": "The Four Project Cultures (Competing Values)",
        "unit": "Unit 4",
        "description": "Structural cultural archetypes defined by internal vs external focus and flexibility vs stability.",
        "columns": ["Clan & Adhocracy (Flexibility)", "Hierarchy & Market (Stability)"],
        "criteria": [
            {"aspect": "Clan (Internal/Flex)", "itemA": "Collaborative, mentoring, trust, consensus, family-like cohesion", "itemB": "N/A"},
            {"aspect": "Adhocracy (External/Flex)", "itemA": "Dynamic, innovative, entrepreneurial, risk-taking, cutting-edge", "itemB": "N/A"},
            {"aspect": "Market (External/Control)", "itemA": "N/A", "itemB": "Competitive, target-driven, bottom-line results, market share"},
            {"aspect": "Hierarchy (Internal/Control)", "itemA": "N/A", "itemB": "Standardized procedures, strict governance, predictability, rules"}
        ]
    },
    {
        "id": "itpm-u4-comp-006",
        "title": "Power-Interest Grid vs Stakeholder Salience Model",
        "unit": "Unit 4",
        "description": "Comparison of the two core stakeholder prioritization frameworks.",
        "columns": ["Power-Interest Grid", "Stakeholder Salience Model"],
        "criteria": [
            {"aspect": "Dimensions", "itemA": "2 static dimensions: Power and Interest (4 quadrants)", "itemB": "3 dynamic attributes: Power, Legitimacy, Urgency (7 classes)"},
            {"aspect": "Best Used For", "itemA": "Immediate daily communication planning and engagement tactics", "itemB": "Complex stakeholder ecosystems with shifting claims and political crises"},
            {"aspect": "Dynamic Adaptability", "itemA": "Relatively static 2x2 categorization", "itemB": "Highly dynamic; stakeholders shift categories as urgency or legitimacy changes"}
        ]
    },
    {
        "id": "itpm-u4-comp-007",
        "title": "Responsible (R) vs Accountable (A) in RACI",
        "unit": "Unit 4",
        "description": "The crucial distinction preventing confusion and diffusion of responsibility.",
        "columns": ["Responsible (R)", "Accountable (A)"],
        "criteria": [
            {"aspect": "Definition", "itemA": "The 'doer' who executes the task or produces the deliverable", "itemB": "The sole 'owner' who approves the deliverable and answers for outcome"},
            {"aspect": "Cardinal Rule", "itemA": "Multiple team members can share the 'R' role on a single task", "itemB": "Exactly ONE person can have the 'A' role per task (Strict rule)"},
            {"aspect": "Veto Authority", "itemA": "Executes according to instructions without final sign-off power", "itemB": "Holds final approval authority and ultimate governance veto power"}
        ]
    },
    {
        "id": "itpm-u4-comp-008",
        "title": "Consulted (C) vs Informed (I) in RACI",
        "unit": "Unit 4",
        "description": "Contrasting two-way advisory dialogue with one-way status notification.",
        "columns": ["Consulted (C)", "Informed (I)"],
        "criteria": [
            {"aspect": "Direction of Comm.", "itemA": "Two-way interactive dialogue: expert input solicited before work", "itemB": "One-way broadcast communication: updates provided after completion"},
            {"aspect": "Timing", "itemA": "Prior to and during task execution (active collaboration)", "itemB": "Post-execution or at formal milestone announcements"},
            {"aspect": "Stakeholder Profile", "itemA": "Subject matter experts whose technical opinions shape the deliverable", "itemB": "Parties affected by the outcome who need awareness but not input"}
        ]
    },
    {
        "id": "itpm-u4-comp-009",
        "title": "Stakeholder Engagement Levels",
        "unit": "Unit 4",
        "description": "The five progressive engagement states in the assessment matrix.",
        "columns": ["Passive / Opposing (Unaware, Resistant)", "Supportive / Active (Neutral, Supportive, Leading)"],
        "criteria": [
            {"aspect": "Unaware vs Resistant", "itemA": "Unaware: No knowledge of project; Resistant: Aware but actively opposing", "itemB": "N/A"},
            {"aspect": "Neutral vs Supportive", "itemA": "N/A", "itemB": "Neutral: Aware but passive; Supportive: Aware and actively helping"},
            {"aspect": "Leading", "itemA": "N/A", "itemB": "Actively championing and driving project success across the organization"}
        ]
    },
    {
        "id": "itpm-u4-comp-010",
        "title": "The Five Conflict-Resolution Techniques",
        "unit": "Unit 4",
        "description": "Behavioral styles mapped across assertiveness and cooperativeness.",
        "columns": ["High Cooperation (Collaborate, Smooth)", "Assertive / Middle (Force, Compromise, Withdraw)"],
        "criteria": [
            {"aspect": "Collaborate (Win-Win)", "itemA": "Confronts root causes, synthesizes perspectives, builds consensus", "itemB": "N/A"},
            {"aspect": "Smooth (Lose-Win)", "itemA": "Downplays differences, emphasizes harmony; leaves root cause unresolved", "itemB": "N/A"},
            {"aspect": "Force (Win-Lose)", "itemA": "N/A", "itemB": "Uses formal authority/coercion to impose decision; quick but damages trust"},
            {"aspect": "Compromise (Lose-Lose)", "itemA": "N/A", "itemB": "Both concede ground; reaches workable middle, but residual tension remains"},
            {"aspect": "Withdraw (No Resolution)", "itemA": "N/A", "itemB": "Retreats or postpones issue; useful for cooling off, but issue persists"}
        ]
    },
    {
        "id": "itpm-u4-comp-011",
        "title": "Face-to-Face vs E-Negotiation",
        "unit": "Unit 4",
        "description": "Media richness and interpersonal dynamics in project negotiations.",
        "columns": ["Face-to-Face Negotiation", "E-Negotiation (Digital / Async)"],
        "criteria": [
            {"aspect": "Communication Cues", "itemA": "Rich non-verbal cues (eye contact, tone, body language, facial shifts)", "itemB": "Lean cues (text/audio only), leading to misinterpretation and 'flaming'"},
            {"aspect": "Trust Building", "itemA": "Rapid rapport, interpersonal bonding, shared empathy, and trust", "itemB": "Impersonal, slower trust formation, prone to adversarial stances"},
            {"aspect": "Flexibility & Record", "itemA": "High scheduling coordination; verbal agreements require manual minutes", "itemB": "Asynchronous reflection time across time zones; automatic digital audit trail"}
        ]
    }
]

# Write comparisons.ts
with open(os.path.join(u4_dir, "comparisons.ts"), "w") as f:
    f.write('import { MasterComparison } from "../../../../types";\n\n')
    f.write('export const unit4Comparisons: MasterComparison[] = ' + json.dumps(comparisons, indent=2) + ';\n')

print("Generated Unit 4 comparisons.ts")

# 4. EXAM TRAPS (18 Exam Traps)
traps = [
    {
        "id": "itpm-u4-trap-001",
        "unit": 4,
        "topic": "Vision vs Mission",
        "commonStudentMistake": "Using 'Vision' and 'Mission' as interchangeable synonyms in exam answers.",
        "correctAcademicTruth": "Vision is 'Where we want to be' (future transformation); Mission is 'What we do and why' (core current purpose).",
        "whyExaminerDeductsMarks": "Fails to grasp strategic alignment and the temporal difference between future destination and present purpose.",
        "howToRemember": "Vision = Destination tomorrow; Mission = Work today; Strategy = Route map."
    },
    {
        "id": "itpm-u4-trap-002",
        "unit": 4,
        "topic": "Transformational vs Transactional Leadership",
        "commonStudentMistake": "Claiming Transformational leadership is always good and Transactional leadership is bad.",
        "correctAcademicTruth": "Both styles are essential; effective IT project management requires a blended approach where inspiration pairs with milestone governance.",
        "whyExaminerDeductsMarks": "Displays naive binary thinking; ignores operational compliance and contractual rigor in IT delivery.",
        "howToRemember": "Transformational inspires people; Transactional enforces standards and delivery."
    },
    {
        "id": "itpm-u4-trap-003",
        "unit": 4,
        "topic": "RACI Matrix: Multiple Accountables",
        "commonStudentMistake": "Assigning multiple individuals as 'Accountable (A)' for a single work package.",
        "correctAcademicTruth": "Exactly ONE person must be Accountable (A) for any given activity to prevent diffusion of responsibility.",
        "whyExaminerDeductsMarks": "Violates the fundamental governance rule of RACI charting.",
        "howToRemember": "When everyone is Accountable, no one is accountable. Exactly ONE 'A'."
    },
    {
        "id": "itpm-u4-trap-004",
        "unit": 4,
        "topic": "Responsible vs Accountable",
        "commonStudentMistake": "Confusing Responsible (R) with Accountable (A).",
        "correctAcademicTruth": "Responsible is the 'doer' who performs the work; Accountable is the 'owner' who approves it and carries the can.",
        "whyExaminerDeductsMarks": "Conflates execution with governance ownership.",
        "howToRemember": "R = Responsible does the work. A = Accountable signs the check / answers to the board."
    },
    {
        "id": "itpm-u4-trap-005",
        "unit": 4,
        "topic": "Power-Interest: Keep Satisfied vs Keep Informed",
        "commonStudentMistake": "Recommending 'Keep Informed' for High Power / Low Interest stakeholders.",
        "correctAcademicTruth": "High Power / Low Interest stakeholders require 'Keep Satisfied' (meet their requirements so they do not exert negative veto power).",
        "whyExaminerDeductsMarks": "Misallocates management effort; treats powerful regulators or CFOs as passive recipients.",
        "howToRemember": "High Power = Keep Satisfied; High Interest = Keep Informed."
    },
    {
        "id": "itpm-u4-trap-006",
        "unit": 4,
        "topic": "Power-Interest: Low Power / High Interest",
        "commonStudentMistake": "Classifying Low Power / High Interest stakeholders as 'Manage Closely'.",
        "correctAcademicTruth": "They should be 'Kept Informed' and leveraged as champions, not managed closely like executive sponsors.",
        "whyExaminerDeductsMarks": "Wastes limited project management bandwidth on individuals lacking formal decision authority.",
        "howToRemember": "Manage Closely requires BOTH High Power and High Interest."
    },
    {
        "id": "itpm-u4-trap-007",
        "unit": 4,
        "topic": "Salience Model: Latent vs Expectant",
        "commonStudentMistake": "Classifying a stakeholder with 2 attributes as Latent.",
        "correctAcademicTruth": "1 attribute = Latent (Dormant, Discretionary, Demanding); 2 attributes = Expectant (Dominant, Dangerous, Dependent).",
        "whyExaminerDeductsMarks": "Fails the core taxonomy of the Mitchell, Agle & Wood (1997) Salience Model.",
        "howToRemember": "1 = Latent; 2 = Expectant; 3 = Definite."
    },
    {
        "id": "itpm-u4-trap-008",
        "unit": 4,
        "topic": "Dangerous Stakeholder Definition",
        "commonStudentMistake": "Believing a Dangerous stakeholder has Legitimacy.",
        "correctAcademicTruth": "A Dangerous stakeholder possesses Power + Urgency, but deliberately lacks Legitimacy (may resort to coercion, strikes, or unauthorized pressure).",
        "whyExaminerDeductsMarks": "Misidentifies the source of threat in political stakeholder dynamics.",
        "howToRemember": "Dangerous = Power + Urgency WITHOUT Legitimacy."
    },
    {
        "id": "itpm-u4-trap-009",
        "unit": 4,
        "topic": "Dormant Stakeholder Complacency",
        "commonStudentMistake": "Assuming Dormant stakeholders (Power only) can be safely forgotten.",
        "correctAcademicTruth": "Dormant stakeholders possess power; if an event gives them urgency or legitimacy, they become Dominant or Definite overnight.",
        "whyExaminerDeductsMarks": "Ignores the dynamic nature of stakeholder salience.",
        "howToRemember": "Dormant power can awaken suddenly with an urgent event."
    },
    {
        "id": "itpm-u4-trap-010",
        "unit": 4,
        "topic": "Conflict: Compromise vs Collaborate",
        "commonStudentMistake": "Stating that Compromise is the 'ideal win-win' conflict resolution technique.",
        "correctAcademicTruth": "Collaborate/Problem-Solve is the true Win-Win; Compromise is Lose-Lose/Give-and-Take where both forfeit something.",
        "whyExaminerDeductsMarks": "Fundamental error in conflict management theory; compromises leave residual issues unresolved.",
        "howToRemember": "Collaborate = Win-Win (100% satisfaction); Compromise = Split the difference (mutual sacrifice)."
    },
    {
        "id": "itpm-u4-trap-011",
        "unit": 4,
        "topic": "Smoothing / Accommodating",
        "commonStudentMistake": "Assuming Smoothing solves the root problem permanently.",
        "correctAcademicTruth": "Smoothing merely downplays differences to preserve harmony; the underlying root conflict remains completely unaddressed.",
        "whyExaminerDeductsMarks": "Confuses emotional reassurance with analytical dispute resolution.",
        "howToRemember": "Smoothing puts a band-aid over a fracture."
    },
    {
        "id": "itpm-u4-trap-012",
        "unit": 4,
        "topic": "Withdraw / Avoid Technique",
        "commonStudentMistake": "Assuming Withdrawing/Avoiding is always incompetent or cowardly.",
        "correctAcademicTruth": "Withdrawing is academically valid for cooling-off heated emotions, gathering facts, or when the PM lacks jurisdiction.",
        "whyExaminerDeductsMarks": "Shows lack of situational awareness in conflict strategy.",
        "howToRemember": "Withdrawing is a tactical timeout, not permanent surrender."
    },
    {
        "id": "itpm-u4-trap-013",
        "unit": 4,
        "topic": "Forcing / Directing Long-Term Impact",
        "commonStudentMistake": "Relying on Force/Direct because it delivers rapid decisions.",
        "correctAcademicTruth": "Force produces quick compliance but breeds resentment, destroys team psychological safety, and undermines long-term commitment.",
        "whyExaminerDeductsMarks": "Ignores team sustainability and the sociotechnical health of IT teams.",
        "howToRemember": "Force wins the sprint battle but loses the project war."
    },
    {
        "id": "itpm-u4-trap-014",
        "unit": 4,
        "topic": "Negotiation Spiral: Intelligence Phase",
        "commonStudentMistake": "Jumping straight into Communication/Offers without an Intelligence phase.",
        "correctAcademicTruth": "Negotiation must begin with Intelligence (fact gathering, BATNA determination, constraint identification) before tactical communication starts.",
        "whyExaminerDeductsMarks": "Violates the 4-phase negotiation spiral sequence.",
        "howToRemember": "Intelligence -> Perception -> Strategy -> Communication (I-P-S-C)."
    },
    {
        "id": "itpm-u4-trap-015",
        "unit": 4,
        "topic": "E-Negotiation Flaming",
        "commonStudentMistake": "Assuming e-negotiation is simply 'faster and cheaper face-to-face negotiation'.",
        "correctAcademicTruth": "E-negotiation lacks non-verbal feedback and psychological restraint, dramatically increasing misunderstanding and aggressive 'flaming'.",
        "whyExaminerDeductsMarks": "Overlooks the well-documented socio-psychological risks of lean digital communication.",
        "howToRemember": "Lean media strips emotion and feeds flaming."
    },
    {
        "id": "itpm-u4-trap-016",
        "unit": 4,
        "topic": "Culture: Clan vs Adhocracy",
        "commonStudentMistake": "Confusing Clan culture with Adhocracy culture.",
        "correctAcademicTruth": "Both value flexibility, but Clan is Internal (cohesion, family, consensus) while Adhocracy is External (innovation, risk-taking, entrepreneurship).",
        "whyExaminerDeductsMarks": "Fails the Competing Values Framework dimensional axes.",
        "howToRemember": "Clan = Internal harmony; Adhocracy = External innovation."
    },
    {
        "id": "itpm-u4-trap-017",
        "unit": 4,
        "topic": "Static Stakeholder Mindset",
        "commonStudentMistake": "Creating a stakeholder register at project kickoff and never updating it.",
        "correctAcademicTruth": "Stakeholder power, interest, urgency, and engagement fluctuate continuously throughout the IT project lifecycle.",
        "whyExaminerDeductsMarks": "Fails to recognize that stakeholder management is an iterative, continuous process.",
        "howToRemember": "Stakeholders are living variables, not static database entries."
    },
    {
        "id": "itpm-u4-trap-018",
        "unit": 4,
        "topic": "Soft Data Public Disclosure",
        "commonStudentMistake": "Publishing soft data (personal politics, resistance) in publicly shared project dashboards.",
        "correctAcademicTruth": "Soft data is confidential and sensitive; publishing it destroys team trust and triggers severe political fallout.",
        "whyExaminerDeductsMarks": "Demonstrates gross lack of organizational acumen and ethics.",
        "howToRemember": "Hard data is public; Soft data is strictly confidential."
    }
]

# Write traps.ts
with open(os.path.join(u4_dir, "traps.ts"), "w") as f:
    f.write('import { ExamTrapItem } from "../../../../types";\n\n')
    f.write('export const unit4ExamTraps: ExamTrapItem[] = ' + json.dumps(traps, indent=2) + ';\n')

print("Generated Unit 4 traps.ts")

# 5. VISUALS (10 Visuals)
visuals = [
    {
        "id": "itpm-u4-vis-001",
        "title": "Vision Hierarchy Cascade",
        "description": "Top-down alignment from Vision ('Where') to Mission ('Why/What') to Strategy ('How') to daily Agile Sprints.",
        "type": "hierarchy",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-002",
        "title": "Dual Leadership Balance",
        "description": "Balancing Transformational leadership (vision, inspiration, autonomy) with Transactional governance (milestones, contracts, compliance).",
        "type": "balance",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-003",
        "title": "Competing Values Project Culture Framework",
        "description": "4-quadrant cultural model: Clan (collaborative), Adhocracy (creative), Hierarchy (control), Market (competitive).",
        "type": "quadrant",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-004",
        "title": "Power-Interest Matrix & Strategic Responses",
        "description": "2x2 grid mapping Manage Closely, Keep Satisfied, Keep Informed, and Monitor across Power and Interest axes.",
        "type": "matrix",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-005",
        "title": "Stakeholder Salience 3-Circle Venn",
        "description": "Mitchell, Agle & Wood model mapping Power, Legitimacy, and Urgency across Latent, Expectant, and Definite classes.",
        "type": "venn",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-006",
        "title": "RACI Governance Chart",
        "description": "Linear responsibility matrix demonstrating the golden rule: exactly one Accountable (A) per deliverable.",
        "type": "table",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-007",
        "title": "Stakeholder Engagement Assessment Matrix",
        "description": "Progression across Unaware, Resistant, Neutral, Supportive, Leading with 'C' (Current) and 'D' (Desired) gap analysis.",
        "type": "ladder",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-008",
        "title": "Five Conflict-Resolution Modes",
        "description": "Assertiveness vs Cooperativeness grid mapping Collaborate, Compromise, Force, Smooth, and Withdraw.",
        "type": "quadrant",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-009",
        "title": "Four-Phase Negotiation Spiral",
        "description": "Cyclical spiral through Intelligence, Perception, Strategy, and Communication phases in project negotiations.",
        "type": "spiral",
        "unit": 4
    },
    {
        "id": "itpm-u4-vis-010",
        "title": "Proactive Conflict Prevention Architecture",
        "description": "Integrated framework linking Project Charter, RACI clarity, Team Working Agreements, and Blameless Retrospectives.",
        "type": "architecture",
        "unit": 4
    }
]

# Write visuals.ts
with open(os.path.join(u4_dir, "visuals.ts"), "w") as f:
    f.write('export const unit4Visuals = ' + json.dumps(visuals, indent=2) + ';\n')

print("Generated Unit 4 visuals.ts")

# 6. SCENARIOS (Interactive scenarios for ScenarioLab)
scenarios = [
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
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
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
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
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
        "source": "Unit 4 · Section 4.2 — Stakeholder Management"
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
        "source": "Unit 4 · Section 4.3 — Conflict Management"
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
        "source": "Unit 4 · Section 4.3 — Conflict Management"
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
        "source": "Unit 4 · Section 4.3 — Conflict Management"
    }
]

# Write scenarios.ts
with open(os.path.join(u4_dir, "scenarios.ts"), "w") as f:
    f.write('export interface ScenarioItem {\n')
    f.write('  id: string;\n  title: string;\n  category: string;\n  type: string;\n  context: string;\n  question: string;\n  options: string[];\n  correctIndex: number;\n  rationale: string;\n  source: string;\n}\n\n')
    f.write('export const unit4Scenarios: ScenarioItem[] = ' + json.dumps(scenarios, indent=2) + ';\n')

print("Generated Unit 4 scenarios.ts")

# 7. MOCK EXAMS (Unit 4 Mock Exam 1 & 2)
mock1_mcqs = [f"itpm-u4-s41-mcq-{str(i).zfill(3)}" if i <= 30 else f"itpm-u4-s42-mcq-{str(i).zfill(3)}" for i in range(1, 41)]
mock2_mcqs = [f"itpm-u4-s42-mcq-{str(i).zfill(3)}" if i <= 70 else f"itpm-u4-s43-mcq-{str(i).zfill(3)}" for i in range(41, 81)]

mock_exams = [
    {
        "id": "itpm-u4-mock-01",
        "title": "Unit 4 Mock Exam 1",
        "subtitle": "Vision Keeping, Leadership Dynamics, Stakeholder Engagement, and Conflict Management",
        "totalMarks": 90,
        "timeLimitMinutes": 120,
        "mcqIds": mock1_mcqs,
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
                "modelAnswer": "Vision is 'Where we want to be'—the inspiring future state. Mission is 'What we do and why'—the current core purpose and operational boundaries. Strategy is 'How we get there'—the action roadmap, resource allocation, and technical path. In an IT project, these form an aligned cascade where daily execution must serve the strategic milestones that realize the overarching vision.",
                "rubricItems": [
                    {"point": "Accurately distinguished Vision, Mission, and Strategy using the Where/What/How model", "marksAllotted": 4},
                    {"point": "Connected hierarchy to project team alignment and Vision Keeping", "marksAllotted": 2}
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
                    {"point": "Accurately contrasted transformational and transactional traits", "marksAllotted": 4},
                    {"point": "Justified blended leadership in complex IT environments", "marksAllotted": 2}
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
                "modelAnswer": "The Power-Interest grid maps stakeholders across Power (authority/influence) and Interest (concern/impact):\n1. High Power, High Interest: 'Manage Closely'—active partnership, regular involvement in key decisions (e.g. Project Sponsor).\n2. High Power, Low Interest: 'Keep Satisfied'—meet expectations, avoid overwhelming with day-to-day details, ensure no veto exercised (e.g. CFO, Compliance).\n3. Low Power, High Interest: 'Keep Informed'—frequent updates, leverage enthusiasm as testers and champions (e.g. End Users).\n4. Low Power, Low Interest: 'Monitor'—observe with minimal effort for shifts in power or interest (e.g. peripheral suppliers).",
                "rubricItems": [
                    {"point": "Correctly named all four quadrants and strategies", "marksAllotted": 4},
                    {"point": "Provided realistic IT project examples and rationales", "marksAllotted": 2}
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
                    {"point": "Correctly defined all 4 RACI roles", "marksAllotted": 3},
                    {"point": "Emphasized the single-Accountable rule and stakeholder clarity benefits", "marksAllotted": 3}
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
                    {"point": "Listed all 5 conflict techniques with correct orientations", "marksAllotted": 3},
                    {"point": "Provided valid, realistic situational use cases for each", "marksAllotted": 3}
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
                "modelAnswer": "1. Vision Keeping & Alignment: Articulate a clear, compelling project vision statement highlighting academic integrity and seamless student experience. Use Vision Keeping rituals (kickoffs, sprint demos) to connect distributed developers' coding tasks to the broader mission.\n2. Leadership & Culture: Adopt a blended leadership model—transformational leadership to inspire the global engineering team and build Clan/Adhocracy trust, paired with transactional governance to track milestone delivery. Establish explicit virtual working agreements.\n3. Stakeholder Management:\n   - Sponsor: High Power, High Interest -> Manage Closely via weekly steerco.\n   - Compliance Office: High Power, Low Interest -> Keep Satisfied through tailored audit memos.\n   - Lecturers & Students: Low Power, High Interest -> Keep Informed through pilot demos and town halls.\n   - Vendor: Expectant/Dominant stakeholder -> active contract management.\n4. RACI Matrix: Resolve test ambiguity by assigning exactly ONE Accountable (e.g. QA Lead) for release verification, with developers Responsible (R) and lecturers Consulted (C).\n5. Conflict Management & Negotiation: Use Collaborate/Problem-Solve to resolve developer priority disputes. For distributed cross-cultural negotiations with the vendor and remote developers, avoid text 'flaming' by holding synchronous video sessions and structuring dialogue through the 4 phases (Intelligence -> Perception -> Strategy -> Communication).",
                "rubricItems": [
                    {"point": "Formulated Vision Keeping and blended leadership strategy", "marksAllotted": 4},
                    {"point": "Accurately classified all stakeholders on Power-Interest Grid with correct strategies", "marksAllotted": 5},
                    {"point": "Constructed RACI governance eliminating role ambiguity", "marksAllotted": 4},
                    {"point": "Selected appropriate conflict resolution and e-negotiation safeguards", "marksAllotted": 5},
                    {"point": "Demonstrated cohesive, holistic synthesis across Unit 4 themes", "marksAllotted": 2}
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
        "mcqIds": mock2_mcqs,
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
                    {"point": "Explained all 4 culture types with axes", "marksAllotted": 4},
                    {"point": "Described 3 indirect culture-shaping mechanisms", "marksAllotted": 2}
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
                    {"point": "Defined Power, Legitimacy, Urgency", "marksAllotted": 2},
                    {"point": "Correctly listed and categorized all seven stakeholder classes", "marksAllotted": 4}
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
                    {"point": "Distinguished hard and soft data in stakeholder register", "marksAllotted": 2},
                    {"point": "Listed all 5 engagement levels and explained C/D gap analysis", "marksAllotted": 4}
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
                    {"point": "Accurately named and defined all 4 phases (I-P-S-C)", "marksAllotted": 4},
                    {"point": "Explained the spiral, non-linear progression over time", "marksAllotted": 2}
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
                    {"point": "Balanced evaluation of e-negotiation with psychological risks", "marksAllotted": 3},
                    {"point": "Outlined concrete proactive conflict prevention mechanisms", "marksAllotted": 3}
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
                    {"point": "Classified CFO, department heads, end users, compliance body accurately", "marksAllotted": 5},
                    {"point": "Constructed clear RACI separating partner and internal responsibilities", "marksAllotted": 4},
                    {"point": "Selected blended leadership and Collaborative conflict resolution", "marksAllotted": 4},
                    {"point": "Formulated structured negotiation and e-negotiation safeguards", "marksAllotted": 4},
                    {"point": "Recommended holistic preventive cultural mechanisms", "marksAllotted": 3}
                ],
                "examinerAdvice": "Tie every solution back to a concrete theoretical concept from Unit 4."
            }
        ]
    }
]

# Write mockExams.ts
with open(os.path.join(u4_dir, "mockExams.ts"), "w") as f:
    f.write('import { MockExam } from "../../../../types";\n\n')
    f.write('export const unit4MockExams: MockExam[] = ' + json.dumps(mock_exams, indent=2) + ';\n')

print("Generated Unit 4 mockExams.ts")

# 8. INDEX.TS (unit4Data)
index_content = '''import { UnitData } from "../../../../types";
import { unit4Mcqs } from "./mcqs";
import { unit4Flashcards } from "./flashcards";
import { unit4ImportantQuestions } from "./qa";
import { unit4Concepts, unit4SummarySections } from "./concepts";
import { unit4Comparisons } from "./comparisons";
import { unit4ExamTraps } from "./traps";
import { unit4Visuals } from "./visuals";
import { unit4MockExams } from "./mockExams";
import { unit4Scenarios } from "./scenarios";

export {
  unit4Mcqs,
  unit4Flashcards,
  unit4ImportantQuestions,
  unit4Concepts,
  unit4SummarySections,
  unit4Comparisons,
  unit4ExamTraps,
  unit4Visuals,
  unit4MockExams,
  unit4Scenarios
};

export const unit4Data: UnitData = {
  id: 4,
  code: "DLMBITPAM01-U04",
  title: "The Human Factor: Leadership, Culture, Stakeholders, and Conflict",
  subtitle: "Vision Keeping, transformational vs transactional leadership, 4 project cultures, Power-Interest Grid, Salience Model, RACI matrix, 5 conflict styles, and 4-phase negotiation spiral.",
  estimatedTime: "3.5 hours",
  color: "from-purple-600 to-pink-600",
  gradient: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
  badge: "Unit 4",
  overview: "Official curriculum for Unit 4 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Explores the sociotechnical human factors governing IT project success. Covers Vision Keeping (Vision -> Mission -> Strategy cascade), transformational vs transactional leadership, the Competing Values Framework (Clan, Adhocracy, Hierarchy, Market) and indirect cultural mechanisms, comprehensive stakeholder management (sources, hard vs soft register data, Power-Interest Grid, Mitchell-Agle-Wood Salience Model, RACI matrix, 5 engagement levels), and conflict management (primary IT conflict sources, 5 conflict-resolution styles, 4-phase negotiation spiral, e-negotiation risks like flaming, and proactive conflict prevention architecture).",
  summarySections: unit4SummarySections,
  keyConcepts: unit4Concepts,
  cheatSheet: {
    mustMemorize: [
      "Vision = 'Where we want to be'; Mission = 'What we do and why'; Strategy = 'How we get there'.",
      "Vision Keeping: Continuously reminding and aligning team members with overarching purpose.",
      "Blended Leadership: Transformational (inspiration, intellectual stimulation) + Transactional (contracts, milestones, compliance).",
      "Four Cultures (Competing Values): Clan (internal/flexibility), Adhocracy (external/flexibility), Hierarchy (internal/control), Market (external/control).",
      "Indirect Culture Mechanisms: Symbols, rituals, stories/legends, behavioral role-modeling, recognition.",
      "Stakeholder Register: Hard data (objective, public) vs Soft data (confidential politics, expectations, fears).",
      "Power-Interest Grid: High Power/High Interest (Manage Closely); High Power/Low Interest (Keep Satisfied); Low Power/High Interest (Keep Informed); Low Power/Low Interest (Monitor).",
      "Salience Model (3 dimensions): Power, Legitimacy, Urgency (Mitchell, Agle & Wood 1997).",
      "Salience 7 Classes: Latent (Dormant, Discretionary, Demanding); Expectant (Dominant, Dangerous, Dependent); Definite (Power + Legitimacy + Urgency).",
      "Dangerous Stakeholder = Power + Urgency without Legitimacy (may resort to coercion or sabotage).",
      "RACI Matrix: Responsible (doer), Accountable (sole owner/approver), Consulted (two-way input), Informed (one-way update).",
      "RACI Golden Rule: Exactly ONE person Accountable (A) per deliverable. Never multiple.",
      "5 Engagement Levels: Unaware -> Resistant -> Neutral -> Supportive -> Leading.",
      "Primary IT Conflict Sources: Schedules and resource allocation historically dominate.",
      "5 Conflict Styles: Collaborate (Win-Win), Compromise (Give-and-Take), Force (Win-Lose), Smooth (Lose-Win), Withdraw (No Resolution).",
      "Collaborate is the true Win-Win standard; Compromise involves mutual sacrifice.",
      "4 Negotiation Phases: Intelligence -> Perception -> Strategy -> Communication (cyclical spiral).",
      "E-Negotiation Risks: Lean media strips non-verbal cues, delays trust, and risks aggressive 'flaming'.",
      "Proactive Prevention: Unambiguous RACI, Team Charter ground rules, blameless retrospectives."
    ],
    coreDefinitions: [
      { term: "Vision Keeping", definition: "Continuous leadership activity reminding and steering project members toward the overarching long-term vision.", examNote: "Prevents technical teams getting lost in tactical weeds." },
      { term: "Clan Culture", definition: "Internal-focus and flexible organizational culture prioritizing cohesion, collaboration, mentoring, and shared trust.", examNote: "Contrasts with Adhocracy (external innovation)." },
      { term: "Stakeholder Salience", definition: "The degree to which project managers give priority to competing stakeholder claims based on Power, Legitimacy, and Urgency.", examNote: "Mitchell, Agle & Wood (1997) framework." },
      { term: "Dangerous Stakeholder", definition: "A stakeholder with coercive Power and Urgent claims who lacks legal or moral Legitimacy.", examNote: "Power + Urgency without Legitimacy." },
      { term: "Accountable (RACI)", definition: "The single individual who possesses final approval authority and is held solely answerable for task completion.", examNote: "Exactly ONE Accountable per task." },
      { term: "Collaborate / Problem-Solve", definition: "Conflict resolution approach confronting root causes directly to synthesize win-win consensus.", examNote: "Takes time but builds lasting commitment." },
      { term: "Negotiation Spiral", definition: "Non-linear 4-stage process cycling through Intelligence, Perception, Strategy, and Communication.", examNote: "Early focus is on Intelligence and Perception." },
      { term: "Flaming", definition: "Hostile, uninhibited aggressive communication resulting from physical distance and lack of non-verbal cues in e-negotiation.", examNote: "Major risk in distributed IT projects." }
    ],
    highYieldNumbers: [
      { number: "3", label: "Strategic Hierarchy Levels", context: "Vision ('Where'), Mission ('What/Why'), Strategy ('How')." },
      { number: "4", label: "Project Culture Types", context: "Clan, Adhocracy, Market, Hierarchy (Competing Values Framework)." },
      { number: "4", label: "Power-Interest Quadrants", context: "Manage Closely, Keep Satisfied, Keep Informed, Monitor." },
      { number: "3", label: "Salience Attributes", context: "Power, Legitimacy, Urgency." },
      { number: "7", label: "Salience Stakeholder Classes", context: "Dormant, Discretionary, Demanding, Dominant, Dangerous, Dependent, Definite." },
      { number: "1", label: "Max Accountables per Task", context: "Exactly ONE person Accountable (A) in RACI matrix." },
      { number: "5", label: "Stakeholder Engagement Levels", context: "Unaware, Resistant, Neutral, Supportive, Leading." },
      { number: "5", label: "Conflict-Resolution Techniques", context: "Collaborate, Compromise, Force, Smooth, Withdraw." },
      { number: "4", label: "Negotiation Spiral Phases", context: "Intelligence -> Perception -> Strategy -> Communication." }
    ],
    frameworkNames: [
      { acronym: "CVF", fullName: "Competing Values Framework", focus: "Four organizational/project culture archetypes (Clan, Adhocracy, Market, Hierarchy)." },
      { acronym: "P-I Grid", fullName: "Power-Interest Matrix", focus: "Stakeholder engagement prioritization based on influence and concern." },
      { acronym: "Salience", fullName: "Stakeholder Salience Model", focus: "Mitchell, Agle & Wood (1997) dynamic classification (Power, Legitimacy, Urgency)." },
      { acronym: "RACI", fullName: "Linear Responsibility Chart", focus: "Clarifies governance: Responsible, Accountable, Consulted, Informed." },
      { acronym: "SEAM", fullName: "Stakeholder Engagement Assessment Matrix", focus: "Identifies C (Current) vs D (Desired) engagement gaps." },
      { acronym: "I-P-S-C", fullName: "Negotiation Spiral Model", focus: "Intelligence -> Perception -> Strategy -> Communication." }
    ],
    processes: [
      {
        name: "Stakeholder Engagement Workflow",
        steps: [
          "1. Identify stakeholders from Charter, contracts, EEFs, and OPAs",
          "2. Compile Stakeholder Register documenting hard data and confidential soft data",
          "3. Classify using Power-Interest Grid (4 quadrants) and Salience Model (7 classes)",
          "4. Map Current (C) vs Desired (D) engagement in Stakeholder Engagement Matrix",
          "5. Define governance and task ownership using RACI Matrix (exactly 1 'A')",
          "6. Execute communication plans and continuously update register across sprints"
        ],
        description: "Complete stakeholder identification, analysis, and engagement process."
      },
      {
        name: "Four-Phase Negotiation Process",
        steps: [
          "1. Intelligence Phase: Collect factual data, technical constraints, and define BATNA",
          "2. Perception Phase: Assess subjective framing, psychological biases, and emotional triggers",
          "3. Strategy Phase: Formulate concession packages, non-negotiables, and trade-off options",
          "4. Communication Phase: Conduct direct interactive exchange and secure formal agreement",
          "5. Spiral Feedback: Cycle back to Intelligence/Perception if impasse occurs"
        ],
        description: "Dynamic negotiation spiral for IT project disputes."
      }
    ],
    comparisons: [
      {
        conceptA: "Transformational Leadership",
        conceptB: "Transactional Leadership",
        comparisonPoints: [
          { criterion: "Focus", detailA: "Inspires vision, innovation, and intrinsic motivation", detailB: "Enforces contracts, milestones, and contingent rewards" },
          { criterion: "Intervention", detailA: "Intellectual stimulation and coaching", detailB: "Management by exception upon deviation" }
        ]
      },
      {
        conceptA: "Collaborate / Problem-Solve",
        conceptB: "Compromise / Reconcile",
        comparisonPoints: [
          { criterion: "Outcome", detailA: "True Win-Win; synthesizes perspectives and root causes", detailB: "Give-and-Take / Lose-Lose; both parties forfeit aspects" },
          { criterion: "Commitment", detailA: "High long-term consensus and team commitment", detailB: "Workable middle; residual tension may linger" }
        ]
      }
    ],
    examTraps: [
      { trap: "Multiple Accountables in RACI", truth: "Exactly ONE person must be Accountable (A) per task." },
      { trap: "Treating Compromise as Win-Win", truth: "Collaborate is Win-Win; Compromise involves mutual sacrifice." },
      { trap: "Believing Dangerous stakeholders have Legitimacy", truth: "Dangerous stakeholders have Power + Urgency but lack Legitimacy." },
      { trap: "Confusing High Power/Low Interest strategy", truth: "Keep Satisfied, NOT Keep Informed." }
    ],
    memoryShortcuts: [
      { acronym: "ONE 'A'", meaning: "Exactly one Accountable person per RACI row", usage: "RACI matrix questions" },
      { acronym: "I-P-S-C", meaning: "Intelligence -> Perception -> Strategy -> Communication", usage: "Negotiation phases" },
      { acronym: "P-L-U", meaning: "Power, Legitimacy, Urgency", usage: "Salience Model dimensions" },
      { acronym: "M-K-K-M", meaning: "Manage Closely, Keep Satisfied, Keep Informed, Monitor", usage: "Power-Interest quadrants" }
    ]
  },
  importantQuestions: unit4ImportantQuestions,
  flashcards: unit4Flashcards,
  mcqs: unit4Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Differentiate Vision, Mission, and Strategy and explain Vision Keeping",
    "Compare Transformational and Transactional leadership and justify a blended approach",
    "Identify the 4 project cultures and explain indirect cultural mechanisms",
    "Classify stakeholders on the Power-Interest Grid (4 quadrants) and apply strategies",
    "Analyze the Stakeholder Salience Model (7 classes across Power, Legitimacy, Urgency)",
    "Apply RACI matrix rules, ensuring exactly ONE person is Accountable",
    "Select appropriate conflict-resolution techniques (Collaborate, Compromise, Force, Smooth, Withdraw)",
    "Apply the 4-phase negotiation spiral (I-P-S-C) and mitigate e-negotiation risks (flaming)"
  ]
};
'''

with open(os.path.join(u4_dir, "index.ts"), "w") as f:
    f.write(index_content)

print("Generated Unit 4 index.ts successfully!")

