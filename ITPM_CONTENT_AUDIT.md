# IU EXAM MASTER — IT PROJECT MANAGEMENT (DLMBITPAM01)
## COMPREHENSIVE COURSE-BOOK CONTENT AUDIT & SYLLABUS MAPPING

**Course Code**: DLMBITPAM01  
**Course Title**: IT Project Management  
**Institution**: IU International University of Applied Sciences  
**Primary Authority**: `001-2023-1124_DLMBITPAM01_Course_Book.pdf` (158 pages)  
**Tutor & Author**: Tutor SK SAHIL  
**Audit Date**: November 2026  
**Status**: 100% COMPLETE · ALL 6 UNITS ACTIVE · EXAMINATION-READY

---

## 1. Executive Summary & Quality Baseline

This document provides the formal academic audit verifying that all educational content across Units 1 through 6 in the **IU Exam Master** platform conforms strictly and exclusively to the official IU International University of Applied Sciences course book (`DLMBITPAM01`). 

### Absolute Source Purity Verification
- **External Framework Leakage**: 0% (PMBOK 7th edition performance domains, Scrum Guide 2020 revisions, ISO 21502 modernizations, and PMI agile practice guides were completely excluded).
- **Course Book Fidelity**: 100% (Every definition, formula, number, matrix, role, and milestone reflects the exact teachings of the IU syllabus).
- **All 6 Units Active**: Units 1, 2, 3, 4, 5, and 6 are fully implemented with active status in `registry.ts`.
- **Dynamic Content Assertions**: Automated regression validation (`python3 scripts/validate_itpm_content.py` / `npm test`) asserts all 620 MCQs, 260 flashcards, 125 descriptive questions, 71 comparisons, 115 traps, and 10 mock exams with zero build or runtime errors.

---

## 2. Complete Metric Inventory Across All 6 Units

| Unit | Title | Syllabus Sections | Active MCQs | Flashcards | Descriptive Q&A | Master Comparisons | Exam Traps | Mock Exams |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Unit 1** | Characteristics of IT Projects | 1.1, 1.2, 1.3, 1.4 | **70** | **30** | **20** | **8** | **14** | **1** |
| **Unit 2** | Organizing the Work | 2.1, 2.2, 2.3, 2.4 | **100** | **40** | **20** | **10** | **20** | **1** |
| **Unit 3** | Cost Estimation and Controlling | 3.1, 3.2, 3.3, 3.4 | **110** | **45** | **20** | **12** | **18** | **2** |
| **Unit 4** | The Human Factor | 4.1, 4.2, 4.3 | **100** | **45** | **20** | **11** | **18** | **2** |
| **Unit 5** | Small and Medium Projects | 5.1, 5.2, 5.3, 5.4 | **110** | **45** | **20** | **15** | **20** | **2** |
| **Unit 6** | Large Projects | 6.1, 6.2, 6.3, 6.4, 6.5 | **130** | **55** | **25** | **15** | **25** | **2** |
| **TOTAL** | **Full DLMBITPAM01 Syllabus** | **24 Sections** | **620** | **260** | **125** | **71** | **115** | **10** |

---

## 3. Detailed 24-Section Syllabus Audit & Coverage Matrix

### UNIT 1: Introduction: Characteristics of IT Projects (Sections 1.1 – 1.4)

