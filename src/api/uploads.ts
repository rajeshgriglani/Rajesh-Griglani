import { request } from './client';
import { MediaAsset } from '../types/mediaRegistry';
import { UploadImageOptions, UploadResponse } from '../types/upload';
import { MEDIA_REGISTRY, getMediaAsset } from '../data/mock/mediaRegistry';
import { ApiResponse } from '../types/api';

export const getMediaAssets = async (): Promise<ApiResponse<MediaAsset[]>> => {
  return request<MediaAsset[]>('/media-assets', { method: 'GET' }, () =>
    Object.values(MEDIA_REGISTRY)
  );
};

export const getMediaAssetById = async (id: string): Promise<ApiResponse<MediaAsset>> => {
  return request<MediaAsset>(`/media-assets/${id}`, { method: 'GET' }, () =>
    getMediaAsset(id)
  );
};

export const uploadMediaAsset = async (
  file: File,
  options: UploadImageOptions
): Promise<ApiResponse<UploadResponse>> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('category', options.category);
  if (options.altText) formData.append('altText', options.altText);
  if (options.caption) formData.append('caption', options.caption);
  if (options.customId) formData.append('customId', options.customId);

  return request<UploadResponse>(
    '/media-assets/upload',
    {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set multipart boundary
    },
    async () => {
      // Mock upload handler creating an object URL
      const id = options.customId || `asset_${Date.now()}`;
      const objectUrl = URL.createObjectURL(file);
      const newAsset: MediaAsset = {
        id,
        url: objectUrl,
        alt: options.altText || file.name,
        caption: options.caption,
        type: 'image',
        category: options.category,
        mimeType: file.type,
      };

      // Register in local runtime map
      MEDIA_REGISTRY[id] = newAsset;

      return {
        asset: newAsset,
        uploadUrl: objectUrl,
      };
    }
  );
};

export const deleteMediaAsset = async (id: string): Promise<ApiResponse<{ deleted: boolean }>> => {
  return request<{ deleted: boolean }>(`/media-assets/${id}`, { method: 'DELETE' }, () => {
    if (MEDIA_REGISTRY[id]) {
      delete MEDIA_REGISTRY[id];
    }
    return { deleted: true };
  });
};
