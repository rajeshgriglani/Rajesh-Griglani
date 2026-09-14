export interface SeoMetadata {
  siteName: string;
  title: string;
  titleTemplate?: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  twitterImage: string;
  twitterHandle?: string;
  author: string;
  locale?: string;
  type?: string;
}

export interface PageSeoConfig {
  home: SeoMetadata;
  about: Partial<SeoMetadata>;
  journey: Partial<SeoMetadata>;
  book: Partial<SeoMetadata>;
  writings: Partial<SeoMetadata>;
  media: Partial<SeoMetadata>;
  bodhi: Partial<SeoMetadata>;
  contact: Partial<SeoMetadata>;
}
