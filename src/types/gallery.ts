import { BaseContentEntity } from './api';

export type GalleryCategory =
  | 'Profile'
  | 'Personal / Leadership'
  | 'Leadership'
  | 'Training'
  | 'Political Work'
  | 'Public Speaking'
  | 'Book'
  | 'BODHI'
  | 'Archives';

export interface GalleryItem extends Partial<BaseContentEntity> {
  id: string;
  title: string;
  category: GalleryCategory;
  imageId: string;
  image?: string; // fallback direct url
  caption: string;
  year?: string;
  location?: string;
}
