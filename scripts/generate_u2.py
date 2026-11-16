import json, os

u2_dir = "/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-2"
os.makedirs(u2_dir, exist_ok=True)

# -----------------------------------------------------------------------------
# 1. SUMMARY SECTIONS & CONCEPTS
# -----------------------------------------------------------------------------
summary_sections = [
    {
        "title": "2.1 Project Breakdown Structure & Work Packages",
        "summaryParagraph": "The Work Breakdown Structure (WBS) is a hierarchical decomposition of the total project scope into manageable, deliverable-oriented components. It begins with the project level (Level 1) and subdivides into major areas/phases (Level 2), functional entities (Level 3), and specific tasks (Level 4). Lower-level estimates roll up into higher levels. The Requirements Traceability Matrix connects requirements from initial specification to architecture, code, testing, and acceptance.",
        "keyPoints": [
            "WBS 4-level hierarchy: Level 1 (Project/Product), Level 2 (Major areas/phases), Level 3 (Functions), Level 4 (Tasks).",
            "Bottom-up roll-up: task estimates aggregate upward. If roll-up exceeds constraints, scope or plan must be adjusted.",
            "Work Package (WP): manageable grouping of related tasks with assigned owner, duration, cost, and deliverable.",
            "Milestone: significant checkpoint representing zero duration (duration = 0) and zero resource consumption.",
            "Agile work breakdown: Epic -> User Story -> Task.",
            "Requirements Traceability Matrix: Requirement -> Design -> Code Component -> Test Case -> Sign-off status. Prevents missing work and scope creep."
        ],
        "examInsight": "Examiners test the bottom-up roll-up logic, the difference between a task and a milestone (duration=0), and the exact purpose of the Requirements Traceability Matrix."
    },
    {
        "title": "2.2 Prioritization",
        "summaryParagraph": "Prioritization resolves competing stakeholder demands and finite project resources. Three key models are taught: the Urgency x Importance Matrix (4 quadrants), the Kano Model (Basic/Must-be, Performance/Satisfiers, Delighters/Attractive with diminishing returns), and MoSCoW (Must, Should, Could, Won't have). Combining Kano with MoSCoW provides balanced value delivery.",
        "keyPoints": [
            "Urgency x Importance Matrix: Q1 (High/High: Critical/Focus), Q2 (High Importance/Low Urgency: Strategic Goals/Attend), Q3 (Low Importance/High Urgency: Interruptions/Avoid), Q4 (Low/Low: Distractions/Limit).",
            "Kano Model: Basic (mandatory, creates dissatisfaction if missing, no extra satisfaction if exceeded), Performance (linear satisfaction), Delighter (unexpected, high customer excitement; over time becomes expected).",
            "MoSCoW: Must-have (mandatory minimum for success), Should-have (important but non-vital workaround available), Could-have (nice-to-have, dropped if pressure mounts), Won't-have (agreed out of scope for now).",
            "Departmental perspectives: different stakeholders categorize the same feature differently."
        ],
        "examInsight": "Distinguish Basic vs Delighter in Kano. Remember that over time, delighters decay into basic requirements."
    },
    {
        "title": "2.3 Time Planning, Milestones, and Gantt Chart",
        "summaryParagraph": "Time planning translates sequenced activities into a calendar schedule. It involves four precedence dependency relationships (FS, SS, SF, FF), lead time (acceleration), lag time (mandatory waiting), and network diagramming (PERT/CPM). Critical path analysis determines project duration using forward pass (earliest times) and backward pass (latest times). Gantt charts provide visual schedule representations.",
        "keyPoints": [
            "Four Precedence Types: Finish-to-Start (FS - most common), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF - rare).",
            "Lead time advances successor; Lag time delays successor by mandatory waiting period.",
            "PERT Formulas: EFT = EST + Duration; LST = LFT - Duration; Slack (Float) = LST - EST = LFT - EFT.",
            "Critical Path: sequence of activities with zero slack. Any delay on the critical path directly delays project completion.",
            "Gantt Chart advantages: visual timeline, easy for stakeholders, tracks progress. Limitations: hides resource quantities, costs, and complex dependency nets."
        ],
        "examInsight": "PERT forward pass takes MAX of predecessors for EST; backward pass takes MIN of successors for LFT. Critical path always has zero float/slack."
    },
    {
        "title": "2.4 Definition of Done",
        "summaryParagraph": "The Definition of Done (DoD) establishes agreed quality criteria that a deliverable, user story, or work package must satisfy before being considered complete. It operationalizes quality standards such as ISO/IEC 25010 (Quality in Use: 5 characteristics; Product Quality: 8 characteristics). Quality gates serve as formal governance checkpoints separating phases.",
        "keyPoints": [
            "DoD: comprehensive team checklist of technical and operational criteria (e.g. code reviewed, unit tests passed, documentation updated, integrated).",
            "DoD != Customer Acceptance: DoD is team-internal readiness; Customer Acceptance is formal client sign-off.",
            "ISO/IEC 25010 Quality in Use (5): Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage.",
            "ISO/IEC 25010 Product Quality (8): Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability.",
            "Quality Gates: formal milestone checkpoints verifying quality before allowing advancement to subsequent phases."
        ],
        "examInsight": "Never confuse DoD with final customer acceptance. DoD ensures completeness and quality before demonstration/handoff."
    }
]

