import { request } from './client';
import { ArticleItem } from '../types/writing';
import { ARTICLES_DATA } from '../data/mock/writings';
import { ApiResponse } from '../types/api';

export const getWritings = async (): Promise<ApiResponse<ArticleItem[]>> => {
  return request<ArticleItem[]>('/writings', { method: 'GET' }, () => ARTICLES_DATA);
};

export const getWritingBySlug = async (slug: string): Promise<ApiResponse<ArticleItem>> => {
  return request<ArticleItem>(`/writings/${slug}`, { method: 'GET' }, () => {
    const article = ARTICLES_DATA.find((a) => a.slug === slug || a.id === slug);
    if (!article) {
      throw new Error(`Article '${slug}' not found`);
    }
    return article;
  });
};
