import json, os

u2_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-2"

# 1. FLASHCARDS (36 high yield flashcards)
flashcards = [
    {
        "id": "itpm-u2-fc-001", "unit": 2, "category": "Scope",
        "front": "What is the Work Breakdown Structure (WBS)?",
        "back": "A hierarchical decomposition of the total project scope into manageable, deliverable-oriented components.",
        "examTip": "WBS is a scope hierarchy, not a chronological project schedule."
    },
    {
        "id": "itpm-u2-fc-002", "unit": 2, "category": "Scope",
        "front": "Name the 4 conceptual WBS levels taught in the course.",
        "back": "Level 1: Project/Product; Level 2: Major Areas/Phases; Level 3: Functional Entities; Level 4: Individual Tasks.",
        "examTip": "Estimates originate at Level 4 and roll upward to Level 1."
    },
    {
        "id": "itpm-u2-fc-003", "unit": 2, "category": "Scope",
        "front": "What is a Work Package (WP)?",
        "back": "A manageable grouping of related tasks at a lower WBS level with assigned accountability, budget, timeline, and defined deliverable.",
        "examTip": "Each work package should have a single accountable owner."
    },
    {
        "id": "itpm-u2-fc-004", "unit": 2, "category": "Scope",
        "front": "What is a project milestone, and what is its duration?",
        "back": "A significant progress event or transition marker. Its duration is ALWAYS zero (duration = 0) and it consumes no resources.",
        "examTip": "Tasks have duration and consume effort; milestones have duration = 0."
    },
    {
        "id": "itpm-u2-fc-005", "unit": 2, "category": "Scope",
        "front": "What is the 100% Rule in WBS?",
        "back": "The WBS includes 100% of the work defined by project scope and captures all deliverables—no more, no less.",
        "examTip": "Work not in the WBS is out of project scope."
    },
    {
        "id": "itpm-u2-fc-006", "unit": 2, "category": "Scope",
        "front": "What is the Requirements Traceability Matrix (RTM)?",
        "back": "A grid linking requirements bidirectionally: from origin through architecture, code components, and test cases to sign-off status.",
        "examTip": "Ensures every requirement is built and tested, while stopping gold plating."
    },
    {
        "id": "itpm-u2-fc-007", "unit": 2, "category": "Prioritization",
        "front": "What are the 4 quadrants of the Urgency x Importance Matrix?",
        "back": "Q1 (High/High): Critical/Focus; Q2 (Low Urgency/High Importance): Strategic Goals/Attend; Q3 (High Urgency/Low Importance): Interruptions/Avoid; Q4 (Low/Low): Distractions/Limit.",
        "examTip": "Q2 is where proactive leaders invest time (planning, prevention) before crises occur."
    },
    {
        "id": "itpm-u2-fc-008", "unit": 2, "category": "Prioritization",
        "front": "Name the 3 primary requirement types in the Kano Model.",
        "back": "1. Basic (Must-be); 2. Performance (Satisfiers); 3. Delighters (Attractive / Excitement).",
        "examTip": "Basic features cap out at neutral satisfaction; Delighters decay into Basic over time."
    },
    {
        "id": "itpm-u2-fc-009", "unit": 2, "category": "Prioritization",
        "front": "How does customer satisfaction behave for Kano 'Basic' requirements?",
        "back": "Absence causes extreme dissatisfaction; presence is taken for granted with zero additional delight (diminishing returns).",
        "examTip": "Over-investing in Basic requirements wastes resources."
    },
    {
        "id": "itpm-u2-fc-010", "unit": 2, "category": "Prioritization",
        "front": "What does MoSCoW stand for?",
        "back": "Must have (mandatory), Should have (important with workaround), Could have (nice-to-have, dropped first), Won't have (out of scope for now).",
        "examTip": "Under schedule pressure, drop Could-haves first to protect Must-haves."
    },
    {
        "id": "itpm-u2-fc-011", "unit": 2, "category": "Schedule",
        "front": "Define Finish-to-Start (FS) precedence relationship.",
        "back": "Activity B (successor) cannot start until Activity A (predecessor) has finished. The most common dependency type.",
        "examTip": "FS is the default dependency in project networks."
    },
    {
        "id": "itpm-u2-fc-012", "unit": 2, "category": "Schedule",
        "front": "Define Start-to-Start (SS) and Finish-to-Finish (FF).",
        "back": "SS: Successor cannot start until Predecessor has started. FF: Successor cannot finish until Predecessor has finished.",
        "examTip": "SS allows parallel execution; FF ensures synchronized completion."
    },
    {
        "id": "itpm-u2-fc-013", "unit": 2, "category": "Schedule",
        "front": "What is the difference between Lead Time and Lag Time?",
        "back": "Lead time is an acceleration/overlap (successor starts earlier). Lag time is mandatory waiting delay between activities.",
        "examTip": "Lead = negative lag (time saved); Lag = positive delay (waiting time)."
    },
    {
        "id": "itpm-u2-fc-014", "unit": 2, "category": "Schedule",
        "front": "State the PERT formula for Earliest Finish Time (EFT).",
        "back": "EFT = EST + Duration",
        "examTip": "Calculated during the forward pass."
    },
    {
        "id": "itpm-u2-fc-015", "unit": 2, "category": "Schedule",
        "front": "State the PERT formula for Latest Start Time (LST).",
        "back": "LST = LFT - Duration",
        "examTip": "Calculated during the backward pass."
    },
    {
        "id": "itpm-u2-fc-016", "unit": 2, "category": "Schedule",
        "front": "State the formula for Activity Slack (Total Float).",
        "back": "Slack = LST - EST = LFT - EFT",
        "examTip": "On the critical path, Slack is always ZERO."
    },
    {
        "id": "itpm-u2-fc-017", "unit": 2, "category": "Schedule",
        "front": "What is the Critical Path?",
        "back": "The sequence of dependent activities with ZERO slack that dictates the minimum overall project duration.",
        "examTip": "Any delay to a critical path activity delays the entire project completion."
    },
    {
        "id": "itpm-u2-fc-018", "unit": 2, "category": "Schedule",
        "front": "What rule governs EST during the PERT forward pass with multiple predecessors?",
        "back": "EST = MAX(EFT of all immediate predecessors).",
        "examTip": "An activity cannot start until ALL preceding activities finish."
    },
    {
        "id": "itpm-u2-fc-019", "unit": 2, "category": "Schedule",
        "front": "What rule governs LFT during the PERT backward pass with multiple successors?",
        "back": "LFT = MIN(LST of all immediate successors).",
        "examTip": "Predecessor must finish before the earliest successor needs to start."
    },
    {
        "id": "itpm-u2-fc-020", "unit": 2, "category": "Schedule",
        "front": "Compare Gantt chart and PERT network diagram strengths.",
        "back": "PERT excels at dependency logic and critical path float calculation; Gantt excels at visual calendar timeline communication.",
        "examTip": "Gantt charts hide resource quantities and complex dependency logic."
    },
    {
        "id": "itpm-u2-fc-021", "unit": 2, "category": "Quality",
        "front": "What is the Definition of Done (DoD)?",
        "back": "An agreed-upon checklist of quality, engineering, and verification criteria required before marking a work item complete.",
        "examTip": "DoD prevents half-finished work from accumulating technical debt."
    },
    {
        "id": "itpm-u2-fc-022", "unit": 2, "category": "Quality",
        "front": "Why is DoD NOT equal to Customer Acceptance?",
        "back": "DoD is internal team engineering verification; Customer Acceptance is formal external contractual sign-off.",
        "examTip": "Classic exam trap: conflating team DoD with client acceptance."
    },
    {
        "id": "itpm-u2-fc-023", "unit": 2, "category": "Quality",
        "front": "How many characteristics are in ISO/IEC 25010 Quality in Use?",
        "back": "5: Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage.",
        "examTip": "Evaluates the outcome of human interaction with the software."
    },
    {
        "id": "itpm-u2-fc-024", "unit": 2, "category": "Quality",
        "front": "How many characteristics are in ISO/IEC 25010 Product Quality?",
        "back": "8: Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability.",
        "examTip": "Evaluates technical attributes of the software system itself."
    },
    {
        "id": "itpm-u2-fc-025", "unit": 2, "category": "Quality",
        "front": "What is a Quality Gate?",
        "back": "A formal governance checkpoint at the end of a project phase where deliverables are reviewed before permission to advance is granted.",
        "examTip": "Gate outcomes: Pass, Conditional Pass, Rework, Terminate."
    }
]

