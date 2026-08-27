/*
  SY0-701 Command Center style: tactical study brief with scan-friendly panels,
  disciplined signal colors, monospace labels, and concise operational guidance.
*/
import { ArrowLeft, AlertTriangle, CheckCircle2, Flag, Lightbulb, Timer, Brain, FileCheck } from 'lucide-react';

interface ExamTipsProps {
  onBack: () => void;
}

const wordingTips = [
  { phrase: 'MOST likely / BEST', meaning: 'Choose the option that satisfies every clue with the fewest assumptions.', cue: 'Do not choose an answer merely because it is technically possible.' },
  { phrase: 'FIRST / NEXT', meaning: 'Select the earliest justified action in the response sequence.', cue: 'Preserve evidence and confirm scope before changing systems unless there is immediate danger.' },
  { phrase: 'LEAST / EXCEPT', meaning: 'Look for the outlier or the least effective option.', cue: 'Read the final word again before selecting an answer.' },
  { phrase: 'PRIVACY / INTEGRITY / AVAILABILITY', meaning: 'Match the business impact to the correct security objective.', cue: 'Ransomware often threatens availability first; tampering threatens integrity.' },
];

const traps = [
  ['RTO vs. RPO', 'RTO is the maximum acceptable restoration time. RPO is the maximum acceptable data-loss window.'],
  ['Containment vs. eradication', 'Containment limits spread. Eradication removes the root cause. Recovery restores normal operations.'],
  ['Hashing vs. encryption', 'Hashing is one-way integrity verification. Encryption is reversible with the correct key and protects confidentiality.'],
  ['RADIUS vs. TACACS+', 'RADIUS commonly combines authentication and authorization while using UDP. TACACS+ separates AAA functions and encrypts the full payload over TCP.'],
  ['SAML vs. OAuth vs. OIDC', 'SAML carries authentication assertions, OAuth delegates authorization, and OIDC adds identity authentication on OAuth 2.0.'],
  ['Vulnerability vs. threat', 'A vulnerability is a weakness. A threat is a potential cause of harm. Risk combines likelihood and impact.'],
  ['Allow list vs. block list', 'An allow list permits only approved items; a block list denies known-bad items but allows everything else by default.'],
  ['DLP vs. DRM', 'DLP controls data movement or exfiltration. DRM controls how protected content may be used after distribution.'],
];

const pbqSteps = [
  'Read the entire prompt first. Identify the business objective, affected assets, constraints, and required outcome.',
  'Start with the highest-impact, lowest-risk control. Use least privilege, segmentation, secure defaults, and evidence preservation.',
  'Apply only the changes the scenario asks for. Avoid adding controls that create new availability or usability problems.',
  'Re-read the requirements after configuring the task. Look for one unmet condition, misplaced rule, or overly broad permission.',
];

const finalChecks = [
  'Explain why the correct answer is best and why each distractor is weaker.',
  'Know the common ports, secure alternatives, protocol purpose, and transport layer for the core services.',
  'Practice quantitative risk: SLE = AV × EF, ALE = SLE × ARO, and understand qualitative risk terms.',
  'Review incident response order, order of volatility, backup types, RAID, RTO/RPO, and recovery sites.',
  'Know the difference between administrative, technical, and physical controls, including preventive, deterrent, detective, corrective, compensating, and directive types.',
  'Use the official objectives audit to find gaps instead of assuming a high practice score proves complete coverage.',
];

export function ExamTips({ onBack }: ExamTipsProps) {
  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between gap-4">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to command center
        </button>
        <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-cyan-300 font-mono">
          <FileCheck className="w-4 h-4" /> exam brief / v7
        </div>
      </div>

      <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-cyan-950/20">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(34,211,238,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.15)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_.75fr] items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200 font-mono">
              <Lightbulb className="w-3.5 h-3.5" /> high-value exam guidance
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-white">Read the question like an analyst.</h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-300">Exam Tips is a last-mile briefing for selecting the best answer under pressure. It complements the objective deck; it does not replace learning the underlying concepts.</p>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-slate-950/60 p-5">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-mono"><CheckCircle2 className="w-4 h-4" /> mission rule</div>
            <p className="mt-3 text-lg font-bold text-white">Answer the scenario, not the keyword.</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">Use the whole fact pattern: asset, actor, control goal, timing, and operational constraint.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
          <div className="flex items-center gap-3"><Brain className="w-5 h-5 text-cyan-300" /><h2 className="font-bold text-white">Question-wording decoder</h2></div>
          <div className="mt-5 space-y-3">
            {wordingTips.map(({ phrase, meaning, cue }) => (
              <div key={phrase} className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                <div className="font-mono text-sm font-bold text-cyan-300">{phrase}</div>
                <p className="mt-1 text-sm text-slate-200">{meaning}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{cue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-amber-400/20 bg-slate-900/70 p-5">
          <div className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-amber-300" /><h2 className="font-bold text-white">High-frequency traps</h2></div>
          <div className="mt-5 space-y-3">
            {traps.map(([term, explanation]) => (
              <div key={term} className="border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                <div className="text-sm font-semibold text-amber-200">{term}</div>
                <p className="mt-1 text-xs leading-5 text-slate-400">{explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-2xl border border-blue-400/20 bg-blue-950/20 p-5">
          <div className="flex items-center gap-3"><Timer className="w-5 h-5 text-blue-300" /><h2 className="font-bold text-white">PBQ and timing protocol</h2></div>
          <p className="mt-3 text-sm leading-6 text-slate-300">Performance-based questions reward careful requirements reading. If a PBQ is consuming too much time, flag it, move to the multiple-choice section, and return with the remaining time.</p>
          <div className="mt-5 space-y-3">
            {pbqSteps.map((step, index) => <div key={step} className="flex gap-3 text-sm text-slate-300"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 font-mono text-xs text-blue-200">0{index + 1}</span><span>{step}</span></div>)}
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/15 p-5">
          <div className="flex items-center gap-3"><Flag className="w-5 h-5 text-emerald-300" /><h2 className="font-bold text-white">Final review checklist</h2></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {finalChecks.map((check) => <div key={check} className="flex gap-3 rounded-xl border border-emerald-400/10 bg-slate-950/30 p-3 text-xs leading-5 text-slate-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" /><span>{check}</span></div>)}
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 text-xs leading-5 text-slate-500">Study note: practice reports and community advice can reveal recurring preparation themes, but only CompTIA’s published objectives define the exam scope. Use the Objectives tab to audit coverage.</div>
    </div>
  );
}
