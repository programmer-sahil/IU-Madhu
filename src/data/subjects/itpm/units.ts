import { UnitData } from '../../../types';
import { unit1Data } from './unit-1';
import { unit2Data } from './unit-2';
import { unit3Data } from './unit-3';
import { unit4Data } from './unit-4';
import { unit5Data } from './unit-5';
import { unit6Data } from './unit-6';

export const itpmUnits: UnitData[] = [
  unit1Data,
  unit2Data,
  unit3Data,
  unit4Data,
  unit5Data,
  unit6Data
];

export const allUnits: UnitData[] = itpmUnits;

export const getUnitById = (id: number): UnitData | undefined => {
  return itpmUnits.find(u => u.id === id);
};

export const getAllMcqs = () => {
  return itpmUnits.flatMap(u => u.mcqs);
};

export const getAllFlashcards = () => {
  return itpmUnits.flatMap(u => u.flashcards);
};

export const getAllQuestions = () => {
  return itpmUnits.flatMap(u => u.importantQuestions);
};