# 2. IMPORTANT QUESTIONS (20 Q&A)
qa_list = [
    {
        "id": "itpm-u2-qa-001", "unit": 2,
        "question": "Explain the Work Breakdown Structure (WBS) and the four-level hierarchy described in the course book.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Definition of WBS, clear identification of the 4 levels, and explanation of the bottom-up roll-up principle.",
        "modelAnswer": "A Work Breakdown Structure (WBS) is a hierarchical decomposition of the total project scope into manageable, deliverable-oriented components.\n\nThe 4-level hierarchy comprises:\n1. Level 1 (Project/Product): The overall project scope and final deliverable.\n2. Level 2 (Major Areas/Phases): Subdivided into major lifecycle phases or functional subsystems, often forming major work packages.\n3. Level 3 (Functional Entities): Functional components that break major work into meaningful deliverables.\n4. Level 4 (Individual Tasks): Detailed work items where effort, schedule, and cost estimates originate.\n\nBottom-Up Roll-Up Principle: Task estimates at Level 4 aggregate upward to Level 3, Level 2, and Level 1. If the aggregated total violates budget or schedule baselines, the team must reconcile the WBS or negotiate scope adjustments.",
        "answerStructure": ["Definition of WBS", "Explanation of Levels 1 to 4", "Bottom-up roll-up principle"],
        "keywords": ["Hierarchical decomposition", "Deliverable-oriented", "Level 1 to 4", "Bottom-up roll-up", "Reconciliation"],
        "commonMistakes": "Confusing WBS with a chronological schedule or treating it as a functional department chart.",
        "selfCheckChecklist": ["Did I define WBS?", "Did I name all 4 levels correctly?", "Did I explain the roll-up rule?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.1", "topic": "WBS Hierarchy", "page": 35}
    },
    {
        "id": "itpm-u2-qa-002", "unit": 2,
        "question": "What is a project milestone, and how does it differ fundamentally from a task and a deliverable?",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "Clear definition of milestone with duration = 0, contrasted with tasks (duration/effort) and deliverables (tangible products).",
        "modelAnswer": "A project milestone is a significant event or transition marker in the project lifecycle. Fundamentally, a milestone has a duration of zero (duration = 0) and consumes zero resources.\n\nKey Differences:\n1. Task: An active work package activity that consumes time, effort, and budget (e.g. 'Code database schema - 5 days').\n2. Deliverable: A unique, tangible, and verifiable outcome produced by work (e.g. 'Database Schema Specification Document').\n3. Milestone: The instantaneous point marking completion or approval (e.g. 'Architecture Specification Approved by Sponsor').\n\nOn Gantt charts, milestones are represented as diamonds rather than horizontal duration bars.",
        "answerStructure": ["Milestone definition (duration=0)", "Comparison table or points contrasting Task, Deliverable, Milestone", "Gantt visual representation"],
        "keywords": ["Duration = 0", "Zero resources", "Significant event", "Task consumes effort", "Deliverable is tangible"],
        "commonMistakes": "Assigning duration to milestones or confusing the deliverable with the milestone event.",
        "selfCheckChecklist": ["Stated duration = 0?", "Distinguished task effort from milestone event?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.1", "topic": "Milestones vs Tasks", "page": 38}
    },
    {
        "id": "itpm-u2-qa-003", "unit": 2,
        "question": "Explain the purpose, structure, and benefits of the Requirements Traceability Matrix (RTM).",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Definition of RTM, grid columns (requirement -> design -> code -> test), and how it prevents missing work and gold plating.",
        "modelAnswer": "The Requirements Traceability Matrix (RTM) is a grid that links requirements bidirectionally throughout the project lifecycle.\n\nStructure:\n- Source Requirement ID and description\n- Architectural design component\n- Software code module/implementation\n- Verification test case ID\n- Validation status / sign-off\n\nCore Benefits:\n1. Prevents Missing Scope: Ensures every approved requirement is traced to a design element, code component, and test case.\n2. Prevents Gold Plating: Detects unauthorized code or features that cannot be traced back to an approved source requirement.\n3. Change Impact Analysis: When a requirement changes, the RTM immediately identifies all affected design documents, code files, and test suites.",
        "answerStructure": ["Definition of RTM", "Column structure", "Three key benefits (completeness, gold plating prevention, impact analysis)"],
        "keywords": ["Bidirectional traceability", "Requirement to test", "Gold plating prevention", "Impact analysis"],
        "commonMistakes": "Describing RTM as a simple to-do list without bidirectional verification linking.",
        "selfCheckChecklist": ["Mentioned bidirectional link?", "Listed design, code, and test links?", "Explained gold plating prevention?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.1", "topic": "Traceability Matrix", "page": 39}
    },
    {
        "id": "itpm-u2-qa-004", "unit": 2,
        "question": "Explain the Kano Model of customer satisfaction and describe how its categories evolve over time.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Explain Basic, Performance, and Delighter requirements, diminishing returns, and the decay of delighters over time.",
        "modelAnswer": "The Kano Model classifies product requirements into three primary categories based on their relationship with customer satisfaction:\n\n1. Basic Requirements (Must-be): Taken for granted by customers. Their absence causes extreme dissatisfaction, but once met, extra investment yields diminishing returns with zero additional satisfaction (e.g. mobile phone call connection).\n2. Performance Attributes (Satisfiers): Customer satisfaction is directly proportional to functionality provided; more is better (e.g. longer battery life, faster download speed).\n3. Delighters (Attractive / Excitement): Unexpected features that create high delight with low functional investment. Absence causes no dissatisfaction because customers did not anticipate them.\n\nDecay Over Time: As market competitors copy innovative features, customer expectations rise. What was once an unexpected delighter decays into a performance attribute, and ultimately into an expected basic requirement (e.g. Wi-Fi on airlines, touchscreens).",
        "answerStructure": ["Explanation of 3 categories", "Diminishing returns on Basic", "Temporal decay of Delighters"],
        "keywords": ["Basic (Must-be)", "Performance (Satisfiers)", "Delighters", "Diminishing returns", "Expectation decay"],
        "commonMistakes": "Claiming that Delighters remain exciting permanently.",
        "selfCheckChecklist": ["Explained Basic, Performance, Delighter?", "Described the decay over time?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.2", "topic": "Kano Model", "page": 41}
    },
    {
        "id": "itpm-u2-qa-005", "unit": 2,
        "question": "Describe the MoSCoW prioritization method and explain how it provides scope flexibility during execution.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Define M, S, C, W and explain how dropping Could-haves preserves schedule without failing the project.",
        "modelAnswer": "MoSCoW is an agile and project prioritization technique establishing four distinct categories:\n\n1. Must-Have (M): Mandatory non-negotiable minimums. Without these, the system cannot go live, is illegal, or is unsafe.\n2. Should-Have (S): Highly important features with significant business value, but where a temporary workaround exists if omitted.\n3. Could-Have (C): Desirable enhancements that provide small value. These are the first items dropped if schedule or budget tightens.\n4. Won't-Have (W): Agreed exclusions for the current release, preventing scope creep while recording ideas for future releases.\n\nScope Flexibility: By keeping Must-haves around 60% of capacity and Could-haves at 20%, the team has a built-in schedule buffer. If unforeseen delays occur, Could-haves are dropped, ensuring the project delivers on time and within budget.",
        "answerStructure": ["Define all 4 letters", "Explain scope flexibility mechanism"],
        "keywords": ["Must-have", "Should-have", "Could-have", "Won't-have", "Scope buffer", "Workaround"],
        "commonMistakes": "Treating Won't-have as permanent rejection rather than deferred for this release.",
        "selfCheckChecklist": ["Defined all 4 categories?", "Explained how dropping Could-haves protects deadlines?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.2", "topic": "MoSCoW Method", "page": 42}
    },
    {
        "id": "itpm-u2-qa-006", "unit": 2,
        "question": "Explain the four precedence dependency relationships (FS, SS, FF, SF) and distinguish lead time from lag time.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Accurate definitions of all 4 dependencies with realistic IT examples, plus clear distinction between lead and lag.",
        "modelAnswer": "Precedence relationships govern activity sequencing:\n\n1. Finish-to-Start (FS): Successor cannot start until Predecessor finishes (e.g. Code module must finish before testing starts). Most common.\n2. Start-to-Start (SS): Successor cannot start until Predecessor has started (e.g. Code writing starts, enabling test writing to start in parallel).\n3. Finish-to-Finish (FF): Successor cannot finish until Predecessor finishes (e.g. Document review cannot finish until document drafting finishes).\n4. Start-to-Finish (SF): Successor cannot finish until Predecessor starts (e.g. Legacy IT system cannot be retired until new system goes live). Rare.\n\nLead vs Lag:\n- Lead Time: An intentional overlap/acceleration where the successor starts before the predecessor completes (negative lag).\n- Lag Time: A mandatory waiting delay inserted between activities where no active work occurs (e.g. waiting 48 hours for data migration indexing).",
        "answerStructure": ["Define FS, SS, FF, SF with examples", "Define Lead time", "Define Lag time"],
        "keywords": ["Finish-to-Start", "Start-to-Start", "Finish-to-Finish", "Start-to-Finish", "Lead time overlap", "Lag mandatory delay"],
        "commonMistakes": "Confusing lag time with idle developer slacking; lag is a technical dependency delay.",
        "selfCheckChecklist": ["Explained all 4 dependencies?", "Clearly separated lead from lag?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.3", "topic": "Precedence Relationships", "page": 44}
    },
    {
        "id": "itpm-u2-qa-007", "unit": 2,
        "question": "Explain the PERT calculation method: forward pass, backward pass, and critical path identification.",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Formulas for EFT, LST, Slack; rules for MAX and MIN; definition of critical path as zero slack.",
        "modelAnswer": "PERT (Program Evaluation and Review Technique) calculates schedule timing across a network diagram:\n\n1. Forward Pass (Calculates earliest times):\n- EFT = EST + Duration\n- When an activity has multiple predecessors: EST = MAX(EFT of all immediate predecessors).\n\n2. Backward Pass (Calculates latest times):\n- LST = LFT - Duration\n- When an activity has multiple successors: LFT = MIN(LST of all immediate successors).\n\n3. Slack (Total Float) and Critical Path:\n- Slack = LST - EST = LFT - EFT.\n- The Critical Path is the sequence of activities where Slack = 0. It represents the longest duration path and dictates the shortest possible project completion time. Any delay on the critical path delays the entire project.",
        "answerStructure": ["Forward pass formulas & MAX rule", "Backward pass formulas & MIN rule", "Slack formula & Critical path definition"],
        "keywords": ["Forward pass", "Backward pass", "EFT = EST + d", "LST = LFT - d", "Slack = 0", "Critical path"],
        "commonMistakes": "Mixing up MAX in forward pass and MIN in backward pass.",
        "selfCheckChecklist": ["Stated MAX rule for forward pass?", "Stated MIN rule for backward pass?", "Defined critical path as zero slack?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.3", "topic": "PERT Formulas", "page": 46}
    },
    {
        "id": "itpm-u2-qa-008", "unit": 2,
        "question": "Compare PERT network diagrams and Gantt charts. What are their respective strengths and limitations?",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 7,
        "examinerExpectation": "Direct contrast of dependency logic/float vs calendar timeline visualization, and limitations of each.",
        "modelAnswer": "PERT Network Diagrams and Gantt Charts are complementary scheduling tools:\n\nPERT Strengths:\n- Explicitly highlights inter-task dependencies and workflow logic.\n- Clearly calculates earliest/latest times, slack, and the critical path.\n- Ideal for complex scheduling analysis and compression (crashing/fast tracking).\nPERT Limitations: Difficult for non-technical stakeholders to interpret calendar dates.\n\nGantt Chart Strengths:\n- Highly intuitive horizontal bar chart displaying calendar timeline, task duration, and milestones.\n- Excellent for executive stakeholder reporting and tracking actual vs planned progress.\nGantt Limitations: Hides resource quantities, expenditure rates, and complex dependency webs when projects scale.\n\nBest Practice: Use PERT to calculate critical path and float, then translate the schedule into a Gantt chart for visual communication.",
        "answerStructure": ["PERT strengths & limits", "Gantt strengths & limits", "Synthesis / best practice"],
        "keywords": ["Dependency network", "Critical path float", "Calendar timeline", "Gantt limitations", "Visual communication"],
        "commonMistakes": "Claiming Gantt charts can replace PERT in critical path float calculations.",
        "selfCheckChecklist": ["Discussed both PERT and Gantt?", "Listed strengths and limits for each?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.3", "topic": "PERT vs Gantt", "page": 48}
    },
    {
        "id": "itpm-u2-qa-009", "unit": 2,
        "question": "What is the Definition of Done (DoD), why is it critical, and how does it differ from Quality Gates and Customer Acceptance?",
        "marks": 6, "priority": "VERY HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "Definition of DoD, technical debt prevention, and the 3-tier quality comparison (DoD vs Quality Gate vs Customer Acceptance).",
        "modelAnswer": "The Definition of Done (DoD) is a formal, agreed-upon checklist of engineering and verification criteria that a user story or task must meet before being marked complete (e.g. peer reviewed, unit tested, documentation updated, integrated into build).\n\nImportance: It prevents the accumulation of technical debt and creates transparency, ensuring that 'done' means production-ready rather than merely coded.\n\nThree-Tier Quality Comparison:\n1. Definition of Done (Tier 1): Team-internal operational quality criteria applied continuously at the task/user story level.\n2. Quality Gate (Tier 2): Formal milestone checkpoint at phase boundaries evaluated by governance bodies (PMB/TMB) to approve advancing to the next phase.\n3. Customer Acceptance (Tier 3): Formal contractual sign-off by the external client, confirming business requirements are met and authorizing final payment.",
        "answerStructure": ["Definition of DoD & components", "Technical debt prevention", "Three-tier quality comparison"],
        "keywords": ["Definition of Done", "Technical debt", "Quality Gate", "Customer Acceptance", "Three-tier quality"],
        "commonMistakes": "Treating DoD and Customer Acceptance as the same event.",
        "selfCheckChecklist": ["Explained DoD?", "Differentiated DoD, Quality Gate, and Customer Acceptance?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.4", "topic": "Definition of Done", "page": 53}
    },
    {
        "id": "itpm-u2-qa-010", "unit": 2,
        "question": "Explain the ISO/IEC 25010 Quality Model, distinguishing Product Quality from Quality in Use.",
        "marks": 6, "priority": "HIGH PRIORITY", "suggestedTimeMinutes": 8,
        "examinerExpectation": "List 5 Quality in Use characteristics and 8 Product Quality characteristics with brief explanations.",
        "modelAnswer": "ISO/IEC 25010 establishes two distinct software quality models:\n\n1. Quality in Use (5 Characteristics) - Evaluates the outcome of human interaction with the software in its operational context:\n- Effectiveness: Accuracy and completeness with which users achieve goals.\n- Efficiency: Resources expended relative to the accuracy of goals achieved.\n- Satisfaction: User comfort, trust, and positive attitudes.\n- Risk Freedom: Mitigation of economic, health, and environmental risks.\n- Context Coverage: Performance across both specified and extended contexts.\n\n2. Product Quality (8 Characteristics) - Evaluates static and dynamic technical software properties:\n- Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, and Portability.\n\nThese models provide the objective standard for deriving verifiable DoD checklists and acceptance tests.",
        "answerStructure": ["Introduce ISO/IEC 25010 division", "Detail 5 Quality in Use characteristics", "Detail 8 Product Quality characteristics"],
        "keywords": ["ISO/IEC 25010", "Quality in Use (5)", "Product Quality (8)", "Effectiveness", "Maintainability"],
        "commonMistakes": "Mixing up the 5 Quality in Use characteristics with the 8 Product Quality characteristics.",
        "selfCheckChecklist": ["Named 5 Quality in Use items?", "Named 8 Product Quality items?"],
        "source": {"type": "course-book", "unit": 2, "section": "2.4", "topic": "ISO/IEC 25010", "page": 54}
    }
]

