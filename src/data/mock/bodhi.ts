import {
  BodhiSectionData,
  BodhiPillar,
  BodhiCapability,
  WomenLeadershipState,
  StrategyArea,
} from '../../types/bodhi';

export const BODHI_PILLARS: BodhiPillar[] = [
  {
    id: 'pillar-instinct',
    title: 'INSTINCT',
    subtitle: 'The Primal Sensor',
    tagline: 'Understanding human behaviour and grassroots political currents.',
    description:
      'Grassroots politics is lived before it is analyzed. Instinct is the trained visceral ability to gauge voter sentiment beneath surface slogans, sense unspoken discontent, and react decisively in high-friction electoral crises.',
    modules: [
      'Voter Behavioral Psychology',
      'Crisis De-escalation on Ground',
      'Reading Silent Democratic Currents',
      'Emotional Cadre Cohesion',
    ],
  },
  {
    id: 'pillar-intellect',
    title: 'INTELLECT',
    subtitle: 'Structured Rigor',
    tagline: 'Structured analysis, organizational thinking and strategic knowledge.',
    description:
      'Replacing intuition-only guesswork with institutional discipline. Intellect encompasses micro-booth architecture, demographic research, message formulation, and disciplined electoral logistics across multi-tier constituencies.',
    modules: [
      'Constituency Data Modeling',
      'Booth Matrix Engineering',
      'Policy Message Crafting',
      'War Room Workflow Systems',
    ],
  },
  {
    id: 'pillar-intuition',
    title: 'INTUITION',
    subtitle: 'High-Altitude Synthesis',
    tagline: 'Reading political situations beyond conventional data.',
    description:
      'Data can report what happened yesterday; intuition forecasts the trajectory of tomorrow. BODHI trains senior leaders to perceive structural shifts, historical parallels, and subtle ideological turning points in the national psyche.',
    modules: [
      'Strategic Narrative Forecasting',
      'Non-Verbal Leadership Signals',
      'Long-term Coalition Architecture',
      'Ethical Command Principles',
    ],
  },
];

export const BODHI_CAPABILITIES: BodhiCapability[] = [
  {
    id: 'cap-1',
    title: 'Leadership Development',
    desc: 'Empowering future legislators, district office-bearers, and civil leaders with structured administrative and moral frameworks.',
  },
  {
    id: 'cap-2',
    title: 'Political Training',
    desc: 'Intensive modular bootcamps covering message delivery, media debates, manifesto articulation, and public rhetoric.',
  },
  {
    id: 'cap-3',
    title: 'Grassroots Cadre Engineering',
    desc: 'Building self-sustaining booth networks, volunteer management structures, and localized grievance-redressal channels.',
  },
  {
    id: 'cap-4',
    title: 'Human Instinct & Intuition Mastery',
    desc: 'Applying advanced psychological insight, active listening, and stress-resilience practices for leaders under extreme pressure.',
  },
];

export const WOMEN_LEADERSHIP_STATES: WomenLeadershipState[] = [
  {
    state: 'Maharashtra',
    tag: 'Municipal & Block Command',
    details:
      'Structured workshops across major municipal corporations and rural districts, focusing on booth-level verification and localized issue manifestos.',
  },
  {
    state: 'Rajasthan',
    tag: 'Panchayat & Rural Mobilization',
    details:
      'Capacity-building for women sarpanches and block committee coordinators to lead independent door-to-door validation campaigns.',
  },
  {
    state: 'Madhya Pradesh',
    tag: 'Cadre Network Expansion',
    details:
      'Designed intensive 3-day residential training camps for women workers on counter-narrative formulation and polling station defense.',
  },
  {
    state: 'Chhattisgarh',
    tag: 'Tribal & Grassroots Empowerment',
    details:
      'Mentored grassroots women organizers in resource allocation, community dialoguing, and regional social audits.',
  },
  {
    state: 'Uttarakhand',
    tag: 'Hilly Terrain Booth Operations',
    details:
      'Specialized mobilization models tailored for scattered mountain constituencies and women-led household outreach networks.',
  },
];

export const STRATEGY_AREAS: StrategyArea[] = [
  {
    name: 'Election Management',
    desc: 'End-to-end operational blueprints from candidate filing to polling-day turnout mechanics.',
  },
  {
    name: 'Booth Organization',
    desc: 'Hierarchical micro-structuring with strict verification ratios and dedicated sector supervisors.',
  },
  {
    name: 'Leadership Development',
    desc: 'Curriculum-driven pedagogical models transforming raw volunteers into articulate spokespersons.',
  },
  {
    name: 'Cadre Training',
    desc: 'Ideological grounding, historical literacy, and practical campaigning toolkits.',
  },
  {
    name: 'Grassroots Mobilization',
    desc: 'Door-to-door community organizing grounded in local grievances and authentic human connection.',
  },
  {
    name: 'War Room Operations',
    desc: 'Real-time telemetry, rapid-response message testing, and candidate daily briefing systems.',
  },
  {
    name: 'Political Communication',
    desc: 'Clear, high-contrast narrative framing bridging historic constitutional values with contemporary issues.',
  },
  {
    name: 'Women Leadership',
    desc: 'Institutional capacity building elevating women cadres to direct strategic decision-making roles.',
  },
  {
    name: 'Organizational Strategy',
    desc: 'Long-term party institutional strengthening and multi-election cadre retention pipelines.',
  },
];

export const BODHI_DATA: BodhiSectionData = {
  acronym: 'BODHI',
  title: 'BODHI INSTITUTE',
  subtitle: 'Bureau of Developing Human Instincts, Intellect & Intuitions',
  leadNarrative:
    'Founded by Rajesh Bhojraj Griglani, BODHI is an institutional framework dedicated to leadership development, political training, and human instinct mastery.',
  pillars: BODHI_PILLARS,
  capabilities: BODHI_CAPABILITIES,
  womenLeadershipStates: WOMEN_LEADERSHIP_STATES,
  strategyAreas: STRATEGY_AREAS,
};