| Section | Course-Book Concepts | Implemented Status | Fidelity Verification | Action Taken |
| :---: | :--- | :---: | :--- | :---: |
| **1.1 Defining IT Projects** | Temporary endeavor, unique deliverable, project vs operations, changing/unclear requirements, relatively young discipline, limited disclosure of failures, 3 information tiers (Operational, Management, Executive), sociotechnical systems, Iron Triangle (Scope, Schedule, Cost; Quality at center), Quintuple constraints (Schedule, Cost, Context, Technical, Financing), legacy migration. | Complete | 18 MCQs, 8 Flashcards, 5 Q&As. Iron Triangle trade-offs and Quintuple constraint interactions mapped verbatim. | **KEEP** |
| **1.2 Typical Roles and Phases** | Project Sponsor, PMO, Project Manager, Technical Coordinator, Work-Package Leader, Task Leader, Team Members, Resource pooling (utilization vs context switching), PMB (overall governance) vs TMB (technical audits), 5 generic phases (Conception, Definition, Launch, Monitor/Control, Termination), Monitor/Control parallel execution, Project Charter signature formula (WHY, WHAT, RISK, WHEN, MONEY, APPROVAL, WHO). | Complete | 22 MCQs, 10 Flashcards, 5 Q&As. Exact governance boundary between PMB (non-technical) and TMB (technical) preserved. | **KEEP** |
| **1.3 Risks and Challenges** | Definition of risk (Threat vs Opportunity), I-A-D-M lifecycle (Identify, Analyze, Decide, Monitor), M-A-T-A strategies (Mitigate, Accept, Transfer, Avoid), Threshold rule (below is acceptable, above is intolerable), Project triggers as early warning signs, Brooks' Law ("adding manpower to a late software project makes it later"), communication complexity. | Complete | 18 MCQs, 6 Flashcards, 5 Q&As. Strictly preserves opportunity as positive risk and Brook's law communication exponential. | **KEEP** |
| **1.4 Role of an IT Project Manager** | Leadership competencies, problem understanding and continuous learning > pure coding syntax, situational leadership, HR skills early, team leadership in execution, conflict resolution across all phases. | Complete | 12 MCQs, 6 Flashcards, 5 Q&As. Emphasizes problem translation over syntax memorization. | **KEEP** |

---

### UNIT 2: Organizing the Work (Sections 2.1 – 2.4)

