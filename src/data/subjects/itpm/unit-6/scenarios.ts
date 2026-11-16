export interface ScenarioItem {
  id: string;
  title: string;
  category: string;
  type: string;
  context: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  source: string;
}

export const unit6Scenarios: ScenarioItem[] = [
  {
    "id": "itpm-u6-scen-001",
    "title": "The Tolerance Breach Escalation",
    "category": "PRINCE2 Governance",
    "type": "manage-by-exception",
    "context": "During Stage 3 of an enterprise ERP deployment, the Project Manager calculates that vendor consulting fees will cause the stage budget to exceed its approved \u00a3500,000 cost tolerance by 12%. The Project Manager considers taking \u00a360,000 from Stage 4 funds secretly to balance the books.",
    "question": "What is the mandatory action required of the Project Manager under PRINCE2 Manage by Exception?",
    "options": [
      "Immediately produce and submit an Exception Report to the Project Board explaining the forecast breach and presenting options.",
      "Transfer funds secretly from Stage 4 because the overall project budget might still balance out.",
      "Cancel the project immediately without notifying the Project Board.",
      "Fire the vendor consulting team and refuse to pay their submitted invoices."
    ],
    "correctIndex": 0,
    "rationale": "Under Manage by Exception, the PM has no authority to exceed agreed stage tolerances or reallocate future stage funds. The PM must immediately alert the Project Board via an Exception Report; only the Board can authorize an Exception Plan.",
    "source": "Unit 6 \u00b7 Section 6.2 \u2014 PRINCE2"
  },
  {
    "id": "itpm-u6-scen-002",
    "title": "The Evaporated Business Case",
    "category": "PRINCE2 Principles",
    "type": "business-justification",
    "context": "A retail bank is building a nationwide branch kiosk network. Halfway through the project, government legislation mandates free digital mobile banking, rendering branch kiosks economically unviable. The Project Sponsor insists on finishing the remaining kiosks because $5M has already been spent.",
    "question": "How does the PRINCE2 principle of 'Continued Business Justification' direct the Project Board to act?",
    "options": [
      "Terminate the project prematurely through the 'Closing a Project' process; continuing to spend money on an unviable project violates core governance.",
      "Continue building the kiosks to avoid wasting the $5M already spent (succumbing to the Sunk Cost Fallacy).",
      "Fire the government regulators and sue the national parliament.",
      "Hide the legislative changes from corporate shareholders."
    ],
    "correctIndex": 0,
    "rationale": "Principle 1 mandates Continued Business Justification: if business justification disappears, the project MUST be stopped early. Sunk costs cannot justify continuing an unviable initiative. The Board must direct premature closure via the Closing process.",
    "source": "Unit 6 \u00b7 Section 6.2 \u2014 PRINCE2"
  },
  {
    "id": "itpm-u6-scen-003",
    "title": "The Siloed Project Disaster",
    "category": "Multi-Project Management",
    "type": "portfolio-alignment",
    "context": "A healthcare corporation runs 40 independent IT projects. Two separate hospital divisions independently spend $3M each contracting different vendors to build electronic patient record systems, resulting in incompatible databases that cannot exchange patient histories.",
    "question": "What multi-project governance body and tier was missing to prevent this duplicated investment?",
    "options": [
      "Portfolio Management / Enterprise PMO to ensure strategic alignment, eliminate duplication, and govern enterprise investments.",
      "Daily developer standups in the hospital cafeteria.",
      "A software testing consulting agency.",
      "An offshore call center in another time zone."
    ],
    "correctIndex": 0,
    "rationale": "Portfolio Management focuses on 'doing the right work', providing centralized visibility to ensure projects advance corporate strategy without duplicate capital expenditure or incompatible technical silos.",
    "source": "Unit 6 \u00b7 Section 6.3 \u2014 Multi-Project Management"
  },
  {
    "id": "itpm-u6-scen-004",
    "title": "The Misaligned Directive PMO",
    "category": "PMO Models",
    "type": "pmo-culture-fit",
    "context": "A fast-growing gaming startup with an informal, highly creative hacker culture hires an executive who immediately institutes a Directive PMO, mandating that all project managers report to him, requiring 40 pages of weekly status forms, and dictating task allocations.",
    "question": "Why is this Directive PMO facing widespread rebellion and developer resignations?",
    "options": [
      "A Directive PMO exerts high centralized control, which directly clashes with an entrepreneurial, decentralized creative culture that thrives on autonomy.",
      "Directive PMOs only function on projects with more than 10,000 employees.",
      "Gaming software cannot be managed using project management principles.",
      "The PMO failed to purchase video game consoles for developers."
    ],
    "correctIndex": 0,
    "rationale": "A PMO model must match organizational culture. Forcing a Directive PMO (high control) onto an entrepreneurial, autonomous culture causes organizational rejection and talent flight. A Supportive PMO would have been more appropriate.",
    "source": "Unit 6 \u00b7 Section 6.3 \u2014 Multi-Project Management"
  },
  {
    "id": "itpm-u6-scen-005",
    "title": "The LeSS Backlog Fragmentation Trap",
    "category": "Scaled Agile",
    "type": "less-backlog-rules",
    "context": "An e-commerce firm adopts Large-Scale Scrum (LeSS) across 6 feature teams. To keep teams happy, management appoints 6 separate Product Owners and creates 6 separate Product Backlogs, allowing each team to pick their own priorities independently.",
    "question": "What fundamental LeSS single-source rule has been violated, and what operational risk emerges?",
    "options": [
      "LeSS mandates strictly ONE Product Owner and ONE Product Backlog; fragmenting backlogs creates sub-product silos and destroys enterprise release alignment.",
      "LeSS mandates that only external customers can act as Product Owners.",
      "LeSS requires exactly 20 Product Owners for 6 teams.",
      "LeSS forbids the use of computers for backlog management."
    ],
    "correctIndex": 0,
    "rationale": "In LeSS, scaling is achieved through radical simplification: ONE Product Owner and ONE shared Product Backlog for all teams (up to 8). Fragmenting backlogs recreates isolated component silos and destroys whole-product alignment.",
    "source": "Unit 6 \u00b7 Section 6.4 \u2014 Agile Software Processes in Large Projects"
  },
  {
    "id": "itpm-u6-scen-006",
    "title": "The SoS Bilateral Impediment Discovery",
    "category": "Scrum of Scrums",
    "type": "sos-fourth-question",
    "context": "At a Scrum of Scrums meeting, the ambassador from Team Alpha mentions they refactored the customer database schema to speed up their search queries. The ambassador from Team Beta realizes that this unannounced schema change will break Team Beta's payment checkout pipeline tonight.",
    "question": "Which specific Scrum of Scrums question was designed to uncover this exact inter-team dependency risk?",
    "options": [
      "Question 4: 'Are you putting any impediment in the way of other teams?'",
      "Question 1: 'What did you do yesterday?'",
      "Question 2: 'What will you do tomorrow?'",
      "Question 3: 'What is blocking your team?'"
    ],
    "correctIndex": 0,
    "rationale": "Question 4 uniquely enforces bilateral responsibility: it compels teams to reflect on whether their internal architectural choices or code commits are creating downstream blockers for peer teams.",
    "source": "Unit 6 \u00b7 Section 6.4 \u2014 Agile Software Processes in Large Projects"
  },
  {
    "id": "itpm-u6-scen-007",
    "title": "The Weak Matrix Authority Crisis",
    "category": "Organizational Structures",
    "type": "matrix-authority-conflict",
    "context": "In a Weak Matrix organization, a project manager is held accountable by senior executives for missing a critical software release deadline. The project manager explains that the Functional Engineering Manager repeatedly pulled senior developers off the project to work on routine operational maintenance tickets without the PM's consent.",
    "question": "Why is the project manager structurally powerless to prevent this in a Weak Matrix?",
    "options": [
      "In a Weak Matrix, functional managers maintain primary control over personnel and resource allocations; the PM acts only as a coordinator without authority to command staff.",
      "In a Weak Matrix, project managers are legally forbidden from talking to functional managers.",
      "Functional managers have total authority over project managers in all matrix models.",
      "The project manager forgot to purchase project management software."
    ],
    "correctIndex": 0,
    "rationale": "In a Weak Matrix, real authority rests with functional department managers. The PM is merely an expediter/coordinator, creating an organizational mismatch when held accountable for deadlines without holding resource authority.",
    "source": "Unit 6 \u00b7 Section 6.5 \u2014 Selection of the Appropriate Project Management Method"
  },
  {
    "id": "itpm-u6-scen-008",
    "title": "The Enterprise Banking Hybrid Solution",
    "category": "Methodology Selection",
    "type": "hybrid-implementation",
    "context": "A global investment bank must replace its core clearing settlement engine. Central banking authorities require formal verification audit baselines and fixed-milestone reporting, but traders demand rapid iterative GUI releases to refine real-time trade charts.",
    "question": "How should the enterprise structure its methodology according to Course Book Figure 48?",
    "options": [
      "Implement a Hybrid model: utilize predictive governance (PMBOK/PRINCE2 baselines and stage gates) for regulatory compliance and core architecture, combined with agile sprints (Scrum) for rapid trader UI feature iterations.",
      "Use pure 1970s waterfall and tell traders they cannot see any software for 4 years.",
      "Use pure undocumented Scrum and refuse to provide audit records to central bank regulators.",
      "Cancel the project and process trades manually by phone."
    ],
    "correctIndex": 0,
    "rationale": "Course Book Figure 48 emphasizes that modern enterprise IT thrives on Hybrid models: satisfying regulatory compliance and architectural baselines through predictive governance, while capturing usability agility through iterative agile sprints.",
    "source": "Unit 6 \u00b7 Section 6.5 \u2014 Selection of the Appropriate Project Management Method"
  }
];