# 3. COMPARISONS (10 comparisons)
comparisons = [
    {
        "id": "itpm-u2-comp-001",
        "title": "WBS vs Project Schedule",
        "unit": "Unit 2",
        "description": "Fundamental difference between deliverable scope decomposition and chronological calendar scheduling.",
        "columns": ["Work Breakdown Structure (WBS)", "Project Schedule (Gantt/PERT)"],
        "criteria": [
            {"aspect": "Primary Orientation", "itemA": "Deliverable-oriented hierarchical scope decomposition", "itemB": "Chronological timeline and activity sequencing"},
            {"aspect": "Dimension of Time", "itemA": "No timeline or calendar dates displayed", "itemB": "Explicit start dates, finish dates, durations, and milestones"},
            {"aspect": "Core Question", "itemA": "'What needs to be produced to complete the project?'", "itemB": "'When will each activity be executed and by whom?'"}
        ],
        "examTrap": "Do not treat WBS as a schedule. WBS decomposes scope; PERT/Gantt schedules it.",
        "memoryRule": "WBS = WHAT is built. Schedule = WHEN it is built."
    },
    {
        "id": "itpm-u2-comp-002",
        "title": "Task vs Deliverable vs Milestone",
        "unit": "Unit 2",
        "description": "Distinction between execution effort, physical product output, and point-in-time governance events.",
        "columns": ["Task", "Milestone"],
        "criteria": [
            {"aspect": "Duration & Effort", "itemA": "Positive duration; consumes labor and financial resources", "itemB": "Zero duration (duration = 0); consumes zero resources"},
            {"aspect": "Representation", "itemA": "Represented as horizontal duration bars in Gantt charts", "itemB": "Represented as diamond markers at a specific date"},
            {"aspect": "Purpose", "itemA": "Performs active work to produce deliverables", "itemB": "Marks significant achievement, phase completion, or approval"}
        ],
        "examTrap": "Milestones NEVER have duration or resource estimates.",
        "memoryRule": "Task = work with duration. Milestone = instantaneous marker (duration = 0)."
    },
    {
        "id": "itpm-u2-comp-003",
        "title": "Kano Model vs MoSCoW Method",
        "unit": "Unit 2",
        "description": "Customer satisfaction psychological categorization versus pragmatic delivery prioritization.",
        "columns": ["Kano Model", "MoSCoW Method"],
        "criteria": [
            {"aspect": "Core Focus", "itemA": "Customer satisfaction dynamics and psychological expectations", "itemB": "Pragmatic delivery scoping and release management"},
            {"aspect": "Categories", "itemA": "Basic (Must-be), Performance (Satisfiers), Delighters", "itemB": "Must have, Should have, Could have, Won't have"},
            {"aspect": "Temporal Behavior", "itemA": "Delighters decay into Basic requirements over time", "itemB": "Could-haves are dropped under schedule pressure"}
        ],
        "examTrap": "Kano evaluates customer sentiment; MoSCoW allocates execution priority.",
        "memoryRule": "Kano = Customer emotion (Basic/Delighter). MoSCoW = Delivery action (Must/Could)."
    },
    {
        "id": "itpm-u2-comp-004",
        "title": "PERT Network vs Gantt Chart",
        "unit": "Unit 2",
        "description": "Mathematical network logic and float calculation versus visual timeline communication.",
        "columns": ["PERT Network Diagram", "Gantt Chart"],
        "criteria": [
            {"aspect": "Dependency Clarity", "itemA": "Explicitly displays complex network relationships and logic", "itemB": "Can become cluttered and obscure complex dependency webs"},
            {"aspect": "Slack & Float", "itemA": "Calculates exact EST, EFT, LST, LFT, and Slack", "itemB": "Visualizes bar lengths; does not calculate float directly"},
            {"aspect": "Stakeholder Usability", "itemA": "Requires technical project management expertise to read", "itemB": "Highly intuitive and visual for executive communication"}
        ],
        "examTrap": "Gantt charts do not calculate critical path float; they visualize the schedule.",
        "memoryRule": "PERT = Calculate critical path. Gantt = Show schedule to stakeholders."
    },
    {
        "id": "itpm-u2-comp-005",
        "title": "Crashing vs Fast Tracking",
        "unit": "Unit 2",
        "description": "Comparison of the two primary schedule compression techniques.",
        "columns": ["Crashing", "Fast Tracking"],
        "criteria": [
            {"aspect": "Method", "itemA": "Adding resources (overtime, extra staff) to critical activities", "itemB": "Overlapping sequential activities in parallel"},
            {"aspect": "Cost Impact", "itemA": "Increases project expenditure directly", "itemB": "Minimal direct resource cost addition"},
            {"aspect": "Primary Risk", "itemA": "Budget overrun and diminishing developer productivity", "itemB": "Rework and coordination defects if predecessor changes"}
        ],
        "examTrap": "Crashing adds cost; Fast Tracking adds rework risk.",
        "memoryRule": "Crashing = More money for speed. Fast Tracking = Parallel work risking rework."
    },
    {
        "id": "itpm-u2-comp-006",
        "title": "Definition of Done vs Final Customer Acceptance",
        "unit": "Unit 2",
        "description": "Internal technical quality verification versus external contractual sign-off.",
        "columns": ["Definition of Done (DoD)", "Customer Acceptance"],
        "criteria": [
            {"aspect": "Governance Authority", "itemA": "Internal development team and Scrum Master / PM", "itemB": "External client, project sponsor, or business customer"},
            {"aspect": "Timing", "itemA": "Applied continuously at every task, story, or sprint", "itemB": "Applied at major phase gates or final project handover"},
            {"aspect": "Focus", "itemA": "Engineering rigor: reviewed, tested, documented, deployable", "itemB": "Business fitness: meets contract, ready for commercial use"}
        ],
        "examTrap": "Meeting the team's DoD does not equal client acceptance.",
        "memoryRule": "DoD = Team says 'it's built right'. Acceptance = Client says 'we accept it'."
    },
    {
        "id": "itpm-u2-comp-007",
        "title": "ISO/IEC 25010 Product Quality vs Quality in Use",
        "unit": "Unit 2",
        "description": "Technical system properties versus operational human interaction outcomes.",
        "columns": ["Product Quality", "Quality in Use"],
        "criteria": [
            {"aspect": "Scope of Evaluation", "itemA": "Internal and external technical properties of software", "itemB": "Impact and outcomes when real users perform tasks"},
            {"aspect": "Characteristic Count", "itemA": "8 characteristics (e.g. Reliability, Security, Maintainability)", "itemB": "5 characteristics (e.g. Effectiveness, Satisfaction)"},
            {"aspect": "Perspective", "itemA": "Engineering and architectural perspective", "itemB": "End-user and operational business perspective"}
        ],
        "examTrap": "Product Quality has 8 characteristics; Quality in Use has 5.",
        "memoryRule": "Product Quality = System properties (8). Quality in Use = User experience (5)."
    }
]

