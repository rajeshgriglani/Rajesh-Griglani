// Centralized Media Asset & Registry Types

export type MediaAssetCategory =
  | 'portrait'
  | 'book_cover'
  | 'book_mockup'
  | 'gallery'
  | 'archive'
  | 'event'
  | 'social'
  | 'branding';

export interface MediaAsset {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  type: 'image' | 'video' | 'document';
  category: MediaAssetCategory;
  mimeType?: string;
  blurDataUrl?: string;
}

export type MediaRegistryMap = Record<string, MediaAsset>;
