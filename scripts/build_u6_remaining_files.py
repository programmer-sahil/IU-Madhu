import json

# =========================================================================
# 1. FLASHCARDS (55 Flashcards)
# =========================================================================
flashcards = [
    # 6.1 PMBOK Guide (1-12)
    {
        "id": "itpm-u6-fc-001", "unit": 6, "category": "PMBOK",
        "front": "What are the five PMBOK Process Groups?",
        "back": "Initiating, Planning, Executing, Monitoring & Controlling, Closing. (Memory aid: I-P-E-M-C).",
        "examTip": "Process groups are NOT project phases; they overlap throughout every phase.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Process Groups"}
    },
    {
        "id": "itpm-u6-fc-002", "unit": 6, "category": "PMBOK",
        "front": "How many total processes are defined in the PMBOK Guide in the course book?",
        "back": "Exactly 47 processes (distributed: Initiating 2, Planning 24, Executing 8, Monitoring & Controlling 11, Closing 2).",
        "examTip": "Memorize the distribution: 2-24-8-11-2 = 47 processes.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "PMBOK Total Processes"}
    },
    {
        "id": "itpm-u6-fc-003", "unit": 6, "category": "PMBOK",
        "front": "Which process group contains the most processes in PMBOK?",
        "back": "The Planning Process Group, containing 24 out of the 47 total processes.",
        "examTip": "Over half of all PMBOK processes reside in Planning.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Planning Process Count"}
    },
    {
        "id": "itpm-u6-fc-004", "unit": 6, "category": "PMBOK",
        "front": "What are the 10 Knowledge Areas in PMBOK?",
        "back": "Integration, Scope, Time, Cost, Quality, Human Resources, Communications, Risk, Procurement, Stakeholder.",
        "examTip": "Stakeholder is the 10th knowledge area, independent of Communications.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Ten Knowledge Areas"}
    },
    {
        "id": "itpm-u6-fc-005", "unit": 6, "category": "PMBOK",
        "front": "What is the difference between Product Scope and Project Scope?",
        "back": "Product Scope = features, functions, and characteristics of the deliverable. Project Scope = all the work performed to deliver that product scope.",
        "examTip": "Product Scope is measured against requirements; Project Scope is measured against the WBS/Plan.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Product vs Project Scope"}
    },
    {
        "id": "itpm-u6-fc-006", "unit": 6, "category": "PMBOK",
        "front": "What does ITTO stand for in PMBOK?",
        "back": "Inputs, Tools & Techniques, Outputs. (The standard structure of all 47 processes).",
        "examTip": "Every PMBOK process takes Inputs, applies Tools/Techniques, and yields Outputs.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "ITTO Architecture"}
    },
    {
        "id": "itpm-u6-fc-007", "unit": 6, "category": "PMBOK",
        "front": "What is the Project Charter and who issues it?",
        "back": "A formal document issued by the project sponsor that authorizes the project's existence and grants the PM authority to commit resources.",
        "examTip": "The PM cannot expend corporate funds before the Charter is formally authorized.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Project Charter"}
    },
    {
        "id": "itpm-u6-fc-008", "unit": 6, "category": "PMBOK",
        "front": "Which knowledge area is responsible for coordinating all project activities?",
        "back": "Project Integration Management. (The only knowledge area spanning all 5 process groups).",
        "examTip": "Integration management is the core unifying discipline of the project manager.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Integration Management"}
    },
    {
        "id": "itpm-u6-fc-009", "unit": 6, "category": "PMBOK",
        "front": "What is a Change Control Board (CCB)?",
        "back": "A formally chartered group responsible for reviewing, evaluating, approving, deferring, or rejecting changes to project baselines.",
        "examTip": "The PM does not decide on baseline changes unilaterally; the CCB holds formal approval authority.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Change Control Board"}
    },
    {
        "id": "itpm-u6-fc-010", "unit": 6, "category": "PMBOK",
        "front": "What is the difference between Control Scope and Validate Scope?",
        "back": "Control Scope monitors status and manages changes to the scope baseline. Validate Scope formalizes customer acceptance of completed deliverables.",
        "examTip": "Validate Scope is about customer *acceptance*; Control Quality is about technical *correctness*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Validate vs Control Scope"}
    },
    {
        "id": "itpm-u6-fc-011", "unit": 6, "category": "PMBOK",
        "front": "What does 'progressive elaboration' mean?",
        "back": "Continuously improving and detailing a project plan as more specific information and accurate estimates become available.",
        "examTip": "Progressive elaboration is normal iterative refinement; it is NOT scope creep.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Progressive Elaboration"}
    },
    {
        "id": "itpm-u6-fc-012", "unit": 6, "category": "PMBOK",
        "front": "What is the Performance Measurement Baseline (PMB)?",
        "back": "An integrated scope, schedule, and cost baseline used to measure and manage project execution via Earned Value Management.",
        "examTip": "Integrates Scope Baseline + Schedule Baseline + Cost Baseline.",
        "source": {"type": "course-book", "unit": 6, "section": "6.1", "topic": "Performance Measurement Baseline"}
    },

    # 6.2 PRINCE2 (13-24)
    {
        "id": "itpm-u6-fc-013", "unit": 6, "category": "PRINCE2",
        "front": "What does PRINCE2 stand for and what is its origin?",
        "back": "PRojects IN Controlled Environments, originating as the UK government's de facto project management standard.",
        "examTip": "Published by CCTA/OGC/AXELOS with European organizational contributions.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Origin"}
    },
    {
        "id": "itpm-u6-fc-014", "unit": 6, "category": "PRINCE2",
        "front": "What is the 7-7-7 structure of PRINCE2?",
        "back": "7 Principles, 7 Themes, and 7 Processes.",
        "examTip": "Remember the triad of sevens: Principles (rules), Themes (aspects), Processes (lifecycle steps).",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 7-7-7"}
    },
    {
        "id": "itpm-u6-fc-015", "unit": 6, "category": "PRINCE2",
        "front": "What are the seven PRINCE2 Principles?",
        "back": "1. Continued business justification\n2. Learn from experience\n3. Defined roles and responsibilities\n4. Manage by stages\n5. Manage by exception\n6. Focus on products\n7. Tailor to suit the environment.",
        "examTip": "Principles are universal and mandatory; violating any single principle invalidates PRINCE2.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Seven Principles"}
    },
    {
        "id": "itpm-u6-fc-016", "unit": 6, "category": "PRINCE2",
        "front": "What are the seven PRINCE2 Themes?",
        "back": "Business Case, Organization, Quality, Plans, Risk, Change, Progress.",
        "examTip": "Themes are project management aspects that must be addressed continuously throughout the project.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Seven Themes"}
    },
    {
        "id": "itpm-u6-fc-017", "unit": 6, "category": "PRINCE2",
        "front": "What are the seven PRINCE2 Processes?",
        "back": "SU (Starting Up), DP (Directing), IP (Initiating), CS (Controlling Stage), MP (Managing Product Delivery), SB (Managing Stage Boundary), CP (Closing).",
        "examTip": "DP is the sole process owned by the Project Board; CS and MP govern stage execution.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Seven Processes"}
    },
    {
        "id": "itpm-u6-fc-018", "unit": 6, "category": "PRINCE2",
        "front": "What are the four management levels in PRINCE2?",
        "back": "1. Corporate or Programme Management\n2. Project Board (Directing)\n3. Project Manager (Managing)\n4. Team Managers (Delivering).",
        "examTip": "Project Manager reports TO the Project Board; PM is not a member of the Board.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "PRINCE2 Four Management Levels"}
    },
    {
        "id": "itpm-u6-fc-019", "unit": 6, "category": "PRINCE2",
        "front": "Which three roles constitute the PRINCE2 Project Board?",
        "back": "Executive (Business/funding), Senior User (user needs and benefits), Senior Supplier (technical delivery resources).",
        "examTip": "The Executive holds ultimate accountability and owns the Business Case.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Project Board Roles"}
    },
    {
        "id": "itpm-u6-fc-020", "unit": 6, "category": "PRINCE2",
        "front": "What is 'Manage by Exception' in PRINCE2?",
        "back": "Delegating authority by setting tolerances across 6 variables (Time, Cost, Quality, Scope, Risk, Benefits); PM escalates via Exception Report only when a tolerance is breached.",
        "examTip": "Prevents senior executive micro-management while maintaining firm control.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Manage by Exception"}
    },
    {
        "id": "itpm-u6-fc-021", "unit": 6, "category": "PRINCE2",
        "front": "Across which six variables are tolerances set in PRINCE2?",
        "back": "Time, Cost, Quality, Scope, Risk, Benefits.",
        "examTip": "Memory aid: T-C-Q-S-R-B. Tolerances define the PM's autonomous operational boundary.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Six Tolerances"}
    },
    {
        "id": "itpm-u6-fc-022", "unit": 6, "category": "PRINCE2",
        "front": "What is 'Manage by Stages' in PRINCE2?",
        "back": "Breaking the project into discrete stages with mandatory boundary review gates where the Board re-evaluates the Business Case before committing funds for the next stage.",
        "examTip": "A PRINCE2 project must have at least 2 stages: Initiation Stage + at least 1 Delivery Stage.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Manage by Stages"}
    },
    {
        "id": "itpm-u6-fc-023", "unit": 6, "category": "PRINCE2",
        "front": "What is Product-Based Planning in PRINCE2?",
        "back": "Defining what products are needed (Product Breakdown Structure, Product Descriptions) before scheduling activities or drafting Gantt charts.",
        "examTip": "Products come FIRST; activities come SECOND in PRINCE2 planning.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Product-Based Planning"}
    },
    {
        "id": "itpm-u6-fc-024", "unit": 6, "category": "PRINCE2",
        "front": "What document triggers premature closure in PRINCE2 if business justification disappears?",
        "back": "The Project Board instructs the PM to execute the 'Closing a Project' (CP) process, salvaging useful deliverables and creating an End Project Report.",
        "examTip": "If the business justification evaporates, PRINCE2 explicitly mandates stopping the project early.",
        "source": {"type": "course-book", "unit": 6, "section": "6.2", "topic": "Premature Closure"}
    },

    # 6.3 Multi-Project Management (25-34)
    {
        "id": "itpm-u6-fc-025", "unit": 6, "category": "Multi-Project",
        "front": "What is the three-tier multi-project hierarchy in Course Book Figure 46?",
        "back": "Portfolio (strategic top) -> Programme (coordination/benefits middle) -> Project (operational deliverables base).",
        "examTip": "Portfolio aligns strategy; Programme captures synergistic benefits; Project delivers outputs.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Multi-Project Hierarchy"}
    },
    {
        "id": "itpm-u6-fc-026", "unit": 6, "category": "Multi-Project",
        "front": "What is the primary governing focus of Portfolio Management?",
        "back": "'Are we doing the right work?' — strategic business alignment, investment prioritization, capital allocation, and balancing organizational risk.",
        "examTip": "Portfolio = Doing the RIGHT things. Project = Doing things RIGHT.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Portfolio Management Focus"}
    },
    {
        "id": "itpm-u6-fc-027", "unit": 6, "category": "Multi-Project",
        "front": "What is a Programme in multi-project management?",
        "back": "A group of related projects managed in a coordinated way to obtain synergistic benefits and capabilities not achievable individually.",
        "examTip": "Programmes focus on *benefit realization* and managing inter-project dependencies.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Programme Definition"}
    },
    {
        "id": "itpm-u6-fc-028", "unit": 6, "category": "Multi-Project",
        "front": "What is the focus of an individual Project within a programme?",
        "back": "Delivering specific defined outputs/deliverables within approved scope, schedule, and cost constraints.",
        "examTip": "Projects produce *outputs*; Programmes translate outputs into operational *benefits*.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Project Focus"}
    },
    {
        "id": "itpm-u6-fc-029", "unit": 6, "category": "Multi-Project",
        "front": "What are the three structural types of PMO?",
        "back": "Supportive PMO (low control), Controlling PMO (moderate control), and Directive PMO (high control).",
        "examTip": "Categorized strictly by the degree of control and authority exerted over projects.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Three PMO Types"}
    },
    {
        "id": "itpm-u6-fc-030", "unit": 6, "category": "Multi-Project",
        "front": "What is a Supportive PMO?",
        "back": "A consultative PMO that provides templates, best practices, training, and lessons learned archives; exerts a LOW level of control.",
        "examTip": "Supportive = Consultative with LOW authority.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Supportive PMO"}
    },
    {
        "id": "itpm-u6-fc-031", "unit": 6, "category": "Multi-Project",
        "front": "What is a Controlling PMO?",
        "back": "A PMO that provides support and mandates compliance with project governance frameworks, standard tools, and reporting formats; exerts MODERATE control.",
        "examTip": "Controlling = Support + Compliance auditing (MODERATE authority).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Controlling PMO"}
    },
    {
        "id": "itpm-u6-fc-032", "unit": 6, "category": "Multi-Project",
        "front": "What is a Directive PMO?",
        "back": "A PMO that directly manages projects by assigning project managers who report directly to the PMO; exerts a HIGH level of control.",
        "examTip": "Directive = PMs report directly to the PMO (HIGH authority).",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Directive PMO"}
    },
    {
        "id": "itpm-u6-fc-033", "unit": 6, "category": "Multi-Project",
        "front": "How does multi-project management address resource bottlenecks?",
        "back": "Provides centralized visibility to balance specialist allocations across concurrent projects, scheduling shared experts according to strategic priority.",
        "examTip": "Prevents overallocation of critical path specialists.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Resource Bottlenecks"}
    },
    {
        "id": "itpm-u6-fc-034", "unit": 6, "category": "Multi-Project",
        "front": "What is the primary risk of running projects without Portfolio Management?",
        "back": "Projects duplicate effort, work at cross-purposes, compete destructively for scarce resources, and fail to advance corporate strategy.",
        "examTip": "Portfolio management eliminates uncoordinated project silos.",
        "source": {"type": "course-book", "unit": 6, "section": "6.3", "topic": "Uncoordinated Projects Risk"}
    },

    # 6.4 Agile Software Processes in Large Projects (35-45)
    {
        "id": "itpm-u6-fc-035", "unit": 6, "category": "Scaled Agile",
        "front": "What is the primary coordination mechanism in Scrum of Scrums (SoS)?",
        "back": "Designated ambassadors from multiple Scrum teams meet regularly (~15 minutes) to coordinate cross-team dependencies and resolve blockers.",
        "examTip": "Ambassadors meet to avoid gathering hundreds of developers into a massive meeting.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Scrum of Scrums Structure"}
    },
    {
        "id": "itpm-u6-fc-036", "unit": 6, "category": "Scaled Agile",
        "front": "What are the four questions answered in Scrum of Scrums?",
        "back": "1. What has your team done since last meeting?\n2. What will your team do before next meeting?\n3. What impediments is your team facing that affect other teams?\n4. Are you putting any impediment in the way of other teams?",
        "examTip": "Remember the unique 4th question: checking if YOUR team is blocking OTHERS.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "SoS Four Questions"}
    },
    {
        "id": "itpm-u6-fc-037", "unit": 6, "category": "Scaled Agile",
        "front": "Who created Large-Scale Scrum (LeSS)?",
        "back": "Craig Larman and Bas Vodde.",
        "examTip": "Core philosophy: 'More with LeSS' (scaling by descaling organizational bloat).",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "LeSS Creators"}
    },
    {
        "id": "itpm-u6-fc-038", "unit": 6, "category": "Scaled Agile",
        "front": "How many feature teams can Basic LeSS support?",
        "back": "Up to 8 feature teams (roughly 50 to 70 people).",
        "examTip": "For projects larger than 8 teams, LeSS Huge is applied.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Basic LeSS Team Sizing"}
    },
    {
        "id": "itpm-u6-fc-039", "unit": 6, "category": "Scaled Agile",
        "front": "What are the single-source rules of LeSS?",
        "back": "ONE Product Owner, ONE Product Backlog, ONE Sprint, ONE Definition of Done, and ONE integrated Potentially Releasable Increment.",
        "examTip": "There is strictly ONE PO and ONE Backlog for all 8 teams in LeSS.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "LeSS Single-Source Rules"}
    },
    {
        "id": "itpm-u6-fc-040", "unit": 6, "category": "Scaled Agile",
        "front": "What role is added in LeSS Huge when scaling beyond 8 teams?",
        "back": "Area Product Owners (APOs) who manage specific Requirement Areas within the overarching Product Backlog.",
        "examTip": "Basic LeSS has no APOs; only LeSS Huge introduces Area Product Owners.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "LeSS Huge APOs"}
    },
    {
        "id": "itpm-u6-fc-041", "unit": 6, "category": "Scaled Agile",
        "front": "Who created the Scaled Agile Framework (SAFe)?",
        "back": "Dean Leffingwell.",
        "examTip": "SAFe scales lean-agile practices across large global enterprise corporations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "SAFe Creator"}
    },
    {
        "id": "itpm-u6-fc-042", "unit": 6, "category": "Scaled Agile",
        "front": "What is an Agile Release Train (ART) in SAFe and what is its headcount?",
        "back": "A synchronized team of agile teams (typically 50 to 125 people) that plans, commits, and executes together on a fixed cadence.",
        "examTip": "Headcount: 50 to 125 people.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Agile Release Train"}
    },
    {
        "id": "itpm-u6-fc-043", "unit": 6, "category": "Scaled Agile",
        "front": "What does CALMR stand for in SAFe DevOps?",
        "back": "Culture, Automation, Lean Flow, Measurement, Recovery.",
        "examTip": "Memorize CALMR verbatim for multiple-choice examinations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "CALMR DevOps"}
    },
    {
        "id": "itpm-u6-fc-044", "unit": 6, "category": "Scaled Agile",
        "front": "What is the core philosophical difference between LeSS and SAFe?",
        "back": "LeSS scales Scrum by descaling organizational structure and adding NO extra management roles; SAFe scales by providing comprehensive multi-tiered enterprise scaffolding.",
        "examTip": "LeSS = minimal roles / descaling; SAFe = prescriptive enterprise framework.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "LeSS vs SAFe Contrast"}
    },
    {
        "id": "itpm-u6-fc-045", "unit": 6, "category": "Scaled Agile",
        "front": "What type of teams does LeSS require?",
        "back": "Cross-functional Feature Teams capable of delivering complete end-to-end user features across all architectural layers (rejecting component teams).",
        "examTip": "LeSS mandates Feature Teams; it strictly rejects architectural component silos.",
        "source": {"type": "course-book", "unit": 6, "section": "6.4", "topic": "Feature Teams in LeSS"}
    },

    # 6.5 Selection of the Appropriate Project Management Method (46-55)
    {
        "id": "itpm-u6-fc-046", "unit": 6, "category": "Method Selection",
        "front": "What is a Functional Organization and what authority does the PM have?",
        "back": "Staff are grouped by specialty (marketing, engineering, finance). The PM has little or no formal authority, acting only as a coordinator.",
        "examTip": "Functional managers control all budgets and resources.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Functional Organization"}
    },
    {
        "id": "itpm-u6-fc-047", "unit": 6, "category": "Method Selection",
        "front": "What are the three variants of Matrix Organizations?",
        "back": "Weak Matrix (functional manager dominates; PM is coordinator), Balanced Matrix (shared power), and Strong Matrix (PM dominates with full-time role).",
        "examTip": "Weak = Functional power; Balanced = Shared power; Strong = PM power.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Matrix Variants"}
    },
    {
        "id": "itpm-u6-fc-048", "unit": 6, "category": "Method Selection",
        "front": "What is a Projectized (Project-Oriented) Organization?",
        "back": "Team members are dedicated full-time to the project and report directly to the PM, who holds total operational and budgetary authority.",
        "examTip": "PM has maximum authority in projectized organizations.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Projectized Organization"}
    },
    {
        "id": "itpm-u6-fc-049", "unit": 6, "category": "Method Selection",
        "front": "What is the 'no home' challenge in Projectized organizations?",
        "back": "When a project concludes, dedicated team members face anxiety or lack immediate job reassignment because they have no permanent functional department.",
        "examTip": "The primary HR drawback of pure projectized structures.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "No Home Challenge"}
    },
    {
        "id": "itpm-u6-fc-050", "unit": 6, "category": "Method Selection",
        "front": "How does the course book define 'Iterative Development'?",
        "back": "Developing an initial low-fidelity version encompassing all/most features early, and progressively refining fidelity across iterations.",
        "examTip": "Iterative = All features early at low fidelity, refined together over time.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Iterative Development"}
    },
    {
        "id": "itpm-u6-fc-051", "unit": 6, "category": "Method Selection",
        "front": "How does the course book define 'Incremental Development'?",
        "back": "Completely finishing a small subset of features to full operational fidelity first, adding more completed features in subsequent releases.",
        "examTip": "Incremental = Few features fully finished first, adding more slices over time.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Incremental Development"}
    },
    {
        "id": "itpm-u6-fc-052", "unit": 6, "category": "Method Selection",
        "front": "How does Agile synthesize Iterative and Incremental models?",
        "back": "Agile is BOTH: it delivers functional, tested vertical slices in short sprints (incremental) while iteratively refining architecture and backlog (iterative).",
        "examTip": "Agile = Iterative refinement + Incremental delivery.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Agile Synthesis"}
    },
    {
        "id": "itpm-u6-fc-053", "unit": 6, "category": "Method Selection",
        "front": "Why is 'one-size-fits-all' a myth in project management?",
        "back": "Different projects have fundamentally different requirements, regulatory scrutiny, team distributions, and customer availability; forcing one method leads to failure.",
        "examTip": "Tailoring and methodology selection are mandatory professional skills.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "One Size Fits All Myth"}
    },
    {
        "id": "itpm-u6-fc-054", "unit": 6, "category": "Method Selection",
        "front": "What is a Hybrid project management model?",
        "back": "Pragmatically combining predictive planning for high-level governance, budgeting, and architecture with agile iterative sprints for software execution.",
        "examTip": "Course Book Figure 48 demonstrates the hybrid blend of predictive and adaptive methods.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Hybrid Project Management"}
    },
    {
        "id": "itpm-u6-fc-055", "unit": 6, "category": "Method Selection",
        "front": "How does a Fixed-Price, Fixed-Scope contract impact agile adoption?",
        "back": "It creates friction with Agile's principle of welcoming changing scope, often necessitating a predictive or hybrid model with formal change control.",
        "examTip": "Fixed commercial contracts legally lock scope, conflicting with pure agile scope fluidity.",
        "source": {"type": "course-book", "unit": 6, "section": "6.5", "topic": "Fixed Price Contracts"}
    }
]

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/flashcards.ts', 'w') as f:
    f.write(f'import {{ Flashcard }} from "../../../../types";\n\nexport const unit6Flashcards: Flashcard[] = {json.dumps(flashcards, indent=2)};\n')
print(f"Generated unit-6/flashcards.ts ({len(flashcards)} flashcards)")
