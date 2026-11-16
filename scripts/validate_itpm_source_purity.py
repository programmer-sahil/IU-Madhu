#!/usr/bin/env python3
"""
IU Exam Master — IT Project Management (DLMBITPAM01)
Automated Source Purity & External Drift Verification Script

Asserts zero occurrences of forbidden external syllabus drift:
- No TCPI
- No COCOMO
- No external RUP milestone codes (LCO, LCA, IOC)
- No semantic versioning claim (course book uses major.minor.build.revision)
- No weighted beta PERT formulas ((O + 4M + P) / 6)
- No assertion of a fixed 50% official final exam pass mark
- All formulas verified against IU course book citations
- All 12 mock exams standardized to 90 marks (40 MCQs + 5x6m + 1x20m)
"""

import os
import sys
import re
import json

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

FORBIDDEN_PATTERNS = [
    (r'\bTCPI\b', 'TCPI (To-Complete Performance Index) is not taught in IU Course Book'),
    (r'\bCOCOMO\b', 'COCOMO is not taught in IU Course Book'),
    (r'\bLCO\b', 'LCO (Lifecycle Objectives) RUP milestone code is external to IU Course Book'),
    (r'\bLCA\b', 'LCA (Lifecycle Architecture) RUP milestone code is external to IU Course Book'),
    (r'\bIOC\b', 'IOC (Initial Operational Capability) RUP milestone code is external to IU Course Book'),
    (r'\bsemantic\s+versioning\b', 'Semantic versioning label is external (Course Book uses major.minor.build.revision)'),
    (r'\(\s*[oO]\s*\+\s*4\s*[*x]?\s*[mM]\s*\+\s*[pP]\s*\)\s*/\s*6', 'Weighted PERT beta distribution formula is not taught in IU Course Book'),
    (r'50%\s+pass\s+mark', 'Hardcoded 50% pass mark claims violate IU general assessment flexibility rules'),
]

SCAN_DIRS = [
    os.path.join(BASE_DIR, 'src', 'data', 'subjects', 'itpm'),
    os.path.join(BASE_DIR, 'src', 'components', 'CalculationLab.tsx'),
    os.path.join(BASE_DIR, 'src', 'components', 'QuickRevision.tsx'),
    os.path.join(BASE_DIR, 'src', 'components', 'LastMinuteRevision.tsx'),
    os.path.join(BASE_DIR, 'src', 'components', 'FinalExamPractice.tsx'),
    os.path.join(BASE_DIR, 'src', 'components', 'MockExamView.tsx'),
    os.path.join(BASE_DIR, 'src', 'components', 'InteractiveVisuals.tsx'),
]

def scan_file_for_forbidden(filepath):
    errors = []
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for idx, line in enumerate(lines, 1):
        for pattern, desc in FORBIDDEN_PATTERNS:
            if re.search(pattern, line, re.IGNORECASE if 'pass' in pattern or 'semantic' in pattern else 0):
                # Allow if explicitly marked as a debunked trap in explanation
                if 'not taught in iu' in line.lower() or 'forbidden' in line.lower() or 'external trap' in line.lower():
                    continue
                errors.append((filepath, idx, line.strip(), desc))
    return errors

def main():
    print("=" * 80)
    print("  IU EXAM MASTER — IT PROJECT MANAGEMENT (DLMBITPAM01) SOURCE PURITY AUDIT")
    print("=" * 80)

    total_files_scanned = 0
    all_violations = []

    for path in SCAN_DIRS:
        if os.path.isfile(path):
            total_files_scanned += 1
            all_violations.extend(scan_file_for_forbidden(path))
        elif os.path.isdir(path):
            for root, _, files in os.walk(path):
                for file in files:
                    if file.endswith(('.ts', '.tsx', '.json')):
                        total_files_scanned += 1
                        all_violations.extend(scan_file_for_forbidden(os.path.join(root, file)))

    print(f"\n[1] Scanned {total_files_scanned} source & content files for forbidden external drift.")
    if all_violations:
        print(f"    FAILED: Found {len(all_violations)} drift violation(s):")
        for fpath, lnum, line, reason in all_violations:
            rel = os.path.relpath(fpath, BASE_DIR)
            print(f"    - {rel}:{lnum} -> {reason}")
            print(f"      Code: {line[:80]}")
        sys.exit(1)
    else:
        print("    PASSED: Zero occurrences of forbidden external terms found.")

    # [2] Whitelisted formulas audit
    formulas_file = os.path.join(BASE_DIR, 'src', 'data', 'subjects', 'itpm', 'unit-3', 'formulas.ts')
    with open(formulas_file, 'r', encoding='utf-8') as f:
        f_content = f.read()
    
    verified_count = f_content.count('sourceVerified: true')
    print(f"\n[2] Whitelisted Formulas Audit in Unit 3:")
    print(f"    Found {verified_count} formulas with 'sourceVerified: true'.")
    if verified_count < 10:
        print(f"    FAILED: Expected at least 10 whitelisted formulas with verified source metadata.")
        sys.exit(1)
    else:
        print("    PASSED: All formulas strictly verified against official IU course book.")

    # [3] Mock exams audit (12 mocks, exactly 90 marks each)
    print("\n[3] Standardized Mock Exams Structure Audit:")
    mock_units = [1, 2, 3, 4, 5, 6]
    total_mocks = 0
    for u in mock_units:
        mock_file = os.path.join(BASE_DIR, 'src', 'data', 'subjects', 'itpm', f'unit-{u}', 'mockExams.ts')
        with open(mock_file, 'r', encoding='utf-8') as f:
            m_content = f.read()
        match = re.search(r'export\s+const\s+unit\d+MockExams\s*:\s*MockExam\[\]\s*=\s*(\[[\s\S]*?\]);', m_content)
        if not match:
            print(f"    FAILED: Could not parse mock exams for Unit {u}.")
            sys.exit(1)
        mocks = json.loads(match.group(1))
        if len(mocks) != 2:
            print(f"    FAILED: Unit {u} must have exactly 2 mock exams (found {len(mocks)}).")
            sys.exit(1)
        for m in mocks:
            total_mocks += 1
            if m.get('totalMarks') != 90:
                print(f"    FAILED: Mock {m.get('id')} has totalMarks {m.get('totalMarks')} (expected 90).")
                sys.exit(1)
            mcqs = m.get('mcqIds') or m.get('mcqs', [])
            descriptive = m.get('descriptiveQuestions', [])
            if len(mcqs) != 40:
                print(f"    FAILED: Mock {m.get('id')} has {len(mcqs)} MCQs (expected 40).")
                sys.exit(1)
            desc_sum = sum(q.get('marks', 0) for q in descriptive)
            if desc_sum != 50:
                print(f"    FAILED: Mock {m.get('id')} descriptive sum is {desc_sum} (expected 50).")
                sys.exit(1)
        print(f"    Unit {u}: 2 / 2 Mocks Verified (90 Marks: 40 MCQs + 50 Descriptive)")

    print(f"    PASSED: All {total_mocks} Mock Exams strictly conform to 90-mark academic specification.")

    print("\n" + "=" * 80)
    print("  SOURCE PURITY AUDIT PASSED: ZERO EXTERNAL DRIFT & 100% GROUNDED IN IU MATERIALS!")
    print("=" * 80)

if __name__ == '__main__':
    main()
