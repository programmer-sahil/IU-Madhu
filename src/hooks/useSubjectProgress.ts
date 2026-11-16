import { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { SubjectProgress, AllSubjectsProgress, SubjectSlug } from '../types/subject';
import { MCQ } from '../types';
import { SubjectContext, useSubject } from '../contexts/SubjectContext';
import { defaultSubjectSlug } from '../data/subjects';

export const STORAGE_KEY = 'iu_exam_master_progress_v2';
export const LEGACY_STORAGE_KEY = 'cgit_exam_master_progress_v1';
export const DEFAULT_SUBJECT_SLUG: SubjectSlug = 'corporate-governance';

const PROGRESS_UPDATE_EVENT = 'iu_exam_master_progress_updated';

export interface SubjectUnitStat {
  total: number;
  answered: number;
  correct: number;
}

export interface SubjectAnalytics {
  totalMcqsCount: number;
  totalAnswered: number;
  correctCount: number;
  accuracy: number;
  unitStats: Record<number, SubjectUnitStat>;
  strongUnits: number[];
  weakUnits: number[];
  overallReadiness: number;
  completedUnitsCount: number;
  masteredFlashcardsCount: number;
  bookmarkedCount: number;
  mockAttemptsCount: number;
  lastActivity?: number;
}

export interface BookmarkItem {
  id: string;
  type: 'question' | 'mcq' | 'flashcard' | 'cheat' | 'number';
  title: string;
  unit: number;
}

export interface MockExamSubmissionPayload {
  mockId: string;
  score: number;
  totalMarks: number;
  mcqScore: number;
  descriptiveSelfScores: Record<string, number>;
  timeSpentSeconds: number;
}

export interface SubjectProgressReturn {
  progress: SubjectProgress;
  analytics: SubjectAnalytics;
  markUnitVisited: (unitId: number) => void;
  toggleUnitCompleted: (unitId: number) => void;
  recordMcqAnswer: (mcqId: string, selected: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => void;
  toggleBookmark: (item: BookmarkItem) => void;
  isBookmarked: (id: string) => boolean;
  markFlashcard: (cardId: string, status: 'know' | 'revise') => void;
  submitMockExam: (submission: MockExamSubmissionPayload) => void;
  resetProgress: (confirmPrompt?: boolean | unknown) => void;
  subjectSlug: string;
}

export interface GlobalSubjectSummary {
  slug: string;
  unitsVisitedCount: number;
  completedUnitsCount: number;
  mcqsAnsweredCount: number;
  mcqsCorrectCount: number;
  accuracy: number;
  flashcardsMasteredCount: number;
  needsRevisionCount: number;
  mockAttemptsCount: number;
  bookmarksCount: number;
  lastActivity?: number;
}

export interface GlobalAnalytics {
  totalSubjectsTracked: number;
  totalUnitsVisited: number;
  totalUnitsCompleted: number;
  totalMcqsAnswered: number;
  totalMcqsCorrect: number;
  globalAccuracy: number;
  totalFlashcardsMastered: number;
  totalFlashcardsReviewed: number;
  totalMockExamsAttempted: number;
  totalBookmarksCount: number;
  subjectSummaries: Record<string, GlobalSubjectSummary>;
  overallReadinessAverage: number;
  lastActiveSubject?: string;
  lastActivity?: number;
}

export const createDefaultSubjectProgress = (): SubjectProgress => ({
  unitsVisited: [1],
  completedUnits: [],
  completedTopics: [],
  answeredMcqs: {},
  bookmarkedItems: [],
  masteredFlashcards: [],
  needsRevisionFlashcards: [],
  mockExamSubmissions: [],
  notes: {},
  lastActivity: Date.now(),
});

export const createDefaultAllProgress = (): AllSubjectsProgress => ({
  version: 2,
  migrated: false,
  subjects: {
    'corporate-governance': createDefaultSubjectProgress(),
  },
});

function sanitizeSubjectProgress(raw: Partial<SubjectProgress> | undefined): SubjectProgress {
  const defaults = createDefaultSubjectProgress();
  if (!raw || typeof raw !== 'object') return defaults;

  return {
    unitsVisited: Array.isArray(raw.unitsVisited) && raw.unitsVisited.length > 0 ? [...raw.unitsVisited] : [1],
    completedUnits: Array.isArray(raw.completedUnits) ? [...raw.completedUnits] : [],
    completedTopics: Array.isArray(raw.completedTopics) ? [...raw.completedTopics] : [],
    answeredMcqs: raw.answeredMcqs && typeof raw.answeredMcqs === 'object' ? { ...raw.answeredMcqs } : {},
    bookmarkedItems: Array.isArray(raw.bookmarkedItems) ? [...raw.bookmarkedItems] : [],
    masteredFlashcards: Array.isArray(raw.masteredFlashcards) ? [...raw.masteredFlashcards] : [],
    needsRevisionFlashcards: Array.isArray(raw.needsRevisionFlashcards) ? [...raw.needsRevisionFlashcards] : [],
    mockExamSubmissions: Array.isArray(raw.mockExamSubmissions) ? [...raw.mockExamSubmissions] : [],
    notes: raw.notes && typeof raw.notes === 'object' ? { ...raw.notes } : {},
    lastActivity: typeof raw.lastActivity === 'number' ? raw.lastActivity : Date.now(),
  };
}

/**
 * Migration & Storage Loader
 * 
 * 1. Checks if 'iu_exam_master_progress_v2' already exists with migrated: true.
 *    If so, returns it directly.
 * 2. If not migrated, checks for legacy key 'cgit_exam_master_progress_v1'.
 *    - Reads old data and maps to subjects['corporate-governance']
 *    - Sets migrated: true, version: 2
 *    - Saves to new key 'iu_exam_master_progress_v2'
 *    - Leaves legacy key untouched as a backup
 * 3. If neither exists, creates fresh v2 data with migrated: true and saves to localStorage.
 */
export function loadAllProgress(): AllSubjectsProgress {
  if (typeof window === 'undefined') {
    return createDefaultAllProgress();
  }

  try {
    const rawV2 = localStorage.getItem(STORAGE_KEY);
    if (rawV2) {
      try {
        const parsedV2 = JSON.parse(rawV2) as AllSubjectsProgress;
        if (parsedV2 && parsedV2.version === 2 && parsedV2.migrated === true && parsedV2.subjects) {
          const sanitizedSubjects: Record<string, SubjectProgress> = {};
          for (const [slug, prog] of Object.entries(parsedV2.subjects)) {
            sanitizedSubjects[slug] = sanitizeSubjectProgress(prog);
          }
          return {
            version: 2,
            migrated: true,
            subjects: sanitizedSubjects,
          };
        }
      } catch (e) {
        console.error('Failed to parse v2 progress from localStorage:', e);
      }
    }

    // Check legacy key
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) {
      try {
        const parsedLegacy = JSON.parse(legacyRaw);
        const migratedCgit = sanitizeSubjectProgress(parsedLegacy);

        let existingSubjects: Record<string, SubjectProgress> = {};
        if (rawV2) {
          try {
            const parsedV2Partial = JSON.parse(rawV2);
            if (parsedV2Partial && parsedV2Partial.subjects) {
              existingSubjects = parsedV2Partial.subjects;
            }
          } catch {}
        }

        const migratedData: AllSubjectsProgress = {
          version: 2,
          migrated: true,
          subjects: {
            ...existingSubjects,
            'corporate-governance': migratedCgit,
          },
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedData));
        // Legacy key 'cgit_exam_master_progress_v1' is preserved as backup
        return migratedData;
      } catch (e) {
        console.error('Failed to parse and migrate legacy progress:', e);
      }
    }

    // Fresh initialization
    const freshData: AllSubjectsProgress = {
      version: 2,
      migrated: true,
      subjects: {
        'corporate-governance': createDefaultSubjectProgress(),
      },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(freshData));
    return freshData;
  } catch (err) {
    console.error('Error during progress loading and migration:', err);
    return createDefaultAllProgress();
  }
}

