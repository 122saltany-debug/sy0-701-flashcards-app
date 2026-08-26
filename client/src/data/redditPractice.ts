export interface RedditPracticeQuestion {
  id: number;
  theme: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  trap: string;
}

/**
 * Reddit-informed does not mean recalled exam content. These are original practice
 * scenarios synthesized from public student discussions and mapped to SY0-701 topics.
 */
export const REDDIT_PRACTICE_QUESTIONS: RedditPracticeQuestion[] = [
  {
    id: 1,
    theme: 'Lost device: FDE vs. remote wipe',
    prompt: 'A company laptop is lost while powered off. The organization wants to prevent the finder from reading files on the internal drive. Which control most directly addresses the immediate risk?',
    options: ['Full-disk encryption (FDE)', 'Remote wipe', 'Geofencing', 'Data loss prevention (DLP)'],
    answer: 0,
    explanation: 'FDE protects data at rest when the device is powered off or the drive is removed. Remote wipe can be useful only if the device reconnects and receives the command, so it is not the most direct control for an offline laptop.',
    trap: 'Do not choose remote wipe simply because the device is lost. Ask whether the device is online and whether the question concerns data at rest or device recovery.'
  },
  {
    id: 2,
    theme: 'PBQ-style firewall reasoning',
    prompt: 'A web server must accept HTTPS from the public internet, retrieve updates from an approved repository, and deny all unsolicited inbound traffic. Which rule design best follows least privilege?',
    options: ['Allow all inbound traffic and monitor the logs', 'Allow TCP 443 inbound, allow only the required outbound repository traffic, then deny by default', 'Allow TCP 80 and 443 inbound because both are web ports', 'Allow RDP inbound for emergency administration'],
    answer: 1,
    explanation: 'A least-privilege rule set permits only the necessary service and destination traffic, then applies an implicit or explicit deny-all rule. HTTPS does not require public HTTP, and RDP should not be exposed as an emergency shortcut.',
    trap: 'PBQs often reward following every constraint in order. “Public web access” does not mean “all web ports,” and “emergency” does not remove the need for secure administration.'
  },
  {
    id: 3,
    theme: 'Malware plus control selection',
    prompt: 'An employee opens a malicious attachment and files are encrypted. The organization wants to reduce the chance that similar attachments execute in the future. Which control is the best first improvement?',
    options: ['Application allow listing or execution control', 'A new logo for the security team', 'Increasing the RTO', 'Replacing TLS with HTTP'],
    answer: 0,
    explanation: 'Execution control, application allow listing, attachment sandboxing, and email filtering can prevent or contain unauthorized software execution. The exact control depends on the environment, but it must address the execution path rather than recovery timing or transport encryption.',
    trap: 'Separate the initial compromise, the impact, and the desired prevention. The best answer should directly interrupt the attack path described.'
  },
  {
    id: 4,
    theme: 'Geofencing vs. geographic restriction',
    prompt: 'A mobile app should automatically block access when a managed device leaves a defined campus perimeter. Which capability best matches the requirement?',
    options: ['Geofencing', 'Geographic restriction only at the data-center firewall', 'Hashing', 'Load balancing'],
    answer: 0,
    explanation: 'Geofencing uses location boundaries to trigger an action when a device enters or leaves an area. A geographic restriction may describe a broader policy, but the automatic perimeter-triggered behavior is the key clue for geofencing.',
    trap: 'One word can change the answer. Look for a boundary-triggered action rather than a general statement about where users are allowed to connect.'
  },
  {
    id: 5,
    theme: 'On-path terminology',
    prompt: 'An attacker secretly relays and potentially alters traffic between a client and a server while both endpoints believe they are communicating directly. Which attack is described?',
    options: ['On-path attack', 'Password spraying', 'Tailgating', 'Data remanence'],
    answer: 0,
    explanation: 'An on-path attack places the adversary between communicating parties to observe, relay, or modify traffic. Older study material may call a similar attack man-in-the-middle, so recognize both terms while prioritizing current objective language.',
    trap: 'Do not confuse interception with credential attacks. The defining clue is the attacker’s position in the communication path.'
  },
  {
    id: 6,
    theme: 'Reviewing wrong answers',
    prompt: 'After a practice test, a student remembers the correct letters but repeatedly misses new scenarios about the same topic. What is the most effective remediation?',
    options: ['Memorize the answer pattern', 'Review why each option is right or wrong and restudy the underlying objective', 'Stop taking practice tests', 'Only reread the question stem'],
    answer: 1,
    explanation: 'Understanding the rationale transfers to new wording and new scenarios. A practice test should reveal a knowledge or reasoning gap, not become an answer-key memorization exercise.',
    trap: 'The goal is not to reproduce a vendor’s wording. Explain the concept in your own words and apply it to a fresh scenario.'
  },
  {
    id: 7,
    theme: 'Best answer for the business',
    prompt: 'A small business needs secure remote administration but has limited staff and no dedicated security appliance. Which recommendation is most practical?',
    options: ['Expose RDP directly to the internet', 'Use a managed VPN or zero-trust access service with MFA and logging', 'Disable all logging to reduce cost', 'Give every administrator a shared account'],
    answer: 1,
    explanation: 'The best answer balances security, feasibility, and business constraints. A managed access solution with MFA and logging reduces exposure without requiring the organization to operate a complex security stack itself.',
    trap: 'When two answers sound technically secure, prefer the one that is implementable, maintainable, and aligned with the stated business constraint.'
  },
  {
    id: 8,
    theme: 'Allow list vs. deny list',
    prompt: 'A workstation should run only a small set of approved binaries, and every other executable should be blocked by default. Which control is most appropriate?',
    options: ['Allow list', 'Deny list only', 'Open proxy', 'Port mirroring'],
    answer: 0,
    explanation: 'An allow list explicitly identifies permitted applications and blocks everything else. This is stronger than a deny list when the approved set is small and known.',
    trap: '“Block known bad” suggests a deny list; “permit only known good” suggests an allow list.'
  },
  {
    id: 9,
    theme: 'Acronym and port discrimination',
    prompt: 'A wireless administrator wants centralized authentication for network access and must choose between RADIUS and TACACS+. Which pairing is correct?',
    options: ['RADIUS for network access; TACACS+ primarily for device administration', 'TACACS+ for wireless access only; RADIUS for switch command authorization', 'RADIUS uses TCP and encrypts the entire packet', 'Both protocols are identical in purpose and transport'],
    answer: 0,
    explanation: 'RADIUS is commonly used for VPN and wireless network access and uses UDP. TACACS+ is commonly used for administrative access to network devices, uses TCP, and encrypts the full packet more comprehensively.',
    trap: 'Remember the role clue: network access points toward RADIUS; network-device administration points toward TACACS+.'
  },
  {
    id: 10,
    theme: 'PBQ instruction discipline',
    prompt: 'A performance-based task asks you to configure controls in a specific order and says to select the “most appropriate” solution for the business. What should you do first?',
    options: ['Choose the most sophisticated technology immediately', 'Read the full task, identify constraints and command words, then build the minimum required solution', 'Skip the task without reviewing it', 'Select every available control to maximize security'],
    answer: 1,
    explanation: 'PBQ success depends on translating the requirements into a constrained solution. “Most appropriate” usually requires balancing security, cost, usability, and operational fit; adding unnecessary controls can violate the scenario.',
    trap: 'Follow the instructions literally. More technology is not automatically the best answer, and a single qualifier can change the required action.'
  },
  {
    id: 11,
    theme: 'Architecture placement and segmentation',
    prompt: 'A public-facing web server must be isolated from a protected database network while still allowing the application to reach the database. Which design is most appropriate?',
    options: ['Place both servers on the internal user VLAN', 'Place the web server in a DMZ and restrict the application-to-database flow with explicit rules', 'Place the database directly on the internet', 'Disable segmentation to reduce latency'],
    answer: 1,
    explanation: 'A DMZ limits exposure of the public service, while restricted east-west rules protect the database. The design applies segmentation, least privilege, and controlled placement together.',
    trap: 'Architecture questions often test where a component belongs before asking which product to deploy. Start with trust zones and required flows.'
  },
  {
    id: 12,
    theme: 'Ports in a practical scenario',
    prompt: 'A firewall log shows a management connection using TCP 22 from an administrator workstation to a Linux server. Which service is most likely being used?',
    options: ['SSH', 'DNS', 'SNMP', 'RDP'],
    answer: 0,
    explanation: 'TCP 22 is the standard port associated with SSH, which provides encrypted remote administration. Recognizing the port is useful, but always confirm the service and direction in the scenario.',
    trap: 'Do not answer from the word “management” alone. Pair the protocol clue with the port and the operating-system context.'
  },
  {
    id: 13,
    theme: 'Policy, audit, and assessment order',
    prompt: 'An organization wants to determine whether its written access-control policy is actually being followed before selecting a remediation project. What should it perform first?',
    options: ['A compliance or control assessment using evidence', 'Immediately replace the identity provider', 'Declare a disaster-recovery event', 'Delete all historical access logs'],
    answer: 0,
    explanation: 'An assessment gathers evidence and compares actual practice with the policy or control requirement. The result can then guide remediation and prioritize investment.',
    trap: 'Separate assessment from remediation. First establish the condition with evidence; do not jump straight to a technology replacement.'
  },
  {
    id: 14,
    theme: 'Cloud responsibility boundaries',
    prompt: 'A company uses a SaaS email platform. The provider secures the underlying service, but the customer must still configure users, permissions, retention, and data-sharing settings. Which concept explains this division?',
    options: ['Shared responsibility model', 'Air gap', 'Data remanence', 'Container escape'],
    answer: 0,
    explanation: 'The shared responsibility model divides security duties between the cloud provider and customer. The exact boundary changes by SaaS, PaaS, or IaaS, but customer configuration remains important.',
    trap: '“The provider hosts it” does not mean the customer has no security responsibility. Identify the service model and the control being discussed.'
  },
  {
    id: 15,
    theme: 'PBQ-style prioritization under time pressure',
    prompt: 'During a simulated incident, an analyst sees a suspicious endpoint, a compromised administrator account, and a business-critical server. The instructions ask for the safest immediate sequence. What reasoning should guide the first actions?',
    options: ['Contain the highest-risk active paths, preserve evidence where required, and follow the stated sequence', 'Reimage every system immediately without documentation', 'Ignore the administrator account until the end', 'Disable all network connectivity permanently'],
    answer: 0,
    explanation: 'A sound response balances containment, evidence preservation, business impact, and the task’s explicit constraints. The exact sequence depends on the scenario, so disciplined reading is more reliable than memorizing one universal order.',
    trap: 'Student reports often emphasize PBQs, but there is no universal “always choose this first” shortcut. Follow the scenario, scope, and authorization.'
  },
  {
    id: 16,
    theme: 'Keyword clinic: concept before answer key',
    prompt: 'After missing a practice question because you do not recognize an acronym, what is the strongest remediation step?',
    options: ['Memorize the answer letter and move on', 'Define the term, explain its purpose, compare it with a close alternative, and apply it to a new scenario', 'Take only more timed tests without reviewing', 'Remove acronym-heavy cards from the deck'],
    answer: 1,
    explanation: 'Recent student comments repeatedly emphasized learning unfamiliar terminology in context. Definition, purpose, contrast, and application build transfer to new wording instead of dependence on a familiar question bank.',
    trap: 'A high practice score can be misleading if it comes from answer recognition. Ask whether you could explain the term without seeing the options.'
  },
  {
    id: 17,
    theme: 'Short stem, tricky wording',
    prompt: 'Two answer choices both seem technically secure, but one satisfies the stated business constraint with fewer unnecessary changes. Which principle should guide the selection?',
    options: ['Choose the answer with the most technologies', 'Choose the best-fit control that satisfies the requirement, constraints, and risk', 'Choose the answer with the longest explanation', 'Choose the newest technology regardless of scope'],
    answer: 1,
    explanation: 'Student reports describe short prompts where qualifiers and business context determine the best answer. Security+ scenarios often test judgment, not just whether a control is generally secure.',
    trap: 'Do not treat “more secure in theory” as automatically correct. Re-read qualifiers such as least, best, first, cost, availability, and operational impact.'
  },
  {
    id: 18,
    theme: 'Broad concepts versus deep detail',
    prompt: 'A learner spends most study time memorizing obscure implementation details but cannot explain the purpose of common controls. What adjustment is most useful?',
    options: ['Stop learning definitions and memorize ports only', 'Rebalance toward objective-level concepts, use cases, distinctions, and then add details where the objectives require them', 'Study only the hardest vendor-specific configurations', 'Avoid scenario questions until exam day'],
    answer: 1,
    explanation: 'Recent comments described the exam as broad in many multiple-choice items while PBQs may require more applied detail. A layered approach—purpose, use case, comparison, then implementation detail—supports both formats.',
    trap: '“Surface-level” does not mean shallow memorization. You should still be able to explain why a control fits a scenario and how it differs from alternatives.'
  },
  {
    id: 19,
    theme: 'PBQ pacing is a personal strategy',
    prompt: 'A candidate prefers to flag difficult multiple-choice items, return to them, and complete PBQs after the first pass. How should this strategy be used?',
    options: ['Treat it as an official CompTIA requirement', 'Use it as an optional time-management plan, while following the actual task instructions and reserving time for review', 'Skip every PBQ because they are too risky', 'Spend unlimited time on the first difficult question'],
    answer: 1,
    explanation: 'A recent report described this pacing approach, but it is an individual strategy rather than an official rule. Candidates should choose a plan that prevents one question from consuming the exam and leaves time for PBQs and review.',
    trap: 'Reddit timing reports vary. Never convert another candidate’s question count or sequence into a promise about your exam form.'
  }
];

