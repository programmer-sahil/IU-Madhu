import React, { useState, useMemo } from 'react';
import { Flashcard, UnitId } from '../types';
import { getAllFlashcards, allUnits } from '../data/units';
import { useProgress } from '../hooks/useProgress';
import { 
  Check, X, RotateCw, Shuffle, Sparkles, Bookmark, BookmarkCheck,
  ChevronLeft, ChevronRight, Layers, Award
} from 'lucide-react';

interface FlashcardDeckProps {
  initialUnit?: UnitId;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ initialUnit }) => {
  const { progress, markFlashcard, toggleBookmark, isBookmarked } = useProgress();
  const allCards = useMemo(() => getAllFlashcards(), []);

  const [selectedUnit, setSelectedUnit] = useState<number>(initialUnit || 0); // 0 = all units
  const [filterMode, setFilterMode] = useState<'all' | 'needsRevision'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Filtered Cards
  const filteredCards = useMemo(() => {
    let list = selectedUnit === 0 ? allCards : allCards.filter(c => c.unit === selectedUnit);
    if (filterMode === 'needsRevision') {
      list = list.filter(c => progress.needsRevisionFlashcards.includes(c.id));
    }
    return list;
  }, [allCards, selectedUnit, filterMode, progress.needsRevisionFlashcards]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const handleKnowIt = () => {
    if (!currentCard) return;
    markFlashcard(currentCard.id, 'know');
    handleNext();
  };

  const handleNeedRevision = () => {
    if (!currentCard) return;
    markFlashcard(currentCard.id, 'revise');
    handleNext();
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Top Header & Unit Filter */}
      <div className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            Active Recall Flashcards
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedUnit}
            onChange={(e) => {
              setSelectedUnit(Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value={0}>All Units ({allCards.length})</option>
            {allUnits.map(u => (
              <option key={u.id} value={u.id}>
                Unit {u.id}: {u.title.split(':')[0]}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setFilterMode(prev => prev === 'all' ? 'needsRevision' : 'all');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filterMode === 'needsRevision'
                ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            Weak Cards ({progress.needsRevisionFlashcards.length})
          </button>

          <button
            onClick={handleShuffle}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            title="Shuffle"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Counter & Mastery Stats */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-mono">
        <span>
          Card {filteredCards.length > 0 ? currentIndex + 1 : 0} of {filteredCards.length}
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
            <Check className="w-3.5 h-3.5" /> {progress.masteredFlashcards.length} Mastered
          </span>
          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
            <X className="w-3.5 h-3.5" /> {progress.needsRevisionFlashcards.length} Needs Revise
          </span>
        </div>
      </div>

      {/* 3D Flip Card */}
      {filteredCards.length === 0 ? (
        <div className="glass-card rounded-3xl p-12 text-center space-y-3">
          <Award className="w-10 h-10 text-emerald-500 mx-auto" />
          <h4 className="font-bold text-slate-900 dark:text-white">
            No Flashcards in this Filter
          </h4>
          <p className="text-xs text-slate-500">
            You have no cards marked for revision in this selection!
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 text-white"
          >
            View All Cards
          </button>
        </div>
      ) : currentCard ? (
        <div className="perspective-1000">
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className={`cursor-pointer min-h-[300px] w-full rounded-3xl p-8 relative transition-transform duration-500 transform-style-3d glass-card shadow-lg flex flex-col justify-between border ${
              isFlipped 
                ? 'rotate-y-180 border-indigo-400/80 dark:border-indigo-500/60 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/90 dark:from-indigo-950/70 dark:via-slate-900 dark:to-purple-950/70' 
                : 'border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90'
            }`}
          >
            {/* Front Side */}
            <div className={`space-y-4 ${isFlipped ? 'hidden' : 'block'}`}>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  Unit {currentCard.unit} • {currentCard.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <RotateCw className="w-3.5 h-3.5" /> Click to Flip
                </span>
              </div>

              <div className="py-8 text-center">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {currentCard.front}
                </h4>
              </div>

              <div className="text-center text-xs text-slate-400 italic">
                Tap card or press Space to reveal answer
              </div>
            </div>

            {/* Back Side */}
            <div className={`space-y-4 ${isFlipped ? 'block rotate-y-180' : 'hidden'}`}>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                  Explanation & Definition
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark({
                      id: currentCard.id,
                      type: 'flashcard',
                      title: currentCard.front,
                      unit: currentCard.unit
                    });
                  }}
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400"
                >
                  {isBookmarked(currentCard.id) ? (
                    <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="py-4">
                <p className="text-sm md:text-base text-slate-800 dark:text-slate-100 font-medium leading-relaxed whitespace-pre-line">
                  {currentCard.back}
                </p>
                {currentCard.examTip && (
                  <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 text-xs text-amber-900 dark:text-amber-200 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Exam Tip: {currentCard.examTip}</span>
                  </div>
                )}
              </div>

              <div className="text-center text-xs text-slate-400 italic">
                Click to flip back
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Bottom Know It / Need Revision Buttons */}
      {filteredCards.length > 0 && (
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
            title="Previous Card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 flex gap-3">
            <button
              onClick={handleNeedRevision}
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 flex items-center justify-center gap-2 transition-all"
            >
              <X className="w-4 h-4 text-amber-600" />
              Need Revision
            </button>

            <button
              onClick={handleKnowIt}
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Check className="w-4 h-4" />
              Know It!
            </button>
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100"
            title="Next Card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};
