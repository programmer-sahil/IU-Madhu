import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Dashboard } from './components/Dashboard';
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
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { allUnits, getUnitById } from './data/units';

export function App() {
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [unitTab, setUnitTab] = useState<string>('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  
  // Sidebar desktop collapse state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    return localStorage.getItem('cgit_sidebar_collapsed') === 'true';
  });

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('cgit_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cgit_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cgit_theme', 'light');
    }
  }, [isDarkMode]);

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

  const handleNavigate = (view: string, unitId?: number, tab?: string) => {
    setCurrentView(view);
    if (unitId) setSelectedUnitId(unitId);
    if (tab) setUnitTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentUnit = getUnitById(selectedUnitId) || allUnits[0];

  const getViewTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard';
      case 'unit': return `Unit 0${selectedUnitId}: ${currentUnit.title.split(':')[0]}`;
      case 'cheatSheets': return 'Cheat Sheets';
      case 'questions': return 'Important Exam Q&A';
      case 'mcqs': return 'MCQ Practice';
      case 'flashcards': return 'Flashcard Revision';
      case 'diagrams': return 'Visual Learning';
      case 'comparisons': return 'Master Comparison Tables';
      case 'traps': return 'Exam Traps';
      case 'numbers': return 'Numbers to Know';
      case 'lastMinute': return '30-Min Final Sprint';
      case 'mock': return 'Full Mock Examinations';
      case 'readiness': return 'Exam Readiness Diagnostic';
      case 'bookmarks': return 'My Revision List';
      default: return 'CGIT Exam Master';
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] dark:bg-[#070B14] text-slate-900 dark:text-[#F8FAFC] flex transition-colors duration-200">
      {/* Left Sidebar */}
      <Sidebar
        currentView={currentView}
        selectedUnitId={selectedUnitId}
        onNavigate={handleNavigate}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarCollapsed ? 'lg:pl-[68px]' : 'lg:pl-[230px]'}`}>
        {/* Sticky Top Navbar */}
        <Navbar
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
          onNavigateToReadiness={() => handleNavigate('readiness')}
          currentViewTitle={getViewTitle()}
        />

        {/* View Router */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto pb-24 lg:pb-12">
          {currentView === 'dashboard' && (
            <Dashboard
              onNavigateToUnit={(uId, tab) => handleNavigate('unit', uId, tab)}
              onNavigateToMcq={(uId) => handleNavigate('mcqs', uId)}
              onNavigateToReadiness={() => handleNavigate('readiness')}
              onNavigateToMock={() => handleNavigate('mock')}
              onNavigateToLastMinute={() => handleNavigate('lastMinute')}
            />
          )}

          {currentView === 'unit' && (
            <UnitView
              unit={currentUnit}
              initialTab={unitTab}
            />
          )}

          {currentView === 'cheatSheets' && (
            <CheatSheetView initialUnit={selectedUnitId as any} />
          )}

          {currentView === 'questions' && (
            <QuestionAccordion initialUnit={selectedUnitId as any} />
          )}

          {currentView === 'mcqs' && (
            <McqPractice initialUnit={selectedUnitId as any} />
          )}

          {currentView === 'flashcards' && (
            <FlashcardDeck initialUnit={selectedUnitId as any} />
          )}

          {currentView === 'diagrams' && (
            <VisualDiagrams />
          )}

          {currentView === 'comparisons' && (
            <ComparisonTablesView />
          )}

          {currentView === 'traps' && (
            <ExamTrapsView />
          )}

          {currentView === 'numbers' && (
            <NumbersView />
          )}

          {currentView === 'lastMinute' && (
            <LastMinuteRevision />
          )}

          {currentView === 'mock' && (
            <MockExamView />
          )}

          {currentView === 'readiness' && (
            <ExamReadinessDiagnostic
              onNavigateToUnit={(uId) => handleNavigate('unit', uId)}
              onNavigateToMcq={() => handleNavigate('mcqs')}
              onNavigateToMock={() => handleNavigate('mock')}
            />
          )}

          {currentView === 'bookmarks' && (
            <BookmarksView
              onNavigateToUnit={(uId) => handleNavigate('unit', uId)}
            />
          )}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200/90 dark:border-slate-800/80 p-6 md:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-16 lg:mb-0">
          <div className="font-semibold text-slate-800 dark:text-[#CBD5E1]">
            CGIT Exam Master — Corporate Governance of IT, Compliance, and Law (DLMIGCR01-01_E)
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
        currentView={currentView}
        selectedUnitId={selectedUnitId}
        onNavigate={handleNavigate}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
