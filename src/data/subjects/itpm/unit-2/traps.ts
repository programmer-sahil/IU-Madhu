import { ExamTrapItem } from '../../../../types';

export const unit2ExamTraps: ExamTrapItem[] = [
  {
    "id": "itpm-u2-trap-001",
    "unit": 2,
    "topic": "WBS vs Project Charter",
    "commonStudentMistake": "Believing that the WBS replaces the Project Charter.",
    "correctAcademicTruth": "The Project Charter authorizes the project and commits resources; the WBS comes AFTER authorization to organize the work.",
    "whyExaminerDeductsMarks": "A WBS decomposes scope during planning; it cannot self-authorize a project or commit enterprise financial resources.",
    "howToRemember": "Initiation = Charter. Planning = WBS."
  },
  {
    "id": "itpm-u2-trap-002",
    "unit": 2,
    "topic": "Deliverable vs Milestone Duration",
    "commonStudentMistake": "Assuming that milestones are tasks that have duration (e.g. 2 days to pass a milestone).",
    "correctAcademicTruth": "Milestones strictly have ZERO duration ($D = 0$). Deliverables take time to build, but the milestone is purely the reference point in time.",
    "whyExaminerDeductsMarks": "Milestones are pure calendar markers with zero duration (D = 0); attributing duration confuses an event with an activity.",
    "howToRemember": "If an item has duration > 0, it is an activity or work package, NOT a milestone."
  },
  {
    "id": "itpm-u2-trap-003",
    "unit": 2,
    "topic": "Milestones as Quality Checks",
    "commonStudentMistake": "Assuming that a project milestone performs quality assurance checks on deliverables.",
    "correctAcademicTruth": "A milestone is merely a date/point in time and performs NO checks itself. A Quality Gate or Acceptance Review performs quality checks.",
    "whyExaminerDeductsMarks": "Milestones mark time reference points; only formal Quality Gates or Acceptance Reviews perform quality verification.",
    "howToRemember": "Milestone = calendar marker. Quality Gate = active formal inspection."
  },
  {
    "id": "itpm-u2-trap-004",
    "unit": 2,
    "topic": "WBS Level 1 Representation",
    "commonStudentMistake": "Thinking Level 1 of a WBS represents individual team tasks or code files.",
    "correctAcademicTruth": "Level 1 represents the total project name or final deliverable (100% of the project). Elementary tasks exist at the lowest level (Level 4).",
    "whyExaminerDeductsMarks": "Violates official course book criteria for WBS Level 1 Representation; examiner deducts points for confusing core concepts.",
    "howToRemember": "Estimates roll bottom-up from Level 4 tasks upward to Level 1."
  },
  {
    "id": "itpm-u2-trap-005",
    "unit": 2,
    "topic": "The 100% Rule Direction",
    "commonStudentMistake": "Assuming the 100% rule means 100% of the budget is spent during planning.",
    "correctAcademicTruth": "The 100% Rule is a scope decomposition principle: the subordinate elements of any WBS node must represent 100% of the work of that parent node.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for The 100% Rule Direction; examiner deducts points for confusing core concepts.",
    "howToRemember": "100% rule governs work scope inclusion across hierarchy levels, not budget burn."
  },
  {
    "id": "itpm-u2-trap-006",
    "unit": 2,
    "topic": "Kano Basic Needs Reaction",
    "commonStudentMistake": "Believing that fulfilling basic requirements makes customers extremely happy or delighted.",
    "correctAcademicTruth": "Basic requirements are taken for granted. If fulfilled, customers are merely neutral; if missing, customers are intensely dissatisfied.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Kano Basic Needs Reaction; examiner deducts points for confusing core concepts.",
    "howToRemember": "Presence of Basic = Neutral. Absence of Basic = Disaster. Delighters cause delight!"
  },
  {
    "id": "itpm-u2-trap-007",
    "unit": 2,
    "topic": "Kano Delighters Absence",
    "commonStudentMistake": "Believing that omitting a Delighter causes customer complaints and dissatisfaction.",
    "correctAcademicTruth": "Because customers do NOT anticipate delighters, omitting them causes ZERO dissatisfaction.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Kano Delighters Absence; examiner deducts points for confusing core concepts.",
    "howToRemember": "Absence of Delighters = No complaints. Presence of Delighters = High delight."
  },
  {
    "id": "itpm-u2-trap-008",
    "unit": 2,
    "topic": "MoSCoW Origin Attribution",
    "commonStudentMistake": "Attributing MoSCoW to Noriaki Kano, Henry Gantt, or PMI.",
    "correctAcademicTruth": "MoSCoW was created by Dai Clegg of Oracle UK in 1994 specifically for software development requirements.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for MoSCoW Origin Attribution; examiner deducts points for confusing core concepts.",
    "howToRemember": "Dai Clegg (Oracle UK, 1994) = MoSCoW. Noriaki Kano = Kano Model."
  },
  {
    "id": "itpm-u2-trap-009",
    "unit": 2,
    "topic": "MoSCoW Letters Function",
    "commonStudentMistake": "Treating the 'o' letters in MoSCoW as active categories (like 'Optional' or 'Operational').",
    "correctAcademicTruth": "The 'o' letters are lowercase and purely mnemonic helpers for pronunciation. The active categories are M, S, C, W.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for MoSCoW Letters Function; examiner deducts points for confusing core concepts.",
    "howToRemember": "Must, Should, Could, Won't (this time)."
  },
  {
    "id": "itpm-u2-trap-010",
    "unit": 2,
    "topic": "MoSCoW Scope Sacrifices",
    "commonStudentMistake": "Dropping Must-haves when project schedules slip to preserve high-tech Delighters.",
    "correctAcademicTruth": "Must-haves are non-negotiable minimums; if one is omitted, the release fails. Could-haves are sacrificed first, followed by Should-haves.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for MoSCoW Scope Sacrifices; examiner deducts points for confusing core concepts.",
    "howToRemember": "Sacrifice order: Could-have first -> Should-have second. NEVER drop Must-haves."
  },
  {
    "id": "itpm-u2-trap-011",
    "unit": 2,
    "topic": "Urgent vs Important Reporting Example",
    "commonStudentMistake": "Classifying external progress reporting as High Importance and High Urgency.",
    "correctAcademicTruth": "The course book explicitly classifies progress reporting to external stakeholders as High Urgency (due immediately) but Low Importance (does not alter deliverable functionality).",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Urgent vs Important Reporting Example; examiner deducts points for confusing core concepts.",
    "howToRemember": "High Urgency + Low Importance = External progress reporting."
  },
  {
    "id": "itpm-u2-trap-012",
    "unit": 2,
    "topic": "Precedence Frequency",
    "commonStudentMistake": "Believing Start-to-Finish (SF) is a standard common dependency in software development.",
    "correctAcademicTruth": "SF is the RAREST dependency in project scheduling. Finish-to-Start (FS) is the default and most frequent.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Precedence Frequency; examiner deducts points for confusing core concepts.",
    "howToRemember": "FS = Most common. SF = Rarest (e.g. legacy system retirement)."
  },
  {
    "id": "itpm-u2-trap-013",
    "unit": 2,
    "topic": "Forward Pass Merge Rule",
    "commonStudentMistake": "Taking the MINIMUM EFT when two predecessors merge during the forward pass.",
    "correctAcademicTruth": "You MUST take the MAXIMUM EFT. A successor cannot start until ALL predecessors are finished.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Forward Pass Merge Rule; examiner deducts points for confusing core concepts.",
    "howToRemember": "Forward pass merge = MAXIMUM. Backward pass burst = MINIMUM."
  },
  {
    "id": "itpm-u2-trap-014",
    "unit": 2,
    "topic": "Backward Pass Burst Rule",
    "commonStudentMistake": "Taking the MAXIMUM LST when diverging to multiple successors during the backward pass.",
    "correctAcademicTruth": "You MUST take the MINIMUM LST. The predecessor must finish in time to accommodate the most urgent successor.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Backward Pass Burst Rule; examiner deducts points for confusing core concepts.",
    "howToRemember": "Backward pass burst = MINIMUM LST."
  },
  {
    "id": "itpm-u2-trap-015",
    "unit": 2,
    "topic": "Slack on Critical Path",
    "commonStudentMistake": "Thinking critical path tasks have positive slack to accommodate emergencies.",
    "correctAcademicTruth": "Critical path activities strictly have ZERO slack ($LST = EST$ and $LFT = EFT$). Any delay directly pushes project delivery.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Slack on Critical Path; examiner deducts points for confusing core concepts.",
    "howToRemember": "Critical path = Zero slack. Non-zero slack = Non-critical path."
  },
  {
    "id": "itpm-u2-trap-016",
    "unit": 2,
    "topic": "Gantt Chart Resource Blindspot",
    "commonStudentMistake": "Assuming Gantt charts automatically reveal project budget consumption and team headcount.",
    "correctAcademicTruth": "Gantt charts do NOT show resource quantities or financial costs (e.g. 20 people vs 10 people looks identical on an 8-week bar).",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Gantt Chart Resource Blindspot; examiner deducts points for confusing core concepts.",
    "howToRemember": "Major limitation: Gantt shows calendar schedule, but NOT resources or costs."
  },
  {
    "id": "itpm-u2-trap-017",
    "unit": 2,
    "topic": "DoD vs Final Customer Acceptance",
    "commonStudentMistake": "Treating Definition of Done as equivalent to Final Customer Acceptance.",
    "correctAcademicTruth": "DoD is an INTERNAL team quality assurance mechanism; Customer Acceptance is EXTERNAL formal sign-off by the client/sponsor.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for DoD vs Final Customer Acceptance; examiner deducts points for confusing core concepts.",
    "howToRemember": "DoD = Team QA filter. Acceptance = Stakeholder contractual approval."
  },
  {
    "id": "itpm-u2-trap-018",
    "unit": 2,
    "topic": "ISO/IEC 25010 Characteristic Counts",
    "commonStudentMistake": "Confusing the 5 Quality-in-Use characteristics with the 8 Product Quality characteristics.",
    "correctAcademicTruth": "Quality-in-Use has 5 characteristics (S-E-F-E-C). Product Quality has 8 characteristics (F-P-U-R-S-C-P-M).",
    "whyExaminerDeductsMarks": "Violates official course book criteria for ISO/IEC 25010 Characteristic Counts; examiner deducts points for confusing core concepts.",
    "howToRemember": "Quality-in-Use = 5. Product Quality = 8."
  },
  {
    "id": "itpm-u2-trap-019",
    "unit": 2,
    "topic": "Quality Gate vs Milestone Governance",
    "commonStudentMistake": "Thinking a Quality Gate is just an informal synonym for a milestone.",
    "correctAcademicTruth": "A Quality Gate is a formal governance checkpoint with defined deliverables and active reviews issuing Go/No-Go decisions.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Quality Gate vs Milestone Governance; examiner deducts points for confusing core concepts.",
    "howToRemember": "Quality Gate = Deliverables + Formal Review (Kneuper, 2018)."
  },
  {
    "id": "itpm-u2-trap-020",
    "unit": 2,
    "topic": "Planning End Myth",
    "commonStudentMistake": "Believing that approving the project baselines means planning is permanently complete.",
    "correctAcademicTruth": "Planning continues iteratively throughout project execution as monitoring reveals variances requiring baseline revisions.",
    "whyExaminerDeductsMarks": "Violates official course book criteria for Planning End Myth; examiner deducts points for confusing core concepts.",
    "howToRemember": "Baseline approval moves the project to execution, but planning is living and iterative."
  }
];
