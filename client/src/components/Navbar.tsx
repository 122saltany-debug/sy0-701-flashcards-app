import { Button } from '@/components/ui/button';
import { Shield, BookOpen, Play, FileText, CheckCircle2, RotateCcw, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activeTab: 'decks' | 'study' | 'quiz' | 'cheatsheet' | 'qa';
  setActiveTab: (tab: 'decks' | 'study' | 'quiz' | 'cheatsheet' | 'qa') => void;
  masteredCount: number;
  totalCount: number;
  onResetProgress: () => void;
}

export function Navbar({ activeTab, setActiveTab, masteredCount, totalCount, onResetProgress }: NavbarProps) {
  const progressPercent = Math.round((masteredCount / totalCount) * 100) || 0;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800 text-slate-100 shadow-2xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => setActiveTab('decks')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                SY0-701 COMMAND
              </span>
              <span className="text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full">
                EXAM PREP
              </span>
            </div>
            <p className="text-xs text-slate-400">Security+ Flashcard & QA Mastery</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-800/60 p-1 rounded-xl border border-slate-700/50">
          <button
            onClick={() => setActiveTab('decks')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === 'decks'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Study Decks</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === 'quiz'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Practice Quiz</span>
          </button>

          <button
            onClick={() => setActiveTab('cheatsheet')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === 'cheatsheet'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Cheat Sheet</span>
          </button>

          <button
            onClick={() => setActiveTab('qa')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
              activeTab === 'qa'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>QA & Traps</span>
          </button>
        </nav>

        {/* Progress Badge & Stats */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex items-center space-x-1.5 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mastered: <strong className="text-emerald-300">{masteredCount}</strong> / {totalCount}</span>
            </div>
            <div className="w-32 bg-slate-800 h-2 rounded-full overflow-hidden mt-1 border border-slate-700">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={onResetProgress}
            className="border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white text-xs h-9 px-3"
            title="Reset progress data"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            <span>Reset</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
