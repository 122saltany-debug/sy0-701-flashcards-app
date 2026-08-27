import { useState, useEffect } from 'react';
import { FLASHCARDS, Flashcard } from '@/data/flashcards';
import { Navbar } from '@/components/Navbar';
import { DeckSelector } from '@/components/DeckSelector';
import { FlashcardViewer } from '@/components/FlashcardViewer';
import { QuizMode } from '@/components/QuizMode';
import { CheatSheetModal } from '@/components/CheatSheetModal';
import { QAReviewModal } from '@/components/QAReviewModal';
import { RedditInsights } from '@/components/RedditInsights';
import { ObjectiveAudit } from '@/components/ObjectiveAudit';
import { ExamTips } from '@/components/ExamTips';
import { Shield } from 'lucide-react';

type ProgressStatus = 'mastered' | 'review' | 'unstudied';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'decks' | 'study' | 'review' | 'quiz' | 'cheatsheet' | 'qa' | 'reddit' | 'objectives' | 'tips'>('decks');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [progressMap, setProgressMap] = useState<Record<number, ProgressStatus>>(() => {
    try {
      const saved = localStorage.getItem('sy0_701_progress_v2');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sy0_701_progress_v2', JSON.stringify(progressMap));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [progressMap]);

  const handleUpdateProgress = (cardId: number, status: 'mastered' | 'review') => {
    setProgressMap(prev => ({
      ...prev,
      [cardId]: status
    }));
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all your study progress?')) {
      setProgressMap({});
      localStorage.removeItem('sy0_701_progress_v2');
    }
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setActiveTab('study');
  };

  const masteredCount = Object.values(progressMap).filter(s => s === 'mastered').length;

  // Filter cards for study view
  const activeCards = selectedCategory && selectedCategory !== 'all'
    ? FLASHCARDS.filter(f => f.category === selectedCategory)
    : FLASHCARDS;

  const reviewCards = FLASHCARDS.filter(card => progressMap[card.id] === 'review');
  const unstudiedCards = FLASHCARDS.filter(card => !progressMap[card.id]);
  const queueCards = reviewCards.length > 0 ? reviewCards : unstudiedCards;

  const categoryTitle = selectedCategory && selectedCategory !== 'all'
    ? FLASHCARDS.find(f => f.category === selectedCategory)?.categoryTitle || 'All Decks'
    : 'All 100 Flashcards Deck (Official V7 Aligned)';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab !== 'study') setSelectedCategory(null);
          setActiveTab(tab);
        }}
        masteredCount={masteredCount}
        totalCount={FLASHCARDS.length}
        onResetProgress={handleResetProgress}
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        {activeTab === 'decks' && (
          <DeckSelector
            onSelectCategory={handleSelectCategory}
            onStartQuiz={() => setActiveTab('quiz')}
            onStartReview={() => setActiveTab('review')}
            progressMap={progressMap}
            flashcards={FLASHCARDS}
          />
        )}

        {activeTab === 'study' && (
          <FlashcardViewer
            cards={activeCards}
            categoryTitle={categoryTitle}
            onBack={() => {
              setActiveTab('decks');
              setSelectedCategory(null);
            }}
            progressMap={progressMap}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {activeTab === 'review' && (
          <FlashcardViewer
            cards={queueCards}
            categoryTitle={reviewCards.length > 0 ? 'Review Queue: Needs Review' : 'Review Queue: Start with Unstudied Cards'}
            onBack={() => setActiveTab('decks')}
            progressMap={progressMap}
            onUpdateProgress={handleUpdateProgress}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizMode
            cards={FLASHCARDS}
            onBack={() => setActiveTab('decks')}
          />
        )}

        {activeTab === 'cheatsheet' && (
          <CheatSheetModal
            onBack={() => setActiveTab('decks')}
          />
        )}

        {activeTab === 'qa' && (
          <QAReviewModal
            onBack={() => setActiveTab('decks')}
          />
        )}

        {activeTab === 'reddit' && (
          <RedditInsights
            onBack={() => setActiveTab('decks')}
          />
        )}

        {activeTab === 'objectives' && (
          <ObjectiveAudit
            progressMap={progressMap}
            onBack={() => setActiveTab('decks')}
            onStartDomain={(domainId) => {
              setSelectedCategory(domainId);
              setActiveTab('study');
            }}
          />
        )}

        {activeTab === 'tips' && (
          <ExamTips onBack={() => setActiveTab('decks')} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-500 space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Shield className="w-4 h-4 text-emerald-500" />
          <span className="font-semibold text-slate-400">CompTIA Security+ SY0-701 Official V7 Aligned Command Center</span>
        </div>
        <p>Built with corrected domain placement, resilience metrics, all 6 security controls, and forensics.</p>
      </footer>
    </div>
  );
}
