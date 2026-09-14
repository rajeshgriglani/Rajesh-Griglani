import { GalleryItem } from '../types/gallery';

const discoveredGalleryImages = import.meta.glob<string>(
  '../assets/Gallery/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default', query: '?url' },
);

const titleFromFilename = (filename: string) => filename
  .replace(/\.[^.]+$/, '')
  .replace(/[-_]+/g, ' ')
  .trim();

const galleryMetadata: Record<string, Pick<GalleryItem, 'title' | 'category' | 'caption' | 'year'>> = {
  'Door-to-Door Campaign — Goa.jpg': {
    title: 'Door-to-Door Campaign — Goa',
    category: 'Political Work',
    year: '2017',
    caption: 'Drawing on 15 years of election experience, championing the “Hit the Street” approach and grassroots door-to-door outreach as the most effective path to building voter connect and winning elections.',
  },
  'GOA RAJESH Griglani.jpg': {
    title: 'Booth Management Training — Sanvordem Assembly',
    category: 'Political Work',
    year: '2017',
    caption: 'Training and capacity-building for booth-level teams, focused on grassroots election management and constituency-level organization in Goa.',
  },
  'Gujarat Mahila Congress — Vichar Satra.jpg': {
    title: 'Gujarat Mahila Congress — Vichar Satra',
    category: 'Political Work',
    year: '2017',
    caption: 'A women-led dialogue on freedom, equality, justice, and solidarity, organized by the Gujarat Pradesh Mahila Congress Committee.',
  },
  'Booth Manager Training — Mahuva, Bhavnagar.jpg': {
    title: 'Booth Manager Training — Mahuva, Bhavnagar',
    category: 'Political Work',
    year: '2012',
    caption: 'Training booth managers in Mahuva Assembly Constituency, Bhavnagar, focused on strengthening booth-level organization, voter outreach, and grassroots election management.',
  },
  'Youth Leadership Workshop — Maharashtra.jpg': {
    title: 'Youth Leadership Workshop — Maharashtra',
    category: 'Political Work',
    year: '2011',
    caption: 'Speaking at the Indian Youth Congress “Yuva Drishti 2011” workshop, focused on developing booth-level leadership and strengthening grassroots organizational capacity.',
  },
  'Mahila Congress Team Building — Bharuch.jpg': {
    title: 'Mahila Congress Team Building — Bharuch',
    category: 'Political Work',
    year: '2012',
    caption: 'Strengthening the Mahila Congress team in Bharuch through grassroots leadership development, team building, and stronger ground-level organizational work.',
  },
  'Guard of Honour — Sainik School Balachadi.jpg': {
    title: 'Guard of Honour — Sainik School Balachadi',
    category: 'Personal / Leadership',
    year: '1989–90',
    caption: 'Giving a Guard of Honour to a dignitary from Poland at Sainik School Balachadi, reflecting the discipline, leadership, and ceremonial traditions instilled during the school years.',
  },
  'Youth Leadership Training — Dharavi.jpg': {
    title: 'Youth Leadership Training — Dharavi',
    category: 'Training',
    year: '2013',
    caption: 'Engaging with Dharavi’s youth through inclusive grassroots training, breaking barriers of discrimination and nurturing a new generation of community leaders ready to take the baton forward.',
  },
  'Leadership Development Training — Rajasthan.jpg': {
    title: 'Leadership Development Training — Rajasthan',
    category: 'Training',
    year: '2013',
    caption: 'Training young students in leadership development, empowering them with confidence, teamwork, responsibility, and the skills to become future leaders.',
  },
  'Youth Leadership Workshop — Rajasthan.jpg': {
    title: 'Youth Leadership Workshop — Rajasthan',
    category: 'Training',
    year: '2013',
    caption: 'Facilitating an Indian Youth Congress leadership workshop in Rajasthan, focused on developing young leaders through grassroots training, organizational skills, and leadership development.',
  },
  'National Level Master Coach Certification.jpg': {
    title: 'National Level Master Coach Certification',
    category: 'Leadership',
    year: '2013',
    caption: 'Receiving the National Level Master Coach Certificate from Shri Jitendarsinh Bhanwar, then Minister of State for Youth Affairs & Sports and Minister of State for Defence, Government of India, recognizing leadership and training capabilities at the national level.',
  },
  'Gujarat Congress Master Trainers — Training Programme.jpg': {
    title: 'Gujarat Congress Master Trainers — Training Programme',
    category: 'Training',
    year: '2013',
    caption: 'Facilitated by Shri Ahmed Patel in recognition of training and developing Gujarat Congress Master Trainers, strengthening the state-level leadership and training network.',
  },
  'State-Level Workshop — Gujarat Congress.jpg': {
    title: 'State-Level Workshop — Gujarat Congress',
    category: 'Training',
    year: '2013',
    caption: 'Conducting a state-level workshop for Gujarat Congress coordinators, focused on leadership development, organizational training, and strengthening coordination across the grassroots network.',
  },
};

export const DISCOVERED_GALLERY_ITEMS: GalleryItem[] = Object.entries(discoveredGalleryImages).map(([path, image], index) => {
  const filename = path.split('/').pop() || `gallery-image-${index + 1}`;
  const metadata = galleryMetadata[filename];
  const title = metadata?.title || titleFromFilename(filename);

  return {
    id: `gallery-${filename.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    title,
    category: metadata?.category || 'Archives',
    imageId: filename,
    image,
    year: metadata?.year,
    caption: metadata?.caption || title,
    status: 'published',
  };
});