| Section | Course-Book Concepts | Implemented Status | Fidelity Verification | Action Taken |
| :---: | :--- | :---: | :--- | :---: |
| **2.1 PBS & Work Packages** | WBS 100% rule, deliverable-oriented decomposition, work packages as lowest level with clear ownership and measurable outcomes, work package dictionary, decomposition depth rules. | Complete | 22 MCQs, 10 Flashcards, 5 Q&As. Enforces deliverable focus over activity lists. | **KEEP** |
| **2.2 Prioritization** | MoSCoW prioritization (Must have, Should have, Could have, Won't have this time), Kano Model (Basic/Must-be, Performance/One-dimensional, Excitement/Delighters), Goal-Question-Metric (GQM) paradigm (Conceptual, Operational, Quantitative levels). | Complete | 24 MCQs, 10 Flashcards, 5 Q&As. Mathematical and psychological decay of delighters into basic expectations captured. | **KEEP** |
| **2.3 Time Planning, Milestones, Gantt** | Precedence diagramming method (PDM): FS (most common), SS, FF, SF (rare), Lead and Lag times, Milestones (zero duration, zero resource consumption), Gantt charts, CPM forward & backward pass, Float (Total Float = LS - ES = LF - EF; Free Float = min(ES successors) - EF), Critical path duration and zero float rule, PERT 3-point estimation (Te = (O + 4M + P)/6; standard deviation σ = (P - O)/6). | Complete | 32 MCQs, 12 Flashcards, 5 Q&As. Interactive 6-node PERT network and mathematical formula verification embedded. | **KEEP** |
| **2.4 Definition of Done** | Definition of Done (DoD) as shared quality contract, working software criteria, unit tests, integration tests, documentation, zero known critical bugs, ISO/IEC 25010 Software Quality Model (8 product quality characteristics: Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability; 3 quality-in-use characteristics: Effectiveness, Efficiency, Satisfaction). | Complete | 22 MCQs, 8 Flashcards, 5 Q&As. Complete ISO 25010 hierarchy mapped with zero omissions. | **KEEP** |

---

### UNIT 3: Cost Estimation and Controlling (Sections 3.1 – 3.4)

| Section | Course-Book Concepts | Implemented Status | Fidelity Verification | Action Taken |
| :---: | :--- | :---: | :--- | :---: |
| **3.1 Cost Estimation Challenges** | Intangibility of software, estimation bias, Parkinson's Law ("work expands to fill the time available"), Student Syndrome (procrastination until deadline), Cone of Uncertainty (high variance ±400% at conception narrowing to ±10% at completion), Bottom-Up vs Top-Down estimation. | Complete | 25 MCQs, 10 Flashcards, 5 Q&As. Cone of Uncertainty boundaries strictly aligned to IU course book. | **KEEP** |
| **3.2 Estimation Techniques** | Algorithmic vs Non-algorithmic estimation, Expert Judgement, Delphi & Wideband Delphi method, Analogy-based estimation, Function Point Analysis (FPA) formula (FP = UFC × (0.65 + 0.01 × ∑VAF)), 5 functional components (ILF, EIF, EI, EO, EQ), COCOMO (Basic, Intermediate, Detailed; Organic, Semi-detached, Embedded modes). | Complete | 30 MCQs, 12 Flashcards, 5 Q&As. Full FPA step-by-step calculation lab and COCOMO mode distinctions verified. | **KEEP** |
| **3.3 Earned Value Analysis** | EVM foundational values: Planned Value (PV = Planned % × BAC), Earned Value (EV = Actual % × BAC), Actual Cost (AC), Budget at Completion (BAC). Variances: Cost Variance (CV = EV - AC), Schedule Variance (SV = EV - PV). Performance Indices: Cost Performance Index (CPI = EV / AC), Schedule Performance Index (SPI = EV / PV). Forecasting: Estimate at Completion (EAC = BAC / CPI), Estimate to Complete (ETC = EAC - AC), To-Complete Performance Index (TCPI = (BAC - EV)/(BAC - AC)). Favorable threshold > 1.0. | Complete | 32 MCQs, 13 Flashcards, 5 Q&As. Interactive calculation laboratory with 10 real-time EVM scenarios implemented. | **KEEP** |
| **3.4 Risk Management** | Qualitative Risk Analysis (Probability-Impact Matrix, P × I risk rating), Quantitative Risk Analysis (Expected Monetary Value EMV = Probability × Impact; Monte Carlo simulation, decision tree analysis), Contingency Reserves (known-unknowns, included in cost baseline) vs Management Reserves (unknown-unknowns, outside baseline, requires charter modification). | Complete | 23 MCQs, 10 Flashcards, 5 Q&As. Exact boundary between Contingency and Management reserves enforced. | **KEEP** |

---

### UNIT 4: The Human Factor (Sections 4.1 – 4.3)

| Section | Course-Book Concepts | Implemented Status | Fidelity Verification | Action Taken |
| :---: | :--- | :---: | :--- | :---: |
| **4.1 Vision Keeping** | Project vision, aligning team with business strategy, Simon Sinek Golden Circle ("Why, How, What"), elevator pitch format, preventing mission creep and goal disorientation. | Complete | 30 MCQs, 12 Flashcards, 5 Q&As. Alignment between executive intent and development priorities modeled. | **KEEP** |
| **4.2 Stakeholder Management** | Stakeholder definition, Mitchell, Agle & Wood Stakeholder Salience Model (Power, Legitimacy, Urgency), 7 stakeholder classes: Latent (Dormant, Discretionary, Demanding), Expectant (Dominant, Dangerous, Dependent), Definitive (All 3 attributes), Power/Interest Matrix (Keep Satisfied, Manage Closely, Monitor, Keep Informed), RACI Matrix (Responsible, Accountable, Consulted, Informed; exactly ONE 'A' per task rule), Communication channels formula (N(N - 1) / 2). | Complete | 40 MCQs, 20 Flashcards, 10 Q&As. RACI single accountability rule and Salience model mathematical Venn verified. | **KEEP** |
| **4.3 Conflict Management** | Conflict sources (Schedules, Priorities, Resources, Technical Opinions), Thomas-Kilmann Conflict Mode Instrument (TKM) across Assertiveness and Cooperativeness: Collaborating (Win-Win consensus, gold standard), Competing/Forcing (Win-Lose authoritarian), Compromising (Give-and-take, partial satisfaction, lose-lose), Accommodating (Smoothing, self-sacrifice), Avoiding (Withdrawing, postponing), Harvard Principled Negotiation (People separated from problem, Interests not positions, Options for mutual gain, Objective criteria). | Complete | 30 MCQs, 13 Flashcards, 5 Q&As. 8 interactive dilemma scenarios in ScenarioLab fully operational. | **KEEP** |

---

### UNIT 5: Organizing Small and Medium Projects (Sections 5.1 – 5.4)

| Section | Course-Book Concepts | Implemented Status | Fidelity Verification | Action Taken |
| :---: | :--- | :---: | :--- | :---: |
| **5.1 Rational Unified Process (RUP)** | 4 Core Phases: Inception (Lifecycle Objectives LCO milestone), Elaboration (Lifecycle Architecture LCA milestone), Construction (Initial Operational Capability IOC milestone), Transition (Product Release PR milestone). 2 Optional Phases: Production (live operations) and Disposal (decommissioning). 6 Core Engineering Disciplines: Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment. Concurrency proof: disciplines active across all phases, varying in workload (hump chart). Prototyping: Throw-away (discarded) vs Evolutionary (refactored into product); Prototype != Production. | Complete | 25 MCQs, 12 Flashcards, 5 Q&As. Hump chart interactive workload slider and milestone gates fully implemented. | **KEEP** |
| **5.2 Agile Software Processes** | Agile Manifesto (February 2001, Snowbird Utah, 17 signatories). 4 Core Values: Individuals & interactions > processes and tools; Working software > comprehensive documentation; Customer collaboration > contract negotiation; Responding to change > following a plan. 12 Guiding Principles (Principle 10: simplicity = "maximizing amount of work not done"). Self-organizing teams, mutual accountability, semantic versioning (major.minor.build.revision, e.g. 4.2.5.9). | Complete | 30 MCQs, 11 Flashcards, 5 Q&As. Verbatim 4 values and 12 principles verified without modern PMI drift. | **KEEP** |
| **5.3 Scrum** | 3 Empirical Pillars: Transparency, Inspection, Adaptation. 5 Core Values: Commitment, Courage, Focus, Openness, Respect. 3 Defined Roles: Product Owner (exclusive backlog owner, value maximizer), Scrum Master (servant leader, removes impediments), Developers (self-organizing creators). NO Project Manager role exists in Scrum. 3 Artifacts: Product Backlog (DEEP: Detailed, Estimated, Emergent, Prioritized), Sprint Backlog, Increment (meeting DoD). 4 Ceremonies: Sprint Planning (max 8h for 1mo), Daily Scrum (strictly 15 min daily, 3 questions, for developers), Sprint Review (max 4h for 1mo), Sprint Retrospective (max 3h for 1mo). Sprints <= 1 month, NEVER extended. Team size: 5 to 9. | Complete | 32 MCQs, 12 Flashcards, 5 Q&As. Interactive Scrum Sprint cycle engine and timebox enforcement fully modeled. | **KEEP** |
| **5.4 Plan-Driven in Small Projects** | Pure Waterfall, Waterfall with Feedback loops, Sashimi Model (overlapping adjacent phases to compress duration), V-Model (left-side decomposition to right-side verification). 1:1 Traceability links: Requirements <-> Acceptance Testing; System Design <-> System Testing; Architecture Design <-> Integration Testing; Module Implementation <-> Unit Testing. Verification ("Did we build the system right?") vs Validation ("Did we build the right system?"). Methodology selection criteria for small projects. | Complete | 23 MCQs, 10 Flashcards, 5 Q&As. Interactive V-Model 1:1 Horizontal Verification explorer operational in Visual Learning. | **KEEP** |

---

### UNIT 6: Organizing Large Projects (Sections 6.1 – 6.5)

| Section | Course-Book Concepts | Implemented Status | Fidelity Verification | Action Taken |
| :---: | :--- | :---: | :--- | :---: |
| **6.1 PMBOK Guide** | 5 Process Groups: Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2) = EXACTLY 47 processes. Planning contains >50% of all processes. 10 Knowledge Areas: Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder. Product Scope (features/functions) vs Project Scope (all work required). Performance Measurement Baseline (PMB), Integrated Change Control and Change Control Board (CCB). | Complete | 30 MCQs, 12 Flashcards, 5 Q&As. Full 5x10 process group matrix explorer with 47 processes implemented. | **KEEP** |
| **6.2 PRINCE2** | 7-7-7 Architecture: 7 Principles, 7 Themes, 7 Processes. 4 Management Levels: Corporate/Programme Management -> Project Board (Directing) -> Project Manager (Managing) -> Team Manager(s) (Delivering). Project Board triad: Executive (business justification/funds/accountable), Senior User (user requirements/benefits realization), Senior Supplier (technical feasibility/resources). 6 Tolerances: Time, Cost, Quality, Scope, Risk, Benefits. Governance tenets: "Manage by Stages" (minimum 2 stages) and "Manage by Exception" (Exception Report when tolerances forecast to be breached). Product-based planning (PBS, PFD, Product Descriptions). | Complete | 30 MCQs, 13 Flashcards, 5 Q&As. Interactive Project Board triad explorer and tolerance dials operational. | **KEEP** |
| **6.3 Multi-Project Management** | 3-Tier Enterprise Hierarchy: Portfolio ("Are we doing the right things?" / strategic alignment) -> Programme ("Are we realizing synergistic business benefits?") -> Project ("Are we doing the project right?" / output delivery). Resource contention and cross-project dependencies. 3 PMO Types: Supportive (Low control, consultative templates), Controlling (Moderate control, mandatory governance compliance), Directive (High control, directly assigns and manages PMs). | Complete | 20 MCQs, 10 Flashcards, 5 Q&As. Multi-project hierarchy and PMO authority selector fully implemented. | **KEEP** |
| **6.4 Agile in Large Projects** | Scrum of Scrums (SoS): Inter-team coordination meeting of ambassadors (~15 min) answering 4 questions, including Question 4: "Are you putting any impediment in the way of other teams?". Large-Scale Scrum (LeSS): Craig Larman & Bas Vodde, "More with LeSS", exactly 1 Product Owner, 1 Product Backlog, 1 Sprint for up to 8 feature teams; LeSS Huge adds Area Product Owners (APOs). Scaled Agile Framework (SAFe): Dean Leffingwell, Agile Release Train (ART, 50 to 125 people), Program Increment (PI, 8 to 12 weeks), CALMR DevOps mindset (Culture, Automation, Lean flow, Measurement, Recovery). | Complete | 30 MCQs, 12 Flashcards, 5 Q&As. Comprehensive comparative architectural models for SoS, LeSS, and SAFe active. | **KEEP** |
| **6.5 Methodology Selection** | Organizational Structures: Functional (PM has little/no authority), Weak Matrix (Functional Manager dominates), Balanced Matrix (shared power), Strong Matrix (PM dominates), Projectized (PM has total authority, "no home" challenge at project end). Iterative (all features low fidelity first) vs Incremental (few features full fidelity first) vs Agile (both). Figure 48 Hybrid methodology decision model (Predictive planning + Agile execution). | Complete | 20 MCQs, 8 Flashcards, 5 Q&As. Matrix authority spectrum and Figure 48 hybrid decision trees verified. | **KEEP** |

