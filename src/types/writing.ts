import { BaseContentEntity } from './api';

export type ArticleCategory =
  | 'Politics'
  | 'Democracy'
  | 'Constitution'
  | 'Leadership'
  | 'Political Memory'
  | 'India'
  | 'Grassroots'
  | 'BODHI';

export interface ArticleItem extends Partial<BaseContentEntity> {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  excerpt: string;
  fullContent?: string;
  authorName?: string;
  featuredImageId?: string;
}
