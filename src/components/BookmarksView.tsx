import React, { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import { 
  Bookmark, BookmarkCheck, Trash2, BookOpen, Layers, Hash, 
  HelpCircle, ArrowRight, FileText 
} from 'lucide-react';

interface BookmarksViewProps {
  onNavigateToUnit?: (unitId: number) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({ onNavigateToUnit }) => {
  const { progress, toggleBookmark } = useProgress();
  const [filterType, setFilterType] = useState<string>('all');

  const filtered = progress.bookmarkedItems.filter(item => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    return true;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            Personal Revision Vault
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            My Bookmarked Revision List
          </h2>
          <p className="text-xs text-slate-500">
            Saved exam questions, MCQs, flashcards, and high-yield numbers stored in your browser.
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
        <div className="glass-card rounded-2xl p-12 text-center space-y-3">
          <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
          <h4 className="font-bold text-slate-900 dark:text-white">
            No Bookmarks Saved Yet
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Click the bookmark icon on any exam question, MCQ, flashcard, or number to save it to your personal revision queue.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => (
            <div
              key={item.id}
              className="glass-card rounded-xl p-4 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 hover:border-indigo-400 transition-all text-xs"
            >
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  item.type === 'question' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300' :
                  item.type === 'mcq' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' :
                  item.type === 'flashcard' ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300' :
                  'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                }`}>
                  {item.type === 'question' && <FileText className="w-4 h-4" />}
                  {item.type === 'mcq' && <HelpCircle className="w-4 h-4" />}
                  {item.type === 'flashcard' && <Layers className="w-4 h-4" />}
                  {item.type === 'number' && <Hash className="w-4 h-4" />}
                </span>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-indigo-600 font-mono">Unit {item.unit}</span>
                    <span className="text-slate-300">•</span>
                    <span className="capitalize text-slate-500 font-semibold">{item.type}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {onNavigateToUnit && (
                  <button
                    onClick={() => onNavigateToUnit(item.unit)}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600"
                    title="Go to Unit"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => toggleBookmark(item)}
                  className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600"
                  title="Remove Bookmark"
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
