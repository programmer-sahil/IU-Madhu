import React, { useState, useMemo } from 'react';
import { Flashcard, UnitId } from '../types';
import { useProgress } from '../hooks/useProgress';
import { useSubject } from '../contexts/SubjectContext';
import { useSubjectData } from '../hooks/useSubjectData';
import { 
  Check, X, RotateCw, Shuffle, Lightbulb, Bookmark, BookmarkCheck,
  ChevronLeft, ChevronRight, Layers, Award
} from 'lucide-react';

interface FlashcardDeckProps {
  initialUnit?: UnitId;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ initialUnit }) => {
  const { progress, markFlashcard, toggleBookmark, isBookmarked } = useProgress();
  const { currentSubject } = useSubject();
  const { getAllFlashcards } = useSubjectData();
  const allCards = useMemo(() => getAllFlashcards(), [getAllFlashcards]);

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

  if (allCards.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {currentSubject.courseCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Flashcards</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {currentSubject.title}
            </h2>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto border border-indigo-200/60 dark:border-indigo-800/60">
            <Layers className="w-8 h-8" />
          </div>
          <div className="space-y-1 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Flashcard Deck In Preparation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Interactive 3D revision flashcards for {currentSubject.title} ({currentSubject.courseCode}) are being compiled according to official university examination syllabi.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>0 items available</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Subject Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              {currentSubject.courseCode}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Flashcards</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currentSubject.title}
          </h2>
        </div>
      </div>

      {/* Control / Filter Bar */}
      <div className="glass-card rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Unit Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Unit:</span>
          <select
            value={selectedUnit}
            onChange={(e) => {
              setSelectedUnit(Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value={0}>All Units ({allCards.length})</option>
            {currentSubject.units.map(u => (
              <option key={u.id} value={u.id}>
                Unit {u.id}: {u.shortTitle || u.title.split(':')[0]}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Toggle & Shuffle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFilterMode(prev => prev === 'all' ? 'needsRevision' : 'all');
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              filterMode === 'needsRevision'
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700 font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            Needs Revision ({progress.needsRevisionFlashcards.length})
          </button>

          <button
            onClick={handleShuffle}
            disabled={filteredCards.length <= 1}
            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
            title="Shuffle Deck"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Counter & Mastery Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Card {filteredCards.length > 0 ? currentIndex + 1 : 0} of {filteredCards.length}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-emerald-600 font-semibold flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> {progress.masteredFlashcards.length} Mastered
          </span>
          <span className="text-amber-600 font-semibold flex items-center gap-1">
            <RotateCw className="w-3.5 h-3.5" /> {progress.needsRevisionFlashcards.length} To Revise
          </span>
        </div>
      </div>

      {/* The 3D Flippable Flashcard */}
      {filteredCards.length === 0 ? (
        <div className="glass-card rounded-2xl p-12 text-center text-slate-500 space-y-2">
          <Layers className="w-8 h-8 mx-auto text-slate-400" />
          <h4 className="font-bold text-slate-800 dark:text-white">No flashcards in this filter</h4>
          <p className="text-xs">Switch to "All Units" or reset the revision filter.</p>
        </div>
      ) : currentCard ? (
        <div className="space-y-4">
          <div 
            onClick={() => setIsFlipped(prev => !prev)}
            className="perspective-1000 cursor-pointer min-h-[300px] sm:min-h-[340px]"
          >
            <div className={`relative w-full h-full min-h-[300px] sm:min-h-[340px] rounded-2xl p-6 sm:p-8 border transition-all duration-500 transform-style-3d shadow-md hover:shadow-xl ${
              isFlipped 
                ? 'rotate-y-180 bg-indigo-50/90 dark:bg-slate-800/90 border-indigo-300 dark:border-indigo-700' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
            }`}>
              {/* Front Side */}
              <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between backface-hidden ${isFlipped ? 'hidden' : 'flex'}`}>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded">
                    Unit {currentCard.unit} • {currentCard.category}
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
                    className="p-1 rounded text-slate-400 hover:text-indigo-600"
                  >
                    {isBookmarked(currentCard.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-indigo-600" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="my-auto text-center space-y-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Question / Term
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    {currentCard.front}
                  </h3>
                </div>

                <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                  <RotateCw className="w-3.5 h-3.5" /> Click anywhere to reveal explanation
                </div>
              </div>

              {/* Back Side (Flipped) */}
              <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between rotate-y-180 backface-hidden ${isFlipped ? 'flex' : 'hidden'}`}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-300 bg-white/60 dark:bg-slate-900/60 px-2 py-0.5 rounded">
                    Academic Truth & Definition
                  </span>
                  <span className="text-slate-400 text-[11px]">Click to flip back</span>
                </div>

                <div className="my-auto space-y-4">
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {currentCard.back}
                  </p>

                  {currentCard.examTip && (
                    <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-indigo-200/60 dark:border-indigo-900/60 text-xs flex items-start gap-2 text-indigo-900 dark:text-indigo-200">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block text-[10px] uppercase tracking-wider">Exam Tip</span>
                        {currentCard.examTip}
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center text-[11px] text-slate-400">
                  Rate your recall below to advance
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons: Know it vs Need Revision */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={handleNeedRevision}
              className="flex-1 max-w-[200px] py-3 rounded-xl text-xs font-bold border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 hover:bg-amber-100 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <X className="w-4 h-4 text-rose-500" />
              Need Revision
            </button>

            <button
              onClick={handleKnowIt}
              className="flex-1 max-w-[200px] py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Check className="w-4 h-4 text-white" />
              I Know This
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-400">
              Space / Arrow keys to navigate
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
