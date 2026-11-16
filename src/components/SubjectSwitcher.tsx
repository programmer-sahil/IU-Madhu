import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, BookOpen, Plus } from 'lucide-react';

export interface SubjectItem {
  slug: string;
  shortCode: string;
  title: string;
  courseCode: string;
  accentHex: string;
}

export interface SubjectSwitcherProps {
  currentSlug: string;
  subjects: Array<{
    slug: string;
    shortCode: string;
    title: string;
    courseCode: string;
    accentHex: string;
  }>;
  getProgress: (slug: string) => number;
  onSelect: (slug: string) => void;
  onSelectSubject?: (slug: string) => void;
  collapsed?: boolean;
  className?: string;
}

export const SubjectSwitcher: React.FC<SubjectSwitcherProps> = ({
  currentSlug,
  subjects,
  getProgress,
  onSelect,
  onSelectSubject,
  collapsed = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSubject = subjects.find(s => s.slug === currentSlug) || subjects[0];

  const handleSelect = (slug: string) => {
    if (onSelect) {
      onSelect(slug);
    }
    if (onSelectSubject) {
      onSelectSubject(slug);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const currentProgress = currentSubject ? Math.round(getProgress(currentSubject.slug) || 0) : 0;

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      {collapsed ? (
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className={`w-10 h-10 mx-auto rounded-xl border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-[#151E31] hover:bg-slate-50 dark:hover:bg-[#1E293B] hover:border-indigo-400/50 dark:hover:border-indigo-500/40 flex items-center justify-center transition-all duration-200 shadow-sm group focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
            isOpen ? 'ring-2 ring-indigo-500/40 border-indigo-500/50' : ''
          }`}
          title={currentSubject ? `${currentSubject.title} (${currentSubject.courseCode})` : 'Select Subject'}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Switch Subject"
        >
          <span
            className="text-[11px] font-mono font-bold tracking-tight transition-transform duration-200 group-hover:scale-105"
            style={{ color: currentSubject?.accentHex || '#6366f1' }}
          >
            {currentSubject?.shortCode || 'SUB'}
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className={`w-full flex items-center justify-between gap-2.5 p-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-[#151E31] hover:bg-slate-50/80 dark:hover:bg-[#1C263D] hover:border-indigo-400/50 dark:hover:border-indigo-500/40 transition-all duration-200 text-left shadow-sm group focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
            isOpen ? 'ring-2 ring-indigo-500/40 border-indigo-500/50 dark:border-indigo-500/60' : ''
          }`}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            {/* ShortCode Badge */}
            <div
              className="px-2 py-1 rounded-lg text-[11px] font-mono font-bold tracking-tight shrink-0 border transition-all duration-200"
              style={{
                backgroundColor: currentSubject ? `${currentSubject.accentHex}15` : 'rgba(99, 102, 241, 0.1)',
                color: currentSubject?.accentHex || '#6366f1',
                borderColor: currentSubject ? `${currentSubject.accentHex}35` : 'rgba(99, 102, 241, 0.25)',
              }}
            >
              [{currentSubject?.shortCode || 'SUB'}]
            </div>

            <div className="min-w-0 flex-1">
              <div className="font-semibold text-xs text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                {currentSubject?.title || 'Select Subject'}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate flex items-center gap-1.5">
                <span>{currentSubject?.courseCode || ''}</span>
                {currentProgress > 0 && (
                  <>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-sans font-medium">{currentProgress}%</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <ChevronDown
            className={`w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-transform duration-200 shrink-0 ${
              isOpen ? 'rotate-180 text-indigo-500 dark:text-indigo-400' : ''
            }`}
          />
        </button>
      )}

      {/* Popover Dropdown */}
      <div
        role="listbox"
        aria-label="Subjects"
        className={`
          absolute z-50
          ${collapsed ? 'left-full ml-3 top-0 w-80' : 'left-0 right-0 top-full mt-2 w-full min-w-[290px]'}
          bg-white dark:bg-[#111827] 
          border border-slate-200/90 dark:border-slate-800/80 
          rounded-2xl shadow-xl shadow-slate-900/15 dark:shadow-black/60
          backdrop-blur-xl
          transition-all duration-200 ease-out origin-top
          ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 -translate-y-1 invisible pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="px-3.5 pt-3 pb-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            YOUR SUBJECTS
          </span>
          <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 font-mono">
            {subjects.length} available
          </span>
        </div>

        {/* Subjects List */}
        <div className="p-2 space-y-1.5 max-h-[340px] overflow-y-auto scrollbar-thin">
          {subjects.length === 0 ? (
            <div className="py-6 text-center text-slate-400 dark:text-slate-500">
              <BookOpen className="w-6 h-6 mx-auto mb-2 opacity-50" />
              <p className="text-xs">No subjects registered yet</p>
            </div>
          ) : (
            subjects.map(subject => {
              const isSelected = subject.slug === currentSlug;
              const progress = Math.round(getProgress(subject.slug) || 0);

              return (
                <button
                  key={subject.slug}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(subject.slug)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 border group ${
                    isSelected
                      ? 'bg-indigo-50/80 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-500/35 shadow-xs'
                      : 'bg-slate-50/50 dark:bg-[#151E31]/60 hover:bg-slate-100/80 dark:hover:bg-[#1C263D] border-slate-200/60 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 border"
                        style={{
                          backgroundColor: `${subject.accentHex}15`,
                          color: subject.accentHex,
                          borderColor: `${subject.accentHex}35`,
                        }}
                      >
                        {subject.shortCode}
                      </span>
                      <span className="font-semibold text-xs text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {subject.title}
                      </span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1">
                    <span className="truncate max-w-[150px]">{subject.courseCode}</span>
                    <div className="flex items-center gap-1.5 font-sans shrink-0">
                      {isSelected && (
                        <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                          ✓ Current •
                        </span>
                      )}
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{progress}%</span>
                    </div>
                  </div>

                  {/* Progress Mini Bar */}
                  <div className="mt-2 w-full h-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(0, progress))}%`,
                        backgroundColor: subject.accentHex || '#6366f1',
                      }}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-3.5 py-2.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#0B1120]/60 rounded-b-2xl">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <Plus className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span className="truncate">Additional subjects available</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 hidden sm:inline ml-auto font-mono">IU Catalog</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSwitcher;
