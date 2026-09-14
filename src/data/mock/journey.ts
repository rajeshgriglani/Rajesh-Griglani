import { TimelineItem, StateExperience } from '../../types/journey';

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'milestone-1',
    year: '1973',
    title: 'Origins in Porbandar',
    roleOrCategory: 'Formative Years',
    location: 'Kutiyana, Porbandar, Gujarat',
    description:
      'Born on 07 February 1973 into a third-generation Congress family with deep roots in post-Partition resilience and constitutional service.',
    highlight: true,
    status: 'published',
  },
  {
    id: 'milestone-2',
    year: '1983–1990',
    title: 'Sainik School Balachadi',
    roleOrCategory: 'Discipline & Leadership Foundation',
    location: 'Jamnagar, Gujarat',
    description:
      'Rigorous seven-year defence education that instilled an unshakeable ethos of collective duty, precision, and national integrity.',
    status: 'published',
  },
  {
    id: 'milestone-3',
    year: '1991–1995',
    title: 'The Maharaja Sayajirao University of Baroda',
    roleOrCategory: 'Academic Mastery',
    location: 'Vadodara, Gujarat',
    description:
      'Completed an M.A. in Political Science with a specialization in International Relations, studying global constitutional democracies and systemic power dynamics.',
    status: 'published',
  },
  {
    id: 'milestone-4',
    year: '1996–Present',
    title: 'Gujarat Political Operations',
    roleOrCategory: 'Grassroots Induction',
    location: 'Gujarat',
    description:
      'Began his political career with intensive coordination alongside Shri Vitthalbhai Shah, developing deep structural experience in district-level cadre management and grassroots political operations.',
    status: 'published',
  },
  {
    id: 'milestone-5',
    year: '2004',
    title: 'Transition to New Delhi',
    roleOrCategory: 'National Strategy',
    location: 'New Delhi',
    description:
      'Transitioned to national political operations, strategic advisory work, policy briefings, and high-level campaign coordination following the formation of the UPA.',
    highlight: true,
    status: 'published',
  },
  {
    id: 'milestone-6',
    year: '2007–2017',
    title: 'Jawaharlal Nehru Leadership Institute (JNLI)',
    subtitle: 'National Leadership Development & Cadre Training',
    roleOrCategory: 'Pedagogy & Mentorship',
    location: 'Pan-India (15+ States)',
    description:
      'Formulated and executed nationwide training programmes, leadership curricula, and organizational modules for youth, student wings, and regional political workers.',
    status: 'published',
  },
  {
    id: 'milestone-7',
    year: '2018',
    title: 'Women’s Leadership & Mahila Congress Initiatives',
    roleOrCategory: 'Grassroots Cadre Engineering',
    location:
      'Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Chhattisgarh, Uttarakhand, Haryana & Goa',
    description:
      'Flagship training programme for women’s leadership development across India titled “SITARE”.\n\nSpearheaded intensive capacity-building initiatives with the All India Mahila Congress, developing self-reliant women campaign leaders and booth-level commanders.',
    highlight: true,
    status: 'published',
  },
  {
    id: 'milestone-8',
    year: '2020–2024',
    title: 'National Executive Committee / Social Media, Indian National Congress',
    roleOrCategory: 'Narrative Architecture',
    location: 'New Delhi / Central Operations',
    description:
      'Served on the National Executive Committee for Social Media, Indian National Congress, contributing to unified digital narrative strategies and training templates.\n\n2020 — Bihar Social Media War Room during the Bihar Assembly Election.',
    status: 'published',
  },
  {
    id: 'milestone-9',
    year: '2021–2022',
    title: 'Goa Assembly Election Management',
    roleOrCategory: 'State Election Command',
    location: 'Goa',
    description:
      'Formulated a state-wide election management blueprint, overseeing real-time war rooms, booth-level micro-structuring, and voter outreach operations.',
    status: 'published',
  },
  {
    id: 'milestone-10',
    year: '2024–2026',
    title: 'BODHI INSTITUTE',
    subtitle: 'Development & Publication of Roots of Resistance',
    roleOrCategory: 'Institutional Legacy & Author',
    location: 'Pan-India',
    description:
      'Institutionalized BODHI (Bureau of Developing Human Instincts, Intellect & Intuitions) and published the political memoir Roots of Resistance — The Ideological Battle for India’s Soul.',
    highlight: true,
    status: 'published',
  },
  {
    id: 'milestone-11',
    year: 'Present',
    title: 'Voice from the Grassroots',
    roleOrCategory:
      'Author • Strategist • Trainer • Political Observer • Congress Member & Worker',
    location: 'India',
    description:
      'Continuing his work in political commentary, leadership mentorship, cadre training, organizational development, and democratic advocacy.',
    highlight: true,
    status: 'published',
  },
];

