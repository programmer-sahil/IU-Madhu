import re

# Update unit-5 index.ts
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/index.ts', 'r') as f:
    u5_content = f.read()

u5_append = """    ]
  },
  importantQuestions: unit5ImportantQuestions,
  flashcards: unit5Flashcards,
  mcqs: unit5Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Explain the 4 core RUP phases (Inception, Elaboration, Construction, Transition) and 2 optional phases (Production, Disposal)",
    "Describe RUP disciplines and explain the workload distribution hump chart",
    "Contrast Throw-away Prototyping with Evolutionary Prototyping and explain why prototypes != production",
    "State the 4 core values and 12 principles of the Agile Manifesto (2001)",
    "Analyze self-organizing teams, mutual accountability, and software release versioning (major.minor.build.revision)",
    "Explain Scrum's 3 empirical pillars (Transparency, Inspection, Adaptation) and 5 core values",
    "Differentiate the 3 Scrum roles (Product Owner, Scrum Master, Developers) and confirm the absence of a Project Manager",
    "Explain the 3 Scrum artifacts (Product Backlog, Sprint Backlog, Increment) and Definition of Done",
    "Explain the 4 Scrum events and enforce Sprint time-box inviolability (never extend deadlines)",
    "Compare Pure Waterfall, Waterfall with Feedback, and the Sashimi (overlapping) model",
    "Analyze the V-Model and its 1:1 horizontal verification traceability links",
    "Apply decision criteria to select between Plan-driven and Agile methodologies for small projects"
  ]
};
"""

u5_new = re.sub(r'    \]\s*\}\s*\};\s*$', u5_append, u5_content.strip())
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/index.ts', 'w') as f:
    f.write(u5_new)
print("Updated unit-5/index.ts with mcqs, flashcards, questions, and checklist")

# Update unit-6 index.ts
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/index.ts', 'r') as f:
    u6_content = f.read()

u6_append = """    ]
  },
  importantQuestions: unit6ImportantQuestions,
  flashcards: unit6Flashcards,
  mcqs: unit6Mcqs,
  activeRecall: [],
  completionChecklist: [
    "Detail the PMBOK 5 Process Groups (2-24-8-11-2 = 47 processes) and 10 Knowledge Areas",
    "Differentiate Product Scope (features/functions) from Project Scope (work performed)",
    "Explain the PMBOK Performance Measurement Baseline (PMB) and Earned Value Management",
    "Detail the Change Control workflow and Change Control Board (CCB) authority",
    "Explain PRINCE2's 7-7-7 architecture (7 Principles, 7 Themes, 7 Processes)",
    "Detail the 4 PRINCE2 Management Levels and Project Board triad (Executive, Senior User, Senior Supplier)",
    "Apply 'Manage by Stages' and 'Manage by Exception' across the 6 tolerance variables",
    "Describe PRINCE2 Product-Based Planning (PBS, Product Descriptions, Product Flow Diagram)",
    "Compare and contrast PMBOK and PRINCE2 as complementary standards",
    "Deconstruct the Multi-Project hierarchy (Portfolio, Programme, Project) and 3 PMO models (Supportive, Controlling, Directive)",
    "Explain Scrum of Scrums (SoS) mechanics and the bilateral 4th impediment question",
    "Analyze Large-Scale Scrum (LeSS single-source rules: 1 PO, 1 Backlog for 8 teams) and LeSS Huge (Area Product Owners)",
    "Detail the SAFe Agile Release Train (ART, 50-125 people) and CALMR DevOps mindset",
    "Contrast PM authority across Functional, Matrix (Weak, Balanced, Strong), and Projectized structures",
    "Differentiate Iterative (low fidelity all features), Incremental (full fidelity few features), and Agile lifecycles",
    "Apply the comprehensive methodology selection framework (Predictive, Adaptive, Hybrid)"
  ]
};
"""

u6_new = re.sub(r'    \]\s*\}\s*\};\s*$', u6_append, u6_content.strip())
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/index.ts', 'w') as f:
    f.write(u6_new)
print("Updated unit-6/index.ts with mcqs, flashcards, questions, and checklist")
