import { FLASHCARD_CATEGORIES, Flashcard } from '@/data/flashcards';
import { ShieldCheck, AlertTriangle, Cloud, Terminal, Lock, Play, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DeckSelectorProps {
  onSelectCategory: (categoryId: string) => void;
  onStartQuiz: () => void;
  onStartReview: () => void;
  progressMap: Record<number, 'mastered' | 'review' | 'unstudied'>;
  flashcards: Flashcard[];
}

export function DeckSelector({ onSelectCategory, onStartQuiz, onStartReview, progressMap, flashcards }: DeckSelectorProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-emerald-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-purple-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-rose-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  const totalMastered = Object.values(progressMap).filter(status => status === 'mastered').length;
  const totalReview = Object.values(progressMap).filter(status => status === 'review').length;
  const overallPercentage = Math.round((totalMastered / flashcards.length) * 100) || 0;

  return (
    <div className="space-y-8 py-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border border-slate-800 p-8 md:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>SY0-701 OFFICIAL V7 ALIGNED EXAM SUITE</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Master the CompTIA Security+ Exam
          </h1>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Practice 100 comprehensive flashcards structured across all 5 official V7 exam domains, providing complete standalone exam mastery. Featuring corrected cryptography placement, resilience metrics, all 6 security controls, and forensics.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => onSelectCategory('all')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 flex items-center space-x-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Study All 100 Cards</span>
            </Button>

            <Button
              onClick={onStartReview}
              variant="outline"
              className="border-emerald-500/30 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20 hover:text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{totalReview > 0 ? `Review ${totalReview} Priority Cards` : 'Start First Review Session'}</span>
            </Button>

            <Button
              onClick={onStartQuiz}
              variant="outline"
              className="border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Take Practice Quiz</span>
            </Button>
          </div>
        </div>

        {/* Quick Stats Overlay Box */}
        <div className="mt-8 pt-8 border-t border-slate-700/60 grid grid-cols-3 gap-4 text-center">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Overall Mastery</span>
            <span className="text-2xl font-bold text-emerald-400">{overallPercentage}%</span>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Mastered Cards</span>
            <span className="text-2xl font-bold text-blue-400">{totalMastered} / {flashcards.length}</span>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Needs Review</span>
            <span className="text-2xl font-bold text-amber-400">{totalReview}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <span className="text-xs uppercase tracking-widest text-slate-500">Next best action</span>
          <p className="mt-2 text-sm font-semibold text-white">{totalReview > 0 ? 'Clear your review queue before adding new cards.' : 'Start with one domain, then test yourself in Practice Quiz.'}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <span className="text-xs uppercase tracking-widest text-slate-500">Readiness signal</span>
          <p className="mt-2 text-sm font-semibold text-white">{overallPercentage >= 80 ? 'Strong card mastery. Keep scenario practice active.' : 'Build toward 80% mastery, then validate with mixed scenarios.'}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <span className="text-xs uppercase tracking-widest text-slate-500">Study rhythm</span>
          <p className="mt-2 text-sm font-semibold text-white">Review missed concepts, explain the why, and revisit them tomorrow.</p>
        </div>
      </div>

      {/* Category Decks Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-wide">Official V7 Exam Domains</h2>
          <span className="text-xs text-slate-400 font-medium">Click any domain to start focused practice</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLASHCARD_CATEGORIES.map((cat) => {
            const catCards = flashcards.filter(f => f.category === cat.id);
            const masteredCat = catCards.filter(f => progressMap[f.id] === 'mastered').length;
            const percent = Math.round((masteredCat / catCards.length) * 100) || 0;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color}`} />

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                      {getIcon(cat.icon)}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {cat.count} Cards
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {cat.name}
                  </h3>
                  
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                    {cat.id === 'domain1' && 'Covers general security concepts, PKI cryptography, Zero Trust, AAA, non-repudiation, and all 6 control types.'}
                    {cat.id === 'domain2' && 'Explores threat actor types, 8 official vulnerability categories, web attacks, ransomware, and social engineering.'}
                    {cat.id === 'domain3' && 'Focuses on resilience metrics (RTO/RPO), disaster sites, backups, RAID, cloud shared responsibility, and micro-segmentation.'}
                    {cat.id === 'domain4' && 'Covers security operations, order of volatility, digital forensics, incident response, and asset management.'}
                    {cat.id === 'domain5' && 'Examines risk calculation (ALE/SLE), business impact analysis, governance hierarchy, and third-party risk.'}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-400 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline mr-1" />
                      Mastery
                    </span>
                    <span className="text-emerald-400 font-bold">{masteredCat} / {catCards.length} ({percent}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
                    <div 
                      className={`h-full bg-gradient-to-r ${cat.color} transition-all duration-500 rounded-full`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
