import { request } from './client';
import { MediaItem } from '../types/media';
import { MEDIA_ITEMS } from '../data/mock/media';
import { ApiResponse } from '../types/api';

export const getMediaItems = async (): Promise<ApiResponse<MediaItem[]>> => {
  return request<MediaItem[]>('/media', { method: 'GET' }, () => MEDIA_ITEMS);
};
