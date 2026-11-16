import React, { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { 
  Bookmark, BookmarkCheck, Trash2, BookOpen, Layers, Hash, 
  HelpCircle, ArrowRight, FileText 
} from 'lucide-react';

interface BookmarksViewProps {
  onNavigateToUnit?: (unitId: number) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({ onNavigateToUnit }) => {
  const { progress, toggleBookmark } = useProgress();
  const { currentSubject } = useSubject();
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = progress.bookmarkedItems.filter(item => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    return true;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{currentSubject.title}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            My Bookmarked Revision List
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Saved exam questions, MCQs, flashcards, and high-yield numbers for {currentSubject.title}.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
          {['all', 'question', 'mcq', 'flashcard', 'number'].map(t => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1 rounded-lg font-bold capitalize transition-all ${
                filterType === t
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {t === 'all' ? 'All' : `${t}s`}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarks List */}
      {filtered.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center text-slate-500 space-y-3">
          <Bookmark className="w-10 h-10 mx-auto text-slate-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            No Bookmarks in This Subject Yet
          </h3>
          <p className="text-xs max-w-sm mx-auto leading-relaxed">
            Click the bookmark icon on any exam question, MCQ, flashcard, or key number while revising {currentSubject.title} to save it to your personal revision list.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => (
            <div
              key={item.id}
              className="glass-card rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 hover:border-indigo-400 transition-all text-xs"
            >
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-indigo-600 font-bold bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded text-[10px]">
                    Unit {item.unit}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    {item.type}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {item.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {onNavigateToUnit && (
                  <button
                    onClick={() => onNavigateToUnit(item.unit)}
                    className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="Open Unit"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => toggleBookmark(item)}
                  className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                  title="Remove bookmark"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
