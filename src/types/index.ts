export type UnitId = 1 | 2 | 3 | 4 | 5 | 6;

export type QuestionPriority = 'VERY HIGH PRIORITY' | 'HIGH PRIORITY' | 'POSSIBLE SHORT QUESTION' | 'POSSIBLE LONG QUESTION';

export type QuestionMarks = 1 | 6 | 8 | 20;

export interface KeyConcept {
  id: string;
  term: string;
  simpleExplanation: string;
  examDefinition: string;
  whyItMatters: string;
  howItWorks: string;
  examKeywords: string[];
  commonTrap?: string;
  category: string;
}

export interface DescriptiveQuestion {
  id: string;
  unit: UnitId;
  question: string;
  marks: QuestionMarks;
  priority: QuestionPriority;
  suggestedTimeMinutes: number;
  examinerExpectation: string;
  modelAnswer: string;
  answerStructure: string[];
  keywords: string[];
  commonMistakes: string;
  selfCheckChecklist: string[];
}

export interface MCQOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface MCQ {
  id: string;
  unit: UnitId;
  topic: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  memoryTip: string;
  difficulty: 'Foundation' | 'Intermediate' | 'Mastery';
}

export interface Flashcard {
  id: string;
  unit: UnitId;
  front: string;
  back: string;
  category: string;
  examTip?: string;
}

export interface ActiveRecallQuestion {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
}

export interface CheatSheetComparison {
  conceptA: string;
  conceptB: string;
  comparisonPoints: {
    criterion: string;
    detailA: string;
    detailB: string;
  }[];
}

export interface CheatSheetData {
  mustMemorize: string[];
  coreDefinitions: { term: string; definition: string; examNote?: string }[];
  importantNumbers: { number: string; label: string; context: string }[];
  frameworkNames: { acronym: string; fullName: string; focus: string }[];
  processes: { name: string; steps: string[]; description: string }[];
  comparisons: CheatSheetComparison[];
  examTraps: { trap: string; truth: string }[];
  memoryShortcuts: { acronym: string; meaning: string; usage: string }[];
}

export interface UnitSummarySection {
  title: string;
  summaryParagraph: string;
  keyPoints: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  processSteps?: { step: number; title: string; description: string }[];
  examInsight: string;
}

export interface UnitData {
  id: UnitId;
  code: string;
  title: string;
  subtitle: string;
  estimatedTime: string;
  color: string;
  gradient: string;
  badge: string;
  overview: string;
  summarySections: UnitSummarySection[];
  keyConcepts: KeyConcept[];
  cheatSheet: CheatSheetData;
  importantQuestions: DescriptiveQuestion[];
  flashcards: Flashcard[];
  mcqs: MCQ[];
  activeRecall: ActiveRecallQuestion[];
  completionChecklist: string[];
}

export interface MasterComparison {
  id: string;
  title: string;
  unit: string;
  description: string;
  columns: [string, string];
  criteria: {
    aspect: string;
    itemA: string;
    itemB: string;
    keyDifference: string;
  }[];
  examTrap: string;
  memoryRule: string;
}

export interface HighYieldNumber {
  id: string;
  number: string;
  unit: UnitId;
  framework: string;
  label: string;
  context: string;
  examQuestionPrompt: string;
  trapToAvoid: string;
}

export interface ExamTrapItem {
  id: string;
  unit: UnitId;
  topic: string;
  commonStudentMistake: string;
  correctAcademicTruth: string;
  whyExaminerDeductsMarks: string;
  howToRemember: string;
}

export interface MockExamDescriptive {
  id: string;
  unit: UnitId;
  question: string;
  marks: QuestionMarks;
  suggestedMinutes: number;
  scenario?: string;
  answerStructure: string[];
  modelAnswer: string;
  rubricItems: { point: string; marksAllotted: number }[];
  examinerAdvice: string;
}

export interface MockExam {
  id: string;
  title: string;
  subtitle: string;
  totalMarks: number;
  timeLimitMinutes: number;
  mcqIds: string[];
  descriptiveQuestions: MockExamDescriptive[];
}

export interface StudentProgress {
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
}
