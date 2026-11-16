import json

# Read existing comparisons from unit-5/comparisons.ts
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/comparisons.ts') as f:
    text5 = f.read()
import re
m5 = re.search(r'export const unit5Comparisons: CheatSheetComparison\[\] = (\[[\s\S]*?\]);', text5)
data5 = json.loads(m5.group(1))

master_u5 = []
for idx, c in enumerate(data5):
    criteria = []
    for p in c['comparisonPoints']:
        criteria.append({
            "aspect": p['criterion'],
            "itemA": p['detailA'],
            "itemB": p['detailB'],
            "keyDifference": f"{p['detailA']} vs {p['detailB']}"
        })
    master_u5.append({
        "id": f"itpm-u5-comp-{idx+1:03d}",
        "title": f"{c['conceptA']} vs {c['conceptB']}",
        "unit": "Unit 5",
        "description": f"In-depth academic comparison between {c['conceptA']} and {c['conceptB']}.",
        "columns": [c['conceptA'], c['conceptB']],
        "criteria": criteria,
        "examTrap": f"Do not confuse {c['conceptA']} with {c['conceptB']}. Distinguish their roles and boundaries.",
        "memoryRule": f"{c['conceptA']} != {c['conceptB']}"
    })

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/comparisons.ts', 'w') as f:
    f.write(f'''import {{ MasterComparison, CheatSheetComparison }} from "../../../../types";

export const unit5CheatSheetComparisons: CheatSheetComparison[] = {json.dumps(data5, indent=2)};

export const unit5Comparisons: MasterComparison[] = {json.dumps(master_u5, indent=2)};
''')
print("Generated unit-5/comparisons.ts as MasterComparison[]!")

# Read existing comparisons from unit-6/comparisons.ts
with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/comparisons.ts') as f:
    text6 = f.read()
m6 = re.search(r'export const unit6Comparisons: CheatSheetComparison\[\] = (\[[\s\S]*?\]);', text6)
data6 = json.loads(m6.group(1))

master_u6 = []
for idx, c in enumerate(data6):
    criteria = []
    for p in c['comparisonPoints']:
        criteria.append({
            "aspect": p['criterion'],
            "itemA": p['detailA'],
            "itemB": p['detailB'],
            "keyDifference": f"{p['detailA']} vs {p['detailB']}"
        })
    master_u6.append({
        "id": f"itpm-u6-comp-{idx+1:03d}",
        "title": f"{c['conceptA']} vs {c['conceptB']}",
        "unit": "Unit 6",
        "description": f"In-depth academic comparison between {c['conceptA']} and {c['conceptB']}.",
        "columns": [c['conceptA'], c['conceptB']],
        "criteria": criteria,
        "examTrap": f"Do not confuse {c['conceptA']} with {c['conceptB']}. Verify governance levels.",
        "memoryRule": f"{c['conceptA']} vs {c['conceptB']}"
    })

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/comparisons.ts', 'w') as f:
    f.write(f'''import {{ MasterComparison, CheatSheetComparison }} from "../../../../types";

export const unit6CheatSheetComparisons: CheatSheetComparison[] = {json.dumps(data6, indent=2)};

export const unit6Comparisons: MasterComparison[] = {json.dumps(master_u6, indent=2)};
''')
print("Generated unit-6/comparisons.ts as MasterComparison[]!")