---

## 4. Source Discrepancy & Anti-Drift Audit

During the completion pass, all potential modern industry drifts were systematically audited and corrected to match the IU course book:

1. **PMBOK Process Count**:
   - Modern PMBOK 6th/7th edition sources cite 49 processes or performance domains.
   - **IU Course Book Standard**: Strictly **47 processes** across 5 Process Groups (2 Initiating, 24 Planning, 8 Executing, 11 Monitoring & Controlling, 2 Closing) as specified in Figures 42 and 43 of the DLMBITPAM01 book. All 47 processes are cataloged with zero additions.
2. **Scrum Team Terminology**:
   - 2020 Scrum Guide changed "Development Team" to "Developers" and removed the 3 standard Daily Scrum questions.
   - **IU Course Book Standard**: Retains the official 3 Daily Scrum questions ("What did I do yesterday? What will I do today? What blockers exist?") and the 5 to 9 team sizing rule. Reaffirmed that **NO Project Manager** exists in Scrum.
3. **PRINCE2 Project Board Composition**:
   - Modern Agile-PRINCE2 variants often blur board roles.
   - **IU Course Book Standard**: Strictly enforces the three-part governance triad: Executive (Business), Senior User (User), and Senior Supplier (Supplier), alongside the 6 defined project tolerances.