# 4. EXAM TRAPS (14 traps)
traps = [
    {
        "id": "itpm-u2-trap-001", "unit": 2, "topic": "Milestone Duration",
        "commonStudentMistake": "Assigning a duration of several days or a budget to a project milestone.",
        "correctAcademicTruth": "Milestones always have a duration of ZERO and consume zero resources. They mark an instantaneous event or sign-off.",
        "whyExaminerDeductsMarks": "Demonstrates confusion between an ongoing work package task and a point-in-time governance marker.",
        "howToRemember": "Milestone duration is ALWAYS zero."
    },
    {
        "id": "itpm-u2-trap-002", "unit": 2, "topic": "WBS vs Schedule",
        "commonStudentMistake": "Drawing a WBS with horizontal timeline bars, arrows, and calendar dates.",
        "correctAcademicTruth": "A WBS is a deliverable decomposition hierarchy, not a chronological Gantt schedule.",
        "whyExaminerDeductsMarks": "Conflates scope management with time planning.",
        "howToRemember": "WBS = What is built. Gantt = When it is built."
    },
    {
        "id": "itpm-u2-trap-003", "unit": 2, "topic": "Kano Basic Diminishing Returns",
        "commonStudentMistake": "Assuming that spending massive effort on Kano Basic features will create delighted, ecstatic customers.",
        "correctAcademicTruth": "Basic features are taken for granted. Their presence only achieves neutral satisfaction; over-investing yields diminishing returns.",
        "whyExaminerDeductsMarks": "Fails to grasp the psychological curve of the Kano model.",
        "howToRemember": "Basic features prevent complaints; Delighters create excitement."
    },
    {
        "id": "itpm-u2-trap-004", "unit": 2, "topic": "Critical Path Zero Slack",
        "commonStudentMistake": "Thinking that activities on the critical path have float or schedule buffer.",
        "correctAcademicTruth": "Activities on the critical path have exactly ZERO slack (Slack = 0). Any delay immediately delays overall project completion.",
        "whyExaminerDeductsMarks": "Misunderstands the foundational principle of Critical Path Method.",
        "howToRemember": "Critical Path = Zero Slack = Maximum schedule risk."
    },
    {
        "id": "itpm-u2-trap-005", "unit": 2, "topic": "DoD vs Acceptance",
        "commonStudentMistake": "Claiming that completing the Definition of Done means the client has legally accepted the software.",
        "correctAcademicTruth": "DoD is internal engineering completeness; Final Customer Acceptance is external legal/contractual sign-off.",
        "whyExaminerDeductsMarks": "Blurs the governance line between internal development quality and external commercial delivery.",
        "howToRemember": "DoD = Team readiness. Acceptance = Client sign-off."
    },
    {
        "id": "itpm-u2-trap-006", "unit": 2, "topic": "Forward vs Backward Pass Rules",
        "commonStudentMistake": "Using MIN in the forward pass and MAX in the backward pass.",
        "correctAcademicTruth": "Forward pass uses MAX of predecessors' EFT; backward pass uses MIN of successors' LST.",
        "whyExaminerDeductsMarks": "Produces invalid schedule logic and incorrect float calculations.",
        "howToRemember": "Forward = Look back, take MAX. Backward = Look ahead, take MIN."
    }
]

