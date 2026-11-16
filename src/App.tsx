import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
  Outlet,
} from 'react-router-dom';
import { SubjectProvider, useSubject } from './contexts/SubjectContext';

// Components
import { AppSidebar } from './components/AppSidebar';
import { AppNavbar } from './components/AppNavbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GlobalDashboard, SubjectProgressSummary } from './components/GlobalDashboard';
import { SubjectDashboard } from './components/SubjectDashboard';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { EmptyContentState } from './components/EmptyContentState';

// Existing view components (unchanged)
import { UnitView } from './components/UnitView';
import { CheatSheetView } from './components/CheatSheetView';
import { QuestionAccordion } from './components/QuestionAccordion';
import { McqPractice } from './components/McqPractice';
import { FlashcardDeck } from './components/FlashcardDeck';
import { VisualDiagrams } from './components/VisualDiagrams';
import { ComparisonTablesView } from './components/ComparisonTablesView';
import { ExamTrapsView } from './components/ExamTrapsView';
import { NumbersView } from './components/NumbersView';
import { LastMinuteRevision } from './components/LastMinuteRevision';
import { MockExamView } from './components/MockExamView';
import { ExamReadinessDiagnostic } from './components/ExamReadinessDiagnostic';
import { BookmarksView } from './components/BookmarksView';
import { CalculationLab } from './components/CalculationLab';
import { ScenarioLab } from './components/ScenarioLab';
import { InteractiveVisuals } from './components/InteractiveVisuals';
import { QuickRevision } from './components/QuickRevision';
import { FinalExamPractice } from './components/FinalExamPractice';

// Data
import { subjectList, getSubjectBySlug } from './data/subjects';
import { getSubjectData } from './data/subjectData';
import { useSubjectProgress } from './hooks/useSubjectProgress';
import type { SubjectConfig, SubjectSlug } from './types/subject';
import type { UnitId } from './types';

// ============================================================================
// Progress Helpers
// ============================================================================

/**
 * Computes a standardized progress summary for a given subject slug.
 * Reads from v2 localStorage with fallback to legacy v1 data.
 */
function computeSubjectProgressSummary(slug: string): SubjectProgressSummary {
  let progress: any = {
    unitsVisited: [],
    completedUnits: [],
    completedTopics: [],
    answeredMcqs: {},
    bookmarkedItems: [],
    masteredFlashcards: [],
    needsRevisionFlashcards: [],
    mockExamSubmissions: [],
    notes: {},
  };

  try {
    const raw = localStorage.getItem('iu_exam_master_progress_v2');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.subjects && parsed.subjects[slug]) {
        progress = parsed.subjects[slug];
      }
    } else {
      const legacy = localStorage.getItem('cgit_exam_master_progress_v1');
      if (legacy && slug === 'corporate-governance') {
        const parsed = JSON.parse(legacy);
        progress = {
          unitsVisited: parsed.unitsVisited || [],
          completedUnits: parsed.completedUnits || [],
          completedTopics: parsed.completedTopics || [],
          answeredMcqs: parsed.answeredMcqs || {},
          bookmarkedItems: parsed.bookmarkedItems || [],
          masteredFlashcards: parsed.masteredFlashcards || [],
          needsRevisionFlashcards: parsed.needsRevisionFlashcards || [],
          mockExamSubmissions: parsed.mockExamSubmissions || [],
          notes: parsed.notes || {},
          lastActivity: Date.now(),
        };
      }
    }
  } catch (e) {
    console.error('Failed to read progress for summary', e);
  }

  const data = getSubjectData(slug);
  const mcqs = data.getAllMcqs();
  const totalMcqsCount = mcqs.length;
  const answeredEntries = Object.entries(progress.answeredMcqs || {});
  const totalAnswered = answeredEntries.length;
  const correctCount = answeredEntries.filter(([, v]: any) => v.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const completedUnitsCount = (progress.completedUnits || []).length;
  const masteredFlashcardsCount = (progress.masteredFlashcards || []).length;
  const bookmarkedCount = (progress.bookmarkedItems || []).length;
  const mockAttemptsCount = (progress.mockExamSubmissions || []).length;

  const mcqComponent = totalMcqsCount > 0
    ? Math.min(100, (totalAnswered / Math.max(totalMcqsCount, 120)) * 50 + accuracy * 0.5)
    : 0;
  const unitsComponent = (completedUnitsCount / 6) * 100;
  const flashcardTotal = masteredFlashcardsCount + (progress.needsRevisionFlashcards || []).length;
  const flashcardComponent = flashcardTotal > 0 ? (masteredFlashcardsCount / Math.max(20, flashcardTotal)) * 100 : 0;
  const mockSubmissions = progress.mockExamSubmissions || [];
  const mockComponent = mockSubmissions.length > 0
    ? (mockSubmissions.reduce((acc: number, m: any) => acc + (m.score / m.totalMarks), 0) / mockSubmissions.length) * 100
    : 0;

  const overallReadiness = Math.round(
    mcqComponent * 0.35 +
    unitsComponent * 0.25 +
    flashcardComponent * 0.20 +
    mockComponent * 0.20
  );

  return {
    overallReadiness: Math.min(100, Math.max(0, overallReadiness)),
    totalAnswered,
    correctCount,
    accuracy,
    completedUnitsCount,
    masteredFlashcardsCount,
    bookmarkedCount,
    mockAttemptsCount,
    totalMcqsCount,
    lastActivity: progress.lastActivity,
  };
}

