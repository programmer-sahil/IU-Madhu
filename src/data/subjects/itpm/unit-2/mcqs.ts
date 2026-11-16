import { MCQ } from '../../../../types';

export const unit2Mcqs: MCQ[] = [
  {
    "id": "itpm-u2-s1-mcq-001",
    "topic": "Purpose of Work Breakdown Structure",
    "difficulty": "easy",
    "question": "What is the primary objective of creating a Work Breakdown Structure (WBS) in an IT project?",
    "options": {
      "A": "To break down overall project work into smaller, manageable components",
      "B": "To replace the project charter and eliminate external stakeholders",
      "C": "To serve exclusively as an accounting document for tax calculation",
      "D": "To avoid the need for schedule and cost estimation"
    },
    "correctAnswer": "A",
    "explanation": "According to the IU course book, organizing project work starts by breaking the overall work into manageable components that can be completed independently, in sequence, or in parallel.",
    "whyOthersAreWrong": [
      "The WBS does not replace the charter; the charter authorizes the project while the WBS organizes the work.",
      "A WBS is a structural project management tool, not an accounting tax document.",
      "The WBS is the very foundation for schedule, cost, and resource estimation, not a means to avoid them."
    ],
    "examTrap": "The WBS does not replace the charter; the charter comes first and gives authorization.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Project Breakdown Structure",
      "page": 35
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Project Breakdown Structure",
    "sourcePage": 35,
    "page": 35
  },
  {
    "id": "itpm-u2-s1-mcq-002",
    "topic": "WBS Levels and Estimation",
    "difficulty": "medium",
    "question": "How do estimates of cost, schedule, and resources aggregate across the levels of a WBS hierarchy?",
    "options": {
      "A": "Estimates formed at the lowest-level elementary tasks roll upward into higher work packages",
      "B": "Estimates are generated only at Level 1 and never broken down",
      "C": "Estimates are strictly set by external stakeholders without technical decomposition",
      "D": "Estimates flow downwards from final customer acceptance without bottom-up calculation"
    },
    "correctAnswer": "A",
    "explanation": "In a WBS hierarchy, detailed estimates of schedule, cost, and human resources are developed at the lowest-level tasks and rolled upward into work packages and the total project baseline.",
    "whyOthersAreWrong": [
      "Level 1 only represents the project title; detailed operational estimates cannot be determined accurately at Level 1 alone.",
      "Stakeholders define constraints, but technical estimation requires hierarchical task decomposition.",
      "Customer acceptance criteria evaluate deliverables at the end, rather than computing bottom-up operational effort."
    ],
    "examTrap": "Bottom-up task estimates roll upward to form the project baseline, not the reverse.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Work-Packages and Estimation",
      "page": 35
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Work-Packages and Estimation",
    "sourcePage": 35,
    "page": 35
  },
  {
    "id": "itpm-u2-s1-mcq-003",
    "topic": "Work Package Definition",
    "difficulty": "easy",
    "question": "In project planning, what is a 'work package'?",
    "options": {
      "A": "A manageable grouping of related project activities and deliverables at an intermediate or lowest WBS level",
      "B": "A physical box used for shipping hardware deliverables",
      "C": "The complete source code archive delivered upon project termination",
      "D": "A legal contract signed between the project manager and end users"
    },
    "correctAnswer": "A",
    "explanation": "A work package is a manageable grouping of project work and deliverables that can be planned, budgeted, scheduled, and assigned to a specific group or partner.",
    "whyOthersAreWrong": [
      "A work package is an analytical management structure, not a physical shipping container.",
      "The full codebase is the final software deliverable, whereas work packages represent incremental project divisions.",
      "Contracts are procurement instruments, not the functional grouping of tasks in a WBS."
    ],
    "examTrap": "A work package groups work items with accountability; it is not a physical shipping unit.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Work-Packages",
      "page": 35
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Work-Packages",
    "sourcePage": 35,
    "page": 35
  },
  {
    "id": "itpm-u2-s1-mcq-004",
    "topic": "Milestone Characteristics",
    "difficulty": "easy",
    "question": "Which statement correctly defines a project milestone?",
    "options": {
      "A": "A significant moment or point in time that marks a major accomplishment or transition",
      "B": "A work activity that has the longest duration in the project schedule",
      "C": "A financial penalty clause applied when deliverables fail testing",
      "D": "A physical deliverable containing hardware schematics"
    },
    "correctAnswer": "A",
    "explanation": "A milestone is a moment in time representing a significant accomplishment, event, or transition between project stages; it has zero duration.",
    "whyOthersAreWrong": [
      "Milestones have zero duration; they are reference points in time, not long activities.",
      "Penalties are contractual terms, not project milestones.",
      "A physical item is a deliverable; the milestone is the temporal point at which a milestone condition is achieved."
    ],
    "examTrap": "Milestone = a point in time with ZERO duration. Deliverable = the tangible output.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Milestones",
      "page": 36
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Milestones",
    "sourcePage": 36,
    "page": 36
  },
  {
    "id": "itpm-u2-s1-mcq-005",
    "topic": "Deliverables vs Milestones",
    "difficulty": "medium",
    "question": "What is the critical distinction between a 'deliverable' and a 'milestone'?",
    "options": {
      "A": "A deliverable is a tangible output or document produced, whereas a milestone is a significant point in time",
      "B": "A deliverable has zero duration, whereas a milestone consumes the largest budget",
      "C": "Deliverables are only produced in agile projects, while milestones only exist in waterfall projects",
      "D": "A deliverable represents risk appetite, while a milestone represents technical debt"
    },
    "correctAnswer": "A",
    "explanation": "As emphasized in both the course book and revision pack, a deliverable is the output produced (object or document) that must be accepted, while a milestone is a significant moment in time.",
    "whyOthersAreWrong": [
      "Deliverables take time and budget to produce; milestones have zero duration and zero direct resource consumption.",
      "Both deliverables and milestones are universal concepts across all project lifecycles.",
      "Deliverables and milestones have nothing to do with risk appetite or technical debt classifications."
    ],
    "examTrap": "A milestone itself does not perform quality checks or create products; it is a time marker.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Deliverables vs Milestones",
      "page": 2
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Deliverables vs Milestones",
    "sourcePage": 2,
    "page": 2
  },
  {
    "id": "itpm-u2-s1-mcq-006",
    "topic": "Agile Breakdown: Epics and User Stories",
    "difficulty": "medium",
    "question": "In agile requirements breakdown, what is an 'epic'?",
    "options": {
      "A": "A large, high-level user story that is too complex to complete in a single sprint and must be broken down",
      "B": "A final formal contract that locks all project requirements against changes",
      "C": "A critical-path bug that causes immediate project cancellation",
      "D": "A specialized Gantt chart view used solely by executive management"
    },
    "correctAnswer": "A",
    "explanation": "In agile work breakdown, an epic is a broad, high-level requirement or complex user story that cannot be finished in one sprint and must be decomposed into smaller user stories.",
    "whyOthersAreWrong": [
      "Epics are flexible backlog items to be broken down, not binding rigid contracts.",
      "Epics are functional user requirements, not software defects or bugs.",
      "An epic is a requirements artifact, not a scheduling Gantt chart view."
    ],
    "examTrap": "An epic must be decomposed into smaller user stories so that individual tasks fit within single sprints.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Epics and User Stories",
      "page": 4
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Epics and User Stories",
    "sourcePage": 4,
    "page": 4
  },
  {
    "id": "itpm-u2-s1-mcq-007",
    "topic": "User Story Nature",
    "difficulty": "easy",
    "question": "What is the primary focus of a user story in IT project planning?",
    "options": {
      "A": "A concise narrative description of desired interaction and value from an end-user perspective",
      "B": "A comprehensive mathematical specification of low-level assembly language instructions",
      "C": "An organizational chart delineating reporting hierarchies between managers",
      "D": "A binding procurement ledger recording vendor payments and tax receipts"
    },
    "correctAnswer": "A",
    "explanation": "A user story captures what an end user needs from the system and the business value it delivers, written in user-centric language rather than technical jargon.",
    "whyOthersAreWrong": [
      "User stories avoid low-level technical jargon to keep the focus on end-user business value.",
      "Organizational hierarchies are documented in project organizational charts, not user stories.",
      "Ledgers and vendor payments belong to financial and procurement accounting."
    ],
    "examTrap": "User stories represent the user's perspective, not low-level database or hardware implementation details.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "User Stories",
      "page": 4
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "User Stories",
    "sourcePage": 4,
    "page": 4
  },
  {
    "id": "itpm-u2-s1-mcq-008",
    "topic": "Traceability Matrix Purpose",
    "difficulty": "medium",
    "question": "What is the primary function of a Requirements Traceability Matrix (RTM)?",
    "options": {
      "A": "To link requirements from business objectives through design components and deliverables to test cases",
      "B": "To record individual developer work hours for payroll processing",
      "C": "To automatically eliminate all non-functional requirements from the project scope",
      "D": "To calculate the critical path duration using forward and backward passes"
    },
    "correctAnswer": "A",
    "explanation": "A traceability matrix ensures complete coverage by linking each requirement to its design implementation, deliverables, and test cases, proving that requirements are met and preventing out-of-scope work.",
    "whyOthersAreWrong": [
      "Payroll hours are tracked via timesheets, not a requirements traceability matrix.",
      "Non-functional requirements must also be tracked and verified, never eliminated.",
      "Critical path calculations belong to PERT/CPM analysis, not the traceability matrix."
    ],
    "examTrap": "Traceability matrix links: Requirement -> Design -> Code/Deliverable -> Test Case.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Traceability Matrix",
      "page": 38
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Traceability Matrix",
    "sourcePage": 38,
    "page": 38
  },
  {
    "id": "itpm-u2-s1-mcq-009",
    "topic": "WBS Dictionary Contents",
    "difficulty": "hard",
    "question": "Which set of items is typically detailed within a formal WBS dictionary?",
    "options": {
      "A": "Activity descriptions, deliverables, responsible partners, acceptance criteria, resources, and constraints",
      "B": "Glossary of English grammar terms and definitions of common programming syntax",
      "C": "Personal home addresses and private banking records of project team members",
      "D": "Stock market price forecasts and organizational annual dividend statements"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly states that the WBS dictionary details the activities with their schedule and deliverables, the responsible partner or group, traceability links, assumptions, constraints, resources, costs, and acceptance criteria.",
    "whyOthersAreWrong": [
      "A WBS dictionary defines project work packages, not language grammar or coding syntax.",
      "Personal private banking records have no place in project technical management documents.",
      "Corporate dividend statements belong to investor relations, not work package definitions."
    ],
    "examTrap": "The WBS dictionary provides the detailed substance behind the concise codes in the WBS graphic.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Dictionary",
      "page": 39
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "WBS Dictionary",
    "sourcePage": 39,
    "page": 39
  },
  {
    "id": "itpm-u2-s1-mcq-010",
    "topic": "The 100% Rule in WBS",
    "difficulty": "medium",
    "question": "What does the '100% Rule' state regarding the structure of a Work Breakdown Structure?",
    "options": {
      "A": "The next level of decomposition must represent exactly 100% of the work of its parent element, neither more nor less",
      "B": "Every project activity must have a 100% probability of completing without risk",
      "C": "All developers must dedicate 100% of their daily working hours to a single task",
      "D": "100% of project budget must be expended before the planning phase can be closed"
    },
    "correctAnswer": "A",
    "explanation": "The 100% rule dictates that the subordinate elements of any WBS component must completely encompass all work required for that parent component without omitting work or adding extraneous tasks.",
    "whyOthersAreWrong": [
      "Project risks are inherent; a 100% risk-free guarantee is impossible in project management.",
      "Resource allocation is flexible; developers are rarely bound 100% to a single unchanging task.",
      "Spending 100% of the budget during planning would leave execution completely unfunded."
    ],
    "examTrap": "100% rule applies to work scope inclusion at every level of the hierarchy.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "100% Rule",
      "page": 3
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "100% Rule",
    "sourcePage": 3,
    "page": 3
  },
  {
    "id": "itpm-u2-s1-mcq-011",
    "topic": "Partner and Contract Allocation",
    "difficulty": "medium",
    "question": "At which level of project decomposition do external partner distribution and contractual allocations typically occur?",
    "options": {
      "A": "Around defined work-package or functional task levels",
      "B": "Solely at the highest project title level (Level 1)",
      "C": "Exclusively after project closure during final warranty reviews",
      "D": "Only at the level of individual single-line code commits"
    },
    "correctAnswer": "A",
    "explanation": "Work packages provide clearly demarcated scope boundaries and deliverables, making them the standard unit for outsourcing, partner assignment, and contractual accountability.",
    "whyOthersAreWrong": [
      "Level 1 is too high-level to define specific partner contract deliverables.",
      "Contractual allocations must be established during planning and execution, not after closure.",
      "Single code commits are too microscopic for formal organizational subcontracting."
    ],
    "examTrap": "Work packages are the primary unit for partner assignment and contractual packaging.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Partner Distribution",
      "page": 39
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Partner Distribution",
    "sourcePage": 39,
    "page": 39
  },
  {
    "id": "itpm-u2-s1-mcq-012",
    "topic": "Agile Sprint Task Sizing",
    "difficulty": "medium",
    "question": "In agile IT project execution, what is the recommended sizing guideline for decomposed elementary tasks?",
    "options": {
      "A": "Tasks should be sized to fit comfortably within a single sprint iteration",
      "B": "Tasks must span across the entire multi-year lifecycle of the hosting company",
      "C": "Tasks must never take more than 30 seconds of individual effort",
      "D": "Tasks should be delayed until the post-launch maintenance warranty phase"
    },
    "correctAnswer": "A",
    "explanation": "In agile methodologies, work breakdown ensures that decomposed user stories and tasks can be completed, tested, and integrated within the boundary of a single sprint.",
    "whyOthersAreWrong": [
      "Multi-year tasks violate the agile core principle of rapid, iterative feedback and delivery.",
      "30 seconds is trivial and creates unmanageable administrative overhead.",
      "Tasks represent active work during sprints, not deferred post-launch warranty actions."
    ],
    "examTrap": "If a user story cannot fit in a sprint, it is an epic and must be further decomposed.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Agile Task Sizing",
      "page": 4
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Agile Task Sizing",
    "sourcePage": 4,
    "page": 4
  },
  {
    "id": "itpm-u2-s1-mcq-013",
    "topic": "WBS Validation Process",
    "difficulty": "hard",
    "question": "Why does the course book emphasize a formal validation process of the WBS by all project partners?",
    "options": {
      "A": "To ensure shared ownership, agreement, and commitment on what is required to complete the work successfully",
      "B": "To transfer all legal liabilities to external subcontractors automatically",
      "C": "To prevent the team from conducting forward and backward schedule passes",
      "D": "To eliminate the need for acceptance criteria in the final deliverables"
    },
    "correctAnswer": "A",
    "explanation": "Evaluating and validating the WBS across all partners ensures consensus on work boundaries, resource needs, and commitments, preventing downstream disputes over missing scope.",
    "whyOthersAreWrong": [
      "WBS validation fosters collaboration; it is not a legal instrument for dumping liability.",
      "Schedule network passes are essential next steps and are not blocked by WBS validation.",
      "Acceptance criteria are clarified and reinforced by WBS validation, never eliminated."
    ],
    "examTrap": "Validation creates mutual agreement on project scope among all stakeholders.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Validation",
      "page": 39
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "WBS Validation",
    "sourcePage": 39,
    "page": 39
  },
  {
    "id": "itpm-u2-s1-mcq-014",
    "topic": "Decomposition Approach",
    "difficulty": "medium",
    "question": "What is the primary difference between deliverable-oriented and phase-oriented WBS decomposition?",
    "options": {
      "A": "Deliverable-oriented divides work by physical or functional outputs, whereas phase-oriented divides work by project lifecycle stages",
      "B": "Deliverable-oriented is used only for hardware, while phase-oriented is used only for software",
      "C": "Deliverable-oriented eliminates task dependencies, whereas phase-oriented eliminates milestones",
      "D": "Deliverable-oriented ignores costs, whereas phase-oriented ignores time constraints"
    },
    "correctAnswer": "A",
    "explanation": "Deliverable-oriented decomposition structures Level 2 around tangible products or subsystems, whereas phase-oriented decomposition structures Level 2 around chronological stages (e.g. Design, Build, Test).",
    "whyOthersAreWrong": [
      "Both decomposition styles can be applied to both hardware and software projects.",
      "Neither approach eliminates dependencies or milestones; they simply organize top levels differently.",
      "Both approaches fully integrate cost and time baselines."
    ],
    "examTrap": "Deliverable-oriented = outputs as branches. Phase-oriented = lifecycle stages as branches.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Decomposition Approaches",
      "page": 3
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Decomposition Approaches",
    "sourcePage": 3,
    "page": 3
  },
  {
    "id": "itpm-u2-s1-mcq-015",
    "topic": "Impact of Infeasible WBS Totals",
    "difficulty": "medium",
    "question": "If bottom-up aggregation of WBS task estimates reveals that total cost or schedule exceeds project constraints, what is the correct action?",
    "options": {
      "A": "Revise the WBS structure, reduce requirements scope, or renegotiate constraints with stakeholders",
      "B": "Falsify the lower-level estimates to artificially match the executive constraint",
      "C": "Immediately delete all unit tests and quality assurance activities",
      "D": "Proceed blindly into execution and conceal the variance until project termination"
    },
    "correctAnswer": "A",
    "explanation": "When aggregated WBS estimates violate constraints, the project manager must actively reconcile the discrepancy by reprioritizing requirements, adjusting scope, or negotiating additional budget/time.",
    "whyOthersAreWrong": [
      "Falsifying estimates violates professional project management ethics and guarantees project failure.",
      "Deleting quality checks leads to defective deliverables and disastrous post-launch failure.",
      "Concealing variances violates transparency and escalates risk unchecked."
    ],
    "examTrap": "Never compress estimates arbitrarily; negotiate scope, trade off requirements, or adjust constraints.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Constraint Reconciliation",
      "page": 20
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Constraint Reconciliation",
    "sourcePage": 20,
    "page": 20
  },
  {
    "id": "itpm-u2-s1-mcq-016",
    "topic": "Elementary Tasks",
    "difficulty": "easy",
    "question": "What characterizes an 'elementary task' at the lowest level of an IT project WBS?",
    "options": {
      "A": "It is an assignable, trackable, and measurable activity with clear start and completion criteria",
      "B": "It represents an entire multi-year IT transformation initiative",
      "C": "It is an unassigned abstract idea without defined outputs",
      "D": "It is a legal treaty between participating national governments"
    },
    "correctAnswer": "A",
    "explanation": "An elementary task is concrete, has a defined duration and resource assignment, produces a verifiable outcome, and can be tracked on a daily or weekly basis.",
    "whyOthersAreWrong": [
      "Multi-year transformations represent Level 1 enterprise initiatives, not elementary tasks.",
      "Tasks must be concrete and assigned, not vague abstract concepts.",
      "Government treaties belong to international public law, not project task decomposition."
    ],
    "examTrap": "Elementary tasks must have clear ownership, duration, and measurable completion criteria.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Elementary Tasks",
      "page": 35
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Elementary Tasks",
    "sourcePage": 35,
    "page": 35
  },
  {
    "id": "itpm-u2-s1-mcq-017",
    "topic": "WBS Level 1 Representation",
    "difficulty": "easy",
    "question": "In standard WBS numbering and hierarchy, what does Level 1 represent?",
    "options": {
      "A": "The overall project title or overarching project deliverable",
      "B": "An individual line of programming code",
      "C": "The daily coffee supply schedule for the engineering room",
      "D": "The third-party database driver patch version"
    },
    "correctAnswer": "A",
    "explanation": "Level 1 is the summit of the hierarchy, representing the total project scope or the complete product/service being created.",
    "whyOthersAreWrong": [
      "Lines of code are far too microscopic and exist far below the WBS structure.",
      "Coffee supply is unrelated administrative facility support.",
      "Patch versions are technical configuration items, not Level 1 project scope headers."
    ],
    "examTrap": "Level 1 = 100% of the project. Everything below branches out from Level 1.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "WBS Levels",
      "page": 3
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "WBS Levels",
    "sourcePage": 3,
    "page": 3
  },
  {
    "id": "itpm-u2-s1-mcq-018",
    "topic": "Traceability During System Changes",
    "difficulty": "hard",
    "question": "How does a traceability matrix assist an IT project manager when a customer requests a change to a specific business requirement?",
    "options": {
      "A": "It immediately identifies which software modules, database entities, and test cases are affected by the proposed change",
      "B": "It automatically recalculates developer salaries for the upcoming quarter",
      "C": "It sends an automated termination letter to the customer who requested the change",
      "D": "It locks the software repository and blocks all future deployments"
    },
    "correctAnswer": "A",
    "explanation": "Traceability enables precise impact analysis by following links from the modified requirement to all dependent components, work packages, and verification test suites.",
    "whyOthersAreWrong": [
      "Traceability manages requirement dependencies, not employee payroll accounting.",
      "Terminating the client is an irrational response; change requests must be formally analyzed.",
      "Repositories are governed by version control permissions, not blocked by traceability matrices."
    ],
    "examTrap": "Traceability Matrix = Essential for Impact Analysis of change requests.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Change Impact Analysis",
      "page": 38
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Change Impact Analysis",
    "sourcePage": 38,
    "page": 38
  },
  {
    "id": "itpm-u2-s1-mcq-019",
    "topic": "Milestone vs Task Duration",
    "difficulty": "easy",
    "question": "If a scheduling diagram displays an item with a duration of 3 weeks, can this item be classified as a milestone?",
    "options": {
      "A": "No, because milestones represent points in time and strictly have zero duration",
      "B": "Yes, because all items in a schedule are milestones regardless of length",
      "C": "Yes, provided the activity is critical to the sponsor",
      "D": "No, because milestones must always have a negative duration"
    },
    "correctAnswer": "A",
    "explanation": "By definition in project management and the IU course book, milestones have zero duration ($D = 0$); an item lasting 3 weeks is an activity or work package.",
    "whyOthersAreWrong": [
      "Activities have positive duration; milestones have zero duration.",
      "Importance does not convert a multi-week work period into a zero-duration point in time.",
      "Activities and milestones cannot have negative duration."
    ],
    "examTrap": "Duration > 0 = Task/Activity. Duration = 0 = Milestone.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Milestones and Duration",
      "page": 36
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Milestones and Duration",
    "sourcePage": 36,
    "page": 36
  },
  {
    "id": "itpm-u2-s1-mcq-020",
    "topic": "WBS Decomposition Stopping Criteria",
    "difficulty": "medium",
    "question": "When should an IT project manager stop decomposing the WBS into further sub-tasks?",
    "options": {
      "A": "When work packages are small enough to be accurately estimated, assigned to a single owner, and monitored effectively",
      "B": "When every single keystroke of the software engineers has been cataloged",
      "C": "Only when the project manager runs out of digital storage space on their computer",
      "D": "After exactly two levels regardless of project complexity or total budget"
    },
    "correctAnswer": "A",
    "explanation": "Decomposition ceases when work packages reach a manageable size where duration and cost can be reliably estimated and accountability clearly assigned (often the 8/80 rule or sprint task sizing).",
    "whyOthersAreWrong": [
      "Micro-estimating keystrokes causes excessive micromanagement and massive administrative waste.",
      "Storage space is irrelevant to project management decomposition principles.",
      "Rigidly stopping at two levels is inadequate for complex IT systems requiring deeper decomposition."
    ],
    "examTrap": "Decompose until manageable and assignable; avoid micromanagement overkill.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.1",
      "topic": "Decomposition Stopping Criteria",
      "page": 3
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Decomposition Stopping Criteria",
    "sourcePage": 3,
    "page": 3
  },
  {
    "id": "itpm-u2-s1-mcq-021",
    "topic": "Deliverable Verifiability",
    "difficulty": "medium",
    "question": "Which attribute must every project deliverable possess according to IU course book principles?",
    "options": {
      "A": "It must be verifiable against predetermined acceptance criteria",
      "B": "It must be a physical hardware object made of metal or plastic",
      "C": "It must be kept confidential from the development team",
      "D": "It must be completely redesigned every morning"
    },
    "correctAnswer": "A",
    "explanation": "Deliverables (whether tangible products or documents) must be verifiable against established requirements and acceptance criteria to permit formal approval.",
    "whyOthersAreWrong": [
      "Deliverables can be software code, architecture documents, or test reports, not just physical hardware.",
      "Deliverables must be transparent to the team who builds and verifies them.",
      "Daily redesign represents uncontrolled chaos, not disciplined deliverable management."
    ],
    "examTrap": "Deliverables can be physical entities OR documents, but MUST be verifiable against criteria.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Deliverable Acceptance",
      "page": 36
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Deliverable Acceptance",
    "sourcePage": 36,
    "page": 36
  },
  {
    "id": "itpm-u2-s1-mcq-022",
    "topic": "Baseline Formation from WBS",
    "difficulty": "hard",
    "question": "Which three core project baselines are developed directly from the organized WBS and its supporting plans?",
    "options": {
      "A": "Scope baseline, schedule baseline, and cost baseline",
      "B": "Server uptime, cooling fan speed, and electricity wattage",
      "C": "Company stock price, executive bonuses, and shareholder dividends",
      "D": "Marketing slogans, office paint color, and chair ergonomics"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 34) specifies that organizing project work establishes reference baselines in terms of scope, schedule, and cost against which progress is benchmarked.",
    "whyOthersAreWrong": [
      "Server hardware metrics are operational IT infrastructure telemetry, not project management baselines.",
      "Stock price and executive bonuses are financial corporate metrics outside project baseline scope.",
      "Marketing slogans and office decor are non-project operational preferences."
    ],
    "examTrap": "Triple constraint = Scope, Schedule, Cost. These form the three official project performance baselines.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.1",
      "topic": "Project Baselines",
      "page": 34
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.1",
    "sourceUnit": 2,
    "sourceSection": "2.1",
    "sourceTopic": "Project Baselines",
    "sourcePage": 34,
    "page": 34
  },
  {
    "id": "itpm-u2-s2-mcq-001",
    "topic": "Purpose of Prioritization",
    "difficulty": "easy",
    "question": "Why is prioritization necessary once IT project requirements are identified?",
    "options": {
      "A": "To decide the execution order, allocate limited resources, and guide milestone planning",
      "B": "To ensure that all requirements are executed simultaneously on day one",
      "C": "To permanently eliminate communication with external stakeholders",
      "D": "To avoid setting project baselines in schedule and cost"
    },
    "correctAnswer": "A",
    "explanation": "Prioritization establishes the order of work, directs team attention and scarce resources to critical items, and provides early warning when tasks break down.",
    "whyOthersAreWrong": [
      "Simultaneous execution of all requirements is impossible due to dependencies and finite resources.",
      "Prioritization requires continuous stakeholder alignment rather than eliminating communication.",
      "Prioritization directly informs and strengthens schedule and cost baselines."
    ],
    "examTrap": "Prioritization orders work and focuses resources; it does not eliminate constraints.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Prioritization Purpose",
      "page": 39
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Prioritization Purpose",
    "sourcePage": 39,
    "page": 39
  },
  {
    "id": "itpm-u2-s2-mcq-002",
    "topic": "Urgent vs Important Concept",
    "difficulty": "medium",
    "question": "What is the key difference between 'urgent' and 'important' activities in project management?",
    "options": {
      "A": "Urgent requires immediate attention and provokes reactive responses, while important contributes to long-term goals and proactive decisions",
      "B": "Urgent activities always deliver the greatest profit, while important activities have zero value",
      "C": "Urgent activities are defined only by external regulators, while important activities are defined only by developers",
      "D": "Urgent activities have zero duration, while important activities have infinite duration"
    },
    "correctAnswer": "A",
    "explanation": "The course book explains that urgent activities demand immediate crisis response in a defensive mindset, whereas important activities ensure strategic long-term goals through proactive, rational planning.",
    "whyOthersAreWrong": [
      "Urgent activities are often interruptions with low long-term value; important tasks provide the true value.",
      "Urgency and importance can originate from any stakeholder group or project risk.",
      "Neither urgency nor importance defines activity duration."
    ],
    "examTrap": "Operating purely on urgency creates knee-jerk, reactive decisions that jeopardize project success.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency vs Importance",
      "page": 39
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Urgency vs Importance",
    "sourcePage": 39,
    "page": 39
  },
  {
    "id": "itpm-u2-s2-mcq-003",
    "topic": "Eisenhower Matrix: High Importance + High Urgency",
    "difficulty": "easy",
    "question": "In the Urgency vs Importance matrix, how should the team treat activities with High Importance and High Urgency?",
    "options": {
      "A": "Critical focus: immediate attention is required to alleviate pressure and protect project outcomes",
      "B": "Eliminate completely because they cause excessive stress",
      "C": "Postpone indefinitely until project closeout",
      "D": "Delegate to junior external interns without review"
    },
    "correctAnswer": "A",
    "explanation": "High urgency and high importance activities represent critical crises or pivotal deliverables requiring immediate, dedicated focus from the project team.",
    "whyOthersAreWrong": [
      "Ignoring or eliminating high importance crises leads to immediate project collapse.",
      "Postponing critical items compounds failure and damages milestone commitments.",
      "Unsupervised delegation of critical crises introduces severe operational risks."
    ],
    "examTrap": "High + High = Critical / Crises -> Focus and act immediately.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency vs Importance Matrix",
      "page": 40
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Urgency vs Importance Matrix",
    "sourcePage": 40,
    "page": 40
  },
  {
    "id": "itpm-u2-s2-mcq-004",
    "topic": "Eisenhower Matrix: High Importance + Low Urgency",
    "difficulty": "medium",
    "question": "In the Urgency vs Importance matrix, what is the recommended approach for High Importance and Low Urgency activities?",
    "options": {
      "A": "Focus on project goals through proactive planning, searching for opportunities, and deliberate development",
      "B": "Discard them immediately because they lack immediate deadline pressure",
      "C": "Treat them as pure time-wasting distractions and eliminate them",
      "D": "Outsource them without contractual specifications"
    },
    "correctAnswer": "A",
    "explanation": "When importance is high but urgency is low, teams operate proactively, focusing on core project goals, strategic planning, architecture design, and opportunity identification.",
    "whyOthersAreWrong": [
      "Discarding them sacrifices the project's long-term sustainability and strategic success.",
      "Low urgency does not mean time-wasting; high importance means these tasks drive true project value.",
      "Outsourcing strategic goals without specifications creates severe governance failures."
    ],
    "examTrap": "High Importance + Low Urgency is the golden zone for proactive planning and goal achievement.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency vs Importance Matrix",
      "page": 40
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Urgency vs Importance Matrix",
    "sourcePage": 40,
    "page": 40
  },
  {
    "id": "itpm-u2-s2-mcq-005",
    "topic": "Eisenhower Matrix: High Urgency + Low Importance",
    "difficulty": "medium",
    "question": "Which activity is cited in the course book as an example of High Urgency but Low Importance?",
    "options": {
      "A": "Reporting project progress to external stakeholders",
      "B": "Developing the central AI algorithm for robot navigation",
      "C": "Testing the core motor battery failsafe system",
      "D": "Fixing a fatal production database corruption crash"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly highlights routine progress reporting to external stakeholders as an example of high urgency (immediate deadline) but low intrinsic impact on deliverable functionality.",
    "whyOthersAreWrong": [
      "The navigation AI algorithm is core high-importance product functionality.",
      "Safety failsafe systems carry high importance and directly affect product viability.",
      "Database corruption is a high-importance, high-urgency operational crisis."
    ],
    "examTrap": "External reporting has high urgency due to meeting schedules, but low impact on product engineering.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency vs Importance Matrix",
      "page": 40
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Urgency vs Importance Matrix",
    "sourcePage": 40,
    "page": 40
  },
  {
    "id": "itpm-u2-s2-mcq-006",
    "topic": "Eisenhower Matrix: Low Importance + Low Urgency",
    "difficulty": "easy",
    "question": "How should an IT project manager manage Low Importance and Low Urgency activities?",
    "options": {
      "A": "Limit, avoid, or eliminate them as they waste valuable team time and resources",
      "B": "Prioritize them before all critical-path development tasks",
      "C": "Allocate the majority of project reserve budget to them",
      "D": "Promote them into primary project milestones"
    },
    "correctAnswer": "A",
    "explanation": "Low importance and low urgency activities (such as gossiping, overanalyzing, and micromanaging) consume resources without adding value, and must be strictly curtailed.",
    "whyOthersAreWrong": [
      "Prioritizing time-wasters delays essential project deliverables.",
      "Contingency reserves are reserved for genuine project risks, not low-importance distractions.",
      "Milestones celebrate significant achievements, not trivial distractions."
    ],
    "examTrap": "Overanalyzing, micromanagement, and gossip are Low + Low -> eliminate or strictly limit.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Urgency vs Importance Matrix",
      "page": 40
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Urgency vs Importance Matrix",
    "sourcePage": 40,
    "page": 40
  },
  {
    "id": "itpm-u2-s2-mcq-007",
    "topic": "Kano Model Origin and Thesis",
    "difficulty": "medium",
    "question": "What conventional assumption did Noriaki Kano challenge when developing the Kano Model?",
    "options": {
      "A": "The belief that customer satisfaction is strictly proportional to the improvement of every aspect of a product",
      "B": "The principle that software must be tested before release",
      "C": "The idea that projects should have defined start and end dates",
      "D": "The rule that budgets must never exceed financing constraints"
    },
    "correctAnswer": "A",
    "explanation": "Kano challenged the traditional view that customer satisfaction is directly proportional to improving all features equally, proving that different requirement types impact satisfaction in fundamentally different ways.",
    "whyOthersAreWrong": [
      "Testing software is an essential quality assurance requirement unchallenged by Kano.",
      "Project temporal boundaries are defined by fundamental project theory, not Kano.",
      "Financial constraints remain binding reality across all project management domains."
    ],
    "examTrap": "Customer satisfaction is NOT linearly proportional to feature improvement across the board.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Model",
      "page": 40
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Kano Model",
    "sourcePage": 40,
    "page": 40
  },
  {
    "id": "itpm-u2-s2-mcq-008",
    "topic": "Kano Model: Basic Requirements",
    "difficulty": "medium",
    "question": "What is a defining characteristic of 'Basic' (must-be) requirements in the Kano model?",
    "options": {
      "A": "They are taken for granted; their presence does not delight customers, but their absence causes severe dissatisfaction",
      "B": "They generate massive excitement and are prominently featured in promotional advertisements",
      "C": "They are optional luxury add-ons that can be omitted without complaint",
      "D": "They increase satisfaction linearly with every hour spent developing them"
    },
    "correctAnswer": "A",
    "explanation": "Basic requirements are baseline necessities customers expect as obvious. Customers rarely mention them in interviews, but failing to fulfill them ruins customer satisfaction.",
    "whyOthersAreWrong": [
      "Excitement features are Delighters, not Basic expectations.",
      "Omitting basic features causes project failure; they are strictly non-negotiable.",
      "Linear satisfaction increases characterize Performance features, not Basic needs."
    ],
    "examTrap": "Basic requirements: Customers forget to mention them! Absence = Disaster; Presence = Neutral.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Basic Requirements",
      "page": 41
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Kano Basic Requirements",
    "sourcePage": 41,
    "page": 41
  },
  {
    "id": "itpm-u2-s2-mcq-009",
    "topic": "Kano Model: Basic Requirement Example",
    "difficulty": "easy",
    "question": "In the cRobot project example used in the course book, which feature represents a Basic requirement?",
    "options": {
      "A": "The physical ability of the robot to move around the house",
      "B": "A human-like head movement that mimics social engagement",
      "C": "A built-in espresso machine making custom latte art",
      "D": "A voice synthesizer singing opera on birthdays"
    },
    "correctAnswer": "A",
    "explanation": "Mobility is the fundamental basic expectation of a mobile assistant robot. Customers expect it as obvious; if it cannot move, the product fails completely.",
    "whyOthersAreWrong": [
      "Option B is wrong: Human-like head movement is specifically categorized in the course book as an unexpected Delighter.",
      "Option C is wrong: An espresso machine is an extraneous luxury add-on, not a basic robotic requirement.",
      "Option D is wrong: An opera synthesizer is an entertaining novelty feature, not an essential basic mobility expectation."
    ],
    "examTrap": "Mobility in cRobot = Basic requirement. Human-like head tilt = Delighter.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "cRobot Basic Requirement",
      "page": 41
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "cRobot Basic Requirement",
    "sourcePage": 41,
    "page": 41
  },
  {
    "id": "itpm-u2-s2-mcq-010",
    "topic": "Kano Model: Performance / Linear Satisfiers",
    "difficulty": "medium",
    "question": "How do 'Performance' (linear satisfier) requirements behave in relation to customer satisfaction?",
    "options": {
      "A": "Customer satisfaction increases proportionally with their execution quality or speed, subject to eventual diminishing returns",
      "B": "They cause dissatisfaction regardless of how well they are implemented",
      "C": "They are unexpected surprise gifts that cost zero development effort",
      "D": "They have zero impact on customer perception"
    },
    "correctAnswer": "A",
    "explanation": "Linear satisfiers (e.g. processing speed, battery duration) proportionally enhance satisfaction as performance improves, though excessive investment eventually hits diminishing returns.",
    "whyOthersAreWrong": [
      "Performance features satisfy customers when executed well; they do not inherently cause dissatisfaction.",
      "Performance features require substantial engineering effort and are standard customer expectations.",
      "They have a strong, measurable direct impact on user evaluation."
    ],
    "examTrap": "More is better (linear), but watch out for diminishing returns on investment.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Performance Requirements",
      "page": 41
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Kano Performance Requirements",
    "sourcePage": 41,
    "page": 41
  },
  {
    "id": "itpm-u2-s2-mcq-011",
    "topic": "Kano Model: Delighters",
    "difficulty": "medium",
    "question": "What is the defining trait of 'Delighters' (attractive requirements) in the Kano model?",
    "options": {
      "A": "They are unexpected features that pleasantly surprise customers; their absence causes no dissatisfaction, but their presence dramatically elevates satisfaction",
      "B": "They are legally mandated safety compliance checklists",
      "C": "They must always consume at least 90% of total project expenditure",
      "D": "They are basic features that customers explicitly demand in every contract"
    },
    "correctAnswer": "A",
    "explanation": "Delighters are unanticipated, innovative features. Because customers do not expect them, omitting them causes zero dissatisfaction, but including them creates delight and premium appeal.",
    "whyOthersAreWrong": [
      "Legal safety compliance represents non-negotiable Basic requirements.",
      "Spending 90% of budget on delighters starves core functionality and causes project failure.",
      "Basic features are expected; delighters are unprompted surprises."
    ],
    "examTrap": "Absence of Delighters causes NO dissatisfaction because customers did not anticipate them.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Delighters",
      "page": 42
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Kano Delighters",
    "sourcePage": 42,
    "page": 42
  },
  {
    "id": "itpm-u2-s2-mcq-012",
    "topic": "Kano Implementation Priority Rule",
    "difficulty": "hard",
    "question": "What is the strategic development rule when balancing Kano categories in an IT project?",
    "options": {
      "A": "Meet all Basic requirements first, implement Performance needs to a viable extent, and select a few high-value Delighters without overspending",
      "B": "Focus 100% of effort exclusively on Delighters while ignoring Basic functionality",
      "C": "Implement all Delighters first, then consider Performance only if budget remains",
      "D": "Eliminate all Performance features to save money for marketing"
    },
    "correctAnswer": "A",
    "explanation": "A product must first fulfill all mandatory basic needs to avoid immediate failure, satisfy competitive performance needs, and sparingly sprinkle high-impact delighters to stand out.",
    "whyOthersAreWrong": [
      "Delighting a user with a pretty head tilt while the robot fails to move produces an unusable product.",
      "Prioritizing delighters before basics guarantees customer outrage and product rejection.",
      "Eliminating performance features destroys competitiveness in modern software markets."
    ],
    "examTrap": "Rule: 100% Basic -> Viable Performance -> Few Delighters. Do not over-invest in delighters!",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano Priority Strategy",
      "page": 6
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Kano Priority Strategy",
    "sourcePage": 6,
    "page": 6
  },
  {
    "id": "itpm-u2-s2-mcq-013",
    "topic": "MoSCoW Origin and Creator",
    "difficulty": "medium",
    "question": "According to the IU course book, who developed the MoSCoW prioritization technique and in what context?",
    "options": {
      "A": "Dai Clegg of Oracle UK in 1994 for software development prioritization",
      "B": "Noriaki Kano in Tokyo in 1984 for automotive manufacturing",
      "C": "The United States Navy in 1958 for missile defense systems",
      "D": "Henry Gantt in 1917 for World War I shipbuilding logistics"
    },
    "correctAnswer": "A",
    "explanation": "The IU course book explicitly states that MoSCoW was developed by Dai Clegg of Oracle UK in 1994 as a method for identifying the order of importance in software requirements.",
    "whyOthersAreWrong": [
      "Noriaki Kano developed the Kano customer satisfaction model, not MoSCoW.",
      "The US Navy developed PERT for the Polaris project.",
      "Henry Gantt created Gantt charts for industrial scheduling."
    ],
    "examTrap": "Dai Clegg (Oracle UK, 1994) = MoSCoW. Noriaki Kano = Kano Model.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Origin",
      "page": 42
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Origin",
    "sourcePage": 42,
    "page": 42
  },
  {
    "id": "itpm-u2-s2-mcq-014",
    "topic": "MoSCoW Letters Meaning",
    "difficulty": "easy",
    "question": "What do the uppercase letters in the MoSCoW acronym represent?",
    "options": {
      "A": "Must-have, Should-have, Could-have, Won't-have",
      "B": "Manage-well, Schedule-fast, Cost-low, Win-big",
      "C": "Model, Organize, Sequence, Calculate, Operate, Work",
      "D": "Milestone, Output, Scope, Contract, Operation, Warranty"
    },
    "correctAnswer": "A",
    "explanation": "M = Must-have, S = Should-have, C = Could-have, W = Won't-have (with 'o' letters added for pronunciation).",
    "whyOthersAreWrong": [
      "Manage/Schedule/Cost/Win is an invented corporate slogan.",
      "Model/Organize/Sequence is an arbitrary sequence of words.",
      "Milestone/Output/Scope is an invalid combination of project concepts."
    ],
    "examTrap": "The 'O's are purely mnemonic helpers. M-S-C-W are the four active categories.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Acronym",
      "page": 42
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Acronym",
    "sourcePage": 42,
    "page": 42
  },
  {
    "id": "itpm-u2-s2-mcq-015",
    "topic": "MoSCoW: Must-Have Requirements",
    "difficulty": "medium",
    "question": "In MoSCoW analysis, what defines a 'Must-have' requirement?",
    "options": {
      "A": "Non-negotiable core functionality necessary for meeting business needs; without it, the project output is a failure",
      "B": "A cosmetic enhancement that can be deferred if schedule pressure occurs",
      "C": "A feature requested by a junior team member during an informal coffee chat",
      "D": "A requirement explicitly agreed to be excluded from the current release"
    },
    "correctAnswer": "A",
    "explanation": "Must-haves represent the absolute minimum functionality required for a viable deliverable. If a single Must-have is missing, the release cannot proceed.",
    "whyOthersAreWrong": [
      "Cosmetic enhancements that can be deferred are Could-haves or Won't-haves.",
      "Informal unapproved requests are out-of-scope until evaluated.",
      "Features agreed to be excluded are Won't-haves."
    ],
    "examTrap": "Must-haves are non-negotiable minimums; if one is omitted, the release fails.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Must-Haves",
      "page": 42
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Must-Haves",
    "sourcePage": 42,
    "page": 42
  },
  {
    "id": "itpm-u2-s2-mcq-016",
    "topic": "MoSCoW: Should-Have Requirements",
    "difficulty": "medium",
    "question": "How are 'Should-have' requirements differentiated from 'Must-have' requirements in MoSCoW?",
    "options": {
      "A": "Should-haves enhance the product and are highly important, but viable workarounds exist if omitted from the initial release",
      "B": "Should-haves are legally mandatory, while Must-haves are optional",
      "C": "Should-haves are completely trivial features that no stakeholder wants",
      "D": "Should-haves have zero cost and zero development duration"
    },
    "correctAnswer": "A",
    "explanation": "Should-haves are essential to user satisfaction and product quality, but unlike Must-haves, temporary workarounds exist so the product remains functional without them if time runs short.",
    "whyOthersAreWrong": [
      "Must-haves are legally/operationally mandatory; Should-haves are not the legal minimum.",
      "Should-haves are highly desirable and important, not trivial.",
      "Should-haves require substantial effort and cost to implement."
    ],
    "examTrap": "Should-haves = Highly important, but workarounds exist if forced to drop.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Should-Haves",
      "page": 43
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Should-Haves",
    "sourcePage": 43,
    "page": 43
  },
  {
    "id": "itpm-u2-s2-mcq-017",
    "topic": "MoSCoW: Could-Have Requirements",
    "difficulty": "easy",
    "question": "What is a 'Could-have' requirement in MoSCoW prioritization?",
    "options": {
      "A": "A desirable requirement that does not affect core project success, implemented only if excess time and resources remain",
      "B": "The mandatory baseline requirement without which the project is canceled",
      "C": "A requirement that violates company security policies",
      "D": "A requirement assigned to the sponsor to complete personally"
    },
    "correctAnswer": "A",
    "explanation": "Could-haves are nice-to-have features that provide minor value or convenience; they are the first to be dropped when schedule or cost pressures arise.",
    "whyOthersAreWrong": [
      "Mandatory baseline requirements are Must-haves.",
      "Requirements that violate policies must be rejected, not classified as Could-haves.",
      "Sponsors govern and finance; they do not write software code for Could-have tasks."
    ],
    "examTrap": "Could-haves = Nice to have, zero impact on core outcome, dropped first under pressure.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Could-Haves",
      "page": 43
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Could-Haves",
    "sourcePage": 43,
    "page": 43
  },
  {
    "id": "itpm-u2-s2-mcq-018",
    "topic": "MoSCoW: Won't-Have Requirements",
    "difficulty": "medium",
    "question": "Why is the 'Won't-have' (or 'Would-have') category critical in MoSCoW prioritization?",
    "options": {
      "A": "It explicitly establishes scope boundaries by agreeing on what will NOT be done in this timebox, preventing scope creep while recording ideas for the future",
      "B": "It permanently bans stakeholders from ever requesting new software versions",
      "C": "It indicates requirements that the engineering team was incapable of understanding",
      "D": "It proves that the project manager has failed to secure executive financing"
    },
    "correctAnswer": "A",
    "explanation": "Explicitly agreeing on what will NOT be built in the current release manages stakeholder expectations, prevents endless debates, and saves ideas for future iterations.",
    "whyOthersAreWrong": [
      "Won't-haves are deferred to later releases, not banned forever.",
      "Won't-haves reflect prioritization and capacity management, not technical incompetence.",
      "Excluding features within a budget is sound governance, not a sign of failure."
    ],
    "examTrap": "Won't-have (this time) manages expectations and protects the current timebox from scope creep.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Won't-Haves",
      "page": 43
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Won't-Haves",
    "sourcePage": 43,
    "page": 43
  },
  {
    "id": "itpm-u2-s2-mcq-019",
    "topic": "Why Words Instead of Numbers in MoSCoW",
    "difficulty": "hard",
    "question": "Why does MoSCoW use descriptive words instead of numerical ranking (such as 1, 2, 3)?",
    "options": {
      "A": "To broaden the categorization scope and stimulate constructive stakeholder discussion on business value rather than arguing over arbitrary numerical order",
      "B": "Because software project managers are not trained in basic mathematics",
      "C": "Because numerical ratings are prohibited by international ISO quality standards",
      "D": "To prevent project managers from calculating the critical path"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 42) notes that using words instead of numbers widens each category's scope and triggers meaningful debate on true business necessity rather than nitpicking whether an item is #4 or #5.",
    "whyOthersAreWrong": [
      "Project managers routinely use advanced mathematics in PERT, EVM, and financial analysis.",
      "ISO standards do not prohibit numerical rankings.",
      "Critical path calculations depend on task duration and network logic, not MoSCoW requirement labels."
    ],
    "examTrap": "Words encourage consensus on business impact; numbers provoke disputes over ranking positions.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "MoSCoW Word Categories",
      "page": 42
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "MoSCoW Word Categories",
    "sourcePage": 42,
    "page": 42
  },
  {
    "id": "itpm-u2-s2-mcq-020",
    "topic": "cRobot MoSCoW Example",
    "difficulty": "medium",
    "question": "In the course book's cRobot example, how are 'skeleton structure' and 'polished surface' classified under MoSCoW?",
    "options": {
      "A": "Skeleton structure is a Must-have; polished exterior surface is a Should-have",
      "B": "Skeleton structure is a Won't-have; polished exterior surface is a Must-have",
      "C": "Both are classified as Could-haves because robots do not need hardware",
      "D": "Both are classified as out-of-scope environmental risks"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 43) explicitly provides this example: the robot having a physical skeleton is a Must-have, while a smooth, polished aesthetic surface to attract buyers is a Should-have.",
    "whyOthersAreWrong": [
      "A robot cannot exist without a skeleton structure; it cannot be a Won't-have.",
      "Robots obviously require physical hardware; they are sociotechnical physical artifacts.",
      "Skeleton and casing are core deliverables, not environmental external risks."
    ],
    "examTrap": "Skeleton = Must-have (functional viability). Polished casing = Should-have (aesthetic appeal).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "cRobot MoSCoW Example",
      "page": 43
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "cRobot MoSCoW Example",
    "sourcePage": 43,
    "page": 43
  },
  {
    "id": "itpm-u2-s2-mcq-021",
    "topic": "Avoiding Subjectivity in Prioritization",
    "difficulty": "hard",
    "question": "How can an IT project manager avoid the threat of subjectivity and organizational politics when prioritizing requirements?",
    "options": {
      "A": "By applying objective classification frameworks (like Kano and MoSCoW) grounded in stakeholder value and historical project data",
      "B": "By allowing the loudest or highest-paid executive in the room to dictate all decisions",
      "C": "By selecting requirements randomly using a lottery roll",
      "D": "By ignoring all customer input and implementing only developer personal hobbies"
    },
    "correctAnswer": "A",
    "explanation": "The course book notes that using structured classification models and past project evidence eliminates arbitrary, politically slanted prioritization and aligns effort with objective value.",
    "whyOthersAreWrong": [
      "Yielding to the loudest executive (HiPPO) biases decisions away from customer value and technical reality.",
      "Random lotteries abandon rational project management discipline.",
      "Ignoring customer requirements guarantees commercial and operational failure."
    ],
    "examTrap": "Structured classification frameworks depersonalize prioritization and prevent political bias.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Objective Prioritization",
      "page": 44
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Objective Prioritization",
    "sourcePage": 44,
    "page": 44
  },
  {
    "id": "itpm-u2-s2-mcq-022",
    "topic": "Kano vs MoSCoW Mapping",
    "difficulty": "medium",
    "question": "Which pairing represents the most accurate logical correspondence between Kano categories and MoSCoW priorities?",
    "options": {
      "A": "Basic requirements correspond to Must-haves; Delighters correspond to Could-haves",
      "B": "Basic requirements correspond to Won't-haves; Delighters correspond to Must-haves",
      "C": "Performance requirements correspond to Won't-haves; Basic requirements correspond to Could-haves",
      "D": "Delighters correspond to Must-haves; Linear satisfiers correspond to Won't-haves"
    },
    "correctAnswer": "A",
    "explanation": "Basic requirements are mandatory minimums, exactly matching MoSCoW Must-haves. Delighters are attractive, non-essential additions, matching Could-haves.",
    "whyOthersAreWrong": [
      "Basic requirements can never be Won't-haves; they are mandatory for survival.",
      "Performance features are Should-haves or standard releases, not discarded Won't-haves.",
      "Delighters are never Must-haves because their absence causes zero customer dissatisfaction."
    ],
    "examTrap": "Basic = Must-have. Performance = Should-have. Delighter = Could-have.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.2",
      "topic": "Kano and MoSCoW Mapping",
      "page": 6
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Kano and MoSCoW Mapping",
    "sourcePage": 6,
    "page": 6
  },
  {
    "id": "itpm-u2-s2-mcq-023",
    "topic": "MoSCoW Dynamic Rebalancing",
    "difficulty": "medium",
    "question": "In agile projects using MoSCoW, what action is taken when time or budget runs out before a sprint ends?",
    "options": {
      "A": "Could-haves and Should-haves are dropped while strictly preserving Must-haves",
      "B": "Must-haves are dropped first to save time for Could-haves",
      "C": "The deadline is automatically doubled and sprint retrospectives are banned",
      "D": "All source code is discarded and the project begins from scratch"
    },
    "correctAnswer": "A",
    "explanation": "In timeboxed development, the schedule and resources are fixed; when pressure occurs, lower-priority scope (Could-haves first, then Should-haves) is dropped to guarantee all Must-haves finish.",
    "whyOthersAreWrong": [
      "Dropping Must-haves breaks the product entirely; Must-haves must be protected at all costs.",
      "Timeboxes are fixed in agile; arbitrarily extending deadlines breaks release cadences.",
      "Throwing away code is destructive and unnecessary."
    ],
    "examTrap": "Under pressure: Protect Must-haves -> Sacrificed in reverse order: Could-haves first, then Should-haves.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.2",
      "topic": "Scope Dropping Order",
      "page": 6
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Scope Dropping Order",
    "sourcePage": 6,
    "page": 6
  },
  {
    "id": "itpm-u2-s2-mcq-024",
    "topic": "Requirements Prioritization Risks",
    "difficulty": "hard",
    "question": "What is the primary danger of failing to formally prioritize IT project requirements?",
    "options": {
      "A": "Teams spend disproportionate time and money on low-value cosmetic details while failing to deliver core operational functionality",
      "B": "Hardware components will instantly melt due to electrical resistance",
      "C": "The project will be forced to operate without a project manager",
      "D": "All external regulatory bodies will revoke company incorporation"
    },
    "correctAnswer": "A",
    "explanation": "Without clear prioritization, teams often get distracted by intriguing cosmetic or delighter features ('gold plating'), running out of budget before finishing basic operational requirements.",
    "whyOthersAreWrong": [
      "Hardware melting is an electrical engineering issue, not a direct software prioritization symptom.",
      "Project manager appointments depend on executive staffing, not prioritization frameworks.",
      "Corporate charters are not revoked simply for lacking a project prioritization method."
    ],
    "examTrap": "Lack of prioritization leads to gold-plating and starvation of core operational needs.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.2",
      "topic": "Prioritization Pitfalls",
      "page": 40
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.2",
    "sourceUnit": 2,
    "sourceSection": "2.2",
    "sourceTopic": "Prioritization Pitfalls",
    "sourcePage": 40,
    "page": 40
  },
  {
    "id": "itpm-u2-s3-mcq-001",
    "topic": "Precedence Relationships: Finish-to-Start (FS)",
    "difficulty": "easy",
    "question": "What does a Finish-to-Start (FS) precedence relationship between Task A and Task B mean?",
    "options": {
      "A": "Task B cannot start until Task A has finished",
      "B": "Task B cannot finish until Task A has started",
      "C": "Task B must start at the exact same moment Task A starts",
      "D": "Task B must finish before Task A can begin"
    },
    "correctAnswer": "A",
    "explanation": "Finish-to-Start (FS) is the most standard dependency: the successor (Task B) cannot commence until its predecessor (Task A) is completely finished.",
    "whyOthersAreWrong": [
      "Successor cannot finish until predecessor starts describes Start-to-Finish (SF).",
      "Starting at the same time describes Start-to-Start (SS).",
      "Task B finishing before A begins reverses the predecessor-successor relationship entirely."
    ],
    "examTrap": "FS is the default and most common logical dependency in project scheduling.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "FS Precedence",
      "page": 45
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "FS Precedence",
    "sourcePage": 45,
    "page": 45
  },
  {
    "id": "itpm-u2-s3-mcq-002",
    "topic": "Precedence Relationships: Start-to-Start (SS)",
    "difficulty": "medium",
    "question": "Which real-world scenario from the course book illustrates a Start-to-Start (SS) dependency?",
    "options": {
      "A": "Software development can begin as soon as hardware construction starts, without waiting for final robot assembly",
      "B": "System testing can begin only after the entire robot is fully manufactured",
      "C": "A contract can be signed only after all developers have retired",
      "D": "Unit tests can be executed only after the warranty period expires"
    },
    "correctAnswer": "A",
    "explanation": "In the cRobot project, software coding can commence once hardware fabrication is underway (SS), allowing parallel work without waiting for full assembly completion.",
    "whyOthersAreWrong": [
      "Waiting for full assembly before testing describes a Finish-to-Start (FS) dependency.",
      "Signing contracts after retirement is an absurd chronological reversal.",
      "Executing unit tests after warranty expiration destroys the purpose of quality control."
    ],
    "examTrap": "SS enables concurrent parallel execution; successor starts once predecessor begins.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "SS Precedence",
      "page": 45
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "SS Precedence",
    "sourcePage": 45,
    "page": 45
  },
  {
    "id": "itpm-u2-s3-mcq-003",
    "topic": "Precedence Relationships: Finish-to-Finish (FF)",
    "difficulty": "medium",
    "question": "What is the rule governing a Finish-to-Finish (FF) precedence relationship?",
    "options": {
      "A": "The successor activity cannot finish until the predecessor activity has finished",
      "B": "The successor activity must start before the predecessor activity starts",
      "C": "Both activities must be cancelled at the same moment",
      "D": "Neither activity is allowed to have an assigned owner"
    },
    "correctAnswer": "A",
    "explanation": "Finish-to-Finish (FF) dictates that the successor cannot reach completion until the predecessor activity completes (e.g. final documentation cannot finish until system testing finishes).",
    "whyOthersAreWrong": [
      "Starting constraints relate to Start-to-Start, not Finish-to-Finish.",
      "FF coordinates work completion, not activity cancellation.",
      "All activities in a disciplined project schedule must have assigned owners."
    ],
    "examTrap": "FF = Predecessor must finish before Successor is allowed to finish.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "FF Precedence",
      "page": 45
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "FF Precedence",
    "sourcePage": 45,
    "page": 45
  },
  {
    "id": "itpm-u2-s3-mcq-004",
    "topic": "Precedence Relationships: Start-to-Finish (SF)",
    "difficulty": "hard",
    "question": "What is true about the Start-to-Finish (SF) precedence relationship in IT project management?",
    "options": {
      "A": "The successor cannot finish until the predecessor has started; it is the rarest relationship type",
      "B": "It is the most frequently used relationship in all software projects",
      "C": "It requires all team members to work without pay until delivery",
      "D": "It means the predecessor must complete before the successor starts"
    },
    "correctAnswer": "A",
    "explanation": "Start-to-Finish (SF) means the successor cannot finish until the predecessor begins (e.g. an old legacy system cannot shut down until the new system starts operating). It is very rare in practice.",
    "whyOthersAreWrong": [
      "FS is the most common relationship; SF is by far the rarest.",
      "SF has nothing to do with developer remuneration.",
      "Predecessor completing before successor starts defines Finish-to-Start (FS)."
    ],
    "examTrap": "SF is the RAREST dependency. Example: Old server cannot be decommissioned until new server starts.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "SF Precedence",
      "page": 45
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "SF Precedence",
    "sourcePage": 45,
    "page": 45
  },
  {
    "id": "itpm-u2-s3-mcq-005",
    "topic": "Leads and Lags",
    "difficulty": "medium",
    "question": "How does the course book differentiate 'lead time' from 'lag time' in overlapping activities?",
    "options": {
      "A": "Lead time accelerates the successor closer to the predecessor's start, while lag time delays the successor further away",
      "B": "Lead time adds budget, while lag time reduces project scope",
      "C": "Lead time is only used in PERT, while lag time is only used in MoSCoW",
      "D": "Lead time represents critical path duration, while lag time represents slack"
    },
    "correctAnswer": "A",
    "explanation": "Lead time represents an overlap (acceleration) where the successor starts before the predecessor finishes. Lag time represents an intentional delay inserted between predecessor and successor.",
    "whyOthersAreWrong": [
      "Leads and lags are time adjustments; they do not alter budget or project scope.",
      "Leads and lags are used throughout precedence diagrams and Gantt charts, not MoSCoW.",
      "Critical path and slack are calculated network properties, not lead or lag offsets."
    ],
    "examTrap": "Lead = Advance/Overlap (negative time). Lag = Delay/Wait (positive time).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Leads and Lags",
      "page": 46
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Leads and Lags",
    "sourcePage": 46,
    "page": 46
  },
  {
    "id": "itpm-u2-s3-mcq-006",
    "topic": "Slack (Float) Definition",
    "difficulty": "easy",
    "question": "What does 'slack' (or 'float') indicate for an activity in a PERT network?",
    "options": {
      "A": "The maximum variability or delay an activity can experience without delaying the overall project completion date",
      "B": "The amount of financial debt the project owes to external banks",
      "C": "The number of defect reports filed against an uncompiled software build",
      "D": "The percentage of time developers spend playing video games"
    },
    "correctAnswer": "A",
    "explanation": "Slack (or float) is the buffer time an activity possesses; it represents how long its start or finish can be delayed without pushing back the project deadline.",
    "whyOthersAreWrong": [
      "Financial liabilities are tracked in balance sheets, not PERT slack calculations.",
      "Defect counts are quality bug metrics, not schedule slack.",
      "Personal downtime is unrelated to mathematical network buffer calculations."
    ],
    "examTrap": "Slack = Flexibility in scheduling. Zero slack = Critical path.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack Definition",
      "page": 46
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Slack Definition",
    "sourcePage": 46,
    "page": 46
  },
  {
    "id": "itpm-u2-s3-mcq-007",
    "topic": "Critical Path Concept",
    "difficulty": "easy",
    "question": "What is the 'critical path' in a project network diagram?",
    "options": {
      "A": "The longest sequence of dependent activities through the network, characterized by zero slack",
      "B": "The shortest path connecting the sponsor's office to the server room",
      "C": "The collection of activities that carry the lowest financial risk",
      "D": "A list of developers eligible for immediate promotion"
    },
    "correctAnswer": "A",
    "explanation": "The critical path is the longest stretch of dependent activities through the network diagram with zero total slack, dictating the absolute minimum time required to complete the project.",
    "whyOthersAreWrong": [
      "Physical office pathways are architectural building floorplans, not project network paths.",
      "Critical path tasks often carry high scheduling risk because any slip delays the project.",
      "Staff promotions have no bearing on mathematical critical path analysis."
    ],
    "examTrap": "Longest duration sequence = Determines the SHORTEST possible project completion time.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Critical Path",
      "page": 47
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Critical Path",
    "sourcePage": 47,
    "page": 47
  },
  {
    "id": "itpm-u2-s3-mcq-008",
    "topic": "Critical Path Delay Consequence",
    "difficulty": "easy",
    "question": "What is the direct consequence if an activity on the critical path is delayed by 4 days?",
    "options": {
      "A": "The overall project completion date will be delayed by exactly 4 days, unless schedule recovery measures are taken",
      "B": "The project will complete 4 days earlier because work was postponed",
      "C": "There will be zero impact on the project deadline because float absorbs it",
      "D": "All external stakeholder contracts are rendered legally void automatically"
    },
    "correctAnswer": "A",
    "explanation": "Because activities on the critical path have zero slack, any delay on a critical path activity causes a day-for-day delay in final project completion.",
    "whyOthersAreWrong": [
      "Delaying work cannot make a project finish earlier.",
      "Critical path tasks have ZERO float; there is no buffer to absorb delays.",
      "Contracts are not voided automatically; liquidated damages or renegotiations occur."
    ],
    "examTrap": "Zero slack means NO buffer. 1 day slip on critical path = 1 day project slip.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Critical Path Delay",
      "page": 47
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Critical Path Delay",
    "sourcePage": 47,
    "page": 47
  },
  {
    "id": "itpm-u2-s3-mcq-009",
    "topic": "Non-Critical Activity Delay",
    "difficulty": "medium",
    "question": "If an activity has 5 days of slack and experiences a delay of 2 days, what happens to the project completion date?",
    "options": {
      "A": "The project completion date does NOT change; the activity simply has 3 days of remaining slack",
      "B": "The project is delayed by 2 days immediately",
      "C": "The critical path automatically shifts to the sponsor's office",
      "D": "The project manager must terminate all assigned contractors"
    },
    "correctAnswer": "A",
    "explanation": "Because the delay (2 days) is less than the available slack (5 days), the project completion date is completely unaffected, though the activity's remaining slack shrinks to $5 - 2 = 3$ days.",
    "whyOthersAreWrong": [
      "Project completion is unaffected because the delay was fully absorbed by available float.",
      "The critical path only shifts if the delay exceeds total slack.",
      "Terminating staff for a delay absorbed by slack is an extreme and unjustified overreaction."
    ],
    "examTrap": "Delay <= Slack: Project finish date remains unchanged! Remaining slack = Slack - Delay.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack Absorption",
      "page": 50
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Slack Absorption",
    "sourcePage": 50,
    "page": 50
  },
  {
    "id": "itpm-u2-s3-mcq-010",
    "topic": "PERT Node Layout",
    "difficulty": "medium",
    "question": "According to the PERT node format presented in the IU course book, which times appear across the node?",
    "options": {
      "A": "Top row: Earliest Start Time (EST) and Earliest Finish Time (EFT); Bottom row: Latest Start Time (LST) and Latest Finish Time (LFT)",
      "B": "Top row: Total Cost and Net Profit; Bottom row: Employee Age and Tax ID",
      "C": "Top row: Bug Count and Code Lines; Bottom row: Coffee Consumed and Meeting Hours",
      "D": "Top row: Sponsor Name and PM Name; Bottom row: Vendor Name and Client Name"
    },
    "correctAnswer": "A",
    "explanation": "The standard PERT element displays Task ID and Duration in the center, EST (top-left) and EFT (top-right), with LST (bottom-left) and LFT (bottom-right).",
    "whyOthersAreWrong": [
      "Financial profit and tax data are tracked in business accounting systems, not PERT nodes.",
      "Code lines and bug metrics belong to software repository analytics.",
      "Stakeholder names do not occupy the four corner scheduling slots of a PERT node."
    ],
    "examTrap": "Top row = Earliest times (Forward pass). Bottom row = Latest times (Backward pass).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "PERT Node Structure",
      "page": 48
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "PERT Node Structure",
    "sourcePage": 48,
    "page": 48
  },
  {
    "id": "itpm-u2-s3-mcq-011",
    "topic": "Forward Pass Purpose",
    "difficulty": "easy",
    "question": "What is the primary objective of performing the forward pass in a PERT network?",
    "options": {
      "A": "To calculate the earliest possible starting and finishing times (EST and EFT) for each activity, starting from day zero",
      "B": "To calculate the maximum allowable delay and latest finishing times",
      "C": "To audit past financial expenditures from closed fiscal years",
      "D": "To verify that all developers have signed non-disclosure agreements"
    },
    "correctAnswer": "A",
    "explanation": "The forward pass moves chronologically from the project beginning (day 0) to the end, calculating the earliest dates each task can possibly start (EST) and finish (EFT).",
    "whyOthersAreWrong": [
      "Latest allowable times are calculated during the backward pass, not the forward pass.",
      "Auditing past expenditures belongs to financial accounting and project closure.",
      "NDAs are legal compliance items handled during procurement and onboarding."
    ],
    "examTrap": "Forward Pass = Beginning to End -> Earliest Times (EST, EFT).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Forward Pass",
      "page": 48
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Forward Pass",
    "sourcePage": 48,
    "page": 48
  },
  {
    "id": "itpm-u2-s3-mcq-012",
    "topic": "Backward Pass Purpose",
    "difficulty": "easy",
    "question": "What is the primary objective of performing the backward pass in a PERT network?",
    "options": {
      "A": "To calculate the latest allowable start and finish times (LST and LFT) for each activity without delaying the project",
      "B": "To rewrite project requirements using reverse engineering",
      "C": "To calculate the earliest possible starting times from day zero",
      "D": "To refund unused budget to external sponsors"
    },
    "correctAnswer": "A",
    "explanation": "The backward pass starts at the target project completion date and works backward toward day 0, computing the latest possible finish (LFT) and start (LST) times that preserve the deadline.",
    "whyOthersAreWrong": [
      "Reverse engineering is a technical software analysis method, not a PERT schedule pass.",
      "Earliest times are computed during the forward pass.",
      "Refunding budget occurs during financial reconciliation at project closure."
    ],
    "examTrap": "Backward Pass = End to Beginning -> Latest allowable times (LFT, LST).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Backward Pass",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Backward Pass",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s3-mcq-013",
    "topic": "Converging Predecessors Rule (Forward Pass)",
    "difficulty": "hard",
    "question": "When an activity has multiple incoming predecessors during the forward pass, how is its Earliest Start Time (EST) determined?",
    "options": {
      "A": "It is equal to the MAXIMUM (latest) of the Earliest Finish Times (EFT) of all its direct predecessors",
      "B": "It is equal to the MINIMUM (earliest) of the Earliest Finish Times of its predecessors",
      "C": "It is the mathematical average of the durations of all predecessors",
      "D": "It is set arbitrarily by the project sponsor regardless of predecessors"
    },
    "correctAnswer": "A",
    "explanation": "Because a successor cannot start until ALL its predecessors are complete, its earliest start must equal the latest (maximum) finish time among those predecessors.",
    "whyOthersAreWrong": [
      "Using the minimum would mean starting before some predecessors have finished, violating dependency logic.",
      "Averages do not account for incomplete predecessor activities.",
      "Arbitrary sponsor dates violate the physics of sequential activity dependencies."
    ],
    "examTrap": "Forward pass at a merge: take the MAXIMUM EFT. All predecessors must finish before successor starts!",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Forward Pass Merge Rule",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Forward Pass Merge Rule",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s3-mcq-014",
    "topic": "Diverging Successors Rule (Backward Pass)",
    "difficulty": "hard",
    "question": "When an activity has multiple outgoing successors during the backward pass, how is its Latest Finish Time (LFT) determined?",
    "options": {
      "A": "It is equal to the MINIMUM (earliest) of the Latest Start Times (LST) of all its direct successors",
      "B": "It is equal to the MAXIMUM of the Latest Start Times of all successors",
      "C": "It is equal to the total sum of the durations of all successors",
      "D": "It defaults to the overall project completion date"
    },
    "correctAnswer": "A",
    "explanation": "A predecessor must finish in time to allow the most urgently required successor to start; therefore, its LFT is constrained by the smallest (minimum) LST among all its direct successors.",
    "whyOthersAreWrong": [
      "Using the maximum would delay the predecessor past the latest start date of the more urgent successor.",
      "Summing durations is invalid because diverging successors often execute in parallel.",
      "Defaulting to the final project date ignores intermediate dependency constraints."
    ],
    "examTrap": "Backward pass at a burst/divergence: take the MINIMUM LST.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Backward Pass Burst Rule",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Backward Pass Burst Rule",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s3-mcq-015",
    "topic": "Slack Calculation Formulas",
    "difficulty": "medium",
    "question": "Which mathematical formula correctly calculates total slack (float) for an activity?",
    "options": {
      "A": "Slack = LST - EST (or LFT - EFT)",
      "B": "Slack = EST + EFT + Duration",
      "C": "Slack = LFT - EST",
      "D": "Slack = Duration / 6"
    },
    "correctAnswer": "A",
    "explanation": "Slack is the difference between the latest and earliest times: $\\text{Slack} = LST - EST = LFT - EFT$. If latest equals earliest, slack is zero.",
    "whyOthersAreWrong": [
      "Summing EST, EFT, and duration yields an arbitrary inflated time value.",
      "LFT - EST includes task duration plus slack, not pure slack.",
      "Duration / 6 resembles a PERT standard deviation formula, not slack."
    ],
    "examTrap": "Slack = Latest Start minus Earliest Start (or Latest Finish minus Earliest Finish).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack Formula",
      "page": 50
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Slack Formula",
    "sourcePage": 50,
    "page": 50
  },
  {
    "id": "itpm-u2-s3-mcq-016",
    "topic": "Gantt Chart Definition",
    "difficulty": "easy",
    "question": "What is a Gantt chart in IT project management?",
    "options": {
      "A": "A horizontal bar chart illustrating the project schedule, activity durations, dependencies, and progress status over time",
      "B": "A pie chart displaying corporate shareholder equity distributions",
      "C": "A scatter plot correlating software bugs with room temperature",
      "D": "A formal legal brief filed before national labor arbitration courts"
    },
    "correctAnswer": "A",
    "explanation": "A Gantt chart is a bar chart displaying activities along a timeline, showing start dates, durations, progress, and dependency arrows linking predecessors to successors.",
    "whyOthersAreWrong": [
      "Shareholder equity distributions are presented in financial balance sheets.",
      "Scatter plots track statistical correlations, not project schedule execution.",
      "Legal briefs belong to litigation, not project planning visualizations."
    ],
    "examTrap": "Gantt chart = Bar chart representing project timeline, dependencies, and progress.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Gantt Chart Definition",
      "page": 51
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Gantt Chart Definition",
    "sourcePage": 51,
    "page": 51
  },
  {
    "id": "itpm-u2-s3-mcq-017",
    "topic": "Gantt Chart Strengths",
    "difficulty": "easy",
    "question": "What is the primary operational advantage of using a Gantt chart?",
    "options": {
      "A": "It provides an intuitive visual representation of the project timeline, helping set realistic timeframes and identify overlaps",
      "B": "It guarantees that software will have zero defects upon deployment",
      "C": "It automatically generates the entire Java source code for the project",
      "D": "It eliminates the need for project team members to communicate"
    },
    "correctAnswer": "A",
    "explanation": "Gantt charts make complex schedules visually understandable, revealing concurrency, milestones, and realistic timeframes at a glance.",
    "whyOthersAreWrong": [
      "Visualizing a timeline does not magically eliminate software bugs.",
      "Gantt charts are scheduling visualizations; they do not write software code.",
      "Communication is vital; visual tools facilitate communication rather than eliminating it."
    ],
    "examTrap": "Visual clarity and timeline communication are the chief benefits of Gantt charts.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Gantt Chart Advantages",
      "page": 51
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Gantt Chart Advantages",
    "sourcePage": 51,
    "page": 51
  },
  {
    "id": "itpm-u2-s3-mcq-018",
    "topic": "Gantt Chart Limitations (Resources and Cost)",
    "difficulty": "hard",
    "question": "What major limitation of Gantt charts is specifically highlighted in the IU course book?",
    "options": {
      "A": "They do not reveal the quantity of resources required or their financial costs (e.g. differentiating a 20-person task from a 10-person task)",
      "B": "They can never display task start dates or completion deadlines",
      "C": "They are prohibited in European Union IT development projects",
      "D": "They cannot be printed or viewed on modern digital screens"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly stresses that a bar on a Gantt chart looks identical whether an activity requires 20 people and $100k or 10 people and $20k; resources and costs are not directly shown.",
    "whyOthersAreWrong": [
      "Start dates and deadlines are standard core components of Gantt charts.",
      "Gantt charts are standard and frequently required in EU and international project proposals.",
      "Gantt charts are displayed on virtually every modern project management software tool."
    ],
    "examTrap": "Gantt shows TIME, but does NOT show RESOURCE QUANTITIES or FINANCIAL COSTS directly.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Gantt Chart Limitations",
      "page": 51
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Gantt Chart Limitations",
    "sourcePage": 51,
    "page": 51
  },
  {
    "id": "itpm-u2-s3-mcq-019",
    "topic": "Gantt Chart Maintenance Limitation",
    "difficulty": "medium",
    "question": "Why can Gantt charts become burdensome in large, dynamic IT projects?",
    "options": {
      "A": "They are not static; ongoing progress, changes, and slippages must be continuously recorded and updated to remain useful",
      "B": "They require specialized supercomputers that consume megawatts of power",
      "C": "Every update requires written approval from international patent offices",
      "D": "They automatically delete project code files whenever a task is delayed"
    },
    "correctAnswer": "A",
    "explanation": "In large projects with many dependencies, Gantt charts quickly become unreadable and obsolete unless updated constantly with live progress data.",
    "whyOthersAreWrong": [
      "Gantt charts run on ordinary laptops and cloud platforms.",
      "Schedule tracking does not involve patent office filings.",
      "Project tracking software does not delete codebase files."
    ],
    "examTrap": "Gantt charts require continuous maintenance; without active updates, they become useless.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Gantt Maintenance",
      "page": 51
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Gantt Maintenance",
    "sourcePage": 51,
    "page": 51
  },
  {
    "id": "itpm-u2-s3-mcq-020",
    "topic": "Complementary Planning Tools",
    "difficulty": "medium",
    "question": "Why does the IU course book advocate using both PERT and Gantt charts together rather than choosing just one?",
    "options": {
      "A": "They are complementary: PERT excels at modeling logical dependencies, critical paths, and slack, while Gantt excels at visual timeline presentation",
      "B": "Because international trade laws mandate purchasing licenses for both tools simultaneously",
      "C": "To create duplicate work and keep project managers occupied during quiet periods",
      "D": "Because PERT is used only by clients while Gantt is used only by developers"
    },
    "correctAnswer": "A",
    "explanation": "PERT models network logic, floating slack, and critical path calculations, providing the mathematical data that makes Gantt timeline visualizations accurate and robust.",
    "whyOthersAreWrong": [
      "There are no trade laws mandating dual software licensing.",
      "Project management seeks efficiency, never artificial busywork.",
      "Both tools are internal management techniques shared across technical and business stakeholders."
    ],
    "examTrap": "PERT and Gantt are COMPLEMENTARY, not mutually exclusive alternatives.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Complementary Tools",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Complementary Tools",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s3-mcq-021",
    "topic": "Planning Phase Evolution",
    "difficulty": "medium",
    "question": "Does stakeholder approval of project baselines mean that project planning is permanently finished?",
    "options": {
      "A": "No; planning continues iteratively, and plans may be revised as execution evidence and monitoring reveal deviations",
      "B": "Yes; once approved, a project plan is legally immutable and cannot be changed under any circumstance",
      "C": "Yes, but only in waterfall projects; in agile projects, planning never starts",
      "D": "No, because approvals are always fake and carry zero organizational weight"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 53) emphasizes that approving the baseline plan signifies moving to execution, but planning continues as monitoring reveals variances requiring adjustments.",
    "whyOthersAreWrong": [
      "Plans must accommodate change; rigidly refusing adjustments causes project failure.",
      "Agile projects engage in continuous, disciplined planning (sprint planning, backlog grooming).",
      "Formal stakeholder approval is the legitimate gateway to project execution."
    ],
    "examTrap": "Approval ends the initial planning phase, but planning continues iteratively throughout the project.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Iterative Planning",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Iterative Planning",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s3-mcq-022",
    "topic": "Subsidiary Management Plans",
    "difficulty": "hard",
    "question": "Which set of subsidiary management plans is developed alongside the schedule baseline to support comprehensive project execution?",
    "options": {
      "A": "Scope, requirements, cost, quality, process improvement, human resources, communications, risk, procurement, and stakeholders",
      "B": "Catering menus, gym memberships, holiday destinations, and personal car insurance",
      "C": "Federal tax evasion, corporate espionage, and regulatory obstruction",
      "D": "Hardware demolition, employee dismissal, and corporate bankruptcy filing"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly enumerates subsidiary plans for scope, schedule, cost, requirements, quality, process improvement, HR, communication, risk, procurement, and stakeholders.",
    "whyOthersAreWrong": [
      "Catering and personal insurance are personal employee benefits, not project plans.",
      "Illegal activities violate ethics and professional project management standards.",
      "Demolition and bankruptcy are liquidation actions, not project management subsidiary plans."
    ],
    "examTrap": "Subsidiary plans support the overall project management plan across all knowledge domains.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Subsidiary Plans",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Subsidiary Plans",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s3-mcq-023",
    "topic": "PERT Math: Calculate EFT",
    "difficulty": "easy",
    "question": "A task has an Earliest Start Time (EST) of day 6 and an estimated duration of 5 days. What is its Earliest Finish Time (EFT)?",
    "options": {
      "A": "Day 11",
      "B": "Day 1",
      "C": "Day 30",
      "D": "Day 16"
    },
    "correctAnswer": "A",
    "explanation": "Using the forward pass formula: EFT = EST + Duration = 6 + 5 = 11.",
    "whyOthersAreWrong": [
      "Day 1 results from subtraction (6 - 5), which is mathematically incorrect for forward pass finish time.",
      "Day 30 results from multiplication (6 * 5).",
      "Day 16 results from arbitrarily adding an extra 5 days."
    ],
    "examTrap": "EFT = EST + Duration.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "EFT Calculation",
      "page": 48
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "EFT Calculation",
    "sourcePage": 48,
    "page": 48
  },
  {
    "id": "itpm-u2-s3-mcq-024",
    "topic": "PERT Math: Converging Predecessors EST",
    "difficulty": "medium",
    "question": "Task C has two incoming Finish-to-Start predecessors: Task A (EFT = 14 weeks) and Task B (EFT = 18 weeks). What is the Earliest Start Time (EST) of Task C?",
    "options": {
      "A": "Week 18",
      "B": "Week 14",
      "C": "Week 32",
      "D": "Week 16"
    },
    "correctAnswer": "A",
    "explanation": "Because Task C depends on both A and B, it cannot start until BOTH are completed. Thus, EST(C) = max(EFT(A), EFT(B)) = max(14, 18) = 18 weeks.",
    "whyOthersAreWrong": [
      "Week 14 is the minimum; starting at week 14 would mean Task B is still unfinished.",
      "Week 32 is the sum (14 + 18), but predecessors A and B execute concurrently.",
      "Week 16 is the average, which would violate the completion constraint of Task B."
    ],
    "examTrap": "Forward pass merge: EST = MAXIMUM of all predecessor EFTs.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Forward Pass Merge",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Forward Pass Merge",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s3-mcq-025",
    "topic": "PERT Math: Calculate LST",
    "difficulty": "easy",
    "question": "An activity has a Latest Finish Time (LFT) of week 24 and a duration of 7 weeks. What is its Latest Start Time (LST)?",
    "options": {
      "A": "Week 17",
      "B": "Week 31",
      "C": "Week 7",
      "D": "Week 24"
    },
    "correctAnswer": "A",
    "explanation": "Using the backward pass formula: LST = LFT - Duration = 24 - 7 = 17 weeks.",
    "whyOthersAreWrong": [
      "Week 31 results from addition (24 + 7), which represents a forward movement rather than backward pass.",
      "Week 7 is merely the activity duration.",
      "Week 24 is the LFT without subtracting duration."
    ],
    "examTrap": "LST = LFT - Duration.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "LST Calculation",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "LST Calculation",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s3-mcq-026",
    "topic": "PERT Math: Diverging Successors LFT",
    "difficulty": "medium",
    "question": "Task D is followed by two successor activities: Task E (LST = week 19) and Task F (LST = week 15). What is the Latest Finish Time (LFT) of Task D?",
    "options": {
      "A": "Week 15",
      "B": "Week 19",
      "C": "Week 34",
      "D": "Week 4"
    },
    "correctAnswer": "A",
    "explanation": "During the backward pass, a predecessor must finish in time to accommodate the earliest start of any successor. LFT(D) = min(LST(E), LST(F)) = min(19, 15) = 15 weeks.",
    "whyOthersAreWrong": [
      "Week 19 is the maximum; finishing at week 19 would delay Task F by 4 weeks.",
      "Week 34 is the sum (19 + 15), which is completely invalid.",
      "Week 4 is the difference (19 - 15)."
    ],
    "examTrap": "Backward pass burst: LFT = MINIMUM of all successor LSTs.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Backward Pass Burst",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Backward Pass Burst",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s3-mcq-027",
    "topic": "PERT Math: Calculate Slack",
    "difficulty": "easy",
    "question": "An activity has EST = 8, EFT = 13, LST = 12, and LFT = 17. What is its Slack?",
    "options": {
      "A": "4 weeks",
      "B": "5 weeks",
      "C": "9 weeks",
      "D": "0 weeks"
    },
    "correctAnswer": "A",
    "explanation": "Slack = LST - EST = 12 - 8 = 4 weeks (or LFT - EFT = 17 - 13 = 4 weeks).",
    "whyOthersAreWrong": [
      "5 weeks is the activity duration (13 - 8 or 17 - 12).",
      "9 weeks is LFT - EST (17 - 8).",
      "0 weeks would indicate a critical-path task, but here slack is positive."
    ],
    "examTrap": "Slack = LST - EST = LFT - EFT. Both calculations must yield the identical number!",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack Calculation",
      "page": 50
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Slack Calculation",
    "sourcePage": 50,
    "page": 50
  },
  {
    "id": "itpm-u2-s3-mcq-028",
    "topic": "PERT Math: Critical Path Identification",
    "difficulty": "medium",
    "question": "A project network has three parallel paths: Path 1 takes 15 weeks (4 + 6 + 5); Path 2 takes 18 weeks (3 + 8 + 7); Path 3 takes 14 weeks (5 + 5 + 4). Which path is the Critical Path and what is the project duration?",
    "options": {
      "A": "Path 2 is the critical path, and the project duration is 18 weeks",
      "B": "Path 3 is the critical path, and the project duration is 14 weeks",
      "C": "Path 1 is the critical path, and the project duration is 15 weeks",
      "D": "All three paths combined form the critical path, and the duration is 47 weeks"
    },
    "correctAnswer": "A",
    "explanation": "The critical path is the longest sequence of dependent activities through the network. Path 2 has the largest total duration (18 weeks), which establishes the minimum time required to complete the project.",
    "whyOthersAreWrong": [
      "Path 3 is the shortest path (14 weeks), possessing positive float.",
      "Path 1 takes 15 weeks and has 3 weeks of slack relative to Path 2.",
      "Summing all parallel paths (47 weeks) ignores concurrent execution."
    ],
    "examTrap": "Critical Path = LONGEST path = 18 weeks. It determines the minimum completion time.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Critical Path Identification",
      "page": 47
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Critical Path Identification",
    "sourcePage": 47,
    "page": 47
  },
  {
    "id": "itpm-u2-s3-mcq-029",
    "topic": "PERT Math: Critical Path Delay Impact",
    "difficulty": "medium",
    "question": "A project has a scheduled duration of 22 weeks. Activity B is on the critical path. Activity B is delayed by 3 weeks due to supplier delays. What is the new project completion time?",
    "options": {
      "A": "25 weeks",
      "B": "22 weeks",
      "C": "19 weeks",
      "D": "28 weeks"
    },
    "correctAnswer": "A",
    "explanation": "Because Activity B is on the critical path, it has zero slack. Any delay on the critical path directly pushes the project completion date day-for-day: 22 + 3 = 25 weeks.",
    "whyOthersAreWrong": [
      "22 weeks assumes the delay was absorbed, but critical path activities have zero float.",
      "19 weeks subtracts time instead of adding it.",
      "28 weeks adds double the delay."
    ],
    "examTrap": "Critical path tasks have 0 slack. Delay directly adds to project end date.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Critical Delay Impact",
      "page": 47
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Critical Delay Impact",
    "sourcePage": 47,
    "page": 47
  },
  {
    "id": "itpm-u2-s3-mcq-030",
    "topic": "PERT Math: Non-Critical Delay Absorption",
    "difficulty": "medium",
    "question": "Task G has a total slack of 6 days. Due to unexpected staff sickness, Task G is delayed by 4 days. By how many days is the project finish date delayed?",
    "options": {
      "A": "0 days",
      "B": "4 days",
      "C": "2 days",
      "D": "6 days"
    },
    "correctAnswer": "A",
    "explanation": "The delay of 4 days is fully absorbed by the 6 days of available slack. The project completion date experiences 0 days of delay, and Task G has 6 - 4 = 2 days of slack remaining.",
    "whyOthersAreWrong": [
      "4 days assumes zero slack, which is untrue for Task G.",
      "2 days is the remaining slack, not the project delay.",
      "6 days was the original slack buffer."
    ],
    "examTrap": "Delay (4) <= Slack (6) -> Project delay is ZERO.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Slack Absorption",
      "page": 50
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Slack Absorption",
    "sourcePage": 50,
    "page": 50
  },
  {
    "id": "itpm-u2-s3-mcq-031",
    "topic": "PERT Math: Delay Exceeding Slack",
    "difficulty": "hard",
    "question": "Task H has a total slack of 2 weeks. A severe technical bug causes Task H to be delayed by 5 weeks. By how many weeks will the overall project completion be delayed?",
    "options": {
      "A": "3 weeks",
      "B": "5 weeks",
      "C": "2 weeks",
      "D": "7 weeks"
    },
    "correctAnswer": "A",
    "explanation": "The available slack of 2 weeks absorbs the first 2 weeks of delay. The remaining unbuffered delay slips the project completion: Delay - Slack = 5 - 2 = 3 weeks.",
    "whyOthersAreWrong": [
      "5 weeks ignores the 2 weeks of buffer absorbed by available slack.",
      "2 weeks was the absorbed buffer, not the project slip.",
      "7 weeks adds the slack to the delay instead of subtracting."
    ],
    "examTrap": "Delay exceeding slack: Project slip = Total Delay - Available Slack = 5 - 2 = 3 weeks.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.3",
      "topic": "Delay Exceeding Float",
      "page": 8
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Delay Exceeding Float",
    "sourcePage": 8,
    "page": 8
  },
  {
    "id": "itpm-u2-s3-mcq-032",
    "topic": "PERT Math: Linear Chain Forward and Backward Pass",
    "difficulty": "hard",
    "question": "A simple network consists of a linear chain: Task A (duration 4 days) -> Task B (duration 6 days) -> Task C (duration 5 days). The project starts at day 0. What are the Earliest Start (EST), Earliest Finish (EFT), Latest Start (LST), and Latest Finish (LFT) for Task B?",
    "options": {
      "A": "EST = 4, EFT = 10, LST = 4, LFT = 10, Slack = 0",
      "B": "EST = 0, EFT = 6, LST = 5, LFT = 11, Slack = 5",
      "C": "EST = 4, EFT = 10, LST = 9, LFT = 15, Slack = 5",
      "D": "EST = 10, EFT = 16, LST = 10, LFT = 16, Slack = 0"
    },
    "correctAnswer": "A",
    "explanation": "Forward pass: Task A finishes at day 4 (EST 0, EFT 4). Task B starts at day 4 and finishes at 4 + 6 = 10 (EST 4, EFT 10). Task C starts at day 10 and finishes at 10 + 5 = 15 (project end = 15). Backward pass: Task C (LFT 15, LST 10). Task B must finish by day 10 (LFT 10) and start by 10 - 6 = 4 (LST 4). Since this is the only path, it is critical, and Slack = 4 - 4 = 0.",
    "whyOthersAreWrong": [
      "Task B cannot start at day 0 because predecessor A takes 4 days.",
      "LST cannot be 9 because Task C would then be forced to start at day 15, delaying project completion.",
      "Task B starts at day 4, not day 10."
    ],
    "examTrap": "In a single linear chain, all tasks are critical and have zero slack.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.3",
      "topic": "Forward and Backward Linear Pass",
      "page": 49
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.3",
    "sourceUnit": 2,
    "sourceSection": "2.3",
    "sourceTopic": "Forward and Backward Linear Pass",
    "sourcePage": 49,
    "page": 49
  },
  {
    "id": "itpm-u2-s4-mcq-001",
    "topic": "Definition of Deliverable and Acceptance",
    "difficulty": "easy",
    "question": "What is the relationship between a project deliverable and acceptance according to the IU course book?",
    "options": {
      "A": "A deliverable is the output produced by project activity, but it must be formally accepted by stakeholders against established criteria",
      "B": "A deliverable is accepted automatically the moment code is typed by an engineer",
      "C": "Acceptance requires paying cash bonuses to all team members",
      "D": "Deliverables only exist after project warranty expiration"
    },
    "correctAnswer": "A",
    "explanation": "Having a deliverable is only half the battle; it must satisfy established requirement criteria and be formally accepted by project stakeholders or their proxies.",
    "whyOthersAreWrong": [
      "Typing code does not mean it meets acceptance criteria or is bug-free.",
      "Acceptance evaluates conformity to requirements, not bonus distributions.",
      "Deliverables are produced throughout project execution, not after warranty expiration."
    ],
    "examTrap": "Production != Acceptance. A deliverable must be verified against criteria to be accepted.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Deliverable Acceptance",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Deliverable Acceptance",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s4-mcq-002",
    "topic": "Definition of Done (DoD) Core Concept",
    "difficulty": "easy",
    "question": "In agile IT development, what is the 'Definition of Done' (DoD)?",
    "options": {
      "A": "A previously agreed-upon set of quality and completion criteria that must be satisfied before a work item is considered finished",
      "B": "The final date when the hosting organization permanently liquidates all assets",
      "C": "A legal waiver releasing the development team from all future bug fixing",
      "D": "The informal opinion of the newest team intern on a Friday afternoon"
    },
    "correctAnswer": "A",
    "explanation": "The DoD is an agreed-upon checklist of quality and technical criteria ensuring that any task marked 'done' is truly complete, tested, and integrated.",
    "whyOthersAreWrong": [
      "DoD governs quality checkpoints during development, not corporate liquidation.",
      "DoD enforces quality standards rather than waiving responsibility for bugs.",
      "DoD is a formal team agreement, not an informal junior opinion."
    ],
    "examTrap": "DoD = Agreed quality checklist. Standard: coded to standard, tested, integrated, documented.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD Definition",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "DoD Definition",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s4-mcq-003",
    "topic": "Standard DoD Inclusions",
    "difficulty": "medium",
    "question": "According to the course book, which set of technical criteria is generally considered part of being 'done' in software development?",
    "options": {
      "A": "Coded as per standards, peer-reviewed, units tested, fully integrated, and documented",
      "B": "Compiled once without checking syntax, uncommitted, and kept on a private personal laptop",
      "C": "Transferred directly to production on Friday evening without running any test suites",
      "D": "Replaced by marketing slogans without writing any code"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly lists: coded as per agreed standards, reviewed, units tested, fully integrated, and documented as the foundational criteria of DoD.",
    "whyOthersAreWrong": [
      "Private uncommitted code on a laptop violates team integration and testing rules.",
      "Deploying untested code directly to production on Friday violates every quality principle.",
      "Marketing slogans cannot substitute for functional, tested code."
    ],
    "examTrap": "Standard DoD elements: Code standards + Review + Unit tests + Integration + Documentation.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Standard DoD Elements",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Standard DoD Elements",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s4-mcq-004",
    "topic": "DoD vs Final Customer Acceptance",
    "difficulty": "medium",
    "question": "What is the critical distinction between the Definition of Done (DoD) and Final Customer Acceptance?",
    "options": {
      "A": "DoD is an internal team quality assurance mechanism before passing deliverables forward; Customer Acceptance is formal sign-off by the client or sponsor",
      "B": "DoD is signed only by external lawyers, while Customer Acceptance is decided by developers",
      "C": "DoD applies only to hardware screws, while Customer Acceptance applies only to software buttons",
      "D": "There is no difference; the terms are 100% interchangeable in all contexts"
    },
    "correctAnswer": "A",
    "explanation": "DoD serves as an internal quality filter created and enforced by the development team; customer acceptance is the external validation that the product satisfies client business needs.",
    "whyOthersAreWrong": [
      "DoD is maintained by the development team, while customer acceptance belongs to the client/sponsor.",
      "Both concepts apply across software and hardware engineering domains.",
      "Conflating internal team completion with customer sign-off is a major exam trap."
    ],
    "examTrap": "DoD = Internal team QA filter. Customer Acceptance = External client sign-off.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD vs Acceptance",
      "page": 2
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "DoD vs Acceptance",
    "sourcePage": 2,
    "page": 2
  },
  {
    "id": "itpm-u2-s4-mcq-005",
    "topic": "Evolution of DoD",
    "difficulty": "medium",
    "question": "Why does the course book state that the Definition of Done (DoD) should evolve over the project lifecycle?",
    "options": {
      "A": "As the team matures, bonds, and gains deeper domain knowledge, they refine criteria to leverage higher expertise and shared understanding",
      "B": "Because quality standards should be gradually lowered as deadlines approach",
      "C": "Because the project manager forgets the original criteria",
      "D": "To allow developers to bypass testing during difficult sprints"
    },
    "correctAnswer": "A",
    "explanation": "The course book notes that as team cohesion and process insights grow, the team revisits the DoD to raise standards and leverage collective lessons learned.",
    "whyOthersAreWrong": [
      "Lowering standards as deadlines loom builds technical debt and leads to product failure.",
      "DoD is documented and maintained collaboratively, not forgotten.",
      "DoD exists to prevent bypassing tests, not to sanction sloppy practices."
    ],
    "examTrap": "DoD is a LIVING artifact that matures and strengthens as the team gains experience.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD Evolution",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "DoD Evolution",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s4-mcq-006",
    "topic": "Benefits of DoD",
    "difficulty": "easy",
    "question": "Which two primary benefits does a well-defined DoD provide to an engineering team?",
    "options": {
      "A": "Quality and transparency",
      "B": "Higher taxes and longer working hours",
      "C": "Reduced communication and isolated silos",
      "D": "Exemption from all project constraints"
    },
    "correctAnswer": "A",
    "explanation": "The course book explicitly states: 'In general, the DoD ensures quality and transparency and that everyone on the development team knows exactly what each deliverable is.'",
    "whyOthersAreWrong": [
      "DoD has nothing to do with corporate tax rates or uncompensated overtime.",
      "DoD fosters transparent collaboration, directly dismantling isolated silos.",
      "No project management tool exempts teams from budget, schedule, or scope constraints."
    ],
    "examTrap": "Core benefits: Quality and Transparency.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "DoD Benefits",
      "page": 53
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "DoD Benefits",
    "sourcePage": 53,
    "page": 53
  },
  {
    "id": "itpm-u2-s4-mcq-007",
    "topic": "ISO/IEC 25010 Purpose",
    "difficulty": "medium",
    "question": "What is the primary role of the ISO/IEC 25010 standard in IT project quality planning?",
    "options": {
      "A": "To provide a comprehensive quality framework emphasizing shared understanding and communication of software quality characteristics",
      "B": "To dictate the specific daily programming language and text editor developers must use",
      "C": "To serve as a binding police code for arresting incompetent programmers",
      "D": "To calculate the critical path duration in PERT scheduling diagrams"
    },
    "correctAnswer": "A",
    "explanation": "The course book emphasizes that the purpose of ISO/IEC 25010 is not rigid micromanagement, but establishing communication and a shared understanding of what constitutes quality across stakeholders.",
    "whyOthersAreWrong": [
      "ISO standards do not dictate programming languages or personal code editors.",
      "Standards are engineering reference frameworks, not criminal penal codes.",
      "Critical path calculations belong to PERT/CPM, not software quality models."
    ],
    "examTrap": "ISO/IEC 25010 creates a SHARED VOCABULARY and shared understanding of quality.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "ISO 25010 Purpose",
      "page": 57
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "ISO 25010 Purpose",
    "sourcePage": 57,
    "page": 57
  },
  {
    "id": "itpm-u2-s4-mcq-008",
    "topic": "ISO/IEC 25010 Two Quality Models",
    "difficulty": "medium",
    "question": "Which two distinct quality models are defined under the ISO/IEC 25010 standard?",
    "options": {
      "A": "Quality-in-Use model and Product Quality model",
      "B": "Hardware Architecture model and Marketing Strategy model",
      "C": "Waterfall Execution model and Agile Scrap model",
      "D": "Financial Accounting model and Human Resource Payroll model"
    },
    "correctAnswer": "A",
    "explanation": "ISO/IEC 25010 establishes two distinct structures: Quality-in-Use (5 characteristics relating to real-world operational user outcomes) and Product Quality (8 characteristics relating to software properties).",
    "whyOthersAreWrong": [
      "Hardware architecture and marketing strategy belong to enterprise architecture and commercial sales.",
      "Waterfall and agile are lifecycle execution methodologies, not ISO 25010 quality models.",
      "Financial accounting and payroll belong to corporate accounting."
    ],
    "examTrap": "Remember the dual models: Quality-in-Use (5) and Product Quality (8).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Dual Models",
      "page": 54
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Dual Models",
    "sourcePage": 54,
    "page": 54
  },
  {
    "id": "itpm-u2-s4-mcq-009",
    "topic": "ISO/IEC 25010 Quality-in-Use Characteristics Count",
    "difficulty": "easy",
    "question": "How many characteristics comprise the ISO/IEC 25010 'Quality-in-Use' model?",
    "options": {
      "A": "5 characteristics",
      "B": "8 characteristics",
      "C": "3 characteristics",
      "D": "12 characteristics"
    },
    "correctAnswer": "A",
    "explanation": "The Quality-in-Use model consists of exactly 5 characteristics: Satisfaction, Effectiveness, Freedom from risk, Efficiency, and Context coverage (mnemonic: S-E-F-E-C).",
    "whyOthersAreWrong": [
      "8 characteristics belong to the Product Quality model.",
      "3 is the number of constraints in the Iron Triangle.",
      "12 is unrelated to ISO 25010 top-level models."
    ],
    "examTrap": "Quality-in-Use = 5 (S-E-F-E-C). Product Quality = 8 (F-P-U-R-S-C-M-P). Do not mix them up!",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality-in-Use Count",
      "page": 2
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Quality-in-Use Count",
    "sourcePage": 2,
    "page": 2
  },
  {
    "id": "itpm-u2-s4-mcq-010",
    "topic": "ISO/IEC 25010 Quality-in-Use Characteristics List",
    "difficulty": "hard",
    "question": "Which option lists the exact five characteristics of the ISO/IEC 25010 Quality-in-Use model?",
    "options": {
      "A": "Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage",
      "B": "Speed, Cost, Color, Weight, Profit",
      "C": "Functional suitability, Usability, Security, Portability, Maintainability",
      "D": "Initiation, Planning, Execution, Monitoring, Termination"
    },
    "correctAnswer": "A",
    "explanation": "The 5 Quality-in-Use characteristics defined in the course book (p. 54-55) are: Satisfaction, Effectiveness, Freedom from risk, Efficiency, and Context coverage.",
    "whyOthersAreWrong": [
      "Speed, cost, color are arbitrary physical and business attributes.",
      "Functional suitability, usability, etc., belong to the 8 Product Quality characteristics.",
      "Initiation, planning, etc., are the five project lifecycle phases."
    ],
    "examTrap": "Mnemonic: S-E-F-E-C (Satisfaction, Effectiveness, Freedom from risk, Efficiency, Context coverage).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality-in-Use List",
      "page": 54
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Quality-in-Use List",
    "sourcePage": 54,
    "page": 54
  },
  {
    "id": "itpm-u2-s4-mcq-011",
    "topic": "Quality-in-Use: Context Coverage Elements",
    "difficulty": "hard",
    "question": "In ISO/IEC 25010 Quality-in-Use, what are the two sub-elements of 'Context coverage'?",
    "options": {
      "A": "Context completeness and Flexibility",
      "B": "Screen brightness and Speaker volume",
      "C": "Customer salary and Credit rating",
      "D": "Programming syntax and Database indices"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 55) explicitly breaks Context Coverage into two aspects: context completeness (usable in all specified contexts) and flexibility (usable in unanticipated contexts).",
    "whyOthersAreWrong": [
      "Screen brightness and speaker volume are physical hardware settings.",
      "Customer salary and credit rating are financial consumer metrics.",
      "Programming syntax belongs to implementation technology."
    ],
    "examTrap": "Context Coverage consists of: 1) Context Completeness (specified), 2) Flexibility (unanticipated).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Context Coverage Elements",
      "page": 55
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Context Coverage Elements",
    "sourcePage": 55,
    "page": 55
  },
  {
    "id": "itpm-u2-s4-mcq-012",
    "topic": "ISO/IEC 25010 Product Quality Characteristics Count",
    "difficulty": "easy",
    "question": "How many characteristics make up the ISO/IEC 25010 'Product Quality' model?",
    "options": {
      "A": "8 characteristics",
      "B": "5 characteristics",
      "C": "4 characteristics",
      "D": "10 characteristics"
    },
    "correctAnswer": "A",
    "explanation": "The Product Quality model is composed of exactly 8 characteristics: Functional suitability, Performance efficiency, Usability, Reliability, Security, Compatibility, Portability, and Maintainability.",
    "whyOthersAreWrong": [
      "5 characteristics belong to Quality-in-Use.",
      "4 is the number of MATA risk strategies or IADM steps.",
      "10 is unrelated to ISO 25010."
    ],
    "examTrap": "Product Quality = 8. Quality in Use = 5.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Product Quality Count",
      "page": 55
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Product Quality Count",
    "sourcePage": 55,
    "page": 55
  },
  {
    "id": "itpm-u2-s4-mcq-013",
    "topic": "Product Quality: Functional Suitability Elements",
    "difficulty": "hard",
    "question": "Which three elements comprise 'Functional suitability' under ISO/IEC 25010?",
    "options": {
      "A": "Functional completeness, Functional correctness, Functional appropriateness",
      "B": "Speed, Acceleration, Momentum",
      "C": "Confidentiality, Integrity, Availability",
      "D": "Modularity, Analyzability, Reusability"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 55) defines functional suitability elements as: completeness (covers all tasks), correctness (correct results with needed precision), and appropriateness (facilitates accomplishment without unnecessary steps).",
    "whyOthersAreWrong": [
      "Speed and acceleration are physical mechanics terms.",
      "Confidentiality and integrity belong to Security; availability belongs to Reliability.",
      "Modularity and analyzability belong to Maintainability."
    ],
    "examTrap": "Functional Suitability = Completeness, Correctness, Appropriateness.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Functional Suitability Elements",
      "page": 55
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Functional Suitability Elements",
    "sourcePage": 55,
    "page": 55
  },
  {
    "id": "itpm-u2-s4-mcq-014",
    "topic": "Product Quality: Usability Elements",
    "difficulty": "hard",
    "question": "Which of the following is an explicit sub-characteristic of 'Usability' in ISO/IEC 25010?",
    "options": {
      "A": "Appropriateness recognizability, learnability, operability, user error protection, aesthetics, and accessibility",
      "B": "Fault tolerance, recoverability, and maturity",
      "C": "Coexistence and interoperability",
      "D": "Adaptability and installability"
    },
    "correctAnswer": "A",
    "explanation": "Course book pages 55-56 detail usability: appropriateness recognizability, learnability, operability, user error protection, user interface aesthetics, and accessibility.",
    "whyOthersAreWrong": [
      "Fault tolerance and recoverability belong to Reliability.",
      "Coexistence and interoperability belong to Compatibility.",
      "Adaptability and installability belong to Portability."
    ],
    "examTrap": "Learnability and user error protection belong to USABILITY, not Maintainability.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Usability Elements",
      "page": 55
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Usability Elements",
    "sourcePage": 55,
    "page": 55
  },
  {
    "id": "itpm-u2-s4-mcq-015",
    "topic": "Product Quality: Reliability Elements",
    "difficulty": "medium",
    "question": "In ISO/IEC 25010, which four elements characterize 'Reliability'?",
    "options": {
      "A": "Maturity, availability, fault tolerance, recoverability",
      "B": "Confidentiality, integrity, non-repudiation, authenticity",
      "C": "Modularity, reusability, testability, modifiability",
      "D": "Capacity, time behavior, throughput, latency"
    },
    "correctAnswer": "A",
    "explanation": "Reliability comprises: maturity (normal operation reliability), availability (accessible when required), fault tolerance (operates despite faults), and recoverability (restores data after interruptions).",
    "whyOthersAreWrong": [
      "Confidentiality and integrity belong to Security.",
      "Modularity and testability belong to Maintainability.",
      "Capacity and time behavior belong to Performance Efficiency."
    ],
    "examTrap": "Availability is classified under RELIABILITY in ISO 25010 (not performance).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Reliability Elements",
      "page": 56
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Reliability Elements",
    "sourcePage": 56,
    "page": 56
  },
  {
    "id": "itpm-u2-s4-mcq-016",
    "topic": "Product Quality: Security Elements",
    "difficulty": "medium",
    "question": "Which list reflects the elements of 'Security' in ISO/IEC 25010?",
    "options": {
      "A": "Confidentiality, integrity, non-repudiation, accountability, authenticity",
      "B": "Maturity, availability, recoverability, tolerance",
      "C": "Learnability, operability, aesthetics, accessibility",
      "D": "Installability, replaceability, adaptability"
    },
    "correctAnswer": "A",
    "explanation": "Security protects information via 5 elements: confidentiality, integrity, non-repudiation (events cannot be denied), accountability (actions uniquely traced), and authenticity (identity proven).",
    "whyOthersAreWrong": [
      "Maturity and recoverability belong to Reliability.",
      "Learnability and accessibility belong to Usability.",
      "Installability and adaptability belong to Portability."
    ],
    "examTrap": "Non-repudiation and Accountability are explicit sub-characteristics of SECURITY.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Security Elements",
      "page": 56
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Security Elements",
    "sourcePage": 56,
    "page": 56
  },
  {
    "id": "itpm-u2-s4-mcq-017",
    "topic": "Product Quality: Compatibility",
    "difficulty": "medium",
    "question": "What are the two sub-characteristics of 'Compatibility' in ISO/IEC 25010?",
    "options": {
      "A": "Coexistence and Interoperability",
      "B": "Modularity and Reusability",
      "C": "Maturity and Availability",
      "D": "Learnability and Operability"
    },
    "correctAnswer": "A",
    "explanation": "Compatibility represents the ability to share environments and exchange information: Coexistence (sharing common environment without mutual harm) and Interoperability (exchanging and using data).",
    "whyOthersAreWrong": [
      "Modularity and reusability belong to Maintainability.",
      "Maturity and availability belong to Reliability.",
      "Learnability and operability belong to Usability."
    ],
    "examTrap": "Compatibility = Coexistence (live together) + Interoperability (exchange data).",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Compatibility Elements",
      "page": 56
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Compatibility Elements",
    "sourcePage": 56,
    "page": 56
  },
  {
    "id": "itpm-u2-s4-mcq-018",
    "topic": "Product Quality: Maintainability",
    "difficulty": "hard",
    "question": "Which set of sub-characteristics belongs to 'Maintainability' in ISO/IEC 25010?",
    "options": {
      "A": "Modularity, reusability, analyzability, modifiability, testability",
      "B": "Effectiveness, efficiency, satisfaction, context coverage",
      "C": "Non-repudiation, accountability, authenticity, confidentiality",
      "D": "Adaptability, installability, coexistability"
    },
    "correctAnswer": "A",
    "explanation": "Maintainability relates to the ease of modifying and diagnosing software: modularity, reusability, analyzability, modifiability, and testability.",
    "whyOthersAreWrong": [
      "Effectiveness and satisfaction belong to Quality-in-Use.",
      "Non-repudiation and accountability belong to Security.",
      "Adaptability and installability belong to Portability."
    ],
    "examTrap": "Testability and Modularity are sub-characteristics of MAINTAINABILITY.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Maintainability Elements",
      "page": 57
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Maintainability Elements",
    "sourcePage": 57,
    "page": 57
  },
  {
    "id": "itpm-u2-s4-mcq-019",
    "topic": "Quality Gate Definition",
    "difficulty": "medium",
    "question": "What is a 'Quality Gate' according to Kneuper (2018) as cited in the course book?",
    "options": {
      "A": "A formal intermediate checkpoint at a stage boundary verifying that all expected deliverables are available in adequate quality before work proceeds",
      "B": "A physical turnstile at the entrance of the software development building",
      "C": "A firewall software filter blocking outgoing email attachments",
      "D": "A financial penalty clause invoked when an employee resigns"
    },
    "correctAnswer": "A",
    "explanation": "A quality gate consists of defined deliverable results required at a project stage boundary and a formal review checking adequate quality before approving advancement to the next stage.",
    "whyOthersAreWrong": [
      "Quality gates are governance checkpoints, not physical building turnstiles.",
      "Firewalls are network security appliances, not project management quality gates.",
      "Employee resignation penalties are employment law matters, not quality gates."
    ],
    "examTrap": "Quality Gate = Deliverable Definition + Formal Review at Stage End. More than a simple calendar milestone!",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality Gate Definition",
      "page": 58
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Quality Gate Definition",
    "sourcePage": 58,
    "page": 58
  },
  {
    "id": "itpm-u2-s4-mcq-020",
    "topic": "Quality Gate vs Milestone",
    "difficulty": "medium",
    "question": "How does a Quality Gate differ from a standard Project Milestone?",
    "options": {
      "A": "A milestone is merely a significant point in time; a quality gate involves a formal evaluation and go/no-go quality check of deliverables",
      "B": "A milestone always costs money, while a quality gate is free",
      "C": "Milestones are defined by customers, while quality gates are defined by governments",
      "D": "There is no difference; they are exact synonyms"
    },
    "correctAnswer": "A",
    "explanation": "The course book and revision notes emphasize that a milestone does not itself perform quality checks\u2014it is a temporal marker. A quality gate includes an active verification of deliverable quality and a gate decision.",
    "whyOthersAreWrong": [
      "Milestones have zero direct duration and cost; quality reviews require evaluation effort.",
      "Both milestones and quality gates are defined internally by the project team and governance boards.",
      "They are distinct concepts; conflating them is a common exam pitfall."
    ],
    "examTrap": "Milestone = Moment in time. Quality Gate = Formal review and gate decision verifying quality.",
    "source": {
      "type": "revision-pack",
      "unit": 2,
      "section": "2.4",
      "topic": "Quality Gate vs Milestone",
      "page": 16
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Quality Gate vs Milestone",
    "sourcePage": 16,
    "page": 16
  },
  {
    "id": "itpm-u2-s4-mcq-021",
    "topic": "Perception and Challenge of Standards",
    "difficulty": "medium",
    "question": "What common organizational challenge or perception regarding quality standards is highlighted in the course book?",
    "options": {
      "A": "They are often perceived as costly, documentation-intensive, and bureaucratic, making it difficult for organizations to justify their application",
      "B": "They are universally free and require zero effort to adopt",
      "C": "They automatically eliminate all project managers from the payroll",
      "D": "They guarantee that projects complete at zero financial cost"
    },
    "correctAnswer": "A",
    "explanation": "Despite significant benefits in communication and best practices, standards are often viewed as expensive, bureaucratic, and paperwork-heavy, leading organizations to question their return on investment.",
    "whyOthersAreWrong": [
      "Implementing standards requires substantial training, documentation, and auditing investment.",
      "Standards provide frameworks for project managers; they do not eliminate them.",
      "Standards do not eliminate project costs."
    ],
    "examTrap": "Standards challenge: Perceived as costly, bureaucratic, and documentation-heavy.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Standards Challenges",
      "page": 57
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Standards Challenges",
    "sourcePage": 57,
    "page": 57
  },
  {
    "id": "itpm-u2-s4-mcq-022",
    "topic": "Multi-Domain Framework for IT Project Success",
    "difficulty": "hard",
    "question": "According to Bannerman & Thorogood (2012) as cited in the course book, which five independent domains comprise the multi-domain framework for evaluating IT project success?",
    "options": {
      "A": "Process, Project Management, Product, Business, and Strategy",
      "B": "Initiation, Planning, Execution, Monitoring, and Termination",
      "C": "Schedule, Cost, Scope, Quality, and Risk",
      "D": "Hardware, Software, Network, Database, and User Interface"
    },
    "correctAnswer": "A",
    "explanation": "The course book (p. 58) highlights Bannerman & Thorogood's multi-domain framework across five domains: Process, Project Management, Product, Business, and Strategy.",
    "whyOthersAreWrong": [
      "Initiation, Planning, etc., are the five project lifecycle phases.",
      "Schedule, Cost, Scope, etc., are project constraint and knowledge areas.",
      "Hardware, software, network, etc., are IT technical infrastructure layers."
    ],
    "examTrap": "Bannerman & Thorogood (2012) Multi-domain success framework: Process, Project Management, Product, Business, Strategy.",
    "source": {
      "type": "course-book",
      "unit": 2,
      "section": "2.4",
      "topic": "Multi-Domain Success Framework",
      "page": 58
    },
    "subjectId": "it-project-management",
    "unit": 2,
    "unitId": 2,
    "section": "2.4",
    "sourceUnit": 2,
    "sourceSection": "2.4",
    "sourceTopic": "Multi-Domain Success Framework",
    "sourcePage": 58,
    "page": 58
  }
];
