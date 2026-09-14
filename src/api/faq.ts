import { request } from './client';
import { FaqItem } from '../types/faq';
import { FAQ_DATA } from '../data/mock/faq';
import { ApiResponse } from '../types/api';

export const getFaqs = async (): Promise<ApiResponse<FaqItem[]>> => {
  return request<FaqItem[]>('/faq', { method: 'GET' }, () => FAQ_DATA);
};