# 5. VISUALS
visuals = [
    {
        "id": "itpm-u2-vis-001",
        "title": "WBS 4-Level Decomposition",
        "description": "Hierarchical breakdown from Level 1 Project to Level 4 Tasks, illustrating bottom-up estimate roll-up.",
        "type": "hierarchy",
        "unit": 2
    },
    {
        "id": "itpm-u2-vis-002",
        "title": "Kano Satisfaction Curves",
        "description": "Visual representation of Basic, Performance, and Delighter curves against customer satisfaction and execution level.",
        "type": "chart",
        "unit": 2
    },
    {
        "id": "itpm-u2-vis-003",
        "title": "PERT Network Diagram with Critical Path",
        "description": "Activity on Node (AON) network showing EST, EFT, LST, LFT, Slack, and highlighted red Critical Path.",
        "type": "network",
        "unit": 2
    }
]

# Write files
with open(os.path.join(u2_dir, "flashcards.ts"), "w") as f:
    f.write('import { Flashcard } from "../../../../types";\n\n')
    f.write('export const unit2Flashcards: Flashcard[] = ' + json.dumps(flashcards, indent=2) + ';\n')

with open(os.path.join(u2_dir, "qa.ts"), "w") as f:
    f.write('import { DescriptiveQuestion } from "../../../../types";\n\n')
    f.write('export const unit2ImportantQuestions: DescriptiveQuestion[] = ' + json.dumps(qa_list, indent=2) + ';\n')

