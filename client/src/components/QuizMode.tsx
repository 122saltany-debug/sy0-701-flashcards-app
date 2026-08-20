import { useState, useMemo } from 'react';
import { Flashcard } from '@/data/flashcards';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle2, XCircle, ArrowLeft, RefreshCw, Trophy } from 'lucide-react';

interface QuizModeProps {
  cards: Flashcard[];
  onBack: () => void;
}

interface Question {
  cardId: number;
  question: string;
  options: string[];
  correctAnswer: string;
  examTip?: string;
}

export function QuizMode({ cards, onBack }: QuizModeProps) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersLog, setAnswersLog] = useState<{ cardId: number; correct: boolean; chosen: string; correctAns: string }[]>([]);

  // Generate 10 randomized quiz questions from the cards
  const quizQuestions: Question[] = useMemo(() => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5).slice(0, 10);
    return shuffledCards.map(card => {
      // Create 3 incorrect distractors from other cards
      const otherCards = cards.filter(c => c.id !== card.id);
      const distractors = otherCards
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(c => c.back);

      const options = [...distractors, card.back].sort(() => Math.random() - 0.5);

      return {
        cardId: card.id,
        question: `What is the definition, function, or correct exam context for: "${card.front}"?`,
        options,
        correctAnswer: card.back,
        examTip: card.examTip
      };
    });
  }, [cards]);

  const currentQ = quizQuestions[currentQuizIndex];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setAnswersLog(prev => [
      ...prev,
      { cardId: currentQ.cardId, correct: isCorrect, chosen: option, correctAns: currentQ.correctAnswer }
    ]);
  };

  const handleNext = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setAnswersLog([]);
  };

  if (isFinished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 75;

    return (
      <div className="max-w-2xl mx-auto py-12 space-y-8 animate-fadeIn text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2 ${
            passed ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' : 'bg-amber-500/10 border-amber-500/40 text-amber-400'
          }`}>
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-white">Quiz Completed!</h2>
            <p className="text-slate-400 text-sm">
              {passed ? 'Fantastic work! You demonstrated strong mastery of SY0-701 concepts.' : 'Good effort! Review the flashcards to strengthen weak areas.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto py-4">
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 block mb-1">Final Score</span>
              <span className="text-3xl font-bold text-white">{score} / {quizQuestions.length}</span>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 block mb-1">Percentage</span>
              <span className={`text-3xl font-bold ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>{percentage}%</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              onClick={handleRestart}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </Button>
            <Button
              onClick={onBack}
              variant="outline"
              className="border-slate-700 bg-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-xl"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Exit Quiz</span>
        </Button>

        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 block">SY0-701 Practice Assessment</span>
          <span className="text-sm font-medium text-slate-300">
            Question <strong className="text-white">{currentQuizIndex + 1}</strong> of {quizQuestions.length}
          </span>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-emerald-400">
          Score: {score}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
        <div 
          className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
          {currentQ.question}
        </h3>

        <div className="space-y-3">
          {currentQ.options.map((option, idx) => {
            let optionStyle = "bg-slate-800/80 border-slate-700/80 text-slate-200 hover:border-slate-600";
            if (isAnswered) {
              if (option === currentQ.correctAnswer) {
                optionStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-200 font-medium";
              } else if (option === selectedOption) {
                optionStyle = "bg-rose-500/20 border-rose-500 text-rose-200";
              } else {
                optionStyle = "bg-slate-800/40 border-slate-800 text-slate-500 opacity-50";
              }
            }

            return (
              <div
                key={idx}
                onClick={() => handleSelect(option)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start space-x-3 ${optionStyle}`}
              >
                <div className="w-6 h-6 rounded-full bg-slate-700/80 shrink-0 flex items-center justify-center text-xs font-bold text-slate-300 mt-0.5">
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-sm md:text-base leading-relaxed">{option}</span>
              </div>
            );
          })}
        </div>

        {isAnswered && (
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between animate-fadeIn">
            <div className="flex items-center space-x-2">
              {selectedOption === currentQ.correctAnswer ? (
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Correct!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-rose-400 font-semibold">
                  <XCircle className="w-5 h-5" />
                  <span>Incorrect.</span>
                </div>
              )}
            </div>

            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-600/20"
            >
              {currentQuizIndex < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