// ============================================================================
// Navigation & Title Helpers
// ============================================================================

function getViewTitle(pathname: string, subject?: SubjectConfig, unitId?: number): string {
  if (pathname === '/' || !subject) {
    return 'All Subjects';
  }
  if (pathname === `/subjects/${subject.slug}` || pathname === `/subjects/${subject.slug}/`) {
    return 'Dashboard';
  }
  if (pathname.includes('/units/')) {
    const u = subject.units.find(item => item.id === unitId) || subject.units[0];
    const unitTitle = u ? (u.shortTitle || u.title.split(':')[0]) : `Unit 0${unitId || 1}`;
    return `Unit 0${unitId || 1}: ${unitTitle}`;
  }
  if (pathname.includes('/practice/mcq')) return 'MCQ Practice';
  if (pathname.includes('/practice/final-exam')) return 'Final Examination Simulation';
  if (pathname.includes('/practice/flashcards')) return 'Flashcard Revision';
  if (pathname.includes('/practice/mock-exams')) return 'Full Mock Examinations';
  if (pathname.includes('/practice/calculation-lab')) return 'Calculation & Formula Lab';
  if (pathname.includes('/practice/scenario-lab')) return 'Stakeholder & Conflict Scenario Lab';
  if (pathname.includes('/tools/quick-revision')) return 'Quick Revision Hub';
  if (pathname.includes('/tools/cheat-sheets')) return 'Cheat Sheets';
  if (pathname.includes('/tools/important-qa')) return 'Important Exam Q&A';
  if (pathname.includes('/tools/visual-learning')) return 'Visual Learning';
  if (pathname.includes('/tools/comparisons')) return 'Master Comparison Tables';
  if (pathname.includes('/tools/exam-traps')) return 'Exam Traps';
  if (pathname.includes('/tools/numbers')) return 'Numbers to Know';
  if (pathname.includes('/tools/30-minute-sprint')) return '30-Min Final Sprint';
  if (pathname.includes('/readiness')) return 'Exam Readiness Diagnostic';
  if (pathname.includes('/revision-list')) return 'My Revision List';
  return subject.shortCode ? `${subject.shortCode} Exam Master` : 'IU Exam Master';
}

function getActiveNavView(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname.includes('/units/')) return 'unit';
  if (pathname.includes('/practice/mcq')) return 'mcqs';
  if (pathname.includes('/practice/final-exam')) return 'finalExam';
  if (pathname.includes('/practice/flashcards')) return 'flashcards';
  if (pathname.includes('/practice/mock-exams')) return 'mock';
  if (pathname.includes('/practice/calculation-lab')) return 'calculationLab';
  if (pathname.includes('/practice/scenario-lab')) return 'scenarioLab';
  if (pathname.includes('/tools/quick-revision')) return 'quickRevision';
  if (pathname.includes('/tools/cheat-sheets')) return 'cheatSheets';
  if (pathname.includes('/tools/important-qa')) return 'questions';
  if (pathname.includes('/tools/visual-learning')) return 'diagrams';
  if (pathname.includes('/tools/comparisons')) return 'comparisons';
  if (pathname.includes('/tools/exam-traps')) return 'traps';
  if (pathname.includes('/tools/numbers')) return 'numbers';
  if (pathname.includes('/tools/30-minute-sprint')) return 'lastMinute';
  if (pathname.includes('/readiness')) return 'readiness';
  if (pathname.includes('/revision-list')) return 'bookmarks';
  return 'dashboard';
}

// ============================================================================
// Shell Component (Sidebar + Navbar + Content + Footer + Overlays)
// ============================================================================

