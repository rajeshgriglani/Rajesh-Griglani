import { useState, useEffect } from 'react';
import { BookRetailerItem, BookLinksConfig } from '../types/retailer';
import { getActiveRetailers, getRetailerConfig } from '../api/retailers';
import { BOOK_RETAILERS, getBookLinksConfig } from '../data/mock/retailers';

export function useRetailers() {
  const [retailers, setRetailers] = useState<BookRetailerItem[]>(
    BOOK_RETAILERS.filter((r) => r.enabled)
  );
  const [config, setConfig] = useState<BookLinksConfig>(getBookLinksConfig());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchRetailers = async () => {
      setIsLoading(true);
      try {
        const [activeRes, configRes] = await Promise.all([
          getActiveRetailers(),
          getRetailerConfig(),
        ]);

        if (isMounted) {
          if (activeRes.success && activeRes.data) {
            setRetailers(activeRes.data);
          }
          if (configRes.success && configRes.data) {
            setConfig(configRes.data);
          }
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchRetailers();
    return () => {
      isMounted = false;
    };
  }, []);

  return { retailers, config, isLoading, error };
}
