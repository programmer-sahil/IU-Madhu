import { UnitData } from '../../types';
import { unit1Data } from './unit1';
import { unit2Data } from './unit2';
import { unit3Data } from './unit3';
import { unit4Data } from './unit4';
import { unit5Data } from './unit5';
import { unit6Data } from './unit6';

export const allUnits: UnitData[] = [
  unit1Data,
  unit2Data,
  unit3Data,
  unit4Data,
  unit5Data,
  unit6Data
];

export const getUnitById = (id: number): UnitData | undefined => {
  return allUnits.find(u => u.id === id);
};

export const getAllMcqs = () => {
  return allUnits.flatMap(u => u.mcqs);
};

export const getAllFlashcards = () => {
  return allUnits.flatMap(u => u.flashcards);
};

export const getAllQuestions = () => {
  return allUnits.flatMap(u => u.importantQuestions);
};
