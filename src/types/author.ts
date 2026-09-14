import { BaseContentEntity } from './api';

export interface EducationItem {
  id?: string;
  period: string;
  institution: string;
  degree?: string;
  details?: string;
  linkUrl?: string;
}

export interface AuthorProfile extends Partial<BaseContentEntity> {
  id: string;
  name: string;
  preferredName: string;
  shortName: string;
  birthDate: string;
  birthPlace: string;
  designation: string;
  titles: string[];
  eyebrow: string;
  primaryQuote: string;
  heroSupportingText: string;
  portraitImageId: string;
  bioNarrative: string[];
  education: EducationItem[];
  contactEmail: string;
  officialPhone: string;
  location: string;
  lineage: string;
  socialLinks: SocialLinksConfig;
}

export interface SocialLinksConfig {
  twitter: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  imdb: string;
  whatsappChannel: string;
  telegram: string;
}
