import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Zap, Terminal, Server, FileText } from 'lucide-react';

interface CheatSheetModalProps {
  onBack: () => void;
}

export function CheatSheetModal({ onBack }: CheatSheetModalProps) {
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
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
          SY0-701 Ultimate Reference Guide
        </span>
      </div>

      {/* Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">CompTIA Security+ SY0-701 Cheat Sheet</h1>
            <p className="text-xs md:text-sm text-slate-400">High-yield exam triggers, instant port mappings, and golden rules.</p>
          </div>
        </div>

        {/* Golden Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Rule 1</span>
            <h4 className="text-white font-bold text-sm">Boring = Better</h4>
            <p className="text-xs text-slate-400 leading-relaxed">If torn between a clever technical fix and a formal policy/process, pick the boring procedural answer.</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Rule 2</span>
            <h4 className="text-white font-bold text-sm">Containment FIRST</h4>
            <p className="text-xs text-slate-400 leading-relaxed">In any active incident question, your first immediate action is to isolate and contain the host.</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Rule 3</span>
            <h4 className="text-white font-bold text-sm">Continuous Verification</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Zero Trust does not mean no access; it means explicit per-request verification of every context.</p>
          </div>
        </div>
      </div>

      {/* Critical Sequences */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-blue-400" />
          <span>Must-Memorize Sequences</span>
        </h3>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/80 space-y-2">
            <span className="text-xs font-bold text-emerald-400 block uppercase">1. Incident Response (NIST Framework)</span>
            <p className="text-sm text-slate-200 font-mono">
              Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned
            </p>
            <span className="text-xs text-slate-400 italic">Mnemonic: Please Do Contain Every Real Leak</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/80 space-y-2">
            <span className="text-xs font-bold text-blue-400 block uppercase">2. Order of Volatility (Forensics)</span>
            <p className="text-sm text-slate-200 font-mono">
              CPU Cache / Registers → RAM / Routing Tables → Swap / Pagefile → Hard Drive / SSD → Remote Logs
            </p>
          </div>
        </div>
      </div>

      {/* Quick Port Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Server className="w-5 h-5 text-purple-400" />
          <span>Essential Exam Ports</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { port: '22', name: 'SSH', use: 'Secure remote command shell (replaces Telnet 23)' },
            { port: '53', name: 'DNS', use: 'Domain name resolution (UDP/TCP)' },
            { port: '80 / 443', name: 'HTTP / HTTPS', use: 'Web traffic (Unencrypted vs. TLS encrypted)' },
            { port: '445', name: 'SMB', use: 'Windows file sharing (Ransomware vector)' },
            { port: '389 / 636', name: 'LDAP / LDAPS', use: 'Directory service queries (Cleartext vs. Secure)' },
            { port: '3389', name: 'RDP', use: 'Windows Remote Desktop GUI' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-400 block">{item.name}</span>
                <span className="text-sm text-slate-200 font-medium">{item.use}</span>
              </div>
              <span className="text-xs font-mono font-bold bg-slate-800 text-emerald-400 px-3 py-1.5 rounded-xl border border-slate-700">
                Port {item.port}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
