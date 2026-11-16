import { DescriptiveQuestion } from "../../../../types";

export const unit2ImportantQuestions: DescriptiveQuestion[] = [
  {
    "id": "itpm-u2-qa-001",
    "unit": 2,
    "question": "Explain the purpose and hierarchical structure of a Work Breakdown Structure (WBS) in IT project management.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects definition of WBS, hierarchical levels (Level 1 project, Level 2 major phases/deliverables, Level 3 work packages, Level 4 elementary tasks), bottom-up estimation rolling upward, and 100% rule.",
    "modelAnswer": "A Work Breakdown Structure (WBS) is a hierarchical decomposition of the total project scope into progressively smaller, more manageable components. Its purpose is to visualize the total work, assign single-point accountability, establish clear boundaries, and provide the baseline for schedule, cost, and resource estimation.\n\nHierarchical Structure:\n1. Level 1: Overarching project name/goal representing 100% of the project scope.\n2. Level 2: Major project deliverables, subsystems, or lifecycle phases.\n3. Level 3: Work packages or functional groupings assigned to specific teams/partners.\n4. Level 4: Elementary tasks and activities representing individual assignable work units.\n\nKey Principles:\n- Bottom-Up Estimation: Duration, cost, and human effort are estimated at the lowest task level and rolled upward.\n- 100% Rule: The child components under any node must encompass exactly 100% of the parent scope, neither omitting work nor introducing gold plating.",
    "answerStructure": [
      "Formal definition and purpose of WBS",
      "Four hierarchical levels with descriptions",
      "Estimation roll-up mechanism",
      "The 100% Rule"
    ],
    "keywords": [
      "Hierarchical decomposition",
      "Manageable components",
      "Work packages",
      "Elementary tasks",
      "Bottom-up estimation",
      "100% Rule"
    ],
    "commonMistakes": "Confusing WBS with an organizational chart or viewing it as a linear schedule rather than a scope decomposition.",
    "selfCheckChecklist": [
      "Did I define WBS as hierarchical decomposition?",
      "Did I mention work packages as manageable groupings?",
      "Did I state that lower-level estimates roll upward?",
      "Did I mention the 100% Rule?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Purpose and Structure",
      "page": 35
    }
  },
  {
    "id": "itpm-u2-qa-002",
    "unit": 2,
    "question": "Differentiate clearly between a Project Deliverable and a Project Milestone.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 6,
    "examinerExpectation": "Examiner expects precise contrast between deliverables (tangible products/documents, consume time/effort, verifiable) and milestones (points in time, zero duration, reference events).",
    "modelAnswer": "A Project Deliverable is a verifiable, tangible product, service, or document produced by project activities (e.g. software module, architecture specification, test report). Deliverables require duration, budget, and labor to create and must be formally verified against predefined acceptance criteria.\n\nA Project Milestone is a significant point or event in time that marks a major achievement, stage transition, or external deadline (e.g. 'Architecture Approved', 'Hardware Integration Complete'). Milestones strictly have ZERO duration and consume no direct resources.\n\nKey Differences:\n1. Nature: Deliverable is the output produced; Milestone is the moment in time.\n2. Duration: Deliverables have finite positive duration; Milestones have zero duration (D = 0).\n3. Quality Function: A milestone does not itself perform quality checks; it simply marks when a milestone state has been reached.",
    "answerStructure": [
      "Definition of Deliverable with examples",
      "Definition of Milestone with zero duration rule",
      "Direct comparison table/points (Nature, Duration, Function)"
    ],
    "keywords": [
      "Deliverable",
      "Milestone",
      "Zero duration",
      "Tangible output",
      "Point in time",
      "Verification criteria"
    ],
    "commonMistakes": "Thinking milestones are tasks that take time, or assuming milestones perform quality checks.",
    "selfCheckChecklist": [
      "Did I state that milestones have zero duration?",
      "Did I explain that deliverables can be physical objects or documents?",
      "Did I contrast tangible output vs moment in time?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Deliverables vs Milestones",
      "page": 36
    }
  },
  {
    "id": "itpm-u2-qa-003",
    "unit": 2,
    "question": "Explain the purpose, structure, and benefits of a Requirements Traceability Matrix (RTM).",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects definition of RTM, bidirectional traceability (business need to test cases), prevention of gold plating, and role in change impact analysis.",
    "modelAnswer": "A Requirements Traceability Matrix (RTM) is a grid that establishes a bidirectional link connecting high-level business requirements to system architecture, work packages, source code components, and verification test cases.\n\nStructure:\nEach matrix row traces a requirement ID through: Business Need -> System Specification -> WBS Work Package -> Architectural Component -> Verification Test Case -> Implementation Status.\n\nKey Benefits:\n1. Coverage Assurance: Proves that every approved stakeholder requirement is designed, built, and tested.\n2. Prevention of Gold Plating: Disallows unauthorized tasks that have no corresponding requirement link.\n3. Change Impact Analysis: When a requirement is modified, the matrix immediately reveals all dependent design modules, code files, and test cases that must be updated.",
    "answerStructure": [
      "Definition of Traceability Matrix",
      "Bidirectional linkage chain (Need -> Code -> Test)",
      "Three core benefits: coverage, scope control, change impact"
    ],
    "keywords": [
      "Requirements Traceability Matrix",
      "Bidirectional link",
      "Gold plating",
      "Impact analysis",
      "Verification test cases"
    ],
    "commonMistakes": "Describing the matrix as purely a test plan rather than an end-to-end scope governance tool.",
    "selfCheckChecklist": [
      "Did I mention linking requirements to design, code, and test cases?",
      "Did I explain how it prevents scope creep / gold plating?",
      "Did I highlight its role in change impact analysis?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Traceability Matrix",
      "page": 38
    }
  },
  {
    "id": "itpm-u2-qa-004",
    "unit": 2,
    "question": "What is a WBS Dictionary and what essential information does it contain?",
    "marks": 6,
    "priority": "POSSIBLE SHORT QUESTION",
    "suggestedTimeMinutes": 6,
    "examinerExpectation": "Examiner expects explanation that the WBS dictionary accompanies the WBS graphic and provides detailed scope descriptions, deliverables, owners, costs, and acceptance criteria.",
    "modelAnswer": "A WBS Dictionary is a companion document that details the specific scope, technical boundaries, and operational attributes of each element in the WBS graphic. While the graphical WBS only shows titles and codes, the WBS dictionary provides the substance.\n\nEssential Information Contained:\n1. Work Package Code & Title: Unique identifier linked to the WBS tree.\n2. Scope & Activity Description: Specific tasks included and excluded.\n3. Assigned Responsibility: The partner, team, or work-package leader accountable.\n4. Deliverables & Milestones: Expected tangible outputs and target dates.\n5. Acceptance Criteria: Measurable quality conditions for sign-off.\n6. Resources & Costs: Required labor, technology, and allocated budget.\n7. Assumptions & Constraints: Environmental factors, dependencies, and risks.",
    "answerStructure": [
      "Definition and relationship to WBS chart",
      "Seven core information items listed and explained",
      "Role in forming the Scope Baseline"
    ],
    "keywords": [
      "WBS Dictionary",
      "Scope baseline",
      "Acceptance criteria",
      "Responsible partner",
      "Assumptions and constraints",
      "Deliverables"
    ],
    "commonMistakes": "Thinking it is an ordinary English language dictionary defining words rather than a project scope specification.",
    "selfCheckChecklist": [
      "Did I list deliverables, responsible partner, and acceptance criteria?",
      "Did I note that it provides detail behind the graphic WBS?",
      "Did I mention resources, costs, and constraints?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Dictionary",
      "page": 39
    }
  },
  {
    "id": "itpm-u2-qa-005",
    "unit": 2,
    "question": "Explain the Urgency versus Importance Matrix and describe how a project manager should manage each quadrant.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects contrast between urgent (immediate reactive crisis) and important (long-term strategic goals), plus explanation of all four quadrants.",
    "modelAnswer": "The Urgency vs Importance (Eisenhower) Matrix classifies project tasks based on immediate time pressure (urgency) versus long-term strategic value (importance).\n\nManagement of the Four Quadrants:\n1. High Urgency + High Importance (Crises / Critical): Immediate focus required. These are project-threatening issues that demand swift action to relieve pressure.\n2. Low Urgency + High Importance (Goals / Proactive Planning): Strategic focus. Here the team works proactively on architecture, risk mitigation, and planning to secure long-term goals without panic.\n3. High Urgency + Low Importance (Interruptions): Attend efficiently, delegate, or automate. Example: routine external progress reporting. Demands immediate time but adds minimal product value.\n4. Low Urgency + Low Importance (Distractions / Waste): Eliminate or strictly limit. Examples: overanalyzing minor issues, micromanagement, and gossip that consume resources without value.",
    "answerStructure": [
      "Definition of Urgency vs Importance",
      "Detailed breakdown of all 4 quadrants",
      "Course book example for Urgent/Low Importance (external reporting)",
      "Danger of operating purely in reactive urgency mode"
    ],
    "keywords": [
      "Urgency",
      "Importance",
      "Reactive mode",
      "Proactive planning",
      "Crises",
      "Interruptions",
      "Distractions"
    ],
    "commonMistakes": "Equating urgency with importance; forgetting the external reporting example.",
    "selfCheckChecklist": [
      "Did I explain the 4 quadrants clearly?",
      "Did I mention proactive planning in High Importance/Low Urgency?",
      "Did I give the course book example of external reporting for High Urgency/Low Importance?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency vs Importance Matrix",
      "page": 39
    }
  },
  {
    "id": "itpm-u2-qa-006",
    "unit": 2,
    "question": "Explain the Kano Model and describe how its three main categories behave regarding customer satisfaction.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects Noriaki Kano's thesis (non-linear satisfaction), three categories (Basic, Performance, Delighters), customer reaction curves, and cRobot examples.",
    "modelAnswer": "Developed by Noriaki Kano, the Kano Model challenges the assumption that customer satisfaction increases linearly with every feature improvement. It proves that different requirement types impact satisfaction in fundamentally different ways.\n\nThree Core Categories:\n1. Basic Requirements (Must-Be): Taken for granted by customers (e.g. mobility in cRobot). Customers rarely mention them because they are 'obvious'. If absent, customers are intensely dissatisfied; if present, satisfaction is merely neutral. Must be 100% fulfilled.\n2. Performance Requirements (Linear Satisfiers): Standard functional capabilities (e.g. robot response speed, battery life). Satisfaction increases proportionally with performance, subject to diminishing returns.\n3. Delighters (Attractive Attributes): Unexpected, innovative features (e.g. human-like head movement in cRobot). If absent, customers feel zero dissatisfaction (no expectation); if present, they produce delight and premium brand perception.\n\nImplementation Rule: Fulfill all Basics first -> Invest in Performance -> Add a few Delighters without overspending.",
    "answerStructure": [
      "Kano thesis and non-linear satisfaction",
      "Explanation of Basic needs with cRobot example",
      "Explanation of Performance needs with cRobot example",
      "Explanation of Delighters with cRobot example",
      "Strategic balancing rule"
    ],
    "keywords": [
      "Kano Model",
      "Basic requirements",
      "Performance needs",
      "Delighters",
      "Customer satisfaction",
      "Diminishing returns"
    ],
    "commonMistakes": "Thinking basic requirements delight customers; forgetting that absence of delighters causes no dissatisfaction.",
    "selfCheckChecklist": [
      "Did I state that absence of delighters causes zero dissatisfaction?",
      "Did I note that basic requirements are taken for granted?",
      "Did I include the cRobot examples (mobility vs head movement)?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Model",
      "page": 40
    }
  },
  {
    "id": "itpm-u2-qa-007",
    "unit": 2,
    "question": "Explain the MoSCoW prioritization method, its origin, and the meaning of each category.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects Dai Clegg (Oracle UK, 1994), meaning of M-S-C-W, reason for words over numbers, and handling scope under schedule pressure.",
    "modelAnswer": "MoSCoW was developed by Dai Clegg of Oracle UK in 1994 as a requirements prioritization framework for software development. It uses words instead of numbers to broaden category scopes and stimulate consensus-driven discussion on business necessity.\n\nFour Categories:\n1. Must-Have (M): Non-negotiable minimum requirements essential for product viability. If a single Must-have is omitted, the release fails.\n2. Should-Have (S): Highly important features that enhance value, but viable temporary workarounds exist if omitted from the current release.\n3. Could-Have (C): Desirable features that would be nice to have if excess time/budget exists, but have zero impact on core success.\n4. Won't-Have (W): Agreed exclusions for the current timebox/release, preserved for consideration in future releases. Protects against scope creep.\n\nDynamic Trade-off: Under time pressure, Could-haves are dropped first, followed by Should-haves. Must-haves are strictly non-negotiable.",
    "answerStructure": [
      "Origin: Dai Clegg, Oracle UK, 1994",
      "Detailed definition of M, S, C, W",
      "Justification for words instead of numbers",
      "Drop priority under schedule pressure"
    ],
    "keywords": [
      "MoSCoW",
      "Dai Clegg",
      "Oracle UK 1994",
      "Must-have",
      "Should-have",
      "Could-have",
      "Won't-have",
      "Workarounds"
    ],
    "commonMistakes": "Forgetting the creator/date (Dai Clegg 1994); confusing Should-have with Must-have.",
    "selfCheckChecklist": [
      "Did I cite Dai Clegg of Oracle UK in 1994?",
      "Did I explain workarounds for Should-haves?",
      "Did I explain that Won't-haves establish timebox boundaries?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Method",
      "page": 42
    }
  },
  {
    "id": "itpm-u2-qa-008",
    "unit": 2,
    "question": "Compare the Kano Model with the MoSCoW method and explain how they complement each other.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects contrast between customer-satisfaction focus (Kano) and delivery-scope focus (MoSCoW), mapping between categories, and combined benefits.",
    "modelAnswer": "Kano and MoSCoW are complementary requirements prioritization tools that view project scope through different analytical lenses.\n\nKey Differences:\n1. Perspective: Kano is customer-satisfaction oriented (evaluating emotional and behavioral user reactions); MoSCoW is project delivery and governance oriented (evaluating contractual and release urgency).\n2. Criteria: Kano evaluates whether features are basic, linear, or surprising; MoSCoW evaluates business necessity and workaround availability.\n\nMapping Between Models:\n- Kano Basic Requirements -> MoSCoW Must-Haves (mandatory baseline).\n- Kano Performance Needs -> MoSCoW Should-Haves (competitive features with workarounds).\n- Kano Delighters -> MoSCoW Could-Haves (attractive additions if budget permits).\n\nComplementary Benefit: Combining them prevents engineering teams from prioritizing only internal technical preferences, ensuring that deliverable releases balance contractual completeness with customer delight.",
    "answerStructure": [
      "Perspective contrast (Customer Satisfaction vs Delivery Scope)",
      "Mapping between Kano and MoSCoW categories",
      "Synergy and combined governance benefit"
    ],
    "keywords": [
      "Kano vs MoSCoW",
      "Customer satisfaction",
      "Delivery priority",
      "Mapping",
      "Basic to Must-have",
      "Delighter to Could-have"
    ],
    "commonMistakes": "Treating them as conflicting alternatives rather than complementary perspectives.",
    "selfCheckChecklist": [
      "Did I contrast customer satisfaction vs delivery priority?",
      "Did I provide the explicit mapping (Basic=Must, Performance=Should, Delighter=Could)?",
      "Did I explain why using both avoids departmental bias?"
    ],
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano vs MoSCoW",
      "page": 15
    }
  },
  {
    "id": "itpm-u2-qa-009",
    "unit": 2,
    "question": "Explain the four precedence relationship types used in activity sequencing with practical IT project examples.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects FS, SS, FF, SF definitions, relative frequency, and realistic IT/cRobot examples from the course book.",
    "modelAnswer": "In precedence diagramming, activities are linked by four logical relationships:\n\n1. Finish-to-Start (FS): The successor cannot start until the predecessor has finished. This is the default and most frequent relationship. Example: Hardware assembly must finish before system testing can start.\n2. Start-to-Start (SS): The successor can start once the predecessor has started (enables concurrency). Example: Software development begins as soon as hardware construction begins, without waiting for assembly completion.\n3. Finish-to-Finish (FF): The successor cannot finish until the predecessor has finished. Example: Final system acceptance documentation cannot finish until system integration testing finishes.\n4. Start-to-Finish (SF): The successor cannot finish until the predecessor has started. This is the rarest dependency. Example: A legacy IT database server cannot be retired (finished) until the new cloud database begins operation (started).",
    "answerStructure": [
      "Introduction to precedence diagramming",
      "Detailed definition of FS, SS, FF, SF",
      "Clear IT/course-book example for each",
      "Note indicating FS is most common and SF is rarest"
    ],
    "keywords": [
      "Finish-to-Start (FS)",
      "Start-to-Start (SS)",
      "Finish-to-Finish (FF)",
      "Start-to-Finish (SF)",
      "Successor",
      "Predecessor",
      "Concurrency"
    ],
    "commonMistakes": "Failing to explain SF or giving an invalid example; forgetting that FS is standard.",
    "selfCheckChecklist": [
      "Did I define all 4: FS, SS, FF, SF?",
      "Did I note that FS is most common and SF is rarest?",
      "Did I provide concrete IT examples for each?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Precedence Relationships",
      "page": 45
    }
  },
  {
    "id": "itpm-u2-qa-010",
    "unit": 2,
    "question": "Define Lead Time, Lag Time, and Slack (Float), and explain their significance in project scheduling.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects definitions of lead (acceleration/overlap), lag (waiting delay), slack/float (buffer before delay occurs), and their management significance.",
    "modelAnswer": "In scheduling dependency management:\n\n1. Lead Time: The amount of time by which a successor activity can be advanced with respect to an overlapping predecessor. It represents an intentional overlap (negative lag) to accelerate schedules when priority is high.\n2. Lag Time: The mandatory delay inserted between the completion/start of a predecessor and the start/finish of a successor (positive lag). Example: waiting 48 hours for database migration scripts to re-index before running user acceptance tests.\n3. Slack (Float): The maximum buffer time an activity can be delayed from its earliest start without delaying the project completion date (Total Float). Calculated as: Slack = LST - EST = LFT - EFT.\n\nSignificance: Lead time enables schedule compression (fast tracking); Lag models physical/technical constraints; Slack identifies schedule flexibility\u2014activities with zero slack form the Critical Path.",
    "answerStructure": [
      "Definition of Lead time with scheduling effect",
      "Definition of Lag time with practical example",
      "Definition and formula for Slack (Float)",
      "Strategic significance (acceleration, physical waiting, critical path identification)"
    ],
    "keywords": [
      "Lead time",
      "Lag time",
      "Slack",
      "Float",
      "Schedule compression",
      "Overlap",
      "Mandatory delay",
      "Critical path"
    ],
    "commonMistakes": "Confusing lead (overlap) with lag (waiting delay); forgetting the slack formula.",
    "selfCheckChecklist": [
      "Did I define Lead as overlap/acceleration?",
      "Did I define Lag as mandatory delay?",
      "Did I provide the Slack formula (LST - EST)?",
      "Did I link zero slack to the critical path?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Leads, Lags, and Slack",
      "page": 46
    }
  },
  {
    "id": "itpm-u2-qa-011",
    "unit": 2,
    "question": "Explain the mechanics of the Program Evaluation Review Technique (PERT), including the Forward Pass, Backward Pass, and Critical Path determination.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "examinerExpectation": "Examiner expects explanation of PERT node, forward pass formula (EFT = EST + Dur, max merge rule), backward pass formula (LST = LFT - Dur, min burst rule), slack calculation, and critical path definition.",
    "modelAnswer": "PERT is an event-oriented network analysis technique that models task sequences, durations, and dependencies to determine project duration and scheduling buffers.\n\nMechanics:\n1. Forward Pass (Beginning to End, starting Day 0):\n- Calculates Earliest Start Time (EST) and Earliest Finish Time (EFT).\n- Formula: EFT = EST + Duration.\n- Merge Rule: If an activity has multiple incoming predecessors, EST = MAXIMUM(EFT of all predecessors). The project duration equals the maximum EFT of the terminal task.\n\n2. Backward Pass (End to Beginning, starting from Project Finish):\n- Calculates Latest Finish Time (LFT) and Latest Start Time (LST).\n- Formula: LST = LFT - Duration.\n- Burst Rule: If an activity has multiple outgoing successors, LFT = MINIMUM(LST of all successors).\n\n3. Slack & Critical Path:\n- Slack = LST - EST = LFT - EFT.\n- Critical Path: The sequence of dependent activities having ZERO slack. It is the longest continuous path through the network and dictates the shortest possible project completion time. Any delay on the critical path causes an identical project delay.",
    "answerStructure": [
      "Definition of PERT and node elements",
      "Forward pass rules and merge formula (MAX)",
      "Backward pass rules and burst formula (MIN)",
      "Slack formula and Critical Path definition with delay rule"
    ],
    "keywords": [
      "PERT",
      "Forward pass",
      "Backward pass",
      "EST/EFT",
      "LST/LFT",
      "Maximum EFT merge",
      "Minimum LST burst",
      "Critical path",
      "Zero slack"
    ],
    "commonMistakes": "Using MIN during forward pass or MAX during backward pass; forgetting that critical path has zero slack.",
    "selfCheckChecklist": [
      "Did I state EFT = EST + Dur?",
      "Did I specify MAX EFT for forward pass merges?",
      "Did I state LST = LFT - Dur and MIN LST for backward pass bursts?",
      "Did I define Critical Path as zero slack and longest path?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "PERT Mechanics",
      "page": 48
    }
  },
  {
    "id": "itpm-u2-qa-012",
    "unit": 2,
    "question": "Discuss the advantages and limitations of Gantt Charts in IT project planning.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects visual timeline advantages, concurrency clarity, alongside course-book limitations (lack of resource quantities/costs, maintenance burden, complexity).",
    "modelAnswer": "A Gantt Chart is a horizontal bar chart displaying project activities along a calendar timeline, showing start/finish dates, durations, dependency arrows, and progress status.\n\nAdvantages:\n1. Intuitive Visualization: Presents schedule timelines in an easily digestible visual format for technical teams and executive stakeholders.\n2. Concurrency & Overlap: Clearly displays parallel work streams and scheduling overlaps, assisting realistic deadline setting.\n3. Milestone Tracking: Highlights key delivery dates and stage gates along the calendar axis.\n\nLimitations (Explicitly Emphasized in IU Course Book):\n1. No Resource Quantities or Costs: A bar on a Gantt chart does not differentiate between an 8-week task requiring 20 engineers costing $200k and an 8-week task requiring 2 engineers costing $15k.\n2. Maintenance Overhead: Gantt charts are not static; ongoing slippages and progress must be constantly updated, or they become misleading.\n3. Complexity Breakdown: In large IT projects with hundreds of interdependent tasks, Gantt charts become overwhelming and unreadable.",
    "answerStructure": [
      "Definition of Gantt chart",
      "Three core advantages (visual clarity, concurrency, milestones)",
      "Three specific course book limitations (resources/cost invisibility, dynamic maintenance, scale complexity)",
      "Conclusion: why PERT and Gantt are used complementarily"
    ],
    "keywords": [
      "Gantt chart",
      "Visual timeline",
      "Concurrency",
      "Resource quantity limitation",
      "Cost invisibility",
      "Maintenance overhead",
      "Complementary use"
    ],
    "commonMistakes": "Claiming Gantt charts show budget or resource allocation directly; forgetting the course book's explicit 20-people vs 10-people example.",
    "selfCheckChecklist": [
      "Did I mention that Gantt does NOT show resource quantities or costs?",
      "Did I mention that it requires continuous updating?",
      "Did I highlight its visual strengths for stakeholder communication?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Gantt Advantages and Limitations",
      "page": 51
    }
  },
  {
    "id": "itpm-u2-qa-013",
    "unit": 2,
    "question": "Explain the concept of 'Definition of Done' (DoD) in IT projects and distinguish it from Customer Acceptance.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects definition of DoD, typical checklist criteria, internal team QA role, and clear distinction from external customer acceptance.",
    "modelAnswer": "The Definition of Done (DoD) is a formally agreed-upon checklist of quality and technical criteria that a deliverable or user story must satisfy before being marked as finished.\n\nStandard DoD Inclusions:\n- Code written to established organizational programming standards.\n- Peer code review completed and approved.\n- Unit and integration automated test suites executed with 100% pass rate.\n- Deployed and operational in a staging/test environment.\n- Architectural and user documentation updated.\n\nDistinction from Customer Acceptance:\n1. Origin and Ownership: DoD is established, owned, and enforced internally by the development team; Customer Acceptance is evaluated and authorized by the external client, product owner, or sponsor.\n2. Purpose: DoD serves as an internal quality assurance filter to ensure technical integrity before passing work forward; Customer Acceptance confirms that the deliverable fulfills business requirements and solves the client's operational problem.\n3. Timing: DoD is checked continuously at the end of every task or sprint; Acceptance occurs at formal milestone reviews or project closeout.",
    "answerStructure": [
      "Definition of DoD",
      "Standard five criteria of DoD",
      "Three-point contrast with Customer Acceptance (Ownership, Purpose, Timing)",
      "Note on DoD evolution as team matures"
    ],
    "keywords": [
      "Definition of Done (DoD)",
      "Customer Acceptance",
      "Internal QA filter",
      "Peer review",
      "Unit tests",
      "Documentation",
      "Stakeholder sign-off"
    ],
    "commonMistakes": "Equating DoD with customer acceptance; omitting the standard technical criteria.",
    "selfCheckChecklist": [
      "Did I state that DoD is an internal team QA filter?",
      "Did I state that Customer Acceptance is external client sign-off?",
      "Did I list the standard criteria: code standard, review, tests, integrated, documented?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD vs Acceptance",
      "page": 53
    }
  },
  {
    "id": "itpm-u2-qa-014",
    "unit": 2,
    "question": "Explain the ISO/IEC 25010 Quality-in-Use Model and detail its five characteristics.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects purpose of standard, list and definition of all 5 Quality-in-Use characteristics (mnemonic S-E-F-E-C), and the sub-elements of Context Coverage.",
    "modelAnswer": "The ISO/IEC 25010 standard provides systems and software quality models. The 'Quality-in-Use' model assesses the real-world operational impact on stakeholders interacting with the software in specific contexts of use.\n\nFive Characteristics (Mnemonic: S-E-F-E-C):\n1. Satisfaction: The degree to which user needs are satisfied when a product is used (sub-factors: usefulness, trust, pleasure, comfort).\n2. Effectiveness: The accuracy and completeness with which users achieve specified goals.\n3. Freedom from Risk: The degree to which a product mitigates potential risk to economic status, human life, health, or the environment.\n4. Efficiency: The resources expended (time, effort, cost) in relation to the accuracy and completeness with which users achieve goals.\n5. Context Coverage: The degree to which the product can be used with effectiveness, efficiency, freedom from risk, and satisfaction in specified and unanticipated contexts.\n   - Context Completeness: Usable in all specified contexts (e.g. low bandwidth, small screens, fault-tolerant mode).\n   - Flexibility: Usable in contexts beyond those initially anticipated.",
    "answerStructure": [
      "Definition and purpose of ISO/IEC 25010 Quality-in-Use model",
      "List and define all 5 characteristics (S-E-F-E-C)",
      "Detailed explanation of Context Coverage sub-elements (Completeness vs Flexibility)"
    ],
    "keywords": [
      "ISO/IEC 25010",
      "Quality-in-Use",
      "Satisfaction",
      "Effectiveness",
      "Freedom from risk",
      "Efficiency",
      "Context coverage",
      "Context completeness",
      "Flexibility"
    ],
    "commonMistakes": "Listing product quality characteristics (like security or maintainability) instead of quality-in-use characteristics.",
    "selfCheckChecklist": [
      "Did I list all 5: Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage?",
      "Did I break down Context Coverage into Completeness and Flexibility?",
      "Did I explain real-world user interaction context?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality-in-Use Model",
      "page": 54
    }
  },
  {
    "id": "itpm-u2-qa-015",
    "unit": 2,
    "question": "List and explain the eight characteristics of the ISO/IEC 25010 Product Quality Model.",
    "marks": 6,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 10,
    "examinerExpectation": "Examiner expects all 8 Product Quality characteristics (mnemonic F-P-U-R-S-C-P-M) with concise definitions.",
    "modelAnswer": "The ISO/IEC 25010 Product Quality Model categorizes static software properties and dynamic computer system properties into eight quality characteristics:\n\n1. Functional Suitability: Degree to which functions meet stated and implied needs (completeness, correctness, appropriateness).\n2. Performance Efficiency: Performance relative to resource utilization under stated conditions (time behavior, capacity).\n3. Usability: Degree to which specified users can achieve specified goals with effectiveness, efficiency, and satisfaction (learnability, operability, aesthetics, accessibility).\n4. Reliability: Degree to which the system maintains a specified level of performance under stated conditions (maturity, availability, fault tolerance, recoverability).\n5. Security: Degree to which information and data are protected according to authorization levels (confidentiality, integrity, non-repudiation, accountability, authenticity).\n6. Compatibility: Degree to which systems perform functions while sharing environments and exchanging information (coexistence, interoperability).\n7. Portability: Effectiveness with which software can be transferred between environments (adaptability, installability).\n8. Maintainability: Effectiveness with which software can be modified, corrected, or enhanced (modularity, reusability, analyzability, modifiability, testability).",
    "answerStructure": [
      "Introduction to Product Quality Model",
      "Enumeration and definition of all 8 characteristics",
      "Mnemonic F-P-U-R-S-C-P-M",
      "Key sub-characteristics highlighted"
    ],
    "keywords": [
      "ISO/IEC 25010",
      "Product Quality",
      "Functional suitability",
      "Performance efficiency",
      "Usability",
      "Reliability",
      "Security",
      "Compatibility",
      "Portability",
      "Maintainability"
    ],
    "commonMistakes": "Mixing up the 5 Quality-in-Use characteristics with the 8 Product Quality characteristics.",
    "selfCheckChecklist": [
      "Did I list all 8 product quality characteristics?",
      "Did I define each characteristic accurately?",
      "Did I mention sub-elements like non-repudiation in security or modularity in maintainability?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Product Quality Model",
      "page": 55
    }
  },
  {
    "id": "itpm-u2-qa-016",
    "unit": 2,
    "question": "Define a Quality Gate and explain how it operates in large IT projects.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 6,
    "examinerExpectation": "Examiner expects Kneuper (2018) definition: deliverable definition + formal quality review at stage end, go/no-go decision, contrast with simple milestones.",
    "modelAnswer": "As defined by Kneuper (2018) and cited in the IU course book, a Quality Gate consists of: (1) a definition of results to be delivered at a specific point in the project (such as at the end of a project phase), plus (2) a formal review to verify that all expected deliverables are available in adequate quality.\n\nOperation in Large IT Projects:\n1. Phase Transition Governance: Acts as a mandatory boundary control between project phases (e.g. between Architecture Design and Core Coding). Work cannot progress to the next phase until the gate is passed.\n2. Formal Evaluation: Reviewers evaluate deliverables against objective criteria and acceptance thresholds rather than subjective impressions.\n3. Go / No-Go Decision: Yields three possible outcomes:\n   - Pass (Go): Deliverables approved; next phase begins.\n   - Conditional Pass: Minor remediations required in parallel.\n   - Fail (No-Go): Critical defects exist; work remains in current phase until remediated.\n\nContrast: A milestone is merely a calendar point in time; a quality gate performs formal quality verification and gatekeeping.",
    "answerStructure": [
      "Formal definition citing Kneuper (2018)",
      "Two core elements: Deliverables definition + Formal review",
      "Three operational outcomes (Pass, Conditional, Fail)",
      "Contrast with calendar milestones"
    ],
    "keywords": [
      "Quality Gate",
      "Kneuper 2018",
      "Formal review",
      "Deliverable definition",
      "Go/No-Go decision",
      "Phase transition"
    ],
    "commonMistakes": "Treating quality gates as informal coffee check-ins rather than formal stage-boundary governance.",
    "selfCheckChecklist": [
      "Did I define quality gate as deliverables + formal review?",
      "Did I explain the Go/No-go decision mechanism?",
      "Did I cite Kneuper (2018) or stage-end verification?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality Gates",
      "page": 58
    }
  },
  {
    "id": "itpm-u2-qa-017",
    "unit": 2,
    "question": "Compare Plan-Driven (Traditional) and Agile Planning approaches in IT project management.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 8,
    "examinerExpectation": "Examiner expects comparison across scope definition timing, dependency management, adaptability to change, documentation intensity, and appropriate project types.",
    "modelAnswer": "Plan-Driven (Waterfall) and Agile approaches represent contrasting planning philosophies across project lifecycles:\n\n1. Scope & Detail Timing:\n- Plan-Driven: Defines comprehensive WBS, schedule networks, and detailed specifications upfront during the initiation/planning phase.\n- Agile: Defines high-level scope upfront (product backlog, epics) and elaborates detailed task breakdowns iteratively just-in-time during sprint planning.\n\n2. Change Handling:\n- Plan-Driven: Treats change as a variance to be controlled via formal change request boards.\n- Agile: Embraces requirement changes as value opportunities, reprioritizing the backlog between sprints.\n\n3. Dependency & Risk Focus:\n- Plan-Driven: Highly suited for projects with heavy hardware/external dependencies, strict regulations, or fixed contracts where dependencies must be mapped in advance.\n- Agile: Highly suited for volatile software environments where user needs evolve rapidly through iterative feedback.\n\n4. Synthesis: Most modern enterprise IT projects use hybrid approaches\u2014combining plan-driven milestones and quality gates with agile sprint execution.",
    "answerStructure": [
      "Timing of detailed breakdown (Upfront vs Iterative)",
      "Change attitude and governance",
      "Appropriate project contexts",
      "Hybrid synthesis"
    ],
    "keywords": [
      "Plan-driven",
      "Agile",
      "Upfront planning",
      "Just-in-time elaboration",
      "Change control",
      "Backlog reprioritization",
      "Hybrid model"
    ],
    "commonMistakes": "Claiming agile has no planning or that waterfall cannot adapt to any changes.",
    "selfCheckChecklist": [
      "Did I contrast upfront detail vs just-in-time iteration?",
      "Did I explain change handling in both?",
      "Did I highlight the hybrid compromise?"
    ],
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "Plan-Driven vs Agile",
      "page": 16
    }
  },
  {
    "id": "itpm-u2-qa-018",
    "unit": 2,
    "question": "Explain Bannerman & Thorogood's (2012) Multi-Domain Framework for evaluating IT project success.",
    "marks": 6,
    "priority": "POSSIBLE SHORT QUESTION",
    "suggestedTimeMinutes": 6,
    "examinerExpectation": "Examiner expects citation of Bannerman & Thorogood (2012), explanation of why simple on-time/on-budget is insufficient, and listing of all five domains.",
    "modelAnswer": "Bannerman & Thorogood (2012) established a multi-domain framework challenging the simplistic view that IT project success is determined solely by meeting time and budget constraints (the Iron Triangle). They argue that success must be evaluated across multiple stakeholder horizons.\n\nFive Independent Domains:\n1. Process Domain: Adherence to planned procedures, quality standards, and development methodology.\n2. Project Management Domain: Delivery efficiency regarding schedule, budget, resource utilization, and scope baseline control.\n3. Product Domain: Technical quality, usability, reliability, and satisfaction of functional/non-functional requirements by the deliverable.\n4. Business Domain: Realization of financial return on investment (ROI), cost savings, and operational revenue improvements.\n5. Strategy Domain: Long-term organizational competitiveness, brand enhancement, strategic alignment, and future capability building.\n\nSignificance: A project might exceed budget (failing PM domain) but deliver revolutionary strategic market dominance (succeeding in Business and Strategy domains).",
    "answerStructure": [
      "Limitation of traditional Iron Triangle success metrics",
      "Citation of Bannerman & Thorogood (2012)",
      "Definition of all five domains (Process, PM, Product, Business, Strategy)",
      "Core insight: multi-horizon success evaluation"
    ],
    "keywords": [
      "Bannerman & Thorogood 2012",
      "Multi-domain framework",
      "Process",
      "Project Management",
      "Product",
      "Business",
      "Strategy",
      "Iron Triangle limitations"
    ],
    "commonMistakes": "Confusing the five domains with the five project phases (Initiation, Planning, etc.).",
    "selfCheckChecklist": [
      "Did I cite Bannerman & Thorogood (2012)?",
      "Did I list all 5 domains: Process, PM, Product, Business, Strategy?",
      "Did I explain that projects can succeed strategically even if schedule slips?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Multi-Domain Success Framework",
      "page": 58
    }
  },
  {
    "id": "itpm-u2-qa-019",
    "unit": 2,
    "question": "A project manager discovers that Task K has EST = 10, EFT = 15, LST = 14, and LFT = 19. Explain what these numbers mean, calculate its Slack, and explain whether Task K is on the Critical Path.",
    "marks": 6,
    "priority": "HIGH PRIORITY",
    "suggestedTimeMinutes": 6,
    "examinerExpectation": "Examiner expects interpretation of EST, EFT, LST, LFT, calculation of Slack (Slack = 4), and conclusion that Task K is NOT on the critical path.",
    "modelAnswer": "Numerical Interpretation:\n- Duration = EFT - EST = 15 - 10 = 5 weeks (or 19 - 14 = 5 weeks).\n- Earliest Start Time (EST = 10): The earliest week Task K can begin, constrained by predecessor completion.\n- Earliest Finish Time (EFT = 15): The earliest week Task K can complete if started at EST.\n- Latest Start Time (LST = 14): The latest week Task K can start without delaying project completion.\n- Latest Finish Time (LFT = 19): The latest week Task K can complete without delaying project completion.\n\nSlack Calculation:\nSlack = LST - EST = 14 - 10 = 4 weeks\n(Equivalently: Slack = LFT - EFT = 19 - 15 = 4 weeks).\n\nCritical Path Evaluation:\nTask K is NOT on the Critical Path. Activities on the critical path have zero slack (Slack = 0). Task K has 4 weeks of scheduling buffer. If Task K is delayed by up to 4 weeks, the overall project delivery date remains completely unaffected.",
    "answerStructure": [
      "Identification of Duration and 4 schedule values",
      "Slack formula and calculation yielding 4 weeks",
      "Critical path rule: zero slack",
      "Conclusion: Task K is non-critical with 4 weeks buffer"
    ],
    "keywords": [
      "EST",
      "EFT",
      "LST",
      "LFT",
      "Slack calculation",
      "Buffer",
      "Critical path evaluation",
      "Zero slack rule"
    ],
    "commonMistakes": "Subtracting EST from LFT to get slack; concluding it is critical despite positive slack.",
    "selfCheckChecklist": [
      "Did I compute Slack = 4 weeks?",
      "Did I explain both formula variations (LST - EST and LFT - EFT)?",
      "Did I clearly conclude it is NOT on the critical path because Slack > 0?"
    ],
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack and Critical Path Analysis",
      "page": 50
    }
  },
  {
    "id": "itpm-u2-qa-020",
    "unit": 2,
    "question": "Critically analyze how an IT project manager should integrate WBS, MoSCoW/Kano prioritization, PERT/Gantt scheduling, DoD, and Quality Gates to organize work effectively.",
    "marks": 20,
    "priority": "VERY HIGH PRIORITY",
    "suggestedTimeMinutes": 25,
    "examinerExpectation": "Examiner expects holistic synthesis linking: (1) Scope decomposition (WBS, 100% rule), (2) Prioritization (Kano customer impact, MoSCoW delivery boundaries), (3) Scheduling (Precedences, PERT network forward/backward pass, Critical path, Gantt timeline), (4) Quality & Acceptance (DoD internal QA, ISO 25010 models, Quality Gates at phase transitions).",
    "modelAnswer": "Organizing IT project work requires a cohesive end-to-end management framework that connects initial high-level requirements to verified deliverables.\n\n1. Scope Decomposition (WBS & Traceability):\n- The project manager begins after charter authorization by decomposing total scope into hierarchical levels: Level 1 project title -> Level 2 major deliverables/phases -> Level 3 work packages -> Level 4 elementary tasks.\n- The 100% Rule ensures that decomposed child nodes contain all required work without scope omissions or gold plating.\n- A Requirements Traceability Matrix (RTM) connects each business requirement to work packages, code components, and verification test suites, enabling rapid change impact analysis.\n\n2. Requirements Prioritization (Kano & MoSCoW):\n- Prioritization resolves resource constraints and prevents knee-jerk urgency management.\n- The Kano Model assesses customer satisfaction: 100% of Basic requirements (mobility in cRobot) must be met; Performance features (response speed) are optimized; Delighters (head movement) are added sparingly to avoid cost overruns.\n- MoSCoW establishes release boundaries: Must-haves are non-negotiable; Should-haves are included with workarounds identified; Could-haves are dropped under schedule pressure; Won't-haves establish explicit release boundaries.\n\n3. Time Planning & Dependency Modeling (PERT & Gantt):\n- Activity sequencing identifies logical precedences: FS (default), SS (concurrency), FF (completion coordination), SF (legacy transitions), along with leads and lags.\n- PERT analysis computes network mathematical baselines: Forward Pass calculates EST and EFT (taking MAX at merges); Backward Pass calculates LST and LFT (taking MIN at bursts).\n- Slack is determined (Slack = LST - EST). The sequence of zero-slack tasks forms the Critical Path, indicating activities where any delay delays the project.\n- Gantt charts translate PERT network logic into intuitive calendar bars for stakeholder communication, while recognizing that Gantt does not show resource quantities or costs.\n\n4. Quality Governance & Acceptance (DoD, ISO 25010, Quality Gates):\n- Definition of Done (DoD) establishes the internal team quality filter (coded to standards, peer-reviewed, unit-tested, integrated, documented) before marking items complete.\n- ISO/IEC 25010 guides quality definitions across two models: Quality-in-Use (Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage) and Product Quality (Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, Maintainability).\n- Quality Gates (Kneuper, 2018) govern phase transitions: formal intermediate reviews evaluating deliverables against criteria to issue Go/No-Go decisions before the project proceeds to subsequent stages.",
    "answerStructure": [
      "Executive Introduction: Systems approach to organizing IT work",
      "Phase 1: Scope Decomposition (WBS, 100% Rule, Traceability Matrix)",
      "Phase 2: Prioritization (Kano customer impact + MoSCoW scope boundaries)",
      "Phase 3: Time & Dependency Planning (Precedences, PERT forward/backward passes, Critical Path, Gantt visualization)",
      "Phase 4: Quality & Acceptance Governance (DoD team filter, ISO 25010 models, Quality Gates, Customer Acceptance)",
      "Conclusion: Dynamic nature of baseline plans throughout execution"
    ],
    "keywords": [
      "WBS",
      "100% Rule",
      "Traceability Matrix",
      "Kano Model",
      "MoSCoW",
      "Precedences",
      "PERT",
      "Critical Path",
      "Slack",
      "Gantt chart",
      "Definition of Done",
      "ISO/IEC 25010",
      "Quality Gate",
      "Kneuper 2018"
    ],
    "commonMistakes": "Treating these tools as disconnected silos rather than an integrated project governance pipeline.",
    "selfCheckChecklist": [
      "Did I cover all required areas: WBS, Traceability, Kano, MoSCoW, PERT, Gantt, DoD, ISO 25010, Quality Gates?",
      "Did I show how lower-level estimates roll up into baselines?",
      "Did I distinguish internal DoD from external customer acceptance?",
      "Did I explain the transition from PERT calculations to Gantt visualizations?"
    ],
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "Comprehensive Work Organization",
      "page": 17
    }
  }
];
