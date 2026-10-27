import { useState, useEffect, useCallback, useMemo } from 'react';
import { StudentProgress, UnitId } from '../types';
import { getAllMcqs } from '../data/units';

const STORAGE_KEY = 'cgit_exam_master_progress_v1';

const defaultProgress: StudentProgress = {
  unitsVisited: [1],
  completedUnits: [],
  completedTopics: [],
  answeredMcqs: {},
  bookmarkedItems: [],
  masteredFlashcards: [],
  needsRevisionFlashcards: [],
  mockExamSubmissions: [],
  notes: {}
};

export function useProgress() {
  const [progress, setProgress] = useState<StudentProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultProgress, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  const markUnitVisited = useCallback((unitId: number) => {
    setProgress(prev => {
      if (prev.unitsVisited.includes(unitId)) return prev;
      return {
        ...prev,
        unitsVisited: [...prev.unitsVisited, unitId]
      };
    });
  }, []);

  const toggleUnitCompleted = useCallback((unitId: number) => {
    setProgress(prev => {
      const exists = prev.completedUnits.includes(unitId);
      return {
        ...prev,
        completedUnits: exists
          ? prev.completedUnits.filter(id => id !== unitId)
          : [...prev.completedUnits, unitId]
      };
    });
  }, []);

  const recordMcqAnswer = useCallback((mcqId: string, selected: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
    setProgress(prev => ({
      ...prev,
      answeredMcqs: {
        ...prev.answeredMcqs,
        [mcqId]: { selected, isCorrect, timestamp: Date.now() }
      }
    }));
  }, []);

  const toggleBookmark = useCallback((item: { id: string; type: 'question' | 'mcq' | 'flashcard' | 'cheat' | 'number'; title: string; unit: number }) => {
    setProgress(prev => {
      const exists = prev.bookmarkedItems.some(b => b.id === item.id);
      return {
        ...prev,
        bookmarkedItems: exists
          ? prev.bookmarkedItems.filter(b => b.id !== item.id)
          : [...prev.bookmarkedItems, item]
      };
    });
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return progress.bookmarkedItems.some(b => b.id === id);
  }, [progress.bookmarkedItems]);

  const markFlashcard = useCallback((cardId: string, status: 'know' | 'revise') => {
    setProgress(prev => {
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
        needsRevisionFlashcards: revise
      };
    });
  }, []);

  const submitMockExam = useCallback((submission: {
    mockId: string;
    score: number;
    totalMarks: number;
    mcqScore: number;
    descriptiveSelfScores: Record<string, number>;
    timeSpentSeconds: number;
  }) => {
    setProgress(prev => ({
      ...prev,
      mockExamSubmissions: [
        ...prev.mockExamSubmissions.filter(s => s.mockId !== submission.mockId),
        { ...submission, timestamp: Date.now() }
      ]
    }));
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all your revision progress? This action cannot be undone.')) {
      setProgress(defaultProgress);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // Derived Analytics
  const analytics = useMemo(() => {
    const allMcqs = getAllMcqs();
    const answeredEntries = Object.entries(progress.answeredMcqs);
    const totalAnswered = answeredEntries.length;
    const correctCount = answeredEntries.filter(([, v]) => v.isCorrect).length;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    // Unit-wise MCQ performance
    const unitStats: Record<number, { total: number; answered: number; correct: number }> = {
      1: { total: 0, answered: 0, correct: 0 },
      2: { total: 0, answered: 0, correct: 0 },
      3: { total: 0, answered: 0, correct: 0 },
      4: { total: 0, answered: 0, correct: 0 },
      5: { total: 0, answered: 0, correct: 0 },
      6: { total: 0, answered: 0, correct: 0 }
    };

    allMcqs.forEach(mcq => {
      if (unitStats[mcq.unit]) {
        unitStats[mcq.unit].total++;
        const userAns = progress.answeredMcqs[mcq.id];
        if (userAns) {
          unitStats[mcq.unit].answered++;
          if (userAns.isCorrect) {
            unitStats[mcq.unit].correct++;
          }
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
    const mcqComponent = Math.min(100, (totalAnswered / 120) * 50 + accuracy * 0.5);
    const unitsComponent = (progress.completedUnits.length / 6) * 100;
    const flashcardTotal = progress.masteredFlashcards.length + progress.needsRevisionFlashcards.length;
    const flashcardComponent = flashcardTotal > 0 ? (progress.masteredFlashcards.length / Math.max(20, flashcardTotal)) * 100 : 0;
    const mockComponent = progress.mockExamSubmissions.length > 0 ? (progress.mockExamSubmissions.reduce((acc, m) => acc + (m.score / m.totalMarks), 0) / progress.mockExamSubmissions.length) * 100 : 0;

    const overallReadiness = Math.round(
      mcqComponent * 0.35 +
      unitsComponent * 0.25 +
      flashcardComponent * 0.20 +
      mockComponent * 0.20
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
      mockAttemptsCount: progress.mockExamSubmissions.length
    };
  }, [progress]);

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
    resetProgress
  };
}
