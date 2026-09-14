import { GlobalContentRegistry } from '../../types/site';
import { AUTHOR_DATA } from './author';
import { BOOK_DATA } from './book';
import { BOOK_RETAILERS, getBookLinksConfig } from './retailers';
import { TIMELINE_DATA, STATES_EXPERIENCE } from './journey';
import { BODHI_DATA } from './bodhi';
import { ARTICLES_DATA } from './writings';
import { MEDIA_ITEMS } from './media';
import { GALLERY_ITEMS } from './gallery';
import { MEDIA_REGISTRY } from './mediaRegistry';
import { FAQ_DATA } from './faq';
import { SEO_DATA } from './seo';

export const siteContent: GlobalContentRegistry = {
  site: {
    name: AUTHOR_DATA.name,
    shortName: AUTHOR_DATA.shortName,
    tagline: AUTHOR_DATA.designation,
    copyrightText: `© ${new Date().getFullYear()} ${AUTHOR_DATA.name}. All rights reserved.`,
    canonicalDomain: 'rajeshgriglani.com',
  },
  author: AUTHOR_DATA,
  book: BOOK_DATA,
  journey: {
    title: 'CHRONOLOGY OF INFLUENCE',
    subtitle: 'From Porbandar to National Strategy & Literary Resistance',
    timeline: TIMELINE_DATA,
    statesExperience: STATES_EXPERIENCE,
  },
  bodhi: BODHI_DATA,
  writings: {
    title: 'ESSAYS & IDEOLOGICAL PAPERS',
    subtitle: 'Reflections on secularism, cadre pedagogy, and democratic survival',
    articles: ARTICLES_DATA,
  },
  media: {
    title: 'MEDIA & DIALOGUES',
    subtitle: 'Interviews, speeches, reviews, and political commentary',
    items: MEDIA_ITEMS,
  },
  gallery: {
    title: 'DOCUMENTARY ARCHIVES',
    subtitle: 'Visual records of political organization, training, and authorship',
    items: GALLERY_ITEMS,
  },
  retailers: {
    list: BOOK_RETAILERS,
    config: getBookLinksConfig(),
  },
  mediaRegistry: MEDIA_REGISTRY,
  faq: FAQ_DATA,
  seo: SEO_DATA,
  navigation: {
    mainNav: [
      { label: 'About', href: '#about' },
      { label: 'My Journey', href: '#journey' },
      { label: 'The Book', href: '#book' },
      { label: 'BODHI', href: '#bodhi' },
      { label: 'Writings', href: '#writings' },
      { label: 'Media', href: '#media' },
      { label: 'Contact', href: '#contact' },
    ],
    footerNav: [
      { label: 'About Rajesh', href: '#about' },
      { label: 'Chronology', href: '#journey' },
      { label: 'Roots of Resistance', href: '#book' },
      { label: 'BODHI Institute', href: '#bodhi' },
      { label: 'Writings', href: '#writings' },
      { label: 'Media & Press', href: '#media' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Ask Anything', href: '#ask-anything' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
