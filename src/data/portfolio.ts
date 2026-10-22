
/**
 * Central portfolio data — adapted for Ayeni Oladimeji Omogunwa.
 *
 * Verified profile details come from the information supplied in our conversation
 * and the LinkedIn screenshot. Unverified information is marked as a placeholder.
 *
 * SIMULATED DEMO entries are illustrative portfolio content only.
 * Replace them with verified information before publishing.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ayeni Oladimeji Omogunwa',
  displayName: 'Ayeni Omogunwa',
  firstName: 'AYENI',
  seriesTag: 'THE PROFESSIONAL SERIES',
  /** Portfolio studio card retained for the existing opening sequence. */
  originalLabel: 'AN AYENI PORTFOLIO',
  role: 'Oil & Gas Professional',
  tagline: [
    'Oil & Gas Professional',
    'Cybersecurity Analyst',
    'OT/ICS & SCADA Security',
  ],
  intro:
    'An Oil & Gas professional and Regulatory Officer with a background in petroleum regulation and petroleum analysis, alongside professional interests in cybersecurity, ethical hacking, digital forensics, OT/ICS, SCADA security and critical infrastructure protection.',
  location: 'Nigeria',
  email: 'kingdeemex@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ayeni-omogunwa-a5a879a9',
    github: 'https://www.linkedin.com/in/ayeni-omogunwa-a5a879a9',
  },
  // PLACEHOLDER: Add Ayeni's approved CV using this exact filename.
  resumePdf: '/assets/Ayeni_Oladimeji_Omogunwa_CV.pdf',
  portrait: {
    // Keep the original filenames so you can replace the image assets yourself.
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ayeni Oladimeji Omogunwa',
  },
  interests: [
    'Oil & Gas',
    'Petroleum Regulation',
    'Cybersecurity',
    'Digital Forensics',
    'OT/ICS & SCADA Security',
    'Critical Infrastructure Protection',
  ],
};

export const education = [
  // PLACEHOLDER: Add verified academic qualifications and institutions.
  // Do not publish simulated education as a real qualification.
];

