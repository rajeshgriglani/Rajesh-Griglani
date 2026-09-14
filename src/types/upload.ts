import { MediaAsset, MediaAssetCategory } from './mediaRegistry';

export interface UploadImageOptions {
  category: MediaAssetCategory;
  altText?: string;
  caption?: string;
  customId?: string;
}

export interface ImageUploadProgress {
  progress: number; // 0 to 100
  status: 'idle' | 'uploading' | 'processing' | 'success' | 'error';
  errorMessage?: string;
}

export interface UploadResponse {
  asset: MediaAsset;
  uploadUrl?: string;
}
