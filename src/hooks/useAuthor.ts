import { useState, useEffect } from 'react';
import { AuthorProfile } from '../types/author';
import { getAuthor } from '../api/author';
import { AUTHOR_DATA } from '../data/mock/author';

export function useAuthor() {
  const [author, setAuthor] = useState<AuthorProfile>(AUTHOR_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAuthor = async () => {
      setIsLoading(true);
      try {
        const res = await getAuthor();
        if (isMounted && res.success && res.data) {
          setAuthor(res.data);
          setError(null);
        } else if (isMounted && res.error) {
          setError(res.error.message);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchAuthor();
    return () => {
      isMounted = false;
    };
  }, []);

  return { author, isLoading, error };
}