export const experience = [
  {
    company: 'Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA)',
    role: 'Regulatory Officer',
    place: 'Nigeria',
    period: 'Current — exact dates to confirm',
    points: [
      'Professional role in Nigeria’s midstream and downstream petroleum regulatory environment.',
      'Specific responsibilities, achievements and projects require confirmation before publication.',
    ],
  },
  {
    company: 'Department of Petroleum Resources (DPR)',
    role: 'Regulatory Officer',
    place: 'Nigeria',
    period: 'January 2018 – transition date to confirm',
    points: [
      'Joined the Department of Petroleum Resources (DPR) as a Regulatory Officer in January 2018.',
      'Detailed duties, projects and achievements have not yet been provided.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ot-security-demo',
    title: 'OT/ICS Security Assessment',
    year: 'DEMO',
    genre: 'SIMULATED DEMO • OT/ICS • SCADA',
    logline:
      'A simulated portfolio case study demonstrating how an industrial cybersecurity assessment could be structured for a petroleum facility.',
    stack: [
      'OT Security',
      'ICS',
      'SCADA',
      'Asset Inventory',
      'Risk Assessment',
    ],
    build: [
      'SIMULATED DEMO — This case study illustrates a possible assessment workflow. It is not evidence that Ayeni conducted an assessment at an actual petroleum facility.',
      'A proposed workflow could document industrial assets, map authorized communications, identify security risks, and record recommendations for review by authorized engineering and cybersecurity personnel.',
    ],
    features: [
      'Illustrative OT/ICS asset inventory',
      'Example industrial network trust boundaries',
      'Simulated risk register',
      'Proposed security recommendations',
      'Evidence and limitations documentation',
    ],
    metrics: [
      { value: 'DEMO', label: 'simulated case study' },
      { value: 'TBD', label: 'verified assets assessed' },
      { value: 'TBD', label: 'verified findings' },
    ],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'shield',
  },
  {
    id: 'digital-forensics-demo',
    title: 'Digital Forensics Case Study',
    year: 'DEMO',
    genre: 'SIMULATED DEMO • DIGITAL FORENSICS',
    logline:
      'A demonstration of an evidence-led digital investigation workflow, from evidence preservation through analysis and reporting.',
    stack: [
      'Digital Forensics',
      'Evidence Preservation',
      'Hash Verification',
      'Timeline Analysis',
      'Reporting',
    ],
    build: [
      'SIMULATED DEMO — This entry illustrates a possible digital forensics portfolio format. No real case, evidence image, investigation result, or client engagement has been supplied.',
      'A completed case study should document authorization, evidence handling, acquisition methods, integrity verification, artifact analysis, timelines, limitations and findings supported by evidence.',
    ],
    features: [
      'Case overview and scope',
      'Evidence inventory and handling log',
      'Hash verification record',
      'Artifact and timeline analysis',
      'Evidence-backed findings',
      'Final report and limitations',
    ],
    metrics: [
      { value: 'DEMO', label: 'simulated case study' },
      { value: 'TBD', label: 'evidence items' },
      { value: 'TBD', label: 'verified findings' },
    ],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },
  {
    id: 'critical-infrastructure-demo',
    title: 'Critical Infrastructure Protection',
    year: 'DEMO',
    genre: 'SIMULATED DEMO • CYBER RESILIENCE',
    logline:
      'An illustrative framework for thinking about cybersecurity, operational resilience and risk management in critical energy infrastructure.',
    stack: [
      'Critical Infrastructure',
      'Cyber Resilience',
      'Risk Management',
      'Incident Response',
    ],
    build: [
      'SIMULATED DEMO — This is a conceptual portfolio example, not a completed engagement or a claim of verified security improvements.',
      'A real project could examine asset criticality, access management, incident escalation, backup and recovery arrangements, and coordination between operational and cybersecurity teams.',
    ],
    features: [
      'Example critical-asset classification',
      'Illustrative risk and impact register',
      'Incident escalation workflow',
      'Recovery planning considerations',
      'Recommendations and limitations',
    ],
    metrics: [
      { value: 'DEMO', label: 'conceptual framework' },
      { value: 'TBD', label: 'verified assessments' },
      { value: 'TBD', label: 'verified outcomes' },
    ],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'petroleum-analyst',
    title: 'Certified Petroleum Analyst',
    org: 'Petroleum Training Institute (PTI), Warri',
    detail:
      'Petroleum analysis credential identified in the supplied profile information. Certificate details and public verification link can be added when available.',
    laurel: 'Professional Credential',
  },
  {
    id: 'regulatory-experience',
    title: 'Regulatory Officer',
    org: 'DPR / NMDPRA',
    detail:
      'Joined the Department of Petroleum Resources as a Regulatory Officer in January 2018. Exact transition dates and additional career milestones remain to be confirmed.',
    laurel: 'Professional Experience',
  },
  {
    id: 'portfolio-demo',
    title: 'Professional Case Studies',
    org: 'Portfolio Demonstration',
    detail:
      'SIMULATED DEMO — Illustrative portfolio case-study cards are included to demonstrate the website layout. Replace them with verified projects or remove them before publication.',
    laurel: 'Demo Content',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Petroleum Training Institute (PTI), Warri',
    name: 'Certified Petroleum Analyst',
    // PLACEHOLDER: Add a public certificate or verification URL.
    link: '',
  },
  {
    issuer: 'ISO 9001',
    name: 'ISO 9001 Certified — exact credential details to confirm',
    // PLACEHOLDER: Add certificate, issuing body and verification URL.
    link: '',
  },
  // PLACEHOLDER: Add the exact Safety Professional qualification
  // and issuing organization when confirmed.
  // PLACEHOLDER: Add verified cybersecurity or ethical hacking
  // certifications if Ayeni provides them.
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    subtitle: 'Petroleum industry and regulation',
    skills: [
      { name: 'Petroleum Regulation', mono: 'PR' },
      { name: 'Petroleum Analysis', mono: 'PA' },
      { name: 'Oil & Gas Industry', mono: 'OG' },
      { name: 'Regulatory Compliance', mono: 'RC' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Digital security and resilience',
    skills: [
      { name: 'Cybersecurity', mono: 'CS' },
      { name: 'Ethical Hacking', mono: 'EH' },
      { name: 'Digital Forensics', mono: 'DF' },
      { name: 'Cyber Resilience', mono: 'CR' },
    ],
  },
  {
    id: 'industrial-security',
    title: 'OT / ICS / SCADA',
    subtitle: 'Industrial technology security',
    skills: [
      { name: 'OT Security', mono: 'OT' },
      { name: 'ICS Security', mono: 'IC' },
      { name: 'SCADA Security', mono: 'SC' },
      { name: 'Industrial Cybersecurity', mono: 'IS' },
    ],
  },
  {
    id: 'critical-infrastructure',
    title: 'Critical Infrastructure',
    subtitle: 'Energy security and operational resilience',
    skills: [
      { name: 'Critical Infrastructure Protection', mono: 'CI' },
      { name: 'Energy Security', mono: 'ES' },
      { name: 'Operational Resilience', mono: 'OR' },
      { name: 'Incident Response', mono: 'IR' },
    ],
  },
  {
    id: 'safety-compliance',
    title: 'Safety & Compliance',
    subtitle: 'Professional interests',
    skills: [
      { name: 'Safety', mono: 'SF' },
      { name: 'Operational Risk', mono: 'RK' },
      { name: 'Regulatory Compliance', mono: 'RC' },
    ],
  },
  {
    id: 'interests',
    title: 'Professional Interests',
    subtitle: 'Areas for continued learning and development',
    skills: [
      { name: 'Industrial Automation', mono: 'IA' },
      { name: 'Digital Transformation', mono: 'DT' },
      { name: 'Cyber-Physical Security', mono: 'CP' },
    ],
  },
];

/**
 * Skill-to-evidence references.
 * These connect skills to the supplied professional information or clearly
 * labelled demonstration entries. They do not assert unverified qualifications.
 */
export const skillEvidence: Record<string, string[]> = {
  'Petroleum Regulation': [
    'Regulatory Officer — DPR / NMDPRA',
    'Employment details require further confirmation',
  ],
  'Petroleum Analysis': [
    'Certified Petroleum Analyst — PTI, Warri',
  ],
  'Oil & Gas Industry': [
    'Professional identity listed on LinkedIn',
  ],
  'Regulatory Compliance': [
    'Relevant professional area; specific duties to be confirmed',
  ],
  Cybersecurity: [
    'Cybersecurity Analyst — displayed LinkedIn headline',
  ],
  'Ethical Hacking': [
    'Listed in the supplied LinkedIn headline',
    'Specific certifications and practical projects to be confirmed',
  ],
  'Digital Forensics': [
    'Listed in the supplied LinkedIn headline',
    'Specific case studies to be confirmed',
  ],
  'Cyber Resilience': [
    'Professional interest',
    'Critical infrastructure demo is simulated',
  ],
  'OT Security': [
    'Listed professional specialization',
    'OT/ICS security demo is simulated',
  ],
  'ICS Security': [
    'Listed professional specialization',
    'OT/ICS security demo is simulated',
  ],
  'SCADA Security': [
    'Listed professional specialization',
    'OT/ICS security demo is simulated',
  ],
  'Industrial Cybersecurity': [
    'Professional interest in Oil & Gas and industrial security',
  ],
  'Critical Infrastructure Protection': [
    'Listed professional specialization',
    'Infrastructure demo is simulated',
  ],
  'Energy Security': [
    'Professional interest',
  ],
  'Operational Resilience': [
    'Professional interest',
  ],
  'Incident Response': [
    'Example workflow only; experience requires confirmation',
  ],
  Safety: [
    'Safety Professional — exact qualification to be confirmed',
  ],
  'Operational Risk': [
    'Professional interest; specific responsibilities to be confirmed',
  ],
  'Industrial Automation': [
    'Professional interest',
  ],
  'Digital Transformation': [
    'Professional interest',
  ],
  'Cyber-Physical Security': [
    'Professional interest',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};
const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};
const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};
const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};
const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Professional Experience',
    period: 'January 2018 – Present',
    synopsis:
      'A professional journey in petroleum regulation. Exact employment transition dates and detailed responsibilities remain to be confirmed.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Regulatory Officer',
        description:
          'Joined the Department of Petroleum Resources (DPR) as a Regulatory Officer in January 2018.',
        tags: ['DPR', 'Petroleum Regulation'],
        runtime: 'January 2018 – transition date to confirm',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'NMDPRA',
        description:
          'Current organization identified in the supplied profile. Exact transition date and duties require confirmation.',
        tags: ['NMDPRA', 'Oil & Gas'],
        runtime: 'Current — dates to confirm',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Oil & Gas',
    period: 'Professional focus',
    synopsis:
      'Petroleum regulation and petroleum analysis form the foundation of the portfolio’s energy-sector identity.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Petroleum Analysis',
        description:
          'Certified Petroleum Analyst credential associated with the Petroleum Training Institute (PTI), Warri.',
        tags: ['Petroleum Analysis', 'PTI'],
        runtime: 'Credential date to confirm',
        palette: jade,
      },
      {
        code: 'S02 E02',
        title: 'Regulatory Practice',
        description:
          'An overview of professional experience in petroleum regulation. Specific duties and achievements are pending confirmation.',
        tags: ['Regulation', 'Compliance'],
        runtime: 'Details to confirm',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Cybersecurity',
    period: 'Professional interests',
    synopsis:
      'Cybersecurity, ethical hacking and digital forensics are part of the professional identity displayed on LinkedIn.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Cybersecurity',
        description:
          'Cybersecurity Analyst is listed in the supplied LinkedIn headline. Specific employment history and credentials remain to be confirmed.',
        tags: ['Cybersecurity', 'Digital Security'],
        runtime: 'Professional profile',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Ethical Hacking',
        description:
          'A listed specialization. Verified projects, practical experience and certifications can be added when provided.',
        tags: ['Ethical Hacking', 'Security Testing'],
        runtime: 'Details to confirm',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'Digital Forensics',
        description:
          'A listed specialization. Real investigation examples should only be added with verified details and appropriate authorization.',
        tags: ['Digital Forensics', 'Evidence'],
        runtime: 'Details to confirm',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Industrial Cybersecurity',
    period: 'Specialization and interests',
    synopsis:
      'The intersection of Oil & Gas, OT/ICS, SCADA security and critical infrastructure protection.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'OT & ICS Security',
        description:
          'Industrial cybersecurity is a key area of interest in the portfolio. The associated assessment example is simulated.',
        tags: ['OT', 'ICS', 'Industrial Security'],
        runtime: 'Portfolio focus',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'SCADA Security',
        description:
          'SCADA security connects industrial technology protection with operational resilience in energy environments.',
        tags: ['SCADA', 'Oil & Gas'],
        runtime: 'Portfolio focus',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Critical Infrastructure',
        description:
          'An area of professional interest covering critical energy infrastructure, cybersecurity and resilience.',
        tags: ['Critical Infrastructure', 'Energy Security'],
        runtime: 'Portfolio focus',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'What’s Next',
    period: 'Ongoing development',
    synopsis:
      'A space for future verified projects, professional milestones, publications and qualifications.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Future portfolio entries can feature verified projects, training, research, certifications and professional contributions.',
        tags: ['Professional Development', 'Research'],
        runtime: 'Ongoing',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Professional field',
    title: 'Oil & Gas',
    detail: 'Petroleum regulation and industry experience',
    palette: amber,
  },
  {
    label: 'Petroleum credential',
    title: 'Petroleum Analyst',
    detail: 'PTI, Warri — Certified Petroleum Analyst',
    palette: jade,
  },
  {
    label: 'Regulatory experience',
    title: 'DPR / NMDPRA',
    detail: 'Regulatory Officer — dates and duties to confirm',
    palette: ocean,
  },
  {
    label: 'Cybersecurity',
    title: 'Digital Security',
    detail: 'Cybersecurity Analyst — listed on LinkedIn',
    palette: crimson,
  },
  {
    label: 'Security specialization',
    title: 'Ethical Hacking',
    detail: 'Credentials and projects to be confirmed',
    palette: violet,
  },
  {
    label: 'Investigation',
    title: 'Digital Forensics',
    detail: 'Verified case studies can be added',
    palette: ocean,
  },
  {
    label: 'Industrial security',
    title: 'OT / ICS',
    detail: 'Industrial cybersecurity and control systems',
    palette: jade,
  },
  {
    label: 'SCADA',
    title: 'SCADA Security',
    detail: 'Security of industrial monitoring and control environments',
    palette: amber,
  },
  {
    label: 'Critical infrastructure',
    title: 'Energy Resilience',
    detail: 'Professional interest in critical infrastructure protection',
    palette: crimson,
  },
  {
    label: 'Current focus',
    title: 'Energy + Cybersecurity',
    detail: 'Where Oil & Gas meets industrial technology security',
    palette: violet,
  },
];