export function saveAllProgress(data: AllSubjectsProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent(PROGRESS_UPDATE_EVENT, { detail: data }));
  } catch (e) {
    console.error('Failed to save progress to localStorage:', e);
  }
}

/**
 * useSubjectProgress - Scoped progress hook for a specific subject
 * 
 * @param subjectSlug Optional subject slug; falls back to current context or defaultSubjectSlug
 * @param allMcqs Optional list of MCQs for the active subject (default: [])
 */
export function useSubjectProgress(
  subjectSlug?: SubjectSlug | string,
  allMcqs: MCQ[] = []
): SubjectProgressReturn {
  const context = useContext(SubjectContext);
  const resolvedSlug: string = subjectSlug || context?.currentSlug || defaultSubjectSlug || DEFAULT_SUBJECT_SLUG;

  const [allProgress, setAllProgress] = useState<AllSubjectsProgress>(() => loadAllProgress());

  // Keep state reactive across multiple components and tabs
  useEffect(() => {
    const handleSync = () => {
      setAllProgress(loadAllProgress());
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener(PROGRESS_UPDATE_EVENT, handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener(PROGRESS_UPDATE_EVENT, handleSync);
    };
  }, []);

  const progress = useMemo(() => {
    return allProgress.subjects[resolvedSlug] || createDefaultSubjectProgress();
  }, [allProgress, resolvedSlug]);

  const updateSubjectProgress = useCallback(
    (updater: (prev: SubjectProgress) => SubjectProgress) => {
      setAllProgress(prevAll => {
        const currentProg = prevAll.subjects[resolvedSlug] || createDefaultSubjectProgress();
        const updated = updater(currentProg);
        updated.lastActivity = Date.now();

        const nextAll: AllSubjectsProgress = {
          ...prevAll,
          version: 2,
          migrated: true,
          subjects: {
            ...prevAll.subjects,
            [resolvedSlug]: updated,
          },
        };

        saveAllProgress(nextAll);
        return nextAll;
      });
    },
    [resolvedSlug]
  );

  const markUnitVisited = useCallback(
    (unitId: number) => {
      updateSubjectProgress(prev => {
        if (prev.unitsVisited.includes(unitId)) return prev;
        return {
          ...prev,
          unitsVisited: [...prev.unitsVisited, unitId],
        };
      });
    },
    [updateSubjectProgress]
  );

  const toggleUnitCompleted = useCallback(
    (unitId: number) => {
      updateSubjectProgress(prev => {
        const exists = prev.completedUnits.includes(unitId);
        return {
          ...prev,
          completedUnits: exists
            ? prev.completedUnits.filter(id => id !== unitId)
            : [...prev.completedUnits, unitId],
        };
      });
    },
    [updateSubjectProgress]
  );

  const recordMcqAnswer = useCallback(
    (mcqId: string, selected: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
      updateSubjectProgress(prev => ({
        ...prev,
        answeredMcqs: {
          ...prev.answeredMcqs,
          [mcqId]: { selected, isCorrect, timestamp: Date.now() },
        },
      }));
    },
    [updateSubjectProgress]
  );

  const toggleBookmark = useCallback(
    (item: BookmarkItem) => {
      updateSubjectProgress(prev => {
        const exists = prev.bookmarkedItems.some(b => b.id === item.id);
        return {
          ...prev,
          bookmarkedItems: exists
            ? prev.bookmarkedItems.filter(b => b.id !== item.id)
            : [...prev.bookmarkedItems, item],
        };
      });
    },
    [updateSubjectProgress]
  );

  const isBookmarked = useCallback(
    (id: string) => {
      return progress.bookmarkedItems.some(b => b.id === id);
    },
    [progress.bookmarkedItems]
  );

  const markFlashcard = useCallback(
    (cardId: string, status: 'know' | 'revise') => {
      updateSubjectProgress(prev => {
        const mastered = prev.masteredFlashcards.filter(id => id !== cardId);
        const revise = prev.needsRevisionFlashcards.filter(id => id !== cardId);
        if (status === 'know') {
          mastered.push(cardId);
        } else {
          revise.push(cardId);
        }
        return {
          ...prev,
          masteredFlashcards: mastered,
          needsRevisionFlashcards: revise,
        };
      });
    },
    [updateSubjectProgress]
  );

  const submitMockExam = useCallback(
    (submission: MockExamSubmissionPayload) => {
      updateSubjectProgress(prev => ({
        ...prev,
        mockExamSubmissions: [
          ...prev.mockExamSubmissions.filter(s => s.mockId !== submission.mockId),
          { ...submission, timestamp: Date.now() },
        ],
      }));
    },
    [updateSubjectProgress]
  );

  const resetProgress = useCallback(
    (confirmPrompt?: boolean | unknown) => {
      const isExplicitFalse = confirmPrompt === false;
      const shouldReset =
        isExplicitFalse ||
        (typeof window !== 'undefined' &&
          window.confirm('Are you sure you want to reset your revision progress for this subject? This action cannot be undone.'));

      if (shouldReset) {
        updateSubjectProgress(() => createDefaultSubjectProgress());
      }
    },
    [updateSubjectProgress]
  );

  // Scoped Analytics Calculation
  const analytics = useMemo((): SubjectAnalytics => {
    const answeredEntries = Object.entries(progress.answeredMcqs);
    const totalAnswered = answeredEntries.length;
    const correctCount = answeredEntries.filter(([, v]) => v.isCorrect).length;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    // Unit-wise MCQ performance
    const unitStats: Record<number, SubjectUnitStat> = {
      1: { total: 0, answered: 0, correct: 0 },
      2: { total: 0, answered: 0, correct: 0 },
      3: { total: 0, answered: 0, correct: 0 },
      4: { total: 0, answered: 0, correct: 0 },
      5: { total: 0, answered: 0, correct: 0 },
      6: { total: 0, answered: 0, correct: 0 },
    };

    allMcqs.forEach(mcq => {
      const uId = mcq.unit;
      if (!unitStats[uId]) {
        unitStats[uId] = { total: 0, answered: 0, correct: 0 };
      }
      unitStats[uId].total++;
      const userAns = progress.answeredMcqs[mcq.id];
      if (userAns) {
        unitStats[uId].answered++;
        if (userAns.isCorrect) {
          unitStats[uId].correct++;
        }
      }
    });

    const strongUnits: number[] = [];
    const weakUnits: number[] = [];

    Object.entries(unitStats).forEach(([unitStr, stats]) => {
      const uNum = Number(unitStr);
      if (stats.answered >= 5) {
        const uAcc = (stats.correct / stats.answered) * 100;
        if (uAcc >= 75) {
          strongUnits.push(uNum);
        } else if (uAcc < 60) {
          weakUnits.push(uNum);
        }
      }
    });

    // Overall Readiness Calculation
    // 35% MCQ accuracy & volume + 25% units completed + 20% flashcards + 20% mock attempts
    const targetMcqs = allMcqs.length > 0 ? allMcqs.length : 120;
    const mcqVolumeScore = Math.min(50, (totalAnswered / targetMcqs) * 50);
    const mcqComponent = Math.min(100, mcqVolumeScore + accuracy * 0.5);

    const unitsComponent = Math.min(100, (progress.completedUnits.length / 6) * 100);

    const flashcardTotal = progress.masteredFlashcards.length + progress.needsRevisionFlashcards.length;
    const flashcardComponent =
      flashcardTotal > 0 ? (progress.masteredFlashcards.length / Math.max(20, flashcardTotal)) * 100 : 0;

    const mockComponent =
      progress.mockExamSubmissions.length > 0
        ? (progress.mockExamSubmissions.reduce((acc, m) => acc + m.score / (m.totalMarks || 1), 0) /
            progress.mockExamSubmissions.length) *
          100
        : 0;

    const overallReadiness = Math.round(
      mcqComponent * 0.35 + unitsComponent * 0.25 + flashcardComponent * 0.2 + mockComponent * 0.2
    );

    return {
      totalMcqsCount: allMcqs.length,
      totalAnswered,
      correctCount,
      accuracy,
      unitStats,
      strongUnits,
      weakUnits,
      overallReadiness: Math.min(100, Math.max(0, overallReadiness)),
      completedUnitsCount: progress.completedUnits.length,
      masteredFlashcardsCount: progress.masteredFlashcards.length,
      bookmarkedCount: progress.bookmarkedItems.length,
      mockAttemptsCount: progress.mockExamSubmissions.length,
      lastActivity: progress.lastActivity,
    };
  }, [allMcqs, progress]);

  return {
    progress,
    analytics,
    markUnitVisited,
    toggleUnitCompleted,
    recordMcqAnswer,
    toggleBookmark,
    isBookmarked,
    markFlashcard,
    submitMockExam,
    resetProgress,
    subjectSlug: resolvedSlug,
  };
}

/**
 * useCurrentSubjectProgress - Progress hook that consumes current subject from SubjectContext
 */
export function useCurrentSubjectProgress(allMcqs: MCQ[] = []): SubjectProgressReturn {
  const { currentSlug } = useSubject();
  return useSubjectProgress(currentSlug, allMcqs);
}

/**
 * useGlobalAnalytics - Cross-subject aggregate analytics
 */
export function useGlobalAnalytics(): GlobalAnalytics {
  const [allProgress, setAllProgress] = useState<AllSubjectsProgress>(() => loadAllProgress());

  useEffect(() => {
    const handleSync = () => {
      setAllProgress(loadAllProgress());
    };

    window.addEventListener('storage', handleSync);
    window.addEventListener(PROGRESS_UPDATE_EVENT, handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener(PROGRESS_UPDATE_EVENT, handleSync);
    };
  }, []);

  return useMemo((): GlobalAnalytics => {
    const subjectEntries = Object.entries(allProgress.subjects);
    let totalUnitsVisited = 0;
    let totalUnitsCompleted = 0;
    let totalMcqsAnswered = 0;
    let totalMcqsCorrect = 0;
    let totalFlashcardsMastered = 0;
    let totalFlashcardsReviewed = 0;
    let totalMockExamsAttempted = 0;
    let totalBookmarksCount = 0;
    let lastActiveSubject: string | undefined;
    let latestActivityTime = 0;

    const subjectSummaries: Record<string, GlobalSubjectSummary> = {};

    subjectEntries.forEach(([slug, p]) => {
      totalUnitsVisited += p.unitsVisited.length;
      totalUnitsCompleted += p.completedUnits.length;

      const answeredList = Object.values(p.answeredMcqs);
      const answeredCount = answeredList.length;
      const correctCount = answeredList.filter(a => a.isCorrect).length;
      totalMcqsAnswered += answeredCount;
      totalMcqsCorrect += correctCount;

      totalFlashcardsMastered += p.masteredFlashcards.length;
      totalFlashcardsReviewed += p.masteredFlashcards.length + p.needsRevisionFlashcards.length;
      totalMockExamsAttempted += p.mockExamSubmissions.length;
      totalBookmarksCount += p.bookmarkedItems.length;

      if (p.lastActivity && p.lastActivity > latestActivityTime) {
        latestActivityTime = p.lastActivity;
        lastActiveSubject = slug;
      }

      const acc = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

      subjectSummaries[slug] = {
        slug,
        unitsVisitedCount: p.unitsVisited.length,
        completedUnitsCount: p.completedUnits.length,
        mcqsAnsweredCount: answeredCount,
        mcqsCorrectCount: correctCount,
        accuracy: acc,
        flashcardsMasteredCount: p.masteredFlashcards.length,
        needsRevisionCount: p.needsRevisionFlashcards.length,
        mockAttemptsCount: p.mockExamSubmissions.length,
        bookmarksCount: p.bookmarkedItems.length,
        lastActivity: p.lastActivity,
      };
    });

    const globalAccuracy =
      totalMcqsAnswered > 0 ? Math.round((totalMcqsCorrect / totalMcqsAnswered) * 100) : 0;

    const activeSubjects = subjectEntries.filter(
      ([, p]) => p.unitsVisited.length > 0 || Object.keys(p.answeredMcqs).length > 0
    );

    const overallReadinessAverage =
      activeSubjects.length > 0
        ? Math.round(
            activeSubjects.reduce((acc, [, p]) => {
              const mcqCount = Object.keys(p.answeredMcqs).length;
              const mcqAcc =
                mcqCount > 0
                  ? (Object.values(p.answeredMcqs).filter(a => a.isCorrect).length / mcqCount) * 100
                  : 0;
              const mcqComp = Math.min(100, (mcqCount / 120) * 50 + mcqAcc * 0.5);
              const unitComp = Math.min(100, (p.completedUnits.length / 6) * 100);
              const fcTotal = p.masteredFlashcards.length + p.needsRevisionFlashcards.length;
              const fcComp = fcTotal > 0 ? (p.masteredFlashcards.length / Math.max(20, fcTotal)) * 100 : 0;
              const mockComp =
                p.mockExamSubmissions.length > 0
                  ? (p.mockExamSubmissions.reduce((mAcc, m) => mAcc + m.score / (m.totalMarks || 1), 0) /
                      p.mockExamSubmissions.length) *
                    100
                  : 0;
              const r = Math.round(mcqComp * 0.35 + unitComp * 0.25 + fcComp * 0.2 + mockComp * 0.2);
              return acc + r;
            }, 0) / activeSubjects.length
          )
        : 0;

    return {
      totalSubjectsTracked: subjectEntries.length,
      totalUnitsVisited,
      totalUnitsCompleted,
      totalMcqsAnswered,
      totalMcqsCorrect,
      globalAccuracy,
      totalFlashcardsMastered,
      totalFlashcardsReviewed,
      totalMockExamsAttempted,
      totalBookmarksCount,
      subjectSummaries,
      overallReadinessAverage,
      lastActiveSubject,
      lastActivity: latestActivityTime || undefined,
    };
  }, [allProgress]);
}
