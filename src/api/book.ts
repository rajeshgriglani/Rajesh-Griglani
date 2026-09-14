import { request } from './client';
import { BookDetails, BookExcerpt, BookSampleModalContent } from '../types/book';
import { BOOK_DATA } from '../data/mock/book';
import { ApiResponse } from '../types/api';

export const getBook = async (): Promise<ApiResponse<BookDetails>> => {
  return request<BookDetails>('/book', { method: 'GET' }, () => BOOK_DATA);
};

export const getBookExcerpts = async (): Promise<ApiResponse<BookExcerpt[]>> => {
  return request<BookExcerpt[]>('/book/excerpts', { method: 'GET' }, () => BOOK_DATA.excerpts);
};

export const getBookSample = async (): Promise<ApiResponse<BookSampleModalContent>> => {
  return request<BookSampleModalContent>('/book/sample', { method: 'GET' }, () => BOOK_DATA.sampleContent);
};
