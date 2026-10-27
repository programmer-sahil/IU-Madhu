import React, { useState, useEffect } from 'react';
import { 
  Home, BookOpen, Zap, HelpCircle, Award, Layers, 
  GitCompare, AlertOctagon, Hash, Flame, FileCheck, 
  Bookmark, CheckCircle2, ChevronLeft, ChevronRight,
  Compass, Moon, Sun, X
} from 'lucide-react';
import { allUnits } from '../data/units';

interface SidebarProps {
  currentView: string;
  selectedUnitId: number;
  onNavigate: (view: string, unitId?: number) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  selectedUnitId,
  onNavigate,
  isOpenMobile,
  onCloseMobile,
  isDarkMode,
  onToggleDarkMode,
}) => {
  // Desktop collapse state persisted in localStorage
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    return localStorage.getItem('cgit_sidebar_collapsed') === 'true';
  });

  const toggleCollapse = () => {
    setCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('cgit_sidebar_collapsed', String(next));
      return next;
    });
  };

  const navSections = [
    {
      heading: 'STUDY',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
      ]
    },
    {
      heading: 'PRACTICE',
      items: [
        { id: 'mcqs', label: 'MCQ Practice', icon: Award, badge: '233' },
        { id: 'flashcards', label: 'Flashcards', icon: Layers },
        { id: 'mock', label: 'Mock Exams', icon: FileCheck, badge: '90m' },
      ]
    },
    {
      heading: 'EXAM TOOLS',
      items: [
        { id: 'cheatSheets', label: 'Cheat Sheets', icon: Zap },
        { id: 'questions', label: 'Important Q&A', icon: HelpCircle },
        { id: 'diagrams', label: 'Visual Learning', icon: Compass },
        { id: 'comparisons', label: 'Comparisons', icon: GitCompare },
        { id: 'traps', label: 'Exam Traps', icon: AlertOctagon },
        { id: 'numbers', label: 'Numbers to Know', icon: Hash },
        { id: 'lastMinute', label: '30-Min Sprint', icon: Flame },
      ]
    },
    {
      heading: 'PERSONAL',
      items: [
        { id: 'readiness', label: 'Am I Ready?', icon: CheckCircle2 },
        { id: 'bookmarks', label: 'Revision List', icon: Bookmark },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden animate-fade-in"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 bottom-0 left-0 z-50 
          bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl 
          border-r border-slate-200/90 dark:border-slate-800/80 
          flex flex-col justify-between 
          transition-all duration-300 ease-in-out
          ${collapsed ? 'w-[68px]' : 'w-[230px]'}
          ${isOpenMobile ? 'translate-x-0 w-[240px]' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Brand Header */}
        <div className={`p-4 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <div 
            onClick={() => {
              onNavigate('dashboard');
              onCloseMobile();
            }}
            className="cursor-pointer flex items-center gap-2.5 overflow-hidden"
            title="CGIT Exam Master"
          >
            {/* Minimal Academic Monogram */}
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-[#151E31] border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-sm">
              <span className="font-mono font-bold text-xs tracking-tight text-indigo-500 dark:text-indigo-400">
                CG
              </span>
            </div>

            {!collapsed && (
              <div className="truncate">
                <div className="font-bold text-xs tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                  <span>CGIT</span>
                  <span className="font-normal text-slate-500 dark:text-slate-400">Exam Master</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono tracking-wider">
                  DLMIGCR01-01_E
                </div>
              </div>
            )}
          </div>

          {/* Desktop Collapse Button */}
          <button
            onClick={toggleCollapse}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 scrollbar-thin">
          {/* Section 1: Study & Dashboard */}
          <div>
            {!collapsed && (
              <span className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                STUDY
              </span>
            )}
            <button
              onClick={() => {
                onNavigate('dashboard');
                onCloseMobile();
              }}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium transition-all ${
                currentView === 'dashboard'
                  ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title="Dashboard"
            >
              <Home className="w-4 h-4 shrink-0" />
              {!collapsed && <span>Dashboard</span>}
            </button>
          </div>

          {/* Section 2: Six Units */}
          <div>
            {!collapsed && (
              <span className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                UNITS
              </span>
            )}
            <div className="space-y-0.5">
              {allUnits.map(unit => {
                const isActive = currentView === 'unit' && selectedUnitId === unit.id;
                return (
                  <button
                    key={unit.id}
                    onClick={() => {
                      onNavigate('unit', unit.id);
                      onCloseMobile();
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                    title={`Unit ${unit.id}: ${unit.title}`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-4 h-4 rounded text-[10px] font-mono font-bold flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        {unit.id}
                      </span>
                      {!collapsed && (
                        <span className="truncate text-left text-[11px]">
                          {unit.title.split(':')[0]}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Remaining Sections: Practice, Exam Tools, Personal */}
          {navSections.slice(1).map(sec => (
            <div key={sec.heading}>
              {!collapsed && (
                <span className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {sec.heading}
                </span>
              )}
              <div className="space-y-0.5">
                {sec.items.map(item => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        onCloseMobile();
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                      title={item.label}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className="w-4 h-4 shrink-0" />
                        {!collapsed && <span className="truncate">{item.label}</span>}
                      </div>
                      {!collapsed && item.badge && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Theme Switcher */}
        <div className={`p-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} text-xs`}>
          {!collapsed && (
            <div className="text-[11px] leading-tight">
              <span className="block font-semibold text-slate-800 dark:text-slate-200">Tutor SK SAHIL</span>
              <span className="text-slate-400 text-[10px]">IU Applied Sciences</span>
            </div>
          )}

          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#151E31] text-slate-600 dark:text-slate-300 hover:scale-105 transition-all"
            title="Toggle Light / Dark Mode"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
          </button>
        </div>
      </aside>
    </>
  );
};
