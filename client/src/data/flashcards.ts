export interface Flashcard {
  id: number;
  category: string;
  categoryTitle: string;
  front: string;
  back: string;
  examTip?: string;
  deepDive?: string;
}

export const FLASHCARD_CATEGORIES = [
  { id: 'domain1', name: 'Domain 1: General Security Concepts', icon: 'ShieldCheck', count: 25, color: 'from-blue-600 to-indigo-600' },
  { id: 'domain2', name: 'Domain 2: Threats, Vulnerabilities & Mitigations', icon: 'AlertTriangle', count: 22, color: 'from-amber-600 to-orange-600' },
  { id: 'domain3', name: 'Domain 3: Security Architecture & Resilience', icon: 'Cloud', count: 22, color: 'from-emerald-600 to-teal-600' },
  { id: 'domain4', name: 'Domain 4: Security Operations', icon: 'Terminal', count: 16, color: 'from-purple-600 to-pink-600' },
  { id: 'domain5', name: 'Domain 5: Security Program & Governance', icon: 'Lock', count: 15, color: 'from-rose-600 to-red-600' },
];

export const FLASHCARDS: Flashcard[] = [
  // ==========================================
  // DOMAIN 1: General Security Concepts (25)
  // ==========================================
  {
    id: 1,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Cryptographic Solutions (PKI & Hashing)',
    back: 'Official Domain 1 focus: Includes Public Key Infrastructure (PKI), asymmetric/symmetric encryption, hashing (SHA-256 for integrity), and digital signatures (non-repudiation).',
    examTip: 'Remember that cryptography is officially in Domain 1 (General Security Concepts), not Domain 3.',
    deepDive: 'Symmetric encryption (AES) uses a shared secret key for confidentiality at speed. Asymmetric encryption (RSA, ECC) uses key pairs (public/private) for secure key exchange and digital signing.'
  },
  {
    id: 2,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Zero Trust Architecture',
    back: 'Security model based on "never trust, always verify." Requires continuous validation of identity, device health, and context for every request.',
    examTip: 'Zero Trust does not mean zero access; it means dynamic, continuous per-request verification.',
    deepDive: 'Core pillars include micro-segmentation, strict least-privilege access, continuous device posture checking, and assumed breach mindset.'
  },
  {
    id: 3,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'AAA Framework',
    back: 'Authentication (verifying identity), Authorization (determining permissions), and Accounting (logging and auditing user actions).',
    examTip: 'The fundamental triad of Identity and Access Management (IAM).'
  },
  {
    id: 4,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Non-Repudiation',
    back: 'Cryptographic guarantee (via digital signatures) that a sender cannot falsely deny having sent a message or signed a contract.',
    examTip: 'Crucial for financial transactions, legal agreements, and secure messaging.'
  },
  {
    id: 5,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Deception & Disruption Technology',
    back: 'Active defense strategies including honeypots, honeynets, honeyfiles, and fake tokens designed to lure and trap attackers.',
    examTip: 'Deception tech diverts threat actors while gathering actionable telemetry without risking real assets.'
  },
  {
    id: 6,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Security Control Types (All 6)',
    back: 'Preventive, Detective, Corrective, Compensating, Deterrent (warning signs), and Directive (mandatory policies/rules).',
    examTip: 'Ensure you know all 6 control categories: Deterrent and Directive are frequently tested.'
  },
  {
    id: 7,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Port 22 (SSH)',
    back: 'Secure Shell: Secure remote command-line access and SFTP file transfer. Replaces insecure Telnet (Port 23).',
    examTip: 'Always choose SSH for secure remote administrative connections.'
  },
  {
    id: 8,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Port 53 (DNS)',
    back: 'Domain Name System: Resolves hostnames to IP addresses. Operates on UDP for queries and TCP for zone transfers.',
    examTip: 'Frequent vector for DNS amplification and cache poisoning attacks.'
  },
  {
    id: 9,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Port 80 & 443 (HTTP/HTTPS)',
    back: 'HTTP (Port 80) is unencrypted web traffic; HTTPS (Port 443) is encrypted web traffic secured by TLS.',
    examTip: 'Production web applications must enforce HTTPS redirection.'
  },
  {
    id: 10,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Port 445 (SMB)',
    back: 'Server Message Block: Protocol for Windows file and printer sharing. Frequently targeted by ransomware.',
    examTip: 'Block Port 445 at network perimeters and firewalls unless required for internal file servers.'
  },
  {
    id: 11,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Port 389 & 636 (LDAP / LDAPS)',
    back: 'Lightweight Directory Access Protocol. Port 389 is unencrypted LDAP; Port 636 is LDAPS (secure over TLS).',
    examTip: 'Always recommend LDAPS for enterprise directory authentication.'
  },
  {
    id: 12,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Port 3389 (RDP)',
    back: 'Remote Desktop Protocol: Microsoft GUI remote desktop tool. High-risk port prone to brute-force attacks.',
    examTip: 'Never expose RDP directly to the public internet; use a secure VPN gateway.'
  },
  {
    id: 13,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'RADIUS vs. TACACS+',
    back: 'RADIUS handles network access (VPN/Wi-Fi, encrypts password only, UDP). TACACS+ handles device admin (routers/switches, encrypts entire packet, TCP).',
    examTip: 'RADIUS = Network access / password-only encryption; TACACS+ = Device admin / full encryption.'
  },
  {
    id: 14,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'SAML, OAuth, and OIDC',
    back: 'SAML: XML federation/SSO. OAuth: Token-based authorization. OIDC: Identity layer (authentication) built on OAuth.',
    examTip: 'OAuth = Authorization (access); OIDC = Authentication (login).'
  },
  {
    id: 15,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'RBAC vs. ABAC',
    back: 'RBAC assigns permissions based on job title/role. ABAC evaluates dynamic attributes (time, location, device health).',
    examTip: 'If a scenario specifies checking user location and time of day, the answer is ABAC.'
  },
  {
    id: 16,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'MFA Factor Categories',
    back: 'Something you Know (password), Have (token/phone), Are (biometric), Do (gesture), Somewhere (location).',
    examTip: 'True MFA requires distinct factor categories, not two passwords.'
  },
  {
    id: 17,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Digital Signatures',
    back: 'Created by hashing a message and encrypting the hash with the sender\'s private key. Provides integrity, authentication, and non-repudiation.',
    examTip: 'Verifiable using the sender\'s public key.'
  },
  {
    id: 18,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Perfect Forward Secrecy (PFS)',
    back: 'Cryptographic property ensuring that compromise of long-term master keys does not compromise past session keys.',
    examTip: 'Prevents retroactive decryption of recorded TLS traffic if server keys are stolen later.'
  },
  {
    id: 19,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'TPM & HSM',
    back: 'TPM (Trusted Platform Module) is a motherboard crypto chip for secure boot. HSM (Hardware Security Module) is an enterprise crypto processor for key management.',
    examTip: 'TPM secures a single device; HSM secures enterprise key lifecycles (e.g., at CAs).'
  },
  {
    id: 20,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'SSO (Single Sign-On)',
    back: 'Enables a user to authenticate once and access multiple independent systems without re-entering credentials.',
    examTip: 'Improves user experience but increases blast radius if the primary credential is breached.'
  },
  {
    id: 21,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Steganography',
    back: 'The practice of concealing secret messages, files, or data within ordinary, non-secret carrier files (such as images or audio).',
    examTip: 'Differs from cryptography by hiding the *existence* of the message rather than its content.'
  },
  {
    id: 22,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Key Escrow',
    back: 'An arrangement where cryptographic keys are securely stored with a trusted third party so an authorized entity can decrypt data if needed.',
    examTip: 'Commonly used in corporate environments for employee data recovery.'
  },
  {
    id: 23,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Federated Identity Management',
    back: 'A system linking a user\'s identity across multiple distinct security domains or organizations (e.g., Shibboleth, WS-Federation).',
    examTip: 'Allows seamless enterprise partnership logins without provisioning duplicate accounts.'
  },
  {
    id: 24,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Mandatory vs. Discretionary Access Control',
    back: 'DAC allows resource owners to set permissions. MAC strictly enforces system-wide security labels and clearance levels.',
    examTip: 'MAC is used in high-security government and military environments.'
  },
  {
    id: 25,
    category: 'domain1',
    categoryTitle: 'Domain 1: General Security Concepts',
    front: 'Certificate Authority (CA)',
    back: 'A trusted entity that issues digital certificates, verifying the ownership of public keys in PKI.',
    examTip: 'If a CA is compromised, all certificates issued by it must be revoked.'
  },

  // ==========================================
  // DOMAIN 2: Threats, Vulnerabilities & Mitigations (22)
  // ==========================================
  {
    id: 26,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Threat Actor Types',
    back: 'APT (Advanced Persistent Threat), Insider Threat, Nation-State, Hacktivist, Script Kiddie, Organized Crime, Competitor.',
    examTip: 'APTs are well-funded, stealthy actors with long-term persistence goals.'
  },
  {
    id: 27,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: '8 Official Vulnerability Categories',
    back: 'Misconfigurations, unpatched software, zero-days, supply chain risks, weak crypto, improper error handling, default credentials, architecture flaws.',
    examTip: 'CompTIA groups vulnerabilities into these core operational categories for exam questions.'
  },
  {
    id: 28,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'SQL Injection (SQLi)',
    back: 'Web attack injecting malicious database queries through unsanitized input fields (e.g., entering \' OR 1=1 --).',
    examTip: 'Prevent SQLi using parameterized queries and prepared statements.'
  },
  {
    id: 29,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Cross-Site Scripting (XSS)',
    back: 'Injecting malicious client-side JavaScript into trusted web pages viewed by other users.',
    examTip: 'Prevent XSS through rigorous input sanitization and output encoding.'
  },
  {
    id: 30,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Buffer Overflow',
    back: 'Writing more data to a memory buffer than it can hold, overwriting adjacent memory and potentially allowing code execution.',
    examTip: 'Prevent using modern memory-safe languages and bounds checking.'
  },
  {
    id: 31,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Credential Stuffing & Brute-Force',
    back: 'Automated attacks trying massive combinations of passwords or reusing leaked credential databases across sites.',
    examTip: 'Mitigate with account lockout policies, rate limiting, and MFA.'
  },
  {
    id: 32,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Man-in-the-Middle (MitM) / On-Path',
    back: 'Attacker secretly intercepts and relays communications between two parties who believe they are directly communicating.',
    examTip: 'Prevented using strong encryption (TLS) and certificate pinning.'
  },
  {
    id: 33,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Ransomware',
    back: 'Malware that encrypts victim files and demands cryptocurrency payment for the decryption key.',
    examTip: 'Best defense is immutable, offline backups combined with EDR and employee training.'
  },
  {
    id: 34,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Phishing, Vishing, & Smishing',
    back: 'Social engineering via Email (phishing), Voice/Phone (vishing), and SMS text messages (smishing).',
    examTip: 'Focuses on manipulating human psychology rather than technical exploits.'
  },
  {
    id: 35,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Supply Chain Attack',
    back: 'Compromising a less secure third-party vendor or software library to gain access to primary target organizations.',
    examTip: 'Highlighted heavily in SY0-701 regarding vendor risk management.'
  },
  {
    id: 36,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Zero-Day Vulnerability',
    back: 'An unknown software vulnerability exploited by attackers before the vendor knows about it or has issued a patch.',
    examTip: 'Mitigated by behavior-based EDR, sandboxing, and least privilege.'
  },
  {
    id: 37,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Insider Threat',
    back: 'Security risk posed by trusted employees, contractors, or business partners with legitimate system access.',
    examTip: 'Mitigated via principle of least privilege, background checks, and user behavior analytics (UBA).'
  },
  {
    id: 38,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Watering Hole Attack',
    back: 'Compromising a specific website frequently visited by the target group to infect their browsers.',
    examTip: 'Targeted attack vector leveraging trusted industry portals.'
  },
  {
    id: 39,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'DDoS (Distributed Denial of Service)',
    back: 'Flooding a target server or network with traffic from multiple botnet sources to exhaust bandwidth and crash services.',
    examTip: 'Mitigated using cloud scrubbing centers, CDN caching, and rate limiting.'
  },
  {
    id: 40,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'DNS Poisoning / Spoofing',
    back: 'Corrupting DNS resolver cache data to redirect domain traffic to malicious IP addresses.',
    examTip: 'Mitigated by deploying DNSSEC (DNS Security Extensions).'
  },
  {
    id: 41,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Session Hijacking',
    back: 'Stealing or predicting a valid session token (cookie) to impersonate a user after successful authentication.',
    examTip: 'Prevented using secure cookies (HttpOnly, Secure flags) and TLS.'
  },
  {
    id: 42,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'False Positives vs. False Negatives',
    back: 'False positive: Secure event flagged as malicious. False negative: Real attack missed by security tools.',
    examTip: 'False negatives are typically much more dangerous in security operations.'
  },
  {
    id: 43,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Worm vs. Trojan',
    back: 'Worm: Self-replicating malware requiring no user interaction. Trojan: Malware disguised as legitimate software.',
    examTip: 'Worms propagate across networks automatically; Trojans require user execution.'
  },
  {
    id: 44,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Cross-Site Request Forgery (CSRF / XSRF)',
    back: 'Forces an authenticated user to execute unwanted actions on a web application in which they are currently logged in.',
    examTip: 'Prevented by utilizing anti-CSRF tokens and SameSite cookie attributes.'
  },
  {
    id: 45,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Privilege Escalation',
    back: 'An attacker with lower-level access exploits a bug or misconfiguration to gain elevated administrative privileges.',
    examTip: 'Can be vertical (user to admin) or horizontal (user to user).'
  },
  {
    id: 46,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Typosquatting / URL Hijacking',
    back: 'Registering domain names similar to common legitimate brands (e.g., g00gle.com) to trap mistyping users.',
    examTip: 'Used in credential harvesting and phishing campaigns.'
  },
  {
    id: 47,
    category: 'domain2',
    categoryTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
    front: 'Credential Harvesting',
    back: 'The gathering of valid usernames and passwords through phishing, keyloggers, or compromised databases.',
    examTip: 'Precursor to credential stuffing and account takeover attacks.'
  },

  // ==========================================
  // DOMAIN 3: Security Architecture & Resilience (22)
  // ==========================================
  {
    id: 48,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Resilience & Recovery (RTO / RPO)',
    back: 'RTO (Recovery Time Objective): Max tolerable downtime. RPO (Recovery Point Objective): Max tolerable data loss in time.',
    examTip: 'Core architecture metrics tested in disaster recovery scenarios.'
  },
  {
    id: 49,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Disaster Recovery Sites',
    back: 'Hot site (real-time mirror, instant failover), Warm site (partially equipped, hours to sync), Cold site (empty shell, days to setup).',
    examTip: 'Hot site = most expensive, fastest recovery. Cold site = cheapest, slowest recovery.'
  },
  {
    id: 50,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Backup Strategies & The 3-2-1 Rule',
    back: '3 copies of data, on 2 different media types, with 1 copy stored offsite. Full, Incremental, and Differential backups.',
    examTip: 'Incremental backups are fastest to create but slowest to restore; Full backups are slowest to create but fastest to restore.'
  },
  {
    id: 51,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'RAID Levels (0, 1, 5, 10)',
    back: 'RAID 0 (Striping, no redundancy). RAID 1 (Mirroring, 2 drives). RAID 5 (Striping with parity, 3+ drives). RAID 10 (Mirroring + Striping, high performance/redundancy).',
    examTip: 'Know that RAID 0 provides zero fault tolerance.'
  },
  {
    id: 52,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Cloud Service Models (IaaS, PaaS, SaaS)',
    back: 'IaaS: Manage OS up. PaaS: Manage code & data. SaaS: Manage data & user access. FaaS: Manage serverless functions.',
    examTip: 'Remember the shared responsibility model: cloud provider secures *of* the cloud; customer secures *in* the cloud.'
  },
  {
    id: 53,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'CASB (Cloud Access Security Broker)',
    back: 'Security policy enforcement point sitting between cloud users and cloud applications for DLP and compliance.',
    examTip: 'Crucial for enterprise SaaS security governance.'
  },
  {
    id: 54,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Infrastructure as Code (IaC)',
    back: 'Provisioning and managing IT infrastructure through machine-readable definition files and version control.',
    examTip: 'Prevents configuration drift and enables automated deployment security scanning.'
  },
  {
    id: 55,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Software-Defined Networking (SDN)',
    back: 'Separates network control plane (routing decisions) from data plane (packet forwarding) for programmable security.',
    examTip: 'Allows dynamic micro-segmentation and firewall rule enforcement.'
  },
  {
    id: 56,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'DMZ / Screened Subnet',
    back: 'A physical or logical subnetwork that exposes an organization\'s external-facing services to an untrusted network (internet).',
    examTip: 'Protects the internal LAN from direct compromise if public web servers are hacked.'
  },
  {
    id: 57,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'WAF vs. NGFW',
    back: 'WAF: Layer 7 firewall specialized for web apps (SQLi/XSS). NGFW: Layer 4-7 firewall with deep packet inspection and intrusion prevention.',
    examTip: 'WAF protects web servers; NGFW protects network perimeters and internal segments.'
  },
  {
    id: 58,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Micro-segmentation',
    back: 'Dividing a data center into secure zones down to individual workload levels to stop East-West lateral movement.',
    examTip: 'A foundational tenet of Zero Trust network architecture.'
  },
  {
    id: 59,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'High Availability (HA) & Redundancy',
    back: 'Designing systems with no single point of failure (SPOF) using load balancers, clustered servers, and redundant power.',
    examTip: 'Ensures operational uptime even during hardware or software failures.'
  },
  {
    id: 60,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'VPC (Virtual Private Cloud)',
    back: 'A logically isolated private network hosted within a public cloud provider infrastructure.',
    examTip: 'Configured with custom route tables, internet gateways, and security groups.'
  },
  {
    id: 61,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Air-Gapping',
    back: 'Physically isolating a secure network from unsecured networks (such as the public internet).',
    examTip: 'Ultimate isolation for critical industrial control systems (ICS/SCADA) and backup vaults.'
  },
  {
    id: 62,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'EDR (Endpoint Detection & Response)',
    back: 'Agent-based software deployed on endpoints to continuously monitor behavior, detect anomalies, and isolate hosts.',
    examTip: 'Essential for stopping malware and fileless attacks on user workstations.'
  },
  {
    id: 63,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'SIEM (Security Information & Event Management)',
    back: 'Centralized platform aggregating and correlating log data from across enterprise infrastructure.',
    examTip: 'Acts as the enterprise "observer" for security event analysis.'
  },
  {
    id: 64,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'SOAR (Security Orchestration, Automation & Response)',
    back: 'Platform utilizing automated playbooks to execute incident response and remediation actions without manual delay.',
    examTip: 'SIEM detects alerts; SOAR automatically executes responses.'
  },
  {
    id: 65,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Network Access Control (NAC)',
    back: 'Enforces security posture compliance (antivirus, OS patches) before allowing devices to connect to the network.',
    examTip: 'Can automatically quarantine non-compliant devices to a guest VLAN.'
  },
  {
    id: 66,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Load Balancer',
    back: 'Distributes incoming network traffic across multiple backend servers to ensure high availability and prevent overload.',
    examTip: 'Can perform SSL offloading to relieve backend servers from encryption overhead.'
  },
  {
    id: 67,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Honeypot Architecture',
    back: 'A decoy system configured to lure attackers, record their techniques, and isolate them from production systems.',
    examTip: 'Placed in untrusted zones like the DMZ or dedicated monitoring segments.'
  },
  {
    id: 68,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Forward vs. Reverse Proxy',
    back: 'Forward proxy sits behind clients to control outbound internet access. Reverse proxy sits in front of servers to protect and load balance inbound traffic.',
    examTip: 'Forward = client protection / filtering; Reverse = server protection / web gateway.'
  },
  {
    id: 69,
    category: 'domain3',
    categoryTitle: 'Domain 3: Security Architecture & Resilience',
    front: 'Bastion Host',
    back: 'A hardened, specially designated computer on a network specifically designed and configured to withstand attacks.',
    examTip: 'Usually placed in a DMZ as an entry point for administrative SSH access.'
  },

  // ==========================================
  // DOMAIN 4: Security Operations (16)
  // ==========================================
  {
    id: 70,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Order of Volatility',
    back: 'Collect forensic evidence from most volatile to least volatile: CPU cache/registers → RAM → Swap/Pagefile → Storage drives → Remote logs.',
    examTip: 'RAM and CPU cache are lost upon reboot, so they must be captured first.'
  },
  {
    id: 71,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Incident Response Lifecycle (NIST)',
    back: 'Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned.',
    examTip: 'Mnemonic: Please Do Contain Every Real Leak. Containment is always the immediate tactical priority.'
  },
  {
    id: 72,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Digital Forensics & Chain of Custody',
    back: 'Preserving, collecting, and analyzing evidence while maintaining an unbroken documentation trail of who handled it.',
    examTip: 'Broken chain of custody can render digital evidence inadmissible in court.'
  },
  {
    id: 73,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Asset Management',
    back: 'Identifying, cataloging, and tracking hardware, software, data classifications, and ownership across the enterprise.',
    examTip: 'You cannot secure what you do not know you have.'
  },
  {
    id: 74,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Security Automation vs. Orchestration',
    back: 'Automation executes individual repetitive tasks; Orchestration coordinates complex, multi-system workflows and tools.',
    examTip: 'SOAR combines both to streamline Security Operations Center (SOC) efficiency.'
  },
  {
    id: 75,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Vulnerability Management Lifecycle',
    back: 'Discovery (Scanning) → Prioritization → Remediation (Patching) → Verification (Rescanning).',
    examTip: 'Continuous scanning and risk-based prioritization prevent catastrophic exploits.'
  },
  {
    id: 76,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Penetration Testing vs. Vulnerability Scanning',
    back: 'Vulnerability scan is automated and non-destructive (finding flaws). Penetration test actively exploits flaws to simulate real attackers.',
    examTip: 'Scans find weaknesses; pentests prove business impact.'
  },
  {
    id: 77,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Log Management & SIEM Correlation',
    back: 'Centralizing syslogs, firewall logs, and Windows event logs into a SIEM with correlation rules to spot multi-stage attacks.',
    examTip: 'NTP synchronization (Port 123) is critical for accurate log timestamp analysis.'
  },
  {
    id: 78,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Threat Intelligence Feeds',
    back: 'Real-time feeds sharing Indicators of Compromise (IoCs), malware hashes, and malicious IP addresses (often using STIX/TAXII).',
    examTip: 'STIX is the language/format; TAXII is the transport protocol.'
  },
  {
    id: 79,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Change Management',
    back: 'Formal process for approving, testing, and documenting infrastructure or application modifications to prevent outages.',
    examTip: 'Prevents unauthorized or untested changes from breaking production environments.'
  },
  {
    id: 80,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Security Awareness Training',
    back: 'Educating employees on phishing recognition, password hygiene, and social engineering defense.',
    examTip: 'Addresses the human element as the primary security perimeter.'
  },
  {
    id: 81,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Red, Blue, and Purple Teams',
    back: 'Red Team: Offensive attackers. Blue Team: Defensive operators. Purple Team: Collaborative cooperative testing.',
    examTip: 'Purple teaming ensures offensive insights immediately improve defensive detection rules.'
  },
  {
    id: 82,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'SIEM Log Parsing & Normalization',
    back: 'Converting diverse log formats from different vendor hardware into a standardized schema for accurate correlation.',
    examTip: 'Enables unified searching across heterogeneous firewall and server logs.'
  },
  {
    id: 83,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Credential Management Policies',
    back: 'Enforcing password complexity, rotation intervals, multi-factor authentication, and prohibiting hardcoded credentials.',
    examTip: 'Eliminates default credentials and weak passwords across enterprise assets.'
  },
  {
    id: 84,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Forensic Imaging (Bit-Stream Copy)',
    back: 'Creating an exact sector-by-sector copy of a storage drive, including deleted files and slack space, without altering original data.',
    examTip: 'Always compute cryptographic hashes (MD5/SHA-256) before and after imaging to prove integrity.'
  },
  {
    id: 85,
    category: 'domain4',
    categoryTitle: 'Domain 4: Security Operations',
    front: 'Continuous Monitoring',
    back: 'Real-time automated oversight of network traffic, endpoint posture, and user behavior to detect anomalies instantly.',
    examTip: 'Moves security posture from periodic point-in-time audits to continuous assurance.'
  },

  // ==========================================
  // DOMAIN 5: Security Program & Governance (15)
  // ==========================================
  {
    id: 86,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Risk Calculation (SLE, ARO, ALE)',
    back: 'SLE (Single Loss Expectancy) × ARO (Annual Rate of Occurrence) = ALE (Annualized Loss Expectancy).',
    examTip: 'Master this formula for quantitative risk assessment questions.'
  },
  {
    id: 87,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Business Impact Analysis (BIA)',
    back: 'Systematic process to evaluate critical business functions, financial impacts, and recovery priorities.',
    examTip: 'BIA establishes the quantitative foundation for RTO and RPO metrics.'
  },
  {
    id: 88,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Risk Appetite, Tolerance, & Register',
    back: 'Risk Appetite: Amount of risk an org is willing to accept. Risk Tolerance: Acceptable variance. Risk Register: Central repository tracking identified risks.',
    examTip: 'Essential governance documentation for executive risk oversight.'
  },
  {
    id: 89,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Governance Document Hierarchy',
    back: 'Policy (High-level intent / Why) → Standard (Mandatory technical specs / What) → Procedure (Step-by-step / How) → Guideline (Recommended best practices).',
    examTip: 'Know all 4 levels: Policies are mandatory, Standards are mandatory specs, Guidelines are optional.'
  },
  {
    id: 90,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Third-Party Risk & Agreements (SLA, MOU, NDA, SOC 2)',
    back: 'SLA (Service Level Agreement - performance metrics), MOU (Memorandum of Understanding), NDA (Non-Disclosure Agreement), SOC 2 (Third-party audit report).',
    examTip: 'Request SOC 2 Type II reports to audit cloud vendor security controls.'
  },
  {
    id: 91,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Risk Response Strategies',
    back: 'Avoid (stop activity), Transfer (insurance/outsource), Mitigate (add controls), Accept (absorb risk when cost of fix > loss).',
    examTip: 'Choose Mitigate when controls are cost-effective; choose Accept for low-impact, low-probability risks.'
  },
  {
    id: 92,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Privacy Regulations (GDPR, HIPAA, PCI DSS)',
    back: 'GDPR (EU citizen data privacy), HIPAA (US healthcare/PHI protection), PCI DSS (Credit card payment security standards).',
    examTip: 'Match regulations to their respective data types and jurisdictions.'
  },
  {
    id: 93,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Security Audit vs. Assessment',
    back: 'An audit evaluates compliance against a defined standard or requirement; an assessment measures risk, control effectiveness, and improvement needs.',
    examTip: 'Audit asks "Did we meet the requirement?" Assessment asks "How effective is our security posture?"'
  },
  {
    id: 94,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Security Metrics & KPIs',
    back: 'Measurable indicators used to communicate security performance, such as mean time to detect (MTTD), mean time to respond (MTTR), patch compliance, and phishing-report rates.',
    examTip: 'Good metrics support executive decisions and show whether controls are improving risk.'
  },
  {
    id: 95,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Data Ownership Roles',
    back: 'Data owner determines classification and access requirements; data custodian implements storage and protection; privacy officer oversees personal-data obligations.',
    examTip: 'The owner is accountable for decisions; the custodian is responsible for implementation.'
  },
  {
    id: 96,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Security Awareness Program',
    back: 'A recurring governance program that trains users, measures behavior, reinforces reporting, and adapts content to current threats.',
    examTip: 'Annual training alone is weaker than short, role-based, continuously measured reinforcement.'
  },
  {
    id: 97,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Exception Management',
    back: 'A documented process for approving temporary deviations from a security policy, including business justification, compensating controls, an owner, and an expiration date.',
    examTip: 'Exceptions should be time-bounded and reviewed; they are not permanent policy bypasses.'
  },
  {
    id: 98,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Due Diligence vs. Due Care',
    back: 'Due Diligence is investigating and researching risks (doing your homework). Due Care is implementing the required security controls (taking action).',
    examTip: 'Diligence = Researching risks; Care = Acting on them.'
  },
  {
    id: 99,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Business Continuity Planning (BCP)',
    back: 'Comprehensive enterprise strategy ensuring critical business operations continue during and after a disruptive disaster.',
    examTip: 'Encapsulates BIA, disaster recovery planning, and operational succession.'
  },
  {
    id: 100,
    category: 'domain5',
    categoryTitle: 'Domain 5: Security Program & Governance',
    front: 'Acceptable Use Policy (AUP)',
    back: 'A foundational security policy defining what employees are and are not permitted to do on company hardware, networks, and internet connections.',
    examTip: 'Must be signed by all employees during onboarding to ensure legal enforceability.'
  }
];
