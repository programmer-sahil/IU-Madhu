import { ExamTrapItem } from '../../../types';
import { unit1ExamTraps } from './unit-1/traps';
import { unit2ExamTraps } from './unit-2/traps';
import { unit3ExamTraps } from './unit-3/traps';
import { unit4ExamTraps } from './unit-4/traps';
import { unit5ExamTraps } from './unit-5/traps';
import { unit6ExamTraps } from './unit-6/traps';

export const itpmExamTraps: ExamTrapItem[] = [
  // --- Unit 1 Exam Traps ---
  ...unit1ExamTraps,
  // --- Unit 2 Exam Traps ---
  ...unit2ExamTraps,
  // --- Unit 3 Exam Traps ---
  ...unit3ExamTraps,
  // --- Unit 4 Exam Traps ---
  ...unit4ExamTraps,
  // --- Unit 5 Exam Traps ---
  ...unit5ExamTraps,
  // --- Unit 6 Exam Traps ---
  ...unit6ExamTraps
];