with open(os.path.join(u2_dir, "comparisons.ts"), "w") as f:
    f.write('import { MasterComparison } from "../../../../types";\n\n')
    f.write('export const unit2Comparisons: MasterComparison[] = ' + json.dumps(comparisons, indent=2) + ';\n')

with open(os.path.join(u2_dir, "traps.ts"), "w") as f:
    f.write('import { ExamTrapItem } from "../../../../types";\n\n')
    f.write('export const unit2ExamTraps: ExamTrapItem[] = ' + json.dumps(traps, indent=2) + ';\n')

with open(os.path.join(u2_dir, "visuals.ts"), "w") as f:
    f.write('export const unit2Visuals = ' + json.dumps(visuals, indent=2) + ';\n')

# index.ts
index_content = """import { UnitData } from "../../../../types";
import { unit2Mcqs } from "./mcqs";
import { unit2Flashcards } from "./flashcards";
import { unit2ImportantQuestions } from "./qa";
import { unit2Concepts, unit2SummarySections } from "./concepts";
import { unit2Comparisons } from "./comparisons";
import { unit2ExamTraps } from "./traps";
import { unit2Visuals } from "./visuals";

export {
  unit2Mcqs,
  unit2Flashcards,
  unit2ImportantQuestions,
  unit2Concepts,
  unit2SummarySections,
  unit2Comparisons,
  unit2ExamTraps,
  unit2Visuals
};

export const unit2Data: UnitData = {
  id: 2,
  code: "DLMBITPAM01-U02",
  title: "Organizing the Work",
  subtitle: "WBS, work packages, prioritization (Kano, MoSCoW), time planning (PERT, critical path, Gantt), and Definition of Done (ISO/IEC 25010).",
  estimatedTime: "2.5 hours",
  color: "from-sky-500 to-blue-600",
  gradient: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
  badge: "Unit 2",
  overview: "Official curriculum for Unit 2 of Module DLMBITPAM01 (IT Project Management) at IU International University of Applied Sciences. Covers the Work Breakdown Structure (4 levels, bottom-up roll-up), requirements traceability matrix, prioritization frameworks (Urgency x Importance, Kano, MoSCoW), time planning (FS/SS/FF/SF, PERT calculations, critical path, Gantt charts), and Definition of Done operationalizing ISO/IEC 25010.",
  summarySections: unit2SummarySections,
  keyConcepts: unit2Concepts,
  cheatSheet: {
    mustMemorize: [
      "WBS: 4 levels (Project -> Areas -> Functions -> Tasks). Lower estimates roll upward.",
      "Work Package: lowest manageable level with assigned owner, budget, timeline, deliverable.",
      "Milestone: significant progress checkpoint with duration = 0 and zero resources.",
      "Requirements Traceability Matrix: bidirectional link from requirement to design, code, and test.",
      "Urgency x Importance: Q1 Critical/Focus, Q2 Strategic/Attend, Q3 Interruptions/Avoid, Q4 Distractions/Limit.",
      "Kano: Basic (Must-be, diminishing returns), Performance (linear satisfaction), Delighter (excitement decays into basic over time).",
      "MoSCoW: Must-have (mandatory), Should-have (workaround exists), Could-have (dropped first), Won't-have (deferred).",
      "Precedence: FS (finish to start), SS (start to start), FF (finish to finish), SF (start to finish).",
      "Lead: negative lag / acceleration overlap. Lag: mandatory waiting delay between activities.",
      "PERT: EFT = EST + Duration; LST = LFT - Duration; Slack = LST - EST = LFT - EFT.",
      "Forward pass: EST = MAX(predecessors' EFT). Backward pass: LFT = MIN(successors' LST).",
      "Critical Path: sequence of dependent activities with ZERO slack. Dictates project duration.",
      "DoD: agreed technical checklist before marking done. Prevents technical debt.",
      "DoD != Customer Acceptance: DoD is internal team quality; Acceptance is client sign-off.",
      "ISO/IEC 25010 Quality in Use (5): Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage.",
      "ISO/IEC 25010 Product Quality (8): Functional Suitability, Performance, Compatibility, Usability, Reliability, Security, Maintainability, Portability.",
      "Quality Gate: formal decision gate approving or rejecting phase advancement."
    ],
    coreDefinitions: [
      { term: "Work Breakdown Structure", definition: "Hierarchical decomposition of total project scope into manageable, deliverable components.", examNote: "Scope hierarchy, not calendar schedule." },
      { term: "Milestone", definition: "A significant event or transition with duration = 0.", examNote: "Never assign duration or resources." },
      { term: "Critical Path", definition: "The longest path of dependent activities with zero slack that dictates minimum project duration.", examNote: "Delay on critical path delays project." },
      { term: "Definition of Done", definition: "Agreed-upon checklist of quality criteria required before marking an item complete.", examNote: "DoD != final customer acceptance." }
    ],
    importantNumbers: [
      { number: "4", label: "WBS Hierarchy Levels", context: "Project, Major Areas, Functions, Tasks." },
      { number: "0", label: "Milestone Duration", context: "Milestones have duration = 0 and consume no resources." },
      { number: "4", label: "Precedence Relationships", context: "FS, SS, FF, SF." },
      { number: "0", label: "Critical Path Slack", context: "Critical path activities have exactly zero slack." },
      { number: "5", label: "ISO 25010 Quality in Use Characteristics", context: "Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage." },
      { number: "8", label: "ISO 25010 Product Quality Characteristics", context: "Functional Suitability, Performance, Compatibility, Usability, Reliability, Security, Maintainability, Portability." }
    ],
    frameworkNames: [
      { acronym: "WBS", fullName: "Work Breakdown Structure", focus: "Hierarchical scope decomposition into work packages and tasks." },
      { acronym: "RTM", fullName: "Requirements Traceability Matrix", focus: "Bidirectional mapping connecting requirements to design, code, and tests." },
      { acronym: "CPM / PERT", fullName: "Critical Path Method / Program Evaluation and Review Technique", focus: "Network calculation of earliest/latest times, slack, and critical path." },
      { acronym: "MoSCoW", fullName: "Must, Should, Could, Won't have", focus: "Scope prioritization allocating delivery tiers." },
      { acronym: "DoD", fullName: "Definition of Done", focus: "Internal engineering completion and quality criteria checklist." }
    ],
    processes: [
      {
        name: "PERT Critical Path Calculation",
        steps: [
          "1. Forward Pass: Calculate EST and EFT = EST + Duration (take MAX of predecessors for EST)",
          "2. Set project deadline = EFT of final activity (or assigned milestone)",
          "3. Backward Pass: Calculate LFT and LST = LFT - Duration (take MIN of successors for LFT)",
          "4. Calculate Slack: Slack = LST - EST = LFT - EFT",
          "5. Identify Critical Path: Trace all activities with Slack = 0"
        ],
        description: "Standard algorithmic scheduling process to identify project duration and critical activities."
      }
    ],
    comparisons: [
      {
        conceptA: "WBS",
        conceptB: "Gantt Schedule",
        comparisonPoints: [
          { criterion: "Orientation", detailA: "Deliverable scope hierarchy", detailB: "Chronological calendar timeline" },
          { criterion: "Time Dimension", detailA: "No dates or durations", detailB: "Start/finish dates, durations, dependencies" }
        ]
      }
    ],
    examTraps: [
      { trap: "Assigning duration to milestones", truth: "Milestones always have duration = 0." },
      { trap: "Confusing DoD with Customer Acceptance", truth: "DoD is internal team verification; Acceptance is client contractual sign-off." }
    ],
    memoryShortcuts: [
      { acronym: "EFT", meaning: "Earliest Finish Time = EST + Duration", usage: "Forward pass" },
      { acronym: "LST", meaning: "Latest Start Time = LFT - Duration", usage: "Backward pass" },
      { acronym: "SLACK", meaning: "LST - EST = LFT - EFT", usage: "Critical path identification (Slack=0)" }
    ]
  },
  importantQuestions: unit2ImportantQuestions,
  flashcards: unit2Flashcards,
  mcqs: unit2Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Construct and interpret a 4-level Work Breakdown Structure",
    "Apply Kano and MoSCoW prioritization to requirements",
    "Calculate PERT forward pass, backward pass, and slack to identify critical path",
    "Evaluate Definition of Done and ISO/IEC 25010 quality characteristics"
  ]
};
"""

with open(os.path.join(u2_dir, "index.ts"), "w") as f:
    f.write(index_content)

print("Generated remaining Unit 2 files successfully!")
