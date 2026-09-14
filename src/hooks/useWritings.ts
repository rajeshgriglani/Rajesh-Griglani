import { useState, useEffect } from 'react';
import { ArticleItem } from '../types/writing';
import { getWritings } from '../api/writings';
import { ARTICLES_DATA } from '../data/mock/writings';

export function useWritings() {
  const [writings, setWritings] = useState<ArticleItem[]>(ARTICLES_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchWritings = async () => {
      setIsLoading(true);
      try {
        const res = await getWritings();
        if (isMounted && res.success && res.data) {
          setWritings(res.data);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchWritings();
    return () => {
      isMounted = false;
    };
  }, []);

  return { writings, isLoading, error };
}
