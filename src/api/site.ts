import { request } from './client';
import { GlobalContentRegistry } from '../types/site';
import { siteContent } from '../data/mock/site';
import { ApiResponse } from '../types/api';

export const getSiteConfig = async (): Promise<ApiResponse<GlobalContentRegistry>> => {
  return request<GlobalContentRegistry>('/site/config', { method: 'GET' }, () => siteContent);
};
