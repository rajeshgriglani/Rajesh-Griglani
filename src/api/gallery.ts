import { request } from './client';
import { GalleryItem } from '../types/gallery';
import { GALLERY_ITEMS } from '../data/mock/gallery';
import { ApiResponse } from '../types/api';

export const getGalleryItems = async (): Promise<ApiResponse<GalleryItem[]>> => {
  return request<GalleryItem[]>('/gallery', { method: 'GET' }, () => GALLERY_ITEMS);
};