concepts = [
    {
        "id": "itpm-u2-conc-001",
        "term": "Work Breakdown Structure (WBS)",
        "simpleExplanation": "Breaking a huge project into small, manageable chunks like phases, functions, and tasks.",
        "examDefinition": "A hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish project objectives and create deliverables.",
        "whyItMatters": "Without a WBS, estimating costs, assigning tasks, and tracking schedule variances is impossible.",
        "howItWorks": "Decomposes Level 1 (Project) -> Level 2 (Areas/Phases) -> Level 3 (Functions) -> Level 4 (Tasks). Task estimates roll up to the top.",
        "examKeywords": ["Hierarchical decomposition", "Deliverable-oriented", "Roll-up", "Work package", "Scope control"],
        "commonTrap": "Confusing WBS with a sequential schedule; WBS is a scope hierarchy, not a chronological timeline.",
        "category": "Scope Management"
    },
    {
        "id": "itpm-u2-conc-002",
        "term": "Work Package (WP)",
        "simpleExplanation": "The lowest or manageable level of work that can be assigned to one person or team.",
        "examDefinition": "A deliverable or work component at the lower level of the WBS that groups related tasks, with assigned accountability, budget, and timeline.",
        "whyItMatters": "Forms the basic unit for work assignment, tracking, and progress reporting.",
        "howItWorks": "Contains specific tasks, estimated effort, budget, assigned owner, and clear exit criteria.",
        "examKeywords": ["Manageable grouping", "Accountability", "Lower WBS level", "Deliverable"],
        "category": "Scope Management"
    },
    {
        "id": "itpm-u2-conc-003",
        "term": "Requirements Traceability Matrix",
        "simpleExplanation": "A table connecting each customer requirement to its design, code, test case, and approval.",
        "examDefinition": "A grid linking requirements from their origin through architecture and implementation to verification tests and final acceptance.",
        "whyItMatters": "Guarantees no requirement is forgotten and stops gold plating (unauthorized work).",
        "howItWorks": "Tracks ID, requirement text, architectural component, test cases, and delivery status.",
        "examKeywords": ["Traceability", "Bidirectional link", "Scope creep prevention", "Verification"],
        "category": "Scope Management"
    },
    {
        "id": "itpm-u2-conc-004",
        "term": "Kano Model",
        "simpleExplanation": "Categorizes features into must-haves, performance features, and delighters to maximize user satisfaction.",
        "examDefinition": "A customer satisfaction model classifying product attributes into Basic (Must-be), Performance (Satisfiers), and Delighters (Excitement/Attractive).",
        "whyItMatters": "Helps avoid over-investing in basic features while ignoring high-satisfaction differentiators.",
        "howItWorks": "Basic features cause dissatisfaction if absent; Performance scales linearly; Delighters create high excitement with low effort.",
        "examKeywords": ["Basic", "Performance", "Delighter", "Diminishing returns", "Decay of excitement"],
        "category": "Prioritization"
    },
    {
        "id": "itpm-u2-conc-005",
        "term": "MoSCoW Method",
        "simpleExplanation": "Prioritizes requirements as Must have, Should have, Could have, or Won't have right now.",
        "examDefinition": "A prioritization technique establishing four strict delivery categories: Must-have, Should-have, Could-have, and Won't-have (this time).",
        "whyItMatters": "Ensures that under schedule or budget pressure, the team drops Could-haves first without jeopardizing project success.",
        "howItWorks": "Musts are mandatory minimums; Shoulds have workarounds; Coulds are low impact; Won'ts are deferred.",
        "examKeywords": ["Must-have", "Should-have", "Could-have", "Won't-have", "Scope flexibility"],
        "category": "Prioritization"
    },
    {
        "id": "itpm-u2-conc-006",
        "term": "Critical Path Method (CPM)",
        "simpleExplanation": "The longest path of dependent activities that dictates the shortest possible project completion time.",
        "examDefinition": "The sequence of network activities with zero slack/float that determines the minimum overall project duration.",
        "whyItMatters": "Any delay to a critical path activity causes a day-for-day delay to the entire project.",
        "howItWorks": "Computed via forward pass (EST, EFT) and backward pass (LFT, LST). Activities where Slack = LST - EST = 0 are on the critical path.",
        "examKeywords": ["Zero slack", "Longest sequence", "Minimum duration", "Forward pass", "Backward pass"],
        "category": "Time Planning"
    },
    {
        "id": "itpm-u2-conc-007",
        "term": "Definition of Done (DoD)",
        "simpleExplanation": "The formal team checklist of quality and completion criteria required before a work item is marked complete.",
        "examDefinition": "An agreed-upon set of standards, quality gates, and technical criteria that a deliverable must satisfy to be considered finished.",
        "whyItMatters": "Prevents half-finished work from polluting subsequent sprints or phases and accumulating technical debt.",
        "howItWorks": "Includes peer review, automated tests passed, documentation updated, and build passing.",
        "examKeywords": ["Quality criteria", "Agreed checklist", "Technical debt prevention", "Team agreement"],
        "category": "Quality Management"
    },
    {
        "id": "itpm-u2-conc-008",
        "term": "ISO/IEC 25010 Quality Model",
        "simpleExplanation": "The international standard defining software product quality (8 attributes) and quality in use (5 attributes).",
        "examDefinition": "A comprehensive standard specifying Product Quality (Functional Suitability, Performance, Compatibility, Usability, Reliability, Security, Maintainability, Portability) and Quality in Use (Effectiveness, Efficiency, Satisfaction, Risk Freedom, Context Coverage).",
        "whyItMatters": "Provides structured, non-ambiguous criteria for technical acceptance and quality assurance.",
        "howItWorks": "Used as a reference checklist to derive measurable DoD metrics and acceptance criteria.",
        "examKeywords": ["ISO/IEC 25010", "Product Quality", "Quality in Use", "Functional suitability", "Maintainability"],
        "category": "Quality Management"
    }
]

with open(os.path.join(u2_dir, "concepts.ts"), "w") as f:
    f.write('import { KeyConcept, UnitSummarySection } from "../../../../types";\n\n')
    f.write('export const unit2SummarySections: UnitSummarySection[] = ' + json.dumps(summary_sections, indent=2) + ';\n\n')
    f.write('export const unit2Concepts: KeyConcept[] = ' + json.dumps(concepts, indent=2) + ';\n')

print("Generated Unit 2 concepts.ts")