export const STATES_EXPERIENCE: StateExperience[] = [
  {
    state: 'Gujarat',
    code: 'GJ',
    region: 'Western India',
    focus: 'Grassroots Mobilization & Early State Operations',
    description:
      'Foundational career work under Shri Vitthalbhai Shah; deep immersion in district-level organization, booth monitoring, and ideological resilience.',
    keyInitiatives: [
      'District coordination networks',
      'Constituency grievance audits',
      'Early election war rooms',
    ],
  },
  {
    state: 'Goa',
    code: 'GA',
    region: 'Western India',
    focus: 'Assembly Election Management Blueprint',
    description:
      'Directed comprehensive state-wide campaign architecture, booth management matrix, volunteer synchronization, and target voter analytics during the 2021 Assembly elections.',
    keyInitiatives: [
      'State-wide booth committee verification',
      'Micro-demographic messaging',
      'Rapid-response digital war room',
    ],
  },
  {
    state: 'Maharashtra',
    code: 'MH',
    region: 'Western India',
    focus: 'Mahila Congress Training & Municipal Command',
    description:
      'Led multi-city leadership academies for women organizers and municipal election cadre restructuring.',
    keyInitiatives: [
      'Urban ward management seminars',
      'Women candidate speech clinics',
      'Cadre motivation circles',
    ],
  },
  {
    state: 'Madhya Pradesh',
    code: 'MP',
    region: 'Central India',
    focus: 'Cadre Structural Reorganization',
    description:
      'Restructured block-level volunteer command systems and conducted state-wide training on constitutional advocacy.',
    keyInitiatives: [
      'Block president coaching',
      'Voter list audit procedures',
      'Ideological cadre workshops',
    ],
  },
  {
    state: 'Rajasthan',
    code: 'RJ',
    region: 'Northern India',
    focus: 'Panchayat & Grassroots Leadership',
    description:
      'Intensive outreach programs empowering rural women delegates and youth organizers with modern campaign toolkits.',
    keyInitiatives: [
      'Panchayat mobilization blueprints',
      'Rural communicator academies',
      'Door-to-door tracking systems',
    ],
  },
  {
    state: 'Haryana',
    code: 'HR',
    region: 'Northern India',
    focus: 'Electoral Strategy & Outreach Alignment',
    description:
      'Advised campaign leadership on rural voter sentiment trends, candidate public speaking preparation, and booth coordination.',
    keyInitiatives: [
      'Hyperlocal issue prioritization',
      'Youth cadre mobilization',
      'Candidate debate coaching',
    ],
  },
  {
    state: 'Bihar',
    code: 'BR',
    region: 'Eastern India',
    focus: 'Grassroots Coalition Dynamics',
    description:
      'Analyzed grassroots sociological trends and conducted training modules for district workers on issue-based mobilization.',
    keyInitiatives: [
      'Demographic sentiment reading',
      'Volunteer retention framework',
      'Panchayat level briefings',
    ],
  },
  {
    state: 'West Bengal',
    code: 'WB',
    region: 'Eastern India',
    focus: 'Ward Level Coordination & Cadre Morale',
    description:
      'Designed training modules for urban cadres, emphasizing non-violent ideological resistance and booth-day discipline.',
    keyInitiatives: [
      'Urban volunteer management',
      'Counter-polarization workshops',
      'Polling agent training',
    ],
  },
  {
    state: 'Delhi',
    code: 'DL',
    region: 'National Capital',
    focus: 'National Operations & Digital Narrative Strategy',
    description:
      'Central strategy coordination, National Executive Committee work, policy research inputs, and national media briefings.',
    keyInitiatives: [
      'National messaging synchronization',
      'Digital campaign training',
      'Parliamentary briefing support',
    ],
  },
  {
    state: 'Jammu & Kashmir',
    code: 'JK',
    region: 'Northern India',
    focus: 'Democratic Capacity Mentoring',
    description:
      'Specialized youth and grassroots leadership mentoring focused on democratic engagement and constitutional values.',
    keyInitiatives: [
      'Youth leadership seminars',
      'Constitutional dialogue forums',
      'Community organizer mentorship',
    ],
  },
];
