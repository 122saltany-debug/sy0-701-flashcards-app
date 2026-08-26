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
            { term: 'SAML / OAuth / OIDC', meaning: 'Security Assertion Markup Language / Open Authorization / OpenID Connect', cue: 'SAML carries authentication assertions; OAuth delegates authorization; OIDC adds an identity layer to OAuth 2.0.' },
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
            { term: 'IoT / ICS / SCADA', meaning: 'Internet of Things / Industrial Control Systems / Supervisory Control and Data Acquisition', cue: 'IoT connects devices; ICS controls industrial processes; SCADA supervises and collects operational data.' },
            { term: 'BYOD / MDM / COPE', meaning: 'Bring Your Own Device / Mobile Device Management / Corporate-Owned, Personally Enabled', cue: 'Personal device, centralized device control, or company-owned device allowed for personal use.' },
            { term: 'NAC / ZTNA / ZTA', meaning: 'Network Access Control / Zero Trust Network Access / Zero Trust Architecture', cue: 'NAC evaluates admission; ZTNA brokers access; ZTA continuously verifies trust.' },
            { term: 'API / SDK / CI/CD', meaning: 'Application Programming Interface / Software Development Kit / Continuous Integration and Continuous Delivery', cue: 'Interfaces, development tools, and an automated build/test/release pipeline.' },
            { term: 'HTTP/S / SSH / SNMP', meaning: 'Web / Secure Shell / Simple Network Management Protocol', cue: 'Web traffic, encrypted administration, and device monitoring/management.' },
            { term: 'DNS / DHCP / NTP', meaning: 'Domain Name System / Dynamic Host Configuration Protocol / Network Time Protocol', cue: 'Names, network configuration, and synchronized time for reliable logs.' },
            { term: 'SMB / LDAP / LDAPS', meaning: 'Server Message Block / Lightweight Directory Access Protocol / LDAP over TLS', cue: 'File sharing, directory queries, and encrypted directory communication.' },
            { term: '2FA / MFA', meaning: 'Two-Factor Authentication / Multifactor Authentication', cue: '2FA uses exactly two factor categories; MFA uses two or more.' },
            { term: 'AES / 3DES / RSA / ECC', meaning: 'Advanced Encryption Standard / Triple DES / Rivest-Shamir-Adleman / Elliptic Curve Cryptography', cue: 'AES is symmetric; RSA and ECC are asymmetric; 3DES is legacy and generally avoided for new designs.' },
            { term: 'SHA / HMAC', meaning: 'Secure Hash Algorithm / Hash-Based Message Authentication Code', cue: 'A hash supports integrity; HMAC combines a hash with a secret key for integrity and authenticity.' },
            { term: 'PFS / DH / ECDH', meaning: 'Perfect Forward Secrecy / Diffie-Hellman / Elliptic-Curve Diffie-Hellman', cue: 'Ephemeral key agreement limits the impact if a long-term private key is later exposed.' },
            { term: 'TPM / HSM / KMS', meaning: 'Trusted Platform Module / Hardware Security Module / Key Management System', cue: 'TPM protects platform keys; HSM protects cryptographic operations; KMS manages key lifecycle and access.' },
            { term: 'X.509 / SAN / CSR', meaning: 'Digital Certificate Standard / Subject Alternative Name / Certificate Signing Request', cue: 'SAN holds additional names; CSR requests issuance and includes the subject public key.' },
            { term: 'TLS / IPsec / VPN', meaning: 'Transport Layer Security / Internet Protocol Security / Virtual Private Network', cue: 'TLS secures sessions; IPsec secures IP traffic; a VPN creates a protected logical connection.' },
            { term: 'EAP / PEAP / LEAP', meaning: 'Extensible Authentication Protocol / Protected EAP / Lightweight EAP', cue: 'EAP is a framework; PEAP tunnels authentication; LEAP is an older Cisco method with known weaknesses.' },
            { term: 'PAP / CHAP / MS-CHAP', meaning: 'Password Authentication Protocol / Challenge Handshake Authentication Protocol / Microsoft CHAP', cue: 'PAP sends credentials in cleartext; challenge-response methods avoid sending the password directly.' },
            { term: 'Kerberos / TGT / SPN', meaning: 'Ticket-based Authentication Protocol / Ticket-Granting Ticket / Service Principal Name', cue: 'Kerberos uses tickets; a TGT requests service tickets; an SPN identifies a service account or service.' },
            { term: 'NTLM / LDAP / AD', meaning: 'New Technology LAN Manager / Lightweight Directory Access Protocol / Active Directory', cue: 'NTLM is legacy authentication; LDAP queries directories; AD is Microsoft directory and identity infrastructure.' },
            { term: 'DNS / DNSSEC / DoH', meaning: 'Domain Name System / DNS Security Extensions / DNS over HTTPS', cue: 'DNS resolves names; DNSSEC validates authenticity; DoH encrypts DNS queries inside HTTPS.' },
            { term: 'DHCP / ARP / ICMP', meaning: 'Dynamic Host Configuration Protocol / Address Resolution Protocol / Internet Control Message Protocol', cue: 'DHCP assigns configuration; ARP maps IPv4 addresses to MAC addresses; ICMP carries control and diagnostic messages.' },
            { term: 'TCP / UDP / QUIC', meaning: 'Transmission Control Protocol / User Datagram Protocol / Quick UDP Internet Connections', cue: 'TCP provides reliable ordered delivery; UDP is connectionless; QUIC adds secure transport features over UDP.' },
            { term: 'HTTP / HTTPS / HSTS', meaning: 'Hypertext Transfer Protocol / HTTP Secure / HTTP Strict Transport Security', cue: 'HTTPS uses TLS; HSTS tells browsers to use HTTPS rather than downgrade to HTTP.' },
            { term: 'FTP / SFTP / FTPS', meaning: 'File Transfer Protocol / SSH File Transfer Protocol / FTP over TLS', cue: 'FTP is cleartext; SFTP runs over SSH; FTPS adds TLS to FTP.' },
            { term: 'SMTP / IMAP / POP3', meaning: 'Simple Mail Transfer Protocol / Internet Message Access Protocol / Post Office Protocol 3', cue: 'SMTP sends mail; IMAP synchronizes mail on a server; POP3 commonly downloads mail to a client.' },
            { term: 'SNMP / MIB / OID', meaning: 'Simple Network Management Protocol / Management Information Base / Object Identifier', cue: 'SNMP manages devices; MIB defines manageable objects; OID identifies a specific object.' },
            { term: 'WEP / WPA / WPA2 / WPA3', meaning: 'Wireless Encryption Protocol / Wi-Fi Protected Access generations', cue: 'WEP is obsolete; WPA2 commonly uses AES-CCMP; WPA3 strengthens modern Wi-Fi authentication.' },
            { term: 'SSID / BSSID / AP', meaning: 'Service Set Identifier / Basic Service Set Identifier / Access Point', cue: 'SSID is the network name; BSSID identifies a specific radio/BSS; AP provides wireless access.' },
            { term: 'DoS / DDoS / DRDoS', meaning: 'Denial of Service / Distributed DoS / Distributed Reflected DoS', cue: 'DDoS uses many sources; reflected attacks abuse third-party responders; amplification increases traffic volume.' },
            { term: 'APT / RAT / C2', meaning: 'Advanced Persistent Threat / Remote Access Trojan / Command and Control', cue: 'APT describes a capable persistent campaign; RAT provides remote control; C2 is the control channel.' },
            { term: 'BEC / CEO fraud', meaning: 'Business Email Compromise / executive impersonation fraud', cue: 'Treat unexpected payment or credential requests as social-engineering indicators and verify requests out of band.' },
            { term: 'CSIRT / CERT / SOC', meaning: 'Computer Security Incident Response Team / Computer Emergency Response Team / Security Operations Center', cue: 'CSIRT/CERT respond to incidents; SOC continuously monitors and investigates security telemetry.' },
            { term: 'IRP / DRP / BCP', meaning: 'Incident Response Plan / Disaster Recovery Plan / Business Continuity Plan', cue: 'IRP handles security incidents; DRP restores systems; BCP sustains critical business services.' },
            { term: 'MTBF / MTTR / SLA', meaning: 'Mean Time Between Failures / Mean Time To Repair / Service-Level Agreement', cue: 'MTBF measures reliability; MTTR measures restoration speed; SLA defines service commitments.' },
            { term: 'SPoF / HA / N+1', meaning: 'Single Point of Failure / High Availability / N+1 redundancy', cue: 'Remove SPoFs; HA limits interruption; N+1 keeps one spare capacity unit available.' },
            { term: 'RAID / NAS / SAN', meaning: 'Redundant Array of Independent Disks / Network-Attached Storage / Storage Area Network', cue: 'RAID provides disk redundancy or performance; NAS serves files; SAN presents block storage.' },
            { term: 'RPO / RTO / WRT', meaning: 'Recovery Point Objective / Recovery Time Objective / Work Recovery Time', cue: 'RPO is data-loss tolerance; RTO is restoration target; WRT is time to resume normal operations.' },
            { term: 'CVE / CWE / CPE', meaning: 'Common Vulnerabilities and Exposures / Common Weakness Enumeration / Common Platform Enumeration', cue: 'CVE identifies a vulnerability; CWE describes a weakness class; CPE identifies affected platforms.' },
            { term: 'OWASP / XSS / SQLi', meaning: 'Open Worldwide Application Security Project / Cross-Site Scripting / Structured Query Language Injection', cue: 'OWASP publishes application-security guidance; XSS injects script into clients; SQLi manipulates database queries.' },
            { term: 'SAST / DAST / RASP', meaning: 'Static Application Security Testing / Dynamic Application Security Testing / Runtime Application Self-Protection', cue: 'SAST reviews code; DAST tests a running app; RASP detects or blocks attacks at runtime.' },
            { term: 'IaC / CI/CD / DevSecOps', meaning: 'Infrastructure as Code / Continuous Integration and Delivery / Development, Security and Operations', cue: 'IaC defines infrastructure in code; CI/CD automates delivery; DevSecOps embeds security throughout the pipeline.' },
            { term: 'ICS / PLC / HMI', meaning: 'Industrial Control Systems / Programmable Logic Controller / Human-Machine Interface', cue: 'ICS controls industrial processes; PLC executes control logic; HMI lets operators monitor and control processes.' },
            { term: 'RTOS / PLC / HMI', meaning: 'Real-Time Operating System / Programmable Logic Controller / Human-Machine Interface', cue: 'RTOS provides predictable timing; PLC controls machinery; HMI lets operators monitor and control processes.' },
            { term: 'MDM / MAM / UEM', meaning: 'Mobile Device Management / Mobile Application Management / Unified Endpoint Management', cue: 'MDM controls devices; MAM controls apps and data; UEM extends management across endpoint types.' },
            { term: 'BYOD / COBO / COPE', meaning: 'Bring Your Own Device / Corporate-Owned, Business Only / Corporate-Owned, Personally Enabled', cue: 'These models differ by ownership and whether personal use is permitted.' },
            { term: 'NAC / ZTNA / PEP', meaning: 'Network Access Control / Zero Trust Network Access / Policy Enforcement Point', cue: 'NAC evaluates admission; ZTNA brokers least-privilege access; PEP enforces the decision.' },
            { term: 'GRC / RMF / CSF', meaning: 'Governance, Risk and Compliance / Risk Management Framework / Cybersecurity Framework', cue: 'GRC coordinates oversight; RMF structures risk decisions; CSF organizes cybersecurity outcomes.' },
            { term: 'SLE / EF / ARO / ALE', meaning: 'Single Loss Expectancy / Exposure Factor / Annual Rate of Occurrence / Annualized Loss Expectancy', cue: 'Asset value × EF = SLE; SLE × ARO = ALE.' },
            { term: 'PII / PHI / PCI', meaning: 'Personally Identifiable Information / Protected Health Information / Payment Card Industry data', cue: 'Classify data by sensitivity and apply the required handling, access, retention, and reporting controls.' },
            { term: 'GDPR / CCPA', meaning: 'General Data Protection Regulation / California Consumer Privacy Act', cue: 'Privacy regimes that influence collection, use, disclosure, access, deletion, and breach obligations.' },
            { term: 'HIPAA / SOX / GLBA', meaning: 'Health Insurance Portability and Accountability Act / Sarbanes-Oxley Act / Gramm-Leach-Bliley Act', cue: 'Common compliance contexts for healthcare, public-company controls, and financial-information protection.' },
            { term: 'PCI DSS', meaning: 'Payment Card Industry Data Security Standard', cue: 'Security requirements for environments that store, process, or transmit payment-card data.' },
            { term: 'NIST / ISO / CIS', meaning: 'National Institute of Standards and Technology / International Organization for Standardization / Center for Internet Security', cue: 'Frameworks and guidance sources; identify whether the scenario asks for a framework, standard, or control benchmark.' },
            { term: 'FIPS / CMMC', meaning: 'Federal Information Processing Standards / Cybersecurity Maturity Model Certification', cue: 'FIPS defines U.S. government information-processing requirements; CMMC addresses defense-supplier maturity.' },
            { term: 'NVD / CVE / CVSS', meaning: 'National Vulnerability Database / Common Vulnerabilities and Exposures / Common Vulnerability Scoring System', cue: 'NVD provides vulnerability information; CVE names the issue; CVSS communicates severity.' },
            { term: 'EOL / EOS / ELS', meaning: 'End of Life / End of Service / Extended Lifecycle Support', cue: 'Unsupported or nearly unsupported systems increase risk; replace, isolate, or formally mitigate them.' },
            { term: 'MOU / MOA / BPA / SOW', meaning: 'Memorandum of Understanding / Memorandum of Agreement / Business Partnership Agreement / Statement of Work', cue: 'Distinguish cooperation intent, agreed responsibilities, partnership terms, and specific deliverables.' },
            { term: 'DDoS / CDN / Anycast', meaning: 'Distributed Denial-of-Service / Content Delivery Network / distributed network addressing', cue: 'CDNs and Anycast can distribute traffic and help absorb or route around volumetric attacks.' },
            { term: 'NTP / UTC / SIEM', meaning: 'Network Time Protocol / Coordinated Universal Time / Security Information and Event Management', cue: 'Synchronized timestamps make cross-system log correlation and incident timelines reliable.' },
            { term: 'MAC / HMAC / MAC address', meaning: 'Mandatory Access Control / Hash-Based Message Authentication Code / Media Access Control address', cue: 'Context matters: MAC can mean a security model, a cryptographic construction, or a hardware address.' },
            { term: 'PAM / JIT / JEA', meaning: 'Privileged Access Management / Just-In-Time access / Just Enough Administration', cue: 'Reduce standing privilege by granting only the required privilege for the required time and task.' },
            { term: 'UEBA / BAS / NDR', meaning: 'User and Entity Behavior Analytics / Breach and Attack Simulation / Network Detection and Response', cue: 'Behavior analytics finds anomalies; BAS validates controls; NDR analyzes network activity.' },
            { term: 'MSSP / MSP / CSP', meaning: 'Managed Security Service Provider / Managed Service Provider / Cloud Service Provider', cue: 'Third parties can introduce supply-chain risk; define responsibilities, monitoring, and incident notification.' },
            { term: 'FIM / HIPS / HIDS', meaning: 'File Integrity Monitoring / Host-Based Intrusion Prevention System / Host-Based Intrusion Detection System', cue: 'FIM detects unauthorized changes; HIDS alerts; HIPS can block host activity.' },
            { term: 'DLP / DRM / IRM', meaning: 'Data Loss Prevention / Digital Rights Management / Information Rights Management', cue: 'DLP detects and controls movement; DRM and IRM enforce use restrictions around protected content.' },
            { term: 'VLAN / VXLAN / SDN', meaning: 'Virtual Local Area Network / Virtual Extensible LAN / Software-Defined Networking', cue: 'Virtualize segmentation or network control, but do not assume a VLAN alone is a complete security boundary.' },
            { term: 'ACL / NAT / PAT', meaning: 'Access Control List / Network Address Translation / Port Address Translation', cue: 'ACL filters traffic; NAT changes addresses; PAT multiplexes many private hosts through ports.' },
            { term: 'RFI / RFP / RFQ', meaning: 'Request for Information / Request for Proposal / Request for Quotation', cue: 'RFI gathers information; RFP requests solution proposals; RFQ requests pricing for defined requirements.' },
            { term: 'MDR / MSSP / SOC', meaning: 'Managed Detection and Response / Managed Security Service Provider / Security Operations Center', cue: 'MDR is a service; MSSP is the provider; SOC is the monitoring and response function.' },
            { term: 'PKI / CA / CRL / OCSP', meaning: 'Public Key Infrastructure / Certificate Authority / Certificate Revocation List / Online Certificate Status Protocol', cue: 'PKI manages trust; a CA issues certificates; CRL and OCSP check whether a certificate has been revoked.' },
            { term: 'IAM / RBAC / ABAC / DAC', meaning: 'Identity and Access Management / Role-Based Access Control / Attribute-Based Access Control / Discretionary Access Control', cue: 'IAM is the broad discipline; RBAC uses roles; ABAC evaluates attributes; DAC lets the resource owner control access.' },
            { term: 'CISO / GPO / IR', meaning: 'Chief Information Security Officer / Group Policy Object / Incident Response', cue: 'CISO leads security strategy; GPO centrally applies configuration; IR handles preparation, detection, response, and recovery.' },
            { term: 'OS / OSINT / ATT&CK', meaning: 'Operating System / Open-Source Intelligence / Adversarial Tactics, Techniques, and Common Knowledge', cue: 'OS manages system resources; OSINT uses public information; ATT&CK maps adversary tactics and techniques.' },
            { term: 'SASE / CASB / SD-WAN', meaning: 'Secure Access Service Edge / Cloud Access Security Broker / Software-Defined Wide Area Network', cue: 'SASE combines network and security services; CASB governs cloud use; SD-WAN centrally manages software-defined connectivity.' },
            { term: 'FDE / SED / TDE', meaning: 'Full-Disk Encryption / Self-Encrypting Drive / Transparent Data Encryption', cue: 'FDE protects an entire disk; SED performs encryption in drive hardware; TDE protects database files at rest.' },
            { term: 'RDP / URL / USB', meaning: 'Remote Desktop Protocol / Uniform Resource Locator / Universal Serial Bus', cue: 'RDP enables remote graphical administration; URL identifies a resource; USB is a common removable-media attack surface.' },
            { term: 'GPO / OU / AD', meaning: 'Group Policy Object / Organizational Unit / Active Directory', cue: 'GPO applies centralized Windows settings; OU groups directory objects; AD provides the directory service.' },
            { term: 'VLAN / SVI / ACL', meaning: 'Virtual Local Area Network / Switched Virtual Interface / Access Control List', cue: 'VLANs segment Layer 2; an SVI provides Layer 3 gateway access; ACLs filter permitted traffic.' },
            { term: 'SMS / MMS / IM', meaning: 'Short Message Service / Multimedia Messaging Service / Instant Messaging', cue: 'Treat message-based delivery channels as possible smishing, malicious-link, attachment, and impersonation vectors.' },
            { term: 'URL filtering / DNS filtering / SWG', meaning: 'web-address filtering / name-resolution filtering / Secure Web Gateway', cue: 'Layered web controls can block known malicious destinations and enforce acceptable-use policy.' }
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