export const REDDIT_SOURCES = [
  { title: 'Security+ 701 passed! Study materials in post.', url: 'https://www.reddit.com/r/CompTIA/comments/1cxhd6x/security_701_passed_study_materials_in_post/' },
  { title: "I just passed the Security+ SY0-701, don't do what I did", url: 'https://www.reddit.com/r/CompTIA/comments/18982rw/i_just_passed_the_security_sy0701_dont_do_what_i/' },
  { title: 'Passed SY0-701 | AMA / What I did', url: 'https://www.reddit.com/r/CompTIA/comments/1dsp6ff/passed_sy0701_ama_what_i_did/' },
  { title: 'Passed CompTIA Security+ SY0-701 exam today and here are my tips', url: 'https://www.reddit.com/r/CompTIA/comments/1gu3j1y/passed_comptia_security_sy0701_exam_today_and/' },
  { title: 'Passed Security+ SY0-701, from mid-70s practice tests to a 780', url: 'https://www.reddit.com/r/CompTIA/comments/1pv2vuk/passed_security_701_from_mid70s_practice_tests/' },
  { title: 'Passed Security+ SY0-701 with 789! (2-Week Study Journey)', url: 'https://www.reddit.com/r/CompTIA/comments/1qavagp/passed_security_sy0701_with_789_2week_study/' },
  { title: 'CompTIA Security+ SY0-701 | Just passed my exam!', url: 'https://www.reddit.com/r/CompTIA/comments/1t3ky32/comptia_security_sy0701_just_passed_my_exam/' },
  { title: 'I passed my Security+ SY0-701! Honest experience', url: 'https://www.reddit.com/r/CompTIA/comments/1squw5k/i_passed_my_security_701_heres_my_honest/' },
  { title: 'How I passed CompTIA Sec+ SY0-701', url: 'https://www.reddit.com/r/CompTIA/comments/1sfac5j/how_a_redneck_like_me_passed_comptia_sec_sy0701/' },
  { title: 'My CompTIA Security+ SY0-701 experience - passed with 775 (Aug 2026)', url: 'https://www.reddit.com/r/CompTIA_Security/comments/1vr24w1/my_comptia_security_sy0701_experience_passed_with/' },
  { title: 'Just passed Security+ SY0-701! thoughts in comments (Aug 2026)', url: 'https://www.reddit.com/r/CompTIA_Security/comments/1vniywv/just_passed_security_syo701_thoughts_in_comments/' }
];
