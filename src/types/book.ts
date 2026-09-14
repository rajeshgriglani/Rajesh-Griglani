import { BaseContentEntity } from './api';
import { BookRetailerItem } from './retailer';

export interface BookExcerpt {
  id: string;
  title: string;
  subtitle: string;
  chapterNumber?: number;
  content: string;
}

export interface BookChapter {
  number: number;
  title: string;
  synopsis: string;
}

export interface BookSampleModalContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface BookDetails extends Partial<BaseContentEntity> {
  id: string;
  title: string;
  subtitle: string;
  fullTitle: string;
  author: string;
  authorId: string;
  genre: string;
  format: string;
  pages?: number;
  language: string;
  isbn?: string;
  publisher: string;
  publicationDate: string;
  coverImageId: string;
  mockupImageId: string;
  tagline: string;
  coreQuote: string;
  primaryDescription: string;
  extendedOverview: string;
  themes: {
    title: string;
    description: string;
  }[];
  chapters: BookChapter[];
  excerpts: BookExcerpt[];
  sampleContent: BookSampleModalContent;
  retailers: BookRetailerItem[];
}