interface ShellStateProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppShellProps extends ShellStateProps {
  isGlobalView: boolean;
  subject?: SubjectConfig;
  children: React.ReactNode;
}

function AppShell({
  isGlobalView,
  subject,
  children,
  isDarkMode,
  setIsDarkMode,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  isSearchOpen,
  setIsSearchOpen,
}: AppShellProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentSlug } = useSubject();

  const activeSubjectSlug = subject?.slug || currentSlug || 'corporate-governance';
  const activeSubject = subject || getSubjectBySlug(activeSubjectSlug) || subjectList[0];
  const activeSubjectData = getSubjectData(activeSubjectSlug);

  // Determine current unit from URL if on a unit page
  const unitMatch = location.pathname.match(/\/units\/(\d+)/);
  const selectedUnitId = unitMatch ? parseInt(unitMatch[1], 10) : 1;

  const currentView = getActiveNavView(location.pathname);
  const currentViewTitle = getViewTitle(location.pathname, activeSubject, selectedUnitId);

  // Compute readiness score for navbar
  const readinessScore = useMemo(() => {
    if (isGlobalView) {
      const summaries = subjectList.map(s => computeSubjectProgressSummary(s.slug));
      return summaries.length > 0
        ? Math.round(summaries.reduce((acc, s) => acc + s.overallReadiness, 0) / summaries.length)
        : 0;
    }
    return computeSubjectProgressSummary(activeSubjectSlug).overallReadiness;
  }, [isGlobalView, activeSubjectSlug]);

  const toggleSidebarCollapsed = useCallback(() => {
    setIsSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('iu_sidebar_collapsed', String(next));
      return next;
    });
  }, [setIsSidebarCollapsed]);

  const handleNavigate = useCallback((view: string, unitId?: number) => {
    setIsMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetSlug = activeSubjectSlug || currentSlug || 'corporate-governance';

    switch (view) {
      case 'home':
        navigate('/');
        break;
      case 'dashboard':
        navigate(`/subjects/${targetSlug}`);
        break;
      case 'unit':
        navigate(`/subjects/${targetSlug}/units/${unitId || 1}`);
        break;
      case 'mcqs':
        navigate(`/subjects/${targetSlug}/practice/mcq${unitId ? `?unit=${unitId}` : ''}`);
        break;
      case 'finalExam':
        navigate(`/subjects/${targetSlug}/practice/final-exam`);
        break;
      case 'flashcards':
        navigate(`/subjects/${targetSlug}/practice/flashcards${unitId ? `?unit=${unitId}` : ''}`);
        break;
      case 'mock':
        navigate(`/subjects/${targetSlug}/practice/mock-exams`);
        break;
      case 'calculationLab':
        navigate(`/subjects/${targetSlug}/practice/calculation-lab`);
        break;
      case 'scenarioLab':
        navigate(`/subjects/${targetSlug}/practice/scenario-lab`);
        break;
      case 'quickRevision':
        navigate(`/subjects/${targetSlug}/tools/quick-revision`);
        break;
      case 'cheatSheets':
        navigate(`/subjects/${targetSlug}/tools/cheat-sheets${unitId ? `?unit=${unitId}` : ''}`);
        break;
      case 'questions':
        navigate(`/subjects/${targetSlug}/tools/important-qa${unitId ? `?unit=${unitId}` : ''}`);
        break;
      case 'diagrams':
        navigate(`/subjects/${targetSlug}/tools/visual-learning`);
        break;
      case 'comparisons':
        navigate(`/subjects/${targetSlug}/tools/comparisons`);
        break;
      case 'traps':
        navigate(`/subjects/${targetSlug}/tools/exam-traps`);
        break;
      case 'numbers':
        navigate(`/subjects/${targetSlug}/tools/numbers`);
        break;
      case 'lastMinute':
        navigate(`/subjects/${targetSlug}/tools/30-minute-sprint`);
        break;
      case 'readiness':
        navigate(`/subjects/${targetSlug}/readiness`);
        break;
      case 'bookmarks':
        navigate(`/subjects/${targetSlug}/revision-list`);
        break;
      default:
        navigate(`/subjects/${targetSlug}`);
        break;
    }
  }, [activeSubjectSlug, currentSlug, navigate, setIsMobileSidebarOpen]);

  const sidebarSubjects = useMemo(() => {
    return subjectList.map(s => ({
      slug: s.slug,
      shortCode: s.shortCode,
      title: s.title,
      courseCode: s.courseCode,
      accentHex: s.accentHex,
    }));
  }, []);

  const sidebarUnits = useMemo(() => {
    return activeSubject.units.map(u => ({
      id: u.id,
      title: u.title,
      shortTitle: u.shortTitle,
      status: u.status,
      sections: u.sections,
    }));
  }, [activeSubject]);

  const mobileUnits = useMemo(() => {
    return activeSubject.units.map(u => ({
      id: u.id,
      title: u.title,
      subtitle: u.subtitle || u.shortTitle || '',
    }));
  }, [activeSubject]);

  const allSubjectsSearchData = useMemo(() => {
    return subjectList.map(s => {
      const sData = getSubjectData(s.slug);
      return {
        slug: s.slug,
        title: s.title,
        shortCode: s.shortCode,
        units: sData.units.map(u => ({
          id: u.id,
          title: u.title,
          keyConcepts: (u as any).keyConcepts,
          importantQuestions: (u as any).importantQuestions,
          mcqs: (u as any).mcqs,
          flashcards: (u as any).flashcards,
        })),
        comparisons: sData.comparisons,
        numbers: sData.numbers,
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#070B14] text-slate-900 dark:text-[#F8FAFC] flex transition-colors duration-200">
      {/* Left Sidebar */}
      <AppSidebar
        currentView={currentView}
        currentSubjectSlug={activeSubjectSlug}
        selectedUnitId={selectedUnitId}
        onNavigate={handleNavigate}
        onNavigateHome={() => {
          setIsMobileSidebarOpen(false);
          navigate('/');
        }}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
        subjects={sidebarSubjects}
        currentSubjectUnits={sidebarUnits}
        getSubjectProgress={(slug) => computeSubjectProgressSummary(slug).overallReadiness}
        onSelectSubject={(slug) => {
          setIsMobileSidebarOpen(false);
          navigate(`/subjects/${slug}`);
        }}
        mcqCount={activeSubjectData.getAllMcqs().length}
        mockExamDuration={activeSubjectData.mockExams.length > 0 ? '120m' : undefined}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={toggleSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarCollapsed ? 'lg:pl-[68px]' : 'lg:pl-[230px]'}`}>
        {/* Sticky Top Navbar */}
        <AppNavbar
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
          onNavigateToReadiness={() => handleNavigate('readiness')}
          currentViewTitle={currentViewTitle}
          currentSubject={isGlobalView ? undefined : {
            shortCode: activeSubject.shortCode,
            courseCode: activeSubject.courseCode,
            title: activeSubject.title,
            slug: activeSubject.slug,
          }}
          readinessScore={readinessScore}
          isGlobalView={isGlobalView}
        />

        {/* View Router Main Container */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto pb-24 lg:pb-12">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200/90 dark:border-slate-800/80 p-6 md:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-16 lg:mb-0">
          <div className="font-semibold text-slate-800 dark:text-[#CBD5E1]">
            IU Exam Master — Master's Examination Preparation
          </div>
          <div>
            IU International University of Applied Sciences • Prepared by Tutor SK SAHIL
          </div>
          <div className="text-[11px] text-slate-400">
            Academic revision material strictly grounded in official IU course books, chapter notes, and mock examinations.
          </div>
        </footer>
      </div>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav
        currentPath={location.pathname}
        currentSubjectSlug={activeSubjectSlug}
        currentSubjectUnits={mobileUnits}
        onNavigate={(path) => {
          setIsMobileSidebarOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate(path);
        }}
        isSubjectView={!isGlobalView}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(path) => {
          setIsSearchOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate(path);
        }}
        currentSubjectSlug={activeSubjectSlug}
        currentSubjectTitle={activeSubject.title}
        allSubjectsData={allSubjectsSearchData}
      />
    </div>
  );
}

// ============================================================================
// Layouts
// ============================================================================

function GlobalLayout(props: ShellStateProps) {
  return (
    <AppShell isGlobalView={true} {...props}>
      <Outlet />
    </AppShell>
  );
}

function SubjectLayout(props: ShellStateProps) {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subject = subjectSlug ? getSubjectBySlug(subjectSlug) : undefined;
  const { currentSlug, setCurrentSubject } = useSubject();

  useEffect(() => {
    if (subject && currentSlug !== subject.slug) {
      setCurrentSubject(subject.slug as SubjectSlug);
    }
  }, [subject, currentSlug, setCurrentSubject]);

  if (!subject) {
    return <Navigate to="/" replace />;
  }

  return (
    <AppShell isGlobalView={false} subject={subject} {...props}>
      <Outlet />
    </AppShell>
  );
}

// ============================================================================
// Subject Route Wrappers
// ============================================================================

function GlobalDashboardRouteWrapper() {
  const navigate = useNavigate();
  const { currentSlug } = useSubject();

  return (
    <GlobalDashboard
      subjects={subjectList.map(s => ({
        slug: s.slug,
        shortCode: s.shortCode,
        title: s.title,
        fullTitle: s.fullTitle,
        courseCode: s.courseCode,
        unitCount: s.unitCount,
        accentHex: s.accentHex,
        description: s.description,
      }))}
      getSubjectProgress={computeSubjectProgressSummary}
      onNavigateToSubject={(slug) => navigate(`/subjects/${slug}`)}
      onNavigateToMcq={(slug) => navigate(`/subjects/${slug}/practice/mcq`)}
      onContinueStudying={() => navigate(`/subjects/${currentSlug || 'corporate-governance'}`)}
    />
  );
}

function SubjectDashboardRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subject = getSubjectBySlug(subjectSlug || 'corporate-governance');
  const subjectData = getSubjectData(subjectSlug);
  const { progress, analytics } = useSubjectProgress(subjectSlug || 'corporate-governance', subjectData.getAllMcqs());
  const navigate = useNavigate();

  if (!subject) {
    return <Navigate to="/" replace />;
  }

  return (
    <SubjectDashboard
      subject={subject as any}
      analytics={analytics}
      progress={progress}
      hasContent={subjectData.units.length > 0}
      onNavigateToUnit={(unitId, tab) => navigate(`/subjects/${subjectSlug}/units/${unitId}${tab ? `?tab=${tab}` : ''}`)}
      onNavigateToMcq={(unitId) => navigate(`/subjects/${subjectSlug}/practice/mcq${unitId ? `?unit=${unitId}` : ''}`)}
      onNavigateToReadiness={() => navigate(`/subjects/${subjectSlug}/readiness`)}
      onNavigateToMock={() => navigate(`/subjects/${subjectSlug}/practice/mock-exams`)}
      onNavigateToLastMinute={() => navigate(`/subjects/${subjectSlug}/tools/30-minute-sprint`)}
    />
  );
}

function UnitViewRouteWrapper() {
  const { subjectSlug, unitId } = useParams<{ subjectSlug: string; unitId: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');
  const [searchParams] = useSearchParams();
  const parsedId = parseInt(unitId || '1', 10);
  const unit = subjectData.getUnitById(parsedId) || subjectData.units.find(u => u.id === parsedId);

  if (!unit) {
    return (
      <EmptyContentState
        title={`Unit ${unitId} Under Preparation`}
        description={`Study content for Unit ${unitId} in ${subject?.title || 'this subject'} is currently being authored according to official university examination standards.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return (
    <UnitView
      key={`${subjectSlug}-${unit.id}`}
      unit={unit}
      initialTab={searchParams.get('tab') || 'overview'}
    />
  );
}

function McqPracticeRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');
  const [searchParams] = useSearchParams();
  const unitParam = searchParams.get('unit');
  const initialUnit = unitParam ? (parseInt(unitParam, 10) as UnitId) : undefined;
  const modeParam = searchParams.get('mode') as any;

  if (subjectData.units.length === 0 || subjectData.getAllMcqs().length === 0) {
    return (
      <EmptyContentState
        title="MCQ Question Bank Coming Soon"
        description={`Master's-level multiple-choice examination questions for ${subject?.title || 'this subject'} are currently in preparation.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return (
    <McqPractice
      key={`${subjectSlug}-${initialUnit ?? 'all'}-${modeParam ?? 'learn'}`}
      initialUnit={initialUnit}
      initialMode={modeParam || 'learn'}
    />
  );
}

function FlashcardDeckRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');
  const [searchParams] = useSearchParams();
  const unitParam = searchParams.get('unit');
  const initialUnit = unitParam ? (parseInt(unitParam, 10) as UnitId) : undefined;

  if (subjectData.units.length === 0 || subjectData.getAllFlashcards().length === 0) {
    return (
      <EmptyContentState
        title="Flashcard Deck In Preparation"
        description={`Interactive 3D revision flashcards for ${subject?.title || 'this subject'} are being compiled.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return (
    <FlashcardDeck
      key={`${subjectSlug}-${initialUnit ?? 'all'}`}
      initialUnit={initialUnit}
    />
  );
}

function MockExamViewRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');

  if (subjectData.mockExams.length === 0) {
    return (
      <EmptyContentState
        title="Mock Examinations Under Development"
        description={`Official 120-minute timed mock exams with marking rubrics and case studies for ${subject?.title || 'this subject'} are coming soon.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <MockExamView key={subjectSlug} />;
}

function CheatSheetViewRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');
  const [searchParams] = useSearchParams();
  const unitParam = searchParams.get('unit');
  const initialUnit = unitParam ? (parseInt(unitParam, 10) as UnitId) : 1;

  if (subjectData.units.length === 0) {
    return (
      <EmptyContentState
        title="Cheat Sheets Under Preparation"
        description={`High-yield printable revision cheat sheets for ${subject?.title || 'this subject'} are currently being formatted.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <CheatSheetView key={`${subjectSlug}-${initialUnit}`} initialUnit={initialUnit} />;
}

function QuestionAccordionRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');
  const [searchParams] = useSearchParams();
  const unitParam = searchParams.get('unit');
  const initialUnit = unitParam ? (parseInt(unitParam, 10) as UnitId) : undefined;

  if (subjectData.units.length === 0 || subjectData.getAllQuestions().length === 0) {
    return (
      <EmptyContentState
        title="Exam Q&A Under Preparation"
        description={`Important descriptive examination questions, case studies, and model answers for ${subject?.title || 'this subject'} are coming soon.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <QuestionAccordion key={`${subjectSlug}-${initialUnit ?? 'all'}`} initialUnit={initialUnit} />;
}

function CalculationLabRouteWrapper() {
  return <CalculationLab />;
}

function ScenarioLabRouteWrapper() {
  return <ScenarioLab />;
}

function VisualDiagramsRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subject = getSubjectBySlug(subjectSlug || '');
  const [selectedUnit, setSelectedUnit] = useState<number>(1);

  if (subjectSlug === 'it-project-management') {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
              DLMBITPAM01 · Visual Learning Architecture
            </span>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
              Interactive Diagrams & Concept Maps
            </h1>
          </div>
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {[1, 2, 3, 4, 5, 6].map(u => (
              <button
                key={u}
                onClick={() => setSelectedUnit(u)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedUnit === u
                    ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Unit {u}
              </button>
            ))}
          </div>
        </div>
        <InteractiveVisuals unitId={selectedUnit} />
      </div>
    );
  }

  if (subjectSlug !== 'corporate-governance') {
    return (
      <EmptyContentState
        title="Visual Diagrams Coming Soon"
        description={`Interactive SVG architecture diagrams and process flowcharts for ${subject?.title || 'this subject'} are currently in design.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <VisualDiagrams key={subjectSlug} />;
}

function ComparisonTablesViewRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');

  if (subjectData.comparisons.length === 0) {
    return (
      <EmptyContentState
        title="Comparison Tables In Preparation"
        description={`Master side-by-side comparison tables for ${subject?.title || 'this subject'} framework distinctions are in progress.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <ComparisonTablesView key={subjectSlug} />;
}

function ExamTrapsViewRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');

  if (subjectData.examTraps.length === 0) {
    return (
      <EmptyContentState
        title="Exam Traps Under Preparation"
        description={`High-frequency exam pitfalls and distractor analyses for ${subject?.title || 'this subject'} are being compiled.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <ExamTrapsView key={subjectSlug} />;
}

function NumbersViewRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');

  if (subjectData.numbers.length === 0) {
    return (
      <EmptyContentState
        title="Numbers To Know Coming Soon"
        description={`Curated numerical facts, thresholds, penalties, and timeframes for ${subject?.title || 'this subject'} will appear here.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <NumbersView key={subjectSlug} />;
}

function LastMinuteRevisionRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const subjectData = getSubjectData(subjectSlug);
  const subject = getSubjectBySlug(subjectSlug || '');

  if (subjectData.units.length === 0) {
    return (
      <EmptyContentState
        title="30-Minute Sprint Coming Soon"
        description={`High-intensity exam morning revision sprint for ${subject?.title || 'this subject'} is currently being compiled.`}
        subjectTitle={subject?.title}
      />
    );
  }

  return <LastMinuteRevision key={subjectSlug} />;
}

function ExamReadinessDiagnosticRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const navigate = useNavigate();

  return (
    <ExamReadinessDiagnostic
      key={subjectSlug}
      onNavigateToUnit={(uId) => navigate(`/subjects/${subjectSlug}/units/${uId}`)}
      onNavigateToMcq={() => navigate(`/subjects/${subjectSlug}/practice/mcq`)}
      onNavigateToMock={() => navigate(`/subjects/${subjectSlug}/practice/mock-exams`)}
    />
  );
}

function LegacyUnitRedirect() {
  const { unitId } = useParams<{ unitId: string }>();
  return <Navigate to={`/subjects/corporate-governance/units/${unitId || 1}`} replace />;
}

function QuickRevisionRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  if (subjectSlug === 'it-project-management') {
    return <QuickRevision key={subjectSlug} />;
  }
  return <Navigate to={`/subjects/${subjectSlug}/tools/cheat-sheets`} replace />;
}

function FinalExamPracticeRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  if (subjectSlug === 'it-project-management') {
    return <FinalExamPractice key={subjectSlug} />;
  }
  return <Navigate to={`/subjects/${subjectSlug}/practice/mock-exams`} replace />;
}

function BookmarksViewRouteWrapper() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const navigate = useNavigate();

  return (
    <BookmarksView
      key={subjectSlug}
      onNavigateToUnit={(uId) => navigate(`/subjects/${subjectSlug}/units/${uId}`)}
    />
  );
}

// ============================================================================
// Main Application Component
// ============================================================================

export function App() {
  // Theme state persisted in localStorage (key: 'iu_theme', migrating from 'cgit_theme')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('iu_theme') || localStorage.getItem('cgit_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('iu_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('iu_theme', 'light');
    }
  }, [isDarkMode]);

  // Sidebar desktop collapse state persisted in localStorage (key: 'iu_sidebar_collapsed')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    const saved = localStorage.getItem('iu_sidebar_collapsed') || localStorage.getItem('cgit_sidebar_collapsed');
    return saved === 'true';
  });

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const shellProps: ShellStateProps = {
    isDarkMode,
    setIsDarkMode,
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    isSearchOpen,
    setIsSearchOpen,
  };

  return (
    <BrowserRouter>
      <SubjectProvider>
        <Routes>
          {/* Global multi-subject home */}
          <Route path="/" element={<GlobalLayout {...shellProps} />}>
            <Route index element={<GlobalDashboardRouteWrapper />} />
          </Route>

          {/* Subject-scoped routes */}
          <Route path="/subjects/:subjectSlug" element={<SubjectLayout {...shellProps} />}>
            <Route index element={<SubjectDashboardRouteWrapper />} />
            <Route path="units/:unitId" element={<UnitViewRouteWrapper />} />
            <Route path="practice/mcq" element={<McqPracticeRouteWrapper />} />
            <Route path="practice/final-exam" element={<FinalExamPracticeRouteWrapper />} />
            <Route path="practice/flashcards" element={<FlashcardDeckRouteWrapper />} />
            <Route path="practice/mock-exams" element={<MockExamViewRouteWrapper />} />
            <Route path="practice/calculation-lab" element={<CalculationLabRouteWrapper />} />
            <Route path="practice/scenario-lab" element={<ScenarioLabRouteWrapper />} />
            <Route path="tools/quick-revision" element={<QuickRevisionRouteWrapper />} />
            <Route path="tools/cheat-sheets" element={<CheatSheetViewRouteWrapper />} />
            <Route path="tools/important-qa" element={<QuestionAccordionRouteWrapper />} />
            <Route path="tools/visual-learning" element={<VisualDiagramsRouteWrapper />} />
            <Route path="tools/comparisons" element={<ComparisonTablesViewRouteWrapper />} />
            <Route path="tools/exam-traps" element={<ExamTrapsViewRouteWrapper />} />
            <Route path="tools/numbers" element={<NumbersViewRouteWrapper />} />
            <Route path="tools/30-minute-sprint" element={<LastMinuteRevisionRouteWrapper />} />
            <Route path="readiness" element={<ExamReadinessDiagnosticRouteWrapper />} />
            <Route path="revision-list" element={<BookmarksViewRouteWrapper />} />

            {/* Subject-scoped convenience aliases */}
            <Route path="final-exam" element={<Navigate to="practice/final-exam" replace />} />
            <Route path="quick-revision" element={<Navigate to="tools/quick-revision" replace />} />
            <Route path="questions" element={<Navigate to="tools/important-qa" replace />} />
            <Route path="calculation-lab" element={<Navigate to="practice/calculation-lab" replace />} />
            <Route path="scenario-lab" element={<Navigate to="practice/scenario-lab" replace />} />
            <Route path="tools/calculation-lab" element={<Navigate to="practice/calculation-lab" replace />} />
            <Route path="tools/scenario-lab" element={<Navigate to="practice/scenario-lab" replace />} />
            <Route path="numbers" element={<Navigate to="tools/numbers" replace />} />
            <Route path="comparisons" element={<Navigate to="tools/comparisons" replace />} />
            <Route path="diagrams" element={<Navigate to="tools/visual-learning" replace />} />
            <Route path="cheat-sheets" element={<Navigate to="tools/cheat-sheets" replace />} />
            <Route path="traps" element={<Navigate to="tools/exam-traps" replace />} />
            <Route path="sprint" element={<Navigate to="tools/30-minute-sprint" replace />} />
            <Route path="bookmarks" element={<Navigate to="revision-list" replace />} />
          </Route>

          {/* Legacy redirects & fallbacks for existing bookmarks */}
          <Route path="/corporate-governance/*" element={<Navigate to="/subjects/corporate-governance" replace />} />
          <Route path="/cgit/*" element={<Navigate to="/subjects/corporate-governance" replace />} />
          <Route path="/it-project-management/*" element={<Navigate to="/subjects/it-project-management" replace />} />
          <Route path="/itpm/*" element={<Navigate to="/subjects/it-project-management" replace />} />
          <Route path="/dashboard" element={<Navigate to="/" replace />} />

          {/* Legacy single-subject routes seamlessly redirected to Corporate Governance */}
          <Route path="/units/:unitId" element={<LegacyUnitRedirect />} />
          <Route path="/practice/mcq" element={<Navigate to="/subjects/corporate-governance/practice/mcq" replace />} />
          <Route path="/practice/flashcards" element={<Navigate to="/subjects/corporate-governance/practice/flashcards" replace />} />
          <Route path="/practice/mock-exams" element={<Navigate to="/subjects/corporate-governance/practice/mock-exams" replace />} />
          <Route path="/tools/cheat-sheets" element={<Navigate to="/subjects/corporate-governance/tools/cheat-sheets" replace />} />
          <Route path="/tools/important-qa" element={<Navigate to="/subjects/corporate-governance/tools/important-qa" replace />} />
          <Route path="/tools/visual-learning" element={<Navigate to="/subjects/corporate-governance/tools/visual-learning" replace />} />
          <Route path="/tools/comparisons" element={<Navigate to="/subjects/corporate-governance/tools/comparisons" replace />} />
          <Route path="/tools/exam-traps" element={<Navigate to="/subjects/corporate-governance/tools/exam-traps" replace />} />
          <Route path="/tools/numbers" element={<Navigate to="/subjects/corporate-governance/tools/numbers" replace />} />
          <Route path="/tools/30-minute-sprint" element={<Navigate to="/subjects/corporate-governance/tools/30-minute-sprint" replace />} />
          <Route path="/readiness" element={<Navigate to="/subjects/corporate-governance/readiness" replace />} />
          <Route path="/revision-list" element={<Navigate to="/subjects/corporate-governance/revision-list" replace />} />

          {/* Legacy short paths */}
          <Route path="/mcqs" element={<Navigate to="/subjects/corporate-governance/practice/mcq" replace />} />
          <Route path="/mcq" element={<Navigate to="/subjects/corporate-governance/practice/mcq" replace />} />
          <Route path="/flashcards" element={<Navigate to="/subjects/corporate-governance/practice/flashcards" replace />} />
          <Route path="/mock-exams" element={<Navigate to="/subjects/corporate-governance/practice/mock-exams" replace />} />
          <Route path="/cheat-sheets" element={<Navigate to="/subjects/corporate-governance/tools/cheat-sheets" replace />} />
          <Route path="/questions" element={<Navigate to="/subjects/corporate-governance/tools/important-qa" replace />} />
          <Route path="/diagrams" element={<Navigate to="/subjects/corporate-governance/tools/visual-learning" replace />} />
          <Route path="/comparisons" element={<Navigate to="/subjects/corporate-governance/tools/comparisons" replace />} />
          <Route path="/traps" element={<Navigate to="/subjects/corporate-governance/tools/exam-traps" replace />} />
          <Route path="/numbers" element={<Navigate to="/subjects/corporate-governance/tools/numbers" replace />} />
          <Route path="/sprint" element={<Navigate to="/subjects/corporate-governance/tools/30-minute-sprint" replace />} />
          <Route path="/last-minute" element={<Navigate to="/subjects/corporate-governance/tools/30-minute-sprint" replace />} />
          <Route path="/bookmarks" element={<Navigate to="/subjects/corporate-governance/revision-list" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SubjectProvider>
    </BrowserRouter>
  );
}

export default App;
