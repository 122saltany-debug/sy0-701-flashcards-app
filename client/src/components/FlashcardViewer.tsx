import { useState, useEffect, useCallback } from 'react';
import { Flashcard } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCw, CheckCircle2, AlertCircle, ArrowLeft, Shuffle, Lightbulb } from 'lucide-react';

interface FlashcardViewerProps {
  cards: Flashcard[];
  categoryTitle: string;
  onBack: () => void;
  progressMap: Record<number, 'mastered' | 'review' | 'unstudied'>;
  onUpdateProgress: (id: number, status: 'mastered' | 'review') => void;
}

export function FlashcardViewer({ cards, categoryTitle, onBack, progressMap, onUpdateProgress }: FlashcardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [deckCards, setDeckCards] = useState<Flashcard[]>(cards);

  const currentCard = deckCards[currentIndex] || cards[0];
  const currentStatus = progressMap[currentCard?.id] || 'unstudied';

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    if (currentIndex < deckCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  }, [currentIndex, deckCards.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(deckCards.length - 1);
    }
  }, [currentIndex, deckCards.length]);

  const handleShuffle = () => {
    const shuffled = [...deckCards].sort(() => Math.random() - 0.5);
    setDeckCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const markStatus = (status: 'mastered' | 'review') => {
    onUpdateProgress(currentCard.id, status);
    handleNext();
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      } else if (e.code === 'Digit1') {
        markStatus('review');
      } else if (e.code === 'Digit2') {
        markStatus('mastered');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, currentCard]);

  if (!currentCard) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-white">No cards available in this deck.</h2>
        <Button onClick={onBack}>Back to Decks</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6 animate-fadeIn">
      {/* Top Header & Navigation Controls */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Decks</span>
        </Button>

        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">{categoryTitle}</span>
          <span className="text-sm font-medium text-slate-300">
            Card <strong className="text-white">{currentIndex + 1}</strong> of {deckCards.length}
          </span>
        </div>

        <Button
          variant="outline"
          onClick={handleShuffle}
          className="border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white"
          title="Shuffle Deck"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          <span>Shuffle</span>
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
        <div 
          className="bg-blue-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / deckCards.length) * 100}%` }}
        />
      </div>

      {/* Flashcard Container */}
      <div 
        onClick={handleFlip}
        className="relative w-full min-h-[380px] md:min-h-[420px] bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between group select-none"
      >
        {/* Status & Flip Indicator */}
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
            currentStatus === 'mastered' 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : currentStatus === 'review'
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
              : 'bg-slate-800 text-slate-400 border-slate-700'
          }`}>
            {currentStatus === 'mastered' ? 'Mastered' : currentStatus === 'review' ? 'Needs Review' : 'Unstudied'}
          </span>

          <div className="flex items-center space-x-1 text-xs text-slate-400 group-hover:text-blue-400 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span>Click card or press Space to flip</span>
          </div>
        </div>

        {/* Card Content (Front vs Back) */}
        <div className="my-auto py-6 text-center space-y-4">
          {!isFlipped ? (
            <div className="space-y-4 animate-fadeIn">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">Front (Term / Port / Acronym)</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                {currentCard.front}
              </h2>
              <p className="text-xs text-slate-500 italic">Click to reveal definition</p>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block">Back (Definition & Explanation)</span>
              <p className="text-xl md:text-2xl font-medium text-slate-100 leading-relaxed max-w-2xl mx-auto">
                {currentCard.back}
              </p>

              {currentCard.examTip && (
                <div className="mt-4 p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-left max-w-xl mx-auto flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 block mb-0.5">EXAM TIP</span>
                    <p className="text-xs text-blue-200 leading-normal">{currentCard.examTip}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Footer Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/80">
          <span>Card ID: #{currentCard.id}</span>
          <span>Use ← → arrows to navigate</span>
        </div>
      </div>

      {/* Action Buttons (Mastered vs Needs Review) */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={(e) => { e.stopPropagation(); markStatus('review'); }}
          variant="outline"
          className="h-14 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30 font-semibold rounded-2xl flex items-center justify-center space-x-2 text-base transition-all"
        >
          <AlertCircle className="w-5 h-5" />
          <span>Needs Review (Key 1)</span>
        </Button>

        <Button
          onClick={(e) => { e.stopPropagation(); markStatus('mastered'); }}
          className="h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2 text-base shadow-lg shadow-emerald-600/30 transition-all"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Mastered! (Key 2)</span>
        </Button>
      </div>

      {/* Prev / Next Bottom Bar */}
      <div className="flex items-center justify-between pt-2">
        <Button
          variant="outline"
          onClick={handlePrev}
          className="border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span>Previous Card</span>
        </Button>

        <Button
          variant="outline"
          onClick={handleNext}
          className="border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <span>Next Card</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
