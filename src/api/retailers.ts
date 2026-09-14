import { request } from './client';
import { BookRetailerItem, BookLinksConfig } from '../types/retailer';
import { BOOK_RETAILERS, getBookLinksConfig, getRetailerById as findRetailer } from '../data/mock/retailers';
import { ApiResponse } from '../types/api';

export const getRetailers = async (): Promise<ApiResponse<BookRetailerItem[]>> => {
  return request<BookRetailerItem[]>('/retailers', { method: 'GET' }, () => BOOK_RETAILERS);
};

export const getActiveRetailers = async (): Promise<ApiResponse<BookRetailerItem[]>> => {
  return request<BookRetailerItem[]>('/retailers/active', { method: 'GET' }, () =>
    BOOK_RETAILERS.filter((r) => r.enabled)
  );
};

export const getRetailerById = async (id: string): Promise<ApiResponse<BookRetailerItem>> => {
  return request<BookRetailerItem>(`/retailers/${id}`, { method: 'GET' }, () => {
    const retailer = findRetailer(id);
    if (!retailer) {
      throw new Error(`Retailer with ID '${id}' not found`);
    }
    return retailer;
  });
};

export const getRetailerConfig = async (): Promise<ApiResponse<BookLinksConfig>> => {
  return request<BookLinksConfig>('/retailers/config', { method: 'GET' }, () => getBookLinksConfig());
};
