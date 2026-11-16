import { MockExam } from '../../../types';
import { unit1MockExams } from './unit-1/mockExams';
import { unit2MockExams } from './unit-2/mockExams';
import { unit3MockExams } from './unit-3/mockExams';
import { unit4MockExams } from './unit-4/mockExams';
import { unit5MockExams } from './unit-5/mockExams';
import { unit6MockExams } from './unit-6/mockExams';

export const itpmMockExams: MockExam[] = [
  // --- Unit 1 Mock Exams (2) ---
  ...unit1MockExams,
  // --- Unit 2 Mock Exams (2) ---
  ...unit2MockExams,
  // --- Unit 3 Mock Exams (2) ---
  ...unit3MockExams,
  // --- Unit 4 Mock Exams (2) ---
  ...unit4MockExams,
  // --- Unit 5 Mock Exams (2) ---
  ...unit5MockExams,
  // --- Unit 6 Mock Exams (2) ---
  ...unit6MockExams
];

export {
  unit1MockExams,
  unit2MockExams,
  unit3MockExams,
  unit4MockExams,
  unit5MockExams,
  unit6MockExams
};