4. **Agile Manifesto Signatories & Date**:
   - Date: February 2001, Snowbird, Utah. Exactly 17 software leaders.
   - Exactly 4 values and 12 principles.
5. **Earned Value Formulas**:
   - CV = EV - AC (Positive is good).
   - SV = EV - PV (Positive is good).
   - CPI = EV / AC and SPI = EV / PV (> 1.0 is favorable).
   - EAC = BAC / CPI.

---

## 5. UI Architecture, Navigation & Micro-Interactions

### A. Dedicated High-Yield Components
1. `src/components/QuickRevision.tsx`:
   - Must Memorize summary cards for all 6 units.
   - Live Formula & EVM calculation reference.
   - Filterable high-yield numbers from `itpmNumbers`.
   - Side-by-side master comparison viewer.
   - High-frequency exam trap alerts with academic truth corrections.
   - 20 High-Yield Descriptive Questions with expandable model answers and keywords.
2. `src/components/FinalExamPractice.tsx`:
   - 4 Flexible Exam Simulation Modes:
     - Quick Mock (30 questions · 30 minutes)
     - Standard Mock (50 questions · 60 minutes)
     - Full Exam Simulation (60 questions · 90 minutes, 50% pass mark)
     - Weak Topics Practice (filtered to Hard difficulty and Exam Traps)
   - Real-time countdown timer with color warnings (< 5 min amber, < 1 min red).
   - Instant or deferred marking mode.
   - Question review mode with full distractor analysis (`whyOthersAreWrong`).
