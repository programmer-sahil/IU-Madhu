import React from 'react';
import { 
  Home, BookOpen, Zap, HelpCircle, Award, Layers, 
  GitCompare, AlertOctagon, Hash, Flame, FileCheck, 
  Bookmark, CheckCircle2, Shield, X, Moon, Sun, Sparkles 
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
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  selectedUnitId,
  onNavigate,
  isOpenMobile,
  onCloseMobile,
  isDarkMode,
  onToggleDarkMode
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'cheatSheets', label: 'Cheat Sheets', icon: Zap },
    { id: 'questions', label: 'Important Q&A', icon: HelpCircle },
    { id: 'mcqs', label: 'MCQ Practice', icon: Award },
    { id: 'flashcards', label: 'Flashcards', icon: Layers },
    { id: 'diagrams', label: 'Visual Learning', icon: Sparkles },
    { id: 'comparisons', label: 'Comparison Tables', icon: GitCompare },
    { id: 'traps', label: 'Exam Traps', icon: AlertOctagon },
    { id: 'numbers', label: 'Numbers to Remember', icon: Hash },
    { id: 'lastMinute', label: '30-Min Final Revision', icon: Flame },
    { id: 'mock', label: 'Full Mock Exams', icon: FileCheck },
    { id: 'readiness', label: 'Am I Ready? (Progress)', icon: CheckCircle2 },
    { id: 'bookmarks', label: 'My Revision List', icon: Bookmark },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden animate-fade-in"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-white/95 dark:bg-[#090f1d]/95 backdrop-blur-xl border-r border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <div 
            onClick={() => {
              onNavigate('dashboard');
              onCloseMobile();
            }}
            className="cursor-pointer flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-sm text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
                CGIT <span className="text-indigo-600 dark:text-indigo-400">Exam Master</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                DLMIGCR01-01_E • IU
              </div>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto p-3 space-y-6 scrollbar-thin">
          {/* Main Views */}
          <div className="space-y-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Main Menu
            </span>
            {navItems.slice(0, 1).map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Six Study Units */}
          <div className="space-y-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Study Units (1 to 6)
            </span>
            {allUnits.map(unit => {
              const isActive = currentView === 'unit' && selectedUnitId === unit.id;
              return (
                <button
                  key={unit.id}
                  onClick={() => {
                    onNavigate('unit', unit.id);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {unit.id}
                    </span>
                    <span className="truncate">{unit.title.split(':')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* High-Yield Tool Suite */}
          <div className="space-y-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Exam Tool Suite
            </span>
            {navItems.slice(1).map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer / Theme Switcher */}
        <div className="p-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <div className="text-[11px]">
            <span className="block font-bold text-slate-700 dark:text-slate-300">Tutor SK SAHIL</span>
            <span>IU Applied Sciences</span>
          </div>

          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-105 transition-all"
            title="Toggle Light / Dark Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
        </div>
      </aside>
    </>
  );
};
