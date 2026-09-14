import { useState, useCallback } from 'react';
import { MediaAsset } from '../types/mediaRegistry';
import { UploadImageOptions, ImageUploadProgress } from '../types/upload';
import { uploadMediaAsset, deleteMediaAsset } from '../api/uploads';
import { getMediaAsset, getMediaUrl } from '../data/mock/mediaRegistry';

export function useImageUpload() {
  const [uploadStatus, setUploadStatus] = useState<ImageUploadProgress>({
    progress: 0,
    status: 'idle',
  });
  const [uploadedAsset, setUploadedAsset] = useState<MediaAsset | null>(null);

  const upload = useCallback(async (file: File, options: UploadImageOptions) => {
    setUploadStatus({ progress: 10, status: 'uploading' });

    try {
      setUploadStatus({ progress: 50, status: 'processing' });
      const res = await uploadMediaAsset(file, options);

      if (res.success && res.data) {
        setUploadStatus({ progress: 100, status: 'success' });
        setUploadedAsset(res.data.asset);
        return res.data.asset;
      } else {
        const errorMsg = res.error?.message || 'Failed to upload image asset';
        setUploadStatus({ progress: 0, status: 'error', errorMessage: errorMsg });
        return null;
      }
    } catch (err: any) {
      setUploadStatus({ progress: 0, status: 'error', errorMessage: err.message });
      return null;
    }
  }, []);

  const remove = useCallback(async (id: string) => {
    try {
      await deleteMediaAsset(id);
      return true;
    } catch {
      return false;
    }
  }, []);

  const resolveImage = useCallback((imageId: string, fallbackUrl?: string) => {
    return getMediaAsset(imageId, fallbackUrl);
  }, []);

  const resolveImageUrl = useCallback((imageId: string, fallbackUrl?: string) => {
    return getMediaUrl(imageId, fallbackUrl);
  }, []);

  return {
    upload,
    remove,
    resolveImage,
    resolveImageUrl,
    uploadStatus,
    uploadedAsset,
  };
}
