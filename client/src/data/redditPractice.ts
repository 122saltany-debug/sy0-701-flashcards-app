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
  }
];

export const REDDIT_SOURCES = [
  { title: 'Security+ 701 passed! Study materials in post.', url: 'https://www.reddit.com/r/CompTIA/comments/1cxhd6x/security_701_passed_study_materials_in_post/' },
  { title: "I just passed the Security+ SY0-701, don't do what I did", url: 'https://www.reddit.com/r/CompTIA/comments/18982rw/i_just_passed_the_security_sy0701_dont_do_what_i/' },
  { title: 'Passed SY0-701 | AMA / What I did', url: 'https://www.reddit.com/r/CompTIA/comments/1dsp6ff/passed_sy0701_ama_what_i_did/' },
  { title: 'Passed CompTIA Security+ SY0-701 exam today and here are my tips', url: 'https://www.reddit.com/r/CompTIA/comments/1gu3j1y/passed_comptia_security_sy0701_exam_today_and/' },
  { title: 'Passed Security+ SY0-701, from mid-70s practice tests to a 780', url: 'https://www.reddit.com/r/CompTIA/comments/1pv2vuk/passed_security_701_from_mid70s_practice_tests/' }
];
