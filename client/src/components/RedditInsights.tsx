import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, ExternalLink, Lightbulb, RotateCcw, ShieldAlert, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { REDDIT_PRACTICE_QUESTIONS, REDDIT_SOURCES } from '@/data/redditPractice';

interface RedditInsightsProps {
  onBack: () => void;
}

export function RedditInsights({ onBack }: RedditInsightsProps) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const score = useMemo(() => REDDIT_PRACTICE_QUESTIONS.reduce((total, question) => total + (selected[question.id] === question.answer ? 1 : 0), 0), [selected]);
  const answered = Object.keys(selected).length;

  const reset = () => {
    setSelected({});
    setShowResults(false);
  };

  return (
    <div className="space-y-6 py-6 animate-fadeIn">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="outline" onClick={onBack} className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to decks
        </Button>
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span>{answered}/{REDDIT_PRACTICE_QUESTIONS.length} answered</span>
          {showResults && <span className="font-semibold text-emerald-300">Score: {score}/{REDDIT_PRACTICE_QUESTIONS.length}</span>}
          <Button variant="outline" size="sm" onClick={reset} className="border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white">
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Reset
          </Button>
        </div>
      </div>

      <section className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-7 shadow-2xl md:p-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">
            <ShieldAlert className="h-3.5 w-3.5" /> REDDIT-INFORMED PRACTICE
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">What students say is confusing</h1>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">These are original SY0-701 practice scenarios synthesized from recurring public Reddit discussions and comment threads: acronym gaps, short but tricky wording, broad-concept judgment, PBQ preparation, malware and control selection, FDE versus remote wipe, terminology pairs, and choosing the best answer for the business.</p>
          <div className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-slate-950/40 p-4 text-xs leading-relaxed text-amber-100/80">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            <span><strong className="text-amber-200">Important:</strong> Reddit reports are anecdotal and vary by exam form. This module does not contain recalled or copied live-exam questions and does not predict what will appear on your test.</span>
          </div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        {REDDIT_PRACTICE_QUESTIONS.map((question, index) => {
          const picked = selected[question.id];
          const isCorrect = picked === question.answer;
          return (
            <article key={question.id} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl transition hover:border-slate-700">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Scenario {String(index + 1).padStart(2, '0')}</span>
                <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-400">{question.theme}</span>
              </div>
              <h2 className="text-base font-semibold leading-relaxed text-white">{question.prompt}</h2>
              <div className="mt-4 space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isPicked = picked === optionIndex;
                  const revealCorrect = showResults && optionIndex === question.answer;
                  return (
                    <button key={option} onClick={() => setSelected(prev => ({ ...prev, [question.id]: optionIndex }))} className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition ${revealCorrect ? 'border-emerald-500/70 bg-emerald-500/10 text-emerald-100' : isPicked ? 'border-blue-500/70 bg-blue-500/10 text-blue-100' : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-600 hover:bg-slate-800/70'}`}>
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">{String.fromCharCode(65 + optionIndex)}</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
              {showResults && picked !== undefined && (
                <div className={`mt-4 rounded-xl border p-4 text-sm leading-relaxed ${isCorrect ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100' : 'border-rose-500/30 bg-rose-500/10 text-rose-100'}`}>
                  <div className="mb-2 flex items-center gap-2 font-semibold">{isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}{isCorrect ? 'Correct reasoning' : `Correct answer: ${String.fromCharCode(65 + question.answer)}`}</div>
                  <p>{question.explanation}</p>
                  <p className="mt-2 text-xs opacity-80"><strong>Trap to avoid:</strong> {question.trap}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Button onClick={() => setShowResults(true)} disabled={answered === 0} className="bg-gradient-to-r from-amber-600 to-orange-600 px-7 font-semibold text-white shadow-lg shadow-amber-600/20 hover:from-amber-500 hover:to-orange-500">Check explanations</Button>
      </div>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="mb-4 flex items-center gap-2"><ExternalLink className="h-4 w-4 text-blue-300" /><h2 className="text-lg font-bold text-white">Public discussion sources</h2></div>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">Use these links to review the context, not to memorize reported question details. The app’s scenarios above are original and intentionally rewritten for learning. The newest comment review found repeated advice to learn unfamiliar terms in context, practice alternate wording, cover broad objectives, and use PBQ pacing as a personal strategy—not an exam rule.</p>
        <div className="grid gap-2 md:grid-cols-2">
          {REDDIT_SOURCES.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2 text-xs text-blue-300 transition hover:border-blue-500/50 hover:text-blue-200">{source.title} <ExternalLink className="ml-1 inline h-3 w-3" /></a>)}
        </div>
      </section>
    </div>
  );
}
