with open("src/App.tsx", "r") as f:
    text = f.read()

# 1. Imports
if "import { CalculationLab }" not in text:
    imp_anchor = "import { BookmarksView } from './components/BookmarksView';"
    new_imports = imp_anchor + "\nimport { CalculationLab } from './components/CalculationLab';\nimport { ScenarioLab } from './components/ScenarioLab';\nimport { InteractiveVisuals } from './components/InteractiveVisuals';"
    text = text.replace(imp_anchor, new_imports)

# 2. getViewTitle
if "if (pathname.includes('/practice/calculation-lab'))" not in text:
    anchor = "if (pathname.includes('/practice/mock-exams')) return 'Full Mock Examinations';"
    add_title = anchor + "\n  if (pathname.includes('/practice/calculation-lab')) return 'Calculation & Formula Lab';\n  if (pathname.includes('/practice/scenario-lab')) return 'Stakeholder & Conflict Scenario Lab';"
    text = text.replace(anchor, add_title)

# 3. getActiveNavView
if "if (pathname.includes('/practice/calculation-lab')) return 'calculationLab';" not in text:
    anchor_nav = "if (pathname.includes('/practice/mock-exams')) return 'mock';"
    add_nav = anchor_nav + "\n  if (pathname.includes('/practice/calculation-lab')) return 'calculationLab';\n  if (pathname.includes('/practice/scenario-lab')) return 'scenarioLab';"
    text = text.replace(anchor_nav, add_nav)

# 4. handleNavigate
if "case 'calculationLab':" not in text:
    anchor_case = "case 'mock':\n        navigate(`/subjects/${targetSlug}/practice/mock-exams`);\n        break;"
    add_case = anchor_case + "\n      case 'calculationLab':\n        navigate(`/subjects/${targetSlug}/practice/calculation-lab`);\n        break;\n      case 'scenarioLab':\n        navigate(`/subjects/${targetSlug}/practice/scenario-lab`);\n        break;"
    text = text.replace(anchor_case, add_case)

# 5. Route Wrappers
wrappers_code = '''
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
            {[1, 2, 3, 4].map(u => (
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
'''

# Replace old VisualDiagramsRouteWrapper
old_vd_start = text.find("function VisualDiagramsRouteWrapper()")
old_vd_end = text.find("function ComparisonTablesViewRouteWrapper()")
if old_vd_start != -1 and old_vd_end != -1:
    text = text[:old_vd_start] + wrappers_code.strip() + "\n\n" + text[old_vd_end:]

# 6. Routes inside SubjectLayout
if '<Route path="practice/calculation-lab"' not in text:
    anchor_route = '<Route path="practice/mock-exams" element={<MockExamViewRouteWrapper />} />'
    add_routes = anchor_route + '\n            <Route path="practice/calculation-lab" element={<CalculationLabRouteWrapper />} />\n            <Route path="practice/scenario-lab" element={<ScenarioLabRouteWrapper />} />'
    text = text.replace(anchor_route, add_routes)

# 7. Aliases
if '<Route path="calculation-lab"' not in text:
    anchor_alias = '<Route path="questions" element={<Navigate to="tools/important-qa" replace />} />'
    add_aliases = anchor_alias + '\n            <Route path="calculation-lab" element={<Navigate to="practice/calculation-lab" replace />} />\n            <Route path="scenario-lab" element={<Navigate to="practice/scenario-lab" replace />} />\n            <Route path="tools/calculation-lab" element={<Navigate to="practice/calculation-lab" replace />} />\n            <Route path="tools/scenario-lab" element={<Navigate to="practice/scenario-lab" replace />} />'
    text = text.replace(anchor_alias, add_aliases)

with open("src/App.tsx", "w") as f:
    f.write(text)

print("Updated App.tsx successfully!")

