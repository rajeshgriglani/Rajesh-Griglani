import { BookDetails } from '../../types/book';
import { AUTHOR_DATA } from './author';
import { BOOK_RETAILERS } from './retailers';

export const BOOK_DATA: BookDetails = {
  id: 'roots-of-resistance',
  title: 'Roots of Resistance',
  subtitle: 'The Ideological Battle for India’s Soul',
  fullTitle: 'Roots of Resistance: The Ideological Battle for India’s Soul',
  author: AUTHOR_DATA.name,
  authorId: AUTHOR_DATA.id,
  genre: 'Political Memoir / Narrative Nonfiction',
  format: 'Hardcover Edition',
  pages: 198,
  language: 'English',
  isbn: '978-93-XXXXX-XX-X',
  publisher: 'Notion Press / National Publishing Network',
  publicationDate: '2024–2026',
  coverImageId: 'roots_of_resistance_book',
  mockupImageId: 'roots_of_resistance_mockup',
  tagline: 'The secular republic is not an abstraction. It is the thing between you and the mob.',
  coreQuote: 'Political memory is not just about what happened. It is about what we choose to remember.',
  primaryDescription:
    'A searing, unflinching political memoir tracing thirty years on the frontlines of Indian democracy—from grassroots mobilization in Gujarat through the 2002 communal furnace to high-altitude national strategy in New Delhi.',
  extendedOverview:
    'Roots of Resistance is an impassioned, eyewitness testament to the moral, organizational, and ideological battles that have defined contemporary India. Drawing upon three decades of grassroots organizing, state election management, cadre pedagogy, and personal witness, Rajesh Bhojraj Griglani examines why the defense of secular democracy is an urgent everyday discipline, not an academic luxury.',
  themes: [
    {
      title: 'The Crucible of 2002',
      description:
        'A first-person account of surviving the Naroda Patiya mob on 28 February 2002 with only a driving license, illuminating how the secular republic literally shields individual life.',
    },
    {
      title: 'The Inherited Partition Wound',
      description:
        'Understanding how a third-generation Congress heritage rooted in post-Partition displacement shaped an unshakeable reverence for India’s constitutional compact.',
    },
    {
      title: 'The Mechanics of Grassroots Cadres',
      description:
        'Why elections are decided in village schoolrooms by thirty dedicated volunteers and women organizers rather than television studios and spreadsheet formulas.',
    },
    {
      title: 'Ideological Clarity vs. Opportunism',
      description:
        'An uncompromising critique of ideological complacency and a strategic roadmap for reviving grassroots constitutional consciousness.',
    },
  ],
  chapters: [
    {
      number: 1,
      title: 'The Inherited Wound: Porbandar & Post-Partition Memory',
      synopsis:
        'Family lineage, the trauma of 1947, and the birth of a third-generation Congress commitment in Kutiyana and Porbandar.',
    },
    {
      number: 2,
      title: 'The Balachadi Discipline: Cadets & Constitutional Duty',
      synopsis:
        'Seven formative years at Sainik School Balachadi shaping an ethos of military-grade precision and national defense.',
    },
    {
      number: 3,
      title: 'The Fragile License: Naroda Patiya & The 2002 Furnace',
      synopsis:
        'The defining moment on 28 February 2002 when identity verification stood between life and death.',
    },
    {
      number: 4,
      title: 'The Baroda Dialectic: International Relations in the Streets',
      synopsis:
        'Synthesizing academic political science at MSU Baroda with district-level cadre organizing under Shri Vitthalbhai Shah.',
    },
    {
      number: 5,
      title: 'Transition to the Capital: UPA Formation & National Briefings',
      synopsis:
        'Moving to New Delhi in 2004 to coordinate national strategy, policy research, and coalition messaging.',
    },
    {
      number: 6,
      title: 'The Pedagogy of Power: JNLI & Cadre Training Across 15 States',
      synopsis:
        'Building structured leadership curricula for thousands of youth and regional workers from 2007 to 2017.',
    },
    {
      number: 7,
      title: 'SITARE: Women at the Frontline of Democratic Defense',
      synopsis:
        'Spearheading national capacity-building with the All India Mahila Congress across eight states.',
    },
    {
      number: 8,
      title: 'Digital War Rooms: The Battle for the National Narrative',
      synopsis:
        'Serving on the National Executive Committee for Social Media and orchestrating the 2020 Bihar war room.',
    },
    {
      number: 9,
      title: 'The Goa Blueprint: Micro-Targeting & Booth Matrix Engineering',
      synopsis:
        'Formulating an end-to-end assembly campaign management architecture during the 2021–2022 elections.',
    },
    {
      number: 10,
      title: 'BODHI & The Future: Instinct, Intellect and Intuition',
      synopsis:
        'Institutionalizing cadre education and articulating a vision for India’s continuing constitutional renaissance.',
    },
  ],
  excerpts: [
    {
      id: 'exc-1',
      title: 'The Burning Road in Naroda Patiya',
      subtitle: 'From Chapter 3: The Fragile License',
      chapterNumber: 3,
      content: `On 28 February 2002, a mob stopped my car on a burning road in Naroda Patiya and demanded proof that I was a Hindu.

I reached into my pocket and pulled out my wallet. I showed my Driving License. My name alone was enough.

Had I forgotten my wallet, they would have stripped me to check my identity — and I wouldn't have been alive to tell this story, because I am circumcised for medical reasons.

That's the book.

The secular republic is not an abstraction. It is the thing between you and the mob.`,
    },
    {
      id: 'exc-2',
      title: 'The Legacy of Partition',
      subtitle: 'From Chapter 1: The Inherited Wound',
      chapterNumber: 1,
      content: `My family crossed the burning line of Partition carrying little more than their names and a deep reverence for the idea of a secular homeland where no child would ever be asked their faith as a condition of safety.

Growing up as a third-generation Congress worker in Kutiyana and Porbandar, politics was not an avenue of convenience; it was a sacred covenant to protect the constitutional fabric of this country against those who wished to burn it down.`,
    },
    {
      id: 'exc-3',
      title: 'The War Room and the Booth',
      subtitle: 'From Chapter 7: The True Metric of Democracy',
      chapterNumber: 7,
      content: `A national election is not decided on television screens or in social media algorithms; it is won in the unglamorous twilight hours inside a village schoolroom where thirty volunteers verify the voter slip of a daily-wage worker whose livelihood depends on whether their vote counts.

When you train a cadre to understand the moral gravity of that single vote, you are not merely winning an election. You are sustaining a republic.`,
    },
  ],
  sampleContent: {
    eyebrow: 'EXCLUSIVE PREVIEW EXCERPTS',
    title: 'Roots of Resistance',
    subtitle: 'The Ideological Battle for India\'s Soul — An Eyewitness Account',
    paragraphs: [
      'On 28 February 2002, a mob stopped my car on a burning road in Naroda Patiya and demanded proof that I was a Hindu.',
      'I reached into my pocket and pulled out my wallet. I showed my Driving License. My name alone was enough.',
      'Had I forgotten my wallet, they would have stripped me to check my identity — and I wouldn\'t have been alive to tell this story, because I am circumcised for medical reasons.',
      'That is why I wrote this book. The secular republic is not a philosophical abstraction debated in air-conditioned seminar halls. It is the single thin, fragile barrier standing between the citizen and the mob.',
      'Over three decades of working in the organizational trenches—from block-level committees in Saurashtra to central strategy rooms in New Delhi—I witnessed both the magnificent resilience of our constitutional compact and the dangerous complacency that allowed it to be systematically undermined.',
    ],
  },
  retailers: BOOK_RETAILERS,
  status: 'published',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2026-08-31T00:00:00Z',
};
