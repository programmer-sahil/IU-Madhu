import { MasterComparison } from '../../../types';
import { unit1Comparisons } from './unit-1/comparisons';
import { unit2MasterComparisons } from './unit-2/comparisons';
import { unit3Comparisons } from './unit-3/comparisons';
import { unit4Comparisons } from './unit-4/comparisons';
import { unit5Comparisons } from './unit-5/comparisons';
import { unit6Comparisons } from './unit-6/comparisons';

export const itpmComparisons: MasterComparison[] = [
  // --- Unit 1 Master Comparisons ---
  ...unit1Comparisons,
  // --- Unit 2 Master Comparisons ---
  ...unit2MasterComparisons,
  // --- Unit 3 Master Comparisons ---
  ...unit3Comparisons,
  // --- Unit 4 Master Comparisons ---
  ...unit4Comparisons,
  // --- Unit 5 Master Comparisons ---
  ...unit5Comparisons,
  // --- Unit 6 Master Comparisons ---
  ...unit6Comparisons
];
