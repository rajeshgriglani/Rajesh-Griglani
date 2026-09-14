import { useState, useEffect } from 'react';
import { BookDetails } from '../types/book';
import { getBook } from '../api/book';
import { BOOK_DATA } from '../data/mock/book';

export function useBook() {
  const [book, setBook] = useState<BookDetails>(BOOK_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchBook = async () => {
      setIsLoading(true);
      try {
        const res = await getBook();
        if (isMounted && res.success && res.data) {
          setBook(res.data);
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

    fetchBook();
    return () => {
      isMounted = false;
    };
  }, []);

  return { book, isLoading, error };
}