/** Slides for the existing "Play Intro" cinematic sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Professional identity',
    title: 'Oil & Gas',
    lines: [
      'Regulatory Officer',
      'DPR / NMDPRA — exact transition dates to confirm',
    ],
    chips: ['Petroleum Regulation'],
  },
  {
    kicker: 'Qualification',
    title: 'Petroleum Analysis',
    lines: [
      'Certified Petroleum Analyst',
      'Petroleum Training Institute (PTI), Warri',
    ],
    chips: ['Oil & Gas', 'Petroleum Analysis'],
  },
  {
    kicker: 'Cybersecurity',
    title: 'Digital Security',
    lines: [
      'Cybersecurity Analyst',
      'Ethical Hacking · Digital Forensics',
    ],
    chips: ['Cybersecurity', 'Digital Forensics'],
  },
  {
    kicker: 'Industrial security',
    title: 'OT / ICS / SCADA',
    lines: [
      'Industrial technology security',
      'Critical infrastructure protection',
    ],
    chips: ['OT', 'ICS', 'SCADA'],
  },
  {
    kicker: 'Professional interests',
    title: 'Energy Resilience',
    lines: [
      'Oil & Gas and industrial cybersecurity',
      'Safety · Compliance · Critical infrastructure',
    ],
  },
  {
    kicker: 'Credentials',
    title: 'Professional Qualifications',
    lines: [
      'Certified Petroleum Analyst — PTI, Warri',
      'ISO 9001 Certified — exact credential details to confirm',
      'Safety Professional — exact qualification to confirm',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Where Energy Meets Security',
    lines: [
      'Petroleum regulation · Cybersecurity · OT/ICS',
      'SCADA security · Critical infrastructure protection',
    ],
  },
];

export type ProfileId = 'ayeni' | 'industry' | 'cybersecurity' | 'research';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ayeni',
    name: 'Ayeni',
    blurb: 'The complete professional story',
    color: '#4cc9ff',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'industry',
    name: 'Oil & Gas',
    blurb: 'Petroleum regulation and energy-sector focus',
    color: '#ffb547',
    order: [
      'about',
      'journey',
      'skills',
      'moments',
      'originals',
      'picks',
      'story',
    ],
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    blurb: 'Cybersecurity, digital forensics and industrial security',
    color: '#46e3a8',
    order: [
      'skills',
      'originals',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },
  {
    id: 'research',
    name: 'Research',
    blurb: 'Insights, case studies and professional interests',
    color: '#b98bff',
    order: [
      'originals',
      'picks',
      'skills',
      'about',
      'journey',
      'moments',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Profile • Oil & Gas & Cybersecurity',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'Professional Journey',
    meta: `${seasons.length} Chapters • Professional Development`,
    palette: amber,
  },
  originals: {
    nav: 'Case Studies',
    card: 'Projects & Case Studies',
    meta: `${projects.length} entries • Includes simulated demos`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Professional Highlights',
    meta: 'Oil & Gas • Cybersecurity • Critical Infrastructure',
    palette: jade,
  },
  skills: {
    nav: 'Expertise',
    card: 'Areas of Expertise',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Credentials',
    card: 'Credentials & Milestones',
    meta: `${achievements.length} entries • ${certifications.length} credential records`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'Professional Profile',
    meta: 'CV • View & download',
    palette: violet,
  },
};
