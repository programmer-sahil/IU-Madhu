with open('src/data/subjects/itpm/numbers.ts') as f:
    text = f.read()

if 'itpm-num-019' not in text:
    pos = text.rfind('];')
    u3_u4_numbers = '''  // --- Unit 3 Numbers ---
  {
    id: 'itpm-num-019',
    number: '9',
    unit: 3,
    framework: 'A-C-C-P-R-D-U-V-V',
    label: 'Quality Attributes of a Defensible Cost Estimate',
    context: 'Accuracy, Confidence level, Credibility, Precision, Reliability, Documentation, Uniformity, Validity, Verification.',
    examQuestionPrompt: 'Which nine attributes define the quality of a cost estimate according to Unit 3?',
    trapToAvoid: 'Do not confuse Precision (granularity/decimals) with Accuracy (closeness to real cost).'
  },
  {
    id: 'itpm-num-020',
    number: '5',
    unit: 3,
    framework: 'FPA',
    label: 'Function Point Analysis Elementary Function Types',
    context: 'Inputs, Outputs, Inquiries (Transaction functions) and Interfaces, Files (Data functions). Memory aid: I-O-Q-I-F.',
    examQuestionPrompt: 'What are the five elementary function types classified in Function Point Analysis?',
    trapToAvoid: 'Inputs and Inquiries share 2/4/6 weights, while Outputs have 3/5/7 weights.'
  },
  {
    id: 'itpm-num-021',
    number: '0.65',
    unit: 3,
    framework: 'FPA',
    label: 'CAF Baseline Constant',
    context: 'Complexity Adjustment Factor formula: CAF = 0.01 * TDI + 0.65. With TDI=34, CAF = 0.99.',
    examQuestionPrompt: 'What is the baseline constant in the Complexity Adjustment Factor (CAF) equation?',
    trapToAvoid: 'Do not forget to multiply Total Degree of Influence (TDI) by 0.01 before adding 0.65.'
  },
  {
    id: 'itpm-num-022',
    number: '4',
    unit: 3,
    framework: 'EVM',
    label: 'Core Variance and Performance Index Formulas',
    context: 'SV = EV - PV, CV = EV - AC, CPI = EV / AC, SPI = EV / PV. EV always leads.',
    examQuestionPrompt: 'State the four foundational Earned Value Management formulas for variance and efficiency.',
    trapToAvoid: 'VALUE FIRST: EV always leads (EV - PV, EV - AC). Never subtract EV from PV or AC.'
  },
  {
    id: 'itpm-num-023',
    number: '25/75',
    unit: 3,
    framework: 'EVM',
    label: 'Earned Value Crediting Rule for Software Work',
    context: '25% credited at start/preparation, 75% credited upon completion when continuous measurement is difficult.',
    examQuestionPrompt: 'What EVM crediting rule is recommended when intellectual work progress is hard to measure continuously?',
    trapToAvoid: 'It is 25% at initiation and 75% at completion, NOT 50/50.'
  },
  {
    id: 'itpm-num-024',
    number: '4',
    unit: 3,
    framework: 'Risk Management',
    label: 'Continuous Risk Management Functions (I-A-M-M)',
    context: 'Identify, Assess, Mitigate, Monitor.',
    examQuestionPrompt: 'Which four continuous functions make up the IT risk management cycle?',
    trapToAvoid: 'I-A-M-M is the 4-step process; M-A-T-A (Mitigate, Avoid, Transfer, Accept) are the 4 treatment choices.'
  },
  {
    id: 'itpm-num-025',
    number: '4',
    unit: 3,
    framework: 'Risk Treatment',
    label: 'Risk Response Strategies (M-A-T-A)',
    context: 'Avoid, Mitigate, Transfer, Accept.',
    examQuestionPrompt: 'Enumerate the four standard risk treatment strategies in IT projects.',
    trapToAvoid: 'Do not confuse Mitigate (the treatment) with the overarching Risk Management lifecycle.'
  },
  {
    id: 'itpm-num-026',
    number: '5',
    unit: 3,
    framework: 'Risk Maturity',
    label: 'Organizational Risk Maturity Levels (A-A-O-M-A)',
    context: 'Level 1 Ad hoc, Level 2 Abbreviated, Level 3 Organized, Level 4 Managed, Level 5 Adaptive.',
    examQuestionPrompt: 'Identify the five levels of IT risk management organizational maturity.',
    trapToAvoid: 'Level 1 is Ad hoc; Level 2 is Abbreviated (not Absent); Level 5 is Adaptive.'
  },

  // --- Unit 4 Numbers ---
  {
    id: 'itpm-num-027',
    number: '3',
    unit: 4,
    framework: 'Vision Keeping',
    label: 'Strategic Alignment Hierarchy Levels',
    context: 'Vision ("Where we want to be"), Mission ("What we do and why"), Strategy ("How we get there").',
    examQuestionPrompt: 'What three hierarchical levels link long-term organizational transformation to tactical execution?',
    trapToAvoid: 'Vision is the future destination; Mission is current purpose; Strategy is the roadmap.'
  },
  {
    id: 'itpm-num-028',
    number: '4',
    unit: 4,
    framework: 'Competing Values',
    label: 'Structural Project Culture Archetypes',
    context: 'Clan (internal/flex), Adhocracy (external/flex), Hierarchy (internal/control), Market (external/control).',
    examQuestionPrompt: 'Name the four culture quadrants of the Competing Values Framework.',
    trapToAvoid: 'Clan is internal/flexible; Adhocracy is external/flexible. Both value flexibility.'
  },
  {
    id: 'itpm-num-029',
    number: '4',
    unit: 4,
    framework: 'Power-Interest Grid',
    label: 'Stakeholder Prioritization Quadrants',
    context: 'Manage Closely (High/High), Keep Satisfied (High Power/Low Interest), Keep Informed (Low Power/High Interest), Monitor (Low/Low).',
    examQuestionPrompt: 'State the management strategy for all four quadrants of the Power-Interest Grid.',
    trapToAvoid: 'High Power / Low Interest is Keep Satisfied, NOT Keep Informed.'
  },
  {
    id: 'itpm-num-030',
    number: '3',
    unit: 4,
    framework: 'Salience Model',
    label: 'Mitchell, Agle & Wood Stakeholder Dimensions',
    context: 'Power (ability to impose will), Legitimacy (moral/legal claim), Urgency (time-sensitivity).',
    examQuestionPrompt: 'Which three attributes determine stakeholder salience in the Mitchell, Agle & Wood model?',
    trapToAvoid: 'The attributes are Power, Legitimacy, Urgency. Interest is NOT one of the salience dimensions.'
  },
  {
    id: 'itpm-num-031',
    number: '7',
    unit: 4,
    framework: 'Salience Model',
    label: 'Stakeholder Salience Classes',
    context: 'Latent (Dormant, Discretionary, Demanding), Expectant (Dominant, Dangerous, Dependent), Definite (all 3).',
    examQuestionPrompt: 'How many stakeholder categories are produced by combinations of the three salience attributes?',
    trapToAvoid: 'A Dangerous stakeholder has Power + Urgency but lacks Legitimacy.'
  },
  {
    id: 'itpm-num-032',
    number: '1',
    unit: 4,
    framework: 'RACI Governance',
    label: 'Maximum Accountable Persons per Work Package',
    context: 'Exactly ONE person must be Accountable (A) for any given activity to prevent diffusion of responsibility.',
    examQuestionPrompt: 'How many individuals can be designated as Accountable for a single deliverable in a RACI chart?',
    trapToAvoid: 'Multiple people can be Responsible, but exactly ONE person must be Accountable.'
  },
  {
    id: 'itpm-num-033',
    number: '5',
    unit: 4,
    framework: 'Stakeholder Engagement',
    label: 'Stakeholder Engagement Spectrum Levels',
    context: 'Unaware, Resistant, Neutral, Supportive, Leading.',
    examQuestionPrompt: 'List the five stakeholder engagement levels evaluated in the assessment matrix.',
    trapToAvoid: 'The order is Unaware -> Resistant -> Neutral -> Supportive -> Leading.'
  },
  {
    id: 'itpm-num-034',
    number: '5',
    unit: 4,
    framework: 'Conflict Management',
    label: 'Conflict-Resolution Techniques',
    context: 'Collaborate (Win-Win), Compromise (Give-and-Take), Force (Win-Lose), Smooth (Lose-Win), Withdraw (No Resolution).',
    examQuestionPrompt: 'Identify the five conflict-handling styles based on assertiveness and cooperativeness.',
    trapToAvoid: 'Compromise is NOT a win-win; it is a give-and-take involving mutual loss. Collaborate is the true win-win.'
  },
  {
    id: 'itpm-num-035',
    number: '4',
    unit: 4,
    framework: 'Negotiation Spiral',
    label: 'Dynamic Phases of Project Negotiation',
    context: 'Intelligence -> Perception -> Strategy -> Communication (I-P-S-C).',
    examQuestionPrompt: 'Name the four phases of the negotiation spiral in IT projects.',
    trapToAvoid: 'Negotiation starts with Intelligence (fact gathering), NOT Communication.'
  }
];
'''
    new_text = text[:pos] + ',\n' + u3_u4_numbers
    with open('src/data/subjects/itpm/numbers.ts', 'w') as f:
        f.write(new_text)
    print('Successfully added Units 3 and 4 numbers to numbers.ts!')
else:
    print('Numbers already present.')

