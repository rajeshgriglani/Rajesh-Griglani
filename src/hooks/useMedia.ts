import { useState, useEffect } from 'react';
import { MediaItem } from '../types/media';
import { getMediaItems } from '../api/media';
import { MEDIA_ITEMS } from '../data/mock/media';

export function useMedia() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(MEDIA_ITEMS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchMedia = async () => {
      setIsLoading(true);
      try {
        const res = await getMediaItems();
        if (isMounted && res.success && res.data) {
          setMediaItems(res.data);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchMedia();
    return () => {
      isMounted = false;
    };
  }, []);

  return { mediaItems, isLoading, error };
}
