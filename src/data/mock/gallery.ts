import { GalleryItem } from '../../types/gallery';
import { getMediaUrl } from './mediaRegistry';

const curatedItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Author Portrait',
    category: 'Profile',
    imageId: 'rajesh_hero_portrait',
    image: getMediaUrl('rajesh_hero_portrait'),
    caption: 'Rajesh Bhojraj Griglani — Author, Political Strategist & Leadership Mentor.',
    year: '2020',
    status: 'published',
  },
  {
    id: 'gal-2',
    title: 'Roots of Resistance Hardcover Presentation',
    category: 'Book',
    imageId: 'roots_of_resistance_book',
    image: getMediaUrl('roots_of_resistance_book'),
    caption: 'Official 3D presentation of Roots of Resistance: The Ideological Battle for India\'s Soul.',
    year: '2026',
    status: 'published',
  },
  {
    id: 'gal-4',
    title: 'Strategic War Room & State Blueprint Session',
    category: 'Political Work',
    imageId: 'political_strategy_briefing',
    image: getMediaUrl('political_strategy_briefing'),
    caption: 'Analyzing constituency maps, booth matrix telemetry, and cadre deployment architectures.',
    year: '2025',
    status: 'published',
  },
  {
    id: 'gal-5',
    title: 'BODHI Institutional Pedagogy Forum',
    category: 'BODHI',
    imageId: 'political_strategy_briefing',
    image: getMediaUrl('political_strategy_briefing'),
    caption: 'Delivering the Instinct, Intellect & Intuition masterclass for senior organizers.',
    year: '2025',
    status: 'published',
  },
  {
    id: 'gal-6',
    title: 'Public Address on Constitutional Safeguards',
    category: 'Public Speaking',
    imageId: 'women_grassroots_leaders',
    image: getMediaUrl('women_grassroots_leaders'),
    caption: 'Keynote lecture on preserving democratic memory in modern India.',
    year: '2024',
    status: 'published',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = curatedItems;
