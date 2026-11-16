import json

from u6_mcqs_61 import s61_data
from u6_mcqs_62 import s62_data
from u6_mcqs_63 import s63_data
from u6_mcqs_64 import s64_data
from u6_mcqs_65 import s65_data

all_u6_mcqs = []
all_u6_mcqs.extend(s61_data)
all_u6_mcqs.extend(s62_data)
all_u6_mcqs.extend(s63_data)
all_u6_mcqs.extend(s64_data)
all_u6_mcqs.extend(s65_data)

print(f"Total Unit 6 MCQs: {len(all_u6_mcqs)}")

seen_ids = set()
for idx, q in enumerate(all_u6_mcqs):
    assert q['id'] not in seen_ids, f"Duplicate ID: {q['id']}"
    seen_ids.add(q['id'])
    q['unit'] = 6
    q['unitId'] = 6
    q['subjectId'] = 'itpm'
    assert len(q['options']) == 4, f"Options count error in {q['id']}"
    assert q['correctAnswer'] in ['A', 'B', 'C', 'D'], f"Invalid answer in {q['id']}"
    assert len(q['whyOthersAreWrong']) == 3, f"whyOthersAreWrong count error in {q['id']}"
    assert 'explanation' in q and len(q['explanation']) > 10, f"Explanation missing in {q['id']}"
    assert 'examTrap' in q, f"ExamTrap missing in {q['id']}"
    assert 'source' in q and q['source']['unit'] == 6, f"Source missing in {q['id']}"

output_path = '/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-6/mcqs.ts'
content = f"""import {{ MCQ }} from "../../../../types";

export const unit6Mcqs: MCQ[] = {json.dumps(all_u6_mcqs, indent=2)};
"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully generated {output_path} with {len(all_u6_mcqs)} verified MCQs!")
