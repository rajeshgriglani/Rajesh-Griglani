// API Response and Error Contracts

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message?: string | null;
  error?: ApiErrorDetails | null;
  meta?: ApiMetadata | null;
}

export interface ApiErrorDetails {
  code: string;
  message: string;
  details?: Record<string, unknown> | null;
}

export interface ApiMetadata {
  timestamp: string;
  version: string;
  requestId?: string;
  pagination?: PaginationMeta;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationMeta;
}

export type ContentStatus = 'draft' | 'published' | 'archived';

export interface BaseContentEntity {
  id: string;
  slug?: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}
