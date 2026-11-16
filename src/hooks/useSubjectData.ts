import { useMemo } from 'react';
import { useSubject } from '../contexts/SubjectContext';
import {
  getSubjectData,
  SubjectData,
} from '../data/subjectData';
import { SubjectSlug } from '../types/subject';
import {
  UnitData,
  MCQ,
  Flashcard,
  DescriptiveQuestion,
  MasterComparison,
  ExamTrapItem,
  HighYieldNumber,
  MockExam,
} from '../types';

/**
 * Hook that provides the complete dataset for the current active subject
 * (or an explicitly provided subject slug).
 */
export function useSubjectData(slugOverride?: SubjectSlug | string): SubjectData {
  const { currentSlug } = useSubject();
  const slug = slugOverride || currentSlug;
  return useMemo(() => getSubjectData(slug), [slug]);
}

/**
 * Hook that returns the units for the active subject.
 */
export function useSubjectUnits(slugOverride?: SubjectSlug | string): UnitData[] {
  const data = useSubjectData(slugOverride);
  return data.units;
}

/**
 * Hook that returns all MCQs for the active subject.
 */
export function useSubjectMcqs(slugOverride?: SubjectSlug | string): MCQ[] {
  const data = useSubjectData(slugOverride);
  return useMemo(() => data.getAllMcqs(), [data]);
}

/**
 * Hook that returns all flashcards for the active subject.
 */
export function useSubjectFlashcards(slugOverride?: SubjectSlug | string): Flashcard[] {
  const data = useSubjectData(slugOverride);
  return useMemo(() => data.getAllFlashcards(), [data]);
}

/**
 * Hook that returns all descriptive questions for the active subject.
 */
export function useSubjectQuestions(slugOverride?: SubjectSlug | string): DescriptiveQuestion[] {
  const data = useSubjectData(slugOverride);
  return useMemo(() => data.getAllQuestions(), [data]);
}

/**
 * Hook that returns all comparisons for the active subject.
 */
export function useSubjectComparisons(slugOverride?: SubjectSlug | string): MasterComparison[] {
  const data = useSubjectData(slugOverride);
  return data.comparisons;
}

/**
 * Hook that returns all exam traps for the active subject.
 */
export function useSubjectExamTraps(slugOverride?: SubjectSlug | string): ExamTrapItem[] {
  const data = useSubjectData(slugOverride);
  return data.examTraps;
}

/**
 * Hook that returns all high yield numbers for the active subject.
 */
export function useSubjectNumbers(slugOverride?: SubjectSlug | string): HighYieldNumber[] {
  const data = useSubjectData(slugOverride);
  return data.numbers;
}

/**
 * Hook that returns all mock exams for the active subject.
 */
export function useSubjectMockExams(slugOverride?: SubjectSlug | string): MockExam[] {
  const data = useSubjectData(slugOverride);
  return data.mockExams;
}

export default useSubjectData;
