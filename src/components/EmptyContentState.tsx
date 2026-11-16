import React from 'react';
import { BookOpen, Sparkles, Clock } from 'lucide-react';

export interface EmptyContentStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  subjectTitle?: string;
  showComingSoon?: boolean;
  className?: string;
}

export const EmptyContentState: React.FC<EmptyContentStateProps> = ({
  title,
  description,
  icon,
  subjectTitle,
  showComingSoon = true,
  className = '',
}) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl border border-slate-200/90 dark:border-slate-800/80
        bg-white dark:bg-[#111827]
        p-8 md:p-12 text-center
        shadow-sm dark:shadow-[0_18px_50px_rgba(0,0,0,0.24)]
        transition-all duration-200
        ${className}
      `}
    >
      {/* Subtle ambient background glow */}
      <div 
        className="pointer-events-none absolute inset-0 -top-24 bg-radial from-indigo-500/5 to-transparent dark:from-indigo-500/10 blur-2xl" 
        aria-hidden="true" 
      />

      {/* Subject Context Badge (if provided) */}
      {subjectTitle && (
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-slate-100 text-slate-700 border border-slate-200/80 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700/60">
          <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
          <span>{subjectTitle}</span>
        </div>
      )}

      {/* Coming Soon / Preparation Badge */}
      {showComingSoon && (
        <div className="mb-5 block">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Content in Preparation</span>
          </span>
        </div>
      )}

      {/* Main Icon Container */}
      <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-indigo-50/80 dark:bg-[#151E31] border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm transition-transform duration-300 hover:scale-105">
        {icon ? (
          icon
        ) : (
          <BookOpen className="w-8 h-8 stroke-[1.75]" />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
        {description}
      </p>

      {/* Subtle curriculum indicator */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
        <Clock className="w-3.5 h-3.5" />
        <span>Curated according to IU International University course guidelines</span>
      </div>
    </div>
  );
};

export default EmptyContentState;
