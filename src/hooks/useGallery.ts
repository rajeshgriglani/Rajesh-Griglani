import { useState, useEffect } from 'react';
import { GalleryItem } from '../types/gallery';
import { getGalleryItems } from '../api/gallery';
import { GALLERY_ITEMS } from '../data/mock/gallery';

export function useGallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchGallery = async () => {
      setIsLoading(true);
      try {
        const res = await getGalleryItems();
        if (isMounted && res.success && res.data?.length) {
          setGalleryItems(res.data);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchGallery();
    return () => {
      isMounted = false;
    };
  }, []);

  return { galleryItems, isLoading, error };
}
