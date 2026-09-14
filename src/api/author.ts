import { request } from './client';
import { AuthorProfile } from '../types/author';
import { AUTHOR_DATA } from '../data/mock/author';
import { ApiResponse } from '../types/api';

export const getAuthor = async (): Promise<ApiResponse<AuthorProfile>> => {
  return request<AuthorProfile>('/author', { method: 'GET' }, () => AUTHOR_DATA);
};

export const getAuthorProfile = getAuthor;