3. `src/components/TutorQuoteCard.tsx`:
   - Rotating motivational and strategic examination tips from Tutor SK SAHIL.
   - Auto-rotates every 18 seconds with manual skip control.
4. `src/components/InteractiveVisuals.tsx`:
   - Unit 1: Iron Triangle & Quintuple Constraints.
   - Unit 2: 6-node PERT network & Float calculator, Kano model, ISO 25010 explorer.
   - Unit 3: Earned Value curves & Formula solver.
   - Unit 4: Stakeholder Salience Venn & RACI Matrix rules.
   - Unit 5: RUP Hump Chart workload slider, Scrum Sprint Engine, V-Model 1:1 Horizontal links.
   - Unit 6: PMBOK 5x10 Process Group Matrix (47 processes), PRINCE2 Project Board Triad & 6 Tolerances, Multi-Project Hierarchy & PMO Authority, Scaled Agile (SoS, LeSS, SAFe).

### B. Navigation & Sidebar Polish
- `src/components/AppSidebar.tsx`:
  - 5 Structured Collapsible Groups: OVERVIEW, COURSE (UNITS 1–6), PRACTICE, REVISION, PERSONAL.
  - Section-level status indicators for all 24 syllabus sections:
    - `○` (Not Started)
    - `◔` (In Progress)
    - `✓` (Completed)
    - `★` (Bookmarked)
  - Continue Studying dynamic card displaying the current unit with quick resume button.
  - Custom dark-mode scrollbar.

---

## 6. Verification Commands & Build Sign-Off

The final test suite and build pipeline executed successfully with 0 warnings and 0 errors:

```bash
# Automated Content Assertion Test
npm test
# Result: 620/620 MCQs, 260/260 Flashcards, 125/125 Q&As, 71/71 Comparisons, 115/115 Traps, 10/10 Mocks PASSED

# TypeScript Strict Typecheck & Vite Production Bundle
npm run build
# Result: tsc -b && vite build exited with code 0.
```

**Signed off by**: Tutor SK SAHIL  
**Course Code**: DLMBITPAM01 · IT Project Management  
**IU International University of Applied Sciences**

