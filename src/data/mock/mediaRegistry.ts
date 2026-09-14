import { MediaRegistryMap, MediaAsset } from '../../types/mediaRegistry';
import portraitImage from '../../assets/images/Rajesh Griglani portrait.png';
import bookCoverImage from '../../assets/images/large.webp';

export const MEDIA_REGISTRY: MediaRegistryMap = {
  rajesh_hero_portrait: {
    id: 'rajesh_hero_portrait',
    url: portraitImage,
    alt: 'Rajesh Bhojraj Griglani — Author, Political Strategist & Leadership Mentor',
    caption: 'Official chiaroscuro portrait of Rajesh Bhojraj Griglani',
    width: 1600,
    height: 2000,
    type: 'image',
    category: 'portrait',
  },
  roots_of_resistance_book: {
    id: 'roots_of_resistance_book',
    url: bookCoverImage,
    alt: 'Roots of Resistance: The Ideological Battle for India\'s Soul by Rajesh Bhojraj Griglani',
    caption: 'Official 3D presentation of Roots of Resistance Hardcover',
    width: 1200,
    height: 1600,
    type: 'image',
    category: 'book_cover',
  },
  roots_of_resistance_mockup: {
    id: 'roots_of_resistance_mockup',
    url: bookCoverImage,
    alt: 'Roots of Resistance Hardcover Edition Mockup',
    caption: 'Official Hardcover Mockup',
    width: 1200,
    height: 1600,
    type: 'image',
    category: 'book_mockup',
  },
  women_grassroots_leaders: {
    id: 'women_grassroots_leaders',
    url: portraitImage,
    alt: 'Women Grassroots Leadership Workshop — All India Mahila Congress',
    caption: 'Capacity-building seminar with district and block coordinators',
    width: 1600,
    height: 1066,
    type: 'image',
    category: 'event',
  },
  political_strategy_briefing: {
    id: 'political_strategy_briefing',
    url: portraitImage,
    alt: 'Strategic War Room & State Blueprint Session',
    caption: 'Analyzing constituency maps, booth matrix telemetry, and cadre deployment architectures',
    width: 1600,
    height: 1066,
    type: 'image',
    category: 'political_work' as any,
  },
};

export const getMediaAsset = (id: string, fallbackUrl?: string): MediaAsset => {
  if (MEDIA_REGISTRY[id]) {
    return MEDIA_REGISTRY[id];
  }
  return {
    id: id || 'unknown',
    url: fallbackUrl || portraitImage,
    alt: 'Rajesh Bhojraj Griglani Media Asset',
    type: 'image',
    category: 'archive',
  };
};

export const getMediaUrl = (id: string, fallbackUrl?: string): string => {
  return getMediaAsset(id, fallbackUrl).url;
};
