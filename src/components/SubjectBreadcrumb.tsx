import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

export interface SubjectBreadcrumbProps {
  items: Array<{ label: string; onClick?: () => void }>;
  className?: string;
  separator?: 'slash' | 'chevron';
}

export const SubjectBreadcrumb: React.FC<SubjectBreadcrumbProps> = ({
  items,
  className = '',
  separator = 'slash',
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs text-slate-500 dark:text-slate-400 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 md:gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isClickable = !isLast && typeof item.onClick === 'function';

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1.5 md:gap-2 min-w-0"
            >
              {index > 0 && (
                separator === 'chevron' ? (
                  <ChevronRight
                    className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0 select-none"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="text-slate-300 dark:text-slate-700 select-none text-[13px] font-mono leading-none"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )
              )}

              {isClickable ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate max-w-[160px] sm:max-w-[220px] focus:outline-none focus:text-indigo-600 dark:focus:text-indigo-400 cursor-pointer text-left"
                >
                  {item.label}
                </button>
              ) : (
                <span
                  className={`truncate max-w-[200px] sm:max-w-[300px] ${
                    isLast
                      ? 'font-semibold text-slate-900 dark:text-white'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default SubjectBreadcrumb;
