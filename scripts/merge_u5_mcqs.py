import json

from build_u5_all_mcqs import s51_data
from u5_mcqs_52 import s52_data
from u5_mcqs_53 import s53_data
from u5_mcqs_54 import s54_data

all_u5_mcqs = []
all_u5_mcqs.extend(s51_data)
all_u5_mcqs.extend(s52_data)
all_u5_mcqs.extend(s53_data)
all_u5_mcqs.extend(s54_data)

print(f"Total Unit 5 MCQs: {len(all_u5_mcqs)}")

seen_ids = set()
for idx, q in enumerate(all_u5_mcqs):
    assert q['id'] not in seen_ids, f"Duplicate ID: {q['id']}"
    seen_ids.add(q['id'])
    q['unit'] = 5
    q['unitId'] = 5
    q['subjectId'] = 'itpm'
    assert len(q['options']) == 4, f"Options count error in {q['id']}"
    assert q['correctAnswer'] in ['A', 'B', 'C', 'D'], f"Invalid answer in {q['id']}"
    assert len(q['whyOthersAreWrong']) == 3, f"whyOthersAreWrong count error in {q['id']}"
    assert 'explanation' in q and len(q['explanation']) > 10, f"Explanation missing in {q['id']}"
    assert 'examTrap' in q, f"ExamTrap missing in {q['id']}"
    assert 'source' in q and q['source']['unit'] == 5, f"Source missing in {q['id']}"

output_path = '/Users/skdeveloper/Downloads/madhu/IU-Madhu/src/data/subjects/itpm/unit-5/mcqs.ts'
content = f"""import {{ MCQ }} from "../../../../types";

export const unit5Mcqs: MCQ[] = {json.dumps(all_u5_mcqs, indent=2)};
"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully generated {output_path} with {len(all_u5_mcqs)} verified MCQs!")
