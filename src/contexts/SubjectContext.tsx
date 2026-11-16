import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { SubjectConfig, SubjectSlug } from '../types/subject';
import { subjects, defaultSubjectSlug, getSubjectBySlug } from '../data/subjects';

export interface SubjectContextType {
  currentSubject: SubjectConfig;
  currentSlug: SubjectSlug;
  setCurrentSubject: (slug: SubjectSlug) => void;
  allSubjects: SubjectConfig[];
}

export const SubjectContext = createContext<SubjectContextType | undefined>(undefined);

export const SubjectProvider: React.FC<{ children: ReactNode; initialSlug?: SubjectSlug }> = ({ children, initialSlug }) => {
  const [currentSlug, setCurrentSlug] = useState<SubjectSlug>(() => {
    if (initialSlug) return initialSlug;
    const saved = localStorage.getItem('iu_exam_master_active_subject');
    if (saved && getSubjectBySlug(saved)) return saved as SubjectSlug;
    return defaultSubjectSlug;
  });

  // Sync if initialSlug prop changes (e.g., from URL route parameter changes)
  useEffect(() => {
    if (initialSlug && initialSlug !== currentSlug && getSubjectBySlug(initialSlug)) {
      setCurrentSlug(initialSlug);
      localStorage.setItem('iu_exam_master_active_subject', initialSlug);
    }
  }, [initialSlug, currentSlug]);

  const currentSubject = getSubjectBySlug(currentSlug) || getSubjectBySlug(defaultSubjectSlug)!;

  const setCurrentSubject = useCallback((slug: SubjectSlug) => {
    setCurrentSlug(slug);
    localStorage.setItem('iu_exam_master_active_subject', slug);
  }, []);

  const allSubjects = Object.values(subjects);

  return (
    <SubjectContext.Provider value={{ currentSubject, currentSlug, setCurrentSubject, allSubjects }}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubject = (): SubjectContextType => {
  const ctx = useContext(SubjectContext);
  if (!ctx) throw new Error('useSubject must be used within SubjectProvider');
  return ctx;
};
