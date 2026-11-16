with open("src/components/AppSidebar.tsx", "r") as f:
    text = f.read()

# 1. Import Calculator
if "Calculator" not in text:
    text = text.replace("import { \n  Home, LayoutGrid,", "import { \n  Home, LayoutGrid, Calculator,")

# 2. Add Calculation Lab and Scenario Lab to practiceItems
if "id: 'calculationLab'" not in text:
    old_practice = """  const practiceItems: NavItem[] = [
    {
      id: 'mcqs',
      label: 'MCQ Practice',
      icon: Award,
      badge: mcqCount !== undefined && mcqCount > 0 ? String(mcqCount) : undefined,
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
  ];"""

    new_practice = """  const practiceItems: NavItem[] = [
    {
      id: 'mcqs',
      label: 'MCQ Practice',
      icon: Award,
      badge: mcqCount !== undefined && mcqCount > 0 ? String(mcqCount) : undefined,
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
  ];"""
    text = text.replace(old_practice, new_practice)

# 3. Add section collapse state
if "const [collapsedSections, setCollapsedSections]" not in text:
    anchor_state = "  const toggleCollapse = () => {"
    collapse_logic = """  // Collapsible section memory (PRACTICE, REVISION TOOLS, PROGRESS, UNITS)
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

  const toggleCollapse = () => {"""
    text = text.replace(anchor_state, collapse_logic)

# 4. Make section headers interactive with Chevron
old_nav_sec_render = """          {/* SECTIONS: PRACTICE, REVISION TOOLS, PROGRESS */}
          {navSections.map(sec => (
            <div key={sec.heading}>
              {!collapsed && (
                <span className="px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {sec.heading}
                </span>
              )}
              <div className="space-y-0.5">"""

new_nav_sec_render = """          {/* SECTIONS: PRACTICE, REVISION TOOLS, PROGRESS */}
          {navSections.map(sec => {
            const isSecCollapsed = !collapsed && !!collapsedSections[sec.heading];
            return (
              <div key={sec.heading}>
                {!collapsed && (
                  <button
                    type="button"
                    onClick={() => toggleSectionCollapse(sec.heading)}
                    className="w-full flex items-center justify-between px-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors mb-1 text-left cursor-pointer"
                  >
                    <span>{sec.heading}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isSecCollapsed ? '-rotate-90' : ''}`} />
                  </button>
                )}
                {!isSecCollapsed && (
                  <div className="space-y-0.5">"""

old_nav_sec_end = """                  );
                })}
              </div>
            </div>
          ))}"""

new_nav_sec_end = """                  );
                })}
                  </div>
                )}
              </div>
            );
          })}"""

text = text.replace(old_nav_sec_render, new_nav_sec_render)
text = text.replace(old_nav_sec_end, new_nav_sec_end)

with open("src/components/AppSidebar.tsx", "w") as f:
    f.write(text)

print("Updated AppSidebar.tsx successfully!")
