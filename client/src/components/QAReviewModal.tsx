import { Button } from '@/components/ui/button';
import { ArrowLeft, ShieldAlert, CheckCircle2, AlertTriangle, Zap, HelpCircle } from 'lucide-react';

interface QAReviewModalProps {
  onBack: () => void;
}

export function QAReviewModal({ onBack }: QAReviewModalProps) {
  const qaTopics = [
    {
      title: "1. The 'BEST' vs. 'FIRST' Rule in Incident Response",
      trap: "Choosing an advanced technical cleanup when the question asks for the immediate next tactical step.",
      rule: "Always prioritize containment before eradication or remediation. If a host is infected, isolate/disconnect it FIRST."
    },
    {
      title: "2. RADIUS vs. TACACS+ Exam Distinction",
      trap: "Mixing up port numbers and what gets encrypted.",
      rule: "RADIUS encrypts ONLY the password (UDP 1812/1813, network access). TACACS+ encrypts the ENTIRE packet (TCP 49, device administration / router CLI)."
    },
    {
      title: "3. SAML vs. OAuth vs. OIDC",
      trap: "Confusing authorization tokens with authentication logins.",
      rule: "SAML = Enterprise federation & SSO (XML). OAuth = Token-based authorization (API access). OIDC = Authentication (login) built on top of OAuth (JWT)."
    },
    {
      title: "4. RBAC vs. ABAC (Attribute-Based Access Control)",
      trap: "Picking RBAC when dynamic environmental conditions are mentioned.",
      rule: "If the scenario mentions checking user location, time of day, IP address, or device health posture, the correct answer is ALWAYS ABAC."
    },
    {
      title: "5. Backup Strategies: Full vs. Incremental vs. Differential",
      trap: "Forgetting restore complexity vs. backup creation speed.",
      rule: "Incremental backups are fastest to make but slowest to restore (requires Last Full + ALL incrementals). Differential is faster to restore (Full + Last Differential)."
    },
    {
      title: "6. Quantitative Risk: ALE = SLE × ARO",
      trap: "Failing to calculate annualized loss expectancy correctly in scenario math.",
      rule: "SLE = Asset Value × Exposure Factor (EF). ARO = How often it happens per year. ALE = SLE × ARO."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Decks</span>
        </Button>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center space-x-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
          <span>High-Frequency Exam QA & Traps</span>
        </span>
      </div>

      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">SY0-701 Frequently Missed Concepts & Exam Traps</h1>
            <p className="text-xs md:text-sm text-slate-400">Targeted QA review addressing the trickiest distinctions that trip up students on exam day.</p>
          </div>
        </div>
      </div>

      {/* Trap & Rule Cards */}
      <div className="space-y-4">
        {qaTopics.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 hover:border-slate-700 transition-all">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-mono">
                {idx + 1}
              </span>
              <span>{item.title}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-rose-950/20 border border-rose-500/20 p-4 rounded-xl space-y-1">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center space-x-1">
                  <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
                  <span>Common Student Trap</span>
                </span>
                <p className="text-xs text-rose-200/90 leading-relaxed">{item.trap}</p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
                  <span>Exam Golden Rule</span>
                </span>
                <p className="text-xs text-emerald-200/90 leading-relaxed">{item.rule}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
