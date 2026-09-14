// Backwards-Compatible Central Data Registry
// Re-exports all structured data from the single source of truth in /src/data/mock/ and /src/types/

export * from '../types';
export { AUTHOR_DATA } from './mock/author';
export { BOOK_DATA, BOOK_DATA as BOOK_DETAILS } from './mock/book';
export { BOOK_RETAILERS, getBookLinksConfig, getEnabledRetailers, getRetailerById } from './mock/retailers';
export { TIMELINE_DATA, STATES_EXPERIENCE } from './mock/journey';
export {
  BODHI_DATA,
  BODHI_PILLARS,
  BODHI_CAPABILITIES,
  WOMEN_LEADERSHIP_STATES,
  STRATEGY_AREAS,
} from './mock/bodhi';
export { ARTICLES_DATA } from './mock/writings';
export { MEDIA_ITEMS } from './mock/media';
export { GALLERY_ITEMS } from './mock/gallery';
export { MEDIA_REGISTRY, getMediaAsset, getMediaUrl } from './mock/mediaRegistry';
export { FAQ_DATA } from './mock/faq';
export { SEO_DATA, generateStructuredDataJson } from './mock/seo';
export { siteContent } from './mock/site';

import { BOOK_RETAILERS, getBookLinksConfig } from './mock/retailers';
import { AUTHOR_DATA } from './mock/author';
import { BOOK_DATA } from './mock/book';
import { BookLinksConfig, BookRetailerItem } from '../types/retailer';

// Backwards-compatibility aliases
export type RetailerLink = BookRetailerItem;
export const BOOK_LINKS: BookLinksConfig = getBookLinksConfig();
export const BOOK_LINKS_CONFIG: BookLinksConfig = getBookLinksConfig();
export const SOCIAL_LINKS = AUTHOR_DATA.socialLinks;
export const SOCIAL_LINKS_CONFIG = AUTHOR_DATA.socialLinks;
export const BOOK_EXCERPTS = BOOK_DATA.excerpts;
