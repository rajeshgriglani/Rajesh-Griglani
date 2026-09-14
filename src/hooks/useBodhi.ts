import { useState, useEffect } from 'react';
import { BodhiSectionData } from '../types/bodhi';
import { getBodhiSection } from '../api/bodhi';
import { BODHI_DATA } from '../data/mock/bodhi';

export function useBodhi() {
  const [bodhi, setBodhi] = useState<BodhiSectionData>(BODHI_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchBodhi = async () => {
      setIsLoading(true);
      try {
        const res = await getBodhiSection();
        if (isMounted && res.success && res.data) {
          setBodhi(res.data);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchBodhi();
    return () => {
      isMounted = false;
    };
  }, []);

  return { bodhi, isLoading, error };
}
