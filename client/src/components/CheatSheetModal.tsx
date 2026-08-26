import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Zap, Terminal, Server, FileText, CheckCircle2, BookOpen } from 'lucide-react';

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
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
          SY0-701 Official V7 Aligned Cheat Sheet
        </span>
      </div>

      {/* Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">CompTIA Security+ SY0-701 Enhanced Cheat Sheet</h1>
            <p className="text-xs md:text-sm text-slate-400">Corrected V7 domain placements, resilience metrics, all 6 control types, and risk formulas.</p>
          </div>
        </div>

        {/* Enhancements Banner */}
        <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-2">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">Official V7 Objective Alignment Highlights:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Cryptography</strong> relocated to Domain 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Resilience & Recovery</strong> added to Domain 3</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All <strong>6 Security Control Types</strong> included</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Forensics & Order of Volatility</strong> in Domain 4</span>
            </div>
          </div>
        </div>
      </div>

      {/* Acronym Quick Reference */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <span>High-Yield Acronym Quick Reference</span>
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">Use the expansion, purpose, and contrast together. The exam often tests whether you can apply an acronym to a scenario—not merely recognize its letters.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { term: 'AAA', meaning: 'Authentication, Authorization, Accounting', cue: 'Who are you? What may you do? What did you do?' },
            { term: 'ABAC / RBAC', meaning: 'Attribute-Based / Role-Based Access Control', cue: 'ABAC uses characteristics and context; RBAC uses job roles.' },
            { term: 'ACL / ACE', meaning: 'Access Control List / Access Control Entry', cue: 'An ACL is the list; an ACE is one rule inside it.' },
            { term: 'DAC / MAC', meaning: 'Discretionary / Mandatory Access Control', cue: 'DAC is owner-controlled; MAC is centrally enforced by labels.' },
            { term: 'FDE / SED', meaning: 'Full-Disk Encryption / Self-Encrypting Drive', cue: 'Both protect data at rest; SED performs encryption in drive hardware.' },
            { term: 'PKI / CA / RA', meaning: 'Public Key Infrastructure / Certificate Authority / Registration Authority', cue: 'PKI is the ecosystem; CA issues certificates; RA validates identity.' },
            { term: 'CSR / CRL / OCSP', meaning: 'Certificate Signing Request / Certificate Revocation List / Online Certificate Status Protocol', cue: 'Request a cert; check revocation by list; check status online.' },
            { term: 'CIA', meaning: 'Confidentiality, Integrity, Availability', cue: 'The core security objectives; do not confuse integrity with authentication.' },
            { term: 'RTO / RPO / MTTR', meaning: 'Recovery Time Objective / Recovery Point Objective / Mean Time To Repair', cue: 'RTO is downtime; RPO is acceptable data loss; MTTR is repair time.' },
            { term: 'HA / DR / BCP', meaning: 'High Availability / Disaster Recovery / Business Continuity Planning', cue: 'HA reduces interruption; DR restores IT; BCP keeps critical business functions operating.' },
            { term: 'MFA / SSO / IdP', meaning: 'Multifactor Authentication / Single Sign-On / Identity Provider', cue: 'MFA uses factor categories; SSO reduces repeated logins; IdP provides identity services.' },
            { term: 'SAML / OAuth / OIDC', meaning: 'Security Assertion Markup Language / delegated authorization / OpenID Connect', cue: 'SAML commonly carries enterprise authentication assertions; OAuth delegates access; OIDC adds identity on OAuth.' },
            { term: 'RADIUS / TACACS+', meaning: 'Remote Authentication Dial-In User Service / Terminal Access Controller Access-Control System Plus', cue: 'RADIUS commonly supports network access; TACACS+ commonly supports device administration.' },
            { term: 'SIEM / SOAR', meaning: 'Security Information and Event Management / Security Orchestration, Automation and Response', cue: 'SIEM centralizes and correlates; SOAR coordinates and automates response.' },
            { term: 'EDR / XDR / MDR', meaning: 'Endpoint Detection and Response / Extended Detection and Response / Managed Detection and Response', cue: 'EDR focuses endpoint telemetry; XDR correlates across layers; MDR is a managed service.' },
            { term: 'IDS / IPS / WAF', meaning: 'Intrusion Detection / Intrusion Prevention / Web Application Firewall', cue: 'IDS alerts; IPS blocks inline; WAF protects web-application traffic.' },
            { term: 'DLP / CASB', meaning: 'Data Loss Prevention / Cloud Access Security Broker', cue: 'DLP controls sensitive-data movement; CASB applies visibility and policy between users and cloud services.' },
            { term: 'TTP / IOC / IOA', meaning: 'Tactics, Techniques and Procedures / Indicator of Compromise / Indicator of Attack', cue: 'TTP describes behavior; IOC is evidence of compromise; IOA signals malicious activity in progress.' },
            { term: 'CVE / CVSS / CWE', meaning: 'Common Vulnerabilities and Exposures / Common Vulnerability Scoring System / Common Weakness Enumeration', cue: 'CVE names a vulnerability; CVSS scores severity; CWE classifies the underlying weakness.' },
            { term: 'SAST / DAST / IAST', meaning: 'Static / Dynamic / Interactive Application Security Testing', cue: 'SAST analyzes code; DAST tests running apps externally; IAST observes execution from inside.' },
            { term: 'SLE / ARO / ALE', meaning: 'Single Loss Expectancy / Annual Rate of Occurrence / Annualized Loss Expectancy', cue: 'Asset value × exposure factor = SLE; SLE × ARO = ALE.' },
            { term: 'BIA / BCP / DRP', meaning: 'Business Impact Analysis / Business Continuity Plan / Disaster Recovery Plan', cue: 'BIA identifies impact and priorities; BCP sustains operations; DRP restores technology.' },
            { term: 'SLA / MOU / NDA / SOC 2', meaning: 'Service-Level Agreement / Memorandum of Understanding / Non-Disclosure Agreement / Service Organization Control 2', cue: 'Service commitments, shared intent, confidentiality, and controls-reporting evidence.' },
            { term: 'IoT / ICS / SCADA', meaning: 'Internet of Things / Industrial Control Systems / Supervisory Control and Data Acquisition', cue: 'Connected devices, industrial control environments, and supervisory monitoring/control.' },
            { term: 'BYOD / MDM / COPE', meaning: 'Bring Your Own Device / Mobile Device Management / Corporate-Owned, Personally Enabled', cue: 'Personal device, centralized device control, or company-owned device allowed for personal use.' },
            { term: 'NAC / ZTNA / ZTA', meaning: 'Network Access Control / Zero Trust Network Access / Zero Trust Architecture', cue: 'NAC evaluates admission; ZTNA brokers access; ZTA continuously verifies trust.' },
            { term: 'API / SDK / CI-CD', meaning: 'Application Programming Interface / Software Development Kit / Continuous Integration and Continuous Delivery', cue: 'Interfaces, development tools, and an automated build/test/release pipeline.' },
            { term: 'HTTP/S / SSH / SNMP', meaning: 'Web / Secure Shell / Simple Network Management Protocol', cue: 'Web traffic, encrypted administration, and device monitoring/management.' },
            { term: 'DNS / DHCP / NTP', meaning: 'Domain Name System / Dynamic Host Configuration Protocol / Network Time Protocol', cue: 'Names, network configuration, and synchronized time for reliable logs.' },
            { term: 'SMB / LDAP / LDAPS', meaning: 'Server Message Block / Lightweight Directory Access Protocol / LDAP over TLS', cue: 'File sharing, directory queries, and encrypted directory communication.' }
          ].map((item) => (
            <div key={item.term} className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/80 space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-bold font-mono text-cyan-300">{item.term}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Know the distinction</span>
              </div>
              <p className="text-xs font-semibold text-slate-200">{item.meaning}</p>
              <p className="text-xs leading-relaxed text-slate-400">{item.cue}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Sequences */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-blue-400" />
          <span>Must-Memorize Sequences & Frameworks</span>
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
              CPU Cache / Registers → RAM / Routing Tables → Swap / Pagefile → Storage Drives → Remote Logs
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/80 space-y-2">
            <span className="text-xs font-bold text-amber-400 block uppercase">3. Governance Hierarchy (All 4 Levels)</span>
            <p className="text-sm text-slate-200 font-mono">
              Policy (Why) → Standard (Mandatory What) → Procedure (How-to) → Guideline (Optional Best Practice)
            </p>
          </div>
        </div>
      </div>

      {/* Quick Port Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center space-x-2">
          <Server className="w-5 h-5 text-purple-400" />
          <span>Essential Exam Ports & Risk Formulas</span>
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

        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Quantitative Risk Formula</span>
          <p className="text-sm text-white font-mono font-semibold">
            SLE (Single Loss Expectancy) × ARO (Annual Rate of Occurrence) = ALE (Annualized Loss Expectancy)
          </p>
        </div>
      </div>
    </div>
  );
}
