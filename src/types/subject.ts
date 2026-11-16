export type SubjectSlug = 'corporate-governance' | 'it-project-management';

export interface SubjectSection {
  id: string;
  number: string; // e.g. "1.1"
  title: string;
}

export interface SubjectUnit {
  id: number;
  number: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  sections: SubjectSection[];
  topics: string[];
  status: 'active' | 'coming-soon';
}

export interface SubjectConfig {
  id: string;
  slug: SubjectSlug;
  shortCode: string;
  courseCode: string;
  title: string;
  fullTitle: string;
  description: string;
  university: string;
  unitCount: number;
  units: SubjectUnit[];
  accentColor: string; // tailwind color name
  accentHex: string;
  tools: SubjectToolConfig;
}

export interface SubjectToolConfig {
  mcqs: boolean;
  flashcards: boolean;
  mockExams: boolean;
  cheatSheets: boolean;
  importantQA: boolean;
  visualLearning: boolean;
  comparisons: boolean;
  examTraps: boolean;
  numbersToKnow: boolean;
  thirtyMinSprint: boolean;
}

export interface SubjectProgress {
  unitsVisited: number[];
  completedUnits: number[];
  completedTopics: string[];
  answeredMcqs: Record<string, { selected: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean; timestamp: number }>;
  bookmarkedItems: {
    id: string;
    type: 'question' | 'mcq' | 'flashcard' | 'cheat' | 'number';
    title: string;
    unit: number;
  }[];
  masteredFlashcards: string[];
  needsRevisionFlashcards: string[];
  mockExamSubmissions: {
    mockId: string;
    score: number;
    totalMarks: number;
    mcqScore: number;
    descriptiveSelfScores: Record<string, number>;
    timestamp: number;
    timeSpentSeconds: number;
  }[];
  notes: Record<string, string>;
  lastActivity?: number;
}

export interface AllSubjectsProgress {
  version: number;
  migrated: boolean;
  subjects: Record<string, SubjectProgress>;
}
