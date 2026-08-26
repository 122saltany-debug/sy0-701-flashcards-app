import { useMemo } from 'react';
import { ArrowLeft, BookOpenCheck, ExternalLink, Flag, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FLASHCARDS } from '@/data/flashcards';
import { COMPTIA_SECURITY_SOURCE, OBJECTIVE_DOMAINS, OFFICIAL_OBJECTIVES_SOURCE, PUBLISHED_OBJECTIVES_PDF } from '@/data/objectives';

type ProgressStatus = 'mastered' | 'review' | 'unstudied';

interface ObjectiveAuditProps {
  progressMap: Record<number, ProgressStatus>;
  onBack: () => void;
  onStartDomain: (domainId: string) => void;
}

const statusStyles = {
  strong: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  partial: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  gap: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
};

export function ObjectiveAudit({ progressMap, onBack, onStartDomain }: ObjectiveAuditProps) {
  const stats = useMemo(() => OBJECTIVE_DOMAINS.map((domain) => {
    const cards = FLASHCARDS.filter((card) => card.category === domain.id);
    const mastered = cards.filter((card) => progressMap[card.id] === 'mastered').length;
    const studied = cards.filter((card) => Boolean(progressMap[card.id])).length;
    const gaps = domain.tasks.filter((task) => task.coverage === 'gap').length;
    return { ...domain, cards: cards.length, mastered, studied, gaps, mastery: cards.length ? Math.round((mastered / cards.length) * 100) : 0 };
  }), [progressMap]);

  const totalTasks = OBJECTIVE_DOMAINS.reduce((sum, domain) => sum + domain.tasks.length, 0);
  const mappedTasks = OBJECTIVE_DOMAINS.reduce((sum, domain) => sum + domain.tasks.filter((task) => task.coverage !== 'gap').length, 0);
  const gapTasks = OBJECTIVE_DOMAINS.flatMap((domain) => domain.tasks.filter((task) => task.coverage === 'gap'));

  return (
    <section className="mx-auto max-w-6xl space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Button variant="ghost" onClick={onBack} className="mb-3 -ml-3 text-slate-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to study decks
          </Button>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-3 text-blue-300"><Target className="h-6 w-6" /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">Official coverage audit</p>
              <h1 className="text-3xl font-black tracking-tight text-white">SY0-701 objective map</h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">Use this page to check whether your study time follows the official domain weighting. Coverage status describes this app’s current content map; mastery is calculated from your saved card progress.</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
          <BookOpenCheck className="h-4 w-4 text-emerald-400" />
          <span><strong className="text-white">{mappedTasks}</strong> of {totalTasks} task areas represented</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"><p className="text-xs uppercase tracking-wider text-slate-500">Exam-weighted focus</p><p className="mt-2 text-2xl font-black text-white">D4 + D2</p><p className="mt-1 text-sm text-slate-400">Security Operations (28%) and Threats (22%) together represent half the exam weighting.</p></div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"><p className="text-xs uppercase tracking-wider text-slate-500">Current card inventory</p><p className="mt-2 text-2xl font-black text-white">{FLASHCARDS.length}</p><p className="mt-1 text-sm text-slate-400">Cards are organized by the five official domains, then reinforced with QA and Reddit-informed practice.</p></div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5"><p className="module-label text-rose-300">Known content gap</p><p className="mt-2 text-2xl font-black text-rose-300">{gapTasks.length ? gapTasks.map((task) => task.id).join(' · ') : 'NONE'}</p><p className="mt-1 text-sm text-slate-400">{gapTasks.length ? gapTasks.map((task) => task.label).join('; ') + ' needs a dedicated study pass.' : 'Every official task has at least partial coverage in this deck.'}</p></div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {stats.map((domain) => (
          <article key={domain.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/10">
            <div className="flex items-start justify-between gap-4">
              <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{domain.id.replace('domain', 'Domain ')} · {domain.weight}%</p><h2 className="mt-1 text-xl font-bold text-white">{domain.title}</h2></div>
              <Button size="sm" variant="outline" onClick={() => onStartDomain(domain.id)} className="border-slate-700 bg-slate-950/60 text-slate-200 hover:bg-slate-800"><TrendingUp className="mr-2 h-4 w-4" /> Study</Button>
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-slate-400"><span>{domain.studied}/{domain.cards} cards studied</span><span className="font-bold text-emerald-300">{domain.mastery}% mastered</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all" style={{ width: `${domain.mastery}%` }} /></div>
            <div className="mt-5 space-y-2">
              {domain.tasks.map((task) => <div key={task.id} className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-950/40 p-3"><span className="mt-0.5 font-mono text-xs text-slate-500">{task.id}</span><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-slate-200">{task.label}</p><p className="mt-1 text-xs leading-5 text-slate-500">{task.focus}</p></div><span className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${statusStyles[task.coverage]}`}>{task.coverage}</span></div>)}
            </div>
            {domain.gaps > 0 && <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 px-3 py-2 text-xs text-rose-200"><Flag className="h-4 w-4" /> Build this gap before relying on this deck as your only resource.</div>}
          </article>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-slate-800 pt-5 text-xs text-slate-500">
        <span>Sources:</span>
        <a href={OFFICIAL_OBJECTIVES_SOURCE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200">CompTIA objectives page <ExternalLink className="h-3 w-3" /></a>
        <a href={PUBLISHED_OBJECTIVES_PDF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200">Published objectives PDF <ExternalLink className="h-3 w-3" /></a>
        <a href={COMPTIA_SECURITY_SOURCE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200">CompTIA Security+ overview <ExternalLink className="h-3 w-3" /></a>
      </div>
    </section>
  );
}
