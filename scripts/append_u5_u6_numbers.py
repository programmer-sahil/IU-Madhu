import re

new_numbers = """  // --- Unit 5 Numbers ---
  {
    id: 'itpm-num-036',
    number: '4',
    unit: 5,
    framework: 'RUP Lifecycle',
    label: 'Core Development Phases of RUP',
    context: 'Inception, Elaboration, Construction, Transition (I-E-C-T).',
    examQuestionPrompt: 'Which four sequential phases structure the core lifecycle of RUP?',
    trapToAvoid: 'Elaboration strictly precedes Construction. Architecture baseline is proven in Elaboration.'
  },
  {
    id: 'itpm-num-037',
    number: '2',
    unit: 5,
    framework: 'Unified Process Lifecycle',
    label: 'Optional Post-Transition Lifecycle Phases',
    context: 'Production (system maintenance and monitoring) and Disposal (system decommissioning and migration).',
    examQuestionPrompt: 'What are the two optional post-transition phases in extended Unified Process frameworks?',
    trapToAvoid: 'RUP has 4 core development phases PLUS 2 optional lifecycle phases.'
  },
  {
    id: 'itpm-num-038',
    number: '6',
    unit: 5,
    framework: 'RUP Disciplines',
    label: 'Core Engineering Disciplines in RUP',
    context: 'Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment.',
    examQuestionPrompt: 'Name the six core engineering disciplines in the RUP framework.',
    trapToAvoid: 'Disciplines run concurrently across all phases with shifting workload peaks; they are not sequential stages.'
  },
  {
    id: 'itpm-num-039',
    number: '4',
    unit: 5,
    framework: 'Agile Manifesto',
    label: 'Core Foundational Values',
    context: 'Individuals & interactions > processes/tools; Working software > comprehensive documentation; Customer collaboration > contract negotiation; Responding to change > following a plan.',
    examQuestionPrompt: 'State the four core values of the 2001 Agile Manifesto.',
    trapToAvoid: 'Items on the left are valued MORE than items on the right. Right-hand items still hold value.'
  },
  {
    id: 'itpm-num-040',
    number: '12',
    unit: 5,
    framework: 'Agile Principles',
    label: 'Supporting Principles of the Agile Manifesto',
    context: 'The 12 principles covering early delivery, welcoming change, sustainable pace, motivated teams, simplicity, and self-organization.',
    examQuestionPrompt: 'How many principles support the Agile Manifesto?',
    trapToAvoid: 'Principle 10 defines simplicity as maximizing the amount of work NOT done.'
  },
  {
    id: 'itpm-num-041',
    number: '4',
    unit: 5,
    framework: 'Software Versioning',
    label: 'Semantic Release Versioning Format',
    context: 'major.minor.build.revision (e.g. 4.2.5.9).',
    examQuestionPrompt: 'What standard four-part scheme is used for software release versioning?',
    trapToAvoid: 'The order is Build (compilation sequence) then Revision (bugfix/patch).'
  },
  {
    id: 'itpm-num-042',
    number: '3',
    unit: 5,
    framework: 'Scrum Theory',
    label: 'Empirical Process Control Pillars',
    context: 'Transparency, Inspection, Adaptation.',
    examQuestionPrompt: 'What are the three pillars upholding empirical process control in Scrum?',
    trapToAvoid: 'Do not confuse the 3 empirical pillars with the 5 Scrum values.'
  },
  {
    id: 'itpm-num-043',
    number: '5',
    unit: 5,
    framework: 'Scrum Culture',
    label: 'Foundational Scrum Values',
    context: 'Commitment, Courage, Focus, Openness, Respect (C-C-F-O-R).',
    examQuestionPrompt: 'List the five core values that underpin human behavior in Scrum.',
    trapToAvoid: 'Efficiency and Speed are business goals, NOT Scrum core values.'
  },
  {
    id: 'itpm-num-044',
    number: '3',
    unit: 5,
    framework: 'Scrum Governance',
    label: 'Defined Scrum Roles (Accountabilities)',
    context: 'Product Owner, Scrum Master, Developers. There is NO Project Manager in Scrum!',
    examQuestionPrompt: 'Which three roles constitute the entire Scrum Team?',
    trapToAvoid: 'Scrum has NO Project Manager. Any option featuring Project Manager as a formal Scrum role is incorrect.'
  },
  {
    id: 'itpm-num-045',
    number: '5 to 9',
    unit: 5,
    framework: 'Scrum Team Structure',
    label: 'Optimal Development Team Sizing',
    context: 'Typically 5 to 9 cross-functional team members.',
    examQuestionPrompt: 'What is the recommended size range for a development team in Scrum?',
    trapToAvoid: '5 to 9 is the classic course book guideline for optimal communication without scaling overhead.'
  },
  {
    id: 'itpm-num-046',
    number: '15 minutes',
    unit: 5,
    framework: 'Scrum Ceremonies',
    label: 'Daily Scrum Time-Box',
    context: 'Strictly 15 minutes daily standup for Developers.',
    examQuestionPrompt: 'What is the strict time-box for the Daily Scrum meeting?',
    trapToAvoid: 'It is strictly 15 minutes. It is a peer synchronization meeting, NOT a management status report.'
  },
  {
    id: 'itpm-num-047',
    number: '<= 1 month',
    unit: 5,
    framework: 'Scrum Time-Boxing',
    label: 'Sprint Duration Limit',
    context: 'Sprints are fixed at 1 month or less (typically 2 weeks). Time-box is NEVER extended if work is unfinished.',
    examQuestionPrompt: 'What is the maximum duration for a Scrum Sprint, and can it be extended for unfinished work?',
    trapToAvoid: 'Never extend a sprint! Unfinished work returns to the Product Backlog.'
  },
  {
    id: 'itpm-num-048',
    number: '4',
    unit: 5,
    framework: 'V-Model',
    label: 'Horizontal Verification Traceability Pairs',
    context: 'Requirements/Acceptance, Design/System, Architecture/Integration, Module/Unit.',
    examQuestionPrompt: 'Name the four horizontal traceability pairings linking specifications to test levels in the V-Model.',
    trapToAvoid: 'Test design occurs early on the left arm concurrently with specification, before coding at vertex.'
  },

  // --- Unit 6 Numbers ---
  {
    id: 'itpm-num-049',
    number: '47',
    unit: 6,
    framework: 'PMBOK Guide',
    label: 'Total Discrete Processes',
    context: 'Distributed across 5 Process Groups and 10 Knowledge Areas in the official course book matrix (Figs 42 & 43).',
    examQuestionPrompt: 'How many total processes are defined in the PMBOK Guide matrix in the course book?',
    trapToAvoid: 'Memorize the exact number: 47 processes.'
  },
  {
    id: 'itpm-num-050',
    number: '2-24-8-11-2',
    unit: 6,
    framework: 'PMBOK Distribution',
    label: 'Process Distribution Across 5 Process Groups',
    context: 'Initiating (2), Planning (24), Executing (8), Monitoring & Controlling (11), Closing (2).',
    examQuestionPrompt: 'Detail the process count distribution across the 5 PMBOK Process Groups.',
    trapToAvoid: 'Planning contains 24 processes—over half of all PMBOK processes.'
  },
  {
    id: 'itpm-num-051',
    number: '10',
    unit: 6,
    framework: 'PMBOK Knowledge',
    label: 'PMBOK Knowledge Areas',
    context: 'Integration, Scope, Time, Cost, Quality, HR, Communications, Risk, Procurement, Stakeholder.',
    examQuestionPrompt: 'How many Knowledge Areas are established in the PMBOK Guide?',
    trapToAvoid: 'Stakeholder is independent of Communications.'
  },
  {
    id: 'itpm-num-052',
    number: '7-7-7',
    unit: 6,
    framework: 'PRINCE2 Architecture',
    label: 'Core Structural Elements of PRINCE2',
    context: '7 Principles, 7 Themes, and 7 Processes.',
    examQuestionPrompt: 'What is the signature 7-7-7 structural architecture of PRINCE2?',
    trapToAvoid: 'Principles are mandatory rules; Themes are management aspects; Processes are lifecycle flow.'
  },
  {
    id: 'itpm-num-053',
    number: '4',
    unit: 6,
    framework: 'PRINCE2 Governance',
    label: 'PRINCE2 Management Levels',
    context: 'Corporate/Programme Management, Project Board (Directing), Project Manager (Managing), Team Managers (Delivering).',
    examQuestionPrompt: 'List the four management levels in the PRINCE2 organizational hierarchy.',
    trapToAvoid: 'The Project Manager is NOT on the Project Board; the PM reports TO the Board.'
  },
  {
    id: 'itpm-num-054',
    number: '3',
    unit: 6,
    framework: 'PRINCE2 Directing',
    label: 'Project Board Triad Interests',
    context: 'Executive (Business/Funding/Accountable), Senior User (User needs & benefits), Senior Supplier (Technical delivery & resources).',
    examQuestionPrompt: 'Which three stakeholder interests are represented on the PRINCE2 Project Board?',
    trapToAvoid: 'The Executive owns the Business Case and holds ultimate accountability.'
  },
  {
    id: 'itpm-num-055',
    number: '6',
    unit: 6,
    framework: 'PRINCE2 Tolerances',
    label: 'Manage by Exception Tolerance Variables',
    context: 'Time, Cost, Quality, Scope, Risk, Benefits.',
    examQuestionPrompt: 'Across which six variables are tolerances set under PRINCE2 Manage by Exception?',
    trapToAvoid: 'Memory aid: T-C-Q-S-R-B. Tolerances define the PM autonomous boundary.'
  },
  {
    id: 'itpm-num-056',
    number: '3',
    unit: 6,
    framework: 'Multi-Project PMO',
    label: 'PMO Structural Control Models',
    context: 'Supportive (Low control, consultative), Controlling (Moderate control, compliance auditing), Directive (High control, PMs report to PMO).',
    examQuestionPrompt: 'Identify the three types of PMO categorized by their degree of authority and control.',
    trapToAvoid: 'Supportive = Low; Controlling = Moderate; Directive = High.'
  },
  {
    id: 'itpm-num-057',
    number: '4',
    unit: 6,
    framework: 'Scaled Agile',
    label: 'Scrum of Scrums (SoS) Guiding Questions',
    context: 'Adds Question 4: "Are you putting any impediment in the way of other teams?" to surface cross-team impacts.',
    examQuestionPrompt: 'How many questions are addressed in Scrum of Scrums and what is the unique fourth question?',
    trapToAvoid: 'SoS has 4 questions, specifically focusing on cross-team dependencies.'
  },
  {
    id: 'itpm-num-058',
    number: '8',
    unit: 6,
    framework: 'Scaled Agile',
    label: 'Basic LeSS Maximum Feature Teams',
    context: 'Up to 8 feature teams (50-70 developers) supported by 1 single Product Owner and 1 shared Product Backlog.',
    examQuestionPrompt: 'What is the maximum number of feature teams supported by Basic Large-Scale Scrum (LeSS)?',
    trapToAvoid: 'Beyond 8 teams, LeSS Huge introduces Area Product Owners (APOs).'
  },
  {
    id: 'itpm-num-059',
    number: '50 to 125',
    unit: 6,
    framework: 'SAFe',
    label: 'Agile Release Train (ART) Headcount',
    context: 'A synchronized team-of-teams of 50 to 125 people delivering value on a cadence.',
    examQuestionPrompt: 'What is the typical headcount range for an Agile Release Train in SAFe?',
    trapToAvoid: 'Headcount range is officially 50 to 125 people.'
  },
  {
    id: 'itpm-num-060',
    number: '5',
    unit: 6,
    framework: 'SAFe DevOps',
    label: 'CALMR Mindset Elements',
    context: 'Culture, Automation, Lean Flow, Measurement, Recovery.',
    examQuestionPrompt: 'What are the five components of the CALMR DevOps model in SAFe?',
    trapToAvoid: 'Memorize verbatim: Culture, Automation, Lean Flow, Measurement, Recovery.'
  }
];
"""

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/numbers.ts') as f:
    text = f.read()

new_text = re.sub(r'\];\s*$', new_numbers, text.strip())

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/numbers.ts', 'w') as f:
    f.write(new_text)

print("Updated numbers.ts with 60 high-yield numbers for all 6 units!")
