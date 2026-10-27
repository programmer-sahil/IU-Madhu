import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 flex transition-colors duration-200">
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
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        {/* Sticky Top Navbar */}
        <Navbar
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
          onNavigateToReadiness={() => handleNavigate('readiness')}
        />

        {/* View Router */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
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
        <footer className="border-t border-slate-200/80 dark:border-slate-800/80 p-6 md:px-8 text-center text-xs text-slate-500 space-y-1">
          <div className="font-bold text-slate-700 dark:text-slate-300">
            CGIT Exam Master — Corporate Governance of IT, Compliance, and Law (DLMIGCR01-01_E)
          </div>
          <div>
            IU International University of Applied Sciences • Prepared by Tutor SK SAHIL
          </div>
          <div className="text-[11px] text-slate-400">
            Academic content strictly grounded in official IU course books, chapter notes, and mock examinations.
          </div>
        </footer>
      </div>

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
