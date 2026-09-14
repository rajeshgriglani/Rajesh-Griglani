import { BaseContentEntity } from './api';

export type MediaType = 'interview' | 'podcast' | 'press' | 'speech' | 'event';

export interface MediaItem extends Partial<BaseContentEntity> {
  id: string;
  type: MediaType;
  platform: string;
  date: string;
  title: string;
  description: string;
  linkUrl: string;
  actionText: string;
  thumbnailImageId?: string;
}
