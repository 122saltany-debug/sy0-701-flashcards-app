export type CoverageLevel = 'strong' | 'partial' | 'gap';

export interface ObjectiveTask {
  id: string;
  label: string;
  focus: string;
  coverage: CoverageLevel;
}

export interface ObjectiveDomain {
  id: string;
  title: string;
  weight: number;
  color: string;
  tasks: ObjectiveTask[];
}

// Objective numbering and domain weights follow CompTIA Security+ SY0-701 V7.
// Coverage describes this app's current study content, not a claim about exam questions.
export const OBJECTIVE_DOMAINS: ObjectiveDomain[] = [
  { id: 'domain1', title: 'General Security Concepts', weight: 12, color: 'blue', tasks: [
    { id: '1.1', label: 'Compare and contrast security controls', focus: 'General, technical, operational, managerial, preventive, deterrent, detective, corrective, compensating, and directive controls', coverage: 'strong' },
    { id: '1.2', label: 'Summarize fundamental security concepts', focus: 'CIA, AAA, non-repudiation, gap analysis, Zero Trust, physical security, and deception technology', coverage: 'strong' },
    { id: '1.3', label: 'Explain change management and the impact to security', focus: 'Approval, ownership, impact analysis, testing, rollback, maintenance windows, and dependencies', coverage: 'partial' },
    { id: '1.4', label: 'Explain appropriate cryptographic solutions', focus: 'PKI, encryption, hashing, signatures, certificates, key management, obfuscation, and blockchain concepts', coverage: 'strong' },
  ]},
  { id: 'domain2', title: 'Threats, Vulnerabilities, and Mitigations', weight: 22, color: 'amber', tasks: [
    { id: '2.1', label: 'Compare and contrast threat actors and motivations', focus: 'Nation-state, insider, hacktivist, organized crime, shadow IT, capability, intent, and resources', coverage: 'strong' },
    { id: '2.2', label: 'Explain threat vectors and attack surfaces', focus: 'Message, file, voice, removable media, wireless, supply chain, social engineering, and unsupported systems', coverage: 'strong' },
    { id: '2.3', label: 'Explain types of vulnerabilities', focus: 'Application, OS, web, hardware, virtualization, cloud, mobile, misconfiguration, and zero-day vulnerabilities', coverage: 'strong' },
    { id: '2.4', label: 'Analyze indicators of malicious activity', focus: 'Malware, network, application, password, cryptographic, and physical indicators', coverage: 'strong' },
    { id: '2.5', label: 'Explain mitigation techniques', focus: 'Segmentation, ACLs, allow lists, patching, encryption, monitoring, hardening, and isolation', coverage: 'strong' },
  ]},
  { id: 'domain3', title: 'Security Architecture', weight: 18, color: 'emerald', tasks: [
    { id: '3.1', label: 'Compare architecture models', focus: 'On-premises, cloud, hybrid, decentralized, virtualization, IoT, ICS/SCADA, and infrastructure as code', coverage: 'strong' },
    { id: '3.2', label: 'Apply principles to secure enterprise infrastructure', focus: 'Zones, segmentation, DMZs, connectivity, fail-open/fail-closed, proxies, firewalls, and infrastructure placement', coverage: 'strong' },
    { id: '3.3', label: 'Compare concepts and strategies to protect data', focus: 'Data states, classification, sovereignty, geolocation, masking, tokenization, DLP, encryption, and rights management', coverage: 'partial' },
    { id: '3.4', label: 'Explain resilience and recovery in security architecture', focus: 'RTO, RPO, MTTR, MTBF, HA, redundancy, backups, RAID, hot/warm/cold sites, and testing', coverage: 'strong' },
    { id: '3.5', label: 'Explain secure application development concepts', focus: 'SDLC, secure coding, input validation, secure defaults, code review, testing, dependency management, and CI/CD security', coverage: 'gap' },
    { id: '3.6', label: 'Explain cloud and virtualization concepts', focus: 'Shared responsibility, service models, containers, VMs, serverless, cloud controls, and CASB', coverage: 'partial' },
  ]},
  { id: 'domain4', title: 'Security Operations', weight: 28, color: 'purple', tasks: [
    { id: '4.1', label: 'Apply security techniques to computing resources', focus: 'Secure baselines, endpoint security, mobile, wireless, application, and data controls', coverage: 'partial' },
    { id: '4.2', label: 'Explain hardware, software, and data asset management', focus: 'Inventory, ownership, classification, tracking, lifecycle, secure disposal, and change records', coverage: 'strong' },
    { id: '4.3', label: 'Explain vulnerability management activities', focus: 'Discovery, prioritization, scanning, remediation, validation, reporting, and exception handling', coverage: 'strong' },
    { id: '4.4', label: 'Explain security alerting and monitoring concepts', focus: 'SIEM, SOAR, IDS/IPS, EDR/XDR, logs, dashboards, baselines, and alert triage', coverage: 'strong' },
    { id: '4.5', label: 'Modify enterprise capabilities to enhance security', focus: 'Configuration changes, segmentation, secure deployment, controls, and compensating protections', coverage: 'partial' },
    { id: '4.6', label: 'Implement and maintain identity and access management', focus: 'Provisioning, federation, SSO, MFA, privileged access, account lifecycle, and access reviews', coverage: 'partial' },
    { id: '4.7', label: 'Explain automation and orchestration for secure operations', focus: 'SOAR, playbooks, scripting, APIs, repeatability, integrations, and human approval points', coverage: 'strong' },
    { id: '4.8', label: 'Explain incident response activities', focus: 'Preparation, detection, analysis, containment, eradication, recovery, and lessons learned', coverage: 'strong' },
    { id: '4.9', label: 'Use data sources to support an investigation', focus: 'Order of volatility, logs, memory, disk images, packet captures, chain of custody, and forensic analysis', coverage: 'strong' },
  ]},
  { id: 'domain5', title: 'Security Program Management and Oversight', weight: 20, color: 'rose', tasks: [
    { id: '5.1', label: 'Summarize effective security governance', focus: 'Policies, standards, procedures, guidelines, roles, responsibilities, and committees', coverage: 'strong' },
    { id: '5.2', label: 'Explain the risk management process', focus: 'BIA, risk register, appetite, tolerance, SLE, ALE, ARO, treatment, and residual risk', coverage: 'strong' },
    { id: '5.3', label: 'Explain third-party risk assessment and management', focus: 'Due diligence, contracts, SLA, MOU, NDA, right to audit, and SOC reports', coverage: 'strong' },
    { id: '5.4', label: 'Summarize effective security compliance', focus: 'Regulations, privacy, data handling, evidence, retention, legal holds, and sanctions', coverage: 'strong' },
    { id: '5.5', label: 'Explain audits and assessments', focus: 'Internal/external audits, attestation, vulnerability assessment, penetration test, and gap analysis', coverage: 'strong' },
    { id: '5.6', label: 'Implement security awareness practices', focus: 'Training, phishing exercises, reporting, metrics, role-based awareness, and reinforcement', coverage: 'strong' },
  ]},
];

export const OFFICIAL_OBJECTIVES_SOURCE = 'https://www.comptia.org/en-us/certifications/security/';
export const PUBLISHED_OBJECTIVES_PDF = 'https://www.examcompass.com/comptia-certifications/security-plus/comptia-security-plus-sy0-701-exam-objectives.pdf';
export const COMPTIA_SECURITY_SOURCE = 'https://www.comptia.org/en-us/certifications/security/';
