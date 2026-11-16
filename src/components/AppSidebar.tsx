import React, { useState } from 'react';
import { 
  Home, LayoutGrid, Calculator, Award, Layers, FileCheck,
  Zap, HelpCircle, Compass, GitCompare, AlertOctagon, 
  Hash, Flame, CheckCircle2, Bookmark,
  ChevronLeft, ChevronRight, ChevronDown, Moon, Sun, X, PlayCircle
} from 'lucide-react';
import SubjectSwitcher from './SubjectSwitcher';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface AppSidebarProps {
  currentView: string;
  currentSubjectSlug: string;
  selectedUnitId: number;
  onNavigate: (view: string, unitId?: number) => void;
  onNavigateHome: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  // Subject data
  subjects: Array<{
    slug: string;
    shortCode: string;
    title: string;
    courseCode: string;
    accentHex: string;
  }>;
  currentSubjectUnits: Array<{
    id: number;
    title: string;
    shortTitle: string;
    status?: string;
    sections?: Array<{ id: string; number: string; title: string }>;
  }>;
  getSubjectProgress: (slug: string) => number;
  onSelectSubject: (slug: string) => void;
  // Data counts for badges (real data only)
  mcqCount?: number;
  mockExamDuration?: string;
  // Optional controlled collapse
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentView,
  currentSubjectSlug,
  selectedUnitId,
  onNavigate,
  onNavigateHome,
  isOpenMobile,
  onCloseMobile,
  isDarkMode,
  onToggleDarkMode,
  subjects = [],
  currentSubjectUnits = [],
  getSubjectProgress,
  onSelectSubject,
  mcqCount,
  mockExamDuration,
  isCollapsed: controlledCollapsed,
  onToggleCollapse: controlledToggleCollapse,
}) => {
  // Desktop collapse state persisted in localStorage (key: 'iu_sidebar_collapsed')
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(() => {
    return localStorage.getItem('iu_sidebar_collapsed') === 'true';
  });

  const [expandedUnitIds, setExpandedUnitIds] = useState<Record<number, boolean>>(() => {
    return { [selectedUnitId || 1]: true };
  });

  const toggleUnitExpand = (unitId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedUnitIds(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  const isControlled = controlledCollapsed !== undefined;
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed;

  // Collapsible section memory (PRACTICE, REVISION TOOLS, PROGRESS, UNITS)
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('iu_sidebar_sec_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleSectionCollapse = (secKey: string) => {
    setCollapsedSections(prev => {
      const next = { ...prev, [secKey]: !prev[secKey] };
      try {
        localStorage.setItem('iu_sidebar_sec_state', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const toggleCollapse = () => {
    if (controlledToggleCollapse) {
      controlledToggleCollapse();
    }
    const next = !collapsed;
    setInternalCollapsed(next);
    localStorage.setItem('iu_sidebar_collapsed', String(next));
  };

  const practiceItems: NavItem[] = [
    {
      id: 'mcqs',
      label: 'MCQ Practice',
      icon: Award,
      badge: mcqCount !== undefined && mcqCount > 0 ? String(mcqCount) : undefined,
    },
    {
      id: 'finalExam',
      label: 'Final Exam Simulation',
      icon: PlayCircle,
      badge: '90m',
    },
    {
      id: 'calculationLab',
      label: 'Calculation Lab',
      icon: Calculator,
      badge: currentSubjectSlug === 'it-project-management' ? 'U2-U3' : undefined,
    },
    {
      id: 'scenarioLab',
      label: 'Scenario Lab',
      icon: Compass,
      badge: currentSubjectSlug === 'it-project-management' ? 'U4' : undefined,
    },
    {
      id: 'flashcards',
      label: 'Flashcards',
      icon: Layers,
    },
    {
      id: 'mock',
      label: 'Mock Exams',
      icon: FileCheck,
      badge: mockExamDuration ? mockExamDuration : undefined,
    },
  ];

  const revisionItems: NavItem[] = [
    { id: 'quickRevision', label: 'Quick Revision Hub', icon: Zap, badge: 'High-Yield' },
    { id: 'cheatSheets', label: 'Cheat Sheets', icon: FileCheck },
    { id: 'questions', label: 'Important Q&A', icon: HelpCircle },
    { id: 'diagrams', label: 'Visual Learning', icon: Compass },
    { id: 'comparisons', label: 'Comparisons', icon: GitCompare },
    { id: 'traps', label: 'Exam Traps', icon: AlertOctagon },
    { id: 'numbers', label: 'Numbers to Know', icon: Hash },
    { id: 'lastMinute', label: '30-Min Sprint', icon: Flame },
  ];

  const progressItems: NavItem[] = [
    { id: 'readiness', label: 'Practice Readiness', icon: CheckCircle2 },
    { id: 'bookmarks', label: 'My Revision List', icon: Bookmark },
  ];

  const navSections: Array<{ heading: string; items: NavItem[] }> = [
    {
      heading: 'PRACTICE',
      items: practiceItems,
    },
    {
      heading: 'REVISION',
      items: revisionItems,
    },
    {
      heading: 'PERSONAL',
      items: progressItems,
    },
  ];

  const getSectionStatus = (secNumber: string): { symbol: string; color: string; label: string } => {
    try {
      const raw = localStorage.getItem('iu_exam_master_progress_v2');
      if (raw) {
        const parsed = JSON.parse(raw);
        const subj = parsed.subjects?.[currentSubjectSlug];
        if (subj) {
          if (subj.bookmarkedItems?.some((b: any) => typeof b === 'string' && b.includes(secNumber))) {
            return { symbol: '★', color: 'text-amber-500 font-bold', label: 'Bookmarked' };
          }
          if (subj.completedTopics?.some((t: any) => typeof t === 'string' && t.includes(secNumber))) {
            return { symbol: '✓', color: 'text-emerald-500 font-bold', label: 'Completed' };
          }
          const answered = Object.keys(subj.answeredMcqs || {}).filter(k => k.includes(`s${secNumber.replace('.', '')}`)).length;
          if (answered > 0) {
            return { symbol: '◔', color: 'text-sky-500 font-bold', label: 'In Progress' };
          }
        }
      }
    } catch {}
    return { symbol: '○', color: 'text-slate-300 dark:text-slate-600', label: 'Not Started' };
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden animate-fade-in"
          aria-hidden="true"
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
        {/* Top Header: Brand & SubjectSwitcher */}
        <div className="border-b border-slate-200/80 dark:border-slate-800/80">
          {collapsed ? (
            /* Collapsed Brand View */
            <div className="p-3 flex flex-col items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onNavigateHome();
                  onCloseMobile();
                }}
                className="cursor-pointer focus:outline-none rounded-lg p-0.5 hover:opacity-90 transition-opacity"
                title="IU Exam Master — Home"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-[#151E31] border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-sm">
                  <span className="font-mono font-bold text-xs tracking-tight text-indigo-500 dark:text-indigo-400">
                    IU
                  </span>
                </div>
              </button>

              {/* Subject Switcher in Collapsed Mode */}
              <div className="w-full flex justify-center">
                <SubjectSwitcher
                  currentSlug={currentSubjectSlug}
                  subjects={subjects}
                  getProgress={getSubjectProgress}
                  onSelect={onSelectSubject}
                  onSelectSubject={onSelectSubject}
                  collapsed={true}
                />
              </div>

              {/* Expand Button */}
              <button
                type="button"
                onClick={toggleCollapse}
                className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="Expand sidebar"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Expanded Brand View */
            <div className="p-3 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onNavigateHome();
                    onCloseMobile();
                  }}
                  className="cursor-pointer flex items-center gap-2.5 overflow-hidden text-left focus:outline-none rounded-lg p-0.5 hover:opacity-90 transition-opacity flex-1 min-w-0"
                  title="IU Exam Master — Home"
                >
                  {/* IU Monogram */}
                  <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-[#151E31] border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="font-mono font-bold text-xs tracking-tight text-indigo-500 dark:text-indigo-400">
                      IU
                    </span>
                  </div>

                  <div className="truncate flex-1">
                    <div className="font-bold text-xs tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                      <span>IU</span>
                      <span className="font-normal text-slate-500 dark:text-slate-400">Exam Master</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium tracking-tight truncate">
                      Master's Examination Preparation
                    </div>
                  </div>
                </button>

                <div className="flex items-center shrink-0">
                  {/* Desktop Collapse Button */}
                  <button
                    type="button"
                    onClick={toggleCollapse}
                    className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    title="Collapse sidebar"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Mobile Close Button */}
                  <button
                    type="button"
                    onClick={onCloseMobile}
                    className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
                    title="Close sidebar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Subject Switcher in Expanded Mode */}
              <SubjectSwitcher
                currentSlug={currentSubjectSlug}
                subjects={subjects}
                getProgress={getSubjectProgress}
                onSelect={onSelectSubject}
                onSelectSubject={onSelectSubject}
                collapsed={false}
              />
            </div>
          )}
        </div>

        {/* Scrollable Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-2 py-2.5 space-y-2.5 scrollbar-thin">
          {/* SECTION: OVERVIEW */}
          <div>
            {!collapsed && (
              <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                OVERVIEW
              </span>
            )}
            <div className="space-y-0.5">
              {/* Home */}
              <button
                type="button"
                onClick={() => {
                  onNavigateHome();
                  onCloseMobile();
                }}
                className={`w-full flex items-center ${collapsed ? 'justify-center px-1.5 py-1.5' : 'justify-between px-2.5 py-1.25'} rounded-lg text-xs font-medium transition-all ${
                  currentView === 'home'
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title="Home"
              >
                <div className={`flex items-center gap-2.5 truncate ${collapsed ? 'justify-center' : ''}`}>
                  <Home className="w-4 h-4 shrink-0" />
                  {!collapsed && <span className="truncate">Home</span>}
                </div>
              </button>

              {/* Subject Dashboard */}
              <button
                type="button"
                onClick={() => {
                  onNavigate('dashboard');
                  onCloseMobile();
                }}
                className={`w-full flex items-center ${collapsed ? 'justify-center px-1.5 py-1.5' : 'justify-between px-2.5 py-1.25'} rounded-lg text-xs font-medium transition-all ${
                  currentView === 'dashboard'
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
                title="Subject Dashboard"
              >
                <div className={`flex items-center gap-2.5 truncate ${collapsed ? 'justify-center' : ''}`}>
                  <LayoutGrid className="w-4 h-4 shrink-0" />
                  {!collapsed && <span className="truncate">Subject Dashboard</span>}
                </div>
              </button>
            </div>
          </div>

          {/* SECTION: UNITS (Dynamic) */}
          {currentSubjectUnits.length > 0 && (
            <div>
              {!collapsed && (
                <button
                  type="button"
                  onClick={() => toggleSectionCollapse('COURSE')}
                  className="w-full flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors mb-1 text-left cursor-pointer"
                >
                  <span>COURSE (UNITS 1–6)</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${!collapsed && !!collapsedSections['COURSE'] ? '-rotate-90' : ''}`} />
                </button>
              )}
              {(!collapsedSections['COURSE'] || collapsed) && (
                <div className="space-y-0.5">
                  {currentSubjectUnits.map(unit => {
                    const isActive = currentView === 'unit' && selectedUnitId === unit.id;
                    const isComingSoon = unit.status === 'coming-soon';
                    const hasSections = Array.isArray(unit.sections) && unit.sections.length > 0;
                    const isExpanded = !!expandedUnitIds[unit.id];
                    const unitDisplayTitle = unit.shortTitle || unit.title;
                    const unitHoverTitle = unit.title ? `Unit ${unit.id}: ${unit.title}` : `Unit ${unit.id}`;

                    return (
                      <div key={unit.id} className="relative group/unit space-y-0.5">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate('unit', unit.id);
                              onCloseMobile();
                            }}
                            className={`w-full flex items-center ${collapsed ? 'justify-center px-1.5 py-1.5' : 'justify-between px-2.5 py-1.25'} rounded-lg text-xs font-medium transition-all ${
                              isActive
                                ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                            title={collapsed ? undefined : unitHoverTitle}
                          >
                            <div className={`flex items-center gap-2 ${collapsed ? 'justify-center' : 'min-w-0 flex-1'}`}>
                              <span className={`w-4 h-4 rounded text-[10px] font-mono font-bold flex items-center justify-center shrink-0 ${
                                isActive
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                              }`}>
                                {unit.id}
                              </span>
                              {!collapsed && (
                                <span 
                                  className="truncate text-left text-[11px] block flex-1"
                                  title={unit.title}
                                >
                                  {unitDisplayTitle}
                                </span>
                              )}
                            </div>

                            {!collapsed && isComingSoon && (
                              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0 ml-1">
                                Soon
                              </span>
                            )}

                            {!collapsed && !isComingSoon && hasSections && (
                              <button
                                type="button"
                                onClick={(e) => toggleUnitExpand(unit.id, e)}
                                className="p-0.5 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-1 shrink-0"
                                title={isExpanded ? "Collapse sections" : "Expand sections"}
                              >
                                {isExpanded ? (
                                  <ChevronDown className="w-3 h-3" />
                                ) : (
                                  <ChevronRight className="w-3 h-3" />
                                )}
                              </button>
                            )}
                          </button>
                        </div>

                        {/* Collapsed Mode Hover Flyout Popup */}
                        {collapsed && (
                          <div className="hidden group-hover/unit:block absolute left-full top-0 ml-2.5 w-64 p-3 bg-white dark:bg-[#111827] rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 text-left pointer-events-auto animate-fade-in">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="w-5 h-5 rounded bg-indigo-600 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                                  {unit.id}
                                </span>
                                <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                                  {unit.shortTitle || unit.title}
                                </span>
                              </div>
                              {isComingSoon ? (
                                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                                  Soon
                                </span>
                              ) : (
                                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                                  Exam Ready
                                </span>
                              )}
                            </div>
                            {hasSections && (
                              <div className="space-y-1 my-2 max-h-48 overflow-y-auto scrollbar-thin">
                                {unit.sections!.map(sec => {
                                  const secStatus = getSectionStatus(sec.number);
                                  return (
                                    <div key={sec.id || sec.number} className="flex items-center justify-between text-[11px] py-1 px-1.5 rounded hover:bg-slate-50 dark:hover:bg-slate-800/60">
                                      <span className="text-slate-600 dark:text-slate-300 truncate pr-2">
                                        <span className="font-mono text-slate-400 dark:text-slate-500 mr-1.5 font-semibold">{sec.number}</span>
                                        {sec.title}
                                      </span>
                                      <span className={`text-[10px] font-mono shrink-0 ${secStatus.color}`} title={secStatus.label}>
                                        {secStatus.symbol}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                onNavigate('unit', unit.id);
                                onCloseMobile();
                              }}
                              className="mt-2 w-full py-1.5 px-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold text-center transition-colors shadow-sm"
                            >
                              Open Unit {unit.id} →
                            </button>
                          </div>
                        )}

                        {/* Accordion Sub-sections in Expanded Mode */}
                        {!collapsed && !isComingSoon && hasSections && isExpanded && (
                          <div className="ml-4 pl-2 border-l border-slate-200 dark:border-slate-800 my-1 space-y-0.5">
                            {unit.sections!.map(sec => {
                              const secStatus = getSectionStatus(sec.number);
                              return (
                                <button
                                  key={sec.id || sec.number}
                                  type="button"
                                  onClick={() => {
                                    onNavigate('unit', unit.id);
                                    onCloseMobile();
                                  }}
                                  className="w-full text-left py-1 px-1.5 rounded text-[10px] text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/40 transition-colors flex items-center justify-between group"
                                  title={`${sec.number} ${sec.title} (${secStatus.label})`}
                                >
                                  <div className="flex items-center min-w-0 flex-1 truncate">
                                    <span className="font-mono font-semibold text-slate-400 dark:text-slate-500 mr-1.5 shrink-0">{sec.number}</span>
                                    <span className="truncate">{sec.title}</span>
                                  </div>
                                  <span className={`text-[10px] font-mono ml-1.5 shrink-0 ${secStatus.color}`}>
                                    {secStatus.symbol}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* SECTIONS: PRACTICE, REVISION, PERSONAL */}
          {navSections.map(sec => {
            const isSecCollapsed = !collapsed && !!collapsedSections[sec.heading];
            return (
              <div key={sec.heading}>
                {!collapsed && (
                  <button
                    type="button"
                    onClick={() => toggleSectionCollapse(sec.heading)}
                    className="w-full flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors mb-1 text-left cursor-pointer"
                  >
                    <span>{sec.heading}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSecCollapsed ? '-rotate-90' : ''}`} />
                  </button>
                )}
                {!isSecCollapsed && (
                  <div className="space-y-0.5">
                    {sec.items.map(item => {
                      const Icon = item.icon;
                      const isActive = currentView === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            onNavigate(item.id);
                            onCloseMobile();
                          }}
                          className={`w-full flex items-center ${collapsed ? 'justify-center px-1.5 py-1.5' : 'justify-between px-2.5 py-1.25'} rounded-lg text-xs font-medium transition-all ${
                            isActive
                              ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border-l-2 border-indigo-600 dark:border-indigo-500'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                          }`}
                          title={item.label}
                        >
                          <div className={`flex items-center gap-2.5 ${collapsed ? 'justify-center' : 'truncate min-w-0 flex-1'}`}>
                            <Icon className="w-4 h-4 shrink-0" />
                            {!collapsed && <span className="truncate">{item.label}</span>}
                          </div>

                          {!collapsed && item.badge && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold shrink-0 ml-1.5">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Studying Quick Card */}
        {!collapsed && (
          <div className="mx-2 mb-2 p-2.5 rounded-xl bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-500/5 border border-indigo-500/20 dark:border-indigo-500/30">
            <div className="flex items-center justify-between text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
              <span className="flex items-center gap-1">
                <PlayCircle className="w-3 h-3" /> Continue Studying
              </span>
              <span className="font-mono">Unit {selectedUnitId || 1}</span>
            </div>
            <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate">
              {currentSubjectUnits.find(u => u.id === (selectedUnitId || 1))?.title || 'Characteristics of IT Projects'}
            </div>
            <button
              type="button"
              onClick={() => {
                onNavigate('unit', selectedUnitId || 1);
                onCloseMobile();
              }}
              className="mt-2 w-full py-1 px-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition-colors shadow-sm"
            >
              Resume Study →
            </button>
          </div>
        )}

        {collapsed && (
          <div className="px-2 mb-2 flex justify-center">
            <button
              type="button"
              onClick={() => onNavigate('unit', selectedUnitId || 1)}
              className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors shadow-sm"
              title={`Resume Unit ${selectedUnitId || 1}`}
            >
              <PlayCircle className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Footer / Tutor Signature & Theme Switcher */}
        <div className={`p-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} text-xs shrink-0`}>
          {!collapsed && (
            <div className="text-[11px] leading-tight min-w-0 flex-1 mr-2">
              <span className="block font-semibold text-slate-800 dark:text-slate-200 truncate">
                Tutor SK SAHIL
              </span>
              <span className="text-slate-400 text-[10px] block truncate">
                IU Applied Sciences
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#151E31] text-slate-600 dark:text-slate-300 hover:scale-105 transition-all shrink-0"
            title="Toggle Light / Dark Mode"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
          </button>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
