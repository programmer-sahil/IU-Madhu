import { useContext } from 'react';
import { SubjectContext } from '../contexts/SubjectContext';
import { defaultSubjectSlug } from '../data/subjects';
import { getSubjectData } from '../data/subjectData';
import { useSubjectProgress } from './useSubjectProgress';

/**
 * useProgress - Backward compatible hook that delegates to useSubjectProgress
 * for the currently active subject in SubjectContext.
 * 
 * Ensures all components (McqPractice, FlashcardDeck, UnitView, etc.)
 * automatically receive subject-scoped progress and analytics without
 * manual refactoring of their internal call sites.
 */
export function useProgress() {
  const context = useContext(SubjectContext);
  const activeSlug = context?.currentSlug || defaultSubjectSlug || 'corporate-governance';
  const subjectData = getSubjectData(activeSlug);
  const allMcqs = subjectData ? subjectData.getAllMcqs() : [];

  return useSubjectProgress(activeSlug, allMcqs);
}

export default useProgress;
