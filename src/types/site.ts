import { AuthorProfile } from './author';
import { BookDetails } from './book';
import { TimelineItem, StateExperience } from './journey';
import { BodhiSectionData } from './bodhi';
import { ArticleItem } from './writing';
import { MediaItem } from './media';
import { GalleryItem } from './gallery';
import { BookRetailerItem, BookLinksConfig } from './retailer';
import { FaqItem } from './faq';
import { SeoMetadata } from './seo';
import { MediaRegistryMap } from './mediaRegistry';

export interface SiteBrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  copyrightText: string;
  canonicalDomain: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  badge?: string;
}

export interface GlobalContentRegistry {
  site: SiteBrandConfig;
  author: AuthorProfile;
  book: BookDetails;
  journey: {
    title: string;
    subtitle: string;
    timeline: TimelineItem[];
    statesExperience: StateExperience[];
  };
  bodhi: BodhiSectionData;
  writings: {
    title: string;
    subtitle: string;
    articles: ArticleItem[];
  };
  media: {
    title: string;
    subtitle: string;
    items: MediaItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    items: GalleryItem[];
  };
  retailers: {
    list: BookRetailerItem[];
    config: BookLinksConfig;
  };
  mediaRegistry: MediaRegistryMap;
  faq: FaqItem[];
  seo: SeoMetadata;
  navigation: {
    mainNav: NavigationLink[];
    footerNav: NavigationLink[];
  };
}
