with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/mockTests.ts') as f:
    content = f.read()

import re

# Add imports
content = re.sub(
    r"import \{ unit4MockExams \} from '\./unit-4/mockExams';",
    "import { unit4MockExams } from './unit-4/mockExams';\nimport { unit5MockExams } from './unit-5/mockExams';\nimport { unit6MockExams } from './unit-6/mockExams';",
    content
)

# Add to array
content = re.sub(
    r"\.\.\.unit4MockExams\s*\];",
    "...unit4MockExams,\n  // --- Unit 5 Mock Exams ---\n  ...unit5MockExams,\n  // --- Unit 6 Mock Exams ---\n  ...unit6MockExams\n];",
    content
)

with open('/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/mockTests.ts', 'w') as f:
    f.write(content)

print("Updated mockTests.ts successfully!")
