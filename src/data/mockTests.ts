import { MockExam } from '../types';

export const mockExams: MockExam[] = [
  {
    id: 'mock-1',
    title: 'Full Examination Simulator 1',
    subtitle: 'Standard Examination Format — 90 Marks (48 MCQs + 1×20m + 2×8m + 1×6m)',
    totalMarks: 90,
    timeLimitMinutes: 120,
    mcqIds: [
      // Unit 1 (8 questions)
      'u1-mcq-1', 'u1-mcq-2', 'u1-mcq-3', 'u1-mcq-4', 'u1-mcq-5', 'u1-mcq-6', 'u1-mcq-7', 'u1-mcq-10',
      // Unit 2 (8 questions)
      'u2-mcq-1', 'u2-mcq-2', 'u2-mcq-3', 'u2-mcq-4', 'u2-mcq-5', 'u2-mcq-6', 'u2-mcq-7', 'u2-mcq-13',
      // Unit 3 (8 questions)
      'u3-mcq-1', 'u3-mcq-2', 'u3-mcq-3', 'u3-mcq-4', 'u3-mcq-6', 'u3-mcq-8', 'u3-mcq-9', 'u3-mcq-10',
      // Unit 4 (8 questions)
      'u4-mcq-1', 'u4-mcq-2', 'u4-mcq-3', 'u4-mcq-4', 'u4-mcq-5', 'u4-mcq-6', 'u4-mcq-7', 'u4-mcq-9',
      // Unit 5 (8 questions)
      'u5-mcq-1', 'u5-mcq-2', 'u5-mcq-3', 'u5-mcq-4', 'u5-mcq-5', 'u5-mcq-6', 'u5-mcq-7', 'u5-mcq-8',
      // Unit 6 (8 questions)
      'u6-mcq-1', 'u6-mcq-2', 'u6-mcq-3', 'u6-mcq-4', 'u6-mcq-5', 'u6-mcq-7', 'u6-mcq-8', 'u6-mcq-9'
    ],
    descriptiveQuestions: [
      {
        id: 'm1-desc-1',
        unit: 1,
        question: 'Case Study: Enterprise Cloud Migration & Governance Transformation. A major German manufacturing and retail group with €400 million turnover is transitioning its legacy ERP and consumer e-commerce portal to a multi-tenant public cloud. Formulate a comprehensive 20-mark Master’s-level governance, compliance, and legal architecture addressing this transformation.',
        marks: 20,
        suggestedMinutes: 35,
        scenario: `EuroRetail AG operates an online shop serving 1.5 million EU consumers and processes enterprise financials via an on-premise ERP. The executive management plans to migrate all ERP accounting data, customer databases, and payment workflows to an international cloud provider (SaaS/IaaS). The Supervisory Board has requested a formal governance, compliance, and legal risk blueprint before approving capital expenditure.`,
        answerStructure: [
          '1. Executive Summary & Problem Formulation',
          '2. Enterprise Governance of IT Architecture (COBIT & Board Mandate)',
          '3. Compliance, Risk Management & Control Framework (ISO 27001 / SOC 2)',
          '4. BSI IT-Grundschutz Protection Requirements & Cloud Security',
          '5. ITSM Transition & Operational Excellence (ITIL V4)',
          '6. Statutory Legal Framework (GDPR, E-Commerce, Contracts)',
          '7. Conclusion & Strategic Recommendations'
        ],
        modelAnswer: `COMPREHENSIVE MASTER'S-LEVEL BLUEPRINT: EURORETAIL AG

1. Introduction & Problem Formulation:
EuroRetail AG faces a strategic inflection point. Migrating mission-critical financial systems (ICFR) and consumer personal data to a public cloud introduces systemic dependency on third-party vendors, expands the cyber threat landscape, and triggers rigorous statutory duties under the GDPR, German Commercial Code (HGB), and international compliance standards. A multi-layered governance and legal framework is required.

2. Enterprise Governance of IT Architecture (COBIT 2019 & ISO/IEC 38500):
- Governance vs Management Division: The Supervisory Board (Governing Body) must execute Evaluate, Direct, and Monitor (EDM), specifically EDM01 (Framework Setting), EDM02 (Benefits Delivery), EDM03 (Risk Optimization), and EDM04 (Resource Optimization). Executive Management operationalizes the transition under APO (Align, Plan, Organize) and BAI (Build, Acquire, Implement).
- Tailoring via Design Factors: The governance system must be customized using Design Factor 6 (Compliance Requirements: High due to GDPR/financial reporting), Design Factor 8 (Sourcing Model: Outsourced Cloud/SaaS), and Design Factor 7 (Role of IT: Strategic).
- Goals Cascade Alignment: Stakeholder expectations for seamless digital shopping translate into Enterprise Goal EG01 (Portfolio of competitive products) and EG07 (Compliance with external laws), cascading into Alignment Goal AG05 (Delivery of I&T services aligned with business requirements) and mapping to objectives BAI03 (Solutions) and BAI06 (Changes).

3. Compliance, Risk Management & Internal Control System (ISO 27001 / SOC 2 / COSO):
- Inherent to Residual Risk Continuum: Management must evaluate inherent risk using Risk = Threat × Vulnerability × Asset Value. Raw exposure from multi-tenant cloud vulnerabilities must be reduced through preventative, detective, and corrective controls so that Residual Risk falls strictly within the Board's approved Risk Appetite.
- Independent Assurance: Require the cloud provider to supply an annual independent SOC 2 Type 2 attestation report covering all 5 Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy) and demonstrate certified compliance with ISO/IEC 27001 (3-year cycle).
- Internal Controls (SOX / Financial Integrity): Deploy IT General Controls (ITGCs) over financial databases, enforcing strict Segregation of Duties (SoD) between developers and production cloud administrators, preventing access creep via quarterly User Access Reviews (UAR).

4. Basic IT Protection According to BSI (IT-Grundschutz):
- Structural Analysis & Modelling: Inventory all migrated components and map to Compendium modules (e.g., SYS.1.1 General Server, APP.4.3 Relational Databases, NET.1.1 Network Architecture, and OPS.2.2 Cloud Usage).
- Protection Requirements Determination: The SAP financial ledger and customer payment databases are classified as VERY HIGH for Confidentiality and Integrity, and HIGH for Availability.
- Governing Principles: Under the Maximum Principle, shared cloud hosts inherit the Very High requirement. The Accumulation Effect elevates availability requirements if all customer portals share a single virtual cluster. To mitigate availability risks, the Distribution Effect must be engineered via multi-region geo-redundant active-active deployment.

5. IT Service Management (ITIL V4):
- Service Value Chain: Coordinate the transition through Design & Transition and Obtain/Build.
- Core Practices:
  * Change Enablement: Classify routine patches as Standard Changes, but treat the cloud database cutover as a major Normal Change requiring CAB risk review and automated rollback plans.
  * Incident & Problem Management: Establish integration between EuroRetail’s internal Service Desk (SPOC) and the cloud vendor’s support tiers, with shared Known Error Databases (KEDB) and clear MTTR escalations.
  * Four Dimensions: Balance Information & Technology with Organizations & People (cloud engineering upskilling), Partners & Suppliers (cloud SLAs), and Value Streams & Processes.

6. Statutory Legal Framework (EU GDPR, E-Commerce & Contracts):
- Data Processing Agreement (GDPR Art. 28): Execute a binding written DPA mandating documented instructions, strict confidentiality, sub-processor consent, and explicit Right-to-Audit clauses allowing EuroRetail and supervisory authorities to inspect vendor security.
- Data Protection Principles: Enforce Privacy by Design (Art. 25(1)) via end-to-end client-side encryption (EuroRetail holding exclusive decryption keys, rendering cloud data unintelligible to vendor staff) and Privacy by Default (Art. 25(2)) with opt-in cookie consent.
- Breach Notification Readiness (Art. 33/34): Contractually bind the cloud processor to report any security breach to EuroRetail "without undue delay". EuroRetail maintains readiness to notify the German Supervisory Authority (DPA) within 72 hours, and data subjects if high risk.
- German E-Commerce Compliance: Ensure the online shop displays a directly accessible Impressum (§ 5 DDG - two-click rule), consumer Right of Withdrawal (§ 312g BGB - 14 calendar days), and compliant checkout button ("Zahlungspflichtig bestellen").

7. Strategic Conclusion & Executive Recommendations:
The transformation should proceed conditionally upon: (1) receipt of a validated SOC 2 Type 2 report, (2) execution of an Art. 28 DPA with audit rights, (3) implementation of multi-region active redundancy (BSI distribution effect), and (4) establishment of board-level EDM03 risk tracking.`,
        rubricItems: [
          { point: 'Rigorous 7-stage Master’s answer structure', marksAllotted: 2 },
          { point: 'COBIT 2019 governance application (Board EDM, Design Factors, Target Cascade)', marksAllotted: 4 },
          { point: 'Risk formula, inherent vs residual risk, control categories/types, ISO 27001/SOC 2 Type 2', marksAllotted: 4 },
          { point: 'BSI IT-Grundschutz (Maximum Principle, Accumulation & Distribution, CIA classification)', marksAllotted: 3 },
          { point: 'ITIL V4 integration (SVC, Change Enablement, Incident/Problem, 4 Dimensions)', marksAllotted: 3 },
          { point: 'Legal & GDPR compliance (Art. 28 DPA, Right-to-Audit, 72h breach, Impressum, 14d withdrawal)', marksAllotted: 4 }
        ],
        examinerAdvice: 'To score 18-20 marks, candidates must demonstrate synthetic mastery: do not treat frameworks in isolation. Directly connect how a COBIT design factor requires a BSI protection analysis, which dictates an ITIL change procedure and a GDPR DPA audit clause.'
      },
      {
        id: 'm1-desc-2',
        unit: 3,
        question: 'Explain the complete risk-and-control logic used in IT compliance, incorporating risk appetite, the risk formula, inherent vs residual risk, control categories and types, and risk treatments.',
        marks: 8,
        suggestedMinutes: 12,
        answerStructure: [
          '1. Risk Appetite defined by the Board',
          '2. Inherent Risk & Canonical Formula (Risk = Threat × Vulnerability × Asset Value)',
          '3. Control Architecture (Categories: Admin/Physical/Technical; Types: Preventative/Detective/Corrective)',
          '4. Residual Risk vs Risk Appetite',
          '5. Four Risk Treatments (Mitigate, Transfer, Avoid, Accept)'
        ],
        modelAnswer: `The risk-and-control logic in IT compliance establishes an end-to-end framework:
1. Risk Appetite: Established by the Board of Directors, defining the broad level of risk the enterprise is willing to accept.
2. Inherent Risk & Formula: Raw exposure assessed prior to controls using: Risk = Threat × Vulnerability × Asset Value. If any factor is zero, risk is zero.
3. Internal Control Architecture: Controls deployed across Categories (Administrative, Physical, Technical/Logical) and Types (Preventative, Deterrent, Detective, Directive, Corrective, Compensatory).
4. Residual Risk: Calculated as Inherent Risk minus Control Impact. Compliant governance mandates that Residual Risk must fall within the approved Risk Appetite.
5. Risk Treatments: When residual risk exceeds appetite, management applies Mitigate (deploy controls), Transfer (shift financial impact via insurance/SLAs), Avoid (terminate risky activity), or Accept (formal sign-off within appetite).`,
        rubricItems: [
          { point: 'Board-level Risk Appetite defined', marksAllotted: 1 },
          { point: 'Risk formula stated accurately (T × V × A)', marksAllotted: 2 },
          { point: 'Inherent vs Residual risk formula and relationship', marksAllotted: 2 },
          { point: 'Control categories and types distinguished with examples', marksAllotted: 2 },
          { point: 'Four risk treatment options articulated', marksAllotted: 1 }
        ],
        examinerAdvice: 'Ensure you state the mathematical formula and clearly explain that residual risk must not exceed risk appetite.'
      },
      {
        id: 'm1-desc-3',
        unit: 2,
        question: 'Explain the structure of the COBIT 2019 Core Model, detailing the five domains, the distinction between governance and management objectives, and the Goals Cascade.',
        marks: 8,
        suggestedMinutes: 12,
        answerStructure: [
          '1. Overview: 40 Objectives across 5 Domains',
          '2. Governance Domain: EDM (5 objectives) and Board role',
          '3. Four Management Domains: APO (14), BAI (11), DSS (6), MEA (4) and Executive role',
          '4. The Goals Cascade: Stakeholder Drivers -> Enterprise Goals (13) -> Alignment Goals (13) -> Objectives (40)'
        ],
        modelAnswer: `The COBIT 2019 Core Model organizes enterprise IT into 40 Governance and Management Objectives across five domains:
1. Governance Domain (1 Domain, 5 Objectives):
- EDM: Evaluate, Direct and Monitor (EDM01-05). Accountable body: Board of Directors. Evaluates stakeholder options, directs strategy through policies, and monitors performance.
2. Management Domains (4 Domains, 35 Objectives):
- APO: Align, Plan and Organize (14 objectives) - strategy, architecture, risk, security.
- BAI: Build, Acquire and Implement (11 objectives) - solution delivery, changes, projects.
- DSS: Deliver, Service and Support (6 objectives) - operational services, incidents, security operations.
- MEA: Monitor, Evaluate and Assess (4 objectives) - performance, internal controls, external compliance.
3. The Goals Cascade (Target Cascade):
Translates Stakeholder Needs into 13 Enterprise Goals (Balanced Scorecard dimensions), which cascade into 13 Alignment Goals, which map directly to the 40 Governance and Management Objectives, ensuring end-to-end strategic alignment and traceability.`,
        rubricItems: [
          { point: '40 objectives count and 5 domains identified', marksAllotted: 2 },
          { point: 'EDM designated as sole governance domain (5 objectives) under Board', marksAllotted: 2 },
          { point: 'APO, BAI, DSS, MEA designated as management domains (35 objectives)', marksAllotted: 2 },
          { point: 'Four-tier Goals Cascade accurately detailed (13 EG, 13 AG, 40 GMO)', marksAllotted: 2 }
        ],
        examinerAdvice: 'Do not miscount the objectives (5+14+11+6+4=40) and remember to use the COBIT 2019 term "Alignment Goals".'
      },
      {
        id: 'm1-desc-4',
        unit: 4,
        question: 'Explain the principles of protection requirement determination under BSI IT-Grundschutz: the Maximum Principle, the Accumulation Effect, and the Distribution Effect.',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: [
          '1. Scope: Protection categories (Normal, High, Very High) across CIA',
          '2. Maximum Principle as baseline default rule',
          '3. Accumulation Effect as upward modifier',
          '4. Distribution Effect as downward modifier with caveat on Confidentiality'
        ],
        modelAnswer: `Under BSI Standard 200-2, protection requirements evaluate damage potential across Confidentiality, Integrity, and Availability across three categories: Normal, High, and Very High (no "Low" exists).
1. Maximum Principle (Maximumprinzip): The default baseline rule. An IT component inherits the HIGHEST protection requirement of any application or business process running on it. Averaging is strictly prohibited.
2. Accumulation Effect (Kumulationseffekt): An upward modifier. When multiple applications with Normal protection aggregate on a single component, their simultaneous failure creates catastrophic combined damage, ELEVATING the component’s requirement to High or Very High.
3. Distribution Effect (Verteilungseffekt): A downward modifier. When redundant or distributed architectures (e.g. geo-redundant clustering) ensure that the failure of an individual component causes no service outage, that individual component’s Availability requirement can be adjusted DOWNWARD. Caveat: This rarely applies to Confidentiality because compromising one node still leaks the data.`,
        rubricItems: [
          { point: 'Identified 3 categories (Normal, High, Very High) across CIA', marksAllotted: 1 },
          { point: 'Maximum Principle explained as baseline (highest wins, no averaging)', marksAllotted: 2 },
          { point: 'Accumulation Effect explained as upward adjustment with example', marksAllotted: 1.5 },
          { point: 'Distribution Effect explained as downward adjustment with redundancy caveat', marksAllotted: 1.5 }
        ],
        examinerAdvice: 'Never average protection requirements, and clearly explain why the Distribution Effect does not easily apply to Confidentiality.'
      }
    ]
  },
  {
    id: 'mock-2',
    title: 'Full Examination Simulator 2',
    subtitle: 'Comprehensive Assessment — 90 Marks (48 MCQs + 1×20m + 2×8m + 1×6m)',
    totalMarks: 90,
    timeLimitMinutes: 120,
    mcqIds: [
      // Unit 1 (8 questions)
      'u1-mcq-11', 'u1-mcq-12', 'u1-mcq-13', 'u1-mcq-14', 'u1-mcq-16', 'u1-mcq-17', 'u1-mcq-19', 'u1-mcq-21',
      // Unit 2 (8 questions)
      'u2-mcq-8', 'u2-mcq-9', 'u2-mcq-10', 'u2-mcq-11', 'u2-mcq-12', 'u2-mcq-14', 'u2-mcq-15', 'u2-mcq-18',
      // Unit 3 (8 questions)
      'u3-mcq-11', 'u3-mcq-12', 'u3-mcq-13', 'u3-mcq-14', 'u3-mcq-15', 'u3-mcq-16', 'u3-mcq-17', 'u3-mcq-20',
      // Unit 4 (8 questions)
      'u4-mcq-10', 'u4-mcq-11', 'u4-mcq-12', 'u4-mcq-13', 'u4-mcq-14', 'u4-mcq-15', 'u4-mcq-16', 'u4-mcq-18',
      // Unit 5 (8 questions)
      'u5-mcq-9', 'u5-mcq-10', 'u5-mcq-11', 'u5-mcq-12', 'u5-mcq-14', 'u5-mcq-15', 'u5-mcq-17', 'u5-mcq-19',
      // Unit 6 (8 questions)
      'u6-mcq-10', 'u6-mcq-11', 'u6-mcq-12', 'u6-mcq-13', 'u6-mcq-14', 'u6-mcq-15', 'u6-mcq-16', 'u6-mcq-18'
    ],
    descriptiveQuestions: [
      {
        id: 'm2-desc-1',
        unit: 6,
        question: 'Case Study: Major Ransomware Cyberattack & Data Breach at MedFintech GmbH. MedFintech GmbH provides cloud-based digital health and payment services across the EU. On Saturday morning, a ransomware attack compromises production servers, encrypting patient health records and exfiltrating financial payment credentials. Formulate an end-to-end 20-mark Master’s response addressing legal breach reporting, ITSM incident & problem response, BSI emergency management / BCM, and long-term compliance remediation.',
        marks: 20,
        suggestedMinutes: 35,
        scenario: `At 03:00 on Saturday, automated SIEM alerts detect unauthorized lateral movement and ransomware execution across MedFintech's AWS production environment. 250,000 patient records (special category data under Art. 9 GDPR) and 100,000 credit card tokens are encrypted, with evidence of data exfiltration to a command-and-control server. Hospital clients are unable to access patient telemetry, threatening emergency healthcare services.`,
        answerStructure: [
          '1. Crisis Overview & Incident Severity Assessment',
          '2. Statutory Legal & Regulatory Emergency Actions (GDPR Art. 33/34 & Penalties)',
          '3. ITSM Incident Management & Service Desk Swarming (ITIL V4)',
          '4. Emergency Management, BCM & Disaster Recovery (BSI 100-4 / 200-4)',
          '5. Problem Management, Root Cause & Known Error Database',
          '6. Long-Term Governance, Compliance & Audit Overhaul (COBIT, ISO 27001, SOC 2)',
          '7. Synthesis & Strategic Board Recommendations'
        ],
        modelAnswer: `COMPREHENSIVE MASTER'S-LEVEL RESPONSE: MEDFINTECH GMBH CRISIS

1. Crisis Overview & Classification:
The incident constitutes a catastrophic personal data breach, critical IT service outage, and severe existential legal exposure. Because special category health data (GDPR Art. 9) and financial credentials are compromised alongside patient-care service outages, the threat to rights, freedoms, and physical health of data subjects is classified as HIGH RISK, and BSI protection requirements are VERY HIGH across Confidentiality, Integrity, and Availability.

2. Statutory Legal Framework (EU GDPR & German Law):
- Controller vs Processor Role: MedFintech acts as a Data Processor for hospital clients, and as a Data Controller for its direct consumer payment app.
- Processor Obligation (Art. 33(2)): As a processor for hospitals, MedFintech must formally notify all hospital controllers WITHOUT UNDUE DELAY (within hours of verification) providing technical forensics, affected patient record categories, and mitigation advice so hospitals can discharge their regulatory duties.
- Controller Obligation (Art. 33(1)): For direct consumer data, MedFintech must notify the German Data Protection Authority (DPA) within 72 HOURS of becoming aware. Notification must detail the nature of breach, DPO contact details, probable consequences, and technical countermeasures.
- Communication to Data Subjects (Art. 34): Because health and payment exfiltration represents a HIGH RISK to natural persons, MedFintech (and hospitals) must inform affected individuals directly without undue delay in clear language, recommending credential changes and fraud monitoring.
- Penalty Avoidance: Proactive cooperation and documented containment mitigate exposure to GDPR Tier 2 fines (up to €20m or 4% global turnover).

3. ITSM Incident Response & Service Desk Swarming (ITIL V4):
- Service Value Chain (Deliver & Support): Activate an Emergency Swarming team combining cybersecurity engineers, cloud architects, database admins, and legal counsel.
- Workaround Deployment: Rather than negotiating with cybercriminals, execute clean failover: isolate infected VPCs, revoke all administrative IAM credentials, and spin up an isolated clean VPC.
- Emergency Changes (ECAB): Deploy emergency software configurations and firewall perimeter lockdowns via expedited Emergency Change authorization.
- Service Desk (SPOC): Centralize communications to hospitals through an emergency status portal with dedicated hotline scripts, ensuring consistent and empathetic user communication.

4. Emergency Management & Business Continuity (BSI 100-4 / 200-4):
- Business Continuity Plan (BCP) Activation: Declare a corporate disaster and convene the Crisis Management Team led by the Emergency Management Officer (Notfallbeauftragter).
- Disaster Recovery Execution: Restore systems from verified, air-gapped, immutable offline backups. Validate Recovery Point Objective (RPO - verifying backup timestamp before ransomware entry) and Recovery Time Objective (RTO - restoring critical patient telemetry within target outage limits).
- Verification & Integrity Testing: Re-verify cryptographic hashes of databases and validate system integrity before reconnecting clinical interfaces to prevent re-infection.

5. Problem Management & Root Cause Elimination (ITIL V4):
- Investigation: Once normal operations are restored, Problem Management investigates how the attackers gained access (e.g., compromised VPN credentials lacking MFA, unpatched Log4j vulnerability, or access creep).
- Known Error Database (KEDB): Document the vulnerability, attack vector, and defensive workarounds in the KEDB to accelerate future detection.
- Permanent Structural Fix: Raise formal Normal Change requests to mandate FIDO2 hardware MFA, deploy Zero Trust Network Architecture (ZTNA), and implement automated privileged access management (PAM).

6. Long-Term Governance & Audit Remediation (COBIT 2019 / ISO 27001):
- Board EDM Mandate: The Board of Directors must review EDM03 (Risk Optimization) and elevate cybersecurity budget allocations under EDM04 (Resource Optimization).
- COBIT Design Factors: Re-evaluate Design Factor 3 (Risk Profile) and Design Factor 5 (Threat Landscape), elevating capability targets for APO13 (Managed Security) and MEA02 (Internal Controls) to CMMI Level 4 (Quantitatively Managed).
- Recertification: Commission an independent ISO/IEC 27001 surveillance audit and an updated SOC 2 Type 2 attestation demonstrating that remediated controls operated effectively.

7. Concluding Recommendations:
Execute immediate 72-hour regulatory filings, restore clean immutable backups under BSI 200-4, deploy hardware MFA, and mandate quarterly User Access Reviews to eliminate access creep.`,
        rubricItems: [
          { point: 'Rigorous 7-stage Master’s answer structure', marksAllotted: 2 },
          { point: 'GDPR legal obligations (Art. 33 72-hour notice, Art. 34 data subjects, Art. 28 processor duties, fines)', marksAllotted: 4 },
          { point: 'ITIL V4 Incident & Problem response (Swarming, Workarounds, KEDB, Root cause, Emergency CAB)', marksAllotted: 4 },
          { point: 'BSI 100-4/200-4 Emergency Management (BCP, BIA, RTO/RPO, immutable backups, Notfallbeauftragter)', marksAllotted: 4 },
          { point: 'Technical control remediation (MFA, Access Creep, Segregation of Duties, Zero Trust)', marksAllotted: 3 },
          { point: 'COBIT governance overhaul (Board EDM, Design Factors, Capability Level 4)', marksAllotted: 3 }
        ],
        examinerAdvice: 'Demonstrate precise knowledge of the dual controller/processor role. A company acting as both must notify the DPA within 72 hours for its own data, and notify its hospital clients without undue delay for outsourced data.'
      },
      {
        id: 'm2-desc-2',
        unit: 5,
        question: 'Explain all six activities of the ITIL V4 Service Value Chain (SVC) and demonstrate how they combine into dynamic value streams for incident resolution and software release.',
        marks: 8,
        suggestedMinutes: 12,
        answerStructure: [
          '1. Overview of the Service Value Chain within the SVS',
          '2. Six Activities: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support (PIEDOD)',
          '3. Dynamic Value Stream 1: Incident Resolution Value Stream',
          '4. Dynamic Value Stream 2: New Software Release Value Stream'
        ],
        modelAnswer: `The ITIL V4 Service Value Chain (SVC) is the central operating model within the SVS, comprising six non-linear activities:
1. Plan: Ensures shared understanding of vision, status, and improvement direction.
2. Improve: Drives continual improvement across products, services, and dimensions.
3. Engage: Provides understanding of stakeholder needs, relationship management, and demand capture.
4. Design and Transition: Ensures products/services meet expectations for quality, cost, and time-to-market.
5. Obtain/Build: Ensures service components are available and meet agreed specifications.
6. Deliver and Support: Ensures day-to-day delivery, hosting, monitoring, and support operations.
Value Stream Examples:
- Incident Resolution Value Stream: Engage (user calls desk) -> Deliver & Support (technician investigates & deploys workaround) -> Improve (post-incident review).
- Software Feature Value Stream: Engage (user demand) -> Plan (roadmap) -> Design & Transition (architecture) -> Obtain/Build (coding & testing) -> Design & Transition (release deployment) -> Deliver & Support (monitoring in production).`,
        rubricItems: [
          { point: 'All 6 activities named and defined accurately (PIEDOD)', marksAllotted: 3 },
          { point: 'Non-linear, modular nature of SVC explained', marksAllotted: 2 },
          { point: 'Incident resolution value stream mapped step-by-step', marksAllotted: 1.5 },
          { point: 'Software release value stream mapped step-by-step', marksAllotted: 1.5 }
        ],
        examinerAdvice: 'Make sure you explicitly provide the step-by-step flow of both value streams to secure full marks.'
      },
      {
        id: 'm2-desc-3',
        unit: 6,
        question: 'Compare Pseudonymisation vs Anonymisation and Privacy by Design vs Privacy by Default under the GDPR.',
        marks: 8,
        suggestedMinutes: 12,
        answerStructure: [
          '1. Pseudonymisation (Art. 4(5)): Reversible, still personal data under GDPR scope',
          '2. Anonymisation (Recital 26): Irreversible, falls outside GDPR scope',
          '3. Privacy by Design (Art. 25(1)): Technical architecture from inception',
          '4. Privacy by Default (Art. 25(2)): Strictest privacy settings out-of-the-box'
        ],
        modelAnswer: `A. Pseudonymisation vs Anonymisation:
1. Pseudonymisation (GDPR Art. 4(5)): Processing personal data such that it can no longer be attributed to a specific data subject without additional separate information (stored separately under strict technical controls). It is REVERSIBLE. Crucially, pseudonymised data is STILL PERSONAL DATA and remains fully within GDPR regulatory scope.
2. Anonymisation (Recital 26): The irreversible removal of personal identifiers so that the data subject is no longer identifiable by any reasonable means. Once genuinely anonymized, the data is NO LONGER PERSONAL DATA, and GDPR principles and fines cease to apply.

B. Privacy by Design vs Privacy by Default (Article 25):
1. Privacy by Design (Art. 25(1)): Mandates that organizations implement appropriate technical and organizational measures (TOMs - e.g. encryption, access controls) from the earliest design stage of any system or service.
2. Privacy by Default (Art. 25(2)): Mandates that, by default, systems only process personal data strictly necessary for each specific purpose. The most privacy-friendly settings must be activated out-of-the-box without requiring user intervention (e.g. no pre-ticked consent checkboxes, location tracking disabled until user opts in).`,
        rubricItems: [
          { point: 'Pseudonymisation defined as reversible and still personal data under GDPR', marksAllotted: 2 },
          { point: 'Anonymisation defined as irreversible and outside GDPR scope', marksAllotted: 2 },
          { point: 'Privacy by Design explained as architectural engineering from day one', marksAllotted: 2 },
          { point: 'Privacy by Default explained as strictest out-of-the-box settings', marksAllotted: 2 }
        ],
        examinerAdvice: 'Emphasize that pseudonymised data remains subject to GDPR. This is the single most heavily tested distinction.'
      },
      {
        id: 'm2-desc-4',
        unit: 6,
        question: 'Contrast Patents, German Utility Models (Gebrauchsmuster), and Copyright (Urheberrecht) in terms of subject matter, registration requirement, and duration of protection.',
        marks: 6,
        suggestedMinutes: 10,
        answerStructure: [
          '1. Patent: Technical inventions, formal examination, 20 years from filing',
          '2. Utility Model: Technical devices, fast unexamined registration, maximum 10 years',
          '3. Copyright: Creative works and software code, automatic creation without registration, 70 years post-mortem'
        ],
        modelAnswer: `Under German and European intellectual property law:
1. Patent (Patentrecht):
- Subject Matter: Technical inventions solving a technical problem with absolute novelty, inventive step, and industrial applicability.
- Registration: Requires formal application, comprehensive examination by the patent office (DPMA/EPO), and official grant.
- Duration: 20 years from the application filing date.

2. Utility Model (Gebrauchsmuster - "Petty Patent"):
- Subject Matter: Technical inventions/devices (pure software processes are generally excluded in Germany).
- Registration: Rapid, inexpensive registration without substantive examination of novelty by DPMA.
- Duration: Maximum 10 years (initial 3 years, renewable up to 10).

3. Copyright (Urheberrecht):
- Subject Matter: Personal intellectual creative creations, including literary works and computer software source/object code.
- Registration: NONE. Arises AUTOMATICALLY upon creation of the work. No registration or copyright symbol (©) is required.
- Duration: 70 years after the death of the author (post mortem auctoris).`,
        rubricItems: [
          { point: 'Patent correctly detailed (20 years, technical inventions, examined)', marksAllotted: 2 },
          { point: 'Utility model correctly detailed (10 years, technical, unexamined)', marksAllotted: 2 },
          { point: 'Copyright correctly detailed (70 years post-mortem, automatic creation)', marksAllotted: 2 }
        ],
        examinerAdvice: 'State the exact durations (20 yrs, 10 yrs, 70 yrs post-mortem) and emphasize the automatic nature of copyright.'
      }
    ]
  }
];
