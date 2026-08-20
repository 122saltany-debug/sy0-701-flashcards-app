export interface Flashcard {
  id: number;
  category: string;
  categoryTitle: string;
  front: string;
  back: string;
  examTip?: string;
}

export const FLASHCARD_CATEGORIES = [
  { id: 'ports', name: 'Must-Know Ports', icon: 'Network', count: 15, color: 'from-blue-600 to-indigo-600' },
  { id: 'iam', name: 'Identity & Access Management', icon: 'ShieldCheck', count: 10, color: 'from-emerald-600 to-teal-600' },
  { id: 'cloud', name: 'Cloud & Architecture', icon: 'Cloud', count: 10, color: 'from-purple-600 to-pink-600' },
  { id: 'risk', name: 'Risk, Governance & Ops', icon: 'Lock', count: 15, color: 'from-amber-600 to-orange-600' },
];

export const FLASHCARDS: Flashcard[] = [
  // Section 1: Must-Know Ports (1-15)
  {
    id: 1,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 22',
    back: 'SSH (Secure Shell): Secure remote access & command shell. Replaces insecure Telnet (Port 23). Also used for SFTP file transfers.',
    examTip: 'Whenever a question asks for secure remote command-line access, SSH (22) is the correct answer.'
  },
  {
    id: 2,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 25',
    back: 'SMTP (Simple Mail Transfer Protocol): Used to route and send email between mail servers.',
    examTip: 'Pair with SMTPS (465/587) or STARTTLS for secure email transmission.'
  },
  {
    id: 3,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 53',
    back: 'DNS (Domain Name System): Resolves hostnames to IP addresses. Operates primarily on UDP (TCP for zone transfers).',
    examTip: 'Frequent target for amplification DDoS attacks and DNS poisoning / cache spoofing.'
  },
  {
    id: 4,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 80',
    back: 'HTTP (Hypertext Transfer Protocol): Unencrypted web traffic.',
    examTip: 'In secure deployment scenarios, traffic on Port 80 should always be redirected to Port 443 (HTTPS).'
  },
  {
    id: 5,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 443',
    back: 'HTTPS (HTTP Secure): Encrypted web traffic secured by TLS (Transport Layer Security).',
    examTip: 'The absolute standard port for secure web communication and API traffic.'
  },
  {
    id: 6,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 445',
    back: 'SMB (Server Message Block): Windows file and printer sharing protocol.',
    examTip: 'Extremely high risk; frequently blocked at firewalls and exploited by ransomware (e.g., WannaCry).'
  },
  {
    id: 7,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 389',
    back: 'LDAP (Lightweight Directory Access Protocol): Protocol for querying directory services.',
    examTip: 'Unencrypted by default. Always recommend LDAPS (Port 636) for secure directory lookups.'
  },
  {
    id: 8,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 636',
    back: 'LDAPS (LDAP Secure): Directory service queries encrypted over TLS/SSL.',
    examTip: 'Use LDAPS when hardening enterprise user authentication pathways.'
  },
  {
    id: 9,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 3389',
    back: 'RDP (Remote Desktop Protocol): Microsoft GUI-based remote access protocol.',
    examTip: 'Major target for brute-force attacks and credential stuffing. Never expose directly to the public internet.'
  },
  {
    id: 10,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 1433',
    back: 'MSSQL (Microsoft SQL Server): Default database engine communication port.',
    examTip: 'Must be isolated behind internal subnets or DMZ database barriers.'
  },
  {
    id: 11,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 3306',
    back: 'MySQL: Default database communication port for MySQL and MariaDB relational databases.',
    examTip: 'Never allow direct external internet access to database ports.'
  },
  {
    id: 12,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 161 / 162',
    back: 'SNMP (Simple Network Management Protocol): Monitors and manages network devices. Port 161 agent, 162 trap.',
    examTip: 'Always use SNMPv3 for authentication and encryption. v1 and v2c send community strings in cleartext.'
  },
  {
    id: 13,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 123',
    back: 'NTP (Network Time Protocol): Synchronizes system clocks across devices.',
    examTip: 'Accurate time synchronization is mandatory for accurate SIEM log correlation and forensic analysis.'
  },
  {
    id: 14,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 20 / 21',
    back: 'FTP (File Transfer Protocol): Port 21 for control commands, Port 20 for data transfer. Completely unencrypted.',
    examTip: 'Replace FTP with SFTP (Port 22 via SSH) or FTPS for secure file transfers.'
  },
  {
    id: 15,
    category: 'ports',
    categoryTitle: 'Must-Know Ports',
    front: 'Port 993 / 995',
    back: 'IMAPS (993) & POP3S (995): Secure email retrieval protocols protected by SSL/TLS.',
    examTip: 'Essential for ensuring inbound email retrieval is encrypted in transit.'
  },

  // Section 2: Identity & Access Management (16-25)
  {
    id: 16,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'AAA Framework',
    back: 'Authentication (prove who you are), Authorization (what you can access), Accounting (auditing logs of actions).',
    examTip: 'Fundamental security triad for controlling system entry and tracking activity.'
  },
  {
    id: 17,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'MFA Factors',
    back: 'Something you Know (password), Have (token), Are (biometric), Do (gesture), Somewhere (location).',
    examTip: 'True MFA requires at least TWO DIFFERENT factor categories (e.g., password + authenticator app).'
  },
  {
    id: 18,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'RBAC (Role-Based Access Control)',
    back: 'Access rights are assigned based on organizational job roles (e.g., Manager, Accountant, Admin).',
    examTip: 'Great for stable hierarchies, but susceptible to role creep if users change jobs frequently.'
  },
  {
    id: 19,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'ABAC (Attribute-Based Access Control)',
    back: 'Dynamic access control evaluated using multiple attributes: user department, device health, time of day, and location.',
    examTip: 'If an exam question mentions "time of day," "location," or "device posture," the answer is ABAC.'
  },
  {
    id: 20,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'SAML (Security Assertion Markup Language)',
    back: 'XML-based standard for exchanging authentication and authorization data across domains (Browser SSO).',
    examTip: 'Widely used in enterprise federated identity management and cloud SSO portals.'
  },
  {
    id: 21,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'OAuth',
    back: 'An open standard for Authorization (delegated access), allowing apps to access resources without exposing passwords.',
    examTip: 'OAuth grants access permissions; it does NOT verify identity by itself.'
  },
  {
    id: 22,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'OIDC (OpenID Connect)',
    back: 'An Authentication identity layer built on top of OAuth 2.0 protocols.',
    examTip: 'Use OAuth for authorization, OIDC when you need user authentication (login).'
  },
  {
    id: 23,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'RADIUS',
    back: 'Centralized AAA protocol for network access (VPN, 802.1X Wi-Fi). Encrypts only the password field; uses UDP.',
    examTip: 'RADIUS = Network access (VPN/Wi-Fi) + encrypts password only.'
  },
  {
    id: 24,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'TACACS+',
    back: 'Cisco-developed AAA protocol for device administration (routers, switches). Encrypts the entire packet payload; uses TCP.',
    examTip: 'TACACS+ = Device admin (Routers/Switches) + encrypts entire packet.'
  },
  {
    id: 25,
    category: 'iam',
    categoryTitle: 'Identity & Access Management',
    front: 'SSO (Single Sign-On)',
    back: 'Allows a user to log in once with a single set of credentials and gain access to multiple independent application systems.',
    examTip: 'Great for user convenience, but requires strong MFA because a compromised master credential grants wide access.'
  },

  // Section 3: Cloud & Architecture (26-35)
  {
    id: 26,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'IaaS (Infrastructure as a Service)',
    back: 'Cloud provider rents raw hardware/virtualization. Customer manages OS, runtime, middleware, applications, and data.',
    examTip: 'You manage OS and up. Maximum customer control, maximum maintenance responsibility.'
  },
  {
    id: 27,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'PaaS (Platform as a Service)',
    back: 'Cloud provider manages infrastructure and OS. Customer manages application code and data storage.',
    examTip: 'Ideal for developers who want to deploy code without worrying about server provisioning.'
  },
  {
    id: 28,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'SaaS (Software as a Service)',
    back: 'Fully hosted software delivered over the web (e.g., Microsoft 365, Gmail). Customer manages only user access and data.',
    examTip: 'Even in SaaS, the customer is 100% responsible for data classification and user access configuration.'
  },
  {
    id: 29,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'CASB (Cloud Access Security Broker)',
    back: 'Security policy enforcement software sitting between organization users and cloud service providers.',
    examTip: 'Enforces DLP, encryption, and compliance across SaaS and cloud applications.'
  },
  {
    id: 30,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'IaC (Infrastructure as Code)',
    back: 'Managing and provisioning computing infrastructure through machine-readable definition scripts in version control.',
    examTip: 'Eliminates configuration drift and ensures identical staging/production environments.'
  },
  {
    id: 31,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'SDN (Software-Defined Networking)',
    back: 'Separates the network Control Plane (decision making) from the Data Plane (packet forwarding).',
    examTip: 'Enables dynamic, programmable network provisioning and rapid security policy changes.'
  },
  {
    id: 32,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'VPC (Virtual Private Cloud)',
    back: 'A logically isolated virtual network dedicated to your cloud account within a public cloud provider.',
    examTip: 'Provides private subnetting, route tables, and custom gateway rules in multi-tenant clouds.'
  },
  {
    id: 33,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'WAF (Web Application Firewall)',
    back: 'Specialized Layer 7 firewall designed to protect web applications by inspecting HTTP/HTTPS traffic.',
    examTip: 'Essential defense against OWASP Top 10 vulnerabilities like SQL Injection and Cross-Site Scripting (XSS).'
  },
  {
    id: 34,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'NGFW (Next-Generation Firewall)',
    back: 'Advanced firewall offering deep packet inspection, application awareness, intrusion prevention, and TLS decryption.',
    examTip: 'Operates across Layers 4 through 7 to block sophisticated application-layer threats.'
  },
  {
    id: 35,
    category: 'cloud',
    categoryTitle: 'Cloud & Architecture',
    front: 'EDR (Endpoint Detection and Response)',
    back: 'Security software installed on endpoints (laptops/servers) to continuously monitor, detect, and remediate threats.',
    examTip: 'Provides behavioral analysis and automated containment far superior to legacy antivirus.'
  },

  // Section 4: Risk, Governance & Operations (36-50)
  {
    id: 36,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'ALE (Annualized Loss Expectancy)',
    back: 'The expected monetary loss from a risk over a one-year period. Formula: SLE × ARO.',
    examTip: 'SLE (Single Loss Expectancy) × ARO (Annual Rate of Occurrence) = ALE.'
  },
  {
    id: 37,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'RTO (Recovery Time Objective)',
    back: 'The maximum tolerable duration of time that a business process can be down after a disaster.',
    examTip: 'RTO = Time until systems must be back UP (Downtime tolerance).'
  },
  {
    id: 38,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'RPO (Recovery Point Objective)',
    back: 'The maximum age of data that an organization can afford to lose in the event of a failure.',
    examTip: 'RPO = Maximum acceptable Data Loss measured in time since last backup.'
  },
  {
    id: 39,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'MTBF (Mean Time Between Failures)',
    back: 'Statistical metric measuring the average elapsed time between inherent failures of a repairable system.',
    examTip: 'Higher MTBF indicates higher system reliability.'
  },
  {
    id: 40,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'MTTR (Mean Time To Repair / Recovery)',
    back: 'The average time required to troubleshoot and restore a failed system or component to operational status.',
    examTip: 'Lower MTTR indicates faster incident response and operational efficiency.'
  },
  {
    id: 41,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'BIA (Business Impact Analysis)',
    back: 'The foundational exercise in business continuity planning that identifies critical business functions and impacts.',
    examTip: 'Always performed before drafting DRP or BCP strategies to determine RTO/RPO thresholds.'
  },
  {
    id: 42,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'SIEM (Security Information and Event Management)',
    back: 'Centralized platform that aggregates, normalizes, and correlates log data from across the enterprise.',
    examTip: 'SIEM detects anomalies and alerts analysts; it is the "Observer" of the security stack.'
  },
  {
    id: 43,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'SOAR (Security Orchestration, Automation, and Response)',
    back: 'Platform that integrates security tools and executes automated incident response playbooks.',
    examTip: 'SIEM finds the alert; SOAR automatically executes the remediation playbook ("Responder").'
  },
  {
    id: 44,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'DLP (Data Loss Prevention)',
    back: 'Software tools and policies designed to detect and prevent unauthorized exfiltration of sensitive data.',
    examTip: 'Monitors data in transit, data at rest, and data in use (endpoints, network, cloud).'
  },
  {
    id: 45,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'PKI (Public Key Infrastructure)',
    back: 'The complete framework of hardware, software, policies, and procedures needed to create, manage, and revoke certificates.',
    examTip: 'Relies on Certificate Authorities (CAs), public/private key pairs, and digital signatures.'
  },
  {
    id: 46,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'CSR (Certificate Signing Request)',
    back: 'An encoded message sent from an applicant to a Certificate Authority to apply for a digital identity certificate.',
    examTip: 'Contains your public key and organization details; signed with your private key.'
  },
  {
    id: 47,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'CRL (Certificate Revocation List)',
    back: 'A digitally signed list maintained by a CA of certificates that have been revoked before their expiration date.',
    examTip: 'Clients must download the CRL periodically to verify certificate validity (can become large).'
  },
  {
    id: 48,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'OCSP (Online Certificate Status Protocol)',
    back: 'An internet protocol used for obtaining the real-time revocation status of a digital certificate.',
    examTip: 'Faster and more efficient than downloading an entire CRL list.'
  },
  {
    id: 49,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'PII & PHI',
    back: 'Personally Identifiable Information (SSN, name) and Protected Health Information (medical records, HIPAA).',
    examTip: 'Strictly regulated data types requiring encryption at rest and in transit.'
  },
  {
    id: 50,
    category: 'risk',
    categoryTitle: 'Risk, Governance & Ops',
    front: 'BCP vs. DRP',
    back: 'Business Continuity Plan: keeps overall business operations running during a disruption. Disaster Recovery Plan: technical restoration of IT systems.',
    examTip: 'BCP = Overall business survival; DRP = IT systems recovery.'
  }
];
