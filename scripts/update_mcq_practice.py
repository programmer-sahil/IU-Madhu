with open("src/components/McqPractice.tsx", "r") as f:
    text = f.read()

# 1. Update McqViewMode and Props interface
old_type = "export type McqViewMode = 'practice' | 'exam' | 'rapid' | 'learn';"
new_type = """export type McqViewMode = 'practice' | 'exam' | 'rapid' | 'learn';
export type McqFocusFilter = 'all' | 'calculation' | 'scenario' | 'trap';"""
text = text.replace(old_type, new_type)

text = text.replace("initialMode = 'practice' \n}) => {", """initialMode = 'practice' 
}) => {
  const [focusFilter, setFocusFilter] = useState<McqFocusFilter>(() => {
    if ((initialMode as string) === 'calculation') return 'calculation';
    if ((initialMode as string) === 'scenario') return 'scenario';
    return 'all';
  });""")

# 2. Add focus filtering logic inside activeQuestions
filter_anchor = "    // Section filter\n    if (selectedSection !== 'all') {\n      filtered = filtered.filter(m => m.section === selectedSection || m.sourceSection === selectedSection);\n    }"
focus_filter_code = """    // Section filter
    if (selectedSection !== 'all') {
      filtered = filtered.filter(m => m.section === selectedSection || m.sourceSection === selectedSection);
    }

    // Focus filter (Calculation vs Scenario vs Trap)
    if (focusFilter === 'calculation') {
      filtered = filtered.filter(m => 
        (m as any).type === 'calculation' || 
        (m.topic && /evm|cost|fpa|estimation|pert|float|variance|cpi|spi|pv|npv|roi|payback/i.test(m.topic))
      );
    } else if (focusFilter === 'scenario') {
      filtered = filtered.filter(m => 
        (m as any).type === 'scenario' || 
        (m.topic && /stakeholder|salience|raci|conflict|negotiation|culture|leadership|power/i.test(m.topic))
      );
    } else if (focusFilter === 'trap') {
      filtered = filtered.filter(m => Boolean(m.examTrap));
    }"""
text = text.replace(filter_anchor, focus_filter_code)

# 3. Add focusFilter to dependency array
text = text.replace("mode, isShuffled, examQuestionCount, progress.answeredMcqs, isBookmarked, guessedQuestions", "mode, focusFilter, isShuffled, examQuestionCount, progress.answeredMcqs, isBookmarked, guessedQuestions")
text = text.replace("[mode, selectedUnit, selectedSection, difficultyFilter, statusFilter, isShuffled]", "[mode, focusFilter, selectedUnit, selectedSection, difficultyFilter, statusFilter, isShuffled]")

# 4. Fix summary card active units
old_summary_badge = '<div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Units 1 & 2 Active</div>'
new_summary_badge = '<div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">{availableUnits.length > 0 ? `${availableUnits.map(u => `U${u.id}`).join(", ")} Active` : "All Units"}</div>'
text = text.replace(old_summary_badge, new_summary_badge)

# 5. Add Focus Filter Chips in the filter UI
old_status_div = """          {/* Status Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as McqStatusFilter)}
              className="w-full text-xs font-medium rounded-lg px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">All Statuses</option>
              <option value="unseen">Unseen</option>
              <option value="incorrect">Incorrect</option>
              <option value="correct">Correct</option>
              <option value="bookmarked">Bookmarked</option>
              <option value="guessed">Guessed</option>
            </select>
          </div>
        </div>"""

new_status_div = """          {/* Status Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as McqStatusFilter)}
              className="w-full text-xs font-medium rounded-lg px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">All Statuses</option>
              <option value="unseen">Unseen</option>
              <option value="incorrect">Incorrect</option>
              <option value="correct">Correct</option>
              <option value="bookmarked">Bookmarked</option>
              <option value="guessed">Guessed</option>
            </select>
          </div>
        </div>

        {/* Quick Focus Filters (Formulas, Scenarios, Traps) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Focus Mode:
          </span>
          {[
            { id: 'all', label: 'All Question Types' },
            { id: 'calculation', label: '🧮 Calculations & Formulas' },
            { id: 'scenario', label: '🧭 Real Scenarios & Cases' },
            { id: 'trap', label: '⚠️ Exam Traps Only' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFocusFilter(f.id as McqFocusFilter)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                focusFilter === f.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>"""

text = text.replace(old_status_div, new_status_div)

with open("src/components/McqPractice.tsx", "w") as f:
    f.write(text)

print("Updated McqPractice.tsx successfully!")

