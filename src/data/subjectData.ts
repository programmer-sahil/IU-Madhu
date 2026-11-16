import {
  UnitData,
  MasterComparison,
  ExamTrapItem,
  HighYieldNumber,
  MockExam,
  MCQ,
  Flashcard,
  DescriptiveQuestion,
} from '../types';
import { SubjectSlug } from '../types/subject';

// Corporate Governance data (existing)
import {
  allUnits as cgitUnits,
  getAllMcqs as getCgitMcqs,
  getAllFlashcards as getCgitFlashcards,
  getAllQuestions as getCgitQuestions,
  getUnitById as getCgitUnitById,
} from './units';
import { masterComparisons as cgitComparisons } from './comparisons';
import { examTrapsData as cgitExamTraps } from './examTraps';
import { highYieldNumbers as cgitNumbers } from './numbers';
import { mockExams as cgitMockExams } from './mockTests';

// Re-export CGIT datasets
export {
  cgitUnits,
  getCgitMcqs,
  getCgitFlashcards,
  getCgitQuestions,
  getCgitUnitById,
  cgitComparisons,
  cgitExamTraps,
  cgitNumbers,
  cgitMockExams,
};

// ITPM data (Units 1 & 2 fully populated with real IU exam content; Units 3-6 coming soon)
import {
  itpmUnits,
  itpmComparisons,
  itpmExamTraps,
  itpmNumbers,
  itpmMockExams,
} from './subjects/itpm';
export { itpmUnits, itpmComparisons, itpmExamTraps, itpmNumbers, itpmMockExams };

export interface SubjectData {
  units: UnitData[];
  comparisons: MasterComparison[];
  examTraps: ExamTrapItem[];
  numbers: HighYieldNumber[];
  mockExams: MockExam[];
  getAllMcqs: () => MCQ[];
  getAllFlashcards: () => Flashcard[];
  getAllQuestions: () => DescriptiveQuestion[];
  getUnitById: (id: number) => UnitData | undefined;
}

export const subjectDataMap: Record<SubjectSlug, SubjectData> = {
  'corporate-governance': {
    units: cgitUnits,
    comparisons: cgitComparisons,
    examTraps: cgitExamTraps,
    numbers: cgitNumbers,
    mockExams: cgitMockExams,
    getAllMcqs: getCgitMcqs,
    getAllFlashcards: getCgitFlashcards,
    getAllQuestions: getCgitQuestions,
    getUnitById: (id: number) => cgitUnits.find(u => u.id === id) || getCgitUnitById(id),
  },
  'it-project-management': {
    units: itpmUnits,
    comparisons: itpmComparisons,
    examTraps: itpmExamTraps,
    numbers: itpmNumbers,
    mockExams: itpmMockExams,
    getAllMcqs: () => itpmUnits.flatMap(u => u.mcqs),
    getAllFlashcards: () => itpmUnits.flatMap(u => u.flashcards),
    getAllQuestions: () => itpmUnits.flatMap(u => u.importantQuestions),
    getUnitById: (id: number) => itpmUnits.find(u => u.id === id),
  },
};

/**
 * Get full data bundle for a specific subject by slug.
 * Falls back to 'corporate-governance' if slug is unknown or undefined.
 */
export function getSubjectData(slug?: SubjectSlug | string): SubjectData {
  if (!slug) return subjectDataMap['corporate-governance'];
  return subjectDataMap[slug as SubjectSlug] || subjectDataMap['corporate-governance'];
}

/**
 * Get all units for a given subject.
 */
export function getSubjectUnits(slug?: SubjectSlug | string): UnitData[] {
  return getSubjectData(slug).units;
}

/**
 * Find a unit by its numeric ID for a given subject.
 */
export function getSubjectUnitById(slug: SubjectSlug | string | undefined, id: number): UnitData | undefined {
  return getSubjectData(slug).getUnitById(id);
}

/**
 * Get all MCQs across all units for a given subject.
 */
export function getSubjectMcqs(slug?: SubjectSlug | string): MCQ[] {
  return getSubjectData(slug).getAllMcqs();
}

/**
 * Get all flashcards across all units for a given subject.
 */
export function getSubjectFlashcards(slug?: SubjectSlug | string): Flashcard[] {
  return getSubjectData(slug).getAllFlashcards();
}

/**
 * Get all descriptive questions across all units for a given subject.
 */
export function getSubjectQuestions(slug?: SubjectSlug | string): DescriptiveQuestion[] {
  return getSubjectData(slug).getAllQuestions();
}

/**
 * Get all master comparison tables for a given subject.
 */
export function getSubjectComparisons(slug?: SubjectSlug | string): MasterComparison[] {
  return getSubjectData(slug).comparisons;
}

/**
 * Get all exam traps for a given subject.
 */
export function getSubjectExamTraps(slug?: SubjectSlug | string): ExamTrapItem[] {
  return getSubjectData(slug).examTraps;
}

/**
 * Get all high-yield numbers for a given subject.
 */
export function getSubjectNumbers(slug?: SubjectSlug | string): HighYieldNumber[] {
  return getSubjectData(slug).numbers;
}

/**
 * Get all mock exams for a given subject.
 */
export function getSubjectMockExams(slug?: SubjectSlug | string): MockExam[] {
  return getSubjectData(slug).mockExams;
}

/**
 * Find a specific mock exam by ID for a given subject.
 */
export function getSubjectMockExamById(slug: SubjectSlug | string | undefined, mockId: string): MockExam | undefined {
  return getSubjectData(slug).mockExams.find(m => m.id === mockId);
}
