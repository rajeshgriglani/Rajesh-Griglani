import { useState, useEffect } from 'react';
import { GlobalContentRegistry } from '../types/site';
import { getSiteConfig } from '../api/site';
import { siteContent as fallbackContent } from '../data/mock/site';

export function useSiteContent() {
  const [content, setContent] = useState<GlobalContentRegistry>(fallbackContent);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        const res = await getSiteConfig();
        if (isMounted && res.success && res.data) {
          setContent(res.data);
          setError(null);
        } else if (isMounted && res.error) {
          setError(res.error.message);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Failed to load site content');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchContent();
    return () => {
      isMounted = false;
    };
  }, []);

  return { content, isLoading, error };
}
