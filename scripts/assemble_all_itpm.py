import os, re

# 1. Update registry.ts for ITPM units
reg_path = "src/data/subjects/registry.ts"
with open(reg_path, "r") as f:
    reg_text = f.read()

itpm_pos = reg_text.find("itProjectManagementConfig")
itpm_text = reg_text[itpm_pos:]

# Set Unit 3 and Unit 4 status to 'active'
itpm_text = re.sub(
    r"(id:\s*3,\s*\n\s*number:\s*3,[\s\S]*?status:\s*)'[^']+'",
    r"\1'active'",
    itpm_text,
    count=1
)
itpm_text = re.sub(
    r"(id:\s*4,\s*\n\s*number:\s*4,[\s\S]*?status:\s*)'[^']+'",
    r"\1'active'",
    itpm_text,
    count=1
)

reg_text = reg_text[:itpm_pos] + itpm_text
with open(reg_path, "w") as f:
    f.write(reg_text)
print("Updated registry.ts: Unit 1, 2, 3, 4 are active!")

# 2. Update units.ts
units_ts = '''import { UnitData, UnitId } from '../../../types';
import { unit1Data } from './unit-1';
import { unit2Data } from './unit-2';
import { unit3Data } from './unit-3';
import { unit4Data } from './unit-4';
import { itProjectManagementConfig } from '../registry';

// Units 5 to 6 as coming-soon shells with official syllabus headers
const comingSoonUnits: UnitData[] = itProjectManagementConfig.units
  .filter(u => u.id > 4)
  .map(u => {
    const unitId = u.id as UnitId;
    return {
      id: unitId,
      code: `DLMBITPAM01-U0${u.id}`,
      title: u.title,
      subtitle: u.subtitle || '',
      estimatedTime: '2 hours',
      color: 'from-slate-700 to-slate-900',
      gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      badge: 'Coming Soon',
      overview: `Official IU International University curriculum for ${u.title} (Module DLMBITPAM01). Content preparation in progress. Units 1 through 4 are fully active and exam-ready.`,
      summarySections: u.sections.map((s, idx) => {
        const associatedTopics = u.topics.filter((_, tIdx) => tIdx % u.sections.length === idx);
        return {
          title: `${s.number} ${s.title}`,
          summaryParagraph: `Curriculum section ${s.number}: ${s.title}. Content currently in preparation.`,
          keyPoints: associatedTopics.length > 0 ? associatedTopics : [s.title],
          examInsight: `Examinable knowledge area under Module DLMBITPAM01: ${s.title}.`
        };
      }),
      keyConcepts: [],
      cheatSheet: {
        mustMemorize: [],
        coreDefinitions: [],
        importantNumbers: [],
        frameworkNames: [],
        processes: [],
        comparisons: [],
        examTraps: [],
        memoryShortcuts: []
      },
      importantQuestions: [],
      flashcards: [],
      mcqs: [],
      activeRecall: [],
      completionChecklist: u.topics.map(t => `Prepare ${t} upon release`)
    };
  });

export const itpmUnits: UnitData[] = [
  unit1Data,
  unit2Data,
  unit3Data,
  unit4Data,
  ...comingSoonUnits
];

export const allUnits: UnitData[] = itpmUnits;

export const getUnitById = (id: number): UnitData | undefined => {
  return itpmUnits.find(u => u.id === id);
};

export const getAllMcqs = () => {
  return itpmUnits.flatMap(u => u.mcqs);
};

export const getAllFlashcards = () => {
  return itpmUnits.flatMap(u => u.flashcards);
};

export const getAllQuestions = () => {
  return itpmUnits.flatMap(u => u.importantQuestions);
};
'''

with open("src/data/subjects/itpm/units.ts", "w") as f:
    f.write(units_ts)
print("Updated units.ts!")

# 3. Update comparisons.ts
comparisons_ts = '''import { MasterComparison } from '../../../types';
import { unit1Comparisons } from './unit-1/comparisons';
import { unit2MasterComparisons } from './unit-2/comparisons';
import { unit3Comparisons } from './unit-3/comparisons';
import { unit4Comparisons } from './unit-4/comparisons';

export const itpmComparisons: MasterComparison[] = [
  // --- Unit 1 Master Comparisons ---
  ...unit1Comparisons,
  // --- Unit 2 Master Comparisons ---
  ...unit2MasterComparisons,
  // --- Unit 3 Master Comparisons ---
  ...unit3Comparisons,
  // --- Unit 4 Master Comparisons ---
  ...unit4Comparisons
];
'''

with open("src/data/subjects/itpm/comparisons.ts", "w") as f:
    f.write(comparisons_ts)
print("Updated comparisons.ts!")

# 4. Update examTraps.ts
traps_ts = '''import { ExamTrapItem } from '../../../types';
import { unit1ExamTraps } from './unit-1/traps';
import { unit2ExamTraps } from './unit-2/traps';
import { unit3ExamTraps } from './unit-3/traps';
import { unit4ExamTraps } from './unit-4/traps';

export const itpmExamTraps: ExamTrapItem[] = [
  // --- Unit 1 Exam Traps ---
  ...unit1ExamTraps,
  // --- Unit 2 Exam Traps ---
  ...unit2ExamTraps,
  // --- Unit 3 Exam Traps ---
  ...unit3ExamTraps,
  // --- Unit 4 Exam Traps ---
  ...unit4ExamTraps
];
'''

with open("src/data/subjects/itpm/examTraps.ts", "w") as f:
    f.write(traps_ts)
print("Updated examTraps.ts!")

# 5. Update mockTests.ts
with open("src/data/subjects/itpm/mockTests.ts", "r") as f:
    mock_code = f.read()

if "unit3MockExams" not in mock_code:
    mock_code = mock_code.replace("import { unit2Mcqs } from './unit-2';", "import { unit2Mcqs } from './unit-2';\nimport { unit3MockExams } from './unit-3/mockExams';\nimport { unit4MockExams } from './unit-4/mockExams';")
    pos_end = mock_code.rfind("];")
    mock_code = mock_code[:pos_end] + "  // --- Unit 3 Mock Exams ---\n  ...unit3MockExams,\n  // --- Unit 4 Mock Exams ---\n  ...unit4MockExams\n];\n"
    with open("src/data/subjects/itpm/mockTests.ts", "w") as f:
        f.write(mock_code)
    print("Updated mockTests.ts with Unit 3 and Unit 4 full mock exams!")

# 6. Update index.ts
idx_ts = '''export * from './units';
export * from './comparisons';
export * from './examTraps';
export * from './numbers';
export * from './mockTests';
export { unit1Data } from './unit-1';
export { unit2Data } from './unit-2';
export { unit3Data } from './unit-3';
export { unit4Data } from './unit-4';
export { unit3Formulas } from './unit-3/formulas';
export { unit4Scenarios } from './unit-4/scenarios';
'''

with open("src/data/subjects/itpm/index.ts", "w") as f:
    f.write(idx_ts)
print("Updated itpm/index.ts!")
